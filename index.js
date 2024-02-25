// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t(require("buffer")):"function"==typeof define&&define.amd?define(["buffer"],t):(r="undefined"!=typeof globalThis?globalThis:r||self).incrSGDRegression=t(r.require$$0)}(this,(function(r){"use strict";var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function n(){return t&&"symbol"==typeof Symbol.toStringTag}var e=Object.prototype.toString;var i=Object.prototype.hasOwnProperty;function o(r,t){return null!=r&&i.call(r,t)}var a="function"==typeof Symbol?Symbol:void 0,u="function"==typeof a?a.toStringTag:"";var c=n()?function(r){var t,n,i;if(null==r)return e.call(r);n=r[u],t=o(r,u);try{r[u]=void 0}catch(t){return e.call(r)}return i=e.call(r),t?r[u]=n:delete r[u],i}:function(r){return e.call(r)};var f=Array.isArray?Array.isArray:function(r){return"[object Array]"===c(r)};function l(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}var s="function"==typeof Object.defineProperty?Object.defineProperty:null;var p=Object.defineProperty;function y(r){return"number"==typeof r}function v(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function h(r,t,n){var e=!1,i=t-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(e=!0,r=r.substr(1)),r=n?r+v(i):v(i)+r,e&&(r="-"+r)),r}var g=String.prototype.toLowerCase,d=String.prototype.toUpperCase;function b(r){var t,n,e;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(n=r.arg,e=parseInt(n,10),!isFinite(e)){if(!y(n))throw new Error("invalid integer. Value: "+n);e=0}return e<0&&("u"===r.specifier||10!==t)&&(e=4294967295+e+1),e<0?(n=(-e).toString(t),r.precision&&(n=h(n,r.precision,r.padRight)),n="-"+n):(n=e.toString(t),e||r.precision?r.precision&&(n=h(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===t&&(r.alternate&&(n="0x"+n),n=r.specifier===d.call(r.specifier)?d.call(n):g.call(n)),8===t&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var w=Math.abs,m=String.prototype.toLowerCase,j=String.prototype.toUpperCase,A=String.prototype.replace,O=/e\+(\d)$/,E=/e-(\d)$/,I=/^(\d+)$/,_=/^(\d+)e/,S=/\.0$/,T=/\.0*e/,k=/(\..*[^0])0*e/;function P(r){var t,n,e=parseFloat(r.arg);if(!isFinite(e)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);e=r.arg}switch(r.specifier){case"e":case"E":n=e.toExponential(r.precision);break;case"f":case"F":n=e.toFixed(r.precision);break;case"g":case"G":w(e)<1e-4?((t=r.precision)>0&&(t-=1),n=e.toExponential(t)):n=e.toPrecision(r.precision),r.alternate||(n=A.call(n,k,"$1e"),n=A.call(n,T,"e"),n=A.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=A.call(n,O,"e+0$1"),n=A.call(n,E,"e-0$1"),r.alternate&&(n=A.call(n,I,"$1."),n=A.call(n,_,"$1.e")),e>=0&&r.sign&&(n=r.sign+n),n=r.specifier===j.call(r.specifier)?j.call(n):m.call(n)}function U(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var x=String.fromCharCode,F=isNaN,V=Array.isArray;function R(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function N(r){var t,n,e,i,o,a,u,c,f,l,s,p,y;if(!V(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(a="",u=1,c=0;c<r.length;c++)if(e=r[c],"string"==typeof e)a+=e;else{if(t=void 0!==e.precision,!(e=R(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+c+"`. Value: `"+e+"`.");for(e.mapping&&(u=e.mapping),n=e.flags,f=0;f<n.length;f++)switch(i=n.charAt(f)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===e.width){if(e.width=parseInt(arguments[u],10),u+=1,F(e.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[u],10),u+=1,F(e.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[u],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=b(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!F(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=F(o)?String(e.arg):x(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=P(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=h(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,s=e.width,p=e.padRight,y=void 0,(y=s-l.length)<0?l:l=p?l+U(y):U(y)+l)),a+=e.arg||"",u+=1}return a}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function C(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function $(r){var t,n,e,i;for(n=[],i=0,e=W.exec(r);e;)(t=r.slice(i,W.lastIndex-e[0].length)).length&&n.push(t),n.push(C(e)),i=W.lastIndex,e=W.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function B(r){var t,n;if("string"!=typeof r)throw new TypeError(B("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[$(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return N.apply(null,t)}var G,L=Object.prototype,H=L.toString,M=L.__defineGetter__,D=L.__defineSetter__,q=L.__lookupGetter__,z=L.__lookupSetter__;G=function(){try{return s({},"x",{}),!0}catch(r){return!1}}()?p:function(r,t,n){var e,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===H.call(r))throw new TypeError(B("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===H.call(n))throw new TypeError(B("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(q.call(r,t)||z.call(r,t)?(e=r.__proto__,r.__proto__=L,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),o="get"in n,a="set"in n,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&M&&M.call(r,t,n.get),a&&D&&D.call(r,t,n.set),r};var X=G;function Z(r,t,n){X(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function Y(r){return"number"==typeof r}var J=Number,K=J.prototype.toString;var Q=n();function rr(r){return"object"==typeof r&&(r instanceof J||(Q?function(r){try{return K.call(r),!0}catch(r){return!1}}(r):"[object Number]"===c(r)))}function tr(r){return Y(r)||rr(r)}Z(tr,"isPrimitive",Y),Z(tr,"isObject",rr);var nr=Number.POSITIVE_INFINITY,er=J.NEGATIVE_INFINITY,ir=Math.floor;function or(r){return ir(r)===r}function ar(r){return r<nr&&r>er&&or(r)}function ur(r){return Y(r)&&ar(r)}function cr(r){return rr(r)&&ar(r.valueOf())}function fr(r){return ur(r)||cr(r)}function lr(r){return ur(r)&&r>=0}function sr(r){return cr(r)&&r.valueOf()>=0}function pr(r){return lr(r)||sr(r)}function yr(r){return null!==r&&"object"==typeof r}function vr(r){return yr(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))}Z(fr,"isPrimitive",ur),Z(fr,"isObject",cr),Z(pr,"isPrimitive",lr),Z(pr,"isObject",sr),Z(yr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(B("invalid argument. Must provide a function. Value: `%s`.",r));return function(t){var n,e;if(!f(t))return!1;if(0===(n=t.length))return!1;for(e=0;e<n;e++)if(!1===r(t[e]))return!1;return!0}}(yr));var hr=Object,gr=/./;function dr(r){return"boolean"==typeof r}var br=Boolean,wr=Boolean.prototype.toString;var mr=n();function jr(r){return"object"==typeof r&&(r instanceof br||(mr?function(r){try{return wr.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===c(r)))}function Ar(r){return dr(r)||jr(r)}Z(Ar,"isPrimitive",dr),Z(Ar,"isObject",jr);var Or="object"==typeof self?self:null,Er="object"==typeof window?window:null,Ir="object"==typeof global?global:null,_r="object"==typeof globalThis?globalThis:null;var Sr=function(r){if(arguments.length){if(!dr(r))throw new TypeError(B("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(_r)return _r;if(Or)return Or;if(Er)return Er;if(Ir)return Ir;throw new Error("unexpected error. Unable to resolve global object.")}(),Tr=Sr.document&&Sr.document.childNodes,kr=Int8Array;function Pr(){return/^\s*function\s*([^(]*)/i}var Ur=/^\s*function\s*([^(]*)/i;function xr(r){var t,n,e;if(("Object"===(n=c(r).slice(8,-1))||"Error"===n)&&r.constructor){if("string"==typeof(e=r.constructor).name)return e.name;if(t=Ur.exec(e.toString()))return t[1]}return vr(r)?"Buffer":n}Z(Pr,"REGEXP",Ur);var Fr="function"==typeof gr||"object"==typeof kr||"function"==typeof Tr?function(r){return xr(r).toLowerCase()}:function(r){var t;return null===r?"null":"object"===(t=typeof r)?xr(r).toLowerCase():t};function Vr(r){return"function"===Fr(r)}var Rr,Nr=Object.getPrototypeOf;Rr=Vr(Object.getPrototypeOf)?Nr:function(r){var t=function(r){return r.__proto__}(r);return t||null===t?t:"[object Function]"===c(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var Wr=Rr;function Cr(r){return null==r?null:(r=hr(r),Wr(r))}function $r(r){return"string"==typeof r}var Br=String.prototype.valueOf;var Gr=n();function Lr(r){return"object"==typeof r&&(r instanceof String||(Gr?function(r){try{return Br.call(r),!0}catch(r){return!1}}(r):"[object String]"===c(r)))}function Hr(r){return $r(r)||Lr(r)}function Mr(){return/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/}function Dr(r){return r!=r}function qr(r){return Y(r)&&Dr(r)}function zr(r){return rr(r)&&Dr(r.valueOf())}function Xr(r){return qr(r)||zr(r)}Z(Hr,"isPrimitive",$r),Z(Hr,"isObject",Lr),Z(Mr,"REGEXP",/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/),Z(Xr,"isPrimitive",qr),Z(Xr,"isObject",zr);var Zr=9007199254740991;function Yr(r,t,n){var e,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&or(o.length)&&o.length>=0&&o.length<=Zr||$r(r)))throw new TypeError(B("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(e=r.length))return-1;if(3===arguments.length){if(!ur(n))throw new TypeError(B("invalid argument. Third argument must be an integer. Value: `%s`.",n));if(n>=0){if(n>=e)return-1;i=n}else(i=e+n)<0&&(i=0)}else i=0;if(Xr(t)){for(;i<e;i++)if(Xr(r[i]))return i}else for(;i<e;i++)if(r[i]===t)return i;return-1}function Jr(r){return Object.keys(Object(r))}var Kr,Qr=void 0!==Object.keys;function rt(r){return"[object Arguments]"===c(r)}Kr=function(){return rt(arguments)}();var tt=Kr,nt=Object.prototype.propertyIsEnumerable;var et=!nt.call("beep","0");var it,ot=4294967295;it=tt?rt:function(r){return null!==r&&"object"==typeof r&&!f(r)&&"number"==typeof r.length&&or(r.length)&&r.length>=0&&r.length<=ot&&o(r,"callee")&&!function(r,t){var n;return null!=r&&(!(n=nt.call(r,t))&&et&&Hr(r)?!qr(t=+t)&&ur(t)&&t>=0&&t<r.length:n)}(r,"callee")};var at=it,ut=Array.prototype.slice;var ct=Object.prototype.propertyIsEnumerable;var ft=!ct.call("beep","0");function lt(r,t){var n;return null!=r&&(!(n=ct.call(r,t))&&ft&&Hr(r)?!qr(t=+t)&&ur(t)&&t>=0&&t<r.length:n)}var st=lt((function(){}),"prototype"),pt=!lt({toString:null},"toString");function yt(r){return r.constructor&&r.constructor.prototype===r}var vt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],ht="undefined"==typeof window?void 0:window;var gt=function(){var r;if("undefined"===Fr(ht))return!1;for(r in ht)try{-1===Yr(vt,r)&&o(ht,r)&&null!==ht[r]&&"object"===Fr(ht[r])&&yt(ht[r])}catch(r){return!0}return!1}(),dt="undefined"!=typeof window;var bt,wt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];bt=Qr?function(){return 2!==(Jr(arguments)||"").length}(1,2)?function(r){return at(r)?Jr(ut.call(r)):Jr(r)}:Jr:function(r){var t,n,e,i,a,u,c;if(i=[],at(r)){for(c=0;c<r.length;c++)i.push(c.toString());return i}if("string"==typeof r){if(r.length>0&&!o(r,"0"))for(c=0;c<r.length;c++)i.push(c.toString())}else{if(!1==(e="function"==typeof r)&&!yr(r))return i;n=st&&e}for(a in r)n&&"prototype"===a||!o(r,a)||i.push(String(a));if(pt)for(t=function(r){if(!1===dt&&!gt)return yt(r);try{return yt(r)}catch(r){return!1}}(r),c=0;c<wt.length;c++)u=wt[c],t&&"constructor"===u||!o(r,u)||i.push(String(u));return i};var mt=bt,jt=void 0!==Object.getOwnPropertyNames,At=Object,Ot=At.getOwnPropertyNames;var Et=jt?function(r){return Ot(At(r))}:function(r){return mt(At(r))},It=void 0!==Object.getOwnPropertyDescriptor,_t=Object.getOwnPropertyDescriptor;var St=It?function(r,t){var n;return null==r||void 0===(n=_t(r,t))?null:n}:function(r,t){return o(r,t)?{configurable:!0,enumerable:!0,writable:!0,value:r[t]}:null},Tt="function"==typeof Buffer?Buffer:null;var kt,Pt=r.Buffer;kt=function(){var r,t;if("function"!=typeof Tt)return!1;try{r=vr(t="function"==typeof Tt.from?Tt.from([1,2,3,4]):new Tt([1,2,3,4]))&&1===t[0]&&2===t[1]&&3===t[2]&&4===t[3]}catch(t){r=!1}return r}()?Pt:function(){throw new Error("not implemented")};var Ut=kt;var xt=Vr(Ut.from)?function(r){if(!vr(r))throw new TypeError(B("invalid argument. Must provide a Buffer. Value: `%s`.",r));return Ut.from(r)}:function(r){if(!vr(r))throw new TypeError(B("invalid argument. Must provide a Buffer. Value: `%s`.",r));return new Ut(r)},Ft="function"==typeof Int8Array;var Vt="function"==typeof Int8Array?Int8Array:null;var Rt,Nt="function"==typeof Int8Array?Int8Array:void 0;Rt=function(){var r,t,n;if("function"!=typeof Vt)return!1;try{t=new Vt([1,3.14,-3.14,128]),n=t,r=(Ft&&n instanceof Int8Array||"[object Int8Array]"===c(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-128===t[3]}catch(t){r=!1}return r}()?Nt:function(){throw new Error("not implemented")};var Wt=Rt,Ct="function"==typeof Uint8Array;var $t="function"==typeof Uint8Array?Uint8Array:null;var Bt,Gt="function"==typeof Uint8Array?Uint8Array:void 0;Bt=function(){var r,t,n;if("function"!=typeof $t)return!1;try{t=new $t(t=[1,3.14,-3.14,256,257]),n=t,r=(Ct&&n instanceof Uint8Array||"[object Uint8Array]"===c(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?Gt:function(){throw new Error("not implemented")};var Lt=Bt,Ht="function"==typeof Uint8ClampedArray;var Mt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:null;var Dt,qt="function"==typeof Uint8ClampedArray?Uint8ClampedArray:void 0;Dt=function(){var r,t,n;if("function"!=typeof Mt)return!1;try{t=new Mt([-1,0,1,3.14,4.99,255,256]),n=t,r=(Ht&&n instanceof Uint8ClampedArray||"[object Uint8ClampedArray]"===c(n))&&0===t[0]&&0===t[1]&&1===t[2]&&3===t[3]&&5===t[4]&&255===t[5]&&255===t[6]}catch(t){r=!1}return r}()?qt:function(){throw new Error("not implemented")};var zt=Dt,Xt="function"==typeof Int16Array;var Zt="function"==typeof Int16Array?Int16Array:null;var Yt,Jt="function"==typeof Int16Array?Int16Array:void 0;Yt=function(){var r,t,n;if("function"!=typeof Zt)return!1;try{t=new Zt([1,3.14,-3.14,32768]),n=t,r=(Xt&&n instanceof Int16Array||"[object Int16Array]"===c(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-32768===t[3]}catch(t){r=!1}return r}()?Jt:function(){throw new Error("not implemented")};var Kt=Yt,Qt="function"==typeof Uint16Array;var rn="function"==typeof Uint16Array?Uint16Array:null;var tn,nn="function"==typeof Uint16Array?Uint16Array:void 0;tn=function(){var r,t,n;if("function"!=typeof rn)return!1;try{t=new rn(t=[1,3.14,-3.14,65536,65537]),n=t,r=(Qt&&n instanceof Uint16Array||"[object Uint16Array]"===c(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?nn:function(){throw new Error("not implemented")};var en=tn,on="function"==typeof Int32Array;var an="function"==typeof Int32Array?Int32Array:null;var un,cn="function"==typeof Int32Array?Int32Array:void 0;un=function(){var r,t,n;if("function"!=typeof an)return!1;try{t=new an([1,3.14,-3.14,2147483648]),n=t,r=(on&&n instanceof Int32Array||"[object Int32Array]"===c(n))&&1===t[0]&&3===t[1]&&-3===t[2]&&-2147483648===t[3]}catch(t){r=!1}return r}()?cn:function(){throw new Error("not implemented")};var fn=un,ln="function"==typeof Uint32Array;var sn="function"==typeof Uint32Array?Uint32Array:null;var pn,yn="function"==typeof Uint32Array?Uint32Array:void 0;pn=function(){var r,t,n;if("function"!=typeof sn)return!1;try{t=new sn(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(ln&&n instanceof Uint32Array||"[object Uint32Array]"===c(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?yn:function(){throw new Error("not implemented")};var vn=pn,hn="function"==typeof Float32Array;var gn="function"==typeof Float32Array?Float32Array:null;var dn,bn="function"==typeof Float32Array?Float32Array:void 0;dn=function(){var r,t,n;if("function"!=typeof gn)return!1;try{t=new gn([1,3.14,-3.14,5e40]),n=t,r=(hn&&n instanceof Float32Array||"[object Float32Array]"===c(n))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===nr}catch(t){r=!1}return r}()?bn:function(){throw new Error("not implemented")};var wn=dn,mn="function"==typeof Float64Array;var jn="function"==typeof Float64Array?Float64Array:null;var An,On="function"==typeof Float64Array?Float64Array:void 0;An=function(){var r,t,n;if("function"!=typeof jn)return!1;try{t=new jn([1,3.14,-3.14,NaN]),n=t,r=(mn&&n instanceof Float64Array||"[object Float64Array]"===c(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?On:function(){throw new Error("not implemented")};var En=An;function In(r){return new Wt(r)}function _n(r){return new Lt(r)}function Sn(r){return new zt(r)}function Tn(r){return new Kt(r)}function kn(r){return new en(r)}function Pn(r){return new fn(r)}function Un(r){return new vn(r)}function xn(r){return new wn(r)}function Fn(r){return new En(r)}var Vn={int8array:In,uint8array:_n,uint8clampedarray:Sn,int16array:Tn,uint16array:kn,int32array:Pn,uint32array:Un,float32array:xn,float64array:Fn};function Rn(r,t,n,e,i){var a,u,l,s,p,y,v,h,g,d;if(i-=1,"object"!=typeof r||null===r)return r;if(vr(r))return xt(r);if(function(r){if("object"!=typeof r||null===r)return!1;if(r instanceof Error)return!0;for(;r;){if("[object Error]"===c(r))return!0;r=Cr(r)}return!1}(r))return function(r){var t,n,e,i,a,u,c=[],l=[];for(a=new r.constructor(r.message),c.push(r),l.push(a),r.stack&&(a.stack=r.stack),r.code&&(a.code=r.code),r.errno&&(a.errno=r.errno),r.syscall&&(a.syscall=r.syscall),t=mt(r),u=0;u<t.length;u++)i=t[u],o(n=St(r,i),"value")&&(e=f(r[i])?[]:{},n.value=Rn(r[i],e,c,l,-1)),X(a,i,n);return a}(r);if("date"===(l=Fr(r)))return new Date(+r);if("regexp"===l)return function(r){if(!$r(r))throw new TypeError(B("invalid argument. Must provide a regular expression string. Value: `%s`.",r));return(r=/^\/((?:\\\/|[^\/])+)\/([imgy]*)$/.exec(r))?new RegExp(r[1],r[2]):null}(r.toString());if("set"===l)return new Set(r);if("map"===l)return new Map(r);if("string"===l||"boolean"===l||"number"===l)return r.valueOf();if(p=Vn[l])return p(r);if("array"!==l&&"object"!==l)return"function"==typeof Object.freeze?function(r){var t,n,e,i,a,u,c,l;for(t=[],i=[],c=Object.create(Cr(r)),t.push(r),i.push(c),n=Et(r),l=0;l<n.length;l++)e=n[l],o(a=St(r,e),"value")&&(u=f(r[e])?[]:{},a.value=Rn(r[e],u,t,i,-1)),X(c,e,a);return Object.isExtensible(r)||Object.preventExtensions(c),Object.isSealed(r)&&Object.seal(c),Object.isFrozen(r)&&Object.freeze(c),c}(r):{};if(u=mt(r),i>0)for(a=l,d=0;d<u.length;d++)h=r[y=u[d]],l=Fr(h),"object"!=typeof h||null===h||"array"!==l&&"object"!==l||vr(h)?"object"===a?(o(s=St(r,y),"value")&&(s.value=Rn(h)),X(t,y,s)):t[y]=Rn(h):-1===(g=Yr(n,h))?(v=f(h)?new Array(h.length):{},n.push(h),e.push(v),"array"===a?t[y]=Rn(h,v,n,e,i):(o(s=St(r,y),"value")&&(s.value=Rn(h,v,n,e,i)),X(t,y,s))):t[y]=e[g];else if("array"===l)for(d=0;d<u.length;d++)t[y=u[d]]=r[y];else for(d=0;d<u.length;d++)y=u[d],s=St(r,y),X(t,y,s);return Object.isExtensible(r)||Object.preventExtensions(t),Object.isSealed(r)&&Object.seal(t),Object.isFrozen(r)&&Object.freeze(t),t}function Nn(r){return ur(r)&&r>0}function Wn(r){return cr(r)&&r.valueOf()>0}function Cn(r){return Nn(r)||Wn(r)}function $n(r){return or(r/2)}function Bn(r){return $n(r>0?r-1:r+1)}function Gn(r){return r===nr||r===er}Z(Cn,"isPrimitive",Nn),Z(Cn,"isObject",Wn);var Ln=Math.sqrt;function Hn(r){return Math.abs(r)}var Mn,Dn={uint16:en,uint8:Lt};(Mn=new Dn.uint16(1))[0]=4660;var qn,zn,Xn=52===new Dn.uint8(Mn.buffer)[0];!0===Xn?(qn=1,zn=0):(qn=0,zn=1);var Zn={HIGH:qn,LOW:zn},Yn=new En(1),Jn=new vn(Yn.buffer),Kn=Zn.HIGH,Qn=Zn.LOW;function re(r,t,n,e){return Yn[0]=r,t[e]=Jn[Kn],t[e+n]=Jn[Qn],t}function te(r){return re(r,[0,0],1,0)}Z(te,"assign",re);var ne=!0===Xn?0:1,ee=new En(1),ie=new vn(ee.buffer);function oe(r,t){return ee[0]=r,ie[ne]=t>>>0,ee[0]}function ae(r){return 0|r}var ue,ce,fe=2147483647,le=2147483648,se=!0===Xn?1:0,pe=new En(1),ye=new vn(pe.buffer);function ve(r){return pe[0]=r,ye[se]}!0===Xn?(ue=1,ce=0):(ue=0,ce=1);var he={HIGH:ue,LOW:ce},ge=new En(1),de=new vn(ge.buffer),be=he.HIGH,we=he.LOW;function me(r,t){return de[be]=r,de[we]=t,ge[0]}var je=[0,0];function Ae(r,t){var n,e;return te.assign(r,je,1,0),n=je[0],n&=fe,e=ve(t),me(n|=e&=le,je[1])}var Oe=1072693247,Ee=1e300,Ie=1e-300;var _e=!0===Xn?1:0,Se=new En(1),Te=new vn(Se.buffer);function ke(r,t){return Se[0]=r,Te[_e]=t>>>0,Se[0]}var Pe=1023;var Ue=1048575,xe=1048576,Fe=1072693248,Ve=536870912,Re=524288,Ne=20,We=9007199254740992,Ce=.9617966939259756,$e=.9617967009544373,Be=-7.028461650952758e-9,Ge=[1,1.5],Le=[0,.5849624872207642],He=[0,1.350039202129749e-8];var Me=1.4426950408889634,De=1.4426950216293335,qe=1.9259629911266175e-8;var ze=1023,Xe=-1023,Ze=-1074,Ye=22250738585072014e-324,Je=4503599627370496;function Ke(r,t,n,e){return Dr(r)||Gn(r)?(t[e]=r,t[e+n]=0,t):0!==r&&Hn(r)<Ye?(t[e]=r*Je,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}Z((function(r){return Ke(r,[0,0],1,0)}),"assign",Ke);var Qe=2146435072;var ri=2220446049250313e-31,ti=2148532223,ni=[0,0],ei=[0,0];function ii(r,t){var n,e;return 0===t||0===r||Dr(r)||Gn(r)?r:(Ke(r,ni,1,0),r=ni[0],t+=ni[1],t+=function(r){var t=ve(r);return(t=(t&Qe)>>>20)-Pe|0}(r),t<Ze?Ae(0,r):t>ze?r<0?er:nr:(t<=Xe?(t+=52,e=ri):e=1,te.assign(r,ei,1,0),n=ei[0],n&=ti,e*me(n|=t+Pe<<20,ei[1])))}var oi=.6931471805599453,ai=1048575;var ui=1048576,ci=1071644672,fi=20,li=.6931471824645996,si=-1.904654299957768e-9;var pi=1072693247,yi=1105199104,vi=1139802112,hi=1083179008,gi=1072693248,di=1083231232,bi=3230714880,wi=31,mi=1e300,ji=1e-300,Ai=8008566259537294e-32,Oi=[0,0],Ei=[0,0];function Ii(r,t){var n,e,i,o,a,u,c,f,l,s,p,y,v,h;if(Dr(r)||Dr(t))return NaN;if(te.assign(t,Oi,1,0),a=Oi[0],0===Oi[1]){if(0===t)return 1;if(1===t)return r;if(-1===t)return 1/r;if(.5===t)return Ln(r);if(-.5===t)return 1/Ln(r);if(2===t)return r*r;if(3===t)return r*r*r;if(4===t)return(r*=r)*r;if(Gn(t))return function(r,t){return-1===r?(r-r)/(r-r):1===r?1:Hn(r)<1==(t===nr)?0:nr}(r,t)}if(te.assign(r,Oi,1,0),o=Oi[0],0===Oi[1]){if(0===o)return function(r,t){return t===er?nr:t===nr?0:t>0?Bn(t)?r:0:Bn(t)?Ae(nr,r):nr}(r,t);if(1===r)return 1;if(-1===r&&Bn(t))return-1;if(Gn(r))return r===er?Ii(-0,-t):t<0?0:nr}if(r<0&&!1===or(t))return(r-r)/(r-r);if(i=Hn(r),n=o&fe|0,e=a&fe|0,c=a>>>wi|0,u=(u=o>>>wi|0)&&Bn(t)?-1:1,e>yi){if(e>vi)return function(r,t){return(ve(r)&fe)<=Oe?t<0?Ee*Ee:Ie*Ie:t>0?Ee*Ee:Ie*Ie}(r,t);if(n<pi)return 1===c?u*mi*mi:u*ji*ji;if(n>gi)return 0===c?u*mi*mi:u*ji*ji;p=function(r,t){var n,e,i,o,a,u,c;return o=(i=t-1)*i*(0===(c=i)?.5:.5+c*(.25*c-.3333333333333333)),n=(u=i*qe-o*Me)-((e=oe(e=(a=De*i)+u,0))-a),r[0]=e,r[1]=n,r}(Ei,i)}else p=function(r,t,n){var e,i,o,a,u,c,f,l,s,p,y,v,h,g,d,b,w,m,j,A,O;return m=0,n<xe&&(m-=53,n=ve(t*=We)),m+=(n>>Ne)-Pe|0,n=(j=n&Ue|0)|Fe|0,j<=235662?A=0:j<767610?A=1:(A=0,m+=1,n-=xe),a=oe(i=(b=(t=ke(t,n))-(f=Ge[A]))*(w=1/(t+f)),0),e=(n>>1|Ve)+Re,c=ke(0,e+=A<<18),d=(o=i*i)*o*(0===(O=o)?.5999999999999946:.5999999999999946+O*(.4285714285785502+O*(.33333332981837743+O*(.272728123808534+O*(.23066074577556175+.20697501780033842*O))))),c=oe(c=3+(o=a*a)+(d+=(u=w*(b-a*c-a*(t-(c-f))))*(a+i)),0),s=oe(s=(b=a*c)+(w=u*c+(d-(c-3-o))*i),0),p=$e*s,h=(y=Be*s+(w-(s-b))*Ce+He[A])-((v=oe(v=p+y+(l=Le[A])+(g=m),0))-g-l-p),r[0]=v,r[1]=h,r}(Ei,i,n);if(y=(s=(t-(f=oe(t,0)))*p[0]+t*p[1])+(l=f*p[0]),te.assign(y,Oi,1,0),v=ae(Oi[0]),h=ae(Oi[1]),v>=hi){if(0!=(v-hi|h))return u*mi*mi;if(s+Ai>y-l)return u*mi*mi}else if((v&fe)>=di){if(0!=(v-bi|h))return u*ji*ji;if(s<=y-l)return u*ji*ji}return y=function(r,t,n){var e,i,o,a,u,c,f,l,s,p;return s=((l=r&fe|0)>>fi)-Pe|0,f=0,l>ci&&(i=ke(0,((f=r+(ui>>s+1)>>>0)&~(ai>>(s=((f&fe)>>fi)-Pe|0)))>>>0),f=(f&ai|ui)>>fi-s>>>0,r<0&&(f=-f),t-=i),r=ae(r=ve(c=1-((c=(o=(i=oe(i=n+t,0))*li)+(a=(n-(i-t))*oi+i*si))*(e=c-(i=c*c)*(0===(p=i)?.16666666666666602:.16666666666666602+p*(p*(6613756321437934e-20+p*(4.1381367970572385e-8*p-16533902205465252e-22))-.0027777777777015593)))/(e-2)-((u=a-(c-o))+c*u)-c))),(r+=f<<fi>>>0)>>fi<=0?ii(c,f):ke(c,r)}(v,l,s),u*y}function _i(r,t){var n;if(!(this instanceof _i))return new _i(r,t);if(!Cn(r))throw new TypeError(l("0h74b",r));if(!Ar(t))throw new TypeError(l("0h755",t));for(this.scale=1,this.norm=0,this.intercept=t,this.nWeights=r+(this.intercept?1:0),this._data=new Array(this.nWeights),n=0;n<this.nWeights;n++)this._data[n]=0}function Si(r,t){return Dr(r)||Dr(t)?NaN:r===nr||t===nr?nr:r===t&&0===r?function(r){return 0===r&&1/r===nr}(r)?r:t:r>t?r:t}Z(_i.prototype,"scaleTo",(function(r){var t;if(this.scale<1e-11){for(t=0;t<this.nWeights;t++)this._data[t]*=this.scale;this.scale=1}if(this.norm*=Ii(r,2),!(r>0))throw new RangeError(l("0h754",r));this.scale*=r})),Z(_i.prototype,"add",(function(r,t){var n,e,i;for(e=0,void 0===t&&(t=1),i=0;i<r.length;i++)n=r[i]*t,e+=this._data[i]*n,this._data[i]=this._data[i]+n/this.scale;this.intercept&&(n=1*t,e+=this._data[i]*n,this._data[i]=this._data[i]+n/this.scale),this.norm+=(function(r,t){var n,e=r.length,i=0;for(n=0;n<e;n++)i+=r[n]*t[n];return i}(r,r)+(this.intercept?1:0))*Ii(t,2)+2*this.scale*e})),Z(_i.prototype,"innerProduct",(function(r){var t,n=0;for(t=0;t<r.length;t++)n+=this._data[t]*r[t];return n+=this.intercept?this._data[t]:0,n*=this.scale}));var Ti=1e-7;function ki(r,t,n){var e;t>0&&(e=1-n*t,r.scaleTo(Si(e,Ti)))}function Pi(r,t,n,e,i,o){var a=r.innerProduct(t)-n;ki(r,i,e),a>o?r.add(t,-e):a<-o&&r.add(t,+e)}function Ui(r,t,n,e,i){var o=n-r.innerProduct(t);ki(r,i,e),r.add(t,e*o)}function xi(r,t,n,e,i,o){var a=r.innerProduct(t)-n;ki(r,i,e),a>o?r.add(t,-e):a<-o?r.add(t,+e):r.add(t,-e*a)}var Fi={epsilon:.1,eta0:.02,intercept:!0,lambda:.001,learningRate:"basic",loss:"squaredError"};function Vi(r){return Y(r)&&r>=0}function Ri(r){return rr(r)&&r.valueOf()>=0}function Ni(r){return Vi(r)||Ri(r)}function Wi(r){return Y(r)&&r>0}function Ci(r){return rr(r)&&r.valueOf()>0}function $i(r){return Wi(r)||Ci(r)}Z(Ni,"isPrimitive",Vi),Z(Ni,"isObject",Ri),Z($i,"isPrimitive",Wi),Z($i,"isObject",Ci);var Bi=Object.prototype;function Gi(r){var t;return!!function(r){return"object"==typeof r&&null!==r&&!f(r)}(r)&&(!(t=Cr(r))||!o(r,"constructor")&&o(t,"constructor")&&Vr(t.constructor)&&"[object Function]"===c(t.constructor)&&o(t,"isPrototypeOf")&&Vr(t.isPrototypeOf)&&(t===Bi||function(r){var t;for(t in r)if(!o(r,t))return!1;return!0}(r)))}return function(r){var t,n,e,i,a,u,c;if(u=function(r,t){var n;if(arguments.length>1){if(!lr(t))throw new TypeError(B("invalid argument. Second argument must be a nonnegative integer. Value: `%s`.",t));if(0===t)return r}else t=nr;return Rn(r,n=f(r)?new Array(r.length):{},[r],[n],t)}(Fi),arguments.length>0&&(c=function(r,t){return Gi(t)?o(t,"epsilon")&&(r.epsilon=t.epsilon,!Wi(r.epsilon))?new TypeError(l("0h74D","epsilon",r.epsilon)):o(t,"eta0")&&(r.eta0=t.eta0,!Wi(r.eta0))?new TypeError(l("0h74D","eta0",r.eta0)):o(t,"lambda")&&(r.lambda=t.lambda,!Vi(r.lambda))?new TypeError(l("0h74k","lambda",r.lambda)):o(t,"learningRate")&&(r.learningRate=t.learningRate,!$r(r.learningRate))?new TypeError(l("0h72W","learningRate",r.learningRate)):o(t,"loss")&&(r.loss=t.loss,!$r(r.loss))?new TypeError(l("0h72W","loss",r.loss)):o(t,"intercept")&&(r.intercept=t.intercept,!dr(r.intercept))?new TypeError(l("0h72o","intercept",r.intercept)):null:new TypeError(l("0h72V",t))}(u,r)))throw c;switch(e=null,u.loss){case"epsilonInsensitive":n=Pi;break;case"huber":n=xi;break;case"squaredError":n=Ui;break;default:throw Error(l('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"loss",["epsilonInsensitive","huber","squaredError"].join('", "'),u.loss))}function a(r,o){var a;if(!f(r))throw new TypeError(l("0h751",r));if(e||(e=new _i(r.length,u.intercept),t=u.intercept?e.nWeights-1:e.nWeights),r.length!==t)throw new TypeError(l("0h753",t,r));a=i(),n(e,r,o,a,u.lambda,u.epsilon)}return i=function(r,t,n){var e,i;switch(e=1,r){case"basic":i=function(){var r=1e3/(e+1e3);return e+=1,r};break;case"constant":i=function(){return e+=1,t};break;case"pegasos":i=function(){var r=1/(n*e);return e+=1,r};break;default:throw new Error(l("0h74S","learningRate",["basic","constant","pegasos"].join('", "'),r))}return i}(u.learningRate,u.eta0,u.lambda),function(r,t,n){X(r,t,{configurable:!1,enumerable:!1,get:n})}(a,"coefs",(function(){var r,t;for(r=new Array(e.nWeights),t=0;t<r.length;t++)r[t]=e._data[t]*e.scale;return r})),Z(a,"predict",(function(r){if(!f(r)||r.length!==t)throw new TypeError(l("0h753",t||0,r));return e.innerProduct(r)})),a}}));
//# sourceMappingURL=index.js.map
