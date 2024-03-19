"use strict";(self.webpackChunkspeedform_docs=self.webpackChunkspeedform_docs||[]).push([[812,772],{35812:function(ue,N,o){o.r(N),o.d(N,{api:function(){return $},delay:function(){return x},forms:function(){return O}});var $={};o.r($),o.d($,{getProjects:function(){return d}});var O={};o.r(O),o.d(O,{Network:function(){return E},schema:function(){return B}});var L=o(90393),C=o.n(L),K=o(7392),P=o.n(K);function d(v){return G.apply(this,arguments)}function G(){return G=P()(C()().mark(function v(f){var h,w,s;return C()().wrap(function(S){for(;;)switch(S.prev=S.next){case 0:return S.next=2,fetch(f);case 2:if(h=S.sent,!h.ok){S.next=11;break}return S.next=6,h.json();case 6:return w=S.sent,s=w.map(function(D){return{name:D.name,url:D.html_url,description:D.description,stars:D.stargazers_count}}),S.abrupt("return",s);case 11:throw new Error("".concat(h.status," - ").concat(h.statusText));case 12:case"end":return S.stop()}},v)})),G.apply(this,arguments)}var x=function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:1e3;return new Promise(function(h){setTimeout(h,f)})},R=o(59664),I=o(65772),Q=o(99166),V=o.n(Q),B={title:"\u7F51\u7EDC\u914D\u7F6E",fields:{title:{value:"React-Helux-Form",placeholder:"\u8F93\u5165\u7F51\u7EDC\u914D\u7F6E\u540D\u79F0",title:"\u7F51\u7EDC\u540D\u79F0",validate:function(f){return f.length>3}},interface:{value:"wifi",title:"\u7F51\u5361\u7C7B\u578B",select:function(){return[{value:"wifi",title:"\u65E0\u7EBF\u7F51\u5361"},{value:"ethernet",title:"\u6709\u7EBF\u7F51\u5361"}]}},ip:{value:"1.1.1.1",title:"IP\u5730\u5740",validate:(0,R.computed)(function(){var v=P()(C()().mark(function f(h){return C()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x(2e3);case 2:return s.abrupt("return",V().isIP(String(h)));case 3:case"end":return s.stop()}},f)}));return function(f){return v.apply(this,arguments)}}(),[],{async:!0})},gateway:{value:"1.1.1.1",title:"\u7F51\u5173\u5730\u5740",validate:function(f){return V().isIP(f)}},dhcp:{enable:{title:"\u81EA\u52A8\u83B7\u53D6IP\u5730\u5740",value:!0},start:{title:"\u8D77\u59CB\u5730\u5740",value:"192.168.1.1",enable:(0,R.computed)(function(v){return v.enable.value},{scope:R.ComputedScopeRef.Parent}),validate:function(f){return V().isIP(f)}},end:{title:"\u7ED3\u675F\u5730\u5740",value:"192.168.1.100",enable:(0,R.computed)(function(v){return v.dhcp.enable.value},{scope:R.ComputedScopeRef.Root}),validate:function(f){return V().isIP(f)}}},wifi:{title:"\u65E0\u7EBF\u914D\u7F6E",visible:(0,R.computed)(function(v){return v.interface.value==="wifi"},{scope:R.ComputedScopeRef.Root}),ssid:{value:"fast",placeholder:"\u65E0\u7EBF\u7F51\u7EDC",validate:function(f){return f.length>3}},password:{value:"123",placeholder:"\u8F93\u5165\u65E0\u7EBF\u5BC6\u7801",help:"\u5BC6\u7801\u957F\u5EA6\u5E94\u4E0D\u5C0F\u4E8E6\u4F4D",enable:function(f){return f.interface.value==="wifi"},validate:function(f){return f.length>=6}}}}},E=(0,I.createForm)(B,{debug:!0});globalThis.Network=E},65772:function(ue,N,o){o.r(N),o.d(N,{ActionChildren:function(){return H},FieldChildren:function(){return M},ValidationError:function(){return Ve},action:function(){return re},createActionComponent:function(){return ne},createFieldComponent:function(){return X},createFieldGroupComponent:function(){return q},createForm:function(){return Ye},getAction:function(){return W},submit:function(){return pe}});var $=o(79664),O=o.n($),L=o(70125),C=o.n(L),K=o(39114),P=o.n(K),d=o(70079),G=o(26851),x=o(13192);function R(e){var r=_typeof(e);return e==null||r=="boolean"||r=="number"||r=="string"||r==null}function I(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,t=0,n,a=!0,u=function i(){if(n==null){a=!0,clearTimeout(t),t=0;return}try{var c=n;n=void 0,e.apply(void 0,O()(c)),t=setTimeout(function(){return i()},r)}finally{}};return function(){for(var i=arguments.length,c=new Array(i),l=0;l<i;l++)c[l]=arguments[l];if(r==0)return e.apply(void 0,c);n=c,(a||t==0)&&(a=!1,u())}}function Q(e,r){var t={};for(var n in e)e[n]!==r[n]&&(t[n]=r[n]);return t}function V(e){return new Proxy({},{get:function(t,n,a){return e()[n]}})}function B(e){return(0,x.P)(e)&&"execute"in e&&(0,x.P)(e.execute)&&"loading"in e.execute}function E(e){return(0,x.P)(e)&&"value"in e}function v(e){return Array.isArray(e)}function f(e){return(0,x.P)(e)&&!E(e)&&!B(e)}var h="fields",w="actions",s=o(59664),p=o(35250);function S(e,r,t,n){return Object.assign({name:e,help:"",initial:void 0,oldValue:void 0,visible:!0,required:!1,readonly:!1,validate:null,enable:!0,placeholder:""},P()(P()({},r),{},{sync:t,update:n}))}function D(e,r){var t=(0,d.useRef)(null);return(0,d.useCallback)(function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:0;if(t.current==null){var a=e.sync(r);t.current=n==0?a:I(a,n)}return t.current},[])}function ie(e,r){var t=(0,d.useRef)(null),n=(0,d.useState)(0),a=C()(n,2),u=a[0],i=a[1];return(0,d.useCallback)(function(c,l){var m=Object.assign({debounce:0},l),g=m.debounce;if(t.current==null||u!==g){u!==g&&g>0&&i(g);var b=function(y){return function(F){r(typeof y=="function"?function(A){return y.call(A,A.fields)}:function(A){return(0,s.setVal)(A,e,y)}),typeof F.preventDefault=="function"&&F.preventDefault()}};t.current=g>0?b:I(b,g)}return t.current(c)},[])}var M=d.memo(function(e){return(0,p.jsx)(p.Fragment,{children:typeof e.children=="function"&&e.children(e.fieldProps)})},function(e,r){return Object.entries(e.fieldProps).every(function(t){var n=C()(t,2),a=n[0],u=n[1];return["children","sync","update"].includes(a)?!0:u===r.fieldProps[a]})});function X(e){var r=this;return d.memo(function(t){var n=t.name,a=Array.isArray(n)?n:n.split("."),u=[h].concat(O()(a)),i=[h].concat(O()(a));a.push("value"),i.push("value");var c=e.useState(function(F){return(0,s.getVal)(F,u)}),l=C()(c,2),m=l[0],g=l[1],b=ie(i,g),j=D(e,i),y=S(r.getFieldName(a),m,j,b);return t.render?(0,p.jsx)(M,{fieldProps:y,children:t.render}):Array.isArray(t.children)?t.children.map(function(F){return(0,p.jsx)(M,{fieldProps:y,children:F})}):(0,p.jsx)(M,{fieldProps:y,children:t.children})},function(t,n){return t.name===n.name})}var le=o(90393),T=o.n(le),ce=o(7392),z=o.n(ce),Z=o(23893);function oe(e,r){return(0,d.useCallback)(function(t){r(function(n){t.call(n,(0,s.getVal)(n,e))})},[])}function k(e,r,t){return(0,Z.w)({name:e,help:"",visible:!0,required:!1,readonly:!1,validate:!0,enable:!0,update:t},r)}function q(e){var r=this;return d.memo(function(n){var a=n.name,u=e.useState(),i=C()(u,2),c=i[0],l=i[1],m=Array.isArray(a)?a:a.split("."),g=["fields"].concat(O()(m)),b=(0,s.getVal)(c,g),j=oe(g,l),y=(0,d.useState)(function(){return k(r.getFieldName(m),b,j)}),F=C()(y,2),A=F[0],J=F[1];return(0,d.useEffect)(function(){J(k(r.getFieldName(m),b,j))},[b]),Array.isArray(n.children)?n.children.map(function(Qe){return Qe(A)}):n.children(A)},function(t,n){return t.name===n.name})}var se=o(76120);function _(e){return e.value}function U(e){var r={};return Object.entries(e).forEach(function(t){var n=C()(t,2),a=n[0],u=n[1];if(typeof a=="string")if(E(u))r[a]=_(u);else if(f(u)){var i=U(u);i&&Object.keys(i).length>0&&(r[a]=i)}else v(u)&&(r[a]=ee(u))}),r}function ee(e){var r=[];return e.forEach(function(t){E(t)?r.push(_(t)):f(t)?r.push(U(t)):v(t)?r.push(ee(t)):r.push(t)}),r}function fe(e,r,t){var n=Object.assign({},t),a=n.onNotMatch,u=a===void 0?function(){}:a;function i(c,l){var m=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];Object.entries(c).forEach(function(g){var b=C()(g,2),j=b[0],y=b[1];if(typeof j=="string"){var F=[].concat(O()(m),[j]);if(j in l){var A=l[j];E(A)?A.value=y:f(A)?(0,x.P)(y)?i(y,A,F):u(F):v(A)?Array.isArray(y)?i(y,A):u(F):l[j]=y}else u(F)}})}i(e,r)}function Xe(e,r){var t=new FormData,n=Object.assign({getItemName:function(c){return c.join(".")}},r),a=n.getItemName;function u(i,c){if(c!=null){var l=a?a(i):i.join(".");Array.isArray(c)?c.forEach(function(m,g){u([].concat(_toConsumableArray(i),[String(g)]),m)}):isPlainObject(c)?Object.entries(c).forEach(function(m){var g=_slicedToArray(m,2),b=g[0],j=g[1];u([].concat(_toConsumableArray(i),[b]),j)}):t.append(l,c)}}return u([],e),t}function de(e,r){return function(n,a){var u=Object.assign({validate:!0},a);try{e.setEnableMutate(!1),fe(n,e.state.fields),e.setState(function(i){i.dirty=!1,i.validate=null})}catch(i){console.error(i)}finally{e.setEnableMutate(!0),u!=null&&u.validate&&e.computedObjects.run("@validate")}}}function te(e,r){return U(e)}function ve(e,r){return function(n){var a=Object.assign({},n);return te((0,s.getSnap)(e.state).fields)}}function W(e,r){return function(){var t=z()(T()().mark(function n(a){var u;return T()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:return u=Object.assign({},r,a),c.next=3,e.execute.run(u);case 3:if(!e.execute.error){c.next=7;break}throw new Error(e.execute.error);case 7:return c.abrupt("return",e.execute.result);case 8:case"end":return c.stop()}},n)}));return function(n){return t.apply(this,arguments)}}()}function me(e,r){var t=(0,d.useCallback)(function(a){var u=Object.assign({},{noReentry:!0,preventDefault:!0},r,a),i=W(e,u);return function(c){i(),c&&u.preventDefault&&typeof c.preventDefault=="function"&&c.preventDefault()}},[e]),n=(0,d.useCallback)(function(a){e.execute.cancel(),a&&typeof a.preventDefault=="function"&&a.preventDefault()},[e]);return[t,n]}function he(e,r){return(0,d.useCallback)(function(t){var n=(0,s.getValueByPath)(e,[].concat(O()(Array.isArray(r)?r:r.split(".")),["execute"]));n.cancel(),t&&typeof t.preventDefault=="function"&&t.preventDefault()},[])}function ge(e,r,t,n){return Object.assign({help:"",title:"",visible:!0,enable:!0},(0,se.C)(e,"execute"),P()(P()({},e.execute),{},{run:r,cancel:t,ref:n}))}var H=d.memo(function(e){return(0,p.jsx)(p.Fragment,{children:typeof e.children=="function"&&e.children(e.actionProps)})},function(e,r){return Object.entries(e.actionProps).every(function(t){var n=C()(t,2),a=n[0],u=n[1];return["children","run","cancel"].includes(a)?!0:u===r.actionProps[a]})});function ne(e,r,t){function n(a){var u=e.useState(),i=C()(u,1),c=i[0],l=a.name;l.includes(".")||(l="actions.".concat(l));var m=(0,s.getValueByPath)(c,l,"."),g=me(m,r),b=C()(g,1),j=b[0],y=he(c,l),F=(0,d.useRef)(null),A=ge(m,j,y,F);if(typeof a.render=="function")return(0,p.jsx)(H,{actionProps:A,children:a.render});if(a.children)return Array.isArray(a.children)?a.children.map(function(J){return(0,p.jsx)(H,{actionProps:A,children:J})}):(0,p.jsx)(H,{actionProps:A,children:a.children})}return d.memo(n,function(a,u){return a.name===u.name})}function re(e,r){return(0,s.computed)(function(){var t=z()(T()().mark(function n(a,u){var i;return T()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=te((0,s.getSnap)(a,!1).fields),l.next=3,e(i,u);case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}},n)}));return function(n,a){return t.apply(this,arguments)}}(),[],r)}function pe(e,r){return re(function(){var t=z()(T()().mark(function n(a,u){var i;return T()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return i=new FormData,l.next=3,e(i,u);case 3:return l.abrupt("return",l.sent);case 4:case"end":return l.stop()}},n)}));return function(n,a){return t.apply(this,arguments)}}(),r)}var ye=o(83443);function be(e){return e.length>1&&e[0]==h&&e[e.length-1]=="value"}function je(e){return(0,s.watch)(function(r,t){var n=t.getSelfValue,a=t.triggerPath,u=t.selfPath;if((0,s.isIncludePath)(e||u,a)){var i=n();if(!i)return!0}},function(r){return be(r)},{initial:!1})}var Ce=o(41176),Ae=o.n(Ce),Fe=o(77937),Oe=o.n(Fe),Pe=o(65523),Se=o.n(Pe),xe=o(7122),Re=o.n(xe),Ee=o(19108),Te=o.n(Ee),Ve=function(e){Se()(t,e);var r=Re()(t);function t(n){var a;return Oe()(this,t),a=r.call(this,n),a.name="ValidationError",a}return Ae()(t)}(Te()(Error));function De(e){return e.length>1&&e[0]==h&&(e[e.length-1]==="validate"||e.length>=2&&e[e.length-2]=="validate"&&e[e.length-1]=="result")&&!(e.length==2&&e[1]=="validate")&&!(e.length==3&&e[1]=="validate"&&e[2]=="result")}function Ne(e){var r=Object.assign({},e),t=r.entry;return(0,s.watch)(function(n,a){var u=a.triggerPath,i=a.selfPath,c=a.getCache;if((0,s.isIncludePath)(t||i,u)){var l=c();if(typeof n=="boolean"){var m=u.join(s.OBJECT_PATH_DELIMITER);n?delete l[m]:l[m]=n}return Object.keys(l).length==0}},function(n){return De(n)},{initial:!0})}function Ze(e,r){var t=typeof e=="function"?e():e;if(!t)throw new ValidationError(typeof r=="function"?r():r)}var $e={title:"SpeedForm",help:"",tips:"",status:"idle",dirty:je(["fields"]),validate:Ne({entry:["fields"]}),readonly:!1,enable:!0,visible:!0},Ge=o(83038);function Ie(e){var r={};return Object.entries(e||{}).forEach(function(t){var n=C()(t,2),a=n[0],u=n[1];E(u)||f(u)||v(u)||(r[a]=u)}),r}function Be(e){return Object.assign({type:"submit",help:"",title:"",dirty:!1,validate:!0,visible:!0,enable:!0,readOnly:!0},Ie(e))}var Y=d.memo(function(e){return(0,p.jsx)(p.Fragment,{children:typeof e.children=="function"&&e.children(e.submitProps)})},function(e,r){return Object.entries(e.submitProps).every(function(t){var n=C()(t,2),a=n[0],u=n[1];return["children","render"].includes(a)?!0:u===r.submitProps[a]})}),we=(0,Ge.zo)(function(e,r){var t,n,a=r.className,u=e.visible;return(0,p.jsx)("input",{className:a,style:Object.assign({display:u?"inline-block":"none"},e.style),type:(t=e.type)!==null&&t!==void 0?t:"submit",value:(n=e.title)!==null&&n!==void 0?n:"\u63D0\u4EA4"})},{minWidth:"80px",cursor:"pointer",boxSizing:"border-box",margin:"2px",transition:"filter 0.3s","&:hover":{filter:"brightness(1.2)"}});function ae(e,r,t){var n=Object.assign({preventDefault:!1},r);function a(u){var i=e.useState(),c=C()(i,1),l=c[0],m=u.scope,g=(0,s.getValueByPath)(l,m),b=Be(g),j=typeof u.render=="function"?1:Array.isArray(u.children)?2:typeof u.children=="function"?3:0;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(we,P()({visible:j==0},n)),j===1?(0,p.jsx)(Y,{submitProps:b,children:u.render}):j===2?u.children.map(function(y){return(0,p.jsx)(Y,{submitProps:b,children:y})}):(0,p.jsx)(Y,{submitProps:b,children:u.children})]})}return d.memo(a,function(u,i){return u.name===i.name})}function Me(e,r,t){return ae(e,P()({type:"submit",title:"\u63D0\u4EA4",style:{borderRadius:"4px",padding:"8px",background:"#1c8ceb",border:"1px solid #1c8ceb",color:"#fff"}},r),t)}function ze(e,r,t){return ae(e,P()({type:"reset",title:"\u91CD\u7F6E",style:{borderRadius:"4px",padding:"8px",background:"#eee",border:"1px solid #bbb"}},r),t)}function He(e,r,t){e.length>=2&&e[0]==h&&e[e.length-1]=="validate"&&(t.scope||(t.scope="value"),t.depends||(t.depends=[]),t.depends.push([].concat(O()(e.slice(0,-1)),["value"])),t.initial=null,t.group="validate")}function Le(e){(0,ye.w)(e,$e)}function Ke(e,r,t){e.length>1&&e[e.length-1]=="execute"&&(t.immediate=!1,t.scope=[h],t.noReentry=!0)}function Ue(e,r,t){e.length>0&&e[0]==h&&t.depends&&t.depends.forEach(function(n,a){Array.isArray(n)&&n.length>0&&n[0]!=h?t.depends[a]=[h].concat(O()(n)):typeof n=="string"&&!n.startsWith("".concat(h,"."))&&(t.depends[a]="".concat(h,".").concat(n))})}function We(e){return function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;e.setEnableMutate(r)}}function Ye(e,r){var t=(0,Z.w)({getFieldName:function(u){return u.length>0?u[u.length-1]==="value"?u.slice(0,-1).join("."):u.join("."):""},singleton:!0},r);Le(e);var n=(0,s.createStore)({state:e},{debug:t.debug,singleton:t.singleton,computedThis:function(){return s.ComputedScopeRef.Root},computedScope:function(){return[h]},onCreateComputed:function(u,i,c){He(u,i,c),Ue(u,i,c),Ke(u,i,c)},onComputedContext:function(u,i){var c=i.computedType,l=i.contextType,m=i.valuePath;if(c==="Computed"&&l=="scope"&&m.length>0&&m[0]==h)return u.fields}});return{Form:Je.call(t,n),Field:X.call(t,n),Group:q.call(t,n),Action:ne(n,{},t),Submit:Me(n,{},t),Reset:ze(n,{},t),getAction:W,fields:V(function(){return n.state.fields}),actions:V(function(){return n.state.actions}),state:n.state,useState:n.useState,freeze:We(n),load:de(n,t),getValues:ve(n,t),computedObjects:n.computedObjects,watchObjects:n.watchObjects,store:n,validate:function(){var a=z()(T()().mark(function i(){return T()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.abrupt("return",n.computedObjects.runGroup("validate"));case 1:case"end":return l.stop()}},i)}));function u(){return a.apply(this,arguments)}return u}()}}function Je(e){return d.forwardRef(function(r,t){var n=r.children,a=(0,d.useCallback)(function(i){},[]),u=(0,d.useCallback)(function(i){},[]);return(0,p.jsx)("form",P()(P()({ref:t,className:"speedform-form"},r),{},{onSubmit:a,onReset:u,children:n}))})}}}]);
