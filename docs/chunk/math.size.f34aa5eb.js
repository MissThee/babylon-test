var o=function(){function i(t,h){this.width=t,this.height=h}return i.prototype.toString=function(){return"{W: ".concat(this.width,", H: ").concat(this.height,"}")},i.prototype.getClassName=function(){return"Size"},i.prototype.getHashCode=function(){var t=this.width|0;return t=t*397^(this.height|0),t},i.prototype.copyFrom=function(t){this.width=t.width,this.height=t.height},i.prototype.copyFromFloats=function(t,h){return this.width=t,this.height=h,this},i.prototype.set=function(t,h){return this.copyFromFloats(t,h)},i.prototype.multiplyByFloats=function(t,h){return new i(this.width*t,this.height*h)},i.prototype.clone=function(){return new i(this.width,this.height)},i.prototype.equals=function(t){return t?this.width===t.width&&this.height===t.height:!1},Object.defineProperty(i.prototype,"surface",{get:function(){return this.width*this.height},enumerable:!1,configurable:!0}),i.Zero=function(){return new i(0,0)},i.prototype.add=function(t){var h=new i(this.width+t.width,this.height+t.height);return h},i.prototype.subtract=function(t){var h=new i(this.width-t.width,this.height-t.height);return h},i.Lerp=function(t,h,e){var n=t.width+(h.width-t.width)*e,r=t.height+(h.height-t.height)*e;return new i(n,r)},i}();export{o as S};
