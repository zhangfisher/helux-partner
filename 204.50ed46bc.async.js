(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[204],{25037:function(mt,R,l){"use strict";l.r(R),l.d(R,{$:function(){return b.$},ComputedObjects:function(){return Et},ComputedScopeRef:function(){return A},OBJECT_PATH_DELIMITER:function(){return S},SKIP_COMPUTED:function(){return it},WatchObject:function(){return Mt},WatchObjects:function(){return kt},computed:function(){return xt},createAsyncComputedMutate:function(){return st},createAsyncComputedObject:function(){return et},createComputedMutate:function(){return ut},createObject:function(){return b.share},createStore:function(){return Ae},createUseWatch:function(){return Pt},createWatch:function(){return dt},getSnap:function(){return b.getSnap},getVal:function(){return T},getValueByPath:function(){return M},installComputed:function(){return ct},installWatch:function(){return vt},isIncludePath:function(){return Kt},isSkipComputed:function(){return Ct},markRaw:function(){return b.markRaw},setAsyncComputedObject:function(){return jt},setVal:function(){return D},skipComputed:function(){return _},watch:function(){return ye}});var b=l(67687),A=function(e){return e.Root="root",e.Current="current",e.Parent="parent",e.Depends="depends",e.Self="self",e}({});function N(e){return(e||[]).map(function(t){return Array.isArray(t)?t.join("."):t}).join("_")}function q(e,t){var n="";return typeof t=="function"?n=t(e):typeof t=="string"?n=t:n=N(e),n}function Vt(e){return e instanceof Error?e:new Error(e)}var S="/",it=Symbol("SKIP_COMPUTED");function Ct(e){return e[it]===!0}var It=l(79664),w=l.n(It);function bt(e,t){if(!Array.isArray(e))throw new Error("path must be an array");return t==="self"?e:t==="root"?[]:t==="parent"?e.slice(0,-2):t==="current"?e.slice(0,-1):typeof t=="string"?t.startsWith("./")?[].concat(w()(e.slice(0,-1)),w()(t.slice(2).split(S))):t.startsWith("../")?bt(e.slice(0,-1),t.slice(3)):(t.includes(".")&&(console.warn('[@speedform/reactive] The dependency path uses "/" as the separator, and will automatically convert'),t=t.replaceAll(".","/")),[].concat(w()(e.slice(0,-1)),w()(t.split(S)))):Array.isArray(t)?t:e}function Ot(e,t){var n=e.get(t);if(n!==void 0)return n;var r=e.get(Number(t)||t);if(r!==void 0)return r}function St(e){return toString.call(e)==="[object Map]"}function T(e,t){if(t.length===0)return e;var n,r=e;return t.forEach(function(a){n=St(r)?Ot(r,a):r[a],r=n}),n}function Wt(e,t,n){return e.map(function(r){return T(t,bt(n,r))})}function Ut(e){return(e||[]).map(function(t){return Array.isArray(t)?t:typeof t=="string"?t.startsWith("./")||t.startsWith("../")?t:t.includes(S)?t.split(S):t.split("."):[]})}var Nt=l(26851),Gt=l.n(Nt);function xe(e){return _typeof(e)=="object"&&e.hasOwnProperty("__COMPUTED__")&&["async","sync"].includes(e.__COMPUTED__)&&e.hasOwnProperty("fn")&&typeof e.fn=="function"&&e.hasOwnProperty("options")&&_typeof(e.options)=="object"}function Ee(e){return _typeof(e)=="object"&&["result","loading","timeout","retry","run"].every(function(t){return e.hasOwnProperty(t)})}function Kt(e,t){return e.length>t.length?!1:e.every(function(n,r){return n===t[r]})}function Ht(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"log",n=typeof e=="function"?e():e instanceof Error?e.stack:e;try{var r;(r=console)[t].apply(r,["[@speedform/reactive] "].concat(w()(Array.isArray(n)?n:[n])))}catch(a){}}function D(e,t,n){var r=e,a=t.length-1;t.forEach(function(i,u){var c=St(r);if(u===a){c?r.set(i,n):r[i]=n;return}var o=c?Ot(r,i):r[i];r=o})}function _(e){return e[it]=!0,e}function M(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:S,r=[];try{return typeof t=="function"&&(t=t.call(e,e)),r=Array.isArray(t)?t:typeof t=="string"?t.split(n):[],r.length>0?T(e,r):e}catch(a){return e}}function Ft(e,t,n){var r=t==null?n:t;if(typeof r=="function")try{r=r.call(e,e)}catch(a){}return r==null?n==null?A.Root:n:r}function Bt(e,t){var n=t.input,r=t.type,a=t.valuePath,i=t.funcOptions,u=t.storeOptions,c=t.computedType,o=e;if(typeof u.onComputedContext=="function"){var f=u.onComputedContext.call(e,e,{computedType:c,contextType:r,valuePath:a});f!==void 0&&(o=f)}var d=a.length>=1?a.slice(0,a.length-1):[],s=Ft(e,r=="context"?i.context:i.scope,r=="context"?u.computedThis&&u.computedThis(c):u.computedScope&&u.computedScope(c));try{if(s===A.Current)return M(e,d);if(s===A.Parent)return M(e,a.slice(0,a.length-2));if(s===A.Root)return o;if(s===A.Depends)return Array.isArray(n)?n.map(function(h){return typeof h=="function"?h():h}):[];if(typeof s=="string")return M(e,[].concat(w()(d),w()(s.split(S))));if(Array.isArray(s))if(s.length>0&&s[0].startsWith("@")){var p=M(e,[].concat(w()(s[0].substring(1).split(S)),w()(s.slice(1))));return M(e,p)}else return M(e,s);else if(typeof s=="number"){var v=s>a.length-2?a.length-s-1:0;return M(e,a.slice(0,v))}else return e}catch(h){return e}}function tt(e,t,n,r,a){var i=n.valuePath,u=n.dependValues;return Bt(t,{input:u,type:a,valuePath:i,funcOptions:r,storeOptions:e.options,computedType:"Computed"})}function Lt(e,t,n,r){return tt(e,t,n,r,"scope")}function zt(e,t,n,r){return tt(e,t,n,r,"context")}function ut(e,t,n){var r=e.path,a=e.parent,i=e.value,u=i(),c=u.fn,o=u.options;if(!(a&&!Object.hasOwn(a,r[r.length-1]))){var f=t.options.onCreateComputed;if(typeof f=="function"&&typeof c=="function"){var d=f.call(t,r,c,o);o.scope||(o.scope=A.Current),o.context||(o.context=A.Root),typeof d=="function"&&(c=d)}var s=n!==void 0,p=s?o.id:q(r,o.id),v=s?p:r.join(S);t.options.log("Create sync computed: ".concat(v));var h=t.stateCtx.mutate({fn:function(g,y){if(!o.enable){t.options.log("Sync computed <".concat(v,"> is disabled"),"warn");return}t.options.log("Run sync computed for : ".concat(v));var V=y.input,I=s?g:tt.call(t,g,{input:V,computedOptions:o,computedContext:e,type:"context"}),x=s?g:tt.call(t,g,{input:V,computedOptions:o,computedContext:e,type:"scope"}),k=o.initial;try{k=c.call(I,x)}catch(C){if(typeof o.onError=="function")try{var W;(W=o.onError)===null||W===void 0||W.call(I,C)}catch(P){}}s?n.stateCtx.setState(function(C){Object.assign(C,k)}):D(g,r,k)},desc:p,checkDeadCycle:!1});s||e.replaceValue(T(t.stateCtx.state,r));var m={id:v,mutate:h,group:o.group,async:!1,options:o,get enable(){return o.enable},set enable(j){o.enable=j},run:function(g){var y={desc:p,extraArgs:g};return s?n.stateCtx.runMutateTask(y):t.stateCtx.runMutateTask(y)}};return t.computedObjects.set(v,m),m}}var Jt=l(90393),E=l.n(Jt),Yt=l(7392),z=l.n(Yt),Zt=l(70125),J=l.n(Zt),Qt=l(44340),Xt=l(10346),qt=l(77937),H=l.n(qt),_t=l(41176),F=l.n(_t),te=l(79862),$=l.n(te),ee=function(){function e(t,n,r){H()(this,e),$()(this,"options",void 0),this.store=t,this.selfState=n,this.options=Object.assign({},r)}return F()(e,[{key:"id",get:function(){return q(this.options.selfPath,this.options.id)}},{key:"enable",get:function(){return this.options.enable},set:function(n){this.options.enable=n}},{key:"group",get:function(){return this.options.group}},{key:"async",get:function(){return this.options.async}},{key:"run",value:function(n){var r;return(r=this.store.options.reactiveable)===null||r===void 0?void 0:r.runComputed(this.id,n)}},{key:"cancel",value:function(){}}]),e}();function et(e,t,n){return Object.assign({loading:!1,timeout:0,retry:0,error:null,progress:0,run:(0,b.markRaw)(_(function(r){return e.reactiveable.runComputed(t,Object.assign({},r))})),cancel:(0,b.markRaw)(_(function(){console.log("cancel")}))},n)}function jt(e,t,n,r,a){var i=et(e,r,a),u=T(t,n);Object.assign(u,i,a)}function ne(e,t,n){var r=Object.assign({},n),a=r.max,i=a===void 0?100:a,u=r.min,c=u===void 0?0:u,o=r.value,f=o===void 0?0:o;return e(function(d){return D(d,[].concat(w()(t),["progress"]),f)}),{value:function(s){s>i&&(s=i),s<c&&(s=c),e(function(p){return D(p,[].concat(w()(t),["progress"]),s)})},end:function(){this.value(i)}}}function Y(e,t,n){e(function(r){Object.entries(n).forEach(function(a){var i=J()(a,2),u=i[0],c=i[1];D(r,[].concat(w()(t),[u]),c)})})}function re(e,t,n,r){return ot.apply(this,arguments)}function ot(){return ot=z()(E()().mark(function e(t,n,r,a){var i,u,c,o,f,d,s,p,v,h,m,j,g,y,V,I,x,k,W,C,P;return E()().wrap(function(B){for(;;)switch(B.prev=B.next){case 0:i=n.valuePath,u=n.getter,c=n.resultPath,o=r.timeout,f=o===void 0?0:o,d=r.retry,s=d===void 0?[0,0]:d,p=r.selfState,v=p?p.setState:a.setState,h=p?t:zt(a,t,n,r),m=p?t:Lt(a,t,n,r),j=Array.isArray(s)?s:[Number(s),0],g=J()(j,2),y=g[0],V=g[1],x=new AbortController,k={onTimeout:function(U){return I=U},getProgressbar:function(U){return ne(v,i,U)},getSnap:function(U){return(0,b.getSnap)(U,!1)},abortSignal:x.signal,cancel:x.abort},W=!1,Y(v,c,{cancel:(0,b.markRaw)(_(function(){return x.abort()}))}),x.signal.addEventListener("abort",function(){W=!0}),C=E()().mark(function rt(){var U,at,L,Q,we,G,Dt,ht,gt,X,yt,K,$t;return E()().wrap(function(O){for(;;)switch(O.prev=O.next){case 0:if(L=!1,Q=!1,we=P>0,G={},O.prev=2,Dt=Array.isArray(f)?f:[f,0],ht=J()(Dt,2),gt=ht[0],X=gt===void 0?0:gt,yt=ht[1],K=yt===void 0?0:yt,Y(v,c,{loading:!0,error:null,retry:P>0?y-P:0,timeout:K>1?K:X,progress:0}),!W){O.next=7;break}throw new Error("Aborted");case 7:return X>0&&(U=setTimeout(function(){Q=!0,typeof I=="function"&&I(),L||(clearInterval(at),Y(v,c,{loading:!1,error:"TIMEOUT",timeout:0}))},X),K>1&&(at=setInterval(function(){Y(v,c,{timeout:K--}),K===0&&clearInterval(at)},X/K))),O.next=10,u.call(h,m,k);case 10:$t=O.sent,Q||Object.assign(G,{result:$t,error:null,timeout:0}),O.next=20;break;case 14:if(O.prev=14,O.t0=O.catch(2),L=!0,typeof r.onError=="function")try{r.onError.call(h,O.t0)}catch(Me){}Q||Object.assign(G,{error:Vt(O.t0).message,timeout:0}),y>0&&Object.assign(G,{retry:y-P});case 20:return O.prev=20,clearTimeout(U),clearInterval(at),(!L||P==y)&&Object.assign(G,{loading:!1}),!L&&!Q&&Object.assign(G,{error:null}),Y(v,c,G),O.finish(20);case 27:if(!L){O.next=31;break}if(!(y>0&&V>0&&P<y)){O.next=31;break}return O.next=31,(0,Xt.g)(V);case 31:case"end":return O.stop()}},rt,null,[[2,14,20,27]])}),P=0;case 13:if(!(P<y+1)){B.next=18;break}return B.delegateYield(C(),"t0",15);case 15:P++,B.next=13;break;case 18:case"end":return B.stop()}},e)})),ot.apply(this,arguments)}function ae(e,t,n){var r=e.valuePath,a=e.id,i=e.deps,u=e.name,c=e.resultPath,o=e.isMutateRunning,f=e.getter,d=t.toComputedResult,s=t.selfState,p=t.initial,v=t.noReentry;n.reactiveable.createComputed({depends:function(m){return Wt(i,m,r)},initial:function(m){if(s)s.setState(function(g){Object.assign(g,et(n,a,{result:p}))});else if(d=="self")D(m,r,et(n,a,{result:p}));else{jt(n.stateCtx,m,c,a,{result:p});var j=T(m,r.slice(0,r.length-1));delete j[r[r.length-1]]}},onComputed:function(){var h=z()(E()().mark(function j(g){var y,V,I,x,k;return E()().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:if(y=g.draft,V=g.setState,I=g.input,x=g.options,!(!t.enable&&(x==null?void 0:x.enable)!==!0)){C.next=4;break}return n.options.log("Async computed <".concat(u,"> is disabled"),"warn"),C.abrupt("return");case 4:if(n.options.log("Run async computed for : ".concat(u)),k=Object.assign({},t,x),!(v&&o&&n.options.debug)){C.next=9;break}return n.options.log("Reentry async computed: ".concat(u),"warn"),C.abrupt("return");case 9:return e.isMutateRunning=!0,C.prev=10,C.next=13,re(y,e,k,n);case 13:return C.abrupt("return",C.sent);case 14:return C.prev=14,e.isMutateRunning=!1,C.finish(14);case 17:case"end":return C.stop()}},j,null,[[10,,14,17]])}));function m(j){return h.apply(this,arguments)}return m}()}),isExternal||computedParams.replaceValue(T(n.stateCtx.state,r))}function ie(e,t){var n=e.path,r=t.selfState,a=t.toComputedResult,i=a===void 0?"self":a;return r?[n]:(0,Qt.d)(i,{self:n,root:[],parent:n.slice(0,n.length-2),current:n.slice(0,n.length-1),Array:i,String:[].concat(w()(n.slice(0,n.length-1)),[String(i).split(S)])},{defaultValue:n})}function ue(e,t,n,r){var a=n.options.onCreateComputed;if(typeof a=="function"&&typeof t=="function"){var i=a.call(n,e,t,r);r.scope||(r.scope=A.Current),r.context||(r.context=A.Root),typeof i=="function"&&(t=i)}}function st(e,t,n){var r=e.path,a=e.parent,i=e.value;if(!(a&&!Object.hasOwn(a,r[r.length-1]))){var u=i(),c=u.getter,o=u.options;o.async=!0,ue(r,c,t,o);var f=o.depends,d=f===void 0?[]:f,s=o.selfState,p=ie(e,o),v=Ut(d);v.length==0&&t.options.log("async computed <".concat(r.join("."),"> should specify depends"),"warn");var h=o.id||q(r,o.id),m=s?h:r.join(S);t.options.log("Create async computed: ".concat(m," (depends=").concat(v.length==0?"None":N(v),")"));var j={id:o.id||q(r,o.id),name:s?h:r.join(S),resultPath:p,isMutateRunning:!1,dependValues:[],valuePath:r,deps:v,getter:c};ae(j,o,t),s||e.replaceValue(T(t.state,r));var g=new ee(t,s,o);return t.computedObjects.set(h,g),g}}var At=l(20649);function ct(e,t,n){var r=e.value,a;if(r.__COMPUTED__=="async"?a=st(e,t,n):r.__COMPUTED__=="sync"?a=ut(e,t,n):(0,At.$)(r)?(e.value=function(){return{fn:r,options:{depends:[],initial:void 0,immediate:!0,enable:!0,context:t.options.computedThis&&t.options.computedThis("Computed")}}},a=st(e,t,n)):(e.value=function(){return{fn:r,options:{initial:void 0,enable:!0,context:t.options.computedThis&&t.options.computedThis("Computed")}}},a=ut(e,t,n)),a&&typeof t.options.onCreateComputedObject=="function")try{t.options.onCreateComputedObject(e.path,a)}catch(i){t.options.log(i.stack,"error")}}var oe=l(71698),lt=l.n(oe),se=l(44114),Z=l.n(se),ce=l(19365),le=l.n(ce),fe=l(72904),pe=l.n(fe),de=l(65523),ft=l.n(de),ve=l(7122),pt=l.n(ve),he=l(19108),wt=l.n(he);function xt(e,t,n){if(typeof e!="function")throw new Error("computed getter must be a function");var r=[],a={async:!1,enable:!0,timeout:0,depends:[],toComputedResult:A.Self,immediate:!0};if(arguments.length==1)r=[];else if(arguments.length==2)if(Array.isArray(arguments[1]))r=arguments[1];else if(Gt()(arguments[1])=="object")Object.assign(a,arguments[1]);else throw new Error("invalid arguments");else arguments.length>=3&&(r=arguments[1],Object.assign(a,arguments[2]));var i=a.async===!0||(0,At.$)(e)||arguments.length>=2&&Array.isArray(t);a.async=i,a.depends=r;var u=function(){return{getter:e,options:a}};return u.__COMPUTED__=i?"async":"sync",u}function nt(){return Math.random().toString(36).slice(2)}function ge(e){return function(t,n){var r=Object.assign({id:nt(),scope:e.stateCtx.state,context:e.stateCtx.state},n);if(!Array.isArray(r.depends)||r.depends.length==0)throw new Error("options.depends must be an array and not empty");var a=(0,b.sharex)({}),i={path:[],parent:null,value:xt(t,r.depends,n)};return ct(i,e),a}}var Et=function(e){ft()(n,e);var t=pt()(n);function n(r){var a;return H()(this,n),a=t.call(this),$()(Z()(a),"_createComputed",void 0),a.store=r,a}return F()(n,[{key:"runGroup",value:function(){var r=z()(E()().mark(function i(u){return E()().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.abrupt("return",Promise.all(w()(this.values()).filter(function(f){return f.group==u}).map(function(f){return f.async,f.run()})));case 1:case"end":return o.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"enableGroup",value:function(){var r=z()(E()().mark(function i(u){var c,o,f;return E()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:c=lt()(this.values());try{for(c.s();!(o=c.n()).done;)f=o.value,f.options.enable=u}catch(p){c.e(p)}finally{c.f()}case 2:case"end":return s.stop()}},i,this)}));function a(i){return r.apply(this,arguments)}return a}()},{key:"delete",value:function(a){return le()(pe()(n.prototype),"delete",this).call(this,a)}},{key:"new",get:function(){return this._createComputed||(this._createComputed=ge(this.store)),this._createComputed}}]),n}(wt()(Map));function Tt(e){return typeof e=="function"?e:typeof e=="string"?function(t){return N(t)==N(e.split(S))}:Array.isArray(e)?function(t){return e.map(function(n){return typeof n=="string"?n.split(S):Array.isArray(n)?n:[String(n)]}).some(function(n){return N(t)==N(n)})}:function(){return!1}}function ye(e,t,n){var r=Object.assign({depends:Tt(t),enable:!0},n),a=function(){return{listener:e,options:r}};return a.__COMPUTED__="watch",a}function dt(e){return function(t,n){var r=(0,b.watch)(function(i){var u=i.triggerReasons,c=u.map(function(o){return o.keyPath});t(c)},function(){return n==null?void 0:n.map(function(i){return M(e.stateCtx.state,i)})}),a=r.unwatch;return a}}var me=l(70079);function vt(e,t){t.options.log("install watch for <".concat(e.path.length==0?"Dynamic":e.path.join(S),">"));var n=e.value();n.options.selfPath=e.path;var r=t.watchObjects.add(n),a=n.options.context;return a?a.setState(function(i){i.value=n.options.initial}):(e.replaceValue(n.options.initial),t.stateCtx.setState(function(i){D(i,e.path,n.options.initial)}),(0,b.flush)(t.stateCtx.state)),r}function Pt(e){return function(t,n,r){(0,me.useEffect)(function(){var a={path:["value"],parent:void 0,value:function(){var c={listener:t,options:Object.assign({depends:Tt(n),context:(0,b.sharex)({value:0}),selfPath:["value"],initial:0,enable:!0,scope:A.Depends},r)};return c}},i=vt(a,e);return function(){e.watchObjects.delete(i.id)}},[n])}}var Mt=function(){function e(t,n){if(H()(this,e),$()(this,"_cache",void 0),$()(this,"_listener",void 0),$()(this,"_options",void 0),this.store=t,this._options=Object.assign({enable:!0,selfPath:[],group:void 0,context:void 0,initial:void 0},n.options),typeof this._options.depends!="function")throw new Error("watch options.depends must be a function");if(!this._options.id){var r=this._options.selfPath;this._options.id=this._options.id||this._options.context?nt():N(r)}this._listener=n.listener}return F()(e,[{key:"id",get:function(){return this._options.id}},{key:"options",get:function(){return this._options}},{key:"selfPath",get:function(){return this._options.selfPath}},{key:"depends",get:function(){return this._options.depends}},{key:"enable",get:function(){return this._options.enable},set:function(n){this._options.enable=n}},{key:"cache",get:function(){return this._cache||(this._cache={}),this._cache}},{key:"value",get:function(){var n=this._options.context?this._options.context:this.store.state;return T((0,b.getSnap)(n),this.selfPath)}},{key:"getName",value:function(){return this._options.context?this.id:this.selfPath.join(S)}},{key:"reset",value:function(){this._cache={}}},{key:"run",value:function(n,r){var a=this;if(!this.enable){this.store.options.log("WatchObject <".concat(this.getName(),"> is disabled"));return}try{var i=this._listener.call(this,r,n,this);i!==void 0&&(this._options.context?this._options.context.setState(function(u){u.value=i}):this.store.setState(function(u){D(u,a.selfPath,i)}))}catch(u){}}}]),e}(),kt=function(e){ft()(n,e);var t=pt()(n);function n(r){var a;return H()(this,n),a=t.call(this),$()(Z()(a),"_off",void 0),$()(Z()(a),"_enable",!0),a.store=r,r.on("created",a.onStateCreated.bind(Z()(a))),a}return F()(n,[{key:"onStateCreated",value:function(){this.createWacher()}},{key:"enable",get:function(){return this._enable},set:function(a){this._enable=a}},{key:"createWacher",value:function(){var a=this,i=(0,b.watch)(function(c){var o=c.triggerReasons;if(a._enable){var f=o.map(function(d){return d.keyPath});f.forEach(function(d){var s=T(a.store.state,d),p=lt()(a.values()),v;try{for(p.s();!(v=p.n()).done;){var h=v.value;h.depends(d,s)&&h.run(d,s)}}catch(m){p.e(m)}finally{p.f()}})}},function(){return[a.store.state]}),u=i.unwatch;this._off=u}},{key:"reset",value:function(){this._off&&this._off(),this.createWacher()}},{key:"add",value:function(a){var i=new Mt(this.store,a);return this.set(i.id,i),i}},{key:"enableGroup",value:function(a){var i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0,u=lt()(this.values()),c;try{for(u.s();!(c=u.n()).done;){var o=c.value;o.options.group==a&&(o.options.enable=i)}}catch(f){u.e(f)}finally{u.f()}}}]),n}(wt()(Map));function Rt(e,t){var n=e.path,r=e.value,a=n.join(".");typeof r=="function"&&!t._replacedKeys[a]&&!Ct(r)&&(t._replacedKeys[a]=!0,r.__COMPUTED__=="watch"?vt(e,t):ct(e,t))}function Ce(e){return function(t,n){var r=e.stateCtx.useState;if(t==null)return r();var a=r(),i=J()(a,2),u=i[0],c=i[1],o=t(u),f=c;return typeof n=="function"&&(f=function(s){c(function(p){n.call(p,p,s)})}),[o,f]}}function be(e){return function(t){e.stateCtx.setState(function(n){t(n)})}}var Oe=l(24222),Se=function(){function e(t,n){H()(this,e)}return F()(e,[{key:"state",get:function(){throw new Error("Method not implemented.")}},{key:"useState",value:function(n,r){throw new Error("Method not implemented.")}},{key:"setState",value:function(n){throw new Error("Method not implemented.")}},{key:"createComputed",value:function(n){throw new Error("Method not implemented.")}},{key:"runComputed",value:function(n,r){throw new Error("Method not implemented.")}}]),e}(),je=function(e){ft()(n,e);var t=pt()(n);function n(r,a){var i,u;return H()(this,n),u=t.call(this,r,a),$()(Z()(u),"_stateCtx",void 0),u._stateCtx=(0,b.sharex)(r,{stopArrDep:!1,moduleName:(i=a.id)!==null&&i!==void 0?i:nt(),onRead:function(o){a.onRead(o)}}),u}return F()(n,[{key:"state",get:function(){return this._stateCtx.state}},{key:"useState",value:function(a,i){var u=this._stateCtx.useState(),c=J()(u,2),o=c[0],f=c[1],d=typeof a=="function"?a(o):o,s=typeof i=="function"?function(p){f(function(v){i.call(v,v,p)})}:f;return[d,s]}},{key:"setState",value:function(a){this._stateCtx.setState(a)}},{key:"createComputed",value:function(a){var i=a.initial,u=a.onComputed,c=a.depends,o=a.options;return this._stateCtx.mutate({deps:function(d){return c(d)},fn:function(d,s){s.isFirstCall&&i(d,s)},task:function(){var f=z()(E()().mark(function s(p){var v,h,m,j;return E()().wrap(function(y){for(;;)switch(y.prev=y.next){case 0:return v=p.draft,h=p.setState,m=p.input,j=p.extraArgs,y.abrupt("return",u({draft:v,setState:h,input:m,options:Object.assign({},j)}));case 2:case"end":return y.stop()}},s)}));function d(s){return f.apply(this,arguments)}return d}(),immediate:o.immediate,desc:o.id,checkDeadCycle:!1}),o.id}},{key:"runComputed",value:function(a,i){var u={desc:a,extraArgs:i};this._stateCtx.runMutateTask(u)}}]),n}(Se);function Ae(e,t){var n=Object.assign({id:nt(),debug:!0,computedThis:function(){return A.Root},computedScope:function(){return A.Current},singleton:!0},t);n.log=function(){n.debug&&Ht.apply(void 0,arguments)};var r=(0,Oe.Z)(),a={options:n,on:r.on,off:r.off,emit:r.emit,_replacedKeys:{}};return a.computedObjects=new Et(a),a.watchObjects=new kt(a),a.reactiveable=new je(e,{id:n.id,onRead:function(u){Rt(u,a)}}),a.stateCtx=(0,b.sharex)(e,{stopArrDep:!1,moduleName:n.id,onRead:function(u){Rt(u,a)}}),a.state=a.stateCtx.reactive,a.emit("created"),a.useState=Ce(a),a.setState=be(a),a.enableComputed=function(){var i=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return a.stateCtx.setEnableMutate(i)},a.sync=a.stateCtx.sync,a.watch=dt(a),a.useWatch=Pt(a),a.watch=dt(a),a}},43095:function(mt){function R(l){var b=new Error("Cannot find module '"+l+"'");throw b.code="MODULE_NOT_FOUND",b}R.keys=function(){return[]},R.resolve=R,R.id=43095,mt.exports=R}}]);
