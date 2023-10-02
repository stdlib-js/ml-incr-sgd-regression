// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@v0.1.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@v0.1.0-esm/index.mjs";import a,{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@v0.1.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@v0.1.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@v0.1.0-esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@v0.1.0-esm/index.mjs";import{isPrimitive as p}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.1.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.1.0-esm/index.mjs";import{isPrimitive as m}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.1.0-esm/index.mjs";function u(e,s){var r;if(!(this instanceof u))return new u(e,s);if(!i(e))throw new TypeError(t("0h74b,Ht",e));if(!a(s))throw new TypeError(t("0h755,Ld",s));for(this.scale=1,this.norm=0,this.intercept=s,this.nWeights=e+(this.intercept?1:0),this._data=new Array(this.nWeights),r=0;r<this.nWeights;r++)this._data[r]=0}n(u.prototype,"scaleTo",(function(e){var s;if(this.scale<1e-11){for(s=0;s<this.nWeights;s++)this._data[s]*=this.scale;this.scale=1}if(this.norm*=d(e,2),!(e>0))throw new RangeError(t("0h754,PY",e));this.scale*=e})),n(u.prototype,"add",(function(e,t){var s,r,n;for(r=0,void 0===t&&(t=1),n=0;n<e.length;n++)s=e[n]*t,r+=this._data[n]*s,this._data[n]=this._data[n]+s/this.scale;this.intercept&&(s=1*t,r+=this._data[n]*s,this._data[n]=this._data[n]+s/this.scale),this.norm+=(function(e,t){var s,r=e.length,n=0;for(s=0;s<r;s++)n+=e[s]*t[s];return n}(e,e)+(this.intercept?1:0))*d(t,2)+2*this.scale*r})),n(u.prototype,"innerProduct",(function(e){var t,s=0;for(t=0;t<e.length;t++)s+=this._data[t]*e[t];return s+=this.intercept?this._data[t]:0,s*=this.scale}));function v(e,t,s){var r;t>0&&(r=1-s*t,e.scaleTo(h(r,1e-7)))}function g(e,t,s,r,n,i){var a=e.innerProduct(t)-s;v(e,n,r),a>i?e.add(t,-r):a<-i&&e.add(t,+r)}function j(e,t,s,r,n){var i=s-e.innerProduct(t);v(e,n,r),e.add(t,r*i)}function b(e,t,s,r,n,i){var a=e.innerProduct(t)-s;v(e,n,r),a>i?e.add(t,-r):a<-i?e.add(t,+r):e.add(t,-r*a)}function w(e,s,r){var n,i;switch(n=1,e){case"basic":i=function(){var e=1e3/(n+1e3);return n+=1,e};break;case"constant":i=function(){return n+=1,s};break;case"pegasos":i=function(){var e=1/(r*n);return n+=1,e};break;default:throw new Error(t("0h72X,3g,4S,GD,Gg,Jm","learningRate",["basic","constant","pegasos"].join('", "'),e))}return i}var y={epsilon:.1,eta0:.02,intercept:!0,lambda:.001,learningRate:"basic",loss:"squaredError"};function E(e,s){return c(s)?f(s,"epsilon")&&(e.epsilon=s.epsilon,!p(e.epsilon))?new TypeError(t("0h74D,Gu","epsilon",e.epsilon)):f(s,"eta0")&&(e.eta0=s.eta0,!p(e.eta0))?new TypeError(t("0h74D,Gu","eta0",e.eta0)):f(s,"lambda")&&(e.lambda=s.lambda,!l(e.lambda))?new TypeError(t("0h74k,I9","lambda",e.lambda)):f(s,"learningRate")&&(e.learningRate=s.learningRate,!m(e.learningRate))?new TypeError(t("0h72W,Gh","learningRate",e.learningRate)):f(s,"loss")&&(e.loss=s.loss,!m(e.loss))?new TypeError(t("0h72W,Gh","loss",e.loss)):f(s,"intercept")&&(e.intercept=s.intercept,!o(e.intercept))?new TypeError(t("0h72o,GE","intercept",e.intercept)):null:new TypeError(t("0h72V,FD",s))}function x(i){var a,o,d,h,l,p,c;if(p=s(y),arguments.length>0&&(c=E(p,i)))throw c;switch(d=null,p.loss){case"epsilonInsensitive":o=g;break;case"huber":o=b;break;case"squaredError":o=j;break;default:throw Error(t('invalid option. `%s` option must be one of the following: "%s". Option: `%s`.',"loss",["epsilonInsensitive","huber","squaredError"].join('", "'),p.loss))}function l(s,r){var n;if(!e(s))throw new TypeError(t("0h751,Of",s));if(d||(d=new u(s.length,p.intercept),a=p.intercept?d.nWeights-1:d.nWeights),s.length!==a)throw new TypeError(t("0h753,PX",a,s));n=h(),o(d,s,r,n,p.lambda,p.epsilon)}return h=w(p.learningRate,p.eta0,p.lambda),r(l,"coefs",m),n(l,"predict",f),l;function m(){var e,t;for(e=new Array(d.nWeights),t=0;t<e.length;t++)e[t]=d._data[t]*d.scale;return e}function f(s){if(!e(s)||s.length!==a)throw new TypeError(t("0h753,PX",a||0,s));return d.innerProduct(s)}}export{x as default};
//# sourceMappingURL=index.mjs.map
