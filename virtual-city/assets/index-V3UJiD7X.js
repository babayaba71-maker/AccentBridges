(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _m(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xm={exports:{}},Pl={},ym={exports:{}},$e={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Fo=Symbol.for("react.element"),yv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Ev=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Rv=Symbol.for("react.memo"),Pv=Symbol.for("react.lazy"),oh=Symbol.iterator;function bv(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Em={};function Os(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}Os.prototype.isReactComponent={};Os.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Os.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wm(){}wm.prototype=Os.prototype;function Vf(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}var Wf=Vf.prototype=new wm;Wf.constructor=Vf;Mm(Wf,Os.prototype);Wf.isPureReactComponent=!0;var ah=Array.isArray,Tm=Object.prototype.hasOwnProperty,Xf={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Fo,type:t,key:s,ref:o,props:r,_owner:Xf.current}}function Lv(t,e){return{$$typeof:Fo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function jf(t){return typeof t=="object"&&t!==null&&t.$$typeof===Fo}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lh=/\/+/g;function tc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function Ua(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Fo:case yv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+tc(o,0):i,ah(r)?(n="",t!=null&&(n=t.replace(lh,"$&/")+"/"),Ua(r,e,n,"",function(c){return c})):r!=null&&(jf(r)&&(r=Lv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ah(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+tc(s,a);o+=Ua(s,e,n,l,r)}else if(l=bv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+tc(s,a++),o+=Ua(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function qo(t,e,n){if(t==null)return t;var i=[],r=0;return Ua(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var nn={current:null},Na={transition:null},Uv={ReactCurrentDispatcher:nn,ReactCurrentBatchConfig:Na,ReactCurrentOwner:Xf};function Rm(){throw Error("act(...) is not supported in production builds of React.")}$e.Children={map:qo,forEach:function(t,e,n){qo(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return qo(t,function(){e++}),e},toArray:function(t){return qo(t,function(e){return e})||[]},only:function(t){if(!jf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};$e.Component=Os;$e.Fragment=Sv;$e.Profiler=Ev;$e.PureComponent=Vf;$e.StrictMode=Mv;$e.Suspense=Cv;$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv;$e.act=Rm;$e.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Xf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!Am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Fo,type:t.type,key:r,ref:s,props:i,_owner:o}};$e.createContext=function(t){return t={$$typeof:Tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};$e.createElement=Cm;$e.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};$e.createRef=function(){return{current:null}};$e.forwardRef=function(t){return{$$typeof:Av,render:t}};$e.isValidElement=jf;$e.lazy=function(t){return{$$typeof:Pv,_payload:{_status:-1,_result:t},_init:Iv}};$e.memo=function(t,e){return{$$typeof:Rv,type:t,compare:e===void 0?null:e}};$e.startTransition=function(t){var e=Na.transition;Na.transition={};try{t()}finally{Na.transition=e}};$e.unstable_act=Rm;$e.useCallback=function(t,e){return nn.current.useCallback(t,e)};$e.useContext=function(t){return nn.current.useContext(t)};$e.useDebugValue=function(){};$e.useDeferredValue=function(t){return nn.current.useDeferredValue(t)};$e.useEffect=function(t,e){return nn.current.useEffect(t,e)};$e.useId=function(){return nn.current.useId()};$e.useImperativeHandle=function(t,e,n){return nn.current.useImperativeHandle(t,e,n)};$e.useInsertionEffect=function(t,e){return nn.current.useInsertionEffect(t,e)};$e.useLayoutEffect=function(t,e){return nn.current.useLayoutEffect(t,e)};$e.useMemo=function(t,e){return nn.current.useMemo(t,e)};$e.useReducer=function(t,e,n){return nn.current.useReducer(t,e,n)};$e.useRef=function(t){return nn.current.useRef(t)};$e.useState=function(t){return nn.current.useState(t)};$e.useSyncExternalStore=function(t,e,n){return nn.current.useSyncExternalStore(t,e,n)};$e.useTransition=function(){return nn.current.useTransition()};$e.version="18.3.1";ym.exports=$e;var vt=ym.exports;const Pm=_m(vt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=vt,Fv=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),kv=Object.prototype.hasOwnProperty,zv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bv={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)kv.call(e,i)&&!Bv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Fv,type:t,key:s,ref:o,props:r,_owner:zv.current}}Pl.Fragment=Ov;Pl.jsx=bm;Pl.jsxs=bm;xm.exports=Pl;var te=xm.exports,au={},Lm={exports:{}},Tn={},Dm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var J=L.length;L.push(q);e:for(;0<J;){var se=J-1>>>1,Ce=L[se];if(0<r(Ce,q))L[se]=q,L[J]=Ce,J=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],J=L.pop();if(J!==q){L[0]=J;e:for(var se=0,Ce=L.length,De=Ce>>>1;se<De;){var V=2*(se+1)-1,ne=L[V],he=V+1,me=L[he];if(0>r(ne,J))he<Ce&&0>r(me,ne)?(L[se]=me,L[he]=J,se=he):(L[se]=ne,L[V]=J,se=V);else if(he<Ce&&0>r(me,J))L[se]=me,L[he]=J,se=he;else break e}}return q}function r(L,q){var J=L.sortIndex-q.sortIndex;return J!==0?J:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,h=null,d=3,g=!1,m=!1,v=!1,p=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=L)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(L){if(v=!1,x(L),!m)if(n(l)!==null)m=!0,H(P);else{var q=n(c);q!==null&&Q(S,q.startTime-L)}}function P(L,q){m=!1,v&&(v=!1,u(R),R=-1),g=!0;var J=d;try{for(x(q),h=n(l);h!==null&&(!(h.expirationTime>q)||L&&!E());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Ce=se(h.expirationTime<=q);q=t.unstable_now(),typeof Ce=="function"?h.callback=Ce:h===n(l)&&i(l),x(q)}else i(l);h=n(l)}if(h!==null)var De=!0;else{var V=n(c);V!==null&&Q(S,V.startTime-q),De=!1}return De}finally{h=null,d=J,g=!1}}var C=!1,T=null,R=-1,j=5,y=-1;function E(){return!(t.unstable_now()-y<j)}function k(){if(T!==null){var L=t.unstable_now();y=L;var q=!0;try{q=T(!0,L)}finally{q?O():(C=!1,T=null)}}else C=!1}var O;if(typeof _=="function")O=function(){_(k)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,K=W.port2;W.port1.onmessage=k,O=function(){K.postMessage(null)}}else O=function(){p(k,0)};function H(L){T=L,C||(C=!0,O())}function Q(L,q){R=p(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){m||g||(m=!0,H(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var q=3;break;default:q=d}var J=d;d=q;try{return L()}finally{d=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=d;d=L;try{return q()}finally{d=J}},t.unstable_scheduleCallback=function(L,q,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,L){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=J+Ce,L={id:f++,callback:q,priorityLevel:L,startTime:J,expirationTime:Ce,sortIndex:-1},J>se?(L.sortIndex=J,e(c,L),n(l)===null&&L===n(c)&&(v?(u(R),R=-1):v=!0,Q(S,J-se))):(L.sortIndex=Ce,e(l,L),m||g||(m=!0,H(P))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var q=d;return function(){var J=d;d=q;try{return L.apply(this,arguments)}finally{d=J}}}})(Im);Dm.exports=Im;var Hv=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=vt,wn=Hv;function ie(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,_o={};function Or(t,e){Es(t,e),Es(t+"Capture",e)}function Es(t,e){for(_o[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),lu=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ch={},uh={};function Wv(t){return lu.call(uh,t)?!0:lu.call(ch,t)?!1:Vv.test(t)?uh[t]=!0:(ch[t]=!0,!1)}function Xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,i){if(e===null||typeof e>"u"||Xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function rn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Xt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Xt[t]=new rn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Xt[e]=new rn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Xt[t]=new rn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Xt[t]=new rn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Xt[t]=new rn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Xt[t]=new rn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Xt[t]=new rn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Xt[t]=new rn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Xt[t]=new rn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Yf=/[\-:]([a-z])/g;function $f(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Yf,$f);Xt[e]=new rn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Yf,$f);Xt[e]=new rn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Yf,$f);Xt[e]=new rn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Xt[t]=new rn(t,1,!1,t.toLowerCase(),null,!1,!1)});Xt.xlinkHref=new rn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Xt[t]=new rn(t,1,!1,t.toLowerCase(),null,!0,!0)});function qf(t,e,n,i){var r=Xt.hasOwnProperty(e)?Xt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,r,i)&&(n=null),i||r===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Pi=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ko=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),Kf=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),Zf=Symbol.for("react.forward_ref"),uu=Symbol.for("react.suspense"),fu=Symbol.for("react.suspense_list"),Qf=Symbol.for("react.memo"),ki=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),fh=Symbol.iterator;function Gs(t){return t===null||typeof t!="object"?null:(t=fh&&t[fh]||t["@@iterator"],typeof t=="function"?t:null)}var Et=Object.assign,nc;function io(t){if(nc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);nc=e&&e[1]||""}return`
`+nc+t}var ic=!1;function rc(t,e){if(!t||ic)return"";ic=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ic=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?io(t):""}function Yv(t){switch(t.tag){case 5:return io(t.type);case 16:return io("Lazy");case 13:return io("Suspense");case 19:return io("SuspenseList");case 0:case 2:case 15:return t=rc(t.type,!1),t;case 11:return t=rc(t.type.render,!1),t;case 1:return t=rc(t.type,!0),t;default:return""}}function du(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ns:return"Fragment";case ts:return"Portal";case cu:return"Profiler";case Kf:return"StrictMode";case uu:return"Suspense";case fu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case Zf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Qf:return e=t.displayName||null,e!==null?e:du(t.type)||"Memo";case ki:e=t._payload,t=t._init;try{return du(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return du(e);case 8:return e===Kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Zo(t){t._valueTracker||(t._valueTracker=qv(t))}function zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ja(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hu(t,e){var n=e.checked;return Et({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function dh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bm(t,e){e=e.checked,e!=null&&qf(t,"checked",e,!1)}function pu(t,e){Bm(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?mu(t,e.type,n):e.hasOwnProperty("defaultValue")&&mu(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function mu(t,e,n){(e!=="number"||Ja(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var ro=Array.isArray;function ps(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function gu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ie(91));return Et({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ie(92));if(ro(n)){if(1<n.length)throw Error(ie(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Hm(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function vu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Qo,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Qo=Qo||document.createElement("div"),Qo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Qo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function xo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var lo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(lo).forEach(function(t){Kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),lo[e]=lo[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||lo.hasOwnProperty(t)&&lo[t]?(""+e).trim():e+"px"}function Xm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Zv=Et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function _u(t,e){if(e){if(Zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ie(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ie(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ie(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ie(62))}}function xu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var yu=null;function Jf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Su=null,ms=null,gs=null;function gh(t){if(t=zo(t)){if(typeof Su!="function")throw Error(ie(280));var e=t.stateNode;e&&(e=Ul(e),Su(t.stateNode,t.type,e))}}function jm(t){ms?gs?gs.push(t):gs=[t]:ms=t}function Ym(){if(ms){var t=ms,e=gs;if(gs=ms=null,gh(t),e)for(t=0;t<e.length;t++)gh(e[t])}}function $m(t,e){return t(e)}function qm(){}var sc=!1;function Km(t,e,n){if(sc)return t(e,n);sc=!0;try{return $m(t,e,n)}finally{sc=!1,(ms!==null||gs!==null)&&(qm(),Ym())}}function yo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ul(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ie(231,e,typeof n));return n}var Mu=!1;if(wi)try{var Vs={};Object.defineProperty(Vs,"passive",{get:function(){Mu=!0}}),window.addEventListener("test",Vs,Vs),window.removeEventListener("test",Vs,Vs)}catch{Mu=!1}function Qv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var co=!1,el=null,tl=!1,Eu=null,Jv={onError:function(t){co=!0,el=t}};function e_(t,e,n,i,r,s,o,a,l){co=!1,el=null,Qv.apply(Jv,arguments)}function t_(t,e,n,i,r,s,o,a,l){if(e_.apply(this,arguments),co){if(co){var c=el;co=!1,el=null}else throw Error(ie(198));tl||(tl=!0,Eu=c)}}function kr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vh(t){if(kr(t)!==t)throw Error(ie(188))}function n_(t){var e=t.alternate;if(!e){if(e=kr(t),e===null)throw Error(ie(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vh(r),t;if(s===i)return vh(r),e;s=s.sibling}throw Error(ie(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ie(189))}}if(n.alternate!==i)throw Error(ie(190))}if(n.tag!==3)throw Error(ie(188));return n.stateNode.current===n?t:e}function Qm(t){return t=n_(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var eg=wn.unstable_scheduleCallback,_h=wn.unstable_cancelCallback,i_=wn.unstable_shouldYield,r_=wn.unstable_requestPaint,Pt=wn.unstable_now,s_=wn.unstable_getCurrentPriorityLevel,ed=wn.unstable_ImmediatePriority,tg=wn.unstable_UserBlockingPriority,nl=wn.unstable_NormalPriority,o_=wn.unstable_LowPriority,ng=wn.unstable_IdlePriority,bl=null,ri=null;function a_(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(bl,t,void 0,(t.current.flags&128)===128)}catch{}}var $n=Math.clz32?Math.clz32:u_,l_=Math.log,c_=Math.LN2;function u_(t){return t>>>=0,t===0?32:31-(l_(t)/c_|0)|0}var Jo=64,ea=4194304;function so(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function il(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=so(a):(s&=o,s!==0&&(i=so(s)))}else o=n&~r,o!==0?i=so(o):s!==0&&(i=so(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-$n(e),r=1<<n,i|=t[n],e&=~r;return i}function f_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-$n(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=f_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function wu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=Jo;return Jo<<=1,!(Jo&4194240)&&(Jo=64),t}function oc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Oo(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-$n(e),t[e]=n}function h_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-$n(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function td(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-$n(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var at=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,nd,og,ag,lg,Tu=!1,ta=[],Xi=null,ji=null,Yi=null,So=new Map,Mo=new Map,Bi=[],p_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":Yi=null;break;case"pointerover":case"pointerout":So.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Mo.delete(e.pointerId)}}function Ws(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=zo(e),e!==null&&nd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function m_(t,e,n,i,r){switch(e){case"focusin":return Xi=Ws(Xi,t,e,n,i,r),!0;case"dragenter":return ji=Ws(ji,t,e,n,i,r),!0;case"mouseover":return Yi=Ws(Yi,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return So.set(s,Ws(So.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Mo.set(s,Ws(Mo.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=Mr(t.target);if(e!==null){var n=kr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,lg(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Fa(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Au(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);yu=i,n.target.dispatchEvent(i),yu=null}else return e=zo(n),e!==null&&nd(e),t.blockedOn=n,!1;e.shift()}return!0}function yh(t,e,n){Fa(t)&&n.delete(e)}function g_(){Tu=!1,Xi!==null&&Fa(Xi)&&(Xi=null),ji!==null&&Fa(ji)&&(ji=null),Yi!==null&&Fa(Yi)&&(Yi=null),So.forEach(yh),Mo.forEach(yh)}function Xs(t,e){t.blockedOn===e&&(t.blockedOn=null,Tu||(Tu=!0,wn.unstable_scheduleCallback(wn.unstable_NormalPriority,g_)))}function Eo(t){function e(r){return Xs(r,t)}if(0<ta.length){Xs(ta[0],t);for(var n=1;n<ta.length;n++){var i=ta[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&Xs(Xi,t),ji!==null&&Xs(ji,t),Yi!==null&&Xs(Yi,t),So.forEach(e),Mo.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Bi.shift()}var vs=Pi.ReactCurrentBatchConfig,rl=!0;function v_(t,e,n,i){var r=at,s=vs.transition;vs.transition=null;try{at=1,id(t,e,n,i)}finally{at=r,vs.transition=s}}function __(t,e,n,i){var r=at,s=vs.transition;vs.transition=null;try{at=4,id(t,e,n,i)}finally{at=r,vs.transition=s}}function id(t,e,n,i){if(rl){var r=Au(t,e,n,i);if(r===null)gc(t,e,i,sl,n),xh(t,i);else if(m_(r,t,e,n,i))i.stopPropagation();else if(xh(t,i),e&4&&-1<p_.indexOf(t)){for(;r!==null;){var s=zo(r);if(s!==null&&sg(s),s=Au(t,e,n,i),s===null&&gc(t,e,i,sl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else gc(t,e,i,null,n)}}var sl=null;function Au(t,e,n,i){if(sl=null,t=Jf(i),t=Mr(t),t!==null)if(e=kr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return sl=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s_()){case ed:return 1;case tg:return 4;case nl:case o_:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Vi=null,rd=null,Oa=null;function fg(){if(Oa)return Oa;var t,e=rd,n=e.length,i,r="value"in Vi?Vi.value:Vi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Oa=r.slice(t,1<i?1-i:void 0)}function ka(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function na(){return!0}function Sh(){return!1}function An(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?na:Sh,this.isPropagationStopped=Sh,this}return Et(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=na)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=na)},persist:function(){},isPersistent:na}),e}var ks={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sd=An(ks),ko=Et({},ks,{view:0,detail:0}),x_=An(ko),ac,lc,js,Ll=Et({},ko,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:od,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==js&&(js&&t.type==="mousemove"?(ac=t.screenX-js.screenX,lc=t.screenY-js.screenY):lc=ac=0,js=t),ac)},movementY:function(t){return"movementY"in t?t.movementY:lc}}),Mh=An(Ll),y_=Et({},Ll,{dataTransfer:0}),S_=An(y_),M_=Et({},ko,{relatedTarget:0}),cc=An(M_),E_=Et({},ks,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=An(E_),T_=Et({},ks,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A_=An(T_),C_=Et({},ks,{data:0}),Eh=An(C_),R_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b_[t])?!!e[t]:!1}function od(){return L_}var D_=Et({},ko,{key:function(t){if(t.key){var e=R_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ka(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:od,charCode:function(t){return t.type==="keypress"?ka(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ka(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=An(D_),U_=Et({},Ll,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=An(U_),N_=Et({},ko,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:od}),F_=An(N_),O_=Et({},ks,{propertyName:0,elapsedTime:0,pseudoElement:0}),k_=An(O_),z_=Et({},Ll,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B_=An(z_),H_=[9,13,27,32],ad=wi&&"CompositionEvent"in window,uo=null;wi&&"documentMode"in document&&(uo=document.documentMode);var G_=wi&&"TextEvent"in window&&!uo,dg=wi&&(!ad||uo&&8<uo&&11>=uo),Th=" ",Ah=!1;function hg(t,e){switch(t){case"keyup":return H_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var is=!1;function V_(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(Ah=!0,Th);case"textInput":return t=e.data,t===Th&&Ah?null:t;default:return null}}function W_(t,e){if(is)return t==="compositionend"||!ad&&hg(t,e)?(t=fg(),Oa=rd=Vi=null,is=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dg&&e.locale!=="ko"?null:e.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X_[t.type]:e==="textarea"}function mg(t,e,n,i){jm(i),e=ol(e,"onChange"),0<e.length&&(n=new sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var fo=null,wo=null;function j_(t){Ag(t,0)}function Dl(t){var e=os(t);if(zm(e))return t}function Y_(t,e){if(t==="change")return e}var gg=!1;if(wi){var uc;if(wi){var fc="oninput"in document;if(!fc){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),fc=typeof Rh.oninput=="function"}uc=fc}else uc=!1;gg=uc&&(!document.documentMode||9<document.documentMode)}function Ph(){fo&&(fo.detachEvent("onpropertychange",vg),wo=fo=null)}function vg(t){if(t.propertyName==="value"&&Dl(wo)){var e=[];mg(e,wo,t,Jf(t)),Km(j_,e)}}function $_(t,e,n){t==="focusin"?(Ph(),fo=e,wo=n,fo.attachEvent("onpropertychange",vg)):t==="focusout"&&Ph()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Dl(wo)}function K_(t,e){if(t==="click")return Dl(e)}function Z_(t,e){if(t==="input"||t==="change")return Dl(e)}function Q_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Kn=typeof Object.is=="function"?Object.is:Q_;function To(t,e){if(Kn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!lu.call(e,r)||!Kn(t[r],e[r]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lh(t,e){var n=bh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=Ja();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ja(t.document)}return e}function ld(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J_(t){var e=xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(i!==null&&ld(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lh(n,s);var o=Lh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=wi&&"documentMode"in document&&11>=document.documentMode,rs=null,Cu=null,ho=null,Ru=!1;function Dh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ru||rs==null||rs!==Ja(i)||(i=rs,"selectionStart"in i&&ld(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ho&&To(ho,i)||(ho=i,i=ol(Cu,"onSelect"),0<i.length&&(e=new sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=rs)))}function ia(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:ia("Animation","AnimationEnd"),animationiteration:ia("Animation","AnimationIteration"),animationstart:ia("Animation","AnimationStart"),transitionend:ia("Transition","TransitionEnd")},dc={},yg={};wi&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function Il(t){if(dc[t])return dc[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return dc[t]=e[n];return t}var Sg=Il("animationend"),Mg=Il("animationiteration"),Eg=Il("animationstart"),wg=Il("transitionend"),Tg=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){Tg.set(t,e),Or(e,[t])}for(var hc=0;hc<Ih.length;hc++){var pc=Ih[hc],tx=pc.toLowerCase(),nx=pc[0].toUpperCase()+pc.slice(1);sr(tx,"on"+nx)}sr(Sg,"onAnimationEnd");sr(Mg,"onAnimationIteration");sr(Eg,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(wg,"onTransitionEnd");Es("onMouseEnter",["mouseout","mouseover"]);Es("onMouseLeave",["mouseout","mouseover"]);Es("onPointerEnter",["pointerout","pointerover"]);Es("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var oo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(oo));function Uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,t_(i,e,void 0,t),t.currentTarget=null}function Ag(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,a,c),s=l}}}if(tl)throw t=Eu,tl=!1,Eu=null,t}function ht(t,e){var n=e[Iu];n===void 0&&(n=e[Iu]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function mc(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var ra="_reactListening"+Math.random().toString(36).slice(2);function Ao(t){if(!t[ra]){t[ra]=!0,Um.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||mc(n,!1,t),mc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ra]||(e[ra]=!0,mc("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(ug(e)){case 1:var r=v_;break;case 4:r=__;break;default:r=id}n=r.bind(null,e,n,t),r=void 0,!Mu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function gc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Mr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Km(function(){var c=s,f=Jf(n),h=[];e:{var d=Tg.get(t);if(d!==void 0){var g=sd,m=t;switch(t){case"keypress":if(ka(n)===0)break e;case"keydown":case"keyup":g=I_;break;case"focusin":m="focus",g=cc;break;case"focusout":m="blur",g=cc;break;case"beforeblur":case"afterblur":g=cc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F_;break;case Sg:case Mg:case Eg:g=w_;break;case wg:g=k_;break;case"scroll":g=x_;break;case"wheel":g=B_;break;case"copy":case"cut":case"paste":g=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wh}var v=(e&4)!==0,p=!v&&t==="scroll",u=v?d!==null?d+"Capture":null:d;v=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=yo(_,u),S!=null&&v.push(Co(_,S,x)))),p)break;_=_.return}0<v.length&&(d=new g(d,m,null,n,f),h.push({event:d,listeners:v}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",d&&n!==yu&&(m=n.relatedTarget||n.fromElement)&&(Mr(m)||m[Ti]))break e;if((g||d)&&(d=f.window===f?f:(d=f.ownerDocument)?d.defaultView||d.parentWindow:window,g?(m=n.relatedTarget||n.toElement,g=c,m=m?Mr(m):null,m!==null&&(p=kr(m),m!==p||m.tag!==5&&m.tag!==6)&&(m=null)):(g=null,m=c),g!==m)){if(v=Mh,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=wh,S="onPointerLeave",u="onPointerEnter",_="pointer"),p=g==null?d:os(g),x=m==null?d:os(m),d=new v(S,_+"leave",g,n,f),d.target=p,d.relatedTarget=x,S=null,Mr(f)===c&&(v=new v(u,_+"enter",m,n,f),v.target=x,v.relatedTarget=p,S=v),p=S,g&&m)t:{for(v=g,u=m,_=0,x=v;x;x=Br(x))_++;for(x=0,S=u;S;S=Br(S))x++;for(;0<_-x;)v=Br(v),_--;for(;0<x-_;)u=Br(u),x--;for(;_--;){if(v===u||u!==null&&v===u.alternate)break t;v=Br(v),u=Br(u)}v=null}else v=null;g!==null&&Nh(h,d,g,v,!1),m!==null&&p!==null&&Nh(h,p,m,v,!0)}}e:{if(d=c?os(c):window,g=d.nodeName&&d.nodeName.toLowerCase(),g==="select"||g==="input"&&d.type==="file")var P=Y_;else if(Ch(d))if(gg)P=Z_;else{P=q_;var C=$_}else(g=d.nodeName)&&g.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(P=K_);if(P&&(P=P(t,c))){mg(h,P,n,f);break e}C&&C(t,d,c),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&mu(d,"number",d.value)}switch(C=c?os(c):window,t){case"focusin":(Ch(C)||C.contentEditable==="true")&&(rs=C,Cu=c,ho=null);break;case"focusout":ho=Cu=rs=null;break;case"mousedown":Ru=!0;break;case"contextmenu":case"mouseup":case"dragend":Ru=!1,Dh(h,n,f);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":Dh(h,n,f)}var T;if(ad)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else is?hg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(dg&&n.locale!=="ko"&&(is||R!=="onCompositionStart"?R==="onCompositionEnd"&&is&&(T=fg()):(Vi=f,rd="value"in Vi?Vi.value:Vi.textContent,is=!0)),C=ol(c,R),0<C.length&&(R=new Eh(R,t,null,n,f),h.push({event:R,listeners:C}),T?R.data=T:(T=pg(n),T!==null&&(R.data=T)))),(T=G_?V_(t,n):W_(t,n))&&(c=ol(c,"onBeforeInput"),0<c.length&&(f=new Eh("onBeforeInput","beforeinput",null,n,f),h.push({event:f,listeners:c}),f.data=T))}Ag(h,e)})}function Co(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ol(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=yo(t,n),s!=null&&i.unshift(Co(t,s,r)),s=yo(t,e),s!=null&&i.push(Co(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=yo(n,s),l!=null&&o.unshift(Co(n,l,a))):r||(l=yo(n,s),l!=null&&o.push(Co(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rx=/\r\n?/g,sx=/\u0000|\uFFFD/g;function Fh(t){return(typeof t=="string"?t:""+t).replace(rx,`
`).replace(sx,"")}function sa(t,e,n){if(e=Fh(e),Fh(t)!==e&&n)throw Error(ie(425))}function al(){}var Pu=null,bu=null;function Lu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(t){return Oh.resolve(null).then(t).catch(lx)}:Du;function lx(t){setTimeout(function(){throw t})}function vc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Eo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Eo(e)}function $i(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var zs=Math.random().toString(36).slice(2),ii="__reactFiber$"+zs,Ro="__reactProps$"+zs,Ti="__reactContainer$"+zs,Iu="__reactEvents$"+zs,cx="__reactListeners$"+zs,ux="__reactHandles$"+zs;function Mr(t){var e=t[ii];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ti]||n[ii]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kh(t);t!==null;){if(n=t[ii])return n;t=kh(t)}return e}t=n,n=t.parentNode}return null}function zo(t){return t=t[ii]||t[Ti],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function os(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ie(33))}function Ul(t){return t[Ro]||null}var Uu=[],as=-1;function or(t){return{current:t}}function mt(t){0>as||(t.current=Uu[as],Uu[as]=null,as--)}function ft(t,e){as++,Uu[as]=t.current,t.current=e}var nr={},Zt=or(nr),fn=or(!1),br=nr;function ws(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function dn(t){return t=t.childContextTypes,t!=null}function ll(){mt(fn),mt(Zt)}function zh(t,e,n){if(Zt.current!==nr)throw Error(ie(168));ft(Zt,e),ft(fn,n)}function Rg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ie(108,$v(t)||"Unknown",r));return Et({},n,i)}function cl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,br=Zt.current,ft(Zt,t),ft(fn,fn.current),!0}function Bh(t,e,n){var i=t.stateNode;if(!i)throw Error(ie(169));n?(t=Rg(t,e,br),i.__reactInternalMemoizedMergedChildContext=t,mt(fn),mt(Zt),ft(Zt,t)):mt(fn),ft(fn,n)}var vi=null,Nl=!1,_c=!1;function Pg(t){vi===null?vi=[t]:vi.push(t)}function fx(t){Nl=!0,Pg(t)}function ar(){if(!_c&&vi!==null){_c=!0;var t=0,e=at;try{var n=vi;for(at=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}vi=null,Nl=!1}catch(r){throw vi!==null&&(vi=vi.slice(t+1)),eg(ed,ar),r}finally{at=e,_c=!1}}return null}var ls=[],cs=0,ul=null,fl=0,Pn=[],bn=0,Lr=null,xi=1,yi="";function gr(t,e){ls[cs++]=fl,ls[cs++]=ul,ul=t,fl=e}function bg(t,e,n){Pn[bn++]=xi,Pn[bn++]=yi,Pn[bn++]=Lr,Lr=t;var i=xi;t=yi;var r=32-$n(i)-1;i&=~(1<<r),n+=1;var s=32-$n(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-$n(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function cd(t){t.return!==null&&(gr(t,1),bg(t,1,0))}function ud(t){for(;t===ul;)ul=ls[--cs],ls[cs]=null,fl=ls[--cs],ls[cs]=null;for(;t===Lr;)Lr=Pn[--bn],Pn[bn]=null,yi=Pn[--bn],Pn[bn]=null,xi=Pn[--bn],Pn[bn]=null}var En=null,Mn=null,gt=!1,Vn=null;function Lg(t,e){var n=Ln(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,En=t,Mn=$i(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,En=t,Mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Lr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Ln(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,En=t,Mn=null,!0):!1;default:return!1}}function Nu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fu(t){if(gt){var e=Mn;if(e){var n=e;if(!Hh(t,e)){if(Nu(t))throw Error(ie(418));e=$i(n.nextSibling);var i=En;e&&Hh(t,e)?Lg(i,n):(t.flags=t.flags&-4097|2,gt=!1,En=t)}}else{if(Nu(t))throw Error(ie(418));t.flags=t.flags&-4097|2,gt=!1,En=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;En=t}function oa(t){if(t!==En)return!1;if(!gt)return Gh(t),gt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Lu(t.type,t.memoizedProps)),e&&(e=Mn)){if(Nu(t))throw Dg(),Error(ie(418));for(;e;)Lg(t,e),e=$i(e.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ie(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Mn=$i(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Mn=null}}else Mn=En?$i(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=Mn;t;)t=$i(t.nextSibling)}function Ts(){Mn=En=null,gt=!1}function fd(t){Vn===null?Vn=[t]:Vn.push(t)}var dx=Pi.ReactCurrentBatchConfig;function Ys(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ie(309));var i=n.stateNode}if(!i)throw Error(ie(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ie(284));if(!n._owner)throw Error(ie(290,t))}return t}function aa(t,e){throw t=Object.prototype.toString.call(e),Error(ie(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vh(t){var e=t._init;return e(t._payload)}function Ig(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Qi(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,S){return _===null||_.tag!==6?(_=Tc(x,u.mode,S),_.return=u,_):(_=r(_,x),_.return=u,_)}function l(u,_,x,S){var P=x.type;return P===ns?f(u,_,x.props.children,S,x.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ki&&Vh(P)===_.type)?(S=r(_,x.props),S.ref=Ys(u,_,x),S.return=u,S):(S=Xa(x.type,x.key,x.props,null,u.mode,S),S.ref=Ys(u,_,x),S.return=u,S)}function c(u,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Ac(x,u.mode,S),_.return=u,_):(_=r(_,x.children||[]),_.return=u,_)}function f(u,_,x,S,P){return _===null||_.tag!==7?(_=Pr(x,u.mode,S,P),_.return=u,_):(_=r(_,x),_.return=u,_)}function h(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Tc(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Ko:return x=Xa(_.type,_.key,_.props,null,u.mode,x),x.ref=Ys(u,null,_),x.return=u,x;case ts:return _=Ac(_,u.mode,x),_.return=u,_;case ki:var S=_._init;return h(u,S(_._payload),x)}if(ro(_)||Gs(_))return _=Pr(_,u.mode,x,null),_.return=u,_;aa(u,_)}return null}function d(u,_,x,S){var P=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(u,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Ko:return x.key===P?l(u,_,x,S):null;case ts:return x.key===P?c(u,_,x,S):null;case ki:return P=x._init,d(u,_,P(x._payload),S)}if(ro(x)||Gs(x))return P!==null?null:f(u,_,x,S,null);aa(u,x)}return null}function g(u,_,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(_,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ko:return u=u.get(S.key===null?x:S.key)||null,l(_,u,S,P);case ts:return u=u.get(S.key===null?x:S.key)||null,c(_,u,S,P);case ki:var C=S._init;return g(u,_,x,C(S._payload),P)}if(ro(S)||Gs(S))return u=u.get(x)||null,f(_,u,S,P,null);aa(_,S)}return null}function m(u,_,x,S){for(var P=null,C=null,T=_,R=_=0,j=null;T!==null&&R<x.length;R++){T.index>R?(j=T,T=null):j=T.sibling;var y=d(u,T,x[R],S);if(y===null){T===null&&(T=j);break}t&&T&&y.alternate===null&&e(u,T),_=s(y,_,R),C===null?P=y:C.sibling=y,C=y,T=j}if(R===x.length)return n(u,T),gt&&gr(u,R),P;if(T===null){for(;R<x.length;R++)T=h(u,x[R],S),T!==null&&(_=s(T,_,R),C===null?P=T:C.sibling=T,C=T);return gt&&gr(u,R),P}for(T=i(u,T);R<x.length;R++)j=g(T,u,R,x[R],S),j!==null&&(t&&j.alternate!==null&&T.delete(j.key===null?R:j.key),_=s(j,_,R),C===null?P=j:C.sibling=j,C=j);return t&&T.forEach(function(E){return e(u,E)}),gt&&gr(u,R),P}function v(u,_,x,S){var P=Gs(x);if(typeof P!="function")throw Error(ie(150));if(x=P.call(x),x==null)throw Error(ie(151));for(var C=P=null,T=_,R=_=0,j=null,y=x.next();T!==null&&!y.done;R++,y=x.next()){T.index>R?(j=T,T=null):j=T.sibling;var E=d(u,T,y.value,S);if(E===null){T===null&&(T=j);break}t&&T&&E.alternate===null&&e(u,T),_=s(E,_,R),C===null?P=E:C.sibling=E,C=E,T=j}if(y.done)return n(u,T),gt&&gr(u,R),P;if(T===null){for(;!y.done;R++,y=x.next())y=h(u,y.value,S),y!==null&&(_=s(y,_,R),C===null?P=y:C.sibling=y,C=y);return gt&&gr(u,R),P}for(T=i(u,T);!y.done;R++,y=x.next())y=g(T,u,R,y.value,S),y!==null&&(t&&y.alternate!==null&&T.delete(y.key===null?R:y.key),_=s(y,_,R),C===null?P=y:C.sibling=y,C=y);return t&&T.forEach(function(k){return e(u,k)}),gt&&gr(u,R),P}function p(u,_,x,S){if(typeof x=="object"&&x!==null&&x.type===ns&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case Ko:e:{for(var P=x.key,C=_;C!==null;){if(C.key===P){if(P=x.type,P===ns){if(C.tag===7){n(u,C.sibling),_=r(C,x.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===ki&&Vh(P)===C.type){n(u,C.sibling),_=r(C,x.props),_.ref=Ys(u,C,x),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===ns?(_=Pr(x.props.children,u.mode,S,x.key),_.return=u,u=_):(S=Xa(x.type,x.key,x.props,null,u.mode,S),S.ref=Ys(u,_,x),S.return=u,u=S)}return o(u);case ts:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=r(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Ac(x,u.mode,S),_.return=u,u=_}return o(u);case ki:return C=x._init,p(u,_,C(x._payload),S)}if(ro(x))return m(u,_,x,S);if(Gs(x))return v(u,_,x,S);aa(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,x),_.return=u,u=_):(n(u,_),_=Tc(x,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return p}var As=Ig(!0),Ug=Ig(!1),dl=or(null),hl=null,us=null,dd=null;function hd(){dd=us=hl=null}function pd(t){var e=dl.current;mt(dl),t._currentValue=e}function Ou(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function _s(t,e){hl=t,dd=us=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(un=!0),t.firstContext=null)}function Un(t){var e=t._currentValue;if(dd!==t)if(t={context:t,memoizedValue:e,next:null},us===null){if(hl===null)throw Error(ie(308));us=t,hl.dependencies={lanes:0,firstContext:t}}else us=us.next=t;return e}var Er=null;function md(t){Er===null?Er=[t]:Er.push(t)}function Ng(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,md(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ai(t,i)}function Ai(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var zi=!1;function gd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,nt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ai(t,n)}return r=i.interleaved,r===null?(e.next=e,md(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ai(t,n)}function za(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}function Wh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function pl(t,e,n,i){var r=t.updateQueue;zi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,f=c=l=null,a=s;do{var d=a.lane,g=a.eventTime;if((i&d)===d){f!==null&&(f=f.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var m=t,v=a;switch(d=e,g=n,v.tag){case 1:if(m=v.payload,typeof m=="function"){h=m.call(g,h,d);break e}h=m;break e;case 3:m.flags=m.flags&-65537|128;case 0:if(m=v.payload,d=typeof m=="function"?m.call(g,h,d):m,d==null)break e;h=Et({},h,d);break e;case 2:zi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else g={eventTime:g,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=g,l=h):f=f.next=g,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(f===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ir|=o,t.lanes=o,t.memoizedState=h}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ie(191,r));r.call(i)}}}var Bo={},si=or(Bo),Po=or(Bo),bo=or(Bo);function wr(t){if(t===Bo)throw Error(ie(174));return t}function vd(t,e){switch(ft(bo,e),ft(Po,t),ft(si,Bo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:vu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=vu(e,t)}mt(si),ft(si,e)}function Cs(){mt(si),mt(Po),mt(bo)}function Og(t){wr(bo.current);var e=wr(si.current),n=vu(e,t.type);e!==n&&(ft(Po,t),ft(si,n))}function _d(t){Po.current===t&&(mt(si),mt(Po))}var St=or(0);function ml(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var xc=[];function xd(){for(var t=0;t<xc.length;t++)xc[t]._workInProgressVersionPrimary=null;xc.length=0}var Ba=Pi.ReactCurrentDispatcher,yc=Pi.ReactCurrentBatchConfig,Dr=0,Mt=null,Dt=null,zt=null,gl=!1,po=!1,Lo=0,hx=0;function jt(){throw Error(ie(321))}function yd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Kn(t[n],e[n]))return!1;return!0}function Sd(t,e,n,i,r,s){if(Dr=s,Mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ba.current=t===null||t.memoizedState===null?vx:_x,t=n(i,r),po){s=0;do{if(po=!1,Lo=0,25<=s)throw Error(ie(301));s+=1,zt=Dt=null,e.updateQueue=null,Ba.current=xx,t=n(i,r)}while(po)}if(Ba.current=vl,e=Dt!==null&&Dt.next!==null,Dr=0,zt=Dt=Mt=null,gl=!1,e)throw Error(ie(300));return t}function Md(){var t=Lo!==0;return Lo=0,t}function ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return zt===null?Mt.memoizedState=zt=t:zt=zt.next=t,zt}function Nn(){if(Dt===null){var t=Mt.alternate;t=t!==null?t.memoizedState:null}else t=Dt.next;var e=zt===null?Mt.memoizedState:zt.next;if(e!==null)zt=e,Dt=t;else{if(t===null)throw Error(ie(310));Dt=t,t={memoizedState:Dt.memoizedState,baseState:Dt.baseState,baseQueue:Dt.baseQueue,queue:Dt.queue,next:null},zt===null?Mt.memoizedState=zt=t:zt=zt.next=t}return zt}function Do(t,e){return typeof e=="function"?e(t):e}function Sc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=Dt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((Dr&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Mt.lanes|=f,Ir|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Kn(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Mt.lanes|=s,Ir|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Mc(t){var e=Nn(),n=e.queue;if(n===null)throw Error(ie(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Kn(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function zg(t,e){var n=Mt,i=Nn(),r=e(),s=!Kn(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Ed(Gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||zt!==null&&zt.memoizedState.tag&1){if(n.flags|=2048,Io(9,Hg.bind(null,n,i,r,e),void 0,null),Bt===null)throw Error(ie(349));Dr&30||Bg(n,e,r)}return r}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hg(t,e,n,i){e.value=n,e.getSnapshot=i,Vg(e)&&Wg(t)}function Gg(t,e,n){return n(function(){Vg(e)&&Wg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Kn(t,n)}catch{return!0}}function Wg(t){var e=Ai(t,1);e!==null&&qn(e,t,1,-1)}function jh(t){var e=ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Do,lastRenderedState:t},e.queue=t,t=t.dispatch=gx.bind(null,Mt,t),[e.memoizedState,t]}function Io(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Mt.updateQueue,e===null?(e={lastEffect:null,stores:null},Mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xg(){return Nn().memoizedState}function Ha(t,e,n,i){var r=ei();Mt.flags|=t,r.memoizedState=Io(1|e,n,void 0,i===void 0?null:i)}function Fl(t,e,n,i){var r=Nn();i=i===void 0?null:i;var s=void 0;if(Dt!==null){var o=Dt.memoizedState;if(s=o.destroy,i!==null&&yd(i,o.deps)){r.memoizedState=Io(e,n,s,i);return}}Mt.flags|=t,r.memoizedState=Io(1|e,n,s,i)}function Yh(t,e){return Ha(8390656,8,t,e)}function Ed(t,e){return Fl(2048,8,t,e)}function jg(t,e){return Fl(4,2,t,e)}function Yg(t,e){return Fl(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,Fl(4,4,$g.bind(null,e,t),n)}function wd(){}function Kg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=Nn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&yd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return Dr&21?(Kn(n,e)||(n=ig(),Mt.lanes|=n,Ir|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,un=!0),t.memoizedState=n)}function px(t,e){var n=at;at=n!==0&&4>n?n:4,t(!0);var i=yc.transition;yc.transition={};try{t(!1),e()}finally{at=n,yc.transition=i}}function Jg(){return Nn().memoizedState}function mx(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Ng(t,e,n,i),n!==null){var r=tn();qn(n,t,i,r),n0(n,e,i)}}function gx(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Kn(a,o)){var l=e.interleaved;l===null?(r.next=r,md(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ng(t,e,r,i),n!==null&&(r=tn(),qn(n,t,i,r),n0(n,e,i))}}function e0(t){var e=t.alternate;return t===Mt||e!==null&&e===Mt}function t0(t,e){po=gl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,td(t,n)}}var vl={readContext:Un,useCallback:jt,useContext:jt,useEffect:jt,useImperativeHandle:jt,useInsertionEffect:jt,useLayoutEffect:jt,useMemo:jt,useReducer:jt,useRef:jt,useState:jt,useDebugValue:jt,useDeferredValue:jt,useTransition:jt,useMutableSource:jt,useSyncExternalStore:jt,useId:jt,unstable_isNewReconciler:!1},vx={readContext:Un,useCallback:function(t,e){return ei().memoizedState=[t,e===void 0?null:e],t},useContext:Un,useEffect:Yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Ha(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Ha(4194308,4,t,e)},useInsertionEffect:function(t,e){return Ha(4,2,t,e)},useMemo:function(t,e){var n=ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mx.bind(null,Mt,t),[i.memoizedState,t]},useRef:function(t){var e=ei();return t={current:t},e.memoizedState=t},useState:jh,useDebugValue:wd,useDeferredValue:function(t){return ei().memoizedState=t},useTransition:function(){var t=jh(!1),e=t[0];return t=px.bind(null,t[1]),ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Mt,r=ei();if(gt){if(n===void 0)throw Error(ie(407));n=n()}else{if(n=e(),Bt===null)throw Error(ie(349));Dr&30||Bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yh(Gg.bind(null,i,s,t),[t]),i.flags|=2048,Io(9,Hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ei(),e=Bt.identifierPrefix;if(gt){var n=yi,i=xi;n=(i&~(1<<32-$n(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Lo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:Un,useCallback:Kg,useContext:Un,useEffect:Ed,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Sc,useRef:Xg,useState:function(){return Sc(Do)},useDebugValue:wd,useDeferredValue:function(t){var e=Nn();return Qg(e,Dt.memoizedState,t)},useTransition:function(){var t=Sc(Do)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:zg,useId:Jg,unstable_isNewReconciler:!1},xx={readContext:Un,useCallback:Kg,useContext:Un,useEffect:Ed,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Mc,useRef:Xg,useState:function(){return Mc(Do)},useDebugValue:wd,useDeferredValue:function(t){var e=Nn();return Dt===null?e.memoizedState=t:Qg(e,Dt.memoizedState,t)},useTransition:function(){var t=Mc(Do)[0],e=Nn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:zg,useId:Jg,unstable_isNewReconciler:!1};function Hn(t,e){if(t&&t.defaultProps){e=Et({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ku(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Et({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ol={isMounted:function(t){return(t=t._reactInternals)?kr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Zi(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(qn(e,t,r,i),za(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=tn(),r=Zi(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(qn(e,t,r,i),za(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=tn(),i=Zi(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(qn(e,t,i,n),za(e,t,i))}};function $h(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!To(n,i)||!To(r,s):!0}function i0(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Un(s):(r=dn(e)?br:Zt.current,i=e.contextTypes,s=(i=i!=null)?ws(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ol,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Ol.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},gd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Un(s):(s=dn(e)?br:Zt.current,r.context=ws(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ku(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Ol.enqueueReplaceState(r,r.state,null),pl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Rs(t,e){try{var n="",i=e;do n+=Yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Ec(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function r0(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){xl||(xl=!0,Ku=i),Bu(t,e)},n}function s0(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bu(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ux.bind(null,t,e,n),e.then(t,t))}function Zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var Sx=Pi.ReactCurrentOwner,un=!1;function Jt(t,e,n,i){e.child=t===null?Ug(e,null,n,i):As(e,t.child,n,i)}function Jh(t,e,n,i,r){n=n.render;var s=e.ref;return _s(e,r),i=Sd(t,e,n,i,s,r),n=Md(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(gt&&n&&cd(e),e.flags|=1,Jt(t,e,i,r),e.child)}function ep(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Dd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,i,r)):(t=Xa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:To,n(o,i)&&t.ref===e.ref)return Ci(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(To(s,i)&&t.ref===e.ref)if(un=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(un=!0);else return e.lanes=t.lanes,Ci(t,e,r)}return Hu(t,e,n,i,r)}function a0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(ds,Sn),Sn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(ds,Sn),Sn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(ds,Sn),Sn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(ds,Sn),Sn|=i;return Jt(t,e,r,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Hu(t,e,n,i,r){var s=dn(n)?br:Zt.current;return s=ws(e,s),_s(e,r),n=Sd(t,e,n,i,s,r),i=Md(),t!==null&&!un?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ci(t,e,r)):(gt&&i&&cd(e),e.flags|=1,Jt(t,e,n,r),e.child)}function tp(t,e,n,i,r){if(dn(n)){var s=!0;cl(e)}else s=!1;if(_s(e,r),e.stateNode===null)Ga(t,e),i0(e,n,i),zu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Un(c):(c=dn(n)?br:Zt.current,c=ws(e,c));var f=n.getDerivedStateFromProps,h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&qh(e,o,i,c),zi=!1;var d=e.memoizedState;o.state=d,pl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||fn.current||zi?(typeof f=="function"&&(ku(e,n,f,i),l=e.memoizedState),(a=zi||$h(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:Hn(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Un(l):(l=dn(n)?br:Zt.current,l=ws(e,l));var g=n.getDerivedStateFromProps;(f=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&qh(e,o,i,l),zi=!1,d=e.memoizedState,o.state=d,pl(e,i,o,r);var m=e.memoizedState;a!==h||d!==m||fn.current||zi?(typeof g=="function"&&(ku(e,n,g,i),m=e.memoizedState),(c=zi||$h(e,n,c,i,d,m,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,m,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,m,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=m),o.props=i,o.state=m,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Gu(t,e,n,i,s,r)}function Gu(t,e,n,i,r,s){l0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bh(e,n,!1),Ci(t,e,s);i=e.stateNode,Sx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=As(e,t.child,null,s),e.child=As(e,null,a,s)):Jt(t,e,a,s),e.memoizedState=i.state,r&&Bh(e,n,!0),e.child}function c0(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),vd(t,e.containerInfo)}function np(t,e,n,i,r){return Ts(),fd(r),e.flags|=256,Jt(t,e,n,i),e.child}var Vu={dehydrated:null,treeContext:null,retryLane:0};function Wu(t){return{baseLanes:t,cachePool:null,transitions:null}}function u0(t,e,n){var i=e.pendingProps,r=St.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(St,r&1),t===null)return Fu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Bl(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Wu(n),e.memoizedState=Vu,t):Td(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Mx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qi(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Wu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Vu,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Td(t,e){return e=Bl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function la(t,e,n,i){return i!==null&&fd(i),As(e,t.child,null,n),t=Td(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Ec(Error(ie(422))),la(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Bl({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&As(e,t.child,null,o),e.child.memoizedState=Wu(o),e.memoizedState=Vu,s);if(!(e.mode&1))return la(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ie(419)),i=Ec(s,i,void 0),la(t,e,o,i)}if(a=(o&t.childLanes)!==0,un||a){if(i=Bt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ai(t,r),qn(i,t,r,-1))}return Ld(),i=Ec(Error(ie(421))),la(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Mn=$i(r.nextSibling),En=e,gt=!0,Vn=null,t!==null&&(Pn[bn++]=xi,Pn[bn++]=yi,Pn[bn++]=Lr,xi=t.id,yi=t.overflow,Lr=e),e=Td(e,i.children),e.flags|=4096,e)}function ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Ou(t.return,e,n)}function wc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function f0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Jt(t,e,i.children,n),i=St.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,n,e);else if(t.tag===19)ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(St,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&ml(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),wc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&ml(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}wc(e,!0,n,null,s);break;case"together":wc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Ga(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ci(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ir|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ie(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:c0(e),Ts();break;case 5:Og(e);break;case 1:dn(e.type)&&cl(e);break;case 4:vd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(dl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(St,St.current&1),e.flags|=128,null):n&e.child.childLanes?u0(t,e,n):(ft(St,St.current&1),t=Ci(t,e,n),t!==null?t.sibling:null);ft(St,St.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return f0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(St,St.current),i)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n)}return Ci(t,e,n)}var d0,Xu,h0,p0;d0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xu=function(){};h0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,wr(si.current);var s=null;switch(n){case"input":r=hu(t,r),i=hu(t,i),s=[];break;case"select":r=Et({},r,{value:void 0}),i=Et({},i,{value:void 0}),s=[];break;case"textarea":r=gu(t,r),i=gu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=al)}_u(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(_o.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(_o.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ht("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};p0=function(t,e,n,i){n!==i&&(e.flags|=4)};function $s(t,e){if(!gt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Yt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wx(t,e,n){var i=e.pendingProps;switch(ud(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Yt(e),null;case 1:return dn(e.type)&&ll(),Yt(e),null;case 3:return i=e.stateNode,Cs(),mt(fn),mt(Zt),xd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(oa(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Vn!==null&&(Ju(Vn),Vn=null))),Xu(t,e),Yt(e),null;case 5:_d(e);var r=wr(bo.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ie(166));return Yt(e),null}if(t=wr(si.current),oa(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ii]=e,i[Ro]=s,t=(e.mode&1)!==0,n){case"dialog":ht("cancel",i),ht("close",i);break;case"iframe":case"object":case"embed":ht("load",i);break;case"video":case"audio":for(r=0;r<oo.length;r++)ht(oo[r],i);break;case"source":ht("error",i);break;case"img":case"image":case"link":ht("error",i),ht("load",i);break;case"details":ht("toggle",i);break;case"input":dh(i,s),ht("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ht("invalid",i);break;case"textarea":ph(i,s),ht("invalid",i)}_u(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&sa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&sa(i.textContent,a,t),r=["children",""+a]):_o.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ht("scroll",i)}switch(n){case"input":Zo(i),hh(i,s,!0);break;case"textarea":Zo(i),mh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=al)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ii]=e,t[Ro]=i,d0(t,e,!1,!1),e.stateNode=t;e:{switch(o=xu(n,i),n){case"dialog":ht("cancel",t),ht("close",t),r=i;break;case"iframe":case"object":case"embed":ht("load",t),r=i;break;case"video":case"audio":for(r=0;r<oo.length;r++)ht(oo[r],t);r=i;break;case"source":ht("error",t),r=i;break;case"img":case"image":case"link":ht("error",t),ht("load",t),r=i;break;case"details":ht("toggle",t),r=i;break;case"input":dh(t,i),r=hu(t,i),ht("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Et({},i,{value:void 0}),ht("invalid",t);break;case"textarea":ph(t,i),r=gu(t,i),ht("invalid",t);break;default:r=i}_u(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&xo(t,l):typeof l=="number"&&xo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(_o.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ht("scroll",t):l!=null&&qf(t,s,l,o))}switch(n){case"input":Zo(t),hh(t,i,!1);break;case"textarea":Zo(t),mh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ps(t,!!i.multiple,s,!1):i.defaultValue!=null&&ps(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=al)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Yt(e),null;case 6:if(t&&e.stateNode!=null)p0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ie(166));if(n=wr(bo.current),wr(si.current),oa(e)){if(i=e.stateNode,n=e.memoizedProps,i[ii]=e,(s=i.nodeValue!==n)&&(t=En,t!==null))switch(t.tag){case 3:sa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&sa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ii]=e,e.stateNode=i}return Yt(e),null;case 13:if(mt(St),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(gt&&Mn!==null&&e.mode&1&&!(e.flags&128))Dg(),Ts(),e.flags|=98560,s=!1;else if(s=oa(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ie(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ie(317));s[ii]=e}else Ts(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Yt(e),s=!1}else Vn!==null&&(Ju(Vn),Vn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||St.current&1?Ut===0&&(Ut=3):Ld())),e.updateQueue!==null&&(e.flags|=4),Yt(e),null);case 4:return Cs(),Xu(t,e),t===null&&Ao(e.stateNode.containerInfo),Yt(e),null;case 10:return pd(e.type._context),Yt(e),null;case 17:return dn(e.type)&&ll(),Yt(e),null;case 19:if(mt(St),s=e.memoizedState,s===null)return Yt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)$s(s,!1);else{if(Ut!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=ml(t),o!==null){for(e.flags|=128,$s(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(St,St.current&1|2),e.child}t=t.sibling}s.tail!==null&&Pt()>Ps&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304)}else{if(!i)if(t=ml(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),$s(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!gt)return Yt(e),null}else 2*Pt()-s.renderingStartTime>Ps&&n!==1073741824&&(e.flags|=128,i=!0,$s(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Pt(),e.sibling=null,n=St.current,ft(St,i?n&1|2:n&1),e):(Yt(e),null);case 22:case 23:return bd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Sn&1073741824&&(Yt(e),e.subtreeFlags&6&&(e.flags|=8192)):Yt(e),null;case 24:return null;case 25:return null}throw Error(ie(156,e.tag))}function Tx(t,e){switch(ud(e),e.tag){case 1:return dn(e.type)&&ll(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Cs(),mt(fn),mt(Zt),xd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return _d(e),null;case 13:if(mt(St),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ie(340));Ts()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return mt(St),null;case 4:return Cs(),null;case 10:return pd(e.type._context),null;case 22:case 23:return bd(),null;case 24:return null;default:return null}}var ca=!1,Kt=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,Se=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Tt(t,e,i)}else n.current=null}function ju(t,e,n){try{n()}catch(i){Tt(t,e,i)}}var rp=!1;function Cx(t,e){if(Pu=rl,t=xg(),ld(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,h=t,d=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)d=h,h=g;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++f===i&&(l=o),(g=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(bu={focusedElem:t,selectionRange:n},rl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var m=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(m!==null){var v=m.memoizedProps,p=m.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:Hn(e.type,v),p);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ie(163))}}catch(S){Tt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return m=rp,rp=!1,m}function mo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&ju(e,n,s)}r=r.next}while(r!==i)}}function kl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Yu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ii],delete e[Ro],delete e[Iu],delete e[cx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function $u(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=al));else if(i!==4&&(t=t.child,t!==null))for($u(t,e,n),t=t.sibling;t!==null;)$u(t,e,n),t=t.sibling}function qu(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(qu(t,e,n),t=t.sibling;t!==null;)qu(t,e,n),t=t.sibling}var Gt=null,Gn=!1;function Li(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(bl,n)}catch{}switch(n.tag){case 5:Kt||fs(n,e);case 6:var i=Gt,r=Gn;Gt=null,Li(t,e,n),Gt=i,Gn=r,Gt!==null&&(Gn?(t=Gt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Gt.removeChild(n.stateNode));break;case 18:Gt!==null&&(Gn?(t=Gt,n=n.stateNode,t.nodeType===8?vc(t.parentNode,n):t.nodeType===1&&vc(t,n),Eo(t)):vc(Gt,n.stateNode));break;case 4:i=Gt,r=Gn,Gt=n.stateNode.containerInfo,Gn=!0,Li(t,e,n),Gt=i,Gn=r;break;case 0:case 11:case 14:case 15:if(!Kt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&ju(n,e,o),r=r.next}while(r!==i)}Li(t,e,n);break;case 1:if(!Kt&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Tt(n,e,a)}Li(t,e,n);break;case 21:Li(t,e,n);break;case 22:n.mode&1?(Kt=(i=Kt)||n.memoizedState!==null,Li(t,e,n),Kt=i):Li(t,e,n);break;default:Li(t,e,n)}}function op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(i){var r=Fx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function On(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Gt=a.stateNode,Gn=!1;break e;case 3:Gt=a.stateNode.containerInfo,Gn=!0;break e;case 4:Gt=a.stateNode.containerInfo,Gn=!0;break e}a=a.return}if(Gt===null)throw Error(ie(160));v0(s,o,r),Gt=null,Gn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Tt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,t),e=e.sibling}function _0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(On(e,t),Jn(t),i&4){try{mo(3,t,t.return),kl(3,t)}catch(v){Tt(t,t.return,v)}try{mo(5,t,t.return)}catch(v){Tt(t,t.return,v)}}break;case 1:On(e,t),Jn(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(On(e,t),Jn(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{xo(r,"")}catch(v){Tt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bm(r,s),xu(a,o);var c=xu(a,s);for(o=0;o<l.length;o+=2){var f=l[o],h=l[o+1];f==="style"?Xm(r,h):f==="dangerouslySetInnerHTML"?Vm(r,h):f==="children"?xo(r,h):qf(r,f,h,c)}switch(a){case"input":pu(r,s);break;case"textarea":Hm(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ps(r,!!s.multiple,g,!1):d!==!!s.multiple&&(s.defaultValue!=null?ps(r,!!s.multiple,s.defaultValue,!0):ps(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ro]=s}catch(v){Tt(t,t.return,v)}}break;case 6:if(On(e,t),Jn(t),i&4){if(t.stateNode===null)throw Error(ie(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){Tt(t,t.return,v)}}break;case 3:if(On(e,t),Jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Eo(e.containerInfo)}catch(v){Tt(t,t.return,v)}break;case 4:On(e,t),Jn(t);break;case 13:On(e,t),Jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Rd=Pt())),i&4&&op(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(Kt=(c=Kt)||f,On(e,t),Kt=c):On(e,t),Jn(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(h=Se=f;Se!==null;){switch(d=Se,g=d.child,d.tag){case 0:case 11:case 14:case 15:mo(4,d,d.return);break;case 1:fs(d,d.return);var m=d.stateNode;if(typeof m.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,m.props=e.memoizedProps,m.state=e.memoizedState,m.componentWillUnmount()}catch(v){Tt(i,n,v)}}break;case 5:fs(d,d.return);break;case 22:if(d.memoizedState!==null){lp(h);continue}}g!==null?(g.return=d,Se=g):lp(h)}f=f.sibling}e:for(f=null,h=t;;){if(h.tag===5){if(f===null){f=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wm("display",o))}catch(v){Tt(t,t.return,v)}}}else if(h.tag===6){if(f===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){Tt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;f===h&&(f=null),h=h.return}f===h&&(f=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:On(e,t),Jn(t),i&4&&op(t);break;case 21:break;default:On(e,t),Jn(t)}}function Jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var i=n;break e}n=n.return}throw Error(ie(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(xo(r,""),i.flags&=-33);var s=sp(t);qu(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sp(t);$u(t,a,o);break;default:throw Error(ie(161))}}catch(l){Tt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){Se=t,x0(t)}function x0(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||ca;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Kt;a=ca;var c=Kt;if(ca=o,(Kt=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?cp(r):l!==null?(l.return=o,Se=l):cp(r);for(;s!==null;)Se=s,x0(s),s=s.sibling;Se=r,ca=a,Kt=c}ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):ap(t)}}function ap(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Kt||kl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Kt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Hn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var h=f.dehydrated;h!==null&&Eo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ie(163))}Kt||e.flags&512&&Yu(e)}catch(d){Tt(e,e.return,d)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function lp(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function cp(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{kl(4,e)}catch(l){Tt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Tt(e,r,l)}}var s=e.return;try{Yu(e)}catch(l){Tt(e,s,l)}break;case 5:var o=e.return;try{Yu(e)}catch(l){Tt(e,o,l)}}}catch(l){Tt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var Px=Math.ceil,_l=Pi.ReactCurrentDispatcher,Ad=Pi.ReactCurrentOwner,In=Pi.ReactCurrentBatchConfig,nt=0,Bt=null,Lt=null,Vt=0,Sn=0,ds=or(0),Ut=0,Uo=null,Ir=0,zl=0,Cd=0,go=null,an=null,Rd=0,Ps=1/0,gi=null,xl=!1,Ku=null,Ki=null,ua=!1,Wi=null,yl=0,vo=0,Zu=null,Va=-1,Wa=0;function tn(){return nt&6?Pt():Va!==-1?Va:Va=Pt()}function Zi(t){return t.mode&1?nt&2&&Vt!==0?Vt&-Vt:dx.transition!==null?(Wa===0&&(Wa=ig()),Wa):(t=at,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function qn(t,e,n,i){if(50<vo)throw vo=0,Zu=null,Error(ie(185));Oo(t,n,i),(!(nt&2)||t!==Bt)&&(t===Bt&&(!(nt&2)&&(zl|=n),Ut===4&&Hi(t,Vt)),hn(t,i),n===1&&nt===0&&!(e.mode&1)&&(Ps=Pt()+500,Nl&&ar()))}function hn(t,e){var n=t.callbackNode;d_(t,e);var i=il(t,t===Bt?Vt:0);if(i===0)n!==null&&_h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_h(n),e===1)t.tag===0?fx(up.bind(null,t)):Pg(up.bind(null,t)),ax(function(){!(nt&6)&&ar()}),n=null;else{switch(rg(i)){case 1:n=ed;break;case 4:n=tg;break;case 16:n=nl;break;case 536870912:n=ng;break;default:n=nl}n=C0(n,y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y0(t,e){if(Va=-1,Wa=0,nt&6)throw Error(ie(327));var n=t.callbackNode;if(xs()&&t.callbackNode!==n)return null;var i=il(t,t===Bt?Vt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Sl(t,i);else{e=i;var r=nt;nt|=2;var s=M0();(Bt!==t||Vt!==e)&&(gi=null,Ps=Pt()+500,Rr(t,e));do try{Dx();break}catch(a){S0(t,a)}while(!0);hd(),_l.current=s,nt=r,Lt!==null?e=0:(Bt=null,Vt=0,e=Ut)}if(e!==0){if(e===2&&(r=wu(t),r!==0&&(i=r,e=Qu(t,r))),e===1)throw n=Uo,Rr(t,0),Hi(t,i),hn(t,Pt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!bx(r)&&(e=Sl(t,i),e===2&&(s=wu(t),s!==0&&(i=s,e=Qu(t,s))),e===1))throw n=Uo,Rr(t,0),Hi(t,i),hn(t,Pt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ie(345));case 2:vr(t,an,gi);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=Rd+500-Pt(),10<e)){if(il(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){tn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Du(vr.bind(null,t,an,gi),e);break}vr(t,an,gi);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-$n(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Pt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Px(i/1960))-i,10<i){t.timeoutHandle=Du(vr.bind(null,t,an,gi),i);break}vr(t,an,gi);break;case 5:vr(t,an,gi);break;default:throw Error(ie(329))}}}return hn(t,Pt()),t.callbackNode===n?y0.bind(null,t):null}function Qu(t,e){var n=go;return t.current.memoizedState.isDehydrated&&(Rr(t,e).flags|=256),t=Sl(t,e),t!==2&&(e=an,an=n,e!==null&&Ju(e)),t}function Ju(t){an===null?an=t:an.push.apply(an,t)}function bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Kn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~Cd,e&=~zl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-$n(e),i=1<<n;t[n]=-1,e&=~i}}function up(t){if(nt&6)throw Error(ie(327));xs();var e=il(t,0);if(!(e&1))return hn(t,Pt()),null;var n=Sl(t,e);if(t.tag!==0&&n===2){var i=wu(t);i!==0&&(e=i,n=Qu(t,i))}if(n===1)throw n=Uo,Rr(t,0),Hi(t,e),hn(t,Pt()),n;if(n===6)throw Error(ie(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,vr(t,an,gi),hn(t,Pt()),null}function Pd(t,e){var n=nt;nt|=1;try{return t(e)}finally{nt=n,nt===0&&(Ps=Pt()+500,Nl&&ar())}}function Ur(t){Wi!==null&&Wi.tag===0&&!(nt&6)&&xs();var e=nt;nt|=1;var n=In.transition,i=at;try{if(In.transition=null,at=1,t)return t()}finally{at=i,In.transition=n,nt=e,!(nt&6)&&ar()}}function bd(){Sn=ds.current,mt(ds)}function Rr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ox(n)),Lt!==null)for(n=Lt.return;n!==null;){var i=n;switch(ud(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ll();break;case 3:Cs(),mt(fn),mt(Zt),xd();break;case 5:_d(i);break;case 4:Cs();break;case 13:mt(St);break;case 19:mt(St);break;case 10:pd(i.type._context);break;case 22:case 23:bd()}n=n.return}if(Bt=t,Lt=t=Qi(t.current,null),Vt=Sn=e,Ut=0,Uo=null,Cd=zl=Ir=0,an=go=null,Er!==null){for(e=0;e<Er.length;e++)if(n=Er[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Er=null}return t}function S0(t,e){do{var n=Lt;try{if(hd(),Ba.current=vl,gl){for(var i=Mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}gl=!1}if(Dr=0,zt=Dt=Mt=null,po=!1,Lo=0,Ad.current=null,n===null||n.return===null){Ut=1,Uo=e,Lt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Vt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,h=f.tag;if(!(f.mode&1)&&(h===0||h===11||h===15)){var d=f.alternate;d?(f.updateQueue=d.updateQueue,f.memoizedState=d.memoizedState,f.lanes=d.lanes):(f.updateQueue=null,f.memoizedState=null)}var g=Zh(o);if(g!==null){g.flags&=-257,Qh(g,o,a,s,e),g.mode&1&&Kh(s,c,e),e=g,l=c;var m=e.updateQueue;if(m===null){var v=new Set;v.add(l),e.updateQueue=v}else m.add(l);break e}else{if(!(e&1)){Kh(s,c,e),Ld();break e}l=Error(ie(426))}}else if(gt&&a.mode&1){var p=Zh(o);if(p!==null){!(p.flags&65536)&&(p.flags|=256),Qh(p,o,a,s,e),fd(Rs(l,a));break e}}s=l=Rs(l,a),Ut!==4&&(Ut=2),go===null?go=[s]:go.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=r0(s,l,e);Wh(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Ki===null||!Ki.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=s0(s,a,e);Wh(s,S);break e}}s=s.return}while(s!==null)}w0(n)}catch(P){e=P,Lt===n&&n!==null&&(Lt=n=n.return);continue}break}while(!0)}function M0(){var t=_l.current;return _l.current=vl,t===null?vl:t}function Ld(){(Ut===0||Ut===3||Ut===2)&&(Ut=4),Bt===null||!(Ir&268435455)&&!(zl&268435455)||Hi(Bt,Vt)}function Sl(t,e){var n=nt;nt|=2;var i=M0();(Bt!==t||Vt!==e)&&(gi=null,Rr(t,e));do try{Lx();break}catch(r){S0(t,r)}while(!0);if(hd(),nt=n,_l.current=i,Lt!==null)throw Error(ie(261));return Bt=null,Vt=0,Ut}function Lx(){for(;Lt!==null;)E0(Lt)}function Dx(){for(;Lt!==null&&!i_();)E0(Lt)}function E0(t){var e=A0(t.alternate,t,Sn);t.memoizedProps=t.pendingProps,e===null?w0(t):Lt=e,Ad.current=null}function w0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tx(n,e),n!==null){n.flags&=32767,Lt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ut=6,Lt=null;return}}else if(n=wx(n,e,Sn),n!==null){Lt=n;return}if(e=e.sibling,e!==null){Lt=e;return}Lt=e=t}while(e!==null);Ut===0&&(Ut=5)}function vr(t,e,n){var i=at,r=In.transition;try{In.transition=null,at=1,Ix(t,e,n,i)}finally{In.transition=r,at=i}return null}function Ix(t,e,n,i){do xs();while(Wi!==null);if(nt&6)throw Error(ie(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ie(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h_(t,s),t===Bt&&(Lt=Bt=null,Vt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ua||(ua=!0,C0(nl,function(){return xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=In.transition,In.transition=null;var o=at;at=1;var a=nt;nt|=4,Ad.current=null,Cx(t,n),_0(n,t),J_(bu),rl=!!Pu,bu=Pu=null,t.current=n,Rx(n),r_(),nt=a,at=o,In.transition=s}else t.current=n;if(ua&&(ua=!1,Wi=t,yl=r),s=t.pendingLanes,s===0&&(Ki=null),a_(n.stateNode),hn(t,Pt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(xl)throw xl=!1,t=Ku,Ku=null,t;return yl&1&&t.tag!==0&&xs(),s=t.pendingLanes,s&1?t===Zu?vo++:(vo=0,Zu=t):vo=0,ar(),null}function xs(){if(Wi!==null){var t=rg(yl),e=In.transition,n=at;try{if(In.transition=null,at=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,yl=0,nt&6)throw Error(ie(331));var r=nt;for(nt|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:mo(8,f,s)}var h=f.child;if(h!==null)h.return=f,Se=h;else for(;Se!==null;){f=Se;var d=f.sibling,g=f.return;if(m0(f),f===c){Se=null;break}if(d!==null){d.return=g,Se=d;break}Se=g}}}var m=s.alternate;if(m!==null){var v=m.child;if(v!==null){m.child=null;do{var p=v.sibling;v.sibling=null,v=p}while(v!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:mo(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,Se=u;break e}Se=s.return}}var _=t.current;for(Se=_;Se!==null;){o=Se;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,Se=x;else e:for(o=_;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:kl(9,a)}}catch(P){Tt(a,a.return,P)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(nt=r,ar(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(bl,t)}catch{}i=!0}return i}finally{at=n,In.transition=e}}return!1}function fp(t,e,n){e=Rs(n,e),e=r0(t,e,1),t=qi(t,e,1),e=tn(),t!==null&&(Oo(t,1,e),hn(t,e))}function Tt(t,e,n){if(t.tag===3)fp(t,t,n);else for(;e!==null;){if(e.tag===3){fp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Rs(n,t),t=s0(e,t,1),e=qi(e,t,1),t=tn(),e!==null&&(Oo(e,1,t),hn(e,t));break}}e=e.return}}function Ux(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=tn(),t.pingedLanes|=t.suspendedLanes&n,Bt===t&&(Vt&n)===n&&(Ut===4||Ut===3&&(Vt&130023424)===Vt&&500>Pt()-Rd?Rr(t,0):Cd|=n),hn(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=ea,ea<<=1,!(ea&130023424)&&(ea=4194304)):e=1);var n=tn();t=Ai(t,e),t!==null&&(Oo(t,e,n),hn(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function Fx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ie(314))}i!==null&&i.delete(e),T0(t,n)}var A0;A0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||fn.current)un=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return un=!1,Ex(t,e,n);un=!!(t.flags&131072)}else un=!1,gt&&e.flags&1048576&&bg(e,fl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Ga(t,e),t=e.pendingProps;var r=ws(e,Zt.current);_s(e,n),r=Sd(null,e,i,t,r,n);var s=Md();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,dn(i)?(s=!0,cl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,gd(e),r.updater=Ol,e.stateNode=r,r._reactInternals=e,zu(e,i,t,n),e=Gu(null,e,i,!0,s,n)):(e.tag=0,gt&&s&&cd(e),Jt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Ga(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kx(i),t=Hn(i,t),r){case 0:e=Hu(null,e,i,t,n);break e;case 1:e=tp(null,e,i,t,n);break e;case 11:e=Jh(null,e,i,t,n);break e;case 14:e=ep(null,e,i,Hn(i.type,t),n);break e}throw Error(ie(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Hu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),tp(t,e,i,r,n);case 3:e:{if(c0(e),t===null)throw Error(ie(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fg(t,e),pl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Rs(Error(ie(423)),e),e=np(t,e,i,n,r);break e}else if(i!==r){r=Rs(Error(ie(424)),e),e=np(t,e,i,n,r);break e}else for(Mn=$i(e.stateNode.containerInfo.firstChild),En=e,gt=!0,Vn=null,n=Ug(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ts(),i===r){e=Ci(t,e,n);break e}Jt(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&Fu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Lu(i,r)?o=null:s!==null&&Lu(i,s)&&(e.flags|=32),l0(t,e),Jt(t,e,o,n),e.child;case 6:return t===null&&Fu(e),null;case 13:return u0(t,e,n);case 4:return vd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=As(e,null,i,n):Jt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Jh(t,e,i,r,n);case 7:return Jt(t,e,e.pendingProps,n),e.child;case 8:return Jt(t,e,e.pendingProps.children,n),e.child;case 12:return Jt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(dl,i._currentValue),i._currentValue=o,s!==null)if(Kn(s.value,o)){if(s.children===r.children&&!fn.current){e=Ci(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Ou(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ie(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Ou(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Jt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,_s(e,n),r=Un(r),i=i(r),e.flags|=1,Jt(t,e,i,n),e.child;case 14:return i=e.type,r=Hn(i,e.pendingProps),r=Hn(i.type,r),ep(t,e,i,r,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Hn(i,r),Ga(t,e),e.tag=1,dn(i)?(t=!0,cl(e)):t=!1,_s(e,n),i0(e,i,r),zu(e,i,r,n),Gu(null,e,i,!0,t,n);case 19:return f0(t,e,n);case 22:return a0(t,e,n)}throw Error(ie(156,e.tag))};function C0(t,e){return eg(t,e)}function Ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(t,e,n,i){return new Ox(t,e,n,i)}function Dd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kx(t){if(typeof t=="function")return Dd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Zf)return 11;if(t===Qf)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=Ln(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Xa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Dd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ns:return Pr(n.children,r,s,e);case Kf:o=8,r|=8;break;case cu:return t=Ln(12,n,e,r|2),t.elementType=cu,t.lanes=s,t;case uu:return t=Ln(13,n,e,r),t.elementType=uu,t.lanes=s,t;case fu:return t=Ln(19,n,e,r),t.elementType=fu,t.lanes=s,t;case Om:return Bl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:o=10;break e;case Fm:o=9;break e;case Zf:o=11;break e;case Qf:o=14;break e;case ki:o=16,i=null;break e}throw Error(ie(130,t==null?t:typeof t,""))}return e=Ln(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Ln(7,t,i,e),t.lanes=n,t}function Bl(t,e,n,i){return t=Ln(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function Tc(t,e,n){return t=Ln(6,t,null,e),t.lanes=n,t}function Ac(t,e,n){return e=Ln(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=oc(0),this.expirationTimes=oc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=oc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Id(t,e,n,i,r,s,o,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Ln(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},gd(s),t}function Bx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function R0(t){if(!t)return nr;t=t._reactInternals;e:{if(kr(t)!==t||t.tag!==1)throw Error(ie(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(dn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ie(171))}if(t.tag===1){var n=t.type;if(dn(n))return Rg(t,n,e)}return e}function P0(t,e,n,i,r,s,o,a,l){return t=Id(n,i,!0,t,r,s,o,a,l),t.context=R0(null),n=t.current,i=tn(),r=Zi(n),s=Ei(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,Oo(t,r,i),hn(t,i),t}function Hl(t,e,n,i){var r=e.current,s=tn(),o=Zi(r);return n=R0(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(qn(t,r,o,s),za(t,r,o)),o}function Ml(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function dp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ud(t,e){dp(t,e),(t=t.alternate)&&dp(t,e)}function Hx(){return null}var b0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Nd(t){this._internalRoot=t}Gl.prototype.render=Nd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ie(409));Hl(t,e,null,null)};Gl.prototype.unmount=Nd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Ur(function(){Hl(null,t,null,null)}),e[Ti]=null}};function Gl(t){this._internalRoot=t}Gl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&cg(t)}};function Fd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function Gx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ml(o);s.call(c)}}var o=P0(e,i,t,0,null,!1,!1,"",hp);return t._reactRootContainer=o,t[Ti]=o.current,Ao(t.nodeType===8?t.parentNode:t),Ur(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ml(l);a.call(c)}}var l=Id(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=l,t[Ti]=l.current,Ao(t.nodeType===8?t.parentNode:t),Ur(function(){Hl(e,l,n,i)}),l}function Wl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ml(o);a.call(l)}}Hl(e,o,t,r)}else o=Gx(n,e,t,r,i);return Ml(o)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=so(e.pendingLanes);n!==0&&(td(e,n|1),hn(e,Pt()),!(nt&6)&&(Ps=Pt()+500,ar()))}break;case 13:Ur(function(){var i=Ai(t,1);if(i!==null){var r=tn();qn(i,t,1,r)}}),Ud(t,1)}};nd=function(t){if(t.tag===13){var e=Ai(t,134217728);if(e!==null){var n=tn();qn(e,t,134217728,n)}Ud(t,134217728)}};og=function(t){if(t.tag===13){var e=Zi(t),n=Ai(t,e);if(n!==null){var i=tn();qn(n,t,e,i)}Ud(t,e)}};ag=function(){return at};lg=function(t,e){var n=at;try{return at=t,e()}finally{at=n}};Su=function(t,e,n){switch(e){case"input":if(pu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ul(i);if(!r)throw Error(ie(90));zm(i),pu(i,r)}}}break;case"textarea":Hm(t,n);break;case"select":e=n.value,e!=null&&ps(t,!!n.multiple,e,!1)}};$m=Pd;qm=Ur;var Vx={usingClientEntryPoint:!1,Events:[zo,os,Ul,jm,Ym,Pd]},qs={findFiberByHostInstance:Mr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wx={bundleType:qs.bundleType,version:qs.version,rendererPackageName:qs.rendererPackageName,rendererConfig:qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Pi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qm(t),t===null?null:t.stateNode},findFiberByHostInstance:qs.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var fa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!fa.isDisabled&&fa.supportsFiber)try{bl=fa.inject(Wx),ri=fa}catch{}}Tn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;Tn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fd(e))throw Error(ie(200));return Bx(t,e,null,n)};Tn.createRoot=function(t,e){if(!Fd(t))throw Error(ie(299));var n=!1,i="",r=b0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Id(t,1,!1,null,null,n,!1,i,r),t[Ti]=e.current,Ao(t.nodeType===8?t.parentNode:t),new Nd(e)};Tn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ie(188)):(t=Object.keys(t).join(","),Error(ie(268,t)));return t=Qm(e),t=t===null?null:t.stateNode,t};Tn.flushSync=function(t){return Ur(t)};Tn.hydrate=function(t,e,n){if(!Vl(e))throw Error(ie(200));return Wl(null,t,e,!0,n)};Tn.hydrateRoot=function(t,e,n){if(!Fd(t))throw Error(ie(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=b0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n??null,r,!1,s,o),t[Ti]=e.current,Ao(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Gl(e)};Tn.render=function(t,e,n){if(!Vl(e))throw Error(ie(200));return Wl(null,t,e,!1,n)};Tn.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(ie(40));return t._reactRootContainer?(Ur(function(){Wl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ti]=null})}),!0):!1};Tn.unstable_batchedUpdates=Pd;Tn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Vl(n))throw Error(ie(200));if(t==null||t._reactInternals===void 0)throw Error(ie(38));return Wl(t,e,n,!1,i)};Tn.version="18.3.1-next-f1338f8080-20240426";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(t){console.error(t)}}L0(),Lm.exports=Tn;var Xx=Lm.exports,pp=Xx;au.createRoot=pp.createRoot,au.hydrateRoot=pp.hydrateRoot;const jx={},mp=t=>{let e;const n=new Set,i=(f,h)=>{const d=typeof f=="function"?f(e):f;if(!Object.is(d,e)){const g=e;e=h??(typeof d!="object"||d===null)?d:Object.assign({},e,d),n.forEach(m=>m(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:f=>(n.add(f),()=>n.delete(f)),destroy:()=>{(jx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Yx=t=>t?mp(t):mp;var D0={exports:{}},I0={},U0={exports:{}},N0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bs=vt;function $x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qx=typeof Object.is=="function"?Object.is:$x,Kx=bs.useState,Zx=bs.useEffect,Qx=bs.useLayoutEffect,Jx=bs.useDebugValue;function ey(t,e){var n=e(),i=Kx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Qx(function(){r.value=n,r.getSnapshot=e,Cc(r)&&s({inst:r})},[t,n,e]),Zx(function(){return Cc(r)&&s({inst:r}),t(function(){Cc(r)&&s({inst:r})})},[t]),Jx(n),n}function Cc(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qx(t,n)}catch{return!0}}function ty(t,e){return e()}var ny=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ty:ey;N0.useSyncExternalStore=bs.useSyncExternalStore!==void 0?bs.useSyncExternalStore:ny;U0.exports=N0;var iy=U0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xl=vt,ry=iy;function sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oy=typeof Object.is=="function"?Object.is:sy,ay=ry.useSyncExternalStore,ly=Xl.useRef,cy=Xl.useEffect,uy=Xl.useMemo,fy=Xl.useDebugValue;I0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=ly(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=uy(function(){function l(g){if(!c){if(c=!0,f=g,g=i(g),r!==void 0&&o.hasValue){var m=o.value;if(r(m,g))return h=m}return h=g}if(m=h,oy(f,g))return m;var v=i(g);return r!==void 0&&r(m,v)?(f=g,m):(f=g,h=v)}var c=!1,f,h,d=n===void 0?null:n;return[function(){return l(e())},d===null?void 0:function(){return l(d())}]},[e,n,i,r]);var a=ay(t,s[0],s[1]);return cy(function(){o.hasValue=!0,o.value=a},[a]),fy(a),a};D0.exports=I0;var dy=D0.exports;const hy=_m(dy),F0={},{useDebugValue:py}=Pm,{useSyncExternalStoreWithSelector:my}=hy;let gp=!1;const gy=t=>t;function vy(t,e=gy,n){(F0?"production":void 0)!=="production"&&n&&!gp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),gp=!0);const i=my(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return py(i),i}const vp=t=>{(F0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Yx(t):t,n=(i,r)=>vy(e,i,r);return Object.assign(n,e),n},_y=t=>t?vp(t):vp,Ye=_y((t,e)=>({streak:0,lastPracticeDate:null,todayAccuracy:0,todayPassed:!1,totalSessions:0,unlockedLocations:["home"],masteryPoints:0,fogOpacity:1,cameraTarget:"home",cameraShake:0,hapticEnabled:!0,soundEnabled:!0,holographicMode:!1,updateStreak:n=>{const i=e().streak,r=e().unlockedLocations;if(n>i){const s=[],o={1:"home",3:"school",5:"gym",7:"cafeteria",10:"malecon",14:"forum",21:"centro",30:"full_city"};for(const[a,l]of Object.entries(o))n>=parseInt(a)&&!r.includes(l)&&s.push(l);if(s.length>0){const a=[...r,...s],l=s.includes("full_city");return t({streak:n,unlockedLocations:a,masteryPoints:e().masteryPoints+n*100,holographicMode:l?!0:e().holographicMode,fogOpacity:0,cameraShake:15}),e().hapticEnabled&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([100,50,100,50,200]),s}return t({streak:n,masteryPoints:e().masteryPoints+100}),[]}return[]},recordSession:(n,i)=>{const r=new Date().toDateString(),s=e().lastPracticeDate;if(t({todayAccuracy:n,todayPassed:i,totalSessions:e().totalSessions+1}),i){const o=Math.round(n*10);if(t({masteryPoints:e().masteryPoints+o}),s!==r){const a=e().streak+1;t({lastPracticeDate:r}),typeof localStorage<"u"&&(localStorage.setItem("alma_streak",String(a)),localStorage.setItem("alma_last_practice",new Date().toISOString())),e().updateStreak(a)}}},navigateTo:n=>e().unlockedLocations.includes(n)?(t({cameraTarget:n,fogOpacity:.3}),!0):(t({fogOpacity:1}),!1),triggerFogBurst:()=>{t({fogOpacity:1}),setTimeout(()=>{t({fogOpacity:0})},1200)},triggerCameraShake:(n=10)=>{t({cameraShake:n}),setTimeout(()=>{t({cameraShake:0})},500)},getUnlockProgress:()=>{const n=e().streak;return[{day:1,location:"Home",emoji:"🏠"},{day:3,location:"School",emoji:"🏫"},{day:5,location:"Gym",emoji:"💪"},{day:7,location:"Cafetería",emoji:"☕"},{day:10,location:"Malecón",emoji:"🌅"},{day:14,location:"Forum",emoji:"🛍️"},{day:21,location:"Centro",emoji:"🏙️"},{day:30,location:"Full City + Holographic",emoji:"🌌"}].map(r=>({...r,unlocked:n>=r.day,daysRemaining:Math.max(0,r.day-n)}))}}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Od="169",xy=0,_p=1,yy=2,O0=1,jl=2,mi=3,ir=0,pn=1,cn=2,Ji=0,ys=1,xp=2,yp=3,Sp=4,Sy=5,yr=100,My=101,Ey=102,wy=103,Ty=104,Ay=200,Cy=201,Ry=202,Py=203,ef=204,tf=205,by=206,Ly=207,Dy=208,Iy=209,Uy=210,Ny=211,Fy=212,Oy=213,ky=214,nf=0,rf=1,sf=2,Ls=3,of=4,af=5,lf=6,cf=7,k0=0,zy=1,By=2,er=0,Hy=1,Gy=2,Vy=3,Yl=4,Wy=5,Xy=6,jy=7,z0=300,Ds=301,Is=302,uf=303,ff=304,$l=306,df=1e3,Tr=1001,hf=1002,Dn=1003,Yy=1004,da=1005,Wn=1006,Rc=1007,Ar=1008,Ri=1009,B0=1010,H0=1011,No=1012,kd=1013,Nr=1014,Si=1015,Ho=1016,zd=1017,Bd=1018,Us=1020,G0=35902,V0=1021,W0=1022,Yn=1023,X0=1024,j0=1025,Ss=1026,Ns=1027,Y0=1028,Hd=1029,$0=1030,Gd=1031,Vd=1033,ja=33776,Ya=33777,$a=33778,qa=33779,pf=35840,mf=35841,gf=35842,vf=35843,_f=36196,xf=37492,yf=37496,Sf=37808,Mf=37809,Ef=37810,wf=37811,Tf=37812,Af=37813,Cf=37814,Rf=37815,Pf=37816,bf=37817,Lf=37818,Df=37819,If=37820,Uf=37821,Ka=36492,Nf=36494,Ff=36495,q0=36283,Of=36284,kf=36285,zf=36286,$y=3200,qy=3201,K0=0,Ky=1,Gi="",ti="srgb",lr="srgb-linear",Wd="display-p3",ql="display-p3-linear",El="linear",pt="srgb",wl="rec709",Tl="p3",Hr=7680,Mp=519,Zy=512,Qy=513,Jy=514,Z0=515,eS=516,tS=517,nS=518,iS=519,Ep=35044,wp="300 es",Mi=2e3,Al=2001;class Bs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const $t=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Pc=Math.PI/180,Bf=180/Math.PI;function Go(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return($t[t&255]+$t[t>>8&255]+$t[t>>16&255]+$t[t>>24&255]+"-"+$t[e&255]+$t[e>>8&255]+"-"+$t[e>>16&15|64]+$t[e>>24&255]+"-"+$t[n&63|128]+$t[n>>8&255]+"-"+$t[n>>16&255]+$t[n>>24&255]+$t[i&255]+$t[i>>8&255]+$t[i>>16&255]+$t[i>>24&255]).toLowerCase()}function ln(t,e,n){return Math.max(e,Math.min(n,t))}function rS(t,e){return(t%e+e)%e}function bc(t,e,n){return(1-n)*t+n*e}function Ks(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function on(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class Je{constructor(e=0,n=0){Je.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],h=i[7],d=i[2],g=i[5],m=i[8],v=r[0],p=r[3],u=r[6],_=r[1],x=r[4],S=r[7],P=r[2],C=r[5],T=r[8];return s[0]=o*v+a*_+l*P,s[3]=o*p+a*x+l*C,s[6]=o*u+a*S+l*T,s[1]=c*v+f*_+h*P,s[4]=c*p+f*x+h*C,s[7]=c*u+f*S+h*T,s[2]=d*v+g*_+m*P,s[5]=d*p+g*x+m*C,s[8]=d*u+g*S+m*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=f*o-a*c,d=a*l-f*s,g=c*s-o*l,m=n*h+i*d+r*g;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/m;return e[0]=h*v,e[1]=(r*c-f*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(f*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=g*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Lc.makeScale(e,n)),this}rotate(e){return this.premultiply(Lc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Lc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Lc=new We;function Q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Cl(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sS(){const t=Cl("canvas");return t.style.display="block",t}const Tp={};function Za(t){t in Tp||(Tp[t]=!0,console.warn(t))}function oS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function aS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ap=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cp=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Zs={[lr]:{transfer:El,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ti]:{transfer:pt,primaries:wl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[ql]:{transfer:El,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Cp),fromReference:t=>t.applyMatrix3(Ap)},[Wd]:{transfer:pt,primaries:Tl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Cp),fromReference:t=>t.applyMatrix3(Ap).convertLinearToSRGB()}},cS=new Set([lr,ql]),st={enabled:!0,_workingColorSpace:lr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Zs[e].toReference,r=Zs[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Zs[t].primaries},getTransfer:function(t){return t===Gi?El:Zs[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Zs[e].luminanceCoefficients)}};function Ms(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Dc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Gr;class uS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Gr===void 0&&(Gr=Cl("canvas")),Gr.width=e.width,Gr.height=e.height;const i=Gr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Gr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Cl("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ms(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ms(n[i]/255)*255):n[i]=Ms(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let fS=0;class J0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=Go(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Ic(r[o].image)):s.push(Ic(r[o]))}else s=Ic(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Ic(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let dS=0;class mn extends Bs{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Tr,r=Tr,s=Wn,o=Ar,a=Yn,l=Ri,c=mn.DEFAULT_ANISOTROPY,f=Gi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=Go(),this.name="",this.source=new J0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case Tr:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case Tr:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=z0;mn.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],h=l[8],d=l[1],g=l[5],m=l[9],v=l[2],p=l[6],u=l[10];if(Math.abs(f-d)<.01&&Math.abs(h-v)<.01&&Math.abs(m-p)<.01){if(Math.abs(f+d)<.1&&Math.abs(h+v)<.1&&Math.abs(m+p)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(g+1)/2,P=(u+1)/2,C=(f+d)/4,T=(h+v)/4,R=(m+p)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=T/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=T/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((p-m)*(p-m)+(h-v)*(h-v)+(d-f)*(d-f));return Math.abs(_)<.001&&(_=1),this.x=(p-m)/_,this.y=(h-v)/_,this.z=(d-f)/_,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hS extends Bs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Wn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new mn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new J0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fr extends hS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ev extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Dn,this.minFilter=Dn,this.wrapR=Tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vo{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],h=i[r+3];const d=s[o+0],g=s[o+1],m=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=g,e[n+2]=m,e[n+3]=v;return}if(h!==v||l!==d||c!==g||f!==m){let p=1-a;const u=l*d+c*g+f*m+h*v,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,u*_);p=Math.sin(p*C)/P,a=Math.sin(a*C)/P}const S=a*_;if(l=l*p+d*S,c=c*p+g*S,f=f*p+m*S,h=h*p+v*S,p===1-a){const P=1/Math.sqrt(l*l+c*c+f*f+h*h);l*=P,c*=P,f*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],h=s[o],d=s[o+1],g=s[o+2],m=s[o+3];return e[n]=a*m+f*h+l*g-c*d,e[n+1]=l*m+f*d+c*h-a*g,e[n+2]=c*m+f*g+a*d-l*h,e[n+3]=f*m-a*h-l*d-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),h=a(s/2),d=l(i/2),g=l(r/2),m=l(s/2);switch(o){case"XYZ":this._x=d*f*h+c*g*m,this._y=c*g*h-d*f*m,this._z=c*f*m+d*g*h,this._w=c*f*h-d*g*m;break;case"YXZ":this._x=d*f*h+c*g*m,this._y=c*g*h-d*f*m,this._z=c*f*m-d*g*h,this._w=c*f*h+d*g*m;break;case"ZXY":this._x=d*f*h-c*g*m,this._y=c*g*h+d*f*m,this._z=c*f*m+d*g*h,this._w=c*f*h-d*g*m;break;case"ZYX":this._x=d*f*h-c*g*m,this._y=c*g*h+d*f*m,this._z=c*f*m-d*g*h,this._w=c*f*h+d*g*m;break;case"YZX":this._x=d*f*h+c*g*m,this._y=c*g*h+d*f*m,this._z=c*f*m-d*g*h,this._w=c*f*h-d*g*m;break;case"XZY":this._x=d*f*h-c*g*m,this._y=c*g*h-d*f*m,this._z=c*f*m+d*g*h,this._w=c*f*h+d*g*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],h=n[10],d=i+a+h;if(d>0){const g=.5/Math.sqrt(d+1);this._w=.25/g,this._x=(f-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(f-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+f)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+f)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ln(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),f=Math.atan2(c,a),h=Math.sin((1-n)*f)/c,d=Math.sin(n*f)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*f,this.y=i+l*f+a*c-s*h,this.z=r+l*h+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Uc.copy(this).projectOnVector(e),this.sub(Uc)}reflect(e){return this.sub(Uc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(ln(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Uc=new N,Rp=new Vo;class Wo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(kn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(kn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=kn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,kn):kn.fromBufferAttribute(s,o),kn.applyMatrix4(e.matrixWorld),this.expandByPoint(kn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ha.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ha.copy(i.boundingBox)),ha.applyMatrix4(e.matrixWorld),this.union(ha)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,kn),kn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qs),pa.subVectors(this.max,Qs),Vr.subVectors(e.a,Qs),Wr.subVectors(e.b,Qs),Xr.subVectors(e.c,Qs),Di.subVectors(Wr,Vr),Ii.subVectors(Xr,Wr),cr.subVectors(Vr,Xr);let n=[0,-Di.z,Di.y,0,-Ii.z,Ii.y,0,-cr.z,cr.y,Di.z,0,-Di.x,Ii.z,0,-Ii.x,cr.z,0,-cr.x,-Di.y,Di.x,0,-Ii.y,Ii.x,0,-cr.y,cr.x,0];return!Nc(n,Vr,Wr,Xr,pa)||(n=[1,0,0,0,1,0,0,0,1],!Nc(n,Vr,Wr,Xr,pa))?!1:(ma.crossVectors(Di,Ii),n=[ma.x,ma.y,ma.z],Nc(n,Vr,Wr,Xr,pa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(kn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ui=[new N,new N,new N,new N,new N,new N,new N,new N],kn=new N,ha=new Wo,Vr=new N,Wr=new N,Xr=new N,Di=new N,Ii=new N,cr=new N,Qs=new N,pa=new N,ma=new N,ur=new N;function Nc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){ur.fromArray(t,s);const a=r.x*Math.abs(ur.x)+r.y*Math.abs(ur.y)+r.z*Math.abs(ur.z),l=e.dot(ur),c=n.dot(ur),f=i.dot(ur);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const mS=new Wo,Js=new N,Fc=new N;class Xd{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Js.subVectors(e,this.center);const n=Js.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Js,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Js.copy(e.center).add(Fc)),this.expandByPoint(Js.copy(e.center).sub(Fc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new N,Oc=new N,ga=new N,Ui=new N,kc=new N,va=new N,zc=new N;class tv{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,fi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=fi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(fi.copy(this.origin).addScaledVector(this.direction,n),fi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Oc.copy(e).add(n).multiplyScalar(.5),ga.copy(n).sub(e).normalize(),Ui.copy(this.origin).sub(Oc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(ga),a=Ui.dot(this.direction),l=-Ui.dot(ga),c=Ui.lengthSq(),f=Math.abs(1-o*o);let h,d,g,m;if(f>0)if(h=o*l-a,d=o*a-l,m=s*f,h>=0)if(d>=-m)if(d<=m){const v=1/f;h*=v,d*=v,g=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;else d<=-m?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c):d<=m?(h=0,d=Math.min(Math.max(-s,-l),s),g=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),g=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Oc).addScaledVector(ga,d),g}intersectSphere(e,n){fi.subVectors(e.center,this.origin);const i=fi.dot(this.direction),r=fi.dot(fi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),f>=0?(s=(e.min.y-d.y)*f,o=(e.max.y-d.y)*f):(s=(e.max.y-d.y)*f,o=(e.min.y-d.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,fi)!==null}intersectTriangle(e,n,i,r,s){kc.subVectors(n,e),va.subVectors(i,e),zc.crossVectors(kc,va);let o=this.direction.dot(zc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ui.subVectors(this.origin,e);const l=a*this.direction.dot(va.crossVectors(Ui,va));if(l<0)return null;const c=a*this.direction.dot(kc.cross(Ui));if(c<0||l+c>o)return null;const f=-a*Ui.dot(zc);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,n,i,r,s,o,a,l,c,f,h,d,g,m,v,p){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,h,d,g,m,v,p)}set(e,n,i,r,s,o,a,l,c,f,h,d,g,m,v,p){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=f,u[10]=h,u[14]=d,u[3]=g,u[7]=m,u[11]=v,u[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*f,g=o*h,m=a*f,v=a*h;n[0]=l*f,n[4]=-l*h,n[8]=c,n[1]=g+m*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=m+g*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*f,g=l*h,m=c*f,v=c*h;n[0]=d+v*a,n[4]=m*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*f,n[9]=-a,n[2]=g*a-m,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*f,g=l*h,m=c*f,v=c*h;n[0]=d-v*a,n[4]=-o*h,n[8]=m+g*a,n[1]=g+m*a,n[5]=o*f,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*f,g=o*h,m=a*f,v=a*h;n[0]=l*f,n[4]=m*c-g,n[8]=d*c+v,n[1]=l*h,n[5]=v*c+d,n[9]=g*c-m,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,g=o*c,m=a*l,v=a*c;n[0]=l*f,n[4]=v-d*h,n[8]=m*h+g,n[1]=h,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=g*h+m,n[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,g=o*c,m=a*l,v=a*c;n[0]=l*f,n[4]=-h,n[8]=c*f,n[1]=d*h+v,n[5]=o*f,n[9]=g*h-m,n[2]=m*h-g,n[6]=a*f,n[10]=v*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,n,i){const r=this.elements;return xn.subVectors(e,n),xn.lengthSq()===0&&(xn.z=1),xn.normalize(),Ni.crossVectors(i,xn),Ni.lengthSq()===0&&(Math.abs(i.z)===1?xn.x+=1e-4:xn.z+=1e-4,xn.normalize(),Ni.crossVectors(i,xn)),Ni.normalize(),_a.crossVectors(xn,Ni),r[0]=Ni.x,r[4]=_a.x,r[8]=xn.x,r[1]=Ni.y,r[5]=_a.y,r[9]=xn.y,r[2]=Ni.z,r[6]=_a.z,r[10]=xn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],h=i[5],d=i[9],g=i[13],m=i[2],v=i[6],p=i[10],u=i[14],_=i[3],x=i[7],S=i[11],P=i[15],C=r[0],T=r[4],R=r[8],j=r[12],y=r[1],E=r[5],k=r[9],O=r[13],W=r[2],K=r[6],H=r[10],Q=r[14],L=r[3],q=r[7],J=r[11],se=r[15];return s[0]=o*C+a*y+l*W+c*L,s[4]=o*T+a*E+l*K+c*q,s[8]=o*R+a*k+l*H+c*J,s[12]=o*j+a*O+l*Q+c*se,s[1]=f*C+h*y+d*W+g*L,s[5]=f*T+h*E+d*K+g*q,s[9]=f*R+h*k+d*H+g*J,s[13]=f*j+h*O+d*Q+g*se,s[2]=m*C+v*y+p*W+u*L,s[6]=m*T+v*E+p*K+u*q,s[10]=m*R+v*k+p*H+u*J,s[14]=m*j+v*O+p*Q+u*se,s[3]=_*C+x*y+S*W+P*L,s[7]=_*T+x*E+S*K+P*q,s[11]=_*R+x*k+S*H+P*J,s[15]=_*j+x*O+S*Q+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],h=e[6],d=e[10],g=e[14],m=e[3],v=e[7],p=e[11],u=e[15];return m*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*g-i*l*g)+v*(+n*l*g-n*c*d+s*o*d-r*o*g+r*c*f-s*l*f)+p*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*f-i*c*f)+u*(-r*a*f-n*l*h+n*a*d+r*o*h-i*o*d+i*l*f)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],h=e[9],d=e[10],g=e[11],m=e[12],v=e[13],p=e[14],u=e[15],_=h*p*c-v*d*c+v*l*g-a*p*g-h*l*u+a*d*u,x=m*d*c-f*p*c-m*l*g+o*p*g+f*l*u-o*d*u,S=f*v*c-m*h*c+m*a*g-o*v*g-f*a*u+o*h*u,P=m*h*l-f*v*l-m*a*d+o*v*d+f*a*p-o*h*p,C=n*_+i*x+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/C;return e[0]=_*T,e[1]=(v*d*s-h*p*s-v*r*g+i*p*g+h*r*u-i*d*u)*T,e[2]=(a*p*s-v*l*s+v*r*c-i*p*c-a*r*u+i*l*u)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*g-i*l*g)*T,e[4]=x*T,e[5]=(f*p*s-m*d*s+m*r*g-n*p*g-f*r*u+n*d*u)*T,e[6]=(m*l*s-o*p*s-m*r*c+n*p*c+o*r*u-n*l*u)*T,e[7]=(o*d*s-f*l*s+f*r*c-n*d*c-o*r*g+n*l*g)*T,e[8]=S*T,e[9]=(m*h*s-f*v*s-m*i*g+n*v*g+f*i*u-n*h*u)*T,e[10]=(o*v*s-m*a*s+m*i*c-n*v*c-o*i*u+n*a*u)*T,e[11]=(f*a*s-o*h*s-f*i*c+n*h*c+o*i*g-n*a*g)*T,e[12]=P*T,e[13]=(f*v*r-m*h*r+m*i*d-n*v*d-f*i*p+n*h*p)*T,e[14]=(m*a*r-o*v*r-m*i*l+n*v*l+o*i*p-n*a*p)*T,e[15]=(o*h*r-f*a*r+f*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,h=a+a,d=s*c,g=s*f,m=s*h,v=o*f,p=o*h,u=a*h,_=l*c,x=l*f,S=l*h,P=i.x,C=i.y,T=i.z;return r[0]=(1-(v+u))*P,r[1]=(g+S)*P,r[2]=(m-x)*P,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(d+u))*C,r[6]=(p+_)*C,r[7]=0,r[8]=(m+x)*T,r[9]=(p-_)*T,r[10]=(1-(d+v))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],zn.copy(this);const c=1/s,f=1/o,h=1/a;return zn.elements[0]*=c,zn.elements[1]*=c,zn.elements[2]*=c,zn.elements[4]*=f,zn.elements[5]*=f,zn.elements[6]*=f,zn.elements[8]*=h,zn.elements[9]*=h,zn.elements[10]*=h,n.setFromRotationMatrix(zn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,c=2*s/(n-e),f=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let g,m;if(a===Mi)g=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Al)g=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=m,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,c=1/(n-e),f=1/(i-r),h=1/(o-s),d=(n+e)*c,g=(i+r)*f;let m,v;if(a===Mi)m=(o+s)*h,v=-2*h;else if(a===Al)m=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-m,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new N,zn=new _t,gS=new N(0,0,0),vS=new N(1,1,1),Ni=new N,_a=new N,xn=new N,Pp=new _t,bp=new Vo;class ci{constructor(e=0,n=0,i=0,r=ci.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],h=r[2],d=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(ln(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ln(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ln(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ln(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ln(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-ln(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bp.setFromEuler(this),this.setFromQuaternion(bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ci.DEFAULT_ORDER="XYZ";class jd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const Lp=new N,Yr=new Vo,di=new _t,xa=new N,eo=new N,xS=new N,yS=new Vo,Dp=new N(1,0,0),Ip=new N(0,1,0),Up=new N(0,0,1),Np={type:"added"},SS={type:"removed"},$r={type:"childadded",child:null},Bc={type:"childremoved",child:null};class Wt extends Bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=Go(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Wt.DEFAULT_UP.clone();const e=new N,n=new ci,i=new Vo,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _t},normalMatrix:{value:new We}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Wt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new jd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.multiply(Yr),this}rotateOnWorldAxis(e,n){return Yr.setFromAxisAngle(e,n),this.quaternion.premultiply(Yr),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,n){return Lp.copy(e).applyQuaternion(this.quaternion),this.position.add(Lp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?xa.copy(e):xa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(eo,xa,this.up):di.lookAt(xa,eo,this.up),this.quaternion.setFromRotationMatrix(di),r&&(di.extractRotation(r.matrixWorld),Yr.setFromRotationMatrix(di),this.quaternion.premultiply(Yr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SS),Bc.child=e,this.dispatchEvent(Bc),Bc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),di.multiply(e.parent.matrixWorld)),e.applyMatrix4(di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,yS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),h=o(e.shapes),d=o(e.skeletons),g=o(e.animations),m=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),g.length>0&&(i.animations=g),m.length>0&&(i.nodes=m)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Wt.DEFAULT_UP=new N(0,1,0);Wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Bn=new N,hi=new N,Hc=new N,pi=new N,qr=new N,Kr=new N,Fp=new N,Gc=new N,Vc=new N,Wc=new N,Xc=new ut,jc=new ut,Yc=new ut;class Xn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Bn.subVectors(e,n),r.cross(Bn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Bn.subVectors(r,n),hi.subVectors(i,n),Hc.subVectors(e,n);const o=Bn.dot(Bn),a=Bn.dot(hi),l=Bn.dot(Hc),c=hi.dot(hi),f=hi.dot(Hc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,g=(c*l-a*f)*d,m=(o*f-a*l)*d;return s.set(1-g-m,m,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Xc.setScalar(0),jc.setScalar(0),Yc.setScalar(0),Xc.fromBufferAttribute(e,n),jc.fromBufferAttribute(e,i),Yc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Xc,s.x),o.addScaledVector(jc,s.y),o.addScaledVector(Yc,s.z),o}static isFrontFacing(e,n,i,r){return Bn.subVectors(i,n),hi.subVectors(e,n),Bn.cross(hi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bn.subVectors(this.c,this.b),hi.subVectors(this.a,this.b),Bn.cross(hi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Xn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Xn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Kr.subVectors(s,i),Gc.subVectors(e,i);const l=qr.dot(Gc),c=Kr.dot(Gc);if(l<=0&&c<=0)return n.copy(i);Vc.subVectors(e,r);const f=qr.dot(Vc),h=Kr.dot(Vc);if(f>=0&&h<=f)return n.copy(r);const d=l*h-f*c;if(d<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(qr,o);Wc.subVectors(e,s);const g=qr.dot(Wc),m=Kr.dot(Wc);if(m>=0&&g<=m)return n.copy(s);const v=g*c-l*m;if(v<=0&&c>=0&&m<=0)return a=c/(c-m),n.copy(i).addScaledVector(Kr,a);const p=f*m-g*h;if(p<=0&&h-f>=0&&g-m>=0)return Fp.subVectors(s,r),a=(h-f)/(h-f+(g-m)),n.copy(r).addScaledVector(Fp,a);const u=1/(p+v+d);return o=v*u,a=d*u,n.copy(i).addScaledVector(qr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fi={h:0,s:0,l:0},ya={h:0,s:0,l:0};function $c(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,st.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=st.workingColorSpace){return this.r=e,this.g=n,this.b=i,st.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=st.workingColorSpace){if(e=rS(e,1),n=ln(n,0,1),i=ln(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$c(o,s,e+1/3),this.g=$c(o,s,e),this.b=$c(o,s,e-1/3)}return st.toWorkingColorSpace(this,r),this}setStyle(e,n=ti){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ti){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ms(e.r),this.g=Ms(e.g),this.b=Ms(e.b),this}copyLinearToSRGB(e){return this.r=Dc(e.r),this.g=Dc(e.g),this.b=Dc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return st.fromWorkingColorSpace(qt.copy(this),e),Math.round(ln(qt.r*255,0,255))*65536+Math.round(ln(qt.g*255,0,255))*256+Math.round(ln(qt.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=st.workingColorSpace){st.fromWorkingColorSpace(qt.copy(this),n);const i=qt.r,r=qt.g,s=qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=f<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=st.workingColorSpace){return st.fromWorkingColorSpace(qt.copy(this),n),e.r=qt.r,e.g=qt.g,e.b=qt.b,e}getStyle(e=ti){st.fromWorkingColorSpace(qt.copy(this),e);const n=qt.r,i=qt.g,r=qt.b;return e!==ti?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Fi),this.setHSL(Fi.h+e,Fi.s+n,Fi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Fi),e.getHSL(ya);const i=bc(Fi.h,ya.h,n),r=bc(Fi.s,ya.s,n),s=bc(Fi.l,ya.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qt=new Qe;Qe.NAMES=nv;let MS=0;class Xo extends Bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=Go(),this.name="",this.type="Material",this.blending=ys,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=yr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=Ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ys&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==ef&&(i.blendSrc=this.blendSrc),this.blendDst!==tf&&(i.blendDst=this.blendDst),this.blendEquation!==yr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ls&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class oi extends Xo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const bt=new N,Sa=new Je;class ai{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ep,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Sa.fromBufferAttribute(this,n),Sa.applyMatrix3(e),this.setXY(n,Sa.x,Sa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix3(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyMatrix4(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.applyNormalMatrix(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)bt.fromBufferAttribute(this,n),bt.transformDirection(e),this.setXYZ(n,bt.x,bt.y,bt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Ks(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=on(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Ks(n,this.array)),n}setX(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Ks(n,this.array)),n}setY(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Ks(n,this.array)),n}setZ(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Ks(n,this.array)),n}setW(e,n){return this.normalized&&(n=on(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=on(n,this.array),i=on(i,this.array),r=on(r,this.array),s=on(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ep&&(e.usage=this.usage),e}}class iv extends ai{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rv extends ai{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Nt extends ai{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ES=0;const Rn=new _t,qc=new Wt,Zr=new N,yn=new Wo,to=new Wo,kt=new N;class Zn extends Bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Go(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?rv:iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Rn.makeRotationFromQuaternion(e),this.applyMatrix4(Rn),this}rotateX(e){return Rn.makeRotationX(e),this.applyMatrix4(Rn),this}rotateY(e){return Rn.makeRotationY(e),this.applyMatrix4(Rn),this}rotateZ(e){return Rn.makeRotationZ(e),this.applyMatrix4(Rn),this}translate(e,n,i){return Rn.makeTranslation(e,n,i),this.applyMatrix4(Rn),this}scale(e,n,i){return Rn.makeScale(e,n,i),this.applyMatrix4(Rn),this}lookAt(e){return qc.lookAt(e),qc.updateMatrix(),this.applyMatrix4(qc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Nt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];yn.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Xd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(yn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];to.setFromBufferAttribute(a),this.morphTargetsRelative?(kt.addVectors(yn.min,to.min),yn.expandByPoint(kt),kt.addVectors(yn.max,to.max),yn.expandByPoint(kt)):(yn.expandByPoint(to.min),yn.expandByPoint(to.max))}yn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)kt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(kt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)kt.fromBufferAttribute(a,c),l&&(Zr.fromBufferAttribute(e,c),kt.add(Zr)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ai(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const c=new N,f=new N,h=new N,d=new Je,g=new Je,m=new Je,v=new N,p=new N;function u(R,j,y){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,j),h.fromBufferAttribute(i,y),d.fromBufferAttribute(s,R),g.fromBufferAttribute(s,j),m.fromBufferAttribute(s,y),f.sub(c),h.sub(c),g.sub(d),m.sub(d);const E=1/(g.x*m.y-m.x*g.y);isFinite(E)&&(v.copy(f).multiplyScalar(m.y).addScaledVector(h,-g.y).multiplyScalar(E),p.copy(h).multiplyScalar(g.x).addScaledVector(f,-m.x).multiplyScalar(E),a[R].add(v),a[j].add(v),a[y].add(v),l[R].add(p),l[j].add(p),l[y].add(p))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,j=_.length;R<j;++R){const y=_[R],E=y.start,k=y.count;for(let O=E,W=E+k;O<W;O+=3)u(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const x=new N,S=new N,P=new N,C=new N;function T(R){P.fromBufferAttribute(r,R),C.copy(P);const j=a[R];x.copy(j),x.sub(P.multiplyScalar(P.dot(j))).normalize(),S.crossVectors(C,j);const E=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,j=_.length;R<j;++R){const y=_[R],E=y.start,k=y.count;for(let O=E,W=E+k;O<W;O+=3)T(e.getX(O+0)),T(e.getX(O+1)),T(e.getX(O+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ai(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,g=i.count;d<g;d++)i.setXYZ(d,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,f=new N,h=new N;if(e)for(let d=0,g=e.count;d<g;d+=3){const m=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);r.fromBufferAttribute(n,m),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,p),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),a.fromBufferAttribute(i,m),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,p),a.add(f),l.add(f),c.add(f),i.setXYZ(m,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,g=n.count;d<g;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),f.subVectors(o,s),h.subVectors(r,s),f.cross(h),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)kt.fromBufferAttribute(e,n),kt.normalize(),e.setXYZ(n,kt.x,kt.y,kt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,h=a.normalized,d=new c.constructor(l.length*f);let g=0,m=0;for(let v=0,p=l.length;v<p;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*f;for(let u=0;u<f;u++)d[m++]=c[g++]}return new ai(d,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,h=c.length;f<h;f++){const d=c[f],g=e(d,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let h=0,d=c.length;h<d;h++){const g=c[h];f.push(g.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],h=s[c];for(let d=0,g=h.length;d<g;d++)f.push(h[d].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new _t,fr=new tv,Ma=new Xd,kp=new N,Ea=new N,wa=new N,Ta=new N,Kc=new N,Aa=new N,zp=new N,Ca=new N;class pe extends Wt{constructor(e=new Zn,n=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Aa.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],h=s[l];f!==0&&(Kc.fromBufferAttribute(h,e),o?Aa.addScaledVector(Kc,f):Aa.addScaledVector(Kc.sub(n),f))}n.add(Aa)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ma.copy(i.boundingSphere),Ma.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ma.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ma,kp)===null||fr.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(Op.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Op),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,d=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],u=o[p.materialIndex],_=Math.max(p.start,g.start),x=Math.min(a.count,Math.min(p.start+p.count,g.start+g.count));for(let S=_,P=x;S<P;S+=3){const C=a.getX(S),T=a.getX(S+1),R=a.getX(S+2);r=Ra(this,u,e,i,c,f,h,C,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const m=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let p=m,u=v;p<u;p+=3){const _=a.getX(p),x=a.getX(p+1),S=a.getX(p+2);r=Ra(this,o,e,i,c,f,h,_,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,v=d.length;m<v;m++){const p=d[m],u=o[p.materialIndex],_=Math.max(p.start,g.start),x=Math.min(l.count,Math.min(p.start+p.count,g.start+g.count));for(let S=_,P=x;S<P;S+=3){const C=S,T=S+1,R=S+2;r=Ra(this,u,e,i,c,f,h,C,T,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=p.materialIndex,n.push(r))}}else{const m=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let p=m,u=v;p<u;p+=3){const _=p,x=p+1,S=p+2;r=Ra(this,o,e,i,c,f,h,_,x,S),r&&(r.faceIndex=Math.floor(p/3),n.push(r))}}}}function wS(t,e,n,i,r,s,o,a){let l;if(e.side===pn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;Ca.copy(a),Ca.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ca);return c<n.near||c>n.far?null:{distance:c,point:Ca.clone(),object:t}}function Ra(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ea),t.getVertexPosition(l,wa),t.getVertexPosition(c,Ta);const f=wS(t,e,n,i,Ea,wa,Ta,zp);if(f){const h=new N;Xn.getBarycoord(zp,Ea,wa,Ta,h),r&&(f.uv=Xn.getInterpolatedAttribute(r,a,l,c,h,new Je)),s&&(f.uv1=Xn.getInterpolatedAttribute(s,a,l,c,h,new Je)),o&&(f.normal=Xn.getInterpolatedAttribute(o,a,l,c,h,new N),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new N,materialIndex:0};Xn.getNormal(Ea,wa,Ta,d.normal),f.face=d,f.barycoord=h}return f}class et extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],h=[];let d=0,g=0;m("z","y","x",-1,-1,i,n,e,o,s,0),m("z","y","x",1,-1,i,n,-e,o,s,1),m("x","z","y",1,1,e,i,n,r,o,2),m("x","z","y",1,-1,e,i,-n,r,o,3),m("x","y","z",1,-1,e,n,i,r,s,4),m("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(f,3)),this.setAttribute("uv",new Nt(h,2));function m(v,p,u,_,x,S,P,C,T,R,j){const y=S/T,E=P/R,k=S/2,O=P/2,W=C/2,K=T+1,H=R+1;let Q=0,L=0;const q=new N;for(let J=0;J<H;J++){const se=J*E-O;for(let Ce=0;Ce<K;Ce++){const De=Ce*y-k;q[v]=De*_,q[p]=se*x,q[u]=W,c.push(q.x,q.y,q.z),q[v]=0,q[p]=0,q[u]=C>0?1:-1,f.push(q.x,q.y,q.z),h.push(Ce/T),h.push(1-J/R),Q+=1}}for(let J=0;J<R;J++)for(let se=0;se<T;se++){const Ce=d+se+K*J,De=d+se+K*(J+1),V=d+(se+1)+K*(J+1),ne=d+(se+1)+K*J;l.push(Ce,De,ne),l.push(De,V,ne),L+=6}a.addGroup(g,L,j),g+=L,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new et(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Fs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Qt(t){const e={};for(let n=0;n<t.length;n++){const i=Fs(t[n]);for(const r in i)e[r]=i[r]}return e}function TS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:st.workingColorSpace}const AS={clone:Fs,merge:Qt};var CS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends Xo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Fs(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ov extends Wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new N,Bp=new Je,Hp=new Je;class en extends ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Bf*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Bf*2*Math.atan(Math.tan(Pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,Bp,Hp),n.subVectors(Hp,Bp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Pc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class PS extends Wt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new en(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new en(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new en(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new en(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new en(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const c=new en(Qr,Jr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Al)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(h,d,g),e.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class av extends mn{constructor(e,n,i,r,s,o,a,l,c,f){e=e!==void 0?e:[],n=n!==void 0?n:Ds,super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Fr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new av(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Wn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new et(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:pn,blending:Ji});s.uniforms.tEquirect.value=n;const o=new pe(r,s),a=n.minFilter;return n.minFilter===Ar&&(n.minFilter=Wn),new PS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Zc=new N,LS=new N,DS=new We;class _r{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Zc.subVectors(i,n).cross(LS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Zc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DS.getNormalMatrix(e),r=this.coplanarPoint(Zc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new Xd,Pa=new N;class Yd{constructor(e=new _r,n=new _r,i=new _r,r=new _r,s=new _r,o=new _r){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],f=r[5],h=r[6],d=r[7],g=r[8],m=r[9],v=r[10],p=r[11],u=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,p-g,S-u).normalize(),i[1].setComponents(l+s,d+c,p+g,S+u).normalize(),i[2].setComponents(l+o,d+f,p+m,S+_).normalize(),i[3].setComponents(l-o,d-f,p-m,S-_).normalize(),i[4].setComponents(l-a,d-h,p-v,S-x).normalize(),n===Mi)i[5].setComponents(l+a,d+h,p+v,S+x).normalize();else if(n===Al)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Pa.x=r.normal.x>0?e.max.x:e.min.x,Pa.y=r.normal.y>0?e.max.y:e.min.y,Pa.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Pa)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,f),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const f=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,f);else{h.sort((g,m)=>g.start-m.start);let d=0;for(let g=1;g<h.length;g++){const m=h[d],v=h[g];v.start<=m.start+m.count+1?m.count=Math.max(m.count,v.start+v.count-m.start):(++d,h[d]=v)}h.length=d+1;for(let g=0,m=h.length;g<m;g++){const v=h[g];t.bufferSubData(c,v.start*f.BYTES_PER_ELEMENT,f,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class It extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,h=e/a,d=n/l,g=[],m=[],v=[],p=[];for(let u=0;u<f;u++){const _=u*d-o;for(let x=0;x<c;x++){const S=x*h-s;m.push(S,-_,0),v.push(0,0,1),p.push(x/a),p.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,S=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;g.push(x,S,C),g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.widthSegments,e.heightSegments)}}var US=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,NS=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,FS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,OS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,kS=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,zS=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,BS=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,HS=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,GS=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,VS=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,WS=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,XS=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,jS=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,YS=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,$S=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,qS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,KS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ZS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,QS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,JS=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,eM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,tM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,nM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,iM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,rM=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,sM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,oM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,aM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,lM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,cM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",fM=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,dM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,pM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,mM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,gM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,vM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,_M=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,xM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,yM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,SM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,MM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,EM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,wM=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,TM=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,AM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,CM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,RM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,PM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,LM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,DM=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,IM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,UM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,NM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,FM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,OM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,kM=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zM=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,BM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,HM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,GM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,VM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,XM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,YM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,$M=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,KM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,QM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,JM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,eE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,tE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,nE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,iE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,rE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,sE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,oE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,aE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,lE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,cE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,uE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,fE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,dE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,pE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,mE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,gE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,vE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,_E=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,xE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,yE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,SE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ME=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,EE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,wE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,TE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,AE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,CE=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,RE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,PE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,DE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const IE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,UE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FE=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,kE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,BE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,HE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,GE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,VE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,WE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,YE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,$E=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,KE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,QE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,e1=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,t1=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,n1=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,i1=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,r1=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,s1=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,o1=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,a1=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,l1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,c1=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,u1=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,f1=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,d1=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ve={alphahash_fragment:US,alphahash_pars_fragment:NS,alphamap_fragment:FS,alphamap_pars_fragment:OS,alphatest_fragment:kS,alphatest_pars_fragment:zS,aomap_fragment:BS,aomap_pars_fragment:HS,batching_pars_vertex:GS,batching_vertex:VS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:jS,iridescence_fragment:YS,bumpmap_pars_fragment:$S,clipping_planes_fragment:qS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:QS,color_fragment:JS,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:fM,envmap_fragment:dM,envmap_common_pars_fragment:hM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:vM,fog_pars_vertex:_M,fog_fragment:xM,fog_pars_fragment:yM,gradientmap_pars_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:wM,lights_pars_begin:TM,lights_toon_fragment:CM,lights_toon_pars_fragment:RM,lights_phong_fragment:PM,lights_phong_pars_fragment:bM,lights_physical_fragment:LM,lights_physical_pars_fragment:DM,lights_fragment_begin:IM,lights_fragment_maps:UM,lights_fragment_end:NM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:zM,map_fragment:BM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphinstance_vertex:jM,morphcolor_vertex:YM,morphnormal_vertex:$M,morphtarget_pars_vertex:qM,morphtarget_vertex:KM,normal_fragment_begin:ZM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:fE,dithering_pars_fragment:dE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:vE,shadowmask_pars_fragment:_E,skinbase_vertex:xE,skinning_pars_vertex:yE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:wE,tonemapping_fragment:TE,tonemapping_pars_fragment:AE,transmission_fragment:CE,transmission_pars_fragment:RE,uv_pars_fragment:PE,uv_pars_vertex:bE,uv_vertex:LE,worldpos_vertex:DE,background_vert:IE,background_frag:UE,backgroundCube_vert:NE,backgroundCube_frag:FE,cube_vert:OE,cube_frag:kE,depth_vert:zE,depth_frag:BE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:jE,meshbasic_vert:YE,meshbasic_frag:$E,meshlambert_vert:qE,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:e1,meshphong_vert:t1,meshphong_frag:n1,meshphysical_vert:i1,meshphysical_frag:r1,meshtoon_vert:s1,meshtoon_frag:o1,points_vert:a1,points_frag:l1,shadow_vert:c1,shadow_frag:u1,sprite_vert:f1,sprite_frag:d1},ge={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},ni={basic:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:Ve.meshbasic_vert,fragmentShader:Ve.meshbasic_frag},lambert:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshlambert_vert,fragmentShader:Ve.meshlambert_frag},phong:{uniforms:Qt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ve.meshphong_vert,fragmentShader:Ve.meshphong_frag},standard:{uniforms:Qt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag},toon:{uniforms:Qt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ve.meshtoon_vert,fragmentShader:Ve.meshtoon_frag},matcap:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:Ve.meshmatcap_vert,fragmentShader:Ve.meshmatcap_frag},points:{uniforms:Qt([ge.points,ge.fog]),vertexShader:Ve.points_vert,fragmentShader:Ve.points_frag},dashed:{uniforms:Qt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ve.linedashed_vert,fragmentShader:Ve.linedashed_frag},depth:{uniforms:Qt([ge.common,ge.displacementmap]),vertexShader:Ve.depth_vert,fragmentShader:Ve.depth_frag},normal:{uniforms:Qt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:Ve.meshnormal_vert,fragmentShader:Ve.meshnormal_frag},sprite:{uniforms:Qt([ge.sprite,ge.fog]),vertexShader:Ve.sprite_vert,fragmentShader:Ve.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ve.background_vert,fragmentShader:Ve.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ve.backgroundCube_vert,fragmentShader:Ve.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ve.cube_vert,fragmentShader:Ve.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ve.equirect_vert,fragmentShader:Ve.equirect_frag},distanceRGBA:{uniforms:Qt([ge.common,ge.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ve.distanceRGBA_vert,fragmentShader:Ve.distanceRGBA_frag},shadow:{uniforms:Qt([ge.lights,ge.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ve.shadow_vert,fragmentShader:Ve.shadow_frag}};ni.physical={uniforms:Qt([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ve.meshphysical_vert,fragmentShader:Ve.meshphysical_frag};const ba={r:0,b:0,g:0},hr=new ci,h1=new _t;function p1(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,f,h=null,d=0,g=null;function m(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function v(_){let x=!1;const S=m(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function p(_,x){const S=m(x);S&&(S.isCubeTexture||S.mapping===$l)?(f===void 0&&(f=new pe(new et(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Fs(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,C,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),hr.copy(x.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),f.material.uniforms.envMap.value=S,f.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(h1.makeRotationFromEuler(hr)),f.material.toneMapped=st.getTransfer(S.colorSpace)!==pt,(h!==S||d!==S.version||g!==t.toneMapping)&&(f.material.needsUpdate=!0,h=S,d=S.version,g=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new pe(new It(2,2),new rr({name:"BackgroundMaterial",uniforms:Fs(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=st.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,g=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,x){_.getRGB(ba,sv(t)),i.buffers.color.setClear(ba.r,ba.g,ba.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:v,addToRenderList:p}}function m1(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(y,E,k,O,W){let K=!1;const H=h(O,k,E);s!==H&&(s=H,c(s.object)),K=g(y,O,k,W),K&&m(y,O,k,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(y,E,k,O),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function f(y){return t.deleteVertexArray(y)}function h(y,E,k){const O=k.wireframe===!0;let W=i[y.id];W===void 0&&(W={},i[y.id]=W);let K=W[E.id];K===void 0&&(K={},W[E.id]=K);let H=K[O];return H===void 0&&(H=d(l()),K[O]=H),H}function d(y){const E=[],k=[],O=[];for(let W=0;W<n;W++)E[W]=0,k[W]=0,O[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:O,object:y,attributes:{},index:null}}function g(y,E,k,O){const W=s.attributes,K=E.attributes;let H=0;const Q=k.getAttributes();for(const L in Q)if(Q[L].location>=0){const J=W[L];let se=K[L];if(se===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;H++}return s.attributesNum!==H||s.index!==O}function m(y,E,k,O){const W={},K=E.attributes;let H=0;const Q=k.getAttributes();for(const L in Q)if(Q[L].location>=0){let J=K[L];J===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),W[L]=se,H++}s.attributes=W,s.attributesNum=H,s.index=O}function v(){const y=s.newAttributes;for(let E=0,k=y.length;E<k;E++)y[E]=0}function p(y){u(y,0)}function u(y,E){const k=s.newAttributes,O=s.enabledAttributes,W=s.attributeDivisors;k[y]=1,O[y]===0&&(t.enableVertexAttribArray(y),O[y]=1),W[y]!==E&&(t.vertexAttribDivisor(y,E),W[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let k=0,O=E.length;k<O;k++)E[k]!==y[k]&&(t.disableVertexAttribArray(k),E[k]=0)}function x(y,E,k,O,W,K,H){H===!0?t.vertexAttribIPointer(y,E,k,W,K):t.vertexAttribPointer(y,E,k,O,W,K)}function S(y,E,k,O){v();const W=O.attributes,K=k.getAttributes(),H=E.defaultAttributeValues;for(const Q in K){const L=K[Q];if(L.location>=0){let q=W[Q];if(q===void 0&&(Q==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),Q==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const J=q.normalized,se=q.itemSize,Ce=e.get(q);if(Ce===void 0)continue;const De=Ce.buffer,V=Ce.type,ne=Ce.bytesPerElement,he=V===t.INT||V===t.UNSIGNED_INT||q.gpuType===kd;if(q.isInterleavedBufferAttribute){const me=q.data,Ie=me.stride,Re=q.offset;if(me.isInstancedInterleavedBuffer){for(let He=0;He<L.locationSize;He++)u(L.location+He,me.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let He=0;He<L.locationSize;He++)p(L.location+He);t.bindBuffer(t.ARRAY_BUFFER,De);for(let He=0;He<L.locationSize;He++)x(L.location+He,se/L.locationSize,V,J,Ie*ne,(Re+se/L.locationSize*He)*ne,he)}else{if(q.isInstancedBufferAttribute){for(let me=0;me<L.locationSize;me++)u(L.location+me,q.meshPerAttribute);y.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<L.locationSize;me++)p(L.location+me);t.bindBuffer(t.ARRAY_BUFFER,De);for(let me=0;me<L.locationSize;me++)x(L.location+me,se/L.locationSize,V,J,se*ne,se/L.locationSize*me*ne,he)}}else if(H!==void 0){const J=H[Q];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(L.location,J);break;case 3:t.vertexAttrib3fv(L.location,J);break;case 4:t.vertexAttrib4fv(L.location,J);break;default:t.vertexAttrib1fv(L.location,J)}}}}_()}function P(){R();for(const y in i){const E=i[y];for(const k in E){const O=E[k];for(const W in O)f(O[W].object),delete O[W];delete E[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const k in E){const O=E[k];for(const W in O)f(O[W].object),delete O[W];delete E[k]}delete i[y.id]}function T(y){for(const E in i){const k=i[E];if(k[y.id]===void 0)continue;const O=k[y.id];for(const W in O)f(O[W].object),delete O[W];delete k[y.id]}}function R(){j(),o=!0,s!==r&&(s=r,c(s.object))}function j(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:j,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:T,initAttributes:v,enableAttribute:p,disableUnusedAttributes:_}}function g1(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,h){h!==0&&(t.drawArraysInstanced(i,c,f,h),n.update(f,i,h))}function a(c,f,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,h);let g=0;for(let m=0;m<h;m++)g+=f[m];n.update(g,i,1)}function l(c,f,h,d){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<c.length;m++)o(c[m],f[m],d[m]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,f,0,d,0,h);let m=0;for(let v=0;v<h;v++)m+=f[v];for(let v=0;v<d.length;v++)n.update(m,i,d[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function v1(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Yn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Ho&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Ri&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const T=e.get("EXT_clip_control");T.clipControlEXT(T.LOWER_LEFT_EXT,T.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),m=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),p=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:g,maxVertexTextures:m,maxTextureSize:v,maxCubemapSize:p,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function _1(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new _r,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const g=h.length!==0||d||i!==0||r;return r=d,i=h.length,g},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=f(h,d,0)},this.setState=function(h,d,g){const m=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,u=t.get(h);if(!r||m===null||m.length===0||s&&!p)s?f(null):c();else{const _=s?0:i,x=_*4;let S=u.clippingState||null;l.value=S,S=f(m,d,x,g);for(let P=0;P!==x;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(h,d,g,m){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=l.value,m!==!0||p===null){const u=g+v*4,_=d.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<u)&&(p=new Float32Array(u));for(let x=0,S=g;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function x1(t){let e=new WeakMap;function n(o,a){return a===uf?o.mapping=Ds:a===ff&&(o.mapping=Is),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===uf||a===ff)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cv extends ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const hs=4,Gp=[.125,.215,.35,.446,.526,.582],Sr=20,Qc=new cv,Vp=new Qe;let Jc=null,eu=0,tu=0,nu=!1;const xr=(1+Math.sqrt(5))/2,es=1/xr,Wp=[new N(-xr,es,0),new N(xr,es,0),new N(-es,0,xr),new N(es,0,xr),new N(0,xr,-es),new N(0,xr,es),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Jc,eu,tu),this._renderer.xr.enabled=nu,e.scissorTest=!1,La(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Ds||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Jc=this._renderer.getRenderTarget(),eu=this._renderer.getActiveCubeFace(),tu=this._renderer.getActiveMipmapLevel(),nu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Wn,minFilter:Wn,generateMipmaps:!1,type:Ho,format:Yn,colorSpace:lr,depthBuffer:!1},r=jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=y1(s)),this._blurMaterial=S1(s,e,n)}return r}_compileMaterial(e){const n=new pe(this._lodPlanes[0],e);this._renderer.compile(n,Qc)}_sceneToCubeUV(e,n,i,r){const a=new en(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,d=f.toneMapping;f.getClearColor(Vp),f.toneMapping=er,f.autoClear=!1;const g=new oi({name:"PMREM.Background",side:pn,depthWrite:!1,depthTest:!1}),m=new pe(new et,g);let v=!1;const p=e.background;p?p.isColor&&(g.color.copy(p),e.background=null,v=!0):(g.color.copy(Vp),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;La(r,_*x,u>2?x:0,x,x),f.setRenderTarget(r),v&&f.render(m,a),f.render(e,a)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=d,f.autoClear=h,e.background=p}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Ds||e.mapping===Is;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new pe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;La(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Qc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wp[(r-s-1)%Wp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new pe(this._lodPlanes[r],c),d=c.uniforms,g=this._sizeLods[i]-1,m=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Sr-1),v=s/m,p=isFinite(s)?1+Math.floor(f*v):Sr;p>Sr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Sr}`);const u=[];let _=0;for(let T=0;T<Sr;++T){const R=T/v,j=Math.exp(-R*R/2);u.push(j),T===0?_+=j:T<p&&(_+=2*j)}for(let T=0;T<u.length;T++)u[T]=u[T]/_;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=u,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:x}=this;d.dTheta.value=m,d.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-hs?r-x+hs:0),C=4*(this._cubeSize-S);La(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(h,Qc)}}function y1(t){const e=[],n=[],i=[];let r=t;const s=t-hs+1+Gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-hs?l=Gp[o-t+hs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),f=-c,h=1+c,d=[f,f,h,f,h,h,f,f,h,h,f,h],g=6,m=6,v=3,p=2,u=1,_=new Float32Array(v*m*g),x=new Float32Array(p*m*g),S=new Float32Array(u*m*g);for(let C=0;C<g;C++){const T=C%3*2/3-1,R=C>2?0:-1,j=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];_.set(j,v*m*C),x.set(d,p*m*C);const y=[C,C,C,C,C,C];S.set(y,u*m*C)}const P=new Zn;P.setAttribute("position",new ai(_,v)),P.setAttribute("uv",new ai(x,p)),P.setAttribute("faceIndex",new ai(S,u)),e.push(P),r>hs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jp(t,e,n){const i=new Fr(t,e,n);return i.texture.mapping=$l,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function La(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function S1(t,e,n){const i=new Float32Array(Sr),r=new N(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:Sr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function Yp(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $p(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:$d(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function $d(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function M1(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===uf||l===ff,f=l===Ds||l===Is;if(c||f){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new Xp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||f&&g&&r(g)?(n===null&&(n=new Xp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function E1(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Za("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function w1(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const m in d.attributes)e.remove(d.attributes[m]);for(const m in d.morphAttributes){const v=d.morphAttributes[m];for(let p=0,u=v.length;p<u;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete r[d.id];const g=s.get(d);g&&(e.remove(g),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const m in d)e.update(d[m],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const m in g){const v=g[m];for(let p=0,u=v.length;p<u;p++)e.update(v[p],t.ARRAY_BUFFER)}}function c(h){const d=[],g=h.index,m=h.attributes.position;let v=0;if(g!==null){const _=g.array;v=g.version;for(let x=0,S=_.length;x<S;x+=3){const P=_[x+0],C=_[x+1],T=_[x+2];d.push(P,C,C,T,T,P)}}else if(m!==void 0){const _=m.array;v=m.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const P=x+0,C=x+1,T=x+2;d.push(P,C,C,T,T,P)}}else return;const p=new(Q0(d)?rv:iv)(d,1);p.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,p)}function f(h){const d=s.get(h);if(d){const g=h.index;g!==null&&d.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:f}}function T1(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,g){t.drawElements(i,g,s,d*o),n.update(g,i,1)}function c(d,g,m){m!==0&&(t.drawElementsInstanced(i,g,s,d*o,m),n.update(g,i,m))}function f(d,g,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,d,0,m);let p=0;for(let u=0;u<m;u++)p+=g[u];n.update(p,i,1)}function h(d,g,m,v){if(m===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let u=0;u<d.length;u++)c(d[u]/o,g[u],v[u]);else{p.multiDrawElementsInstancedWEBGL(i,g,0,s,d,0,v,0,m);let u=0;for(let _=0;_<m;_++)u+=g[_];for(let _=0;_<v.length;_++)n.update(u,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function A1(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function C1(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=f!==void 0?f.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;m===!0&&(S=1),v===!0&&(S=2),p===!0&&(S=3);let P=a.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const T=new Float32Array(P*C*4*h),R=new ev(T,P,C,h);R.type=Si,R.needsUpdate=!0;const j=S*4;for(let E=0;E<h;E++){const k=u[E],O=_[E],W=x[E],K=P*C*4*E;for(let H=0;H<k.count;H++){const Q=H*j;m===!0&&(r.fromBufferAttribute(k,H),T[K+Q+0]=r.x,T[K+Q+1]=r.y,T[K+Q+2]=r.z,T[K+Q+3]=0),v===!0&&(r.fromBufferAttribute(O,H),T[K+Q+4]=r.x,T[K+Q+5]=r.y,T[K+Q+6]=r.z,T[K+Q+7]=0),p===!0&&(r.fromBufferAttribute(W,H),T[K+Q+8]=r.x,T[K+Q+9]=r.y,T[K+Q+10]=r.z,T[K+Q+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new Je(P,C)},i.set(a,d),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let m=0;for(let p=0;p<c.length;p++)m+=c[p];const v=a.morphTargetsRelative?1:1-m;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function R1(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,h=e.get(l,f);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class uv extends mn{constructor(e,n,i,r,s,o,a,l,c,f=Ss){if(f!==Ss&&f!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Ss&&(i=Nr),i===void 0&&f===Ns&&(i=Us),super(null,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Dn,this.minFilter=l!==void 0?l:Dn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const fv=new mn,qp=new uv(1,1),dv=new ev,hv=new pS,pv=new av,Kp=[],Zp=[],Qp=new Float32Array(16),Jp=new Float32Array(9),em=new Float32Array(4);function Hs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kp[r];if(s===void 0&&(s=new Float32Array(r),Kp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ft(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ot(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Kl(t,e){let n=Zp[e];n===void 0&&(n=new Int32Array(e),Zp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function P1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function b1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2fv(this.addr,e),Ot(n,e)}}function L1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ft(n,e))return;t.uniform3fv(this.addr,e),Ot(n,e)}}function D1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4fv(this.addr,e),Ot(n,e)}}function I1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;em.set(i),t.uniformMatrix2fv(this.addr,!1,em),Ot(n,i)}}function U1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Jp.set(i),t.uniformMatrix3fv(this.addr,!1,Jp),Ot(n,i)}}function N1(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ft(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ot(n,e)}else{if(Ft(n,i))return;Qp.set(i),t.uniformMatrix4fv(this.addr,!1,Qp),Ot(n,i)}}function F1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function O1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2iv(this.addr,e),Ot(n,e)}}function k1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3iv(this.addr,e),Ot(n,e)}}function z1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4iv(this.addr,e),Ot(n,e)}}function B1(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function H1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ft(n,e))return;t.uniform2uiv(this.addr,e),Ot(n,e)}}function G1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ft(n,e))return;t.uniform3uiv(this.addr,e),Ot(n,e)}}function V1(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ft(n,e))return;t.uniform4uiv(this.addr,e),Ot(n,e)}}function W1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qp.compareFunction=Z0,s=qp):s=fv,n.setTexture2D(e||s,r)}function X1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hv,r)}function j1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pv,r)}function Y1(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||dv,r)}function $1(t){switch(t){case 5126:return P1;case 35664:return b1;case 35665:return L1;case 35666:return D1;case 35674:return I1;case 35675:return U1;case 35676:return N1;case 5124:case 35670:return F1;case 35667:case 35671:return O1;case 35668:case 35672:return k1;case 35669:case 35673:return z1;case 5125:return B1;case 36294:return H1;case 36295:return G1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return W1;case 35679:case 36299:case 36307:return X1;case 35680:case 36300:case 36308:case 36293:return j1;case 36289:case 36303:case 36311:case 36292:return Y1}}function q1(t,e){t.uniform1fv(this.addr,e)}function K1(t,e){const n=Hs(e,this.size,2);t.uniform2fv(this.addr,n)}function Z1(t,e){const n=Hs(e,this.size,3);t.uniform3fv(this.addr,n)}function Q1(t,e){const n=Hs(e,this.size,4);t.uniform4fv(this.addr,n)}function J1(t,e){const n=Hs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ew(t,e){const n=Hs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function tw(t,e){const n=Hs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function nw(t,e){t.uniform1iv(this.addr,e)}function iw(t,e){t.uniform2iv(this.addr,e)}function rw(t,e){t.uniform3iv(this.addr,e)}function sw(t,e){t.uniform4iv(this.addr,e)}function ow(t,e){t.uniform1uiv(this.addr,e)}function aw(t,e){t.uniform2uiv(this.addr,e)}function lw(t,e){t.uniform3uiv(this.addr,e)}function cw(t,e){t.uniform4uiv(this.addr,e)}function uw(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||fv,s[o])}function fw(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||hv,s[o])}function dw(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||pv,s[o])}function hw(t,e,n){const i=this.cache,r=e.length,s=Kl(n,r);Ft(i,s)||(t.uniform1iv(this.addr,s),Ot(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||dv,s[o])}function pw(t){switch(t){case 5126:return q1;case 35664:return K1;case 35665:return Z1;case 35666:return Q1;case 35674:return J1;case 35675:return ew;case 35676:return tw;case 5124:case 35670:return nw;case 35667:case 35671:return iw;case 35668:case 35672:return rw;case 35669:case 35673:return sw;case 5125:return ow;case 36294:return aw;case 36295:return lw;case 36296:return cw;case 35678:case 36198:case 36298:case 36306:case 35682:return uw;case 35679:case 36299:case 36307:return fw;case 35680:case 36300:case 36308:case 36293:return dw;case 36289:case 36303:case 36311:case 36292:return hw}}class mw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$1(n.type)}}class gw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=pw(n.type)}}class vw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const iu=/(\w+)(\])?(\[|\.)?/g;function tm(t,e){t.seq.push(e),t.map[e.id]=e}function _w(t,e,n){const i=t.name,r=i.length;for(iu.lastIndex=0;;){const s=iu.exec(i),o=iu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tm(n,c===void 0?new mw(a,t,e):new gw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new vw(a),tm(n,h)),n=h}}}class Qa{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);_w(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const xw=37297;let yw=0;function Sw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function Mw(t){const e=st.getPrimaries(st.workingColorSpace),n=st.getPrimaries(t);let i;switch(e===n?i="":e===Tl&&n===wl?i="LinearDisplayP3ToLinearSRGB":e===wl&&n===Tl&&(i="LinearSRGBToLinearDisplayP3"),t){case lr:case ql:return[i,"LinearTransferOETF"];case ti:case Wd:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Sw(t.getShaderSource(e),o)}else return r}function Ew(t,e){const n=Mw(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function ww(t,e){let n;switch(e){case Hy:n="Linear";break;case Gy:n="Reinhard";break;case Vy:n="Cineon";break;case Yl:n="ACESFilmic";break;case Xy:n="AgX";break;case jy:n="Neutral";break;case Wy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Da=new N;function Tw(){st.getLuminanceCoefficients(Da);const t=Da.x.toFixed(4),e=Da.y.toFixed(4),n=Da.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Aw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ao).join(`
`)}function Cw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Rw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ao(t){return t!==""}function rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Pw=/^[ \t]*#include +<([\w\d./]+)>/gm;function Hf(t){return t.replace(Pw,Lw)}const bw=new Map;function Lw(t,e){let n=Ve[e];if(n===void 0){const i=bw.get(e);if(i!==void 0)n=Ve[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Hf(n)}const Dw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(t){return t.replace(Dw,Iw)}function Iw(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Uw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jl?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===mi&&(e="SHADOWMAP_TYPE_VSM"),e}function Nw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Ds:case Is:e="ENVMAP_TYPE_CUBE";break;case $l:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Fw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Is:e="ENVMAP_MODE_REFRACTION";break}return e}function Ow(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case k0:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case By:e="ENVMAP_BLENDING_ADD";break}return e}function kw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function zw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Uw(n),c=Nw(n),f=Fw(n),h=Ow(n),d=kw(n),g=Aw(n),m=Cw(s),v=r.createProgram();let p,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(p=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ao).join(`
`),p.length>0&&(p+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m].filter(ao).join(`
`),u.length>0&&(u+=`
`)):(p=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ao).join(`
`),u=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,m,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?Ve.tonemapping_pars_fragment:"",n.toneMapping!==er?ww("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ve.colorspace_pars_fragment,Ew("linearToOutputTexel",n.outputColorSpace),Tw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ao).join(`
`)),o=Hf(o),o=rm(o,n),o=sm(o,n),a=Hf(a),a=rm(a,n),a=sm(a,n),o=om(o),a=om(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,u=["#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+p+o,S=_+u+a,P=nm(r,r.VERTEX_SHADER,x),C=nm(r,r.FRAGMENT_SHADER,S);r.attachShader(v,P),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function T(E){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),O=r.getShaderInfoLog(P).trim(),W=r.getShaderInfoLog(C).trim();let K=!0,H=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,C);else{const Q=im(r,P,"vertex"),L=im(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+Q+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||W==="")&&(H=!1);H&&(E.diagnostics={runnable:K,programLog:k,vertexShader:{log:O,prefix:p},fragmentShader:{log:W,prefix:u}})}r.deleteShader(P),r.deleteShader(C),R=new Qa(r,v),j=Rw(r,v)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let j;this.getAttributes=function(){return j===void 0&&T(this),j};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,xw)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=yw++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let Bw=0;class Hw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Gw(e),n.set(e,i)),i}}class Gw{constructor(e){this.id=Bw++,this.code=e,this.usedTimes=0}}function Vw(t,e,n,i,r,s,o){const a=new jd,l=new Hw,c=new Set,f=[],h=r.logarithmicDepthBuffer,d=r.reverseDepthBuffer,g=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,k,O,W){const K=O.fog,H=W.geometry,Q=y.isMeshStandardMaterial?O.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||Q),q=L&&L.mapping===$l?L.image.height:null,J=v[y.type];y.precision!==null&&(m=r.getMaxPrecision(y.precision),m!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",m,"instead."));const se=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ce=se!==void 0?se.length:0;let De=0;H.morphAttributes.position!==void 0&&(De=1),H.morphAttributes.normal!==void 0&&(De=2),H.morphAttributes.color!==void 0&&(De=3);let V,ne,he,me;if(J){const Ct=ni[J];V=Ct.vertexShader,ne=Ct.fragmentShader}else V=y.vertexShader,ne=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const Ie=t.getRenderTarget(),Re=W.isInstancedMesh===!0,He=W.isBatchedMesh===!0,qe=!!y.map,Ue=!!y.matcap,b=!!L,At=!!y.aoMap,Ne=!!y.lightMap,Xe=!!y.bumpMap,Te=!!y.normalMap,Ge=!!y.displacementMap,Le=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,F=y.anisotropy>0,X=y.clearcoat>0,ee=y.dispersion>0,$=y.iridescence>0,le=y.sheen>0,fe=y.transmission>0,ve=F&&!!y.anisotropyMap,Be=X&&!!y.clearcoatMap,Z=X&&!!y.clearcoatNormalMap,ce=X&&!!y.clearcoatRoughnessMap,_e=$&&!!y.iridescenceMap,xe=$&&!!y.iridescenceThicknessMap,de=le&&!!y.sheenColorMap,Ae=le&&!!y.sheenRoughnessMap,Me=!!y.specularMap,tt=!!y.specularColorMap,D=!!y.specularIntensityMap,ue=fe&&!!y.transmissionMap,z=fe&&!!y.thicknessMap,Y=!!y.gradientMap,oe=!!y.alphaMap,re=y.alphaTest>0,Fe=!!y.alphaHash,Ke=!!y.extensions;let lt=er;y.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(lt=t.toneMapping);const Ze={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:V,fragmentShader:ne,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:m,batching:He,batchingColor:He&&W._colorsTexture!==null,instancing:Re,instancingColor:Re&&W.instanceColor!==null,instancingMorph:Re&&W.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:lr,alphaToCoverage:!!y.alphaToCoverage,map:qe,matcap:Ue,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:q,aoMap:At,lightMap:Ne,bumpMap:Xe,normalMap:Te,displacementMap:g&&Ge,emissiveMap:Le,normalMapObjectSpace:Te&&y.normalMapType===Ky,normalMapTangentSpace:Te&&y.normalMapType===K0,metalnessMap:A,roughnessMap:M,anisotropy:F,anisotropyMap:ve,clearcoat:X,clearcoatMap:Be,clearcoatNormalMap:Z,clearcoatRoughnessMap:ce,dispersion:ee,iridescence:$,iridescenceMap:_e,iridescenceThicknessMap:xe,sheen:le,sheenColorMap:de,sheenRoughnessMap:Ae,specularMap:Me,specularColorMap:tt,specularIntensityMap:D,transmission:fe,transmissionMap:ue,thicknessMap:z,gradientMap:Y,opaque:y.transparent===!1&&y.blending===ys&&y.alphaToCoverage===!1,alphaMap:oe,alphaTest:re,alphaHash:Fe,combine:y.combine,mapUv:qe&&p(y.map.channel),aoMapUv:At&&p(y.aoMap.channel),lightMapUv:Ne&&p(y.lightMap.channel),bumpMapUv:Xe&&p(y.bumpMap.channel),normalMapUv:Te&&p(y.normalMap.channel),displacementMapUv:Ge&&p(y.displacementMap.channel),emissiveMapUv:Le&&p(y.emissiveMap.channel),metalnessMapUv:A&&p(y.metalnessMap.channel),roughnessMapUv:M&&p(y.roughnessMap.channel),anisotropyMapUv:ve&&p(y.anisotropyMap.channel),clearcoatMapUv:Be&&p(y.clearcoatMap.channel),clearcoatNormalMapUv:Z&&p(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&p(y.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&p(y.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&p(y.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&p(y.sheenRoughnessMap.channel),specularMapUv:Me&&p(y.specularMap.channel),specularColorMapUv:tt&&p(y.specularColorMap.channel),specularIntensityMapUv:D&&p(y.specularIntensityMap.channel),transmissionMapUv:ue&&p(y.transmissionMap.channel),thicknessMapUv:z&&p(y.thicknessMap.channel),alphaMapUv:oe&&p(y.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(Te||F),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!H.attributes.uv&&(qe||oe),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:W.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:De,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:lt,decodeVideoTexture:qe&&y.map.isVideoTexture===!0&&st.getTransfer(y.map.colorSpace)===pt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===cn,flipSided:y.side===pn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ke&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ke&&y.extensions.multiDraw===!0||He)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const E=v[y.type];let k;if(E){const O=ni[E];k=AS.clone(O.uniforms)}else k=y.uniforms;return k}function C(y,E){let k;for(let O=0,W=f.length;O<W;O++){const K=f[O];if(K.cacheKey===E){k=K,++k.usedTimes;break}}return k===void 0&&(k=new zw(t,E,y,s),f.push(k)),k}function T(y){if(--y.usedTimes===0){const E=f.indexOf(y);f[E]=f[f.length-1],f.pop(),y.destroy()}}function R(y){l.remove(y)}function j(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:P,acquireProgram:C,releaseProgram:T,releaseShaderCache:R,programs:f,dispose:j}}function Ww(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Xw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,g,m,v,p){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:d,material:g,groupOrder:m,renderOrder:h.renderOrder,z:v,group:p},t[e]=u):(u.id=h.id,u.object=h,u.geometry=d,u.material=g,u.groupOrder=m,u.renderOrder=h.renderOrder,u.z=v,u.group=p),e++,u}function a(h,d,g,m,v,p){const u=o(h,d,g,m,v,p);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,d,g,m,v,p){const u=o(h,d,g,m,v,p);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,d){n.length>1&&n.sort(h||Xw),i.length>1&&i.sort(d||lm),r.length>1&&r.sort(d||lm)}function f(){for(let h=e,d=t.length;h<d;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function jw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new cm,t.set(i,[o])):r>=s.length?(o=new cm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Yw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function $w(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let qw=0;function Kw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Zw(t){const e=new Yw,n=$w(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new _t,o=new _t;function a(c){let f=0,h=0,d=0;for(let j=0;j<9;j++)i.probe[j].set(0,0,0);let g=0,m=0,v=0,p=0,u=0,_=0,x=0,S=0,P=0,C=0,T=0;c.sort(Kw);for(let j=0,y=c.length;j<y;j++){const E=c[j],k=E.color,O=E.intensity,W=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)f+=k.r*O,h+=k.g*O,d+=k.b*O;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],O);T++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const Q=E.shadow,L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=E.shadow.matrix,_++}i.directional[g]=H,g++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(k).multiplyScalar(O),H.distance=W,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[v]=H;const Q=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,Q.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[v]=Q.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=K,S++}v++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(k).multiplyScalar(O),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[p]=H,p++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const Q=E.shadow,L=n.get(E);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[m]=L,i.pointShadowMap[m]=K,i.pointShadowMatrix[m]=E.shadow.matrix,x++}i.point[m]=H,m++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(O),H.groundColor.copy(E.groundColor).multiplyScalar(O),i.hemi[u]=H,u++}}p>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ge.LTC_FLOAT_1,i.rectAreaLTC2=ge.LTC_FLOAT_2):(i.rectAreaLTC1=ge.LTC_HALF_1,i.rectAreaLTC2=ge.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==g||R.pointLength!==m||R.spotLength!==v||R.rectAreaLength!==p||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==T)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=p,i.point.length=m,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=T,R.directionalLength=g,R.pointLength=m,R.spotLength=v,R.rectAreaLength=p,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=T,i.version=qw++)}function l(c,f){let h=0,d=0,g=0,m=0,v=0;const p=f.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),h++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(p),g++}else if(x.isRectAreaLight){const S=i.rectArea[m];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),o.identity(),s.copy(x.matrixWorld),s.premultiply(p),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(p),d++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(p),v++}}}return{setup:a,setupView:l,state:i}}function um(t){const e=new Zw(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Qw(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new um(t),e.set(r,[a])):s>=o.length?(a=new um(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class Jw extends Xo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends Xo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,nT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function iT(t,e,n){let i=new Yd;const r=new Je,s=new Je,o=new ut,a=new Jw({depthPacking:qy}),l=new eT,c={},f=n.maxTextureSize,h={[ir]:pn,[pn]:ir,[cn]:cn},d=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:tT,fragmentShader:nT}),g=d.clone();g.defines.HORIZONTAL_PASS=1;const m=new Zn;m.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new pe(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let u=this.type;this.render=function(C,T,R){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||C.length===0)return;const j=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),k=t.state;k.setBlending(Ji),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=u!==mi&&this.type===mi,W=u===mi&&this.type!==mi;for(let K=0,H=C.length;K<H;K++){const Q=C[K],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||O===!0||W===!0){const se=this.type!==mi?{minFilter:Dn,magFilter:Dn}:{};L.map!==null&&L.map.dispose(),L.map=new Fr(r.x,r.y,se),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const J=L.getViewportCount();for(let se=0;se<J;se++){const Ce=L.getViewport(se);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),k.viewport(o),L.updateMatrices(Q,se),i=L.getFrustum(),S(T,R,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===mi&&_(L,R),L.needsUpdate=!1}u=this.type,p.needsUpdate=!1,t.setRenderTarget(j,y,E)};function _(C,T){const R=e.update(v);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Fr(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(T,null,R,d,v,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(T,null,R,g,v,null)}function x(C,T,R,j){let y=null;const E=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const k=y.uuid,O=T.uuid;let W=c[k];W===void 0&&(W={},c[k]=W);let K=W[O];K===void 0&&(K=y.clone(),W[O]=K,T.addEventListener("dispose",P)),y=K}if(y.visible=T.visible,y.wireframe=T.wireframe,j===mi?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:h[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=R}return y}function S(C,T,R,j,y){if(C.visible===!1)return;if(C.layers.test(T.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===mi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const O=e.update(C),W=C.material;if(Array.isArray(W)){const K=O.groups;for(let H=0,Q=K.length;H<Q;H++){const L=K[H],q=W[L.materialIndex];if(q&&q.visible){const J=x(C,q,j,y);C.onBeforeShadow(t,C,T,R,O,J,L),t.renderBufferDirect(R,null,O,J,C,L),C.onAfterShadow(t,C,T,R,O,J,L)}}}else if(W.visible){const K=x(C,W,j,y);C.onBeforeShadow(t,C,T,R,O,K,null),t.renderBufferDirect(R,null,O,K,C,null),C.onAfterShadow(t,C,T,R,O,K,null)}}const k=C.children;for(let O=0,W=k.length;O<W;O++)S(k[O],T,R,j,y)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const j=c[R],y=C.target.uuid;y in j&&(j[y].dispose(),delete j[y])}}}const rT={[nf]:rf,[sf]:lf,[of]:cf,[Ls]:af,[rf]:nf,[lf]:sf,[cf]:of,[af]:Ls};function sT(t){function e(){let D=!1;const ue=new ut;let z=null;const Y=new ut(0,0,0,0);return{setMask:function(oe){z!==oe&&!D&&(t.colorMask(oe,oe,oe,oe),z=oe)},setLocked:function(oe){D=oe},setClear:function(oe,re,Fe,Ke,lt){lt===!0&&(oe*=Ke,re*=Ke,Fe*=Ke),ue.set(oe,re,Fe,Ke),Y.equals(ue)===!1&&(t.clearColor(oe,re,Fe,Ke),Y.copy(ue))},reset:function(){D=!1,z=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,ue=!1,z=null,Y=null,oe=null;return{setReversed:function(re){ue=re},setTest:function(re){re?he(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(re){z!==re&&!D&&(t.depthMask(re),z=re)},setFunc:function(re){if(ue&&(re=rT[re]),Y!==re){switch(re){case nf:t.depthFunc(t.NEVER);break;case rf:t.depthFunc(t.ALWAYS);break;case sf:t.depthFunc(t.LESS);break;case Ls:t.depthFunc(t.LEQUAL);break;case of:t.depthFunc(t.EQUAL);break;case af:t.depthFunc(t.GEQUAL);break;case lf:t.depthFunc(t.GREATER);break;case cf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=re}},setLocked:function(re){D=re},setClear:function(re){oe!==re&&(t.clearDepth(re),oe=re)},reset:function(){D=!1,z=null,Y=null,oe=null}}}function i(){let D=!1,ue=null,z=null,Y=null,oe=null,re=null,Fe=null,Ke=null,lt=null;return{setTest:function(Ze){D||(Ze?he(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(Ze){ue!==Ze&&!D&&(t.stencilMask(Ze),ue=Ze)},setFunc:function(Ze,Ct,sn){(z!==Ze||Y!==Ct||oe!==sn)&&(t.stencilFunc(Ze,Ct,sn),z=Ze,Y=Ct,oe=sn)},setOp:function(Ze,Ct,sn){(re!==Ze||Fe!==Ct||Ke!==sn)&&(t.stencilOp(Ze,Ct,sn),re=Ze,Fe=Ct,Ke=sn)},setLocked:function(Ze){D=Ze},setClear:function(Ze){lt!==Ze&&(t.clearStencil(Ze),lt=Ze)},reset:function(){D=!1,ue=null,z=null,Y=null,oe=null,re=null,Fe=null,Ke=null,lt=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},f={},h=new WeakMap,d=[],g=null,m=!1,v=null,p=null,u=null,_=null,x=null,S=null,P=null,C=new Qe(0,0,0),T=0,R=!1,j=null,y=null,E=null,k=null,O=null;const W=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,H=0;const Q=t.getParameter(t.VERSION);Q.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(Q)[1]),K=H>=1):Q.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),K=H>=2);let L=null,q={};const J=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Ce=new ut().fromArray(J),De=new ut().fromArray(se);function V(D,ue,z,Y){const oe=new Uint8Array(4),re=t.createTexture();t.bindTexture(D,re),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Fe=0;Fe<z;Fe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ue,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,oe):t.texImage2D(ue+Fe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,oe);return re}const ne={};ne[t.TEXTURE_2D]=V(t.TEXTURE_2D,t.TEXTURE_2D,1),ne[t.TEXTURE_CUBE_MAP]=V(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[t.TEXTURE_2D_ARRAY]=V(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ne[t.TEXTURE_3D]=V(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Ls),Ne(!1),Xe(_p),he(t.CULL_FACE),b(Ji);function he(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function me(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ie(D,ue){return f[D]!==ue?(t.bindFramebuffer(D,ue),f[D]=ue,D===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=ue),D===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=ue),!0):!1}function Re(D,ue){let z=d,Y=!1;if(D){z=h.get(ue),z===void 0&&(z=[],h.set(ue,z));const oe=D.textures;if(z.length!==oe.length||z[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Fe=oe.length;re<Fe;re++)z[re]=t.COLOR_ATTACHMENT0+re;z.length=oe.length,Y=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,Y=!0);Y&&t.drawBuffers(z)}function He(D){return g!==D?(t.useProgram(D),g=D,!0):!1}const qe={[yr]:t.FUNC_ADD,[My]:t.FUNC_SUBTRACT,[Ey]:t.FUNC_REVERSE_SUBTRACT};qe[wy]=t.MIN,qe[Ty]=t.MAX;const Ue={[Ay]:t.ZERO,[Cy]:t.ONE,[Ry]:t.SRC_COLOR,[ef]:t.SRC_ALPHA,[Uy]:t.SRC_ALPHA_SATURATE,[Dy]:t.DST_COLOR,[by]:t.DST_ALPHA,[Py]:t.ONE_MINUS_SRC_COLOR,[tf]:t.ONE_MINUS_SRC_ALPHA,[Iy]:t.ONE_MINUS_DST_COLOR,[Ly]:t.ONE_MINUS_DST_ALPHA,[Ny]:t.CONSTANT_COLOR,[Fy]:t.ONE_MINUS_CONSTANT_COLOR,[Oy]:t.CONSTANT_ALPHA,[ky]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,ue,z,Y,oe,re,Fe,Ke,lt,Ze){if(D===Ji){m===!0&&(me(t.BLEND),m=!1);return}if(m===!1&&(he(t.BLEND),m=!0),D!==Sy){if(D!==v||Ze!==R){if((p!==yr||x!==yr)&&(t.blendEquation(t.FUNC_ADD),p=yr,x=yr),Ze)switch(D){case ys:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ys:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,_=null,S=null,P=null,C.set(0,0,0),T=0,v=D,R=Ze}return}oe=oe||ue,re=re||z,Fe=Fe||Y,(ue!==p||oe!==x)&&(t.blendEquationSeparate(qe[ue],qe[oe]),p=ue,x=oe),(z!==u||Y!==_||re!==S||Fe!==P)&&(t.blendFuncSeparate(Ue[z],Ue[Y],Ue[re],Ue[Fe]),u=z,_=Y,S=re,P=Fe),(Ke.equals(C)===!1||lt!==T)&&(t.blendColor(Ke.r,Ke.g,Ke.b,lt),C.copy(Ke),T=lt),v=D,R=!1}function At(D,ue){D.side===cn?me(t.CULL_FACE):he(t.CULL_FACE);let z=D.side===pn;ue&&(z=!z),Ne(z),D.blending===ys&&D.transparent===!1?b(Ji):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Y=D.stencilWrite;o.setTest(Y),Y&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ne(D){j!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),j=D)}function Xe(D){D!==xy?(he(t.CULL_FACE),D!==y&&(D===_p?t.cullFace(t.BACK):D===yy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),y=D}function Te(D){D!==E&&(K&&t.lineWidth(D),E=D)}function Ge(D,ue,z){D?(he(t.POLYGON_OFFSET_FILL),(k!==ue||O!==z)&&(t.polygonOffset(ue,z),k=ue,O=z)):me(t.POLYGON_OFFSET_FILL)}function Le(D){D?he(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+W-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,ue,z){z===void 0&&(L===null?z=t.TEXTURE0+W-1:z=L);let Y=q[z];Y===void 0&&(Y={type:void 0,texture:void 0},q[z]=Y),(Y.type!==D||Y.texture!==ue)&&(L!==z&&(t.activeTexture(z),L=z),t.bindTexture(D,ue||ne[D]),Y.type=D,Y.texture=ue)}function F(){const D=q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function X(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function fe(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Be(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function _e(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(D){Ce.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ce.copy(D))}function de(D){De.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),De.copy(D))}function Ae(D,ue){let z=l.get(ue);z===void 0&&(z=new WeakMap,l.set(ue,z));let Y=z.get(D);Y===void 0&&(Y=t.getUniformBlockIndex(ue,D.name),z.set(D,Y))}function Me(D,ue){const Y=l.get(ue).get(D);a.get(ue)!==Y&&(t.uniformBlockBinding(ue,Y,D.__bindingPointIndex),a.set(ue,Y))}function tt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,q={},f={},h=new WeakMap,d=[],g=null,m=!1,v=null,p=null,u=null,_=null,x=null,S=null,P=null,C=new Qe(0,0,0),T=0,R=!1,j=null,y=null,E=null,k=null,O=null,Ce.set(0,0,t.canvas.width,t.canvas.height),De.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:me,bindFramebuffer:Ie,drawBuffers:Re,useProgram:He,setBlending:b,setMaterial:At,setFlipSided:Ne,setCullFace:Xe,setLineWidth:Te,setPolygonOffset:Ge,setScissorTest:Le,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:X,compressedTexImage3D:ee,texImage2D:ce,texImage3D:_e,updateUBOMapping:Ae,uniformBlockBinding:Me,texStorage2D:Be,texStorage3D:Z,texSubImage2D:$,texSubImage3D:le,compressedTexSubImage2D:fe,compressedTexSubImage3D:ve,scissor:xe,viewport:de,reset:tt}}function fm(t,e,n,i){const r=oT(i);switch(n){case V0:return t*e;case X0:return t*e;case j0:return t*e*2;case Y0:return t*e/r.components*r.byteLength;case Hd:return t*e/r.components*r.byteLength;case $0:return t*e*2/r.components*r.byteLength;case Gd:return t*e*2/r.components*r.byteLength;case W0:return t*e*3/r.components*r.byteLength;case Yn:return t*e*4/r.components*r.byteLength;case Vd:return t*e*4/r.components*r.byteLength;case ja:case Ya:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case $a:case qa:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mf:case vf:return Math.max(t,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(t,8)*Math.max(e,8)/2;case _f:case xf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case yf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Mf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case wf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Af:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Pf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Lf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Df:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case If:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case Ka:case Nf:case Ff:return Math.ceil(t/4)*Math.ceil(e/4)*16;case q0:case Of:return Math.ceil(t/4)*Math.ceil(e/4)*8;case kf:case zf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oT(t){switch(t){case Ri:case B0:return{byteLength:1,components:1};case No:case H0:case Ho:return{byteLength:2,components:1};case zd:case Bd:return{byteLength:2,components:4};case Nr:case kd:case Si:return{byteLength:4,components:1};case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function aT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,f=new WeakMap;let h;const d=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,M){return g?new OffscreenCanvas(A,M):Cl("canvas")}function v(A,M,F){let X=1;const ee=Le(A);if((ee.width>F||ee.height>F)&&(X=F/Math.max(ee.width,ee.height)),X<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(X*ee.width),le=Math.floor(X*ee.height);h===void 0&&(h=m($,le));const fe=M?m($,le):h;return fe.width=$,fe.height=le,fe.getContext("2d").drawImage(A,0,0,$,le),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+$+"x"+le+")."),fe}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),A;return A}function p(A){return A.generateMipmaps&&A.minFilter!==Dn&&A.minFilter!==Wn}function u(A){t.generateMipmap(A)}function _(A,M,F,X,ee=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===t.RED&&(F===t.FLOAT&&($=t.R32F),F===t.HALF_FLOAT&&($=t.R16F),F===t.UNSIGNED_BYTE&&($=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.R8UI),F===t.UNSIGNED_SHORT&&($=t.R16UI),F===t.UNSIGNED_INT&&($=t.R32UI),F===t.BYTE&&($=t.R8I),F===t.SHORT&&($=t.R16I),F===t.INT&&($=t.R32I)),M===t.RG&&(F===t.FLOAT&&($=t.RG32F),F===t.HALF_FLOAT&&($=t.RG16F),F===t.UNSIGNED_BYTE&&($=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RG8UI),F===t.UNSIGNED_SHORT&&($=t.RG16UI),F===t.UNSIGNED_INT&&($=t.RG32UI),F===t.BYTE&&($=t.RG8I),F===t.SHORT&&($=t.RG16I),F===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RGB8UI),F===t.UNSIGNED_SHORT&&($=t.RGB16UI),F===t.UNSIGNED_INT&&($=t.RGB32UI),F===t.BYTE&&($=t.RGB8I),F===t.SHORT&&($=t.RGB16I),F===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&($=t.RGBA8UI),F===t.UNSIGNED_SHORT&&($=t.RGBA16UI),F===t.UNSIGNED_INT&&($=t.RGBA32UI),F===t.BYTE&&($=t.RGBA8I),F===t.SHORT&&($=t.RGBA16I),F===t.INT&&($=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),M===t.RGBA){const le=ee?El:st.getTransfer(X);F===t.FLOAT&&($=t.RGBA32F),F===t.HALF_FLOAT&&($=t.RGBA16F),F===t.UNSIGNED_BYTE&&($=le===pt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(A,M){let F;return A?M===null||M===Nr||M===Us?F=t.DEPTH24_STENCIL8:M===Si?F=t.DEPTH32F_STENCIL8:M===No&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nr||M===Us?F=t.DEPTH_COMPONENT24:M===Si?F=t.DEPTH_COMPONENT32F:M===No&&(F=t.DEPTH_COMPONENT16),F}function S(A,M){return p(A)===!0||A.isFramebufferTexture&&A.minFilter!==Dn&&A.minFilter!==Wn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){const M=A.target;M.removeEventListener("dispose",P),T(M),M.isVideoTexture&&f.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),j(M)}function T(A){const M=i.get(A);if(M.__webglInit===void 0)return;const F=A.source,X=d.get(F);if(X){const ee=X[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&R(A),Object.keys(X).length===0&&d.delete(F)}i.remove(A)}function R(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const F=A.source,X=d.get(F);delete X[M.__cacheKey],o.memory.textures--}function j(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let X=0;X<6;X++){if(Array.isArray(M.__webglFramebuffer[X]))for(let ee=0;ee<M.__webglFramebuffer[X].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[X][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[X]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[X])}else{if(Array.isArray(M.__webglFramebuffer))for(let X=0;X<M.__webglFramebuffer.length;X++)t.deleteFramebuffer(M.__webglFramebuffer[X]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let X=0;X<M.__webglColorRenderbuffer.length;X++)M.__webglColorRenderbuffer[X]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[X]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=A.textures;for(let X=0,ee=F.length;X<ee;X++){const $=i.get(F[X]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(F[X])}i.remove(A)}let y=0;function E(){y=0}function k(){const A=y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),y+=1,A}function O(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function W(A,M){const F=i.get(A);if(A.isVideoTexture&&Te(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const X=A.image;if(X===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(X.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{De(F,A,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function K(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){De(F,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function H(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){De(F,A,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function Q(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){V(F,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const L={[df]:t.REPEAT,[Tr]:t.CLAMP_TO_EDGE,[hf]:t.MIRRORED_REPEAT},q={[Dn]:t.NEAREST,[Yy]:t.NEAREST_MIPMAP_NEAREST,[da]:t.NEAREST_MIPMAP_LINEAR,[Wn]:t.LINEAR,[Rc]:t.LINEAR_MIPMAP_NEAREST,[Ar]:t.LINEAR_MIPMAP_LINEAR},J={[Zy]:t.NEVER,[iS]:t.ALWAYS,[Qy]:t.LESS,[Z0]:t.LEQUAL,[Jy]:t.EQUAL,[nS]:t.GEQUAL,[eS]:t.GREATER,[tS]:t.NOTEQUAL};function se(A,M){if(M.type===Si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Wn||M.magFilter===Rc||M.magFilter===da||M.magFilter===Ar||M.minFilter===Wn||M.minFilter===Rc||M.minFilter===da||M.minFilter===Ar)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,L[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Dn||M.minFilter!==da&&M.minFilter!==Ar||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const X=M.source;let ee=d.get(X);ee===void 0&&(ee={},d.set(X,ee));const $=O(M);if($!==A.__cacheKey){ee[$]===void 0&&(ee[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[$].usedTimes++;const le=ee[A.__cacheKey];le!==void 0&&(ee[A.__cacheKey].usedTimes--,le.usedTimes===0&&R(M)),A.__cacheKey=$,A.__webglTexture=ee[$].texture}return F}function De(A,M,F){let X=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(X=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(X=t.TEXTURE_3D);const ee=Ce(A,M),$=M.source;n.bindTexture(X,A.__webglTexture,t.TEXTURE0+F);const le=i.get($);if($.version!==le.__version||ee===!0){n.activeTexture(t.TEXTURE0+F);const fe=st.getPrimaries(st.workingColorSpace),ve=M.colorSpace===Gi?null:st.getPrimaries(M.colorSpace),Be=M.colorSpace===Gi||fe===ve?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Be);let Z=v(M.image,!1,r.maxTextureSize);Z=Ge(M,Z);const ce=s.convert(M.format,M.colorSpace),_e=s.convert(M.type);let xe=_(M.internalFormat,ce,_e,M.colorSpace,M.isVideoTexture);se(X,M);let de;const Ae=M.mipmaps,Me=M.isVideoTexture!==!0,tt=le.__version===void 0||ee===!0,D=$.dataReady,ue=S(M,Z);if(M.isDepthTexture)xe=x(M.format===Ns,M.type),tt&&(Me?n.texStorage2D(t.TEXTURE_2D,1,xe,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,xe,Z.width,Z.height,0,ce,_e,null));else if(M.isDataTexture)if(Ae.length>0){Me&&tt&&n.texStorage2D(t.TEXTURE_2D,ue,xe,Ae[0].width,Ae[0].height);for(let z=0,Y=Ae.length;z<Y;z++)de=Ae[z],Me?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,de.width,de.height,ce,_e,de.data):n.texImage2D(t.TEXTURE_2D,z,xe,de.width,de.height,0,ce,_e,de.data);M.generateMipmaps=!1}else Me?(tt&&n.texStorage2D(t.TEXTURE_2D,ue,xe,Z.width,Z.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,ce,_e,Z.data)):n.texImage2D(t.TEXTURE_2D,0,xe,Z.width,Z.height,0,ce,_e,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Me&&tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,xe,Ae[0].width,Ae[0].height,Z.depth);for(let z=0,Y=Ae.length;z<Y;z++)if(de=Ae[z],M.format!==Yn)if(ce!==null)if(Me){if(D)if(M.layerUpdates.size>0){const oe=fm(de.width,de.height,M.format,M.type);for(const re of M.layerUpdates){const Fe=de.data.subarray(re*oe/de.data.BYTES_PER_ELEMENT,(re+1)*oe/de.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,re,de.width,de.height,1,ce,Fe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,de.width,de.height,Z.depth,ce,de.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,xe,de.width,de.height,Z.depth,0,de.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Me?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,de.width,de.height,Z.depth,ce,_e,de.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,xe,de.width,de.height,Z.depth,0,ce,_e,de.data)}else{Me&&tt&&n.texStorage2D(t.TEXTURE_2D,ue,xe,Ae[0].width,Ae[0].height);for(let z=0,Y=Ae.length;z<Y;z++)de=Ae[z],M.format!==Yn?ce!==null?Me?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,de.width,de.height,ce,de.data):n.compressedTexImage2D(t.TEXTURE_2D,z,xe,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Me?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,de.width,de.height,ce,_e,de.data):n.texImage2D(t.TEXTURE_2D,z,xe,de.width,de.height,0,ce,_e,de.data)}else if(M.isDataArrayTexture)if(Me){if(tt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ue,xe,Z.width,Z.height,Z.depth),D)if(M.layerUpdates.size>0){const z=fm(Z.width,Z.height,M.format,M.type);for(const Y of M.layerUpdates){const oe=Z.data.subarray(Y*z/Z.data.BYTES_PER_ELEMENT,(Y+1)*z/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,Z.width,Z.height,1,ce,_e,oe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ce,_e,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,xe,Z.width,Z.height,Z.depth,0,ce,_e,Z.data);else if(M.isData3DTexture)Me?(tt&&n.texStorage3D(t.TEXTURE_3D,ue,xe,Z.width,Z.height,Z.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ce,_e,Z.data)):n.texImage3D(t.TEXTURE_3D,0,xe,Z.width,Z.height,Z.depth,0,ce,_e,Z.data);else if(M.isFramebufferTexture){if(tt)if(Me)n.texStorage2D(t.TEXTURE_2D,ue,xe,Z.width,Z.height);else{let z=Z.width,Y=Z.height;for(let oe=0;oe<ue;oe++)n.texImage2D(t.TEXTURE_2D,oe,xe,z,Y,0,ce,_e,null),z>>=1,Y>>=1}}else if(Ae.length>0){if(Me&&tt){const z=Le(Ae[0]);n.texStorage2D(t.TEXTURE_2D,ue,xe,z.width,z.height)}for(let z=0,Y=Ae.length;z<Y;z++)de=Ae[z],Me?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ce,_e,de):n.texImage2D(t.TEXTURE_2D,z,xe,ce,_e,de);M.generateMipmaps=!1}else if(Me){if(tt){const z=Le(Z);n.texStorage2D(t.TEXTURE_2D,ue,xe,z.width,z.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,_e,Z)}else n.texImage2D(t.TEXTURE_2D,0,xe,ce,_e,Z);p(M)&&u(X),le.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function V(A,M,F){if(M.image.length!==6)return;const X=Ce(A,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const $=i.get(ee);if(ee.version!==$.__version||X===!0){n.activeTexture(t.TEXTURE0+F);const le=st.getPrimaries(st.workingColorSpace),fe=M.colorSpace===Gi?null:st.getPrimaries(M.colorSpace),ve=M.colorSpace===Gi||le===fe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Be=M.isCompressedTexture||M.image[0].isCompressedTexture,Z=M.image[0]&&M.image[0].isDataTexture,ce=[];for(let Y=0;Y<6;Y++)!Be&&!Z?ce[Y]=v(M.image[Y],!0,r.maxCubemapSize):ce[Y]=Z?M.image[Y].image:M.image[Y],ce[Y]=Ge(M,ce[Y]);const _e=ce[0],xe=s.convert(M.format,M.colorSpace),de=s.convert(M.type),Ae=_(M.internalFormat,xe,de,M.colorSpace),Me=M.isVideoTexture!==!0,tt=$.__version===void 0||X===!0,D=ee.dataReady;let ue=S(M,_e);se(t.TEXTURE_CUBE_MAP,M);let z;if(Be){Me&&tt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ae,_e.width,_e.height);for(let Y=0;Y<6;Y++){z=ce[Y].mipmaps;for(let oe=0;oe<z.length;oe++){const re=z[oe];M.format!==Yn?xe!==null?Me?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,re.width,re.height,xe,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,Ae,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Me?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,0,0,re.width,re.height,xe,de,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe,Ae,re.width,re.height,0,xe,de,re.data)}}}else{if(z=M.mipmaps,Me&&tt){z.length>0&&ue++;const Y=Le(ce[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ue,Ae,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Z){Me?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ce[Y].width,ce[Y].height,xe,de,ce[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,ce[Y].width,ce[Y].height,0,xe,de,ce[Y].data);for(let oe=0;oe<z.length;oe++){const Fe=z[oe].image[Y].image;Me?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,Fe.width,Fe.height,xe,de,Fe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,Ae,Fe.width,Fe.height,0,xe,de,Fe.data)}}else{Me?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,xe,de,ce[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,xe,de,ce[Y]);for(let oe=0;oe<z.length;oe++){const re=z[oe];Me?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,0,0,xe,de,re.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,oe+1,Ae,xe,de,re.image[Y])}}}p(M)&&u(t.TEXTURE_CUBE_MAP),$.__version=ee.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ne(A,M,F,X,ee,$){const le=s.convert(F.format,F.colorSpace),fe=s.convert(F.type),ve=_(F.internalFormat,le,fe,F.colorSpace);if(!i.get(M).__hasExternalTextures){const Z=Math.max(1,M.width>>$),ce=Math.max(1,M.height>>$);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,$,ve,Z,ce,M.depth,0,le,fe,null):n.texImage2D(ee,$,ve,Z,ce,0,le,fe,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,X,ee,i.get(F).__webglTexture,0,Ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,X,ee,i.get(F).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const X=M.depthTexture,ee=X&&X.isDepthTexture?X.type:null,$=x(M.stencilBuffer,ee),le=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=Ne(M);Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,fe,$,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,fe,$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,le,t.RENDERBUFFER,A)}else{const X=M.textures;for(let ee=0;ee<X.length;ee++){const $=X[ee],le=s.convert($.format,$.colorSpace),fe=s.convert($.type),ve=_($.internalFormat,le,fe,$.colorSpace),Be=Ne(M);F&&Xe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Be,ve,M.width,M.height):Xe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Be,ve,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ve,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),W(M.depthTexture,0);const X=i.get(M.depthTexture).__webglTexture,ee=Ne(M);if(M.depthTexture.format===Ss)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,X,0);else if(M.depthTexture.format===Ns)Xe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0,ee):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,X,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const M=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const X=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),X){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,X.removeEventListener("dispose",ee)};X.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=X}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let X=0;X<6;X++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[X]),M.__webglDepthbuffer[X]===void 0)M.__webglDepthbuffer[X]=t.createRenderbuffer(),he(M.__webglDepthbuffer[X],A,!1);else{const ee=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[X];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,A,!1);else{const X=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,X,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Re(A,M,F){const X=i.get(A);M!==void 0&&ne(X.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ie(A)}function He(A){const M=A.texture,F=i.get(A),X=i.get(M);A.addEventListener("dispose",C);const ee=A.textures,$=A.isWebGLCubeRenderTarget===!0,le=ee.length>1;if(le||(X.__webglTexture===void 0&&(X.__webglTexture=t.createTexture()),X.__version=M.version,o.memory.textures++),$){F.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[fe]=[];for(let ve=0;ve<M.mipmaps.length;ve++)F.__webglFramebuffer[fe][ve]=t.createFramebuffer()}else F.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let fe=0;fe<M.mipmaps.length;fe++)F.__webglFramebuffer[fe]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(le)for(let fe=0,ve=ee.length;fe<ve;fe++){const Be=i.get(ee[fe]);Be.__webglTexture===void 0&&(Be.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&Xe(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let fe=0;fe<ee.length;fe++){const ve=ee[fe];F.__webglColorRenderbuffer[fe]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[fe]);const Be=s.convert(ve.format,ve.colorSpace),Z=s.convert(ve.type),ce=_(ve.internalFormat,Be,Z,ve.colorSpace,A.isXRRenderTarget===!0),_e=Ne(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,_e,ce,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+fe,t.RENDERBUFFER,F.__webglColorRenderbuffer[fe])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),he(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,X.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let fe=0;fe<6;fe++)if(M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ne(F.__webglFramebuffer[fe][ve],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,ve);else ne(F.__webglFramebuffer[fe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0);p(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(le){for(let fe=0,ve=ee.length;fe<ve;fe++){const Be=ee[fe],Z=i.get(Be);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),se(t.TEXTURE_2D,Be),ne(F.__webglFramebuffer,A,Be,t.COLOR_ATTACHMENT0+fe,t.TEXTURE_2D,0),p(Be)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(fe=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(fe,X.__webglTexture),se(fe,M),M.mipmaps&&M.mipmaps.length>0)for(let ve=0;ve<M.mipmaps.length;ve++)ne(F.__webglFramebuffer[ve],A,M,t.COLOR_ATTACHMENT0,fe,ve);else ne(F.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,fe,0);p(M)&&u(fe),n.unbindTexture()}A.depthBuffer&&Ie(A)}function qe(A){const M=A.textures;for(let F=0,X=M.length;F<X;F++){const ee=M[F];if(p(ee)){const $=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,le=i.get(ee).__webglTexture;n.bindTexture($,le),u($),n.unbindTexture()}}}const Ue=[],b=[];function At(A){if(A.samples>0){if(Xe(A)===!1){const M=A.textures,F=A.width,X=A.height;let ee=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=i.get(A),fe=M.length>1;if(fe)for(let ve=0;ve<M.length;ve++)n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),fe){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,le.__webglColorRenderbuffer[ve]);const Be=i.get(M[ve]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Be,0)}t.blitFramebuffer(0,0,F,X,0,0,F,X,ee,t.NEAREST),l===!0&&(Ue.length=0,b.length=0,Ue.push(t.COLOR_ATTACHMENT0+ve),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ue.push($),b.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),fe)for(let ve=0;ve<M.length;ve++){n.bindFramebuffer(t.FRAMEBUFFER,le.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.RENDERBUFFER,le.__webglColorRenderbuffer[ve]);const Be=i.get(M[ve]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,le.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ve,t.TEXTURE_2D,Be,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ne(A){return Math.min(r.maxSamples,A.samples)}function Xe(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Te(A){const M=o.render.frame;f.get(A)!==M&&(f.set(A,M),A.update())}function Ge(A,M){const F=A.colorSpace,X=A.format,ee=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==lr&&F!==Gi&&(st.getTransfer(F)===pt?(X!==Yn||ee!==Ri)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Le(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=W,this.setTexture2DArray=K,this.setTexture3D=H,this.setTextureCube=Q,this.rebindTextures=Re,this.setupRenderTarget=He,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=At,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ne,this.useMultisampledRTT=Xe}function lT(t,e){function n(i,r=Gi){let s;const o=st.getTransfer(r);if(i===Ri)return t.UNSIGNED_BYTE;if(i===zd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Bd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===G0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===B0)return t.BYTE;if(i===H0)return t.SHORT;if(i===No)return t.UNSIGNED_SHORT;if(i===kd)return t.INT;if(i===Nr)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Ho)return t.HALF_FLOAT;if(i===V0)return t.ALPHA;if(i===W0)return t.RGB;if(i===Yn)return t.RGBA;if(i===X0)return t.LUMINANCE;if(i===j0)return t.LUMINANCE_ALPHA;if(i===Ss)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===Y0)return t.RED;if(i===Hd)return t.RED_INTEGER;if(i===$0)return t.RG;if(i===Gd)return t.RG_INTEGER;if(i===Vd)return t.RGBA_INTEGER;if(i===ja||i===Ya||i===$a||i===qa)if(o===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===ja)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===ja)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ya)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===$a)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qa)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===pf||i===mf||i===gf||i===vf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===pf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===mf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===gf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===vf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===_f||i===xf||i===yf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===_f||i===xf)return o===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===yf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf||i===Rf||i===Pf||i===bf||i===Lf||i===Df||i===If||i===Uf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Sf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Mf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ef)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===wf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Tf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Af)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Cf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Rf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Pf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Lf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Df)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===If)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Uf)return o===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Ka||i===Nf||i===Ff)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===Ka)return o===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Nf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Ff)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===q0||i===Of||i===kf||i===zf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===Ka)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Of)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===zf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Us?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class cT extends en{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ia extends Wt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class ru{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ia,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ia,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ia,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const p=n.getJointPose(v,i),u=this._getHandJoint(c,v);p!==null&&(u.matrix.fromArray(p.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=p.radius),u.visible=p!==null}const f=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=f.position.distanceTo(h.position),g=.02,m=.005;c.inputState.pinching&&d>g+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=g-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ia;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const fT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new mn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rr({vertexShader:fT,fragmentShader:dT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new pe(new It(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pT extends Bs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,h=null,d=null,g=null,m=null;const v=new hT,p=n.getContextAttributes();let u=null,_=null;const x=[],S=[],P=new Je;let C=null;const T=new en;T.layers.enable(1),T.viewport=new ut;const R=new en;R.layers.enable(2),R.viewport=new ut;const j=[T,R],y=new cT;y.layers.enable(1),y.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let ne=x[V];return ne===void 0&&(ne=new ru,x[V]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(V){let ne=x[V];return ne===void 0&&(ne=new ru,x[V]=ne),ne.getGripSpace()},this.getHand=function(V){let ne=x[V];return ne===void 0&&(ne=new ru,x[V]=ne),ne.getHandSpace()};function O(V){const ne=S.indexOf(V.inputSource);if(ne===-1)return;const he=x[ne];he!==void 0&&(he.update(V.inputSource,V.frame,c||o),he.dispatchEvent({type:V.type,data:V.inputSource}))}function W(){r.removeEventListener("select",O),r.removeEventListener("selectstart",O),r.removeEventListener("selectend",O),r.removeEventListener("squeeze",O),r.removeEventListener("squeezestart",O),r.removeEventListener("squeezeend",O),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",K);for(let V=0;V<x.length;V++){const ne=S[V];ne!==null&&(S[V]=null,x[V].disconnect(ne))}E=null,k=null,v.reset(),e.setRenderTarget(u),g=null,d=null,h=null,r=null,_=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){a=V,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return d!==null?d:g},this.getBinding=function(){return h},this.getFrame=function(){return m},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",O),r.addEventListener("selectstart",O),r.addEventListener("selectend",O),r.addEventListener("squeeze",O),r.addEventListener("squeezestart",O),r.addEventListener("squeezeend",O),r.addEventListener("end",W),r.addEventListener("inputsourceschange",K),p.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ne={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new Fr(g.framebufferWidth,g.framebufferHeight,{format:Yn,type:Ri,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ne=null,he=null,me=null;p.depth&&(me=p.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=p.stencil?Ns:Ss,he=p.stencil?Us:Nr);const Ie={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ie),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),_=new Fr(d.textureWidth,d.textureHeight,{format:Yn,type:Ri,depthTexture:new uv(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),De.setContext(r),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(V){for(let ne=0;ne<V.removed.length;ne++){const he=V.removed[ne],me=S.indexOf(he);me>=0&&(S[me]=null,x[me].disconnect(he))}for(let ne=0;ne<V.added.length;ne++){const he=V.added[ne];let me=S.indexOf(he);if(me===-1){for(let Re=0;Re<x.length;Re++)if(Re>=S.length){S.push(he),me=Re;break}else if(S[Re]===null){S[Re]=he,me=Re;break}if(me===-1)break}const Ie=x[me];Ie&&Ie.connect(he)}}const H=new N,Q=new N;function L(V,ne,he){H.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(he.matrixWorld);const me=H.distanceTo(Q),Ie=ne.projectionMatrix.elements,Re=he.projectionMatrix.elements,He=Ie[14]/(Ie[10]-1),qe=Ie[14]/(Ie[10]+1),Ue=(Ie[9]+1)/Ie[5],b=(Ie[9]-1)/Ie[5],At=(Ie[8]-1)/Ie[0],Ne=(Re[8]+1)/Re[0],Xe=He*At,Te=He*Ne,Ge=me/(-At+Ne),Le=Ge*-At;if(ne.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Le),V.translateZ(Ge),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert(),Ie[10]===-1)V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const A=He+Ge,M=qe+Ge,F=Xe-Le,X=Te+(me-Le),ee=Ue*qe/M*A,$=b*qe/M*A;V.projectionMatrix.makePerspective(F,X,ee,$,A,M),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}}function q(V,ne){ne===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(ne.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;let ne=V.near,he=V.far;v.texture!==null&&(v.depthNear>0&&(ne=v.depthNear),v.depthFar>0&&(he=v.depthFar)),y.near=R.near=T.near=ne,y.far=R.far=T.far=he,(E!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,k=y.far);const me=V.parent,Ie=y.cameras;q(y,me);for(let Re=0;Re<Ie.length;Re++)q(Ie[Re],me);Ie.length===2?L(y,T,R):y.projectionMatrix.copy(T.projectionMatrix),J(V,y,me)};function J(V,ne,he){he===null?V.matrix.copy(ne.matrixWorld):(V.matrix.copy(he.matrixWorld),V.matrix.invert(),V.matrix.multiply(ne.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(ne.projectionMatrix),V.projectionMatrixInverse.copy(ne.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=Bf*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(d===null&&g===null))return l},this.setFoveation=function(V){l=V,d!==null&&(d.fixedFoveation=V),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=V)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let se=null;function Ce(V,ne){if(f=ne.getViewerPose(c||o),m=ne,f!==null){const he=f.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let me=!1;he.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let Re=0;Re<he.length;Re++){const He=he[Re];let qe=null;if(g!==null)qe=g.getViewport(He);else{const b=h.getViewSubImage(d,He);qe=b.viewport,Re===0&&(e.setRenderTargetTextures(_,b.colorTexture,d.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let Ue=j[Re];Ue===void 0&&(Ue=new en,Ue.layers.enable(Re),Ue.viewport=new ut,j[Re]=Ue),Ue.matrix.fromArray(He.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(He.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(qe.x,qe.y,qe.width,qe.height),Re===0&&(y.matrix.copy(Ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(Ue)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Re=h.getDepthInformation(he[0]);Re&&Re.isValid&&Re.texture&&v.init(e,Re,r.renderState)}}for(let he=0;he<x.length;he++){const me=S[he],Ie=x[he];me!==null&&Ie!==void 0&&Ie.update(me,ne,c||o)}se&&se(V,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),m=null}const De=new lv;De.setAnimationLoop(Ce),this.setAnimationLoop=function(V){se=V},this.dispose=function(){}}}const pr=new ci,mT=new _t;function gT(t,e){function n(p,u){p.matrixAutoUpdate===!0&&p.updateMatrix(),u.value.copy(p.matrix)}function i(p,u){u.color.getRGB(p.fogColor.value,sv(t)),u.isFog?(p.fogNear.value=u.near,p.fogFar.value=u.far):u.isFogExp2&&(p.fogDensity.value=u.density)}function r(p,u,_,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(p,u):u.isMeshToonMaterial?(s(p,u),h(p,u)):u.isMeshPhongMaterial?(s(p,u),f(p,u)):u.isMeshStandardMaterial?(s(p,u),d(p,u),u.isMeshPhysicalMaterial&&g(p,u,S)):u.isMeshMatcapMaterial?(s(p,u),m(p,u)):u.isMeshDepthMaterial?s(p,u):u.isMeshDistanceMaterial?(s(p,u),v(p,u)):u.isMeshNormalMaterial?s(p,u):u.isLineBasicMaterial?(o(p,u),u.isLineDashedMaterial&&a(p,u)):u.isPointsMaterial?l(p,u,_,x):u.isSpriteMaterial?c(p,u):u.isShadowMaterial?(p.color.value.copy(u.color),p.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(p,u){p.opacity.value=u.opacity,u.color&&p.diffuse.value.copy(u.color),u.emissive&&p.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.bumpMap&&(p.bumpMap.value=u.bumpMap,n(u.bumpMap,p.bumpMapTransform),p.bumpScale.value=u.bumpScale,u.side===pn&&(p.bumpScale.value*=-1)),u.normalMap&&(p.normalMap.value=u.normalMap,n(u.normalMap,p.normalMapTransform),p.normalScale.value.copy(u.normalScale),u.side===pn&&p.normalScale.value.negate()),u.displacementMap&&(p.displacementMap.value=u.displacementMap,n(u.displacementMap,p.displacementMapTransform),p.displacementScale.value=u.displacementScale,p.displacementBias.value=u.displacementBias),u.emissiveMap&&(p.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,p.emissiveMapTransform)),u.specularMap&&(p.specularMap.value=u.specularMap,n(u.specularMap,p.specularMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,S=_.envMapRotation;x&&(p.envMap.value=x,pr.copy(S),pr.x*=-1,pr.y*=-1,pr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),p.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(pr)),p.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=u.reflectivity,p.ior.value=u.ior,p.refractionRatio.value=u.refractionRatio),u.lightMap&&(p.lightMap.value=u.lightMap,p.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,p.lightMapTransform)),u.aoMap&&(p.aoMap.value=u.aoMap,p.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,p.aoMapTransform))}function o(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform))}function a(p,u){p.dashSize.value=u.dashSize,p.totalSize.value=u.dashSize+u.gapSize,p.scale.value=u.scale}function l(p,u,_,x){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.size.value=u.size*_,p.scale.value=x*.5,u.map&&(p.map.value=u.map,n(u.map,p.uvTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function c(p,u){p.diffuse.value.copy(u.color),p.opacity.value=u.opacity,p.rotation.value=u.rotation,u.map&&(p.map.value=u.map,n(u.map,p.mapTransform)),u.alphaMap&&(p.alphaMap.value=u.alphaMap,n(u.alphaMap,p.alphaMapTransform)),u.alphaTest>0&&(p.alphaTest.value=u.alphaTest)}function f(p,u){p.specular.value.copy(u.specular),p.shininess.value=Math.max(u.shininess,1e-4)}function h(p,u){u.gradientMap&&(p.gradientMap.value=u.gradientMap)}function d(p,u){p.metalness.value=u.metalness,u.metalnessMap&&(p.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,p.metalnessMapTransform)),p.roughness.value=u.roughness,u.roughnessMap&&(p.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,p.roughnessMapTransform)),u.envMap&&(p.envMapIntensity.value=u.envMapIntensity)}function g(p,u,_){p.ior.value=u.ior,u.sheen>0&&(p.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),p.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(p.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,p.sheenColorMapTransform)),u.sheenRoughnessMap&&(p.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,p.sheenRoughnessMapTransform))),u.clearcoat>0&&(p.clearcoat.value=u.clearcoat,p.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(p.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,p.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(p.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===pn&&p.clearcoatNormalScale.value.negate())),u.dispersion>0&&(p.dispersion.value=u.dispersion),u.iridescence>0&&(p.iridescence.value=u.iridescence,p.iridescenceIOR.value=u.iridescenceIOR,p.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(p.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,p.iridescenceMapTransform)),u.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),u.transmission>0&&(p.transmission.value=u.transmission,p.transmissionSamplerMap.value=_.texture,p.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(p.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,p.transmissionMapTransform)),p.thickness.value=u.thickness,u.thicknessMap&&(p.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=u.attenuationDistance,p.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(p.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(p.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=u.specularIntensity,p.specularColor.value.copy(u.specularColor),u.specularColorMap&&(p.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,p.specularColorMapTransform)),u.specularIntensityMap&&(p.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,u){u.matcap&&(p.matcap.value=u.matcap)}function v(p,u){const _=e.get(u).light;p.referencePosition.value.setFromMatrixPosition(_.matrixWorld),p.nearDistance.value=_.shadow.camera.near,p.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(m(_),S=f(_),r[_.id]=S,_.addEventListener("dispose",p));const P=x.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(d(_),s[_.id]=C)}function f(_){const x=h();_.__bindingPointIndex=x;const S=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(_){const x=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,T=S.length;C<T;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let j=0,y=R.length;j<y;j++){const E=R[j];if(g(E,C,j,P)===!0){const k=E.__offset,O=Array.isArray(E.value)?E.value:[E.value];let W=0;for(let K=0;K<O.length;K++){const H=O[K],Q=v(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,k+W,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,x,S,P){const C=_.value,T=x+"_"+S;if(P[T]===void 0)return typeof C=="number"||typeof C=="boolean"?P[T]=C:P[T]=C.clone(),!0;{const R=P[T];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[T]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function m(_){const x=_.uniforms;let S=0;const P=16;for(let T=0,R=x.length;T<R;T++){const j=Array.isArray(x[T])?x[T]:[x[T]];for(let y=0,E=j.length;y<E;y++){const k=j[y],O=Array.isArray(k.value)?k.value:[k.value];for(let W=0,K=O.length;W<K;W++){const H=O[W],Q=v(H),L=S%P,q=L%Q.boundary,J=L+q;S+=q,J!==0&&P-J<Q.storage&&(S+=P-J),k.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=Q.storage}}}const C=S%P;return C>0&&(S+=P-C),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function p(_){const x=_.target;x.removeEventListener("dispose",p);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class qd{constructor(e={}){const{canvas:n=sS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=o;const g=new Uint32Array(4),m=new Int32Array(4);let v=null,p=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=er,this.toneMappingExposure=1;const x=this;let S=!1,P=0,C=0,T=null,R=-1,j=null;const y=new ut,E=new ut;let k=null;const O=new Qe(0);let W=0,K=n.width,H=n.height,Q=1,L=null,q=null;const J=new ut(0,0,K,H),se=new ut(0,0,K,H);let Ce=!1;const De=new Yd;let V=!1,ne=!1;const he=new _t,me=new _t,Ie=new N,Re=new ut,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ue(){return T===null?Q:1}let b=i;function At(w,I){return n.getContext(w,I)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Od}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",oe,!1),n.addEventListener("webglcontextcreationerror",re,!1),b===null){const I="webgl2";if(b=At(I,w),b===null)throw At(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ne,Xe,Te,Ge,Le,A,M,F,X,ee,$,le,fe,ve,Be,Z,ce,_e,xe,de,Ae,Me,tt,D;function ue(){Ne=new E1(b),Ne.init(),Me=new lT(b,Ne),Xe=new v1(b,Ne,e,Me),Te=new sT(b),Xe.reverseDepthBuffer&&Te.buffers.depth.setReversed(!0),Ge=new A1(b),Le=new Ww,A=new aT(b,Ne,Te,Le,Xe,Me,Ge),M=new x1(x),F=new M1(x),X=new IS(b),tt=new m1(b,X),ee=new w1(b,X,Ge,tt),$=new R1(b,ee,X,Ge),xe=new C1(b,Xe,A),Z=new _1(Le),le=new Vw(x,M,F,Ne,Xe,tt,Z),fe=new gT(x,Le),ve=new jw,Be=new Qw(Ne),_e=new p1(x,M,F,Te,$,d,l),ce=new iT(x,$,Xe),D=new vT(b,Ge,Xe,Te),de=new g1(b,Ne,Ge),Ae=new T1(b,Ne,Ge),Ge.programs=le.programs,x.capabilities=Xe,x.extensions=Ne,x.properties=Le,x.renderLists=ve,x.shadowMap=ce,x.state=Te,x.info=Ge}ue();const z=new pT(x,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const w=Ne.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ne.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return Q},this.setPixelRatio=function(w){w!==void 0&&(Q=w,this.setSize(K,H,!1))},this.getSize=function(w){return w.set(K,H)},this.setSize=function(w,I,B=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=w,H=I,n.width=Math.floor(w*Q),n.height=Math.floor(I*Q),B===!0&&(n.style.width=w+"px",n.style.height=I+"px"),this.setViewport(0,0,w,I)},this.getDrawingBufferSize=function(w){return w.set(K*Q,H*Q).floor()},this.setDrawingBufferSize=function(w,I,B){K=w,H=I,Q=B,n.width=Math.floor(w*B),n.height=Math.floor(I*B),this.setViewport(0,0,w,I)},this.getCurrentViewport=function(w){return w.copy(y)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,I,B,G){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,I,B,G),Te.viewport(y.copy(J).multiplyScalar(Q).round())},this.getScissor=function(w){return w.copy(se)},this.setScissor=function(w,I,B,G){w.isVector4?se.set(w.x,w.y,w.z,w.w):se.set(w,I,B,G),Te.scissor(E.copy(se).multiplyScalar(Q).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(w){Te.setScissorTest(Ce=w)},this.setOpaqueSort=function(w){L=w},this.setTransparentSort=function(w){q=w},this.getClearColor=function(w){return w.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor.apply(_e,arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha.apply(_e,arguments)},this.clear=function(w=!0,I=!0,B=!0){let G=0;if(w){let U=!1;if(T!==null){const ae=T.texture.format;U=ae===Vd||ae===Gd||ae===Hd}if(U){const ae=T.texture.type,ye=ae===Ri||ae===Nr||ae===No||ae===Us||ae===zd||ae===Bd,Ee=_e.getClearColor(),we=_e.getClearAlpha(),Oe=Ee.r,ke=Ee.g,Pe=Ee.b;ye?(g[0]=Oe,g[1]=ke,g[2]=Pe,g[3]=we,b.clearBufferuiv(b.COLOR,0,g)):(m[0]=Oe,m[1]=ke,m[2]=Pe,m[3]=we,b.clearBufferiv(b.COLOR,0,m))}else G|=b.COLOR_BUFFER_BIT}I&&(G|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),B&&(G|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",oe,!1),n.removeEventListener("webglcontextcreationerror",re,!1),ve.dispose(),Be.dispose(),Le.dispose(),M.dispose(),F.dispose(),$.dispose(),tt.dispose(),D.dispose(),le.dispose(),z.dispose(),z.removeEventListener("sessionstart",je),z.removeEventListener("sessionend",xt),yt.stop()};function Y(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function oe(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const w=Ge.autoReset,I=ce.enabled,B=ce.autoUpdate,G=ce.needsUpdate,U=ce.type;ue(),Ge.autoReset=w,ce.enabled=I,ce.autoUpdate=B,ce.needsUpdate=G,ce.type=U}function re(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Fe(w){const I=w.target;I.removeEventListener("dispose",Fe),Ke(I)}function Ke(w){lt(w),Le.remove(w)}function lt(w){const I=Le.get(w).programs;I!==void 0&&(I.forEach(function(B){le.releaseProgram(B)}),w.isShaderMaterial&&le.releaseShaderCache(w))}this.renderBufferDirect=function(w,I,B,G,U,ae){I===null&&(I=He);const ye=U.isMesh&&U.matrixWorld.determinant()<0,Ee=gv(w,I,B,G,U);Te.setMaterial(G,ye);let we=B.index,Oe=1;if(G.wireframe===!0){if(we=ee.getWireframeAttribute(B),we===void 0)return;Oe=2}const ke=B.drawRange,Pe=B.attributes.position;let ot=ke.start*Oe,dt=(ke.start+ke.count)*Oe;ae!==null&&(ot=Math.max(ot,ae.start*Oe),dt=Math.min(dt,(ae.start+ae.count)*Oe)),we!==null?(ot=Math.max(ot,0),dt=Math.min(dt,we.count)):Pe!=null&&(ot=Math.max(ot,0),dt=Math.min(dt,Pe.count));const wt=dt-ot;if(wt<0||wt===1/0)return;tt.setup(U,G,Ee,B,we);let vn,it=de;if(we!==null&&(vn=X.get(we),it=Ae,it.setIndex(vn)),U.isMesh)G.wireframe===!0?(Te.setLineWidth(G.wireframeLinewidth*Ue()),it.setMode(b.LINES)):it.setMode(b.TRIANGLES);else if(U.isLine){let be=G.linewidth;be===void 0&&(be=1),Te.setLineWidth(be*Ue()),U.isLineSegments?it.setMode(b.LINES):U.isLineLoop?it.setMode(b.LINE_LOOP):it.setMode(b.LINE_STRIP)}else U.isPoints?it.setMode(b.POINTS):U.isSprite&&it.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)it.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ne.get("WEBGL_multi_draw"))it.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const be=U._multiDrawStarts,Ht=U._multiDrawCounts,rt=U._multiDrawCount,Fn=we?X.get(we).bytesPerElement:1,zr=Le.get(G).currentProgram.getUniforms();for(let _n=0;_n<rt;_n++)zr.setValue(b,"_gl_DrawID",_n),it.render(be[_n]/Fn,Ht[_n])}else if(U.isInstancedMesh)it.renderInstances(ot,wt,U.count);else if(B.isInstancedBufferGeometry){const be=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,Ht=Math.min(B.instanceCount,be);it.renderInstances(ot,wt,Ht)}else it.render(ot,wt)};function Ze(w,I,B){w.transparent===!0&&w.side===cn&&w.forceSinglePass===!1?(w.side=pn,w.needsUpdate=!0,$o(w,I,B),w.side=ir,w.needsUpdate=!0,$o(w,I,B),w.side=cn):$o(w,I,B)}this.compile=function(w,I,B=null){B===null&&(B=w),p=Be.get(B),p.init(I),_.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const G=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const ae=U.material;if(ae)if(Array.isArray(ae))for(let ye=0;ye<ae.length;ye++){const Ee=ae[ye];Ze(Ee,B,U),G.add(Ee)}else Ze(ae,B,U),G.add(ae)}),_.pop(),p=null,G},this.compileAsync=function(w,I,B=null){const G=this.compile(w,I,B);return new Promise(U=>{function ae(){if(G.forEach(function(ye){Le.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){U(w);return}setTimeout(ae,10)}Ne.get("KHR_parallel_shader_compile")!==null?ae():setTimeout(ae,10)})};let Ct=null;function sn(w){Ct&&Ct(w)}function je(){yt.stop()}function xt(){yt.start()}const yt=new lv;yt.setAnimationLoop(sn),typeof self<"u"&&yt.setContext(self),this.setAnimationLoop=function(w){Ct=w,z.setAnimationLoop(w),w===null?yt.stop():yt.start()},z.addEventListener("sessionstart",je),z.addEventListener("sessionend",xt),this.render=function(w,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(I),I=z.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,I,T),p=Be.get(w,_.length),p.init(I),_.push(p),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),De.setFromProjectionMatrix(me),ne=this.localClippingEnabled,V=Z.init(this.clippingPlanes,ne),v=ve.get(w,u.length),v.init(),u.push(v),z.enabled===!0&&z.isPresenting===!0){const ae=x.xr.getDepthSensingMesh();ae!==null&&ct(ae,I,-1/0,x.sortObjects)}ct(w,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(L,q),qe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,qe&&_e.addToRenderList(v,w),this.info.render.frame++,V===!0&&Z.beginShadows();const B=p.state.shadowsArray;ce.render(B,w,I),V===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,U=v.transmissive;if(p.setupLights(),I.isArrayCamera){const ae=I.cameras;if(U.length>0)for(let ye=0,Ee=ae.length;ye<Ee;ye++){const we=ae[ye];Qn(G,U,w,we)}qe&&_e.render(w);for(let ye=0,Ee=ae.length;ye<Ee;ye++){const we=ae[ye];gn(v,w,we,we.viewport)}}else U.length>0&&Qn(G,U,w,I),qe&&_e.render(w),gn(v,w,I);T!==null&&(A.updateMultisampleRenderTarget(T),A.updateRenderTargetMipmap(T)),w.isScene===!0&&w.onAfterRender(x,w,I),tt.resetDefaultState(),R=-1,j=null,_.pop(),_.length>0?(p=_[_.length-1],V===!0&&Z.setGlobalState(x.clippingPlanes,p.state.camera)):p=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function ct(w,I,B,G){if(w.visible===!1)return;if(w.layers.test(I.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(I);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||De.intersectsSprite(w)){G&&Re.setFromMatrixPosition(w.matrixWorld).applyMatrix4(me);const ye=$.update(w),Ee=w.material;Ee.visible&&v.push(w,ye,Ee,B,Re.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||De.intersectsObject(w))){const ye=$.update(w),Ee=w.material;if(G&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Re.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Re.copy(ye.boundingSphere.center)),Re.applyMatrix4(w.matrixWorld).applyMatrix4(me)),Array.isArray(Ee)){const we=ye.groups;for(let Oe=0,ke=we.length;Oe<ke;Oe++){const Pe=we[Oe],ot=Ee[Pe.materialIndex];ot&&ot.visible&&v.push(w,ye,ot,B,Re.z,Pe)}}else Ee.visible&&v.push(w,ye,Ee,B,Re.z,null)}}const ae=w.children;for(let ye=0,Ee=ae.length;ye<Ee;ye++)ct(ae[ye],I,B,G)}function gn(w,I,B,G){const U=w.opaque,ae=w.transmissive,ye=w.transparent;p.setupLightsView(B),V===!0&&Z.setGlobalState(x.clippingPlanes,B),G&&Te.viewport(y.copy(G)),U.length>0&&Yo(U,I,B),ae.length>0&&Yo(ae,I,B),ye.length>0&&Yo(ye,I,B),Te.buffers.depth.setTest(!0),Te.buffers.depth.setMask(!0),Te.buffers.color.setMask(!0),Te.setPolygonOffset(!1)}function Qn(w,I,B,G){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[G.id]===void 0&&(p.state.transmissionRenderTarget[G.id]=new Fr(1,1,{generateMipmaps:!0,type:Ne.has("EXT_color_buffer_half_float")||Ne.has("EXT_color_buffer_float")?Ho:Ri,minFilter:Ar,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:st.workingColorSpace}));const ae=p.state.transmissionRenderTarget[G.id],ye=G.viewport||y;ae.setSize(ye.z,ye.w);const Ee=x.getRenderTarget();x.setRenderTarget(ae),x.getClearColor(O),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),x.clear(),qe&&_e.render(B);const we=x.toneMapping;x.toneMapping=er;const Oe=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),p.setupLightsView(G),V===!0&&Z.setGlobalState(x.clippingPlanes,G),Yo(w,B,G),A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae),Ne.has("WEBGL_multisampled_render_to_texture")===!1){let ke=!1;for(let Pe=0,ot=I.length;Pe<ot;Pe++){const dt=I[Pe],wt=dt.object,vn=dt.geometry,it=dt.material,be=dt.group;if(it.side===cn&&wt.layers.test(G.layers)){const Ht=it.side;it.side=pn,it.needsUpdate=!0,nh(wt,B,G,vn,it,be),it.side=Ht,it.needsUpdate=!0,ke=!0}}ke===!0&&(A.updateMultisampleRenderTarget(ae),A.updateRenderTargetMipmap(ae))}x.setRenderTarget(Ee),x.setClearColor(O,W),Oe!==void 0&&(G.viewport=Oe),x.toneMapping=we}function Yo(w,I,B){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,ae=w.length;U<ae;U++){const ye=w[U],Ee=ye.object,we=ye.geometry,Oe=G===null?ye.material:G,ke=ye.group;Ee.layers.test(B.layers)&&nh(Ee,I,B,we,Oe,ke)}}function nh(w,I,B,G,U,ae){w.onBeforeRender(x,I,B,G,U,ae),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(x,I,B,G,w,ae),U.transparent===!0&&U.side===cn&&U.forceSinglePass===!1?(U.side=pn,U.needsUpdate=!0,x.renderBufferDirect(B,I,G,U,w,ae),U.side=ir,U.needsUpdate=!0,x.renderBufferDirect(B,I,G,U,w,ae),U.side=cn):x.renderBufferDirect(B,I,G,U,w,ae),w.onAfterRender(x,I,B,G,U,ae)}function $o(w,I,B){I.isScene!==!0&&(I=He);const G=Le.get(w),U=p.state.lights,ae=p.state.shadowsArray,ye=U.state.version,Ee=le.getParameters(w,U.state,ae,I,B),we=le.getProgramCacheKey(Ee);let Oe=G.programs;G.environment=w.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(w.isMeshStandardMaterial?F:M).get(w.envMap||G.environment),G.envMapRotation=G.environment!==null&&w.envMap===null?I.environmentRotation:w.envMapRotation,Oe===void 0&&(w.addEventListener("dispose",Fe),Oe=new Map,G.programs=Oe);let ke=Oe.get(we);if(ke!==void 0){if(G.currentProgram===ke&&G.lightsStateVersion===ye)return rh(w,Ee),ke}else Ee.uniforms=le.getUniforms(w),w.onBeforeCompile(Ee,x),ke=le.acquireProgram(Ee,we),Oe.set(we,ke),G.uniforms=Ee.uniforms;const Pe=G.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Pe.clippingPlanes=Z.uniform),rh(w,Ee),G.needsLights=_v(w),G.lightsStateVersion=ye,G.needsLights&&(Pe.ambientLightColor.value=U.state.ambient,Pe.lightProbe.value=U.state.probe,Pe.directionalLights.value=U.state.directional,Pe.directionalLightShadows.value=U.state.directionalShadow,Pe.spotLights.value=U.state.spot,Pe.spotLightShadows.value=U.state.spotShadow,Pe.rectAreaLights.value=U.state.rectArea,Pe.ltc_1.value=U.state.rectAreaLTC1,Pe.ltc_2.value=U.state.rectAreaLTC2,Pe.pointLights.value=U.state.point,Pe.pointLightShadows.value=U.state.pointShadow,Pe.hemisphereLights.value=U.state.hemi,Pe.directionalShadowMap.value=U.state.directionalShadowMap,Pe.directionalShadowMatrix.value=U.state.directionalShadowMatrix,Pe.spotShadowMap.value=U.state.spotShadowMap,Pe.spotLightMatrix.value=U.state.spotLightMatrix,Pe.spotLightMap.value=U.state.spotLightMap,Pe.pointShadowMap.value=U.state.pointShadowMap,Pe.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=ke,G.uniformsList=null,ke}function ih(w){if(w.uniformsList===null){const I=w.currentProgram.getUniforms();w.uniformsList=Qa.seqWithValue(I.seq,w.uniforms)}return w.uniformsList}function rh(w,I){const B=Le.get(w);B.outputColorSpace=I.outputColorSpace,B.batching=I.batching,B.batchingColor=I.batchingColor,B.instancing=I.instancing,B.instancingColor=I.instancingColor,B.instancingMorph=I.instancingMorph,B.skinning=I.skinning,B.morphTargets=I.morphTargets,B.morphNormals=I.morphNormals,B.morphColors=I.morphColors,B.morphTargetsCount=I.morphTargetsCount,B.numClippingPlanes=I.numClippingPlanes,B.numIntersection=I.numClipIntersection,B.vertexAlphas=I.vertexAlphas,B.vertexTangents=I.vertexTangents,B.toneMapping=I.toneMapping}function gv(w,I,B,G,U){I.isScene!==!0&&(I=He),A.resetTextureUnits();const ae=I.fog,ye=G.isMeshStandardMaterial?I.environment:null,Ee=T===null?x.outputColorSpace:T.isXRRenderTarget===!0?T.texture.colorSpace:lr,we=(G.isMeshStandardMaterial?F:M).get(G.envMap||ye),Oe=G.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,ke=!!B.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Pe=!!B.morphAttributes.position,ot=!!B.morphAttributes.normal,dt=!!B.morphAttributes.color;let wt=er;G.toneMapped&&(T===null||T.isXRRenderTarget===!0)&&(wt=x.toneMapping);const vn=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,it=vn!==void 0?vn.length:0,be=Le.get(G),Ht=p.state.lights;if(V===!0&&(ne===!0||w!==j)){const Cn=w===j&&G.id===R;Z.setState(G,w,Cn)}let rt=!1;G.version===be.__version?(be.needsLights&&be.lightsStateVersion!==Ht.state.version||be.outputColorSpace!==Ee||U.isBatchedMesh&&be.batching===!1||!U.isBatchedMesh&&be.batching===!0||U.isBatchedMesh&&be.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&be.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&be.instancing===!1||!U.isInstancedMesh&&be.instancing===!0||U.isSkinnedMesh&&be.skinning===!1||!U.isSkinnedMesh&&be.skinning===!0||U.isInstancedMesh&&be.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&be.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&be.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&be.instancingMorph===!1&&U.morphTexture!==null||be.envMap!==we||G.fog===!0&&be.fog!==ae||be.numClippingPlanes!==void 0&&(be.numClippingPlanes!==Z.numPlanes||be.numIntersection!==Z.numIntersection)||be.vertexAlphas!==Oe||be.vertexTangents!==ke||be.morphTargets!==Pe||be.morphNormals!==ot||be.morphColors!==dt||be.toneMapping!==wt||be.morphTargetsCount!==it)&&(rt=!0):(rt=!0,be.__version=G.version);let Fn=be.currentProgram;rt===!0&&(Fn=$o(G,I,U));let zr=!1,_n=!1,Ql=!1;const Rt=Fn.getUniforms(),bi=be.uniforms;if(Te.useProgram(Fn.program)&&(zr=!0,_n=!0,Ql=!0),G.id!==R&&(R=G.id,_n=!0),zr||j!==w){Xe.reverseDepthBuffer?(he.copy(w.projectionMatrix),aS(he),lS(he),Rt.setValue(b,"projectionMatrix",he)):Rt.setValue(b,"projectionMatrix",w.projectionMatrix),Rt.setValue(b,"viewMatrix",w.matrixWorldInverse);const Cn=Rt.map.cameraPosition;Cn!==void 0&&Cn.setValue(b,Ie.setFromMatrixPosition(w.matrixWorld)),Xe.logarithmicDepthBuffer&&Rt.setValue(b,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Rt.setValue(b,"isOrthographic",w.isOrthographicCamera===!0),j!==w&&(j=w,_n=!0,Ql=!0)}if(U.isSkinnedMesh){Rt.setOptional(b,U,"bindMatrix"),Rt.setOptional(b,U,"bindMatrixInverse");const Cn=U.skeleton;Cn&&(Cn.boneTexture===null&&Cn.computeBoneTexture(),Rt.setValue(b,"boneTexture",Cn.boneTexture,A))}U.isBatchedMesh&&(Rt.setOptional(b,U,"batchingTexture"),Rt.setValue(b,"batchingTexture",U._matricesTexture,A),Rt.setOptional(b,U,"batchingIdTexture"),Rt.setValue(b,"batchingIdTexture",U._indirectTexture,A),Rt.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&Rt.setValue(b,"batchingColorTexture",U._colorsTexture,A));const Jl=B.morphAttributes;if((Jl.position!==void 0||Jl.normal!==void 0||Jl.color!==void 0)&&xe.update(U,B,Fn),(_n||be.receiveShadow!==U.receiveShadow)&&(be.receiveShadow=U.receiveShadow,Rt.setValue(b,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(bi.envMap.value=we,bi.flipEnvMap.value=we.isCubeTexture&&we.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(bi.envMapIntensity.value=I.environmentIntensity),_n&&(Rt.setValue(b,"toneMappingExposure",x.toneMappingExposure),be.needsLights&&vv(bi,Ql),ae&&G.fog===!0&&fe.refreshFogUniforms(bi,ae),fe.refreshMaterialUniforms(bi,G,Q,H,p.state.transmissionRenderTarget[w.id]),Qa.upload(b,ih(be),bi,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Qa.upload(b,ih(be),bi,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Rt.setValue(b,"center",U.center),Rt.setValue(b,"modelViewMatrix",U.modelViewMatrix),Rt.setValue(b,"normalMatrix",U.normalMatrix),Rt.setValue(b,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Cn=G.uniformsGroups;for(let ec=0,xv=Cn.length;ec<xv;ec++){const sh=Cn[ec];D.update(sh,Fn),D.bind(sh,Fn)}}return Fn}function vv(w,I){w.ambientLightColor.needsUpdate=I,w.lightProbe.needsUpdate=I,w.directionalLights.needsUpdate=I,w.directionalLightShadows.needsUpdate=I,w.pointLights.needsUpdate=I,w.pointLightShadows.needsUpdate=I,w.spotLights.needsUpdate=I,w.spotLightShadows.needsUpdate=I,w.rectAreaLights.needsUpdate=I,w.hemisphereLights.needsUpdate=I}function _v(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return T},this.setRenderTargetTextures=function(w,I,B){Le.get(w.texture).__webglTexture=I,Le.get(w.depthTexture).__webglTexture=B;const G=Le.get(w);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=B===void 0,G.__autoAllocateDepthBuffer||Ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,I){const B=Le.get(w);B.__webglFramebuffer=I,B.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(w,I=0,B=0){T=w,P=I,C=B;let G=!0,U=null,ae=!1,ye=!1;if(w){const we=Le.get(w);if(we.__useDefaultFramebuffer!==void 0)Te.bindFramebuffer(b.FRAMEBUFFER,null),G=!1;else if(we.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(we.__hasExternalTextures)A.rebindTextures(w,Le.get(w.texture).__webglTexture,Le.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const Pe=w.depthTexture;if(we.__boundDepthTexture!==Pe){if(Pe!==null&&Le.has(Pe)&&(w.width!==Pe.image.width||w.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Oe=w.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(ye=!0);const ke=Le.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(ke[I])?U=ke[I][B]:U=ke[I],ae=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=Le.get(w).__webglMultisampledFramebuffer:Array.isArray(ke)?U=ke[B]:U=ke,y.copy(w.viewport),E.copy(w.scissor),k=w.scissorTest}else y.copy(J).multiplyScalar(Q).floor(),E.copy(se).multiplyScalar(Q).floor(),k=Ce;if(Te.bindFramebuffer(b.FRAMEBUFFER,U)&&G&&Te.drawBuffers(w,U),Te.viewport(y),Te.scissor(E),Te.setScissorTest(k),ae){const we=Le.get(w.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,we.__webglTexture,B)}else if(ye){const we=Le.get(w.texture),Oe=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,we.__webglTexture,B||0,Oe)}R=-1},this.readRenderTargetPixels=function(w,I,B,G,U,ae,ye){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ee=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){Te.bindFramebuffer(b.FRAMEBUFFER,Ee);try{const we=w.texture,Oe=we.format,ke=we.type;if(!Xe.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=w.width-G&&B>=0&&B<=w.height-U&&b.readPixels(I,B,G,U,Me.convert(Oe),Me.convert(ke),ae)}finally{const we=T!==null?Le.get(T).__webglFramebuffer:null;Te.bindFramebuffer(b.FRAMEBUFFER,we)}}},this.readRenderTargetPixelsAsync=async function(w,I,B,G,U,ae,ye){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ee=Le.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ee=Ee[ye]),Ee){const we=w.texture,Oe=we.format,ke=we.type;if(!Xe.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=w.width-G&&B>=0&&B<=w.height-U){Te.bindFramebuffer(b.FRAMEBUFFER,Ee);const Pe=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.bufferData(b.PIXEL_PACK_BUFFER,ae.byteLength,b.STREAM_READ),b.readPixels(I,B,G,U,Me.convert(Oe),Me.convert(ke),0);const ot=T!==null?Le.get(T).__webglFramebuffer:null;Te.bindFramebuffer(b.FRAMEBUFFER,ot);const dt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await oS(b,dt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,Pe),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,ae),b.deleteBuffer(Pe),b.deleteSync(dt),ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,I=null,B=0){w.isTexture!==!0&&(Za("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,w=arguments[1]);const G=Math.pow(2,-B),U=Math.floor(w.image.width*G),ae=Math.floor(w.image.height*G),ye=I!==null?I.x:0,Ee=I!==null?I.y:0;A.setTexture2D(w,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,ye,Ee,U,ae),Te.unbindTexture()},this.copyTextureToTexture=function(w,I,B=null,G=null,U=0){w.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,w=arguments[1],I=arguments[2],U=arguments[3]||0,B=null);let ae,ye,Ee,we,Oe,ke;B!==null?(ae=B.max.x-B.min.x,ye=B.max.y-B.min.y,Ee=B.min.x,we=B.min.y):(ae=w.image.width,ye=w.image.height,Ee=0,we=0),G!==null?(Oe=G.x,ke=G.y):(Oe=0,ke=0);const Pe=Me.convert(I.format),ot=Me.convert(I.type);A.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const dt=b.getParameter(b.UNPACK_ROW_LENGTH),wt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),vn=b.getParameter(b.UNPACK_SKIP_PIXELS),it=b.getParameter(b.UNPACK_SKIP_ROWS),be=b.getParameter(b.UNPACK_SKIP_IMAGES),Ht=w.isCompressedTexture?w.mipmaps[U]:w.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Ht.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Ee),b.pixelStorei(b.UNPACK_SKIP_ROWS,we),w.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,U,Oe,ke,ae,ye,Pe,ot,Ht.data):w.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,U,Oe,ke,Ht.width,Ht.height,Pe,Ht.data):b.texSubImage2D(b.TEXTURE_2D,U,Oe,ke,ae,ye,Pe,ot,Ht),b.pixelStorei(b.UNPACK_ROW_LENGTH,dt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,vn),b.pixelStorei(b.UNPACK_SKIP_ROWS,it),b.pixelStorei(b.UNPACK_SKIP_IMAGES,be),U===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Te.unbindTexture()},this.copyTextureToTexture3D=function(w,I,B=null,G=null,U=0){w.isTexture!==!0&&(Za("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,G=arguments[1]||null,w=arguments[2],I=arguments[3],U=arguments[4]||0);let ae,ye,Ee,we,Oe,ke,Pe,ot,dt;const wt=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(ae=B.max.x-B.min.x,ye=B.max.y-B.min.y,Ee=B.max.z-B.min.z,we=B.min.x,Oe=B.min.y,ke=B.min.z):(ae=wt.width,ye=wt.height,Ee=wt.depth,we=0,Oe=0,ke=0),G!==null?(Pe=G.x,ot=G.y,dt=G.z):(Pe=0,ot=0,dt=0);const vn=Me.convert(I.format),it=Me.convert(I.type);let be;if(I.isData3DTexture)A.setTexture3D(I,0),be=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),be=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const Ht=b.getParameter(b.UNPACK_ROW_LENGTH),rt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Fn=b.getParameter(b.UNPACK_SKIP_PIXELS),zr=b.getParameter(b.UNPACK_SKIP_ROWS),_n=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,wt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,wt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,we),b.pixelStorei(b.UNPACK_SKIP_ROWS,Oe),b.pixelStorei(b.UNPACK_SKIP_IMAGES,ke),w.isDataTexture||w.isData3DTexture?b.texSubImage3D(be,U,Pe,ot,dt,ae,ye,Ee,vn,it,wt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(be,U,Pe,ot,dt,ae,ye,Ee,vn,wt.data):b.texSubImage3D(be,U,Pe,ot,dt,ae,ye,Ee,vn,it,wt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Ht),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,rt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Fn),b.pixelStorei(b.UNPACK_SKIP_ROWS,zr),b.pixelStorei(b.UNPACK_SKIP_IMAGES,_n),U===0&&I.generateMipmaps&&b.generateMipmap(be),Te.unbindTexture()},this.initRenderTarget=function(w){Le.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),Te.unbindTexture()},this.resetState=function(){P=0,C=0,T=null,Te.reset(),tt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Wd?"display-p3":"srgb",n.unpackColorSpace=st.workingColorSpace===ql?"display-p3":"srgb"}}class jo{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new Qe(e),this.density=n}clone(){return new jo(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Kd extends Wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ci,this.environmentIntensity=1,this.environmentRotation=new ci,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class Zd extends Zn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,f=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=n;h++,d+=3){const g=i+h/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),f.x=(o[d]/e+1)/2,f.y=(o[d+1]/e+1)/2,l.push(f.x,f.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class li extends Zn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const f=[],h=[],d=[],g=[];let m=0;const v=[],p=i/2;let u=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(f),this.setAttribute("position",new Nt(h,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(g,2));function _(){const S=new N,P=new N;let C=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const j=[],y=R/s,E=y*(n-e)+e;for(let k=0;k<=r;k++){const O=k/r,W=O*l+a,K=Math.sin(W),H=Math.cos(W);P.x=E*K,P.y=-y*i+p,P.z=E*H,h.push(P.x,P.y,P.z),S.set(K,T,H).normalize(),d.push(S.x,S.y,S.z),g.push(O,1-y),j.push(m++)}v.push(j)}for(let R=0;R<r;R++)for(let j=0;j<s;j++){const y=v[j][R],E=v[j+1][R],k=v[j+1][R+1],O=v[j][R+1];e>0&&(f.push(y,E,O),C+=3),n>0&&(f.push(E,k,O),C+=3)}c.addGroup(u,C,0),u+=C}function x(S){const P=m,C=new Je,T=new N;let R=0;const j=S===!0?e:n,y=S===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,p*y,0),d.push(0,y,0),g.push(.5,.5),m++;const E=m;for(let k=0;k<=r;k++){const W=k/r*l+a,K=Math.cos(W),H=Math.sin(W);T.x=j*H,T.y=p*y,T.z=j*K,h.push(T.x,T.y,T.z),d.push(0,y,0),C.x=K*.5+.5,C.y=H*.5*y+.5,g.push(C.x,C.y),m++}for(let k=0;k<r;k++){const O=P+k,W=E+k;S===!0?f.push(W,W+1,O):f.push(W+1,W,O),R+=3}c.addGroup(u,R,S===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new li(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Cr extends li{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Cr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class jn extends Zn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const f=[],h=new N,d=new N,g=[],m=[],v=[],p=[];for(let u=0;u<=i;u++){const _=[],x=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),m.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(C+S,1-x),_.push(c++)}f.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const x=f[u][_+1],S=f[u][_],P=f[u+1][_],C=f[u+1][_+1];(u!==0||o>0)&&g.push(x,S,C),(u!==i-1||l<Math.PI)&&g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new Nt(m,3)),this.setAttribute("normal",new Nt(v,3)),this.setAttribute("uv",new Nt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jn(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Qd extends Zn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],f=new N,h=new N,d=new N;for(let g=0;g<=i;g++)for(let m=0;m<=r;m++){const v=m/r*s,p=g/i*Math.PI*2;h.x=(e+n*Math.cos(p))*Math.cos(v),h.y=(e+n*Math.cos(p))*Math.sin(v),h.z=n*Math.sin(p),a.push(h.x,h.y,h.z),f.x=e*Math.cos(v),f.y=e*Math.sin(v),d.subVectors(h,f).normalize(),l.push(d.x,d.y,d.z),c.push(m/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let m=1;m<=r;m++){const v=(r+1)*g+m-1,p=(r+1)*(g-1)+m-1,u=(r+1)*(g-1)+m,_=(r+1)*g+m;o.push(v,p,_),o.push(p,u,_)}this.setIndex(o),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qd(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ze extends Xo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ci,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zl extends Wt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class Jd extends Zl{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const su=new _t,dm=new N,hm=new N;class mv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Yd,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;dm.setFromMatrixPosition(e.matrixWorld),n.position.copy(dm),hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hm),n.updateMatrixWorld(),su.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(su),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(su)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pm=new _t,no=new N,ou=new N;class _T extends mv{constructor(){super(new en(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),no.setFromMatrixPosition(e.matrixWorld),i.position.copy(no),ou.copy(i.position),ou.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(ou),i.updateMatrixWorld(),r.makeTranslation(-no.x,-no.y,-no.z),pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm)}}class _i extends Zl{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _T}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xT extends mv{constructor(){super(new cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Rl extends Zl{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Wt.DEFAULT_UP),this.updateMatrix(),this.target=new Wt,this.shadow=new xT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class eh extends Zl{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const mm=new _t;class th{constructor(e,n,i=0,r=1/0){this.ray=new tv(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new jd,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mm),this}intersectObject(e,n=!0,i=[]){return Gf(e,this,i,n),i.sort(gm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Gf(e[r],this,i,n);return i.sort(gm),i}}function gm(t,e){return t.distance-e.distance}function Gf(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Gf(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Od}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Od);function yT(){const t=vt.useRef(null),[e,n]=vt.useState(null),[i,r]=vt.useState(!1),[s,o]=vt.useState(""),a=Ye(v=>v.streak),l=Ye(v=>v.unlockedLocations),c=Ye(v=>v.fogOpacity),f=Ye(v=>v.cameraShake),h=Ye(v=>v.hapticEnabled),d=Ye(v=>v.masteryPoints),g=l.includes("malecon")||l.includes("full_city");vt.useEffect(()=>{if(!t.current||!g)return;let v,p,u,_,x,S,P=[];v=new Kd,v.fog=new jo(16742970,c*.035),v.background=new Qe(16739125),p=new en(60,window.innerWidth/window.innerHeight,.1,1e3),p.position.set(0,5,15),p.lookAt(0,2,0),u=new qd({antialias:!0,alpha:!1}),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=jl,u.toneMapping=Yl,u.toneMappingExposure=1.5,t.current.appendChild(u.domElement),x=new th,S=new Je;const C=new eh(16752736,.9);v.add(C);const T=new Jd(16765088,9133628,.6);T.position.set(0,10,0),v.add(T);const R=new Rl(16760960,2);R.position.set(-20,15,-10),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.bias=-.001,v.add(R);const j=new Rl(16736304,.8);j.position.set(20,10,5),v.add(j);const y=new _i(16755312,1.5,30);y.position.set(-15,8,-20),v.add(y);const E=new _i(16765024,1,8);E.position.set(-8,3,3),v.add(E);const k=new _i(16765024,1,8);k.position.set(8,3,3),v.add(k);const O=new It(200,200,50,50),W=new ze({color:2784680,roughness:.15,metalness:.6,transparent:!0,opacity:.9,side:cn}),K=new pe(O,W);K.rotation.x=-Math.PI/2,K.position.y=-.5,K.receiveShadow=!0,v.add(K);const H=O.attributes.position.array,Q=new et(30,.3,4),L=new ze({color:10512186,roughness:.6}),q=new pe(Q,L);q.position.set(0,0,3),q.castShadow=!0,q.receiveShadow=!0,v.add(q);for(const Z of[-1.8,1.8]){for(let xe=-14;xe<=14;xe+=2){const de=new li(.04,.04,1.2,6),Ae=new ze({color:9133628,roughness:.5}),Me=new pe(de,Ae);Me.position.set(Z,.8,xe+3),Me.castShadow=!0,v.add(Me)}const ce=new et(.08,.08,28),_e=new pe(ce,postMat);_e.position.set(Z,1.4,3),v.add(_e)}[{x:-12,z:3},{x:-8,z:3},{x:8,z:3},{x:12,z:3},{x:-4,z:8},{x:4,z:8}].forEach((Z,ce)=>{const _e=new li(.15,.25,4,8),xe=new ze({color:9136970,roughness:.8}),de=new pe(_e,xe);de.position.set(Z.x,2,Z.z),de.castShadow=!0,v.add(de);for(let Ae=0;Ae<6;Ae++){const Me=new Cr(.6,2.5,4),tt=new ze({color:3978097,roughness:.6,emissive:1725744,emissiveIntensity:.2}),D=new pe(Me,tt),ue=Ae/6*Math.PI*2;D.position.set(Z.x+Math.cos(ue)*.8,4+Math.sin(ue*.3)*.2,Z.z+Math.sin(ue)*.8),D.rotation.z=Math.cos(ue)*.5,D.rotation.x=Math.sin(ue)*.5,D.castShadow=!0,v.add(D)}});const se=new jn(3.5,32,32),Ce=new oi({color:16747586,transparent:!0,opacity:.95}),De=new pe(se,Ce);De.position.set(-15,3,-40),v.add(De);const V=new jn(5.5,32,32),ne=new oi({color:16764023,transparent:!0,opacity:.4}),he=new pe(V,ne);he.position.copy(De.position),v.add(he);const me=new jn(8,32,32),Ie=new oi({color:16757575,transparent:!0,opacity:.15}),Re=new pe(me,Ie);Re.position.copy(De.position),v.add(Re);const He=new et(2,.5,.8),qe=new ze({color:6974058,roughness:.4,metalness:.3}),Ue=new pe(He,qe);Ue.position.set(-3,.5,2),Ue.castShadow=!0,Ue.receiveShadow=!0,Ue.userData={practicePhrase:"I sit on the bench and watch the sunset",phoneticFocus:"TH in 'the', CH in 'watch'",emoji:"🪑",name:"Bench",color:6974058},v.add(Ue),P.push(Ue);for(const[Z,ce]of[[-.8,-.3],[.8,-.3],[-.8,.3],[.8,.3]]){const _e=new et(.08,.5,.08),xe=new pe(_e,qe);xe.position.set(-3+Z,.25,2+ce),v.add(xe)}const b=new Cr(.8,2,4),At=new ze({color:15237662,roughness:.4,metalness:.2}),Ne=new pe(b,At);Ne.rotation.z=Math.PI/2,Ne.position.set(5,.2,-5),Ne.castShadow=!0,Ne.userData={practicePhrase:"The boat sails across the calm water",phoneticFocus:"TH in 'the', R in 'across'",emoji:"⛵",name:"Boat",color:15237662},v.add(Ne),P.push(Ne);const Xe=new Cr(.6,1.5,3),Te=new ze({color:16775920,roughness:.7,side:cn}),Ge=new pe(Xe,Te);Ge.position.set(5,1.2,-5),Ge.castShadow=!0,v.add(Ge);const Le=new jn(.3,8,8),A=new ze({color:16777215,roughness:.3,emissive:4473924,emissiveIntensity:.1}),M=new pe(Le,A);M.position.set(-2,6,-10),M.castShadow=!0,M.userData={practicePhrase:"The seagull flies over the ocean",phoneticFocus:"TH in 'the', L in 'flies'",emoji:"🦅",name:"Seagull",color:16777215},v.add(M),P.push(M);const F=new Cr(.5,1.2,3),X=new ze({color:16119285,roughness:.3}),ee=new pe(F,X);ee.position.set(-2.4,6,-10),ee.rotation.z=.3,v.add(ee);const $=new pe(F,X);$.position.set(-1.6,6,-10),$.rotation.z=-.3,v.add($);for(const Z of[-10,-5,5,10]){const ce=new li(.05,.05,3,6),_e=new ze({color:3815994,roughness:.4,metalness:.6}),xe=new pe(ce,_e);xe.position.set(Z,1.5,4.5),xe.castShadow=!0,v.add(xe);const de=new jn(.15,8,8),Ae=new ze({color:16769120,emissive:16764992,emissiveIntensity:.8}),Me=new pe(de,Ae);Me.position.set(Z,3,4.5),v.add(Me)}let le=0;const fe=()=>{_=requestAnimationFrame(fe),le+=.016;for(let Z=0;Z<H.length;Z+=3){const ce=H[Z],_e=H[Z+1];H[Z+2]=Math.sin(ce*.1+le)*.15+Math.cos(_e*.1+le*.7)*.1}O.attributes.position.needsUpdate=!0,O.computeVertexNormals(),he.scale.setScalar(1+Math.sin(le*.5)*.05),Re.scale.setScalar(1+Math.sin(le*.3)*.08),Ce.opacity=.9+Math.sin(le*.4)*.05,M.position.y=6+Math.sin(le*.8)*.5,M.position.x=-2+Math.sin(le*.3)*2,ee.rotation.z=.3+Math.sin(le*4)*.3,$.rotation.z=-.3-Math.sin(le*4)*.3,Ne.position.y=.2+Math.sin(le*1.2)*.1,Ne.rotation.z=Math.PI/2+Math.sin(le*.8)*.05,Ge.position.y=1.2+Math.sin(le*1.2)*.1,f>0?(p.position.x=(Math.random()-.5)*f*.1,p.position.y=5+(Math.random()-.5)*f*.1):(p.position.x=Math.sin(le*.1)*.5,p.position.y=5+Math.sin(le*.15)*.3),p.lookAt(0,2,0),v.fog.density=c*.035,u.render(v,p)};fe();const ve=Z=>{const ce=u.domElement.getBoundingClientRect();S.x=(Z.clientX-ce.left)/ce.width*2-1,S.y=-((Z.clientY-ce.top)/ce.height)*2+1,x.setFromCamera(S,p);const _e=x.intersectObjects(P);if(_e.length>0){const xe=_e[0].object,de=xe.userData;if(!de.practicePhrase)return;if(n(de),o(""),h&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const Ae=new SpeechSynthesisUtterance(de.practicePhrase);Ae.lang="en-US",Ae.rate=.85,speechSynthesis.speak(Ae)}P.forEach(Ae=>{Ae.material&&Ae.material.emissive&&Ae.material.emissive.setHex(0)}),xe.material&&xe.material.emissive&&xe.material.emissive.setHex(4460800)}};u.domElement.addEventListener("click",ve);const Be=()=>{p.aspect=window.innerWidth/window.innerHeight,p.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Be),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",Be),u.domElement.removeEventListener("click",ve),t.current&&u.domElement&&t.current.removeChild(u.domElement),u.dispose()}},[g,c,f,h]);const m=()=>{if(!e||!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const v=window.SpeechRecognition||window.webkitSpeechRecognition,p=new v;p.lang="en-US",p.continuous=!1,p.interimResults=!1,p.onresult=u=>{const _=u.results[0][0].transcript.toLowerCase(),x=u.results[0][0].confidence,P=e.practicePhrase.toLowerCase().split(" "),C=_.split(" ");let T=0;for(const j of C)P.includes(j)&&T++;const R=Math.min(100,Math.round(T/P.length*100));R>=85&&x>.7?(o(`🔥 ${R}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),Ye.getState().recordSession(R,!0)):R>=60?(o(`💪 ${R}% — Good effort! Focus on: ${e.phoneticFocus}`),Ye.getState().recordSession(R,!1)):o(`📖 ${R}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},p.onerror=()=>{o("Could not hear you. Try again."),r(!1)},p.onend=()=>r(!1),p.start()};return g?te.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[te.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),te.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[te.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"🌅 Malecón"}),te.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",d," pts"]})]}),e&&te.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[te.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),te.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),te.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),te.jsx("button",{onClick:m,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&te.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]}):te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🌅"}),te.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"10px"},children:"Malecón — Locked"}),te.jsxs("p",{style:{fontSize:"1rem",opacity:.7},children:["Reach a ",10," day streak to unlock the Malecón"]}),te.jsxs("p",{style:{fontSize:"2rem",marginTop:"20px"},children:["Current streak: ",a," 🔥"]}),te.jsxs("p",{style:{fontSize:"0.9rem",opacity:.5,marginTop:"15px"},children:[10-a," more days to unlock"]})]})}function vm(){const t=vt.useRef(null),[e,n]=vt.useState(null),[i,r]=vt.useState(!1),[s,o]=vt.useState(""),a=Ye(m=>m.streak),l=Ye(m=>m.unlockedLocations),c=Ye(m=>m.cameraShake),f=Ye(m=>m.hapticEnabled),h=Ye(m=>m.masteryPoints),d=l.includes("home");vt.useEffect(()=>{if(!t.current||!d)return;let m,v,p,u,_,x,S=[],P=[];m=new Kd,m.fog=new jo(3811872,.012),m.background=new Qe(2759184),v=new en(60,window.innerWidth/window.innerHeight,.1,100),v.position.set(0,4,12),v.lookAt(0,2,0),p=new qd({antialias:!0,alpha:!1}),p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.shadowMap.enabled=!0,p.shadowMap.type=jl,p.toneMapping=Yl,p.toneMappingExposure=1.4,t.current.appendChild(p.domElement),_=new th,x=new Je;const C=new eh(16757632,.7);m.add(C);const T=new Jd(16766624,7029286,.5);T.position.set(0,8,0),m.add(T);const R=new _i(16760960,2.5,25);R.position.set(0,6.5,0),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.bias=-.001,m.add(R);const j=new _i(16765072,1.5,20);j.position.set(5,6.5,2),m.add(j);const y=new _i(16756848,1.5,20);y.position.set(-5,6.5,2),m.add(y);const E=new _i(16733440,2,10);E.position.set(-5,1.5,-3),m.add(E);const k=new _i(16769120,1.5,8);k.position.set(4,3,2),m.add(k);const O=new Rl(16746581,.8);O.position.set(0,4,-10),m.add(O);const W=new It(20,20),K=new ze({color:9133628,roughness:.7,metalness:.1}),H=new pe(W,K);H.rotation.x=-Math.PI/2,H.position.y=0,H.receiveShadow=!0,m.add(H);const Q=new ze({color:7032378,side:cn,roughness:.9}),L=new It(20,8),q=new pe(L,Q);q.position.set(0,4,-8),q.receiveShadow=!0,m.add(q);const J=new It(20,8),se=new pe(J,Q);se.position.set(-10,4,0),se.rotation.y=Math.PI/2,se.receiveShadow=!0,m.add(se);const Ce=new It(20,8),De=new pe(Ce,Q);De.position.set(10,4,0),De.rotation.y=-Math.PI/2,De.receiveShadow=!0,m.add(De);const V=new It(20,20),ne=new ze({color:4863272,side:cn,roughness:1}),he=new pe(V,ne);he.position.set(0,8,0),he.rotation.x=Math.PI/2,m.add(he);const me=new Zd(4,32),Ie=new ze({color:12597547,roughness:.8}),Re=new pe(me,Ie);Re.rotation.x=-Math.PI/2,Re.position.set(0,.02,0),Re.receiveShadow=!0,m.add(Re);const He=new et(3,4,1),qe=new ze({color:5921370,roughness:.6}),Ue=new pe(He,qe);Ue.position.set(-5,2,-7.8),Ue.castShadow=!0,Ue.receiveShadow=!0,m.add(Ue);const b=new et(2,1.5,.5),At=new oi({color:16746496}),Ne=new pe(b,At);Ne.position.set(-5,1.5,-7.3),m.add(Ne);for(let je=0;je<40;je++){const xt=new jn(.1,6,6),yt=new oi({color:je%3===0?16733440:16763904,transparent:!0,opacity:.9}),ct=new pe(xt,yt);ct.position.set(-5+(Math.random()-.5)*1.5,1.5+Math.random()*.5,-7.2),ct.userData={vy:.02+Math.random()*.03,vx:(Math.random()-.5)*.01,life:1,decay:.004+Math.random()*.004},m.add(ct),P.push(ct)}const Xe=new et(1.2,.15,1.2),Te=new ze({color:10512186,roughness:.6}),Ge=new pe(Xe,Te);Ge.position.set(3,.6,2),Ge.castShadow=!0,Ge.receiveShadow=!0,m.add(Ge);const Le=new et(1.2,1.2,.15),A=new pe(Le,Te);A.position.set(3,1.2,2.5),A.castShadow=!0,m.add(A);for(const[je,xt]of[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]){const yt=new et(.1,.6,.1),ct=new pe(yt,Te);ct.position.set(3+je,.3,2+xt),ct.castShadow=!0,m.add(ct)}Ge.userData={practicePhrase:"I sit on the chair and read a book",phoneticFocus:"CH in 'chair', R in 'read'",emoji:"🪑",name:"Chair",color:10512186},A.userData=Ge.userData,S.push(Ge,A);const M=new et(2.5,.15,1.5),F=new ze({color:8015658,roughness:.5}),X=new pe(M,F);X.position.set(0,1.5,-1),X.castShadow=!0,X.receiveShadow=!0,m.add(X);for(const[je,xt]of[[-1.1,-.6],[1.1,-.6],[-1.1,.6],[1.1,.6]]){const yt=new et(.12,1.5,.12),ct=new pe(yt,F);ct.position.set(je,.75,-1+xt),ct.castShadow=!0,m.add(ct)}X.userData={practicePhrase:"I eat breakfast at the table every morning",phoneticFocus:"EA in 'breakfast', T in 'table'",emoji:"🍽️",name:"Table",color:8015658},S.push(X);const ee=new et(2,1.2,.1),$=new ze({color:1118481,emissive:2254591,emissiveIntensity:.6,roughness:.3}),le=new pe(ee,$);le.position.set(5,3,-7.7),le.castShadow=!0,m.add(le);const fe=new et(2.5,1.5,.8),ve=new ze({color:3815994,roughness:.4}),Be=new pe(fe,ve);Be.position.set(5,.75,-7.5),Be.castShadow=!0,m.add(Be),le.userData={practicePhrase:"I watch TV after dinner",phoneticFocus:"W in 'watch', T in 'after'",emoji:"📺",name:"TV",color:1118481},S.push(le);const Z=new et(2,4,.8),ce=new ze({color:7030064,roughness:.6}),_e=new pe(Z,ce);_e.position.set(-8,2,-3),_e.rotation.y=Math.PI/2,_e.castShadow=!0,_e.receiveShadow=!0,m.add(_e);const xe=[16737894,6711039,6750054,16777062,16738047,6750207,16750916];for(let je=0;je<4;je++)for(let xt=0;xt<5;xt++){const yt=new et(.3,.6,.5),ct=new ze({color:xe[(je*5+xt)%xe.length],roughness:.4,emissive:xe[(je*5+xt)%xe.length],emissiveIntensity:.15}),gn=new pe(yt,ct);gn.position.set(-8+(xt-2)*.35,.8+je*.9,-2.5),gn.castShadow=!0,m.add(gn)}_e.userData={practicePhrase:"The bookshelf is full of stories",phoneticFocus:"TH in 'the', F in 'full'",emoji:"📚",name:"Bookshelf",color:7030064},S.push(_e);const de=new et(1.5,2.5,.1),Ae=new ze({color:14329120,roughness:.2,metalness:.8}),Me=new pe(de,Ae);Me.position.set(8,3,2),Me.rotation.y=-Math.PI/2,Me.castShadow=!0,m.add(Me);const tt=new It(1.3,2.3),D=new ze({color:8965375,emissive:3368601,emissiveIntensity:.4,shininess:120,metalness:.9,roughness:.1}),ue=new pe(tt,D);ue.position.set(7.95,3,2),ue.rotation.y=-Math.PI/2,m.add(ue),Me.userData={practicePhrase:"I look in the mirror and practice my accent",phoneticFocus:"L in 'look', R in 'mirror'",emoji:"🪞",name:"Mirror",color:14329120},S.push(Me);const z=new It(2.5,2.5),Y=new oi({color:16742970,transparent:!0,opacity:.8}),oe=new pe(z,Y);oe.position.set(0,4,-7.9),m.add(oe);const re=new li(.4,.3,.8,12),Fe=new ze({color:13395507,roughness:.5}),Ke=new pe(re,Fe);Ke.position.set(-3,.4,5),Ke.castShadow=!0,m.add(Ke);for(let je=0;je<8;je++){const xt=new jn(.3,8,6),yt=new ze({color:4885034,roughness:.7}),ct=new pe(xt,yt),gn=je/8*Math.PI*2;ct.position.set(-3+Math.cos(gn)*.3,1.1+Math.sin(je)*.2,5+Math.sin(gn)*.3),ct.scale.y=1.5,ct.castShadow=!0,m.add(ct)}let lt=0;const Ze=()=>{u=requestAnimationFrame(Ze),lt+=.016,P.forEach(je=>{je.position.y+=je.userData.vy,je.position.x+=je.userData.vx,je.userData.life-=je.userData.decay,je.material.opacity=je.userData.life,je.userData.life<=0&&(je.position.set(-5+(Math.random()-.5)*1.5,1.5,-7.2),je.userData.life=1)}),E.intensity=1.8+Math.sin(lt*8)*.4+Math.random()*.3,$.emissiveIntensity=.5+Math.sin(lt*3)*.15,D.emissiveIntensity=.3+Math.sin(lt*2)*.1,c>0?(v.position.x=(Math.random()-.5)*c*.1,v.position.y=4+(Math.random()-.5)*c*.1):(v.position.x=Math.sin(lt*.08)*.8,v.position.y=4+Math.sin(lt*.12)*.3),v.position.z=12,v.lookAt(0,2,0),p.render(m,v)};Ze();const Ct=je=>{const xt=p.domElement.getBoundingClientRect();x.x=(je.clientX-xt.left)/xt.width*2-1,x.y=-((je.clientY-xt.top)/xt.height)*2+1,_.setFromCamera(x,v);const yt=_.intersectObjects(S);if(yt.length>0){const ct=yt[0].object,gn=ct.userData;if(!gn.practicePhrase)return;if(n(gn),o(""),f&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const Qn=new SpeechSynthesisUtterance(gn.practicePhrase);Qn.lang="en-US",Qn.rate=.85,speechSynthesis.speak(Qn)}S.forEach(Qn=>{Qn.material&&Qn.material.emissive&&Qn.material.emissive.setHex(0)}),ct.material&&ct.material.emissive&&ct.material.emissive.setHex(4460817)}};p.domElement.addEventListener("click",Ct);const sn=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",sn),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",sn),p.domElement.removeEventListener("click",Ct),t.current&&p.domElement&&t.current.removeChild(p.domElement),p.dispose()}},[d,c,f]);const g=()=>{if(!e)return;if(!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const m=window.SpeechRecognition||window.webkitSpeechRecognition,v=new m;v.lang="en-US",v.continuous=!1,v.interimResults=!1,v.onresult=p=>{const u=p.results[0][0].transcript.toLowerCase(),_=p.results[0][0].confidence,S=e.practicePhrase.toLowerCase().split(" "),P=u.split(" ");let C=0;for(const R of P)S.includes(R)&&C++;const T=Math.min(100,Math.round(C/S.length*100));T>=85&&_>.7?(o(`🔥 ${T}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),Ye.getState().recordSession(T,!0)):T>=60?(o(`💪 ${T}% — Good effort! Focus on: ${e.phoneticFocus}`),Ye.getState().recordSession(T,!1)):o(`📖 ${T}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},v.onerror=()=>{o("Could not hear you. Try again."),r(!1)},v.onend=()=>r(!1),v.start()};return te.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[te.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),te.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[te.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"🏠 Home"}),te.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",h," pts"]})]}),te.jsx("div",{style:{position:"absolute",top:"20px",right:"20px",display:"flex",gap:"8px",fontFamily:"sans-serif"},children:Ye.getState().getUnlockProgress().map(m=>te.jsx("button",{onClick:()=>{if(m.unlocked){const v={1:"home",3:"school",5:"gym",7:"cafeteria",10:"malecon",14:"forum",21:"centro",30:"full_city"};Ye.getState().navigateTo(v[m.day])}},style:{fontSize:"1.5rem",padding:"8px 12px",borderRadius:"10px",border:m.unlocked?"1px solid rgba(255,107,53,0.4)":"1px solid rgba(100,100,100,0.2)",background:m.unlocked?"rgba(255,107,53,0.15)":"rgba(50,50,50,0.3)",cursor:m.unlocked?"pointer":"not-allowed",opacity:m.unlocked?1:.4,filter:m.unlocked?"none":"grayscale(1)",transition:"all 0.3s"},title:m.unlocked?m.location:`Unlocks at Day ${m.day} (${m.daysRemaining} days left)`,children:m.emoji},m.day))}),e&&te.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[te.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),te.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),te.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),te.jsx("button",{onClick:g,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&te.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]})}function ST(){const t=vt.useRef(null),[e,n]=vt.useState(null),[i,r]=vt.useState(!1),[s,o]=vt.useState(""),a=Ye(m=>m.streak),l=Ye(m=>m.unlockedLocations),c=Ye(m=>m.cameraShake),f=Ye(m=>m.hapticEnabled),h=Ye(m=>m.masteryPoints),d=l.includes("school")||l.includes("full_city");vt.useEffect(()=>{if(!t.current||!d)return;let m,v,p,u,_,x,S=[];m=new Kd,m.fog=new jo(3820122,.015),m.background=new Qe(2767434),v=new en(60,window.innerWidth/window.innerHeight,.1,100),v.position.set(0,4.5,12),v.lookAt(0,2,0),p=new qd({antialias:!0,alpha:!1}),p.setSize(window.innerWidth,window.innerHeight),p.setPixelRatio(Math.min(window.devicePixelRatio,2)),p.shadowMap.enabled=!0,p.shadowMap.type=jl,p.toneMapping=Yl,p.toneMappingExposure=1.4,t.current.appendChild(p.domElement),_=new th,x=new Je;const P=new eh(13426175,.8);m.add(P);const C=new Jd(14544639,9083562,.5);C.position.set(0,8,0),m.add(C);for(const z of[-4,0,4]){const Y=new _i(16777215,1.8,15);Y.position.set(z,7,0),m.add(Y);const oe=new et(2.5,.1,.3),re=new ze({color:16777215,emissive:16777215,emissiveIntensity:.9,roughness:.3}),Fe=new pe(oe,re);Fe.position.set(z,7.5,0),m.add(Fe)}const T=new Rl(11588863,.8);T.position.set(-15,4,5),T.castShadow=!0,T.shadow.mapSize.width=2048,T.shadow.mapSize.height=2048,T.shadow.bias=-.001,m.add(T);const R=new It(20,20),j=new ze({color:10136224,roughness:.3,metalness:.1}),y=new pe(R,j);y.rotation.x=-Math.PI/2,y.position.y=0,y.receiveShadow=!0,m.add(y);const E=new ze({color:6986426,roughness:.9}),k=new pe(new It(20,8),E);k.position.set(0,4,-8),k.receiveShadow=!0,m.add(k);const O=new pe(new It(20,8),E);O.position.set(-10,4,0),O.rotation.y=Math.PI/2,O.receiveShadow=!0,m.add(O);const W=new pe(new It(20,8),E);W.position.set(10,4,0),W.rotation.y=-Math.PI/2,W.receiveShadow=!0,m.add(W);const K=new pe(new It(20,20),new ze({color:15263976,roughness:1}));K.position.set(0,8,0),K.rotation.x=Math.PI/2,m.add(K);for(let z=0;z<3;z++){const Y=new It(3,3.5),oe=new oi({color:8962303,transparent:!0,opacity:.7}),re=new pe(Y,oe);re.position.set(-9.9,4,-4+z*4),re.rotation.y=Math.PI/2,m.add(re);const Fe=new et(.1,4,4),Ke=new ze({color:16777215,roughness:.4}),lt=new pe(Fe,Ke);lt.position.set(-9.8,4,-4+z*4),m.add(lt)}const H=new et(4,2.5,.1),Q=new ze({color:16316664,roughness:.2,emissive:4473924,emissiveIntensity:.1}),L=new pe(H,Q);L.position.set(0,4,-7.85),L.receiveShadow=!0,L.castShadow=!0,m.add(L);const q=new et(4.3,2.8,.15),J=new ze({color:2763306,roughness:.4}),se=new pe(q,J);se.position.set(0,4,-7.9),m.add(se);for(let z=0;z<3;z++){const Y=new et(2.5,.05,.02),oe=new oi({color:2245802}),re=new pe(Y,oe);re.position.set(0,4.8-z*.6,-7.78),m.add(re)}L.userData={practicePhrase:"The teacher writes on the whiteboard",phoneticFocus:"TH in 'the', W in 'writes'",emoji:"📋",name:"Whiteboard",color:16316664},S.push(L);const Ce=new et(2,.1,1.2),De=new ze({color:12623984,roughness:.5}),V=new pe(Ce,De);V.position.set(-3,1.8,1),V.castShadow=!0,V.receiveShadow=!0,m.add(V);for(const[z,Y]of[[-.9,-.5],[.9,-.5],[-.9,.5],[.9,.5]]){const oe=new et(.08,1.8,.08),re=new pe(oe,De);re.position.set(-3+z,.9,1+Y),re.castShadow=!0,m.add(re)}const ne=new et(.8,.05,.6),he=new ze({color:2245802,roughness:.4}),me=new pe(ne,he);me.position.set(-3.3,1.9,1),me.castShadow=!0,m.add(me),V.userData={practicePhrase:"I sit at my desk and study English",phoneticFocus:"S in 'sit', ST in 'study'",emoji:"📖",name:"Desk",color:12623984},S.push(V);const Ie=new et(.9,1.1,.5),Re=new ze({color:13911344,roughness:.6}),He=new pe(Ie,Re);He.position.set(3,.55,3),He.castShadow=!0,He.userData={practicePhrase:"My backpack is heavy with books today",phoneticFocus:"B in 'backpack', H in 'heavy'",emoji:"🎒",name:"Backpack",color:13911344},m.add(He),S.push(He);const qe=new Qd(.15,.03,8,16,Math.PI),Ue=new ze({color:9121824,roughness:.5}),b=new pe(qe,Ue);b.position.set(2.7,.8,3.25),b.rotation.x=Math.PI/2,m.add(b);const At=new pe(qe,Ue);At.position.set(3.3,.8,3.25),At.rotation.x=Math.PI/2,m.add(At);const Ne=new li(.04,.04,1.2,8),Xe=new ze({color:16766720,roughness:.3,metalness:.3}),Te=new pe(Ne,Xe);Te.rotation.z=Math.PI/2,Te.position.set(-2.5,1.9,1.2),Te.castShadow=!0,Te.userData={practicePhrase:"I write with a pencil in my notebook",phoneticFocus:"R in 'write', P in 'pencil'",emoji:"🖊️",name:"Pencil",color:16766720},m.add(Te),S.push(Te);const Ge=new Cr(.04,.15,8),Le=new ze({color:9127187}),A=new pe(Ge,Le);A.rotation.z=-Math.PI/2,A.position.set(-1.9,1.9,1.2),m.add(A);const M=new jn(.35,16,16,0,Math.PI*2,0,Math.PI/2),F=new ze({color:13408563,roughness:.2,metalness:.8}),X=new pe(M,F);X.position.set(6,5,-7.6),X.castShadow=!0,X.userData={practicePhrase:"The bell rings when class is over",phoneticFocus:"TH in 'the', L in 'bell'",emoji:"🔔",name:"Bell",color:13408563},m.add(X),S.push(X);for(let z=0;z<4;z++){const Y=2+z*2.5,oe=new et(.8,.08,.8),re=new ze({color:4876938,roughness:.5}),Fe=new pe(oe,re);Fe.position.set(Y,1.2,3.5),Fe.castShadow=!0,m.add(Fe);const Ke=new et(.8,.8,.08),lt=new pe(Ke,re);lt.position.set(Y,1.6,3.9),lt.castShadow=!0,m.add(lt);for(const[sn,je]of[[-.35,-.35],[.35,-.35],[-.35,.35],[.35,.35]]){const xt=new et(.06,1.2,.06),yt=new pe(xt,re);yt.position.set(Y+sn,.6,3.5+je),m.add(yt)}const Ze=new et(.8,.06,.4),Ct=new pe(Ze,De);Ct.position.set(Y,1.7,3.1),Ct.castShadow=!0,m.add(Ct)}const ee=new li(.05,.15,.4,12),$=new ze({color:2763306,roughness:.3,metalness:.7}),le=new pe(ee,$);le.position.set(-7,.2,-5),m.add(le);const fe=new jn(.5,24,24),ve=new ze({color:2254506,roughness:.4,emissive:1127253,emissiveIntensity:.2}),Be=new pe(fe,ve);Be.position.set(-7,.9,-5),Be.castShadow=!0,Be.userData={isGlobe:!0},m.add(Be);const Z=new li(.03,.03,5,8),ce=new ze({color:9079434,metalness:.8,roughness:.2}),_e=new pe(Z,ce);_e.position.set(7,2.5,-5),_e.castShadow=!0,m.add(_e);const xe=new It(1.5,1),de=new ze({color:4500036,side:cn,roughness:.6}),Ae=new pe(xe,de);Ae.position.set(7.75,4,-5),Ae.userData={isFlag:!0},m.add(Ae);let Me=0;const tt=()=>{u=requestAnimationFrame(tt),Me+=.016,Be.rotation.y+=.005,Ae.rotation.z=Math.sin(Me*2)*.05,Ae.position.x=7.75+Math.sin(Me*2)*.05,c>0?(v.position.x=(Math.random()-.5)*c*.1,v.position.y=4.5+(Math.random()-.5)*c*.1):(v.position.x=Math.sin(Me*.08)*.6,v.position.y=4.5+Math.sin(Me*.12)*.2),v.position.z=12,v.lookAt(0,2,0),p.render(m,v)};tt();const D=z=>{const Y=p.domElement.getBoundingClientRect();x.x=(z.clientX-Y.left)/Y.width*2-1,x.y=-((z.clientY-Y.top)/Y.height)*2+1,_.setFromCamera(x,v);const oe=_.intersectObjects(S);if(oe.length>0){const re=oe[0].object,Fe=re.userData;if(!Fe.practicePhrase)return;if(n(Fe),o(""),f&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const Ke=new SpeechSynthesisUtterance(Fe.practicePhrase);Ke.lang="en-US",Ke.rate=.85,speechSynthesis.speak(Ke)}S.forEach(Ke=>{Ke.material&&Ke.material.emissive&&Ke.material.emissive.setHex(0)}),re.material&&re.material.emissive&&re.material.emissive.setHex(4460817)}};p.domElement.addEventListener("click",D);const ue=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),p.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ue),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",ue),p.domElement.removeEventListener("click",D),t.current&&p.domElement&&t.current.removeChild(p.domElement),p.dispose()}},[d,c,f]);const g=()=>{if(!e||!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const m=window.SpeechRecognition||window.webkitSpeechRecognition,v=new m;v.lang="en-US",v.continuous=!1,v.interimResults=!1,v.onresult=p=>{const u=p.results[0][0].transcript.toLowerCase(),_=p.results[0][0].confidence,S=e.practicePhrase.toLowerCase().split(" "),P=u.split(" ");let C=0;for(const R of P)S.includes(R)&&C++;const T=Math.min(100,Math.round(C/S.length*100));T>=85&&_>.7?(o(`🔥 ${T}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),Ye.getState().recordSession(T,!0)):T>=60?(o(`💪 ${T}% — Good effort! Focus on: ${e.phoneticFocus}`),Ye.getState().recordSession(T,!1)):o(`📖 ${T}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},v.onerror=()=>{o("Could not hear you. Try again."),r(!1)},v.onend=()=>r(!1),v.start()};return d?te.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[te.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),te.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[te.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"🏫 School"}),te.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",h," pts"]})]}),e&&te.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[te.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),te.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),te.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),te.jsx("button",{onClick:g,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&te.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]}):te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #1e3a5f 0%, #2c3e50 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🏫"}),te.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"10px"},children:"School — Locked"}),te.jsx("p",{style:{fontSize:"1rem",opacity:.7},children:"Reach a 3 day streak to unlock School"}),te.jsxs("p",{style:{fontSize:"2rem",marginTop:"20px"},children:["Current streak: ",a," 🔥"]}),te.jsxs("p",{style:{fontSize:"0.9rem",opacity:.5,marginTop:"15px"},children:[Math.max(0,3-a)," more days to unlock"]})]})}function MT(){const t=Ye(e=>e.cameraTarget);switch(Ye(e=>e.unlockedLocations),t){case"home":return te.jsx(vm,{});case"school":return te.jsx(ST,{});case"malecon":return te.jsx(yT,{});case"gym":return te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"4rem"},children:"💪"}),te.jsx("h2",{style:{fontSize:"1.5rem"},children:"Gym — Coming Soon"}),te.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 5 streak"})]});case"cafeteria":return te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #3e2723 0%, #2c1810 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"4rem"},children:"☕"}),te.jsx("h2",{style:{fontSize:"1.5rem"},children:"Cafetería — Coming Soon"}),te.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 7 streak"})]});case"forum":return te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #1a237e 0%, #0d47a1 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"4rem"},children:"🛍️"}),te.jsx("h2",{style:{fontSize:"1.5rem"},children:"Forum — Coming Soon"}),te.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 14 streak"})]});case"centro":return te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #263238 0%, #37474f 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"4rem"},children:"🏙️"}),te.jsx("h2",{style:{fontSize:"1.5rem"},children:"Centro — Coming Soon"}),te.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 21 streak"})]});case"full_city":return te.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)",color:"white",fontFamily:"sans-serif"},children:[te.jsx("div",{style:{fontSize:"5rem"},children:"🌌"}),te.jsx("h2",{style:{fontSize:"2rem",textShadow:"0 0 20px rgba(255,107,53,0.5)"},children:"Full City + Holographic Mode"}),te.jsx("p",{style:{fontSize:"1.2rem",opacity:.8},children:"All zones unlocked. Alma is holographic."}),te.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"20px",flexWrap:"wrap",justifyContent:"center"},children:[te.jsx("button",{onClick:()=>Ye.getState().navigateTo("home"),style:mr,children:"🏠"}),te.jsx("button",{onClick:()=>Ye.getState().navigateTo("school"),style:mr,children:"🏫"}),te.jsx("button",{onClick:()=>Ye.getState().navigateTo("malecon"),style:mr,children:"🌅"}),te.jsx("button",{onClick:()=>Ye.getState().navigateTo("gym"),style:mr,children:"💪"}),te.jsx("button",{onClick:()=>Ye.getState().navigateTo("cafeteria"),style:mr,children:"☕"}),te.jsx("button",{onClick:()=>Ye.getState().navigateTo("forum"),style:mr,children:"🛍️"}),te.jsx("button",{onClick:()=>Ye.getState().navigateTo("centro"),style:mr,children:"🏙️"})]})]});default:return te.jsx(vm,{})}}const mr={fontSize:"2rem",padding:"12px 16px",borderRadius:"12px",border:"1px solid rgba(255,107,53,0.3)",background:"rgba(255,107,53,0.1)",cursor:"pointer",transition:"all 0.3s"};function ET(){const[t,e]=vt.useState(!1),[n,i]=vt.useState(!1),[r,s]=vt.useState(0),o=Ye(l=>l.updateStreak);Ye(l=>l.unlockedLocations),vt.useEffect(()=>{const l=localStorage.getItem("alma_streak");if(localStorage.getItem("alma_last_practice"),l){const f=parseInt(l)||0;f>0&&(o(f),s(f))}localStorage.getItem("alma_visited")||(i(!0),localStorage.setItem("alma_visited","true")),typeof window<"u"&&window.addEventListener("alma-streak-update",f=>{var d;const h=((d=f.detail)==null?void 0:d.streak)||0;h>0&&(o(h),s(h),localStorage.setItem("alma_streak",String(h)),localStorage.setItem("alma_last_practice",new Date().toISOString()))}),setTimeout(()=>{const f=document.getElementById("loading");f?(f.classList.add("fade"),setTimeout(()=>{f.style.display="none",e(!0)},500)):e(!0)},800)},[]);const a=()=>{const l=document.documentElement;l.requestFullscreen?l.requestFullscreen():l.webkitRequestFullscreen&&l.webkitRequestFullscreen(),i(!1)};return n&&t?te.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)",color:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",zIndex:1e3,padding:"40px"},children:[te.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🌌"}),te.jsx("h1",{style:{fontSize:"2rem",marginBottom:"10px",textShadow:"0 0 20px rgba(255,107,53,0.5)"},children:"Virtual City"}),te.jsx("p",{style:{fontSize:"1rem",opacity:.7,marginBottom:"8px"},children:"AccentBridges — Your Voice. Elevated."}),te.jsx("p",{style:{fontSize:"0.9rem",opacity:.5,marginBottom:"30px",textAlign:"center"},children:"Practice your American English accent in a 3D world. Tap objects to hear phrases, then say them back. Your streak unlocks new locations in Culiacán."}),te.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"30px",fontSize:"1.5rem"},children:[te.jsx("span",{children:"🏠"}),te.jsx("span",{style:{opacity:.3},children:"🏫"}),te.jsx("span",{style:{opacity:.3},children:"💪"}),te.jsx("span",{style:{opacity:.3},children:"☕"}),te.jsx("span",{style:{opacity:.3},children:"🌅"}),te.jsx("span",{style:{opacity:.3},children:"🛍️"}),te.jsx("span",{style:{opacity:.3},children:"🏙️"}),te.jsx("span",{style:{opacity:.3},children:"🌌"})]}),te.jsx("p",{style:{fontSize:"0.85rem",opacity:.4,marginBottom:"20px"},children:"🔊 Best experienced with sound on"}),te.jsx("button",{onClick:a,style:{background:"linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)",color:"white",border:"none",padding:"16px 40px",borderRadius:"30px",fontSize:"1.1rem",fontWeight:"bold",cursor:"pointer",boxShadow:"0 4px 20px rgba(255,107,53,0.4)",transition:"transform 0.2s"},children:"Enter Virtual City 🚀"})]}):te.jsxs("div",{style:{width:"100vw",height:"100vh"},children:[te.jsx(MT,{}),te.jsx("div",{style:{position:"fixed",bottom:"10px",right:"10px",background:"rgba(0,0,0,0.6)",color:"#FF6B35",padding:"6px 14px",borderRadius:"20px",fontSize:"0.85rem",fontFamily:"sans-serif",fontWeight:"bold",pointerEvents:"none",zIndex:100,backdropFilter:"blur(10px)"},children:Ye.getState().streak>0?`${Ye.getState().streak} day streak 🔥`:"Start practicing! 🎙"})]})}au.createRoot(document.getElementById("root")).render(te.jsx(Pm.StrictMode,{children:te.jsx(ET,{})}));
//# sourceMappingURL=index-V3UJiD7X.js.map
