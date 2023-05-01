// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).incrSGDRegression=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var e=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function o(r,t){return null!=r&&i.call(r,t)}var a="function"==typeof Symbol?Symbol.toStringTag:"";var u=n()?function(r){var t,n,i;if(null==r)return e.call(r);n=r[a],t=o(r,a);try{r[a]=void 0}catch(t){return e.call(r)}return i=e.call(r),t?r[a]=n:delete r[a],i}:function(r){return e.call(r)};var c=Array.isArray?Array.isArray:function(r){return"[object Array]"===u(r)};function f(){var r,t=arguments,n=t[0],e="https://stdlib.io/e/"+n+"?";for(r=1;r<t.length;r++)e+="&arg[]="+encodeURIComponent(t[r]);return e}var l="function"==typeof Object.defineProperty?Object.defineProperty:null;var s,p=Object.defineProperty,y=Object.prototype,v=y.toString,g=y.__defineGetter__,h=y.__defineSetter__,d=y.__lookupGetter__,b=y.__lookupSetter__;s=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===v.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof n||null===n||"[object Array]"===v.call(n))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+n+"`.");if((i="value"in n)&&(d.call(r,t)||b.call(r,t)?(e=r.__proto__,r.__proto__=y,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&g&&g.call(r,t,n.get),a&&h&&h.call(r,t,n.set),r};var w=s;function m(r,t,n){w(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function j(r){return"number"==typeof r}var A=Number,O=A.prototype.toString;var E=n();function I(r){return"object"==typeof r&&(r instanceof A||(E?function(r){try{return O.call(r),!0}catch(r){return!1}}(r):"[object Number]"===u(r)))}function T(r){return j(r)||I(r)}m(T,"isPrimitive",j),m(T,"isObject",I);var _=Number.POSITIVE_INFINITY,S=A.NEGATIVE_INFINITY,k=Math.floor;function x(r){return k(r)===r}function F(r){return r<_&&r>S&&x(r)}function P(r){return j(r)&&F(r)}function U(r){return I(r)&&F(r.valueOf())}function V(r){return P(r)||U(r)}function L(r){return P(r)&&r>=0}function R(r){return U(r)&&r.valueOf()>=0}function N(r){return L(r)||R(r)}function C(r){return null!==r&&"object"==typeof r}function W(r){return C(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}m(V,"isPrimitive",P),m(V,"isObject",U),m(N,"isPrimitive",L),m(N,"isObject",R),m(C,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(t){var n,e;if(!c(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(C));var $=/./;function B(r){return"boolean"==typeof r}var G=Boolean.prototype.toString;var H=n();function M(r){return"object"==typeof r&&(r instanceof Boolean||(H?function(r){try{return G.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===u(r)))}function q(r){return B(r)||M(r)}function z(){return new Function("return this;")()}m(q,"isPrimitive",B),m(q,"isObject",M);var X="object"==typeof self?self:null,D="object"==typeof window?window:null,Z="object"==typeof global?global:null;var Y=function(r){if(arguments.length){if(!B(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return z()}if(X)return X;if(D)return D;if(Z)return Z;throw new Error("unexpected error. Unable to resolve global object.")}(),Q=Y.document&&Y.document.childNodes,J=Int8Array;function K(){return/^\s*function\s*([^(]*)/i}var rr=/^\s*function\s*([^(]*)/i;function tr(r){var t,n,e;if(("Object"===(n=u(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=rr.exec(e.toString()))return t[1]}return W(r)?"Buffer":n}m(K,"REGEXP",rr);var nr="function"==typeof $||"object"==typeof J||"function"==typeof Q?function(r){return tr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?tr(r).toLowerCase():t};function er(r){return"function"===nr(r)}var ir,or=Object.getPrototypeOf;ir=er(Object.getPrototypeOf)?or:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===u(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var ar=ir;function ur(r){return null==r?null:(r=Object(r),ar(r))}function cr(r){return"string"==typeof r}var fr=String.prototype.valueOf;var lr=n();function sr(r){return"object"==typeof r&&(r instanceof String||(lr?function(r){try{return fr.call(r),!0}catch(r){return!1}}(r):"[object String]"===u(r)))}function pr(r){return cr(r)||sr(r)}function yr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function vr(r){return"number"==typeof r}function gr(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function hr(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+gr(i):gr(i)+r,e&&(r="-"+r)),r}m(pr,"isPrimitive",cr),m(pr,"isObject",sr),m(yr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/);var dr=String.prototype.toLowerCase,br=String.prototype.toUpperCase;function wr(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!vr(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=hr(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=hr(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===br.call(r.specifier)?br.call(n):dr.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function mr(r){return"string"==typeof r}var jr=Math.abs,Ar=String.prototype.toLowerCase,Or=String.prototype.toUpperCase,Er=String.prototype.replace,Ir=/e\+(\d)$/,Tr=/e-(\d)$/,_r=/^(\d+)$/,Sr=/^(\d+)e/,kr=/\.0$/,xr=/\.0*e/,Fr=/(\..*[^0])0*e/;function Pr(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!vr(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":jr(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=Er.call(n,Fr,"$1e"),n=Er.call(n,xr,"e"),n=Er.call(n,kr,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=Er.call(n,Ir,"e+0$1"),n=Er.call(n,Tr,"e-0$1"),r.alternate&&(n=Er.call(n,_r,"$1."),n=Er.call(n,Sr,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===Or.call(r.specifier)?Or.call(n):Ar.call(n)}function Ur(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}function Vr(r,t,n){var e=t-r.length;return e<0?r:r=n?r+Ur(e):Ur(e)+r}var Lr=String.fromCharCode,Rr=isNaN,Nr=Array.isArray;function Cr(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function Wr(r){var t,n,e,i,o,a,u,c,f;if(!Nr(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(mr(e=r[c]))a+=e;else{if(t=void 0!==e.precision,!(e=Cr(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,Rr(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,Rr(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=wr(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!Rr(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=Rr(o)?String(e.arg):Lr(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=Pr(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=hr(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=Vr(e.arg,e.width,e.padRight)),a+=e.arg||"",u+=1}return a}var $r=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Br(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function Gr(r){var t,n,e,i;for(n=[],i=0,e=$r.exec(r);e;)(t=r.slice(i,$r.lastIndex-e[0].length)).length&&n.push(t),n.push(Br(e)),i=$r.lastIndex,e=$r.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function Hr(r){return"string"==typeof r}function Mr(r){var t,n,e;if(!Hr(r))throw new TypeError(Mr("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=Gr(r),(n=new Array(arguments.length))[0]=t,e=1;e<n.length;e++)n[e]=arguments[e];return Wr.apply(null,n)}function qr(r){if(!cr(r))throw new TypeError(Mr("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}function zr(r){return r!=r}function Xr(r){return j(r)&&zr(r)}function Dr(r){return I(r)&&zr(r.valueOf())}function Zr(r){return Xr(r)||Dr(r)}m(Zr,"isPrimitive",Xr),m(Zr,"isObject",Dr);function Yr(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=9007199254740991}function Qr(r,t,n){var e,i;if(!Yr(r)&&!cr(r))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+r+"`.");if(0===(e=r.length))return-1;if(3===arguments.length){if(!P(n))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+n+"`.");if(n>=0){if(n>=e)return-1;i=n}else(i=e+n)<0&&(i=0)}else i=0;if(Zr(t)){for(;i<e;i++)if(Zr(r[i]))return i}else for(;i<e;i++)if(r[i]===t)return i;return-1}function Jr(r){return Object.keys(Object(r))}var Kr,rt=void 0!==Object.keys;function tt(r){return"[object Arguments]"===u(r)}Kr=function(){return tt(arguments)}();var nt=Kr,et=Object.prototype.propertyIsEnumerable;var it=!et.call("beep","0");function ot(r,t){var n;return null!=r&&(!(n=et.call(r,t))&&it&&pr(r)?!Xr(t=+t)&&P(t)&&t>=0&&t<r.length:n)}var at=4294967295;var ut=nt?tt:function(r){return null!==r&&"object"==typeof r&&!c(r)&&"number"==typeof r.length&&x(r.length)&&r.length>=0&&r.length<=at&&o(r,"callee")&&!ot(r,"callee")},ct=Array.prototype.slice;var ft=ot((function(){}),"prototype"),lt=!ot({toString:null},"toString");function st(r){return r.constructor&&r.constructor.prototype===r}var pt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],yt="undefined"==typeof window?void 0:window;var vt=function(){var r;if("undefined"===nr(yt))return!1;for(r in yt)try{-1===Qr(pt,r)&&o(yt,r)&&null!==yt[r]&&"object"===nr(yt[r])&&st(yt[r])}catch(r){return!0}return!1}(),gt="undefined"!=typeof window;var ht,dt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ht=rt?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return ut(r)?Jr(ct.call(r)):Jr(r)}:Jr:function(r){var t,n,e,i,a,u,c;if(i=[],ut(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!o(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(e="function"==typeof r)&&!C(r))return i;n=ft&&e}for(a in r)n&&"prototype"===a||!o(r,a)||i.push(String(a));if(lt)for(t=function(r){if(!1===gt&&!vt)return st(r);try{return st(r)}catch(r){return!1}}(r),c=0;c<dt.length;c++)u=dt[c],t&&"constructor"===u||!o(r,u)||i.push(String(u));return i};var bt=ht,wt=void 0!==Object.getOwnPropertyNames,mt=Object.getOwnPropertyNames;var jt=wt?function(r){return mt(Object(r))}:function(r){return bt(Object(r))},At=void 0!==Object.getOwnPropertyDescriptor,Ot=Object.getOwnPropertyDescriptor;var Et=At?function(r,t){var n;return null==r||void 0===(n=Ot(r,t))?null:n}:function(r,t){return o(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},It="function"==typeof Buffer?Buffer:null;var Tt,_t=r.Buffer;Tt=function(){var r,t;if("function"!=typeof It)return!1;try{r=W(t="function"==typeof It.from?It.from([1,2,3,4]):new It([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?_t:function(){throw new Error("not implemented")};var St=Tt;var kt=er(St.from)?function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return St.from(r)}:function(r){if(!W(r))throw new TypeError("invalid argument. Must provide a Buffer. Value: `"+r+"`");return new St(r)},xt="function"==typeof Int8Array;var Ft="function"==typeof Int8Array?Int8Array:null;var Pt,Ut="function"==typeof Int8Array?Int8Array:void 0;Pt=function(){var r,t,n;if("function"!=typeof Ft)return!1;try{t=new Ft([1,3.14,-3.14,128]),n=t,r=(xt&&n instanceof Int8Array||"[object Int8Array]"===u(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Ut:function(){throw new Error("not implemented")};var Vt=Pt,Lt="function"==typeof Uint8Array;var Rt="function"==typeof Uint8Array?Uint8Array:null;var Nt,Ct="function"==typeof Uint8Array?Uint8Array:void 0;Nt=function(){var r,t,n;if("function"!=typeof Rt)return!1;try{t=new Rt(t=[1,3.14,-3.14,256,257]),n=t,r=(Lt&&n instanceof Uint8Array||"[object Uint8Array]"===u(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Ct:function(){throw new Error("not implemented")};var Wt=Nt,$t="function"==typeof Uint8ClampedArray;var Bt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Gt,Ht="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Gt=function(){var r,t,n;if("function"!=typeof Bt)return!1;try{t=new Bt([-1,0,1,3.14,4.99,255,256]),n=t,r=($t&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===u(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?Ht:function(){throw new Error("not implemented")};var Mt=Gt,qt="function"==typeof Int16Array;var zt="function"==typeof Int16Array?Int16Array:null;var Xt,Dt="function"==typeof Int16Array?Int16Array:void 0;Xt=function(){var r,t,n;if("function"!=typeof zt)return!1;try{t=new zt([1,3.14,-3.14,32768]),n=t,r=(qt&&n instanceof Int16Array||"[object Int16Array]"===u(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Dt:function(){throw new Error("not implemented")};var Zt=Xt,Yt="function"==typeof Uint16Array;var Qt="function"==typeof Uint16Array?Uint16Array:null;var Jt,Kt="function"==typeof Uint16Array?Uint16Array:void 0;Jt=function(){var r,t,n;if("function"!=typeof Qt)return!1;try{t=new Qt(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Yt&&n instanceof Uint16Array||"[object Uint16Array]"===u(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Kt:function(){throw new Error("not implemented")};var rn=Jt,tn="function"==typeof Int32Array;var nn="function"==typeof Int32Array?Int32Array:null;var en,on="function"==typeof Int32Array?Int32Array:void 0;en=function(){var r,t,n;if("function"!=typeof nn)return!1;try{t=new nn([1,3.14,-3.14,2147483648]),n=t,r=(tn&&n instanceof Int32Array||"[object Int32Array]"===u(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?on:function(){throw new Error("not implemented")};var an=en,un="function"==typeof Uint32Array;var cn="function"==typeof Uint32Array?Uint32Array:null;var fn,ln="function"==typeof Uint32Array?Uint32Array:void 0;fn=function(){var r,t,n;if("function"!=typeof cn)return!1;try{t=new cn(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(un&&n instanceof Uint32Array||"[object Uint32Array]"===u(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ln:function(){throw new Error("not implemented")};var sn=fn,pn="function"==typeof Float32Array;var yn="function"==typeof Float32Array?Float32Array:null;var vn,gn="function"==typeof Float32Array?Float32Array:void 0;vn=function(){var r,t,n;if("function"!=typeof yn)return!1;try{t=new yn([1,3.14,-3.14,5e40]),n=t,r=(pn&&n instanceof Float32Array||"[object Float32Array]"===u(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===_}catch(t){r=!1}return r}()?gn:function(){throw new Error("not implemented")};var hn=vn,dn="function"==typeof Float64Array;var bn="function"==typeof Float64Array?Float64Array:null;var wn,mn="function"==typeof Float64Array?Float64Array:void 0;wn=function(){var r,t,n;if("function"!=typeof bn)return!1;try{t=new bn([1,3.14,-3.14,NaN]),n=t,r=(dn&&n instanceof Float64Array||"[object Float64Array]"===u(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?mn:function(){throw new Error("not implemented")};var jn=wn;function An(r){return new Vt(r)}function On(r){return new Wt(r)}function En(r){return new Mt(r)}function In(r){return new Zt(r)}function Tn(r){return new rn(r)}function _n(r){return new an(r)}function Sn(r){return new sn(r)}function kn(r){return new hn(r)}function xn(r){return new jn(r)}var Fn={int8array:An,uint8array:On,uint8clampedarray:En,int16array:In,uint16array:Tn,int32array:_n,uint32array:Sn,float32array:kn,float64array:xn};function Pn(r,t,n,e,i){var a,f,l,s,p,y,v,g,h,d;if(i-=1,"object"!=typeof r||null===r)return r;if(W(r))return kt(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===u(r))return!0;r=ur(r)}return!1}(r))return function(r){var t,n,e,i,a,u,f=[],l=[];for(a=new r.constructor(r.message),f.push(r),l.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),t=bt(r),u=0;u<t.length;u++)i=t[u],o(n=Et(r,i),"value")&&(e=c(r[i])?[]:{},n.value=Pn(r[i],e,f,l,-1)),w(a,i,n);return a}(r);if("date"===(l=nr(r)))return new Date(+r);if("regexp"===l)return qr(r.toString());if("set"===l)return new Set(r);if("map"===l)return new Map(r);if("string"===l||"boolean"===l||"number"===l)return r.valueOf();if(p=Fn[l])return p(r);if("array"!==l&&"object"!==l)return"function"==typeof Object.freeze?function(r){var t,n,e,i,a,u,f,l;for(t=[],i=[],f=Object.create(ur(r)),t.push(r),i.push(f),n=jt(r),l=0;l<n.length;l++)e=n[l],o(a=Et(r,e),"value")&&(u=c(r[e])?[]:{},a.value=Pn(r[e],u,t,i,-1)),w(f,e,a);return Object.isExtensible(r)||Object.preventExtensions(f),Object.isSealed(r)&&Object.seal(f),Object.isFrozen(r)&&Object.freeze(f),f}(r):{};if(f=bt(r),i>0)for(a=l,d=0;d<f.length;d++)g=r[y=f[d]],l=nr(g),"object"!=typeof g||null===g||"array"!==l&&"object"!==l||W(g)?"object"===a?(o(s=Et(r,y),"value")&&(s.value=Pn(g)),w(t,y,s)):t[y]=Pn(g):-1===(h=Qr(n,g))?(v=c(g)?new Array(g.length):{},n.push(g),e.push(v),"array"===a?t[y]=Pn(g,v,n,e,i):(o(s=Et(r,y),"value")&&(s.value=Pn(g,v,n,e,i)),w(t,y,s))):t[y]=e[h];else if("array"===l)for(d=0;d<f.length;d++)t[y=f[d]]=r[y];else for(d=0;d<f.length;d++)y=f[d],s=Et(r,y),w(t,y,s);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function Un(r,t){var n;if(arguments.length>1){if(!L(t))throw new TypeError("invalid argument. `level` must be a nonnegative integer. Value: `"+t+"`.");if(0===t)return r}else t=_;return Pn(r,n=c(r)?new Array(r.length):{},[r],[n],t)}function Vn(r,t,n){w(r,t,{configurable:!1,enumerable:!1,get:n})}function Ln(r){return P(r)&&r>0}function Rn(r){return U(r)&&r.valueOf()>0}function Nn(r){return Ln(r)||Rn(r)}function Cn(r){return x(r/2)}function Wn(r){return Cn(r>0?r-1:r+1)}function $n(r){return r===_||r===S}m(Nn,"isPrimitive",Ln),m(Nn,"isObject",Rn);var Bn=Math.sqrt;function Gn(r){return Math.abs(r)}var Hn,Mn={uint16:rn,uint8:Wt};(Hn=new Mn.uint16(1))[0]=4660;var qn,zn,Xn=52===new Mn.uint8(Hn.buffer)[0];!0===Xn?(qn=1,zn=0):(qn=0,zn=1);var Dn={HIGH:qn,LOW:zn},Zn=new jn(1),Yn=new sn(Zn.buffer),Qn=Dn.HIGH,Jn=Dn.LOW;function Kn(r,t,n,e){return Zn[0]=r,t[e]=Yn[Qn],t[e+n]=Yn[Jn],t}function re(r){return Kn(r,[0,0],1,0)}m(re,"assign",Kn);var te=!0===Xn?0:1,ne=new jn(1),ee=new sn(ne.buffer);function ie(r,t){return ne[0]=r,ee[te]=t>>>0,ne[0]}function oe(r){return 0|r}var ae,ue,ce=2147483647,fe=!0===Xn?1:0,le=new jn(1),se=new sn(le.buffer);function pe(r){return le[0]=r,se[fe]}!0===Xn?(ae=1,ue=0):(ae=0,ue=1);var ye={HIGH:ae,LOW:ue},ve=new jn(1),ge=new sn(ve.buffer),he=ye.HIGH,de=ye.LOW;function be(r,t){return ge[he]=r,ge[de]=t,ve[0]}var we=[0,0];function me(r,t){var n,e;return re.assign(r,we,1,0),n=we[0],n&=ce,e=pe(t),be(n|=e&=2147483648,we[1])}var je=!0===Xn?1:0,Ae=new jn(1),Oe=new sn(Ae.buffer);function Ee(r,t){return Ae[0]=r,Oe[je]=t>>>0,Ae[0]}var Ie=1023;var Te=1048576,_e=[1,1.5],Se=[0,.5849624872207642],ke=[0,1.350039202129749e-8];function xe(r,t,n,e){return zr(r)||$n(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Gn(r)<22250738585072014e-324?(t[e]=4503599627370496*r,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}m((function(r){return xe(r,[0,0],1,0)}),"assign",xe);var Fe=[0,0],Pe=[0,0];function Ue(r,t){var n,e;return 0===t||0===r||zr(r)||$n(r)?r:(xe(r,Fe,1,0),t+=Fe[1],t+=function(r){var t=pe(r);return(t=(2146435072&t)>>>20)-Ie|0}(r=Fe[0]),t<-1074?me(0,r):t>1023?r<0?S:_:(t<=-1023?(t+=52,e=2220446049250313e-31):e=1,re.assign(r,Pe,1,0),n=Pe[0],n&=2148532223,e*be(n|=t+Ie<<20,Pe[1])))}var Ve=1048575;var Le=1048576;var Re=1083179008,Ne=1e300,Ce=1e-300,We=[0,0],$e=[0,0];function Be(r,t){var n,e,i,o,a,u,c,f,l,s,p,y,v,g;if(zr(r)||zr(t))return NaN;if(re.assign(t,We,1,0),a=We[0],0===We[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Bn(r);if(-.5===t)return 1/Bn(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if($n(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Gn(r)<1==(t===_)?0:_}(r,t)}if(re.assign(r,We,1,0),o=We[0],0===We[1]){if(0===o)return function(r,t){return t===S?_:t===_?0:t>0?Wn(t)?r:0:Wn(t)?me(_,r):_}(r,t);if(1===r)return 1;if(-1===r&&Wn(t))return-1;if($n(r))return r===S?Be(-0,-t):t<0?0:_}if(r<0&&!1===x(t))return(r-r)/(r-r);if(i=Gn(r),n=o&ce|0,e=a&ce|0,c=a>>>31|0,u=(u=o>>>31|0)&&Wn(t)?-1:1,e>1105199104){if(e>1139802112)return function(r,t){return(pe(r)&ce)<=1072693247?t<0?1/0:0:t>0?1/0:0}(r,t);if(n<1072693247)return 1===c?u*Ne*Ne:u*Ce*Ce;if(n>1072693248)return 0===c?u*Ne*Ne:u*Ce*Ce;p=function(r,t){var n,e,i,o,a,u;return n=(a=1.9259629911266175e-8*(i=t-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((e=ie(e=(o=1.4426950216293335*i)+a,0))-o),r[0]=e,r[1]=n,r}($e,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,y,v,g,h,d,b,w,m,j,A,O;return m=0,n<Te&&(m-=53,n=pe(t*=9007199254740992)),m+=(n>>20)-Ie|0,n=1072693248|(j=1048575&n|0),j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=Te),a=ie(i=(b=(t=Ee(t,n))-(f=_e[A]))*(w=1/(t+f)),0),e=524288+(n>>1|536870912),c=Ee(0,e+=A<<18),d=(o=i*i)*o*(0===(O=o)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),c=ie(c=3+(o=a*a)+(d+=(u=w*(b-a*c-a*(t-(c-f))))*(a+i)),0),g=(y=-7.028461650952758e-9*(s=ie(s=(b=a*c)+(w=u*c+(d-(c-3-o))*i),0))+.9617966939259756*(w-(s-b))+ke[A])-((v=ie(v=(p=.9617967009544373*s)+y+(l=Se[A])+(h=m),0))-h-l-p),r[0]=v,r[1]=g,r}($e,i,n);if(y=(s=(t-(f=ie(t,0)))*p[0]+t*p[1])+(l=f*p[0]),re.assign(y,We,1,0),v=oe(We[0]),g=oe(We[1]),v>=Re){if(0!=(v-Re|g))return u*Ne*Ne;if(s+8008566259537294e-32>y-l)return u*Ne*Ne}else if((v&ce)>=1083231232){if(0!=(v-3230714880|g))return u*Ce*Ce;if(s<=y-l)return u*Ce*Ce}return y=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&ce|0)>>20)-Ie|0,f=0,l>1071644672&&(i=Ee(0,((f=r+(Le>>s+1)>>>0)&~(Ve>>(s=((f&ce)>>20)-Ie|0)))>>>0),f=(f&Ve|Le)>>20-s>>>0,r<0&&(f=-f),t-=i),r=oe(r=pe(c=1-((c=(o=.6931471824645996*(i=ie(i=n+t,0)))+(a=.6931471805599453*(n-(i-t))+-1.904654299957768e-9*i))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<20>>>0)>>20<=0?Ue(c,f):Ee(c,r)}(v,l,s),u*y}function Ge(r,t){var n;if(!(this instanceof Ge))return new Ge(r,t);if(!Nn(r))throw new TypeError(f("0LT4o",r));if(!q(t))throw new TypeError(f("0LT6G",t));for(this.scale=1,this.norm=0,this.intercept=t,this.nWeights=r+(this.intercept?1:0),this._data=new Array(this.nWeights),n=0;n<this.nWeights;n++)this._data[n]=0}function He(r){return 0===r&&1/r===_}m(Ge.prototype,"scaleTo",(function(r){var t;if(this.scale<1e-11){for(t=0;t<this.nWeights;t++)this._data[t]*=this.scale;this.scale=1}if(this.norm*=Be(r,2),!(r>0))throw new RangeError(f("unexpected error. Scaling weight vector by nonpositive value, likely due to too large value of eta * lambda. Value: `%f`.",r));this.scale*=r})),m(Ge.prototype,"add",(function(r,t){var n,e,i;for(e=0,void 0===t&&(t=1),i=0;i<r.length;i++)n=r[i]*t,e+=this._data[i]*n,this._data[i]=this._data[i]+n/this.scale;this.intercept&&(n=1*t,e+=this._data[i]*n,this._data[i]=this._data[i]+n/this.scale),this.norm+=(function(r,t){var n,e=r.length,i=0;for(n=0;n<e;n++)i+=r[n]*t[n];return i}(r,r)+(this.intercept?1:0))*Be(t,2)+2*this.scale*e})),m(Ge.prototype,"innerProduct",(function(r){var t,n=0;for(t=0;t<r.length;t++)n+=this._data[t]*r[t];return n+=this.intercept?this._data[t]:0,n*=this.scale}));function Me(r,t,n){var e;t>0&&(e=1-n*t,r.scaleTo(function(r,t){var n,e,i,o;if(2===(n=arguments.length))return zr(r)||zr(t)?NaN:r===_||t===_?_:r===t&&0===r?He(r)?r:t:r>t?r:t;for(e=S,o=0;o<n;o++){if(zr(i=arguments[o])||i===_)return i;(i>e||i===e&&0===i&&He(i))&&(e=i)}return e}(e,1e-7)))}function qe(r,t,n,e,i,o){var a=r.innerProduct(t)-n;Me(r,i,e),a>o?r.add(t,-e):a<-o&&r.add(t,+e)}function ze(r,t,n,e,i){var o=n-r.innerProduct(t);Me(r,i,e),r.add(t,e*o)}function Xe(r,t,n,e,i,o){var a=r.innerProduct(t)-n;Me(r,i,e),a>o?r.add(t,-e):a<-o?r.add(t,+e):r.add(t,-e*a)}function De(r,t,n){var e,i;switch(e=1,r){case"basic":i=function(){var r=1e3/(e+1e3);return e+=1,r};break;case"constant":i=function(){return e+=1,t};break;case"pegasos":i=function(){var r=1/(n*e);return e+=1,r};break;default:throw new Error(f("0LT3t","learningRate",["basic","constant","pegasos"].join('", "'),r))}return i}var Ze={epsilon:.1,eta0:.02,intercept:!0,lambda:.001,learningRate:"basic",loss:"squaredError"};function Ye(r){return j(r)&&r>=0}function Qe(r){return I(r)&&r.valueOf()>=0}function Je(r){return Ye(r)||Qe(r)}function Ke(r){return j(r)&&r>0}function ri(r){return I(r)&&r.valueOf()>0}function ti(r){return Ke(r)||ri(r)}m(Je,"isPrimitive",Ye),m(Je,"isObject",Qe),m(ti,"isPrimitive",Ke),m(ti,"isObject",ri);var ni=Object.prototype;function ei(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!c(r)}(r)&&(!(t=ur(r))||!o(r,"constructor")&&o(t,"constructor")&&er(t.constructor)&&"[object Function]"===u(t.constructor)&&o(t,"isPrototypeOf")&&er(t.isPrototypeOf)&&(t===ni||function(r){var t;for(t in r)if(!o(r,t))return!1;return!0}(r)))}function ii(r,t){return ei(t)?o(t,"epsilon")&&(r.epsilon=t.epsilon,!Ke(r.epsilon))?new TypeError(f("0LT4Q","epsilon",r.epsilon)):o(t,"eta0")&&(r.eta0=t.eta0,!Ke(r.eta0))?new TypeError(f("0LT4Q","eta0",r.eta0)):o(t,"lambda")&&(r.lambda=t.lambda,!Ye(r.lambda))?new TypeError(f("0LT4x","lambda",r.lambda)):o(t,"learningRate")&&(r.learningRate=t.learningRate,!cr(r.learningRate))?new TypeError(f("0LT2i","learningRate",r.learningRate)):o(t,"loss")&&(r.loss=t.loss,!cr(r.loss))?new TypeError(f("0LT2i","loss",r.loss)):o(t,"intercept")&&(r.intercept=t.intercept,!B(r.intercept))?new TypeError(f("0LT30","intercept",r.intercept)):null:new TypeError(f("0LT2h",t))}return function(r){var t,n,e,i,o,a,u;if(a=Un(Ze),arguments.length>0&&(u=ii(a,r)))throw u;switch(e=null,a.loss){case"epsilonInsensitive":n=qe;break;case"huber":n=Xe;break;case"squaredError":n=ze;break;default:throw Error(f('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"loss",["epsilonInsensitive","huber","squaredError"].join('", "'),a.loss))}function o(r,o){var u;if(!c(r))throw new TypeError(f("0LTBj",r));if(e||(e=new Ge(r.length,a.intercept),t=a.intercept?e.nWeights-1:e.nWeights),r.length!==t)throw new TypeError(f("invalid argument. First argument must be an array of length %u. Value: `%s`.",t,r));u=i(),n(e,r,o,u,a.lambda,a.epsilon)}return i=De(a.learningRate,a.eta0,a.lambda),Vn(o,"coefs",l),m(o,"predict",s),o;function l(){var r,t;for(r=new Array(e.nWeights),t=0;t<r.length;t++)r[t]=e._data[t]*e.scale;return r}function s(r){if(!c(r)||r.length!==t)throw new TypeError(f("invalid argument. First argument must be an array of length %u. Value: `%s`.",t||0,r));return e.innerProduct(r)}}}));
//# sourceMappingURL=index.js.map
