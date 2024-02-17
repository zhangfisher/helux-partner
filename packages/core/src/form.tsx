/**
 *
 * const MyComponent = ()=>{
 *
 * // 用来保存表单数据
 * const Book = useFrom({
 *          name:"书籍名称"
 *          author:{
 *              value:0,
 *              default:10,
 *              visible:(book)=>{},
 *              enable:(book)=>{},
 *              validate:(book)=>{},
 *              enum:async (book)=>{}
 *          },
 *          category:async((book)=>{
 *              return await getBookCategorys()
 *          }),
 *          price:100
 * })
 *
 *
 * return (
 *      <Book.Form>
 *          <Book.Field name={Book.name}>
 *              {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Book.Field>
 *          <Book.Field name={newBook.state.price}>
 *               {({value,enable,visible,default})=>{
 *                  return <input value={value}/>
 *              }}
 *          </Book.Field>
 *      </Book.Form>
 *   )
 * }
 *
 */

import React, {	useCallback } from "react";
import { type StoreSchema, createStore,RequiredComputedState, ComputedScopeRef, ComputedOptions, Dict } from "@speedform/reactive";
import type { ReactFC,  ComputedAttr } from "./types";
import { FieldComponent, createFieldComponent  } from './field'; 
import { FieldGroupComponent, createFieldGroupComponent } from "./fieldGroup";
import { assignObject } from "flex-tools/object/assignObject";
import { FormActions,  createActionComponent, getAction } from './action';
import { FIELDS_STATE_KEY } from "./consts";
import { defaultObject } from "flex-tools/object/defaultObject";
import { createObjectProxy } from "./utils";
import defaultFormProps from "./form.default"
import { createSubmitComponent,createResetComponent } from "./behaviors";



export type FormEnctypeType = 'application/x-www-form-urlencoded' | 'multipart/form-data' | 'text/plain'

export type FormTarget = '_self' | '_blank' | '_parent' | '_top'


export type FormProps<State extends Dict = Dict> = React.PropsWithChildren<{		
	name?:string;													// 表单名称,同时表示表单作用域，即提交范围，默认是整个表单fields		
	enctype?:FormEnctypeType;										// 表单加密方式			
	method?: 'get' | 'post' | 'dialog'  							// 表单提交方式
	action?: string;												// 表单提交地址
	onSubmit?: (value: RequiredComputedState<State>) => void;
	onReset?: (value: RequiredComputedState<State>) => void;
}>;


// 表单组件
export type FormComponent<State extends Record<string, any>> = ReactFC<FormProps<State>>;

// 表单对象
export interface FormObject<State extends Record<string, any>> {
	Form: FormComponent<State>;
	Field: FieldComponent;
	Group: FieldGroupComponent
  	fields:State
	actions:FormActions,
	submit:()=>void
	reset:()=>{}
	load:(data:Dict)=>void							// 加载表单数据 
}

// 表单元数据
export interface FormSchemaBase{
	title:string					    
    help:string					    
    tips:string					    
 	visible:boolean					
	enable:boolean					
	validate:boolean					
	readonly:boolean			
	dirty:boolean					
}

export type FormSchema<State extends Dict=Dict> = State & Omit<FormSchemaBase,keyof State>

// 创建表单时的参数
export interface FormOptions{
	debug?:boolean										// 是否调试模式
	/**
	 * 何时进行数据验证
	 * - once : 实时校验 
	 * - lost-focus : 失去焦点时校验 
	 * - submit : 提交时校验
	 */
	validAt?: 'once' | 'lost-focus' | 'submit'	
	/**
	* 用来生成字段名，如果不指定，则使用默认的字段名生成规则
	* 默认的字段名生成规则是: 字段名 = 字段路径.join('.'),
	* 当字段名称含有.时，可能会有岐义,此时可以自行更改字段名称规则
	* @param valuePath 
	* @returns  {string}
	*/
	getFieldName?:(valuePath:string[])=>string,
	singleton?:boolean
}



