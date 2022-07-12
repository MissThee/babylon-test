import{a as N,j as d,O as l}from"./precisionDate.911053b8.js";import{Matrix as g,Vector3 as f}from"./math.vector.dbc48609.js";import{s as u}from"./decorators.033fe02c.js";import{E as D}from"./performanceConfigurator.3a0adc9f.js";var S=function(){function n(){this._doNotSerialize=!1,this._isDisposed=!1,this._sceneRootNodesIndex=-1,this._isEnabled=!0,this._isParentEnabled=!0,this._isReady=!0,this._onEnabledStateChangedObservable=new l,this._onClonedObservable=new l}return n}(),A=function(){function n(e,t){t===void 0&&(t=null),this._isDirty=!1,this._nodeDataStorage=new S,this.state="",this.metadata=null,this.reservedDataStore=null,this._parentContainer=null,this.animations=new Array,this._ranges={},this.onReady=null,this._currentRenderId=-1,this._parentUpdateId=-1,this._childUpdateId=-1,this._waitingParentId=null,this._waitingParentInstanceIndex=null,this._cache={},this._parentNode=null,this._children=null,this._worldMatrix=g.Identity(),this._worldMatrixDeterminant=0,this._worldMatrixDeterminantIsDirty=!0,this._animationPropertiesOverride=null,this._isNode=!0,this.onDisposeObservable=new l,this._onDisposeObserver=null,this._behaviors=new Array,this.name=e,this.id=e,this._scene=t||D.LastCreatedScene,this.uniqueId=this._scene.getUniqueId(),this._initCache()}return n.AddNodeConstructor=function(e,t){this._NodeConstructors[e]=t},n.Construct=function(e,t,r,i){var o=this._NodeConstructors[e];return o?o(t,r,i):null},Object.defineProperty(n.prototype,"doNotSerialize",{get:function(){return this._nodeDataStorage._doNotSerialize?!0:this._parentNode?this._parentNode.doNotSerialize:!1},set:function(e){this._nodeDataStorage._doNotSerialize=e},enumerable:!1,configurable:!0}),n.prototype.isDisposed=function(){return this._nodeDataStorage._isDisposed},Object.defineProperty(n.prototype,"parent",{get:function(){return this._parentNode},set:function(e){if(this._parentNode!==e){var t=this._parentNode;if(this._parentNode&&this._parentNode._children!==void 0&&this._parentNode._children!==null){var r=this._parentNode._children.indexOf(this);r!==-1&&this._parentNode._children.splice(r,1),!e&&!this._nodeDataStorage._isDisposed&&this._addToSceneRootNodes()}this._parentNode=e,this._parentNode&&((this._parentNode._children===void 0||this._parentNode._children===null)&&(this._parentNode._children=new Array),this._parentNode._children.push(this),t||this._removeFromSceneRootNodes()),this._syncParentEnabledState()}},enumerable:!1,configurable:!0}),n.prototype._serializeAsParent=function(e){e.parentId=this.uniqueId},n.prototype._addToSceneRootNodes=function(){this._nodeDataStorage._sceneRootNodesIndex===-1&&(this._nodeDataStorage._sceneRootNodesIndex=this._scene.rootNodes.length,this._scene.rootNodes.push(this))},n.prototype._removeFromSceneRootNodes=function(){if(this._nodeDataStorage._sceneRootNodesIndex!==-1){var e=this._scene.rootNodes,t=e.length-1;e[this._nodeDataStorage._sceneRootNodesIndex]=e[t],e[this._nodeDataStorage._sceneRootNodesIndex]._nodeDataStorage._sceneRootNodesIndex=this._nodeDataStorage._sceneRootNodesIndex,this._scene.rootNodes.pop(),this._nodeDataStorage._sceneRootNodesIndex=-1}},Object.defineProperty(n.prototype,"animationPropertiesOverride",{get:function(){return this._animationPropertiesOverride?this._animationPropertiesOverride:this._scene.animationPropertiesOverride},set:function(e){this._animationPropertiesOverride=e},enumerable:!1,configurable:!0}),n.prototype.getClassName=function(){return"Node"},Object.defineProperty(n.prototype,"onDispose",{set:function(e){this._onDisposeObserver&&this.onDisposeObservable.remove(this._onDisposeObserver),this._onDisposeObserver=this.onDisposeObservable.add(e)},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onEnabledStateChangedObservable",{get:function(){return this._nodeDataStorage._onEnabledStateChangedObservable},enumerable:!1,configurable:!0}),Object.defineProperty(n.prototype,"onClonedObservable",{get:function(){return this._nodeDataStorage._onClonedObservable},enumerable:!1,configurable:!0}),n.prototype.getScene=function(){return this._scene},n.prototype.getEngine=function(){return this._scene.getEngine()},n.prototype.addBehavior=function(e,t){var r=this;t===void 0&&(t=!1);var i=this._behaviors.indexOf(e);return i!==-1?this:(e.init(),this._scene.isLoading&&!t?this._scene.onDataLoadedObservable.addOnce(function(){e.attach(r)}):e.attach(this),this._behaviors.push(e),this)},n.prototype.removeBehavior=function(e){var t=this._behaviors.indexOf(e);return t===-1?this:(this._behaviors[t].detach(),this._behaviors.splice(t,1),this)},Object.defineProperty(n.prototype,"behaviors",{get:function(){return this._behaviors},enumerable:!1,configurable:!0}),n.prototype.getBehaviorByName=function(e){for(var t=0,r=this._behaviors;t<r.length;t++){var i=r[t];if(i.name===e)return i}return null},n.prototype.getWorldMatrix=function(){return this._currentRenderId!==this._scene.getRenderId()&&this.computeWorldMatrix(),this._worldMatrix},n.prototype._getWorldMatrixDeterminant=function(){return this._worldMatrixDeterminantIsDirty&&(this._worldMatrixDeterminantIsDirty=!1,this._worldMatrixDeterminant=this._worldMatrix.determinant()),this._worldMatrixDeterminant},Object.defineProperty(n.prototype,"worldMatrixFromCache",{get:function(){return this._worldMatrix},enumerable:!1,configurable:!0}),n.prototype._initCache=function(){this._cache={},this._cache.parent=void 0},n.prototype.updateCache=function(e){!e&&this.isSynchronized()||(this._cache.parent=this.parent,this._updateCache())},n.prototype._getActionManagerForTrigger=function(e,t){return this.parent?this.parent._getActionManagerForTrigger(e,!1):null},n.prototype._updateCache=function(e){},n.prototype._isSynchronized=function(){return!0},n.prototype._markSyncedWithParent=function(){this._parentNode&&(this._parentUpdateId=this._parentNode._childUpdateId)},n.prototype.isSynchronizedWithParent=function(){return this._parentNode?this._parentNode._isDirty||this._parentUpdateId!==this._parentNode._childUpdateId?!1:this._parentNode.isSynchronized():!0},n.prototype.isSynchronized=function(){return this._cache.parent!==this._parentNode?(this._cache.parent=this._parentNode,!1):this._parentNode&&!this.isSynchronizedWithParent()?!1:this._isSynchronized()},n.prototype.isReady=function(e){return this._nodeDataStorage._isReady},n.prototype.markAsDirty=function(e){return this._currentRenderId=Number.MAX_VALUE,this._isDirty=!0,this},n.prototype.isEnabled=function(e){return e===void 0&&(e=!0),e===!1?this._nodeDataStorage._isEnabled:this._nodeDataStorage._isEnabled?this._nodeDataStorage._isParentEnabled:!1},n.prototype._syncParentEnabledState=function(){this._nodeDataStorage._isParentEnabled=this._parentNode?this._parentNode.isEnabled():!0,this._children&&this._children.forEach(function(e){e._syncParentEnabledState()})},n.prototype.setEnabled=function(e){this._nodeDataStorage._isEnabled!==e&&(this._nodeDataStorage._isEnabled=e,this._nodeDataStorage._onEnabledStateChangedObservable.notifyObservers(e),this._syncParentEnabledState())},n.prototype.isDescendantOf=function(e){return this.parent?this.parent===e?!0:this.parent.isDescendantOf(e):!1},n.prototype._getDescendants=function(e,t,r){if(t===void 0&&(t=!1),!!this._children)for(var i=0;i<this._children.length;i++){var o=this._children[i];(!r||r(o))&&e.push(o),t||o._getDescendants(e,!1,r)}},n.prototype.getDescendants=function(e,t){var r=new Array;return this._getDescendants(r,e,t),r},n.prototype.getChildMeshes=function(e,t){var r=[];return this._getDescendants(r,e,function(i){return(!t||t(i))&&i.cullingStrategy!==void 0}),r},n.prototype.getChildren=function(e,t){return t===void 0&&(t=!0),this.getDescendants(t,e)},n.prototype._setReady=function(e){if(e!==this._nodeDataStorage._isReady){if(!e){this._nodeDataStorage._isReady=!1;return}this.onReady&&this.onReady(this),this._nodeDataStorage._isReady=!0}},n.prototype.getAnimationByName=function(e){for(var t=0;t<this.animations.length;t++){var r=this.animations[t];if(r.name===e)return r}return null},n.prototype.createAnimationRange=function(e,t,r){if(!this._ranges[e]){this._ranges[e]=n._AnimationRangeFactory(e,t,r);for(var i=0,o=this.animations.length;i<o;i++)this.animations[i]&&this.animations[i].createRange(e,t,r)}},n.prototype.deleteAnimationRange=function(e,t){t===void 0&&(t=!0);for(var r=0,i=this.animations.length;r<i;r++)this.animations[r]&&this.animations[r].deleteRange(e,t);this._ranges[e]=null},n.prototype.getAnimationRange=function(e){return this._ranges[e]||null},n.prototype.getAnimationRanges=function(){var e=[],t;for(t in this._ranges)e.push(this._ranges[t]);return e},n.prototype.beginAnimation=function(e,t,r,i){var o=this.getAnimationRange(e);return o?this._scene.beginAnimation(this,o.from,o.to,t,r,i):null},n.prototype.serializeAnimationRanges=function(){var e=[];for(var t in this._ranges){var r=this._ranges[t];if(!!r){var i={};i.name=t,i.from=r.from,i.to=r.to,e.push(i)}}return e},n.prototype.computeWorldMatrix=function(e){return this._worldMatrix||(this._worldMatrix=g.Identity()),this._worldMatrix},n.prototype.dispose=function(e,t){if(t===void 0&&(t=!1),this._nodeDataStorage._isDisposed=!0,!e)for(var r=this.getDescendants(!0),i=0,o=r;i<o.length;i++){var _=o[i];_.dispose(e,t)}this.parent?this.parent=null:this._removeFromSceneRootNodes(),this.onDisposeObservable.notifyObservers(this),this.onDisposeObservable.clear(),this.onEnabledStateChangedObservable.clear(),this.onClonedObservable.clear();for(var s=0,a=this._behaviors;s<a.length;s++){var p=a[s];p.detach()}this._behaviors=[],this.metadata=null},n.ParseAnimationRanges=function(e,t,r){if(t.ranges)for(var i=0;i<t.ranges.length;i++){var o=t.ranges[i];e.createAnimationRange(o.name,o.from,o.to)}},n.prototype.getHierarchyBoundingVectors=function(e,t){e===void 0&&(e=!0),t===void 0&&(t=null),this.getScene().incrementRenderId(),this.computeWorldMatrix(!0);var r,i,o=this;if(o.getBoundingInfo&&o.subMeshes){var _=o.getBoundingInfo();r=_.boundingBox.minimumWorld.clone(),i=_.boundingBox.maximumWorld.clone()}else r=new f(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),i=new f(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);if(e)for(var s=this.getDescendants(!1),a=0,p=s;a<p.length;a++){var v=p[a],h=v;if(h.computeWorldMatrix(!0),!(t&&!t(h))&&!(!h.getBoundingInfo||h.getTotalVertices()===0)){var y=h.getBoundingInfo(),c=y.boundingBox,b=c.minimumWorld,m=c.maximumWorld;f.CheckExtends(b,r,i),f.CheckExtends(m,r,i)}}return{min:r,max:i}},n._AnimationRangeFactory=function(e,t,r){throw N("AnimationRange")},n._NodeConstructors={},d([u()],n.prototype,"name",void 0),d([u()],n.prototype,"id",void 0),d([u()],n.prototype,"uniqueId",void 0),d([u()],n.prototype,"state",void 0),d([u()],n.prototype,"metadata",void 0),n}();export{A as N};
