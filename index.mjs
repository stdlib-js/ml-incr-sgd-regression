// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-copy@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-pow@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-max@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-number@esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";var c=r,v=a,b=s,g=t,f=o,j=function(e,t){var i,n=e.length,s=0;for(i=0;i<n;i++)s+=e[i]*t[i];return s};function w(e,t){var i;if(!(this instanceof w))return new w(e,t);if(!c(e))throw new TypeError(g("invalid argument. First argument `dim` must be a positive integer. Value: `%s`.",e));if(!v(t))throw new TypeError(g("invalid argument. Second argument `intercept` must be a boolean. Value: `%s`.",t));for(this.scale=1,this.norm=0,this.intercept=t,this.nWeights=e+(this.intercept?1:0),this._data=new Array(this.nWeights),i=0;i<this.nWeights;i++)this._data[i]=0}b(w.prototype,"scaleTo",(function(e){var t;if(this.scale<1e-11){for(t=0;t<this.nWeights;t++)this._data[t]*=this.scale;this.scale=1}if(this.norm*=f(e,2),!(e>0))throw new RangeError(g("Scaling weight vector by nonpositive value, likely due to too large value of eta * lambda. Value: `%f`.",e));this.scale*=e})),b(w.prototype,"add",(function(e,t){var i,n,s;for(n=0,void 0===t&&(t=1),s=0;s<e.length;s++)i=e[s]*t,n+=this._data[s]*i,this._data[s]=this._data[s]+i/this.scale;this.intercept&&(i=1*t,n+=this._data[s]*i,this._data[s]=this._data[s]+i/this.scale),this.norm+=(j(e,e)+(this.intercept?1:0))*f(t,2)+2*this.scale*n})),b(w.prototype,"innerProduct",(function(e){var t,i=0;for(t=0;t<e.length;t++)i+=this._data[t]*e[t];return i+=this.intercept?this._data[t]:0,i*=this.scale}));var y=w,x=l;var E=function(e,t,i){var n;t>0&&(n=1-i*t,e.scaleTo(x(n,1e-7)))},T=E;var _=function(e,t,i,n,s,r){var a=e.innerProduct(t)-i;T(e,s,n),a>r?e.add(t,-n):a<-r&&e.add(t,+n)},R=E;var P=function(e,t,i,n,s){var r=i-e.innerProduct(t);R(e,s,n),e.add(t,n*r)},V=E;var k=function(e,t,i,n,s,r){var a=e.innerProduct(t)-i;V(e,s,n),a>r?e.add(t,-n):a<-r?e.add(t,+n):e.add(t,-n*a)},O=t;var W=function(e,t,i){var n,s;switch(n=1,e){case"basic":s=function(){var e=1e3/(n+1e3);return n+=1,e};break;case"constant":s=function(){return n+=1,t};break;case"pegasos":s=function(){var e=1/(i*n);return n+=1,e};break;default:throw new Error(O("invalid input value. `learningRate` must be either `basic`, `constant` or `pegasos`. Value: `%s`.",e))}return s},F={epsilon:.1,eta0:.02,intercept:!0,lambda:.001,learningRate:"basic",loss:"squaredError"},q=d.isPrimitive,A=p.isPrimitive,I=a.isPrimitive,S=m,z=u.isPrimitive,B=h,C=t;var D=e,G=t,H=i,J=n,K=s,L=y,M=_,N=P,Q=k,U=W,X=F,Y=function(e,t){return S(t)?B(t,"epsilon")&&(e.epsilon=t.epsilon,!A(e.epsilon))?new TypeError(C("invalid option. `%s` option must be a positive number. Option: `%s`.","epsilon",e.epsilon)):B(t,"eta0")&&(e.eta0=t.eta0,!A(e.eta0))?new TypeError(C("invalid option. `%s` option must be a positive number. Option: `%s`.","eta0",e.eta0)):B(t,"lambda")&&(e.lambda=t.lambda,!q(e.lambda))?new TypeError(C("invalid option. `%s` option must be a nonnegative number. Option: `%s`.","lambda",e.lambda)):B(t,"learningRate")&&(e.learningRate=t.learningRate,!z(e.learningRate))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","learningRate",e.learningRate)):B(t,"loss")&&(e.loss=t.loss,!z(e.loss))?new TypeError(C("invalid option. `%s` option must be a string. Option: `%s`.","loss",e.loss)):B(t,"intercept")&&(e.intercept=t.intercept,!I(e.intercept))?new TypeError(C("invalid option. `%s` option must be a boolean. Option: `%s`.","intercept",e.intercept)):null:new TypeError(C("invalid argument. Options argument must be an object. Value: `%s`.",t))};var Z=function(e){var t,i,n,s,r,a,o;if(a=H(X),arguments.length>0&&(o=Y(a,e)))throw o;switch(n=null,a.loss){case"epsilonInsensitive":i=M;break;case"huber":i=Q;break;case"squaredError":i=N;break;default:throw Error(G("invalid input value. `loss` option must be either `epsilonInsensitive`, `huber` or `squaredError`. Value: `%s`.",a.loss))}function r(e,r){var o;if(n||(n=new L(e.length,a.intercept),t=a.intercept?n.nWeights-1:n.nWeights),!D(e)||e.length!==t)throw new TypeError(G("invalid input value. First argument `x` must be an array of length `%u`. Value: `%u`",t,e));o=s(),i(n,e,r,o,a.lambda,a.epsilon)}return s=U(a.learningRate,a.eta0,a.lambda),J(r,"coefs",l),K(r,"predict",d),r;function l(){var e,t;for(e=new Array(n.nWeights),t=0;t<e.length;t++)e[t]=n._data[t]*n.scale;return e}function d(e){if(!D(e)||e.length!==t)throw new TypeError(G("invalid input value. First argument `x` must be an array of length %u. Value: `%s`",this.nFeatures,e));return n.innerProduct(e)}};export{Z as default};
//# sourceMappingURL=index.mjs.map
