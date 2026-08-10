(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function _m(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xm={exports:{}},Dl={},ym={exports:{}},it={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ho=Symbol.for("react.element"),yv=Symbol.for("react.portal"),Sv=Symbol.for("react.fragment"),Mv=Symbol.for("react.strict_mode"),Ev=Symbol.for("react.profiler"),wv=Symbol.for("react.provider"),Tv=Symbol.for("react.context"),Av=Symbol.for("react.forward_ref"),Cv=Symbol.for("react.suspense"),Rv=Symbol.for("react.memo"),Pv=Symbol.for("react.lazy"),oh=Symbol.iterator;function bv(t){return t===null||typeof t!="object"?null:(t=oh&&t[oh]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Mm=Object.assign,Em={};function ks(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}ks.prototype.isReactComponent={};ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function wm(){}wm.prototype=ks.prototype;function $d(t,e,n){this.props=t,this.context=e,this.refs=Em,this.updater=n||Sm}var qd=$d.prototype=new wm;qd.constructor=$d;Mm(qd,ks.prototype);qd.isPureReactComponent=!0;var ah=Array.isArray,Tm=Object.prototype.hasOwnProperty,Kd={current:null},Am={key:!0,ref:!0,__self:!0,__source:!0};function Cm(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Tm.call(e,i)&&!Am.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Ho,type:t,key:s,ref:o,props:r,_owner:Kd.current}}function Lv(t,e){return{$$typeof:Ho,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Zd(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ho}function Dv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lh=/\/+/g;function ac(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dv(""+t.key):e.toString(36)}function ka(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ho:case yv:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ac(o,0):i,ah(r)?(n="",t!=null&&(n=t.replace(lh,"$&/")+"/"),ka(r,e,n,"",function(c){return c})):r!=null&&(Zd(r)&&(r=Lv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ah(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ac(s,a);o+=ka(s,e,n,l,r)}else if(l=bv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ac(s,a++),o+=ka(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ea(t,e,n){if(t==null)return t;var i=[],r=0;return ka(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Iv(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var an={current:null},za={transition:null},Uv={ReactCurrentDispatcher:an,ReactCurrentBatchConfig:za,ReactCurrentOwner:Kd};function Rm(){throw Error("act(...) is not supported in production builds of React.")}it.Children={map:ea,forEach:function(t,e,n){ea(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ea(t,function(){e++}),e},toArray:function(t){return ea(t,function(e){return e})||[]},only:function(t){if(!Zd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};it.Component=ks;it.Fragment=Sv;it.Profiler=Ev;it.PureComponent=$d;it.StrictMode=Mv;it.Suspense=Cv;it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Uv;it.act=Rm;it.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=Mm({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Kd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)Tm.call(e,l)&&!Am.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:Ho,type:t.type,key:r,ref:s,props:i,_owner:o}};it.createContext=function(t){return t={$$typeof:Tv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wv,_context:t},t.Consumer=t};it.createElement=Cm;it.createFactory=function(t){var e=Cm.bind(null,t);return e.type=t,e};it.createRef=function(){return{current:null}};it.forwardRef=function(t){return{$$typeof:Av,render:t}};it.isValidElement=Zd;it.lazy=function(t){return{$$typeof:Pv,_payload:{_status:-1,_result:t},_init:Iv}};it.memo=function(t,e){return{$$typeof:Rv,type:t,compare:e===void 0?null:e}};it.startTransition=function(t){var e=za.transition;za.transition={};try{t()}finally{za.transition=e}};it.unstable_act=Rm;it.useCallback=function(t,e){return an.current.useCallback(t,e)};it.useContext=function(t){return an.current.useContext(t)};it.useDebugValue=function(){};it.useDeferredValue=function(t){return an.current.useDeferredValue(t)};it.useEffect=function(t,e){return an.current.useEffect(t,e)};it.useId=function(){return an.current.useId()};it.useImperativeHandle=function(t,e,n){return an.current.useImperativeHandle(t,e,n)};it.useInsertionEffect=function(t,e){return an.current.useInsertionEffect(t,e)};it.useLayoutEffect=function(t,e){return an.current.useLayoutEffect(t,e)};it.useMemo=function(t,e){return an.current.useMemo(t,e)};it.useReducer=function(t,e,n){return an.current.useReducer(t,e,n)};it.useRef=function(t){return an.current.useRef(t)};it.useState=function(t){return an.current.useState(t)};it.useSyncExternalStore=function(t,e,n){return an.current.useSyncExternalStore(t,e,n)};it.useTransition=function(){return an.current.useTransition()};it.version="18.3.1";ym.exports=it;var dt=ym.exports;const Pm=_m(dt);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nv=dt,Fv=Symbol.for("react.element"),Ov=Symbol.for("react.fragment"),kv=Object.prototype.hasOwnProperty,zv=Nv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bv={key:!0,ref:!0,__self:!0,__source:!0};function bm(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)kv.call(e,i)&&!Bv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Fv,type:t,key:s,ref:o,props:r,_owner:zv.current}}Dl.Fragment=Ov;Dl.jsx=bm;Dl.jsxs=bm;xm.exports=Dl;var Q=xm.exports,hu={},Lm={exports:{}},Rn={},Dm={exports:{}},Im={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,q){var J=L.length;L.push(q);e:for(;0<J;){var se=J-1>>>1,Se=L[se];if(0<r(Se,q))L[se]=q,L[J]=Se,J=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var q=L[0],J=L.pop();if(J!==q){L[0]=J;e:for(var se=0,Se=L.length,Ne=Se>>>1;se<Ne;){var W=2*(se+1)-1,ie=L[W],he=W+1,me=L[he];if(0>r(ie,J))he<Se&&0>r(me,ie)?(L[se]=me,L[he]=J,se=he):(L[se]=ie,L[W]=J,se=W);else if(he<Se&&0>r(me,J))L[se]=me,L[he]=J,se=he;else break e}}return q}function r(L,q){var J=L.sortIndex-q.sortIndex;return J!==0?J:L.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],d=1,h=null,f=3,g=!1,p=!1,v=!1,m=typeof setTimeout=="function"?setTimeout:null,u=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(L){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=L)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function S(L){if(v=!1,x(L),!p)if(n(l)!==null)p=!0,B(P);else{var q=n(c);q!==null&&ee(S,q.startTime-L)}}function P(L,q){p=!1,v&&(v=!1,u(R),R=-1),g=!0;var J=f;try{for(x(q),h=n(l);h!==null&&(!(h.expirationTime>q)||L&&!E());){var se=h.callback;if(typeof se=="function"){h.callback=null,f=h.priorityLevel;var Se=se(h.expirationTime<=q);q=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),x(q)}else i(l);h=n(l)}if(h!==null)var Ne=!0;else{var W=n(c);W!==null&&ee(S,W.startTime-q),Ne=!1}return Ne}finally{h=null,f=J,g=!1}}var C=!1,w=null,R=-1,X=5,y=-1;function E(){return!(t.unstable_now()-y<X)}function k(){if(w!==null){var L=t.unstable_now();y=L;var q=!0;try{q=w(!0,L)}finally{q?F():(C=!1,w=null)}}else C=!1}var F;if(typeof _=="function")F=function(){_(k)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,K=V.port2;V.port1.onmessage=k,F=function(){K.postMessage(null)}}else F=function(){m(k,0)};function B(L){w=L,C||(C=!0,F())}function ee(L,q){R=m(function(){L(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){p||g||(p=!0,B(P))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):X=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(f){case 1:case 2:case 3:var q=3;break;default:q=f}var J=f;f=q;try{return L()}finally{f=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,q){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var J=f;f=L;try{return q()}finally{f=J}},t.unstable_scheduleCallback=function(L,q,J){var se=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?se+J:se):J=se,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=J+Se,L={id:d++,callback:q,priorityLevel:L,startTime:J,expirationTime:Se,sortIndex:-1},J>se?(L.sortIndex=J,e(c,L),n(l)===null&&L===n(c)&&(v?(u(R),R=-1):v=!0,ee(S,J-se))):(L.sortIndex=Se,e(l,L),p||g||(p=!0,B(P))),L},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(L){var q=f;return function(){var J=f;f=q;try{return L.apply(this,arguments)}finally{f=J}}}})(Im);Dm.exports=Im;var Hv=Dm.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gv=dt,Cn=Hv;function oe(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Um=new Set,So={};function kr(t,e){ws(t,e),ws(t+"Capture",e)}function ws(t,e){for(So[t]=e,t=0;t<e.length;t++)Um.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),pu=Object.prototype.hasOwnProperty,Vv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ch={},uh={};function Wv(t){return pu.call(uh,t)?!0:pu.call(ch,t)?!1:Vv.test(t)?uh[t]=!0:(ch[t]=!0,!1)}function Xv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function jv(t,e,n,i){if(e===null||typeof e>"u"||Xv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function ln(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){qt[t]=new ln(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];qt[e]=new ln(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){qt[t]=new ln(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){qt[t]=new ln(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){qt[t]=new ln(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){qt[t]=new ln(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){qt[t]=new ln(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){qt[t]=new ln(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){qt[t]=new ln(t,5,!1,t.toLowerCase(),null,!1,!1)});var Qd=/[\-:]([a-z])/g;function Jd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);qt[e]=new ln(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Qd,Jd);qt[e]=new ln(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Qd,Jd);qt[e]=new ln(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){qt[t]=new ln(t,1,!1,t.toLowerCase(),null,!1,!1)});qt.xlinkHref=new ln("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){qt[t]=new ln(t,1,!1,t.toLowerCase(),null,!0,!0)});function ef(t,e,n,i){var r=qt.hasOwnProperty(e)?qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(jv(e,n,r,i)&&(n=null),i||r===null?Wv(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var bi=Gv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ta=Symbol.for("react.element"),ns=Symbol.for("react.portal"),is=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),mu=Symbol.for("react.profiler"),Nm=Symbol.for("react.provider"),Fm=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),gu=Symbol.for("react.suspense"),vu=Symbol.for("react.suspense_list"),rf=Symbol.for("react.memo"),zi=Symbol.for("react.lazy"),Om=Symbol.for("react.offscreen"),dh=Symbol.iterator;function Ws(t){return t===null||typeof t!="object"?null:(t=dh&&t[dh]||t["@@iterator"],typeof t=="function"?t:null)}var Rt=Object.assign,lc;function so(t){if(lc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);lc=e&&e[1]||""}return`
`+lc+t}var cc=!1;function uc(t,e){if(!t||cc)return"";cc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{cc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?so(t):""}function Yv(t){switch(t.tag){case 5:return so(t.type);case 16:return so("Lazy");case 13:return so("Suspense");case 19:return so("SuspenseList");case 0:case 2:case 15:return t=uc(t.type,!1),t;case 11:return t=uc(t.type.render,!1),t;case 1:return t=uc(t.type,!0),t;default:return""}}function _u(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case is:return"Fragment";case ns:return"Portal";case mu:return"Profiler";case tf:return"StrictMode";case gu:return"Suspense";case vu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Fm:return(t.displayName||"Context")+".Consumer";case Nm:return(t._context.displayName||"Context")+".Provider";case nf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case rf:return e=t.displayName||null,e!==null?e:_u(t.type)||"Memo";case zi:e=t._payload,t=t._init;try{return _u(t(e))}catch{}}return null}function $v(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return _u(e);case 8:return e===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function nr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function km(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qv(t){var e=km(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function na(t){t._valueTracker||(t._valueTracker=qv(t))}function zm(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=km(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function il(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function xu(t,e){var n=e.checked;return Rt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=nr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Bm(t,e){e=e.checked,e!=null&&ef(t,"checked",e,!1)}function yu(t,e){Bm(t,e);var n=nr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Su(t,e.type,n):e.hasOwnProperty("defaultValue")&&Su(t,e.type,nr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function hh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Su(t,e,n){(e!=="number"||il(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var oo=Array.isArray;function ms(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+nr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Mu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(oe(91));return Rt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(oe(92));if(oo(n)){if(1<n.length)throw Error(oe(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:nr(n)}}function Hm(t,e){var n=nr(e.value),i=nr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Gm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Eu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Gm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ia,Vm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ia=ia||document.createElement("div"),ia.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ia.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Mo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var fo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Kv=["Webkit","ms","Moz","O"];Object.keys(fo).forEach(function(t){Kv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),fo[e]=fo[t]})});function Wm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||fo.hasOwnProperty(t)&&fo[t]?(""+e).trim():e+"px"}function Xm(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Wm(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Zv=Rt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function wu(t,e){if(e){if(Zv[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(oe(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(oe(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(oe(61))}if(e.style!=null&&typeof e.style!="object")throw Error(oe(62))}}function Tu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Au=null;function sf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Cu=null,gs=null,vs=null;function gh(t){if(t=Wo(t)){if(typeof Cu!="function")throw Error(oe(280));var e=t.stateNode;e&&(e=Ol(e),Cu(t.stateNode,t.type,e))}}function jm(t){gs?vs?vs.push(t):vs=[t]:gs=t}function Ym(){if(gs){var t=gs,e=vs;if(vs=gs=null,gh(t),e)for(t=0;t<e.length;t++)gh(e[t])}}function $m(t,e){return t(e)}function qm(){}var dc=!1;function Km(t,e,n){if(dc)return t(e,n);dc=!0;try{return $m(t,e,n)}finally{dc=!1,(gs!==null||vs!==null)&&(qm(),Ym())}}function Eo(t,e){var n=t.stateNode;if(n===null)return null;var i=Ol(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(oe(231,e,typeof n));return n}var Ru=!1;if(Ti)try{var Xs={};Object.defineProperty(Xs,"passive",{get:function(){Ru=!0}}),window.addEventListener("test",Xs,Xs),window.removeEventListener("test",Xs,Xs)}catch{Ru=!1}function Qv(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(d){this.onError(d)}}var ho=!1,rl=null,sl=!1,Pu=null,Jv={onError:function(t){ho=!0,rl=t}};function e_(t,e,n,i,r,s,o,a,l){ho=!1,rl=null,Qv.apply(Jv,arguments)}function t_(t,e,n,i,r,s,o,a,l){if(e_.apply(this,arguments),ho){if(ho){var c=rl;ho=!1,rl=null}else throw Error(oe(198));sl||(sl=!0,Pu=c)}}function zr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Zm(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vh(t){if(zr(t)!==t)throw Error(oe(188))}function n_(t){var e=t.alternate;if(!e){if(e=zr(t),e===null)throw Error(oe(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vh(r),t;if(s===i)return vh(r),e;s=s.sibling}throw Error(oe(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(oe(189))}}if(n.alternate!==i)throw Error(oe(190))}if(n.tag!==3)throw Error(oe(188));return n.stateNode.current===n?t:e}function Qm(t){return t=n_(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var eg=Cn.unstable_scheduleCallback,_h=Cn.unstable_cancelCallback,i_=Cn.unstable_shouldYield,r_=Cn.unstable_requestPaint,Dt=Cn.unstable_now,s_=Cn.unstable_getCurrentPriorityLevel,of=Cn.unstable_ImmediatePriority,tg=Cn.unstable_UserBlockingPriority,ol=Cn.unstable_NormalPriority,o_=Cn.unstable_LowPriority,ng=Cn.unstable_IdlePriority,Il=null,ai=null;function a_(t){if(ai&&typeof ai.onCommitFiberRoot=="function")try{ai.onCommitFiberRoot(Il,t,void 0,(t.current.flags&128)===128)}catch{}}var Qn=Math.clz32?Math.clz32:u_,l_=Math.log,c_=Math.LN2;function u_(t){return t>>>=0,t===0?32:31-(l_(t)/c_|0)|0}var ra=64,sa=4194304;function ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function al(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ao(a):(s&=o,s!==0&&(i=ao(s)))}else o=n&~r,o!==0?i=ao(o):s!==0&&(i=ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Qn(e),r=1<<n,i|=t[n],e&=~r;return i}function d_(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function f_(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Qn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=d_(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function bu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ig(){var t=ra;return ra<<=1,!(ra&4194240)&&(ra=64),t}function fc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Go(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Qn(e),t[e]=n}function h_(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Qn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function af(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Qn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ft=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var sg,lf,og,ag,lg,Lu=!1,oa=[],ji=null,Yi=null,$i=null,wo=new Map,To=new Map,Hi=[],p_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xh(t,e){switch(t){case"focusin":case"focusout":ji=null;break;case"dragenter":case"dragleave":Yi=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":wo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":To.delete(e.pointerId)}}function js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Wo(e),e!==null&&lf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function m_(t,e,n,i,r){switch(e){case"focusin":return ji=js(ji,t,e,n,i,r),!0;case"dragenter":return Yi=js(Yi,t,e,n,i,r),!0;case"mouseover":return $i=js($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return wo.set(s,js(wo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,To.set(s,js(To.get(s)||null,t,e,n,i,r)),!0}return!1}function cg(t){var e=Er(t.target);if(e!==null){var n=zr(e);if(n!==null){if(e=n.tag,e===13){if(e=Zm(n),e!==null){t.blockedOn=e,lg(t.priority,function(){og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ba(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Du(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Au=i,n.target.dispatchEvent(i),Au=null}else return e=Wo(n),e!==null&&lf(e),t.blockedOn=n,!1;e.shift()}return!0}function yh(t,e,n){Ba(t)&&n.delete(e)}function g_(){Lu=!1,ji!==null&&Ba(ji)&&(ji=null),Yi!==null&&Ba(Yi)&&(Yi=null),$i!==null&&Ba($i)&&($i=null),wo.forEach(yh),To.forEach(yh)}function Ys(t,e){t.blockedOn===e&&(t.blockedOn=null,Lu||(Lu=!0,Cn.unstable_scheduleCallback(Cn.unstable_NormalPriority,g_)))}function Ao(t){function e(r){return Ys(r,t)}if(0<oa.length){Ys(oa[0],t);for(var n=1;n<oa.length;n++){var i=oa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(ji!==null&&Ys(ji,t),Yi!==null&&Ys(Yi,t),$i!==null&&Ys($i,t),wo.forEach(e),To.forEach(e),n=0;n<Hi.length;n++)i=Hi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Hi.length&&(n=Hi[0],n.blockedOn===null);)cg(n),n.blockedOn===null&&Hi.shift()}var _s=bi.ReactCurrentBatchConfig,ll=!0;function v_(t,e,n,i){var r=ft,s=_s.transition;_s.transition=null;try{ft=1,cf(t,e,n,i)}finally{ft=r,_s.transition=s}}function __(t,e,n,i){var r=ft,s=_s.transition;_s.transition=null;try{ft=4,cf(t,e,n,i)}finally{ft=r,_s.transition=s}}function cf(t,e,n,i){if(ll){var r=Du(t,e,n,i);if(r===null)Mc(t,e,i,cl,n),xh(t,i);else if(m_(r,t,e,n,i))i.stopPropagation();else if(xh(t,i),e&4&&-1<p_.indexOf(t)){for(;r!==null;){var s=Wo(r);if(s!==null&&sg(s),s=Du(t,e,n,i),s===null&&Mc(t,e,i,cl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Mc(t,e,i,null,n)}}var cl=null;function Du(t,e,n,i){if(cl=null,t=sf(i),t=Er(t),t!==null)if(e=zr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Zm(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return cl=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(s_()){case of:return 1;case tg:return 4;case ol:case o_:return 16;case ng:return 536870912;default:return 16}default:return 16}}var Wi=null,uf=null,Ha=null;function dg(){if(Ha)return Ha;var t,e=uf,n=e.length,i,r="value"in Wi?Wi.value:Wi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ha=r.slice(t,1<i?1-i:void 0)}function Ga(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function aa(){return!0}function Sh(){return!1}function Pn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?aa:Sh,this.isPropagationStopped=Sh,this}return Rt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=aa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=aa)},persist:function(){},isPersistent:aa}),e}var zs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},df=Pn(zs),Vo=Rt({},zs,{view:0,detail:0}),x_=Pn(Vo),hc,pc,$s,Ul=Rt({},Vo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ff,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==$s&&($s&&t.type==="mousemove"?(hc=t.screenX-$s.screenX,pc=t.screenY-$s.screenY):pc=hc=0,$s=t),hc)},movementY:function(t){return"movementY"in t?t.movementY:pc}}),Mh=Pn(Ul),y_=Rt({},Ul,{dataTransfer:0}),S_=Pn(y_),M_=Rt({},Vo,{relatedTarget:0}),mc=Pn(M_),E_=Rt({},zs,{animationName:0,elapsedTime:0,pseudoElement:0}),w_=Pn(E_),T_=Rt({},zs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),A_=Pn(T_),C_=Rt({},zs,{data:0}),Eh=Pn(C_),R_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},P_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},b_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function L_(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=b_[t])?!!e[t]:!1}function ff(){return L_}var D_=Rt({},Vo,{key:function(t){if(t.key){var e=R_[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ga(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?P_[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ff,charCode:function(t){return t.type==="keypress"?Ga(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ga(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),I_=Pn(D_),U_=Rt({},Ul,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wh=Pn(U_),N_=Rt({},Vo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ff}),F_=Pn(N_),O_=Rt({},zs,{propertyName:0,elapsedTime:0,pseudoElement:0}),k_=Pn(O_),z_=Rt({},Ul,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),B_=Pn(z_),H_=[9,13,27,32],hf=Ti&&"CompositionEvent"in window,po=null;Ti&&"documentMode"in document&&(po=document.documentMode);var G_=Ti&&"TextEvent"in window&&!po,fg=Ti&&(!hf||po&&8<po&&11>=po),Th=" ",Ah=!1;function hg(t,e){switch(t){case"keyup":return H_.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var rs=!1;function V_(t,e){switch(t){case"compositionend":return pg(e);case"keypress":return e.which!==32?null:(Ah=!0,Th);case"textInput":return t=e.data,t===Th&&Ah?null:t;default:return null}}function W_(t,e){if(rs)return t==="compositionend"||!hf&&hg(t,e)?(t=dg(),Ha=uf=Wi=null,rs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return fg&&e.locale!=="ko"?null:e.data;default:return null}}var X_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ch(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!X_[t.type]:e==="textarea"}function mg(t,e,n,i){jm(i),e=ul(e,"onChange"),0<e.length&&(n=new df("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var mo=null,Co=null;function j_(t){Ag(t,0)}function Nl(t){var e=as(t);if(zm(e))return t}function Y_(t,e){if(t==="change")return e}var gg=!1;if(Ti){var gc;if(Ti){var vc="oninput"in document;if(!vc){var Rh=document.createElement("div");Rh.setAttribute("oninput","return;"),vc=typeof Rh.oninput=="function"}gc=vc}else gc=!1;gg=gc&&(!document.documentMode||9<document.documentMode)}function Ph(){mo&&(mo.detachEvent("onpropertychange",vg),Co=mo=null)}function vg(t){if(t.propertyName==="value"&&Nl(Co)){var e=[];mg(e,Co,t,sf(t)),Km(j_,e)}}function $_(t,e,n){t==="focusin"?(Ph(),mo=e,Co=n,mo.attachEvent("onpropertychange",vg)):t==="focusout"&&Ph()}function q_(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Nl(Co)}function K_(t,e){if(t==="click")return Nl(e)}function Z_(t,e){if(t==="input"||t==="change")return Nl(e)}function Q_(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ei=typeof Object.is=="function"?Object.is:Q_;function Ro(t,e){if(ei(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!pu.call(e,r)||!ei(t[r],e[r]))return!1}return!0}function bh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lh(t,e){var n=bh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=bh(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function xg(){for(var t=window,e=il();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=il(t.document)}return e}function pf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J_(t){var e=xg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(i!==null&&pf(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lh(n,s);var o=Lh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var ex=Ti&&"documentMode"in document&&11>=document.documentMode,ss=null,Iu=null,go=null,Uu=!1;function Dh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Uu||ss==null||ss!==il(i)||(i=ss,"selectionStart"in i&&pf(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),go&&Ro(go,i)||(go=i,i=ul(Iu,"onSelect"),0<i.length&&(e=new df("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ss)))}function la(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var os={animationend:la("Animation","AnimationEnd"),animationiteration:la("Animation","AnimationIteration"),animationstart:la("Animation","AnimationStart"),transitionend:la("Transition","TransitionEnd")},_c={},yg={};Ti&&(yg=document.createElement("div").style,"AnimationEvent"in window||(delete os.animationend.animation,delete os.animationiteration.animation,delete os.animationstart.animation),"TransitionEvent"in window||delete os.transitionend.transition);function Fl(t){if(_c[t])return _c[t];if(!os[t])return t;var e=os[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in yg)return _c[t]=e[n];return t}var Sg=Fl("animationend"),Mg=Fl("animationiteration"),Eg=Fl("animationstart"),wg=Fl("transitionend"),Tg=new Map,Ih="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function or(t,e){Tg.set(t,e),kr(e,[t])}for(var xc=0;xc<Ih.length;xc++){var yc=Ih[xc],tx=yc.toLowerCase(),nx=yc[0].toUpperCase()+yc.slice(1);or(tx,"on"+nx)}or(Sg,"onAnimationEnd");or(Mg,"onAnimationIteration");or(Eg,"onAnimationStart");or("dblclick","onDoubleClick");or("focusin","onFocus");or("focusout","onBlur");or(wg,"onTransitionEnd");ws("onMouseEnter",["mouseout","mouseover"]);ws("onMouseLeave",["mouseout","mouseover"]);ws("onPointerEnter",["pointerout","pointerover"]);ws("onPointerLeave",["pointerout","pointerover"]);kr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));kr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));kr("onBeforeInput",["compositionend","keypress","textInput","paste"]);kr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));kr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ix=new Set("cancel close invalid load scroll toggle".split(" ").concat(lo));function Uh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,t_(i,e,void 0,t),t.currentTarget=null}function Ag(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Uh(r,a,c),s=l}}}if(sl)throw t=Pu,sl=!1,Pu=null,t}function _t(t,e){var n=e[zu];n===void 0&&(n=e[zu]=new Set);var i=t+"__bubble";n.has(i)||(Cg(e,t,2,!1),n.add(i))}function Sc(t,e,n){var i=0;e&&(i|=4),Cg(n,t,i,e)}var ca="_reactListening"+Math.random().toString(36).slice(2);function Po(t){if(!t[ca]){t[ca]=!0,Um.forEach(function(n){n!=="selectionchange"&&(ix.has(n)||Sc(n,!1,t),Sc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ca]||(e[ca]=!0,Sc("selectionchange",!1,e))}}function Cg(t,e,n,i){switch(ug(e)){case 1:var r=v_;break;case 4:r=__;break;default:r=cf}n=r.bind(null,e,n,t),r=void 0,!Ru||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Mc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Er(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Km(function(){var c=s,d=sf(n),h=[];e:{var f=Tg.get(t);if(f!==void 0){var g=df,p=t;switch(t){case"keypress":if(Ga(n)===0)break e;case"keydown":case"keyup":g=I_;break;case"focusin":p="focus",g=mc;break;case"focusout":p="blur",g=mc;break;case"beforeblur":case"afterblur":g=mc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=Mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=S_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=F_;break;case Sg:case Mg:case Eg:g=w_;break;case wg:g=k_;break;case"scroll":g=x_;break;case"wheel":g=B_;break;case"copy":case"cut":case"paste":g=A_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=wh}var v=(e&4)!==0,m=!v&&t==="scroll",u=v?f!==null?f+"Capture":null:f;v=[];for(var _=c,x;_!==null;){x=_;var S=x.stateNode;if(x.tag===5&&S!==null&&(x=S,u!==null&&(S=Eo(_,u),S!=null&&v.push(bo(_,S,x)))),m)break;_=_.return}0<v.length&&(f=new g(f,p,null,n,d),h.push({event:f,listeners:v}))}}if(!(e&7)){e:{if(f=t==="mouseover"||t==="pointerover",g=t==="mouseout"||t==="pointerout",f&&n!==Au&&(p=n.relatedTarget||n.fromElement)&&(Er(p)||p[Ai]))break e;if((g||f)&&(f=d.window===d?d:(f=d.ownerDocument)?f.defaultView||f.parentWindow:window,g?(p=n.relatedTarget||n.toElement,g=c,p=p?Er(p):null,p!==null&&(m=zr(p),p!==m||p.tag!==5&&p.tag!==6)&&(p=null)):(g=null,p=c),g!==p)){if(v=Mh,S="onMouseLeave",u="onMouseEnter",_="mouse",(t==="pointerout"||t==="pointerover")&&(v=wh,S="onPointerLeave",u="onPointerEnter",_="pointer"),m=g==null?f:as(g),x=p==null?f:as(p),f=new v(S,_+"leave",g,n,d),f.target=m,f.relatedTarget=x,S=null,Er(d)===c&&(v=new v(u,_+"enter",p,n,d),v.target=x,v.relatedTarget=m,S=v),m=S,g&&p)t:{for(v=g,u=p,_=0,x=v;x;x=Hr(x))_++;for(x=0,S=u;S;S=Hr(S))x++;for(;0<_-x;)v=Hr(v),_--;for(;0<x-_;)u=Hr(u),x--;for(;_--;){if(v===u||u!==null&&v===u.alternate)break t;v=Hr(v),u=Hr(u)}v=null}else v=null;g!==null&&Nh(h,f,g,v,!1),p!==null&&m!==null&&Nh(h,m,p,v,!0)}}e:{if(f=c?as(c):window,g=f.nodeName&&f.nodeName.toLowerCase(),g==="select"||g==="input"&&f.type==="file")var P=Y_;else if(Ch(f))if(gg)P=Z_;else{P=q_;var C=$_}else(g=f.nodeName)&&g.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(P=K_);if(P&&(P=P(t,c))){mg(h,P,n,d);break e}C&&C(t,f,c),t==="focusout"&&(C=f._wrapperState)&&C.controlled&&f.type==="number"&&Su(f,"number",f.value)}switch(C=c?as(c):window,t){case"focusin":(Ch(C)||C.contentEditable==="true")&&(ss=C,Iu=c,go=null);break;case"focusout":go=Iu=ss=null;break;case"mousedown":Uu=!0;break;case"contextmenu":case"mouseup":case"dragend":Uu=!1,Dh(h,n,d);break;case"selectionchange":if(ex)break;case"keydown":case"keyup":Dh(h,n,d)}var w;if(hf)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else rs?hg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(fg&&n.locale!=="ko"&&(rs||R!=="onCompositionStart"?R==="onCompositionEnd"&&rs&&(w=dg()):(Wi=d,uf="value"in Wi?Wi.value:Wi.textContent,rs=!0)),C=ul(c,R),0<C.length&&(R=new Eh(R,t,null,n,d),h.push({event:R,listeners:C}),w?R.data=w:(w=pg(n),w!==null&&(R.data=w)))),(w=G_?V_(t,n):W_(t,n))&&(c=ul(c,"onBeforeInput"),0<c.length&&(d=new Eh("onBeforeInput","beforeinput",null,n,d),h.push({event:d,listeners:c}),d.data=w))}Ag(h,e)})}function bo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function ul(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Eo(t,n),s!=null&&i.unshift(bo(t,s,r)),s=Eo(t,e),s!=null&&i.push(bo(t,s,r))),t=t.return}return i}function Hr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Nh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Eo(n,s),l!=null&&o.unshift(bo(n,l,a))):r||(l=Eo(n,s),l!=null&&o.push(bo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rx=/\r\n?/g,sx=/\u0000|\uFFFD/g;function Fh(t){return(typeof t=="string"?t:""+t).replace(rx,`
`).replace(sx,"")}function ua(t,e,n){if(e=Fh(e),Fh(t)!==e&&n)throw Error(oe(425))}function dl(){}var Nu=null,Fu=null;function Ou(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var ku=typeof setTimeout=="function"?setTimeout:void 0,ox=typeof clearTimeout=="function"?clearTimeout:void 0,Oh=typeof Promise=="function"?Promise:void 0,ax=typeof queueMicrotask=="function"?queueMicrotask:typeof Oh<"u"?function(t){return Oh.resolve(null).then(t).catch(lx)}:ku;function lx(t){setTimeout(function(){throw t})}function Ec(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ao(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ao(e)}function qi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kh(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Bs=Math.random().toString(36).slice(2),oi="__reactFiber$"+Bs,Lo="__reactProps$"+Bs,Ai="__reactContainer$"+Bs,zu="__reactEvents$"+Bs,cx="__reactListeners$"+Bs,ux="__reactHandles$"+Bs;function Er(t){var e=t[oi];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[oi]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kh(t);t!==null;){if(n=t[oi])return n;t=kh(t)}return e}t=n,n=t.parentNode}return null}function Wo(t){return t=t[oi]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function as(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(oe(33))}function Ol(t){return t[Lo]||null}var Bu=[],ls=-1;function ar(t){return{current:t}}function yt(t){0>ls||(t.current=Bu[ls],Bu[ls]=null,ls--)}function gt(t,e){ls++,Bu[ls]=t.current,t.current=e}var ir={},nn=ar(ir),mn=ar(!1),Lr=ir;function Ts(t,e){var n=t.type.contextTypes;if(!n)return ir;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function gn(t){return t=t.childContextTypes,t!=null}function fl(){yt(mn),yt(nn)}function zh(t,e,n){if(nn.current!==ir)throw Error(oe(168));gt(nn,e),gt(mn,n)}function Rg(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(oe(108,$v(t)||"Unknown",r));return Rt({},n,i)}function hl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||ir,Lr=nn.current,gt(nn,t),gt(mn,mn.current),!0}function Bh(t,e,n){var i=t.stateNode;if(!i)throw Error(oe(169));n?(t=Rg(t,e,Lr),i.__reactInternalMemoizedMergedChildContext=t,yt(mn),yt(nn),gt(nn,t)):yt(mn),gt(mn,n)}var xi=null,kl=!1,wc=!1;function Pg(t){xi===null?xi=[t]:xi.push(t)}function dx(t){kl=!0,Pg(t)}function lr(){if(!wc&&xi!==null){wc=!0;var t=0,e=ft;try{var n=xi;for(ft=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}xi=null,kl=!1}catch(r){throw xi!==null&&(xi=xi.slice(t+1)),eg(of,lr),r}finally{ft=e,wc=!1}}return null}var cs=[],us=0,pl=null,ml=0,Dn=[],In=0,Dr=null,yi=1,Si="";function vr(t,e){cs[us++]=ml,cs[us++]=pl,pl=t,ml=e}function bg(t,e,n){Dn[In++]=yi,Dn[In++]=Si,Dn[In++]=Dr,Dr=t;var i=yi;t=Si;var r=32-Qn(i)-1;i&=~(1<<r),n+=1;var s=32-Qn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,yi=1<<32-Qn(e)+r|n<<r|i,Si=s+t}else yi=1<<s|n<<r|i,Si=t}function mf(t){t.return!==null&&(vr(t,1),bg(t,1,0))}function gf(t){for(;t===pl;)pl=cs[--us],cs[us]=null,ml=cs[--us],cs[us]=null;for(;t===Dr;)Dr=Dn[--In],Dn[In]=null,Si=Dn[--In],Dn[In]=null,yi=Dn[--In],Dn[In]=null}var An=null,Tn=null,Mt=!1,$n=null;function Lg(t,e){var n=Fn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hh(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,An=t,Tn=qi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,An=t,Tn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Dr!==null?{id:yi,overflow:Si}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Fn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,An=t,Tn=null,!0):!1;default:return!1}}function Hu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Gu(t){if(Mt){var e=Tn;if(e){var n=e;if(!Hh(t,e)){if(Hu(t))throw Error(oe(418));e=qi(n.nextSibling);var i=An;e&&Hh(t,e)?Lg(i,n):(t.flags=t.flags&-4097|2,Mt=!1,An=t)}}else{if(Hu(t))throw Error(oe(418));t.flags=t.flags&-4097|2,Mt=!1,An=t}}}function Gh(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;An=t}function da(t){if(t!==An)return!1;if(!Mt)return Gh(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ou(t.type,t.memoizedProps)),e&&(e=Tn)){if(Hu(t))throw Dg(),Error(oe(418));for(;e;)Lg(t,e),e=qi(e.nextSibling)}if(Gh(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(oe(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=qi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=An?qi(t.stateNode.nextSibling):null;return!0}function Dg(){for(var t=Tn;t;)t=qi(t.nextSibling)}function As(){Tn=An=null,Mt=!1}function vf(t){$n===null?$n=[t]:$n.push(t)}var fx=bi.ReactCurrentBatchConfig;function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(oe(309));var i=n.stateNode}if(!i)throw Error(oe(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(oe(284));if(!n._owner)throw Error(oe(290,t))}return t}function fa(t,e){throw t=Object.prototype.toString.call(e),Error(oe(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Vh(t){var e=t._init;return e(t._payload)}function Ig(t){function e(u,_){if(t){var x=u.deletions;x===null?(u.deletions=[_],u.flags|=16):x.push(_)}}function n(u,_){if(!t)return null;for(;_!==null;)e(u,_),_=_.sibling;return null}function i(u,_){for(u=new Map;_!==null;)_.key!==null?u.set(_.key,_):u.set(_.index,_),_=_.sibling;return u}function r(u,_){return u=Ji(u,_),u.index=0,u.sibling=null,u}function s(u,_,x){return u.index=x,t?(x=u.alternate,x!==null?(x=x.index,x<_?(u.flags|=2,_):x):(u.flags|=2,_)):(u.flags|=1048576,_)}function o(u){return t&&u.alternate===null&&(u.flags|=2),u}function a(u,_,x,S){return _===null||_.tag!==6?(_=Lc(x,u.mode,S),_.return=u,_):(_=r(_,x),_.return=u,_)}function l(u,_,x,S){var P=x.type;return P===is?d(u,_,x.props.children,S,x.key):_!==null&&(_.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===zi&&Vh(P)===_.type)?(S=r(_,x.props),S.ref=qs(u,_,x),S.return=u,S):(S=qa(x.type,x.key,x.props,null,u.mode,S),S.ref=qs(u,_,x),S.return=u,S)}function c(u,_,x,S){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=Dc(x,u.mode,S),_.return=u,_):(_=r(_,x.children||[]),_.return=u,_)}function d(u,_,x,S,P){return _===null||_.tag!==7?(_=br(x,u.mode,S,P),_.return=u,_):(_=r(_,x),_.return=u,_)}function h(u,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=Lc(""+_,u.mode,x),_.return=u,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case ta:return x=qa(_.type,_.key,_.props,null,u.mode,x),x.ref=qs(u,null,_),x.return=u,x;case ns:return _=Dc(_,u.mode,x),_.return=u,_;case zi:var S=_._init;return h(u,S(_._payload),x)}if(oo(_)||Ws(_))return _=br(_,u.mode,x,null),_.return=u,_;fa(u,_)}return null}function f(u,_,x,S){var P=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return P!==null?null:a(u,_,""+x,S);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:return x.key===P?l(u,_,x,S):null;case ns:return x.key===P?c(u,_,x,S):null;case zi:return P=x._init,f(u,_,P(x._payload),S)}if(oo(x)||Ws(x))return P!==null?null:d(u,_,x,S,null);fa(u,x)}return null}function g(u,_,x,S,P){if(typeof S=="string"&&S!==""||typeof S=="number")return u=u.get(x)||null,a(_,u,""+S,P);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case ta:return u=u.get(S.key===null?x:S.key)||null,l(_,u,S,P);case ns:return u=u.get(S.key===null?x:S.key)||null,c(_,u,S,P);case zi:var C=S._init;return g(u,_,x,C(S._payload),P)}if(oo(S)||Ws(S))return u=u.get(x)||null,d(_,u,S,P,null);fa(_,S)}return null}function p(u,_,x,S){for(var P=null,C=null,w=_,R=_=0,X=null;w!==null&&R<x.length;R++){w.index>R?(X=w,w=null):X=w.sibling;var y=f(u,w,x[R],S);if(y===null){w===null&&(w=X);break}t&&w&&y.alternate===null&&e(u,w),_=s(y,_,R),C===null?P=y:C.sibling=y,C=y,w=X}if(R===x.length)return n(u,w),Mt&&vr(u,R),P;if(w===null){for(;R<x.length;R++)w=h(u,x[R],S),w!==null&&(_=s(w,_,R),C===null?P=w:C.sibling=w,C=w);return Mt&&vr(u,R),P}for(w=i(u,w);R<x.length;R++)X=g(w,u,R,x[R],S),X!==null&&(t&&X.alternate!==null&&w.delete(X.key===null?R:X.key),_=s(X,_,R),C===null?P=X:C.sibling=X,C=X);return t&&w.forEach(function(E){return e(u,E)}),Mt&&vr(u,R),P}function v(u,_,x,S){var P=Ws(x);if(typeof P!="function")throw Error(oe(150));if(x=P.call(x),x==null)throw Error(oe(151));for(var C=P=null,w=_,R=_=0,X=null,y=x.next();w!==null&&!y.done;R++,y=x.next()){w.index>R?(X=w,w=null):X=w.sibling;var E=f(u,w,y.value,S);if(E===null){w===null&&(w=X);break}t&&w&&E.alternate===null&&e(u,w),_=s(E,_,R),C===null?P=E:C.sibling=E,C=E,w=X}if(y.done)return n(u,w),Mt&&vr(u,R),P;if(w===null){for(;!y.done;R++,y=x.next())y=h(u,y.value,S),y!==null&&(_=s(y,_,R),C===null?P=y:C.sibling=y,C=y);return Mt&&vr(u,R),P}for(w=i(u,w);!y.done;R++,y=x.next())y=g(w,u,R,y.value,S),y!==null&&(t&&y.alternate!==null&&w.delete(y.key===null?R:y.key),_=s(y,_,R),C===null?P=y:C.sibling=y,C=y);return t&&w.forEach(function(k){return e(u,k)}),Mt&&vr(u,R),P}function m(u,_,x,S){if(typeof x=="object"&&x!==null&&x.type===is&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case ta:e:{for(var P=x.key,C=_;C!==null;){if(C.key===P){if(P=x.type,P===is){if(C.tag===7){n(u,C.sibling),_=r(C,x.props.children),_.return=u,u=_;break e}}else if(C.elementType===P||typeof P=="object"&&P!==null&&P.$$typeof===zi&&Vh(P)===C.type){n(u,C.sibling),_=r(C,x.props),_.ref=qs(u,C,x),_.return=u,u=_;break e}n(u,C);break}else e(u,C);C=C.sibling}x.type===is?(_=br(x.props.children,u.mode,S,x.key),_.return=u,u=_):(S=qa(x.type,x.key,x.props,null,u.mode,S),S.ref=qs(u,_,x),S.return=u,u=S)}return o(u);case ns:e:{for(C=x.key;_!==null;){if(_.key===C)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){n(u,_.sibling),_=r(_,x.children||[]),_.return=u,u=_;break e}else{n(u,_);break}else e(u,_);_=_.sibling}_=Dc(x,u.mode,S),_.return=u,u=_}return o(u);case zi:return C=x._init,m(u,_,C(x._payload),S)}if(oo(x))return p(u,_,x,S);if(Ws(x))return v(u,_,x,S);fa(u,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(n(u,_.sibling),_=r(_,x),_.return=u,u=_):(n(u,_),_=Lc(x,u.mode,S),_.return=u,u=_),o(u)):n(u,_)}return m}var Cs=Ig(!0),Ug=Ig(!1),gl=ar(null),vl=null,ds=null,_f=null;function xf(){_f=ds=vl=null}function yf(t){var e=gl.current;yt(gl),t._currentValue=e}function Vu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function xs(t,e){vl=t,_f=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(hn=!0),t.firstContext=null)}function zn(t){var e=t._currentValue;if(_f!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(vl===null)throw Error(oe(308));ds=t,vl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var wr=null;function Sf(t){wr===null?wr=[t]:wr.push(t)}function Ng(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Sf(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Bi=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function wi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Ki(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,st&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,Sf(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Va(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}function Wh(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function _l(t,e,n,i){var r=t.updateQueue;Bi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var d=t.alternate;d!==null&&(d=d.updateQueue,a=d.lastBaseUpdate,a!==o&&(a===null?d.firstBaseUpdate=c:a.next=c,d.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,d=c=l=null,a=s;do{var f=a.lane,g=a.eventTime;if((i&f)===f){d!==null&&(d=d.next={eventTime:g,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var p=t,v=a;switch(f=e,g=n,v.tag){case 1:if(p=v.payload,typeof p=="function"){h=p.call(g,h,f);break e}h=p;break e;case 3:p.flags=p.flags&-65537|128;case 0:if(p=v.payload,f=typeof p=="function"?p.call(g,h,f):p,f==null)break e;h=Rt({},h,f);break e;case 2:Bi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,f=r.effects,f===null?r.effects=[a]:f.push(a))}else g={eventTime:g,lane:f,tag:a.tag,payload:a.payload,callback:a.callback,next:null},d===null?(c=d=g,l=h):d=d.next=g,o|=f;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;f=a,a=f.next,f.next=null,r.lastBaseUpdate=f,r.shared.pending=null}}while(!0);if(d===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=d,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=h}}function Xh(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(oe(191,r));r.call(i)}}}var Xo={},li=ar(Xo),Do=ar(Xo),Io=ar(Xo);function Tr(t){if(t===Xo)throw Error(oe(174));return t}function Ef(t,e){switch(gt(Io,e),gt(Do,t),gt(li,Xo),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Eu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Eu(e,t)}yt(li),gt(li,e)}function Rs(){yt(li),yt(Do),yt(Io)}function Og(t){Tr(Io.current);var e=Tr(li.current),n=Eu(e,t.type);e!==n&&(gt(Do,t),gt(li,n))}function wf(t){Do.current===t&&(yt(li),yt(Do))}var At=ar(0);function xl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Tc=[];function Tf(){for(var t=0;t<Tc.length;t++)Tc[t]._workInProgressVersionPrimary=null;Tc.length=0}var Wa=bi.ReactCurrentDispatcher,Ac=bi.ReactCurrentBatchConfig,Ir=0,Ct=null,Ft=null,Gt=null,yl=!1,vo=!1,Uo=0,hx=0;function Kt(){throw Error(oe(321))}function Af(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ei(t[n],e[n]))return!1;return!0}function Cf(t,e,n,i,r,s){if(Ir=s,Ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Wa.current=t===null||t.memoizedState===null?vx:_x,t=n(i,r),vo){s=0;do{if(vo=!1,Uo=0,25<=s)throw Error(oe(301));s+=1,Gt=Ft=null,e.updateQueue=null,Wa.current=xx,t=n(i,r)}while(vo)}if(Wa.current=Sl,e=Ft!==null&&Ft.next!==null,Ir=0,Gt=Ft=Ct=null,yl=!1,e)throw Error(oe(300));return t}function Rf(){var t=Uo!==0;return Uo=0,t}function ii(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Gt===null?Ct.memoizedState=Gt=t:Gt=Gt.next=t,Gt}function Bn(){if(Ft===null){var t=Ct.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Gt===null?Ct.memoizedState:Gt.next;if(e!==null)Gt=e,Ft=t;else{if(t===null)throw Error(oe(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Gt===null?Ct.memoizedState=Gt=t:Gt=Gt.next=t}return Gt}function No(t,e){return typeof e=="function"?e(t):e}function Cc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var d=c.lane;if((Ir&d)===d)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,Ct.lanes|=d,Ur|=d}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,ei(i,e.memoizedState)||(hn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Ct.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Rc(t){var e=Bn(),n=e.queue;if(n===null)throw Error(oe(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);ei(s,e.memoizedState)||(hn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function kg(){}function zg(t,e){var n=Ct,i=Bn(),r=e(),s=!ei(i.memoizedState,r);if(s&&(i.memoizedState=r,hn=!0),i=i.queue,Pf(Gg.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Gt!==null&&Gt.memoizedState.tag&1){if(n.flags|=2048,Fo(9,Hg.bind(null,n,i,r,e),void 0,null),Vt===null)throw Error(oe(349));Ir&30||Bg(n,e,r)}return r}function Bg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Hg(t,e,n,i){e.value=n,e.getSnapshot=i,Vg(e)&&Wg(t)}function Gg(t,e,n){return n(function(){Vg(e)&&Wg(t)})}function Vg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!ei(t,n)}catch{return!0}}function Wg(t){var e=Ci(t,1);e!==null&&Jn(e,t,1,-1)}function jh(t){var e=ii();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:No,lastRenderedState:t},e.queue=t,t=t.dispatch=gx.bind(null,Ct,t),[e.memoizedState,t]}function Fo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Ct.updateQueue,e===null?(e={lastEffect:null,stores:null},Ct.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Xg(){return Bn().memoizedState}function Xa(t,e,n,i){var r=ii();Ct.flags|=t,r.memoizedState=Fo(1|e,n,void 0,i===void 0?null:i)}function zl(t,e,n,i){var r=Bn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Af(i,o.deps)){r.memoizedState=Fo(e,n,s,i);return}}Ct.flags|=t,r.memoizedState=Fo(1|e,n,s,i)}function Yh(t,e){return Xa(8390656,8,t,e)}function Pf(t,e){return zl(2048,8,t,e)}function jg(t,e){return zl(4,2,t,e)}function Yg(t,e){return zl(4,4,t,e)}function $g(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,zl(4,4,$g.bind(null,e,t),n)}function bf(){}function Kg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Zg(t,e){var n=Bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Af(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Qg(t,e,n){return Ir&21?(ei(n,e)||(n=ig(),Ct.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,hn=!0),t.memoizedState=n)}function px(t,e){var n=ft;ft=n!==0&&4>n?n:4,t(!0);var i=Ac.transition;Ac.transition={};try{t(!1),e()}finally{ft=n,Ac.transition=i}}function Jg(){return Bn().memoizedState}function mx(t,e,n){var i=Qi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},e0(t))t0(e,n);else if(n=Ng(t,e,n,i),n!==null){var r=on();Jn(n,t,i,r),n0(n,e,i)}}function gx(t,e,n){var i=Qi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(e0(t))t0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,ei(a,o)){var l=e.interleaved;l===null?(r.next=r,Sf(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=Ng(t,e,r,i),n!==null&&(r=on(),Jn(n,t,i,r),n0(n,e,i))}}function e0(t){var e=t.alternate;return t===Ct||e!==null&&e===Ct}function t0(t,e){vo=yl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function n0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,af(t,n)}}var Sl={readContext:zn,useCallback:Kt,useContext:Kt,useEffect:Kt,useImperativeHandle:Kt,useInsertionEffect:Kt,useLayoutEffect:Kt,useMemo:Kt,useReducer:Kt,useRef:Kt,useState:Kt,useDebugValue:Kt,useDeferredValue:Kt,useTransition:Kt,useMutableSource:Kt,useSyncExternalStore:Kt,useId:Kt,unstable_isNewReconciler:!1},vx={readContext:zn,useCallback:function(t,e){return ii().memoizedState=[t,e===void 0?null:e],t},useContext:zn,useEffect:Yh,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Xa(4194308,4,$g.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Xa(4194308,4,t,e)},useInsertionEffect:function(t,e){return Xa(4,2,t,e)},useMemo:function(t,e){var n=ii();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=ii();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=mx.bind(null,Ct,t),[i.memoizedState,t]},useRef:function(t){var e=ii();return t={current:t},e.memoizedState=t},useState:jh,useDebugValue:bf,useDeferredValue:function(t){return ii().memoizedState=t},useTransition:function(){var t=jh(!1),e=t[0];return t=px.bind(null,t[1]),ii().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Ct,r=ii();if(Mt){if(n===void 0)throw Error(oe(407));n=n()}else{if(n=e(),Vt===null)throw Error(oe(349));Ir&30||Bg(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,Yh(Gg.bind(null,i,s,t),[t]),i.flags|=2048,Fo(9,Hg.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=ii(),e=Vt.identifierPrefix;if(Mt){var n=Si,i=yi;n=(i&~(1<<32-Qn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Uo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hx++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_x={readContext:zn,useCallback:Kg,useContext:zn,useEffect:Pf,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Cc,useRef:Xg,useState:function(){return Cc(No)},useDebugValue:bf,useDeferredValue:function(t){var e=Bn();return Qg(e,Ft.memoizedState,t)},useTransition:function(){var t=Cc(No)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:zg,useId:Jg,unstable_isNewReconciler:!1},xx={readContext:zn,useCallback:Kg,useContext:zn,useEffect:Pf,useImperativeHandle:qg,useInsertionEffect:jg,useLayoutEffect:Yg,useMemo:Zg,useReducer:Rc,useRef:Xg,useState:function(){return Rc(No)},useDebugValue:bf,useDeferredValue:function(t){var e=Bn();return Ft===null?e.memoizedState=t:Qg(e,Ft.memoizedState,t)},useTransition:function(){var t=Rc(No)[0],e=Bn().memoizedState;return[t,e]},useMutableSource:kg,useSyncExternalStore:zg,useId:Jg,unstable_isNewReconciler:!1};function jn(t,e){if(t&&t.defaultProps){e=Rt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Wu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Rt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Bl={isMounted:function(t){return(t=t._reactInternals)?zr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=on(),r=Qi(t),s=wi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Jn(e,t,r,i),Va(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=on(),r=Qi(t),s=wi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Ki(t,s,r),e!==null&&(Jn(e,t,r,i),Va(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=on(),i=Qi(t),r=wi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Ki(t,r,i),e!==null&&(Jn(e,t,i,n),Va(e,t,i))}};function $h(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ro(n,i)||!Ro(r,s):!0}function i0(t,e,n){var i=!1,r=ir,s=e.contextType;return typeof s=="object"&&s!==null?s=zn(s):(r=gn(e)?Lr:nn.current,i=e.contextTypes,s=(i=i!=null)?Ts(t,r):ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Bl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function qh(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Bl.enqueueReplaceState(e,e.state,null)}function Xu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=zn(s):(s=gn(e)?Lr:nn.current,r.context=Ts(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Wu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Bl.enqueueReplaceState(r,r.state,null),_l(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ps(t,e){try{var n="",i=e;do n+=Yv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Pc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function ju(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var yx=typeof WeakMap=="function"?WeakMap:Map;function r0(t,e,n){n=wi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){El||(El=!0,nd=i),ju(t,e)},n}function s0(t,e,n){n=wi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){ju(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){ju(t,e),typeof i!="function"&&(Zi===null?Zi=new Set([this]):Zi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Kh(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new yx;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Ux.bind(null,t,e,n),e.then(t,t))}function Zh(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Qh(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=wi(-1,1),e.tag=2,Ki(n,e,1))),n.lanes|=1),t)}var Sx=bi.ReactCurrentOwner,hn=!1;function sn(t,e,n,i){e.child=t===null?Ug(e,null,n,i):Cs(e,t.child,n,i)}function Jh(t,e,n,i,r){n=n.render;var s=e.ref;return xs(e,r),i=Cf(t,e,n,i,s,r),n=Rf(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(Mt&&n&&mf(e),e.flags|=1,sn(t,e,i,r),e.child)}function ep(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!kf(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,o0(t,e,s,i,r)):(t=qa(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ro,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=Ji(s,i),t.ref=e.ref,t.return=e,e.child=t}function o0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ro(s,i)&&t.ref===e.ref)if(hn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(hn=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Yu(t,e,n,i,r)}function a0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},gt(hs,wn),wn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,gt(hs,wn),wn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,gt(hs,wn),wn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,gt(hs,wn),wn|=i;return sn(t,e,r,n),e.child}function l0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Yu(t,e,n,i,r){var s=gn(n)?Lr:nn.current;return s=Ts(e,s),xs(e,r),n=Cf(t,e,n,i,s,r),i=Rf(),t!==null&&!hn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(Mt&&i&&mf(e),e.flags|=1,sn(t,e,n,r),e.child)}function tp(t,e,n,i,r){if(gn(n)){var s=!0;hl(e)}else s=!1;if(xs(e,r),e.stateNode===null)ja(t,e),i0(e,n,i),Xu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=zn(c):(c=gn(n)?Lr:nn.current,c=Ts(e,c));var d=n.getDerivedStateFromProps,h=typeof d=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&qh(e,o,i,c),Bi=!1;var f=e.memoizedState;o.state=f,_l(e,i,o,r),l=e.memoizedState,a!==i||f!==l||mn.current||Bi?(typeof d=="function"&&(Wu(e,n,d,i),l=e.memoizedState),(a=Bi||$h(e,n,a,i,f,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,Fg(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:jn(e.type,a),o.props=c,h=e.pendingProps,f=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=zn(l):(l=gn(n)?Lr:nn.current,l=Ts(e,l));var g=n.getDerivedStateFromProps;(d=typeof g=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||f!==l)&&qh(e,o,i,l),Bi=!1,f=e.memoizedState,o.state=f,_l(e,i,o,r);var p=e.memoizedState;a!==h||f!==p||mn.current||Bi?(typeof g=="function"&&(Wu(e,n,g,i),p=e.memoizedState),(c=Bi||$h(e,n,c,i,f,p,l)||!1)?(d||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,p,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,p,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=p),o.props=i,o.state=p,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&f===t.memoizedState||(e.flags|=1024),i=!1)}return $u(t,e,n,i,s,r)}function $u(t,e,n,i,r,s){l0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bh(e,n,!1),Ri(t,e,s);i=e.stateNode,Sx.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Cs(e,t.child,null,s),e.child=Cs(e,null,a,s)):sn(t,e,a,s),e.memoizedState=i.state,r&&Bh(e,n,!0),e.child}function c0(t){var e=t.stateNode;e.pendingContext?zh(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zh(t,e.context,!1),Ef(t,e.containerInfo)}function np(t,e,n,i,r){return As(),vf(r),e.flags|=256,sn(t,e,n,i),e.child}var qu={dehydrated:null,treeContext:null,retryLane:0};function Ku(t){return{baseLanes:t,cachePool:null,transitions:null}}function u0(t,e,n){var i=e.pendingProps,r=At.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),gt(At,r&1),t===null)return Gu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Vl(o,i,0,null),t=br(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Ku(n),e.memoizedState=qu,t):Lf(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Mx(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Ji(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Ji(a,s):(s=br(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Ku(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=qu,i}return s=t.child,t=s.sibling,i=Ji(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Lf(t,e){return e=Vl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ha(t,e,n,i){return i!==null&&vf(i),Cs(e,t.child,null,n),t=Lf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Mx(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Pc(Error(oe(422))),ha(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Vl({mode:"visible",children:i.children},r,0,null),s=br(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Cs(e,t.child,null,o),e.child.memoizedState=Ku(o),e.memoizedState=qu,s);if(!(e.mode&1))return ha(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(oe(419)),i=Pc(s,i,void 0),ha(t,e,o,i)}if(a=(o&t.childLanes)!==0,hn||a){if(i=Vt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),Jn(i,t,r,-1))}return Of(),i=Pc(Error(oe(421))),ha(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Nx.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,Tn=qi(r.nextSibling),An=e,Mt=!0,$n=null,t!==null&&(Dn[In++]=yi,Dn[In++]=Si,Dn[In++]=Dr,yi=t.id,Si=t.overflow,Dr=e),e=Lf(e,i.children),e.flags|=4096,e)}function ip(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Vu(t.return,e,n)}function bc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function d0(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(sn(t,e,i.children,n),i=At.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ip(t,n,e);else if(t.tag===19)ip(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(gt(At,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&xl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),bc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&xl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}bc(e,!0,n,null,s);break;case"together":bc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ja(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(oe(153));if(e.child!==null){for(t=e.child,n=Ji(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Ji(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ex(t,e,n){switch(e.tag){case 3:c0(e),As();break;case 5:Og(e);break;case 1:gn(e.type)&&hl(e);break;case 4:Ef(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;gt(gl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(gt(At,At.current&1),e.flags|=128,null):n&e.child.childLanes?u0(t,e,n):(gt(At,At.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);gt(At,At.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return d0(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),gt(At,At.current),i)break;return null;case 22:case 23:return e.lanes=0,a0(t,e,n)}return Ri(t,e,n)}var f0,Zu,h0,p0;f0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zu=function(){};h0=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Tr(li.current);var s=null;switch(n){case"input":r=xu(t,r),i=xu(t,i),s=[];break;case"select":r=Rt({},r,{value:void 0}),i=Rt({},i,{value:void 0}),s=[];break;case"textarea":r=Mu(t,r),i=Mu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=dl)}wu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(So.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(So.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&_t("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};p0=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ks(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function wx(t,e,n){var i=e.pendingProps;switch(gf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return gn(e.type)&&fl(),Zt(e),null;case 3:return i=e.stateNode,Rs(),yt(mn),yt(nn),Tf(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(da(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,$n!==null&&(sd($n),$n=null))),Zu(t,e),Zt(e),null;case 5:wf(e);var r=Tr(Io.current);if(n=e.type,t!==null&&e.stateNode!=null)h0(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(oe(166));return Zt(e),null}if(t=Tr(li.current),da(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[oi]=e,i[Lo]=s,t=(e.mode&1)!==0,n){case"dialog":_t("cancel",i),_t("close",i);break;case"iframe":case"object":case"embed":_t("load",i);break;case"video":case"audio":for(r=0;r<lo.length;r++)_t(lo[r],i);break;case"source":_t("error",i);break;case"img":case"image":case"link":_t("error",i),_t("load",i);break;case"details":_t("toggle",i);break;case"input":fh(i,s),_t("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},_t("invalid",i);break;case"textarea":ph(i,s),_t("invalid",i)}wu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&ua(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ua(i.textContent,a,t),r=["children",""+a]):So.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&_t("scroll",i)}switch(n){case"input":na(i),hh(i,s,!0);break;case"textarea":na(i),mh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=dl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Gm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[oi]=e,t[Lo]=i,f0(t,e,!1,!1),e.stateNode=t;e:{switch(o=Tu(n,i),n){case"dialog":_t("cancel",t),_t("close",t),r=i;break;case"iframe":case"object":case"embed":_t("load",t),r=i;break;case"video":case"audio":for(r=0;r<lo.length;r++)_t(lo[r],t);r=i;break;case"source":_t("error",t),r=i;break;case"img":case"image":case"link":_t("error",t),_t("load",t),r=i;break;case"details":_t("toggle",t),r=i;break;case"input":fh(t,i),r=xu(t,i),_t("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Rt({},i,{value:void 0}),_t("invalid",t);break;case"textarea":ph(t,i),r=Mu(t,i),_t("invalid",t);break;default:r=i}wu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Xm(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Vm(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Mo(t,l):typeof l=="number"&&Mo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(So.hasOwnProperty(s)?l!=null&&s==="onScroll"&&_t("scroll",t):l!=null&&ef(t,s,l,o))}switch(n){case"input":na(t),hh(t,i,!1);break;case"textarea":na(t),mh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+nr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?ms(t,!!i.multiple,s,!1):i.defaultValue!=null&&ms(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=dl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)p0(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(oe(166));if(n=Tr(Io.current),Tr(li.current),da(e)){if(i=e.stateNode,n=e.memoizedProps,i[oi]=e,(s=i.nodeValue!==n)&&(t=An,t!==null))switch(t.tag){case 3:ua(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ua(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[oi]=e,e.stateNode=i}return Zt(e),null;case 13:if(yt(At),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&Tn!==null&&e.mode&1&&!(e.flags&128))Dg(),As(),e.flags|=98560,s=!1;else if(s=da(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(oe(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(oe(317));s[oi]=e}else As(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else $n!==null&&(sd($n),$n=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||At.current&1?Ot===0&&(Ot=3):Of())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return Rs(),Zu(t,e),t===null&&Po(e.stateNode.containerInfo),Zt(e),null;case 10:return yf(e.type._context),Zt(e),null;case 17:return gn(e.type)&&fl(),Zt(e),null;case 19:if(yt(At),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ks(s,!1);else{if(Ot!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=xl(t),o!==null){for(e.flags|=128,Ks(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return gt(At,At.current&1|2),e.child}t=t.sibling}s.tail!==null&&Dt()>bs&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304)}else{if(!i)if(t=xl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Zt(e),null}else 2*Dt()-s.renderingStartTime>bs&&n!==1073741824&&(e.flags|=128,i=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Dt(),e.sibling=null,n=At.current,gt(At,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Ff(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?wn&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(oe(156,e.tag))}function Tx(t,e){switch(gf(e),e.tag){case 1:return gn(e.type)&&fl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Rs(),yt(mn),yt(nn),Tf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return wf(e),null;case 13:if(yt(At),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(oe(340));As()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return yt(At),null;case 4:return Rs(),null;case 10:return yf(e.type._context),null;case 22:case 23:return Ff(),null;case 24:return null;default:return null}}var pa=!1,en=!1,Ax=typeof WeakSet=="function"?WeakSet:Set,we=null;function fs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function Qu(t,e,n){try{n()}catch(i){bt(t,e,i)}}var rp=!1;function Cx(t,e){if(Nu=ll,t=xg(),pf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,d=0,h=t,f=null;t:for(;;){for(var g;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(g=h.firstChild)!==null;)f=h,h=g;for(;;){if(h===t)break t;if(f===n&&++c===r&&(a=o),f===s&&++d===i&&(l=o),(g=h.nextSibling)!==null)break;h=f,f=h.parentNode}h=g}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Fu={focusedElem:t,selectionRange:n},ll=!1,we=e;we!==null;)if(e=we,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,we=t;else for(;we!==null;){e=we;try{var p=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(p!==null){var v=p.memoizedProps,m=p.memoizedState,u=e.stateNode,_=u.getSnapshotBeforeUpdate(e.elementType===e.type?v:jn(e.type,v),m);u.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(oe(163))}}catch(S){bt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,we=t;break}we=e.return}return p=rp,rp=!1,p}function _o(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Qu(e,n,s)}r=r.next}while(r!==i)}}function Hl(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Ju(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function m0(t){var e=t.alternate;e!==null&&(t.alternate=null,m0(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[oi],delete e[Lo],delete e[zu],delete e[cx],delete e[ux])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function g0(t){return t.tag===5||t.tag===3||t.tag===4}function sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||g0(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ed(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=dl));else if(i!==4&&(t=t.child,t!==null))for(ed(t,e,n),t=t.sibling;t!==null;)ed(t,e,n),t=t.sibling}function td(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(td(t,e,n),t=t.sibling;t!==null;)td(t,e,n),t=t.sibling}var jt=null,Yn=!1;function Di(t,e,n){for(n=n.child;n!==null;)v0(t,e,n),n=n.sibling}function v0(t,e,n){if(ai&&typeof ai.onCommitFiberUnmount=="function")try{ai.onCommitFiberUnmount(Il,n)}catch{}switch(n.tag){case 5:en||fs(n,e);case 6:var i=jt,r=Yn;jt=null,Di(t,e,n),jt=i,Yn=r,jt!==null&&(Yn?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(Yn?(t=jt,n=n.stateNode,t.nodeType===8?Ec(t.parentNode,n):t.nodeType===1&&Ec(t,n),Ao(t)):Ec(jt,n.stateNode));break;case 4:i=jt,r=Yn,jt=n.stateNode.containerInfo,Yn=!0,Di(t,e,n),jt=i,Yn=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Qu(n,e,o),r=r.next}while(r!==i)}Di(t,e,n);break;case 1:if(!en&&(fs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Di(t,e,n);break;case 21:Di(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Di(t,e,n),en=i):Di(t,e,n);break;default:Di(t,e,n)}}function op(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Ax),e.forEach(function(i){var r=Fx.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Gn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,Yn=!1;break e;case 3:jt=a.stateNode.containerInfo,Yn=!0;break e;case 4:jt=a.stateNode.containerInfo,Yn=!0;break e}a=a.return}if(jt===null)throw Error(oe(160));v0(s,o,r),jt=null,Yn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)_0(e,t),e=e.sibling}function _0(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Gn(e,t),ni(t),i&4){try{_o(3,t,t.return),Hl(3,t)}catch(v){bt(t,t.return,v)}try{_o(5,t,t.return)}catch(v){bt(t,t.return,v)}}break;case 1:Gn(e,t),ni(t),i&512&&n!==null&&fs(n,n.return);break;case 5:if(Gn(e,t),ni(t),i&512&&n!==null&&fs(n,n.return),t.flags&32){var r=t.stateNode;try{Mo(r,"")}catch(v){bt(t,t.return,v)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Bm(r,s),Tu(a,o);var c=Tu(a,s);for(o=0;o<l.length;o+=2){var d=l[o],h=l[o+1];d==="style"?Xm(r,h):d==="dangerouslySetInnerHTML"?Vm(r,h):d==="children"?Mo(r,h):ef(r,d,h,c)}switch(a){case"input":yu(r,s);break;case"textarea":Hm(r,s);break;case"select":var f=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var g=s.value;g!=null?ms(r,!!s.multiple,g,!1):f!==!!s.multiple&&(s.defaultValue!=null?ms(r,!!s.multiple,s.defaultValue,!0):ms(r,!!s.multiple,s.multiple?[]:"",!1))}r[Lo]=s}catch(v){bt(t,t.return,v)}}break;case 6:if(Gn(e,t),ni(t),i&4){if(t.stateNode===null)throw Error(oe(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(v){bt(t,t.return,v)}}break;case 3:if(Gn(e,t),ni(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ao(e.containerInfo)}catch(v){bt(t,t.return,v)}break;case 4:Gn(e,t),ni(t);break;case 13:Gn(e,t),ni(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Uf=Dt())),i&4&&op(t);break;case 22:if(d=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||d,Gn(e,t),en=c):Gn(e,t),ni(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!d&&t.mode&1)for(we=t,d=t.child;d!==null;){for(h=we=d;we!==null;){switch(f=we,g=f.child,f.tag){case 0:case 11:case 14:case 15:_o(4,f,f.return);break;case 1:fs(f,f.return);var p=f.stateNode;if(typeof p.componentWillUnmount=="function"){i=f,n=f.return;try{e=i,p.props=e.memoizedProps,p.state=e.memoizedState,p.componentWillUnmount()}catch(v){bt(i,n,v)}}break;case 5:fs(f,f.return);break;case 22:if(f.memoizedState!==null){lp(h);continue}}g!==null?(g.return=f,we=g):lp(h)}d=d.sibling}e:for(d=null,h=t;;){if(h.tag===5){if(d===null){d=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Wm("display",o))}catch(v){bt(t,t.return,v)}}}else if(h.tag===6){if(d===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(v){bt(t,t.return,v)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;d===h&&(d=null),h=h.return}d===h&&(d=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Gn(e,t),ni(t),i&4&&op(t);break;case 21:break;default:Gn(e,t),ni(t)}}function ni(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(g0(n)){var i=n;break e}n=n.return}throw Error(oe(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Mo(r,""),i.flags&=-33);var s=sp(t);td(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sp(t);ed(t,a,o);break;default:throw Error(oe(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Rx(t,e,n){we=t,x0(t)}function x0(t,e,n){for(var i=(t.mode&1)!==0;we!==null;){var r=we,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||pa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=pa;var c=en;if(pa=o,(en=l)&&!c)for(we=r;we!==null;)o=we,l=o.child,o.tag===22&&o.memoizedState!==null?cp(r):l!==null?(l.return=o,we=l):cp(r);for(;s!==null;)we=s,x0(s),s=s.sibling;we=r,pa=a,en=c}ap(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,we=s):ap(t)}}function ap(t){for(;we!==null;){var e=we;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Hl(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:jn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Xh(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Xh(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var d=c.memoizedState;if(d!==null){var h=d.dehydrated;h!==null&&Ao(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(oe(163))}en||e.flags&512&&Ju(e)}catch(f){bt(e,e.return,f)}}if(e===t){we=null;break}if(n=e.sibling,n!==null){n.return=e.return,we=n;break}we=e.return}}function lp(t){for(;we!==null;){var e=we;if(e===t){we=null;break}var n=e.sibling;if(n!==null){n.return=e.return,we=n;break}we=e.return}}function cp(t){for(;we!==null;){var e=we;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Hl(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{Ju(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{Ju(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){we=null;break}var a=e.sibling;if(a!==null){a.return=e.return,we=a;break}we=e.return}}var Px=Math.ceil,Ml=bi.ReactCurrentDispatcher,Df=bi.ReactCurrentOwner,kn=bi.ReactCurrentBatchConfig,st=0,Vt=null,Nt=null,Yt=0,wn=0,hs=ar(0),Ot=0,Oo=null,Ur=0,Gl=0,If=0,xo=null,un=null,Uf=0,bs=1/0,_i=null,El=!1,nd=null,Zi=null,ma=!1,Xi=null,wl=0,yo=0,id=null,Ya=-1,$a=0;function on(){return st&6?Dt():Ya!==-1?Ya:Ya=Dt()}function Qi(t){return t.mode&1?st&2&&Yt!==0?Yt&-Yt:fx.transition!==null?($a===0&&($a=ig()),$a):(t=ft,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function Jn(t,e,n,i){if(50<yo)throw yo=0,id=null,Error(oe(185));Go(t,n,i),(!(st&2)||t!==Vt)&&(t===Vt&&(!(st&2)&&(Gl|=n),Ot===4&&Gi(t,Yt)),vn(t,i),n===1&&st===0&&!(e.mode&1)&&(bs=Dt()+500,kl&&lr()))}function vn(t,e){var n=t.callbackNode;f_(t,e);var i=al(t,t===Vt?Yt:0);if(i===0)n!==null&&_h(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_h(n),e===1)t.tag===0?dx(up.bind(null,t)):Pg(up.bind(null,t)),ax(function(){!(st&6)&&lr()}),n=null;else{switch(rg(i)){case 1:n=of;break;case 4:n=tg;break;case 16:n=ol;break;case 536870912:n=ng;break;default:n=ol}n=C0(n,y0.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function y0(t,e){if(Ya=-1,$a=0,st&6)throw Error(oe(327));var n=t.callbackNode;if(ys()&&t.callbackNode!==n)return null;var i=al(t,t===Vt?Yt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Tl(t,i);else{e=i;var r=st;st|=2;var s=M0();(Vt!==t||Yt!==e)&&(_i=null,bs=Dt()+500,Pr(t,e));do try{Dx();break}catch(a){S0(t,a)}while(!0);xf(),Ml.current=s,st=r,Nt!==null?e=0:(Vt=null,Yt=0,e=Ot)}if(e!==0){if(e===2&&(r=bu(t),r!==0&&(i=r,e=rd(t,r))),e===1)throw n=Oo,Pr(t,0),Gi(t,i),vn(t,Dt()),n;if(e===6)Gi(t,i);else{if(r=t.current.alternate,!(i&30)&&!bx(r)&&(e=Tl(t,i),e===2&&(s=bu(t),s!==0&&(i=s,e=rd(t,s))),e===1))throw n=Oo,Pr(t,0),Gi(t,i),vn(t,Dt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(oe(345));case 2:_r(t,un,_i);break;case 3:if(Gi(t,i),(i&130023424)===i&&(e=Uf+500-Dt(),10<e)){if(al(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){on(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=ku(_r.bind(null,t,un,_i),e);break}_r(t,un,_i);break;case 4:if(Gi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Qn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Dt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Px(i/1960))-i,10<i){t.timeoutHandle=ku(_r.bind(null,t,un,_i),i);break}_r(t,un,_i);break;case 5:_r(t,un,_i);break;default:throw Error(oe(329))}}}return vn(t,Dt()),t.callbackNode===n?y0.bind(null,t):null}function rd(t,e){var n=xo;return t.current.memoizedState.isDehydrated&&(Pr(t,e).flags|=256),t=Tl(t,e),t!==2&&(e=un,un=n,e!==null&&sd(e)),t}function sd(t){un===null?un=t:un.push.apply(un,t)}function bx(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!ei(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Gi(t,e){for(e&=~If,e&=~Gl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Qn(e),i=1<<n;t[n]=-1,e&=~i}}function up(t){if(st&6)throw Error(oe(327));ys();var e=al(t,0);if(!(e&1))return vn(t,Dt()),null;var n=Tl(t,e);if(t.tag!==0&&n===2){var i=bu(t);i!==0&&(e=i,n=rd(t,i))}if(n===1)throw n=Oo,Pr(t,0),Gi(t,e),vn(t,Dt()),n;if(n===6)throw Error(oe(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,_r(t,un,_i),vn(t,Dt()),null}function Nf(t,e){var n=st;st|=1;try{return t(e)}finally{st=n,st===0&&(bs=Dt()+500,kl&&lr())}}function Nr(t){Xi!==null&&Xi.tag===0&&!(st&6)&&ys();var e=st;st|=1;var n=kn.transition,i=ft;try{if(kn.transition=null,ft=1,t)return t()}finally{ft=i,kn.transition=n,st=e,!(st&6)&&lr()}}function Ff(){wn=hs.current,yt(hs)}function Pr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,ox(n)),Nt!==null)for(n=Nt.return;n!==null;){var i=n;switch(gf(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&fl();break;case 3:Rs(),yt(mn),yt(nn),Tf();break;case 5:wf(i);break;case 4:Rs();break;case 13:yt(At);break;case 19:yt(At);break;case 10:yf(i.type._context);break;case 22:case 23:Ff()}n=n.return}if(Vt=t,Nt=t=Ji(t.current,null),Yt=wn=e,Ot=0,Oo=null,If=Gl=Ur=0,un=xo=null,wr!==null){for(e=0;e<wr.length;e++)if(n=wr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}wr=null}return t}function S0(t,e){do{var n=Nt;try{if(xf(),Wa.current=Sl,yl){for(var i=Ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}yl=!1}if(Ir=0,Gt=Ft=Ct=null,vo=!1,Uo=0,Df.current=null,n===null||n.return===null){Ot=1,Oo=e,Nt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Yt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,d=a,h=d.tag;if(!(d.mode&1)&&(h===0||h===11||h===15)){var f=d.alternate;f?(d.updateQueue=f.updateQueue,d.memoizedState=f.memoizedState,d.lanes=f.lanes):(d.updateQueue=null,d.memoizedState=null)}var g=Zh(o);if(g!==null){g.flags&=-257,Qh(g,o,a,s,e),g.mode&1&&Kh(s,c,e),e=g,l=c;var p=e.updateQueue;if(p===null){var v=new Set;v.add(l),e.updateQueue=v}else p.add(l);break e}else{if(!(e&1)){Kh(s,c,e),Of();break e}l=Error(oe(426))}}else if(Mt&&a.mode&1){var m=Zh(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Qh(m,o,a,s,e),vf(Ps(l,a));break e}}s=l=Ps(l,a),Ot!==4&&(Ot=2),xo===null?xo=[s]:xo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var u=r0(s,l,e);Wh(s,u);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(Zi===null||!Zi.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=s0(s,a,e);Wh(s,S);break e}}s=s.return}while(s!==null)}w0(n)}catch(P){e=P,Nt===n&&n!==null&&(Nt=n=n.return);continue}break}while(!0)}function M0(){var t=Ml.current;return Ml.current=Sl,t===null?Sl:t}function Of(){(Ot===0||Ot===3||Ot===2)&&(Ot=4),Vt===null||!(Ur&268435455)&&!(Gl&268435455)||Gi(Vt,Yt)}function Tl(t,e){var n=st;st|=2;var i=M0();(Vt!==t||Yt!==e)&&(_i=null,Pr(t,e));do try{Lx();break}catch(r){S0(t,r)}while(!0);if(xf(),st=n,Ml.current=i,Nt!==null)throw Error(oe(261));return Vt=null,Yt=0,Ot}function Lx(){for(;Nt!==null;)E0(Nt)}function Dx(){for(;Nt!==null&&!i_();)E0(Nt)}function E0(t){var e=A0(t.alternate,t,wn);t.memoizedProps=t.pendingProps,e===null?w0(t):Nt=e,Df.current=null}function w0(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Tx(n,e),n!==null){n.flags&=32767,Nt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ot=6,Nt=null;return}}else if(n=wx(n,e,wn),n!==null){Nt=n;return}if(e=e.sibling,e!==null){Nt=e;return}Nt=e=t}while(e!==null);Ot===0&&(Ot=5)}function _r(t,e,n){var i=ft,r=kn.transition;try{kn.transition=null,ft=1,Ix(t,e,n,i)}finally{kn.transition=r,ft=i}return null}function Ix(t,e,n,i){do ys();while(Xi!==null);if(st&6)throw Error(oe(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(oe(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h_(t,s),t===Vt&&(Nt=Vt=null,Yt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||ma||(ma=!0,C0(ol,function(){return ys(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=kn.transition,kn.transition=null;var o=ft;ft=1;var a=st;st|=4,Df.current=null,Cx(t,n),_0(n,t),J_(Fu),ll=!!Nu,Fu=Nu=null,t.current=n,Rx(n),r_(),st=a,ft=o,kn.transition=s}else t.current=n;if(ma&&(ma=!1,Xi=t,wl=r),s=t.pendingLanes,s===0&&(Zi=null),a_(n.stateNode),vn(t,Dt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(El)throw El=!1,t=nd,nd=null,t;return wl&1&&t.tag!==0&&ys(),s=t.pendingLanes,s&1?t===id?yo++:(yo=0,id=t):yo=0,lr(),null}function ys(){if(Xi!==null){var t=rg(wl),e=kn.transition,n=ft;try{if(kn.transition=null,ft=16>t?16:t,Xi===null)var i=!1;else{if(t=Xi,Xi=null,wl=0,st&6)throw Error(oe(331));var r=st;for(st|=4,we=t.current;we!==null;){var s=we,o=s.child;if(we.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(we=c;we!==null;){var d=we;switch(d.tag){case 0:case 11:case 15:_o(8,d,s)}var h=d.child;if(h!==null)h.return=d,we=h;else for(;we!==null;){d=we;var f=d.sibling,g=d.return;if(m0(d),d===c){we=null;break}if(f!==null){f.return=g,we=f;break}we=g}}}var p=s.alternate;if(p!==null){var v=p.child;if(v!==null){p.child=null;do{var m=v.sibling;v.sibling=null,v=m}while(v!==null)}}we=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,we=o;else e:for(;we!==null;){if(s=we,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_o(9,s,s.return)}var u=s.sibling;if(u!==null){u.return=s.return,we=u;break e}we=s.return}}var _=t.current;for(we=_;we!==null;){o=we;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,we=x;else e:for(o=_;we!==null;){if(a=we,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Hl(9,a)}}catch(P){bt(a,a.return,P)}if(a===o){we=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,we=S;break e}we=a.return}}if(st=r,lr(),ai&&typeof ai.onPostCommitFiberRoot=="function")try{ai.onPostCommitFiberRoot(Il,t)}catch{}i=!0}return i}finally{ft=n,kn.transition=e}}return!1}function dp(t,e,n){e=Ps(n,e),e=r0(t,e,1),t=Ki(t,e,1),e=on(),t!==null&&(Go(t,1,e),vn(t,e))}function bt(t,e,n){if(t.tag===3)dp(t,t,n);else for(;e!==null;){if(e.tag===3){dp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Zi===null||!Zi.has(i))){t=Ps(n,t),t=s0(e,t,1),e=Ki(e,t,1),t=on(),e!==null&&(Go(e,1,t),vn(e,t));break}}e=e.return}}function Ux(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=on(),t.pingedLanes|=t.suspendedLanes&n,Vt===t&&(Yt&n)===n&&(Ot===4||Ot===3&&(Yt&130023424)===Yt&&500>Dt()-Uf?Pr(t,0):If|=n),vn(t,e)}function T0(t,e){e===0&&(t.mode&1?(e=sa,sa<<=1,!(sa&130023424)&&(sa=4194304)):e=1);var n=on();t=Ci(t,e),t!==null&&(Go(t,e,n),vn(t,n))}function Nx(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),T0(t,n)}function Fx(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(oe(314))}i!==null&&i.delete(e),T0(t,n)}var A0;A0=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||mn.current)hn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return hn=!1,Ex(t,e,n);hn=!!(t.flags&131072)}else hn=!1,Mt&&e.flags&1048576&&bg(e,ml,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ja(t,e),t=e.pendingProps;var r=Ts(e,nn.current);xs(e,n),r=Cf(null,e,i,t,r,n);var s=Rf();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,gn(i)?(s=!0,hl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Mf(e),r.updater=Bl,e.stateNode=r,r._reactInternals=e,Xu(e,i,t,n),e=$u(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&mf(e),sn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(ja(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=kx(i),t=jn(i,t),r){case 0:e=Yu(null,e,i,t,n);break e;case 1:e=tp(null,e,i,t,n);break e;case 11:e=Jh(null,e,i,t,n);break e;case 14:e=ep(null,e,i,jn(i.type,t),n);break e}throw Error(oe(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Yu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),tp(t,e,i,r,n);case 3:e:{if(c0(e),t===null)throw Error(oe(387));i=e.pendingProps,s=e.memoizedState,r=s.element,Fg(t,e),_l(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ps(Error(oe(423)),e),e=np(t,e,i,n,r);break e}else if(i!==r){r=Ps(Error(oe(424)),e),e=np(t,e,i,n,r);break e}else for(Tn=qi(e.stateNode.containerInfo.firstChild),An=e,Mt=!0,$n=null,n=Ug(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(As(),i===r){e=Ri(t,e,n);break e}sn(t,e,i,n)}e=e.child}return e;case 5:return Og(e),t===null&&Gu(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Ou(i,r)?o=null:s!==null&&Ou(i,s)&&(e.flags|=32),l0(t,e),sn(t,e,o,n),e.child;case 6:return t===null&&Gu(e),null;case 13:return u0(t,e,n);case 4:return Ef(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Cs(e,null,i,n):sn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),Jh(t,e,i,r,n);case 7:return sn(t,e,e.pendingProps,n),e.child;case 8:return sn(t,e,e.pendingProps.children,n),e.child;case 12:return sn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,gt(gl,i._currentValue),i._currentValue=o,s!==null)if(ei(s.value,o)){if(s.children===r.children&&!mn.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=wi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var d=c.pending;d===null?l.next=l:(l.next=d.next,d.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Vu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(oe(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Vu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}sn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,xs(e,n),r=zn(r),i=i(r),e.flags|=1,sn(t,e,i,n),e.child;case 14:return i=e.type,r=jn(i,e.pendingProps),r=jn(i.type,r),ep(t,e,i,r,n);case 15:return o0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:jn(i,r),ja(t,e),e.tag=1,gn(i)?(t=!0,hl(e)):t=!1,xs(e,n),i0(e,i,r),Xu(e,i,r,n),$u(null,e,i,!0,t,n);case 19:return d0(t,e,n);case 22:return a0(t,e,n)}throw Error(oe(156,e.tag))};function C0(t,e){return eg(t,e)}function Ox(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Fn(t,e,n,i){return new Ox(t,e,n,i)}function kf(t){return t=t.prototype,!(!t||!t.isReactComponent)}function kx(t){if(typeof t=="function")return kf(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nf)return 11;if(t===rf)return 14}return 2}function Ji(t,e){var n=t.alternate;return n===null?(n=Fn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function qa(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")kf(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case is:return br(n.children,r,s,e);case tf:o=8,r|=8;break;case mu:return t=Fn(12,n,e,r|2),t.elementType=mu,t.lanes=s,t;case gu:return t=Fn(13,n,e,r),t.elementType=gu,t.lanes=s,t;case vu:return t=Fn(19,n,e,r),t.elementType=vu,t.lanes=s,t;case Om:return Vl(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Nm:o=10;break e;case Fm:o=9;break e;case nf:o=11;break e;case rf:o=14;break e;case zi:o=16,i=null;break e}throw Error(oe(130,t==null?t:typeof t,""))}return e=Fn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function br(t,e,n,i){return t=Fn(7,t,i,e),t.lanes=n,t}function Vl(t,e,n,i){return t=Fn(22,t,i,e),t.elementType=Om,t.lanes=n,t.stateNode={isHidden:!1},t}function Lc(t,e,n){return t=Fn(6,t,null,e),t.lanes=n,t}function Dc(t,e,n){return e=Fn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function zx(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=fc(0),this.expirationTimes=fc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=fc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function zf(t,e,n,i,r,s,o,a,l){return t=new zx(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Fn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Mf(s),t}function Bx(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ns,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function R0(t){if(!t)return ir;t=t._reactInternals;e:{if(zr(t)!==t||t.tag!==1)throw Error(oe(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(gn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(oe(171))}if(t.tag===1){var n=t.type;if(gn(n))return Rg(t,n,e)}return e}function P0(t,e,n,i,r,s,o,a,l){return t=zf(n,i,!0,t,r,s,o,a,l),t.context=R0(null),n=t.current,i=on(),r=Qi(n),s=wi(i,r),s.callback=e??null,Ki(n,s,r),t.current.lanes=r,Go(t,r,i),vn(t,i),t}function Wl(t,e,n,i){var r=e.current,s=on(),o=Qi(r);return n=R0(n),e.context===null?e.context=n:e.pendingContext=n,e=wi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Ki(r,e,o),t!==null&&(Jn(t,r,o,s),Va(t,r,o)),o}function Al(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Bf(t,e){fp(t,e),(t=t.alternate)&&fp(t,e)}function Hx(){return null}var b0=typeof reportError=="function"?reportError:function(t){console.error(t)};function Hf(t){this._internalRoot=t}Xl.prototype.render=Hf.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(oe(409));Wl(t,e,null,null)};Xl.prototype.unmount=Hf.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Nr(function(){Wl(null,t,null,null)}),e[Ai]=null}};function Xl(t){this._internalRoot=t}Xl.prototype.unstable_scheduleHydration=function(t){if(t){var e=ag();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Hi.length&&e!==0&&e<Hi[n].priority;n++);Hi.splice(n,0,t),n===0&&cg(t)}};function Gf(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function jl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hp(){}function Gx(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Al(o);s.call(c)}}var o=P0(e,i,t,0,null,!1,!1,"",hp);return t._reactRootContainer=o,t[Ai]=o.current,Po(t.nodeType===8?t.parentNode:t),Nr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Al(l);a.call(c)}}var l=zf(t,0,!1,null,null,!1,!1,"",hp);return t._reactRootContainer=l,t[Ai]=l.current,Po(t.nodeType===8?t.parentNode:t),Nr(function(){Wl(e,l,n,i)}),l}function Yl(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Al(o);a.call(l)}}Wl(e,o,t,r)}else o=Gx(n,e,t,r,i);return Al(o)}sg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ao(e.pendingLanes);n!==0&&(af(e,n|1),vn(e,Dt()),!(st&6)&&(bs=Dt()+500,lr()))}break;case 13:Nr(function(){var i=Ci(t,1);if(i!==null){var r=on();Jn(i,t,1,r)}}),Bf(t,1)}};lf=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=on();Jn(e,t,134217728,n)}Bf(t,134217728)}};og=function(t){if(t.tag===13){var e=Qi(t),n=Ci(t,e);if(n!==null){var i=on();Jn(n,t,e,i)}Bf(t,e)}};ag=function(){return ft};lg=function(t,e){var n=ft;try{return ft=t,e()}finally{ft=n}};Cu=function(t,e,n){switch(e){case"input":if(yu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=Ol(i);if(!r)throw Error(oe(90));zm(i),yu(i,r)}}}break;case"textarea":Hm(t,n);break;case"select":e=n.value,e!=null&&ms(t,!!n.multiple,e,!1)}};$m=Nf;qm=Nr;var Vx={usingClientEntryPoint:!1,Events:[Wo,as,Ol,jm,Ym,Nf]},Zs={findFiberByHostInstance:Er,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Wx={bundleType:Zs.bundleType,version:Zs.version,rendererPackageName:Zs.rendererPackageName,rendererConfig:Zs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:bi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Qm(t),t===null?null:t.stateNode},findFiberByHostInstance:Zs.findFiberByHostInstance||Hx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ga=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ga.isDisabled&&ga.supportsFiber)try{Il=ga.inject(Wx),ai=ga}catch{}}Rn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Vx;Rn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gf(e))throw Error(oe(200));return Bx(t,e,null,n)};Rn.createRoot=function(t,e){if(!Gf(t))throw Error(oe(299));var n=!1,i="",r=b0;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=zf(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Po(t.nodeType===8?t.parentNode:t),new Hf(e)};Rn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(oe(188)):(t=Object.keys(t).join(","),Error(oe(268,t)));return t=Qm(e),t=t===null?null:t.stateNode,t};Rn.flushSync=function(t){return Nr(t)};Rn.hydrate=function(t,e,n){if(!jl(e))throw Error(oe(200));return Yl(null,t,e,!0,n)};Rn.hydrateRoot=function(t,e,n){if(!Gf(t))throw Error(oe(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=b0;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=P0(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,Po(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Xl(e)};Rn.render=function(t,e,n){if(!jl(e))throw Error(oe(200));return Yl(null,t,e,!1,n)};Rn.unmountComponentAtNode=function(t){if(!jl(t))throw Error(oe(40));return t._reactRootContainer?(Nr(function(){Yl(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};Rn.unstable_batchedUpdates=Nf;Rn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!jl(n))throw Error(oe(200));if(t==null||t._reactInternals===void 0)throw Error(oe(38));return Yl(t,e,n,!1,i)};Rn.version="18.3.1-next-f1338f8080-20240426";function L0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(L0)}catch(t){console.error(t)}}L0(),Lm.exports=Rn;var Xx=Lm.exports,pp=Xx;hu.createRoot=pp.createRoot,hu.hydrateRoot=pp.hydrateRoot;const jx={},mp=t=>{let e;const n=new Set,i=(d,h)=>{const f=typeof d=="function"?d(e):d;if(!Object.is(f,e)){const g=e;e=h??(typeof f!="object"||f===null)?f:Object.assign({},e,f),n.forEach(p=>p(e,g))}},r=()=>e,l={setState:i,getState:r,getInitialState:()=>c,subscribe:d=>(n.add(d),()=>n.delete(d)),destroy:()=>{(jx?"production":void 0)!=="production"&&console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),n.clear()}},c=e=t(i,r,l);return l},Yx=t=>t?mp(t):mp;var D0={exports:{}},I0={},U0={exports:{}},N0={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ls=dt;function $x(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var qx=typeof Object.is=="function"?Object.is:$x,Kx=Ls.useState,Zx=Ls.useEffect,Qx=Ls.useLayoutEffect,Jx=Ls.useDebugValue;function ey(t,e){var n=e(),i=Kx({inst:{value:n,getSnapshot:e}}),r=i[0].inst,s=i[1];return Qx(function(){r.value=n,r.getSnapshot=e,Ic(r)&&s({inst:r})},[t,n,e]),Zx(function(){return Ic(r)&&s({inst:r}),t(function(){Ic(r)&&s({inst:r})})},[t]),Jx(n),n}function Ic(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!qx(t,n)}catch{return!0}}function ty(t,e){return e()}var ny=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?ty:ey;N0.useSyncExternalStore=Ls.useSyncExternalStore!==void 0?Ls.useSyncExternalStore:ny;U0.exports=N0;var iy=U0.exports;/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $l=dt,ry=iy;function sy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var oy=typeof Object.is=="function"?Object.is:sy,ay=ry.useSyncExternalStore,ly=$l.useRef,cy=$l.useEffect,uy=$l.useMemo,dy=$l.useDebugValue;I0.useSyncExternalStoreWithSelector=function(t,e,n,i,r){var s=ly(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=uy(function(){function l(g){if(!c){if(c=!0,d=g,g=i(g),r!==void 0&&o.hasValue){var p=o.value;if(r(p,g))return h=p}return h=g}if(p=h,oy(d,g))return p;var v=i(g);return r!==void 0&&r(p,v)?(d=g,p):(d=g,h=v)}var c=!1,d,h,f=n===void 0?null:n;return[function(){return l(e())},f===null?void 0:function(){return l(f())}]},[e,n,i,r]);var a=ay(t,s[0],s[1]);return cy(function(){o.hasValue=!0,o.value=a},[a]),dy(a),a};D0.exports=I0;var fy=D0.exports;const hy=_m(fy),F0={},{useDebugValue:py}=Pm,{useSyncExternalStoreWithSelector:my}=hy;let gp=!1;const gy=t=>t;function vy(t,e=gy,n){(F0?"production":void 0)!=="production"&&n&&!gp&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),gp=!0);const i=my(t.subscribe,t.getState,t.getServerState||t.getInitialState,e,n);return py(i),i}const vp=t=>{(F0?"production":void 0)!=="production"&&typeof t!="function"&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");const e=typeof t=="function"?Yx(t):t,n=(i,r)=>vy(e,i,r);return Object.assign(n,e),n},_y=t=>t?vp(t):vp,je=_y((t,e)=>({streak:0,lastPracticeDate:null,todayAccuracy:0,todayPassed:!1,totalSessions:0,unlockedLocations:["home"],masteryPoints:0,fogOpacity:1,cameraTarget:"home",cameraShake:0,hapticEnabled:!0,soundEnabled:!0,holographicMode:!1,updateStreak:n=>{const i=e().streak,r=e().unlockedLocations;if(n>i){const s=[],o={1:"home",3:"school",5:"gym",7:"cafeteria",10:"malecon",14:"forum",21:"centro",30:"full_city"};for(const[a,l]of Object.entries(o))n>=parseInt(a)&&!r.includes(l)&&s.push(l);if(s.length>0){const a=[...r,...s],l=s.includes("full_city");return t({streak:n,unlockedLocations:a,masteryPoints:e().masteryPoints+n*100,holographicMode:l?!0:e().holographicMode,fogOpacity:0,cameraShake:15}),e().hapticEnabled&&typeof navigator<"u"&&navigator.vibrate&&navigator.vibrate([100,50,100,50,200]),s}return t({streak:n,masteryPoints:e().masteryPoints+100}),[]}return[]},recordSession:(n,i)=>{const r=new Date().toDateString(),s=e().lastPracticeDate;if(t({todayAccuracy:n,todayPassed:i,totalSessions:e().totalSessions+1}),i){const o=Math.round(n*10);if(t({masteryPoints:e().masteryPoints+o}),s!==r){const a=e().streak+1;t({lastPracticeDate:r}),typeof localStorage<"u"&&(localStorage.setItem("alma_streak",String(a)),localStorage.setItem("alma_last_practice",new Date().toISOString())),e().updateStreak(a)}}},navigateTo:n=>e().unlockedLocations.includes(n)?(t({cameraTarget:n,fogOpacity:.3}),!0):(t({fogOpacity:1}),!1),triggerFogBurst:()=>{t({fogOpacity:1}),setTimeout(()=>{t({fogOpacity:0})},1200)},triggerCameraShake:(n=10)=>{t({cameraShake:n}),setTimeout(()=>{t({cameraShake:0})},500)},getUnlockProgress:()=>{const n=e().streak;return[{day:1,location:"Home",emoji:"🏠"},{day:3,location:"School",emoji:"🏫"},{day:5,location:"Gym",emoji:"💪"},{day:7,location:"Cafetería",emoji:"☕"},{day:10,location:"Malecón",emoji:"🌅"},{day:14,location:"Forum",emoji:"🛍️"},{day:21,location:"Centro",emoji:"🏙️"},{day:30,location:"Full City + Holographic",emoji:"🌌"}].map(r=>({...r,unlocked:n>=r.day,daysRemaining:Math.max(0,r.day-n)}))}}));/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="169",xy=0,_p=1,yy=2,O0=1,jo=2,vi=3,rr=0,_n=1,fn=2,er=0,Ss=1,xp=2,yp=3,Sp=4,Sy=5,Sr=100,My=101,Ey=102,wy=103,Ty=104,Ay=200,Cy=201,Ry=202,Py=203,od=204,ad=205,by=206,Ly=207,Dy=208,Iy=209,Uy=210,Ny=211,Fy=212,Oy=213,ky=214,ld=0,cd=1,ud=2,Ds=3,dd=4,fd=5,hd=6,pd=7,k0=0,zy=1,By=2,tr=0,Hy=1,Gy=2,Vy=3,Yo=4,Wy=5,Xy=6,jy=7,z0=300,Is=301,Us=302,md=303,gd=304,ql=306,vd=1e3,Ar=1001,_d=1002,On=1003,Yy=1004,va=1005,qn=1006,Uc=1007,Cr=1008,Pi=1009,B0=1010,H0=1011,ko=1012,Wf=1013,Fr=1014,Mi=1015,$o=1016,Xf=1017,jf=1018,Ns=1020,G0=35902,V0=1021,W0=1022,Zn=1023,X0=1024,j0=1025,Ms=1026,Fs=1027,Y0=1028,Yf=1029,$0=1030,$f=1031,qf=1033,Ka=33776,Za=33777,Qa=33778,Ja=33779,xd=35840,yd=35841,Sd=35842,Md=35843,Ed=36196,wd=37492,Td=37496,Ad=37808,Cd=37809,Rd=37810,Pd=37811,bd=37812,Ld=37813,Dd=37814,Id=37815,Ud=37816,Nd=37817,Fd=37818,Od=37819,kd=37820,zd=37821,el=36492,Bd=36494,Hd=36495,q0=36283,Gd=36284,Vd=36285,Wd=36286,$y=3200,qy=3201,K0=0,Ky=1,Vi="",ri="srgb",cr="srgb-linear",Kf="display-p3",Kl="display-p3-linear",Cl="linear",xt="srgb",Rl="rec709",Pl="p3",Gr=7680,Mp=519,Zy=512,Qy=513,Jy=514,Z0=515,eS=516,tS=517,nS=518,iS=519,Ep=35044,wp="300 es",Ei=2e3,bl=2001;class Hs{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Nc=Math.PI/180,Xd=180/Math.PI;function qo(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Qt[t&255]+Qt[t>>8&255]+Qt[t>>16&255]+Qt[t>>24&255]+"-"+Qt[e&255]+Qt[e>>8&255]+"-"+Qt[e>>16&15|64]+Qt[e>>24&255]+"-"+Qt[n&63|128]+Qt[n>>8&255]+"-"+Qt[n>>16&255]+Qt[n>>24&255]+Qt[i&255]+Qt[i>>8&255]+Qt[i>>16&255]+Qt[i>>24&255]).toLowerCase()}function dn(t,e,n){return Math.max(e,Math.min(n,t))}function rS(t,e){return(t%e+e)%e}function Fc(t,e,n){return(1-n)*t+n*e}function Qs(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function cn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class nt{constructor(e=0,n=0){nt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ze{constructor(e,n,i,r,s,o,a,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const d=this.elements;return d[0]=e,d[1]=r,d[2]=a,d[3]=n,d[4]=s,d[5]=l,d[6]=i,d[7]=o,d[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],d=i[4],h=i[7],f=i[2],g=i[5],p=i[8],v=r[0],m=r[3],u=r[6],_=r[1],x=r[4],S=r[7],P=r[2],C=r[5],w=r[8];return s[0]=o*v+a*_+l*P,s[3]=o*m+a*x+l*C,s[6]=o*u+a*S+l*w,s[1]=c*v+d*_+h*P,s[4]=c*m+d*x+h*C,s[7]=c*u+d*S+h*w,s[2]=f*v+g*_+p*P,s[5]=f*m+g*x+p*C,s[8]=f*u+g*S+p*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8];return n*o*d-n*a*c-i*s*d+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=d*o-a*c,f=a*l-d*s,g=c*s-o*l,p=n*h+i*f+r*g;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=h*v,e[1]=(r*c-d*i)*v,e[2]=(a*i-r*o)*v,e[3]=f*v,e[4]=(d*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=g*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Oc.makeScale(e,n)),this}rotate(e){return this.premultiply(Oc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Oc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Oc=new Ze;function Q0(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ll(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function sS(){const t=Ll("canvas");return t.style.display="block",t}const Tp={};function tl(t){t in Tp||(Tp[t]=!0,console.warn(t))}function oS(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function aS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function lS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ap=new Ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Cp=new Ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Js={[cr]:{transfer:Cl,primaries:Rl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[ri]:{transfer:xt,primaries:Rl,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Kl]:{transfer:Cl,primaries:Pl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(Cp),fromReference:t=>t.applyMatrix3(Ap)},[Kf]:{transfer:xt,primaries:Pl,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(Cp),fromReference:t=>t.applyMatrix3(Ap).convertLinearToSRGB()}},cS=new Set([cr,Kl]),ct={enabled:!0,_workingColorSpace:cr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!cS.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Js[e].toReference,r=Js[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Js[t].primaries},getTransfer:function(t){return t===Vi?Cl:Js[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Js[e].luminanceCoefficients)}};function Es(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function kc(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Vr;class uS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Ll("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ll("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Es(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Es(n[i]/255)*255):n[i]=Es(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let dS=0;class J0{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dS++}),this.uuid=qo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(zc(r[o].image)):s.push(zc(r[o]))}else s=zc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function zc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?uS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let fS=0;class xn extends Hs{constructor(e=xn.DEFAULT_IMAGE,n=xn.DEFAULT_MAPPING,i=Ar,r=Ar,s=qn,o=Cr,a=Zn,l=Pi,c=xn.DEFAULT_ANISOTROPY,d=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:fS++}),this.uuid=qo(),this.name="",this.source=new J0(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new nt(0,0),this.repeat=new nt(1,1),this.center=new nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==z0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Ar:e.x=e.x<0?0:1;break;case _d:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Ar:e.y=e.y<0?0:1;break;case _d:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}xn.DEFAULT_IMAGE=null;xn.DEFAULT_MAPPING=z0;xn.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],d=l[4],h=l[8],f=l[1],g=l[5],p=l[9],v=l[2],m=l[6],u=l[10];if(Math.abs(d-f)<.01&&Math.abs(h-v)<.01&&Math.abs(p-m)<.01){if(Math.abs(d+f)<.1&&Math.abs(h+v)<.1&&Math.abs(p+m)<.1&&Math.abs(c+g+u-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const x=(c+1)/2,S=(g+1)/2,P=(u+1)/2,C=(d+f)/4,w=(h+v)/4,R=(p+m)/4;return x>S&&x>P?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=C/i,s=w/i):S>P?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=C/r,s=R/r):P<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(P),i=w/s,r=R/s),this.set(i,r,s,n),this}let _=Math.sqrt((m-p)*(m-p)+(h-v)*(h-v)+(f-d)*(f-d));return Math.abs(_)<.001&&(_=1),this.x=(m-p)/_,this.y=(h-v)/_,this.z=(f-d)/_,this.w=Math.acos((c+g+u-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hS extends Hs{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new xn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new J0(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Or extends hS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class ev extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class pS extends xn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=On,this.minFilter=On,this.wrapR=Ar,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],d=i[r+2],h=i[r+3];const f=s[o+0],g=s[o+1],p=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h;return}if(a===1){e[n+0]=f,e[n+1]=g,e[n+2]=p,e[n+3]=v;return}if(h!==v||l!==f||c!==g||d!==p){let m=1-a;const u=l*f+c*g+d*p+h*v,_=u>=0?1:-1,x=1-u*u;if(x>Number.EPSILON){const P=Math.sqrt(x),C=Math.atan2(P,u*_);m=Math.sin(m*C)/P,a=Math.sin(a*C)/P}const S=a*_;if(l=l*m+f*S,c=c*m+g*S,d=d*m+p*S,h=h*m+v*S,m===1-a){const P=1/Math.sqrt(l*l+c*c+d*d+h*h);l*=P,c*=P,d*=P,h*=P}}e[n]=l,e[n+1]=c,e[n+2]=d,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],d=i[r+3],h=s[o],f=s[o+1],g=s[o+2],p=s[o+3];return e[n]=a*p+d*h+l*g-c*f,e[n+1]=l*p+d*f+c*h-a*g,e[n+2]=c*p+d*g+a*f-l*h,e[n+3]=d*p-a*h-l*f-c*g,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),d=a(r/2),h=a(s/2),f=l(i/2),g=l(r/2),p=l(s/2);switch(o){case"XYZ":this._x=f*d*h+c*g*p,this._y=c*g*h-f*d*p,this._z=c*d*p+f*g*h,this._w=c*d*h-f*g*p;break;case"YXZ":this._x=f*d*h+c*g*p,this._y=c*g*h-f*d*p,this._z=c*d*p-f*g*h,this._w=c*d*h+f*g*p;break;case"ZXY":this._x=f*d*h-c*g*p,this._y=c*g*h+f*d*p,this._z=c*d*p+f*g*h,this._w=c*d*h-f*g*p;break;case"ZYX":this._x=f*d*h-c*g*p,this._y=c*g*h+f*d*p,this._z=c*d*p-f*g*h,this._w=c*d*h+f*g*p;break;case"YZX":this._x=f*d*h+c*g*p,this._y=c*g*h+f*d*p,this._z=c*d*p-f*g*h,this._w=c*d*h-f*g*p;break;case"XZY":this._x=f*d*h-c*g*p,this._y=c*g*h-f*d*p,this._z=c*d*p+f*g*h,this._w=c*d*h+f*g*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],d=n[6],h=n[10],f=i+a+h;if(f>0){const g=.5/Math.sqrt(f+1);this._w=.25/g,this._x=(d-l)*g,this._y=(s-c)*g,this._z=(o-r)*g}else if(i>a&&i>h){const g=2*Math.sqrt(1+i-a-h);this._w=(d-l)/g,this._x=.25*g,this._y=(r+o)/g,this._z=(s+c)/g}else if(a>h){const g=2*Math.sqrt(1+a-i-h);this._w=(s-c)/g,this._x=(r+o)/g,this._y=.25*g,this._z=(l+d)/g}else{const g=2*Math.sqrt(1+h-i-a);this._w=(o-r)/g,this._x=(s+c)/g,this._y=(l+d)/g,this._z=.25*g}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(dn(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,d=n._w;return this._x=i*d+o*a+r*c-s*l,this._y=r*d+o*l+s*a-i*c,this._z=s*d+o*c+i*l-r*a,this._w=o*d-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const g=1-n;return this._w=g*o+n*this._w,this._x=g*i+n*this._x,this._y=g*r+n*this._y,this._z=g*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),d=Math.atan2(c,a),h=Math.sin((1-n)*d)/c,f=Math.sin(n*d)/c;return this._w=o*h+this._w*f,this._x=i*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Rp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Rp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),d=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*d,this.y=i+l*d+a*c-s*h,this.z=r+l*h+s*d-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Bc.copy(this).projectOnVector(e),this.sub(Bc)}reflect(e){return this.sub(Bc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(dn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Bc=new N,Rp=new Ko;class Zo{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Vn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Vn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Vn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Vn):Vn.fromBufferAttribute(s,o),Vn.applyMatrix4(e.matrixWorld),this.expandByPoint(Vn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),_a.copy(i.boundingBox)),_a.applyMatrix4(e.matrixWorld),this.union(_a)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Vn),Vn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(eo),xa.subVectors(this.max,eo),Wr.subVectors(e.a,eo),Xr.subVectors(e.b,eo),jr.subVectors(e.c,eo),Ii.subVectors(Xr,Wr),Ui.subVectors(jr,Xr),ur.subVectors(Wr,jr);let n=[0,-Ii.z,Ii.y,0,-Ui.z,Ui.y,0,-ur.z,ur.y,Ii.z,0,-Ii.x,Ui.z,0,-Ui.x,ur.z,0,-ur.x,-Ii.y,Ii.x,0,-Ui.y,Ui.x,0,-ur.y,ur.x,0];return!Hc(n,Wr,Xr,jr,xa)||(n=[1,0,0,0,1,0,0,0,1],!Hc(n,Wr,Xr,jr,xa))?!1:(ya.crossVectors(Ii,Ui),n=[ya.x,ya.y,ya.z],Hc(n,Wr,Xr,jr,xa))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Vn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Vn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const fi=[new N,new N,new N,new N,new N,new N,new N,new N],Vn=new N,_a=new Zo,Wr=new N,Xr=new N,jr=new N,Ii=new N,Ui=new N,ur=new N,eo=new N,xa=new N,ya=new N,dr=new N;function Hc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){dr.fromArray(t,s);const a=r.x*Math.abs(dr.x)+r.y*Math.abs(dr.y)+r.z*Math.abs(dr.z),l=e.dot(dr),c=n.dot(dr),d=i.dot(dr);if(Math.max(-Math.max(l,c,d),Math.min(l,c,d))>a)return!1}return!0}const mS=new Zo,to=new N,Gc=new N;class Zf{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):mS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;to.subVectors(e,this.center);const n=to.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(to,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(to.copy(e.center).add(Gc)),this.expandByPoint(to.copy(e.center).sub(Gc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new N,Vc=new N,Sa=new N,Ni=new N,Wc=new N,Ma=new N,Xc=new N;class tv{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Vc.copy(e).add(n).multiplyScalar(.5),Sa.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(Vc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Sa),a=Ni.dot(this.direction),l=-Ni.dot(Sa),c=Ni.lengthSq(),d=Math.abs(1-o*o);let h,f,g,p;if(d>0)if(h=o*l-a,f=o*a-l,p=s*d,h>=0)if(f>=-p)if(f<=p){const v=1/d;h*=v,f*=v,g=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;else f<=-p?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c):f<=p?(h=0,f=Math.min(Math.max(-s,-l),s),g=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),g=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),g=-h*h+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Vc).addScaledVector(Sa,f),g}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,d=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),d>=0?(s=(e.min.y-f.y)*d,o=(e.max.y-f.y)*d):(s=(e.max.y-f.y)*d,o=(e.min.y-f.y)*d),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(a=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Wc.subVectors(n,e),Ma.subVectors(i,e),Xc.crossVectors(Wc,Ma);let o=this.direction.dot(Xc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ma.crossVectors(Ni,Ma));if(l<0)return null;const c=a*this.direction.dot(Wc.cross(Ni));if(c<0||l+c>o)return null;const d=-a*Ni.dot(Xc);return d<0?null:this.at(d/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Et{constructor(e,n,i,r,s,o,a,l,c,d,h,f,g,p,v,m){Et.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,d,h,f,g,p,v,m)}set(e,n,i,r,s,o,a,l,c,d,h,f,g,p,v,m){const u=this.elements;return u[0]=e,u[4]=n,u[8]=i,u[12]=r,u[1]=s,u[5]=o,u[9]=a,u[13]=l,u[2]=c,u[6]=d,u[10]=h,u[14]=f,u[3]=g,u[7]=p,u[11]=v,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Et().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Yr.setFromMatrixColumn(e,0).length(),s=1/Yr.setFromMatrixColumn(e,1).length(),o=1/Yr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),d=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=o*d,g=o*h,p=a*d,v=a*h;n[0]=l*d,n[4]=-l*h,n[8]=c,n[1]=g+p*c,n[5]=f-v*c,n[9]=-a*l,n[2]=v-f*c,n[6]=p+g*c,n[10]=o*l}else if(e.order==="YXZ"){const f=l*d,g=l*h,p=c*d,v=c*h;n[0]=f+v*a,n[4]=p*a-g,n[8]=o*c,n[1]=o*h,n[5]=o*d,n[9]=-a,n[2]=g*a-p,n[6]=v+f*a,n[10]=o*l}else if(e.order==="ZXY"){const f=l*d,g=l*h,p=c*d,v=c*h;n[0]=f-v*a,n[4]=-o*h,n[8]=p+g*a,n[1]=g+p*a,n[5]=o*d,n[9]=v-f*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const f=o*d,g=o*h,p=a*d,v=a*h;n[0]=l*d,n[4]=p*c-g,n[8]=f*c+v,n[1]=l*h,n[5]=v*c+f,n[9]=g*c-p,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const f=o*l,g=o*c,p=a*l,v=a*c;n[0]=l*d,n[4]=v-f*h,n[8]=p*h+g,n[1]=h,n[5]=o*d,n[9]=-a*d,n[2]=-c*d,n[6]=g*h+p,n[10]=f-v*h}else if(e.order==="XZY"){const f=o*l,g=o*c,p=a*l,v=a*c;n[0]=l*d,n[4]=-h,n[8]=c*d,n[1]=f*h+v,n[5]=o*d,n[9]=g*h-p,n[2]=p*h-g,n[6]=a*d,n[10]=v*h+f}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gS,e,vS)}lookAt(e,n,i){const r=this.elements;return Mn.subVectors(e,n),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Fi.crossVectors(i,Mn),Fi.lengthSq()===0&&(Math.abs(i.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Fi.crossVectors(i,Mn)),Fi.normalize(),Ea.crossVectors(Mn,Fi),r[0]=Fi.x,r[4]=Ea.x,r[8]=Mn.x,r[1]=Fi.y,r[5]=Ea.y,r[9]=Mn.y,r[2]=Fi.z,r[6]=Ea.z,r[10]=Mn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],d=i[1],h=i[5],f=i[9],g=i[13],p=i[2],v=i[6],m=i[10],u=i[14],_=i[3],x=i[7],S=i[11],P=i[15],C=r[0],w=r[4],R=r[8],X=r[12],y=r[1],E=r[5],k=r[9],F=r[13],V=r[2],K=r[6],B=r[10],ee=r[14],L=r[3],q=r[7],J=r[11],se=r[15];return s[0]=o*C+a*y+l*V+c*L,s[4]=o*w+a*E+l*K+c*q,s[8]=o*R+a*k+l*B+c*J,s[12]=o*X+a*F+l*ee+c*se,s[1]=d*C+h*y+f*V+g*L,s[5]=d*w+h*E+f*K+g*q,s[9]=d*R+h*k+f*B+g*J,s[13]=d*X+h*F+f*ee+g*se,s[2]=p*C+v*y+m*V+u*L,s[6]=p*w+v*E+m*K+u*q,s[10]=p*R+v*k+m*B+u*J,s[14]=p*X+v*F+m*ee+u*se,s[3]=_*C+x*y+S*V+P*L,s[7]=_*w+x*E+S*K+P*q,s[11]=_*R+x*k+S*B+P*J,s[15]=_*X+x*F+S*ee+P*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],d=e[2],h=e[6],f=e[10],g=e[14],p=e[3],v=e[7],m=e[11],u=e[15];return p*(+s*l*h-r*c*h-s*a*f+i*c*f+r*a*g-i*l*g)+v*(+n*l*g-n*c*f+s*o*f-r*o*g+r*c*d-s*l*d)+m*(+n*c*h-n*a*g-s*o*h+i*o*g+s*a*d-i*c*d)+u*(-r*a*d-n*l*h+n*a*f+r*o*h-i*o*f+i*l*d)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],d=e[8],h=e[9],f=e[10],g=e[11],p=e[12],v=e[13],m=e[14],u=e[15],_=h*m*c-v*f*c+v*l*g-a*m*g-h*l*u+a*f*u,x=p*f*c-d*m*c-p*l*g+o*m*g+d*l*u-o*f*u,S=d*v*c-p*h*c+p*a*g-o*v*g-d*a*u+o*h*u,P=p*h*l-d*v*l-p*a*f+o*v*f+d*a*m-o*h*m,C=n*_+i*x+r*S+s*P;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=_*w,e[1]=(v*f*s-h*m*s-v*r*g+i*m*g+h*r*u-i*f*u)*w,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*u+i*l*u)*w,e[3]=(h*l*s-a*f*s-h*r*c+i*f*c+a*r*g-i*l*g)*w,e[4]=x*w,e[5]=(d*m*s-p*f*s+p*r*g-n*m*g-d*r*u+n*f*u)*w,e[6]=(p*l*s-o*m*s-p*r*c+n*m*c+o*r*u-n*l*u)*w,e[7]=(o*f*s-d*l*s+d*r*c-n*f*c-o*r*g+n*l*g)*w,e[8]=S*w,e[9]=(p*h*s-d*v*s-p*i*g+n*v*g+d*i*u-n*h*u)*w,e[10]=(o*v*s-p*a*s+p*i*c-n*v*c-o*i*u+n*a*u)*w,e[11]=(d*a*s-o*h*s-d*i*c+n*h*c+o*i*g-n*a*g)*w,e[12]=P*w,e[13]=(d*v*r-p*h*r+p*i*f-n*v*f-d*i*m+n*h*m)*w,e[14]=(p*a*r-o*v*r-p*i*l+n*v*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-d*a*r+d*i*l-n*h*l-o*i*f+n*a*f)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,d=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,d*a+i,d*l-r*o,0,c*l-r*a,d*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,d=o+o,h=a+a,f=s*c,g=s*d,p=s*h,v=o*d,m=o*h,u=a*h,_=l*c,x=l*d,S=l*h,P=i.x,C=i.y,w=i.z;return r[0]=(1-(v+u))*P,r[1]=(g+S)*P,r[2]=(p-x)*P,r[3]=0,r[4]=(g-S)*C,r[5]=(1-(f+u))*C,r[6]=(m+_)*C,r[7]=0,r[8]=(p+x)*w,r[9]=(m-_)*w,r[10]=(1-(f+v))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Yr.set(r[0],r[1],r[2]).length();const o=Yr.set(r[4],r[5],r[6]).length(),a=Yr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Wn.copy(this);const c=1/s,d=1/o,h=1/a;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=d,Wn.elements[5]*=d,Wn.elements[6]*=d,Wn.elements[8]*=h,Wn.elements[9]*=h,Wn.elements[10]*=h,n.setFromRotationMatrix(Wn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ei){const l=this.elements,c=2*s/(n-e),d=2*s/(i-r),h=(n+e)/(n-e),f=(i+r)/(i-r);let g,p;if(a===Ei)g=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===bl)g=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ei){const l=this.elements,c=1/(n-e),d=1/(i-r),h=1/(o-s),f=(n+e)*c,g=(i+r)*d;let p,v;if(a===Ei)p=(o+s)*h,v=-2*h;else if(a===bl)p=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*d,l[9]=0,l[13]=-g,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Yr=new N,Wn=new Et,gS=new N(0,0,0),vS=new N(1,1,1),Fi=new N,Ea=new N,Mn=new N,Pp=new Et,bp=new Ko;class di{constructor(e=0,n=0,i=0,r=di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],d=r[9],h=r[2],f=r[6],g=r[10];switch(n){case"XYZ":this._y=Math.asin(dn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,g),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-dn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,g),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(dn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,g),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-dn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,g),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(dn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-d,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,g));break;case"XZY":this._z=Math.asin(-dn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,g),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Pp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return bp.setFromEuler(this),this.setFromQuaternion(bp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}di.DEFAULT_ORDER="XYZ";class Qf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let _S=0;const Lp=new N,$r=new Ko,pi=new Et,wa=new N,no=new N,xS=new N,yS=new Ko,Dp=new N(1,0,0),Ip=new N(0,1,0),Up=new N(0,0,1),Np={type:"added"},SS={type:"removed"},qr={type:"childadded",child:null},jc={type:"childremoved",child:null};class $t extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:_S++}),this.uuid=qo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=$t.DEFAULT_UP.clone();const e=new N,n=new di,i=new Ko,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Et},normalMatrix:{value:new Ze}}),this.matrix=new Et,this.matrixWorld=new Et,this.matrixAutoUpdate=$t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Qf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Dp,e)}rotateY(e){return this.rotateOnAxis(Ip,e)}rotateZ(e){return this.rotateOnAxis(Up,e)}translateOnAxis(e,n){return Lp.copy(e).applyQuaternion(this.quaternion),this.position.add(Lp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Dp,e)}translateY(e){return this.translateOnAxis(Ip,e)}translateZ(e){return this.translateOnAxis(Up,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(pi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?wa.copy(e):wa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),no.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?pi.lookAt(no,wa,this.up):pi.lookAt(wa,no,this.up),this.quaternion.setFromRotationMatrix(pi),r&&(pi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(pi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Np),qr.child=e,this.dispatchEvent(qr),qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(SS),jc.child=e,this.dispatchEvent(jc),jc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),pi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),pi.multiply(e.parent.matrixWorld)),e.applyMatrix4(pi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Np),qr.child=e,this.dispatchEvent(qr),qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,e,xS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(no,yS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,d=l.length;c<d;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),d=o(e.images),h=o(e.shapes),f=o(e.skeletons),g=o(e.animations),p=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),d.length>0&&(i.images=d),h.length>0&&(i.shapes=h),f.length>0&&(i.skeletons=f),g.length>0&&(i.animations=g),p.length>0&&(i.nodes=p)}return i.object=r,i;function o(a){const l=[];for(const c in a){const d=a[c];delete d.metadata,l.push(d)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}$t.DEFAULT_UP=new N(0,1,0);$t.DEFAULT_MATRIX_AUTO_UPDATE=!0;$t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new N,mi=new N,Yc=new N,gi=new N,Kr=new N,Zr=new N,Fp=new N,$c=new N,qc=new N,Kc=new N,Zc=new ht,Qc=new ht,Jc=new ht;class Kn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Xn.subVectors(e,n),r.cross(Xn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Xn.subVectors(r,n),mi.subVectors(i,n),Yc.subVectors(e,n);const o=Xn.dot(Xn),a=Xn.dot(mi),l=Xn.dot(Yc),c=mi.dot(mi),d=mi.dot(Yc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const f=1/h,g=(c*l-a*d)*f,p=(o*d-a*l)*f;return s.set(1-g-p,p,g)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,gi)===null?!1:gi.x>=0&&gi.y>=0&&gi.x+gi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,gi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,gi.x),l.addScaledVector(o,gi.y),l.addScaledVector(a,gi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Zc.setScalar(0),Qc.setScalar(0),Jc.setScalar(0),Zc.fromBufferAttribute(e,n),Qc.fromBufferAttribute(e,i),Jc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Zc,s.x),o.addScaledVector(Qc,s.y),o.addScaledVector(Jc,s.z),o}static isFrontFacing(e,n,i,r){return Xn.subVectors(i,n),mi.subVectors(e,n),Xn.cross(mi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xn.subVectors(this.c,this.b),mi.subVectors(this.a,this.b),Xn.cross(mi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Kn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Kn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Kn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Kn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Kn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Kr.subVectors(r,i),Zr.subVectors(s,i),$c.subVectors(e,i);const l=Kr.dot($c),c=Zr.dot($c);if(l<=0&&c<=0)return n.copy(i);qc.subVectors(e,r);const d=Kr.dot(qc),h=Zr.dot(qc);if(d>=0&&h<=d)return n.copy(r);const f=l*h-d*c;if(f<=0&&l>=0&&d<=0)return o=l/(l-d),n.copy(i).addScaledVector(Kr,o);Kc.subVectors(e,s);const g=Kr.dot(Kc),p=Zr.dot(Kc);if(p>=0&&g<=p)return n.copy(s);const v=g*c-l*p;if(v<=0&&c>=0&&p<=0)return a=c/(c-p),n.copy(i).addScaledVector(Zr,a);const m=d*p-g*h;if(m<=0&&h-d>=0&&g-p>=0)return Fp.subVectors(s,r),a=(h-d)/(h-d+(g-p)),n.copy(r).addScaledVector(Fp,a);const u=1/(m+v+f);return o=v*u,a=f*u,n.copy(i).addScaledVector(Kr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},Ta={h:0,s:0,l:0};function eu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ri){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ct.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ct.workingColorSpace){return this.r=e,this.g=n,this.b=i,ct.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ct.workingColorSpace){if(e=rS(e,1),n=dn(n,0,1),i=dn(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=eu(o,s,e+1/3),this.g=eu(o,s,e),this.b=eu(o,s,e-1/3)}return ct.toWorkingColorSpace(this,r),this}setStyle(e,n=ri){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ri){const i=nv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Es(e.r),this.g=Es(e.g),this.b=Es(e.b),this}copyLinearToSRGB(e){return this.r=kc(e.r),this.g=kc(e.g),this.b=kc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ri){return ct.fromWorkingColorSpace(Jt.copy(this),e),Math.round(dn(Jt.r*255,0,255))*65536+Math.round(dn(Jt.g*255,0,255))*256+Math.round(dn(Jt.b*255,0,255))}getHexString(e=ri){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ct.workingColorSpace){ct.fromWorkingColorSpace(Jt.copy(this),n);const i=Jt.r,r=Jt.g,s=Jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const d=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=d<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=d,e}getRGB(e,n=ct.workingColorSpace){return ct.fromWorkingColorSpace(Jt.copy(this),n),e.r=Jt.r,e.g=Jt.g,e.b=Jt.b,e}getStyle(e=ri){ct.fromWorkingColorSpace(Jt.copy(this),e);const n=Jt.r,i=Jt.g,r=Jt.b;return e!==ri?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+n,Oi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Oi),e.getHSL(Ta);const i=Fc(Oi.h,Ta.h,n),r=Fc(Oi.s,Ta.s,n),s=Fc(Oi.l,Ta.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Jt=new tt;tt.NAMES=nv;let MS=0;class Qo extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:MS++}),this.uuid=qo(),this.name="",this.type="Material",this.blending=Ss,this.side=rr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ad,this.blendEquation=Sr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Ds,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Gr,this.stencilZFail=Gr,this.stencilZPass=Gr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ss&&(i.blending=this.blending),this.side!==rr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==od&&(i.blendSrc=this.blendSrc),this.blendDst!==ad&&(i.blendDst=this.blendDst),this.blendEquation!==Sr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ds&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Gr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Gr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Gr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ci extends Qo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.combine=k0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new N,Aa=new nt;class ui{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Ep,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Aa.fromBufferAttribute(this,n),Aa.applyMatrix3(e),this.setXY(n,Aa.x,Aa.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Qs(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=cn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Qs(n,this.array)),n}setX(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Qs(n,this.array)),n}setY(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Qs(n,this.array)),n}setZ(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Qs(n,this.array)),n}setW(e,n){return this.normalized&&(n=cn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=cn(n,this.array),i=cn(i,this.array),r=cn(r,this.array),s=cn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ep&&(e.usage=this.usage),e}}class iv extends ui{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class rv extends ui{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class kt extends ui{constructor(e,n,i){super(new Float32Array(e),n,i)}}let ES=0;const Ln=new Et,tu=new $t,Qr=new N,En=new Zo,io=new Zo,Ht=new N;class ti extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=qo(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Q0(e)?rv:iv)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ze().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ln.makeRotationFromQuaternion(e),this.applyMatrix4(Ln),this}rotateX(e){return Ln.makeRotationX(e),this.applyMatrix4(Ln),this}rotateY(e){return Ln.makeRotationY(e),this.applyMatrix4(Ln),this}rotateZ(e){return Ln.makeRotationZ(e),this.applyMatrix4(Ln),this}translate(e,n,i){return Ln.makeTranslation(e,n,i),this.applyMatrix4(Ln),this}scale(e,n,i){return Ln.makeScale(e,n,i),this.applyMatrix4(Ln),this}lookAt(e){return tu.lookAt(e),tu.updateMatrix(),this.applyMatrix4(tu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qr).negate(),this.translate(Qr.x,Qr.y,Qr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new kt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];En.setFromBufferAttribute(s),this.morphTargetsRelative?(Ht.addVectors(this.boundingBox.min,En.min),this.boundingBox.expandByPoint(Ht),Ht.addVectors(this.boundingBox.max,En.max),this.boundingBox.expandByPoint(Ht)):(this.boundingBox.expandByPoint(En.min),this.boundingBox.expandByPoint(En.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Zf);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(En.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];io.setFromBufferAttribute(a),this.morphTargetsRelative?(Ht.addVectors(En.min,io.min),En.expandByPoint(Ht),Ht.addVectors(En.max,io.max),En.expandByPoint(Ht)):(En.expandByPoint(io.min),En.expandByPoint(io.max))}En.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Ht.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Ht));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,d=a.count;c<d;c++)Ht.fromBufferAttribute(a,c),l&&(Qr.fromBufferAttribute(e,c),Ht.add(Qr)),r=Math.max(r,i.distanceToSquared(Ht))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ui(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const c=new N,d=new N,h=new N,f=new nt,g=new nt,p=new nt,v=new N,m=new N;function u(R,X,y){c.fromBufferAttribute(i,R),d.fromBufferAttribute(i,X),h.fromBufferAttribute(i,y),f.fromBufferAttribute(s,R),g.fromBufferAttribute(s,X),p.fromBufferAttribute(s,y),d.sub(c),h.sub(c),g.sub(f),p.sub(f);const E=1/(g.x*p.y-p.x*g.y);isFinite(E)&&(v.copy(d).multiplyScalar(p.y).addScaledVector(h,-g.y).multiplyScalar(E),m.copy(h).multiplyScalar(g.x).addScaledVector(d,-p.x).multiplyScalar(E),a[R].add(v),a[X].add(v),a[y].add(v),l[R].add(m),l[X].add(m),l[y].add(m))}let _=this.groups;_.length===0&&(_=[{start:0,count:e.count}]);for(let R=0,X=_.length;R<X;++R){const y=_[R],E=y.start,k=y.count;for(let F=E,V=E+k;F<V;F+=3)u(e.getX(F+0),e.getX(F+1),e.getX(F+2))}const x=new N,S=new N,P=new N,C=new N;function w(R){P.fromBufferAttribute(r,R),C.copy(P);const X=a[R];x.copy(X),x.sub(P.multiplyScalar(P.dot(X))).normalize(),S.crossVectors(C,X);const E=S.dot(l[R])<0?-1:1;o.setXYZW(R,x.x,x.y,x.z,E)}for(let R=0,X=_.length;R<X;++R){const y=_[R],E=y.start,k=y.count;for(let F=E,V=E+k;F<V;F+=3)w(e.getX(F+0)),w(e.getX(F+1)),w(e.getX(F+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ui(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let f=0,g=i.count;f<g;f++)i.setXYZ(f,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,d=new N,h=new N;if(e)for(let f=0,g=e.count;f<g;f+=3){const p=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(n,p),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),a.fromBufferAttribute(i,p),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(d),l.add(d),c.add(d),i.setXYZ(p,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,g=n.count;f<g;f+=3)r.fromBufferAttribute(n,f+0),s.fromBufferAttribute(n,f+1),o.fromBufferAttribute(n,f+2),d.subVectors(o,s),h.subVectors(r,s),d.cross(h),i.setXYZ(f+0,d.x,d.y,d.z),i.setXYZ(f+1,d.x,d.y,d.z),i.setXYZ(f+2,d.x,d.y,d.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Ht.fromBufferAttribute(e,n),Ht.normalize(),e.setXYZ(n,Ht.x,Ht.y,Ht.z)}toNonIndexed(){function e(a,l){const c=a.array,d=a.itemSize,h=a.normalized,f=new c.constructor(l.length*d);let g=0,p=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?g=l[v]*a.data.stride+a.offset:g=l[v]*d;for(let u=0;u<d;u++)f[p++]=c[g++]}return new ui(f,d,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ti,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let d=0,h=c.length;d<h;d++){const f=c[d],g=e(f,i);l.push(g)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],d=[];for(let h=0,f=c.length;h<f;h++){const g=c[h];d.push(g.toJSON(e.data))}d.length>0&&(r[l]=d,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const d=r[c];this.setAttribute(c,d.clone(n))}const s=e.morphAttributes;for(const c in s){const d=[],h=s[c];for(let f=0,g=h.length;f<g;f++)d.push(h[f].clone(n));this.morphAttributes[c]=d}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,d=o.length;c<d;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Op=new Et,fr=new tv,Ca=new Zf,kp=new N,Ra=new N,Pa=new N,ba=new N,nu=new N,La=new N,zp=new N,Da=new N;class ne extends $t{constructor(e=new ti,n=new ci){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){La.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const d=a[l],h=s[l];d!==0&&(nu.fromBufferAttribute(h,e),o?La.addScaledVector(nu,d):La.addScaledVector(nu.sub(n),d))}n.add(La)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ca.copy(i.boundingSphere),Ca.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(Ca.containsPoint(fr.origin)===!1&&(fr.intersectSphere(Ca,kp)===null||fr.origin.distanceToSquared(kp)>(e.far-e.near)**2))&&(Op.copy(s).invert(),fr.copy(e.ray).applyMatrix4(Op),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,d=s.attributes.uv1,h=s.attributes.normal,f=s.groups,g=s.drawRange;if(a!==null)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],u=o[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(a.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,P=x;S<P;S+=3){const C=a.getX(S),w=a.getX(S+1),R=a.getX(S+2);r=Ia(this,u,e,i,c,d,h,C,w,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const p=Math.max(0,g.start),v=Math.min(a.count,g.start+g.count);for(let m=p,u=v;m<u;m+=3){const _=a.getX(m),x=a.getX(m+1),S=a.getX(m+2);r=Ia(this,o,e,i,c,d,h,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let p=0,v=f.length;p<v;p++){const m=f[p],u=o[m.materialIndex],_=Math.max(m.start,g.start),x=Math.min(l.count,Math.min(m.start+m.count,g.start+g.count));for(let S=_,P=x;S<P;S+=3){const C=S,w=S+1,R=S+2;r=Ia(this,u,e,i,c,d,h,C,w,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const p=Math.max(0,g.start),v=Math.min(l.count,g.start+g.count);for(let m=p,u=v;m<u;m+=3){const _=m,x=m+1,S=m+2;r=Ia(this,o,e,i,c,d,h,_,x,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function wS(t,e,n,i,r,s,o,a){let l;if(e.side===_n?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===rr,a),l===null)return null;Da.copy(a),Da.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Da);return c<n.near||c>n.far?null:{distance:c,point:Da.clone(),object:t}}function Ia(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Ra),t.getVertexPosition(l,Pa),t.getVertexPosition(c,ba);const d=wS(t,e,n,i,Ra,Pa,ba,zp);if(d){const h=new N;Kn.getBarycoord(zp,Ra,Pa,ba,h),r&&(d.uv=Kn.getInterpolatedAttribute(r,a,l,c,h,new nt)),s&&(d.uv1=Kn.getInterpolatedAttribute(s,a,l,c,h,new nt)),o&&(d.normal=Kn.getInterpolatedAttribute(o,a,l,c,h,new N),d.normal.dot(i.direction)>0&&d.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new N,materialIndex:0};Kn.getNormal(Ra,Pa,ba,f.normal),d.face=f,d.barycoord=h}return d}class Ve extends ti{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],d=[],h=[];let f=0,g=0;p("z","y","x",-1,-1,i,n,e,o,s,0),p("z","y","x",1,-1,i,n,-e,o,s,1),p("x","z","y",1,1,e,i,n,r,o,2),p("x","z","y",1,-1,e,i,-n,r,o,3),p("x","y","z",1,-1,e,n,i,r,s,4),p("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new kt(c,3)),this.setAttribute("normal",new kt(d,3)),this.setAttribute("uv",new kt(h,2));function p(v,m,u,_,x,S,P,C,w,R,X){const y=S/w,E=P/R,k=S/2,F=P/2,V=C/2,K=w+1,B=R+1;let ee=0,L=0;const q=new N;for(let J=0;J<B;J++){const se=J*E-F;for(let Se=0;Se<K;Se++){const Ne=Se*y-k;q[v]=Ne*_,q[m]=se*x,q[u]=V,c.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[u]=C>0?1:-1,d.push(q.x,q.y,q.z),h.push(Se/w),h.push(1-J/R),ee+=1}}for(let J=0;J<R;J++)for(let se=0;se<w;se++){const Se=f+se+K*J,Ne=f+se+K*(J+1),W=f+(se+1)+K*(J+1),ie=f+(se+1)+K*J;l.push(Se,Ne,ie),l.push(Ne,W,ie),L+=6}a.addGroup(g,L,X),g+=L,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ve(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Os(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function rn(t){const e={};for(let n=0;n<t.length;n++){const i=Os(t[n]);for(const r in i)e[r]=i[r]}return e}function TS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ct.workingColorSpace}const AS={clone:Os,merge:rn};var CS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class sr extends Qo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CS,this.fragmentShader=RS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Os(e.uniforms),this.uniformsGroups=TS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class ov extends $t{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Et,this.projectionMatrix=new Et,this.projectionMatrixInverse=new Et,this.coordinateSystem=Ei}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const ki=new N,Bp=new nt,Hp=new nt;class tn extends ov{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Xd*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Nc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xd*2*Math.atan(Math.tan(Nc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ki.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ki.x,ki.y).multiplyScalar(-e/ki.z),ki.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ki.x,ki.y).multiplyScalar(-e/ki.z)}getViewSize(e,n){return this.getViewBounds(e,Bp,Hp),n.subVectors(Hp,Bp)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Nc*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Jr=-90,es=1;class PS extends $t{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new tn(Jr,es,e,n);r.layers=this.layers,this.add(r);const s=new tn(Jr,es,e,n);s.layers=this.layers,this.add(s);const o=new tn(Jr,es,e,n);o.layers=this.layers,this.add(o);const a=new tn(Jr,es,e,n);a.layers=this.layers,this.add(a);const l=new tn(Jr,es,e,n);l.layers=this.layers,this.add(l);const c=new tn(Jr,es,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===bl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,d]=this.children,h=e.getRenderTarget(),f=e.getActiveCubeFace(),g=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=v,e.setRenderTarget(i,5,r),e.render(n,d),e.setRenderTarget(h,f,g),e.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class av extends xn{constructor(e,n,i,r,s,o,a,l,c,d){e=e!==void 0?e:[],n=n!==void 0?n:Is,super(e,n,i,r,s,o,a,l,c,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bS extends Or{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new av(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ve(5,5,5),s=new sr({name:"CubemapFromEquirect",uniforms:Os(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:_n,blending:er});s.uniforms.tEquirect.value=n;const o=new ne(r,s),a=n.minFilter;return n.minFilter===Cr&&(n.minFilter=qn),new PS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const iu=new N,LS=new N,DS=new Ze;class xr{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=iu.subVectors(i,n).cross(LS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(iu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||DS.getNormalMatrix(e),r=this.coplanarPoint(iu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const hr=new Zf,Ua=new N;class Jf{constructor(e=new xr,n=new xr,i=new xr,r=new xr,s=new xr,o=new xr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],d=r[5],h=r[6],f=r[7],g=r[8],p=r[9],v=r[10],m=r[11],u=r[12],_=r[13],x=r[14],S=r[15];if(i[0].setComponents(l-s,f-c,m-g,S-u).normalize(),i[1].setComponents(l+s,f+c,m+g,S+u).normalize(),i[2].setComponents(l+o,f+d,m+p,S+_).normalize(),i[3].setComponents(l-o,f-d,m-p,S-_).normalize(),i[4].setComponents(l-a,f-h,m-v,S-x).normalize(),n===Ei)i[5].setComponents(l+a,f+h,m+v,S+x).normalize();else if(n===bl)i[5].setComponents(a,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),hr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),hr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(hr)}intersectsSprite(e){return hr.center.set(0,0,0),hr.radius=.7071067811865476,hr.applyMatrix4(e.matrixWorld),this.intersectsSphere(hr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ua.x=r.normal.x>0?e.max.x:e.min.x,Ua.y=r.normal.y>0?e.max.y:e.min.y,Ua.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ua)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function IS(t){const e=new WeakMap;function n(a,l){const c=a.array,d=a.usage,h=c.byteLength,f=t.createBuffer();t.bindBuffer(l,f),t.bufferData(l,c,d),a.onUploadCallback();let g;if(c instanceof Float32Array)g=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?g=t.HALF_FLOAT:g=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)g=t.SHORT;else if(c instanceof Uint32Array)g=t.UNSIGNED_INT;else if(c instanceof Int32Array)g=t.INT;else if(c instanceof Int8Array)g=t.BYTE;else if(c instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:g,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const d=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,d);else{h.sort((g,p)=>g.start-p.start);let f=0;for(let g=1;g<h.length;g++){const p=h[f],v=h[g];v.start<=p.start+p.count+1?p.count=Math.max(p.count,v.start+v.count-p.start):(++f,h[f]=v)}h.length=f+1;for(let g=0,p=h.length;g<p;g++){const v=h[g];t.bufferSubData(c,v.start*d.BYTES_PER_ELEMENT,d,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=e.get(a);(!d||d.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class mt extends ti{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,d=l+1,h=e/a,f=n/l,g=[],p=[],v=[],m=[];for(let u=0;u<d;u++){const _=u*f-o;for(let x=0;x<c;x++){const S=x*h-s;p.push(S,-_,0),v.push(0,0,1),m.push(x/a),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let _=0;_<a;_++){const x=_+c*u,S=_+c*(u+1),P=_+1+c*(u+1),C=_+1+c*u;g.push(x,S,C),g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mt(e.width,e.height,e.widthSegments,e.heightSegments)}}var US=`#ifdef USE_ALPHAHASH
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
#endif`,uM="gl_FragColor = linearToOutputTexel( gl_FragColor );",dM=`
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
}`,fM=`#ifdef USE_ENVMAP
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
gl_Position = projectionMatrix * mvPosition;`,dE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,fE=`#ifdef DITHERING
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
}`,ew=`#define NORMAL
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
}`,tw=`#define PHONG
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
}`,nw=`#define PHONG
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
}`,iw=`#define STANDARD
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
}`,rw=`#define STANDARD
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
}`,sw=`#define TOON
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
}`,ow=`#define TOON
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
}`,aw=`uniform float size;
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
}`,lw=`uniform vec3 diffuse;
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
}`,cw=`#include <common>
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
}`,uw=`uniform vec3 color;
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
}`,dw=`uniform float rotation;
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
}`,fw=`uniform vec3 diffuse;
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
}`,Ke={alphahash_fragment:US,alphahash_pars_fragment:NS,alphamap_fragment:FS,alphamap_pars_fragment:OS,alphatest_fragment:kS,alphatest_pars_fragment:zS,aomap_fragment:BS,aomap_pars_fragment:HS,batching_pars_vertex:GS,batching_vertex:VS,begin_vertex:WS,beginnormal_vertex:XS,bsdfs:jS,iridescence_fragment:YS,bumpmap_pars_fragment:$S,clipping_planes_fragment:qS,clipping_planes_pars_fragment:KS,clipping_planes_pars_vertex:ZS,clipping_planes_vertex:QS,color_fragment:JS,color_pars_fragment:eM,color_pars_vertex:tM,color_vertex:nM,common:iM,cube_uv_reflection_fragment:rM,defaultnormal_vertex:sM,displacementmap_pars_vertex:oM,displacementmap_vertex:aM,emissivemap_fragment:lM,emissivemap_pars_fragment:cM,colorspace_fragment:uM,colorspace_pars_fragment:dM,envmap_fragment:fM,envmap_common_pars_fragment:hM,envmap_pars_fragment:pM,envmap_pars_vertex:mM,envmap_physical_pars_fragment:AM,envmap_vertex:gM,fog_vertex:vM,fog_pars_vertex:_M,fog_fragment:xM,fog_pars_fragment:yM,gradientmap_pars_fragment:SM,lightmap_pars_fragment:MM,lights_lambert_fragment:EM,lights_lambert_pars_fragment:wM,lights_pars_begin:TM,lights_toon_fragment:CM,lights_toon_pars_fragment:RM,lights_phong_fragment:PM,lights_phong_pars_fragment:bM,lights_physical_fragment:LM,lights_physical_pars_fragment:DM,lights_fragment_begin:IM,lights_fragment_maps:UM,lights_fragment_end:NM,logdepthbuf_fragment:FM,logdepthbuf_pars_fragment:OM,logdepthbuf_pars_vertex:kM,logdepthbuf_vertex:zM,map_fragment:BM,map_pars_fragment:HM,map_particle_fragment:GM,map_particle_pars_fragment:VM,metalnessmap_fragment:WM,metalnessmap_pars_fragment:XM,morphinstance_vertex:jM,morphcolor_vertex:YM,morphnormal_vertex:$M,morphtarget_pars_vertex:qM,morphtarget_vertex:KM,normal_fragment_begin:ZM,normal_fragment_maps:QM,normal_pars_fragment:JM,normal_pars_vertex:eE,normal_vertex:tE,normalmap_pars_fragment:nE,clearcoat_normal_fragment_begin:iE,clearcoat_normal_fragment_maps:rE,clearcoat_pars_fragment:sE,iridescence_pars_fragment:oE,opaque_fragment:aE,packing:lE,premultiplied_alpha_fragment:cE,project_vertex:uE,dithering_fragment:dE,dithering_pars_fragment:fE,roughnessmap_fragment:hE,roughnessmap_pars_fragment:pE,shadowmap_pars_fragment:mE,shadowmap_pars_vertex:gE,shadowmap_vertex:vE,shadowmask_pars_fragment:_E,skinbase_vertex:xE,skinning_pars_vertex:yE,skinning_vertex:SE,skinnormal_vertex:ME,specularmap_fragment:EE,specularmap_pars_fragment:wE,tonemapping_fragment:TE,tonemapping_pars_fragment:AE,transmission_fragment:CE,transmission_pars_fragment:RE,uv_pars_fragment:PE,uv_pars_vertex:bE,uv_vertex:LE,worldpos_vertex:DE,background_vert:IE,background_frag:UE,backgroundCube_vert:NE,backgroundCube_frag:FE,cube_vert:OE,cube_frag:kE,depth_vert:zE,depth_frag:BE,distanceRGBA_vert:HE,distanceRGBA_frag:GE,equirect_vert:VE,equirect_frag:WE,linedashed_vert:XE,linedashed_frag:jE,meshbasic_vert:YE,meshbasic_frag:$E,meshlambert_vert:qE,meshlambert_frag:KE,meshmatcap_vert:ZE,meshmatcap_frag:QE,meshnormal_vert:JE,meshnormal_frag:ew,meshphong_vert:tw,meshphong_frag:nw,meshphysical_vert:iw,meshphysical_frag:rw,meshtoon_vert:sw,meshtoon_frag:ow,points_vert:aw,points_frag:lw,shadow_vert:cw,shadow_frag:uw,sprite_vert:dw,sprite_frag:fw},_e={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},si={basic:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:rn([_e.common,_e.specularmap,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:rn([_e.common,_e.envmap,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.roughnessmap,_e.metalnessmap,_e.fog,_e.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:rn([_e.common,_e.aomap,_e.lightmap,_e.emissivemap,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.gradientmap,_e.fog,_e.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,_e.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:rn([_e.points,_e.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:rn([_e.common,_e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:rn([_e.common,_e.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:rn([_e.common,_e.bumpmap,_e.normalmap,_e.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:rn([_e.sprite,_e.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:rn([_e.common,_e.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:rn([_e.lights,_e.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};si.physical={uniforms:rn([si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Na={r:0,b:0,g:0},pr=new di,hw=new Et;function pw(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,d,h=null,f=0,g=null;function p(_){let x=_.isScene===!0?_.background:null;return x&&x.isTexture&&(x=(_.backgroundBlurriness>0?n:e).get(x)),x}function v(_){let x=!1;const S=p(_);S===null?u(a,l):S&&S.isColor&&(u(S,1),x=!0);const P=t.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||x)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,x){const S=p(x);S&&(S.isCubeTexture||S.mapping===ql)?(d===void 0&&(d=new ne(new Ve(1,1,1),new sr({name:"BackgroundCubeMaterial",uniforms:Os(si.backgroundCube.uniforms),vertexShader:si.backgroundCube.vertexShader,fragmentShader:si.backgroundCube.fragmentShader,side:_n,depthTest:!1,depthWrite:!1,fog:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(P,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pr.copy(x.backgroundRotation),pr.x*=-1,pr.y*=-1,pr.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),d.material.uniforms.envMap.value=S,d.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(hw.makeRotationFromEuler(pr)),d.material.toneMapped=ct.getTransfer(S.colorSpace)!==xt,(h!==S||f!==S.version||g!==t.toneMapping)&&(d.material.needsUpdate=!0,h=S,f=S.version,g=t.toneMapping),d.layers.enableAll(),_.unshift(d,d.geometry,d.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new ne(new mt(2,2),new sr({name:"BackgroundMaterial",uniforms:Os(si.background.uniforms),vertexShader:si.background.vertexShader,fragmentShader:si.background.fragmentShader,side:rr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=ct.getTransfer(S.colorSpace)!==xt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||f!==S.version||g!==t.toneMapping)&&(c.material.needsUpdate=!0,h=S,f=S.version,g=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function u(_,x){_.getRGB(Na,sv(t)),i.buffers.color.setClear(Na.r,Na.g,Na.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(_,x=1){a.set(_),l=x,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,u(a,l)},render:v,addToRenderList:m}}function mw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=f(null);let s=r,o=!1;function a(y,E,k,F,V){let K=!1;const B=h(F,k,E);s!==B&&(s=B,c(s.object)),K=g(y,F,k,V),K&&p(y,F,k,V),V!==null&&e.update(V,t.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,S(y,E,k,F),V!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return t.createVertexArray()}function c(y){return t.bindVertexArray(y)}function d(y){return t.deleteVertexArray(y)}function h(y,E,k){const F=k.wireframe===!0;let V=i[y.id];V===void 0&&(V={},i[y.id]=V);let K=V[E.id];K===void 0&&(K={},V[E.id]=K);let B=K[F];return B===void 0&&(B=f(l()),K[F]=B),B}function f(y){const E=[],k=[],F=[];for(let V=0;V<n;V++)E[V]=0,k[V]=0,F[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:k,attributeDivisors:F,object:y,attributes:{},index:null}}function g(y,E,k,F){const V=s.attributes,K=E.attributes;let B=0;const ee=k.getAttributes();for(const L in ee)if(ee[L].location>=0){const J=V[L];let se=K[L];if(se===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(se=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(se=y.instanceColor)),J===void 0||J.attribute!==se||se&&J.data!==se.data)return!0;B++}return s.attributesNum!==B||s.index!==F}function p(y,E,k,F){const V={},K=E.attributes;let B=0;const ee=k.getAttributes();for(const L in ee)if(ee[L].location>=0){let J=K[L];J===void 0&&(L==="instanceMatrix"&&y.instanceMatrix&&(J=y.instanceMatrix),L==="instanceColor"&&y.instanceColor&&(J=y.instanceColor));const se={};se.attribute=J,J&&J.data&&(se.data=J.data),V[L]=se,B++}s.attributes=V,s.attributesNum=B,s.index=F}function v(){const y=s.newAttributes;for(let E=0,k=y.length;E<k;E++)y[E]=0}function m(y){u(y,0)}function u(y,E){const k=s.newAttributes,F=s.enabledAttributes,V=s.attributeDivisors;k[y]=1,F[y]===0&&(t.enableVertexAttribArray(y),F[y]=1),V[y]!==E&&(t.vertexAttribDivisor(y,E),V[y]=E)}function _(){const y=s.newAttributes,E=s.enabledAttributes;for(let k=0,F=E.length;k<F;k++)E[k]!==y[k]&&(t.disableVertexAttribArray(k),E[k]=0)}function x(y,E,k,F,V,K,B){B===!0?t.vertexAttribIPointer(y,E,k,V,K):t.vertexAttribPointer(y,E,k,F,V,K)}function S(y,E,k,F){v();const V=F.attributes,K=k.getAttributes(),B=E.defaultAttributeValues;for(const ee in K){const L=K[ee];if(L.location>=0){let q=V[ee];if(q===void 0&&(ee==="instanceMatrix"&&y.instanceMatrix&&(q=y.instanceMatrix),ee==="instanceColor"&&y.instanceColor&&(q=y.instanceColor)),q!==void 0){const J=q.normalized,se=q.itemSize,Se=e.get(q);if(Se===void 0)continue;const Ne=Se.buffer,W=Se.type,ie=Se.bytesPerElement,he=W===t.INT||W===t.UNSIGNED_INT||q.gpuType===Wf;if(q.isInterleavedBufferAttribute){const me=q.data,Fe=me.stride,Te=q.offset;if(me.isInstancedInterleavedBuffer){for(let Ge=0;Ge<L.locationSize;Ge++)u(L.location+Ge,me.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=me.meshPerAttribute*me.count)}else for(let Ge=0;Ge<L.locationSize;Ge++)m(L.location+Ge);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let Ge=0;Ge<L.locationSize;Ge++)x(L.location+Ge,se/L.locationSize,W,J,Fe*ie,(Te+se/L.locationSize*Ge)*ie,he)}else{if(q.isInstancedBufferAttribute){for(let me=0;me<L.locationSize;me++)u(L.location+me,q.meshPerAttribute);y.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let me=0;me<L.locationSize;me++)m(L.location+me);t.bindBuffer(t.ARRAY_BUFFER,Ne);for(let me=0;me<L.locationSize;me++)x(L.location+me,se/L.locationSize,W,J,se*ie,se/L.locationSize*me*ie,he)}}else if(B!==void 0){const J=B[ee];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(L.location,J);break;case 3:t.vertexAttrib3fv(L.location,J);break;case 4:t.vertexAttrib4fv(L.location,J);break;default:t.vertexAttrib1fv(L.location,J)}}}}_()}function P(){R();for(const y in i){const E=i[y];for(const k in E){const F=E[k];for(const V in F)d(F[V].object),delete F[V];delete E[k]}delete i[y]}}function C(y){if(i[y.id]===void 0)return;const E=i[y.id];for(const k in E){const F=E[k];for(const V in F)d(F[V].object),delete F[V];delete E[k]}delete i[y.id]}function w(y){for(const E in i){const k=i[E];if(k[y.id]===void 0)continue;const F=k[y.id];for(const V in F)d(F[V].object),delete F[V];delete k[y.id]}}function R(){X(),o=!0,s!==r&&(s=r,c(s.object))}function X(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:X,dispose:P,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:v,enableAttribute:m,disableUnusedAttributes:_}}function gw(t,e,n){let i;function r(c){i=c}function s(c,d){t.drawArrays(i,c,d),n.update(d,i,1)}function o(c,d,h){h!==0&&(t.drawArraysInstanced(i,c,d,h),n.update(d,i,h))}function a(c,d,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,d,0,h);let g=0;for(let p=0;p<h;p++)g+=d[p];n.update(g,i,1)}function l(c,d,h,f){if(h===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<c.length;p++)o(c[p],d[p],f[p]);else{g.multiDrawArraysInstancedWEBGL(i,c,0,d,0,f,0,h);let p=0;for(let v=0;v<h;v++)p+=d[v];for(let v=0;v<f.length;v++)n.update(p,i,f[v])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function vw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==Zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===$o&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Pi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!R)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const d=l(c);d!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",d,"instead."),c=d);const h=n.logarithmicDepthBuffer===!0,f=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const g=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),p=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),u=t.getParameter(t.MAX_VERTEX_ATTRIBS),_=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),x=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),P=p>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:g,maxVertexTextures:p,maxTextureSize:v,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:_,maxVaryings:x,maxFragmentUniforms:S,vertexTextures:P,maxSamples:C}}function _w(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new xr,a=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const g=h.length!==0||f||i!==0||r;return r=f,i=h.length,g},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){n=d(h,f,0)},this.setState=function(h,f,g){const p=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,u=t.get(h);if(!r||p===null||p.length===0||s&&!m)s?d(null):c();else{const _=s?0:i,x=_*4;let S=u.clippingState||null;l.value=S,S=d(p,f,x,g);for(let P=0;P!==x;++P)S[P]=n[P];u.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=_}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function d(h,f,g,p){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,p!==!0||m===null){const u=g+v*4,_=f.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<u)&&(m=new Float32Array(u));for(let x=0,S=g;x!==v;++x,S+=4)o.copy(h[x]).applyMatrix4(_,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function xw(t){let e=new WeakMap;function n(o,a){return a===md?o.mapping=Is:a===gd&&(o.mapping=Us),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===md||a===gd)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class cv extends ov{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=d*this.view.offsetY,l=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ps=4,Gp=[.125,.215,.35,.446,.526,.582],Mr=20,ru=new cv,Vp=new tt;let su=null,ou=0,au=0,lu=!1;const yr=(1+Math.sqrt(5))/2,ts=1/yr,Wp=[new N(-yr,ts,0),new N(yr,ts,0),new N(-ts,0,yr),new N(ts,0,yr),new N(0,yr,-ts),new N(0,yr,ts),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Xp{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$p(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Yp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(su,ou,au),this._renderer.xr.enabled=lu,e.scissorTest=!1,Fa(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Is||e.mapping===Us?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),su=this._renderer.getRenderTarget(),ou=this._renderer.getActiveCubeFace(),au=this._renderer.getActiveMipmapLevel(),lu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:qn,minFilter:qn,generateMipmaps:!1,type:$o,format:Zn,colorSpace:cr,depthBuffer:!1},r=jp(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=jp(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=yw(s)),this._blurMaterial=Sw(s,e,n)}return r}_compileMaterial(e){const n=new ne(this._lodPlanes[0],e);this._renderer.compile(n,ru)}_sceneToCubeUV(e,n,i,r){const a=new tn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,f=d.toneMapping;d.getClearColor(Vp),d.toneMapping=tr,d.autoClear=!1;const g=new ci({name:"PMREM.Background",side:_n,depthWrite:!1,depthTest:!1}),p=new ne(new Ve,g);let v=!1;const m=e.background;m?m.isColor&&(g.color.copy(m),e.background=null,v=!0):(g.color.copy(Vp),v=!0);for(let u=0;u<6;u++){const _=u%3;_===0?(a.up.set(0,l[u],0),a.lookAt(c[u],0,0)):_===1?(a.up.set(0,0,l[u]),a.lookAt(0,c[u],0)):(a.up.set(0,l[u],0),a.lookAt(0,0,c[u]));const x=this._cubeSize;Fa(r,_*x,u>2?x:0,x,x),d.setRenderTarget(r),v&&d.render(p,a),d.render(e,a)}p.geometry.dispose(),p.material.dispose(),d.toneMapping=f,d.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Is||e.mapping===Us;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=$p()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Yp());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ne(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fa(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ru)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=Wp[(r-s-1)%Wp.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,h=new ne(this._lodPlanes[r],c),f=c.uniforms,g=this._sizeLods[i]-1,p=isFinite(s)?Math.PI/(2*g):2*Math.PI/(2*Mr-1),v=s/p,m=isFinite(s)?1+Math.floor(d*v):Mr;m>Mr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Mr}`);const u=[];let _=0;for(let w=0;w<Mr;++w){const R=w/v,X=Math.exp(-R*R/2);u.push(X),w===0?_+=X:w<m&&(_+=2*X)}for(let w=0;w<u.length;w++)u[w]=u[w]/_;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:x}=this;f.dTheta.value=p,f.mipInt.value=x-i;const S=this._sizeLods[r],P=3*S*(r>x-ps?r-x+ps:0),C=4*(this._cubeSize-S);Fa(n,P,C,3*S,2*S),l.setRenderTarget(n),l.render(h,ru)}}function yw(t){const e=[],n=[],i=[];let r=t;const s=t-ps+1+Gp.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ps?l=Gp[o-t+ps-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),d=-c,h=1+c,f=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,p=6,v=3,m=2,u=1,_=new Float32Array(v*p*g),x=new Float32Array(m*p*g),S=new Float32Array(u*p*g);for(let C=0;C<g;C++){const w=C%3*2/3-1,R=C>2?0:-1,X=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];_.set(X,v*p*C),x.set(f,m*p*C);const y=[C,C,C,C,C,C];S.set(y,u*p*C)}const P=new ti;P.setAttribute("position",new ui(_,v)),P.setAttribute("uv",new ui(x,m)),P.setAttribute("faceIndex",new ui(S,u)),e.push(P),r>ps&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function jp(t,e,n){const i=new Or(t,e,n);return i.texture.mapping=ql,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fa(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Sw(t,e,n){const i=new Float32Array(Mr),r=new N(0,1,0);return new sr({name:"SphericalGaussianBlur",defines:{n:Mr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:eh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function Yp(){return new sr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:eh(),fragmentShader:`

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
		`,blending:er,depthTest:!1,depthWrite:!1})}function $p(){return new sr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:eh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:er,depthTest:!1,depthWrite:!1})}function eh(){return`

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
	`}function Mw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===md||l===gd,d=l===Is||l===Us;if(c||d){let h=e.get(a);const f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return n===null&&(n=new Xp(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const g=a.image;return c&&g&&g.height>0||d&&g&&r(g)?(n===null&&(n=new Xp(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let d=0;d<c;d++)a[d]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Ew(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&tl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function ww(t,e,n,i){const r={},s=new WeakMap;function o(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const p in f.attributes)e.remove(f.attributes[p]);for(const p in f.morphAttributes){const v=f.morphAttributes[p];for(let m=0,u=v.length;m<u;m++)e.remove(v[m])}f.removeEventListener("dispose",o),delete r[f.id];const g=s.get(f);g&&(e.remove(g),s.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,n.memory.geometries--}function a(h,f){return r[f.id]===!0||(f.addEventListener("dispose",o),r[f.id]=!0,n.memory.geometries++),f}function l(h){const f=h.attributes;for(const p in f)e.update(f[p],t.ARRAY_BUFFER);const g=h.morphAttributes;for(const p in g){const v=g[p];for(let m=0,u=v.length;m<u;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(h){const f=[],g=h.index,p=h.attributes.position;let v=0;if(g!==null){const _=g.array;v=g.version;for(let x=0,S=_.length;x<S;x+=3){const P=_[x+0],C=_[x+1],w=_[x+2];f.push(P,C,C,w,w,P)}}else if(p!==void 0){const _=p.array;v=p.version;for(let x=0,S=_.length/3-1;x<S;x+=3){const P=x+0,C=x+1,w=x+2;f.push(P,C,C,w,w,P)}}else return;const m=new(Q0(f)?rv:iv)(f,1);m.version=v;const u=s.get(h);u&&e.remove(u),s.set(h,m)}function d(h){const f=s.get(h);if(f){const g=h.index;g!==null&&f.version<g.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:d}}function Tw(t,e,n){let i;function r(f){i=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,g){t.drawElements(i,g,s,f*o),n.update(g,i,1)}function c(f,g,p){p!==0&&(t.drawElementsInstanced(i,g,s,f*o,p),n.update(g,i,p))}function d(f,g,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,g,0,s,f,0,p);let m=0;for(let u=0;u<p;u++)m+=g[u];n.update(m,i,1)}function h(f,g,p,v){if(p===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/o,g[u],v[u]);else{m.multiDrawElementsInstancedWEBGL(i,g,0,s,f,0,v,0,p);let u=0;for(let _=0;_<p;_++)u+=g[_];for(let _=0;_<v.length;_++)n.update(u,i,v[_])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function Aw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Cw(t,e,n){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=d!==void 0?d.length:0;let f=i.get(a);if(f===void 0||f.count!==h){let y=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",y)};var g=y;f!==void 0&&f.texture.dispose();const p=a.morphAttributes.position!==void 0,v=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,u=a.morphAttributes.position||[],_=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let S=0;p===!0&&(S=1),v===!0&&(S=2),m===!0&&(S=3);let P=a.attributes.position.count*S,C=1;P>e.maxTextureSize&&(C=Math.ceil(P/e.maxTextureSize),P=e.maxTextureSize);const w=new Float32Array(P*C*4*h),R=new ev(w,P,C,h);R.type=Mi,R.needsUpdate=!0;const X=S*4;for(let E=0;E<h;E++){const k=u[E],F=_[E],V=x[E],K=P*C*4*E;for(let B=0;B<k.count;B++){const ee=B*X;p===!0&&(r.fromBufferAttribute(k,B),w[K+ee+0]=r.x,w[K+ee+1]=r.y,w[K+ee+2]=r.z,w[K+ee+3]=0),v===!0&&(r.fromBufferAttribute(F,B),w[K+ee+4]=r.x,w[K+ee+5]=r.y,w[K+ee+6]=r.z,w[K+ee+7]=0),m===!0&&(r.fromBufferAttribute(V,B),w[K+ee+8]=r.x,w[K+ee+9]=r.y,w[K+ee+10]=r.z,w[K+ee+11]=V.itemSize===4?r.w:1)}}f={count:h,texture:R,size:new nt(P,C)},i.set(a,f),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let m=0;m<c.length;m++)p+=c[m];const v=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",v),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",f.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",f.size)}return{update:s}}function Rw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,d=l.geometry,h=e.get(l,d);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class uv extends xn{constructor(e,n,i,r,s,o,a,l,c,d=Ms){if(d!==Ms&&d!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&d===Ms&&(i=Fr),i===void 0&&d===Fs&&(i=Ns),super(null,r,s,o,a,l,d,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:On,this.minFilter=l!==void 0?l:On,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const dv=new xn,qp=new uv(1,1),fv=new ev,hv=new pS,pv=new av,Kp=[],Zp=[],Qp=new Float32Array(16),Jp=new Float32Array(9),em=new Float32Array(4);function Gs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Kp[r];if(s===void 0&&(s=new Float32Array(r),Kp[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Zl(t,e){let n=Zp[e];n===void 0&&(n=new Int32Array(e),Zp[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Pw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function bw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Bt(n,e)}}function Lw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Bt(n,e)}}function Dw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Bt(n,e)}}function Iw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;em.set(i),t.uniformMatrix2fv(this.addr,!1,em),Bt(n,i)}}function Uw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Jp.set(i),t.uniformMatrix3fv(this.addr,!1,Jp),Bt(n,i)}}function Nw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Bt(n,e)}else{if(zt(n,i))return;Qp.set(i),t.uniformMatrix4fv(this.addr,!1,Qp),Bt(n,i)}}function Fw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Ow(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Bt(n,e)}}function kw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Bt(n,e)}}function zw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Bt(n,e)}}function Bw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function Hw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Bt(n,e)}}function Gw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Bt(n,e)}}function Vw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Bt(n,e)}}function Ww(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(qp.compareFunction=Z0,s=qp):s=dv,n.setTexture2D(e||s,r)}function Xw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||hv,r)}function jw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||pv,r)}function Yw(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||fv,r)}function $w(t){switch(t){case 5126:return Pw;case 35664:return bw;case 35665:return Lw;case 35666:return Dw;case 35674:return Iw;case 35675:return Uw;case 35676:return Nw;case 5124:case 35670:return Fw;case 35667:case 35671:return Ow;case 35668:case 35672:return kw;case 35669:case 35673:return zw;case 5125:return Bw;case 36294:return Hw;case 36295:return Gw;case 36296:return Vw;case 35678:case 36198:case 36298:case 36306:case 35682:return Ww;case 35679:case 36299:case 36307:return Xw;case 35680:case 36300:case 36308:case 36293:return jw;case 36289:case 36303:case 36311:case 36292:return Yw}}function qw(t,e){t.uniform1fv(this.addr,e)}function Kw(t,e){const n=Gs(e,this.size,2);t.uniform2fv(this.addr,n)}function Zw(t,e){const n=Gs(e,this.size,3);t.uniform3fv(this.addr,n)}function Qw(t,e){const n=Gs(e,this.size,4);t.uniform4fv(this.addr,n)}function Jw(t,e){const n=Gs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function e1(t,e){const n=Gs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function t1(t,e){const n=Gs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function n1(t,e){t.uniform1iv(this.addr,e)}function i1(t,e){t.uniform2iv(this.addr,e)}function r1(t,e){t.uniform3iv(this.addr,e)}function s1(t,e){t.uniform4iv(this.addr,e)}function o1(t,e){t.uniform1uiv(this.addr,e)}function a1(t,e){t.uniform2uiv(this.addr,e)}function l1(t,e){t.uniform3uiv(this.addr,e)}function c1(t,e){t.uniform4uiv(this.addr,e)}function u1(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||dv,s[o])}function d1(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||hv,s[o])}function f1(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||pv,s[o])}function h1(t,e,n){const i=this.cache,r=e.length,s=Zl(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||fv,s[o])}function p1(t){switch(t){case 5126:return qw;case 35664:return Kw;case 35665:return Zw;case 35666:return Qw;case 35674:return Jw;case 35675:return e1;case 35676:return t1;case 5124:case 35670:return n1;case 35667:case 35671:return i1;case 35668:case 35672:return r1;case 35669:case 35673:return s1;case 5125:return o1;case 36294:return a1;case 36295:return l1;case 36296:return c1;case 35678:case 36198:case 36298:case 36306:case 35682:return u1;case 35679:case 36299:case 36307:return d1;case 35680:case 36300:case 36308:case 36293:return f1;case 36289:case 36303:case 36311:case 36292:return h1}}class m1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=$w(n.type)}}class g1{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=p1(n.type)}}class v1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const cu=/(\w+)(\])?(\[|\.)?/g;function tm(t,e){t.seq.push(e),t.map[e.id]=e}function _1(t,e,n){const i=t.name,r=i.length;for(cu.lastIndex=0;;){const s=cu.exec(i),o=cu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){tm(n,c===void 0?new m1(a,t,e):new g1(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new v1(a),tm(n,h)),n=h}}}class nl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);_1(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function nm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const x1=37297;let y1=0;function S1(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function M1(t){const e=ct.getPrimaries(ct.workingColorSpace),n=ct.getPrimaries(t);let i;switch(e===n?i="":e===Pl&&n===Rl?i="LinearDisplayP3ToLinearSRGB":e===Rl&&n===Pl&&(i="LinearSRGBToLinearDisplayP3"),t){case cr:case Kl:return[i,"LinearTransferOETF"];case ri:case Kf:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function im(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+S1(t.getShaderSource(e),o)}else return r}function E1(t,e){const n=M1(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function w1(t,e){let n;switch(e){case Hy:n="Linear";break;case Gy:n="Reinhard";break;case Vy:n="Cineon";break;case Yo:n="ACESFilmic";break;case Xy:n="AgX";break;case jy:n="Neutral";break;case Wy:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Oa=new N;function T1(){ct.getLuminanceCoefficients(Oa);const t=Oa.x.toFixed(4),e=Oa.y.toFixed(4),n=Oa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function A1(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(co).join(`
`)}function C1(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function R1(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function co(t){return t!==""}function rm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function sm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const P1=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(t){return t.replace(P1,L1)}const b1=new Map;function L1(t,e){let n=Ke[e];if(n===void 0){const i=b1.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return jd(n)}const D1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function om(t){return t.replace(D1,I1)}function I1(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function am(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function U1(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===O0?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===jo?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===vi&&(e="SHADOWMAP_TYPE_VSM"),e}function N1(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Is:case Us:e="ENVMAP_TYPE_CUBE";break;case ql:e="ENVMAP_TYPE_CUBE_UV";break}return e}function F1(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Us:e="ENVMAP_MODE_REFRACTION";break}return e}function O1(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case k0:e="ENVMAP_BLENDING_MULTIPLY";break;case zy:e="ENVMAP_BLENDING_MIX";break;case By:e="ENVMAP_BLENDING_ADD";break}return e}function k1(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function z1(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=U1(n),c=N1(n),d=F1(n),h=O1(n),f=k1(n),g=A1(n),p=C1(s),v=r.createProgram();let m,u,_=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(co).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p].filter(co).join(`
`),u.length>0&&(u+=`
`)):(m=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+d:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(co).join(`
`),u=[am(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,p,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+d:"",n.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==tr?"#define TONE_MAPPING":"",n.toneMapping!==tr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==tr?w1("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,E1("linearToOutputTexel",n.outputColorSpace),T1(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(co).join(`
`)),o=jd(o),o=rm(o,n),o=sm(o,n),a=jd(a),a=rm(a,n),a=sm(a,n),o=om(o),a=om(a),n.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=[g,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",n.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const x=_+m+o,S=_+u+a,P=nm(r,r.VERTEX_SHADER,x),C=nm(r,r.FRAGMENT_SHADER,S);r.attachShader(v,P),r.attachShader(v,C),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function w(E){if(t.debug.checkShaderErrors){const k=r.getProgramInfoLog(v).trim(),F=r.getShaderInfoLog(P).trim(),V=r.getShaderInfoLog(C).trim();let K=!0,B=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(K=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,P,C);else{const ee=im(r,P,"vertex"),L=im(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+k+`
`+ee+`
`+L)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(F===""||V==="")&&(B=!1);B&&(E.diagnostics={runnable:K,programLog:k,vertexShader:{log:F,prefix:m},fragmentShader:{log:V,prefix:u}})}r.deleteShader(P),r.deleteShader(C),R=new nl(r,v),X=R1(r,v)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let X;this.getAttributes=function(){return X===void 0&&w(this),X};let y=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(v,x1)),y},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=y1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=P,this.fragmentShader=C,this}let B1=0;class H1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new G1(e),n.set(e,i)),i}}class G1{constructor(e){this.id=B1++,this.code=e,this.usedTimes=0}}function V1(t,e,n,i,r,s,o){const a=new Qf,l=new H1,c=new Set,d=[],h=r.logarithmicDepthBuffer,f=r.reverseDepthBuffer,g=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(y){return c.add(y),y===0?"uv":`uv${y}`}function u(y,E,k,F,V){const K=F.fog,B=V.geometry,ee=y.isMeshStandardMaterial?F.environment:null,L=(y.isMeshStandardMaterial?n:e).get(y.envMap||ee),q=L&&L.mapping===ql?L.image.height:null,J=v[y.type];y.precision!==null&&(p=r.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const se=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Se=se!==void 0?se.length:0;let Ne=0;B.morphAttributes.position!==void 0&&(Ne=1),B.morphAttributes.normal!==void 0&&(Ne=2),B.morphAttributes.color!==void 0&&(Ne=3);let W,ie,he,me;if(J){const St=si[J];W=St.vertexShader,ie=St.fragmentShader}else W=y.vertexShader,ie=y.fragmentShader,l.update(y),he=l.getVertexShaderID(y),me=l.getFragmentShaderID(y);const Fe=t.getRenderTarget(),Te=V.isInstancedMesh===!0,Ge=V.isBatchedMesh===!0,Qe=!!y.map,Ue=!!y.matcap,b=!!L,wt=!!y.aoMap,De=!!y.lightMap,qe=!!y.bumpMap,Ce=!!y.normalMap,We=!!y.displacementMap,Ie=!!y.emissiveMap,A=!!y.metalnessMap,M=!!y.roughnessMap,O=y.anisotropy>0,j=y.clearcoat>0,te=y.dispersion>0,$=y.iridescence>0,ce=y.sheen>0,de=y.transmission>0,xe=O&&!!y.anisotropyMap,ke=j&&!!y.clearcoatMap,Z=j&&!!y.clearcoatNormalMap,ue=j&&!!y.clearcoatRoughnessMap,ve=$&&!!y.iridescenceMap,ge=$&&!!y.iridescenceThicknessMap,pe=ce&&!!y.sheenColorMap,Ae=ce&&!!y.sheenRoughnessMap,Ee=!!y.specularMap,rt=!!y.specularColorMap,D=!!y.specularIntensityMap,fe=de&&!!y.transmissionMap,z=de&&!!y.thicknessMap,Y=!!y.gradientMap,ae=!!y.alphaMap,re=y.alphaTest>0,Oe=!!y.alphaHash,Je=!!y.extensions;let ot=tr;y.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(ot=t.toneMapping);const Be={shaderID:J,shaderType:y.type,shaderName:y.name,vertexShader:W,fragmentShader:ie,defines:y.defines,customVertexShaderID:he,customFragmentShaderID:me,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&V._colorsTexture!==null,instancing:Te,instancingColor:Te&&V.instanceColor!==null,instancingMorph:Te&&V.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:cr,alphaToCoverage:!!y.alphaToCoverage,map:Qe,matcap:Ue,envMap:b,envMapMode:b&&L.mapping,envMapCubeUVHeight:q,aoMap:wt,lightMap:De,bumpMap:qe,normalMap:Ce,displacementMap:g&&We,emissiveMap:Ie,normalMapObjectSpace:Ce&&y.normalMapType===Ky,normalMapTangentSpace:Ce&&y.normalMapType===K0,metalnessMap:A,roughnessMap:M,anisotropy:O,anisotropyMap:xe,clearcoat:j,clearcoatMap:ke,clearcoatNormalMap:Z,clearcoatRoughnessMap:ue,dispersion:te,iridescence:$,iridescenceMap:ve,iridescenceThicknessMap:ge,sheen:ce,sheenColorMap:pe,sheenRoughnessMap:Ae,specularMap:Ee,specularColorMap:rt,specularIntensityMap:D,transmission:de,transmissionMap:fe,thicknessMap:z,gradientMap:Y,opaque:y.transparent===!1&&y.blending===Ss&&y.alphaToCoverage===!1,alphaMap:ae,alphaTest:re,alphaHash:Oe,combine:y.combine,mapUv:Qe&&m(y.map.channel),aoMapUv:wt&&m(y.aoMap.channel),lightMapUv:De&&m(y.lightMap.channel),bumpMapUv:qe&&m(y.bumpMap.channel),normalMapUv:Ce&&m(y.normalMap.channel),displacementMapUv:We&&m(y.displacementMap.channel),emissiveMapUv:Ie&&m(y.emissiveMap.channel),metalnessMapUv:A&&m(y.metalnessMap.channel),roughnessMapUv:M&&m(y.roughnessMap.channel),anisotropyMapUv:xe&&m(y.anisotropyMap.channel),clearcoatMapUv:ke&&m(y.clearcoatMap.channel),clearcoatNormalMapUv:Z&&m(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ue&&m(y.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&m(y.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&m(y.iridescenceThicknessMap.channel),sheenColorMapUv:pe&&m(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&m(y.sheenRoughnessMap.channel),specularMapUv:Ee&&m(y.specularMap.channel),specularColorMapUv:rt&&m(y.specularColorMap.channel),specularIntensityMapUv:D&&m(y.specularIntensityMap.channel),transmissionMapUv:fe&&m(y.transmissionMap.channel),thicknessMapUv:z&&m(y.thicknessMap.channel),alphaMapUv:ae&&m(y.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ce||O),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!B.attributes.uv&&(Qe||ae),fog:!!K,useFog:y.fog===!0,fogExp2:!!K&&K.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:f,skinning:V.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Se,morphTextureStride:Ne,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&k.length>0,shadowMapType:t.shadowMap.type,toneMapping:ot,decodeVideoTexture:Qe&&y.map.isVideoTexture===!0&&ct.getTransfer(y.map.colorSpace)===xt,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===_n,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Je&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&y.extensions.multiDraw===!0||Ge)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return Be.vertexUv1s=c.has(1),Be.vertexUv2s=c.has(2),Be.vertexUv3s=c.has(3),c.clear(),Be}function _(y){const E=[];if(y.shaderID?E.push(y.shaderID):(E.push(y.customVertexShaderID),E.push(y.customFragmentShaderID)),y.defines!==void 0)for(const k in y.defines)E.push(k),E.push(y.defines[k]);return y.isRawShaderMaterial===!1&&(x(E,y),S(E,y),E.push(t.outputColorSpace)),E.push(y.customProgramCacheKey),E.join()}function x(y,E){y.push(E.precision),y.push(E.outputColorSpace),y.push(E.envMapMode),y.push(E.envMapCubeUVHeight),y.push(E.mapUv),y.push(E.alphaMapUv),y.push(E.lightMapUv),y.push(E.aoMapUv),y.push(E.bumpMapUv),y.push(E.normalMapUv),y.push(E.displacementMapUv),y.push(E.emissiveMapUv),y.push(E.metalnessMapUv),y.push(E.roughnessMapUv),y.push(E.anisotropyMapUv),y.push(E.clearcoatMapUv),y.push(E.clearcoatNormalMapUv),y.push(E.clearcoatRoughnessMapUv),y.push(E.iridescenceMapUv),y.push(E.iridescenceThicknessMapUv),y.push(E.sheenColorMapUv),y.push(E.sheenRoughnessMapUv),y.push(E.specularMapUv),y.push(E.specularColorMapUv),y.push(E.specularIntensityMapUv),y.push(E.transmissionMapUv),y.push(E.thicknessMapUv),y.push(E.combine),y.push(E.fogExp2),y.push(E.sizeAttenuation),y.push(E.morphTargetsCount),y.push(E.morphAttributeCount),y.push(E.numDirLights),y.push(E.numPointLights),y.push(E.numSpotLights),y.push(E.numSpotLightMaps),y.push(E.numHemiLights),y.push(E.numRectAreaLights),y.push(E.numDirLightShadows),y.push(E.numPointLightShadows),y.push(E.numSpotLightShadows),y.push(E.numSpotLightShadowsWithMaps),y.push(E.numLightProbes),y.push(E.shadowMapType),y.push(E.toneMapping),y.push(E.numClippingPlanes),y.push(E.numClipIntersection),y.push(E.depthPacking)}function S(y,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),y.push(a.mask)}function P(y){const E=v[y.type];let k;if(E){const F=si[E];k=AS.clone(F.uniforms)}else k=y.uniforms;return k}function C(y,E){let k;for(let F=0,V=d.length;F<V;F++){const K=d[F];if(K.cacheKey===E){k=K,++k.usedTimes;break}}return k===void 0&&(k=new z1(t,E,y,s),d.push(k)),k}function w(y){if(--y.usedTimes===0){const E=d.indexOf(y);d[E]=d[d.length-1],d.pop(),y.destroy()}}function R(y){l.remove(y)}function X(){l.dispose()}return{getParameters:u,getProgramCacheKey:_,getUniforms:P,acquireProgram:C,releaseProgram:w,releaseShaderCache:R,programs:d,dispose:X}}function W1(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function X1(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function lm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function cm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,f,g,p,v,m){let u=t[e];return u===void 0?(u={id:h.id,object:h,geometry:f,material:g,groupOrder:p,renderOrder:h.renderOrder,z:v,group:m},t[e]=u):(u.id=h.id,u.object=h,u.geometry=f,u.material=g,u.groupOrder=p,u.renderOrder=h.renderOrder,u.z=v,u.group=m),e++,u}function a(h,f,g,p,v,m){const u=o(h,f,g,p,v,m);g.transmission>0?i.push(u):g.transparent===!0?r.push(u):n.push(u)}function l(h,f,g,p,v,m){const u=o(h,f,g,p,v,m);g.transmission>0?i.unshift(u):g.transparent===!0?r.unshift(u):n.unshift(u)}function c(h,f){n.length>1&&n.sort(h||X1),i.length>1&&i.sort(f||lm),r.length>1&&r.sort(f||lm)}function d(){for(let h=e,f=t.length;h<f;h++){const g=t[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:d,sort:c}}function j1(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new cm,t.set(i,[o])):r>=s.length?(o=new cm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Y1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new tt};break;case"SpotLight":n={position:new N,direction:new N,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function $1(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let q1=0;function K1(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function Z1(t){const e=new Y1,n=$1(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new Et,o=new Et;function a(c){let d=0,h=0,f=0;for(let X=0;X<9;X++)i.probe[X].set(0,0,0);let g=0,p=0,v=0,m=0,u=0,_=0,x=0,S=0,P=0,C=0,w=0;c.sort(K1);for(let X=0,y=c.length;X<y;X++){const E=c[X],k=E.color,F=E.intensity,V=E.distance,K=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=k.r*F,h+=k.g*F,f+=k.b*F;else if(E.isLightProbe){for(let B=0;B<9;B++)i.probe[B].addScaledVector(E.sh.coefficients[B],F);w++}else if(E.isDirectionalLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,L=n.get(E);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.directionalShadow[g]=L,i.directionalShadowMap[g]=K,i.directionalShadowMatrix[g]=E.shadow.matrix,_++}i.directional[g]=B,g++}else if(E.isSpotLight){const B=e.get(E);B.position.setFromMatrixPosition(E.matrixWorld),B.color.copy(k).multiplyScalar(F),B.distance=V,B.coneCos=Math.cos(E.angle),B.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),B.decay=E.decay,i.spot[v]=B;const ee=E.shadow;if(E.map&&(i.spotLightMap[P]=E.map,P++,ee.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[v]=ee.matrix,E.castShadow){const L=n.get(E);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,i.spotShadow[v]=L,i.spotShadowMap[v]=K,S++}v++}else if(E.isRectAreaLight){const B=e.get(E);B.color.copy(k).multiplyScalar(F),B.halfWidth.set(E.width*.5,0,0),B.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=B,m++}else if(E.isPointLight){const B=e.get(E);if(B.color.copy(E.color).multiplyScalar(E.intensity),B.distance=E.distance,B.decay=E.decay,E.castShadow){const ee=E.shadow,L=n.get(E);L.shadowIntensity=ee.intensity,L.shadowBias=ee.bias,L.shadowNormalBias=ee.normalBias,L.shadowRadius=ee.radius,L.shadowMapSize=ee.mapSize,L.shadowCameraNear=ee.camera.near,L.shadowCameraFar=ee.camera.far,i.pointShadow[p]=L,i.pointShadowMap[p]=K,i.pointShadowMatrix[p]=E.shadow.matrix,x++}i.point[p]=B,p++}else if(E.isHemisphereLight){const B=e.get(E);B.skyColor.copy(E.color).multiplyScalar(F),B.groundColor.copy(E.groundColor).multiplyScalar(F),i.hemi[u]=B,u++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=_e.LTC_FLOAT_1,i.rectAreaLTC2=_e.LTC_FLOAT_2):(i.rectAreaLTC1=_e.LTC_HALF_1,i.rectAreaLTC2=_e.LTC_HALF_2)),i.ambient[0]=d,i.ambient[1]=h,i.ambient[2]=f;const R=i.hash;(R.directionalLength!==g||R.pointLength!==p||R.spotLength!==v||R.rectAreaLength!==m||R.hemiLength!==u||R.numDirectionalShadows!==_||R.numPointShadows!==x||R.numSpotShadows!==S||R.numSpotMaps!==P||R.numLightProbes!==w)&&(i.directional.length=g,i.spot.length=v,i.rectArea.length=m,i.point.length=p,i.hemi.length=u,i.directionalShadow.length=_,i.directionalShadowMap.length=_,i.pointShadow.length=x,i.pointShadowMap.length=x,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=_,i.pointShadowMatrix.length=x,i.spotLightMatrix.length=S+P-C,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,R.directionalLength=g,R.pointLength=p,R.spotLength=v,R.rectAreaLength=m,R.hemiLength=u,R.numDirectionalShadows=_,R.numPointShadows=x,R.numSpotShadows=S,R.numSpotMaps=P,R.numLightProbes=w,i.version=q1++)}function l(c,d){let h=0,f=0,g=0,p=0,v=0;const m=d.matrixWorldInverse;for(let u=0,_=c.length;u<_;u++){const x=c[u];if(x.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),h++}else if(x.isSpotLight){const S=i.spot[g];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),g++}else if(x.isRectAreaLight){const S=i.rectArea[p];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(x.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(x.width*.5,0,0),S.halfHeight.set(0,x.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),p++}else if(x.isPointLight){const S=i.point[f];S.position.setFromMatrixPosition(x.matrixWorld),S.position.applyMatrix4(m),f++}else if(x.isHemisphereLight){const S=i.hemi[v];S.direction.setFromMatrixPosition(x.matrixWorld),S.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:i}}function um(t){const e=new Z1(t),n=[],i=[];function r(d){c.camera=d,n.length=0,i.length=0}function s(d){n.push(d)}function o(d){i.push(d)}function a(){e.setup(n)}function l(d){e.setupView(n,d)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function Q1(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new um(t),e.set(r,[a])):s>=o.length?(a=new um(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class J1 extends Qo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class eT extends Qo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const tT=`void main() {
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
}`;function iT(t,e,n){let i=new Jf;const r=new nt,s=new nt,o=new ht,a=new J1({depthPacking:qy}),l=new eT,c={},d=n.maxTextureSize,h={[rr]:_n,[_n]:rr,[fn]:fn},f=new sr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new nt},radius:{value:4}},vertexShader:tT,fragmentShader:nT}),g=f.clone();g.defines.HORIZONTAL_PASS=1;const p=new ti;p.setAttribute("position",new ui(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ne(p,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=O0;let u=this.type;this.render=function(C,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const X=t.getRenderTarget(),y=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),k=t.state;k.setBlending(er),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const F=u!==vi&&this.type===vi,V=u===vi&&this.type!==vi;for(let K=0,B=C.length;K<B;K++){const ee=C[K],L=ee.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const q=L.getFrameExtents();if(r.multiply(q),s.copy(L.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/q.x),r.x=s.x*q.x,L.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/q.y),r.y=s.y*q.y,L.mapSize.y=s.y)),L.map===null||F===!0||V===!0){const se=this.type!==vi?{minFilter:On,magFilter:On}:{};L.map!==null&&L.map.dispose(),L.map=new Or(r.x,r.y,se),L.map.texture.name=ee.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const J=L.getViewportCount();for(let se=0;se<J;se++){const Se=L.getViewport(se);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),k.viewport(o),L.updateMatrices(ee,se),i=L.getFrustum(),S(w,R,L.camera,ee,this.type)}L.isPointLightShadow!==!0&&this.type===vi&&_(L,R),L.needsUpdate=!1}u=this.type,m.needsUpdate=!1,t.setRenderTarget(X,y,E)};function _(C,w){const R=e.update(v);f.defines.VSM_SAMPLES!==C.blurSamples&&(f.defines.VSM_SAMPLES=C.blurSamples,g.defines.VSM_SAMPLES=C.blurSamples,f.needsUpdate=!0,g.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Or(r.x,r.y)),f.uniforms.shadow_pass.value=C.map.texture,f.uniforms.resolution.value=C.mapSize,f.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,R,f,v,null),g.uniforms.shadow_pass.value=C.mapPass.texture,g.uniforms.resolution.value=C.mapSize,g.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,R,g,v,null)}function x(C,w,R,X){let y=null;const E=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)y=E;else if(y=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=y.uuid,F=w.uuid;let V=c[k];V===void 0&&(V={},c[k]=V);let K=V[F];K===void 0&&(K=y.clone(),V[F]=K,w.addEventListener("dispose",P)),y=K}if(y.visible=w.visible,y.wireframe=w.wireframe,X===vi?y.side=w.shadowSide!==null?w.shadowSide:w.side:y.side=w.shadowSide!==null?w.shadowSide:h[w.side],y.alphaMap=w.alphaMap,y.alphaTest=w.alphaTest,y.map=w.map,y.clipShadows=w.clipShadows,y.clippingPlanes=w.clippingPlanes,y.clipIntersection=w.clipIntersection,y.displacementMap=w.displacementMap,y.displacementScale=w.displacementScale,y.displacementBias=w.displacementBias,y.wireframeLinewidth=w.wireframeLinewidth,y.linewidth=w.linewidth,R.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const k=t.properties.get(y);k.light=R}return y}function S(C,w,R,X,y){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&y===vi)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const F=e.update(C),V=C.material;if(Array.isArray(V)){const K=F.groups;for(let B=0,ee=K.length;B<ee;B++){const L=K[B],q=V[L.materialIndex];if(q&&q.visible){const J=x(C,q,X,y);C.onBeforeShadow(t,C,w,R,F,J,L),t.renderBufferDirect(R,null,F,J,C,L),C.onAfterShadow(t,C,w,R,F,J,L)}}}else if(V.visible){const K=x(C,V,X,y);C.onBeforeShadow(t,C,w,R,F,K,null),t.renderBufferDirect(R,null,F,K,C,null),C.onAfterShadow(t,C,w,R,F,K,null)}}const k=C.children;for(let F=0,V=k.length;F<V;F++)S(k[F],w,R,X,y)}function P(C){C.target.removeEventListener("dispose",P);for(const R in c){const X=c[R],y=C.target.uuid;y in X&&(X[y].dispose(),delete X[y])}}}const rT={[ld]:cd,[ud]:hd,[dd]:pd,[Ds]:fd,[cd]:ld,[hd]:ud,[pd]:dd,[fd]:Ds};function sT(t){function e(){let D=!1;const fe=new ht;let z=null;const Y=new ht(0,0,0,0);return{setMask:function(ae){z!==ae&&!D&&(t.colorMask(ae,ae,ae,ae),z=ae)},setLocked:function(ae){D=ae},setClear:function(ae,re,Oe,Je,ot){ot===!0&&(ae*=Je,re*=Je,Oe*=Je),fe.set(ae,re,Oe,Je),Y.equals(fe)===!1&&(t.clearColor(ae,re,Oe,Je),Y.copy(fe))},reset:function(){D=!1,z=null,Y.set(-1,0,0,0)}}}function n(){let D=!1,fe=!1,z=null,Y=null,ae=null;return{setReversed:function(re){fe=re},setTest:function(re){re?he(t.DEPTH_TEST):me(t.DEPTH_TEST)},setMask:function(re){z!==re&&!D&&(t.depthMask(re),z=re)},setFunc:function(re){if(fe&&(re=rT[re]),Y!==re){switch(re){case ld:t.depthFunc(t.NEVER);break;case cd:t.depthFunc(t.ALWAYS);break;case ud:t.depthFunc(t.LESS);break;case Ds:t.depthFunc(t.LEQUAL);break;case dd:t.depthFunc(t.EQUAL);break;case fd:t.depthFunc(t.GEQUAL);break;case hd:t.depthFunc(t.GREATER);break;case pd:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Y=re}},setLocked:function(re){D=re},setClear:function(re){ae!==re&&(t.clearDepth(re),ae=re)},reset:function(){D=!1,z=null,Y=null,ae=null}}}function i(){let D=!1,fe=null,z=null,Y=null,ae=null,re=null,Oe=null,Je=null,ot=null;return{setTest:function(Be){D||(Be?he(t.STENCIL_TEST):me(t.STENCIL_TEST))},setMask:function(Be){fe!==Be&&!D&&(t.stencilMask(Be),fe=Be)},setFunc:function(Be,St,Wt){(z!==Be||Y!==St||ae!==Wt)&&(t.stencilFunc(Be,St,Wt),z=Be,Y=St,ae=Wt)},setOp:function(Be,St,Wt){(re!==Be||Oe!==St||Je!==Wt)&&(t.stencilOp(Be,St,Wt),re=Be,Oe=St,Je=Wt)},setLocked:function(Be){D=Be},setClear:function(Be){ot!==Be&&(t.clearStencil(Be),ot=Be)},reset:function(){D=!1,fe=null,z=null,Y=null,ae=null,re=null,Oe=null,Je=null,ot=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},d={},h=new WeakMap,f=[],g=null,p=!1,v=null,m=null,u=null,_=null,x=null,S=null,P=null,C=new tt(0,0,0),w=0,R=!1,X=null,y=null,E=null,k=null,F=null;const V=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,B=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(ee)[1]),K=B>=1):ee.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),K=B>=2);let L=null,q={};const J=t.getParameter(t.SCISSOR_BOX),se=t.getParameter(t.VIEWPORT),Se=new ht().fromArray(J),Ne=new ht().fromArray(se);function W(D,fe,z,Y){const ae=new Uint8Array(4),re=t.createTexture();t.bindTexture(D,re),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Oe=0;Oe<z;Oe++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(fe,0,t.RGBA,1,1,Y,0,t.RGBA,t.UNSIGNED_BYTE,ae):t.texImage2D(fe+Oe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ae);return re}const ie={};ie[t.TEXTURE_2D]=W(t.TEXTURE_2D,t.TEXTURE_2D,1),ie[t.TEXTURE_CUBE_MAP]=W(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[t.TEXTURE_2D_ARRAY]=W(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),ie[t.TEXTURE_3D]=W(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),he(t.DEPTH_TEST),s.setFunc(Ds),De(!1),qe(_p),he(t.CULL_FACE),b(er);function he(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function me(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Fe(D,fe){return d[D]!==fe?(t.bindFramebuffer(D,fe),d[D]=fe,D===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=fe),D===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=fe),!0):!1}function Te(D,fe){let z=f,Y=!1;if(D){z=h.get(fe),z===void 0&&(z=[],h.set(fe,z));const ae=D.textures;if(z.length!==ae.length||z[0]!==t.COLOR_ATTACHMENT0){for(let re=0,Oe=ae.length;re<Oe;re++)z[re]=t.COLOR_ATTACHMENT0+re;z.length=ae.length,Y=!0}}else z[0]!==t.BACK&&(z[0]=t.BACK,Y=!0);Y&&t.drawBuffers(z)}function Ge(D){return g!==D?(t.useProgram(D),g=D,!0):!1}const Qe={[Sr]:t.FUNC_ADD,[My]:t.FUNC_SUBTRACT,[Ey]:t.FUNC_REVERSE_SUBTRACT};Qe[wy]=t.MIN,Qe[Ty]=t.MAX;const Ue={[Ay]:t.ZERO,[Cy]:t.ONE,[Ry]:t.SRC_COLOR,[od]:t.SRC_ALPHA,[Uy]:t.SRC_ALPHA_SATURATE,[Dy]:t.DST_COLOR,[by]:t.DST_ALPHA,[Py]:t.ONE_MINUS_SRC_COLOR,[ad]:t.ONE_MINUS_SRC_ALPHA,[Iy]:t.ONE_MINUS_DST_COLOR,[Ly]:t.ONE_MINUS_DST_ALPHA,[Ny]:t.CONSTANT_COLOR,[Fy]:t.ONE_MINUS_CONSTANT_COLOR,[Oy]:t.CONSTANT_ALPHA,[ky]:t.ONE_MINUS_CONSTANT_ALPHA};function b(D,fe,z,Y,ae,re,Oe,Je,ot,Be){if(D===er){p===!0&&(me(t.BLEND),p=!1);return}if(p===!1&&(he(t.BLEND),p=!0),D!==Sy){if(D!==v||Be!==R){if((m!==Sr||x!==Sr)&&(t.blendEquation(t.FUNC_ADD),m=Sr,x=Sr),Be)switch(D){case Ss:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.ONE,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ss:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case yp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}u=null,_=null,S=null,P=null,C.set(0,0,0),w=0,v=D,R=Be}return}ae=ae||fe,re=re||z,Oe=Oe||Y,(fe!==m||ae!==x)&&(t.blendEquationSeparate(Qe[fe],Qe[ae]),m=fe,x=ae),(z!==u||Y!==_||re!==S||Oe!==P)&&(t.blendFuncSeparate(Ue[z],Ue[Y],Ue[re],Ue[Oe]),u=z,_=Y,S=re,P=Oe),(Je.equals(C)===!1||ot!==w)&&(t.blendColor(Je.r,Je.g,Je.b,ot),C.copy(Je),w=ot),v=D,R=!1}function wt(D,fe){D.side===fn?me(t.CULL_FACE):he(t.CULL_FACE);let z=D.side===_n;fe&&(z=!z),De(z),D.blending===Ss&&D.transparent===!1?b(er):b(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const Y=D.stencilWrite;o.setTest(Y),Y&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),We(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?he(t.SAMPLE_ALPHA_TO_COVERAGE):me(t.SAMPLE_ALPHA_TO_COVERAGE)}function De(D){X!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),X=D)}function qe(D){D!==xy?(he(t.CULL_FACE),D!==y&&(D===_p?t.cullFace(t.BACK):D===yy?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):me(t.CULL_FACE),y=D}function Ce(D){D!==E&&(K&&t.lineWidth(D),E=D)}function We(D,fe,z){D?(he(t.POLYGON_OFFSET_FILL),(k!==fe||F!==z)&&(t.polygonOffset(fe,z),k=fe,F=z)):me(t.POLYGON_OFFSET_FILL)}function Ie(D){D?he(t.SCISSOR_TEST):me(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+V-1),L!==D&&(t.activeTexture(D),L=D)}function M(D,fe,z){z===void 0&&(L===null?z=t.TEXTURE0+V-1:z=L);let Y=q[z];Y===void 0&&(Y={type:void 0,texture:void 0},q[z]=Y),(Y.type!==D||Y.texture!==fe)&&(L!==z&&(t.activeTexture(z),L=z),t.bindTexture(D,fe||ie[D]),Y.type=D,Y.texture=fe)}function O(){const D=q[L];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function j(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function xe(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Z(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ue(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ve(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(D){Se.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Se.copy(D))}function pe(D){Ne.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),Ne.copy(D))}function Ae(D,fe){let z=l.get(fe);z===void 0&&(z=new WeakMap,l.set(fe,z));let Y=z.get(D);Y===void 0&&(Y=t.getUniformBlockIndex(fe,D.name),z.set(D,Y))}function Ee(D,fe){const Y=l.get(fe).get(D);a.get(fe)!==Y&&(t.uniformBlockBinding(fe,Y,D.__bindingPointIndex),a.set(fe,Y))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},L=null,q={},d={},h=new WeakMap,f=[],g=null,p=!1,v=null,m=null,u=null,_=null,x=null,S=null,P=null,C=new tt(0,0,0),w=0,R=!1,X=null,y=null,E=null,k=null,F=null,Se.set(0,0,t.canvas.width,t.canvas.height),Ne.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:he,disable:me,bindFramebuffer:Fe,drawBuffers:Te,useProgram:Ge,setBlending:b,setMaterial:wt,setFlipSided:De,setCullFace:qe,setLineWidth:Ce,setPolygonOffset:We,setScissorTest:Ie,activeTexture:A,bindTexture:M,unbindTexture:O,compressedTexImage2D:j,compressedTexImage3D:te,texImage2D:ue,texImage3D:ve,updateUBOMapping:Ae,uniformBlockBinding:Ee,texStorage2D:ke,texStorage3D:Z,texSubImage2D:$,texSubImage3D:ce,compressedTexSubImage2D:de,compressedTexSubImage3D:xe,scissor:ge,viewport:pe,reset:rt}}function dm(t,e,n,i){const r=oT(i);switch(n){case V0:return t*e;case X0:return t*e;case j0:return t*e*2;case Y0:return t*e/r.components*r.byteLength;case Yf:return t*e/r.components*r.byteLength;case $0:return t*e*2/r.components*r.byteLength;case $f:return t*e*2/r.components*r.byteLength;case W0:return t*e*3/r.components*r.byteLength;case Zn:return t*e*4/r.components*r.byteLength;case qf:return t*e*4/r.components*r.byteLength;case Ka:case Za:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Qa:case Ja:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(t,16)*Math.max(e,8)/4;case xd:case Sd:return Math.max(t,8)*Math.max(e,8)/2;case Ed:case wd:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Rd:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case bd:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Ld:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Dd:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Id:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Ud:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Nd:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Od:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case kd:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case el:case Bd:case Hd:return Math.ceil(t/4)*Math.ceil(e/4)*16;case q0:case Gd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Vd:case Wd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function oT(t){switch(t){case Pi:case B0:return{byteLength:1,components:1};case ko:case H0:case $o:return{byteLength:2,components:1};case Xf:case jf:return{byteLength:2,components:4};case Fr:case Wf:case Mi:return{byteLength:4,components:1};case G0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function aT(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new nt,d=new WeakMap;let h;const f=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,M){return g?new OffscreenCanvas(A,M):Ll("canvas")}function v(A,M,O){let j=1;const te=Ie(A);if((te.width>O||te.height>O)&&(j=O/Math.max(te.width,te.height)),j<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const $=Math.floor(j*te.width),ce=Math.floor(j*te.height);h===void 0&&(h=p($,ce));const de=M?p($,ce):h;return de.width=$,de.height=ce,de.getContext("2d").drawImage(A,0,0,$,ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+ce+")."),de}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),A;return A}function m(A){return A.generateMipmaps&&A.minFilter!==On&&A.minFilter!==qn}function u(A){t.generateMipmap(A)}function _(A,M,O,j,te=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let $=M;if(M===t.RED&&(O===t.FLOAT&&($=t.R32F),O===t.HALF_FLOAT&&($=t.R16F),O===t.UNSIGNED_BYTE&&($=t.R8)),M===t.RED_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.R8UI),O===t.UNSIGNED_SHORT&&($=t.R16UI),O===t.UNSIGNED_INT&&($=t.R32UI),O===t.BYTE&&($=t.R8I),O===t.SHORT&&($=t.R16I),O===t.INT&&($=t.R32I)),M===t.RG&&(O===t.FLOAT&&($=t.RG32F),O===t.HALF_FLOAT&&($=t.RG16F),O===t.UNSIGNED_BYTE&&($=t.RG8)),M===t.RG_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RG8UI),O===t.UNSIGNED_SHORT&&($=t.RG16UI),O===t.UNSIGNED_INT&&($=t.RG32UI),O===t.BYTE&&($=t.RG8I),O===t.SHORT&&($=t.RG16I),O===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGB8UI),O===t.UNSIGNED_SHORT&&($=t.RGB16UI),O===t.UNSIGNED_INT&&($=t.RGB32UI),O===t.BYTE&&($=t.RGB8I),O===t.SHORT&&($=t.RGB16I),O===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(O===t.UNSIGNED_BYTE&&($=t.RGBA8UI),O===t.UNSIGNED_SHORT&&($=t.RGBA16UI),O===t.UNSIGNED_INT&&($=t.RGBA32UI),O===t.BYTE&&($=t.RGBA8I),O===t.SHORT&&($=t.RGBA16I),O===t.INT&&($=t.RGBA32I)),M===t.RGB&&O===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),M===t.RGBA){const ce=te?Cl:ct.getTransfer(j);O===t.FLOAT&&($=t.RGBA32F),O===t.HALF_FLOAT&&($=t.RGBA16F),O===t.UNSIGNED_BYTE&&($=ce===xt?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function x(A,M){let O;return A?M===null||M===Fr||M===Ns?O=t.DEPTH24_STENCIL8:M===Mi?O=t.DEPTH32F_STENCIL8:M===ko&&(O=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fr||M===Ns?O=t.DEPTH_COMPONENT24:M===Mi?O=t.DEPTH_COMPONENT32F:M===ko&&(O=t.DEPTH_COMPONENT16),O}function S(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==On&&A.minFilter!==qn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function P(A){const M=A.target;M.removeEventListener("dispose",P),w(M),M.isVideoTexture&&d.delete(M)}function C(A){const M=A.target;M.removeEventListener("dispose",C),X(M)}function w(A){const M=i.get(A);if(M.__webglInit===void 0)return;const O=A.source,j=f.get(O);if(j){const te=j[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&R(A),Object.keys(j).length===0&&f.delete(O)}i.remove(A)}function R(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const O=A.source,j=f.get(O);delete j[M.__cacheKey],o.memory.textures--}function X(A){const M=i.get(A);if(A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(M.__webglFramebuffer[j]))for(let te=0;te<M.__webglFramebuffer[j].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[j][te]);else t.deleteFramebuffer(M.__webglFramebuffer[j]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[j])}else{if(Array.isArray(M.__webglFramebuffer))for(let j=0;j<M.__webglFramebuffer.length;j++)t.deleteFramebuffer(M.__webglFramebuffer[j]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let j=0;j<M.__webglColorRenderbuffer.length;j++)M.__webglColorRenderbuffer[j]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[j]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const O=A.textures;for(let j=0,te=O.length;j<te;j++){const $=i.get(O[j]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(O[j])}i.remove(A)}let y=0;function E(){y=0}function k(){const A=y;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),y+=1,A}function F(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function V(A,M){const O=i.get(A);if(A.isVideoTexture&&Ce(A),A.isRenderTargetTexture===!1&&A.version>0&&O.__version!==A.version){const j=A.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ne(O,A,M);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+M)}function K(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Ne(O,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+M)}function B(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){Ne(O,A,M);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+M)}function ee(A,M){const O=i.get(A);if(A.version>0&&O.__version!==A.version){W(O,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+M)}const L={[vd]:t.REPEAT,[Ar]:t.CLAMP_TO_EDGE,[_d]:t.MIRRORED_REPEAT},q={[On]:t.NEAREST,[Yy]:t.NEAREST_MIPMAP_NEAREST,[va]:t.NEAREST_MIPMAP_LINEAR,[qn]:t.LINEAR,[Uc]:t.LINEAR_MIPMAP_NEAREST,[Cr]:t.LINEAR_MIPMAP_LINEAR},J={[Zy]:t.NEVER,[iS]:t.ALWAYS,[Qy]:t.LESS,[Z0]:t.LEQUAL,[Jy]:t.EQUAL,[nS]:t.GEQUAL,[eS]:t.GREATER,[tS]:t.NOTEQUAL};function se(A,M){if(M.type===Mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===qn||M.magFilter===Uc||M.magFilter===va||M.magFilter===Cr||M.minFilter===qn||M.minFilter===Uc||M.minFilter===va||M.minFilter===Cr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,L[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,L[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,L[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===On||M.minFilter!==va&&M.minFilter!==Cr||M.type===Mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const O=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,O.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Se(A,M){let O=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",P));const j=M.source;let te=f.get(j);te===void 0&&(te={},f.set(j,te));const $=F(M);if($!==A.__cacheKey){te[$]===void 0&&(te[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),te[$].usedTimes++;const ce=te[A.__cacheKey];ce!==void 0&&(te[A.__cacheKey].usedTimes--,ce.usedTimes===0&&R(M)),A.__cacheKey=$,A.__webglTexture=te[$].texture}return O}function Ne(A,M,O){let j=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(j=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(j=t.TEXTURE_3D);const te=Se(A,M),$=M.source;n.bindTexture(j,A.__webglTexture,t.TEXTURE0+O);const ce=i.get($);if($.version!==ce.__version||te===!0){n.activeTexture(t.TEXTURE0+O);const de=ct.getPrimaries(ct.workingColorSpace),xe=M.colorSpace===Vi?null:ct.getPrimaries(M.colorSpace),ke=M.colorSpace===Vi||de===xe?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);let Z=v(M.image,!1,r.maxTextureSize);Z=We(M,Z);const ue=s.convert(M.format,M.colorSpace),ve=s.convert(M.type);let ge=_(M.internalFormat,ue,ve,M.colorSpace,M.isVideoTexture);se(j,M);let pe;const Ae=M.mipmaps,Ee=M.isVideoTexture!==!0,rt=ce.__version===void 0||te===!0,D=$.dataReady,fe=S(M,Z);if(M.isDepthTexture)ge=x(M.format===Fs,M.type),rt&&(Ee?n.texStorage2D(t.TEXTURE_2D,1,ge,Z.width,Z.height):n.texImage2D(t.TEXTURE_2D,0,ge,Z.width,Z.height,0,ue,ve,null));else if(M.isDataTexture)if(Ae.length>0){Ee&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Ae[0].width,Ae[0].height);for(let z=0,Y=Ae.length;z<Y;z++)pe=Ae[z],Ee?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,pe.width,pe.height,ue,ve,pe.data):n.texImage2D(t.TEXTURE_2D,z,ge,pe.width,pe.height,0,ue,ve,pe.data);M.generateMipmaps=!1}else Ee?(rt&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Z.width,Z.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Z.width,Z.height,ue,ve,Z.data)):n.texImage2D(t.TEXTURE_2D,0,ge,Z.width,Z.height,0,ue,ve,Z.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ee&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ge,Ae[0].width,Ae[0].height,Z.depth);for(let z=0,Y=Ae.length;z<Y;z++)if(pe=Ae[z],M.format!==Zn)if(ue!==null)if(Ee){if(D)if(M.layerUpdates.size>0){const ae=dm(pe.width,pe.height,M.format,M.type);for(const re of M.layerUpdates){const Oe=pe.data.subarray(re*ae/pe.data.BYTES_PER_ELEMENT,(re+1)*ae/pe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,re,pe.width,pe.height,1,ue,Oe,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,Z.depth,ue,pe.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,z,ge,pe.width,pe.height,Z.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ee?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,z,0,0,0,pe.width,pe.height,Z.depth,ue,ve,pe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,z,ge,pe.width,pe.height,Z.depth,0,ue,ve,pe.data)}else{Ee&&rt&&n.texStorage2D(t.TEXTURE_2D,fe,ge,Ae[0].width,Ae[0].height);for(let z=0,Y=Ae.length;z<Y;z++)pe=Ae[z],M.format!==Zn?ue!==null?Ee?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,z,0,0,pe.width,pe.height,ue,pe.data):n.compressedTexImage2D(t.TEXTURE_2D,z,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ee?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,pe.width,pe.height,ue,ve,pe.data):n.texImage2D(t.TEXTURE_2D,z,ge,pe.width,pe.height,0,ue,ve,pe.data)}else if(M.isDataArrayTexture)if(Ee){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,fe,ge,Z.width,Z.height,Z.depth),D)if(M.layerUpdates.size>0){const z=dm(Z.width,Z.height,M.format,M.type);for(const Y of M.layerUpdates){const ae=Z.data.subarray(Y*z/Z.data.BYTES_PER_ELEMENT,(Y+1)*z/Z.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Y,Z.width,Z.height,1,ue,ve,ae)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,Z.width,Z.height,Z.depth,ue,ve,Z.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ge,Z.width,Z.height,Z.depth,0,ue,ve,Z.data);else if(M.isData3DTexture)Ee?(rt&&n.texStorage3D(t.TEXTURE_3D,fe,ge,Z.width,Z.height,Z.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,Z.width,Z.height,Z.depth,ue,ve,Z.data)):n.texImage3D(t.TEXTURE_3D,0,ge,Z.width,Z.height,Z.depth,0,ue,ve,Z.data);else if(M.isFramebufferTexture){if(rt)if(Ee)n.texStorage2D(t.TEXTURE_2D,fe,ge,Z.width,Z.height);else{let z=Z.width,Y=Z.height;for(let ae=0;ae<fe;ae++)n.texImage2D(t.TEXTURE_2D,ae,ge,z,Y,0,ue,ve,null),z>>=1,Y>>=1}}else if(Ae.length>0){if(Ee&&rt){const z=Ie(Ae[0]);n.texStorage2D(t.TEXTURE_2D,fe,ge,z.width,z.height)}for(let z=0,Y=Ae.length;z<Y;z++)pe=Ae[z],Ee?D&&n.texSubImage2D(t.TEXTURE_2D,z,0,0,ue,ve,pe):n.texImage2D(t.TEXTURE_2D,z,ge,ue,ve,pe);M.generateMipmaps=!1}else if(Ee){if(rt){const z=Ie(Z);n.texStorage2D(t.TEXTURE_2D,fe,ge,z.width,z.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ue,ve,Z)}else n.texImage2D(t.TEXTURE_2D,0,ge,ue,ve,Z);m(M)&&u(j),ce.__version=$.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function W(A,M,O){if(M.image.length!==6)return;const j=Se(A,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+O);const $=i.get(te);if(te.version!==$.__version||j===!0){n.activeTexture(t.TEXTURE0+O);const ce=ct.getPrimaries(ct.workingColorSpace),de=M.colorSpace===Vi?null:ct.getPrimaries(M.colorSpace),xe=M.colorSpace===Vi||ce===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ke=M.isCompressedTexture||M.image[0].isCompressedTexture,Z=M.image[0]&&M.image[0].isDataTexture,ue=[];for(let Y=0;Y<6;Y++)!ke&&!Z?ue[Y]=v(M.image[Y],!0,r.maxCubemapSize):ue[Y]=Z?M.image[Y].image:M.image[Y],ue[Y]=We(M,ue[Y]);const ve=ue[0],ge=s.convert(M.format,M.colorSpace),pe=s.convert(M.type),Ae=_(M.internalFormat,ge,pe,M.colorSpace),Ee=M.isVideoTexture!==!0,rt=$.__version===void 0||j===!0,D=te.dataReady;let fe=S(M,ve);se(t.TEXTURE_CUBE_MAP,M);let z;if(ke){Ee&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ae,ve.width,ve.height);for(let Y=0;Y<6;Y++){z=ue[Y].mipmaps;for(let ae=0;ae<z.length;ae++){const re=z[ae];M.format!==Zn?ge!==null?Ee?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,re.width,re.height,ge,re.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Ae,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ee?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,0,0,re.width,re.height,ge,pe,re.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae,Ae,re.width,re.height,0,ge,pe,re.data)}}}else{if(z=M.mipmaps,Ee&&rt){z.length>0&&fe++;const Y=Ie(ue[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,fe,Ae,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(Z){Ee?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ue[Y].width,ue[Y].height,ge,pe,ue[Y].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,ue[Y].width,ue[Y].height,0,ge,pe,ue[Y].data);for(let ae=0;ae<z.length;ae++){const Oe=z[ae].image[Y].image;Ee?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,Oe.width,Oe.height,ge,pe,Oe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Ae,Oe.width,Oe.height,0,ge,pe,Oe.data)}}else{Ee?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ge,pe,ue[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,Ae,ge,pe,ue[Y]);for(let ae=0;ae<z.length;ae++){const re=z[ae];Ee?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,0,0,ge,pe,re.image[Y]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ae+1,Ae,ge,pe,re.image[Y])}}}m(M)&&u(t.TEXTURE_CUBE_MAP),$.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function ie(A,M,O,j,te,$){const ce=s.convert(O.format,O.colorSpace),de=s.convert(O.type),xe=_(O.internalFormat,ce,de,O.colorSpace);if(!i.get(M).__hasExternalTextures){const Z=Math.max(1,M.width>>$),ue=Math.max(1,M.height>>$);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,$,xe,Z,ue,M.depth,0,ce,de,null):n.texImage2D(te,$,xe,Z,ue,0,ce,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),qe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,j,te,i.get(O).__webglTexture,0,De(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,j,te,i.get(O).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function he(A,M,O){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const j=M.depthTexture,te=j&&j.isDepthTexture?j.type:null,$=x(M.stencilBuffer,te),ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=De(M);qe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,$,M.width,M.height):O?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ce,t.RENDERBUFFER,A)}else{const j=M.textures;for(let te=0;te<j.length;te++){const $=j[te],ce=s.convert($.format,$.colorSpace),de=s.convert($.type),xe=_($.internalFormat,ce,de,$.colorSpace),ke=De(M);O&&qe(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ke,xe,M.width,M.height):qe(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ke,xe,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,xe,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function me(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),V(M.depthTexture,0);const j=i.get(M.depthTexture).__webglTexture,te=De(M);if(M.depthTexture.format===Ms)qe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,j,0);else if(M.depthTexture.format===Fs)qe(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Fe(A){const M=i.get(A),O=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const j=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),j){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,j.removeEventListener("dispose",te)};j.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=j}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");me(M.__webglFramebuffer,A)}else if(O){M.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[j]),M.__webglDepthbuffer[j]===void 0)M.__webglDepthbuffer[j]=t.createRenderbuffer(),he(M.__webglDepthbuffer[j],A,!1);else{const te=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[j];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),he(M.__webglDepthbuffer,A,!1);else{const j=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,j,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Te(A,M,O){const j=i.get(A);M!==void 0&&ie(j.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),O!==void 0&&Fe(A)}function Ge(A){const M=A.texture,O=i.get(A),j=i.get(M);A.addEventListener("dispose",C);const te=A.textures,$=A.isWebGLCubeRenderTarget===!0,ce=te.length>1;if(ce||(j.__webglTexture===void 0&&(j.__webglTexture=t.createTexture()),j.__version=M.version,o.memory.textures++),$){O.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer[de]=[];for(let xe=0;xe<M.mipmaps.length;xe++)O.__webglFramebuffer[de][xe]=t.createFramebuffer()}else O.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){O.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)O.__webglFramebuffer[de]=t.createFramebuffer()}else O.__webglFramebuffer=t.createFramebuffer();if(ce)for(let de=0,xe=te.length;de<xe;de++){const ke=i.get(te[de]);ke.__webglTexture===void 0&&(ke.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&qe(A)===!1){O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let de=0;de<te.length;de++){const xe=te[de];O.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[de]);const ke=s.convert(xe.format,xe.colorSpace),Z=s.convert(xe.type),ue=_(xe.internalFormat,ke,Z,xe.colorSpace,A.isXRRenderTarget===!0),ve=De(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,ue,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,O.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),he(O.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,j.__webglTexture),se(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ie(O.__webglFramebuffer[de][xe],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,xe);else ie(O.__webglFramebuffer[de],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&u(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(ce){for(let de=0,xe=te.length;de<xe;de++){const ke=te[de],Z=i.get(ke);n.bindTexture(t.TEXTURE_2D,Z.__webglTexture),se(t.TEXTURE_2D,ke),ie(O.__webglFramebuffer,A,ke,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m(ke)&&u(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(de=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,j.__webglTexture),se(de,M),M.mipmaps&&M.mipmaps.length>0)for(let xe=0;xe<M.mipmaps.length;xe++)ie(O.__webglFramebuffer[xe],A,M,t.COLOR_ATTACHMENT0,de,xe);else ie(O.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&u(de),n.unbindTexture()}A.depthBuffer&&Fe(A)}function Qe(A){const M=A.textures;for(let O=0,j=M.length;O<j;O++){const te=M[O];if(m(te)){const $=A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,ce=i.get(te).__webglTexture;n.bindTexture($,ce),u($),n.unbindTexture()}}}const Ue=[],b=[];function wt(A){if(A.samples>0){if(qe(A)===!1){const M=A.textures,O=A.width,j=A.height;let te=t.COLOR_BUFFER_BIT;const $=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=i.get(A),de=M.length>1;if(de)for(let xe=0;xe<M.length;xe++)n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglFramebuffer);for(let xe=0;xe<M.length;xe++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ce.__webglColorRenderbuffer[xe]);const ke=i.get(M[xe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,ke,0)}t.blitFramebuffer(0,0,O,j,0,0,O,j,te,t.NEAREST),l===!0&&(Ue.length=0,b.length=0,Ue.push(t.COLOR_ATTACHMENT0+xe),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ue.push($),b.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,b)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,Ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let xe=0;xe<M.length;xe++){n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.RENDERBUFFER,ce.__webglColorRenderbuffer[xe]);const ke=i.get(M[xe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+xe,t.TEXTURE_2D,ke,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ce.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function De(A){return Math.min(r.maxSamples,A.samples)}function qe(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ce(A){const M=o.render.frame;d.get(A)!==M&&(d.set(A,M),A.update())}function We(A,M){const O=A.colorSpace,j=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||O!==cr&&O!==Vi&&(ct.getTransfer(O)===xt?(j!==Zn||te!==Pi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),M}function Ie(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=E,this.setTexture2D=V,this.setTexture2DArray=K,this.setTexture3D=B,this.setTextureCube=ee,this.rebindTextures=Te,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=Qe,this.updateMultisampleRenderTarget=wt,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=qe}function lT(t,e){function n(i,r=Vi){let s;const o=ct.getTransfer(r);if(i===Pi)return t.UNSIGNED_BYTE;if(i===Xf)return t.UNSIGNED_SHORT_4_4_4_4;if(i===jf)return t.UNSIGNED_SHORT_5_5_5_1;if(i===G0)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===B0)return t.BYTE;if(i===H0)return t.SHORT;if(i===ko)return t.UNSIGNED_SHORT;if(i===Wf)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===Mi)return t.FLOAT;if(i===$o)return t.HALF_FLOAT;if(i===V0)return t.ALPHA;if(i===W0)return t.RGB;if(i===Zn)return t.RGBA;if(i===X0)return t.LUMINANCE;if(i===j0)return t.LUMINANCE_ALPHA;if(i===Ms)return t.DEPTH_COMPONENT;if(i===Fs)return t.DEPTH_STENCIL;if(i===Y0)return t.RED;if(i===Yf)return t.RED_INTEGER;if(i===$0)return t.RG;if(i===$f)return t.RG_INTEGER;if(i===qf)return t.RGBA_INTEGER;if(i===Ka||i===Za||i===Qa||i===Ja)if(o===xt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Za)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Ja)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===xd||i===yd||i===Sd||i===Md)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===xd)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===yd)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Sd)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Md)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ed||i===wd||i===Td)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ed||i===wd)return o===xt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Td)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Ad||i===Cd||i===Rd||i===Pd||i===bd||i===Ld||i===Dd||i===Id||i===Ud||i===Nd||i===Fd||i===Od||i===kd||i===zd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Ad)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Cd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Rd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Pd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===bd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Ld)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Dd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Id)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Ud)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Nd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Fd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Od)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===kd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===zd)return o===xt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===el||i===Bd||i===Hd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===el)return o===xt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Hd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===q0||i===Gd||i===Vd||i===Wd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===el)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Gd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Vd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ns?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class cT extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class uo extends $t{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uT={type:"move"};class uu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new uo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new uo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new uo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),u=this._getHandJoint(c,v);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const d=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=d.position.distanceTo(h.position),g=.02,p=.005;c.inputState.pinching&&f>g+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=g-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(uT)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new uo;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const dT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,fT=`
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

}`;class hT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new xn,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new sr({vertexShader:dT,fragmentShader:fT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ne(new mt(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class pT extends Hs{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,d=null,h=null,f=null,g=null,p=null;const v=new hT,m=n.getContextAttributes();let u=null,_=null;const x=[],S=[],P=new nt;let C=null;const w=new tn;w.layers.enable(1),w.viewport=new ht;const R=new tn;R.layers.enable(2),R.viewport=new ht;const X=[w,R],y=new cT;y.layers.enable(1),y.layers.enable(2);let E=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let ie=x[W];return ie===void 0&&(ie=new uu,x[W]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(W){let ie=x[W];return ie===void 0&&(ie=new uu,x[W]=ie),ie.getGripSpace()},this.getHand=function(W){let ie=x[W];return ie===void 0&&(ie=new uu,x[W]=ie),ie.getHandSpace()};function F(W){const ie=S.indexOf(W.inputSource);if(ie===-1)return;const he=x[ie];he!==void 0&&(he.update(W.inputSource,W.frame,c||o),he.dispatchEvent({type:W.type,data:W.inputSource}))}function V(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",V),r.removeEventListener("inputsourceschange",K);for(let W=0;W<x.length;W++){const ie=S[W];ie!==null&&(S[W]=null,x[W].disconnect(ie))}E=null,k=null,v.reset(),e.setRenderTarget(u),g=null,f=null,h=null,r=null,_=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(W){c=W},this.getBaseLayer=function(){return f!==null?f:g},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(u=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",V),r.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(P),r.renderState.layers===void 0){const ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};g=new XRWebGLLayer(r,n,ie),r.updateRenderState({baseLayer:g}),e.setPixelRatio(1),e.setSize(g.framebufferWidth,g.framebufferHeight,!1),_=new Or(g.framebufferWidth,g.framebufferHeight,{format:Zn,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,he=null,me=null;m.depth&&(me=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ie=m.stencil?Fs:Ms,he=m.stencil?Ns:Fr);const Fe={colorFormat:n.RGBA8,depthFormat:me,scaleFactor:s};h=new XRWebGLBinding(r,n),f=h.createProjectionLayer(Fe),r.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Or(f.textureWidth,f.textureHeight,{format:Zn,type:Pi,depthTexture:new uv(f.textureWidth,f.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function K(W){for(let ie=0;ie<W.removed.length;ie++){const he=W.removed[ie],me=S.indexOf(he);me>=0&&(S[me]=null,x[me].disconnect(he))}for(let ie=0;ie<W.added.length;ie++){const he=W.added[ie];let me=S.indexOf(he);if(me===-1){for(let Te=0;Te<x.length;Te++)if(Te>=S.length){S.push(he),me=Te;break}else if(S[Te]===null){S[Te]=he,me=Te;break}if(me===-1)break}const Fe=x[me];Fe&&Fe.connect(he)}}const B=new N,ee=new N;function L(W,ie,he){B.setFromMatrixPosition(ie.matrixWorld),ee.setFromMatrixPosition(he.matrixWorld);const me=B.distanceTo(ee),Fe=ie.projectionMatrix.elements,Te=he.projectionMatrix.elements,Ge=Fe[14]/(Fe[10]-1),Qe=Fe[14]/(Fe[10]+1),Ue=(Fe[9]+1)/Fe[5],b=(Fe[9]-1)/Fe[5],wt=(Fe[8]-1)/Fe[0],De=(Te[8]+1)/Te[0],qe=Ge*wt,Ce=Ge*De,We=me/(-wt+De),Ie=We*-wt;if(ie.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(Ie),W.translateZ(We),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),Fe[10]===-1)W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const A=Ge+We,M=Qe+We,O=qe-Ie,j=Ce+(me-Ie),te=Ue*Qe/M*A,$=b*Qe/M*A;W.projectionMatrix.makePerspective(O,j,te,$,A,M),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function q(W,ie){ie===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(ie.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let ie=W.near,he=W.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(he=v.depthFar)),y.near=R.near=w.near=ie,y.far=R.far=w.far=he,(E!==y.near||k!==y.far)&&(r.updateRenderState({depthNear:y.near,depthFar:y.far}),E=y.near,k=y.far);const me=W.parent,Fe=y.cameras;q(y,me);for(let Te=0;Te<Fe.length;Te++)q(Fe[Te],me);Fe.length===2?L(y,w,R):y.projectionMatrix.copy(w.projectionMatrix),J(W,y,me)};function J(W,ie,he){he===null?W.matrix.copy(ie.matrixWorld):(W.matrix.copy(he.matrixWorld),W.matrix.invert(),W.matrix.multiply(ie.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(ie.projectionMatrix),W.projectionMatrixInverse.copy(ie.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Xd*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return y},this.getFoveation=function(){if(!(f===null&&g===null))return l},this.setFoveation=function(W){l=W,f!==null&&(f.fixedFoveation=W),g!==null&&g.fixedFoveation!==void 0&&(g.fixedFoveation=W)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(y)};let se=null;function Se(W,ie){if(d=ie.getViewerPose(c||o),p=ie,d!==null){const he=d.views;g!==null&&(e.setRenderTargetFramebuffer(_,g.framebuffer),e.setRenderTarget(_));let me=!1;he.length!==y.cameras.length&&(y.cameras.length=0,me=!0);for(let Te=0;Te<he.length;Te++){const Ge=he[Te];let Qe=null;if(g!==null)Qe=g.getViewport(Ge);else{const b=h.getViewSubImage(f,Ge);Qe=b.viewport,Te===0&&(e.setRenderTargetTextures(_,b.colorTexture,f.ignoreDepthValues?void 0:b.depthStencilTexture),e.setRenderTarget(_))}let Ue=X[Te];Ue===void 0&&(Ue=new tn,Ue.layers.enable(Te),Ue.viewport=new ht,X[Te]=Ue),Ue.matrix.fromArray(Ge.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(Ge.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Te===0&&(y.matrix.copy(Ue.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale)),me===!0&&y.cameras.push(Ue)}const Fe=r.enabledFeatures;if(Fe&&Fe.includes("depth-sensing")){const Te=h.getDepthInformation(he[0]);Te&&Te.isValid&&Te.texture&&v.init(e,Te,r.renderState)}}for(let he=0;he<x.length;he++){const me=S[he],Fe=x[he];me!==null&&Fe!==void 0&&Fe.update(me,ie,c||o)}se&&se(W,ie),ie.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ie}),p=null}const Ne=new lv;Ne.setAnimationLoop(Se),this.setAnimationLoop=function(W){se=W},this.dispose=function(){}}}const mr=new di,mT=new Et;function gT(t,e){function n(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,sv(t)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function r(m,u,_,x,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?s(m,u):u.isMeshToonMaterial?(s(m,u),h(m,u)):u.isMeshPhongMaterial?(s(m,u),d(m,u)):u.isMeshStandardMaterial?(s(m,u),f(m,u),u.isMeshPhysicalMaterial&&g(m,u,S)):u.isMeshMatcapMaterial?(s(m,u),p(m,u)):u.isMeshDepthMaterial?s(m,u):u.isMeshDistanceMaterial?(s(m,u),v(m,u)):u.isMeshNormalMaterial?s(m,u):u.isLineBasicMaterial?(o(m,u),u.isLineDashedMaterial&&a(m,u)):u.isPointsMaterial?l(m,u,_,x):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function s(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,n(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===_n&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,n(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===_n&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,n(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,n(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,n(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const _=e.get(u),x=_.envMap,S=_.envMapRotation;x&&(m.envMap.value=x,mr.copy(S),mr.x*=-1,mr.y*=-1,mr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(mr.y*=-1,mr.z*=-1),m.envMapRotation.value.setFromMatrix4(mT.makeRotationFromEuler(mr)),m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,n(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,n(u.aoMap,m.aoMapTransform))}function o(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform))}function a(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,_,x){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*_,m.scale.value=x*.5,u.map&&(m.map.value=u.map,n(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,n(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,n(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function d(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function h(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,n(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,n(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function g(m,u,_){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,n(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,n(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,n(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,n(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,n(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===_n&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,n(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,n(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,n(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,n(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,n(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,n(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,n(u.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,u){u.matcap&&(m.matcap.value=u.matcap)}function v(m,u){const _=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function vT(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,x){const S=x.program;i.uniformBlockBinding(_,S)}function c(_,x){let S=r[_.id];S===void 0&&(p(_),S=d(_),r[_.id]=S,_.addEventListener("dispose",m));const P=x.program;i.updateUBOMapping(_,P);const C=e.render.frame;s[_.id]!==C&&(f(_),s[_.id]=C)}function d(_){const x=h();_.__bindingPointIndex=x;const S=t.createBuffer(),P=_.__size,C=_.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,P,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,x,S),S}function h(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const x=r[_.id],S=_.uniforms,P=_.__cache;t.bindBuffer(t.UNIFORM_BUFFER,x);for(let C=0,w=S.length;C<w;C++){const R=Array.isArray(S[C])?S[C]:[S[C]];for(let X=0,y=R.length;X<y;X++){const E=R[X];if(g(E,C,X,P)===!0){const k=E.__offset,F=Array.isArray(E.value)?E.value:[E.value];let V=0;for(let K=0;K<F.length;K++){const B=F[K],ee=v(B);typeof B=="number"||typeof B=="boolean"?(E.__data[0]=B,t.bufferSubData(t.UNIFORM_BUFFER,k+V,E.__data)):B.isMatrix3?(E.__data[0]=B.elements[0],E.__data[1]=B.elements[1],E.__data[2]=B.elements[2],E.__data[3]=0,E.__data[4]=B.elements[3],E.__data[5]=B.elements[4],E.__data[6]=B.elements[5],E.__data[7]=0,E.__data[8]=B.elements[6],E.__data[9]=B.elements[7],E.__data[10]=B.elements[8],E.__data[11]=0):(B.toArray(E.__data,V),V+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,k,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function g(_,x,S,P){const C=_.value,w=x+"_"+S;if(P[w]===void 0)return typeof C=="number"||typeof C=="boolean"?P[w]=C:P[w]=C.clone(),!0;{const R=P[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return P[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function p(_){const x=_.uniforms;let S=0;const P=16;for(let w=0,R=x.length;w<R;w++){const X=Array.isArray(x[w])?x[w]:[x[w]];for(let y=0,E=X.length;y<E;y++){const k=X[y],F=Array.isArray(k.value)?k.value:[k.value];for(let V=0,K=F.length;V<K;V++){const B=F[V],ee=v(B),L=S%P,q=L%ee.boundary,J=L+q;S+=q,J!==0&&P-J<ee.storage&&(S+=P-J),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=S,S+=ee.storage}}}const C=S%P;return C>0&&(S+=P-C),_.__size=S,_.__cache={},this}function v(_){const x={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const S=o.indexOf(x.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function u(){for(const _ in r)t.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:c,dispose:u}}class Ql{constructor(e={}){const{canvas:n=sS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=i.getContextAttributes().alpha}else f=o;const g=new Uint32Array(4),p=new Int32Array(4);let v=null,m=null;const u=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ri,this.toneMapping=tr,this.toneMappingExposure=1;const x=this;let S=!1,P=0,C=0,w=null,R=-1,X=null;const y=new ht,E=new ht;let k=null;const F=new tt(0);let V=0,K=n.width,B=n.height,ee=1,L=null,q=null;const J=new ht(0,0,K,B),se=new ht(0,0,K,B);let Se=!1;const Ne=new Jf;let W=!1,ie=!1;const he=new Et,me=new Et,Fe=new N,Te=new ht,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Qe=!1;function Ue(){return w===null?ee:1}let b=i;function wt(T,I){return n.getContext(T,I)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:d,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Vf}`),n.addEventListener("webglcontextlost",Y,!1),n.addEventListener("webglcontextrestored",ae,!1),n.addEventListener("webglcontextcreationerror",re,!1),b===null){const I="webgl2";if(b=wt(I,T),b===null)throw wt(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let De,qe,Ce,We,Ie,A,M,O,j,te,$,ce,de,xe,ke,Z,ue,ve,ge,pe,Ae,Ee,rt,D;function fe(){De=new Ew(b),De.init(),Ee=new lT(b,De),qe=new vw(b,De,e,Ee),Ce=new sT(b),qe.reverseDepthBuffer&&Ce.buffers.depth.setReversed(!0),We=new Aw(b),Ie=new W1,A=new aT(b,De,Ce,Ie,qe,Ee,We),M=new xw(x),O=new Mw(x),j=new IS(b),rt=new mw(b,j),te=new ww(b,j,We,rt),$=new Rw(b,te,j,We),ge=new Cw(b,qe,A),Z=new _w(Ie),ce=new V1(x,M,O,De,qe,rt,Z),de=new gT(x,Ie),xe=new j1,ke=new Q1(De),ve=new pw(x,M,O,Ce,$,f,l),ue=new iT(x,$,qe),D=new vT(b,We,qe,Ce),pe=new gw(b,De,We),Ae=new Tw(b,De,We),We.programs=ce.programs,x.capabilities=qe,x.extensions=De,x.properties=Ie,x.renderLists=xe,x.shadowMap=ue,x.state=Ce,x.info=We}fe();const z=new pT(x,b);this.xr=z,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const T=De.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=De.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(K,B,!1))},this.getSize=function(T){return T.set(K,B)},this.setSize=function(T,I,H=!0){if(z.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}K=T,B=I,n.width=Math.floor(T*ee),n.height=Math.floor(I*ee),H===!0&&(n.style.width=T+"px",n.style.height=I+"px"),this.setViewport(0,0,T,I)},this.getDrawingBufferSize=function(T){return T.set(K*ee,B*ee).floor()},this.setDrawingBufferSize=function(T,I,H){K=T,B=I,ee=H,n.width=Math.floor(T*H),n.height=Math.floor(I*H),this.setViewport(0,0,T,I)},this.getCurrentViewport=function(T){return T.copy(y)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,I,H,G){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,I,H,G),Ce.viewport(y.copy(J).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(se)},this.setScissor=function(T,I,H,G){T.isVector4?se.set(T.x,T.y,T.z,T.w):se.set(T,I,H,G),Ce.scissor(E.copy(se).multiplyScalar(ee).round())},this.getScissorTest=function(){return Se},this.setScissorTest=function(T){Ce.setScissorTest(Se=T)},this.setOpaqueSort=function(T){L=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(ve.getClearColor())},this.setClearColor=function(){ve.setClearColor.apply(ve,arguments)},this.getClearAlpha=function(){return ve.getClearAlpha()},this.setClearAlpha=function(){ve.setClearAlpha.apply(ve,arguments)},this.clear=function(T=!0,I=!0,H=!0){let G=0;if(T){let U=!1;if(w!==null){const le=w.texture.format;U=le===qf||le===$f||le===Yf}if(U){const le=w.texture.type,ye=le===Pi||le===Fr||le===ko||le===Ns||le===Xf||le===jf,Re=ve.getClearColor(),Pe=ve.getClearAlpha(),ze=Re.r,He=Re.g,be=Re.b;ye?(g[0]=ze,g[1]=He,g[2]=be,g[3]=Pe,b.clearBufferuiv(b.COLOR,0,g)):(p[0]=ze,p[1]=He,p[2]=be,p[3]=Pe,b.clearBufferiv(b.COLOR,0,p))}else G|=b.COLOR_BUFFER_BIT}I&&(G|=b.DEPTH_BUFFER_BIT,b.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Y,!1),n.removeEventListener("webglcontextrestored",ae,!1),n.removeEventListener("webglcontextcreationerror",re,!1),xe.dispose(),ke.dispose(),Ie.dispose(),M.dispose(),O.dispose(),$.dispose(),rt.dispose(),D.dispose(),ce.dispose(),z.dispose(),z.removeEventListener("sessionstart",Ye),z.removeEventListener("sessionend",Xe),et.stop()};function Y(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function ae(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=We.autoReset,I=ue.enabled,H=ue.autoUpdate,G=ue.needsUpdate,U=ue.type;fe(),We.autoReset=T,ue.enabled=I,ue.autoUpdate=H,ue.needsUpdate=G,ue.type=U}function re(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Oe(T){const I=T.target;I.removeEventListener("dispose",Oe),Je(I)}function Je(T){ot(T),Ie.remove(T)}function ot(T){const I=Ie.get(T).programs;I!==void 0&&(I.forEach(function(H){ce.releaseProgram(H)}),T.isShaderMaterial&&ce.releaseShaderCache(T))}this.renderBufferDirect=function(T,I,H,G,U,le){I===null&&(I=Ge);const ye=U.isMesh&&U.matrixWorld.determinant()<0,Re=gv(T,I,H,G,U);Ce.setMaterial(G,ye);let Pe=H.index,ze=1;if(G.wireframe===!0){if(Pe=te.getWireframeAttribute(H),Pe===void 0)return;ze=2}const He=H.drawRange,be=H.attributes.position;let ut=He.start*ze,vt=(He.start+He.count)*ze;le!==null&&(ut=Math.max(ut,le.start*ze),vt=Math.min(vt,(le.start+le.count)*ze)),Pe!==null?(ut=Math.max(ut,0),vt=Math.min(vt,Pe.count)):be!=null&&(ut=Math.max(ut,0),vt=Math.min(vt,be.count));const Pt=vt-ut;if(Pt<0||Pt===1/0)return;rt.setup(U,G,Re,H,Pe);let yn,at=pe;if(Pe!==null&&(yn=j.get(Pe),at=Ae,at.setIndex(yn)),U.isMesh)G.wireframe===!0?(Ce.setLineWidth(G.wireframeLinewidth*Ue()),at.setMode(b.LINES)):at.setMode(b.TRIANGLES);else if(U.isLine){let Le=G.linewidth;Le===void 0&&(Le=1),Ce.setLineWidth(Le*Ue()),U.isLineSegments?at.setMode(b.LINES):U.isLineLoop?at.setMode(b.LINE_LOOP):at.setMode(b.LINE_STRIP)}else U.isPoints?at.setMode(b.POINTS):U.isSprite&&at.setMode(b.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)at.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(De.get("WEBGL_multi_draw"))at.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const Le=U._multiDrawStarts,Xt=U._multiDrawCounts,lt=U._multiDrawCount,Hn=Pe?j.get(Pe).bytesPerElement:1,Br=Ie.get(G).currentProgram.getUniforms();for(let Sn=0;Sn<lt;Sn++)Br.setValue(b,"_gl_DrawID",Sn),at.render(Le[Sn]/Hn,Xt[Sn])}else if(U.isInstancedMesh)at.renderInstances(ut,Pt,U.count);else if(H.isInstancedBufferGeometry){const Le=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Xt=Math.min(H.instanceCount,Le);at.renderInstances(ut,Pt,Xt)}else at.render(ut,Pt)};function Be(T,I,H){T.transparent===!0&&T.side===fn&&T.forceSinglePass===!1?(T.side=_n,T.needsUpdate=!0,Jo(T,I,H),T.side=rr,T.needsUpdate=!0,Jo(T,I,H),T.side=fn):Jo(T,I,H)}this.compile=function(T,I,H=null){H===null&&(H=T),m=ke.get(H),m.init(I),_.push(m),H.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),T!==H&&T.traverseVisible(function(U){U.isLight&&U.layers.test(I.layers)&&(m.pushLight(U),U.castShadow&&m.pushShadow(U))}),m.setupLights();const G=new Set;return T.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const le=U.material;if(le)if(Array.isArray(le))for(let ye=0;ye<le.length;ye++){const Re=le[ye];Be(Re,H,U),G.add(Re)}else Be(le,H,U),G.add(le)}),_.pop(),m=null,G},this.compileAsync=function(T,I,H=null){const G=this.compile(T,I,H);return new Promise(U=>{function le(){if(G.forEach(function(ye){Ie.get(ye).currentProgram.isReady()&&G.delete(ye)}),G.size===0){U(T);return}setTimeout(le,10)}De.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let St=null;function Wt(T){St&&St(T)}function Ye(){et.stop()}function Xe(){et.start()}const et=new lv;et.setAnimationLoop(Wt),typeof self<"u"&&et.setContext(self),this.setAnimationLoop=function(T){St=T,z.setAnimationLoop(T),T===null?et.stop():et.start()},z.addEventListener("sessionstart",Ye),z.addEventListener("sessionend",Xe),this.render=function(T,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),z.enabled===!0&&z.isPresenting===!0&&(z.cameraAutoUpdate===!0&&z.updateCamera(I),I=z.getCamera()),T.isScene===!0&&T.onBeforeRender(x,T,I,w),m=ke.get(T,_.length),m.init(I),_.push(m),me.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),Ne.setFromProjectionMatrix(me),ie=this.localClippingEnabled,W=Z.init(this.clippingPlanes,ie),v=xe.get(T,u.length),v.init(),u.push(v),z.enabled===!0&&z.isPresenting===!0){const le=x.xr.getDepthSensingMesh();le!==null&&$e(le,I,-1/0,x.sortObjects)}$e(T,I,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(L,q),Qe=z.enabled===!1||z.isPresenting===!1||z.hasDepthSensing()===!1,Qe&&ve.addToRenderList(v,T),this.info.render.frame++,W===!0&&Z.beginShadows();const H=m.state.shadowsArray;ue.render(H,T,I),W===!0&&Z.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=v.opaque,U=v.transmissive;if(m.setupLights(),I.isArrayCamera){const le=I.cameras;if(U.length>0)for(let ye=0,Re=le.length;ye<Re;ye++){const Pe=le[ye];Tt(G,U,T,Pe)}Qe&&ve.render(T);for(let ye=0,Re=le.length;ye<Re;ye++){const Pe=le[ye];pt(v,T,Pe,Pe.viewport)}}else U.length>0&&Tt(G,U,T,I),Qe&&ve.render(T),pt(v,T,I);w!==null&&(A.updateMultisampleRenderTarget(w),A.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(x,T,I),rt.resetDefaultState(),R=-1,X=null,_.pop(),_.length>0?(m=_[_.length-1],W===!0&&Z.setGlobalState(x.clippingPlanes,m.state.camera)):m=null,u.pop(),u.length>0?v=u[u.length-1]:v=null};function $e(T,I,H,G){if(T.visible===!1)return;if(T.layers.test(I.layers)){if(T.isGroup)H=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(I);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||Ne.intersectsSprite(T)){G&&Te.setFromMatrixPosition(T.matrixWorld).applyMatrix4(me);const ye=$.update(T),Re=T.material;Re.visible&&v.push(T,ye,Re,H,Te.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||Ne.intersectsObject(T))){const ye=$.update(T),Re=T.material;if(G&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Te.copy(T.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Te.copy(ye.boundingSphere.center)),Te.applyMatrix4(T.matrixWorld).applyMatrix4(me)),Array.isArray(Re)){const Pe=ye.groups;for(let ze=0,He=Pe.length;ze<He;ze++){const be=Pe[ze],ut=Re[be.materialIndex];ut&&ut.visible&&v.push(T,ye,ut,H,Te.z,be)}}else Re.visible&&v.push(T,ye,Re,H,Te.z,null)}}const le=T.children;for(let ye=0,Re=le.length;ye<Re;ye++)$e(le[ye],I,H,G)}function pt(T,I,H,G){const U=T.opaque,le=T.transmissive,ye=T.transparent;m.setupLightsView(H),W===!0&&Z.setGlobalState(x.clippingPlanes,H),G&&Ce.viewport(y.copy(G)),U.length>0&&It(U,I,H),le.length>0&&It(le,I,H),ye.length>0&&It(ye,I,H),Ce.buffers.depth.setTest(!0),Ce.buffers.depth.setMask(!0),Ce.buffers.color.setMask(!0),Ce.setPolygonOffset(!1)}function Tt(T,I,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new Or(1,1,{generateMipmaps:!0,type:De.has("EXT_color_buffer_half_float")||De.has("EXT_color_buffer_float")?$o:Pi,minFilter:Cr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ct.workingColorSpace}));const le=m.state.transmissionRenderTarget[G.id],ye=G.viewport||y;le.setSize(ye.z,ye.w);const Re=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(F),V=x.getClearAlpha(),V<1&&x.setClearColor(16777215,.5),x.clear(),Qe&&ve.render(H);const Pe=x.toneMapping;x.toneMapping=tr;const ze=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),W===!0&&Z.setGlobalState(x.clippingPlanes,G),It(T,H,G),A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le),De.has("WEBGL_multisampled_render_to_texture")===!1){let He=!1;for(let be=0,ut=I.length;be<ut;be++){const vt=I[be],Pt=vt.object,yn=vt.geometry,at=vt.material,Le=vt.group;if(at.side===fn&&Pt.layers.test(G.layers)){const Xt=at.side;at.side=_n,at.needsUpdate=!0,nh(Pt,H,G,yn,at,Le),at.side=Xt,at.needsUpdate=!0,He=!0}}He===!0&&(A.updateMultisampleRenderTarget(le),A.updateRenderTargetMipmap(le))}x.setRenderTarget(Re),x.setClearColor(F,V),ze!==void 0&&(G.viewport=ze),x.toneMapping=Pe}function It(T,I,H){const G=I.isScene===!0?I.overrideMaterial:null;for(let U=0,le=T.length;U<le;U++){const ye=T[U],Re=ye.object,Pe=ye.geometry,ze=G===null?ye.material:G,He=ye.group;Re.layers.test(H.layers)&&nh(Re,I,H,Pe,ze,He)}}function nh(T,I,H,G,U,le){T.onBeforeRender(x,I,H,G,U,le),T.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),U.onBeforeRender(x,I,H,G,T,le),U.transparent===!0&&U.side===fn&&U.forceSinglePass===!1?(U.side=_n,U.needsUpdate=!0,x.renderBufferDirect(H,I,G,U,T,le),U.side=rr,U.needsUpdate=!0,x.renderBufferDirect(H,I,G,U,T,le),U.side=fn):x.renderBufferDirect(H,I,G,U,T,le),T.onAfterRender(x,I,H,G,U,le)}function Jo(T,I,H){I.isScene!==!0&&(I=Ge);const G=Ie.get(T),U=m.state.lights,le=m.state.shadowsArray,ye=U.state.version,Re=ce.getParameters(T,U.state,le,I,H),Pe=ce.getProgramCacheKey(Re);let ze=G.programs;G.environment=T.isMeshStandardMaterial?I.environment:null,G.fog=I.fog,G.envMap=(T.isMeshStandardMaterial?O:M).get(T.envMap||G.environment),G.envMapRotation=G.environment!==null&&T.envMap===null?I.environmentRotation:T.envMapRotation,ze===void 0&&(T.addEventListener("dispose",Oe),ze=new Map,G.programs=ze);let He=ze.get(Pe);if(He!==void 0){if(G.currentProgram===He&&G.lightsStateVersion===ye)return rh(T,Re),He}else Re.uniforms=ce.getUniforms(T),T.onBeforeCompile(Re,x),He=ce.acquireProgram(Re,Pe),ze.set(Pe,He),G.uniforms=Re.uniforms;const be=G.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Z.uniform),rh(T,Re),G.needsLights=_v(T),G.lightsStateVersion=ye,G.needsLights&&(be.ambientLightColor.value=U.state.ambient,be.lightProbe.value=U.state.probe,be.directionalLights.value=U.state.directional,be.directionalLightShadows.value=U.state.directionalShadow,be.spotLights.value=U.state.spot,be.spotLightShadows.value=U.state.spotShadow,be.rectAreaLights.value=U.state.rectArea,be.ltc_1.value=U.state.rectAreaLTC1,be.ltc_2.value=U.state.rectAreaLTC2,be.pointLights.value=U.state.point,be.pointLightShadows.value=U.state.pointShadow,be.hemisphereLights.value=U.state.hemi,be.directionalShadowMap.value=U.state.directionalShadowMap,be.directionalShadowMatrix.value=U.state.directionalShadowMatrix,be.spotShadowMap.value=U.state.spotShadowMap,be.spotLightMatrix.value=U.state.spotLightMatrix,be.spotLightMap.value=U.state.spotLightMap,be.pointShadowMap.value=U.state.pointShadowMap,be.pointShadowMatrix.value=U.state.pointShadowMatrix),G.currentProgram=He,G.uniformsList=null,He}function ih(T){if(T.uniformsList===null){const I=T.currentProgram.getUniforms();T.uniformsList=nl.seqWithValue(I.seq,T.uniforms)}return T.uniformsList}function rh(T,I){const H=Ie.get(T);H.outputColorSpace=I.outputColorSpace,H.batching=I.batching,H.batchingColor=I.batchingColor,H.instancing=I.instancing,H.instancingColor=I.instancingColor,H.instancingMorph=I.instancingMorph,H.skinning=I.skinning,H.morphTargets=I.morphTargets,H.morphNormals=I.morphNormals,H.morphColors=I.morphColors,H.morphTargetsCount=I.morphTargetsCount,H.numClippingPlanes=I.numClippingPlanes,H.numIntersection=I.numClipIntersection,H.vertexAlphas=I.vertexAlphas,H.vertexTangents=I.vertexTangents,H.toneMapping=I.toneMapping}function gv(T,I,H,G,U){I.isScene!==!0&&(I=Ge),A.resetTextureUnits();const le=I.fog,ye=G.isMeshStandardMaterial?I.environment:null,Re=w===null?x.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:cr,Pe=(G.isMeshStandardMaterial?O:M).get(G.envMap||ye),ze=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,He=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),be=!!H.morphAttributes.position,ut=!!H.morphAttributes.normal,vt=!!H.morphAttributes.color;let Pt=tr;G.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Pt=x.toneMapping);const yn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,at=yn!==void 0?yn.length:0,Le=Ie.get(G),Xt=m.state.lights;if(W===!0&&(ie===!0||T!==X)){const bn=T===X&&G.id===R;Z.setState(G,T,bn)}let lt=!1;G.version===Le.__version?(Le.needsLights&&Le.lightsStateVersion!==Xt.state.version||Le.outputColorSpace!==Re||U.isBatchedMesh&&Le.batching===!1||!U.isBatchedMesh&&Le.batching===!0||U.isBatchedMesh&&Le.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&Le.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&Le.instancing===!1||!U.isInstancedMesh&&Le.instancing===!0||U.isSkinnedMesh&&Le.skinning===!1||!U.isSkinnedMesh&&Le.skinning===!0||U.isInstancedMesh&&Le.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&Le.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&Le.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&Le.instancingMorph===!1&&U.morphTexture!==null||Le.envMap!==Pe||G.fog===!0&&Le.fog!==le||Le.numClippingPlanes!==void 0&&(Le.numClippingPlanes!==Z.numPlanes||Le.numIntersection!==Z.numIntersection)||Le.vertexAlphas!==ze||Le.vertexTangents!==He||Le.morphTargets!==be||Le.morphNormals!==ut||Le.morphColors!==vt||Le.toneMapping!==Pt||Le.morphTargetsCount!==at)&&(lt=!0):(lt=!0,Le.__version=G.version);let Hn=Le.currentProgram;lt===!0&&(Hn=Jo(G,I,U));let Br=!1,Sn=!1,rc=!1;const Lt=Hn.getUniforms(),Li=Le.uniforms;if(Ce.useProgram(Hn.program)&&(Br=!0,Sn=!0,rc=!0),G.id!==R&&(R=G.id,Sn=!0),Br||X!==T){qe.reverseDepthBuffer?(he.copy(T.projectionMatrix),aS(he),lS(he),Lt.setValue(b,"projectionMatrix",he)):Lt.setValue(b,"projectionMatrix",T.projectionMatrix),Lt.setValue(b,"viewMatrix",T.matrixWorldInverse);const bn=Lt.map.cameraPosition;bn!==void 0&&bn.setValue(b,Fe.setFromMatrixPosition(T.matrixWorld)),qe.logarithmicDepthBuffer&&Lt.setValue(b,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&Lt.setValue(b,"isOrthographic",T.isOrthographicCamera===!0),X!==T&&(X=T,Sn=!0,rc=!0)}if(U.isSkinnedMesh){Lt.setOptional(b,U,"bindMatrix"),Lt.setOptional(b,U,"bindMatrixInverse");const bn=U.skeleton;bn&&(bn.boneTexture===null&&bn.computeBoneTexture(),Lt.setValue(b,"boneTexture",bn.boneTexture,A))}U.isBatchedMesh&&(Lt.setOptional(b,U,"batchingTexture"),Lt.setValue(b,"batchingTexture",U._matricesTexture,A),Lt.setOptional(b,U,"batchingIdTexture"),Lt.setValue(b,"batchingIdTexture",U._indirectTexture,A),Lt.setOptional(b,U,"batchingColorTexture"),U._colorsTexture!==null&&Lt.setValue(b,"batchingColorTexture",U._colorsTexture,A));const sc=H.morphAttributes;if((sc.position!==void 0||sc.normal!==void 0||sc.color!==void 0)&&ge.update(U,H,Hn),(Sn||Le.receiveShadow!==U.receiveShadow)&&(Le.receiveShadow=U.receiveShadow,Lt.setValue(b,"receiveShadow",U.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Li.envMap.value=Pe,Li.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&I.environment!==null&&(Li.envMapIntensity.value=I.environmentIntensity),Sn&&(Lt.setValue(b,"toneMappingExposure",x.toneMappingExposure),Le.needsLights&&vv(Li,rc),le&&G.fog===!0&&de.refreshFogUniforms(Li,le),de.refreshMaterialUniforms(Li,G,ee,B,m.state.transmissionRenderTarget[T.id]),nl.upload(b,ih(Le),Li,A)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(nl.upload(b,ih(Le),Li,A),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&Lt.setValue(b,"center",U.center),Lt.setValue(b,"modelViewMatrix",U.modelViewMatrix),Lt.setValue(b,"normalMatrix",U.normalMatrix),Lt.setValue(b,"modelMatrix",U.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const bn=G.uniformsGroups;for(let oc=0,xv=bn.length;oc<xv;oc++){const sh=bn[oc];D.update(sh,Hn),D.bind(sh,Hn)}}return Hn}function vv(T,I){T.ambientLightColor.needsUpdate=I,T.lightProbe.needsUpdate=I,T.directionalLights.needsUpdate=I,T.directionalLightShadows.needsUpdate=I,T.pointLights.needsUpdate=I,T.pointLightShadows.needsUpdate=I,T.spotLights.needsUpdate=I,T.spotLightShadows.needsUpdate=I,T.rectAreaLights.needsUpdate=I,T.hemisphereLights.needsUpdate=I}function _v(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,I,H){Ie.get(T.texture).__webglTexture=I,Ie.get(T.depthTexture).__webglTexture=H;const G=Ie.get(T);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||De.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,I){const H=Ie.get(T);H.__webglFramebuffer=I,H.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(T,I=0,H=0){w=T,P=I,C=H;let G=!0,U=null,le=!1,ye=!1;if(T){const Pe=Ie.get(T);if(Pe.__useDefaultFramebuffer!==void 0)Ce.bindFramebuffer(b.FRAMEBUFFER,null),G=!1;else if(Pe.__webglFramebuffer===void 0)A.setupRenderTarget(T);else if(Pe.__hasExternalTextures)A.rebindTextures(T,Ie.get(T.texture).__webglTexture,Ie.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const be=T.depthTexture;if(Pe.__boundDepthTexture!==be){if(be!==null&&Ie.has(be)&&(T.width!==be.image.width||T.height!==be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(T)}}const ze=T.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ye=!0);const He=Ie.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(He[I])?U=He[I][H]:U=He[I],le=!0):T.samples>0&&A.useMultisampledRTT(T)===!1?U=Ie.get(T).__webglMultisampledFramebuffer:Array.isArray(He)?U=He[H]:U=He,y.copy(T.viewport),E.copy(T.scissor),k=T.scissorTest}else y.copy(J).multiplyScalar(ee).floor(),E.copy(se).multiplyScalar(ee).floor(),k=Se;if(Ce.bindFramebuffer(b.FRAMEBUFFER,U)&&G&&Ce.drawBuffers(T,U),Ce.viewport(y),Ce.scissor(E),Ce.setScissorTest(k),le){const Pe=Ie.get(T.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+I,Pe.__webglTexture,H)}else if(ye){const Pe=Ie.get(T.texture),ze=I||0;b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,Pe.__webglTexture,H||0,ze)}R=-1},this.readRenderTargetPixels=function(T,I,H,G,U,le,ye){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){Ce.bindFramebuffer(b.FRAMEBUFFER,Re);try{const Pe=T.texture,ze=Pe.format,He=Pe.type;if(!qe.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!qe.textureTypeReadable(He)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=T.width-G&&H>=0&&H<=T.height-U&&b.readPixels(I,H,G,U,Ee.convert(ze),Ee.convert(He),le)}finally{const Pe=w!==null?Ie.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,Pe)}}},this.readRenderTargetPixelsAsync=async function(T,I,H,G,U,le,ye){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=Ie.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&ye!==void 0&&(Re=Re[ye]),Re){const Pe=T.texture,ze=Pe.format,He=Pe.type;if(!qe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!qe.textureTypeReadable(He))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=T.width-G&&H>=0&&H<=T.height-U){Ce.bindFramebuffer(b.FRAMEBUFFER,Re);const be=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.bufferData(b.PIXEL_PACK_BUFFER,le.byteLength,b.STREAM_READ),b.readPixels(I,H,G,U,Ee.convert(ze),Ee.convert(He),0);const ut=w!==null?Ie.get(w).__webglFramebuffer:null;Ce.bindFramebuffer(b.FRAMEBUFFER,ut);const vt=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await oS(b,vt,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,be),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,le),b.deleteBuffer(be),b.deleteSync(vt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,I=null,H=0){T.isTexture!==!0&&(tl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,T=arguments[1]);const G=Math.pow(2,-H),U=Math.floor(T.image.width*G),le=Math.floor(T.image.height*G),ye=I!==null?I.x:0,Re=I!==null?I.y:0;A.setTexture2D(T,0),b.copyTexSubImage2D(b.TEXTURE_2D,H,0,0,ye,Re,U,le),Ce.unbindTexture()},this.copyTextureToTexture=function(T,I,H=null,G=null,U=0){T.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,T=arguments[1],I=arguments[2],U=arguments[3]||0,H=null);let le,ye,Re,Pe,ze,He;H!==null?(le=H.max.x-H.min.x,ye=H.max.y-H.min.y,Re=H.min.x,Pe=H.min.y):(le=T.image.width,ye=T.image.height,Re=0,Pe=0),G!==null?(ze=G.x,He=G.y):(ze=0,He=0);const be=Ee.convert(I.format),ut=Ee.convert(I.type);A.setTexture2D(I,0),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const vt=b.getParameter(b.UNPACK_ROW_LENGTH),Pt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),yn=b.getParameter(b.UNPACK_SKIP_PIXELS),at=b.getParameter(b.UNPACK_SKIP_ROWS),Le=b.getParameter(b.UNPACK_SKIP_IMAGES),Xt=T.isCompressedTexture?T.mipmaps[U]:T.image;b.pixelStorei(b.UNPACK_ROW_LENGTH,Xt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Xt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Re),b.pixelStorei(b.UNPACK_SKIP_ROWS,Pe),T.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,U,ze,He,le,ye,be,ut,Xt.data):T.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,U,ze,He,Xt.width,Xt.height,be,Xt.data):b.texSubImage2D(b.TEXTURE_2D,U,ze,He,le,ye,be,ut,Xt),b.pixelStorei(b.UNPACK_ROW_LENGTH,vt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Pt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,yn),b.pixelStorei(b.UNPACK_SKIP_ROWS,at),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Le),U===0&&I.generateMipmaps&&b.generateMipmap(b.TEXTURE_2D),Ce.unbindTexture()},this.copyTextureToTexture3D=function(T,I,H=null,G=null,U=0){T.isTexture!==!0&&(tl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,T=arguments[2],I=arguments[3],U=arguments[4]||0);let le,ye,Re,Pe,ze,He,be,ut,vt;const Pt=T.isCompressedTexture?T.mipmaps[U]:T.image;H!==null?(le=H.max.x-H.min.x,ye=H.max.y-H.min.y,Re=H.max.z-H.min.z,Pe=H.min.x,ze=H.min.y,He=H.min.z):(le=Pt.width,ye=Pt.height,Re=Pt.depth,Pe=0,ze=0,He=0),G!==null?(be=G.x,ut=G.y,vt=G.z):(be=0,ut=0,vt=0);const yn=Ee.convert(I.format),at=Ee.convert(I.type);let Le;if(I.isData3DTexture)A.setTexture3D(I,0),Le=b.TEXTURE_3D;else if(I.isDataArrayTexture||I.isCompressedArrayTexture)A.setTexture2DArray(I,0),Le=b.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,I.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,I.unpackAlignment);const Xt=b.getParameter(b.UNPACK_ROW_LENGTH),lt=b.getParameter(b.UNPACK_IMAGE_HEIGHT),Hn=b.getParameter(b.UNPACK_SKIP_PIXELS),Br=b.getParameter(b.UNPACK_SKIP_ROWS),Sn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,Pt.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,Pt.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Pe),b.pixelStorei(b.UNPACK_SKIP_ROWS,ze),b.pixelStorei(b.UNPACK_SKIP_IMAGES,He),T.isDataTexture||T.isData3DTexture?b.texSubImage3D(Le,U,be,ut,vt,le,ye,Re,yn,at,Pt.data):I.isCompressedArrayTexture?b.compressedTexSubImage3D(Le,U,be,ut,vt,le,ye,Re,yn,Pt.data):b.texSubImage3D(Le,U,be,ut,vt,le,ye,Re,yn,at,Pt),b.pixelStorei(b.UNPACK_ROW_LENGTH,Xt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,lt),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Hn),b.pixelStorei(b.UNPACK_SKIP_ROWS,Br),b.pixelStorei(b.UNPACK_SKIP_IMAGES,Sn),U===0&&I.generateMipmaps&&b.generateMipmap(Le),Ce.unbindTexture()},this.initRenderTarget=function(T){Ie.get(T).__webglFramebuffer===void 0&&A.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?A.setTextureCube(T,0):T.isData3DTexture?A.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?A.setTexture2DArray(T,0):A.setTexture2D(T,0),Ce.unbindTexture()},this.resetState=function(){P=0,C=0,w=null,Ce.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===Kf?"display-p3":"srgb",n.unpackColorSpace=ct.workingColorSpace===Kl?"display-p3":"srgb"}}class Vs{constructor(e,n=25e-5){this.isFogExp2=!0,this.name="",this.color=new tt(e),this.density=n}clone(){return new Vs(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Jl extends $t{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new di,this.environmentIntensity=1,this.environmentRotation=new di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class th extends ti{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,d=new nt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=n;h++,f+=3){const g=i+h/n*r;c.x=e*Math.cos(g),c.y=e*Math.sin(g),o.push(c.x,c.y,c.z),a.push(0,0,1),d.x=(o[f]/e+1)/2,d.y=(o[f+1]/e+1)/2,l.push(d.x,d.y)}for(let h=1;h<=n;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new kt(o,3)),this.setAttribute("normal",new kt(a,3)),this.setAttribute("uv",new kt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new th(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class pn extends ti{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const d=[],h=[],f=[],g=[];let p=0;const v=[],m=i/2;let u=0;_(),o===!1&&(e>0&&x(!0),n>0&&x(!1)),this.setIndex(d),this.setAttribute("position",new kt(h,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(g,2));function _(){const S=new N,P=new N;let C=0;const w=(n-e)/i;for(let R=0;R<=s;R++){const X=[],y=R/s,E=y*(n-e)+e;for(let k=0;k<=r;k++){const F=k/r,V=F*l+a,K=Math.sin(V),B=Math.cos(V);P.x=E*K,P.y=-y*i+m,P.z=E*B,h.push(P.x,P.y,P.z),S.set(K,w,B).normalize(),f.push(S.x,S.y,S.z),g.push(F,1-y),X.push(p++)}v.push(X)}for(let R=0;R<r;R++)for(let X=0;X<s;X++){const y=v[X][R],E=v[X+1][R],k=v[X+1][R+1],F=v[X][R+1];e>0&&(d.push(y,E,F),C+=3),n>0&&(d.push(E,k,F),C+=3)}c.addGroup(u,C,0),u+=C}function x(S){const P=p,C=new nt,w=new N;let R=0;const X=S===!0?e:n,y=S===!0?1:-1;for(let k=1;k<=r;k++)h.push(0,m*y,0),f.push(0,y,0),g.push(.5,.5),p++;const E=p;for(let k=0;k<=r;k++){const V=k/r*l+a,K=Math.cos(V),B=Math.sin(V);w.x=X*B,w.y=m*y,w.z=X*K,h.push(w.x,w.y,w.z),f.push(0,y,0),C.x=K*.5+.5,C.y=B*.5*y+.5,g.push(C.x,C.y),p++}for(let k=0;k<r;k++){const F=P+k,V=E+k;S===!0?d.push(V,V+1,F):d.push(V+1,V,F),R+=3}c.addGroup(u,R,S===!0?1:2),u+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Rr extends pn{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new Rr(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Un extends ti{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const d=[],h=new N,f=new N,g=[],p=[],v=[],m=[];for(let u=0;u<=i;u++){const _=[],x=u/i;let S=0;u===0&&o===0?S=.5/n:u===i&&l===Math.PI&&(S=-.5/n);for(let P=0;P<=n;P++){const C=P/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+x*a),h.y=e*Math.cos(o+x*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+x*a),p.push(h.x,h.y,h.z),f.copy(h).normalize(),v.push(f.x,f.y,f.z),m.push(C+S,1-x),_.push(c++)}d.push(_)}for(let u=0;u<i;u++)for(let _=0;_<n;_++){const x=d[u][_+1],S=d[u][_],P=d[u+1][_],C=d[u+1][_+1];(u!==0||o>0)&&g.push(x,S,C),(u!==i-1||l<Math.PI)&&g.push(S,P,C)}this.setIndex(g),this.setAttribute("position",new kt(p,3)),this.setAttribute("normal",new kt(v,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Un(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class zo extends ti{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],d=new N,h=new N,f=new N;for(let g=0;g<=i;g++)for(let p=0;p<=r;p++){const v=p/r*s,m=g/i*Math.PI*2;h.x=(e+n*Math.cos(m))*Math.cos(v),h.y=(e+n*Math.cos(m))*Math.sin(v),h.z=n*Math.sin(m),a.push(h.x,h.y,h.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),f.subVectors(h,d).normalize(),l.push(f.x,f.y,f.z),c.push(p/r),c.push(g/i)}for(let g=1;g<=i;g++)for(let p=1;p<=r;p++){const v=(r+1)*g+p-1,m=(r+1)*(g-1)+p-1,u=(r+1)*(g-1)+p,_=(r+1)*g+p;o.push(v,m,_),o.push(m,u,_)}this.setIndex(o),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(l,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zo(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Me extends Qo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=K0,this.normalScale=new nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ec extends $t{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class tc extends ec{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.groundColor=new tt(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const du=new Et,fm=new N,hm=new N;class mv{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Et,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jf,this._frameExtents=new nt(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;fm.setFromMatrixPosition(e.matrixWorld),n.position.copy(fm),hm.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(hm),n.updateMatrixWorld(),du.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(du),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(du)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const pm=new Et,ro=new N,fu=new N;class _T extends mv{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new nt(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),ro.setFromMatrixPosition(e.matrixWorld),i.position.copy(ro),fu.copy(i.position),fu.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(fu),i.updateMatrixWorld(),r.makeTranslation(-ro.x,-ro.y,-ro.z),pm.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(pm)}}class Nn extends ec{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new _T}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class xT extends mv{constructor(){super(new cv(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Bo extends ec{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy($t.DEFAULT_UP),this.updateMatrix(),this.target=new $t,this.shadow=new xT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class nc extends ec{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const mm=new Et;class ic{constructor(e,n,i=0,r=1/0){this.ray=new tv(e,n),this.near=i,this.far=r,this.camera=null,this.layers=new Qf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(n.near+n.far)/(n.near-n.far)).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):console.error("THREE.Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return mm.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(mm),this}intersectObject(e,n=!0,i=[]){return Yd(e,this,i,n),i.sort(gm),i}intersectObjects(e,n=!0,i=[]){for(let r=0,s=e.length;r<s;r++)Yd(e[r],this,i,n);return i.sort(gm),i}}function gm(t,e){return t.distance-e.distance}function Yd(t,e,n,i){let r=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(r=!1),r===!0&&i===!0){const s=t.children;for(let o=0,a=s.length;o<a;o++)Yd(s[o],e,n,!0)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);function yT(){const t=dt.useRef(null),[e,n]=dt.useState(null),[i,r]=dt.useState(!1),[s,o]=dt.useState(""),a=je(v=>v.streak),l=je(v=>v.unlockedLocations),c=je(v=>v.fogOpacity),d=je(v=>v.cameraShake),h=je(v=>v.hapticEnabled),f=je(v=>v.masteryPoints),g=l.includes("malecon")||l.includes("full_city");dt.useEffect(()=>{if(!t.current||!g)return;let v,m,u,_,x,S,P=[];v=new Jl,v.fog=new Vs(16742970,c*.035),v.background=new tt(16739125),m=new tn(60,window.innerWidth/window.innerHeight,.1,1e3),m.position.set(0,5,15),m.lookAt(0,2,0),u=new Ql({antialias:!0,alpha:!1}),u.setSize(window.innerWidth,window.innerHeight),u.setPixelRatio(Math.min(window.devicePixelRatio,2)),u.shadowMap.enabled=!0,u.shadowMap.type=jo,u.toneMapping=Yo,u.toneMappingExposure=1.5,t.current.appendChild(u.domElement),x=new ic,S=new nt;const C=new nc(16752736,.9);v.add(C);const w=new tc(16765088,9133628,.6);w.position.set(0,10,0),v.add(w);const R=new Bo(16760960,2);R.position.set(-20,15,-10),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.bias=-.001,v.add(R);const X=new Bo(16736304,.8);X.position.set(20,10,5),v.add(X);const y=new Nn(16755312,1.5,30);y.position.set(-15,8,-20),v.add(y);const E=new Nn(16765024,1,8);E.position.set(-8,3,3),v.add(E);const k=new Nn(16765024,1,8);k.position.set(8,3,3),v.add(k);const F=new mt(200,200,50,50),V=new Me({color:2784680,roughness:.15,metalness:.6,transparent:!0,opacity:.9,side:fn}),K=new ne(F,V);K.rotation.x=-Math.PI/2,K.position.y=-.5,K.receiveShadow=!0,v.add(K);const B=F.attributes.position.array,ee=new Ve(30,.3,4),L=new Me({color:10512186,roughness:.6}),q=new ne(ee,L);q.position.set(0,0,3),q.castShadow=!0,q.receiveShadow=!0,v.add(q);for(const Z of[-1.8,1.8]){for(let ge=-14;ge<=14;ge+=2){const pe=new pn(.04,.04,1.2,6),Ae=new Me({color:9133628,roughness:.5}),Ee=new ne(pe,Ae);Ee.position.set(Z,.8,ge+3),Ee.castShadow=!0,v.add(Ee)}const ue=new Ve(.08,.08,28),ve=new ne(ue,postMat);ve.position.set(Z,1.4,3),v.add(ve)}[{x:-12,z:3},{x:-8,z:3},{x:8,z:3},{x:12,z:3},{x:-4,z:8},{x:4,z:8}].forEach((Z,ue)=>{const ve=new pn(.15,.25,4,8),ge=new Me({color:9136970,roughness:.8}),pe=new ne(ve,ge);pe.position.set(Z.x,2,Z.z),pe.castShadow=!0,v.add(pe);for(let Ae=0;Ae<6;Ae++){const Ee=new Rr(.6,2.5,4),rt=new Me({color:3978097,roughness:.6,emissive:1725744,emissiveIntensity:.2}),D=new ne(Ee,rt),fe=Ae/6*Math.PI*2;D.position.set(Z.x+Math.cos(fe)*.8,4+Math.sin(fe*.3)*.2,Z.z+Math.sin(fe)*.8),D.rotation.z=Math.cos(fe)*.5,D.rotation.x=Math.sin(fe)*.5,D.castShadow=!0,v.add(D)}});const se=new Un(3.5,32,32),Se=new ci({color:16747586,transparent:!0,opacity:.95}),Ne=new ne(se,Se);Ne.position.set(-15,3,-40),v.add(Ne);const W=new Un(5.5,32,32),ie=new ci({color:16764023,transparent:!0,opacity:.4}),he=new ne(W,ie);he.position.copy(Ne.position),v.add(he);const me=new Un(8,32,32),Fe=new ci({color:16757575,transparent:!0,opacity:.15}),Te=new ne(me,Fe);Te.position.copy(Ne.position),v.add(Te);const Ge=new Ve(2,.5,.8),Qe=new Me({color:6974058,roughness:.4,metalness:.3}),Ue=new ne(Ge,Qe);Ue.position.set(-3,.5,2),Ue.castShadow=!0,Ue.receiveShadow=!0,Ue.userData={practicePhrase:"I sit on the bench and watch the sunset",phoneticFocus:"TH in 'the', CH in 'watch'",emoji:"🪑",name:"Bench",color:6974058},v.add(Ue),P.push(Ue);for(const[Z,ue]of[[-.8,-.3],[.8,-.3],[-.8,.3],[.8,.3]]){const ve=new Ve(.08,.5,.08),ge=new ne(ve,Qe);ge.position.set(-3+Z,.25,2+ue),v.add(ge)}const b=new Rr(.8,2,4),wt=new Me({color:15237662,roughness:.4,metalness:.2}),De=new ne(b,wt);De.rotation.z=Math.PI/2,De.position.set(5,.2,-5),De.castShadow=!0,De.userData={practicePhrase:"The boat sails across the calm water",phoneticFocus:"TH in 'the', R in 'across'",emoji:"⛵",name:"Boat",color:15237662},v.add(De),P.push(De);const qe=new Rr(.6,1.5,3),Ce=new Me({color:16775920,roughness:.7,side:fn}),We=new ne(qe,Ce);We.position.set(5,1.2,-5),We.castShadow=!0,v.add(We);const Ie=new Un(.3,8,8),A=new Me({color:16777215,roughness:.3,emissive:4473924,emissiveIntensity:.1}),M=new ne(Ie,A);M.position.set(-2,6,-10),M.castShadow=!0,M.userData={practicePhrase:"The seagull flies over the ocean",phoneticFocus:"TH in 'the', L in 'flies'",emoji:"🦅",name:"Seagull",color:16777215},v.add(M),P.push(M);const O=new Rr(.5,1.2,3),j=new Me({color:16119285,roughness:.3}),te=new ne(O,j);te.position.set(-2.4,6,-10),te.rotation.z=.3,v.add(te);const $=new ne(O,j);$.position.set(-1.6,6,-10),$.rotation.z=-.3,v.add($);for(const Z of[-10,-5,5,10]){const ue=new pn(.05,.05,3,6),ve=new Me({color:3815994,roughness:.4,metalness:.6}),ge=new ne(ue,ve);ge.position.set(Z,1.5,4.5),ge.castShadow=!0,v.add(ge);const pe=new Un(.15,8,8),Ae=new Me({color:16769120,emissive:16764992,emissiveIntensity:.8}),Ee=new ne(pe,Ae);Ee.position.set(Z,3,4.5),v.add(Ee)}let ce=0;const de=()=>{_=requestAnimationFrame(de),ce+=.016;for(let Z=0;Z<B.length;Z+=3){const ue=B[Z],ve=B[Z+1];B[Z+2]=Math.sin(ue*.1+ce)*.15+Math.cos(ve*.1+ce*.7)*.1}F.attributes.position.needsUpdate=!0,F.computeVertexNormals(),he.scale.setScalar(1+Math.sin(ce*.5)*.05),Te.scale.setScalar(1+Math.sin(ce*.3)*.08),Se.opacity=.9+Math.sin(ce*.4)*.05,M.position.y=6+Math.sin(ce*.8)*.5,M.position.x=-2+Math.sin(ce*.3)*2,te.rotation.z=.3+Math.sin(ce*4)*.3,$.rotation.z=-.3-Math.sin(ce*4)*.3,De.position.y=.2+Math.sin(ce*1.2)*.1,De.rotation.z=Math.PI/2+Math.sin(ce*.8)*.05,We.position.y=1.2+Math.sin(ce*1.2)*.1,d>0?(m.position.x=(Math.random()-.5)*d*.1,m.position.y=5+(Math.random()-.5)*d*.1):(m.position.x=Math.sin(ce*.1)*.5,m.position.y=5+Math.sin(ce*.15)*.3),m.lookAt(0,2,0),v.fog.density=c*.035,u.render(v,m)};de();const xe=Z=>{const ue=u.domElement.getBoundingClientRect();S.x=(Z.clientX-ue.left)/ue.width*2-1,S.y=-((Z.clientY-ue.top)/ue.height)*2+1,x.setFromCamera(S,m);const ve=x.intersectObjects(P);if(ve.length>0){const ge=ve[0].object,pe=ge.userData;if(!pe.practicePhrase)return;if(n(pe),o(""),h&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const Ae=new SpeechSynthesisUtterance(pe.practicePhrase);Ae.lang="en-US",Ae.rate=.85,speechSynthesis.speak(Ae)}P.forEach(Ae=>{Ae.material&&Ae.material.emissive&&Ae.material.emissive.setHex(0)}),ge.material&&ge.material.emissive&&ge.material.emissive.setHex(4460800)}};u.domElement.addEventListener("click",xe);const ke=()=>{m.aspect=window.innerWidth/window.innerHeight,m.updateProjectionMatrix(),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",ke),()=>{cancelAnimationFrame(_),window.removeEventListener("resize",ke),u.domElement.removeEventListener("click",xe),t.current&&u.domElement&&t.current.removeChild(u.domElement),u.dispose()}},[g,c,d,h]);const p=()=>{if(!e||!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const v=window.SpeechRecognition||window.webkitSpeechRecognition,m=new v;m.lang="en-US",m.continuous=!1,m.interimResults=!1,m.onresult=u=>{const _=u.results[0][0].transcript.toLowerCase(),x=u.results[0][0].confidence,P=e.practicePhrase.toLowerCase().split(" "),C=_.split(" ");let w=0;for(const X of C)P.includes(X)&&w++;const R=Math.min(100,Math.round(w/P.length*100));R>=85&&x>.7?(o(`🔥 ${R}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),je.getState().recordSession(R,!0)):R>=60?(o(`💪 ${R}% — Good effort! Focus on: ${e.phoneticFocus}`),je.getState().recordSession(R,!1)):o(`📖 ${R}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},m.onerror=()=>{o("Could not hear you. Try again."),r(!1)},m.onend=()=>r(!1),m.start()};return g?Q.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Q.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),Q.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[Q.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"🌅 Malecón"}),Q.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",f," pts"]})]}),e&&Q.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[Q.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),Q.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),Q.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),Q.jsx("button",{onClick:p,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&Q.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]}):Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #1a1a2e 0%, #16213e 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🌅"}),Q.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"10px"},children:"Malecón — Locked"}),Q.jsxs("p",{style:{fontSize:"1rem",opacity:.7},children:["Reach a ",10," day streak to unlock the Malecón"]}),Q.jsxs("p",{style:{fontSize:"2rem",marginTop:"20px"},children:["Current streak: ",a," 🔥"]}),Q.jsxs("p",{style:{fontSize:"0.9rem",opacity:.5,marginTop:"15px"},children:[10-a," more days to unlock"]})]})}function vm(){const t=dt.useRef(null),[e,n]=dt.useState(null),[i,r]=dt.useState(!1),[s,o]=dt.useState(""),a=je(p=>p.streak),l=je(p=>p.unlockedLocations),c=je(p=>p.cameraShake),d=je(p=>p.hapticEnabled),h=je(p=>p.masteryPoints),f=l.includes("home");dt.useEffect(()=>{if(!t.current||!f)return;let p,v,m,u,_,x,S=[],P=[];p=new Jl,p.fog=new Vs(3811872,.012),p.background=new tt(2759184),v=new tn(60,window.innerWidth/window.innerHeight,.1,100),v.position.set(0,4,12),v.lookAt(0,2,0),m=new Ql({antialias:!0,alpha:!1}),m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=jo,m.toneMapping=Yo,m.toneMappingExposure=1.4,t.current.appendChild(m.domElement),_=new ic,x=new nt;const C=new nc(16757632,.7);p.add(C);const w=new tc(16766624,7029286,.5);w.position.set(0,8,0),p.add(w);const R=new Nn(16760960,2.5,25);R.position.set(0,6.5,0),R.castShadow=!0,R.shadow.mapSize.width=2048,R.shadow.mapSize.height=2048,R.shadow.bias=-.001,p.add(R);const X=new Nn(16765072,1.5,20);X.position.set(5,6.5,2),p.add(X);const y=new Nn(16756848,1.5,20);y.position.set(-5,6.5,2),p.add(y);const E=new Nn(16733440,2,10);E.position.set(-5,1.5,-3),p.add(E);const k=new Nn(16769120,1.5,8);k.position.set(4,3,2),p.add(k);const F=new Bo(16746581,.8);F.position.set(0,4,-10),p.add(F);const V=new mt(20,20),K=new Me({color:9133628,roughness:.7,metalness:.1}),B=new ne(V,K);B.rotation.x=-Math.PI/2,B.position.y=0,B.receiveShadow=!0,p.add(B);const ee=new Me({color:7032378,side:fn,roughness:.9}),L=new mt(20,8),q=new ne(L,ee);q.position.set(0,4,-8),q.receiveShadow=!0,p.add(q);const J=new mt(20,8),se=new ne(J,ee);se.position.set(-10,4,0),se.rotation.y=Math.PI/2,se.receiveShadow=!0,p.add(se);const Se=new mt(20,8),Ne=new ne(Se,ee);Ne.position.set(10,4,0),Ne.rotation.y=-Math.PI/2,Ne.receiveShadow=!0,p.add(Ne);const W=new mt(20,20),ie=new Me({color:4863272,side:fn,roughness:1}),he=new ne(W,ie);he.position.set(0,8,0),he.rotation.x=Math.PI/2,p.add(he);const me=new th(4,32),Fe=new Me({color:12597547,roughness:.8}),Te=new ne(me,Fe);Te.rotation.x=-Math.PI/2,Te.position.set(0,.02,0),Te.receiveShadow=!0,p.add(Te);const Ge=new Ve(3,4,1),Qe=new Me({color:5921370,roughness:.6}),Ue=new ne(Ge,Qe);Ue.position.set(-5,2,-7.8),Ue.castShadow=!0,Ue.receiveShadow=!0,p.add(Ue);const b=new Ve(2,1.5,.5),wt=new ci({color:16746496}),De=new ne(b,wt);De.position.set(-5,1.5,-7.3),p.add(De);for(let Ye=0;Ye<40;Ye++){const Xe=new Un(.1,6,6),et=new ci({color:Ye%3===0?16733440:16763904,transparent:!0,opacity:.9}),$e=new ne(Xe,et);$e.position.set(-5+(Math.random()-.5)*1.5,1.5+Math.random()*.5,-7.2),$e.userData={vy:.02+Math.random()*.03,vx:(Math.random()-.5)*.01,life:1,decay:.004+Math.random()*.004},p.add($e),P.push($e)}const qe=new Ve(1.2,.15,1.2),Ce=new Me({color:10512186,roughness:.6}),We=new ne(qe,Ce);We.position.set(3,.6,2),We.castShadow=!0,We.receiveShadow=!0,p.add(We);const Ie=new Ve(1.2,1.2,.15),A=new ne(Ie,Ce);A.position.set(3,1.2,2.5),A.castShadow=!0,p.add(A);for(const[Ye,Xe]of[[-.5,-.5],[.5,-.5],[-.5,.5],[.5,.5]]){const et=new Ve(.1,.6,.1),$e=new ne(et,Ce);$e.position.set(3+Ye,.3,2+Xe),$e.castShadow=!0,p.add($e)}We.userData={practicePhrase:"I sit on the chair and read a book",phoneticFocus:"CH in 'chair', R in 'read'",emoji:"🪑",name:"Chair",color:10512186},A.userData=We.userData,S.push(We,A);const M=new Ve(2.5,.15,1.5),O=new Me({color:8015658,roughness:.5}),j=new ne(M,O);j.position.set(0,1.5,-1),j.castShadow=!0,j.receiveShadow=!0,p.add(j);for(const[Ye,Xe]of[[-1.1,-.6],[1.1,-.6],[-1.1,.6],[1.1,.6]]){const et=new Ve(.12,1.5,.12),$e=new ne(et,O);$e.position.set(Ye,.75,-1+Xe),$e.castShadow=!0,p.add($e)}j.userData={practicePhrase:"I eat breakfast at the table every morning",phoneticFocus:"EA in 'breakfast', T in 'table'",emoji:"🍽️",name:"Table",color:8015658},S.push(j);const te=new Ve(2,1.2,.1),$=new Me({color:1118481,emissive:2254591,emissiveIntensity:.6,roughness:.3}),ce=new ne(te,$);ce.position.set(5,3,-7.7),ce.castShadow=!0,p.add(ce);const de=new Ve(2.5,1.5,.8),xe=new Me({color:3815994,roughness:.4}),ke=new ne(de,xe);ke.position.set(5,.75,-7.5),ke.castShadow=!0,p.add(ke),ce.userData={practicePhrase:"I watch TV after dinner",phoneticFocus:"W in 'watch', T in 'after'",emoji:"📺",name:"TV",color:1118481},S.push(ce);const Z=new Ve(2,4,.8),ue=new Me({color:7030064,roughness:.6}),ve=new ne(Z,ue);ve.position.set(-8,2,-3),ve.rotation.y=Math.PI/2,ve.castShadow=!0,ve.receiveShadow=!0,p.add(ve);const ge=[16737894,6711039,6750054,16777062,16738047,6750207,16750916];for(let Ye=0;Ye<4;Ye++)for(let Xe=0;Xe<5;Xe++){const et=new Ve(.3,.6,.5),$e=new Me({color:ge[(Ye*5+Xe)%ge.length],roughness:.4,emissive:ge[(Ye*5+Xe)%ge.length],emissiveIntensity:.15}),pt=new ne(et,$e);pt.position.set(-8+(Xe-2)*.35,.8+Ye*.9,-2.5),pt.castShadow=!0,p.add(pt)}ve.userData={practicePhrase:"The bookshelf is full of stories",phoneticFocus:"TH in 'the', F in 'full'",emoji:"📚",name:"Bookshelf",color:7030064},S.push(ve);const pe=new Ve(1.5,2.5,.1),Ae=new Me({color:14329120,roughness:.2,metalness:.8}),Ee=new ne(pe,Ae);Ee.position.set(8,3,2),Ee.rotation.y=-Math.PI/2,Ee.castShadow=!0,p.add(Ee);const rt=new mt(1.3,2.3),D=new Me({color:8965375,emissive:3368601,emissiveIntensity:.4,shininess:120,metalness:.9,roughness:.1}),fe=new ne(rt,D);fe.position.set(7.95,3,2),fe.rotation.y=-Math.PI/2,p.add(fe),Ee.userData={practicePhrase:"I look in the mirror and practice my accent",phoneticFocus:"L in 'look', R in 'mirror'",emoji:"🪞",name:"Mirror",color:14329120},S.push(Ee);const z=new mt(2.5,2.5),Y=new ci({color:16742970,transparent:!0,opacity:.8}),ae=new ne(z,Y);ae.position.set(0,4,-7.9),p.add(ae);const re=new pn(.4,.3,.8,12),Oe=new Me({color:13395507,roughness:.5}),Je=new ne(re,Oe);Je.position.set(-3,.4,5),Je.castShadow=!0,p.add(Je);for(let Ye=0;Ye<8;Ye++){const Xe=new Un(.3,8,6),et=new Me({color:4885034,roughness:.7}),$e=new ne(Xe,et),pt=Ye/8*Math.PI*2;$e.position.set(-3+Math.cos(pt)*.3,1.1+Math.sin(Ye)*.2,5+Math.sin(pt)*.3),$e.scale.y=1.5,$e.castShadow=!0,p.add($e)}let ot=0;const Be=()=>{u=requestAnimationFrame(Be),ot+=.016,P.forEach(Ye=>{Ye.position.y+=Ye.userData.vy,Ye.position.x+=Ye.userData.vx,Ye.userData.life-=Ye.userData.decay,Ye.material.opacity=Ye.userData.life,Ye.userData.life<=0&&(Ye.position.set(-5+(Math.random()-.5)*1.5,1.5,-7.2),Ye.userData.life=1)}),E.intensity=1.8+Math.sin(ot*8)*.4+Math.random()*.3,$.emissiveIntensity=.5+Math.sin(ot*3)*.15,D.emissiveIntensity=.3+Math.sin(ot*2)*.1,c>0?(v.position.x=(Math.random()-.5)*c*.1,v.position.y=4+(Math.random()-.5)*c*.1):(v.position.x=Math.sin(ot*.08)*.8,v.position.y=4+Math.sin(ot*.12)*.3),v.position.z=12,v.lookAt(0,2,0),m.render(p,v)};Be();const St=Ye=>{const Xe=m.domElement.getBoundingClientRect();x.x=(Ye.clientX-Xe.left)/Xe.width*2-1,x.y=-((Ye.clientY-Xe.top)/Xe.height)*2+1,_.setFromCamera(x,v);const et=_.intersectObjects(S);if(et.length>0){const $e=et[0].object,pt=$e.userData;if(!pt.practicePhrase)return;if(n(pt),o(""),d&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const Tt=new SpeechSynthesisUtterance(pt.practicePhrase);Tt.lang="en-US",Tt.rate=.85,speechSynthesis.speak(Tt)}S.forEach(Tt=>{Tt.material&&Tt.material.emissive&&Tt.material.emissive.setHex(0)}),$e.material&&$e.material.emissive&&$e.material.emissive.setHex(4460817)}};m.domElement.addEventListener("click",St);const Wt=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Wt),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",Wt),m.domElement.removeEventListener("click",St),t.current&&m.domElement&&t.current.removeChild(m.domElement),m.dispose()}},[f,c,d]);const g=()=>{if(!e)return;if(!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const p=window.SpeechRecognition||window.webkitSpeechRecognition,v=new p;v.lang="en-US",v.continuous=!1,v.interimResults=!1,v.onresult=m=>{const u=m.results[0][0].transcript.toLowerCase(),_=m.results[0][0].confidence,S=e.practicePhrase.toLowerCase().split(" "),P=u.split(" ");let C=0;for(const R of P)S.includes(R)&&C++;const w=Math.min(100,Math.round(C/S.length*100));w>=85&&_>.7?(o(`🔥 ${w}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),je.getState().recordSession(w,!0)):w>=60?(o(`💪 ${w}% — Good effort! Focus on: ${e.phoneticFocus}`),je.getState().recordSession(w,!1)):o(`📖 ${w}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},v.onerror=()=>{o("Could not hear you. Try again."),r(!1)},v.onend=()=>r(!1),v.start()};return Q.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Q.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),Q.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[Q.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"🏠 Home"}),Q.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",h," pts"]})]}),Q.jsx("div",{style:{position:"absolute",top:"20px",right:"20px",display:"flex",gap:"8px",fontFamily:"sans-serif"},children:je.getState().getUnlockProgress().map(p=>Q.jsx("button",{onClick:()=>{if(p.unlocked){const v={1:"home",3:"school",5:"gym",7:"cafeteria",10:"malecon",14:"forum",21:"centro",30:"full_city"};je.getState().navigateTo(v[p.day])}},style:{fontSize:"1.5rem",padding:"8px 12px",borderRadius:"10px",border:p.unlocked?"1px solid rgba(255,107,53,0.4)":"1px solid rgba(100,100,100,0.2)",background:p.unlocked?"rgba(255,107,53,0.15)":"rgba(50,50,50,0.3)",cursor:p.unlocked?"pointer":"not-allowed",opacity:p.unlocked?1:.4,filter:p.unlocked?"none":"grayscale(1)",transition:"all 0.3s"},title:p.unlocked?p.location:`Unlocks at Day ${p.day} (${p.daysRemaining} days left)`,children:p.emoji},p.day))}),e&&Q.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[Q.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),Q.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),Q.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),Q.jsx("button",{onClick:g,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&Q.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]})}function ST(){const t=dt.useRef(null),[e,n]=dt.useState(null),[i,r]=dt.useState(!1),[s,o]=dt.useState(""),a=je(p=>p.streak),l=je(p=>p.unlockedLocations),c=je(p=>p.cameraShake),d=je(p=>p.hapticEnabled),h=je(p=>p.masteryPoints),f=l.includes("school")||l.includes("full_city");dt.useEffect(()=>{if(!t.current||!f)return;let p,v,m,u,_,x,S=[];p=new Jl,p.fog=new Vs(3820122,.015),p.background=new tt(2767434),v=new tn(60,window.innerWidth/window.innerHeight,.1,100),v.position.set(0,4.5,12),v.lookAt(0,2,0),m=new Ql({antialias:!0,alpha:!1}),m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=jo,m.toneMapping=Yo,m.toneMappingExposure=1.4,t.current.appendChild(m.domElement),_=new ic,x=new nt;const P=new nc(13426175,.8);p.add(P);const C=new tc(14544639,9083562,.5);C.position.set(0,8,0),p.add(C);for(const z of[-4,0,4]){const Y=new Nn(16777215,1.8,15);Y.position.set(z,7,0),p.add(Y);const ae=new Ve(2.5,.1,.3),re=new Me({color:16777215,emissive:16777215,emissiveIntensity:.9,roughness:.3}),Oe=new ne(ae,re);Oe.position.set(z,7.5,0),p.add(Oe)}const w=new Bo(11588863,.8);w.position.set(-15,4,5),w.castShadow=!0,w.shadow.mapSize.width=2048,w.shadow.mapSize.height=2048,w.shadow.bias=-.001,p.add(w);const R=new mt(20,20),X=new Me({color:10136224,roughness:.3,metalness:.1}),y=new ne(R,X);y.rotation.x=-Math.PI/2,y.position.y=0,y.receiveShadow=!0,p.add(y);const E=new Me({color:6986426,roughness:.9}),k=new ne(new mt(20,8),E);k.position.set(0,4,-8),k.receiveShadow=!0,p.add(k);const F=new ne(new mt(20,8),E);F.position.set(-10,4,0),F.rotation.y=Math.PI/2,F.receiveShadow=!0,p.add(F);const V=new ne(new mt(20,8),E);V.position.set(10,4,0),V.rotation.y=-Math.PI/2,V.receiveShadow=!0,p.add(V);const K=new ne(new mt(20,20),new Me({color:15263976,roughness:1}));K.position.set(0,8,0),K.rotation.x=Math.PI/2,p.add(K);for(let z=0;z<3;z++){const Y=new mt(3,3.5),ae=new ci({color:8962303,transparent:!0,opacity:.7}),re=new ne(Y,ae);re.position.set(-9.9,4,-4+z*4),re.rotation.y=Math.PI/2,p.add(re);const Oe=new Ve(.1,4,4),Je=new Me({color:16777215,roughness:.4}),ot=new ne(Oe,Je);ot.position.set(-9.8,4,-4+z*4),p.add(ot)}const B=new Ve(4,2.5,.1),ee=new Me({color:16316664,roughness:.2,emissive:4473924,emissiveIntensity:.1}),L=new ne(B,ee);L.position.set(0,4,-7.85),L.receiveShadow=!0,L.castShadow=!0,p.add(L);const q=new Ve(4.3,2.8,.15),J=new Me({color:2763306,roughness:.4}),se=new ne(q,J);se.position.set(0,4,-7.9),p.add(se);for(let z=0;z<3;z++){const Y=new Ve(2.5,.05,.02),ae=new ci({color:2245802}),re=new ne(Y,ae);re.position.set(0,4.8-z*.6,-7.78),p.add(re)}L.userData={practicePhrase:"The teacher writes on the whiteboard",phoneticFocus:"TH in 'the', W in 'writes'",emoji:"📋",name:"Whiteboard",color:16316664},S.push(L);const Se=new Ve(2,.1,1.2),Ne=new Me({color:12623984,roughness:.5}),W=new ne(Se,Ne);W.position.set(-3,1.8,1),W.castShadow=!0,W.receiveShadow=!0,p.add(W);for(const[z,Y]of[[-.9,-.5],[.9,-.5],[-.9,.5],[.9,.5]]){const ae=new Ve(.08,1.8,.08),re=new ne(ae,Ne);re.position.set(-3+z,.9,1+Y),re.castShadow=!0,p.add(re)}const ie=new Ve(.8,.05,.6),he=new Me({color:2245802,roughness:.4}),me=new ne(ie,he);me.position.set(-3.3,1.9,1),me.castShadow=!0,p.add(me),W.userData={practicePhrase:"I sit at my desk and study English",phoneticFocus:"S in 'sit', ST in 'study'",emoji:"📖",name:"Desk",color:12623984},S.push(W);const Fe=new Ve(.9,1.1,.5),Te=new Me({color:13911344,roughness:.6}),Ge=new ne(Fe,Te);Ge.position.set(3,.55,3),Ge.castShadow=!0,Ge.userData={practicePhrase:"My backpack is heavy with books today",phoneticFocus:"B in 'backpack', H in 'heavy'",emoji:"🎒",name:"Backpack",color:13911344},p.add(Ge),S.push(Ge);const Qe=new zo(.15,.03,8,16,Math.PI),Ue=new Me({color:9121824,roughness:.5}),b=new ne(Qe,Ue);b.position.set(2.7,.8,3.25),b.rotation.x=Math.PI/2,p.add(b);const wt=new ne(Qe,Ue);wt.position.set(3.3,.8,3.25),wt.rotation.x=Math.PI/2,p.add(wt);const De=new pn(.04,.04,1.2,8),qe=new Me({color:16766720,roughness:.3,metalness:.3}),Ce=new ne(De,qe);Ce.rotation.z=Math.PI/2,Ce.position.set(-2.5,1.9,1.2),Ce.castShadow=!0,Ce.userData={practicePhrase:"I write with a pencil in my notebook",phoneticFocus:"R in 'write', P in 'pencil'",emoji:"🖊️",name:"Pencil",color:16766720},p.add(Ce),S.push(Ce);const We=new Rr(.04,.15,8),Ie=new Me({color:9127187}),A=new ne(We,Ie);A.rotation.z=-Math.PI/2,A.position.set(-1.9,1.9,1.2),p.add(A);const M=new Un(.35,16,16,0,Math.PI*2,0,Math.PI/2),O=new Me({color:13408563,roughness:.2,metalness:.8}),j=new ne(M,O);j.position.set(6,5,-7.6),j.castShadow=!0,j.userData={practicePhrase:"The bell rings when class is over",phoneticFocus:"TH in 'the', L in 'bell'",emoji:"🔔",name:"Bell",color:13408563},p.add(j),S.push(j);for(let z=0;z<4;z++){const Y=2+z*2.5,ae=new Ve(.8,.08,.8),re=new Me({color:4876938,roughness:.5}),Oe=new ne(ae,re);Oe.position.set(Y,1.2,3.5),Oe.castShadow=!0,p.add(Oe);const Je=new Ve(.8,.8,.08),ot=new ne(Je,re);ot.position.set(Y,1.6,3.9),ot.castShadow=!0,p.add(ot);for(const[Wt,Ye]of[[-.35,-.35],[.35,-.35],[-.35,.35],[.35,.35]]){const Xe=new Ve(.06,1.2,.06),et=new ne(Xe,re);et.position.set(Y+Wt,.6,3.5+Ye),p.add(et)}const Be=new Ve(.8,.06,.4),St=new ne(Be,Ne);St.position.set(Y,1.7,3.1),St.castShadow=!0,p.add(St)}const te=new pn(.05,.15,.4,12),$=new Me({color:2763306,roughness:.3,metalness:.7}),ce=new ne(te,$);ce.position.set(-7,.2,-5),p.add(ce);const de=new Un(.5,24,24),xe=new Me({color:2254506,roughness:.4,emissive:1127253,emissiveIntensity:.2}),ke=new ne(de,xe);ke.position.set(-7,.9,-5),ke.castShadow=!0,ke.userData={isGlobe:!0},p.add(ke);const Z=new pn(.03,.03,5,8),ue=new Me({color:9079434,metalness:.8,roughness:.2}),ve=new ne(Z,ue);ve.position.set(7,2.5,-5),ve.castShadow=!0,p.add(ve);const ge=new mt(1.5,1),pe=new Me({color:4500036,side:fn,roughness:.6}),Ae=new ne(ge,pe);Ae.position.set(7.75,4,-5),Ae.userData={isFlag:!0},p.add(Ae);let Ee=0;const rt=()=>{u=requestAnimationFrame(rt),Ee+=.016,ke.rotation.y+=.005,Ae.rotation.z=Math.sin(Ee*2)*.05,Ae.position.x=7.75+Math.sin(Ee*2)*.05,c>0?(v.position.x=(Math.random()-.5)*c*.1,v.position.y=4.5+(Math.random()-.5)*c*.1):(v.position.x=Math.sin(Ee*.08)*.6,v.position.y=4.5+Math.sin(Ee*.12)*.2),v.position.z=12,v.lookAt(0,2,0),m.render(p,v)};rt();const D=z=>{const Y=m.domElement.getBoundingClientRect();x.x=(z.clientX-Y.left)/Y.width*2-1,x.y=-((z.clientY-Y.top)/Y.height)*2+1,_.setFromCamera(x,v);const ae=_.intersectObjects(S);if(ae.length>0){const re=ae[0].object,Oe=re.userData;if(!Oe.practicePhrase)return;if(n(Oe),o(""),d&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const Je=new SpeechSynthesisUtterance(Oe.practicePhrase);Je.lang="en-US",Je.rate=.85,speechSynthesis.speak(Je)}S.forEach(Je=>{Je.material&&Je.material.emissive&&Je.material.emissive.setHex(0)}),re.material&&re.material.emissive&&re.material.emissive.setHex(4460817)}};m.domElement.addEventListener("click",D);const fe=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",fe),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",fe),m.domElement.removeEventListener("click",D),t.current&&m.domElement&&t.current.removeChild(m.domElement),m.dispose()}},[f,c,d]);const g=()=>{if(!e||!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const p=window.SpeechRecognition||window.webkitSpeechRecognition,v=new p;v.lang="en-US",v.continuous=!1,v.interimResults=!1,v.onresult=m=>{const u=m.results[0][0].transcript.toLowerCase(),_=m.results[0][0].confidence,S=e.practicePhrase.toLowerCase().split(" "),P=u.split(" ");let C=0;for(const R of P)S.includes(R)&&C++;const w=Math.min(100,Math.round(C/S.length*100));w>=85&&_>.7?(o(`🔥 ${w}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),je.getState().recordSession(w,!0)):w>=60?(o(`💪 ${w}% — Good effort! Focus on: ${e.phoneticFocus}`),je.getState().recordSession(w,!1)):o(`📖 ${w}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},v.onerror=()=>{o("Could not hear you. Try again."),r(!1)},v.onend=()=>r(!1),v.start()};return f?Q.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Q.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),Q.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[Q.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"🏫 School"}),Q.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",h," pts"]})]}),e&&Q.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[Q.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),Q.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),Q.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),Q.jsx("button",{onClick:g,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&Q.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]}):Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #1e3a5f 0%, #2c3e50 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🏫"}),Q.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"10px"},children:"School — Locked"}),Q.jsx("p",{style:{fontSize:"1rem",opacity:.7},children:"Reach a 3 day streak to unlock School"}),Q.jsxs("p",{style:{fontSize:"2rem",marginTop:"20px"},children:["Current streak: ",a," 🔥"]}),Q.jsxs("p",{style:{fontSize:"0.9rem",opacity:.5,marginTop:"15px"},children:[Math.max(0,3-a)," more days to unlock"]})]})}function MT(){const t=dt.useRef(null),[e,n]=dt.useState(null),[i,r]=dt.useState(!1),[s,o]=dt.useState(""),a=je(p=>p.streak),l=je(p=>p.unlockedLocations),c=je(p=>p.cameraShake),d=je(p=>p.hapticEnabled),h=je(p=>p.masteryPoints),f=l.includes("gym")||l.includes("full_city");dt.useEffect(()=>{if(!t.current||!f)return;let p,v,m,u,_,x,S=[];p=new Jl,p.fog=new Vs(2767418,.015),p.background=new tt(1714730),v=new tn(60,window.innerWidth/window.innerHeight,.1,100),v.position.set(0,4.5,13),v.lookAt(0,2,0),m=new Ql({antialias:!0,alpha:!1}),m.setSize(window.innerWidth,window.innerHeight),m.setPixelRatio(Math.min(window.devicePixelRatio,2)),m.shadowMap.enabled=!0,m.shadowMap.type=jo,m.toneMapping=Yo,m.toneMappingExposure=1.4,t.current.appendChild(m.domElement),_=new ic,x=new nt;const P=new nc(14544639,.8);p.add(P);const C=new tc(13430527,4868682,.5);C.position.set(0,8,0),p.add(C);for(const[Xe,et]of[[-4,-3],[4,-3],[-4,3],[4,3]]){const $e=new Nn(16777215,2,12);$e.position.set(Xe,6.5,et),p.add($e);const pt=new Ve(2.5,.08,2.5),Tt=new Me({color:16777215,emissive:16777215,emissiveIntensity:.9,roughness:.2}),It=new ne(pt,Tt);It.position.set(Xe,7,et),p.add(It)}const w=new Nn(16739125,.6,15);w.position.set(-9,3,0),p.add(w);const R=new Nn(3907327,.6,15);R.position.set(9,3,0),p.add(R);const X=new Bo(16777215,.5);X.position.set(0,10,10),p.add(X);const y=new mt(20,20),E=new Me({color:3815994,roughness:.8,metalness:.1}),k=new ne(y,E);k.rotation.x=-Math.PI/2,k.receiveShadow=!0,p.add(k);for(const[Xe,et,$e]of[[0,-5,16739125],[0,5,3907327]]){const pt=new mt(16,.15),Tt=new Me({color:$e,emissive:$e,emissiveIntensity:.5,roughness:.3}),It=new ne(pt,Tt);It.rotation.x=-Math.PI/2,It.position.set(Xe,.02,et),p.add(It)}const F=new Me({color:4871520,roughness:.9}),V=new ne(new mt(20,8),F);V.position.set(0,4,-8),V.receiveShadow=!0,p.add(V);const K=new ne(new mt(20,8),F);K.position.set(-10,4,0),K.rotation.y=Math.PI/2,K.receiveShadow=!0,p.add(K);const B=new ne(new mt(20,8),F);B.position.set(10,4,0),B.rotation.y=-Math.PI/2,B.receiveShadow=!0,p.add(B);const ee=new Ve(16,.2,.05),L=new Me({color:16739125,emissive:16739125,emissiveIntensity:.8}),q=new ne(ee,L);q.position.set(0,5,-7.95),p.add(q);const J=new ne(new Ve(16,.2,.05),new Me({color:3907327,emissive:3907327,emissiveIntensity:.8}));J.position.set(-9.95,3,0),J.rotation.y=Math.PI/2,p.add(J);const se=new ne(new mt(20,20),new Me({color:3815994,roughness:1}));se.position.set(0,8,0),se.rotation.x=Math.PI/2,p.add(se);const Se=new uo,Ne=new pn(.06,.06,1.8,12),W=new Me({color:8947848,roughness:.2,metalness:.9}),ie=new ne(Ne,W);ie.rotation.z=Math.PI/2,ie.position.y=0,Se.add(ie);for(const Xe of[-.7,.7])for(const et of[0,.15]){const $e=new pn(.35,.35,.12,16),pt=new Me({color:2236962,roughness:.4,metalness:.5}),Tt=new ne($e,pt);Tt.rotation.z=Math.PI/2,Tt.position.set(Xe,0,0),Tt.position.x=Xe+(Xe>0?et:-et),Se.add(Tt)}Se.position.set(-3,.5,1),Se.traverse(Xe=>{Xe.isMesh&&(Xe.castShadow=!0)});const he=Se.children[0];he.userData={practicePhrase:"I lift the heavy dumbbell over my head",phoneticFocus:"L in 'lift', H in 'heavy'",emoji:"🏋️",name:"Dumbbell",color:8947848},Se.children.forEach(Xe=>{Xe.userData=he.userData}),p.add(Se),S.push(...Se.children.filter(Xe=>Xe.isMesh));const me=new Ve(2.5,.3,1.2),Fe=new Me({color:2763306,roughness:.4,metalness:.6}),Te=new ne(me,Fe);Te.position.set(3,.15,-2),Te.castShadow=!0,Te.receiveShadow=!0,p.add(Te);const Ge=new Ve(2.3,.05,.9),Qe=new Me({color:1118481,roughness:.6}),Ue=new ne(Ge,Qe);Ue.position.set(3,.35,-2),p.add(Ue);const b=new Ve(.3,1.2,1),wt=new Me({color:1710618,roughness:.3}),De=new ne(b,wt);De.position.set(4,.9,-2),De.castShadow=!0,p.add(De);const qe=new mt(.25,.4),Ce=new Me({color:65416,emissive:65416,emissiveIntensity:.5}),We=new ne(qe,Ce);We.position.set(4.16,1.1,-2),We.rotation.y=-Math.PI/2,p.add(We),Te.userData={practicePhrase:"I run on the treadmill every morning",phoneticFocus:"R in 'run', T in 'treadmill'",emoji:"🏃",name:"Treadmill",color:2763306},S.push(Te);const Ie=new Ve(2.5,.04,1),A=new Me({color:4885066,roughness:.7}),M=new ne(Ie,A);M.position.set(-5,.03,3),M.receiveShadow=!0,M.castShadow=!0,M.userData={practicePhrase:"I stretch on the yoga mat before class",phoneticFocus:"ST in 'stretch', CH in 'class'",emoji:"🧘",name:"Yoga Mat",color:4885066},p.add(M),S.push(M);const O=new Un(.4,24,24),j=new Me({color:13789470,roughness:.6}),te=new ne(O,j);te.position.set(5,.4,2),te.castShadow=!0,te.userData={practicePhrase:"I throw the basketball into the hoop",phoneticFocus:"TH in 'the', R in 'throw'",emoji:"🏀",name:"Basketball",color:13789470},p.add(te),S.push(te);const $=new Ve(1.5,1,.08),ce=new Me({color:16777215,roughness:.3}),de=new ne($,ce);de.position.set(5,4,-7.9),p.add(de);const xe=new zo(.35,.04,12,24),ke=new Me({color:16739125,roughness:.2,metalness:.8,emissive:16724736,emissiveIntensity:.3}),Z=new ne(xe,ke);Z.position.set(5,3.3,-7.7),Z.rotation.x=Math.PI/2,p.add(Z);const ue=new Ve(.8,.3,1.5),ve=new Me({color:1710618,roughness:.3,metalness:.7}),ge=new ne(ue,ve);ge.position.set(-7,.15,-1),ge.castShadow=!0,p.add(ge);const pe=new pn(.05,.05,1.2,8),Ae=new ne(pe,ve);Ae.position.set(-7,.9,-.6),Ae.castShadow=!0,p.add(Ae);const Ee=new Ve(.3,.08,.3),rt=new Me({color:2236962,roughness:.5}),D=new ne(Ee,rt);D.position.set(-7,1.5,-.6),p.add(D);const fe=new pn(.04,.04,.8,8),z=new ne(fe,ve);z.position.set(-7,1.3,-1.4),z.rotation.x=Math.PI/2,z.rotation.z=Math.PI/6,p.add(z);const Y=new zo(.4,.05,12,32),ae=new Me({color:16739125,roughness:.2,metalness:.8}),re=new ne(Y,ae);re.position.set(-7,.5,-.3),re.rotation.y=Math.PI/2,re.castShadow=!0,p.add(re);for(const Xe of[-.25,.25]){const et=new Ve(.15,.03,.1),$e=new Me({color:3355443,roughness:.5}),pt=new ne(et,$e);pt.position.set(-7+Xe,.2,-.3),p.add(pt)}ge.userData={practicePhrase:"I ride the stationary bike for thirty minutes",phoneticFocus:"R in 'ride', TH in 'thirty'",emoji:"🚴",name:"Bike",color:1710618},S.push(ge);const Oe=new mt(8,4),Je=new Me({color:8956603,roughness:.05,metalness:.9,emissive:2241348,emissiveIntensity:.2}),ot=new ne(Oe,Je);ot.position.set(-6,3,-7.9),p.add(ot);let Be=0;const St=()=>{u=requestAnimationFrame(St),Be+=.016,te.position.y=.4+Math.abs(Math.sin(Be*3))*.5,te.rotation.y+=.02,re.rotation.x+=.08,Se.position.y=.5+Math.sin(Be*1.5)*.05,Se.rotation.y=Math.sin(Be*.5)*.05,q.material.emissiveIntensity=.7+Math.sin(Be*2)*.15,J.material.emissiveIntensity=.7+Math.sin(Be*2+1)*.15,Ce.emissiveIntensity=.4+Math.sin(Be*5)*.1,c>0?(v.position.x=(Math.random()-.5)*c*.1,v.position.y=4.5+(Math.random()-.5)*c*.1):(v.position.x=Math.sin(Be*.08)*.6,v.position.y=4.5+Math.sin(Be*.12)*.2),v.position.z=13,v.lookAt(0,2,0),m.render(p,v)};St();const Wt=Xe=>{const et=m.domElement.getBoundingClientRect();x.x=(Xe.clientX-et.left)/et.width*2-1,x.y=-((Xe.clientY-et.top)/et.height)*2+1,_.setFromCamera(x,v);const $e=_.intersectObjects(S);if($e.length>0){const pt=$e[0].object,Tt=pt.userData;if(!Tt.practicePhrase)return;if(n(Tt),o(""),d&&navigator.vibrate&&navigator.vibrate(50),"speechSynthesis"in window){speechSynthesis.cancel();const It=new SpeechSynthesisUtterance(Tt.practicePhrase);It.lang="en-US",It.rate=.85,speechSynthesis.speak(It)}S.forEach(It=>{It.material&&It.material.emissive&&(It.userData.color,It.material.emissive.setHex(0))}),pt.material&&pt.material.emissive&&pt.material.emissive.setHex(4460817)}};m.domElement.addEventListener("click",Wt);const Ye=()=>{v.aspect=window.innerWidth/window.innerHeight,v.updateProjectionMatrix(),m.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",Ye),()=>{cancelAnimationFrame(u),window.removeEventListener("resize",Ye),m.domElement.removeEventListener("click",Wt),t.current&&m.domElement&&t.current.removeChild(m.domElement),m.dispose()}},[f,c,d]);const g=()=>{if(!e||!("webkitSpeechRecognition"in window)&&!("SpeechRecognition"in window)){o("Voice recognition not available on this device.");return}r(!0),o("🎤 Listening...");const p=window.SpeechRecognition||window.webkitSpeechRecognition,v=new p;v.lang="en-US",v.continuous=!1,v.interimResults=!1,v.onresult=m=>{const u=m.results[0][0].transcript.toLowerCase(),_=m.results[0][0].confidence,S=e.practicePhrase.toLowerCase().split(" "),P=u.split(" ");let C=0;for(const R of P)S.includes(R)&&C++;const w=Math.min(100,Math.round(C/S.length*100));w>=85&&_>.7?(o(`🔥 ${w}% — Excellent, Clyde! Nailed it!`),navigator.vibrate&&navigator.vibrate([100,50,200]),je.getState().recordSession(w,!0)):w>=60?(o(`💪 ${w}% — Good effort! Focus on: ${e.phoneticFocus}`),je.getState().recordSession(w,!1)):o(`📖 ${w}% — Try again. Say: "${e.practicePhrase}"`),r(!1)},v.onerror=()=>{o("Could not hear you. Try again."),r(!1)},v.onend=()=>r(!1),v.start()};return f?Q.jsxs("div",{style:{position:"relative",width:"100vw",height:"100vh",overflow:"hidden"},children:[Q.jsx("div",{ref:t,style:{width:"100%",height:"100%"}}),Q.jsxs("div",{style:{position:"absolute",top:"20px",left:"20px",background:"rgba(0,0,0,0.6)",color:"white",padding:"12px 20px",borderRadius:"12px",fontFamily:"sans-serif",backdropFilter:"blur(10px)"},children:[Q.jsx("div",{style:{fontSize:"1.2rem",fontWeight:"bold"},children:"💪 Gym"}),Q.jsxs("div",{style:{fontSize:"0.9rem",opacity:.8},children:["Streak: ",a," 🔥 | Mastery: ",h," pts"]})]}),e&&Q.jsxs("div",{style:{position:"absolute",bottom:"20px",left:"50%",transform:"translateX(-50%)",background:"rgba(0,0,0,0.75)",color:"white",padding:"20px 30px",borderRadius:"16px",fontFamily:"sans-serif",backdropFilter:"blur(15px)",maxWidth:"90vw",textAlign:"center"},children:[Q.jsxs("div",{style:{fontSize:"2rem",marginBottom:"8px"},children:[e.emoji," ",e.name]}),Q.jsxs("div",{style:{fontSize:"1.1rem",marginBottom:"6px",fontStyle:"italic"},children:['"',e.practicePhrase,'"']}),Q.jsxs("div",{style:{fontSize:"0.85rem",opacity:.6,marginBottom:"12px"},children:["Focus: ",e.phoneticFocus]}),Q.jsx("button",{onClick:g,disabled:i,style:{background:i?"#FF6B35":"#FF4500",color:"white",border:"none",padding:"12px 30px",borderRadius:"25px",fontSize:"1rem",fontWeight:"bold",cursor:i?"wait":"pointer"},children:i?"🎤 Listening...":"🎤 Say it!"}),s&&Q.jsx("div",{style:{marginTop:"12px",padding:"8px 16px",background:"rgba(255,107,53,0.2)",borderRadius:"8px",fontSize:"0.95rem"},children:s})]})]}):Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #2d2d2d 0%, #1a1a1a 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"💪"}),Q.jsx("h2",{style:{fontSize:"1.5rem",marginBottom:"10px"},children:"Gym — Locked"}),Q.jsx("p",{style:{fontSize:"1rem",opacity:.7},children:"Reach a 5 day streak to unlock the Gym"}),Q.jsxs("p",{style:{fontSize:"2rem",marginTop:"20px"},children:["Current streak: ",a," 🔥"]}),Q.jsxs("p",{style:{fontSize:"0.9rem",opacity:.5,marginTop:"15px"},children:[Math.max(0,5-a)," more days to unlock"]})]})}function ET(){switch(je(e=>e.cameraTarget)){case"home":return Q.jsx(vm,{});case"school":return Q.jsx(ST,{});case"gym":return Q.jsx(MT,{});case"malecon":return Q.jsx(yT,{});case"cafeteria":return Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #3e2723 0%, #2c1810 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"4rem"},children:"☕"}),Q.jsx("h2",{style:{fontSize:"1.5rem"},children:"Cafetería — Coming Soon"}),Q.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 7 streak"})]});case"forum":return Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #1a237e 0%, #0d47a1 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"4rem"},children:"🛍️"}),Q.jsx("h2",{style:{fontSize:"1.5rem"},children:"Forum — Coming Soon"}),Q.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 14 streak"})]});case"centro":return Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #263238 0%, #37474f 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"4rem"},children:"🏙️"}),Q.jsx("h2",{style:{fontSize:"1.5rem"},children:"Centro — Coming Soon"}),Q.jsx("p",{style:{opacity:.7},children:"Unlocked at Day 21 streak"})]});case"full_city":return Q.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",height:"100vh",background:"linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)",color:"white",fontFamily:"sans-serif"},children:[Q.jsx("div",{style:{fontSize:"5rem"},children:"🌌"}),Q.jsx("h2",{style:{fontSize:"2rem",textShadow:"0 0 20px rgba(255,107,53,0.5)"},children:"Full City + Holographic Mode"}),Q.jsx("p",{style:{fontSize:"1.2rem",opacity:.8},children:"All zones unlocked. Alma is holographic."}),Q.jsxs("div",{style:{display:"flex",gap:"20px",marginTop:"20px",flexWrap:"wrap",justifyContent:"center"},children:[Q.jsx("button",{onClick:()=>je.getState().navigateTo("home"),style:gr,children:"🏠"}),Q.jsx("button",{onClick:()=>je.getState().navigateTo("school"),style:gr,children:"🏫"}),Q.jsx("button",{onClick:()=>je.getState().navigateTo("gym"),style:gr,children:"💪"}),Q.jsx("button",{onClick:()=>je.getState().navigateTo("malecon"),style:gr,children:"🌅"}),Q.jsx("button",{onClick:()=>je.getState().navigateTo("cafeteria"),style:gr,children:"☕"}),Q.jsx("button",{onClick:()=>je.getState().navigateTo("forum"),style:gr,children:"🛍️"}),Q.jsx("button",{onClick:()=>je.getState().navigateTo("centro"),style:gr,children:"🏙️"})]})]});default:return Q.jsx(vm,{})}}const gr={fontSize:"2rem",padding:"12px 16px",borderRadius:"12px",border:"1px solid rgba(255,107,53,0.3)",background:"rgba(255,107,53,0.1)",cursor:"pointer",transition:"all 0.3s"};function wT(){const[t,e]=dt.useState(!1),[n,i]=dt.useState(!1),[r,s]=dt.useState(0),o=je(l=>l.updateStreak);je(l=>l.unlockedLocations),dt.useEffect(()=>{const l=localStorage.getItem("alma_streak");if(localStorage.getItem("alma_last_practice"),l){const d=parseInt(l)||0;d>0&&(o(d),s(d))}localStorage.getItem("alma_visited")||(i(!0),localStorage.setItem("alma_visited","true")),typeof window<"u"&&window.addEventListener("alma-streak-update",d=>{var f;const h=((f=d.detail)==null?void 0:f.streak)||0;h>0&&(o(h),s(h),localStorage.setItem("alma_streak",String(h)),localStorage.setItem("alma_last_practice",new Date().toISOString()))}),setTimeout(()=>{const d=document.getElementById("loading");d?(d.classList.add("fade"),setTimeout(()=>{d.style.display="none",e(!0)},500)):e(!0)},800)},[]);const a=()=>{const l=document.documentElement;l.requestFullscreen?l.requestFullscreen():l.webkitRequestFullscreen&&l.webkitRequestFullscreen(),i(!1)};return n&&t?Q.jsxs("div",{style:{position:"fixed",top:0,left:0,right:0,bottom:0,background:"linear-gradient(180deg, #0a0a1a 0%, #1a0a2e 50%, #0a1a2e 100%)",color:"white",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",fontFamily:"sans-serif",zIndex:1e3,padding:"40px"},children:[Q.jsx("div",{style:{fontSize:"4rem",marginBottom:"20px"},children:"🌌"}),Q.jsx("h1",{style:{fontSize:"2rem",marginBottom:"10px",textShadow:"0 0 20px rgba(255,107,53,0.5)"},children:"Virtual City"}),Q.jsx("p",{style:{fontSize:"1rem",opacity:.7,marginBottom:"8px"},children:"AccentBridges — Your Voice. Elevated."}),Q.jsx("p",{style:{fontSize:"0.9rem",opacity:.5,marginBottom:"30px",textAlign:"center"},children:"Practice your American English accent in a 3D world. Tap objects to hear phrases, then say them back. Your streak unlocks new locations in Culiacán."}),Q.jsxs("div",{style:{display:"flex",gap:"12px",marginBottom:"30px",fontSize:"1.5rem"},children:[Q.jsx("span",{children:"🏠"}),Q.jsx("span",{style:{opacity:.3},children:"🏫"}),Q.jsx("span",{style:{opacity:.3},children:"💪"}),Q.jsx("span",{style:{opacity:.3},children:"☕"}),Q.jsx("span",{style:{opacity:.3},children:"🌅"}),Q.jsx("span",{style:{opacity:.3},children:"🛍️"}),Q.jsx("span",{style:{opacity:.3},children:"🏙️"}),Q.jsx("span",{style:{opacity:.3},children:"🌌"})]}),Q.jsx("p",{style:{fontSize:"0.85rem",opacity:.4,marginBottom:"20px"},children:"🔊 Best experienced with sound on"}),Q.jsx("button",{onClick:a,style:{background:"linear-gradient(135deg, #FF6B35 0%, #FF4500 100%)",color:"white",border:"none",padding:"16px 40px",borderRadius:"30px",fontSize:"1.1rem",fontWeight:"bold",cursor:"pointer",boxShadow:"0 4px 20px rgba(255,107,53,0.4)",transition:"transform 0.2s"},children:"Enter Virtual City 🚀"})]}):Q.jsxs("div",{style:{width:"100vw",height:"100vh"},children:[Q.jsx(ET,{}),Q.jsx("div",{style:{position:"fixed",bottom:"10px",right:"10px",background:"rgba(0,0,0,0.6)",color:"#FF6B35",padding:"6px 14px",borderRadius:"20px",fontSize:"0.85rem",fontFamily:"sans-serif",fontWeight:"bold",pointerEvents:"none",zIndex:100,backdropFilter:"blur(10px)"},children:je.getState().streak>0?`${je.getState().streak} day streak 🔥`:"Start practicing! 🎙"})]})}hu.createRoot(document.getElementById("root")).render(Q.jsx(Pm.StrictMode,{children:Q.jsx(wT,{})}));
//# sourceMappingURL=index-BsJkR7fO.js.map
