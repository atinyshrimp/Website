/*! For license information please see main.c10cf39f.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),i=n(43),a=n(950);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(o(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),P=Symbol.for("react.lazy");Symbol.for("react.scope");var T=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var j=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var D=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=D&&e[D]||e["@@iterator"])?e:null}var R=Symbol.for("react.client.reference");function M(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===R?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case T:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:M(e.type)||"Memo";case P:t=e._payload,e=e._init;try{return M(e(t))}catch(n){}}return null}var L=Array.isArray,_=i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O={pending:!1,data:null,method:null,action:null},F=[],N=-1;function I(e){return{current:e}}function $(e){0>N||(e.current=F[N],F[N]=null,N--)}function B(e,t){N++,F[N]=e.current,e.current=t}var V=I(null),U=I(null),W=I(null),H=I(null);function Y(e,t){switch(B(W,t),B(U,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?id(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=ad(t=id(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(V),B(V,e)}function q(){$(V),$(U),$(W)}function K(e){null!==e.memoizedState&&B(H,e);var t=V.current,n=ad(t,e.type);t!==n&&(B(U,e),B(V,n))}function G(e){U.current===e&&($(V),$(U)),H.current===e&&($(H),Kd._currentValue=O)}var X=Object.prototype.hasOwnProperty,Z=r.unstable_scheduleCallback,Q=r.unstable_cancelCallback,J=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,ie=r.unstable_UserBlockingPriority,ae=r.unstable_NormalPriority,oe=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function pe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var fe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~a)?i=ye(r):0!==(o&=s)?i=ye(o):n||0!==(n=s&~e)&&(i=ye(n)):0!==(s=r&~a)?i=ye(s):0!==o?i=ye(o):n||0!==(n=r&~e)&&(i=ye(n)),0===i?0:0!==t&&t!==i&&0===(t&a)&&((a=i&-i)>=(n=t&-t)||32===a&&0!==(4194048&n))?t:i}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Pe(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-fe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Te(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-fe(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function je(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function De(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=z.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Re=Math.random().toString(36).slice(2),Me="__reactFiber$"+Re,Le="__reactProps$"+Re,_e="__reactContainer$"+Re,ze="__reactEvents$"+Re,Oe="__reactListeners$"+Re,Fe="__reactHandles$"+Re,Ne="__reactResources$"+Re,Ie="__reactMarker$"+Re;function $e(e){delete e[Me],delete e[Le],delete e[ze],delete e[Oe],delete e[Fe]}function Be(e){var t=e[Me];if(t)return t;for(var n=e.parentNode;n;){if(t=n[_e]||n[Me]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Me])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function Ve(e){if(e=e[Me]||e[_e]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ue(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(o(33))}function We(e){var t=e[Ne];return t||(t=e[Ne]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function He(e){e[Ie]=!0}var Ye=new Set,qe={};function Ke(e,t){Ge(e,t),Ge(e+"Capture",t)}function Ge(e,t){for(qe[e]=t,e=0;e<t.length;e++)Ye.add(t[e])}var Xe,Ze,Qe=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Je={},et={};function tt(e,t,n){if(i=t,X.call(et,i)||!X.call(Je,i)&&(Qe.test(i)?et[i]=!0:(Je[i]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var i}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function it(e){if(void 0===Xe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Xe=t&&t[1]||"",Ze=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+Xe+e+Ze}var at=!1;function ot(e,t){if(!e||at)return"";at=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(i){var r=i}Reflect.construct(e,[],n)}else{try{n.call()}catch(a){r=a}e.call(n.prototype)}}else{try{throw Error()}catch(o){r=o}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var l=o.split("\n"),c=s.split("\n");for(i=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;i<c.length&&!c[i].includes("DetermineComponentFrameRoot");)i++;if(r===l.length||i===c.length)for(r=l.length-1,i=c.length-1;1<=r&&0<=i&&l[r]!==c[i];)i--;for(;1<=r&&0<=i;r--,i--)if(l[r]!==c[i]){if(1!==r||1!==i)do{if(r--,0>--i||l[r]!==c[i]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=i);break}}}finally{at=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?it(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return it(e.type);case 16:return it("Lazy");case 13:return it("Suspense");case 19:return it("SuspenseList");case 0:case 15:return ot(e.type,!1);case 11:return ot(e.type.render,!1);case 1:return ot(e.type,!0);case 31:return it("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var i=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){r=""+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,i,a,o,s){e.name="",null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o?e.type=o:e.removeAttribute("type"),null!=t?"number"===o?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==o&&"reset"!==o||e.removeAttribute("value"),null!=t?yt(e,o,ct(t)):null!=n?yt(e,o,ct(n)):null!=r&&e.removeAttribute("value"),null==i&&null!=a&&(e.defaultChecked=!!a),null!=i&&(e.checked=i&&"function"!==typeof i&&"symbol"!==typeof i),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,i,a,o,s){if(null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.type=a),null!=t||null!=n){if(!("submit"!==a&&"reset"!==a||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:i)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=o&&"function"!==typeof o&&"symbol"!==typeof o&&"boolean"!==typeof o&&(e.name=o)}function yt(e,t,n){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,i=0;i<e.length;i++){if(e[i].value===n)return e[i].selected=!0,void(r&&(e[i].defaultSelected=!0));null!==t||e[i].disabled||(t=e[i])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(o(92));if(L(r)){if(1<r.length)throw Error(o(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(o(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var i in t)r=t[i],t.hasOwnProperty(i)&&n[i]!==r&&Et(e,i,r)}else for(var a in t)t.hasOwnProperty(a)&&Et(e,a,t[a])}function Pt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),jt=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Dt(e){return jt.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Mt=null,Lt=null;function _t(e){var t=Ve(e);if(t&&(e=t.stateNode)){var n=e[Le]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=r[Le]||null;if(!i)throw Error(o(90));gt(r,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var zt=!1;function Ot(e,t,n){if(zt)return e(t,n);zt=!0;try{return e(t)}finally{if(zt=!1,(null!==Mt||null!==Lt)&&(Bc(),Mt&&(t=Mt,e=Lt,Lt=Mt=null,_t(t),e)))for(t=0;t<e.length;t++)_t(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[Le]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(o(231,t,typeof n));return n}var Nt=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),It=!1;if(Nt)try{var $t={};Object.defineProperty($t,"passive",{get:function(){It=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(Lp){It=!1}var Bt=null,Vt=null,Ut=null;function Wt(){if(Ut)return Ut;var e,t,n=Vt,r=n.length,i="value"in Bt?Bt.value:Bt.textContent,a=i.length;for(e=0;e<r&&n[e]===i[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===i[a-t];t++);return Ut=i.slice(e,1<t?1-t:void 0)}function Ht(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function qt(){return!1}function Kt(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(null!=i.defaultPrevented?i.defaultPrevented:!1===i.returnValue)?Yt:qt,this.isPropagationStopped=qt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Gt,Xt,Zt,Qt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jt=Kt(Qt),en=p({},Qt,{view:0,detail:0}),tn=Kt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Zt&&(Zt&&"mousemove"===e.type?(Gt=e.screenX-Zt.screenX,Xt=e.screenY-Zt.screenY):Xt=Gt=0,Zt=e),Gt)},movementY:function(e){return"movementY"in e?e.movementY:Xt}}),rn=Kt(nn),an=Kt(p({},nn,{dataTransfer:0})),on=Kt(p({},en,{relatedTarget:0})),sn=Kt(p({},Qt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Kt(p({},Qt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Kt(p({},Qt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function hn(){return fn}var mn=Kt(p({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Ht(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Ht(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Ht(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Kt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Kt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),yn=Kt(p({},Qt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Kt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Kt(p({},Qt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=Nt&&"CompositionEvent"in window,kn=null;Nt&&"documentMode"in document&&(kn=document.documentMode);var En=Nt&&"TextEvent"in window&&!kn,Cn=Nt&&(!Sn||kn&&8<kn&&11>=kn),Pn=String.fromCharCode(32),Tn=!1;function jn(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Dn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Ln(e,t,n,r){Mt?Lt?Lt.push(r):Lt=[r]:Mt=r,0<(t=Wu(t,"onChange")).length&&(n=new Jt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _n=null,zn=null;function On(e){Ou(e,0)}function Fn(e){if(pt(Ue(e)))return e}function Nn(e,t){if("change"===e)return t}var In=!1;if(Nt){var $n;if(Nt){var Bn="oninput"in document;if(!Bn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Bn="function"===typeof Vn.oninput}$n=Bn}else $n=!1;In=$n&&(!document.documentMode||9<document.documentMode)}function Un(){_n&&(_n.detachEvent("onpropertychange",Wn),zn=_n=null)}function Wn(e){if("value"===e.propertyName&&Fn(zn)){var t=[];Ln(t,zn,e,Rt(e)),Ot(On,t)}}function Hn(e,t,n){"focusin"===e?(Un(),zn=n,(_n=t).attachEvent("onpropertychange",Wn)):"focusout"===e&&Un()}function Yn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(zn)}function qn(e,t){if("click"===e)return Fn(t)}function Kn(e,t){if("input"===e||"change"===e)return Fn(t)}var Gn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function Xn(e,t){if(Gn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!X.call(t,i)||!Gn(e[i],t[i]))return!1}return!0}function Zn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Qn(e,t){var n,r=Zn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Zn(r)}}function Jn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Jn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ft((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=Nt&&"documentMode"in document&&11>=document.documentMode,rr=null,ir=null,ar=null,or=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;or||null==rr||rr!==ft(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ar&&Xn(ar,r)||(ar=r,0<(r=Wu(ir,"onSelect")).length&&(t=new Jt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}Nt&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var fr=pr("animationend"),hr=pr("animationiteration"),mr=pr("animationstart"),gr=pr("transitionrun"),vr=pr("transitionstart"),yr=pr("transitioncancel"),br=pr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){xr.set(e,t),Ke(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Cr=[],Pr=0,Tr=0;function jr(){for(var e=Pr,t=Tr=Pr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var i=Cr[t];Cr[t++]=null;var a=Cr[t];if(Cr[t++]=null,null!==r&&null!==i){var o=r.pending;null===o?i.next=i:(i.next=o.next,o.next=i),r.pending=i}0!==a&&Mr(n,i,a)}}function Dr(e,t,n,r){Cr[Pr++]=e,Cr[Pr++]=t,Cr[Pr++]=n,Cr[Pr++]=r,Tr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return Dr(e,t,n,r),Lr(e)}function Rr(e,t){return Dr(e,null,null,t),Lr(e)}function Mr(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var i=!1,a=e.return;null!==a;)a.childLanes|=n,null!==(r=a.alternate)&&(r.childLanes|=n),22===a.tag&&(null===(e=a.stateNode)||1&e._visibility||(i=!0)),e=a,a=a.return;return 3===e.tag?(a=e.stateNode,i&&null!==t&&(i=31-fe(n),null===(r=(e=a.hiddenUpdates)[i])?e[i]=[t]:r.push(t),t.lane=536870912|n),a):null}function Lr(e){if(50<Mc)throw Mc=0,Lc=null,Error(o(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var _r={};function zr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Or(e,t,n,r){return new zr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Nr(e,t){var n=e.alternate;return null===n?((n=Or(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Ir(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $r(e,t,n,r,i,a){var s=0;if(r=e,"function"===typeof e)Fr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,V.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case T:return(e=Or(31,n,t,i)).elementType=T,e.lanes=a,e;case g:return Br(n.children,i,a,t);case v:s=8,i|=24;break;case y:return(e=Or(12,n,t,2|i)).elementType=y,e.lanes=a,e;case k:return(e=Or(13,n,t,i)).elementType=k,e.lanes=a,e;case E:return(e=Or(19,n,t,i)).elementType=E,e.lanes=a,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case x:s=9;break e;case S:s=11;break e;case C:s=14;break e;case P:s=16,r=null;break e}s=29,n=Error(o(130,null===e?"null":typeof e,"")),r=null}return(t=Or(s,n,t,i)).elementType=e,t.type=r,t.lanes=a,t}function Br(e,t,n,r){return(e=Or(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Or(6,e,null,t)).lanes=n,e}function Ur(e,t,n){return(t=Or(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Wr=[],Hr=0,Yr=null,qr=0,Kr=[],Gr=0,Xr=null,Zr=1,Qr="";function Jr(e,t){Wr[Hr++]=qr,Wr[Hr++]=Yr,Yr=e,qr=t}function ei(e,t,n){Kr[Gr++]=Zr,Kr[Gr++]=Qr,Kr[Gr++]=Xr,Xr=e;var r=Zr;e=Qr;var i=32-fe(r)-1;r&=~(1<<i),n+=1;var a=32-fe(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Zr=1<<32-fe(t)+i|n<<i|r,Qr=a+e}else Zr=1<<a|n<<i|r,Qr=e}function ti(e){null!==e.return&&(Jr(e,1),ei(e,1,0))}function ni(e){for(;e===Yr;)Yr=Wr[--Hr],Wr[Hr]=null,qr=Wr[--Hr],Wr[Hr]=null;for(;e===Xr;)Xr=Kr[--Gr],Kr[Gr]=null,Qr=Kr[--Gr],Kr[Gr]=null,Zr=Kr[--Gr],Kr[Gr]=null}var ri=null,ii=null,ai=!1,oi=null,si=!1,li=Error(o(519));function ci(e){throw mi(Er(Error(o(418,"")),e)),li}function ui(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Me]=e,t[Le]=r,n){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(n=0;n<_u.length;n++)Fu(_u[n],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||Xu(t.textContent,n)?(null!=r.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=r.onScroll&&Fu("scroll",t),null!=r.onScrollEnd&&Fu("scrollend",t),null!=r.onClick&&(t.onclick=Zu),t=!0):t=!1,t||ci(e)}function di(e){for(ri=e.return;ri;)switch(ri.tag){case 5:case 13:return void(si=!1);case 27:case 3:return void(si=!0);default:ri=ri.return}}function pi(e){if(e!==ri)return!1;if(!ai)return di(e),ai=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||od(e.type,e.memoizedProps)),t=!t),t&&ii&&ci(e),di(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(o(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){ii=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}ii=null}}else 27===n?(n=ii,fd(e.type)?(e=yd,yd=null,ii=e):ii=n):ii=ri?vd(e.stateNode.nextSibling):null;return!0}function fi(){ii=ri=null,ai=!1}function hi(){var e=oi;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),oi=null),e}function mi(e){null===oi?oi=[e]:oi.push(e)}var gi=I(null),vi=null,yi=null;function bi(e,t,n){B(gi,t._currentValue),t._currentValue=n}function xi(e){e._currentValue=gi.current,$(gi)}function wi(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Si(e,t,n,r){var i=e.child;for(null!==i&&(i.return=e);null!==i;){var a=i.dependencies;if(null!==a){var s=i.child;a=a.firstContext;e:for(;null!==a;){var l=a;a=i;for(var c=0;c<t.length;c++)if(l.context===t[c]){a.lanes|=n,null!==(l=a.alternate)&&(l.lanes|=n),wi(a.return,n,e),r||(s=null);break e}a=l.next}}else if(18===i.tag){if(null===(s=i.return))throw Error(o(341));s.lanes|=n,null!==(a=s.alternate)&&(a.lanes|=n),wi(s,n,e),s=null}else s=i.child;if(null!==s)s.return=i;else for(s=i;null!==s;){if(s===e){s=null;break}if(null!==(i=s.sibling)){i.return=s.return,s=i;break}s=s.return}i=s}}function ki(e,t,n,r){e=null;for(var i=t,a=!1;null!==i;){if(!a)if(0!==(524288&i.flags))a=!0;else if(0!==(262144&i.flags))break;if(10===i.tag){var s=i.alternate;if(null===s)throw Error(o(387));if(null!==(s=s.memoizedProps)){var l=i.type;Gn(i.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(i===H.current){if(null===(s=i.alternate))throw Error(o(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(null!==e?e.push(Kd):e=[Kd])}i=i.return}null!==e&&Si(t,e,n,r),t.flags|=262144}function Ei(e){for(e=e.firstContext;null!==e;){if(!Gn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ci(e){vi=e,yi=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Pi(e){return ji(vi,e)}function Ti(e,t){return null===vi&&Ci(e),ji(e,t)}function ji(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===yi){if(null===e)throw Error(o(308));yi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else yi=yi.next=t;return n}var Di="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ai=r.unstable_scheduleCallback,Ri=r.unstable_NormalPriority,Mi={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Li(){return{controller:new Di,data:new Map,refCount:0}}function _i(e){e.refCount--,0===e.refCount&&Ai(Ri,(function(){e.controller.abort()}))}var zi=null,Oi=0,Fi=0,Ni=null;function Ii(){if(0===--Oi&&null!==zi){null!==Ni&&(Ni.status="fulfilled");var e=zi;zi=null,Fi=0,Ni=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var $i=_.S;_.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===zi){var n=zi=[];Oi=0,Fi=Du(),Ni={status:"pending",value:void 0,then:function(e){n.push(e)}}}Oi++,t.then(Ii,Ii)}(0,t),null!==$i&&$i(e,t)};var Bi=I(null);function Vi(){var e=Bi.current;return null!==e?e:rc.pooledCache}function Ui(e,t){B(Bi,null===t?Bi.current:t.pool)}function Wi(){var e=Vi();return null===e?null:{parent:Mi._currentValue,pool:e}}var Hi=Error(o(460)),Yi=Error(o(474)),qi=Error(o(542)),Ki={then:function(){}};function Gi(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Xi(){}function Zi(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Xi,Xi),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e;default:if("string"===typeof t.status)t.then(Xi,Xi);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(o(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ea(e=t.reason),e}throw Qi=t,Hi}}var Qi=null;function Ji(){if(null===Qi)throw Error(o(459));var e=Qi;return Qi=null,e}function ea(e){if(e===Hi||e===qi)throw Error(o(483))}var ta=!1;function na(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function aa(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var i=r.pending;return null===i?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=Lr(e),Mr(e,null,n),t}return Dr(e,r,t,n),Lr(e)}function oa(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}function sa(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var i=null,a=null;if(null!==(n=n.firstBaseUpdate)){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===a?i=a=o:a=a.next=o,n=n.next}while(null!==n);null===a?i=a=t:a=a.next=t}else i=a=t;return n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var la=!1;function ca(){if(la){if(null!==Ni)throw Ni}}function ua(e,t,n,r){la=!1;var i=e.updateQueue;ta=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(null!==s){i.shared.pending=null;var l=s,c=l.next;l.next=null,null===o?a=c:o.next=c,o=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==o&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==a){var d=i.baseState;for(o=0,u=c=l=null,s=a;;){var f=-536870913&s.lane,h=f!==s.lane;if(h?(ac&f)===f:(r&f)===f){0!==f&&f===Fi&&(la=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;f=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=g.payload)?m.call(v,d,f):m)||void 0===f)break e;d=p({},d,f);break e;case 2:ta=!0}}null!==(f=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=i.callbacks)?i.callbacks=[f]:h.push(f))}else h={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,o|=f;if(null===(s=s.next)){if(null===(s=i.shared.pending))break;s=(h=s).next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}null===u&&(l=d),i.baseState=l,i.firstBaseUpdate=c,i.lastBaseUpdate=u,null===a&&(i.shared.lanes=0),fc|=o,e.lanes=o,e.memoizedState=d}}function da(e,t){if("function"!==typeof e)throw Error(o(191,e));e.call(t)}function pa(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)da(n[e],t)}var fa=I(null),ha=I(0);function ma(e,t){B(ha,e=dc),B(fa,t),dc=e|t.baseLanes}function ga(){B(ha,dc),B(fa,fa.current)}function va(){dc=ha.current,$(fa),$(ha)}var ya=0,ba=null,xa=null,wa=null,Sa=!1,ka=!1,Ea=!1,Ca=0,Pa=0,Ta=null,ja=0;function Da(){throw Error(o(321))}function Aa(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Gn(e[n],t[n]))return!1;return!0}function Ra(e,t,n,r,i,a){return ya=a,ba=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,_.H=null===e||null===e.memoizedState?Yo:qo,Ea=!1,a=n(r,i),Ea=!1,ka&&(a=La(t,n,r,i)),Ma(e),a}function Ma(e){_.H=Ho;var t=null!==xa&&null!==xa.next;if(ya=0,wa=xa=ba=null,Sa=!1,Pa=0,Ta=null,t)throw Error(o(300));null===e||Ts||null!==(e=e.dependencies)&&Ei(e)&&(Ts=!0)}function La(e,t,n,r){ba=e;var i=0;do{if(ka&&(Ta=null),Pa=0,ka=!1,25<=i)throw Error(o(301));if(i+=1,wa=xa=null,null!=e.updateQueue){var a=e.updateQueue;a.lastEffect=null,a.events=null,a.stores=null,null!=a.memoCache&&(a.memoCache.index=0)}_.H=Ko,a=t(n,r)}while(ka);return a}function _a(){var e=_.H,t=e.useState()[0];return t="function"===typeof t.then?$a(t):t,e=e.useState()[0],(null!==xa?xa.memoizedState:null)!==e&&(ba.flags|=1024),t}function za(){var e=0!==Ca;return Ca=0,e}function Oa(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Fa(e){if(Sa){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}Sa=!1}ya=0,wa=xa=ba=null,ka=!1,Pa=Ca=0,Ta=null}function Na(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===wa?ba.memoizedState=wa=e:wa=wa.next=e,wa}function Ia(){if(null===xa){var e=ba.alternate;e=null!==e?e.memoizedState:null}else e=xa.next;var t=null===wa?ba.memoizedState:wa.next;if(null!==t)wa=t,xa=e;else{if(null===e){if(null===ba.alternate)throw Error(o(467));throw Error(o(310))}e={memoizedState:(xa=e).memoizedState,baseState:xa.baseState,baseQueue:xa.baseQueue,queue:xa.queue,next:null},null===wa?ba.memoizedState=wa=e:wa=wa.next=e}return wa}function $a(e){var t=Pa;return Pa+=1,null===Ta&&(Ta=[]),e=Zi(Ta,e,t),t=ba,null===(null===wa?t.memoizedState:wa.next)&&(t=t.alternate,_.H=null===t||null===t.memoizedState?Yo:qo),e}function Ba(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return $a(e);if(e.$$typeof===w)return Pi(e)}throw Error(o(438,String(e)))}function Va(e){var t=null,n=ba.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=ba.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=j;return t.index++,n}function Ua(e,t){return"function"===typeof t?t(e):t}function Wa(e){return Ha(Ia(),xa,e)}function Ha(e,t,n){var r=e.queue;if(null===r)throw Error(o(311));r.lastRenderedReducer=n;var i=e.baseQueue,a=r.pending;if(null!==a){if(null!==i){var s=i.next;i.next=a.next,a.next=s}t.baseQueue=i=a,r.pending=null}if(a=e.baseState,null===i)e.memoizedState=a;else{var l=s=null,c=null,u=t=i.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(ac&p)===p:(ya&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Fi&&(d=!0);else{if((ya&f)===f){u=u.next,f===Fi&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=a):c=c.next=p,ba.lanes|=f,fc|=f}p=u.action,Ea&&n(a,p),a=u.hasEagerState?u.eagerState:n(a,p)}else f={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=a):c=c.next=f,ba.lanes|=p,fc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?s=a:c.next=l,!Gn(a,e.memoizedState)&&(Ts=!0,d&&null!==(n=Ni)))throw n;e.memoizedState=a,e.baseState=s,e.baseQueue=c,r.lastRenderedState=a}return null===i&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ya(e){var t=Ia(),n=t.queue;if(null===n)throw Error(o(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,a=t.memoizedState;if(null!==i){n.pending=null;var s=i=i.next;do{a=e(a,s.action),s=s.next}while(s!==i);Gn(a,t.memoizedState)||(Ts=!0),t.memoizedState=a,null===t.baseQueue&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function qa(e,t,n){var r=ba,i=Ia(),a=ai;if(a){if(void 0===n)throw Error(o(407));n=n()}else n=t();var s=!Gn((xa||i).memoizedState,n);if(s&&(i.memoizedState=n,Ts=!0),i=i.queue,vo(2048,8,Xa.bind(null,r,i,e),[e]),i.getSnapshot!==t||s||null!==wa&&1&wa.memoizedState.tag){if(r.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,i,n,t),null),null===rc)throw Error(o(349));a||0!==(124&ya)||Ka(r,t,n)}return n}function Ka(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=ba.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Ga(e,t,n,r){t.value=n,t.getSnapshot=r,Za(t)&&Qa(e)}function Xa(e,t,n){return n((function(){Za(t)&&Qa(e)}))}function Za(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Gn(e,n)}catch(r){return!0}}function Qa(e){var t=Rr(e,2);null!==t&&Oc(t,e,2)}function Ja(e){var t=Na();if("function"===typeof e){var n=e;if(e=n(),Ea){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:e},t}function eo(e,t,n,r){return e.baseState=n,Ha(e,xa,"function"===typeof r?r:Ua)}function to(e,t,n,r,i){if(Vo(e))throw Error(o(485));if(null!==(e=t.action)){var a={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){a.listeners.push(e)}};null!==_.T?n(!0):a.isTransition=!1,r(a),null===(n=t.pending)?(a.next=t.pending=a,no(t,a)):(a.next=n.next,t.pending=n.next=a)}}function no(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=_.T,o={};_.T=o;try{var s=n(i,r),l=_.S;null!==l&&l(o,s),ro(e,t,s)}catch(c){ao(e,t,c)}finally{_.T=a}}else try{ro(e,t,a=n(i,r))}catch(u){ao(e,t,u)}}function ro(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){io(e,t,n)}),(function(n){return ao(e,t,n)})):io(e,t,n)}function io(e,t,n){t.status="fulfilled",t.value=n,oo(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,no(e,n)))}function ao(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,oo(t),t=t.next}while(t!==r)}e.action=null}function oo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function so(e,t){return t}function lo(e,t){if(ai){var n=rc.formState;if(null!==n){e:{var r=ba;if(ai){if(ii){t:{for(var i=ii,a=si;8!==i.nodeType;){if(!a){i=null;break t}if(null===(i=vd(i.nextSibling))){i=null;break t}}i="F!"===(a=i.data)||"F"===a?i:null}if(i){ii=vd(i.nextSibling),r="F!"===i.data;break e}}ci(r)}r=!1}r&&(t=n[0])}}return(n=Na()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:so,lastRenderedState:t},n.queue=r,n=Io.bind(null,ba,r),r.dispatch=n,r=Ja(!1),a=Bo.bind(null,ba,!1,r.queue),i={state:t,dispatch:null,action:e,pending:null},(r=Na()).queue=i,n=to.bind(null,ba,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function co(e){return uo(Ia(),xa,e)}function uo(e,t,n){if(t=Ha(e,t,so)[0],e=Wa(Ua)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=$a(t)}catch(o){if(o===Hi)throw qi;throw o}else r=t;var i=(t=Ia()).queue,a=i.dispatch;return n!==t.memoizedState&&(ba.flags|=2048,ho(9,{destroy:void 0,resource:void 0},po.bind(null,i,n),null)),[r,a,e]}function po(e,t){e.action=t}function fo(e){var t=Ia(),n=xa;if(null!==n)return uo(t,n,e);Ia(),t=t.memoizedState;var r=(n=Ia()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ho(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=ba.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},ba.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function mo(){return Ia().memoizedState}function go(e,t,n,r){var i=Na();r=void 0===r?null:r,ba.flags|=e,i.memoizedState=ho(1|t,{destroy:void 0,resource:void 0},n,r)}function vo(e,t,n,r){var i=Ia();r=void 0===r?null:r;var a=i.memoizedState.inst;null!==xa&&null!==r&&Aa(r,xa.memoizedState.deps)?i.memoizedState=ho(t,a,n,r):(ba.flags|=e,i.memoizedState=ho(1|t,a,n,r))}function yo(e,t){go(8390656,8,e,t)}function bo(e,t){vo(2048,8,e,t)}function xo(e,t){return vo(4,2,e,t)}function wo(e,t){return vo(4,4,e,t)}function So(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ko(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,vo(4,4,So.bind(null,t,e),n)}function Eo(){}function Co(e,t){var n=Ia();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Aa(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Po(e,t){var n=Ia();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Aa(t,r[1]))return r[0];if(r=e(),Ea){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function To(e,t,n){return void 0===n||0!==(1073741824&ya)?e.memoizedState=t:(e.memoizedState=n,e=zc(),ba.lanes|=e,fc|=e,n)}function jo(e,t,n,r){return Gn(n,t)?n:null!==fa.current?(e=To(e,n,r),Gn(e,t)||(Ts=!0),e):0===(42&ya)?(Ts=!0,e.memoizedState=n):(e=zc(),ba.lanes|=e,fc|=e,t)}function Do(e,t,n,r,i){var a=z.p;z.p=0!==a&&8>a?a:8;var o=_.T,s={};_.T=s,Bo(e,!1,t,n);try{var l=i(),c=_.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)$o(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),_c());else $o(e,t,r,_c())}catch(u){$o(e,t,{then:function(){},status:"rejected",reason:u},_c())}finally{z.p=a,_.T=o}}function Ao(){}function Ro(e,t,n,r){if(5!==e.tag)throw Error(o(476));var i=Mo(e).queue;Do(e,i,t,O,null===n?Ao:function(){return Lo(e),n(r)})}function Mo(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:O,baseState:O,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:O},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ua,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Lo(e){$o(e,Mo(e).next.queue,{},_c())}function _o(){return Pi(Kd)}function zo(){return Ia().memoizedState}function Oo(){return Ia().memoizedState}function Fo(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=_c(),r=aa(t,e=ia(n),n);return null!==r&&(Oc(r,t,n),oa(r,t,n)),t={cache:Li()},void(e.payload=t)}t=t.return}}function No(e,t,n){var r=_c();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Vo(e)?Uo(t,n):null!==(n=Ar(e,t,n,r))&&(Oc(n,e,r),Wo(n,t,r))}function Io(e,t,n){$o(e,t,n,_c())}function $o(e,t,n,r){var i={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Vo(e))Uo(t,i);else{var a=e.alternate;if(0===e.lanes&&(null===a||0===a.lanes)&&null!==(a=t.lastRenderedReducer))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,Gn(s,o))return Dr(e,t,i,0),null===rc&&jr(),!1}catch(l){}if(null!==(n=Ar(e,t,i,r)))return Oc(n,e,r),Wo(n,t,r),!0}return!1}function Bo(e,t,n,r){if(r={lane:2,revertLane:Du(),action:r,hasEagerState:!1,eagerState:null,next:null},Vo(e)){if(t)throw Error(o(479))}else null!==(t=Ar(e,n,r,2))&&Oc(t,e,2)}function Vo(e){var t=e.alternate;return e===ba||null!==t&&t===ba}function Uo(e,t){ka=Sa=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Wo(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Te(e,n)}}var Ho={readContext:Pi,use:Ba,useCallback:Da,useContext:Da,useEffect:Da,useImperativeHandle:Da,useLayoutEffect:Da,useInsertionEffect:Da,useMemo:Da,useReducer:Da,useRef:Da,useState:Da,useDebugValue:Da,useDeferredValue:Da,useTransition:Da,useSyncExternalStore:Da,useId:Da,useHostTransitionStatus:Da,useFormState:Da,useActionState:Da,useOptimistic:Da,useMemoCache:Da,useCacheRefresh:Da},Yo={readContext:Pi,use:Ba,useCallback:function(e,t){return Na().memoizedState=[e,void 0===t?null:t],e},useContext:Pi,useEffect:yo,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,go(4194308,4,So.bind(null,t,e),n)},useLayoutEffect:function(e,t){return go(4194308,4,e,t)},useInsertionEffect:function(e,t){go(4,2,e,t)},useMemo:function(e,t){var n=Na();t=void 0===t?null:t;var r=e();if(Ea){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Na();if(void 0!==n){var i=n(t);if(Ea){pe(!0);try{n(t)}finally{pe(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=No.bind(null,ba,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Na().memoizedState=e},useState:function(e){var t=(e=Ja(e)).queue,n=Io.bind(null,ba,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Eo,useDeferredValue:function(e,t){return To(Na(),e,t)},useTransition:function(){var e=Ja(!1);return e=Do.bind(null,ba,e.queue,!0,!1),Na().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=ba,i=Na();if(ai){if(void 0===n)throw Error(o(407));n=n()}else{if(n=t(),null===rc)throw Error(o(349));0!==(124&ac)||Ka(r,t,n)}i.memoizedState=n;var a={value:n,getSnapshot:t};return i.queue=a,yo(Xa.bind(null,r,a,e),[e]),r.flags|=2048,ho(9,{destroy:void 0,resource:void 0},Ga.bind(null,r,a,n,t),null),n},useId:function(){var e=Na(),t=rc.identifierPrefix;if(ai){var n=Qr;t="\xab"+t+"R"+(n=(Zr&~(1<<32-fe(Zr)-1)).toString(32)+n),0<(n=Ca++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=ja++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:_o,useFormState:lo,useActionState:lo,useOptimistic:function(e){var t=Na();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Bo.bind(null,ba,!0,n),n.dispatch=t,[e,t]},useMemoCache:Va,useCacheRefresh:function(){return Na().memoizedState=Fo.bind(null,ba)}},qo={readContext:Pi,use:Ba,useCallback:Co,useContext:Pi,useEffect:bo,useImperativeHandle:ko,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Po,useReducer:Wa,useRef:mo,useState:function(){return Wa(Ua)},useDebugValue:Eo,useDeferredValue:function(e,t){return jo(Ia(),xa.memoizedState,e,t)},useTransition:function(){var e=Wa(Ua)[0],t=Ia().memoizedState;return["boolean"===typeof e?e:$a(e),t]},useSyncExternalStore:qa,useId:zo,useHostTransitionStatus:_o,useFormState:co,useActionState:co,useOptimistic:function(e,t){return eo(Ia(),0,e,t)},useMemoCache:Va,useCacheRefresh:Oo},Ko={readContext:Pi,use:Ba,useCallback:Co,useContext:Pi,useEffect:bo,useImperativeHandle:ko,useInsertionEffect:xo,useLayoutEffect:wo,useMemo:Po,useReducer:Ya,useRef:mo,useState:function(){return Ya(Ua)},useDebugValue:Eo,useDeferredValue:function(e,t){var n=Ia();return null===xa?To(n,e,t):jo(n,xa.memoizedState,e,t)},useTransition:function(){var e=Ya(Ua)[0],t=Ia().memoizedState;return["boolean"===typeof e?e:$a(e),t]},useSyncExternalStore:qa,useId:zo,useHostTransitionStatus:_o,useFormState:fo,useActionState:fo,useOptimistic:function(e,t){var n=Ia();return null!==xa?eo(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Va,useCacheRefresh:Oo},Go=null,Xo=0;function Zo(e){var t=Xo;return Xo+=1,null===Go&&(Go=[]),Zi(Go,e,t)}function Qo(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Jo(e,t){if(t.$$typeof===f)throw Error(o(525));throw e=Object.prototype.toString.call(t),Error(o(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function i(e,t){return(e=Nr(e,t)).index=0,e.sibling=null,e}function a(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=i(t,n)).return=e,t)}function c(e,t,n,r){var a=n.type;return a===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===a||"object"===typeof a&&null!==a&&a.$$typeof===P&&es(a)===t.type)?(Qo(t=i(t,n.props),n),t.return=e,t):(Qo(t=$r(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ur(n,e.mode,r)).return=e,t):((t=i(t,n.children||[])).return=e,t)}function d(e,t,n,r,a){return null===t||7!==t.tag?((t=Br(n,e.mode,r,a)).return=e,t):((t=i(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Qo(n=$r(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Ur(t,e.mode,n)).return=e,t;case P:return p(e,t=(0,t._init)(t._payload),n)}if(L(t)||A(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Zo(t),n);if(t.$$typeof===w)return p(e,Ti(e,t),n);Jo(e,t)}return null}function f(e,t,n,r){var i=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==i?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===i?c(e,t,n,r):null;case m:return n.key===i?u(e,t,n,r):null;case P:return f(e,t,n=(i=n._init)(n._payload),r)}if(L(n)||A(n))return null!==i?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,Zo(n),r);if(n.$$typeof===w)return f(e,t,Ti(e,n),r);Jo(e,n)}return null}function v(e,t,n,r,i){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,i);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,i);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,i);case P:return v(e,t,n,r=(0,r._init)(r._payload),i)}if(L(r)||A(r))return d(t,e=e.get(n)||null,r,i,null);if("function"===typeof r.then)return v(e,t,n,Zo(r),i);if(r.$$typeof===w)return v(e,t,n,Ti(t,r),i);Jo(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=i(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===P&&es(b)===c.type){n(l,c.sibling),Qo(d=i(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Br(u.props.children,l.mode,d,u.key)).return=l,l=d):(Qo(d=$r(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=i(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Ur(u,l.mode,d)).return=l,l=d}return s(l);case P:return y(l,c,u=(b=u._init)(u._payload),d)}if(L(u))return function(i,o,s,l){for(var c=null,u=null,d=o,h=o=0,m=null;null!==d&&h<s.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=f(i,d,s[h],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(i,d),o=a(g,o,h),null===u?c=g:u.sibling=g,u=g,d=m}if(h===s.length)return n(i,d),ai&&Jr(i,h),c;if(null===d){for(;h<s.length;h++)null!==(d=p(i,s[h],l))&&(o=a(d,o,h),null===u?c=d:u.sibling=d,u=d);return ai&&Jr(i,h),c}for(d=r(d);h<s.length;h++)null!==(m=v(d,i,h,s[h],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),o=a(m,o,h),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(i,e)})),ai&&Jr(i,h),c}(l,c,u,d);if(A(u)){if("function"!==typeof(b=A(u)))throw Error(o(150));return function(i,s,l,c){if(null==l)throw Error(o(151));for(var u=null,d=null,h=s,m=s=0,g=null,y=l.next();null!==h&&!y.done;m++,y=l.next()){h.index>m?(g=h,h=null):g=h.sibling;var b=f(i,h,y.value,c);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(i,h),s=a(b,s,m),null===d?u=b:d.sibling=b,d=b,h=g}if(y.done)return n(i,h),ai&&Jr(i,m),u;if(null===h){for(;!y.done;m++,y=l.next())null!==(y=p(i,y.value,c))&&(s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return ai&&Jr(i,m),u}for(h=r(h);!y.done;m++,y=l.next())null!==(y=v(h,i,m,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),s=a(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(i,e)})),ai&&Jr(i,m),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return y(l,c,Zo(u),d);if(u.$$typeof===w)return y(l,c,Ti(l,u),d);Jo(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=i(c,u)).return=l,l=d):(n(l,c),(d=Vr(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{Xo=0;var i=y(e,t,n,r);return Go=null,i}catch(o){if(o===Hi||o===qi)throw o;var a=Or(29,o,null,e.mode);return a.lanes=r,a.return=e,a}}}var ns=ts(!0),rs=ts(!1),is=I(null),as=null;function os(e){var t=e.alternate;B(us,1&us.current),B(is,e),null===as&&(null===t||null!==fa.current||null!==t.memoizedState)&&(as=e)}function ss(e){if(22===e.tag){if(B(us,us.current),B(is,e),null===as){var t=e.alternate;null!==t&&null!==t.memoizedState&&(as=e)}}else ls()}function ls(){B(us,us.current),B(is,is.current)}function cs(e){$(is),as===e&&(as=null),$(us)}var us=I(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=_c(),i=ia(r);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=_c(),i=ia(r);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=aa(e,i,r))&&(Oc(t,e,r),oa(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=_c(),r=ia(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=aa(e,r,n))&&(Oc(t,e,n),oa(t,e,n))}};function hs(e,t,n,r,i,a,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,a,o):!t.prototype||!t.prototype.isPureReactComponent||(!Xn(n,r)||!Xn(i,a))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=p({},n)),e)void 0===n[i]&&(n[i]=e[i]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){vs(e)}function bs(e){console.error(e)}function xs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function ks(e,t,n){return(n=ia(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Es(e){return(e=ia(e)).tag=3,e}function Cs(e,t,n,r){var i=n.type.getDerivedStateFromError;if("function"===typeof i){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Ss(t,n,r)}}var o=n.stateNode;null!==o&&"function"===typeof o.componentDidCatch&&(e.callback=function(){Ss(t,n,r),"function"!==typeof i&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ps=Error(o(461)),Ts=!1;function js(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function Ds(e,t,n,r,i){n=n.render;var a=t.ref;if("ref"in r){var o={};for(var s in r)"ref"!==s&&(o[s]=r[s])}else o=r;return Ci(t),r=Ra(e,t,n,o,a,i),s=za(),null===e||Ts?(ai&&s&&ti(t),t.flags|=1,js(e,t,r,i),t.child):(Oa(e,t,i),Gs(e,t,i))}function As(e,t,n,r,i){if(null===e){var a=n.type;return"function"!==typeof a||Fr(a)||void 0!==a.defaultProps||null!==n.compare?((e=$r(n.type,null,r,t,t.mode,i)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=a,Rs(e,t,a,r,i))}if(a=e.child,!Xs(e,i)){var o=a.memoizedProps;if((n=null!==(n=n.compare)?n:Xn)(o,r)&&e.ref===t.ref)return Gs(e,t,i)}return t.flags|=1,(e=Nr(a,r)).ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,i){if(null!==e){var a=e.memoizedProps;if(Xn(a,r)&&e.ref===t.ref){if(Ts=!1,t.pendingProps=r=a,!Xs(e,i))return t.lanes=e.lanes,Gs(e,t,i);0!==(131072&e.flags)&&(Ts=!0)}}return zs(e,t,n,r,i)}function Ms(e,t,n){var r=t.pendingProps,i=r.children,a=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==a?a.baseLanes|n:n,null!==e){for(i=t.child=e.child,a=0;null!==i;)a=a|i.lanes|i.childLanes,i=i.sibling;t.childLanes=a&~r}else t.childLanes=0,t.child=null;return Ls(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ls(e,t,null!==a?a.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ui(0,null!==a?a.cachePool:null),null!==a?ma(t,a):ga(),ss(t)}else null!==a?(Ui(0,a.cachePool),ma(t,a),ls(),t.memoizedState=null):(null!==e&&Ui(0,null),ga(),ls());return js(e,t,i,n),t.child}function Ls(e,t,n,r){var i=Vi();return i=null===i?null:{parent:Mi._currentValue,pool:i},t.memoizedState={baseLanes:n,cachePool:i},null!==e&&Ui(0,null),ga(),ss(t),null!==e&&ki(e,t,r,!0),null}function _s(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(o(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function zs(e,t,n,r,i){return Ci(t),n=Ra(e,t,n,r,void 0,i),r=za(),null===e||Ts?(ai&&r&&ti(t),t.flags|=1,js(e,t,n,i),t.child):(Oa(e,t,i),Gs(e,t,i))}function Os(e,t,n,r,i,a){return Ci(t),t.updateQueue=null,n=La(t,r,n,i),Ma(e),r=za(),null===e||Ts?(ai&&r&&ti(t),t.flags|=1,js(e,t,n,a),t.child):(Oa(e,t,a),Gs(e,t,a))}function Fs(e,t,n,r,i){if(Ci(t),null===t.stateNode){var a=_r,o=n.contextType;"object"===typeof o&&null!==o&&(a=Pi(o)),a=new n(r,a),t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,a.updater=fs,t.stateNode=a,a._reactInternals=t,(a=t.stateNode).props=r,a.state=t.memoizedState,a.refs={},na(t),o=n.contextType,a.context="object"===typeof o&&null!==o?Pi(o):_r,a.state=t.memoizedState,"function"===typeof(o=n.getDerivedStateFromProps)&&(ps(t,n,o,r),a.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(o=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),o!==a.state&&fs.enqueueReplaceState(a,a.state,null),ua(t,r,a,i),ca(),a.state=t.memoizedState),"function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){a=t.stateNode;var s=t.memoizedProps,l=gs(n,s);a.props=l;var c=a.context,u=n.contextType;o=_r,"object"===typeof u&&null!==u&&(o=Pi(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof a.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(s||c!==o)&&ms(t,a,r,o),ta=!1;var p=t.memoizedState;a.state=p,ua(t,r,a,i),ca(),c=t.memoizedState,s||p!==c||ta?("function"===typeof d&&(ps(t,n,d,r),c=t.memoizedState),(l=ta||hs(t,n,l,r,p,c,o))?(u||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||("function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount()),"function"===typeof a.componentDidMount&&(t.flags|=4194308)):("function"===typeof a.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),a.props=r,a.state=c,a.context=o,r=l):("function"===typeof a.componentDidMount&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,ra(e,t),u=gs(n,o=t.memoizedProps),a.props=u,d=t.pendingProps,p=a.context,c=n.contextType,l=_r,"object"===typeof c&&null!==c&&(l=Pi(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof a.getSnapshotBeforeUpdate)||"function"!==typeof a.UNSAFE_componentWillReceiveProps&&"function"!==typeof a.componentWillReceiveProps||(o!==d||p!==l)&&ms(t,a,r,l),ta=!1,p=t.memoizedState,a.state=p,ua(t,r,a,i),ca();var f=t.memoizedState;o!==d||p!==f||ta||null!==e&&null!==e.dependencies&&Ei(e.dependencies)?("function"===typeof s&&(ps(t,n,s,r),f=t.memoizedState),(u=ta||hs(t,n,u,r,p,f,l)||null!==e&&null!==e.dependencies&&Ei(e.dependencies))?(c||"function"!==typeof a.UNSAFE_componentWillUpdate&&"function"!==typeof a.componentWillUpdate||("function"===typeof a.componentWillUpdate&&a.componentWillUpdate(r,f,l),"function"===typeof a.UNSAFE_componentWillUpdate&&a.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof a.componentDidUpdate&&(t.flags|=4),"function"===typeof a.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),a.props=r,a.state=f,a.context=l,r=u):("function"!==typeof a.componentDidUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof a.getSnapshotBeforeUpdate||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,_s(e,t),r=0!==(128&t.flags),a||r?(a=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:a.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,i),t.child=ns(t,null,n,i)):js(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Gs(e,t,i),e}function Ns(e,t,n,r){return fi(),t.flags|=256,js(e,t,n,r),t.child}var Is={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $s(e){return{baseLanes:e,cachePool:Wi()}}function Bs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Vs(e,t,n){var r,i=t.pendingProps,a=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(a=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(ai){if(a?os(t):ls(),ai){var l,c=ii;if(l=c){e:{for(l=c,c=si;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=vd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==Xr?{id:Zr,overflow:Qr}:null,retryLane:536870912,hydrationErrors:null},(l=Or(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ri=t,ii=null,l=!0):l=!1}l||ci(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=i.children,i=i.fallback,a?(ls(),c=Ws({mode:"hidden",children:c},a=t.mode),i=Br(i,a,n,null),c.return=t,i.return=t,c.sibling=i,t.child=c,(a=t.child).memoizedState=$s(n),a.childLanes=Bs(e,r,n),t.memoizedState=Is,i):(os(t),Us(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(os(t),t.flags&=-257,t=Hs(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),a=i.fallback,c=t.mode,i=Ws({mode:"visible",children:i.children},c),(a=Br(a,c,n,null)).flags|=2,i.return=t,a.return=t,i.sibling=a,t.child=i,ns(t,e.child,null,n),(i=t.child).memoizedState=$s(n),i.childLanes=Bs(e,r,n),t.memoizedState=Is,t=a);else if(os(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(i=Error(o(419))).stack="",i.digest=r,mi({value:i,source:null,stack:null}),t=Hs(e,t,n)}else if(Ts||ki(e,t,n,!1),r=0!==(n&e.childLanes),Ts||r){if(null!==(r=rc)&&(0!==(i=0!==((i=0!==(42&(i=n&-n))?1:je(i))&(r.suspendedLanes|n))?0:i)&&i!==l.retryLane))throw l.retryLane=i,Rr(e,i),Oc(r,e,i),Ps;"$?"===c.data||qc(),t=Hs(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,ii=vd(c.nextSibling),ri=t,ai=!0,oi=null,si=!1,null!==e&&(Kr[Gr++]=Zr,Kr[Gr++]=Qr,Kr[Gr++]=Xr,Zr=e.id,Qr=e.overflow,Xr=t),(t=Us(t,i.children)).flags|=4096);return t}return a?(ls(),a=i.fallback,c=t.mode,u=(l=e.child).sibling,(i=Nr(l,{mode:"hidden",children:i.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?a=Nr(u,a):(a=Br(a,c,n,null)).flags|=2,a.return=t,i.return=t,i.sibling=a,t.child=i,i=a,a=t.child,null===(c=e.child.memoizedState)?c=$s(n):(null!==(l=c.cachePool)?(u=Mi._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Wi(),c={baseLanes:c.baseLanes|n,cachePool:l}),a.memoizedState=c,a.childLanes=Bs(e,r,n),t.memoizedState=Is,i):(os(t),e=(n=e.child).sibling,(n=Nr(n,{mode:"visible",children:i.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Us(e,t){return(t=Ws({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Ws(e,t){return(e=Or(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Hs(e,t,n){return ns(t,e.child,null,n),(e=Us(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),wi(e.return,t,n)}function qs(e,t,n,r,i){var a=e.memoizedState;null===a?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=i)}function Ks(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;if(js(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ys(e,n,t);else if(19===e.tag)Ys(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(B(us,r),i){case"forwards":for(n=t.child,i=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(i=n),n=n.sibling;null===(n=i)?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),qs(t,!1,i,n,a);break;case"backwards":for(n=null,i=t.child,t.child=null;null!==i;){if(null!==(e=i.alternate)&&null===ds(e)){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}qs(t,!0,n,null,a);break;case"together":qs(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Gs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),fc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(ki(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(o(153));if(null!==t.child){for(n=Nr(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Nr(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Xs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Ei(e))}function Zs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ts=!0;else{if(!Xs(e,n)&&0===(128&t.flags))return Ts=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),bi(0,Mi,e.memoizedState.cache),fi();break;case 27:case 5:K(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:bi(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(os(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Vs(e,t,n):(os(t),null!==(e=Gs(e,t,n))?e.sibling:null);os(t);break;case 19:var i=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(ki(e,t,n,!1),r=0!==(n&t.childLanes)),i){if(r)return Ks(e,t,n);t.flags|=128}if(null!==(i=t.memoizedState)&&(i.rendering=null,i.tail=null,i.lastEffect=null),B(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Ms(e,t,n);case 24:bi(0,Mi,e.memoizedState.cache)}return Gs(e,t,n)}(e,t,n);Ts=0!==(131072&e.flags)}else Ts=!1,ai&&0!==(1048576&t.flags)&&ei(t,qr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,i=r._init;if(r=i(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((i=r.$$typeof)===S){t.tag=11,t=Ds(null,t,r,e,n);break e}if(i===C){t.tag=14,t=As(null,t,r,e,n);break e}}throw t=M(r)||r,Error(o(306,t,""))}Fr(r)?(e=gs(r,e),t.tag=1,t=Fs(null,t,r,e,n)):(t.tag=0,t=zs(null,t,r,e,n))}return t;case 0:return zs(e,t,t.type,t.pendingProps,n);case 1:return Fs(e,t,r=t.type,i=gs(r,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(o(387));r=t.pendingProps;var a=t.memoizedState;i=a.element,ra(e,t),ua(t,r,null,n);var s=t.memoizedState;if(r=s.cache,bi(0,Mi,r),r!==a.cache&&Si(t,[Mi],n,!0),ca(),r=s.element,a.isDehydrated){if(a={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=a,t.memoizedState=a,256&t.flags){t=Ns(e,t,r,n);break e}if(r!==i){mi(i=Er(Error(o(424)),t)),t=Ns(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(ii=vd(e.firstChild),ri=t,ai=!0,oi=null,si=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(fi(),r===i){t=Gs(e,t,n);break e}js(e,t,r,n)}t=t.child}return t;case 26:return _s(e,t),null===e?(n=jd(t.type,null,t.pendingProps,null))?t.memoizedState=n:ai||(n=t.type,e=t.pendingProps,(r=rd(W.current).createElement(n))[Me]=t,r[Le]=e,ed(r,n,e),He(r),t.stateNode=r):t.memoizedState=jd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return K(t),null===e&&ai&&(r=t.stateNode=xd(t.type,t.pendingProps,W.current),ri=t,si=!0,i=ii,fd(t.type)?(yd=i,ii=vd(r.firstChild)):ii=i),js(e,t,t.pendingProps.children,n),_s(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&ai&&((i=r=ii)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Ie])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(a=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(a!==i.rel||e.getAttribute("href")!==(null==i.href||""===i.href?null:i.href)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin)||e.getAttribute("title")!==(null==i.title?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((a=e.getAttribute("src"))!==(null==i.src?null:i.src)||e.getAttribute("type")!==(null==i.type?null:i.type)||e.getAttribute("crossorigin")!==(null==i.crossOrigin?null:i.crossOrigin))&&a&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var a=null==i.name?null:""+i.name;if("hidden"===i.type&&e.getAttribute("name")===a)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,si))?(t.stateNode=r,ri=t,ii=vd(r.firstChild),si=!1,i=!0):i=!1),i||ci(t)),K(t),i=t.type,a=t.pendingProps,s=null!==e?e.memoizedProps:null,r=a.children,od(i,a)?r=null:null!==s&&od(i,s)&&(t.flags|=32),null!==t.memoizedState&&(i=Ra(e,t,_a,null,null,n),Kd._currentValue=i),_s(e,t),js(e,t,r,n),t.child;case 6:return null===e&&ai&&((e=n=ii)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,si))?(t.stateNode=n,ri=t,ii=null,e=!0):e=!1),e||ci(t)),null;case 13:return Vs(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):js(e,t,r,n),t.child;case 11:return Ds(e,t,t.type,t.pendingProps,n);case 7:return js(e,t,t.pendingProps,n),t.child;case 8:case 12:return js(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,bi(0,t.type,r.value),js(e,t,r.children,n),t.child;case 9:return i=t.type._context,r=t.pendingProps.children,Ci(t),r=r(i=Pi(i)),t.flags|=1,js(e,t,r,n),t.child;case 14:return As(e,t,t.type,t.pendingProps,n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 19:return Ks(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Ws(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Nr(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Ms(e,t,n);case 24:return Ci(t),r=Pi(Mi),null===e?(null===(i=Vi())&&(i=rc,a=Li(),i.pooledCache=a,a.refCount++,null!==a&&(i.pooledCacheLanes|=n),i=a),t.memoizedState={parent:r,cache:i},na(t),bi(0,Mi,i)):(0!==(e.lanes&n)&&(ra(e,t),ua(t,null,null,n),ca()),i=e.memoizedState,a=t.memoizedState,i.parent!==r?(i={parent:r,cache:r},t.memoizedState=i,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=i),bi(0,Mi,r)):(r=a.cache,bi(0,Mi,r),r!==i.cache&&Si(t,[Mi],n,!0))),js(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(o(156,t.tag))}function Qs(e){e.flags|=4}function Js(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Bd(t)){if(null!==(t=is.current)&&((4194048&ac)===ac?null!==as:(62914560&ac)!==ac&&0===(536870912&ac)||t!==as))throw Qi=Ki,Yi;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,vc|=t)}function tl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=65011712&i.subtreeFlags,r|=65011712&i.flags,i.return=e,i=i.sibling;else for(i=e.child;null!==i;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(ni(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),xi(Mi),q(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(pi(t)?Qs(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,hi())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Qs(t),null!==n?(nl(t),Js(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Qs(t),nl(t),Js(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Qs(t),nl(t),t.flags&=-16777217),null;case 27:G(t),n=W.current;var i=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Qs(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}e=V.current,pi(t)?ui(t):(e=xd(i,r,n),t.stateNode=e,Qs(t))}return nl(t),null;case 5:if(G(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Qs(t);else{if(!r){if(null===t.stateNode)throw Error(o(166));return nl(t),null}if(e=V.current,pi(t))ui(t);else{switch(i=rd(W.current),e){case 1:e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=i.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=i.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=i.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?i.createElement("select",{is:r.is}):i.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?i.createElement(n,{is:r.is}):i.createElement(n)}}e[Me]=t,e[Le]=r;e:for(i=t.child;null!==i;){if(5===i.tag||6===i.tag)e.appendChild(i.stateNode);else if(4!==i.tag&&27!==i.tag&&null!==i.child){i.child.return=i,i=i.child;continue}if(i===t)break e;for(;null===i.sibling;){if(null===i.return||i.return===t)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Qs(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Qs(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(o(166));if(e=W.current,pi(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(i=ri))switch(i.tag){case 27:case 5:r=i.memoizedProps}e[Me]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||Xu(e.nodeValue,n)))||ci(t)}else(e=rd(e).createTextNode(r))[Me]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(i=pi(t),null!==r&&null!==r.dehydrated){if(null===e){if(!i)throw Error(o(318));if(!(i=null!==(i=t.memoizedState)?i.dehydrated:null))throw Error(o(317));i[Me]=t}else fi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),i=!1}else i=hi(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){i=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(i=r.alternate.memoizedState.cachePool.pool);var a=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(a=r.memoizedState.cachePool.pool),a!==i&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return q(),null===e&&$u(t.stateNode.containerInfo),nl(t),null;case 10:return xi(t.type),nl(t),null;case 19:if($(us),null===(i=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(a=i.rendering))if(r)tl(i,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(a=ds(e))){for(t.flags|=128,tl(i,!1),e=a.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Ir(n,e),n=n.sibling;return B(us,1&us.current|2),t.child}e=e.sibling}null!==i.tail&&te()>Sc&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(a))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(i,!0),null===i.tail&&"hidden"===i.tailMode&&!a.alternate&&!ai)return nl(t),null}else 2*te()-i.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,tl(i,!1),t.lanes=4194304);i.isBackwards?(a.sibling=t.child,t.child=a):(null!==(e=i.last)?e.sibling=a:t.child=a,i.last=a)}return null!==i.tail?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=te(),t.sibling=null,e=us.current,B(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),va(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&$(Bi),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),xi(Mi),nl(t),null;case 25:case 30:return null}throw Error(o(156,t.tag))}function il(e,t){switch(ni(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return xi(Mi),q(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return G(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(o(340));fi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return $(us),null;case 4:return q(),null;case 10:return xi(t.type),null;case 22:case 23:return cs(t),va(),null!==e&&$(Bi),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return xi(Mi),null;default:return null}}function al(e,t){switch(ni(t),t.tag){case 3:xi(Mi),q();break;case 26:case 27:case 5:G(t);break;case 4:q();break;case 13:cs(t);break;case 19:$(us);break;case 10:xi(t.type);break;case 22:case 23:cs(t),va(),null!==e&&$(Bi);break;case 24:xi(Mi)}}function ol(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,i=null!==r?r.lastEffect:null;if(null!==i){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(void 0!==s){o.destroy=void 0,i=t;var l=n,c=s;try{c()}catch(u){uu(i,l,u)}}}r=r.next}while(r!==a)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{pa(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(i){uu(e,t,i)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(i){uu(e,t,i)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(a){uu(e,t,a)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(i){uu(e,e.return,i)}}function fl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,a=null,s=null,l=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Qu(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":a=h;break;case"name":i=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(o(137,t));break;default:h!==p&&Qu(e,t,f,h,r,p)}}return void gt(e,s,l,c,u,d,a,i);case"select":for(a in h=s=l=f=null,n)if(c=n[a],n.hasOwnProperty(a)&&null!=c)switch(a){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(a)||Qu(e,t,a,null,r,c)}for(i in r)if(a=r[i],c=n[i],r.hasOwnProperty(i)&&(null!=a||null!=c))switch(i){case"value":f=a;break;case"defaultValue":l=a;break;case"multiple":s=a;default:a!==c&&Qu(e,t,i,a,r,c)}return t=l,n=s,r=h,void(null!=f?bt(e,!!n,f,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in h=f=null,n)if(i=n[l],n.hasOwnProperty(l)&&null!=i&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Qu(e,t,l,null,r,i)}for(s in r)if(i=r[s],a=n[s],r.hasOwnProperty(s)&&(null!=i||null!=a))switch(s){case"value":f=i;break;case"defaultValue":h=i;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=i)throw Error(o(91));break;default:i!==a&&Qu(e,t,s,i,r,a)}return void xt(e,f,h);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Qu(e,t,m,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Qu(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&Qu(e,t,g,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(o(137,t));break;default:Qu(e,t,u,f,r,h)}return;default:if(Pt(t)){for(var v in n)f=n[v],n.hasOwnProperty(v)&&void 0!==f&&!r.hasOwnProperty(v)&&Ju(e,t,v,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||Ju(e,t,d,f,r,h);return}}for(var y in n)f=n[y],n.hasOwnProperty(y)&&null!=f&&!r.hasOwnProperty(y)&&Qu(e,t,y,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Qu(e,t,p,f,r,h)}(r,e.type,n,t),r[Le]=t}catch(i){uu(e,e.return,i)}}function hl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&fd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&fd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Zu));else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);ed(t,r,n),t[Me]=e,t[Le]=n}catch(a){uu(e,e.return,a)}}var bl=!1,xl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function El(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fl(e,n),4&r&&ol(5,n);break;case 1:if(Fl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(o){uu(n,n.return,o)}else{var i=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Fl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{pa(e,t)}catch(o){uu(n,n.return,o)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Fl(e,n),null===t&&4&r&&pl(n),512&r&&ul(n,n.return);break;case 12:Fl(e,n);break;case 13:Fl(e,n),4&r&&Al(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||xl,i=bl;var a=xl;bl=r,(xl=t)&&!a?Il(e,n,0!==(8772&n.subtreeFlags)):Fl(e,n),bl=i,xl=a}break;case 30:break;default:Fl(e,n)}}function Cl(e){var t=e.alternate;null!==t&&(e.alternate=null,Cl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&$e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Pl=null,Tl=!1;function jl(e,t,n){for(n=n.child;null!==n;)Dl(e,t,n),n=n.sibling}function Dl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(a){}switch(n.tag){case 26:xl||dl(n,t),jl(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Pl,i=Tl;fd(n.type)&&(Pl=n.stateNode,Tl=!1),jl(e,t,n),wd(n.stateNode),Pl=r,Tl=i;break;case 5:xl||dl(n,t);case 6:if(r=Pl,i=Tl,Pl=null,jl(e,t,n),Tl=i,null!==(Pl=r))if(Tl)try{(9===Pl.nodeType?Pl.body:"HTML"===Pl.nodeName?Pl.ownerDocument.body:Pl).removeChild(n.stateNode)}catch(o){uu(n,t,o)}else try{Pl.removeChild(n.stateNode)}catch(o){uu(n,t,o)}break;case 18:null!==Pl&&(Tl?(hd(9===(e=Pl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Tp(e)):hd(Pl,n.stateNode));break;case 4:r=Pl,i=Tl,Pl=n.stateNode.containerInfo,Tl=!0,jl(e,t,n),Pl=r,Tl=i;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),jl(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),jl(e,t,n);break;case 21:jl(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,jl(e,t,n),xl=r;break;default:jl(e,t,n)}}function Al(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Tp(e)}catch(n){uu(t,t.return,n)}}function Rl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(o(435,e.tag))}}(e);t.forEach((function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function Ml(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var i=n[r],a=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(fd(l.type)){Pl=l.stateNode,Tl=!1;break e}break;case 5:Pl=l.stateNode,Tl=!1;break e;case 3:case 4:Pl=l.stateNode.containerInfo,Tl=!0;break e}l=l.return}if(null===Pl)throw Error(o(160));Dl(a,s,i),Pl=null,Tl=!1,null!==(a=i.alternate)&&(a.return=null),i.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)_l(t,e),t=t.sibling}var Ll=null;function _l(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ml(t,e),zl(e),4&r&&(sl(3,e,e.return),ol(3,e),sl(5,e,e.return));break;case 1:Ml(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var i=Ll;if(Ml(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var a=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,i=i.ownerDocument||i;t:switch(r){case"title":(!(a=i.getElementsByTagName("title")[0])||a[Ie]||a[Me]||"http://www.w3.org/2000/svg"===a.namespaceURI||a.hasAttribute("itemprop"))&&(a=i.createElement(r),i.head.insertBefore(a,i.querySelector("head > title"))),ed(a,r,n),a[Me]=e,He(a),r=a;break e;case"link":var s=Id("link","href",i).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((a=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&a.getAttribute("rel")===(null==n.rel?null:n.rel)&&a.getAttribute("title")===(null==n.title?null:n.title)&&a.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;case"meta":if(s=Id("meta","content",i).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((a=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&a.getAttribute("name")===(null==n.name?null:n.name)&&a.getAttribute("property")===(null==n.property?null:n.property)&&a.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&a.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(a=i.createElement(r),r,n),i.head.appendChild(a);break;default:throw Error(o(468,r))}a[Me]=e,He(a),r=a}e.stateNode=r}else $d(i,e.type,e.stateNode);else e.stateNode=_d(i,r,e.memoizedProps);else a!==r?(null===a?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):a.count--,null===r?$d(i,e.type,e.stateNode):_d(i,r,e.memoizedProps)):null===r&&null!==e.stateNode&&fl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ml(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&fl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ml(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){i=e.stateNode;try{St(i,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&fl(e,i=e.memoizedProps,null!==n?n.memoizedProps:i),1024&r&&(wl=!0);break;case 6:if(Ml(t,e),zl(e),4&r){if(null===e.stateNode)throw Error(o(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Nd=null,i=Ll,Ll=Ed(t.containerInfo),Ml(t,e),Ll=i,zl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Tp(t.containerInfo)}catch(h){uu(e,e.return,h)}wl&&(wl=!1,Ol(e));break;case 4:r=Ll,Ll=Ed(e.stateNode.containerInfo),Ml(t,e),zl(e),Ll=r;break;case 12:default:Ml(t,e),zl(e);break;case 13:Ml(t,e),zl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Rl(e,r)));break;case 22:i=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bl,d=xl;if(bl=u||i,xl=d||c,Ml(t,e),xl=d,bl=u,zl(e),8192&r)e:for(t=e.stateNode,t._visibility=i?-2&t._visibility:1|t._visibility,i&&(null===n||c||bl||xl||Nl(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(a=c.stateNode,i)"function"===typeof(s=a.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=i?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Rl(e,n))));break;case 19:Ml(t,e),zl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Rl(e,r)));case 30:case 21:}}function zl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hl(r)){n=r;break}r=r.return}if(null==n)throw Error(o(160));switch(n.tag){case 27:var i=n.stateNode;vl(e,ml(e),i);break;case 5:var a=n.stateNode;32&n.flags&&(St(a,""),n.flags&=-33),vl(e,ml(e),a);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(o(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Ol(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Ol(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)El(e,t.alternate,t),t=t.sibling}function Nl(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Nl(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Nl(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Nl(t);break;case 22:null===t.memoizedState&&Nl(t);break;default:Nl(t)}e=e.sibling}}function Il(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Il(i,a,n),ol(4,a);break;case 1:if(Il(i,a,n),"function"===typeof(i=(r=a).stateNode).componentDidMount)try{i.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(i=(r=a).updateQueue)){var s=r.stateNode;try{var l=i.shared.hiddenCallbacks;if(null!==l)for(i.shared.hiddenCallbacks=null,i=0;i<l.length;i++)da(l[i],s)}catch(c){uu(r,r.return,c)}}n&&64&o&&ll(a),ul(a,a.return);break;case 27:yl(a);case 26:case 5:Il(i,a,n),n&&null===r&&4&o&&pl(a),ul(a,a.return);break;case 12:Il(i,a,n);break;case 13:Il(i,a,n),n&&4&o&&Al(i,a);break;case 22:null===a.memoizedState&&Il(i,a,n),ul(a,a.return);break;case 30:break;default:Il(i,a,n)}t=t.sibling}}function $l(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&_i(n))}function Bl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&_i(e))}function Vl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ul(e,t,n,r),t=t.sibling}function Ul(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:Vl(e,t,n,r),2048&i&&ol(9,t);break;case 1:case 13:default:Vl(e,t,n,r);break;case 3:Vl(e,t,n,r),2048&i&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&_i(e)));break;case 12:if(2048&i){Vl(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;"function"===typeof s&&s(o,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Vl(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,null!==t.memoizedState?2&a._visibility?Vl(e,t,n,r):Hl(e,t):2&a._visibility?Vl(e,t,n,r):(a._visibility|=2,Wl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&i&&$l(o,t);break;case 24:Vl(e,t,n,r),2048&i&&Bl(t.alternate,t)}}function Wl(e,t,n,r,i){for(i=i&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var a=e,o=t,s=n,l=r,c=o.flags;switch(o.tag){case 0:case 11:case 15:Wl(a,o,s,l,i),ol(8,o);break;case 23:break;case 22:var u=o.stateNode;null!==o.memoizedState?2&u._visibility?Wl(a,o,s,l,i):Hl(a,o):(u._visibility|=2,Wl(a,o,s,l,i)),i&&2048&c&&$l(o.alternate,o);break;case 24:Wl(a,o,s,l,i),i&&2048&c&&Bl(o.alternate,o);break;default:Wl(a,o,s,l,i)}t=t.sibling}}function Hl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:Hl(n,r),2048&i&&$l(r.alternate,r);break;case 24:Hl(n,r),2048&i&&Bl(r.alternate,r);break;default:Hl(n,r)}t=t.sibling}}var Yl=8192;function ql(e){if(e.subtreeFlags&Yl)for(e=e.child;null!==e;)Kl(e),e=e.sibling}function Kl(e){switch(e.tag){case 26:ql(e),e.flags&Yl&&null!==e.memoizedState&&function(e,t,n){if(null===Vd)throw Error(o(475));var r=Vd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var i=Dd(n.href),a=e.querySelector(Ad(i));if(a)return null!==(e=a._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Wd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=a,void He(a);a=e.ownerDocument||e,n=Rd(n),(i=Sd.get(i))&&Od(n,i),He(a=a.createElement("link"));var s=a;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",n),t.instance=a}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Wd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Ll,e.memoizedState,e.memoizedProps);break;case 5:default:ql(e);break;case 3:case 4:var t=Ll;Ll=Ed(e.stateNode.containerInfo),ql(e),Ll=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Yl,Yl=16777216,ql(e),Yl=t):ql(e))}}function Gl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function Xl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Jl(r,e)}Gl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Zl(e),e=e.sibling}function Zl(e){switch(e.tag){case 0:case 11:case 15:Xl(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:Xl(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Ql(e)):Xl(e)}}function Ql(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Jl(r,e)}Gl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Ql(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Ql(t));break;default:Ql(t)}e=e.sibling}}function Jl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:_i(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var i=(r=kl).sibling,a=r.return;if(Cl(r),r===n){kl=null;break e}if(null!==i){i.return=a,kl=i;break e}kl=a}}}var ec={getCacheForType:function(e){var t=Pi(Mi),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,ic=null,ac=0,oc=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,pc=0,fc=0,hc=0,mc=0,gc=0,vc=0,yc=null,bc=null,xc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Cc=0,Pc=null,Tc=null,jc=0,Dc=0,Ac=null,Rc=null,Mc=0,Lc=null;function _c(){if(0!==(2&nc)&&0!==ac)return ac&-ac;if(null!==_.T){return 0!==Fi?Fi:Du()}return Ae()}function zc(){0===gc&&(gc=0===(536870912&ac)||ai?Se():536870912);var e=is.current;return null!==e&&(e.flags|=32),gc}function Oc(e,t,n){(e!==rc||2!==oc&&9!==oc)&&null===e.cancelPendingCommit||(Uc(e,0),$c(e,ac,gc,!1)),Ce(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===pc&&$c(e,ac,gc,!1)),Su(e))}function Fc(e,t,n){if(0!==(6&nc))throw Error(o(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),i=r?function(e,t){var n=nc;nc|=2;var r=Hc(),i=Yc();rc!==e||ac!==t?(kc=null,Sc=te()+500,Uc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==oc&&null!==ic){t=ic;var a=sc;t:switch(oc){case 1:oc=0,sc=null,Jc(e,t,a,1);break;case 2:case 9:if(Gi(a)){oc=0,sc=null,Qc(t);break}t=function(){2!==oc&&9!==oc||rc!==e||(oc=7),Su(e)},a.then(t,t);break e;case 3:oc=7;break e;case 4:oc=5;break e;case 7:Gi(a)?(oc=0,sc=null,Qc(t)):(oc=0,sc=null,Jc(e,t,a,7));break;case 5:var s=null;switch(ic.tag){case 26:s=ic.memoizedState;case 5:case 27:var l=ic;if(!s||Bd(s)){oc=0,sc=null;var c=l.sibling;if(null!==c)ic=c;else{var u=l.return;null!==u?(ic=u,eu(u)):ic=null}break t}}oc=0,sc=null,Jc(e,t,a,5);break;case 6:oc=0,sc=null,Jc(e,t,a,6);break;case 8:Vc(),pc=6;break e;default:throw Error(o(462))}}Xc();break}catch(d){Wc(e,d)}return yi=vi=null,_.H=r,_.A=i,nc=n,null!==ic?0:(rc=null,ac=0,jr(),pc)}(e,t):Kc(e,t,!0),a=r;;){if(0===i){cc&&!r&&$c(e,t,0,!1);break}if(n=e.current.alternate,!a||Ic(n)){if(2===i){if(a=t,e.errorRecoveryDisabledLanes&a)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;i=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Uc(l,s).flags|=256),2!==(s=Kc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=a,hc|=a,i=4;break e}a=bc,bc=i,null!==a&&(null===bc?bc=a:bc.push.apply(bc,a))}i=s}if(a=!1,2!==i)continue}}if(1===i){Uc(e,0),$c(e,t,0,!0);break}e:{switch(r=e,a=i){case 0:case 1:throw Error(o(345));case 4:if((4194048&t)!==t)break;case 6:$c(r,t,gc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(o(329))}if((62914560&t)===t&&10<(i=wc+300-te())){if($c(r,t,gc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=ld(Nc.bind(null,r,n,bc,kc,xc,t,gc,hc,vc,lc,a,2,-0,0),i)}else Nc(r,n,bc,kc,xc,t,gc,hc,vc,lc,a,0,-0,0)}break}i=Kc(e,t,!1),a=!1}Su(e)}function Nc(e,t,n,r,i,a,s,l,c,u,d,p,f,h){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&(Vd={stylesheets:null,count:0,unsuspend:Ud},Kl(t),null!==(p=function(){if(null===Vd)throw Error(o(475));var e=Vd;return e.stylesheets&&0===e.count&&Yd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Yd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nu.bind(null,e,t,a,n,r,i,s,l,c,d,1,f,h)),void $c(e,a,s,!u);nu(e,t,a,n,r,i,s,l,c)}function Ic(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!Gn(a(),i))return!1}catch(o){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $c(e,t,n,r){t&=~mc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-fe(i),o=1<<a;r[a]=-1,i&=~o}0!==n&&Pe(e,n,t)}function Bc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Vc(){if(null!==ic){if(0===oc)var e=ic.return;else yi=vi=null,Fa(e=ic),Go=null,Xo=0,e=ic;for(;null!==e;)al(e.alternate,e),e=e.return;ic=null}}function Uc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Vc(),rc=e,ic=n=Nr(e.current,null),ac=t,oc=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,vc=gc=mc=hc=fc=pc=0,bc=yc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var i=31-fe(r),a=1<<i;t|=e[i],r&=~a}return dc=t,jr(),n}function Wc(e,t){ba=null,_.H=Ho,t===Hi||t===qi?(t=Ji(),oc=3):t===Yi?(t=Ji(),oc=4):oc=t===Ps?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===ic&&(pc=1,ws(e,Er(t,e.current)))}function Hc(){var e=_.H;return _.H=Ho,null===e?Ho:e}function Yc(){var e=_.A;return _.A=ec,e}function qc(){pc=4,lc||(4194048&ac)!==ac&&null!==is.current||(cc=!0),0===(134217727&fc)&&0===(134217727&hc)||null===rc||$c(rc,ac,gc,!1)}function Kc(e,t,n){var r=nc;nc|=2;var i=Hc(),a=Yc();rc===e&&ac===t||(kc=null,Uc(e,t)),t=!1;var o=pc;e:for(;;)try{if(0!==oc&&null!==ic){var s=ic,l=sc;switch(oc){case 8:Vc(),o=6;break e;case 3:case 2:case 9:case 6:null===is.current&&(t=!0);var c=oc;if(oc=0,sc=null,Jc(e,s,l,c),n&&cc){o=0;break e}break;default:c=oc,oc=0,sc=null,Jc(e,s,l,c)}}Gc(),o=pc;break}catch(u){Wc(e,u)}return t&&e.shellSuspendCounter++,yi=vi=null,nc=r,_.H=i,_.A=a,null===ic&&(rc=null,ac=0,jr()),o}function Gc(){for(;null!==ic;)Zc(ic)}function Xc(){for(;null!==ic&&!J();)Zc(ic)}function Zc(e){var t=Zs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Qc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Os(n,t,t.pendingProps,t.type,void 0,ac);break;case 11:t=Os(n,t,t.pendingProps,t.type.render,t.ref,ac);break;case 5:Fa(t);default:al(n,t),t=Zs(n,t=ic=Ir(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):ic=t}function Jc(e,t,n,r){yi=vi=null,Fa(t),Go=null,Xo=0;var i=t.return;try{if(function(e,t,n,r,i){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&ki(t,n,i,!0),null!==(n=is.current)){switch(n.tag){case 13:return null===as?qc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=i,r===Ki?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,i)),!1;case 22:return n.flags|=65536,r===Ki?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,i)),!1}throw Error(o(435,n.tag))}return du(e,r,i),qc(),!1}if(ai)return null!==(t=is.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=i,r!==li&&mi(Er(e=Error(o(422),{cause:r}),n))):(r!==li&&mi(Er(t=Error(o(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,i&=-i,e.lanes|=i,r=Er(r,n),sa(e,i=ks(e.stateNode,r,i)),4!==pc&&(pc=2)),!1;var a=Error(o(520),{cause:r});if(a=Er(a,n),null===yc?yc=[a]:yc.push(a),4!==pc&&(pc=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=i&-i,n.lanes|=e,sa(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,a=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==a&&"function"===typeof a.componentDidCatch&&(null===Ec||!Ec.has(a))))return n.flags|=65536,i&=-i,n.lanes|=i,Cs(i=Es(i),e,n,r),sa(n,i),!1}n=n.return}while(null!==n);return!1}(e,i,t,n,ac))return pc=1,ws(e,Er(n,e.current)),void(ic=null)}catch(a){if(null!==i)throw ic=i,a;return pc=1,ws(e,Er(n,e.current)),void(ic=null)}32768&t.flags?(ai||1===r?e=!0:cc||0!==(536870912&ac)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=is.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(ic=n);if(null!==(t=t.sibling))return void(ic=t);ic=t=e}while(null!==t);0===pc&&(pc=5)}function tu(e,t){do{var n=il(e.alternate,e);if(null!==n)return n.flags&=32767,void(ic=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(ic=e);ic=e=n}while(null!==e);pc=6,ic=null}function nu(e,t,n,r,i,a,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Cc);if(0!==(6&nc))throw Error(o(327));if(null!==t){if(t===e.current)throw Error(o(177));if(a=t.lanes|t.childLanes,function(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-fe(n),d=1<<u;s[u]=0,l[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Pe(e,r,0),0!==a&&0===i&&0!==e.tag&&(e.suspendedLanes|=a&~(o&~t))}(e,n,a|=Tr,s,l,c),e===rc&&(ic=rc=null,ac=0),Tc=t,Pc=e,jc=n,Dc=a,Ac=i,Rc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,Z(ae,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=_.T,_.T=null,i=z.p,z.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var i=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==i&&3!==p.nodeType||(l=s+i),p!==a||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===i&&(l=s),f===a&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},np=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(a=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==a){e=void 0,n=t,i=a.memoizedProps,a=a.memoizedState,r=n.stateNode;try{var m=gs(n.type,i,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,a),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(o(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,z.p=i,_.T=r}}Cc=1,ru(),iu(),au()}}function ru(){if(1===Cc){Cc=0;var e=Pc,t=Tc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=_.T,_.T=null;var r=z.p;z.p=2;var i=nc;nc|=4;try{_l(t,e);var a=nd,o=er(e.containerInfo),s=a.focusedElem,l=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Jn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),h=s.textContent.length,m=Math.min(l.start,h),g=void 0===l.end?m:Math.min(l.end,h);!f.extend&&m>g&&(o=g,g=m,m=o);var v=Qn(s,m),y=Qn(s,g);if(v&&y&&(1!==f.rangeCount||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==y.node||f.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),f.removeAllRanges(),m>g?(f.addRange(b),f.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),f.addRange(b))}}}}for(d=[],f=s;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}np=!!td,nd=td=null}finally{nc=i,z.p=r,_.T=n}}e.current=t,Cc=2}}function iu(){if(2===Cc){Cc=0;var e=Pc,t=Tc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=_.T,_.T=null;var r=z.p;z.p=2;var i=nc;nc|=4;try{El(e,t.alternate,t)}finally{nc=i,z.p=r,_.T=n}}Cc=3}}function au(){if(4===Cc||3===Cc){Cc=0,ee();var e=Pc,t=Tc,n=jc,r=Rc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cc=5:(Cc=0,Tc=Pc=null,ou(e,e.pendingLanes));var i=e.pendingLanes;if(0===i&&(Ec=null),De(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=_.T,i=z.p,z.p=2,_.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{_.T=t,z.p=i}}0!==(3&jc)&&su(),Su(e),i=e.pendingLanes,0!==(4194090&n)&&0!==(42&i)?e===Lc?Mc++:(Mc=0,Lc=e):Mc=0,ku(0,!1)}}function ou(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,_i(t)))}function su(e){return ru(),iu(),au(),lu()}function lu(){if(5!==Cc)return!1;var e=Pc,t=Dc;Dc=0;var n=De(jc),r=_.T,i=z.p;try{z.p=32>n?32:n,_.T=null,n=Ac,Ac=null;var a=Pc,s=jc;if(Cc=0,Tc=Pc=null,jc=0,0!==(6&nc))throw Error(o(331));var l=nc;if(nc|=4,Zl(a.current),Ul(a,a.current,s,n),nc=l,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,a)}catch(c){}return!0}finally{z.p=i,_.T=r,ou(e,t)}}function cu(e,t,n){t=Er(n,t),null!==(e=aa(e,t=ks(e.stateNode,t,2),2))&&(Ce(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ec||!Ec.has(r))){e=Er(n,e),null!==(r=aa(t,n=Es(2),2))&&(Cs(n,r,t,e),Ce(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var i=new Set;r.set(t,i)}else void 0===(i=r.get(t))&&(i=new Set,r.set(t,i));i.has(n)||(uc=!0,i.add(n),e=pu.bind(null,e,t,n),t.then(e,e))}function pu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ac&n)===n&&(4===pc||3===pc&&(62914560&ac)===ac&&300>te()-wc?0===(2&nc)&&Uc(e,0):mc|=n,vc===ac&&(vc=0)),Su(e)}function fu(e,t){0===t&&(t=ke()),null!==(e=Rr(e,t))&&(Ce(e,t),Su(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),fu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;null!==i&&(n=i.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(o(314))}null!==r&&r.delete(t),fu(e,n)}var gu=null,vu=null,yu=!1,bu=!1,xu=!1,wu=0;function Su(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),bu=!0,yu||(yu=!0,dd((function(){0!==(6&nc)?Z(re,Eu):Cu()})))}function ku(e,t){if(!xu&&bu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var i=r.pendingLanes;if(0===i)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-fe(42|e)+1)-1,a=201326741&(a&=i&~(o&~s))?201326741&a|1:a?2|a:0}0!==a&&(n=!0,ju(r,a))}else a=ac,0===(3&(a=be(r,r===rc?a:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,a)||(n=!0,ju(r,a));r=r.next}}while(n);xu=!1}}function Eu(){Cu()}function Cu(){bu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var i=r.next,a=Pu(r,t);0===a?(r.next=null,null===n?gu=i:n.next=i,null===i&&(vu=n)):(n=r,(0!==e||0!==(3&a))&&(bu=!0)),r=i}ku(e,!1)}function Pu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=-62914561&e.pendingLanes;0<a;){var o=31-fe(a),s=1<<o,l=i[o];-1===l?0!==(s&n)&&0===(s&r)||(i[o]=we(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}if(n=ac,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===oc||9===oc)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&Q(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&Q(r),De(n)){case 2:case 8:n=ie;break;case 32:default:n=ae;break;case 268435456:n=se}return r=Tu.bind(null,e),n=Z(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&Q(r),e.callbackPriority=2,e.callbackNode=null,2}function Tu(e,t){if(0!==Cc&&5!==Cc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ac;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,r,t),Pu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Tu.bind(null,e):null)}function ju(e,t){if(su())return null;Fc(e,t,!0)}function Du(){return 0===wu&&(wu=Se()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:Dt(""+e)}function Ru(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Mu=0;Mu<wr.length;Mu++){var Lu=wr[Mu];Sr(Lu.toLowerCase(),"on"+(Lu[0].toUpperCase()+Lu.slice(1)))}Sr(fr,"onAnimationEnd"),Sr(hr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(vr,"onTransitionStart"),Sr(yr,"onTransitionCancel"),Sr(br,"onTransitionEnd"),Ge("onMouseEnter",["mouseout","mouseover"]),Ge("onMouseLeave",["mouseout","mouseover"]),Ge("onPointerEnter",["pointerout","pointerover"]),Ge("onPointerLeave",["pointerout","pointerover"]),Ke("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ke("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ke("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ke("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ke("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _u="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(_u));function Ou(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}else for(o=0;o<r.length;o++){if(l=(s=r[o]).instance,c=s.currentTarget,s=s.listener,l!==a&&i.isPropagationStopped())break e;a=s,i.currentTarget=c;try{a(i)}catch(u){vs(u)}i.currentTarget=null,a=l}}}}function Fu(e,t){var n=t[ze];void 0===n&&(n=t[ze]=new Set);var r=e+"__bubble";n.has(r)||(Bu(t,e,2,!1),n.add(r))}function Nu(e,t,n){var r=0;t&&(r|=4),Bu(n,e,r,t)}var Iu="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[Iu]){e[Iu]=!0,Ye.forEach((function(t){"selectionchange"!==t&&(zu.has(t)||Nu(t,!1,e),Nu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Iu]||(t[Iu]=!0,Nu("selectionchange",!1,t))}}function Bu(e,t,n,r){switch(cp(t)){case 2:var i=rp;break;case 8:i=ip;break;default:i=ap}n=i.bind(null,t,n,e),i=void 0,!It||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(i=!0),r?void 0!==i?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):void 0!==i?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Vu(e,t,n,r,i){var a=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var s=r.stateNode.containerInfo;if(s===i)break;if(4===o)for(o=r.return;null!==o;){var c=o.tag;if((3===c||4===c)&&o.stateNode.containerInfo===i)return;o=o.return}for(;null!==s;){if(null===(o=Be(s)))return;if(5===(c=o.tag)||6===c||26===c||27===c){r=a=o;continue e}s=s.parentNode}}r=r.return}Ot((function(){var r=a,i=Rt(n),o=[];e:{var s=xr.get(e);if(void 0!==s){var c=Jt,u=e;switch(e){case"keypress":if(0===Ht(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=on;break;case"focusout":u="blur",c=on;break;case"beforeblur":case"afterblur":c=on;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=an;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case fr:case hr:case mr:c=sn;break;case br:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==s?s+"Capture":null:s;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===f||null!=(g=Ft(m,f))&&d.push(Uu(m,g,h)),p)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,i),o.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!Be(u)&&!u[_e])&&(c||s)&&(s=i.window===i?i:(s=i.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Be(u):null)&&(p=l(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==c?s:Ue(c),h=null==u?s:Ue(u),(s=new d(g,m+"leave",c,n,i)).target=p,s.relatedTarget=h,g=null,Be(i)===r&&((d=new d(f,m+"enter",u,n,i)).target=h,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(f=u,m=0,h=d=c;h;h=Hu(h))m++;for(h=0,g=f;g;g=Hu(g))h++;for(;0<m-h;)d=Hu(d),m--;for(;0<h-m;)f=Hu(f),h--;for(;m--;){if(d===f||null!==f&&d===f.alternate)break e;d=Hu(d),f=Hu(f)}d=null}else d=null;null!==c&&Yu(o,s,c,d,!1),null!==u&&null!==p&&Yu(o,p,u,d,!0)}if("select"===(c=(s=r?Ue(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var v=Nn;else if(Mn(s))if(In)v=Kn;else{v=Yn;var y=Hn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Pt(r.elementType)&&(v=Nn):v=qn;switch(v&&(v=v(e,r))?Ln(o,v,n,i):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?Ue(r):window,e){case"focusin":(Mn(y)||"true"===y.contentEditable)&&(rr=y,ir=r,ar=null);break;case"focusout":ar=ir=rr=null;break;case"mousedown":or=!0;break;case"contextmenu":case"mouseup":case"dragend":or=!1,sr(o,n,i);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(o,n,i)}var b;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else An?jn(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Cn&&"ko"!==n.locale&&(An||"onCompositionStart"!==x?"onCompositionEnd"===x&&An&&(b=Wt()):(Vt="value"in(Bt=i)?Bt.value:Bt.textContent,An=!0)),0<(y=Wu(r,x)).length&&(x=new cn(x,e,null,n,i),o.push({event:x,listeners:y}),b?x.data=b:null!==(b=Dn(n))&&(x.data=b))),(b=En?function(e,t){switch(e){case"compositionend":return Dn(t);case"keypress":return 32!==t.which?null:(Tn=!0,Pn);case"textInput":return(e=t.data)===Pn&&Tn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!Sn&&jn(e,t)?(e=Wt(),Ut=Vt=Bt=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Wu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,i),o.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,i){if("submit"===t&&n&&n.stateNode===i){var a=Au((i[Le]||null).action),o=r.submitter;o&&null!==(t=(t=o[Le]||null)?Au(t.formAction):o.getAttribute("formAction"))&&(a=t,o=null);var s=new Jt("action","action",null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=o?Ru(i,o):new FormData(i);Ro(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else"function"===typeof a&&(s.preventDefault(),e=o?Ru(i,o):new FormData(i),Ro(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}(o,e,r,n,i)}Ou(o,t)}))}function Uu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Wu(e,t){for(var n=t+"Capture",r=[];null!==e;){var i=e,a=i.stateNode;if(5!==(i=i.tag)&&26!==i&&27!==i||null===a||(null!=(i=Ft(e,n))&&r.unshift(Uu(e,i,a)),null!=(i=Ft(e,t))&&r.push(Uu(e,i,a))),3===e.tag)return r;e=e.return}return[]}function Hu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Yu(e,t,n,r,i){for(var a=t._reactName,o=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,i?null!=(c=Ft(n,a))&&o.unshift(Uu(n,c,l)):i||null!=(c=Ft(n,a))&&o.push(Uu(n,c,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var qu=/\r\n?/g,Ku=/\u0000|\uFFFD/g;function Gu(e){return("string"===typeof e?e:""+e).replace(qu,"\n").replace(Ku,"")}function Xu(e,t){return t=Gu(t),Gu(e)===t}function Zu(){}function Qu(e,t,n,r,i,a){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,a);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Dt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof a&&("formAction"===n?("input"!==t&&Qu(e,t,"name",i.name,i,null),Qu(e,t,"formEncType",i.formEncType,i,null),Qu(e,t,"formMethod",i.formMethod,i,null),Qu(e,t,"formTarget",i.formTarget,i,null)):(Qu(e,t,"encType",i.encType,i,null),Qu(e,t,"method",i.method,i,null),Qu(e,t,"target",i.target,i,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=Dt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Zu);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=Dt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Tt.get(n)||n,r)}}function Ju(e,t,n,r,i,a){switch(n){case"style":Ct(e,r,a);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(o(61));if(null!=(n=r.__html)){if(null!=i.children)throw Error(o(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Zu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:qe.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(i=n.endsWith("Capture"),t=n.slice(2,i?n.length-7:void 0),"function"===typeof(a=null!=(a=e[Le]||null)?a[n]:null)&&e.removeEventListener(t,a,i),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof a&&null!==a&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,i)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var r,i=!1,a=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":i=!0;break;case"srcSet":a=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Qu(e,t,r,s,n,null)}}return a&&Qu(e,t,"srcSet",n.srcSet,n,null),void(i&&Qu(e,t,"src",n.src,n,null));case"input":Fu("invalid",e);var l=r=s=a=null,c=null,u=null;for(i in n)if(n.hasOwnProperty(i)){var d=n[i];if(null!=d)switch(i){case"name":a=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(o(137,t));break;default:Qu(e,t,i,d,n,null)}}return vt(e,r,l,c,u,s,a,!1),void dt(e);case"select":for(a in Fu("invalid",e),i=s=r=null,n)if(n.hasOwnProperty(a)&&null!=(l=n[a]))switch(a){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":i=l;default:Qu(e,t,a,l,n,null)}return t=r,n=s,e.multiple=!!i,void(null!=t?bt(e,!!i,t,!1):null!=n&&bt(e,!!i,n,!0));case"textarea":for(s in Fu("invalid",e),r=a=i=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":i=l;break;case"defaultValue":a=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(o(91));break;default:Qu(e,t,s,l,n,null)}return wt(e,i,a,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(i=n[c]))if("selected"===c)e.selected=i&&"function"!==typeof i&&"symbol"!==typeof i;else Qu(e,t,c,i,n,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(i=0;i<_u.length;i++)Fu(_u[i],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(i=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(o(137,t));default:Qu(e,t,u,i,n,null)}return;default:if(Pt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(i=n[d])&&Ju(e,t,d,i,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(i=n[l])&&Qu(e,t,l,i,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function id(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function ad(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function od(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(pd)}:ld;function pd(e){setTimeout((function(){throw e}))}function fd(e){return"head"===e}function hd(e,t){var n=t,r=0,i=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0<r&&8>r){n=r;var o=e.ownerDocument;if(1&n&&wd(o.documentElement),2&n&&wd(o.body),4&n)for(wd(n=o.head),o=n.firstChild;o;){var s=o.nextSibling,l=o.nodeName;o[Ie]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===o.rel.toLowerCase()||n.removeChild(o),o=s}}if(0===i)return e.removeChild(a),void Tp(t);i--}else"$"===n||"$?"===n||"$!"===n?i++:r=n.charCodeAt(0)-48;else r=0;n=a}while(n);Tp(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),$e(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(o(452));return e;case"head":if(!(e=t.head))throw Error(o(453));return e;case"body":if(!(e=t.body))throw Error(o(454));return e;default:throw Error(o(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$e(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=z.d;z.d={f:function(){var e=Cd.f(),t=Bc();return e||t},r:function(e){var t=Ve(e);null!==t&&5===t.tag&&"form"===t.type?Lo(t):Cd.r(e)},D:function(e){Cd.D(e),Td("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),Td("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=Pd;if(r&&e&&t){var i='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(i+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(i+='[imagesizes="'+mt(n.imageSizes)+'"]')):i+='[href="'+mt(e)+'"]';var a=i;switch(t){case"style":a=Dd(e);break;case"script":a=Md(e)}Sd.has(a)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(a,e),null!==r.querySelector(i)||"style"===t&&r.querySelector(Ad(a))||"script"===t&&r.querySelector(Ld(a))||(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=Pd;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",i='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',a=i;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":a=Md(e)}if(!Sd.has(a)&&(e=p({rel:"modulepreload",href:e},t),Sd.set(a,e),null===n.querySelector(i))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Ld(a)))return}ed(r=n.createElement("link"),"link",e),He(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=Pd;if(n&&e){var r=We(n).hoistableScripts,i=Md(e),a=r.get(i);a||((a=n.querySelector(Ld(i)))||(e=p({src:e,async:!0},t),(t=Sd.get(i))&&Fd(e,t),He(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}},S:function(e,t,n){Cd.S(e,t,n);var r=Pd;if(r&&e){var i=We(r).hoistableStyles,a=Dd(e);t=t||"default";var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(Ad(a)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(a))&&Od(e,n);var l=o=r.createElement("link");He(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,zd(o,t,r)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(a,o)}}},M:function(e,t){Cd.M(e,t);var n=Pd;if(n&&e){var r=We(n).hoistableScripts,i=Md(e),a=r.get(i);a||((a=n.querySelector(Ld(i)))||(e=p({src:e,async:!0,type:"module"},t),(t=Sd.get(i))&&Fd(e,t),He(a=n.createElement("script")),ed(a,"link",e),n.head.appendChild(a)),a={type:"script",instance:a,count:1,state:null},r.set(i,a))}}};var Pd="undefined"===typeof document?null:document;function Td(e,t,n){var r=Pd;if(r&&"string"===typeof t&&t){var i=mt(t);i='link[rel="'+e+'"][href="'+i+'"]',"string"===typeof n&&(i+='[crossorigin="'+n+'"]'),kd.has(i)||(kd.add(i),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(i)&&(ed(t=r.createElement("link"),"link",e),He(t),r.head.appendChild(t)))}}function jd(e,t,n,r){var i,a,s,l,c=(c=W.current)?Ed(c):null;if(!c)throw Error(o(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=Dd(n.href),(r=(n=We(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=Dd(n.href);var u=We(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(i=c,a=e,s=n,l=d.state,i.querySelector('link[rel="preload"][as="style"]['+a+"]")?l.loading=1:(a=i.createElement("link"),l.preload=a,a.addEventListener("load",(function(){return l.loading|=1})),a.addEventListener("error",(function(){return l.loading|=2})),ed(a,"link",s),He(a),i.head.appendChild(a))))),t&&null===r)throw Error(o(528,""));return d}if(t&&null!==r)throw Error(o(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Md(n),(r=(n=We(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(o(444,e))}}function Dd(e){return'href="'+mt(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Md(e){return'[src="'+mt(e)+'"]'}function Ld(e){return"script[async]"+e}function _d(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,He(r),r;var i=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return He(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",i),zd(r,n.precedence,e),t.instance=r;case"stylesheet":i=Dd(n.href);var a=e.querySelector(Ad(i));if(a)return t.state.loading|=4,t.instance=a,He(a),a;r=Rd(n),(i=Sd.get(i))&&Od(r,i),He(a=(e.ownerDocument||e).createElement("link"));var s=a;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(a,"link",r),t.state.loading|=4,zd(a,n.precedence,e),t.instance=a;case"script":return a=Md(n.src),(i=e.querySelector(Ld(a)))?(t.instance=i,He(i),i):(r=n,(i=Sd.get(a))&&Fd(r=p({},n),i),He(i=(e=e.ownerDocument||e).createElement("script")),ed(i,"link",r),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(o(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,zd(r,n.precedence,e));return t.instance}function zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Od(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Nd=null;function Id(e,t,n){if(null===Nd){var r=new Map,i=Nd=new Map;i.set(n,r)}else(r=(i=Nd).get(n))||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[Ie]||a[Me]||"link"===e&&"stylesheet"===a.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==a.namespaceURI){var o=a.getAttribute(t)||"";o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function $d(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Bd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Vd=null;function Ud(){}function Wd(){if(this.count--,0===this.count)if(this.stylesheets)Yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Hd=null;function Yd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Hd=new Map,t.forEach(qd,e),Hd=null,Wd.call(e))}function qd(e,t){if(!(4&t.state.loading)){var n=Hd.get(e);if(n)var r=n.get(null);else{n=new Map,Hd.set(e,n);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),a=0;a<i.length;a++){var o=i[a];"LINK"!==o.nodeName&&"not all"===o.getAttribute("media")||(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}o=(i=t.instance).getAttribute("data-precedence"),(a=n.get(o)||r)===r&&n.set(null,i),n.set(o,i),this.count++,r=Wd.bind(this),i.addEventListener("load",r),i.addEventListener("error",r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(i,e.firstChild),t.state.loading|=4}}var Kd={$$typeof:w,Provider:null,Consumer:null,_currentValue:O,_currentValue2:O,_threadCount:0};function Gd(e,t,n,r,i,a,o,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function Xd(e,t,n,r,i,a,o,s,l,c,u,d){return e=new Gd(e,t,n,o,s,l,c,d),t=1,!0===a&&(t|=24),a=Or(3,null,null,t),e.current=a,a.stateNode=e,(t=Li()).refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},na(a),e}function Zd(e){return e?e=_r:_r}function Qd(e,t,n,r,i,a){i=Zd(i),null===r.context?r.context=i:r.pendingContext=i,(r=ia(t)).payload={element:n},null!==(a=void 0===a?null:a)&&(r.callback=a),null!==(n=aa(e,r,t))&&(Oc(n,0,t),oa(n,e,t))}function Jd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Jd(e,t),(e=e.alternate)&&Jd(e,t)}function tp(e){if(13===e.tag){var t=Rr(e,67108864);null!==t&&Oc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var i=_.T;_.T=null;var a=z.p;try{z.p=2,ap(e,t,n,r)}finally{z.p=a,_.T=i}}function ip(e,t,n,r){var i=_.T;_.T=null;var a=z.p;try{z.p=8,ap(e,t,n,r)}finally{z.p=a,_.T=i}}function ap(e,t,n,r){if(np){var i=op(r);if(null===i)Vu(e,t,r,sp,n),yp(e,r);else if(function(e,t,n,r,i){switch(t){case"focusin":return dp=bp(dp,e,t,n,r,i),!0;case"dragenter":return pp=bp(pp,e,t,n,r,i),!0;case"mouseover":return fp=bp(fp,e,t,n,r,i),!0;case"pointerover":var a=i.pointerId;return hp.set(a,bp(hp.get(a)||null,e,t,n,r,i)),!0;case"gotpointercapture":return a=i.pointerId,mp.set(a,bp(mp.get(a)||null,e,t,n,r,i)),!0}return!1}(i,e,t,n,r))r.stopPropagation();else if(yp(e,r),4&t&&-1<vp.indexOf(e)){for(;null!==i;){var a=Ve(i);if(null!==a)switch(a.tag){case 3:if((a=a.stateNode).current.memoizedState.isDehydrated){var o=ye(a.pendingLanes);if(0!==o){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var l=1<<31-fe(o);s.entanglements[1]|=l,o&=~l}Su(a),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(s=Rr(a,2))&&Oc(s,0,2),Bc(),ep(a,2)}if(null===(a=op(r))&&Vu(e,t,r,sp,n),a===i)break;i=a}null!==i&&r.stopPropagation()}else Vu(e,t,r,null,n)}}function op(e){return lp(e=Rt(e))}var sp=null;function lp(e){if(sp=null,null!==(e=Be(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case ie:return 8;case ae:case oe:return 32;case se:return 268435456;default:return 32}default:return 32}}var up=!1,dp=null,pp=null,fp=null,hp=new Map,mp=new Map,gp=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(e,t){switch(e){case"focusin":case"focusout":dp=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":fp=null;break;case"pointerover":case"pointerout":hp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mp.delete(t.pointerId)}}function bp(e,t,n,r,i,a){return null===e||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},null!==t&&(null!==(t=Ve(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==i&&-1===t.indexOf(i)&&t.push(i),e)}function xp(e){var t=Be(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=z.p;try{return z.p=e,t()}finally{z.p=n}}(e.priority,(function(){if(13===n.tag){var e=_c();e=je(e);var t=Rr(n,e);null!==t&&Oc(t,0,e),ep(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=op(e.nativeEvent);if(null!==n)return null!==(t=Ve(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function Sp(e,t,n){wp(e)&&n.delete(t)}function kp(){up=!1,null!==dp&&wp(dp)&&(dp=null),null!==pp&&wp(pp)&&(pp=null),null!==fp&&wp(fp)&&(fp=null),hp.forEach(Sp),mp.forEach(Sp)}function Ep(e,t){e.blockedOn===t&&(e.blockedOn=null,up||(up=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kp)))}var Cp=null;function Pp(e){Cp!==e&&(Cp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Cp===e&&(Cp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if("function"!==typeof r){if(null===lp(r||n))continue;break}var a=Ve(n);null!==a&&(e.splice(t,3),t-=3,Ro(a,{pending:!0,data:i,method:n.method,action:r},r,i))}})))}function Tp(e){function t(t){return Ep(t,e)}null!==dp&&Ep(dp,e),null!==pp&&Ep(pp,e),null!==fp&&Ep(fp,e),hp.forEach(t),mp.forEach(t);for(var n=0;n<gp.length;n++){var r=gp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gp.length&&null===(n=gp[0]).blockedOn;)xp(n),null===n.blockedOn&&gp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[Le]||null;if("function"===typeof a)o||Pp(n);else if(o){var s=null;if(a&&a.hasAttribute("formAction")){if(i=a,o=a[Le]||null)s=o.formAction;else if(null!==lp(i))continue}else s=o.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Pp(n)}}}function jp(e){this._internalRoot=e}function Dp(e){this._internalRoot=e}Dp.prototype.render=jp.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(o(409));Qd(t.current,_c(),e,t,null,null)},Dp.prototype.unmount=jp.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Qd(e.current,2,null,e,null,null),Bc(),t[_e]=null}},Dp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gp.length&&0!==t&&t<gp[n].priority;n++);gp.splice(n,0,e),0===n&&xp(e)}};var Ap=i.version;if("19.1.0"!==Ap)throw Error(o(527,Ap,"19.1.0"));z.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(o(188));throw e=Object.keys(e).join(","),Error(o(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(o(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(null===i)break;var a=i.alternate;if(null===a){if(null!==(r=i.return)){n=r;continue}break}if(i.child===a.child){for(a=i.child;a;){if(a===n)return u(i),e;if(a===r)return u(i),t;a=a.sibling}throw Error(o(188))}if(n.return!==r.return)n=i,r=a;else{for(var s=!1,c=i.child;c;){if(c===n){s=!0,n=i,r=a;break}if(c===r){s=!0,r=i,n=a;break}c=c.sibling}if(!s){for(c=a.child;c;){if(c===n){s=!0,n=a,r=i;break}if(c===r){s=!0,r=a,n=i;break}c=c.sibling}if(!s)throw Error(o(189))}}if(n.alternate!==r)throw Error(o(190))}if(3!==n.tag)throw Error(o(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Rp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:_,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Mp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Mp.isDisabled&&Mp.supportsFiber)try{ue=Mp.inject(Rp),de=Mp}catch(_p){}}t.createRoot=function(e,t){if(!s(e))throw Error(o(299));var n=!1,r="",i=ys,a=bs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(i=t.onUncaughtError),void 0!==t.onCaughtError&&(a=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=Xd(e,1,!1,null,0,n,r,i,a,l,0,null),e[_e]=t.current,$u(e),new jp(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(o(299));var r=!1,i="",a=ys,l=bs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(i=n.identifierPrefix),void 0!==n.onUncaughtError&&(a=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=Xd(e,1,!0,t,0,r,i,a,l,c,0,u)).context=Zd(null),n=t.current,(i=ia(r=je(r=_c()))).callback=null,aa(n,i,r),n=r,t.current.lanes=n,Ce(t,n),Su(t),e[_e]=t.current,$u(e),new Dp(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=o(e,a(n)))}return e}function a(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return i.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=o(t,n));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,i,a,o){return r=o.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:o}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function T(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function j(){}function D(e,t,i,a,o){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return D((u=e._init)(e._payload),t,i,a,o)}}if(u)return o=o(e),u=""===a?"."+T(e,0):a,w(o)?(i="",null!=u&&(i=u.replace(P,"$&/")+"/"),D(o,t,i,"",(function(e){return e}))):null!=o&&(C(o)&&(l=o,c=i+(null==o.key||e&&e.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+u,o=E(l.type,c,void 0,0,0,l.props)),t.push(o)),1;u=0;var d,h=""===a?".":a+":";if(w(e))for(var m=0;m<e.length;m++)u+=D(a=e[m],t,i,s=h+T(a,m),o);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(a=e.next()).done;)u+=D(a=a.value,t,i,s=h+T(a,m++),o);else if("object"===s){if("function"===typeof e.then)return D(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(j,j):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,i,a,o);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],i=0;return D(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var M="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function L(){}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=i,t.Profiler=o,t.PureComponent=b,t.StrictMode=a,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),i=e.key;if(null!=t)for(a in void 0!==t.ref&&void 0,void 0!==t.key&&(i=""+t.key),t)!k.call(t,a)||"key"===a||"__self"===a||"__source"===a||"ref"===a&&void 0===t.ref||(r[a]=t[a]);var a=arguments.length-2;if(1===a)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return E(e.type,i,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,i={},a=null;if(null!=t)for(r in void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(i[r]=t[r]);var o=arguments.length-2;if(1===o)i.children=n;else if(1<o){for(var s=Array(o),l=0;l<o;l++)s[l]=arguments[l+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps)void 0===i[r]&&(i[r]=o[r]);return E(e,a,void 0,0,0,i)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),i=S.S;null!==i&&i(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(L,M)}catch(a){M(a)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var i=n?n.call(r,e,t):void 0;if(void 0!==i)return!!i;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var a=Object.keys(e),o=Object.keys(t);if(a.length!==o.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<a.length;l++){var c=a[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(i=n?n.call(r,u,d,c):void 0)||void 0===i&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,i=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,a=/^[\u0020-\u003A\u003D-\u007E]*$/,o=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function i(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function a(){}var o={d:{f:a,r:function(){throw Error(i(522))},D:a,C:a,L:a,m:a,X:a,S:a,M:a},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=o,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(i(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=o.p;try{if(l.T=null,o.p=2,e)return e()}finally{l.T=t,o.p=n,o.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,o.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&o.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),i="string"===typeof t.integrity?t.integrity:void 0,a="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?o.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:i,fetchPriority:a}):"script"===n&&o.d.X(e,{crossOrigin:r,integrity:i,fetchPriority:a,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);o.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&o.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);o.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);o.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else o.d.m(e)},t.requestFormReset=function(e){o.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function i(e,t,r){var i=null;if(void 0!==r&&(i=""+r),void 0!==t.key&&(i=""+t.key),"key"in t)for(var a in r={},t)"key"!==a&&(r[a]=t[a]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:i,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=i,t.jsxs=i},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,i=e[r];if(!(0<a(i,t)))break e;e[r]=t,e[n]=i,n=r}}function r(e){return 0===e.length?null:e[0]}function i(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,i=e.length,o=i>>>1;r<o;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>a(l,n))c<i&&0>a(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<i&&0>a(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function a(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)i(u);else{if(!(t.startTime<=e))break;i(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,E||(E=!0,k());else{var t=r(u);null!==t&&M(S,t.startTime-e)}}var k,E=!1,C=-1,P=5,T=-1;function j(){return!!v||!(t.unstable_now()-T<P)}function D(){if(v=!1,E){var e=t.unstable_now();T=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var a=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&j());){var o=p.callback;if("function"===typeof o){p.callback=null,f=p.priorityLevel;var s=o(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,w(e),n=!0;break t}p===r(c)&&i(c),w(e)}else i(c);p=r(c)}if(null!==p)n=!0;else{var l=r(u);null!==l&&M(S,l.startTime-e),n=!1}}break e}finally{p=null,f=a,h=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof x)k=function(){x(D)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=D,k=function(){R.postMessage(null)}}else k=function(){y(D,0)};function M(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,i,a){var o=t.unstable_now();switch("object"===typeof a&&null!==a?a="number"===typeof(a=a.delay)&&0<a?o+a:o:a=o,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:i,priorityLevel:e,startTime:a,expirationTime:s=a+s,sortIndex:-1},a>o?(e.sortIndex=a,n(u,e),null===r(c)&&e===r(u)&&(g?(b(C),C=-1):g=!0,M(S,a-o))):(e.sortIndex=s,n(c,e),m||h||(m=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)}},t={};function n(r){var i=t[r];if(void 0!==i)return i.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".20815797.chunk.js",n.miniCssF=e=>{},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio-v2:";n.l=(r,i,a,o)=>{if(e[r])e[r].push(i);else{var s,l;if(void 0!==a)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[i];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var i=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),i&&i.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var i=n.o(e,t)?e[t]:void 0;if(0!==i)if(i)r.push(i[2]);else{var a=new Promise(((n,r)=>i=e[t]=[n,r]));r.push(i[2]=a);var o=n.p+n.u(t),s=new Error;n.l(o,(r=>{if(n.o(e,t)&&(0!==(i=e[t])&&(e[t]=void 0),i)){var a=r&&("load"===r.type?"missing":r.type),o=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",s.name="ChunkLoadError",s.type=a,s.request=o,i[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var i,a,o=r[0],s=r[1],l=r[2],c=0;if(o.some((t=>0!==e[t]))){for(i in s)n.o(s,i)&&(n.m[i]=s[i]);if(l)l(n)}for(t&&t(r);c<o.length;c++)a=o[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0},r=self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function i(){return d((function(e,t){let{pathname:n,search:r,hash:i}=e.location;return l("",{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){return"string"===typeof t?t:c(t)}),null,arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function a(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function o(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:o=document.defaultView,v5Compat:u=!1}=i,d=o.history,p="POP",f=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){p="POP";let e=m(),t=null==e?null:e-h;h=e,f&&f({action:p,location:y.location,delta:t})}function v(e){let t="null"!==o.location.origin?o.location.origin:o.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),a(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let y={get action(){return p},get location(){return e(o,d)},listen(e){if(f)throw new Error("A history only accepts one active listener");return o.addEventListener(r,g),f=e,()=>{o.removeEventListener(r,g),f=null}},createHref:e=>t(o,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p="PUSH";let r=l(y.location,e,t);n&&n(r,e),h=m()+1;let i=s(r,h),a=y.createHref(r);try{d.pushState(i,"",a)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;o.location.assign(a)}u&&f&&f({action:p,location:y.location,delta:1})},replace:function(e,t){p="REPLACE";let r=l(y.location,e,t);n&&n(r,e),h=m();let i=s(r,h),a=y.createHref(r);d.replaceState(i,"",a),u&&f&&f({action:p,location:y.location,delta:0})},go:e=>d.go(e)};return y}new WeakMap;function p(e,t){return f(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function f(e,t,n,r){let i=j(("string"===typeof t?u(t):t).pathname||"/",n);if(null==i)return null;let a=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(a);let o=null;for(let s=0;null==o&&s<a.length;++s){let e=T(i);o=E(a[s],e,r)}return o}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=(e,i,o)=>{let s={relativePath:void 0===o?e.path||"":o,caseSensitive:!0===e.caseSensitive,childrenIndex:i,route:e};s.relativePath.startsWith("/")&&(a(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let l=L([r,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(a(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),h(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:k(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))i(e,t,n);else i(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,i=n.endsWith("?"),a=n.replace(/\?$/,"");if(0===r.length)return i?[a,""]:[a];let o=m(r.join("/")),s=[];return s.push(...o.map((e=>""===e?a:[a,e].join("/")))),i&&s.push(...o),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,b=1,x=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=y),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?b:x)),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,i={},a="/",o=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===a?t:t.slice(a.length)||"/",u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:L([a,u.pathname]),pathnameBase:_(L([a,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(a=L([a,u.pathnameBase]))}return o}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=P(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,"$1"),s=i.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:i}=t;if("*"===r){let e=s[n]||"";o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=i&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:a,pathnameBase:o,pattern:e}}function P(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];o("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),i+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":""!==e&&"/"!==e&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function T(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return o(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function j(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function D(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e){let t=A(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function M(e,t,n){let r,i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},a(!r.pathname||!r.pathname.includes("?"),D("?","pathname","search",r)),a(!r.pathname||!r.pathname.includes("#"),D("#","pathname","hash",r)),a(!r.search||!r.search.includes("#"),D("#","search","hash",r)));let o,s=""===e||""===r.pathname,l=s?"/":r.pathname;if(null==l)o=n;else{let e=t.length-1;if(!i&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}o=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:i=""}="string"===typeof e?u(e):e,a=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:a,search:z(r),hash:O(i)}}(r,o),d=l&&"/"!==l&&l.endsWith("/"),p=(s||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}var L=e=>e.join("/").replace(/\/\/+/g,"/"),_=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",O=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var N=["POST","PUT","PATCH","DELETE"],I=(new Set(N),["GET",...N]);new Set(I),Symbol("ResetLoaderData");var $=e.createContext(null);$.displayName="DataRouter";var B=e.createContext(null);B.displayName="DataRouterState";var V=e.createContext({isTransitioning:!1});V.displayName="ViewTransition";var U=e.createContext(new Map);U.displayName="Fetchers";var W=e.createContext(null);W.displayName="Await";var H=e.createContext(null);H.displayName="Navigation";var Y=e.createContext(null);Y.displayName="Location";var q=e.createContext({outlet:null,matches:[],isDataRoute:!1});q.displayName="Route";var K=e.createContext(null);K.displayName="RouteError";function G(){return null!=e.useContext(Y)}function X(){return a(G(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(Y).location}var Z="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Q(t){e.useContext(H).static||e.useLayoutEffect(t)}function J(){let{isDataRoute:t}=e.useContext(q);return t?function(){let{router:t}=ce("useNavigate"),n=de("useNavigate"),r=e.useRef(!1);Q((()=>{r.current=!0}));let i=e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};o(r.current,Z),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...i}))}),[t,n]);return i}():function(){a(G(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext($),{basename:n,navigator:r}=e.useContext(H),{matches:i}=e.useContext(q),{pathname:s}=X(),l=JSON.stringify(R(i)),c=e.useRef(!1);Q((()=>{c.current=!0}));let u=e.useCallback((function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(o(c.current,Z),!c.current)return;if("number"===typeof e)return void r.go(e);let a=M(e,JSON.parse(l),s,"path"===i.relative);null==t&&"/"!==n&&(a.pathname="/"===a.pathname?n:L([n,a.pathname])),(i.replace?r.replace:r.push)(a,i.state,i)}),[n,r,l,s,t]);return u}()}var ee=e.createContext(null);function te(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(q),{pathname:i}=X(),a=JSON.stringify(R(r));return e.useMemo((()=>M(t,JSON.parse(a),i,"path"===n)),[t,a,i,n])}function ne(t,n,r,i){a(G(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(H),{matches:c}=e.useContext(q),d=c[c.length-1],f=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";he(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=X();if(n){let e="string"===typeof n?u(n):n;a("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:p(t,{pathname:x});o(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),o(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=se(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:L([m,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:L([m,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,i);return n&&S?e.createElement(Y.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function re(){let t=pe(),n=F(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,i="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:i},o={padding:"2px 4px",backgroundColor:i},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:o},"ErrorBoundary")," or"," ",e.createElement("code",{style:o},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:a},r):null,s)}var ie=e.createElement(re,null),ae=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(q.Provider,{value:this.props.routeContext},e.createElement(K.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function oe(t){let{routeContext:n,match:r,children:i}=t,a=e.useContext($);return a&&a.static&&a.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(a.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(q.Provider,{value:n},i)}function se(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let i=t,o=r?.errors;if(null!=o){let e=i.findIndex((e=>e.route.id&&void 0!==o?.[e.route.id]));a(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(o).join(",")}`),i=i.slice(0,Math.min(i.length,e+1))}let s=!1,l=-1;if(r)for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,a=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||a){s=!0,i=l>=0?i.slice(0,l+1):[i[0]];break}}}return i.reduceRight(((t,a,c)=>{let u,d=!1,p=null,f=null;r&&(u=o&&a.route.id?o[a.route.id]:void 0,p=a.route.errorElement||ie,s&&(l<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):l===c&&(d=!0,f=a.route.hydrateFallbackElement||null)));let h=n.concat(i.slice(0,c+1)),m=()=>{let n;return n=u?p:d?f:a.route.Component?e.createElement(a.route.Component,null):a.route.element?a.route.element:t,e.createElement(oe,{match:a,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(a.route.ErrorBoundary||a.route.errorElement||0===c)?e.createElement(ae,{location:r.location,revalidation:r.revalidation,component:p,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function le(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ce(t){let n=e.useContext($);return a(n,le(t)),n}function ue(t){let n=e.useContext(B);return a(n,le(t)),n}function de(t){let n=function(t){let n=e.useContext(q);return a(n,le(t)),n}(t),r=n.matches[n.matches.length-1];return a(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function pe(){let t=e.useContext(K),n=ue("useRouteError"),r=de("useRouteError");return void 0!==t?t:n.errors?.[r]}var fe={};function he(e,t,n){t||fe[e]||(fe[e]=!0,o(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ne(t,void 0,r,n)}));function me(t){return function(t){let n=e.useContext(q).outlet;return n?e.createElement(ee.Provider,{value:t},n):n}(t.context)}function ge(e){a(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ve(t){let{basename:n="/",children:r=null,location:i,navigationType:s="POP",navigator:l,static:c=!1}=t;a(!G(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=e.useMemo((()=>({basename:d,navigator:l,static:c,future:{}})),[d,l,c]);"string"===typeof i&&(i=u(i));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:v="default"}=i,y=e.useMemo((()=>{let e=j(f,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:s}}),[d,f,h,m,g,v,s]);return o(null!=y,`<Router basename="${d}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(H.Provider,{value:p},e.createElement(Y.Provider,{children:r,value:y}))}function ye(e){let{children:t,location:n}=e;return ne(be(t),n)}e.Component;function be(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,i)=>{if(!e.isValidElement(t))return;let o=[...n,i];if(t.type===e.Fragment)return void r.push.apply(r,be(t.props.children,o));a(t.type===ge,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),a(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||o.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=be(t.props.children,o)),r.push(s)})),r}var xe="get",we="application/x-www-form-urlencoded";function Se(e){return null!=e&&"string"===typeof e.tagName}var ke=null;var Ee=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ce(e){return null==e||Ee.has(e)?e:(o(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${we}"`),null)}function Pe(e,t){let n,r,i,a,o;if(Se(s=e)&&"form"===s.tagName.toLowerCase()){let o=e.getAttribute("action");r=o?j(o,t):null,n=e.getAttribute("method")||xe,i=Ce(e.getAttribute("enctype"))||we,a=new FormData(e)}else if(function(e){return Se(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Se(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let o=e.form;if(null==o)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||o.getAttribute("action");if(r=s?j(s,t):null,n=e.getAttribute("formmethod")||o.getAttribute("method")||xe,i=Ce(e.getAttribute("formenctype"))||Ce(o.getAttribute("enctype"))||we,a=new FormData(o,e),!function(){if(null===ke)try{new FormData(document.createElement("form"),0),ke=!1}catch(e){ke=!0}return ke}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";a.append(`${e}x`,"0"),a.append(`${e}y`,"0")}else t&&a.append(t,r)}}else{if(Se(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xe,r=null,i=we,o=e}var s;return a&&"text/plain"===i&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}function Te(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function je(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function De(e){return null!=e&&"string"===typeof e.page}function Ae(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Re(e,t,n,r,i,a){let o=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===a?t.filter(((e,t)=>o(e,t)||s(e,t))):"data"===a?t.filter(((t,a)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Me(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i})).flat(1),[...new Set(r)];var r}function Le(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,i)=>{if(t&&!De(i)&&"script"===i.as&&i.href&&r.has(i.href))return e;let a=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e}),[])}function _e(e){return{__html:e}}Symbol("SingleFetchRedirect");var ze=new Set([100,101,204,205]);function Oe(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===j(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Fe(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let i,a=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(F(n))return e.createElement(Ne,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),a);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ne,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},i.stack),a)}function Ne(t){let{title:n,renderScripts:r,isOutsideRemixApp:i,children:a}=t,{routeModules:o}=Ue();return o.root?.Layout&&!i?a:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},a,r?e.createElement(Xe,null):null)))}function Ie(e){return!0===e}function $e(){let t=e.useContext($);return Te(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Be(){let t=e.useContext(B);return Te(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ve=e.createContext(void 0);function Ue(){let t=e.useContext(Ve);return Te(t,"You must render this element inside a <HydratedRouter> element"),t}function We(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function He(e,t,n){if(n&&!Ge)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ye(t){let{page:n,...r}=t,{router:i}=$e(),a=e.useMemo((()=>p(i.routes,n,i.basename)),[i.routes,n,i.basename]);return a?e.createElement(Ke,{page:n,matches:a,...r}):null}function qe(t){let{manifest:n,routeModules:r}=Ue(),[i,a]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await je(r,n);return e.links?e.links():[]}return[]})));return Le(r.flat(1).filter(Ae).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||a(t)})),()=>{e=!0}}),[t,n,r]),i}function Ke(t){let{page:n,matches:r,...i}=t,a=X(),{manifest:o,routeModules:s}=Ue(),{basename:l}=$e(),{loaderData:c,matches:u}=Be(),d=e.useMemo((()=>Re(n,r,u,o,a,"data")),[n,r,u,o,a]),p=e.useMemo((()=>Re(n,r,u,o,a,"assets")),[n,r,u,o,a]),f=e.useMemo((()=>{if(n===a.pathname+a.search+a.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=o.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let i=Oe(n,l);return t&&e.size>0&&i.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[i.pathname+i.search]}),[l,c,a,o,d,r,n,s]),h=e.useMemo((()=>Me(p,o)),[p,o]),m=qe(p);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...i}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...i}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ve.displayName="FrameworkContext";var Ge=!1;function Xe(t){let{manifest:n,serverHandoffString:r,isSpaMode:i,ssr:a,renderMeta:o}=Ue(),{router:s,static:l,staticContext:c}=$e(),{matches:u}=Be(),d=Ie(a);o&&(o.didRenderScripts=!0);let f=He(u,null,i);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let i=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",a=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${f.map(((e,t)=>{let r=`route${t}`,i=n.routes[e.route.id];Te(i,`Route ${e.route.id} not found in manifest`);let{clientActionModule:a,clientLoaderModule:o,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=i,u=[...a?[{module:a,varName:`${r}_clientAction`}]:[],...o?[{module:o,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,i=new Set(t.state.matches.map((e=>e.route.id))),a=t.state.location.pathname.split("/").filter(Boolean),o=["/"];for(a.pop();a.length>0;)o.push(`/${a.join("/")}`),a.pop();o.forEach((e=>{let n=p(t.routes,e,t.basename);n&&n.forEach((e=>i.add(e.route.id)))}));let s=[...i].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:_e(i),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:_e(a),type:"module",async:!0}))}),[]),m=Ge?[]:(n.entry.imports.concat(Me(f,n,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let v="object"===typeof n.sri?n.sri:{};return Ge?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:v[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:v[n.entry.module],suppressHydrationWarning:!0}),m.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:v[n],suppressHydrationWarning:!0}))),h)}function Ze(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Qe="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Qe&&(window.__reactRouterVersion="7.5.1")}catch(Iv){}function Je(t){let{basename:n,children:r,window:a}=t,o=e.useRef();null==o.current&&(o.current=i({window:a,v5Compat:!0}));let s=o.current,[l,c]=e.useState({action:s.action,location:s.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>s.listen(u)),[s,u]),e.createElement(ve,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}var et=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tt=e.forwardRef((function(t,n){let r,{onClick:i,discover:s="render",prefetch:l="none",relative:u,reloadDocument:d,replace:p,state:f,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:b}=e.useContext(H),x="string"===typeof m&&et.test(m),w=!1;if("string"===typeof m&&x&&(r=m,Qe))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=j(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(Iv){o(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(G(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:i}=e.useContext(H),{hash:o,pathname:s,search:l}=te(t,{relative:n}),c=s;return"/"!==r&&(c="/"===s?r:L([r,s])),i.createHref({pathname:c,search:l,hash:o})}(m,{relative:u}),[k,E,C]=function(t,n){let r=e.useContext(Ve),[i,a]=e.useState(!1),[o,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=n,f=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(i){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[i]);let h=()=>{a(!0)},m=()=>{a(!1),s(!1)};return r?"intent"!==t?[o,f,{}]:[o,f,{onFocus:We(l,h),onBlur:We(c,m),onMouseEnter:We(u,h),onMouseLeave:We(d,m),onTouchStart:We(p,h)}]:[!1,f,{}]}(l,y),P=function(t){let{target:n,replace:r,state:i,preventScrollReset:a,relative:o,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=J(),u=X(),d=te(t,{relative:o});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);l(t,{replace:n,state:i,preventScrollReset:a,relative:o,viewTransition:s})}}),[u,l,d,r,i,n,t,a,o,s])}(m,{replace:p,state:f,target:h,preventScrollReset:g,relative:u,viewTransition:v});let T=e.createElement("a",{...y,...C,href:r||S,onClick:w||d?i:function(e){i&&i(e),e.defaultPrevented||P(e)},ref:Ze(n,E),target:h,"data-discover":x||"render"!==s?void 0:"true"});return k&&!x?e.createElement(e.Fragment,null,T,e.createElement(Ye,{page:S})):T}));tt.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:i=!1,className:o="",end:s=!1,style:l,to:c,viewTransition:u,children:d,...p}=t,f=te(c,{relative:p.relative}),h=X(),m=e.useContext(B),{navigator:g,basename:v}=e.useContext(H),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(V);a(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=it("useViewTransitionState"),o=te(t,{relative:n.relative});if(!r.isTransitioning)return!1;let s=j(r.currentLocation.pathname,i)||r.currentLocation.pathname,l=j(r.nextLocation.pathname,i)||r.nextLocation.pathname;return null!=C(o.pathname,l)||null!=C(o.pathname,s)}(f)&&!0===u,b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;i||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=j(w,v)||w);const S="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,E=x===b||!s&&x.startsWith(b)&&"/"===x.charAt(S),P=null!=w&&(w===b||!s&&w.startsWith(b)&&"/"===w.charAt(b.length)),T={isActive:E,isPending:P,isTransitioning:y},D=E?r:void 0;k="function"===typeof o?o(T):[o,E?"active":null,P?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A="function"===typeof l?l(T):l;return e.createElement(tt,{...p,"aria-current":D,className:k,ref:n,style:A,to:c,viewTransition:u},"function"===typeof d?d(T):d)})).displayName="NavLink";var nt=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:i,navigate:o,reloadDocument:s,replace:l,state:u,method:d=xe,action:p,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:g,...v}=t,y=st(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(H),i=e.useContext(q);a(i,"useFormAction must be used inside a RouteContext");let[o]=i.matches.slice(-1),s={...te(t||".",{relative:n})},l=X();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!o.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(s.pathname="/"===s.pathname?r:L([r,s.pathname]));return c(s)}(p,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof p&&et.test(p);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:s?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:i,method:n,navigate:o,replace:l,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function rt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function it(t){let n=e.useContext($);return a(n,rt(t)),n}nt.displayName="Form";var at=0,ot=()=>`__${String(++at)}__`;function st(){let{router:t}=it("useSubmit"),{basename:n}=e.useContext(H),r=de("useRouteId");return e.useCallback((async function(e){let i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:a,method:o,encType:s,formData:l,body:c}=Pe(e,n);if(!1===i.navigate){let e=i.fetcherKey||ot();await t.fetch(e,r,i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,flushSync:i.flushSync})}else await t.navigate(i.action||a,{preventScrollReset:i.preventScrollReset,formData:l,body:c,formMethod:i.method||o,formEncType:i.encType||s,replace:i.replace,state:i.state,fromRouteId:r,flushSync:i.flushSync,viewTransition:i.viewTransition})}),[t,n,r])}new TextEncoder;var lt=function(){return lt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},lt.apply(this,arguments)};Object.create;function ct(e,t,n){if(n||2===arguments.length)for(var r,i=0,a=t.length;i<a;i++)!r&&i in t||(r||(r=Array.prototype.slice.call(t,0,i)),r[i]=t[i]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ut=n(324),dt=n.n(ut),pt="-ms-",ft="-moz-",ht="-webkit-",mt="comm",gt="rule",vt="decl",yt="@keyframes",bt=Math.abs,xt=String.fromCharCode,wt=Object.assign;function St(e){return e.trim()}function kt(e,t){return(e=t.exec(e))?e[0]:e}function Et(e,t,n){return e.replace(t,n)}function Ct(e,t,n){return e.indexOf(t,n)}function Pt(e,t){return 0|e.charCodeAt(t)}function Tt(e,t,n){return e.slice(t,n)}function jt(e){return e.length}function Dt(e){return e.length}function At(e,t){return t.push(e),e}function Rt(e,t){return e.filter((function(e){return!kt(e,t)}))}var Mt=1,Lt=1,_t=0,zt=0,Ot=0,Ft="";function Nt(e,t,n,r,i,a,o,s){return{value:e,root:t,parent:n,type:r,props:i,children:a,line:Mt,column:Lt,length:o,return:"",siblings:s}}function It(e,t){return wt(Nt("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $t(e){for(;e.root;)e=It(e.root,{children:[e]});At(e,e.siblings)}function Bt(){return Ot=zt>0?Pt(Ft,--zt):0,Lt--,10===Ot&&(Lt=1,Mt--),Ot}function Vt(){return Ot=zt<_t?Pt(Ft,zt++):0,Lt++,10===Ot&&(Lt=1,Mt++),Ot}function Ut(){return Pt(Ft,zt)}function Wt(){return zt}function Ht(e,t){return Tt(Ft,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function qt(e){return Mt=Lt=1,_t=jt(Ft=e),zt=0,[]}function Kt(e){return Ft="",e}function Gt(e){return St(Ht(zt-1,Qt(91===e?e+2:40===e?e+1:e)))}function Xt(e){for(;(Ot=Ut())&&Ot<33;)Vt();return Yt(e)>2||Yt(Ot)>3?"":" "}function Zt(e,t){for(;--t&&Vt()&&!(Ot<48||Ot>102||Ot>57&&Ot<65||Ot>70&&Ot<97););return Ht(e,Wt()+(t<6&&32==Ut()&&32==Vt()))}function Qt(e){for(;Vt();)switch(Ot){case e:return zt;case 34:case 39:34!==e&&39!==e&&Qt(Ot);break;case 40:41===e&&Qt(e);break;case 92:Vt()}return zt}function Jt(e,t){for(;Vt()&&e+Ot!==57&&(e+Ot!==84||47!==Ut()););return"/*"+Ht(t,zt-1)+"*"+xt(47===e?e:Vt())}function en(e){for(;!Yt(Ut());)Vt();return Ht(e,zt)}function tn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case vt:return e.return=e.return||e.value;case mt:return"";case yt:return e.return=e.value+"{"+tn(e.children,r)+"}";case gt:if(!jt(e.value=e.props.join(",")))return""}return jt(n=tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function rn(e,t,n){switch(function(e,t){return 45^Pt(e,0)?(((t<<2^Pt(e,0))<<2^Pt(e,1))<<2^Pt(e,2))<<2^Pt(e,3):0}(e,t)){case 5103:return ht+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ht+e+e;case 4789:return ft+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ht+e+ft+e+pt+e+e;case 5936:switch(Pt(e,t+11)){case 114:return ht+e+pt+Et(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ht+e+pt+Et(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ht+e+pt+Et(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ht+e+pt+e+e;case 6165:return ht+e+pt+"flex-"+e+e;case 5187:return ht+e+Et(e,/(\w+).+(:[^]+)/,ht+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return ht+e+pt+"flex-item-"+Et(e,/flex-|-self/g,"")+(kt(e,/flex-|baseline/)?"":pt+"grid-row-"+Et(e,/flex-|-self/g,""))+e;case 4675:return ht+e+pt+"flex-line-pack"+Et(e,/align-content|flex-|-self/g,"")+e;case 5548:return ht+e+pt+Et(e,"shrink","negative")+e;case 5292:return ht+e+pt+Et(e,"basis","preferred-size")+e;case 6060:return ht+"box-"+Et(e,"-grow","")+ht+e+pt+Et(e,"grow","positive")+e;case 4554:return ht+Et(e,/([^-])(transform)/g,"$1"+ht+"$2")+e;case 6187:return Et(Et(Et(e,/(zoom-|grab)/,ht+"$1"),/(image-set)/,ht+"$1"),e,"")+e;case 5495:case 3959:return Et(e,/(image-set\([^]*)/,ht+"$1$`$1");case 4968:return Et(Et(e,/(.+:)(flex-)?(.*)/,ht+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ht+e+e;case 4200:if(!kt(e,/flex-|baseline/))return pt+"grid-column-align"+Tt(e,t)+e;break;case 2592:case 3360:return pt+Et(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,kt(e.props,/grid-\w+-end/)}))?~Ct(e+(n=n[t].value),"span",0)?e:pt+Et(e,"-start","")+e+pt+"grid-row-span:"+(~Ct(n,"span",0)?kt(n,/\d+/):+kt(n,/\d+/)-+kt(e,/\d+/))+";":pt+Et(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return kt(e.props,/grid-\w+-start/)}))?e:pt+Et(Et(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Et(e,/(.+)-inline(.+)/,ht+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(jt(e)-1-t>6)switch(Pt(e,t+1)){case 109:if(45!==Pt(e,t+4))break;case 102:return Et(e,/(.+:)(.+)-([^]+)/,"$1"+ht+"$2-$3$1"+ft+(108==Pt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ct(e,"stretch",0)?rn(Et(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Et(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,i,a,o,s){return pt+n+":"+r+s+(i?pt+n+"-span:"+(a?o:+o-+r)+s:"")+e}));case 4949:if(121===Pt(e,t+6))return Et(e,":",":"+ht)+e;break;case 6444:switch(Pt(e,45===Pt(e,14)?18:11)){case 120:return Et(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ht+(45===Pt(e,14)?"inline-":"")+"box$3$1"+ht+"$2$3$1"+pt+"$2box$3")+e;case 100:return Et(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Et(e,"scroll-","scroll-snap-")+e}return e}function an(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vt:return void(e.return=rn(e.value,e.length,n));case yt:return tn([It(e,{value:Et(e.value,"@","@"+ht)})],r);case gt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(kt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$t(It(e,{props:[Et(t,/:(read-\w+)/,":-moz-$1")]})),$t(It(e,{props:[t]})),wt(e,{props:Rt(n,r)});break;case"::placeholder":$t(It(e,{props:[Et(t,/:(plac\w+)/,":"+ht+"input-$1")]})),$t(It(e,{props:[Et(t,/:(plac\w+)/,":-moz-$1")]})),$t(It(e,{props:[Et(t,/:(plac\w+)/,pt+"input-$1")]})),$t(It(e,{props:[t]})),wt(e,{props:Rt(n,r)})}return""}))}}function on(e){return Kt(sn("",null,null,null,[""],e=qt(e),0,[0],e))}function sn(e,t,n,r,i,a,o,s,l){for(var c=0,u=0,d=o,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=i,w=a,S=r,k=b;g;)switch(h=y,y=Vt()){case 40:if(108!=h&&58==Pt(k,d-1)){-1!=Ct(k+=Et(Gt(y),"&","&\f"),"&\f",bt(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Gt(y);break;case 9:case 10:case 13:case 32:k+=Xt(h);break;case 92:k+=Zt(Wt()-1,7);continue;case 47:switch(Ut()){case 42:case 47:At(cn(Jt(Vt(),Wt()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[c++]=jt(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=Et(k,/\f/g,"")),f>0&&jt(k)-d&&At(f>32?un(k+";",r,n,d-1,l):un(Et(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(At(S=ln(k,t,n,c,u,i,s,b,x=[],w=[],d,a),a),123===y)if(0===u)sn(k,t,S,S,x,a,d,s,w);else switch(99===p&&110===Pt(k,3)?100:p){case 100:case 108:case 109:case 115:sn(e,S,S,r&&At(ln(e,S,S,0,0,i,s,b,i,x=[],d,w),w),i,w,d,s,r?x:w);break;default:sn(k,S,S,S,[""],w,0,s,w)}}c=u=f=0,m=v=1,b=k="",d=o;break;case 58:d=1+jt(k),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Bt())continue;switch(k+=xt(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(jt(k)-1)*v,v=1;break;case 64:45===Ut()&&(k+=Gt(Vt())),p=Ut(),u=d=jt(b=k+=en(Wt())),y++;break;case 45:45===h&&2==jt(k)&&(m=0)}}return a}function ln(e,t,n,r,i,a,o,s,l,c,u,d){for(var p=i-1,f=0===i?a:[""],h=Dt(f),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Tt(e,p+1,p=bt(g=o[m])),x=e;y<h;++y)(x=St(g>0?f[y]+" "+b:Et(b,/&\f/g,f[y])))&&(l[v++]=x);return Nt(e,t,n,0===i?gt:s,l,c,u,d)}function cn(e,t,n,r){return Nt(e,t,n,mt,xt(Ot),Tt(e,2,-2),0,r)}function un(e,t,n,r,i){return Nt(e,t,n,vt,Tt(e,0,r),Tt(e,r+1,-1),r,i)}var dn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",fn="active",hn="data-styled-version",mn="6.1.17",gn="/*!sc*/\n",vn="undefined"!=typeof window&&"HTMLElement"in window,yn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY)),bn={},xn=(new Set,Object.freeze([])),wn=Object.freeze({});function Sn(e,t,n){return void 0===n&&(n=wn),e.theme!==n.theme&&e.theme||t||n.theme}var kn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),En=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cn=/(^-|-$)/g;function Pn(e){return e.replace(En,"-").replace(Cn,"")}var Tn=/(a)(d)/gi,jn=function(e){return String.fromCharCode(e+(e>25?39:97))};function Dn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=jn(t%52)+n;return(jn(t%52)+n).replace(Tn,"$1-$2")}var An,Rn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Mn=function(e){return Rn(5381,e)};function Ln(e){return Dn(Mn(e)>>>0)}function _n(e){return e.displayName||e.name||"Component"}function zn(e){return"string"==typeof e&&!0}var On="function"==typeof Symbol&&Symbol.for,Fn=On?Symbol.for("react.memo"):60115,Nn=On?Symbol.for("react.forward_ref"):60112,In={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vn=((An={})[Nn]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},An[Fn]=Bn,An);function Un(e){return("type"in(t=e)&&t.type.$$typeof)===Fn?Bn:"$$typeof"in e?Vn[e.$$typeof]:In;var t}var Wn=Object.defineProperty,Hn=Object.getOwnPropertyNames,Yn=Object.getOwnPropertySymbols,qn=Object.getOwnPropertyDescriptor,Kn=Object.getPrototypeOf,Gn=Object.prototype;function Xn(e,t,n){if("string"!=typeof t){if(Gn){var r=Kn(t);r&&r!==Gn&&Xn(e,r,n)}var i=Hn(t);Yn&&(i=i.concat(Yn(t)));for(var a=Un(e),o=Un(t),s=0;s<i.length;++s){var l=i[s];if(!(l in $n||n&&n[l]||o&&l in o||a&&l in a)){var c=qn(t,l);try{Wn(e,l,c)}catch(e){}}}}return e}function Zn(e){return"function"==typeof e}function Qn(e){return"object"==typeof e&&"styledComponentId"in e}function Jn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function er(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function tr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nr(e,t,n){if(void 0===n&&(n=!1),!n&&!tr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nr(e[r],t[r]);else if(tr(t))for(var r in t)e[r]=nr(e[r],t[r]);return e}function rr(e,t){Object.defineProperty(e,"toString",{value:t})}function ir(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ar=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,i=r;e>=i;)if((i<<=1)<0)throw ir(16,"".concat(e));this.groupSizes=new Uint32Array(i),this.groupSizes.set(n),this.length=i;for(var a=r;a<i;a++)this.groupSizes[a]=0}for(var o=this.indexOfGroup(e+1),s=(a=0,t.length);a<s;a++)this.tag.insertRule(o,t[a])&&(this.groupSizes[e]++,o++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var i=n;i<r;i++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),i=r+n,a=r;a<i;a++)t+="".concat(this.tag.getRule(a)).concat(gn);return t},e}(),or=new Map,sr=new Map,lr=1,cr=function(e){if(or.has(e))return or.get(e);for(;sr.has(lr);)lr++;var t=lr++;return or.set(e,t),sr.set(t,e),t},ur=function(e,t){lr=t+1,or.set(e,t),sr.set(t,e)},dr="style[".concat(pn,"][").concat(hn,'="').concat(mn,'"]'),pr=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fr=function(e,t,n){for(var r,i=n.split(","),a=0,o=i.length;a<o;a++)(r=i[a])&&e.registerName(t,r)},hr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(gn),i=[],a=0,o=r.length;a<o;a++){var s=r[a].trim();if(s){var l=s.match(pr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ur(u,c),fr(e,u,l[3]),e.getTag().insertRules(c,i)),i.length=0}else i.push(s)}}},mr=function(e){for(var t=document.querySelectorAll(dr),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(pn)!==fn&&(hr(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function gr(){return n.nc}var vr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(e){var t=Array.from(e.querySelectorAll("style[".concat(pn,"]")));return t[t.length-1]}(n),a=void 0!==i?i.nextSibling:null;r.setAttribute(pn,fn),r.setAttribute(hn,mn);var o=gr();return o&&r.setAttribute("nonce",o),n.insertBefore(r,a),r},yr=function(){function e(e){this.element=vr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var i=t[n];if(i.ownerNode===e)return i}throw ir(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),br=function(){function e(e){this.element=vr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),xr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),wr=vn,Sr={isServer:!vn,useCSSOMInjection:!yn},kr=function(){function e(e,t,n){void 0===e&&(e=wn),void 0===t&&(t={});var r=this;this.options=lt(lt({},Sr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&vn&&wr&&(wr=!1,mr(this)),rr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",i=function(n){var i=function(e){return sr.get(e)}(n);if(void 0===i)return"continue";var a=e.names.get(i),o=t.getGroup(n);if(void 0===a||!a.size||0===o.length)return"continue";var s="".concat(pn,".g").concat(n,'[id="').concat(i,'"]'),l="";void 0!==a&&a.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(o).concat(s,'{content:"').concat(l,'"}').concat(gn)},a=0;a<n;a++)i(a);return r}(r)}))}return e.registerId=function(e){return cr(e)},e.prototype.rehydrate=function(){!this.server&&vn&&mr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(lt(lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new xr(n):t?new yr(n):new br(n)}(this.options),new ar(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(cr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(cr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(cr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Er=/&/g,Cr=/^\s*\/\/.*$/gm;function Pr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Pr(e.children,t)),e}))}function Tr(e){var t,n,r,i=void 0===e?wn:e,a=i.options,o=void 0===a?wn:a,s=i.plugins,l=void 0===s?xn:s,c=function(e,r,i){return i.startsWith(n)&&i.endsWith(n)&&i.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===gt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Er,n).replace(r,c))})),o.prefix&&u.push(an),u.push(nn);var d=function(e,i,a,s){void 0===i&&(i=""),void 0===a&&(a=""),void 0===s&&(s="&"),t=s,n=i,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Cr,""),c=on(a||i?"".concat(a," ").concat(i," { ").concat(l," }"):l);o.namespace&&(c=Pr(c,o.namespace));var d,p=[];return tn(c,function(e){var t=Dt(e);return function(n,r,i,a){for(var o="",s=0;s<t;s++)o+=e[s](n,r,i,a)||"";return o}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||ir(15),Rn(e,t.name)}),5381).toString():"",d}var jr=new kr,Dr=Tr(),Ar=e.createContext({shouldForwardProp:void 0,styleSheet:jr,stylis:Dr}),Rr=(Ar.Consumer,e.createContext(void 0));function Mr(){return(0,e.useContext)(Ar)}function Lr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],i=n[1],a=Mr().styleSheet,o=(0,e.useMemo)((function(){var e=a;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,a]),s=(0,e.useMemo)((function(){return Tr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){dt()(r,t.stylisPlugins)||i(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:o,stylis:s}}),[t.shouldForwardProp,o,s]);return e.createElement(Ar.Provider,{value:l},e.createElement(Rr.Provider,{value:s},t.children))}var _r=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=Dr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rr(this,(function(){throw ir(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=Dr),this.name+e.hash},e}(),zr=function(e){return e>="A"&&e<="Z"};function Or(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Fr=function(e){return null==e||!1===e||""===e},Nr=function(e){var t,n,r=[];for(var i in e){var a=e[i];e.hasOwnProperty(i)&&!Fr(a)&&(Array.isArray(a)&&a.isCss||Zn(a)?r.push("".concat(Or(i),":"),a,";"):tr(a)?r.push.apply(r,ct(ct(["".concat(i," {")],Nr(a),!1),["}"],!1)):r.push("".concat(Or(i),": ").concat((t=i,null==(n=a)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in dn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Ir(e,t,n,r){return Fr(e)?[]:Qn(e)?[".".concat(e.styledComponentId)]:Zn(e)?!Zn(i=e)||i.prototype&&i.prototype.isReactComponent||!t?[e]:Ir(e(t),t,n,r):e instanceof _r?n?(e.inject(n,r),[e.getName(r)]):[e]:tr(e)?Nr(e):Array.isArray(e)?Array.prototype.concat.apply(xn,e.map((function(e){return Ir(e,t,n,r)}))):[e.toString()];var i}function $r(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Zn(n)&&!Qn(n))return!1}return!0}var Br=Mn(mn),Vr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$r(e),this.componentId=t,this.baseHash=Rn(Br,t),this.baseStyle=n,kr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Jn(r,this.staticRulesId);else{var i=er(Ir(this.rules,e,t,n)),a=Dn(Rn(this.baseHash,i)>>>0);if(!t.hasNameForId(this.componentId,a)){var o=n(i,".".concat(a),void 0,this.componentId);t.insertRules(this.componentId,a,o)}r=Jn(r,a),this.staticRulesId=a}else{for(var s=Rn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=er(Ir(u,e,t,n));s=Rn(s,d+c),l+=d}}if(l){var p=Dn(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Jn(r,p)}}return r},e}(),Ur=e.createContext(void 0);Ur.Consumer;var Wr={};new Set;function Hr(t,n,r){var i=Qn(t),a=t,o=!zn(t),s=n.attrs,l=void 0===s?xn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Pn(e);Wr[n]=(Wr[n]||0)+1;var r="".concat(n,"-").concat(Ln(mn+n+Wr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return zn(e)?"styled.".concat(e):"Styled(".concat(_n(e),")")}(t):d,f=n.displayName&&n.componentId?"".concat(Pn(n.displayName),"-").concat(n.componentId):n.componentId||u,h=i&&a.attrs?a.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(i&&a.shouldForwardProp){var g=a.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Vr(r,f,i?a.componentStyle:void 0);function b(t,n){return function(t,n,r){var i=t.attrs,a=t.componentStyle,o=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Ur),d=Mr(),p=t.shouldForwardProp||d.shouldForwardProp,f=Sn(n,u,o)||wn,h=function(e,t,n){for(var r,i=lt(lt({},t),{className:void 0,theme:n}),a=0;a<e.length;a+=1){var o=Zn(r=e[a])?r(i):r;for(var s in o)i[s]="className"===s?Jn(i[s],o[s]):"style"===s?lt(lt({},i[s]),o[s]):o[s]}return t.className&&(i.className=Jn(i.className,t.className)),i}(i,n,f),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?g.as=h.forwardedAs:p&&!p(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Mr();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(a,h),b=Jn(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[zn(m)&&!kn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=p;var x=e.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=i?Jn(a.foldedComponentIds,a.styledComponentId):"",x.styledComponentId=f,x.target=i?a.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=i?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,i=t;r<i.length;r++)nr(e,i[r],!0);return e}({},a.defaultProps,e):e}}),rr(x,(function(){return".".concat(x.styledComponentId)})),o&&Xn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Yr(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var qr=function(e){return Object.assign(e,{isCss:!0})};function Kr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Zn(e)||tr(e))return qr(Ir(Yr(xn,ct([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Ir(r):qr(Ir(Yr(r,t)))}function Gr(e,t,n){if(void 0===n&&(n=wn),!t)throw ir(1,t);var r=function(r){for(var i=[],a=1;a<arguments.length;a++)i[a-1]=arguments[a];return e(t,n,Kr.apply(void 0,ct([r],i,!1)))};return r.attrs=function(r){return Gr(e,t,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Gr(e,t,lt(lt({},n),r))},r}var Xr=function(e){return Gr(Hr,e)},Zr=Xr;kn.forEach((function(e){Zr[e]=Xr(e)}));var Qr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$r(e),kr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var i=r(er(Ir(this.rules,t,n,r)),""),a=this.componentId+e;n.insertRules(a,a,i)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&kr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=gr(),r=er([n&&'nonce="'.concat(n,'"'),"".concat(pn,'="true"'),"".concat(hn,'="').concat(mn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw ir(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw ir(2);var r=t.instance.toString();if(!r)return[];var i=((n={})[pn]="",n[hn]=mn,n.dangerouslySetInnerHTML={__html:r},n),a=gr();return a&&(i.nonce=a),[e.createElement("style",lt({},i,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new kr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw ir(2);return e.createElement(Lr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw ir(3)}})(),"__sc-".concat(pn,"__");const Jr="640px",ei="1024px",ti=`@media (max-width: ${Jr})`,ni=`@media (max-width: ${"768px"})`,ri=`@media (max-width: ${ei})`,ii=`@media (max-width: ${Jr}) and (orientation: landscape)`,ai=`@media (min-width: ${Jr}) and (max-width: ${ei}) and (orientation: landscape)`,oi=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var i=Kr.apply(void 0,ct([t],n,!1)),a="sc-global-".concat(Ln(JSON.stringify(i))),o=new Qr(i,a),s=function(t){var n=Mr(),r=e.useContext(Ur),i=e.useRef(n.styleSheet.allocateGSInstance(a)).current;return n.styleSheet.server&&l(i,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(i,t,n.styleSheet,r,n.stylis),function(){return o.removeStyles(i,n.styleSheet)}}),[i,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,i){if(o.isStatic)o.renderStyles(e,bn,n,i);else{var a=lt(lt({},t),{theme:Sn(t,r,s.defaultProps)});o.renderStyles(e,a,n,i)}}return e.memo(s)})`
  :root {    
    /* Card Type Colors - Aligned with cyberpunk aesthetic */
    --color-project: #2ecc71;
    --color-skill: #e74c3c;
    --color-experience: #56ccf2;
    
    /* Base Colors - Cyberpunk theme */
    --color-bg-primary: #0D1117;
    --color-bg-secondary: #161C24;
    --color-text-primary: #F0F6FC;
    --color-text-secondary: #8B949E;
    --color-accent: #9429a2;
    --color-border: #30363D;
    
    /* Panel Colors */
    --color-panel-bg: rgba(22, 28, 36, 0.8);
    --color-panel-border: #30363D;
    --color-panel-highlight: #56CCF2;
    
    /* Spacing */
    --spacing-xs: 0.25rem;
    --spacing-sm: 0.5rem;
    --spacing-md: 1rem;
    --spacing-lg: 1.5rem;
    --spacing-xl: 2rem;
    --spacing-xxl: 3rem;
    
    /* Border Radius */
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 12px;
    --radius-xl: 16px;
    
    /* Card Dimensions */
    --card-width: 250px;
    --card-height: 300px;
    --card-border-radius: var(--radius-md);

    --audiowide-font: 'AudioWide', sans-serif;

    /* Responsive spacing adjustments */
    ${ri} {
      --spacing-xl: 1.5rem;
      --card-width: 220px;
      --card-height: 270px;
    }

    ${ni} {
      --spacing-lg: 1.25rem;
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 200px;
      --card-height: 250px;
    }

    ${ti} {
      --spacing-md: 0.75rem;
      --spacing-lg: 1rem; 
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 180px;
      --card-height: 230px;
    }
    ${ai} {
      --spacing-md: 0.75rem;
      --spacing-lg: 1rem; 
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 180px;
      --card-height: 230px;
    }
  }
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  
  body {
    font-family: 'Chakra Petch', sans-serif;
    background-color: var(--color-bg-primary);
    background-image: linear-gradient(135deg, rgba(13, 17, 23, 0.5), rgba(18, 24, 36, 0.55)),
      url('https://4kwallpapers.com/images/wallpapers/outrun-neon-dark-background-purple-3840x2160-4523.jpg');
    background-size: cover;
    background-attachment: fixed;
    color: var(--color-text-primary);
    line-height: 1.6;
    overflow-x: hidden;
    
    /* Subtle grid pattern overlay for cyberpunk feel */
    /* &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      z-index: -1;
      background-image: 
        linear-gradient(rgba(86, 204, 242, 0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(86, 204, 242, 0.03) 1px, transparent 1px);
      background-size: 20px 20px;
    } */
  }

  /* Portrait orientation warning for mobile phones */
  .orientation-warning {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: var(--color-bg-primary);
    z-index: 9999;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    padding: var(--spacing-xl);
  }

  .orientation-warning h2 {
    color: var(--color-accent);
    margin-bottom: var(--spacing-md);
  }

  .orientation-warning p {
    max-width: 400px;
    margin-bottom: var(--spacing-lg);
  }

  .orientation-warning .icon {
    font-size: 3rem;
    margin-bottom: var(--spacing-lg);
    color: var(--color-accent);
    animation: rotate 2s infinite;
  }

  @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-90deg); translate: 20px 0; }
  }

  /* Show orientation warning only on mobile phones in portrait mode */
  ${`@media (max-width: ${Jr}) and (orientation: portrait)`} {
    .orientation-warning {
      display: flex;
    }
    .app-content {
      display: none;
    }
  }
  
  h1, h2, h3, h4, h5, h6 {
    font-family: 'Audiowide', sans-serif;
    font-weight: 400;
    font-style: normal;
    margin-bottom: var(--spacing-md);
    text-transform: uppercase;
    letter-spacing: 0.05em;

    ${ni} {
      letter-spacing: 0.03em;
    }

    ${ti} {
      letter-spacing: 0.02em;
    }
  }

  h1 {
    font-size: 3rem;

    ${ri} {
      font-size: 2.5rem;
    }

    ${ni} {
      font-size: 2rem;
    }

    ${ti} {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 2rem;

    ${ri} {
      font-size: 1.75rem;
    }

    ${ni} {
      font-size: 1.5rem;
    }

    ${ti} {
      font-size: 1.25rem;
    }
  }
  
  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #81ecff;
      text-shadow: 0 0 8px rgba(86, 204, 242, 0.5);
    }
  }
  
  button {
    cursor: pointer;
    font-family: inherit;
    font-size: 0.9rem;
    padding: var(--spacing-sm) var(--spacing-md);
    border-radius: var(--radius-sm);
    border: 1px solid var(--color-border);
    background-color: rgba(13, 17, 23, 0.8);
    color: var(--color-text-primary);
    transition: all 0.3s ease;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    position: relative;
    overflow: hidden;
    
    /* Cyberpunk-style button */
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg, 
        transparent, 
        rgba(86, 204, 242, 0.2), 
        transparent
      );
      transition: left 0.5s ease;
    }
    
    &:hover {
      background-color: rgba(18, 24, 36, 0.9);
      border-color: var(--color-accent);
      box-shadow: 0 0 10px rgba(86, 204, 242, 0.3);
      transform: translateY(-2px);
      
      &::before {
        left: 100%;
      }
    }
    
    &:disabled {
      background-color: rgba(139, 148, 158, 0.1);
      border-color: var(--color-border);
      color: var(--color-text-secondary);
      cursor: not-allowed;
      transform: translateY(0);
      
      &::before {
        display: none;
      }
    }

    ${ti} {
      font-size: 0.8rem;
      padding: var(--spacing-xs) var(--spacing-sm);
    }
  }
  
  /* Cyberpunk-style scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: var(--color-bg-secondary);
    border-radius: 0;
  }
  
  ::-webkit-scrollbar-thumb {
    background: linear-gradient(to bottom, var(--color-accent), #56CCF2);
    border-radius: 0;
    border: 1px solid var(--color-border);
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: linear-gradient(to bottom, var(--color-accent),rgb(84, 29, 91));
  }

  /* Cyberpunk selection */
  ::selection {
    background-color: rgba(231, 76, 60, 0.3);
    color: #e6edf3;
    text-shadow: 0 0 5px rgba(86, 204, 242, 0.5);
  }
`;function si(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function li(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function ci(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function ui(e,t,n,r){if("function"===typeof t){const[i,a]=ci(r);t=t(void 0!==n?n:e.custom,i,a)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[i,a]=ci(r);t=t(void 0!==n?n:e.custom,i,a)}return t}function di(e,t,n){const r=e.getProps();return ui(r,t,void 0!==n?n:r.custom,e)}function pi(e,t){return e?.[t]??e?.default??e}const fi=e=>e,hi={skipAnimations:!1,useManualTiming:!1},mi=["read","resolveKeyframes","update","preRender","render","postRender"],gi={value:null,addProjectionMetrics:null};function vi(e,t){let n=!1,r=!0;const i={delta:0,timestamp:0,isProcessing:!1},a=()=>n=!0,o=mi.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,i=!1,a=!1;const o=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){o.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&i?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&o.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),o.delete(e)},process:e=>{s=e,i?a=!0:(i=!0,[n,r]=[r,n],n.forEach(c),t&&gi.value&&gi.value.frameloop[t].push(l),l=0,n.clear(),i=!1,a&&(a=!1,u.process(e)))}};return u}(a,t?n:void 0),e)),{}),{read:s,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=o,f=()=>{const a=hi.useManualTiming?i.timestamp:performance.now();n=!1,hi.useManualTiming||(i.delta=r?1e3/60:Math.max(Math.min(a-i.timestamp,40),1)),i.timestamp=a,i.isProcessing=!0,s.process(i),l.process(i),c.process(i),u.process(i),d.process(i),p.process(i),i.isProcessing=!1,n&&t&&(r=!1,e(f))},h=mi.reduce(((t,a)=>{const s=o[a];return t[a]=function(t){let a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],o=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,i.isProcessing||e(f)),s.schedule(t,a,o)},t}),{});return{schedule:h,cancel:e=>{for(let t=0;t<mi.length;t++)o[mi[t]].cancel(e)},state:i,steps:o}}const{schedule:yi,cancel:bi,state:xi,steps:wi}=vi("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:fi,!0),Si=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],ki=new Set(Si),Ei=new Set(["width","height","top","left","right","bottom",...Si]);function Ci(e,t){-1===e.indexOf(t)&&e.push(t)}function Pi(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ti{constructor(){this.subscriptions=[]}add(e){return Ci(this.subscriptions,e),()=>Pi(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let i=0;i<r;i++){const r=this.subscriptions[i];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function ji(e,t){return t?e*(1e3/t):0}let Di;function Ai(){Di=void 0}const Ri={now:()=>(void 0===Di&&Ri.set(xi.isProcessing||hi.useManualTiming?xi.timestamp:performance.now()),Di),set:e=>{Di=e,queueMicrotask(Ai)}},Mi={current:void 0};class Li{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.7.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Ri.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Ri.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new Ti);const n=this.events[e].add(t);return"change"===e?()=>{n(),yi.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Mi.current&&Mi.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Ri.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return ji(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function _i(e,t){return new Li(e,t)}const zi=e=>Array.isArray(e),Oi=e=>zi(e)?e[e.length-1]||0:e;function Fi(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,_i(n))}const Ni=e=>Boolean(e&&e.getVelocity);function Ii(e,t){const n=e.getValue("willChange");if(r=n,Boolean(Ni(r)&&r.add))return n.add(t);if(!n&&hi.WillChange){const n=new hi.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}const $i=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Bi="data-"+$i("framerAppearId");function Vi(e){return e.props[Bi]}function Ui(e){let t;return()=>(void 0===t&&(t=e()),t)}const Wi=Ui((()=>void 0!==window.ScrollTimeline));class Hi{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>e.finished)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Wi()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Yi extends Hi{then(e,t){return this.finished.finally(e).then((()=>{}))}}const qi=e=>1e3*e,Ki=e=>e/1e3,Gi=!1;function Xi(e){return"function"===typeof e&&"applyToOptions"in e}const Zi=e=>Array.isArray(e)&&"number"===typeof e[0],Qi={};function Ji(e,t){const n=Ui(e);return()=>Qi[t]??n()}const ea=Ji((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Iv){return!1}return!0}),"linearEasing"),ta=e=>{let[t,n,r,i]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${i})`},na={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ta([0,.65,.55,1]),circOut:ta([.55,0,1,.45]),backIn:ta([.31,.01,.66,-.59]),backOut:ta([.33,1.53,.69,.99])};function ra(e){return Boolean("function"===typeof e&&ea()||!e||"string"===typeof e&&(e in na||ea())||Zi(e)||Array.isArray(e)&&e.every(ra))}const ia={layout:0,mainThread:0,waapi:0},aa=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const i=Math.max(Math.round(t/n),2);for(let a=0;a<i;a++)r+=e(a/(i-1))+", ";return`linear(${r.substring(0,r.length-2)})`};function oa(e,t){return e?"function"===typeof e&&ea()?aa(e,t):Zi(e)?ta(e):Array.isArray(e)?e.map((e=>oa(e,t)||na.easeOut)):na[e]:void 0}function sa(e,t,n){let{delay:r=0,duration:i=300,repeat:a=0,repeatType:o="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=oa(s,i);Array.isArray(d)&&(u.easing=d),gi.value&&ia.waapi++;const p=e.animate(u,{delay:r,duration:i,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:a+1,direction:"reverse"===o?"alternate":"normal",pseudoElement:c});return gi.value&&p.finished.finally((()=>{ia.waapi--})),p}function la(e,t){e.timeline=t,e.onfinish=null}const ca=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function ua(e,t,n,r){if(e===t&&n===r)return fi;const i=t=>function(e,t,n,r,i){let a,o,s=0;do{o=t+(n-t)/2,a=ca(o,r,i)-e,a>0?n=o:t=o}while(Math.abs(a)>1e-7&&++s<12);return o}(t,0,1,e,n);return e=>0===e||1===e?e:ca(i(e),t,r)}const da=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,pa=e=>t=>1-e(1-t),fa=ua(.33,1.53,.69,.99),ha=pa(fa),ma=da(ha),ga=e=>(e*=2)<1?.5*ha(e):.5*(2-Math.pow(2,-10*(e-1))),va=e=>1-Math.sin(Math.acos(e)),ya=pa(va),ba=da(va),xa=e=>/^0[^.\s]+$/u.test(e);const wa=(e,t,n)=>n>t?t:n<e?e:n,Sa={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},ka={...Sa,transform:e=>wa(0,1,e)},Ea={...Sa,default:1},Ca=e=>Math.round(1e5*e)/1e5,Pa=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const Ta=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ja=(e,t)=>n=>Boolean("string"===typeof n&&Ta.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Da=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[i,a,o,s]=r.match(Pa);return{[e]:parseFloat(i),[t]:parseFloat(a),[n]:parseFloat(o),alpha:void 0!==s?parseFloat(s):1}},Aa={...Sa,transform:e=>Math.round((e=>wa(0,255,e))(e))},Ra={test:ja("rgb","red"),parse:Da("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:i=1}=e;return"rgba("+Aa.transform(t)+", "+Aa.transform(n)+", "+Aa.transform(r)+", "+Ca(ka.transform(i))+")"}};const Ma={test:ja("#"),parse:function(e){let t="",n="",r="",i="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),i=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),i=e.substring(4,5),t+=t,n+=n,r+=r,i+=i),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:i?parseInt(i,16)/255:1}},transform:Ra.transform},La=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),_a=La("deg"),za=La("%"),Oa=La("px"),Fa=La("vh"),Na=La("vw"),Ia={...za,parse:e=>za.parse(e)/100,transform:e=>za.transform(100*e)},$a={test:ja("hsl","hue"),parse:Da("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:i=1}=e;return"hsla("+Math.round(t)+", "+za.transform(Ca(n))+", "+za.transform(Ca(r))+", "+Ca(ka.transform(i))+")"}},Ba={test:e=>Ra.test(e)||Ma.test(e)||$a.test(e),parse:e=>Ra.test(e)?Ra.parse(e):$a.test(e)?$a.parse(e):Ma.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Ra.transform(e):$a.transform(e)},Va=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Ua="number",Wa="color",Ha=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ya(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},i=[];let a=0;const o=t.replace(Ha,(e=>(Ba.test(e)?(r.color.push(a),i.push(Wa),n.push(Ba.parse(e))):e.startsWith("var(")?(r.var.push(a),i.push("var"),n.push(e)):(r.number.push(a),i.push(Ua),n.push(parseFloat(e))),++a,"${}"))).split("${}");return{values:n,split:o,indexes:r,types:i}}function qa(e){return Ya(e).values}function Ka(e){const{split:t,types:n}=Ya(e),r=t.length;return e=>{let i="";for(let a=0;a<r;a++)if(i+=t[a],void 0!==e[a]){const t=n[a];i+=t===Ua?Ca(e[a]):t===Wa?Ba.transform(e[a]):e[a]}return i}}const Ga=e=>"number"===typeof e?0:e;const Xa={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(Pa)?.length||0)+(e.match(Va)?.length||0)>0},parse:qa,createTransformer:Ka,getAnimatableNone:function(e){const t=qa(e);return Ka(e)(t.map(Ga))}},Za=new Set(["brightness","contrast","saturate","opacity"]);function Qa(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Pa)||[];if(!r)return e;const i=n.replace(r,"");let a=Za.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+i+")"}const Ja=/\b([a-z-]*)\(.*?\)/gu,eo={...Xa,getAnimatableNone:e=>{const t=e.match(Ja);return t?t.map(Qa).join(" "):e}},to={borderWidth:Oa,borderTopWidth:Oa,borderRightWidth:Oa,borderBottomWidth:Oa,borderLeftWidth:Oa,borderRadius:Oa,radius:Oa,borderTopLeftRadius:Oa,borderTopRightRadius:Oa,borderBottomRightRadius:Oa,borderBottomLeftRadius:Oa,width:Oa,maxWidth:Oa,height:Oa,maxHeight:Oa,top:Oa,right:Oa,bottom:Oa,left:Oa,padding:Oa,paddingTop:Oa,paddingRight:Oa,paddingBottom:Oa,paddingLeft:Oa,margin:Oa,marginTop:Oa,marginRight:Oa,marginBottom:Oa,marginLeft:Oa,backgroundPositionX:Oa,backgroundPositionY:Oa},no={rotate:_a,rotateX:_a,rotateY:_a,rotateZ:_a,scale:Ea,scaleX:Ea,scaleY:Ea,scaleZ:Ea,skew:_a,skewX:_a,skewY:_a,distance:Oa,translateX:Oa,translateY:Oa,translateZ:Oa,x:Oa,y:Oa,z:Oa,perspective:Oa,transformPerspective:Oa,opacity:ka,originX:Ia,originY:Ia,originZ:Oa},ro={...Sa,transform:Math.round},io={...to,...no,zIndex:ro,size:Oa,fillOpacity:ka,strokeOpacity:ka,numOctaves:ro},ao={...io,color:Ba,backgroundColor:Ba,outlineColor:Ba,fill:Ba,stroke:Ba,borderColor:Ba,borderTopColor:Ba,borderRightColor:Ba,borderBottomColor:Ba,borderLeftColor:Ba,filter:eo,WebkitFilter:eo},oo=e=>ao[e];function so(e,t){let n=oo(e);return n!==eo&&(n=Xa),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const lo=new Set(["auto","none","0"]);const co=e=>180*e/Math.PI,uo=e=>{const t=co(Math.atan2(e[1],e[0]));return fo(t)},po={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:uo,rotateZ:uo,skewX:e=>co(Math.atan(e[1])),skewY:e=>co(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},fo=e=>((e%=360)<0&&(e+=360),e),ho=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),mo=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),go={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ho,scaleY:mo,scale:e=>(ho(e)+mo(e))/2,rotateX:e=>fo(co(Math.atan2(e[6],e[5]))),rotateY:e=>fo(co(Math.atan2(-e[2],e[0]))),rotateZ:uo,rotate:uo,skewX:e=>co(Math.atan(e[4])),skewY:e=>co(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function vo(e){return e.includes("scale")?1:0}function yo(e,t){if(!e||"none"===e)return vo(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,i;if(n)r=go,i=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=po,i=t}if(!i)return vo(t);const a=r[t],o=i[1].split(",").map(bo);return"function"===typeof a?a(o):o[a]}function bo(e){return parseFloat(e.trim())}const xo=e=>e===Sa||e===Oa,wo=new Set(["x","y","z"]),So=Si.filter((e=>!wo.has(e)));const ko={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:i="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(i)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return yo(n,"x")},y:(e,t)=>{let{transform:n}=t;return yo(n,"y")}};ko.translateX=ko.x,ko.translateY=ko.y;const Eo=new Set;let Co=!1,Po=!1;function To(){if(Po){const e=Array.from(Eo).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return So.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;e.getValue(n)?.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Po=!1,Co=!1,Eo.forEach((e=>e.complete())),Eo.clear()}function jo(){Eo.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Po=!0)}))}class Do{constructor(e,t,n,r,i){let a=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=i,this.isAsync=a}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Eo.add(this),Co||(Co=!0,yi.read(jo),yi.resolveKeyframes(To))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let i=0;i<e.length;i++)if(null===e[i])if(0===i){const i=r?.get(),a=e[e.length-1];if(void 0!==i)e[0]=i;else if(n&&t){const r=n.readValue(t,a);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=a),r&&void 0===i&&r.set(e[0])}else e[i]=e[i-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Eo.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Eo.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Ao=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ro=e=>t=>"string"===typeof t&&t.startsWith(e),Mo=Ro("--"),Lo=Ro("var(--"),_o=e=>!!Lo(e)&&zo.test(e.split("/*")[0].trim()),zo=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Oo=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Fo(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,i]=function(e){const t=Oo.exec(e);if(!t)return[,];const[,n,r,i]=t;return[`--${n??r}`,i]}(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);if(a){const e=a.trim();return Ao(e)?parseFloat(e):e}return _o(i)?Fo(i,t,n+1):i}const No=e=>t=>t.test(e),Io=[Sa,Oa,za,_a,Na,Fa,{test:e=>"auto"===e,parse:e=>e}],$o=e=>Io.find(No(e));class Bo extends Do{constructor(e,t,n,r,i){super(e,t,n,r,i,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),_o(n))){const r=Fo(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Ei.has(n)||2!==e.length)return;const[r,i]=e,a=$o(r),o=$o(i);if(a!==o)if(xo(a)&&xo(o))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let i=0;i<e.length;i++)("number"===typeof(r=e[i])?0===r:null===r||"none"===r||"0"===r||xa(r))&&n.push(i);var r;n.length&&function(e,t,n){let r,i=0;for(;i<e.length&&!r;){const t=e[i];"string"===typeof t&&!lo.has(t)&&Ya(t).values.length&&(r=e[i]),i++}if(r&&n)for(const a of t)e[a]=so(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ko[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const i=n.length-1,a=n[i];n[i]=ko[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==a&&void 0===this.finalKeyframe&&(this.finalKeyframe=a),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const Vo=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Xa.test(e)&&"0"!==e||e.startsWith("url(")));function Uo(e,t,n,r){const i=e[0];if(null===i)return!1;if("display"===t||"visibility"===t)return!0;const a=e[e.length-1],o=Vo(i,t),s=Vo(a,t);return!(!o||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Xi(n))&&r)}const Wo=e=>null!==e;function Ho(e,t,n){let{repeat:r,repeatType:i="loop"}=t;const a=e.filter(Wo),o=r&&"loop"!==i&&r%2===1?0:a.length-1;return o&&void 0!==n?n:a[o]}class Yo{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:i=0,repeatDelay:a=0,repeatType:o="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Ri.now(),this.options={autoplay:t,delay:n,type:r,repeat:i,repeatDelay:a,repeatType:o,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(jo(),To()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Ri.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:i,delay:a,onComplete:o,onUpdate:s,isGenerator:l}=this.options;if(!l&&!Uo(e,n,r,i)){if(Gi||!a)return s&&s(Ho(e,this.options,t)),o&&o(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const qo=2e4;function Ko(e){let t=0;let n=e.next(t);for(;!n.done&&t<qo;)t+=50,n=e.next(t);return t>=qo?1/0:t}const Go=(e,t,n)=>e+(t-e)*n;function Xo(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Zo(e,t){return n=>n>0?t:e}const Qo=(e,t,n)=>{const r=e*e,i=n*(t*t-r)+r;return i<0?0:Math.sqrt(i)},Jo=[Ma,Ra,$a];function es(e){const t=(e=>Jo.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===$a&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:i}=e;t/=360,n/=100,r/=100;let a=0,o=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,i=2*r-e;a=Xo(i,e,t+1/3),o=Xo(i,e,t),s=Xo(i,e,t-1/3)}else a=o=s=r;return{red:Math.round(255*a),green:Math.round(255*o),blue:Math.round(255*s),alpha:i}}(n)),n}const ts=(e,t)=>{const n=es(e),r=es(t);if(!n||!r)return Zo(e,t);const i={...n};return e=>(i.red=Qo(n.red,r.red,e),i.green=Qo(n.green,r.green,e),i.blue=Qo(n.blue,r.blue,e),i.alpha=Go(n.alpha,r.alpha,e),Ra.transform(i))},ns=(e,t)=>n=>t(e(n)),rs=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(ns)},is=new Set(["none","hidden"]);function as(e,t){return n=>Go(e,t,n)}function os(e){return"number"===typeof e?as:"string"===typeof e?_o(e)?Zo:Ba.test(e)?ts:cs:Array.isArray(e)?ss:"object"===typeof e?Ba.test(e)?ts:ls:Zo}function ss(e,t){const n=[...e],r=n.length,i=e.map(((e,n)=>os(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=i[t](e);return n}}function ls(e,t){const n={...e,...t},r={};for(const i in n)void 0!==e[i]&&void 0!==t[i]&&(r[i]=os(e[i])(e[i],t[i]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const cs=(e,t)=>{const n=Xa.createTransformer(t),r=Ya(e),i=Ya(t);return r.indexes.var.length===i.indexes.var.length&&r.indexes.color.length===i.indexes.color.length&&r.indexes.number.length>=i.indexes.number.length?is.has(e)&&!i.values.length||is.has(t)&&!r.values.length?function(e,t){return is.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):rs(ss(function(e,t){const n=[],r={color:0,var:0,number:0};for(let i=0;i<t.values.length;i++){const a=t.types[i],o=e.indexes[a][r[a]],s=e.values[o]??0;n[i]=s,r[a]++}return n}(r,i),i.values),n):Zo(e,t)};function us(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Go(e,t,n);return os(e)(e,t)}function ds(e,t,n){const r=Math.max(t-5,0);return ji(n-e(r),t-r)}const ps={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},fs=.001;function hs(e){let t,n,{duration:r=ps.duration,bounce:i=ps.bounce,velocity:a=ps.velocity,mass:o=ps.mass}=e;qi(ps.maxDuration);let s=1-i;s=wa(ps.minDamping,ps.maxDamping,s),r=wa(ps.minDuration,ps.maxDuration,Ki(r)),s<1?(t=e=>{const t=e*s,n=t*r,i=t-a,o=gs(e,s),l=Math.exp(-n);return fs-i/o*l},n=e=>{const n=e*s*r,i=n*a+a,o=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=gs(Math.pow(e,2),s);return(-t(e)+fs>0?-1:1)*((i-o)*l)/c}):(t=e=>Math.exp(-e*r)*((e-a)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(a-e)));const l=function(e,t,n){let r=n;for(let i=1;i<ms;i++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=qi(r),isNaN(l))return{stiffness:ps.stiffness,damping:ps.damping,duration:r};{const e=Math.pow(l,2)*o;return{stiffness:e,damping:2*s*Math.sqrt(o*e),duration:r}}}const ms=12;function gs(e,t){return e*Math.sqrt(1-t*t)}const vs=["duration","bounce"],ys=["stiffness","damping","mass"];function bs(e,t){return t.some((t=>void 0!==e[t]))}function xs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ps.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ps.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:i}=n;const a=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],s={done:!1,value:a},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:ps.velocity,stiffness:ps.stiffness,damping:ps.damping,mass:ps.mass,isResolvedFromDuration:!1,...e};if(!bs(e,ys)&&bs(e,vs))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),i=r*r,a=2*wa(.05,1,1-(e.bounce||0))*Math.sqrt(i);t={...t,mass:ps.mass,stiffness:i,damping:a}}else{const n=hs(e);t={...t,...n,mass:ps.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-Ki(n.velocity||0)}),h=p||0,m=c/(2*Math.sqrt(l*u)),g=o-a,v=Ki(Math.sqrt(l/u)),y=Math.abs(g)<5;let b;if(r||(r=y?ps.restSpeed.granular:ps.restSpeed.default),i||(i=y?ps.restDelta.granular:ps.restDelta.default),m<1){const e=gs(v,m);b=t=>{const n=Math.exp(-m*v*t);return o-n*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>o-Math.exp(-v*e)*(g+(h+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return o-n*((h+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:f&&d||null,next:e=>{const t=b(e);if(f)s.done=e>=d;else{let n=0;m<1&&(n=0===e?qi(h):ds(b,e,t));const a=Math.abs(n)<=r,l=Math.abs(o-t)<=i;s.done=a&&l}return s.value=s.done?o:t,s},toString:()=>{const e=Math.min(Ko(x),qo),t=aa((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function ws(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:i=325,bounceDamping:a=10,bounceStiffness:o=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],f={done:!1,value:p},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/i),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);f.done=Math.abs(t)<=u,f.value=f.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(f.value)&&(w=e,S=xs({keyframes:[f.value,h(f.value)],velocity:ds(b,e,f.value),damping:a,stiffness:o,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,x(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&x(e),f)}}}xs.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(Ko(n),qo);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:Ki(r)}}(e,100,xs);return e.ease=ea()?t.ease:"easeOut",e.duration=qi(t.duration),e.type="keyframes",e};const Ss=ua(.42,0,1,1),ks=ua(0,0,.58,1),Es=ua(.42,0,.58,1),Cs={linear:fi,easeIn:Ss,easeInOut:Es,easeOut:ks,circIn:va,circInOut:ba,circOut:ya,backIn:ha,backInOut:ma,backOut:fa,anticipate:ga},Ps=e=>{if(Zi(e)){e.length;const[t,n,r,i]=e;return ua(t,n,r,i)}return"string"===typeof e?Cs[e]:e},Ts=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function js(e,t){let{clamp:n=!0,ease:r,mixer:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const a=e.length;if(t.length,1===a)return()=>t[0];if(2===a&&t[0]===t[1])return()=>t[1];const o=e[0]===e[1];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],i=n||us,a=e.length-1;for(let o=0;o<a;o++){let n=i(e[o],e[o+1]);if(t){const e=Array.isArray(t)?t[o]||fi:t;n=rs(e,n)}r.push(n)}return r}(t,r,i),l=s.length,c=n=>{if(o&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const i=Ts(e[r],e[r+1],n);return s[r](i)};return n?t=>c(wa(e[0],e[a-1],t)):c}function Ds(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const i=Ts(0,t,r);e.push(Go(n,1,i))}}(t,e.length-1),t}function As(e){let{duration:t=300,keyframes:n,times:r,ease:i="easeInOut"}=e;const a=(e=>Array.isArray(e)&&"number"!==typeof e[0])(i)?i.map(Ps):Ps(i),o={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:Ds(n),t),l=js(s,n,{ease:Array.isArray(a)?a:(c=n,u=a,c.map((()=>u||Es)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(o.value=l(e),o.done=e>=t,o)}}const Rs=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>yi.update(t,!0),stop:()=>bi(t),now:()=>xi.isProcessing?xi.timestamp:Ri.now()}},Ms={decay:ws,inertia:ws,tween:As,keyframes:As,spring:xs},Ls=e=>e/100;class _s extends Yo{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:i}=this.options,a=r?.KeyframeResolver||Do;this.resolver=new a(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:i,velocity:a=0}=this.options,o=Xi(t)?t:Ms[t]||As;let s,l;o!==As&&"number"!==typeof e[0]&&(s=rs(Ls,us(e[0],e[1])),e=[0,100]);const c=o({...this.options,keyframes:e});"mirror"===i&&(l=o({...this.options,keyframes:[...e].reverse(),velocity:-a})),null===c.calculatedDuration&&(c.calculatedDuration=Ko(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;ia.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:i,mirroredGenerator:a,mapPercentToKeyframes:o,keyframes:s,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return i.next(0);const{delay:d,repeat:p,repeatType:f,repeatDelay:h,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let y=this.currentTime,b=i;if(p){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,p+1);Boolean(t%2)&&("reverse"===f?(n=1-n,h&&(n-=h/u)):"mirror"===f&&(b=a)),y=wa(0,1,n)*u}const x=v?{done:!1,value:s[0]}:b.next(y);o&&(x.value=o(x.value));let{done:w}=x;v||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&void 0!==r&&(x.value=Ho(s,this.options,r)),m&&m(x.value),S&&this.finish(),x}get duration(){const{resolved:e}=this;return e?Ki(e.calculatedDuration):0}get time(){return Ki(this.currentTime)}set time(e){e=qi(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Ki(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Rs,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=n??this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),ia.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const zs=new Set(["opacity","clipPath","filter","transform"]),Os=Ui((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const Fs={anticipate:ga,backInOut:ma,circInOut:ba};class Ns extends Yo{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:i}=this.options;this.resolver=new Bo(i,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:i,type:a,motionValue:o,name:s,startTime:l}=this.options;if(!o.owner||!o.owner.current)return!1;var c;if("string"===typeof i&&ea()&&i in Fs&&(i=Fs[i]),Xi((c=this.options).type)||"spring"===c.type||!ra(c.ease)){const{onComplete:t,onUpdate:o,motionValue:s,element:l,...c}=this.options,u=function(e,t){const n=new _s({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const i=[];let a=0;for(;!r.done&&a<2e4;)r=n.sample(a),i.push(r.value),a+=10;return{times:void 0,keyframes:i,duration:a-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),n=u.duration,r=u.times,i=u.ease,a="keyframes"}const u=sa(o.owner.current,s,e,{...this.options,duration:n,times:r,ease:i});return u.startTime=l??this.calcStartTime(),this.pendingTimeline?(la(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:n}=this.options;o.set(Ho(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:a,ease:i,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Ki(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Ki(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=qi(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return fi;const{animation:n}=t;la(n,e)}else this.pendingTimeline=e;return fi}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:i,ease:a,times:o}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...c}=this.options,u=new _s({...c,keyframes:n,duration:r,type:i,ease:a,times:o,isGenerator:!0}),d=qi(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:i,damping:a,type:o}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Os()&&n&&zs.has(n)&&("transform"!==n||!l)&&!s&&!r&&"mirror"!==i&&0!==a&&"inertia"!==o}}const Is={type:"spring",stiffness:500,damping:25,restSpeed:10},$s={type:"keyframes",duration:.8},Bs={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Vs=(e,t)=>{let{keyframes:n}=t;return n.length>2?$s:ki.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Is:Bs};const Us=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0;return o=>{const s=pi(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=qi(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{o(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:a?void 0:i};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:i,staggerDirection:a,repeat:o,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||(u={...u,...Vs(e,u)}),u.duration&&(u.duration=qi(u.duration)),u.repeatDelay&&(u.repeatDelay=qi(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(Gi||hi.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!a&&void 0!==t.get()){const e=Ho(u.keyframes,s);if(void 0!==e)return yi.update((()=>{u.onUpdate(e),u.onComplete()})),new Yi([])}return!a&&Ns.supports(u)?new Ns(u):new _s(u)}};function Ws(e,t){let{protectedKeys:n,needsAnimating:r}=e;const i=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,i}function Hs(e,t){let{delay:n=0,transitionOverride:r,type:i}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:a=e.getDefaultTransition(),transitionEnd:o,...s}=t;r&&(a=r);const l=[],c=i&&e.animationState&&e.animationState.getState()[i];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&Ws(c,u))continue;const i={delay:n,...pi(a||{},u)};let o=!1;if(window.MotionHandoffAnimation){const t=Vi(e);if(t){const e=window.MotionHandoffAnimation(t,u,yi);null!==e&&(i.startTime=e,o=!0)}}Ii(e,u),t.start(Us(u,t,r,e.shouldReduceMotion&&Ei.has(u)?{type:!1}:i,e,o));const d=t.animation;d&&l.push(d)}return o&&Promise.all(l).then((()=>{yi.update((()=>{o&&function(e,t){const n=di(e,t);let{transitionEnd:r={},transition:i={},...a}=n||{};a={...a,...r};for(const o in a)Fi(e,o,Oi(a[o]))}(e,o)}))})),l}function Ys(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=di(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:i=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(i=n.transitionOverride);const a=r?()=>Promise.all(Hs(e,r,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:a=0,staggerChildren:o,staggerDirection:s}=i;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=arguments.length>5?arguments[5]:void 0;const o=[],s=(e.variantChildren.size-1)*r,l=1===i?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(qs).forEach(((e,r)=>{e.notify("AnimationStart",t),o.push(Ys(e,t,{...a,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(o)}(e,t,a+r,o,s,n)}:()=>Promise.resolve(),{when:s}=i;if(s){const[e,t]="beforeChildren"===s?[a,o]:[o,a];return e().then((()=>t()))}return Promise.all([a(),o(n.delay)])}function qs(e,t){return e.sortNodePosition(t)}function Ks(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Gs(e){return"string"===typeof e||Array.isArray(e)}const Xs=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Zs=["initial",...Xs],Qs=Zs.length;function Js(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Js(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Qs;n++){const r=Zs[n],i=e.props[r];(Gs(i)||!1===i)&&(t[r]=i)}return t}const el=[...Xs].reverse(),tl=Xs.length;function nl(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const i=t.map((t=>Ys(e,t,r)));n=Promise.all(i)}else if("string"===typeof t)n=Ys(e,t,r);else{const i="function"===typeof t?di(e,t,r.custom):t;n=Promise.all(Hs(e,i,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function rl(e){let t=nl(e),n=ol(),r=!0;const i=t=>(n,r)=>{const i=di(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(i){const{transition:e,transitionEnd:t,...r}=i;n={...n,...r,...t}}return n};function a(a){const{props:o}=e,s=Js(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<tl;t++){const p=el[t],f=n[p],h=void 0!==o[p]?o[p]:s[p],m=Gs(h),g=p===a?f.isActive:null;!1===g&&(d=t);let v=h===s[p]&&h!==o[p]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),f.protectedKeys={...u},!f.isActive&&null===g||!h&&!f.prevProp||li(h)||"boolean"===typeof h)continue;const y=il(f.prevProp,h);let b=y||p===a&&f.isActive&&!v&&m||t>d&&m,x=!1;const w=Array.isArray(h)?h:[h];let S=w.reduce(i(p),{});!1===g&&(S={});const{prevResolvedValues:k={}}=f,E={...k,...S},C=t=>{b=!0,c.has(t)&&(x=!0,c.delete(t)),f.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in E){const t=S[e],n=k[e];if(u.hasOwnProperty(e))continue;let r=!1;r=zi(t)&&zi(n)?!Ks(t,n):t!==n,r?void 0!==t&&null!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):f.protectedKeys[e]=!0}f.prevProp=h,f.prevResolvedValues=S,f.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(v&&y)||x)&&l.push(...w.map((e=>({animation:e,options:{type:p}}))))}if(c.size){const t={};if("boolean"!==typeof o.initial){const n=di(e,Array.isArray(o.initial)?o.initial[0]:o.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),i=e.getValue(n);i&&(i.liveStyle=!0),t[n]=r??null})),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==o.initial&&o.initial!==o.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:a,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,r))),n[t].isActive=r;const i=a(t);for(const e in n)n[e].protectedKeys={};return i},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=ol(),r=!0}}}function il(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Ks(t,e)}function al(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ol(){return{animate:al(!0),whileInView:al(),whileHover:al(),whileTap:al(),whileDrag:al(),whileFocus:al(),exit:al()}}class sl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let ll=0;const cl={animation:{Feature:class extends sl{constructor(e){super(e),e.animationState||(e.animationState=rl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();li(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends sl{constructor(){super(...arguments),this.id=ll++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},ul={x:!1,y:!1};function dl(){return ul.x||ul.y}function pl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const fl=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function hl(e){return{point:{x:e.pageX,y:e.pageY}}}function ml(e,t,n,r){return pl(e,t,(e=>t=>fl(t)&&e(t,hl(t)))(n),r)}function gl(e){let{top:t,left:n,right:r,bottom:i}=e;return{x:{min:n,max:r},y:{min:t,max:i}}}function vl(e){return e.max-e.min}function yl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Go(t.min,t.max,e.origin),e.scale=vl(n)/vl(t),e.translate=Go(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function bl(e,t,n,r){yl(e.x,t.x,n.x,r?r.originX:void 0),yl(e.y,t.y,n.y,r?r.originY:void 0)}function xl(e,t,n){e.min=n.min+t.min,e.max=e.min+vl(t)}function wl(e,t,n){e.min=t.min-n.min,e.max=e.min+vl(t)}function Sl(e,t,n){wl(e.x,t.x,n.x),wl(e.y,t.y,n.y)}const kl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function El(e){return[e("x"),e("y")]}function Cl(e){return void 0===e||1===e}function Pl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Cl(t)||!Cl(n)||!Cl(r)}function Tl(e){return Pl(e)||jl(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function jl(e){return Dl(e.x)||Dl(e.y)}function Dl(e){return e&&"0%"!==e}function Al(e,t,n){return n+t*(e-n)}function Rl(e,t,n,r,i){return void 0!==i&&(e=Al(e,i,r)),Al(e,n,r)+t}function Ml(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0;e.min=Rl(e.min,t,n,r,i),e.max=Rl(e.max,t,n,r,i)}function Ll(e,t){let{x:n,y:r}=t;Ml(e.x,n.translate,n.scale,n.originPoint),Ml(e.y,r.translate,r.scale,r.originPoint)}const _l=.999999999999,zl=1.0000000000001;function Ol(e,t){e.min=e.min+t,e.max=e.max+t}function Fl(e,t,n,r){let i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ml(e,t,n,Go(e.min,e.max,i),r)}function Nl(e,t){Fl(e.x,t.x,t.scaleX,t.scale,t.originX),Fl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Il(e,t){return gl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const $l=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Bl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Vl=(e,t)=>Math.abs(e-t);class Ul{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:i=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Yl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Vl(e.x,t.x),r=Vl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:i}=xi;this.history.push({...r,timestamp:i});const{onStart:a,onMove:o}=this.handlers;t||(a&&a(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),o&&o(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Wl(t,this.transformPagePoint),yi.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:i}=this.handlers;if(this.dragSnapToOrigin&&i&&i(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const a=Yl("pointercancel"===e.type?this.lastMoveEventInfo:Wl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,a),r&&r(e,a)},!fl(e))return;this.dragSnapToOrigin=i,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const a=Wl(hl(e),this.transformPagePoint),{point:o}=a,{timestamp:s}=xi;this.history=[{...o,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Yl(a,this.history)),this.removeListeners=rs(ml(this.contextWindow,"pointermove",this.handlePointerMove),ml(this.contextWindow,"pointerup",this.handlePointerUp),ml(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),bi(this.updatePoint)}}function Wl(e,t){return t?{point:t(e.point)}:e}function Hl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Yl(e,t){let{point:n}=e;return{point:n,delta:Hl(n,Kl(t)),offset:Hl(n,ql(t)),velocity:Gl(t,.1)}}function ql(e){return e[0]}function Kl(e){return e[e.length-1]}function Gl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const i=Kl(e);for(;n>=0&&(r=e[n],!(i.timestamp-r.timestamp>qi(t)));)n--;if(!r)return{x:0,y:0};const a=Ki(i.timestamp-r.timestamp);if(0===a)return{x:0,y:0};const o={x:(i.x-r.x)/a,y:(i.y-r.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Xl(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Zl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Ql=.35;function Jl(e,t,n){return{min:ec(e,t),max:ec(e,n)}}function ec(e,t){return"number"===typeof e?e:e[t]||0}const tc=new WeakMap;class nc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Ul(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(hl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:i}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(a=n)||"y"===a?ul[a]?null:(ul[a]=!0,()=>{ul[a]=!1}):ul.x||ul.y?null:(ul.x=ul.y=!0,()=>{ul.x=ul.y=!1}),!this.openDragLock))return;var a;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),El((e=>{let t=this.getAxisMotionValue(e).get()||0;if(za.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=vl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),i&&yi.postRender((()=>i(e,t))),Ii(this.visualElement,"transform");const{animationState:o}=this.visualElement;o&&o.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:i,onDrag:a}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:o}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(o),void(null!==this.currentDirection&&i&&i(this.currentDirection));this.updateAxis("x",t.point,o),this.updateAxis("y",t.point,o),this.visualElement.render(),a&&a(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>El((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:$l(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:i}=this.getProps();i&&yi.postRender((()=>i(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!rc(e,r,this.currentDirection))return;const i=this.getAxisMotionValue(e);let a=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(a=function(e,t,n){let{min:r,max:i}=t;return void 0!==r&&e<r?e=n?Go(r,e,n.min):Math.max(e,r):void 0!==i&&e>i&&(e=n?Go(i,e,n.max):Math.min(e,i)),e}(a,this.constraints[e],this.elastic[e])),i.set(a)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Bl(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:i,right:a}=t;return{x:Xl(e.x,r,a),y:Xl(e.y,n,i)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ql;return!1===e?e=0:!0===e&&(e=Ql),{x:Jl(e,"left","right"),y:Jl(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&El((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Bl(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const i=function(e,t,n){const r=Il(e,n),{scroll:i}=t;return i&&(Ol(r.x,i.offset.x),Ol(r.y,i.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let a=function(e,t){return{x:Zl(e.x,t.x),y:Zl(e.y,t.y)}}(r.layout.layoutBox,i);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(a));this.hasMutatedConstraints=!!e,e&&(a=gl(e))}return a}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:i,dragSnapToOrigin:a,onDragTransitionEnd:o}=this.getProps(),s=this.constraints||{},l=El((o=>{if(!rc(o,t,this.currentDirection))return;let l=s&&s[o]||{};a&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[o]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...i,...l};return this.startAxisValueAnimation(o,d)}));return Promise.all(l).then(o)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return Ii(this.visualElement,e),n.start(Us(e,n,0,t,this.visualElement,!1))}stopAnimation(){El((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){El((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){El((t=>{const{drag:n}=this.getProps();if(!rc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,i=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:a}=r.layout.layoutBox[t];i.set(e[t]-Go(n,a,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Bl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};El((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=vl(e),i=vl(t);return i>r?n=Ts(t.min,t.max-r,e.min):r>i&&(n=Ts(e.min,e.max-i,t.min)),wa(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),El((t=>{if(!rc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:i,max:a}=this.constraints[t];n.set(Go(i,a,r[t]))}))}addListeners(){if(!this.visualElement.current)return;tc.set(this.visualElement,this);const e=ml(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Bl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),yi.read(t);const i=pl(window,"resize",(()=>this.scalePositionWithinConstraints())),a=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(El((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{i(),e(),r(),a&&a()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:i=!1,dragElastic:a=Ql,dragMomentum:o=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:i,dragElastic:a,dragMomentum:o}}}function rc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const ic=e=>(t,n)=>{e&&yi.postRender((()=>e(t,n)))};var ac=n(579);const{schedule:oc,cancel:sc}=vi(queueMicrotask,!1),lc=(0,e.createContext)(null);function cc(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(lc);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:i,register:a}=n,o=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return a(o)}),[t]);const s=(0,e.useCallback)((()=>t&&i&&i(o)),[o,i,t]);return!r&&i?[!1,s]:[!0]}const uc=(0,e.createContext)({}),dc=(0,e.createContext)({}),pc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Oa.test(e))return e;e=parseFloat(e)}return`${fc(e,t.target.x)}% ${fc(e,t.target.y)}%`}},mc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const i=e,a=Xa.parse(e);if(a.length>5)return i;const o=Xa.createTransformer(e),s="number"!==typeof a[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;a[0+s]/=l,a[1+s]/=c;const u=Go(l,c,.5);return"number"===typeof a[2+s]&&(a[2+s]/=u),"number"===typeof a[3+s]&&(a[3+s]/=u),o(a)}},gc={};class vc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:i}=e;!function(e){for(const t in e)gc[t]=e[t],Mo(t)&&(gc[t].isCSSVariable=!0)}(bc),i&&(t.group&&t.group.add(i),n&&n.register&&r&&n.register(i),i.root.didUpdate(),i.addEventListener("animationComplete",(()=>{this.safeToRemove()})),i.setOptions({...i.options,onExitComplete:()=>this.safeToRemove()})),pc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:i}=this.props,a=n.projection;return a?(a.isPresent=i,r||e.layoutDependency!==t||void 0===t||e.isPresent!==i?a.willUpdate():this.safeToRemove(),e.isPresent!==i&&(i?a.promote():a.relegate()||yi.postRender((()=>{const e=a.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),oc.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function yc(t){const[n,r]=cc(),i=(0,e.useContext)(uc);return(0,ac.jsx)(vc,{...t,layoutGroup:i,switchLayoutGroup:(0,e.useContext)(dc),isPresent:n,safeToRemove:r})}const bc={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:mc};const xc=(e,t)=>e.depth-t.depth;class wc{constructor(){this.children=[],this.isDirty=!1}add(e){Ci(this.children,e),this.isDirty=!0}remove(e){Pi(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(xc),this.isDirty=!1,this.children.forEach(e)}}function Sc(e,t){const n=Ri.now(),r=i=>{let{timestamp:a}=i;const o=a-n;o>=t&&(bi(r),e(o-t))};return yi.read(r,!0),()=>bi(r)}function kc(e){const t=Ni(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Ec=["TopLeft","TopRight","BottomLeft","BottomRight"],Cc=Ec.length,Pc=e=>"string"===typeof e?parseFloat(e):e,Tc=e=>"number"===typeof e||Oa.test(e);function jc(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const Dc=Rc(0,.5,ya),Ac=Rc(.5,.95,fi);function Rc(e,t,n){return r=>r<e?0:r>t?1:n(Ts(e,t,r))}function Mc(e,t){e.min=t.min,e.max=t.max}function Lc(e,t){Mc(e.x,t.x),Mc(e.y,t.y)}function _c(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function zc(e,t,n,r,i){return e=Al(e-=t,1/n,r),void 0!==i&&(e=Al(e,1/i,r)),e}function Oc(e,t,n,r,i){let[a,o,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,i=arguments.length>4?arguments[4]:void 0,a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,o=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;za.test(t)&&(t=parseFloat(t),t=Go(o.min,o.max,t/100)-o.min);if("number"!==typeof t)return;let s=Go(a.min,a.max,r);e===a&&(s-=t),e.min=zc(e.min,t,n,s,i),e.max=zc(e.max,t,n,s,i)}(e,t[a],t[o],t[s],t.scale,r,i)}const Fc=["x","scaleX","originX"],Nc=["y","scaleY","originY"];function Ic(e,t,n,r){Oc(e.x,t,Fc,n?n.x:void 0,r?r.x:void 0),Oc(e.y,t,Nc,n?n.y:void 0,r?r.y:void 0)}function $c(e){return 0===e.translate&&1===e.scale}function Bc(e){return $c(e.x)&&$c(e.y)}function Vc(e,t){return e.min===t.min&&e.max===t.max}function Uc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Wc(e,t){return Uc(e.x,t.x)&&Uc(e.y,t.y)}function Hc(e){return vl(e.x)/vl(e.y)}function Yc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class qc{constructor(){this.members=[]}add(e){Ci(this.members,e),e.scheduleRender()}remove(e){if(Pi(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Kc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Gc=["","X","Y","Z"],Xc={visibility:"hidden"};let Zc=0;function Qc(e,t,n,r){const{latestValues:i}=t;i[e]&&(n[e]=i[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Jc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Vi(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",yi,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Jc(r)}function eu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:i,resetTransform:a}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=Zc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,gi.value&&(Kc.nodes=Kc.calculatedTargetDeltas=Kc.calculatedProjections=0),this.nodes.forEach(ru),this.nodes.forEach(uu),this.nodes.forEach(du),this.nodes.forEach(iu),gi.addProjectionMetrics&&gi.addProjectionMetrics(Kc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new wc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new Ti),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),i=1;i<n;i++)r[i-1]=arguments[i];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:i,layout:a,visualElement:o}=this.options;if(o&&!o.current&&o.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(a||i)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Sc(r,250),pc.hasAnimatedSinceResize&&(pc.hasAnimatedSinceResize=!1,this.nodes.forEach(cu))}))}i&&this.root.registerSharedNode(i,this),!1!==this.options.animate&&o&&(i||a)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:i}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const a=this.options.transition||o.getDefaultTransition()||vu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=o.getProps(),c=!this.targetLayout||!Wc(this.targetLayout,i),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...pi(a,"layout"),onPlay:s,onComplete:l};(o.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||cu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=i}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,bi(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Jc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let i=0;i<this.path.length;i++){const e=this.path[i];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(ou);this.isUpdating||this.nodes.forEach(su),this.isUpdating=!1,this.nodes.forEach(lu),this.nodes.forEach(tu),this.nodes.forEach(nu),this.clearAllSnapshots();const e=Ri.now();xi.delta=wa(0,1e3/60,e-xi.timestamp),xi.timestamp=e,xi.isProcessing=!0,wi.update.process(xi),wi.preRender.process(xi),wi.render.process(xi),xi.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,oc.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(au),this.sharedNodes.forEach(fu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,yi.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){yi.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||vl(this.snapshot.measuredBox.x)||vl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=i(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!a)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Bc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,i=r!==this.prevTransformTemplateValue;e&&(t||Tl(this.latestValues)||i)&&(a(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),xu((r=n).x),xu(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Su))){const{scroll:e}=this.root;e&&(Ol(t.x,e.offset.x),Ol(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Lc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:i,options:a}=r;r!==this.root&&i&&a.layoutScroll&&(i.wasRoot&&Lc(t,e),Ol(t.x,i.offset.x),Ol(t.y,i.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Lc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Nl(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Tl(e.latestValues)&&Nl(n,e.latestValues)}return Tl(this.latestValues)&&Nl(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Lc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Tl(e.latestValues))continue;Pl(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Lc(r,e.measurePageBox()),Ic(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Tl(this.latestValues)&&Ic(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==xi.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:i}=this.options;if(this.layout&&(r||i)){if(this.resolvedRelativeTargetAt=xi.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Sl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Lc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var a,o,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),a=this.target,o=this.relativeTarget,s=this.relativeParent.target,xl(a.x,o.x,s.x),xl(a.y,o.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Lc(this.target,this.layout.layoutBox),Ll(this.target,this.targetDelta)):Lc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Sl(this.relativeTargetOrigin,this.target,e.target),Lc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}gi.value&&Kc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Pl(this.parent.latestValues)&&!jl(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===xi.timestamp&&(n=!1),n)return;const{layout:r,layoutId:i}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!i)return;Lc(this.layoutCorrected,this.layout.layoutBox);const a=this.treeScale.x,o=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const i=n.length;if(!i)return;let a,o;t.x=t.y=1;for(let s=0;s<i;s++){a=n[s],o=a.projectionDelta;const{visualElement:i}=a.options;i&&i.props.style&&"contents"===i.props.style.display||(r&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Nl(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ll(e,o)),r&&Tl(a.latestValues)&&Nl(e,a.latestValues))}t.x<zl&&t.x>_l&&(t.x=1),t.y<zl&&t.y>_l&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(_c(this.prevProjectionDelta.x,this.projectionDelta.x),_c(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),bl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===a&&this.treeScale.y===o&&Yc(this.projectionDelta.x,this.prevProjectionDelta.x)&&Yc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),gi.value&&Kc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},i={...this.latestValues},a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const o={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(gu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;hu(a.x,e.x,n),hu(a.y,e.y,n),this.setTargetDelta(a),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Sl(o,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){mu(e.x,t.x,n.x,r),mu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,o,n),d&&function(e,t){return Vc(e.x,t.x)&&Vc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Lc(d,this.relativeTarget)),s&&(this.animationValues=i,function(e,t,n,r,i,a){i?(e.opacity=Go(0,n.opacity??1,Dc(r)),e.opacityExit=Go(t.opacity??1,0,Ac(r))):a&&(e.opacity=Go(t.opacity??1,n.opacity??1,r));for(let o=0;o<Cc;o++){const i=`border${Ec[o]}Radius`;let a=jc(t,i),s=jc(n,i);void 0===a&&void 0===s||(a||(a=0),s||(s=0),0===a||0===s||Tc(a)===Tc(s)?(e[i]=Math.max(Go(Pc(a),Pc(s),r),0),(za.test(s)||za.test(a))&&(e[i]+="%")):e[i]=s)}(t.rotate||n.rotate)&&(e.rotate=Go(t.rotate||0,n.rotate||0,r))}(i,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(bi(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=yi.update((()=>{pc.hasAnimatedSinceResize=!0,ia.layout++,this.currentAnimation=function(e,t,n){const r=Ni(e)?e:_i(e);return r.start(Us("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ia.layout--},onComplete:()=>{ia.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:i}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&wu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=vl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=vl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Lc(t,n),Nl(t,i),bl(this.projectionDeltaWithTransform,this.layoutCorrected,t,i)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new qc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Qc("z",e,r,this.animationValues);for(let i=0;i<Gc.length;i++)Qc(`rotate${Gc[i]}`,e,r,this.animationValues),Qc(`skew${Gc[i]}`,e,r,this.animationValues);e.render();for(const i in r)e.setStaticValue(i,r[i]),this.animationValues&&(this.animationValues[i]=r[i]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return Xc;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=kc(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=kc(e?.pointerEvents)||""),this.hasProjected&&!Tl(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const i=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let r="";const i=e.x.translate/t.x,a=e.y.translate/t.y,o=n?.z||0;if((i||a||o)&&(r=`translate3d(${i}px, ${a}px, ${o}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:i,rotateY:a,skewX:o,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),i&&(r+=`rotateX(${i}deg) `),a&&(r+=`rotateY(${a}deg) `),o&&(r+=`skewX(${o}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,i),n&&(t.transform=n(i,t.transform));const{x:a,y:o}=this.projectionDelta;t.transformOrigin=`${100*a.origin}% ${100*o.origin}% 0`,r.animationValues?t.opacity=r===this?i.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:i.opacityExit:t.opacity=r===this?void 0!==i.opacity?i.opacity:"":void 0!==i.opacityExit?i.opacityExit:0;for(const s in gc){if(void 0===i[s])continue;const{correct:e,applyTo:n,isCSSVariable:a}=gc[s],o="none"===t.transform?i[s]:e(i[s],r);if(n){const e=n.length;for(let r=0;r<e;r++)t[n[r]]=o}else a?this.options.visualElement.renderState.vars[s]=o:t[s]=o}return this.options.layoutId&&(t.pointerEvents=r===this?kc(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop())),this.root.nodes.forEach(ou),this.root.sharedNodes.clear()}}}function tu(e){e.updateLayout()}function nu(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:i}=e.options,a=t.source!==e.layout.source;"size"===i?El((e=>{const r=a?t.measuredBox[e]:t.layoutBox[e],i=vl(r);r.min=n[e].min,r.max=r.min+i})):wu(i,t.layoutBox,n)&&El((r=>{const i=a?t.measuredBox[r]:t.layoutBox[r],o=vl(n[r]);i.max=i.min+o,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+o)}));const o={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};bl(o,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};a?bl(s,e.applyTransform(r,!0),t.measuredBox):bl(s,n,t.layoutBox);const l=!Bc(o);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:i,layout:a}=r;if(i&&a){const o={x:{min:0,max:0},y:{min:0,max:0}};Sl(o,t.layoutBox,i.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Sl(s,n,a.layoutBox),Wc(o,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=o,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:o,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function ru(e){gi.value&&Kc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function iu(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function au(e){e.clearSnapshot()}function ou(e){e.clearMeasurements()}function su(e){e.isLayoutDirty=!1}function lu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function cu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uu(e){e.resolveTargetDelta()}function du(e){e.calcProjection()}function pu(e){e.resetSkewAndRotation()}function fu(e){e.removeLeadSnapshot()}function hu(e,t,n){e.translate=Go(t.translate,0,n),e.scale=Go(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function mu(e,t,n,r){e.min=Go(t.min,n.min,r),e.max=Go(t.max,n.max,r)}function gu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const vu={duration:.45,ease:[.4,0,.1,1]},yu=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),bu=yu("applewebkit/")&&!yu("chrome/")?Math.round:fi;function xu(e){e.min=bu(e.min),e.max=bu(e.max)}function wu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Hc(t),i=Hc(n),a=.2,!(Math.abs(r-i)<=a));var r,i,a}function Su(e){return e!==e.root&&e.scroll?.wasRoot}const ku=eu({attachResizeListener:(e,t)=>pl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Eu={current:void 0},Cu=eu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Eu.current){const e=new ku({});e.mount(window),e.setOptions({layoutScroll:!0}),Eu.current=e}return Eu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Pu={pan:{Feature:class extends sl{constructor(){super(...arguments),this.removePointerDownListener=fi}onPointerDown(e){this.session=new Ul(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$l(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:ic(e),onStart:ic(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&yi.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=ml(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends sl{constructor(e){super(e),this.removeGroupControls=fi,this.removeListeners=fi,this.controls=new nc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fi}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Cu,MeasureLayout:yc}};function Tu(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const i=n?.[e]??r.querySelectorAll(e);return i?Array.from(i):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function ju(e){return!("touch"===e.pointerType||dl())}function Du(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const i=r["onHover"+n];i&&yi.postRender((()=>i(t,hl(t))))}const Au=(e,t)=>!!t&&(e===t||Au(e,t.parentElement)),Ru=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const Mu=new WeakSet;function Lu(e){return t=>{"Enter"===t.key&&e(t)}}function _u(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function zu(e){return fl(e)&&!dl()}function Ou(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Tu(e,n),o=e=>{const r=e.currentTarget;if(!zu(e)||Mu.has(r))return;Mu.add(r);const a=t(r,e),o=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),zu(e)&&Mu.has(r)&&(Mu.delete(r),"function"===typeof a&&a(e,{success:t}))},s=e=>{o(e,r===window||r===document||n.useGlobalTarget||Au(r,e.target))},l=e=>{o(e,!1)};window.addEventListener("pointerup",s,i),window.addEventListener("pointercancel",l,i)};return r.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",o,i),e instanceof HTMLElement&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=Lu((()=>{if(Mu.has(n))return;_u(n,"down");const e=Lu((()=>{_u(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>_u(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,i))),t=e,Ru.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),a}function Fu(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const i=r["onTap"+("End"===n?"":n)];i&&yi.postRender((()=>i(t,hl(t))))}const Nu=new WeakMap,Iu=new WeakMap,$u=e=>{const t=Nu.get(e.target);t&&t(e)},Bu=e=>{e.forEach($u)};function Vu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Iu.has(r)||Iu.set(r,{});const i=Iu.get(r),a=JSON.stringify(n);return i[a]||(i[a]=new IntersectionObserver(Bu,{root:t,...n})),i[a]}(t);return Nu.set(e,n),r.observe(e),()=>{Nu.delete(e),r.unobserve(e)}}const Uu={some:0,all:1};const Wu={inView:{Feature:class extends sl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:i}=e,a={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Uu[r]};return Vu(this.node.current,a,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,i&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),a=t?n:r;a&&a(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends sl{mount(){const{current:e}=this.node;e&&(this.unmount=Ou(e,((e,t)=>(Fu(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Fu(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends sl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Iv){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rs(pl(this.node.current,"focus",(()=>this.onFocus())),pl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends sl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,i,a]=Tu(e,n),o=e=>{if(!ju(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const a=e=>{ju(e)&&(r(e),n.removeEventListener("pointerleave",a))};n.addEventListener("pointerleave",a,i)};return r.forEach((e=>{e.addEventListener("pointerenter",o,i)})),a}(e,((e,t)=>(Du(this.node,t,"Start"),e=>Du(this.node,e,"End")))))}unmount(){}}}},Hu={layout:{ProjectionNode:Cu,MeasureLayout:yc}},Yu=(0,e.createContext)({strict:!1}),qu=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Ku=(0,e.createContext)({});function Gu(e){return li(e.animate)||Zs.some((t=>Gs(e[t])))}function Xu(e){return Boolean(Gu(e)||e.variants)}function Zu(t){const{initial:n,animate:r}=function(e,t){if(Gu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Gs(t)?t:void 0,animate:Gs(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Ku));return(0,e.useMemo)((()=>({initial:n,animate:r})),[Qu(n),Qu(r)])}function Qu(e){return Array.isArray(e)?e.join(" "):e}const Ju="undefined"!==typeof window,ed={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},td={};for(const n in ed)td[n]={isEnabled:e=>ed[n].some((t=>!!e[t]))};const nd=Symbol.for("motionComponentSymbol");function rd(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Bl(r)&&(r.current=e))}),[n])}const id=Ju?e.useLayoutEffect:e.useEffect;function ad(t,n,r,i,a){const{visualElement:o}=(0,e.useContext)(Ku),s=(0,e.useContext)(Yu),l=(0,e.useContext)(lc),c=(0,e.useContext)(qu).reducedMotion,u=(0,e.useRef)(null);i=i||s.renderer,!u.current&&i&&(u.current=i(t,{visualState:n,parent:o,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,p=(0,e.useContext)(dc);!d||d.projection||!a||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:i,layout:a,drag:o,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:od(e.parent)),e.projection.setOptions({layoutId:i,layout:a,alwaysMeasureLayout:Boolean(o)||s&&Bl(s),visualElement:e,animationType:"string"===typeof a?a:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,a,p);const f=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&f.current&&d.update(r,l)}));const h=r[Bi],m=(0,e.useRef)(Boolean(h)&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return id((()=>{d&&(f.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),oc.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(h)})),m.current=!1))})),d}function od(e){if(e)return!1!==e.options.allowProjection?e.projection:od(e.parent)}function sd(t){let{preloadedFeatures:n,createVisualElement:r,useRender:i,useVisualState:a,Component:o}=t;function s(t,n){let s;const l={...(0,e.useContext)(qu),...t,layoutId:ld(t)},{isStatic:c}=l,u=Zu(t),d=a(t,c);if(!c&&Ju){!function(){(0,e.useContext)(Yu).strict;0}();const t=function(e){const{drag:t,layout:n}=td;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=ad(o,d,l,r,t.ProjectionNode)}return(0,ac.jsxs)(Ku.Provider,{value:u,children:[s&&u.visualElement?(0,ac.jsx)(s,{visualElement:u.visualElement,...l}):null,i(o,t,rd(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)td[t]={...td[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof o?o:`create(${o.displayName??o.name??""})`}`;const l=(0,e.forwardRef)(s);return l[nd]=o,l}function ld(t){let{layoutId:n}=t;const r=(0,e.useContext)(uc).id;return r&&void 0!==n?r+"-"+n:n}function cd(e,t){let{layout:n,layoutId:r}=t;return ki.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!gc[e]||"opacity"===e)}const ud=(e,t)=>t&&"number"===typeof e?t.transform(e):e,dd={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pd=Si.length;function fd(e,t,n){const{style:r,vars:i,transformOrigin:a}=e;let o=!1,s=!1;for(const l in t){const e=t[l];if(ki.has(l))o=!0;else if(Mo(l))i[l]=e;else{const t=ud(e,io[l]);l.startsWith("origin")?(s=!0,a[l]=t):r[l]=t}}if(t.transform||(o||n?r.transform=function(e,t,n){let r="",i=!0;for(let a=0;a<pd;a++){const o=Si[a],s=e[o];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(o.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=ud(s,io[o]);l||(i=!1,r+=`${dd[o]||o}(${e}) `),n&&(t[o]=e)}}return r=r.trim(),n?r=n(t,i?"":r):i&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=a;r.transformOrigin=`${e} ${t} ${n}`}}const hd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function md(e,t,n){for(const r in t)Ni(t[r])||cd(r,n)||(e[r]=t[r])}function gd(t,n){const r={};return md(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return fd(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function vd(e,t){const n={},r=gd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const yd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function bd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yd.has(e)}let xd=e=>!bd(e);try{(wd=require("@emotion/is-prop-valid").default)&&(xd=e=>e.startsWith("on")?!bd(e):wd(e))}catch{}var wd;const Sd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kd(e){return"string"===typeof e&&!e.includes("-")&&!!(Sd.indexOf(e)>-1||/[A-Z]/u.test(e))}const Ed={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cd={offset:"strokeDashoffset",array:"strokeDasharray"};function Pd(e,t,n){return"string"===typeof e?e:Oa.transform(t+n*e)}function Td(e,t,n,r){let{attrX:i,attrY:a,attrScale:o,originX:s,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...p}=t;if(fd(e,p,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:h,dimensions:m}=e;f.transform&&(m&&(h.transform=f.transform),delete f.transform),m&&(void 0!==s||void 0!==l||h.transform)&&(h.transformOrigin=function(e,t,n){return`${Pd(t,e.x,e.width)} ${Pd(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==i&&(f.x=i),void 0!==a&&(f.y=a),void 0!==o&&(f.scale=o),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,i=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const a=i?Ed:Cd;e[a.offset]=Oa.transform(-r);const o=Oa.transform(t),s=Oa.transform(n);e[a.array]=`${o} ${s}`}(f,c,u,d,!1)}const jd=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),Dd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Ad(t,n,r,i){const a=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Td(e,n,Dd(i),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};md(e,t.style,t),a.style={...e,...a.style}}return a}function Rd(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,i,a,o)=>{let{latestValues:s}=a;const l=(kd(n)?Ad:vd)(r,s,o,n),c=function(e,t,n){const r={};for(const i in e)"values"===i&&"object"===typeof e.values||(xd(i)||!0===n&&bd(i)||!t&&!bd(i)||e.draggable&&i.startsWith("onDrag"))&&(r[i]=e[i]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:i}:{},{children:d}=r,p=(0,e.useMemo)((()=>Ni(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:p})}}function Md(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Ld=t=>(n,r)=>{const i=(0,e.useContext)(Ku),a=(0,e.useContext)(lc),o=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:i,createRenderState:a,onUpdate:o}=e;const s={latestValues:_d(t,n,r,i),renderState:a()};return o&&(s.onMount=e=>o({props:t,current:e,...s}),s.onUpdate=e=>o(e)),s}(t,n,i,a);return r?o():Md(o)};function _d(e,t,n,r){const i={},a=r(e,{});for(const p in a)i[p]=kc(a[p]);let{initial:o,animate:s}=e;const l=Gu(e),c=Xu(e);t&&c&&!l&&!1!==e.inherit&&(void 0===o&&(o=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===o;const d=u?s:o;if(d&&"boolean"!==typeof d&&!li(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=ui(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(i[r]=e)}for(const r in e)i[r]=e[r]}}}return i}function zd(e,t,n){const{style:r}=e,i={};for(const a in r)(Ni(r[a])||t.style&&Ni(t.style[a])||cd(a,e)||void 0!==n?.getValue(a)?.liveStyle)&&(i[a]=r[a]);return i}const Od={useVisualState:Ld({scrapeMotionValuesFromProps:zd,createRenderState:hd})};function Fd(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(Iv){t.dimensions={x:0,y:0,width:0,height:0}}}function Nd(e,t,n,r){let{style:i,vars:a}=t;Object.assign(e.style,i,r&&r.getProjectionStyles(n));for(const o in a)e.style.setProperty(o,a[o])}const Id=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $d(e,t,n,r){Nd(e,t,void 0,r);for(const i in t.attrs)e.setAttribute(Id.has(i)?i:$i(i),t.attrs[i])}function Bd(e,t,n){const r=zd(e,t,n);for(const i in e)if(Ni(e[i])||Ni(t[i])){r[-1!==Si.indexOf(i)?"attr"+i.charAt(0).toUpperCase()+i.substring(1):i]=e[i]}return r}const Vd=["x","y","width","height","cx","cy","r"],Ud={useVisualState:Ld({scrapeMotionValuesFromProps:Bd,createRenderState:jd,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:i,latestValues:a}=e;if(!r)return;let o=!!t.drag;if(!o)for(const l in a)if(ki.has(l)){o=!0;break}if(!o)return;let s=!n;if(n)for(let l=0;l<Vd.length;l++){const e=Vd[l];t[e]!==n[e]&&(s=!0)}s&&yi.read((()=>{Fd(r,i),yi.render((()=>{Td(i,a,Dd(r.tagName),t.transformTemplate),$d(r,i)}))}))}})};function Wd(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return sd({...kd(n)?Ud:Od,preloadedFeatures:e,useRender:Rd(r),createVisualElement:t,Component:n})}}const Hd={current:null},Yd={current:!1};const qd=[...Io,Ba,Xa],Kd=new WeakMap;const Gd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class Xd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:i,blockInitialAnimation:a,visualState:o}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=Do,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Ri.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,yi.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=o;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=i,this.options=s,this.blockInitialAnimation=Boolean(a),this.isControllingVariants=Gu(n),this.isVariantNode=Xu(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const e=p[f];void 0!==l[f]&&Ni(e)&&e.set(l[f],!1)}}mount(e){this.current=e,Kd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Yd.current||function(){if(Yd.current=!0,Ju)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Hd.current=e.matches;e.addListener(t),t()}else Hd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Hd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),bi(this.notifyUpdate),bi(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=ki.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&yi.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),i=t.on("renderRequest",this.scheduleRender);let a;window.MotionCheckAppearSync&&(a=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),i(),a&&a(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in td){const t=td[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Gd.length;n++){const t=Gd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const i=t[r],a=n[r];if(Ni(i))e.addValue(r,i);else if(Ni(a))e.addValue(r,_i(i,{owner:e}));else if(a!==i)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(i):t.hasAnimated||t.set(i)}else{const t=e.getStaticValue(r);e.addValue(r,_i(void 0!==t?t:i,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=_i(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(Ao(n)||xa(n))?n=parseFloat(n):!(e=>qd.find(No(e)))(n)&&Xa.test(t)&&(n=so(e,t)),this.setBaseTarget(e,Ni(n)?n.get():n)),Ni(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=ui(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||Ni(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new Ti),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Zd extends Xd{constructor(){super(...arguments),this.KeyframeResolver=Bo}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Ni(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Qd extends Zd{constructor(){super(...arguments),this.type="html",this.renderInstance=Nd}readValueFromInstance(e,t){if(ki.has(t))return((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return yo(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),i=(Mo(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof i?i.trim():i}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Il(e,n)}build(e,t,n){fd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return zd(e,t,n)}}class Jd extends Zd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kl,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Fd(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(ki.has(t)){const e=oo(t);return e&&e.default||0}return t=Id.has(t)?t:$i(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Bd(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&yi.postRender(this.updateDimensions)}build(e,t,n){Td(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){$d(e,t,0,r)}mount(e){this.isSVGTag=Dd(e.tagName),super.mount(e)}}const ep=si(Wd({...cl,...Wu,...Pu,...Hu},((t,n)=>kd(t)?new Jd(n):new Qd(n,{allowProjection:t!==e.Fragment}))));let tp=function(e){return e.PROJECT="project",e.SKILL="skill",e.EXPERIENCE="experience",e}({});const np=n.p+"static/media/dungeon_wireframe.10bea9bf0b78e996aaee.png",rp=n.p+"static/media/p2ip.bada885146a0aec65d24.png",ip=n.p+"static/media/api_prediction.f4cadfc354b5ee2cdbd6.png",ap=n.p+"static/media/bdd_thumbnail.666365966f736c86303d.png",op=n.p+"static/media/catsim_thumbnail.506b32b6ebab4307004c.png",sp=[{id:"card-portfolio",title:"Portfolio Card Game",description:"An interactive portfolio website inspired by card deck builder games",type:tp.PROJECT,imageUrl:"https://images.unsplash.com/photo-1742743032749-187b17179e0f?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tags:["Frontend","React","TypeScript","Framer Motion","Styled Components","Web Development"],links:[{label:"GitHub",url:"https://github.com/atinyshrimp/Website/tree/master/portfolio-v2"}],isFeatured:!0,projectDetails:{duration:"4 weeks",technologies:["React","TypeScript","Framer Motion","Styled Components"],role:"Developer & Designer",outcomes:["Interactive card interface","Deck building mechanic","Responsive design"]},stats:{creativity:5,impact:2,difficulty:4}},{id:"lego",title:"Lego Marketplace",description:"A handy little website to look for lego sets to resell and their potential rentability.",type:tp.PROJECT,imageUrl:"https://github.com/atinyshrimp/lego/blob/master/client/v2/assets/images/bricked_up_logo.png?raw=true",tags:["Frontend","Backend","Fullstack","React","Node.js","MongoDB","Web Development","Web Scraping"],links:[{label:"GitHub",url:"https://github.com/atinyshrimp/lego"},{label:"Live Demo",url:"https://bricked-up.vercel.app/"}],projectDetails:{duration:"4 months",technologies:["React","Node.js","Express","MongoDB","Puppeteer"],outcomes:["Designed and built a full-stack LEGO deal aggregator with automated data scraping and scoring.","Developed a custom Relevance Score algorithm combining discount, popularity, freshness, expiry, and resalability.","Implemented automated scraping pipelines using Puppeteer and GitHub Actions for twice-daily refreshes.","Built a responsive, filterable frontend using Bootstrap and JavaScript for browsing and analyzing deals.","Enabled MongoDB-based storage with an Express.js API backend for efficient data delivery.","Created a dashboard-like UI with advanced filtering and dynamic insights into deal quality and resale value.","Used visual indicators and UX-focused design to present complex data clearly for end users."]},stats:{creativity:4,impact:1,difficulty:3}},{id:"michelin-ml",isFeatured:!0,title:"Gastronaut",description:"A platform recommending sustainable MICHELIN restaurants worldwide based on reviews.",type:tp.PROJECT,imageUrl:"https://github.com/atinyshrimp/webscraping-ml-project/blob/d7c9e3ad8aeb6fee792deac46b4c0fbb2430780e/static/img/landing_page.png?raw=true",tags:["Python","HuggingFace","Bootstrap","Web Scraping","Web Development","Natural Language Processing (NLP)","Machine Learning (ML)"],links:[{label:"GitHub",url:"https://github.com/atinyshrimp/webscraping-ml-project"}],projectDetails:{duration:"2 months",technologies:["Python","HuggingFace","Bootstrap","Puppeteer","Flask","Google Places API","PRAW (Reddit API)"],outcomes:["Built an interactive restaurant recommendation system based on sustainability criteria (Michelin Green Star).","Developed an AI-powered chatbot using Hugging Face and NLP to deliver conversational restaurant suggestions.","Engineered a multi-source data pipeline using Google Places API, Reddit, and Michelin Guide for scraping, enrichment, and review summarization.","Implemented semantic search and similarity ranking using Sentence Transformers for personalized results.","Designed a Flask web app with dynamic filtering (cuisine, distance, price) and map-based restaurant exploration.","Created data visualizations and a review analysis engine aggregating sentiment from user-generated content.","Followed best practices in modular code organization, with clean separation between scraping, modeling, and UI."]},stats:{creativity:3,impact:1,difficulty:2}},{id:"catsim",isFeatured:!0,title:"CatSim",description:"A simple pet simulation game where you can take care of your virtual cat",type:tp.PROJECT,imageUrl:op,tags:["Unity","C#","Game Design","Game Development","Object-Oriented Programming (OOP)"],links:[{label:"GitHub",url:"https://github.com/atinyshrimp/Programmer-Theory-Repo"},{label:"Unity Play",url:"https://play.unity.com/p/63fb8d6caf7eae04a34e6471"},{label:"Asset Library (itch.io)",url:"https://itch.io/c/3103141/pet-simulator"}],projectDetails:{duration:"2 weeks",technologies:["C#","Unity"],outcomes:["Built a responsive 2D pet simulation game with decision-based mechanics using Unity.","Designed and implemented a needs-based gameplay loop (health, hunger, fun, sleep) encouraging healthy choice management.","Developed a modular, maintainable system using Object-Oriented Programming (OOP) principles such as encapsulation, abstraction, inheritance, and polymorphism.","Created a scriptable inventory system using Unity\u2019s ScriptableObject and CreateAssetMenu for efficient content creation.","Designed custom UI screens including Title, Main, and Credits with save/load functionality based on user input.","Programmed an Animator-driven character system with interactive, state-based animations for the cat.","Integrated sound effects and ambient music to enhance gameplay feedback and immersion.","Implemented a persistent saving system using JSON and the Singleton pattern to manage game state across sessions."]},stats:{creativity:4,impact:1,difficulty:2}},{id:"selego-venulog",title:"Venulog",description:"A logistic platform that allows you to manage your deliveries for events",type:tp.PROJECT,imageUrl:"https://placehold.co/600x400/2a3990/white/?text=Venulog",tags:["Frontend","Backend","Fullstack","Node.js","Express","Stripe","Web Development","React","Application Programming Interface (API)"],links:[{label:"Live Demo",url:"https://venulog.com"}],projectDetails:{duration:"1 month",technologies:["Node.js","Express","Stripe","i18n"],role:"Full Stack Developer",outcomes:["Realized during my internship at Selego","Secure payment processing with Stripe","User authentication with JWT","Internationalization (i18n)"]},stats:{creativity:2,impact:4,difficulty:3}},{id:"selego-midoc",title:"MiDoc",description:"A web application that allows you to manage your medical prescriptions related to menopause.",type:tp.PROJECT,imageUrl:"http://www.midoc.es/cdn/shop/files/Diseno_sin_titulo_-_2025-04-02T111651.217.png?v=1743585811",tags:["Frontend","Backend","Node.js","Express","Stripe","React","Application Programming Interface (API)","Web Development"],links:[{label:"Live Demo",url:"https://midoc-app.cleverapps.io"}],projectDetails:{duration:"1 month",technologies:["Node.js","Express","MongoDB","Stripe","i18n","Calendly"],role:"Full Stack Developer",outcomes:["Realized during my internship at Selego","Calendly integration to allow users to book appointments","Secure payment processing with Stripe, integrated with Calendly","User authentication with JWT","Webhooks integration with signature verification"]},stats:{creativity:2,impact:4,difficulty:3}},{id:"ux-sonar",title:"Captain Sonar",description:"A digital version of the board game Captain Sonar, a strategic team game.",type:tp.PROJECT,imageUrl:"https://jeux.ca/wp-content/uploads/2019/06/Captain-Sonar.jpg",tags:["Team Management","Game Design","Game Development","Object-Oriented Programming (OOP)","C#","Unity"],links:[{label:"Github",url:"https://github.com/Bouchta003/Captain_Sonar"}],projectDetails:{duration:"1 month",technologies:["Unity","C#","Adobe Photoshop","Notion","Microsoft Teams"],outcomes:["Implemented interactive gameplay mechanics","Implemeted roles' interface and actions","Used a user-friendly interface","Took care of the assets (boards, UI, etc.) with Photoshop","Implemented turn-based mechanics with Coroutines","Took care of the GameManager and how each role affects the game","Provided post-mortem documentation via Notion","Used Microsoft Teams for communication"]},stats:{creativity:5,impact:1,difficulty:4}},{id:"esilv-p2ip",title:"Book exchange app",description:"An innovative startup project that has a long-lasting positive impact.",type:tp.PROJECT,imageUrl:rp,tags:["Team Management","UX Design","UI Design","Mobile App","Business Development","Business Plan"],links:[{label:"Case study",url:"https://dribbble.com/shots/21626313-Book-exchange-mobile-app-Agora"},{label:"Know more",url:"https://www.esilv.fr/en/student-projects"}],projectDetails:{duration:"4 months",technologies:[],outcomes:["Edited a 1-minute video pitch",'Designed a mobile app prototype (the case study is available on Dribbble, see "Case study" below)',"Edited a 5-minute end-of-project video","Edited a 2-minute advertising video to promote our project"]},stats:{creativity:4,impact:3,difficulty:2}},{id:"avila-bible-classification",title:"Avila Bible Classification Prediction",description:"A project that uses machine learning to classify the scribes of the Avila Bible, a historical artifact.",type:tp.PROJECT,imageUrl:ip,tags:["Machine Learning (ML)","Data Science","Python","Data Analysis","Data Visualization","Application Programming Interface (API)"],links:[{label:"Github",url:"https://github.com/atinyshrimp/Data-Analysis-Project"}],projectDetails:{duration:"1 month",technologies:["scikit-learn","pandas","numpy","plotly","Panel","Flask","Bootstrap"],outcomes:["Used machine learning to classify the scribes of the Avila Bible","Used data analysis to find patterns in the data","Used data visualization to display the results","Used a Flask API to deploy the model"]},stats:{creativity:3,impact:2,difficulty:2}},{id:"esilv-bdd",title:"Database management app",description:"A project made to allow a flower shop owner to manage their clients, their storage, and more.",type:tp.PROJECT,imageUrl:ap,tags:["ESILV","C#","NET","Database Management System (DBMS)","MySQL","Windows Forms"],links:[{label:"Github",url:"https://github.com/atinyshrimp/BDD-Projet-BelleFleur"}],projectDetails:{duration:"4 months",technologies:["C#","NET","MySQL Workbench","Windows Forms"],outcomes:["Developed a complete retail management application in C# using Windows Forms and MySQL for a florist's multi-store business.","Designed and implemented CRUD modules for stores, clients, products (including bouquets), and orders with integrated search and filtering.","Built a bouquet composition system with dynamic inventory rules, seasonal product filtering, and differentiated stock handling per store.",{label:"Implemented client segmentation features with advanced data exports:",subpoints:["Export of inactive clients (JSON).","Export of high-frequency buyers (XML)."]},{label:"Created a custom reporting module featuring:",subpoints:["Real-time sales metrics (revenue, volume, top clients).","Dynamic period and store-based filtering.","Visual insights like Top 5 products and Top-performing stores."]},"Integrated statistical dashboards summarizing business performance across stores over selected periods.","Applied modular design principles for scalability and maintainability across independent business modules."]},stats:{creativity:4,impact:3,difficulty:2}},{id:"react",title:"React",description:"Building interactive UIs with React and related technologies",type:tp.SKILL,imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpluspng.com%2Fimg-png%2Freact-logo-png-react-logo-png-transparent-amp-svg-vector-pluspng-2400x2400.png&f=1&nofb=1&ipt=1cc4c836f28d79730cf5b3fbc49f630732dc5afdb1245c99e8f5944340ea76a0",tags:["Framework","Frontend","JavaScript","User Interface (UI)"],skillDetails:{proficiency:5,yearsOfExperience:(new Date).getFullYear()-2024,relatedProjects:["card-portfolio","selego-venulog","selego-midoc","selego-internship","lego"]},stats:{mastery:3,usageFrequency:4,comboPower:4}},{id:"figma",title:"Figma",description:"Creating intuitive, accessible, and aesthetically pleasing user experiences",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlnbWF8ZW58MHx8MHx8fDA%3D",tags:["Design","User Experience (UX)","User Interface (UI)","Software","UI Design"],skillDetails:{proficiency:4,yearsOfExperience:2,relatedProjects:["lego","esilv-p2ip","esilv"]},stats:{mastery:3,usageFrequency:3,comboPower:4}},{id:"japanese",title:"Japanese",description:"Speaking, reading, and writing Japanese: passed JLPT N3 in 2024",isFeatured:!0,type:tp.SKILL,imageUrl:"https://plus.unsplash.com/premium_photo-1694475091098-27cea4555469?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8amFwYW5lc2UlMjBsYW5ndWFnZXxlbnwwfHwwfHx8MA%3D%3D",tags:["Language","Culture","Communication"],skillDetails:{proficiency:5,yearsOfExperience:(new Date).getFullYear()-2020,relatedProjects:["emlv"]},stats:{mastery:3,usageFrequency:2,comboPower:2}},{id:"skill-4",title:"Korean",description:"Speaking, reading, and writing Korean",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1640090540877-a9ea2027abbd?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a29yZWFuJTIwbGFuZ3VhZ2V8ZW58MHx8MHx8fDA%3D",tags:["Language","Culture","Communication"],skillDetails:{proficiency:5,yearsOfExperience:(new Date).getFullYear()-2017,relatedProjects:["cau-exchange"]},stats:{mastery:3,usageFrequency:1,comboPower:2}},{id:"language-en",title:"English",description:"Speaking, reading, and writing English: TOEFL ITP 640/677 (CEFR C1)",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1560884482-62010016d7c3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGVuZ2xpc2glMjBsYW5ndWFnZXxlbnwwfHwwfHx8Mg%3D%3D",tags:["Language","Culture","Communication"],skillDetails:{proficiency:5,yearsOfExperience:(new Date).getFullYear()-2013,relatedProjects:["cau-exchange","esilv","selego-internship","emlv"]},stats:{mastery:3,usageFrequency:1,comboPower:2}},{id:"unity",isFeatured:!0,title:"Unity3D",description:"Building interactive games using Unity",type:tp.SKILL,imageUrl:"https://pbs.twimg.com/profile_images/1481028548085583873/F1TrFReK_400x400.jpg",tags:["Game Design","Game Development","C#","Object-Oriented Programming","Game Engine","Software"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2023,relatedProjects:["catsim","ux-sonar","esilv"]},stats:{mastery:3,usageFrequency:2,comboPower:2}},{id:"unreal-engine",title:"Unreal Engine",description:"Building interactive games using Unreal Engine",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1691405167344-c3bbc9710ad2?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8dW5yZWFsJTIwZW5naW5lfGVufDB8fDB8fHww",tags:["Game Design","Game Development","Blueprint","Object-Oriented Programming"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2024,relatedProjects:["esilv"]},stats:{mastery:2,usageFrequency:1,comboPower:2}},{id:"valuation",title:"Valuation Techniques",description:"Experience with DCF, multiples, and precedent transaction methods.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1651340927948-26826aaef4b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dmFsdWF0aW9ufGVufDB8fDB8fHwy",tags:["Valuation","Investment","Corporate Finance"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2024,relatedProjects:["emlv"]},stats:{mastery:3,usageFrequency:2,comboPower:4}},{id:"strategy",title:"Corporate Strategy",description:"Analyzing and advising on high-level business decisions in alignment with financial goals.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3RyYXRlZ3klMjBidXNpbmVzc3xlbnwwfHwwfHx8Mg%3D%3D",tags:["Strategy","Finance","Management"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2023,relatedProjects:["emlv"]},stats:{mastery:2,usageFrequency:1,comboPower:3}},{id:"accounting",title:"Accounting",description:"Understanding financial statements and accounting principles for financial analysis.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YWNjb3VudGluZ3xlbnwwfHwwfHx8Mg%3D%3D",tags:["Accounting","Finance","Reporting"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2020,relatedProjects:["emlv"]},stats:{mastery:3,usageFrequency:1,comboPower:2}},{id:"excel",title:"Microsoft Excel",description:"Advanced use of Excel for financial modeling, analysis, and automation.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1658203897339-0b8c64a42fba?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXhjZWx8ZW58MHx8MHx8fDI%3D",tags:["Excel","Finance","Automation","Modeling"],skillDetails:{proficiency:5,yearsOfExperience:(new Date).getFullYear()-2020,relatedProjects:["emlv","sncf"]},stats:{mastery:5,usageFrequency:5,comboPower:4}},{id:"power-bi",title:"Power BI",description:"Creating interactive dashboards and reports for data visualization.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YnVzaW5lc3MlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDI%3D",tags:["Power BI","Data Visualization","Business Intelligence","Reporting","Analytics","Data Analysis"],skillDetails:{proficiency:4,yearsOfExperience:(new Date).getFullYear()-2023,relatedProjects:["data-analyst-stellantis","esilv"]},stats:{mastery:3,usageFrequency:1,comboPower:2}},{id:"python",title:"Python",description:"Experienced in scripting, data analysis, and building ML pipelines.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1649180556628-9ba704115795?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHl0aG9uJTIwcHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDI%3D",tags:["Data Science","Machine Learning (ML)","Backend","Scripting","Programming"],skillDetails:{proficiency:4,yearsOfExperience:(new Date).getFullYear()-2016,relatedProjects:["michelin-ml","esilv","data-analyst-stellantis","avila-bible-classification"]},stats:{mastery:4,usageFrequency:4,comboPower:4}},{id:"pandas",title:"Pandas",description:"Data manipulation and transformation in Python for analysis.",type:tp.SKILL,imageUrl:"https://pandas.pydata.org/static/img/pandas_secondary_white.svg",tags:["Data Science","Python","Analytics","Data Analysis"],skillDetails:{proficiency:4,yearsOfExperience:(new Date).getFullYear()-2022,relatedProjects:["michelin-ml","esilv","avila-bible-classification"]},stats:{mastery:3,usageFrequency:3,comboPower:3}},{id:"ml",title:"Machine Learning (ML)",description:"Building predictive models using scikit-learn and other libraries.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fGludGVsbGlnZW5jZSUyMGFydGlmaWNpZWxsZXxlbnwwfHwwfHx8Mg%3D%3D",tags:["Data Science","Artificial Intelligence (AI)","Predictive Modeling"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2022,relatedProjects:["michelin-ml","esilv","avila-bible-classification"]},stats:{mastery:3,usageFrequency:3,comboPower:4}},{id:"sql",title:"SQL",description:"Querying databases and managing data pipelines.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1489875347897-49f64b51c1f8?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",tags:["Data","Backend","Query Language"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2022,relatedProjects:["esilv","data-analyst-stellantis","esilv-bdd"]},stats:{mastery:3,usageFrequency:4,comboPower:3}},{id:"3ds-max",title:"Autodesk 3ds Max",description:"3D modeling and rendering for game development.",type:tp.SKILL,imageUrl:np,tags:["3D Modeling","Game Development","Rendering","Game Design","Level Design","Software"],skillDetails:{proficiency:2,yearsOfExperience:(new Date).getFullYear()-2024,relatedProjects:["esilv"]},stats:{mastery:2,usageFrequency:1,comboPower:2}},{id:"adobe-illustrator",title:"Adobe Illustrator",description:"Creating vector graphics and illustrations using Adobe Illustrator.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1617777938240-9a1d8e51a47d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWRvYmUlMjBpbGx1c3RyYXRvcnxlbnwwfHwwfHx8Mg%3D%3D",tags:["Vector Graphics","Illustrations","Design","Graphics"],skillDetails:{proficiency:2,yearsOfExperience:(new Date).getFullYear()-2023,relatedProjects:["esilv","emlv"]},stats:{mastery:2,usageFrequency:1,comboPower:2}},{id:"davinci-resolve",title:"DaVinci Resolve",description:"Editing videos using DaVinci Resolve.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1696389500310-cd6d247cb609?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZGF2aW5jaSUyMHJlc29sdmV8ZW58MHx8MHx8fDI%3D",tags:["Video Editing","UX Design","Graphics","Software"],skillDetails:{proficiency:2,yearsOfExperience:(new Date).getFullYear()-2023,relatedProjects:["esilv","ux-sonar","esilv-p2ip"]},stats:{mastery:3,usageFrequency:3,comboPower:4}},{id:"web-dev",title:"Web Development",description:"Building responsive and interactive web applications using HTML, CSS, and JavaScript.",type:tp.SKILL,imageUrl:"https://images.unsplash.com/photo-1669023414180-4dcf35d943e1?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGh0bWwlMjBjc3N8ZW58MHx8MHx8fDI%3D",tags:["HTML5","CSS","JavaScript","Frontend","Fullstack"],skillDetails:{proficiency:3,yearsOfExperience:(new Date).getFullYear()-2022,relatedProjects:["esilv","experience-2","selego-venulog","selego-midoc","avila-bible-classification","michelin-ml","lego","card-portfolio"]},stats:{mastery:3,usageFrequency:4,comboPower:4}},{id:"c-sharp",title:"C#",description:"Building responsive and interactive applications using C#.",type:tp.SKILL,imageUrl:"https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F9375472.png&f=1&nofb=1&ipt=3aa4715c0ec009da2b8635c666da1daf2ab6a243819678fab65815bd7f7ccc40",tags:["NET","Windows Forms","Database Management System (DBMS)","Object-Oriented Programming (OOP)","Game Development"],skillDetails:{proficiency:4,yearsOfExperience:(new Date).getFullYear()-2021,relatedProjects:["esilv","ux-sonar","esilv-bdd","catsim"]},stats:{mastery:4,usageFrequency:4,comboPower:3}},{id:"selego-internship",title:"Full Stack Developer",description:"Built complex web applications using React, Node.js, and MongoDB",isFeatured:!0,type:tp.EXPERIENCE,imageUrl:"https://bank.cellar-c2.services.clever-cloud.com/file/assets/edb8d352c855fbd4e7e1496b10b059b0/lestud_logo%20%281%29.jpeg",tags:["Frontend","Backend","Fullstack","Internship","Agile Methodologies","Application Programming Interface (API)","RESTful API","Teamwork"],experienceDetails:{company:"Selego",position:"Full Stack Developer & Data Scientist",startDate:new Date("2025-02-10"),endDate:new Date("2025-08-15"),location:"Paris, France",achievements:["Developed and maintained web applications for various clients","Collaborated with cross-functional teams to define project requirements","Implemented RESTful APIs for data exchange between frontend and backend","Communicated effectively with clients to gather feedback and improve products"]},stats:{collaboration:5,impact:4,growth:3}},{id:"esilv",title:"ESILV",description:"Master of Engineering (MEng) in Data Science and Artificial Intelligence",type:tp.EXPERIENCE,imageUrl:"https://www.esilv.fr/ecole-ingenieur/logos/logo_esilv_png_couleur.png",tags:["Engineering","Formation","Data Science","Artificial Intelligence (AI)","Machine Learning","Deep Learning"],experienceDetails:{company:"Ecole Sup\xe9rieure d'Ing\xe9nieurs L\xe9onard de Vinci",position:"Master of Engineering",startDate:new Date("2020-09-01"),endDate:new Date("2025-08-31"),location:"Courbevoie, France",achievements:["Specialized in Data Science and AI","Followed a continuous Soft Skills formation, including agile methods like Scrum, teamwork and MBTI.","Yearly projects in accordance with the modules seen throughout the year","Enrolled in the UX Design track including courses such as GUI prototyping, Website Design, Game Design, etc.","Completed a double degree with the Management school, EMLV"]},stats:{collaboration:3,impact:2,growth:4}},{id:"cau-exchange",title:"Exchange Program",description:"Academic exchange program at Chung-Ang University in South Korea.",isFeatured:!0,type:tp.EXPERIENCE,imageUrl:"https://cauexchange.wordpress.com/wp-content/uploads/2017/12/img_47821.jpg",tags:["Engineering","Formation","Frontend"],experienceDetails:{company:"Chung-Ang University",position:"International Visiting Exchange Student",startDate:new Date("2022-09-01"),endDate:new Date("2022-12-21"),location:"Seoul, South Korea",achievements:["Participated in an exchange program at Chung-Ang University, on their Seoul campus","Studied in the College of Software, School of Computer Science & Engineering","Completed courses in Object-Oriented Programming (C++), Web Programming, Numerical Analysis & Intermediate Korean Language"]},stats:{collaboration:3,impact:2,growth:3}},{id:"emlv",title:"EMLV",description:"Master of Science degree (MSc) in management, specializing in Corporate Finance",type:tp.EXPERIENCE,imageUrl:"https://www.emlv.fr/wordpress/logos/logo-emlv-couleur.png",tags:["Management","Finance","Accounting","Formation","Corporate Finance","Analysis","Business"],experienceDetails:{company:"Ecole de Management L\xe9onard de Vinci",position:"Master's Degree in Management",startDate:new Date("2020-09-01"),endDate:new Date("2025-08-31"),location:"Courbevoie, France",achievements:["Specialized in Corporate Finance","Completed projects in management, financial analysis and accounting","Gained experience in financial modeling and valuation techniques"]},stats:{collaboration:4,impact:2,growth:2}},{id:"sncf",title:"Research Engineer Intern",description:"Worked on reviewing the technical standards of electrical conductors for SNCF R\xe9seau",type:tp.EXPERIENCE,imageUrl:"https://files.appli-intramuros.com/img/news/3199/de54a5130b71968927729fd9da1f8a42_travaux-sn.jpg",tags:["Internship","Engineering"],experienceDetails:{company:"SNCF R\xe9seau",position:"Research Engineer Intern",startDate:new Date("2022-06-07"),endDate:new Date("2022-08-10"),location:"Saint-Denis, France",achievements:["Made an inventory of the standards used by type of conductor","Identified canceled standards and researched alternative standards","Specified test types and sanctions for technical validation by type of conductor","Synthesized (e.g.: Excel table) the standards and the technical validation tests by type of conductor","Mapped out the gathered information in a Word document shared and used by the whole research section"]},stats:{collaboration:2,impact:3,growth:1}},{id:"data-analyst-stellantis",title:"Data Analyst Intern",description:"Worked on data analysis and visualization for Stellantis.",type:tp.EXPERIENCE,imageUrl:"https://www.largus.fr/images/styles/max_1300x1300/public/images/01-logo-stellantis.jpg?itok=onTwqeH3",tags:["Internship","Data Science","Python","Power BI","Data Analysis","Backend"],experienceDetails:{company:"Stellantis",position:"Data Analyst Junior Connected Vehicle",startDate:new Date("2024-04-01"),endDate:new Date("2024-08-09"),location:"Poissy, France",achievements:["Developed an interactive map using Power BI to quickly locate vehicles with connectivity issues, facilitating the identification of areas requiring intervention.","Created a system to classify and analyze delays in vehicle data communication, identifying causes by region and proposing tailored solutions.","Implemented an automated process for daily updates of vehicle data, ensuring that information is always current and reliable for analysis.","Automated data collection using Python and created interactive visual reports in Power BI, enabling real-time performance monitoring and a swift response to detected issues."]},stats:{collaboration:3,impact:2,growth:2}}],lp={creativity:{icon:"\ud83c\udfa8",label:"Creativity",description:"Originality, expression, idea generation"},impact:{icon:"\ud83d\udca5",label:"Impact",description:"Tangible outcome or influence"},difficulty:{icon:"\ud83e\udde0",label:"Difficulty",description:"Problem-solving or technical challenge"},mastery:{icon:"\ud83e\udde0",label:"Mastery",description:"Expertise level with the skill/tool"},usageFrequency:{icon:"\ud83d\udd01",label:"Usage Frequency",description:"How often this is part of my workflow"},comboPower:{icon:"\ud83d\udd17",label:"Combo Power",description:"How well this works with other tools"},collaboration:{icon:"\ud83e\udd1d",label:"Collaboration",description:"Teamwork, communication, cross-discipline work"},growth:{icon:"\ud83d\udcc8",label:"Growth",description:"Personal/professional development gained"}},cp=()=>sp.sort(((e,t)=>e.title.localeCompare(t.title))),up=e=>sp.find((t=>t.id===e)),dp=[{id:"frontend-specialist",name:"Master Web Developer",coverImage:"https://images.unsplash.com/photo-1624996752380-8ec242e0f85d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHdlYiUyMGRldnxlbnwwfHwwfHx8MA%3D%3D",description:"A collection showing my frontend development expertise",cards:["react","card-portfolio","lego","selego-internship","esilv","web-dev","selego-venulog"]},{id:"ai-specialist",name:"Data Science & AI Specialist",coverImage:"https://plus.unsplash.com/premium_photo-1682756540097-6a887bbcf9b0?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fGFydGlmaWNpYWwlMjBpbnRlbGxpZ2VuY2V8ZW58MHx8MHx8fDA%3D",description:"A collection showing my data science and AI expertise",cards:["michelin-ml","esilv","ml","python","pandas","sql","data-analyst-stellantis","power-bi","selego-internship"]},{id:"uiux-specialist",name:"UI/UX Specialist",coverImage:"https://images.unsplash.com/photo-1602576666092-bf6447a729fc?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dXh8ZW58MHx8MHx8fDA%3D",description:"A collection showing my ui/ux & game design expertise",cards:["react","figma","card-portfolio","esilv","unity","unreal-engine","web-dev","3ds-max","ux-sonar"]},{id:"management",name:"Management & Finance",coverImage:"https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29ycG9yYXRlJTIwZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D",description:"A collection showing my management & finance expertise",cards:["emlv","valuation","strategy","accounting","excel"]},{id:"game-design",name:"Game Design & Development",coverImage:"https://images.unsplash.com/photo-1556438064-2d7646166914?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z2FtZSUyMGRldmVsb3BtZW50fGVufDB8fDB8fHww",description:"A collection showing my game design expertise",cards:["catsim","esilv","unity","unreal-engine","3ds-max","ux-sonar"]}],pp=Math.min,fp=Math.max,hp=Math.round,mp=Math.floor,gp=e=>({x:e,y:e}),vp={left:"right",right:"left",bottom:"top",top:"bottom"},yp={start:"end",end:"start"};function bp(e,t,n){return fp(e,pp(t,n))}function xp(e,t){return"function"===typeof e?e(t):e}function wp(e){return e.split("-")[0]}function Sp(e){return e.split("-")[1]}function kp(e){return"x"===e?"y":"x"}function Ep(e){return"y"===e?"height":"width"}function Cp(e){return["top","bottom"].includes(wp(e))?"y":"x"}function Pp(e){return kp(Cp(e))}function Tp(e){return e.replace(/start|end/g,(e=>yp[e]))}function jp(e){return e.replace(/left|right|bottom|top/g,(e=>vp[e]))}function Dp(e){return"number"!==typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function Ap(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Rp(e,t,n){let{reference:r,floating:i}=e;const a=Cp(t),o=Pp(t),s=Ep(o),l=wp(t),c="y"===a,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,p=r[s]/2-i[s]/2;let f;switch(l){case"top":f={x:u,y:r.y-i.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-i.width,y:d};break;default:f={x:r.x,y:r.y}}switch(Sp(t)){case"start":f[o]-=p*(n&&c?-1:1);break;case"end":f[o]+=p*(n&&c?-1:1)}return f}async function Mp(e,t){var n;void 0===t&&(t={});const{x:r,y:i,platform:a,rects:o,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=xp(t,e),h=Dp(f),m=s[p?"floating"===d?"reference":"floating":d],g=Ap(await a.getClippingRect({element:null==(n=await(null==a.isElement?void 0:a.isElement(m)))||n?m:m.contextElement||await(null==a.getDocumentElement?void 0:a.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),v="floating"===d?{x:r,y:i,width:o.floating.width,height:o.floating.height}:o.reference,y=await(null==a.getOffsetParent?void 0:a.getOffsetParent(s.floating)),b=await(null==a.isElement?void 0:a.isElement(y))&&await(null==a.getScale?void 0:a.getScale(y))||{x:1,y:1},x=Ap(a.convertOffsetParentRelativeRectToViewportRelativeRect?await a.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:v,offsetParent:y,strategy:l}):v);return{top:(g.top-x.top+h.top)/b.y,bottom:(x.bottom-g.bottom+h.bottom)/b.y,left:(g.left-x.left+h.left)/b.x,right:(x.right-g.right+h.right)/b.x}}function Lp(){return"undefined"!==typeof window}function _p(e){return Fp(e)?(e.nodeName||"").toLowerCase():"#document"}function zp(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Op(e){var t;return null==(t=(Fp(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Fp(e){return!!Lp()&&(e instanceof Node||e instanceof zp(e).Node)}function Np(e){return!!Lp()&&(e instanceof Element||e instanceof zp(e).Element)}function Ip(e){return!!Lp()&&(e instanceof HTMLElement||e instanceof zp(e).HTMLElement)}function $p(e){return!(!Lp()||"undefined"===typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof zp(e).ShadowRoot)}function Bp(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=qp(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function Vp(e){return["table","td","th"].includes(_p(e))}function Up(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(Iv){return!1}}))}function Wp(e){const t=Hp(),n=Np(e)?qp(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!n[e]&&"none"!==n[e]))||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Hp(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function Yp(e){return["html","body","#document"].includes(_p(e))}function qp(e){return zp(e).getComputedStyle(e)}function Kp(e){return Np(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Gp(e){if("html"===_p(e))return e;const t=e.assignedSlot||e.parentNode||$p(e)&&e.host||Op(e);return $p(t)?t.host:t}function Xp(e){const t=Gp(e);return Yp(t)?e.ownerDocument?e.ownerDocument.body:e.body:Ip(t)&&Bp(t)?t:Xp(t)}function Zp(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const i=Xp(e),a=i===(null==(r=e.ownerDocument)?void 0:r.body),o=zp(i);if(a){const e=Qp(o);return t.concat(o,o.visualViewport||[],Bp(i)?i:[],e&&n?Zp(e):[])}return t.concat(i,Zp(i,[],n))}function Qp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Jp(e){const t=qp(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Ip(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=hp(n)!==a||hp(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function ef(e){return Np(e)?e:e.contextElement}function tf(e){const t=ef(e);if(!Ip(t))return gp(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Jp(t);let o=(a?hp(n.width):n.width)/r,s=(a?hp(n.height):n.height)/i;return o&&Number.isFinite(o)||(o=1),s&&Number.isFinite(s)||(s=1),{x:o,y:s}}const nf=gp(0);function rf(e){const t=zp(e);return Hp()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:nf}function af(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const i=e.getBoundingClientRect(),a=ef(e);let o=gp(1);t&&(r?Np(r)&&(o=tf(r)):o=tf(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==zp(e))&&t}(a,n,r)?rf(a):gp(0);let l=(i.left+s.x)/o.x,c=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){const e=zp(a),t=r&&Np(r)?zp(r):r;let n=e,i=Qp(n);for(;i&&r&&t!==n;){const e=tf(i),t=i.getBoundingClientRect(),r=qp(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=a,c+=o,n=zp(i),i=Qp(n)}}return Ap({width:u,height:d,x:l,y:c})}function of(e,t){const n=Kp(e).scrollLeft;return t?t.left+n:af(Op(e)).left+n}function sf(e,t,n){void 0===n&&(n=!1);const r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:of(e,r)),y:r.top+t.scrollTop}}function lf(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=zp(e),r=Op(e),i=n.visualViewport;let a=r.clientWidth,o=r.clientHeight,s=0,l=0;if(i){a=i.width,o=i.height;const e=Hp();(!e||e&&"fixed"===t)&&(s=i.offsetLeft,l=i.offsetTop)}return{width:a,height:o,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Op(e),n=Kp(e),r=e.ownerDocument.body,i=fp(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=fp(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let o=-n.scrollLeft+of(e);const s=-n.scrollTop;return"rtl"===qp(r).direction&&(o+=fp(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}(Op(e));else if(Np(t))r=function(e,t){const n=af(e,!0,"fixed"===t),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Ip(e)?tf(e):gp(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}(t,n);else{const n=rf(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return Ap(r)}function cf(e,t){const n=Gp(e);return!(n===t||!Np(n)||Yp(n))&&("fixed"===qp(n).position||cf(n,t))}function uf(e,t,n){const r=Ip(t),i=Op(t),a="fixed"===n,o=af(e,!0,a,t);let s={scrollLeft:0,scrollTop:0};const l=gp(0);if(r||!r&&!a)if(("body"!==_p(t)||Bp(i))&&(s=Kp(t)),r){const e=af(t,!0,a,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else i&&(l.x=of(i));const c=!i||r||a?gp(0):sf(i,s);return{x:o.left+s.scrollLeft-l.x-c.x,y:o.top+s.scrollTop-l.y-c.y,width:o.width,height:o.height}}function df(e){return"static"===qp(e).position}function pf(e,t){if(!Ip(e)||"fixed"===qp(e).position)return null;if(t)return t(e);let n=e.offsetParent;return Op(e)===n&&(n=n.ownerDocument.body),n}function ff(e,t){const n=zp(e);if(Up(e))return n;if(!Ip(e)){let t=Gp(e);for(;t&&!Yp(t);){if(Np(t)&&!df(t))return t;t=Gp(t)}return n}let r=pf(e,t);for(;r&&Vp(r)&&df(r);)r=pf(r,t);return r&&Yp(r)&&df(r)&&!Wp(r)?n:r||function(e){let t=Gp(e);for(;Ip(t)&&!Yp(t);){if(Wp(t))return t;if(Up(t))return null;t=Gp(t)}return null}(e)||n}const hf={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const a="fixed"===i,o=Op(r),s=!!t&&Up(t.floating);if(r===o||s&&a)return n;let l={scrollLeft:0,scrollTop:0},c=gp(1);const u=gp(0),d=Ip(r);if((d||!d&&!a)&&(("body"!==_p(r)||Bp(o))&&(l=Kp(r)),Ip(r))){const e=af(r);c=tf(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}const p=!o||d||a?gp(0):sf(o,l,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:n.y*c.y-l.scrollTop*c.y+u.y+p.y}},getDocumentElement:Op,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const a=[..."clippingAncestors"===n?Up(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=Zp(e,[],!1).filter((e=>Np(e)&&"body"!==_p(e))),i=null;const a="fixed"===qp(e).position;let o=a?Gp(e):e;for(;Np(o)&&!Yp(o);){const t=qp(o),n=Wp(o);n||"fixed"!==t.position||(i=null),(a?!n&&!i:!n&&"static"===t.position&&i&&["absolute","fixed"].includes(i.position)||Bp(o)&&!n&&cf(e,o))?r=r.filter((e=>e!==o)):i=t,o=Gp(o)}return t.set(e,r),r}(t,this._c):[].concat(n),r],o=a[0],s=a.reduce(((e,n)=>{const r=lf(t,n,i);return e.top=fp(r.top,e.top),e.right=pp(r.right,e.right),e.bottom=pp(r.bottom,e.bottom),e.left=fp(r.left,e.left),e}),lf(t,o,i));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:ff,getElementRects:async function(e){const t=this.getOffsetParent||ff,n=this.getDimensions,r=await n(e.floating);return{reference:uf(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Jp(e);return{width:t,height:n}},getScale:tf,isElement:Np,isRTL:function(e){return"rtl"===qp(e).direction}};function mf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function gf(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o="function"===typeof ResizeObserver,layoutShift:s="function"===typeof IntersectionObserver,animationFrame:l=!1}=r,c=ef(e),u=i||a?[...c?Zp(c):[],...Zp(t)]:[];u.forEach((e=>{i&&e.addEventListener("scroll",n,{passive:!0}),a&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const i=Op(e);function a(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function o(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),a();const c=e.getBoundingClientRect(),{left:u,top:d,width:p,height:f}=c;if(s||t(),!p||!f)return;const h={rootMargin:-mp(d)+"px "+-mp(i.clientWidth-(u+p))+"px "+-mp(i.clientHeight-(d+f))+"px "+-mp(u)+"px",threshold:fp(0,pp(1,l))||1};let m=!0;function g(t){const r=t[0].intersectionRatio;if(r!==l){if(!m)return o();r?o(!1,r):n=setTimeout((()=>{o(!1,1e-7)}),1e3)}1!==r||mf(c,e.getBoundingClientRect())||o(),m=!1}try{r=new IntersectionObserver(g,{...h,root:i.ownerDocument})}catch(Iv){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),a}(c,n):null;let p,f=-1,h=null;o&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?af(e):null;return l&&function t(){const r=af(e);m&&!mf(m,r)&&n();m=r,p=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{i&&e.removeEventListener("scroll",n),a&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=h)||e.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const vf=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:a,placement:o,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:i}=e,a=await(null==r.isRTL?void 0:r.isRTL(i.floating)),o=wp(n),s=Sp(n),l="y"===Cp(n),c=["left","top"].includes(o)?-1:1,u=a&&l?-1:1,d=xp(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:h}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&"number"===typeof h&&(f="end"===s?-1*h:h),l?{x:f*u,y:p*c}:{x:p*c,y:f*u}}(t,e);return o===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:i+l.x,y:a+l.y,data:{...l,placement:o}}}}},yf=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:a=!0,crossAxis:o=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=xp(e,t),c={x:n,y:r},u=await Mp(t,l),d=Cp(wp(i)),p=kp(d);let f=c[p],h=c[d];if(a){const e="y"===p?"bottom":"right";f=bp(f+u["y"===p?"top":"left"],f,f-u[e])}if(o){const e="y"===d?"bottom":"right";h=bp(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[p]:f,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[p]:a,[d]:o}}}}}},bf=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:a,rects:o,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=xp(e,t);if(null!=(n=a.arrow)&&n.alignmentOffset)return{};const v=wp(i),y=Cp(s),b=wp(s)===s,x=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=p||(b||!m?[jp(s)]:function(e){const t=jp(e);return[Tp(e),t,Tp(t)]}(s)),S="none"!==h;!p&&S&&w.push(...function(e,t,n,r){const i=Sp(e);let a=function(e,t,n){const r=["left","right"],i=["right","left"],a=["top","bottom"],o=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?a:o;default:return[]}}(wp(e),"start"===n,r);return i&&(a=a.map((e=>e+"-"+i)),t&&(a=a.concat(a.map(Tp)))),a}(s,m,h,x));const k=[s,...w],E=await Mp(t,g),C=[];let P=(null==(r=a.flip)?void 0:r.overflows)||[];if(u&&C.push(E[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=Sp(e),i=Pp(e),a=Ep(i);let o="x"===i?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[a]>t.floating[a]&&(o=jp(o)),[o,jp(o)]}(i,o,x);C.push(E[e[0]],E[e[1]])}if(P=[...P,{placement:i,overflows:C}],!C.every((e=>e<=0))){var T,j;const e=((null==(T=a.flip)?void 0:T.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:P},reset:{placement:t}};let n=null==(j=P.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:j.placement;if(!n)switch(f){case"bestFit":{var D;const e=null==(D=P.filter((e=>{if(S){const t=Cp(e.placement);return t===y||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:D[0];e&&(n=e);break}case"initialPlacement":n=s}if(i!==n)return{reset:{placement:n}}}return{}}}},xf=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:l}=t,{element:c,padding:u=0}=xp(e,t)||{};if(null==c)return{};const d=Dp(u),p={x:n,y:r},f=Pp(i),h=Ep(f),m=await o.getDimensions(c),g="y"===f,v=g?"top":"left",y=g?"bottom":"right",b=g?"clientHeight":"clientWidth",x=a.reference[h]+a.reference[f]-p[f]-a.floating[h],w=p[f]-a.reference[f],S=await(null==o.getOffsetParent?void 0:o.getOffsetParent(c));let k=S?S[b]:0;k&&await(null==o.isElement?void 0:o.isElement(S))||(k=s.floating[b]||a.floating[h]);const E=x/2-w/2,C=k/2-m[h]/2-1,P=pp(d[v],C),T=pp(d[y],C),j=P,D=k-m[h]-T,A=k/2-m[h]/2+E,R=bp(j,A,D),M=!l.arrow&&null!=Sp(i)&&A!==R&&a.reference[h]/2-(A<j?P:T)-m[h]/2<0,L=M?A<j?A-j:A-D:0;return{[f]:p[f]+L,data:{[f]:R,centerOffset:A-R-L,...M&&{alignmentOffset:L}},reset:M}}}),wf=(e,t,n)=>{const r=new Map,i={platform:hf,...n},a={...i.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:a=[],platform:o}=n,s=a.filter(Boolean),l=await(null==o.isRTL?void 0:o.isRTL(t));let c=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=Rp(c,r,l),p=r,f={},h=0;for(let m=0;m<s.length;m++){const{name:n,fn:a}=s[m],{x:g,y:v,data:y,reset:b}=await a({x:u,y:d,initialPlacement:r,placement:p,strategy:i,middlewareData:f,rects:c,platform:o,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=v?v:d,f={...f,[n]:{...f[n],...y}},b&&h<=50&&(h++,"object"===typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await o.getElementRects({reference:e,floating:t,strategy:i}):b.rects),({x:u,y:d}=Rp(c,p,l))),m=-1)}return{x:u,y:d,placement:p,strategy:i,middlewareData:f}})(e,t,{...i,platform:a})};var Sf=n(139);const kf="react-tooltip-core-styles",Ef="react-tooltip-base-styles",Cf={core:!1,base:!1};function Pf(e){let{css:t,id:n=Ef,type:r="base",ref:i}=e;var a,o;if(!t||"undefined"==typeof document||Cf[r])return;if("core"===r&&"undefined"!=typeof process&&(null===(a=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})||void 0===a?void 0:a.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==r&&"undefined"!=typeof process&&(null===(o=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0})||void 0===o?void 0:o.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===r&&(n=kf),i||(i={});const{insertAt:s}=i;if(document.getElementById(n))return;const l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=n,c.type="text/css","top"===s&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(document.createTextNode(t)),Cf[r]=!0}const Tf=async e=>{let{elementReference:t=null,tooltipReference:n=null,tooltipArrowReference:r=null,place:i="top",offset:a=10,strategy:o="absolute",middlewares:s=[vf(Number(a)),bf({fallbackAxisSideDirection:"start"}),yf({padding:5})],border:l}=e;if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:i};if(null===n)return{tooltipStyles:{},tooltipArrowStyles:{},place:i};const c=s;return r?(c.push(xf({element:r,padding:5})),wf(t,n,{placement:i,strategy:o,middleware:c}).then((e=>{let{x:t,y:n,placement:r,middlewareData:i}=e;var a,o;const s={left:`${t}px`,top:`${n}px`,border:l},{x:c,y:u}=null!==(a=i.arrow)&&void 0!==a?a:{x:0,y:0},d=null!==(o={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]])&&void 0!==o?o:"bottom",p=l&&{borderBottom:l,borderRight:l};let f=0;if(l){const e=`${l}`.match(/(\d+)px/);f=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:s,tooltipArrowStyles:{left:null!=c?`${c}px`:"",top:null!=u?`${u}px`:"",right:"",bottom:"",...p,[d]:`-${4+f}px`},place:r}}))):wf(t,n,{placement:"bottom",strategy:o,middleware:c}).then((e=>{let{x:t,y:n,placement:r}=e;return{tooltipStyles:{left:`${t}px`,top:`${n}px`},tooltipArrowStyles:{},place:r}}))},jf=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),Df=(e,t,n)=>{let r=null;const i=function(){for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];const s=()=>{r=null,n||e.apply(this,a)};n&&!r&&(e.apply(this,a),r=setTimeout(s,t)),n||(r&&clearTimeout(r),r=setTimeout(s,t))};return i.cancel=()=>{r&&(clearTimeout(r),r=null)},i},Af=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,Rf=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,n)=>Rf(e,t[n])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!Af(e)||!Af(t))return e===t;const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>Rf(e[n],t[n])))},Mf=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const n=t.getPropertyValue(e);return"auto"===n||"scroll"===n}))},Lf=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(Mf(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},_f="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,zf=e=>{e.current&&(clearTimeout(e.current),e.current=null)},Of="DEFAULT_TOOLTIP_ID",Ff={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Nf=(0,e.createContext)({getTooltipData:()=>Ff});function If(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Of;return(0,e.useContext)(Nf).getTooltipData(t)}var $f={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Bf={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Vf=t=>{let{forwardRef:n,id:r,className:i,classNameArrow:a,variant:o="dark",anchorId:s,anchorSelect:l,place:c="top",offset:u=10,events:d=["hover"],openOnClick:p=!1,positionStrategy:f="absolute",middlewares:h,wrapper:m,delayShow:g=0,delayHide:v=0,float:y=!1,hidden:b=!1,noArrow:x=!1,clickable:w=!1,closeOnEsc:S=!1,closeOnScroll:k=!1,closeOnResize:E=!1,openEvents:C,closeEvents:P,globalCloseEvents:T,imperativeModeOnly:j,style:D,position:A,afterShow:R,afterHide:M,disableTooltip:L,content:_,contentWrapperRef:z,isOpen:O,defaultIsOpen:F=!1,setIsOpen:N,activeAnchor:I,setActiveAnchor:$,border:B,opacity:V,arrowColor:U,role:W="tooltip"}=t;var H;const Y=(0,e.useRef)(null),q=(0,e.useRef)(null),K=(0,e.useRef)(null),G=(0,e.useRef)(null),X=(0,e.useRef)(null),[Z,Q]=(0,e.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:c}),[J,ee]=(0,e.useState)(!1),[te,ne]=(0,e.useState)(!1),[re,ie]=(0,e.useState)(null),ae=(0,e.useRef)(!1),oe=(0,e.useRef)(null),{anchorRefs:se,setActiveAnchor:le}=If(r),ce=(0,e.useRef)(!1),[ue,de]=(0,e.useState)([]),pe=(0,e.useRef)(!1),fe=p||d.includes("click"),he=fe||(null==C?void 0:C.click)||(null==C?void 0:C.dblclick)||(null==C?void 0:C.mousedown),me=C?{...C}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!C&&fe&&Object.assign(me,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const ge=P?{...P}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!P&&fe&&Object.assign(ge,{mouseleave:!1,blur:!1,mouseout:!1});const ve=T?{...T}:{escape:S||!1,scroll:k||!1,resize:E||!1,clickOutsideAnchor:he||!1};j&&(Object.assign(me,{mouseover:!1,focus:!1,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(ge,{mouseout:!1,blur:!1,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(ve,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),_f((()=>(pe.current=!0,()=>{pe.current=!1})),[]);const ye=e=>{pe.current&&(e&&ne(!0),setTimeout((()=>{pe.current&&(null==N||N(e),void 0===O&&ee(e))}),10))};(0,e.useEffect)((()=>{if(void 0===O)return()=>null;O&&ne(!0);const e=setTimeout((()=>{ee(O)}),10);return()=>{clearTimeout(e)}}),[O]),(0,e.useEffect)((()=>{if(J!==ae.current)if(zf(X),ae.current=J,J)null==R||R();else{const e=(()=>{const e=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);if(!e)return 0;const[,t,n]=e;return Number(t)*("ms"===n?1:1e3)})();X.current=setTimeout((()=>{ne(!1),ie(null),null==M||M()}),e+25)}}),[J]);const be=e=>{Q((t=>Rf(t,e)?t:e))},xe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;zf(K),te?ye(!0):K.current=setTimeout((()=>{ye(!0)}),e)},we=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;zf(G),G.current=setTimeout((()=>{ce.current||ye(!1)}),e)},Se=e=>{var t;if(!e)return;const n=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==n?void 0:n.isConnected))return $(null),void le({current:null});g?xe():ye(!0),$(n),le({current:n}),zf(G)},ke=()=>{w?we(v||100):v?we():ye(!1),zf(K)},Ee=e=>{let{x:t,y:n}=e;var r;const i={getBoundingClientRect:()=>({x:t,y:n,width:0,height:0,top:n,left:t,right:t,bottom:n})};Tf({place:null!==(r=null==re?void 0:re.place)&&void 0!==r?r:c,offset:u,elementReference:i,tooltipReference:Y.current,tooltipArrowReference:q.current,strategy:f,middlewares:h,border:B}).then((e=>{be(e)}))},Ce=e=>{if(!e)return;const t=e,n={x:t.clientX,y:t.clientY};Ee(n),oe.current=n},Pe=e=>{var t;if(!J)return;const n=e.target;n.isConnected&&((null===(t=Y.current)||void 0===t?void 0:t.contains(n))||[document.querySelector(`[id='${s}']`),...ue].some((e=>null==e?void 0:e.contains(n)))||(ye(!1),zf(K)))},Te=Df(Se,50,!0),je=Df(ke,50,!0),De=e=>{je.cancel(),Te(e)},Ae=()=>{Te.cancel(),je()},Re=(0,e.useCallback)((()=>{var e,t;const n=null!==(e=null==re?void 0:re.position)&&void 0!==e?e:A;n?Ee(n):y?oe.current&&Ee(oe.current):(null==I?void 0:I.isConnected)&&Tf({place:null!==(t=null==re?void 0:re.place)&&void 0!==t?t:c,offset:u,elementReference:I,tooltipReference:Y.current,tooltipArrowReference:q.current,strategy:f,middlewares:h,border:B}).then((e=>{pe.current&&be(e)}))}),[J,I,_,D,c,null==re?void 0:re.place,u,f,A,null==re?void 0:re.position,y]);(0,e.useEffect)((()=>{var e,t;const n=new Set(se);ue.forEach((e=>{(null==L?void 0:L(e))||n.add({current:e})}));const r=document.querySelector(`[id='${s}']`);r&&!(null==L?void 0:L(r))&&n.add({current:r});const i=()=>{ye(!1)},a=Lf(I),o=Lf(Y.current);ve.scroll&&(window.addEventListener("scroll",i),null==a||a.addEventListener("scroll",i),null==o||o.addEventListener("scroll",i));let l=null;ve.resize?window.addEventListener("resize",i):I&&Y.current&&(l=gf(I,Y.current,Re,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const c=e=>{"Escape"===e.key&&ye(!1)};ve.escape&&window.addEventListener("keydown",c),ve.clickOutsideAnchor&&window.addEventListener("click",Pe);const u=[],d=e=>Boolean((null==e?void 0:e.target)&&(null==I?void 0:I.contains(e.target))),p=e=>{J&&d(e)||Se(e)},f=e=>{J&&d(e)&&ke()},h=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(me).forEach((e=>{let[t,n]=e;n&&(h.includes(t)?u.push({event:t,listener:De}):m.includes(t)&&u.push({event:t,listener:p}))})),Object.entries(ge).forEach((e=>{let[t,n]=e;n&&(h.includes(t)?u.push({event:t,listener:Ae}):m.includes(t)&&u.push({event:t,listener:f}))})),y&&u.push({event:"pointermove",listener:Ce});const g=()=>{ce.current=!0},v=()=>{ce.current=!1,ke()},b=w&&(ge.mouseout||ge.mouseleave);return b&&(null===(e=Y.current)||void 0===e||e.addEventListener("mouseover",g),null===(t=Y.current)||void 0===t||t.addEventListener("mouseout",v)),u.forEach((e=>{let{event:t,listener:r}=e;n.forEach((e=>{var n;null===(n=e.current)||void 0===n||n.addEventListener(t,r)}))})),()=>{var e,t;ve.scroll&&(window.removeEventListener("scroll",i),null==a||a.removeEventListener("scroll",i),null==o||o.removeEventListener("scroll",i)),ve.resize?window.removeEventListener("resize",i):null==l||l(),ve.clickOutsideAnchor&&window.removeEventListener("click",Pe),ve.escape&&window.removeEventListener("keydown",c),b&&(null===(e=Y.current)||void 0===e||e.removeEventListener("mouseover",g),null===(t=Y.current)||void 0===t||t.removeEventListener("mouseout",v)),u.forEach((e=>{let{event:t,listener:r}=e;n.forEach((e=>{var n;null===(n=e.current)||void 0===n||n.removeEventListener(t,r)}))}))}}),[I,Re,te,se,ue,C,P,T,fe,g,v]),(0,e.useEffect)((()=>{var e,t;let n=null!==(t=null!==(e=null==re?void 0:re.anchorSelect)&&void 0!==e?e:l)&&void 0!==t?t:"";!n&&r&&(n=`[data-tooltip-id='${r.replace(/'/g,"\\'")}']`);const i=new MutationObserver((e=>{const t=[],i=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===r?t.push(e.target):e.oldValue===r&&i.push(e.target)),"childList"===e.type){if(I){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(n)try{i.push(...t.filter((e=>e.matches(n)))),i.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,I))&&(ne(!1),ye(!1),$(null),zf(K),zf(G),!0)}))}if(n)try{const r=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...r.filter((e=>e.matches(n)))),t.push(...r.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}}})),(t.length||i.length)&&de((e=>[...e.filter((e=>!i.includes(e))),...t]))}));return i.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{i.disconnect()}}),[r,l,null==re?void 0:re.anchorSelect,I]),(0,e.useEffect)((()=>{Re()}),[Re]),(0,e.useEffect)((()=>{if(!(null==z?void 0:z.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>Re()))}));return e.observe(z.current),()=>{e.disconnect()}}),[_,null==z?void 0:z.current]),(0,e.useEffect)((()=>{var e;const t=document.querySelector(`[id='${s}']`),n=[...ue,t];I&&n.includes(I)||$(null!==(e=ue[0])&&void 0!==e?e:t)}),[s,ue,I]),(0,e.useEffect)((()=>(F&&ye(!0),()=>{zf(K),zf(G)})),[]),(0,e.useEffect)((()=>{var e;let t=null!==(e=null==re?void 0:re.anchorSelect)&&void 0!==e?e:l;if(!t&&r&&(t=`[data-tooltip-id='${r.replace(/'/g,"\\'")}']`),t)try{const e=Array.from(document.querySelectorAll(t));de(e)}catch(e){de([])}}),[r,l,null==re?void 0:re.anchorSelect]),(0,e.useEffect)((()=>{K.current&&(zf(K),xe(g))}),[g]);const Me=null!==(H=null==re?void 0:re.content)&&void 0!==H?H:_,Le=J&&Object.keys(Z.tooltipStyles).length>0;return(0,e.useImperativeHandle)(n,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(n){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}ie(null!=e?e:null),(null==e?void 0:e.delay)?xe(e.delay):ye(!0)},close:e=>{(null==e?void 0:e.delay)?we(e.delay):ye(!1)},activeAnchor:I,place:Z.place,isOpen:Boolean(te&&!b&&Me&&Le)}))),te&&!b&&Me?e.createElement(m,{id:r,role:W,className:Sf("react-tooltip",$f.tooltip,Bf.tooltip,Bf[o],i,`react-tooltip__place-${Z.place}`,$f[Le?"show":"closing"],Le?"react-tooltip__show":"react-tooltip__closing","fixed"===f&&$f.fixed,w&&$f.clickable),onTransitionEnd:e=>{zf(X),J||"opacity"!==e.propertyName||(ne(!1),ie(null),null==M||M())},style:{...D,...Z.tooltipStyles,opacity:void 0!==V&&Le?V:void 0},ref:Y},Me,e.createElement(m,{className:Sf("react-tooltip-arrow",$f.arrow,Bf.arrow,a,x&&$f.noArrow),style:{...Z.tooltipArrowStyles,background:U?`linear-gradient(to right bottom, transparent 50%, ${U} 50%)`:void 0},ref:q})):null},Uf=t=>{let{content:n}=t;return e.createElement("span",{dangerouslySetInnerHTML:{__html:n}})},Wf=e.forwardRef(((t,n)=>{let{id:r,anchorId:i,anchorSelect:a,content:o,html:s,render:l,className:c,classNameArrow:u,variant:d="dark",place:p="top",offset:f=10,wrapper:h="div",children:m=null,events:g=["hover"],openOnClick:v=!1,positionStrategy:y="absolute",middlewares:b,delayShow:x=0,delayHide:w=0,float:S=!1,hidden:k=!1,noArrow:E=!1,clickable:C=!1,closeOnEsc:P=!1,closeOnScroll:T=!1,closeOnResize:j=!1,openEvents:D,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:M=!1,style:L,position:_,isOpen:z,defaultIsOpen:O=!1,disableStyleInjection:F=!1,border:N,opacity:I,arrowColor:$,setIsOpen:B,afterShow:V,afterHide:U,disableTooltip:W,role:H="tooltip"}=t;const[Y,q]=(0,e.useState)(o),[K,G]=(0,e.useState)(s),[X,Z]=(0,e.useState)(p),[Q,J]=(0,e.useState)(d),[ee,te]=(0,e.useState)(f),[ne,re]=(0,e.useState)(x),[ie,ae]=(0,e.useState)(w),[oe,se]=(0,e.useState)(S),[le,ce]=(0,e.useState)(k),[ue,de]=(0,e.useState)(h),[pe,fe]=(0,e.useState)(g),[he,me]=(0,e.useState)(y),[ge,ve]=(0,e.useState)(null),[ye,be]=(0,e.useState)(null),xe=(0,e.useRef)(F),{anchorRefs:we,activeAnchor:Se}=If(r),ke=e=>null==e?void 0:e.getAttributeNames().reduce(((t,n)=>{var r;return n.startsWith("data-tooltip-")&&(t[n.replace(/^data-tooltip-/,"")]=null!==(r=null==e?void 0:e.getAttribute(n))&&void 0!==r?r:null),t}),{}),Ee=e=>{const t={place:e=>{var t;Z(null!==(t=e)&&void 0!==t?t:p)},content:e=>{q(null!=e?e:o)},html:e=>{G(null!=e?e:s)},variant:e=>{var t;J(null!==(t=e)&&void 0!==t?t:d)},offset:e=>{te(null===e?f:Number(e))},wrapper:e=>{var t;de(null!==(t=e)&&void 0!==t?t:h)},events:e=>{const t=null==e?void 0:e.split(" ");fe(null!=t?t:g)},"position-strategy":e=>{var t;me(null!==(t=e)&&void 0!==t?t:y)},"delay-show":e=>{re(null===e?x:Number(e))},"delay-hide":e=>{ae(null===e?w:Number(e))},float:e=>{se(null===e?S:"true"===e)},hidden:e=>{ce(null===e?k:"true"===e)},"class-name":e=>{ve(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((e=>{let[n,r]=e;var i;null===(i=t[n])||void 0===i||i.call(t,r)}))};(0,e.useEffect)((()=>{q(o)}),[o]),(0,e.useEffect)((()=>{G(s)}),[s]),(0,e.useEffect)((()=>{Z(p)}),[p]),(0,e.useEffect)((()=>{J(d)}),[d]),(0,e.useEffect)((()=>{te(f)}),[f]),(0,e.useEffect)((()=>{re(x)}),[x]),(0,e.useEffect)((()=>{ae(w)}),[w]),(0,e.useEffect)((()=>{se(S)}),[S]),(0,e.useEffect)((()=>{ce(k)}),[k]),(0,e.useEffect)((()=>{me(y)}),[y]),(0,e.useEffect)((()=>{xe.current!==F&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[F]),(0,e.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===F,disableBase:F}}))}),[]),(0,e.useEffect)((()=>{var e;const t=new Set(we);let n=a;if(!n&&r&&(n=`[data-tooltip-id='${r.replace(/'/g,"\\'")}']`),n)try{document.querySelectorAll(n).forEach((e=>{t.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`)}const o=document.querySelector(`[id='${i}']`);if(o&&t.add({current:o}),!t.size)return()=>null;const s=null!==(e=null!=ye?ye:o)&&void 0!==e?e:Se.current,l=new MutationObserver((e=>{e.forEach((e=>{var t;if(!s||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const n=ke(s);Ee(n)}))})),c={attributes:!0,childList:!1,subtree:!1};if(s){const e=ke(s);Ee(e),l.observe(s,c)}return()=>{l.disconnect()}}),[we,Se,ye,i,a]),(0,e.useEffect)((()=>{(null==L?void 0:L.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),N&&!jf("border",`${N}`)&&console.warn(`[react-tooltip] "${N}" is not a valid \`border\`.`),(null==L?void 0:L.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),I&&!jf("opacity",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`opacity\`.`)}),[]);let Ce=m;const Pe=(0,e.useRef)(null);if(l){const t=l({content:(null==ye?void 0:ye.getAttribute("data-tooltip-content"))||Y||null,activeAnchor:ye});Ce=t?e.createElement("div",{ref:Pe,className:"react-tooltip-content-wrapper"},t):null}else Y&&(Ce=Y);K&&(Ce=e.createElement(Uf,{content:K}));const Te={forwardRef:n,id:r,anchorId:i,anchorSelect:a,className:Sf(c,ge),classNameArrow:u,content:Ce,contentWrapperRef:Pe,place:X,variant:Q,offset:ee,wrapper:ue,events:pe,openOnClick:v,positionStrategy:he,middlewares:b,delayShow:ne,delayHide:ie,float:oe,hidden:le,noArrow:E,clickable:C,closeOnEsc:P,closeOnScroll:T,closeOnResize:j,openEvents:D,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:M,style:L,position:_,isOpen:z,defaultIsOpen:O,border:N,opacity:I,arrowColor:$,setIsOpen:B,afterShow:V,afterHide:U,disableTooltip:W,activeAnchor:ye,setActiveAnchor:e=>be(e),role:H};return e.createElement(Vf,{...Te})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||Pf({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||Pf({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}));const Hf=Zr(ep.div)`
  position: relative;
  width: var(--card-width);
  height: var(--card-height);
  min-height: 200px;
  border-radius: calc(var(--card-border-radius) / 2);
  overflow: hidden;
  cursor: pointer;
  background-color: var(--color-bg-primary);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.65);
  transition: all 0.3s ease;
  transform-style: preserve-3d;
  perspective: 1000px;

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-image: ${e=>{let{cardType:t}=e;return`linear-gradient(135deg, #3498db, ${(()=>{switch(t){case tp.PROJECT:return"var(--color-project)";case tp.SKILL:return"var(--color-skill)";case tp.EXPERIENCE:return"var(--color-experience)";default:return"#3498db"}})()}) 1`}};
    clip-path: polygon(
      0 0,
      100% 0,
      100% 15px,
      calc(100% - 15px) 30px,
      100% 45px,
      100% 100%,
      0 100%,
      0 calc(100% - 15px),
      15px calc(100% - 30px),
      0 calc(100% - 45px)
    );
    z-index: 5;
    pointer-events: none;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.06) 2px,
      rgba(32, 202, 255, 0.06) 3px
    );
    pointer-events: none;
    z-index: 7;
    opacity: 0.3;
  }

  /* Apply different highlight effect when the card is selected or in deck */
  ${e=>{let{isSelected:t,isInDeck:n}=e;return(t||n)&&"\n    box-shadow: 0 0 25px rgba(208, 52, 219, 0.6);\n    transform: translateY(-5px) scale(1.02);\n  "}}
`,Yf=Zr.div`
  width: 100%;
  height: 55%;
  background-image: ${e=>{let{imageUrl:t}=e;return t?`url(${t})`:"linear-gradient(135deg, #1A1E2D, #0A0E19)"}};
  background-size: cover;
  background-position: center;
  position: relative;

  /* Cyberpunk overlay gradient */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(148, 49, 38, 0.5),
      rgba(58, 136, 162, 0.5)
    );
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 30px;
    background: linear-gradient(to top, var(--color-bg-primary), transparent);
    z-index: 3;
  }
`,qf=Zr.div`
  padding: var(--spacing-sm);
  height: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, #121824 100%);
`,Kf=Zr.h3`
  font-size: 0.9rem;
  font-weight: 700;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-transform: uppercase;
  letter-spacing: 0.05em;

  ${ni} {
    font-size: 0.85rem;
  }

  ${ti} {
    font-size: 0.8rem;
  }
`,Gf=Zr.p`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${ti} {
    font-size: 0.65rem;
    -webkit-line-clamp: 1;
  }
`,Xf=Zr.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 8px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);
  background-color: ${e=>{let{cardType:t}=e;switch(t){case tp.PROJECT:return"var(--color-project)";case tp.SKILL:return"var(--color-skill)";case tp.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-project)"}}};
  color: white;
  z-index: 10;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

  ${ti} {
    font-size: 0.6rem;
    padding: 2px 6px;
  }
`,Zf=Zr.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: auto;
  padding: 5px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(46, 204, 113, 0.3);
  border-bottom: 1px solid rgba(86, 204, 242, 0.3);

  ${ni} {
    gap: var(--spacing-sm);
  }
`,Qf=Zr.div`
	display: flex;
	align-items: center;
	gap: 3px;
	font-size: 0.7rem;
	color: var(--color-text-secondary)";
	font-weight: 600;
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);

	${ti} {
		font-size: 0.65rem;
		gap: 2px;
	}
`,Jf=Zr.span`
  font-size: 0.75rem;
`,eh=Zr.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(86, 204, 242, 0.5);
  z-index: 6;
  opacity: 0.3;
`,th=Zr.div`
  position: absolute;
  top: 30%;
  left: 0;
  height: 2px;
  width: 30%;
  background: rgba(86, 204, 242, 0.6);
  z-index: 6;
  opacity: 0.4;
`,nh=e=>{let{card:t,onClick:n,isSelected:r,isInDeck:i,isShiny:a}=e;return(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(Hf,{cardType:t.type,isSelected:r,isInDeck:i,onClick:n,whileHover:{y:-5,scale:1.05,transition:{duration:.2}},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:a?"foil":"",children:[(0,ac.jsx)(Xf,{cardType:t.type,children:t.type}),(0,ac.jsx)(Yf,{imageUrl:t.imageUrl}),(0,ac.jsx)(eh,{}),(0,ac.jsx)(th,{}),(0,ac.jsxs)(qf,{children:[(0,ac.jsxs)(Kf,{children:[t.isFeatured&&"\u2726 ",t.title]}),(0,ac.jsx)(Gf,{children:t.description}),(0,ac.jsx)(Zf,{children:Object.entries(t.stats).map((e=>{let[n,r]=e;return(0,ac.jsxs)(Qf,{"data-tooltip-id":`stats-${t.id}`,"data-tooltip-content":lp[n].description,type:n,children:[(0,ac.jsx)(Jf,{children:lp[n].icon})," ",r]},n)}))})]})," "]}),(0,ac.jsx)(Wf,{id:`stats-${t.id}`,place:"top",style:{zIndex:9999}})]})},rh=Zr.footer`
  margin-top: 5rem;
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.4);
  position: relative;
  z-index: 10;
  width: 100%;

  /* Cyberpunk top border */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
    opacity: 0.7;
  }

  /* Diagonal cut for cyberpunk effect */
  clip-path: polygon(
    0 10px,
    5px 0,
    calc(100% - 5px) 0,
    100% 10px,
    100% 100%,
    0 100%
  );
`,ih=Zr.div`
  color: var(--color-text-secondary);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 0.8rem;

  ${ri} {
    font-size: 0.4rem;
  }

  .highlight {
    color: var(--color-accent);
    position: relative;
  }

  /* Glitch effect for the year */
  .glitch {
    position: relative;
    color: var(--color-accent);

    &::before,
    &::after {
      content: attr(data-glitch);
      position: absolute;
      top: 0;
      width: 100%;
      height: 100%;
    }

    &::before {
      left: 2px;
      text-shadow: -1px 0 red;
      animation: glitch-anim 2s infinite linear alternate-reverse;
    }

    &::after {
      left: -2px;
      text-shadow: 1px 0 blue;
      animation: glitch-anim 3s infinite linear alternate-reverse;
    }

    @keyframes glitch-anim {
      0%,
      80% {
        clip: rect(0, 0, 0, 0);
      }
      85% {
        clip: rect(0, 100px, 2px, 0);
      }
      90% {
        clip: rect(0, 100px, 6px, 0);
      }
      95% {
        clip: rect(0, 100px, 2px, 0);
      }
    }
  }

  a {
    color: var(--color-accent);
    text-decoration: none;
    transition: opacity 0.2s ease;

    &:hover {
      opacity: 0.8;
    }
  }
`,ah=()=>{const e=(new Date).getFullYear();return(0,ac.jsx)(rh,{children:(0,ac.jsxs)(ih,{children:[`\xa9 ${e} \u2022 `,(0,ac.jsx)("span",{className:"highlight",children:"Some rights"})," ",(0,ac.jsx)("span",{className:"glitch","data-glitch":"reserved",children:"reserved"}),(0,ac.jsx)("br",{}),"Code is"," ",(0,ac.jsx)("span",{className:"glitch","data-glitch":"open source",children:"open source"})," ","\u2014 reuse with credit. ",(0,ac.jsx)("br",{}),(0,ac.jsx)("a",{href:"https://github.com/atinyshrimp/Website",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})})},oh=Zr.div`
  text-align: center;
  padding: var(--spacing-xxl) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  /* Cyberpunk scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.02) 2px,
      rgba(32, 202, 255, 0.02) 3px
    );
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }

  ${ni} {
    padding: var(--spacing-xl) 0;
  }

  ${ti} {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`,sh=Zr(ep.h1)`
  font-size: 4rem;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 2;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(86, 204, 242, 0.5);

  .highlight {
    color: var(--color-accent);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
      box-shadow: 0 0 10px rgba(86, 204, 242, 0.8);
    }
  }

  ${ri} {
    font-size: 3rem;
  }

  ${ni} {
    font-size: 2.5rem;
  }

  ${ti} {
    font-size: 2rem;
  }
`,lh=Zr(ep.p)`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.8;
  position: relative;
  z-index: 2;

  ${ni} {
    font-size: 1.1rem;
    max-width: 90%;
    margin: 0 auto var(--spacing-lg);
  }

  ${ti} {
    font-size: 1rem;
    line-height: 1.6;
  }
`,ch=Zr.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  position: relative;
  z-index: 2;

  ${ni} {
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
  }

  ${ti} {
    flex-direction: column;
    gap: var(--spacing-sm);
    width: 80%;
    max-width: 300px;
  }
`,uh=Zr(tt)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: rgba(86, 204, 242, 0.2);
  color: var(--color-text-primary);
  border: 1px solid var(--color-accent);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(86, 204, 242, 0.4);
    background-color: rgba(86, 204, 242, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(86, 204, 242, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${ni} {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }

  ${ti} {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.85rem;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,dh=Zr(tt)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-text-secondary);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }

  ${ni} {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }

  ${ti} {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.85rem;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,ph=Zr.div`
  padding: var(--spacing-xl) 0;
  position: relative;

  ${ni} {
    padding: var(--spacing-lg) 0;
  }

  ${ti} {
    padding: var(--spacing-md) 0;
  }
`,fh=Zr.h2`
  text-align: center;
  margin-bottom: var(--spacing-lg);
  font-size: 2rem;
  position: relative;
  display: inline-block;
  left: 50%;
  transform: translateX(-50%);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  padding: 0 var(--spacing-md);

  /* Cyberpunk decoration */
  &::before,
  &::after {
    content: "//";
    color: var(--color-accent);
    margin: 0 var(--spacing-sm);
    opacity: 0.6;
  }

  .highlight {
    color: var(--color-accent);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
    }
  }

  ${ni} {
    font-size: 1.75rem;
    margin-bottom: var(--spacing-md);
  }

  ${ti} {
    font-size: 1.5rem;
    width: 90%;

    &::before,
    &::after {
      margin: 0 var(--spacing-xs);
    }
  }
`,hh=Zr.div`
  position: relative;
  border-radius: var(--radius-md);
  padding: var(--spacing-xl) var(--spacing-lg);

  ${ni} {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  ${ti} {
    padding: var(--spacing-md) var(--spacing-sm);
  }
`,mh=Zr.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  ${ri} {
    max-width: 1100px;
    gap: var(--spacing-lg);
  }

  ${ni} {
    max-width: 100%;
    gap: var(--spacing-md);
  }

  ${ti} {
    gap: var(--spacing-sm);
  }
`,gh=()=>(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(oh,{children:[(0,ac.jsxs)(sh,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.6},children:["Welcome to my ",(0,ac.jsx)("span",{className:"highlight",children:"Portfolio"})]}),(0,ac.jsx)(lh,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.2},children:"Explore my skills, projects, and experiences in an interactive card-based format inspired by collectible card games."}),(0,ac.jsxs)(ch,{children:[(0,ac.jsx)(uh,{to:"/collection",children:"View Card Collection"}),(0,ac.jsx)(dh,{to:"/about",children:"About this Project"})]})]}),(0,ac.jsxs)(ph,{children:[(0,ac.jsxs)(fh,{children:["Featured ",(0,ac.jsx)("span",{className:"highlight",children:"Cards"})]}),(0,ac.jsx)(hh,{children:(0,ac.jsx)(mh,{children:sp.filter((e=>e.isFeatured)).sort(((e,t)=>e.title.localeCompare(t.title))).sort((()=>Math.random()-.5)).slice(0,3).map((e=>(0,ac.jsx)(nh,{card:e},e.id)))})})]}),(0,ac.jsx)(ah,{})]}),vh=Zr.div`
  padding: var(--spacing-md) 0;
  ${ai} {
    padding: 0;
  }
`,yh=Zr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  ${ai} {
    padding: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
    flex-direction: column; /* Stack header items */
    align-items: stretch; /* Make items full width */
    gap: var(--spacing-sm);
  }

  ${ii} {
    padding: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-xs);
  }
`,bh=Zr.h2`
  font-size: 1.2rem;
  margin: 0;

  ${ai} {
    font-size: 1.1rem;
    text-align: center; /* Center title when stacked */
  }
  ${ii} {
    font-size: 0.9rem; /* Smaller */
    text-align: center;
  }
`,xh=Zr.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center; /* Align items vertically */

  ${ai} {
    flex-direction: column; /* Stack search and filters */
    gap: var(--spacing-sm);
  }
  ${ii} {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`,wh=Zr.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap */
  justify-content: center; /* Center buttons when wrapped */
  gap: var(--spacing-xs);
`,Sh=Zr.button`
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;

  ${ai} {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
  ${ii} {
    font-size: 0.65rem; /* Smaller */
    padding: 3px 6px; /* Smaller padding */
    flex-grow: 1; /* Allow buttons to take available space if wrapping */
  }

  background-color: ${e=>{let{active:t,cardType:n}=e;if(!t)return"rgba(0, 0, 0, 0.2)";if(!n)return"rgba(86, 204, 242, 0.2)";switch(n){case tp.PROJECT:return"rgba(46, 204, 113, 0.2)";case tp.SKILL:return"rgba(231, 76, 60, 0.2)";case tp.EXPERIENCE:return"rgba(243, 156, 18, 0.2)";default:return"rgba(86, 204, 242, 0.2)"}}};
  border: 1px solid
    ${e=>{let{active:t,cardType:n}=e;if(!t)return"var(--color-border)";if(!n)return"var(--color-accent)";switch(n){case tp.PROJECT:return"var(--color-project)";case tp.SKILL:return"var(--color-skill)";case tp.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-accent)"}}};
  color: ${e=>{let{active:t,cardType:n}=e;if(!t)return"var(--color-text-secondary)";if(!n)return"var(--color-accent)";switch(n){case tp.PROJECT:return"var(--color-project)";case tp.SKILL:return"var(--color-skill)";case tp.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-accent)"}}};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{let{cardType:t}=e;if(!t)return"rgba(86, 204, 242, 0.3)";switch(t){case tp.PROJECT:return"rgba(46, 204, 113, 0.3)";case tp.SKILL:return"rgba(231, 76, 60, 0.3)";case tp.EXPERIENCE:return"rgba(243, 156, 18, 0.3)";default:return"rgba(86, 204, 242, 0.3)"}}};
  }
`,kh=Zr.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--card-width, 250px), 1fr)
  );
  gap: var(--spacing-md);

  ${ai} {
    /* Card width is handled by GlobalStyle --card-width for this breakpoint */
    gap: var(--spacing-sm);
  }

  ${ii} {
    /* Card width is handled by GlobalStyle --card-width for this breakpoint */
    gap: var(--spacing-xs);
    /* Explicitly set minmax with a smaller min if needed, though --card-width should handle it */
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--card-width, 160px), 1fr)
    );
  }
`,Eh=Zr.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  width: 200px;
  font-size: 0.8rem;

  ${ai} {
    width: 100%; /* Full width when stacked */
    font-size: 0.75rem;
  }
  ${ii} {
    width: 100%;
    font-size: 0.65rem; /* Smaller */
    padding: 4px 8px; /* Smaller padding */
  }

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }

  &::placeholder {
    color: var(--color-text-secondary);
  }
`,Ch=Zr.div`
  text-align: center;
  color: var(--color-text-secondary);
  padding: var(--spacing-xl);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  font-style: italic;

  ${ai} {
    padding: var(--spacing-lg);
    font-size: 0.9rem;
  }
  ${ii} {
    padding: var(--spacing-md);
    font-size: 0.8rem;
  }
`,Ph=t=>{let{cards:n,onSelectCard:r,cardsInDeck:i=[],filterType:a,onFilterChange:o}=t;const[s,l]=(0,e.useState)(a||null),[c,u]=(0,e.useState)("");(0,e.useEffect)((()=>{l(a||null)}),[a]);const d=e=>{l(e),o&&o(e)},p=n.filter((e=>{if(s&&e.type!==s)return!1;if(c){const t=c.toLowerCase();return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.tags.some((e=>e.toLowerCase().includes(t)))||e.type===tp.PROJECT&&e.projectDetails.technologies.some((e=>e.toLowerCase().includes(t)))}return!0}));return(0,ac.jsxs)(vh,{children:[(0,ac.jsxs)(yh,{children:[(0,ac.jsx)(bh,{children:"Card Collection"}),(0,ac.jsxs)(xh,{children:[(0,ac.jsx)(Eh,{type:"text",placeholder:"Search cards...",value:c,onChange:e=>u(e.target.value)}),(0,ac.jsxs)(wh,{children:[" ",(0,ac.jsx)(Sh,{active:null===s,onClick:()=>d(null),children:"All"}),(0,ac.jsx)(Sh,{active:s===tp.PROJECT,cardType:tp.PROJECT,onClick:()=>d(tp.PROJECT),children:"Projects"}),(0,ac.jsx)(Sh,{active:s===tp.SKILL,cardType:tp.SKILL,onClick:()=>d(tp.SKILL),children:"Skills"}),(0,ac.jsx)(Sh,{active:s===tp.EXPERIENCE,cardType:tp.EXPERIENCE,onClick:()=>d(tp.EXPERIENCE),children:"Experience"})]})]})]}),p.length>0?(0,ac.jsxs)(kh,{children:[" ",p.map((e=>{return(0,ac.jsx)(nh,{card:e,onClick:()=>null===r||void 0===r?void 0:r(e),isShiny:e.isFeatured,isInDeck:(t=e.id,i.includes(t))},e.id);var t}))]}):(0,ac.jsx)(Ch,{children:"No cards found. Try changing the filter or search term."})]})},Th=new Date("2003-01-27T10:27:00Z").getTime(),jh=e=>{try{if(null===e||void 0===e)throw new Error("Invalid date input");if("Present"!==e&&!(e instanceof Date))throw new Error("Date must be a 'Present' or a Date object");if("Present"===e||e>new Date)return"Present";const t={year:"numeric",month:"long"};return new Date(e).toLocaleDateString("en-US",t)}catch(t){return console.error("Error in getStringFromDate:",t),null}},Dh=()=>{const e=new Date,t=new Date(new Date(Th).setFullYear((new Date).getFullYear()));t>e&&t.setFullYear(t.getFullYear()-1);const n=e.getTime()-t.getTime(),r=Math.floor(n/864e5);return console.log("Days since last birthday:",r),Math.floor(r*Rh()/Mh())},Ah=()=>{const e=(new Date).getTime()-Th,t=Math.floor(e/31536e6);return Math.floor(t)},Rh=()=>{let e=new Date(Th).setFullYear((new Date).getFullYear());e<(new Date).getTime()&&(e=new Date(Th).setFullYear((new Date).getFullYear()+1));const t=e;return Math.floor((t-Th)/864e5)},Mh=()=>(e=>e%4===0&&(e%100!==0||e%400===0))((new Date).getFullYear())?366:365,Lh=e=>{const t=new Date,n=Math.floor((t.getTime()-e.getTime())/1e3);let r=Math.floor(n/31536e3);return r>1?`${r} years ago`:(r=Math.floor(n/2592e3),r>1?`${r} months ago`:(r=Math.floor(n/86400),r>1?`${r} days ago`:(r=Math.floor(n/3600),r>1?`${r} hours ago`:(r=Math.floor(n/60),r>1?`${r} minutes ago`:`${n} seconds ago`))))},_h=Zr.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  color: var(--color-text-primary);

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.06) 2px,
      rgba(32, 202, 255, 0.06) 3px
    );
    pointer-events: none;
    z-index: 7;
    opacity: 0.3;
  }
`,zh=Zr.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
`,Oh=Zr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${e=>{let{imageUrl:t}=e;return t?`url(${t})`:"linear-gradient(135deg, #1A1E2D, #0A0E19)"}};
  background-size: cover;
  background-position: center;

  /* Cyberpunk overlay gradient */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(231, 76, 60, 0.2),
      rgba(86, 204, 242, 0.2)
    );
    z-index: 2;
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 80px;
    background: linear-gradient(to top, #0d1117, transparent);
    z-index: 3;
  }
`,Fh=Zr.div`
  padding: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,Nh=Zr.h2`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
  padding-bottom: var(--spacing-xs);
  position: relative;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  display: inline-block;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(to right, rgb(84, 29, 91), #56ccf2);
  }
`,Ih=Zr.div`
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-sm);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);
  background-color: ${e=>{let{cardType:t}=e;switch(t){case tp.PROJECT:return"var(--color-project)";case tp.SKILL:return"var(--color-skill)";case tp.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-project)"}}};
  color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`,$h=Zr.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`,Bh=Zr.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
`,Vh=Zr.span`
  font-size: 0.8rem;
  padding: 3px 8px;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--color-text-secondary);
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);

  border: 2px solid rgba(84, 29, 91, 0.5);
`,Uh=Zr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-md);
  margin-bottom: var(--spacing-md);
  padding: var(--spacing-md);
  background: rgba(0, 0, 0, 0.2);
  position: relative;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 15px),
    calc(100% - 15px) 100%,
    0 100%
  );

  /* Horizontal line */
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 10px;
    right: 10px;
    height: 1px;
    background: linear-gradient(
      to right,
      rgba(231, 76, 60, 0.3),
      rgba(86, 204, 242, 0.3)
    );
  }

  /* Vertical line */
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 50%;
    width: 1px;
    background: linear-gradient(
      to bottom,
      rgba(231, 76, 60, 0.3),
      rgba(86, 204, 242, 0.3)
    );
  }
`,Wh=Zr.div`
  display: flex;
  flex-direction: column;
  padding: 8px 5px;
  position: relative;
  z-index: 1;
  ${e=>{let{highlight:t}=e;return t&&"\n        color: var(--color-accent);\n        text-shadow: 0 0 5px rgba(86, 204, 242, 0.5);\n    "}}
`,Hh=Zr.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
`,Yh=Zr.span`
  font-size: 1.1rem;
  font-weight: 600;
`,qh=Zr.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: auto;
`,Kh=Zr.button`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: rgba(13, 17, 23, 0.8);
  color: ${e=>{let{isRemove:t,isExternal:n}=e;return t?"#e74c3c":n?"#56ccf2":"#2ecc71"}};
  border: 1px solid
    ${e=>{let{isRemove:t,isExternal:n}=e;return t?"#e74c3c":n?"#56ccf2":"#2ecc71"}};
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  /* Glowing effect on hover */
  &:hover {
    background-color: rgba(20, 26, 35, 0.9);
    box-shadow: 0 0 10px
      ${e=>{let{isRemove:t,isExternal:n}=e;return t?"rgba(231, 76, 60, 0.5)":n?"rgba(86, 204, 242, 0.5)":"rgba(46, 204, 113, 0.5)"}};
  }

  /* Scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      ${e=>{let{isRemove:t,isExternal:n}=e;return t?"rgba(231, 76, 60, 0.8)":n?"rgba(86, 204, 242, 0.8)":"rgba(46, 204, 113, 0.8)"}},
      transparent
    );
    box-shadow: 0 0 8px
      ${e=>{let{isRemove:t,isExternal:n}=e;return t?"rgba(231, 76, 60, 0.5)":n?"rgba(86, 204, 242, 0.5)":"rgba(46, 204, 113, 0.5)"}};
  }
`,Gh=Zr.div`
  margin-bottom: var(--spacing-md);
`,Xh=Zr.h3`
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &::before {
    content: ">";
    margin-right: var(--spacing-xs);
    color: var(--color-accent);
    font-weight: bold;
  }
`,Zh=Zr.ul`
  list-style: none;
  padding-left: var(--spacing-md);
`,Qh=Zr.li`
  margin-bottom: var(--spacing-xs);
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  position: relative;

  &::before {
    content: "•";
    position: absolute;
    left: -15px;
    color: var(--color-accent);
  }
`,Jh=Zr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,em=Zr.div`
  display: flex;
  height: 15px;
  background-color: rgba(0, 0, 0, 0.3);
  margin-top: var(--spacing-xs);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to right,
      rgba(255, 255, 255, 0.05) 0px,
      rgba(255, 255, 255, 0.05) 4px,
      rgba(0, 0, 0, 0.3) 4px,
      rgba(0, 0, 0, 0.3) 8px
    );
    pointer-events: none;
  }
`,tm=Zr.div`
  width: ${e=>20*e.level}%;
  background: linear-gradient(to right, var(--color-accent), #56ccf2);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: rgba(255, 255, 255, 0.5);
    filter: blur(5px);
  }
`,nm=Zr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`,rm=Zr.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: rgba(0, 0, 0, 0.3);
  border-left: 2px solid
    var(
      ${e=>{let{type:t}=e;return t===tp.PROJECT?"--color-project":"--color-experience"}}
    );
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  /* Cyberpunk hover effect */
  &:hover {
    background: ${e=>{let{type:t}=e;return t===tp.PROJECT?"rgba(46, 204, 113, 0.15)":"rgba(46, 164, 204, 0.15)"}};
    transform: translateX(4px);

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        ${e=>{let{type:t}=e;return t===tp.PROJECT?"rgba(46, 204, 113, 0.1)":"rgba(46, 164, 204, 0.1)"}},
        transparent
      );
      animation: scan-line 1s ease-in-out;
    }
  }

  @keyframes scan-line {
    0% {
      transform: translateX(-100%);
    }
    100% {
      transform: translateX(100%);
    }
  }
`,im=Zr.div`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background-image: ${e=>{let{imageUrl:t}=e;return t?`url(${t})`:"linear-gradient(to bottom, #2C3E50, #1A2530)"}};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border: 1px solid
    var(
      ${e=>{let{type:t}=e;return t===tp.PROJECT?"--color-project":"--color-experience"}}
    );
`,am=Zr.div`
  flex: 1;
`,om=Zr.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 2px;
`,sm=Zr.div`
  font-size: 0.7rem;

  .chip {
    background: ${e=>{let{type:t}=e;return t===tp.PROJECT?"rgba(46, 204, 113, 0.2)":"rgba(46, 164, 204, 0.2)"}};
    color: var(
      ${e=>{let{type:t}=e;return t===tp.PROJECT?"--color-project":"--color-experience"}}
    );
    padding: 1px 6px;
    border-radius: 2px;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`,lm=Zr.div`
  color: var(
    ${e=>{let{type:t}=e;return t===tp.PROJECT?"--color-project":"--color-experience"}}
  );
  font-size: 1rem;
  opacity: 0.7;
`,cm=Zr.div`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-style: italic;
  padding: var(--spacing-sm);
`,um=e=>cp().filter((t=>{var n,r;return t.type===tp.SKILL&&(null===(n=t.skillDetails)||void 0===n||null===(r=n.relatedProjects)||void 0===r?void 0:r.includes(e))})),dm=Zr.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
`,pm=Zr.div`
  background: rgba(231, 76, 60, 0.15);
  color: var(--color-skill);
  border: 1px solid rgba(231, 76, 60, 0.3);
  padding: 4px 10px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(231, 76, 60, 0.25);
    transform: translateY(-2px);
    box-shadow: 0 2px 8px rgba(231, 76, 60, 0.3);
  }
`,fm=e=>{let{card:t,onAddToDeck:n,onRemoveFromDeck:r,isInDeck:i,onRelationClick:a}=e;return(0,ac.jsxs)(_h,{cardType:t.type,children:[(0,ac.jsx)(zh,{children:(0,ac.jsx)(Oh,{imageUrl:t.imageUrl})}),(0,ac.jsxs)(Fh,{children:[(0,ac.jsx)("div",{children:(0,ac.jsx)(Ih,{cardType:t.type,children:t.type})}),(0,ac.jsx)(Nh,{children:t.title}),(0,ac.jsx)($h,{children:t.description}),(0,ac.jsx)(Bh,{children:t.tags.sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,ac.jsx)(Vh,{children:e},t)))}),(0,ac.jsxs)(Uh,{children:[Object.entries(t.stats).map((e=>{let[t,n]=e;const r=t;return(0,ac.jsxs)(Wh,{"data-tooltip-id":"stats","data-tooltip-content":lp[r].description,children:[(0,ac.jsx)(Hh,{children:lp[r].label}),(0,ac.jsx)(Yh,{children:`${lp[r].icon} ${n}`})]},t)})),(0,ac.jsxs)(Wh,{highlight:!0,"data-tooltip-id":"stats","data-tooltip-content":"Average of all stats",children:[(0,ac.jsx)(Hh,{children:"Overall"}),(0,ac.jsxs)(Yh,{children:["\u2605"," ",Math.floor(Object.values(t.stats).reduce(((e,t)=>e+t),0)/3)]})]})]}),t.type===tp.PROJECT&&t.projectDetails&&(0,ac.jsxs)(ac.Fragment,{children:[t.projectDetails.role&&(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Role"}),(0,ac.jsx)(Zh,{children:(0,ac.jsx)(Qh,{children:t.projectDetails.role})})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Duration"}),(0,ac.jsx)(Zh,{children:(0,ac.jsx)(Qh,{children:t.projectDetails.duration})})]}),t.projectDetails.technologies.length>0&&(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Technologies"}),(0,ac.jsx)(Zh,{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},children:t.projectDetails.technologies.sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,ac.jsx)(Qh,{children:e},t)))})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Outcomes"}),(0,ac.jsx)(Zh,{children:t.projectDetails.outcomes.map(((e,t)=>"string"===typeof e?(0,ac.jsx)(Qh,{children:e},t):(0,ac.jsxs)(Qh,{children:[e.label,e.subpoints&&e.subpoints.length>0&&(0,ac.jsx)(Zh,{style:{paddingLeft:"var(--spacing-lg)",marginTop:"var(--spacing-xs)"},children:e.subpoints.map(((e,t)=>(0,ac.jsx)(Qh,{children:e},t)))})]},t)))})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Skills Applied"}),um(t.id).length>0?(0,ac.jsx)(dm,{children:um(t.id).map((e=>(0,ac.jsxs)(pm,{onClick:()=>a&&a(e),children:[lp.mastery.icon," ",e.title]},e.id)))}):(0,ac.jsx)(cm,{children:"No specific skills listed for this project"})]})]}),t.type===tp.SKILL&&t.skillDetails&&(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Proficiency"}),(0,ac.jsx)(em,{children:(0,ac.jsx)(tm,{level:t.skillDetails.proficiency})})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Years of Experience"}),(0,ac.jsx)(Zh,{children:(0,ac.jsxs)(Qh,{children:[t.skillDetails.yearsOfExperience," year",t.skillDetails.yearsOfExperience>1?"s":""]})})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Related Exp & Projects"}),t.skillDetails.relatedProjects.length>0?(0,ac.jsx)(nm,{children:t.skillDetails.relatedProjects.map((e=>{const t=up(e);return t?(0,ac.jsxs)(rm,{type:t.type,onClick:()=>a&&a(t),children:[(0,ac.jsx)(im,{type:t.type,imageUrl:t.imageUrl}),(0,ac.jsxs)(am,{children:[(0,ac.jsx)(om,{children:t.title}),(0,ac.jsx)(sm,{type:t.type,children:(0,ac.jsx)("span",{className:"chip",children:t.type})})]}),(0,ac.jsx)(lm,{type:t.type,children:"\u2192"})]},e):null}))}):(0,ac.jsx)(cm,{children:"No related projects found"})]})]}),t.type===tp.EXPERIENCE&&t.experienceDetails&&(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Company"}),(0,ac.jsx)(Zh,{children:(0,ac.jsx)(Qh,{children:t.experienceDetails.company})})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Position"}),(0,ac.jsx)(Zh,{children:(0,ac.jsx)(Qh,{children:t.experienceDetails.position})})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Duration"}),(0,ac.jsx)(Zh,{children:(0,ac.jsx)(Qh,{children:`${jh(t.experienceDetails.startDate)} - ${jh(t.experienceDetails.endDate)}`})})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Location"}),(0,ac.jsx)(Zh,{children:(0,ac.jsx)(Qh,{children:t.experienceDetails.location})})]}),um(t.id).length>0&&(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Skills Applied"}),(0,ac.jsx)(dm,{children:um(t.id).map((e=>(0,ac.jsxs)(pm,{onClick:()=>a&&a(e),children:[lp.mastery.icon," ",e.title]},e.id)))})]}),(0,ac.jsxs)(Gh,{children:[(0,ac.jsx)(Xh,{children:"Key Achievements"}),(0,ac.jsx)(Zh,{children:t.experienceDetails.achievements.map(((e,t)=>(0,ac.jsx)(Qh,{children:e},t)))})]})]}),t.links&&t.links.length>0&&(0,ac.jsx)(Jh,{children:t.links.map(((e,t)=>(0,ac.jsx)(Kh,{as:"a",href:e.url,target:"_blank",rel:"noopener noreferrer",isExternal:!0,children:e.label},t)))}),n&&r&&(0,ac.jsx)(qh,{children:(0,ac.jsx)(Kh,{onClick:i?r:n,isRemove:i,children:i?"Remove from Deck":"Add to Deck"})})]}),(0,ac.jsx)(Wf,{id:"stats",place:"top",style:{zIndex:9999}})]})};const hm=function(t,n){const r=(0,e.useCallback)((()=>{if("undefined"===typeof window)return n;try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):n}catch(e){return console.warn(`Error reading localStorage key "${t}":`,e),n}}),[t,n]),[i,a]=(0,e.useState)(r);return(0,e.useEffect)((()=>{const e=()=>{a(r())};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}}),[r]),[i,e=>{try{const n=e instanceof Function?e(i):e;a(n),"undefined"!==typeof window&&window.localStorage.setItem(t,JSON.stringify(n))}catch(n){console.warn(`Error setting localStorage key "${t}":`,n)}}]};class mm extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function gm(t){let{children:n,isPresent:r,anchorX:i}=t;const a=(0,e.useId)(),o=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(qu);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=s.current;if(r||!o.current||!e||!t)return;const d="left"===i?`left: ${c}`:`right: ${u}`;o.current.dataset.motionPopId=a;const p=document.createElement("style");return l&&(p.nonce=l),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`\n          [data-motion-pop-id="${a}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.removeChild(p)}}),[r]),(0,ac.jsx)(mm,{isPresent:r,childRef:o,sizeRef:s,children:e.cloneElement(n,{ref:o})})}const vm=t=>{let{children:n,initial:r,isPresent:i,onExitComplete:a,custom:o,presenceAffectsLayout:s,mode:l,anchorX:c}=t;const u=Md(ym),d=(0,e.useId)();let p=!0,f=(0,e.useMemo)((()=>(p=!1,{id:d,initial:r,isPresent:i,custom:o,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;a&&a()},register:e=>(u.set(e,!1),()=>u.delete(e))})),[i,u,a]);return s&&p&&(f={...f}),(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[i]),e.useEffect((()=>{!i&&!u.size&&a&&a()}),[i]),"popLayout"===l&&(n=(0,ac.jsx)(gm,{isPresent:i,anchorX:c,children:n})),(0,ac.jsx)(lc.Provider,{value:f,children:n})};function ym(){return new Map}const bm=e=>e.key||"";function xm(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const wm=t=>{let{children:n,custom:r,initial:i=!0,onExitComplete:a,presenceAffectsLayout:o=!0,mode:s="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=cc(l),p=(0,e.useMemo)((()=>xm(n)),[n]),f=l&&!u?[]:p.map(bm),h=(0,e.useRef)(!0),m=(0,e.useRef)(p),g=Md((()=>new Map)),[v,y]=(0,e.useState)(p),[b,x]=(0,e.useState)(p);id((()=>{h.current=!1,m.current=p;for(let e=0;e<b.length;e++){const t=bm(b[e]);f.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[b,f.length,f.join("-")]);const w=[];if(p!==v){let e=[...p];for(let t=0;t<b.length;t++){const n=b[t],r=bm(n);f.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),x(xm(e)),y(p),null}const{forceRender:S}=(0,e.useContext)(uc);return(0,ac.jsx)(ac.Fragment,{children:b.map((e=>{const t=bm(e),n=!(l&&!u)&&(p===b||f.includes(t));return(0,ac.jsx)(vm,{isPresent:n,initial:!(h.current&&!i)&&void 0,custom:r,presenceAffectsLayout:o,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(S?.(),x(m.current),l&&d?.(),a&&a())},anchorX:c,children:e},t)}))})},Sm=Zr.div`
	grid-area: sidebar;
	background-color: rgba(0, 0, 0, 0.5);
	border-right: 1px solid var(--color-border);
	display: ${e=>{let{hidden:t}=e;return t?"none":"flex"}};
	flex-direction: column;
	padding: var(--spacing-md) 0;
`,km=Zr.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding: var(--spacing-md);
	background-color: ${e=>{let{active:t}=e;return t?"rgba(193, 86, 242, 0.2)":"transparent"}};
	border: none;
	border-left: 4px solid
		${e=>{let{active:t}=e;return t?"var(--color-accent)":"transparent"}};
	color: ${e=>{let{active:t}=e;return t?"var(--color-text-primary)":"var(--color-text-secondary)"}};
	font-weight: ${e=>{let{active:t}=e;return t?"600":"400"}};
	text-transform: uppercase;
	letter-spacing: 0.05em;
	font-size: 0.9rem;
	transition: all 0.2s ease;

	&:hover {
		background-color: rgba(193, 86, 242, 0.1);
		color: var(--color-text-primary);
	}
`,Em=Zr.main`
	grid-area: ${e=>{let{fullWidth:t}=e;return t?"sidebar / span 2":"main-content"}};
	overflow-y: auto;
	padding: var(--spacing-lg);
	position: relative;
`,Cm=Zr(ep.div)`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 100;
	display: flex;
	justify-content: flex-end;
	align-items: stretch;
`,Pm=Zr(ep.div)`
	position: relative;
	width: 450px;
	height: 100%;
	overflow-y: auto;
	background-color: #0d1117;
	padding: var(--spacing-lg);
	box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
	border-left: 1px solid var(--color-border);
`,Tm=e=>{let{isOpen:t,onClose:n,children:r}=e;return(0,ac.jsx)(wm,{children:t&&(0,ac.jsx)(Cm,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:(0,ac.jsx)(Pm,{initial:{x:450,opacity:0},animate:{x:0,opacity:1},exit:{x:450,opacity:0},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>e.stopPropagation(),children:r})})})},jm=e=>{let{children:t,activeTab:n,onTabChange:r,hideSidebar:i=!1}=e;return(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(Sm,{hidden:i,children:[(0,ac.jsx)(km,{active:"decks"===n,onClick:()=>r("decks"),children:"Decks"}),(0,ac.jsx)(km,{active:"cards"===n,onClick:()=>r("cards"),children:"Cards"})]}),(0,ac.jsx)(Em,{fullWidth:i,children:t})]})},Dm=Zr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,Am=Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);

  ${ai} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`,Rm=Zr(ep.div)`
  position: relative;
  height: 350px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  ${ai} {
    height: 250px;
  }

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 15px,
      calc(100% - 15px) 30px,
      100% 45px,
      100% 100%,
      0 100%,
      0 calc(100% - 15px),
      15px calc(100% - 30px),
      0 calc(100% - 45px)
    );
    z-index: 4;
    pointer-events: none;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.03) 2px,
      rgba(32, 202, 255, 0.03) 3px
    );
    pointer-events: none;
    z-index: 5;
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 0 25px rgba(86, 204, 242, 0.6);
  }
`,Mm=Zr.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: ${e=>{let{imageUrl:t}=e;return`url(${t})`}};
  background-size: cover;
  background-position: center;
  filter: brightness(0.5);
  transition: all 0.3s ease;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 70%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent);
  }
`,Lm=Zr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-lg);
  z-index: 1;
`,_m=Zr.h3`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  text-shadow: 0 0 10px rgba(86, 204, 242, 0.8);
`,zm=Zr.p`
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: 0.85rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  border-left: 2px solid rgba(86, 204, 242, 0.7);
  padding-left: 8px;
`,Om=Zr.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);

  ${ai} {
    gap: var(--spacing-xs);
  }
`,Fm=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--radius-sm);
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }
`,Nm=Zr.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);

  ${ai} {
    font-size: 1rem;
  }
`,Im=Zr.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);

  ${ai} {
    font-size: 0.5rem;
  }
`,$m=Zr.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(86, 204, 242, 0.5);
  z-index: 6;
  opacity: 0.3;
`,Bm=Zr.div`
  position: absolute;
  top: 30%;
  left: 0;
  height: 2px;
  width: 30%;
  background: rgba(86, 204, 242, 0.6);
  z-index: 6;
  opacity: 0.4;
`,Vm=e=>{let{decks:t,activeDeckId:n,onSelectDeck:r}=e;const i=e=>{const t=up(e.cards[0]);return(null===e||void 0===e?void 0:e.coverImage)||(null===t||void 0===t?void 0:t.imageUrl)||"https://placehold.co/600x400?text=NoCover"};return(0,ac.jsx)(Dm,{children:(0,ac.jsx)(Am,{children:t.map((e=>{const t=(e=>{const t={projects:0,skills:0,experiences:0};return e.cards.forEach((e=>{const n=up(e);n&&("project"===n.type?t.projects++:"skill"===n.type?t.skills++:"experience"===n.type&&t.experiences++)})),t})(e);return(0,ac.jsxs)(Rm,{active:e.id===n,onClick:()=>r(e.id),whileHover:{y:-5},whileTap:{y:0},children:[(0,ac.jsx)(Mm,{imageUrl:i(e)}),(0,ac.jsxs)(Lm,{children:[(0,ac.jsx)(_m,{children:e.name}),(0,ac.jsx)(zm,{children:e.description}),(0,ac.jsxs)(Om,{children:[(0,ac.jsxs)(Fm,{children:[(0,ac.jsx)(Nm,{children:e.cards.length}),(0,ac.jsx)(Im,{children:"Cards"})]}),(0,ac.jsxs)(Fm,{children:[(0,ac.jsx)(Nm,{children:t.projects}),(0,ac.jsx)(Im,{children:"Projects"})]}),(0,ac.jsxs)(Fm,{children:[(0,ac.jsx)(Nm,{children:t.skills}),(0,ac.jsx)(Im,{children:"Skills"})]}),(0,ac.jsxs)(Fm,{children:[(0,ac.jsx)(Nm,{children:t.experiences}),(0,ac.jsx)(Im,{children:"Exp"})]})]})]}),(0,ac.jsx)($m,{}),(0,ac.jsx)(Bm,{})]},e.id)}))})})},Um=Zr.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: var(--spacing-lg);
  height: 100%;
  min-height: 100vh;
  height: auto;
  overflow: visible;

  ${ai} {
    grid-template-columns: 150px 1fr;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs);
    height: 100vh;
  }

  ${ti} {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }
`,Wm=Zr.div`
  display: flex;
  flex-direction: column;
  min-height: 87svh;
  max-height: 87svh;
  height: auto;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);
  overflow: hidden;
  position: sticky;
  top: var(--spacing-md);
  align-self: flex-start;

  ${ai} {
    position: sticky;
    top: var(--spacing-xs);
    height: calc(100dvh - 24 * var(--spacing-xs));
    min-height: calc(100dvh - 24 * var(--spacing-xs));
    max-height: calc(100dvh - 24 * var(--spacing-xs));
    margin-bottom: 0;
  }

  ${ti} {
    position: relative;
    top: 0;
    min-height: auto;
    max-height: none;
    margin-bottom: var(--spacing-lg);
  }
`,Hm=Zr.div`
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.2);

  ${ai} {
    padding: var(--spacing-xs) var(--spacing-xs);
  }
`,Ym=Zr.button`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-md);
  background-color: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-secondary);
  font-size: 0.8rem;
  cursor: pointer;
  margin-bottom: var(--spacing-md);

  ${ai} {
    font-size: 0.65rem;
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-bottom: var(--spacing-xs);
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.4);
    color: var(--color-text-primary);
  }

  &::before {
    content: "‹";
    margin-right: var(--spacing-sm);
    font-weight: bold;
  }
`,qm=Zr.h2`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-xs);
  display: flex;
  align-items: center;

  &::before {
    content: "🃏";
    margin-right: var(--spacing-sm);
    font-size: 1.3rem;
  }

  ${ai} {
    font-size: 0.8rem;
    margin-bottom: var(--spacing-xxs);
    &::before {
      font-size: 0.9rem;
      margin-right: var(--spacing-xs);
    }
  }
`,Km=Zr.p`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);

  ${ai} {
    display: none;
  }
`,Gm=Zr.button`
  background-color: rgba(86, 204, 242, 0.1);
  border: 1px solid var(--color-accent);
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  cursor: pointer;

  ${ai} {
    font-size: 0.65rem;
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-top: var(--spacing-xxs);
  }

  &:hover {
    background-color: rgba(86, 204, 242, 0.2);
  }
`,Xm=Zr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xs);
  margin: var(--spacing-md) 0;

  ${ai} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    margin: var(--spacing-xs) 0;
  }
`,Zm=Zr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  ${ai} {
    padding: 2px;
  }
`,Qm=Zr.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);

  ${ai} {
    font-size: 0.8rem;
  }
`,Jm=Zr.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);

  ${ai} {
    font-size: 0.5rem;
    letter-spacing: 0.02em;
  }
`,eg=Zr.div`
  overflow-y: auto;
  padding: var(--spacing-md);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  ${ai} {
    padding: var(--spacing-xs);
    gap: 4px;
  }
`,tg=Zr(ep.div)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-xs);
  border: 1px solid var(--color-border-subtle);
  padding: var(--spacing-xs) var(--spacing-sm);
  margin-bottom: 6px;
  cursor: pointer;
  min-height: 40px;

  ${ai} {
    padding: 3px var(--spacing-xs);
    min-height: 32px;
    margin-bottom: 3px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
    border-color: var(--color-accent-light);
  }
`,ng=Zr.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>{let{cardType:t}=e;return t===tp.PROJECT?"var(--color-project-dark)":t===tp.SKILL?"var(--color-skill-dark)":t===tp.EXPERIENCE?"var(--color-experience-dark)":"var(--color-grey-dark)"}};
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: var(--spacing-sm);
  border: 1px solid var(--color-border);

  ${ai} {
    width: 22px;
    height: 22px;
    font-size: 0.7rem;
    margin-right: var(--spacing-xs);
  }

  &::before {
    content: "${e=>{let{cardType:t}=e;return t.charAt(0).toUpperCase()}}";
  }
`,rg=Zr.div`
  flex-grow: 1;
  font-size: 0.9rem;
  color: var(--color-text-primary);
  font-weight: 500;

  ${ai} {
    font-size: 0.7rem;
  }
`,ig=Zr.button`
  background: none;
  border: none;
  color: var(--color-danger);
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--spacing-xs);
  margin-left: var(--spacing-sm);
  line-height: 1;

  ${ai} {
    font-size: 0.8rem;
    padding: 2px;
    margin-left: var(--spacing-xs);
  }

  &:hover {
    color: var(--color-danger-hover);
  }
`,ag=Zr.div`
  padding: var(--spacing-lg);
  text-align: center;
  color: var(--color-text-secondary);
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${ai} {
    font-size: 0.75rem;
    padding: var(--spacing-sm);
  }
`,og=Zr.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;

  ${ai} {
    height: calc(100dvh - 24 * var(--spacing-xs));
    overflow-y: auto;
  }
`,sg=Zr.div`
  margin-bottom: var(--spacing-md);

  ${ai} {
    margin-bottom: var(--spacing-xs);
  }
`,lg=Zr.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-secondary);
`,cg=Zr.input`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  font-size: 0.9rem;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,ug=Zr.textarea`
  width: 100%;
  padding: var(--spacing-sm);
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  color: var(--color-text-primary);
  font-size: 0.9rem;
  min-height: 70px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: var(--color-accent);
  }
`,dg=Zr.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);

  ${ai} {
    margin-top: var(--spacing-xs);
  }
`,pg=Zr.button`
  background-color: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.2)":"rgba(0, 0, 0, 0.3)"}};
  border: 1px solid
    ${e=>{let{variant:t}=e;return"primary"===t?"var(--color-accent)":"var(--color-border)"}};
  color: var(--color-text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  ${ai} {
    font-size: 0.7rem;
    padding: var(--spacing-xs) var(--spacing-xs);
  }

  &:hover {
    background-color: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.3)":"rgba(0, 0, 0, 0.4)"}};
  }
`,fg=Zr.div`
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: auto;

  ${ai} {
    padding: var(--spacing-xs);
  }
`,hg=t=>{let{cards:n,deckName:r,deckDescription:i,onRemoveCard:a,onSelectCard:o,onExportDeck:s,onSaveDeck:l,onGoBack:c,onAddToDeck:u,cardsInDeck:d,isCustomDeck:p}=t;const[f,h]=(0,e.useState)(r),[m,g]=(0,e.useState)(i),[v,y]=(0,e.useState)(!1),[b,x]=(0,e.useState)(null),w=n.reduce(((e,t)=>{const n=e.find((e=>e.id===t.id));return n?n.quantity+=1:e.push({...t,quantity:1}),e}),[]),S=n.filter((e=>"project"===e.type)).length,k=n.filter((e=>"skill"===e.type)).length,E=n.filter((e=>"experience"===e.type)).length,C=b?cp().filter((e=>e.type===b)):cp();return(0,ac.jsxs)(Um,{children:[(0,ac.jsxs)(Wm,{children:[(0,ac.jsxs)(Hm,{children:[(0,ac.jsx)(Ym,{onClick:c,children:"Back to Decks"}),(!p||!v)&&(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsx)(qm,{children:f}),(0,ac.jsx)(Km,{children:m})]}),p&&v&&(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(sg,{children:[(0,ac.jsx)(lg,{children:"Deck Name"}),(0,ac.jsx)(cg,{type:"text",value:f,onChange:e=>h(e.target.value),placeholder:"Enter deck name"})]}),(0,ac.jsxs)(sg,{children:[(0,ac.jsx)(lg,{children:"Description"}),(0,ac.jsx)(ug,{value:m,onChange:e=>g(e.target.value),placeholder:"Enter deck description"})]}),(0,ac.jsxs)(dg,{children:[(0,ac.jsx)(pg,{onClick:()=>y(!1),children:"Cancel"}),(0,ac.jsx)(pg,{variant:"primary",onClick:()=>{l&&l(f,m),y(!1)},children:"Save"})]})]})]}),(0,ac.jsx)(eg,{children:(0,ac.jsx)(wm,{children:w.length>0?w.map((e=>(0,ac.jsxs)(tg,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2},onClick:()=>o(e),children:[(0,ac.jsx)(ng,{cardType:e.type}),(0,ac.jsx)(rg,{children:e.title}),p&&(0,ac.jsx)(ig,{onClick:t=>{t.stopPropagation();const r=n.find((t=>t.id===e.id));r&&a(r)},children:"\xd7"})]},e.id))):(0,ac.jsx)(ag,{children:p?"Your deck is empty. Add cards from the right panel.":"This deck has no cards."})})}),(!p||!v)&&(0,ac.jsxs)(fg,{children:[(0,ac.jsxs)(Xm,{children:[(0,ac.jsxs)(Zm,{children:[(0,ac.jsx)(Qm,{children:n.length}),(0,ac.jsx)(Jm,{children:"Cards"})]}),(0,ac.jsxs)(Zm,{children:[(0,ac.jsx)(Qm,{children:S}),(0,ac.jsx)(Jm,{children:"Projects"})]}),(0,ac.jsxs)(Zm,{children:[(0,ac.jsx)(Qm,{children:k}),(0,ac.jsx)(Jm,{children:"Skills"})]}),(0,ac.jsxs)(Zm,{children:[(0,ac.jsx)(Qm,{children:E}),(0,ac.jsx)(Jm,{children:"Exp"})]})]}),(0,ac.jsxs)(dg,{children:[p&&(0,ac.jsxs)(Gm,{onClick:()=>y(!0),style:{width:"100%"},children:["Edit"," ",(0,ac.jsx)("span",{style:{display:""+(ai?"none":"inline")},children:"Deck Info"})]}),(0,ac.jsxs)(pg,{onClick:s,variant:"primary",style:{width:"100%"},children:["Export"," ",(0,ac.jsx)("span",{style:{display:""+(ai?"none":"inline")},children:"Deck"})]})]})]})]}),(0,ac.jsx)(og,{children:(0,ac.jsx)(Ph,{cards:C,onSelectCard:o,onAddToDeck:p?u:void 0,onRemoveFromDeck:p?a:void 0,cardsInDeck:d,filterType:b,onFilterChange:e=>{x(e)}})})]})},mg=Zr.div`
	margin-bottom: var(--spacing-lg);
`,gg=Zr.h1`
	font-size: 1.8rem;
	margin-bottom: var(--spacing-sm);
	display: flex;
	align-items: center;
	color: var(--color-text-primary);

	.highlight {
		color: var(--color-accent);
		margin-left: 8px;
	}

	&::before {
		content: "🃏";
		margin-right: var(--spacing-md);
		font-size: 1.8rem;
	}
`,vg=Zr.p`
	font-size: 0.9rem;
	color: var(--color-text-secondary);
	margin-bottom: var(--spacing-md);
	max-width: 800px;
`,yg=()=>{const[t,n]=(0,e.useState)("decks"),[r,i]=hm("userDeck",[]),[a,o]=(0,e.useState)(null),[s,l]=hm("activeDeckId","custom"),[c,u]=hm("customDeckName","Your Custom Collection"),[d,p]=hm("customDeckDesc","Added/Deleted cards will only affect this collection."),[f,h]=(0,e.useState)(!1),[m,g]=(0,e.useState)("list"),[v,y]=(0,e.useState)([]),b={id:"custom",name:c,coverImage:"https://images.unsplash.com/photo-1699275303988-4f266a7f119a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNob2ljZSUyMGRlc2t0b3AlMjBjdXJzb3J8ZW58MHx8MHx8fDI%3D",description:d,cards:r},x=[b,...dp],w=x.find((e=>e.id===s))||b;(0,e.useEffect)((()=>{if("custom"!==s){const e=x.find((e=>e.id===s));e&&y(e.cards)}else y(r)}),[s,r,x]);const S=e=>{r.includes(e.id)||i([...r,e.id]),h(!1)},k=e=>{i(r.filter((t=>t!==e.id)))},E=()=>{const e={name:"custom"===w.id?c:w.name,description:"custom"===w.id?d:w.description,cards:"custom"===w.id?r:w.cards},t=JSON.stringify(e,null,2),n="data:application/json;charset=utf-8,"+encodeURIComponent(t),i=`${e.name.toLowerCase().replace(/\s+/g,"-")}.json`,a=document.createElement("a");a.setAttribute("href",n),a.setAttribute("download",i),a.click()},C=e=>{o(e),h(!0)},P=e=>{l(e),g("editor")},T=(e,t)=>{"custom"===s&&(u(e),p(t))},j=()=>("custom"===s?r:v).map((e=>up(e))).filter((e=>void 0!==e));return(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(jm,{activeTab:t,onTabChange:n,hideSidebar:"decks"===t&&"editor"===m,children:["decks"===t?"editor"===m?(0,ac.jsx)(hg,{cards:j(),deckName:w.name,deckDescription:w.description,onRemoveCard:k,onSelectCard:C,onExportDeck:E,onSaveDeck:T,onGoBack:()=>g("list"),onAddToDeck:S,cardsInDeck:j().map((e=>e.id)),isCustomDeck:"custom"===s}):(0,ac.jsx)(Vm,{decks:x,activeDeckId:s,onSelectDeck:P}):(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(mg,{children:[(0,ac.jsxs)(gg,{children:["Card ",(0,ac.jsx)("span",{className:"highlight",children:"Collection"})]}),(0,ac.jsx)(vg,{children:"Browse through all my projects, skills, and experiences. Add cards to your collection to build your own view of my portfolio."})]}),(0,ac.jsx)(Ph,{cards:cp(),onSelectCard:C,cardsInDeck:r,onAddToDeck:S,onRemoveFromDeck:k})]}),(0,ac.jsx)(ah,{})]}),(0,ac.jsx)(Tm,{isOpen:f,onClose:()=>h(!1),children:a&&(0,ac.jsx)(fm,{card:a,onAddToDeck:()=>S(a),onRemoveFromDeck:()=>k(a),isInDeck:r.includes(a.id),onRelationClick:e=>{o(e)}})})]})},bg=Zr.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  height: 25rem;

  ${ai} {
    height: 15rem;
  }
`,xg=Zr(ep.div)`
  display: flex;
  flex-grow: 0;
  width: 100%;
  height: fit-content;
  gap: var(--spacing-md);

  @media (max-width: 768px) {
    flex-direction: column;
  }
`,wg=Zr.div`
  display: flex;
  justify-content: space-between;
  margin-top: var(--spacing-sm);
`,Sg=Zr.button`
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(86, 204, 242, 0.2);
    border-color: var(--color-accent);
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
    &:hover {
      background: rgba(0, 0, 0, 0.4);
      border-color: var(--color-border);
      transform: none;
    }
  }
`,kg=Zr.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: var(--spacing-sm);
`,Eg=Zr.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.3)"};
  transition: all 0.3s ease;
`,Cg=t=>{let{items:n,itemsPerPage:r=3,breakpoints:i={768:1,1024:2}}=t;const[a,o]=(0,e.useState)(0),[s,l]=(0,e.useState)(0),[c,u]=(0,e.useState)(r),d=e=>{const t=[];for(let r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t},[p,f]=(0,e.useState)((()=>d(c)));(0,e.useEffect)((()=>{const e=()=>{const e=Object.keys(i).map(Number).sort(((e,t)=>t-e));let t=r;for(const n of e)window.innerWidth<=n&&(t=i[n]);t!==c&&(u(t),f(d(t)),o(0))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[i,r,c,n]);const h=p.length>1;return(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsx)(bg,{children:(0,ac.jsx)(wm,{initial:!1,custom:s,mode:"popLayout",children:(0,ac.jsx)(xg,{custom:s,variants:{enter:e=>({x:e>0?"100%":"-100%",opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?"100%":"-100%",opacity:0})},initial:"enter",animate:"center",exit:"exit",transition:{type:"spring",stiffness:300,damping:30},children:p[a]},a)})}),h&&(0,ac.jsxs)(wg,{children:[(0,ac.jsx)(Sg,{onClick:()=>{l(-1),o((e=>0===e?p.length-1:e-1))},"aria-label":"Previous slide",children:"\u2190"}),(0,ac.jsx)(kg,{children:p.map(((e,t)=>(0,ac.jsx)(Eg,{active:a===t,onClick:()=>o(t)},t)))}),(0,ac.jsx)(Sg,{onClick:()=>{l(1),o((e=>e===p.length-1?0:e+1))},"aria-label":" Next slide",children:"\u2192"})]})]})};const Pg=n.p+"static/media/avatar-frame.6dc08242a61b017341e63615d50ced51.svg",Tg=n.p+"static/media/avatar.c01cc4de78fcfcf478fc.webp",jg=n.p+"static/media/IMG_8350.777a803bcd0d6ef701f5.webp",Dg=n.p+"static/media/IMG_8351.2d2bfebc1a6073b41c84.webp",Ag=[{slug:"first-win",icon:"\ud83c\udfc6",title:"First Win",description:"Completed first project",unlocked:!0},{slug:"first-app",icon:"\ud83d\ude80",title:"Launched App",description:"Released my first app to the public",unlocked:!0},{slug:"linguist",icon:"\ud83c\udf10",title:"Certified Linguist",description:"Obtained certification for multiple languages",unlocked:!0},{slug:"arms-of-steel",icon:"\ud83d\udcaa\ud83c\udffe",title:"Arms of Steel",description:"Made bread from scratch",unlocked:!0},{slug:"buzzing-eardrums",icon:"\ud83c\udfb6",title:"Buzzing Eardrums",description:"Went to 5+ concerts in a year",unlocked:!0},{slug:"networking-pro",icon:"\ud83e\udd1d",title:"Networking Pro",description:"Connected with industry leaders and peers",unlocked:!1}],Rg=[{description:"Saw the king TAEMIN live for the first time",timestamp:new Date("2025-03-12T20:30+0200")},{description:'Unlocked "Certified Linguist" achievement',timestamp:new Date("2025-01-31T10:00:00+0200")},{description:"Started end-of-study internship at Selego as a full-stack developer & data scientist",timestamp:new Date("2025-02-10T09:00+0200")},{description:"Went to ATEEZ last tour in Paris in VIP1",timestamp:new Date("2025-02-22T17:30+0200")},{description:"Started my portfolio's visual update",timestamp:new Date("2025-04-19T02:59+0200")}],Mg=function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)>0?Rg.sort(((e,t)=>t.timestamp.getTime()-e.timestamp.getTime())).slice(0,5):Rg.sort(((e,t)=>t.timestamp.getTime()-e.timestamp.getTime()))},Lg=[{id:1,name:"Room No 1117",details:"Newest album from ATEEZ, my favorite K-pop group",highlight:"INCOMING",color:"linear-gradient(135deg, #ff0092, #ffbde6)",image:"https://image.static.bstage.in/cdn-cgi/image/metadata=none,dpr=2,width=640/voszjachlrh/2824efd5-106b-4667-adc3-44fb41cbafff/c0faf6cf-8e38-4e64-84a5-a49233c748eb/ori.jpg",alt:"ATEEZ",icon:"\ud83c\udfb5"},{id:2,name:"Jojo's Bizarre Adventure",details:"We're getting Steel Ball Run anime \ud83d\ude2d",highlight:"FAV",color:"linear-gradient(135deg, #6236ff, #9fb0ff)",image:"https://m.media-amazon.com/images/M/MV5BMzIyNzY4NTMtNmVhYS00OWFhLTkwMWMtOGFkNTdmNWU2ZDdiXkEyXkFqcGc@._V1_.jpg",icon:"\ud83c\udf38"},{id:6,name:"The Sims",details:"First game I've ever played (The Sims 3 are the best)",highlight:"CORE MEMORY",color:"linear-gradient(135deg, #ff006e, #d0f4de)",image:"https://m.media-amazon.com/images/I/71DLhfD9DlL._AC_UF1000,1000_QL80_.jpg",icon:"\ud83c\udfae"},{id:4,name:"Blueberry Creamcheese Muffins",details:"Latest creation",highlight:"MASTER CHEF",color:"linear-gradient(135deg, #e85d04, #faa307)",image:jg,icon:"\ud83c\udf70"},{id:9,name:"Red Bean & Lotus Paste Mooncakes",details:"Favorite creation of mine, for Mid-Autumn Festival",highlight:"MASTER CHEF",color:"linear-gradient(135deg, #e85d04, #faa307)",image:Dg,icon:"\ud83c\udf70"},{id:5,name:"Volleyball",details:"Power spiker position and team vice-captain in high school",highlight:"MVP PLAYER",color:"linear-gradient(135deg, #38b000, #9ef01a)",image:"https://images.unsplash.com/photo-1686753767715-37cb0c34212c?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHZvbGxleWJhbGx8ZW58MHx8MHx8fDI%3D",icon:"\ud83c\udfd0"},{id:7,name:"Grave of the Fireflies",details:"Best Studio Ghibli movie (I like to cry apparently)",highlight:"FAV",color:"linear-gradient(135deg, #3a0ca3, #f72585)",image:"https://m.media-amazon.com/images/I/71DxYiB0N0L._AC_UF894,1000_QL80_.jpg"},{id:8,name:"Orchestra class",details:"Played trumpet for 3 years in middle school",highlight:"MUSICIAN",color:"linear-gradient(135deg, #7209b7, #3f37c9)",image:"https://images.unsplash.com/photo-1740904258428-e33f0605b781?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG9yY2hlc3RyYSUyMHRydW1wZXR8ZW58MHx8MHx8fDA%3D",icon:"\ud83c\udfb6"}],_g=Zr.h1`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-sm);
  display: flex;
  align-items: center;
  color: var(--color-text-primary);

  .highlight {
    color: var(--color-accent);
    margin-left: 8px;
  }

  &::before {
    content: "🃏";
    margin-right: var(--spacing-md);
    font-size: 1.8rem;
  }
`,zg=Zr.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  max-width: 800px;

  .highlight {
    color: var(--color-accent);
    margin-left: 8px;
  }
`,Og=Zr.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,Fg=Zr.div`
  position: relative;
  background: rgba(0, 0, 0, 0.6);
  border-radius: var(--radius-md);
  padding: var(--spacing-md);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.65);
  overflow: hidden;
  transform: translate3d(0, 0, 0);

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 20px,
      calc(100% - 20px) 40px,
      100% 60px,
      100% 100%,
      0 100%,
      0 calc(100% - 20px),
      20px calc(100% - 40px),
      0 calc(100% - 60px)
    );
    z-index: 5;
    pointer-events: none;
    backface-visibility: hidden;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.03) 2px,
      rgba(32, 202, 255, 0.03) 3px
    );
    pointer-events: none;
    z-index: 7;
    opacity: 0.3;
  }
`,Ng=Zr.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto var(--spacing-md);
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;

  z-index: 1;
  animation: glowPulse 3s infinite alternate;
  border-radius: 50%;

  @keyframes glowPulse {
    0% {
      box-shadow: 0 0 5px rgba(86, 204, 242, 0.5);
    }
    100% {
      box-shadow: 0 0 20px rgba(86, 204, 242, 0.8);
    }
  }
`,Ig=Zr.div`
  width: 130px;
  height: 130px;
  border-radius: 50%;
  background: linear-gradient(135deg, #6e45e2, #88d3ce);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  color: white;
  position: relative;
  z-index: 2;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      135deg,
      rgba(231, 76, 60, 0.2),
      rgba(86, 204, 242, 0.2)
    );
    z-index: 3;
    pointer-events: none;
  }
`,$g=Zr.h2`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;

  &::after {
    content: "";
    display: block;
    width: 80px;
    height: 2px;
    background: linear-gradient(to right, var(--color-accent), #56ccf2);
    margin: var(--spacing-xs) auto 0;
  }
`,Bg=Zr.div`
  text-align: center;
  font-size: 0.9rem;
  color: var(--color-accent);
  margin-bottom: var(--spacing-md);
  font-style: italic;
  position: relative;
  width: fit-content;
  margin: 0 auto var(--spacing-md);
  padding: 0 var(--spacing-sm);

  &::before,
  &::after {
    content: "//";
    margin: 0 var(--spacing-xs);
    opacity: 0.6;
  }
`,Vg=Zr.div`
  margin: var(--spacing-md) 0;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(86, 204, 242, 0.3),
      transparent
    );
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 100%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      rgba(86, 204, 242, 0.3),
      transparent
    );
  }
`,Ug=Zr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`,Wg=Zr.div`
  height: 20px;
  background: rgba(0, 0, 0, 0.5);
  border-radius: var(--radius-sm);
  overflow: hidden;
  width: 100%;
  position: relative;
  border: 1px solid var(--color-border);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: repeating-linear-gradient(
      to right,
      transparent,
      transparent 10px,
      rgba(0, 0, 0, 0.1) 10px,
      rgba(0, 0, 0, 0.1) 20px
    );
    z-index: 1;
  }
`,Hg=Zr.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--color-accent), #56ccf2);
  width: ${e=>e.progress};
  transition: width 0.3s ease-in-out;
  z-index: 2;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: 5px;
    height: 100%;
    background: rgba(255, 255, 255, 0.7);
    filter: blur(3px);
  }
`,Yg=Zr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
`,qg=Zr(ep.div)`
  background: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-sm);
  border-radius: var(--radius-sm);
  text-align: center;
  border: 1px solid var(--color-border);
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }

  .stat-value {
    font-size: 1.5rem;
    font-weight: bold;
    color: var(--color-text-primary);
    position: relative;
    z-index: 2;

    ${ai} {
      font-size: 1rem;
    }
  }

  .stat-label {
    font-size: 0.8rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-secondary);
    position: relative;
    z-index: 2;

    ${ai} {
      font-size: 0.6rem;
    }
  }
`,Kg=Zr.div`
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  position: relative;
  padding: var(--spacing-sm) 0;
  margin-top: var(--spacing-md);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 25%;
    width: 50%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-border),
      transparent
    );
  }

  span {
    color: var(--color-accent);
  }
`,Gg=Zr.h3`
  font-size: 1.2rem;
  margin: var(--spacing-md) 0 var(--spacing-sm);
  padding-bottom: var(--spacing-xs);
  border-bottom: 1px solid var(--color-border);
  color: var(--color-text-primary);
  position: relative;
  display: flex;
  align-items: center;

  &::before {
    content: ">";
    color: var(--color-accent);
    margin-right: var(--spacing-xs);
  }
`,Xg=Zr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: var(--spacing-sm);
`,Zg=Zr(ep.div)`
  display: flex;
  flex-direction: column;
  align-items: center;

  .achievement-icon {
    width: 50px;
    height: 50px;
    border-radius: 12px;
    background: ${e=>e.unlocked?"var(--color-accent)":"rgba(0, 0, 0, 0.3)"};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing-xs);
    font-size: 1.5rem;
    color: ${e=>e.unlocked?"white":"var(--color-text-secondary)"};
    opacity: ${e=>e.unlocked?"1":"0.5"};
    position: relative;
    overflow: hidden;
    transition: all 0.3s ease;

    ${e=>e.unlocked&&'\n\t\t\t&::before {\n\t\t\t\tcontent: "";\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: -10px;\n\t\t\t\tleft: -10px;\n\t\t\t\twidth: calc(100% + 20px);\n\t\t\t\theight: calc(100% + 20px);\n\t\t\t\tbackground: radial-gradient(circle, rgba(86, 204, 242, 0.3) 0%, transparent 70%);\n\t\t\t\tz-index: -1;\n\t\t\t\tanimation: pulse 2s infinite;\n\t\t\t}\n\t\t\t\n\t\t\t@keyframes pulse {\n\t\t\t\t0% {\n\t\t\t\t\ttransform: scale(0.8);\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t\t50% {\n\t\t\t\t\ttransform: scale(1.2);\n\t\t\t\t\topacity: 0.3;\n\t\t\t\t}\n\t\t\t\t100% {\n\t\t\t\t\ttransform: scale(0.8);\n\t\t\t\t\topacity: 0.8;\n\t\t\t\t}\n\t\t\t}\n\t\t'}
  }

  .achievement-name {
    font-size: 0.7rem;
    text-align: center;
    color: ${e=>e.unlocked?"var(--color-text-primary)":"var(--color-text-secondary)"};
  }

  &:hover .achievement-icon {
    transform: ${e=>e.unlocked?"translateY(-3px)":"none"};
    box-shadow: ${e=>e.unlocked?"0 5px 15px rgba(86, 204, 242, 0.4)":"none"};
  }
`,Qg=Zr(ep.div)`
  background: rgba(0, 0, 0, 0.7);
  border-radius: var(--radius-sm);
  margin-bottom: var(--spacing-md);
  border: 2px solid transparent;
  border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
  background-image: url(${e=>e.image});
  background-size: cover;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 15px rgba(86, 204, 242, 0.3);
  width: 15rem;
  height: 25rem;
  transform: translate3d(0, 0, 0);

  ${ai} {
    width: 15rem;
    height: 15rem;
  }

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 15px,
      calc(100% - 15px) 30px,
      100% 45px,
      100% 100%,
      0 100%,
      0 calc(100% - 15px),
      15px calc(100% - 30px),
      0 calc(100% - 45px)
    );
    z-index: 4;
    pointer-events: none;
    backface-visibility: hidden;
  }

  /* Digital scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.03) 2px,
      rgba(32, 202, 255, 0.03) 3px
    );
    pointer-events: none;
    z-index: 5;
    opacity: 0.3;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(86, 204, 242, 0.4);

    .card-overlay {
      background: rgba(0, 0, 0, 0.65);
    }

    .interest-badge {
      transform: translateY(-3px);
    }
  }

  .interest-icon {
    transition: transform 0.3s ease;
  }

  &:hover .interest-icon {
    transform: scale(1.2);
  }
`,Jg=Zr.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);

  ${ai} {
    font-size: 0.7rem;
  }

  p {
    margin-bottom: var(--spacing-xs);
    display: flex;
    align-items: center;
    line-height: 1.5;

    &::before {
      content: "• ";
      margin-right: var(--spacing-xs);
      color: var(--color-accent);
    }
  }

  span {
    color: var(--color-text-primary);
    margin-left: var(--spacing-xs);
  }

  .time {
    font-style: italic;
    opacity: 0.7;
  }
`,ev=Zr.main`
  grid-area: ${e=>{let{fullWidth:t}=e;return t?"sidebar / span 2":"main-content"}};
  overflow-y: auto;
  padding: var(--spacing-xxl);
  position: relative;
`,tv=Zr.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
`,nv=Zr.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 12px;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--color-accent);
    transform: translateY(-3px);
    box-shadow: 0 0 15px rgba(86, 204, 242, 0.3);

    &::after {
      transform: scale(2);
      opacity: 0;
    }
  }

  svg {
    width: 24px;
    height: 24px;
    fill: currentColor;
  }
`,rv=Zr.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.2)":"rgba(231, 76, 60, 0.2)"}};
  border: 1px solid
    ${e=>{let{variant:t}=e;return"primary"===t?"var(--color-accent)":"var(--color-skill)"}};
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 0.9rem;

  ${ai} {
    font-size: 0.7rem;
  }

  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );
  transition: all 0.3s ease;
  margin: var(--spacing-sm) 0;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    background-color: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.3)":"rgba(231, 76, 60, 0.3)"}};
    box-shadow: 0 0 10px
      ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.3)":"rgba(231, 76, 60, 0.3)"}};
    transform: translateY(-2px);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.2)":"rgba(231, 76, 60, 0.2)"}},
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,iv=Zr.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`,av=Zr(ep.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.75);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`,ov=Zr(ep.div)`
  position: relative;
  background: #0d1117;
  width: 450px;
  max-width: 90%;
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  box-shadow: 0 0 30px rgba(86, 204, 242, 0.15);
  padding: var(--spacing-lg);
  max-height: 90vh;
  overflow-y: auto;
  transform: translate3d(0, 0, 0);

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 20px,
      calc(100% - 20px) 40px,
      100% 60px,
      100% 100%,
      0 100%,
      0 calc(100% - 20px),
      20px calc(100% - 40px),
      0 calc(100% - 60px)
    );
    pointer-events: none;
    backface-visibility: hidden;
  }
`,sv=Zr.h3`
  text-align: center;
  font-size: 1.3rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-accent);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  padding-bottom: var(--spacing-xs);

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 25%;
    width: 50%;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }
`,lv=Zr.button`
  position: absolute;
  top: var(--spacing-md);
  right: var(--spacing-md);
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--color-border);
  color: var(--color-text-secondary);
  width: 30px;
  height: 30px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  cursor: pointer;
  z-index: 10;
  transition: all 0.3s ease;

  &:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
`,cv=Zr.form`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,uv=Zr.div`
  margin-bottom: var(--spacing-sm);
  display: flex;
  flex-direction: column;

  label {
    font-size: 0.9rem;
    color: var(--color-text-primary);
    margin-bottom: var(--spacing-xs);
  }

  input,
  textarea {
    padding: var(--spacing-sm);
    border: 1px solid
      ${e=>e.error?"var(--color-skill)":e.valid?"var(--color-project)":"var(--color-border)"};
    border-radius: var(--radius-sm);
    background: rgba(0, 0, 0, 0.3);
    color: var(--color-text-primary);
    font-size: 0.9rem;

    &:focus {
      outline: none;
      border-color: var(--color-accent);
    }
  }

  .error-message {
    font-size: 0.8rem;
    color: var(--color-skill);
    margin-top: var(--spacing-xs);
  }
`,dv=Zr.textarea`
  min-height: 120px;
  resize: vertical;
`,pv=Zr.button`
  width: 100%;
  padding: var(--spacing-md);
  background-color: rgba(86, 204, 242, 0.2);
  border: 1px solid var(--color-accent);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 0.9rem;
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );
  transition: all 0.3s ease;
  cursor: pointer;
  margin-top: var(--spacing-sm);

  &:hover {
    background-color: rgba(86, 204, 242, 0.3);
    box-shadow: 0 0 10px rgba(86, 204, 242, 0.3);
    transform: translateY(-2px);
  }
`,fv=Zr(ep.div)`
  position: absolute;
  top: calc(100% + 15px);
  left: 50%;
  transform: translate3d(0, 0, 0) translateX(-50%) !important;
  background: rgba(0, 0, 0, 0.8);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-sm);
  padding: var(--spacing-xs);
  z-index: 50;
  min-width: 220px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.8);

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-image: linear-gradient(135deg, var(--color-accent), #56ccf2) 1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 15px,
      calc(100% - 15px) 30px,
      100% 45px,
      100% 100%,
      0 100%,
      0 calc(100% - 15px),
      15px calc(100% - 30px),
      0 calc(100% - 45px)
    );
    pointer-events: none;
    backface-visibility: hidden;
  }

  /* Arrow pointing to button */
  &::after {
    content: "";
    position: absolute;
    top: -8px;
    left: 50%;
    transform: translateX(-500%) rotate(45deg);
    width: 16px;
    height: 16px;
    background: rgba(0, 0, 0, 0.8);
    border-left: 1px solid var(--color-border);
    border-top: 1px solid var(--color-border);
  }
`,hv=()=>{const t={username:"atinyshrimp",title:"Legendary Collector",avatar:"\ud83e\uddd9",level:Ah(),xp:Dh(),xpToNextLevel:Rh(),joinDate:"2003",stats:{wins:127,losses:187,cardsCollected:481,decksCreated:17,favoriteDeck:"Mystic Dragons",winRate:"64.7%"},achievements:Ag,favoriteDecks:[{id:1,name:"Mystic Dragons",cards:42,winRate:"78%"},{id:2,name:"Forest Spirits",cards:40,winRate:"65%"},{id:3,name:"Elemental Mages",cards:38,winRate:"59%"}],recentActivity:[{id:1,time:"2h ago",description:"Added a new card to Mystic Dragons deck"},{id:2,time:"1d ago",description:"Won a match against ElitePlayer99"},{id:3,time:"3d ago",description:"Unlocked the Collector achievement"}]},[n,r]=(0,e.useState)(!1),[i,a]=(0,e.useState)(!1),[o,s]=(0,e.useState)({name:"",email:"",subject:"",message:""}),[l,c]=(0,e.useState)({}),u=(0,e.useRef)(null),d=(0,e.useRef)(null),p=e=>{const{name:t,value:n}=e.target;s({...o,[t]:n}),l[t]&&c({...l,[t]:""})};return(0,e.useEffect)((()=>{const e=e=>{d.current&&!d.current.contains(e.target)&&u.current&&!u.current.contains(e.target)&&r(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),(0,ac.jsxs)(ev,{fullWidth:!0,children:[(0,ac.jsxs)(_g,{children:["Player ",(0,ac.jsx)("span",{className:"highlight",children:"Profile"})]}),(0,ac.jsxs)(zg,{children:["Server:",(0,ac.jsx)("span",{className:"highlight",children:"World Z"})," | Region:",(0,ac.jsx)("span",{className:"highlight",children:"Europe/Paris"})]}),(0,ac.jsxs)(Og,{children:[(0,ac.jsxs)("div",{children:[(0,ac.jsxs)(Fg,{children:[(0,ac.jsxs)(Ng,{children:[(0,ac.jsx)(Ig,{children:(0,ac.jsx)("img",{src:Tg,alt:"Github Avatar"})}),(0,ac.jsx)("img",{src:Pg,alt:"Avatar Frame",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,pointerEvents:"none",zIndex:3}})]}),(0,ac.jsx)($g,{children:t.username}),(0,ac.jsx)(Bg,{children:t.title}),(0,ac.jsxs)(iv,{children:[(0,ac.jsx)(rv,{ref:u,variant:"primary",onClick:()=>r(!n),children:"Join Guild"}),n&&(0,ac.jsx)(fv,{ref:d,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{type:"spring",duration:.3},children:(0,ac.jsxs)(tv,{children:[(0,ac.jsx)(nv,{href:"https://www.linkedin.com/in/joyce-lapilus",target:"_blank","aria-label":"LinkedIn",children:(0,ac.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,ac.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})}),(0,ac.jsx)(nv,{href:"https://github.com/atinyshrimp",target:"_blank","aria-label":"GitHub",children:(0,ac.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,ac.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}),(0,ac.jsx)(nv,{href:"https://atinyshrimp.itch.io",target:"_blank","aria-label":"Itch.io",children:(0,ac.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,ac.jsx)("path",{d:"M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7v21.3c0 27.1 25.3 50.8 48.3 50.8 27.6 0 50.5-22.9 50.5-50 0 27.1 22.2 50 49.8 50s49-22.9 49-50c0 27.1 23.6 50 51.2 50h.5c27.6 0 51.2-22.9 51.2-50 0 27.1 21.5 50 49 50s49.8-22.9 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8v-21.3c-.4-12.9-43.2-62.1-64.9-75C372.6 32.4 325.8 32 256 32S91.1 33.1 71.9 34.8zm132.3 134.4c-22 38.4-77.9 38.7-99.9 .3-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.7-32.3 21.3-232 17.8-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.9 38.1-99.9-.2-7.1 12.5-23.1 28.9-51.8 28.9a57.5 57.5 0 0 1 -51.8-28.9zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8a436.9 436.9 0 0 1 88.2 0C318.2 223 332.9 223 349.3 223c52.3 0 65.2 77.5 83.9 144.5 17.3 62.2-5.5 63.7-34 63.7-42.2-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.5 83.9-144.5zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2v25.3c0 1.6 21.3 .2 23.3 .2 11.7 .5 23.3 1 23.3-.2v-25.3l29 1.2c-8-14.5-52.4-55.2-52.4-55.2z"})})})]})}),(0,ac.jsx)(rv,{variant:"secondary",onClick:()=>window.open("mailto:joyce.lapilus@gmail.com"),children:"Send Friend Request"})]}),(0,ac.jsxs)(Vg,{children:[(0,ac.jsxs)(Ug,{children:[(0,ac.jsxs)("span",{children:["Level ",t.level]}),(0,ac.jsxs)("span",{children:[t.xp,"/",t.xpToNextLevel," XP"]})]}),(0,ac.jsx)("div",{style:{position:"relative"},children:(0,ac.jsx)(Wg,{children:(0,ac.jsx)(Hg,{progress:t.xp/t.xpToNextLevel*100+"%"})})})]}),(0,ac.jsxs)(Yg,{children:[(0,ac.jsxs)(qg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.1},children:[(0,ac.jsx)("div",{className:"stat-value",children:t.stats.wins}),(0,ac.jsx)("div",{className:"stat-label",children:"Wins"})]}),(0,ac.jsxs)(qg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2},children:[(0,ac.jsx)("div",{className:"stat-value",children:sp.length}),(0,ac.jsx)("div",{className:"stat-label",children:"Cards"})]}),(0,ac.jsxs)(qg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.3},children:[(0,ac.jsx)("div",{className:"stat-value",children:t.stats.winRate}),(0,ac.jsx)("div",{className:"stat-label",children:"Win Rate"})]}),(0,ac.jsxs)(qg,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:[(0,ac.jsx)("div",{className:"stat-value",children:dp.length}),(0,ac.jsx)("div",{className:"stat-label",children:"Decks"})]})]}),(0,ac.jsx)("div",{style:{height:"var(--spacing-md)",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,ac.jsxs)("a",{href:"https://www.canva.com/design/DAFz4FS8qYo/dqMLNBEPlr__vOyWSZKP3Q/view?utm_content=DAFz4FS8qYo&utm_campaign=designshare&utm_medium=link&utm_source=editor",target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem"},children:["Reveal more stats ",(0,ac.jsx)("span",{children:"\ud83d\udd0d"})]})}),(0,ac.jsxs)(Kg,{children:["Member since ",(0,ac.jsx)("span",{children:t.joinDate})]})]}),(0,ac.jsxs)(Fg,{style:{marginTop:"var(--spacing-md)"},children:[(0,ac.jsx)(Gg,{children:"Achievements"}),(0,ac.jsx)(Xg,{children:t.achievements.map((e=>(0,ac.jsxs)(Zg,{unlocked:e.unlocked,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3},"data-tooltip-id":"achievement","data-tooltip-content":e.description,"data-tooltip-hidden":!e.unlocked,children:[(0,ac.jsx)("div",{className:"achievement-icon",children:e.icon}),(0,ac.jsx)("div",{className:"achievement-name",children:e.title})]},e.slug)))})]})]}),(0,ac.jsxs)("div",{children:[(0,ac.jsxs)(Fg,{children:[(0,ac.jsx)(Gg,{children:"Featured Items"}),(0,ac.jsx)(Cg,{items:Lg.map((e=>(0,ac.jsxs)(Qg,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3},image:e.image,children:[(0,ac.jsx)("div",{className:"card-overlay",style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.2)",backgroundImage:"linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)",zIndex:1}}),(0,ac.jsx)("div",{className:"interest-badge",style:{position:"absolute",top:"12px",right:"12px",background:"rgba(86, 204, 242, 0.3)",padding:"4px 12px",borderRadius:"0",fontSize:"0.7rem",fontWeight:"bold",color:"#fff",zIndex:3,letterSpacing:"0.5px",clipPath:"polygon(0 0, 100% 0, 95% 100%, 0 100%)",boxShadow:"0 0 10px rgba(86, 204, 242, 0.4)",border:"1px solid rgba(86, 204, 242, 0.7)",backdropFilter:"blur(4px)",transition:"all 0.3s ease"},children:e.highlight}),(0,ac.jsx)("div",{style:{position:"absolute",top:"50%",left:"0",height:"1px",width:"100%",background:"rgba(86, 204, 242, 0.5)",zIndex:2,opacity:.3}}),(0,ac.jsx)("div",{style:{position:"absolute",top:"30%",left:"0",height:"2px",width:"30%",background:"rgba(86, 204, 242, 0.6)",zIndex:2,opacity:.4}}),(0,ac.jsxs)("div",{style:{padding:"20px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",position:"absolute",bottom:0,left:0,right:0,zIndex:2},children:[(0,ac.jsx)("div",{style:{fontSize:ai?"1rem":"1.2rem",fontWeight:"bold",color:"white",textShadow:"0 0 10px rgba(86, 204, 242, 0.8)",letterSpacing:"1px",marginBottom:"2px",textTransform:"uppercase"},children:e.name}),(0,ac.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",fontSize:ai?"0.75rem":"0.85rem",textShadow:"0 1px 2px rgba(0,0,0,0.8)",borderLeft:"2px solid rgba(86, 204, 242, 0.7)",paddingLeft:"8px"},children:e.details})]})]},e.id))),itemsPerPage:4})]}),(0,ac.jsxs)(Fg,{style:{marginTop:"var(--spacing-md)"},children:[(0,ac.jsx)(Gg,{children:"Latest Updates"}),(0,ac.jsx)(Jg,{children:Mg().map(((e,t)=>(0,ac.jsxs)("p",{children:[e.description,(0,ac.jsx)("span",{className:"time",children:`(${Lh(e.timestamp)})`})]},t)))})]})]})]}),(0,ac.jsx)(wm,{children:i&&(0,ac.jsx)(av,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:()=>a(!1),children:(0,ac.jsxs)(ov,{onClick:e=>e.stopPropagation(),initial:{y:50,opacity:0},animate:{y:0,opacity:1},exit:{y:50,opacity:0},transition:{type:"spring",damping:20},children:[(0,ac.jsx)(lv,{onClick:()=>a(!1),children:"\xd7"}),(0,ac.jsx)(sv,{children:"Send Friend Request"}),(0,ac.jsxs)(cv,{onSubmit:e=>{e.preventDefault();const t=(()=>{const e={};return o.name.trim()||(e.name="Name is required"),o.email.trim()?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(o.email)||(e.email="Please enter a valid email"):e.email="Email is required",o.message.trim()||(e.message="Message is required"),e})();Object.keys(t).length>0?c(t):(alert("Message sent! I'll get back to you soon."),s({name:"",email:"",subject:"",message:""}),a(!1))},children:[(0,ac.jsxs)(uv,{error:!!l.name,children:[(0,ac.jsx)("label",{htmlFor:"name",children:"Your Name"}),(0,ac.jsx)("input",{type:"text",id:"name",name:"name",value:o.name,onChange:p,placeholder:"Enter your name"}),l.name&&(0,ac.jsx)("div",{className:"error-message",children:l.name})]}),(0,ac.jsxs)(uv,{error:!!l.email,children:[(0,ac.jsx)("label",{htmlFor:"email",children:"Your Email"}),(0,ac.jsx)("input",{type:"email",id:"email",name:"email",value:o.email,onChange:p,placeholder:"Enter your email"}),l.email&&(0,ac.jsx)("div",{className:"error-message",children:l.email})]}),(0,ac.jsxs)(uv,{children:[(0,ac.jsx)("label",{htmlFor:"subject",children:"Subject"}),(0,ac.jsx)("input",{type:"text",id:"subject",name:"subject",value:o.subject,onChange:p,placeholder:"Enter subject"})]}),(0,ac.jsxs)(uv,{error:!!l.message,children:[(0,ac.jsx)("label",{htmlFor:"message",children:"Message"}),(0,ac.jsx)(dv,{id:"message",name:"message",value:o.message,onChange:p,placeholder:"Enter your message"}),l.message&&(0,ac.jsx)("div",{className:"error-message",children:l.message})]}),(0,ac.jsx)(pv,{type:"submit",children:"Send Request"})]})]})})}),(0,ac.jsx)(Wf,{id:"achievement",place:"top",style:{zIndex:9999}}),(0,ac.jsx)(ah,{})]})},mv=Zr.div`
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,gv=Zr(ep.h1)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(86, 204, 242, 0.5);

  ${ri} {
    font-size: 2rem;
  }

  .highlight {
    color: var(--color-accent);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      bottom: -5px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--color-accent);
      box-shadow: 0 0 10px rgba(86, 204, 242, 0.8);
    }
  }
`,vv=Zr.section`
  margin-bottom: var(--spacing-xl);
  position: relative;

  /* Cyberpunk scanline effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: repeating-linear-gradient(
      to bottom,
      transparent 0px,
      transparent 1px,
      rgba(32, 202, 255, 0.02) 2px,
      rgba(32, 202, 255, 0.02) 3px
    );
    pointer-events: none;
    z-index: 1;
    opacity: 0.3;
  }
`,yv=Zr.h2`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;

  ${ri} {
    font-size: 1.5rem;
  }

  &::before {
    content: ">>";
    color: var(--color-accent);
    margin-right: var(--spacing-xs);
    font-size: 1.2rem;
    opacity: 0.8;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: linear-gradient(to right, var(--color-accent), transparent);
    margin-top: var(--spacing-sm);
  }
`,bv=Zr.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 2;

  ${ri} {
    font-size: 0.8rem;
  }
`,xv=Zr.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
  position: relative;
  z-index: 2;
`,wv=Zr.div`
  flex: 1;
  min-width: 220px;
  background-color: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-lg);
  position: relative;
  overflow: hidden;
  border: 1px solid transparent;
  border-image: linear-gradient(to bottom, ${e=>{let{color:t}=e;return t}}, transparent)
    1;
  border-top: 3px solid ${e=>{let{color:t}=e;return t}};

  /* Cyberpunk angular corner */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 15px),
    calc(100% - 15px) 100%,
    0 100%
  );

  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.65);

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${e=>{let{color:t}=e;return t}};
    opacity: 0.05;
    z-index: -1;
  }
`,Sv=Zr.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,kv=Zr.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`,Ev=Zr.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  position: relative;
  z-index: 2;
`,Cv=Zr(tt)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: rgba(86, 204, 242, 0.2);
  color: var(--color-text-primary);
  border: 1px solid var(--color-accent);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(86, 204, 242, 0.4);
    background-color: rgba(86, 204, 242, 0.3);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(86, 204, 242, 0.2),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,Pv=Zr(tt)`
  padding: var(--spacing-md) var(--spacing-lg);
  background-color: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  position: relative;
  overflow: hidden;

  /* Clip path for cyberpunk button style */
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 8px),
    calc(100% - 8px) 100%,
    0 100%
  );

  &:hover {
    transform: translateY(-5px);
    border-color: var(--color-text-secondary);
    box-shadow: 0 5px 15px rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: left 0.7s ease;
  }

  &:hover::before {
    left: 100%;
  }
`,Tv=Zr.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-md) 0;
  position: relative;
  z-index: 2;
`,jv=Zr.li`
  margin-bottom: var(--spacing-sm);
  padding-left: var(--spacing-lg);
  position: relative;
  font-size: 1.05rem;
  color: var(--color-text-secondary);
  line-height: 1.6;

  &::before {
    content: "${e=>{var t;return null!==(t=e.icon)&&void 0!==t?t:">"}}";
    position: absolute;
    left: 0;
    color: var(--color-accent);
    font-weight: bold;
  }

  strong {
    color: var(--color-text-primary);
  }
`,Dv=()=>(0,ac.jsxs)(ac.Fragment,{children:[(0,ac.jsxs)(mv,{children:[(0,ac.jsxs)(gv,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:["About the ",(0,ac.jsx)("span",{className:"highlight",children:"Card Portfolio"})]}),(0,ac.jsxs)(vv,{children:[(0,ac.jsx)(yv,{children:"The Concept"}),(0,ac.jsx)(bv,{children:"Welcome to the portfolio card game! This project reimagines the traditional portfolio website as an interactive card collection, inspired by popular card games like Hearthstone and Legends of Runeterra."}),(0,ac.jsx)(bv,{children:"Instead of scrolling through static pages, you can explore my skills, projects, and experiences as collectible cards that you can browse, filter, and add to your own personal deck. This approach creates a more engaging and personalized way to learn about my work and background."})]}),(0,ac.jsxs)(vv,{children:[(0,ac.jsx)(yv,{children:"How It Works"}),(0,ac.jsx)(bv,{children:"Each card represents a different aspect of my professional profile. Browse through the collection, click on cards to view detailed information, and add your favorites to your deck to create your own personalized view of my portfolio."}),(0,ac.jsxs)(xv,{children:[(0,ac.jsxs)(wv,{color:"var(--color-project)",children:[(0,ac.jsx)(Sv,{children:"Project Cards"}),(0,ac.jsx)(kv,{children:"These cards showcase the notable projects I've worked on, including technologies used, my role, and key outcomes."})]}),(0,ac.jsxs)(wv,{color:"var(--color-skill)",children:[(0,ac.jsx)(Sv,{children:"Skill Cards"}),(0,ac.jsx)(kv,{children:"These cards represent my technical and professional skills, including proficiency levels and years of experience."})]}),(0,ac.jsxs)(wv,{color:"var(--color-experience)",children:[(0,ac.jsx)(Sv,{children:"Experience Cards"}),(0,ac.jsx)(kv,{children:"These cards highlight my professional experience, including positions held, companies, and key achievements."})]})]}),(0,ac.jsx)(bv,{children:"Moreover, each card type has its own unique stats and attributes, allowing you to evaluate my skills and experiences in a fun and interactive way. You can filter cards by type, tag, or even combination, making it easy to find what you're looking for."}),(0,ac.jsxs)(xv,{children:[(0,ac.jsxs)(wv,{color:"var(--color-project)",children:[(0,ac.jsx)(Sv,{children:"Project Stats"}),(0,ac.jsx)(kv,{children:(0,ac.jsx)(Tv,{children:Object.entries(lp).map((e=>{let[t,n]=e;return["creativity","impact","difficulty"].includes(t)&&(0,ac.jsxs)(jv,{icon:n.icon,children:[(0,ac.jsx)("strong",{children:n.label}),": ",n.description]},t)}))})})]}),(0,ac.jsxs)(wv,{color:"var(--color-skill)",children:[(0,ac.jsx)(Sv,{children:"Skill Stats"}),(0,ac.jsx)(kv,{children:(0,ac.jsx)(Tv,{children:Object.entries(lp).map((e=>{let[t,n]=e;return["mastery","usageFrequency","comboPower"].includes(t)&&(0,ac.jsxs)(jv,{icon:n.icon,children:[(0,ac.jsx)("strong",{children:n.label}),": ",n.description]},t)}))})})]}),(0,ac.jsxs)(wv,{color:"var(--color-experience)",children:[(0,ac.jsx)(Sv,{children:"Experience Stats"}),(0,ac.jsx)(kv,{children:(0,ac.jsx)(Tv,{children:Object.entries(lp).map((e=>{let[t,n]=e;return["collaboration","impact","growth"].includes(t)&&(0,ac.jsxs)(jv,{icon:n.icon,children:[(0,ac.jsx)("strong",{children:n.label}),": ",n.description]},t)}))})})]})]})]}),(0,ac.jsxs)(vv,{children:[(0,ac.jsx)(yv,{children:"Why a Card Game?"}),(0,ac.jsx)(bv,{children:"I created this portfolio format because I wanted to offer a more interactive and engaging way to present my work. The card game metaphor allows you to actively explore and discover different aspects of my skills and experience, rather than simply reading a chronological resume or portfolio."}),(0,ac.jsx)(bv,{children:'Just as in card games where players build decks that reflect their play style and strategy, you can build a "deck" of my skills and experiences that resonates with what you\'re looking for. It transforms the portfolio viewing experience from passive consumption to active exploration.'})]}),(0,ac.jsxs)(vv,{children:[(0,ac.jsx)(yv,{children:"The Technology"}),(0,ac.jsx)(bv,{children:"This portfolio is built with React, TypeScript, Styled Components, and Framer Motion. I focused on creating smooth animations and transitions to enhance the card game feel while maintaining accessibility and performance."}),(0,ac.jsx)(bv,{children:"The cyberpunk styling is achieved through carefully crafted CSS using features like clip-path, linear-gradients, and pseudo-elements. The carousel component leverages Framer Motion's powerful animation capabilities to provide a seamless browsing experience."})]}),(0,ac.jsxs)(Ev,{children:[(0,ac.jsx)(Cv,{to:"/collection",children:"Explore the Collection"}),(0,ac.jsx)(Pv,{to:"/",children:"Back to Home"})]})]}),(0,ac.jsx)(ah,{})]}),Av=()=>(0,ac.jsxs)("div",{className:"orientation-warning",children:[(0,ac.jsx)("div",{className:"icon",children:(0,ac.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,ac.jsx)("rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}),(0,ac.jsx)("path",{d:"M12 18h.01"})]})}),(0,ac.jsx)("h2",{children:"Please Rotate Your Device"}),(0,ac.jsx)("p",{children:"This experience is optimized for landscape mode to maintain game immersion consistency."})]}),Rv=Zr.div`
  display: grid;
  grid-template-rows: 60px 1fr;
  grid-template-columns: 200px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main-content";
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: rgba(0, 0, 0, 0.5);

  ${ri} {
    grid-template-columns: 180px 1fr;
  }

  ${ni} {
    grid-template-columns: 160px 1fr;
    grid-template-rows: 50px 1fr;
  }

  ${ti} {
    grid-template-rows: auto 1fr;
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main-content";
  }
`,Mv=Zr.header`
  grid-area: header;
  background-color: rgba(0, 0, 0, 0.4);
  border-bottom: 1px solid var(--color-border);
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  z-index: 10;
  margin-top: 10px;

  ${ri} {
    padding: 0 var(--spacing-xxl);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      to right,
      transparent,
      var(--color-accent),
      transparent
    );
  }

  ${ti} {
    padding: var(--spacing-sm) var(--spacing-md);
    margin-top: 5px;
    flex-wrap: wrap;
    justify-content: center;
  }
`,Lv=Zr(tt)`
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--color-text-primary);
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);

  span {
    color: var(--color-accent);
  }

  ${ni} {
    font-size: 1.2rem;
  }

  ${ti} {
    font-size: 1.1rem;
    margin-bottom: var(--spacing-xs);
  }
`,_v=Zr.div`
  display: flex;
  margin-left: var(--spacing-xl);
  gap: var(--spacing-md);
  height: 100%;

  ${ni} {
    margin-left: var(--spacing-lg);
    gap: var(--spacing-sm);
  }

  ${ti} {
    margin-left: 0;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
    height: auto;
  }
`,zv=Zr(tt)`
  display: flex;
  align-items: center;
  padding: 0 var(--spacing-lg);
  color: ${e=>e.active?"var(--color-accent)":"var(--color-text-secondary)"};
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-size: 0.9rem;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${e=>e.active?"var(--color-accent)":"transparent"};
  }

  &:hover {
    color: var(--color-text-primary);

    &::after {
      background-color: ${e=>e.active?"var(--color-accent)":"var(--color-text-secondary)"};
    }
  }

  ${ni} {
    padding: 0 var(--spacing-md);
    font-size: 0.8rem;
  }

  ${ti} {
    padding: var(--spacing-xs) var(--spacing-sm);
    font-size: 0.75rem;
  }
`,Ov=()=>{const e=X(),t=t=>e.pathname===t;return(0,ac.jsxs)(Rv,{children:[(0,ac.jsxs)(Mv,{children:[(0,ac.jsxs)(Lv,{to:"/",children:["Card",(0,ac.jsx)("span",{children:"Portfolio"})]}),(0,ac.jsxs)(_v,{children:[(0,ac.jsx)(zv,{to:"/",active:!1,children:"Home"}),(0,ac.jsx)(zv,{to:"/collection",active:t("/collection"),children:"Collection"}),(0,ac.jsx)(zv,{to:"/profile",active:t("/profile"),children:"Profile"}),(0,ac.jsx)(zv,{to:"/about",active:!1,children:"About"})]})]}),(0,ac.jsx)(me,{})]})},Fv=()=>(0,ac.jsxs)(Je,{basename:"/",children:[(0,ac.jsx)(oi,{}),(0,ac.jsx)(Av,{}),(0,ac.jsx)("div",{className:"app-content",children:(0,ac.jsxs)(ye,{children:[(0,ac.jsx)(ge,{path:"/",element:(0,ac.jsx)(gh,{})}),(0,ac.jsxs)(ge,{element:(0,ac.jsx)(Ov,{}),children:[(0,ac.jsx)(ge,{path:"/collection",element:(0,ac.jsx)(yg,{})}),(0,ac.jsx)(ge,{path:"/profile",element:(0,ac.jsx)(hv,{})})]}),(0,ac.jsx)(ge,{path:"/about",element:(0,ac.jsx)(Dv,{})})]})})]}),Nv=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:i,getLCP:a,getTTFB:o}=t;n(e),r(e),i(e),a(e),o(e)}))};t.createRoot(document.getElementById("root")).render((0,ac.jsx)(e.StrictMode,{children:(0,ac.jsx)(Fv,{})})),Nv()})()})();
//# sourceMappingURL=main.c10cf39f.js.map