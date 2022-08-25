import{R as l,O as R,L as D,D as W,G as X}from"./@babylonjscore_Misc.d81f49ec.js";import{V as H,a as E,C as B,b as x,c as F,M as Q,Q as J}from"./@babylonjscore_Maths.f3ef132c.js";import{_ as f}from"./tslibtslib.b6e59fa7.js";import{E as Z}from"./@babylonjscore_Engines.7287f97a.js";import{A as C}from"./@babylonjscore_Animations.615099a9.js";var $=function(){function r(){this.hoverCursor="",this.actions=new Array,this.isRecursive=!1}return Object.defineProperty(r,"HasTriggers",{get:function(){for(var e in r.Triggers)if(Object.prototype.hasOwnProperty.call(r.Triggers,e))return!0;return!1},enumerable:!1,configurable:!0}),Object.defineProperty(r,"HasPickTriggers",{get:function(){for(var e in r.Triggers)if(Object.prototype.hasOwnProperty.call(r.Triggers,e)){var t=parseInt(e);if(t>=1&&t<=7)return!0}return!1},enumerable:!1,configurable:!0}),r.HasSpecificTrigger=function(e){for(var t in r.Triggers)if(Object.prototype.hasOwnProperty.call(r.Triggers,t)){var i=parseInt(t);if(i===e)return!0}return!1},r.Triggers={},r}(),u=function(){function r(e,t){this.triggerOptions=e,this.onBeforeExecuteObservable=new R,e.parameter?(this.trigger=e.trigger,this._triggerParameter=e.parameter):e.trigger?this.trigger=e.trigger:this.trigger=e,this._nextActiveAction=this,this._condition=t}return r.prototype._prepare=function(){},r.prototype.getTriggerParameter=function(){return this._triggerParameter},r.prototype.setTriggerParameter=function(e){this._triggerParameter=e},r.prototype._evaluateConditionForCurrentFrame=function(){var e=this._condition;if(!e)return!0;var t=this._actionManager.getScene().getRenderId();return e._evaluationId!==t&&(e._evaluationId=t,e._currentResult=e.isValid()),e._currentResult},r.prototype._executeCurrent=function(e){var t=this._evaluateConditionForCurrentFrame();!t||(this.onBeforeExecuteObservable.notifyObservers(this),this._nextActiveAction.execute(e),this.skipToNextActiveAction())},r.prototype.execute=function(e){},r.prototype.skipToNextActiveAction=function(){this._nextActiveAction._child?(this._nextActiveAction._child._actionManager||(this._nextActiveAction._child._actionManager=this._actionManager),this._nextActiveAction=this._nextActiveAction._child):this._nextActiveAction=this},r.prototype.then=function(e){return this._child=e,e._actionManager=this._actionManager,e._prepare(),e},r.prototype._getProperty=function(e){return this._actionManager._getProperty(e)},r.prototype._getEffectiveTarget=function(e,t){return this._actionManager._getEffectiveTarget(e,t)},r.prototype.serialize=function(e){},r.prototype._serialize=function(e,t){var i={type:1,children:[],name:e.name,properties:e.properties||[]};if(this._child&&this._child.serialize(i),this._condition){var n=this._condition.serialize();return n.children.push(i),t&&t.children.push(n),n}return t&&t.children.push(i),i},r._SerializeValueAsString=function(e){return typeof e=="number"?e.toString():typeof e=="boolean"?e?"true":"false":e instanceof H?e.x+", "+e.y:e instanceof E?e.x+", "+e.y+", "+e.z:e instanceof B?e.r+", "+e.g+", "+e.b:e instanceof x?e.r+", "+e.g+", "+e.b+", "+e.a:e},r._GetTargetProperty=function(e){return{name:"target",targetType:e._isMesh?"MeshProperties":e._isLight?"LightProperties":e._isCamera?"CameraProperties":"SceneProperties",value:e._isScene?"Scene":e.name}},r}();l("BABYLON.Action",u);var ve=function(){function r(e,t,i,n,o,a){this.source=e,this.pointerX=t,this.pointerY=i,this.meshUnderPointer=n,this.sourceEvent=o,this.additionalData=a}return r.CreateNew=function(e,t,i){var n=e.getScene();return new r(e,n.pointerX,n.pointerY,n.meshUnderPointer||e,t,i)},r.CreateNewFromSprite=function(e,t,i,n){return new r(e,t.pointerX,t.pointerY,t.meshUnderPointer,i,n)},r.CreateNewFromScene=function(e,t){return new r(null,e.pointerX,e.pointerY,e.meshUnderPointer,t)},r.CreateNewFromPrimitive=function(e,t,i,n){return new r(e,t.x,t.y,null,i,n)},r}(),M=function(){function r(e){this._actionManager=e}return r.prototype.isValid=function(){return!0},r.prototype._getProperty=function(e){return this._actionManager._getProperty(e)},r.prototype._getEffectiveTarget=function(e,t){return this._actionManager._getEffectiveTarget(e,t)},r.prototype.serialize=function(){},r.prototype._serialize=function(e){return{type:2,children:[],name:e.name,properties:e.properties}},r}(),U=function(r){f(e,r);function e(t,i,n,o,a){a===void 0&&(a=e.IsEqual);var s=r.call(this,t)||this;return s.propertyPath=n,s.value=o,s.operator=a,s._target=i,s._effectiveTarget=s._getEffectiveTarget(i,s.propertyPath),s._property=s._getProperty(s.propertyPath),s}return Object.defineProperty(e,"IsEqual",{get:function(){return e._IsEqual},enumerable:!1,configurable:!0}),Object.defineProperty(e,"IsDifferent",{get:function(){return e._IsDifferent},enumerable:!1,configurable:!0}),Object.defineProperty(e,"IsGreater",{get:function(){return e._IsGreater},enumerable:!1,configurable:!0}),Object.defineProperty(e,"IsLesser",{get:function(){return e._IsLesser},enumerable:!1,configurable:!0}),e.prototype.isValid=function(){switch(this.operator){case e.IsGreater:return this._effectiveTarget[this._property]>this.value;case e.IsLesser:return this._effectiveTarget[this._property]<this.value;case e.IsEqual:case e.IsDifferent:{var t=void 0;return this.value.equals?t=this.value.equals(this._effectiveTarget[this._property]):t=this.value===this._effectiveTarget[this._property],this.operator===e.IsEqual?t:!t}}return!1},e.prototype.serialize=function(){return this._serialize({name:"ValueCondition",properties:[u._GetTargetProperty(this._target),{name:"propertyPath",value:this.propertyPath},{name:"value",value:u._SerializeValueAsString(this.value)},{name:"operator",value:e.GetOperatorName(this.operator)}]})},e.GetOperatorName=function(t){switch(t){case e._IsEqual:return"IsEqual";case e._IsDifferent:return"IsDifferent";case e._IsGreater:return"IsGreater";case e._IsLesser:return"IsLesser";default:return""}},e._IsEqual=0,e._IsDifferent=1,e._IsGreater=2,e._IsLesser=3,e}(M),ee=function(r){f(e,r);function e(t,i){var n=r.call(this,t)||this;return n.predicate=i,n}return e.prototype.isValid=function(){return this.predicate()},e}(M),te=function(r){f(e,r);function e(t,i,n){var o=r.call(this,t)||this;return o.value=n,o._target=i,o}return e.prototype.isValid=function(){return this._target.state===this.value},e.prototype.serialize=function(){return this._serialize({name:"StateCondition",properties:[u._GetTargetProperty(this._target),{name:"value",value:this.value}]})},e}(M);l("BABYLON.ValueCondition",U);l("BABYLON.PredicateCondition",ee);l("BABYLON.StateCondition",te);(function(r){f(e,r);function e(t,i,n,o){var a=r.call(this,t,o)||this;return a.propertyPath=n,a._target=a._effectiveTarget=i,a}return e.prototype._prepare=function(){this._effectiveTarget=this._getEffectiveTarget(this._effectiveTarget,this.propertyPath),this._property=this._getProperty(this.propertyPath)},e.prototype.execute=function(){this._effectiveTarget[this._property]=!this._effectiveTarget[this._property]},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"SwitchBooleanAction",properties:[u._GetTargetProperty(this._target),{name:"propertyPath",value:this.propertyPath}]},t)},e})(u);var re=function(r){f(e,r);function e(t,i,n,o){var a=r.call(this,t,o)||this;return a.value=n,a._target=i,a}return e.prototype.execute=function(){this._target.state=this.value},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"SetStateAction",properties:[u._GetTargetProperty(this._target),{name:"value",value:this.value}]},t)},e}(u),ie=function(r){f(e,r);function e(t,i,n,o,a){var s=r.call(this,t,a)||this;return s.propertyPath=n,s.value=o,s._target=s._effectiveTarget=i,s}return e.prototype._prepare=function(){this._effectiveTarget=this._getEffectiveTarget(this._effectiveTarget,this.propertyPath),this._property=this._getProperty(this.propertyPath)},e.prototype.execute=function(){this._effectiveTarget[this._property]=this.value,this._target.markAsDirty&&this._target.markAsDirty(this._property)},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"SetValueAction",properties:[u._GetTargetProperty(this._target),{name:"propertyPath",value:this.propertyPath},{name:"value",value:u._SerializeValueAsString(this.value)}]},t)},e}(u),ne=function(r){f(e,r);function e(t,i,n,o,a){var s=r.call(this,t,a)||this;return s.propertyPath=n,s.value=o,s._target=s._effectiveTarget=i,s}return e.prototype._prepare=function(){this._effectiveTarget=this._getEffectiveTarget(this._effectiveTarget,this.propertyPath),this._property=this._getProperty(this.propertyPath),typeof this._effectiveTarget[this._property]!="number"&&D.Warn("Warning: IncrementValueAction can only be used with number values")},e.prototype.execute=function(){this._effectiveTarget[this._property]+=this.value,this._target.markAsDirty&&this._target.markAsDirty(this._property)},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"IncrementValueAction",properties:[u._GetTargetProperty(this._target),{name:"propertyPath",value:this.propertyPath},{name:"value",value:u._SerializeValueAsString(this.value)}]},t)},e}(u),oe=function(r){f(e,r);function e(t,i,n,o,a,s){var v=r.call(this,t,s)||this;return v.from=n,v.to=o,v.loop=a,v._target=i,v}return e.prototype._prepare=function(){},e.prototype.execute=function(){var t=this._actionManager.getScene();t.beginAnimation(this._target,this.from,this.to,this.loop)},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"PlayAnimationAction",properties:[u._GetTargetProperty(this._target),{name:"from",value:String(this.from)},{name:"to",value:String(this.to)},{name:"loop",value:u._SerializeValueAsString(this.loop)||!1}]},t)},e}(u),ae=function(r){f(e,r);function e(t,i,n){var o=r.call(this,t,n)||this;return o._target=i,o}return e.prototype._prepare=function(){},e.prototype.execute=function(){var t=this._actionManager.getScene();t.stopAnimation(this._target)},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"StopAnimationAction",properties:[u._GetTargetProperty(this._target)]},t)},e}(u),q=function(r){f(e,r);function e(t,i){return t===void 0&&(t=0),r.call(this,t,i)||this}return e.prototype.execute=function(){},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"DoNothingAction",properties:[]},t)},e}(u);(function(r){f(e,r);function e(t,i,n,o){o===void 0&&(o=!0);var a=r.call(this,t,n)||this;return a.children=i,a.enableChildrenConditions=o,a}return e.prototype._prepare=function(){for(var t=0;t<this.children.length;t++)this.children[t]._actionManager=this._actionManager,this.children[t]._prepare()},e.prototype.execute=function(t){for(var i=0,n=this.children;i<n.length;i++){var o=n[i];(!this.enableChildrenConditions||o._evaluateConditionForCurrentFrame())&&o.execute(t)}},e.prototype.serialize=function(t){for(var i=r.prototype._serialize.call(this,{name:"CombineAction",properties:[],combine:[]},t),n=0;n<this.children.length;n++)i.combine.push(this.children[n].serialize(null));return i},e})(u);var se=function(r){f(e,r);function e(t,i,n){var o=r.call(this,t,n)||this;return o.func=i,o}return e.prototype.execute=function(t){this.func(t)},e}(u),K=function(r){f(e,r);function e(t,i,n,o){var a=r.call(this,t,o)||this;return a._target=i,a._parent=n,a}return e.prototype._prepare=function(){},e.prototype.execute=function(){if(this._target.parent!==this._parent){var t=this._parent.getWorldMatrix().clone();t.invert(),this._target.position=E.TransformCoordinates(this._target.position,t),this._target.parent=this._parent}},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"SetParentAction",properties:[u._GetTargetProperty(this._target),u._GetTargetProperty(this._parent)]},t)},e}(u);l("BABYLON.SetParentAction",K);l("BABYLON.ExecuteCodeAction",se);l("BABYLON.DoNothingAction",q);l("BABYLON.StopAnimationAction",ae);l("BABYLON.PlayAnimationAction",oe);l("BABYLON.IncrementValueAction",ne);l("BABYLON.SetValueAction",ie);l("BABYLON.SetStateAction",re);l("BABYLON.SetParentAction",K);var _e=function(r){f(e,r);function e(t){var i=r.call(this)||this;return t=t||Z.LastCreatedScene,t&&(i._scene=t,t.actionManagers.push(i)),i}return e.prototype.dispose=function(){for(var t=this._scene.actionManagers.indexOf(this),i=0;i<this.actions.length;i++){var n=this.actions[i];e.Triggers[n.trigger]--,e.Triggers[n.trigger]===0&&delete e.Triggers[n.trigger]}t>-1&&this._scene.actionManagers.splice(t,1)},e.prototype.getScene=function(){return this._scene},e.prototype.hasSpecificTriggers=function(t){for(var i=0;i<this.actions.length;i++){var n=this.actions[i];if(t.indexOf(n.trigger)>-1)return!0}return!1},e.prototype.hasSpecificTriggers2=function(t,i){for(var n=0;n<this.actions.length;n++){var o=this.actions[n];if(t==o.trigger||i==o.trigger)return!0}return!1},e.prototype.hasSpecificTrigger=function(t,i){for(var n=0;n<this.actions.length;n++){var o=this.actions[n];if(o.trigger===t)if(i){if(i(o.getTriggerParameter()))return!0}else return!0}return!1},Object.defineProperty(e.prototype,"hasPointerTriggers",{get:function(){for(var t=0;t<this.actions.length;t++){var i=this.actions[t];if(i.trigger>=e.OnPickTrigger&&i.trigger<=e.OnPointerOutTrigger)return!0}return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasPickTriggers",{get:function(){for(var t=0;t<this.actions.length;t++){var i=this.actions[t];if(i.trigger>=e.OnPickTrigger&&i.trigger<=e.OnPickUpTrigger)return!0}return!1},enumerable:!1,configurable:!0}),e.prototype.registerAction=function(t){return t.trigger===e.OnEveryFrameTrigger&&this.getScene().actionManager!==this?(D.Warn("OnEveryFrameTrigger can only be used with scene.actionManager"),null):(this.actions.push(t),e.Triggers[t.trigger]?e.Triggers[t.trigger]++:e.Triggers[t.trigger]=1,t._actionManager=this,t._prepare(),t)},e.prototype.unregisterAction=function(t){var i=this.actions.indexOf(t);return i!==-1?(this.actions.splice(i,1),e.Triggers[t.trigger]-=1,e.Triggers[t.trigger]===0&&delete e.Triggers[t.trigger],t._actionManager=null,!0):!1},e.prototype.processTrigger=function(t,i){for(var n=0;n<this.actions.length;n++){var o=this.actions[n];if(o.trigger===t){if(i&&(t===e.OnKeyUpTrigger||t===e.OnKeyDownTrigger)){var a=o.getTriggerParameter();if(a&&a!==i.sourceEvent.keyCode){if(!a.toLowerCase)continue;var s=a.toLowerCase();if(s!==i.sourceEvent.key){var v=i.sourceEvent.charCode?i.sourceEvent.charCode:i.sourceEvent.keyCode,I=String.fromCharCode(v).toLowerCase();if(I!==s)continue}}}o._executeCurrent(i)}}},e.prototype._getEffectiveTarget=function(t,i){for(var n=i.split("."),o=0;o<n.length-1;o++)t=t[n[o]];return t},e.prototype._getProperty=function(t){var i=t.split(".");return i[i.length-1]},e.prototype.serialize=function(t){for(var i={children:new Array,name:t,type:3,properties:new Array},n=0;n<this.actions.length;n++){var o={type:0,children:new Array,name:e.GetTriggerName(this.actions[n].trigger),properties:new Array},a=this.actions[n].triggerOptions;if(a&&typeof a!="number")if(a.parameter instanceof Node)o.properties.push(u._GetTargetProperty(a.parameter));else{var s={};W.DeepCopy(a.parameter,s,["mesh"]),a.parameter&&a.parameter.mesh&&(s._meshId=a.parameter.mesh.id),o.properties.push({name:"parameter",targetType:null,value:s})}this.actions[n].serialize(o),i.children.push(o)}return i},e.Parse=function(t,i,n){var o=new e(n);i===null?n.actionManager=o:i.actionManager=o;for(var a=function(p,m){var c=X("BABYLON."+p);if(c){var y=Object.create(c.prototype);return y.constructor.apply(y,m),y}},s=function(p,m,c,y){if(y===null){var O=parseFloat(m);return m==="true"||m==="false"?m==="true":isNaN(O)?m:O}for(var h=y.split("."),A=m.split(","),T=0;T<h.length;T++)c=c[h[T]];if(typeof c=="boolean")return A[0]==="true";if(typeof c=="string")return A[0];for(var b=new Array,T=0;T<A.length;T++)b.push(parseFloat(A[T]));return c instanceof E?E.FromArray(b):c instanceof F?F.FromArray(b):c instanceof B?B.FromArray(b):c instanceof x?x.FromArray(b):parseFloat(A[0])},v=function(p,m,c,y,O){if(O===void 0&&(O=null),!p.detached){var h=new Array,A=null,T=null,b=p.combine&&p.combine.length>0;if(p.type===2?h.push(o):h.push(m),b){for(var Y=new Array,L=0;L<p.combine.length;L++)v(p.combine[L],e.NothingTrigger,c,y,Y);h.push(Y)}else for(var P=0;P<p.properties.length;P++){var _=p.properties[P].value,N=p.properties[P].name,G=p.properties[P].targetType;N==="target"?G!==null&&G==="SceneProperties"?_=A=n:_=A=n.getNodeByName(_):N==="parent"?_=n.getNodeByName(_):N==="sound"?n.getSoundByName&&(_=n.getSoundByName(_)):N!=="propertyPath"?p.type===2&&N==="operator"?_=U[_]:_=s(N,_,A,N==="value"?T:null):T=_,h.push(_)}if(O===null?h.push(c):h.push(null),p.name==="InterpolateValueAction"){var j=h[h.length-2];h[h.length-1]=j,h[h.length-2]=c}var S=a(p.name,h);if(S instanceof M&&c!==null){var V=new q(m,c);y?y.then(V):o.registerAction(V),y=V}O===null?S instanceof M?(c=S,S=y):(c=null,y?y.then(S):o.registerAction(S)):O.push(S);for(var P=0;P<p.children.length;P++)v(p.children[P],m,c,S,null)}},I=0;I<t.children.length;I++){var g=void 0,d=t.children[I];if(d.properties.length>0){var k=d.properties[0].value,z=d.properties[0].targetType===null?k:n.getMeshByName(k);z._meshId&&(z.mesh=n.getMeshById(z._meshId)),g={trigger:e[d.name],parameter:z}}else g=e[d.name];for(var w=0;w<d.children.length;w++)d.detached||v(d.children[w],g,null,null)}},e.GetTriggerName=function(t){switch(t){case 0:return"NothingTrigger";case 1:return"OnPickTrigger";case 2:return"OnLeftPickTrigger";case 3:return"OnRightPickTrigger";case 4:return"OnCenterPickTrigger";case 5:return"OnPickDownTrigger";case 6:return"OnPickUpTrigger";case 7:return"OnLongPressTrigger";case 8:return"OnPointerOverTrigger";case 9:return"OnPointerOutTrigger";case 10:return"OnEveryFrameTrigger";case 11:return"OnIntersectionEnterTrigger";case 12:return"OnIntersectionExitTrigger";case 13:return"OnKeyDownTrigger";case 14:return"OnKeyUpTrigger";case 15:return"OnPickOutTrigger";default:return""}},e.NothingTrigger=0,e.OnPickTrigger=1,e.OnLeftPickTrigger=2,e.OnRightPickTrigger=3,e.OnCenterPickTrigger=4,e.OnPickDownTrigger=5,e.OnDoublePickTrigger=6,e.OnPickUpTrigger=7,e.OnPickOutTrigger=16,e.OnLongPressTrigger=8,e.OnPointerOverTrigger=9,e.OnPointerOutTrigger=10,e.OnEveryFrameTrigger=11,e.OnIntersectionEnterTrigger=12,e.OnIntersectionExitTrigger=13,e.OnKeyDownTrigger=14,e.OnKeyUpTrigger=15,e}($),ue=function(r){f(e,r);function e(t,i,n){var o=r.call(this,t,n)||this;return o._sound=i,o}return e.prototype._prepare=function(){},e.prototype.execute=function(){this._sound!==void 0&&this._sound.play()},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"PlaySoundAction",properties:[{name:"sound",value:this._sound.name}]},t)},e}(u),ce=function(r){f(e,r);function e(t,i,n){var o=r.call(this,t,n)||this;return o._sound=i,o}return e.prototype._prepare=function(){},e.prototype.execute=function(){this._sound!==void 0&&this._sound.stop()},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"StopSoundAction",properties:[{name:"sound",value:this._sound.name}]},t)},e}(u);l("BABYLON.PlaySoundAction",ue);l("BABYLON.StopSoundAction",ce);var pe=function(r){f(e,r);function e(t,i,n,o,a,s,v,I){a===void 0&&(a=1e3);var g=r.call(this,t,s)||this;return g.duration=1e3,g.onInterpolationDoneObservable=new R,g.propertyPath=n,g.value=o,g.duration=a,g.stopOtherAnimations=v,g.onInterpolationDone=I,g._target=g._effectiveTarget=i,g}return e.prototype._prepare=function(){this._effectiveTarget=this._getEffectiveTarget(this._effectiveTarget,this.propertyPath),this._property=this._getProperty(this.propertyPath)},e.prototype.execute=function(){var t=this,i=this._actionManager.getScene(),n=[{frame:0,value:this._effectiveTarget[this._property]},{frame:100,value:this.value}],o;if(typeof this.value=="number")o=C.ANIMATIONTYPE_FLOAT;else if(this.value instanceof B)o=C.ANIMATIONTYPE_COLOR3;else if(this.value instanceof E)o=C.ANIMATIONTYPE_VECTOR3;else if(this.value instanceof Q)o=C.ANIMATIONTYPE_MATRIX;else if(this.value instanceof J)o=C.ANIMATIONTYPE_QUATERNION;else{D.Warn("InterpolateValueAction: Unsupported type ("+typeof this.value+")");return}var a=new C("InterpolateValueAction",this._property,100*(1e3/this.duration),o,C.ANIMATIONLOOPMODE_CONSTANT);a.setKeys(n),this.stopOtherAnimations&&i.stopAnimation(this._effectiveTarget);var s=function(){t.onInterpolationDoneObservable.notifyObservers(t),t.onInterpolationDone&&t.onInterpolationDone()};i.beginDirectAnimation(this._effectiveTarget,[a],0,100,!1,1,s)},e.prototype.serialize=function(t){return r.prototype._serialize.call(this,{name:"InterpolateValueAction",properties:[u._GetTargetProperty(this._target),{name:"propertyPath",value:this.propertyPath},{name:"value",value:u._SerializeValueAsString(this.value)},{name:"duration",value:u._SerializeValueAsString(this.duration)},{name:"stopOtherAnimations",value:u._SerializeValueAsString(this.stopOtherAnimations)||!1}]},t)},e}(u);l("BABYLON.InterpolateValueAction",pe);export{ve as A,$ as a,_e as b};
