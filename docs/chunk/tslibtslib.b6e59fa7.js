var y=function(o,c){return y=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,r){e.__proto__=r}||function(e,r){for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])},y(o,c)};function _(o,c){if(typeof c!="function"&&c!==null)throw new TypeError("Class extends value "+String(c)+" is not a constructor or null");y(o,c);function e(){this.constructor=o}o.prototype=c===null?Object.create(c):(e.prototype=c.prototype,new e)}var h=function(){return h=Object.assign||function(c){for(var e,r=1,a=arguments.length;r<a;r++){e=arguments[r];for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&(c[t]=e[t])}return c},h.apply(this,arguments)};function p(o,c,e,r){var a=arguments.length,t=a<3?c:r===null?r=Object.getOwnPropertyDescriptor(c,e):r,l;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")t=Reflect.decorate(o,c,e,r);else for(var u=o.length-1;u>=0;u--)(l=o[u])&&(t=(a<3?l(t):a>3?l(c,e,t):l(c,e))||t);return a>3&&t&&Object.defineProperty(c,e,t),t}function w(o,c,e,r){function a(t){return t instanceof e?t:new e(function(l){l(t)})}return new(e||(e=Promise))(function(t,l){function u(i){try{n(r.next(i))}catch(s){l(s)}}function f(i){try{n(r.throw(i))}catch(s){l(s)}}function n(i){i.done?t(i.value):a(i.value).then(u,f)}n((r=r.apply(o,c||[])).next())})}function b(o,c){var e={label:0,sent:function(){if(t[0]&1)throw t[1];return t[1]},trys:[],ops:[]},r,a,t,l;return l={next:u(0),throw:u(1),return:u(2)},typeof Symbol=="function"&&(l[Symbol.iterator]=function(){return this}),l;function u(n){return function(i){return f([n,i])}}function f(n){if(r)throw new TypeError("Generator is already executing.");for(;e;)try{if(r=1,a&&(t=n[0]&2?a.return:n[0]?a.throw||((t=a.return)&&t.call(a),0):a.next)&&!(t=t.call(a,n[1])).done)return t;switch(a=0,t&&(n=[n[0]&2,t.value]),n[0]){case 0:case 1:t=n;break;case 4:return e.label++,{value:n[1],done:!1};case 5:e.label++,a=n[1],n=[0];continue;case 7:n=e.ops.pop(),e.trys.pop();continue;default:if(t=e.trys,!(t=t.length>0&&t[t.length-1])&&(n[0]===6||n[0]===2)){e=0;continue}if(n[0]===3&&(!t||n[1]>t[0]&&n[1]<t[3])){e.label=n[1];break}if(n[0]===6&&e.label<t[1]){e.label=t[1],t=n;break}if(t&&e.label<t[2]){e.label=t[2],e.ops.push(n);break}t[2]&&e.ops.pop(),e.trys.pop();continue}n=c.call(o,e)}catch(i){n=[6,i],a=0}finally{r=t=0}if(n[0]&5)throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}}function v(o,c,e){if(e||arguments.length===2)for(var r=0,a=c.length,t;r<a;r++)(t||!(r in c))&&(t||(t=Array.prototype.slice.call(c,0,r)),t[r]=c[r]);return o.concat(t||Array.prototype.slice.call(c))}export{_,p as a,h as b,w as c,b as d,v as e};
