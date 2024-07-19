const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./Home-DKCtrGsd.js","./Icon-q_-sDcgl.js","./Login-LTI-_ar6.js"])))=>i.map(i=>d[i]);
function Od(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const i=Object.getOwnPropertyDescriptor(r,o);i&&Object.defineProperty(e,o,i.get?i:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerPolicy&&(i.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?i.credentials="include":o.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();window.Vaadin=window.Vaadin||{};window.Vaadin.featureFlags=window.Vaadin.featureFlags||{};window.Vaadin.featureFlags.exampleFeatureFlag=!1;window.Vaadin.featureFlags.collaborationEngineBackend=!1;window.Vaadin.featureFlags.webPush=!1;window.Vaadin.featureFlags.formFillerAddon=!1;window.Vaadin.featureFlags.hillaI18n=!1;window.Vaadin.featureFlags.copilotFlow=!1;window.Vaadin.featureFlags.copilotI18n=!1;window.Vaadin.featureFlags.copilotExperimentalFeatures=!1;function Dd(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var Md={exports:{}},G={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jo=Symbol.for("react.element"),Bm=Symbol.for("react.portal"),Hm=Symbol.for("react.fragment"),Wm=Symbol.for("react.strict_mode"),Km=Symbol.for("react.profiler"),Qm=Symbol.for("react.provider"),Ym=Symbol.for("react.context"),Gm=Symbol.for("react.forward_ref"),Jm=Symbol.for("react.suspense"),Xm=Symbol.for("react.memo"),Zm=Symbol.for("react.lazy"),Nu=Symbol.iterator;function qm(e){return e===null||typeof e!="object"?null:(e=Nu&&e[Nu]||e["@@iterator"],typeof e=="function"?e:null)}var Ad={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Fd=Object.assign,Id={};function zr(e,t,n){this.props=e,this.context=t,this.refs=Id,this.updater=n||Ad}zr.prototype.isReactComponent={};zr.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};zr.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function jd(){}jd.prototype=zr.prototype;function fs(e,t,n){this.props=e,this.context=t,this.refs=Id,this.updater=n||Ad}var ps=fs.prototype=new jd;ps.constructor=fs;Fd(ps,zr.prototype);ps.isPureReactComponent=!0;var Ou=Array.isArray,Ud=Object.prototype.hasOwnProperty,ms={current:null},Vd={key:!0,ref:!0,__self:!0,__source:!0};function Bd(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Ud.call(t,r)&&!Vd.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var s=Array(a),u=0;u<a;u++)s[u]=arguments[u+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:jo,type:e,key:i,ref:l,props:o,_owner:ms.current}}function eh(e,t){return{$$typeof:jo,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function hs(e){return typeof e=="object"&&e!==null&&e.$$typeof===jo}function th(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Du=/\/+/g;function Tl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?th(""+e.key):t.toString(36)}function yi(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case jo:case Bm:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+Tl(l,0):r,Ou(o)?(n="",e!=null&&(n=e.replace(Du,"$&/")+"/"),yi(o,t,n,"",function(u){return u})):o!=null&&(hs(o)&&(o=eh(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(Du,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",Ou(e))for(var a=0;a<e.length;a++){i=e[a];var s=r+Tl(i,a);l+=yi(i,t,n,s,o)}else if(s=qm(e),typeof s=="function")for(e=s.call(e),a=0;!(i=e.next()).done;)i=i.value,s=r+Tl(i,a++),l+=yi(i,t,n,s,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function ei(e,t,n){if(e==null)return e;var r=[],o=0;return yi(e,r,"","",function(i){return t.call(n,i,o++)}),r}function nh(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Je={current:null},xi={transition:null},rh={ReactCurrentDispatcher:Je,ReactCurrentBatchConfig:xi,ReactCurrentOwner:ms};function Hd(){throw Error("act(...) is not supported in production builds of React.")}G.Children={map:ei,forEach:function(e,t,n){ei(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return ei(e,function(){t++}),t},toArray:function(e){return ei(e,function(t){return t})||[]},only:function(e){if(!hs(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};G.Component=zr;G.Fragment=Hm;G.Profiler=Km;G.PureComponent=fs;G.StrictMode=Wm;G.Suspense=Jm;G.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rh;G.act=Hd;G.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Fd({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=ms.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(s in t)Ud.call(t,s)&&!Vd.hasOwnProperty(s)&&(r[s]=t[s]===void 0&&a!==void 0?a[s]:t[s])}var s=arguments.length-2;if(s===1)r.children=n;else if(1<s){a=Array(s);for(var u=0;u<s;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:jo,type:e.type,key:o,ref:i,props:r,_owner:l}};G.createContext=function(e){return e={$$typeof:Ym,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:Qm,_context:e},e.Consumer=e};G.createElement=Bd;G.createFactory=function(e){var t=Bd.bind(null,e);return t.type=e,t};G.createRef=function(){return{current:null}};G.forwardRef=function(e){return{$$typeof:Gm,render:e}};G.isValidElement=hs;G.lazy=function(e){return{$$typeof:Zm,_payload:{_status:-1,_result:e},_init:nh}};G.memo=function(e,t){return{$$typeof:Xm,type:e,compare:t===void 0?null:t}};G.startTransition=function(e){var t=xi.transition;xi.transition={};try{e()}finally{xi.transition=t}};G.unstable_act=Hd;G.useCallback=function(e,t){return Je.current.useCallback(e,t)};G.useContext=function(e){return Je.current.useContext(e)};G.useDebugValue=function(){};G.useDeferredValue=function(e){return Je.current.useDeferredValue(e)};G.useEffect=function(e,t){return Je.current.useEffect(e,t)};G.useId=function(){return Je.current.useId()};G.useImperativeHandle=function(e,t,n){return Je.current.useImperativeHandle(e,t,n)};G.useInsertionEffect=function(e,t){return Je.current.useInsertionEffect(e,t)};G.useLayoutEffect=function(e,t){return Je.current.useLayoutEffect(e,t)};G.useMemo=function(e,t){return Je.current.useMemo(e,t)};G.useReducer=function(e,t,n){return Je.current.useReducer(e,t,n)};G.useRef=function(e){return Je.current.useRef(e)};G.useState=function(e){return Je.current.useState(e)};G.useSyncExternalStore=function(e,t,n){return Je.current.useSyncExternalStore(e,t,n)};G.useTransition=function(){return Je.current.useTransition()};G.version="18.3.1";Md.exports=G;var _=Md.exports;const oh=Dd(_),ih=Od({__proto__:null,default:oh},[_]);var Wd={exports:{}},st={},Kd={exports:{}},Qd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(b,F){var j=b.length;b.push(F);e:for(;0<j;){var X=j-1>>>1,q=b[X];if(0<o(q,F))b[X]=F,b[j]=q,j=X;else break e}}function n(b){return b.length===0?null:b[0]}function r(b){if(b.length===0)return null;var F=b[0],j=b.pop();if(j!==F){b[0]=j;e:for(var X=0,q=b.length,Ke=q>>>1;X<Ke;){var Fe=2*(X+1)-1,Ie=b[Fe],Le=Fe+1,Re=b[Le];if(0>o(Ie,j))Le<q&&0>o(Re,Ie)?(b[X]=Re,b[Le]=j,X=Le):(b[X]=Ie,b[Fe]=j,X=Fe);else if(Le<q&&0>o(Re,j))b[X]=Re,b[Le]=j,X=Le;else break e}}return F}function o(b,F){var j=b.sortIndex-F.sortIndex;return j!==0?j:b.id-F.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var s=[],u=[],d=1,f=null,c=3,x=!1,v=!1,w=!1,E=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(b){for(var F=n(u);F!==null;){if(F.callback===null)r(u);else if(F.startTime<=b)r(u),F.sortIndex=F.expirationTime,t(s,F);else break;F=n(u)}}function S(b){if(w=!1,g(b),!v)if(n(s)!==null)v=!0,Ae(P);else{var F=n(u);F!==null&&We(S,F.startTime-b)}}function P(b,F){v=!1,w&&(w=!1,m(z),z=-1),x=!0;var j=c;try{for(g(F),f=n(s);f!==null&&(!(f.expirationTime>F)||b&&!V());){var X=f.callback;if(typeof X=="function"){f.callback=null,c=f.priorityLevel;var q=X(f.expirationTime<=F);F=e.unstable_now(),typeof q=="function"?f.callback=q:f===n(s)&&r(s),g(F)}else r(s);f=n(s)}if(f!==null)var Ke=!0;else{var Fe=n(u);Fe!==null&&We(S,Fe.startTime-F),Ke=!1}return Ke}finally{f=null,c=j,x=!1}}var T=!1,h=null,z=-1,I=5,N=-1;function V(){return!(e.unstable_now()-N<I)}function ee(){if(h!==null){var b=e.unstable_now();N=b;var F=!0;try{F=h(!0,b)}finally{F?ne():(T=!1,h=null)}}else T=!1}var ne;if(typeof p=="function")ne=function(){p(ee)};else if(typeof MessageChannel<"u"){var oe=new MessageChannel,se=oe.port2;oe.port1.onmessage=ee,ne=function(){se.postMessage(null)}}else ne=function(){E(ee,0)};function Ae(b){h=b,T||(T=!0,ne())}function We(b,F){z=E(function(){b(e.unstable_now())},F)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(b){b.callback=null},e.unstable_continueExecution=function(){v||x||(v=!0,Ae(P))},e.unstable_forceFrameRate=function(b){0>b||125<b?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):I=0<b?Math.floor(1e3/b):5},e.unstable_getCurrentPriorityLevel=function(){return c},e.unstable_getFirstCallbackNode=function(){return n(s)},e.unstable_next=function(b){switch(c){case 1:case 2:case 3:var F=3;break;default:F=c}var j=c;c=F;try{return b()}finally{c=j}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(b,F){switch(b){case 1:case 2:case 3:case 4:case 5:break;default:b=3}var j=c;c=b;try{return F()}finally{c=j}},e.unstable_scheduleCallback=function(b,F,j){var X=e.unstable_now();switch(typeof j=="object"&&j!==null?(j=j.delay,j=typeof j=="number"&&0<j?X+j:X):j=X,b){case 1:var q=-1;break;case 2:q=250;break;case 5:q=1073741823;break;case 4:q=1e4;break;default:q=5e3}return q=j+q,b={id:d++,callback:F,priorityLevel:b,startTime:j,expirationTime:q,sortIndex:-1},j>X?(b.sortIndex=j,t(u,b),n(s)===null&&b===n(u)&&(w?(m(z),z=-1):w=!0,We(S,j-X))):(b.sortIndex=q,t(s,b),v||x||(v=!0,Ae(P))),b},e.unstable_shouldYield=V,e.unstable_wrapCallback=function(b){var F=c;return function(){var j=c;c=F;try{return b.apply(this,arguments)}finally{c=j}}}})(Qd);Kd.exports=Qd;var lh=Kd.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ah=_,at=lh;function L(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Yd=new Set,vo={};function Un(e,t){xr(e,t),xr(e+"Capture",t)}function xr(e,t){for(vo[e]=t,e=0;e<t.length;e++)Yd.add(t[e])}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ua=Object.prototype.hasOwnProperty,sh=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mu={},Au={};function uh(e){return ua.call(Au,e)?!0:ua.call(Mu,e)?!1:sh.test(e)?Au[e]=!0:(Mu[e]=!0,!1)}function ch(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function dh(e,t,n,r){if(t===null||typeof t>"u"||ch(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Xe(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Me={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Me[e]=new Xe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Me[t]=new Xe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Me[e]=new Xe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Me[e]=new Xe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Me[e]=new Xe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Me[e]=new Xe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Me[e]=new Xe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Me[e]=new Xe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Me[e]=new Xe(e,5,!1,e.toLowerCase(),null,!1,!1)});var gs=/[\-:]([a-z])/g;function vs(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(gs,vs);Me[t]=new Xe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(gs,vs);Me[t]=new Xe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(gs,vs);Me[t]=new Xe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Me[e]=new Xe(e,1,!1,e.toLowerCase(),null,!1,!1)});Me.xlinkHref=new Xe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Me[e]=new Xe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ys(e,t,n,r){var o=Me.hasOwnProperty(t)?Me[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(dh(t,n,o,r)&&(n=null),r||o===null?uh(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Kt=ah.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ti=Symbol.for("react.element"),qn=Symbol.for("react.portal"),er=Symbol.for("react.fragment"),xs=Symbol.for("react.strict_mode"),ca=Symbol.for("react.profiler"),Gd=Symbol.for("react.provider"),Jd=Symbol.for("react.context"),ws=Symbol.for("react.forward_ref"),da=Symbol.for("react.suspense"),fa=Symbol.for("react.suspense_list"),Ss=Symbol.for("react.memo"),qt=Symbol.for("react.lazy"),Xd=Symbol.for("react.offscreen"),Fu=Symbol.iterator;function Fr(e){return e===null||typeof e!="object"?null:(e=Fu&&e[Fu]||e["@@iterator"],typeof e=="function"?e:null)}var ge=Object.assign,Nl;function qr(e){if(Nl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Nl=t&&t[1]||""}return`
`+Nl+e}var Ol=!1;function Dl(e,t){if(!e||Ol)return"";Ol=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var s=`
`+o[l].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}while(1<=l&&0<=a);break}}}finally{Ol=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?qr(e):""}function fh(e){switch(e.tag){case 5:return qr(e.type);case 16:return qr("Lazy");case 13:return qr("Suspense");case 19:return qr("SuspenseList");case 0:case 2:case 15:return e=Dl(e.type,!1),e;case 11:return e=Dl(e.type.render,!1),e;case 1:return e=Dl(e.type,!0),e;default:return""}}function pa(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case er:return"Fragment";case qn:return"Portal";case ca:return"Profiler";case xs:return"StrictMode";case da:return"Suspense";case fa:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Jd:return(e.displayName||"Context")+".Consumer";case Gd:return(e._context.displayName||"Context")+".Provider";case ws:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ss:return t=e.displayName||null,t!==null?t:pa(e.type)||"Memo";case qt:t=e._payload,e=e._init;try{return pa(e(t))}catch{}}return null}function ph(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return pa(t);case 8:return t===xs?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function hn(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Zd(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function mh(e){var t=Zd(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function ni(e){e._valueTracker||(e._valueTracker=mh(e))}function qd(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Zd(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function $i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function ma(e,t){var n=t.checked;return ge({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Iu(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=hn(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ef(e,t){t=t.checked,t!=null&&ys(e,"checked",t,!1)}function ha(e,t){ef(e,t);var n=hn(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ga(e,t.type,n):t.hasOwnProperty("defaultValue")&&ga(e,t.type,hn(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ju(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ga(e,t,n){(t!=="number"||$i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var eo=Array.isArray;function fr(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+hn(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function va(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(L(91));return ge({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Uu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(L(92));if(eo(n)){if(1<n.length)throw Error(L(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:hn(n)}}function tf(e,t){var n=hn(t.value),r=hn(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Vu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nf(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ya(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nf(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ri,rf=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ri=ri||document.createElement("div"),ri.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ri.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function yo(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var ro={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},hh=["Webkit","ms","Moz","O"];Object.keys(ro).forEach(function(e){hh.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),ro[t]=ro[e]})});function of(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||ro.hasOwnProperty(e)&&ro[e]?(""+t).trim():t+"px"}function lf(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=of(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var gh=ge({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function xa(e,t){if(t){if(gh[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(L(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(L(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(L(61))}if(t.style!=null&&typeof t.style!="object")throw Error(L(62))}}function wa(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Sa=null;function ks(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ka=null,pr=null,mr=null;function Bu(e){if(e=Bo(e)){if(typeof ka!="function")throw Error(L(280));var t=e.stateNode;t&&(t=fl(t),ka(e.stateNode,e.type,t))}}function af(e){pr?mr?mr.push(e):mr=[e]:pr=e}function sf(){if(pr){var e=pr,t=mr;if(mr=pr=null,Bu(e),t)for(e=0;e<t.length;e++)Bu(t[e])}}function uf(e,t){return e(t)}function cf(){}var Ml=!1;function df(e,t,n){if(Ml)return e(t,n);Ml=!0;try{return uf(e,t,n)}finally{Ml=!1,(pr!==null||mr!==null)&&(cf(),sf())}}function xo(e,t){var n=e.stateNode;if(n===null)return null;var r=fl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(L(231,t,typeof n));return n}var Ea=!1;if(Ut)try{var Ir={};Object.defineProperty(Ir,"passive",{get:function(){Ea=!0}}),window.addEventListener("test",Ir,Ir),window.removeEventListener("test",Ir,Ir)}catch{Ea=!1}function vh(e,t,n,r,o,i,l,a,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var oo=!1,Ti=null,Ni=!1,Ca=null,yh={onError:function(e){oo=!0,Ti=e}};function xh(e,t,n,r,o,i,l,a,s){oo=!1,Ti=null,vh.apply(yh,arguments)}function wh(e,t,n,r,o,i,l,a,s){if(xh.apply(this,arguments),oo){if(oo){var u=Ti;oo=!1,Ti=null}else throw Error(L(198));Ni||(Ni=!0,Ca=u)}}function Vn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function ff(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Hu(e){if(Vn(e)!==e)throw Error(L(188))}function Sh(e){var t=e.alternate;if(!t){if(t=Vn(e),t===null)throw Error(L(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return Hu(o),e;if(i===r)return Hu(o),t;i=i.sibling}throw Error(L(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(L(189))}}if(n.alternate!==r)throw Error(L(190))}if(n.tag!==3)throw Error(L(188));return n.stateNode.current===n?e:t}function pf(e){return e=Sh(e),e!==null?mf(e):null}function mf(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=mf(e);if(t!==null)return t;e=e.sibling}return null}var hf=at.unstable_scheduleCallback,Wu=at.unstable_cancelCallback,kh=at.unstable_shouldYield,Eh=at.unstable_requestPaint,we=at.unstable_now,Ch=at.unstable_getCurrentPriorityLevel,Es=at.unstable_ImmediatePriority,gf=at.unstable_UserBlockingPriority,Oi=at.unstable_NormalPriority,bh=at.unstable_LowPriority,vf=at.unstable_IdlePriority,sl=null,Tt=null;function Ph(e){if(Tt&&typeof Tt.onCommitFiberRoot=="function")try{Tt.onCommitFiberRoot(sl,e,void 0,(e.current.flags&128)===128)}catch{}}var Ct=Math.clz32?Math.clz32:Rh,_h=Math.log,Lh=Math.LN2;function Rh(e){return e>>>=0,e===0?32:31-(_h(e)/Lh|0)|0}var oi=64,ii=4194304;function to(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Di(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=to(a):(i&=l,i!==0&&(r=to(i)))}else l=n&~o,l!==0?r=to(l):i!==0&&(r=to(i));if(r===0)return 0;if(t!==0&&t!==r&&!(t&o)&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Ct(t),o=1<<n,r|=e[n],t&=~o;return r}function zh(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $h(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-Ct(i),a=1<<l,s=o[l];s===-1?(!(a&n)||a&r)&&(o[l]=zh(a,t)):s<=t&&(e.expiredLanes|=a),i&=~a}}function ba(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function yf(){var e=oi;return oi<<=1,!(oi&4194240)&&(oi=64),e}function Al(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Uo(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Ct(t),e[t]=n}function Th(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Ct(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function Cs(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ct(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var te=0;function xf(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var wf,bs,Sf,kf,Ef,Pa=!1,li=[],an=null,sn=null,un=null,wo=new Map,So=new Map,tn=[],Nh="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Ku(e,t){switch(e){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":sn=null;break;case"mouseover":case"mouseout":un=null;break;case"pointerover":case"pointerout":wo.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":So.delete(t.pointerId)}}function jr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=Bo(t),t!==null&&bs(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function Oh(e,t,n,r,o){switch(t){case"focusin":return an=jr(an,e,t,n,r,o),!0;case"dragenter":return sn=jr(sn,e,t,n,r,o),!0;case"mouseover":return un=jr(un,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return wo.set(i,jr(wo.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,So.set(i,jr(So.get(i)||null,e,t,n,r,o)),!0}return!1}function Cf(e){var t=Pn(e.target);if(t!==null){var n=Vn(t);if(n!==null){if(t=n.tag,t===13){if(t=ff(n),t!==null){e.blockedOn=t,Ef(e.priority,function(){Sf(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function wi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=_a(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);Sa=r,n.target.dispatchEvent(r),Sa=null}else return t=Bo(n),t!==null&&bs(t),e.blockedOn=n,!1;t.shift()}return!0}function Qu(e,t,n){wi(e)&&n.delete(t)}function Dh(){Pa=!1,an!==null&&wi(an)&&(an=null),sn!==null&&wi(sn)&&(sn=null),un!==null&&wi(un)&&(un=null),wo.forEach(Qu),So.forEach(Qu)}function Ur(e,t){e.blockedOn===t&&(e.blockedOn=null,Pa||(Pa=!0,at.unstable_scheduleCallback(at.unstable_NormalPriority,Dh)))}function ko(e){function t(o){return Ur(o,e)}if(0<li.length){Ur(li[0],e);for(var n=1;n<li.length;n++){var r=li[n];r.blockedOn===e&&(r.blockedOn=null)}}for(an!==null&&Ur(an,e),sn!==null&&Ur(sn,e),un!==null&&Ur(un,e),wo.forEach(t),So.forEach(t),n=0;n<tn.length;n++)r=tn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<tn.length&&(n=tn[0],n.blockedOn===null);)Cf(n),n.blockedOn===null&&tn.shift()}var hr=Kt.ReactCurrentBatchConfig,Mi=!0;function Mh(e,t,n,r){var o=te,i=hr.transition;hr.transition=null;try{te=1,Ps(e,t,n,r)}finally{te=o,hr.transition=i}}function Ah(e,t,n,r){var o=te,i=hr.transition;hr.transition=null;try{te=4,Ps(e,t,n,r)}finally{te=o,hr.transition=i}}function Ps(e,t,n,r){if(Mi){var o=_a(e,t,n,r);if(o===null)Ql(e,t,r,Ai,n),Ku(e,r);else if(Oh(o,e,t,n,r))r.stopPropagation();else if(Ku(e,r),t&4&&-1<Nh.indexOf(e)){for(;o!==null;){var i=Bo(o);if(i!==null&&wf(i),i=_a(e,t,n,r),i===null&&Ql(e,t,r,Ai,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else Ql(e,t,r,null,n)}}var Ai=null;function _a(e,t,n,r){if(Ai=null,e=ks(r),e=Pn(e),e!==null)if(t=Vn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=ff(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function bf(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ch()){case Es:return 1;case gf:return 4;case Oi:case bh:return 16;case vf:return 536870912;default:return 16}default:return 16}}var on=null,_s=null,Si=null;function Pf(){if(Si)return Si;var e,t=_s,n=t.length,r,o="value"in on?on.value:on.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Si=o.slice(e,1<r?1-r:void 0)}function ki(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function ai(){return!0}function Yu(){return!1}function ut(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?ai:Yu,this.isPropagationStopped=Yu,this}return ge(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ai)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ai)},persist:function(){},isPersistent:ai}),t}var $r={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ls=ut($r),Vo=ge({},$r,{view:0,detail:0}),Fh=ut(Vo),Fl,Il,Vr,ul=ge({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Rs,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Vr&&(Vr&&e.type==="mousemove"?(Fl=e.screenX-Vr.screenX,Il=e.screenY-Vr.screenY):Il=Fl=0,Vr=e),Fl)},movementY:function(e){return"movementY"in e?e.movementY:Il}}),Gu=ut(ul),Ih=ge({},ul,{dataTransfer:0}),jh=ut(Ih),Uh=ge({},Vo,{relatedTarget:0}),jl=ut(Uh),Vh=ge({},$r,{animationName:0,elapsedTime:0,pseudoElement:0}),Bh=ut(Vh),Hh=ge({},$r,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wh=ut(Hh),Kh=ge({},$r,{data:0}),Ju=ut(Kh),Qh={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Yh={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Gh={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Jh(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Gh[e])?!!t[e]:!1}function Rs(){return Jh}var Xh=ge({},Vo,{key:function(e){if(e.key){var t=Qh[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=ki(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Yh[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Rs,charCode:function(e){return e.type==="keypress"?ki(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?ki(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Zh=ut(Xh),qh=ge({},ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xu=ut(qh),eg=ge({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Rs}),tg=ut(eg),ng=ge({},$r,{propertyName:0,elapsedTime:0,pseudoElement:0}),rg=ut(ng),og=ge({},ul,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),ig=ut(og),lg=[9,13,27,32],zs=Ut&&"CompositionEvent"in window,io=null;Ut&&"documentMode"in document&&(io=document.documentMode);var ag=Ut&&"TextEvent"in window&&!io,_f=Ut&&(!zs||io&&8<io&&11>=io),Zu=" ",qu=!1;function Lf(e,t){switch(e){case"keyup":return lg.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Rf(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var tr=!1;function sg(e,t){switch(e){case"compositionend":return Rf(t);case"keypress":return t.which!==32?null:(qu=!0,Zu);case"textInput":return e=t.data,e===Zu&&qu?null:e;default:return null}}function ug(e,t){if(tr)return e==="compositionend"||!zs&&Lf(e,t)?(e=Pf(),Si=_s=on=null,tr=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return _f&&t.locale!=="ko"?null:t.data;default:return null}}var cg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ec(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!cg[e.type]:t==="textarea"}function zf(e,t,n,r){af(r),t=Fi(t,"onChange"),0<t.length&&(n=new Ls("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var lo=null,Eo=null;function dg(e){Uf(e,0)}function cl(e){var t=or(e);if(qd(t))return e}function fg(e,t){if(e==="change")return t}var $f=!1;if(Ut){var Ul;if(Ut){var Vl="oninput"in document;if(!Vl){var tc=document.createElement("div");tc.setAttribute("oninput","return;"),Vl=typeof tc.oninput=="function"}Ul=Vl}else Ul=!1;$f=Ul&&(!document.documentMode||9<document.documentMode)}function nc(){lo&&(lo.detachEvent("onpropertychange",Tf),Eo=lo=null)}function Tf(e){if(e.propertyName==="value"&&cl(Eo)){var t=[];zf(t,Eo,e,ks(e)),df(dg,t)}}function pg(e,t,n){e==="focusin"?(nc(),lo=t,Eo=n,lo.attachEvent("onpropertychange",Tf)):e==="focusout"&&nc()}function mg(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return cl(Eo)}function hg(e,t){if(e==="click")return cl(t)}function gg(e,t){if(e==="input"||e==="change")return cl(t)}function vg(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Pt=typeof Object.is=="function"?Object.is:vg;function Co(e,t){if(Pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!ua.call(t,o)||!Pt(e[o],t[o]))return!1}return!0}function rc(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function oc(e,t){var n=rc(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=rc(n)}}function Nf(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Nf(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Of(){for(var e=window,t=$i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=$i(e.document)}return t}function $s(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function yg(e){var t=Of(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Nf(n.ownerDocument.documentElement,n)){if(r!==null&&$s(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=oc(n,i);var l=oc(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var xg=Ut&&"documentMode"in document&&11>=document.documentMode,nr=null,La=null,ao=null,Ra=!1;function ic(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ra||nr==null||nr!==$i(r)||(r=nr,"selectionStart"in r&&$s(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ao&&Co(ao,r)||(ao=r,r=Fi(La,"onSelect"),0<r.length&&(t=new Ls("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=nr)))}function si(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var rr={animationend:si("Animation","AnimationEnd"),animationiteration:si("Animation","AnimationIteration"),animationstart:si("Animation","AnimationStart"),transitionend:si("Transition","TransitionEnd")},Bl={},Df={};Ut&&(Df=document.createElement("div").style,"AnimationEvent"in window||(delete rr.animationend.animation,delete rr.animationiteration.animation,delete rr.animationstart.animation),"TransitionEvent"in window||delete rr.transitionend.transition);function dl(e){if(Bl[e])return Bl[e];if(!rr[e])return e;var t=rr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Df)return Bl[e]=t[n];return e}var Mf=dl("animationend"),Af=dl("animationiteration"),Ff=dl("animationstart"),If=dl("transitionend"),jf=new Map,lc="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vn(e,t){jf.set(e,t),Un(t,[e])}for(var Hl=0;Hl<lc.length;Hl++){var Wl=lc[Hl],wg=Wl.toLowerCase(),Sg=Wl[0].toUpperCase()+Wl.slice(1);vn(wg,"on"+Sg)}vn(Mf,"onAnimationEnd");vn(Af,"onAnimationIteration");vn(Ff,"onAnimationStart");vn("dblclick","onDoubleClick");vn("focusin","onFocus");vn("focusout","onBlur");vn(If,"onTransitionEnd");xr("onMouseEnter",["mouseout","mouseover"]);xr("onMouseLeave",["mouseout","mouseover"]);xr("onPointerEnter",["pointerout","pointerover"]);xr("onPointerLeave",["pointerout","pointerover"]);Un("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Un("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Un("onBeforeInput",["compositionend","keypress","textInput","paste"]);Un("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Un("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var no="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),kg=new Set("cancel close invalid load scroll toggle".split(" ").concat(no));function ac(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,wh(r,t,void 0,e),e.currentTarget=null}function Uf(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],s=a.instance,u=a.currentTarget;if(a=a.listener,s!==i&&o.isPropagationStopped())break e;ac(o,a,u),i=s}else for(l=0;l<r.length;l++){if(a=r[l],s=a.instance,u=a.currentTarget,a=a.listener,s!==i&&o.isPropagationStopped())break e;ac(o,a,u),i=s}}}if(Ni)throw e=Ca,Ni=!1,Ca=null,e}function le(e,t){var n=t[Oa];n===void 0&&(n=t[Oa]=new Set);var r=e+"__bubble";n.has(r)||(Vf(t,e,2,!1),n.add(r))}function Kl(e,t,n){var r=0;t&&(r|=4),Vf(n,e,r,t)}var ui="_reactListening"+Math.random().toString(36).slice(2);function bo(e){if(!e[ui]){e[ui]=!0,Yd.forEach(function(n){n!=="selectionchange"&&(kg.has(n)||Kl(n,!1,e),Kl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ui]||(t[ui]=!0,Kl("selectionchange",!1,t))}}function Vf(e,t,n,r){switch(bf(t)){case 1:var o=Mh;break;case 4:o=Ah;break;default:o=Ps}n=o.bind(null,t,n,e),o=void 0,!Ea||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Ql(e,t,n,r,o){var i=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var s=l.tag;if((s===3||s===4)&&(s=l.stateNode.containerInfo,s===o||s.nodeType===8&&s.parentNode===o))return;l=l.return}for(;a!==null;){if(l=Pn(a),l===null)return;if(s=l.tag,s===5||s===6){r=i=l;continue e}a=a.parentNode}}r=r.return}df(function(){var u=i,d=ks(n),f=[];e:{var c=jf.get(e);if(c!==void 0){var x=Ls,v=e;switch(e){case"keypress":if(ki(n)===0)break e;case"keydown":case"keyup":x=Zh;break;case"focusin":v="focus",x=jl;break;case"focusout":v="blur",x=jl;break;case"beforeblur":case"afterblur":x=jl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":x=Gu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":x=jh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":x=tg;break;case Mf:case Af:case Ff:x=Bh;break;case If:x=rg;break;case"scroll":x=Fh;break;case"wheel":x=ig;break;case"copy":case"cut":case"paste":x=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":x=Xu}var w=(t&4)!==0,E=!w&&e==="scroll",m=w?c!==null?c+"Capture":null:c;w=[];for(var p=u,g;p!==null;){g=p;var S=g.stateNode;if(g.tag===5&&S!==null&&(g=S,m!==null&&(S=xo(p,m),S!=null&&w.push(Po(p,S,g)))),E)break;p=p.return}0<w.length&&(c=new x(c,v,null,n,d),f.push({event:c,listeners:w}))}}if(!(t&7)){e:{if(c=e==="mouseover"||e==="pointerover",x=e==="mouseout"||e==="pointerout",c&&n!==Sa&&(v=n.relatedTarget||n.fromElement)&&(Pn(v)||v[Vt]))break e;if((x||c)&&(c=d.window===d?d:(c=d.ownerDocument)?c.defaultView||c.parentWindow:window,x?(v=n.relatedTarget||n.toElement,x=u,v=v?Pn(v):null,v!==null&&(E=Vn(v),v!==E||v.tag!==5&&v.tag!==6)&&(v=null)):(x=null,v=u),x!==v)){if(w=Gu,S="onMouseLeave",m="onMouseEnter",p="mouse",(e==="pointerout"||e==="pointerover")&&(w=Xu,S="onPointerLeave",m="onPointerEnter",p="pointer"),E=x==null?c:or(x),g=v==null?c:or(v),c=new w(S,p+"leave",x,n,d),c.target=E,c.relatedTarget=g,S=null,Pn(d)===u&&(w=new w(m,p+"enter",v,n,d),w.target=g,w.relatedTarget=E,S=w),E=S,x&&v)t:{for(w=x,m=v,p=0,g=w;g;g=Qn(g))p++;for(g=0,S=m;S;S=Qn(S))g++;for(;0<p-g;)w=Qn(w),p--;for(;0<g-p;)m=Qn(m),g--;for(;p--;){if(w===m||m!==null&&w===m.alternate)break t;w=Qn(w),m=Qn(m)}w=null}else w=null;x!==null&&sc(f,c,x,w,!1),v!==null&&E!==null&&sc(f,E,v,w,!0)}}e:{if(c=u?or(u):window,x=c.nodeName&&c.nodeName.toLowerCase(),x==="select"||x==="input"&&c.type==="file")var P=fg;else if(ec(c))if($f)P=gg;else{P=mg;var T=pg}else(x=c.nodeName)&&x.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(P=hg);if(P&&(P=P(e,u))){zf(f,P,n,d);break e}T&&T(e,c,u),e==="focusout"&&(T=c._wrapperState)&&T.controlled&&c.type==="number"&&ga(c,"number",c.value)}switch(T=u?or(u):window,e){case"focusin":(ec(T)||T.contentEditable==="true")&&(nr=T,La=u,ao=null);break;case"focusout":ao=La=nr=null;break;case"mousedown":Ra=!0;break;case"contextmenu":case"mouseup":case"dragend":Ra=!1,ic(f,n,d);break;case"selectionchange":if(xg)break;case"keydown":case"keyup":ic(f,n,d)}var h;if(zs)e:{switch(e){case"compositionstart":var z="onCompositionStart";break e;case"compositionend":z="onCompositionEnd";break e;case"compositionupdate":z="onCompositionUpdate";break e}z=void 0}else tr?Lf(e,n)&&(z="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(z="onCompositionStart");z&&(_f&&n.locale!=="ko"&&(tr||z!=="onCompositionStart"?z==="onCompositionEnd"&&tr&&(h=Pf()):(on=d,_s="value"in on?on.value:on.textContent,tr=!0)),T=Fi(u,z),0<T.length&&(z=new Ju(z,e,null,n,d),f.push({event:z,listeners:T}),h?z.data=h:(h=Rf(n),h!==null&&(z.data=h)))),(h=ag?sg(e,n):ug(e,n))&&(u=Fi(u,"onBeforeInput"),0<u.length&&(d=new Ju("onBeforeInput","beforeinput",null,n,d),f.push({event:d,listeners:u}),d.data=h))}Uf(f,t)})}function Po(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Fi(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=xo(e,n),i!=null&&r.unshift(Po(e,i,o)),i=xo(e,t),i!=null&&r.push(Po(e,i,o))),e=e.return}return r}function Qn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function sc(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,s=a.alternate,u=a.stateNode;if(s!==null&&s===r)break;a.tag===5&&u!==null&&(a=u,o?(s=xo(n,i),s!=null&&l.unshift(Po(n,s,a))):o||(s=xo(n,i),s!=null&&l.push(Po(n,s,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Eg=/\r\n?/g,Cg=/\u0000|\uFFFD/g;function uc(e){return(typeof e=="string"?e:""+e).replace(Eg,`
`).replace(Cg,"")}function ci(e,t,n){if(t=uc(t),uc(e)!==t&&n)throw Error(L(425))}function Ii(){}var za=null,$a=null;function Ta(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Na=typeof setTimeout=="function"?setTimeout:void 0,bg=typeof clearTimeout=="function"?clearTimeout:void 0,cc=typeof Promise=="function"?Promise:void 0,Pg=typeof queueMicrotask=="function"?queueMicrotask:typeof cc<"u"?function(e){return cc.resolve(null).then(e).catch(_g)}:Na;function _g(e){setTimeout(function(){throw e})}function Yl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),ko(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);ko(t)}function cn(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function dc(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Tr=Math.random().toString(36).slice(2),zt="__reactFiber$"+Tr,_o="__reactProps$"+Tr,Vt="__reactContainer$"+Tr,Oa="__reactEvents$"+Tr,Lg="__reactListeners$"+Tr,Rg="__reactHandles$"+Tr;function Pn(e){var t=e[zt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Vt]||n[zt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=dc(e);e!==null;){if(n=e[zt])return n;e=dc(e)}return t}e=n,n=e.parentNode}return null}function Bo(e){return e=e[zt]||e[Vt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function or(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(L(33))}function fl(e){return e[_o]||null}var Da=[],ir=-1;function yn(e){return{current:e}}function ae(e){0>ir||(e.current=Da[ir],Da[ir]=null,ir--)}function ie(e,t){ir++,Da[ir]=e.current,e.current=t}var gn={},Be=yn(gn),et=yn(!1),On=gn;function wr(e,t){var n=e.type.contextTypes;if(!n)return gn;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function tt(e){return e=e.childContextTypes,e!=null}function ji(){ae(et),ae(Be)}function fc(e,t,n){if(Be.current!==gn)throw Error(L(168));ie(Be,t),ie(et,n)}function Bf(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(L(108,ph(e)||"Unknown",o));return ge({},n,r)}function Ui(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||gn,On=Be.current,ie(Be,e),ie(et,et.current),!0}function pc(e,t,n){var r=e.stateNode;if(!r)throw Error(L(169));n?(e=Bf(e,t,On),r.__reactInternalMemoizedMergedChildContext=e,ae(et),ae(Be),ie(Be,e)):ae(et),ie(et,n)}var Mt=null,pl=!1,Gl=!1;function Hf(e){Mt===null?Mt=[e]:Mt.push(e)}function zg(e){pl=!0,Hf(e)}function xn(){if(!Gl&&Mt!==null){Gl=!0;var e=0,t=te;try{var n=Mt;for(te=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Mt=null,pl=!1}catch(o){throw Mt!==null&&(Mt=Mt.slice(e+1)),hf(Es,xn),o}finally{te=t,Gl=!1}}return null}var lr=[],ar=0,Vi=null,Bi=0,ft=[],pt=0,Dn=null,At=1,Ft="";function Cn(e,t){lr[ar++]=Bi,lr[ar++]=Vi,Vi=e,Bi=t}function Wf(e,t,n){ft[pt++]=At,ft[pt++]=Ft,ft[pt++]=Dn,Dn=e;var r=At;e=Ft;var o=32-Ct(r)-1;r&=~(1<<o),n+=1;var i=32-Ct(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,At=1<<32-Ct(t)+o|n<<o|r,Ft=i+e}else At=1<<i|n<<o|r,Ft=e}function Ts(e){e.return!==null&&(Cn(e,1),Wf(e,1,0))}function Ns(e){for(;e===Vi;)Vi=lr[--ar],lr[ar]=null,Bi=lr[--ar],lr[ar]=null;for(;e===Dn;)Dn=ft[--pt],ft[pt]=null,Ft=ft[--pt],ft[pt]=null,At=ft[--pt],ft[pt]=null}var lt=null,it=null,de=!1,Et=null;function Kf(e,t){var n=ht(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function mc(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,lt=e,it=cn(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,lt=e,it=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Dn!==null?{id:At,overflow:Ft}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=ht(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,lt=e,it=null,!0):!1;default:return!1}}function Ma(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Aa(e){if(de){var t=it;if(t){var n=t;if(!mc(e,t)){if(Ma(e))throw Error(L(418));t=cn(n.nextSibling);var r=lt;t&&mc(e,t)?Kf(r,n):(e.flags=e.flags&-4097|2,de=!1,lt=e)}}else{if(Ma(e))throw Error(L(418));e.flags=e.flags&-4097|2,de=!1,lt=e}}}function hc(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;lt=e}function di(e){if(e!==lt)return!1;if(!de)return hc(e),de=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ta(e.type,e.memoizedProps)),t&&(t=it)){if(Ma(e))throw Qf(),Error(L(418));for(;t;)Kf(e,t),t=cn(t.nextSibling)}if(hc(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(L(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){it=cn(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}it=null}}else it=lt?cn(e.stateNode.nextSibling):null;return!0}function Qf(){for(var e=it;e;)e=cn(e.nextSibling)}function Sr(){it=lt=null,de=!1}function Os(e){Et===null?Et=[e]:Et.push(e)}var $g=Kt.ReactCurrentBatchConfig;function Br(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(L(309));var r=n.stateNode}if(!r)throw Error(L(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(L(284));if(!n._owner)throw Error(L(290,e))}return e}function fi(e,t){throw e=Object.prototype.toString.call(t),Error(L(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function gc(e){var t=e._init;return t(e._payload)}function Yf(e){function t(m,p){if(e){var g=m.deletions;g===null?(m.deletions=[p],m.flags|=16):g.push(p)}}function n(m,p){if(!e)return null;for(;p!==null;)t(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function o(m,p){return m=mn(m,p),m.index=0,m.sibling=null,m}function i(m,p,g){return m.index=g,e?(g=m.alternate,g!==null?(g=g.index,g<p?(m.flags|=2,p):g):(m.flags|=2,p)):(m.flags|=1048576,p)}function l(m){return e&&m.alternate===null&&(m.flags|=2),m}function a(m,p,g,S){return p===null||p.tag!==6?(p=na(g,m.mode,S),p.return=m,p):(p=o(p,g),p.return=m,p)}function s(m,p,g,S){var P=g.type;return P===er?d(m,p,g.props.children,S,g.key):p!==null&&(p.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qt&&gc(P)===p.type)?(S=o(p,g.props),S.ref=Br(m,p,g),S.return=m,S):(S=Ri(g.type,g.key,g.props,null,m.mode,S),S.ref=Br(m,p,g),S.return=m,S)}function u(m,p,g,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==g.containerInfo||p.stateNode.implementation!==g.implementation?(p=ra(g,m.mode,S),p.return=m,p):(p=o(p,g.children||[]),p.return=m,p)}function d(m,p,g,S,P){return p===null||p.tag!==7?(p=Nn(g,m.mode,S,P),p.return=m,p):(p=o(p,g),p.return=m,p)}function f(m,p,g){if(typeof p=="string"&&p!==""||typeof p=="number")return p=na(""+p,m.mode,g),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case ti:return g=Ri(p.type,p.key,p.props,null,m.mode,g),g.ref=Br(m,null,p),g.return=m,g;case qn:return p=ra(p,m.mode,g),p.return=m,p;case qt:var S=p._init;return f(m,S(p._payload),g)}if(eo(p)||Fr(p))return p=Nn(p,m.mode,g,null),p.return=m,p;fi(m,p)}return null}function c(m,p,g,S){var P=p!==null?p.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return P!==null?null:a(m,p,""+g,S);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ti:return g.key===P?s(m,p,g,S):null;case qn:return g.key===P?u(m,p,g,S):null;case qt:return P=g._init,c(m,p,P(g._payload),S)}if(eo(g)||Fr(g))return P!==null?null:d(m,p,g,S,null);fi(m,g)}return null}function x(m,p,g,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(g)||null,a(p,m,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ti:return m=m.get(S.key===null?g:S.key)||null,s(p,m,S,P);case qn:return m=m.get(S.key===null?g:S.key)||null,u(p,m,S,P);case qt:var T=S._init;return x(m,p,g,T(S._payload),P)}if(eo(S)||Fr(S))return m=m.get(g)||null,d(p,m,S,P,null);fi(p,S)}return null}function v(m,p,g,S){for(var P=null,T=null,h=p,z=p=0,I=null;h!==null&&z<g.length;z++){h.index>z?(I=h,h=null):I=h.sibling;var N=c(m,h,g[z],S);if(N===null){h===null&&(h=I);break}e&&h&&N.alternate===null&&t(m,h),p=i(N,p,z),T===null?P=N:T.sibling=N,T=N,h=I}if(z===g.length)return n(m,h),de&&Cn(m,z),P;if(h===null){for(;z<g.length;z++)h=f(m,g[z],S),h!==null&&(p=i(h,p,z),T===null?P=h:T.sibling=h,T=h);return de&&Cn(m,z),P}for(h=r(m,h);z<g.length;z++)I=x(h,m,z,g[z],S),I!==null&&(e&&I.alternate!==null&&h.delete(I.key===null?z:I.key),p=i(I,p,z),T===null?P=I:T.sibling=I,T=I);return e&&h.forEach(function(V){return t(m,V)}),de&&Cn(m,z),P}function w(m,p,g,S){var P=Fr(g);if(typeof P!="function")throw Error(L(150));if(g=P.call(g),g==null)throw Error(L(151));for(var T=P=null,h=p,z=p=0,I=null,N=g.next();h!==null&&!N.done;z++,N=g.next()){h.index>z?(I=h,h=null):I=h.sibling;var V=c(m,h,N.value,S);if(V===null){h===null&&(h=I);break}e&&h&&V.alternate===null&&t(m,h),p=i(V,p,z),T===null?P=V:T.sibling=V,T=V,h=I}if(N.done)return n(m,h),de&&Cn(m,z),P;if(h===null){for(;!N.done;z++,N=g.next())N=f(m,N.value,S),N!==null&&(p=i(N,p,z),T===null?P=N:T.sibling=N,T=N);return de&&Cn(m,z),P}for(h=r(m,h);!N.done;z++,N=g.next())N=x(h,m,z,N.value,S),N!==null&&(e&&N.alternate!==null&&h.delete(N.key===null?z:N.key),p=i(N,p,z),T===null?P=N:T.sibling=N,T=N);return e&&h.forEach(function(ee){return t(m,ee)}),de&&Cn(m,z),P}function E(m,p,g,S){if(typeof g=="object"&&g!==null&&g.type===er&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case ti:e:{for(var P=g.key,T=p;T!==null;){if(T.key===P){if(P=g.type,P===er){if(T.tag===7){n(m,T.sibling),p=o(T,g.props.children),p.return=m,m=p;break e}}else if(T.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===qt&&gc(P)===T.type){n(m,T.sibling),p=o(T,g.props),p.ref=Br(m,T,g),p.return=m,m=p;break e}n(m,T);break}else t(m,T);T=T.sibling}g.type===er?(p=Nn(g.props.children,m.mode,S,g.key),p.return=m,m=p):(S=Ri(g.type,g.key,g.props,null,m.mode,S),S.ref=Br(m,p,g),S.return=m,m=S)}return l(m);case qn:e:{for(T=g.key;p!==null;){if(p.key===T)if(p.tag===4&&p.stateNode.containerInfo===g.containerInfo&&p.stateNode.implementation===g.implementation){n(m,p.sibling),p=o(p,g.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else t(m,p);p=p.sibling}p=ra(g,m.mode,S),p.return=m,m=p}return l(m);case qt:return T=g._init,E(m,p,T(g._payload),S)}if(eo(g))return v(m,p,g,S);if(Fr(g))return w(m,p,g,S);fi(m,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,p!==null&&p.tag===6?(n(m,p.sibling),p=o(p,g),p.return=m,m=p):(n(m,p),p=na(g,m.mode,S),p.return=m,m=p),l(m)):n(m,p)}return E}var kr=Yf(!0),Gf=Yf(!1),Hi=yn(null),Wi=null,sr=null,Ds=null;function Ms(){Ds=sr=Wi=null}function As(e){var t=Hi.current;ae(Hi),e._currentValue=t}function Fa(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function gr(e,t){Wi=e,Ds=sr=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(qe=!0),e.firstContext=null)}function vt(e){var t=e._currentValue;if(Ds!==e)if(e={context:e,memoizedValue:t,next:null},sr===null){if(Wi===null)throw Error(L(308));sr=e,Wi.dependencies={lanes:0,firstContext:e}}else sr=sr.next=e;return t}var _n=null;function Fs(e){_n===null?_n=[e]:_n.push(e)}function Jf(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Fs(t)):(n.next=o.next,o.next=n),t.interleaved=n,Bt(e,r)}function Bt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var en=!1;function Is(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xf(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function It(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function dn(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,Z&2){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Bt(e,n)}return o=r.interleaved,o===null?(t.next=t,Fs(r)):(t.next=o.next,o.next=t),r.interleaved=t,Bt(e,n)}function Ei(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}function vc(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Ki(e,t,n,r){var o=e.updateQueue;en=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var s=a,u=s.next;s.next=null,l===null?i=u:l.next=u,l=s;var d=e.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==l&&(a===null?d.firstBaseUpdate=u:a.next=u,d.lastBaseUpdate=s))}if(i!==null){var f=o.baseState;l=0,d=u=s=null,a=i;do{var c=a.lane,x=a.eventTime;if((r&c)===c){d!==null&&(d=d.next={eventTime:x,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,w=a;switch(c=t,x=n,w.tag){case 1:if(v=w.payload,typeof v=="function"){f=v.call(x,f,c);break e}f=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=w.payload,c=typeof v=="function"?v.call(x,f,c):v,c==null)break e;f=ge({},f,c);break e;case 2:en=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,c=o.effects,c===null?o.effects=[a]:c.push(a))}else x={eventTime:x,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(u=d=x,s=f):d=d.next=x,l|=c;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;c=a,a=c.next,c.next=null,o.lastBaseUpdate=c,o.shared.pending=null}}while(!0);if(d===null&&(s=f),o.baseState=s,o.firstBaseUpdate=u,o.lastBaseUpdate=d,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);An|=l,e.lanes=l,e.memoizedState=f}}function yc(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(L(191,o));o.call(r)}}}var Ho={},Nt=yn(Ho),Lo=yn(Ho),Ro=yn(Ho);function Ln(e){if(e===Ho)throw Error(L(174));return e}function js(e,t){switch(ie(Ro,t),ie(Lo,e),ie(Nt,Ho),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ya(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ya(t,e)}ae(Nt),ie(Nt,t)}function Er(){ae(Nt),ae(Lo),ae(Ro)}function Zf(e){Ln(Ro.current);var t=Ln(Nt.current),n=ya(t,e.type);t!==n&&(ie(Lo,e),ie(Nt,n))}function Us(e){Lo.current===e&&(ae(Nt),ae(Lo))}var me=yn(0);function Qi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Jl=[];function Vs(){for(var e=0;e<Jl.length;e++)Jl[e]._workInProgressVersionPrimary=null;Jl.length=0}var Ci=Kt.ReactCurrentDispatcher,Xl=Kt.ReactCurrentBatchConfig,Mn=0,he=null,ke=null,be=null,Yi=!1,so=!1,zo=0,Tg=0;function je(){throw Error(L(321))}function Bs(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Pt(e[n],t[n]))return!1;return!0}function Hs(e,t,n,r,o,i){if(Mn=i,he=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Ci.current=e===null||e.memoizedState===null?Mg:Ag,e=n(r,o),so){i=0;do{if(so=!1,zo=0,25<=i)throw Error(L(301));i+=1,be=ke=null,t.updateQueue=null,Ci.current=Fg,e=n(r,o)}while(so)}if(Ci.current=Gi,t=ke!==null&&ke.next!==null,Mn=0,be=ke=he=null,Yi=!1,t)throw Error(L(300));return e}function Ws(){var e=zo!==0;return zo=0,e}function Rt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?he.memoizedState=be=e:be=be.next=e,be}function yt(){if(ke===null){var e=he.alternate;e=e!==null?e.memoizedState:null}else e=ke.next;var t=be===null?he.memoizedState:be.next;if(t!==null)be=t,ke=e;else{if(e===null)throw Error(L(310));ke=e,e={memoizedState:ke.memoizedState,baseState:ke.baseState,baseQueue:ke.baseQueue,queue:ke.queue,next:null},be===null?he.memoizedState=be=e:be=be.next=e}return be}function $o(e,t){return typeof t=="function"?t(e):t}function Zl(e){var t=yt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=ke,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,s=null,u=i;do{var d=u.lane;if((Mn&d)===d)s!==null&&(s=s.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var f={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};s===null?(a=s=f,l=r):s=s.next=f,he.lanes|=d,An|=d}u=u.next}while(u!==null&&u!==i);s===null?l=r:s.next=a,Pt(r,t.memoizedState)||(qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=s,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,he.lanes|=i,An|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ql(e){var t=yt(),n=t.queue;if(n===null)throw Error(L(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);Pt(i,t.memoizedState)||(qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function qf(){}function ep(e,t){var n=he,r=yt(),o=t(),i=!Pt(r.memoizedState,o);if(i&&(r.memoizedState=o,qe=!0),r=r.queue,Ks(rp.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||be!==null&&be.memoizedState.tag&1){if(n.flags|=2048,To(9,np.bind(null,n,r,o,t),void 0,null),_e===null)throw Error(L(349));Mn&30||tp(n,t,o)}return o}function tp(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function np(e,t,n,r){t.value=n,t.getSnapshot=r,op(t)&&ip(e)}function rp(e,t,n){return n(function(){op(t)&&ip(e)})}function op(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Pt(e,n)}catch{return!0}}function ip(e){var t=Bt(e,1);t!==null&&bt(t,e,1,-1)}function xc(e){var t=Rt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$o,lastRenderedState:e},t.queue=e,e=e.dispatch=Dg.bind(null,he,e),[t.memoizedState,e]}function To(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=he.updateQueue,t===null?(t={lastEffect:null,stores:null},he.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function lp(){return yt().memoizedState}function bi(e,t,n,r){var o=Rt();he.flags|=e,o.memoizedState=To(1|t,n,void 0,r===void 0?null:r)}function ml(e,t,n,r){var o=yt();r=r===void 0?null:r;var i=void 0;if(ke!==null){var l=ke.memoizedState;if(i=l.destroy,r!==null&&Bs(r,l.deps)){o.memoizedState=To(t,n,i,r);return}}he.flags|=e,o.memoizedState=To(1|t,n,i,r)}function wc(e,t){return bi(8390656,8,e,t)}function Ks(e,t){return ml(2048,8,e,t)}function ap(e,t){return ml(4,2,e,t)}function sp(e,t){return ml(4,4,e,t)}function up(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function cp(e,t,n){return n=n!=null?n.concat([e]):null,ml(4,4,up.bind(null,t,e),n)}function Qs(){}function dp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bs(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function fp(e,t){var n=yt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Bs(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function pp(e,t,n){return Mn&21?(Pt(n,t)||(n=yf(),he.lanes|=n,An|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,qe=!0),e.memoizedState=n)}function Ng(e,t){var n=te;te=n!==0&&4>n?n:4,e(!0);var r=Xl.transition;Xl.transition={};try{e(!1),t()}finally{te=n,Xl.transition=r}}function mp(){return yt().memoizedState}function Og(e,t,n){var r=pn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},hp(e))gp(t,n);else if(n=Jf(e,t,n,r),n!==null){var o=Ge();bt(n,e,r,o),vp(n,t,r)}}function Dg(e,t,n){var r=pn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(hp(e))gp(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,Pt(a,l)){var s=t.interleaved;s===null?(o.next=o,Fs(t)):(o.next=s.next,s.next=o),t.interleaved=o;return}}catch{}finally{}n=Jf(e,t,o,r),n!==null&&(o=Ge(),bt(n,e,r,o),vp(n,t,r))}}function hp(e){var t=e.alternate;return e===he||t!==null&&t===he}function gp(e,t){so=Yi=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function vp(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Cs(e,n)}}var Gi={readContext:vt,useCallback:je,useContext:je,useEffect:je,useImperativeHandle:je,useInsertionEffect:je,useLayoutEffect:je,useMemo:je,useReducer:je,useRef:je,useState:je,useDebugValue:je,useDeferredValue:je,useTransition:je,useMutableSource:je,useSyncExternalStore:je,useId:je,unstable_isNewReconciler:!1},Mg={readContext:vt,useCallback:function(e,t){return Rt().memoizedState=[e,t===void 0?null:t],e},useContext:vt,useEffect:wc,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,bi(4194308,4,up.bind(null,t,e),n)},useLayoutEffect:function(e,t){return bi(4194308,4,e,t)},useInsertionEffect:function(e,t){return bi(4,2,e,t)},useMemo:function(e,t){var n=Rt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=Rt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Og.bind(null,he,e),[r.memoizedState,e]},useRef:function(e){var t=Rt();return e={current:e},t.memoizedState=e},useState:xc,useDebugValue:Qs,useDeferredValue:function(e){return Rt().memoizedState=e},useTransition:function(){var e=xc(!1),t=e[0];return e=Ng.bind(null,e[1]),Rt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=he,o=Rt();if(de){if(n===void 0)throw Error(L(407));n=n()}else{if(n=t(),_e===null)throw Error(L(349));Mn&30||tp(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,wc(rp.bind(null,r,i,e),[e]),r.flags|=2048,To(9,np.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=Rt(),t=_e.identifierPrefix;if(de){var n=Ft,r=At;n=(r&~(1<<32-Ct(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=zo++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=Tg++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Ag={readContext:vt,useCallback:dp,useContext:vt,useEffect:Ks,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:fp,useReducer:Zl,useRef:lp,useState:function(){return Zl($o)},useDebugValue:Qs,useDeferredValue:function(e){var t=yt();return pp(t,ke.memoizedState,e)},useTransition:function(){var e=Zl($o)[0],t=yt().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:ep,useId:mp,unstable_isNewReconciler:!1},Fg={readContext:vt,useCallback:dp,useContext:vt,useEffect:Ks,useImperativeHandle:cp,useInsertionEffect:ap,useLayoutEffect:sp,useMemo:fp,useReducer:ql,useRef:lp,useState:function(){return ql($o)},useDebugValue:Qs,useDeferredValue:function(e){var t=yt();return ke===null?t.memoizedState=e:pp(t,ke.memoizedState,e)},useTransition:function(){var e=ql($o)[0],t=yt().memoizedState;return[e,t]},useMutableSource:qf,useSyncExternalStore:ep,useId:mp,unstable_isNewReconciler:!1};function wt(e,t){if(e&&e.defaultProps){t=ge({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function Ia(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ge({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var hl={isMounted:function(e){return(e=e._reactInternals)?Vn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=pn(e),i=It(r,o);i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(bt(t,e,o,r),Ei(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Ge(),o=pn(e),i=It(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=dn(e,i,o),t!==null&&(bt(t,e,o,r),Ei(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Ge(),r=pn(e),o=It(n,r);o.tag=2,t!=null&&(o.callback=t),t=dn(e,o,r),t!==null&&(bt(t,e,r,n),Ei(t,e,r))}};function Sc(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Co(n,r)||!Co(o,i):!0}function yp(e,t,n){var r=!1,o=gn,i=t.contextType;return typeof i=="object"&&i!==null?i=vt(i):(o=tt(t)?On:Be.current,r=t.contextTypes,i=(r=r!=null)?wr(e,o):gn),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=hl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function kc(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&hl.enqueueReplaceState(t,t.state,null)}function ja(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs={},Is(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=vt(i):(i=tt(t)?On:Be.current,o.context=wr(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ia(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&hl.enqueueReplaceState(o,o.state,null),Ki(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function Cr(e,t){try{var n="",r=t;do n+=fh(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function ea(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function Ua(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var Ig=typeof WeakMap=="function"?WeakMap:Map;function xp(e,t,n){n=It(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Xi||(Xi=!0,Xa=r),Ua(e,t)},n}function wp(e,t,n){n=It(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Ua(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Ua(e,t),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function Ec(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Ig;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=qg.bind(null,e,t,n),t.then(e,e))}function Cc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function bc(e,t,n,r,o){return e.mode&1?(e.flags|=65536,e.lanes=o,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=It(-1,1),t.tag=2,dn(n,t,1))),n.lanes|=1),e)}var jg=Kt.ReactCurrentOwner,qe=!1;function Ye(e,t,n,r){t.child=e===null?Gf(t,null,n,r):kr(t,e.child,n,r)}function Pc(e,t,n,r,o){n=n.render;var i=t.ref;return gr(t,o),r=Hs(e,t,n,r,i,o),n=Ws(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(de&&n&&Ts(t),t.flags|=1,Ye(e,t,r,o),t.child)}function _c(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!tu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Sp(e,t,i,r,o)):(e=Ri(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,!(e.lanes&o)){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Co,n(l,r)&&e.ref===t.ref)return Ht(e,t,o)}return t.flags|=1,e=mn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Sp(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Co(i,r)&&e.ref===t.ref)if(qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)e.flags&131072&&(qe=!0);else return t.lanes=e.lanes,Ht(e,t,o)}return Va(e,t,n,r,o)}function kp(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ie(cr,rt),rt|=n;else{if(!(n&1073741824))return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ie(cr,rt),rt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ie(cr,rt),rt|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ie(cr,rt),rt|=r;return Ye(e,t,o,n),t.child}function Ep(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Va(e,t,n,r,o){var i=tt(n)?On:Be.current;return i=wr(t,i),gr(t,o),n=Hs(e,t,n,r,i,o),r=Ws(),e!==null&&!qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,Ht(e,t,o)):(de&&r&&Ts(t),t.flags|=1,Ye(e,t,n,o),t.child)}function Lc(e,t,n,r,o){if(tt(n)){var i=!0;Ui(t)}else i=!1;if(gr(t,o),t.stateNode===null)Pi(e,t),yp(t,n,r),ja(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var s=l.context,u=n.contextType;typeof u=="object"&&u!==null?u=vt(u):(u=tt(n)?On:Be.current,u=wr(t,u));var d=n.getDerivedStateFromProps,f=typeof d=="function"||typeof l.getSnapshotBeforeUpdate=="function";f||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||s!==u)&&kc(t,l,r,u),en=!1;var c=t.memoizedState;l.state=c,Ki(t,r,l,o),s=t.memoizedState,a!==r||c!==s||et.current||en?(typeof d=="function"&&(Ia(t,n,d,r),s=t.memoizedState),(a=en||Sc(t,n,a,r,c,s,u))?(f||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),l.props=r,l.state=s,l.context=u,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Xf(e,t),a=t.memoizedProps,u=t.type===t.elementType?a:wt(t.type,a),l.props=u,f=t.pendingProps,c=l.context,s=n.contextType,typeof s=="object"&&s!==null?s=vt(s):(s=tt(n)?On:Be.current,s=wr(t,s));var x=n.getDerivedStateFromProps;(d=typeof x=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==f||c!==s)&&kc(t,l,r,s),en=!1,c=t.memoizedState,l.state=c,Ki(t,r,l,o);var v=t.memoizedState;a!==f||c!==v||et.current||en?(typeof x=="function"&&(Ia(t,n,x,r),v=t.memoizedState),(u=en||Sc(t,n,u,r,c,v,s)||!1)?(d||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,s),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,s)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=s,r=u):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&c===e.memoizedState||(t.flags|=1024),r=!1)}return Ba(e,t,n,r,i,o)}function Ba(e,t,n,r,o,i){Ep(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&pc(t,n,!1),Ht(e,t,i);r=t.stateNode,jg.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=kr(t,e.child,null,i),t.child=kr(t,null,a,i)):Ye(e,t,a,i),t.memoizedState=r.state,o&&pc(t,n,!0),t.child}function Cp(e){var t=e.stateNode;t.pendingContext?fc(e,t.pendingContext,t.pendingContext!==t.context):t.context&&fc(e,t.context,!1),js(e,t.containerInfo)}function Rc(e,t,n,r,o){return Sr(),Os(o),t.flags|=256,Ye(e,t,n,r),t.child}var Ha={dehydrated:null,treeContext:null,retryLane:0};function Wa(e){return{baseLanes:e,cachePool:null,transitions:null}}function bp(e,t,n){var r=t.pendingProps,o=me.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ie(me,o&1),e===null)return Aa(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},!(r&1)&&i!==null?(i.childLanes=0,i.pendingProps=l):i=yl(l,r,0,null),e=Nn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Wa(n),t.memoizedState=Ha,e):Ys(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return Ug(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var s={mode:"hidden",children:r.children};return!(l&1)&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=s,t.deletions=null):(r=mn(o,s),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=mn(a,i):(i=Nn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Wa(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ha,r}return i=e.child,e=i.sibling,r=mn(i,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Ys(e,t){return t=yl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function pi(e,t,n,r){return r!==null&&Os(r),kr(t,e.child,null,n),e=Ys(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Ug(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=ea(Error(L(422))),pi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=yl({mode:"visible",children:r.children},o,0,null),i=Nn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,t.mode&1&&kr(t,e.child,null,l),t.child.memoizedState=Wa(l),t.memoizedState=Ha,i);if(!(t.mode&1))return pi(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(L(419)),r=ea(i,r,void 0),pi(e,t,l,r)}if(a=(l&e.childLanes)!==0,qe||a){if(r=_e,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=o&(r.suspendedLanes|l)?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Bt(e,o),bt(r,e,o,-1))}return eu(),r=ea(Error(L(421))),pi(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=ev.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,it=cn(o.nextSibling),lt=t,de=!0,Et=null,e!==null&&(ft[pt++]=At,ft[pt++]=Ft,ft[pt++]=Dn,At=e.id,Ft=e.overflow,Dn=t),t=Ys(t,r.children),t.flags|=4096,t)}function zc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Fa(e.return,t,n)}function ta(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Pp(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ye(e,t,r.children,n),r=me.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&zc(e,n,t);else if(e.tag===19)zc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ie(me,r),!(t.mode&1))t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&Qi(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),ta(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&Qi(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}ta(t,!0,n,null,i);break;case"together":ta(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Pi(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Ht(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),An|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(L(153));if(t.child!==null){for(e=t.child,n=mn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=mn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function Vg(e,t,n){switch(t.tag){case 3:Cp(t),Sr();break;case 5:Zf(t);break;case 1:tt(t.type)&&Ui(t);break;case 4:js(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ie(Hi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ie(me,me.current&1),t.flags|=128,null):n&t.child.childLanes?bp(e,t,n):(ie(me,me.current&1),e=Ht(e,t,n),e!==null?e.sibling:null);ie(me,me.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return Pp(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ie(me,me.current),r)break;return null;case 22:case 23:return t.lanes=0,kp(e,t,n)}return Ht(e,t,n)}var _p,Ka,Lp,Rp;_p=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Ka=function(){};Lp=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Ln(Nt.current);var i=null;switch(n){case"input":o=ma(e,o),r=ma(e,r),i=[];break;case"select":o=ge({},o,{value:void 0}),r=ge({},r,{value:void 0}),i=[];break;case"textarea":o=va(e,o),r=va(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Ii)}xa(n,r);var l;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var a=o[u];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(vo.hasOwnProperty(u)?i||(i=[]):(i=i||[]).push(u,null));for(u in r){var s=r[u];if(a=o?.[u],r.hasOwnProperty(u)&&s!==a&&(s!=null||a!=null))if(u==="style")if(a){for(l in a)!a.hasOwnProperty(l)||s&&s.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in s)s.hasOwnProperty(l)&&a[l]!==s[l]&&(n||(n={}),n[l]=s[l])}else n||(i||(i=[]),i.push(u,n)),n=s;else u==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,a=a?a.__html:void 0,s!=null&&a!==s&&(i=i||[]).push(u,s)):u==="children"?typeof s!="string"&&typeof s!="number"||(i=i||[]).push(u,""+s):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(vo.hasOwnProperty(u)?(s!=null&&u==="onScroll"&&le("scroll",e),i||a===s||(i=[])):(i=i||[]).push(u,s))}n&&(i=i||[]).push("style",n);var u=i;(t.updateQueue=u)&&(t.flags|=4)}};Rp=function(e,t,n,r){n!==r&&(t.flags|=4)};function Hr(e,t){if(!de)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Bg(e,t,n){var r=t.pendingProps;switch(Ns(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ue(t),null;case 1:return tt(t.type)&&ji(),Ue(t),null;case 3:return r=t.stateNode,Er(),ae(et),ae(Be),Vs(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(di(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Et!==null&&(es(Et),Et=null))),Ka(e,t),Ue(t),null;case 5:Us(t);var o=Ln(Ro.current);if(n=t.type,e!==null&&t.stateNode!=null)Lp(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(L(166));return Ue(t),null}if(e=Ln(Nt.current),di(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[zt]=t,r[_o]=i,e=(t.mode&1)!==0,n){case"dialog":le("cancel",r),le("close",r);break;case"iframe":case"object":case"embed":le("load",r);break;case"video":case"audio":for(o=0;o<no.length;o++)le(no[o],r);break;case"source":le("error",r);break;case"img":case"image":case"link":le("error",r),le("load",r);break;case"details":le("toggle",r);break;case"input":Iu(r,i),le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},le("invalid",r);break;case"textarea":Uu(r,i),le("invalid",r)}xa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&ci(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&ci(r.textContent,a,e),o=["children",""+a]):vo.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&le("scroll",r)}switch(n){case"input":ni(r),ju(r,i,!0);break;case"textarea":ni(r),Vu(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Ii)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nf(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[zt]=t,e[_o]=r,_p(e,t,!1,!1),t.stateNode=e;e:{switch(l=wa(n,r),n){case"dialog":le("cancel",e),le("close",e),o=r;break;case"iframe":case"object":case"embed":le("load",e),o=r;break;case"video":case"audio":for(o=0;o<no.length;o++)le(no[o],e);o=r;break;case"source":le("error",e),o=r;break;case"img":case"image":case"link":le("error",e),le("load",e),o=r;break;case"details":le("toggle",e),o=r;break;case"input":Iu(e,r),o=ma(e,r),le("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ge({},r,{value:void 0}),le("invalid",e);break;case"textarea":Uu(e,r),o=va(e,r),le("invalid",e);break;default:o=r}xa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="style"?lf(e,s):i==="dangerouslySetInnerHTML"?(s=s?s.__html:void 0,s!=null&&rf(e,s)):i==="children"?typeof s=="string"?(n!=="textarea"||s!=="")&&yo(e,s):typeof s=="number"&&yo(e,""+s):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(vo.hasOwnProperty(i)?s!=null&&i==="onScroll"&&le("scroll",e):s!=null&&ys(e,i,s,l))}switch(n){case"input":ni(e),ju(e,r,!1);break;case"textarea":ni(e),Vu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+hn(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?fr(e,!!r.multiple,i,!1):r.defaultValue!=null&&fr(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Ii)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ue(t),null;case 6:if(e&&t.stateNode!=null)Rp(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(L(166));if(n=Ln(Ro.current),Ln(Nt.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[zt]=t,(i=r.nodeValue!==n)&&(e=lt,e!==null))switch(e.tag){case 3:ci(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ci(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[zt]=t,t.stateNode=r}return Ue(t),null;case 13:if(ae(me),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(de&&it!==null&&t.mode&1&&!(t.flags&128))Qf(),Sr(),t.flags|=98560,i=!1;else if(i=di(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(L(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(L(317));i[zt]=t}else Sr(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Ue(t),i=!1}else Et!==null&&(es(Et),Et=null),i=!0;if(!i)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||me.current&1?Ee===0&&(Ee=3):eu())),t.updateQueue!==null&&(t.flags|=4),Ue(t),null);case 4:return Er(),Ka(e,t),e===null&&bo(t.stateNode.containerInfo),Ue(t),null;case 10:return As(t.type._context),Ue(t),null;case 17:return tt(t.type)&&ji(),Ue(t),null;case 19:if(ae(me),i=t.memoizedState,i===null)return Ue(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Hr(i,!1);else{if(Ee!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(l=Qi(e),l!==null){for(t.flags|=128,Hr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ie(me,me.current&1|2),t.child}e=e.sibling}i.tail!==null&&we()>br&&(t.flags|=128,r=!0,Hr(i,!1),t.lanes=4194304)}else{if(!r)if(e=Qi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),Hr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!de)return Ue(t),null}else 2*we()-i.renderingStartTime>br&&n!==1073741824&&(t.flags|=128,r=!0,Hr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=we(),t.sibling=null,n=me.current,ie(me,r?n&1|2:n&1),t):(Ue(t),null);case 22:case 23:return qs(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?rt&1073741824&&(Ue(t),t.subtreeFlags&6&&(t.flags|=8192)):Ue(t),null;case 24:return null;case 25:return null}throw Error(L(156,t.tag))}function Hg(e,t){switch(Ns(t),t.tag){case 1:return tt(t.type)&&ji(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Er(),ae(et),ae(Be),Vs(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return Us(t),null;case 13:if(ae(me),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(L(340));Sr()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return ae(me),null;case 4:return Er(),null;case 10:return As(t.type._context),null;case 22:case 23:return qs(),null;case 24:return null;default:return null}}var mi=!1,Ve=!1,Wg=typeof WeakSet=="function"?WeakSet:Set,D=null;function ur(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ve(e,t,r)}else n.current=null}function Qa(e,t,n){try{n()}catch(r){ve(e,t,r)}}var $c=!1;function Kg(e,t){if(za=Mi,e=Of(),$s(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,s=-1,u=0,d=0,f=e,c=null;t:for(;;){for(var x;f!==n||o!==0&&f.nodeType!==3||(a=l+o),f!==i||r!==0&&f.nodeType!==3||(s=l+r),f.nodeType===3&&(l+=f.nodeValue.length),(x=f.firstChild)!==null;)c=f,f=x;for(;;){if(f===e)break t;if(c===n&&++u===o&&(a=l),c===i&&++d===r&&(s=l),(x=f.nextSibling)!==null)break;f=c,c=f.parentNode}f=x}n=a===-1||s===-1?null:{start:a,end:s}}else n=null}n=n||{start:0,end:0}}else n=null;for($a={focusedElem:e,selectionRange:n},Mi=!1,D=t;D!==null;)if(t=D,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,D=e;else for(;D!==null;){t=D;try{var v=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var w=v.memoizedProps,E=v.memoizedState,m=t.stateNode,p=m.getSnapshotBeforeUpdate(t.elementType===t.type?w:wt(t.type,w),E);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var g=t.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(L(163))}}catch(S){ve(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,D=e;break}D=t.return}return v=$c,$c=!1,v}function uo(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Qa(t,n,i)}o=o.next}while(o!==r)}}function gl(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Ya(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function zp(e){var t=e.alternate;t!==null&&(e.alternate=null,zp(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[zt],delete t[_o],delete t[Oa],delete t[Lg],delete t[Rg])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function $p(e){return e.tag===5||e.tag===3||e.tag===4}function Tc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||$p(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ga(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Ii));else if(r!==4&&(e=e.child,e!==null))for(Ga(e,t,n),e=e.sibling;e!==null;)Ga(e,t,n),e=e.sibling}function Ja(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ja(e,t,n),e=e.sibling;e!==null;)Ja(e,t,n),e=e.sibling}var Oe=null,St=!1;function Xt(e,t,n){for(n=n.child;n!==null;)Tp(e,t,n),n=n.sibling}function Tp(e,t,n){if(Tt&&typeof Tt.onCommitFiberUnmount=="function")try{Tt.onCommitFiberUnmount(sl,n)}catch{}switch(n.tag){case 5:Ve||ur(n,t);case 6:var r=Oe,o=St;Oe=null,Xt(e,t,n),Oe=r,St=o,Oe!==null&&(St?(e=Oe,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Oe.removeChild(n.stateNode));break;case 18:Oe!==null&&(St?(e=Oe,n=n.stateNode,e.nodeType===8?Yl(e.parentNode,n):e.nodeType===1&&Yl(e,n),ko(e)):Yl(Oe,n.stateNode));break;case 4:r=Oe,o=St,Oe=n.stateNode.containerInfo,St=!0,Xt(e,t,n),Oe=r,St=o;break;case 0:case 11:case 14:case 15:if(!Ve&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&(i&2||i&4)&&Qa(n,t,l),o=o.next}while(o!==r)}Xt(e,t,n);break;case 1:if(!Ve&&(ur(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ve(n,t,a)}Xt(e,t,n);break;case 21:Xt(e,t,n);break;case 22:n.mode&1?(Ve=(r=Ve)||n.memoizedState!==null,Xt(e,t,n),Ve=r):Xt(e,t,n);break;default:Xt(e,t,n)}}function Nc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Wg),t.forEach(function(r){var o=tv.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function xt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Oe=a.stateNode,St=!1;break e;case 3:Oe=a.stateNode.containerInfo,St=!0;break e;case 4:Oe=a.stateNode.containerInfo,St=!0;break e}a=a.return}if(Oe===null)throw Error(L(160));Tp(i,l,o),Oe=null,St=!1;var s=o.alternate;s!==null&&(s.return=null),o.return=null}catch(u){ve(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Np(t,e),t=t.sibling}function Np(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(xt(t,e),Lt(e),r&4){try{uo(3,e,e.return),gl(3,e)}catch(w){ve(e,e.return,w)}try{uo(5,e,e.return)}catch(w){ve(e,e.return,w)}}break;case 1:xt(t,e),Lt(e),r&512&&n!==null&&ur(n,n.return);break;case 5:if(xt(t,e),Lt(e),r&512&&n!==null&&ur(n,n.return),e.flags&32){var o=e.stateNode;try{yo(o,"")}catch(w){ve(e,e.return,w)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,s=e.updateQueue;if(e.updateQueue=null,s!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&ef(o,i),wa(a,l);var u=wa(a,i);for(l=0;l<s.length;l+=2){var d=s[l],f=s[l+1];d==="style"?lf(o,f):d==="dangerouslySetInnerHTML"?rf(o,f):d==="children"?yo(o,f):ys(o,d,f,u)}switch(a){case"input":ha(o,i);break;case"textarea":tf(o,i);break;case"select":var c=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var x=i.value;x!=null?fr(o,!!i.multiple,x,!1):c!==!!i.multiple&&(i.defaultValue!=null?fr(o,!!i.multiple,i.defaultValue,!0):fr(o,!!i.multiple,i.multiple?[]:"",!1))}o[_o]=i}catch(w){ve(e,e.return,w)}}break;case 6:if(xt(t,e),Lt(e),r&4){if(e.stateNode===null)throw Error(L(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(w){ve(e,e.return,w)}}break;case 3:if(xt(t,e),Lt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ko(t.containerInfo)}catch(w){ve(e,e.return,w)}break;case 4:xt(t,e),Lt(e);break;case 13:xt(t,e),Lt(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Xs=we())),r&4&&Nc(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(Ve=(u=Ve)||d,xt(t,e),Ve=u):xt(t,e),Lt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(D=e,d=e.child;d!==null;){for(f=D=d;D!==null;){switch(c=D,x=c.child,c.tag){case 0:case 11:case 14:case 15:uo(4,c,c.return);break;case 1:ur(c,c.return);var v=c.stateNode;if(typeof v.componentWillUnmount=="function"){r=c,n=c.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(w){ve(r,n,w)}}break;case 5:ur(c,c.return);break;case 22:if(c.memoizedState!==null){Dc(f);continue}}x!==null?(x.return=c,D=x):Dc(f)}d=d.sibling}e:for(d=null,f=e;;){if(f.tag===5){if(d===null){d=f;try{o=f.stateNode,u?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=f.stateNode,s=f.memoizedProps.style,l=s!=null&&s.hasOwnProperty("display")?s.display:null,a.style.display=of("display",l))}catch(w){ve(e,e.return,w)}}}else if(f.tag===6){if(d===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(w){ve(e,e.return,w)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===e)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;f.sibling===null;){if(f.return===null||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:xt(t,e),Lt(e),r&4&&Nc(e);break;case 21:break;default:xt(t,e),Lt(e)}}function Lt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if($p(n)){var r=n;break e}n=n.return}throw Error(L(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(yo(o,""),r.flags&=-33);var i=Tc(e);Ja(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=Tc(e);Ga(e,a,l);break;default:throw Error(L(161))}}catch(s){ve(e,e.return,s)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Qg(e,t,n){D=e,Op(e)}function Op(e,t,n){for(var r=(e.mode&1)!==0;D!==null;){var o=D,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||mi;if(!l){var a=o.alternate,s=a!==null&&a.memoizedState!==null||Ve;a=mi;var u=Ve;if(mi=l,(Ve=s)&&!u)for(D=o;D!==null;)l=D,s=l.child,l.tag===22&&l.memoizedState!==null?Mc(o):s!==null?(s.return=l,D=s):Mc(o);for(;i!==null;)D=i,Op(i),i=i.sibling;D=o,mi=a,Ve=u}Oc(e)}else o.subtreeFlags&8772&&i!==null?(i.return=o,D=i):Oc(e)}}function Oc(e){for(;D!==null;){var t=D;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:Ve||gl(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Ve)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:wt(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&yc(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}yc(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var s=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":s.autoFocus&&n.focus();break;case"img":s.src&&(n.src=s.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var f=d.dehydrated;f!==null&&ko(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(L(163))}Ve||t.flags&512&&Ya(t)}catch(c){ve(t,t.return,c)}}if(t===e){D=null;break}if(n=t.sibling,n!==null){n.return=t.return,D=n;break}D=t.return}}function Dc(e){for(;D!==null;){var t=D;if(t===e){D=null;break}var n=t.sibling;if(n!==null){n.return=t.return,D=n;break}D=t.return}}function Mc(e){for(;D!==null;){var t=D;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{gl(4,t)}catch(s){ve(t,n,s)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(s){ve(t,o,s)}}var i=t.return;try{Ya(t)}catch(s){ve(t,i,s)}break;case 5:var l=t.return;try{Ya(t)}catch(s){ve(t,l,s)}}}catch(s){ve(t,t.return,s)}if(t===e){D=null;break}var a=t.sibling;if(a!==null){a.return=t.return,D=a;break}D=t.return}}var Yg=Math.ceil,Ji=Kt.ReactCurrentDispatcher,Gs=Kt.ReactCurrentOwner,gt=Kt.ReactCurrentBatchConfig,Z=0,_e=null,Se=null,De=0,rt=0,cr=yn(0),Ee=0,No=null,An=0,vl=0,Js=0,co=null,Ze=null,Xs=0,br=1/0,Dt=null,Xi=!1,Xa=null,fn=null,hi=!1,ln=null,Zi=0,fo=0,Za=null,_i=-1,Li=0;function Ge(){return Z&6?we():_i!==-1?_i:_i=we()}function pn(e){return e.mode&1?Z&2&&De!==0?De&-De:$g.transition!==null?(Li===0&&(Li=yf()),Li):(e=te,e!==0||(e=window.event,e=e===void 0?16:bf(e.type)),e):1}function bt(e,t,n,r){if(50<fo)throw fo=0,Za=null,Error(L(185));Uo(e,n,r),(!(Z&2)||e!==_e)&&(e===_e&&(!(Z&2)&&(vl|=n),Ee===4&&nn(e,De)),nt(e,r),n===1&&Z===0&&!(t.mode&1)&&(br=we()+500,pl&&xn()))}function nt(e,t){var n=e.callbackNode;$h(e,t);var r=Di(e,e===_e?De:0);if(r===0)n!==null&&Wu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wu(n),t===1)e.tag===0?zg(Ac.bind(null,e)):Hf(Ac.bind(null,e)),Pg(function(){!(Z&6)&&xn()}),n=null;else{switch(xf(r)){case 1:n=Es;break;case 4:n=gf;break;case 16:n=Oi;break;case 536870912:n=vf;break;default:n=Oi}n=Vp(n,Dp.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Dp(e,t){if(_i=-1,Li=0,Z&6)throw Error(L(327));var n=e.callbackNode;if(vr()&&e.callbackNode!==n)return null;var r=Di(e,e===_e?De:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=qi(e,r);else{t=r;var o=Z;Z|=2;var i=Ap();(_e!==e||De!==t)&&(Dt=null,br=we()+500,Tn(e,t));do try{Xg();break}catch(a){Mp(e,a)}while(!0);Ms(),Ji.current=i,Z=o,Se!==null?t=0:(_e=null,De=0,t=Ee)}if(t!==0){if(t===2&&(o=ba(e),o!==0&&(r=o,t=qa(e,o))),t===1)throw n=No,Tn(e,0),nn(e,r),nt(e,we()),n;if(t===6)nn(e,r);else{if(o=e.current.alternate,!(r&30)&&!Gg(o)&&(t=qi(e,r),t===2&&(i=ba(e),i!==0&&(r=i,t=qa(e,i))),t===1))throw n=No,Tn(e,0),nn(e,r),nt(e,we()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(L(345));case 2:bn(e,Ze,Dt);break;case 3:if(nn(e,r),(r&130023424)===r&&(t=Xs+500-we(),10<t)){if(Di(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Ge(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=Na(bn.bind(null,e,Ze,Dt),t);break}bn(e,Ze,Dt);break;case 4:if(nn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-Ct(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=we()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Yg(r/1960))-r,10<r){e.timeoutHandle=Na(bn.bind(null,e,Ze,Dt),r);break}bn(e,Ze,Dt);break;case 5:bn(e,Ze,Dt);break;default:throw Error(L(329))}}}return nt(e,we()),e.callbackNode===n?Dp.bind(null,e):null}function qa(e,t){var n=co;return e.current.memoizedState.isDehydrated&&(Tn(e,t).flags|=256),e=qi(e,t),e!==2&&(t=Ze,Ze=n,t!==null&&es(t)),e}function es(e){Ze===null?Ze=e:Ze.push.apply(Ze,e)}function Gg(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Pt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function nn(e,t){for(t&=~Js,t&=~vl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Ct(t),r=1<<n;e[n]=-1,t&=~r}}function Ac(e){if(Z&6)throw Error(L(327));vr();var t=Di(e,0);if(!(t&1))return nt(e,we()),null;var n=qi(e,t);if(e.tag!==0&&n===2){var r=ba(e);r!==0&&(t=r,n=qa(e,r))}if(n===1)throw n=No,Tn(e,0),nn(e,t),nt(e,we()),n;if(n===6)throw Error(L(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,bn(e,Ze,Dt),nt(e,we()),null}function Zs(e,t){var n=Z;Z|=1;try{return e(t)}finally{Z=n,Z===0&&(br=we()+500,pl&&xn())}}function Fn(e){ln!==null&&ln.tag===0&&!(Z&6)&&vr();var t=Z;Z|=1;var n=gt.transition,r=te;try{if(gt.transition=null,te=1,e)return e()}finally{te=r,gt.transition=n,Z=t,!(Z&6)&&xn()}}function qs(){rt=cr.current,ae(cr)}function Tn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,bg(n)),Se!==null)for(n=Se.return;n!==null;){var r=n;switch(Ns(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ji();break;case 3:Er(),ae(et),ae(Be),Vs();break;case 5:Us(r);break;case 4:Er();break;case 13:ae(me);break;case 19:ae(me);break;case 10:As(r.type._context);break;case 22:case 23:qs()}n=n.return}if(_e=e,Se=e=mn(e.current,null),De=rt=t,Ee=0,No=null,Js=vl=An=0,Ze=co=null,_n!==null){for(t=0;t<_n.length;t++)if(n=_n[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}_n=null}return e}function Mp(e,t){do{var n=Se;try{if(Ms(),Ci.current=Gi,Yi){for(var r=he.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}Yi=!1}if(Mn=0,be=ke=he=null,so=!1,zo=0,Gs.current=null,n===null||n.return===null){Ee=1,No=t,Se=null;break}e:{var i=e,l=n.return,a=n,s=t;if(t=De,a.flags|=32768,s!==null&&typeof s=="object"&&typeof s.then=="function"){var u=s,d=a,f=d.tag;if(!(d.mode&1)&&(f===0||f===11||f===15)){var c=d.alternate;c?(d.updateQueue=c.updateQueue,d.memoizedState=c.memoizedState,d.lanes=c.lanes):(d.updateQueue=null,d.memoizedState=null)}var x=Cc(l);if(x!==null){x.flags&=-257,bc(x,l,a,i,t),x.mode&1&&Ec(i,u,t),t=x,s=u;var v=t.updateQueue;if(v===null){var w=new Set;w.add(s),t.updateQueue=w}else v.add(s);break e}else{if(!(t&1)){Ec(i,u,t),eu();break e}s=Error(L(426))}}else if(de&&a.mode&1){var E=Cc(l);if(E!==null){!(E.flags&65536)&&(E.flags|=256),bc(E,l,a,i,t),Os(Cr(s,a));break e}}i=s=Cr(s,a),Ee!==4&&(Ee=2),co===null?co=[i]:co.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var m=xp(i,s,t);vc(i,m);break e;case 1:a=s;var p=i.type,g=i.stateNode;if(!(i.flags&128)&&(typeof p.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fn===null||!fn.has(g)))){i.flags|=65536,t&=-t,i.lanes|=t;var S=wp(i,a,t);vc(i,S);break e}}i=i.return}while(i!==null)}Ip(n)}catch(P){t=P,Se===n&&n!==null&&(Se=n=n.return);continue}break}while(!0)}function Ap(){var e=Ji.current;return Ji.current=Gi,e===null?Gi:e}function eu(){(Ee===0||Ee===3||Ee===2)&&(Ee=4),_e===null||!(An&268435455)&&!(vl&268435455)||nn(_e,De)}function qi(e,t){var n=Z;Z|=2;var r=Ap();(_e!==e||De!==t)&&(Dt=null,Tn(e,t));do try{Jg();break}catch(o){Mp(e,o)}while(!0);if(Ms(),Z=n,Ji.current=r,Se!==null)throw Error(L(261));return _e=null,De=0,Ee}function Jg(){for(;Se!==null;)Fp(Se)}function Xg(){for(;Se!==null&&!kh();)Fp(Se)}function Fp(e){var t=Up(e.alternate,e,rt);e.memoizedProps=e.pendingProps,t===null?Ip(e):Se=t,Gs.current=null}function Ip(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=Hg(n,t),n!==null){n.flags&=32767,Se=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Ee=6,Se=null;return}}else if(n=Bg(n,t,rt),n!==null){Se=n;return}if(t=t.sibling,t!==null){Se=t;return}Se=t=e}while(t!==null);Ee===0&&(Ee=5)}function bn(e,t,n){var r=te,o=gt.transition;try{gt.transition=null,te=1,Zg(e,t,n,r)}finally{gt.transition=o,te=r}return null}function Zg(e,t,n,r){do vr();while(ln!==null);if(Z&6)throw Error(L(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(L(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(Th(e,i),e===_e&&(Se=_e=null,De=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hi||(hi=!0,Vp(Oi,function(){return vr(),null})),i=(n.flags&15990)!==0,n.subtreeFlags&15990||i){i=gt.transition,gt.transition=null;var l=te;te=1;var a=Z;Z|=4,Gs.current=null,Kg(e,n),Np(n,e),yg($a),Mi=!!za,$a=za=null,e.current=n,Qg(n),Eh(),Z=a,te=l,gt.transition=i}else e.current=n;if(hi&&(hi=!1,ln=e,Zi=o),i=e.pendingLanes,i===0&&(fn=null),Ph(n.stateNode),nt(e,we()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(Xi)throw Xi=!1,e=Xa,Xa=null,e;return Zi&1&&e.tag!==0&&vr(),i=e.pendingLanes,i&1?e===Za?fo++:(fo=0,Za=e):fo=0,xn(),null}function vr(){if(ln!==null){var e=xf(Zi),t=gt.transition,n=te;try{if(gt.transition=null,te=16>e?16:e,ln===null)var r=!1;else{if(e=ln,ln=null,Zi=0,Z&6)throw Error(L(331));var o=Z;for(Z|=4,D=e.current;D!==null;){var i=D,l=i.child;if(D.flags&16){var a=i.deletions;if(a!==null){for(var s=0;s<a.length;s++){var u=a[s];for(D=u;D!==null;){var d=D;switch(d.tag){case 0:case 11:case 15:uo(8,d,i)}var f=d.child;if(f!==null)f.return=d,D=f;else for(;D!==null;){d=D;var c=d.sibling,x=d.return;if(zp(d),d===u){D=null;break}if(c!==null){c.return=x,D=c;break}D=x}}}var v=i.alternate;if(v!==null){var w=v.child;if(w!==null){v.child=null;do{var E=w.sibling;w.sibling=null,w=E}while(w!==null)}}D=i}}if(i.subtreeFlags&2064&&l!==null)l.return=i,D=l;else e:for(;D!==null;){if(i=D,i.flags&2048)switch(i.tag){case 0:case 11:case 15:uo(9,i,i.return)}var m=i.sibling;if(m!==null){m.return=i.return,D=m;break e}D=i.return}}var p=e.current;for(D=p;D!==null;){l=D;var g=l.child;if(l.subtreeFlags&2064&&g!==null)g.return=l,D=g;else e:for(l=p;D!==null;){if(a=D,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gl(9,a)}}catch(P){ve(a,a.return,P)}if(a===l){D=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,D=S;break e}D=a.return}}if(Z=o,xn(),Tt&&typeof Tt.onPostCommitFiberRoot=="function")try{Tt.onPostCommitFiberRoot(sl,e)}catch{}r=!0}return r}finally{te=n,gt.transition=t}}return!1}function Fc(e,t,n){t=Cr(n,t),t=xp(e,t,1),e=dn(e,t,1),t=Ge(),e!==null&&(Uo(e,1,t),nt(e,t))}function ve(e,t,n){if(e.tag===3)Fc(e,e,n);else for(;t!==null;){if(t.tag===3){Fc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){e=Cr(n,e),e=wp(t,e,1),t=dn(t,e,1),e=Ge(),t!==null&&(Uo(t,1,e),nt(t,e));break}}t=t.return}}function qg(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Ge(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(De&n)===n&&(Ee===4||Ee===3&&(De&130023424)===De&&500>we()-Xs?Tn(e,0):Js|=n),nt(e,t)}function jp(e,t){t===0&&(e.mode&1?(t=ii,ii<<=1,!(ii&130023424)&&(ii=4194304)):t=1);var n=Ge();e=Bt(e,t),e!==null&&(Uo(e,t,n),nt(e,n))}function ev(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),jp(e,n)}function tv(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(L(314))}r!==null&&r.delete(t),jp(e,n)}var Up;Up=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||et.current)qe=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return qe=!1,Vg(e,t,n);qe=!!(e.flags&131072)}else qe=!1,de&&t.flags&1048576&&Wf(t,Bi,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Pi(e,t),e=t.pendingProps;var o=wr(t,Be.current);gr(t,n),o=Hs(null,t,r,e,o,n);var i=Ws();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,tt(r)?(i=!0,Ui(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Is(t),o.updater=hl,t.stateNode=o,o._reactInternals=t,ja(t,r,e,n),t=Ba(null,t,r,!0,i,n)):(t.tag=0,de&&i&&Ts(t),Ye(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Pi(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=rv(r),e=wt(r,e),o){case 0:t=Va(null,t,r,e,n);break e;case 1:t=Lc(null,t,r,e,n);break e;case 11:t=Pc(null,t,r,e,n);break e;case 14:t=_c(null,t,r,wt(r.type,e),n);break e}throw Error(L(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Va(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Lc(e,t,r,o,n);case 3:e:{if(Cp(t),e===null)throw Error(L(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Xf(e,t),Ki(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=Cr(Error(L(423)),t),t=Rc(e,t,r,n,o);break e}else if(r!==o){o=Cr(Error(L(424)),t),t=Rc(e,t,r,n,o);break e}else for(it=cn(t.stateNode.containerInfo.firstChild),lt=t,de=!0,Et=null,n=Gf(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Sr(),r===o){t=Ht(e,t,n);break e}Ye(e,t,r,n)}t=t.child}return t;case 5:return Zf(t),e===null&&Aa(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,Ta(r,o)?l=null:i!==null&&Ta(r,i)&&(t.flags|=32),Ep(e,t),Ye(e,t,l,n),t.child;case 6:return e===null&&Aa(t),null;case 13:return bp(e,t,n);case 4:return js(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=kr(t,null,r,n):Ye(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Pc(e,t,r,o,n);case 7:return Ye(e,t,t.pendingProps,n),t.child;case 8:return Ye(e,t,t.pendingProps.children,n),t.child;case 12:return Ye(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ie(Hi,r._currentValue),r._currentValue=l,i!==null)if(Pt(i.value,l)){if(i.children===o.children&&!et.current){t=Ht(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var s=a.firstContext;s!==null;){if(s.context===r){if(i.tag===1){s=It(-1,n&-n),s.tag=2;var u=i.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?s.next=s:(s.next=d.next,d.next=s),u.pending=s}}i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),Fa(i.return,n,t),a.lanes|=n;break}s=s.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(L(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Fa(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ye(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,gr(t,n),o=vt(o),r=r(o),t.flags|=1,Ye(e,t,r,n),t.child;case 14:return r=t.type,o=wt(r,t.pendingProps),o=wt(r.type,o),_c(e,t,r,o,n);case 15:return Sp(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:wt(r,o),Pi(e,t),t.tag=1,tt(r)?(e=!0,Ui(t)):e=!1,gr(t,n),yp(t,r,o),ja(t,r,o,n),Ba(null,t,r,!0,e,n);case 19:return Pp(e,t,n);case 22:return kp(e,t,n)}throw Error(L(156,t.tag))};function Vp(e,t){return hf(e,t)}function nv(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ht(e,t,n,r){return new nv(e,t,n,r)}function tu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function rv(e){if(typeof e=="function")return tu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===ws)return 11;if(e===Ss)return 14}return 2}function mn(e,t){var n=e.alternate;return n===null?(n=ht(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ri(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")tu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case er:return Nn(n.children,o,i,t);case xs:l=8,o|=8;break;case ca:return e=ht(12,n,t,o|2),e.elementType=ca,e.lanes=i,e;case da:return e=ht(13,n,t,o),e.elementType=da,e.lanes=i,e;case fa:return e=ht(19,n,t,o),e.elementType=fa,e.lanes=i,e;case Xd:return yl(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Gd:l=10;break e;case Jd:l=9;break e;case ws:l=11;break e;case Ss:l=14;break e;case qt:l=16,r=null;break e}throw Error(L(130,e==null?e:typeof e,""))}return t=ht(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function Nn(e,t,n,r){return e=ht(7,e,r,t),e.lanes=n,e}function yl(e,t,n,r){return e=ht(22,e,r,t),e.elementType=Xd,e.lanes=n,e.stateNode={isHidden:!1},e}function na(e,t,n){return e=ht(6,e,null,t),e.lanes=n,e}function ra(e,t,n){return t=ht(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function ov(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Al(0),this.expirationTimes=Al(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Al(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function nu(e,t,n,r,o,i,l,a,s){return e=new ov(e,t,n,a,s),t===1?(t=1,i===!0&&(t|=8)):t=0,i=ht(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Is(i),e}function iv(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:qn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Bp(e){if(!e)return gn;e=e._reactInternals;e:{if(Vn(e)!==e||e.tag!==1)throw Error(L(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(tt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(L(171))}if(e.tag===1){var n=e.type;if(tt(n))return Bf(e,n,t)}return t}function Hp(e,t,n,r,o,i,l,a,s){return e=nu(n,r,!0,e,o,i,l,a,s),e.context=Bp(null),n=e.current,r=Ge(),o=pn(n),i=It(r,o),i.callback=t??null,dn(n,i,o),e.current.lanes=o,Uo(e,o,r),nt(e,r),e}function xl(e,t,n,r){var o=t.current,i=Ge(),l=pn(o);return n=Bp(n),t.context===null?t.context=n:t.pendingContext=n,t=It(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=dn(o,t,l),e!==null&&(bt(e,o,l,i),Ei(e,o,l)),l}function el(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ic(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ru(e,t){Ic(e,t),(e=e.alternate)&&Ic(e,t)}function lv(){return null}var Wp=typeof reportError=="function"?reportError:function(e){console.error(e)};function ou(e){this._internalRoot=e}wl.prototype.render=ou.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(L(409));xl(e,t,null,null)};wl.prototype.unmount=ou.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Fn(function(){xl(null,e,null,null)}),t[Vt]=null}};function wl(e){this._internalRoot=e}wl.prototype.unstable_scheduleHydration=function(e){if(e){var t=kf();e={blockedOn:null,target:e,priority:t};for(var n=0;n<tn.length&&t!==0&&t<tn[n].priority;n++);tn.splice(n,0,e),n===0&&Cf(e)}};function iu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Sl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function jc(){}function av(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var u=el(l);i.call(u)}}var l=Hp(t,r,e,0,null,!1,!1,"",jc);return e._reactRootContainer=l,e[Vt]=l.current,bo(e.nodeType===8?e.parentNode:e),Fn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var u=el(s);a.call(u)}}var s=nu(e,0,!1,null,null,!1,!1,"",jc);return e._reactRootContainer=s,e[Vt]=s.current,bo(e.nodeType===8?e.parentNode:e),Fn(function(){xl(t,s,n,r)}),s}function kl(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var s=el(l);a.call(s)}}xl(t,l,e,o)}else l=av(n,t,e,o,r);return el(l)}wf=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=to(t.pendingLanes);n!==0&&(Cs(t,n|1),nt(t,we()),!(Z&6)&&(br=we()+500,xn()))}break;case 13:Fn(function(){var r=Bt(e,1);if(r!==null){var o=Ge();bt(r,e,1,o)}}),ru(e,1)}};bs=function(e){if(e.tag===13){var t=Bt(e,134217728);if(t!==null){var n=Ge();bt(t,e,134217728,n)}ru(e,134217728)}};Sf=function(e){if(e.tag===13){var t=pn(e),n=Bt(e,t);if(n!==null){var r=Ge();bt(n,e,t,r)}ru(e,t)}};kf=function(){return te};Ef=function(e,t){var n=te;try{return te=e,t()}finally{te=n}};ka=function(e,t,n){switch(t){case"input":if(ha(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=fl(r);if(!o)throw Error(L(90));qd(r),ha(r,o)}}}break;case"textarea":tf(e,n);break;case"select":t=n.value,t!=null&&fr(e,!!n.multiple,t,!1)}};uf=Zs;cf=Fn;var sv={usingClientEntryPoint:!1,Events:[Bo,or,fl,af,sf,Zs]},Wr={findFiberByHostInstance:Pn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},uv={bundleType:Wr.bundleType,version:Wr.version,rendererPackageName:Wr.rendererPackageName,rendererConfig:Wr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Kt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=pf(e),e===null?null:e.stateNode},findFiberByHostInstance:Wr.findFiberByHostInstance||lv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gi=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gi.isDisabled&&gi.supportsFiber)try{sl=gi.inject(uv),Tt=gi}catch{}}st.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sv;st.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!iu(t))throw Error(L(200));return iv(e,t,null,n)};st.createRoot=function(e,t){if(!iu(e))throw Error(L(299));var n=!1,r="",o=Wp;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=nu(e,1,!1,null,null,n,!1,r,o),e[Vt]=t.current,bo(e.nodeType===8?e.parentNode:e),new ou(t)};st.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(L(188)):(e=Object.keys(e).join(","),Error(L(268,e)));return e=pf(t),e=e===null?null:e.stateNode,e};st.flushSync=function(e){return Fn(e)};st.hydrate=function(e,t,n){if(!Sl(t))throw Error(L(200));return kl(null,e,t,!0,n)};st.hydrateRoot=function(e,t,n){if(!iu(e))throw Error(L(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Wp;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Hp(t,null,e,1,n??null,o,!1,i,l),e[Vt]=t.current,bo(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new wl(t)};st.render=function(e,t,n){if(!Sl(t))throw Error(L(200));return kl(null,e,t,!1,n)};st.unmountComponentAtNode=function(e){if(!Sl(e))throw Error(L(40));return e._reactRootContainer?(Fn(function(){kl(null,null,e,!1,function(){e._reactRootContainer=null,e[Vt]=null})}),!0):!1};st.unstable_batchedUpdates=Zs;st.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Sl(n))throw Error(L(200));if(e==null||e._reactInternals===void 0)throw Error(L(38));return kl(e,t,n,!1,r)};st.version="18.3.1-next-f1338f8080-20240426";function Kp(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kp)}catch(e){console.error(e)}}Kp(),Wd.exports=st;var lu=Wd.exports;const cv=Dd(lu),dv=Od({__proto__:null,default:cv},[lu]);var Qp,Uc=lu;Qp=Uc.createRoot,Uc.hydrateRoot;var Yp={exports:{}},El={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fv=_,pv=Symbol.for("react.element"),mv=Symbol.for("react.fragment"),hv=Object.prototype.hasOwnProperty,gv=fv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,vv={key:!0,ref:!0,__self:!0,__source:!0};function Gp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)hv.call(t,r)&&!vv.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:pv,type:e,key:i,ref:l,props:o,_owner:gv.current}}El.Fragment=mv;El.jsx=Gp;El.jsxs=Gp;Yp.exports=El;var ot=Yp.exports;function yv(){return ot.jsxs("div",{className:"flex items-center justify-center h-full",children:[ot.jsx("div",{className:"bg-yellow-500 w-full text-white absolute top-0 left-0 p-2",children:ot.jsx("p",{className:"text-5xl mx-2",children:"eiduca"})}),ot.jsxs("div",{className:"flex flex-col items-center gap-2",role:"status",children:[ot.jsxs("svg",{"aria-hidden":"true",className:"w-20 h-20 text-gray-200 animate-spin dark:text-gray-600 fill-yellow-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[ot.jsx("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),ot.jsx("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})]}),ot.jsx("span",{className:"text-2xl mt-5",children:"Carregando..."})]})]})}const xv="modulepreload",wv=function(e,t){return new URL(e,t).href},Vc={},Jp=function(t,n,r){let o=Promise.resolve();if(n&&n.length>0){const i=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=l?.nonce||l?.getAttribute("nonce");o=Promise.all(n.map(s=>{if(s=wv(s,r),s in Vc)return;Vc[s]=!0;const u=s.endsWith(".css"),d=u?'[rel="stylesheet"]':"";if(!!r)for(let x=i.length-1;x>=0;x--){const v=i[x];if(v.href===s&&(!u||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${d}`))return;const c=document.createElement("link");if(c.rel=u?"stylesheet":xv,u||(c.as="script",c.crossOrigin=""),c.href=s,a&&c.setAttribute("nonce",a),document.head.appendChild(c),u)return new Promise((x,v)=>{c.addEventListener("load",x),c.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})}))}return o.then(()=>t()).catch(i=>{const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i})};/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function pe(){return pe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},pe.apply(this,arguments)}var xe;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(xe||(xe={}));const Bc="popstate";function Sv(e){e===void 0&&(e={});function t(r,o){let{pathname:i,search:l,hash:a}=r.location;return Oo("",{pathname:i,search:l,hash:a},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(r,o){return typeof o=="string"?o:In(o)}return Ev(t,n,null,e)}function Y(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Pr(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function kv(){return Math.random().toString(36).substr(2,8)}function Hc(e,t){return{usr:e.state,key:e.key,idx:t}}function Oo(e,t,n,r){return n===void 0&&(n=null),pe({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Qt(t):t,{state:n,key:t&&t.key||r||kv()})}function In(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Qt(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Ev(e,t,n,r){r===void 0&&(r={});let{window:o=document.defaultView,v5Compat:i=!1}=r,l=o.history,a=xe.Pop,s=null,u=d();u==null&&(u=0,l.replaceState(pe({},l.state,{idx:u}),""));function d(){return(l.state||{idx:null}).idx}function f(){a=xe.Pop;let E=d(),m=E==null?null:E-u;u=E,s&&s({action:a,location:w.location,delta:m})}function c(E,m){a=xe.Push;let p=Oo(w.location,E,m);n&&n(p,E),u=d()+1;let g=Hc(p,u),S=w.createHref(p);try{l.pushState(g,"",S)}catch(P){if(P instanceof DOMException&&P.name==="DataCloneError")throw P;o.location.assign(S)}i&&s&&s({action:a,location:w.location,delta:1})}function x(E,m){a=xe.Replace;let p=Oo(w.location,E,m);n&&n(p,E),u=d();let g=Hc(p,u),S=w.createHref(p);l.replaceState(g,"",S),i&&s&&s({action:a,location:w.location,delta:0})}function v(E){let m=o.location.origin!=="null"?o.location.origin:o.location.href,p=typeof E=="string"?E:In(E);return p=p.replace(/ $/,"%20"),Y(m,"No window.location.(origin|href) available to create URL for href: "+p),new URL(p,m)}let w={get action(){return a},get location(){return e(o,l)},listen(E){if(s)throw new Error("A history only accepts one active listener");return o.addEventListener(Bc,f),s=E,()=>{o.removeEventListener(Bc,f),s=null}},createHref(E){return t(o,E)},createURL:v,encodeLocation(E){let m=v(E);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:c,replace:x,go(E){return l.go(E)}};return w}var ce;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(ce||(ce={}));const Cv=new Set(["lazy","caseSensitive","path","id","index","children"]);function bv(e){return e.index===!0}function ts(e,t,n,r){return n===void 0&&(n=[]),r===void 0&&(r={}),e.map((o,i)=>{let l=[...n,i],a=typeof o.id=="string"?o.id:l.join("-");if(Y(o.index!==!0||!o.children,"Cannot specify children on an index route"),Y(!r[a],'Found a route id collision on id "'+a+`".  Route id's must be globally unique within Data Router usages`),bv(o)){let s=pe({},o,t(o),{id:a});return r[a]=s,s}else{let s=pe({},o,t(o),{id:a,children:void 0});return r[a]=s,o.children&&(s.children=ts(o.children,t,l,r)),s}})}function dr(e,t,n){n===void 0&&(n="/");let r=typeof t=="string"?Qt(t):t,o=Wt(r.pathname||"/",n);if(o==null)return null;let i=Xp(e);_v(i);let l=null;for(let a=0;l==null&&a<i.length;++a){let s=Fv(o);l=Mv(i[a],s)}return l}function Pv(e,t){let{route:n,pathname:r,params:o}=e;return{id:n.id,pathname:r,params:o,data:t[n.id],handle:n.handle}}function Xp(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let o=(i,l,a)=>{let s={relativePath:a===void 0?i.path||"":a,caseSensitive:i.caseSensitive===!0,childrenIndex:l,route:i};s.relativePath.startsWith("/")&&(Y(s.relativePath.startsWith(r),'Absolute route path "'+s.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),s.relativePath=s.relativePath.slice(r.length));let u=jt([r,s.relativePath]),d=n.concat(s);i.children&&i.children.length>0&&(Y(i.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Xp(i.children,t,d,u)),!(i.path==null&&!i.index)&&t.push({path:u,score:Ov(u,i.index),routesMeta:d})};return e.forEach((i,l)=>{var a;if(i.path===""||!((a=i.path)!=null&&a.includes("?")))o(i,l);else for(let s of Zp(i.path))o(i,l,s)}),t}function Zp(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(r.length===0)return o?[i,""]:[i];let l=Zp(r.join("/")),a=[];return a.push(...l.map(s=>s===""?i:[i,s].join("/"))),o&&a.push(...l),a.map(s=>e.startsWith("/")&&s===""?"/":s)}function _v(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Dv(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Lv=/^:[\w-]+$/,Rv=3,zv=2,$v=1,Tv=10,Nv=-2,Wc=e=>e==="*";function Ov(e,t){let n=e.split("/"),r=n.length;return n.some(Wc)&&(r+=Nv),t&&(r+=zv),n.filter(o=>!Wc(o)).reduce((o,i)=>o+(Lv.test(i)?Rv:i===""?$v:Tv),r)}function Dv(e,t){return e.length===t.length&&e.slice(0,-1).every((r,o)=>r===t[o])?e[e.length-1]-t[t.length-1]:0}function Mv(e,t){let{routesMeta:n}=e,r={},o="/",i=[];for(let l=0;l<n.length;++l){let a=n[l],s=l===n.length-1,u=o==="/"?t:t.slice(o.length)||"/",d=ns({path:a.relativePath,caseSensitive:a.caseSensitive,end:s},u);if(!d)return null;Object.assign(r,d.params);let f=a.route;i.push({params:r,pathname:jt([o,d.pathname]),pathnameBase:Uv(jt([o,d.pathnameBase])),route:f}),d.pathnameBase!=="/"&&(o=jt([o,d.pathnameBase]))}return i}function ns(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Av(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],l=i.replace(/(.)\/+$/,"$1"),a=o.slice(1);return{params:r.reduce((u,d,f)=>{let{paramName:c,isOptional:x}=d;if(c==="*"){let w=a[f]||"";l=i.slice(0,i.length-w.length).replace(/(.)\/+$/,"$1")}const v=a[f];return x&&!v?u[c]=void 0:u[c]=(v||"").replace(/%2F/g,"/"),u},{}),pathname:i,pathnameBase:l,pattern:e}}function Av(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Pr(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(l,a,s)=>(r.push({paramName:a,isOptional:s!=null}),s?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),o+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":e!==""&&e!=="/"&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function Fv(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Pr(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function Wt(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function Iv(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:o=""}=typeof e=="string"?Qt(e):e;return{pathname:n?n.startsWith("/")?n:jv(n,t):t,search:Vv(r),hash:Bv(o)}}function jv(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(o=>{o===".."?n.length>1&&n.pop():o!=="."&&n.push(o)}),n.length>1?n.join("/"):"/"}function oa(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function qp(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function au(e,t){let n=qp(e);return t?n.map((r,o)=>o===e.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function su(e,t,n,r){r===void 0&&(r=!1);let o;typeof e=="string"?o=Qt(e):(o=pe({},e),Y(!o.pathname||!o.pathname.includes("?"),oa("?","pathname","search",o)),Y(!o.pathname||!o.pathname.includes("#"),oa("#","pathname","hash",o)),Y(!o.search||!o.search.includes("#"),oa("#","search","hash",o)));let i=e===""||o.pathname==="",l=i?"/":o.pathname,a;if(l==null)a=n;else{let f=t.length-1;if(!r&&l.startsWith("..")){let c=l.split("/");for(;c[0]==="..";)c.shift(),f-=1;o.pathname=c.join("/")}a=f>=0?t[f]:"/"}let s=Iv(o,a),u=l&&l!=="/"&&l.endsWith("/"),d=(i||l===".")&&n.endsWith("/");return!s.pathname.endsWith("/")&&(u||d)&&(s.pathname+="/"),s}const jt=e=>e.join("/").replace(/\/\/+/g,"/"),Uv=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Vv=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Bv=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;class uu{constructor(t,n,r,o){o===void 0&&(o=!1),this.status=t,this.statusText=n||"",this.internal=o,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function cu(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const em=["post","put","patch","delete"],Hv=new Set(em),Wv=["get",...em],Kv=new Set(Wv),Qv=new Set([301,302,303,307,308]),Yv=new Set([307,308]),ia={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Gv={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0},Kr={state:"unblocked",proceed:void 0,reset:void 0,location:void 0},du=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Jv=e=>({hasErrorBoundary:!!e.hasErrorBoundary}),tm="remix-router-transitions";function Xv(e){const t=e.window?e.window:typeof window<"u"?window:void 0,n=typeof t<"u"&&typeof t.document<"u"&&typeof t.document.createElement<"u",r=!n;Y(e.routes.length>0,"You must provide a non-empty routes array to createRouter");let o;if(e.mapRouteProperties)o=e.mapRouteProperties;else if(e.detectErrorBoundary){let y=e.detectErrorBoundary;o=k=>({hasErrorBoundary:y(k)})}else o=Jv;let i={},l=ts(e.routes,o,void 0,i),a,s=e.basename||"/",u=e.unstable_dataStrategy||t0,d=pe({v7_fetcherPersist:!1,v7_normalizeFormMethod:!1,v7_partialHydration:!1,v7_prependBasename:!1,v7_relativeSplatPath:!1,unstable_skipActionErrorRevalidation:!1},e.future),f=null,c=new Set,x=null,v=null,w=null,E=e.hydrationData!=null,m=dr(l,e.history.location,s),p=null;if(m==null){let y=dt(404,{pathname:e.history.location.pathname}),{matches:k,route:C}=td(l);m=k,p={[C.id]:y}}let g,S=m.some(y=>y.route.lazy),P=m.some(y=>y.route.loader);if(S)g=!1;else if(!P)g=!0;else if(d.v7_partialHydration){let y=e.hydrationData?e.hydrationData.loaderData:null,k=e.hydrationData?e.hydrationData.errors:null,C=$=>$.route.loader?typeof $.route.loader=="function"&&$.route.loader.hydrate===!0?!1:y&&y[$.route.id]!==void 0||k&&k[$.route.id]!==void 0:!0;if(k){let $=m.findIndex(M=>k[M.route.id]!==void 0);g=m.slice(0,$+1).every(C)}else g=m.every(C)}else g=e.hydrationData!=null;let T,h={historyAction:e.history.action,location:e.history.location,matches:m,initialized:g,navigation:ia,restoreScrollPosition:e.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:e.hydrationData&&e.hydrationData.loaderData||{},actionData:e.hydrationData&&e.hydrationData.actionData||null,errors:e.hydrationData&&e.hydrationData.errors||p,fetchers:new Map,blockers:new Map},z=xe.Pop,I=!1,N,V=!1,ee=new Map,ne=null,oe=!1,se=!1,Ae=[],We=[],b=new Map,F=0,j=-1,X=new Map,q=new Set,Ke=new Map,Fe=new Map,Ie=new Set,Le=new Map,Re=new Map,R=!1;function O(){if(f=e.history.listen(y=>{let{action:k,location:C,delta:$}=y;if(R){R=!1;return}Pr(Re.size===0||$!=null,"You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.");let M=Ru({currentLocation:h.location,nextLocation:C,historyAction:k});if(M&&$!=null){R=!0,e.history.go($*-1),Jo(M,{state:"blocked",location:C,proceed(){Jo(M,{state:"proceeding",proceed:void 0,reset:void 0,location:C}),e.history.go($)},reset(){let W=new Map(h.blockers);W.set(M,Kr),re({blockers:W})}});return}return kn(k,C)}),n){p0(t,ee);let y=()=>m0(t,ee);t.addEventListener("pagehide",y),ne=()=>t.removeEventListener("pagehide",y)}return h.initialized||kn(xe.Pop,h.location,{initialHydration:!0}),T}function K(){f&&f(),ne&&ne(),c.clear(),N&&N.abort(),h.fetchers.forEach((y,k)=>Go(k)),h.blockers.forEach((y,k)=>Lu(k))}function ze(y){return c.add(y),()=>c.delete(y)}function re(y,k){k===void 0&&(k={}),h=pe({},h,y);let C=[],$=[];d.v7_fetcherPersist&&h.fetchers.forEach((M,W)=>{M.state==="idle"&&(Ie.has(W)?$.push(W):C.push(W))}),[...c].forEach(M=>M(h,{deletedFetchers:$,unstable_viewTransitionOpts:k.viewTransitionOpts,unstable_flushSync:k.flushSync===!0})),d.v7_fetcherPersist&&(C.forEach(M=>h.fetchers.delete(M)),$.forEach(M=>Go(M)))}function fe(y,k,C){var $,M;let{flushSync:W}=C===void 0?{}:C,U=h.actionData!=null&&h.navigation.formMethod!=null&&kt(h.navigation.formMethod)&&h.navigation.state==="loading"&&(($=y.state)==null?void 0:$._isRedirect)!==!0,A;k.actionData?Object.keys(k.actionData).length>0?A=k.actionData:A=null:U?A=h.actionData:A=null;let Q=k.loaderData?qc(h.loaderData,k.loaderData,k.matches||[],k.errors):h.loaderData,H=h.blockers;H.size>0&&(H=new Map(H),H.forEach((B,ue)=>H.set(ue,Kr)));let $e=I===!0||h.navigation.formMethod!=null&&kt(h.navigation.formMethod)&&((M=y.state)==null?void 0:M._isRedirect)!==!0;a&&(l=a,a=void 0),oe||z===xe.Pop||(z===xe.Push?e.history.push(y,y.state):z===xe.Replace&&e.history.replace(y,y.state));let Te;if(z===xe.Pop){let B=ee.get(h.location.pathname);B&&B.has(y.pathname)?Te={currentLocation:h.location,nextLocation:y}:ee.has(y.pathname)&&(Te={currentLocation:y,nextLocation:h.location})}else if(V){let B=ee.get(h.location.pathname);B?B.add(y.pathname):(B=new Set([y.pathname]),ee.set(h.location.pathname,B)),Te={currentLocation:h.location,nextLocation:y}}re(pe({},k,{actionData:A,loaderData:Q,historyAction:z,location:y,initialized:!0,navigation:ia,revalidation:"idle",restoreScrollPosition:$u(y,k.matches||h.matches),preventScrollReset:$e,blockers:H}),{viewTransitionOpts:Te,flushSync:W===!0}),z=xe.Pop,I=!1,V=!1,oe=!1,se=!1,Ae=[],We=[]}async function Ot(y,k){if(typeof y=="number"){e.history.go(y);return}let C=rs(h.location,h.matches,s,d.v7_prependBasename,y,d.v7_relativeSplatPath,k?.fromRouteId,k?.relative),{path:$,submission:M,error:W}=Kc(d.v7_normalizeFormMethod,!1,C,k),U=h.location,A=Oo(h.location,$,k&&k.state);A=pe({},A,e.history.encodeLocation(A));let Q=k&&k.replace!=null?k.replace:void 0,H=xe.Push;Q===!0?H=xe.Replace:Q===!1||M!=null&&kt(M.formMethod)&&M.formAction===h.location.pathname+h.location.search&&(H=xe.Replace);let $e=k&&"preventScrollReset"in k?k.preventScrollReset===!0:void 0,Te=(k&&k.unstable_flushSync)===!0,B=Ru({currentLocation:U,nextLocation:A,historyAction:H});if(B){Jo(B,{state:"blocked",location:A,proceed(){Jo(B,{state:"proceeding",proceed:void 0,reset:void 0,location:A}),Ot(y,k)},reset(){let ue=new Map(h.blockers);ue.set(B,Kr),re({blockers:ue})}});return}return await kn(H,A,{submission:M,pendingError:W,preventScrollReset:$e,replace:k&&k.replace,enableViewTransition:k&&k.unstable_viewTransition,flushSync:Te})}function $m(){if(zl(),re({revalidation:"loading"}),h.navigation.state!=="submitting"){if(h.navigation.state==="idle"){kn(h.historyAction,h.location,{startUninterruptedRevalidation:!0});return}kn(z||h.historyAction,h.navigation.location,{overrideNavigation:h.navigation})}}async function kn(y,k,C){N&&N.abort(),N=null,z=y,oe=(C&&C.startUninterruptedRevalidation)===!0,jm(h.location,h.matches),I=(C&&C.preventScrollReset)===!0,V=(C&&C.enableViewTransition)===!0;let $=a||l,M=C&&C.overrideNavigation,W=dr($,k,s),U=(C&&C.flushSync)===!0;if(!W){let B=dt(404,{pathname:k.pathname}),{matches:ue,route:Ce}=td($);$l(),fe(k,{matches:ue,loaderData:{},errors:{[Ce.id]:B}},{flushSync:U});return}if(h.initialized&&!se&&a0(h.location,k)&&!(C&&C.submission&&kt(C.submission.formMethod))){fe(k,{matches:W},{flushSync:U});return}N=new AbortController;let A=Yn(e.history,k,N.signal,C&&C.submission),Q;if(C&&C.pendingError)Q=[po(W).route.id,{type:ce.error,error:C.pendingError}];else if(C&&C.submission&&kt(C.submission.formMethod)){let B=await Tm(A,k,C.submission,W,{replace:C.replace,flushSync:U});if(B.shortCircuited)return;Q=B.pendingActionResult,M=la(k,C.submission),U=!1,A=Yn(e.history,A.url,A.signal)}let{shortCircuited:H,loaderData:$e,errors:Te}=await Nm(A,k,W,M,C&&C.submission,C&&C.fetcherSubmission,C&&C.replace,C&&C.initialHydration===!0,U,Q);H||(N=null,fe(k,pe({matches:W},ed(Q),{loaderData:$e,errors:Te})))}async function Tm(y,k,C,$,M){M===void 0&&(M={}),zl();let W=d0(k,C);re({navigation:W},{flushSync:M.flushSync===!0});let U,A=is($,k);if(!A.route.action&&!A.route.lazy)U={type:ce.error,error:dt(405,{method:y.method,pathname:k.pathname,routeId:A.route.id})};else if(U=(await Or("action",y,[A],$))[0],y.signal.aborted)return{shortCircuited:!0};if(zn(U)){let Q;return M&&M.replace!=null?Q=M.replace:Q=Jc(U.response.headers.get("Location"),new URL(y.url),s)===h.location.pathname+h.location.search,await Nr(y,U,{submission:C,replace:Q}),{shortCircuited:!0}}if(Rn(U))throw dt(400,{type:"defer-action"});if(mt(U)){let Q=po($,A.route.id);return(M&&M.replace)!==!0&&(z=xe.Push),{pendingActionResult:[Q.route.id,U]}}return{pendingActionResult:[A.route.id,U]}}async function Nm(y,k,C,$,M,W,U,A,Q,H){let $e=$||la(k,M),Te=M||W||od($e),B=a||l,[ue,Ce]=Qc(e.history,h,C,Te,k,d.v7_partialHydration&&A===!0,d.unstable_skipActionErrorRevalidation,se,Ae,We,Ie,Ke,q,B,s,H);if($l(J=>!(C&&C.some(Qe=>Qe.route.id===J))||ue&&ue.some(Qe=>Qe.route.id===J)),j=++F,ue.length===0&&Ce.length===0){let J=Pu();return fe(k,pe({matches:C,loaderData:{},errors:H&&mt(H[1])?{[H[0]]:H[1].error}:null},ed(H),J?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Q}),{shortCircuited:!0}}if(!oe&&(!d.v7_partialHydration||!A)){Ce.forEach(Qe=>{let ct=h.fetchers.get(Qe.key),Ne=Qr(void 0,ct?ct.data:void 0);h.fetchers.set(Qe.key,Ne)});let J;H&&!mt(H[1])?J={[H[0]]:H[1].data}:h.actionData&&(Object.keys(h.actionData).length===0?J=null:J=h.actionData),re(pe({navigation:$e},J!==void 0?{actionData:J}:{},Ce.length>0?{fetchers:new Map(h.fetchers)}:{}),{flushSync:Q})}Ce.forEach(J=>{b.has(J.key)&&Gt(J.key),J.controller&&b.set(J.key,J.controller)});let Mr=()=>Ce.forEach(J=>Gt(J.key));N&&N.signal.addEventListener("abort",Mr);let{loaderResults:Jt,fetcherResults:Hn}=await Eu(h.matches,C,ue,Ce,y);if(y.signal.aborted)return{shortCircuited:!0};N&&N.signal.removeEventListener("abort",Mr),Ce.forEach(J=>b.delete(J.key));let Wn=nd([...Jt,...Hn]);if(Wn){if(Wn.idx>=ue.length){let J=Ce[Wn.idx-ue.length].key;q.add(J)}return await Nr(y,Wn.result,{replace:U}),{shortCircuited:!0}}let{loaderData:Kn,errors:_t}=Zc(h,C,ue,Jt,H,Ce,Hn,Le);Le.forEach((J,Qe)=>{J.subscribe(ct=>{(ct||J.done)&&Le.delete(Qe)})}),d.v7_partialHydration&&A&&h.errors&&Object.entries(h.errors).filter(J=>{let[Qe]=J;return!ue.some(ct=>ct.route.id===Qe)}).forEach(J=>{let[Qe,ct]=J;_t=Object.assign(_t||{},{[Qe]:ct})});let Xo=Pu(),Zo=_u(j),qo=Xo||Zo||Ce.length>0;return pe({loaderData:Kn,errors:_t},qo?{fetchers:new Map(h.fetchers)}:{})}function Om(y,k,C,$){if(r)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");b.has(y)&&Gt(y);let M=($&&$.unstable_flushSync)===!0,W=a||l,U=rs(h.location,h.matches,s,d.v7_prependBasename,C,d.v7_relativeSplatPath,k,$?.relative),A=dr(W,U,s);if(!A){Dr(y,k,dt(404,{pathname:U}),{flushSync:M});return}let{path:Q,submission:H,error:$e}=Kc(d.v7_normalizeFormMethod,!0,U,$);if($e){Dr(y,k,$e,{flushSync:M});return}let Te=is(A,Q);if(I=($&&$.preventScrollReset)===!0,H&&kt(H.formMethod)){Dm(y,k,Q,Te,A,M,H);return}Ke.set(y,{routeId:k,path:Q}),Mm(y,k,Q,Te,A,M,H)}async function Dm(y,k,C,$,M,W,U){if(zl(),Ke.delete(y),!$.route.action&&!$.route.lazy){let Ne=dt(405,{method:U.formMethod,pathname:C,routeId:k});Dr(y,k,Ne,{flushSync:W});return}let A=h.fetchers.get(y);Yt(y,f0(U,A),{flushSync:W});let Q=new AbortController,H=Yn(e.history,C,Q.signal,U);b.set(y,Q);let $e=F,B=(await Or("action",H,[$],M))[0];if(H.signal.aborted){b.get(y)===Q&&b.delete(y);return}if(d.v7_fetcherPersist&&Ie.has(y)){if(zn(B)||mt(B)){Yt(y,Zt(void 0));return}}else{if(zn(B))if(b.delete(y),j>$e){Yt(y,Zt(void 0));return}else return q.add(y),Yt(y,Qr(U)),Nr(H,B,{fetcherSubmission:U});if(mt(B)){Dr(y,k,B.error);return}}if(Rn(B))throw dt(400,{type:"defer-action"});let ue=h.navigation.location||h.location,Ce=Yn(e.history,ue,Q.signal),Mr=a||l,Jt=h.navigation.state!=="idle"?dr(Mr,h.navigation.location,s):h.matches;Y(Jt,"Didn't find any matches after fetcher action");let Hn=++F;X.set(y,Hn);let Wn=Qr(U,B.data);h.fetchers.set(y,Wn);let[Kn,_t]=Qc(e.history,h,Jt,U,ue,!1,d.unstable_skipActionErrorRevalidation,se,Ae,We,Ie,Ke,q,Mr,s,[$.route.id,B]);_t.filter(Ne=>Ne.key!==y).forEach(Ne=>{let Ar=Ne.key,Tu=h.fetchers.get(Ar),Vm=Qr(void 0,Tu?Tu.data:void 0);h.fetchers.set(Ar,Vm),b.has(Ar)&&Gt(Ar),Ne.controller&&b.set(Ar,Ne.controller)}),re({fetchers:new Map(h.fetchers)});let Xo=()=>_t.forEach(Ne=>Gt(Ne.key));Q.signal.addEventListener("abort",Xo);let{loaderResults:Zo,fetcherResults:qo}=await Eu(h.matches,Jt,Kn,_t,Ce);if(Q.signal.aborted)return;Q.signal.removeEventListener("abort",Xo),X.delete(y),b.delete(y),_t.forEach(Ne=>b.delete(Ne.key));let J=nd([...Zo,...qo]);if(J){if(J.idx>=Kn.length){let Ne=_t[J.idx-Kn.length].key;q.add(Ne)}return Nr(Ce,J.result)}let{loaderData:Qe,errors:ct}=Zc(h,h.matches,Kn,Zo,void 0,_t,qo,Le);if(h.fetchers.has(y)){let Ne=Zt(B.data);h.fetchers.set(y,Ne)}_u(Hn),h.navigation.state==="loading"&&Hn>j?(Y(z,"Expected pending action"),N&&N.abort(),fe(h.navigation.location,{matches:Jt,loaderData:Qe,errors:ct,fetchers:new Map(h.fetchers)})):(re({errors:ct,loaderData:qc(h.loaderData,Qe,Jt,ct),fetchers:new Map(h.fetchers)}),se=!1)}async function Mm(y,k,C,$,M,W,U){let A=h.fetchers.get(y);Yt(y,Qr(U,A?A.data:void 0),{flushSync:W});let Q=new AbortController,H=Yn(e.history,C,Q.signal);b.set(y,Q);let $e=F,B=(await Or("loader",H,[$],M))[0];if(Rn(B)&&(B=await im(B,H.signal,!0)||B),b.get(y)===Q&&b.delete(y),!H.signal.aborted){if(Ie.has(y)){Yt(y,Zt(void 0));return}if(zn(B))if(j>$e){Yt(y,Zt(void 0));return}else{q.add(y),await Nr(H,B);return}if(mt(B)){Dr(y,k,B.error);return}Y(!Rn(B),"Unhandled fetcher deferred data"),Yt(y,Zt(B.data))}}async function Nr(y,k,C){let{submission:$,fetcherSubmission:M,replace:W}=C===void 0?{}:C;k.response.headers.has("X-Remix-Revalidate")&&(se=!0);let U=k.response.headers.get("Location");Y(U,"Expected a Location header on the redirect Response"),U=Jc(U,new URL(y.url),s);let A=Oo(h.location,U,{_isRedirect:!0});if(n){let ue=!1;if(k.response.headers.has("X-Remix-Reload-Document"))ue=!0;else if(du.test(U)){const Ce=e.history.createURL(U);ue=Ce.origin!==t.location.origin||Wt(Ce.pathname,s)==null}if(ue){W?t.location.replace(U):t.location.assign(U);return}}N=null;let Q=W===!0?xe.Replace:xe.Push,{formMethod:H,formAction:$e,formEncType:Te}=h.navigation;!$&&!M&&H&&$e&&Te&&($=od(h.navigation));let B=$||M;if(Yv.has(k.response.status)&&B&&kt(B.formMethod))await kn(Q,A,{submission:pe({},B,{formAction:U}),preventScrollReset:I});else{let ue=la(A,$);await kn(Q,A,{overrideNavigation:ue,fetcherSubmission:M,preventScrollReset:I})}}async function Or(y,k,C,$){try{let M=await n0(u,y,k,C,$,i,o);return await Promise.all(M.map((W,U)=>{if(s0(W)){let A=W.result;return{type:ce.redirect,response:i0(A,k,C[U].route.id,$,s,d.v7_relativeSplatPath)}}return o0(W)}))}catch(M){return C.map(()=>({type:ce.error,error:M}))}}async function Eu(y,k,C,$,M){let[W,...U]=await Promise.all([C.length?Or("loader",M,C,k):[],...$.map(A=>{if(A.matches&&A.match&&A.controller){let Q=Yn(e.history,A.path,A.controller.signal);return Or("loader",Q,[A.match],A.matches).then(H=>H[0])}else return Promise.resolve({type:ce.error,error:dt(404,{pathname:A.path})})})]);return await Promise.all([rd(y,C,W,W.map(()=>M.signal),!1,h.loaderData),rd(y,$.map(A=>A.match),U,$.map(A=>A.controller?A.controller.signal:null),!0)]),{loaderResults:W,fetcherResults:U}}function zl(){se=!0,Ae.push(...$l()),Ke.forEach((y,k)=>{b.has(k)&&(We.push(k),Gt(k))})}function Yt(y,k,C){C===void 0&&(C={}),h.fetchers.set(y,k),re({fetchers:new Map(h.fetchers)},{flushSync:(C&&C.flushSync)===!0})}function Dr(y,k,C,$){$===void 0&&($={});let M=po(h.matches,k);Go(y),re({errors:{[M.route.id]:C},fetchers:new Map(h.fetchers)},{flushSync:($&&$.flushSync)===!0})}function Cu(y){return d.v7_fetcherPersist&&(Fe.set(y,(Fe.get(y)||0)+1),Ie.has(y)&&Ie.delete(y)),h.fetchers.get(y)||Gv}function Go(y){let k=h.fetchers.get(y);b.has(y)&&!(k&&k.state==="loading"&&X.has(y))&&Gt(y),Ke.delete(y),X.delete(y),q.delete(y),Ie.delete(y),h.fetchers.delete(y)}function Am(y){if(d.v7_fetcherPersist){let k=(Fe.get(y)||0)-1;k<=0?(Fe.delete(y),Ie.add(y)):Fe.set(y,k)}else Go(y);re({fetchers:new Map(h.fetchers)})}function Gt(y){let k=b.get(y);Y(k,"Expected fetch controller: "+y),k.abort(),b.delete(y)}function bu(y){for(let k of y){let C=Cu(k),$=Zt(C.data);h.fetchers.set(k,$)}}function Pu(){let y=[],k=!1;for(let C of q){let $=h.fetchers.get(C);Y($,"Expected fetcher: "+C),$.state==="loading"&&(q.delete(C),y.push(C),k=!0)}return bu(y),k}function _u(y){let k=[];for(let[C,$]of X)if($<y){let M=h.fetchers.get(C);Y(M,"Expected fetcher: "+C),M.state==="loading"&&(Gt(C),X.delete(C),k.push(C))}return bu(k),k.length>0}function Fm(y,k){let C=h.blockers.get(y)||Kr;return Re.get(y)!==k&&Re.set(y,k),C}function Lu(y){h.blockers.delete(y),Re.delete(y)}function Jo(y,k){let C=h.blockers.get(y)||Kr;Y(C.state==="unblocked"&&k.state==="blocked"||C.state==="blocked"&&k.state==="blocked"||C.state==="blocked"&&k.state==="proceeding"||C.state==="blocked"&&k.state==="unblocked"||C.state==="proceeding"&&k.state==="unblocked","Invalid blocker state transition: "+C.state+" -> "+k.state);let $=new Map(h.blockers);$.set(y,k),re({blockers:$})}function Ru(y){let{currentLocation:k,nextLocation:C,historyAction:$}=y;if(Re.size===0)return;Re.size>1&&Pr(!1,"A router only supports one blocker at a time");let M=Array.from(Re.entries()),[W,U]=M[M.length-1],A=h.blockers.get(W);if(!(A&&A.state==="proceeding")&&U({currentLocation:k,nextLocation:C,historyAction:$}))return W}function $l(y){let k=[];return Le.forEach((C,$)=>{(!y||y($))&&(C.cancel(),k.push($),Le.delete($))}),k}function Im(y,k,C){if(x=y,w=k,v=C||null,!E&&h.navigation===ia){E=!0;let $=$u(h.location,h.matches);$!=null&&re({restoreScrollPosition:$})}return()=>{x=null,w=null,v=null}}function zu(y,k){return v&&v(y,k.map($=>Pv($,h.loaderData)))||y.key}function jm(y,k){if(x&&w){let C=zu(y,k);x[C]=w()}}function $u(y,k){if(x){let C=zu(y,k),$=x[C];if(typeof $=="number")return $}return null}function Um(y){i={},a=ts(y,o,void 0,i)}return T={get basename(){return s},get future(){return d},get state(){return h},get routes(){return l},get window(){return t},initialize:O,subscribe:ze,enableScrollRestoration:Im,navigate:Ot,fetch:Om,revalidate:$m,createHref:y=>e.history.createHref(y),encodeLocation:y=>e.history.encodeLocation(y),getFetcher:Cu,deleteFetcher:Am,dispose:K,getBlocker:Fm,deleteBlocker:Lu,_internalFetchControllers:b,_internalActiveDeferreds:Le,_internalSetRoutes:Um},T}function Zv(e){return e!=null&&("formData"in e&&e.formData!=null||"body"in e&&e.body!==void 0)}function rs(e,t,n,r,o,i,l,a){let s,u;if(l){s=[];for(let f of t)if(s.push(f),f.route.id===l){u=f;break}}else s=t,u=t[t.length-1];let d=su(o||".",au(s,i),Wt(e.pathname,n)||e.pathname,a==="path");return o==null&&(d.search=e.search,d.hash=e.hash),(o==null||o===""||o===".")&&u&&u.route.index&&!fu(d.search)&&(d.search=d.search?d.search.replace(/^\?/,"?index&"):"?index"),r&&n!=="/"&&(d.pathname=d.pathname==="/"?n:jt([n,d.pathname])),In(d)}function Kc(e,t,n,r){if(!r||!Zv(r))return{path:n};if(r.formMethod&&!c0(r.formMethod))return{path:n,error:dt(405,{method:r.formMethod})};let o=()=>({path:n,error:dt(400,{type:"invalid-body"})}),i=r.formMethod||"get",l=e?i.toUpperCase():i.toLowerCase(),a=rm(n);if(r.body!==void 0){if(r.formEncType==="text/plain"){if(!kt(l))return o();let c=typeof r.body=="string"?r.body:r.body instanceof FormData||r.body instanceof URLSearchParams?Array.from(r.body.entries()).reduce((x,v)=>{let[w,E]=v;return""+x+w+"="+E+`
`},""):String(r.body);return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:void 0,text:c}}}else if(r.formEncType==="application/json"){if(!kt(l))return o();try{let c=typeof r.body=="string"?JSON.parse(r.body):r.body;return{path:n,submission:{formMethod:l,formAction:a,formEncType:r.formEncType,formData:void 0,json:c,text:void 0}}}catch{return o()}}}Y(typeof FormData=="function","FormData is not available in this environment");let s,u;if(r.formData)s=os(r.formData),u=r.formData;else if(r.body instanceof FormData)s=os(r.body),u=r.body;else if(r.body instanceof URLSearchParams)s=r.body,u=Xc(s);else if(r.body==null)s=new URLSearchParams,u=new FormData;else try{s=new URLSearchParams(r.body),u=Xc(s)}catch{return o()}let d={formMethod:l,formAction:a,formEncType:r&&r.formEncType||"application/x-www-form-urlencoded",formData:u,json:void 0,text:void 0};if(kt(d.formMethod))return{path:n,submission:d};let f=Qt(n);return t&&f.search&&fu(f.search)&&s.append("index",""),f.search="?"+s,{path:In(f),submission:d}}function qv(e,t){let n=e;if(t){let r=e.findIndex(o=>o.route.id===t);r>=0&&(n=e.slice(0,r))}return n}function Qc(e,t,n,r,o,i,l,a,s,u,d,f,c,x,v,w){let E=w?mt(w[1])?w[1].error:w[1].data:void 0,m=e.createURL(t.location),p=e.createURL(o),g=w&&mt(w[1])?w[0]:void 0,S=g?qv(n,g):n,P=w?w[1].statusCode:void 0,T=l&&P&&P>=400,h=S.filter((I,N)=>{let{route:V}=I;if(V.lazy)return!0;if(V.loader==null)return!1;if(i)return typeof V.loader!="function"||V.loader.hydrate?!0:t.loaderData[V.id]===void 0&&(!t.errors||t.errors[V.id]===void 0);if(e0(t.loaderData,t.matches[N],I)||s.some(oe=>oe===I.route.id))return!0;let ee=t.matches[N],ne=I;return Yc(I,pe({currentUrl:m,currentParams:ee.params,nextUrl:p,nextParams:ne.params},r,{actionResult:E,unstable_actionStatus:P,defaultShouldRevalidate:T?!1:a||m.pathname+m.search===p.pathname+p.search||m.search!==p.search||nm(ee,ne)}))}),z=[];return f.forEach((I,N)=>{if(i||!n.some(se=>se.route.id===I.routeId)||d.has(N))return;let V=dr(x,I.path,v);if(!V){z.push({key:N,routeId:I.routeId,path:I.path,matches:null,match:null,controller:null});return}let ee=t.fetchers.get(N),ne=is(V,I.path),oe=!1;c.has(N)?oe=!1:u.includes(N)?oe=!0:ee&&ee.state!=="idle"&&ee.data===void 0?oe=a:oe=Yc(ne,pe({currentUrl:m,currentParams:t.matches[t.matches.length-1].params,nextUrl:p,nextParams:n[n.length-1].params},r,{actionResult:E,unstable_actionStatus:P,defaultShouldRevalidate:T?!1:a})),oe&&z.push({key:N,routeId:I.routeId,path:I.path,matches:V,match:ne,controller:new AbortController})}),[h,z]}function e0(e,t,n){let r=!t||n.route.id!==t.route.id,o=e[n.route.id]===void 0;return r||o}function nm(e,t){let n=e.route.path;return e.pathname!==t.pathname||n!=null&&n.endsWith("*")&&e.params["*"]!==t.params["*"]}function Yc(e,t){if(e.route.shouldRevalidate){let n=e.route.shouldRevalidate(t);if(typeof n=="boolean")return n}return t.defaultShouldRevalidate}async function Gc(e,t,n){if(!e.lazy)return;let r=await e.lazy();if(!e.lazy)return;let o=n[e.id];Y(o,"No route found in manifest");let i={};for(let l in r){let s=o[l]!==void 0&&l!=="hasErrorBoundary";Pr(!s,'Route "'+o.id+'" has a static property "'+l+'" defined but its lazy function is also returning a value for this property. '+('The lazy route property "'+l+'" will be ignored.')),!s&&!Cv.has(l)&&(i[l]=r[l])}Object.assign(o,i),Object.assign(o,pe({},t(o),{lazy:void 0}))}function t0(e){return Promise.all(e.matches.map(t=>t.resolve()))}async function n0(e,t,n,r,o,i,l,a){let s=r.reduce((f,c)=>f.add(c.route.id),new Set),u=new Set,d=await e({matches:o.map(f=>{let c=s.has(f.route.id);return pe({},f,{shouldLoad:c,resolve:v=>(u.add(f.route.id),c?r0(t,n,f,i,l,v,a):Promise.resolve({type:ce.data,result:void 0}))})}),request:n,params:o[0].params,context:a});return o.forEach(f=>Y(u.has(f.route.id),'`match.resolve()` was not called for route id "'+f.route.id+'". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.')),d.filter((f,c)=>s.has(o[c].route.id))}async function r0(e,t,n,r,o,i,l){let a,s,u=d=>{let f,c=new Promise((w,E)=>f=E);s=()=>f(),t.signal.addEventListener("abort",s);let x=w=>typeof d!="function"?Promise.reject(new Error("You cannot call the handler for a route which defines a boolean "+('"'+e+'" [routeId: '+n.route.id+"]"))):d({request:t,params:n.params,context:l},...w!==void 0?[w]:[]),v;return i?v=i(w=>x(w)):v=(async()=>{try{return{type:"data",result:await x()}}catch(w){return{type:"error",result:w}}})(),Promise.race([v,c])};try{let d=n.route[e];if(n.route.lazy)if(d){let f,[c]=await Promise.all([u(d).catch(x=>{f=x}),Gc(n.route,o,r)]);if(f!==void 0)throw f;a=c}else if(await Gc(n.route,o,r),d=n.route[e],d)a=await u(d);else if(e==="action"){let f=new URL(t.url),c=f.pathname+f.search;throw dt(405,{method:t.method,pathname:c,routeId:n.route.id})}else return{type:ce.data,result:void 0};else if(d)a=await u(d);else{let f=new URL(t.url),c=f.pathname+f.search;throw dt(404,{pathname:c})}Y(a.result!==void 0,"You defined "+(e==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+e+"` ")+"function. Please return a value or `null`.")}catch(d){return{type:ce.error,result:d}}finally{s&&t.signal.removeEventListener("abort",s)}return a}async function o0(e){let{result:t,type:n,status:r}=e;if(om(t)){let l;try{let a=t.headers.get("Content-Type");a&&/\bapplication\/json\b/.test(a)?t.body==null?l=null:l=await t.json():l=await t.text()}catch(a){return{type:ce.error,error:a}}return n===ce.error?{type:ce.error,error:new uu(t.status,t.statusText,l),statusCode:t.status,headers:t.headers}:{type:ce.data,data:l,statusCode:t.status,headers:t.headers}}if(n===ce.error)return{type:ce.error,error:t,statusCode:cu(t)?t.status:r};if(u0(t)){var o,i;return{type:ce.deferred,deferredData:t,statusCode:(o=t.init)==null?void 0:o.status,headers:((i=t.init)==null?void 0:i.headers)&&new Headers(t.init.headers)}}return{type:ce.data,data:t,statusCode:r}}function i0(e,t,n,r,o,i){let l=e.headers.get("Location");if(Y(l,"Redirects returned/thrown from loaders/actions must have a Location header"),!du.test(l)){let a=r.slice(0,r.findIndex(s=>s.route.id===n)+1);l=rs(new URL(t.url),a,o,!0,l,i),e.headers.set("Location",l)}return e}function Jc(e,t,n){if(du.test(e)){let r=e,o=r.startsWith("//")?new URL(t.protocol+r):new URL(r),i=Wt(o.pathname,n)!=null;if(o.origin===t.origin&&i)return o.pathname+o.search+o.hash}return e}function Yn(e,t,n,r){let o=e.createURL(rm(t)).toString(),i={signal:n};if(r&&kt(r.formMethod)){let{formMethod:l,formEncType:a}=r;i.method=l.toUpperCase(),a==="application/json"?(i.headers=new Headers({"Content-Type":a}),i.body=JSON.stringify(r.json)):a==="text/plain"?i.body=r.text:a==="application/x-www-form-urlencoded"&&r.formData?i.body=os(r.formData):i.body=r.formData}return new Request(o,i)}function os(e){let t=new URLSearchParams;for(let[n,r]of e.entries())t.append(n,typeof r=="string"?r:r.name);return t}function Xc(e){let t=new FormData;for(let[n,r]of e.entries())t.append(n,r);return t}function l0(e,t,n,r,o,i){let l={},a=null,s,u=!1,d={},f=r&&mt(r[1])?r[1].error:void 0;return n.forEach((c,x)=>{let v=t[x].route.id;if(Y(!zn(c),"Cannot handle redirect results in processLoaderData"),mt(c)){let w=c.error;if(f!==void 0&&(w=f,f=void 0),a=a||{},i)a[v]=w;else{let E=po(e,v);a[E.route.id]==null&&(a[E.route.id]=w)}l[v]=void 0,u||(u=!0,s=cu(c.error)?c.error.status:500),c.headers&&(d[v]=c.headers)}else Rn(c)?(o.set(v,c.deferredData),l[v]=c.deferredData.data,c.statusCode!=null&&c.statusCode!==200&&!u&&(s=c.statusCode),c.headers&&(d[v]=c.headers)):(l[v]=c.data,c.statusCode&&c.statusCode!==200&&!u&&(s=c.statusCode),c.headers&&(d[v]=c.headers))}),f!==void 0&&r&&(a={[r[0]]:f},l[r[0]]=void 0),{loaderData:l,errors:a,statusCode:s||200,loaderHeaders:d}}function Zc(e,t,n,r,o,i,l,a){let{loaderData:s,errors:u}=l0(t,n,r,o,a,!1);for(let d=0;d<i.length;d++){let{key:f,match:c,controller:x}=i[d];Y(l!==void 0&&l[d]!==void 0,"Did not find corresponding fetcher result");let v=l[d];if(!(x&&x.signal.aborted))if(mt(v)){let w=po(e.matches,c?.route.id);u&&u[w.route.id]||(u=pe({},u,{[w.route.id]:v.error})),e.fetchers.delete(f)}else if(zn(v))Y(!1,"Unhandled fetcher revalidation redirect");else if(Rn(v))Y(!1,"Unhandled fetcher deferred data");else{let w=Zt(v.data);e.fetchers.set(f,w)}}return{loaderData:s,errors:u}}function qc(e,t,n,r){let o=pe({},t);for(let i of n){let l=i.route.id;if(t.hasOwnProperty(l)?t[l]!==void 0&&(o[l]=t[l]):e[l]!==void 0&&i.route.loader&&(o[l]=e[l]),r&&r.hasOwnProperty(l))break}return o}function ed(e){return e?mt(e[1])?{actionData:{}}:{actionData:{[e[0]]:e[1].data}}:{}}function po(e,t){return(t?e.slice(0,e.findIndex(r=>r.route.id===t)+1):[...e]).reverse().find(r=>r.route.hasErrorBoundary===!0)||e[0]}function td(e){let t=e.length===1?e[0]:e.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:t}],route:t}}function dt(e,t){let{pathname:n,routeId:r,method:o,type:i}=t===void 0?{}:t,l="Unknown Server Error",a="Unknown @remix-run/router error";return e===400?(l="Bad Request",o&&n&&r?a="You made a "+o+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":i==="defer-action"?a="defer() is not supported in actions":i==="invalid-body"&&(a="Unable to encode submission body")):e===403?(l="Forbidden",a='Route "'+r+'" does not match URL "'+n+'"'):e===404?(l="Not Found",a='No route matches URL "'+n+'"'):e===405&&(l="Method Not Allowed",o&&n&&r?a="You made a "+o.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":o&&(a='Invalid request method "'+o.toUpperCase()+'"')),new uu(e||500,l,new Error(a),!0)}function nd(e){for(let t=e.length-1;t>=0;t--){let n=e[t];if(zn(n))return{result:n,idx:t}}}function rm(e){let t=typeof e=="string"?Qt(e):e;return In(pe({},t,{hash:""}))}function a0(e,t){return e.pathname!==t.pathname||e.search!==t.search?!1:e.hash===""?t.hash!=="":e.hash===t.hash?!0:t.hash!==""}function s0(e){return om(e.result)&&Qv.has(e.result.status)}function Rn(e){return e.type===ce.deferred}function mt(e){return e.type===ce.error}function zn(e){return(e&&e.type)===ce.redirect}function u0(e){let t=e;return t&&typeof t=="object"&&typeof t.data=="object"&&typeof t.subscribe=="function"&&typeof t.cancel=="function"&&typeof t.resolveData=="function"}function om(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.headers=="object"&&typeof e.body<"u"}function c0(e){return Kv.has(e.toLowerCase())}function kt(e){return Hv.has(e.toLowerCase())}async function rd(e,t,n,r,o,i){for(let l=0;l<n.length;l++){let a=n[l],s=t[l];if(!s)continue;let u=e.find(f=>f.route.id===s.route.id),d=u!=null&&!nm(u,s)&&(i&&i[s.route.id])!==void 0;if(Rn(a)&&(o||d)){let f=r[l];Y(f,"Expected an AbortSignal for revalidating fetcher deferred result"),await im(a,f,o).then(c=>{c&&(n[l]=c||n[l])})}}}async function im(e,t,n){if(n===void 0&&(n=!1),!await e.deferredData.resolveData(t)){if(n)try{return{type:ce.data,data:e.deferredData.unwrappedData}}catch(o){return{type:ce.error,error:o}}return{type:ce.data,data:e.deferredData.data}}}function fu(e){return new URLSearchParams(e).getAll("index").some(t=>t==="")}function is(e,t){let n=typeof t=="string"?Qt(t).search:t.search;if(e[e.length-1].route.index&&fu(n||""))return e[e.length-1];let r=qp(e);return r[r.length-1]}function od(e){let{formMethod:t,formAction:n,formEncType:r,text:o,formData:i,json:l}=e;if(!(!t||!n||!r)){if(o!=null)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:void 0,text:o};if(i!=null)return{formMethod:t,formAction:n,formEncType:r,formData:i,json:void 0,text:void 0};if(l!==void 0)return{formMethod:t,formAction:n,formEncType:r,formData:void 0,json:l,text:void 0}}}function la(e,t){return t?{state:"loading",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}:{state:"loading",location:e,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0}}function d0(e,t){return{state:"submitting",location:e,formMethod:t.formMethod,formAction:t.formAction,formEncType:t.formEncType,formData:t.formData,json:t.json,text:t.text}}function Qr(e,t){return e?{state:"loading",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t}:{state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:t}}function f0(e,t){return{state:"submitting",formMethod:e.formMethod,formAction:e.formAction,formEncType:e.formEncType,formData:e.formData,json:e.json,text:e.text,data:t?t.data:void 0}}function Zt(e){return{state:"idle",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0,json:void 0,text:void 0,data:e}}function p0(e,t){try{let n=e.sessionStorage.getItem(tm);if(n){let r=JSON.parse(n);for(let[o,i]of Object.entries(r||{}))i&&Array.isArray(i)&&t.set(o,new Set(i||[]))}}catch{}}function m0(e,t){if(t.size>0){let n={};for(let[r,o]of t)n[r]=[...o];try{e.sessionStorage.setItem(tm,JSON.stringify(n))}catch(r){Pr(!1,"Failed to save applied view transitions in sessionStorage ("+r+").")}}}/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Do(){return Do=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Do.apply(this,arguments)}const Wo=_.createContext(null),pu=_.createContext(null),wn=_.createContext(null),Cl=_.createContext(null),Bn=_.createContext({outlet:null,matches:[],isDataRoute:!1}),lm=_.createContext(null);function h0(e,t){let{relative:n}=t===void 0?{}:t;Ko()||Y(!1);let{basename:r,navigator:o}=_.useContext(wn),{hash:i,pathname:l,search:a}=bl(e,{relative:n}),s=l;return r!=="/"&&(s=l==="/"?r:jt([r,l])),o.createHref({pathname:s,search:a,hash:i})}function Ko(){return _.useContext(Cl)!=null}function Qo(){return Ko()||Y(!1),_.useContext(Cl).location}function am(e){_.useContext(wn).static||_.useLayoutEffect(e)}function g0(){let{isDataRoute:e}=_.useContext(Bn);return e?L0():v0()}function v0(){Ko()||Y(!1);let e=_.useContext(Wo),{basename:t,future:n,navigator:r}=_.useContext(wn),{matches:o}=_.useContext(Bn),{pathname:i}=Qo(),l=JSON.stringify(au(o,n.v7_relativeSplatPath)),a=_.useRef(!1);return am(()=>{a.current=!0}),_.useCallback(function(u,d){if(d===void 0&&(d={}),!a.current)return;if(typeof u=="number"){r.go(u);return}let f=su(u,JSON.parse(l),i,d.relative==="path");e==null&&t!=="/"&&(f.pathname=f.pathname==="/"?t:jt([t,f.pathname])),(d.replace?r.replace:r.push)(f,d.state,d)},[t,r,l,i,e])}function bl(e,t){let{relative:n}=t===void 0?{}:t,{future:r}=_.useContext(wn),{matches:o}=_.useContext(Bn),{pathname:i}=Qo(),l=JSON.stringify(au(o,r.v7_relativeSplatPath));return _.useMemo(()=>su(e,JSON.parse(l),i,n==="path"),[e,l,i,n])}function y0(e,t,n,r){Ko()||Y(!1);let{navigator:o}=_.useContext(wn),{matches:i}=_.useContext(Bn),l=i[i.length-1],a=l?l.params:{};l&&l.pathname;let s=l?l.pathnameBase:"/";l&&l.route;let u=Qo(),d;if(t){var f;let E=typeof t=="string"?Qt(t):t;s==="/"||(f=E.pathname)!=null&&f.startsWith(s)||Y(!1),d=E}else d=u;let c=d.pathname||"/",x=c;if(s!=="/"){let E=s.replace(/^\//,"").split("/");x="/"+c.replace(/^\//,"").split("/").slice(E.length).join("/")}let v=dr(e,{pathname:x}),w=E0(v&&v.map(E=>Object.assign({},E,{params:Object.assign({},a,E.params),pathname:jt([s,o.encodeLocation?o.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?s:jt([s,o.encodeLocation?o.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,n,r);return t&&w?_.createElement(Cl.Provider,{value:{location:Do({pathname:"/",search:"",hash:"",state:null,key:"default"},d),navigationType:xe.Pop}},w):w}function x0(){let e=_0(),t=cu(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,o={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return _.createElement(_.Fragment,null,_.createElement("h2",null,"Unexpected Application Error!"),_.createElement("h3",{style:{fontStyle:"italic"}},t),n?_.createElement("pre",{style:o},n):null,null)}const w0=_.createElement(x0,null);class S0 extends _.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?_.createElement(Bn.Provider,{value:this.props.routeContext},_.createElement(lm.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function k0(e){let{routeContext:t,match:n,children:r}=e,o=_.useContext(Wo);return o&&o.static&&o.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(o.staticContext._deepestRenderedBoundaryId=n.route.id),_.createElement(Bn.Provider,{value:t},r)}function E0(e,t,n,r){var o;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var i;if((i=n)!=null&&i.errors)e=n.matches;else return null}let l=e,a=(o=n)==null?void 0:o.errors;if(a!=null){let d=l.findIndex(f=>f.route.id&&a?.[f.route.id]!==void 0);d>=0||Y(!1),l=l.slice(0,Math.min(l.length,d+1))}let s=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<l.length;d++){let f=l[d];if((f.route.HydrateFallback||f.route.hydrateFallbackElement)&&(u=d),f.route.id){let{loaderData:c,errors:x}=n,v=f.route.loader&&c[f.route.id]===void 0&&(!x||x[f.route.id]===void 0);if(f.route.lazy||v){s=!0,u>=0?l=l.slice(0,u+1):l=[l[0]];break}}}return l.reduceRight((d,f,c)=>{let x,v=!1,w=null,E=null;n&&(x=a&&f.route.id?a[f.route.id]:void 0,w=f.route.errorElement||w0,s&&(u<0&&c===0?(R0("route-fallback",!1),v=!0,E=null):u===c&&(v=!0,E=f.route.hydrateFallbackElement||null)));let m=t.concat(l.slice(0,c+1)),p=()=>{let g;return x?g=w:v?g=E:f.route.Component?g=_.createElement(f.route.Component,null):f.route.element?g=f.route.element:g=d,_.createElement(k0,{match:f,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:g})};return n&&(f.route.ErrorBoundary||f.route.errorElement||c===0)?_.createElement(S0,{location:n.location,revalidation:n.revalidation,component:w,error:x,children:p(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):p()},null)}var sm=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(sm||{}),tl=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(tl||{});function C0(e){let t=_.useContext(Wo);return t||Y(!1),t}function b0(e){let t=_.useContext(pu);return t||Y(!1),t}function P0(e){let t=_.useContext(Bn);return t||Y(!1),t}function um(e){let t=P0(),n=t.matches[t.matches.length-1];return n.route.id||Y(!1),n.route.id}function _0(){var e;let t=_.useContext(lm),n=b0(tl.UseRouteError),r=um(tl.UseRouteError);return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function L0(){let{router:e}=C0(sm.UseNavigateStable),t=um(tl.UseNavigateStable),n=_.useRef(!1);return am(()=>{n.current=!0}),_.useCallback(function(o,i){i===void 0&&(i={}),n.current&&(typeof o=="number"?e.navigate(o):e.navigate(o,Do({fromRouteId:t},i)))},[e,t])}const id={};function R0(e,t,n){!t&&!id[e]&&(id[e]=!0)}function z0(e){let{basename:t="/",children:n=null,location:r,navigationType:o=xe.Pop,navigator:i,static:l=!1,future:a}=e;Ko()&&Y(!1);let s=t.replace(/^\/*/,"/"),u=_.useMemo(()=>({basename:s,navigator:i,static:l,future:Do({v7_relativeSplatPath:!1},a)}),[s,a,i,l]);typeof r=="string"&&(r=Qt(r));let{pathname:d="/",search:f="",hash:c="",state:x=null,key:v="default"}=r,w=_.useMemo(()=>{let E=Wt(d,s);return E==null?null:{location:{pathname:E,search:f,hash:c,state:x,key:v},navigationType:o}},[s,d,f,c,x,v,o]);return w==null?null:_.createElement(wn.Provider,{value:u},_.createElement(Cl.Provider,{children:n,value:w}))}new Promise(()=>{});function $0(e){let t={hasErrorBoundary:e.ErrorBoundary!=null||e.errorElement!=null};return e.Component&&Object.assign(t,{element:_.createElement(e.Component),Component:void 0}),e.HydrateFallback&&Object.assign(t,{hydrateFallbackElement:_.createElement(e.HydrateFallback),HydrateFallback:void 0}),e.ErrorBoundary&&Object.assign(t,{errorElement:_.createElement(e.ErrorBoundary),ErrorBoundary:void 0}),t}/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _r(){return _r=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},_r.apply(this,arguments)}function cm(e,t){if(e==null)return{};var n={},r=Object.keys(e),o,i;for(i=0;i<r.length;i++)o=r[i],!(t.indexOf(o)>=0)&&(n[o]=e[o]);return n}function T0(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function N0(e,t){return e.button===0&&(!t||t==="_self")&&!T0(e)}const O0=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],D0=["aria-current","caseSensitive","className","end","style","to","unstable_viewTransition","children"],M0="6";try{window.__reactRouterVersion=M0}catch{}function A0(e,t){return Xv({basename:t?.basename,future:_r({},t?.future,{v7_prependBasename:!0}),history:Sv({window:t?.window}),hydrationData:t?.hydrationData||F0(),routes:e,mapRouteProperties:$0,unstable_dataStrategy:t?.unstable_dataStrategy,window:t?.window}).initialize()}function F0(){var e;let t=(e=window)==null?void 0:e.__staticRouterHydrationData;return t&&t.errors&&(t=_r({},t,{errors:I0(t.errors)})),t}function I0(e){if(!e)return null;let t=Object.entries(e),n={};for(let[r,o]of t)if(o&&o.__type==="RouteErrorResponse")n[r]=new uu(o.status,o.statusText,o.data,o.internal===!0);else if(o&&o.__type==="Error"){if(o.__subType){let i=window[o.__subType];if(typeof i=="function")try{let l=new i(o.message);l.stack="",n[r]=l}catch{}}if(n[r]==null){let i=new Error(o.message);i.stack="",n[r]=i}}else n[r]=o;return n}const dm=_.createContext({isTransitioning:!1}),j0=_.createContext(new Map),U0="startTransition",ld=ih[U0],V0="flushSync",ad=dv[V0];function B0(e){ld?ld(e):e()}function Yr(e){ad?ad(e):e()}class H0{constructor(){this.status="pending",this.promise=new Promise((t,n)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",t(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",n(r))}})}}function W0(e){let{fallbackElement:t,router:n,future:r}=e,[o,i]=_.useState(n.state),[l,a]=_.useState(),[s,u]=_.useState({isTransitioning:!1}),[d,f]=_.useState(),[c,x]=_.useState(),[v,w]=_.useState(),E=_.useRef(new Map),{v7_startTransition:m}=r||{},p=_.useCallback(h=>{m?B0(h):h()},[m]),g=_.useCallback((h,z)=>{let{deletedFetchers:I,unstable_flushSync:N,unstable_viewTransitionOpts:V}=z;I.forEach(ne=>E.current.delete(ne)),h.fetchers.forEach((ne,oe)=>{ne.data!==void 0&&E.current.set(oe,ne.data)});let ee=n.window==null||n.window.document==null||typeof n.window.document.startViewTransition!="function";if(!V||ee){N?Yr(()=>i(h)):p(()=>i(h));return}if(N){Yr(()=>{c&&(d&&d.resolve(),c.skipTransition()),u({isTransitioning:!0,flushSync:!0,currentLocation:V.currentLocation,nextLocation:V.nextLocation})});let ne=n.window.document.startViewTransition(()=>{Yr(()=>i(h))});ne.finished.finally(()=>{Yr(()=>{f(void 0),x(void 0),a(void 0),u({isTransitioning:!1})})}),Yr(()=>x(ne));return}c?(d&&d.resolve(),c.skipTransition(),w({state:h,currentLocation:V.currentLocation,nextLocation:V.nextLocation})):(a(h),u({isTransitioning:!0,flushSync:!1,currentLocation:V.currentLocation,nextLocation:V.nextLocation}))},[n.window,c,d,E,p]);_.useLayoutEffect(()=>n.subscribe(g),[n,g]),_.useEffect(()=>{s.isTransitioning&&!s.flushSync&&f(new H0)},[s]),_.useEffect(()=>{if(d&&l&&n.window){let h=l,z=d.promise,I=n.window.document.startViewTransition(async()=>{p(()=>i(h)),await z});I.finished.finally(()=>{f(void 0),x(void 0),a(void 0),u({isTransitioning:!1})}),x(I)}},[p,l,d,n.window]),_.useEffect(()=>{d&&l&&o.location.key===l.location.key&&d.resolve()},[d,c,o.location,l]),_.useEffect(()=>{!s.isTransitioning&&v&&(a(v.state),u({isTransitioning:!0,flushSync:!1,currentLocation:v.currentLocation,nextLocation:v.nextLocation}),w(void 0))},[s.isTransitioning,v]),_.useEffect(()=>{},[]);let S=_.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:h=>n.navigate(h),push:(h,z,I)=>n.navigate(h,{state:z,preventScrollReset:I?.preventScrollReset}),replace:(h,z,I)=>n.navigate(h,{replace:!0,state:z,preventScrollReset:I?.preventScrollReset})}),[n]),P=n.basename||"/",T=_.useMemo(()=>({router:n,navigator:S,static:!1,basename:P}),[n,S,P]);return _.createElement(_.Fragment,null,_.createElement(Wo.Provider,{value:T},_.createElement(pu.Provider,{value:o},_.createElement(j0.Provider,{value:E.current},_.createElement(dm.Provider,{value:s},_.createElement(z0,{basename:P,location:o.location,navigationType:o.historyAction,navigator:S,future:{v7_relativeSplatPath:n.future.v7_relativeSplatPath}},o.initialized||n.future.v7_partialHydration?_.createElement(K0,{routes:n.routes,future:n.future,state:o}):t))))),null)}function K0(e){let{routes:t,future:n,state:r}=e;return y0(t,void 0,r,n)}const Q0=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",Y0=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,G0=_.forwardRef(function(t,n){let{onClick:r,relative:o,reloadDocument:i,replace:l,state:a,target:s,to:u,preventScrollReset:d,unstable_viewTransition:f}=t,c=cm(t,O0),{basename:x}=_.useContext(wn),v,w=!1;if(typeof u=="string"&&Y0.test(u)&&(v=u,Q0))try{let g=new URL(window.location.href),S=u.startsWith("//")?new URL(g.protocol+u):new URL(u),P=Wt(S.pathname,x);S.origin===g.origin&&P!=null?u=P+S.search+S.hash:w=!0}catch{}let E=h0(u,{relative:o}),m=X0(u,{replace:l,state:a,target:s,preventScrollReset:d,relative:o,unstable_viewTransition:f});function p(g){r&&r(g),g.defaultPrevented||m(g)}return _.createElement("a",_r({},c,{href:v||E,onClick:w||i?r:p,ref:n,target:s}))}),ex=_.forwardRef(function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:i="",end:l=!1,style:a,to:s,unstable_viewTransition:u,children:d}=t,f=cm(t,D0),c=bl(s,{relative:f.relative}),x=Qo(),v=_.useContext(pu),{navigator:w,basename:E}=_.useContext(wn),m=v!=null&&Z0(c)&&u===!0,p=w.encodeLocation?w.encodeLocation(c).pathname:c.pathname,g=x.pathname,S=v&&v.navigation&&v.navigation.location?v.navigation.location.pathname:null;o||(g=g.toLowerCase(),S=S?S.toLowerCase():null,p=p.toLowerCase()),S&&E&&(S=Wt(S,E)||S);const P=p!=="/"&&p.endsWith("/")?p.length-1:p.length;let T=g===p||!l&&g.startsWith(p)&&g.charAt(P)==="/",h=S!=null&&(S===p||!l&&S.startsWith(p)&&S.charAt(p.length)==="/"),z={isActive:T,isPending:h,isTransitioning:m},I=T?r:void 0,N;typeof i=="function"?N=i(z):N=[i,T?"active":null,h?"pending":null,m?"transitioning":null].filter(Boolean).join(" ");let V=typeof a=="function"?a(z):a;return _.createElement(G0,_r({},f,{"aria-current":I,className:N,ref:n,style:V,to:s,unstable_viewTransition:u}),typeof d=="function"?d(z):d)});var ls;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(ls||(ls={}));var sd;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(sd||(sd={}));function J0(e){let t=_.useContext(Wo);return t||Y(!1),t}function X0(e,t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:a}=t===void 0?{}:t,s=g0(),u=Qo(),d=bl(e,{relative:l});return _.useCallback(f=>{if(N0(f,n)){f.preventDefault();let c=r!==void 0?r:In(u)===In(d);s(e,{replace:c,state:o,preventScrollReset:i,relative:l,unstable_viewTransition:a})}},[u,s,d,r,o,n,e,i,l,a])}function Z0(e,t){t===void 0&&(t={});let n=_.useContext(dm);n==null&&Y(!1);let{basename:r}=J0(ls.useViewTransitionState),o=bl(e,{relative:t.relative});if(!n.isTransitioning)return!1;let i=Wt(n.currentLocation.pathname,r)||n.currentLocation.pathname,l=Wt(n.nextLocation.pathname,r)||n.nextLocation.pathname;return ns(o.pathname,l)!=null||ns(o.pathname,i)!=null}const ud={home:"home",login:"login",loading:"loading"},q0=_.lazy(async()=>Jp(()=>import("./Home-DKCtrGsd.js"),__vite__mapDeps([0,1]),import.meta.url)),ey=_.lazy(async()=>Jp(()=>import("./Login-LTI-_ar6.js"),__vite__mapDeps([2,1]),import.meta.url)),fm=[{path:"/",element:ot.jsx(q0,{}),id:ud.home},{path:"/login",element:ot.jsx(ey,{}),id:ud.login}],ty=A0(fm);function ny(){return ot.jsx(_.Suspense,{fallback:ot.jsx(yv,{}),children:ot.jsx(W0,{router:ty})})}const{slice:ry,forEach:oy}=[];function iy(e){return oy.call(ry.call(arguments,1),t=>{if(t)for(const n in t)e[n]===void 0&&(e[n]=t[n])}),e}const cd=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,ly=(e,t,n)=>{const r=n||{};r.path=r.path||"/";const o=encodeURIComponent(t);let i=`${e}=${o}`;if(r.maxAge>0){const l=r.maxAge-0;if(Number.isNaN(l))throw new Error("maxAge should be a Number");i+=`; Max-Age=${Math.floor(l)}`}if(r.domain){if(!cd.test(r.domain))throw new TypeError("option domain is invalid");i+=`; Domain=${r.domain}`}if(r.path){if(!cd.test(r.path))throw new TypeError("option path is invalid");i+=`; Path=${r.path}`}if(r.expires){if(typeof r.expires.toUTCString!="function")throw new TypeError("option expires is invalid");i+=`; Expires=${r.expires.toUTCString()}`}if(r.httpOnly&&(i+="; HttpOnly"),r.secure&&(i+="; Secure"),r.sameSite)switch(typeof r.sameSite=="string"?r.sameSite.toLowerCase():r.sameSite){case!0:i+="; SameSite=Strict";break;case"lax":i+="; SameSite=Lax";break;case"strict":i+="; SameSite=Strict";break;case"none":i+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return i},dd={create(e,t,n,r){let o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(o.expires=new Date,o.expires.setTime(o.expires.getTime()+n*60*1e3)),r&&(o.domain=r),document.cookie=ly(e,encodeURIComponent(t),o)},read(e){const t=`${e}=`,n=document.cookie.split(";");for(let r=0;r<n.length;r++){let o=n[r];for(;o.charAt(0)===" ";)o=o.substring(1,o.length);if(o.indexOf(t)===0)return o.substring(t.length,o.length)}return null},remove(e){this.create(e,"",-1)}};var ay={name:"cookie",lookup(e){let{lookupCookie:t}=e;if(t&&typeof document<"u")return dd.read(t)||void 0},cacheUserLanguage(e,t){let{lookupCookie:n,cookieMinutes:r,cookieDomain:o,cookieOptions:i}=t;n&&typeof document<"u"&&dd.create(n,e,r,o,i)}},sy={name:"querystring",lookup(e){let{lookupQuerystring:t}=e,n;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&window.location.hash?.indexOf("?")>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const i=r.substring(1).split("&");for(let l=0;l<i.length;l++){const a=i[l].indexOf("=");a>0&&i[l].substring(0,a)===t&&(n=i[l].substring(a+1))}}return n}};let Gr=null;const fd=()=>{if(Gr!==null)return Gr;try{Gr=window!=="undefined"&&window.localStorage!==null;const e="i18next.translate.boo";window.localStorage.setItem(e,"foo"),window.localStorage.removeItem(e)}catch{Gr=!1}return Gr};var uy={name:"localStorage",lookup(e){let{lookupLocalStorage:t}=e;if(t&&fd())return window.localStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupLocalStorage:n}=t;n&&fd()&&window.localStorage.setItem(n,e)}};let Jr=null;const pd=()=>{if(Jr!==null)return Jr;try{Jr=window!=="undefined"&&window.sessionStorage!==null;const e="i18next.translate.boo";window.sessionStorage.setItem(e,"foo"),window.sessionStorage.removeItem(e)}catch{Jr=!1}return Jr};var cy={name:"sessionStorage",lookup(e){let{lookupSessionStorage:t}=e;if(t&&pd())return window.sessionStorage.getItem(t)||void 0},cacheUserLanguage(e,t){let{lookupSessionStorage:n}=t;n&&pd()&&window.sessionStorage.setItem(n,e)}},dy={name:"navigator",lookup(e){const t=[];if(typeof navigator<"u"){const{languages:n,userLanguage:r,language:o}=navigator;if(n)for(let i=0;i<n.length;i++)t.push(n[i]);r&&t.push(r),o&&t.push(o)}return t.length>0?t:void 0}},fy={name:"htmlTag",lookup(e){let{htmlTag:t}=e,n;const r=t||(typeof document<"u"?document.documentElement:null);return r&&typeof r.getAttribute=="function"&&(n=r.getAttribute("lang")),n}},py={name:"path",lookup(e){let{lookupFromPathIndex:t}=e;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?n[typeof t=="number"?t:0]?.replace("/",""):void 0}},my={name:"subdomain",lookup(e){let{lookupFromSubdomainIndex:t}=e;const n=typeof t=="number"?t+1:1,r=typeof window<"u"&&window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);if(r)return r[n]}};function hy(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:e=>e}}class pm{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=t||{languageUtils:{}},this.options=iy(n,this.options||{},hy()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=o=>o.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=r,this.addDetector(ay),this.addDetector(sy),this.addDetector(uy),this.addDetector(cy),this.addDetector(dy),this.addDetector(fy),this.addDetector(py),this.addDetector(my)}addDetector(t){return this.detectors[t.name]=t,this}detect(t){t||(t=this.options.order);let n=[];return t.forEach(r=>{if(this.detectors[r]){let o=this.detectors[r].lookup(this.options);o&&typeof o=="string"&&(o=[o]),o&&(n=n.concat(o))}}),n=n.map(r=>this.options.convertDetectedLanguage(r)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(t,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(t)>-1||n.forEach(r=>{this.detectors[r]&&this.detectors[r].cacheUserLanguage(t,this.options)}))}}pm.type="languageDetector";const gy=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,vy={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},yy=e=>vy[e],xy=e=>e.replace(gy,yy);let as={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:xy};function wy(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};as={...as,...e}}function tx(){return as}let mm;function Sy(e){mm=e}function nx(){return mm}const ky={type:"3rdParty",init(e){wy(e.options.react),Sy(e)}},Ey={type:"logger",log(e){this.output("log",e)},warn(e){this.output("warn",e)},error(e){this.output("error",e)},output(e,t){console&&console[e]&&console[e].apply(console,t)}};class nl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(t,n)}init(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=t||Ey,this.options=n,this.debug=n.debug}log(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"log","",!0)}warn(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","",!0)}error(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"error","")}deprecate(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(t,n,r,o){return o&&!this.debug?null:(typeof t[0]=="string"&&(t[0]=`${r}${this.prefix} ${t[0]}`),this.logger[n](t))}create(t){return new nl(this.logger,{prefix:`${this.prefix}:${t}:`,...this.options})}clone(t){return t=t||this.options,t.prefix=t.prefix||this.prefix,new nl(this.logger,t)}}var $t=new nl;class Pl{constructor(){this.observers={}}on(t,n){return t.split(" ").forEach(r=>{this.observers[r]||(this.observers[r]=new Map);const o=this.observers[r].get(n)||0;this.observers[r].set(n,o+1)}),this}off(t,n){if(this.observers[t]){if(!n){delete this.observers[t];return}this.observers[t].delete(n)}}emit(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];this.observers[t]&&Array.from(this.observers[t].entries()).forEach(l=>{let[a,s]=l;for(let u=0;u<s;u++)a(...r)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(l=>{let[a,s]=l;for(let u=0;u<s;u++)a.apply(a,[t,...r])})}}function Xr(){let e,t;const n=new Promise((r,o)=>{e=r,t=o});return n.resolve=e,n.reject=t,n}function md(e){return e==null?"":""+e}function Cy(e,t,n){e.forEach(r=>{t[r]&&(n[r]=t[r])})}const by=/###/g;function mo(e,t,n){function r(a){return a&&a.indexOf("###")>-1?a.replace(by,"."):a}function o(){return!e||typeof e=="string"}const i=typeof t!="string"?t:t.split(".");let l=0;for(;l<i.length-1;){if(o())return{};const a=r(i[l]);!e[a]&&n&&(e[a]=new n),Object.prototype.hasOwnProperty.call(e,a)?e=e[a]:e={},++l}return o()?{}:{obj:e,k:r(i[l])}}function hd(e,t,n){const{obj:r,k:o}=mo(e,t,Object);if(r!==void 0||t.length===1){r[o]=n;return}let i=t[t.length-1],l=t.slice(0,t.length-1),a=mo(e,l,Object);for(;a.obj===void 0&&l.length;)i=`${l[l.length-1]}.${i}`,l=l.slice(0,l.length-1),a=mo(e,l,Object),a&&a.obj&&typeof a.obj[`${a.k}.${i}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${i}`]=n}function Py(e,t,n,r){const{obj:o,k:i}=mo(e,t,Object);o[i]=o[i]||[],r&&(o[i]=o[i].concat(n)),r||o[i].push(n)}function rl(e,t){const{obj:n,k:r}=mo(e,t);if(n)return n[r]}function _y(e,t,n){const r=rl(e,n);return r!==void 0?r:rl(t,n)}function hm(e,t,n){for(const r in t)r!=="__proto__"&&r!=="constructor"&&(r in e?typeof e[r]=="string"||e[r]instanceof String||typeof t[r]=="string"||t[r]instanceof String?n&&(e[r]=t[r]):hm(e[r],t[r],n):e[r]=t[r]);return e}function Gn(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}var Ly={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};function Ry(e){return typeof e=="string"?e.replace(/[&<>"'\/]/g,t=>Ly[t]):e}class zy{constructor(t){this.capacity=t,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(t){const n=this.regExpMap.get(t);if(n!==void 0)return n;const r=new RegExp(t);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(t,r),this.regExpQueue.push(t),r}}const $y=[" ",",","?","!",";"],Ty=new zy(20);function Ny(e,t,n){t=t||"",n=n||"";const r=$y.filter(l=>t.indexOf(l)<0&&n.indexOf(l)<0);if(r.length===0)return!0;const o=Ty.getRegExp(`(${r.map(l=>l==="?"?"\\?":l).join("|")})`);let i=!o.test(e);if(!i){const l=e.indexOf(n);l>0&&!o.test(e.substring(0,l))&&(i=!0)}return i}function ss(e,t){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!e)return;if(e[t])return e[t];const r=t.split(n);let o=e;for(let i=0;i<r.length;){if(!o||typeof o!="object")return;let l,a="";for(let s=i;s<r.length;++s)if(s!==i&&(a+=n),a+=r[s],l=o[a],l!==void 0){if(["string","number","boolean"].indexOf(typeof l)>-1&&s<r.length-1)continue;i+=s-i+1;break}o=l}return o}function ol(e){return e&&e.indexOf("_")>0?e.replace("_","-"):e}class gd extends Pl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=t||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(t){this.options.ns.indexOf(t)<0&&this.options.ns.push(t)}removeNamespaces(t){const n=this.options.ns.indexOf(t);n>-1&&this.options.ns.splice(n,1)}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const i=o.keySeparator!==void 0?o.keySeparator:this.options.keySeparator,l=o.ignoreJSONStructure!==void 0?o.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;t.indexOf(".")>-1?a=t.split("."):(a=[t,n],r&&(Array.isArray(r)?a.push(...r):typeof r=="string"&&i?a.push(...r.split(i)):a.push(r)));const s=rl(this.data,a);return!s&&!n&&!r&&t.indexOf(".")>-1&&(t=a[0],n=a[1],r=a.slice(2).join(".")),s||!l||typeof r!="string"?s:ss(this.data&&this.data[t]&&this.data[t][n],r,i)}addResource(t,n,r,o){let i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const l=i.keySeparator!==void 0?i.keySeparator:this.options.keySeparator;let a=[t,n];r&&(a=a.concat(l?r.split(l):r)),t.indexOf(".")>-1&&(a=t.split("."),o=n,n=a[1]),this.addNamespaces(n),hd(this.data,a,o),i.silent||this.emit("added",t,n,r,o)}addResources(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const i in r)(typeof r[i]=="string"||Array.isArray(r[i]))&&this.addResource(t,n,i,r[i],{silent:!0});o.silent||this.emit("added",t,n,r)}addResourceBundle(t,n,r,o,i){let l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[t,n];t.indexOf(".")>-1&&(a=t.split("."),o=r,r=n,n=a[1]),this.addNamespaces(n);let s=rl(this.data,a)||{};l.skipCopy||(r=JSON.parse(JSON.stringify(r))),o?hm(s,r,i):s={...s,...r},hd(this.data,a,s),l.silent||this.emit("added",t,n,r)}removeResourceBundle(t,n){this.hasResourceBundle(t,n)&&delete this.data[t][n],this.removeNamespaces(n),this.emit("removed",t,n)}hasResourceBundle(t,n){return this.getResource(t,n)!==void 0}getResourceBundle(t,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(t,n)}:this.getResource(t,n)}getDataByLanguage(t){return this.data[t]}hasLanguageSomeTranslations(t){const n=this.getDataByLanguage(t);return!!(n&&Object.keys(n)||[]).find(o=>n[o]&&Object.keys(n[o]).length>0)}toJSON(){return this.data}}var gm={processors:{},addPostProcessor(e){this.processors[e.name]=e},handle(e,t,n,r,o){return e.forEach(i=>{this.processors[i]&&(t=this.processors[i].process(t,n,r,o))}),t}};const vd={};class il extends Pl{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),Cy(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],t,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=$t.create("translator")}changeLanguage(t){t&&(this.language=t)}exists(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(t==null)return!1;const r=this.resolve(t,n);return r&&r.res!==void 0}extractFromKey(t,n){let r=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;r===void 0&&(r=":");const o=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let i=n.ns||this.options.defaultNS||[];const l=r&&t.indexOf(r)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!Ny(t,r,o);if(l&&!a){const s=t.match(this.interpolator.nestingRegexp);if(s&&s.length>0)return{key:t,namespaces:i};const u=t.split(r);(r!==o||r===o&&this.options.ns.indexOf(u[0])>-1)&&(i=u.shift()),t=u.join(o)}return typeof i=="string"&&(i=[i]),{key:t,namespaces:i}}translate(t,n,r){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),t==null)return"";Array.isArray(t)||(t=[String(t)]);const o=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,i=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:l,namespaces:a}=this.extractFromKey(t[t.length-1],n),s=a[a.length-1],u=n.lng||this.language,d=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(d){const S=n.nsSeparator||this.options.nsSeparator;return o?{res:`${s}${S}${l}`,usedKey:l,exactUsedKey:l,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:`${s}${S}${l}`}return o?{res:l,usedKey:l,exactUsedKey:l,usedLng:u,usedNS:s,usedParams:this.getUsedParamsDetails(n)}:l}const f=this.resolve(t,n);let c=f&&f.res;const x=f&&f.usedKey||l,v=f&&f.exactUsedKey||l,w=Object.prototype.toString.apply(c),E=["[object Number]","[object Function]","[object RegExp]"],m=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,p=!this.i18nFormat||this.i18nFormat.handleAsObject;if(p&&c&&(typeof c!="string"&&typeof c!="boolean"&&typeof c!="number")&&E.indexOf(w)<0&&!(typeof m=="string"&&Array.isArray(c))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const S=this.options.returnedObjectHandler?this.options.returnedObjectHandler(x,c,{...n,ns:a}):`key '${l} (${this.language})' returned an object instead of string.`;return o?(f.res=S,f.usedParams=this.getUsedParamsDetails(n),f):S}if(i){const S=Array.isArray(c),P=S?[]:{},T=S?v:x;for(const h in c)if(Object.prototype.hasOwnProperty.call(c,h)){const z=`${T}${i}${h}`;P[h]=this.translate(z,{...n,joinArrays:!1,ns:a}),P[h]===z&&(P[h]=c[h])}c=P}}else if(p&&typeof m=="string"&&Array.isArray(c))c=c.join(m),c&&(c=this.extendTranslation(c,t,n,r));else{let S=!1,P=!1;const T=n.count!==void 0&&typeof n.count!="string",h=il.hasDefaultValue(n),z=T?this.pluralResolver.getSuffix(u,n.count,n):"",I=n.ordinal&&T?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",N=T&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),V=N&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${z}`]||n[`defaultValue${I}`]||n.defaultValue;!this.isValidLookup(c)&&h&&(S=!0,c=V),this.isValidLookup(c)||(P=!0,c=l);const ne=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&P?void 0:c,oe=h&&V!==c&&this.options.updateMissing;if(P||S||oe){if(this.logger.log(oe?"updateKey":"missingKey",u,s,l,oe?V:c),i){const b=this.resolve(l,{...n,keySeparator:!1});b&&b.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let se=[];const Ae=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&Ae&&Ae[0])for(let b=0;b<Ae.length;b++)se.push(Ae[b]);else this.options.saveMissingTo==="all"?se=this.languageUtils.toResolveHierarchy(n.lng||this.language):se.push(n.lng||this.language);const We=(b,F,j)=>{const X=h&&j!==c?j:ne;this.options.missingKeyHandler?this.options.missingKeyHandler(b,s,F,X,oe,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(b,s,F,X,oe,n),this.emit("missingKey",b,s,F,c)};this.options.saveMissing&&(this.options.saveMissingPlurals&&T?se.forEach(b=>{const F=this.pluralResolver.getSuffixes(b,n);N&&n[`defaultValue${this.options.pluralSeparator}zero`]&&F.indexOf(`${this.options.pluralSeparator}zero`)<0&&F.push(`${this.options.pluralSeparator}zero`),F.forEach(j=>{We([b],l+j,n[`defaultValue${j}`]||V)})}):We(se,l,V))}c=this.extendTranslation(c,t,n,f,r),P&&c===l&&this.options.appendNamespaceToMissingKey&&(c=`${s}:${l}`),(P||S)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?c=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${s}:${l}`:l,S?c:void 0):c=this.options.parseMissingKeyHandler(c))}return o?(f.res=c,f.usedParams=this.getUsedParamsDetails(n),f):c}extendTranslation(t,n,r,o,i){var l=this;if(this.i18nFormat&&this.i18nFormat.parse)t=this.i18nFormat.parse(t,{...this.options.interpolation.defaultVariables,...r},r.lng||this.language||o.usedLng,o.usedNS,o.usedKey,{resolved:o});else if(!r.skipInterpolation){r.interpolation&&this.interpolator.init({...r,interpolation:{...this.options.interpolation,...r.interpolation}});const u=typeof t=="string"&&(r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let d;if(u){const c=t.match(this.interpolator.nestingRegexp);d=c&&c.length}let f=r.replace&&typeof r.replace!="string"?r.replace:r;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),t=this.interpolator.interpolate(t,f,r.lng||this.language,r),u){const c=t.match(this.interpolator.nestingRegexp),x=c&&c.length;d<x&&(r.nest=!1)}!r.lng&&this.options.compatibilityAPI!=="v1"&&o&&o.res&&(r.lng=o.usedLng),r.nest!==!1&&(t=this.interpolator.nest(t,function(){for(var c=arguments.length,x=new Array(c),v=0;v<c;v++)x[v]=arguments[v];return i&&i[0]===x[0]&&!r.context?(l.logger.warn(`It seems you are nesting recursively key: ${x[0]} in key: ${n[0]}`),null):l.translate(...x,n)},r)),r.interpolation&&this.interpolator.reset()}const a=r.postProcess||this.options.postProcess,s=typeof a=="string"?[a]:a;return t!=null&&s&&s.length&&r.applyPostProcessor!==!1&&(t=gm.handle(s,t,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...o,usedParams:this.getUsedParamsDetails(r)},...r}:r,this)),t}resolve(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r,o,i,l,a;return typeof t=="string"&&(t=[t]),t.forEach(s=>{if(this.isValidLookup(r))return;const u=this.extractFromKey(s,n),d=u.key;o=d;let f=u.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const c=n.count!==void 0&&typeof n.count!="string",x=c&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),v=n.context!==void 0&&(typeof n.context=="string"||typeof n.context=="number")&&n.context!=="",w=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(E=>{this.isValidLookup(r)||(a=E,!vd[`${w[0]}-${E}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(vd[`${w[0]}-${E}`]=!0,this.logger.warn(`key "${o}" for languages "${w.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),w.forEach(m=>{if(this.isValidLookup(r))return;l=m;const p=[d];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(p,d,m,E,n);else{let S;c&&(S=this.pluralResolver.getSuffix(m,n.count,n));const P=`${this.options.pluralSeparator}zero`,T=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(c&&(p.push(d+S),n.ordinal&&S.indexOf(T)===0&&p.push(d+S.replace(T,this.options.pluralSeparator)),x&&p.push(d+P)),v){const h=`${d}${this.options.contextSeparator}${n.context}`;p.push(h),c&&(p.push(h+S),n.ordinal&&S.indexOf(T)===0&&p.push(h+S.replace(T,this.options.pluralSeparator)),x&&p.push(h+P))}}let g;for(;g=p.pop();)this.isValidLookup(r)||(i=g,r=this.getResource(m,E,g,n))}))})}),{res:r,usedKey:o,exactUsedKey:i,usedLng:l,usedNS:a}}isValidLookup(t){return t!==void 0&&!(!this.options.returnNull&&t===null)&&!(!this.options.returnEmptyString&&t==="")}getResource(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(t,n,r,o):this.resourceStore.getResource(t,n,r,o)}getUsedParamsDetails(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],r=t.replace&&typeof t.replace!="string";let o=r?t.replace:t;if(r&&typeof t.count<"u"&&(o.count=t.count),this.options.interpolation.defaultVariables&&(o={...this.options.interpolation.defaultVariables,...o}),!r){o={...o};for(const i of n)delete o[i]}return o}static hasDefaultValue(t){const n="defaultValue";for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)&&n===r.substring(0,n.length)&&t[r]!==void 0)return!0;return!1}}function aa(e){return e.charAt(0).toUpperCase()+e.slice(1)}class yd{constructor(t){this.options=t,this.supportedLngs=this.options.supportedLngs||!1,this.logger=$t.create("languageUtils")}getScriptPartFromCode(t){if(t=ol(t),!t||t.indexOf("-")<0)return null;const n=t.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(t){if(t=ol(t),!t||t.indexOf("-")<0)return t;const n=t.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(t){if(typeof t=="string"&&t.indexOf("-")>-1){const n=["hans","hant","latn","cyrl","cans","mong","arab"];let r=t.split("-");return this.options.lowerCaseLng?r=r.map(o=>o.toLowerCase()):r.length===2?(r[0]=r[0].toLowerCase(),r[1]=r[1].toUpperCase(),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=aa(r[1].toLowerCase()))):r.length===3&&(r[0]=r[0].toLowerCase(),r[1].length===2&&(r[1]=r[1].toUpperCase()),r[0]!=="sgn"&&r[2].length===2&&(r[2]=r[2].toUpperCase()),n.indexOf(r[1].toLowerCase())>-1&&(r[1]=aa(r[1].toLowerCase())),n.indexOf(r[2].toLowerCase())>-1&&(r[2]=aa(r[2].toLowerCase()))),r.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?t.toLowerCase():t}isSupportedCode(t){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(t=this.getLanguagePartFromCode(t)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(t)>-1}getBestMatchFromCodes(t){if(!t)return null;let n;return t.forEach(r=>{if(n)return;const o=this.formatLanguageCode(r);(!this.options.supportedLngs||this.isSupportedCode(o))&&(n=o)}),!n&&this.options.supportedLngs&&t.forEach(r=>{if(n)return;const o=this.getLanguagePartFromCode(r);if(this.isSupportedCode(o))return n=o;n=this.options.supportedLngs.find(i=>{if(i===o)return i;if(!(i.indexOf("-")<0&&o.indexOf("-")<0)&&(i.indexOf("-")>0&&o.indexOf("-")<0&&i.substring(0,i.indexOf("-"))===o||i.indexOf(o)===0&&o.length>1))return i})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(t,n){if(!t)return[];if(typeof t=="function"&&(t=t(n)),typeof t=="string"&&(t=[t]),Array.isArray(t))return t;if(!n)return t.default||[];let r=t[n];return r||(r=t[this.getScriptPartFromCode(n)]),r||(r=t[this.formatLanguageCode(n)]),r||(r=t[this.getLanguagePartFromCode(n)]),r||(r=t.default),r||[]}toResolveHierarchy(t,n){const r=this.getFallbackCodes(n||this.options.fallbackLng||[],t),o=[],i=l=>{l&&(this.isSupportedCode(l)?o.push(l):this.logger.warn(`rejecting language code not found in supportedLngs: ${l}`))};return typeof t=="string"&&(t.indexOf("-")>-1||t.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&i(this.formatLanguageCode(t)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&i(this.getScriptPartFromCode(t)),this.options.load!=="currentOnly"&&i(this.getLanguagePartFromCode(t))):typeof t=="string"&&i(this.formatLanguageCode(t)),r.forEach(l=>{o.indexOf(l)<0&&i(this.formatLanguageCode(l))}),o}}let Oy=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],Dy={1:function(e){return+(e>1)},2:function(e){return+(e!=1)},3:function(e){return 0},4:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},5:function(e){return e==0?0:e==1?1:e==2?2:e%100>=3&&e%100<=10?3:e%100>=11?4:5},6:function(e){return e==1?0:e>=2&&e<=4?1:2},7:function(e){return e==1?0:e%10>=2&&e%10<=4&&(e%100<10||e%100>=20)?1:2},8:function(e){return e==1?0:e==2?1:e!=8&&e!=11?2:3},9:function(e){return+(e>=2)},10:function(e){return e==1?0:e==2?1:e<7?2:e<11?3:4},11:function(e){return e==1||e==11?0:e==2||e==12?1:e>2&&e<20?2:3},12:function(e){return+(e%10!=1||e%100==11)},13:function(e){return+(e!==0)},14:function(e){return e==1?0:e==2?1:e==3?2:3},15:function(e){return e%10==1&&e%100!=11?0:e%10>=2&&(e%100<10||e%100>=20)?1:2},16:function(e){return e%10==1&&e%100!=11?0:e!==0?1:2},17:function(e){return e==1||e%10==1&&e%100!=11?0:1},18:function(e){return e==0?0:e==1?1:2},19:function(e){return e==1?0:e==0||e%100>1&&e%100<11?1:e%100>10&&e%100<20?2:3},20:function(e){return e==1?0:e==0||e%100>0&&e%100<20?1:2},21:function(e){return e%100==1?1:e%100==2?2:e%100==3||e%100==4?3:0},22:function(e){return e==1?0:e==2?1:(e<0||e>10)&&e%10==0?2:3}};const My=["v1","v2","v3"],Ay=["v4"],xd={zero:0,one:1,two:2,few:3,many:4,other:5};function Fy(){const e={};return Oy.forEach(t=>{t.lngs.forEach(n=>{e[n]={numbers:t.nr,plurals:Dy[t.fc]}})}),e}class Iy{constructor(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=t,this.options=n,this.logger=$t.create("pluralResolver"),(!this.options.compatibilityJSON||Ay.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=Fy()}addRule(t,n){this.rules[t]=n}getRule(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{return new Intl.PluralRules(ol(t==="dev"?"en":t),{type:n.ordinal?"ordinal":"cardinal"})}catch{return}return this.rules[t]||this.rules[this.languageUtils.getLanguagePartFromCode(t)]}needsPlural(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return this.shouldUseIntlApi()?r&&r.resolvedOptions().pluralCategories.length>1:r&&r.numbers.length>1}getPluralFormsOfKey(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(t,r).map(o=>`${n}${o}`)}getSuffixes(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const r=this.getRule(t,n);return r?this.shouldUseIntlApi()?r.resolvedOptions().pluralCategories.sort((o,i)=>xd[o]-xd[i]).map(o=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${o}`):r.numbers.map(o=>this.getSuffix(t,o,n)):[]}getSuffix(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const o=this.getRule(t,r);return o?this.shouldUseIntlApi()?`${this.options.prepend}${r.ordinal?`ordinal${this.options.prepend}`:""}${o.select(n)}`:this.getSuffixRetroCompatible(o,n):(this.logger.warn(`no plural rule found for: ${t}`),"")}getSuffixRetroCompatible(t,n){const r=t.noAbs?t.plurals(n):t.plurals(Math.abs(n));let o=t.numbers[r];this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1&&(o===2?o="plural":o===1&&(o=""));const i=()=>this.options.prepend&&o.toString()?this.options.prepend+o.toString():o.toString();return this.options.compatibilityJSON==="v1"?o===1?"":typeof o=="number"?`_plural_${o.toString()}`:i():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&t.numbers.length===2&&t.numbers[0]===1?i():this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString()}shouldUseIntlApi(){return!My.includes(this.options.compatibilityJSON)}}function wd(e,t,n){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",o=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,i=_y(e,t,n);return!i&&o&&typeof n=="string"&&(i=ss(e,n,r),i===void 0&&(i=ss(t,n,r))),i}class jy{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=$t.create("interpolator"),this.options=t,this.format=t.interpolation&&t.interpolation.format||(n=>n),this.init(t)}init(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};t.interpolation||(t.interpolation={escapeValue:!0});const{escape:n,escapeValue:r,useRawValueToEscape:o,prefix:i,prefixEscaped:l,suffix:a,suffixEscaped:s,formatSeparator:u,unescapeSuffix:d,unescapePrefix:f,nestingPrefix:c,nestingPrefixEscaped:x,nestingSuffix:v,nestingSuffixEscaped:w,nestingOptionsSeparator:E,maxReplaces:m,alwaysFormat:p}=t.interpolation;this.escape=n!==void 0?n:Ry,this.escapeValue=r!==void 0?r:!0,this.useRawValueToEscape=o!==void 0?o:!1,this.prefix=i?Gn(i):l||"{{",this.suffix=a?Gn(a):s||"}}",this.formatSeparator=u||",",this.unescapePrefix=d?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":d||"",this.nestingPrefix=c?Gn(c):x||Gn("$t("),this.nestingSuffix=v?Gn(v):w||Gn(")"),this.nestingOptionsSeparator=E||",",this.maxReplaces=m||1e3,this.alwaysFormat=p!==void 0?p:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const t=(n,r)=>n&&n.source===r?(n.lastIndex=0,n):new RegExp(r,"g");this.regexp=t(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=t(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=t(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(t,n,r,o){let i,l,a;const s=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{};function u(v){return v.replace(/\$/g,"$$$$")}const d=v=>{if(v.indexOf(this.formatSeparator)<0){const p=wd(n,s,v,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(p,void 0,r,{...o,...n,interpolationkey:v}):p}const w=v.split(this.formatSeparator),E=w.shift().trim(),m=w.join(this.formatSeparator).trim();return this.format(wd(n,s,E,this.options.keySeparator,this.options.ignoreJSONStructure),m,r,{...o,...n,interpolationkey:E})};this.resetRegExp();const f=o&&o.missingInterpolationHandler||this.options.missingInterpolationHandler,c=o&&o.interpolation&&o.interpolation.skipOnVariables!==void 0?o.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:v=>u(v)},{regex:this.regexp,safeValue:v=>this.escapeValue?u(this.escape(v)):u(v)}].forEach(v=>{for(a=0;i=v.regex.exec(t);){const w=i[1].trim();if(l=d(w),l===void 0)if(typeof f=="function"){const m=f(t,i,o);l=typeof m=="string"?m:""}else if(o&&Object.prototype.hasOwnProperty.call(o,w))l="";else if(c){l=i[0];continue}else this.logger.warn(`missed to pass in variable ${w} for interpolating ${t}`),l="";else typeof l!="string"&&!this.useRawValueToEscape&&(l=md(l));const E=v.safeValue(l);if(t=t.replace(i[0],E),c?(v.regex.lastIndex+=l.length,v.regex.lastIndex-=i[0].length):v.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),t}nest(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o,i,l;function a(s,u){const d=this.nestingOptionsSeparator;if(s.indexOf(d)<0)return s;const f=s.split(new RegExp(`${d}[ ]*{`));let c=`{${f[1]}`;s=f[0],c=this.interpolate(c,l);const x=c.match(/'/g),v=c.match(/"/g);(x&&x.length%2===0&&!v||v.length%2!==0)&&(c=c.replace(/'/g,'"'));try{l=JSON.parse(c),u&&(l={...u,...l})}catch(w){return this.logger.warn(`failed parsing options string in nesting for key ${s}`,w),`${s}${d}${c}`}return l.defaultValue&&l.defaultValue.indexOf(this.prefix)>-1&&delete l.defaultValue,s}for(;o=this.nestingRegexp.exec(t);){let s=[];l={...r},l=l.replace&&typeof l.replace!="string"?l.replace:l,l.applyPostProcessor=!1,delete l.defaultValue;let u=!1;if(o[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(o[1])){const d=o[1].split(this.formatSeparator).map(f=>f.trim());o[1]=d.shift(),s=d,u=!0}if(i=n(a.call(this,o[1].trim(),l),l),i&&o[0]===t&&typeof i!="string")return i;typeof i!="string"&&(i=md(i)),i||(this.logger.warn(`missed to resolve ${o[1]} for nesting ${t}`),i=""),u&&(i=s.reduce((d,f)=>this.format(d,f,r.lng,{...r,interpolationkey:o[1].trim()}),i.trim())),t=t.replace(o[0],i),this.regexp.lastIndex=0}return t}}function Uy(e){let t=e.toLowerCase().trim();const n={};if(e.indexOf("(")>-1){const r=e.split("(");t=r[0].toLowerCase().trim();const o=r[1].substring(0,r[1].length-1);t==="currency"&&o.indexOf(":")<0?n.currency||(n.currency=o.trim()):t==="relativetime"&&o.indexOf(":")<0?n.range||(n.range=o.trim()):o.split(";").forEach(l=>{if(l){const[a,...s]=l.split(":"),u=s.join(":").trim().replace(/^'+|'+$/g,""),d=a.trim();n[d]||(n[d]=u),u==="false"&&(n[d]=!1),u==="true"&&(n[d]=!0),isNaN(u)||(n[d]=parseInt(u,10))}})}return{formatName:t,formatOptions:n}}function Jn(e){const t={};return function(r,o,i){const l=o+JSON.stringify(i);let a=t[l];return a||(a=e(ol(o),i),t[l]=a),a(r)}}class Vy{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=$t.create("formatter"),this.options=t,this.formats={number:Jn((n,r)=>{const o=new Intl.NumberFormat(n,{...r});return i=>o.format(i)}),currency:Jn((n,r)=>{const o=new Intl.NumberFormat(n,{...r,style:"currency"});return i=>o.format(i)}),datetime:Jn((n,r)=>{const o=new Intl.DateTimeFormat(n,{...r});return i=>o.format(i)}),relativetime:Jn((n,r)=>{const o=new Intl.RelativeTimeFormat(n,{...r});return i=>o.format(i,r.range||"day")}),list:Jn((n,r)=>{const o=new Intl.ListFormat(n,{...r});return i=>o.format(i)})},this.init(t)}init(t){const r=(arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}}).interpolation;this.formatSeparator=r.formatSeparator?r.formatSeparator:r.formatSeparator||","}add(t,n){this.formats[t.toLowerCase().trim()]=n}addCached(t,n){this.formats[t.toLowerCase().trim()]=Jn(n)}format(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return n.split(this.formatSeparator).reduce((a,s)=>{const{formatName:u,formatOptions:d}=Uy(s);if(this.formats[u]){let f=a;try{const c=o&&o.formatParams&&o.formatParams[o.interpolationkey]||{},x=c.locale||c.lng||o.locale||o.lng||r;f=this.formats[u](a,x,{...d,...o,...c})}catch(c){this.logger.warn(c)}return f}else this.logger.warn(`there was no format function for ${u}`);return a},t)}}function By(e,t){e.pending[t]!==void 0&&(delete e.pending[t],e.pendingCount--)}class Hy extends Pl{constructor(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=t,this.store=n,this.services=r,this.languageUtils=r.languageUtils,this.options=o,this.logger=$t.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=o.maxParallelReads||10,this.readingCalls=0,this.maxRetries=o.maxRetries>=0?o.maxRetries:5,this.retryTimeout=o.retryTimeout>=1?o.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(r,o.backend,o)}queueLoad(t,n,r,o){const i={},l={},a={},s={};return t.forEach(u=>{let d=!0;n.forEach(f=>{const c=`${u}|${f}`;!r.reload&&this.store.hasResourceBundle(u,f)?this.state[c]=2:this.state[c]<0||(this.state[c]===1?l[c]===void 0&&(l[c]=!0):(this.state[c]=1,d=!1,l[c]===void 0&&(l[c]=!0),i[c]===void 0&&(i[c]=!0),s[f]===void 0&&(s[f]=!0)))}),d||(a[u]=!0)}),(Object.keys(i).length||Object.keys(l).length)&&this.queue.push({pending:l,pendingCount:Object.keys(l).length,loaded:{},errors:[],callback:o}),{toLoad:Object.keys(i),pending:Object.keys(l),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(s)}}loaded(t,n,r){const o=t.split("|"),i=o[0],l=o[1];n&&this.emit("failedLoading",i,l,n),r&&this.store.addResourceBundle(i,l,r,void 0,void 0,{skipCopy:!0}),this.state[t]=n?-1:2;const a={};this.queue.forEach(s=>{Py(s.loaded,[i],l),By(s,t),n&&s.errors.push(n),s.pendingCount===0&&!s.done&&(Object.keys(s.loaded).forEach(u=>{a[u]||(a[u]={});const d=s.loaded[u];d.length&&d.forEach(f=>{a[u][f]===void 0&&(a[u][f]=!0)})}),s.done=!0,s.errors.length?s.callback(s.errors):s.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(s=>!s.done)}read(t,n,r){let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,i=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,l=arguments.length>5?arguments[5]:void 0;if(!t.length)return l(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:t,ns:n,fcName:r,tried:o,wait:i,callback:l});return}this.readingCalls++;const a=(u,d)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(u&&d&&o<this.maxRetries){setTimeout(()=>{this.read.call(this,t,n,r,o+1,i*2,l)},i);return}l(u,d)},s=this.backend[r].bind(this.backend);if(s.length===2){try{const u=s(t,n);u&&typeof u.then=="function"?u.then(d=>a(null,d)).catch(a):a(null,u)}catch(u){a(u)}return}return s(t,n,a)}prepareLoading(t,n){let r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},o=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),o&&o();typeof t=="string"&&(t=this.languageUtils.toResolveHierarchy(t)),typeof n=="string"&&(n=[n]);const i=this.queueLoad(t,n,r,o);if(!i.toLoad.length)return i.pending.length||o(),null;i.toLoad.forEach(l=>{this.loadOne(l)})}load(t,n,r){this.prepareLoading(t,n,{},r)}reload(t,n,r){this.prepareLoading(t,n,{reload:!0},r)}loadOne(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const r=t.split("|"),o=r[0],i=r[1];this.read(o,i,"read",void 0,void 0,(l,a)=>{l&&this.logger.warn(`${n}loading namespace ${i} for language ${o} failed`,l),!l&&a&&this.logger.log(`${n}loaded namespace ${i} for language ${o}`,a),this.loaded(t,l,a)})}saveMissing(t,n,r,o,i){let l=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${r}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(r==null||r==="")){if(this.backend&&this.backend.create){const s={...l,isUpdate:i},u=this.backend.create.bind(this.backend);if(u.length<6)try{let d;u.length===5?d=u(t,n,r,o,s):d=u(t,n,r,o),d&&typeof d.then=="function"?d.then(f=>a(null,f)).catch(a):a(null,d)}catch(d){a(d)}else u(t,n,r,o,a,s)}!t||!t[0]||this.store.addResource(t[0],n,r,o)}}}function Sd(){return{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(t){let n={};if(typeof t[1]=="object"&&(n=t[1]),typeof t[1]=="string"&&(n.defaultValue=t[1]),typeof t[2]=="string"&&(n.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const r=t[3]||t[2];Object.keys(r).forEach(o=>{n[o]=r[o]})}return n},interpolation:{escapeValue:!0,format:e=>e,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}}function kd(e){return typeof e.ns=="string"&&(e.ns=[e.ns]),typeof e.fallbackLng=="string"&&(e.fallbackLng=[e.fallbackLng]),typeof e.fallbackNS=="string"&&(e.fallbackNS=[e.fallbackNS]),e.supportedLngs&&e.supportedLngs.indexOf("cimode")<0&&(e.supportedLngs=e.supportedLngs.concat(["cimode"])),e}function vi(){}function Wy(e){Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n=>{typeof e[n]=="function"&&(e[n]=e[n].bind(e))})}class Mo extends Pl{constructor(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=kd(t),this.services={},this.logger=$t,this.modules={external:[]},Wy(this),n&&!this.isInitialized&&!t.isClone){if(!this.options.initImmediate)return this.init(t,n),this;setTimeout(()=>{this.init(t,n)},0)}}init(){var t=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},r=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(r=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(typeof n.ns=="string"?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const o=Sd();this.options={...o,...this.options,...kd(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...o.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);function i(d){return d?typeof d=="function"?new d:d:null}if(!this.options.isClone){this.modules.logger?$t.init(i(this.modules.logger),this.options):$t.init(null,this.options);let d;this.modules.formatter?d=this.modules.formatter:typeof Intl<"u"&&(d=Vy);const f=new yd(this.options);this.store=new gd(this.options.resources,this.options);const c=this.services;c.logger=$t,c.resourceStore=this.store,c.languageUtils=f,c.pluralResolver=new Iy(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),d&&(!this.options.interpolation.format||this.options.interpolation.format===o.interpolation.format)&&(c.formatter=i(d),c.formatter.init(c,this.options),this.options.interpolation.format=c.formatter.format.bind(c.formatter)),c.interpolator=new jy(this.options),c.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},c.backendConnector=new Hy(i(this.modules.backend),c.resourceStore,c,this.options),c.backendConnector.on("*",function(x){for(var v=arguments.length,w=new Array(v>1?v-1:0),E=1;E<v;E++)w[E-1]=arguments[E];t.emit(x,...w)}),this.modules.languageDetector&&(c.languageDetector=i(this.modules.languageDetector),c.languageDetector.init&&c.languageDetector.init(c,this.options.detection,this.options)),this.modules.i18nFormat&&(c.i18nFormat=i(this.modules.i18nFormat),c.i18nFormat.init&&c.i18nFormat.init(this)),this.translator=new il(this.services,this.options),this.translator.on("*",function(x){for(var v=arguments.length,w=new Array(v>1?v-1:0),E=1;E<v;E++)w[E-1]=arguments[E];t.emit(x,...w)}),this.modules.external.forEach(x=>{x.init&&x.init(this)})}if(this.format=this.options.interpolation.format,r||(r=vi),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const d=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);d.length>0&&d[0]!=="dev"&&(this.options.lng=d[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(d=>{this[d]=function(){return t.store[d](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(d=>{this[d]=function(){return t.store[d](...arguments),t}});const s=Xr(),u=()=>{const d=(f,c)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),s.resolve(c),r(f,c)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return d(null,this.t.bind(this));this.changeLanguage(this.options.lng,d)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),s}loadResources(t){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vi;const o=typeof t=="string"?t:this.language;if(typeof t=="function"&&(r=t),!this.options.resources||this.options.partialBundledLanguages){if(o&&o.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return r();const i=[],l=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{u!=="cimode"&&i.indexOf(u)<0&&i.push(u)})};o?l(o):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(s=>l(s)),this.options.preload&&this.options.preload.forEach(a=>l(a)),this.services.backendConnector.load(i,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),r(a)})}else r(null)}reloadResources(t,n,r){const o=Xr();return t||(t=this.languages),n||(n=this.options.ns),r||(r=vi),this.services.backendConnector.reload(t,n,i=>{o.resolve(),r(i)}),o}use(t){if(!t)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!t.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return t.type==="backend"&&(this.modules.backend=t),(t.type==="logger"||t.log&&t.warn&&t.error)&&(this.modules.logger=t),t.type==="languageDetector"&&(this.modules.languageDetector=t),t.type==="i18nFormat"&&(this.modules.i18nFormat=t),t.type==="postProcessor"&&gm.addPostProcessor(t),t.type==="formatter"&&(this.modules.formatter=t),t.type==="3rdParty"&&this.modules.external.push(t),this}setResolvedLanguage(t){if(!(!t||!this.languages)&&!(["cimode","dev"].indexOf(t)>-1))for(let n=0;n<this.languages.length;n++){const r=this.languages[n];if(!(["cimode","dev"].indexOf(r)>-1)&&this.store.hasLanguageSomeTranslations(r)){this.resolvedLanguage=r;break}}}changeLanguage(t,n){var r=this;this.isLanguageChangingTo=t;const o=Xr();this.emit("languageChanging",t);const i=s=>{this.language=s,this.languages=this.services.languageUtils.toResolveHierarchy(s),this.resolvedLanguage=void 0,this.setResolvedLanguage(s)},l=(s,u)=>{u?(i(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,o.resolve(function(){return r.t(...arguments)}),n&&n(s,function(){return r.t(...arguments)})},a=s=>{!t&&!s&&this.services.languageDetector&&(s=[]);const u=typeof s=="string"?s:this.services.languageUtils.getBestMatchFromCodes(s);u&&(this.language||i(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,d=>{l(d,u)})};return!t&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!t&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(t),o}getFixedT(t,n,r){var o=this;const i=function(l,a){let s;if(typeof a!="object"){for(var u=arguments.length,d=new Array(u>2?u-2:0),f=2;f<u;f++)d[f-2]=arguments[f];s=o.options.overloadTranslationOptionHandler([l,a].concat(d))}else s={...a};s.lng=s.lng||i.lng,s.lngs=s.lngs||i.lngs,s.ns=s.ns||i.ns,s.keyPrefix=s.keyPrefix||r||i.keyPrefix;const c=o.options.keySeparator||".";let x;return s.keyPrefix&&Array.isArray(l)?x=l.map(v=>`${s.keyPrefix}${c}${v}`):x=s.keyPrefix?`${s.keyPrefix}${c}${l}`:l,o.t(x,s)};return typeof t=="string"?i.lng=t:i.lngs=t,i.ns=n,i.keyPrefix=r,i}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(t){this.options.defaultNS=t}hasLoadedNamespace(t){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const r=n.lng||this.resolvedLanguage||this.languages[0],o=this.options?this.options.fallbackLng:!1,i=this.languages[this.languages.length-1];if(r.toLowerCase()==="cimode")return!0;const l=(a,s)=>{const u=this.services.backendConnector.state[`${a}|${s}`];return u===-1||u===2};if(n.precheck){const a=n.precheck(this,l);if(a!==void 0)return a}return!!(this.hasResourceBundle(r,t)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||l(r,t)&&(!o||l(i,t)))}loadNamespaces(t,n){const r=Xr();return this.options.ns?(typeof t=="string"&&(t=[t]),t.forEach(o=>{this.options.ns.indexOf(o)<0&&this.options.ns.push(o)}),this.loadResources(o=>{r.resolve(),n&&n(o)}),r):(n&&n(),Promise.resolve())}loadLanguages(t,n){const r=Xr();typeof t=="string"&&(t=[t]);const o=this.options.preload||[],i=t.filter(l=>o.indexOf(l)<0&&this.services.languageUtils.isSupportedCode(l));return i.length?(this.options.preload=o.concat(i),this.loadResources(l=>{r.resolve(),n&&n(l)}),r):(n&&n(),Promise.resolve())}dir(t){if(t||(t=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!t)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],r=this.services&&this.services.languageUtils||new yd(Sd());return n.indexOf(r.getLanguagePartFromCode(t))>-1||t.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Mo(t,n)}cloneInstance(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:vi;const r=t.forkResourceStore;r&&delete t.forkResourceStore;const o={...this.options,...t,isClone:!0},i=new Mo(o);return(t.debug!==void 0||t.prefix!==void 0)&&(i.logger=i.logger.clone(t)),["store","services","language"].forEach(a=>{i[a]=this[a]}),i.services={...this.services},i.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},r&&(i.store=new gd(this.store.data,o),i.services.resourceStore=i.store),i.translator=new il(i.services,o),i.translator.on("*",function(a){for(var s=arguments.length,u=new Array(s>1?s-1:0),d=1;d<s;d++)u[d-1]=arguments[d];i.emit(a,...u)}),i.init(o,n),i.translator.options=o,i.translator.backendConnector.services.utils={hasLoadedNamespace:i.hasLoadedNamespace.bind(i)},i}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const He=Mo.createInstance();He.createInstance=Mo.createInstance;He.createInstance;He.dir;He.init;He.loadResources;He.reloadResources;He.use;He.changeLanguage;He.getFixedT;He.t;He.exists;He.setDefaultNamespace;He.hasLoadedNamespace;He.loadNamespaces;He.loadLanguages;const Ky={"home-page":"Home",price:"Price",support:"Support"},Qy={"home-page":"Página inicial",price:"Preço",support:"Suporte"},Yy={en:{translation:Ky},pt:{translation:Qy}};He.use(pm).use(ky).init({resources:Yy,fallbackLng:"pt",keySeparator:!1,interpolation:{escapeValue:!1}});Qp(document.getElementById("outlet")).render(_.createElement(ny));window.Vaadin??={};window.Vaadin.routesConfig=fm;/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const zi=globalThis,mu=zi.ShadowRoot&&(zi.ShadyCSS===void 0||zi.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,hu=Symbol(),Ed=new WeakMap;let gu=class{constructor(t,n,r){if(this._$cssResult$=!0,r!==hu)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=n}get styleSheet(){let t=this.o;const n=this.t;if(mu&&t===void 0){const r=n!==void 0&&n.length===1;r&&(t=Ed.get(n)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),r&&Ed.set(n,t))}return t}toString(){return this.cssText}};const ho=e=>new gu(typeof e=="string"?e:e+"",void 0,hu),ye=(e,...t)=>{const n=e.length===1?e[0]:t.reduce((r,o,i)=>r+(l=>{if(l._$cssResult$===!0)return l.cssText;if(typeof l=="number")return l;throw Error("Value passed to 'css' function must be a 'css' function result: "+l+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(o)+e[i+1],e[0]);return new gu(n,e,hu)},vm=(e,t)=>{if(mu)e.adoptedStyleSheets=t.map(n=>n instanceof CSSStyleSheet?n:n.styleSheet);else for(const n of t){const r=document.createElement("style"),o=zi.litNonce;o!==void 0&&r.setAttribute("nonce",o),r.textContent=n.cssText,e.appendChild(r)}},Cd=mu?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let n="";for(const r of t.cssRules)n+=r.cssText;return ho(n)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:Gy,defineProperty:Jy,getOwnPropertyDescriptor:Xy,getOwnPropertyNames:Zy,getOwnPropertySymbols:qy,getPrototypeOf:e1}=Object,_l=globalThis,bd=_l.trustedTypes,t1=bd?bd.emptyScript:"",n1=_l.reactiveElementPolyfillSupport,go=(e,t)=>e,us={toAttribute(e,t){switch(t){case Boolean:e=e?t1:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},ym=(e,t)=>!Gy(e,t),Pd={attribute:!0,type:String,converter:us,reflect:!1,hasChanged:ym};Symbol.metadata??=Symbol("metadata"),_l.litPropertyMetadata??=new WeakMap;let Zn=class extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??=[]).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,n=Pd){if(n.state&&(n.attribute=!1),this._$Ei(),this.elementProperties.set(t,n),!n.noAccessor){const r=Symbol(),o=this.getPropertyDescriptor(t,r,n);o!==void 0&&Jy(this.prototype,t,o)}}static getPropertyDescriptor(t,n,r){const{get:o,set:i}=Xy(this.prototype,t)??{get(){return this[n]},set(l){this[n]=l}};return{get(){return o?.call(this)},set(l){const a=o?.call(this);i.call(this,l),this.requestUpdate(t,a,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??Pd}static _$Ei(){if(this.hasOwnProperty(go("elementProperties")))return;const t=e1(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(go("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(go("properties"))){const n=this.properties,r=[...Zy(n),...qy(n)];for(const o of r)this.createProperty(o,n[o])}const t=this[Symbol.metadata];if(t!==null){const n=litPropertyMetadata.get(t);if(n!==void 0)for(const[r,o]of n)this.elementProperties.set(r,o)}this._$Eh=new Map;for(const[n,r]of this.elementProperties){const o=this._$Eu(n,r);o!==void 0&&this._$Eh.set(o,n)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const n=[];if(Array.isArray(t)){const r=new Set(t.flat(1/0).reverse());for(const o of r)n.unshift(Cd(o))}else t!==void 0&&n.push(Cd(t));return n}static _$Eu(t,n){const r=n.attribute;return r===!1?void 0:typeof r=="string"?r:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(t=>t(this))}addController(t){(this._$EO??=new Set).add(t),this.renderRoot!==void 0&&this.isConnected&&t.hostConnected?.()}removeController(t){this._$EO?.delete(t)}_$E_(){const t=new Map,n=this.constructor.elementProperties;for(const r of n.keys())this.hasOwnProperty(r)&&(t.set(r,this[r]),delete this[r]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return vm(t,this.constructor.elementStyles),t}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(t=>t.hostConnected?.())}enableUpdating(t){}disconnectedCallback(){this._$EO?.forEach(t=>t.hostDisconnected?.())}attributeChangedCallback(t,n,r){this._$AK(t,r)}_$EC(t,n){const r=this.constructor.elementProperties.get(t),o=this.constructor._$Eu(t,r);if(o!==void 0&&r.reflect===!0){const i=(r.converter?.toAttribute!==void 0?r.converter:us).toAttribute(n,r.type);this._$Em=t,i==null?this.removeAttribute(o):this.setAttribute(o,i),this._$Em=null}}_$AK(t,n){const r=this.constructor,o=r._$Eh.get(t);if(o!==void 0&&this._$Em!==o){const i=r.getPropertyOptions(o),l=typeof i.converter=="function"?{fromAttribute:i.converter}:i.converter?.fromAttribute!==void 0?i.converter:us;this._$Em=o,this[o]=l.fromAttribute(n,i.type),this._$Em=null}}requestUpdate(t,n,r){if(t!==void 0){if(r??=this.constructor.getPropertyOptions(t),!(r.hasChanged??ym)(this[t],n))return;this.P(t,n,r)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,n,r){this._$AL.has(t)||this._$AL.set(t,n),r.reflect===!0&&this._$Em!==t&&(this._$Ej??=new Set).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(n){Promise.reject(n)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(const[o,i]of this._$Ep)this[o]=i;this._$Ep=void 0}const r=this.constructor.elementProperties;if(r.size>0)for(const[o,i]of r)i.wrapped!==!0||this._$AL.has(o)||this[o]===void 0||this.P(o,this[o],i)}let t=!1;const n=this._$AL;try{t=this.shouldUpdate(n),t?(this.willUpdate(n),this._$EO?.forEach(r=>r.hostUpdate?.()),this.update(n)):this._$EU()}catch(r){throw t=!1,this._$EU(),r}t&&this._$AE(n)}willUpdate(t){}_$AE(t){this._$EO?.forEach(n=>n.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&=this._$Ej.forEach(n=>this._$EC(n,this[n])),this._$EU()}updated(t){}firstUpdated(t){}};Zn.elementStyles=[],Zn.shadowRootOptions={mode:"open"},Zn[go("elementProperties")]=new Map,Zn[go("finalized")]=new Map,n1?.({ReactiveElement:Zn}),(_l.reactiveElementVersions??=[]).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const vu=globalThis,ll=vu.trustedTypes,_d=ll?ll.createPolicy("lit-html",{createHTML:e=>e}):void 0,xm="$lit$",rn=`lit$${Math.random().toFixed(9).slice(2)}$`,wm="?"+rn,r1=`<${wm}>`,jn=document,Ao=()=>jn.createComment(""),Fo=e=>e===null||typeof e!="object"&&typeof e!="function",Sm=Array.isArray,o1=e=>Sm(e)||typeof e?.[Symbol.iterator]=="function",sa=`[ 	
\f\r]`,Zr=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Ld=/-->/g,Rd=/>/g,En=RegExp(`>|${sa}(?:([^\\s"'>=/]+)(${sa}*=${sa}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),zd=/'/g,$d=/"/g,km=/^(?:script|style|textarea|title)$/i,i1=e=>(t,...n)=>({_$litType$:e,strings:t,values:n}),ix=i1(2),Lr=Symbol.for("lit-noChange"),Pe=Symbol.for("lit-nothing"),Td=new WeakMap,$n=jn.createTreeWalker(jn,129);function Em(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return _d!==void 0?_d.createHTML(t):t}const l1=(e,t)=>{const n=e.length-1,r=[];let o,i=t===2?"<svg>":"",l=Zr;for(let a=0;a<n;a++){const s=e[a];let u,d,f=-1,c=0;for(;c<s.length&&(l.lastIndex=c,d=l.exec(s),d!==null);)c=l.lastIndex,l===Zr?d[1]==="!--"?l=Ld:d[1]!==void 0?l=Rd:d[2]!==void 0?(km.test(d[2])&&(o=RegExp("</"+d[2],"g")),l=En):d[3]!==void 0&&(l=En):l===En?d[0]===">"?(l=o??Zr,f=-1):d[1]===void 0?f=-2:(f=l.lastIndex-d[2].length,u=d[1],l=d[3]===void 0?En:d[3]==='"'?$d:zd):l===$d||l===zd?l=En:l===Ld||l===Rd?l=Zr:(l=En,o=void 0);const x=l===En&&e[a+1].startsWith("/>")?" ":"";i+=l===Zr?s+r1:f>=0?(r.push(u),s.slice(0,f)+xm+s.slice(f)+rn+x):s+rn+(f===-2?a:x)}return[Em(e,i+(e[n]||"<?>")+(t===2?"</svg>":"")),r]};class Io{constructor({strings:t,_$litType$:n},r){let o;this.parts=[];let i=0,l=0;const a=t.length-1,s=this.parts,[u,d]=l1(t,n);if(this.el=Io.createElement(u,r),$n.currentNode=this.el.content,n===2){const f=this.el.content.firstChild;f.replaceWith(...f.childNodes)}for(;(o=$n.nextNode())!==null&&s.length<a;){if(o.nodeType===1){if(o.hasAttributes())for(const f of o.getAttributeNames())if(f.endsWith(xm)){const c=d[l++],x=o.getAttribute(f).split(rn),v=/([.?@])?(.*)/.exec(c);s.push({type:1,index:i,name:v[2],strings:x,ctor:v[1]==="."?s1:v[1]==="?"?u1:v[1]==="@"?c1:Ll}),o.removeAttribute(f)}else f.startsWith(rn)&&(s.push({type:6,index:i}),o.removeAttribute(f));if(km.test(o.tagName)){const f=o.textContent.split(rn),c=f.length-1;if(c>0){o.textContent=ll?ll.emptyScript:"";for(let x=0;x<c;x++)o.append(f[x],Ao()),$n.nextNode(),s.push({type:2,index:++i});o.append(f[c],Ao())}}}else if(o.nodeType===8)if(o.data===wm)s.push({type:2,index:i});else{let f=-1;for(;(f=o.data.indexOf(rn,f+1))!==-1;)s.push({type:7,index:i}),f+=rn.length-1}i++}}static createElement(t,n){const r=jn.createElement("template");return r.innerHTML=t,r}}function Rr(e,t,n=e,r){if(t===Lr)return t;let o=r!==void 0?n._$Co?.[r]:n._$Cl;const i=Fo(t)?void 0:t._$litDirective$;return o?.constructor!==i&&(o?._$AO?.(!1),i===void 0?o=void 0:(o=new i(e),o._$AT(e,n,r)),r!==void 0?(n._$Co??=[])[r]=o:n._$Cl=o),o!==void 0&&(t=Rr(e,o._$AS(e,t.values),o,r)),t}class a1{constructor(t,n){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=n}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:n},parts:r}=this._$AD,o=(t?.creationScope??jn).importNode(n,!0);$n.currentNode=o;let i=$n.nextNode(),l=0,a=0,s=r[0];for(;s!==void 0;){if(l===s.index){let u;s.type===2?u=new Yo(i,i.nextSibling,this,t):s.type===1?u=new s.ctor(i,s.name,s.strings,this,t):s.type===6&&(u=new d1(i,this,t)),this._$AV.push(u),s=r[++a]}l!==s?.index&&(i=$n.nextNode(),l++)}return $n.currentNode=jn,o}p(t){let n=0;for(const r of this._$AV)r!==void 0&&(r.strings!==void 0?(r._$AI(t,r,n),n+=r.strings.length-2):r._$AI(t[n])),n++}}class Yo{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(t,n,r,o){this.type=2,this._$AH=Pe,this._$AN=void 0,this._$AA=t,this._$AB=n,this._$AM=r,this.options=o,this._$Cv=o?.isConnected??!0}get parentNode(){let t=this._$AA.parentNode;const n=this._$AM;return n!==void 0&&t?.nodeType===11&&(t=n.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,n=this){t=Rr(this,t,n),Fo(t)?t===Pe||t==null||t===""?(this._$AH!==Pe&&this._$AR(),this._$AH=Pe):t!==this._$AH&&t!==Lr&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):o1(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==Pe&&Fo(this._$AH)?this._$AA.nextSibling.data=t:this.T(jn.createTextNode(t)),this._$AH=t}$(t){const{values:n,_$litType$:r}=t,o=typeof r=="number"?this._$AC(t):(r.el===void 0&&(r.el=Io.createElement(Em(r.h,r.h[0]),this.options)),r);if(this._$AH?._$AD===o)this._$AH.p(n);else{const i=new a1(o,this),l=i.u(this.options);i.p(n),this.T(l),this._$AH=i}}_$AC(t){let n=Td.get(t.strings);return n===void 0&&Td.set(t.strings,n=new Io(t)),n}k(t){Sm(this._$AH)||(this._$AH=[],this._$AR());const n=this._$AH;let r,o=0;for(const i of t)o===n.length?n.push(r=new Yo(this.S(Ao()),this.S(Ao()),this,this.options)):r=n[o],r._$AI(i),o++;o<n.length&&(this._$AR(r&&r._$AB.nextSibling,o),n.length=o)}_$AR(t=this._$AA.nextSibling,n){for(this._$AP?.(!1,!0,n);t&&t!==this._$AB;){const r=t.nextSibling;t.remove(),t=r}}setConnected(t){this._$AM===void 0&&(this._$Cv=t,this._$AP?.(t))}}class Ll{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,n,r,o,i){this.type=1,this._$AH=Pe,this._$AN=void 0,this.element=t,this.name=n,this._$AM=o,this.options=i,r.length>2||r[0]!==""||r[1]!==""?(this._$AH=Array(r.length-1).fill(new String),this.strings=r):this._$AH=Pe}_$AI(t,n=this,r,o){const i=this.strings;let l=!1;if(i===void 0)t=Rr(this,t,n,0),l=!Fo(t)||t!==this._$AH&&t!==Lr,l&&(this._$AH=t);else{const a=t;let s,u;for(t=i[0],s=0;s<i.length-1;s++)u=Rr(this,a[r+s],n,s),u===Lr&&(u=this._$AH[s]),l||=!Fo(u)||u!==this._$AH[s],u===Pe?t=Pe:t!==Pe&&(t+=(u??"")+i[s+1]),this._$AH[s]=u}l&&!o&&this.j(t)}j(t){t===Pe?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class s1 extends Ll{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===Pe?void 0:t}}class u1 extends Ll{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==Pe)}}class c1 extends Ll{constructor(t,n,r,o,i){super(t,n,r,o,i),this.type=5}_$AI(t,n=this){if((t=Rr(this,t,n,0)??Pe)===Lr)return;const r=this._$AH,o=t===Pe&&r!==Pe||t.capture!==r.capture||t.once!==r.once||t.passive!==r.passive,i=t!==Pe&&(r===Pe||o);o&&this.element.removeEventListener(this.name,this,r),i&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){typeof this._$AH=="function"?this._$AH.call(this.options?.host??this.element,t):this._$AH.handleEvent(t)}}class d1{constructor(t,n,r){this.element=t,this.type=6,this._$AN=void 0,this._$AM=n,this.options=r}get _$AU(){return this._$AM._$AU}_$AI(t){Rr(this,t)}}const f1=vu.litHtmlPolyfillSupport;f1?.(Io,Yo),(vu.litHtmlVersions??=[]).push("3.1.4");const p1=(e,t,n)=>{const r=n?.renderBefore??t;let o=r._$litPart$;if(o===void 0){const i=n?.renderBefore??null;r._$litPart$=o=new Yo(t.insertBefore(Ao(),i),i,void 0,n??{})}return o._$AI(e),o};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */class yr extends Zn{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){const t=super.createRenderRoot();return this.renderOptions.renderBefore??=t.firstChild,t}update(t){const n=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=p1(n,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return Lr}}yr._$litElement$=!0,yr.finalized=!0,globalThis.litElementHydrateSupport?.({LitElement:yr});const m1=globalThis.litElementPolyfillSupport;m1?.({LitElement:yr});(globalThis.litElementVersions??=[]).push("4.0.6");/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const h1=e=>class extends e{static get properties(){return{_theme:{type:String,readOnly:!0}}}static get observedAttributes(){return[...super.observedAttributes,"theme"]}attributeChangedCallback(n,r,o){super.attributeChangedCallback(n,r,o),n==="theme"&&this._set_theme(o)}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Cm=[],cs=new Set,yu=new Set;function bm(e){return e&&Object.prototype.hasOwnProperty.call(e,"__themes")}function g1(e){return bm(customElements.get(e))}function v1(e=[]){return[e].flat(1/0).filter(t=>t instanceof gu?!0:(console.warn("An item in styles is not of type CSSResult. Use `unsafeCSS` or `css`."),!1))}function Pm(e,t){return(e||"").split(" ").some(n=>new RegExp(`^${n.split("*").join(".*")}$`,"u").test(t))}function _m(e){return e.map(t=>t.cssText).join(`
`)}const al="vaadin-themable-mixin-style";function y1(e,t){const n=document.createElement("style");n.id=al,n.textContent=_m(e),t.content.appendChild(n)}function x1(e){if(!e.shadowRoot)return;const t=e.constructor;if(e instanceof yr)[...e.shadowRoot.querySelectorAll("style")].forEach(n=>n.remove()),vm(e.shadowRoot,t.elementStyles);else{const n=e.shadowRoot.getElementById(al),r=t.prototype._template;n.textContent=r.content.getElementById(al).textContent}}function w1(e){cs.forEach(t=>{const n=t.deref();n instanceof e?x1(n):n||cs.delete(t)})}function Lm(e){if(e.prototype instanceof yr)e.elementStyles=e.finalizeStyles(e.styles);else{const t=e.prototype._template;t.content.getElementById(al).textContent=_m(e.getStylesForThis())}yu.forEach(t=>{const n=customElements.get(t);n!==e&&n.prototype instanceof e&&Lm(n)})}function S1(e,t){const n=e.__themes;return!n||!t?!1:n.some(r=>r.styles.some(o=>t.some(i=>i.cssText===o.cssText)))}function Rl(e,t,n={}){t=v1(t),window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.registerStyles(e,t,n):Cm.push({themeFor:e,styles:t,include:n.include,moduleId:n.moduleId}),e&&yu.forEach(r=>{if(Pm(e,r)&&g1(r)){const o=customElements.get(r);S1(o,t)?console.warn(`Registering styles that already exist for ${r}`):(!window.Vaadin||!window.Vaadin.suppressPostFinalizeStylesWarning)&&console.warn(`The custom element definition for "${r}" was finalized before a style module was registered. Ideally, import component specific style modules before importing the corresponding custom element. This warning can be suppressed by setting "window.Vaadin.suppressPostFinalizeStylesWarning = true".`),Lm(o),w1(o)}})}function ds(){return window.Vaadin&&window.Vaadin.styleModules?window.Vaadin.styleModules.getAllThemes():Cm}function k1(e=""){let t=0;return e.startsWith("lumo-")||e.startsWith("material-")?t=1:e.startsWith("vaadin-")&&(t=2),t}function Rm(e){const t=[];return e.include&&[].concat(e.include).forEach(n=>{const r=ds().find(o=>o.moduleId===n);r?t.push(...Rm(r),...r.styles):console.warn(`Included moduleId ${n} not found in style registry`)},e.styles),t}function E1(e){const t=`${e}-default-theme`,n=ds().filter(r=>r.moduleId!==t&&Pm(r.themeFor,e)).map(r=>({...r,styles:[...Rm(r),...r.styles],includePriority:k1(r.moduleId)})).sort((r,o)=>o.includePriority-r.includePriority);return n.length>0?n:ds().filter(r=>r.moduleId===t)}const ax=e=>class extends h1(e){constructor(){super(),cs.add(new WeakRef(this))}static finalize(){if(super.finalize(),this.is&&yu.add(this.is),this.elementStyles)return;const n=this.prototype._template;!n||bm(this)||y1(this.getStylesForThis(),n)}static finalizeStyles(n){const r=this.getStylesForThis();return n?[...[n].flat(1/0),...r]:r}static getStylesForThis(){const n=e.__themes||[],r=Object.getPrototypeOf(this.prototype),o=(r?r.constructor.__themes:[])||[];this.__themes=[...n,...o,...E1(this.is)];const i=this.__themes.flatMap(l=>l.styles);return i.filter((l,a)=>a===i.lastIndexOf(l))}};/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const C1=(e,...t)=>{const n=document.createElement("style");n.id=e,n.textContent=t.map(r=>r.toString()).join(`
`).replace(":host","html"),document.head.insertAdjacentElement("afterbegin",n)},Sn=(e,...t)=>{C1(`lumo-${e}`,t)};/**
 * @license
 * Copyright (c) 2021 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */function b1(e){const t=customElements.get(e.is);if(!t)Object.defineProperty(e,"version",{get(){return"24.4.2"}}),customElements.define(e.is,e);else{const n=t.version;n&&e.version&&n===e.version?console.warn(`The component ${e.is} has been loaded twice`):console.error(`Tried to define ${e.is} version ${e.version} when version ${t.version} is already in use. Something will probably break.`)}}/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */class P1 extends HTMLElement{static get is(){return"vaadin-lumo-styles"}}b1(P1);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const _1=ye`
  :host {
    /* prettier-ignore */
    --lumo-font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    /* Font sizes */
    --lumo-font-size-xxs: 0.75rem;
    --lumo-font-size-xs: 0.8125rem;
    --lumo-font-size-s: 0.875rem;
    --lumo-font-size-m: 1rem;
    --lumo-font-size-l: 1.125rem;
    --lumo-font-size-xl: 1.375rem;
    --lumo-font-size-xxl: 1.75rem;
    --lumo-font-size-xxxl: 2.5rem;

    /* Line heights */
    --lumo-line-height-xs: 1.25;
    --lumo-line-height-s: 1.375;
    --lumo-line-height-m: 1.625;
  }
`,xu=ye`
  body,
  :host {
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-m);
    line-height: var(--lumo-line-height-m);
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  small,
  [theme~='font-size-s'] {
    font-size: var(--lumo-font-size-s);
    line-height: var(--lumo-line-height-s);
  }

  [theme~='font-size-xs'] {
    font-size: var(--lumo-font-size-xs);
    line-height: var(--lumo-line-height-xs);
  }

  :where(h1, h2, h3, h4, h5, h6) {
    font-weight: 600;
    line-height: var(--lumo-line-height-xs);
    margin-block: 0;
  }

  :where(h1) {
    font-size: var(--lumo-font-size-xxxl);
  }

  :where(h2) {
    font-size: var(--lumo-font-size-xxl);
  }

  :where(h3) {
    font-size: var(--lumo-font-size-xl);
  }

  :where(h4) {
    font-size: var(--lumo-font-size-l);
  }

  :where(h5) {
    font-size: var(--lumo-font-size-m);
  }

  :where(h6) {
    font-size: var(--lumo-font-size-xs);
    text-transform: uppercase;
    letter-spacing: 0.03em;
  }

  p,
  blockquote {
    margin-top: 0.5em;
    margin-bottom: 0.75em;
  }

  a {
    text-decoration: none;
  }

  a:where(:any-link):hover {
    text-decoration: underline;
  }

  hr {
    display: block;
    align-self: stretch;
    height: 1px;
    border: 0;
    padding: 0;
    margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);
    background-color: var(--lumo-contrast-10pct);
  }

  blockquote {
    border-left: 2px solid var(--lumo-contrast-30pct);
  }

  b,
  strong {
    font-weight: 600;
  }

  /* RTL specific styles */
  blockquote[dir='rtl'] {
    border-left: none;
    border-right: 2px solid var(--lumo-contrast-30pct);
  }
`;Rl("",xu,{moduleId:"lumo-typography"});Sn("typography-props",_1);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const L1=ye`
  ${ho(xu.cssText.replace(/,\s*:host/su,""))}
`;Sn("typography",L1);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const R1=ye`
  :host {
    /* Base (background) */
    --lumo-base-color: #fff;

    /* Tint */
    --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);
    --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);
    --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);
    --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);
    --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);
    --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);
    --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);
    --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);
    --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);
    --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);
    --lumo-tint: #fff;

    /* Shade */
    --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);
    --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);
    --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);
    --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);
    --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);
    --lumo-shade-50pct: hsla(214, 45%, 20%, 0.52);
    --lumo-shade-60pct: hsla(214, 43%, 19%, 0.6);
    --lumo-shade-70pct: hsla(214, 42%, 18%, 0.69);
    --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);
    --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);
    --lumo-shade: hsl(214, 35%, 15%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-shade-5pct);
    --lumo-contrast-10pct: var(--lumo-shade-10pct);
    --lumo-contrast-20pct: var(--lumo-shade-20pct);
    --lumo-contrast-30pct: var(--lumo-shade-30pct);
    --lumo-contrast-40pct: var(--lumo-shade-40pct);
    --lumo-contrast-50pct: var(--lumo-shade-50pct);
    --lumo-contrast-60pct: var(--lumo-shade-60pct);
    --lumo-contrast-70pct: var(--lumo-shade-70pct);
    --lumo-contrast-80pct: var(--lumo-shade-80pct);
    --lumo-contrast-90pct: var(--lumo-shade-90pct);
    --lumo-contrast: var(--lumo-shade);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 100%, 48%);
    --lumo-primary-color-50pct: hsla(214, 100%, 49%, 0.76);
    --lumo-primary-color-10pct: hsla(214, 100%, 60%, 0.13);
    --lumo-primary-text-color: hsl(214, 100%, 43%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 85%, 48%);
    --lumo-error-color-50pct: hsla(3, 85%, 49%, 0.5);
    --lumo-error-color-10pct: hsla(3, 85%, 49%, 0.1);
    --lumo-error-text-color: hsl(3, 89%, 42%);
    --lumo-error-contrast-color: #fff;

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 72%, 31%, 0.5);
    --lumo-success-color-10pct: hsla(145, 72%, 31%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 25%);
    --lumo-success-contrast-color: #fff;

    /* Warning */
    --lumo-warning-color: hsl(48, 100%, 50%);
    --lumo-warning-color-10pct: hsla(48, 100%, 50%, 0.25);
    --lumo-warning-text-color: hsl(32, 100%, 30%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  /* forced-colors mode adjustments */
  @media (forced-colors: active) {
    html {
      --lumo-disabled-text-color: GrayText;
    }
  }
`;Sn("color-props",R1);const wu=ye`
  [theme~='dark'] {
    /* Base (background) */
    --lumo-base-color: hsl(214, 35%, 21%);

    /* Tint */
    --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);
    --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);
    --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);
    --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);
    --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);
    --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);
    --lumo-tint-60pct: hsla(214, 82%, 90%, 0.58);
    --lumo-tint-70pct: hsla(214, 87%, 92%, 0.69);
    --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);
    --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);
    --lumo-tint: hsl(214, 100%, 98%);

    /* Shade */
    --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);
    --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);
    --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);
    --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);
    --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);
    --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);
    --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);
    --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);
    --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);
    --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);
    --lumo-shade: hsl(214, 33%, 13%);

    /* Contrast */
    --lumo-contrast-5pct: var(--lumo-tint-5pct);
    --lumo-contrast-10pct: var(--lumo-tint-10pct);
    --lumo-contrast-20pct: var(--lumo-tint-20pct);
    --lumo-contrast-30pct: var(--lumo-tint-30pct);
    --lumo-contrast-40pct: var(--lumo-tint-40pct);
    --lumo-contrast-50pct: var(--lumo-tint-50pct);
    --lumo-contrast-60pct: var(--lumo-tint-60pct);
    --lumo-contrast-70pct: var(--lumo-tint-70pct);
    --lumo-contrast-80pct: var(--lumo-tint-80pct);
    --lumo-contrast-90pct: var(--lumo-tint-90pct);
    --lumo-contrast: var(--lumo-tint);

    /* Text */
    --lumo-header-text-color: var(--lumo-contrast);
    --lumo-body-text-color: var(--lumo-contrast-90pct);
    --lumo-secondary-text-color: var(--lumo-contrast-70pct);
    --lumo-tertiary-text-color: var(--lumo-contrast-50pct);
    --lumo-disabled-text-color: var(--lumo-contrast-30pct);

    /* Primary */
    --lumo-primary-color: hsl(214, 90%, 48%);
    --lumo-primary-color-50pct: hsla(214, 90%, 70%, 0.69);
    --lumo-primary-color-10pct: hsla(214, 90%, 55%, 0.13);
    --lumo-primary-text-color: hsl(214, 90%, 77%);
    --lumo-primary-contrast-color: #fff;

    /* Error */
    --lumo-error-color: hsl(3, 79%, 49%);
    --lumo-error-color-50pct: hsla(3, 75%, 62%, 0.5);
    --lumo-error-color-10pct: hsla(3, 75%, 62%, 0.14);
    --lumo-error-text-color: hsl(3, 100%, 80%);

    /* Success */
    --lumo-success-color: hsl(145, 72%, 30%);
    --lumo-success-color-50pct: hsla(145, 92%, 51%, 0.5);
    --lumo-success-color-10pct: hsla(145, 92%, 51%, 0.1);
    --lumo-success-text-color: hsl(145, 85%, 46%);

    /* Warning */
    --lumo-warning-color: hsl(43, 100%, 48%);
    --lumo-warning-color-10pct: hsla(40, 100%, 50%, 0.2);
    --lumo-warning-text-color: hsl(45, 100%, 60%);
    --lumo-warning-contrast-color: var(--lumo-shade-90pct);
  }

  html {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: light;
  }

  [theme~='dark'] {
    color: var(--lumo-body-text-color);
    background-color: var(--lumo-base-color);
    color-scheme: dark;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--lumo-header-text-color);
  }

  a:where(:any-link) {
    color: var(--lumo-primary-text-color);
  }

  a:not(:any-link) {
    color: var(--lumo-disabled-text-color);
  }

  blockquote {
    color: var(--lumo-secondary-text-color);
  }

  code,
  pre {
    background-color: var(--lumo-contrast-10pct);
    border-radius: var(--lumo-border-radius-m);
  }
  pre code {
    background: transparent;
  }
`;Rl("",wu,{moduleId:"lumo-color"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Sn("color",wu);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const z1=ye`
  :host {
    /* Border radius */
    --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */
    --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */
    --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */

    /* Shadow */
    --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);
    --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);
    --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);
    --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);
    --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);

    /* Clickable element cursor */
    --lumo-clickable-cursor: default;
  }
`;ye`
  html {
    /* Button */
    --vaadin-button-background: var(--lumo-contrast-5pct);
    --vaadin-button-border: none;
    --vaadin-button-border-radius: var(--lumo-border-radius-m);
    --vaadin-button-font-size: var(--lumo-font-size-m);
    --vaadin-button-font-weight: 500;
    --vaadin-button-height: var(--lumo-size-m);
    --vaadin-button-margin: var(--lumo-space-xs) 0;
    --vaadin-button-min-width: calc(var(--vaadin-button-height) * 2);
    --vaadin-button-padding: 0 calc(var(--vaadin-button-height) / 3 + var(--lumo-border-radius-m) / 2);
    --vaadin-button-text-color: var(--lumo-primary-text-color);
    --vaadin-button-primary-background: var(--lumo-primary-color);
    --vaadin-button-primary-border: none;
    --vaadin-button-primary-font-weight: 600;
    --vaadin-button-primary-text-color: var(--lumo-primary-contrast-color);
    --vaadin-button-tertiary-background: transparent !important;
    --vaadin-button-tertiary-text-color: var(--lumo-primary-text-color);
    --vaadin-button-tertiary-font-weight: 500;
    --vaadin-button-tertiary-padding: 0 calc(var(--vaadin-button-height) / 6);
    /* Checkbox */
    --vaadin-checkbox-background: var(--lumo-contrast-20pct);
    --vaadin-checkbox-background-hover: var(--lumo-contrast-30pct);
    --vaadin-checkbox-border-radius: var(--lumo-border-radius-s);
    --vaadin-checkbox-checkmark-char: var(--lumo-icons-checkmark);
    --vaadin-checkbox-checkmark-char-indeterminate: '';
    --vaadin-checkbox-checkmark-color: var(--lumo-primary-contrast-color);
    --vaadin-checkbox-checkmark-size: calc(var(--vaadin-checkbox-size) + 2px);
    --vaadin-checkbox-label-color: var(--lumo-body-text-color);
    --vaadin-checkbox-label-font-size: var(--lumo-font-size-m);
    --vaadin-checkbox-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs) var(--lumo-space-xs);
    --vaadin-checkbox-size: calc(var(--lumo-size-m) / 2);
    /* Radio button */
    --vaadin-radio-button-background: var(--lumo-contrast-20pct);
    --vaadin-radio-button-background-hover: var(--lumo-contrast-30pct);
    --vaadin-radio-button-dot-color: var(--lumo-primary-contrast-color);
    --vaadin-radio-button-dot-size: 3px;
    --vaadin-radio-button-label-color: var(--lumo-body-text-color);
    --vaadin-radio-button-label-font-size: var(--lumo-font-size-m);
    --vaadin-radio-button-label-padding: var(--lumo-space-xs) var(--lumo-space-s) var(--lumo-space-xs)
      var(--lumo-space-xs);
    --vaadin-radio-button-size: calc(var(--lumo-size-m) / 2);
    --vaadin-selection-color: var(--lumo-primary-color);
    --vaadin-selection-color-text: var(--lumo-primary-text-color);
    --vaadin-input-field-border-radius: var(--lumo-border-radius-m);
    --vaadin-focus-ring-color: var(--lumo-primary-color-50pct);
    --vaadin-focus-ring-width: 2px;
    /* Label */
    --vaadin-input-field-label-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-focused-label-color: var(--lumo-primary-text-color);
    --vaadin-input-field-hovered-label-color: var(--lumo-body-text-color);
    --vaadin-input-field-label-font-size: var(--lumo-font-size-s);
    --vaadin-input-field-label-font-weight: 500;
    /* Helper */
    --vaadin-input-field-helper-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-helper-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-helper-font-weight: 400;
    --vaadin-input-field-helper-spacing: 0.4em;
    /* Error message */
    --vaadin-input-field-error-color: var(--lumo-error-text-color);
    --vaadin-input-field-error-font-size: var(--lumo-font-size-xs);
    --vaadin-input-field-error-font-weight: 400;
    /* Input field */
    --vaadin-input-field-background: var(--lumo-contrast-10pct);
    --vaadin-input-field-icon-color: var(--lumo-contrast-60pct);
    --vaadin-input-field-icon-size: var(--lumo-icon-size-m);
    --vaadin-input-field-invalid-background: var(--lumo-error-color-10pct);
    --vaadin-input-field-invalid-hover-highlight: var(--lumo-error-color-50pct);
    --vaadin-input-field-height: var(--lumo-size-m);
    --vaadin-input-field-hover-highlight: var(--lumo-contrast-50pct);
    --vaadin-input-field-placeholder-color: var(--lumo-secondary-text-color);
    --vaadin-input-field-readonly-border: 1px dashed var(--lumo-contrast-30pct);
    --vaadin-input-field-value-color: var(--lumo-body-text-color);
    --vaadin-input-field-value-font-size: var(--lumo-font-size-m);
    --vaadin-input-field-value-font-weight: 400;
  }
`;Sn("style-props",z1);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const Su=ye`
  [theme~='badge'] {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);
    color: var(--lumo-primary-text-color);
    background-color: var(--lumo-primary-color-10pct);
    border-radius: var(--lumo-border-radius-s);
    font-family: var(--lumo-font-family);
    font-size: var(--lumo-font-size-s);
    line-height: 1;
    font-weight: 500;
    text-transform: initial;
    letter-spacing: initial;
    min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);
    flex-shrink: 0;
  }

  /* Ensure proper vertical alignment */
  [theme~='badge']::before {
    display: inline-block;
    content: '\\2003';
    width: 0;
  }

  [theme~='badge'][theme~='small'] {
    font-size: var(--lumo-font-size-xxs);
    line-height: 1;
  }

  /* Colors */

  [theme~='badge'][theme~='success'] {
    color: var(--lumo-success-text-color);
    background-color: var(--lumo-success-color-10pct);
  }

  [theme~='badge'][theme~='error'] {
    color: var(--lumo-error-text-color);
    background-color: var(--lumo-error-color-10pct);
  }

  [theme~='badge'][theme~='warning'] {
    color: var(--lumo-warning-text-color);
    background-color: var(--lumo-warning-color-10pct);
  }

  [theme~='badge'][theme~='contrast'] {
    color: var(--lumo-contrast-80pct);
    background-color: var(--lumo-contrast-5pct);
  }

  /* Primary */

  [theme~='badge'][theme~='primary'] {
    color: var(--lumo-primary-contrast-color);
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='success'][theme~='primary'] {
    color: var(--lumo-success-contrast-color);
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error'][theme~='primary'] {
    color: var(--lumo-error-contrast-color);
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning'][theme~='primary'] {
    color: var(--lumo-warning-contrast-color);
    background-color: var(--lumo-warning-color);
  }

  [theme~='badge'][theme~='contrast'][theme~='primary'] {
    color: var(--lumo-base-color);
    background-color: var(--lumo-contrast);
  }

  /* Links */

  [theme~='badge'][href]:hover {
    text-decoration: none;
  }

  /* Icon */

  [theme~='badge'] > vaadin-icon {
    margin: -0.25em 0;
  }

  [theme~='badge'] > vaadin-icon:first-child {
    margin-left: -0.375em;
  }

  [theme~='badge'] > vaadin-icon:last-child {
    margin-right: -0.375em;
  }

  vaadin-icon[theme~='badge'][icon] {
    min-width: 0;
    padding: 0;
    font-size: 1rem;
    width: var(--lumo-icon-size-m);
    height: var(--lumo-icon-size-m);
  }

  vaadin-icon[theme~='badge'][icon][theme~='small'] {
    width: var(--lumo-icon-size-s);
    height: var(--lumo-icon-size-s);
  }

  /* Empty */

  [theme~='badge']:not([icon]):empty {
    min-width: 0;
    width: 1em;
    height: 1em;
    padding: 0;
    border-radius: 50%;
    background-color: var(--lumo-primary-color);
  }

  [theme~='badge'][theme~='small']:not([icon]):empty {
    width: 0.75em;
    height: 0.75em;
  }

  [theme~='badge'][theme~='contrast']:not([icon]):empty {
    background-color: var(--lumo-contrast);
  }

  [theme~='badge'][theme~='success']:not([icon]):empty {
    background-color: var(--lumo-success-color);
  }

  [theme~='badge'][theme~='error']:not([icon]):empty {
    background-color: var(--lumo-error-color);
  }

  [theme~='badge'][theme~='warning']:not([icon]):empty {
    background-color: var(--lumo-warning-color);
  }

  /* Pill */

  [theme~='badge'][theme~='pill'] {
    --lumo-border-radius-s: 1em;
  }

  /* RTL specific styles */

  [dir='rtl'][theme~='badge'] vaadin-icon:first-child {
    margin-right: -0.375em;
    margin-left: 0;
  }

  [dir='rtl'][theme~='badge'] vaadin-icon:last-child {
    margin-left: -0.375em;
    margin-right: 0;
  }
`;Rl("",Su,{moduleId:"lumo-badge"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Sn("badge",Su);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const $1=ye`
  /* === Screen readers === */
  .sr-only {
    border-width: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const T1=ye`
  /* === Background color === */
  .bg-base {
    background-color: var(--lumo-base-color);
  }

  .bg-transparent {
    background-color: transparent;
  }

  .bg-tint-5 {
    background-color: var(--lumo-tint-5pct);
  }
  .bg-tint-10 {
    background-color: var(--lumo-tint-10pct);
  }
  .bg-tint-20 {
    background-color: var(--lumo-tint-20pct);
  }
  .bg-tint-30 {
    background-color: var(--lumo-tint-30pct);
  }
  .bg-tint-40 {
    background-color: var(--lumo-tint-40pct);
  }
  .bg-tint-50 {
    background-color: var(--lumo-tint-50pct);
  }
  .bg-tint-60 {
    background-color: var(--lumo-tint-60pct);
  }
  .bg-tint-70 {
    background-color: var(--lumo-tint-70pct);
  }
  .bg-tint-80 {
    background-color: var(--lumo-tint-80pct);
  }
  .bg-tint-90 {
    background-color: var(--lumo-tint-90pct);
  }
  .bg-tint {
    background-color: var(--lumo-tint);
  }

  .bg-shade-5 {
    background-color: var(--lumo-shade-5pct);
  }
  .bg-shade-10 {
    background-color: var(--lumo-shade-10pct);
  }
  .bg-shade-20 {
    background-color: var(--lumo-shade-20pct);
  }
  .bg-shade-30 {
    background-color: var(--lumo-shade-30pct);
  }
  .bg-shade-40 {
    background-color: var(--lumo-shade-40pct);
  }
  .bg-shade-50 {
    background-color: var(--lumo-shade-50pct);
  }
  .bg-shade-60 {
    background-color: var(--lumo-shade-60pct);
  }
  .bg-shade-70 {
    background-color: var(--lumo-shade-70pct);
  }
  .bg-shade-80 {
    background-color: var(--lumo-shade-80pct);
  }
  .bg-shade-90 {
    background-color: var(--lumo-shade-90pct);
  }
  .bg-shade {
    background-color: var(--lumo-shade);
  }

  .bg-contrast-5 {
    background-color: var(--lumo-contrast-5pct);
  }
  .bg-contrast-10 {
    background-color: var(--lumo-contrast-10pct);
  }
  .bg-contrast-20 {
    background-color: var(--lumo-contrast-20pct);
  }
  .bg-contrast-30 {
    background-color: var(--lumo-contrast-30pct);
  }
  .bg-contrast-40 {
    background-color: var(--lumo-contrast-40pct);
  }
  .bg-contrast-50 {
    background-color: var(--lumo-contrast-50pct);
  }
  .bg-contrast-60 {
    background-color: var(--lumo-contrast-60pct);
  }
  .bg-contrast-70 {
    background-color: var(--lumo-contrast-70pct);
  }
  .bg-contrast-80 {
    background-color: var(--lumo-contrast-80pct);
  }
  .bg-contrast-90 {
    background-color: var(--lumo-contrast-90pct);
  }
  .bg-contrast {
    background-color: var(--lumo-contrast);
  }

  .bg-primary {
    background-color: var(--lumo-primary-color);
  }
  .bg-primary-50 {
    background-color: var(--lumo-primary-color-50pct);
  }
  .bg-primary-10 {
    background-color: var(--lumo-primary-color-10pct);
  }

  .bg-error {
    background-color: var(--lumo-error-color);
  }
  .bg-error-50 {
    background-color: var(--lumo-error-color-50pct);
  }
  .bg-error-10 {
    background-color: var(--lumo-error-color-10pct);
  }

  .bg-success {
    background-color: var(--lumo-success-color);
  }
  .bg-success-50 {
    background-color: var(--lumo-success-color-50pct);
  }
  .bg-success-10 {
    background-color: var(--lumo-success-color-10pct);
  }

  .bg-warning {
    background-color: var(--lumo-warning-color);
  }
  .bg-warning-10 {
    background-color: var(--lumo-warning-color-10pct);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const N1=ye`
  /* === Border === */
  .border-0 {
    border: none;
  }
  .border {
    border: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-b {
    border-bottom: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-e {
    border-inline-end: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-l {
    border-left: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-r {
    border-right: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-s {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-t {
    border-top: 1px var(--lumo-utility-border-style, solid) var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .border-dashed {
    --lumo-utility-border-style: dashed;
  }
  .border-dotted {
    --lumo-utility-border-style: dotted;
  }

  /* === Border color === */
  .border-contrast-5 {
    --lumo-utility-border-color: var(--lumo-contrast-5pct);
  }
  .border-contrast-10 {
    --lumo-utility-border-color: var(--lumo-contrast-10pct);
  }
  .border-contrast-20 {
    --lumo-utility-border-color: var(--lumo-contrast-20pct);
  }
  .border-contrast-30 {
    --lumo-utility-border-color: var(--lumo-contrast-30pct);
  }
  .border-contrast-40 {
    --lumo-utility-border-color: var(--lumo-contrast-40pct);
  }
  .border-contrast-50 {
    --lumo-utility-border-color: var(--lumo-contrast-50pct);
  }
  .border-contrast-60 {
    --lumo-utility-border-color: var(--lumo-contrast-60pct);
  }
  .border-contrast-70 {
    --lumo-utility-border-color: var(--lumo-contrast-70pct);
  }
  .border-contrast-80 {
    --lumo-utility-border-color: var(--lumo-contrast-80pct);
  }
  .border-contrast-90 {
    --lumo-utility-border-color: var(--lumo-contrast-90pct);
  }
  .border-contrast {
    --lumo-utility-border-color: var(--lumo-contrast);
  }

  .border-primary {
    --lumo-utility-border-color: var(--lumo-primary-color);
  }
  .border-primary-50 {
    --lumo-utility-border-color: var(--lumo-primary-color-50pct);
  }
  .border-primary-10 {
    --lumo-utility-border-color: var(--lumo-primary-color-10pct);
  }

  .border-error {
    --lumo-utility-border-color: var(--lumo-error-color);
  }
  .border-error-50 {
    --lumo-utility-border-color: var(--lumo-error-color-50pct);
  }
  .border-error-10 {
    --lumo-utility-border-color: var(--lumo-error-color-10pct);
  }

  .border-success {
    --lumo-utility-border-color: var(--lumo-success-color);
  }
  .border-success-50 {
    --lumo-utility-border-color: var(--lumo-success-color-50pct);
  }
  .border-success-10 {
    --lumo-utility-border-color: var(--lumo-success-color-10pct);
  }

  .border-warning {
    --lumo-utility-border-color: var(--lumo-warning-color);
  }
  .border-warning-10 {
    --lumo-utility-border-color: var(--lumo-warning-color-10pct);
  }
  .border-warning-strong {
    --lumo-utility-border-color: var(--lumo-warning-text-color);
  }

  /* === Border radius === */
  .rounded-none {
    border-radius: 0;
  }
  .rounded-s {
    border-radius: var(--lumo-border-radius-s);
  }
  .rounded-m {
    border-radius: var(--lumo-border-radius-m);
  }
  .rounded-l {
    border-radius: var(--lumo-border-radius-l);
  }
  .rounded-full {
    border-radius: 9999px;
  }

  /* === Divide === */
  .divide-x > * + * {
    border-inline-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
  .divide-y > * + * {
    border-block-start: 1px var(--lumo-utility-border-style, solid)
      var(--lumo-utility-border-color, var(--lumo-contrast-10pct));
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const O1=ye`
  /* === Backdrop filter === */
  .backdrop-blur-none {
    backdrop-filter: blur(0);
  }
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
  .backdrop-blur {
    backdrop-filter: blur(8px);
  }
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  .backdrop-blur-lg {
    backdrop-filter: blur(16px);
  }
  .backdrop-blur-xl {
    backdrop-filter: blur(24px);
  }
  .backdrop-blur-2xl {
    backdrop-filter: blur(40px);
  }
  .backdrop-blur-3xl {
    backdrop-filter: blur(64px);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const D1=ye`
  /* === Align content === */
  .content-center {
    align-content: center;
  }
  .content-end {
    align-content: flex-end;
  }
  .content-start {
    align-content: flex-start;
  }
  .content-around {
    align-content: space-around;
  }
  .content-between {
    align-content: space-between;
  }
  .content-evenly {
    align-content: space-evenly;
  }
  .content-stretch {
    align-content: stretch;
  }

  /* === Align items === */
  .items-baseline {
    align-items: baseline;
  }
  .items-center {
    align-items: center;
  }
  .items-end {
    align-items: flex-end;
  }
  .items-start {
    align-items: flex-start;
  }
  .items-stretch {
    align-items: stretch;
  }

  /* === Align self === */
  .self-auto {
    align-self: auto;
  }
  .self-baseline {
    align-self: baseline;
  }
  .self-center {
    align-self: center;
  }
  .self-end {
    align-self: flex-end;
  }
  .self-start {
    align-self: flex-start;
  }
  .self-stretch {
    align-self: stretch;
  }

  /* === Flex === */
  .flex-auto {
    flex: auto;
  }
  .flex-none {
    flex: none;
  }

  /* === Flex direction === */
  .flex-col {
    flex-direction: column;
  }
  .flex-col-reverse {
    flex-direction: column-reverse;
  }
  .flex-row {
    flex-direction: row;
  }
  .flex-row-reverse {
    flex-direction: row-reverse;
  }

  /* === Flex grow === */
  .flex-grow-0 {
    flex-grow: 0;
  }
  .flex-grow {
    flex-grow: 1;
  }

  /* === Flex shrink === */
  .flex-shrink-0 {
    flex-shrink: 0;
  }
  .flex-shrink {
    flex-shrink: 1;
  }

  /* === Flex wrap === */
  .flex-nowrap {
    flex-wrap: nowrap;
  }
  .flex-wrap {
    flex-wrap: wrap;
  }
  .flex-wrap-reverse {
    flex-wrap: wrap-reverse;
  }

  /* === Gap === */
  .gap-xs {
    gap: var(--lumo-space-xs);
  }
  .gap-s {
    gap: var(--lumo-space-s);
  }
  .gap-m {
    gap: var(--lumo-space-m);
  }
  .gap-l {
    gap: var(--lumo-space-l);
  }
  .gap-xl {
    gap: var(--lumo-space-xl);
  }

  /* === Gap (column) === */
  .gap-x-xs {
    column-gap: var(--lumo-space-xs);
  }
  .gap-x-s {
    column-gap: var(--lumo-space-s);
  }
  .gap-x-m {
    column-gap: var(--lumo-space-m);
  }
  .gap-x-l {
    column-gap: var(--lumo-space-l);
  }
  .gap-x-xl {
    column-gap: var(--lumo-space-xl);
  }

  /* === Gap (row) === */
  .gap-y-xs {
    row-gap: var(--lumo-space-xs);
  }
  .gap-y-s {
    row-gap: var(--lumo-space-s);
  }
  .gap-y-m {
    row-gap: var(--lumo-space-m);
  }
  .gap-y-l {
    row-gap: var(--lumo-space-l);
  }
  .gap-y-xl {
    row-gap: var(--lumo-space-xl);
  }

  /* === Grid auto flow === */
  .grid-flow-col {
    grid-auto-flow: column;
  }
  .grid-flow-row {
    grid-auto-flow: row;
  }

  /* === Grid columns === */
  .grid-cols-1 {
    grid-template-columns: repeat(1, minmax(0, 1fr));
  }
  .grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  .grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  .grid-cols-4 {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
  .grid-cols-5 {
    grid-template-columns: repeat(5, minmax(0, 1fr));
  }
  .grid-cols-6 {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
  .grid-cols-7 {
    grid-template-columns: repeat(7, minmax(0, 1fr));
  }
  .grid-cols-8 {
    grid-template-columns: repeat(8, minmax(0, 1fr));
  }
  .grid-cols-9 {
    grid-template-columns: repeat(9, minmax(0, 1fr));
  }
  .grid-cols-10 {
    grid-template-columns: repeat(10, minmax(0, 1fr));
  }
  .grid-cols-11 {
    grid-template-columns: repeat(11, minmax(0, 1fr));
  }
  .grid-cols-12 {
    grid-template-columns: repeat(12, minmax(0, 1fr));
  }

  /* === Grid rows === */
  .grid-rows-1 {
    grid-template-rows: repeat(1, minmax(0, 1fr));
  }
  .grid-rows-2 {
    grid-template-rows: repeat(2, minmax(0, 1fr));
  }
  .grid-rows-3 {
    grid-template-rows: repeat(3, minmax(0, 1fr));
  }
  .grid-rows-4 {
    grid-template-rows: repeat(4, minmax(0, 1fr));
  }
  .grid-rows-5 {
    grid-template-rows: repeat(5, minmax(0, 1fr));
  }
  .grid-rows-6 {
    grid-template-rows: repeat(6, minmax(0, 1fr));
  }

  /* === Justify content === */
  .justify-center {
    justify-content: center;
  }
  .justify-end {
    justify-content: flex-end;
  }
  .justify-start {
    justify-content: flex-start;
  }
  .justify-around {
    justify-content: space-around;
  }
  .justify-between {
    justify-content: space-between;
  }
  .justify-evenly {
    justify-content: space-evenly;
  }

  /* === Span (column) === */
  .col-span-1 {
    grid-column: span 1 / span 1;
  }
  .col-span-2 {
    grid-column: span 2 / span 2;
  }
  .col-span-3 {
    grid-column: span 3 / span 3;
  }
  .col-span-4 {
    grid-column: span 4 / span 4;
  }
  .col-span-5 {
    grid-column: span 5 / span 5;
  }
  .col-span-6 {
    grid-column: span 6 / span 6;
  }
  .col-span-7 {
    grid-column: span 7 / span 7;
  }
  .col-span-8 {
    grid-column: span 8 / span 8;
  }
  .col-span-9 {
    grid-column: span 9 / span 9;
  }
  .col-span-10 {
    grid-column: span 10 / span 10;
  }
  .col-span-11 {
    grid-column: span 11 / span 11;
  }
  .col-span-12 {
    grid-column: span 12 / span 12;
  }
  .col-span-full {
    grid-column: 1 / -1;
  }

  /* === Span (row) === */
  .row-span-1 {
    grid-row: span 1 / span 1;
  }
  .row-span-2 {
    grid-row: span 2 / span 2;
  }
  .row-span-3 {
    grid-row: span 3 / span 3;
  }
  .row-span-4 {
    grid-row: span 4 / span 4;
  }
  .row-span-5 {
    grid-row: span 5 / span 5;
  }
  .row-span-6 {
    grid-row: span 6 / span 6;
  }
  .row-span-full {
    grid-row: 1 / -1;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:flex-col {
      flex-direction: column;
    }
    .sm\\:flex-row {
      flex-direction: row;
    }
    .sm\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .sm\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .sm\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .sm\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .sm\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .sm\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .sm\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .sm\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .sm\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .sm\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .sm\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .sm\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }

  @media (min-width: 768px) {
    .md\\:flex-col {
      flex-direction: column;
    }
    .md\\:flex-row {
      flex-direction: row;
    }
    .md\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .md\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .md\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .md\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .md\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .md\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .md\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .md\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .md\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .md\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .md\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .md\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1024px) {
    .lg\\:flex-col {
      flex-direction: column;
    }
    .lg\\:flex-row {
      flex-direction: row;
    }
    .lg\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .lg\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .lg\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .lg\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .lg\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .lg\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .lg\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .lg\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .lg\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .lg\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .lg\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .lg\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1280px) {
    .xl\\:flex-col {
      flex-direction: column;
    }
    .xl\\:flex-row {
      flex-direction: row;
    }
    .xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:flex-col {
      flex-direction: column;
    }
    .\\32xl\\:flex-row {
      flex-direction: row;
    }
    .\\32xl\\:grid-cols-1 {
      grid-template-columns: repeat(1, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-2 {
      grid-template-columns: repeat(2, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-3 {
      grid-template-columns: repeat(3, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-4 {
      grid-template-columns: repeat(4, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-5 {
      grid-template-columns: repeat(5, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-6 {
      grid-template-columns: repeat(6, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-7 {
      grid-template-columns: repeat(7, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-8 {
      grid-template-columns: repeat(8, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-9 {
      grid-template-columns: repeat(9, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-10 {
      grid-template-columns: repeat(10, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-11 {
      grid-template-columns: repeat(11, minmax(0, 1fr));
    }
    .\\32xl\\:grid-cols-12 {
      grid-template-columns: repeat(12, minmax(0, 1fr));
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const M1=ye`
  /* === Aspect ratio === */
  .aspect-square {
    aspect-ratio: 1 / 1;
  }
  .aspect-video {
    aspect-ratio: 16 / 9;
  }

  /* === Box sizing === */
  .box-border {
    box-sizing: border-box;
  }
  .box-content {
    box-sizing: content-box;
  }

  /* === Display === */
  .block {
    display: block;
  }
  .flex {
    display: flex;
  }
  .grid {
    display: grid;
  }
  .hidden {
    display: none;
  }
  .inline {
    display: inline;
  }
  .inline-block {
    display: inline-block;
  }
  .inline-flex {
    display: inline-flex;
  }
  .inline-grid {
    display: inline-grid;
  }

  /* === Overflow === */
  .overflow-auto {
    overflow: auto;
  }
  .overflow-hidden {
    overflow: hidden;
  }
  .overflow-scroll {
    overflow: scroll;
  }

  /* === Position === */
  .absolute {
    position: absolute;
  }
  .fixed {
    position: fixed;
  }
  .static {
    position: static;
  }
  .sticky {
    position: sticky;
  }
  .relative {
    position: relative;
  }

  /* === Top, end, bottom, start === */
  .-bottom-xs {
    bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-bottom-s {
    bottom: calc(var(--lumo-space-s) / -1);
  }
  .-bottom-m {
    bottom: calc(var(--lumo-space-m) / -1);
  }
  .-bottom-l {
    bottom: calc(var(--lumo-space-l) / -1);
  }
  .-bottom-xl {
    bottom: calc(var(--lumo-space-xl) / -1);
  }
  .-bottom-full {
    bottom: -100%;
  }
  .bottom-0 {
    bottom: 0;
  }
  .bottom-xs {
    bottom: var(--lumo-space-xs);
  }
  .bottom-s {
    bottom: var(--lumo-space-s);
  }
  .bottom-m {
    bottom: var(--lumo-space-m);
  }
  .bottom-l {
    bottom: var(--lumo-space-l);
  }
  .bottom-xl {
    bottom: var(--lumo-space-xl);
  }
  .bottom-auto {
    bottom: auto;
  }
  .bottom-full {
    bottom: 100%;
  }

  .-end-xs {
    inset-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-end-s {
    inset-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-end-m {
    inset-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-end-l {
    inset-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-end-xl {
    inset-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .-end-full {
    inset-inline-end: -100%;
  }
  .end-0 {
    inset-inline-end: 0;
  }
  .end-xs {
    inset-inline-end: var(--lumo-space-xs);
  }
  .end-s {
    inset-inline-end: var(--lumo-space-s);
  }
  .end-m {
    inset-inline-end: var(--lumo-space-m);
  }
  .end-l {
    inset-inline-end: var(--lumo-space-l);
  }
  .end-xl {
    inset-inline-end: var(--lumo-space-xl);
  }
  .end-auto {
    inset-inline-end: auto;
  }
  .end-full {
    inset-inline-end: 100%;
  }

  .-start-xs {
    inset-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-start-s {
    inset-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-start-m {
    inset-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-start-l {
    inset-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-start-xl {
    inset-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .-start-full {
    inset-inline-start: -100%;
  }
  .start-0 {
    inset-inline-start: 0;
  }
  .start-xs {
    inset-inline-start: var(--lumo-space-xs);
  }
  .start-s {
    inset-inline-start: var(--lumo-space-s);
  }
  .start-m {
    inset-inline-start: var(--lumo-space-m);
  }
  .start-l {
    inset-inline-start: var(--lumo-space-l);
  }
  .start-xl {
    inset-inline-start: var(--lumo-space-xl);
  }
  .start-auto {
    inset-inline-start: auto;
  }
  .start-full {
    inset-inline-start: 100%;
  }

  .-top-xs {
    top: calc(var(--lumo-space-xs) / -1);
  }
  .-top-s {
    top: calc(var(--lumo-space-s) / -1);
  }
  .-top-m {
    top: calc(var(--lumo-space-m) / -1);
  }
  .-top-l {
    top: calc(var(--lumo-space-l) / -1);
  }
  .-top-xl {
    top: calc(var(--lumo-space-xl) / -1);
  }
  .-top-full {
    top: -100%;
  }
  .top-0 {
    top: 0;
  }
  .top-xs {
    top: var(--lumo-space-xs);
  }
  .top-s {
    top: var(--lumo-space-s);
  }
  .top-m {
    top: var(--lumo-space-m);
  }
  .top-l {
    top: var(--lumo-space-l);
  }
  .top-xl {
    top: var(--lumo-space-xl);
  }
  .top-auto {
    top: auto;
  }
  .top-full {
    top: 100%;
  }

  /* === Visibility === */
  .invisible {
    visibility: hidden;
  }
  .visible {
    visibility: visible;
  }

  /* === Z-index === */
  .z-10 {
    z-index: 10;
  }
  .z-20 {
    z-index: 20;
  }
  .z-30 {
    z-index: 30;
  }
  .z-40 {
    z-index: 40;
  }
  .z-50 {
    z-index: 50;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    /* Display */
    .sm\\:block {
      display: block;
    }
    .sm\\:flex {
      display: flex;
    }
    .sm\\:grid {
      display: grid;
    }
    .sm\\:hidden {
      display: none;
    }
    .sm\\:inline {
      display: inline;
    }
    .sm\\:inline-block {
      display: inline-block;
    }
    .sm\\:inline-flex {
      display: inline-flex;
    }
    .sm\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .sm\\:absolute {
      position: absolute;
    }
    .sm\\:fixed {
      position: fixed;
    }
    .sm\\:relative {
      position: relative;
    }
    .sm\\:static {
      position: static;
    }
    .sm\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 768px) {
    /* Display */
    .md\\:block {
      display: block;
    }
    .md\\:flex {
      display: flex;
    }
    .md\\:grid {
      display: grid;
    }
    .md\\:hidden {
      display: none;
    }
    .md\\:inline {
      display: inline;
    }
    .md\\:inline-block {
      display: inline-block;
    }
    .md\\:inline-flex {
      display: inline-flex;
    }
    .md\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .md\\:absolute {
      position: absolute;
    }
    .md\\:fixed {
      position: fixed;
    }
    .md\\:relative {
      position: relative;
    }
    .md\\:static {
      position: static;
    }
    .md\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1024px) {
    /* Display */
    .lg\\:block {
      display: block;
    }
    .lg\\:flex {
      display: flex;
    }
    .lg\\:grid {
      display: grid;
    }
    .lg\\:hidden {
      display: none;
    }
    .lg\\:inline {
      display: inline;
    }
    .lg\\:inline-block {
      display: inline-block;
    }
    .lg\\:inline-flex {
      display: inline-flex;
    }
    .lg\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .lg\\:absolute {
      position: absolute;
    }
    .lg\\:fixed {
      position: fixed;
    }
    .lg\\:relative {
      position: relative;
    }
    .lg\\:static {
      position: static;
    }
    .lg\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1280px) {
    /* Display */
    .xl\\:block {
      display: block;
    }
    .xl\\:flex {
      display: flex;
    }
    .xl\\:grid {
      display: grid;
    }
    .xl\\:hidden {
      display: none;
    }
    .xl\\:inline {
      display: inline;
    }
    .xl\\:inline-block {
      display: inline-block;
    }
    .xl\\:inline-flex {
      display: inline-flex;
    }
    .xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .xl\\:absolute {
      position: absolute;
    }
    .xl\\:fixed {
      position: fixed;
    }
    .xl\\:relative {
      position: relative;
    }
    .xl\\:static {
      position: static;
    }
    .xl\\:sticky {
      position: sticky;
    }
  }
  @media (min-width: 1536px) {
    /* Display */
    .\\32xl\\:block {
      display: block;
    }
    .\\32xl\\:flex {
      display: flex;
    }
    .\\32xl\\:grid {
      display: grid;
    }
    .\\32xl\\:hidden {
      display: none;
    }
    .\\32xl\\:inline {
      display: inline;
    }
    .\\32xl\\:inline-block {
      display: inline-block;
    }
    .\\32xl\\:inline-flex {
      display: inline-flex;
    }
    .\\32xl\\:inline-grid {
      display: inline-grid;
    }

    /* Position */
    .\\32xl\\:absolute {
      position: absolute;
    }
    .\\32xl\\:fixed {
      position: fixed;
    }
    .\\32xl\\:relative {
      position: relative;
    }
    .\\32xl\\:static {
      position: static;
    }
    .\\32xl\\:sticky {
      position: sticky;
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const A1=ye`
  /* === Box shadow === */
  .shadow-xs {
    box-shadow: var(--lumo-box-shadow-xs);
  }
  .shadow-s {
    box-shadow: var(--lumo-box-shadow-s);
  }
  .shadow-m {
    box-shadow: var(--lumo-box-shadow-m);
  }
  .shadow-l {
    box-shadow: var(--lumo-box-shadow-l);
  }
  .shadow-xl {
    box-shadow: var(--lumo-box-shadow-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const F1=ye`
  /* === Height === */
  .h-0 {
    height: 0;
  }
  .h-xs {
    height: var(--lumo-size-xs);
  }
  .h-s {
    height: var(--lumo-size-s);
  }
  .h-m {
    height: var(--lumo-size-m);
  }
  .h-l {
    height: var(--lumo-size-l);
  }
  .h-xl {
    height: var(--lumo-size-xl);
  }
  .h-auto {
    height: auto;
  }
  .h-full {
    height: 100%;
  }
  .h-screen {
    height: 100vh;
  }

  /* === Height (max) === */
  .max-h-full {
    max-height: 100%;
  }
  .max-h-screen {
    max-height: 100vh;
  }

  /* === Height (min) === */
  .min-h-0 {
    min-height: 0;
  }
  .min-h-full {
    min-height: 100%;
  }
  .min-h-screen {
    min-height: 100vh;
  }

  /* === Icon sizing === */
  .icon-s {
    height: var(--lumo-icon-size-s);
    width: var(--lumo-icon-size-s);
  }
  .icon-m {
    height: var(--lumo-icon-size-m);
    width: var(--lumo-icon-size-m);
  }
  .icon-l {
    height: var(--lumo-icon-size-l);
    width: var(--lumo-icon-size-l);
  }

  /* === Width === */
  .w-xs {
    width: var(--lumo-size-xs);
  }
  .w-s {
    width: var(--lumo-size-s);
  }
  .w-m {
    width: var(--lumo-size-m);
  }
  .w-l {
    width: var(--lumo-size-l);
  }
  .w-xl {
    width: var(--lumo-size-xl);
  }
  .w-auto {
    width: auto;
  }
  .w-full {
    width: 100%;
  }

  /* === Width (max) === */
  .max-w-full {
    max-width: 100%;
  }
  .max-w-screen-sm {
    max-width: 640px;
  }
  .max-w-screen-md {
    max-width: 768px;
  }
  .max-w-screen-lg {
    max-width: 1024px;
  }
  .max-w-screen-xl {
    max-width: 1280px;
  }
  .max-w-screen-2xl {
    max-width: 1536px;
  }

  /* === Width (min) === */
  .min-w-0 {
    min-width: 0;
  }
  .min-w-full {
    min-width: 100%;
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const I1=ye`
  /* === Margin === */
  .-m-xs {
    margin: calc(var(--lumo-space-xs) / -1);
  }
  .-m-s {
    margin: calc(var(--lumo-space-s) / -1);
  }
  .-m-m {
    margin: calc(var(--lumo-space-m) / -1);
  }
  .-m-l {
    margin: calc(var(--lumo-space-l) / -1);
  }
  .-m-xl {
    margin: calc(var(--lumo-space-xl) / -1);
  }
  .m-0 {
    margin: 0;
  }
  .m-xs {
    margin: var(--lumo-space-xs);
  }
  .m-s {
    margin: var(--lumo-space-s);
  }
  .m-m {
    margin: var(--lumo-space-m);
  }
  .m-l {
    margin: var(--lumo-space-l);
  }
  .m-xl {
    margin: var(--lumo-space-xl);
  }
  .m-auto {
    margin: auto;
  }

  /* === Margin (bottom) === */
  .-mb-xs {
    margin-bottom: calc(var(--lumo-space-xs) / -1);
  }
  .-mb-s {
    margin-bottom: calc(var(--lumo-space-s) / -1);
  }
  .-mb-m {
    margin-bottom: calc(var(--lumo-space-m) / -1);
  }
  .-mb-l {
    margin-bottom: calc(var(--lumo-space-l) / -1);
  }
  .-mb-xl {
    margin-bottom: calc(var(--lumo-space-xl) / -1);
  }
  .mb-0 {
    margin-bottom: 0;
  }
  .mb-xs {
    margin-bottom: var(--lumo-space-xs);
  }
  .mb-s {
    margin-bottom: var(--lumo-space-s);
  }
  .mb-m {
    margin-bottom: var(--lumo-space-m);
  }
  .mb-l {
    margin-bottom: var(--lumo-space-l);
  }
  .mb-xl {
    margin-bottom: var(--lumo-space-xl);
  }
  .mb-auto {
    margin-bottom: auto;
  }

  /* === Margin (end) === */
  .-me-xs {
    margin-inline-end: calc(var(--lumo-space-xs) / -1);
  }
  .-me-s {
    margin-inline-end: calc(var(--lumo-space-s) / -1);
  }
  .-me-m {
    margin-inline-end: calc(var(--lumo-space-m) / -1);
  }
  .-me-l {
    margin-inline-end: calc(var(--lumo-space-l) / -1);
  }
  .-me-xl {
    margin-inline-end: calc(var(--lumo-space-xl) / -1);
  }
  .me-0 {
    margin-inline-end: 0;
  }
  .me-xs {
    margin-inline-end: var(--lumo-space-xs);
  }
  .me-s {
    margin-inline-end: var(--lumo-space-s);
  }
  .me-m {
    margin-inline-end: var(--lumo-space-m);
  }
  .me-l {
    margin-inline-end: var(--lumo-space-l);
  }
  .me-xl {
    margin-inline-end: var(--lumo-space-xl);
  }
  .me-auto {
    margin-inline-end: auto;
  }

  /* === Margin (horizontal) === */
  .-mx-xs {
    margin-inline: calc(var(--lumo-space-xs) / -1);
  }
  .-mx-s {
    margin-inline: calc(var(--lumo-space-s) / -1);
  }
  .-mx-m {
    margin-inline: calc(var(--lumo-space-m) / -1);
  }
  .-mx-l {
    margin-inline: calc(var(--lumo-space-l) / -1);
  }
  .-mx-xl {
    margin-inline: calc(var(--lumo-space-xl) / -1);
  }
  .mx-0 {
    margin-inline: 0;
  }
  .mx-xs {
    margin-inline: var(--lumo-space-xs);
  }
  .mx-s {
    margin-inline: var(--lumo-space-s);
  }
  .mx-m {
    margin-inline: var(--lumo-space-m);
  }
  .mx-l {
    margin-inline: var(--lumo-space-l);
  }
  .mx-xl {
    margin-inline: var(--lumo-space-xl);
  }
  .mx-auto {
    margin-inline: auto;
  }

  /* === Margin (left) === */
  .-ml-xs {
    margin-left: calc(var(--lumo-space-xs) / -1);
  }
  .-ml-s {
    margin-left: calc(var(--lumo-space-s) / -1);
  }
  .-ml-m {
    margin-left: calc(var(--lumo-space-m) / -1);
  }
  .-ml-l {
    margin-left: calc(var(--lumo-space-l) / -1);
  }
  .-ml-xl {
    margin-left: calc(var(--lumo-space-xl) / -1);
  }
  .ml-0 {
    margin-left: 0;
  }
  .ml-xs {
    margin-left: var(--lumo-space-xs);
  }
  .ml-s {
    margin-left: var(--lumo-space-s);
  }
  .ml-m {
    margin-left: var(--lumo-space-m);
  }
  .ml-l {
    margin-left: var(--lumo-space-l);
  }
  .ml-xl {
    margin-left: var(--lumo-space-xl);
  }
  .ml-auto {
    margin-left: auto;
  }

  /* === Margin (right) === */
  .-mr-xs {
    margin-right: calc(var(--lumo-space-xs) / -1);
  }
  .-mr-s {
    margin-right: calc(var(--lumo-space-s) / -1);
  }
  .-mr-m {
    margin-right: calc(var(--lumo-space-m) / -1);
  }
  .-mr-l {
    margin-right: calc(var(--lumo-space-l) / -1);
  }
  .-mr-xl {
    margin-right: calc(var(--lumo-space-xl) / -1);
  }
  .mr-0 {
    margin-right: 0;
  }
  .mr-xs {
    margin-right: var(--lumo-space-xs);
  }
  .mr-s {
    margin-right: var(--lumo-space-s);
  }
  .mr-m {
    margin-right: var(--lumo-space-m);
  }
  .mr-l {
    margin-right: var(--lumo-space-l);
  }
  .mr-xl {
    margin-right: var(--lumo-space-xl);
  }
  .mr-auto {
    margin-right: auto;
  }

  /* === Margin (start) === */
  .-ms-xs {
    margin-inline-start: calc(var(--lumo-space-xs) / -1);
  }
  .-ms-s {
    margin-inline-start: calc(var(--lumo-space-s) / -1);
  }
  .-ms-m {
    margin-inline-start: calc(var(--lumo-space-m) / -1);
  }
  .-ms-l {
    margin-inline-start: calc(var(--lumo-space-l) / -1);
  }
  .-ms-xl {
    margin-inline-start: calc(var(--lumo-space-xl) / -1);
  }
  .ms-0 {
    margin-inline-start: 0;
  }
  .ms-xs {
    margin-inline-start: var(--lumo-space-xs);
  }
  .ms-s {
    margin-inline-start: var(--lumo-space-s);
  }
  .ms-m {
    margin-inline-start: var(--lumo-space-m);
  }
  .ms-l {
    margin-inline-start: var(--lumo-space-l);
  }
  .ms-xl {
    margin-inline-start: var(--lumo-space-xl);
  }
  .ms-auto {
    margin-inline-start: auto;
  }

  /* === Margin (top) === */
  .-mt-xs {
    margin-top: calc(var(--lumo-space-xs) / -1);
  }
  .-mt-s {
    margin-top: calc(var(--lumo-space-s) / -1);
  }
  .-mt-m {
    margin-top: calc(var(--lumo-space-m) / -1);
  }
  .-mt-l {
    margin-top: calc(var(--lumo-space-l) / -1);
  }
  .-mt-xl {
    margin-top: calc(var(--lumo-space-xl) / -1);
  }
  .mt-0 {
    margin-top: 0;
  }
  .mt-xs {
    margin-top: var(--lumo-space-xs);
  }
  .mt-s {
    margin-top: var(--lumo-space-s);
  }
  .mt-m {
    margin-top: var(--lumo-space-m);
  }
  .mt-l {
    margin-top: var(--lumo-space-l);
  }
  .mt-xl {
    margin-top: var(--lumo-space-xl);
  }
  .mt-auto {
    margin-top: auto;
  }

  /* === Margin (vertical) === */
  .-my-xs {
    margin-block: calc(var(--lumo-space-xs) / -1);
  }
  .-my-s {
    margin-block: calc(var(--lumo-space-s) / -1);
  }
  .-my-m {
    margin-block: calc(var(--lumo-space-m) / -1);
  }
  .-my-l {
    margin-block: calc(var(--lumo-space-l) / -1);
  }
  .-my-xl {
    margin-block: calc(var(--lumo-space-xl) / -1);
  }
  .my-0 {
    margin-block: 0;
  }
  .my-xs {
    margin-block: var(--lumo-space-xs);
  }
  .my-s {
    margin-block: var(--lumo-space-s);
  }
  .my-m {
    margin-block: var(--lumo-space-m);
  }
  .my-l {
    margin-block: var(--lumo-space-l);
  }
  .my-xl {
    margin-block: var(--lumo-space-xl);
  }
  .my-auto {
    margin-block: auto;
  }

  /* === Padding === */
  .p-0 {
    padding: 0;
  }
  .p-xs {
    padding: var(--lumo-space-xs);
  }
  .p-s {
    padding: var(--lumo-space-s);
  }
  .p-m {
    padding: var(--lumo-space-m);
  }
  .p-l {
    padding: var(--lumo-space-l);
  }
  .p-xl {
    padding: var(--lumo-space-xl);
  }

  /* === Padding (bottom) === */
  .pb-0 {
    padding-bottom: 0;
  }
  .pb-xs {
    padding-bottom: var(--lumo-space-xs);
  }
  .pb-s {
    padding-bottom: var(--lumo-space-s);
  }
  .pb-m {
    padding-bottom: var(--lumo-space-m);
  }
  .pb-l {
    padding-bottom: var(--lumo-space-l);
  }
  .pb-xl {
    padding-bottom: var(--lumo-space-xl);
  }

  /* === Padding (end) === */
  .pe-0 {
    padding-inline-end: 0;
  }
  .pe-xs {
    padding-inline-end: var(--lumo-space-xs);
  }
  .pe-s {
    padding-inline-end: var(--lumo-space-s);
  }
  .pe-m {
    padding-inline-end: var(--lumo-space-m);
  }
  .pe-l {
    padding-inline-end: var(--lumo-space-l);
  }
  .pe-xl {
    padding-inline-end: var(--lumo-space-xl);
  }

  /* === Padding (horizontal) === */
  .px-0 {
    padding-left: 0;
    padding-right: 0;
  }
  .px-xs {
    padding-left: var(--lumo-space-xs);
    padding-right: var(--lumo-space-xs);
  }
  .px-s {
    padding-left: var(--lumo-space-s);
    padding-right: var(--lumo-space-s);
  }
  .px-m {
    padding-left: var(--lumo-space-m);
    padding-right: var(--lumo-space-m);
  }
  .px-l {
    padding-left: var(--lumo-space-l);
    padding-right: var(--lumo-space-l);
  }
  .px-xl {
    padding-left: var(--lumo-space-xl);
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (left) === */
  .pl-0 {
    padding-left: 0;
  }
  .pl-xs {
    padding-left: var(--lumo-space-xs);
  }
  .pl-s {
    padding-left: var(--lumo-space-s);
  }
  .pl-m {
    padding-left: var(--lumo-space-m);
  }
  .pl-l {
    padding-left: var(--lumo-space-l);
  }
  .pl-xl {
    padding-left: var(--lumo-space-xl);
  }

  /* === Padding (right) === */
  .pr-0 {
    padding-right: 0;
  }
  .pr-xs {
    padding-right: var(--lumo-space-xs);
  }
  .pr-s {
    padding-right: var(--lumo-space-s);
  }
  .pr-m {
    padding-right: var(--lumo-space-m);
  }
  .pr-l {
    padding-right: var(--lumo-space-l);
  }
  .pr-xl {
    padding-right: var(--lumo-space-xl);
  }

  /* === Padding (start) === */
  .ps-0 {
    padding-inline-start: 0;
  }
  .ps-xs {
    padding-inline-start: var(--lumo-space-xs);
  }
  .ps-s {
    padding-inline-start: var(--lumo-space-s);
  }
  .ps-m {
    padding-inline-start: var(--lumo-space-m);
  }
  .ps-l {
    padding-inline-start: var(--lumo-space-l);
  }
  .ps-xl {
    padding-inline-start: var(--lumo-space-xl);
  }

  /* === Padding (top) === */
  .pt-0 {
    padding-top: 0;
  }
  .pt-xs {
    padding-top: var(--lumo-space-xs);
  }
  .pt-s {
    padding-top: var(--lumo-space-s);
  }
  .pt-m {
    padding-top: var(--lumo-space-m);
  }
  .pt-l {
    padding-top: var(--lumo-space-l);
  }
  .pt-xl {
    padding-top: var(--lumo-space-xl);
  }

  /* === Padding (vertical) === */
  .py-0 {
    padding-bottom: 0;
    padding-top: 0;
  }
  .py-xs {
    padding-bottom: var(--lumo-space-xs);
    padding-top: var(--lumo-space-xs);
  }
  .py-s {
    padding-bottom: var(--lumo-space-s);
    padding-top: var(--lumo-space-s);
  }
  .py-m {
    padding-bottom: var(--lumo-space-m);
    padding-top: var(--lumo-space-m);
  }
  .py-l {
    padding-bottom: var(--lumo-space-l);
    padding-top: var(--lumo-space-l);
  }
  .py-xl {
    padding-bottom: var(--lumo-space-xl);
    padding-top: var(--lumo-space-xl);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const j1=ye`
  .transition {
    transition: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow,
      transform, filter, backdrop-filter 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-all {
    transition: all 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-colors {
    transition: color, background-color, border-color, text-decoration-color, fill,
      stroke 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-none {
    transition: none;
  }
  .transition-opacity {
    transition: opacity 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-shadow {
    transition: box-shadow 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
  .transition-transform {
    transition: transform 150ms cubic-bezier(0.4, 0, 0.2, 1);
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const U1=ye`
  /* === Font size === */
  .text-2xs {
    font-size: var(--lumo-font-size-xxs);
  }
  .text-xs {
    font-size: var(--lumo-font-size-xs);
  }
  .text-s {
    font-size: var(--lumo-font-size-s);
  }
  .text-m {
    font-size: var(--lumo-font-size-m);
  }
  .text-l {
    font-size: var(--lumo-font-size-l);
  }
  .text-xl {
    font-size: var(--lumo-font-size-xl);
  }
  .text-2xl {
    font-size: var(--lumo-font-size-xxl);
  }
  .text-3xl {
    font-size: var(--lumo-font-size-xxxl);
  }

  /* === Font weight === */
  .font-thin {
    font-weight: 100;
  }
  .font-extralight {
    font-weight: 200;
  }
  .font-light {
    font-weight: 300;
  }
  .font-normal {
    font-weight: 400;
  }
  .font-medium {
    font-weight: 500;
  }
  .font-semibold {
    font-weight: 600;
  }
  .font-bold {
    font-weight: 700;
  }
  .font-extrabold {
    font-weight: 800;
  }
  .font-black {
    font-weight: 900;
  }

  /* === Line clamp === */
  [class*='line-clamp-'] {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
  }
  .line-clamp-1 {
    -webkit-line-clamp: 1;
  }
  .line-clamp-2 {
    -webkit-line-clamp: 2;
  }
  .line-clamp-3 {
    -webkit-line-clamp: 3;
  }
  .line-clamp-4 {
    -webkit-line-clamp: 4;
  }
  .line-clamp-5 {
    -webkit-line-clamp: 5;
  }
  .line-clamp-6 {
    -webkit-line-clamp: 6;
  }

  /* === Line height === */
  .leading-none {
    line-height: 1;
  }
  .leading-xs {
    line-height: var(--lumo-line-height-xs);
  }
  .leading-s {
    line-height: var(--lumo-line-height-s);
  }
  .leading-m {
    line-height: var(--lumo-line-height-m);
  }

  /* === List style type === */
  .list-none {
    list-style-type: none;
  }

  /* === Text alignment === */
  .text-left {
    text-align: left;
  }
  .text-center {
    text-align: center;
  }
  .text-right {
    text-align: right;
  }
  .text-justify {
    text-align: justify;
  }

  /* === Text color === */
  .text-header {
    color: var(--lumo-header-text-color);
  }
  .text-body {
    color: var(--lumo-body-text-color);
  }
  .text-secondary {
    color: var(--lumo-secondary-text-color);
  }
  .text-tertiary {
    color: var(--lumo-tertiary-text-color);
  }
  .text-disabled {
    color: var(--lumo-disabled-text-color);
  }
  .text-primary {
    color: var(--lumo-primary-text-color);
  }
  .text-primary-contrast {
    color: var(--lumo-primary-contrast-color);
  }
  .text-error {
    color: var(--lumo-error-text-color);
  }
  .text-error-contrast {
    color: var(--lumo-error-contrast-color);
  }
  .text-success {
    color: var(--lumo-success-text-color);
  }
  .text-success-contrast {
    color: var(--lumo-success-contrast-color);
  }
  .text-warning {
    color: var(--lumo-warning-text-color);
  }
  .text-warning-contrast {
    color: var(--lumo-warning-contrast-color);
  }

  /* == Text decoration === */
  .line-through {
    text-decoration-line: line-through;
  }
  .no-underline {
    text-decoration-line: none;
  }
  .underline {
    text-decoration-line: underline;
  }

  /* === Text overflow === */
  .overflow-clip {
    text-overflow: clip;
  }
  .overflow-ellipsis {
    text-overflow: ellipsis;
  }

  /* === Text transform === */
  .capitalize {
    text-transform: capitalize;
  }
  .lowercase {
    text-transform: lowercase;
  }
  .uppercase {
    text-transform: uppercase;
  }

  /* === Whitespace === */
  .whitespace-normal {
    white-space: normal;
  }
  .whitespace-break-spaces {
    white-space: normal;
  }
  .whitespace-nowrap {
    white-space: nowrap;
  }
  .whitespace-pre {
    white-space: pre;
  }
  .whitespace-pre-line {
    white-space: pre-line;
  }
  .whitespace-pre-wrap {
    white-space: pre-wrap;
  }

  /* === Responsive design === */
  @media (min-width: 640px) {
    .sm\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .sm\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .sm\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .sm\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .sm\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .sm\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .sm\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .sm\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 768px) {
    .md\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .md\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .md\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .md\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .md\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .md\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .md\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .md\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1024px) {
    .lg\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .lg\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .lg\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .lg\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .lg\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .lg\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .lg\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .lg\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1280px) {
    .xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
  @media (min-width: 1536px) {
    .\\32xl\\:text-2xs {
      font-size: var(--lumo-font-size-xxs);
    }
    .\\32xl\\:text-xs {
      font-size: var(--lumo-font-size-xs);
    }
    .\\32xl\\:text-s {
      font-size: var(--lumo-font-size-s);
    }
    .\\32xl\\:text-m {
      font-size: var(--lumo-font-size-m);
    }
    .\\32xl\\:text-l {
      font-size: var(--lumo-font-size-l);
    }
    .\\32xl\\:text-xl {
      font-size: var(--lumo-font-size-xl);
    }
    .\\32xl\\:text-2xl {
      font-size: var(--lumo-font-size-xxl);
    }
    .\\32xl\\:text-3xl {
      font-size: var(--lumo-font-size-xxxl);
    }
  }
`;/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const ku=ye`
${$1}
${T1}
${N1}
${O1}
${D1}
${M1}
${A1}
${F1}
${I1}
${j1}
${U1}
`;Rl("",ku,{moduleId:"lumo-utility"});/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */Sn("utility",ku);(function(){if(typeof document>"u"||"adoptedStyleSheets"in document)return;var e="ShadyCSS"in window&&!ShadyCSS.nativeShadow,t=document.implementation.createHTMLDocument(""),n=new WeakMap,r=typeof DOMException=="object"?Error:DOMException,o=Object.defineProperty,i=Array.prototype.forEach,l=/@import.+?;?$/gm;function a(R){var O=R.replace(l,"");return O!==R&&console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),O.trim()}function s(R){return"isConnected"in R?R.isConnected:document.contains(R)}function u(R){return R.filter(function(O,K){return R.indexOf(O)===K})}function d(R,O){return R.filter(function(K){return O.indexOf(K)===-1})}function f(R){R.parentNode.removeChild(R)}function c(R){return R.shadowRoot||n.get(R)}var x=["addRule","deleteRule","insertRule","removeRule"],v=CSSStyleSheet,w=v.prototype;w.replace=function(){return Promise.reject(new r("Can't call replace on non-constructed CSSStyleSheets."))},w.replaceSync=function(){throw new r("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")};function E(R){return typeof R=="object"?ee.isPrototypeOf(R)||w.isPrototypeOf(R):!1}function m(R){return typeof R=="object"?w.isPrototypeOf(R):!1}var p=new WeakMap,g=new WeakMap,S=new WeakMap,P=new WeakMap;function T(R,O){var K=document.createElement("style");return S.get(R).set(O,K),g.get(R).push(O),K}function h(R,O){return S.get(R).get(O)}function z(R,O){S.get(R).delete(O),g.set(R,g.get(R).filter(function(K){return K!==O}))}function I(R,O){requestAnimationFrame(function(){O.textContent=p.get(R).textContent,P.get(R).forEach(function(K){return O.sheet[K.method].apply(O.sheet,K.args)})})}function N(R){if(!p.has(R))throw new TypeError("Illegal invocation")}function V(){var R=this,O=document.createElement("style");t.body.appendChild(O),p.set(R,O),g.set(R,[]),S.set(R,new WeakMap),P.set(R,[])}var ee=V.prototype;ee.replace=function(O){try{return this.replaceSync(O),Promise.resolve(this)}catch(K){return Promise.reject(K)}},ee.replaceSync=function(O){if(N(this),typeof O=="string"){var K=this;p.get(K).textContent=a(O),P.set(K,[]),g.get(K).forEach(function(ze){ze.isConnected()&&I(K,h(K,ze))})}},o(ee,"cssRules",{configurable:!0,enumerable:!0,get:function(){return N(this),p.get(this).sheet.cssRules}}),o(ee,"media",{configurable:!0,enumerable:!0,get:function(){return N(this),p.get(this).sheet.media}}),x.forEach(function(R){ee[R]=function(){var O=this;N(O);var K=arguments;P.get(O).push({method:R,args:K}),g.get(O).forEach(function(re){if(re.isConnected()){var fe=h(O,re).sheet;fe[R].apply(fe,K)}});var ze=p.get(O).sheet;return ze[R].apply(ze,K)}}),o(V,Symbol.hasInstance,{configurable:!0,value:E});var ne={childList:!0,subtree:!0},oe=new WeakMap;function se(R){var O=oe.get(R);return O||(O=new Fe(R),oe.set(R,O)),O}function Ae(R){o(R.prototype,"adoptedStyleSheets",{configurable:!0,enumerable:!0,get:function(){return se(this).sheets},set:function(O){se(this).update(O)}})}function We(R,O){for(var K=document.createNodeIterator(R,NodeFilter.SHOW_ELEMENT,function(re){return c(re)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT},null,!1),ze=void 0;ze=K.nextNode();)O(c(ze))}var b=new WeakMap,F=new WeakMap,j=new WeakMap;function X(R,O){return O instanceof HTMLStyleElement&&F.get(R).some(function(K){return h(K,R)})}function q(R){var O=b.get(R);return O instanceof Document?O.body:O}function Ke(R){var O=document.createDocumentFragment(),K=F.get(R),ze=j.get(R),re=q(R);ze.disconnect(),K.forEach(function(fe){O.appendChild(h(fe,R)||T(fe,R))}),re.insertBefore(O,null),ze.observe(re,ne),K.forEach(function(fe){I(fe,h(fe,R))})}function Fe(R){var O=this;O.sheets=[],b.set(O,R),F.set(O,[]),j.set(O,new MutationObserver(function(K,ze){if(!document){ze.disconnect();return}K.forEach(function(re){e||i.call(re.addedNodes,function(fe){fe instanceof Element&&We(fe,function(Ot){se(Ot).connect()})}),i.call(re.removedNodes,function(fe){fe instanceof Element&&(X(O,fe)&&Ke(O),e||We(fe,function(Ot){se(Ot).disconnect()}))})})}))}if(Fe.prototype={isConnected:function(){var R=b.get(this);return R instanceof Document?R.readyState!=="loading":s(R.host)},connect:function(){var R=q(this);j.get(this).observe(R,ne),F.get(this).length>0&&Ke(this),We(R,function(O){se(O).connect()})},disconnect:function(){j.get(this).disconnect()},update:function(R){var O=this,K=b.get(O)===document?"Document":"ShadowRoot";if(!Array.isArray(R))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Iterator getter is not callable.");if(!R.every(E))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Failed to convert value to 'CSSStyleSheet'");if(R.some(m))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+K+": Can't adopt non-constructed stylesheets");O.sheets=R;var ze=F.get(O),re=u(R),fe=d(ze,re);fe.forEach(function(Ot){f(h(Ot,O)),z(Ot,O)}),F.set(O,re),O.isConnected()&&re.length>0&&Ke(O)}},window.CSSStyleSheet=V,Ae(Document),"ShadowRoot"in window){Ae(ShadowRoot);var Ie=Element.prototype,Le=Ie.attachShadow;Ie.attachShadow=function(O){var K=Le.call(this,O);return O.mode==="closed"&&n.set(this,K),K}}var Re=se(document);Re.isConnected()?Re.connect():document.addEventListener("DOMContentLoaded",Re.connect.bind(Re))})();const{toString:V1}=Object.prototype;function B1(e){return V1.call(e)==="[object RegExp]"}function H1(e,{preserve:t=!0,whitespace:n=!0,all:r}={}){if(r)throw new Error("The `all` option is no longer supported. Use the `preserve` option instead.");let o=t,i;typeof t=="function"?(o=!1,i=t):B1(t)&&(o=!1,i=d=>t.test(d));let l=!1,a="",s="",u="";for(let d=0;d<e.length;d++){if(a=e[d],e[d-1]!=="\\"&&(a==='"'||a==="'")&&(l===a?l=!1:l||(l=a)),!l&&a==="/"&&e[d+1]==="*"){const f=e[d+2]==="!";let c=d+2;for(;c<e.length;c++){if(e[c]==="*"&&e[c+1]==="/"){o&&f||i&&i(s)?u+=`/*${s}*/`:n||(e[c+2]===`
`?c++:e[c+2]+e[c+3]===`\r
`&&(c+=2)),s="";break}s+=e[c]}d=c+1;continue}u+=a}return u}const W1=CSSStyleSheet.toString().includes("document.createElement"),K1=(e,t)=>{const n=/(?:@media\s(.+?))?(?:\s{)?\@import\s*(?:url\(\s*['"]?(.+?)['"]?\s*\)|(["'])((?:\\.|[^\\])*?)\3)([^;]*);(?:})?/g;/\/\*(.|[\r\n])*?\*\//gm.exec(e)!=null&&(e=H1(e));for(var r,o=e;(r=n.exec(e))!==null;){o=o.replace(r[0],"");const i=document.createElement("link");i.rel="stylesheet",i.href=r[2]||r[4];const l=r[1]||r[5];l&&(i.media=l),t===document?document.head.appendChild(i):t.appendChild(i)}return o},Q1=(e,t,n)=>(n?t.adoptedStyleSheets=[e,...t.adoptedStyleSheets]:t.adoptedStyleSheets=[...t.adoptedStyleSheets,e],()=>{t.adoptedStyleSheets=t.adoptedStyleSheets.filter(r=>r!==e)}),Y1=(e,t,n)=>{const r=new CSSStyleSheet;return r.replaceSync(e),W1?Q1(r,t,n):(n?t.adoptedStyleSheets.splice(0,0,r):t.adoptedStyleSheets.push(r),()=>{t.adoptedStyleSheets.splice(t.adoptedStyleSheets.indexOf(r),1)})},G1=(e,t)=>{const n=document.createElement("style");n.type="text/css",n.textContent=e;let r;if(t){const i=Array.from(document.head.childNodes).filter(l=>l.nodeType===Node.COMMENT_NODE).find(l=>l.data.trim()===t);i&&(r=i)}return document.head.insertBefore(n,r),()=>{n.remove()}},Xn=(e,t,n,r)=>{if(n===document){const i=J1(e);if(window.Vaadin.theme.injectedGlobalCss.indexOf(i)!==-1)return;window.Vaadin.theme.injectedGlobalCss.push(i)}const o=K1(e,n);return n===document?G1(o,t):Y1(o,n,r)};window.Vaadin=window.Vaadin||{};window.Vaadin.theme=window.Vaadin.theme||{};window.Vaadin.theme.injectedGlobalCss=[];function Nd(e){let t,n,r=2166136261;for(t=0,n=e.length;t<n;t++)r^=e.charCodeAt(t),r+=(r<<1)+(r<<4)+(r<<7)+(r<<8)+(r<<24);return("0000000"+(r>>>0).toString(16)).substr(-8)}function J1(e){let t=Nd(e);return t+Nd(t+e)}document._vaadintheme_eiducamono_componentCss||(document._vaadintheme_eiducamono_componentCss=!0);/**
 * @license
 * Copyright (c) 2017 - 2024 Vaadin Ltd.
 * This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
 */const zm=ye`
  :host {
    /* Square */
    --lumo-space-xs: 0.25rem;
    --lumo-space-s: 0.5rem;
    --lumo-space-m: 1rem;
    --lumo-space-l: 1.5rem;
    --lumo-space-xl: 2.5rem;

    /* Wide */
    --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);
    --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);
    --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);
    --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);
    --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);

    /* Tall */
    --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);
    --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);
    --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);
    --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);
    --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);
  }
`;Sn("spacing-props",zm);const X1=ye`.bg-graph{background:url(${ho(""+new URL("graph-DjNi8PyK.png",import.meta.url).href)}) no-repeat -8.8rem -9rem}.bg-resource{background:url(${ho(""+new URL("school_learning_icon-BNEwg_G9.png",import.meta.url).href)}) no-repeat 8rem 6rem}.bg-graph-login{background:url(${ho(""+new URL("graph-login-Bth453KS.png",import.meta.url).href)}) no-repeat -8.8rem -9rem}`,Z1=e=>{const t=[];e!==document&&(t.push(Xn(xu.cssText,"",e,!0)),t.push(Xn(wu.cssText,"",e,!0)),t.push(Xn(zm.cssText,"",e,!0)),t.push(Xn(Su.cssText,"",e,!0)),t.push(Xn(ku.cssText,"",e,!0)),t.push(Xn(X1.toString(),"",e)))},q1=Z1;q1(document);export{ex as N,ax as T,nx as a,Rl as b,Dd as c,Sn as d,ih as e,Pe as f,tx as g,p1 as h,ye as i,ot as j,ix as k,_ as r,Lr as w};
