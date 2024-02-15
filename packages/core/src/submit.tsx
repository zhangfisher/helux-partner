/**
 * Submit组件与Form组件配合使用，用于提交当前表单数据
 * 
 * 
 * 
 * application/x-www-form-urlencoded	formdata
application/json	request payload
multipart/form-data	request payload

<Submit>
    {({submit,valatide,visible,dirty})=>{
        return <input type='submit' onClick={submit}>提交</input>
    }}
</Submit>


 * 
 */

import { Dict, getValueByPath } from "@speedform/reactive"; 
import type { FormOptions, FormSchemaBase } from "./form";
import React,{ ReactNode, RefObject, useCallback, useRef } from "react";
 import { isFieldGroup, isFieldList, isFieldValue } from "./utils";

// 动作状态，必须包含一个名称为execute的异步计算属性
export interface FormSubmitState extends FormSchemaBase{
    
} 

 
 export type DefaultSubmitRenderProps={
    title  : string
    help   : string
    tips   : string
    visible: boolean
    dirty  : boolean
    enable : boolean
} 

export type SubmitRenderProps<State extends Dict> = 
    DefaultSubmitRenderProps 
    & State 
    & {
        submit:()=>void;			                        // 提交表单
        valatide:()=>void;			                        // 验证表单
        ref: RefObject<HTMLElement>                         // 动作元素引用
    } 

export type SubmitRender<State extends Dict,Params extends Dict = Dict>= (props: SubmitRenderProps<State>) => ReactNode


export type SubmitProps<State extends FormSubmitState=FormSubmitState,PropTypes extends Dict = Dict,Params extends Dict = Dict> = {
    scope? :string | string[]              // 声明该动作对应的状态路径
    render? : SubmitRender<State,Params>  
    children?: SubmitRender<State,Params>  
}    
 

export interface SubmitOptions{
}

/**
 * 
 * 提取一个字段组中除了字段以后的所有属性
 * 
 * @param formState 
 * @returns 
 */
function getFormAttrs(formState:Dict){
    const result:Dict = {}
    Object.entries(formState || {}).forEach(([key,value])=>{ 
        if(!(isFieldValue(value) || isFieldGroup(value) || isFieldList(value))){
            result[key] = value      
        }
    }) 
    return result
}


/**
 * 执行提交动作
 * @param formState 
 * @param submitOptions 
 * @returns 
 */
function useFormSubmit<State extends FormSubmitState=FormSubmitState>(formState:State,ref:RefObject<HTMLElement>,submitOptions?:SubmitOptions){
    return useCallback((options:SubmitOptions)=>{
        const formELe = findFormElement(ref.current as HTMLElement) as HTMLFormElement
        if(!formELe){
            throw new Error("未找到表单元素")
        }
        formELe.submit()
    },[])
}

function createSubmitRenderProps<State extends FormSubmitState=FormSubmitState>(formState:State,submitFn:any,ref:RefObject<HTMLElement>){  
    return  Object.assign({      
        type      : "submit",
        help       : "",
        title      : "",
        dirty      : false,
        validate   : true,        
        visible    : true,    
        enable     : true,
        readOnly   : true
    },
    getFormAttrs(formState),
    {
        submit:submitFn,
        ref,
    })  
} 
const SubmitChildren = React.memo((props:{submitProps:SubmitRenderProps<any>,children:any})=>{
    return <>{
      typeof(props.children)=='function' && props.children(props.submitProps as any)  
    }</>
  },(oldProps, newProps)=>{  
    return  Object.entries(oldProps.submitProps).every(([key,value]:[key:string,value:any])=>{
      return ['children','render'].includes(key) ? true: value===newProps.submitProps[key]
    }) 
  })     
  
function findFormElement(el:HTMLElement) {  
    // 使用 closest 方法查找最近的祖先表单元素  
    return el.closest('form');      
 }  
  
interface DefaultSubmitButtonProps{
    visible?:boolean
}
const DefaultSubmitButton = React.forwardRef<HTMLInputElement,DefaultSubmitButtonProps>((props:DefaultSubmitButtonProps,ref)=>{
    const {visible} = props
    return <input type="submit"
        onClick={(event)=>{
            alert("alrty")
            event.preventDefault()
            return false
        }}
        style={{
            display:visible ? 'none' : 'block'
        }} ref={ref} value="提交"></input>
})

export function createSubmitComponent<Store extends Dict = Dict>(store:Store,submitOptions?:SubmitOptions,formOptions?:Required<FormOptions>) {
    function Submit<State extends FormSubmitState=FormSubmitState,Scope extends Dict=Dict>(props: SubmitProps<State,Scope>):ReactNode{
        const [state] = store.useState()  
        const inputRef = useRef<HTMLInputElement>(null)
        const { scope } = props  

        const formState =getValueByPath(state,scope) 
        // 用来引用当前动作
        const ref = useRef<HTMLElement>(null)
        const submit = useFormSubmit(formState,ref,submitOptions)

        // 创建动作组件的Props
        const submitRenderProps = createSubmitRenderProps(formState,submit,ref)        
        // 0-无子组件 1-渲染函数 2-数组组件 3-单个组件
        const childrenType = typeof(props.render)==='function' ? 1 : (Array.isArray(props.children) ? 2 : (typeof(props.children)==='function' ? 3 : 0))

        return <>
            <DefaultSubmitButton ref={inputRef} visible={childrenType == 0 }/>
            {/* 执行渲染动作组件 */}
            {childrenType===1 ?
                <SubmitChildren {...{submitProps:submitRenderProps,children:props.render}} />
               : ( childrenType===2 ? 
                    (props.children as any).map((children:any)=>{
                        return <SubmitChildren {...{submitProps:submitRenderProps,children:children}} />
                    })
                    : <SubmitChildren {...{submitProps:submitRenderProps,children:props.children}} />
               )
            }   
        </>
        
    }
    return React.memo(Submit,(oldProps:any, newProps:any)=>{
        return oldProps.name === newProps.name  
    }) as (<State extends FormSubmitState=FormSubmitState,Scope extends Dict=Dict>(props: SubmitProps<State,Scope>)=>ReactNode)

}