export type FormStatus = 'idle' 
	| 'loading'				// 正在加载数据
	| 'validating' 			// 正在校验数据
	| 'submiting'  			// 正在提交中	
	| 'error'				// 表单错误
 


/**
 * 
 * 表单状态数据==响应式数据
 * 
 */
export interface FormState<Fields extends Dict = Dict,Actions extends Dict = Dict>{
	name?:string,										// 表单名称
	title?:ComputedAttr<string>,						// 表单标题
	status?	: ComputedAttr<FormStatus>					// 表单状态
	dirty?  : ComputedAttr<boolean>						// 表单数据是否已脏，即已更新过
	valid?  : ComputedAttr<boolean>						// 表单是否有效
	actions	: Actions									// 表单动作
	fields	: Fields
	[key:string] : any
}

/**
 * 对表单字段中的validator属性进行处理,使用该属性的传入参数总是当前字段的值
 * 
 * 经过处理后
 * 
 * 如果validator是由computed函数创建的,由于computed函数可以指定依赖和计算上下文,有较强的自由度,因此不做任何处理
 * 仅当validator不是由computed函数创建时
 * 
 * 处理方式:
 *  - 同步计算函数的scope指向当前字段值
 *  - 异步函数的第一个依赖指向当前字段的值value
 * 
 */
function createValidatorHook(keyPath:string[],getter:Function,options:ComputedOptions){		
	if(keyPath.length>=2 && keyPath[0]==FIELDS_STATE_KEY && keyPath[keyPath.length-1]=='validate'){	
		// 如果没有指定scope,则默认指向value
		if(!options.scope) options.scope="value"
		if(!options.depends) options.depends=[]
		options.depends.push([...keyPath.slice(0,-1),"value"])
		options.initial = true		// 默认总是true
	}
}


/**
 *  设置表单默认属性
 * 	title?:ComputedAttr<string>					    // 动作标题    
    help?:ComputedAttr<string>					    // 动作帮助
    tips?:ComputedAttr<string>					    // 动作提示
 	visible?:ComputedAttr<boolean>					// 是否可见
	enable?:ComputedAttr<boolean>					// 是否可用		
	valid?:ComputedAttr<boolean>					// 是否有效
	readonly?:ComputedAttr<boolean>				    // 是否只读	  
 * @param define 
 */
function setFormDefault(define:any){
	defaultObject(define,defaultFormProps) 
}


 
/**
 * 我们约定，每一个动作均由一个{execute:computed(async ()=>{})}对象来描述
 * 
 * 并且对其行为进行了一些约定
 * 
 * - immediate=false : 不会自动执行,需要手动调用action.execute.run()来执行
 * - 让scope默认指向fields,这样就可以直接使用fields下的字段,而不需要fields前缀
 * 
 */
function createActionHook(valuePath:string[],getter:Function,options:ComputedOptions){
	if(valuePath.length>1 && valuePath[valuePath.length-1]=='execute'){
		options.immediate = false			// 默认不自动执行,需要手动调用action.execute.run()来执行
		options.scope = [FIELDS_STATE_KEY]	// 默认指向fields
		options.noReentry = true			// 禁止重入
	}
}
/**
 *  对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
 * @param valuePath 
 * @param getter 
 * @param options 
 */
function createDepsHook(valuePath:string[],getter:Function,options:ComputedOptions){
	if(valuePath.length > 0 && valuePath[0]==FIELDS_STATE_KEY && options.depends){ 
		options.depends.forEach((depend,i)=>{
			if(Array.isArray(depend) && (depend.length>0 && depend[0]!=FIELDS_STATE_KEY)){
				options.depends![i] = [FIELDS_STATE_KEY,...depend]
			}else if(typeof(depend)=='string' && !depend.startsWith(`${FIELDS_STATE_KEY}.`)){
				options.depends![i] = `${FIELDS_STATE_KEY}.${depend}`
			}
		})
	}
}


