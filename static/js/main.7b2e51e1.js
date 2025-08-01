/*! For license information please see main.7b2e51e1.js.LICENSE.txt */
(()=>{var e={4:(e,t,n)=>{"use strict";var r=n(853),o=n(43),i=n(950);function a(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function l(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function c(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function u(e){if(l(e)!==e)throw Error(a(188))}function d(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e;for(e=e.child;null!==e;){if(null!==(t=d(e)))return t;e=e.sibling}return null}var p=Object.assign,f=Symbol.for("react.element"),h=Symbol.for("react.transitional.element"),m=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),v=Symbol.for("react.strict_mode"),y=Symbol.for("react.profiler"),b=Symbol.for("react.provider"),x=Symbol.for("react.consumer"),w=Symbol.for("react.context"),S=Symbol.for("react.forward_ref"),k=Symbol.for("react.suspense"),E=Symbol.for("react.suspense_list"),C=Symbol.for("react.memo"),T=Symbol.for("react.lazy");Symbol.for("react.scope");var P=Symbol.for("react.activity");Symbol.for("react.legacy_hidden"),Symbol.for("react.tracing_marker");var _=Symbol.for("react.memo_cache_sentinel");Symbol.for("react.view_transition");var j=Symbol.iterator;function A(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=j&&e[j]||e["@@iterator"])?e:null}var R=Symbol.for("react.client.reference");function O(e){if(null==e)return null;if("function"===typeof e)return e.$$typeof===R?null:e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case g:return"Fragment";case y:return"Profiler";case v:return"StrictMode";case k:return"Suspense";case E:return"SuspenseList";case P:return"Activity"}if("object"===typeof e)switch(e.$$typeof){case m:return"Portal";case w:return(e.displayName||"Context")+".Provider";case x:return(e._context.displayName||"Context")+".Consumer";case S:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case C:return null!==(t=e.displayName||null)?t:O(e.type)||"Memo";case T:t=e._payload,e=e._init;try{return O(e(t))}catch(n){}}return null}var D=Array.isArray,L=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,z=i.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,N={pending:!1,data:null,method:null,action:null},F=[],I=-1;function M(e){return{current:e}}function $(e){0>I||(e.current=F[I],F[I]=null,I--)}function B(e,t){I++,F[I]=e.current,e.current=t}var V=M(null),U=M(null),H=M(null),W=M(null);function Y(e,t){switch(B(H,t),B(U,e),B(V,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?od(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)e=id(t=od(t),e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}$(V),B(V,e)}function K(){$(V),$(U),$(H)}function Q(e){null!==e.memoizedState&&B(W,e);var t=V.current,n=id(t,e.type);t!==n&&(B(U,e),B(V,n))}function X(e){U.current===e&&($(V),$(U)),W.current===e&&($(W),Qd._currentValue=N)}var q=Object.prototype.hasOwnProperty,G=r.unstable_scheduleCallback,J=r.unstable_cancelCallback,Z=r.unstable_shouldYield,ee=r.unstable_requestPaint,te=r.unstable_now,ne=r.unstable_getCurrentPriorityLevel,re=r.unstable_ImmediatePriority,oe=r.unstable_UserBlockingPriority,ie=r.unstable_NormalPriority,ae=r.unstable_LowPriority,se=r.unstable_IdlePriority,le=r.log,ce=r.unstable_setDisableYieldValue,ue=null,de=null;function pe(e){if("function"===typeof le&&ce(e),de&&"function"===typeof de.setStrictMode)try{de.setStrictMode(ue,e)}catch(t){}}var fe=Math.clz32?Math.clz32:function(e){return 0===(e>>>=0)?32:31-(he(e)/me|0)|0},he=Math.log,me=Math.LN2;var ge=256,ve=4194304;function ye(e){var t=42&e;if(0!==t)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194048&e;case 4194304:case 8388608:case 16777216:case 33554432:return 62914560&e;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function be(e,t,n){var r=e.pendingLanes;if(0===r)return 0;var o=0,i=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var s=134217727&r;return 0!==s?0!==(r=s&~i)?o=ye(r):0!==(a&=s)?o=ye(a):n||0!==(n=s&~e)&&(o=ye(n)):0!==(s=r&~i)?o=ye(s):0!==a?o=ye(a):n||0!==(n=r&~e)&&(o=ye(n)),0===o?0:0!==t&&t!==o&&0===(t&i)&&((i=o&-o)>=(n=t&-t)||32===i&&0!==(4194048&n))?t:o}function xe(e,t){return 0===(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)}function we(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function Se(){var e=ge;return 0===(4194048&(ge<<=1))&&(ge=256),e}function ke(){var e=ve;return 0===(62914560&(ve<<=1))&&(ve=4194304),e}function Ee(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ce(e,t){e.pendingLanes|=t,268435456!==t&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Te(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-fe(t);e.entangledLanes|=t,e.entanglements[r]=1073741824|e.entanglements[r]|4194090&n}function Pe(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-fe(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}function _e(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function je(e){return 2<(e&=-e)?8<e?0!==(134217727&e)?32:268435456:8:2}function Ae(){var e=z.p;return 0!==e?e:void 0===(e=window.event)?32:cp(e.type)}var Re=Math.random().toString(36).slice(2),Oe="__reactFiber$"+Re,De="__reactProps$"+Re,Le="__reactContainer$"+Re,ze="__reactEvents$"+Re,Ne="__reactListeners$"+Re,Fe="__reactHandles$"+Re,Ie="__reactResources$"+Re,Me="__reactMarker$"+Re;function $e(e){delete e[Oe],delete e[De],delete e[ze],delete e[Ne],delete e[Fe]}function Be(e){var t=e[Oe];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Le]||n[Oe]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=bd(e);null!==e;){if(n=e[Oe])return n;e=bd(e)}return t}n=(e=n).parentNode}return null}function Ve(e){if(e=e[Oe]||e[Le]){var t=e.tag;if(5===t||6===t||13===t||26===t||27===t||3===t)return e}return null}function Ue(e){var t=e.tag;if(5===t||26===t||27===t||6===t)return e.stateNode;throw Error(a(33))}function He(e){var t=e[Ie];return t||(t=e[Ie]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function We(e){e[Me]=!0}var Ye=new Set,Ke={};function Qe(e,t){Xe(e,t),Xe(e+"Capture",t)}function Xe(e,t){for(Ke[e]=t,e=0;e<t.length;e++)Ye.add(t[e])}var qe,Ge,Je=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ze={},et={};function tt(e,t,n){if(o=t,q.call(et,o)||!q.call(Ze,o)&&(Je.test(o)?et[o]=!0:(Ze[o]=!0,0)))if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":return void e.removeAttribute(t);case"boolean":var r=t.toLowerCase().slice(0,5);if("data-"!==r&&"aria-"!==r)return void e.removeAttribute(t)}e.setAttribute(t,""+n)}var o}function nt(e,t,n){if(null===n)e.removeAttribute(t);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(t)}e.setAttribute(t,""+n)}}function rt(e,t,n,r){if(null===r)e.removeAttribute(n);else{switch(typeof r){case"undefined":case"function":case"symbol":case"boolean":return void e.removeAttribute(n)}e.setAttributeNS(t,n,""+r)}}function ot(e){if(void 0===qe)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);qe=t&&t[1]||"",Ge=-1<n.stack.indexOf("\n    at")?" (<anonymous>)":-1<n.stack.indexOf("@")?"@unknown:0:0":""}return"\n"+qe+e+Ge}var it=!1;function at(e,t){if(!e||it)return"";it=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(n,[])}catch(o){var r=o}Reflect.construct(e,[],n)}else{try{n.call()}catch(i){r=i}e.call(n.prototype)}}else{try{throw Error()}catch(a){r=a}(n=e())&&"function"===typeof n.catch&&n.catch((function(){}))}}catch(s){if(s&&r&&"string"===typeof s.stack)return[s.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var o=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,"name");o&&o.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=r.DetermineComponentFrameRoot(),a=i[0],s=i[1];if(a&&s){var l=a.split("\n"),c=s.split("\n");for(o=r=0;r<l.length&&!l[r].includes("DetermineComponentFrameRoot");)r++;for(;o<c.length&&!c[o].includes("DetermineComponentFrameRoot");)o++;if(r===l.length||o===c.length)for(r=l.length-1,o=c.length-1;1<=r&&0<=o&&l[r]!==c[o];)o--;for(;1<=r&&0<=o;r--,o--)if(l[r]!==c[o]){if(1!==r||1!==o)do{if(r--,0>--o||l[r]!==c[o]){var u="\n"+l[r].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}}while(1<=r&&0<=o);break}}}finally{it=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:"")?ot(n):""}function st(e){switch(e.tag){case 26:case 27:case 5:return ot(e.type);case 16:return ot("Lazy");case 13:return ot("Suspense");case 19:return ot("SuspenseList");case 0:case 15:return at(e.type,!1);case 11:return at(e.type.render,!1);case 1:return at(e.type,!0);case 31:return ot("Activity");default:return""}}function lt(e){try{var t="";do{t+=st(e),e=e.return}while(e);return t}catch(n){return"\nError generating stack: "+n.message+"\n"+n.stack}}function ct(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function ut(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function dt(e){e._valueTracker||(e._valueTracker=function(e){var t=ut(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function pt(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ut(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function ft(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}var ht=/[\n"\\]/g;function mt(e){return e.replace(ht,(function(e){return"\\"+e.charCodeAt(0).toString(16)+" "}))}function gt(e,t,n,r,o,i,a,s){e.name="",null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a?e.type=a:e.removeAttribute("type"),null!=t?"number"===a?(0===t&&""===e.value||e.value!=t)&&(e.value=""+ct(t)):e.value!==""+ct(t)&&(e.value=""+ct(t)):"submit"!==a&&"reset"!==a||e.removeAttribute("value"),null!=t?yt(e,a,ct(t)):null!=n?yt(e,a,ct(n)):null!=r&&e.removeAttribute("value"),null==o&&null!=i&&(e.defaultChecked=!!i),null!=o&&(e.checked=o&&"function"!==typeof o&&"symbol"!==typeof o),null!=s&&"function"!==typeof s&&"symbol"!==typeof s&&"boolean"!==typeof s?e.name=""+ct(s):e.removeAttribute("name")}function vt(e,t,n,r,o,i,a,s){if(null!=i&&"function"!==typeof i&&"symbol"!==typeof i&&"boolean"!==typeof i&&(e.type=i),null!=t||null!=n){if(!("submit"!==i&&"reset"!==i||void 0!==t&&null!==t))return;n=null!=n?""+ct(n):"",t=null!=t?""+ct(t):n,s||t===e.value||(e.value=t),e.defaultValue=t}r="function"!==typeof(r=null!=r?r:o)&&"symbol"!==typeof r&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,null!=a&&"function"!==typeof a&&"symbol"!==typeof a&&"boolean"!==typeof a&&(e.name=a)}function yt(e,t,n){"number"===t&&ft(e.ownerDocument)===e||e.defaultValue===""+n||(e.defaultValue=""+n)}function bt(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ct(n),t=null,o=0;o<e.length;o++){if(e[o].value===n)return e[o].selected=!0,void(r&&(e[o].defaultSelected=!0));null!==t||e[o].disabled||(t=e[o])}null!==t&&(t.selected=!0)}}function xt(e,t,n){null==t||((t=""+ct(t))!==e.value&&(e.value=t),null!=n)?e.defaultValue=null!=n?""+ct(n):"":e.defaultValue!==t&&(e.defaultValue=t)}function wt(e,t,n,r){if(null==t){if(null!=r){if(null!=n)throw Error(a(92));if(D(r)){if(1<r.length)throw Error(a(93));r=r[0]}n=r}null==n&&(n=""),t=n}n=ct(t),e.defaultValue=n,(r=e.textContent)===n&&""!==r&&null!==r&&(e.value=r)}function St(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var kt=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Et(e,t,n){var r=0===t.indexOf("--");null==n||"boolean"===typeof n||""===n?r?e.setProperty(t,""):"float"===t?e.cssFloat="":e[t]="":r?e.setProperty(t,n):"number"!==typeof n||0===n||kt.has(t)?"float"===t?e.cssFloat=n:e[t]=(""+n).trim():e[t]=n+"px"}function Ct(e,t,n){if(null!=t&&"object"!==typeof t)throw Error(a(62));if(e=e.style,null!=n){for(var r in n)!n.hasOwnProperty(r)||null!=t&&t.hasOwnProperty(r)||(0===r.indexOf("--")?e.setProperty(r,""):"float"===r?e.cssFloat="":e[r]="");for(var o in t)r=t[o],t.hasOwnProperty(o)&&n[o]!==r&&Et(e,o,r)}else for(var i in t)t.hasOwnProperty(i)&&Et(e,i,t[i])}function Tt(e){if(-1===e.indexOf("-"))return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pt=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),_t=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function jt(e){return _t.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}var At=null;function Rt(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var Ot=null,Dt=null;function Lt(e){var t=Ve(e);if(t&&(e=t.stateNode)){var n=e[De]||null;e:switch(e=t.stateNode,t.type){case"input":if(gt(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll('input[name="'+mt(""+t)+'"][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=r[De]||null;if(!o)throw Error(a(90));gt(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name)}}for(t=0;t<n.length;t++)(r=n[t]).form===e.form&&pt(r)}break e;case"textarea":xt(e,n.value,n.defaultValue);break e;case"select":null!=(t=n.value)&&bt(e,!!n.multiple,t,!1)}}}var zt=!1;function Nt(e,t,n){if(zt)return e(t,n);zt=!0;try{return e(t)}finally{if(zt=!1,(null!==Ot||null!==Dt)&&(Bc(),Ot&&(t=Ot,e=Dt,Dt=Ot=null,Lt(t),e)))for(t=0;t<e.length;t++)Lt(e[t])}}function Ft(e,t){var n=e.stateNode;if(null===n)return null;var r=n[De]||null;if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(a(231,t,typeof n));return n}var It=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),Mt=!1;if(It)try{var $t={};Object.defineProperty($t,"passive",{get:function(){Mt=!0}}),window.addEventListener("test",$t,$t),window.removeEventListener("test",$t,$t)}catch(Dp){Mt=!1}var Bt=null,Vt=null,Ut=null;function Ht(){if(Ut)return Ut;var e,t,n=Vt,r=n.length,o="value"in Bt?Bt.value:Bt.textContent,i=o.length;for(e=0;e<r&&n[e]===o[e];e++);var a=r-e;for(t=1;t<=a&&n[r-t]===o[i-t];t++);return Ut=o.slice(e,1<t?1-t:void 0)}function Wt(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function Yt(){return!0}function Kt(){return!1}function Qt(e){function t(t,n,r,o,i){for(var a in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=o,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(a)&&(t=e[a],this[a]=t?t(o):o[a]);return this.isDefaultPrevented=(null!=o.defaultPrevented?o.defaultPrevented:!1===o.returnValue)?Yt:Kt,this.isPropagationStopped=Kt,this}return p(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=Yt)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=Yt)},persist:function(){},isPersistent:Yt}),t}var Xt,qt,Gt,Jt={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zt=Qt(Jt),en=p({},Jt,{view:0,detail:0}),tn=Qt(en),nn=p({},en,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Gt&&(Gt&&"mousemove"===e.type?(Xt=e.screenX-Gt.screenX,qt=e.screenY-Gt.screenY):qt=Xt=0,Gt=e),Xt)},movementY:function(e){return"movementY"in e?e.movementY:qt}}),rn=Qt(nn),on=Qt(p({},nn,{dataTransfer:0})),an=Qt(p({},en,{relatedTarget:0})),sn=Qt(p({},Jt,{animationName:0,elapsedTime:0,pseudoElement:0})),ln=Qt(p({},Jt,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}})),cn=Qt(p({},Jt,{data:0})),un={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},dn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function fn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=pn[e])&&!!t[e]}function hn(){return fn}var mn=Qt(p({},en,{key:function(e){if(e.key){var t=un[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=Wt(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?dn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hn,charCode:function(e){return"keypress"===e.type?Wt(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?Wt(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}})),gn=Qt(p({},nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),vn=Qt(p({},en,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hn})),yn=Qt(p({},Jt,{propertyName:0,elapsedTime:0,pseudoElement:0})),bn=Qt(p({},nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),xn=Qt(p({},Jt,{newState:0,oldState:0})),wn=[9,13,27,32],Sn=It&&"CompositionEvent"in window,kn=null;It&&"documentMode"in document&&(kn=document.documentMode);var En=It&&"TextEvent"in window&&!kn,Cn=It&&(!Sn||kn&&8<kn&&11>=kn),Tn=String.fromCharCode(32),Pn=!1;function _n(e,t){switch(e){case"keyup":return-1!==wn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jn(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var An=!1;var Rn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function On(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Rn[e.type]:"textarea"===t}function Dn(e,t,n,r){Ot?Dt?Dt.push(r):Dt=[r]:Ot=r,0<(t=Hu(t,"onChange")).length&&(n=new Zt("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Ln=null,zn=null;function Nn(e){Nu(e,0)}function Fn(e){if(pt(Ue(e)))return e}function In(e,t){if("change"===e)return t}var Mn=!1;if(It){var $n;if(It){var Bn="oninput"in document;if(!Bn){var Vn=document.createElement("div");Vn.setAttribute("oninput","return;"),Bn="function"===typeof Vn.oninput}$n=Bn}else $n=!1;Mn=$n&&(!document.documentMode||9<document.documentMode)}function Un(){Ln&&(Ln.detachEvent("onpropertychange",Hn),zn=Ln=null)}function Hn(e){if("value"===e.propertyName&&Fn(zn)){var t=[];Dn(t,zn,e,Rt(e)),Nt(Nn,t)}}function Wn(e,t,n){"focusin"===e?(Un(),zn=n,(Ln=t).attachEvent("onpropertychange",Hn)):"focusout"===e&&Un()}function Yn(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Fn(zn)}function Kn(e,t){if("click"===e)return Fn(t)}function Qn(e,t){if("input"===e||"change"===e)return Fn(t)}var Xn="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function qn(e,t){if(Xn(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!q.call(t,o)||!Xn(e[o],t[o]))return!1}return!0}function Gn(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Jn(e,t){var n,r=Gn(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=Gn(r)}}function Zn(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?Zn(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function er(e){for(var t=ft((e=null!=e&&null!=e.ownerDocument&&null!=e.ownerDocument.defaultView?e.ownerDocument.defaultView:window).document);t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=ft((e=t.contentWindow).document)}return t}function tr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}var nr=It&&"documentMode"in document&&11>=document.documentMode,rr=null,or=null,ir=null,ar=!1;function sr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;ar||null==rr||rr!==ft(r)||("selectionStart"in(r=rr)&&tr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},ir&&qn(ir,r)||(ir=r,0<(r=Hu(or,"onSelect")).length&&(t=new Zt("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=rr)))}function lr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var cr={animationend:lr("Animation","AnimationEnd"),animationiteration:lr("Animation","AnimationIteration"),animationstart:lr("Animation","AnimationStart"),transitionrun:lr("Transition","TransitionRun"),transitionstart:lr("Transition","TransitionStart"),transitioncancel:lr("Transition","TransitionCancel"),transitionend:lr("Transition","TransitionEnd")},ur={},dr={};function pr(e){if(ur[e])return ur[e];if(!cr[e])return e;var t,n=cr[e];for(t in n)if(n.hasOwnProperty(t)&&t in dr)return ur[e]=n[t];return e}It&&(dr=document.createElement("div").style,"AnimationEvent"in window||(delete cr.animationend.animation,delete cr.animationiteration.animation,delete cr.animationstart.animation),"TransitionEvent"in window||delete cr.transitionend.transition);var fr=pr("animationend"),hr=pr("animationiteration"),mr=pr("animationstart"),gr=pr("transitionrun"),vr=pr("transitionstart"),yr=pr("transitioncancel"),br=pr("transitionend"),xr=new Map,wr="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(e,t){xr.set(e,t),Qe(t,[e])}wr.push("scrollEnd");var kr=new WeakMap;function Er(e,t){if("object"===typeof e&&null!==e){var n=kr.get(e);return void 0!==n?n:(t={value:e,source:t,stack:lt(t)},kr.set(e,t),t)}return{value:e,source:t,stack:lt(t)}}var Cr=[],Tr=0,Pr=0;function _r(){for(var e=Tr,t=Pr=Tr=0;t<e;){var n=Cr[t];Cr[t++]=null;var r=Cr[t];Cr[t++]=null;var o=Cr[t];Cr[t++]=null;var i=Cr[t];if(Cr[t++]=null,null!==r&&null!==o){var a=r.pending;null===a?o.next=o:(o.next=a.next,a.next=o),r.pending=o}0!==i&&Or(n,o,i)}}function jr(e,t,n,r){Cr[Tr++]=e,Cr[Tr++]=t,Cr[Tr++]=n,Cr[Tr++]=r,Pr|=r,e.lanes|=r,null!==(e=e.alternate)&&(e.lanes|=r)}function Ar(e,t,n,r){return jr(e,t,n,r),Dr(e)}function Rr(e,t){return jr(e,null,null,t),Dr(e)}function Or(e,t,n){e.lanes|=n;var r=e.alternate;null!==r&&(r.lanes|=n);for(var o=!1,i=e.return;null!==i;)i.childLanes|=n,null!==(r=i.alternate)&&(r.childLanes|=n),22===i.tag&&(null===(e=i.stateNode)||1&e._visibility||(o=!0)),e=i,i=i.return;return 3===e.tag?(i=e.stateNode,o&&null!==t&&(o=31-fe(n),null===(r=(e=i.hiddenUpdates)[o])?e[o]=[t]:r.push(t),t.lane=536870912|n),i):null}function Dr(e){if(50<Oc)throw Oc=0,Dc=null,Error(a(185));for(var t=e.return;null!==t;)t=(e=t).return;return 3===e.tag?e.stateNode:null}var Lr={};function zr(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nr(e,t,n,r){return new zr(e,t,n,r)}function Fr(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ir(e,t){var n=e.alternate;return null===n?((n=Nr(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=65011712&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function Mr(e,t){e.flags&=65011714;var n=e.alternate;return null===n?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function $r(e,t,n,r,o,i){var s=0;if(r=e,"function"===typeof e)Fr(e)&&(s=1);else if("string"===typeof e)s=function(e,t,n){if(1===n||null!=t.itemProp)return!1;switch(e){case"meta":case"title":return!0;case"style":if("string"!==typeof t.precedence||"string"!==typeof t.href||""===t.href)break;return!0;case"link":if("string"!==typeof t.rel||"string"!==typeof t.href||""===t.href||t.onLoad||t.onError)break;return"stylesheet"!==t.rel||(e=t.disabled,"string"===typeof t.precedence&&null==e);case"script":if(t.async&&"function"!==typeof t.async&&"symbol"!==typeof t.async&&!t.onLoad&&!t.onError&&t.src&&"string"===typeof t.src)return!0}return!1}(e,n,V.current)?26:"html"===e||"head"===e||"body"===e?27:5;else e:switch(e){case P:return(e=Nr(31,n,t,o)).elementType=P,e.lanes=i,e;case g:return Br(n.children,o,i,t);case v:s=8,o|=24;break;case y:return(e=Nr(12,n,t,2|o)).elementType=y,e.lanes=i,e;case k:return(e=Nr(13,n,t,o)).elementType=k,e.lanes=i,e;case E:return(e=Nr(19,n,t,o)).elementType=E,e.lanes=i,e;default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case b:case w:s=10;break e;case x:s=9;break e;case S:s=11;break e;case C:s=14;break e;case T:s=16,r=null;break e}s=29,n=Error(a(130,null===e?"null":typeof e,"")),r=null}return(t=Nr(s,n,t,o)).elementType=e,t.type=r,t.lanes=i,t}function Br(e,t,n,r){return(e=Nr(7,e,r,t)).lanes=n,e}function Vr(e,t,n){return(e=Nr(6,e,null,t)).lanes=n,e}function Ur(e,t,n){return(t=Nr(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Hr=[],Wr=0,Yr=null,Kr=0,Qr=[],Xr=0,qr=null,Gr=1,Jr="";function Zr(e,t){Hr[Wr++]=Kr,Hr[Wr++]=Yr,Yr=e,Kr=t}function eo(e,t,n){Qr[Xr++]=Gr,Qr[Xr++]=Jr,Qr[Xr++]=qr,qr=e;var r=Gr;e=Jr;var o=32-fe(r)-1;r&=~(1<<o),n+=1;var i=32-fe(t)+o;if(30<i){var a=o-o%5;i=(r&(1<<a)-1).toString(32),r>>=a,o-=a,Gr=1<<32-fe(t)+o|n<<o|r,Jr=i+e}else Gr=1<<i|n<<o|r,Jr=e}function to(e){null!==e.return&&(Zr(e,1),eo(e,1,0))}function no(e){for(;e===Yr;)Yr=Hr[--Wr],Hr[Wr]=null,Kr=Hr[--Wr],Hr[Wr]=null;for(;e===qr;)qr=Qr[--Xr],Qr[Xr]=null,Jr=Qr[--Xr],Qr[Xr]=null,Gr=Qr[--Xr],Qr[Xr]=null}var ro=null,oo=null,io=!1,ao=null,so=!1,lo=Error(a(519));function co(e){throw go(Er(Error(a(418,"")),e)),lo}function uo(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[Oe]=e,t[De]=r,n){case"dialog":Fu("cancel",t),Fu("close",t);break;case"iframe":case"object":case"embed":Fu("load",t);break;case"video":case"audio":for(n=0;n<Lu.length;n++)Fu(Lu[n],t);break;case"source":Fu("error",t);break;case"img":case"image":case"link":Fu("error",t),Fu("load",t);break;case"details":Fu("toggle",t);break;case"input":Fu("invalid",t),vt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0),dt(t);break;case"select":Fu("invalid",t);break;case"textarea":Fu("invalid",t),wt(t,r.value,r.defaultValue,r.children),dt(t)}"string"!==typeof(n=r.children)&&"number"!==typeof n&&"bigint"!==typeof n||t.textContent===""+n||!0===r.suppressHydrationWarning||qu(t.textContent,n)?(null!=r.popover&&(Fu("beforetoggle",t),Fu("toggle",t)),null!=r.onScroll&&Fu("scroll",t),null!=r.onScrollEnd&&Fu("scrollend",t),null!=r.onClick&&(t.onclick=Gu),t=!0):t=!1,t||co(e)}function po(e){for(ro=e.return;ro;)switch(ro.tag){case 5:case 13:return void(so=!1);case 27:case 3:return void(so=!0);default:ro=ro.return}}function fo(e){if(e!==ro)return!1;if(!io)return po(e),io=!0,!1;var t,n=e.tag;if((t=3!==n&&27!==n)&&((t=5===n)&&(t=!("form"!==(t=e.type)&&"button"!==t)||ad(e.type,e.memoizedProps)),t=!t),t&&oo&&co(e),po(e),13===n){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(a(317));e:{for(e=e.nextSibling,n=0;e;){if(8===e.nodeType)if("/$"===(t=e.data)){if(0===n){oo=vd(e.nextSibling);break e}n--}else"$"!==t&&"$!"!==t&&"$?"!==t||n++;e=e.nextSibling}oo=null}}else 27===n?(n=oo,fd(e.type)?(e=yd,yd=null,oo=e):oo=n):oo=ro?vd(e.stateNode.nextSibling):null;return!0}function ho(){oo=ro=null,io=!1}function mo(){var e=ao;return null!==e&&(null===bc?bc=e:bc.push.apply(bc,e),ao=null),e}function go(e){null===ao?ao=[e]:ao.push(e)}var vo=M(null),yo=null,bo=null;function xo(e,t,n){B(vo,t._currentValue),t._currentValue=n}function wo(e){e._currentValue=vo.current,$(vo)}function So(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ko(e,t,n,r){var o=e.child;for(null!==o&&(o.return=e);null!==o;){var i=o.dependencies;if(null!==i){var s=o.child;i=i.firstContext;e:for(;null!==i;){var l=i;i=o;for(var c=0;c<t.length;c++)if(l.context===t[c]){i.lanes|=n,null!==(l=i.alternate)&&(l.lanes|=n),So(i.return,n,e),r||(s=null);break e}i=l.next}}else if(18===o.tag){if(null===(s=o.return))throw Error(a(341));s.lanes|=n,null!==(i=s.alternate)&&(i.lanes|=n),So(s,n,e),s=null}else s=o.child;if(null!==s)s.return=o;else for(s=o;null!==s;){if(s===e){s=null;break}if(null!==(o=s.sibling)){o.return=s.return,s=o;break}s=s.return}o=s}}function Eo(e,t,n,r){e=null;for(var o=t,i=!1;null!==o;){if(!i)if(0!==(524288&o.flags))i=!0;else if(0!==(262144&o.flags))break;if(10===o.tag){var s=o.alternate;if(null===s)throw Error(a(387));if(null!==(s=s.memoizedProps)){var l=o.type;Xn(o.pendingProps.value,s.value)||(null!==e?e.push(l):e=[l])}}else if(o===W.current){if(null===(s=o.alternate))throw Error(a(387));s.memoizedState.memoizedState!==o.memoizedState.memoizedState&&(null!==e?e.push(Qd):e=[Qd])}o=o.return}null!==e&&ko(t,e,n,r),t.flags|=262144}function Co(e){for(e=e.firstContext;null!==e;){if(!Xn(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function To(e){yo=e,bo=null,null!==(e=e.dependencies)&&(e.firstContext=null)}function Po(e){return jo(yo,e)}function _o(e,t){return null===yo&&To(e),jo(e,t)}function jo(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},null===bo){if(null===e)throw Error(a(308));bo=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else bo=bo.next=t;return n}var Ao="undefined"!==typeof AbortController?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach((function(e){return e()}))}},Ro=r.unstable_scheduleCallback,Oo=r.unstable_NormalPriority,Do={$$typeof:w,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Ao,data:new Map,refCount:0}}function zo(e){e.refCount--,0===e.refCount&&Ro(Oo,(function(){e.controller.abort()}))}var No=null,Fo=0,Io=0,Mo=null;function $o(){if(0===--Fo&&null!==No){null!==Mo&&(Mo.status="fulfilled");var e=No;No=null,Io=0,Mo=null;for(var t=0;t<e.length;t++)(0,e[t])()}}var Bo=L.S;L.S=function(e,t){"object"===typeof t&&null!==t&&"function"===typeof t.then&&function(e,t){if(null===No){var n=No=[];Fo=0,Io=ju(),Mo={status:"pending",value:void 0,then:function(e){n.push(e)}}}Fo++,t.then($o,$o)}(0,t),null!==Bo&&Bo(e,t)};var Vo=M(null);function Uo(){var e=Vo.current;return null!==e?e:rc.pooledCache}function Ho(e,t){B(Vo,null===t?Vo.current:t.pool)}function Wo(){var e=Uo();return null===e?null:{parent:Do._currentValue,pool:e}}var Yo=Error(a(460)),Ko=Error(a(474)),Qo=Error(a(542)),Xo={then:function(){}};function qo(e){return"fulfilled"===(e=e.status)||"rejected"===e}function Go(){}function Jo(e,t,n){switch(void 0===(n=e[n])?e.push(t):n!==t&&(t.then(Go,Go),t=n),t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e;default:if("string"===typeof t.status)t.then(Go,Go);else{if(null!==(e=rc)&&100<e.shellSuspendCounter)throw Error(a(482));(e=t).status="pending",e.then((function(e){if("pending"===t.status){var n=t;n.status="fulfilled",n.value=e}}),(function(e){if("pending"===t.status){var n=t;n.status="rejected",n.reason=e}}))}switch(t.status){case"fulfilled":return t.value;case"rejected":throw ti(e=t.reason),e}throw Zo=t,Yo}}var Zo=null;function ei(){if(null===Zo)throw Error(a(459));var e=Zo;return Zo=null,e}function ti(e){if(e===Yo||e===Qo)throw Error(a(483))}var ni=!1;function ri(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ii(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ai(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&nc)){var o=r.pending;return null===o?t.next=t:(t.next=o.next,o.next=t),r.pending=t,t=Dr(e),Or(e,null,n),t}return jr(e,r,t,n),Dr(e)}function si(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194048&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}function li(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var o=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var a={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};null===i?o=i=a:i=i.next=a,n=n.next}while(null!==n);null===i?o=i=t:i=i.next=t}else o=i=t;return n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,callbacks:r.callbacks},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var ci=!1;function ui(){if(ci){if(null!==Mo)throw Mo}}function di(e,t,n,r){ci=!1;var o=e.updateQueue;ni=!1;var i=o.firstBaseUpdate,a=o.lastBaseUpdate,s=o.shared.pending;if(null!==s){o.shared.pending=null;var l=s,c=l.next;l.next=null,null===a?i=c:a.next=c,a=l;var u=e.alternate;null!==u&&((s=(u=u.updateQueue).lastBaseUpdate)!==a&&(null===s?u.firstBaseUpdate=c:s.next=c,u.lastBaseUpdate=l))}if(null!==i){var d=o.baseState;for(a=0,u=c=l=null,s=i;;){var f=-536870913&s.lane,h=f!==s.lane;if(h?(ic&f)===f:(r&f)===f){0!==f&&f===Io&&(ci=!0),null!==u&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var m=e,g=s;f=t;var v=n;switch(g.tag){case 1:if("function"===typeof(m=g.payload)){d=m.call(v,d,f);break e}d=m;break e;case 3:m.flags=-65537&m.flags|128;case 0:if(null===(f="function"===typeof(m=g.payload)?m.call(v,d,f):m)||void 0===f)break e;d=p({},d,f);break e;case 2:ni=!0}}null!==(f=s.callback)&&(e.flags|=64,h&&(e.flags|=8192),null===(h=o.callbacks)?o.callbacks=[f]:h.push(f))}else h={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},null===u?(c=u=h,l=d):u=u.next=h,a|=f;if(null===(s=s.next)){if(null===(s=o.shared.pending))break;s=(h=s).next,h.next=null,o.lastBaseUpdate=h,o.shared.pending=null}}null===u&&(l=d),o.baseState=l,o.firstBaseUpdate=c,o.lastBaseUpdate=u,null===i&&(o.shared.lanes=0),fc|=a,e.lanes=a,e.memoizedState=d}}function pi(e,t){if("function"!==typeof e)throw Error(a(191,e));e.call(t)}function fi(e,t){var n=e.callbacks;if(null!==n)for(e.callbacks=null,e=0;e<n.length;e++)pi(n[e],t)}var hi=M(null),mi=M(0);function gi(e,t){B(mi,e=dc),B(hi,t),dc=e|t.baseLanes}function vi(){B(mi,dc),B(hi,hi.current)}function yi(){dc=mi.current,$(hi),$(mi)}var bi=0,xi=null,wi=null,Si=null,ki=!1,Ei=!1,Ci=!1,Ti=0,Pi=0,_i=null,ji=0;function Ai(){throw Error(a(321))}function Ri(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Xn(e[n],t[n]))return!1;return!0}function Oi(e,t,n,r,o,i){return bi=i,xi=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,L.H=null===e||null===e.memoizedState?Ya:Ka,Ci=!1,i=n(r,o),Ci=!1,Ei&&(i=Li(t,n,r,o)),Di(e),i}function Di(e){L.H=Wa;var t=null!==wi&&null!==wi.next;if(bi=0,Si=wi=xi=null,ki=!1,Pi=0,_i=null,t)throw Error(a(300));null===e||Ps||null!==(e=e.dependencies)&&Co(e)&&(Ps=!0)}function Li(e,t,n,r){xi=e;var o=0;do{if(Ei&&(_i=null),Pi=0,Ei=!1,25<=o)throw Error(a(301));if(o+=1,Si=wi=null,null!=e.updateQueue){var i=e.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,null!=i.memoCache&&(i.memoCache.index=0)}L.H=Qa,i=t(n,r)}while(Ei);return i}function zi(){var e=L.H,t=e.useState()[0];return t="function"===typeof t.then?Bi(t):t,e=e.useState()[0],(null!==wi?wi.memoizedState:null)!==e&&(xi.flags|=1024),t}function Ni(){var e=0!==Ti;return Ti=0,e}function Fi(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Ii(e){if(ki){for(e=e.memoizedState;null!==e;){var t=e.queue;null!==t&&(t.pending=null),e=e.next}ki=!1}bi=0,Si=wi=xi=null,Ei=!1,Pi=Ti=0,_i=null}function Mi(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===Si?xi.memoizedState=Si=e:Si=Si.next=e,Si}function $i(){if(null===wi){var e=xi.alternate;e=null!==e?e.memoizedState:null}else e=wi.next;var t=null===Si?xi.memoizedState:Si.next;if(null!==t)Si=t,wi=e;else{if(null===e){if(null===xi.alternate)throw Error(a(467));throw Error(a(310))}e={memoizedState:(wi=e).memoizedState,baseState:wi.baseState,baseQueue:wi.baseQueue,queue:wi.queue,next:null},null===Si?xi.memoizedState=Si=e:Si=Si.next=e}return Si}function Bi(e){var t=Pi;return Pi+=1,null===_i&&(_i=[]),e=Jo(_i,e,t),t=xi,null===(null===Si?t.memoizedState:Si.next)&&(t=t.alternate,L.H=null===t||null===t.memoizedState?Ya:Ka),e}function Vi(e){if(null!==e&&"object"===typeof e){if("function"===typeof e.then)return Bi(e);if(e.$$typeof===w)return Po(e)}throw Error(a(438,String(e)))}function Ui(e){var t=null,n=xi.updateQueue;if(null!==n&&(t=n.memoCache),null==t){var r=xi.alternate;null!==r&&(null!==(r=r.updateQueue)&&(null!=(r=r.memoCache)&&(t={data:r.data.map((function(e){return e.slice()})),index:0})))}if(null==t&&(t={data:[],index:0}),null===n&&(n={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=n),n.memoCache=t,void 0===(n=t.data[t.index]))for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=_;return t.index++,n}function Hi(e,t){return"function"===typeof t?t(e):t}function Wi(e){return Yi($i(),wi,e)}function Yi(e,t,n){var r=e.queue;if(null===r)throw Error(a(311));r.lastRenderedReducer=n;var o=e.baseQueue,i=r.pending;if(null!==i){if(null!==o){var s=o.next;o.next=i.next,i.next=s}t.baseQueue=o=i,r.pending=null}if(i=e.baseState,null===o)e.memoizedState=i;else{var l=s=null,c=null,u=t=o.next,d=!1;do{var p=-536870913&u.lane;if(p!==u.lane?(ic&p)===p:(bi&p)===p){var f=u.revertLane;if(0===f)null!==c&&(c=c.next={lane:0,revertLane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),p===Io&&(d=!0);else{if((bi&f)===f){u=u.next,f===Io&&(d=!0);continue}p={lane:0,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=p,s=i):c=c.next=p,xi.lanes|=f,fc|=f}p=u.action,Ci&&n(i,p),i=u.hasEagerState?u.eagerState:n(i,p)}else f={lane:p,revertLane:u.revertLane,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},null===c?(l=c=f,s=i):c=c.next=f,xi.lanes|=p,fc|=p;u=u.next}while(null!==u&&u!==t);if(null===c?s=i:c.next=l,!Xn(i,e.memoizedState)&&(Ps=!0,d&&null!==(n=Mo)))throw n;e.memoizedState=i,e.baseState=s,e.baseQueue=c,r.lastRenderedState=i}return null===o&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Ki(e){var t=$i(),n=t.queue;if(null===n)throw Error(a(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(null!==o){n.pending=null;var s=o=o.next;do{i=e(i,s.action),s=s.next}while(s!==o);Xn(i,t.memoizedState)||(Ps=!0),t.memoizedState=i,null===t.baseQueue&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function Qi(e,t,n){var r=xi,o=$i(),i=io;if(i){if(void 0===n)throw Error(a(407));n=n()}else n=t();var s=!Xn((wi||o).memoizedState,n);if(s&&(o.memoizedState=n,Ps=!0),o=o.queue,va(2048,8,Gi.bind(null,r,o,e),[e]),o.getSnapshot!==t||s||null!==Si&&1&Si.memoizedState.tag){if(r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},qi.bind(null,r,o,n,t),null),null===rc)throw Error(a(349));i||0!==(124&bi)||Xi(r,t,n)}return n}function Xi(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=xi.updateQueue)?(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function qi(e,t,n,r){t.value=n,t.getSnapshot=r,Ji(t)&&Zi(e)}function Gi(e,t,n){return n((function(){Ji(t)&&Zi(e)}))}function Ji(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Xn(e,n)}catch(r){return!0}}function Zi(e){var t=Rr(e,2);null!==t&&Nc(t,e,2)}function ea(e){var t=Mi();if("function"===typeof e){var n=e;if(e=n(),Ci){pe(!0);try{n()}finally{pe(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:e},t}function ta(e,t,n,r){return e.baseState=n,Yi(e,wi,"function"===typeof r?r:Hi)}function na(e,t,n,r,o){if(Va(e))throw Error(a(485));if(null!==(e=t.action)){var i={payload:o,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(e){i.listeners.push(e)}};null!==L.T?n(!0):i.isTransition=!1,r(i),null===(n=t.pending)?(i.next=t.pending=i,ra(t,i)):(i.next=n.next,t.pending=n.next=i)}}function ra(e,t){var n=t.action,r=t.payload,o=e.state;if(t.isTransition){var i=L.T,a={};L.T=a;try{var s=n(o,r),l=L.S;null!==l&&l(a,s),oa(e,t,s)}catch(c){aa(e,t,c)}finally{L.T=i}}else try{oa(e,t,i=n(o,r))}catch(u){aa(e,t,u)}}function oa(e,t,n){null!==n&&"object"===typeof n&&"function"===typeof n.then?n.then((function(n){ia(e,t,n)}),(function(n){return aa(e,t,n)})):ia(e,t,n)}function ia(e,t,n){t.status="fulfilled",t.value=n,sa(t),e.state=n,null!==(t=e.pending)&&((n=t.next)===t?e.pending=null:(n=n.next,t.next=n,ra(e,n)))}function aa(e,t,n){var r=e.pending;if(e.pending=null,null!==r){r=r.next;do{t.status="rejected",t.reason=n,sa(t),t=t.next}while(t!==r)}e.action=null}function sa(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function la(e,t){return t}function ca(e,t){if(io){var n=rc.formState;if(null!==n){e:{var r=xi;if(io){if(oo){t:{for(var o=oo,i=so;8!==o.nodeType;){if(!i){o=null;break t}if(null===(o=vd(o.nextSibling))){o=null;break t}}o="F!"===(i=o.data)||"F"===i?o:null}if(o){oo=vd(o.nextSibling),r="F!"===o.data;break e}}co(r)}r=!1}r&&(t=n[0])}}return(n=Mi()).memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:la,lastRenderedState:t},n.queue=r,n=Ma.bind(null,xi,r),r.dispatch=n,r=ea(!1),i=Ba.bind(null,xi,!1,r.queue),o={state:t,dispatch:null,action:e,pending:null},(r=Mi()).queue=o,n=na.bind(null,xi,o,i,n),o.dispatch=n,r.memoizedState=e,[t,n,!1]}function ua(e){return da($i(),wi,e)}function da(e,t,n){if(t=Yi(e,t,la)[0],e=Wi(Hi)[0],"object"===typeof t&&null!==t&&"function"===typeof t.then)try{var r=Bi(t)}catch(a){if(a===Yo)throw Qo;throw a}else r=t;var o=(t=$i()).queue,i=o.dispatch;return n!==t.memoizedState&&(xi.flags|=2048,ha(9,{destroy:void 0,resource:void 0},pa.bind(null,o,n),null)),[r,i,e]}function pa(e,t){e.action=t}function fa(e){var t=$i(),n=wi;if(null!==n)return da(t,n,e);$i(),t=t.memoizedState;var r=(n=$i()).queue.dispatch;return n.memoizedState=e,[t,r,!1]}function ha(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},null===(t=xi.updateQueue)&&(t={lastEffect:null,events:null,stores:null,memoCache:null},xi.updateQueue=t),null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function ma(){return $i().memoizedState}function ga(e,t,n,r){var o=Mi();r=void 0===r?null:r,xi.flags|=e,o.memoizedState=ha(1|t,{destroy:void 0,resource:void 0},n,r)}function va(e,t,n,r){var o=$i();r=void 0===r?null:r;var i=o.memoizedState.inst;null!==wi&&null!==r&&Ri(r,wi.memoizedState.deps)?o.memoizedState=ha(t,i,n,r):(xi.flags|=e,o.memoizedState=ha(1|t,i,n,r))}function ya(e,t){ga(8390656,8,e,t)}function ba(e,t){va(2048,8,e,t)}function xa(e,t){return va(4,2,e,t)}function wa(e,t){return va(4,4,e,t)}function Sa(e,t){if("function"===typeof t){e=e();var n=t(e);return function(){"function"===typeof n?n():t(null)}}if(null!==t&&void 0!==t)return e=e(),t.current=e,function(){t.current=null}}function ka(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,va(4,4,Sa.bind(null,t,e),n)}function Ea(){}function Ca(e,t){var n=$i();t=void 0===t?null:t;var r=n.memoizedState;return null!==t&&Ri(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ta(e,t){var n=$i();t=void 0===t?null:t;var r=n.memoizedState;if(null!==t&&Ri(t,r[1]))return r[0];if(r=e(),Ci){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r}function Pa(e,t,n){return void 0===n||0!==(1073741824&bi)?e.memoizedState=t:(e.memoizedState=n,e=zc(),xi.lanes|=e,fc|=e,n)}function _a(e,t,n,r){return Xn(n,t)?n:null!==hi.current?(e=Pa(e,n,r),Xn(e,t)||(Ps=!0),e):0===(42&bi)?(Ps=!0,e.memoizedState=n):(e=zc(),xi.lanes|=e,fc|=e,t)}function ja(e,t,n,r,o){var i=z.p;z.p=0!==i&&8>i?i:8;var a=L.T,s={};L.T=s,Ba(e,!1,t,n);try{var l=o(),c=L.S;if(null!==c&&c(s,l),null!==l&&"object"===typeof l&&"function"===typeof l.then)$a(e,t,function(e,t){var n=[],r={status:"pending",value:null,reason:null,then:function(e){n.push(e)}};return e.then((function(){r.status="fulfilled",r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)}),(function(e){for(r.status="rejected",r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)})),r}(l,r),Lc());else $a(e,t,r,Lc())}catch(u){$a(e,t,{then:function(){},status:"rejected",reason:u},Lc())}finally{z.p=i,L.T=a}}function Aa(){}function Ra(e,t,n,r){if(5!==e.tag)throw Error(a(476));var o=Oa(e).queue;ja(e,o,t,N,null===n?Aa:function(){return Da(e),n(r)})}function Oa(e){var t=e.memoizedState;if(null!==t)return t;var n={};return(t={memoizedState:N,baseState:N,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:N},next:null}).next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Hi,lastRenderedState:n},next:null},e.memoizedState=t,null!==(e=e.alternate)&&(e.memoizedState=t),t}function Da(e){$a(e,Oa(e).next.queue,{},Lc())}function La(){return Po(Qd)}function za(){return $i().memoizedState}function Na(){return $i().memoizedState}function Fa(e){for(var t=e.return;null!==t;){switch(t.tag){case 24:case 3:var n=Lc(),r=ai(t,e=ii(n),n);return null!==r&&(Nc(r,t,n),si(r,t,n)),t={cache:Lo()},void(e.payload=t)}t=t.return}}function Ia(e,t,n){var r=Lc();n={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null},Va(e)?Ua(t,n):null!==(n=Ar(e,t,n,r))&&(Nc(n,e,r),Ha(n,t,r))}function Ma(e,t,n){$a(e,t,n,Lc())}function $a(e,t,n,r){var o={lane:r,revertLane:0,action:n,hasEagerState:!1,eagerState:null,next:null};if(Va(e))Ua(t,o);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var a=t.lastRenderedState,s=i(a,n);if(o.hasEagerState=!0,o.eagerState=s,Xn(s,a))return jr(e,t,o,0),null===rc&&_r(),!1}catch(l){}if(null!==(n=Ar(e,t,o,r)))return Nc(n,e,r),Ha(n,t,r),!0}return!1}function Ba(e,t,n,r){if(r={lane:2,revertLane:ju(),action:r,hasEagerState:!1,eagerState:null,next:null},Va(e)){if(t)throw Error(a(479))}else null!==(t=Ar(e,n,r,2))&&Nc(t,e,2)}function Va(e){var t=e.alternate;return e===xi||null!==t&&t===xi}function Ua(e,t){Ei=ki=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Ha(e,t,n){if(0!==(4194048&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,Pe(e,n)}}var Wa={readContext:Po,use:Vi,useCallback:Ai,useContext:Ai,useEffect:Ai,useImperativeHandle:Ai,useLayoutEffect:Ai,useInsertionEffect:Ai,useMemo:Ai,useReducer:Ai,useRef:Ai,useState:Ai,useDebugValue:Ai,useDeferredValue:Ai,useTransition:Ai,useSyncExternalStore:Ai,useId:Ai,useHostTransitionStatus:Ai,useFormState:Ai,useActionState:Ai,useOptimistic:Ai,useMemoCache:Ai,useCacheRefresh:Ai},Ya={readContext:Po,use:Vi,useCallback:function(e,t){return Mi().memoizedState=[e,void 0===t?null:t],e},useContext:Po,useEffect:ya,useImperativeHandle:function(e,t,n){n=null!==n&&void 0!==n?n.concat([e]):null,ga(4194308,4,Sa.bind(null,t,e),n)},useLayoutEffect:function(e,t){return ga(4194308,4,e,t)},useInsertionEffect:function(e,t){ga(4,2,e,t)},useMemo:function(e,t){var n=Mi();t=void 0===t?null:t;var r=e();if(Ci){pe(!0);try{e()}finally{pe(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Mi();if(void 0!==n){var o=n(t);if(Ci){pe(!0);try{n(t)}finally{pe(!1)}}}else o=t;return r.memoizedState=r.baseState=o,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:o},r.queue=e,e=e.dispatch=Ia.bind(null,xi,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},Mi().memoizedState=e},useState:function(e){var t=(e=ea(e)).queue,n=Ma.bind(null,xi,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:Ea,useDeferredValue:function(e,t){return Pa(Mi(),e,t)},useTransition:function(){var e=ea(!1);return e=ja.bind(null,xi,e.queue,!0,!1),Mi().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=xi,o=Mi();if(io){if(void 0===n)throw Error(a(407));n=n()}else{if(n=t(),null===rc)throw Error(a(349));0!==(124&ic)||Xi(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ya(Gi.bind(null,r,i,e),[e]),r.flags|=2048,ha(9,{destroy:void 0,resource:void 0},qi.bind(null,r,i,n,t),null),n},useId:function(){var e=Mi(),t=rc.identifierPrefix;if(io){var n=Jr;t="\xab"+t+"R"+(n=(Gr&~(1<<32-fe(Gr)-1)).toString(32)+n),0<(n=Ti++)&&(t+="H"+n.toString(32)),t+="\xbb"}else t="\xab"+t+"r"+(n=ji++).toString(32)+"\xbb";return e.memoizedState=t},useHostTransitionStatus:La,useFormState:ca,useActionState:ca,useOptimistic:function(e){var t=Mi();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ba.bind(null,xi,!0,n),n.dispatch=t,[e,t]},useMemoCache:Ui,useCacheRefresh:function(){return Mi().memoizedState=Fa.bind(null,xi)}},Ka={readContext:Po,use:Vi,useCallback:Ca,useContext:Po,useEffect:ba,useImperativeHandle:ka,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ta,useReducer:Wi,useRef:ma,useState:function(){return Wi(Hi)},useDebugValue:Ea,useDeferredValue:function(e,t){return _a($i(),wi.memoizedState,e,t)},useTransition:function(){var e=Wi(Hi)[0],t=$i().memoizedState;return["boolean"===typeof e?e:Bi(e),t]},useSyncExternalStore:Qi,useId:za,useHostTransitionStatus:La,useFormState:ua,useActionState:ua,useOptimistic:function(e,t){return ta($i(),0,e,t)},useMemoCache:Ui,useCacheRefresh:Na},Qa={readContext:Po,use:Vi,useCallback:Ca,useContext:Po,useEffect:ba,useImperativeHandle:ka,useInsertionEffect:xa,useLayoutEffect:wa,useMemo:Ta,useReducer:Ki,useRef:ma,useState:function(){return Ki(Hi)},useDebugValue:Ea,useDeferredValue:function(e,t){var n=$i();return null===wi?Pa(n,e,t):_a(n,wi.memoizedState,e,t)},useTransition:function(){var e=Ki(Hi)[0],t=$i().memoizedState;return["boolean"===typeof e?e:Bi(e),t]},useSyncExternalStore:Qi,useId:za,useHostTransitionStatus:La,useFormState:fa,useActionState:fa,useOptimistic:function(e,t){var n=$i();return null!==wi?ta(n,0,e,t):(n.baseState=e,[e,n.queue.dispatch])},useMemoCache:Ui,useCacheRefresh:Na},Xa=null,qa=0;function Ga(e){var t=qa;return qa+=1,null===Xa&&(Xa=[]),Jo(Xa,e,t)}function Ja(e,t){t=t.props.ref,e.ref=void 0!==t?t:null}function Za(e,t){if(t.$$typeof===f)throw Error(a(525));throw e=Object.prototype.toString.call(t),Error(a(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function es(e){return(0,e._init)(e._payload)}function ts(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;null!==e;)null!==e.key?t.set(e.key,e):t.set(e.index,e),e=e.sibling;return t}function o(e,t){return(e=Ir(e,t)).index=0,e.sibling=null,e}function i(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=67108866,n):r:(t.flags|=67108866,n):(t.flags|=1048576,n)}function s(t){return e&&null===t.alternate&&(t.flags|=67108866),t}function l(e,t,n,r){return null===t||6!==t.tag?((t=Vr(n,e.mode,r)).return=e,t):((t=o(t,n)).return=e,t)}function c(e,t,n,r){var i=n.type;return i===g?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===T&&es(i)===t.type)?(Ja(t=o(t,n.props),n),t.return=e,t):(Ja(t=$r(n.type,n.key,n.props,null,e.mode,r),n),t.return=e,t)}function u(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Ur(n,e.mode,r)).return=e,t):((t=o(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Br(n,e.mode,r,i)).return=e,t):((t=o(t,n)).return=e,t)}function p(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t||"bigint"===typeof t)return(t=Vr(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case h:return Ja(n=$r(t.type,t.key,t.props,null,e.mode,n),t),n.return=e,n;case m:return(t=Ur(t,e.mode,n)).return=e,t;case T:return p(e,t=(0,t._init)(t._payload),n)}if(D(t)||A(t))return(t=Br(t,e.mode,n,null)).return=e,t;if("function"===typeof t.then)return p(e,Ga(t),n);if(t.$$typeof===w)return p(e,_o(e,t),n);Za(e,t)}return null}function f(e,t,n,r){var o=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n||"bigint"===typeof n)return null!==o?null:l(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case h:return n.key===o?c(e,t,n,r):null;case m:return n.key===o?u(e,t,n,r):null;case T:return f(e,t,n=(o=n._init)(n._payload),r)}if(D(n)||A(n))return null!==o?null:d(e,t,n,r,null);if("function"===typeof n.then)return f(e,t,Ga(n),r);if(n.$$typeof===w)return f(e,t,_o(e,n),r);Za(e,n)}return null}function v(e,t,n,r,o){if("string"===typeof r&&""!==r||"number"===typeof r||"bigint"===typeof r)return l(t,e=e.get(n)||null,""+r,o);if("object"===typeof r&&null!==r){switch(r.$$typeof){case h:return c(t,e=e.get(null===r.key?n:r.key)||null,r,o);case m:return u(t,e=e.get(null===r.key?n:r.key)||null,r,o);case T:return v(e,t,n,r=(0,r._init)(r._payload),o)}if(D(r)||A(r))return d(t,e=e.get(n)||null,r,o,null);if("function"===typeof r.then)return v(e,t,n,Ga(r),o);if(r.$$typeof===w)return v(e,t,n,_o(t,r),o);Za(t,r)}return null}function y(l,c,u,d){if("object"===typeof u&&null!==u&&u.type===g&&null===u.key&&(u=u.props.children),"object"===typeof u&&null!==u){switch(u.$$typeof){case h:e:{for(var b=u.key;null!==c;){if(c.key===b){if((b=u.type)===g){if(7===c.tag){n(l,c.sibling),(d=o(c,u.props.children)).return=l,l=d;break e}}else if(c.elementType===b||"object"===typeof b&&null!==b&&b.$$typeof===T&&es(b)===c.type){n(l,c.sibling),Ja(d=o(c,u.props),u),d.return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}u.type===g?((d=Br(u.props.children,l.mode,d,u.key)).return=l,l=d):(Ja(d=$r(u.type,u.key,u.props,null,l.mode,d),u),d.return=l,l=d)}return s(l);case m:e:{for(b=u.key;null!==c;){if(c.key===b){if(4===c.tag&&c.stateNode.containerInfo===u.containerInfo&&c.stateNode.implementation===u.implementation){n(l,c.sibling),(d=o(c,u.children||[])).return=l,l=d;break e}n(l,c);break}t(l,c),c=c.sibling}(d=Ur(u,l.mode,d)).return=l,l=d}return s(l);case T:return y(l,c,u=(b=u._init)(u._payload),d)}if(D(u))return function(o,a,s,l){for(var c=null,u=null,d=a,h=a=0,m=null;null!==d&&h<s.length;h++){d.index>h?(m=d,d=null):m=d.sibling;var g=f(o,d,s[h],l);if(null===g){null===d&&(d=m);break}e&&d&&null===g.alternate&&t(o,d),a=i(g,a,h),null===u?c=g:u.sibling=g,u=g,d=m}if(h===s.length)return n(o,d),io&&Zr(o,h),c;if(null===d){for(;h<s.length;h++)null!==(d=p(o,s[h],l))&&(a=i(d,a,h),null===u?c=d:u.sibling=d,u=d);return io&&Zr(o,h),c}for(d=r(d);h<s.length;h++)null!==(m=v(d,o,h,s[h],l))&&(e&&null!==m.alternate&&d.delete(null===m.key?h:m.key),a=i(m,a,h),null===u?c=m:u.sibling=m,u=m);return e&&d.forEach((function(e){return t(o,e)})),io&&Zr(o,h),c}(l,c,u,d);if(A(u)){if("function"!==typeof(b=A(u)))throw Error(a(150));return function(o,s,l,c){if(null==l)throw Error(a(151));for(var u=null,d=null,h=s,m=s=0,g=null,y=l.next();null!==h&&!y.done;m++,y=l.next()){h.index>m?(g=h,h=null):g=h.sibling;var b=f(o,h,y.value,c);if(null===b){null===h&&(h=g);break}e&&h&&null===b.alternate&&t(o,h),s=i(b,s,m),null===d?u=b:d.sibling=b,d=b,h=g}if(y.done)return n(o,h),io&&Zr(o,m),u;if(null===h){for(;!y.done;m++,y=l.next())null!==(y=p(o,y.value,c))&&(s=i(y,s,m),null===d?u=y:d.sibling=y,d=y);return io&&Zr(o,m),u}for(h=r(h);!y.done;m++,y=l.next())null!==(y=v(h,o,m,y.value,c))&&(e&&null!==y.alternate&&h.delete(null===y.key?m:y.key),s=i(y,s,m),null===d?u=y:d.sibling=y,d=y);return e&&h.forEach((function(e){return t(o,e)})),io&&Zr(o,m),u}(l,c,u=b.call(u),d)}if("function"===typeof u.then)return y(l,c,Ga(u),d);if(u.$$typeof===w)return y(l,c,_o(l,u),d);Za(l,u)}return"string"===typeof u&&""!==u||"number"===typeof u||"bigint"===typeof u?(u=""+u,null!==c&&6===c.tag?(n(l,c.sibling),(d=o(c,u)).return=l,l=d):(n(l,c),(d=Vr(u,l.mode,d)).return=l,l=d),s(l)):n(l,c)}return function(e,t,n,r){try{qa=0;var o=y(e,t,n,r);return Xa=null,o}catch(a){if(a===Yo||a===Qo)throw a;var i=Nr(29,a,null,e.mode);return i.lanes=r,i.return=e,i}}}var ns=ts(!0),rs=ts(!1),os=M(null),is=null;function as(e){var t=e.alternate;B(us,1&us.current),B(os,e),null===is&&(null===t||null!==hi.current||null!==t.memoizedState)&&(is=e)}function ss(e){if(22===e.tag){if(B(us,us.current),B(os,e),null===is){var t=e.alternate;null!==t&&null!==t.memoizedState&&(is=e)}}else ls()}function ls(){B(us,us.current),B(os,os.current)}function cs(e){$(os),is===e&&(is=null),$(us)}var us=M(0);function ds(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||gd(n)))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}function ps(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:p({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var fs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Lc(),o=ii(r);o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(Nc(t,e,r),si(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Lc(),o=ii(r);o.tag=1,o.payload=t,void 0!==n&&null!==n&&(o.callback=n),null!==(t=ai(e,o,r))&&(Nc(t,e,r),si(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Lc(),r=ii(n);r.tag=2,void 0!==t&&null!==t&&(r.callback=t),null!==(t=ai(e,r,n))&&(Nc(t,e,n),si(t,e,n))}};function hs(e,t,n,r,o,i,a){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,a):!t.prototype||!t.prototype.isPureReactComponent||(!qn(n,r)||!qn(o,i))}function ms(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&fs.enqueueReplaceState(t,t.state,null)}function gs(e,t){var n=t;if("ref"in t)for(var r in n={},t)"ref"!==r&&(n[r]=t[r]);if(e=e.defaultProps)for(var o in n===t&&(n=p({},n)),e)void 0===n[o]&&(n[o]=e[o]);return n}var vs="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function ys(e){vs(e)}function bs(e){console.error(e)}function xs(e){vs(e)}function ws(e,t){try{(0,e.onUncaughtError)(t.value,{componentStack:t.stack})}catch(n){setTimeout((function(){throw n}))}}function Ss(e,t,n){try{(0,e.onCaughtError)(n.value,{componentStack:n.stack,errorBoundary:1===t.tag?t.stateNode:null})}catch(r){setTimeout((function(){throw r}))}}function ks(e,t,n){return(n=ii(n)).tag=3,n.payload={element:null},n.callback=function(){ws(e,t)},n}function Es(e){return(e=ii(e)).tag=3,e}function Cs(e,t,n,r){var o=n.type.getDerivedStateFromError;if("function"===typeof o){var i=r.value;e.payload=function(){return o(i)},e.callback=function(){Ss(t,n,r)}}var a=n.stateNode;null!==a&&"function"===typeof a.componentDidCatch&&(e.callback=function(){Ss(t,n,r),"function"!==typeof o&&(null===Ec?Ec=new Set([this]):Ec.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:null!==e?e:""})})}var Ts=Error(a(461)),Ps=!1;function _s(e,t,n,r){t.child=null===e?rs(t,null,n,r):ns(t,e.child,n,r)}function js(e,t,n,r,o){n=n.render;var i=t.ref;if("ref"in r){var a={};for(var s in r)"ref"!==s&&(a[s]=r[s])}else a=r;return To(t),r=Oi(e,t,n,a,i,o),s=Ni(),null===e||Ps?(io&&s&&to(t),t.flags|=1,_s(e,t,r,o),t.child):(Fi(e,t,o),Xs(e,t,o))}function As(e,t,n,r,o){if(null===e){var i=n.type;return"function"!==typeof i||Fr(i)||void 0!==i.defaultProps||null!==n.compare?((e=$r(n.type,null,r,t,t.mode,o)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Rs(e,t,i,r,o))}if(i=e.child,!qs(e,o)){var a=i.memoizedProps;if((n=null!==(n=n.compare)?n:qn)(a,r)&&e.ref===t.ref)return Xs(e,t,o)}return t.flags|=1,(e=Ir(i,r)).ref=t.ref,e.return=t,t.child=e}function Rs(e,t,n,r,o){if(null!==e){var i=e.memoizedProps;if(qn(i,r)&&e.ref===t.ref){if(Ps=!1,t.pendingProps=r=i,!qs(e,o))return t.lanes=e.lanes,Xs(e,t,o);0!==(131072&e.flags)&&(Ps=!0)}}return zs(e,t,n,r,o)}function Os(e,t,n){var r=t.pendingProps,o=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode){if(0!==(128&t.flags)){if(r=null!==i?i.baseLanes|n:n,null!==e){for(o=t.child=e.child,i=0;null!==o;)i=i|o.lanes|o.childLanes,o=o.sibling;t.childLanes=i&~r}else t.childLanes=0,t.child=null;return Ds(e,t,r,n)}if(0===(536870912&n))return t.lanes=t.childLanes=536870912,Ds(e,t,null!==i?i.baseLanes|n:n,n);t.memoizedState={baseLanes:0,cachePool:null},null!==e&&Ho(0,null!==i?i.cachePool:null),null!==i?gi(t,i):vi(),ss(t)}else null!==i?(Ho(0,i.cachePool),gi(t,i),ls(),t.memoizedState=null):(null!==e&&Ho(0,null),vi(),ls());return _s(e,t,o,n),t.child}function Ds(e,t,n,r){var o=Uo();return o=null===o?null:{parent:Do._currentValue,pool:o},t.memoizedState={baseLanes:n,cachePool:o},null!==e&&Ho(0,null),vi(),ss(t),null!==e&&Eo(e,t,r,!0),null}function Ls(e,t){var n=t.ref;if(null===n)null!==e&&null!==e.ref&&(t.flags|=4194816);else{if("function"!==typeof n&&"object"!==typeof n)throw Error(a(284));null!==e&&e.ref===n||(t.flags|=4194816)}}function zs(e,t,n,r,o){return To(t),n=Oi(e,t,n,r,void 0,o),r=Ni(),null===e||Ps?(io&&r&&to(t),t.flags|=1,_s(e,t,n,o),t.child):(Fi(e,t,o),Xs(e,t,o))}function Ns(e,t,n,r,o,i){return To(t),t.updateQueue=null,n=Li(t,r,n,o),Di(e),r=Ni(),null===e||Ps?(io&&r&&to(t),t.flags|=1,_s(e,t,n,i),t.child):(Fi(e,t,i),Xs(e,t,i))}function Fs(e,t,n,r,o){if(To(t),null===t.stateNode){var i=Lr,a=n.contextType;"object"===typeof a&&null!==a&&(i=Po(a)),i=new n(r,i),t.memoizedState=null!==i.state&&void 0!==i.state?i.state:null,i.updater=fs,t.stateNode=i,i._reactInternals=t,(i=t.stateNode).props=r,i.state=t.memoizedState,i.refs={},ri(t),a=n.contextType,i.context="object"===typeof a&&null!==a?Po(a):Lr,i.state=t.memoizedState,"function"===typeof(a=n.getDerivedStateFromProps)&&(ps(t,n,a,r),i.state=t.memoizedState),"function"===typeof n.getDerivedStateFromProps||"function"===typeof i.getSnapshotBeforeUpdate||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||(a=i.state,"function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount(),a!==i.state&&fs.enqueueReplaceState(i,i.state,null),di(t,r,i,o),ui(),i.state=t.memoizedState),"function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!0}else if(null===e){i=t.stateNode;var s=t.memoizedProps,l=gs(n,s);i.props=l;var c=i.context,u=n.contextType;a=Lr,"object"===typeof u&&null!==u&&(a=Po(u));var d=n.getDerivedStateFromProps;u="function"===typeof d||"function"===typeof i.getSnapshotBeforeUpdate,s=t.pendingProps!==s,u||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(s||c!==a)&&ms(t,i,r,a),ni=!1;var p=t.memoizedState;i.state=p,di(t,r,i,o),ui(),c=t.memoizedState,s||p!==c||ni?("function"===typeof d&&(ps(t,n,d,r),c=t.memoizedState),(l=ni||hs(t,n,l,r,p,c,a))?(u||"function"!==typeof i.UNSAFE_componentWillMount&&"function"!==typeof i.componentWillMount||("function"===typeof i.componentWillMount&&i.componentWillMount(),"function"===typeof i.UNSAFE_componentWillMount&&i.UNSAFE_componentWillMount()),"function"===typeof i.componentDidMount&&(t.flags|=4194308)):("function"===typeof i.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),i.props=r,i.state=c,i.context=a,r=l):("function"===typeof i.componentDidMount&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,oi(e,t),u=gs(n,a=t.memoizedProps),i.props=u,d=t.pendingProps,p=i.context,c=n.contextType,l=Lr,"object"===typeof c&&null!==c&&(l=Po(c)),(c="function"===typeof(s=n.getDerivedStateFromProps)||"function"===typeof i.getSnapshotBeforeUpdate)||"function"!==typeof i.UNSAFE_componentWillReceiveProps&&"function"!==typeof i.componentWillReceiveProps||(a!==d||p!==l)&&ms(t,i,r,l),ni=!1,p=t.memoizedState,i.state=p,di(t,r,i,o),ui();var f=t.memoizedState;a!==d||p!==f||ni||null!==e&&null!==e.dependencies&&Co(e.dependencies)?("function"===typeof s&&(ps(t,n,s,r),f=t.memoizedState),(u=ni||hs(t,n,u,r,p,f,l)||null!==e&&null!==e.dependencies&&Co(e.dependencies))?(c||"function"!==typeof i.UNSAFE_componentWillUpdate&&"function"!==typeof i.componentWillUpdate||("function"===typeof i.componentWillUpdate&&i.componentWillUpdate(r,f,l),"function"===typeof i.UNSAFE_componentWillUpdate&&i.UNSAFE_componentWillUpdate(r,f,l)),"function"===typeof i.componentDidUpdate&&(t.flags|=4),"function"===typeof i.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=f),i.props=r,i.state=f,i.context=l,r=u):("function"!==typeof i.componentDidUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),"function"!==typeof i.getSnapshotBeforeUpdate||a===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),r=!1)}return i=r,Ls(e,t),r=0!==(128&t.flags),i||r?(i=t.stateNode,n=r&&"function"!==typeof n.getDerivedStateFromError?null:i.render(),t.flags|=1,null!==e&&r?(t.child=ns(t,e.child,null,o),t.child=ns(t,null,n,o)):_s(e,t,n,o),t.memoizedState=i.state,e=t.child):e=Xs(e,t,o),e}function Is(e,t,n,r){return ho(),t.flags|=256,_s(e,t,n,r),t.child}var Ms={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function $s(e){return{baseLanes:e,cachePool:Wo()}}function Bs(e,t,n){return e=null!==e?e.childLanes&~n:0,t&&(e|=gc),e}function Vs(e,t,n){var r,o=t.pendingProps,i=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&us.current)),r&&(i=!0,t.flags&=-129),r=0!==(32&t.flags),t.flags&=-33,null===e){if(io){if(i?as(t):ls(),io){var l,c=oo;if(l=c){e:{for(l=c,c=so;8!==l.nodeType;){if(!c){c=null;break e}if(null===(l=vd(l.nextSibling))){c=null;break e}}c=l}null!==c?(t.memoizedState={dehydrated:c,treeContext:null!==qr?{id:Gr,overflow:Jr}:null,retryLane:536870912,hydrationErrors:null},(l=Nr(18,null,null,0)).stateNode=c,l.return=t,t.child=l,ro=t,oo=null,l=!0):l=!1}l||co(t)}if(null!==(c=t.memoizedState)&&null!==(c=c.dehydrated))return gd(c)?t.lanes=32:t.lanes=536870912,null;cs(t)}return c=o.children,o=o.fallback,i?(ls(),c=Hs({mode:"hidden",children:c},i=t.mode),o=Br(o,i,n,null),c.return=t,o.return=t,c.sibling=o,t.child=c,(i=t.child).memoizedState=$s(n),i.childLanes=Bs(e,r,n),t.memoizedState=Ms,o):(as(t),Us(t,c))}if(null!==(l=e.memoizedState)&&null!==(c=l.dehydrated)){if(s)256&t.flags?(as(t),t.flags&=-257,t=Ws(e,t,n)):null!==t.memoizedState?(ls(),t.child=e.child,t.flags|=128,t=null):(ls(),i=o.fallback,c=t.mode,o=Hs({mode:"visible",children:o.children},c),(i=Br(i,c,n,null)).flags|=2,o.return=t,i.return=t,o.sibling=i,t.child=o,ns(t,e.child,null,n),(o=t.child).memoizedState=$s(n),o.childLanes=Bs(e,r,n),t.memoizedState=Ms,t=i);else if(as(t),gd(c)){if(r=c.nextSibling&&c.nextSibling.dataset)var u=r.dgst;r=u,(o=Error(a(419))).stack="",o.digest=r,go({value:o,source:null,stack:null}),t=Ws(e,t,n)}else if(Ps||Eo(e,t,n,!1),r=0!==(n&e.childLanes),Ps||r){if(null!==(r=rc)&&(0!==(o=0!==((o=0!==(42&(o=n&-n))?1:_e(o))&(r.suspendedLanes|n))?0:o)&&o!==l.retryLane))throw l.retryLane=o,Rr(e,o),Nc(r,e,o),Ts;"$?"===c.data||Kc(),t=Ws(e,t,n)}else"$?"===c.data?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,oo=vd(c.nextSibling),ro=t,io=!0,ao=null,so=!1,null!==e&&(Qr[Xr++]=Gr,Qr[Xr++]=Jr,Qr[Xr++]=qr,Gr=e.id,Jr=e.overflow,qr=t),(t=Us(t,o.children)).flags|=4096);return t}return i?(ls(),i=o.fallback,c=t.mode,u=(l=e.child).sibling,(o=Ir(l,{mode:"hidden",children:o.children})).subtreeFlags=65011712&l.subtreeFlags,null!==u?i=Ir(u,i):(i=Br(i,c,n,null)).flags|=2,i.return=t,o.return=t,o.sibling=i,t.child=o,o=i,i=t.child,null===(c=e.child.memoizedState)?c=$s(n):(null!==(l=c.cachePool)?(u=Do._currentValue,l=l.parent!==u?{parent:u,pool:u}:l):l=Wo(),c={baseLanes:c.baseLanes|n,cachePool:l}),i.memoizedState=c,i.childLanes=Bs(e,r,n),t.memoizedState=Ms,o):(as(t),e=(n=e.child).sibling,(n=Ir(n,{mode:"visible",children:o.children})).return=t,n.sibling=null,null!==e&&(null===(r=t.deletions)?(t.deletions=[e],t.flags|=16):r.push(e)),t.child=n,t.memoizedState=null,n)}function Us(e,t){return(t=Hs({mode:"visible",children:t},e.mode)).return=e,e.child=t}function Hs(e,t){return(e=Nr(22,e,null,t)).lanes=0,e.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},e}function Ws(e,t,n){return ns(t,e.child,null,n),(e=Us(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Ys(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),So(e.return,t,n)}function Ks(e,t,n,r,o){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Qs(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(_s(e,t,r.children,n),0!==(2&(r=us.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Ys(e,n,t);else if(19===e.tag)Ys(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}switch(B(us,r),o){case"forwards":for(n=t.child,o=null;null!==n;)null!==(e=n.alternate)&&null===ds(e)&&(o=n),n=n.sibling;null===(n=o)?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ks(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;null!==o;){if(null!==(e=o.alternate)&&null===ds(e)){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ks(t,!0,n,null,i);break;case"together":Ks(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Xs(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),fc|=t.lanes,0===(n&t.childLanes)){if(null===e)return null;if(Eo(e,t,n,!1),0===(n&t.childLanes))return null}if(null!==e&&t.child!==e.child)throw Error(a(153));if(null!==t.child){for(n=Ir(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ir(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function qs(e,t){return 0!==(e.lanes&t)||!(null===(e=e.dependencies)||!Co(e))}function Gs(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps)Ps=!0;else{if(!qs(e,n)&&0===(128&t.flags))return Ps=!1,function(e,t,n){switch(t.tag){case 3:Y(t,t.stateNode.containerInfo),xo(0,Do,e.memoizedState.cache),ho();break;case 27:case 5:Q(t);break;case 4:Y(t,t.stateNode.containerInfo);break;case 10:xo(0,t.type,t.memoizedProps.value);break;case 13:var r=t.memoizedState;if(null!==r)return null!==r.dehydrated?(as(t),t.flags|=128,null):0!==(n&t.child.childLanes)?Vs(e,t,n):(as(t),null!==(e=Xs(e,t,n))?e.sibling:null);as(t);break;case 19:var o=0!==(128&e.flags);if((r=0!==(n&t.childLanes))||(Eo(e,t,n,!1),r=0!==(n&t.childLanes)),o){if(r)return Qs(e,t,n);t.flags|=128}if(null!==(o=t.memoizedState)&&(o.rendering=null,o.tail=null,o.lastEffect=null),B(us,us.current),r)break;return null;case 22:case 23:return t.lanes=0,Os(e,t,n);case 24:xo(0,Do,e.memoizedState.cache)}return Xs(e,t,n)}(e,t,n);Ps=0!==(131072&e.flags)}else Ps=!1,io&&0!==(1048576&t.flags)&&eo(t,Kr,t.index);switch(t.lanes=0,t.tag){case 16:e:{e=t.pendingProps;var r=t.elementType,o=r._init;if(r=o(r._payload),t.type=r,"function"!==typeof r){if(void 0!==r&&null!==r){if((o=r.$$typeof)===S){t.tag=11,t=js(null,t,r,e,n);break e}if(o===C){t.tag=14,t=As(null,t,r,e,n);break e}}throw t=O(r)||r,Error(a(306,t,""))}Fr(r)?(e=gs(r,e),t.tag=1,t=Fs(null,t,r,e,n)):(t.tag=0,t=zs(null,t,r,e,n))}return t;case 0:return zs(e,t,t.type,t.pendingProps,n);case 1:return Fs(e,t,r=t.type,o=gs(r,t.pendingProps),n);case 3:e:{if(Y(t,t.stateNode.containerInfo),null===e)throw Error(a(387));r=t.pendingProps;var i=t.memoizedState;o=i.element,oi(e,t),di(t,r,null,n);var s=t.memoizedState;if(r=s.cache,xo(0,Do,r),r!==i.cache&&ko(t,[Do],n,!0),ui(),r=s.element,i.isDehydrated){if(i={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=i,t.memoizedState=i,256&t.flags){t=Is(e,t,r,n);break e}if(r!==o){go(o=Er(Error(a(424)),t)),t=Is(e,t,r,n);break e}if(9===(e=t.stateNode.containerInfo).nodeType)e=e.body;else e="HTML"===e.nodeName?e.ownerDocument.body:e;for(oo=vd(e.firstChild),ro=t,io=!0,ao=null,so=!0,n=rs(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(ho(),r===o){t=Xs(e,t,n);break e}_s(e,t,r,n)}t=t.child}return t;case 26:return Ls(e,t),null===e?(n=_d(t.type,null,t.pendingProps,null))?t.memoizedState=n:io||(n=t.type,e=t.pendingProps,(r=rd(H.current).createElement(n))[Oe]=t,r[De]=e,ed(r,n,e),We(r),t.stateNode=r):t.memoizedState=_d(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Q(t),null===e&&io&&(r=t.stateNode=xd(t.type,t.pendingProps,H.current),ro=t,so=!0,o=oo,fd(t.type)?(yd=o,oo=vd(r.firstChild)):oo=o),_s(e,t,t.pendingProps.children,n),Ls(e,t),null===e&&(t.flags|=4194304),t.child;case 5:return null===e&&io&&((o=r=oo)&&(null!==(r=function(e,t,n,r){for(;1===e.nodeType;){var o=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&("INPUT"!==e.nodeName||"hidden"!==e.type))break}else if(r){if(!e[Me])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if("stylesheet"===(i=e.getAttribute("rel"))&&e.hasAttribute("data-precedence"))break;if(i!==o.rel||e.getAttribute("href")!==(null==o.href||""===o.href?null:o.href)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin)||e.getAttribute("title")!==(null==o.title?null:o.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(((i=e.getAttribute("src"))!==(null==o.src?null:o.src)||e.getAttribute("type")!==(null==o.type?null:o.type)||e.getAttribute("crossorigin")!==(null==o.crossOrigin?null:o.crossOrigin))&&i&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else{if("input"!==t||"hidden"!==e.type)return e;var i=null==o.name?null:""+o.name;if("hidden"===o.type&&e.getAttribute("name")===i)return e}if(null===(e=vd(e.nextSibling)))break}return null}(r,t.type,t.pendingProps,so))?(t.stateNode=r,ro=t,oo=vd(r.firstChild),so=!1,o=!0):o=!1),o||co(t)),Q(t),o=t.type,i=t.pendingProps,s=null!==e?e.memoizedProps:null,r=i.children,ad(o,i)?r=null:null!==s&&ad(o,s)&&(t.flags|=32),null!==t.memoizedState&&(o=Oi(e,t,zi,null,null,n),Qd._currentValue=o),Ls(e,t),_s(e,t,r,n),t.child;case 6:return null===e&&io&&((e=n=oo)&&(null!==(n=function(e,t,n){if(""===t)return null;for(;3!==e.nodeType;){if((1!==e.nodeType||"INPUT"!==e.nodeName||"hidden"!==e.type)&&!n)return null;if(null===(e=vd(e.nextSibling)))return null}return e}(n,t.pendingProps,so))?(t.stateNode=n,ro=t,oo=null,e=!0):e=!1),e||co(t)),null;case 13:return Vs(e,t,n);case 4:return Y(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=ns(t,null,r,n):_s(e,t,r,n),t.child;case 11:return js(e,t,t.type,t.pendingProps,n);case 7:return _s(e,t,t.pendingProps,n),t.child;case 8:case 12:return _s(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,xo(0,t.type,r.value),_s(e,t,r.children,n),t.child;case 9:return o=t.type._context,r=t.pendingProps.children,To(t),r=r(o=Po(o)),t.flags|=1,_s(e,t,r,n),t.child;case 14:return As(e,t,t.type,t.pendingProps,n);case 15:return Rs(e,t,t.type,t.pendingProps,n);case 19:return Qs(e,t,n);case 31:return r=t.pendingProps,n=t.mode,r={mode:r.mode,children:r.children},null===e?((n=Hs(r,n)).ref=t.ref,t.child=n,n.return=t,t=n):((n=Ir(e.child,r)).ref=t.ref,t.child=n,n.return=t,t=n),t;case 22:return Os(e,t,n);case 24:return To(t),r=Po(Do),null===e?(null===(o=Uo())&&(o=rc,i=Lo(),o.pooledCache=i,i.refCount++,null!==i&&(o.pooledCacheLanes|=n),o=i),t.memoizedState={parent:r,cache:o},ri(t),xo(0,Do,o)):(0!==(e.lanes&n)&&(oi(e,t),di(t,null,null,n),ui()),o=e.memoizedState,i=t.memoizedState,o.parent!==r?(o={parent:r,cache:r},t.memoizedState=o,0===t.lanes&&(t.memoizedState=t.updateQueue.baseState=o),xo(0,Do,r)):(r=i.cache,xo(0,Do,r),r!==o.cache&&ko(t,[Do],n,!0))),_s(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(a(156,t.tag))}function Js(e){e.flags|=4}function Zs(e,t){if("stylesheet"!==t.type||0!==(4&t.state.loading))e.flags&=-16777217;else if(e.flags|=16777216,!Bd(t)){if(null!==(t=os.current)&&((4194048&ic)===ic?null!==is:(62914560&ic)!==ic&&0===(536870912&ic)||t!==is))throw Zo=Xo,Ko;e.flags|=8192}}function el(e,t){null!==t&&(e.flags|=4),16384&e.flags&&(t=22!==e.tag?ke():536870912,e.lanes|=t,vc|=t)}function tl(e,t){if(!io)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function nl(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=65011712&o.subtreeFlags,r|=65011712&o.flags,o.return=e,o=o.sibling;else for(o=e.child;null!==o;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function rl(e,t,n){var r=t.pendingProps;switch(no(t),t.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:case 1:return nl(t),null;case 3:return n=t.stateNode,r=null,null!==e&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),wo(Do),K(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),null!==e&&null!==e.child||(fo(t)?Js(t):null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,mo())),nl(t),null;case 26:return n=t.memoizedState,null===e?(Js(t),null!==n?(nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217)):n?n!==e.memoizedState?(Js(t),nl(t),Zs(t,n)):(nl(t),t.flags&=-16777217):(e.memoizedProps!==r&&Js(t),nl(t),t.flags&=-16777217),null;case 27:X(t),n=H.current;var o=t.type;if(null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}e=V.current,fo(t)?uo(t):(e=xd(o,r,n),t.stateNode=e,Js(t))}return nl(t),null;case 5:if(X(t),n=t.type,null!==e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if(!r){if(null===t.stateNode)throw Error(a(166));return nl(t),null}if(e=V.current,fo(t))uo(t);else{switch(o=rd(H.current),e){case 1:e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":e=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":e=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":(e=o.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild);break;case"select":e="string"===typeof r.is?o.createElement("select",{is:r.is}):o.createElement("select"),r.multiple?e.multiple=!0:r.size&&(e.size=r.size);break;default:e="string"===typeof r.is?o.createElement(n,{is:r.is}):o.createElement(n)}}e[Oe]=t,e[De]=r;e:for(o=t.child;null!==o;){if(5===o.tag||6===o.tag)e.appendChild(o.stateNode);else if(4!==o.tag&&27!==o.tag&&null!==o.child){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;null===o.sibling;){if(null===o.return||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=e;e:switch(ed(e,n,r),n){case"button":case"input":case"select":case"textarea":e=!!r.autoFocus;break e;case"img":e=!0;break e;default:e=!1}e&&Js(t)}}return nl(t),t.flags&=-16777217,null;case 6:if(e&&null!=t.stateNode)e.memoizedProps!==r&&Js(t);else{if("string"!==typeof r&&null===t.stateNode)throw Error(a(166));if(e=H.current,fo(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,null!==(o=ro))switch(o.tag){case 27:case 5:r=o.memoizedProps}e[Oe]=t,(e=!!(e.nodeValue===n||null!==r&&!0===r.suppressHydrationWarning||qu(e.nodeValue,n)))||co(t)}else(e=rd(e).createTextNode(r))[Oe]=t,t.stateNode=e}return nl(t),null;case 13:if(r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(o=fo(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(a(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(a(317));o[Oe]=t}else ho(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;nl(t),o=!1}else o=mo(),null!==e&&null!==e.memoizedState&&(e.memoizedState.hydrationErrors=o),o=!0;if(!o)return 256&t.flags?(cs(t),t):(cs(t),null)}if(cs(t),0!==(128&t.flags))return t.lanes=n,t;if(n=null!==r,e=null!==e&&null!==e.memoizedState,n){o=null,null!==(r=t.child).alternate&&null!==r.alternate.memoizedState&&null!==r.alternate.memoizedState.cachePool&&(o=r.alternate.memoizedState.cachePool.pool);var i=null;null!==r.memoizedState&&null!==r.memoizedState.cachePool&&(i=r.memoizedState.cachePool.pool),i!==o&&(r.flags|=2048)}return n!==e&&n&&(t.child.flags|=8192),el(t,t.updateQueue),nl(t),null;case 4:return K(),null===e&&$u(t.stateNode.containerInfo),nl(t),null;case 10:return wo(t.type),nl(t),null;case 19:if($(us),null===(o=t.memoizedState))return nl(t),null;if(r=0!==(128&t.flags),null===(i=o.rendering))if(r)tl(o,!1);else{if(0!==pc||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(i=ds(e))){for(t.flags|=128,tl(o,!1),e=i.updateQueue,t.updateQueue=e,el(t,e),t.subtreeFlags=0,e=n,n=t.child;null!==n;)Mr(n,e),n=n.sibling;return B(us,1&us.current|2),t.child}e=e.sibling}null!==o.tail&&te()>Sc&&(t.flags|=128,r=!0,tl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=ds(i))){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,el(t,e),tl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!i.alternate&&!io)return nl(t),null}else 2*te()-o.renderingStartTime>Sc&&536870912!==n&&(t.flags|=128,r=!0,tl(o,!1),t.lanes=4194304);o.isBackwards?(i.sibling=t.child,t.child=i):(null!==(e=o.last)?e.sibling=i:t.child=i,o.last=i)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=te(),t.sibling=null,e=us.current,B(us,r?1&e|2:1&e),t):(nl(t),null);case 22:case 23:return cs(t),yi(),r=null!==t.memoizedState,null!==e?null!==e.memoizedState!==r&&(t.flags|=8192):r&&(t.flags|=8192),r?0!==(536870912&n)&&0===(128&t.flags)&&(nl(t),6&t.subtreeFlags&&(t.flags|=8192)):nl(t),null!==(n=t.updateQueue)&&el(t,n.retryQueue),n=null,null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),r=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),null!==e&&$(Vo),null;case 24:return n=null,null!==e&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),wo(Do),nl(t),null;case 25:case 30:return null}throw Error(a(156,t.tag))}function ol(e,t){switch(no(t),t.tag){case 1:return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return wo(Do),K(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 26:case 27:case 5:return X(t),null;case 13:if(cs(t),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(a(340));ho()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return $(us),null;case 4:return K(),null;case 10:return wo(t.type),null;case 22:case 23:return cs(t),yi(),null!==e&&$(Vo),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 24:return wo(Do),null;default:return null}}function il(e,t){switch(no(t),t.tag){case 3:wo(Do),K();break;case 26:case 27:case 5:X(t);break;case 4:K();break;case 13:cs(t);break;case 19:$(us);break;case 10:wo(t.type);break;case 22:case 23:cs(t),yi(),null!==e&&$(Vo);break;case 24:wo(Do)}}function al(e,t){try{var n=t.updateQueue,r=null!==n?n.lastEffect:null;if(null!==r){var o=r.next;n=o;do{if((n.tag&e)===e){r=void 0;var i=n.create,a=n.inst;r=i(),a.destroy=r}n=n.next}while(n!==o)}}catch(s){uu(t,t.return,s)}}function sl(e,t,n){try{var r=t.updateQueue,o=null!==r?r.lastEffect:null;if(null!==o){var i=o.next;r=i;do{if((r.tag&e)===e){var a=r.inst,s=a.destroy;if(void 0!==s){a.destroy=void 0,o=t;var l=n,c=s;try{c()}catch(u){uu(o,l,u)}}}r=r.next}while(r!==i)}}catch(u){uu(t,t.return,u)}}function ll(e){var t=e.updateQueue;if(null!==t){var n=e.stateNode;try{fi(t,n)}catch(r){uu(e,e.return,r)}}}function cl(e,t,n){n.props=gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(r){uu(e,t,r)}}function ul(e,t){try{var n=e.ref;if(null!==n){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;default:r=e.stateNode}"function"===typeof n?e.refCleanup=n(r):n.current=r}}catch(o){uu(e,t,o)}}function dl(e,t){var n=e.ref,r=e.refCleanup;if(null!==n)if("function"===typeof r)try{r()}catch(o){uu(e,t,o)}finally{e.refCleanup=null,null!=(e=e.alternate)&&(e.refCleanup=null)}else if("function"===typeof n)try{n(null)}catch(i){uu(e,t,i)}else n.current=null}function pl(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":n.autoFocus&&r.focus();break e;case"img":n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(o){uu(e,e.return,o)}}function fl(e,t,n){try{var r=e.stateNode;!function(e,t,n,r){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var o=null,i=null,s=null,l=null,c=null,u=null,d=null;for(h in n){var p=n[h];if(n.hasOwnProperty(h)&&null!=p)switch(h){case"checked":case"value":break;case"defaultValue":c=p;default:r.hasOwnProperty(h)||Ju(e,t,h,null,r,p)}}for(var f in r){var h=r[f];if(p=n[f],r.hasOwnProperty(f)&&(null!=h||null!=p))switch(f){case"type":i=h;break;case"name":o=h;break;case"checked":u=h;break;case"defaultChecked":d=h;break;case"value":s=h;break;case"defaultValue":l=h;break;case"children":case"dangerouslySetInnerHTML":if(null!=h)throw Error(a(137,t));break;default:h!==p&&Ju(e,t,f,h,r,p)}}return void gt(e,s,l,c,u,d,i,o);case"select":for(i in h=s=l=f=null,n)if(c=n[i],n.hasOwnProperty(i)&&null!=c)switch(i){case"value":break;case"multiple":h=c;default:r.hasOwnProperty(i)||Ju(e,t,i,null,r,c)}for(o in r)if(i=r[o],c=n[o],r.hasOwnProperty(o)&&(null!=i||null!=c))switch(o){case"value":f=i;break;case"defaultValue":l=i;break;case"multiple":s=i;default:i!==c&&Ju(e,t,o,i,r,c)}return t=l,n=s,r=h,void(null!=f?bt(e,!!n,f,!1):!!r!==!!n&&(null!=t?bt(e,!!n,t,!0):bt(e,!!n,n?[]:"",!1)));case"textarea":for(l in h=f=null,n)if(o=n[l],n.hasOwnProperty(l)&&null!=o&&!r.hasOwnProperty(l))switch(l){case"value":case"children":break;default:Ju(e,t,l,null,r,o)}for(s in r)if(o=r[s],i=n[s],r.hasOwnProperty(s)&&(null!=o||null!=i))switch(s){case"value":f=o;break;case"defaultValue":h=o;break;case"children":break;case"dangerouslySetInnerHTML":if(null!=o)throw Error(a(91));break;default:o!==i&&Ju(e,t,s,o,r,i)}return void xt(e,f,h);case"option":for(var m in n)if(f=n[m],n.hasOwnProperty(m)&&null!=f&&!r.hasOwnProperty(m))if("selected"===m)e.selected=!1;else Ju(e,t,m,null,r,f);for(c in r)if(f=r[c],h=n[c],r.hasOwnProperty(c)&&f!==h&&(null!=f||null!=h))if("selected"===c)e.selected=f&&"function"!==typeof f&&"symbol"!==typeof f;else Ju(e,t,c,f,r,h);return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var g in n)f=n[g],n.hasOwnProperty(g)&&null!=f&&!r.hasOwnProperty(g)&&Ju(e,t,g,null,r,f);for(u in r)if(f=r[u],h=n[u],r.hasOwnProperty(u)&&f!==h&&(null!=f||null!=h))switch(u){case"children":case"dangerouslySetInnerHTML":if(null!=f)throw Error(a(137,t));break;default:Ju(e,t,u,f,r,h)}return;default:if(Tt(t)){for(var v in n)f=n[v],n.hasOwnProperty(v)&&void 0!==f&&!r.hasOwnProperty(v)&&Zu(e,t,v,void 0,r,f);for(d in r)f=r[d],h=n[d],!r.hasOwnProperty(d)||f===h||void 0===f&&void 0===h||Zu(e,t,d,f,r,h);return}}for(var y in n)f=n[y],n.hasOwnProperty(y)&&null!=f&&!r.hasOwnProperty(y)&&Ju(e,t,y,null,r,f);for(p in r)f=r[p],h=n[p],!r.hasOwnProperty(p)||f===h||null==f&&null==h||Ju(e,t,p,f,r,h)}(r,e.type,n,t),r[De]=t}catch(o){uu(e,e.return,o)}}function hl(e){return 5===e.tag||3===e.tag||26===e.tag||27===e.tag&&fd(e.type)||4===e.tag}function ml(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||hl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(27===e.tag&&fd(e.type))continue e;if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function gl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?(9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).insertBefore(e,t):((t=9===n.nodeType?n.body:"HTML"===n.nodeName?n.ownerDocument.body:n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Gu));else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode,t=null),null!==(e=e.child)))for(gl(e,t,n),e=e.sibling;null!==e;)gl(e,t,n),e=e.sibling}function vl(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&(27===r&&fd(e.type)&&(n=e.stateNode),null!==(e=e.child)))for(vl(e,t,n),e=e.sibling;null!==e;)vl(e,t,n),e=e.sibling}function yl(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,o=t.attributes;o.length;)t.removeAttributeNode(o[0]);ed(t,r,n),t[Oe]=e,t[De]=n}catch(i){uu(e,e.return,i)}}var bl=!1,xl=!1,wl=!1,Sl="function"===typeof WeakSet?WeakSet:Set,kl=null;function El(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:Fl(e,n),4&r&&al(5,n);break;case 1:if(Fl(e,n),4&r)if(e=n.stateNode,null===t)try{e.componentDidMount()}catch(a){uu(n,n.return,a)}else{var o=gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(o,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){uu(n,n.return,s)}}64&r&&ll(n),512&r&&ul(n,n.return);break;case 3:if(Fl(e,n),64&r&&null!==(e=n.updateQueue)){if(t=null,null!==n.child)switch(n.child.tag){case 27:case 5:case 1:t=n.child.stateNode}try{fi(e,t)}catch(a){uu(n,n.return,a)}}break;case 27:null===t&&4&r&&yl(n);case 26:case 5:Fl(e,n),null===t&&4&r&&pl(n),512&r&&ul(n,n.return);break;case 12:Fl(e,n);break;case 13:Fl(e,n),4&r&&Al(e,n),64&r&&(null!==(e=n.memoizedState)&&(null!==(e=e.dehydrated)&&function(e,t){var n=e.ownerDocument;if("$?"!==e.data||"complete"===n.readyState)t();else{var r=function(){t(),n.removeEventListener("DOMContentLoaded",r)};n.addEventListener("DOMContentLoaded",r),e._reactRetry=r}}(e,n=hu.bind(null,n))));break;case 22:if(!(r=null!==n.memoizedState||bl)){t=null!==t&&null!==t.memoizedState||xl,o=bl;var i=xl;bl=r,(xl=t)&&!i?Ml(e,n,0!==(8772&n.subtreeFlags)):Fl(e,n),bl=o,xl=i}break;case 30:break;default:Fl(e,n)}}function Cl(e){var t=e.alternate;null!==t&&(e.alternate=null,Cl(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&$e(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var Tl=null,Pl=!1;function _l(e,t,n){for(n=n.child;null!==n;)jl(e,t,n),n=n.sibling}function jl(e,t,n){if(de&&"function"===typeof de.onCommitFiberUnmount)try{de.onCommitFiberUnmount(ue,n)}catch(i){}switch(n.tag){case 26:xl||dl(n,t),_l(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode).parentNode.removeChild(n);break;case 27:xl||dl(n,t);var r=Tl,o=Pl;fd(n.type)&&(Tl=n.stateNode,Pl=!1),_l(e,t,n),wd(n.stateNode),Tl=r,Pl=o;break;case 5:xl||dl(n,t);case 6:if(r=Tl,o=Pl,Tl=null,_l(e,t,n),Pl=o,null!==(Tl=r))if(Pl)try{(9===Tl.nodeType?Tl.body:"HTML"===Tl.nodeName?Tl.ownerDocument.body:Tl).removeChild(n.stateNode)}catch(a){uu(n,t,a)}else try{Tl.removeChild(n.stateNode)}catch(a){uu(n,t,a)}break;case 18:null!==Tl&&(Pl?(hd(9===(e=Tl).nodeType?e.body:"HTML"===e.nodeName?e.ownerDocument.body:e,n.stateNode),Pp(e)):hd(Tl,n.stateNode));break;case 4:r=Tl,o=Pl,Tl=n.stateNode.containerInfo,Pl=!0,_l(e,t,n),Tl=r,Pl=o;break;case 0:case 11:case 14:case 15:xl||sl(2,n,t),xl||sl(4,n,t),_l(e,t,n);break;case 1:xl||(dl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount&&cl(n,t,r)),_l(e,t,n);break;case 21:_l(e,t,n);break;case 22:xl=(r=xl)||null!==n.memoizedState,_l(e,t,n),xl=r;break;default:_l(e,t,n)}}function Al(e,t){if(null===t.memoizedState&&(null!==(e=t.alternate)&&(null!==(e=e.memoizedState)&&null!==(e=e.dehydrated))))try{Pp(e)}catch(n){uu(t,t.return,n)}}function Rl(e,t){var n=function(e){switch(e.tag){case 13:case 19:var t=e.stateNode;return null===t&&(t=e.stateNode=new Sl),t;case 22:return null===(t=(e=e.stateNode)._retryCache)&&(t=e._retryCache=new Sl),t;default:throw Error(a(435,e.tag))}}(e);t.forEach((function(t){var r=mu.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))}))}function Ol(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var o=n[r],i=e,s=t,l=s;e:for(;null!==l;){switch(l.tag){case 27:if(fd(l.type)){Tl=l.stateNode,Pl=!1;break e}break;case 5:Tl=l.stateNode,Pl=!1;break e;case 3:case 4:Tl=l.stateNode.containerInfo,Pl=!0;break e}l=l.return}if(null===Tl)throw Error(a(160));jl(i,s,o),Tl=null,Pl=!1,null!==(i=o.alternate)&&(i.return=null),o.return=null}if(13878&t.subtreeFlags)for(t=t.child;null!==t;)Ll(t,e),t=t.sibling}var Dl=null;function Ll(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Ol(t,e),zl(e),4&r&&(sl(3,e,e.return),al(3,e),sl(5,e,e.return));break;case 1:Ol(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),64&r&&bl&&(null!==(e=e.updateQueue)&&(null!==(r=e.callbacks)&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=null===n?r:n.concat(r))));break;case 26:var o=Dl;if(Ol(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),4&r){var i=null!==n?n.memoizedState:null;if(r=e.memoizedState,null===n)if(null===r)if(null===e.stateNode){e:{r=e.type,n=e.memoizedProps,o=o.ownerDocument||o;t:switch(r){case"title":(!(i=o.getElementsByTagName("title")[0])||i[Me]||i[Oe]||"http://www.w3.org/2000/svg"===i.namespaceURI||i.hasAttribute("itemprop"))&&(i=o.createElement(r),o.head.insertBefore(i,o.querySelector("head > title"))),ed(i,r,n),i[Oe]=e,We(i),r=i;break e;case"link":var s=Md("link","href",o).get(r+(n.href||""));if(s)for(var l=0;l<s.length;l++)if((i=s[l]).getAttribute("href")===(null==n.href||""===n.href?null:n.href)&&i.getAttribute("rel")===(null==n.rel?null:n.rel)&&i.getAttribute("title")===(null==n.title?null:n.title)&&i.getAttribute("crossorigin")===(null==n.crossOrigin?null:n.crossOrigin)){s.splice(l,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;case"meta":if(s=Md("meta","content",o).get(r+(n.content||"")))for(l=0;l<s.length;l++)if((i=s[l]).getAttribute("content")===(null==n.content?null:""+n.content)&&i.getAttribute("name")===(null==n.name?null:n.name)&&i.getAttribute("property")===(null==n.property?null:n.property)&&i.getAttribute("http-equiv")===(null==n.httpEquiv?null:n.httpEquiv)&&i.getAttribute("charset")===(null==n.charSet?null:n.charSet)){s.splice(l,1);break t}ed(i=o.createElement(r),r,n),o.head.appendChild(i);break;default:throw Error(a(468,r))}i[Oe]=e,We(i),r=i}e.stateNode=r}else $d(o,e.type,e.stateNode);else e.stateNode=Ld(o,r,e.memoizedProps);else i!==r?(null===i?null!==n.stateNode&&(n=n.stateNode).parentNode.removeChild(n):i.count--,null===r?$d(o,e.type,e.stateNode):Ld(o,r,e.memoizedProps)):null===r&&null!==e.stateNode&&fl(e,e.memoizedProps,n.memoizedProps)}break;case 27:Ol(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),null!==n&&4&r&&fl(e,e.memoizedProps,n.memoizedProps);break;case 5:if(Ol(t,e),zl(e),512&r&&(xl||null===n||dl(n,n.return)),32&e.flags){o=e.stateNode;try{St(o,"")}catch(h){uu(e,e.return,h)}}4&r&&null!=e.stateNode&&fl(e,o=e.memoizedProps,null!==n?n.memoizedProps:o),1024&r&&(wl=!0);break;case 6:if(Ol(t,e),zl(e),4&r){if(null===e.stateNode)throw Error(a(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(h){uu(e,e.return,h)}}break;case 3:if(Id=null,o=Dl,Dl=Ed(t.containerInfo),Ol(t,e),Dl=o,zl(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{Pp(t.containerInfo)}catch(h){uu(e,e.return,h)}wl&&(wl=!1,Nl(e));break;case 4:r=Dl,Dl=Ed(e.stateNode.containerInfo),Ol(t,e),zl(e),Dl=r;break;case 12:default:Ol(t,e),zl(e);break;case 13:Ol(t,e),zl(e),8192&e.child.flags&&null!==e.memoizedState!==(null!==n&&null!==n.memoizedState)&&(wc=te()),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Rl(e,r)));break;case 22:o=null!==e.memoizedState;var c=null!==n&&null!==n.memoizedState,u=bl,d=xl;if(bl=u||o,xl=d||c,Ol(t,e),xl=d,bl=u,zl(e),8192&r)e:for(t=e.stateNode,t._visibility=o?-2&t._visibility:1|t._visibility,o&&(null===n||c||bl||xl||Il(e)),n=null,t=e;;){if(5===t.tag||26===t.tag){if(null===n){c=n=t;try{if(i=c.stateNode,o)"function"===typeof(s=i.style).setProperty?s.setProperty("display","none","important"):s.display="none";else{l=c.stateNode;var p=c.memoizedProps.style,f=void 0!==p&&null!==p&&p.hasOwnProperty("display")?p.display:null;l.style.display=null==f||"boolean"===typeof f?"":(""+f).trim()}}catch(h){uu(c,c.return,h)}}}else if(6===t.tag){if(null===n){c=t;try{c.stateNode.nodeValue=o?"":c.memoizedProps}catch(h){uu(c,c.return,h)}}}else if((22!==t.tag&&23!==t.tag||null===t.memoizedState||t===e)&&null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;null===t.sibling;){if(null===t.return||t.return===e)break e;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}4&r&&(null!==(r=e.updateQueue)&&(null!==(n=r.retryQueue)&&(r.retryQueue=null,Rl(e,n))));break;case 19:Ol(t,e),zl(e),4&r&&(null!==(r=e.updateQueue)&&(e.updateQueue=null,Rl(e,r)));case 30:case 21:}}function zl(e){var t=e.flags;if(2&t){try{for(var n,r=e.return;null!==r;){if(hl(r)){n=r;break}r=r.return}if(null==n)throw Error(a(160));switch(n.tag){case 27:var o=n.stateNode;vl(e,ml(e),o);break;case 5:var i=n.stateNode;32&n.flags&&(St(i,""),n.flags&=-33),vl(e,ml(e),i);break;case 3:case 4:var s=n.stateNode.containerInfo;gl(e,ml(e),s);break;default:throw Error(a(161))}}catch(l){uu(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function Nl(e){if(1024&e.subtreeFlags)for(e=e.child;null!==e;){var t=e;Nl(t),5===t.tag&&1024&t.flags&&t.stateNode.reset(),e=e.sibling}}function Fl(e,t){if(8772&t.subtreeFlags)for(t=t.child;null!==t;)El(e,t.alternate,t),t=t.sibling}function Il(e){for(e=e.child;null!==e;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sl(4,t,t.return),Il(t);break;case 1:dl(t,t.return);var n=t.stateNode;"function"===typeof n.componentWillUnmount&&cl(t,t.return,n),Il(t);break;case 27:wd(t.stateNode);case 26:case 5:dl(t,t.return),Il(t);break;case 22:null===t.memoizedState&&Il(t);break;default:Il(t)}e=e.sibling}}function Ml(e,t,n){for(n=n&&0!==(8772&t.subtreeFlags),t=t.child;null!==t;){var r=t.alternate,o=e,i=t,a=i.flags;switch(i.tag){case 0:case 11:case 15:Ml(o,i,n),al(4,i);break;case 1:if(Ml(o,i,n),"function"===typeof(o=(r=i).stateNode).componentDidMount)try{o.componentDidMount()}catch(c){uu(r,r.return,c)}if(null!==(o=(r=i).updateQueue)){var s=r.stateNode;try{var l=o.shared.hiddenCallbacks;if(null!==l)for(o.shared.hiddenCallbacks=null,o=0;o<l.length;o++)pi(l[o],s)}catch(c){uu(r,r.return,c)}}n&&64&a&&ll(i),ul(i,i.return);break;case 27:yl(i);case 26:case 5:Ml(o,i,n),n&&null===r&&4&a&&pl(i),ul(i,i.return);break;case 12:Ml(o,i,n);break;case 13:Ml(o,i,n),n&&4&a&&Al(o,i);break;case 22:null===i.memoizedState&&Ml(o,i,n),ul(i,i.return);break;case 30:break;default:Ml(o,i,n)}t=t.sibling}}function $l(e,t){var n=null;null!==e&&null!==e.memoizedState&&null!==e.memoizedState.cachePool&&(n=e.memoizedState.cachePool.pool),e=null,null!==t.memoizedState&&null!==t.memoizedState.cachePool&&(e=t.memoizedState.cachePool.pool),e!==n&&(null!=e&&e.refCount++,null!=n&&zo(n))}function Bl(e,t){e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&zo(e))}function Vl(e,t,n,r){if(10256&t.subtreeFlags)for(t=t.child;null!==t;)Ul(e,t,n,r),t=t.sibling}function Ul(e,t,n,r){var o=t.flags;switch(t.tag){case 0:case 11:case 15:Vl(e,t,n,r),2048&o&&al(9,t);break;case 1:case 13:default:Vl(e,t,n,r);break;case 3:Vl(e,t,n,r),2048&o&&(e=null,null!==t.alternate&&(e=t.alternate.memoizedState.cache),(t=t.memoizedState.cache)!==e&&(t.refCount++,null!=e&&zo(e)));break;case 12:if(2048&o){Vl(e,t,n,r),e=t.stateNode;try{var i=t.memoizedProps,a=i.id,s=i.onPostCommit;"function"===typeof s&&s(a,null===t.alternate?"mount":"update",e.passiveEffectDuration,-0)}catch(l){uu(t,t.return,l)}}else Vl(e,t,n,r);break;case 23:break;case 22:i=t.stateNode,a=t.alternate,null!==t.memoizedState?2&i._visibility?Vl(e,t,n,r):Wl(e,t):2&i._visibility?Vl(e,t,n,r):(i._visibility|=2,Hl(e,t,n,r,0!==(10256&t.subtreeFlags))),2048&o&&$l(a,t);break;case 24:Vl(e,t,n,r),2048&o&&Bl(t.alternate,t)}}function Hl(e,t,n,r,o){for(o=o&&0!==(10256&t.subtreeFlags),t=t.child;null!==t;){var i=e,a=t,s=n,l=r,c=a.flags;switch(a.tag){case 0:case 11:case 15:Hl(i,a,s,l,o),al(8,a);break;case 23:break;case 22:var u=a.stateNode;null!==a.memoizedState?2&u._visibility?Hl(i,a,s,l,o):Wl(i,a):(u._visibility|=2,Hl(i,a,s,l,o)),o&&2048&c&&$l(a.alternate,a);break;case 24:Hl(i,a,s,l,o),o&&2048&c&&Bl(a.alternate,a);break;default:Hl(i,a,s,l,o)}t=t.sibling}}function Wl(e,t){if(10256&t.subtreeFlags)for(t=t.child;null!==t;){var n=e,r=t,o=r.flags;switch(r.tag){case 22:Wl(n,r),2048&o&&$l(r.alternate,r);break;case 24:Wl(n,r),2048&o&&Bl(r.alternate,r);break;default:Wl(n,r)}t=t.sibling}}var Yl=8192;function Kl(e){if(e.subtreeFlags&Yl)for(e=e.child;null!==e;)Ql(e),e=e.sibling}function Ql(e){switch(e.tag){case 26:Kl(e),e.flags&Yl&&null!==e.memoizedState&&function(e,t,n){if(null===Vd)throw Error(a(475));var r=Vd;if("stylesheet"===t.type&&("string"!==typeof n.media||!1!==matchMedia(n.media).matches)&&0===(4&t.state.loading)){if(null===t.instance){var o=jd(n.href),i=e.querySelector(Ad(o));if(i)return null!==(e=i._p)&&"object"===typeof e&&"function"===typeof e.then&&(r.count++,r=Hd.bind(r),e.then(r,r)),t.state.loading|=4,t.instance=i,void We(i);i=e.ownerDocument||e,n=Rd(n),(o=Sd.get(o))&&Nd(n,o),We(i=i.createElement("link"));var s=i;s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(i,"link",n),t.instance=i}null===r.stylesheets&&(r.stylesheets=new Map),r.stylesheets.set(t,e),(e=t.state.preload)&&0===(3&t.state.loading)&&(r.count++,t=Hd.bind(r),e.addEventListener("load",t),e.addEventListener("error",t))}}(Dl,e.memoizedState,e.memoizedProps);break;case 5:default:Kl(e);break;case 3:case 4:var t=Dl;Dl=Ed(e.stateNode.containerInfo),Kl(e),Dl=t;break;case 22:null===e.memoizedState&&(null!==(t=e.alternate)&&null!==t.memoizedState?(t=Yl,Yl=16777216,Kl(e),Yl=t):Kl(e))}}function Xl(e){var t=e.alternate;if(null!==t&&null!==(e=t.child)){t.child=null;do{t=e.sibling,e.sibling=null,e=t}while(null!==e)}}function ql(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Xl(e)}if(10256&e.subtreeFlags)for(e=e.child;null!==e;)Gl(e),e=e.sibling}function Gl(e){switch(e.tag){case 0:case 11:case 15:ql(e),2048&e.flags&&sl(9,e,e.return);break;case 3:case 12:default:ql(e);break;case 22:var t=e.stateNode;null!==e.memoizedState&&2&t._visibility&&(null===e.return||13!==e.return.tag)?(t._visibility&=-3,Jl(e)):ql(e)}}function Jl(e){var t=e.deletions;if(0!==(16&e.flags)){if(null!==t)for(var n=0;n<t.length;n++){var r=t[n];kl=r,Zl(r,e)}Xl(e)}for(e=e.child;null!==e;){switch((t=e).tag){case 0:case 11:case 15:sl(8,t,t.return),Jl(t);break;case 22:2&(n=t.stateNode)._visibility&&(n._visibility&=-3,Jl(t));break;default:Jl(t)}e=e.sibling}}function Zl(e,t){for(;null!==kl;){var n=kl;switch(n.tag){case 0:case 11:case 15:sl(8,n,t);break;case 23:case 22:if(null!==n.memoizedState&&null!==n.memoizedState.cachePool){var r=n.memoizedState.cachePool.pool;null!=r&&r.refCount++}break;case 24:zo(n.memoizedState.cache)}if(null!==(r=n.child))r.return=n,kl=r;else e:for(n=e;null!==kl;){var o=(r=kl).sibling,i=r.return;if(Cl(r),r===n){kl=null;break e}if(null!==o){o.return=i,kl=o;break e}kl=i}}}var ec={getCacheForType:function(e){var t=Po(Do),n=t.data.get(e);return void 0===n&&(n=e(),t.data.set(e,n)),n}},tc="function"===typeof WeakMap?WeakMap:Map,nc=0,rc=null,oc=null,ic=0,ac=0,sc=null,lc=!1,cc=!1,uc=!1,dc=0,pc=0,fc=0,hc=0,mc=0,gc=0,vc=0,yc=null,bc=null,xc=!1,wc=0,Sc=1/0,kc=null,Ec=null,Cc=0,Tc=null,Pc=null,_c=0,jc=0,Ac=null,Rc=null,Oc=0,Dc=null;function Lc(){if(0!==(2&nc)&&0!==ic)return ic&-ic;if(null!==L.T){return 0!==Io?Io:ju()}return Ae()}function zc(){0===gc&&(gc=0===(536870912&ic)||io?Se():536870912);var e=os.current;return null!==e&&(e.flags|=32),gc}function Nc(e,t,n){(e!==rc||2!==ac&&9!==ac)&&null===e.cancelPendingCommit||(Uc(e,0),$c(e,ic,gc,!1)),Ce(e,n),0!==(2&nc)&&e===rc||(e===rc&&(0===(2&nc)&&(hc|=n),4===pc&&$c(e,ic,gc,!1)),Su(e))}function Fc(e,t,n){if(0!==(6&nc))throw Error(a(327));for(var r=!n&&0===(124&t)&&0===(t&e.expiredLanes)||xe(e,t),o=r?function(e,t){var n=nc;nc|=2;var r=Wc(),o=Yc();rc!==e||ic!==t?(kc=null,Sc=te()+500,Uc(e,t)):cc=xe(e,t);e:for(;;)try{if(0!==ac&&null!==oc){t=oc;var i=sc;t:switch(ac){case 1:ac=0,sc=null,Zc(e,t,i,1);break;case 2:case 9:if(qo(i)){ac=0,sc=null,Jc(t);break}t=function(){2!==ac&&9!==ac||rc!==e||(ac=7),Su(e)},i.then(t,t);break e;case 3:ac=7;break e;case 4:ac=5;break e;case 7:qo(i)?(ac=0,sc=null,Jc(t)):(ac=0,sc=null,Zc(e,t,i,7));break;case 5:var s=null;switch(oc.tag){case 26:s=oc.memoizedState;case 5:case 27:var l=oc;if(!s||Bd(s)){ac=0,sc=null;var c=l.sibling;if(null!==c)oc=c;else{var u=l.return;null!==u?(oc=u,eu(u)):oc=null}break t}}ac=0,sc=null,Zc(e,t,i,5);break;case 6:ac=0,sc=null,Zc(e,t,i,6);break;case 8:Vc(),pc=6;break e;default:throw Error(a(462))}}qc();break}catch(d){Hc(e,d)}return bo=yo=null,L.H=r,L.A=o,nc=n,null!==oc?0:(rc=null,ic=0,_r(),pc)}(e,t):Qc(e,t,!0),i=r;;){if(0===o){cc&&!r&&$c(e,t,0,!1);break}if(n=e.current.alternate,!i||Mc(n)){if(2===o){if(i=t,e.errorRecoveryDisabledLanes&i)var s=0;else s=0!==(s=-536870913&e.pendingLanes)?s:536870912&s?536870912:0;if(0!==s){t=s;e:{var l=e;o=yc;var c=l.current.memoizedState.isDehydrated;if(c&&(Uc(l,s).flags|=256),2!==(s=Qc(l,s,!1))){if(uc&&!c){l.errorRecoveryDisabledLanes|=i,hc|=i,o=4;break e}i=bc,bc=o,null!==i&&(null===bc?bc=i:bc.push.apply(bc,i))}o=s}if(i=!1,2!==o)continue}}if(1===o){Uc(e,0),$c(e,t,0,!0);break}e:{switch(r=e,i=o){case 0:case 1:throw Error(a(345));case 4:if((4194048&t)!==t)break;case 6:$c(r,t,gc,!lc);break e;case 2:bc=null;break;case 3:case 5:break;default:throw Error(a(329))}if((62914560&t)===t&&10<(o=wc+300-te())){if($c(r,t,gc,!lc),0!==be(r,0,!0))break e;r.timeoutHandle=ld(Ic.bind(null,r,n,bc,kc,xc,t,gc,hc,vc,lc,i,2,-0,0),o)}else Ic(r,n,bc,kc,xc,t,gc,hc,vc,lc,i,0,-0,0)}break}o=Qc(e,t,!1),i=!1}Su(e)}function Ic(e,t,n,r,o,i,s,l,c,u,d,p,f,h){if(e.timeoutHandle=-1,(8192&(p=t.subtreeFlags)||16785408===(16785408&p))&&(Vd={stylesheets:null,count:0,unsuspend:Ud},Ql(t),null!==(p=function(){if(null===Vd)throw Error(a(475));var e=Vd;return e.stylesheets&&0===e.count&&Yd(e,e.stylesheets),0<e.count?function(t){var n=setTimeout((function(){if(e.stylesheets&&Yd(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}}),6e4);return e.unsuspend=t,function(){e.unsuspend=null,clearTimeout(n)}}:null}())))return e.cancelPendingCommit=p(nu.bind(null,e,t,i,n,r,o,s,l,c,d,1,f,h)),void $c(e,i,s,!u);nu(e,t,i,n,r,o,s,l,c)}function Mc(e){for(var t=e;;){var n=t.tag;if((0===n||11===n||15===n)&&16384&t.flags&&(null!==(n=t.updateQueue)&&null!==(n=n.stores)))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!Xn(i(),o))return!1}catch(a){return!1}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function $c(e,t,n,r){t&=~mc,t&=~hc,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var o=t;0<o;){var i=31-fe(o),a=1<<i;r[i]=-1,o&=~a}0!==n&&Te(e,n,t)}function Bc(){return 0!==(6&nc)||(ku(0,!1),!1)}function Vc(){if(null!==oc){if(0===ac)var e=oc.return;else bo=yo=null,Ii(e=oc),Xa=null,qa=0,e=oc;for(;null!==e;)il(e.alternate,e),e=e.return;oc=null}}function Uc(e,t){var n=e.timeoutHandle;-1!==n&&(e.timeoutHandle=-1,cd(n)),null!==(n=e.cancelPendingCommit)&&(e.cancelPendingCommit=null,n()),Vc(),rc=e,oc=n=Ir(e.current,null),ic=t,ac=0,sc=null,lc=!1,cc=xe(e,t),uc=!1,vc=gc=mc=hc=fc=pc=0,bc=yc=null,xc=!1,0!==(8&t)&&(t|=32&t);var r=e.entangledLanes;if(0!==r)for(e=e.entanglements,r&=t;0<r;){var o=31-fe(r),i=1<<o;t|=e[o],r&=~i}return dc=t,_r(),n}function Hc(e,t){xi=null,L.H=Wa,t===Yo||t===Qo?(t=ei(),ac=3):t===Ko?(t=ei(),ac=4):ac=t===Ts?8:null!==t&&"object"===typeof t&&"function"===typeof t.then?6:1,sc=t,null===oc&&(pc=1,ws(e,Er(t,e.current)))}function Wc(){var e=L.H;return L.H=Wa,null===e?Wa:e}function Yc(){var e=L.A;return L.A=ec,e}function Kc(){pc=4,lc||(4194048&ic)!==ic&&null!==os.current||(cc=!0),0===(134217727&fc)&&0===(134217727&hc)||null===rc||$c(rc,ic,gc,!1)}function Qc(e,t,n){var r=nc;nc|=2;var o=Wc(),i=Yc();rc===e&&ic===t||(kc=null,Uc(e,t)),t=!1;var a=pc;e:for(;;)try{if(0!==ac&&null!==oc){var s=oc,l=sc;switch(ac){case 8:Vc(),a=6;break e;case 3:case 2:case 9:case 6:null===os.current&&(t=!0);var c=ac;if(ac=0,sc=null,Zc(e,s,l,c),n&&cc){a=0;break e}break;default:c=ac,ac=0,sc=null,Zc(e,s,l,c)}}Xc(),a=pc;break}catch(u){Hc(e,u)}return t&&e.shellSuspendCounter++,bo=yo=null,nc=r,L.H=o,L.A=i,null===oc&&(rc=null,ic=0,_r()),a}function Xc(){for(;null!==oc;)Gc(oc)}function qc(){for(;null!==oc&&!Z();)Gc(oc)}function Gc(e){var t=Gs(e.alternate,e,dc);e.memoizedProps=e.pendingProps,null===t?eu(e):oc=t}function Jc(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=Ns(n,t,t.pendingProps,t.type,void 0,ic);break;case 11:t=Ns(n,t,t.pendingProps,t.type.render,t.ref,ic);break;case 5:Ii(t);default:il(n,t),t=Gs(n,t=oc=Mr(t,dc),dc)}e.memoizedProps=e.pendingProps,null===t?eu(e):oc=t}function Zc(e,t,n,r){bo=yo=null,Ii(t),Xa=null,qa=0;var o=t.return;try{if(function(e,t,n,r,o){if(n.flags|=32768,null!==r&&"object"===typeof r&&"function"===typeof r.then){if(null!==(t=n.alternate)&&Eo(t,n,o,!0),null!==(n=os.current)){switch(n.tag){case 13:return null===is?Kc():null===n.alternate&&0===pc&&(pc=3),n.flags&=-257,n.flags|=65536,n.lanes=o,r===Xo?n.flags|=16384:(null===(t=n.updateQueue)?n.updateQueue=new Set([r]):t.add(r),du(e,r,o)),!1;case 22:return n.flags|=65536,r===Xo?n.flags|=16384:(null===(t=n.updateQueue)?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):null===(n=t.retryQueue)?t.retryQueue=new Set([r]):n.add(r),du(e,r,o)),!1}throw Error(a(435,n.tag))}return du(e,r,o),Kc(),!1}if(io)return null!==(t=os.current)?(0===(65536&t.flags)&&(t.flags|=256),t.flags|=65536,t.lanes=o,r!==lo&&go(Er(e=Error(a(422),{cause:r}),n))):(r!==lo&&go(Er(t=Error(a(423),{cause:r}),n)),(e=e.current.alternate).flags|=65536,o&=-o,e.lanes|=o,r=Er(r,n),li(e,o=ks(e.stateNode,r,o)),4!==pc&&(pc=2)),!1;var i=Error(a(520),{cause:r});if(i=Er(i,n),null===yc?yc=[i]:yc.push(i),4!==pc&&(pc=2),null===t)return!0;r=Er(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=o&-o,n.lanes|=e,li(n,e=ks(n.stateNode,r,e)),!1;case 1:if(t=n.type,i=n.stateNode,0===(128&n.flags)&&("function"===typeof t.getDerivedStateFromError||null!==i&&"function"===typeof i.componentDidCatch&&(null===Ec||!Ec.has(i))))return n.flags|=65536,o&=-o,n.lanes|=o,Cs(o=Es(o),e,n,r),li(n,o),!1}n=n.return}while(null!==n);return!1}(e,o,t,n,ic))return pc=1,ws(e,Er(n,e.current)),void(oc=null)}catch(i){if(null!==o)throw oc=o,i;return pc=1,ws(e,Er(n,e.current)),void(oc=null)}32768&t.flags?(io||1===r?e=!0:cc||0!==(536870912&ic)?e=!1:(lc=e=!0,(2===r||9===r||3===r||6===r)&&(null!==(r=os.current)&&13===r.tag&&(r.flags|=16384))),tu(t,e)):eu(t)}function eu(e){var t=e;do{if(0!==(32768&t.flags))return void tu(t,lc);e=t.return;var n=rl(t.alternate,t,dc);if(null!==n)return void(oc=n);if(null!==(t=t.sibling))return void(oc=t);oc=t=e}while(null!==t);0===pc&&(pc=5)}function tu(e,t){do{var n=ol(e.alternate,e);if(null!==n)return n.flags&=32767,void(oc=n);if(null!==(n=e.return)&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&null!==(e=e.sibling))return void(oc=e);oc=e=n}while(null!==e);pc=6,oc=null}function nu(e,t,n,r,o,i,s,l,c){e.cancelPendingCommit=null;do{su()}while(0!==Cc);if(0!==(6&nc))throw Error(a(327));if(null!==t){if(t===e.current)throw Error(a(177));if(i=t.lanes|t.childLanes,function(e,t,n,r,o,i){var a=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,l=e.expirationTimes,c=e.hiddenUpdates;for(n=a&~n;0<n;){var u=31-fe(n),d=1<<u;s[u]=0,l[u]=-1;var p=c[u];if(null!==p)for(c[u]=null,u=0;u<p.length;u++){var f=p[u];null!==f&&(f.lane&=-536870913)}n&=~d}0!==r&&Te(e,r,0),0!==i&&0===o&&0!==e.tag&&(e.suspendedLanes|=i&~(a&~t))}(e,n,i|=Pr,s,l,c),e===rc&&(oc=rc=null,ic=0),Pc=t,Tc=e,_c=n,jc=i,Ac=o,Rc=r,0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?(e.callbackNode=null,e.callbackPriority=0,G(ie,(function(){return lu(),null}))):(e.callbackNode=null,e.callbackPriority=0),r=0!==(13878&t.flags),0!==(13878&t.subtreeFlags)||r){r=L.T,L.T=null,o=z.p,z.p=2,s=nc,nc|=4;try{!function(e,t){if(e=e.containerInfo,td=np,tr(e=er(e))){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch(g){n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,f=null;t:for(;;){for(var h;p!==n||0!==o&&3!==p.nodeType||(l=s+o),p!==i||0!==r&&3!==p.nodeType||(c=s+r),3===p.nodeType&&(s+=p.nodeValue.length),null!==(h=p.firstChild);)f=p,p=h;for(;;){if(p===e)break t;if(f===n&&++u===o&&(l=s),f===i&&++d===r&&(c=s),null!==(h=p.nextSibling))break;f=(p=f).parentNode}p=h}n=-1===l||-1===c?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for(nd={focusedElem:e,selectionRange:n},np=!1,kl=t;null!==kl;)if(e=(t=kl).child,0!==(1024&t.subtreeFlags)&&null!==e)e.return=t,kl=e;else for(;null!==kl;){switch(i=(t=kl).alternate,e=t.flags,t.tag){case 0:case 11:case 15:case 5:case 26:case 27:case 6:case 4:case 17:break;case 1:if(0!==(1024&e)&&null!==i){e=void 0,n=t,o=i.memoizedProps,i=i.memoizedState,r=n.stateNode;try{var m=gs(n.type,o,(n.elementType,n.type));e=r.getSnapshotBeforeUpdate(m,i),r.__reactInternalSnapshotBeforeUpdate=e}catch(v){uu(n,n.return,v)}}break;case 3:if(0!==(1024&e))if(9===(n=(e=t.stateNode.containerInfo).nodeType))md(e);else if(1===n)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":md(e);break;default:e.textContent=""}break;default:if(0!==(1024&e))throw Error(a(163))}if(null!==(e=t.sibling)){e.return=t.return,kl=e;break}kl=t.return}}(e,t)}finally{nc=s,z.p=o,L.T=r}}Cc=1,ru(),ou(),iu()}}function ru(){if(1===Cc){Cc=0;var e=Tc,t=Pc,n=0!==(13878&t.flags);if(0!==(13878&t.subtreeFlags)||n){n=L.T,L.T=null;var r=z.p;z.p=2;var o=nc;nc|=4;try{Ll(t,e);var i=nd,a=er(e.containerInfo),s=i.focusedElem,l=i.selectionRange;if(a!==s&&s&&s.ownerDocument&&Zn(s.ownerDocument.documentElement,s)){if(null!==l&&tr(s)){var c=l.start,u=l.end;if(void 0===u&&(u=c),"selectionStart"in s)s.selectionStart=c,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,p=d&&d.defaultView||window;if(p.getSelection){var f=p.getSelection(),h=s.textContent.length,m=Math.min(l.start,h),g=void 0===l.end?m:Math.min(l.end,h);!f.extend&&m>g&&(a=g,g=m,m=a);var v=Jn(s,m),y=Jn(s,g);if(v&&y&&(1!==f.rangeCount||f.anchorNode!==v.node||f.anchorOffset!==v.offset||f.focusNode!==y.node||f.focusOffset!==y.offset)){var b=d.createRange();b.setStart(v.node,v.offset),f.removeAllRanges(),m>g?(f.addRange(b),f.extend(y.node,y.offset)):(b.setEnd(y.node,y.offset),f.addRange(b))}}}}for(d=[],f=s;f=f.parentNode;)1===f.nodeType&&d.push({element:f,left:f.scrollLeft,top:f.scrollTop});for("function"===typeof s.focus&&s.focus(),s=0;s<d.length;s++){var x=d[s];x.element.scrollLeft=x.left,x.element.scrollTop=x.top}}np=!!td,nd=td=null}finally{nc=o,z.p=r,L.T=n}}e.current=t,Cc=2}}function ou(){if(2===Cc){Cc=0;var e=Tc,t=Pc,n=0!==(8772&t.flags);if(0!==(8772&t.subtreeFlags)||n){n=L.T,L.T=null;var r=z.p;z.p=2;var o=nc;nc|=4;try{El(e,t.alternate,t)}finally{nc=o,z.p=r,L.T=n}}Cc=3}}function iu(){if(4===Cc||3===Cc){Cc=0,ee();var e=Tc,t=Pc,n=_c,r=Rc;0!==(10256&t.subtreeFlags)||0!==(10256&t.flags)?Cc=5:(Cc=0,Pc=Tc=null,au(e,e.pendingLanes));var o=e.pendingLanes;if(0===o&&(Ec=null),je(n),t=t.stateNode,de&&"function"===typeof de.onCommitFiberRoot)try{de.onCommitFiberRoot(ue,t,void 0,128===(128&t.current.flags))}catch(l){}if(null!==r){t=L.T,o=z.p,z.p=2,L.T=null;try{for(var i=e.onRecoverableError,a=0;a<r.length;a++){var s=r[a];i(s.value,{componentStack:s.stack})}}finally{L.T=t,z.p=o}}0!==(3&_c)&&su(),Su(e),o=e.pendingLanes,0!==(4194090&n)&&0!==(42&o)?e===Dc?Oc++:(Oc=0,Dc=e):Oc=0,ku(0,!1)}}function au(e,t){0===(e.pooledCacheLanes&=t)&&(null!=(t=e.pooledCache)&&(e.pooledCache=null,zo(t)))}function su(e){return ru(),ou(),iu(),lu()}function lu(){if(5!==Cc)return!1;var e=Tc,t=jc;jc=0;var n=je(_c),r=L.T,o=z.p;try{z.p=32>n?32:n,L.T=null,n=Ac,Ac=null;var i=Tc,s=_c;if(Cc=0,Pc=Tc=null,_c=0,0!==(6&nc))throw Error(a(331));var l=nc;if(nc|=4,Gl(i.current),Ul(i,i.current,s,n),nc=l,ku(0,!1),de&&"function"===typeof de.onPostCommitFiberRoot)try{de.onPostCommitFiberRoot(ue,i)}catch(c){}return!0}finally{z.p=o,L.T=r,au(e,t)}}function cu(e,t,n){t=Er(n,t),null!==(e=ai(e,t=ks(e.stateNode,t,2),2))&&(Ce(e,2),Su(e))}function uu(e,t,n){if(3===e.tag)cu(e,e,n);else for(;null!==t;){if(3===t.tag){cu(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Ec||!Ec.has(r))){e=Er(n,e),null!==(r=ai(t,n=Es(2),2))&&(Cs(n,r,t,e),Ce(r,2),Su(r));break}}t=t.return}}function du(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new tc;var o=new Set;r.set(t,o)}else void 0===(o=r.get(t))&&(o=new Set,r.set(t,o));o.has(n)||(uc=!0,o.add(n),e=pu.bind(null,e,t,n),t.then(e,e))}function pu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,rc===e&&(ic&n)===n&&(4===pc||3===pc&&(62914560&ic)===ic&&300>te()-wc?0===(2&nc)&&Uc(e,0):mc|=n,vc===ic&&(vc=0)),Su(e)}function fu(e,t){0===t&&(t=ke()),null!==(e=Rr(e,t))&&(Ce(e,t),Su(e))}function hu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),fu(e,n)}function mu(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;null!==o&&(n=o.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(a(314))}null!==r&&r.delete(t),fu(e,n)}var gu=null,vu=null,yu=!1,bu=!1,xu=!1,wu=0;function Su(e){e!==vu&&null===e.next&&(null===vu?gu=vu=e:vu=vu.next=e),bu=!0,yu||(yu=!0,dd((function(){0!==(6&nc)?G(re,Eu):Cu()})))}function ku(e,t){if(!xu&&bu){xu=!0;do{for(var n=!1,r=gu;null!==r;){if(!t)if(0!==e){var o=r.pendingLanes;if(0===o)var i=0;else{var a=r.suspendedLanes,s=r.pingedLanes;i=(1<<31-fe(42|e)+1)-1,i=201326741&(i&=o&~(a&~s))?201326741&i|1:i?2|i:0}0!==i&&(n=!0,_u(r,i))}else i=ic,0===(3&(i=be(r,r===rc?i:0,null!==r.cancelPendingCommit||-1!==r.timeoutHandle)))||xe(r,i)||(n=!0,_u(r,i));r=r.next}}while(n);xu=!1}}function Eu(){Cu()}function Cu(){bu=yu=!1;var e=0;0!==wu&&(function(){var e=window.event;if(e&&"popstate"===e.type)return e!==sd&&(sd=e,!0);return sd=null,!1}()&&(e=wu),wu=0);for(var t=te(),n=null,r=gu;null!==r;){var o=r.next,i=Tu(r,t);0===i?(r.next=null,null===n?gu=o:n.next=o,null===o&&(vu=n)):(n=r,(0!==e||0!==(3&i))&&(bu=!0)),r=o}ku(e,!1)}function Tu(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=-62914561&e.pendingLanes;0<i;){var a=31-fe(i),s=1<<a,l=o[a];-1===l?0!==(s&n)&&0===(s&r)||(o[a]=we(s,t)):l<=t&&(e.expiredLanes|=s),i&=~s}if(n=ic,n=be(e,e===(t=rc)?n:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle),r=e.callbackNode,0===n||e===t&&(2===ac||9===ac)||null!==e.cancelPendingCommit)return null!==r&&null!==r&&J(r),e.callbackNode=null,e.callbackPriority=0;if(0===(3&n)||xe(e,n)){if((t=n&-n)===e.callbackPriority)return t;switch(null!==r&&J(r),je(n)){case 2:case 8:n=oe;break;case 32:default:n=ie;break;case 268435456:n=se}return r=Pu.bind(null,e),n=G(n,r),e.callbackPriority=t,e.callbackNode=n,t}return null!==r&&null!==r&&J(r),e.callbackPriority=2,e.callbackNode=null,2}function Pu(e,t){if(0!==Cc&&5!==Cc)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(su()&&e.callbackNode!==n)return null;var r=ic;return 0===(r=be(e,e===rc?r:0,null!==e.cancelPendingCommit||-1!==e.timeoutHandle))?null:(Fc(e,r,t),Tu(e,te()),null!=e.callbackNode&&e.callbackNode===n?Pu.bind(null,e):null)}function _u(e,t){if(su())return null;Fc(e,t,!0)}function ju(){return 0===wu&&(wu=Se()),wu}function Au(e){return null==e||"symbol"===typeof e||"boolean"===typeof e?null:"function"===typeof e?e:jt(""+e)}function Ru(e,t){var n=t.ownerDocument.createElement("input");return n.name=t.name,n.value=t.value,e.id&&n.setAttribute("form",e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}for(var Ou=0;Ou<wr.length;Ou++){var Du=wr[Ou];Sr(Du.toLowerCase(),"on"+(Du[0].toUpperCase()+Du.slice(1)))}Sr(fr,"onAnimationEnd"),Sr(hr,"onAnimationIteration"),Sr(mr,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(gr,"onTransitionRun"),Sr(vr,"onTransitionStart"),Sr(yr,"onTransitionCancel"),Sr(br,"onTransitionEnd"),Xe("onMouseEnter",["mouseout","mouseover"]),Xe("onMouseLeave",["mouseout","mouseover"]),Xe("onPointerEnter",["pointerout","pointerover"]),Xe("onPointerLeave",["pointerout","pointerover"]),Qe("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Qe("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Qe("onBeforeInput",["compositionend","keypress","textInput","paste"]),Qe("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Qe("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Lu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),zu=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Lu));function Nu(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var a=r.length-1;0<=a;a--){var s=r[a],l=s.instance,c=s.currentTarget;if(s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=c;try{i(o)}catch(u){vs(u)}o.currentTarget=null,i=l}else for(a=0;a<r.length;a++){if(l=(s=r[a]).instance,c=s.currentTarget,s=s.listener,l!==i&&o.isPropagationStopped())break e;i=s,o.currentTarget=c;try{i(o)}catch(u){vs(u)}o.currentTarget=null,i=l}}}}function Fu(e,t){var n=t[ze];void 0===n&&(n=t[ze]=new Set);var r=e+"__bubble";n.has(r)||(Bu(t,e,2,!1),n.add(r))}function Iu(e,t,n){var r=0;t&&(r|=4),Bu(n,e,r,t)}var Mu="_reactListening"+Math.random().toString(36).slice(2);function $u(e){if(!e[Mu]){e[Mu]=!0,Ye.forEach((function(t){"selectionchange"!==t&&(zu.has(t)||Iu(t,!1,e),Iu(t,!0,e))}));var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Mu]||(t[Mu]=!0,Iu("selectionchange",!1,t))}}function Bu(e,t,n,r){switch(cp(t)){case 2:var o=rp;break;case 8:o=op;break;default:o=ip}n=o.bind(null,t,n,e),o=void 0,!Mt||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(o=!0),r?void 0!==o?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):void 0!==o?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function Vu(e,t,n,r,o){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var a=r.tag;if(3===a||4===a){var s=r.stateNode.containerInfo;if(s===o)break;if(4===a)for(a=r.return;null!==a;){var c=a.tag;if((3===c||4===c)&&a.stateNode.containerInfo===o)return;a=a.return}for(;null!==s;){if(null===(a=Be(s)))return;if(5===(c=a.tag)||6===c||26===c||27===c){r=i=a;continue e}s=s.parentNode}}r=r.return}Nt((function(){var r=i,o=Rt(n),a=[];e:{var s=xr.get(e);if(void 0!==s){var c=Zt,u=e;switch(e){case"keypress":if(0===Wt(n))break e;case"keydown":case"keyup":c=mn;break;case"focusin":u="focus",c=an;break;case"focusout":u="blur",c=an;break;case"beforeblur":case"afterblur":c=an;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":c=rn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":c=on;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":c=vn;break;case fr:case hr:case mr:c=sn;break;case br:c=yn;break;case"scroll":case"scrollend":c=tn;break;case"wheel":c=bn;break;case"copy":case"cut":case"paste":c=ln;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":c=gn;break;case"toggle":case"beforetoggle":c=xn}var d=0!==(4&t),p=!d&&("scroll"===e||"scrollend"===e),f=d?null!==s?s+"Capture":null:s;d=[];for(var h,m=r;null!==m;){var g=m;if(h=g.stateNode,5!==(g=g.tag)&&26!==g&&27!==g||null===h||null===f||null!=(g=Ft(m,f))&&d.push(Uu(m,g,h)),p)break;m=m.return}0<d.length&&(s=new c(s,u,null,n,o),a.push({event:s,listeners:d}))}}if(0===(7&t)){if(c="mouseout"===e||"pointerout"===e,(!(s="mouseover"===e||"pointerover"===e)||n===At||!(u=n.relatedTarget||n.fromElement)||!Be(u)&&!u[Le])&&(c||s)&&(s=o.window===o?o:(s=o.ownerDocument)?s.defaultView||s.parentWindow:window,c?(c=r,null!==(u=(u=n.relatedTarget||n.toElement)?Be(u):null)&&(p=l(u),d=u.tag,u!==p||5!==d&&27!==d&&6!==d)&&(u=null)):(c=null,u=r),c!==u)){if(d=rn,g="onMouseLeave",f="onMouseEnter",m="mouse","pointerout"!==e&&"pointerover"!==e||(d=gn,g="onPointerLeave",f="onPointerEnter",m="pointer"),p=null==c?s:Ue(c),h=null==u?s:Ue(u),(s=new d(g,m+"leave",c,n,o)).target=p,s.relatedTarget=h,g=null,Be(o)===r&&((d=new d(f,m+"enter",u,n,o)).target=h,d.relatedTarget=p,g=d),p=g,c&&u)e:{for(f=u,m=0,h=d=c;h;h=Wu(h))m++;for(h=0,g=f;g;g=Wu(g))h++;for(;0<m-h;)d=Wu(d),m--;for(;0<h-m;)f=Wu(f),h--;for(;m--;){if(d===f||null!==f&&d===f.alternate)break e;d=Wu(d),f=Wu(f)}d=null}else d=null;null!==c&&Yu(a,s,c,d,!1),null!==u&&null!==p&&Yu(a,p,u,d,!0)}if("select"===(c=(s=r?Ue(r):window).nodeName&&s.nodeName.toLowerCase())||"input"===c&&"file"===s.type)var v=In;else if(On(s))if(Mn)v=Qn;else{v=Yn;var y=Wn}else!(c=s.nodeName)||"input"!==c.toLowerCase()||"checkbox"!==s.type&&"radio"!==s.type?r&&Tt(r.elementType)&&(v=In):v=Kn;switch(v&&(v=v(e,r))?Dn(a,v,n,o):(y&&y(e,s,r),"focusout"===e&&r&&"number"===s.type&&null!=r.memoizedProps.value&&yt(s,"number",s.value)),y=r?Ue(r):window,e){case"focusin":(On(y)||"true"===y.contentEditable)&&(rr=y,or=r,ir=null);break;case"focusout":ir=or=rr=null;break;case"mousedown":ar=!0;break;case"contextmenu":case"mouseup":case"dragend":ar=!1,sr(a,n,o);break;case"selectionchange":if(nr)break;case"keydown":case"keyup":sr(a,n,o)}var b;if(Sn)e:{switch(e){case"compositionstart":var x="onCompositionStart";break e;case"compositionend":x="onCompositionEnd";break e;case"compositionupdate":x="onCompositionUpdate";break e}x=void 0}else An?_n(e,n)&&(x="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(x="onCompositionStart");x&&(Cn&&"ko"!==n.locale&&(An||"onCompositionStart"!==x?"onCompositionEnd"===x&&An&&(b=Ht()):(Vt="value"in(Bt=o)?Bt.value:Bt.textContent,An=!0)),0<(y=Hu(r,x)).length&&(x=new cn(x,e,null,n,o),a.push({event:x,listeners:y}),b?x.data=b:null!==(b=jn(n))&&(x.data=b))),(b=En?function(e,t){switch(e){case"compositionend":return jn(t);case"keypress":return 32!==t.which?null:(Pn=!0,Tn);case"textInput":return(e=t.data)===Tn&&Pn?null:e;default:return null}}(e,n):function(e,t){if(An)return"compositionend"===e||!Sn&&_n(e,t)?(e=Ht(),Ut=Vt=Bt=null,An=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Cn&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(x=Hu(r,"onBeforeInput")).length&&(y=new cn("onBeforeInput","beforeinput",null,n,o),a.push({event:y,listeners:x}),y.data=b)),function(e,t,n,r,o){if("submit"===t&&n&&n.stateNode===o){var i=Au((o[De]||null).action),a=r.submitter;a&&null!==(t=(t=a[De]||null)?Au(t.formAction):a.getAttribute("formAction"))&&(i=t,a=null);var s=new Zt("action","action",null,r,o);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(0!==wu){var e=a?Ru(o,a):new FormData(o);Ra(n,{pending:!0,data:e,method:o.method,action:i},null,e)}}else"function"===typeof i&&(s.preventDefault(),e=a?Ru(o,a):new FormData(o),Ra(n,{pending:!0,data:e,method:o.method,action:i},i,e))},currentTarget:o}]})}}(a,e,r,n,o)}Nu(a,t)}))}function Uu(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Hu(e,t){for(var n=t+"Capture",r=[];null!==e;){var o=e,i=o.stateNode;if(5!==(o=o.tag)&&26!==o&&27!==o||null===i||(null!=(o=Ft(e,n))&&r.unshift(Uu(e,o,i)),null!=(o=Ft(e,t))&&r.push(Uu(e,o,i))),3===e.tag)return r;e=e.return}return[]}function Wu(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag&&27!==e.tag);return e||null}function Yu(e,t,n,r,o){for(var i=t._reactName,a=[];null!==n&&n!==r;){var s=n,l=s.alternate,c=s.stateNode;if(s=s.tag,null!==l&&l===r)break;5!==s&&26!==s&&27!==s||null===c||(l=c,o?null!=(c=Ft(n,i))&&a.unshift(Uu(n,c,l)):o||null!=(c=Ft(n,i))&&a.push(Uu(n,c,l))),n=n.return}0!==a.length&&e.push({event:t,listeners:a})}var Ku=/\r\n?/g,Qu=/\u0000|\uFFFD/g;function Xu(e){return("string"===typeof e?e:""+e).replace(Ku,"\n").replace(Qu,"")}function qu(e,t){return t=Xu(t),Xu(e)===t}function Gu(){}function Ju(e,t,n,r,o,i){switch(n){case"children":"string"===typeof r?"body"===t||"textarea"===t&&""===r||St(e,r):("number"===typeof r||"bigint"===typeof r)&&"body"!==t&&St(e,""+r);break;case"className":nt(e,"class",r);break;case"tabIndex":nt(e,"tabindex",r);break;case"dir":case"role":case"viewBox":case"width":case"height":nt(e,n,r);break;case"style":Ct(e,r,i);break;case"data":if("object"!==t){nt(e,"data",r);break}case"src":case"href":if(""===r&&("a"!==t||"href"!==n)){e.removeAttribute(n);break}if(null==r||"function"===typeof r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"action":case"formAction":if("function"===typeof r){e.setAttribute(n,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}if("function"===typeof i&&("formAction"===n?("input"!==t&&Ju(e,t,"name",o.name,o,null),Ju(e,t,"formEncType",o.formEncType,o,null),Ju(e,t,"formMethod",o.formMethod,o,null),Ju(e,t,"formTarget",o.formTarget,o,null)):(Ju(e,t,"encType",o.encType,o,null),Ju(e,t,"method",o.method,o,null),Ju(e,t,"target",o.target,o,null))),null==r||"symbol"===typeof r||"boolean"===typeof r){e.removeAttribute(n);break}r=jt(""+r),e.setAttribute(n,r);break;case"onClick":null!=r&&(e.onclick=Gu);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"multiple":e.multiple=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"muted":e.muted=r&&"function"!==typeof r&&"symbol"!==typeof r;break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":case"autoFocus":break;case"xlinkHref":if(null==r||"function"===typeof r||"boolean"===typeof r||"symbol"===typeof r){e.removeAttribute("xlink:href");break}n=jt(""+r),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",n);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""+r):e.removeAttribute(n);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,""):e.removeAttribute(n);break;case"capture":case"download":!0===r?e.setAttribute(n,""):!1!==r&&null!=r&&"function"!==typeof r&&"symbol"!==typeof r?e.setAttribute(n,r):e.removeAttribute(n);break;case"cols":case"rows":case"size":case"span":null!=r&&"function"!==typeof r&&"symbol"!==typeof r&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case"rowSpan":case"start":null==r||"function"===typeof r||"symbol"===typeof r||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case"popover":Fu("beforetoggle",e),Fu("toggle",e),tt(e,"popover",r);break;case"xlinkActuate":rt(e,"http://www.w3.org/1999/xlink","xlink:actuate",r);break;case"xlinkArcrole":rt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",r);break;case"xlinkRole":rt(e,"http://www.w3.org/1999/xlink","xlink:role",r);break;case"xlinkShow":rt(e,"http://www.w3.org/1999/xlink","xlink:show",r);break;case"xlinkTitle":rt(e,"http://www.w3.org/1999/xlink","xlink:title",r);break;case"xlinkType":rt(e,"http://www.w3.org/1999/xlink","xlink:type",r);break;case"xmlBase":rt(e,"http://www.w3.org/XML/1998/namespace","xml:base",r);break;case"xmlLang":rt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",r);break;case"xmlSpace":rt(e,"http://www.w3.org/XML/1998/namespace","xml:space",r);break;case"is":tt(e,"is",r);break;case"innerText":case"textContent":break;default:(!(2<n.length)||"o"!==n[0]&&"O"!==n[0]||"n"!==n[1]&&"N"!==n[1])&&tt(e,n=Pt.get(n)||n,r)}}function Zu(e,t,n,r,o,i){switch(n){case"style":Ct(e,r,i);break;case"dangerouslySetInnerHTML":if(null!=r){if("object"!==typeof r||!("__html"in r))throw Error(a(61));if(null!=(n=r.__html)){if(null!=o.children)throw Error(a(60));e.innerHTML=n}}break;case"children":"string"===typeof r?St(e,r):("number"===typeof r||"bigint"===typeof r)&&St(e,""+r);break;case"onScroll":null!=r&&Fu("scroll",e);break;case"onScrollEnd":null!=r&&Fu("scrollend",e);break;case"onClick":null!=r&&(e.onclick=Gu);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":case"innerText":case"textContent":break;default:Ke.hasOwnProperty(n)||("o"!==n[0]||"n"!==n[1]||(o=n.endsWith("Capture"),t=n.slice(2,o?n.length-7:void 0),"function"===typeof(i=null!=(i=e[De]||null)?i[n]:null)&&e.removeEventListener(t,i,o),"function"!==typeof r)?n in e?e[n]=r:!0===r?e.setAttribute(n,""):tt(e,n,r):("function"!==typeof i&&null!==i&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,o)))}}function ed(e,t,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Fu("error",e),Fu("load",e);var r,o=!1,i=!1;for(r in n)if(n.hasOwnProperty(r)){var s=n[r];if(null!=s)switch(r){case"src":o=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ju(e,t,r,s,n,null)}}return i&&Ju(e,t,"srcSet",n.srcSet,n,null),void(o&&Ju(e,t,"src",n.src,n,null));case"input":Fu("invalid",e);var l=r=s=i=null,c=null,u=null;for(o in n)if(n.hasOwnProperty(o)){var d=n[o];if(null!=d)switch(o){case"name":i=d;break;case"type":s=d;break;case"checked":c=d;break;case"defaultChecked":u=d;break;case"value":r=d;break;case"defaultValue":l=d;break;case"children":case"dangerouslySetInnerHTML":if(null!=d)throw Error(a(137,t));break;default:Ju(e,t,o,d,n,null)}}return vt(e,r,l,c,u,s,i,!1),void dt(e);case"select":for(i in Fu("invalid",e),o=s=r=null,n)if(n.hasOwnProperty(i)&&null!=(l=n[i]))switch(i){case"value":r=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:Ju(e,t,i,l,n,null)}return t=r,n=s,e.multiple=!!o,void(null!=t?bt(e,!!o,t,!1):null!=n&&bt(e,!!o,n,!0));case"textarea":for(s in Fu("invalid",e),r=i=o=null,n)if(n.hasOwnProperty(s)&&null!=(l=n[s]))switch(s){case"value":o=l;break;case"defaultValue":i=l;break;case"children":r=l;break;case"dangerouslySetInnerHTML":if(null!=l)throw Error(a(91));break;default:Ju(e,t,s,l,n,null)}return wt(e,o,i,r),void dt(e);case"option":for(c in n)if(n.hasOwnProperty(c)&&null!=(o=n[c]))if("selected"===c)e.selected=o&&"function"!==typeof o&&"symbol"!==typeof o;else Ju(e,t,c,o,n,null);return;case"dialog":Fu("beforetoggle",e),Fu("toggle",e),Fu("cancel",e),Fu("close",e);break;case"iframe":case"object":Fu("load",e);break;case"video":case"audio":for(o=0;o<Lu.length;o++)Fu(Lu[o],e);break;case"image":Fu("error",e),Fu("load",e);break;case"details":Fu("toggle",e);break;case"embed":case"source":case"link":Fu("error",e),Fu("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(u in n)if(n.hasOwnProperty(u)&&null!=(o=n[u]))switch(u){case"children":case"dangerouslySetInnerHTML":throw Error(a(137,t));default:Ju(e,t,u,o,n,null)}return;default:if(Tt(t)){for(d in n)n.hasOwnProperty(d)&&(void 0!==(o=n[d])&&Zu(e,t,d,o,n,void 0));return}}for(l in n)n.hasOwnProperty(l)&&(null!=(o=n[l])&&Ju(e,t,l,o,n,null))}var td=null,nd=null;function rd(e){return 9===e.nodeType?e:e.ownerDocument}function od(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function id(e,t){if(0===e)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return 1===e&&"foreignObject"===t?0:e}function ad(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"bigint"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var sd=null;var ld="function"===typeof setTimeout?setTimeout:void 0,cd="function"===typeof clearTimeout?clearTimeout:void 0,ud="function"===typeof Promise?Promise:void 0,dd="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ud?function(e){return ud.resolve(null).then(e).catch(pd)}:ld;function pd(e){setTimeout((function(){throw e}))}function fd(e){return"head"===e}function hd(e,t){var n=t,r=0,o=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&8===i.nodeType)if("/$"===(n=i.data)){if(0<r&&8>r){n=r;var a=e.ownerDocument;if(1&n&&wd(a.documentElement),2&n&&wd(a.body),4&n)for(wd(n=a.head),a=n.firstChild;a;){var s=a.nextSibling,l=a.nodeName;a[Me]||"SCRIPT"===l||"STYLE"===l||"LINK"===l&&"stylesheet"===a.rel.toLowerCase()||n.removeChild(a),a=s}}if(0===o)return e.removeChild(i),void Pp(t);o--}else"$"===n||"$?"===n||"$!"===n?o++:r=n.charCodeAt(0)-48;else r=0;n=i}while(n);Pp(t)}function md(e){var t=e.firstChild;for(t&&10===t.nodeType&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case"HTML":case"HEAD":case"BODY":md(n),$e(n);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if("stylesheet"===n.rel.toLowerCase())continue}e.removeChild(n)}}function gd(e){return"$!"===e.data||"$?"===e.data&&"complete"===e.ownerDocument.readyState}function vd(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t||"F!"===t||"F"===t)break;if("/$"===t)return null}}return e}var yd=null;function bd(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}function xd(e,t,n){switch(t=rd(n),e){case"html":if(!(e=t.documentElement))throw Error(a(452));return e;case"head":if(!(e=t.head))throw Error(a(453));return e;case"body":if(!(e=t.body))throw Error(a(454));return e;default:throw Error(a(451))}}function wd(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);$e(e)}var Sd=new Map,kd=new Set;function Ed(e){return"function"===typeof e.getRootNode?e.getRootNode():9===e.nodeType?e:e.ownerDocument}var Cd=z.d;z.d={f:function(){var e=Cd.f(),t=Bc();return e||t},r:function(e){var t=Ve(e);null!==t&&5===t.tag&&"form"===t.type?Da(t):Cd.r(e)},D:function(e){Cd.D(e),Pd("dns-prefetch",e,null)},C:function(e,t){Cd.C(e,t),Pd("preconnect",e,t)},L:function(e,t,n){Cd.L(e,t,n);var r=Td;if(r&&e&&t){var o='link[rel="preload"][as="'+mt(t)+'"]';"image"===t&&n&&n.imageSrcSet?(o+='[imagesrcset="'+mt(n.imageSrcSet)+'"]',"string"===typeof n.imageSizes&&(o+='[imagesizes="'+mt(n.imageSizes)+'"]')):o+='[href="'+mt(e)+'"]';var i=o;switch(t){case"style":i=jd(e);break;case"script":i=Od(e)}Sd.has(i)||(e=p({rel:"preload",href:"image"===t&&n&&n.imageSrcSet?void 0:e,as:t},n),Sd.set(i,e),null!==r.querySelector(o)||"style"===t&&r.querySelector(Ad(i))||"script"===t&&r.querySelector(Dd(i))||(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}},m:function(e,t){Cd.m(e,t);var n=Td;if(n&&e){var r=t&&"string"===typeof t.as?t.as:"script",o='link[rel="modulepreload"][as="'+mt(r)+'"][href="'+mt(e)+'"]',i=o;switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=Od(e)}if(!Sd.has(i)&&(e=p({rel:"modulepreload",href:e},t),Sd.set(i,e),null===n.querySelector(o))){switch(r){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(n.querySelector(Dd(i)))return}ed(r=n.createElement("link"),"link",e),We(r),n.head.appendChild(r)}}},X:function(e,t){Cd.X(e,t);var n=Td;if(n&&e){var r=He(n).hoistableScripts,o=Od(e),i=r.get(o);i||((i=n.querySelector(Dd(o)))||(e=p({src:e,async:!0},t),(t=Sd.get(o))&&Fd(e,t),We(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}},S:function(e,t,n){Cd.S(e,t,n);var r=Td;if(r&&e){var o=He(r).hoistableStyles,i=jd(e);t=t||"default";var a=o.get(i);if(!a){var s={loading:0,preload:null};if(a=r.querySelector(Ad(i)))s.loading=5;else{e=p({rel:"stylesheet",href:e,"data-precedence":t},n),(n=Sd.get(i))&&Nd(e,n);var l=a=r.createElement("link");We(l),ed(l,"link",e),l._p=new Promise((function(e,t){l.onload=e,l.onerror=t})),l.addEventListener("load",(function(){s.loading|=1})),l.addEventListener("error",(function(){s.loading|=2})),s.loading|=4,zd(a,t,r)}a={type:"stylesheet",instance:a,count:1,state:s},o.set(i,a)}}},M:function(e,t){Cd.M(e,t);var n=Td;if(n&&e){var r=He(n).hoistableScripts,o=Od(e),i=r.get(o);i||((i=n.querySelector(Dd(o)))||(e=p({src:e,async:!0,type:"module"},t),(t=Sd.get(o))&&Fd(e,t),We(i=n.createElement("script")),ed(i,"link",e),n.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},r.set(o,i))}}};var Td="undefined"===typeof document?null:document;function Pd(e,t,n){var r=Td;if(r&&"string"===typeof t&&t){var o=mt(t);o='link[rel="'+e+'"][href="'+o+'"]',"string"===typeof n&&(o+='[crossorigin="'+n+'"]'),kd.has(o)||(kd.add(o),e={rel:e,crossOrigin:n,href:t},null===r.querySelector(o)&&(ed(t=r.createElement("link"),"link",e),We(t),r.head.appendChild(t)))}}function _d(e,t,n,r){var o,i,s,l,c=(c=H.current)?Ed(c):null;if(!c)throw Error(a(446));switch(e){case"meta":case"title":return null;case"style":return"string"===typeof n.precedence&&"string"===typeof n.href?(t=jd(n.href),(r=(n=He(c).hoistableStyles).get(t))||(r={type:"style",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};case"link":if("stylesheet"===n.rel&&"string"===typeof n.href&&"string"===typeof n.precedence){e=jd(n.href);var u=He(c).hoistableStyles,d=u.get(e);if(d||(c=c.ownerDocument||c,d={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},u.set(e,d),(u=c.querySelector(Ad(e)))&&!u._p&&(d.instance=u,d.state.loading=5),Sd.has(e)||(n={rel:"preload",as:"style",href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},Sd.set(e,n),u||(o=c,i=e,s=n,l=d.state,o.querySelector('link[rel="preload"][as="style"]['+i+"]")?l.loading=1:(i=o.createElement("link"),l.preload=i,i.addEventListener("load",(function(){return l.loading|=1})),i.addEventListener("error",(function(){return l.loading|=2})),ed(i,"link",s),We(i),o.head.appendChild(i))))),t&&null===r)throw Error(a(528,""));return d}if(t&&null!==r)throw Error(a(529,""));return null;case"script":return t=n.async,"string"===typeof(n=n.src)&&t&&"function"!==typeof t&&"symbol"!==typeof t?(t=Od(n),(r=(n=He(c).hoistableScripts).get(t))||(r={type:"script",instance:null,count:0,state:null},n.set(t,r)),r):{type:"void",instance:null,count:0,state:null};default:throw Error(a(444,e))}}function jd(e){return'href="'+mt(e)+'"'}function Ad(e){return'link[rel="stylesheet"]['+e+"]"}function Rd(e){return p({},e,{"data-precedence":e.precedence,precedence:null})}function Od(e){return'[src="'+mt(e)+'"]'}function Dd(e){return"script[async]"+e}function Ld(e,t,n){if(t.count++,null===t.instance)switch(t.type){case"style":var r=e.querySelector('style[data-href~="'+mt(n.href)+'"]');if(r)return t.instance=r,We(r),r;var o=p({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return We(r=(e.ownerDocument||e).createElement("style")),ed(r,"style",o),zd(r,n.precedence,e),t.instance=r;case"stylesheet":o=jd(n.href);var i=e.querySelector(Ad(o));if(i)return t.state.loading|=4,t.instance=i,We(i),i;r=Rd(n),(o=Sd.get(o))&&Nd(r,o),We(i=(e.ownerDocument||e).createElement("link"));var s=i;return s._p=new Promise((function(e,t){s.onload=e,s.onerror=t})),ed(i,"link",r),t.state.loading|=4,zd(i,n.precedence,e),t.instance=i;case"script":return i=Od(n.src),(o=e.querySelector(Dd(i)))?(t.instance=o,We(o),o):(r=n,(o=Sd.get(i))&&Fd(r=p({},n),o),We(o=(e=e.ownerDocument||e).createElement("script")),ed(o,"link",r),e.head.appendChild(o),t.instance=o);case"void":return null;default:throw Error(a(443,t.type))}else"stylesheet"===t.type&&0===(4&t.state.loading)&&(r=t.instance,t.state.loading|=4,zd(r,n.precedence,e));return t.instance}function zd(e,t,n){for(var r=n.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),o=r.length?r[r.length-1]:null,i=o,a=0;a<r.length;a++){var s=r[a];if(s.dataset.precedence===t)i=s;else if(i!==o)break}i?i.parentNode.insertBefore(e,i.nextSibling):(t=9===n.nodeType?n.head:n).insertBefore(e,t.firstChild)}function Nd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.title&&(e.title=t.title)}function Fd(e,t){null==e.crossOrigin&&(e.crossOrigin=t.crossOrigin),null==e.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),null==e.integrity&&(e.integrity=t.integrity)}var Id=null;function Md(e,t,n){if(null===Id){var r=new Map,o=Id=new Map;o.set(n,r)}else(r=(o=Id).get(n))||(r=new Map,o.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),o=0;o<n.length;o++){var i=n[o];if(!(i[Me]||i[Oe]||"link"===e&&"stylesheet"===i.getAttribute("rel"))&&"http://www.w3.org/2000/svg"!==i.namespaceURI){var a=i.getAttribute(t)||"";a=e+a;var s=r.get(a);s?s.push(i):r.set(a,[i])}}return r}function $d(e,t,n){(e=e.ownerDocument||e).head.insertBefore(n,"title"===t?e.querySelector("head > title"):null)}function Bd(e){return"stylesheet"!==e.type||0!==(3&e.state.loading)}var Vd=null;function Ud(){}function Hd(){if(this.count--,0===this.count)if(this.stylesheets)Yd(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}var Wd=null;function Yd(e,t){e.stylesheets=null,null!==e.unsuspend&&(e.count++,Wd=new Map,t.forEach(Kd,e),Wd=null,Hd.call(e))}function Kd(e,t){if(!(4&t.state.loading)){var n=Wd.get(e);if(n)var r=n.get(null);else{n=new Map,Wd.set(e,n);for(var o=e.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<o.length;i++){var a=o[i];"LINK"!==a.nodeName&&"not all"===a.getAttribute("media")||(n.set(a.dataset.precedence,a),r=a)}r&&n.set(null,r)}a=(o=t.instance).getAttribute("data-precedence"),(i=n.get(a)||r)===r&&n.set(null,o),n.set(a,o),this.count++,r=Hd.bind(this),o.addEventListener("load",r),o.addEventListener("error",r),i?i.parentNode.insertBefore(o,i.nextSibling):(e=9===e.nodeType?e.head:e).insertBefore(o,e.firstChild),t.state.loading|=4}}var Qd={$$typeof:w,Provider:null,Consumer:null,_currentValue:N,_currentValue2:N,_threadCount:0};function Xd(e,t,n,r,o,i,a,s){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ee(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ee(0),this.hiddenUpdates=Ee(null),this.identifierPrefix=r,this.onUncaughtError=o,this.onCaughtError=i,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=s,this.incompleteTransitions=new Map}function qd(e,t,n,r,o,i,a,s,l,c,u,d){return e=new Xd(e,t,n,a,s,l,c,d),t=1,!0===i&&(t|=24),i=Nr(3,null,null,t),e.current=i,i.stateNode=e,(t=Lo()).refCount++,e.pooledCache=t,t.refCount++,i.memoizedState={element:r,isDehydrated:n,cache:t},ri(i),e}function Gd(e){return e?e=Lr:Lr}function Jd(e,t,n,r,o,i){o=Gd(o),null===r.context?r.context=o:r.pendingContext=o,(r=ii(t)).payload={element:n},null!==(i=void 0===i?null:i)&&(r.callback=i),null!==(n=ai(e,r,t))&&(Nc(n,0,t),si(n,e,t))}function Zd(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function ep(e,t){Zd(e,t),(e=e.alternate)&&Zd(e,t)}function tp(e){if(13===e.tag){var t=Rr(e,67108864);null!==t&&Nc(t,0,67108864),ep(e,67108864)}}var np=!0;function rp(e,t,n,r){var o=L.T;L.T=null;var i=z.p;try{z.p=2,ip(e,t,n,r)}finally{z.p=i,L.T=o}}function op(e,t,n,r){var o=L.T;L.T=null;var i=z.p;try{z.p=8,ip(e,t,n,r)}finally{z.p=i,L.T=o}}function ip(e,t,n,r){if(np){var o=ap(r);if(null===o)Vu(e,t,r,sp,n),yp(e,r);else if(function(e,t,n,r,o){switch(t){case"focusin":return dp=bp(dp,e,t,n,r,o),!0;case"dragenter":return pp=bp(pp,e,t,n,r,o),!0;case"mouseover":return fp=bp(fp,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return hp.set(i,bp(hp.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,mp.set(i,bp(mp.get(i)||null,e,t,n,r,o)),!0}return!1}(o,e,t,n,r))r.stopPropagation();else if(yp(e,r),4&t&&-1<vp.indexOf(e)){for(;null!==o;){var i=Ve(o);if(null!==i)switch(i.tag){case 3:if((i=i.stateNode).current.memoizedState.isDehydrated){var a=ye(i.pendingLanes);if(0!==a){var s=i;for(s.pendingLanes|=2,s.entangledLanes|=2;a;){var l=1<<31-fe(a);s.entanglements[1]|=l,a&=~l}Su(i),0===(6&nc)&&(Sc=te()+500,ku(0,!1))}}break;case 13:null!==(s=Rr(i,2))&&Nc(s,0,2),Bc(),ep(i,2)}if(null===(i=ap(r))&&Vu(e,t,r,sp,n),i===o)break;o=i}null!==o&&r.stopPropagation()}else Vu(e,t,r,null,n)}}function ap(e){return lp(e=Rt(e))}var sp=null;function lp(e){if(sp=null,null!==(e=Be(e))){var t=l(e);if(null===t)e=null;else{var n=t.tag;if(13===n){if(null!==(e=c(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return sp=e,null}function cp(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ne()){case re:return 2;case oe:return 8;case ie:case ae:return 32;case se:return 268435456;default:return 32}default:return 32}}var up=!1,dp=null,pp=null,fp=null,hp=new Map,mp=new Map,gp=[],vp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function yp(e,t){switch(e){case"focusin":case"focusout":dp=null;break;case"dragenter":case"dragleave":pp=null;break;case"mouseover":case"mouseout":fp=null;break;case"pointerover":case"pointerout":hp.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":mp.delete(t.pointerId)}}function bp(e,t,n,r,o,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},null!==t&&(null!==(t=Ve(t))&&tp(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==o&&-1===t.indexOf(o)&&t.push(o),e)}function xp(e){var t=Be(e.target);if(null!==t){var n=l(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=c(n)))return e.blockedOn=t,void function(e,t){var n=z.p;try{return z.p=e,t()}finally{z.p=n}}(e.priority,(function(){if(13===n.tag){var e=Lc();e=_e(e);var t=Rr(n,e);null!==t&&Nc(t,0,e),ep(n,e)}}))}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function wp(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=ap(e.nativeEvent);if(null!==n)return null!==(t=Ve(n))&&tp(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);At=r,n.target.dispatchEvent(r),At=null,t.shift()}return!0}function Sp(e,t,n){wp(e)&&n.delete(t)}function kp(){up=!1,null!==dp&&wp(dp)&&(dp=null),null!==pp&&wp(pp)&&(pp=null),null!==fp&&wp(fp)&&(fp=null),hp.forEach(Sp),mp.forEach(Sp)}function Ep(e,t){e.blockedOn===t&&(e.blockedOn=null,up||(up=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,kp)))}var Cp=null;function Tp(e){Cp!==e&&(Cp=e,r.unstable_scheduleCallback(r.unstable_NormalPriority,(function(){Cp===e&&(Cp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],o=e[t+2];if("function"!==typeof r){if(null===lp(r||n))continue;break}var i=Ve(n);null!==i&&(e.splice(t,3),t-=3,Ra(i,{pending:!0,data:o,method:n.method,action:r},r,o))}})))}function Pp(e){function t(t){return Ep(t,e)}null!==dp&&Ep(dp,e),null!==pp&&Ep(pp,e),null!==fp&&Ep(fp,e),hp.forEach(t),mp.forEach(t);for(var n=0;n<gp.length;n++){var r=gp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<gp.length&&null===(n=gp[0]).blockedOn;)xp(n),null===n.blockedOn&&gp.shift();if(null!=(n=(e.ownerDocument||e).$$reactFormReplay))for(r=0;r<n.length;r+=3){var o=n[r],i=n[r+1],a=o[De]||null;if("function"===typeof i)a||Tp(n);else if(a){var s=null;if(i&&i.hasAttribute("formAction")){if(o=i,a=i[De]||null)s=a.formAction;else if(null!==lp(o))continue}else s=a.action;"function"===typeof s?n[r+1]=s:(n.splice(r,3),r-=3),Tp(n)}}}function _p(e){this._internalRoot=e}function jp(e){this._internalRoot=e}jp.prototype.render=_p.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(a(409));Jd(t.current,Lc(),e,t,null,null)},jp.prototype.unmount=_p.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;Jd(e.current,2,null,e,null,null),Bc(),t[Le]=null}},jp.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ae();e={blockedOn:null,target:e,priority:t};for(var n=0;n<gp.length&&0!==t&&t<gp[n].priority;n++);gp.splice(n,0,e),0===n&&xp(e)}};var Ap=o.version;if("19.1.0"!==Ap)throw Error(a(527,Ap,"19.1.0"));z.findDOMNode=function(e){var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(a(188));throw e=Object.keys(e).join(","),Error(a(268,e))}return e=function(e){var t=e.alternate;if(!t){if(null===(t=l(e)))throw Error(a(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(null===o)break;var i=o.alternate;if(null===i){if(null!==(r=o.return)){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return u(o),e;if(i===r)return u(o),t;i=i.sibling}throw Error(a(188))}if(n.return!==r.return)n=o,r=i;else{for(var s=!1,c=o.child;c;){if(c===n){s=!0,n=o,r=i;break}if(c===r){s=!0,r=o,n=i;break}c=c.sibling}if(!s){for(c=i.child;c;){if(c===n){s=!0,n=i,r=o;break}if(c===r){s=!0,r=i,n=o;break}c=c.sibling}if(!s)throw Error(a(189))}}if(n.alternate!==r)throw Error(a(190))}if(3!==n.tag)throw Error(a(188));return n.stateNode.current===n?e:t}(t),e=null===(e=null!==e?d(e):null)?null:e.stateNode};var Rp={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:L,reconcilerVersion:"19.1.0"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var Op=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Op.isDisabled&&Op.supportsFiber)try{ue=Op.inject(Rp),de=Op}catch(Lp){}}t.createRoot=function(e,t){if(!s(e))throw Error(a(299));var n=!1,r="",o=ys,i=bs,l=xs;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onUncaughtError&&(o=t.onUncaughtError),void 0!==t.onCaughtError&&(i=t.onCaughtError),void 0!==t.onRecoverableError&&(l=t.onRecoverableError),void 0!==t.unstable_transitionCallbacks&&t.unstable_transitionCallbacks),t=qd(e,1,!1,null,0,n,r,o,i,l,0,null),e[Le]=t.current,$u(e),new _p(t)},t.hydrateRoot=function(e,t,n){if(!s(e))throw Error(a(299));var r=!1,o="",i=ys,l=bs,c=xs,u=null;return null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(r=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onUncaughtError&&(i=n.onUncaughtError),void 0!==n.onCaughtError&&(l=n.onCaughtError),void 0!==n.onRecoverableError&&(c=n.onRecoverableError),void 0!==n.unstable_transitionCallbacks&&n.unstable_transitionCallbacks,void 0!==n.formState&&(u=n.formState)),(t=qd(e,1,!0,t,0,r,o,i,l,c,0,u)).context=Gd(null),n=t.current,(o=ii(r=_e(r=Lc()))).callback=null,ai(n,o,r),n=r,t.current.lanes=n,Ce(t,n),Su(t),e[Le]=t.current,$u(e),new jp(t)},t.version="19.1.0"},43:(e,t,n)=>{"use strict";e.exports=n(288)},139:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=a(e,i(n)))}return e}function i(e){if("string"===typeof e||"number"===typeof e)return e;if("object"!==typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=a(t,n));return t}function a(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(n=function(){return o}.apply(t,[]))||(e.exports=n)}()},167:(e,t,n)=>{n(953),e.exports=self.fetch.bind(self)},288:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.consumer"),l=Symbol.for("react.context"),c=Symbol.for("react.forward_ref"),u=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),f=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function v(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function y(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=v.prototype;var x=b.prototype=new y;x.constructor=b,m(x,v.prototype),x.isPureReactComponent=!0;var w=Array.isArray,S={H:null,A:null,T:null,S:null,V:null},k=Object.prototype.hasOwnProperty;function E(e,t,r,o,i,a){return r=a.ref,{$$typeof:n,type:e,key:t,ref:void 0!==r?r:null,props:a}}function C(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var T=/\/+/g;function P(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(){}function j(e,t,o,i,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l,c,u=!1;if(null===e)u=!0;else switch(s){case"bigint":case"string":case"number":u=!0;break;case"object":switch(e.$$typeof){case n:case r:u=!0;break;case p:return j((u=e._init)(e._payload),t,o,i,a)}}if(u)return a=a(e),u=""===i?"."+P(e,0):i,w(a)?(o="",null!=u&&(o=u.replace(T,"$&/")+"/"),j(a,t,o,"",(function(e){return e}))):null!=a&&(C(a)&&(l=a,c=o+(null==a.key||e&&e.key===a.key?"":(""+a.key).replace(T,"$&/")+"/")+u,a=E(l.type,c,void 0,0,0,l.props)),t.push(a)),1;u=0;var d,h=""===i?".":i+":";if(w(e))for(var m=0;m<e.length;m++)u+=j(i=e[m],t,o,s=h+P(i,m),a);else if("function"===typeof(m=null===(d=e)||"object"!==typeof d?null:"function"===typeof(d=f&&d[f]||d["@@iterator"])?d:null))for(e=m.call(e),m=0;!(i=e.next()).done;)u+=j(i=i.value,t,o,s=h+P(i,m++),a);else if("object"===s){if("function"===typeof e.then)return j(function(e){switch(e.status){case"fulfilled":return e.value;case"rejected":throw e.reason;default:switch("string"===typeof e.status?e.then(_,_):(e.status="pending",e.then((function(t){"pending"===e.status&&(e.status="fulfilled",e.value=t)}),(function(t){"pending"===e.status&&(e.status="rejected",e.reason=t)}))),e.status){case"fulfilled":return e.value;case"rejected":throw e.reason}}throw e}(e),t,o,i,a);throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.")}return u}function A(e,t,n){if(null==e)return e;var r=[],o=0;return j(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function R(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var O="function"===typeof reportError?reportError:function(e){if("object"===typeof window&&"function"===typeof window.ErrorEvent){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:"object"===typeof e&&null!==e&&"string"===typeof e.message?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if("object"===typeof process&&"function"===typeof process.emit)return void process.emit("uncaughtException",e);console.error(e)};function D(){}t.Children={map:A,forEach:function(e,t,n){A(e,(function(){t.apply(this,arguments)}),n)},count:function(e){var t=0;return A(e,(function(){t++})),t},toArray:function(e){return A(e,(function(e){return e}))||[]},only:function(e){if(!C(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=v,t.Fragment=o,t.Profiler=a,t.PureComponent=b,t.StrictMode=i,t.Suspense=u,t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=S,t.__COMPILER_RUNTIME={__proto__:null,c:function(e){return S.H.useMemoCache(e)}},t.cache=function(e){return function(){return e.apply(null,arguments)}},t.cloneElement=function(e,t,n){if(null===e||void 0===e)throw Error("The argument must be a React element, but you passed "+e+".");var r=m({},e.props),o=e.key;if(null!=t)for(i in void 0!==t.ref&&void 0,void 0!==t.key&&(o=""+t.key),t)!k.call(t,i)||"key"===i||"__self"===i||"__source"===i||"ref"===i&&void 0===t.ref||(r[i]=t[i]);var i=arguments.length-2;if(1===i)r.children=n;else if(1<i){for(var a=Array(i),s=0;s<i;s++)a[s]=arguments[s+2];r.children=a}return E(e.type,o,void 0,0,0,r)},t.createContext=function(e){return(e={$$typeof:l,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider=e,e.Consumer={$$typeof:s,_context:e},e},t.createElement=function(e,t,n){var r,o={},i=null;if(null!=t)for(r in void 0!==t.key&&(i=""+t.key),t)k.call(t,r)&&"key"!==r&&"__self"!==r&&"__source"!==r&&(o[r]=t[r]);var a=arguments.length-2;if(1===a)o.children=n;else if(1<a){for(var s=Array(a),l=0;l<a;l++)s[l]=arguments[l+2];o.children=s}if(e&&e.defaultProps)for(r in a=e.defaultProps)void 0===o[r]&&(o[r]=a[r]);return E(e,i,void 0,0,0,o)},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:c,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:p,_payload:{_status:-1,_result:e},_init:R}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=S.T,n={};S.T=n;try{var r=e(),o=S.S;null!==o&&o(n,r),"object"===typeof r&&null!==r&&"function"===typeof r.then&&r.then(D,O)}catch(i){O(i)}finally{S.T=t}},t.unstable_useCacheRefresh=function(){return S.H.useCacheRefresh()},t.use=function(e){return S.H.use(e)},t.useActionState=function(e,t,n){return S.H.useActionState(e,t,n)},t.useCallback=function(e,t){return S.H.useCallback(e,t)},t.useContext=function(e){return S.H.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e,t){return S.H.useDeferredValue(e,t)},t.useEffect=function(e,t,n){var r=S.H;if("function"===typeof n)throw Error("useEffect CRUD overload is not enabled in this build of React.");return r.useEffect(e,t)},t.useId=function(){return S.H.useId()},t.useImperativeHandle=function(e,t,n){return S.H.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return S.H.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return S.H.useLayoutEffect(e,t)},t.useMemo=function(e,t){return S.H.useMemo(e,t)},t.useOptimistic=function(e,t){return S.H.useOptimistic(e,t)},t.useReducer=function(e,t,n){return S.H.useReducer(e,t,n)},t.useRef=function(e){return S.H.useRef(e)},t.useState=function(e){return S.H.useState(e)},t.useSyncExternalStore=function(e,t,n){return S.H.useSyncExternalStore(e,t,n)},t.useTransition=function(){return S.H.useTransition()},t.version="19.1.0"},324:e=>{e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var s=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!s(c))return!1;var u=e[c],d=t[c];if(!1===(o=n?n.call(r,u,d,c):void 0)||void 0===o&&u!==d)return!1}return!0}},358:(e,t)=>{"use strict";const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,r=/^[\u0021-\u003A\u003C-\u007E]*$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,s=(()=>{const e=function(){};return e.prototype=Object.create(null),e})();function l(e,t,n){do{const n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<n);return n}function c(e,t,n){for(;t>n;){const n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return n}function u(e){if(-1===e.indexOf("%"))return e;try{return decodeURIComponent(e)}catch(t){return e}}},391:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(4)},579:(e,t,n)=>{"use strict";e.exports=n(799)},672:(e,t,n)=>{"use strict";var r=n(43);function o(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function i(){}var a={d:{f:i,r:function(){throw Error(o(522))},D:i,C:i,L:i,m:i,X:i,S:i,M:i},p:0,findDOMNode:null},s=Symbol.for("react.portal");var l=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){return"font"===e?"":"string"===typeof t?"use-credentials"===t?t:"":void 0}t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=a,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!t||1!==t.nodeType&&9!==t.nodeType&&11!==t.nodeType)throw Error(o(299));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:s,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.flushSync=function(e){var t=l.T,n=a.p;try{if(l.T=null,a.p=2,e)return e()}finally{l.T=t,a.p=n,a.d.f()}},t.preconnect=function(e,t){"string"===typeof e&&(t?t="string"===typeof(t=t.crossOrigin)?"use-credentials"===t?t:"":void 0:t=null,a.d.C(e,t))},t.prefetchDNS=function(e){"string"===typeof e&&a.d.D(e)},t.preinit=function(e,t){if("string"===typeof e&&t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin),o="string"===typeof t.integrity?t.integrity:void 0,i="string"===typeof t.fetchPriority?t.fetchPriority:void 0;"style"===n?a.d.S(e,"string"===typeof t.precedence?t.precedence:void 0,{crossOrigin:r,integrity:o,fetchPriority:i}):"script"===n&&a.d.X(e,{crossOrigin:r,integrity:o,fetchPriority:i,nonce:"string"===typeof t.nonce?t.nonce:void 0})}},t.preinitModule=function(e,t){if("string"===typeof e)if("object"===typeof t&&null!==t){if(null==t.as||"script"===t.as){var n=c(t.as,t.crossOrigin);a.d.M(e,{crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0})}}else null==t&&a.d.M(e)},t.preload=function(e,t){if("string"===typeof e&&"object"===typeof t&&null!==t&&"string"===typeof t.as){var n=t.as,r=c(n,t.crossOrigin);a.d.L(e,n,{crossOrigin:r,integrity:"string"===typeof t.integrity?t.integrity:void 0,nonce:"string"===typeof t.nonce?t.nonce:void 0,type:"string"===typeof t.type?t.type:void 0,fetchPriority:"string"===typeof t.fetchPriority?t.fetchPriority:void 0,referrerPolicy:"string"===typeof t.referrerPolicy?t.referrerPolicy:void 0,imageSrcSet:"string"===typeof t.imageSrcSet?t.imageSrcSet:void 0,imageSizes:"string"===typeof t.imageSizes?t.imageSizes:void 0,media:"string"===typeof t.media?t.media:void 0})}},t.preloadModule=function(e,t){if("string"===typeof e)if(t){var n=c(t.as,t.crossOrigin);a.d.m(e,{as:"string"===typeof t.as&&"script"!==t.as?t.as:void 0,crossOrigin:n,integrity:"string"===typeof t.integrity?t.integrity:void 0})}else a.d.m(e)},t.requestFormReset=function(e){a.d.r(e)},t.unstable_batchedUpdates=function(e,t){return e(t)},t.useFormState=function(e,t,n){return l.H.useFormState(e,t,n)},t.useFormStatus=function(){return l.H.useHostTransitionStatus()},t.version="19.1.0"},799:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.fragment");function o(e,t,r){var o=null;if(void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),"key"in t)for(var i in r={},t)"key"!==i&&(r[i]=t[i]);else r=t;return t=r.ref,{$$typeof:n,type:e,key:o,ref:void 0!==t?t:null,props:r}}t.Fragment=r,t.jsx=o,t.jsxs=o},853:(e,t,n)=>{"use strict";e.exports=n(896)},896:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,o=e[r];if(!(0<i(o,t)))break e;e[r]=t,e[n]=o,n=r}}function r(e){return 0===e.length?null:e[0]}function o(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,o=e.length,a=o>>>1;r<a;){var s=2*(r+1)-1,l=e[s],c=s+1,u=e[c];if(0>i(l,n))c<o&&0>i(u,l)?(e[r]=u,e[c]=n,r=c):(e[r]=l,e[s]=n,r=s);else{if(!(c<o&&0>i(u,n)))break e;e[r]=u,e[c]=n,r=c}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if(t.unstable_now=void 0,"object"===typeof performance&&"function"===typeof performance.now){var a=performance;t.unstable_now=function(){return a.now()}}else{var s=Date,l=s.now();t.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,f=3,h=!1,m=!1,g=!1,v=!1,y="function"===typeof setTimeout?setTimeout:null,b="function"===typeof clearTimeout?clearTimeout:null,x="undefined"!==typeof setImmediate?setImmediate:null;function w(e){for(var t=r(u);null!==t;){if(null===t.callback)o(u);else{if(!(t.startTime<=e))break;o(u),t.sortIndex=t.expirationTime,n(c,t)}t=r(u)}}function S(e){if(g=!1,w(e),!m)if(null!==r(c))m=!0,E||(E=!0,k());else{var t=r(u);null!==t&&O(S,t.startTime-e)}}var k,E=!1,C=-1,T=5,P=-1;function _(){return!!v||!(t.unstable_now()-P<T)}function j(){if(v=!1,E){var e=t.unstable_now();P=e;var n=!0;try{e:{m=!1,g&&(g=!1,b(C),C=-1),h=!0;var i=f;try{t:{for(w(e),p=r(c);null!==p&&!(p.expirationTime>e&&_());){var a=p.callback;if("function"===typeof a){p.callback=null,f=p.priorityLevel;var s=a(p.expirationTime<=e);if(e=t.unstable_now(),"function"===typeof s){p.callback=s,w(e),n=!0;break t}p===r(c)&&o(c),w(e)}else o(c);p=r(c)}if(null!==p)n=!0;else{var l=r(u);null!==l&&O(S,l.startTime-e),n=!1}}break e}finally{p=null,f=i,h=!1}n=void 0}}finally{n?k():E=!1}}}if("function"===typeof x)k=function(){x(j)};else if("undefined"!==typeof MessageChannel){var A=new MessageChannel,R=A.port2;A.port1.onmessage=j,k=function(){R.postMessage(null)}}else k=function(){y(j,0)};function O(e,n){C=y((function(){e(t.unstable_now())}),n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return f},t.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},t.unstable_requestPaint=function(){v=!0},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},t.unstable_scheduleCallback=function(e,o,i){var a=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?a+i:a:i=a,e){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return e={id:d++,callback:o,priorityLevel:e,startTime:i,expirationTime:s=i+s,sortIndex:-1},i>a?(e.sortIndex=i,n(u,e),null===r(c)&&e===r(u)&&(g?(b(C),C=-1):g=!0,O(S,i-a))):(e.sortIndex=s,n(c,e),m||h||(m=!0,E||(E=!0,k()))),e},t.unstable_shouldYield=_,t.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(672)},953:(e,t,n)=>{"use strict";n.r(t),n.d(t,{DOMException:()=>S,Headers:()=>u,Request:()=>v,Response:()=>x,fetch:()=>k});var r="undefined"!==typeof globalThis&&globalThis||"undefined"!==typeof self&&self||"undefined"!==typeof n.g&&n.g||{},o={searchParams:"URLSearchParams"in r,iterable:"Symbol"in r&&"iterator"in Symbol,blob:"FileReader"in r&&"Blob"in r&&function(){try{return new Blob,!0}catch(e){return!1}}(),formData:"FormData"in r,arrayBuffer:"ArrayBuffer"in r};if(o.arrayBuffer)var i=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],a=ArrayBuffer.isView||function(e){return e&&i.indexOf(Object.prototype.toString.call(e))>-1};function s(e){if("string"!==typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(e)||""===e)throw new TypeError('Invalid character in header field name: "'+e+'"');return e.toLowerCase()}function l(e){return"string"!==typeof e&&(e=String(e)),e}function c(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return o.iterable&&(t[Symbol.iterator]=function(){return t}),t}function u(e){this.map={},e instanceof u?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){if(2!=e.length)throw new TypeError("Headers constructor: expected name/value pair to be length 2, found"+e.length);this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(!e._noBody)return e.bodyUsed?Promise.reject(new TypeError("Already read")):void(e.bodyUsed=!0)}function p(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function f(e){var t=new FileReader,n=p(t);return t.readAsArrayBuffer(e),n}function h(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function m(){return this.bodyUsed=!1,this._initBody=function(e){var t;this.bodyUsed=this.bodyUsed,this._bodyInit=e,e?"string"===typeof e?this._bodyText=e:o.blob&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:o.formData&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():o.arrayBuffer&&o.blob&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=h(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):o.arrayBuffer&&(ArrayBuffer.prototype.isPrototypeOf(e)||a(e))?this._bodyArrayBuffer=h(e):this._bodyText=e=Object.prototype.toString.call(e):(this._noBody=!0,this._bodyText=""),this.headers.get("content-type")||("string"===typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):o.searchParams&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o.blob&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))}),this.arrayBuffer=function(){if(this._bodyArrayBuffer){var e=d(this);return e||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}if(o.blob)return this.blob().then(f);throw new Error("could not read as ArrayBuffer")},this.text=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return function(e){var t=new FileReader,n=p(t),r=/charset=([A-Za-z0-9_-]+)/.exec(e.type),o=r?r[1]:"utf-8";return t.readAsText(e,o),n}(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},o.formData&&(this.formData=function(){return this.text().then(y)}),this.json=function(){return this.text().then(JSON.parse)},this}u.prototype.append=function(e,t){e=s(e),t=l(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},u.prototype.delete=function(e){delete this.map[s(e)]},u.prototype.get=function(e){return e=s(e),this.has(e)?this.map[e]:null},u.prototype.has=function(e){return this.map.hasOwnProperty(s(e))},u.prototype.set=function(e,t){this.map[s(e)]=l(t)},u.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},u.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),c(e)},u.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),c(e)},u.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),c(e)},o.iterable&&(u.prototype[Symbol.iterator]=u.prototype.entries);var g=["CONNECT","DELETE","GET","HEAD","OPTIONS","PATCH","POST","PUT","TRACE"];function v(e,t){if(!(this instanceof v))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var n=(t=t||{}).body;if(e instanceof v){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new u(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,n||null==e._bodyInit||(n=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new u(t.headers)),this.method=function(e){var t=e.toUpperCase();return g.indexOf(t)>-1?t:e}(t.method||this.method||"GET"),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal||function(){if("AbortController"in r)return(new AbortController).signal}(),this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),("GET"===this.method||"HEAD"===this.method)&&("no-store"===t.cache||"no-cache"===t.cache)){var o=/([?&])_=[^&]*/;if(o.test(this.url))this.url=this.url.replace(o,"$1_="+(new Date).getTime());else{this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}}function y(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function b(e){var t=new u;return e.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(e){return 0===e.indexOf("\n")?e.substr(1,e.length):e})).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();try{t.append(r,o)}catch(i){console.warn("Response "+i.message)}}})),t}function x(e,t){if(!(this instanceof x))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');if(t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.status<200||this.status>599)throw new RangeError("Failed to construct 'Response': The status provided (0) is outside the range [200, 599].");this.ok=this.status>=200&&this.status<300,this.statusText=void 0===t.statusText?"":""+t.statusText,this.headers=new u(t.headers),this.url=t.url||"",this._initBody(e)}v.prototype.clone=function(){return new v(this,{body:this._bodyInit})},m.call(v.prototype),m.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new u(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:200,statusText:""});return e.ok=!1,e.status=0,e.type="error",e};var w=[301,302,303,307,308];x.redirect=function(e,t){if(-1===w.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})};var S=r.DOMException;try{new S}catch(E){(S=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack}).prototype=Object.create(Error.prototype),S.prototype.constructor=S}function k(e,t){return new Promise((function(n,i){var a=new v(e,t);if(a.signal&&a.signal.aborted)return i(new S("Aborted","AbortError"));var c=new XMLHttpRequest;function d(){c.abort()}if(c.onload=function(){var e={statusText:c.statusText,headers:b(c.getAllResponseHeaders()||"")};0===a.url.indexOf("file://")&&(c.status<200||c.status>599)?e.status=200:e.status=c.status,e.url="responseURL"in c?c.responseURL:e.headers.get("X-Request-URL");var t="response"in c?c.response:c.responseText;setTimeout((function(){n(new x(t,e))}),0)},c.onerror=function(){setTimeout((function(){i(new TypeError("Network request failed"))}),0)},c.ontimeout=function(){setTimeout((function(){i(new TypeError("Network request timed out"))}),0)},c.onabort=function(){setTimeout((function(){i(new S("Aborted","AbortError"))}),0)},c.open(a.method,function(e){try{return""===e&&r.location.href?r.location.href:e}catch(t){return e}}(a.url),!0),"include"===a.credentials?c.withCredentials=!0:"omit"===a.credentials&&(c.withCredentials=!1),"responseType"in c&&(o.blob?c.responseType="blob":o.arrayBuffer&&(c.responseType="arraybuffer")),t&&"object"===typeof t.headers&&!(t.headers instanceof u||r.Headers&&t.headers instanceof r.Headers)){var p=[];Object.getOwnPropertyNames(t.headers).forEach((function(e){p.push(s(e)),c.setRequestHeader(e,l(t.headers[e]))})),a.headers.forEach((function(e,t){-1===p.indexOf(t)&&c.setRequestHeader(t,e)}))}else a.headers.forEach((function(e,t){c.setRequestHeader(t,e)}));a.signal&&(a.signal.addEventListener("abort",d),c.onreadystatechange=function(){4===c.readyState&&a.signal.removeEventListener("abort",d)}),c.send("undefined"===typeof a._bodyInit?null:a._bodyInit)}))}k.polyfill=!0,r.fetch||(r.fetch=k,r.Headers=u,r.Request=v,r.Response=x)}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.f={},n.e=e=>Promise.all(Object.keys(n.f).reduce(((t,r)=>(n.f[r](e,t),t)),[])),n.u=e=>"static/js/"+e+".20815797.chunk.js",n.miniCssF=e=>{},n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={},t="portfolio-v2:";n.l=(r,o,i,a)=>{if(e[r])e[r].push(o);else{var s,l;if(void 0!==i)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+i){s=d;break}}s||(l=!0,(s=document.createElement("script")).charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+i),s.src=r),e[r]=[o];var p=(t,n)=>{s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((e=>e(n))),t)return t(n)},f=setTimeout(p.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=p.bind(null,s.onerror),s.onload=p.bind(null,s.onload),l&&document.head.appendChild(s)}}})(),n.r=e=>{"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.p="/",(()=>{var e={792:0};n.f.j=(t,r)=>{var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise(((n,r)=>o=e[t]=[n,r]));r.push(o[2]=i);var a=n.p+n.u(t),s=new Error;n.l(a,(r=>{if(n.o(e,t)&&(0!==(o=e[t])&&(e[t]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+i+": "+a+")",s.name="ChunkLoadError",s.type=i,s.request=a,o[1](s)}}),"chunk-"+t,t)}};var t=(t,r)=>{var o,i,a=r[0],s=r[1],l=r[2],c=0;if(a.some((t=>0!==e[t]))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(l)l(n)}for(t&&t(r);c<a.length;c++)i=a[c],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0},r=self.webpackChunkportfolio_v2=self.webpackChunkportfolio_v2||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=(n(358),"popstate");function o(){return d((function(e,t){let{pathname:n="/",search:r="",hash:o=""}=u(e.location.hash.substring(1));return n.startsWith("/")||n.startsWith(".")||(n="/"+n),l("",{pathname:n,search:r,hash:o},t.state&&t.state.usr||null,t.state&&t.state.key||"default")}),(function(e,t){let n=e.document.querySelector("base"),r="";if(n&&n.getAttribute("href")){let t=e.location.href,n=t.indexOf("#");r=-1===n?t:t.slice(0,n)}return r+"#"+("string"===typeof t?t:c(t))}),(function(e,t){a("/"===e.pathname.charAt(0),`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}),arguments.length>0&&void 0!==arguments[0]?arguments[0]:{})}function i(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}function a(e,t){if(!e){"undefined"!==typeof console&&console.warn(t);try{throw new Error(t)}catch(n){}}}function s(e,t){return{usr:e.state,key:e.key,idx:t}}function l(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3?arguments[3]:void 0;return{pathname:"string"===typeof e?e:e.pathname,search:"",hash:"",..."string"===typeof t?u(t):t,state:n,key:t&&t.key||r||Math.random().toString(36).substring(2,10)}}function c(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&"?"!==n&&(t+="?"===n.charAt(0)?n:"?"+n),r&&"#"!==r&&(t+="#"===r.charAt(0)?r:"#"+r),t}function u(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function d(e,t,n){let o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},{window:a=document.defaultView,v5Compat:u=!1}=o,d=a.history,p="POP",f=null,h=m();function m(){return(d.state||{idx:null}).idx}function g(){p="POP";let e=m(),t=null==e?null:e-h;h=e,f&&f({action:p,location:y.location,delta:t})}function v(e){let t="null"!==a.location.origin?a.location.origin:a.location.href,n="string"===typeof e?e:c(e);return n=n.replace(/ $/,"%20"),i(t,`No window.location.(origin|href) available to create URL for href: ${n}`),new URL(n,t)}null==h&&(h=0,d.replaceState({...d.state,idx:h},""));let y={get action(){return p},get location(){return e(a,d)},listen(e){if(f)throw new Error("A history only accepts one active listener");return a.addEventListener(r,g),f=e,()=>{a.removeEventListener(r,g),f=null}},createHref:e=>t(a,e),createURL:v,encodeLocation(e){let t=v(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:function(e,t){p="PUSH";let r=l(y.location,e,t);n&&n(r,e),h=m()+1;let o=s(r,h),i=y.createHref(r);try{d.pushState(o,"",i)}catch(c){if(c instanceof DOMException&&"DataCloneError"===c.name)throw c;a.location.assign(i)}u&&f&&f({action:p,location:y.location,delta:1})},replace:function(e,t){p="REPLACE";let r=l(y.location,e,t);n&&n(r,e),h=m();let o=s(r,h),i=y.createHref(r);d.replaceState(o,"",i),u&&f&&f({action:p,location:y.location,delta:0})},go:e=>d.go(e)};return y}new WeakMap;function p(e,t){return f(e,t,arguments.length>2&&void 0!==arguments[2]?arguments[2]:"/",!1)}function f(e,t,n,r){let o=_(("string"===typeof t?u(t):t).pathname||"/",n);if(null==o)return null;let i=h(e);!function(e){e.sort(((e,t)=>e.score!==t.score?t.score-e.score:function(e,t){let n=e.length===t.length&&e.slice(0,-1).every(((e,n)=>e===t[n]));return n?e[e.length-1]-t[t.length-1]:0}(e.routesMeta.map((e=>e.childrenIndex)),t.routesMeta.map((e=>e.childrenIndex)))))}(i);let a=null;for(let s=0;null==a&&s<i.length;++s){let e=P(o);a=E(i[s],e,r)}return a}function h(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",o=(e,o,a)=>{let s={relativePath:void 0===a?e.path||"":a,caseSensitive:!0===e.caseSensitive,childrenIndex:o,route:e};s.relativePath.startsWith("/")&&(i(s.relativePath.startsWith(r),`Absolute route path "${s.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),s.relativePath=s.relativePath.slice(r.length));let l=D([r,s.relativePath]),c=n.concat(s);e.children&&e.children.length>0&&(i(!0!==e.index,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),h(e.children,t,c,l)),(null!=e.path||e.index)&&t.push({path:l,score:k(l,e.index),routesMeta:c})};return e.forEach(((e,t)=>{if(""!==e.path&&e.path?.includes("?"))for(let n of m(e.path))o(e,t,n);else o(e,t)})),t}function m(e){let t=e.split("/");if(0===t.length)return[];let[n,...r]=t,o=n.endsWith("?"),i=n.replace(/\?$/,"");if(0===r.length)return o?[i,""]:[i];let a=m(r.join("/")),s=[];return s.push(...a.map((e=>""===e?i:[i,e].join("/")))),o&&s.push(...a),s.map((t=>e.startsWith("/")&&""===t?"/":t))}var g=/^:[\w-]+$/,v=3,y=2,b=1,x=10,w=-2,S=e=>"*"===e;function k(e,t){let n=e.split("/"),r=n.length;return n.some(S)&&(r+=w),t&&(r+=y),n.filter((e=>!S(e))).reduce(((e,t)=>e+(g.test(t)?v:""===t?b:x)),r)}function E(e,t){let n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],{routesMeta:r}=e,o={},i="/",a=[];for(let s=0;s<r.length;++s){let e=r[s],l=s===r.length-1,c="/"===i?t:t.slice(i.length)||"/",u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:l},c),d=e.route;if(!u&&l&&n&&!r[r.length-1].route.index&&(u=C({path:e.relativePath,caseSensitive:e.caseSensitive,end:!1},c)),!u)return null;Object.assign(o,u.params),a.push({params:o,pathname:D([i,u.pathname]),pathnameBase:L(D([i,u.pathnameBase])),route:d}),"/"!==u.pathnameBase&&(i=D([i,u.pathnameBase]))}return a}function C(e,t){"string"===typeof e&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=T(e.path,e.caseSensitive,e.end),o=t.match(n);if(!o)return null;let i=o[0],a=i.replace(/(.)\/+$/,"$1"),s=o.slice(1);return{params:r.reduce(((e,t,n)=>{let{paramName:r,isOptional:o}=t;if("*"===r){let e=s[n]||"";a=i.slice(0,i.length-e.length).replace(/(.)\/+$/,"$1")}const l=s[n];return e[r]=o&&!l?void 0:(l||"").replace(/%2F/g,"/"),e}),{}),pathname:i,pathnameBase:a,pattern:e}}function T(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2];a("*"===e||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let r=[],o="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,((e,t,n)=>(r.push({paramName:t,isOptional:null!=n}),n?"/?([^\\/]+)?":"/([^\\/]+)")));return e.endsWith("*")?(r.push({paramName:"*"}),o+="*"===e||"/*"===e?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?o+="\\/*$":""!==e&&"/"!==e&&(o+="(?:(?=\\/|$))"),[new RegExp(o,t?void 0:"i"),r]}function P(e){try{return e.split("/").map((e=>decodeURIComponent(e).replace(/\//g,"%2F"))).join("/")}catch(t){return a(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function _(e,t){if("/"===t)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&"/"!==r?null:e.slice(n)||"/"}function j(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function A(e){return e.filter(((e,t)=>0===t||e.route.path&&e.route.path.length>0))}function R(e){let t=A(e);return t.map(((e,n)=>n===t.length-1?e.pathname:e.pathnameBase))}function O(e,t,n){let r,o=arguments.length>3&&void 0!==arguments[3]&&arguments[3];"string"===typeof e?r=u(e):(r={...e},i(!r.pathname||!r.pathname.includes("?"),j("?","pathname","search",r)),i(!r.pathname||!r.pathname.includes("#"),j("#","pathname","hash",r)),i(!r.search||!r.search.includes("#"),j("#","search","hash",r)));let a,s=""===e||""===r.pathname,l=s?"/":r.pathname;if(null==l)a=n;else{let e=t.length-1;if(!o&&l.startsWith("..")){let t=l.split("/");for(;".."===t[0];)t.shift(),e-=1;r.pathname=t.join("/")}a=e>=0?t[e]:"/"}let c=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"/",{pathname:n,search:r="",hash:o=""}="string"===typeof e?u(e):e,i=n?n.startsWith("/")?n:function(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach((e=>{".."===e?n.length>1&&n.pop():"."!==e&&n.push(e)})),n.length>1?n.join("/"):"/"}(n,t):t;return{pathname:i,search:z(r),hash:N(o)}}(r,a),d=l&&"/"!==l&&l.endsWith("/"),p=(s||"."===l)&&n.endsWith("/");return c.pathname.endsWith("/")||!d&&!p||(c.pathname+="/"),c}var D=e=>e.join("/").replace(/\/\/+/g,"/"),L=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),z=e=>e&&"?"!==e?e.startsWith("?")?e:"?"+e:"",N=e=>e&&"#"!==e?e.startsWith("#")?e:"#"+e:"";function F(e){return null!=e&&"number"===typeof e.status&&"string"===typeof e.statusText&&"boolean"===typeof e.internal&&"data"in e}var I=["POST","PUT","PATCH","DELETE"],M=(new Set(I),["GET",...I]);new Set(M),Symbol("ResetLoaderData");var $=e.createContext(null);$.displayName="DataRouter";var B=e.createContext(null);B.displayName="DataRouterState";var V=e.createContext({isTransitioning:!1});V.displayName="ViewTransition";var U=e.createContext(new Map);U.displayName="Fetchers";var H=e.createContext(null);H.displayName="Await";var W=e.createContext(null);W.displayName="Navigation";var Y=e.createContext(null);Y.displayName="Location";var K=e.createContext({outlet:null,matches:[],isDataRoute:!1});K.displayName="Route";var Q=e.createContext(null);Q.displayName="RouteError";function X(){return null!=e.useContext(Y)}function q(){return i(X(),"useLocation() may be used only in the context of a <Router> component."),e.useContext(Y).location}var G="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function J(t){e.useContext(W).static||e.useLayoutEffect(t)}function Z(){let{isDataRoute:t}=e.useContext(K);return t?function(){let{router:t}=ce("useNavigate"),n=de("useNavigate"),r=e.useRef(!1);J((()=>{r.current=!0}));let o=e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};a(r.current,G),r.current&&("number"===typeof e?t.navigate(e):await t.navigate(e,{fromRouteId:n,...o}))}),[t,n]);return o}():function(){i(X(),"useNavigate() may be used only in the context of a <Router> component.");let t=e.useContext($),{basename:n,navigator:r}=e.useContext(W),{matches:o}=e.useContext(K),{pathname:s}=q(),l=JSON.stringify(R(o)),c=e.useRef(!1);J((()=>{c.current=!0}));let u=e.useCallback((function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(a(c.current,G),!c.current)return;if("number"===typeof e)return void r.go(e);let i=O(e,JSON.parse(l),s,"path"===o.relative);null==t&&"/"!==n&&(i.pathname="/"===i.pathname?n:D([n,i.pathname])),(o.replace?r.replace:r.push)(i,o.state,o)}),[n,r,l,s,t]);return u}()}var ee=e.createContext(null);function te(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{matches:r}=e.useContext(K),{pathname:o}=q(),i=JSON.stringify(R(r));return e.useMemo((()=>O(t,JSON.parse(i),o,"path"===n)),[t,i,o,n])}function ne(t,n,r,o){i(X(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=e.useContext(W),{matches:c}=e.useContext(K),d=c[c.length-1],f=d?d.params:{},h=d?d.pathname:"/",m=d?d.pathnameBase:"/",g=d&&d.route;{let e=g&&g.path||"";he(h,!g||e.endsWith("*")||e.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.\n\nPlease change the parent <Route path="${e}"> to <Route path="${"/"===e?"*":`${e}/*`}">.`)}let v,y=q();if(n){let e="string"===typeof n?u(n):n;i("/"===m||e.pathname?.startsWith(m),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${m}" but pathname "${e.pathname}" was given in the \`location\` prop.`),v=e}else v=y;let b=v.pathname||"/",x=b;if("/"!==m){let e=m.replace(/^\//,"").split("/");x="/"+b.replace(/^\//,"").split("/").slice(e.length).join("/")}let w=!l&&r&&r.matches&&r.matches.length>0?r.matches:p(t,{pathname:x});a(g||null!=w,`No routes matched location "${v.pathname}${v.search}${v.hash}" `),a(null==w||void 0!==w[w.length-1].route.element||void 0!==w[w.length-1].route.Component||void 0!==w[w.length-1].route.lazy,`Matched leaf route at location "${v.pathname}${v.search}${v.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let S=se(w&&w.map((e=>Object.assign({},e,{params:Object.assign({},f,e.params),pathname:D([m,s.encodeLocation?s.encodeLocation(e.pathname).pathname:e.pathname]),pathnameBase:"/"===e.pathnameBase?m:D([m,s.encodeLocation?s.encodeLocation(e.pathnameBase).pathname:e.pathnameBase])}))),c,r,o);return n&&S?e.createElement(Y.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...v},navigationType:"POP"}},S):S}function re(){let t=pe(),n=F(t)?`${t.status} ${t.statusText}`:t instanceof Error?t.message:JSON.stringify(t),r=t instanceof Error?t.stack:null,o="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:o},a={padding:"2px 4px",backgroundColor:o},s=null;return console.error("Error handled by React Router default ErrorBoundary:",t),s=e.createElement(e.Fragment,null,e.createElement("p",null,"\ud83d\udcbf Hey developer \ud83d\udc4b"),e.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",e.createElement("code",{style:a},"ErrorBoundary")," or"," ",e.createElement("code",{style:a},"errorElement")," prop on your route.")),e.createElement(e.Fragment,null,e.createElement("h2",null,"Unexpected Application Error!"),e.createElement("h3",{style:{fontStyle:"italic"}},n),r?e.createElement("pre",{style:i},r):null,s)}var oe=e.createElement(re,null),ie=class extends e.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||"idle"!==t.revalidation&&"idle"===e.revalidation?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:void 0!==e.error?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return void 0!==this.state.error?e.createElement(K.Provider,{value:this.props.routeContext},e.createElement(Q.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ae(t){let{routeContext:n,match:r,children:o}=t,i=e.useContext($);return i&&i.static&&i.staticContext&&(r.route.errorElement||r.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=r.route.id),e.createElement(K.Provider,{value:n},o)}function se(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(null==t){if(!r)return null;if(r.errors)t=r.matches;else{if(0!==n.length||r.initialized||!(r.matches.length>0))return null;t=r.matches}}let o=t,a=r?.errors;if(null!=a){let e=o.findIndex((e=>e.route.id&&void 0!==a?.[e.route.id]));i(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(",")}`),o=o.slice(0,Math.min(o.length,e+1))}let s=!1,l=-1;if(r)for(let e=0;e<o.length;e++){let t=o[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(l=e),t.route.id){let{loaderData:e,errors:n}=r,i=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!n||void 0===n[t.route.id]);if(t.route.lazy||i){s=!0,o=l>=0?o.slice(0,l+1):[o[0]];break}}}return o.reduceRight(((t,i,c)=>{let u,d=!1,p=null,f=null;r&&(u=a&&i.route.id?a[i.route.id]:void 0,p=i.route.errorElement||oe,s&&(l<0&&0===c?(he("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,f=null):l===c&&(d=!0,f=i.route.hydrateFallbackElement||null)));let h=n.concat(o.slice(0,c+1)),m=()=>{let n;return n=u?p:d?f:i.route.Component?e.createElement(i.route.Component,null):i.route.element?i.route.element:t,e.createElement(ae,{match:i,routeContext:{outlet:t,matches:h,isDataRoute:null!=r},children:n})};return r&&(i.route.ErrorBoundary||i.route.errorElement||0===c)?e.createElement(ie,{location:r.location,revalidation:r.revalidation,component:p,error:u,children:m(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):m()}),null)}function le(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ce(t){let n=e.useContext($);return i(n,le(t)),n}function ue(t){let n=e.useContext(B);return i(n,le(t)),n}function de(t){let n=function(t){let n=e.useContext(K);return i(n,le(t)),n}(t),r=n.matches[n.matches.length-1];return i(r.route.id,`${t} can only be used on routes that contain a unique "id"`),r.route.id}function pe(){let t=e.useContext(Q),n=ue("useRouteError"),r=de("useRouteError");return void 0!==t?t:n.errors?.[r]}var fe={};function he(e,t,n){t||fe[e]||(fe[e]=!0,a(!1,n))}e.memo((function(e){let{routes:t,future:n,state:r}=e;return ne(t,void 0,r,n)}));function me(t){return function(t){let n=e.useContext(K).outlet;return n?e.createElement(ee.Provider,{value:t},n):n}(t.context)}function ge(e){i(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function ve(t){let{basename:n="/",children:r=null,location:o,navigationType:s="POP",navigator:l,static:c=!1}=t;i(!X(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let d=n.replace(/^\/*/,"/"),p=e.useMemo((()=>({basename:d,navigator:l,static:c,future:{}})),[d,l,c]);"string"===typeof o&&(o=u(o));let{pathname:f="/",search:h="",hash:m="",state:g=null,key:v="default"}=o,y=e.useMemo((()=>{let e=_(f,d);return null==e?null:{location:{pathname:e,search:h,hash:m,state:g,key:v},navigationType:s}}),[d,f,h,m,g,v,s]);return a(null!=y,`<Router basename="${d}"> is not able to match the URL "${f}${h}${m}" because it does not start with the basename, so the <Router> won't render anything.`),null==y?null:e.createElement(W.Provider,{value:p},e.createElement(Y.Provider,{children:r,value:y}))}function ye(e){let{children:t,location:n}=e;return ne(be(t),n)}e.Component;function be(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=[];return e.Children.forEach(t,((t,o)=>{if(!e.isValidElement(t))return;let a=[...n,o];if(t.type===e.Fragment)return void r.push.apply(r,be(t.props.children,a));i(t.type===ge,`[${"string"===typeof t.type?t.type:t.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),i(!t.props.index||!t.props.children,"An index route cannot have child routes.");let s={id:t.props.id||a.join("-"),caseSensitive:t.props.caseSensitive,element:t.props.element,Component:t.props.Component,index:t.props.index,path:t.props.path,loader:t.props.loader,action:t.props.action,hydrateFallbackElement:t.props.hydrateFallbackElement,HydrateFallback:t.props.HydrateFallback,errorElement:t.props.errorElement,ErrorBoundary:t.props.ErrorBoundary,hasErrorBoundary:!0===t.props.hasErrorBoundary||null!=t.props.ErrorBoundary||null!=t.props.errorElement,shouldRevalidate:t.props.shouldRevalidate,handle:t.props.handle,lazy:t.props.lazy};t.props.children&&(s.children=be(t.props.children,a)),r.push(s)})),r}var xe="get",we="application/x-www-form-urlencoded";function Se(e){return null!=e&&"string"===typeof e.tagName}var ke=null;var Ee=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Ce(e){return null==e||Ee.has(e)?e:(a(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${we}"`),null)}function Te(e,t){let n,r,o,i,a;if(Se(s=e)&&"form"===s.tagName.toLowerCase()){let a=e.getAttribute("action");r=a?_(a,t):null,n=e.getAttribute("method")||xe,o=Ce(e.getAttribute("enctype"))||we,i=new FormData(e)}else if(function(e){return Se(e)&&"button"===e.tagName.toLowerCase()}(e)||function(e){return Se(e)&&"input"===e.tagName.toLowerCase()}(e)&&("submit"===e.type||"image"===e.type)){let a=e.form;if(null==a)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let s=e.getAttribute("formaction")||a.getAttribute("action");if(r=s?_(s,t):null,n=e.getAttribute("formmethod")||a.getAttribute("method")||xe,o=Ce(e.getAttribute("formenctype"))||Ce(a.getAttribute("enctype"))||we,i=new FormData(a,e),!function(){if(null===ke)try{new FormData(document.createElement("form"),0),ke=!1}catch(e){ke=!0}return ke}()){let{name:t,type:n,value:r}=e;if("image"===n){let e=t?`${t}.`:"";i.append(`${e}x`,"0"),i.append(`${e}y`,"0")}else t&&i.append(t,r)}}else{if(Se(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=xe,r=null,o=we,a=e}var s;return i&&"text/plain"===o&&(a=i,i=void 0),{action:r,method:n.toLowerCase(),encType:o,formData:i,body:a}}function Pe(e,t){if(!1===e||null===e||"undefined"===typeof e)throw new Error(t)}async function _e(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise((()=>{}))}}function je(e){return null!=e&&"string"===typeof e.page}function Ae(e){return null!=e&&(null==e.href?"preload"===e.rel&&"string"===typeof e.imageSrcSet&&"string"===typeof e.imageSizes:"string"===typeof e.rel&&"string"===typeof e.href)}function Re(e,t,n,r,o,i){let a=(e,t)=>!n[t]||e.route.id!==n[t].route.id,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith("*")&&n[t].params["*"]!==e.params["*"];return"assets"===i?t.filter(((e,t)=>a(e,t)||s(e,t))):"data"===i?t.filter(((t,i)=>{let l=r.routes[t.route.id];if(!l||!l.hasLoader)return!1;if(a(t,i)||s(t,i))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(o.pathname+o.search+o.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if("boolean"===typeof r)return r}return!0})):[]}function Oe(e,t){let{includeHydrateFallback:n}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return r=e.map((e=>{let r=t.routes[e.route.id];if(!r)return[];let o=[r.module];return r.clientActionModule&&(o=o.concat(r.clientActionModule)),r.clientLoaderModule&&(o=o.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(o=o.concat(r.hydrateFallbackModule)),r.imports&&(o=o.concat(r.imports)),o})).flat(1),[...new Set(r)];var r}function De(e,t){let n=new Set,r=new Set(t);return e.reduce(((e,o)=>{if(t&&!je(o)&&"script"===o.as&&o.href&&r.has(o.href))return e;let i=JSON.stringify(function(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}(o));return n.has(i)||(n.add(i),e.push({key:i,link:o})),e}),[])}function Le(e){return{__html:e}}Symbol("SingleFetchRedirect");var ze=new Set([100,101,204,205]);function Ne(e,t){let n="string"===typeof e?new URL(e,"undefined"===typeof window?"server://singlefetch/":window.location.origin):e;return"/"===n.pathname?n.pathname="_root.data":t&&"/"===_(n.pathname,t)?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}e.Component;function Fe(t){let{error:n,isOutsideRemixApp:r}=t;console.error(n);let o,i=e.createElement("script",{dangerouslySetInnerHTML:{__html:'\n        console.log(\n          "\ud83d\udcbf Hey developer \ud83d\udc4b. You can provide a way better UX than this when your app throws errors. Check out https://remix.run/guides/errors for more information."\n        );\n      '}});if(F(n))return e.createElement(Ie,{title:"Unhandled Thrown Response!"},e.createElement("h1",{style:{fontSize:"24px"}},n.status," ",n.statusText),i);if(n instanceof Error)0;else{let e=null==n?"Unknown Error":"object"===typeof n&&"toString"in n?n.toString():JSON.stringify(n);new Error(e)}return e.createElement(Ie,{title:"Application Error!",isOutsideRemixApp:r},e.createElement("h1",{style:{fontSize:"24px"}},"Application Error"),e.createElement("pre",{style:{padding:"2rem",background:"hsla(10, 50%, 50%, 0.1)",color:"red",overflow:"auto"}},o.stack),i)}function Ie(t){let{title:n,renderScripts:r,isOutsideRemixApp:o,children:i}=t,{routeModules:a}=Ue();return a.root?.Layout&&!o?i:e.createElement("html",{lang:"en"},e.createElement("head",null,e.createElement("meta",{charSet:"utf-8"}),e.createElement("meta",{name:"viewport",content:"width=device-width,initial-scale=1,viewport-fit=cover"}),e.createElement("title",null,n)),e.createElement("body",null,e.createElement("main",{style:{fontFamily:"system-ui, sans-serif",padding:"2rem"}},i,r?e.createElement(qe,null):null)))}function Me(e){return!0===e}function $e(){let t=e.useContext($);return Pe(t,"You must render this element inside a <DataRouterContext.Provider> element"),t}function Be(){let t=e.useContext(B);return Pe(t,"You must render this element inside a <DataRouterStateContext.Provider> element"),t}var Ve=e.createContext(void 0);function Ue(){let t=e.useContext(Ve);return Pe(t,"You must render this element inside a <HydratedRouter> element"),t}function He(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function We(e,t,n){if(n&&!Xe)return[e[0]];if(t){let n=e.findIndex((e=>void 0!==t[e.route.id]));return e.slice(0,n+1)}return e}function Ye(t){let{page:n,...r}=t,{router:o}=$e(),i=e.useMemo((()=>p(o.routes,n,o.basename)),[o.routes,n,o.basename]);return i?e.createElement(Qe,{page:n,matches:i,...r}):null}function Ke(t){let{manifest:n,routeModules:r}=Ue(),[o,i]=e.useState([]);return e.useEffect((()=>{let e=!1;return async function(e,t,n){let r=await Promise.all(e.map((async e=>{let r=t.routes[e.route.id];if(r){let e=await _e(r,n);return e.links?e.links():[]}return[]})));return De(r.flat(1).filter(Ae).filter((e=>"stylesheet"===e.rel||"preload"===e.rel)).map((e=>"stylesheet"===e.rel?{...e,rel:"prefetch",as:"style"}:{...e,rel:"prefetch"})))}(t,n,r).then((t=>{e||i(t)})),()=>{e=!0}}),[t,n,r]),o}function Qe(t){let{page:n,matches:r,...o}=t,i=q(),{manifest:a,routeModules:s}=Ue(),{basename:l}=$e(),{loaderData:c,matches:u}=Be(),d=e.useMemo((()=>Re(n,r,u,a,i,"data")),[n,r,u,a,i]),p=e.useMemo((()=>Re(n,r,u,a,i,"assets")),[n,r,u,a,i]),f=e.useMemo((()=>{if(n===i.pathname+i.search+i.hash)return[];let e=new Set,t=!1;if(r.forEach((n=>{let r=a.routes[n.route.id];r&&r.hasLoader&&(!d.some((e=>e.route.id===n.route.id))&&n.route.id in c&&s[n.route.id]?.shouldRevalidate||r.hasClientLoader?t=!0:e.add(n.route.id))})),0===e.size)return[];let o=Ne(n,l);return t&&e.size>0&&o.searchParams.set("_routes",r.filter((t=>e.has(t.route.id))).map((e=>e.route.id)).join(",")),[o.pathname+o.search]}),[l,c,i,a,d,r,n,s]),h=e.useMemo((()=>Oe(p,a)),[p,a]),m=Ke(p);return e.createElement(e.Fragment,null,f.map((t=>e.createElement("link",{key:t,rel:"prefetch",as:"fetch",href:t,...o}))),h.map((t=>e.createElement("link",{key:t,rel:"modulepreload",href:t,...o}))),m.map((t=>{let{key:n,link:r}=t;return e.createElement("link",{key:n,...r})})))}Ve.displayName="FrameworkContext";var Xe=!1;function qe(t){let{manifest:n,serverHandoffString:r,isSpaMode:o,ssr:i,renderMeta:a}=Ue(),{router:s,static:l,staticContext:c}=$e(),{matches:u}=Be(),d=Me(i);a&&(a.didRenderScripts=!0);let f=We(u,null,o);e.useEffect((()=>{0}),[]);let h=e.useMemo((()=>{let o=c?`window.__reactRouterContext = ${r};window.__reactRouterContext.stream = new ReadableStream({start(controller){window.__reactRouterContext.streamController = controller;}}).pipeThrough(new TextEncoderStream());`:" ",i=l?`${n.hmr?.runtime?`import ${JSON.stringify(n.hmr.runtime)};`:""}${d?"":`import ${JSON.stringify(n.url)}`};\n${f.map(((e,t)=>{let r=`route${t}`,o=n.routes[e.route.id];Pe(o,`Route ${e.route.id} not found in manifest`);let{clientActionModule:i,clientLoaderModule:a,clientMiddlewareModule:s,hydrateFallbackModule:l,module:c}=o,u=[...i?[{module:i,varName:`${r}_clientAction`}]:[],...a?[{module:a,varName:`${r}_clientLoader`}]:[],...s?[{module:s,varName:`${r}_clientMiddleware`}]:[],...l?[{module:l,varName:`${r}_HydrateFallback`}]:[],{module:c,varName:`${r}_main`}];return 1===u.length?`import * as ${r} from ${JSON.stringify(c)};`:[u.map((e=>`import * as ${e.varName} from "${e.module}";`)).join("\n"),`const ${r} = {${u.map((e=>`...${e.varName}`)).join(",")}};`].join("\n")})).join("\n")}\n  ${d?`window.__reactRouterManifest = ${JSON.stringify(function(e,t){let{sri:n,...r}=e,o=new Set(t.state.matches.map((e=>e.route.id))),i=t.state.location.pathname.split("/").filter(Boolean),a=["/"];for(i.pop();i.length>0;)a.push(`/${i.join("/")}`),i.pop();a.forEach((e=>{let n=p(t.routes,e,t.basename);n&&n.forEach((e=>o.add(e.route.id)))}));let s=[...o].reduce(((e,t)=>Object.assign(e,{[t]:r.routes[t]})),{});return{...r,routes:s,sri:!!n||void 0}}(n,s),null,2)};`:""}\n  window.__reactRouterRouteModules = {${f.map(((e,t)=>`${JSON.stringify(e.route.id)}:route${t}`)).join(",")}};\n\nimport(${JSON.stringify(n.entry.module)});`:" ";return e.createElement(e.Fragment,null,e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Le(o),type:void 0}),e.createElement("script",{...t,suppressHydrationWarning:!0,dangerouslySetInnerHTML:Le(i),type:"module",async:!0}))}),[]),m=Xe?[]:(n.entry.imports.concat(Oe(f,n,{includeHydrateFallback:!0})),[...new Set(g)]);var g;let v="object"===typeof n.sri?n.sri:{};return Xe?null:e.createElement(e.Fragment,null,"object"===typeof n.sri?e.createElement("script",{"rr-importmap":"",type:"importmap",suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:JSON.stringify({integrity:v})}}):null,d?null:e.createElement("link",{rel:"modulepreload",href:n.url,crossOrigin:t.crossOrigin,integrity:v[n.url],suppressHydrationWarning:!0}),e.createElement("link",{rel:"modulepreload",href:n.entry.module,crossOrigin:t.crossOrigin,integrity:v[n.entry.module],suppressHydrationWarning:!0}),m.map((n=>e.createElement("link",{key:n,rel:"modulepreload",href:n,crossOrigin:t.crossOrigin,integrity:v[n],suppressHydrationWarning:!0}))),h)}function Ge(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return e=>{t.forEach((t=>{"function"===typeof t?t(e):null!=t&&(t.current=e)}))}}var Je="undefined"!==typeof window&&"undefined"!==typeof window.document&&"undefined"!==typeof window.document.createElement;try{Je&&(window.__reactRouterVersion="7.5.1")}catch(Tv){}function Ze(t){let{basename:n,children:r,window:i}=t,a=e.useRef();null==a.current&&(a.current=o({window:i,v5Compat:!0}));let s=a.current,[l,c]=e.useState({action:s.action,location:s.location}),u=e.useCallback((t=>{e.startTransition((()=>c(t)))}),[c]);return e.useLayoutEffect((()=>s.listen(u)),[s,u]),e.createElement(ve,{basename:n,children:r,location:l.location,navigationType:l.action,navigator:s})}var et=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,tt=e.forwardRef((function(t,n){let r,{onClick:o,discover:s="render",prefetch:l="none",relative:u,reloadDocument:d,replace:p,state:f,target:h,to:m,preventScrollReset:g,viewTransition:v,...y}=t,{basename:b}=e.useContext(W),x="string"===typeof m&&et.test(m),w=!1;if("string"===typeof m&&x&&(r=m,Je))try{let e=new URL(window.location.href),t=m.startsWith("//")?new URL(e.protocol+m):new URL(m),n=_(t.pathname,b);t.origin===e.origin&&null!=n?m=n+t.search+t.hash:w=!0}catch(Tv){a(!1,`<Link to="${m}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let S=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};i(X(),"useHref() may be used only in the context of a <Router> component.");let{basename:r,navigator:o}=e.useContext(W),{hash:a,pathname:s,search:l}=te(t,{relative:n}),c=s;return"/"!==r&&(c="/"===s?r:D([r,s])),o.createHref({pathname:c,search:l,hash:a})}(m,{relative:u}),[k,E,C]=function(t,n){let r=e.useContext(Ve),[o,i]=e.useState(!1),[a,s]=e.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:u,onMouseLeave:d,onTouchStart:p}=n,f=e.useRef(null);e.useEffect((()=>{if("render"===t&&s(!0),"viewport"===t){let e=new IntersectionObserver((e=>{e.forEach((e=>{s(e.isIntersecting)}))}),{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}}),[t]),e.useEffect((()=>{if(o){let e=setTimeout((()=>{s(!0)}),100);return()=>{clearTimeout(e)}}}),[o]);let h=()=>{i(!0)},m=()=>{i(!1),s(!1)};return r?"intent"!==t?[a,f,{}]:[a,f,{onFocus:He(l,h),onBlur:He(c,m),onMouseEnter:He(u,h),onMouseLeave:He(d,m),onTouchStart:He(p,h)}]:[!1,f,{}]}(l,y),T=function(t){let{target:n,replace:r,state:o,preventScrollReset:i,relative:a,viewTransition:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=Z(),u=q(),d=te(t,{relative:a});return e.useCallback((e=>{if(function(e,t){return 0===e.button&&(!t||"_self"===t)&&!function(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}(e)}(e,n)){e.preventDefault();let n=void 0!==r?r:c(u)===c(d);l(t,{replace:n,state:o,preventScrollReset:i,relative:a,viewTransition:s})}}),[u,l,d,r,o,n,t,i,a,s])}(m,{replace:p,state:f,target:h,preventScrollReset:g,relative:u,viewTransition:v});let P=e.createElement("a",{...y,...C,href:r||S,onClick:w||d?o:function(e){o&&o(e),e.defaultPrevented||T(e)},ref:Ge(n,E),target:h,"data-discover":x||"render"!==s?void 0:"true"});return k&&!x?e.createElement(e.Fragment,null,P,e.createElement(Ye,{page:S})):P}));tt.displayName="Link",e.forwardRef((function(t,n){let{"aria-current":r="page",caseSensitive:o=!1,className:a="",end:s=!1,style:l,to:c,viewTransition:u,children:d,...p}=t,f=te(c,{relative:p.relative}),h=q(),m=e.useContext(B),{navigator:g,basename:v}=e.useContext(W),y=null!=m&&function(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.useContext(V);i(null!=r,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:o}=ot("useViewTransitionState"),a=te(t,{relative:n.relative});if(!r.isTransitioning)return!1;let s=_(r.currentLocation.pathname,o)||r.currentLocation.pathname,l=_(r.nextLocation.pathname,o)||r.nextLocation.pathname;return null!=C(a.pathname,l)||null!=C(a.pathname,s)}(f)&&!0===u,b=g.encodeLocation?g.encodeLocation(f).pathname:f.pathname,x=h.pathname,w=m&&m.navigation&&m.navigation.location?m.navigation.location.pathname:null;o||(x=x.toLowerCase(),w=w?w.toLowerCase():null,b=b.toLowerCase()),w&&v&&(w=_(w,v)||w);const S="/"!==b&&b.endsWith("/")?b.length-1:b.length;let k,E=x===b||!s&&x.startsWith(b)&&"/"===x.charAt(S),T=null!=w&&(w===b||!s&&w.startsWith(b)&&"/"===w.charAt(b.length)),P={isActive:E,isPending:T,isTransitioning:y},j=E?r:void 0;k="function"===typeof a?a(P):[a,E?"active":null,T?"pending":null,y?"transitioning":null].filter(Boolean).join(" ");let A="function"===typeof l?l(P):l;return e.createElement(tt,{...p,"aria-current":j,className:k,ref:n,style:A,to:c,viewTransition:u},"function"===typeof d?d(P):d)})).displayName="NavLink";var nt=e.forwardRef(((t,n)=>{let{discover:r="render",fetcherKey:o,navigate:a,reloadDocument:s,replace:l,state:u,method:d=xe,action:p,onSubmit:f,relative:h,preventScrollReset:m,viewTransition:g,...v}=t,y=st(),b=function(t){let{relative:n}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{basename:r}=e.useContext(W),o=e.useContext(K);i(o,"useFormAction must be used inside a RouteContext");let[a]=o.matches.slice(-1),s={...te(t||".",{relative:n})},l=q();if(null==t){s.search=l.search;let e=new URLSearchParams(s.search),t=e.getAll("index"),n=t.some((e=>""===e));if(n){e.delete("index"),t.filter((e=>e)).forEach((t=>e.append("index",t)));let n=e.toString();s.search=n?`?${n}`:""}}t&&"."!==t||!a.route.index||(s.search=s.search?s.search.replace(/^\?/,"?index&"):"?index");"/"!==r&&(s.pathname="/"===s.pathname?r:D([r,s.pathname]));return c(s)}(p,{relative:h}),x="get"===d.toLowerCase()?"get":"post",w="string"===typeof p&&et.test(p);return e.createElement("form",{ref:n,method:x,action:b,onSubmit:s?f:e=>{if(f&&f(e),e.defaultPrevented)return;e.preventDefault();let t=e.nativeEvent.submitter,n=t?.getAttribute("formmethod")||d;y(t||e.currentTarget,{fetcherKey:o,method:n,navigate:a,replace:l,state:u,relative:h,preventScrollReset:m,viewTransition:g})},...v,"data-discover":w||"render"!==r?void 0:"true"})}));function rt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ot(t){let n=e.useContext($);return i(n,rt(t)),n}nt.displayName="Form";var it=0,at=()=>`__${String(++it)}__`;function st(){let{router:t}=ot("useSubmit"),{basename:n}=e.useContext(W),r=de("useRouteId");return e.useCallback((async function(e){let o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},{action:i,method:a,encType:s,formData:l,body:c}=Te(e,n);if(!1===o.navigate){let e=o.fetcherKey||at();await t.fetch(e,r,o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||a,formEncType:o.encType||s,flushSync:o.flushSync})}else await t.navigate(o.action||i,{preventScrollReset:o.preventScrollReset,formData:l,body:c,formMethod:o.method||a,formEncType:o.encType||s,replace:o.replace,state:o.state,fromRouteId:r,flushSync:o.flushSync,viewTransition:o.viewTransition})}),[t,n,r])}new TextEncoder;var lt=function(){return lt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},lt.apply(this,arguments)};Object.create;function ct(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))}Object.create;"function"===typeof SuppressedError&&SuppressedError;var ut=n(324),dt=n.n(ut),pt="-ms-",ft="-moz-",ht="-webkit-",mt="comm",gt="rule",vt="decl",yt="@keyframes",bt=Math.abs,xt=String.fromCharCode,wt=Object.assign;function St(e){return e.trim()}function kt(e,t){return(e=t.exec(e))?e[0]:e}function Et(e,t,n){return e.replace(t,n)}function Ct(e,t,n){return e.indexOf(t,n)}function Tt(e,t){return 0|e.charCodeAt(t)}function Pt(e,t,n){return e.slice(t,n)}function _t(e){return e.length}function jt(e){return e.length}function At(e,t){return t.push(e),e}function Rt(e,t){return e.filter((function(e){return!kt(e,t)}))}var Ot=1,Dt=1,Lt=0,zt=0,Nt=0,Ft="";function It(e,t,n,r,o,i,a,s){return{value:e,root:t,parent:n,type:r,props:o,children:i,line:Ot,column:Dt,length:a,return:"",siblings:s}}function Mt(e,t){return wt(It("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function $t(e){for(;e.root;)e=Mt(e.root,{children:[e]});At(e,e.siblings)}function Bt(){return Nt=zt>0?Tt(Ft,--zt):0,Dt--,10===Nt&&(Dt=1,Ot--),Nt}function Vt(){return Nt=zt<Lt?Tt(Ft,zt++):0,Dt++,10===Nt&&(Dt=1,Ot++),Nt}function Ut(){return Tt(Ft,zt)}function Ht(){return zt}function Wt(e,t){return Pt(Ft,e,t)}function Yt(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Kt(e){return Ot=Dt=1,Lt=_t(Ft=e),zt=0,[]}function Qt(e){return Ft="",e}function Xt(e){return St(Wt(zt-1,Jt(91===e?e+2:40===e?e+1:e)))}function qt(e){for(;(Nt=Ut())&&Nt<33;)Vt();return Yt(e)>2||Yt(Nt)>3?"":" "}function Gt(e,t){for(;--t&&Vt()&&!(Nt<48||Nt>102||Nt>57&&Nt<65||Nt>70&&Nt<97););return Wt(e,Ht()+(t<6&&32==Ut()&&32==Vt()))}function Jt(e){for(;Vt();)switch(Nt){case e:return zt;case 34:case 39:34!==e&&39!==e&&Jt(Nt);break;case 40:41===e&&Jt(e);break;case 92:Vt()}return zt}function Zt(e,t){for(;Vt()&&e+Nt!==57&&(e+Nt!==84||47!==Ut()););return"/*"+Wt(t,zt-1)+"*"+xt(47===e?e:Vt())}function en(e){for(;!Yt(Ut());)Vt();return Wt(e,zt)}function tn(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function nn(e,t,n,r){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case vt:return e.return=e.return||e.value;case mt:return"";case yt:return e.return=e.value+"{"+tn(e.children,r)+"}";case gt:if(!_t(e.value=e.props.join(",")))return""}return _t(n=tn(e.children,r))?e.return=e.value+"{"+n+"}":""}function rn(e,t,n){switch(function(e,t){return 45^Tt(e,0)?(((t<<2^Tt(e,0))<<2^Tt(e,1))<<2^Tt(e,2))<<2^Tt(e,3):0}(e,t)){case 5103:return ht+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ht+e+e;case 4789:return ft+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ht+e+ft+e+pt+e+e;case 5936:switch(Tt(e,t+11)){case 114:return ht+e+pt+Et(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ht+e+pt+Et(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ht+e+pt+Et(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ht+e+pt+e+e;case 6165:return ht+e+pt+"flex-"+e+e;case 5187:return ht+e+Et(e,/(\w+).+(:[^]+)/,ht+"box-$1$2"+pt+"flex-$1$2")+e;case 5443:return ht+e+pt+"flex-item-"+Et(e,/flex-|-self/g,"")+(kt(e,/flex-|baseline/)?"":pt+"grid-row-"+Et(e,/flex-|-self/g,""))+e;case 4675:return ht+e+pt+"flex-line-pack"+Et(e,/align-content|flex-|-self/g,"")+e;case 5548:return ht+e+pt+Et(e,"shrink","negative")+e;case 5292:return ht+e+pt+Et(e,"basis","preferred-size")+e;case 6060:return ht+"box-"+Et(e,"-grow","")+ht+e+pt+Et(e,"grow","positive")+e;case 4554:return ht+Et(e,/([^-])(transform)/g,"$1"+ht+"$2")+e;case 6187:return Et(Et(Et(e,/(zoom-|grab)/,ht+"$1"),/(image-set)/,ht+"$1"),e,"")+e;case 5495:case 3959:return Et(e,/(image-set\([^]*)/,ht+"$1$`$1");case 4968:return Et(Et(e,/(.+:)(flex-)?(.*)/,ht+"box-pack:$3"+pt+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ht+e+e;case 4200:if(!kt(e,/flex-|baseline/))return pt+"grid-column-align"+Pt(e,t)+e;break;case 2592:case 3360:return pt+Et(e,"template-","")+e;case 4384:case 3616:return n&&n.some((function(e,n){return t=n,kt(e.props,/grid-\w+-end/)}))?~Ct(e+(n=n[t].value),"span",0)?e:pt+Et(e,"-start","")+e+pt+"grid-row-span:"+(~Ct(n,"span",0)?kt(n,/\d+/):+kt(n,/\d+/)-+kt(e,/\d+/))+";":pt+Et(e,"-start","")+e;case 4896:case 4128:return n&&n.some((function(e){return kt(e.props,/grid-\w+-start/)}))?e:pt+Et(Et(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return Et(e,/(.+)-inline(.+)/,ht+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_t(e)-1-t>6)switch(Tt(e,t+1)){case 109:if(45!==Tt(e,t+4))break;case 102:return Et(e,/(.+:)(.+)-([^]+)/,"$1"+ht+"$2-$3$1"+ft+(108==Tt(e,t+3)?"$3":"$2-$3"))+e;case 115:return~Ct(e,"stretch",0)?rn(Et(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return Et(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,(function(t,n,r,o,i,a,s){return pt+n+":"+r+s+(o?pt+n+"-span:"+(i?a:+a-+r)+s:"")+e}));case 4949:if(121===Tt(e,t+6))return Et(e,":",":"+ht)+e;break;case 6444:switch(Tt(e,45===Tt(e,14)?18:11)){case 120:return Et(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ht+(45===Tt(e,14)?"inline-":"")+"box$3$1"+ht+"$2$3$1"+pt+"$2box$3")+e;case 100:return Et(e,":",":"+pt)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return Et(e,"scroll-","scroll-snap-")+e}return e}function on(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case vt:return void(e.return=rn(e.value,e.length,n));case yt:return tn([Mt(e,{value:Et(e.value,"@","@"+ht)})],r);case gt:if(e.length)return function(e,t){return e.map(t).join("")}(n=e.props,(function(t){switch(kt(t,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":$t(Mt(e,{props:[Et(t,/:(read-\w+)/,":-moz-$1")]})),$t(Mt(e,{props:[t]})),wt(e,{props:Rt(n,r)});break;case"::placeholder":$t(Mt(e,{props:[Et(t,/:(plac\w+)/,":"+ht+"input-$1")]})),$t(Mt(e,{props:[Et(t,/:(plac\w+)/,":-moz-$1")]})),$t(Mt(e,{props:[Et(t,/:(plac\w+)/,pt+"input-$1")]})),$t(Mt(e,{props:[t]})),wt(e,{props:Rt(n,r)})}return""}))}}function an(e){return Qt(sn("",null,null,null,[""],e=Kt(e),0,[0],e))}function sn(e,t,n,r,o,i,a,s,l){for(var c=0,u=0,d=a,p=0,f=0,h=0,m=1,g=1,v=1,y=0,b="",x=o,w=i,S=r,k=b;g;)switch(h=y,y=Vt()){case 40:if(108!=h&&58==Tt(k,d-1)){-1!=Ct(k+=Et(Xt(y),"&","&\f"),"&\f",bt(c?s[c-1]:0))&&(v=-1);break}case 34:case 39:case 91:k+=Xt(y);break;case 9:case 10:case 13:case 32:k+=qt(h);break;case 92:k+=Gt(Ht()-1,7);continue;case 47:switch(Ut()){case 42:case 47:At(cn(Zt(Vt(),Ht()),t,n,l),l);break;default:k+="/"}break;case 123*m:s[c++]=_t(k)*v;case 125*m:case 59:case 0:switch(y){case 0:case 125:g=0;case 59+u:-1==v&&(k=Et(k,/\f/g,"")),f>0&&_t(k)-d&&At(f>32?un(k+";",r,n,d-1,l):un(Et(k," ","")+";",r,n,d-2,l),l);break;case 59:k+=";";default:if(At(S=ln(k,t,n,c,u,o,s,b,x=[],w=[],d,i),i),123===y)if(0===u)sn(k,t,S,S,x,i,d,s,w);else switch(99===p&&110===Tt(k,3)?100:p){case 100:case 108:case 109:case 115:sn(e,S,S,r&&At(ln(e,S,S,0,0,o,s,b,o,x=[],d,w),w),o,w,d,s,r?x:w);break;default:sn(k,S,S,S,[""],w,0,s,w)}}c=u=f=0,m=v=1,b=k="",d=a;break;case 58:d=1+_t(k),f=h;default:if(m<1)if(123==y)--m;else if(125==y&&0==m++&&125==Bt())continue;switch(k+=xt(y),y*m){case 38:v=u>0?1:(k+="\f",-1);break;case 44:s[c++]=(_t(k)-1)*v,v=1;break;case 64:45===Ut()&&(k+=Xt(Vt())),p=Ut(),u=d=_t(b=k+=en(Ht())),y++;break;case 45:45===h&&2==_t(k)&&(m=0)}}return i}function ln(e,t,n,r,o,i,a,s,l,c,u,d){for(var p=o-1,f=0===o?i:[""],h=jt(f),m=0,g=0,v=0;m<r;++m)for(var y=0,b=Pt(e,p+1,p=bt(g=a[m])),x=e;y<h;++y)(x=St(g>0?f[y]+" "+b:Et(b,/&\f/g,f[y])))&&(l[v++]=x);return It(e,t,n,0===o?gt:s,l,c,u,d)}function cn(e,t,n,r){return It(e,t,n,mt,xt(Nt),Pt(e,2,-2),0,r)}function un(e,t,n,r,o){return It(e,t,n,vt,Pt(e,0,r),Pt(e,r+1,-1),r,o)}var dn={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},pn="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.SC_ATTR)||"data-styled",fn="active",hn="data-styled-version",mn="6.1.17",gn="/*!sc*/\n",vn="undefined"!=typeof window&&"HTMLElement"in window,yn=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.REACT_APP_SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"}.SC_DISABLE_SPEEDY)),bn={},xn=(new Set,Object.freeze([])),wn=Object.freeze({});function Sn(e,t,n){return void 0===n&&(n=wn),e.theme!==n.theme&&e.theme||t||n.theme}var kn=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),En=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,Cn=/(^-|-$)/g;function Tn(e){return e.replace(En,"-").replace(Cn,"")}var Pn=/(a)(d)/gi,_n=function(e){return String.fromCharCode(e+(e>25?39:97))};function jn(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=_n(t%52)+n;return(_n(t%52)+n).replace(Pn,"$1-$2")}var An,Rn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},On=function(e){return Rn(5381,e)};function Dn(e){return jn(On(e)>>>0)}function Ln(e){return e.displayName||e.name||"Component"}function zn(e){return"string"==typeof e&&!0}var Nn="function"==typeof Symbol&&Symbol.for,Fn=Nn?Symbol.for("react.memo"):60115,In=Nn?Symbol.for("react.forward_ref"):60112,Mn={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},$n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Bn={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vn=((An={})[In]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},An[Fn]=Bn,An);function Un(e){return("type"in(t=e)&&t.type.$$typeof)===Fn?Bn:"$$typeof"in e?Vn[e.$$typeof]:Mn;var t}var Hn=Object.defineProperty,Wn=Object.getOwnPropertyNames,Yn=Object.getOwnPropertySymbols,Kn=Object.getOwnPropertyDescriptor,Qn=Object.getPrototypeOf,Xn=Object.prototype;function qn(e,t,n){if("string"!=typeof t){if(Xn){var r=Qn(t);r&&r!==Xn&&qn(e,r,n)}var o=Wn(t);Yn&&(o=o.concat(Yn(t)));for(var i=Un(e),a=Un(t),s=0;s<o.length;++s){var l=o[s];if(!(l in $n||n&&n[l]||a&&l in a||i&&l in i)){var c=Kn(t,l);try{Hn(e,l,c)}catch(e){}}}}return e}function Gn(e){return"function"==typeof e}function Jn(e){return"object"==typeof e&&"styledComponentId"in e}function Zn(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function er(e,t){if(0===e.length)return"";for(var n=e[0],r=1;r<e.length;r++)n+=t?t+e[r]:e[r];return n}function tr(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function nr(e,t,n){if(void 0===n&&(n=!1),!n&&!tr(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=nr(e[r],t[r]);else if(tr(t))for(var r in t)e[r]=nr(e[r],t[r]);return e}function rr(e,t){Object.defineProperty(e,"toString",{value:t})}function or(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var ir=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}return e.prototype.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},e.prototype.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,o=r;e>=o;)if((o<<=1)<0)throw or(16,"".concat(e));this.groupSizes=new Uint32Array(o),this.groupSizes.set(n),this.length=o;for(var i=r;i<o;i++)this.groupSizes[i]=0}for(var a=this.indexOfGroup(e+1),s=(i=0,t.length);i<s;i++)this.tag.insertRule(a,t[i])&&(this.groupSizes[e]++,a++)},e.prototype.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var o=n;o<r;o++)this.tag.deleteRule(n)}},e.prototype.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),o=r+n,i=r;i<o;i++)t+="".concat(this.tag.getRule(i)).concat(gn);return t},e}(),ar=new Map,sr=new Map,lr=1,cr=function(e){if(ar.has(e))return ar.get(e);for(;sr.has(lr);)lr++;var t=lr++;return ar.set(e,t),sr.set(t,e),t},ur=function(e,t){lr=t+1,ar.set(e,t),sr.set(t,e)},dr="style[".concat(pn,"][").concat(hn,'="').concat(mn,'"]'),pr=new RegExp("^".concat(pn,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),fr=function(e,t,n){for(var r,o=n.split(","),i=0,a=o.length;i<a;i++)(r=o[i])&&e.registerName(t,r)},hr=function(e,t){for(var n,r=(null!==(n=t.textContent)&&void 0!==n?n:"").split(gn),o=[],i=0,a=r.length;i<a;i++){var s=r[i].trim();if(s){var l=s.match(pr);if(l){var c=0|parseInt(l[1],10),u=l[2];0!==c&&(ur(u,c),fr(e,u,l[3]),e.getTag().insertRules(c,o)),o.length=0}else o.push(s)}}},mr=function(e){for(var t=document.querySelectorAll(dr),n=0,r=t.length;n<r;n++){var o=t[n];o&&o.getAttribute(pn)!==fn&&(hr(e,o),o.parentNode&&o.parentNode.removeChild(o))}};function gr(){return n.nc}var vr=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(e){var t=Array.from(e.querySelectorAll("style[".concat(pn,"]")));return t[t.length-1]}(n),i=void 0!==o?o.nextSibling:null;r.setAttribute(pn,fn),r.setAttribute(hn,mn);var a=gr();return a&&r.setAttribute("nonce",a),n.insertBefore(r,i),r},yr=function(){function e(e){this.element=vr(e),this.element.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var o=t[n];if(o.ownerNode===e)return o}throw or(17)}(this.element),this.length=0}return e.prototype.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},e.prototype.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},e.prototype.getRule=function(e){var t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""},e}(),br=function(){function e(e){this.element=vr(e),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t);return this.element.insertBefore(n,this.nodes[e]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},e.prototype.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),xr=function(){function e(e){this.rules=[],this.length=0}return e.prototype.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},e.prototype.deleteRule=function(e){this.rules.splice(e,1),this.length--},e.prototype.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),wr=vn,Sr={isServer:!vn,useCSSOMInjection:!yn},kr=function(){function e(e,t,n){void 0===e&&(e=wn),void 0===t&&(t={});var r=this;this.options=lt(lt({},Sr),e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&vn&&wr&&(wr=!1,mr(this)),rr(this,(function(){return function(e){for(var t=e.getTag(),n=t.length,r="",o=function(n){var o=function(e){return sr.get(e)}(n);if(void 0===o)return"continue";var i=e.names.get(o),a=t.getGroup(n);if(void 0===i||!i.size||0===a.length)return"continue";var s="".concat(pn,".g").concat(n,'[id="').concat(o,'"]'),l="";void 0!==i&&i.forEach((function(e){e.length>0&&(l+="".concat(e,","))})),r+="".concat(a).concat(s,'{content:"').concat(l,'"}').concat(gn)},i=0;i<n;i++)o(i);return r}(r)}))}return e.registerId=function(e){return cr(e)},e.prototype.rehydrate=function(){!this.server&&vn&&mr(this)},e.prototype.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(lt(lt({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(e=function(e){var t=e.useCSSOMInjection,n=e.target;return e.isServer?new xr(n):t?new yr(n):new br(n)}(this.options),new ir(e)));var e},e.prototype.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},e.prototype.registerName=function(e,t){if(cr(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},e.prototype.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(cr(e),n)},e.prototype.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},e.prototype.clearRules=function(e){this.getTag().clearGroup(cr(e)),this.clearNames(e)},e.prototype.clearTag=function(){this.tag=void 0},e}(),Er=/&/g,Cr=/^\s*\/\/.*$/gm;function Tr(e,t){return e.map((function(e){return"rule"===e.type&&(e.value="".concat(t," ").concat(e.value),e.value=e.value.replaceAll(",",",".concat(t," ")),e.props=e.props.map((function(e){return"".concat(t," ").concat(e)}))),Array.isArray(e.children)&&"@keyframes"!==e.type&&(e.children=Tr(e.children,t)),e}))}function Pr(e){var t,n,r,o=void 0===e?wn:e,i=o.options,a=void 0===i?wn:i,s=o.plugins,l=void 0===s?xn:s,c=function(e,r,o){return o.startsWith(n)&&o.endsWith(n)&&o.replaceAll(n,"").length>0?".".concat(t):e},u=l.slice();u.push((function(e){e.type===gt&&e.value.includes("&")&&(e.props[0]=e.props[0].replace(Er,n).replace(r,c))})),a.prefix&&u.push(on),u.push(nn);var d=function(e,o,i,s){void 0===o&&(o=""),void 0===i&&(i=""),void 0===s&&(s="&"),t=s,n=o,r=new RegExp("\\".concat(n,"\\b"),"g");var l=e.replace(Cr,""),c=an(i||o?"".concat(i," ").concat(o," { ").concat(l," }"):l);a.namespace&&(c=Tr(c,a.namespace));var d,p=[];return tn(c,function(e){var t=jt(e);return function(n,r,o,i){for(var a="",s=0;s<t;s++)a+=e[s](n,r,o,i)||"";return a}}(u.concat((d=function(e){return p.push(e)},function(e){e.root||(e=e.return)&&d(e)})))),p};return d.hash=l.length?l.reduce((function(e,t){return t.name||or(15),Rn(e,t.name)}),5381).toString():"",d}var _r=new kr,jr=Pr(),Ar=e.createContext({shouldForwardProp:void 0,styleSheet:_r,stylis:jr}),Rr=(Ar.Consumer,e.createContext(void 0));function Or(){return(0,e.useContext)(Ar)}function Dr(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],o=n[1],i=Or().styleSheet,a=(0,e.useMemo)((function(){var e=i;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e}),[t.disableCSSOMInjection,t.sheet,t.target,i]),s=(0,e.useMemo)((function(){return Pr({options:{namespace:t.namespace,prefix:t.enableVendorPrefixes},plugins:r})}),[t.enableVendorPrefixes,t.namespace,r]);(0,e.useEffect)((function(){dt()(r,t.stylisPlugins)||o(t.stylisPlugins)}),[t.stylisPlugins]);var l=(0,e.useMemo)((function(){return{shouldForwardProp:t.shouldForwardProp,styleSheet:a,stylis:s}}),[t.shouldForwardProp,a,s]);return e.createElement(Ar.Provider,{value:l},e.createElement(Rr.Provider,{value:s},t.children))}var Lr=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=jr);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.name=e,this.id="sc-keyframes-".concat(e),this.rules=t,rr(this,(function(){throw or(12,String(n.name))}))}return e.prototype.getName=function(e){return void 0===e&&(e=jr),this.name+e.hash},e}(),zr=function(e){return e>="A"&&e<="Z"};function Nr(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(1===n&&"-"===r&&"-"===e[0])return e;zr(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var Fr=function(e){return null==e||!1===e||""===e},Ir=function(e){var t,n,r=[];for(var o in e){var i=e[o];e.hasOwnProperty(o)&&!Fr(i)&&(Array.isArray(i)&&i.isCss||Gn(i)?r.push("".concat(Nr(o),":"),i,";"):tr(i)?r.push.apply(r,ct(ct(["".concat(o," {")],Ir(i),!1),["}"],!1)):r.push("".concat(Nr(o),": ").concat((t=o,null==(n=i)||"boolean"==typeof n||""===n?"":"number"!=typeof n||0===n||t in dn||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function Mr(e,t,n,r){return Fr(e)?[]:Jn(e)?[".".concat(e.styledComponentId)]:Gn(e)?!Gn(o=e)||o.prototype&&o.prototype.isReactComponent||!t?[e]:Mr(e(t),t,n,r):e instanceof Lr?n?(e.inject(n,r),[e.getName(r)]):[e]:tr(e)?Ir(e):Array.isArray(e)?Array.prototype.concat.apply(xn,e.map((function(e){return Mr(e,t,n,r)}))):[e.toString()];var o}function $r(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Gn(n)&&!Jn(n))return!1}return!0}var Br=On(mn),Vr=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&$r(e),this.componentId=t,this.baseHash=Rn(Br,t),this.baseStyle=n,kr.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,n):"";if(this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(this.componentId,this.staticRulesId))r=Zn(r,this.staticRulesId);else{var o=er(Mr(this.rules,e,t,n)),i=jn(Rn(this.baseHash,o)>>>0);if(!t.hasNameForId(this.componentId,i)){var a=n(o,".".concat(i),void 0,this.componentId);t.insertRules(this.componentId,i,a)}r=Zn(r,i),this.staticRulesId=i}else{for(var s=Rn(this.baseHash,n.hash),l="",c=0;c<this.rules.length;c++){var u=this.rules[c];if("string"==typeof u)l+=u;else if(u){var d=er(Mr(u,e,t,n));s=Rn(s,d+c),l+=d}}if(l){var p=jn(s>>>0);t.hasNameForId(this.componentId,p)||t.insertRules(this.componentId,p,n(l,".".concat(p),void 0,this.componentId)),r=Zn(r,p)}}return r},e}(),Ur=e.createContext(void 0);Ur.Consumer;var Hr={};new Set;function Wr(t,n,r){var o=Jn(t),i=t,a=!zn(t),s=n.attrs,l=void 0===s?xn:s,c=n.componentId,u=void 0===c?function(e,t){var n="string"!=typeof e?"sc":Tn(e);Hr[n]=(Hr[n]||0)+1;var r="".concat(n,"-").concat(Dn(mn+n+Hr[n]));return t?"".concat(t,"-").concat(r):r}(n.displayName,n.parentComponentId):c,d=n.displayName,p=void 0===d?function(e){return zn(e)?"styled.".concat(e):"Styled(".concat(Ln(e),")")}(t):d,f=n.displayName&&n.componentId?"".concat(Tn(n.displayName),"-").concat(n.componentId):n.componentId||u,h=o&&i.attrs?i.attrs.concat(l).filter(Boolean):l,m=n.shouldForwardProp;if(o&&i.shouldForwardProp){var g=i.shouldForwardProp;if(n.shouldForwardProp){var v=n.shouldForwardProp;m=function(e,t){return g(e,t)&&v(e,t)}}else m=g}var y=new Vr(r,f,o?i.componentStyle:void 0);function b(t,n){return function(t,n,r){var o=t.attrs,i=t.componentStyle,a=t.defaultProps,s=t.foldedComponentIds,l=t.styledComponentId,c=t.target,u=e.useContext(Ur),d=Or(),p=t.shouldForwardProp||d.shouldForwardProp,f=Sn(n,u,a)||wn,h=function(e,t,n){for(var r,o=lt(lt({},t),{className:void 0,theme:n}),i=0;i<e.length;i+=1){var a=Gn(r=e[i])?r(o):r;for(var s in a)o[s]="className"===s?Zn(o[s],a[s]):"style"===s?lt(lt({},o[s]),a[s]):a[s]}return t.className&&(o.className=Zn(o.className,t.className)),o}(o,n,f),m=h.as||c,g={};for(var v in h)void 0===h[v]||"$"===v[0]||"as"===v||"theme"===v&&h.theme===f||("forwardedAs"===v?g.as=h.forwardedAs:p&&!p(v,m)||(g[v]=h[v]));var y=function(e,t){var n=Or();return e.generateAndInjectStyles(t,n.styleSheet,n.stylis)}(i,h),b=Zn(s,l);return y&&(b+=" "+y),h.className&&(b+=" "+h.className),g[zn(m)&&!kn.has(m)?"class":"className"]=b,r&&(g.ref=r),(0,e.createElement)(m,g)}(x,t,n)}b.displayName=p;var x=e.forwardRef(b);return x.attrs=h,x.componentStyle=y,x.displayName=p,x.shouldForwardProp=m,x.foldedComponentIds=o?Zn(i.foldedComponentIds,i.styledComponentId):"",x.styledComponentId=f,x.target=o?i.target:t,Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=o?function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=0,o=t;r<o.length;r++)nr(e,o[r],!0);return e}({},i.defaultProps,e):e}}),rr(x,(function(){return".".concat(x.styledComponentId)})),a&&qn(x,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),x}function Yr(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n}var Kr=function(e){return Object.assign(e,{isCss:!0})};function Qr(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Gn(e)||tr(e))return Kr(Mr(Yr(xn,ct([e],t,!0))));var r=e;return 0===t.length&&1===r.length&&"string"==typeof r[0]?Mr(r):Kr(Mr(Yr(r,t)))}function Xr(e,t,n){if(void 0===n&&(n=wn),!t)throw or(1,t);var r=function(r){for(var o=[],i=1;i<arguments.length;i++)o[i-1]=arguments[i];return e(t,n,Qr.apply(void 0,ct([r],o,!1)))};return r.attrs=function(r){return Xr(e,t,lt(lt({},n),{attrs:Array.prototype.concat(n.attrs,r).filter(Boolean)}))},r.withConfig=function(r){return Xr(e,t,lt(lt({},n),r))},r}var qr=function(e){return Xr(Wr,e)},Gr=qr;kn.forEach((function(e){Gr[e]=qr(e)}));var Jr=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=$r(e),kr.registerId(this.componentId+1)}return e.prototype.createStyles=function(e,t,n,r){var o=r(er(Mr(this.rules,t,n,r)),""),i=this.componentId+e;n.insertRules(i,i,o)},e.prototype.removeStyles=function(e,t){t.clearRules(this.componentId+e)},e.prototype.renderStyles=function(e,t,n,r){e>2&&kr.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();(function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=gr(),r=er([n&&'nonce="'.concat(n,'"'),"".concat(pn,'="true"'),"".concat(hn,'="').concat(mn,'"')].filter(Boolean)," ");return"<style ".concat(r,">").concat(e,"</style>")},this.getStyleTags=function(){if(t.sealed)throw or(2);return t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)throw or(2);var r=t.instance.toString();if(!r)return[];var o=((n={})[pn]="",n[hn]=mn,n.dangerouslySetInnerHTML={__html:r},n),i=gr();return i&&(o.nonce=i),[e.createElement("style",lt({},o,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new kr({isServer:!0}),this.sealed=!1}t.prototype.collectStyles=function(t){if(this.sealed)throw or(2);return e.createElement(Dr,{sheet:this.instance},t)},t.prototype.interleaveWithNodeStream=function(e){throw or(3)}})(),"__sc-".concat(pn,"__");const Zr={xs:"480px",sm:"640px",md:"768px",lg:"1024px",xl:"1280px",xxl:"1536px","3xl":"1920px","4xl":"2560px"},eo=(Zr.xs,`@media (max-width: ${Zr.sm})`),to=`@media (max-width: ${Zr.md})`,no=`@media (max-width: ${Zr.lg})`,ro=(Zr.xl,Zr.xxl,`@media (max-width: ${Zr.sm}) and (orientation: portrait)`),oo=`@media (max-width: ${Zr.sm}) and (orientation: landscape)`,io=(Zr.sm,Zr.lg,`@media (min-width: ${Zr.sm}) and (max-width: ${Zr.lg}) and (orientation: landscape)`),ao=(function(t){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];var o=Qr.apply(void 0,ct([t],n,!1)),i="sc-global-".concat(Dn(JSON.stringify(o))),a=new Jr(o,i),s=function(t){var n=Or(),r=e.useContext(Ur),o=e.useRef(n.styleSheet.allocateGSInstance(i)).current;return n.styleSheet.server&&l(o,t,n.styleSheet,r,n.stylis),e.useLayoutEffect((function(){if(!n.styleSheet.server)return l(o,t,n.styleSheet,r,n.stylis),function(){return a.removeStyles(o,n.styleSheet)}}),[o,t,n.styleSheet,r,n.stylis]),null};function l(e,t,n,r,o){if(a.isStatic)a.renderStyles(e,bn,n,o);else{var i=lt(lt({},t),{theme:Sn(t,r,s.defaultProps)});a.renderStyles(e,i,n,o)}}return e.memo(s)})`
  :root {    
    /* Card Type Colors - Aligned with cyberpunk aesthetic */
    --color-project: #2ecc71;
    --color-skill: #e74c3c;
    --color-experience: #56ccf2;
    --color-highlight: #c4cf20;
    
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
    ${no} {
      --spacing-xl: 1.5rem;
      --card-width: 220px;
      --card-height: 270px;
    }

    ${to} {
      --spacing-lg: 1.25rem;
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 200px;
      --card-height: 250px;
    }

    ${eo} {
      --spacing-md: 0.75rem;
      --spacing-lg: 1rem; 
      --spacing-xl: 1.25rem;
      --spacing-xxl: 1.5rem;
      --card-width: 180px;
      --card-height: 230px;
    }
    ${io} {
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
  ${ro} {
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

    ${to} {
      letter-spacing: 0.03em;
    }

    ${eo} {
      letter-spacing: 0.02em;
    }
  }

  h1 {
    font-size: 3rem;

    ${no} {
      font-size: 2.5rem;
    }

    ${to} {
      font-size: 2rem;
    }

    ${eo} {
      font-size: 1.75rem;
    }
  }

  h2 {
    font-size: 2rem;

    ${no} {
      font-size: 1.75rem;
    }

    ${to} {
      font-size: 1.5rem;
    }

    ${eo} {
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

    ${eo} {
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
`;function so(e){if("undefined"===typeof Proxy)return e;const t=new Map;return new Proxy((function(){return e(...arguments)}),{get:(n,r)=>"create"===r?e:(t.has(r)||t.set(r,e(r)),t.get(r))})}function lo(e){return null!==e&&"object"===typeof e&&"function"===typeof e.start}function co(e){const t=[{},{}];return e?.values.forEach(((e,n)=>{t[0][n]=e.get(),t[1][n]=e.getVelocity()})),t}function uo(e,t,n,r){if("function"===typeof t){const[o,i]=co(r);t=t(void 0!==n?n:e.custom,o,i)}if("string"===typeof t&&(t=e.variants&&e.variants[t]),"function"===typeof t){const[o,i]=co(r);t=t(void 0!==n?n:e.custom,o,i)}return t}function po(e,t,n){const r=e.getProps();return uo(r,t,void 0!==n?n:r.custom,e)}function fo(e,t){return e?.[t]??e?.default??e}const ho=e=>e,mo={skipAnimations:!1,useManualTiming:!1},go=["read","resolveKeyframes","update","preRender","render","postRender"],vo={value:null,addProjectionMetrics:null};function yo(e,t){let n=!1,r=!0;const o={delta:0,timestamp:0,isProcessing:!1},i=()=>n=!0,a=go.reduce(((e,n)=>(e[n]=function(e,t){let n=new Set,r=new Set,o=!1,i=!1;const a=new WeakSet;let s={delta:0,timestamp:0,isProcessing:!1},l=0;function c(t){a.has(t)&&(u.schedule(t),e()),l++,t(s)}const u={schedule:function(e){const t=arguments.length>2&&void 0!==arguments[2]&&arguments[2]&&o?n:r;return arguments.length>1&&void 0!==arguments[1]&&arguments[1]&&a.add(e),t.has(e)||t.add(e),e},cancel:e=>{r.delete(e),a.delete(e)},process:e=>{s=e,o?i=!0:(o=!0,[n,r]=[r,n],n.forEach(c),t&&vo.value&&vo.value.frameloop[t].push(l),l=0,n.clear(),o=!1,i&&(i=!1,u.process(e)))}};return u}(i,t?n:void 0),e)),{}),{read:s,resolveKeyframes:l,update:c,preRender:u,render:d,postRender:p}=a,f=()=>{const i=mo.useManualTiming?o.timestamp:performance.now();n=!1,mo.useManualTiming||(o.delta=r?1e3/60:Math.max(Math.min(i-o.timestamp,40),1)),o.timestamp=i,o.isProcessing=!0,s.process(o),l.process(o),c.process(o),u.process(o),d.process(o),p.process(o),o.isProcessing=!1,n&&t&&(r=!1,e(f))},h=go.reduce(((t,i)=>{const s=a[i];return t[i]=function(t){let i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return n||(n=!0,r=!0,o.isProcessing||e(f)),s.schedule(t,i,a)},t}),{});return{schedule:h,cancel:e=>{for(let t=0;t<go.length;t++)a[go[t]].cancel(e)},state:o,steps:a}}const{schedule:bo,cancel:xo,state:wo,steps:So}=yo("undefined"!==typeof requestAnimationFrame?requestAnimationFrame:ho,!0),ko=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Eo=new Set(ko),Co=new Set(["width","height","top","left","right","bottom",...ko]);function To(e,t){-1===e.indexOf(t)&&e.push(t)}function Po(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class _o{constructor(){this.subscriptions=[]}add(e){return To(this.subscriptions,e),()=>Po(this.subscriptions,e)}notify(e,t,n){const r=this.subscriptions.length;if(r)if(1===r)this.subscriptions[0](e,t,n);else for(let o=0;o<r;o++){const r=this.subscriptions[o];r&&r(e,t,n)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}function jo(e,t){return t?e*(1e3/t):0}let Ao;function Ro(){Ao=void 0}const Oo={now:()=>(void 0===Ao&&Oo.set(wo.isProcessing||mo.useManualTiming?wo.timestamp:performance.now()),Ao),set:e=>{Ao=e,queueMicrotask(Ro)}},Do={current:void 0};class Lo{constructor(e){var t=this;let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.version="12.7.4",this.canTrackVelocity=null,this.events={},this.updateAndNotify=function(e){let n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const r=Oo.now();t.updatedAt!==r&&t.setPrevFrameValue(),t.prev=t.current,t.setCurrent(e),t.current!==t.prev&&t.events.change&&t.events.change.notify(t.current),n&&t.events.renderRequest&&t.events.renderRequest.notify(t.current)},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){var t;this.current=e,this.updatedAt=Oo.now(),null===this.canTrackVelocity&&void 0!==e&&(this.canTrackVelocity=(t=this.current,!isNaN(parseFloat(t))))}setPrevFrameValue(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.current;this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,t){this.events[e]||(this.events[e]=new _o);const n=this.events[e].add(t);return"change"===e?()=>{n(),bo.read((()=>{this.events.change.getSize()||this.stop()}))}:n}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,t){this.passiveEffect=e,this.stopPassiveEffect=t}set(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];t&&this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e,t)}setWithVelocity(e,t,n){this.set(t),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-n}jump(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,t&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return Do.current&&Do.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=Oo.now();if(!this.canTrackVelocity||void 0===this.prevFrameValue||e-this.updatedAt>30)return 0;const t=Math.min(this.updatedAt-this.prevUpdatedAt,30);return jo(parseFloat(this.current)-parseFloat(this.prevFrameValue),t)}start(e){return this.stop(),new Promise((t=>{this.hasAnimated=!0,this.animation=e(t),this.events.animationStart&&this.events.animationStart.notify()})).then((()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()}))}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function zo(e,t){return new Lo(e,t)}const No=e=>Array.isArray(e),Fo=e=>No(e)?e[e.length-1]||0:e;function Io(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,zo(n))}const Mo=e=>Boolean(e&&e.getVelocity);function $o(e,t){const n=e.getValue("willChange");if(r=n,Boolean(Mo(r)&&r.add))return n.add(t);if(!n&&mo.WillChange){const n=new mo.WillChange("auto");e.addValue("willChange",n),n.add(t)}var r}const Bo=e=>e.replace(/([a-z])([A-Z])/gu,"$1-$2").toLowerCase(),Vo="data-"+Bo("framerAppearId");function Uo(e){return e.props[Vo]}function Ho(e){let t;return()=>(void 0===t&&(t=e()),t)}const Wo=Ho((()=>void 0!==window.ScrollTimeline));class Yo{constructor(e){this.stop=()=>this.runAll("stop"),this.animations=e.filter(Boolean)}get finished(){return Promise.all(this.animations.map((e=>e.finished)))}getAll(e){return this.animations[0][e]}setAll(e,t){for(let n=0;n<this.animations.length;n++)this.animations[n][e]=t}attachTimeline(e,t){const n=this.animations.map((n=>Wo()&&n.attachTimeline?n.attachTimeline(e):"function"===typeof t?t(n):void 0));return()=>{n.forEach(((e,t)=>{e&&e(),this.animations[t].stop()}))}}get time(){return this.getAll("time")}set time(e){this.setAll("time",e)}get speed(){return this.getAll("speed")}set speed(e){this.setAll("speed",e)}get startTime(){return this.getAll("startTime")}get duration(){let e=0;for(let t=0;t<this.animations.length;t++)e=Math.max(e,this.animations[t].duration);return e}runAll(e){this.animations.forEach((t=>t[e]()))}flatten(){this.runAll("flatten")}play(){this.runAll("play")}pause(){this.runAll("pause")}cancel(){this.runAll("cancel")}complete(){this.runAll("complete")}}class Ko extends Yo{then(e,t){return this.finished.finally(e).then((()=>{}))}}const Qo=e=>1e3*e,Xo=e=>e/1e3,qo=!1;function Go(e){return"function"===typeof e&&"applyToOptions"in e}const Jo=e=>Array.isArray(e)&&"number"===typeof e[0],Zo={};function ei(e,t){const n=Ho(e);return()=>Zo[t]??n()}const ti=ei((()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch(Tv){return!1}return!0}),"linearEasing"),ni=e=>{let[t,n,r,o]=e;return`cubic-bezier(${t}, ${n}, ${r}, ${o})`},ri={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ni([0,.65,.55,1]),circOut:ni([.55,0,1,.45]),backIn:ni([.31,.01,.66,-.59]),backOut:ni([.33,1.53,.69,.99])};function oi(e){return Boolean("function"===typeof e&&ti()||!e||"string"===typeof e&&(e in ri||ti())||Jo(e)||Array.isArray(e)&&e.every(oi))}const ii={layout:0,mainThread:0,waapi:0},ai=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:10,r="";const o=Math.max(Math.round(t/n),2);for(let i=0;i<o;i++)r+=e(i/(o-1))+", ";return`linear(${r.substring(0,r.length-2)})`};function si(e,t){return e?"function"===typeof e&&ti()?ai(e,t):Jo(e)?ni(e):Array.isArray(e)?e.map((e=>si(e,t)||ri.easeOut)):ri[e]:void 0}function li(e,t,n){let{delay:r=0,duration:o=300,repeat:i=0,repeatType:a="loop",ease:s="easeInOut",times:l}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},c=arguments.length>4&&void 0!==arguments[4]?arguments[4]:void 0;const u={[t]:n};l&&(u.offset=l);const d=si(s,o);Array.isArray(d)&&(u.easing=d),vo.value&&ii.waapi++;const p=e.animate(u,{delay:r,duration:o,easing:Array.isArray(d)?"linear":d,fill:"both",iterations:i+1,direction:"reverse"===a?"alternate":"normal",pseudoElement:c});return vo.value&&p.finished.finally((()=>{ii.waapi--})),p}function ci(e,t){e.timeline=t,e.onfinish=null}const ui=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e;function di(e,t,n,r){if(e===t&&n===r)return ho;const o=t=>function(e,t,n,r,o){let i,a,s=0;do{a=t+(n-t)/2,i=ui(a,r,o)-e,i>0?n=a:t=a}while(Math.abs(i)>1e-7&&++s<12);return a}(t,0,1,e,n);return e=>0===e||1===e?e:ui(o(e),t,r)}const pi=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,fi=e=>t=>1-e(1-t),hi=di(.33,1.53,.69,.99),mi=fi(hi),gi=pi(mi),vi=e=>(e*=2)<1?.5*mi(e):.5*(2-Math.pow(2,-10*(e-1))),yi=e=>1-Math.sin(Math.acos(e)),bi=fi(yi),xi=pi(yi),wi=e=>/^0[^.\s]+$/u.test(e);const Si=(e,t,n)=>n>t?t:n<e?e:n,ki={test:e=>"number"===typeof e,parse:parseFloat,transform:e=>e},Ei={...ki,transform:e=>Si(0,1,e)},Ci={...ki,default:1},Ti=e=>Math.round(1e5*e)/1e5,Pi=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;const _i=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,ji=(e,t)=>n=>Boolean("string"===typeof n&&_i.test(n)&&n.startsWith(e)||t&&!function(e){return null==e}(n)&&Object.prototype.hasOwnProperty.call(n,t)),Ai=(e,t,n)=>r=>{if("string"!==typeof r)return r;const[o,i,a,s]=r.match(Pi);return{[e]:parseFloat(o),[t]:parseFloat(i),[n]:parseFloat(a),alpha:void 0!==s?parseFloat(s):1}},Ri={...ki,transform:e=>Math.round((e=>Si(0,255,e))(e))},Oi={test:ji("rgb","red"),parse:Ai("red","green","blue"),transform:e=>{let{red:t,green:n,blue:r,alpha:o=1}=e;return"rgba("+Ri.transform(t)+", "+Ri.transform(n)+", "+Ri.transform(r)+", "+Ti(Ei.transform(o))+")"}};const Di={test:ji("#"),parse:function(e){let t="",n="",r="",o="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),r=e.substring(5,7),o=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),r=e.substring(3,4),o=e.substring(4,5),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}},transform:Oi.transform},Li=e=>({test:t=>"string"===typeof t&&t.endsWith(e)&&1===t.split(" ").length,parse:parseFloat,transform:t=>`${t}${e}`}),zi=Li("deg"),Ni=Li("%"),Fi=Li("px"),Ii=Li("vh"),Mi=Li("vw"),$i={...Ni,parse:e=>Ni.parse(e)/100,transform:e=>Ni.transform(100*e)},Bi={test:ji("hsl","hue"),parse:Ai("hue","saturation","lightness"),transform:e=>{let{hue:t,saturation:n,lightness:r,alpha:o=1}=e;return"hsla("+Math.round(t)+", "+Ni.transform(Ti(n))+", "+Ni.transform(Ti(r))+", "+Ti(Ei.transform(o))+")"}},Vi={test:e=>Oi.test(e)||Di.test(e)||Bi.test(e),parse:e=>Oi.test(e)?Oi.parse(e):Bi.test(e)?Bi.parse(e):Di.parse(e),transform:e=>"string"===typeof e?e:e.hasOwnProperty("red")?Oi.transform(e):Bi.transform(e)},Ui=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;const Hi="number",Wi="color",Yi=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ki(e){const t=e.toString(),n=[],r={color:[],number:[],var:[]},o=[];let i=0;const a=t.replace(Yi,(e=>(Vi.test(e)?(r.color.push(i),o.push(Wi),n.push(Vi.parse(e))):e.startsWith("var(")?(r.var.push(i),o.push("var"),n.push(e)):(r.number.push(i),o.push(Hi),n.push(parseFloat(e))),++i,"${}"))).split("${}");return{values:n,split:a,indexes:r,types:o}}function Qi(e){return Ki(e).values}function Xi(e){const{split:t,types:n}=Ki(e),r=t.length;return e=>{let o="";for(let i=0;i<r;i++)if(o+=t[i],void 0!==e[i]){const t=n[i];o+=t===Hi?Ti(e[i]):t===Wi?Vi.transform(e[i]):e[i]}return o}}const qi=e=>"number"===typeof e?0:e;const Gi={test:function(e){return isNaN(e)&&"string"===typeof e&&(e.match(Pi)?.length||0)+(e.match(Ui)?.length||0)>0},parse:Qi,createTransformer:Xi,getAnimatableNone:function(e){const t=Qi(e);return Xi(e)(t.map(qi))}},Ji=new Set(["brightness","contrast","saturate","opacity"]);function Zi(e){const[t,n]=e.slice(0,-1).split("(");if("drop-shadow"===t)return e;const[r]=n.match(Pi)||[];if(!r)return e;const o=n.replace(r,"");let i=Ji.has(t)?1:0;return r!==n&&(i*=100),t+"("+i+o+")"}const ea=/\b([a-z-]*)\(.*?\)/gu,ta={...Gi,getAnimatableNone:e=>{const t=e.match(ea);return t?t.map(Zi).join(" "):e}},na={borderWidth:Fi,borderTopWidth:Fi,borderRightWidth:Fi,borderBottomWidth:Fi,borderLeftWidth:Fi,borderRadius:Fi,radius:Fi,borderTopLeftRadius:Fi,borderTopRightRadius:Fi,borderBottomRightRadius:Fi,borderBottomLeftRadius:Fi,width:Fi,maxWidth:Fi,height:Fi,maxHeight:Fi,top:Fi,right:Fi,bottom:Fi,left:Fi,padding:Fi,paddingTop:Fi,paddingRight:Fi,paddingBottom:Fi,paddingLeft:Fi,margin:Fi,marginTop:Fi,marginRight:Fi,marginBottom:Fi,marginLeft:Fi,backgroundPositionX:Fi,backgroundPositionY:Fi},ra={rotate:zi,rotateX:zi,rotateY:zi,rotateZ:zi,scale:Ci,scaleX:Ci,scaleY:Ci,scaleZ:Ci,skew:zi,skewX:zi,skewY:zi,distance:Fi,translateX:Fi,translateY:Fi,translateZ:Fi,x:Fi,y:Fi,z:Fi,perspective:Fi,transformPerspective:Fi,opacity:Ei,originX:$i,originY:$i,originZ:Fi},oa={...ki,transform:Math.round},ia={...na,...ra,zIndex:oa,size:Fi,fillOpacity:Ei,strokeOpacity:Ei,numOctaves:oa},aa={...ia,color:Vi,backgroundColor:Vi,outlineColor:Vi,fill:Vi,stroke:Vi,borderColor:Vi,borderTopColor:Vi,borderRightColor:Vi,borderBottomColor:Vi,borderLeftColor:Vi,filter:ta,WebkitFilter:ta},sa=e=>aa[e];function la(e,t){let n=sa(e);return n!==ta&&(n=Gi),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const ca=new Set(["auto","none","0"]);const ua=e=>180*e/Math.PI,da=e=>{const t=ua(Math.atan2(e[1],e[0]));return fa(t)},pa={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:e=>(Math.abs(e[0])+Math.abs(e[3]))/2,rotate:da,rotateZ:da,skewX:e=>ua(Math.atan(e[1])),skewY:e=>ua(Math.atan(e[2])),skew:e=>(Math.abs(e[1])+Math.abs(e[2]))/2},fa=e=>((e%=360)<0&&(e+=360),e),ha=e=>Math.sqrt(e[0]*e[0]+e[1]*e[1]),ma=e=>Math.sqrt(e[4]*e[4]+e[5]*e[5]),ga={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:ha,scaleY:ma,scale:e=>(ha(e)+ma(e))/2,rotateX:e=>fa(ua(Math.atan2(e[6],e[5]))),rotateY:e=>fa(ua(Math.atan2(-e[2],e[0]))),rotateZ:da,rotate:da,skewX:e=>ua(Math.atan(e[4])),skewY:e=>ua(Math.atan(e[1])),skew:e=>(Math.abs(e[1])+Math.abs(e[4]))/2};function va(e){return e.includes("scale")?1:0}function ya(e,t){if(!e||"none"===e)return va(t);const n=e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let r,o;if(n)r=ga,o=n;else{const t=e.match(/^matrix\(([-\d.e\s,]+)\)$/u);r=pa,o=t}if(!o)return va(t);const i=r[t],a=o[1].split(",").map(ba);return"function"===typeof i?i(a):a[i]}function ba(e){return parseFloat(e.trim())}const xa=e=>e===ki||e===Fi,wa=new Set(["x","y","z"]),Sa=ko.filter((e=>!wa.has(e)));const ka={width:(e,t)=>{let{x:n}=e,{paddingLeft:r="0",paddingRight:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},height:(e,t)=>{let{y:n}=e,{paddingTop:r="0",paddingBottom:o="0"}=t;return n.max-n.min-parseFloat(r)-parseFloat(o)},top:(e,t)=>{let{top:n}=t;return parseFloat(n)},left:(e,t)=>{let{left:n}=t;return parseFloat(n)},bottom:(e,t)=>{let{y:n}=e,{top:r}=t;return parseFloat(r)+(n.max-n.min)},right:(e,t)=>{let{x:n}=e,{left:r}=t;return parseFloat(r)+(n.max-n.min)},x:(e,t)=>{let{transform:n}=t;return ya(n,"x")},y:(e,t)=>{let{transform:n}=t;return ya(n,"y")}};ka.translateX=ka.x,ka.translateY=ka.y;const Ea=new Set;let Ca=!1,Ta=!1;function Pa(){if(Ta){const e=Array.from(Ea).filter((e=>e.needsMeasurement)),t=new Set(e.map((e=>e.element))),n=new Map;t.forEach((e=>{const t=function(e){const t=[];return Sa.forEach((n=>{const r=e.getValue(n);void 0!==r&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))})),t}(e);t.length&&(n.set(e,t),e.render())})),e.forEach((e=>e.measureInitialState())),t.forEach((e=>{e.render();const t=n.get(e);t&&t.forEach((t=>{let[n,r]=t;e.getValue(n)?.set(r)}))})),e.forEach((e=>e.measureEndState())),e.forEach((e=>{void 0!==e.suspendedScrollY&&window.scrollTo(0,e.suspendedScrollY)}))}Ta=!1,Ca=!1,Ea.forEach((e=>e.complete())),Ea.clear()}function _a(){Ea.forEach((e=>{e.readKeyframes(),e.needsMeasurement&&(Ta=!0)}))}class ja{constructor(e,t,n,r,o){let i=arguments.length>5&&void 0!==arguments[5]&&arguments[5];this.isComplete=!1,this.isAsync=!1,this.needsMeasurement=!1,this.isScheduled=!1,this.unresolvedKeyframes=[...e],this.onComplete=t,this.name=n,this.motionValue=r,this.element=o,this.isAsync=i}scheduleResolve(){this.isScheduled=!0,this.isAsync?(Ea.add(this),Ca||(Ca=!0,bo.read(_a),bo.resolveKeyframes(Pa))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:t,element:n,motionValue:r}=this;for(let o=0;o<e.length;o++)if(null===e[o])if(0===o){const o=r?.get(),i=e[e.length-1];if(void 0!==o)e[0]=o;else if(n&&t){const r=n.readValue(t,i);void 0!==r&&null!==r&&(e[0]=r)}void 0===e[0]&&(e[0]=i),r&&void 0===o&&r.set(e[0])}else e[o]=e[o-1]}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(){this.isComplete=!0,this.onComplete(this.unresolvedKeyframes,this.finalKeyframe),Ea.delete(this)}cancel(){this.isComplete||(this.isScheduled=!1,Ea.delete(this))}resume(){this.isComplete||this.scheduleResolve()}}const Aa=e=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e),Ra=e=>t=>"string"===typeof t&&t.startsWith(e),Oa=Ra("--"),Da=Ra("var(--"),La=e=>!!Da(e)&&za.test(e.split("/*")[0].trim()),za=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu,Na=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function Fa(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;const[r,o]=function(e){const t=Na.exec(e);if(!t)return[,];const[,n,r,o]=t;return[`--${n??r}`,o]}(e);if(!r)return;const i=window.getComputedStyle(t).getPropertyValue(r);if(i){const e=i.trim();return Aa(e)?parseFloat(e):e}return La(o)?Fa(o,t,n+1):o}const Ia=e=>t=>t.test(e),Ma=[ki,Fi,Ni,zi,Mi,Ii,{test:e=>"auto"===e,parse:e=>e}],$a=e=>Ma.find(Ia(e));class Ba extends ja{constructor(e,t,n,r,o){super(e,t,n,r,o,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:t,name:n}=this;if(!t||!t.current)return;super.readKeyframes();for(let s=0;s<e.length;s++){let n=e[s];if("string"===typeof n&&(n=n.trim(),La(n))){const r=Fa(n,t.current);void 0!==r&&(e[s]=r),s===e.length-1&&(this.finalKeyframe=n)}}if(this.resolveNoneKeyframes(),!Co.has(n)||2!==e.length)return;const[r,o]=e,i=$a(r),a=$a(o);if(i!==a)if(xa(i)&&xa(a))for(let s=0;s<e.length;s++){const t=e[s];"string"===typeof t&&(e[s]=parseFloat(t))}else this.needsMeasurement=!0}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:t}=this,n=[];for(let o=0;o<e.length;o++)("number"===typeof(r=e[o])?0===r:null===r||"none"===r||"0"===r||wi(r))&&n.push(o);var r;n.length&&function(e,t,n){let r,o=0;for(;o<e.length&&!r;){const t=e[o];"string"===typeof t&&!ca.has(t)&&Ki(t).values.length&&(r=e[o]),o++}if(r&&n)for(const i of t)e[i]=la(n,r)}(e,n,t)}measureInitialState(){const{element:e,unresolvedKeyframes:t,name:n}=this;if(!e||!e.current)return;"height"===n&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=ka[n](e.measureViewportBox(),window.getComputedStyle(e.current)),t[0]=this.measuredOrigin;const r=t[t.length-1];void 0!==r&&e.getValue(n,r).jump(r,!1)}measureEndState(){const{element:e,name:t,unresolvedKeyframes:n}=this;if(!e||!e.current)return;const r=e.getValue(t);r&&r.jump(this.measuredOrigin,!1);const o=n.length-1,i=n[o];n[o]=ka[t](e.measureViewportBox(),window.getComputedStyle(e.current)),null!==i&&void 0===this.finalKeyframe&&(this.finalKeyframe=i),this.removedTransforms?.length&&this.removedTransforms.forEach((t=>{let[n,r]=t;e.getValue(n).set(r)})),this.resolveNoneKeyframes()}}const Va=(e,t)=>"zIndex"!==t&&(!("number"!==typeof e&&!Array.isArray(e))||!("string"!==typeof e||!Gi.test(e)&&"0"!==e||e.startsWith("url(")));function Ua(e,t,n,r){const o=e[0];if(null===o)return!1;if("display"===t||"visibility"===t)return!0;const i=e[e.length-1],a=Va(o,t),s=Va(i,t);return!(!a||!s)&&(function(e){const t=e[0];if(1===e.length)return!0;for(let n=0;n<e.length;n++)if(e[n]!==t)return!0}(e)||("spring"===n||Go(n))&&r)}const Ha=e=>null!==e;function Wa(e,t,n){let{repeat:r,repeatType:o="loop"}=t;const i=e.filter(Ha),a=r&&"loop"!==o&&r%2===1?0:i.length-1;return a&&void 0!==n?n:i[a]}class Ya{constructor(e){let{autoplay:t=!0,delay:n=0,type:r="keyframes",repeat:o=0,repeatDelay:i=0,repeatType:a="loop",...s}=e;this.isStopped=!1,this.hasAttemptedResolve=!1,this.createdAt=Oo.now(),this.options={autoplay:t,delay:n,type:r,repeat:o,repeatDelay:i,repeatType:a,...s},this.updateFinishedPromise()}calcStartTime(){return this.resolvedAt&&this.resolvedAt-this.createdAt>40?this.resolvedAt:this.createdAt}get resolved(){return this._resolved||this.hasAttemptedResolve||(_a(),Pa()),this._resolved}onKeyframesResolved(e,t){this.resolvedAt=Oo.now(),this.hasAttemptedResolve=!0;const{name:n,type:r,velocity:o,delay:i,onComplete:a,onUpdate:s,isGenerator:l}=this.options;if(!l&&!Ua(e,n,r,o)){if(qo||!i)return s&&s(Wa(e,this.options,t)),a&&a(),void this.resolveFinishedPromise();this.options.duration=0}const c=this.initPlayback(e,t);!1!==c&&(this._resolved={keyframes:e,finalKeyframe:t,...c},this.onPostResolved())}onPostResolved(){}then(e,t){return this.currentFinishedPromise.then(e,t)}flatten(){this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear")}updateFinishedPromise(){this.currentFinishedPromise=new Promise((e=>{this.resolveFinishedPromise=e}))}}const Ka=2e4;function Qa(e){let t=0;let n=e.next(t);for(;!n.done&&t<Ka;)t+=50,n=e.next(t);return t>=Ka?1/0:t}const Xa=(e,t,n)=>e+(t-e)*n;function qa(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+6*(t-e)*n:n<.5?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Ga(e,t){return n=>n>0?t:e}const Ja=(e,t,n)=>{const r=e*e,o=n*(t*t-r)+r;return o<0?0:Math.sqrt(o)},Za=[Di,Oi,Bi];function es(e){const t=(e=>Za.find((t=>t.test(e))))(e);if(Boolean(t),!Boolean(t))return!1;let n=t.parse(e);return t===Bi&&(n=function(e){let{hue:t,saturation:n,lightness:r,alpha:o}=e;t/=360,n/=100,r/=100;let i=0,a=0,s=0;if(n){const e=r<.5?r*(1+n):r+n-r*n,o=2*r-e;i=qa(o,e,t+1/3),a=qa(o,e,t),s=qa(o,e,t-1/3)}else i=a=s=r;return{red:Math.round(255*i),green:Math.round(255*a),blue:Math.round(255*s),alpha:o}}(n)),n}const ts=(e,t)=>{const n=es(e),r=es(t);if(!n||!r)return Ga(e,t);const o={...n};return e=>(o.red=Ja(n.red,r.red,e),o.green=Ja(n.green,r.green,e),o.blue=Ja(n.blue,r.blue,e),o.alpha=Xa(n.alpha,r.alpha,e),Oi.transform(o))},ns=(e,t)=>n=>t(e(n)),rs=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.reduce(ns)},os=new Set(["none","hidden"]);function is(e,t){return n=>Xa(e,t,n)}function as(e){return"number"===typeof e?is:"string"===typeof e?La(e)?Ga:Vi.test(e)?ts:cs:Array.isArray(e)?ss:"object"===typeof e?Vi.test(e)?ts:ls:Ga}function ss(e,t){const n=[...e],r=n.length,o=e.map(((e,n)=>as(e)(e,t[n])));return e=>{for(let t=0;t<r;t++)n[t]=o[t](e);return n}}function ls(e,t){const n={...e,...t},r={};for(const o in n)void 0!==e[o]&&void 0!==t[o]&&(r[o]=as(e[o])(e[o],t[o]));return e=>{for(const t in r)n[t]=r[t](e);return n}}const cs=(e,t)=>{const n=Gi.createTransformer(t),r=Ki(e),o=Ki(t);return r.indexes.var.length===o.indexes.var.length&&r.indexes.color.length===o.indexes.color.length&&r.indexes.number.length>=o.indexes.number.length?os.has(e)&&!o.values.length||os.has(t)&&!r.values.length?function(e,t){return os.has(e)?n=>n<=0?e:t:n=>n>=1?t:e}(e,t):rs(ss(function(e,t){const n=[],r={color:0,var:0,number:0};for(let o=0;o<t.values.length;o++){const i=t.types[o],a=e.indexes[i][r[i]],s=e.values[a]??0;n[o]=s,r[i]++}return n}(r,o),o.values),n):Ga(e,t)};function us(e,t,n){if("number"===typeof e&&"number"===typeof t&&"number"===typeof n)return Xa(e,t,n);return as(e)(e,t)}function ds(e,t,n){const r=Math.max(t-5,0);return jo(n-e(r),t-r)}const ps={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},fs=.001;function hs(e){let t,n,{duration:r=ps.duration,bounce:o=ps.bounce,velocity:i=ps.velocity,mass:a=ps.mass}=e;Qo(ps.maxDuration);let s=1-o;s=Si(ps.minDamping,ps.maxDamping,s),r=Si(ps.minDuration,ps.maxDuration,Xo(r)),s<1?(t=e=>{const t=e*s,n=t*r,o=t-i,a=gs(e,s),l=Math.exp(-n);return fs-o/a*l},n=e=>{const n=e*s*r,o=n*i+i,a=Math.pow(s,2)*Math.pow(e,2)*r,l=Math.exp(-n),c=gs(Math.pow(e,2),s);return(-t(e)+fs>0?-1:1)*((o-a)*l)/c}):(t=e=>Math.exp(-e*r)*((e-i)*r+1)-.001,n=e=>Math.exp(-e*r)*(r*r*(i-e)));const l=function(e,t,n){let r=n;for(let o=1;o<ms;o++)r-=e(r)/t(r);return r}(t,n,5/r);if(r=Qo(r),isNaN(l))return{stiffness:ps.stiffness,damping:ps.damping,duration:r};{const e=Math.pow(l,2)*a;return{stiffness:e,damping:2*s*Math.sqrt(a*e),duration:r}}}const ms=12;function gs(e,t){return e*Math.sqrt(1-t*t)}const vs=["duration","bounce"],ys=["stiffness","damping","mass"];function bs(e,t){return t.some((t=>void 0!==e[t]))}function xs(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ps.visualDuration,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:ps.bounce;const n="object"!==typeof e?{visualDuration:e,keyframes:[0,1],bounce:t}:e;let{restSpeed:r,restDelta:o}=n;const i=n.keyframes[0],a=n.keyframes[n.keyframes.length-1],s={done:!1,value:i},{stiffness:l,damping:c,mass:u,duration:d,velocity:p,isResolvedFromDuration:f}=function(e){let t={velocity:ps.velocity,stiffness:ps.stiffness,damping:ps.damping,mass:ps.mass,isResolvedFromDuration:!1,...e};if(!bs(e,ys)&&bs(e,vs))if(e.visualDuration){const n=e.visualDuration,r=2*Math.PI/(1.2*n),o=r*r,i=2*Si(.05,1,1-(e.bounce||0))*Math.sqrt(o);t={...t,mass:ps.mass,stiffness:o,damping:i}}else{const n=hs(e);t={...t,...n,mass:ps.mass},t.isResolvedFromDuration=!0}return t}({...n,velocity:-Xo(n.velocity||0)}),h=p||0,m=c/(2*Math.sqrt(l*u)),g=a-i,v=Xo(Math.sqrt(l/u)),y=Math.abs(g)<5;let b;if(r||(r=y?ps.restSpeed.granular:ps.restSpeed.default),o||(o=y?ps.restDelta.granular:ps.restDelta.default),m<1){const e=gs(v,m);b=t=>{const n=Math.exp(-m*v*t);return a-n*((h+m*v*g)/e*Math.sin(e*t)+g*Math.cos(e*t))}}else if(1===m)b=e=>a-Math.exp(-v*e)*(g+(h+v*g)*e);else{const e=v*Math.sqrt(m*m-1);b=t=>{const n=Math.exp(-m*v*t),r=Math.min(e*t,300);return a-n*((h+m*v*g)*Math.sinh(r)+e*g*Math.cosh(r))/e}}const x={calculatedDuration:f&&d||null,next:e=>{const t=b(e);if(f)s.done=e>=d;else{let n=0;m<1&&(n=0===e?Qo(h):ds(b,e,t));const i=Math.abs(n)<=r,l=Math.abs(a-t)<=o;s.done=i&&l}return s.value=s.done?a:t,s},toString:()=>{const e=Math.min(Qa(x),Ka),t=ai((t=>x.next(e*t).value),e,30);return e+"ms "+t},toTransition:()=>{}};return x}function ws(e){let{keyframes:t,velocity:n=0,power:r=.8,timeConstant:o=325,bounceDamping:i=10,bounceStiffness:a=500,modifyTarget:s,min:l,max:c,restDelta:u=.5,restSpeed:d}=e;const p=t[0],f={done:!1,value:p},h=e=>void 0===l?c:void 0===c||Math.abs(l-e)<Math.abs(c-e)?l:c;let m=r*n;const g=p+m,v=void 0===s?g:s(g);v!==g&&(m=v-p);const y=e=>-m*Math.exp(-e/o),b=e=>v+y(e),x=e=>{const t=y(e),n=b(e);f.done=Math.abs(t)<=u,f.value=f.done?v:n};let w,S;const k=e=>{(e=>void 0!==l&&e<l||void 0!==c&&e>c)(f.value)&&(w=e,S=xs({keyframes:[f.value,h(f.value)],velocity:ds(b,e,f.value),damping:i,stiffness:a,restDelta:u,restSpeed:d}))};return k(0),{calculatedDuration:null,next:e=>{let t=!1;return S||void 0!==w||(t=!0,x(e),k(e)),void 0!==w&&e>=w?S.next(e-w):(!t&&x(e),f)}}}xs.applyToOptions=e=>{const t=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;const n=(arguments.length>2?arguments[2]:void 0)({...e,keyframes:[0,t]}),r=Math.min(Qa(n),Ka);return{type:"keyframes",ease:e=>n.next(r*e).value/t,duration:Xo(r)}}(e,100,xs);return e.ease=ti()?t.ease:"easeOut",e.duration=Qo(t.duration),e.type="keyframes",e};const Ss=di(.42,0,1,1),ks=di(0,0,.58,1),Es=di(.42,0,.58,1),Cs={linear:ho,easeIn:Ss,easeInOut:Es,easeOut:ks,circIn:yi,circInOut:xi,circOut:bi,backIn:mi,backInOut:gi,backOut:hi,anticipate:vi},Ts=e=>{if(Jo(e)){e.length;const[t,n,r,o]=e;return di(t,n,r,o)}return"string"===typeof e?Cs[e]:e},Ps=(e,t,n)=>{const r=t-e;return 0===r?1:(n-e)/r};function _s(e,t){let{clamp:n=!0,ease:r,mixer:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const i=e.length;if(t.length,1===i)return()=>t[0];if(2===i&&t[0]===t[1])return()=>t[1];const a=e[0]===e[1];e[0]>e[i-1]&&(e=[...e].reverse(),t=[...t].reverse());const s=function(e,t,n){const r=[],o=n||us,i=e.length-1;for(let a=0;a<i;a++){let n=o(e[a],e[a+1]);if(t){const e=Array.isArray(t)?t[a]||ho:t;n=rs(e,n)}r.push(n)}return r}(t,r,o),l=s.length,c=n=>{if(a&&n<e[0])return t[0];let r=0;if(l>1)for(;r<e.length-2&&!(n<e[r+1]);r++);const o=Ps(e[r],e[r+1],n);return s[r](o)};return n?t=>c(Si(e[0],e[i-1],t)):c}function js(e){const t=[0];return function(e,t){const n=e[e.length-1];for(let r=1;r<=t;r++){const o=Ps(0,t,r);e.push(Xa(n,1,o))}}(t,e.length-1),t}function As(e){let{duration:t=300,keyframes:n,times:r,ease:o="easeInOut"}=e;const i=(e=>Array.isArray(e)&&"number"!==typeof e[0])(o)?o.map(Ts):Ts(o),a={done:!1,value:n[0]},s=function(e,t){return e.map((e=>e*t))}(r&&r.length===n.length?r:js(n),t),l=_s(s,n,{ease:Array.isArray(i)?i:(c=n,u=i,c.map((()=>u||Es)).splice(0,c.length-1))});var c,u;return{calculatedDuration:t,next:e=>(a.value=l(e),a.done=e>=t,a)}}const Rs=e=>{const t=t=>{let{timestamp:n}=t;return e(n)};return{start:()=>bo.update(t,!0),stop:()=>xo(t),now:()=>wo.isProcessing?wo.timestamp:Oo.now()}},Os={decay:ws,inertia:ws,tween:As,keyframes:As,spring:xs},Ds=e=>e/100;class Ls extends Ya{constructor(e){super(e),this.holdTime=null,this.cancelTime=null,this.currentTime=0,this.playbackSpeed=1,this.pendingPlayState="running",this.startTime=null,this.state="idle",this.stop=()=>{if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.teardown();const{onStop:e}=this.options;e&&e()};const{name:t,motionValue:n,element:r,keyframes:o}=this.options,i=r?.KeyframeResolver||ja;this.resolver=new i(o,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}flatten(){super.flatten(),this._resolved&&Object.assign(this._resolved,this.initPlayback(this._resolved.keyframes))}initPlayback(e){const{type:t="keyframes",repeat:n=0,repeatDelay:r=0,repeatType:o,velocity:i=0}=this.options,a=Go(t)?t:Os[t]||As;let s,l;a!==As&&"number"!==typeof e[0]&&(s=rs(Ds,us(e[0],e[1])),e=[0,100]);const c=a({...this.options,keyframes:e});"mirror"===o&&(l=a({...this.options,keyframes:[...e].reverse(),velocity:-i})),null===c.calculatedDuration&&(c.calculatedDuration=Qa(c));const{calculatedDuration:u}=c,d=u+r;return{generator:c,mirroredGenerator:l,mapPercentToKeyframes:s,calculatedDuration:u,resolvedDuration:d,totalDuration:d*(n+1)-r}}onPostResolved(){const{autoplay:e=!0}=this.options;ii.mainThread++,this.play(),"paused"!==this.pendingPlayState&&e?this.state=this.pendingPlayState:this.pause()}tick(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const{resolved:n}=this;if(!n){const{keyframes:e}=this.options;return{done:!0,value:e[e.length-1]}}const{finalKeyframe:r,generator:o,mirroredGenerator:i,mapPercentToKeyframes:a,keyframes:s,calculatedDuration:l,totalDuration:c,resolvedDuration:u}=n;if(null===this.startTime)return o.next(0);const{delay:d,repeat:p,repeatType:f,repeatDelay:h,onUpdate:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-c/this.speed,this.startTime)),t?this.currentTime=e:null!==this.holdTime?this.currentTime=this.holdTime:this.currentTime=Math.round(e-this.startTime)*this.speed;const g=this.currentTime-d*(this.speed>=0?1:-1),v=this.speed>=0?g<0:g>c;this.currentTime=Math.max(g,0),"finished"===this.state&&null===this.holdTime&&(this.currentTime=c);let y=this.currentTime,b=o;if(p){const e=Math.min(this.currentTime,c)/u;let t=Math.floor(e),n=e%1;!n&&e>=1&&(n=1),1===n&&t--,t=Math.min(t,p+1);Boolean(t%2)&&("reverse"===f?(n=1-n,h&&(n-=h/u)):"mirror"===f&&(b=i)),y=Si(0,1,n)*u}const x=v?{done:!1,value:s[0]}:b.next(y);a&&(x.value=a(x.value));let{done:w}=x;v||null===l||(w=this.speed>=0?this.currentTime>=c:this.currentTime<=0);const S=null===this.holdTime&&("finished"===this.state||"running"===this.state&&w);return S&&void 0!==r&&(x.value=Wa(s,this.options,r)),m&&m(x.value),S&&this.finish(),x}get duration(){const{resolved:e}=this;return e?Xo(e.calculatedDuration):0}get time(){return Xo(this.currentTime)}set time(e){e=Qo(e),this.currentTime=e,null!==this.holdTime||0===this.speed?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.speed)}get speed(){return this.playbackSpeed}set speed(e){const t=this.playbackSpeed!==e;this.playbackSpeed=e,t&&(this.time=Xo(this.currentTime))}play(){if(this.resolver.isScheduled||this.resolver.resume(),!this._resolved)return void(this.pendingPlayState="running");if(this.isStopped)return;const{driver:e=Rs,onPlay:t,startTime:n}=this.options;this.driver||(this.driver=e((e=>this.tick(e)))),t&&t();const r=this.driver.now();null!==this.holdTime?this.startTime=r-this.holdTime:this.startTime?"finished"===this.state&&(this.startTime=r):this.startTime=n??this.calcStartTime(),"finished"===this.state&&this.updateFinishedPromise(),this.cancelTime=this.startTime,this.holdTime=null,this.state="running",this.driver.start()}pause(){this._resolved?(this.state="paused",this.holdTime=this.currentTime??0):this.pendingPlayState="paused"}complete(){"running"!==this.state&&this.play(),this.pendingPlayState=this.state="finished",this.holdTime=null}finish(){this.teardown(),this.state="finished";const{onComplete:e}=this.options;e&&e()}cancel(){null!==this.cancelTime&&this.tick(this.cancelTime),this.teardown(),this.updateFinishedPromise()}teardown(){this.state="idle",this.stopDriver(),this.resolveFinishedPromise(),this.updateFinishedPromise(),this.startTime=this.cancelTime=null,this.resolver.cancel(),ii.mainThread--}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}get finished(){return this.currentFinishedPromise}}const zs=new Set(["opacity","clipPath","filter","transform"]),Ns=Ho((()=>Object.hasOwnProperty.call(Element.prototype,"animate")));const Fs={anticipate:vi,backInOut:gi,circInOut:xi};class Is extends Ya{constructor(e){super(e);const{name:t,motionValue:n,element:r,keyframes:o}=this.options;this.resolver=new Ba(o,((e,t)=>this.onKeyframesResolved(e,t)),t,n,r),this.resolver.scheduleResolve()}initPlayback(e,t){let{duration:n=300,times:r,ease:o,type:i,motionValue:a,name:s,startTime:l}=this.options;if(!a.owner||!a.owner.current)return!1;var c;if("string"===typeof o&&ti()&&o in Fs&&(o=Fs[o]),Go((c=this.options).type)||"spring"===c.type||!oi(c.ease)){const{onComplete:t,onUpdate:a,motionValue:s,element:l,...c}=this.options,u=function(e,t){const n=new Ls({...t,keyframes:e,repeat:0,delay:0,isGenerator:!0});let r={done:!1,value:e[0]};const o=[];let i=0;for(;!r.done&&i<2e4;)r=n.sample(i),o.push(r.value),i+=10;return{times:void 0,keyframes:o,duration:i-10,ease:"linear"}}(e,c);1===(e=u.keyframes).length&&(e[1]=e[0]),n=u.duration,r=u.times,o=u.ease,i="keyframes"}const u=li(a.owner.current,s,e,{...this.options,duration:n,times:r,ease:o});return u.startTime=l??this.calcStartTime(),this.pendingTimeline?(ci(u,this.pendingTimeline),this.pendingTimeline=void 0):u.onfinish=()=>{const{onComplete:n}=this.options;a.set(Wa(e,this.options,t)),n&&n(),this.cancel(),this.resolveFinishedPromise()},{animation:u,duration:n,times:r,type:i,ease:o,keyframes:e}}get duration(){const{resolved:e}=this;if(!e)return 0;const{duration:t}=e;return Xo(t)}get time(){const{resolved:e}=this;if(!e)return 0;const{animation:t}=e;return Xo(t.currentTime||0)}set time(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.currentTime=Qo(e)}get speed(){const{resolved:e}=this;if(!e)return 1;const{animation:t}=e;return t.playbackRate}get finished(){return this.resolved.animation.finished}set speed(e){const{resolved:t}=this;if(!t)return;const{animation:n}=t;n.playbackRate=e}get state(){const{resolved:e}=this;if(!e)return"idle";const{animation:t}=e;return t.playState}get startTime(){const{resolved:e}=this;if(!e)return null;const{animation:t}=e;return t.startTime}attachTimeline(e){if(this._resolved){const{resolved:t}=this;if(!t)return ho;const{animation:n}=t;ci(n,e)}else this.pendingTimeline=e;return ho}play(){if(this.isStopped)return;const{resolved:e}=this;if(!e)return;const{animation:t}=e;"finished"===t.playState&&this.updateFinishedPromise(),t.play()}pause(){const{resolved:e}=this;if(!e)return;const{animation:t}=e;t.pause()}stop(){if(this.resolver.cancel(),this.isStopped=!0,"idle"===this.state)return;this.resolveFinishedPromise(),this.updateFinishedPromise();const{resolved:e}=this;if(!e)return;const{animation:t,keyframes:n,duration:r,type:o,ease:i,times:a}=e;if("idle"===t.playState||"finished"===t.playState)return;if(this.time){const{motionValue:e,onUpdate:t,onComplete:s,element:l,...c}=this.options,u=new Ls({...c,keyframes:n,duration:r,type:o,ease:i,times:a,isGenerator:!0}),d=Qo(this.time);e.setWithVelocity(u.sample(d-10).value,u.sample(d).value,10)}const{onStop:s}=this.options;s&&s(),this.cancel()}complete(){const{resolved:e}=this;e&&e.animation.finish()}cancel(){const{resolved:e}=this;e&&e.animation.cancel()}static supports(e){const{motionValue:t,name:n,repeatDelay:r,repeatType:o,damping:i,type:a}=e;if(!t||!t.owner||!(t.owner.current instanceof HTMLElement))return!1;const{onUpdate:s,transformTemplate:l}=t.owner.getProps();return Ns()&&n&&zs.has(n)&&("transform"!==n||!l)&&!s&&!r&&"mirror"!==o&&0!==i&&"inertia"!==a}}const Ms={type:"spring",stiffness:500,damping:25,restSpeed:10},$s={type:"keyframes",duration:.8},Bs={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},Vs=(e,t)=>{let{keyframes:n}=t;return n.length>2?$s:Eo.has(e)?e.startsWith("scale")?{type:"spring",stiffness:550,damping:0===n[1]?2*Math.sqrt(550):30,restSpeed:10}:Ms:Bs};const Us=function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5?arguments[5]:void 0;return a=>{const s=fo(r,e)||{},l=s.delay||r.delay||0;let{elapsed:c=0}=r;c-=Qo(l);let u={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:t.getVelocity(),...s,delay:-c,onUpdate:e=>{t.set(e),s.onUpdate&&s.onUpdate(e)},onComplete:()=>{a(),s.onComplete&&s.onComplete()},name:e,motionValue:t,element:i?void 0:o};(function(e){let{when:t,delay:n,delayChildren:r,staggerChildren:o,staggerDirection:i,repeat:a,repeatType:s,repeatDelay:l,from:c,elapsed:u,...d}=e;return!!Object.keys(d).length})(s)||(u={...u,...Vs(e,u)}),u.duration&&(u.duration=Qo(u.duration)),u.repeatDelay&&(u.repeatDelay=Qo(u.repeatDelay)),void 0!==u.from&&(u.keyframes[0]=u.from);let d=!1;if((!1===u.type||0===u.duration&&!u.repeatDelay)&&(u.duration=0,0===u.delay&&(d=!0)),(qo||mo.skipAnimations)&&(d=!0,u.duration=0,u.delay=0),u.allowFlatten=!s.type&&!s.ease,d&&!i&&void 0!==t.get()){const e=Wa(u.keyframes,s);if(void 0!==e)return bo.update((()=>{u.onUpdate(e),u.onComplete()})),new Ko([])}return!i&&Is.supports(u)?new Is(u):new Ls(u)}};function Hs(e,t){let{protectedKeys:n,needsAnimating:r}=e;const o=n.hasOwnProperty(t)&&!0!==r[t];return r[t]=!1,o}function Ws(e,t){let{delay:n=0,transitionOverride:r,type:o}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},{transition:i=e.getDefaultTransition(),transitionEnd:a,...s}=t;r&&(i=r);const l=[],c=o&&e.animationState&&e.animationState.getState()[o];for(const u in s){const t=e.getValue(u,e.latestValues[u]??null),r=s[u];if(void 0===r||c&&Hs(c,u))continue;const o={delay:n,...fo(i||{},u)};let a=!1;if(window.MotionHandoffAnimation){const t=Uo(e);if(t){const e=window.MotionHandoffAnimation(t,u,bo);null!==e&&(o.startTime=e,a=!0)}}$o(e,u),t.start(Us(u,t,r,e.shouldReduceMotion&&Co.has(u)?{type:!1}:o,e,a));const d=t.animation;d&&l.push(d)}return a&&Promise.all(l).then((()=>{bo.update((()=>{a&&function(e,t){const n=po(e,t);let{transitionEnd:r={},transition:o={},...i}=n||{};i={...i,...r};for(const a in i)Io(e,a,Fo(i[a]))}(e,a)}))})),l}function Ys(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const r=po(e,t,"exit"===n.type?e.presenceContext?.custom:void 0);let{transition:o=e.getDefaultTransition()||{}}=r||{};n.transitionOverride&&(o=n.transitionOverride);const i=r?()=>Promise.all(Ws(e,r,n)):()=>Promise.resolve(),a=e.variantChildren&&e.variantChildren.size?function(){let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;const{delayChildren:i=0,staggerChildren:a,staggerDirection:s}=o;return function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,i=arguments.length>5?arguments[5]:void 0;const a=[],s=(e.variantChildren.size-1)*r,l=1===o?function(){return(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r}:function(){return s-(arguments.length>0&&void 0!==arguments[0]?arguments[0]:0)*r};return Array.from(e.variantChildren).sort(Ks).forEach(((e,r)=>{e.notify("AnimationStart",t),a.push(Ys(e,t,{...i,delay:n+l(r)}).then((()=>e.notify("AnimationComplete",t))))})),Promise.all(a)}(e,t,i+r,a,s,n)}:()=>Promise.resolve(),{when:s}=o;if(s){const[e,t]="beforeChildren"===s?[i,a]:[a,i];return e().then((()=>t()))}return Promise.all([i(),a(n.delay)])}function Ks(e,t){return e.sortNodePosition(t)}function Qs(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}function Xs(e){return"string"===typeof e||Array.isArray(e)}const qs=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Gs=["initial",...qs],Js=Gs.length;function Zs(e){if(!e)return;if(!e.isControllingVariants){const t=e.parent&&Zs(e.parent)||{};return void 0!==e.props.initial&&(t.initial=e.props.initial),t}const t={};for(let n=0;n<Js;n++){const r=Gs[n],o=e.props[r];(Xs(o)||!1===o)&&(t[r]=o)}return t}const el=[...qs].reverse(),tl=qs.length;function nl(e){return t=>Promise.all(t.map((t=>{let{animation:n,options:r}=t;return function(e,t){let n,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(e.notify("AnimationStart",t),Array.isArray(t)){const o=t.map((t=>Ys(e,t,r)));n=Promise.all(o)}else if("string"===typeof t)n=Ys(e,t,r);else{const o="function"===typeof t?po(e,t,r.custom):t;n=Promise.all(Ws(e,o,r))}return n.then((()=>{e.notify("AnimationComplete",t)}))}(e,n,r)})))}function rl(e){let t=nl(e),n=al(),r=!0;const o=t=>(n,r)=>{const o=po(e,r,"exit"===t?e.presenceContext?.custom:void 0);if(o){const{transition:e,transitionEnd:t,...r}=o;n={...n,...r,...t}}return n};function i(i){const{props:a}=e,s=Zs(e.parent)||{},l=[],c=new Set;let u={},d=1/0;for(let t=0;t<tl;t++){const p=el[t],f=n[p],h=void 0!==a[p]?a[p]:s[p],m=Xs(h),g=p===i?f.isActive:null;!1===g&&(d=t);let v=h===s[p]&&h!==a[p]&&m;if(v&&r&&e.manuallyAnimateOnMount&&(v=!1),f.protectedKeys={...u},!f.isActive&&null===g||!h&&!f.prevProp||lo(h)||"boolean"===typeof h)continue;const y=ol(f.prevProp,h);let b=y||p===i&&f.isActive&&!v&&m||t>d&&m,x=!1;const w=Array.isArray(h)?h:[h];let S=w.reduce(o(p),{});!1===g&&(S={});const{prevResolvedValues:k={}}=f,E={...k,...S},C=t=>{b=!0,c.has(t)&&(x=!0,c.delete(t)),f.needsAnimating[t]=!0;const n=e.getValue(t);n&&(n.liveStyle=!1)};for(const e in E){const t=S[e],n=k[e];if(u.hasOwnProperty(e))continue;let r=!1;r=No(t)&&No(n)?!Qs(t,n):t!==n,r?void 0!==t&&null!==t?C(e):c.add(e):void 0!==t&&c.has(e)?C(e):f.protectedKeys[e]=!0}f.prevProp=h,f.prevResolvedValues=S,f.isActive&&(u={...u,...S}),r&&e.blockInitialAnimation&&(b=!1);b&&(!(v&&y)||x)&&l.push(...w.map((e=>({animation:e,options:{type:p}}))))}if(c.size){const t={};if("boolean"!==typeof a.initial){const n=po(e,Array.isArray(a.initial)?a.initial[0]:a.initial);n&&n.transition&&(t.transition=n.transition)}c.forEach((n=>{const r=e.getBaseTarget(n),o=e.getValue(n);o&&(o.liveStyle=!0),t[n]=r??null})),l.push({animation:t})}let p=Boolean(l.length);return!r||!1!==a.initial&&a.initial!==a.animate||e.manuallyAnimateOnMount||(p=!1),r=!1,p?t(l):Promise.resolve()}return{animateChanges:i,setActive:function(t,r){if(n[t].isActive===r)return Promise.resolve();e.variantChildren?.forEach((e=>e.animationState?.setActive(t,r))),n[t].isActive=r;const o=i(t);for(const e in n)n[e].protectedKeys={};return o},setAnimateFunction:function(n){t=n(e)},getState:()=>n,reset:()=>{n=al(),r=!0}}}function ol(e,t){return"string"===typeof t?t!==e:!!Array.isArray(t)&&!Qs(t,e)}function il(){return{isActive:arguments.length>0&&void 0!==arguments[0]&&arguments[0],protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function al(){return{animate:il(!0),whileInView:il(),whileHover:il(),whileTap:il(),whileDrag:il(),whileFocus:il(),exit:il()}}class sl{constructor(e){this.isMounted=!1,this.node=e}update(){}}let ll=0;const cl={animation:{Feature:class extends sl{constructor(e){super(e),e.animationState||(e.animationState=rl(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();lo(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:t}=this.node.prevProps||{};e!==t&&this.updateAnimationControlsSubscription()}unmount(){this.node.animationState.reset(),this.unmountControls?.()}}},exit:{Feature:class extends sl{constructor(){super(...arguments),this.id=ll++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:t}=this.node.presenceContext,{isPresent:n}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===n)return;const r=this.node.animationState.setActive("exit",!e);t&&!e&&r.then((()=>{t(this.id)}))}mount(){const{register:e,onExitComplete:t}=this.node.presenceContext||{};t&&t(this.id),e&&(this.unmount=e(this.id))}unmount(){}}}},ul={x:!1,y:!1};function dl(){return ul.x||ul.y}function pl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{passive:!0};return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}const fl=e=>"mouse"===e.pointerType?"number"!==typeof e.button||e.button<=0:!1!==e.isPrimary;function hl(e){return{point:{x:e.pageX,y:e.pageY}}}function ml(e,t,n,r){return pl(e,t,(e=>t=>fl(t)&&e(t,hl(t)))(n),r)}function gl(e){let{top:t,left:n,right:r,bottom:o}=e;return{x:{min:n,max:r},y:{min:t,max:o}}}function vl(e){return e.max-e.min}function yl(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5;e.origin=r,e.originPoint=Xa(t.min,t.max,e.origin),e.scale=vl(n)/vl(t),e.translate=Xa(n.min,n.max,e.origin)-e.originPoint,(e.scale>=.9999&&e.scale<=1.0001||isNaN(e.scale))&&(e.scale=1),(e.translate>=-.01&&e.translate<=.01||isNaN(e.translate))&&(e.translate=0)}function bl(e,t,n,r){yl(e.x,t.x,n.x,r?r.originX:void 0),yl(e.y,t.y,n.y,r?r.originY:void 0)}function xl(e,t,n){e.min=n.min+t.min,e.max=e.min+vl(t)}function wl(e,t,n){e.min=t.min-n.min,e.max=e.min+vl(t)}function Sl(e,t,n){wl(e.x,t.x,n.x),wl(e.y,t.y,n.y)}const kl=()=>({x:{min:0,max:0},y:{min:0,max:0}});function El(e){return[e("x"),e("y")]}function Cl(e){return void 0===e||1===e}function Tl(e){let{scale:t,scaleX:n,scaleY:r}=e;return!Cl(t)||!Cl(n)||!Cl(r)}function Pl(e){return Tl(e)||_l(e)||e.z||e.rotate||e.rotateX||e.rotateY||e.skewX||e.skewY}function _l(e){return jl(e.x)||jl(e.y)}function jl(e){return e&&"0%"!==e}function Al(e,t,n){return n+t*(e-n)}function Rl(e,t,n,r,o){return void 0!==o&&(e=Al(e,o,r)),Al(e,n,r)+t}function Ol(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3?arguments[3]:void 0,o=arguments.length>4?arguments[4]:void 0;e.min=Rl(e.min,t,n,r,o),e.max=Rl(e.max,t,n,r,o)}function Dl(e,t){let{x:n,y:r}=t;Ol(e.x,n.translate,n.scale,n.originPoint),Ol(e.y,r.translate,r.scale,r.originPoint)}const Ll=.999999999999,zl=1.0000000000001;function Nl(e,t){e.min=e.min+t,e.max=e.max+t}function Fl(e,t,n,r){let o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:.5;Ol(e,t,n,Xa(e.min,e.max,o),r)}function Il(e,t){Fl(e.x,t.x,t.scaleX,t.scale,t.originX),Fl(e.y,t.y,t.scaleY,t.scale,t.originY)}function Ml(e,t){return gl(function(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}(e.getBoundingClientRect(),t))}const $l=e=>{let{current:t}=e;return t?t.ownerDocument.defaultView:null};function Bl(e){return e&&"object"===typeof e&&Object.prototype.hasOwnProperty.call(e,"current")}const Vl=(e,t)=>Math.abs(e-t);class Ul{constructor(e,t){let{transformPagePoint:n,contextWindow:r,dragSnapToOrigin:o=!1}=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!this.lastMoveEvent||!this.lastMoveEventInfo)return;const e=Yl(this.lastMoveEventInfo,this.history),t=null!==this.startEvent,n=function(e,t){const n=Vl(e.x,t.x),r=Vl(e.y,t.y);return Math.sqrt(n**2+r**2)}(e.offset,{x:0,y:0})>=3;if(!t&&!n)return;const{point:r}=e,{timestamp:o}=wo;this.history.push({...r,timestamp:o});const{onStart:i,onMove:a}=this.handlers;t||(i&&i(this.lastMoveEvent,e),this.startEvent=this.lastMoveEvent),a&&a(this.lastMoveEvent,e)},this.handlePointerMove=(e,t)=>{this.lastMoveEvent=e,this.lastMoveEventInfo=Hl(t,this.transformPagePoint),bo.update(this.updatePoint,!0)},this.handlePointerUp=(e,t)=>{this.end();const{onEnd:n,onSessionEnd:r,resumeAnimation:o}=this.handlers;if(this.dragSnapToOrigin&&o&&o(),!this.lastMoveEvent||!this.lastMoveEventInfo)return;const i=Yl("pointercancel"===e.type?this.lastMoveEventInfo:Hl(t,this.transformPagePoint),this.history);this.startEvent&&n&&n(e,i),r&&r(e,i)},!fl(e))return;this.dragSnapToOrigin=o,this.handlers=t,this.transformPagePoint=n,this.contextWindow=r||window;const i=Hl(hl(e),this.transformPagePoint),{point:a}=i,{timestamp:s}=wo;this.history=[{...a,timestamp:s}];const{onSessionStart:l}=t;l&&l(e,Yl(i,this.history)),this.removeListeners=rs(ml(this.contextWindow,"pointermove",this.handlePointerMove),ml(this.contextWindow,"pointerup",this.handlePointerUp),ml(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),xo(this.updatePoint)}}function Hl(e,t){return t?{point:t(e.point)}:e}function Wl(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Yl(e,t){let{point:n}=e;return{point:n,delta:Wl(n,Ql(t)),offset:Wl(n,Kl(t)),velocity:Xl(t,.1)}}function Kl(e){return e[0]}function Ql(e){return e[e.length-1]}function Xl(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=Ql(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Qo(t)));)n--;if(!r)return{x:0,y:0};const i=Xo(o.timestamp-r.timestamp);if(0===i)return{x:0,y:0};const a={x:(o.x-r.x)/i,y:(o.y-r.y)/i};return a.x===1/0&&(a.x=0),a.y===1/0&&(a.y=0),a}function ql(e,t,n){return{min:void 0!==t?e.min+t:void 0,max:void 0!==n?e.max+n-(e.max-e.min):void 0}}function Gl(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}const Jl=.35;function Zl(e,t,n){return{min:ec(e,t),max:ec(e,n)}}function ec(e,t){return"number"===typeof e?e:e[t]||0}const tc=new WeakMap;class nc{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic={x:{min:0,max:0},y:{min:0,max:0}},this.visualElement=e}start(e){let{snapToCursor:t=!1}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{presenceContext:n}=this.visualElement;if(n&&!1===n.isPresent)return;const{dragSnapToOrigin:r}=this.getProps();this.panSession=new Ul(e,{onSessionStart:e=>{const{dragSnapToOrigin:n}=this.getProps();n?this.pauseAnimation():this.stopAnimation(),t&&this.snapToCursor(hl(e).point)},onStart:(e,t)=>{const{drag:n,dragPropagation:r,onDragStart:o}=this.getProps();if(n&&!r&&(this.openDragLock&&this.openDragLock(),this.openDragLock="x"===(i=n)||"y"===i?ul[i]?null:(ul[i]=!0,()=>{ul[i]=!1}):ul.x||ul.y?null:(ul.x=ul.y=!0,()=>{ul.x=ul.y=!1}),!this.openDragLock))return;var i;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),El((e=>{let t=this.getAxisMotionValue(e).get()||0;if(Ni.test(t)){const{projection:n}=this.visualElement;if(n&&n.layout){const r=n.layout.layoutBox[e];if(r){t=vl(r)*(parseFloat(t)/100)}}}this.originPoint[e]=t})),o&&bo.postRender((()=>o(e,t))),$o(this.visualElement,"transform");const{animationState:a}=this.visualElement;a&&a.setActive("whileDrag",!0)},onMove:(e,t)=>{const{dragPropagation:n,dragDirectionLock:r,onDirectionLock:o,onDrag:i}=this.getProps();if(!n&&!this.openDragLock)return;const{offset:a}=t;if(r&&null===this.currentDirection)return this.currentDirection=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,n=null;Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x");return n}(a),void(null!==this.currentDirection&&o&&o(this.currentDirection));this.updateAxis("x",t.point,a),this.updateAxis("y",t.point,a),this.visualElement.render(),i&&i(e,t)},onSessionEnd:(e,t)=>this.stop(e,t),resumeAnimation:()=>El((e=>"paused"===this.getAnimationState(e)&&this.getAxisMotionValue(e).animation?.play()))},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:r,contextWindow:$l(this.visualElement)})}stop(e,t){const n=this.isDragging;if(this.cancel(),!n)return;const{velocity:r}=t;this.startAnimation(r);const{onDragEnd:o}=this.getProps();o&&bo.postRender((()=>o(e,t)))}cancel(){this.isDragging=!1;const{projection:e,animationState:t}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:n}=this.getProps();!n&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),t&&t.setActive("whileDrag",!1)}updateAxis(e,t,n){const{drag:r}=this.getProps();if(!n||!rc(e,r,this.currentDirection))return;const o=this.getAxisMotionValue(e);let i=this.originPoint[e]+n[e];this.constraints&&this.constraints[e]&&(i=function(e,t,n){let{min:r,max:o}=t;return void 0!==r&&e<r?e=n?Xa(r,e,n.min):Math.max(e,r):void 0!==o&&e>o&&(e=n?Xa(o,e,n.max):Math.min(e,o)),e}(i,this.constraints[e],this.elastic[e])),o.set(i)}resolveConstraints(){const{dragConstraints:e,dragElastic:t}=this.getProps(),n=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):this.visualElement.projection?.layout,r=this.constraints;e&&Bl(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):this.constraints=!(!e||!n)&&function(e,t){let{top:n,left:r,bottom:o,right:i}=t;return{x:ql(e.x,r,i),y:ql(e.y,n,o)}}(n.layoutBox,e),this.elastic=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Jl;return!1===e?e=0:!0===e&&(e=Jl),{x:Zl(e,"left","right"),y:Zl(e,"top","bottom")}}(t),r!==this.constraints&&n&&this.constraints&&!this.hasMutatedConstraints&&El((e=>{!1!==this.constraints&&this.getAxisMotionValue(e)&&(this.constraints[e]=function(e,t){const n={};return void 0!==t.min&&(n.min=t.min-e.min),void 0!==t.max&&(n.max=t.max-e.min),n}(n.layoutBox[e],this.constraints[e]))}))}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:t}=this.getProps();if(!e||!Bl(e))return!1;const n=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const o=function(e,t,n){const r=Ml(e,n),{scroll:o}=t;return o&&(Nl(r.x,o.offset.x),Nl(r.y,o.offset.y)),r}(n,r.root,this.visualElement.getTransformPagePoint());let i=function(e,t){return{x:Gl(e.x,t.x),y:Gl(e.y,t.y)}}(r.layout.layoutBox,o);if(t){const e=t(function(e){let{x:t,y:n}=e;return{top:n.min,right:t.max,bottom:n.max,left:t.min}}(i));this.hasMutatedConstraints=!!e,e&&(i=gl(e))}return i}startAnimation(e){const{drag:t,dragMomentum:n,dragElastic:r,dragTransition:o,dragSnapToOrigin:i,onDragTransitionEnd:a}=this.getProps(),s=this.constraints||{},l=El((a=>{if(!rc(a,t,this.currentDirection))return;let l=s&&s[a]||{};i&&(l={min:0,max:0});const c=r?200:1e6,u=r?40:1e7,d={type:"inertia",velocity:n?e[a]:0,bounceStiffness:c,bounceDamping:u,timeConstant:750,restDelta:1,restSpeed:10,...o,...l};return this.startAxisValueAnimation(a,d)}));return Promise.all(l).then(a)}startAxisValueAnimation(e,t){const n=this.getAxisMotionValue(e);return $o(this.visualElement,e),n.start(Us(e,n,0,t,this.visualElement,!1))}stopAnimation(){El((e=>this.getAxisMotionValue(e).stop()))}pauseAnimation(){El((e=>this.getAxisMotionValue(e).animation?.pause()))}getAnimationState(e){return this.getAxisMotionValue(e).animation?.state}getAxisMotionValue(e){const t=`_drag${e.toUpperCase()}`,n=this.visualElement.getProps(),r=n[t];return r||this.visualElement.getValue(e,(n.initial?n.initial[e]:void 0)||0)}snapToCursor(e){El((t=>{const{drag:n}=this.getProps();if(!rc(t,n,this.currentDirection))return;const{projection:r}=this.visualElement,o=this.getAxisMotionValue(t);if(r&&r.layout){const{min:n,max:i}=r.layout.layoutBox[t];o.set(e[t]-Xa(n,i,.5))}}))}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:t}=this.getProps(),{projection:n}=this.visualElement;if(!Bl(t)||!n||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};El((e=>{const t=this.getAxisMotionValue(e);if(t&&!1!==this.constraints){const n=t.get();r[e]=function(e,t){let n=.5;const r=vl(e),o=vl(t);return o>r?n=Ps(t.min,t.max-r,e.min):r>o&&(n=Ps(e.min,e.max-o,t.min)),Si(0,1,n)}({min:n,max:n},this.constraints[e])}}));const{transformTemplate:o}=this.visualElement.getProps();this.visualElement.current.style.transform=o?o({},""):"none",n.root&&n.root.updateScroll(),n.updateLayout(),this.resolveConstraints(),El((t=>{if(!rc(t,e,null))return;const n=this.getAxisMotionValue(t),{min:o,max:i}=this.constraints[t];n.set(Xa(o,i,r[t]))}))}addListeners(){if(!this.visualElement.current)return;tc.set(this.visualElement,this);const e=ml(this.visualElement.current,"pointerdown",(e=>{const{drag:t,dragListener:n=!0}=this.getProps();t&&n&&this.start(e)})),t=()=>{const{dragConstraints:e}=this.getProps();Bl(e)&&e.current&&(this.constraints=this.resolveRefConstraints())},{projection:n}=this.visualElement,r=n.addEventListener("measure",t);n&&!n.layout&&(n.root&&n.root.updateScroll(),n.updateLayout()),bo.read(t);const o=pl(window,"resize",(()=>this.scalePositionWithinConstraints())),i=n.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n}=e;this.isDragging&&n&&(El((e=>{const n=this.getAxisMotionValue(e);n&&(this.originPoint[e]+=t[e].translate,n.set(n.get()+t[e].translate))})),this.visualElement.render())}));return()=>{o(),e(),r(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:t=!1,dragDirectionLock:n=!1,dragPropagation:r=!1,dragConstraints:o=!1,dragElastic:i=Jl,dragMomentum:a=!0}=e;return{...e,drag:t,dragDirectionLock:n,dragPropagation:r,dragConstraints:o,dragElastic:i,dragMomentum:a}}}function rc(e,t,n){return(!0===t||t===e)&&(null===n||n===e)}const oc=e=>(t,n)=>{e&&bo.postRender((()=>e(t,n)))};var ic=n(579);const{schedule:ac,cancel:sc}=yo(queueMicrotask,!1),lc=(0,e.createContext)(null);function cc(){let t=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const n=(0,e.useContext)(lc);if(null===n)return[!0,null];const{isPresent:r,onExitComplete:o,register:i}=n,a=(0,e.useId)();(0,e.useEffect)((()=>{if(t)return i(a)}),[t]);const s=(0,e.useCallback)((()=>t&&o&&o(a)),[a,o,t]);return!r&&o?[!1,s]:[!0]}const uc=(0,e.createContext)({}),dc=(0,e.createContext)({}),pc={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function fc(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const hc={correct:(e,t)=>{if(!t.target)return e;if("string"===typeof e){if(!Fi.test(e))return e;e=parseFloat(e)}return`${fc(e,t.target.x)}% ${fc(e,t.target.y)}%`}},mc={correct:(e,t)=>{let{treeScale:n,projectionDelta:r}=t;const o=e,i=Gi.parse(e);if(i.length>5)return o;const a=Gi.createTransformer(e),s="number"!==typeof i[0]?1:0,l=r.x.scale*n.x,c=r.y.scale*n.y;i[0+s]/=l,i[1+s]/=c;const u=Xa(l,c,.5);return"number"===typeof i[2+s]&&(i[2+s]/=u),"number"===typeof i[3+s]&&(i[3+s]/=u),a(i)}},gc={};class vc extends e.Component{componentDidMount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n,layoutId:r}=this.props,{projection:o}=e;!function(e){for(const t in e)gc[t]=e[t],Oa(t)&&(gc[t].isCSSVariable=!0)}(bc),o&&(t.group&&t.group.add(o),n&&n.register&&r&&n.register(o),o.root.didUpdate(),o.addEventListener("animationComplete",(()=>{this.safeToRemove()})),o.setOptions({...o.options,onExitComplete:()=>this.safeToRemove()})),pc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:t,visualElement:n,drag:r,isPresent:o}=this.props,i=n.projection;return i?(i.isPresent=o,r||e.layoutDependency!==t||void 0===t||e.isPresent!==o?i.willUpdate():this.safeToRemove(),e.isPresent!==o&&(o?i.promote():i.relegate()||bo.postRender((()=>{const e=i.getStack();e&&e.members.length||this.safeToRemove()}))),null):null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),ac.postRender((()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()})))}componentWillUnmount(){const{visualElement:e,layoutGroup:t,switchLayoutGroup:n}=this.props,{projection:r}=e;r&&(r.scheduleCheckAfterUnmount(),t&&t.group&&t.group.remove(r),n&&n.deregister&&n.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function yc(t){const[n,r]=cc(),o=(0,e.useContext)(uc);return(0,ic.jsx)(vc,{...t,layoutGroup:o,switchLayoutGroup:(0,e.useContext)(dc),isPresent:n,safeToRemove:r})}const bc={borderRadius:{...hc,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:hc,borderTopRightRadius:hc,borderBottomLeftRadius:hc,borderBottomRightRadius:hc,boxShadow:mc};const xc=(e,t)=>e.depth-t.depth;class wc{constructor(){this.children=[],this.isDirty=!1}add(e){To(this.children,e),this.isDirty=!0}remove(e){Po(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(xc),this.isDirty=!1,this.children.forEach(e)}}function Sc(e,t){const n=Oo.now(),r=o=>{let{timestamp:i}=o;const a=i-n;a>=t&&(xo(r),e(a-t))};return bo.read(r,!0),()=>xo(r)}function kc(e){const t=Mo(e)?e.get():e;return(e=>Boolean(e&&"object"===typeof e&&e.mix&&e.toValue))(t)?t.toValue():t}const Ec=["TopLeft","TopRight","BottomLeft","BottomRight"],Cc=Ec.length,Tc=e=>"string"===typeof e?parseFloat(e):e,Pc=e=>"number"===typeof e||Fi.test(e);function _c(e,t){return void 0!==e[t]?e[t]:e.borderRadius}const jc=Rc(0,.5,bi),Ac=Rc(.5,.95,ho);function Rc(e,t,n){return r=>r<e?0:r>t?1:n(Ps(e,t,r))}function Oc(e,t){e.min=t.min,e.max=t.max}function Dc(e,t){Oc(e.x,t.x),Oc(e.y,t.y)}function Lc(e,t){e.translate=t.translate,e.scale=t.scale,e.originPoint=t.originPoint,e.origin=t.origin}function zc(e,t,n,r,o){return e=Al(e-=t,1/n,r),void 0!==o&&(e=Al(e,1/o,r)),e}function Nc(e,t,n,r,o){let[i,a,s]=n;!function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:.5,o=arguments.length>4?arguments[4]:void 0,i=arguments.length>5&&void 0!==arguments[5]?arguments[5]:e,a=arguments.length>6&&void 0!==arguments[6]?arguments[6]:e;Ni.test(t)&&(t=parseFloat(t),t=Xa(a.min,a.max,t/100)-a.min);if("number"!==typeof t)return;let s=Xa(i.min,i.max,r);e===i&&(s-=t),e.min=zc(e.min,t,n,s,o),e.max=zc(e.max,t,n,s,o)}(e,t[i],t[a],t[s],t.scale,r,o)}const Fc=["x","scaleX","originX"],Ic=["y","scaleY","originY"];function Mc(e,t,n,r){Nc(e.x,t,Fc,n?n.x:void 0,r?r.x:void 0),Nc(e.y,t,Ic,n?n.y:void 0,r?r.y:void 0)}function $c(e){return 0===e.translate&&1===e.scale}function Bc(e){return $c(e.x)&&$c(e.y)}function Vc(e,t){return e.min===t.min&&e.max===t.max}function Uc(e,t){return Math.round(e.min)===Math.round(t.min)&&Math.round(e.max)===Math.round(t.max)}function Hc(e,t){return Uc(e.x,t.x)&&Uc(e.y,t.y)}function Wc(e){return vl(e.x)/vl(e.y)}function Yc(e,t){return e.translate===t.translate&&e.scale===t.scale&&e.originPoint===t.originPoint}class Kc{constructor(){this.members=[]}add(e){To(this.members,e),e.scheduleRender()}remove(e){if(Po(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const e=this.members[this.members.length-1];e&&this.promote(e)}}relegate(e){const t=this.members.findIndex((t=>e===t));if(0===t)return!1;let n;for(let r=t;r>=0;r--){const e=this.members[r];if(!1!==e.isPresent){n=e;break}}return!!n&&(this.promote(n),!0)}promote(e,t){const n=this.lead;if(e!==n&&(this.prevLead=n,this.lead=e,e.show(),n)){n.instance&&n.scheduleRender(),e.scheduleRender(),e.resumeFrom=n,t&&(e.resumeFrom.preserveOpacity=!0),n.snapshot&&(e.snapshot=n.snapshot,e.snapshot.latestValues=n.animationValues||n.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0);const{crossfade:r}=e.options;!1===r&&n.hide()}}exitAnimationComplete(){this.members.forEach((e=>{const{options:t,resumingFrom:n}=e;t.onExitComplete&&t.onExitComplete(),n&&n.options.onExitComplete&&n.options.onExitComplete()}))}scheduleRender(){this.members.forEach((e=>{e.instance&&e.scheduleRender(!1)}))}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const Qc={nodes:0,calculatedTargetDeltas:0,calculatedProjections:0},Xc=["","X","Y","Z"],qc={visibility:"hidden"};let Gc=0;function Jc(e,t,n,r){const{latestValues:o}=t;o[e]&&(n[e]=o[e],t.setStaticValue(e,0),r&&(r[e]=0))}function Zc(e){if(e.hasCheckedOptimisedAppear=!0,e.root===e)return;const{visualElement:t}=e.options;if(!t)return;const n=Uo(t);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:t,layoutId:r}=e.options;window.MotionCancelOptimisedAnimation(n,"transform",bo,!(t||r))}const{parent:r}=e;r&&!r.hasCheckedOptimisedAppear&&Zc(r)}function eu(e){let{attachResizeListener:t,defaultParent:n,measureScroll:r,checkIsScrollRoot:o,resetTransform:i}=e;return class{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:n?.();this.id=Gc++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,vo.value&&(Qc.nodes=Qc.calculatedTargetDeltas=Qc.calculatedProjections=0),this.nodes.forEach(ru),this.nodes.forEach(uu),this.nodes.forEach(du),this.nodes.forEach(ou),vo.addProjectionMetrics&&vo.addProjectionMetrics(Qc)},this.resolvedRelativeTargetAt=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=e,this.root=t?t.root||t:this,this.path=t?[...t.path,t]:[],this.parent=t,this.depth=t?t.depth+1:0;for(let n=0;n<this.path.length;n++)this.path[n].shouldResetTransform=!0;this.root===this&&(this.nodes=new wc)}addEventListener(e,t){return this.eventHandlers.has(e)||this.eventHandlers.set(e,new _o),this.eventHandlers.get(e).add(t)}notifyListeners(e){const t=this.eventHandlers.get(e);for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];t&&t.notify(...r)}hasListeners(e){return this.eventHandlers.has(e)}mount(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.root.hasTreeAnimated;if(this.instance)return;var r;this.isSVG=(r=e)instanceof SVGElement&&"svg"!==r.tagName,this.instance=e;const{layoutId:o,layout:i,visualElement:a}=this.options;if(a&&!a.current&&a.mount(e),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),n&&(i||o)&&(this.isLayoutDirty=!0),t){let n;const r=()=>this.root.updateBlockedByResize=!1;t(e,(()=>{this.root.updateBlockedByResize=!0,n&&n(),n=Sc(r,250),pc.hasAnimatedSinceResize&&(pc.hasAnimatedSinceResize=!1,this.nodes.forEach(cu))}))}o&&this.root.registerSharedNode(o,this),!1!==this.options.animate&&a&&(o||i)&&this.addEventListener("didUpdate",(e=>{let{delta:t,hasLayoutChanged:n,hasRelativeLayoutChanged:r,layout:o}=e;if(this.isTreeAnimationBlocked())return this.target=void 0,void(this.relativeTarget=void 0);const i=this.options.transition||a.getDefaultTransition()||vu,{onLayoutAnimationStart:s,onLayoutAnimationComplete:l}=a.getProps(),c=!this.targetLayout||!Hc(this.targetLayout,o),u=!n&&r;if(this.options.layoutRoot||this.resumeFrom||u||n&&(c||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(t,u);const e={...fo(i,"layout"),onPlay:s,onComplete:l};(a.shouldReduceMotion||this.options.layoutRoot)&&(e.delay=0,e.type=!1),this.startAnimation(e)}else n||cu(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=o}))}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const e=this.getStack();e&&e.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,xo(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(pu),this.animationId++)}getTransformTemplate(){const{visualElement:e}=this.options;return e&&e.getProps().transformTemplate}willUpdate(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked())return void(this.options.onExitComplete&&this.options.onExitComplete());if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&Zc(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let o=0;o<this.path.length;o++){const e=this.path[o];e.shouldResetTransform=!0,e.updateScroll("snapshot"),e.options.layoutRoot&&e.willUpdate(!1)}const{layoutId:t,layout:n}=this.options;if(void 0===t&&!n)return;const r=this.getTransformTemplate();this.prevTransformTemplateValue=r?r(this.latestValues,""):void 0,this.updateSnapshot(),e&&this.notifyListeners("willUpdate")}update(){this.updateScheduled=!1;if(this.isUpdateBlocked())return this.unblockUpdate(),this.clearAllSnapshots(),void this.nodes.forEach(au);this.isUpdating||this.nodes.forEach(su),this.isUpdating=!1,this.nodes.forEach(lu),this.nodes.forEach(tu),this.nodes.forEach(nu),this.clearAllSnapshots();const e=Oo.now();wo.delta=Si(0,1e3/60,e-wo.timestamp),wo.timestamp=e,wo.isProcessing=!0,So.update.process(wo),So.preRender.process(wo),So.render.process(wo),wo.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,ac.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(iu),this.sharedNodes.forEach(fu)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,bo.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){bo.postRender((()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()}))}updateSnapshot(){!this.snapshot&&this.instance&&(this.snapshot=this.measure(),!this.snapshot||vl(this.snapshot.measuredBox.x)||vl(this.snapshot.measuredBox.y)||(this.snapshot=void 0))}updateLayout(){if(!this.instance)return;if(this.updateScroll(),(!this.options.alwaysMeasureLayout||!this.isLead())&&!this.isLayoutDirty)return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let n=0;n<this.path.length;n++){this.path[n].updateScroll()}const e=this.layout;this.layout=this.measure(!1),this.layoutCorrected={x:{min:0,max:0},y:{min:0,max:0}},this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:t}=this.options;t&&t.notify("LayoutMeasure",this.layout.layoutBox,e?e.layoutBox:void 0)}updateScroll(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"measure",t=Boolean(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===e&&(t=!1),t){const t=o(this.instance);this.scroll={animationId:this.root.animationId,phase:e,isRoot:t,offset:r(this.instance),wasRoot:this.scroll?this.scroll.isRoot:t}}}resetTransform(){if(!i)return;const e=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,t=this.projectionDelta&&!Bc(this.projectionDelta),n=this.getTransformTemplate(),r=n?n(this.latestValues,""):void 0,o=r!==this.prevTransformTemplateValue;e&&(t||Pl(this.latestValues)||o)&&(i(this.instance,r),this.shouldResetTransform=!1,this.scheduleRender())}measure(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];const t=this.measurePageBox();let n=this.removeElementScroll(t);var r;return e&&(n=this.removeTransform(n)),xu((r=n).x),xu(r.y),{animationId:this.root.animationId,measuredBox:t,layoutBox:n,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:e}=this.options;if(!e)return{x:{min:0,max:0},y:{min:0,max:0}};const t=e.measureViewportBox();if(!(this.scroll?.wasRoot||this.path.some(Su))){const{scroll:e}=this.root;e&&(Nl(t.x,e.offset.x),Nl(t.y,e.offset.y))}return t}removeElementScroll(e){const t={x:{min:0,max:0},y:{min:0,max:0}};if(Dc(t,e),this.scroll?.wasRoot)return t;for(let n=0;n<this.path.length;n++){const r=this.path[n],{scroll:o,options:i}=r;r!==this.root&&o&&i.layoutScroll&&(o.wasRoot&&Dc(t,e),Nl(t.x,o.offset.x),Nl(t.y,o.offset.y))}return t}applyTransform(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n={x:{min:0,max:0},y:{min:0,max:0}};Dc(n,e);for(let r=0;r<this.path.length;r++){const e=this.path[r];!t&&e.options.layoutScroll&&e.scroll&&e!==e.root&&Il(n,{x:-e.scroll.offset.x,y:-e.scroll.offset.y}),Pl(e.latestValues)&&Il(n,e.latestValues)}return Pl(this.latestValues)&&Il(n,this.latestValues),n}removeTransform(e){const t={x:{min:0,max:0},y:{min:0,max:0}};Dc(t,e);for(let n=0;n<this.path.length;n++){const e=this.path[n];if(!e.instance)continue;if(!Pl(e.latestValues))continue;Tl(e.latestValues)&&e.updateSnapshot();const r={x:{min:0,max:0},y:{min:0,max:0}};Dc(r,e.measurePageBox()),Mc(t,e.latestValues,e.snapshot?e.snapshot.layoutBox:void 0,r)}return Pl(this.latestValues)&&Mc(t,this.latestValues),t}setTargetDelta(e){this.targetDelta=e,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(e){this.options={...this.options,...e,crossfade:void 0===e.crossfade||e.crossfade}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==wo.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(){let e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];const t=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=t.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=t.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=t.isSharedProjectionDirty);const n=Boolean(this.resumingFrom)||this!==t;if(!(e||n&&this.isSharedProjectionDirty||this.isProjectionDirty||this.parent?.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:r,layoutId:o}=this.options;if(this.layout&&(r||o)){if(this.resolvedRelativeTargetAt=wo.timestamp,!this.targetDelta&&!this.relativeTarget){const e=this.getClosestProjectingParent();e&&e.layout&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Sl(this.relativeTargetOrigin,this.layout.layoutBox,e.layout.layoutBox),Dc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(this.relativeTarget||this.targetDelta){var i,a,s;if(this.target||(this.target={x:{min:0,max:0},y:{min:0,max:0}},this.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}}),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),i=this.target,a=this.relativeTarget,s=this.relativeParent.target,xl(i.x,a.x,s.x),xl(i.y,a.y,s.y)):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Dc(this.target,this.layout.layoutBox),Dl(this.target,this.targetDelta)):Dc(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const e=this.getClosestProjectingParent();e&&Boolean(e.resumingFrom)===Boolean(this.resumingFrom)&&!e.options.layoutScroll&&e.target&&1!==this.animationProgress?(this.relativeParent=e,this.forceRelativeParentToResolveTarget(),this.relativeTarget={x:{min:0,max:0},y:{min:0,max:0}},this.relativeTargetOrigin={x:{min:0,max:0},y:{min:0,max:0}},Sl(this.relativeTargetOrigin,this.target,e.target),Dc(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}vo.value&&Qc.calculatedTargetDeltas++}}}getClosestProjectingParent(){if(this.parent&&!Tl(this.parent.latestValues)&&!_l(this.parent.latestValues))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return Boolean((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){const e=this.getLead(),t=Boolean(this.resumingFrom)||this!==e;let n=!0;if((this.isProjectionDirty||this.parent?.isProjectionDirty)&&(n=!1),t&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(n=!1),this.resolvedRelativeTargetAt===wo.timestamp&&(n=!1),n)return;const{layout:r,layoutId:o}=this.options;if(this.isTreeAnimating=Boolean(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!r&&!o)return;Dc(this.layoutCorrected,this.layout.layoutBox);const i=this.treeScale.x,a=this.treeScale.y;!function(e,t,n){let r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];const o=n.length;if(!o)return;let i,a;t.x=t.y=1;for(let s=0;s<o;s++){i=n[s],a=i.projectionDelta;const{visualElement:o}=i.options;o&&o.props.style&&"contents"===o.props.style.display||(r&&i.options.layoutScroll&&i.scroll&&i!==i.root&&Il(e,{x:-i.scroll.offset.x,y:-i.scroll.offset.y}),a&&(t.x*=a.x.scale,t.y*=a.y.scale,Dl(e,a)),r&&Pl(i.latestValues)&&Il(e,i.latestValues))}t.x<zl&&t.x>Ll&&(t.x=1),t.y<zl&&t.y>Ll&&(t.y=1)}(this.layoutCorrected,this.treeScale,this.path,t),!e.layout||e.target||1===this.treeScale.x&&1===this.treeScale.y||(e.target=e.layout.layoutBox,e.targetWithTransforms={x:{min:0,max:0},y:{min:0,max:0}});const{target:s}=e;s?(this.projectionDelta&&this.prevProjectionDelta?(Lc(this.prevProjectionDelta.x,this.projectionDelta.x),Lc(this.prevProjectionDelta.y,this.projectionDelta.y)):this.createProjectionDeltas(),bl(this.projectionDelta,this.layoutCorrected,s,this.latestValues),this.treeScale.x===i&&this.treeScale.y===a&&Yc(this.projectionDelta.x,this.prevProjectionDelta.x)&&Yc(this.projectionDelta.y,this.prevProjectionDelta.y)||(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",s)),vo.value&&Qc.calculatedProjections++):this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender())}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(){let e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];if(this.options.visualElement?.scheduleRender(),e){const e=this.getStack();e&&e.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDelta={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}},this.projectionDeltaWithTransform={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}}}setAnimationOrigin(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const n=this.snapshot,r=n?n.latestValues:{},o={...this.latestValues},i={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};this.relativeParent&&this.relativeParent.options.layoutRoot||(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!t;const a={x:{min:0,max:0},y:{min:0,max:0}},s=(n?n.source:void 0)!==(this.layout?this.layout.source:void 0),l=this.getStack(),c=!l||l.members.length<=1,u=Boolean(s&&!c&&!0===this.options.crossfade&&!this.path.some(gu));let d;this.animationProgress=0,this.mixTargetDelta=t=>{const n=t/1e3;hu(i.x,e.x,n),hu(i.y,e.y,n),this.setTargetDelta(i),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Sl(a,this.layout.layoutBox,this.relativeParent.layout.layoutBox),function(e,t,n,r){mu(e.x,t.x,n.x,r),mu(e.y,t.y,n.y,r)}(this.relativeTarget,this.relativeTargetOrigin,a,n),d&&function(e,t){return Vc(e.x,t.x)&&Vc(e.y,t.y)}(this.relativeTarget,d)&&(this.isProjectionDirty=!1),d||(d={x:{min:0,max:0},y:{min:0,max:0}}),Dc(d,this.relativeTarget)),s&&(this.animationValues=o,function(e,t,n,r,o,i){o?(e.opacity=Xa(0,n.opacity??1,jc(r)),e.opacityExit=Xa(t.opacity??1,0,Ac(r))):i&&(e.opacity=Xa(t.opacity??1,n.opacity??1,r));for(let a=0;a<Cc;a++){const o=`border${Ec[a]}Radius`;let i=_c(t,o),s=_c(n,o);void 0===i&&void 0===s||(i||(i=0),s||(s=0),0===i||0===s||Pc(i)===Pc(s)?(e[o]=Math.max(Xa(Tc(i),Tc(s),r),0),(Ni.test(s)||Ni.test(i))&&(e[o]+="%")):e[o]=s)}(t.rotate||n.rotate)&&(e.rotate=Xa(t.rotate||0,n.rotate||0,r))}(o,r,this.latestValues,n,u,c)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=n},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(e){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(xo(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=bo.update((()=>{pc.hasAnimatedSinceResize=!0,ii.layout++,this.currentAnimation=function(e,t,n){const r=Mo(e)?e:zo(e);return r.start(Us("",r,t,n)),r.animation}(0,1e3,{...e,onUpdate:t=>{this.mixTargetDelta(t),e.onUpdate&&e.onUpdate(t)},onStop:()=>{ii.layout--},onComplete:()=>{ii.layout--,e.onComplete&&e.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0}))}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const e=this.getStack();e&&e.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(1e3),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const e=this.getLead();let{targetWithTransforms:t,target:n,layout:r,latestValues:o}=e;if(t&&n&&r){if(this!==e&&this.layout&&r&&wu(this.options.animationType,this.layout.layoutBox,r.layoutBox)){n=this.target||{x:{min:0,max:0},y:{min:0,max:0}};const t=vl(this.layout.layoutBox.x);n.x.min=e.target.x.min,n.x.max=n.x.min+t;const r=vl(this.layout.layoutBox.y);n.y.min=e.target.y.min,n.y.max=n.y.min+r}Dc(t,n),Il(t,o),bl(this.projectionDeltaWithTransform,this.layoutCorrected,t,o)}}registerSharedNode(e,t){this.sharedNodes.has(e)||this.sharedNodes.set(e,new Kc);this.sharedNodes.get(e).add(t);const n=t.options.initialPromotionConfig;t.promote({transition:n?n.transition:void 0,preserveFollowOpacity:n&&n.shouldPreserveFollowOpacity?n.shouldPreserveFollowOpacity(t):void 0})}isLead(){const e=this.getStack();return!e||e.lead===this}getLead(){const{layoutId:e}=this.options;return e&&this.getStack()?.lead||this}getPrevLead(){const{layoutId:e}=this.options;return e?this.getStack()?.prevLead:void 0}getStack(){const{layoutId:e}=this.options;if(e)return this.root.sharedNodes.get(e)}promote(){let{needsReset:e,transition:t,preserveFollowOpacity:n}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const r=this.getStack();r&&r.promote(this,n),e&&(this.projectionDelta=void 0,this.needsReset=!0),t&&this.setOptions({transition:t})}relegate(){const e=this.getStack();return!!e&&e.relegate(this)}resetSkewAndRotation(){const{visualElement:e}=this.options;if(!e)return;let t=!1;const{latestValues:n}=e;if((n.z||n.rotate||n.rotateX||n.rotateY||n.rotateZ||n.skewX||n.skewY)&&(t=!0),!t)return;const r={};n.z&&Jc("z",e,r,this.animationValues);for(let o=0;o<Xc.length;o++)Jc(`rotate${Xc[o]}`,e,r,this.animationValues),Jc(`skew${Xc[o]}`,e,r,this.animationValues);e.render();for(const o in r)e.setStaticValue(o,r[o]),this.animationValues&&(this.animationValues[o]=r[o]);e.scheduleRender()}getProjectionStyles(e){if(!this.instance||this.isSVG)return;if(!this.isVisible)return qc;const t={visibility:""},n=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,t.opacity="",t.pointerEvents=kc(e?.pointerEvents)||"",t.transform=n?n(this.latestValues,""):"none",t;const r=this.getLead();if(!this.projectionDelta||!this.layout||!r.target){const t={};return this.options.layoutId&&(t.opacity=void 0!==this.latestValues.opacity?this.latestValues.opacity:1,t.pointerEvents=kc(e?.pointerEvents)||""),this.hasProjected&&!Pl(this.latestValues)&&(t.transform=n?n({},""):"none",this.hasProjected=!1),t}const o=r.animationValues||r.latestValues;this.applyTransformsToTarget(),t.transform=function(e,t,n){let r="";const o=e.x.translate/t.x,i=e.y.translate/t.y,a=n?.z||0;if((o||i||a)&&(r=`translate3d(${o}px, ${i}px, ${a}px) `),1===t.x&&1===t.y||(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{transformPerspective:e,rotate:t,rotateX:o,rotateY:i,skewX:a,skewY:s}=n;e&&(r=`perspective(${e}px) ${r}`),t&&(r+=`rotate(${t}deg) `),o&&(r+=`rotateX(${o}deg) `),i&&(r+=`rotateY(${i}deg) `),a&&(r+=`skewX(${a}deg) `),s&&(r+=`skewY(${s}deg) `)}const s=e.x.scale*t.x,l=e.y.scale*t.y;return 1===s&&1===l||(r+=`scale(${s}, ${l})`),r||"none"}(this.projectionDeltaWithTransform,this.treeScale,o),n&&(t.transform=n(o,t.transform));const{x:i,y:a}=this.projectionDelta;t.transformOrigin=`${100*i.origin}% ${100*a.origin}% 0`,r.animationValues?t.opacity=r===this?o.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:o.opacityExit:t.opacity=r===this?void 0!==o.opacity?o.opacity:"":void 0!==o.opacityExit?o.opacityExit:0;for(const s in gc){if(void 0===o[s])continue;const{correct:e,applyTo:n,isCSSVariable:i}=gc[s],a="none"===t.transform?o[s]:e(o[s],r);if(n){const e=n.length;for(let r=0;r<e;r++)t[n[r]]=a}else i?this.options.visualElement.renderState.vars[s]=a:t[s]=a}return this.options.layoutId&&(t.pointerEvents=r===this?kc(e?.pointerEvents)||"":"none"),t}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach((e=>e.currentAnimation?.stop())),this.root.nodes.forEach(au),this.root.sharedNodes.clear()}}}function tu(e){e.updateLayout()}function nu(e){const t=e.resumeFrom?.snapshot||e.snapshot;if(e.isLead()&&e.layout&&t&&e.hasListeners("didUpdate")){const{layoutBox:n,measuredBox:r}=e.layout,{animationType:o}=e.options,i=t.source!==e.layout.source;"size"===o?El((e=>{const r=i?t.measuredBox[e]:t.layoutBox[e],o=vl(r);r.min=n[e].min,r.max=r.min+o})):wu(o,t.layoutBox,n)&&El((r=>{const o=i?t.measuredBox[r]:t.layoutBox[r],a=vl(n[r]);o.max=o.min+a,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[r].max=e.relativeTarget[r].min+a)}));const a={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};bl(a,n,t.layoutBox);const s={x:{translate:0,scale:1,origin:0,originPoint:0},y:{translate:0,scale:1,origin:0,originPoint:0}};i?bl(s,e.applyTransform(r,!0),t.measuredBox):bl(s,n,t.layoutBox);const l=!Bc(a);let c=!1;if(!e.resumeFrom){const r=e.getClosestProjectingParent();if(r&&!r.resumeFrom){const{snapshot:o,layout:i}=r;if(o&&i){const a={x:{min:0,max:0},y:{min:0,max:0}};Sl(a,t.layoutBox,o.layoutBox);const s={x:{min:0,max:0},y:{min:0,max:0}};Sl(s,n,i.layoutBox),Hc(a,s)||(c=!0),r.options.layoutRoot&&(e.relativeTarget=s,e.relativeTargetOrigin=a,e.relativeParent=r)}}}e.notifyListeners("didUpdate",{layout:n,snapshot:t,delta:s,layoutDelta:a,hasLayoutChanged:l,hasRelativeLayoutChanged:c})}else if(e.isLead()){const{onExitComplete:t}=e.options;t&&t()}e.options.transition=void 0}function ru(e){vo.value&&Qc.nodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=Boolean(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ou(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function iu(e){e.clearSnapshot()}function au(e){e.clearMeasurements()}function su(e){e.isLayoutDirty=!1}function lu(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function cu(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uu(e){e.resolveTargetDelta()}function du(e){e.calcProjection()}function pu(e){e.resetSkewAndRotation()}function fu(e){e.removeLeadSnapshot()}function hu(e,t,n){e.translate=Xa(t.translate,0,n),e.scale=Xa(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function mu(e,t,n,r){e.min=Xa(t.min,n.min,r),e.max=Xa(t.max,n.max,r)}function gu(e){return e.animationValues&&void 0!==e.animationValues.opacityExit}const vu={duration:.45,ease:[.4,0,.1,1]},yu=e=>"undefined"!==typeof navigator&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(e),bu=yu("applewebkit/")&&!yu("chrome/")?Math.round:ho;function xu(e){e.min=bu(e.min),e.max=bu(e.max)}function wu(e,t,n){return"position"===e||"preserve-aspect"===e&&(r=Wc(t),o=Wc(n),i=.2,!(Math.abs(r-o)<=i));var r,o,i}function Su(e){return e!==e.root&&e.scroll?.wasRoot}const ku=eu({attachResizeListener:(e,t)=>pl(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Eu={current:void 0},Cu=eu({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Eu.current){const e=new ku({});e.mount(window),e.setOptions({layoutScroll:!0}),Eu.current=e}return Eu.current},resetTransform:(e,t)=>{e.style.transform=void 0!==t?t:"none"},checkIsScrollRoot:e=>Boolean("fixed"===window.getComputedStyle(e).position)}),Tu={pan:{Feature:class extends sl{constructor(){super(...arguments),this.removePointerDownListener=ho}onPointerDown(e){this.session=new Ul(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:$l(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:t,onPan:n,onPanEnd:r}=this.node.getProps();return{onSessionStart:oc(e),onStart:oc(t),onMove:n,onEnd:(e,t)=>{delete this.session,r&&bo.postRender((()=>r(e,t)))}}}mount(){this.removePointerDownListener=ml(this.node.current,"pointerdown",(e=>this.onPointerDown(e)))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}},drag:{Feature:class extends sl{constructor(e){super(e),this.removeGroupControls=ho,this.removeListeners=ho,this.controls=new nc(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||ho}unmount(){this.removeGroupControls(),this.removeListeners()}},ProjectionNode:Cu,MeasureLayout:yc}};function Pu(e,t){const n=function(e,t,n){if(e instanceof EventTarget)return[e];if("string"===typeof e){let r=document;t&&(r=t.current);const o=n?.[e]??r.querySelectorAll(e);return o?Array.from(o):[]}return Array.from(e)}(e),r=new AbortController;return[n,{passive:!0,...t,signal:r.signal},()=>r.abort()]}function _u(e){return!("touch"===e.pointerType||dl())}function ju(e,t,n){const{props:r}=e;e.animationState&&r.whileHover&&e.animationState.setActive("whileHover","Start"===n);const o=r["onHover"+n];o&&bo.postRender((()=>o(t,hl(t))))}const Au=(e,t)=>!!t&&(e===t||Au(e,t.parentElement)),Ru=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);const Ou=new WeakSet;function Du(e){return t=>{"Enter"===t.key&&e(t)}}function Lu(e,t){e.dispatchEvent(new PointerEvent("pointer"+t,{isPrimary:!0,bubbles:!0}))}function zu(e){return fl(e)&&!dl()}function Nu(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,o,i]=Pu(e,n),a=e=>{const r=e.currentTarget;if(!zu(e)||Ou.has(r))return;Ou.add(r);const i=t(r,e),a=(e,t)=>{window.removeEventListener("pointerup",s),window.removeEventListener("pointercancel",l),zu(e)&&Ou.has(r)&&(Ou.delete(r),"function"===typeof i&&i(e,{success:t}))},s=e=>{a(e,r===window||r===document||n.useGlobalTarget||Au(r,e.target))},l=e=>{a(e,!1)};window.addEventListener("pointerup",s,o),window.addEventListener("pointercancel",l,o)};return r.forEach((e=>{var t;(n.useGlobalTarget?window:e).addEventListener("pointerdown",a,o),e instanceof HTMLElement&&(e.addEventListener("focus",(e=>((e,t)=>{const n=e.currentTarget;if(!n)return;const r=Du((()=>{if(Ou.has(n))return;Lu(n,"down");const e=Du((()=>{Lu(n,"up")}));n.addEventListener("keyup",e,t),n.addEventListener("blur",(()=>Lu(n,"cancel")),t)}));n.addEventListener("keydown",r,t),n.addEventListener("blur",(()=>n.removeEventListener("keydown",r)),t)})(e,o))),t=e,Ru.has(t.tagName)||-1!==t.tabIndex||e.hasAttribute("tabindex")||(e.tabIndex=0))})),i}function Fu(e,t,n){const{props:r}=e;if(e.current instanceof HTMLButtonElement&&e.current.disabled)return;e.animationState&&r.whileTap&&e.animationState.setActive("whileTap","Start"===n);const o=r["onTap"+("End"===n?"":n)];o&&bo.postRender((()=>o(t,hl(t))))}const Iu=new WeakMap,Mu=new WeakMap,$u=e=>{const t=Iu.get(e.target);t&&t(e)},Bu=e=>{e.forEach($u)};function Vu(e,t,n){const r=function(e){let{root:t,...n}=e;const r=t||document;Mu.has(r)||Mu.set(r,{});const o=Mu.get(r),i=JSON.stringify(n);return o[i]||(o[i]=new IntersectionObserver(Bu,{root:t,...n})),o[i]}(t);return Iu.set(e,n),r.observe(e),()=>{Iu.delete(e),r.unobserve(e)}}const Uu={some:0,all:1};const Hu={inView:{Feature:class extends sl{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:t,margin:n,amount:r="some",once:o}=e,i={root:t?t.current:void 0,rootMargin:n,threshold:"number"===typeof r?r:Uu[r]};return Vu(this.node.current,i,(e=>{const{isIntersecting:t}=e;if(this.isInView===t)return;if(this.isInView=t,o&&!t&&this.hasEnteredView)return;t&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",t);const{onViewportEnter:n,onViewportLeave:r}=this.node.getProps(),i=t?n:r;i&&i(e)}))}mount(){this.startObserver()}update(){if("undefined"===typeof IntersectionObserver)return;const{props:e,prevProps:t}=this.node,n=["amount","margin","root"].some(function(e){let{viewport:t={}}=e,{viewport:n={}}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e=>t[e]!==n[e]}(e,t));n&&this.startObserver()}unmount(){}}},tap:{Feature:class extends sl{mount(){const{current:e}=this.node;e&&(this.unmount=Nu(e,((e,t)=>(Fu(this.node,t,"Start"),(e,t)=>{let{success:n}=t;return Fu(this.node,e,n?"End":"Cancel")})),{useGlobalTarget:this.node.props.globalTapTarget}))}unmount(){}}},focus:{Feature:class extends sl{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch(Tv){e=!0}e&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){this.isActive&&this.node.animationState&&(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=rs(pl(this.node.current,"focus",(()=>this.onFocus())),pl(this.node.current,"blur",(()=>this.onBlur())))}unmount(){}}},hover:{Feature:class extends sl{mount(){const{current:e}=this.node;e&&(this.unmount=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const[r,o,i]=Pu(e,n),a=e=>{if(!_u(e))return;const{target:n}=e,r=t(n,e);if("function"!==typeof r||!n)return;const i=e=>{_u(e)&&(r(e),n.removeEventListener("pointerleave",i))};n.addEventListener("pointerleave",i,o)};return r.forEach((e=>{e.addEventListener("pointerenter",a,o)})),i}(e,((e,t)=>(ju(this.node,t,"Start"),e=>ju(this.node,e,"End")))))}unmount(){}}}},Wu={layout:{ProjectionNode:Cu,MeasureLayout:yc}},Yu=(0,e.createContext)({strict:!1}),Ku=(0,e.createContext)({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),Qu=(0,e.createContext)({});function Xu(e){return lo(e.animate)||Gs.some((t=>Xs(e[t])))}function qu(e){return Boolean(Xu(e)||e.variants)}function Gu(t){const{initial:n,animate:r}=function(e,t){if(Xu(e)){const{initial:t,animate:n}=e;return{initial:!1===t||Xs(t)?t:void 0,animate:Xs(n)?n:void 0}}return!1!==e.inherit?t:{}}(t,(0,e.useContext)(Qu));return(0,e.useMemo)((()=>({initial:n,animate:r})),[Ju(n),Ju(r)])}function Ju(e){return Array.isArray(e)?e.join(" "):e}const Zu="undefined"!==typeof window,ed={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},td={};for(const n in ed)td[n]={isEnabled:e=>ed[n].some((t=>!!e[t]))};const nd=Symbol.for("motionComponentSymbol");function rd(t,n,r){return(0,e.useCallback)((e=>{e&&t.onMount&&t.onMount(e),n&&(e?n.mount(e):n.unmount()),r&&("function"===typeof r?r(e):Bl(r)&&(r.current=e))}),[n])}const od=Zu?e.useLayoutEffect:e.useEffect;function id(t,n,r,o,i){const{visualElement:a}=(0,e.useContext)(Qu),s=(0,e.useContext)(Yu),l=(0,e.useContext)(lc),c=(0,e.useContext)(Ku).reducedMotion,u=(0,e.useRef)(null);o=o||s.renderer,!u.current&&o&&(u.current=o(t,{visualState:n,parent:a,props:r,presenceContext:l,blockInitialAnimation:!!l&&!1===l.initial,reducedMotionConfig:c}));const d=u.current,p=(0,e.useContext)(dc);!d||d.projection||!i||"html"!==d.type&&"svg"!==d.type||function(e,t,n,r){const{layoutId:o,layout:i,drag:a,dragConstraints:s,layoutScroll:l,layoutRoot:c,layoutCrossfade:u}=t;e.projection=new n(e.latestValues,t["data-framer-portal-id"]?void 0:ad(e.parent)),e.projection.setOptions({layoutId:o,layout:i,alwaysMeasureLayout:Boolean(a)||s&&Bl(s),visualElement:e,animationType:"string"===typeof i?i:"both",initialPromotionConfig:r,crossfade:u,layoutScroll:l,layoutRoot:c})}(u.current,r,i,p);const f=(0,e.useRef)(!1);(0,e.useInsertionEffect)((()=>{d&&f.current&&d.update(r,l)}));const h=r[Vo],m=(0,e.useRef)(Boolean(h)&&!window.MotionHandoffIsComplete?.(h)&&window.MotionHasOptimisedAnimation?.(h));return od((()=>{d&&(f.current=!0,window.MotionIsMounted=!0,d.updateFeatures(),ac.render(d.render),m.current&&d.animationState&&d.animationState.animateChanges())})),(0,e.useEffect)((()=>{d&&(!m.current&&d.animationState&&d.animationState.animateChanges(),m.current&&(queueMicrotask((()=>{window.MotionHandoffMarkAsComplete?.(h)})),m.current=!1))})),d}function ad(e){if(e)return!1!==e.options.allowProjection?e.projection:ad(e.parent)}function sd(t){let{preloadedFeatures:n,createVisualElement:r,useRender:o,useVisualState:i,Component:a}=t;function s(t,n){let s;const l={...(0,e.useContext)(Ku),...t,layoutId:ld(t)},{isStatic:c}=l,u=Gu(t),d=i(t,c);if(!c&&Zu){!function(){(0,e.useContext)(Yu).strict;0}();const t=function(e){const{drag:t,layout:n}=td;if(!t&&!n)return{};const r={...t,...n};return{MeasureLayout:t?.isEnabled(e)||n?.isEnabled(e)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}(l);s=t.MeasureLayout,u.visualElement=id(a,d,l,r,t.ProjectionNode)}return(0,ic.jsxs)(Qu.Provider,{value:u,children:[s&&u.visualElement?(0,ic.jsx)(s,{visualElement:u.visualElement,...l}):null,o(a,t,rd(d,u.visualElement,n),d,c,u.visualElement)]})}n&&function(e){for(const t in e)td[t]={...td[t],...e[t]}}(n),s.displayName=`motion.${"string"===typeof a?a:`create(${a.displayName??a.name??""})`}`;const l=(0,e.forwardRef)(s);return l[nd]=a,l}function ld(t){let{layoutId:n}=t;const r=(0,e.useContext)(uc).id;return r&&void 0!==n?r+"-"+n:n}function cd(e,t){let{layout:n,layoutId:r}=t;return Eo.has(e)||e.startsWith("origin")||(n||void 0!==r)&&(!!gc[e]||"opacity"===e)}const ud=(e,t)=>t&&"number"===typeof e?t.transform(e):e,dd={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},pd=ko.length;function fd(e,t,n){const{style:r,vars:o,transformOrigin:i}=e;let a=!1,s=!1;for(const l in t){const e=t[l];if(Eo.has(l))a=!0;else if(Oa(l))o[l]=e;else{const t=ud(e,ia[l]);l.startsWith("origin")?(s=!0,i[l]=t):r[l]=t}}if(t.transform||(a||n?r.transform=function(e,t,n){let r="",o=!0;for(let i=0;i<pd;i++){const a=ko[i],s=e[a];if(void 0===s)continue;let l=!0;if(l="number"===typeof s?s===(a.startsWith("scale")?1:0):0===parseFloat(s),!l||n){const e=ud(s,ia[a]);l||(o=!1,r+=`${dd[a]||a}(${e}) `),n&&(t[a]=e)}}return r=r.trim(),n?r=n(t,o?"":r):o&&(r="none"),r}(t,e.transform,n):r.transform&&(r.transform="none")),s){const{originX:e="50%",originY:t="50%",originZ:n=0}=i;r.transformOrigin=`${e} ${t} ${n}`}}const hd=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function md(e,t,n){for(const r in t)Mo(t[r])||cd(r,n)||(e[r]=t[r])}function gd(t,n){const r={};return md(r,t.style||{},t),Object.assign(r,function(t,n){let{transformTemplate:r}=t;return(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{}};return fd(e,n,r),Object.assign({},e.vars,e.style)}),[n])}(t,n)),r}function vd(e,t){const n={},r=gd(e,t);return e.drag&&!1!==e.dragListener&&(n.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=!0===e.drag?"none":"pan-"+("x"===e.drag?"y":"x")),void 0===e.tabIndex&&(e.onTap||e.onTapStart||e.whileTap)&&(n.tabIndex=0),n.style=r,n}const yd=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function bd(e){return e.startsWith("while")||e.startsWith("drag")&&"draggable"!==e||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||yd.has(e)}let xd=e=>!bd(e);try{(wd=require("@emotion/is-prop-valid").default)&&(xd=e=>e.startsWith("on")?!bd(e):wd(e))}catch{}var wd;const Sd=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function kd(e){return"string"===typeof e&&!e.includes("-")&&!!(Sd.indexOf(e)>-1||/[A-Z]/u.test(e))}const Ed={offset:"stroke-dashoffset",array:"stroke-dasharray"},Cd={offset:"strokeDashoffset",array:"strokeDasharray"};function Td(e,t,n){return"string"===typeof e?e:Fi.transform(t+n*e)}function Pd(e,t,n,r){let{attrX:o,attrY:i,attrScale:a,originX:s,originY:l,pathLength:c,pathSpacing:u=1,pathOffset:d=0,...p}=t;if(fd(e,p,r),n)return void(e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox));e.attrs=e.style,e.style={};const{attrs:f,style:h,dimensions:m}=e;f.transform&&(m&&(h.transform=f.transform),delete f.transform),m&&(void 0!==s||void 0!==l||h.transform)&&(h.transformOrigin=function(e,t,n){return`${Td(t,e.x,e.width)} ${Td(n,e.y,e.height)}`}(m,void 0!==s?s:.5,void 0!==l?l:.5)),void 0!==o&&(f.x=o),void 0!==i&&(f.y=i),void 0!==a&&(f.scale=a),void 0!==c&&function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=!(arguments.length>4&&void 0!==arguments[4])||arguments[4];e.pathLength=1;const i=o?Ed:Cd;e[i.offset]=Fi.transform(-r);const a=Fi.transform(t),s=Fi.transform(n);e[i.array]=`${a} ${s}`}(f,c,u,d,!1)}const _d=()=>({style:{},transform:{},transformOrigin:{},vars:{},attrs:{}}),jd=e=>"string"===typeof e&&"svg"===e.toLowerCase();function Ad(t,n,r,o){const i=(0,e.useMemo)((()=>{const e={style:{},transform:{},transformOrigin:{},vars:{},attrs:{}};return Pd(e,n,jd(o),t.transformTemplate),{...e.attrs,style:{...e.style}}}),[n]);if(t.style){const e={};md(e,t.style,t),i.style={...e,...i.style}}return i}function Rd(){let t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];return(n,r,o,i,a)=>{let{latestValues:s}=i;const l=(kd(n)?Ad:vd)(r,s,a,n),c=function(e,t,n){const r={};for(const o in e)"values"===o&&"object"===typeof e.values||(xd(o)||!0===n&&bd(o)||!t&&!bd(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}(r,"string"===typeof n,t),u=n!==e.Fragment?{...c,...l,ref:o}:{},{children:d}=r,p=(0,e.useMemo)((()=>Mo(d)?d.get():d),[d]);return(0,e.createElement)(n,{...u,children:p})}}function Od(t){const n=(0,e.useRef)(null);return null===n.current&&(n.current=t()),n.current}const Dd=t=>(n,r)=>{const o=(0,e.useContext)(Qu),i=(0,e.useContext)(lc),a=()=>function(e,t,n,r){let{scrapeMotionValuesFromProps:o,createRenderState:i,onUpdate:a}=e;const s={latestValues:Ld(t,n,r,o),renderState:i()};return a&&(s.onMount=e=>a({props:t,current:e,...s}),s.onUpdate=e=>a(e)),s}(t,n,o,i);return r?a():Od(a)};function Ld(e,t,n,r){const o={},i=r(e,{});for(const p in i)o[p]=kc(i[p]);let{initial:a,animate:s}=e;const l=Xu(e),c=qu(e);t&&c&&!l&&!1!==e.inherit&&(void 0===a&&(a=t.initial),void 0===s&&(s=t.animate));let u=!!n&&!1===n.initial;u=u||!1===a;const d=u?s:a;if(d&&"boolean"!==typeof d&&!lo(d)){const t=Array.isArray(d)?d:[d];for(let n=0;n<t.length;n++){const r=uo(e,t[n]);if(r){const{transitionEnd:e,transition:t,...n}=r;for(const r in n){let e=n[r];if(Array.isArray(e)){e=e[u?e.length-1:0]}null!==e&&(o[r]=e)}for(const r in e)o[r]=e[r]}}}return o}function zd(e,t,n){const{style:r}=e,o={};for(const i in r)(Mo(r[i])||t.style&&Mo(t.style[i])||cd(i,e)||void 0!==n?.getValue(i)?.liveStyle)&&(o[i]=r[i]);return o}const Nd={useVisualState:Dd({scrapeMotionValuesFromProps:zd,createRenderState:hd})};function Fd(e,t){try{t.dimensions="function"===typeof e.getBBox?e.getBBox():e.getBoundingClientRect()}catch(Tv){t.dimensions={x:0,y:0,width:0,height:0}}}function Id(e,t,n,r){let{style:o,vars:i}=t;Object.assign(e.style,o,r&&r.getProjectionStyles(n));for(const a in i)e.style.setProperty(a,i[a])}const Md=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function $d(e,t,n,r){Id(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Md.has(o)?o:Bo(o),t.attrs[o])}function Bd(e,t,n){const r=zd(e,t,n);for(const o in e)if(Mo(e[o])||Mo(t[o])){r[-1!==ko.indexOf(o)?"attr"+o.charAt(0).toUpperCase()+o.substring(1):o]=e[o]}return r}const Vd=["x","y","width","height","cx","cy","r"],Ud={useVisualState:Dd({scrapeMotionValuesFromProps:Bd,createRenderState:_d,onUpdate:e=>{let{props:t,prevProps:n,current:r,renderState:o,latestValues:i}=e;if(!r)return;let a=!!t.drag;if(!a)for(const l in i)if(Eo.has(l)){a=!0;break}if(!a)return;let s=!n;if(n)for(let l=0;l<Vd.length;l++){const e=Vd[l];t[e]!==n[e]&&(s=!0)}s&&bo.read((()=>{Fd(r,o),bo.render((()=>{Pd(o,i,jd(r.tagName),t.transformTemplate),$d(r,o)}))}))}})};function Hd(e,t){return function(n){let{forwardMotionProps:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{forwardMotionProps:!1};return sd({...kd(n)?Ud:Nd,preloadedFeatures:e,useRender:Rd(r),createVisualElement:t,Component:n})}}const Wd={current:null},Yd={current:!1};const Kd=[...Ma,Vi,Gi],Qd=new WeakMap;const Xd=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class qd{scrapeMotionValuesFromProps(e,t,n){return{}}constructor(e){let{parent:t,props:n,presenceContext:r,reducedMotionConfig:o,blockInitialAnimation:i,visualState:a}=e,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.KeyframeResolver=ja,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const e=Oo.now();this.renderScheduledAt<e&&(this.renderScheduledAt=e,bo.render(this.render,!1,!0))};const{latestValues:l,renderState:c,onUpdate:u}=a;this.onUpdate=u,this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=r,this.depth=t?t.depth+1:0,this.reducedMotionConfig=o,this.options=s,this.blockInitialAnimation=Boolean(i),this.isControllingVariants=Xu(n),this.isVariantNode=qu(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:d,...p}=this.scrapeMotionValuesFromProps(n,{},this);for(const f in p){const e=p[f];void 0!==l[f]&&Mo(e)&&e.set(l[f],!1)}}mount(e){this.current=e,Qd.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach(((e,t)=>this.bindToMotionValue(t,e))),Yd.current||function(){if(Yd.current=!0,Zu)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>Wd.current=e.matches;e.addListener(t),t()}else Wd.current=!1}(),this.shouldReduceMotion="never"!==this.reducedMotionConfig&&("always"===this.reducedMotionConfig||Wd.current),this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){this.projection&&this.projection.unmount(),xo(this.notifyUpdate),xo(this.render),this.valueSubscriptions.forEach((e=>e())),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const e in this.events)this.events[e].clear();for(const e in this.features){const t=this.features[e];t&&(t.unmount(),t.isMounted=!1)}this.current=null}bindToMotionValue(e,t){this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)();const n=Eo.has(e);n&&this.onBindTransform&&this.onBindTransform();const r=t.on("change",(t=>{this.latestValues[e]=t,this.props.onUpdate&&bo.preRender(this.notifyUpdate),n&&this.projection&&(this.projection.isTransformDirty=!0)})),o=t.on("renderRequest",this.scheduleRender);let i;window.MotionCheckAppearSync&&(i=window.MotionCheckAppearSync(this,e,t)),this.valueSubscriptions.set(e,(()=>{r(),o(),i&&i(),t.owner&&t.stop()}))}sortNodePosition(e){return this.current&&this.sortInstanceNodePosition&&this.type===e.type?this.sortInstanceNodePosition(this.current,e.current):0}updateFeatures(){let e="animation";for(e in td){const t=td[e];if(!t)continue;const{isEnabled:n,Feature:r}=t;if(!this.features[e]&&r&&n(this.props)&&(this.features[e]=new r(this)),this.features[e]){const t=this.features[e];t.isMounted?t.update():(t.mount(),t.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):{x:{min:0,max:0},y:{min:0,max:0}}}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,t){this.latestValues[e]=t}update(e,t){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=t;for(let n=0;n<Xd.length;n++){const t=Xd[n];this.propEventSubscriptions[t]&&(this.propEventSubscriptions[t](),delete this.propEventSubscriptions[t]);const r=e["on"+t];r&&(this.propEventSubscriptions[t]=this.on(t,r))}this.prevMotionValues=function(e,t,n){for(const r in t){const o=t[r],i=n[r];if(Mo(o))e.addValue(r,o);else if(Mo(i))e.addValue(r,zo(o,{owner:e}));else if(i!==o)if(e.hasValue(r)){const t=e.getValue(r);!0===t.liveStyle?t.jump(o):t.hasAnimated||t.set(o)}else{const t=e.getStaticValue(r);e.addValue(r,zo(void 0!==t?t:o,{owner:e}))}}for(const r in n)void 0===t[r]&&e.removeValue(r);return t}(this,this.scrapeMotionValuesFromProps(e,this.prevProps,this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue(),this.onUpdate&&this.onUpdate(this)}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const t=this.getClosestVariantNode();if(t)return t.variantChildren&&t.variantChildren.add(e),()=>t.variantChildren.delete(e)}addValue(e,t){const n=this.values.get(e);t!==n&&(n&&this.removeValue(e),this.bindToMotionValue(e,t),this.values.set(e,t),this.latestValues[e]=t.get())}removeValue(e){this.values.delete(e);const t=this.valueSubscriptions.get(e);t&&(t(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,t){if(this.props.values&&this.props.values[e])return this.props.values[e];let n=this.values.get(e);return void 0===n&&void 0!==t&&(n=zo(null===t?void 0:t,{owner:this}),this.addValue(e,n)),n}readValue(e,t){let n=void 0===this.latestValues[e]&&this.current?this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options):this.latestValues[e];return void 0!==n&&null!==n&&("string"===typeof n&&(Aa(n)||wi(n))?n=parseFloat(n):!(e=>Kd.find(Ia(e)))(n)&&Gi.test(t)&&(n=la(e,t)),this.setBaseTarget(e,Mo(n)?n.get():n)),Mo(n)?n.get():n}setBaseTarget(e,t){this.baseTarget[e]=t}getBaseTarget(e){const{initial:t}=this.props;let n;if("string"===typeof t||"object"===typeof t){const r=uo(this.props,t,this.presenceContext?.custom);r&&(n=r[e])}if(t&&void 0!==n)return n;const r=this.getBaseTargetFromProps(this.props,e);return void 0===r||Mo(r)?void 0!==this.initialValues[e]&&void 0===n?void 0:this.baseTarget[e]:r}on(e,t){return this.events[e]||(this.events[e]=new _o),this.events[e].add(t)}notify(e){if(this.events[e]){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];this.events[e].notify(...n)}}}class Gd extends qd{constructor(){super(...arguments),this.KeyframeResolver=Ba}sortInstanceNodePosition(e,t){return 2&e.compareDocumentPosition(t)?1:-1}getBaseTargetFromProps(e,t){return e.style?e.style[t]:void 0}removeValueFromRenderState(e,t){let{vars:n,style:r}=t;delete n[e],delete r[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Mo(e)&&(this.childSubscription=e.on("change",(e=>{this.current&&(this.current.textContent=`${e}`)})))}}class Jd extends Gd{constructor(){super(...arguments),this.type="html",this.renderInstance=Id}readValueFromInstance(e,t){if(Eo.has(t))return((e,t)=>{const{transform:n="none"}=getComputedStyle(e);return ya(n,t)})(e,t);{const r=(n=e,window.getComputedStyle(n)),o=(Oa(t)?r.getPropertyValue(t):r[t])||0;return"string"===typeof o?o.trim():o}var n}measureInstanceViewportBox(e,t){let{transformPagePoint:n}=t;return Ml(e,n)}build(e,t,n){fd(e,t,n.transformTemplate)}scrapeMotionValuesFromProps(e,t,n){return zd(e,t,n)}}class Zd extends Gd{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kl,this.updateDimensions=()=>{this.current&&!this.renderState.dimensions&&Fd(this.current,this.renderState)}}getBaseTargetFromProps(e,t){return e[t]}readValueFromInstance(e,t){if(Eo.has(t)){const e=sa(t);return e&&e.default||0}return t=Md.has(t)?t:Bo(t),e.getAttribute(t)}scrapeMotionValuesFromProps(e,t,n){return Bd(e,t,n)}onBindTransform(){this.current&&!this.renderState.dimensions&&bo.postRender(this.updateDimensions)}build(e,t,n){Pd(e,t,this.isSVGTag,n.transformTemplate)}renderInstance(e,t,n,r){$d(e,t,0,r)}mount(e){this.isSVGTag=jd(e.tagName),super.mount(e)}}const ep=so(Hd({...cl,...Hu,...Tu,...Wu},((t,n)=>kd(t)?new Zd(n):new Jd(n,{allowProjection:t!==e.Fragment})))),tp=Math.min,np=Math.max,rp=Math.round,op=Math.floor,ip=e=>({x:e,y:e}),ap={left:"right",right:"left",bottom:"top",top:"bottom"},sp={start:"end",end:"start"};function lp(e,t,n){return np(e,tp(t,n))}function cp(e,t){return"function"===typeof e?e(t):e}function up(e){return e.split("-")[0]}function dp(e){return e.split("-")[1]}function pp(e){return"x"===e?"y":"x"}function fp(e){return"y"===e?"height":"width"}function hp(e){return["top","bottom"].includes(up(e))?"y":"x"}function mp(e){return pp(hp(e))}function gp(e){return e.replace(/start|end/g,(e=>sp[e]))}function vp(e){return e.replace(/left|right|bottom|top/g,(e=>ap[e]))}function yp(e){return"number"!==typeof e?function(e){return{top:0,right:0,bottom:0,left:0,...e}}(e):{top:e,right:e,bottom:e,left:e}}function bp(e){const{x:t,y:n,width:r,height:o}=e;return{width:r,height:o,top:n,left:t,right:t+r,bottom:n+o,x:t,y:n}}function xp(e,t,n){let{reference:r,floating:o}=e;const i=hp(t),a=mp(t),s=fp(a),l=up(t),c="y"===i,u=r.x+r.width/2-o.width/2,d=r.y+r.height/2-o.height/2,p=r[s]/2-o[s]/2;let f;switch(l){case"top":f={x:u,y:r.y-o.height};break;case"bottom":f={x:u,y:r.y+r.height};break;case"right":f={x:r.x+r.width,y:d};break;case"left":f={x:r.x-o.width,y:d};break;default:f={x:r.x,y:r.y}}switch(dp(t)){case"start":f[a]-=p*(n&&c?-1:1);break;case"end":f[a]+=p*(n&&c?-1:1)}return f}async function wp(e,t){var n;void 0===t&&(t={});const{x:r,y:o,platform:i,rects:a,elements:s,strategy:l}=e,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:d="floating",altBoundary:p=!1,padding:f=0}=cp(t,e),h=yp(f),m=s[p?"floating"===d?"reference":"floating":d],g=bp(await i.getClippingRect({element:null==(n=await(null==i.isElement?void 0:i.isElement(m)))||n?m:m.contextElement||await(null==i.getDocumentElement?void 0:i.getDocumentElement(s.floating)),boundary:c,rootBoundary:u,strategy:l})),v="floating"===d?{x:r,y:o,width:a.floating.width,height:a.floating.height}:a.reference,y=await(null==i.getOffsetParent?void 0:i.getOffsetParent(s.floating)),b=await(null==i.isElement?void 0:i.isElement(y))&&await(null==i.getScale?void 0:i.getScale(y))||{x:1,y:1},x=bp(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:s,rect:v,offsetParent:y,strategy:l}):v);return{top:(g.top-x.top+h.top)/b.y,bottom:(x.bottom-g.bottom+h.bottom)/b.y,left:(g.left-x.left+h.left)/b.x,right:(x.right-g.right+h.right)/b.x}}function Sp(){return"undefined"!==typeof window}function kp(e){return Tp(e)?(e.nodeName||"").toLowerCase():"#document"}function Ep(e){var t;return(null==e||null==(t=e.ownerDocument)?void 0:t.defaultView)||window}function Cp(e){var t;return null==(t=(Tp(e)?e.ownerDocument:e.document)||window.document)?void 0:t.documentElement}function Tp(e){return!!Sp()&&(e instanceof Node||e instanceof Ep(e).Node)}function Pp(e){return!!Sp()&&(e instanceof Element||e instanceof Ep(e).Element)}function _p(e){return!!Sp()&&(e instanceof HTMLElement||e instanceof Ep(e).HTMLElement)}function jp(e){return!(!Sp()||"undefined"===typeof ShadowRoot)&&(e instanceof ShadowRoot||e instanceof Ep(e).ShadowRoot)}function Ap(e){const{overflow:t,overflowX:n,overflowY:r,display:o}=Np(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(o)}function Rp(e){return["table","td","th"].includes(kp(e))}function Op(e){return[":popover-open",":modal"].some((t=>{try{return e.matches(t)}catch(Tv){return!1}}))}function Dp(e){const t=Lp(),n=Pp(e)?Np(e):e;return["transform","translate","scale","rotate","perspective"].some((e=>!!n[e]&&"none"!==n[e]))||!!n.containerType&&"normal"!==n.containerType||!t&&!!n.backdropFilter&&"none"!==n.backdropFilter||!t&&!!n.filter&&"none"!==n.filter||["transform","translate","scale","rotate","perspective","filter"].some((e=>(n.willChange||"").includes(e)))||["paint","layout","strict","content"].some((e=>(n.contain||"").includes(e)))}function Lp(){return!("undefined"===typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function zp(e){return["html","body","#document"].includes(kp(e))}function Np(e){return Ep(e).getComputedStyle(e)}function Fp(e){return Pp(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Ip(e){if("html"===kp(e))return e;const t=e.assignedSlot||e.parentNode||jp(e)&&e.host||Cp(e);return jp(t)?t.host:t}function Mp(e){const t=Ip(e);return zp(t)?e.ownerDocument?e.ownerDocument.body:e.body:_p(t)&&Ap(t)?t:Mp(t)}function $p(e,t,n){var r;void 0===t&&(t=[]),void 0===n&&(n=!0);const o=Mp(e),i=o===(null==(r=e.ownerDocument)?void 0:r.body),a=Ep(o);if(i){const e=Bp(a);return t.concat(a,a.visualViewport||[],Ap(o)?o:[],e&&n?$p(e):[])}return t.concat(o,$p(o,[],n))}function Bp(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Vp(e){const t=Np(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const o=_p(e),i=o?e.offsetWidth:n,a=o?e.offsetHeight:r,s=rp(n)!==i||rp(r)!==a;return s&&(n=i,r=a),{width:n,height:r,$:s}}function Up(e){return Pp(e)?e:e.contextElement}function Hp(e){const t=Up(e);if(!_p(t))return ip(1);const n=t.getBoundingClientRect(),{width:r,height:o,$:i}=Vp(t);let a=(i?rp(n.width):n.width)/r,s=(i?rp(n.height):n.height)/o;return a&&Number.isFinite(a)||(a=1),s&&Number.isFinite(s)||(s=1),{x:a,y:s}}const Wp=ip(0);function Yp(e){const t=Ep(e);return Lp()&&t.visualViewport?{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}:Wp}function Kp(e,t,n,r){void 0===t&&(t=!1),void 0===n&&(n=!1);const o=e.getBoundingClientRect(),i=Up(e);let a=ip(1);t&&(r?Pp(r)&&(a=Hp(r)):a=Hp(e));const s=function(e,t,n){return void 0===t&&(t=!1),!(!n||t&&n!==Ep(e))&&t}(i,n,r)?Yp(i):ip(0);let l=(o.left+s.x)/a.x,c=(o.top+s.y)/a.y,u=o.width/a.x,d=o.height/a.y;if(i){const e=Ep(i),t=r&&Pp(r)?Ep(r):r;let n=e,o=Bp(n);for(;o&&r&&t!==n;){const e=Hp(o),t=o.getBoundingClientRect(),r=Np(o),i=t.left+(o.clientLeft+parseFloat(r.paddingLeft))*e.x,a=t.top+(o.clientTop+parseFloat(r.paddingTop))*e.y;l*=e.x,c*=e.y,u*=e.x,d*=e.y,l+=i,c+=a,n=Ep(o),o=Bp(n)}}return bp({width:u,height:d,x:l,y:c})}function Qp(e,t){const n=Fp(e).scrollLeft;return t?t.left+n:Kp(Cp(e)).left+n}function Xp(e,t,n){void 0===n&&(n=!1);const r=e.getBoundingClientRect();return{x:r.left+t.scrollLeft-(n?0:Qp(e,r)),y:r.top+t.scrollTop}}function qp(e,t,n){let r;if("viewport"===t)r=function(e,t){const n=Ep(e),r=Cp(e),o=n.visualViewport;let i=r.clientWidth,a=r.clientHeight,s=0,l=0;if(o){i=o.width,a=o.height;const e=Lp();(!e||e&&"fixed"===t)&&(s=o.offsetLeft,l=o.offsetTop)}return{width:i,height:a,x:s,y:l}}(e,n);else if("document"===t)r=function(e){const t=Cp(e),n=Fp(e),r=e.ownerDocument.body,o=np(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),i=np(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let a=-n.scrollLeft+Qp(e);const s=-n.scrollTop;return"rtl"===Np(r).direction&&(a+=np(t.clientWidth,r.clientWidth)-o),{width:o,height:i,x:a,y:s}}(Cp(e));else if(Pp(t))r=function(e,t){const n=Kp(e,!0,"fixed"===t),r=n.top+e.clientTop,o=n.left+e.clientLeft,i=_p(e)?Hp(e):ip(1);return{width:e.clientWidth*i.x,height:e.clientHeight*i.y,x:o*i.x,y:r*i.y}}(t,n);else{const n=Yp(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return bp(r)}function Gp(e,t){const n=Ip(e);return!(n===t||!Pp(n)||zp(n))&&("fixed"===Np(n).position||Gp(n,t))}function Jp(e,t,n){const r=_p(t),o=Cp(t),i="fixed"===n,a=Kp(e,!0,i,t);let s={scrollLeft:0,scrollTop:0};const l=ip(0);if(r||!r&&!i)if(("body"!==kp(t)||Ap(o))&&(s=Fp(t)),r){const e=Kp(t,!0,i,t);l.x=e.x+t.clientLeft,l.y=e.y+t.clientTop}else o&&(l.x=Qp(o));const c=!o||r||i?ip(0):Xp(o,s);return{x:a.left+s.scrollLeft-l.x-c.x,y:a.top+s.scrollTop-l.y-c.y,width:a.width,height:a.height}}function Zp(e){return"static"===Np(e).position}function ef(e,t){if(!_p(e)||"fixed"===Np(e).position)return null;if(t)return t(e);let n=e.offsetParent;return Cp(e)===n&&(n=n.ownerDocument.body),n}function tf(e,t){const n=Ep(e);if(Op(e))return n;if(!_p(e)){let t=Ip(e);for(;t&&!zp(t);){if(Pp(t)&&!Zp(t))return t;t=Ip(t)}return n}let r=ef(e,t);for(;r&&Rp(r)&&Zp(r);)r=ef(r,t);return r&&zp(r)&&Zp(r)&&!Dp(r)?n:r||function(e){let t=Ip(e);for(;_p(t)&&!zp(t);){if(Dp(t))return t;if(Op(t))return null;t=Ip(t)}return null}(e)||n}const nf={convertOffsetParentRelativeRectToViewportRelativeRect:function(e){let{elements:t,rect:n,offsetParent:r,strategy:o}=e;const i="fixed"===o,a=Cp(r),s=!!t&&Op(t.floating);if(r===a||s&&i)return n;let l={scrollLeft:0,scrollTop:0},c=ip(1);const u=ip(0),d=_p(r);if((d||!d&&!i)&&(("body"!==kp(r)||Ap(a))&&(l=Fp(r)),_p(r))){const e=Kp(r);c=Hp(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}const p=!a||d||i?ip(0):Xp(a,l,!0);return{width:n.width*c.x,height:n.height*c.y,x:n.x*c.x-l.scrollLeft*c.x+u.x+p.x,y:n.y*c.y-l.scrollTop*c.y+u.y+p.y}},getDocumentElement:Cp,getClippingRect:function(e){let{element:t,boundary:n,rootBoundary:r,strategy:o}=e;const i=[..."clippingAncestors"===n?Op(t)?[]:function(e,t){const n=t.get(e);if(n)return n;let r=$p(e,[],!1).filter((e=>Pp(e)&&"body"!==kp(e))),o=null;const i="fixed"===Np(e).position;let a=i?Ip(e):e;for(;Pp(a)&&!zp(a);){const t=Np(a),n=Dp(a);n||"fixed"!==t.position||(o=null),(i?!n&&!o:!n&&"static"===t.position&&o&&["absolute","fixed"].includes(o.position)||Ap(a)&&!n&&Gp(e,a))?r=r.filter((e=>e!==a)):o=t,a=Ip(a)}return t.set(e,r),r}(t,this._c):[].concat(n),r],a=i[0],s=i.reduce(((e,n)=>{const r=qp(t,n,o);return e.top=np(r.top,e.top),e.right=tp(r.right,e.right),e.bottom=tp(r.bottom,e.bottom),e.left=np(r.left,e.left),e}),qp(t,a,o));return{width:s.right-s.left,height:s.bottom-s.top,x:s.left,y:s.top}},getOffsetParent:tf,getElementRects:async function(e){const t=this.getOffsetParent||tf,n=this.getDimensions,r=await n(e.floating);return{reference:Jp(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}},getClientRects:function(e){return Array.from(e.getClientRects())},getDimensions:function(e){const{width:t,height:n}=Vp(e);return{width:t,height:n}},getScale:Hp,isElement:Pp,isRTL:function(e){return"rtl"===Np(e).direction}};function rf(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function of(e,t,n,r){void 0===r&&(r={});const{ancestorScroll:o=!0,ancestorResize:i=!0,elementResize:a="function"===typeof ResizeObserver,layoutShift:s="function"===typeof IntersectionObserver,animationFrame:l=!1}=r,c=Up(e),u=o||i?[...c?$p(c):[],...$p(t)]:[];u.forEach((e=>{o&&e.addEventListener("scroll",n,{passive:!0}),i&&e.addEventListener("resize",n)}));const d=c&&s?function(e,t){let n,r=null;const o=Cp(e);function i(){var e;clearTimeout(n),null==(e=r)||e.disconnect(),r=null}return function a(s,l){void 0===s&&(s=!1),void 0===l&&(l=1),i();const c=e.getBoundingClientRect(),{left:u,top:d,width:p,height:f}=c;if(s||t(),!p||!f)return;const h={rootMargin:-op(d)+"px "+-op(o.clientWidth-(u+p))+"px "+-op(o.clientHeight-(d+f))+"px "+-op(u)+"px",threshold:np(0,tp(1,l))||1};let m=!0;function g(t){const r=t[0].intersectionRatio;if(r!==l){if(!m)return a();r?a(!1,r):n=setTimeout((()=>{a(!1,1e-7)}),1e3)}1!==r||rf(c,e.getBoundingClientRect())||a(),m=!1}try{r=new IntersectionObserver(g,{...h,root:o.ownerDocument})}catch(Tv){r=new IntersectionObserver(g,h)}r.observe(e)}(!0),i}(c,n):null;let p,f=-1,h=null;a&&(h=new ResizeObserver((e=>{let[r]=e;r&&r.target===c&&h&&(h.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame((()=>{var e;null==(e=h)||e.observe(t)}))),n()})),c&&!l&&h.observe(c),h.observe(t));let m=l?Kp(e):null;return l&&function t(){const r=Kp(e);m&&!rf(m,r)&&n();m=r,p=requestAnimationFrame(t)}(),n(),()=>{var e;u.forEach((e=>{o&&e.removeEventListener("scroll",n),i&&e.removeEventListener("resize",n)})),null==d||d(),null==(e=h)||e.disconnect(),h=null,l&&cancelAnimationFrame(p)}}const af=function(e){return void 0===e&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:o,y:i,placement:a,middlewareData:s}=t,l=await async function(e,t){const{placement:n,platform:r,elements:o}=e,i=await(null==r.isRTL?void 0:r.isRTL(o.floating)),a=up(n),s=dp(n),l="y"===hp(n),c=["left","top"].includes(a)?-1:1,u=i&&l?-1:1,d=cp(t,e);let{mainAxis:p,crossAxis:f,alignmentAxis:h}="number"===typeof d?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&"number"===typeof h&&(f="end"===s?-1*h:h),l?{x:f*u,y:p*c}:{x:p*c,y:f*u}}(t,e);return a===(null==(n=s.offset)?void 0:n.placement)&&null!=(r=s.arrow)&&r.alignmentOffset?{}:{x:o+l.x,y:i+l.y,data:{...l,placement:a}}}}},sf=function(e){return void 0===e&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:o}=t,{mainAxis:i=!0,crossAxis:a=!1,limiter:s={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=cp(e,t),c={x:n,y:r},u=await wp(t,l),d=hp(up(o)),p=pp(d);let f=c[p],h=c[d];if(i){const e="y"===p?"bottom":"right";f=lp(f+u["y"===p?"top":"left"],f,f-u[e])}if(a){const e="y"===d?"bottom":"right";h=lp(h+u["y"===d?"top":"left"],h,h-u[e])}const m=s.fn({...t,[p]:f,[d]:h});return{...m,data:{x:m.x-n,y:m.y-r,enabled:{[p]:i,[d]:a}}}}}},lf=function(e){return void 0===e&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:o,middlewareData:i,rects:a,initialPlacement:s,platform:l,elements:c}=t,{mainAxis:u=!0,crossAxis:d=!0,fallbackPlacements:p,fallbackStrategy:f="bestFit",fallbackAxisSideDirection:h="none",flipAlignment:m=!0,...g}=cp(e,t);if(null!=(n=i.arrow)&&n.alignmentOffset)return{};const v=up(o),y=hp(s),b=up(s)===s,x=await(null==l.isRTL?void 0:l.isRTL(c.floating)),w=p||(b||!m?[vp(s)]:function(e){const t=vp(e);return[gp(e),t,gp(t)]}(s)),S="none"!==h;!p&&S&&w.push(...function(e,t,n,r){const o=dp(e);let i=function(e,t,n){const r=["left","right"],o=["right","left"],i=["top","bottom"],a=["bottom","top"];switch(e){case"top":case"bottom":return n?t?o:r:t?r:o;case"left":case"right":return t?i:a;default:return[]}}(up(e),"start"===n,r);return o&&(i=i.map((e=>e+"-"+o)),t&&(i=i.concat(i.map(gp)))),i}(s,m,h,x));const k=[s,...w],E=await wp(t,g),C=[];let T=(null==(r=i.flip)?void 0:r.overflows)||[];if(u&&C.push(E[v]),d){const e=function(e,t,n){void 0===n&&(n=!1);const r=dp(e),o=mp(e),i=fp(o);let a="x"===o?r===(n?"end":"start")?"right":"left":"start"===r?"bottom":"top";return t.reference[i]>t.floating[i]&&(a=vp(a)),[a,vp(a)]}(o,a,x);C.push(E[e[0]],E[e[1]])}if(T=[...T,{placement:o,overflows:C}],!C.every((e=>e<=0))){var P,_;const e=((null==(P=i.flip)?void 0:P.index)||0)+1,t=k[e];if(t)return{data:{index:e,overflows:T},reset:{placement:t}};let n=null==(_=T.filter((e=>e.overflows[0]<=0)).sort(((e,t)=>e.overflows[1]-t.overflows[1]))[0])?void 0:_.placement;if(!n)switch(f){case"bestFit":{var j;const e=null==(j=T.filter((e=>{if(S){const t=hp(e.placement);return t===y||"y"===t}return!0})).map((e=>[e.placement,e.overflows.filter((e=>e>0)).reduce(((e,t)=>e+t),0)])).sort(((e,t)=>e[1]-t[1]))[0])?void 0:j[0];e&&(n=e);break}case"initialPlacement":n=s}if(o!==n)return{reset:{placement:n}}}return{}}}},cf=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:o,rects:i,platform:a,elements:s,middlewareData:l}=t,{element:c,padding:u=0}=cp(e,t)||{};if(null==c)return{};const d=yp(u),p={x:n,y:r},f=mp(o),h=fp(f),m=await a.getDimensions(c),g="y"===f,v=g?"top":"left",y=g?"bottom":"right",b=g?"clientHeight":"clientWidth",x=i.reference[h]+i.reference[f]-p[f]-i.floating[h],w=p[f]-i.reference[f],S=await(null==a.getOffsetParent?void 0:a.getOffsetParent(c));let k=S?S[b]:0;k&&await(null==a.isElement?void 0:a.isElement(S))||(k=s.floating[b]||i.floating[h]);const E=x/2-w/2,C=k/2-m[h]/2-1,T=tp(d[v],C),P=tp(d[y],C),_=T,j=k-m[h]-P,A=k/2-m[h]/2+E,R=lp(_,A,j),O=!l.arrow&&null!=dp(o)&&A!==R&&i.reference[h]/2-(A<_?T:P)-m[h]/2<0,D=O?A<_?A-_:A-j:0;return{[f]:p[f]+D,data:{[f]:R,centerOffset:A-R-D,...O&&{alignmentOffset:D}},reset:O}}}),uf=(e,t,n)=>{const r=new Map,o={platform:nf,...n},i={...o.platform,_c:r};return(async(e,t,n)=>{const{placement:r="bottom",strategy:o="absolute",middleware:i=[],platform:a}=n,s=i.filter(Boolean),l=await(null==a.isRTL?void 0:a.isRTL(t));let c=await a.getElementRects({reference:e,floating:t,strategy:o}),{x:u,y:d}=xp(c,r,l),p=r,f={},h=0;for(let m=0;m<s.length;m++){const{name:n,fn:i}=s[m],{x:g,y:v,data:y,reset:b}=await i({x:u,y:d,initialPlacement:r,placement:p,strategy:o,middlewareData:f,rects:c,platform:a,elements:{reference:e,floating:t}});u=null!=g?g:u,d=null!=v?v:d,f={...f,[n]:{...f[n],...y}},b&&h<=50&&(h++,"object"===typeof b&&(b.placement&&(p=b.placement),b.rects&&(c=!0===b.rects?await a.getElementRects({reference:e,floating:t,strategy:o}):b.rects),({x:u,y:d}=xp(c,p,l))),m=-1)}return{x:u,y:d,placement:p,strategy:o,middlewareData:f}})(e,t,{...o,platform:i})};var df=n(139);const pf="react-tooltip-core-styles",ff="react-tooltip-base-styles",hf={core:!1,base:!1};function mf(e){let{css:t,id:n=ff,type:r="base",ref:o}=e;var i,a;if(!t||"undefined"==typeof document||hf[r])return;if("core"===r&&"undefined"!=typeof process&&(null===(i=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"})||void 0===i?void 0:i.REACT_TOOLTIP_DISABLE_CORE_STYLES))return;if("base"!==r&&"undefined"!=typeof process&&(null===(a=null===process||void 0===process?void 0:{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_SPOTIFY_REFRESH_TOKEN:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA",REACT_APP_API_URL:"https://tcg-portfolio-api.vercel.app",REACT_APP_SPOTIFY_CLIENT_ID:"246b829d86264eb2b035dee9801de7a0",REACT_APP_SPOTIFY_CLIENT_SECRET:"6a69202a17dc4601ad5f5849fe7e31e0"})||void 0===a?void 0:a.REACT_TOOLTIP_DISABLE_BASE_STYLES))return;"core"===r&&(n=pf),o||(o={});const{insertAt:s}=o;if(document.getElementById(n))return;const l=document.head||document.getElementsByTagName("head")[0],c=document.createElement("style");c.id=n,c.type="text/css","top"===s&&l.firstChild?l.insertBefore(c,l.firstChild):l.appendChild(c),c.styleSheet?c.styleSheet.cssText=t:c.appendChild(document.createTextNode(t)),hf[r]=!0}const gf=async e=>{let{elementReference:t=null,tooltipReference:n=null,tooltipArrowReference:r=null,place:o="top",offset:i=10,strategy:a="absolute",middlewares:s=[af(Number(i)),lf({fallbackAxisSideDirection:"start"}),sf({padding:5})],border:l}=e;if(!t)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};if(null===n)return{tooltipStyles:{},tooltipArrowStyles:{},place:o};const c=s;return r?(c.push(cf({element:r,padding:5})),uf(t,n,{placement:o,strategy:a,middleware:c}).then((e=>{let{x:t,y:n,placement:r,middlewareData:o}=e;var i,a;const s={left:`${t}px`,top:`${n}px`,border:l},{x:c,y:u}=null!==(i=o.arrow)&&void 0!==i?i:{x:0,y:0},d=null!==(a={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]])&&void 0!==a?a:"bottom",p=l&&{borderBottom:l,borderRight:l};let f=0;if(l){const e=`${l}`.match(/(\d+)px/);f=(null==e?void 0:e[1])?Number(e[1]):1}return{tooltipStyles:s,tooltipArrowStyles:{left:null!=c?`${c}px`:"",top:null!=u?`${u}px`:"",right:"",bottom:"",...p,[d]:`-${4+f}px`},place:r}}))):uf(t,n,{placement:"bottom",strategy:a,middleware:c}).then((e=>{let{x:t,y:n,placement:r}=e;return{tooltipStyles:{left:`${t}px`,top:`${n}px`},tooltipArrowStyles:{},place:r}}))},vf=(e,t)=>!("CSS"in window&&"supports"in window.CSS)||window.CSS.supports(e,t),yf=(e,t,n)=>{let r=null;const o=function(){for(var o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];const s=()=>{r=null,n||e.apply(this,i)};n&&!r&&(e.apply(this,i),r=setTimeout(s,t)),n||(r&&clearTimeout(r),r=setTimeout(s,t))};return o.cancel=()=>{r&&(clearTimeout(r),r=null)},o},bf=e=>null!==e&&!Array.isArray(e)&&"object"==typeof e,xf=(e,t)=>{if(e===t)return!0;if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every(((e,n)=>xf(e,t[n])));if(Array.isArray(e)!==Array.isArray(t))return!1;if(!bf(e)||!bf(t))return e===t;const n=Object.keys(e),r=Object.keys(t);return n.length===r.length&&n.every((n=>xf(e[n],t[n])))},wf=e=>{if(!(e instanceof HTMLElement||e instanceof SVGElement))return!1;const t=getComputedStyle(e);return["overflow","overflow-x","overflow-y"].some((e=>{const n=t.getPropertyValue(e);return"auto"===n||"scroll"===n}))},Sf=e=>{if(!e)return null;let t=e.parentElement;for(;t;){if(wf(t))return t;t=t.parentElement}return document.scrollingElement||document.documentElement},kf="undefined"!=typeof window?e.useLayoutEffect:e.useEffect,Ef=e=>{e.current&&(clearTimeout(e.current),e.current=null)},Cf="DEFAULT_TOOLTIP_ID",Tf={anchorRefs:new Set,activeAnchor:{current:null},attach:()=>{},detach:()=>{},setActiveAnchor:()=>{}},Pf=(0,e.createContext)({getTooltipData:()=>Tf});function _f(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Cf;return(0,e.useContext)(Pf).getTooltipData(t)}var jf={tooltip:"core-styles-module_tooltip__3vRRp",fixed:"core-styles-module_fixed__pcSol",arrow:"core-styles-module_arrow__cvMwQ",noArrow:"core-styles-module_noArrow__xock6",clickable:"core-styles-module_clickable__ZuTTB",show:"core-styles-module_show__Nt9eE",closing:"core-styles-module_closing__sGnxF"},Af={tooltip:"styles-module_tooltip__mnnfp",arrow:"styles-module_arrow__K0L3T",dark:"styles-module_dark__xNqje",light:"styles-module_light__Z6W-X",success:"styles-module_success__A2AKt",warning:"styles-module_warning__SCK0X",error:"styles-module_error__JvumD",info:"styles-module_info__BWdHW"};const Rf=t=>{let{forwardRef:n,id:r,className:o,classNameArrow:i,variant:a="dark",anchorId:s,anchorSelect:l,place:c="top",offset:u=10,events:d=["hover"],openOnClick:p=!1,positionStrategy:f="absolute",middlewares:h,wrapper:m,delayShow:g=0,delayHide:v=0,float:y=!1,hidden:b=!1,noArrow:x=!1,clickable:w=!1,closeOnEsc:S=!1,closeOnScroll:k=!1,closeOnResize:E=!1,openEvents:C,closeEvents:T,globalCloseEvents:P,imperativeModeOnly:_,style:j,position:A,afterShow:R,afterHide:O,disableTooltip:D,content:L,contentWrapperRef:z,isOpen:N,defaultIsOpen:F=!1,setIsOpen:I,activeAnchor:M,setActiveAnchor:$,border:B,opacity:V,arrowColor:U,role:H="tooltip"}=t;var W;const Y=(0,e.useRef)(null),K=(0,e.useRef)(null),Q=(0,e.useRef)(null),X=(0,e.useRef)(null),q=(0,e.useRef)(null),[G,J]=(0,e.useState)({tooltipStyles:{},tooltipArrowStyles:{},place:c}),[Z,ee]=(0,e.useState)(!1),[te,ne]=(0,e.useState)(!1),[re,oe]=(0,e.useState)(null),ie=(0,e.useRef)(!1),ae=(0,e.useRef)(null),{anchorRefs:se,setActiveAnchor:le}=_f(r),ce=(0,e.useRef)(!1),[ue,de]=(0,e.useState)([]),pe=(0,e.useRef)(!1),fe=p||d.includes("click"),he=fe||(null==C?void 0:C.click)||(null==C?void 0:C.dblclick)||(null==C?void 0:C.mousedown),me=C?{...C}:{mouseover:!0,focus:!0,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1};!C&&fe&&Object.assign(me,{mouseenter:!1,focus:!1,mouseover:!1,click:!0});const ge=T?{...T}:{mouseout:!0,blur:!0,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1};!T&&fe&&Object.assign(ge,{mouseleave:!1,blur:!1,mouseout:!1});const ve=P?{...P}:{escape:S||!1,scroll:k||!1,resize:E||!1,clickOutsideAnchor:he||!1};_&&(Object.assign(me,{mouseover:!1,focus:!1,mouseenter:!1,click:!1,dblclick:!1,mousedown:!1}),Object.assign(ge,{mouseout:!1,blur:!1,mouseleave:!1,click:!1,dblclick:!1,mouseup:!1}),Object.assign(ve,{escape:!1,scroll:!1,resize:!1,clickOutsideAnchor:!1})),kf((()=>(pe.current=!0,()=>{pe.current=!1})),[]);const ye=e=>{pe.current&&(e&&ne(!0),setTimeout((()=>{pe.current&&(null==I||I(e),void 0===N&&ee(e))}),10))};(0,e.useEffect)((()=>{if(void 0===N)return()=>null;N&&ne(!0);const e=setTimeout((()=>{ee(N)}),10);return()=>{clearTimeout(e)}}),[N]),(0,e.useEffect)((()=>{if(Z!==ie.current)if(Ef(q),ie.current=Z,Z)null==R||R();else{const e=(()=>{const e=getComputedStyle(document.body).getPropertyValue("--rt-transition-show-delay").match(/^([\d.]+)(ms|s)$/);if(!e)return 0;const[,t,n]=e;return Number(t)*("ms"===n?1:1e3)})();q.current=setTimeout((()=>{ne(!1),oe(null),null==O||O()}),e+25)}}),[Z]);const be=e=>{J((t=>xf(t,e)?t:e))},xe=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g;Ef(Q),te?ye(!0):Q.current=setTimeout((()=>{ye(!0)}),e)},we=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v;Ef(X),X.current=setTimeout((()=>{ce.current||ye(!1)}),e)},Se=e=>{var t;if(!e)return;const n=null!==(t=e.currentTarget)&&void 0!==t?t:e.target;if(!(null==n?void 0:n.isConnected))return $(null),void le({current:null});g?xe():ye(!0),$(n),le({current:n}),Ef(X)},ke=()=>{w?we(v||100):v?we():ye(!1),Ef(Q)},Ee=e=>{let{x:t,y:n}=e;var r;const o={getBoundingClientRect:()=>({x:t,y:n,width:0,height:0,top:n,left:t,right:t,bottom:n})};gf({place:null!==(r=null==re?void 0:re.place)&&void 0!==r?r:c,offset:u,elementReference:o,tooltipReference:Y.current,tooltipArrowReference:K.current,strategy:f,middlewares:h,border:B}).then((e=>{be(e)}))},Ce=e=>{if(!e)return;const t=e,n={x:t.clientX,y:t.clientY};Ee(n),ae.current=n},Te=e=>{var t;if(!Z)return;const n=e.target;n.isConnected&&((null===(t=Y.current)||void 0===t?void 0:t.contains(n))||[document.querySelector(`[id='${s}']`),...ue].some((e=>null==e?void 0:e.contains(n)))||(ye(!1),Ef(Q)))},Pe=yf(Se,50,!0),_e=yf(ke,50,!0),je=e=>{_e.cancel(),Pe(e)},Ae=()=>{Pe.cancel(),_e()},Re=(0,e.useCallback)((()=>{var e,t;const n=null!==(e=null==re?void 0:re.position)&&void 0!==e?e:A;n?Ee(n):y?ae.current&&Ee(ae.current):(null==M?void 0:M.isConnected)&&gf({place:null!==(t=null==re?void 0:re.place)&&void 0!==t?t:c,offset:u,elementReference:M,tooltipReference:Y.current,tooltipArrowReference:K.current,strategy:f,middlewares:h,border:B}).then((e=>{pe.current&&be(e)}))}),[Z,M,L,j,c,null==re?void 0:re.place,u,f,A,null==re?void 0:re.position,y]);(0,e.useEffect)((()=>{var e,t;const n=new Set(se);ue.forEach((e=>{(null==D?void 0:D(e))||n.add({current:e})}));const r=document.querySelector(`[id='${s}']`);r&&!(null==D?void 0:D(r))&&n.add({current:r});const o=()=>{ye(!1)},i=Sf(M),a=Sf(Y.current);ve.scroll&&(window.addEventListener("scroll",o),null==i||i.addEventListener("scroll",o),null==a||a.addEventListener("scroll",o));let l=null;ve.resize?window.addEventListener("resize",o):M&&Y.current&&(l=of(M,Y.current,Re,{ancestorResize:!0,elementResize:!0,layoutShift:!0}));const c=e=>{"Escape"===e.key&&ye(!1)};ve.escape&&window.addEventListener("keydown",c),ve.clickOutsideAnchor&&window.addEventListener("click",Te);const u=[],d=e=>Boolean((null==e?void 0:e.target)&&(null==M?void 0:M.contains(e.target))),p=e=>{Z&&d(e)||Se(e)},f=e=>{Z&&d(e)&&ke()},h=["mouseover","mouseout","mouseenter","mouseleave","focus","blur"],m=["click","dblclick","mousedown","mouseup"];Object.entries(me).forEach((e=>{let[t,n]=e;n&&(h.includes(t)?u.push({event:t,listener:je}):m.includes(t)&&u.push({event:t,listener:p}))})),Object.entries(ge).forEach((e=>{let[t,n]=e;n&&(h.includes(t)?u.push({event:t,listener:Ae}):m.includes(t)&&u.push({event:t,listener:f}))})),y&&u.push({event:"pointermove",listener:Ce});const g=()=>{ce.current=!0},v=()=>{ce.current=!1,ke()},b=w&&(ge.mouseout||ge.mouseleave);return b&&(null===(e=Y.current)||void 0===e||e.addEventListener("mouseover",g),null===(t=Y.current)||void 0===t||t.addEventListener("mouseout",v)),u.forEach((e=>{let{event:t,listener:r}=e;n.forEach((e=>{var n;null===(n=e.current)||void 0===n||n.addEventListener(t,r)}))})),()=>{var e,t;ve.scroll&&(window.removeEventListener("scroll",o),null==i||i.removeEventListener("scroll",o),null==a||a.removeEventListener("scroll",o)),ve.resize?window.removeEventListener("resize",o):null==l||l(),ve.clickOutsideAnchor&&window.removeEventListener("click",Te),ve.escape&&window.removeEventListener("keydown",c),b&&(null===(e=Y.current)||void 0===e||e.removeEventListener("mouseover",g),null===(t=Y.current)||void 0===t||t.removeEventListener("mouseout",v)),u.forEach((e=>{let{event:t,listener:r}=e;n.forEach((e=>{var n;null===(n=e.current)||void 0===n||n.removeEventListener(t,r)}))}))}}),[M,Re,te,se,ue,C,T,P,fe,g,v]),(0,e.useEffect)((()=>{var e,t;let n=null!==(t=null!==(e=null==re?void 0:re.anchorSelect)&&void 0!==e?e:l)&&void 0!==t?t:"";!n&&r&&(n=`[data-tooltip-id='${r.replace(/'/g,"\\'")}']`);const o=new MutationObserver((e=>{const t=[],o=[];e.forEach((e=>{if("attributes"===e.type&&"data-tooltip-id"===e.attributeName&&(e.target.getAttribute("data-tooltip-id")===r?t.push(e.target):e.oldValue===r&&o.push(e.target)),"childList"===e.type){if(M){const t=[...e.removedNodes].filter((e=>1===e.nodeType));if(n)try{o.push(...t.filter((e=>e.matches(n)))),o.push(...t.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}t.some((e=>{var t;return!!(null===(t=null==e?void 0:e.contains)||void 0===t?void 0:t.call(e,M))&&(ne(!1),ye(!1),$(null),Ef(Q),Ef(X),!0)}))}if(n)try{const r=[...e.addedNodes].filter((e=>1===e.nodeType));t.push(...r.filter((e=>e.matches(n)))),t.push(...r.flatMap((e=>[...e.querySelectorAll(n)])))}catch(e){}}})),(t.length||o.length)&&de((e=>[...e.filter((e=>!o.includes(e))),...t]))}));return o.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["data-tooltip-id"],attributeOldValue:!0}),()=>{o.disconnect()}}),[r,l,null==re?void 0:re.anchorSelect,M]),(0,e.useEffect)((()=>{Re()}),[Re]),(0,e.useEffect)((()=>{if(!(null==z?void 0:z.current))return()=>null;const e=new ResizeObserver((()=>{setTimeout((()=>Re()))}));return e.observe(z.current),()=>{e.disconnect()}}),[L,null==z?void 0:z.current]),(0,e.useEffect)((()=>{var e;const t=document.querySelector(`[id='${s}']`),n=[...ue,t];M&&n.includes(M)||$(null!==(e=ue[0])&&void 0!==e?e:t)}),[s,ue,M]),(0,e.useEffect)((()=>(F&&ye(!0),()=>{Ef(Q),Ef(X)})),[]),(0,e.useEffect)((()=>{var e;let t=null!==(e=null==re?void 0:re.anchorSelect)&&void 0!==e?e:l;if(!t&&r&&(t=`[data-tooltip-id='${r.replace(/'/g,"\\'")}']`),t)try{const e=Array.from(document.querySelectorAll(t));de(e)}catch(e){de([])}}),[r,l,null==re?void 0:re.anchorSelect]),(0,e.useEffect)((()=>{Q.current&&(Ef(Q),xe(g))}),[g]);const Oe=null!==(W=null==re?void 0:re.content)&&void 0!==W?W:L,De=Z&&Object.keys(G.tooltipStyles).length>0;return(0,e.useImperativeHandle)(n,(()=>({open:e=>{if(null==e?void 0:e.anchorSelect)try{document.querySelector(e.anchorSelect)}catch(n){return void console.warn(`[react-tooltip] "${e.anchorSelect}" is not a valid CSS selector`)}oe(null!=e?e:null),(null==e?void 0:e.delay)?xe(e.delay):ye(!0)},close:e=>{(null==e?void 0:e.delay)?we(e.delay):ye(!1)},activeAnchor:M,place:G.place,isOpen:Boolean(te&&!b&&Oe&&De)}))),te&&!b&&Oe?e.createElement(m,{id:r,role:H,className:df("react-tooltip",jf.tooltip,Af.tooltip,Af[a],o,`react-tooltip__place-${G.place}`,jf[De?"show":"closing"],De?"react-tooltip__show":"react-tooltip__closing","fixed"===f&&jf.fixed,w&&jf.clickable),onTransitionEnd:e=>{Ef(q),Z||"opacity"!==e.propertyName||(ne(!1),oe(null),null==O||O())},style:{...j,...G.tooltipStyles,opacity:void 0!==V&&De?V:void 0},ref:Y},Oe,e.createElement(m,{className:df("react-tooltip-arrow",jf.arrow,Af.arrow,i,x&&jf.noArrow),style:{...G.tooltipArrowStyles,background:U?`linear-gradient(to right bottom, transparent 50%, ${U} 50%)`:void 0},ref:K})):null},Of=t=>{let{content:n}=t;return e.createElement("span",{dangerouslySetInnerHTML:{__html:n}})},Df=e.forwardRef(((t,n)=>{let{id:r,anchorId:o,anchorSelect:i,content:a,html:s,render:l,className:c,classNameArrow:u,variant:d="dark",place:p="top",offset:f=10,wrapper:h="div",children:m=null,events:g=["hover"],openOnClick:v=!1,positionStrategy:y="absolute",middlewares:b,delayShow:x=0,delayHide:w=0,float:S=!1,hidden:k=!1,noArrow:E=!1,clickable:C=!1,closeOnEsc:T=!1,closeOnScroll:P=!1,closeOnResize:_=!1,openEvents:j,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:O=!1,style:D,position:L,isOpen:z,defaultIsOpen:N=!1,disableStyleInjection:F=!1,border:I,opacity:M,arrowColor:$,setIsOpen:B,afterShow:V,afterHide:U,disableTooltip:H,role:W="tooltip"}=t;const[Y,K]=(0,e.useState)(a),[Q,X]=(0,e.useState)(s),[q,G]=(0,e.useState)(p),[J,Z]=(0,e.useState)(d),[ee,te]=(0,e.useState)(f),[ne,re]=(0,e.useState)(x),[oe,ie]=(0,e.useState)(w),[ae,se]=(0,e.useState)(S),[le,ce]=(0,e.useState)(k),[ue,de]=(0,e.useState)(h),[pe,fe]=(0,e.useState)(g),[he,me]=(0,e.useState)(y),[ge,ve]=(0,e.useState)(null),[ye,be]=(0,e.useState)(null),xe=(0,e.useRef)(F),{anchorRefs:we,activeAnchor:Se}=_f(r),ke=e=>null==e?void 0:e.getAttributeNames().reduce(((t,n)=>{var r;return n.startsWith("data-tooltip-")&&(t[n.replace(/^data-tooltip-/,"")]=null!==(r=null==e?void 0:e.getAttribute(n))&&void 0!==r?r:null),t}),{}),Ee=e=>{const t={place:e=>{var t;G(null!==(t=e)&&void 0!==t?t:p)},content:e=>{K(null!=e?e:a)},html:e=>{X(null!=e?e:s)},variant:e=>{var t;Z(null!==(t=e)&&void 0!==t?t:d)},offset:e=>{te(null===e?f:Number(e))},wrapper:e=>{var t;de(null!==(t=e)&&void 0!==t?t:h)},events:e=>{const t=null==e?void 0:e.split(" ");fe(null!=t?t:g)},"position-strategy":e=>{var t;me(null!==(t=e)&&void 0!==t?t:y)},"delay-show":e=>{re(null===e?x:Number(e))},"delay-hide":e=>{ie(null===e?w:Number(e))},float:e=>{se(null===e?S:"true"===e)},hidden:e=>{ce(null===e?k:"true"===e)},"class-name":e=>{ve(e)}};Object.values(t).forEach((e=>e(null))),Object.entries(e).forEach((e=>{let[n,r]=e;var o;null===(o=t[n])||void 0===o||o.call(t,r)}))};(0,e.useEffect)((()=>{K(a)}),[a]),(0,e.useEffect)((()=>{X(s)}),[s]),(0,e.useEffect)((()=>{G(p)}),[p]),(0,e.useEffect)((()=>{Z(d)}),[d]),(0,e.useEffect)((()=>{te(f)}),[f]),(0,e.useEffect)((()=>{re(x)}),[x]),(0,e.useEffect)((()=>{ie(w)}),[w]),(0,e.useEffect)((()=>{se(S)}),[S]),(0,e.useEffect)((()=>{ce(k)}),[k]),(0,e.useEffect)((()=>{me(y)}),[y]),(0,e.useEffect)((()=>{xe.current!==F&&console.warn("[react-tooltip] Do not change `disableStyleInjection` dynamically.")}),[F]),(0,e.useEffect)((()=>{"undefined"!=typeof window&&window.dispatchEvent(new CustomEvent("react-tooltip-inject-styles",{detail:{disableCore:"core"===F,disableBase:F}}))}),[]),(0,e.useEffect)((()=>{var e;const t=new Set(we);let n=i;if(!n&&r&&(n=`[data-tooltip-id='${r.replace(/'/g,"\\'")}']`),n)try{document.querySelectorAll(n).forEach((e=>{t.add({current:e})}))}catch(e){console.warn(`[react-tooltip] "${n}" is not a valid CSS selector`)}const a=document.querySelector(`[id='${o}']`);if(a&&t.add({current:a}),!t.size)return()=>null;const s=null!==(e=null!=ye?ye:a)&&void 0!==e?e:Se.current,l=new MutationObserver((e=>{e.forEach((e=>{var t;if(!s||"attributes"!==e.type||!(null===(t=e.attributeName)||void 0===t?void 0:t.startsWith("data-tooltip-")))return;const n=ke(s);Ee(n)}))})),c={attributes:!0,childList:!1,subtree:!1};if(s){const e=ke(s);Ee(e),l.observe(s,c)}return()=>{l.disconnect()}}),[we,Se,ye,o,i]),(0,e.useEffect)((()=>{(null==D?void 0:D.border)&&console.warn("[react-tooltip] Do not set `style.border`. Use `border` prop instead."),I&&!vf("border",`${I}`)&&console.warn(`[react-tooltip] "${I}" is not a valid \`border\`.`),(null==D?void 0:D.opacity)&&console.warn("[react-tooltip] Do not set `style.opacity`. Use `opacity` prop instead."),M&&!vf("opacity",`${M}`)&&console.warn(`[react-tooltip] "${M}" is not a valid \`opacity\`.`)}),[]);let Ce=m;const Te=(0,e.useRef)(null);if(l){const t=l({content:(null==ye?void 0:ye.getAttribute("data-tooltip-content"))||Y||null,activeAnchor:ye});Ce=t?e.createElement("div",{ref:Te,className:"react-tooltip-content-wrapper"},t):null}else Y&&(Ce=Y);Q&&(Ce=e.createElement(Of,{content:Q}));const Pe={forwardRef:n,id:r,anchorId:o,anchorSelect:i,className:df(c,ge),classNameArrow:u,content:Ce,contentWrapperRef:Te,place:q,variant:J,offset:ee,wrapper:ue,events:pe,openOnClick:v,positionStrategy:he,middlewares:b,delayShow:ne,delayHide:oe,float:ae,hidden:le,noArrow:E,clickable:C,closeOnEsc:T,closeOnScroll:P,closeOnResize:_,openEvents:j,closeEvents:A,globalCloseEvents:R,imperativeModeOnly:O,style:D,position:L,isOpen:z,defaultIsOpen:N,border:I,opacity:M,arrowColor:$,setIsOpen:B,afterShow:V,afterHide:U,disableTooltip:H,activeAnchor:ye,setActiveAnchor:e=>be(e),role:W};return e.createElement(Rf,{...Pe})}));"undefined"!=typeof window&&window.addEventListener("react-tooltip-inject-styles",(e=>{e.detail.disableCore||mf({css:":root{--rt-color-white:#fff;--rt-color-dark:#222;--rt-color-success:#8dc572;--rt-color-error:#be6464;--rt-color-warning:#f0ad4e;--rt-color-info:#337ab7;--rt-opacity:0.9;--rt-transition-show-delay:0.15s;--rt-transition-closing-delay:0.15s}.core-styles-module_tooltip__3vRRp{position:absolute;top:0;left:0;pointer-events:none;opacity:0;will-change:opacity}.core-styles-module_fixed__pcSol{position:fixed}.core-styles-module_arrow__cvMwQ{position:absolute;background:inherit}.core-styles-module_noArrow__xock6{display:none}.core-styles-module_clickable__ZuTTB{pointer-events:auto}.core-styles-module_show__Nt9eE{opacity:var(--rt-opacity);transition:opacity var(--rt-transition-show-delay)ease-out}.core-styles-module_closing__sGnxF{opacity:0;transition:opacity var(--rt-transition-closing-delay)ease-in}",type:"core"}),e.detail.disableBase||mf({css:"\n.styles-module_tooltip__mnnfp{padding:8px 16px;border-radius:3px;font-size:90%;width:max-content}.styles-module_arrow__K0L3T{width:8px;height:8px}[class*='react-tooltip__place-top']>.styles-module_arrow__K0L3T{transform:rotate(45deg)}[class*='react-tooltip__place-right']>.styles-module_arrow__K0L3T{transform:rotate(135deg)}[class*='react-tooltip__place-bottom']>.styles-module_arrow__K0L3T{transform:rotate(225deg)}[class*='react-tooltip__place-left']>.styles-module_arrow__K0L3T{transform:rotate(315deg)}.styles-module_dark__xNqje{background:var(--rt-color-dark);color:var(--rt-color-white)}.styles-module_light__Z6W-X{background-color:var(--rt-color-white);color:var(--rt-color-dark)}.styles-module_success__A2AKt{background-color:var(--rt-color-success);color:var(--rt-color-white)}.styles-module_warning__SCK0X{background-color:var(--rt-color-warning);color:var(--rt-color-white)}.styles-module_error__JvumD{background-color:var(--rt-color-error);color:var(--rt-color-white)}.styles-module_info__BWdHW{background-color:var(--rt-color-info);color:var(--rt-color-white)}",type:"base"})}));let Lf=function(e){return e.PROJECT="project",e.SKILL="skill",e.EXPERIENCE="experience",e}({});const zf={creativity:{icon:"\ud83c\udfa8",label:"Creativity",description:"Originality, expression, idea generation"},impact:{icon:"\ud83d\udca5",label:"Impact",description:"Tangible outcome or influence"},difficulty:{icon:"\ud83e\udde0",label:"Difficulty",description:"Problem-solving or technical challenge"},mastery:{icon:"\ud83e\udde0",label:"Mastery",description:"Expertise level with the skill/tool"},usageFrequency:{icon:"\ud83d\udd01",label:"Usage Frequency",description:"How often this is part of my workflow"},comboPower:{icon:"\ud83d\udd17",label:"Combo Power",description:"How well this works with other tools"},collaboration:{icon:"\ud83e\udd1d",label:"Collaboration",description:"Teamwork, communication, cross-discipline work"},growth:{icon:"\ud83d\udcc8",label:"Growth",description:"Personal/professional development gained"}},Nf=Gr(ep.div)`
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
    border-image: ${e=>{let{cardType:t}=e;return`linear-gradient(135deg, #3498db, ${(()=>{switch(t){case Lf.PROJECT:return"var(--color-project)";case Lf.SKILL:return"var(--color-skill)";case Lf.EXPERIENCE:return"var(--color-experience)";default:return"#3498db"}})()}) 1`}};
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
  ${e=>{let{isSelected:t,isInDeck:n}=e;return(t||n)&&"\n    box-shadow: 0 0 35px var(--color-highlight);\n    transform: translateY(-5px) scale(1.02);\n  "}}
`,Ff=Gr.div`
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
`,If=Gr.div`
  padding: var(--spacing-sm);
  height: 45%;
  display: flex;
  flex-direction: column;
  position: relative;
  background: linear-gradient(180deg, var(--color-bg-primary) 0%, #121824 100%);
`,Mf=Gr.h3`
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

  ${to} {
    font-size: 0.85rem;
  }

  ${eo} {
    font-size: 0.8rem;
  }
`,$f=Gr.p`
  font-size: 0.7rem;
  color: var(--color-text-secondary);
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;

  ${eo} {
    font-size: 0.65rem;
    -webkit-line-clamp: 1;
  }
`,Bf=Gr.div`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 3px 8px;
  font-size: 0.65rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);
  background-color: ${e=>{let{cardType:t}=e;switch(t){case Lf.PROJECT:return"var(--color-project)";case Lf.SKILL:return"var(--color-skill)";case Lf.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-project)"}}};
  color: white;
  z-index: 10;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);

  ${eo} {
    font-size: 0.6rem;
    padding: 2px 6px;
  }
`,Vf=Gr.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: auto;
  padding: 5px;
  background: rgba(0, 0, 0, 0.3);
  border-top: 1px solid rgba(46, 204, 113, 0.3);
  border-bottom: 1px solid rgba(86, 204, 242, 0.3);

  ${to} {
    gap: var(--spacing-sm);
  }
`,Uf=Gr.div`
	display: flex;
	align-items: center;
	gap: 3px;
	font-size: 0.7rem;
	color: var(--color-text-secondary)";
	font-weight: 600;
	text-shadow: 0 0 5px rgba(255, 255, 255, 0.3);

	${eo} {
		font-size: 0.65rem;
		gap: 2px;
	}
`,Hf=Gr.span`
  font-size: 0.75rem;
`,Wf=Gr.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(86, 204, 242, 0.5);
  z-index: 6;
  opacity: 0.3;
`,Yf=Gr.div`
  position: absolute;
  top: 30%;
  left: 0;
  height: 2px;
  width: 30%;
  background: rgba(86, 204, 242, 0.6);
  z-index: 6;
  opacity: 0.4;
`,Kf=e=>{let{card:t,onClick:n,isSelected:r,isInDeck:o,isShiny:i}=e;return(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(Nf,{cardType:t.type,isSelected:r,isInDeck:o,onClick:n,whileHover:{y:-5,scale:1.05,transition:{duration:.2}},initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3},className:i?"foil":"",children:[(0,ic.jsx)(Bf,{cardType:t.type,children:t.type}),(0,ic.jsx)(Ff,{imageUrl:t.imageUrl}),(0,ic.jsx)(Wf,{}),(0,ic.jsx)(Yf,{}),(0,ic.jsxs)(If,{children:[(0,ic.jsxs)(Mf,{children:[t.isFeatured&&"\u2726 ",t.title]}),(0,ic.jsx)($f,{children:t.description}),(0,ic.jsx)(Vf,{children:Object.entries(t.stats).map((e=>{let[n,r]=e;return(0,ic.jsxs)(Uf,{"data-tooltip-id":`stats-${t._id}`,"data-tooltip-content":zf[n].description,type:n,children:[(0,ic.jsx)(Hf,{children:zf[n].icon})," ",r]},n)}))})]})," "]}),(0,ic.jsx)(Df,{id:`stats-${t._id}`,place:"top",style:{zIndex:9999}})]})},Qf=Gr.footer`
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
`,Xf=Gr.div`
    color: var(--color-text-secondary);
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 0.8rem;

    ${no} {
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
`,qf=()=>{const e=(new Date).getFullYear();return(0,ic.jsx)(Qf,{children:(0,ic.jsxs)(Xf,{children:[`\xa9 ${e} \u2022 `,(0,ic.jsx)("span",{className:"highlight",children:"Some rights"})," ",(0,ic.jsx)("span",{className:"glitch","data-glitch":"reserved",children:"reserved"}),(0,ic.jsx)("br",{}),"Code is"," ",(0,ic.jsx)("span",{className:"glitch","data-glitch":"open source",children:"open source"})," ","\u2014 reuse with credit. ",(0,ic.jsx)("br",{}),(0,ic.jsx)("a",{href:"https://github.com/atinyshrimp/Website",target:"_blank",rel:"noopener noreferrer",children:"View on GitHub"})]})})};n(167);const Gf="https://tcg-portfolio-api.vercel.app";const Jf=new class{get(e){return new Promise((async(t,n)=>{try{const n=await fetch(`${Gf}${e}`,{mode:"cors",method:"GET",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"}});t(await n.json())}catch(Tv){n(Tv)}}))}put(e,t){return new Promise((async(n,r)=>{try{const r=await fetch(`${Gf}${e}`,{mode:"cors",method:"PUT",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"},body:"string"===typeof t?t:JSON.stringify(t)});n(await r.json())}catch(Tv){r(Tv)}}))}postFormData(e,t){let n=new FormData;return console.log("file",t),n.append(t.name,t,t.name),new Promise((async(t,r)=>{try{console.log(`${Gf}${e}`);const r=await fetch(`${Gf}${e}`,{mode:"cors",method:"POST",credentials:"include",headers:{},body:n}),o=await r.json();console.log("e",o),t(o)}catch(Tv){console.log("e",Tv),r(Tv)}}))}delete(e){return new Promise((async(t,n)=>{try{const n=await fetch(`${Gf}${e}`,{mode:"cors",credentials:"include",method:"DELETE",headers:{"Content-Type":"application/json",Accept:"application/json"}});t(await n.json())}catch(Tv){n(Tv)}}))}post(e,t){return new Promise((async(n,r)=>{try{const r=await fetch(`${Gf}${e}`,{mode:"cors",method:"POST",credentials:"include",headers:{"Content-Type":"application/json",Accept:"application/json"},body:"string"===typeof t?t:JSON.stringify(t)});n(await r.json())}catch(Tv){r(Tv)}}))}},Zf=Gr.div`
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

  ${to} {
    padding: var(--spacing-xl) 0;
  }

  ${eo} {
    padding: var(--spacing-lg) var(--spacing-sm);
  }
`,eh=Gr(ep.h1)`
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

  ${no} {
    font-size: 3rem;
  }

  ${to} {
    font-size: 2.5rem;
  }

  ${eo} {
    font-size: 2rem;
  }
`,th=Gr(ep.p)`
  font-size: 1.2rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin: 0 auto var(--spacing-xl);
  line-height: 1.8;
  position: relative;
  z-index: 2;

  ${to} {
    font-size: 1.1rem;
    max-width: 90%;
    margin: 0 auto var(--spacing-lg);
  }

  ${eo} {
    font-size: 1rem;
    line-height: 1.6;
  }
`,nh=Gr.div`
  display: flex;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xl);
  position: relative;
  z-index: 2;

  ${to} {
    gap: var(--spacing-md);
    margin-top: var(--spacing-lg);
  }

  ${eo} {
    flex-direction: column;
    gap: var(--spacing-sm);
    width: 80%;
    max-width: 300px;
  }
`,rh=Gr(tt)`
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

  ${to} {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }

  ${eo} {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.85rem;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,oh=Gr(tt)`
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

  ${to} {
    padding: var(--spacing-sm) var(--spacing-md);
    font-size: 0.9rem;
  }

  ${eo} {
    width: 100%;
    text-align: center;
    padding: var(--spacing-sm) var(--spacing-sm);
    font-size: 0.85rem;

    &:hover {
      transform: translateY(-2px);
    }
  }
`,ih=Gr.div`
  padding: var(--spacing-xl) 0;
  position: relative;

  ${to} {
    padding: var(--spacing-lg) 0;
  }

  ${eo} {
    padding: var(--spacing-md) 0;
  }
`,ah=Gr.h2`
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

  ${to} {
    font-size: 1.75rem;
    margin-bottom: var(--spacing-md);
  }

  ${eo} {
    font-size: 1.5rem;
    width: 90%;

    &::before,
    &::after {
      margin: 0 var(--spacing-xs);
    }
  }
`,sh=Gr.div`
  position: relative;
  border-radius: var(--radius-md);
  padding: var(--spacing-xl) var(--spacing-lg);

  ${to} {
    padding: var(--spacing-lg) var(--spacing-md);
  }

  ${eo} {
    padding: var(--spacing-md) var(--spacing-sm);
  }
`,lh=Gr.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;

  ${no} {
    max-width: 1100px;
    gap: var(--spacing-lg);
  }

  ${to} {
    max-width: 100%;
    gap: var(--spacing-md);
  }

  ${eo} {
    gap: var(--spacing-sm);
  }
`,ch=()=>{const[t,n]=(0,e.useState)([]),r=window.innerWidth<=Number(Zr.lg.replace("px",""))?5:3;return(0,e.useEffect)((()=>{!async function(){try{const{ok:e,data:t,error:o}=await Jf.get(`/cards/featured?size=${r}`);if(!e)throw new Error(o);n(t)}catch(e){console.error(e)}}()}),[]),(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(Zf,{children:[(0,ic.jsxs)(eh,{initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:.6},children:["Welcome to my ",(0,ic.jsx)("span",{className:"highlight",children:"Portfolio"})]}),(0,ic.jsx)(th,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.6,delay:.2},children:"Explore my skills, projects, and experiences in an interactive card-based format inspired by collectible card games."}),(0,ic.jsxs)(nh,{children:[(0,ic.jsx)(rh,{to:"/collection",children:"View Card Collection"}),(0,ic.jsx)(oh,{to:"/about",children:"About this Project"})]})]}),(0,ic.jsxs)(ih,{children:[(0,ic.jsxs)(ah,{children:["Featured ",(0,ic.jsx)("span",{className:"highlight",children:"Cards"})]}),(0,ic.jsx)(sh,{children:(0,ic.jsx)(lh,{children:t.map((e=>(0,ic.jsx)(Kf,{card:e},e._id)))})})]}),(0,ic.jsx)(qf,{})]})},uh=Gr.div`
  padding: var(--spacing-md) 0;
  ${io} {
    padding: 0;
  }
`,dh=Gr.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: var(--spacing-lg);
  background-color: rgba(0, 0, 0, 0.2);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  ${io} {
    padding: var(--spacing-sm);
    margin-bottom: var(--spacing-md);
    flex-direction: column; /* Stack header items */
    align-items: stretch; /* Make items full width */
    gap: var(--spacing-sm);
  }

  ${oo} {
    padding: var(--spacing-xs);
    margin-bottom: var(--spacing-sm);
    flex-direction: column;
    align-items: stretch;
    gap: var(--spacing-xs);
  }
`,ph=Gr.h2`
  font-size: 1.2rem;
  margin: 0;

  ${io} {
    font-size: 1.1rem;
    text-align: center; /* Center title when stacked */
  }
  ${oo} {
    font-size: 0.9rem; /* Smaller */
    text-align: center;
  }
`,fh=Gr.div`
  display: flex;
  gap: var(--spacing-xs);
  align-items: center; /* Align items vertically */

  ${io} {
    flex-direction: column; /* Stack search and filters */
    gap: var(--spacing-sm);
  }
  ${oo} {
    flex-direction: column;
    gap: var(--spacing-xs);
  }
`,hh=Gr.div`
  display: flex;
  flex-wrap: wrap; /* Allow buttons to wrap */
  justify-content: center; /* Center buttons when wrapped */
  gap: var(--spacing-xs);
`,mh=Gr.button`
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;

  ${io} {
    font-size: 0.75rem;
    padding: 4px 10px;
  }
  ${oo} {
    font-size: 0.65rem; /* Smaller */
    padding: 3px 6px; /* Smaller padding */
    flex-grow: 1; /* Allow buttons to take available space if wrapping */
  }

  background-color: ${e=>{let{active:t,cardType:n}=e;if(!t)return"rgba(0, 0, 0, 0.2)";if(!n)return"rgba(86, 204, 242, 0.2)";switch(n){case Lf.PROJECT:return"rgba(46, 204, 113, 0.2)";case Lf.SKILL:return"rgba(231, 76, 60, 0.2)";case Lf.EXPERIENCE:return"rgba(243, 156, 18, 0.2)";default:return"rgba(86, 204, 242, 0.2)"}}};
  border: 1px solid
    ${e=>{let{active:t,cardType:n}=e;if(!t)return"var(--color-border)";if(!n)return"var(--color-accent)";switch(n){case Lf.PROJECT:return"var(--color-project)";case Lf.SKILL:return"var(--color-skill)";case Lf.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-accent)"}}};
  color: ${e=>{let{active:t,cardType:n}=e;if(!t)return"var(--color-text-secondary)";if(!n)return"var(--color-accent)";switch(n){case Lf.PROJECT:return"var(--color-project)";case Lf.SKILL:return"var(--color-skill)";case Lf.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-accent)"}}};
  transition: all 0.2s ease;

  &:hover {
    background-color: ${e=>{let{cardType:t}=e;if(!t)return"rgba(86, 204, 242, 0.3)";switch(t){case Lf.PROJECT:return"rgba(46, 204, 113, 0.3)";case Lf.SKILL:return"rgba(231, 76, 60, 0.3)";case Lf.EXPERIENCE:return"rgba(243, 156, 18, 0.3)";default:return"rgba(86, 204, 242, 0.3)"}}};
  }
`,gh=Gr.div`
  display: grid;
  grid-template-columns: repeat(
    auto-fill,
    minmax(var(--card-width, 250px), 1fr)
  );
  gap: var(--spacing-md);

  ${io} {
    /* Card width is handled by GlobalStyle --card-width for this breakpoint */
    gap: var(--spacing-sm);
  }

  ${oo} {
    /* Card width is handled by GlobalStyle --card-width for this breakpoint */
    gap: var(--spacing-xs);
    /* Explicitly set minmax with a smaller min if needed, though --card-width should handle it */
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--card-width, 160px), 1fr)
    );
  }
`,vh=Gr.input`
  background-color: rgba(0, 0, 0, 0.2);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
  padding: 5px 12px;
  border-radius: var(--radius-sm);
  width: 200px;
  font-size: 0.8rem;

  ${io} {
    width: 100%; /* Full width when stacked */
    font-size: 0.75rem;
  }
  ${oo} {
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
`,yh=Gr.div`
  text-align: center;
  color: var(--color-text-secondary);
  padding: var(--spacing-xl);
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: var(--radius-sm);
  font-style: italic;

  ${io} {
    padding: var(--spacing-lg);
    font-size: 0.9rem;
  }
  ${oo} {
    padding: var(--spacing-md);
    font-size: 0.8rem;
  }
`,bh=t=>{let{cards:n,onSelectCard:r,cardsInDeck:o=[],filterType:i,onFilterChange:a}=t;const[s,l]=(0,e.useState)(i||null),[c,u]=(0,e.useState)("");(0,e.useEffect)((()=>{l(i||null)}),[i]);const d=e=>{l(e),a&&a(e)},p=n.filter((e=>{if(s&&e.type!==s)return!1;if(c){const t=c.toLowerCase();return e.title.toLowerCase().includes(t)||e.description.toLowerCase().includes(t)||e.tags.some((e=>e.toLowerCase().includes(t)))||e.type===Lf.PROJECT&&e.projectDetails.technologies.some((e=>e.toLowerCase().includes(t)))}return!0}));return(0,ic.jsxs)(uh,{children:[(0,ic.jsxs)(dh,{children:[(0,ic.jsx)(ph,{children:"Card Collection"}),(0,ic.jsxs)(fh,{children:[(0,ic.jsx)(vh,{type:"text",placeholder:"Search cards...",value:c,onChange:e=>u(e.target.value)}),(0,ic.jsxs)(hh,{children:[" ",(0,ic.jsx)(mh,{active:null===s,onClick:()=>d(null),children:"All"}),(0,ic.jsx)(mh,{active:s===Lf.PROJECT,cardType:Lf.PROJECT,onClick:()=>d(Lf.PROJECT),children:"Projects"}),(0,ic.jsx)(mh,{active:s===Lf.SKILL,cardType:Lf.SKILL,onClick:()=>d(Lf.SKILL),children:"Skills"}),(0,ic.jsx)(mh,{active:s===Lf.EXPERIENCE,cardType:Lf.EXPERIENCE,onClick:()=>d(Lf.EXPERIENCE),children:"Experience"})]})]})]}),p.length>0?(0,ic.jsxs)(gh,{children:[" ",p.map((e=>{return(0,ic.jsx)(Kf,{card:e,onClick:()=>null===r||void 0===r?void 0:r(e),isShiny:e.isFeatured,isInDeck:(t=e._id,o.includes(t))},e._id);var t}))]}):(0,ic.jsx)(yh,{children:"No cards found. Try changing the filter or search term."})]})},xh=e=>{try{if(null===e||void 0===e)throw new Error("Invalid date input");if("Present"===e)return"Present";const t={year:"numeric",month:"short"},n=new Date(e);if(isNaN(n.getTime()))throw new Error("Invalid date input");return n>new Date?"Present":n.toLocaleDateString("en-US",t)}catch(t){return console.error("Error in getStringFromDate:",t),null}},wh=e=>{let t=new Date(e).setFullYear((new Date).getFullYear());t<(new Date).getTime()&&(t=new Date(e).setFullYear((new Date).getFullYear()+1));const n=t;return Math.floor((n-new Date(e).getTime())/864e5)},Sh=()=>(e=>e%4===0&&(e%100!==0||e%400===0))((new Date).getFullYear())?366:365,kh=e=>{const t=new Date,n=Math.floor((t.getTime()-new Date(e).getTime())/1e3);let r=Math.floor(n/31536e3);return r>1?`${r} years ago`:(r=Math.floor(n/2592e3),r>1?`${r} months ago`:(r=Math.floor(n/86400),r>1?`${r} days ago`:(r=Math.floor(n/3600),r>1?`${r} hours ago`:(r=Math.floor(n/60),r>1?`${r} minutes ago`:`${n} seconds ago`))))},Eh=Gr.div`
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
`,Ch=Gr.div`
  position: relative;
  padding-top: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
`,Th=Gr.div`
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
`,Ph=Gr.div`
  padding: var(--spacing-md);
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,_h=Gr.h2`
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
`,jh=Gr.div`
  display: inline-block;
  padding: 4px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: var(--spacing-sm);
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);
  background-color: ${e=>{let{cardType:t}=e;switch(t){case Lf.PROJECT:return"var(--color-project)";case Lf.SKILL:return"var(--color-skill)";case Lf.EXPERIENCE:return"var(--color-experience)";default:return"var(--color-project)"}}};
  color: white;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.5);
`,Ah=Gr.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`,Rh=Gr.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-md);
`,Oh=Gr.span`
  font-size: 0.8rem;
  padding: 3px 8px;
  background-color: rgba(0, 0, 0, 0.3);
  color: var(--color-text-secondary);
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 50%, 90% 100%, 0 100%);

  border: 2px solid rgba(84, 29, 91, 0.5);
`,Dh=Gr.div`
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
`,Lh=Gr.div`
  display: flex;
  flex-direction: column;
  padding: 8px 5px;
  position: relative;
  z-index: 1;
  ${e=>{let{highlight:t}=e;return t&&"\n        color: var(--color-accent);\n        text-shadow: 0 0 5px rgba(86, 204, 242, 0.5);\n    "}}
`,zh=Gr.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);
  margin-bottom: 4px;
`,Nh=Gr.span`
  font-size: 1.1rem;
  font-weight: 600;
`,Fh=Gr.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: auto;
`,Ih=Gr.button`
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
`,Mh=Gr.div`
  margin-bottom: var(--spacing-md);
`,$h=Gr.h3`
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
`,Bh=Gr.ul`
  list-style: none;
  padding-left: var(--spacing-md);
`,Vh=Gr.li`
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
`,Uh=Gr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,Hh=Gr.div`
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
`,Wh=Gr.div`
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
`,Yh=Gr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-sm);
`,Kh=Gr.div`
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm);
  background: rgba(0, 0, 0, 0.3);
  border-left: 2px solid
    var(
      ${e=>{let{type:t}=e;return t===Lf.PROJECT?"--color-project":"--color-experience"}}
    );
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;

  /* Cyberpunk hover effect */
  &:hover {
    background: ${e=>{let{type:t}=e;return t===Lf.PROJECT?"rgba(46, 204, 113, 0.15)":"rgba(46, 164, 204, 0.15)"}};
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
        ${e=>{let{type:t}=e;return t===Lf.PROJECT?"rgba(46, 204, 113, 0.1)":"rgba(46, 164, 204, 0.1)"}},
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
`,Qh=Gr.div`
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background-image: ${e=>{let{imageUrl:t}=e;return t?`url(${t})`:"linear-gradient(to bottom, #2C3E50, #1A2530)"}};
  background-size: cover;
  background-position: center;
  flex-shrink: 0;
  border: 1px solid
    var(
      ${e=>{let{type:t}=e;return t===Lf.PROJECT?"--color-project":"--color-experience"}}
    );
`,Xh=Gr.div`
  flex: 1;
`,qh=Gr.div`
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--color-text-primary);
  margin-bottom: 2px;
`,Gh=Gr.div`
  font-size: 0.7rem;

  .chip {
    background: ${e=>{let{type:t}=e;return t===Lf.PROJECT?"rgba(46, 204, 113, 0.2)":"rgba(46, 164, 204, 0.2)"}};
    color: var(
      ${e=>{let{type:t}=e;return t===Lf.PROJECT?"--color-project":"--color-experience"}}
    );
    padding: 1px 6px;
    border-radius: 2px;
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }
`,Jh=Gr.div`
  color: var(
    ${e=>{let{type:t}=e;return t===Lf.PROJECT?"--color-project":"--color-experience"}}
  );
  font-size: 1rem;
  opacity: 0.7;
`,Zh=Gr.div`
  font-size: 0.85rem;
  color: var(--color-text-secondary);
  font-style: italic;
  padding: var(--spacing-sm);
`,em=Gr.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-sm);
`,tm=Gr.div`
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
`,nm=t=>{let{card:n,onAddToDeck:r,onRemoveFromDeck:o,isInDeck:i,onRelationClick:a}=t;const[s,l]=(0,e.useState)([]);return(0,e.useEffect)((()=>{!async function(){try{const{ok:e,data:t,error:r}=await Jf.get(`/cards/${n._id}/skills`);if(!e)throw new Error(r);l(t)}catch(e){console.error(e)}}()}),[n]),(0,ic.jsxs)(Eh,{cardType:n.type,children:[(0,ic.jsx)(Ch,{children:(0,ic.jsx)(Th,{imageUrl:n.imageUrl})}),(0,ic.jsxs)(Ph,{children:[(0,ic.jsx)("div",{children:(0,ic.jsx)(jh,{cardType:n.type,children:n.type})}),(0,ic.jsx)(_h,{children:n.title}),(0,ic.jsx)(Ah,{children:n.description}),(0,ic.jsx)(Rh,{children:n.tags.sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,ic.jsx)(Oh,{children:e},t)))}),(0,ic.jsxs)(Dh,{children:[Object.entries(n.stats).map((e=>{let[t,n]=e;const r=t;return(0,ic.jsxs)(Lh,{"data-tooltip-id":"stats","data-tooltip-content":zf[r].description,children:[(0,ic.jsx)(zh,{children:zf[r].label}),(0,ic.jsx)(Nh,{children:`${zf[r].icon} ${n}`})]},t)})),(0,ic.jsxs)(Lh,{highlight:!0,"data-tooltip-id":"stats","data-tooltip-content":"Average of all stats",children:[(0,ic.jsx)(zh,{children:"Overall"}),(0,ic.jsxs)(Nh,{children:["\u2605"," ",Math.floor(Object.values(n.stats).reduce(((e,t)=>e+t),0)/3)]})]})]}),n.type===Lf.PROJECT&&n.projectDetails&&(0,ic.jsxs)(ic.Fragment,{children:[n.projectDetails.role&&(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Role"}),(0,ic.jsx)(Bh,{children:(0,ic.jsx)(Vh,{children:n.projectDetails.role})})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Duration"}),(0,ic.jsx)(Bh,{children:(0,ic.jsx)(Vh,{children:n.projectDetails.duration})})]}),n.projectDetails.technologies.length>0&&(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Technologies"}),(0,ic.jsx)(Bh,{style:{display:"grid",gridTemplateColumns:"repeat(2, 1fr)"},children:n.projectDetails.technologies.sort(((e,t)=>e.localeCompare(t))).map(((e,t)=>(0,ic.jsx)(Vh,{children:e},t)))})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Outcomes"}),(0,ic.jsx)(Bh,{children:n.projectDetails.outcomes.map(((e,t)=>"string"===typeof e?(0,ic.jsx)(Vh,{children:e},t):(0,ic.jsxs)(Vh,{children:[e.label,e.subpoints&&e.subpoints.length>0&&(0,ic.jsx)(Bh,{style:{paddingLeft:"var(--spacing-lg)",marginTop:"var(--spacing-xs)"},children:e.subpoints.map(((e,t)=>(0,ic.jsx)(Vh,{children:e},t)))})]},t)))})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Skills Applied"}),s.length>0?(0,ic.jsx)(em,{children:s.map((e=>(0,ic.jsxs)(tm,{onClick:()=>a&&a(e),children:[zf.mastery.icon," ",e.title]},e._id)))}):(0,ic.jsx)(Zh,{children:"No specific skills listed for this project"})]})]}),n.type===Lf.SKILL&&n.skillDetails&&(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Proficiency"}),(0,ic.jsx)(Hh,{children:(0,ic.jsx)(Wh,{level:n.skillDetails.proficiency})})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Years of Experience"}),(0,ic.jsx)(Bh,{children:(0,ic.jsxs)(Vh,{children:[n.skillDetails.yearsOfExperience," year",n.skillDetails.yearsOfExperience>1?"s":""]})})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Related Exp & Projects"}),n.skillDetails.relatedProjects.length>0?(0,ic.jsx)(Yh,{children:n.skillDetails.relatedProjects.map((e=>(0,ic.jsxs)(Kh,{type:e.type,onClick:()=>a&&a(e),children:[(0,ic.jsx)(Qh,{type:e.type,imageUrl:e.imageUrl}),(0,ic.jsxs)(Xh,{children:[(0,ic.jsx)(qh,{children:e.title}),(0,ic.jsx)(Gh,{type:e.type,children:(0,ic.jsx)("span",{className:"chip",children:e.type})})]}),(0,ic.jsx)(Jh,{type:e.type,children:"\u2192"})]},e._id)))}):(0,ic.jsx)(Zh,{children:"No related projects found"})]})]}),n.type===Lf.EXPERIENCE&&n.experienceDetails&&(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Company"}),(0,ic.jsx)(Bh,{children:(0,ic.jsx)(Vh,{children:n.experienceDetails.company})})]}),n.experienceDetails.position&&(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Position"}),(0,ic.jsx)(Bh,{children:(0,ic.jsx)(Vh,{children:n.experienceDetails.position})})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Duration"}),(0,ic.jsx)(Bh,{children:(0,ic.jsx)(Vh,{children:`${xh(n.experienceDetails.startDate)} - ${xh(n.experienceDetails.endDate)}`})})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Location"}),(0,ic.jsx)(Bh,{children:(0,ic.jsx)(Vh,{children:n.experienceDetails.location})})]}),s.length>0&&(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Skills Applied"}),(0,ic.jsx)(em,{children:s.map((e=>(0,ic.jsxs)(tm,{onClick:()=>a&&a(e),children:[zf.mastery.icon," ",e.title]},e._id)))})]}),(0,ic.jsxs)(Mh,{children:[(0,ic.jsx)($h,{children:"Key Achievements"}),(0,ic.jsx)(Bh,{children:n.experienceDetails.achievements.map(((e,t)=>(0,ic.jsx)(Vh,{children:e},t)))})]})]}),n.links&&n.links.length>0&&(0,ic.jsx)(Uh,{children:n.links.map(((e,t)=>(0,ic.jsx)(Ih,{as:"a",href:e.url,target:"_blank",rel:"noopener noreferrer",isExternal:!0,children:e.label},t)))}),r&&o&&(0,ic.jsx)(Fh,{children:(0,ic.jsx)(Ih,{onClick:i?o:r,isRemove:i,children:i?"Remove from Deck":"Add to Deck"})})]}),(0,ic.jsx)(Df,{id:"stats",place:"top",style:{zIndex:9999}})]})};const rm=function(t,n){const r=(0,e.useCallback)((()=>{if("undefined"===typeof window)return n;try{const e=window.localStorage.getItem(t);return e?JSON.parse(e):n}catch(e){return console.warn(`Error reading localStorage key "${t}":`,e),n}}),[t,n]),[o,i]=(0,e.useState)(r);return(0,e.useEffect)((()=>{const e=()=>{i(r())};return window.addEventListener("storage",e),()=>{window.removeEventListener("storage",e)}}),[r]),[o,e=>{try{const n=e instanceof Function?e(o):e;i(n),"undefined"!==typeof window&&window.localStorage.setItem(t,JSON.stringify(n))}catch(n){console.warn(`Error setting localStorage key "${t}":`,n)}}]};class om extends e.Component{getSnapshotBeforeUpdate(e){const t=this.props.childRef.current;if(t&&e.isPresent&&!this.props.isPresent){const e=t.offsetParent,n=e instanceof HTMLElement&&e.offsetWidth||0,r=this.props.sizeRef.current;r.height=t.offsetHeight||0,r.width=t.offsetWidth||0,r.top=t.offsetTop,r.left=t.offsetLeft,r.right=n-r.width-r.left}return null}componentDidUpdate(){}render(){return this.props.children}}function im(t){let{children:n,isPresent:r,anchorX:o}=t;const i=(0,e.useId)(),a=(0,e.useRef)(null),s=(0,e.useRef)({width:0,height:0,top:0,left:0,right:0}),{nonce:l}=(0,e.useContext)(Ku);return(0,e.useInsertionEffect)((()=>{const{width:e,height:t,top:n,left:c,right:u}=s.current;if(r||!a.current||!e||!t)return;const d="left"===o?`left: ${c}`:`right: ${u}`;a.current.dataset.motionPopId=i;const p=document.createElement("style");return l&&(p.nonce=l),document.head.appendChild(p),p.sheet&&p.sheet.insertRule(`\n          [data-motion-pop-id="${i}"] {\n            position: absolute !important;\n            width: ${e}px !important;\n            height: ${t}px !important;\n            ${d}px !important;\n            top: ${n}px !important;\n          }\n        `),()=>{document.head.removeChild(p)}}),[r]),(0,ic.jsx)(om,{isPresent:r,childRef:a,sizeRef:s,children:e.cloneElement(n,{ref:a})})}const am=t=>{let{children:n,initial:r,isPresent:o,onExitComplete:i,custom:a,presenceAffectsLayout:s,mode:l,anchorX:c}=t;const u=Od(sm),d=(0,e.useId)();let p=!0,f=(0,e.useMemo)((()=>(p=!1,{id:d,initial:r,isPresent:o,custom:a,onExitComplete:e=>{u.set(e,!0);for(const t of u.values())if(!t)return;i&&i()},register:e=>(u.set(e,!1),()=>u.delete(e))})),[o,u,i]);return s&&p&&(f={...f}),(0,e.useMemo)((()=>{u.forEach(((e,t)=>u.set(t,!1)))}),[o]),e.useEffect((()=>{!o&&!u.size&&i&&i()}),[o]),"popLayout"===l&&(n=(0,ic.jsx)(im,{isPresent:o,anchorX:c,children:n})),(0,ic.jsx)(lc.Provider,{value:f,children:n})};function sm(){return new Map}const lm=e=>e.key||"";function cm(t){const n=[];return e.Children.forEach(t,(t=>{(0,e.isValidElement)(t)&&n.push(t)})),n}const um=t=>{let{children:n,custom:r,initial:o=!0,onExitComplete:i,presenceAffectsLayout:a=!0,mode:s="sync",propagate:l=!1,anchorX:c="left"}=t;const[u,d]=cc(l),p=(0,e.useMemo)((()=>cm(n)),[n]),f=l&&!u?[]:p.map(lm),h=(0,e.useRef)(!0),m=(0,e.useRef)(p),g=Od((()=>new Map)),[v,y]=(0,e.useState)(p),[b,x]=(0,e.useState)(p);od((()=>{h.current=!1,m.current=p;for(let e=0;e<b.length;e++){const t=lm(b[e]);f.includes(t)?g.delete(t):!0!==g.get(t)&&g.set(t,!1)}}),[b,f.length,f.join("-")]);const w=[];if(p!==v){let e=[...p];for(let t=0;t<b.length;t++){const n=b[t],r=lm(n);f.includes(r)||(e.splice(t,0,n),w.push(n))}return"wait"===s&&w.length&&(e=w),x(cm(e)),y(p),null}const{forceRender:S}=(0,e.useContext)(uc);return(0,ic.jsx)(ic.Fragment,{children:b.map((e=>{const t=lm(e),n=!(l&&!u)&&(p===b||f.includes(t));return(0,ic.jsx)(am,{isPresent:n,initial:!(h.current&&!o)&&void 0,custom:r,presenceAffectsLayout:a,mode:s,onExitComplete:n?void 0:()=>{if(!g.has(t))return;g.set(t,!0);let e=!0;g.forEach((t=>{t||(e=!1)})),e&&(S?.(),x(m.current),l&&d?.(),i&&i())},anchorX:c,children:e},t)}))})},dm=Gr.div`
	grid-area: sidebar;
	background-color: rgba(0, 0, 0, 0.5);
	border-right: 1px solid var(--color-border);
	display: ${e=>{let{hidden:t}=e;return t?"none":"flex"}};
	flex-direction: column;
	padding: var(--spacing-md) 0;
`,pm=Gr.button`
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
`,fm=Gr.main`
	grid-area: ${e=>{let{fullWidth:t}=e;return t?"sidebar / span 2":"main-content"}};
	overflow-y: auto;
	padding: var(--spacing-lg);
	position: relative;
`,hm=Gr(ep.div)`
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
`,mm=Gr(ep.div)`
	position: relative;
	width: 450px;
	height: 100%;
	overflow-y: auto;
	background-color: #0d1117;
	padding: var(--spacing-lg);
	box-shadow: -8px 0 32px rgba(0, 0, 0, 0.3);
	border-left: 1px solid var(--color-border);
`,gm=e=>{let{isOpen:t,onClose:n,children:r}=e;return(0,ic.jsx)(um,{children:t&&(0,ic.jsx)(hm,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},onClick:n,children:(0,ic.jsx)(mm,{initial:{x:450,opacity:0},animate:{x:0,opacity:1},exit:{x:450,opacity:0},transition:{type:"spring",damping:25,stiffness:300},onClick:e=>e.stopPropagation(),children:r})})})},vm=e=>{let{children:t,activeTab:n,onTabChange:r,hideSidebar:o=!1}=e;return(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(dm,{hidden:o,children:[(0,ic.jsx)(pm,{active:"decks"===n,onClick:()=>r("decks"),children:"Decks"}),(0,ic.jsx)(pm,{active:"cards"===n,onClick:()=>r("cards"),children:"Cards"})]}),(0,ic.jsx)(fm,{fullWidth:o,children:t})]})},ym=Gr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
`,bm=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--spacing-lg);

  ${io} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`,xm=Gr(ep.div)`
  position: relative;
  height: 350px;
  border-radius: var(--radius-sm);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.2s ease;

  ${io} {
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
`,wm=Gr.div`
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
`,Sm=Gr.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: var(--spacing-lg);
  z-index: 1;
`,km=Gr.h3`
  font-size: 1.2rem;
  color: var(--color-text-primary);
  margin-bottom: var(--spacing-sm);
  text-shadow: 0 0 10px rgba(86, 204, 242, 0.8);
`,Em=Gr.p`
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  font-size: 0.85rem;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.8);
  border-left: 2px solid rgba(86, 204, 242, 0.7);
  padding-left: 8px;
`,Cm=Gr.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);

  ${io} {
    gap: var(--spacing-xs);
  }
`,Tm=Gr.div`
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
`,Pm=Gr.span`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);

  ${io} {
    font-size: 1rem;
  }
`,_m=Gr.span`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);

  ${io} {
    font-size: 0.5rem;
  }
`,jm=Gr.div`
  position: absolute;
  top: 50%;
  left: 0;
  height: 1px;
  width: 100%;
  background: rgba(86, 204, 242, 0.5);
  z-index: 6;
  opacity: 0.3;
`,Am=Gr.div`
  position: absolute;
  top: 30%;
  left: 0;
  height: 2px;
  width: 30%;
  background: rgba(86, 204, 242, 0.6);
  z-index: 6;
  opacity: 0.4;
`,Rm=e=>{let{decks:t,activeDeckId:n,onSelectDeck:r}=e;const o=e=>{const t=e.cards[0];return(null===e||void 0===e?void 0:e.imageUrl)||(null===t||void 0===t?void 0:t.imageUrl)||"https://placehold.co/600x400?text=NoCover"};return(0,ic.jsx)(ym,{children:(0,ic.jsx)(bm,{children:t.map((e=>{const t=(e=>{const t={projects:0,skills:0,experiences:0};return e.cards.forEach((e=>{"project"===e.type?t.projects++:"skill"===e.type?t.skills++:"experience"===e.type&&t.experiences++})),t})(e);return(0,ic.jsxs)(xm,{active:e._id===n,onClick:()=>r(e._id),whileHover:{y:-5},whileTap:{y:0},children:[(0,ic.jsx)(wm,{imageUrl:o(e)}),(0,ic.jsxs)(Sm,{children:[(0,ic.jsx)(km,{children:e.title}),(0,ic.jsx)(Em,{children:e.description}),(0,ic.jsxs)(Cm,{children:[(0,ic.jsxs)(Tm,{children:[(0,ic.jsx)(Pm,{children:e.cards.length}),(0,ic.jsx)(_m,{children:"Cards"})]}),(0,ic.jsxs)(Tm,{children:[(0,ic.jsx)(Pm,{children:t.projects}),(0,ic.jsx)(_m,{children:"Projects"})]}),(0,ic.jsxs)(Tm,{children:[(0,ic.jsx)(Pm,{children:t.skills}),(0,ic.jsx)(_m,{children:"Skills"})]}),(0,ic.jsxs)(Tm,{children:[(0,ic.jsx)(Pm,{children:t.experiences}),(0,ic.jsx)(_m,{children:"Exp"})]})]})]}),(0,ic.jsx)(jm,{}),(0,ic.jsx)(Am,{})]},e._id)}))})})},Om=Gr.div`
  display: grid;
  grid-template-columns: 350px 1fr;
  gap: var(--spacing-lg);
  height: 100%;
  min-height: 100vh;
  height: auto;
  overflow: visible;

  ${io} {
    grid-template-columns: 150px 1fr;
    gap: var(--spacing-xs);
    padding: var(--spacing-xs);
    height: 100vh;
  }

  ${eo} {
    grid-template-columns: 1fr;
    gap: var(--spacing-sm);
    padding: var(--spacing-sm);
  }
`,Dm=Gr.div`
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

  ${io} {
    position: sticky;
    top: var(--spacing-xs);
    height: calc(100dvh - 24 * var(--spacing-xs));
    min-height: calc(100dvh - 24 * var(--spacing-xs));
    max-height: calc(100dvh - 24 * var(--spacing-xs));
    margin-bottom: 0;
  }

  ${eo} {
    position: relative;
    top: 0;
    min-height: auto;
    max-height: none;
    margin-bottom: var(--spacing-lg);
  }
`,Lm=Gr.div`
  padding: var(--spacing-sm) var(--spacing-md);
  border-bottom: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.2);

  ${io} {
    padding: var(--spacing-xs) var(--spacing-xs);
  }
`,zm=Gr.button`
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

  ${io} {
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
`,Nm=Gr.h2`
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

  ${io} {
    font-size: 0.8rem;
    margin-bottom: var(--spacing-xxs);
    &::before {
      font-size: 0.9rem;
      margin-right: var(--spacing-xs);
    }
  }
`,Fm=Gr.p`
  font-size: 0.8rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);

  ${io} {
    display: none;
  }
`,Im=Gr.button`
  background-color: rgba(86, 204, 242, 0.1);
  border: 1px solid var(--color-accent);
  padding: var(--spacing-xs) var(--spacing-sm);
  color: var(--color-text-primary);
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  cursor: pointer;

  ${io} {
    font-size: 0.65rem;
    padding: var(--spacing-xxs) var(--spacing-xs);
    margin-top: var(--spacing-xxs);
  }

  &:hover {
    background-color: rgba(86, 204, 242, 0.2);
  }
`,Mm=Gr.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: var(--spacing-xs);
  margin: var(--spacing-md) 0;

  ${io} {
    grid-template-columns: repeat(2, 1fr);
    gap: 2px;
    margin: var(--spacing-xs) 0;
  }
`,$m=Gr.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.3);
  padding: var(--spacing-xs);
  border-radius: var(--radius-sm);
  border: 1px solid var(--color-border);

  ${io} {
    padding: 2px;
  }
`,Bm=Gr.div`
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--color-text-primary);

  ${io} {
    font-size: 0.8rem;
  }
`,Vm=Gr.div`
  font-size: 0.7rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--color-text-secondary);

  ${io} {
    font-size: 0.5rem;
    letter-spacing: 0.02em;
  }
`,Um=Gr.div`
  overflow-y: auto;
  padding: var(--spacing-md);
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-sm);

  ${io} {
    padding: var(--spacing-xs);
    gap: 4px;
  }
`,Hm=Gr(ep.div)`
  display: flex;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: var(--radius-xs);
  border: 1px solid var(--color-border-subtle);
  padding: var(--spacing-xs) var(--spacing-sm);
  margin-bottom: 6px;
  cursor: pointer;
  min-height: 40px;

  ${io} {
    padding: 3px var(--spacing-xs);
    min-height: 32px;
    margin-bottom: 3px;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.07);
    border-color: var(--color-accent-light);
  }
`,Wm=Gr.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: ${e=>{let{cardType:t}=e;return t===Lf.PROJECT?"var(--color-project-dark)":t===Lf.SKILL?"var(--color-skill-dark)":t===Lf.EXPERIENCE?"var(--color-experience-dark)":"var(--color-grey-dark)"}};
  color: var(--color-text-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 0.9rem;
  margin-right: var(--spacing-sm);
  border: 1px solid var(--color-border);

  ${io} {
    width: 22px;
    height: 22px;
    font-size: 0.7rem;
    margin-right: var(--spacing-xs);
  }

  &::before {
    content: "${e=>{let{cardType:t}=e;return t.charAt(0).toUpperCase()}}";
  }
`,Ym=Gr.div`
  flex-grow: 1;
  font-size: 0.9rem;
  color: var(--color-text-primary);
  font-weight: 500;

  ${io} {
    font-size: 0.7rem;
  }
`,Km=Gr.button`
  background: none;
  border: none;
  color: var(--color-danger);
  font-size: 1.2rem;
  cursor: pointer;
  padding: var(--spacing-xs);
  margin-left: var(--spacing-sm);
  line-height: 1;

  ${io} {
    font-size: 0.8rem;
    padding: 2px;
    margin-left: var(--spacing-xs);
  }

  &:hover {
    color: var(--color-danger-hover);
  }
`,Qm=Gr.div`
  padding: var(--spacing-lg);
  text-align: center;
  color: var(--color-text-secondary);
  font-style: italic;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;

  ${io} {
    font-size: 0.75rem;
    padding: var(--spacing-sm);
  }
`,Xm=Gr.div`
  display: flex;
  flex-direction: column;
  height: auto;
  min-height: 100%;

  ${io} {
    height: calc(100dvh - 24 * var(--spacing-xs));
    overflow-y: auto;
  }
`,qm=Gr.div`
  margin-bottom: var(--spacing-md);

  ${io} {
    margin-bottom: var(--spacing-xs);
  }
`,Gm=Gr.label`
  display: block;
  font-size: 0.9rem;
  margin-bottom: var(--spacing-xs);
  color: var(--color-text-secondary);
`,Jm=Gr.input`
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
`,Zm=Gr.textarea`
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
`,eg=Gr.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: var(--spacing-md);

  ${io} {
    margin-top: var(--spacing-xs);
  }
`,tg=Gr.button`
  background-color: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.2)":"rgba(0, 0, 0, 0.3)"}};
  border: 1px solid
    ${e=>{let{variant:t}=e;return"primary"===t?"var(--color-accent)":"var(--color-border)"}};
  color: var(--color-text-primary);
  padding: var(--spacing-sm) var(--spacing-md);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;

  ${io} {
    font-size: 0.7rem;
    padding: var(--spacing-xs) var(--spacing-xs);
  }

  &:hover {
    background-color: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.3)":"rgba(0, 0, 0, 0.4)"}};
  }
`,ng=Gr.div`
  padding: var(--spacing-md);
  border-top: 1px solid var(--color-border);
  background-color: rgba(0, 0, 0, 0.1);
  margin-top: auto;

  ${io} {
    padding: var(--spacing-xs);
  }
`,rg=t=>{let{deck:n,onRemoveCard:r,onSelectCard:o,onExportDeck:i,onSaveDeck:a,onGoBack:s,onAddToDeck:l}=t;const[c,u]=(0,e.useState)(n.title),[d,p]=(0,e.useState)(n.description),[f,h]=(0,e.useState)([]),[m,g]=(0,e.useState)(!1),[v,y]=(0,e.useState)(null),b=n.cards,x="custom"===n._id,w=b.reduce(((e,t)=>{const n=e.find((e=>e._id===t._id));return n?n.quantity+=1:e.push({...t,quantity:1}),e}),[]),S=b.filter((e=>"project"===e.type)).length,k=b.filter((e=>"skill"===e.type)).length,E=b.filter((e=>"experience"===e.type)).length;return(0,e.useEffect)((()=>{(async()=>{try{const{ok:e,data:t,error:n}=await Jf.get("/cards"+(v?`?type=${v}`:""));if(!e)throw new Error(n);h(t)}catch(e){console.error(e)}})()}),[v]),(0,ic.jsxs)(Om,{children:[(0,ic.jsxs)(Dm,{children:[(0,ic.jsxs)(Lm,{children:[(0,ic.jsx)(zm,{onClick:s,children:"Back to Decks"}),(!x||!m)&&(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsx)(Nm,{children:c}),(0,ic.jsx)(Fm,{children:d})]}),x&&m&&(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(qm,{children:[(0,ic.jsx)(Gm,{children:"Deck Name"}),(0,ic.jsx)(Jm,{type:"text",value:c,onChange:e=>u(e.target.value),placeholder:"Enter deck name"})]}),(0,ic.jsxs)(qm,{children:[(0,ic.jsx)(Gm,{children:"Description"}),(0,ic.jsx)(Zm,{value:d,onChange:e=>p(e.target.value),placeholder:"Enter deck description"})]}),(0,ic.jsxs)(eg,{children:[(0,ic.jsx)(tg,{onClick:()=>g(!1),children:"Cancel"}),(0,ic.jsx)(tg,{variant:"primary",onClick:()=>{a&&a(c,d),g(!1)},children:"Save"})]})]})]}),(0,ic.jsx)(Um,{children:(0,ic.jsx)(um,{children:w.length>0?w.map((e=>(0,ic.jsxs)(Hm,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},exit:{opacity:0,x:20},transition:{duration:.2},onClick:()=>o(e),children:[(0,ic.jsx)(Wm,{cardType:e.type}),(0,ic.jsx)(Ym,{children:e.title}),x&&(0,ic.jsx)(Km,{onClick:t=>{t.stopPropagation();const n=b.find((t=>t._id===e._id));n&&r(n)},children:"\xd7"})]},e._id))):(0,ic.jsx)(Qm,{children:x?"Your deck is empty. Add cards from the right panel.":"This deck has no cards."})})}),(!x||!m)&&(0,ic.jsxs)(ng,{children:[(0,ic.jsxs)(Mm,{children:[(0,ic.jsxs)($m,{children:[(0,ic.jsx)(Bm,{children:b.length}),(0,ic.jsx)(Vm,{children:"Cards"})]}),(0,ic.jsxs)($m,{children:[(0,ic.jsx)(Bm,{children:S}),(0,ic.jsx)(Vm,{children:"Projects"})]}),(0,ic.jsxs)($m,{children:[(0,ic.jsx)(Bm,{children:k}),(0,ic.jsx)(Vm,{children:"Skills"})]}),(0,ic.jsxs)($m,{children:[(0,ic.jsx)(Bm,{children:E}),(0,ic.jsx)(Vm,{children:"Exp"})]})]}),(0,ic.jsxs)(eg,{children:[x&&(0,ic.jsxs)(Im,{onClick:()=>g(!0),style:{width:"100%"},children:["Edit"," ",(0,ic.jsx)("span",{style:{display:""+(io?"none":"inline")},children:"Deck Info"})]}),(0,ic.jsxs)(tg,{onClick:i,variant:"primary",style:{width:"100%"},children:["Export"," ",(0,ic.jsx)("span",{style:{display:""+(io?"none":"inline")},children:"Deck"})]})]})]})]}),(0,ic.jsx)(Xm,{children:(0,ic.jsx)(bh,{cards:f,onSelectCard:o,onAddToDeck:x?l:void 0,onRemoveFromDeck:x?r:void 0,cardsInDeck:x?b.map((e=>e._id)):[],onFilterChange:e=>{y(e)}})})]})},og=Gr.div`
  margin-bottom: var(--spacing-lg);
`,ig=Gr.h1`
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
`,ag=Gr.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  max-width: 800px;
`,sg=()=>{const[t,n]=(0,e.useState)("decks"),[r,o]=rm("userDeck",[]),[i,a]=(0,e.useState)(null),[s,l]=rm("activeDeckId","custom"),[c,u]=rm("customDeckName","Your Custom Collection"),[d,p]=rm("customDeckDesc","Added/Deleted cards will only affect this collection."),[f,h]=(0,e.useState)(!1),[m,g]=(0,e.useState)("list"),[v,y]=(0,e.useState)([]),[b,x]=(0,e.useState)([]),[w,S]=(0,e.useState)(!1),[k,E]=(0,e.useState)(null),[C,T]=(0,e.useState)([]);(0,e.useEffect)((()=>{(async()=>{try{const{ok:e,data:t,error:n}=await Jf.get("/cards");if(!e)throw new Error(n);T(t)}catch(k){console.error(k)}})(),(async()=>{S(!0),E(null);try{const{ok:e,data:t,error:n}=await Jf.get("/decks");if(!e)throw new Error(n);x(t)}catch(k){console.error("Failed to fetch decks:",k),E("Failed to load decks")}finally{S(!1)}})()}),[]),(0,e.useEffect)((()=>{(async()=>{if("custom"!==s){S(!0),E(null);try{const{ok:e,data:t,error:n}=await Jf.get(`/decks/${s}`);if(!e)throw new Error(n);y(t.cards)}catch(k){console.error("Failed to fetch deck cards:",k),y([])}finally{S(!1)}}else y(r)})()}),[s]);const P={_id:"custom",title:c,imageUrl:"https://images.unsplash.com/photo-1699275303988-4f266a7f119a?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNob2ljZSUyMGRlc2t0b3AlMjBjdXJzb3J8ZW58MHx8MHx8fDI%3D",description:d,cards:r},_=[P,...b],j="custom"===s?P:b.find((e=>e._id===s))||P,A=e=>{r.find((t=>t._id===e._id))||o([...r,e]),h(!1)},R=e=>{o(r.filter((t=>t._id!==e._id)))},O=()=>{const e={name:"custom"===j._id?c:j.title,description:"custom"===j._id?d:j.description,cards:"custom"===j._id?r:j.cards},t=JSON.stringify(e,null,2),n="data:application/json;charset=utf-8,"+encodeURIComponent(t),o=`${e.name.toLowerCase().replace(/\s+/g,"-")}.json`,i=document.createElement("a");i.setAttribute("href",n),i.setAttribute("download",o),i.click()},D=e=>{a(e),h(!0)},L=e=>{l(e),g("editor")},z=(e,t)=>{"custom"===s&&(u(e),p(t))};return(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(vm,{activeTab:t,onTabChange:n,hideSidebar:"decks"===t&&"editor"===m,children:["decks"===t?"editor"===m?(0,ic.jsx)(rg,{deck:j,onRemoveCard:R,onSelectCard:D,onExportDeck:O,onSaveDeck:z,onGoBack:()=>g("list"),onAddToDeck:A}):(0,ic.jsx)(Rm,{decks:_,activeDeckId:s,onSelectDeck:L}):(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(og,{children:[(0,ic.jsxs)(ig,{children:["Card ",(0,ic.jsx)("span",{className:"highlight",children:"Collection"})]}),(0,ic.jsx)(ag,{children:"Browse through all my projects, skills, and experiences. Add cards to your collection to build your own view of my portfolio."})]}),(0,ic.jsx)(bh,{cards:C,onSelectCard:D,cardsInDeck:r.map((e=>e._id)),onAddToDeck:A,onRemoveFromDeck:R})]}),(0,ic.jsx)(qf,{})]}),(0,ic.jsx)(gm,{isOpen:f,onClose:()=>h(!1),children:i&&(0,ic.jsx)(nm,{card:i,onAddToDeck:()=>A(i),onRemoveFromDeck:()=>R(i),isInDeck:!!r.find((e=>e._id===i._id)),onRelationClick:e=>{a(e)}})})]})},lg=Gr.div`
    position: relative;
    width: 100%;
    overflow: hidden;
    height: 25rem;

    ${io} {
        height: 15rem;
    }
`,cg=Gr(ep.div)`
  display: flex;
  flex-grow: 0;
  width: 100%;
  height: fit-content;
  gap: var(--spacing-md);
  justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`,ug=Gr.div`
    display: flex;
    justify-content: space-between;
    margin-top: var(--spacing-sm);
`,dg=Gr.button`
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
`,pg=Gr.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    margin-top: var(--spacing-sm);
`,fg=Gr.div`
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>e.active?"var(--color-accent)":"rgba(255, 255, 255, 0.3)"};
    transition: all 0.3s ease;
`,hg=t=>{let{items:n,itemsPerPage:r=3,breakpoints:o={768:1,1340:2,1700:3,1836:4,2200:5,2560:6}}=t;const[i,a]=(0,e.useState)(0),[s,l]=(0,e.useState)(0),[c,u]=(0,e.useState)(r),d=e=>{const t=[];for(let r=0;r<n.length;r+=e)t.push(n.slice(r,r+e));return t},[p,f]=(0,e.useState)((()=>d(c)));(0,e.useEffect)((()=>{const e=()=>{const e=Object.keys(o).map(Number).sort(((e,t)=>t-e));let t=r;for(const n of e)window.innerWidth<=n&&(t=o[n]);t!==c&&(u(t),f(d(t)),a(0))};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[o,r,c]),(0,e.useEffect)((()=>{f(d(c)),a(0)}),[n,c]);const h=p.length>1;return(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsx)(lg,{children:(0,ic.jsx)(um,{initial:!1,custom:s,mode:"popLayout",children:(0,ic.jsx)(cg,{custom:s,variants:{enter:e=>({x:e>0?"100%":"-100%",opacity:0}),center:{x:0,opacity:1},exit:e=>({x:e<0?"100%":"-100%",opacity:0})},initial:"enter",animate:"center",exit:"exit",transition:{type:"spring",stiffness:300,damping:30},children:p[i]},i)})}),h&&(0,ic.jsxs)(ug,{children:[(0,ic.jsx)(dg,{onClick:()=>{l(-1),a((e=>0===e?p.length-1:e-1))},"aria-label":"Previous slide",children:"\u2190"}),(0,ic.jsx)(pg,{children:p.map(((e,t)=>(0,ic.jsx)(fg,{active:i===t,onClick:()=>a(t)},t)))}),(0,ic.jsx)(dg,{onClick:()=>{l(1),a((e=>e===p.length-1?0:e+1))},"aria-label":" Next slide",children:"\u2192"})]})]})};const mg=n.p+"static/media/avatar-frame.6dc08242a61b017341e63615d50ced51.svg",gg="246b829d86264eb2b035dee9801de7a0",vg="6a69202a17dc4601ad5f5849fe7e31e0";const yg=new class{constructor(){this.accessToken="",this.tokenExpiry=0}async getAccessToken(){if(this.accessToken&&Date.now()<this.tokenExpiry)return this.accessToken;const e=new URLSearchParams({grant_type:"refresh_token",refresh_token:"AQBbufrvOcQEcjByxf6jJPbY0IDVJQjUYOYjRNbLQFurPOaC8KGeOt38HVsTfnN-9GwQo6In8djjDc1ySSh37SyivKJsrm8JR-gm1pxXnFCunci0ixXoupC4X3WIDRzvacA"}),t={"Content-Type":"application/x-www-form-urlencoded",Authorization:`Basic ${btoa(`${gg}:${vg}`)}`};console.log("SPOTIFY_CLIENT_ID: ",gg),console.log("SPOTIFY_CLIENT_SECRET: ",vg),console.log("Headers: ",t),console.log("Body: ",e);try{const n=await fetch("https://accounts.spotify.com/api/token",{method:"POST",headers:t,body:e.toString()}),r=await n.json();if(r.access_token)return this.accessToken=r.access_token,this.tokenExpiry=Date.now()+1e3*r.expires_in,this.accessToken;throw new Error("Failed to get access token")}catch(n){throw console.error("Error getting Spotify access token:",n),n instanceof Error?n:new Error("Unknown error")}}async makeRequest(e){try{const t=await this.getAccessToken(),n=await fetch(`https://api.spotify.com/v1${e}`,{headers:{Authorization:`Bearer ${t}`,"Content-Type":"application/json"}});if(!n.ok)throw new Error(`Spotify API error: ${n.status}`);return{ok:!0,data:await n.json(),error:""}}catch(t){console.error("Spotify API request failed:",t);return{ok:!1,data:null,error:t instanceof Error?t.message:"Unknown error"}}}async getCurrentlyPlaying(){try{const e=await this.makeRequest("/me/player/currently-playing");if(!e.data)return{ok:!0,data:null,error:""};const t=e.data;return{ok:!0,data:{repeat_state:t.repeat_state,shuffle_state:t.shuffle_state,progress_ms:t.progress_ms,item:t.item,currently_playing_type:t.currently_playing_type,is_playing:t.is_playing},error:""}}catch(e){return{ok:!1,data:null,error:"Failed to fetch currently playing"}}}async getProfile(){return await new Promise((e=>setTimeout(e,300))),{ok:!0,data:{displayName:"atinyshrimp",followers:42,profileUrl:"https://open.spotify.com/user/mock",profileImageUrl:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=150&h=150&fit=crop&crop=center"},error:""}}async getRecentlyPlayed(){return await new Promise((e=>setTimeout(e,400))),{ok:!0,data:[{id:"mock-2",name:"Blinding Lights",artists:["The Weeknd"],album:"After Hours",albumArtUrl:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",externalUrl:"https://open.spotify.com/track/mock2",duration:2e5,isPlaying:!1},{id:"mock-3",name:"Midnight City",artists:["M83"],album:"Hurry Up, We're Dreaming",albumArtUrl:"https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=300&fit=crop&crop=center",externalUrl:"https://open.spotify.com/track/mock3",duration:245e3,isPlaying:!1}],error:""}}},bg=yg,xg=Gr.h1`
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
`,wg=Gr.p`
  font-size: 0.9rem;
  color: var(--color-text-secondary);
  margin-bottom: var(--spacing-md);
  max-width: 800px;

  .highlight {
    color: var(--color-accent);
    margin-left: 8px;
  }
`,Sg=Gr.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`,kg=Gr.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: var(--spacing-lg);
  gap: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-md);
  }
`,Eg=Gr.div`
  flex: 1;
`,Cg=Gr.div`
  flex: 0 0 auto;
`,Tg=Gr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,Pg=Gr.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
`,_g=Gr.div`
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
`,jg=Gr.div`
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
`,Ag=Gr.div`
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
`,Rg=Gr.h2`
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
`,Og=Gr.div`
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
`,Dg=Gr.div`
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
`,Lg=Gr.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: var(--spacing-xs);
  font-size: 0.9rem;
`,zg=Gr.div`
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
`,Ng=Gr.div`
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
`,Fg=Gr.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-sm);
  margin: var(--spacing-md) 0;
`,Ig=Gr(ep.div)`
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

    ${io} {
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

    ${io} {
      font-size: 0.6rem;
    }
  }
`,Mg=Gr.div`
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
`,$g=Gr.h3`
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
`,Bg=Gr.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: var(--spacing-sm);
`,Vg=Gr(ep.div)`
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
`,Ug=Gr(ep.div)`
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

  ${io} {
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
`,Hg=Gr.div`
  font-size: 0.9rem;
  color: var(--color-text-secondary);

  ${io} {
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
`,Wg=Gr.main`
  grid-area: ${e=>{let{fullWidth:t}=e;return t?"sidebar / span 2":"main-content"}};
  overflow-y: auto;
  padding: var(--spacing-xxl);
  position: relative;
`,Yg=Gr.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-md);
  margin: var(--spacing-md) 0;
`,Kg=Gr.a`
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
`,Qg=Gr.button`
  padding: var(--spacing-sm) var(--spacing-md);
  background: ${e=>{let{variant:t}=e;return"primary"===t?"rgba(86, 204, 242, 0.2)":"rgba(231, 76, 60, 0.2)"}};
  border: 1px solid
    ${e=>{let{variant:t}=e;return"primary"===t?"var(--color-accent)":"var(--color-skill)"}};
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  font-weight: 600;
  font-size: 0.9rem;

  ${io} {
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
`,Xg=Gr.div`
  display: flex;
  position: relative;
  justify-content: center;
  gap: var(--spacing-md);
  margin-top: var(--spacing-md);
`,qg=Gr(ep.div)`
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
`,Gg=Gr(ep.div)`
  background: rgba(0, 0, 0, 0.6);
  border-radius: var(--radius-sm);
  padding: 8px 10px;
  border: 2px solid transparent;
  border-image: linear-gradient(
      135deg,
      var(--color-accent),
      var(--color-panel-highlight)
    )
    1;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 4px 12px rgba(29, 185, 84, 0.3);
  max-width: 280px;
  display: flex;
  align-items: center;
  gap: 1rem;
  transform: translate3d(0, 0, 0);

  /* Cyberpunk angular frame */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 1px solid transparent;
    border-image: linear-gradient(
        135deg,
        var(--color-panel-border),
        var(--color-bg-secondary)
      )
      1;
    clip-path: polygon(
      0 0,
      100% 0,
      100% 8px,
      calc(100% - 8px) 16px,
      100% 24px,
      100% 100%,
      0 100%,
      0 calc(100% - 8px),
      8px calc(100% - 16px),
      0 calc(100% - 24px)
    );
    pointer-events: none;
    backface-visibility: hidden;
  }

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(29, 185, 84, 0.4);
  }
`,Jg=Gr.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  flex: 1;

  .album-art {
    width: 50px;
    height: 50px;
    border-radius: 4px;
    overflow: hidden;
    flex-shrink: 0;
    border: 2px solid transparent;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      position: relative;
      z-index: 1;
    }
  }

  .track-details {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 1px;

    .track-name {
      font-weight: bold;
      color: var(--color-text-primary);
      font-size: 0.75rem;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      word-wrap: break-word;
      max-width: 10rem;
    }

    .artist-name {
      color: var(--color-text-secondary);
      font-size: 0.65rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      line-height: 1.2;
    }

    .time-info {
      color: var(--color-text-secondary);
      font-size: 0.6rem;
      opacity: 0.8;
      line-height: 1.2;
    }
  }
`,Zg=Gr.div`
  display: flex;
  align-items: center;
  gap: 1px;
  margin-left: auto;
  position: relative;

  .bar {
    width: 2px;
    background: linear-gradient(to top, var(--color-panel-highlight), #1ed760);
    animation: ${e=>{let{isPlaying:t}=e;return t?"waveform 1.5s ease-in-out infinite":"none"}};
    box-shadow: 0 0 4px rgba(29, 185, 84, 0.6);
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(to top, transparent, rgba(29, 185, 84, 0.3));
      border-radius: 1px;
    }

    &:nth-child(1) {
      height: 8px;
      animation-delay: 0s;
    }
    &:nth-child(2) {
      height: 12px;
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      height: 6px;
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      height: 10px;
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      height: 4px;
      animation-delay: 0.4s;
    }
    &:nth-child(6) {
      height: 8px;
      animation-delay: 0.5s;
    }
    &:nth-child(7) {
      height: 12px;
      animation-delay: 0.6s;
    }
  }

  @keyframes waveform {
    0%,
    100% {
      transform: scaleY(1);
      box-shadow: 0 0 4px rgba(29, 185, 84, 0.6);
    }
    50% {
      transform: scaleY(1.5);
      box-shadow: 0 0 8px rgba(29, 185, 84, 0.8);
    }
  }
`,ev=()=>{var t,n,r,o,i,a,s;const[l,c]=(0,e.useState)(null),[u,d]=(0,e.useState)(null),p=e=>`${Math.floor(e/6e4)}:${Math.floor(e%6e4/1e3).toString().padStart(2,"0")}`;return(0,e.useEffect)((()=>{setInterval((()=>{(async()=>{try{const[e,t]=await Promise.all([bg.getCurrentlyPlaying(),bg.getProfile()]);if(!e.ok)throw new Error("Failed to fetch current track");const n=await e.data;if(c(n),!t.ok)throw new Error("Failed to fetch profile");const r=await t.data;d(r)}catch(e){console.error("Error fetching Spotify data:",e)}})()}),1e3)}),[]),l&&u?(0,ic.jsx)("a",{href:(null===(t=l.item)||void 0===t?void 0:t.external_urls.spotify)||"",target:"_blank",rel:"noopener noreferrer",children:(0,ic.jsxs)(Gg,{initial:{opacity:0,x:20},animate:{opacity:1,x:0},transition:{duration:.3},children:[(0,ic.jsxs)(Jg,{children:[(0,ic.jsx)("div",{className:"album-art",children:(0,ic.jsx)("img",{src:(null===(n=l.item)||void 0===n||null===(r=n.album.images[0])||void 0===r?void 0:r.url)||"",alt:(null===(o=l.item)||void 0===o?void 0:o.album.name)||""})}),(0,ic.jsxs)("div",{className:"track-details",children:[(0,ic.jsx)("div",{className:"track-name",children:(null===(i=l.item)||void 0===i?void 0:i.name)||""}),(0,ic.jsx)("div",{className:"artist-name",children:(null===(a=l.item)||void 0===a||null===(s=a.album.artists)||void 0===s?void 0:s.map((e=>e.name)).join(", "))||""}),l.progress_ms&&l.item&&(0,ic.jsxs)("div",{className:"time-info",children:[p(l.progress_ms)," /"," ",p(l.item.duration_ms)]})]})]}),(0,ic.jsxs)(Zg,{isPlaying:(null===l||void 0===l?void 0:l.is_playing)||!1,children:[(0,ic.jsx)("div",{className:"bar"}),(0,ic.jsx)("div",{className:"bar"}),(0,ic.jsx)("div",{className:"bar"}),(0,ic.jsx)("div",{className:"bar"}),(0,ic.jsx)("div",{className:"bar"}),(0,ic.jsx)("div",{className:"bar"})]})]})}):null},tv=()=>{const[t,n]=(0,e.useState)(!1),[r,o]=(0,e.useState)(null),[i,a]=(0,e.useState)({cardsCollected:0,decksCreated:0}),s=(0,e.useRef)(null),l=(0,e.useRef)(null);if((0,e.useEffect)((()=>{(async()=>{try{const{ok:e,data:t,error:n}=await Jf.get("/profile");if(!e)throw new Error(n);o(t)}catch(e){console.error(e)}})(),(async()=>{try{const{ok:e,error:t,total:n}=await Jf.get("/cards?limit=0");if(!e)throw new Error(t);const{ok:r,error:o,total:i}=await Jf.get("/decks?limit=0");if(!r)throw new Error(o);a({cardsCollected:null!==n&&void 0!==n?n:0,decksCreated:null!==i&&void 0!==i?i:0})}catch(e){console.error(e)}})()}),[]),(0,e.useEffect)((()=>{const e=e=>{l.current&&!l.current.contains(e.target)&&s.current&&!s.current.contains(e.target)&&n(!1)};return document.addEventListener("mousedown",e),()=>{document.removeEventListener("mousedown",e)}}),[]),!r)return(0,ic.jsx)("div",{children:"Loading..."});const c=(e=>{const t=new Date,n=new Date(new Date(e).setFullYear(t.getFullYear()));n>t&&n.setFullYear(n.getFullYear()-1);const r=t.getTime()-n.getTime(),o=Math.floor(r/864e5);return console.log("Days since last birthday:",o),Math.floor(o*wh(e)/Sh())})(r.dateOfBirth),u=wh(r.dateOfBirth),d=(e=>{const t=(new Date).getTime()-new Date(e).getTime(),n=Math.floor(t/31536e6);return Math.floor(n)})(r.dateOfBirth);return(0,ic.jsxs)(Wg,{fullWidth:!0,children:[(0,ic.jsxs)(kg,{children:[(0,ic.jsxs)(Eg,{children:[(0,ic.jsxs)(xg,{children:["Player ",(0,ic.jsx)("span",{className:"highlight",children:"Profile"})]}),(0,ic.jsxs)(wg,{children:["Server:",(0,ic.jsx)("span",{className:"highlight",children:"World Z"})," | Region:",(0,ic.jsx)("span",{className:"highlight",children:"Europe/Paris"})]})]}),(0,ic.jsx)(Cg,{children:(0,ic.jsx)(ev,{})})]}),(0,ic.jsxs)(Sg,{children:[(0,ic.jsxs)(Tg,{children:[(0,ic.jsxs)(_g,{children:[(0,ic.jsxs)(jg,{children:[(0,ic.jsx)(Ag,{children:(0,ic.jsx)("img",{src:r.avatar,alt:"Github Avatar"})}),(0,ic.jsx)("img",{src:mg,alt:"Avatar Frame",style:{position:"absolute",width:"100%",height:"100%",top:0,left:0,pointerEvents:"none",zIndex:3}})]}),(0,ic.jsx)(Rg,{children:r.username}),(0,ic.jsx)(Og,{children:r.title}),(0,ic.jsxs)(Xg,{children:[(0,ic.jsx)(Qg,{ref:s,variant:"primary",onClick:()=>n(!t),children:"Join Guild"}),t&&(0,ic.jsx)(qg,{ref:l,initial:{opacity:0,y:-10},animate:{opacity:1,y:0},exit:{opacity:0,y:-10},transition:{type:"spring",duration:.3},children:(0,ic.jsxs)(Yg,{children:[(0,ic.jsx)(Kg,{href:r.socials.linkedin,target:"_blank","aria-label":"LinkedIn",children:(0,ic.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",children:(0,ic.jsx)("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})})}),(0,ic.jsx)(Kg,{href:r.socials.github,target:"_blank","aria-label":"GitHub",children:(0,ic.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",children:(0,ic.jsx)("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})})}),(0,ic.jsx)(Kg,{href:r.socials.itchio,target:"_blank","aria-label":"Itch.io",children:(0,ic.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,ic.jsx)("path",{d:"M71.9 34.8C50.2 47.7 7.4 96.8 7 109.7v21.3c0 27.1 25.3 50.8 48.3 50.8 27.6 0 50.5-22.9 50.5-50 0 27.1 22.2 50 49.8 50s49-22.9 49-50c0 27.1 23.6 50 51.2 50h.5c27.6 0 51.2-22.9 51.2-50 0 27.1 21.5 50 49 50s49.8-22.9 49.8-50c0 27.1 23 50 50.5 50 23 0 48.3-23.8 48.3-50.8v-21.3c-.4-12.9-43.2-62.1-64.9-75C372.6 32.4 325.8 32 256 32S91.1 33.1 71.9 34.8zm132.3 134.4c-22 38.4-77.9 38.7-99.9 .3-13.2 23.1-43.2 32.1-56 27.7-3.9 40.2-13.7 237.1 17.7 269.2 80 18.7 302.1 18.1 379.8 0 31.7-32.3 21.3-232 17.8-269.2-12.9 4.4-42.9-4.6-56-27.7-22 38.5-77.9 38.1-99.9-.2-7.1 12.5-23.1 28.9-51.8 28.9a57.5 57.5 0 0 1 -51.8-28.9zm-41.6 53.8c16.5 0 31.1 0 49.2 19.8a436.9 436.9 0 0 1 88.2 0C318.2 223 332.9 223 349.3 223c52.3 0 65.2 77.5 83.9 144.5 17.3 62.2-5.5 63.7-34 63.7-42.2-1.6-65.5-32.2-65.5-62.8-39.3 6.4-101.9 8.8-155.6 0 0 30.6-23.3 61.2-65.5 62.8-28.4-.1-51.2-1.6-33.9-63.7 18.7-67 31.6-144.5 83.9-144.5zM256 270.8s-44.4 40.8-52.4 55.2l29-1.2v25.3c0 1.6 21.3 .2 23.3 .2 11.7 .5 23.3 1 23.3-.2v-25.3l29 1.2c-8-14.5-52.4-55.2-52.4-55.2z"})})})]})}),(0,ic.jsx)(Qg,{variant:"secondary",onClick:()=>window.open("mailto:joyce.lapilus@gmail.com"),children:"Send Friend Request"})]}),(0,ic.jsxs)(Dg,{children:[(0,ic.jsxs)(Lg,{children:[(0,ic.jsxs)("span",{children:["Level ",d]}),(0,ic.jsxs)("span",{children:[c,"/",u," XP"]})]}),(0,ic.jsx)("div",{style:{position:"relative"},children:(0,ic.jsx)(zg,{children:(0,ic.jsx)(Ng,{progress:c/u*100+"%"})})})]}),(0,ic.jsxs)(Fg,{children:[(0,ic.jsxs)(Ig,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.2},children:[(0,ic.jsx)("div",{className:"stat-value",children:i.cardsCollected}),(0,ic.jsx)("div",{className:"stat-label",children:"Cards"})]}),(0,ic.jsxs)(Ig,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.3,delay:.4},children:[(0,ic.jsx)("div",{className:"stat-value",children:i.decksCreated}),(0,ic.jsx)("div",{className:"stat-label",children:"Decks"})]})]}),(0,ic.jsx)("div",{style:{height:"var(--spacing-md)",display:"flex",alignItems:"center",justifyContent:"flex-end"},children:(0,ic.jsxs)("a",{href:r.resume,target:"_blank",rel:"noopener noreferrer",style:{fontSize:"0.8rem"},children:["Reveal stats sheet ",(0,ic.jsx)("span",{children:"\ud83d\udd0d"})]})}),(0,ic.jsxs)(Mg,{children:["Member since"," ",(0,ic.jsx)("span",{children:new Date(r.dateOfBirth).getFullYear()})]})]}),(0,ic.jsxs)(_g,{style:{marginTop:"var(--spacing-md)"},children:[(0,ic.jsx)($g,{children:"Achievements"}),(0,ic.jsx)(Bg,{children:r.achievements.map((e=>(0,ic.jsxs)(Vg,{unlocked:e.unlocked,initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{duration:.3},"data-tooltip-id":"achievement","data-tooltip-content":e.description,"data-tooltip-hidden":!e.unlocked,children:[(0,ic.jsx)("div",{className:"achievement-icon",children:e.icon}),(0,ic.jsx)("div",{className:"achievement-name",children:e.title})]},e._id)))})]})]}),(0,ic.jsxs)(Pg,{children:[(0,ic.jsxs)(_g,{children:[(0,ic.jsx)($g,{children:"Featured Items"}),(0,ic.jsx)(hg,{items:r.interests.filter((e=>e.isFeatured)).map((e=>(0,ic.jsxs)(Ug,{initial:{opacity:0,x:-20},animate:{opacity:1,x:0},transition:{duration:.3},image:e.imageUrl,children:[(0,ic.jsx)("div",{className:"card-overlay",style:{position:"absolute",top:0,left:0,right:0,bottom:0,background:"rgba(0,0,0,0.2)",backgroundImage:"linear-gradient(0deg, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 100%)",zIndex:1}}),(0,ic.jsx)("div",{className:"interest-badge",style:{position:"absolute",top:"12px",right:"12px",background:"rgba(86, 204, 242, 0.3)",padding:"4px 12px",borderRadius:"0",fontSize:"0.7rem",fontWeight:"bold",color:"#fff",zIndex:3,letterSpacing:"0.5px",clipPath:"polygon(0 0, 100% 0, 95% 100%, 0 100%)",boxShadow:"0 0 10px rgba(86, 204, 242, 0.4)",border:"1px solid rgba(86, 204, 242, 0.7)",backdropFilter:"blur(4px)",transition:"all 0.3s ease"},children:e.highlight}),(0,ic.jsx)("div",{style:{position:"absolute",top:"50%",left:"0",height:"1px",width:"100%",background:"rgba(86, 204, 242, 0.5)",zIndex:2,opacity:.3}}),(0,ic.jsx)("div",{style:{position:"absolute",top:"30%",left:"0",height:"2px",width:"30%",background:"rgba(86, 204, 242, 0.6)",zIndex:2,opacity:.4}}),(0,ic.jsxs)("div",{style:{padding:"20px",display:"flex",flexDirection:"column",alignItems:"flex-start",justifyContent:"flex-end",position:"absolute",bottom:0,left:0,right:0,zIndex:2},children:[(0,ic.jsx)("div",{style:{fontSize:io?"1rem":"1.2rem",fontWeight:"bold",color:"white",textShadow:"0 0 10px rgba(86, 204, 242, 0.8)",letterSpacing:"1px",marginBottom:"2px",textTransform:"uppercase"},children:e.title}),(0,ic.jsx)("div",{style:{color:"rgba(255,255,255,0.9)",fontSize:io?"0.75rem":"0.85rem",textShadow:"0 1px 2px rgba(0,0,0,0.8)",borderLeft:"2px solid rgba(86, 204, 242, 0.7)",paddingLeft:"8px"},children:e.description})]})]},e._id))),itemsPerPage:4})]}),(0,ic.jsxs)(_g,{style:{marginTop:"var(--spacing-md)"},children:[(0,ic.jsx)($g,{children:"Latest Updates"}),(0,ic.jsx)(Hg,{children:r.activities.sort(((e,t)=>new Date(t.happenedAt).getTime()-new Date(e.happenedAt).getTime())).slice(0,8).map(((e,t)=>(0,ic.jsxs)("p",{children:[e.description,(0,ic.jsx)("span",{className:"time",children:`(${kh(e.happenedAt)})`})]},t)))})]})]})]}),(0,ic.jsx)(Df,{id:"achievement",place:"top",style:{zIndex:9999}}),(0,ic.jsx)(qf,{})]})},nv=Gr.div`
  max-width: 800px;
  margin: 0 auto;
  padding: var(--spacing-xl);
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`,rv=Gr(ep.h1)`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: 0 0 10px rgba(86, 204, 242, 0.5);

  ${no} {
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
`,ov=Gr.section`
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
`,iv=Gr.h2`
  font-size: 1.8rem;
  margin-bottom: var(--spacing-md);
  color: var(--color-text-primary);
  position: relative;
  display: inline-block;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  z-index: 2;

  ${no} {
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
`,av=Gr.p`
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  line-height: 1.8;
  margin-bottom: var(--spacing-md);
  position: relative;
  z-index: 2;

  ${no} {
    font-size: 0.8rem;
  }
`,sv=Gr.div`
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xl);
  margin: var(--spacing-lg) 0;
  position: relative;
  z-index: 2;
`,lv=Gr.div`
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
`,cv=Gr.h3`
  font-size: 1.3rem;
  margin-bottom: var(--spacing-sm);
  color: var(--color-text-primary);
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,uv=Gr.p`
  font-size: 1rem;
  color: var(--color-text-secondary);
  line-height: 1.6;
`,dv=Gr.div`
  display: flex;
  justify-content: center;
  gap: var(--spacing-lg);
  margin-top: var(--spacing-xxl);
  margin-bottom: var(--spacing-xxl);
  position: relative;
  z-index: 2;
`,pv=Gr(tt)`
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
`,fv=Gr(tt)`
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
`,hv=Gr.ul`
  list-style: none;
  padding: 0;
  margin: var(--spacing-md) 0;
  position: relative;
  z-index: 2;
`,mv=Gr.li`
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
`,gv=()=>(0,ic.jsxs)(ic.Fragment,{children:[(0,ic.jsxs)(nv,{children:[(0,ic.jsxs)(rv,{initial:{opacity:0,y:-20},animate:{opacity:1,y:0},transition:{duration:.5},children:["About the ",(0,ic.jsx)("span",{className:"highlight",children:"Card Portfolio"})]}),(0,ic.jsxs)(ov,{children:[(0,ic.jsx)(iv,{children:"The Concept"}),(0,ic.jsx)(av,{children:"Welcome to the portfolio card game! This project reimagines the traditional portfolio website as an interactive card collection, inspired by popular card games like Hearthstone and Legends of Runeterra."}),(0,ic.jsx)(av,{children:"Instead of scrolling through static pages, you can explore my skills, projects, and experiences as collectible cards that you can browse, filter, and add to your own personal deck. This approach creates a more engaging and personalized way to learn about my work and background."})]}),(0,ic.jsxs)(ov,{children:[(0,ic.jsx)(iv,{children:"How It Works"}),(0,ic.jsx)(av,{children:"Each card represents a different aspect of my professional profile. Browse through the collection, click on cards to view detailed information, and add your favorites to your deck to create your own personalized view of my portfolio."}),(0,ic.jsxs)(sv,{children:[(0,ic.jsxs)(lv,{color:"var(--color-project)",children:[(0,ic.jsx)(cv,{children:"Project Cards"}),(0,ic.jsx)(uv,{children:"These cards showcase the notable projects I've worked on, including technologies used, my role, and key outcomes."})]}),(0,ic.jsxs)(lv,{color:"var(--color-skill)",children:[(0,ic.jsx)(cv,{children:"Skill Cards"}),(0,ic.jsx)(uv,{children:"These cards represent my technical and professional skills, including proficiency levels and years of experience."})]}),(0,ic.jsxs)(lv,{color:"var(--color-experience)",children:[(0,ic.jsx)(cv,{children:"Experience Cards"}),(0,ic.jsx)(uv,{children:"These cards highlight my professional experience, including positions held, companies, and key achievements."})]})]}),(0,ic.jsx)(av,{children:"Moreover, each card type has its own unique stats and attributes, allowing you to evaluate my skills and experiences in a fun and interactive way. You can filter cards by type, tag, or even combination, making it easy to find what you're looking for."}),(0,ic.jsxs)(sv,{children:[(0,ic.jsxs)(lv,{color:"var(--color-project)",children:[(0,ic.jsx)(cv,{children:"Project Stats"}),(0,ic.jsx)(uv,{children:(0,ic.jsx)(hv,{children:Object.entries(zf).map((e=>{let[t,n]=e;return["creativity","impact","difficulty"].includes(t)&&(0,ic.jsxs)(mv,{icon:n.icon,children:[(0,ic.jsx)("strong",{children:n.label}),": ",n.description]},t)}))})})]}),(0,ic.jsxs)(lv,{color:"var(--color-skill)",children:[(0,ic.jsx)(cv,{children:"Skill Stats"}),(0,ic.jsx)(uv,{children:(0,ic.jsx)(hv,{children:Object.entries(zf).map((e=>{let[t,n]=e;return["mastery","usageFrequency","comboPower"].includes(t)&&(0,ic.jsxs)(mv,{icon:n.icon,children:[(0,ic.jsx)("strong",{children:n.label}),": ",n.description]},t)}))})})]}),(0,ic.jsxs)(lv,{color:"var(--color-experience)",children:[(0,ic.jsx)(cv,{children:"Experience Stats"}),(0,ic.jsx)(uv,{children:(0,ic.jsx)(hv,{children:Object.entries(zf).map((e=>{let[t,n]=e;return["collaboration","impact","growth"].includes(t)&&(0,ic.jsxs)(mv,{icon:n.icon,children:[(0,ic.jsx)("strong",{children:n.label}),": ",n.description]},t)}))})})]})]})]}),(0,ic.jsxs)(ov,{children:[(0,ic.jsx)(iv,{children:"Why a Card Game?"}),(0,ic.jsx)(av,{children:"I created this portfolio format because I wanted to offer a more interactive and engaging way to present my work. The card game metaphor allows you to actively explore and discover different aspects of my skills and experience, rather than simply reading a chronological resume or portfolio."}),(0,ic.jsx)(av,{children:'Just as in card games where players build decks that reflect their play style and strategy, you can build a "deck" of my skills and experiences that resonates with what you\'re looking for. It transforms the portfolio viewing experience from passive consumption to active exploration.'})]}),(0,ic.jsxs)(ov,{children:[(0,ic.jsx)(iv,{children:"The Technology"}),(0,ic.jsx)(av,{children:"This portfolio is built with React, TypeScript, Styled Components, and Framer Motion. I focused on creating smooth animations and transitions to enhance the card game feel while maintaining accessibility and performance."}),(0,ic.jsx)(av,{children:"The cyberpunk styling is achieved through carefully crafted CSS using features like clip-path, linear-gradients, and pseudo-elements. The carousel component leverages Framer Motion's powerful animation capabilities to provide a seamless browsing experience."})]}),(0,ic.jsxs)(dv,{children:[(0,ic.jsx)(pv,{to:"/collection",children:"Explore the Collection"}),(0,ic.jsx)(fv,{to:"/",children:"Back to Home"})]})]}),(0,ic.jsx)(qf,{})]}),vv=()=>(0,ic.jsxs)("div",{className:"orientation-warning",children:[(0,ic.jsx)("div",{className:"icon",children:(0,ic.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"100",height:"100",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round",children:[(0,ic.jsx)("rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2"}),(0,ic.jsx)("path",{d:"M12 18h.01"})]})}),(0,ic.jsx)("h2",{children:"Please Rotate Your Device"}),(0,ic.jsx)("p",{children:"This experience is optimized for landscape mode to maintain game immersion consistency."})]}),yv=Gr.div`
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

    ${no} {
        grid-template-columns: 180px 1fr;
    }

    ${to} {
        grid-template-columns: 160px 1fr;
        grid-template-rows: 50px 1fr;
    }

    ${eo} {
        grid-template-rows: auto 1fr;
        grid-template-columns: 1fr;
        grid-template-areas:
            "header"
            "main-content";
    }
`,bv=Gr.header`
    grid-area: header;
    background-color: rgba(0, 0, 0, 0.4);
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    padding: 0 var(--spacing-lg);
    z-index: 10;
    margin-top: 10px;

    ${no} {
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

    ${eo} {
        padding: var(--spacing-sm) var(--spacing-md);
        margin-top: 5px;
        flex-wrap: wrap;
        justify-content: center;
    }
`,xv=Gr(tt)`
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

    ${to} {
        font-size: 1.2rem;
    }

    ${eo} {
        font-size: 1.1rem;
        margin-bottom: var(--spacing-xs);
    }
`,wv=Gr.div`
    display: flex;
    margin-left: var(--spacing-xl);
    gap: var(--spacing-md);
    height: 100%;

    ${to} {
        margin-left: var(--spacing-lg);
        gap: var(--spacing-sm);
    }

    ${eo} {
        margin-left: 0;
        width: 100%;
        justify-content: center;
        flex-wrap: wrap;
        height: auto;
    }
`,Sv=Gr(tt)`
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

    ${to} {
        padding: 0 var(--spacing-md);
        font-size: 0.8rem;
    }

    ${eo} {
        padding: var(--spacing-xs) var(--spacing-sm);
        font-size: 0.75rem;
    }
`,kv=()=>{const e=q(),t=t=>e.pathname===t;return(0,ic.jsxs)(yv,{children:[(0,ic.jsxs)(bv,{children:[(0,ic.jsxs)(xv,{to:"/",children:["Card",(0,ic.jsx)("span",{children:"Portfolio"})]}),(0,ic.jsxs)(wv,{children:[(0,ic.jsx)(Sv,{to:"/",active:!1,children:"Home"}),(0,ic.jsx)(Sv,{to:"/collection",active:t("/collection"),children:"Collection"}),(0,ic.jsx)(Sv,{to:"/profile",active:t("/profile"),children:"Profile"}),(0,ic.jsx)(Sv,{to:"/about",active:!1,children:"About"})]})]}),(0,ic.jsx)(me,{})]})},Ev=()=>(0,ic.jsxs)(Ze,{basename:"/",children:[(0,ic.jsx)(ao,{}),(0,ic.jsx)(vv,{}),(0,ic.jsx)("div",{className:"app-content",children:(0,ic.jsxs)(ye,{children:[(0,ic.jsx)(ge,{path:"/",element:(0,ic.jsx)(ch,{})}),(0,ic.jsxs)(ge,{element:(0,ic.jsx)(kv,{}),children:[(0,ic.jsx)(ge,{path:"/collection",element:(0,ic.jsx)(sg,{})}),(0,ic.jsx)(ge,{path:"/profile",element:(0,ic.jsx)(tv,{})})]}),(0,ic.jsx)(ge,{path:"/about",element:(0,ic.jsx)(gv,{})})]})})]}),Cv=e=>{e&&e instanceof Function&&n.e(453).then(n.bind(n,453)).then((t=>{let{getCLS:n,getFID:r,getFCP:o,getLCP:i,getTTFB:a}=t;n(e),r(e),o(e),i(e),a(e)}))};t.createRoot(document.getElementById("root")).render((0,ic.jsx)(e.StrictMode,{children:(0,ic.jsx)(Ev,{})})),Cv()})()})();
//# sourceMappingURL=main.7b2e51e1.js.map