export function createForm<State extends Dict=FormSchema>(define: State,options?:FormOptions) {
	const opts = assignObject({
		getFieldName:(valuePath:string[])=>valuePath.length > 0 ? valuePath[valuePath.length-1]==='value' ? valuePath.slice(0,-1).join(".") : valuePath.join(".") : '',
		singleton:true
	},options) as Required<FormOptions>

	// 注入表单默认属性
	setFormDefault(define)  
	
	// 创建表单Store对象实例
	const store = createStore<StoreSchema<FormSchema<State>>>({state:define as FormSchema<State>},{
		debug:opts.debug,
		singleton:opts.singleton,
		// 所有计算函数的上下文均指向根
		computedThis: ComputedScopeRef.Root,
		// 计算函数作用域默认指向fields
		computedScope: [FIELDS_STATE_KEY],
		// 创建计算函数时的钩子函数，可以在创建前做一些不可描述的处理
		onCreateComputed(valuePath,getter,options) {		 
			// 1. 只对validator进行处理,目的是使validate函数依赖于当前字段的值value，将使得validate函数的第一个参数总是当前字段的值
			createValidatorHook(valuePath,getter,options)
			// 2. 对所有位于fields下的的依赖均自动添加fields前缀，这样在声明依赖时就可以省略fields前缀
			createDepsHook(valuePath,getter,options)
			// 3. 将表单actions的execute的onComputedResult指向其current
			createActionHook(valuePath,getter,options)
		},
		onComputedContext(draft,{type,valuePath}){
			// 修改fields下的所有计算函数的作用域根，使之总是指向fields开头
			// 这样可以保证在计算函数中,当scope->Root时，总是指向fields，否则就需要state.fields.xxx.xxx
			if(type=='scope' && valuePath.length >0 && valuePath[0]==FIELDS_STATE_KEY){
				return draft.fields
			}
		}
	});  
	type StoreType = typeof store
	type StateType = typeof store.state
	type FieldsType = (StateType)['fields'] 
	type ActionsType = (StateType)['actions'] 
	return {
		Form: createFormComponent.call<FormOptions,any[],FormComponent<State>>(opts,store),
		Field: createFieldComponent.call(opts,store),	
		Group: createFieldGroupComponent.call(opts,store),	
		Action: createActionComponent<StoreType>(store,{},opts),
		Submit: createSubmitComponent<StoreType>(store,{},opts),
		Reset: createResetComponent<StoreType>(store,{},opts),
		getAction,
    	fields:createObjectProxy(()=>store.state.fields) as FieldsType,		
		actions:createObjectProxy(()=>store.state.actions) as ActionsType,		
		state:store.state as FormSchema<StateType>, 
		useState:store.useState
	};
}



/**
 * 创建表单组件
 * 
 * 当使用标准的表单提交模式时,使用该组件
 * 
 * 
 * <Form></From>			// 表单组件
 * <Network.Form<typeof Network.wifi> name="wifi">
 * 	   <Network.Field name="ssid"></Network.Field>			// 声明字段
 * 	   <Network.Submit>
 *        {({action})=>{
 * 			retrun <button onClick={action()}></button>
 *        }}
 *     </Network.Submit>
 * </Network.Form>			// 声明子表单
 * 
 * 
 * 
 * @param this 
 * @param store 
 * @returns 
 */
function createFormComponent<Fields extends Dict>(this:FormOptions,store: any): FormComponent<Fields> {
	return React.forwardRef<HTMLFormElement>((props: FormProps<Fields>,ref:React.ForwardedRef<HTMLFormElement>) => {
		const {children } = props; 
		// 提交表单
		const onSubmit = useCallback((ev: React.FormEvent<HTMLFormElement>) => {
			//ev.preventDefault();
		},[]);
		// 重置表单
		const onReset = useCallback((e: React.FormEvent<HTMLFormElement>) => {

		},[]);
		return (
			<form ref={ref} className="speedform-form"  {...props} onSubmit={onSubmit} onReset={onReset}>
				{children}
			</form>
		)
	}) as FormComponent<Fields> 
}


 