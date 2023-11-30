import{r as ii,c as oi,g as si}from"./matter-js-YTUBFL5T.js";var kr={exports:{}};/*!
 * matter-tools 0.14.0 by @liabru
 * https://github.com/liabru/matter-tools
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) 2014 Liam Brummitt
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */(function(Ar,li){(function(He,Ze){Ar.exports=Ze(ii())})(oi,function(Gn){return function(He){var Ze={};function Q(E){if(Ze[E])return Ze[E].exports;var V=Ze[E]={i:E,l:!1,exports:{}};return He[E].call(V.exports,V,V.exports,Q),V.l=!0,V.exports}return Q.m=He,Q.c=Ze,Q.d=function(E,V,W){Q.o(E,V)||Object.defineProperty(E,V,{enumerable:!0,get:W})},Q.r=function(E){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(E,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(E,"__esModule",{value:!0})},Q.t=function(E,V){if(V&1&&(E=Q(E)),V&8||V&4&&typeof E=="object"&&E&&E.__esModule)return E;var W=Object.create(null);if(Q.r(W),Object.defineProperty(W,"default",{enumerable:!0,value:E}),V&2&&typeof E!="string")for(var a in E)Q.d(W,a,(function($){return E[$]}).bind(null,a));return W},Q.n=function(E){var V=E&&E.__esModule?function(){return E.default}:function(){return E};return Q.d(V,"a",V),V},Q.o=function(E,V){return Object.prototype.hasOwnProperty.call(E,V)},Q.p="/demo/lib/",Q(Q.s=6)}([function(He,Ze){He.exports=Gn},function(He,Ze,Q){const E=He.exports={};E.injectStyles=function(V,W){if(document.getElementById(W))return;let a=document.createElement("div");a.innerHTML=`<style id="${W}" type="text/css">${V}</style>`;let $=document.head.querySelector("style:last-of-type");$?E.domInsertBefore(a.firstElementChild,$):document.head.appendChild(a.firstElementChild)},E.injectScript=function(V,W,a){if(document.getElementById(W))return;let $=document.createElement("script");$.id=W,$.src=V,$.onload=a,document.body.appendChild($)},E.domRemove=function(V){return V.parentElement.removeChild(V)},E.domInsertBefore=function(V,W){return W.parentNode.insertBefore(V,W.previousElementSibling)}},function(He,Ze,Q){const E=He.exports={},V=Q(8),W=Q(0),a=W.Common,$=W.Engine;E.create=function(){let we=new V({prefix:"$",cleanup:!0});return we.parse=we.resurrect,we},E.clone=function(we,J){var ne=we.parse(E.serialise(we,J));return ne.id=a.nextId(),ne},E.saveState=function(we,J,ne){localStorage.setItem(ne,E.serialise(we,J.world))},E.loadState=function(we,J,ne){var de=we.parse(localStorage.getItem(ne));de&&$.merge(J,{world:de})},E.serialise=function(we,J,ne){return ne=ne||0,we.stringify(J,function(de,Me){if(!/^#/.exec(de)&&typeof Me=="number"){var Pe=parseFloat(Me.toFixed(3));return Pe===0&&Me!==0?Me:Pe}return Me},ne)}},function(He,Ze,Q){const E=He.exports={},V=Q(7),W=Q(1),a=Q(2),$=Q(0),we=$.Engine,J=$.Detector,ne=$.Grid,de=$.World,Me=$.Bodies,Pe=$.Events,fe=$.Composite;E.create=function(Y,ee,Re){V.GUI.TEXT_CLOSED="▲",V.GUI.TEXT_OPEN="▼";var ge=new V.GUI({autoPlace:!1}),rt={engine:Y,runner:ee,render:Re,datGui:ge,broadphase:"grid",broadphaseCache:{grid:Y.broadphase.controller===ne?Y.broadphase:ne.create(),bruteForce:{detector:J.bruteForce}},amount:1,size:40,sides:4,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,offset:{x:0,y:0},renderer:"canvas",chamfer:0,isRecording:!1};a&&(rt.serializer=a.create());let e=Q(9);return W.injectStyles(e,"matter-gui-style"),at(rt),rt},E.update=function(Y){var ee,Re=Y.datGui;for(ee in Re.__folders)E.update(Y,Re.__folders[ee]);for(ee in Re.__controllers){var ge=Re.__controllers[ee];ge.updateDisplay&&ge.updateDisplay()}},E.closeAll=function(Y){var ee=Y.datGui;for(var Re in ee.__folders)ee.__folders[Re].close()},E.destroy=function(Y){Y.datGui.domElement.parentElement.removeChild(Y.datGui.domElement),Y.datGui.destroy()};var at=function(Y){var ee=Y.engine,Re=Y.runner,ge=Y.datGui,rt={addBody:function(){Ct(Y)},clear:function(){nt(Y)},save:function(){a.saveState(Y.serializer,ee,"guiState"),Pe.trigger(Y,"save")},load:function(){a.loadState(Y.serializer,ee,"guiState"),Pe.trigger(Y,"load")}},e=ge.addFolder("Metrics");if(Re&&e.add(Re,"fps").listen(),ee.metrics.extended&&(Re&&(e.add(Re,"delta").listen(),e.add(Re,"correction").listen()),ee&&(e.add(ee.metrics,"bodies").listen(),e.add(ee.metrics,"collisions").listen(),e.add(ee.metrics,"pairs").listen(),e.add(ee.metrics,"broadEff").listen(),e.add(ee.metrics,"midEff").listen(),e.add(ee.metrics,"narrowEff").listen(),e.add(ee.metrics,"narrowReuse").listen()),e.open()),ee){var s=ge.addFolder("Add Body");s.add(Y,"amount",1,5).step(1),s.add(Y,"size",5,150).step(1),s.add(Y,"sides",1,8).step(1),s.add(Y,"density",1e-4,.01).step(.001),s.add(Y,"friction",0,1).step(.05),s.add(Y,"frictionStatic",0,10).step(.1),s.add(Y,"frictionAir",0,Y.frictionAir*10).step(Y.frictionAir/10),s.add(Y,"restitution",0,1).step(.1),s.add(Y,"chamfer",0,30).step(2),s.add(rt,"addBody"),s.open();var r=ge.addFolder("World");Y.serializer&&(r.add(rt,"load"),r.add(rt,"save")),r.add(rt,"clear"),r.open();var t=ge.addFolder("Gravity");t.add(ee.world.gravity,"scale",0,.001).step(1e-4),t.add(ee.world.gravity,"x",-1,1).step(.01),t.add(ee.world.gravity,"y",-1,1).step(.01);var o=ge.addFolder("Engine");o.add(ee,"enableSleeping"),o.add(ee.timing,"timeScale",0,1.2).step(.05).listen(),o.add(ee,"velocityIterations",1,10).step(1),o.add(ee,"positionIterations",1,10).step(1),o.add(ee,"constraintIterations",1,10).step(1),Re&&o.add(Re,"enabled")}if(Y.render){var l=ge.addFolder("Render");l.add(Y.render.options,"wireframes").onFinishChange(function(m){m||(f.setValue(!1),c.setValue(!1))}),l.add(Y.render.options,"showDebug"),l.add(Y.render.options,"showPositions"),l.add(Y.render.options,"showBroadphase"),l.add(Y.render.options,"showBounds"),l.add(Y.render.options,"showVelocity"),l.add(Y.render.options,"showCollisions"),l.add(Y.render.options,"showSeparations");var c=l.add(Y.render.options,"showAxes"),f=l.add(Y.render.options,"showAngleIndicator");l.add(Y.render.options,"showSleeping"),l.add(Y.render.options,"showIds"),l.add(Y.render.options,"showVertexNumbers"),l.add(Y.render.options,"showConvexHulls"),l.add(Y.render.options,"showInternalEdges"),l.add(Y.render.options,"enabled"),l.open()}document.body.appendChild(Y.datGui.domElement)},Ct=function(Y){var ee=Y.engine,Re={density:Y.density,friction:Y.friction,frictionStatic:Y.frictionStatic,frictionAir:Y.frictionAir,restitution:Y.restitution};Y.chamfer&&Y.sides>2&&(Re.chamfer={radius:Y.chamfer});for(var ge=0;ge<Y.amount;ge++)de.add(ee.world,Me.polygon(Y.offset.x+120+ge*Y.size+ge*50,Y.offset.y+200,Y.sides,Y.size,Re))},nt=function(Y){for(var ee=Y.engine,Re=fe.allConstraints(ee.world),ge=null,rt=0;rt<Re.length;rt+=1){var e=Re[rt];if(e.label==="Mouse Constraint"){ge=e;break}}if(de.clear(ee.world,!0),we.clear(ee),ge&&fe.add(ee.world,ge),Y.render){var s=Y.render.controller;s.clear&&s.clear(Y.render)}Pe.trigger(Y,"clear")}},function(He,Ze,Q){const E=He.exports={},V=Q(10),W=Q(5);Q(11);const a=Q(1),$=Q(2),we=Q(0),J=we.Body,ne=we.Bounds,de=we.Composite,Me=we.Common,Pe=we.Events,fe=we.Mouse,at=we.Query,Ct=we.Vertices,nt=we.Vector,Y=we.MouseConstraint;var ee;E.create=function(w,K,A){var X={engine:null,render:null,isPaused:!1,selected:[],selectStart:null,selectEnd:null,selectBounds:ne.create(),mousePrevPosition:{x:0,y:0},offset:{x:0,y:0},autoExpand:!0,autoHide:!0,autoRewind:!0,hasExpanded:!1,bodyClass:"",exportIndent:0,clipboard:[],controls:{container:null,worldTree:null},root:de.create({label:"Root"}),keyBindings:[]};X=Me.extend(X,A),E.instance=X,X.engine=w,X.render=K,X.render?(X.mouse=fe.create(X.render.canvas),X.mouseConstraint=Y.create(w,{mouse:X.mouse})):X.mouse={position:{x:0,y:0}},$&&(X.serializer=$.create(),localStorage.removeItem("pauseState")),ee=W("body"),de.add(X.root,w.world),w.world.isModified=!0,w.world.parent=null;let re=Q(12);return a.injectStyles(re,"js-tree-style"),re=Q(13),a.injectStyles(re,"matter-inspector-style"),X.keyBind=Me.chain(V,L=>{X.keyBindings.push(L)}),Re(X),o(X),e(X),rt(X),X},E.destroy=function(w){w.controls.worldTree.data("jstree").destroy();var K=[].slice.call(document.body.querySelectorAll(".ins-container",".vakata-context",".jstree-marker"));K.forEach(a.domRemove),w.keyBindings.forEach(A=>{V.unbind(A)}),Pe.off(w.engine,"beforeUpdate",w.beforeEngineUpdate),w.render&&(Pe.off(w.render,"afterRender",w.afterRender),Pe.off(w.mouseConstraint))};var Re=function(w){var K=w.controls,A=W('<div class="ins-container">'),X=W('<div class="ins-top-panel">'),re=W('<div class="ins-control-group">'),L=W('<input class="ins-search-box" type="search" placeholder="search">'),ke=W('<button class="ins-import-button ins-button">Import</button>'),xe=W('<button class="ins-export-button ins-button">Export</button>'),ae=W('<button class="ins-pause-button ins-button">Pause</button>'),oe=W('<button class="ins-help-button ins-button">Help</button>'),Ve=W('<button aria-label="Add composite body" title="Add composite body" class="ins-add-button ins-button">+</button>');$?re.append(ae,ke,xe,oe):re.append(ae,oe),A.prepend(X,L,Ve),ee.prepend(A),K.pauseButton=ae,K.importButton=ke,K.exportButton=xe,K.helpButton=oe,K.searchBox=L,K.container=A,K.addCompositeButton=Ve,K.pauseButton.click(function(){T(w,!w.isPaused)}),K.exportButton.click(function(){et(w)}),K.importButton.click(function(){Xe(w)}),K.helpButton.click(function(){ge()}),K.addCompositeButton.click(function(){Ce(w)});var We;K.searchBox.keyup(function(){clearTimeout(We),We=setTimeout(function(){var qe=K.searchBox.val(),ce=K.worldTree.data("jstree");ce.search(qe)},250)})},ge=function(){var w=`Matter Tools

`;w+=`Drag nodes in the tree to move them between composites.
`,w+=`Use browser's developer console to inspect selected objects.
`,w+=`Note: selections only render if renderer supports it.

`,w+=`[shift + space] pause or play simulation.
`,w+=`[right click] and drag on empty space to select a region.
`,w+=`[right click] and drag on an object to move it.
`,w+=`[right click + shift] and drag to move whole selection.

`,w+=`[ctrl-c] to copy selected world objects.
`,w+=`[ctrl-v] to paste copied world objects to mouse position.
`,w+=`[del] or [backspace] delete selected objects.

`,w+=`[shift + s] scale-xy selected objects with mouse or arrows.
`,w+=`[shift + s + d] scale-x selected objects with mouse or arrows.
`,w+=`[shift + s + f] scale-y selected objects with mouse or arrows.
`,w+=`[shift + r] rotate selected objects with mouse or arrows.

`,w+=`[shift + q] set selected objects as static (can't be undone).
`,w+=`[shift + i] import objects.
`,w+=`[shift + o] export selected objects.
`,w+=`[shift + h] toggle Matter.Gui.
`,w+=`[shift + y] toggle auto-hide.
`,w+=`[shift + r] toggle auto-rewind on play/pause.

`,w+="[shift + j] show this help message.",alert(w)},rt=function(w){w.keyBind("shift+space",function(){T(w,!w.isPaused)}),w.serializer&&(w.keyBind("shift+o",function(){et(w)}),w.keyBind("shift+i",function(){Xe(w)})),w.keyBind("shift+j",function(){ge()}),w.keyBind("shift+y",function(){w.autoHide=!w.autoHide,ee.toggleClass("ins-auto-hide gui-auto-hide",w.autoHide)}),w.keyBind("shift+r",function(){w.autoRewind=!w.autoRewind,w.autoRewind||localStorage.removeItem("pauseState")}),w.keyBind("shift+q",function(){for(var K=0;K<w.selected.length;K++){var A=w.selected[K].data;A.type==="body"&&!A.isStatic&&J.setStatic(A,!0)}}),w.keyBind("del",function(){l(w)}),w.keyBind("backspace",function(){l(w)}),w.serializer&&(w.keyBind("ctrl+c",function(){c(w)}),w.keyBind("ctrl+v",function(){f(w)})),W(document).unbind("keydown").bind("keydown",function(K){var A=!1;if(K.keyCode===8){var X=K.srcElement||K.target;X.tagName.toUpperCase()==="INPUT"&&(X.type.toUpperCase()==="TEXT"||X.type.toUpperCase()==="PASSWORD"||X.type.toUpperCase()==="FILE"||X.type.toUpperCase()==="EMAIL"||X.type.toUpperCase()==="SEARCH")||X.tagName.toUpperCase()==="TEXTAREA"?A=X.readOnly||X.disabled:A=!0}A&&K.preventDefault()})},e=function(w){var K=w.engine,A=w.controls,X,re={core:{check_callback:!0,animation:!1},dnd:{copy:!1},search:{show_only_matches:!0,fuzzy:!1},types:{"#":{valid_children:[]},body:{valid_children:[]},constraint:{valid_children:[]},composite:{valid_children:[]},bodies:{valid_children:["body"]},constraints:{valid_children:["constraint"]},composites:{valid_children:["composite"]}},plugins:["dnd","types","unique","search"]};A.worldTree=W('<div class="ins-world-tree">').jstree(re),A.container.append(A.worldTree),w.hasExpanded=!1,A.worldTree.on("refresh.jstree",function(){w.autoExpand&&!w.hasExpanded&&(w.hasExpanded=!0,A.worldTree.jstree("open_all"))}),A.worldTree.on("changed.jstree",function(L,ke){var xe=[],ae=A.worldTree.data("jstree");ke.action==="select_node"&&(clearTimeout(X),X=setTimeout(function(){ke.selected=ae.get_selected();for(var oe=0;oe<ke.selected.length;oe++){var Ve=ke.selected[oe],We=Ve.split("_")[0],qe=Ve.split("_")[1],ce=de.get(K.world,qe,We);switch(We){case"body":case"constraint":case"composite":xe.push(ce);break}}P(w,xe)},1))}),W(document).on("dnd_stop.vakata",function(L,ke){for(var xe=A.worldTree.data("jstree"),ae=ke.data.nodes,oe=0;oe<ae.length;oe++){var Ve=xe.get_node(ae[oe]),We=xe.get_node(xe.get_parent(ae[oe])),qe=Ve.data.compositeId,ce=We.data.compositeId;if(qe!==ce){var pt=ae[oe],_t=pt.split("_")[0],yt=pt.split("_")[1],vt=de.get(w.root,yt,_t),Dt=de.get(w.root,qe,"composite"),Rt=de.get(w.root,ce,"composite");de.move(Dt,vt,Rt)}}}),A.worldTree.on("dblclick.jstree",function(){for(var L=A.worldTree.data("jstree"),ke=L.get_selected(),xe=0;xe<ke.length;xe++){var ae=ke[xe],oe=ae.split("_")[0];switch(oe){case"composite":case"composites":case"bodies":case"constraints":for(var Ve=L.get_node(ae).children,We=0;We<Ve.length;We++)L.select_node(Ve[We],!1);break}}})},s=function(w,K){w.bodyClass.indexOf(" "+K)===-1&&(ee.addClass(K),w.bodyClass=" "+ee.attr("class"))},r=function(w,K){for(var A=!1,X=K.split(" "),re=0;re<X.length&&(A=w.bodyClass.indexOf(" "+X[re])!==-1,!A);re++);A&&(ee.removeClass(K),w.bodyClass=" "+ee.attr("class"))},t=function(w){return nt.add(w.mouse.position,w.offset)},o=function(w){var K=w.engine,A=w.mouse,X=t(w),re=w.controls;w.beforeEngineUpdate=function(){X=t(w);var L=X.x-w.mousePrevPosition.x,ke=V.isPressed("up")+V.isPressed("right")-V.isPressed("down")-V.isPressed("left"),xe=L+ke;if(K.world.isModified){var ae=F(w.root,null,!0);H(re.worldTree.data("jstree"),ae),P(w,[])}if(w.selectStart!==null&&(w.selectEnd.x=X.x,w.selectEnd.y=X.y,ne.update(w.selectBounds,[w.selectStart,w.selectEnd])),V.shift&&V.isPressed("r")){var oe=.03,Ve=Math.max(-2,Math.min(2,xe))*oe;s(w,"ins-cursor-rotate"),k(w,Ve)}else r(w,"ins-cursor-rotate");if(V.shift&&V.isPressed("s")){var We=.02,qe=1+Math.max(-2,Math.min(2,xe))*We;s(w,"ins-cursor-scale");var ce,pt;V.isPressed("d")?(ce=qe,pt=1):V.isPressed("f")?(ce=1,pt=qe):ce=pt=qe,v(w,ce,pt)}else r(w,"ins-cursor-scale");A.button===2?(s(w,"ins-cursor-move"),p(w,X.x,X.y)):r(w,"ins-cursor-move"),w.mousePrevPosition=Me.clone(X)},Pe.on(w.engine,"beforeUpdate",w.beforeEngineUpdate),w.mouseConstraint&&(Pe.on(w.mouseConstraint,"mouseup",function(){if(w.selectStart!==null){var L=at.region(de.allBodies(K.world),w.selectBounds);P(w,L)}w.selectStart=null,w.selectEnd=null,Pe.trigger(w,"selectEnd")}),Pe.on(w.mouseConstraint,"mousedown",function(){var L=de.allBodies(K.world),ke=de.allConstraints(K.world),xe=V.shift||V.control,ae=w.controls.worldTree.data("jstree"),oe;if(A.button===2){var Ve=!1;for(oe=0;oe<L.length;oe++){var We=L[oe];if(ne.contains(We.bounds,X)&&Ct.contains(We.vertices,X)){xe?M(w,We):P(w,[We]),Ve=!0;break}}if(!Ve){for(oe=0;oe<ke.length;oe++){var qe=ke[oe],ce=qe.bodyA,pt=qe.bodyB;if(qe.label.indexOf("Mouse Constraint")===-1){var _t=qe.pointA,yt=qe.pointB;if(ce&&(_t=nt.add(ce.position,qe.pointA)),pt&&(yt=nt.add(pt.position,qe.pointB)),!(!_t||!yt)){var vt=nt.magnitudeSquared(nt.sub(X,_t)),Dt=nt.magnitudeSquared(nt.sub(X,yt));if(vt<100||Dt<100){xe?M(w,qe):P(w,[qe]),Ve=!0;break}}}}Ve?(w.selectStart=null,w.selectEnd=null):(ae.deselect_all(!0),P(w,[]),w.selectStart=Me.clone(X),w.selectEnd=Me.clone(X),ne.update(w.selectBounds,[w.selectStart,w.selectEnd]),Pe.trigger(w,"selectStart"))}}A.button===2&&w.selected.length>0&&(s(w,"ins-cursor-move"),m(w))})),w.render&&(w.afterRender=function(){var L=w.render.controller,ke=w.render.context;L.inspector&&L.inspector(w,ke)},Pe.on(w.render,"afterRender",w.afterRender))},l=function(w){var K=[],A,X=w.controls.worldTree.data("jstree"),re;for(re=0;re<w.selected.length;re++)A=w.selected[re].data,A!==w.engine.world&&K.push(A);var L=X.get_selected();for(re=0;re<L.length;re++){var ke=X.get_node(L[re]);if(ke.type==="composite"&&(ke=X.get_node(ke.children[0]),ke.data)){var xe=ke.data.compositeId;A=de.get(w.root,xe,"composite"),A&&A!==w.engine.world&&(K.push(A),X.delete_node(L[re]))}}de.remove(w.root,K,!0),P(w,[])},c=function(w){w.clipboard.length=0;for(var K=0;K<w.selected.length;K++){var A=w.selected[K].data;A.type==="body"&&w.clipboard.push(A)}},f=function(w){if(w.serializer){for(var K=[],A=w.controls.worldTree.data("jstree"),X=0;X<w.clipboard.length;X++){var re=w.clipboard[X],L=$.clone(w.serializer,re);J.translate(L,{x:50,y:50});var ke=A.get_node(re.type+"_"+re.id,!1),xe=ke.data.compositeId,ae=de.get(w.engine.world,xe,"composite");de.add(ae,L),K.push(L)}setTimeout(function(){P(w,K)},200)}},m=function(w){for(var K=w.selected,A=t(w),X,re,L=0;L<K.length;L++)X=K[L],re=X.data,re.position?X.mousedownOffset={x:A.x-re.position.x,y:A.y-re.position.y}:re.pointA&&!re.bodyA?X.mousedownOffset={x:A.x-re.pointA.x,y:A.y-re.pointA.y}:re.pointB&&!re.bodyB&&(X.mousedownOffset={x:A.x-re.pointB.x,y:A.y-re.pointB.y})},p=function(w,K,A){for(var X=w.selected,re,L,ke=0;ke<X.length;ke++)if(re=X[ke],L=re.data,!!re.mousedownOffset)switch(L.type){case"body":var xe={x:K-L.position.x-re.mousedownOffset.x,y:A-L.position.y-re.mousedownOffset.y};J.translate(L,xe),L.positionPrev.x=L.position.x,L.positionPrev.y=L.position.y;break;case"constraint":var ae=L.pointA;L.bodyA&&(ae=L.pointB),ae.x=K-re.mousedownOffset.x,ae.y=A-re.mousedownOffset.y;var oe=L.bodyA?nt.add(L.bodyA.position,L.pointA):L.pointA,Ve=L.bodyB?nt.add(L.bodyB.position,L.pointB):L.pointB;L.length=nt.magnitude(nt.sub(oe,Ve));break}},v=function(w,K,A){for(var X=w.selected,re,L,ke=0;ke<X.length;ke++)switch(re=X[ke],L=re.data,L.type){case"body":J.scale(L,K,A,L.position),L.circleRadius&&(L.circleRadius*=K);break}},k=function(w,K){for(var A=w.selected,X,re,L=0;L<A.length;L++)switch(X=A[L],re=X.data,re.type){case"body":J.rotate(re,K);break}},T=function(w,K){K?(w.autoRewind&&w.serializer&&(P(w,[]),$.loadState(w.serializer,w.engine,"pauseState")),w.engine.timing.timeScale=0,w.isPaused=!0,w.controls.pauseButton.text("Play"),Pe.trigger(w,"paused")):(w.autoRewind&&w.serializer&&$.saveState(w.serializer,w.engine,"pauseState"),w.engine.timing.timeScale=1,w.isPaused=!1,w.controls.pauseButton.text("Pause"),Pe.trigger(w,"play"))},P=function(w,K){var A=w.controls.worldTree.data("jstree"),X,re;for(re=0;re<w.selected.length;re++)X=w.selected[re].data,A.deselect_node(X.type+"_"+X.id,!0);for(w.selected=[],K.length>0&&console.clear(),re=0;re<K.length;re++)X=K[re],X&&(M(w,X),re<5?console.log(X.label+" "+X.id+": %O",X):re===6&&console.warn("Omitted inspecting "+(K.length-5)+" more objects"))},M=function(w,K){if(K){var A=w.controls.worldTree.data("jstree");w.selected.push({data:K}),A.select_node(K.type+"_"+K.id,!0)}},H=function(w,K){K[0].state=K[0].state||{opened:!0},w.settings.core.data=K,w.refresh(-1)},F=function(w,K,A){var X=[],re={id:"composite_"+w.id,data:{compositeId:K},type:"composite",text:(w.label?w.label:"Composite")+" "+w.id,li_attr:{class:"jstree-node-type-composite"}},L=ye(w.composites,w.id);return L.id="composites_"+w.id,X.push(L),A?L.children:(L=be(w.bodies,w.id),L.id="bodies_"+w.id,X.push(L),L=_e(w.constraints,w.id),L.id="constraints_"+w.id,X.push(L),re.children=X,re)},ye=function(w,K){for(var A={type:"composites",text:"Composites",data:{compositeId:K},children:[],li_attr:{class:"jstree-node-type-composites"}},X=0;X<w.length;X++){var re=w[X];A.children.push(F(re,K))}return A},be=function(w,K){for(var A={type:"bodies",text:"Bodies",data:{compositeId:K},children:[],li_attr:{class:"jstree-node-type-bodies"}},X=0;X<w.length;X++){var re=w[X];A.children.push({type:"body",id:"body_"+re.id,data:{compositeId:K},text:(re.label?re.label:"Body")+" "+re.id,li_attr:{class:"jstree-node-type-body"}})}return A},_e=function(w,K){for(var A={type:"constraints",text:"Constraints",data:{compositeId:K},children:[],li_attr:{class:"jstree-node-type-constraints"}},X=0;X<w.length;X++){var re=w[X];A.children.push({type:"constraint",id:"constraint_"+re.id,data:{compositeId:K},text:(re.label?re.label:"Constraint")+" "+re.id,li_attr:{class:"jstree-node-type-constraint"}})}return A},Ce=function(w){var K=de.create();de.add(w.root,K),w.root.composites.splice(w.root.composites.length-1,1),w.root.composites.unshift(K),de.setModified(w.engine.world,!0,!0,!1)},et=function(w){if(!w.serializer){alert("No serializer.");return}if(w.selected.length===0){alert("No objects were selected, so export could not be created. Can only export objects that are in the World composite.");return}for(var K="export-objects",A=de.create({label:"Exported Objects"}),X=0;X<w.selected.length;X++){var re=w.selected[X].data;de.get(A,re.id,re.type)||(de.add(A,re),w.selected.length===1&&(K="export-"+re.label+"-"+re.id))}K=K.toLowerCase().replace(/[^\w\-]/g,"")+".json";var L=$.serialise(w.serializer,A,w.exportIndent),ke="WebkitAppearance"in document.documentElement.style;if(ke){var xe=new Blob([L],{type:"application/json"}),ae=document.createElement("a");ae.download=K,ae.href=(window.webkitURL||window.URL).createObjectURL(xe),ae.dataset.downloadurl=["application/json",ae.download,ae.href].join(":"),ae.click()}else window.open("data:application/json;charset=utf-8,"+escape(L));Pe.trigger(w,"export")},Xe=function(w){if(!w.serializer){alert("No serializer.");return}var K=document.createElement("div"),A;K.innerHTML='<input type="file">',A=K.firstChild,A.addEventListener("change",function(){var X=A.files[0];if(X.name.match(/\.(txt|json)$/)){var re=new FileReader;re.onload=function(){var L=w.serializer.parse(re.result);if(L){L.label="Imported Objects",de.rebase(L),de.add(w.root,L),w.root.composites.splice(w.root.composites.length-1,1),w.root.composites.unshift(L);var ke=w.controls.worldTree.data("jstree"),xe=F(w.root,null,!0);H(ke,xe)}},re.readAsText(X)}else alert("File not supported, .json or .txt JSON files only")}),A.click()}},function(He,Ze,Q){var E,V;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(W,a){typeof He.exports=="object"?He.exports=W.document?a(W,!0):function($){if(!$.document)throw new Error("jQuery requires a window with a document");return a($)}:a(W)})(typeof window<"u"?window:this,function(W,a){var $=[],we=Object.getPrototypeOf,J=$.slice,ne=$.flat?function(n){return $.flat.call(n)}:function(n){return $.concat.apply([],n)},de=$.push,Me=$.indexOf,Pe={},fe=Pe.toString,at=Pe.hasOwnProperty,Ct=at.toString,nt=Ct.call(Object),Y={},ee=function(n){return typeof n=="function"&&typeof n.nodeType!="number"},Re=function(n){return n!=null&&n===n.window},ge=W.document,rt={type:!0,src:!0,nonce:!0,noModule:!0};function e(n,i,d){var h,g,x=(d=d||ge).createElement("script");if(x.text=n,i)for(h in rt)(g=i[h]||i.getAttribute&&i.getAttribute(h))&&x.setAttribute(h,g);d.head.appendChild(x).parentNode.removeChild(x)}function s(n){return n==null?n+"":typeof n=="object"||typeof n=="function"?Pe[fe.call(n)]||"object":typeof n}var r="3.5.1",t=function(n,i){return new t.fn.init(n,i)};function o(n){var i=!!n&&"length"in n&&n.length,d=s(n);return!ee(n)&&!Re(n)&&(d==="array"||i===0||typeof i=="number"&&0<i&&i-1 in n)}t.fn=t.prototype={jquery:r,constructor:t,length:0,toArray:function(){return J.call(this)},get:function(n){return n==null?J.call(this):n<0?this[n+this.length]:this[n]},pushStack:function(n){var i=t.merge(this.constructor(),n);return i.prevObject=this,i},each:function(n){return t.each(this,n)},map:function(n){return this.pushStack(t.map(this,function(i,d){return n.call(i,d,i)}))},slice:function(){return this.pushStack(J.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(t.grep(this,function(n,i){return(i+1)%2}))},odd:function(){return this.pushStack(t.grep(this,function(n,i){return i%2}))},eq:function(n){var i=this.length,d=+n+(n<0?i:0);return this.pushStack(0<=d&&d<i?[this[d]]:[])},end:function(){return this.prevObject||this.constructor()},push:de,sort:$.sort,splice:$.splice},t.extend=t.fn.extend=function(){var n,i,d,h,g,x,y=arguments[0]||{},S=1,O=arguments.length,D=!1;for(typeof y=="boolean"&&(D=y,y=arguments[S]||{},S++),typeof y=="object"||ee(y)||(y={}),S===O&&(y=this,S--);S<O;S++)if((n=arguments[S])!=null)for(i in n)h=n[i],i!=="__proto__"&&y!==h&&(D&&h&&(t.isPlainObject(h)||(g=Array.isArray(h)))?(d=y[i],x=g&&!Array.isArray(d)?[]:g||t.isPlainObject(d)?d:{},g=!1,y[i]=t.extend(D,x,h)):h!==void 0&&(y[i]=h));return y},t.extend({expando:"jQuery"+(r+Math.random()).replace(/\D/g,""),isReady:!0,error:function(n){throw new Error(n)},noop:function(){},isPlainObject:function(n){var i,d;return!(!n||fe.call(n)!=="[object Object]")&&(!(i=we(n))||typeof(d=at.call(i,"constructor")&&i.constructor)=="function"&&Ct.call(d)===nt)},isEmptyObject:function(n){var i;for(i in n)return!1;return!0},globalEval:function(n,i,d){e(n,{nonce:i&&i.nonce},d)},each:function(n,i){var d,h=0;if(o(n))for(d=n.length;h<d&&i.call(n[h],h,n[h])!==!1;h++);else for(h in n)if(i.call(n[h],h,n[h])===!1)break;return n},makeArray:function(n,i){var d=i||[];return n!=null&&(o(Object(n))?t.merge(d,typeof n=="string"?[n]:n):de.call(d,n)),d},inArray:function(n,i,d){return i==null?-1:Me.call(i,n,d)},merge:function(n,i){for(var d=+i.length,h=0,g=n.length;h<d;h++)n[g++]=i[h];return n.length=g,n},grep:function(n,i,d){for(var h=[],g=0,x=n.length,y=!d;g<x;g++)!i(n[g],g)!==y&&h.push(n[g]);return h},map:function(n,i,d){var h,g,x=0,y=[];if(o(n))for(h=n.length;x<h;x++)(g=i(n[x],x,d))!=null&&y.push(g);else for(x in n)(g=i(n[x],x,d))!=null&&y.push(g);return ne(y)},guid:1,support:Y}),typeof Symbol=="function"&&(t.fn[Symbol.iterator]=$[Symbol.iterator]),t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(n,i){Pe["[object "+i+"]"]=i.toLowerCase()});var l=function(n){var i,d,h,g,x,y,S,O,D,U,te,z,G,me,Ae,ve,it,ht,St,Je="sizzle"+1*new Date,Le=n.document,kt=0,Ue=0,ot=Cn(),vn=Cn(),bn=Cn(),Tt=Cn(),tn=function(j,C){return j===C&&(te=!0),0},sn={}.hasOwnProperty,At=[],an=At.pop,Bt=At.push,st=At.push,Ot=At.slice,Nt=function(j,C){for(var B=0,Z=j.length;B<Z;B++)if(j[B]===C)return B;return-1},$t="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Be="[\\x20\\t\\r\\n\\f]",Ge="(?:\\\\[\\da-fA-F]{1,6}"+Be+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",ut="\\["+Be+"*("+Ge+")(?:"+Be+"*([*^$|!~]?=)"+Be+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+Ge+"))|)"+Be+"*\\]",Lt=":("+Ge+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+ut+")*)|.*)\\)|)",dt=new RegExp(Be+"+","g"),Pt=new RegExp("^"+Be+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Be+"+$","g"),ln=new RegExp("^"+Be+"*,"+Be+"*"),kn=new RegExp("^"+Be+"*([>+~]|"+Be+")"+Be+"*"),Gr=new RegExp(Be+"|>"),Wr=new RegExp(Lt),Xr=new RegExp("^"+Ge+"$"),An={ID:new RegExp("^#("+Ge+")"),CLASS:new RegExp("^\\.("+Ge+")"),TAG:new RegExp("^("+Ge+"|[*])"),ATTR:new RegExp("^"+ut),PSEUDO:new RegExp("^"+Lt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Be+"*(even|odd|(([+-]|)(\\d*)n|)"+Be+"*(?:([+-]|)"+Be+"*(\\d+)|))"+Be+"*\\)|)","i"),bool:new RegExp("^(?:"+$t+")$","i"),needsContext:new RegExp("^"+Be+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Be+"*((?:-\\d)?\\d*)"+Be+"*\\)|)(?=[^-]|$)","i")},Jr=/HTML$/i,Yr=/^(?:input|select|textarea|button)$/i,Qr=/^h\d$/i,xn=/^[^{]+\{\s*\[native \w/,Zr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,In=/[+~]/,Xt=new RegExp("\\\\[\\da-fA-F]{1,6}"+Be+"?|\\\\([^\\r\\n\\f])","g"),Jt=function(j,C){var B="0x"+j.slice(1)-65536;return C||(B<0?String.fromCharCode(B+65536):String.fromCharCode(B>>10|55296,1023&B|56320))},_r=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,mr=function(j,C){return C?j==="\0"?"�":j.slice(0,-1)+"\\"+j.charCodeAt(j.length-1).toString(16)+" ":"\\"+j},vr=function(){z()},ei=Sn(function(j){return j.disabled===!0&&j.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{st.apply(At=Ot.call(Le.childNodes),Le.childNodes),At[Le.childNodes.length].nodeType}catch{st={apply:At.length?function(C,B){Bt.apply(C,Ot.call(B))}:function(C,B){for(var Z=C.length,R=0;C[Z++]=B[R++];);C.length=Z-1}}}function Ye(j,C,B,Z){var R,ie,se,he,pe,Ne,Te,Oe=C&&C.ownerDocument,ze=C?C.nodeType:9;if(B=B||[],typeof j!="string"||!j||ze!==1&&ze!==9&&ze!==11)return B;if(!Z&&(z(C),C=C||G,Ae)){if(ze!==11&&(pe=Zr.exec(j)))if(R=pe[1]){if(ze===9){if(!(se=C.getElementById(R)))return B;if(se.id===R)return B.push(se),B}else if(Oe&&(se=Oe.getElementById(R))&&St(C,se)&&se.id===R)return B.push(se),B}else{if(pe[2])return st.apply(B,C.getElementsByTagName(j)),B;if((R=pe[3])&&d.getElementsByClassName&&C.getElementsByClassName)return st.apply(B,C.getElementsByClassName(R)),B}if(d.qsa&&!Tt[j+" "]&&(!ve||!ve.test(j))&&(ze!==1||C.nodeName.toLowerCase()!=="object")){if(Te=j,Oe=C,ze===1&&(Gr.test(j)||kn.test(j))){for((Oe=In.test(j)&&Un(C.parentNode)||C)===C&&d.scope||((he=C.getAttribute("id"))?he=he.replace(_r,mr):C.setAttribute("id",he=Je)),ie=(Ne=y(j)).length;ie--;)Ne[ie]=(he?"#"+he:":scope")+" "+En(Ne[ie]);Te=Ne.join(",")}try{return st.apply(B,Oe.querySelectorAll(Te)),B}catch{Tt(j,!0)}finally{he===Je&&C.removeAttribute("id")}}}return O(j.replace(Pt,"$1"),C,B,Z)}function Cn(){var j=[];return function C(B,Z){return j.push(B+" ")>h.cacheLength&&delete C[j.shift()],C[B+" "]=Z}}function Ht(j){return j[Je]=!0,j}function zt(j){var C=G.createElement("fieldset");try{return!!j(C)}catch{return!1}finally{C.parentNode&&C.parentNode.removeChild(C),C=null}}function qn(j,C){for(var B=j.split("|"),Z=B.length;Z--;)h.attrHandle[B[Z]]=C}function xr(j,C){var B=C&&j,Z=B&&j.nodeType===1&&C.nodeType===1&&j.sourceIndex-C.sourceIndex;if(Z)return Z;if(B){for(;B=B.nextSibling;)if(B===C)return-1}return j?1:-1}function ti(j){return function(C){return C.nodeName.toLowerCase()==="input"&&C.type===j}}function ni(j){return function(C){var B=C.nodeName.toLowerCase();return(B==="input"||B==="button")&&C.type===j}}function yr(j){return function(C){return"form"in C?C.parentNode&&C.disabled===!1?"label"in C?"label"in C.parentNode?C.parentNode.disabled===j:C.disabled===j:C.isDisabled===j||C.isDisabled!==!j&&ei(C)===j:C.disabled===j:"label"in C&&C.disabled===j}}function nn(j){return Ht(function(C){return C=+C,Ht(function(B,Z){for(var R,ie=j([],B.length,C),se=ie.length;se--;)B[R=ie[se]]&&(B[R]=!(Z[R]=B[R]))})})}function Un(j){return j&&typeof j.getElementsByTagName<"u"&&j}for(i in d=Ye.support={},x=Ye.isXML=function(j){var C=j.namespaceURI,B=(j.ownerDocument||j).documentElement;return!Jr.test(C||B&&B.nodeName||"HTML")},z=Ye.setDocument=function(j){var C,B,Z=j?j.ownerDocument||j:Le;return Z!=G&&Z.nodeType===9&&Z.documentElement&&(me=(G=Z).documentElement,Ae=!x(G),Le!=G&&(B=G.defaultView)&&B.top!==B&&(B.addEventListener?B.addEventListener("unload",vr,!1):B.attachEvent&&B.attachEvent("onunload",vr)),d.scope=zt(function(R){return me.appendChild(R).appendChild(G.createElement("div")),typeof R.querySelectorAll<"u"&&!R.querySelectorAll(":scope fieldset div").length}),d.attributes=zt(function(R){return R.className="i",!R.getAttribute("className")}),d.getElementsByTagName=zt(function(R){return R.appendChild(G.createComment("")),!R.getElementsByTagName("*").length}),d.getElementsByClassName=xn.test(G.getElementsByClassName),d.getById=zt(function(R){return me.appendChild(R).id=Je,!G.getElementsByName||!G.getElementsByName(Je).length}),d.getById?(h.filter.ID=function(R){var ie=R.replace(Xt,Jt);return function(se){return se.getAttribute("id")===ie}},h.find.ID=function(R,ie){if(typeof ie.getElementById<"u"&&Ae){var se=ie.getElementById(R);return se?[se]:[]}}):(h.filter.ID=function(R){var ie=R.replace(Xt,Jt);return function(se){var he=typeof se.getAttributeNode<"u"&&se.getAttributeNode("id");return he&&he.value===ie}},h.find.ID=function(R,ie){if(typeof ie.getElementById<"u"&&Ae){var se,he,pe,Ne=ie.getElementById(R);if(Ne){if((se=Ne.getAttributeNode("id"))&&se.value===R)return[Ne];for(pe=ie.getElementsByName(R),he=0;Ne=pe[he++];)if((se=Ne.getAttributeNode("id"))&&se.value===R)return[Ne]}return[]}}),h.find.TAG=d.getElementsByTagName?function(R,ie){return typeof ie.getElementsByTagName<"u"?ie.getElementsByTagName(R):d.qsa?ie.querySelectorAll(R):void 0}:function(R,ie){var se,he=[],pe=0,Ne=ie.getElementsByTagName(R);if(R==="*"){for(;se=Ne[pe++];)se.nodeType===1&&he.push(se);return he}return Ne},h.find.CLASS=d.getElementsByClassName&&function(R,ie){if(typeof ie.getElementsByClassName<"u"&&Ae)return ie.getElementsByClassName(R)},it=[],ve=[],(d.qsa=xn.test(G.querySelectorAll))&&(zt(function(R){var ie;me.appendChild(R).innerHTML="<a id='"+Je+"'></a><select id='"+Je+"-\r\\' msallowcapture=''><option selected=''></option></select>",R.querySelectorAll("[msallowcapture^='']").length&&ve.push("[*^$]="+Be+`*(?:''|"")`),R.querySelectorAll("[selected]").length||ve.push("\\["+Be+"*(?:value|"+$t+")"),R.querySelectorAll("[id~="+Je+"-]").length||ve.push("~="),(ie=G.createElement("input")).setAttribute("name",""),R.appendChild(ie),R.querySelectorAll("[name='']").length||ve.push("\\["+Be+"*name"+Be+"*="+Be+`*(?:''|"")`),R.querySelectorAll(":checked").length||ve.push(":checked"),R.querySelectorAll("a#"+Je+"+*").length||ve.push(".#.+[+~]"),R.querySelectorAll("\\\f"),ve.push("[\\r\\n\\f]")}),zt(function(R){R.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ie=G.createElement("input");ie.setAttribute("type","hidden"),R.appendChild(ie).setAttribute("name","D"),R.querySelectorAll("[name=d]").length&&ve.push("name"+Be+"*[*^$|!~]?="),R.querySelectorAll(":enabled").length!==2&&ve.push(":enabled",":disabled"),me.appendChild(R).disabled=!0,R.querySelectorAll(":disabled").length!==2&&ve.push(":enabled",":disabled"),R.querySelectorAll("*,:x"),ve.push(",.*:")})),(d.matchesSelector=xn.test(ht=me.matches||me.webkitMatchesSelector||me.mozMatchesSelector||me.oMatchesSelector||me.msMatchesSelector))&&zt(function(R){d.disconnectedMatch=ht.call(R,"*"),ht.call(R,"[s!='']:x"),it.push("!=",Lt)}),ve=ve.length&&new RegExp(ve.join("|")),it=it.length&&new RegExp(it.join("|")),C=xn.test(me.compareDocumentPosition),St=C||xn.test(me.contains)?function(R,ie){var se=R.nodeType===9?R.documentElement:R,he=ie&&ie.parentNode;return R===he||!(!he||he.nodeType!==1||!(se.contains?se.contains(he):R.compareDocumentPosition&&16&R.compareDocumentPosition(he)))}:function(R,ie){if(ie){for(;ie=ie.parentNode;)if(ie===R)return!0}return!1},tn=C?function(R,ie){if(R===ie)return te=!0,0;var se=!R.compareDocumentPosition-!ie.compareDocumentPosition;return se||(1&(se=(R.ownerDocument||R)==(ie.ownerDocument||ie)?R.compareDocumentPosition(ie):1)||!d.sortDetached&&ie.compareDocumentPosition(R)===se?R==G||R.ownerDocument==Le&&St(Le,R)?-1:ie==G||ie.ownerDocument==Le&&St(Le,ie)?1:U?Nt(U,R)-Nt(U,ie):0:4&se?-1:1)}:function(R,ie){if(R===ie)return te=!0,0;var se,he=0,pe=R.parentNode,Ne=ie.parentNode,Te=[R],Oe=[ie];if(!pe||!Ne)return R==G?-1:ie==G?1:pe?-1:Ne?1:U?Nt(U,R)-Nt(U,ie):0;if(pe===Ne)return xr(R,ie);for(se=R;se=se.parentNode;)Te.unshift(se);for(se=ie;se=se.parentNode;)Oe.unshift(se);for(;Te[he]===Oe[he];)he++;return he?xr(Te[he],Oe[he]):Te[he]==Le?-1:Oe[he]==Le?1:0}),G},Ye.matches=function(j,C){return Ye(j,null,null,C)},Ye.matchesSelector=function(j,C){if(z(j),d.matchesSelector&&Ae&&!Tt[C+" "]&&(!it||!it.test(C))&&(!ve||!ve.test(C)))try{var B=ht.call(j,C);if(B||d.disconnectedMatch||j.document&&j.document.nodeType!==11)return B}catch{Tt(C,!0)}return 0<Ye(C,G,null,[j]).length},Ye.contains=function(j,C){return(j.ownerDocument||j)!=G&&z(j),St(j,C)},Ye.attr=function(j,C){(j.ownerDocument||j)!=G&&z(j);var B=h.attrHandle[C.toLowerCase()],Z=B&&sn.call(h.attrHandle,C.toLowerCase())?B(j,C,!Ae):void 0;return Z!==void 0?Z:d.attributes||!Ae?j.getAttribute(C):(Z=j.getAttributeNode(C))&&Z.specified?Z.value:null},Ye.escape=function(j){return(j+"").replace(_r,mr)},Ye.error=function(j){throw new Error("Syntax error, unrecognized expression: "+j)},Ye.uniqueSort=function(j){var C,B=[],Z=0,R=0;if(te=!d.detectDuplicates,U=!d.sortStable&&j.slice(0),j.sort(tn),te){for(;C=j[R++];)C===j[R]&&(Z=B.push(R));for(;Z--;)j.splice(B[Z],1)}return U=null,j},g=Ye.getText=function(j){var C,B="",Z=0,R=j.nodeType;if(R){if(R===1||R===9||R===11){if(typeof j.textContent=="string")return j.textContent;for(j=j.firstChild;j;j=j.nextSibling)B+=g(j)}else if(R===3||R===4)return j.nodeValue}else for(;C=j[Z++];)B+=g(C);return B},(h=Ye.selectors={cacheLength:50,createPseudo:Ht,match:An,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(j){return j[1]=j[1].replace(Xt,Jt),j[3]=(j[3]||j[4]||j[5]||"").replace(Xt,Jt),j[2]==="~="&&(j[3]=" "+j[3]+" "),j.slice(0,4)},CHILD:function(j){return j[1]=j[1].toLowerCase(),j[1].slice(0,3)==="nth"?(j[3]||Ye.error(j[0]),j[4]=+(j[4]?j[5]+(j[6]||1):2*(j[3]==="even"||j[3]==="odd")),j[5]=+(j[7]+j[8]||j[3]==="odd")):j[3]&&Ye.error(j[0]),j},PSEUDO:function(j){var C,B=!j[6]&&j[2];return An.CHILD.test(j[0])?null:(j[3]?j[2]=j[4]||j[5]||"":B&&Wr.test(B)&&(C=y(B,!0))&&(C=B.indexOf(")",B.length-C)-B.length)&&(j[0]=j[0].slice(0,C),j[2]=B.slice(0,C)),j.slice(0,3))}},filter:{TAG:function(j){var C=j.replace(Xt,Jt).toLowerCase();return j==="*"?function(){return!0}:function(B){return B.nodeName&&B.nodeName.toLowerCase()===C}},CLASS:function(j){var C=ot[j+" "];return C||(C=new RegExp("(^|"+Be+")"+j+"("+Be+"|$)"))&&ot(j,function(B){return C.test(typeof B.className=="string"&&B.className||typeof B.getAttribute<"u"&&B.getAttribute("class")||"")})},ATTR:function(j,C,B){return function(Z){var R=Ye.attr(Z,j);return R==null?C==="!=":!C||(R+="",C==="="?R===B:C==="!="?R!==B:C==="^="?B&&R.indexOf(B)===0:C==="*="?B&&-1<R.indexOf(B):C==="$="?B&&R.slice(-B.length)===B:C==="~="?-1<(" "+R.replace(dt," ")+" ").indexOf(B):C==="|="&&(R===B||R.slice(0,B.length+1)===B+"-"))}},CHILD:function(j,C,B,Z,R){var ie=j.slice(0,3)!=="nth",se=j.slice(-4)!=="last",he=C==="of-type";return Z===1&&R===0?function(pe){return!!pe.parentNode}:function(pe,Ne,Te){var Oe,ze,lt,De,ft,gt,bt=ie!==se?"nextSibling":"previousSibling",Qe=pe.parentNode,Gt=he&&pe.nodeName.toLowerCase(),xt=!Te&&!he,ct=!1;if(Qe){if(ie){for(;bt;){for(De=pe;De=De[bt];)if(he?De.nodeName.toLowerCase()===Gt:De.nodeType===1)return!1;gt=bt=j==="only"&&!gt&&"nextSibling"}return!0}if(gt=[se?Qe.firstChild:Qe.lastChild],se&&xt){for(ct=(ft=(Oe=(ze=(lt=(De=Qe)[Je]||(De[Je]={}))[De.uniqueID]||(lt[De.uniqueID]={}))[j]||[])[0]===kt&&Oe[1])&&Oe[2],De=ft&&Qe.childNodes[ft];De=++ft&&De&&De[bt]||(ct=ft=0)||gt.pop();)if(De.nodeType===1&&++ct&&De===pe){ze[j]=[kt,ft,ct];break}}else if(xt&&(ct=ft=(Oe=(ze=(lt=(De=pe)[Je]||(De[Je]={}))[De.uniqueID]||(lt[De.uniqueID]={}))[j]||[])[0]===kt&&Oe[1]),ct===!1)for(;(De=++ft&&De&&De[bt]||(ct=ft=0)||gt.pop())&&!((he?De.nodeName.toLowerCase()===Gt:De.nodeType===1)&&++ct&&(xt&&((ze=(lt=De[Je]||(De[Je]={}))[De.uniqueID]||(lt[De.uniqueID]={}))[j]=[kt,ct]),De===pe)););return(ct-=R)===Z||ct%Z==0&&0<=ct/Z}}},PSEUDO:function(j,C){var B,Z=h.pseudos[j]||h.setFilters[j.toLowerCase()]||Ye.error("unsupported pseudo: "+j);return Z[Je]?Z(C):1<Z.length?(B=[j,j,"",C],h.setFilters.hasOwnProperty(j.toLowerCase())?Ht(function(R,ie){for(var se,he=Z(R,C),pe=he.length;pe--;)R[se=Nt(R,he[pe])]=!(ie[se]=he[pe])}):function(R){return Z(R,0,B)}):Z}},pseudos:{not:Ht(function(j){var C=[],B=[],Z=S(j.replace(Pt,"$1"));return Z[Je]?Ht(function(R,ie,se,he){for(var pe,Ne=Z(R,null,he,[]),Te=R.length;Te--;)(pe=Ne[Te])&&(R[Te]=!(ie[Te]=pe))}):function(R,ie,se){return C[0]=R,Z(C,null,se,B),C[0]=null,!B.pop()}}),has:Ht(function(j){return function(C){return 0<Ye(j,C).length}}),contains:Ht(function(j){return j=j.replace(Xt,Jt),function(C){return-1<(C.textContent||g(C)).indexOf(j)}}),lang:Ht(function(j){return Xr.test(j||"")||Ye.error("unsupported lang: "+j),j=j.replace(Xt,Jt).toLowerCase(),function(C){var B;do if(B=Ae?C.lang:C.getAttribute("xml:lang")||C.getAttribute("lang"))return(B=B.toLowerCase())===j||B.indexOf(j+"-")===0;while((C=C.parentNode)&&C.nodeType===1);return!1}}),target:function(j){var C=n.location&&n.location.hash;return C&&C.slice(1)===j.id},root:function(j){return j===me},focus:function(j){return j===G.activeElement&&(!G.hasFocus||G.hasFocus())&&!!(j.type||j.href||~j.tabIndex)},enabled:yr(!1),disabled:yr(!0),checked:function(j){var C=j.nodeName.toLowerCase();return C==="input"&&!!j.checked||C==="option"&&!!j.selected},selected:function(j){return j.parentNode&&j.parentNode.selectedIndex,j.selected===!0},empty:function(j){for(j=j.firstChild;j;j=j.nextSibling)if(j.nodeType<6)return!1;return!0},parent:function(j){return!h.pseudos.empty(j)},header:function(j){return Qr.test(j.nodeName)},input:function(j){return Yr.test(j.nodeName)},button:function(j){var C=j.nodeName.toLowerCase();return C==="input"&&j.type==="button"||C==="button"},text:function(j){var C;return j.nodeName.toLowerCase()==="input"&&j.type==="text"&&((C=j.getAttribute("type"))==null||C.toLowerCase()==="text")},first:nn(function(){return[0]}),last:nn(function(j,C){return[C-1]}),eq:nn(function(j,C,B){return[B<0?B+C:B]}),even:nn(function(j,C){for(var B=0;B<C;B+=2)j.push(B);return j}),odd:nn(function(j,C){for(var B=1;B<C;B+=2)j.push(B);return j}),lt:nn(function(j,C,B){for(var Z=B<0?B+C:C<B?C:B;0<=--Z;)j.push(Z);return j}),gt:nn(function(j,C,B){for(var Z=B<0?B+C:B;++Z<C;)j.push(Z);return j})}}).pseudos.nth=h.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})h.pseudos[i]=ti(i);for(i in{submit:!0,reset:!0})h.pseudos[i]=ni(i);function jr(){}function En(j){for(var C=0,B=j.length,Z="";C<B;C++)Z+=j[C].value;return Z}function Sn(j,C,B){var Z=C.dir,R=C.next,ie=R||Z,se=B&&ie==="parentNode",he=Ue++;return C.first?function(pe,Ne,Te){for(;pe=pe[Z];)if(pe.nodeType===1||se)return j(pe,Ne,Te);return!1}:function(pe,Ne,Te){var Oe,ze,lt,De=[kt,he];if(Te){for(;pe=pe[Z];)if((pe.nodeType===1||se)&&j(pe,Ne,Te))return!0}else for(;pe=pe[Z];)if(pe.nodeType===1||se)if(ze=(lt=pe[Je]||(pe[Je]={}))[pe.uniqueID]||(lt[pe.uniqueID]={}),R&&R===pe.nodeName.toLowerCase())pe=pe[Z]||pe;else{if((Oe=ze[ie])&&Oe[0]===kt&&Oe[1]===he)return De[2]=Oe[2];if((ze[ie]=De)[2]=j(pe,Ne,Te))return!0}return!1}}function Vn(j){return 1<j.length?function(C,B,Z){for(var R=j.length;R--;)if(!j[R](C,B,Z))return!1;return!0}:j[0]}function Tn(j,C,B,Z,R){for(var ie,se=[],he=0,pe=j.length,Ne=C!=null;he<pe;he++)(ie=j[he])&&(B&&!B(ie,Z,R)||(se.push(ie),Ne&&C.push(he)));return se}function Kn(j,C,B,Z,R,ie){return Z&&!Z[Je]&&(Z=Kn(Z)),R&&!R[Je]&&(R=Kn(R,ie)),Ht(function(se,he,pe,Ne){var Te,Oe,ze,lt=[],De=[],ft=he.length,gt=se||function(Gt,xt,ct){for(var It=0,On=xt.length;It<On;It++)Ye(Gt,xt[It],ct);return ct}(C||"*",pe.nodeType?[pe]:pe,[]),bt=!j||!se&&C?gt:Tn(gt,lt,j,pe,Ne),Qe=B?R||(se?j:ft||Z)?[]:he:bt;if(B&&B(bt,Qe,pe,Ne),Z)for(Te=Tn(Qe,De),Z(Te,[],pe,Ne),Oe=Te.length;Oe--;)(ze=Te[Oe])&&(Qe[De[Oe]]=!(bt[De[Oe]]=ze));if(se){if(R||j){if(R){for(Te=[],Oe=Qe.length;Oe--;)(ze=Qe[Oe])&&Te.push(bt[Oe]=ze);R(null,Qe=[],Te,Ne)}for(Oe=Qe.length;Oe--;)(ze=Qe[Oe])&&-1<(Te=R?Nt(se,ze):lt[Oe])&&(se[Te]=!(he[Te]=ze))}}else Qe=Tn(Qe===he?Qe.splice(ft,Qe.length):Qe),R?R(null,he,Qe,Ne):st.apply(he,Qe)})}function $n(j){for(var C,B,Z,R=j.length,ie=h.relative[j[0].type],se=ie||h.relative[" "],he=ie?1:0,pe=Sn(function(Oe){return Oe===C},se,!0),Ne=Sn(function(Oe){return-1<Nt(C,Oe)},se,!0),Te=[function(Oe,ze,lt){var De=!ie&&(lt||ze!==D)||((C=ze).nodeType?pe(Oe,ze,lt):Ne(Oe,ze,lt));return C=null,De}];he<R;he++)if(B=h.relative[j[he].type])Te=[Sn(Vn(Te),B)];else{if((B=h.filter[j[he].type].apply(null,j[he].matches))[Je]){for(Z=++he;Z<R&&!h.relative[j[Z].type];Z++);return Kn(1<he&&Vn(Te),1<he&&En(j.slice(0,he-1).concat({value:j[he-2].type===" "?"*":""})).replace(Pt,"$1"),B,he<Z&&$n(j.slice(he,Z)),Z<R&&$n(j=j.slice(Z)),Z<R&&En(j))}Te.push(B)}return Vn(Te)}return jr.prototype=h.filters=h.pseudos,h.setFilters=new jr,y=Ye.tokenize=function(j,C){var B,Z,R,ie,se,he,pe,Ne=vn[j+" "];if(Ne)return C?0:Ne.slice(0);for(se=j,he=[],pe=h.preFilter;se;){for(ie in B&&!(Z=ln.exec(se))||(Z&&(se=se.slice(Z[0].length)||se),he.push(R=[])),B=!1,(Z=kn.exec(se))&&(B=Z.shift(),R.push({value:B,type:Z[0].replace(Pt," ")}),se=se.slice(B.length)),h.filter)!(Z=An[ie].exec(se))||pe[ie]&&!(Z=pe[ie](Z))||(B=Z.shift(),R.push({value:B,type:ie,matches:Z}),se=se.slice(B.length));if(!B)break}return C?se.length:se?Ye.error(j):vn(j,he).slice(0)},S=Ye.compile=function(j,C){var B,Z,R,ie,se,he,pe=[],Ne=[],Te=bn[j+" "];if(!Te){for(C||(C=y(j)),B=C.length;B--;)(Te=$n(C[B]))[Je]?pe.push(Te):Ne.push(Te);(Te=bn(j,(Z=Ne,ie=0<(R=pe).length,se=0<Z.length,he=function(Oe,ze,lt,De,ft){var gt,bt,Qe,Gt=0,xt="0",ct=Oe&&[],It=[],On=D,wr=Oe||se&&h.find.TAG("*",ft),br=kt+=On==null?1:Math.random()||.1,ri=wr.length;for(ft&&(D=ze==G||ze||ft);xt!==ri&&(gt=wr[xt])!=null;xt++){if(se&&gt){for(bt=0,ze||gt.ownerDocument==G||(z(gt),lt=!Ae);Qe=Z[bt++];)if(Qe(gt,ze||G,lt)){De.push(gt);break}ft&&(kt=br)}ie&&((gt=!Qe&&gt)&&Gt--,Oe&&ct.push(gt))}if(Gt+=xt,ie&&xt!==Gt){for(bt=0;Qe=R[bt++];)Qe(ct,It,ze,lt);if(Oe){if(0<Gt)for(;xt--;)ct[xt]||It[xt]||(It[xt]=an.call(De));It=Tn(It)}st.apply(De,It),ft&&!Oe&&0<It.length&&1<Gt+R.length&&Ye.uniqueSort(De)}return ft&&(kt=br,D=On),ct},ie?Ht(he):he))).selector=j}return Te},O=Ye.select=function(j,C,B,Z){var R,ie,se,he,pe,Ne=typeof j=="function"&&j,Te=!Z&&y(j=Ne.selector||j);if(B=B||[],Te.length===1){if(2<(ie=Te[0]=Te[0].slice(0)).length&&(se=ie[0]).type==="ID"&&C.nodeType===9&&Ae&&h.relative[ie[1].type]){if(!(C=(h.find.ID(se.matches[0].replace(Xt,Jt),C)||[])[0]))return B;Ne&&(C=C.parentNode),j=j.slice(ie.shift().value.length)}for(R=An.needsContext.test(j)?0:ie.length;R--&&(se=ie[R],!h.relative[he=se.type]);)if((pe=h.find[he])&&(Z=pe(se.matches[0].replace(Xt,Jt),In.test(ie[0].type)&&Un(C.parentNode)||C))){if(ie.splice(R,1),!(j=Z.length&&En(ie)))return st.apply(B,Z),B;break}}return(Ne||S(j,Te))(Z,C,!Ae,B,!C||In.test(j)&&Un(C.parentNode)||C),B},d.sortStable=Je.split("").sort(tn).join("")===Je,d.detectDuplicates=!!te,z(),d.sortDetached=zt(function(j){return 1&j.compareDocumentPosition(G.createElement("fieldset"))}),zt(function(j){return j.innerHTML="<a href='#'></a>",j.firstChild.getAttribute("href")==="#"})||qn("type|href|height|width",function(j,C,B){if(!B)return j.getAttribute(C,C.toLowerCase()==="type"?1:2)}),d.attributes&&zt(function(j){return j.innerHTML="<input/>",j.firstChild.setAttribute("value",""),j.firstChild.getAttribute("value")===""})||qn("value",function(j,C,B){if(!B&&j.nodeName.toLowerCase()==="input")return j.defaultValue}),zt(function(j){return j.getAttribute("disabled")==null})||qn($t,function(j,C,B){var Z;if(!B)return j[C]===!0?C.toLowerCase():(Z=j.getAttributeNode(C))&&Z.specified?Z.value:null}),Ye}(W);t.find=l,t.expr=l.selectors,t.expr[":"]=t.expr.pseudos,t.uniqueSort=t.unique=l.uniqueSort,t.text=l.getText,t.isXMLDoc=l.isXML,t.contains=l.contains,t.escapeSelector=l.escape;var c=function(n,i,d){for(var h=[],g=d!==void 0;(n=n[i])&&n.nodeType!==9;)if(n.nodeType===1){if(g&&t(n).is(d))break;h.push(n)}return h},f=function(n,i){for(var d=[];n;n=n.nextSibling)n.nodeType===1&&n!==i&&d.push(n);return d},m=t.expr.match.needsContext;function p(n,i){return n.nodeName&&n.nodeName.toLowerCase()===i.toLowerCase()}var v=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function k(n,i,d){return ee(i)?t.grep(n,function(h,g){return!!i.call(h,g,h)!==d}):i.nodeType?t.grep(n,function(h){return h===i!==d}):typeof i!="string"?t.grep(n,function(h){return-1<Me.call(i,h)!==d}):t.filter(i,n,d)}t.filter=function(n,i,d){var h=i[0];return d&&(n=":not("+n+")"),i.length===1&&h.nodeType===1?t.find.matchesSelector(h,n)?[h]:[]:t.find.matches(n,t.grep(i,function(g){return g.nodeType===1}))},t.fn.extend({find:function(n){var i,d,h=this.length,g=this;if(typeof n!="string")return this.pushStack(t(n).filter(function(){for(i=0;i<h;i++)if(t.contains(g[i],this))return!0}));for(d=this.pushStack([]),i=0;i<h;i++)t.find(n,g[i],d);return 1<h?t.uniqueSort(d):d},filter:function(n){return this.pushStack(k(this,n||[],!1))},not:function(n){return this.pushStack(k(this,n||[],!0))},is:function(n){return!!k(this,typeof n=="string"&&m.test(n)?t(n):n||[],!1).length}});var T,P=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(t.fn.init=function(n,i,d){var h,g;if(!n)return this;if(d=d||T,typeof n=="string"){if(!(h=n[0]==="<"&&n[n.length-1]===">"&&3<=n.length?[null,n,null]:P.exec(n))||!h[1]&&i)return!i||i.jquery?(i||d).find(n):this.constructor(i).find(n);if(h[1]){if(i=i instanceof t?i[0]:i,t.merge(this,t.parseHTML(h[1],i&&i.nodeType?i.ownerDocument||i:ge,!0)),v.test(h[1])&&t.isPlainObject(i))for(h in i)ee(this[h])?this[h](i[h]):this.attr(h,i[h]);return this}return(g=ge.getElementById(h[2]))&&(this[0]=g,this.length=1),this}return n.nodeType?(this[0]=n,this.length=1,this):ee(n)?d.ready!==void 0?d.ready(n):n(t):t.makeArray(n,this)}).prototype=t.fn,T=t(ge);var M=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function F(n,i){for(;(n=n[i])&&n.nodeType!==1;);return n}t.fn.extend({has:function(n){var i=t(n,this),d=i.length;return this.filter(function(){for(var h=0;h<d;h++)if(t.contains(this,i[h]))return!0})},closest:function(n,i){var d,h=0,g=this.length,x=[],y=typeof n!="string"&&t(n);if(!m.test(n)){for(;h<g;h++)for(d=this[h];d&&d!==i;d=d.parentNode)if(d.nodeType<11&&(y?-1<y.index(d):d.nodeType===1&&t.find.matchesSelector(d,n))){x.push(d);break}}return this.pushStack(1<x.length?t.uniqueSort(x):x)},index:function(n){return n?typeof n=="string"?Me.call(t(n),this[0]):Me.call(this,n.jquery?n[0]:n):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(n,i){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(n,i))))},addBack:function(n){return this.add(n==null?this.prevObject:this.prevObject.filter(n))}}),t.each({parent:function(n){var i=n.parentNode;return i&&i.nodeType!==11?i:null},parents:function(n){return c(n,"parentNode")},parentsUntil:function(n,i,d){return c(n,"parentNode",d)},next:function(n){return F(n,"nextSibling")},prev:function(n){return F(n,"previousSibling")},nextAll:function(n){return c(n,"nextSibling")},prevAll:function(n){return c(n,"previousSibling")},nextUntil:function(n,i,d){return c(n,"nextSibling",d)},prevUntil:function(n,i,d){return c(n,"previousSibling",d)},siblings:function(n){return f((n.parentNode||{}).firstChild,n)},children:function(n){return f(n.firstChild)},contents:function(n){return n.contentDocument!=null&&we(n.contentDocument)?n.contentDocument:(p(n,"template")&&(n=n.content||n),t.merge([],n.childNodes))}},function(n,i){t.fn[n]=function(d,h){var g=t.map(this,i,d);return n.slice(-5)!=="Until"&&(h=d),h&&typeof h=="string"&&(g=t.filter(h,g)),1<this.length&&(H[n]||t.uniqueSort(g),M.test(n)&&g.reverse()),this.pushStack(g)}});var ye=/[^\x20\t\r\n\f]+/g;function be(n){return n}function _e(n){throw n}function Ce(n,i,d,h){var g;try{n&&ee(g=n.promise)?g.call(n).done(i).fail(d):n&&ee(g=n.then)?g.call(n,i,d):i.apply(void 0,[n].slice(h))}catch(x){d.apply(void 0,[x])}}t.Callbacks=function(n){var i,d;n=typeof n=="string"?(i=n,d={},t.each(i.match(ye)||[],function(z,G){d[G]=!0}),d):t.extend({},n);var h,g,x,y,S=[],O=[],D=-1,U=function(){for(y=y||n.once,x=h=!0;O.length;D=-1)for(g=O.shift();++D<S.length;)S[D].apply(g[0],g[1])===!1&&n.stopOnFalse&&(D=S.length,g=!1);n.memory||(g=!1),h=!1,y&&(S=g?[]:"")},te={add:function(){return S&&(g&&!h&&(D=S.length-1,O.push(g)),function z(G){t.each(G,function(me,Ae){ee(Ae)?n.unique&&te.has(Ae)||S.push(Ae):Ae&&Ae.length&&s(Ae)!=="string"&&z(Ae)})}(arguments),g&&!h&&U()),this},remove:function(){return t.each(arguments,function(z,G){for(var me;-1<(me=t.inArray(G,S,me));)S.splice(me,1),me<=D&&D--}),this},has:function(z){return z?-1<t.inArray(z,S):0<S.length},empty:function(){return S&&(S=[]),this},disable:function(){return y=O=[],S=g="",this},disabled:function(){return!S},lock:function(){return y=O=[],g||h||(S=g=""),this},locked:function(){return!!y},fireWith:function(z,G){return y||(G=[z,(G=G||[]).slice?G.slice():G],O.push(G),h||U()),this},fire:function(){return te.fireWith(this,arguments),this},fired:function(){return!!x}};return te},t.extend({Deferred:function(n){var i=[["notify","progress",t.Callbacks("memory"),t.Callbacks("memory"),2],["resolve","done",t.Callbacks("once memory"),t.Callbacks("once memory"),0,"resolved"],["reject","fail",t.Callbacks("once memory"),t.Callbacks("once memory"),1,"rejected"]],d="pending",h={state:function(){return d},always:function(){return g.done(arguments).fail(arguments),this},catch:function(x){return h.then(null,x)},pipe:function(){var x=arguments;return t.Deferred(function(y){t.each(i,function(S,O){var D=ee(x[O[4]])&&x[O[4]];g[O[1]](function(){var U=D&&D.apply(this,arguments);U&&ee(U.promise)?U.promise().progress(y.notify).done(y.resolve).fail(y.reject):y[O[0]+"With"](this,D?[U]:arguments)})}),x=null}).promise()},then:function(x,y,S){var O=0;function D(U,te,z,G){return function(){var me=this,Ae=arguments,ve=function(){var ht,St;if(!(U<O)){if((ht=z.apply(me,Ae))===te.promise())throw new TypeError("Thenable self-resolution");St=ht&&(typeof ht=="object"||typeof ht=="function")&&ht.then,ee(St)?G?St.call(ht,D(O,te,be,G),D(O,te,_e,G)):(O++,St.call(ht,D(O,te,be,G),D(O,te,_e,G),D(O,te,be,te.notifyWith))):(z!==be&&(me=void 0,Ae=[ht]),(G||te.resolveWith)(me,Ae))}},it=G?ve:function(){try{ve()}catch(ht){t.Deferred.exceptionHook&&t.Deferred.exceptionHook(ht,it.stackTrace),O<=U+1&&(z!==_e&&(me=void 0,Ae=[ht]),te.rejectWith(me,Ae))}};U?it():(t.Deferred.getStackHook&&(it.stackTrace=t.Deferred.getStackHook()),W.setTimeout(it))}}return t.Deferred(function(U){i[0][3].add(D(0,U,ee(S)?S:be,U.notifyWith)),i[1][3].add(D(0,U,ee(x)?x:be)),i[2][3].add(D(0,U,ee(y)?y:_e))}).promise()},promise:function(x){return x!=null?t.extend(x,h):h}},g={};return t.each(i,function(x,y){var S=y[2],O=y[5];h[y[1]]=S.add,O&&S.add(function(){d=O},i[3-x][2].disable,i[3-x][3].disable,i[0][2].lock,i[0][3].lock),S.add(y[3].fire),g[y[0]]=function(){return g[y[0]+"With"](this===g?void 0:this,arguments),this},g[y[0]+"With"]=S.fireWith}),h.promise(g),n&&n.call(g,g),g},when:function(n){var i=arguments.length,d=i,h=Array(d),g=J.call(arguments),x=t.Deferred(),y=function(S){return function(O){h[S]=this,g[S]=1<arguments.length?J.call(arguments):O,--i||x.resolveWith(h,g)}};if(i<=1&&(Ce(n,x.done(y(d)).resolve,x.reject,!i),x.state()==="pending"||ee(g[d]&&g[d].then)))return x.then();for(;d--;)Ce(g[d],y(d),x.reject);return x.promise()}});var et=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;t.Deferred.exceptionHook=function(n,i){W.console&&W.console.warn&&n&&et.test(n.name)&&W.console.warn("jQuery.Deferred exception: "+n.message,n.stack,i)},t.readyException=function(n){W.setTimeout(function(){throw n})};var Xe=t.Deferred();function w(){ge.removeEventListener("DOMContentLoaded",w),W.removeEventListener("load",w),t.ready()}t.fn.ready=function(n){return Xe.then(n).catch(function(i){t.readyException(i)}),this},t.extend({isReady:!1,readyWait:1,ready:function(n){(n===!0?--t.readyWait:t.isReady)||(t.isReady=!0)!==n&&0<--t.readyWait||Xe.resolveWith(ge,[t])}}),t.ready.then=Xe.then,ge.readyState==="complete"||ge.readyState!=="loading"&&!ge.documentElement.doScroll?W.setTimeout(t.ready):(ge.addEventListener("DOMContentLoaded",w),W.addEventListener("load",w));var K=function(n,i,d,h,g,x,y){var S=0,O=n.length,D=d==null;if(s(d)==="object")for(S in g=!0,d)K(n,i,S,d[S],!0,x,y);else if(h!==void 0&&(g=!0,ee(h)||(y=!0),D&&(y?(i.call(n,h),i=null):(D=i,i=function(U,te,z){return D.call(t(U),z)})),i))for(;S<O;S++)i(n[S],d,y?h:h.call(n[S],S,i(n[S],d)));return g?n:D?i.call(n):O?i(n[0],d):x},A=/^-ms-/,X=/-([a-z])/g;function re(n,i){return i.toUpperCase()}function L(n){return n.replace(A,"ms-").replace(X,re)}var ke=function(n){return n.nodeType===1||n.nodeType===9||!+n.nodeType};function xe(){this.expando=t.expando+xe.uid++}xe.uid=1,xe.prototype={cache:function(n){var i=n[this.expando];return i||(i={},ke(n)&&(n.nodeType?n[this.expando]=i:Object.defineProperty(n,this.expando,{value:i,configurable:!0}))),i},set:function(n,i,d){var h,g=this.cache(n);if(typeof i=="string")g[L(i)]=d;else for(h in i)g[L(h)]=i[h];return g},get:function(n,i){return i===void 0?this.cache(n):n[this.expando]&&n[this.expando][L(i)]},access:function(n,i,d){return i===void 0||i&&typeof i=="string"&&d===void 0?this.get(n,i):(this.set(n,i,d),d!==void 0?d:i)},remove:function(n,i){var d,h=n[this.expando];if(h!==void 0){if(i!==void 0)for(d=(i=Array.isArray(i)?i.map(L):(i=L(i))in h?[i]:i.match(ye)||[]).length;d--;)delete h[i[d]];(i===void 0||t.isEmptyObject(h))&&(n.nodeType?n[this.expando]=void 0:delete n[this.expando])}},hasData:function(n){var i=n[this.expando];return i!==void 0&&!t.isEmptyObject(i)}};var ae=new xe,oe=new xe,Ve=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,We=/[A-Z]/g;function qe(n,i,d){var h,g;if(d===void 0&&n.nodeType===1)if(h="data-"+i.replace(We,"-$&").toLowerCase(),typeof(d=n.getAttribute(h))=="string"){try{d=(g=d)==="true"||g!=="false"&&(g==="null"?null:g===+g+""?+g:Ve.test(g)?JSON.parse(g):g)}catch{}oe.set(n,i,d)}else d=void 0;return d}t.extend({hasData:function(n){return oe.hasData(n)||ae.hasData(n)},data:function(n,i,d){return oe.access(n,i,d)},removeData:function(n,i){oe.remove(n,i)},_data:function(n,i,d){return ae.access(n,i,d)},_removeData:function(n,i){ae.remove(n,i)}}),t.fn.extend({data:function(n,i){var d,h,g,x=this[0],y=x&&x.attributes;if(n===void 0){if(this.length&&(g=oe.get(x),x.nodeType===1&&!ae.get(x,"hasDataAttrs"))){for(d=y.length;d--;)y[d]&&(h=y[d].name).indexOf("data-")===0&&(h=L(h.slice(5)),qe(x,h,g[h]));ae.set(x,"hasDataAttrs",!0)}return g}return typeof n=="object"?this.each(function(){oe.set(this,n)}):K(this,function(S){var O;if(x&&S===void 0)return(O=oe.get(x,n))!==void 0||(O=qe(x,n))!==void 0?O:void 0;this.each(function(){oe.set(this,n,S)})},null,i,1<arguments.length,null,!0)},removeData:function(n){return this.each(function(){oe.remove(this,n)})}}),t.extend({queue:function(n,i,d){var h;if(n)return i=(i||"fx")+"queue",h=ae.get(n,i),d&&(!h||Array.isArray(d)?h=ae.access(n,i,t.makeArray(d)):h.push(d)),h||[]},dequeue:function(n,i){i=i||"fx";var d=t.queue(n,i),h=d.length,g=d.shift(),x=t._queueHooks(n,i);g==="inprogress"&&(g=d.shift(),h--),g&&(i==="fx"&&d.unshift("inprogress"),delete x.stop,g.call(n,function(){t.dequeue(n,i)},x)),!h&&x&&x.empty.fire()},_queueHooks:function(n,i){var d=i+"queueHooks";return ae.get(n,d)||ae.access(n,d,{empty:t.Callbacks("once memory").add(function(){ae.remove(n,[i+"queue",d])})})}}),t.fn.extend({queue:function(n,i){var d=2;return typeof n!="string"&&(i=n,n="fx",d--),arguments.length<d?t.queue(this[0],n):i===void 0?this:this.each(function(){var h=t.queue(this,n,i);t._queueHooks(this,n),n==="fx"&&h[0]!=="inprogress"&&t.dequeue(this,n)})},dequeue:function(n){return this.each(function(){t.dequeue(this,n)})},clearQueue:function(n){return this.queue(n||"fx",[])},promise:function(n,i){var d,h=1,g=t.Deferred(),x=this,y=this.length,S=function(){--h||g.resolveWith(x,[x])};for(typeof n!="string"&&(i=n,n=void 0),n=n||"fx";y--;)(d=ae.get(x[y],n+"queueHooks"))&&d.empty&&(h++,d.empty.add(S));return S(),g.promise(i)}});var ce=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,pt=new RegExp("^(?:([+-])=|)("+ce+")([a-z%]*)$","i"),_t=["Top","Right","Bottom","Left"],yt=ge.documentElement,vt=function(n){return t.contains(n.ownerDocument,n)},Dt={composed:!0};yt.getRootNode&&(vt=function(n){return t.contains(n.ownerDocument,n)||n.getRootNode(Dt)===n.ownerDocument});var Rt=function(n,i){return(n=i||n).style.display==="none"||n.style.display===""&&vt(n)&&t.css(n,"display")==="none"};function dn(n,i,d,h){var g,x,y=20,S=h?function(){return h.cur()}:function(){return t.css(n,i,"")},O=S(),D=d&&d[3]||(t.cssNumber[i]?"":"px"),U=n.nodeType&&(t.cssNumber[i]||D!=="px"&&+O)&&pt.exec(t.css(n,i));if(U&&U[3]!==D){for(O/=2,D=D||U[3],U=+O||1;y--;)t.style(n,i,U+D),(1-x)*(1-(x=S()/O||.5))<=0&&(y=0),U/=x;U*=2,t.style(n,i,U+D),d=d||[]}return d&&(U=+U||+O||0,g=d[1]?U+(d[1]+1)*d[2]:+d[2],h&&(h.unit=D,h.start=U,h.end=g)),g}var Wt={};function qt(n,i){for(var d,h,g,x,y,S,O,D=[],U=0,te=n.length;U<te;U++)(h=n[U]).style&&(d=h.style.display,i?(d==="none"&&(D[U]=ae.get(h,"display")||null,D[U]||(h.style.display="")),h.style.display===""&&Rt(h)&&(D[U]=(O=y=x=void 0,y=(g=h).ownerDocument,S=g.nodeName,(O=Wt[S])||(x=y.body.appendChild(y.createElement(S)),O=t.css(x,"display"),x.parentNode.removeChild(x),O==="none"&&(O="block"),Wt[S]=O)))):d!=="none"&&(D[U]="none",ae.set(h,"display",d)));for(U=0;U<te;U++)D[U]!=null&&(n[U].style.display=D[U]);return n}t.fn.extend({show:function(){return qt(this,!0)},hide:function(){return qt(this)},toggle:function(n){return typeof n=="boolean"?n?this.show():this.hide():this.each(function(){Rt(this)?t(this).show():t(this).hide()})}});var Ut,Ke,Yt=/^(?:checkbox|radio)$/i,cn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,hn=/^$|^module$|\/(?:java|ecma)script/i;Ut=ge.createDocumentFragment().appendChild(ge.createElement("div")),(Ke=ge.createElement("input")).setAttribute("type","radio"),Ke.setAttribute("checked","checked"),Ke.setAttribute("name","t"),Ut.appendChild(Ke),Y.checkClone=Ut.cloneNode(!0).cloneNode(!0).lastChild.checked,Ut.innerHTML="<textarea>x</textarea>",Y.noCloneChecked=!!Ut.cloneNode(!0).lastChild.defaultValue,Ut.innerHTML="<option></option>",Y.option=!!Ut.lastChild;var jt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function mt(n,i){var d;return d=typeof n.getElementsByTagName<"u"?n.getElementsByTagName(i||"*"):typeof n.querySelectorAll<"u"?n.querySelectorAll(i||"*"):[],i===void 0||i&&p(n,i)?t.merge([n],d):d}function un(n,i){for(var d=0,h=n.length;d<h;d++)ae.set(n[d],"globalEval",!i||ae.get(i[d],"globalEval"))}jt.tbody=jt.tfoot=jt.colgroup=jt.caption=jt.thead,jt.th=jt.td,Y.option||(jt.optgroup=jt.option=[1,"<select multiple='multiple'>","</select>"]);var u=/<|&#?\w+;/;function _(n,i,d,h,g){for(var x,y,S,O,D,U,te=i.createDocumentFragment(),z=[],G=0,me=n.length;G<me;G++)if((x=n[G])||x===0)if(s(x)==="object")t.merge(z,x.nodeType?[x]:x);else if(u.test(x)){for(y=y||te.appendChild(i.createElement("div")),S=(cn.exec(x)||["",""])[1].toLowerCase(),O=jt[S]||jt._default,y.innerHTML=O[1]+t.htmlPrefilter(x)+O[2],U=O[0];U--;)y=y.lastChild;t.merge(z,y.childNodes),(y=te.firstChild).textContent=""}else z.push(i.createTextNode(x));for(te.textContent="",G=0;x=z[G++];)if(h&&-1<t.inArray(x,h))g&&g.push(x);else if(D=vt(x),y=mt(te.appendChild(x),"script"),D&&un(y),d)for(U=0;x=y[U++];)hn.test(x.type||"")&&d.push(x);return te}var b=/^key/,N=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,I=/^([^.]*)(?:\.(.+)|)/;function q(){return!0}function le(){return!1}function Ee(n,i){return n===function(){try{return ge.activeElement}catch{}}()==(i==="focus")}function Se(n,i,d,h,g,x){var y,S;if(typeof i=="object"){for(S in typeof d!="string"&&(h=h||d,d=void 0),i)Se(n,S,d,h,i[S],x);return n}if(h==null&&g==null?(g=d,h=d=void 0):g==null&&(typeof d=="string"?(g=h,h=void 0):(g=h,h=d,d=void 0)),g===!1)g=le;else if(!g)return n;return x===1&&(y=g,(g=function(O){return t().off(O),y.apply(this,arguments)}).guid=y.guid||(y.guid=t.guid++)),n.each(function(){t.event.add(this,i,g,h,d)})}function je(n,i,d){d?(ae.set(n,i,!1),t.event.add(n,i,{namespace:!1,handler:function(h){var g,x,y=ae.get(this,i);if(1&h.isTrigger&&this[i]){if(y.length)(t.event.special[i]||{}).delegateType&&h.stopPropagation();else if(y=J.call(arguments),ae.set(this,i,y),g=d(this,i),this[i](),y!==(x=ae.get(this,i))||g?ae.set(this,i,!1):x={},y!==x)return h.stopImmediatePropagation(),h.preventDefault(),x.value}else y.length&&(ae.set(this,i,{value:t.event.trigger(t.extend(y[0],t.Event.prototype),y.slice(1),this)}),h.stopImmediatePropagation())}})):ae.get(n,i)===void 0&&t.event.add(n,i,q)}t.event={global:{},add:function(n,i,d,h,g){var x,y,S,O,D,U,te,z,G,me,Ae,ve=ae.get(n);if(ke(n))for(d.handler&&(d=(x=d).handler,g=x.selector),g&&t.find.matchesSelector(yt,g),d.guid||(d.guid=t.guid++),(O=ve.events)||(O=ve.events=Object.create(null)),(y=ve.handle)||(y=ve.handle=function(it){return typeof t<"u"&&t.event.triggered!==it.type?t.event.dispatch.apply(n,arguments):void 0}),D=(i=(i||"").match(ye)||[""]).length;D--;)G=Ae=(S=I.exec(i[D])||[])[1],me=(S[2]||"").split(".").sort(),G&&(te=t.event.special[G]||{},G=(g?te.delegateType:te.bindType)||G,te=t.event.special[G]||{},U=t.extend({type:G,origType:Ae,data:h,handler:d,guid:d.guid,selector:g,needsContext:g&&t.expr.match.needsContext.test(g),namespace:me.join(".")},x),(z=O[G])||((z=O[G]=[]).delegateCount=0,te.setup&&te.setup.call(n,h,me,y)!==!1||n.addEventListener&&n.addEventListener(G,y)),te.add&&(te.add.call(n,U),U.handler.guid||(U.handler.guid=d.guid)),g?z.splice(z.delegateCount++,0,U):z.push(U),t.event.global[G]=!0)},remove:function(n,i,d,h,g){var x,y,S,O,D,U,te,z,G,me,Ae,ve=ae.hasData(n)&&ae.get(n);if(ve&&(O=ve.events)){for(D=(i=(i||"").match(ye)||[""]).length;D--;)if(G=Ae=(S=I.exec(i[D])||[])[1],me=(S[2]||"").split(".").sort(),G){for(te=t.event.special[G]||{},z=O[G=(h?te.delegateType:te.bindType)||G]||[],S=S[2]&&new RegExp("(^|\\.)"+me.join("\\.(?:.*\\.|)")+"(\\.|$)"),y=x=z.length;x--;)U=z[x],!g&&Ae!==U.origType||d&&d.guid!==U.guid||S&&!S.test(U.namespace)||h&&h!==U.selector&&(h!=="**"||!U.selector)||(z.splice(x,1),U.selector&&z.delegateCount--,te.remove&&te.remove.call(n,U));y&&!z.length&&(te.teardown&&te.teardown.call(n,me,ve.handle)!==!1||t.removeEvent(n,G,ve.handle),delete O[G])}else for(G in O)t.event.remove(n,G+i[D],d,h,!0);t.isEmptyObject(O)&&ae.remove(n,"handle events")}},dispatch:function(n){var i,d,h,g,x,y,S=new Array(arguments.length),O=t.event.fix(n),D=(ae.get(this,"events")||Object.create(null))[O.type]||[],U=t.event.special[O.type]||{};for(S[0]=O,i=1;i<arguments.length;i++)S[i]=arguments[i];if(O.delegateTarget=this,!U.preDispatch||U.preDispatch.call(this,O)!==!1){for(y=t.event.handlers.call(this,O,D),i=0;(g=y[i++])&&!O.isPropagationStopped();)for(O.currentTarget=g.elem,d=0;(x=g.handlers[d++])&&!O.isImmediatePropagationStopped();)O.rnamespace&&x.namespace!==!1&&!O.rnamespace.test(x.namespace)||(O.handleObj=x,O.data=x.data,(h=((t.event.special[x.origType]||{}).handle||x.handler).apply(g.elem,S))!==void 0&&(O.result=h)===!1&&(O.preventDefault(),O.stopPropagation()));return U.postDispatch&&U.postDispatch.call(this,O),O.result}},handlers:function(n,i){var d,h,g,x,y,S=[],O=i.delegateCount,D=n.target;if(O&&D.nodeType&&!(n.type==="click"&&1<=n.button)){for(;D!==this;D=D.parentNode||this)if(D.nodeType===1&&(n.type!=="click"||D.disabled!==!0)){for(x=[],y={},d=0;d<O;d++)y[g=(h=i[d]).selector+" "]===void 0&&(y[g]=h.needsContext?-1<t(g,this).index(D):t.find(g,this,null,[D]).length),y[g]&&x.push(h);x.length&&S.push({elem:D,handlers:x})}}return D=this,O<i.length&&S.push({elem:D,handlers:i.slice(O)}),S},addProp:function(n,i){Object.defineProperty(t.Event.prototype,n,{enumerable:!0,configurable:!0,get:ee(i)?function(){if(this.originalEvent)return i(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[n]},set:function(d){Object.defineProperty(this,n,{enumerable:!0,configurable:!0,writable:!0,value:d})}})},fix:function(n){return n[t.expando]?n:new t.Event(n)},special:{load:{noBubble:!0},click:{setup:function(n){var i=this||n;return Yt.test(i.type)&&i.click&&p(i,"input")&&je(i,"click",q),!1},trigger:function(n){var i=this||n;return Yt.test(i.type)&&i.click&&p(i,"input")&&je(i,"click"),!0},_default:function(n){var i=n.target;return Yt.test(i.type)&&i.click&&p(i,"input")&&ae.get(i,"click")||p(i,"a")}},beforeunload:{postDispatch:function(n){n.result!==void 0&&n.originalEvent&&(n.originalEvent.returnValue=n.result)}}}},t.removeEvent=function(n,i,d){n.removeEventListener&&n.removeEventListener(i,d)},t.Event=function(n,i){if(!(this instanceof t.Event))return new t.Event(n,i);n&&n.type?(this.originalEvent=n,this.type=n.type,this.isDefaultPrevented=n.defaultPrevented||n.defaultPrevented===void 0&&n.returnValue===!1?q:le,this.target=n.target&&n.target.nodeType===3?n.target.parentNode:n.target,this.currentTarget=n.currentTarget,this.relatedTarget=n.relatedTarget):this.type=n,i&&t.extend(this,i),this.timeStamp=n&&n.timeStamp||Date.now(),this[t.expando]=!0},t.Event.prototype={constructor:t.Event,isDefaultPrevented:le,isPropagationStopped:le,isImmediatePropagationStopped:le,isSimulated:!1,preventDefault:function(){var n=this.originalEvent;this.isDefaultPrevented=q,n&&!this.isSimulated&&n.preventDefault()},stopPropagation:function(){var n=this.originalEvent;this.isPropagationStopped=q,n&&!this.isSimulated&&n.stopPropagation()},stopImmediatePropagation:function(){var n=this.originalEvent;this.isImmediatePropagationStopped=q,n&&!this.isSimulated&&n.stopImmediatePropagation(),this.stopPropagation()}},t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(n){var i=n.button;return n.which==null&&b.test(n.type)?n.charCode!=null?n.charCode:n.keyCode:!n.which&&i!==void 0&&N.test(n.type)?1&i?1:2&i?3:4&i?2:0:n.which}},t.event.addProp),t.each({focus:"focusin",blur:"focusout"},function(n,i){t.event.special[n]={setup:function(){return je(this,n,Ee),!1},trigger:function(){return je(this,n),!0},delegateType:i}}),t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(n,i){t.event.special[n]={delegateType:i,bindType:i,handle:function(d){var h,g=d.relatedTarget,x=d.handleObj;return g&&(g===this||t.contains(this,g))||(d.type=x.origType,h=x.handler.apply(this,arguments),d.type=i),h}}}),t.fn.extend({on:function(n,i,d,h){return Se(this,n,i,d,h)},one:function(n,i,d,h){return Se(this,n,i,d,h,1)},off:function(n,i,d){var h,g;if(n&&n.preventDefault&&n.handleObj)return h=n.handleObj,t(n.delegateTarget).off(h.namespace?h.origType+"."+h.namespace:h.origType,h.selector,h.handler),this;if(typeof n=="object"){for(g in n)this.off(g,i,n[g]);return this}return i!==!1&&typeof i!="function"||(d=i,i=void 0),d===!1&&(d=le),this.each(function(){t.event.remove(this,n,d,i)})}});var Ie=/<script|<style|<link/i,Fe=/checked\s*(?:[^=]|=\s*.checked.)/i,ue=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function $e(n,i){return p(n,"table")&&p(i.nodeType!==11?i:i.firstChild,"tr")&&t(n).children("tbody")[0]||n}function Vt(n){return n.type=(n.getAttribute("type")!==null)+"/"+n.type,n}function tt(n){return(n.type||"").slice(0,5)==="true/"?n.type=n.type.slice(5):n.removeAttribute("type"),n}function Et(n,i){var d,h,g,x,y,S;if(i.nodeType===1){if(ae.hasData(n)&&(S=ae.get(n).events))for(g in ae.remove(i,"handle events"),S)for(d=0,h=S[g].length;d<h;d++)t.event.add(i,g,S[g][d]);oe.hasData(n)&&(x=oe.access(n),y=t.extend({},x),oe.set(i,y))}}function wt(n,i,d,h){i=ne(i);var g,x,y,S,O,D,U=0,te=n.length,z=te-1,G=i[0],me=ee(G);if(me||1<te&&typeof G=="string"&&!Y.checkClone&&Fe.test(G))return n.each(function(Ae){var ve=n.eq(Ae);me&&(i[0]=G.call(this,Ae,ve.html())),wt(ve,i,d,h)});if(te&&(x=(g=_(i,n[0].ownerDocument,!1,n,h)).firstChild,g.childNodes.length===1&&(g=x),x||h)){for(S=(y=t.map(mt(g,"script"),Vt)).length;U<te;U++)O=g,U!==z&&(O=t.clone(O,!0,!0),S&&t.merge(y,mt(O,"script"))),d.call(n[U],O,U);if(S)for(D=y[y.length-1].ownerDocument,t.map(y,tt),U=0;U<S;U++)O=y[U],hn.test(O.type||"")&&!ae.access(O,"globalEval")&&t.contains(D,O)&&(O.src&&(O.type||"").toLowerCase()!=="module"?t._evalUrl&&!O.noModule&&t._evalUrl(O.src,{nonce:O.nonce||O.getAttribute("nonce")},D):e(O.textContent.replace(ue,""),O,D))}return n}function yn(n,i,d){for(var h,g=i?t.filter(i,n):n,x=0;(h=g[x])!=null;x++)d||h.nodeType!==1||t.cleanData(mt(h)),h.parentNode&&(d&&vt(h)&&un(mt(h,"script")),h.parentNode.removeChild(h));return n}t.extend({htmlPrefilter:function(n){return n},clone:function(n,i,d){var h,g,x,y,S,O,D,U=n.cloneNode(!0),te=vt(n);if(!(Y.noCloneChecked||n.nodeType!==1&&n.nodeType!==11||t.isXMLDoc(n)))for(y=mt(U),h=0,g=(x=mt(n)).length;h<g;h++)S=x[h],O=y[h],(D=O.nodeName.toLowerCase())==="input"&&Yt.test(S.type)?O.checked=S.checked:D!=="input"&&D!=="textarea"||(O.defaultValue=S.defaultValue);if(i)if(d)for(x=x||mt(n),y=y||mt(U),h=0,g=x.length;h<g;h++)Et(x[h],y[h]);else Et(n,U);return 0<(y=mt(U,"script")).length&&un(y,!te&&mt(n,"script")),U},cleanData:function(n){for(var i,d,h,g=t.event.special,x=0;(d=n[x])!==void 0;x++)if(ke(d)){if(i=d[ae.expando]){if(i.events)for(h in i.events)g[h]?t.event.remove(d,h):t.removeEvent(d,h,i.handle);d[ae.expando]=void 0}d[oe.expando]&&(d[oe.expando]=void 0)}}}),t.fn.extend({detach:function(n){return yn(this,n,!0)},remove:function(n){return yn(this,n)},text:function(n){return K(this,function(i){return i===void 0?t.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=i)})},null,n,arguments.length)},append:function(){return wt(this,arguments,function(n){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||$e(this,n).appendChild(n)})},prepend:function(){return wt(this,arguments,function(n){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var i=$e(this,n);i.insertBefore(n,i.firstChild)}})},before:function(){return wt(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this)})},after:function(){return wt(this,arguments,function(n){this.parentNode&&this.parentNode.insertBefore(n,this.nextSibling)})},empty:function(){for(var n,i=0;(n=this[i])!=null;i++)n.nodeType===1&&(t.cleanData(mt(n,!1)),n.textContent="");return this},clone:function(n,i){return n=n!=null&&n,i=i??n,this.map(function(){return t.clone(this,n,i)})},html:function(n){return K(this,function(i){var d=this[0]||{},h=0,g=this.length;if(i===void 0&&d.nodeType===1)return d.innerHTML;if(typeof i=="string"&&!Ie.test(i)&&!jt[(cn.exec(i)||["",""])[1].toLowerCase()]){i=t.htmlPrefilter(i);try{for(;h<g;h++)(d=this[h]||{}).nodeType===1&&(t.cleanData(mt(d,!1)),d.innerHTML=i);d=0}catch{}}d&&this.empty().append(i)},null,n,arguments.length)},replaceWith:function(){var n=[];return wt(this,arguments,function(i){var d=this.parentNode;t.inArray(this,n)<0&&(t.cleanData(mt(this)),d&&d.replaceChild(i,this))},n)}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(n,i){t.fn[n]=function(d){for(var h,g=[],x=t(d),y=x.length-1,S=0;S<=y;S++)h=S===y?this:this.clone(!0),t(x[S])[i](h),de.apply(g,h.get());return this.pushStack(g)}});var fn=new RegExp("^("+ce+")(?!px)[a-z%]+$","i"),Kt=function(n){var i=n.ownerDocument.defaultView;return i&&i.opener||(i=W),i.getComputedStyle(n)},Qt=function(n,i,d){var h,g,x={};for(g in i)x[g]=n.style[g],n.style[g]=i[g];for(g in h=d.call(n),i)n.style[g]=x[g];return h},Cr=new RegExp(_t.join("|"),"i");function pn(n,i,d){var h,g,x,y,S=n.style;return(d=d||Kt(n))&&((y=d.getPropertyValue(i)||d[i])!==""||vt(n)||(y=t.style(n,i)),!Y.pixelBoxStyles()&&fn.test(y)&&Cr.test(i)&&(h=S.width,g=S.minWidth,x=S.maxWidth,S.minWidth=S.maxWidth=S.width=y,y=d.width,S.width=h,S.minWidth=g,S.maxWidth=x)),y!==void 0?y+"":y}function Wn(n,i){return{get:function(){if(!n())return(this.get=i).apply(this,arguments);delete this.get}}}(function(){function n(){if(D){O.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",D.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",yt.appendChild(O).appendChild(D);var U=W.getComputedStyle(D);d=U.top!=="1%",S=i(U.marginLeft)===12,D.style.right="60%",x=i(U.right)===36,h=i(U.width)===36,D.style.position="absolute",g=i(D.offsetWidth/3)===12,yt.removeChild(O),D=null}}function i(U){return Math.round(parseFloat(U))}var d,h,g,x,y,S,O=ge.createElement("div"),D=ge.createElement("div");D.style&&(D.style.backgroundClip="content-box",D.cloneNode(!0).style.backgroundClip="",Y.clearCloneStyle=D.style.backgroundClip==="content-box",t.extend(Y,{boxSizingReliable:function(){return n(),h},pixelBoxStyles:function(){return n(),x},pixelPosition:function(){return n(),d},reliableMarginLeft:function(){return n(),S},scrollboxSize:function(){return n(),g},reliableTrDimensions:function(){var U,te,z,G;return y==null&&(U=ge.createElement("table"),te=ge.createElement("tr"),z=ge.createElement("div"),U.style.cssText="position:absolute;left:-11111px",te.style.height="1px",z.style.height="9px",yt.appendChild(U).appendChild(te).appendChild(z),G=W.getComputedStyle(te),y=3<parseInt(G.height),yt.removeChild(U)),y}}))})();var Xn=["Webkit","Moz","ms"],Jn=ge.createElement("div").style,Yn={};function Nn(n){var i=t.cssProps[n]||Yn[n];return i||(n in Jn?n:Yn[n]=function(d){for(var h=d[0].toUpperCase()+d.slice(1),g=Xn.length;g--;)if((d=Xn[g]+h)in Jn)return d}(n)||n)}var Er=/^(none|table(?!-c[ea]).+)/,Qn=/^--/,Sr={position:"absolute",visibility:"hidden",display:"block"},Zn={letterSpacing:"0",fontWeight:"400"};function er(n,i,d){var h=pt.exec(i);return h?Math.max(0,h[2]-(d||0))+(h[3]||"px"):i}function Ln(n,i,d,h,g,x){var y=i==="width"?1:0,S=0,O=0;if(d===(h?"border":"content"))return 0;for(;y<4;y+=2)d==="margin"&&(O+=t.css(n,d+_t[y],!0,g)),h?(d==="content"&&(O-=t.css(n,"padding"+_t[y],!0,g)),d!=="margin"&&(O-=t.css(n,"border"+_t[y]+"Width",!0,g))):(O+=t.css(n,"padding"+_t[y],!0,g),d!=="padding"?O+=t.css(n,"border"+_t[y]+"Width",!0,g):S+=t.css(n,"border"+_t[y]+"Width",!0,g));return!h&&0<=x&&(O+=Math.max(0,Math.ceil(n["offset"+i[0].toUpperCase()+i.slice(1)]-x-O-S-.5))||0),O}function tr(n,i,d){var h=Kt(n),g=(!Y.boxSizingReliable()||d)&&t.css(n,"boxSizing",!1,h)==="border-box",x=g,y=pn(n,i,h),S="offset"+i[0].toUpperCase()+i.slice(1);if(fn.test(y)){if(!d)return y;y="auto"}return(!Y.boxSizingReliable()&&g||!Y.reliableTrDimensions()&&p(n,"tr")||y==="auto"||!parseFloat(y)&&t.css(n,"display",!1,h)==="inline")&&n.getClientRects().length&&(g=t.css(n,"boxSizing",!1,h)==="border-box",(x=S in n)&&(y=n[S])),(y=parseFloat(y)||0)+Ln(n,i,d||(g?"border":"content"),x,h,y)+"px"}function Mt(n,i,d,h,g){return new Mt.prototype.init(n,i,d,h,g)}t.extend({cssHooks:{opacity:{get:function(n,i){if(i){var d=pn(n,"opacity");return d===""?"1":d}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(n,i,d,h){if(n&&n.nodeType!==3&&n.nodeType!==8&&n.style){var g,x,y,S=L(i),O=Qn.test(i),D=n.style;if(O||(i=Nn(S)),y=t.cssHooks[i]||t.cssHooks[S],d===void 0)return y&&"get"in y&&(g=y.get(n,!1,h))!==void 0?g:D[i];(x=typeof d)=="string"&&(g=pt.exec(d))&&g[1]&&(d=dn(n,i,g),x="number"),d!=null&&d==d&&(x!=="number"||O||(d+=g&&g[3]||(t.cssNumber[S]?"":"px")),Y.clearCloneStyle||d!==""||i.indexOf("background")!==0||(D[i]="inherit"),y&&"set"in y&&(d=y.set(n,d,h))===void 0||(O?D.setProperty(i,d):D[i]=d))}},css:function(n,i,d,h){var g,x,y,S=L(i);return Qn.test(i)||(i=Nn(S)),(y=t.cssHooks[i]||t.cssHooks[S])&&"get"in y&&(g=y.get(n,!0,d)),g===void 0&&(g=pn(n,i,h)),g==="normal"&&i in Zn&&(g=Zn[i]),d===""||d?(x=parseFloat(g),d===!0||isFinite(x)?x||0:g):g}}),t.each(["height","width"],function(n,i){t.cssHooks[i]={get:function(d,h,g){if(h)return!Er.test(t.css(d,"display"))||d.getClientRects().length&&d.getBoundingClientRect().width?tr(d,i,g):Qt(d,Sr,function(){return tr(d,i,g)})},set:function(d,h,g){var x,y=Kt(d),S=!Y.scrollboxSize()&&y.position==="absolute",O=(S||g)&&t.css(d,"boxSizing",!1,y)==="border-box",D=g?Ln(d,i,g,O,y):0;return O&&S&&(D-=Math.ceil(d["offset"+i[0].toUpperCase()+i.slice(1)]-parseFloat(y[i])-Ln(d,i,"border",!1,y)-.5)),D&&(x=pt.exec(h))&&(x[3]||"px")!=="px"&&(d.style[i]=h,h=t.css(d,i)),er(0,h,D)}}}),t.cssHooks.marginLeft=Wn(Y.reliableMarginLeft,function(n,i){if(i)return(parseFloat(pn(n,"marginLeft"))||n.getBoundingClientRect().left-Qt(n,{marginLeft:0},function(){return n.getBoundingClientRect().left}))+"px"}),t.each({margin:"",padding:"",border:"Width"},function(n,i){t.cssHooks[n+i]={expand:function(d){for(var h=0,g={},x=typeof d=="string"?d.split(" "):[d];h<4;h++)g[n+_t[h]+i]=x[h]||x[h-2]||x[0];return g}},n!=="margin"&&(t.cssHooks[n+i].set=er)}),t.fn.extend({css:function(n,i){return K(this,function(d,h,g){var x,y,S={},O=0;if(Array.isArray(h)){for(x=Kt(d),y=h.length;O<y;O++)S[h[O]]=t.css(d,h[O],!1,x);return S}return g!==void 0?t.style(d,h,g):t.css(d,h)},n,i,1<arguments.length)}}),((t.Tween=Mt).prototype={constructor:Mt,init:function(n,i,d,h,g,x){this.elem=n,this.prop=d,this.easing=g||t.easing._default,this.options=i,this.start=this.now=this.cur(),this.end=h,this.unit=x||(t.cssNumber[d]?"":"px")},cur:function(){var n=Mt.propHooks[this.prop];return n&&n.get?n.get(this):Mt.propHooks._default.get(this)},run:function(n){var i,d=Mt.propHooks[this.prop];return this.options.duration?this.pos=i=t.easing[this.easing](n,this.options.duration*n,0,1,this.options.duration):this.pos=i=n,this.now=(this.end-this.start)*i+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),d&&d.set?d.set(this):Mt.propHooks._default.set(this),this}}).init.prototype=Mt.prototype,(Mt.propHooks={_default:{get:function(n){var i;return n.elem.nodeType!==1||n.elem[n.prop]!=null&&n.elem.style[n.prop]==null?n.elem[n.prop]:(i=t.css(n.elem,n.prop,""))&&i!=="auto"?i:0},set:function(n){t.fx.step[n.prop]?t.fx.step[n.prop](n):n.elem.nodeType!==1||!t.cssHooks[n.prop]&&n.elem.style[Nn(n.prop)]==null?n.elem[n.prop]=n.now:t.style(n.elem,n.prop,n.now+n.unit)}}}).scrollTop=Mt.propHooks.scrollLeft={set:function(n){n.elem.nodeType&&n.elem.parentNode&&(n.elem[n.prop]=n.now)}},t.easing={linear:function(n){return n},swing:function(n){return .5-Math.cos(n*Math.PI)/2},_default:"swing"},t.fx=Mt.prototype.init,t.fx.step={};var rn,jn,on,nr,Tr=/^(?:toggle|show|hide)$/,Or=/queueHooks$/;function Pn(){jn&&(ge.hidden===!1&&W.requestAnimationFrame?W.requestAnimationFrame(Pn):W.setTimeout(Pn,t.fx.interval),t.fx.tick())}function rr(){return W.setTimeout(function(){rn=void 0}),rn=Date.now()}function wn(n,i){var d,h=0,g={height:n};for(i=i?1:0;h<4;h+=2-i)g["margin"+(d=_t[h])]=g["padding"+d]=n;return i&&(g.opacity=g.width=n),g}function ir(n,i,d){for(var h,g=(Ft.tweeners[i]||[]).concat(Ft.tweeners["*"]),x=0,y=g.length;x<y;x++)if(h=g[x].call(d,i,n))return h}function Ft(n,i,d){var h,g,x=0,y=Ft.prefilters.length,S=t.Deferred().always(function(){delete O.elem}),O=function(){if(g)return!1;for(var te=rn||rr(),z=Math.max(0,D.startTime+D.duration-te),G=1-(z/D.duration||0),me=0,Ae=D.tweens.length;me<Ae;me++)D.tweens[me].run(G);return S.notifyWith(n,[D,G,z]),G<1&&Ae?z:(Ae||S.notifyWith(n,[D,1,0]),S.resolveWith(n,[D]),!1)},D=S.promise({elem:n,props:t.extend({},i),opts:t.extend(!0,{specialEasing:{},easing:t.easing._default},d),originalProperties:i,originalOptions:d,startTime:rn||rr(),duration:d.duration,tweens:[],createTween:function(te,z){var G=t.Tween(n,D.opts,te,z,D.opts.specialEasing[te]||D.opts.easing);return D.tweens.push(G),G},stop:function(te){var z=0,G=te?D.tweens.length:0;if(g)return this;for(g=!0;z<G;z++)D.tweens[z].run(1);return te?(S.notifyWith(n,[D,1,0]),S.resolveWith(n,[D,te])):S.rejectWith(n,[D,te]),this}}),U=D.props;for(!function(te,z){var G,me,Ae,ve,it;for(G in te)if(Ae=z[me=L(G)],ve=te[G],Array.isArray(ve)&&(Ae=ve[1],ve=te[G]=ve[0]),G!==me&&(te[me]=ve,delete te[G]),(it=t.cssHooks[me])&&"expand"in it)for(G in ve=it.expand(ve),delete te[me],ve)G in te||(te[G]=ve[G],z[G]=Ae);else z[me]=Ae}(U,D.opts.specialEasing);x<y;x++)if(h=Ft.prefilters[x].call(D,n,U,D.opts))return ee(h.stop)&&(t._queueHooks(D.elem,D.opts.queue).stop=h.stop.bind(h)),h;return t.map(U,ir,D),ee(D.opts.start)&&D.opts.start.call(n,D),D.progress(D.opts.progress).done(D.opts.done,D.opts.complete).fail(D.opts.fail).always(D.opts.always),t.fx.timer(t.extend(O,{elem:n,anim:D,queue:D.opts.queue})),D}t.Animation=t.extend(Ft,{tweeners:{"*":[function(n,i){var d=this.createTween(n,i);return dn(d.elem,n,pt.exec(i),d),d}]},tweener:function(n,i){ee(n)?(i=n,n=["*"]):n=n.match(ye);for(var d,h=0,g=n.length;h<g;h++)d=n[h],Ft.tweeners[d]=Ft.tweeners[d]||[],Ft.tweeners[d].unshift(i)},prefilters:[function(n,i,d){var h,g,x,y,S,O,D,U,te="width"in i||"height"in i,z=this,G={},me=n.style,Ae=n.nodeType&&Rt(n),ve=ae.get(n,"fxshow");for(h in d.queue||((y=t._queueHooks(n,"fx")).unqueued==null&&(y.unqueued=0,S=y.empty.fire,y.empty.fire=function(){y.unqueued||S()}),y.unqueued++,z.always(function(){z.always(function(){y.unqueued--,t.queue(n,"fx").length||y.empty.fire()})})),i)if(g=i[h],Tr.test(g)){if(delete i[h],x=x||g==="toggle",g===(Ae?"hide":"show")){if(g!=="show"||!ve||ve[h]===void 0)continue;Ae=!0}G[h]=ve&&ve[h]||t.style(n,h)}if((O=!t.isEmptyObject(i))||!t.isEmptyObject(G))for(h in te&&n.nodeType===1&&(d.overflow=[me.overflow,me.overflowX,me.overflowY],(D=ve&&ve.display)==null&&(D=ae.get(n,"display")),(U=t.css(n,"display"))==="none"&&(D?U=D:(qt([n],!0),D=n.style.display||D,U=t.css(n,"display"),qt([n]))),(U==="inline"||U==="inline-block"&&D!=null)&&t.css(n,"float")==="none"&&(O||(z.done(function(){me.display=D}),D==null&&(U=me.display,D=U==="none"?"":U)),me.display="inline-block")),d.overflow&&(me.overflow="hidden",z.always(function(){me.overflow=d.overflow[0],me.overflowX=d.overflow[1],me.overflowY=d.overflow[2]})),O=!1,G)O||(ve?"hidden"in ve&&(Ae=ve.hidden):ve=ae.access(n,"fxshow",{display:D}),x&&(ve.hidden=!Ae),Ae&&qt([n],!0),z.done(function(){for(h in Ae||qt([n]),ae.remove(n,"fxshow"),G)t.style(n,h,G[h])})),O=ir(Ae?ve[h]:0,h,z),h in ve||(ve[h]=O.start,Ae&&(O.end=O.start,O.start=0))}],prefilter:function(n,i){i?Ft.prefilters.unshift(n):Ft.prefilters.push(n)}}),t.speed=function(n,i,d){var h=n&&typeof n=="object"?t.extend({},n):{complete:d||!d&&i||ee(n)&&n,duration:n,easing:d&&i||i&&!ee(i)&&i};return t.fx.off?h.duration=0:typeof h.duration!="number"&&(h.duration in t.fx.speeds?h.duration=t.fx.speeds[h.duration]:h.duration=t.fx.speeds._default),h.queue!=null&&h.queue!==!0||(h.queue="fx"),h.old=h.complete,h.complete=function(){ee(h.old)&&h.old.call(this),h.queue&&t.dequeue(this,h.queue)},h},t.fn.extend({fadeTo:function(n,i,d,h){return this.filter(Rt).css("opacity",0).show().end().animate({opacity:i},n,d,h)},animate:function(n,i,d,h){var g=t.isEmptyObject(n),x=t.speed(i,d,h),y=function(){var S=Ft(this,t.extend({},n),x);(g||ae.get(this,"finish"))&&S.stop(!0)};return y.finish=y,g||x.queue===!1?this.each(y):this.queue(x.queue,y)},stop:function(n,i,d){var h=function(g){var x=g.stop;delete g.stop,x(d)};return typeof n!="string"&&(d=i,i=n,n=void 0),i&&this.queue(n||"fx",[]),this.each(function(){var g=!0,x=n!=null&&n+"queueHooks",y=t.timers,S=ae.get(this);if(x)S[x]&&S[x].stop&&h(S[x]);else for(x in S)S[x]&&S[x].stop&&Or.test(x)&&h(S[x]);for(x=y.length;x--;)y[x].elem!==this||n!=null&&y[x].queue!==n||(y[x].anim.stop(d),g=!1,y.splice(x,1));!g&&d||t.dequeue(this,n)})},finish:function(n){return n!==!1&&(n=n||"fx"),this.each(function(){var i,d=ae.get(this),h=d[n+"queue"],g=d[n+"queueHooks"],x=t.timers,y=h?h.length:0;for(d.finish=!0,t.queue(this,n,[]),g&&g.stop&&g.stop.call(this,!0),i=x.length;i--;)x[i].elem===this&&x[i].queue===n&&(x[i].anim.stop(!0),x.splice(i,1));for(i=0;i<y;i++)h[i]&&h[i].finish&&h[i].finish.call(this);delete d.finish})}}),t.each(["toggle","show","hide"],function(n,i){var d=t.fn[i];t.fn[i]=function(h,g,x){return h==null||typeof h=="boolean"?d.apply(this,arguments):this.animate(wn(i,!0),h,g,x)}}),t.each({slideDown:wn("show"),slideUp:wn("hide"),slideToggle:wn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(n,i){t.fn[n]=function(d,h,g){return this.animate(i,d,h,g)}}),t.timers=[],t.fx.tick=function(){var n,i=0,d=t.timers;for(rn=Date.now();i<d.length;i++)(n=d[i])()||d[i]!==n||d.splice(i--,1);d.length||t.fx.stop(),rn=void 0},t.fx.timer=function(n){t.timers.push(n),t.fx.start()},t.fx.interval=13,t.fx.start=function(){jn||(jn=!0,Pn())},t.fx.stop=function(){jn=null},t.fx.speeds={slow:600,fast:200,_default:400},t.fn.delay=function(n,i){return n=t.fx&&t.fx.speeds[n]||n,i=i||"fx",this.queue(i,function(d,h){var g=W.setTimeout(d,n);h.stop=function(){W.clearTimeout(g)}})},on=ge.createElement("input"),nr=ge.createElement("select").appendChild(ge.createElement("option")),on.type="checkbox",Y.checkOn=on.value!=="",Y.optSelected=nr.selected,(on=ge.createElement("input")).value="t",on.type="radio",Y.radioValue=on.value==="t";var or,gn=t.expr.attrHandle;t.fn.extend({attr:function(n,i){return K(this,t.attr,n,i,1<arguments.length)},removeAttr:function(n){return this.each(function(){t.removeAttr(this,n)})}}),t.extend({attr:function(n,i,d){var h,g,x=n.nodeType;if(x!==3&&x!==8&&x!==2)return typeof n.getAttribute>"u"?t.prop(n,i,d):(x===1&&t.isXMLDoc(n)||(g=t.attrHooks[i.toLowerCase()]||(t.expr.match.bool.test(i)?or:void 0)),d!==void 0?d===null?void t.removeAttr(n,i):g&&"set"in g&&(h=g.set(n,d,i))!==void 0?h:(n.setAttribute(i,d+""),d):g&&"get"in g&&(h=g.get(n,i))!==null?h:(h=t.find.attr(n,i))==null?void 0:h)},attrHooks:{type:{set:function(n,i){if(!Y.radioValue&&i==="radio"&&p(n,"input")){var d=n.value;return n.setAttribute("type",i),d&&(n.value=d),i}}}},removeAttr:function(n,i){var d,h=0,g=i&&i.match(ye);if(g&&n.nodeType===1)for(;d=g[h++];)n.removeAttribute(d)}}),or={set:function(n,i,d){return i===!1?t.removeAttr(n,d):n.setAttribute(d,d),d}},t.each(t.expr.match.bool.source.match(/\w+/g),function(n,i){var d=gn[i]||t.find.attr;gn[i]=function(h,g,x){var y,S,O=g.toLowerCase();return x||(S=gn[O],gn[O]=y,y=d(h,g,x)!=null?O:null,gn[O]=S),y}});var Nr=/^(?:input|select|textarea|button)$/i,Lr=/^(?:a|area)$/i;function Zt(n){return(n.match(ye)||[]).join(" ")}function en(n){return n.getAttribute&&n.getAttribute("class")||""}function Bn(n){return Array.isArray(n)?n:typeof n=="string"&&n.match(ye)||[]}t.fn.extend({prop:function(n,i){return K(this,t.prop,n,i,1<arguments.length)},removeProp:function(n){return this.each(function(){delete this[t.propFix[n]||n]})}}),t.extend({prop:function(n,i,d){var h,g,x=n.nodeType;if(x!==3&&x!==8&&x!==2)return x===1&&t.isXMLDoc(n)||(i=t.propFix[i]||i,g=t.propHooks[i]),d!==void 0?g&&"set"in g&&(h=g.set(n,d,i))!==void 0?h:n[i]=d:g&&"get"in g&&(h=g.get(n,i))!==null?h:n[i]},propHooks:{tabIndex:{get:function(n){var i=t.find.attr(n,"tabindex");return i?parseInt(i,10):Nr.test(n.nodeName)||Lr.test(n.nodeName)&&n.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),Y.optSelected||(t.propHooks.selected={get:function(n){var i=n.parentNode;return i&&i.parentNode&&i.parentNode.selectedIndex,null},set:function(n){var i=n.parentNode;i&&(i.selectedIndex,i.parentNode&&i.parentNode.selectedIndex)}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this}),t.fn.extend({addClass:function(n){var i,d,h,g,x,y,S,O=0;if(ee(n))return this.each(function(D){t(this).addClass(n.call(this,D,en(this)))});if((i=Bn(n)).length){for(;d=this[O++];)if(g=en(d),h=d.nodeType===1&&" "+Zt(g)+" "){for(y=0;x=i[y++];)h.indexOf(" "+x+" ")<0&&(h+=x+" ");g!==(S=Zt(h))&&d.setAttribute("class",S)}}return this},removeClass:function(n){var i,d,h,g,x,y,S,O=0;if(ee(n))return this.each(function(D){t(this).removeClass(n.call(this,D,en(this)))});if(!arguments.length)return this.attr("class","");if((i=Bn(n)).length){for(;d=this[O++];)if(g=en(d),h=d.nodeType===1&&" "+Zt(g)+" "){for(y=0;x=i[y++];)for(;-1<h.indexOf(" "+x+" ");)h=h.replace(" "+x+" "," ");g!==(S=Zt(h))&&d.setAttribute("class",S)}}return this},toggleClass:function(n,i){var d=typeof n,h=d==="string"||Array.isArray(n);return typeof i=="boolean"&&h?i?this.addClass(n):this.removeClass(n):ee(n)?this.each(function(g){t(this).toggleClass(n.call(this,g,en(this),i),i)}):this.each(function(){var g,x,y,S;if(h)for(x=0,y=t(this),S=Bn(n);g=S[x++];)y.hasClass(g)?y.removeClass(g):y.addClass(g);else n!==void 0&&d!=="boolean"||((g=en(this))&&ae.set(this,"__className__",g),this.setAttribute&&this.setAttribute("class",g||n===!1?"":ae.get(this,"__className__")||""))})},hasClass:function(n){var i,d,h=0;for(i=" "+n+" ";d=this[h++];)if(d.nodeType===1&&-1<(" "+Zt(en(d))+" ").indexOf(i))return!0;return!1}});var Pr=/\r/g;t.fn.extend({val:function(n){var i,d,h,g=this[0];return arguments.length?(h=ee(n),this.each(function(x){var y;this.nodeType===1&&((y=h?n.call(this,x,t(this).val()):n)==null?y="":typeof y=="number"?y+="":Array.isArray(y)&&(y=t.map(y,function(S){return S==null?"":S+""})),(i=t.valHooks[this.type]||t.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&i.set(this,y,"value")!==void 0||(this.value=y))})):g?(i=t.valHooks[g.type]||t.valHooks[g.nodeName.toLowerCase()])&&"get"in i&&(d=i.get(g,"value"))!==void 0?d:typeof(d=g.value)=="string"?d.replace(Pr,""):d??"":void 0}}),t.extend({valHooks:{option:{get:function(n){var i=t.find.attr(n,"value");return i??Zt(t.text(n))}},select:{get:function(n){var i,d,h,g=n.options,x=n.selectedIndex,y=n.type==="select-one",S=y?null:[],O=y?x+1:g.length;for(h=x<0?O:y?x:0;h<O;h++)if(((d=g[h]).selected||h===x)&&!d.disabled&&(!d.parentNode.disabled||!p(d.parentNode,"optgroup"))){if(i=t(d).val(),y)return i;S.push(i)}return S},set:function(n,i){for(var d,h,g=n.options,x=t.makeArray(i),y=g.length;y--;)((h=g[y]).selected=-1<t.inArray(t.valHooks.option.get(h),x))&&(d=!0);return d||(n.selectedIndex=-1),x}}}}),t.each(["radio","checkbox"],function(){t.valHooks[this]={set:function(n,i){if(Array.isArray(i))return n.checked=-1<t.inArray(t(n).val(),i)}},Y.checkOn||(t.valHooks[this].get=function(n){return n.getAttribute("value")===null?"on":n.value})}),Y.focusin="onfocusin"in W;var sr=/^(?:focusinfocus|focusoutblur)$/,ar=function(n){n.stopPropagation()};t.extend(t.event,{trigger:function(n,i,d,h){var g,x,y,S,O,D,U,te,z=[d||ge],G=at.call(n,"type")?n.type:n,me=at.call(n,"namespace")?n.namespace.split("."):[];if(x=te=y=d=d||ge,d.nodeType!==3&&d.nodeType!==8&&!sr.test(G+t.event.triggered)&&(-1<G.indexOf(".")&&(G=(me=G.split(".")).shift(),me.sort()),O=G.indexOf(":")<0&&"on"+G,(n=n[t.expando]?n:new t.Event(G,typeof n=="object"&&n)).isTrigger=h?2:3,n.namespace=me.join("."),n.rnamespace=n.namespace?new RegExp("(^|\\.)"+me.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,n.result=void 0,n.target||(n.target=d),i=i==null?[n]:t.makeArray(i,[n]),U=t.event.special[G]||{},h||!U.trigger||U.trigger.apply(d,i)!==!1)){if(!h&&!U.noBubble&&!Re(d)){for(S=U.delegateType||G,sr.test(S+G)||(x=x.parentNode);x;x=x.parentNode)z.push(x),y=x;y===(d.ownerDocument||ge)&&z.push(y.defaultView||y.parentWindow||W)}for(g=0;(x=z[g++])&&!n.isPropagationStopped();)te=x,n.type=1<g?S:U.bindType||G,(D=(ae.get(x,"events")||Object.create(null))[n.type]&&ae.get(x,"handle"))&&D.apply(x,i),(D=O&&x[O])&&D.apply&&ke(x)&&(n.result=D.apply(x,i),n.result===!1&&n.preventDefault());return n.type=G,h||n.isDefaultPrevented()||U._default&&U._default.apply(z.pop(),i)!==!1||!ke(d)||O&&ee(d[G])&&!Re(d)&&((y=d[O])&&(d[O]=null),t.event.triggered=G,n.isPropagationStopped()&&te.addEventListener(G,ar),d[G](),n.isPropagationStopped()&&te.removeEventListener(G,ar),t.event.triggered=void 0,y&&(d[O]=y)),n.result}},simulate:function(n,i,d){var h=t.extend(new t.Event,d,{type:n,isSimulated:!0});t.event.trigger(h,null,i)}}),t.fn.extend({trigger:function(n,i){return this.each(function(){t.event.trigger(n,i,this)})},triggerHandler:function(n,i){var d=this[0];if(d)return t.event.trigger(n,i,d,!0)}}),Y.focusin||t.each({focus:"focusin",blur:"focusout"},function(n,i){var d=function(h){t.event.simulate(i,h.target,t.event.fix(h))};t.event.special[i]={setup:function(){var h=this.ownerDocument||this.document||this,g=ae.access(h,i);g||h.addEventListener(n,d,!0),ae.access(h,i,(g||0)+1)},teardown:function(){var h=this.ownerDocument||this.document||this,g=ae.access(h,i)-1;g?ae.access(h,i,g):(h.removeEventListener(n,d,!0),ae.remove(h,i))}}});var _n=W.location,lr={guid:Date.now()},Dn=/\?/;t.parseXML=function(n){var i;if(!n||typeof n!="string")return null;try{i=new W.DOMParser().parseFromString(n,"text/xml")}catch{i=void 0}return i&&!i.getElementsByTagName("parsererror").length||t.error("Invalid XML: "+n),i};var Br=/\[\]$/,dr=/\r?\n/g,Dr=/^(?:submit|button|image|reset|file)$/i,Rr=/^(?:input|select|textarea|keygen)/i;function Rn(n,i,d,h){var g;if(Array.isArray(i))t.each(i,function(x,y){d||Br.test(n)?h(n,y):Rn(n+"["+(typeof y=="object"&&y!=null?x:"")+"]",y,d,h)});else if(d||s(i)!=="object")h(n,i);else for(g in i)Rn(n+"["+g+"]",i[g],d,h)}t.param=function(n,i){var d,h=[],g=function(x,y){var S=ee(y)?y():y;h[h.length]=encodeURIComponent(x)+"="+encodeURIComponent(S??"")};if(n==null)return"";if(Array.isArray(n)||n.jquery&&!t.isPlainObject(n))t.each(n,function(){g(this.name,this.value)});else for(d in n)Rn(d,n[d],i,g);return h.join("&")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var n=t.prop(this,"elements");return n?t.makeArray(n):this}).filter(function(){var n=this.type;return this.name&&!t(this).is(":disabled")&&Rr.test(this.nodeName)&&!Dr.test(n)&&(this.checked||!Yt.test(n))}).map(function(n,i){var d=t(this).val();return d==null?null:Array.isArray(d)?t.map(d,function(h){return{name:i.name,value:h.replace(dr,`\r
`)}}):{name:i.name,value:d.replace(dr,`\r
`)}}).get()}});var Mr=/%20/g,Fr=/#.*$/,Hr=/([?&])_=[^&]*/,zr=/^(.*?):[ \t]*([^\r\n]*)$/gm,Ir=/^(?:GET|HEAD)$/,qr=/^\/\//,cr={},Mn={},hr="*/".concat("*"),Fn=ge.createElement("a");function ur(n){return function(i,d){typeof i!="string"&&(d=i,i="*");var h,g=0,x=i.toLowerCase().match(ye)||[];if(ee(d))for(;h=x[g++];)h[0]==="+"?(h=h.slice(1)||"*",(n[h]=n[h]||[]).unshift(d)):(n[h]=n[h]||[]).push(d)}}function fr(n,i,d,h){var g={},x=n===Mn;function y(S){var O;return g[S]=!0,t.each(n[S]||[],function(D,U){var te=U(i,d,h);return typeof te!="string"||x||g[te]?x?!(O=te):void 0:(i.dataTypes.unshift(te),y(te),!1)}),O}return y(i.dataTypes[0])||!g["*"]&&y("*")}function Hn(n,i){var d,h,g=t.ajaxSettings.flatOptions||{};for(d in i)i[d]!==void 0&&((g[d]?n:h||(h={}))[d]=i[d]);return h&&t.extend(!0,n,h),n}Fn.href=_n.href,t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_n.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_n.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":hr,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(n,i){return i?Hn(Hn(n,t.ajaxSettings),i):Hn(t.ajaxSettings,n)},ajaxPrefilter:ur(cr),ajaxTransport:ur(Mn),ajax:function(n,i){typeof n=="object"&&(i=n,n=void 0),i=i||{};var d,h,g,x,y,S,O,D,U,te,z=t.ajaxSetup({},i),G=z.context||z,me=z.context&&(G.nodeType||G.jquery)?t(G):t.event,Ae=t.Deferred(),ve=t.Callbacks("once memory"),it=z.statusCode||{},ht={},St={},Je="canceled",Le={readyState:0,getResponseHeader:function(Ue){var ot;if(O){if(!x)for(x={};ot=zr.exec(g);)x[ot[1].toLowerCase()+" "]=(x[ot[1].toLowerCase()+" "]||[]).concat(ot[2]);ot=x[Ue.toLowerCase()+" "]}return ot==null?null:ot.join(", ")},getAllResponseHeaders:function(){return O?g:null},setRequestHeader:function(Ue,ot){return O==null&&(Ue=St[Ue.toLowerCase()]=St[Ue.toLowerCase()]||Ue,ht[Ue]=ot),this},overrideMimeType:function(Ue){return O==null&&(z.mimeType=Ue),this},statusCode:function(Ue){var ot;if(Ue)if(O)Le.always(Ue[Le.status]);else for(ot in Ue)it[ot]=[it[ot],Ue[ot]];return this},abort:function(Ue){var ot=Ue||Je;return d&&d.abort(ot),kt(0,ot),this}};if(Ae.promise(Le),z.url=((n||z.url||_n.href)+"").replace(qr,_n.protocol+"//"),z.type=i.method||i.type||z.method||z.type,z.dataTypes=(z.dataType||"*").toLowerCase().match(ye)||[""],z.crossDomain==null){S=ge.createElement("a");try{S.href=z.url,S.href=S.href,z.crossDomain=Fn.protocol+"//"+Fn.host!=S.protocol+"//"+S.host}catch{z.crossDomain=!0}}if(z.data&&z.processData&&typeof z.data!="string"&&(z.data=t.param(z.data,z.traditional)),fr(cr,z,i,Le),O)return Le;for(U in(D=t.event&&z.global)&&t.active++==0&&t.event.trigger("ajaxStart"),z.type=z.type.toUpperCase(),z.hasContent=!Ir.test(z.type),h=z.url.replace(Fr,""),z.hasContent?z.data&&z.processData&&(z.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(z.data=z.data.replace(Mr,"+")):(te=z.url.slice(h.length),z.data&&(z.processData||typeof z.data=="string")&&(h+=(Dn.test(h)?"&":"?")+z.data,delete z.data),z.cache===!1&&(h=h.replace(Hr,"$1"),te=(Dn.test(h)?"&":"?")+"_="+lr.guid+++te),z.url=h+te),z.ifModified&&(t.lastModified[h]&&Le.setRequestHeader("If-Modified-Since",t.lastModified[h]),t.etag[h]&&Le.setRequestHeader("If-None-Match",t.etag[h])),(z.data&&z.hasContent&&z.contentType!==!1||i.contentType)&&Le.setRequestHeader("Content-Type",z.contentType),Le.setRequestHeader("Accept",z.dataTypes[0]&&z.accepts[z.dataTypes[0]]?z.accepts[z.dataTypes[0]]+(z.dataTypes[0]!=="*"?", "+hr+"; q=0.01":""):z.accepts["*"]),z.headers)Le.setRequestHeader(U,z.headers[U]);if(z.beforeSend&&(z.beforeSend.call(G,Le,z)===!1||O))return Le.abort();if(Je="abort",ve.add(z.complete),Le.done(z.success),Le.fail(z.error),d=fr(Mn,z,i,Le)){if(Le.readyState=1,D&&me.trigger("ajaxSend",[Le,z]),O)return Le;z.async&&0<z.timeout&&(y=W.setTimeout(function(){Le.abort("timeout")},z.timeout));try{O=!1,d.send(ht,kt)}catch(Ue){if(O)throw Ue;kt(-1,Ue)}}else kt(-1,"No Transport");function kt(Ue,ot,vn,bn){var Tt,tn,sn,At,an,Bt=ot;O||(O=!0,y&&W.clearTimeout(y),d=void 0,g=bn||"",Le.readyState=0<Ue?4:0,Tt=200<=Ue&&Ue<300||Ue===304,vn&&(At=function(st,Ot,Nt){for(var $t,Be,Ge,ut,Lt=st.contents,dt=st.dataTypes;dt[0]==="*";)dt.shift(),$t===void 0&&($t=st.mimeType||Ot.getResponseHeader("Content-Type"));if($t){for(Be in Lt)if(Lt[Be]&&Lt[Be].test($t)){dt.unshift(Be);break}}if(dt[0]in Nt)Ge=dt[0];else{for(Be in Nt){if(!dt[0]||st.converters[Be+" "+dt[0]]){Ge=Be;break}ut||(ut=Be)}Ge=Ge||ut}if(Ge)return Ge!==dt[0]&&dt.unshift(Ge),Nt[Ge]}(z,Le,vn)),!Tt&&-1<t.inArray("script",z.dataTypes)&&(z.converters["text script"]=function(){}),At=function(st,Ot,Nt,$t){var Be,Ge,ut,Lt,dt,Pt={},ln=st.dataTypes.slice();if(ln[1])for(ut in st.converters)Pt[ut.toLowerCase()]=st.converters[ut];for(Ge=ln.shift();Ge;)if(st.responseFields[Ge]&&(Nt[st.responseFields[Ge]]=Ot),!dt&&$t&&st.dataFilter&&(Ot=st.dataFilter(Ot,st.dataType)),dt=Ge,Ge=ln.shift()){if(Ge==="*")Ge=dt;else if(dt!=="*"&&dt!==Ge){if(!(ut=Pt[dt+" "+Ge]||Pt["* "+Ge])){for(Be in Pt)if((Lt=Be.split(" "))[1]===Ge&&(ut=Pt[dt+" "+Lt[0]]||Pt["* "+Lt[0]])){ut===!0?ut=Pt[Be]:Pt[Be]!==!0&&(Ge=Lt[0],ln.unshift(Lt[1]));break}}if(ut!==!0)if(ut&&st.throws)Ot=ut(Ot);else try{Ot=ut(Ot)}catch(kn){return{state:"parsererror",error:ut?kn:"No conversion from "+dt+" to "+Ge}}}}return{state:"success",data:Ot}}(z,At,Le,Tt),Tt?(z.ifModified&&((an=Le.getResponseHeader("Last-Modified"))&&(t.lastModified[h]=an),(an=Le.getResponseHeader("etag"))&&(t.etag[h]=an)),Ue===204||z.type==="HEAD"?Bt="nocontent":Ue===304?Bt="notmodified":(Bt=At.state,tn=At.data,Tt=!(sn=At.error))):(sn=Bt,!Ue&&Bt||(Bt="error",Ue<0&&(Ue=0))),Le.status=Ue,Le.statusText=(ot||Bt)+"",Tt?Ae.resolveWith(G,[tn,Bt,Le]):Ae.rejectWith(G,[Le,Bt,sn]),Le.statusCode(it),it=void 0,D&&me.trigger(Tt?"ajaxSuccess":"ajaxError",[Le,z,Tt?tn:sn]),ve.fireWith(G,[Le,Bt]),D&&(me.trigger("ajaxComplete",[Le,z]),--t.active||t.event.trigger("ajaxStop")))}return Le},getJSON:function(n,i,d){return t.get(n,i,d,"json")},getScript:function(n,i){return t.get(n,void 0,i,"script")}}),t.each(["get","post"],function(n,i){t[i]=function(d,h,g,x){return ee(h)&&(x=x||g,g=h,h=void 0),t.ajax(t.extend({url:d,type:i,dataType:x,data:h,success:g},t.isPlainObject(d)&&d))}}),t.ajaxPrefilter(function(n){var i;for(i in n.headers)i.toLowerCase()==="content-type"&&(n.contentType=n.headers[i]||"")}),t._evalUrl=function(n,i,d){return t.ajax({url:n,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(h){t.globalEval(h,i,d)}})},t.fn.extend({wrapAll:function(n){var i;return this[0]&&(ee(n)&&(n=n.call(this[0])),i=t(n,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&i.insertBefore(this[0]),i.map(function(){for(var d=this;d.firstElementChild;)d=d.firstElementChild;return d}).append(this)),this},wrapInner:function(n){return ee(n)?this.each(function(i){t(this).wrapInner(n.call(this,i))}):this.each(function(){var i=t(this),d=i.contents();d.length?d.wrapAll(n):i.append(n)})},wrap:function(n){var i=ee(n);return this.each(function(d){t(this).wrapAll(i?n.call(this,d):n)})},unwrap:function(n){return this.parent(n).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t.expr.pseudos.hidden=function(n){return!t.expr.pseudos.visible(n)},t.expr.pseudos.visible=function(n){return!!(n.offsetWidth||n.offsetHeight||n.getClientRects().length)},t.ajaxSettings.xhr=function(){try{return new W.XMLHttpRequest}catch{}};var Ur={0:200,1223:204},mn=t.ajaxSettings.xhr();Y.cors=!!mn&&"withCredentials"in mn,Y.ajax=mn=!!mn,t.ajaxTransport(function(n){var i,d;if(Y.cors||mn&&!n.crossDomain)return{send:function(h,g){var x,y=n.xhr();if(y.open(n.type,n.url,n.async,n.username,n.password),n.xhrFields)for(x in n.xhrFields)y[x]=n.xhrFields[x];for(x in n.mimeType&&y.overrideMimeType&&y.overrideMimeType(n.mimeType),n.crossDomain||h["X-Requested-With"]||(h["X-Requested-With"]="XMLHttpRequest"),h)y.setRequestHeader(x,h[x]);i=function(S){return function(){i&&(i=d=y.onload=y.onerror=y.onabort=y.ontimeout=y.onreadystatechange=null,S==="abort"?y.abort():S==="error"?typeof y.status!="number"?g(0,"error"):g(y.status,y.statusText):g(Ur[y.status]||y.status,y.statusText,(y.responseType||"text")!=="text"||typeof y.responseText!="string"?{binary:y.response}:{text:y.responseText},y.getAllResponseHeaders()))}},y.onload=i(),d=y.onerror=y.ontimeout=i("error"),y.onabort!==void 0?y.onabort=d:y.onreadystatechange=function(){y.readyState===4&&W.setTimeout(function(){i&&d()})},i=i("abort");try{y.send(n.hasContent&&n.data||null)}catch(S){if(i)throw S}},abort:function(){i&&i()}}}),t.ajaxPrefilter(function(n){n.crossDomain&&(n.contents.script=!1)}),t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(n){return t.globalEval(n),n}}}),t.ajaxPrefilter("script",function(n){n.cache===void 0&&(n.cache=!1),n.crossDomain&&(n.type="GET")}),t.ajaxTransport("script",function(n){var i,d;if(n.crossDomain||n.scriptAttrs)return{send:function(h,g){i=t("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",d=function(x){i.remove(),d=null,x&&g(x.type==="error"?404:200,x.type)}),ge.head.appendChild(i[0])},abort:function(){d&&d()}}});var pr,gr=[],zn=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var n=gr.pop()||t.expando+"_"+lr.guid++;return this[n]=!0,n}}),t.ajaxPrefilter("json jsonp",function(n,i,d){var h,g,x,y=n.jsonp!==!1&&(zn.test(n.url)?"url":typeof n.data=="string"&&(n.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&zn.test(n.data)&&"data");if(y||n.dataTypes[0]==="jsonp")return h=n.jsonpCallback=ee(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback,y?n[y]=n[y].replace(zn,"$1"+h):n.jsonp!==!1&&(n.url+=(Dn.test(n.url)?"&":"?")+n.jsonp+"="+h),n.converters["script json"]=function(){return x||t.error(h+" was not called"),x[0]},n.dataTypes[0]="json",g=W[h],W[h]=function(){x=arguments},d.always(function(){g===void 0?t(W).removeProp(h):W[h]=g,n[h]&&(n.jsonpCallback=i.jsonpCallback,gr.push(h)),x&&ee(g)&&g(x[0]),x=g=void 0}),"script"}),Y.createHTMLDocument=((pr=ge.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",pr.childNodes.length===2),t.parseHTML=function(n,i,d){return typeof n!="string"?[]:(typeof i=="boolean"&&(d=i,i=!1),i||(Y.createHTMLDocument?((h=(i=ge.implementation.createHTMLDocument("")).createElement("base")).href=ge.location.href,i.head.appendChild(h)):i=ge),x=!d&&[],(g=v.exec(n))?[i.createElement(g[1])]:(g=_([n],i,x),x&&x.length&&t(x).remove(),t.merge([],g.childNodes)));var h,g,x},t.fn.load=function(n,i,d){var h,g,x,y=this,S=n.indexOf(" ");return-1<S&&(h=Zt(n.slice(S)),n=n.slice(0,S)),ee(i)?(d=i,i=void 0):i&&typeof i=="object"&&(g="POST"),0<y.length&&t.ajax({url:n,type:g||"GET",dataType:"html",data:i}).done(function(O){x=arguments,y.html(h?t("<div>").append(t.parseHTML(O)).find(h):O)}).always(d&&function(O,D){y.each(function(){d.apply(this,x||[O.responseText,D,O])})}),this},t.expr.pseudos.animated=function(n){return t.grep(t.timers,function(i){return n===i.elem}).length},t.offset={setOffset:function(n,i,d){var h,g,x,y,S,O,D=t.css(n,"position"),U=t(n),te={};D==="static"&&(n.style.position="relative"),S=U.offset(),x=t.css(n,"top"),O=t.css(n,"left"),(D==="absolute"||D==="fixed")&&-1<(x+O).indexOf("auto")?(y=(h=U.position()).top,g=h.left):(y=parseFloat(x)||0,g=parseFloat(O)||0),ee(i)&&(i=i.call(n,d,t.extend({},S))),i.top!=null&&(te.top=i.top-S.top+y),i.left!=null&&(te.left=i.left-S.left+g),"using"in i?i.using.call(n,te):(typeof te.top=="number"&&(te.top+="px"),typeof te.left=="number"&&(te.left+="px"),U.css(te))}},t.fn.extend({offset:function(n){if(arguments.length)return n===void 0?this:this.each(function(g){t.offset.setOffset(this,n,g)});var i,d,h=this[0];return h?h.getClientRects().length?(i=h.getBoundingClientRect(),d=h.ownerDocument.defaultView,{top:i.top+d.pageYOffset,left:i.left+d.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var n,i,d,h=this[0],g={top:0,left:0};if(t.css(h,"position")==="fixed")i=h.getBoundingClientRect();else{for(i=this.offset(),d=h.ownerDocument,n=h.offsetParent||d.documentElement;n&&(n===d.body||n===d.documentElement)&&t.css(n,"position")==="static";)n=n.parentNode;n&&n!==h&&n.nodeType===1&&((g=t(n).offset()).top+=t.css(n,"borderTopWidth",!0),g.left+=t.css(n,"borderLeftWidth",!0))}return{top:i.top-g.top-t.css(h,"marginTop",!0),left:i.left-g.left-t.css(h,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var n=this.offsetParent;n&&t.css(n,"position")==="static";)n=n.offsetParent;return n||yt})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(n,i){var d=i==="pageYOffset";t.fn[n]=function(h){return K(this,function(g,x,y){var S;if(Re(g)?S=g:g.nodeType===9&&(S=g.defaultView),y===void 0)return S?S[i]:g[x];S?S.scrollTo(d?S.pageXOffset:y,d?y:S.pageYOffset):g[x]=y},n,h,arguments.length)}}),t.each(["top","left"],function(n,i){t.cssHooks[i]=Wn(Y.pixelPosition,function(d,h){if(h)return h=pn(d,i),fn.test(h)?t(d).position()[i]+"px":h})}),t.each({Height:"height",Width:"width"},function(n,i){t.each({padding:"inner"+n,content:i,"":"outer"+n},function(d,h){t.fn[h]=function(g,x){var y=arguments.length&&(d||typeof g!="boolean"),S=d||(g===!0||x===!0?"margin":"border");return K(this,function(O,D,U){var te;return Re(O)?h.indexOf("outer")===0?O["inner"+n]:O.document.documentElement["client"+n]:O.nodeType===9?(te=O.documentElement,Math.max(O.body["scroll"+n],te["scroll"+n],O.body["offset"+n],te["offset"+n],te["client"+n])):U===void 0?t.css(O,D,S):t.style(O,D,U,S)},i,y?g:void 0,y)}})}),t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(n,i){t.fn[i]=function(d){return this.on(i,d)}}),t.fn.extend({bind:function(n,i,d){return this.on(n,null,i,d)},unbind:function(n,i){return this.off(n,null,i)},delegate:function(n,i,d,h){return this.on(i,n,d,h)},undelegate:function(n,i,d){return arguments.length===1?this.off(n,"**"):this.off(i,n||"**",d)},hover:function(n,i){return this.mouseenter(n).mouseleave(i||n)}}),t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(n,i){t.fn[i]=function(d,h){return 0<arguments.length?this.on(i,null,d,h):this.trigger(i)}});var Vr=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;t.proxy=function(n,i){var d,h,g;if(typeof i=="string"&&(d=n[i],i=n,n=d),ee(n))return h=J.call(arguments,2),(g=function(){return n.apply(i||this,h.concat(J.call(arguments)))}).guid=n.guid=n.guid||t.guid++,g},t.holdReady=function(n){n?t.readyWait++:t.ready(!0)},t.isArray=Array.isArray,t.parseJSON=JSON.parse,t.nodeName=p,t.isFunction=ee,t.isWindow=Re,t.camelCase=L,t.type=s,t.now=Date.now,t.isNumeric=function(n){var i=t.type(n);return(i==="number"||i==="string")&&!isNaN(n-parseFloat(n))},t.trim=function(n){return n==null?"":(n+"").replace(Vr,"")},E=[],V=(function(){return t}).apply(Ze,E),V!==void 0&&(He.exports=V);var Kr=W.jQuery,$r=W.$;return t.noConflict=function(n){return W.$===t&&(W.$=$r),n&&W.jQuery===t&&(W.jQuery=Kr),t},typeof a>"u"&&(W.jQuery=W.$=t),t})},function(He,Ze,Q){He.exports={Gui:Q(3),Inspector:Q(4),Demo:Q(14),Serializer:Q(2)}},function(He,Ze,Q){(function(E,V){V(Ze)})(this,function(E){function V(u,_){var b=u.__state.conversionName.toString(),N=Math.round(u.r),I=Math.round(u.g),q=Math.round(u.b),le=u.a,Ee=Math.round(u.h),Se=u.s.toFixed(1),je=u.v.toFixed(1);if(_||b==="THREE_CHAR_HEX"||b==="SIX_CHAR_HEX"){for(var Ie=u.hex.toString(16);Ie.length<6;)Ie="0"+Ie;return"#"+Ie}return b==="CSS_RGB"?"rgb("+N+","+I+","+q+")":b==="CSS_RGBA"?"rgba("+N+","+I+","+q+","+le+")":b==="HEX"?"0x"+u.hex.toString(16):b==="RGB_ARRAY"?"["+N+","+I+","+q+"]":b==="RGBA_ARRAY"?"["+N+","+I+","+q+","+le+"]":b==="RGB_OBJ"?"{r:"+N+",g:"+I+",b:"+q+"}":b==="RGBA_OBJ"?"{r:"+N+",g:"+I+",b:"+q+",a:"+le+"}":b==="HSV_OBJ"?"{h:"+Ee+",s:"+Se+",v:"+je+"}":b==="HSVA_OBJ"?"{h:"+Ee+",s:"+Se+",v:"+je+",a:"+le+"}":"unknown format"}function W(u,_,b){Object.defineProperty(u,_,{get:function(){return this.__state.space==="RGB"?this.__state[_]:(Ce.recalculateRGB(this,_,b),this.__state[_])},set:function(N){this.__state.space!=="RGB"&&(Ce.recalculateRGB(this,_,b),this.__state.space="RGB"),this.__state[_]=N}})}function a(u,_){Object.defineProperty(u,_,{get:function(){return this.__state.space==="HSV"?this.__state[_]:(Ce.recalculateHSV(this),this.__state[_])},set:function(b){this.__state.space!=="HSV"&&(Ce.recalculateHSV(this),this.__state.space="HSV"),this.__state[_]=b}})}function $(u){if(u==="0"||f.isUndefined(u))return 0;var _=u.match(K);return f.isNull(_)?0:parseFloat(_[1])}function we(u){var _=u.toString();return _.indexOf(".")>-1?_.length-_.indexOf(".")-1:0}function J(u,_){var b=Math.pow(10,_);return Math.round(u*b)/b}function ne(u,_,b,N,I){return N+(u-_)/(b-_)*(I-N)}function de(u,_,b,N){u.style.background="",f.each(We,function(I){u.style.cssText+="background: "+I+"linear-gradient("+_+", "+b+" 0%, "+N+" 100%); "})}function Me(u){u.style.background="",u.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",u.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",u.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",u.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",u.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}function Pe(u,_,b){var N=document.createElement("li");return _&&N.appendChild(_),b?u.__ul.insertBefore(N,b):u.__ul.appendChild(N),u.onResize(),N}function fe(u){A.unbind(window,"resize",u.__resizeHandler),u.saveToLocalStorageIfPossible&&A.unbind(window,"unload",u.saveToLocalStorageIfPossible)}function at(u,_){var b=u.__preset_select[u.__preset_select.selectedIndex];b.innerHTML=_?b.value+"*":b.value}function Ct(u,_,b){if(b.__li=_,b.__gui=u,f.extend(b,{options:function(q){if(arguments.length>1){var le=b.__li.nextElementSibling;return b.remove(),Y(u,b.object,b.property,{before:le,factoryArgs:[f.toArray(arguments)]})}if(f.isArray(q)||f.isObject(q)){var Ee=b.__li.nextElementSibling;return b.remove(),Y(u,b.object,b.property,{before:Ee,factoryArgs:[q]})}},name:function(q){return b.__li.firstElementChild.firstElementChild.innerHTML=q,b},listen:function(){return b.__gui.listen(b),b},remove:function(){return b.__gui.remove(b),b}}),b instanceof ae){var N=new xe(b.object,b.property,{min:b.__min,max:b.__max,step:b.__step});f.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(q){var le=b[q],Ee=N[q];b[q]=N[q]=function(){var Se=Array.prototype.slice.call(arguments);return Ee.apply(N,Se),le.apply(b,Se)}}),A.addClass(_,"has-slider"),b.domElement.insertBefore(N.domElement,b.domElement.firstElementChild)}else if(b instanceof xe){var I=function(q){if(f.isNumber(b.__min)&&f.isNumber(b.__max)){var le=b.__li.firstElementChild.firstElementChild.innerHTML,Ee=b.__gui.__listening.indexOf(b)>-1;b.remove();var Se=Y(u,b.object,b.property,{before:b.__li.nextElementSibling,factoryArgs:[b.__min,b.__max,b.__step]});return Se.name(le),Ee&&Se.listen(),Se}return q};b.min=f.compose(I,b.min),b.max=f.compose(I,b.max)}else b instanceof X?(A.bind(_,"click",function(){A.fakeEvent(b.__checkbox,"click")}),A.bind(b.__checkbox,"click",function(q){q.stopPropagation()})):b instanceof oe?(A.bind(_,"click",function(){A.fakeEvent(b.__button,"click")}),A.bind(_,"mouseover",function(){A.addClass(b.__button,"hover")}),A.bind(_,"mouseout",function(){A.removeClass(b.__button,"hover")})):b instanceof Ve&&(A.addClass(_,"color"),b.updateDisplay=f.compose(function(q){return _.style.borderLeftColor=b.__color.toString(),q},b.updateDisplay),b.updateDisplay());b.setValue=f.compose(function(q){return u.getRoot().__preset_select&&b.isModified()&&at(u.getRoot(),!0),q},b.setValue)}function nt(u,_){var b=u.getRoot(),N=b.__rememberedObjects.indexOf(_.object);if(N!==-1){var I=b.__rememberedObjectIndecesToControllers[N];if(I===void 0&&(I={},b.__rememberedObjectIndecesToControllers[N]=I),I[_.property]=_,b.load&&b.load.remembered){var q=b.load.remembered,le=void 0;if(q[u.preset])le=q[u.preset];else{if(!q[vt])return;le=q[vt]}if(le[N]&&le[N][_.property]!==void 0){var Ee=le[N][_.property];_.initialValue=Ee,_.setValue(Ee)}}}}function Y(u,_,b,N){if(_[b]===void 0)throw new Error('Object "'+_+'" has no property "'+b+'"');var I=void 0;if(N.color)I=new Ve(_,b);else{var q=[_,b].concat(N.factoryArgs);I=ce.apply(u,q)}N.before instanceof et&&(N.before=N.before.__li),nt(u,I),A.addClass(I.domElement,"c");var le=document.createElement("span");A.addClass(le,"property-name"),le.innerHTML=I.property;var Ee=document.createElement("div");Ee.appendChild(le),Ee.appendChild(I.domElement);var Se=Pe(u,Ee,N.before);return A.addClass(Se,Ke.CLASS_CONTROLLER_ROW),I instanceof Ve?A.addClass(Se,"color"):A.addClass(Se,M(I.getValue())),Ct(u,Se,I),u.__controllers.push(I),I}function ee(u,_){return document.location.href+"."+_}function Re(u,_,b){var N=document.createElement("option");N.innerHTML=_,N.value=_,u.__preset_select.appendChild(N),b&&(u.__preset_select.selectedIndex=u.__preset_select.length-1)}function ge(u,_){_.style.display=u.useLocalStorage?"block":"none"}function rt(u){var _=u.__save_row=document.createElement("li");A.addClass(u.domElement,"has-save"),u.__ul.insertBefore(_,u.__ul.firstChild),A.addClass(_,"save-row");var b=document.createElement("span");b.innerHTML="&nbsp;",A.addClass(b,"button gears");var N=document.createElement("span");N.innerHTML="Save",A.addClass(N,"button"),A.addClass(N,"save");var I=document.createElement("span");I.innerHTML="New",A.addClass(I,"button"),A.addClass(I,"save-as");var q=document.createElement("span");q.innerHTML="Revert",A.addClass(q,"button"),A.addClass(q,"revert");var le=u.__preset_select=document.createElement("select");if(u.load&&u.load.remembered?f.each(u.load.remembered,function(Ie,Fe){Re(u,Fe,Fe===u.preset)}):Re(u,vt,!1),A.bind(le,"change",function(){for(var Ie=0;Ie<u.__preset_select.length;Ie++)u.__preset_select[Ie].innerHTML=u.__preset_select[Ie].value;u.preset=this.value}),_.appendChild(le),_.appendChild(b),_.appendChild(N),_.appendChild(I),_.appendChild(q),Dt){var Ee=document.getElementById("dg-local-explain"),Se=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block",localStorage.getItem(ee(u,"isLocal"))==="true"&&Se.setAttribute("checked","checked"),ge(u,Ee),A.bind(Se,"change",function(){u.useLocalStorage=!u.useLocalStorage,ge(u,Ee)})}var je=document.getElementById("dg-new-constructor");A.bind(je,"keydown",function(Ie){!Ie.metaKey||Ie.which!==67&&Ie.keyCode!==67||Rt.hide()}),A.bind(b,"click",function(){je.innerHTML=JSON.stringify(u.getSaveObject(),void 0,2),Rt.show(),je.focus(),je.select()}),A.bind(N,"click",function(){u.save()}),A.bind(I,"click",function(){var Ie=prompt("Enter a new preset name.");Ie&&u.saveAs(Ie)}),A.bind(q,"click",function(){u.revert()})}function e(u){function _(q){return q.preventDefault(),u.width+=I-q.clientX,u.onResize(),I=q.clientX,!1}function b(){A.removeClass(u.__closeButton,Ke.CLASS_DRAG),A.unbind(window,"mousemove",_),A.unbind(window,"mouseup",b)}function N(q){return q.preventDefault(),I=q.clientX,A.addClass(u.__closeButton,Ke.CLASS_DRAG),A.bind(window,"mousemove",_),A.bind(window,"mouseup",b),!1}var I=void 0;u.__resize_handle=document.createElement("div"),f.extend(u.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),A.bind(u.__resize_handle,"mousedown",N),A.bind(u.__closeButton,"mousedown",N),u.domElement.insertBefore(u.__resize_handle,u.domElement.firstElementChild)}function s(u,_){u.domElement.style.width=_+"px",u.__save_row&&u.autoPlace&&(u.__save_row.style.width=_+"px"),u.__closeButton&&(u.__closeButton.style.width=_+"px")}function r(u,_){var b={};return f.each(u.__rememberedObjects,function(N,I){var q={},le=u.__rememberedObjectIndecesToControllers[I];f.each(le,function(Ee,Se){q[Se]=_?Ee.initialValue:Ee.getValue()}),b[I]=q}),b}function t(u){for(var _=0;_<u.__preset_select.length;_++)u.__preset_select[_].value===u.preset&&(u.__preset_select.selectedIndex=_)}function o(u){u.length!==0&&pt.call(window,function(){o(u)}),f.each(u,function(_){_.updateDisplay()})}var l=Array.prototype.forEach,c=Array.prototype.slice,f={BREAK:{},extend:function(u){return this.each(c.call(arguments,1),function(_){(this.isObject(_)?Object.keys(_):[]).forEach((function(b){this.isUndefined(_[b])||(u[b]=_[b])}).bind(this))},this),u},defaults:function(u){return this.each(c.call(arguments,1),function(_){(this.isObject(_)?Object.keys(_):[]).forEach((function(b){this.isUndefined(u[b])&&(u[b]=_[b])}).bind(this))},this),u},compose:function(){var u=c.call(arguments);return function(){for(var _=c.call(arguments),b=u.length-1;b>=0;b--)_=[u[b].apply(this,_)];return _[0]}},each:function(u,_,b){if(u){if(l&&u.forEach&&u.forEach===l)u.forEach(_,b);else if(u.length===u.length+0){var N=void 0,I=void 0;for(N=0,I=u.length;N<I;N++)if(N in u&&_.call(b,u[N],N)===this.BREAK)return}else for(var q in u)if(_.call(b,u[q],q)===this.BREAK)return}},defer:function(u){setTimeout(u,0)},debounce:function(u,_,b){var N=void 0;return function(){var I=this,q=arguments,le=b||!N;clearTimeout(N),N=setTimeout(function(){N=null,b||u.apply(I,q)},_),le&&u.apply(I,q)}},toArray:function(u){return u.toArray?u.toArray():c.call(u)},isUndefined:function(u){return u===void 0},isNull:function(u){return u===null},isNaN:function(u){function _(b){return u.apply(this,arguments)}return _.toString=function(){return u.toString()},_}(function(u){return isNaN(u)}),isArray:Array.isArray||function(u){return u.constructor===Array},isObject:function(u){return u===Object(u)},isNumber:function(u){return u===u+0},isString:function(u){return u===u+""},isBoolean:function(u){return u===!1||u===!0},isFunction:function(u){return u instanceof Function}},m=[{litmus:f.isString,conversions:{THREE_CHAR_HEX:{read:function(u){var _=u.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return _!==null&&{space:"HEX",hex:parseInt("0x"+_[1].toString()+_[1].toString()+_[2].toString()+_[2].toString()+_[3].toString()+_[3].toString(),0)}},write:V},SIX_CHAR_HEX:{read:function(u){var _=u.match(/^#([A-F0-9]{6})$/i);return _!==null&&{space:"HEX",hex:parseInt("0x"+_[1].toString(),0)}},write:V},CSS_RGB:{read:function(u){var _=u.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return _!==null&&{space:"RGB",r:parseFloat(_[1]),g:parseFloat(_[2]),b:parseFloat(_[3])}},write:V},CSS_RGBA:{read:function(u){var _=u.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return _!==null&&{space:"RGB",r:parseFloat(_[1]),g:parseFloat(_[2]),b:parseFloat(_[3]),a:parseFloat(_[4])}},write:V}}},{litmus:f.isNumber,conversions:{HEX:{read:function(u){return{space:"HEX",hex:u,conversionName:"HEX"}},write:function(u){return u.hex}}}},{litmus:f.isArray,conversions:{RGB_ARRAY:{read:function(u){return u.length===3&&{space:"RGB",r:u[0],g:u[1],b:u[2]}},write:function(u){return[u.r,u.g,u.b]}},RGBA_ARRAY:{read:function(u){return u.length===4&&{space:"RGB",r:u[0],g:u[1],b:u[2],a:u[3]}},write:function(u){return[u.r,u.g,u.b,u.a]}}}},{litmus:f.isObject,conversions:{RGBA_OBJ:{read:function(u){return!!(f.isNumber(u.r)&&f.isNumber(u.g)&&f.isNumber(u.b)&&f.isNumber(u.a))&&{space:"RGB",r:u.r,g:u.g,b:u.b,a:u.a}},write:function(u){return{r:u.r,g:u.g,b:u.b,a:u.a}}},RGB_OBJ:{read:function(u){return!!(f.isNumber(u.r)&&f.isNumber(u.g)&&f.isNumber(u.b))&&{space:"RGB",r:u.r,g:u.g,b:u.b}},write:function(u){return{r:u.r,g:u.g,b:u.b}}},HSVA_OBJ:{read:function(u){return!!(f.isNumber(u.h)&&f.isNumber(u.s)&&f.isNumber(u.v)&&f.isNumber(u.a))&&{space:"HSV",h:u.h,s:u.s,v:u.v,a:u.a}},write:function(u){return{h:u.h,s:u.s,v:u.v,a:u.a}}},HSV_OBJ:{read:function(u){return!!(f.isNumber(u.h)&&f.isNumber(u.s)&&f.isNumber(u.v))&&{space:"HSV",h:u.h,s:u.s,v:u.v}},write:function(u){return{h:u.h,s:u.s,v:u.v}}}}}],p=void 0,v=void 0,k=function(){v=!1;var u=arguments.length>1?f.toArray(arguments):arguments[0];return f.each(m,function(_){if(_.litmus(u))return f.each(_.conversions,function(b,N){if(p=b.read(u),v===!1&&p!==!1)return v=p,p.conversionName=N,p.conversion=b,f.BREAK}),f.BREAK}),v},T=void 0,P={hsv_to_rgb:function(u,_,b){var N=Math.floor(u/60)%6,I=u/60-Math.floor(u/60),q=b*(1-_),le=b*(1-I*_),Ee=b*(1-(1-I)*_),Se=[[b,Ee,q],[le,b,q],[q,b,Ee],[q,le,b],[Ee,q,b],[b,q,le]][N];return{r:255*Se[0],g:255*Se[1],b:255*Se[2]}},rgb_to_hsv:function(u,_,b){var N=Math.min(u,_,b),I=Math.max(u,_,b),q=I-N,le=void 0,Ee=void 0;return I===0?{h:NaN,s:0,v:0}:(Ee=q/I,le=u===I?(_-b)/q:_===I?2+(b-u)/q:4+(u-_)/q,(le/=6)<0&&(le+=1),{h:360*le,s:Ee,v:I/255})},rgb_to_hex:function(u,_,b){var N=this.hex_with_component(0,2,u);return N=this.hex_with_component(N,1,_),N=this.hex_with_component(N,0,b)},component_from_hex:function(u,_){return u>>8*_&255},hex_with_component:function(u,_,b){return b<<(T=8*_)|u&~(255<<T)}},M=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},H=function(u,_){if(!(u instanceof _))throw new TypeError("Cannot call a class as a function")},F=function(){function u(_,b){for(var N=0;N<b.length;N++){var I=b[N];I.enumerable=I.enumerable||!1,I.configurable=!0,"value"in I&&(I.writable=!0),Object.defineProperty(_,I.key,I)}}return function(_,b,N){return b&&u(_.prototype,b),N&&u(_,N),_}}(),ye=function u(_,b,N){_===null&&(_=Function.prototype);var I=Object.getOwnPropertyDescriptor(_,b);if(I===void 0){var q=Object.getPrototypeOf(_);return q===null?void 0:u(q,b,N)}if("value"in I)return I.value;var le=I.get;if(le!==void 0)return le.call(N)},be=function(u,_){if(typeof _!="function"&&_!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof _);u.prototype=Object.create(_&&_.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),_&&(Object.setPrototypeOf?Object.setPrototypeOf(u,_):u.__proto__=_)},_e=function(u,_){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!_||typeof _!="object"&&typeof _!="function"?u:_},Ce=function(){function u(){if(H(this,u),this.__state=k.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return F(u,[{key:"toString",value:function(){return V(this)}},{key:"toHexString",value:function(){return V(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),u}();Ce.recalculateRGB=function(u,_,b){if(u.__state.space==="HEX")u.__state[_]=P.component_from_hex(u.__state.hex,b);else{if(u.__state.space!=="HSV")throw new Error("Corrupted color state");f.extend(u.__state,P.hsv_to_rgb(u.__state.h,u.__state.s,u.__state.v))}},Ce.recalculateHSV=function(u){var _=P.rgb_to_hsv(u.r,u.g,u.b);f.extend(u.__state,{s:_.s,v:_.v}),f.isNaN(_.h)?f.isUndefined(u.__state.h)&&(u.__state.h=0):u.__state.h=_.h},Ce.COMPONENTS=["r","g","b","h","s","v","hex","a"],W(Ce.prototype,"r",2),W(Ce.prototype,"g",1),W(Ce.prototype,"b",0),a(Ce.prototype,"h"),a(Ce.prototype,"s"),a(Ce.prototype,"v"),Object.defineProperty(Ce.prototype,"a",{get:function(){return this.__state.a},set:function(u){this.__state.a=u}}),Object.defineProperty(Ce.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=P.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(u){this.__state.space="HEX",this.__state.hex=u}});var et=function(){function u(_,b){H(this,u),this.initialValue=_[b],this.domElement=document.createElement("div"),this.object=_,this.property=b,this.__onChange=void 0,this.__onFinishChange=void 0}return F(u,[{key:"onChange",value:function(_){return this.__onChange=_,this}},{key:"onFinishChange",value:function(_){return this.__onFinishChange=_,this}},{key:"setValue",value:function(_){return this.object[this.property]=_,this.__onChange&&this.__onChange.call(this,_),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),u}(),Xe={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},w={};f.each(Xe,function(u,_){f.each(u,function(b){w[b]=_})});var K=/(\d+(\.\d+)?)px/,A={makeSelectable:function(u,_){u!==void 0&&u.style!==void 0&&(u.onselectstart=_?function(){return!1}:function(){},u.style.MozUserSelect=_?"auto":"none",u.style.KhtmlUserSelect=_?"auto":"none",u.unselectable=_?"on":"off")},makeFullscreen:function(u,_,b){var N=b,I=_;f.isUndefined(I)&&(I=!0),f.isUndefined(N)&&(N=!0),u.style.position="absolute",I&&(u.style.left=0,u.style.right=0),N&&(u.style.top=0,u.style.bottom=0)},fakeEvent:function(u,_,b,N){var I=b||{},q=w[_];if(!q)throw new Error("Event type "+_+" not supported.");var le=document.createEvent(q);switch(q){case"MouseEvents":var Ee=I.x||I.clientX||0,Se=I.y||I.clientY||0;le.initMouseEvent(_,I.bubbles||!1,I.cancelable||!0,window,I.clickCount||1,0,0,Ee,Se,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var je=le.initKeyboardEvent||le.initKeyEvent;f.defaults(I,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),je(_,I.bubbles||!1,I.cancelable,window,I.ctrlKey,I.altKey,I.shiftKey,I.metaKey,I.keyCode,I.charCode);break;default:le.initEvent(_,I.bubbles||!1,I.cancelable||!0)}f.defaults(le,N),u.dispatchEvent(le)},bind:function(u,_,b,N){var I=N||!1;return u.addEventListener?u.addEventListener(_,b,I):u.attachEvent&&u.attachEvent("on"+_,b),A},unbind:function(u,_,b,N){var I=N||!1;return u.removeEventListener?u.removeEventListener(_,b,I):u.detachEvent&&u.detachEvent("on"+_,b),A},addClass:function(u,_){if(u.className===void 0)u.className=_;else if(u.className!==_){var b=u.className.split(/ +/);b.indexOf(_)===-1&&(b.push(_),u.className=b.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return A},removeClass:function(u,_){if(_)if(u.className===_)u.removeAttribute("class");else{var b=u.className.split(/ +/),N=b.indexOf(_);N!==-1&&(b.splice(N,1),u.className=b.join(" "))}else u.className=void 0;return A},hasClass:function(u,_){return new RegExp("(?:^|\\s+)"+_+"(?:\\s+|$)").test(u.className)||!1},getWidth:function(u){var _=getComputedStyle(u);return $(_["border-left-width"])+$(_["border-right-width"])+$(_["padding-left"])+$(_["padding-right"])+$(_.width)},getHeight:function(u){var _=getComputedStyle(u);return $(_["border-top-width"])+$(_["border-bottom-width"])+$(_["padding-top"])+$(_["padding-bottom"])+$(_.height)},getOffset:function(u){var _=u,b={left:0,top:0};if(_.offsetParent)do b.left+=_.offsetLeft,b.top+=_.offsetTop,_=_.offsetParent;while(_);return b},isActive:function(u){return u===document.activeElement&&(u.type||u.href)}},X=function(u){function _(b,N){H(this,_);var I=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N)),q=I;return I.__prev=I.getValue(),I.__checkbox=document.createElement("input"),I.__checkbox.setAttribute("type","checkbox"),A.bind(I.__checkbox,"change",function(){q.setValue(!q.__prev)},!1),I.domElement.appendChild(I.__checkbox),I.updateDisplay(),I}return be(_,et),F(_,[{key:"setValue",value:function(b){var N=ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"setValue",this).call(this,b);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),N}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"updateDisplay",this).call(this)}}]),_}(),re=function(u){function _(b,N,I){H(this,_);var q=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N)),le=I,Ee=q;if(q.__select=document.createElement("select"),f.isArray(le)){var Se={};f.each(le,function(je){Se[je]=je}),le=Se}return f.each(le,function(je,Ie){var Fe=document.createElement("option");Fe.innerHTML=Ie,Fe.setAttribute("value",je),Ee.__select.appendChild(Fe)}),q.updateDisplay(),A.bind(q.__select,"change",function(){var je=this.options[this.selectedIndex].value;Ee.setValue(je)}),q.domElement.appendChild(q.__select),q}return be(_,et),F(_,[{key:"setValue",value:function(b){var N=ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"setValue",this).call(this,b);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),N}},{key:"updateDisplay",value:function(){return A.isActive(this.__select)?this:(this.__select.value=this.getValue(),ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"updateDisplay",this).call(this))}}]),_}(),L=function(u){function _(b,N){function I(){le.setValue(le.__input.value)}H(this,_);var q=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N)),le=q;return q.__input=document.createElement("input"),q.__input.setAttribute("type","text"),A.bind(q.__input,"keyup",I),A.bind(q.__input,"change",I),A.bind(q.__input,"blur",function(){le.__onFinishChange&&le.__onFinishChange.call(le,le.getValue())}),A.bind(q.__input,"keydown",function(Ee){Ee.keyCode===13&&this.blur()}),q.updateDisplay(),q.domElement.appendChild(q.__input),q}return be(_,et),F(_,[{key:"updateDisplay",value:function(){return A.isActive(this.__input)||(this.__input.value=this.getValue()),ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"updateDisplay",this).call(this)}}]),_}(),ke=function(u){function _(b,N,I){H(this,_);var q=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N)),le=I||{};return q.__min=le.min,q.__max=le.max,q.__step=le.step,f.isUndefined(q.__step)?q.initialValue===0?q.__impliedStep=1:q.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(q.initialValue))/Math.LN10))/10:q.__impliedStep=q.__step,q.__precision=we(q.__impliedStep),q}return be(_,et),F(_,[{key:"setValue",value:function(b){var N=b;return this.__min!==void 0&&N<this.__min?N=this.__min:this.__max!==void 0&&N>this.__max&&(N=this.__max),this.__step!==void 0&&N%this.__step!=0&&(N=Math.round(N/this.__step)*this.__step),ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"setValue",this).call(this,N)}},{key:"min",value:function(b){return this.__min=b,this}},{key:"max",value:function(b){return this.__max=b,this}},{key:"step",value:function(b){return this.__step=b,this.__impliedStep=b,this.__precision=we(b),this}}]),_}(),xe=function(u){function _(b,N,I){function q(){je.__onFinishChange&&je.__onFinishChange.call(je,je.getValue())}function le(Fe){var ue=Ie-Fe.clientY;je.setValue(je.getValue()+ue*je.__impliedStep),Ie=Fe.clientY}function Ee(){A.unbind(window,"mousemove",le),A.unbind(window,"mouseup",Ee),q()}H(this,_);var Se=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N,I));Se.__truncationSuspended=!1;var je=Se,Ie=void 0;return Se.__input=document.createElement("input"),Se.__input.setAttribute("type","text"),A.bind(Se.__input,"change",function(){var Fe=parseFloat(je.__input.value);f.isNaN(Fe)||je.setValue(Fe)}),A.bind(Se.__input,"blur",function(){q()}),A.bind(Se.__input,"mousedown",function(Fe){A.bind(window,"mousemove",le),A.bind(window,"mouseup",Ee),Ie=Fe.clientY}),A.bind(Se.__input,"keydown",function(Fe){Fe.keyCode===13&&(je.__truncationSuspended=!0,this.blur(),je.__truncationSuspended=!1,q())}),Se.updateDisplay(),Se.domElement.appendChild(Se.__input),Se}return be(_,ke),F(_,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():J(this.getValue(),this.__precision),ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"updateDisplay",this).call(this)}}]),_}(),ae=function(u){function _(b,N,I,q,le){function Ee($e){$e.preventDefault();var Vt=ue.__background.getBoundingClientRect();return ue.setValue(ne($e.clientX,Vt.left,Vt.right,ue.__min,ue.__max)),!1}function Se(){A.unbind(window,"mousemove",Ee),A.unbind(window,"mouseup",Se),ue.__onFinishChange&&ue.__onFinishChange.call(ue,ue.getValue())}function je($e){var Vt=$e.touches[0].clientX,tt=ue.__background.getBoundingClientRect();ue.setValue(ne(Vt,tt.left,tt.right,ue.__min,ue.__max))}function Ie(){A.unbind(window,"touchmove",je),A.unbind(window,"touchend",Ie),ue.__onFinishChange&&ue.__onFinishChange.call(ue,ue.getValue())}H(this,_);var Fe=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N,{min:I,max:q,step:le})),ue=Fe;return Fe.__background=document.createElement("div"),Fe.__foreground=document.createElement("div"),A.bind(Fe.__background,"mousedown",function($e){document.activeElement.blur(),A.bind(window,"mousemove",Ee),A.bind(window,"mouseup",Se),Ee($e)}),A.bind(Fe.__background,"touchstart",function($e){$e.touches.length===1&&(A.bind(window,"touchmove",je),A.bind(window,"touchend",Ie),je($e))}),A.addClass(Fe.__background,"slider"),A.addClass(Fe.__foreground,"slider-fg"),Fe.updateDisplay(),Fe.__background.appendChild(Fe.__foreground),Fe.domElement.appendChild(Fe.__background),Fe}return be(_,ke),F(_,[{key:"updateDisplay",value:function(){var b=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*b+"%",ye(_.prototype.__proto__||Object.getPrototypeOf(_.prototype),"updateDisplay",this).call(this)}}]),_}(),oe=function(u){function _(b,N,I){H(this,_);var q=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N)),le=q;return q.__button=document.createElement("div"),q.__button.innerHTML=I===void 0?"Fire":I,A.bind(q.__button,"click",function(Ee){return Ee.preventDefault(),le.fire(),!1}),A.addClass(q.__button,"button"),q.domElement.appendChild(q.__button),q}return be(_,et),F(_,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),_}(),Ve=function(u){function _(b,N){function I(tt){Ie(tt),A.bind(window,"mousemove",Ie),A.bind(window,"touchmove",Ie),A.bind(window,"mouseup",le),A.bind(window,"touchend",le)}function q(tt){Fe(tt),A.bind(window,"mousemove",Fe),A.bind(window,"touchmove",Fe),A.bind(window,"mouseup",Ee),A.bind(window,"touchend",Ee)}function le(){A.unbind(window,"mousemove",Ie),A.unbind(window,"touchmove",Ie),A.unbind(window,"mouseup",le),A.unbind(window,"touchend",le),je()}function Ee(){A.unbind(window,"mousemove",Fe),A.unbind(window,"touchmove",Fe),A.unbind(window,"mouseup",Ee),A.unbind(window,"touchend",Ee),je()}function Se(){var tt=k(this.value);tt!==!1?($e.__color.__state=tt,$e.setValue($e.__color.toOriginal())):this.value=$e.__color.toString()}function je(){$e.__onFinishChange&&$e.__onFinishChange.call($e,$e.__color.toOriginal())}function Ie(tt){tt.type.indexOf("touch")===-1&&tt.preventDefault();var Et=$e.__saturation_field.getBoundingClientRect(),wt=tt.touches&&tt.touches[0]||tt,yn=wt.clientX,fn=wt.clientY,Kt=(yn-Et.left)/(Et.right-Et.left),Qt=1-(fn-Et.top)/(Et.bottom-Et.top);return Qt>1?Qt=1:Qt<0&&(Qt=0),Kt>1?Kt=1:Kt<0&&(Kt=0),$e.__color.v=Qt,$e.__color.s=Kt,$e.setValue($e.__color.toOriginal()),!1}function Fe(tt){tt.type.indexOf("touch")===-1&&tt.preventDefault();var Et=$e.__hue_field.getBoundingClientRect(),wt=1-((tt.touches&&tt.touches[0]||tt).clientY-Et.top)/(Et.bottom-Et.top);return wt>1?wt=1:wt<0&&(wt=0),$e.__color.h=360*wt,$e.setValue($e.__color.toOriginal()),!1}H(this,_);var ue=_e(this,(_.__proto__||Object.getPrototypeOf(_)).call(this,b,N));ue.__color=new Ce(ue.getValue()),ue.__temp=new Ce(0);var $e=ue;ue.domElement=document.createElement("div"),A.makeSelectable(ue.domElement,!1),ue.__selector=document.createElement("div"),ue.__selector.className="selector",ue.__saturation_field=document.createElement("div"),ue.__saturation_field.className="saturation-field",ue.__field_knob=document.createElement("div"),ue.__field_knob.className="field-knob",ue.__field_knob_border="2px solid ",ue.__hue_knob=document.createElement("div"),ue.__hue_knob.className="hue-knob",ue.__hue_field=document.createElement("div"),ue.__hue_field.className="hue-field",ue.__input=document.createElement("input"),ue.__input.type="text",ue.__input_textShadow="0 1px 1px ",A.bind(ue.__input,"keydown",function(tt){tt.keyCode===13&&Se.call(this)}),A.bind(ue.__input,"blur",Se),A.bind(ue.__selector,"mousedown",function(){A.addClass(this,"drag").bind(window,"mouseup",function(){A.removeClass($e.__selector,"drag")})}),A.bind(ue.__selector,"touchstart",function(){A.addClass(this,"drag").bind(window,"touchend",function(){A.removeClass($e.__selector,"drag")})});var Vt=document.createElement("div");return f.extend(ue.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),f.extend(ue.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:ue.__field_knob_border+(ue.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),f.extend(ue.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),f.extend(ue.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),f.extend(Vt.style,{width:"100%",height:"100%",background:"none"}),de(Vt,"top","rgba(0,0,0,0)","#000"),f.extend(ue.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),Me(ue.__hue_field),f.extend(ue.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:ue.__input_textShadow+"rgba(0,0,0,0.7)"}),A.bind(ue.__saturation_field,"mousedown",I),A.bind(ue.__saturation_field,"touchstart",I),A.bind(ue.__field_knob,"mousedown",I),A.bind(ue.__field_knob,"touchstart",I),A.bind(ue.__hue_field,"mousedown",q),A.bind(ue.__hue_field,"touchstart",q),ue.__saturation_field.appendChild(Vt),ue.__selector.appendChild(ue.__field_knob),ue.__selector.appendChild(ue.__saturation_field),ue.__selector.appendChild(ue.__hue_field),ue.__hue_field.appendChild(ue.__hue_knob),ue.domElement.appendChild(ue.__input),ue.domElement.appendChild(ue.__selector),ue.updateDisplay(),ue}return be(_,et),F(_,[{key:"updateDisplay",value:function(){var b=k(this.getValue());if(b!==!1){var N=!1;f.each(Ce.COMPONENTS,function(le){if(!f.isUndefined(b[le])&&!f.isUndefined(this.__color.__state[le])&&b[le]!==this.__color.__state[le])return N=!0,{}},this),N&&f.extend(this.__color.__state,b)}f.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var I=this.__color.v<.5||this.__color.s>.5?255:0,q=255-I;f.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+I+","+I+","+I+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,de(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),f.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+I+","+I+","+I+")",textShadow:this.__input_textShadow+"rgba("+q+","+q+","+q+",.7)"})}}]),_}(),We=["-moz-","-o-","-webkit-","-ms-",""],qe={load:function(u,_){var b=_||document,N=b.createElement("link");N.type="text/css",N.rel="stylesheet",N.href=u,b.getElementsByTagName("head")[0].appendChild(N)},inject:function(u,_){var b=_||document,N=document.createElement("style");N.type="text/css",N.innerHTML=u;var I=b.getElementsByTagName("head")[0];try{I.appendChild(N)}catch{}}},ce=function(u,_){var b=u[_];return f.isArray(arguments[2])||f.isObject(arguments[2])?new re(u,_,arguments[2]):f.isNumber(b)?f.isNumber(arguments[2])&&f.isNumber(arguments[3])?f.isNumber(arguments[4])?new ae(u,_,arguments[2],arguments[3],arguments[4]):new ae(u,_,arguments[2],arguments[3]):f.isNumber(arguments[4])?new xe(u,_,{min:arguments[2],max:arguments[3],step:arguments[4]}):new xe(u,_,{min:arguments[2],max:arguments[3]}):f.isString(b)?new L(u,_):f.isFunction(b)?new oe(u,_,""):f.isBoolean(b)?new X(u,_):null},pt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(u){setTimeout(u,1e3/60)},_t=function(){function u(){H(this,u),this.backgroundElement=document.createElement("div"),f.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),A.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),f.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var _=this;A.bind(this.backgroundElement,"click",function(){_.hide()})}return F(u,[{key:"show",value:function(){var _=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),f.defer(function(){_.backgroundElement.style.opacity=1,_.domElement.style.opacity=1,_.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var _=this,b=function N(){_.domElement.style.display="none",_.backgroundElement.style.display="none",A.unbind(_.domElement,"webkitTransitionEnd",N),A.unbind(_.domElement,"transitionend",N),A.unbind(_.domElement,"oTransitionEnd",N)};A.bind(this.domElement,"webkitTransitionEnd",b),A.bind(this.domElement,"transitionend",b),A.bind(this.domElement,"oTransitionEnd",b),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-A.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-A.getHeight(this.domElement)/2+"px"}}]),u}(),yt=function(u){if(u&&typeof window<"u"){var _=document.createElement("style");return _.setAttribute("type","text/css"),_.innerHTML=u,document.head.appendChild(_),u}}(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);qe.inject(yt);var vt="Default",Dt=function(){try{return!!window.localStorage}catch{return!1}}(),Rt=void 0,dn=!0,Wt=void 0,qt=!1,Ut=[],Ke=function u(_){var b=this,N=_||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),A.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],N=f.defaults(N,{closeOnTop:!1,autoPlace:!0,width:u.DEFAULT_WIDTH}),N=f.defaults(N,{resizable:N.autoPlace,hideable:N.autoPlace}),f.isUndefined(N.load)?N.load={preset:vt}:N.preset&&(N.load.preset=N.preset),f.isUndefined(N.parent)&&N.hideable&&Ut.push(this),N.resizable=f.isUndefined(N.parent)&&N.resizable,N.autoPlace&&f.isUndefined(N.scrollable)&&(N.scrollable=!0);var I=Dt&&localStorage.getItem(ee(this,"isLocal"))==="true",q=void 0,le=void 0;if(Object.defineProperties(this,{parent:{get:function(){return N.parent}},scrollable:{get:function(){return N.scrollable}},autoPlace:{get:function(){return N.autoPlace}},closeOnTop:{get:function(){return N.closeOnTop}},preset:{get:function(){return b.parent?b.getRoot().preset:N.load.preset},set:function(je){b.parent?b.getRoot().preset=je:N.load.preset=je,t(this),b.revert()}},width:{get:function(){return N.width},set:function(je){N.width=je,s(b,je)}},name:{get:function(){return N.name},set:function(je){N.name=je,le&&(le.innerHTML=N.name)}},closed:{get:function(){return N.closed},set:function(je){N.closed=je,N.closed?A.addClass(b.__ul,u.CLASS_CLOSED):A.removeClass(b.__ul,u.CLASS_CLOSED),this.onResize(),b.__closeButton&&(b.__closeButton.innerHTML=je?u.TEXT_OPEN:u.TEXT_CLOSED)}},load:{get:function(){return N.load}},useLocalStorage:{get:function(){return I},set:function(je){Dt&&(I=je,je?A.bind(window,"unload",q):A.unbind(window,"unload",q),localStorage.setItem(ee(b,"isLocal"),je))}}}),f.isUndefined(N.parent)){if(this.closed=N.closed||!1,A.addClass(this.domElement,u.CLASS_MAIN),A.makeSelectable(this.domElement,!1),Dt&&I){b.useLocalStorage=!0;var Ee=localStorage.getItem(ee(this,"gui"));Ee&&(N.load=JSON.parse(Ee))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=u.TEXT_CLOSED,A.addClass(this.__closeButton,u.CLASS_CLOSE_BUTTON),N.closeOnTop?(A.addClass(this.__closeButton,u.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(A.addClass(this.__closeButton,u.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),A.bind(this.__closeButton,"click",function(){b.closed=!b.closed})}else{N.closed===void 0&&(N.closed=!0);var Se=document.createTextNode(N.name);A.addClass(Se,"controller-name"),le=Pe(b,Se),A.addClass(this.__ul,u.CLASS_CLOSED),A.addClass(le,"title"),A.bind(le,"click",function(je){return je.preventDefault(),b.closed=!b.closed,!1}),N.closed||(this.closed=!1)}N.autoPlace&&(f.isUndefined(N.parent)&&(dn&&(Wt=document.createElement("div"),A.addClass(Wt,"dg"),A.addClass(Wt,u.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Wt),dn=!1),Wt.appendChild(this.domElement),A.addClass(this.domElement,u.CLASS_AUTO_PLACE)),this.parent||s(b,N.width)),this.__resizeHandler=function(){b.onResizeDebounced()},A.bind(window,"resize",this.__resizeHandler),A.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),A.bind(this.__ul,"transitionend",this.__resizeHandler),A.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),N.resizable&&e(this),q=function(){Dt&&localStorage.getItem(ee(b,"isLocal"))==="true"&&localStorage.setItem(ee(b,"gui"),JSON.stringify(b.getSaveObject()))},this.saveToLocalStorageIfPossible=q,N.parent||function(){var je=b.getRoot();je.width+=1,f.defer(function(){je.width-=1})}()};Ke.toggleHide=function(){qt=!qt,f.each(Ut,function(u){u.domElement.style.display=qt?"none":""})},Ke.CLASS_AUTO_PLACE="a",Ke.CLASS_AUTO_PLACE_CONTAINER="ac",Ke.CLASS_MAIN="main",Ke.CLASS_CONTROLLER_ROW="cr",Ke.CLASS_TOO_TALL="taller-than-window",Ke.CLASS_CLOSED="closed",Ke.CLASS_CLOSE_BUTTON="close-button",Ke.CLASS_CLOSE_TOP="close-top",Ke.CLASS_CLOSE_BOTTOM="close-bottom",Ke.CLASS_DRAG="drag",Ke.DEFAULT_WIDTH=245,Ke.TEXT_CLOSED="Close Controls",Ke.TEXT_OPEN="Open Controls",Ke._keydownHandler=function(u){document.activeElement.type==="text"||u.which!==72&&u.keyCode!==72||Ke.toggleHide()},A.bind(window,"keydown",Ke._keydownHandler,!1),f.extend(Ke.prototype,{add:function(u,_){return Y(this,u,_,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(u,_){return Y(this,u,_,{color:!0})},remove:function(u){this.__ul.removeChild(u.__li),this.__controllers.splice(this.__controllers.indexOf(u),1);var _=this;f.defer(function(){_.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Wt.removeChild(this.domElement);var u=this;f.each(this.__folders,function(_){u.removeFolder(_)}),A.unbind(window,"keydown",Ke._keydownHandler,!1),fe(this)},addFolder:function(u){if(this.__folders[u]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+u+'"');var _={name:u,parent:this};_.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[u]&&(_.closed=this.load.folders[u].closed,_.load=this.load.folders[u]);var b=new Ke(_);this.__folders[u]=b;var N=Pe(this,b.domElement);return A.addClass(N,"folder"),b},removeFolder:function(u){this.__ul.removeChild(u.domElement.parentElement),delete this.__folders[u.name],this.load&&this.load.folders&&this.load.folders[u.name]&&delete this.load.folders[u.name],fe(u);var _=this;f.each(u.__folders,function(b){u.removeFolder(b)}),f.defer(function(){_.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var u=this.getRoot();if(u.scrollable){var _=A.getOffset(u.__ul).top,b=0;f.each(u.__ul.childNodes,function(N){u.autoPlace&&N===u.__save_row||(b+=A.getHeight(N))}),window.innerHeight-_-20<b?(A.addClass(u.domElement,Ke.CLASS_TOO_TALL),u.__ul.style.height=window.innerHeight-_-20+"px"):(A.removeClass(u.domElement,Ke.CLASS_TOO_TALL),u.__ul.style.height="auto")}u.__resize_handle&&f.defer(function(){u.__resize_handle.style.height=u.__ul.offsetHeight+"px"}),u.__closeButton&&(u.__closeButton.style.width=u.width+"px")},onResizeDebounced:f.debounce(function(){this.onResize()},50),remember:function(){if(f.isUndefined(Rt)&&((Rt=new _t).domElement.innerHTML=`<div id="dg-save" class="dg dialogue">

  Here's the new load parameter for your <code>GUI</code>'s constructor:

  <textarea id="dg-new-constructor"></textarea>

  <div id="dg-save-locally">

    <input id="dg-local-storage" type="checkbox"/> Automatically save
    values to <code>localStorage</code> on exit.

    <div id="dg-local-explain">The values saved to <code>localStorage</code> will
      override those passed to <code>dat.GUI</code>'s constructor. This makes it
      easier to work incrementally, but <code>localStorage</code> is fragile,
      and your friends may not see the same values you do.

    </div>

  </div>

</div>`),this.parent)throw new Error("You can only call remember on a top level GUI.");var u=this;f.each(Array.prototype.slice.call(arguments),function(_){u.__rememberedObjects.length===0&&rt(u),u.__rememberedObjects.indexOf(_)===-1&&u.__rememberedObjects.push(_)}),this.autoPlace&&s(this,this.width)},getRoot:function(){for(var u=this;u.parent;)u=u.parent;return u},getSaveObject:function(){var u=this.load;return u.closed=this.closed,this.__rememberedObjects.length>0&&(u.preset=this.preset,u.remembered||(u.remembered={}),u.remembered[this.preset]=r(this)),u.folders={},f.each(this.__folders,function(_,b){u.folders[b]=_.getSaveObject()}),u},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=r(this),at(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(u){this.load.remembered||(this.load.remembered={},this.load.remembered[vt]=r(this,!0)),this.load.remembered[u]=r(this),this.preset=u,Re(this,u,!0),this.saveToLocalStorageIfPossible()},revert:function(u){f.each(this.__controllers,function(_){this.getRoot().load.remembered?nt(u||this.getRoot(),_):_.setValue(_.initialValue),_.__onFinishChange&&_.__onFinishChange.call(_,_.getValue())},this),f.each(this.__folders,function(_){_.revert(_)}),u||at(this.getRoot(),!1)},listen:function(u){var _=this.__listening.length===0;this.__listening.push(u),_&&o(this.__listening)},updateDisplay:function(){f.each(this.__controllers,function(u){u.updateDisplay()}),f.each(this.__folders,function(u){u.updateDisplay()})}});var Yt={Color:Ce,math:P,interpret:k},cn={Controller:et,BooleanController:X,OptionController:re,StringController:L,NumberController:ke,NumberControllerBox:xe,NumberControllerSlider:ae,FunctionController:oe,ColorController:Ve},hn={dom:A},jt={GUI:Ke},mt=Ke,un={color:Yt,controllers:cn,dom:hn,gui:jt,GUI:mt};E.color=Yt,E.controllers=cn,E.dom=hn,E.gui=jt,E.GUI=mt,E.default=un,Object.defineProperty(E,"__esModule",{value:!0})})},function(He,Ze){/**
 * # ResurrectJS
 * @version 1.0.3
 * @license Public Domain
 *
 * ResurrectJS preserves object behavior (prototypes) and reference
 * circularity with a special JSON encoding. Unlike regular JSON,
 * Date, RegExp, DOM objects, and `undefined` are also properly
 * preserved.
 *
 * ## Examples
 *
 * function Foo() {}
 * Foo.prototype.greet = function() { return "hello"; };
 *
 * // Behavior is preserved:
 * var necromancer = new Resurrect();
 * var json = necromancer.stringify(new Foo());
 * var foo = necromancer.resurrect(json);
 * foo.greet();  // => "hello"
 *
 * // References to the same object are preserved:
 * json = necromancer.stringify([foo, foo]);
 * var array = necromancer.resurrect(json);
 * array[0] === array[1];  // => true
 * array[1].greet();  // => "hello"
 *
 * // Dates are restored properly
 * json = necromancer.stringify(new Date());
 * var date = necromancer.resurrect(json);
 * Object.prototype.toString.call(date);  // => "[object Date]"
 *
 * ## Options
 *
 * Options are provided to the constructor as an object with these
 * properties:
 *
 *   prefix ('#'): A prefix string used for temporary properties added
 *     to objects during serialization and deserialization. It is
 *     important that you don't use any properties beginning with this
 *     string. This option must be consistent between both
 *     serialization and deserialization.
 *
 *   cleanup (false): Perform full property cleanup after both
 *     serialization and deserialization using the `delete`
 *     operator. This may cause performance penalties (breaking hidden
 *     classes in V8) on objects that ResurrectJS touches, so enable
 *     with care.
 *
 *   revive (true): Restore behavior (__proto__) to objects that have
 *     been resurrected. If this is set to false during serialization,
 *     resurrection information will not be encoded. You still get
 *     circularity and Date support.
 *
 *   resolver (Resurrect.NamespaceResolver(window)): Converts between
 *     a name and a prototype. Create a custom resolver if your
 *     constructors are not stored in global variables. The resolver
 *     has two methods: getName(object) and getPrototype(string).
 *
 * For example,
 *
 * var necromancer = new Resurrect({
 *     prefix: '__#',
 *     cleanup: true
 * });
 *
 * ## Caveats
 *
 *   * With the default resolver, all constructors must be named and
 *   stored in the global variable under that name. This is required
 *   so that the prototypes can be looked up and reconnected at
 *   resurrection time.
 *
 *   * The wrapper objects Boolean, String, and Number will be
 *   unwrapped. This means extra properties added to these objects
 *   will not be preserved.
 *
 *   * Functions cannot ever be serialized. Resurrect will throw an
 *   error if a function is found when traversing a data structure.
 *
 * @see http://nullprogram.com/blog/2013/03/28/
 */function Q(E){this.table=null,this.prefix="#",this.cleanup=!1,this.revive=!0;for(var V in E)E.hasOwnProperty(V)&&(this[V]=E[V]);this.refcode=this.prefix+"id",this.origcode=this.prefix+"original",this.buildcode=this.prefix+".",this.valuecode=this.prefix+"v"}He.exports=Q,Q.GLOBAL=(0,eval)("this"),Q.escapeRegExp=function(E){return E.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},Q.prototype.Error=function(V){this.message=V||"",this.stack=new Error().stack},Q.prototype.Error.prototype=Object.create(Error.prototype),Q.prototype.Error.prototype.name="ResurrectError",Q.NamespaceResolver=function(E){this.scope=E},Q.NamespaceResolver.prototype.getPrototype=function(E){var V=this.scope[E];if(V)return V.prototype;throw new Q.prototype.Error("Unknown constructor: "+E)},Q.NamespaceResolver.prototype.getName=function(E){var V=E.constructor.name;if(V==null){var W=/^\s*function\s*([A-Za-z0-9_$]*)/;V=W.exec(E.constructor)[1]}if(V===""){var a="Can't serialize objects with anonymous constructors.";throw new Q.prototype.Error(a)}else return V==="Object"||V==="Array"?null:V},Q.prototype.resolver=new Q.NamespaceResolver(Q.GLOBAL),Q.Node=function(E){var V=document.createElement("div");return V.innerHTML=E,V.firstChild},Q.is=function(E){var V="[object "+E+"]";return function(W){return Object.prototype.toString.call(W)===V}},Q.isArray=Q.is("Array"),Q.isString=Q.is("String"),Q.isBoolean=Q.is("Boolean"),Q.isNumber=Q.is("Number"),Q.isFunction=Q.is("Function"),Q.isDate=Q.is("Date"),Q.isRegExp=Q.is("RegExp"),Q.isObject=Q.is("Object"),Q.isAtom=function(E){return!Q.isObject(E)&&!Q.isArray(E)},Q.isPrimitive=function(E){return E==null||Q.isNumber(E)||Q.isString(E)||Q.isBoolean(E)},Q.prototype.ref=function(E){var V={};return E===void 0?V[this.prefix]=-1:V[this.prefix]=E[this.refcode],V},Q.prototype.deref=function(E){return this.table[E[this.prefix]]},Q.prototype.tag=function(E){if(this.revive){var V=this.resolver.getName(E);if(V){var W=Object.getPrototypeOf(E);if(this.resolver.getPrototype(V)!==W)throw new this.Error("Constructor mismatch!");E[this.prefix]=V}}return E[this.refcode]=this.table.length,this.table.push(E),E[this.refcode]},Q.prototype.builder=function(E,V){var W={};return W[this.buildcode]=E,W[this.valuecode]=V,W},Q.prototype.build=function(E){var V=E[this.buildcode].split(/\./).reduce(function(we,J){return we[J]},Q.GLOBAL),W=[null].concat(E[this.valuecode]),a=V.bind.apply(V,W),$=new a;return Q.isPrimitive($)?$.valueOf():$},Q.prototype.decode=function(E){if(this.prefix in E)return this.deref(E);if(this.buildcode in E)return this.build(E);throw new this.Error("Unknown encoding.")},Q.prototype.isTagged=function(E){return this.refcode in E&&E[this.refcode]!=null},Q.prototype.visit=function(E,V,W){if(Q.isAtom(E))return V(E);if(this.isTagged(E))return this.ref(E);var a=null;if(Q.isArray(E)){a=[],E[this.refcode]=this.tag(a);for(var $=0;$<E.length;$++)a.push(this.visit(E[$],V,W))}else{a=Object.create(Object.getPrototypeOf(E)),E[this.refcode]=this.tag(a);for(var we in E){var J=E[we];if(E.hasOwnProperty(we)){if(W&&J!==void 0&&(J=W.call(E,we,E[we]),J===void 0))continue;a[we]=this.visit(J,V,W)}}}return a[this.origcode]=E,this.ref(a)},Q.prototype.handleAtom=function(E){var V=Q.GLOBAL.Node||function(){};if(Q.isFunction(E))throw new this.Error("Can't serialize functions.");if(E instanceof V){var W=new XMLSerializer;return this.builder("Resurrect.Node",[W.serializeToString(E)])}else{if(Q.isDate(E))return this.builder("Date",[E.toISOString()]);if(Q.isRegExp(E)){var a=E.toString().match(/\/(.+)\/([gimy]*)/).slice(1);return this.builder("RegExp",a)}else return E===void 0?this.ref(void 0):Q.isNumber(E)&&(isNaN(E)||!isFinite(E))?this.builder("Number",[E.toString()]):E}},Q.prototype.replacerWrapper=function(E){var V=new RegExp("^"+Q.escapeRegExp(this.prefix));return function(W,a){return V.test(W)?a:E(W,a)}},Q.prototype.stringify=function(E,V,W){if(Q.isFunction(V))V=this.replacerWrapper(V);else if(Q.isArray(V)){var a=V;V=function(J,ne){return a.indexOf(J)>=0?ne:void 0}}if(Q.isAtom(E))return JSON.stringify(this.handleAtom(E),V,W);this.table=[],this.visit(E,this.handleAtom.bind(this),V);for(var $=0;$<this.table.length;$++)this.cleanup?delete this.table[$][this.origcode][this.refcode]:this.table[$][this.origcode][this.refcode]=null,delete this.table[$][this.refcode],delete this.table[$][this.origcode];var we=this.table;return this.table=null,JSON.stringify(we,null,W)},Q.prototype.fixPrototype=function(E){if(this.prefix in E){var V=E[this.prefix],W=this.resolver.getPrototype(V);if("__proto__"in E)return E.__proto__=W,this.cleanup&&delete E[this.prefix],E;var a=Object.create(W);for(var $ in E)E.hasOwnProperty($)&&$!==this.prefix&&(a[$]=E[$]);return a}else return E},Q.prototype.resurrect=function(E){var V=null,W=JSON.parse(E);if(Q.isArray(W)){if(this.table=W,this.revive)for(var a=0;a<this.table.length;a++)this.table[a]=this.fixPrototype(this.table[a]);for(a=0;a<this.table.length;a++){var $=this.table[a];for(var we in $)$.hasOwnProperty(we)&&(Q.isAtom($[we])||($[we]=this.decode($[we])))}V=this.table[0]}else Q.isObject(W)?(this.table=[],V=this.decode(W)):V=W;return this.table=null,V}},function(He,Ze){He.exports=`/*
*	MatterTools.Gui
*/

body .dg .c,
body .dg .cr.function,
body .dg .c select,
body .dg .property-name,
body .dg .title {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

body .dg.main {
  z-index: 10;
  height: 100%;
  background: #14151f;
  position: fixed;
  top: 0;
  right: 0;
  padding: 48px 0 0 0;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}

body .dg.main,
body .dg.main * {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body .dg.main *:focus,
body .dg.main *:active {
  outline: 0;
}

body .dg.main *:-moz-focusring {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

body .dg.main *:focus-visible {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

body .dg.ac {
  position: static;
  top: inherit;
  left: inherit;
  bottom: inherit;
  right: inherit;
}

body .dg.main {
  transform: translate(230px, 0);
  transition: transform ease;
  transition-delay: 2000ms;
  transition-duration: 300ms;
}

body .dg.main:hover {
  transform: translate(0, 0);
  transition-delay: 0ms;
  transition-duration: 400ms;
}

@media only screen and (min-width: 1300px) {
  body .dg.main,
  body .dg.main:hover {
    transition-delay: 0ms;
    transform: translate(0, 0);
  }
}

body .dg.main .close-button {
  display: none;
}

body .dg.main > ul {
  height: 100%;
  background: #191921;
  overflow-y: auto;
  scrollbar-color: #0d0f1b #0d0f1b;
  scrollbar-width: thin;
}

body .dg.main > ul:hover {
  scrollbar-color: #44444e #0d0f1b;
  scrollbar-width: thin;
}

body .dg.main > ul::-webkit-scrollbar {
  background: #0d0f1b;
  width: 6px;
  height: 6px;
}

body .dg.main > ul::-webkit-scrollbar-track,
body .dg.main > ul::-webkit-scrollbar-corner {
  background: #0d0f1b;
}

body .dg.main > ul::-webkit-scrollbar-thumb {
  background: #0d0f1b;
  border-radius: 3px;
}

body .dg.main > ul:hover::-webkit-scrollbar-thumb {
  background: #44444e;
}

body .dg {
  color: #6d6d7d;
  text-shadow: none !important;
  font-size: 12px;
}

body .dg .closed .cr {
  display: none;
}

body .dg li:not(.folder) {
  height: 29px;
  background: #1c1c25;
  border-bottom: 0px;
  padding: 0 8px 0 12px;
}

body .dg li.save-row .button {
  text-shadow: none !important;
}

body .dg li.title {
  padding: 2px 0 0 24px;
  color: #6a6977;
  background: #0d0f1b
    url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==)
    no-repeat;
  background-position: 12px;
}

body .dg li.title:hover {
  color: #9494a2;
}

body .dg .cr.boolean:hover {
  background: #20212b;
}

body .dg .cr.function {
  background: #262731;
  color: #636371;
  border-top: 1px solid #30313c;
}

body .dg .cr.function:hover {
  background: #30313e;
}

body .dg .cr.function:active {
  background: #2d2e3a;
}

body .dg .cr.function:active .property-name {
  transform: translateY(1px);
}

body .dg .c,
body .dg .property-name {
  width: 50%;
}

body .dg .c select {
  margin-top: 2px;
  margin-left: -5px;
  padding: 3px 5px;
}

body .dg .c select,
body .dg .c input[type="text"],
body .dg .cr.number input[type="text"] {
  text-align: right;
  background: transparent;
  color: #686c7b;
  border: 0;
  border-radius: 2px;
  overflow: hidden;
  font-size: 11px;
}

body .dg .cr.number,
body .dg .cr.boolean,
body .dg .cr.function {
  border-left: 0;
}

body .dg .c select,
body .dg .c select:focus {
  width: 88px;
}

body .dg .c input[type="text"]:hover {
  background: #2b2c3a;
}

body .dg .c input[type="text"]:focus {
  background: #2b2c3a;
  color: #fff;
  outline: none;
}

body .dg .c input[type="checkbox"] {
  margin-top: 10px;
  border: none;
  border-radius: 50%;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  background: #35363e;
  display: block;
  width: 7px;
  height: 7px;
  float: right;
}

body .dg .c input[type="checkbox"]:checked {
  background: #747784;
}

body .dg .c .slider {
  background: #23232d;
  border-radius: 2px;
  box-shadow: none;
  padding: 0;
  overflow: hidden;
}

body .dg .c .slider:hover {
  background: #282b3a;
}

body .dg .c .slider-fg {
  background: #3f4354;
  border-radius: 0;
  margin-left: 0;
  padding-right: 0;
}

body .dg .c .slider-fg:after {
  display: none;
}

body .dg .c .slider:hover .slider-fg {
  background: #4d526b;
}

body .dg li.folder {
  border-left: 0;
}

body .dg.a {
  margin-right: 0;
}
`},function(He,Ze,Q){(function(E){var V,W={},a={16:!1,18:!1,17:!1,91:!1},$="all",we={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},J={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},ne=function(p){return J[p]||p.toUpperCase().charCodeAt(0)},de=[];for(V=1;V<20;V++)J["f"+V]=111+V;function Me(p,v){for(var k=p.length;k--;)if(p[k]===v)return k;return-1}function Pe(p,v){if(p.length!=v.length)return!1;for(var k=0;k<p.length;k++)if(p[k]!==v[k])return!1;return!0}var fe={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function at(p){for(V in a)a[V]=p[fe[V]]}function Ct(p){var v,k,T,P,M,H;if(v=p.keyCode,Me(de,v)==-1&&de.push(v),(v==93||v==224)&&(v=91),v in a){a[v]=!0;for(T in we)we[T]==v&&(ee[T]=!0);return}if(at(p),!!ee.filter.call(this,p)&&v in W){for(H=r(),P=0;P<W[v].length;P++)if(k=W[v][P],k.scope==H||k.scope=="all"){M=k.mods.length>0;for(T in a)(!a[T]&&Me(k.mods,+T)>-1||a[T]&&Me(k.mods,+T)==-1)&&(M=!1);(k.mods.length==0&&!a[16]&&!a[18]&&!a[17]&&!a[91]||M)&&k.method(p,k)===!1&&(p.preventDefault?p.preventDefault():p.returnValue=!1,p.stopPropagation&&p.stopPropagation(),p.cancelBubble&&(p.cancelBubble=!0))}}}function nt(p){var v=p.keyCode,k,T=Me(de,v);if(T>=0&&de.splice(T,1),(v==93||v==224)&&(v=91),v in a){a[v]=!1;for(k in we)we[k]==v&&(ee[k]=!1)}}function Y(){for(V in a)a[V]=!1;for(V in we)ee[V]=!1}function ee(p,v,k){var T,P;T=o(p),k===void 0&&(k=v,v="all");for(var M=0;M<T.length;M++)P=[],p=T[M].split("+"),p.length>1&&(P=l(p),p=[p[p.length-1]]),p=p[0],p=ne(p),p in W||(W[p]=[]),W[p].push({shortcut:T[M],scope:v,method:k,key:T[M],mods:P})}function Re(p,v){var k,T,P=[],M,H,F;for(k=o(p),H=0;H<k.length;H++){if(T=k[H].split("+"),T.length>1&&(P=l(T),p=T[T.length-1]),p=ne(p),v===void 0&&(v=r()),!W[p])return;for(M=0;M<W[p].length;M++)F=W[p][M],F.scope===v&&Pe(F.mods,P)&&(W[p][M]={})}}function ge(p){return typeof p=="string"&&(p=ne(p)),Me(de,p)!=-1}function rt(){return de.slice(0)}function e(p){var v=(p.target||p.srcElement).tagName;return!(v=="INPUT"||v=="SELECT"||v=="TEXTAREA")}for(V in we)ee[V]=!1;function s(p){$=p||"all"}function r(){return $||"all"}function t(p){var v,k,T;for(v in W)for(k=W[v],T=0;T<k.length;)k[T].scope===p?k.splice(T,1):T++}function o(p){var v;return p=p.replace(/\s/g,""),v=p.split(","),v[v.length-1]==""&&(v[v.length-2]+=","),v}function l(p){for(var v=p.slice(0,p.length-1),k=0;k<v.length;k++)v[k]=we[v[k]];return v}function c(p,v,k){p.addEventListener?p.addEventListener(v,k,!1):p.attachEvent&&p.attachEvent("on"+v,function(){k(window.event)})}c(document,"keydown",function(p){Ct(p)}),c(document,"keyup",nt),c(window,"focus",Y);var f=E.key;function m(){var p=E.key;return E.key=f,p}E.key=ee,E.key.setScope=s,E.key.getScope=r,E.key.deleteScope=t,E.key.filter=e,E.key.isPressed=ge,E.key.getPressedKeyCodes=rt,E.key.noConflict=m,E.key.unbind=Re,He.exports=ee})(this)},function(He,Ze,Q){var E,V,W;/*! jsTree - v3.3.11 - 2020-12-18 - (MIT) */(function(a){V=[Q(5)],E=a,W=typeof E=="function"?E.apply(Ze,V):E,W!==void 0&&(He.exports=W)})(function(a,$){if(!a.jstree){var we=0,J=!1,ne=!1,de=!1,Me=[],Pe=a("script:last").attr("src"),fe=window.document,at=window.setImmediate,Ct=window.Promise;!at&&Ct&&(at=function(e,s){Ct.resolve(s).then(e)}),a.jstree={version:"3.3.11",defaults:{plugins:[]},plugins:{},path:Pe&&Pe.indexOf("/")!==-1?Pe.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,root:"#"},a.jstree.create=function(e,s){var r=new a.jstree.core(++we),t=s;return s=a.extend(!0,{},a.jstree.defaults,s),t&&t.plugins&&(s.plugins=t.plugins),a.each(s.plugins,function(o,l){o!=="core"&&(r=r.plugin(l,s[l]))}),a(e).data("jstree",r),r.init(e,s),r},a.jstree.destroy=function(){a(".jstree:jstree").jstree("destroy"),a(fe).off(".jstree")},a.jstree.core=function(e){this._id=e,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1,ellipsis:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},a.jstree.reference=function(e){var s=null,r=null;if(!e||!e.id||e.tagName&&e.nodeType||(e=e.id),!r||!r.length)try{r=a(e)}catch{}if(!r||!r.length)try{r=a("#"+e.replace(a.jstree.idregex,"\\$&"))}catch{}return r&&r.length&&(r=r.closest(".jstree")).length&&(r=r.data("jstree"))?s=r:a(".jstree").each(function(){var t=a(this).data("jstree");return t&&t._model.data[e]?(s=t,!1):void 0}),s},a.fn.jstree=function(e){var s=typeof e=="string",r=Array.prototype.slice.call(arguments,1),t=null;return e!==!0||this.length?(this.each(function(){var o=a.jstree.reference(this),l=s&&o?o[e]:null;return t=s&&l?l.apply(o,r):null,o||s||e!==$&&!a.isPlainObject(e)||a.jstree.create(this,e),(o&&!s||e===!0)&&(t=o||!1),t!==null&&t!==$?!1:void 0}),t!==null&&t!==$?t:this):!1},a.expr.pseudos.jstree=a.expr.createPseudo(function(e){return function(s){return a(s).hasClass("jstree")&&a(s).data("jstree")!==$}}),a.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:a.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,ellipsis:!1,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1,dblclick_toggle:!0,loaded_state:!1,restore_focus:!0,compute_elements_positions:!1,keyboard:{"ctrl-space":function(e){e.type="click",a(e.currentTarget).trigger(e)},enter:function(e){e.type="click",a(e.currentTarget).trigger(e)},left:function(e){if(e.preventDefault(),this.is_open(e.currentTarget))this.close_node(e.currentTarget);else{var s=this.get_parent(e.currentTarget);s&&s.id!==a.jstree.root&&this.get_node(s,!0).children(".jstree-anchor").focus()}},up:function(e){e.preventDefault();var s=this.get_prev_dom(e.currentTarget);s&&s.length&&s.children(".jstree-anchor").focus()},right:function(e){if(e.preventDefault(),this.is_closed(e.currentTarget))this.open_node(e.currentTarget,function(r){this.get_node(r,!0).children(".jstree-anchor").focus()});else if(this.is_open(e.currentTarget)){var s=this.get_node(e.currentTarget,!0).children(".jstree-children")[0];s&&a(this._firstChild(s)).children(".jstree-anchor").focus()}},down:function(e){e.preventDefault();var s=this.get_next_dom(e.currentTarget);s&&s.length&&s.children(".jstree-anchor").focus()},"*":function(e){this.open_all()},home:function(e){e.preventDefault();var s=this._firstChild(this.get_container_ul()[0]);s&&a(s).children(".jstree-anchor").filter(":visible").focus()},end:function(e){e.preventDefault(),this.element.find(".jstree-anchor").filter(":visible").last().focus()},f2:function(e){e.preventDefault(),this.edit(e.currentTarget)}}},a.jstree.core.prototype={plugin:function(e,s){var r=a.jstree.plugins[e];return r?(this._data[e]={},r.prototype=this,new r(s,this)):this},init:function(e,s){this._model={data:{},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this._model.data[a.jstree.root]={id:a.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this.element=a(e).addClass("jstree jstree-"+this._id),this.settings=s,this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl=this.element.css("direction")==="rtl",this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.settings.core.multiple&&this.element.attr("aria-multiselectable",!0),this.element.attr("tabindex")||this.element.attr("tabindex","0"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return this.nodeType===3&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j"+this._id+"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading"),this._data.core.li_height=this.get_container_ul().children("li").first().outerHeight()||24,this._data.core.node=this._create_prototype_node(),this.trigger("loading"),this.load_node(a.jstree.root)},destroy:function(e){if(this.trigger("destroy"),this._wrk)try{window.URL.revokeObjectURL(this._wrk),this._wrk=null}catch{}e||this.element.empty(),this.teardown()},_create_prototype_node:function(){var e=fe.createElement("LI"),s,r;return e.setAttribute("role","none"),s=fe.createElement("I"),s.className="jstree-icon jstree-ocl",s.setAttribute("role","presentation"),e.appendChild(s),s=fe.createElement("A"),s.className="jstree-anchor",s.setAttribute("href","#"),s.setAttribute("tabindex","-1"),s.setAttribute("role","treeitem"),r=fe.createElement("I"),r.className="jstree-icon jstree-themeicon",r.setAttribute("role","presentation"),s.appendChild(r),e.appendChild(s),s=r=null,e},_kbevent_to_func:function(e){var s={8:"Backspace",9:"Tab",13:"Enter",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock",16:"Shift",17:"Ctrl",18:"Alt",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*",173:"-"},r=[];if(e.ctrlKey&&r.push("ctrl"),e.altKey&&r.push("alt"),e.shiftKey&&r.push("shift"),r.push(s[e.which]||e.which),r=r.sort().join("-").toLowerCase(),r==="shift-shift"||r==="ctrl-ctrl"||r==="alt-alt")return null;var t=this.settings.core.keyboard,o,l;for(o in t)if(t.hasOwnProperty(o)&&(l=o,l!=="-"&&l!=="+"&&(l=l.replace("--","-MINUS").replace("+-","-MINUS").replace("++","-PLUS").replace("-+","-PLUS"),l=l.split(/-|\+/).sort().join("-").replace("MINUS","-").replace("PLUS","+").toLowerCase()),l===r))return t[o];return null},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){var e="",s=null,r=0;this.element.on("dblclick.jstree",function(t){if(t.target.tagName&&t.target.tagName.toLowerCase()==="input")return!0;if(fe.selection&&fe.selection.empty)fe.selection.empty();else if(window.getSelection){var o=window.getSelection();try{o.removeAllRanges(),o.collapse()}catch{}}}).on("mousedown.jstree",a.proxy(function(t){t.target===this.element[0]&&(t.preventDefault(),r=+new Date)},this)).on("mousedown.jstree",".jstree-ocl",function(t){t.preventDefault()}).on("click.jstree",".jstree-ocl",a.proxy(function(t){this.toggle_node(t.target)},this)).on("dblclick.jstree",".jstree-anchor",a.proxy(function(t){return t.target.tagName&&t.target.tagName.toLowerCase()==="input"?!0:void(this.settings.core.dblclick_toggle&&this.toggle_node(t.target))},this)).on("click.jstree",".jstree-anchor",a.proxy(function(t){t.preventDefault(),t.currentTarget!==fe.activeElement&&a(t.currentTarget).focus(),this.activate_node(t.currentTarget,t)},this)).on("keydown.jstree",".jstree-anchor",a.proxy(function(t){if(t.target.tagName&&t.target.tagName.toLowerCase()==="input")return!0;this._data.core.rtl&&(t.which===37?t.which=39:t.which===39&&(t.which=37));var o=this._kbevent_to_func(t);if(o){var l=o.call(this,t);if(l===!1||l===!0)return l}},this)).on("load_node.jstree",a.proxy(function(t,o){o.status&&(o.node.id!==a.jstree.root||this._data.core.loaded||(this._data.core.loaded=!0,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.trigger("loaded")),this._data.core.ready||setTimeout(a.proxy(function(){if(this.element&&!this.get_container_ul().find(".jstree-loading").length){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var l=[],c,f;for(c=0,f=this._data.core.selected.length;f>c;c++)l=l.concat(this._model.data[this._data.core.selected[c]].parents);for(l=a.vakata.array_unique(l),c=0,f=l.length;f>c;c++)this.open_node(l[c],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}},this),0))},this)).on("keypress.jstree",a.proxy(function(t){if(t.target.tagName&&t.target.tagName.toLowerCase()==="input")return!0;s&&clearTimeout(s),s=setTimeout(function(){e=""},500);var o=String.fromCharCode(t.which).toLowerCase(),l=this.element.find(".jstree-anchor").filter(":visible"),c=l.index(fe.activeElement)||0,f=!1;e+=o,!(e.length>1&&(l.slice(c).each(a.proxy(function(m,p){return a(p).text().toLowerCase().indexOf(e)===0?(a(p).focus(),f=!0,!1):void 0},this)),f||(l.slice(0,c).each(a.proxy(function(m,p){return a(p).text().toLowerCase().indexOf(e)===0?(a(p).focus(),f=!0,!1):void 0},this)),f)))&&new RegExp("^"+o.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"+$").test(e)&&(l.slice(c+1).each(a.proxy(function(m,p){return a(p).text().toLowerCase().charAt(0)===o?(a(p).focus(),f=!0,!1):void 0},this)),f||l.slice(0,c+1).each(a.proxy(function(m,p){return a(p).text().toLowerCase().charAt(0)===o?(a(p).focus(),f=!0,!1):void 0},this)))},this)).on("init.jstree",a.proxy(function(){var t=this.settings.core.themes;this._data.core.themes.dots=t.dots,this._data.core.themes.stripes=t.stripes,this._data.core.themes.icons=t.icons,this._data.core.themes.ellipsis=t.ellipsis,this.set_theme(t.name||"default",t.url),this.set_theme_variant(t.variant)},this)).on("loading.jstree",a.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"](),this[this._data.core.themes.ellipsis?"show_ellipsis":"hide_ellipsis"]()},this)).on("blur.jstree",".jstree-anchor",a.proxy(function(t){this._data.core.focused=null,a(t.currentTarget).filter(".jstree-hovered").trigger("mouseleave"),this.element.attr("tabindex","0")},this)).on("focus.jstree",".jstree-anchor",a.proxy(function(t){var o=this.get_node(t.currentTarget);o&&o.id&&(this._data.core.focused=o.id),this.element.find(".jstree-hovered").not(t.currentTarget).trigger("mouseleave"),a(t.currentTarget).trigger("mouseenter"),this.element.attr("tabindex","-1")},this)).on("focus.jstree",a.proxy(function(){if(+new Date-r>500&&!this._data.core.focused&&this.settings.core.restore_focus){r=0;var t=this.get_node(this.element.attr("aria-activedescendant"),!0);t&&t.find("> .jstree-anchor").focus()}},this)).on("mouseenter.jstree",".jstree-anchor",a.proxy(function(t){this.hover_node(t.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",a.proxy(function(t){this.dehover_node(t.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),a(fe).off(".jstree-"+this._id)},trigger:function(e,s){s||(s={}),s.instance=this,this.element.triggerHandler(e.replace(".jstree","")+".jstree",s)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children").first()},get_string:function(e){var s=this.settings.core.strings;return a.isFunction(s)?s.call(this,e):s&&s[e]?s[e]:e},_firstChild:function(e){for(e=e?e.firstChild:null;e!==null&&e.nodeType!==1;)e=e.nextSibling;return e},_nextSibling:function(e){for(e=e?e.nextSibling:null;e!==null&&e.nodeType!==1;)e=e.nextSibling;return e},_previousSibling:function(e){for(e=e?e.previousSibling:null;e!==null&&e.nodeType!==1;)e=e.previousSibling;return e},get_node:function(e,s){e&&e.id&&(e=e.id),e instanceof a&&e.length&&e[0].id&&(e=e[0].id);var r;try{if(this._model.data[e])e=this._model.data[e];else if(typeof e=="string"&&this._model.data[e.replace(/^#/,"")])e=this._model.data[e.replace(/^#/,"")];else if(typeof e=="string"&&(r=a("#"+e.replace(a.jstree.idregex,"\\$&"),this.element)).length&&this._model.data[r.closest(".jstree-node").attr("id")])e=this._model.data[r.closest(".jstree-node").attr("id")];else if((r=this.element.find(e)).length&&this._model.data[r.closest(".jstree-node").attr("id")])e=this._model.data[r.closest(".jstree-node").attr("id")];else{if(!(r=this.element.find(e)).length||!r.hasClass("jstree"))return!1;e=this._model.data[a.jstree.root]}return s&&(e=e.id===a.jstree.root?this.element:a("#"+e.id.replace(a.jstree.idregex,"\\$&"),this.element)),e}catch{return!1}},get_path:function(e,s,r){if(e=e.parents?e:this.get_node(e),!e||e.id===a.jstree.root||!e.parents)return!1;var t,o,l=[];for(l.push(r?e.id:e.text),t=0,o=e.parents.length;o>t;t++)l.push(r?e.parents[t]:this.get_text(e.parents[t]));return l=l.reverse().slice(1),s?l.join(s):l},get_next_dom:function(e,s){var r;if(e=this.get_node(e,!0),e[0]===this.element[0]){for(r=this._firstChild(this.get_container_ul()[0]);r&&r.offsetHeight===0;)r=this._nextSibling(r);return r?a(r):!1}if(!e||!e.length)return!1;if(s){r=e[0];do r=this._nextSibling(r);while(r&&r.offsetHeight===0);return r?a(r):!1}if(e.hasClass("jstree-open")){for(r=this._firstChild(e.children(".jstree-children")[0]);r&&r.offsetHeight===0;)r=this._nextSibling(r);if(r!==null)return a(r)}r=e[0];do r=this._nextSibling(r);while(r&&r.offsetHeight===0);return r!==null?a(r):e.parentsUntil(".jstree",".jstree-node").nextAll(".jstree-node:visible").first()},get_prev_dom:function(e,s){var r;if(e=this.get_node(e,!0),e[0]===this.element[0]){for(r=this.get_container_ul()[0].lastChild;r&&r.offsetHeight===0;)r=this._previousSibling(r);return r?a(r):!1}if(!e||!e.length)return!1;if(s){r=e[0];do r=this._previousSibling(r);while(r&&r.offsetHeight===0);return r?a(r):!1}r=e[0];do r=this._previousSibling(r);while(r&&r.offsetHeight===0);if(r!==null){for(e=a(r);e.hasClass("jstree-open");)e=e.children(".jstree-children").first().children(".jstree-node:visible:last");return e}return r=e[0].parentNode.parentNode,r&&r.className&&r.className.indexOf("jstree-node")!==-1?a(r):!1},get_parent:function(e){return e=this.get_node(e),e&&e.id!==a.jstree.root?e.parent:!1},get_children_dom:function(e){return e=this.get_node(e,!0),e[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):e&&e.length?e.children(".jstree-children").children(".jstree-node"):!1},is_parent:function(e){return e=this.get_node(e),e&&(e.state.loaded===!1||e.children.length>0)},is_loaded:function(e){return e=this.get_node(e),e&&e.state.loaded},is_loading:function(e){return e=this.get_node(e),e&&e.state&&e.state.loading},is_open:function(e){return e=this.get_node(e),e&&e.state.opened},is_closed:function(e){return e=this.get_node(e),e&&this.is_parent(e)&&!e.state.opened},is_leaf:function(e){return!this.is_parent(e)},load_node:function(e,s){var r,t,o,l,c;if(a.isArray(e))return this._load_nodes(e.slice(),s),!0;if(e=this.get_node(e),!e)return s&&s.call(this,e,!1),!1;if(e.state.loaded){for(e.state.loaded=!1,o=0,l=e.parents.length;l>o;o++)this._model.data[e.parents[o]].children_d=a.vakata.array_filter(this._model.data[e.parents[o]].children_d,function(f){return a.inArray(f,e.children_d)===-1});for(r=0,t=e.children_d.length;t>r;r++)this._model.data[e.children_d[r]].state.selected&&(c=!0),delete this._model.data[e.children_d[r]];c&&(this._data.core.selected=a.vakata.array_filter(this._data.core.selected,function(f){return a.inArray(f,e.children_d)===-1})),e.children=[],e.children_d=[],c&&this.trigger("changed",{action:"load_node",node:e,selected:this._data.core.selected})}return e.state.failed=!1,e.state.loading=!0,this.get_node(e,!0).addClass("jstree-loading").attr("aria-busy",!0),this._load_node(e,a.proxy(function(f){e=this._model.data[e.id],e.state.loading=!1,e.state.loaded=f,e.state.failed=!e.state.loaded;var m=this.get_node(e,!0),p=0,v=0,k=this._model.data,T=!1;for(p=0,v=e.children.length;v>p;p++)if(k[e.children[p]]&&!k[e.children[p]].state.hidden){T=!0;break}e.state.loaded&&m&&m.length&&(m.removeClass("jstree-closed jstree-open jstree-leaf"),T?e.id!=="#"&&m.addClass(e.state.opened?"jstree-open":"jstree-closed"):m.addClass("jstree-leaf")),m.removeClass("jstree-loading").attr("aria-busy",!1),this.trigger("load_node",{node:e,status:f}),s&&s.call(this,e,f)},this)),!0},_load_nodes:function(e,s,r,t){var o=!0,l=function(){this._load_nodes(e,s,!0)},c=this._model.data,f,m,p=[];for(f=0,m=e.length;m>f;f++)c[e[f]]&&(!c[e[f]].state.loaded&&!c[e[f]].state.failed||!r&&t)&&(this.is_loading(e[f])||this.load_node(e[f],l),o=!1);if(o){for(f=0,m=e.length;m>f;f++)c[e[f]]&&c[e[f]].state.loaded&&p.push(e[f]);s&&!s.done&&(s.call(this,p),s.done=!0)}},load_all:function(e,s){if(e||(e=a.jstree.root),e=this.get_node(e),!e)return!1;var r=[],t=this._model.data,o=t[e.id].children_d,l,c;for(e.state&&!e.state.loaded&&r.push(e.id),l=0,c=o.length;c>l;l++)t[o[l]]&&t[o[l]].state&&!t[o[l]].state.loaded&&r.push(o[l]);r.length?this._load_nodes(r,function(){this.load_all(e,s)}):(s&&s.call(this,e),this.trigger("load_all",{node:e}))},_load_node:function(e,s){var r=this.settings.core.data,t,o=function(){return this.nodeType!==3&&this.nodeType!==8};return r?a.isFunction(r)?r.call(this,e,a.proxy(function(l){l===!1?s.call(this,!1):this[typeof l=="string"?"_append_html_data":"_append_json_data"](e,typeof l=="string"?a(a.parseHTML(l)).filter(o):l,function(c){s.call(this,c)})},this)):typeof r=="object"?r.url?(r=a.extend(!0,{},r),a.isFunction(r.url)&&(r.url=r.url.call(this,e)),a.isFunction(r.data)&&(r.data=r.data.call(this,e)),a.ajax(r).done(a.proxy(function(l,c,f){var m=f.getResponseHeader("Content-Type");return m&&m.indexOf("json")!==-1||typeof l=="object"?this._append_json_data(e,l,function(p){s.call(this,p)}):m&&m.indexOf("html")!==-1||typeof l=="string"?this._append_html_data(e,a(a.parseHTML(l)).filter(o),function(p){s.call(this,p)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:e.id,xhr:f})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1))},this)).fail(a.proxy(function(l){this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:e.id,xhr:l})},s.call(this,!1),this.settings.core.error.call(this,this._data.core.last_error)},this))):(t=a.isArray(r)?a.extend(!0,[],r):a.isPlainObject(r)?a.extend(!0,{},r):r,e.id===a.jstree.root?this._append_json_data(e,t,function(l){s.call(this,l)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:e.id})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1))):typeof r=="string"?e.id===a.jstree.root?this._append_html_data(e,a(a.parseHTML(r)).filter(o),function(l){s.call(this,l)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:e.id})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1)):s.call(this,!1):e.id===a.jstree.root?this._append_html_data(e,this._data.core.original_container_html.clone(!0),function(l){s.call(this,l)}):s.call(this,!1)},_node_changed:function(e){e=this.get_node(e),e&&a.inArray(e.id,this._model.changed)===-1&&this._model.changed.push(e.id)},_append_html_data:function(e,s,r){e=this.get_node(e),e.children=[],e.children_d=[];var t=s.is("ul")?s.children():s,o=e.id,l=[],c=[],f=this._model.data,m=f[o],p=this._data.core.selected.length,v,k,T;for(t.each(a.proxy(function(P,M){v=this._parse_model_from_html(a(M),o,m.parents.concat()),v&&(l.push(v),c.push(v),f[v].children_d.length&&(c=c.concat(f[v].children_d)))},this)),m.children=l,m.children_d=c,k=0,T=m.parents.length;T>k;k++)f[m.parents[k]].children_d=f[m.parents[k]].children_d.concat(c);this.trigger("model",{nodes:c,parent:o}),o!==a.jstree.root?(this._node_changed(o),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==p&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),r.call(this,!0)},_append_json_data:function(e,s,r,t){if(this.element!==null){e=this.get_node(e),e.children=[],e.children_d=[],s.d&&(s=s.d,typeof s=="string"&&(s=JSON.parse(s))),a.isArray(s)||(s=[s]);var o=null,l={df:this._model.default_state,dat:s,par:e.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},c=this,f=function(p,v){p.data&&(p=p.data);var k=p.dat,T=p.par,P=[],M=[],H=[],F=p.df,ye=p.t_id,be=p.t_cnt,_e=p.m,Ce=_e[T],et=p.sel,Xe,w,K,A,X=function(L,ke,xe){xe=xe?xe.concat():[],ke&&xe.unshift(ke);var ae=L.id.toString(),oe,Ve,We,qe,ce={id:ae,text:L.text||"",icon:L.icon!==v?L.icon:!0,parent:ke,parents:xe,children:L.children||[],children_d:L.children_d||[],data:L.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(oe in F)F.hasOwnProperty(oe)&&(ce.state[oe]=F[oe]);if(L&&L.data&&L.data.jstree&&L.data.jstree.icon&&(ce.icon=L.data.jstree.icon),(ce.icon===v||ce.icon===null||ce.icon==="")&&(ce.icon=!0),L&&L.data&&(ce.data=L.data,L.data.jstree))for(oe in L.data.jstree)L.data.jstree.hasOwnProperty(oe)&&(ce.state[oe]=L.data.jstree[oe]);if(L&&typeof L.state=="object")for(oe in L.state)L.state.hasOwnProperty(oe)&&(ce.state[oe]=L.state[oe]);if(L&&typeof L.li_attr=="object")for(oe in L.li_attr)L.li_attr.hasOwnProperty(oe)&&(ce.li_attr[oe]=L.li_attr[oe]);if(ce.li_attr.id||(ce.li_attr.id=ae),L&&typeof L.a_attr=="object")for(oe in L.a_attr)L.a_attr.hasOwnProperty(oe)&&(ce.a_attr[oe]=L.a_attr[oe]);for(L&&L.children&&L.children===!0&&(ce.state.loaded=!1,ce.children=[],ce.children_d=[]),_e[ce.id]=ce,oe=0,Ve=ce.children.length;Ve>oe;oe++)We=X(_e[ce.children[oe]],ce.id,xe),qe=_e[We],ce.children_d.push(We),qe.children_d.length&&(ce.children_d=ce.children_d.concat(qe.children_d));return delete L.data,delete L.children,_e[ce.id].original=L,ce.state.selected&&H.push(ce.id),ce.id},re=function(L,ke,xe){xe=xe?xe.concat():[],ke&&xe.unshift(ke);var ae=!1,oe,Ve,We,qe,ce;do ae="j"+ye+"_"+ ++be;while(_e[ae]);ce={id:!1,text:typeof L=="string"?L:"",icon:typeof L=="object"&&L.icon!==v?L.icon:!0,parent:ke,parents:xe,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(oe in F)F.hasOwnProperty(oe)&&(ce.state[oe]=F[oe]);if(L&&L.id&&(ce.id=L.id.toString()),L&&L.text&&(ce.text=L.text),L&&L.data&&L.data.jstree&&L.data.jstree.icon&&(ce.icon=L.data.jstree.icon),(ce.icon===v||ce.icon===null||ce.icon==="")&&(ce.icon=!0),L&&L.data&&(ce.data=L.data,L.data.jstree))for(oe in L.data.jstree)L.data.jstree.hasOwnProperty(oe)&&(ce.state[oe]=L.data.jstree[oe]);if(L&&typeof L.state=="object")for(oe in L.state)L.state.hasOwnProperty(oe)&&(ce.state[oe]=L.state[oe]);if(L&&typeof L.li_attr=="object")for(oe in L.li_attr)L.li_attr.hasOwnProperty(oe)&&(ce.li_attr[oe]=L.li_attr[oe]);if(ce.li_attr.id&&!ce.id&&(ce.id=ce.li_attr.id.toString()),ce.id||(ce.id=ae),ce.li_attr.id||(ce.li_attr.id=ce.id),L&&typeof L.a_attr=="object")for(oe in L.a_attr)L.a_attr.hasOwnProperty(oe)&&(ce.a_attr[oe]=L.a_attr[oe]);if(L&&L.children&&L.children.length){for(oe=0,Ve=L.children.length;Ve>oe;oe++)We=re(L.children[oe],ce.id,xe),qe=_e[We],ce.children.push(We),qe.children_d.length&&(ce.children_d=ce.children_d.concat(qe.children_d));ce.children_d=ce.children_d.concat(ce.children)}return L&&L.children&&L.children===!0&&(ce.state.loaded=!1,ce.children=[],ce.children_d=[]),delete L.data,delete L.children,ce.original=L,_e[ce.id]=ce,ce.state.selected&&H.push(ce.id),ce.id};if(k.length&&k[0].id!==v&&k[0].parent!==v){for(w=0,K=k.length;K>w;w++)k[w].children||(k[w].children=[]),k[w].state||(k[w].state={}),_e[k[w].id.toString()]=k[w];for(w=0,K=k.length;K>w;w++)_e[k[w].parent.toString()]?(_e[k[w].parent.toString()].children.push(k[w].id.toString()),Ce.children_d.push(k[w].id.toString())):typeof c<"u"&&(c._data.core.last_error={error:"parse",plugin:"core",id:"core_07",reason:"Node with invalid parent",data:JSON.stringify({id:k[w].id.toString(),parent:k[w].parent.toString()})},c.settings.core.error.call(c,c._data.core.last_error));for(w=0,K=Ce.children.length;K>w;w++)Xe=X(_e[Ce.children[w]],T,Ce.parents.concat()),M.push(Xe),_e[Xe].children_d.length&&(M=M.concat(_e[Xe].children_d));for(w=0,K=Ce.parents.length;K>w;w++)_e[Ce.parents[w]].children_d=_e[Ce.parents[w]].children_d.concat(M);A={cnt:be,mod:_e,sel:et,par:T,dpc:M,add:H}}else{for(w=0,K=k.length;K>w;w++)Xe=re(k[w],T,Ce.parents.concat()),Xe&&(P.push(Xe),M.push(Xe),_e[Xe].children_d.length&&(M=M.concat(_e[Xe].children_d)));for(Ce.children=P,Ce.children_d=M,w=0,K=Ce.parents.length;K>w;w++)_e[Ce.parents[w]].children_d=_e[Ce.parents[w]].children_d.concat(M);A={cnt:be,mod:_e,sel:et,par:T,dpc:M,add:H}}return typeof window<"u"&&typeof window.document<"u"?A:void postMessage(A)},m=function(p,v){if(this.element!==null){this._cnt=p.cnt;var k,T=this._model.data;for(k in T)T.hasOwnProperty(k)&&T[k].state&&T[k].state.loading&&p.mod[k]&&(p.mod[k].state.loading=!0);if(this._model.data=p.mod,v){var P,M=p.add,H=p.sel,F=this._data.core.selected.slice();if(T=this._model.data,H.length!==F.length||a.vakata.array_unique(H.concat(F)).length!==H.length){for(k=0,P=H.length;P>k;k++)a.inArray(H[k],M)===-1&&a.inArray(H[k],F)===-1&&(T[H[k]].state.selected=!1);for(k=0,P=F.length;P>k;k++)a.inArray(F[k],H)===-1&&(T[F[k]].state.selected=!0)}}p.add.length&&(this._data.core.selected=this._data.core.selected.concat(p.add)),this.trigger("model",{nodes:p.dpc,parent:p.par}),p.par!==a.jstree.root?(this._node_changed(p.par),this.redraw()):this.redraw(!0),p.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),!v&&at?at(function(){r.call(c,!0)}):r.call(c,!0)}};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{this._wrk===null&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+f.toString()],{type:"text/javascript"}))),!this._data.core.working||t?(this._data.core.working=!0,o=new window.Worker(this._wrk),o.onmessage=a.proxy(function(p){m.call(this,p.data,!0);try{o.terminate(),o=null}catch{}this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1},this),l.par?o.postMessage(l):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([e,s,r,!0])}catch{m.call(this,f(l),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else m.call(this,f(l),!1)}},_parse_model_from_html:function(e,s,r){r=r?[].concat(r):[],s&&r.unshift(s);var t,o,l=this._model.data,c={id:!1,text:!1,icon:!0,parent:s,parents:r,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},f,m,p;for(f in this._model.default_state)this._model.default_state.hasOwnProperty(f)&&(c.state[f]=this._model.default_state[f]);if(m=a.vakata.attributes(e,!0),a.each(m,function(v,k){return k=a.vakata.trim(k),k.length?(c.li_attr[v]=k,void(v==="id"&&(c.id=k.toString()))):!0}),m=e.children("a").first(),m.length&&(m=a.vakata.attributes(m,!0),a.each(m,function(v,k){k=a.vakata.trim(k),k.length&&(c.a_attr[v]=k)})),m=e.children("a").first().length?e.children("a").first().clone():e.clone(),m.children("ins, i, ul").remove(),m=m.html(),m=a("<div></div>").html(m),c.text=this.settings.core.force_text?m.text():m.html(),m=e.data(),c.data=m?a.extend(!0,{},m):null,c.state.opened=e.hasClass("jstree-open"),c.state.selected=e.children("a").hasClass("jstree-clicked"),c.state.disabled=e.children("a").hasClass("jstree-disabled"),c.data&&c.data.jstree)for(f in c.data.jstree)c.data.jstree.hasOwnProperty(f)&&(c.state[f]=c.data.jstree[f]);m=e.children("a").children(".jstree-themeicon"),m.length&&(c.icon=m.hasClass("jstree-themeicon-hidden")?!1:m.attr("rel")),c.state.icon!==$&&(c.icon=c.state.icon),(c.icon===$||c.icon===null||c.icon==="")&&(c.icon=!0),m=e.children("ul").children("li");do p="j"+this._id+"_"+ ++this._cnt;while(l[p]);return c.id=c.li_attr.id?c.li_attr.id.toString():p,m.length?(m.each(a.proxy(function(v,k){t=this._parse_model_from_html(a(k),c.id,r),o=this._model.data[t],c.children.push(t),o.children_d.length&&(c.children_d=c.children_d.concat(o.children_d))},this)),c.children_d=c.children_d.concat(c.children)):e.hasClass("jstree-closed")&&(c.state.loaded=!1),c.li_attr.class&&(c.li_attr.class=c.li_attr.class.replace("jstree-closed","").replace("jstree-open","")),c.a_attr.class&&(c.a_attr.class=c.a_attr.class.replace("jstree-clicked","").replace("jstree-disabled","")),l[c.id]=c,c.state.selected&&this._data.core.selected.push(c.id),c.id},_parse_model_from_flat_json:function(e,s,r){r=r?r.concat():[],s&&r.unshift(s);var t=e.id.toString(),o=this._model.data,l=this._model.default_state,c,f,m,p,v={id:t,text:e.text||"",icon:e.icon!==$?e.icon:!0,parent:s,parents:r,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(c in l)l.hasOwnProperty(c)&&(v.state[c]=l[c]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(v.icon=e.data.jstree.icon),(v.icon===$||v.icon===null||v.icon==="")&&(v.icon=!0),e&&e.data&&(v.data=e.data,e.data.jstree))for(c in e.data.jstree)e.data.jstree.hasOwnProperty(c)&&(v.state[c]=e.data.jstree[c]);if(e&&typeof e.state=="object")for(c in e.state)e.state.hasOwnProperty(c)&&(v.state[c]=e.state[c]);if(e&&typeof e.li_attr=="object")for(c in e.li_attr)e.li_attr.hasOwnProperty(c)&&(v.li_attr[c]=e.li_attr[c]);if(v.li_attr.id||(v.li_attr.id=t),e&&typeof e.a_attr=="object")for(c in e.a_attr)e.a_attr.hasOwnProperty(c)&&(v.a_attr[c]=e.a_attr[c]);for(e&&e.children&&e.children===!0&&(v.state.loaded=!1,v.children=[],v.children_d=[]),o[v.id]=v,c=0,f=v.children.length;f>c;c++)m=this._parse_model_from_flat_json(o[v.children[c]],v.id,r),p=o[m],v.children_d.push(m),p.children_d.length&&(v.children_d=v.children_d.concat(p.children_d));return delete e.data,delete e.children,o[v.id].original=e,v.state.selected&&this._data.core.selected.push(v.id),v.id},_parse_model_from_json:function(e,s,r){r=r?r.concat():[],s&&r.unshift(s);var t=!1,o,l,c,f,m=this._model.data,p=this._model.default_state,v;do t="j"+this._id+"_"+ ++this._cnt;while(m[t]);v={id:!1,text:typeof e=="string"?e:"",icon:typeof e=="object"&&e.icon!==$?e.icon:!0,parent:s,parents:r,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(o in p)p.hasOwnProperty(o)&&(v.state[o]=p[o]);if(e&&e.id&&(v.id=e.id.toString()),e&&e.text&&(v.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(v.icon=e.data.jstree.icon),(v.icon===$||v.icon===null||v.icon==="")&&(v.icon=!0),e&&e.data&&(v.data=e.data,e.data.jstree))for(o in e.data.jstree)e.data.jstree.hasOwnProperty(o)&&(v.state[o]=e.data.jstree[o]);if(e&&typeof e.state=="object")for(o in e.state)e.state.hasOwnProperty(o)&&(v.state[o]=e.state[o]);if(e&&typeof e.li_attr=="object")for(o in e.li_attr)e.li_attr.hasOwnProperty(o)&&(v.li_attr[o]=e.li_attr[o]);if(v.li_attr.id&&!v.id&&(v.id=v.li_attr.id.toString()),v.id||(v.id=t),v.li_attr.id||(v.li_attr.id=v.id),e&&typeof e.a_attr=="object")for(o in e.a_attr)e.a_attr.hasOwnProperty(o)&&(v.a_attr[o]=e.a_attr[o]);if(e&&e.children&&e.children.length){for(o=0,l=e.children.length;l>o;o++)c=this._parse_model_from_json(e.children[o],v.id,r),f=m[c],v.children.push(c),f.children_d.length&&(v.children_d=v.children_d.concat(f.children_d));v.children_d=v.children.concat(v.children_d)}return e&&e.children&&e.children===!0&&(v.state.loaded=!1,v.children=[],v.children_d=[]),delete e.data,delete e.children,v.original=e,m[v.id]=v,v.state.selected&&this._data.core.selected.push(v.id),v.id},_redraw:function(){var e=this._model.force_full_redraw?this._model.data[a.jstree.root].children.concat([]):this._model.changed.concat([]),s=fe.createElement("UL"),r,t,o,l=this._data.core.focused;for(t=0,o=e.length;o>t;t++)r=this.redraw_node(e[t],!0,this._model.force_full_redraw),r&&this._model.force_full_redraw&&s.appendChild(r);this._model.force_full_redraw&&(s.className=this.get_container_ul()[0].className,s.setAttribute("role","group"),this.element.empty().append(s)),l!==null&&this.settings.core.restore_focus&&(r=this.get_node(l,!0),r&&r.length&&r.children(".jstree-anchor")[0]!==fe.activeElement?r.children(".jstree-anchor").focus():this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:e})},redraw:function(e){e&&(this._model.force_full_redraw=!0),this._redraw()},draw_children:function(e){var s=this.get_node(e),r=!1,t=!1,o=!1,l=fe;if(!s)return!1;if(s.id===a.jstree.root)return this.redraw(!0);if(e=this.get_node(e,!0),!e||!e.length)return!1;if(e.children(".jstree-children").remove(),e=e[0],s.children.length&&s.state.loaded){for(o=l.createElement("UL"),o.setAttribute("role","group"),o.className="jstree-children",r=0,t=s.children.length;t>r;r++)o.appendChild(this.redraw_node(s.children[r],!0,!0));e.appendChild(o)}},redraw_node:function(e,s,r,t){var o=this.get_node(e),l=!1,c=!1,f=!1,m=!1,p=!1,v=!1,k="",T=fe,P=this._model.data,M=!1,H=null,F=0,ye=0,be=!1,_e=!1;if(!o)return!1;if(o.id===a.jstree.root)return this.redraw(!0);if(s=s||o.children.length===0,e=fe.querySelector?this.element[0].querySelector("#"+("0123456789".indexOf(o.id[0])!==-1?"\\3"+o.id[0]+" "+o.id.substr(1).replace(a.jstree.idregex,"\\$&"):o.id.replace(a.jstree.idregex,"\\$&"))):fe.getElementById(o.id))e=a(e),r||(l=e.parent().parent()[0],l===this.element[0]&&(l=null),c=e.index()),s||!o.children.length||e.children(".jstree-children").length||(s=!0),s||(f=e.children(".jstree-children")[0]),M=e.children(".jstree-anchor")[0]===fe.activeElement,e.remove();else if(s=!0,!r){if(l=o.parent!==a.jstree.root?a("#"+o.parent.replace(a.jstree.idregex,"\\$&"),this.element)[0]:null,!(l===null||l&&P[o.parent].state.opened))return!1;c=a.inArray(o.id,l===null?P[a.jstree.root].children:P[o.parent].children)}e=this._data.core.node.cloneNode(!0),k="jstree-node ";for(m in o.li_attr)if(o.li_attr.hasOwnProperty(m)){if(m==="id")continue;m!=="class"?e.setAttribute(m,o.li_attr[m]):k+=o.li_attr[m]}for(o.a_attr.id||(o.a_attr.id=o.id+"_anchor"),e.childNodes[1].setAttribute("aria-selected",!!o.state.selected),e.childNodes[1].setAttribute("aria-level",o.parents.length),this.settings.core.compute_elements_positions&&(e.childNodes[1].setAttribute("aria-setsize",P[o.parent].children.length),e.childNodes[1].setAttribute("aria-posinset",P[o.parent].children.indexOf(o.id)+1)),o.state.disabled&&e.childNodes[1].setAttribute("aria-disabled",!0),m=0,p=o.children.length;p>m;m++)if(!P[o.children[m]].state.hidden){be=!0;break}if(o.parent!==null&&P[o.parent]&&!o.state.hidden&&(m=a.inArray(o.id,P[o.parent].children),_e=o.id,m!==-1))for(m++,p=P[o.parent].children.length;p>m&&(P[P[o.parent].children[m]].state.hidden||(_e=P[o.parent].children[m]),_e===o.id);m++);o.state.hidden&&(k+=" jstree-hidden"),o.state.loading&&(k+=" jstree-loading"),o.state.loaded&&!be?k+=" jstree-leaf":(k+=o.state.opened&&o.state.loaded?" jstree-open":" jstree-closed",e.childNodes[1].setAttribute("aria-expanded",o.state.opened&&o.state.loaded)),_e===o.id&&(k+=" jstree-last"),e.id=o.id,e.className=k,k=(o.state.selected?" jstree-clicked":"")+(o.state.disabled?" jstree-disabled":"");for(p in o.a_attr)if(o.a_attr.hasOwnProperty(p)){if(p==="href"&&o.a_attr[p]==="#")continue;p!=="class"?e.childNodes[1].setAttribute(p,o.a_attr[p]):k+=" "+o.a_attr[p]}if(k.length&&(e.childNodes[1].className="jstree-anchor "+k),(o.icon&&o.icon!==!0||o.icon===!1)&&(o.icon===!1?e.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":o.icon.indexOf("/")===-1&&o.icon.indexOf(".")===-1?e.childNodes[1].childNodes[0].className+=" "+o.icon+" jstree-themeicon-custom":(e.childNodes[1].childNodes[0].style.backgroundImage='url("'+o.icon+'")',e.childNodes[1].childNodes[0].style.backgroundPosition="center center",e.childNodes[1].childNodes[0].style.backgroundSize="auto",e.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?e.childNodes[1].appendChild(T.createTextNode(o.text)):e.childNodes[1].innerHTML+=o.text,s&&o.children.length&&(o.state.opened||t)&&o.state.loaded){for(v=T.createElement("UL"),v.setAttribute("role","group"),v.className="jstree-children",m=0,p=o.children.length;p>m;m++)v.appendChild(this.redraw_node(o.children[m],s,!0));e.appendChild(v)}if(f&&e.appendChild(f),!r){for(l||(l=this.element[0]),m=0,p=l.childNodes.length;p>m;m++)if(l.childNodes[m]&&l.childNodes[m].className&&l.childNodes[m].className.indexOf("jstree-children")!==-1){H=l.childNodes[m];break}H||(H=T.createElement("UL"),H.setAttribute("role","group"),H.className="jstree-children",l.appendChild(H)),l=H,c<l.childNodes.length?l.insertBefore(e,l.childNodes[c]):l.appendChild(e),M&&(F=this.element[0].scrollTop,ye=this.element[0].scrollLeft,e.childNodes[1].focus(),this.element[0].scrollTop=F,this.element[0].scrollLeft=ye)}return o.state.opened&&!o.state.loaded&&(o.state.opened=!1,setTimeout(a.proxy(function(){this.open_node(o.id,!1,0)},this),0)),e},open_node:function(e,s,r){var t,o,l,c;if(a.isArray(e)){for(e=e.slice(),t=0,o=e.length;o>t;t++)this.open_node(e[t],s,r);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(r=r===$?this.settings.core.animation:r,this.is_closed(e)?this.is_loaded(e)?(l=this.get_node(e,!0),c=this,l.length&&(r&&l.children(".jstree-children").length&&l.children(".jstree-children").stop(!0,!0),e.children.length&&!this._firstChild(l.children(".jstree-children")[0])&&this.draw_children(e),r?(this.trigger("before_open",{node:e}),l.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded",!0).end().children(".jstree-children").stop(!0,!0).slideDown(r,function(){this.style.display="",c.element&&c.trigger("after_open",{node:e})})):(this.trigger("before_open",{node:e}),l[0].className=l[0].className.replace("jstree-closed","jstree-open"),l[0].childNodes[1].setAttribute("aria-expanded",!0))),e.state.opened=!0,s&&s.call(this,e,!0),l.length||this.trigger("before_open",{node:e}),this.trigger("open_node",{node:e}),r&&l.length||this.trigger("after_open",{node:e}),!0):this.is_loading(e)?setTimeout(a.proxy(function(){this.open_node(e,s,r)},this),500):void this.load_node(e,function(f,m){return m?this.open_node(f,s,r):s?s.call(this,f,!1):!1}):(s&&s.call(this,e,!1),!1)):!1},_open_to:function(e){if(e=this.get_node(e),!e||e.id===a.jstree.root)return!1;var s,r,t=e.parents;for(s=0,r=t.length;r>s;s+=1)s!==a.jstree.root&&this.open_node(t[s],!1,0);return a("#"+e.id.replace(a.jstree.idregex,"\\$&"),this.element)},close_node:function(e,s){var r,t,o,l;if(a.isArray(e)){for(e=e.slice(),r=0,t=e.length;t>r;r++)this.close_node(e[r],s);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?this.is_closed(e)?!1:(s=s===$?this.settings.core.animation:s,o=this,l=this.get_node(e,!0),e.state.opened=!1,this.trigger("close_node",{node:e}),void(l.length?s?l.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded",!1).end().children(".jstree-children").stop(!0,!0).slideUp(s,function(){this.style.display="",l.children(".jstree-children").remove(),o.element&&o.trigger("after_close",{node:e})}):(l[0].className=l[0].className.replace("jstree-open","jstree-closed"),l.children(".jstree-anchor").attr("aria-expanded",!1),l.children(".jstree-children").remove(),this.trigger("after_close",{node:e})):this.trigger("after_close",{node:e}))):!1},toggle_node:function(e){var s,r;if(a.isArray(e)){for(e=e.slice(),s=0,r=e.length;r>s;s++)this.toggle_node(e[s]);return!0}return this.is_closed(e)?this.open_node(e):this.is_open(e)?this.close_node(e):void 0},open_all:function(e,s,r){if(e||(e=a.jstree.root),e=this.get_node(e),!e)return!1;var t=e.id===a.jstree.root?this.get_container_ul():this.get_node(e,!0),o,l,c;if(!t.length){for(o=0,l=e.children_d.length;l>o;o++)this.is_closed(this._model.data[e.children_d[o]])&&(this._model.data[e.children_d[o]].state.opened=!0);return this.trigger("open_all",{node:e})}r=r||t,c=this,t=this.is_closed(e)?t.find(".jstree-closed").addBack():t.find(".jstree-closed"),t.each(function(){c.open_node(this,function(f,m){m&&this.is_parent(f)&&this.open_all(f,s,r)},s||0)}),r.find(".jstree-closed").length===0&&this.trigger("open_all",{node:this.get_node(r)})},close_all:function(e,s){if(e||(e=a.jstree.root),e=this.get_node(e),!e)return!1;var r=e.id===a.jstree.root?this.get_container_ul():this.get_node(e,!0),t=this,o,l;for(r.length&&(r=this.is_open(e)?r.find(".jstree-open").addBack():r.find(".jstree-open"),a(r.get().reverse()).each(function(){t.close_node(this,s||0)})),o=0,l=e.children_d.length;l>o;o++)this._model.data[e.children_d[o]].state.opened=!1;this.trigger("close_all",{node:e})},is_disabled:function(e){return e=this.get_node(e),e&&e.state&&e.state.disabled},enable_node:function(e){var s,r;if(a.isArray(e)){for(e=e.slice(),s=0,r=e.length;r>s;s++)this.enable_node(e[s]);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(e.state.disabled=!1,this.get_node(e,!0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled",!1),void this.trigger("enable_node",{node:e})):!1},disable_node:function(e){var s,r;if(a.isArray(e)){for(e=e.slice(),s=0,r=e.length;r>s;s++)this.disable_node(e[s]);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(e.state.disabled=!0,this.get_node(e,!0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled",!0),void this.trigger("disable_node",{node:e})):!1},is_hidden:function(e){return e=this.get_node(e),e.state.hidden===!0},hide_node:function(e,s){var r,t;if(a.isArray(e)){for(e=e.slice(),r=0,t=e.length;t>r;r++)this.hide_node(e[r],!0);return s||this.redraw(),!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?void(e.state.hidden||(e.state.hidden=!0,this._node_changed(e.parent),s||this.redraw(),this.trigger("hide_node",{node:e}))):!1},show_node:function(e,s){var r,t;if(a.isArray(e)){for(e=e.slice(),r=0,t=e.length;t>r;r++)this.show_node(e[r],!0);return s||this.redraw(),!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?void(e.state.hidden&&(e.state.hidden=!1,this._node_changed(e.parent),s||this.redraw(),this.trigger("show_node",{node:e}))):!1},hide_all:function(e){var s,r=this._model.data,t=[];for(s in r)r.hasOwnProperty(s)&&s!==a.jstree.root&&!r[s].state.hidden&&(r[s].state.hidden=!0,t.push(s));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("hide_all",{nodes:t}),t},show_all:function(e){var s,r=this._model.data,t=[];for(s in r)r.hasOwnProperty(s)&&s!==a.jstree.root&&r[s].state.hidden&&(r[s].state.hidden=!1,t.push(s));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("show_all",{nodes:t}),t},activate_node:function(e,s){if(this.is_disabled(e))return!1;if(s&&typeof s=="object"||(s={}),this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==$?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),this.settings.core.multiple&&(s.metaKey||s.ctrlKey||s.shiftKey)&&(!s.shiftKey||this._data.core.last_clicked&&this.get_parent(e)&&this.get_parent(e)===this._data.core.last_clicked.parent))if(s.shiftKey){var r=this.get_node(e).id,t=this._data.core.last_clicked.id,o=this.get_node(this._data.core.last_clicked.parent).children,l=!1,c,f;for(c=0,f=o.length;f>c;c+=1)o[c]===r&&(l=!l),o[c]===t&&(l=!l),this.is_disabled(o[c])||!l&&o[c]!==r&&o[c]!==t?this.deselect_node(o[c],!0,s):this.is_hidden(o[c])||this.select_node(o[c],!0,!1,s);this.trigger("changed",{action:"select_node",node:this.get_node(e),selected:this._data.core.selected,event:s})}else this.is_selected(e)?this.deselect_node(e,!1,s):this.select_node(e,!1,!1,s);else!this.settings.core.multiple&&(s.metaKey||s.ctrlKey||s.shiftKey)&&this.is_selected(e)?this.deselect_node(e,!1,s):(this.deselect_all(!0),this.select_node(e,!1,!1,s),this._data.core.last_clicked=this.get_node(e));this.trigger("activate_node",{node:this.get_node(e),event:s})},hover_node:function(e){if(e=this.get_node(e,!0),!e||!e.length||e.children(".jstree-hovered").length)return!1;var s=this.element.find(".jstree-hovered"),r=this.element;s&&s.length&&this.dehover_node(s),e.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(e)}),setTimeout(function(){r.attr("aria-activedescendant",e[0].id)},0)},dehover_node:function(e){return e=this.get_node(e,!0),e&&e.length&&e.children(".jstree-hovered").length?(e.children(".jstree-anchor").removeClass("jstree-hovered"),void this.trigger("dehover_node",{node:this.get_node(e)})):!1},select_node:function(e,s,r,t){var o,l,c;if(a.isArray(e)){for(e=e.slice(),l=0,c=e.length;c>l;l++)this.select_node(e[l],s,r,t);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(o=this.get_node(e,!0),void(e.state.selected||(e.state.selected=!0,this._data.core.selected.push(e.id),r||(o=this._open_to(e)),o&&o.length&&o.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected",!0),this.trigger("select_node",{node:e,selected:this._data.core.selected,event:t}),s||this.trigger("changed",{action:"select_node",node:e,selected:this._data.core.selected,event:t})))):!1},deselect_node:function(e,s,r){var t,o,l;if(a.isArray(e)){for(e=e.slice(),t=0,o=e.length;o>t;t++)this.deselect_node(e[t],s,r);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(l=this.get_node(e,!0),void(e.state.selected&&(e.state.selected=!1,this._data.core.selected=a.vakata.array_remove_item(this._data.core.selected,e.id),l.length&&l.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_node",{node:e,selected:this._data.core.selected,event:r}),s||this.trigger("changed",{action:"deselect_node",node:e,selected:this._data.core.selected,event:r})))):!1},select_all:function(e){var s=this._data.core.selected.concat([]),r,t;for(this._data.core.selected=this._model.data[a.jstree.root].children_d.concat(),r=0,t=this._data.core.selected.length;t>r;r++)this._model.data[this._data.core.selected[r]]&&(this._model.data[this._data.core.selected[r]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),e||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:s})},deselect_all:function(e){var s=this._data.core.selected.concat([]),r,t;for(r=0,t=this._data.core.selected.length;t>r;r++)this._model.data[this._data.core.selected[r]]&&(this._model.data[this._data.core.selected[r]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_all",{selected:this._data.core.selected,node:s}),e||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:s})},is_selected:function(e){return e=this.get_node(e),e&&e.id!==a.jstree.root?e.state.selected:!1},get_selected:function(e){return e?a.map(this._data.core.selected,a.proxy(function(s){return this.get_node(s)},this)):this._data.core.selected.slice()},get_top_selected:function(e){var s=this.get_selected(!0),r={},t,o,l,c;for(t=0,o=s.length;o>t;t++)r[s[t].id]=s[t];for(t=0,o=s.length;o>t;t++)for(l=0,c=s[t].children_d.length;c>l;l++)r[s[t].children_d[l]]&&delete r[s[t].children_d[l]];s=[];for(t in r)r.hasOwnProperty(t)&&s.push(t);return e?a.map(s,a.proxy(function(f){return this.get_node(f)},this)):s},get_bottom_selected:function(e){var s=this.get_selected(!0),r=[],t,o;for(t=0,o=s.length;o>t;t++)s[t].children.length||r.push(s[t].id);return e?a.map(r,a.proxy(function(l){return this.get_node(l)},this)):r},get_state:function(){var e={core:{open:[],loaded:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},s;for(s in this._model.data)this._model.data.hasOwnProperty(s)&&s!==a.jstree.root&&(this._model.data[s].state.loaded&&this.settings.core.loaded_state&&e.core.loaded.push(s),this._model.data[s].state.opened&&e.core.open.push(s),this._model.data[s].state.selected&&e.core.selected.push(s));return e},set_state:function(e,s){if(e){if(e.core&&e.core.selected&&e.core.initial_selection===$&&(e.core.initial_selection=this._data.core.selected.concat([]).sort().join(",")),e.core){var r,t;if(e.core.loaded)return this.settings.core.loaded_state&&a.isArray(e.core.loaded)&&e.core.loaded.length?this._load_nodes(e.core.loaded,function(o){delete e.core.loaded,this.set_state(e,s)}):(delete e.core.loaded,this.set_state(e,s)),!1;if(e.core.open)return a.isArray(e.core.open)&&e.core.open.length?this._load_nodes(e.core.open,function(o){this.open_node(o,!1,0),delete e.core.open,this.set_state(e,s)}):(delete e.core.open,this.set_state(e,s)),!1;if(e.core.scroll)return e.core.scroll&&e.core.scroll.left!==$&&this.element.scrollLeft(e.core.scroll.left),e.core.scroll&&e.core.scroll.top!==$&&this.element.scrollTop(e.core.scroll.top),delete e.core.scroll,this.set_state(e,s),!1;if(e.core.selected)return r=this,(e.core.initial_selection===$||e.core.initial_selection===this._data.core.selected.concat([]).sort().join(","))&&(this.deselect_all(),a.each(e.core.selected,function(o,l){r.select_node(l,!1,!0)})),delete e.core.initial_selection,delete e.core.selected,this.set_state(e,s),!1;for(t in e)e.hasOwnProperty(t)&&t!=="core"&&a.inArray(t,this.settings.plugins)===-1&&delete e[t];if(a.isEmptyObject(e.core))return delete e.core,this.set_state(e,s),!1}return a.isEmptyObject(e)?(e=null,s&&s.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(e,s){this._data.core.state=s===!0?{}:this.get_state(),s&&a.isFunction(s)&&(this._data.core.state=s.call(this,this._data.core.state)),this._cnt=0,this._model.data={},this._model.data[a.jstree.root]={id:a.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this._data.core.selected=[],this._data.core.last_clicked=null,this._data.core.focused=null;var r=this.get_container_ul()[0].className;e||(this.element.html("<ul class='"+r+"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j"+this._id+"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading")),this.load_node(a.jstree.root,function(t,o){o&&(this.get_container_ul()[0].className=r,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.set_state(a.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(e){if(e=this.get_node(e),!e||e.id===a.jstree.root)return!1;var s=[],r=[],t=this._data.core.selected.concat([]);r.push(e.id),e.state.opened===!0&&s.push(e.id),this.get_node(e,!0).find(".jstree-open").each(function(){r.push(this.id),s.push(this.id)}),this._load_nodes(r,a.proxy(function(o){this.open_node(s,!1,0),this.select_node(t),this.trigger("refresh_node",{node:e,nodes:o})},this),!1,!0)},set_id:function(e,s){if(e=this.get_node(e),!e||e.id===a.jstree.root)return!1;var r,t,o=this._model.data,l=e.id;for(s=s.toString(),o[e.parent].children[a.inArray(e.id,o[e.parent].children)]=s,r=0,t=e.parents.length;t>r;r++)o[e.parents[r]].children_d[a.inArray(e.id,o[e.parents[r]].children_d)]=s;for(r=0,t=e.children.length;t>r;r++)o[e.children[r]].parent=s;for(r=0,t=e.children_d.length;t>r;r++)o[e.children_d[r]].parents[a.inArray(e.id,o[e.children_d[r]].parents)]=s;return r=a.inArray(e.id,this._data.core.selected),r!==-1&&(this._data.core.selected[r]=s),r=this.get_node(e.id,!0),r&&(r.attr("id",s),this.element.attr("aria-activedescendant")===e.id&&this.element.attr("aria-activedescendant",s)),delete o[e.id],e.id=s,e.li_attr.id=s,o[s]=e,this.trigger("set_id",{node:e,new:e.id,old:l}),!0},get_text:function(e){return e=this.get_node(e),e&&e.id!==a.jstree.root?e.text:!1},set_text:function(e,s){var r,t;if(a.isArray(e)){for(e=e.slice(),r=0,t=e.length;t>r;r++)this.set_text(e[r],s);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(e.text=s,this.get_node(e,!0).length&&this.redraw_node(e.id),this.trigger("set_text",{obj:e,text:s}),!0):!1},get_json:function(e,s,r){if(e=this.get_node(e||a.jstree.root),!e)return!1;s&&s.flat&&!r&&(r=[]);var t={id:e.id,text:e.text,icon:this.get_icon(e),li_attr:a.extend(!0,{},e.li_attr),a_attr:a.extend(!0,{},e.a_attr),state:{},data:s&&s.no_data?!1:a.extend(!0,a.isArray(e.data)?[]:{},e.data)},o,l;if(s&&s.flat?t.parent=e.parent:t.children=[],s&&s.no_state)delete t.state;else for(o in e.state)e.state.hasOwnProperty(o)&&(t.state[o]=e.state[o]);if(s&&s.no_li_attr&&delete t.li_attr,s&&s.no_a_attr&&delete t.a_attr,s&&s.no_id&&(delete t.id,t.li_attr&&t.li_attr.id&&delete t.li_attr.id,t.a_attr&&t.a_attr.id&&delete t.a_attr.id),s&&s.flat&&e.id!==a.jstree.root&&r.push(t),!s||!s.no_children)for(o=0,l=e.children.length;l>o;o++)s&&s.flat?this.get_json(e.children[o],s,r):t.children.push(this.get_json(e.children[o],s));return s&&s.flat?r:e.id===a.jstree.root?t.children:t},create_node:function(e,s,r,t,o){if(e===null&&(e=a.jstree.root),e=this.get_node(e),!e)return!1;if(r=r===$?"last":r,!r.toString().match(/^(before|after)$/)&&!o&&!this.is_loaded(e))return this.load_node(e,function(){this.create_node(e,s,r,t,!0)});s||(s={text:this.get_string("New node")}),s=typeof s=="string"?{text:s}:a.extend(!0,{},s),s.text===$&&(s.text=this.get_string("New node"));var l,c,f,m;switch(e.id===a.jstree.root&&(r==="before"&&(r="first"),r==="after"&&(r="last")),r){case"before":l=this.get_node(e.parent),r=a.inArray(e.id,l.children),e=l;break;case"after":l=this.get_node(e.parent),r=a.inArray(e.id,l.children)+1,e=l;break;case"inside":case"first":r=0;break;case"last":r=e.children.length;break;default:r||(r=0)}if(r>e.children.length&&(r=e.children.length),s.id||(s.id=!0),!this.check("create_node",s,e,r))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(s.id===!0&&delete s.id,s=this._parse_model_from_json(s,e.id,e.parents.concat()),!s)return!1;for(l=this.get_node(s),c=[],c.push(s),c=c.concat(l.children_d),this.trigger("model",{nodes:c,parent:e.id}),e.children_d=e.children_d.concat(c),f=0,m=e.parents.length;m>f;f++)this._model.data[e.parents[f]].children_d=this._model.data[e.parents[f]].children_d.concat(c);for(s=l,l=[],f=0,m=e.children.length;m>f;f++)l[f>=r?f+1:f]=e.children[f];return l[r]=s.id,e.children=l,this.redraw_node(e,!0),this.trigger("create_node",{node:this.get_node(s),parent:e.id,position:r}),t&&t.call(this,this.get_node(s)),s.id},rename_node:function(e,s){var r,t,o;if(a.isArray(e)){for(e=e.slice(),r=0,t=e.length;t>r;r++)this.rename_node(e[r],s);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(o=e.text,this.check("rename_node",e,this.get_parent(e),s)?(this.set_text(e,s),this.trigger("rename_node",{node:e,text:s,old:o}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1)):!1},delete_node:function(e){var s,r,t,o,l,c,f,m,p,v,k,T;if(a.isArray(e)){for(e=e.slice(),s=0,r=e.length;r>s;s++)this.delete_node(e[s]);return!0}if(e=this.get_node(e),!e||e.id===a.jstree.root)return!1;if(t=this.get_node(e.parent),o=a.inArray(e.id,t.children),v=!1,!this.check("delete_node",e,t,o))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(o!==-1&&(t.children=a.vakata.array_remove(t.children,o)),l=e.children_d.concat([]),l.push(e.id),c=0,f=e.parents.length;f>c;c++)this._model.data[e.parents[c]].children_d=a.vakata.array_filter(this._model.data[e.parents[c]].children_d,function(P){return a.inArray(P,l)===-1});for(m=0,p=l.length;p>m;m++)if(this._model.data[l[m]].state.selected){v=!0;break}for(v&&(this._data.core.selected=a.vakata.array_filter(this._data.core.selected,function(P){return a.inArray(P,l)===-1})),this.trigger("delete_node",{node:e,parent:t.id}),v&&this.trigger("changed",{action:"delete_node",node:e,selected:this._data.core.selected,parent:t.id}),m=0,p=l.length;p>m;m++)delete this._model.data[l[m]];return a.inArray(this._data.core.focused,l)!==-1&&(this._data.core.focused=null,k=this.element[0].scrollTop,T=this.element[0].scrollLeft,t.id===a.jstree.root?this._model.data[a.jstree.root].children[0]&&this.get_node(this._model.data[a.jstree.root].children[0],!0).children(".jstree-anchor").focus():this.get_node(t,!0).children(".jstree-anchor").focus(),this.element[0].scrollTop=k,this.element[0].scrollLeft=T),this.redraw_node(t,!0),!0},check:function(e,s,r,t,o){s=s&&s.id?s:this.get_node(s),r=r&&r.id?r:this.get_node(r);var l=e.match(/^move_node|copy_node|create_node$/i)?r:s,c=this.settings.core.check_callback;if(e==="move_node"||e==="copy_node"){if(!(o&&o.is_multi||e!=="move_node"||a.inArray(s.id,r.children)!==t))return this._data.core.last_error={error:"check",plugin:"core",id:"core_08",reason:"Moving node to its current position",data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})},!1;if(!(o&&o.is_multi||s.id!==r.id&&(e!=="move_node"||a.inArray(s.id,r.children)!==t)&&a.inArray(r.id,s.children_d)===-1))return this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})},!1}return l&&l.data&&(l=l.data),l&&l.functions&&(l.functions[e]===!1||l.functions[e]===!0)?(l.functions[e]===!1&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+e,data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})}),l.functions[e]):c===!1||a.isFunction(c)&&c.call(this,e,s,r,t,o)===!1||c&&c[e]===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+e,data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:r&&r.id?r.id:!1})},!1):!0},last_error:function(){return this._data.core.last_error},move_node:function(e,s,r,t,o,l,c){var f,m,p,v,k,T,P,M,H,F,ye,be,_e,Ce;if(s=this.get_node(s),r=r===$?0:r,!s)return!1;if(!r.toString().match(/^(before|after)$/)&&!o&&!this.is_loaded(s))return this.load_node(s,function(){this.move_node(e,s,r,t,!0,!1,c)});if(a.isArray(e)){if(e.length!==1){for(f=0,m=e.length;m>f;f++)(H=this.move_node(e[f],s,r,t,o,!1,c))&&(s=H,r="after");return this.redraw(),!0}e=e[0]}if(e=e&&e.id?e:this.get_node(e),!e||e.id===a.jstree.root)return!1;if(p=(e.parent||a.jstree.root).toString(),k=r.toString().match(/^(before|after)$/)&&s.id!==a.jstree.root?this.get_node(s.parent):s,T=c||(this._model.data[e.id]?this:a.jstree.reference(e.id)),P=!T||!T._id||this._id!==T._id,v=T&&T._id&&p&&T._model.data[p]&&T._model.data[p].children?a.inArray(e.id,T._model.data[p].children):-1,T&&T._id&&(e=T._model.data[e.id]),P)return(H=this.copy_node(e,s,r,t,o,!1,c))?(T&&T.delete_node(e),H):!1;switch(s.id===a.jstree.root&&(r==="before"&&(r="first"),r==="after"&&(r="last")),r){case"before":r=a.inArray(s.id,k.children);break;case"after":r=a.inArray(s.id,k.children)+1;break;case"inside":case"first":r=0;break;case"last":r=k.children.length;break;default:r||(r=0)}if(r>k.children.length&&(r=k.children.length),!this.check("move_node",e,k,r,{core:!0,origin:c,is_multi:T&&T._id&&T._id!==this._id,is_foreign:!T||!T._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(e.parent===k.id){for(M=k.children.concat(),H=a.inArray(e.id,M),H!==-1&&(M=a.vakata.array_remove(M,H),r>H&&r--),H=[],F=0,ye=M.length;ye>F;F++)H[F>=r?F+1:F]=M[F];H[r]=e.id,k.children=H,this._node_changed(k.id),this.redraw(k.id===a.jstree.root)}else{for(H=e.children_d.concat(),H.push(e.id),F=0,ye=e.parents.length;ye>F;F++){for(M=[],Ce=T._model.data[e.parents[F]].children_d,be=0,_e=Ce.length;_e>be;be++)a.inArray(Ce[be],H)===-1&&M.push(Ce[be]);T._model.data[e.parents[F]].children_d=M}for(T._model.data[p].children=a.vakata.array_remove_item(T._model.data[p].children,e.id),F=0,ye=k.parents.length;ye>F;F++)this._model.data[k.parents[F]].children_d=this._model.data[k.parents[F]].children_d.concat(H);for(M=[],F=0,ye=k.children.length;ye>F;F++)M[F>=r?F+1:F]=k.children[F];for(M[r]=e.id,k.children=M,k.children_d.push(e.id),k.children_d=k.children_d.concat(e.children_d),e.parent=k.id,H=k.parents.concat(),H.unshift(k.id),Ce=e.parents.length,e.parents=H,H=H.concat(),F=0,ye=e.children_d.length;ye>F;F++)this._model.data[e.children_d[F]].parents=this._model.data[e.children_d[F]].parents.slice(0,-1*Ce),Array.prototype.push.apply(this._model.data[e.children_d[F]].parents,H);(p===a.jstree.root||k.id===a.jstree.root)&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||(this._node_changed(p),this._node_changed(k.id)),l||this.redraw()}return t&&t.call(this,e,k,r),this.trigger("move_node",{node:e,parent:k.id,position:r,old_parent:p,old_position:v,is_multi:T&&T._id&&T._id!==this._id,is_foreign:!T||!T._id,old_instance:T,new_instance:this}),e.id},copy_node:function(e,s,r,t,o,l,c){var f,m,p,v,k,T,P,M,H,F;if(s=this.get_node(s),r=r===$?0:r,!s)return!1;if(!r.toString().match(/^(before|after)$/)&&!o&&!this.is_loaded(s))return this.load_node(s,function(){this.copy_node(e,s,r,t,!0,!1,c)});if(a.isArray(e)){if(e.length!==1){for(f=0,m=e.length;m>f;f++)(v=this.copy_node(e[f],s,r,t,o,!0,c))&&(s=v,r="after");return this.redraw(),!0}e=e[0]}if(e=e&&e.id?e:this.get_node(e),!e||e.id===a.jstree.root)return!1;switch(M=(e.parent||a.jstree.root).toString(),H=r.toString().match(/^(before|after)$/)&&s.id!==a.jstree.root?this.get_node(s.parent):s,F=c||(this._model.data[e.id]?this:a.jstree.reference(e.id)),!F||!F._id||(this._id,F._id),F&&F._id&&(e=F._model.data[e.id]),s.id===a.jstree.root&&(r==="before"&&(r="first"),r==="after"&&(r="last")),r){case"before":r=a.inArray(s.id,H.children);break;case"after":r=a.inArray(s.id,H.children)+1;break;case"inside":case"first":r=0;break;case"last":r=H.children.length;break;default:r||(r=0)}if(r>H.children.length&&(r=H.children.length),!this.check("copy_node",e,H,r,{core:!0,origin:c,is_multi:F&&F._id&&F._id!==this._id,is_foreign:!F||!F._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(P=F?F.get_json(e,{no_id:!0,no_data:!0,no_state:!0}):e,!P||(P.id===!0&&delete P.id,P=this._parse_model_from_json(P,H.id,H.parents.concat()),!P))return!1;for(v=this.get_node(P),e&&e.state&&e.state.loaded===!1&&(v.state.loaded=!1),p=[],p.push(P),p=p.concat(v.children_d),this.trigger("model",{nodes:p,parent:H.id}),k=0,T=H.parents.length;T>k;k++)this._model.data[H.parents[k]].children_d=this._model.data[H.parents[k]].children_d.concat(p);for(p=[],k=0,T=H.children.length;T>k;k++)p[k>=r?k+1:k]=H.children[k];return p[r]=v.id,H.children=p,H.children_d.push(v.id),H.children_d=H.children_d.concat(v.children_d),H.id===a.jstree.root&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||this._node_changed(H.id),l||this.redraw(H.id===a.jstree.root),t&&t.call(this,v,H,r),this.trigger("copy_node",{node:v,original:e,parent:H.id,position:r,old_parent:M,old_position:F&&F._id&&M&&F._model.data[M]&&F._model.data[M].children?a.inArray(e.id,F._model.data[M].children):-1,is_multi:F&&F._id&&F._id!==this._id,is_foreign:!F||!F._id,old_instance:F,new_instance:this}),v.id},cut:function(e){if(e||(e=this._data.core.selected.concat()),a.isArray(e)||(e=[e]),!e.length)return!1;var s=[],r,t,o;for(t=0,o=e.length;o>t;t++)r=this.get_node(e[t]),r&&r.id&&r.id!==a.jstree.root&&s.push(r);return s.length?(J=s,de=this,ne="move_node",void this.trigger("cut",{node:e})):!1},copy:function(e){if(e||(e=this._data.core.selected.concat()),a.isArray(e)||(e=[e]),!e.length)return!1;var s=[],r,t,o;for(t=0,o=e.length;o>t;t++)r=this.get_node(e[t]),r&&r.id&&r.id!==a.jstree.root&&s.push(r);return s.length?(J=s,de=this,ne="copy_node",void this.trigger("copy",{node:e})):!1},get_buffer:function(){return{mode:ne,node:J,inst:de}},can_paste:function(){return ne!==!1&&J!==!1},paste:function(e,s){return e=this.get_node(e),e&&ne&&ne.match(/^(copy_node|move_node)$/)&&J?(this[ne](J,e,s,!1,!1,!1,de)&&this.trigger("paste",{parent:e.id,node:J,mode:ne}),J=!1,ne=!1,void(de=!1)):!1},clear_buffer:function(){J=!1,ne=!1,de=!1,this.trigger("clear_buffer")},edit:function(e,s,r){var t,o,l,c,f,m,p,v,k,T=!1;return(e=this.get_node(e))?this.check("edit",e,this.get_parent(e))?(k=e,s=typeof s=="string"?s:e.text,this.set_text(e,""),e=this._open_to(e),k.text=s,t=this._data.core.rtl,o=this.element.width(),this._data.core.focused=k.id,l=e.children(".jstree-anchor").focus(),c=a("<span></span>"),f=s,m=a("<div></div>",{css:{position:"absolute",top:"-200px",left:t?"0px":"-1000px",visibility:"hidden"}}).appendTo(fe.body),p=a("<input />",{value:f,class:"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:a.proxy(function(P){P.stopImmediatePropagation(),P.preventDefault();var M=c.children(".jstree-rename-input"),H=M.val(),F=this.settings.core.force_text,ye;H===""&&(H=f),m.remove(),c.replaceWith(l),c.remove(),f=F?f:a("<div></div>").append(a.parseHTML(f)).html(),e=this.get_node(e),this.set_text(e,f),ye=!!this.rename_node(e,F?a("<div></div>").text(H).text():a("<div></div>").append(a.parseHTML(H)).html()),ye||this.set_text(e,f),this._data.core.focused=k.id,setTimeout(a.proxy(function(){var be=this.get_node(k.id,!0);be.length&&(this._data.core.focused=k.id,be.children(".jstree-anchor").focus())},this),0),r&&r.call(this,k,ye,T,H),p=null},this),keydown:function(P){var M=P.which;M===27&&(T=!0,this.value=f),(M===27||M===13||M===37||M===38||M===39||M===40||M===32)&&P.stopImmediatePropagation(),(M===27||M===13)&&(P.preventDefault(),this.blur())},click:function(P){P.stopImmediatePropagation()},mousedown:function(P){P.stopImmediatePropagation()},keyup:function(P){p.width(Math.min(m.text("pW"+this.value).width(),o))},keypress:function(P){return P.which===13?!1:void 0}}),v={fontFamily:l.css("fontFamily")||"",fontSize:l.css("fontSize")||"",fontWeight:l.css("fontWeight")||"",fontStyle:l.css("fontStyle")||"",fontStretch:l.css("fontStretch")||"",fontVariant:l.css("fontVariant")||"",letterSpacing:l.css("letterSpacing")||"",wordSpacing:l.css("wordSpacing")||""},c.attr("class",l.attr("class")).append(l.contents().clone()).append(p),l.replaceWith(c),m.css(v),p.css(v).width(Math.min(m.text("pW"+p[0].value).width(),o))[0].select(),void a(fe).one("mousedown.jstree touchstart.jstree dnd_start.vakata",function(P){p&&P.target!==p&&a(p).blur()})):(this.settings.core.error.call(this,this._data.core.last_error),!1):!1},set_theme:function(e,s){if(!e)return!1;if(s===!0){var r=this.settings.core.themes.dir;r||(r=a.jstree.path+"/themes"),s=r+"/"+e+"/style.css"}s&&a.inArray(s,Me)===-1&&(a("head").append('<link rel="stylesheet" href="'+s+'" type="text/css" />'),Me.push(s)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=e,this.element.addClass("jstree-"+e),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+e+"-responsive"),this.trigger("set_theme",{theme:e})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(e){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=e,e&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped"),this.trigger("show_stripes")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped"),this.trigger("hide_stripes")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots"),this.trigger("show_dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots"),this.trigger("hide_dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons"),this.trigger("show_icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons"),this.trigger("hide_icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},show_ellipsis:function(){this._data.core.themes.ellipsis=!0,this.get_container_ul().addClass("jstree-ellipsis"),this.trigger("show_ellipsis")},hide_ellipsis:function(){this._data.core.themes.ellipsis=!1,this.get_container_ul().removeClass("jstree-ellipsis"),this.trigger("hide_ellipsis")},toggle_ellipsis:function(){this._data.core.themes.ellipsis?this.hide_ellipsis():this.show_ellipsis()},set_icon:function(e,s){var r,t,o,l;if(a.isArray(e)){for(e=e.slice(),r=0,t=e.length;t>r;r++)this.set_icon(e[r],s);return!0}return e=this.get_node(e),e&&e.id!==a.jstree.root?(l=e.icon,e.icon=s===!0||s===null||s===$||s===""?!0:s,o=this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon"),s===!1?(o.removeClass("jstree-themeicon-custom "+l).css("background","").removeAttr("rel"),this.hide_icon(e)):s===!0||s===null||s===$||s===""?(o.removeClass("jstree-themeicon-custom "+l).css("background","").removeAttr("rel"),l===!1&&this.show_icon(e)):s.indexOf("/")===-1&&s.indexOf(".")===-1?(o.removeClass(l).css("background",""),o.addClass(s+" jstree-themeicon-custom").attr("rel",s),l===!1&&this.show_icon(e)):(o.removeClass(l).css("background",""),o.addClass("jstree-themeicon-custom").css("background","url('"+s+"') center center no-repeat").attr("rel",s),l===!1&&this.show_icon(e)),!0):!1},get_icon:function(e){return e=this.get_node(e),e&&e.id!==a.jstree.root?e.icon:!1},hide_icon:function(e){var s,r;if(a.isArray(e)){for(e=e.slice(),s=0,r=e.length;r>s;s++)this.hide_icon(e[s]);return!0}return e=this.get_node(e),e&&e!==a.jstree.root?(e.icon=!1,this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0):!1},show_icon:function(e){var s,r,t;if(a.isArray(e)){for(e=e.slice(),s=0,r=e.length;r>s;s++)this.show_icon(e[s]);return!0}return e=this.get_node(e),e&&e!==a.jstree.root?(t=this.get_node(e,!0),e.icon=t.length?t.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):!0,e.icon||(e.icon=!0),t.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0):!1}},a.vakata={},a.vakata.attributes=function(e,s){e=a(e)[0];var r=s?{}:[];return e&&e.attributes&&a.each(e.attributes,function(t,o){a.inArray(o.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])===-1&&o.value!==null&&a.vakata.trim(o.value)!==""&&(s?r[o.name]=o.value:r.push(o.name))}),r},a.vakata.array_unique=function(e){var s=[],r,t,o={};for(r=0,t=e.length;t>r;r++)o[e[r]]===$&&(s.push(e[r]),o[e[r]]=!0);return s},a.vakata.array_remove=function(e,s){return e.splice(s,1),e},a.vakata.array_remove_item=function(e,s){var r=a.inArray(s,e);return r!==-1?a.vakata.array_remove(e,r):e},a.vakata.array_filter=function(e,s,r,t,o){if(e.filter)return e.filter(s,r);t=[];for(o in e)~~o+""==o+""&&o>=0&&s.call(r,e[o],+o,e)&&t.push(e[o]);return t},a.vakata.trim=function(e){return String.prototype.trim?String.prototype.trim.call(e.toString()):e.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},a.jstree.plugins.changed=function(e,s){var r=[];this.trigger=function(t,o){var l,c;if(o||(o={}),t.replace(".jstree","")==="changed"){o.changed={selected:[],deselected:[]};var f={};for(l=0,c=r.length;c>l;l++)f[r[l]]=1;for(l=0,c=o.selected.length;c>l;l++)f[o.selected[l]]?f[o.selected[l]]=2:o.changed.selected.push(o.selected[l]);for(l=0,c=r.length;c>l;l++)f[r[l]]===1&&o.changed.deselected.push(r[l]);r=o.selected.slice()}s.trigger.call(this,t,o)},this.refresh=function(t,o){return r=[],s.refresh.apply(this,arguments)}};var nt=fe.createElement("I");nt.className="jstree-icon jstree-checkbox",nt.setAttribute("role","presentation"),a.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0,cascade_to_disabled:!0,cascade_to_hidden:!0},a.jstree.plugins.checkbox=function(e,s){this.bind=function(){s.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",a.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",a.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),this.settings.checkbox.cascade.indexOf("undetermined")!==-1&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",a.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(a.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",a.proxy(function(r,t){var o=this._model.data;o[t.parent];var l=t.nodes,c,f;for(c=0,f=l.length;f>c;c++)o[l[c]].state.checked=o[l[c]].state.checked||o[l[c]].original&&o[l[c]].original.state&&o[l[c]].original.state.checked,o[l[c]].state.checked&&this._data.checkbox.selected.push(l[c])},this)),(this.settings.checkbox.cascade.indexOf("up")!==-1||this.settings.checkbox.cascade.indexOf("down")!==-1)&&this.element.on("model.jstree",a.proxy(function(r,t){var o=this._model.data,l=o[t.parent],c=t.nodes,f=[],m,p,v,k,T,P,M=this.settings.checkbox.cascade,H=this.settings.checkbox.tie_selection;if(M.indexOf("down")!==-1){if(l.state[H?"selected":"checked"]){for(p=0,v=c.length;v>p;p++)o[c[p]].state[H?"selected":"checked"]=!0;this._data[H?"core":"checkbox"].selected=this._data[H?"core":"checkbox"].selected.concat(c)}else for(p=0,v=c.length;v>p;p++)if(o[c[p]].state[H?"selected":"checked"]){for(k=0,T=o[c[p]].children_d.length;T>k;k++)o[o[c[p]].children_d[k]].state[H?"selected":"checked"]=!0;this._data[H?"core":"checkbox"].selected=this._data[H?"core":"checkbox"].selected.concat(o[c[p]].children_d)}}if(M.indexOf("up")!==-1){for(p=0,v=l.children_d.length;v>p;p++)o[l.children_d[p]].children.length||f.push(o[l.children_d[p]].parent);for(f=a.vakata.array_unique(f),k=0,T=f.length;T>k;k++)for(l=o[f[k]];l&&l.id!==a.jstree.root;){for(m=0,p=0,v=l.children.length;v>p;p++)m+=o[l.children[p]].state[H?"selected":"checked"];if(m!==v)break;l.state[H?"selected":"checked"]=!0,this._data[H?"core":"checkbox"].selected.push(l.id),P=this.get_node(l,!0),P&&P.length&&P.attr("aria-selected",!0).children(".jstree-anchor").addClass(H?"jstree-clicked":"jstree-checked"),l=this.get_node(l.parent)}}this._data[H?"core":"checkbox"].selected=a.vakata.array_unique(this._data[H?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",a.proxy(function(r,t){var o=t.node,l=this._model.data,c=this.get_node(o.parent),f,m,p,v,k=this.settings.checkbox.cascade,T=this.settings.checkbox.tie_selection,P={},M=this._data[T?"core":"checkbox"].selected;for(f=0,m=M.length;m>f;f++)P[M[f]]=!0;if(k.indexOf("down")!==-1){var H=this._cascade_new_checked_state(o.id,!0),F=o.children_d.concat(o.id);for(f=0,m=F.length;m>f;f++)H.indexOf(F[f])>-1?P[F[f]]=!0:delete P[F[f]]}if(k.indexOf("up")!==-1)for(;c&&c.id!==a.jstree.root;){for(p=0,f=0,m=c.children.length;m>f;f++)p+=l[c.children[f]].state[T?"selected":"checked"];if(p!==m)break;c.state[T?"selected":"checked"]=!0,P[c.id]=!0,v=this.get_node(c,!0),v&&v.length&&v.attr("aria-selected",!0).children(".jstree-anchor").addClass(T?"jstree-clicked":"jstree-checked"),c=this.get_node(c.parent)}M=[];for(f in P)P.hasOwnProperty(f)&&M.push(f);this._data[T?"core":"checkbox"].selected=M},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",a.proxy(function(r,t){var o=this.get_node(a.jstree.root),l=this._model.data,c,f,m;for(c=0,f=o.children_d.length;f>c;c++)m=l[o.children_d[c]],m&&m.original&&m.original.state&&m.original.state.undetermined&&(m.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",a.proxy(function(r,t){var o=t.node;this.get_node(o,!0);var l,c,f,m=this.settings.checkbox.cascade,p=this.settings.checkbox.tie_selection,v=this._data[p?"core":"checkbox"].selected,k=o.children_d.concat(o.id);if(m.indexOf("down")!==-1){var T=this._cascade_new_checked_state(o.id,!1);v=a.vakata.array_filter(v,function(P){return k.indexOf(P)===-1||T.indexOf(P)>-1})}if(m.indexOf("up")!==-1&&v.indexOf(o.id)===-1){for(l=0,c=o.parents.length;c>l;l++)f=this._model.data[o.parents[l]],f.state[p?"selected":"checked"]=!1,f&&f.original&&f.original.state&&f.original.state.undetermined&&(f.original.state.undetermined=!1),f=this.get_node(o.parents[l],!0),f&&f.length&&f.attr("aria-selected",!1).children(".jstree-anchor").removeClass(p?"jstree-clicked":"jstree-checked");v=a.vakata.array_filter(v,function(P){return o.parents.indexOf(P)===-1})}this._data[p?"core":"checkbox"].selected=v},this)),this.settings.checkbox.cascade.indexOf("up")!==-1&&this.element.on("delete_node.jstree",a.proxy(function(r,t){for(var o=this.get_node(t.parent),l=this._model.data,c,f,m,p,v=this.settings.checkbox.tie_selection;o&&o.id!==a.jstree.root&&!o.state[v?"selected":"checked"];){for(m=0,c=0,f=o.children.length;f>c;c++)m+=l[o.children[c]].state[v?"selected":"checked"];if(!(f>0&&m===f))break;o.state[v?"selected":"checked"]=!0,this._data[v?"core":"checkbox"].selected.push(o.id),p=this.get_node(o,!0),p&&p.length&&p.attr("aria-selected",!0).children(".jstree-anchor").addClass(v?"jstree-clicked":"jstree-checked"),o=this.get_node(o.parent)}},this)).on("move_node.jstree",a.proxy(function(r,t){var o=t.is_multi,l=t.old_parent,c=this.get_node(t.parent),f=this._model.data,m,p,v,k,T,P=this.settings.checkbox.tie_selection;if(!o)for(m=this.get_node(l);m&&m.id!==a.jstree.root&&!m.state[P?"selected":"checked"];){for(p=0,v=0,k=m.children.length;k>v;v++)p+=f[m.children[v]].state[P?"selected":"checked"];if(!(k>0&&p===k))break;m.state[P?"selected":"checked"]=!0,this._data[P?"core":"checkbox"].selected.push(m.id),T=this.get_node(m,!0),T&&T.length&&T.attr("aria-selected",!0).children(".jstree-anchor").addClass(P?"jstree-clicked":"jstree-checked"),m=this.get_node(m.parent)}for(m=c;m&&m.id!==a.jstree.root;){for(p=0,v=0,k=m.children.length;k>v;v++)p+=f[m.children[v]].state[P?"selected":"checked"];if(p===k)m.state[P?"selected":"checked"]||(m.state[P?"selected":"checked"]=!0,this._data[P?"core":"checkbox"].selected.push(m.id),T=this.get_node(m,!0),T&&T.length&&T.attr("aria-selected",!0).children(".jstree-anchor").addClass(P?"jstree-clicked":"jstree-checked"));else{if(!m.state[P?"selected":"checked"])break;m.state[P?"selected":"checked"]=!1,this._data[P?"core":"checkbox"].selected=a.vakata.array_remove_item(this._data[P?"core":"checkbox"].selected,m.id),T=this.get_node(m,!0),T&&T.length&&T.attr("aria-selected",!1).children(".jstree-anchor").removeClass(P?"jstree-clicked":"jstree-checked")}m=this.get_node(m.parent)}},this))},this.get_undetermined=function(r){if(this.settings.checkbox.cascade.indexOf("undetermined")===-1)return[];var t,o,l,c,f={},m=this._model.data,p=this.settings.checkbox.tie_selection,v=this._data[p?"core":"checkbox"].selected,k=[],T=this,P=[];for(t=0,o=v.length;o>t;t++)if(m[v[t]]&&m[v[t]].parents)for(l=0,c=m[v[t]].parents.length;c>l&&f[m[v[t]].parents[l]]===$;l++)m[v[t]].parents[l]!==a.jstree.root&&(f[m[v[t]].parents[l]]=!0,k.push(m[v[t]].parents[l]));for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var M=T.get_node(this),H;if(M){if(M.state.loaded){for(t=0,o=M.children_d.length;o>t;t++)if(H=m[M.children_d[t]],!H.state.loaded&&H.original&&H.original.state&&H.original.state.undetermined&&H.original.state.undetermined===!0)for(f[H.id]===$&&H.id!==a.jstree.root&&(f[H.id]=!0,k.push(H.id)),l=0,c=H.parents.length;c>l;l++)f[H.parents[l]]===$&&H.parents[l]!==a.jstree.root&&(f[H.parents[l]]=!0,k.push(H.parents[l]))}else if(M.original&&M.original.state&&M.original.state.undetermined&&M.original.state.undetermined===!0)for(f[M.id]===$&&M.id!==a.jstree.root&&(f[M.id]=!0,k.push(M.id)),l=0,c=M.parents.length;c>l;l++)f[M.parents[l]]===$&&M.parents[l]!==a.jstree.root&&(f[M.parents[l]]=!0,k.push(M.parents[l]))}}),t=0,o=k.length;o>t;t++)m[k[t]].state[p?"selected":"checked"]||P.push(r?m[k[t]]:k[t]);return P},this._undetermined=function(){if(this.element!==null){var r=this.get_undetermined(!1),t,o,l;for(this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),t=0,o=r.length;o>t;t++)l=this.get_node(r[t],!0),l&&l.length&&l.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined")}},this.redraw_node=function(r,t,o,l){if(r=s.redraw_node.apply(this,arguments)){var c,f,m=null,p=null;for(c=0,f=r.childNodes.length;f>c;c++)if(r.childNodes[c]&&r.childNodes[c].className&&r.childNodes[c].className.indexOf("jstree-anchor")!==-1){m=r.childNodes[c];break}m&&(!this.settings.checkbox.tie_selection&&this._model.data[r.id].state.checked&&(m.className+=" jstree-checked"),p=nt.cloneNode(!1),this._model.data[r.id].state.checkbox_disabled&&(p.className+=" jstree-checkbox-disabled"),m.insertBefore(p,m.childNodes[0]))}return o||this.settings.checkbox.cascade.indexOf("undetermined")===-1||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(a.proxy(this._undetermined,this),50)),r},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(r){r=this.get_node(r);var t=this.settings.checkbox.cascade,o,l,c=this.settings.checkbox.tie_selection,f=this._data[c?"core":"checkbox"].selected,m=this._model.data;if(!r||r.state[c?"selected":"checked"]===!0||t.indexOf("undetermined")===-1||t.indexOf("down")===-1&&t.indexOf("up")===-1)return!1;if(!r.state.loaded&&r.original.state.undetermined===!0)return!0;for(o=0,l=r.children_d.length;l>o;o++)if(a.inArray(r.children_d[o],f)!==-1||!m[r.children_d[o]].state.loaded&&m[r.children_d[o]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(r){var t,o,l;if(a.isArray(r)){for(r=r.slice(),t=0,o=r.length;o>t;t++)this.disable_checkbox(r[t]);return!0}return r=this.get_node(r),r&&r.id!==a.jstree.root?(l=this.get_node(r,!0),void(r.state.checkbox_disabled||(r.state.checkbox_disabled=!0,l&&l.length&&l.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:r})))):!1},this.enable_checkbox=function(r){var t,o,l;if(a.isArray(r)){for(r=r.slice(),t=0,o=r.length;o>t;t++)this.enable_checkbox(r[t]);return!0}return r=this.get_node(r),r&&r.id!==a.jstree.root?(l=this.get_node(r,!0),void(r.state.checkbox_disabled&&(r.state.checkbox_disabled=!1,l&&l.length&&l.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:r})))):!1},this.activate_node=function(r,t){return a(t.target).hasClass("jstree-checkbox-disabled")?!1:(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||a(t.target).hasClass("jstree-checkbox"))&&(t.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!a(t.target).hasClass("jstree-checkbox")?s.activate_node.call(this,r,t):this.is_disabled(r)?!1:(this.is_checked(r)?this.uncheck_node(r,t):this.check_node(r,t),void this.trigger("activate_node",{node:this.get_node(r)})))},this._cascade_new_checked_state=function(r,t){var o=this,l=this.settings.checkbox.tie_selection,c=this._model.data[r],f=[],m=[],p,v,k;if(!this.settings.checkbox.cascade_to_disabled&&c.state.disabled||!this.settings.checkbox.cascade_to_hidden&&c.state.hidden)k=this.get_checked_descendants(r),c.state[l?"selected":"checked"]&&k.push(c.id),f=f.concat(k);else{if(c.children)for(p=0,v=c.children.length;v>p;p++){var T=c.children[p];k=o._cascade_new_checked_state(T,t),f=f.concat(k),k.indexOf(T)>-1&&m.push(T)}var P=o.get_node(c,!0),M=m.length>0&&m.length<c.children.length;c.original&&c.original.state&&c.original.state.undetermined&&(c.original.state.undetermined=M),M?(c.state[l?"selected":"checked"]=!1,P.attr("aria-selected",!1).children(".jstree-anchor").removeClass(l?"jstree-clicked":"jstree-checked")):t&&m.length===c.children.length?(c.state[l?"selected":"checked"]=t,f.push(c.id),P.attr("aria-selected",!0).children(".jstree-anchor").addClass(l?"jstree-clicked":"jstree-checked")):(c.state[l?"selected":"checked"]=!1,P.attr("aria-selected",!1).children(".jstree-anchor").removeClass(l?"jstree-clicked":"jstree-checked"))}return f},this.get_checked_descendants=function(r){var t=this,o=t.settings.checkbox.tie_selection,l=t._model.data[r];return a.vakata.array_filter(l.children_d,function(c){return t._model.data[c].state[o?"selected":"checked"]})},this.check_node=function(r,t){if(this.settings.checkbox.tie_selection)return this.select_node(r,!1,!0,t);var o,l,c;if(a.isArray(r)){for(r=r.slice(),l=0,c=r.length;c>l;l++)this.check_node(r[l],t);return!0}return r=this.get_node(r),r&&r.id!==a.jstree.root?(o=this.get_node(r,!0),void(r.state.checked||(r.state.checked=!0,this._data.checkbox.selected.push(r.id),o&&o.length&&o.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:r,selected:this._data.checkbox.selected,event:t})))):!1},this.uncheck_node=function(r,t){if(this.settings.checkbox.tie_selection)return this.deselect_node(r,!1,t);var o,l,c;if(a.isArray(r)){for(r=r.slice(),o=0,l=r.length;l>o;o++)this.uncheck_node(r[o],t);return!0}return r=this.get_node(r),r&&r.id!==a.jstree.root?(c=this.get_node(r,!0),void(r.state.checked&&(r.state.checked=!1,this._data.checkbox.selected=a.vakata.array_remove_item(this._data.checkbox.selected,r.id),c.length&&c.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:r,selected:this._data.checkbox.selected,event:t})))):!1},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();this._data.checkbox.selected.concat([]);var r,t;for(this._data.checkbox.selected=this._model.data[a.jstree.root].children_d.concat(),r=0,t=this._data.checkbox.selected.length;t>r;r++)this._model.data[this._data.checkbox.selected[r]]&&(this._model.data[this._data.checkbox.selected[r]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var r=this._data.checkbox.selected.concat([]),t,o;for(t=0,o=this._data.checkbox.selected.length;o>t;t++)this._model.data[this._data.checkbox.selected[t]]&&(this._model.data[this._data.checkbox.selected[t]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:r})},this.is_checked=function(r){return this.settings.checkbox.tie_selection?this.is_selected(r):(r=this.get_node(r),r&&r.id!==a.jstree.root?r.state.checked:!1)},this.get_checked=function(r){return this.settings.checkbox.tie_selection?this.get_selected(r):r?a.map(this._data.checkbox.selected,a.proxy(function(t){return this.get_node(t)},this)):this._data.checkbox.selected.slice()},this.get_top_checked=function(r){if(this.settings.checkbox.tie_selection)return this.get_top_selected(r);var t=this.get_checked(!0),o={},l,c,f,m;for(l=0,c=t.length;c>l;l++)o[t[l].id]=t[l];for(l=0,c=t.length;c>l;l++)for(f=0,m=t[l].children_d.length;m>f;f++)o[t[l].children_d[f]]&&delete o[t[l].children_d[f]];t=[];for(l in o)o.hasOwnProperty(l)&&t.push(l);return r?a.map(t,a.proxy(function(p){return this.get_node(p)},this)):t},this.get_bottom_checked=function(r){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(r);var t=this.get_checked(!0),o=[],l,c;for(l=0,c=t.length;c>l;l++)t[l].children.length||o.push(t[l].id);return r?a.map(o,a.proxy(function(f){return this.get_node(f)},this)):o},this.load_node=function(r,t){var o,l,c;if(!a.isArray(r)&&!this.settings.checkbox.tie_selection&&(c=this.get_node(r),c&&c.state.loaded))for(o=0,l=c.children_d.length;l>o;o++)this._model.data[c.children_d[o]].state.checked&&(this._data.checkbox.selected=a.vakata.array_remove_item(this._data.checkbox.selected,c.children_d[o]));return s.load_node.apply(this,arguments)},this.get_state=function(){var r=s.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection||(r.checkbox=this._data.checkbox.selected.slice()),r},this.set_state=function(r,t){var o=s.set_state.apply(this,arguments);if(o&&r.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var l=this;a.each(r.checkbox,function(c,f){l.check_node(f)})}return delete r.checkbox,this.set_state(r,t),!1}return o},this.refresh=function(r,t){return this.settings.checkbox.tie_selection&&(this._data.checkbox.selected=[]),s.refresh.apply(this,arguments)}},a.jstree.defaults.conditionalselect=function(){return!0},a.jstree.plugins.conditionalselect=function(e,s){this.activate_node=function(r,t){return this.settings.conditionalselect.call(this,this.get_node(r),t)?s.activate_node.call(this,r,t):void 0}},a.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(e,s){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(r){var t=a.jstree.reference(r.reference),o=t.get_node(r.reference);t.create_node(o,{},"last",function(l){try{t.edit(l)}catch{setTimeout(function(){t.edit(l)},0)}})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(r){var t=a.jstree.reference(r.reference),o=t.get_node(r.reference);t.edit(o)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(r){var t=a.jstree.reference(r.reference),o=t.get_node(r.reference);t.is_selected(o)?t.delete_node(t.get_selected()):t.delete_node(o)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(r){var t=a.jstree.reference(r.reference),o=t.get_node(r.reference);t.is_selected(o)?t.cut(t.get_top_selected()):t.cut(o)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(r){var t=a.jstree.reference(r.reference),o=t.get_node(r.reference);t.is_selected(o)?t.copy(t.get_top_selected()):t.copy(o)}},paste:{separator_before:!1,icon:!1,_disabled:function(r){return!a.jstree.reference(r.reference).can_paste()},separator_after:!1,label:"Paste",action:function(r){var t=a.jstree.reference(r.reference),o=t.get_node(r.reference);t.paste(o)}}}}}}},a.jstree.plugins.contextmenu=function(e,s){this.bind=function(){s.bind.call(this);var r=0,t=null,o,l;this.element.on("init.jstree loading.jstree ready.jstree",a.proxy(function(){this.get_container_ul().addClass("jstree-contextmenu")},this)).on("contextmenu.jstree",".jstree-anchor",a.proxy(function(c,f){c.target.tagName.toLowerCase()!=="input"&&(c.preventDefault(),r=c.ctrlKey?+new Date:0,(f||t)&&(r=+new Date+1e4),t&&clearTimeout(t),this.is_loading(c.currentTarget)||this.show_contextmenu(c.currentTarget,c.pageX,c.pageY,c))},this)).on("click.jstree",".jstree-anchor",a.proxy(function(c){this._data.contextmenu.visible&&(!r||+new Date-r>250)&&a.vakata.context.hide(),r=0},this)).on("touchstart.jstree",".jstree-anchor",function(c){c.originalEvent&&c.originalEvent.changedTouches&&c.originalEvent.changedTouches[0]&&(o=c.originalEvent.changedTouches[0].clientX,l=c.originalEvent.changedTouches[0].clientY,t=setTimeout(function(){a(c.currentTarget).trigger("contextmenu",!0)},750))}).on("touchmove.vakata.jstree",function(c){t&&c.originalEvent&&c.originalEvent.changedTouches&&c.originalEvent.changedTouches[0]&&(Math.abs(o-c.originalEvent.changedTouches[0].clientX)>10||Math.abs(l-c.originalEvent.changedTouches[0].clientY)>10)&&(clearTimeout(t),a.vakata.context.hide())}).on("touchend.vakata.jstree",function(c){t&&clearTimeout(t)}),a(fe).on("context_hide.vakata.jstree",a.proxy(function(c,f){this._data.contextmenu.visible=!1,a(f.reference).removeClass("jstree-context")},this))},this.teardown=function(){this._data.contextmenu.visible&&a.vakata.context.hide(),s.teardown.call(this)},this.show_contextmenu=function(r,t,o,l){if(r=this.get_node(r),!r||r.id===a.jstree.root)return!1;var c=this.settings.contextmenu,f=this.get_node(r,!0),m=f.children(".jstree-anchor"),p=!1,v=!1;(c.show_at_node||t===$||o===$)&&(p=m.offset(),t=p.left,o=p.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(r)&&this.activate_node(r,l),v=c.items,a.isFunction(v)&&(v=v.call(this,r,a.proxy(function(k){this._show_contextmenu(r,t,o,k)},this))),a.isPlainObject(v)&&this._show_contextmenu(r,t,o,v)},this._show_contextmenu=function(r,t,o,l){var c=this.get_node(r,!0),f=c.children(".jstree-anchor");a(fe).one("context_show.vakata.jstree",a.proxy(function(m,p){var v="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";a(p.element).addClass(v),f.addClass("jstree-context")},this)),this._data.contextmenu.visible=!0,a.vakata.context.show(f,{x:t,y:o},l),this.trigger("show_contextmenu",{node:r,x:t,y:o})}},function(e){var s=!1,r={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};e.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(t){e(fe).triggerHandler("context_"+t+".vakata",{reference:r.reference,element:r.element,position:{x:r.position_x,y:r.position_y}})},_execute:function(t){return t=r.items[t],t&&(!t._disabled||e.isFunction(t._disabled)&&!t._disabled({item:t,reference:r.reference,element:r.element}))&&t.action?t.action.call(null,{item:t,reference:r.reference,element:r.element,position:{x:r.position_x,y:r.position_y}}):!1},_parse:function(t,o){if(!t)return!1;o||(r.html="",r.items=[]);var l="",c=!1,f;return o&&(l+="<ul>"),e.each(t,function(m,p){return p?(r.items.push(p),!c&&p.separator_before&&(l+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>"),c=!1,l+="<li class='"+(p._class||"")+(p._disabled===!0||e.isFunction(p._disabled)&&p._disabled({item:p,reference:r.reference,element:r.element})?" vakata-contextmenu-disabled ":"")+"' "+(p.shortcut?" data-shortcut='"+p.shortcut+"' ":"")+">",l+="<a href='#' rel='"+(r.items.length-1)+"' "+(p.title?"title='"+p.title+"'":"")+">",e.vakata.context.settings.icons&&(l+="<i ",p.icon&&(l+=p.icon.indexOf("/")!==-1||p.icon.indexOf(".")!==-1?` style='background:url("`+p.icon+`") center center no-repeat' `:" class='"+p.icon+"' "),l+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),l+=(e.isFunction(p.label)?p.label({item:m,reference:r.reference,element:r.element}):p.label)+(p.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+p.shortcut+'">'+(p.shortcut_label||"")+"</span>":"")+"</a>",p.submenu&&(f=e.vakata.context._parse(p.submenu,!0),f&&(l+=f)),l+="</li>",void(p.separator_after&&(l+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>",c=!0))):!0}),l=l.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),o&&(l+="</ul>"),o||(r.html=l,e.vakata.context._trigger("parse")),l.length>10?l:!1},_show_submenu:function(t){if(t=e(t),t.length&&t.children("ul").length){var o=t.children("ul"),l=t.offset().left,c=l+t.outerWidth(),f=t.offset().top,m=o.width(),p=o.height(),v=e(window).width()+e(window).scrollLeft(),k=e(window).height()+e(window).scrollTop();s?t[c-(m+10+t.outerWidth())<0?"addClass":"removeClass"]("vakata-context-left"):t[c+m>v&&l>v-c?"addClass":"removeClass"]("vakata-context-right"),f+p+10>k&&o.css("bottom","-1px"),t.hasClass("vakata-context-right")?m>l&&o.css("margin-right",l-m):m>v-c&&o.css("margin-left",v-c-m),o.show()}},show:function(t,o,l){var c,f,m,p,v,k,T,P,M=!0;switch(r.element&&r.element.length&&r.element.width(""),M){case(!o&&!t):return!1;case(!!o&&!!t):r.reference=t,r.position_x=o.x,r.position_y=o.y;break;case(!o&&!!t):r.reference=t,c=t.offset(),r.position_x=c.left+t.outerHeight(),r.position_y=c.top;break;case(!!o&&!t):r.position_x=o.x,r.position_y=o.y}t&&!l&&e(t).data("vakata_contextmenu")&&(l=e(t).data("vakata_contextmenu")),e.vakata.context._parse(l)&&r.element.html(r.html),r.items.length&&(r.element.appendTo(fe.body),f=r.element,m=r.position_x,p=r.position_y,v=f.width(),k=f.height(),T=e(window).width()+e(window).scrollLeft(),P=e(window).height()+e(window).scrollTop(),s&&(m-=f.outerWidth()-e(t).outerWidth(),m<e(window).scrollLeft()+20&&(m=e(window).scrollLeft()+20)),m+v+20>T&&(m=T-(v+20)),p+k+20>P&&(p=P-(k+20)),r.element.css({left:m,top:p}).show().find("a").first().focus().parent().addClass("vakata-context-hover"),r.is_visible=!0,e.vakata.context._trigger("show"))},hide:function(){r.is_visible&&(r.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(),r.is_visible=!1,e.vakata.context._trigger("hide"))}},e(function(){s=e(fe.body).css("direction")==="rtl";var t=!1;r.element=e("<ul class='vakata-context'></ul>"),r.element.on("mouseenter","li",function(o){o.stopImmediatePropagation(),e.contains(this,o.relatedTarget)||(t&&clearTimeout(t),r.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),e(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),e.vakata.context._show_submenu(this))}).on("mouseleave","li",function(o){e.contains(this,o.relatedTarget)||e(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(o){e(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),e.vakata.context.settings.hide_onmouseleave&&(t=setTimeout(function(l){return function(){e.vakata.context.hide()}}(),e.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(o){o.preventDefault(),e(this).blur().parent().hasClass("vakata-context-disabled")||e.vakata.context._execute(e(this).attr("rel"))===!1||e.vakata.context.hide()}).on("keydown","a",function(o){var l=null;switch(o.which){case 13:case 32:o.type="click",o.preventDefault(),e(o.currentTarget).trigger(o);break;case 37:r.is_visible&&(r.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),o.stopImmediatePropagation(),o.preventDefault());break;case 38:r.is_visible&&(l=r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),l.length||(l=r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),l.addClass("vakata-context-hover").children("a").focus(),o.stopImmediatePropagation(),o.preventDefault());break;case 39:r.is_visible&&(r.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),o.stopImmediatePropagation(),o.preventDefault());break;case 40:r.is_visible&&(l=r.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),l.length||(l=r.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),l.addClass("vakata-context-hover").children("a").focus(),o.stopImmediatePropagation(),o.preventDefault());break;case 27:e.vakata.context.hide(),o.preventDefault()}}).on("keydown",function(o){o.preventDefault();var l=r.element.find(".vakata-contextmenu-shortcut-"+o.which).parent();l.parent().not(".vakata-context-disabled")&&l.click()}),e(fe).on("mousedown.vakata.jstree",function(o){r.is_visible&&r.element[0]!==o.target&&!e.contains(r.element[0],o.target)&&e.vakata.context.hide()}).on("context_show.vakata.jstree",function(o,l){r.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),s&&r.element.addClass("vakata-context-rtl").css("direction","rtl"),r.element.find("ul").hide().end()})})}(a),a.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1};var Y,ee;a.jstree.plugins.dnd=function(e,s){this.init=function(r,t){s.init.call(this,r,t),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in fe.createElement("span")},this.bind=function(){s.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",a.proxy(function(r){if(this.settings.dnd.large_drag_target&&a(r.target).closest(".jstree-node")[0]!==r.currentTarget||r.type==="touchstart"&&(!this.settings.dnd.touch||this.settings.dnd.touch==="selected"&&!a(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var t=this.get_node(r.target),o=this.is_selected(t)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,l=o>1?o+" "+this.get_string("nodes"):this.get_text(r.currentTarget);if(this.settings.core.force_text&&(l=a.vakata.html.escape(l)),t&&t.id&&t.id!==a.jstree.root&&(r.which===1||r.type==="touchstart"||r.type==="dragstart")&&(this.settings.dnd.is_draggable===!0||a.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,o>1?this.get_top_selected(!0):[t],r))){if(Y={jstree:!0,origin:this,obj:this.get_node(t,!0),nodes:o>1?this.get_top_selected():[t.id]},ee=r.currentTarget,!this.settings.dnd.use_html5)return this.element.trigger("mousedown.jstree"),a.vakata.dnd.start(r,Y,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+l+'<ins class="jstree-copy" style="display:none;">+</ins></div>');a.vakata.dnd._trigger("start",r,{helper:a(),element:ee,data:Y})}},this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(r){return r.preventDefault(),a.vakata.dnd._trigger("move",r,{helper:a(),element:ee,data:Y}),!1}).on("drop.jstree",a.proxy(function(r){return r.preventDefault(),a.vakata.dnd._trigger("stop",r,{helper:a(),element:ee,data:Y}),!1},this))},this.redraw_node=function(r,t,o,l){if(r=s.redraw_node.apply(this,arguments),r&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)r.setAttribute("draggable",!0);else{var c,f,m=null;for(c=0,f=r.childNodes.length;f>c;c++)if(r.childNodes[c]&&r.childNodes[c].className&&r.childNodes[c].className.indexOf("jstree-anchor")!==-1){m=r.childNodes[c];break}m&&m.setAttribute("draggable",!0)}return r}},a(function(){var e=!1,s=!1,r=!1,t=!1,o=a('<div id="jstree-marker">&#160;</div>').hide();a(fe).on("dragover.vakata.jstree",function(l){ee&&a.vakata.dnd._trigger("move",l,{helper:a(),element:ee,data:Y})}).on("drop.vakata.jstree",function(l){ee&&(a.vakata.dnd._trigger("stop",l,{helper:a(),element:ee,data:Y}),ee=null,Y=null)}).on("dnd_start.vakata.jstree",function(l,c){e=!1,r=!1,c&&c.data&&c.data.jstree&&o.appendTo(fe.body)}).on("dnd_move.vakata.jstree",function(l,c){var f=c.event.target!==r.target;if(t&&(!c.event||c.event.type!=="dragover"||f)&&clearTimeout(t),c&&c.data&&c.data.jstree&&(!c.event.target.id||c.event.target.id!=="jstree-marker")){r=c.event;var m=a.jstree.reference(c.event.target),p=!1,v=!1,k=!1,T,P,M,H,F,ye,be,_e,Ce,et,Xe,w,K,A,X,re,L;if(m&&m._data&&m._data.dnd)if(o.attr("class","jstree-"+m.get_theme()+(m.settings.core.themes.responsive?" jstree-dnd-responsive":"")),X=c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey)),c.helper.children().attr("class","jstree-"+m.get_theme()+" jstree-"+m.get_theme()+"-"+m.get_theme_variant()+" "+(m.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[X?"show":"hide"](),c.event.target!==m.element[0]&&c.event.target!==m.get_container_ul()[0]||m.get_container_ul().children().length!==0){if(p=m.settings.dnd.large_drop_target?a(c.event.target).closest(".jstree-node").children(".jstree-anchor"):a(c.event.target).closest(".jstree-anchor"),p&&p.length&&p.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(v=p.offset(),k=(c.event.pageY!==$?c.event.pageY:c.event.originalEvent.pageY)-v.top,M=p.outerHeight(),ye=M/3>k?["b","i","a"]:k>M-M/3?["a","i","b"]:k>M/2?["i","a","b"]:["i","b","a"],a.each(ye,function(ke,xe){switch(xe){case"b":T=v.left-6,P=v.top,H=m.get_parent(p),F=p.parent().index(),L="jstree-below";break;case"i":K=m.settings.dnd.inside_pos,A=m.get_node(p.parent()),T=v.left-2,P=v.top+M/2+1,H=A.id,F=K==="first"?0:K==="last"?A.children.length:Math.min(K,A.children.length),L="jstree-inside";break;case"a":T=v.left-6,P=v.top+M,H=m.get_parent(p),F=p.parent().index()+1,L="jstree-above"}for(be=!0,_e=0,Ce=c.data.nodes.length;Ce>_e;_e++)if(et=c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey))?"copy_node":"move_node",Xe=F,et==="move_node"&&xe==="a"&&c.data.origin&&c.data.origin===m&&H===m.get_parent(c.data.nodes[_e])&&(w=m.get_node(H),Xe>a.inArray(c.data.nodes[_e],w.children)&&(Xe-=1)),be=be&&(m&&m.settings&&m.settings.dnd&&m.settings.dnd.check_while_dragging===!1||m.check(et,c.data.origin&&c.data.origin!==m?c.data.origin.get_node(c.data.nodes[_e]):c.data.nodes[_e],H,Xe,{dnd:!0,ref:m.get_node(p.parent()),pos:xe,origin:c.data.origin,is_multi:c.data.origin&&c.data.origin!==m,is_foreign:!c.data.origin})),!be){m&&m.last_error&&(s=m.last_error());break}return xe==="i"&&p.parent().is(".jstree-closed")&&m.settings.dnd.open_timeout&&(!c.event||c.event.type!=="dragover"||f)&&(t&&clearTimeout(t),t=setTimeout(function(ae,oe){return function(){ae.open_node(oe)}}(m,p),m.settings.dnd.open_timeout)),be?(re=m.get_node(H,!0),re.hasClass(".jstree-dnd-parent")||(a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),re.addClass("jstree-dnd-parent")),e={ins:m,par:H,pos:xe!=="i"||K!=="last"||F!==0||m.is_loaded(A)?F:"last"},o.css({left:T+"px",top:P+"px"}).show(),o.removeClass("jstree-above jstree-inside jstree-below").addClass(L),c.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),c.event.originalEvent&&c.event.originalEvent.dataTransfer&&(c.event.originalEvent.dataTransfer.dropEffect=X?"copy":"move"),s={},ye=!0,!1):void 0}),ye===!0))return}else{for(be=!0,_e=0,Ce=c.data.nodes.length;Ce>_e&&(be=be&&m.check(c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey))?"copy_node":"move_node",c.data.origin&&c.data.origin!==m?c.data.origin.get_node(c.data.nodes[_e]):c.data.nodes[_e],a.jstree.root,"last",{dnd:!0,ref:m.get_node(a.jstree.root),pos:"i",origin:c.data.origin,is_multi:c.data.origin&&c.data.origin!==m,is_foreign:!c.data.origin}),!!be);_e++);if(be)return e={ins:m,par:a.jstree.root,pos:"last"},o.hide(),c.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),void(c.event.originalEvent&&c.event.originalEvent.dataTransfer&&(c.event.originalEvent.dataTransfer.dropEffect=X?"copy":"move"))}a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),e=!1,c.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),c.event.originalEvent&&c.event.originalEvent.dataTransfer,o.hide()}}).on("dnd_scroll.vakata.jstree",function(l,c){c&&c.data&&c.data.jstree&&(o.hide(),e=!1,r=!1,c.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(l,c){if(a(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),t&&clearTimeout(t),c&&c.data&&c.data.jstree){o.hide().detach();var f,m,p=[];if(e){for(f=0,m=c.data.nodes.length;m>f;f++)p[f]=c.data.origin?c.data.origin.get_node(c.data.nodes[f]):c.data.nodes[f];e.ins[c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(c.event.metaKey||c.event.ctrlKey))?"copy_node":"move_node"](p,e.par,e.pos,!1,!1,!1,c.data.origin)}else f=a(c.event.target).closest(".jstree"),f.length&&s&&s.error&&s.error==="check"&&(f=f.jstree(!0),f&&f.settings.core.error.call(this,s));r=!1,e=!1}}).on("keyup.jstree keydown.jstree",function(l,c){c=a.vakata.dnd._get(),c&&c.data&&c.data.jstree&&(l.type==="keyup"&&l.which===27?(t&&clearTimeout(t),e=!1,s=!1,r=!1,t=!1,o.hide().detach(),a.vakata.dnd._clean()):(c.helper.find(".jstree-copy").first()[c.data.origin&&(c.data.origin.settings.dnd.always_copy||c.data.origin.settings.dnd.copy&&(l.metaKey||l.ctrlKey))?"show":"hide"](),r&&(r.metaKey=l.metaKey,r.ctrlKey=l.ctrlKey,a.vakata.dnd._trigger("move",r))))})}),function(e){e.vakata.html={div:e("<div></div>"),escape:function(r){return e.vakata.html.div.text(r).html()},strip:function(r){return e.vakata.html.div.empty().append(e.parseHTML(r)).text()}};var s={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};e.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:10},_trigger:function(r,t,o){o===$&&(o=e.vakata.dnd._get()),o.event=t,e(fe).triggerHandler("dnd_"+r+".vakata",o)},_get:function(){return{data:s.data,element:s.element,helper:s.helper}},_clean:function(){s.helper&&s.helper.remove(),s.scroll_i&&(clearInterval(s.scroll_i),s.scroll_i=!1),s={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},ee=null,e(fe).off("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(fe).off("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop)},_scroll:function(r){if(!s.scroll_e||!s.scroll_l&&!s.scroll_t)return s.scroll_i&&(clearInterval(s.scroll_i),s.scroll_i=!1),!1;if(!s.scroll_i)return s.scroll_i=setInterval(e.vakata.dnd._scroll,100),!1;if(r===!0)return!1;var t=s.scroll_e.scrollTop(),o=s.scroll_e.scrollLeft();s.scroll_e.scrollTop(t+s.scroll_t*e.vakata.dnd.settings.scroll_speed),s.scroll_e.scrollLeft(o+s.scroll_l*e.vakata.dnd.settings.scroll_speed),(t!==s.scroll_e.scrollTop()||o!==s.scroll_e.scrollLeft())&&e.vakata.dnd._trigger("scroll",s.scroll_e)},start:function(r,t,o){r.type==="touchstart"&&r.originalEvent&&r.originalEvent.changedTouches&&r.originalEvent.changedTouches[0]&&(r.pageX=r.originalEvent.changedTouches[0].pageX,r.pageY=r.originalEvent.changedTouches[0].pageY,r.target=fe.elementFromPoint(r.originalEvent.changedTouches[0].pageX-window.pageXOffset,r.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_drag&&e.vakata.dnd.stop({});try{r.currentTarget.unselectable="on",r.currentTarget.onselectstart=function(){return!1},r.currentTarget.style&&(r.currentTarget.style.touchAction="none",r.currentTarget.style.msTouchAction="none",r.currentTarget.style.MozUserSelect="none")}catch{}return s.init_x=r.pageX,s.init_y=r.pageY,s.data=t,s.is_down=!0,s.element=r.currentTarget,s.target=r.target,s.is_touch=r.type==="touchstart",o!==!1&&(s.helper=e("<div id='vakata-dnd'></div>").html(o).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),e(fe).on("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(fe).on("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop),!1},drag:function(r){if(r.type==="touchmove"&&r.originalEvent&&r.originalEvent.changedTouches&&r.originalEvent.changedTouches[0]&&(r.pageX=r.originalEvent.changedTouches[0].pageX,r.pageY=r.originalEvent.changedTouches[0].pageY,r.target=fe.elementFromPoint(r.originalEvent.changedTouches[0].pageX-window.pageXOffset,r.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_down){if(!s.is_drag){if(!(Math.abs(r.pageX-s.init_x)>(s.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)||Math.abs(r.pageY-s.init_y)>(s.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)))return;s.helper&&(s.helper.appendTo(fe.body),s.helper_w=s.helper.outerWidth()),s.is_drag=!0,e(s.target).one("click.vakata",!1),e.vakata.dnd._trigger("start",r)}var t=!1,o=!1,l=!1,c=!1,f=!1,m=!1,p=!1,v=!1,k=!1,T=!1;return s.scroll_t=0,s.scroll_l=0,s.scroll_e=!1,e(e(r.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(e(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var P=e(this),M=P.offset();return this.scrollHeight>this.offsetHeight&&(M.top+P.height()-r.pageY<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=1),r.pageY-M.top<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(M.left+P.width()-r.pageX<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=1),r.pageX-M.left<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=-1)),s.scroll_t||s.scroll_l?(s.scroll_e=e(this),!1):void 0}),s.scroll_e||(t=e(fe),o=e(window),l=t.height(),c=o.height(),f=t.width(),m=o.width(),p=t.scrollTop(),v=t.scrollLeft(),l>c&&r.pageY-p<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=-1),l>c&&c-(r.pageY-p)<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=1),f>m&&r.pageX-v<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=-1),f>m&&m-(r.pageX-v)<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=1),(s.scroll_t||s.scroll_l)&&(s.scroll_e=t)),s.scroll_e&&e.vakata.dnd._scroll(!0),s.helper&&(k=parseInt(r.pageY+e.vakata.dnd.settings.helper_top,10),T=parseInt(r.pageX+e.vakata.dnd.settings.helper_left,10),l&&k+25>l&&(k=l-50),f&&T+s.helper_w>f&&(T=f-(s.helper_w+2)),s.helper.css({left:T+"px",top:k+"px"})),e.vakata.dnd._trigger("move",r),!1}},stop:function(r){if(r.type==="touchend"&&r.originalEvent&&r.originalEvent.changedTouches&&r.originalEvent.changedTouches[0]&&(r.pageX=r.originalEvent.changedTouches[0].pageX,r.pageY=r.originalEvent.changedTouches[0].pageY,r.target=fe.elementFromPoint(r.originalEvent.changedTouches[0].pageX-window.pageXOffset,r.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_drag)r.target!==s.target&&e(s.target).off("click.vakata"),e.vakata.dnd._trigger("stop",r);else if(r.type==="touchend"&&r.target===s.target){var t=setTimeout(function(){e(r.target).click()},100);e(r.target).one("click",function(){t&&clearTimeout(t)})}return e.vakata.dnd._clean(),!1}}}(a),a.jstree.defaults.massload=null,a.jstree.plugins.massload=function(e,s){this.init=function(r,t){this._data.massload={},s.init.call(this,r,t)},this._load_nodes=function(r,t,o,l){var c=this.settings.massload,f=[],m=this._model.data,p,v,k;if(!o){for(p=0,v=r.length;v>p;p++)(!m[r[p]]||!m[r[p]].state.loaded&&!m[r[p]].state.failed||l)&&(f.push(r[p]),k=this.get_node(r[p],!0),k&&k.length&&k.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},f.length){if(a.isFunction(c))return c.call(this,f,a.proxy(function(T){var P,M;if(T)for(P in T)T.hasOwnProperty(P)&&(this._data.massload[P]=T[P]);for(P=0,M=r.length;M>P;P++)k=this.get_node(r[P],!0),k&&k.length&&k.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,r,t,o,l)},this));if(typeof c=="object"&&c&&c.url)return c=a.extend(!0,{},c),a.isFunction(c.url)&&(c.url=c.url.call(this,f)),a.isFunction(c.data)&&(c.data=c.data.call(this,f)),a.ajax(c).done(a.proxy(function(T,P,M){var H,F;if(T)for(H in T)T.hasOwnProperty(H)&&(this._data.massload[H]=T[H]);for(H=0,F=r.length;F>H;H++)k=this.get_node(r[H],!0),k&&k.length&&k.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,r,t,o,l)},this)).fail(a.proxy(function(T){s._load_nodes.call(this,r,t,o,l)},this))}}return s._load_nodes.call(this,r,t,o,l)},this._load_node=function(r,t){var o=this._data.massload[r.id],l=null,c;return o?(l=this[typeof o=="string"?"_append_html_data":"_append_json_data"](r,typeof o=="string"?a(a.parseHTML(o)).filter(function(){return this.nodeType!==3}):o,function(f){t.call(this,f)}),c=this.get_node(r.id,!0),c&&c.length&&c.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[r.id],l):s._load_node.call(this,r,t)}},a.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,show_only_matches_children:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},a.jstree.plugins.search=function(e,s){this.bind=function(){s.bind.call(this),this._data.search.str="",this._data.search.dom=a(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=!1,this._data.search.smc=!1,this._data.search.hdn=[],this.element.on("search.jstree",a.proxy(function(r,t){if(this._data.search.som&&t.res.length){var o=this._model.data,l,c,f=[],m,p;for(l=0,c=t.res.length;c>l;l++)if(o[t.res[l]]&&!o[t.res[l]].state.hidden&&(f.push(t.res[l]),f=f.concat(o[t.res[l]].parents),this._data.search.smc))for(m=0,p=o[t.res[l]].children_d.length;p>m;m++)o[o[t.res[l]].children_d[m]]&&!o[o[t.res[l]].children_d[m]].state.hidden&&f.push(o[t.res[l]].children_d[m]);f=a.vakata.array_remove_item(a.vakata.array_unique(f),a.jstree.root),this._data.search.hdn=this.hide_all(!0),this.show_node(f,!0),this.redraw(!0)}},this)).on("clear_search.jstree",a.proxy(function(r,t){this._data.search.som&&t.res.length&&(this.show_node(this._data.search.hdn,!0),this.redraw(!0))},this))},this.search=function(r,t,o,l,c,f){if(r===!1||a.vakata.trim(r.toString())==="")return this.clear_search();l=this.get_node(l),l=l&&l.id?l.id:null,r=r.toString();var m=this.settings.search,p=m.ajax?m.ajax:!1,v=this._model.data,k=null,T=[],P=[],M,H;if(this._data.search.res.length&&!c&&this.clear_search(),o===$&&(o=m.show_only_matches),f===$&&(f=m.show_only_matches_children),!t&&p!==!1)return a.isFunction(p)?p.call(this,r,a.proxy(function(F){F&&F.d&&(F=F.d),this._load_nodes(a.isArray(F)?a.vakata.array_unique(F):[],function(){this.search(r,!0,o,l,c,f)})},this),l):(p=a.extend({},p),p.data||(p.data={}),p.data.str=r,l&&(p.data.inside=l),this._data.search.lastRequest&&this._data.search.lastRequest.abort(),this._data.search.lastRequest=a.ajax(p).fail(a.proxy(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(p)},this.settings.core.error.call(this,this._data.core.last_error)},this)).done(a.proxy(function(F){F&&F.d&&(F=F.d),this._load_nodes(a.isArray(F)?a.vakata.array_unique(F):[],function(){this.search(r,!0,o,l,c,f)})},this)),this._data.search.lastRequest);if(c||(this._data.search.str=r,this._data.search.dom=a(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=o,this._data.search.smc=f),k=new a.vakata.search(r,!0,{caseSensitive:m.case_sensitive,fuzzy:m.fuzzy}),a.each(v[l||a.jstree.root].children_d,function(F,ye){var be=v[ye];be.text&&!be.state.hidden&&(!m.search_leaves_only||be.state.loaded&&be.children.length===0)&&(m.search_callback&&m.search_callback.call(this,r,be)||!m.search_callback&&k.search(be.text).isMatch)&&(T.push(ye),P=P.concat(be.parents))}),T.length){for(P=a.vakata.array_unique(P),M=0,H=P.length;H>M;M++)P[M]!==a.jstree.root&&v[P[M]]&&this.open_node(P[M],null,0)===!0&&this._data.search.opn.push(P[M]);c?(this._data.search.dom=this._data.search.dom.add(a(this.element[0].querySelectorAll("#"+a.map(T,function(F){return"0123456789".indexOf(F[0])!==-1?"\\3"+F[0]+" "+F.substr(1).replace(a.jstree.idregex,"\\$&"):F.replace(a.jstree.idregex,"\\$&")}).join(", #")))),this._data.search.res=a.vakata.array_unique(this._data.search.res.concat(T))):(this._data.search.dom=a(this.element[0].querySelectorAll("#"+a.map(T,function(F){return"0123456789".indexOf(F[0])!==-1?"\\3"+F[0]+" "+F.substr(1).replace(a.jstree.idregex,"\\$&"):F.replace(a.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=T),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:r,res:this._data.search.res,show_only_matches:o})},this.clear_search=function(){this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.res.length&&(this._data.search.dom=a(this.element[0].querySelectorAll("#"+a.map(this._data.search.res,function(r){return"0123456789".indexOf(r[0])!==-1?"\\3"+r[0]+" "+r.substr(1).replace(a.jstree.idregex,"\\$&"):r.replace(a.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=a()},this.redraw_node=function(r,t,o,l){if(r=s.redraw_node.apply(this,arguments),r&&a.inArray(r.id,this._data.search.res)!==-1){var c,f,m=null;for(c=0,f=r.childNodes.length;f>c;c++)if(r.childNodes[c]&&r.childNodes[c].className&&r.childNodes[c].className.indexOf("jstree-anchor")!==-1){m=r.childNodes[c];break}m&&(m.className+=" jstree-search")}return r}},function(e){e.vakata.search=function(s,r,t){t=t||{},t=e.extend({},e.vakata.search.defaults,t),t.fuzzy!==!1&&(t.fuzzy=!0),s=t.caseSensitive?s:s.toLowerCase();var o=t.location,l=t.distance,c=t.threshold,f=s.length,m,p,v,k;return f>32&&(t.fuzzy=!1),t.fuzzy&&(m=1<<f-1,p=function(){var T={},P=0;for(P=0;f>P;P++)T[s.charAt(P)]=0;for(P=0;f>P;P++)T[s.charAt(P)]|=1<<f-P-1;return T}(),v=function(T,P){var M=T/f,H=Math.abs(o-P);return l?M+H/l:H?1:M}),k=function(T){if(T=t.caseSensitive?T:T.toLowerCase(),s===T||T.indexOf(s)!==-1)return{isMatch:!0,score:0};if(!t.fuzzy)return{isMatch:!1,score:1};var P,M,H=T.length,F=c,ye=T.indexOf(s,o),be,_e,Ce=f+H,et,Xe,w,K,A,X=1;for(ye!==-1&&(F=Math.min(v(0,ye),F),ye=T.lastIndexOf(s,o+f),ye!==-1&&(F=Math.min(v(0,ye),F))),ye=-1,P=0;f>P;P++){for(be=0,_e=Ce;_e>be;)v(P,o+_e)<=F?be=_e:Ce=_e,_e=Math.floor((Ce-be)/2+be);for(Ce=_e,Xe=Math.max(1,o-_e+1),w=Math.min(o+_e,H)+f,K=new Array(w+2),K[w+1]=(1<<P)-1,M=w;M>=Xe;M--)if(A=p[T.charAt(M-1)],P===0?K[M]=(K[M+1]<<1|1)&A:K[M]=(K[M+1]<<1|1)&A|((et[M+1]|et[M])<<1|1)|et[M+1],K[M]&m&&(X=v(P,M-1),F>=X)){if(F=X,ye=M-1,!(ye>o))break;Xe=Math.max(1,2*o-ye)}if(v(P+1,o)>F)break;et=K}return{isMatch:ye>=0,score:X}},r===!0?{search:k}:k(r)},e.vakata.search.defaults={location:0,distance:100,threshold:.6,fuzzy:!1,caseSensitive:!1}}(a),a.jstree.defaults.sort=function(e,s){return this.get_text(e)>this.get_text(s)?1:-1},a.jstree.plugins.sort=function(e,s){this.bind=function(){s.bind.call(this),this.element.on("model.jstree",a.proxy(function(r,t){this.sort(t.parent,!0)},this)).on("rename_node.jstree create_node.jstree",a.proxy(function(r,t){this.sort(t.parent||t.node.parent,!1),this.redraw_node(t.parent||t.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",a.proxy(function(r,t){this.sort(t.parent,!1),this.redraw_node(t.parent,!0)},this))},this.sort=function(r,t){var o,l;if(r=this.get_node(r),r&&r.children&&r.children.length&&(r.children.sort(a.proxy(this.settings.sort,this)),t))for(o=0,l=r.children_d.length;l>o;o++)this.sort(r.children_d[o],!1)}};var Re=!1;a.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1,preserve_loaded:!1},a.jstree.plugins.state=function(e,s){this.bind=function(){s.bind.call(this);var r=a.proxy(function(){this.element.on(this.settings.state.events,a.proxy(function(){Re&&clearTimeout(Re),Re=setTimeout(a.proxy(function(){this.save_state()},this),100)},this)),this.trigger("state_ready")},this);this.element.on("ready.jstree",a.proxy(function(t,o){this.element.one("restore_state.jstree",r),this.restore_state()||r()},this))},this.save_state=function(){var r=this.get_state();this.settings.state.preserve_loaded||delete r.core.loaded;var t={state:r,ttl:this.settings.state.ttl,sec:+new Date};a.vakata.storage.set(this.settings.state.key,JSON.stringify(t))},this.restore_state=function(){var r=a.vakata.storage.get(this.settings.state.key);if(r)try{r=JSON.parse(r)}catch{return!1}return r&&r.ttl&&r.sec&&+new Date-r.sec>r.ttl?!1:(r&&r.state&&(r=r.state),r&&a.isFunction(this.settings.state.filter)&&(r=this.settings.state.filter.call(this,r)),r?(this.settings.state.preserve_loaded||delete r.core.loaded,this.element.one("set_state.jstree",function(t,o){o.instance.trigger("restore_state",{state:a.extend(!0,{},r)})}),this.set_state(r),!0):!1)},this.clear_state=function(){return a.vakata.storage.del(this.settings.state.key)}},function(e,s){e.vakata.storage={set:function(r,t){return window.localStorage.setItem(r,t)},get:function(r){return window.localStorage.getItem(r)},del:function(r){return window.localStorage.removeItem(r)}}}(a),a.jstree.defaults.types={default:{}},a.jstree.defaults.types[a.jstree.root]={},a.jstree.plugins.types=function(e,s){this.init=function(r,t){var o,l;if(t&&t.types&&t.types.default){for(o in t.types)if(o!=="default"&&o!==a.jstree.root&&t.types.hasOwnProperty(o))for(l in t.types.default)t.types.default.hasOwnProperty(l)&&t.types[o][l]===$&&(t.types[o][l]=t.types.default[l])}s.init.call(this,r,t),this._model.data[a.jstree.root].type=a.jstree.root},this.refresh=function(r,t){s.refresh.call(this,r,t),this._model.data[a.jstree.root].type=a.jstree.root},this.bind=function(){this.element.on("model.jstree",a.proxy(function(r,t){var o=this._model.data,l=t.nodes,c=this.settings.types,f,m,p="default",v;for(f=0,m=l.length;m>f;f++){if(p="default",o[l[f]].original&&o[l[f]].original.type&&c[o[l[f]].original.type]&&(p=o[l[f]].original.type),o[l[f]].data&&o[l[f]].data.jstree&&o[l[f]].data.jstree.type&&c[o[l[f]].data.jstree.type]&&(p=o[l[f]].data.jstree.type),o[l[f]].type=p,o[l[f]].icon===!0&&c[p].icon!==$&&(o[l[f]].icon=c[p].icon),c[p].li_attr!==$&&typeof c[p].li_attr=="object"){for(v in c[p].li_attr)if(c[p].li_attr.hasOwnProperty(v)){if(v==="id")continue;o[l[f]].li_attr[v]===$?o[l[f]].li_attr[v]=c[p].li_attr[v]:v==="class"&&(o[l[f]].li_attr.class=c[p].li_attr.class+" "+o[l[f]].li_attr.class)}}if(c[p].a_attr!==$&&typeof c[p].a_attr=="object"){for(v in c[p].a_attr)if(c[p].a_attr.hasOwnProperty(v)){if(v==="id")continue;o[l[f]].a_attr[v]===$?o[l[f]].a_attr[v]=c[p].a_attr[v]:v==="href"&&o[l[f]].a_attr[v]==="#"?o[l[f]].a_attr.href=c[p].a_attr.href:v==="class"&&(o[l[f]].a_attr.class=c[p].a_attr.class+" "+o[l[f]].a_attr.class)}}}o[a.jstree.root].type=a.jstree.root},this)),s.bind.call(this)},this.get_json=function(r,t,o){var l,c,f=this._model.data,m=t?a.extend(!0,{},t,{no_id:!1}):{},p=s.get_json.call(this,r,m,o);if(p===!1)return!1;if(a.isArray(p))for(l=0,c=p.length;c>l;l++)p[l].type=p[l].id&&f[p[l].id]&&f[p[l].id].type?f[p[l].id].type:"default",t&&t.no_id&&(delete p[l].id,p[l].li_attr&&p[l].li_attr.id&&delete p[l].li_attr.id,p[l].a_attr&&p[l].a_attr.id&&delete p[l].a_attr.id);else p.type=p.id&&f[p.id]&&f[p.id].type?f[p.id].type:"default",t&&t.no_id&&(p=this._delete_ids(p));return p},this._delete_ids=function(r){if(a.isArray(r)){for(var t=0,o=r.length;o>t;t++)r[t]=this._delete_ids(r[t]);return r}return delete r.id,r.li_attr&&r.li_attr.id&&delete r.li_attr.id,r.a_attr&&r.a_attr.id&&delete r.a_attr.id,r.children&&a.isArray(r.children)&&(r.children=this._delete_ids(r.children)),r},this.check=function(r,t,o,l,c){if(s.check.call(this,r,t,o,l,c)===!1)return!1;t=t&&t.id?t:this.get_node(t),o=o&&o.id?o:this.get_node(o);var f=t&&t.id?c&&c.origin?c.origin:a.jstree.reference(t.id):null,m,p,v,k;switch(f=f&&f._model&&f._model.data?f._model.data:null,r){case"create_node":case"move_node":case"copy_node":if(r!=="move_node"||a.inArray(t.id,o.children)===-1){if(m=this.get_rules(o),m.max_children!==$&&m.max_children!==-1&&m.max_children===o.children.length)return this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})},!1;if(m.valid_children!==$&&m.valid_children!==-1&&a.inArray(t.type||"default",m.valid_children)===-1)return this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})},!1;if(f&&t.children_d&&t.parents){for(p=0,v=0,k=t.children_d.length;k>v;v++)p=Math.max(p,f[t.children_d[v]].parents.length);p=p-t.parents.length+1}(0>=p||p===$)&&(p=1);do{if(m.max_depth!==$&&m.max_depth!==-1&&m.max_depth<p)return this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})},!1;o=this.get_node(o.parent),m=this.get_rules(o),p++}while(o)}}return!0},this.get_rules=function(r){if(r=this.get_node(r),!r)return!1;var t=this.get_type(r,!0);return t.max_depth===$&&(t.max_depth=-1),t.max_children===$&&(t.max_children=-1),t.valid_children===$&&(t.valid_children=-1),t},this.get_type=function(r,t){return r=this.get_node(r),r?t?a.extend({type:r.type},this.settings.types[r.type]):r.type:!1},this.set_type=function(r,t){var o=this._model.data,l,c,f,m,p,v,k,T;if(a.isArray(r)){for(r=r.slice(),c=0,f=r.length;f>c;c++)this.set_type(r[c],t);return!0}if(l=this.settings.types,r=this.get_node(r),!l[t]||!r)return!1;if(k=this.get_node(r,!0),k&&k.length&&(T=k.children(".jstree-anchor")),m=r.type,p=this.get_icon(r),r.type=t,(p===!0||!l[m]||l[m].icon!==$&&p===l[m].icon)&&this.set_icon(r,l[t].icon!==$?l[t].icon:!0),l[m]&&l[m].li_attr!==$&&typeof l[m].li_attr=="object"){for(v in l[m].li_attr)if(l[m].li_attr.hasOwnProperty(v)){if(v==="id")continue;v==="class"?(o[r.id].li_attr.class=(o[r.id].li_attr.class||"").replace(l[m].li_attr[v],""),k&&k.removeClass(l[m].li_attr[v])):o[r.id].li_attr[v]===l[m].li_attr[v]&&(o[r.id].li_attr[v]=null,k&&k.removeAttr(v))}}if(l[m]&&l[m].a_attr!==$&&typeof l[m].a_attr=="object"){for(v in l[m].a_attr)if(l[m].a_attr.hasOwnProperty(v)){if(v==="id")continue;v==="class"?(o[r.id].a_attr.class=(o[r.id].a_attr.class||"").replace(l[m].a_attr[v],""),T&&T.removeClass(l[m].a_attr[v])):o[r.id].a_attr[v]===l[m].a_attr[v]&&(v==="href"?(o[r.id].a_attr[v]="#",T&&T.attr("href","#")):(delete o[r.id].a_attr[v],T&&T.removeAttr(v)))}}if(l[t].li_attr!==$&&typeof l[t].li_attr=="object"){for(v in l[t].li_attr)if(l[t].li_attr.hasOwnProperty(v)){if(v==="id")continue;o[r.id].li_attr[v]===$?(o[r.id].li_attr[v]=l[t].li_attr[v],k&&(v==="class"?k.addClass(l[t].li_attr[v]):k.attr(v,l[t].li_attr[v]))):v==="class"&&(o[r.id].li_attr.class=l[t].li_attr[v]+" "+o[r.id].li_attr.class,k&&k.addClass(l[t].li_attr[v]))}}if(l[t].a_attr!==$&&typeof l[t].a_attr=="object"){for(v in l[t].a_attr)if(l[t].a_attr.hasOwnProperty(v)){if(v==="id")continue;o[r.id].a_attr[v]===$?(o[r.id].a_attr[v]=l[t].a_attr[v],T&&(v==="class"?T.addClass(l[t].a_attr[v]):T.attr(v,l[t].a_attr[v]))):v==="href"&&o[r.id].a_attr[v]==="#"?(o[r.id].a_attr.href=l[t].a_attr.href,T&&T.attr("href",l[t].a_attr.href)):v==="class"&&(o[r.id].a_attr.class=l[t].a_attr.class+" "+o[r.id].a_attr.class,T&&T.addClass(l[t].a_attr[v]))}}return!0}},a.jstree.defaults.unique={case_sensitive:!1,trim_whitespace:!1,duplicate:function(e,s){return e+" ("+s+")"}},a.jstree.plugins.unique=function(e,s){this.check=function(r,t,o,l,c){if(s.check.call(this,r,t,o,l,c)===!1)return!1;if(t=t&&t.id?t:this.get_node(t),o=o&&o.id?o:this.get_node(o),!o||!o.children)return!0;var f=r==="rename_node"?l:t.text,m=[],p=this.settings.unique.case_sensitive,v=this.settings.unique.trim_whitespace,k=this._model.data,T,P,M;for(T=0,P=o.children.length;P>T;T++)M=k[o.children[T]].text,p||(M=M.toLowerCase()),v&&(M=M.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),m.push(M);switch(p||(f=f.toLowerCase()),v&&(f=f.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),r){case"delete_node":return!0;case"rename_node":return M=t.text||"",p||(M=M.toLowerCase()),v&&(M=M.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),T=a.inArray(f,m)===-1||t.text&&M===f,T||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+f+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})}),T;case"create_node":return T=a.inArray(f,m)===-1,T||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+f+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})}),T;case"copy_node":return T=a.inArray(f,m)===-1,T||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+f+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})}),T;case"move_node":return T=t.parent===o.id&&(!c||!c.is_multi)||a.inArray(f,m)===-1,T||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+f+" already exists. Preventing: "+r,data:JSON.stringify({chk:r,pos:l,obj:t&&t.id?t.id:!1,par:o&&o.id?o.id:!1})}),T}return!0},this.create_node=function(r,t,o,l,c){if(!t||t.text===$){if(r===null&&(r=a.jstree.root),r=this.get_node(r),!r)return s.create_node.call(this,r,t,o,l,c);if(o=o===$?"last":o,!o.toString().match(/^(before|after)$/)&&!c&&!this.is_loaded(r))return s.create_node.call(this,r,t,o,l,c);t||(t={});var f,m,p,v,k,T=this._model.data,P=this.settings.unique.case_sensitive,M=this.settings.unique.trim_whitespace,H=this.settings.unique.duplicate,F;for(m=f=this.get_string("New node"),p=[],v=0,k=r.children.length;k>v;v++)F=T[r.children[v]].text,P||(F=F.toLowerCase()),M&&(F=F.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),p.push(F);for(v=1,F=m,P||(F=F.toLowerCase()),M&&(F=F.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));a.inArray(F,p)!==-1;)m=H.call(this,f,++v).toString(),F=m,P||(F=F.toLowerCase()),M&&(F=F.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));t.text=m}return s.create_node.call(this,r,t,o,l,c)}};var ge=fe.createElement("DIV");if(ge.setAttribute("unselectable","on"),ge.setAttribute("role","presentation"),ge.className="jstree-wholerow",ge.innerHTML="&#160;",a.jstree.plugins.wholerow=function(e,s){this.bind=function(){s.bind.call(this),this.element.on("ready.jstree set_state.jstree",a.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",a.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",a.proxy(function(r,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",a.proxy(function(r,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var o=!1,l,c;for(l=0,c=t.selected.length;c>l;l++)o=this.get_node(t.selected[l],!0),o&&o.length&&o.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",a.proxy(function(r,t){this.get_node(t.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",a.proxy(function(r,t){r.type==="hover_node"&&this.is_disabled(t.node)||this.get_node(t.node,!0).children(".jstree-wholerow")[r.type==="hover_node"?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",a.proxy(function(r){if(this._data.contextmenu){r.preventDefault();var t=a.Event("contextmenu",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey,pageX:r.pageX,pageY:r.pageY});a(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t)}},this)).on("click.jstree",".jstree-wholerow",function(r){r.stopImmediatePropagation();var t=a.Event("click",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey});a(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()}).on("dblclick.jstree",".jstree-wholerow",function(r){r.stopImmediatePropagation();var t=a.Event("dblclick",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey});a(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",a.proxy(function(r){r.stopImmediatePropagation();var t=a.Event("click",{metaKey:r.metaKey,ctrlKey:r.ctrlKey,altKey:r.altKey,shiftKey:r.shiftKey});a(r.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",a.proxy(function(r){return r.stopImmediatePropagation(),this.is_disabled(r.currentTarget)||this.hover_node(r.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",a.proxy(function(r){this.dehover_node(r.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),s.teardown.call(this)},this.redraw_node=function(r,t,o,l){if(r=s.redraw_node.apply(this,arguments)){var c=ge.cloneNode(!0);a.inArray(r.id,this._data.core.selected)!==-1&&(c.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===r.id&&(c.className+=" jstree-wholerow-hovered"),r.insertBefore(c,r.childNodes[0])}return r}},window.customElements&&Object&&Object.create){var rt=Object.create(HTMLElement.prototype);rt.createdCallback=function(){var e={core:{},plugins:[]},s;for(s in a.jstree.plugins)a.jstree.plugins.hasOwnProperty(s)&&this.attributes[s]&&(e.plugins.push(s),this.getAttribute(s)&&JSON.parse(this.getAttribute(s))&&(e[s]=JSON.parse(this.getAttribute(s))));for(s in a.jstree.defaults.core)a.jstree.defaults.core.hasOwnProperty(s)&&this.attributes[s]&&(e.core[s]=JSON.parse(this.getAttribute(s))||this.getAttribute(s));a(this).jstree(e)};try{window.customElements.define("vakata-jstree",function(){},{prototype:rt})}catch{}}}})},function(He,Ze){He.exports=`/* jsTree default theme */
.jstree-node,
.jstree-children,
.jstree-container-ul {
  display: block;
  margin: 0;
  padding: 0;
  list-style-type: none;
  list-style-image: none;
}
.jstree-node {
  white-space: nowrap;
}
.jstree-anchor {
  display: inline-block;
  color: black;
  white-space: nowrap;
  padding: 0 4px 0 1px;
  margin: 0;
  vertical-align: top;
}
.jstree-anchor:focus {
  outline: 0;
}
.jstree-anchor,
.jstree-anchor:link,
.jstree-anchor:visited,
.jstree-anchor:hover,
.jstree-anchor:active {
  text-decoration: none;
  color: inherit;
}
.jstree-icon {
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
  text-align: center;
}
.jstree-icon:empty {
  display: inline-block;
  text-decoration: none;
  margin: 0;
  padding: 0;
  vertical-align: top;
  text-align: center;
}
.jstree-ocl {
  cursor: pointer;
}
.jstree-leaf > .jstree-ocl {
  cursor: default;
}
.jstree .jstree-open > .jstree-children {
  display: block;
}
.jstree .jstree-closed > .jstree-children,
.jstree .jstree-leaf > .jstree-children {
  display: none;
}
.jstree-anchor > .jstree-themeicon {
  margin-right: 2px;
}
.jstree-no-icons .jstree-themeicon,
.jstree-anchor > .jstree-themeicon-hidden {
  display: none;
}
.jstree-hidden,
.jstree-node.jstree-hidden {
  display: none;
}
.jstree-rtl .jstree-anchor {
  padding: 0 1px 0 4px;
}
.jstree-rtl .jstree-anchor > .jstree-themeicon {
  margin-left: 2px;
  margin-right: 0;
}
.jstree-rtl .jstree-node {
  margin-left: 0;
}
.jstree-rtl .jstree-container-ul > .jstree-node {
  margin-right: 0;
}
.jstree-wholerow-ul {
  position: relative;
  display: inline-block;
  min-width: 100%;
}
.jstree-wholerow-ul .jstree-leaf > .jstree-ocl {
  cursor: pointer;
}
.jstree-wholerow-ul .jstree-anchor,
.jstree-wholerow-ul .jstree-icon {
  position: relative;
}
.jstree-wholerow-ul .jstree-wholerow {
  width: 100%;
  cursor: pointer;
  position: absolute;
  left: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.jstree-contextmenu .jstree-anchor {
  -webkit-user-select: none;
  /* disable selection/Copy of UIWebView */
  -webkit-touch-callout: none;
  /* disable the IOS popup when long-press on a link */
}
.vakata-context {
  display: none;
}
.vakata-context,
.vakata-context ul {
  margin: 0;
  padding: 2px;
  position: absolute;
  background: #f5f5f5;
  border: 1px solid #979797;
  box-shadow: 2px 2px 2px #999999;
}
.vakata-context ul {
  list-style: none;
  left: 100%;
  margin-top: -2.7em;
  margin-left: -4px;
}
.vakata-context .vakata-context-right ul {
  left: auto;
  right: 100%;
  margin-left: auto;
  margin-right: -4px;
}
.vakata-context li {
  list-style: none;
}
.vakata-context li > a {
  display: block;
  padding: 0 2em 0 2em;
  text-decoration: none;
  width: auto;
  color: black;
  white-space: nowrap;
  line-height: 2.4em;
  text-shadow: 1px 1px 0 white;
  border-radius: 1px;
}
.vakata-context li > a:hover {
  position: relative;
  background-color: #e8eff7;
  box-shadow: 0 0 2px #0a6aa1;
}
.vakata-context li > a.vakata-context-parent {
  background-image: url("data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAIORI4JlrqN1oMSnmmZDQUAOw==");
  background-position: right center;
  background-repeat: no-repeat;
}
.vakata-context li > a:focus {
  outline: 0;
}
.vakata-context .vakata-context-hover > a {
  position: relative;
  background-color: #e8eff7;
  box-shadow: 0 0 2px #0a6aa1;
}
.vakata-context .vakata-context-separator > a,
.vakata-context .vakata-context-separator > a:hover {
  background: white;
  border: 0;
  border-top: 1px solid #e2e3e3;
  height: 1px;
  min-height: 1px;
  max-height: 1px;
  padding: 0;
  margin: 0 0 0 2.4em;
  border-left: 1px solid #e0e0e0;
  text-shadow: 0 0 0 transparent;
  box-shadow: 0 0 0 transparent;
  border-radius: 0;
}
.vakata-context .vakata-contextmenu-disabled a,
.vakata-context .vakata-contextmenu-disabled a:hover {
  color: silver;
  background-color: transparent;
  border: 0;
  box-shadow: 0 0 0;
}
.vakata-context .vakata-contextmenu-disabled > a > i {
  filter: grayscale(100%);
}
.vakata-context li > a > i {
  text-decoration: none;
  display: inline-block;
  width: 2.4em;
  height: 2.4em;
  background: transparent;
  margin: 0 0 0 -2em;
  vertical-align: top;
  text-align: center;
  line-height: 2.4em;
}
.vakata-context li > a > i:empty {
  width: 2.4em;
  line-height: 2.4em;
}
.vakata-context li > a .vakata-contextmenu-sep {
  display: inline-block;
  width: 1px;
  height: 2.4em;
  background: white;
  margin: 0 0.5em 0 0;
  border-left: 1px solid #e2e3e3;
}
.vakata-context .vakata-contextmenu-shortcut {
  font-size: 0.8em;
  color: silver;
  opacity: 0.5;
  display: none;
}
.vakata-context-rtl ul {
  left: auto;
  right: 100%;
  margin-left: auto;
  margin-right: -4px;
}
.vakata-context-rtl li > a.vakata-context-parent {
  background-image: url("data:image/gif;base64,R0lGODlhCwAHAIAAACgoKP///yH5BAEAAAEALAAAAAALAAcAAAINjI+AC7rWHIsPtmoxLAA7");
  background-position: left center;
  background-repeat: no-repeat;
}
.vakata-context-rtl .vakata-context-separator > a {
  margin: 0 2.4em 0 0;
  border-left: 0;
  border-right: 1px solid #e2e3e3;
}
.vakata-context-rtl .vakata-context-left ul {
  right: auto;
  left: 100%;
  margin-left: -4px;
  margin-right: auto;
}
.vakata-context-rtl li > a > i {
  margin: 0 -2em 0 0;
}
.vakata-context-rtl li > a .vakata-contextmenu-sep {
  margin: 0 0 0 0.5em;
  border-left-color: white;
  background: #e2e3e3;
}
#jstree-marker {
  position: absolute;
  top: 0;
  left: 0;
  margin: -5px 0 0 0;
  padding: 0;
  border-right: 0;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid;
  width: 0;
  height: 0;
  font-size: 0;
  line-height: 0;
}
#jstree-dnd {
  line-height: 16px;
  margin: 0;
  padding: 4px;
}
#jstree-dnd .jstree-icon,
#jstree-dnd .jstree-copy {
  display: inline-block;
  text-decoration: none;
  margin: 0 2px 0 0;
  padding: 0;
  width: 16px;
  height: 16px;
}
#jstree-dnd .jstree-ok {
  background: green;
}
#jstree-dnd .jstree-er {
  background: red;
}
#jstree-dnd .jstree-copy {
  margin: 0 2px 0 2px;
}
.jstree-default .jstree-node,
.jstree-default .jstree-icon {
  background-repeat: no-repeat;
  background-color: transparent;
}
.jstree-default .jstree-anchor,
.jstree-default .jstree-animated,
.jstree-default .jstree-wholerow {
  transition: background-color 0.15s, box-shadow 0.15s;
}
.jstree-default .jstree-hovered {
  background: #e7f4f9;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #cccccc;
}
.jstree-default .jstree-context {
  background: #e7f4f9;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #cccccc;
}
.jstree-default .jstree-clicked {
  background: #beebff;
  border-radius: 2px;
  box-shadow: inset 0 0 1px #999999;
}
.jstree-default .jstree-no-icons .jstree-anchor > .jstree-themeicon {
  display: none;
}
.jstree-default .jstree-disabled {
  background: transparent;
  color: #666666;
}
.jstree-default .jstree-disabled.jstree-hovered {
  background: transparent;
  box-shadow: none;
}
.jstree-default .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default .jstree-disabled > .jstree-icon {
  opacity: 0.8;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale");
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default .jstree-search {
  font-style: italic;
  color: #8b0000;
  font-weight: bold;
}
.jstree-default .jstree-no-checkboxes .jstree-checkbox {
  display: none !important;
}
.jstree-default.jstree-checkbox-no-clicked .jstree-clicked {
  background: transparent;
  box-shadow: none;
}
.jstree-default.jstree-checkbox-no-clicked .jstree-clicked.jstree-hovered {
  background: #e7f4f9;
}
.jstree-default.jstree-checkbox-no-clicked > .jstree-wholerow-ul .jstree-wholerow-clicked {
  background: transparent;
}
.jstree-default.jstree-checkbox-no-clicked > .jstree-wholerow-ul .jstree-wholerow-clicked.jstree-wholerow-hovered {
  background: #e7f4f9;
}
.jstree-default > .jstree-striped {
  min-width: 100%;
  display: inline-block;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAAkCAMAAAB/qqA+AAAABlBMVEUAAAAAAAClZ7nPAAAAAnRSTlMNAMM9s3UAAAAXSURBVHjajcEBAQAAAIKg/H/aCQZ70AUBjAATb6YPDgAAAABJRU5ErkJggg==") left top repeat;
}
.jstree-default > .jstree-wholerow-ul .jstree-hovered,
.jstree-default > .jstree-wholerow-ul .jstree-clicked {
  background: transparent;
  box-shadow: none;
  border-radius: 0;
}
.jstree-default .jstree-wholerow {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
.jstree-default .jstree-wholerow-hovered {
  background: #e7f4f9;
}
.jstree-default .jstree-wholerow-clicked {
  background: #beebff;
  background: -webkit-linear-gradient(top, #beebff 0%, #a8e4ff 100%);
  background: linear-gradient(to bottom, #beebff 0%, #a8e4ff 100%);
}
.jstree-default .jstree-node {
  min-height: 24px;
  line-height: 24px;
  margin-left: 24px;
  min-width: 24px;
}
.jstree-default .jstree-anchor {
  line-height: 24px;
  height: 24px;
}
.jstree-default .jstree-icon {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
.jstree-default .jstree-icon:empty {
  width: 24px;
  height: 24px;
  line-height: 24px;
}
.jstree-default.jstree-rtl .jstree-node {
  margin-right: 24px;
}
.jstree-default .jstree-wholerow {
  height: 24px;
}
.jstree-default .jstree-node,
.jstree-default .jstree-icon {
  background-image: url("32px.png");
}
.jstree-default .jstree-node {
  background-position: -292px -4px;
  background-repeat: repeat-y;
}
.jstree-default .jstree-last {
  background: transparent;
}
.jstree-default .jstree-open > .jstree-ocl {
  background-position: -132px -4px;
}
.jstree-default .jstree-closed > .jstree-ocl {
  background-position: -100px -4px;
}
.jstree-default .jstree-leaf > .jstree-ocl {
  background-position: -68px -4px;
}
.jstree-default .jstree-themeicon {
  background-position: -260px -4px;
}
.jstree-default > .jstree-no-dots .jstree-node,
.jstree-default > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -36px -4px;
}
.jstree-default > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -4px -4px;
}
.jstree-default .jstree-disabled {
  background: transparent;
}
.jstree-default .jstree-disabled.jstree-hovered {
  background: transparent;
}
.jstree-default .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default .jstree-checkbox {
  background-position: -164px -4px;
}
.jstree-default .jstree-checkbox:hover {
  background-position: -164px -36px;
}
.jstree-default.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
.jstree-default .jstree-checked > .jstree-checkbox {
  background-position: -228px -4px;
}
.jstree-default.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
.jstree-default .jstree-checked > .jstree-checkbox:hover {
  background-position: -228px -36px;
}
.jstree-default .jstree-anchor > .jstree-undetermined {
  background-position: -196px -4px;
}
.jstree-default .jstree-anchor > .jstree-undetermined:hover {
  background-position: -196px -36px;
}
.jstree-default .jstree-checkbox-disabled {
  opacity: 0.8;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale");
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default > .jstree-striped {
  background-size: auto 48px;
}
.jstree-default.jstree-rtl .jstree-node {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==");
  background-position: 100% 1px;
  background-repeat: repeat-y;
}
.jstree-default.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default.jstree-rtl .jstree-open > .jstree-ocl {
  background-position: -132px -36px;
}
.jstree-default.jstree-rtl .jstree-closed > .jstree-ocl {
  background-position: -100px -36px;
}
.jstree-default.jstree-rtl .jstree-leaf > .jstree-ocl {
  background-position: -68px -36px;
}
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-node,
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -36px -36px;
}
.jstree-default.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -4px -36px;
}
.jstree-default .jstree-themeicon-custom {
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
}
.jstree-default > .jstree-container-ul .jstree-loading > .jstree-ocl {
  background: url("throbber.gif") center center no-repeat;
}
.jstree-default .jstree-file {
  background: url("32px.png") -100px -68px no-repeat;
}
.jstree-default .jstree-folder {
  background: url("32px.png") -260px -4px no-repeat;
}
.jstree-default > .jstree-container-ul > .jstree-node {
  margin-left: 0;
  margin-right: 0;
}
#jstree-dnd.jstree-default {
  line-height: 24px;
  padding: 0 4px;
}
#jstree-dnd.jstree-default .jstree-ok,
#jstree-dnd.jstree-default .jstree-er {
  background-image: url("32px.png");
  background-repeat: no-repeat;
  background-color: transparent;
}
#jstree-dnd.jstree-default i {
  background: transparent;
  width: 24px;
  height: 24px;
  line-height: 24px;
}
#jstree-dnd.jstree-default .jstree-ok {
  background-position: -4px -68px;
}
#jstree-dnd.jstree-default .jstree-er {
  background-position: -36px -68px;
}
.jstree-default .jstree-ellipsis {
  overflow: hidden;
}
.jstree-default .jstree-ellipsis .jstree-anchor {
  width: calc(100% - 29px);
  text-overflow: ellipsis;
  overflow: hidden;
}
.jstree-default.jstree-rtl .jstree-node {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==");
}
.jstree-default.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-small .jstree-node {
  min-height: 18px;
  line-height: 18px;
  margin-left: 18px;
  min-width: 18px;
}
.jstree-default-small .jstree-anchor {
  line-height: 18px;
  height: 18px;
}
.jstree-default-small .jstree-icon {
  width: 18px;
  height: 18px;
  line-height: 18px;
}
.jstree-default-small .jstree-icon:empty {
  width: 18px;
  height: 18px;
  line-height: 18px;
}
.jstree-default-small.jstree-rtl .jstree-node {
  margin-right: 18px;
}
.jstree-default-small .jstree-wholerow {
  height: 18px;
}
.jstree-default-small .jstree-node,
.jstree-default-small .jstree-icon {
  background-image: url("32px.png");
}
.jstree-default-small .jstree-node {
  background-position: -295px -7px;
  background-repeat: repeat-y;
}
.jstree-default-small .jstree-last {
  background: transparent;
}
.jstree-default-small .jstree-open > .jstree-ocl {
  background-position: -135px -7px;
}
.jstree-default-small .jstree-closed > .jstree-ocl {
  background-position: -103px -7px;
}
.jstree-default-small .jstree-leaf > .jstree-ocl {
  background-position: -71px -7px;
}
.jstree-default-small .jstree-themeicon {
  background-position: -263px -7px;
}
.jstree-default-small > .jstree-no-dots .jstree-node,
.jstree-default-small > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-small > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -39px -7px;
}
.jstree-default-small > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -7px -7px;
}
.jstree-default-small .jstree-disabled {
  background: transparent;
}
.jstree-default-small .jstree-disabled.jstree-hovered {
  background: transparent;
}
.jstree-default-small .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default-small .jstree-checkbox {
  background-position: -167px -7px;
}
.jstree-default-small .jstree-checkbox:hover {
  background-position: -167px -39px;
}
.jstree-default-small.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
.jstree-default-small .jstree-checked > .jstree-checkbox {
  background-position: -231px -7px;
}
.jstree-default-small.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
.jstree-default-small .jstree-checked > .jstree-checkbox:hover {
  background-position: -231px -39px;
}
.jstree-default-small .jstree-anchor > .jstree-undetermined {
  background-position: -199px -7px;
}
.jstree-default-small .jstree-anchor > .jstree-undetermined:hover {
  background-position: -199px -39px;
}
.jstree-default-small .jstree-checkbox-disabled {
  opacity: 0.8;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale");
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default-small > .jstree-striped {
  background-size: auto 36px;
}
.jstree-default-small.jstree-rtl .jstree-node {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==");
  background-position: 100% 1px;
  background-repeat: repeat-y;
}
.jstree-default-small.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-small.jstree-rtl .jstree-open > .jstree-ocl {
  background-position: -135px -39px;
}
.jstree-default-small.jstree-rtl .jstree-closed > .jstree-ocl {
  background-position: -103px -39px;
}
.jstree-default-small.jstree-rtl .jstree-leaf > .jstree-ocl {
  background-position: -71px -39px;
}
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-node,
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -39px -39px;
}
.jstree-default-small.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: -7px -39px;
}
.jstree-default-small .jstree-themeicon-custom {
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
}
.jstree-default-small > .jstree-container-ul .jstree-loading > .jstree-ocl {
  background: url("throbber.gif") center center no-repeat;
}
.jstree-default-small .jstree-file {
  background: url("32px.png") -103px -71px no-repeat;
}
.jstree-default-small .jstree-folder {
  background: url("32px.png") -263px -7px no-repeat;
}
.jstree-default-small > .jstree-container-ul > .jstree-node {
  margin-left: 0;
  margin-right: 0;
}
#jstree-dnd.jstree-default-small {
  line-height: 18px;
  padding: 0 4px;
}
#jstree-dnd.jstree-default-small .jstree-ok,
#jstree-dnd.jstree-default-small .jstree-er {
  background-image: url("32px.png");
  background-repeat: no-repeat;
  background-color: transparent;
}
#jstree-dnd.jstree-default-small i {
  background: transparent;
  width: 18px;
  height: 18px;
  line-height: 18px;
}
#jstree-dnd.jstree-default-small .jstree-ok {
  background-position: -7px -71px;
}
#jstree-dnd.jstree-default-small .jstree-er {
  background-position: -39px -71px;
}
.jstree-default-small .jstree-ellipsis {
  overflow: hidden;
}
.jstree-default-small .jstree-ellipsis .jstree-anchor {
  width: calc(100% - 23px);
  text-overflow: ellipsis;
  overflow: hidden;
}
.jstree-default-small.jstree-rtl .jstree-node {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAACAQMAAABv1h6PAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMHBgAAiABBI4gz9AAAAABJRU5ErkJggg==");
}
.jstree-default-small.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-large .jstree-node {
  min-height: 32px;
  line-height: 32px;
  margin-left: 32px;
  min-width: 32px;
}
.jstree-default-large .jstree-anchor {
  line-height: 32px;
  height: 32px;
}
.jstree-default-large .jstree-icon {
  width: 32px;
  height: 32px;
  line-height: 32px;
}
.jstree-default-large .jstree-icon:empty {
  width: 32px;
  height: 32px;
  line-height: 32px;
}
.jstree-default-large.jstree-rtl .jstree-node {
  margin-right: 32px;
}
.jstree-default-large .jstree-wholerow {
  height: 32px;
}
.jstree-default-large .jstree-node,
.jstree-default-large .jstree-icon {
  background-image: url("32px.png");
}
.jstree-default-large .jstree-node {
  background-position: -288px 0px;
  background-repeat: repeat-y;
}
.jstree-default-large .jstree-last {
  background: transparent;
}
.jstree-default-large .jstree-open > .jstree-ocl {
  background-position: -128px 0px;
}
.jstree-default-large .jstree-closed > .jstree-ocl {
  background-position: -96px 0px;
}
.jstree-default-large .jstree-leaf > .jstree-ocl {
  background-position: -64px 0px;
}
.jstree-default-large .jstree-themeicon {
  background-position: -256px 0px;
}
.jstree-default-large > .jstree-no-dots .jstree-node,
.jstree-default-large > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-large > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -32px 0px;
}
.jstree-default-large > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: 0px 0px;
}
.jstree-default-large .jstree-disabled {
  background: transparent;
}
.jstree-default-large .jstree-disabled.jstree-hovered {
  background: transparent;
}
.jstree-default-large .jstree-disabled.jstree-clicked {
  background: #efefef;
}
.jstree-default-large .jstree-checkbox {
  background-position: -160px 0px;
}
.jstree-default-large .jstree-checkbox:hover {
  background-position: -160px -32px;
}
.jstree-default-large.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
.jstree-default-large .jstree-checked > .jstree-checkbox {
  background-position: -224px 0px;
}
.jstree-default-large.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
.jstree-default-large .jstree-checked > .jstree-checkbox:hover {
  background-position: -224px -32px;
}
.jstree-default-large .jstree-anchor > .jstree-undetermined {
  background-position: -192px 0px;
}
.jstree-default-large .jstree-anchor > .jstree-undetermined:hover {
  background-position: -192px -32px;
}
.jstree-default-large .jstree-checkbox-disabled {
  opacity: 0.8;
  filter: url("data:image/svg+xml;utf8,<svg xmlns=\\'http://www.w3.org/2000/svg\\'><filter id=\\'jstree-grayscale\\'><feColorMatrix type=\\'matrix\\' values=\\'0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0\\'/></filter></svg>#jstree-grayscale");
  /* Firefox 10+ */
  filter: gray;
  /* IE6-9 */
  -webkit-filter: grayscale(100%);
  /* Chrome 19+ & Safari 6+ */
}
.jstree-default-large > .jstree-striped {
  background-size: auto 64px;
}
.jstree-default-large.jstree-rtl .jstree-node {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAACAQMAAAB49I5GAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjAAMOBgAAGAAJMwQHdQAAAABJRU5ErkJggg==");
  background-position: 100% 1px;
  background-repeat: repeat-y;
}
.jstree-default-large.jstree-rtl .jstree-last {
  background: transparent;
}
.jstree-default-large.jstree-rtl .jstree-open > .jstree-ocl {
  background-position: -128px -32px;
}
.jstree-default-large.jstree-rtl .jstree-closed > .jstree-ocl {
  background-position: -96px -32px;
}
.jstree-default-large.jstree-rtl .jstree-leaf > .jstree-ocl {
  background-position: -64px -32px;
}
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-node,
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-leaf > .jstree-ocl {
  background: transparent;
}
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-open > .jstree-ocl {
  background-position: -32px -32px;
}
.jstree-default-large.jstree-rtl > .jstree-no-dots .jstree-closed > .jstree-ocl {
  background-position: 0px -32px;
}
.jstree-default-large .jstree-themeicon-custom {
  background-color: transparent;
  background-image: none;
  background-position: 0 0;
}
.jstree-default-large > .jstree-container-ul .jstree-loading > .jstree-ocl {
  background: url("throbber.gif") center center no-repeat;
}
.jstree-default-large .jstree-file {
  background: url("32px.png") -96px -64px no-repeat;
}
.jstree-default-large .jstree-folder {
  background: url("32px.png") -256px 0px no-repeat;
}
.jstree-default-large > .jstree-container-ul > .jstree-node {
  margin-left: 0;
  margin-right: 0;
}
#jstree-dnd.jstree-default-large {
  line-height: 32px;
  padding: 0 4px;
}
#jstree-dnd.jstree-default-large .jstree-ok,
#jstree-dnd.jstree-default-large .jstree-er {
  background-image: url("32px.png");
  background-repeat: no-repeat;
  background-color: transparent;
}
#jstree-dnd.jstree-default-large i {
  background: transparent;
  width: 32px;
  height: 32px;
  line-height: 32px;
}
#jstree-dnd.jstree-default-large .jstree-ok {
  background-position: 0px -64px;
}
#jstree-dnd.jstree-default-large .jstree-er {
  background-position: -32px -64px;
}
.jstree-default-large .jstree-ellipsis {
  overflow: hidden;
}
.jstree-default-large .jstree-ellipsis .jstree-anchor {
  width: calc(100% - 37px);
  text-overflow: ellipsis;
  overflow: hidden;
}
.jstree-default-large.jstree-rtl .jstree-node {
  background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAACAQMAAAAD0EyKAAAABlBMVEUAAAAdHRvEkCwcAAAAAXRSTlMAQObYZgAAAAxJREFUCNdjgIIGBgABCgCBvVLXcAAAAABJRU5ErkJggg==");
}
.jstree-default-large.jstree-rtl .jstree-last {
  background: transparent;
}
@media (max-width: 768px) {
  #jstree-dnd.jstree-dnd-responsive {
    line-height: 40px;
    font-weight: bold;
    font-size: 1.1em;
    text-shadow: 1px 1px white;
  }
  #jstree-dnd.jstree-dnd-responsive > i {
    background: transparent;
    width: 40px;
    height: 40px;
  }
  #jstree-dnd.jstree-dnd-responsive > .jstree-ok {
    background-image: url("40px.png");
    background-position: 0 -200px;
    background-size: 120px 240px;
  }
  #jstree-dnd.jstree-dnd-responsive > .jstree-er {
    background-image: url("40px.png");
    background-position: -40px -200px;
    background-size: 120px 240px;
  }
  #jstree-marker.jstree-dnd-responsive {
    border-left-width: 10px;
    border-top-width: 10px;
    border-bottom-width: 10px;
    margin-top: -10px;
  }
}
@media (max-width: 768px) {
  .jstree-default-responsive {
    /*
	.jstree-open > .jstree-ocl,
	.jstree-closed > .jstree-ocl { border-radius:20px; background-color:white; }
	*/
  }
  .jstree-default-responsive .jstree-icon {
    background-image: url("40px.png");
  }
  .jstree-default-responsive .jstree-node,
  .jstree-default-responsive .jstree-leaf > .jstree-ocl {
    background: transparent;
  }
  .jstree-default-responsive .jstree-node {
    min-height: 40px;
    line-height: 40px;
    margin-left: 40px;
    min-width: 40px;
    white-space: nowrap;
  }
  .jstree-default-responsive .jstree-anchor {
    line-height: 40px;
    height: 40px;
  }
  .jstree-default-responsive .jstree-icon,
  .jstree-default-responsive .jstree-icon:empty {
    width: 40px;
    height: 40px;
    line-height: 40px;
  }
  .jstree-default-responsive > .jstree-container-ul > .jstree-node {
    margin-left: 0;
  }
  .jstree-default-responsive.jstree-rtl .jstree-node {
    margin-left: 0;
    margin-right: 40px;
    background: transparent;
  }
  .jstree-default-responsive.jstree-rtl .jstree-container-ul > .jstree-node {
    margin-right: 0;
  }
  .jstree-default-responsive .jstree-ocl,
  .jstree-default-responsive .jstree-themeicon,
  .jstree-default-responsive .jstree-checkbox {
    background-size: 120px 240px;
  }
  .jstree-default-responsive .jstree-leaf > .jstree-ocl,
  .jstree-default-responsive.jstree-rtl .jstree-leaf > .jstree-ocl {
    background: transparent;
  }
  .jstree-default-responsive .jstree-open > .jstree-ocl {
    background-position: 0 0 !important;
  }
  .jstree-default-responsive .jstree-closed > .jstree-ocl {
    background-position: 0 -40px !important;
  }
  .jstree-default-responsive.jstree-rtl .jstree-closed > .jstree-ocl {
    background-position: -40px 0 !important;
  }
  .jstree-default-responsive .jstree-themeicon {
    background-position: -40px -40px;
  }
  .jstree-default-responsive .jstree-checkbox,
  .jstree-default-responsive .jstree-checkbox:hover {
    background-position: -40px -80px;
  }
  .jstree-default-responsive.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox,
  .jstree-default-responsive.jstree-checkbox-selection .jstree-clicked > .jstree-checkbox:hover,
  .jstree-default-responsive .jstree-checked > .jstree-checkbox,
  .jstree-default-responsive .jstree-checked > .jstree-checkbox:hover {
    background-position: 0 -80px;
  }
  .jstree-default-responsive .jstree-anchor > .jstree-undetermined,
  .jstree-default-responsive .jstree-anchor > .jstree-undetermined:hover {
    background-position: 0 -120px;
  }
  .jstree-default-responsive .jstree-anchor {
    font-weight: bold;
    font-size: 1.1em;
    text-shadow: 1px 1px white;
  }
  .jstree-default-responsive > .jstree-striped {
    background: transparent;
  }
  .jstree-default-responsive .jstree-wholerow {
    border-top: 1px solid rgba(255, 255, 255, 0.7);
    border-bottom: 1px solid rgba(64, 64, 64, 0.2);
    background: #ebebeb;
    height: 40px;
  }
  .jstree-default-responsive .jstree-wholerow-hovered {
    background: #e7f4f9;
  }
  .jstree-default-responsive .jstree-wholerow-clicked {
    background: #beebff;
  }
  .jstree-default-responsive .jstree-children .jstree-last > .jstree-wholerow {
    box-shadow: inset 0 -6px 3px -5px #666666;
  }
  .jstree-default-responsive .jstree-children .jstree-open > .jstree-wholerow {
    box-shadow: inset 0 6px 3px -5px #666666;
    border-top: 0;
  }
  .jstree-default-responsive .jstree-children .jstree-open + .jstree-open {
    box-shadow: none;
  }
  .jstree-default-responsive .jstree-node,
  .jstree-default-responsive .jstree-icon,
  .jstree-default-responsive .jstree-node > .jstree-ocl,
  .jstree-default-responsive .jstree-themeicon,
  .jstree-default-responsive .jstree-checkbox {
    background-image: url("40px.png");
    background-size: 120px 240px;
  }
  .jstree-default-responsive .jstree-node {
    background-position: -80px 0;
    background-repeat: repeat-y;
  }
  .jstree-default-responsive .jstree-last {
    background: transparent;
  }
  .jstree-default-responsive .jstree-leaf > .jstree-ocl {
    background-position: -40px -120px;
  }
  .jstree-default-responsive .jstree-last > .jstree-ocl {
    background-position: -40px -160px;
  }
  .jstree-default-responsive .jstree-themeicon-custom {
    background-color: transparent;
    background-image: none;
    background-position: 0 0;
  }
  .jstree-default-responsive .jstree-file {
    background: url("40px.png") 0 -160px no-repeat;
    background-size: 120px 240px;
  }
  .jstree-default-responsive .jstree-folder {
    background: url("40px.png") -40px -40px no-repeat;
    background-size: 120px 240px;
  }
  .jstree-default-responsive > .jstree-container-ul > .jstree-node {
    margin-left: 0;
    margin-right: 0;
  }
}
`},function(He,Ze){He.exports=`/*
*	MatterTools.Inspector
*/

.ins-container,
.jstree {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.ins-cursor-move canvas {
  cursor: move !important;
}

.ins-cursor-rotate canvas {
  cursor: ew-resize !important;
}

.ins-cursor-scale canvas {
  cursor: nwse-resize !important;
}

.ins-container {
  position: fixed;
  z-index: 10;
  width: 245px;
  bottom: 0;
  top: 0;
  left: 0;
  background: #191921;
  padding: 0;
  font-size: 13px;
  color: #7c7c85;
  box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
}

.ins-container,
.ins-container * {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.ins-container *:focus,
.ins-container *:active {
  outline: 0;
}

.ins-container *:-moz-focusring {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.ins-container *:focus-visible {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.ins-container {
  transform: translate(-220px, 0);
  transition: transform ease;
  transition-delay: 2000ms;
  transition-duration: 300ms;
}

.ins-container:hover {
  transform: translate(0, 0);
  transition-delay: 0ms;
  transition-duration: 400ms;
}

@media only screen and (min-width: 1300px) {
  .ins-container,
  .ins-container:hover {
    transition-delay: 0ms;
    transform: translate(0, 0);
  }
}

.ins-world-tree {
  position: absolute;
  overflow: auto;
  top: 91px;
  left: 3px;
  right: 0;
  bottom: 0;
  scrollbar-color: #191921 #191921;
  scrollbar-width: thin;
}

.ins-world-tree:hover {
  scrollbar-color: #32323a #191921;
  scrollbar-width: thin;
}

.ins-world-tree::-webkit-scrollbar {
  background: #191921;
  width: 6px;
  height: 6px;
}

.ins-world-tree::-webkit-scrollbar-track,
.ins-world-tree::-webkit-scrollbar-corner {
  background: #191921;
}

.ins-world-tree::-webkit-scrollbar-thumb {
  background: #191921;
  border-radius: 3px;
}

.ins-world-tree:hover::-webkit-scrollbar-thumb {
  background: #32323a;
}

.ins-add-button.ins-button {
  width: auto;
  height: auto;
  padding: 2px 5px;
  margin: 1px 10px 0px 0;
  right: 0px;
  min-width: 0;
  position: absolute;
  z-index: 100;
}

.ins-top-panel {
  height: 48px;
  background: #14151f;
}

.ins-search-box {
  margin: 7px 5px 9px 5px;
  border: 0;
  padding: 7px 8px;
  font-size: 13px;
  width: 235px;
  border-radius: 3px;
  background: #12131b;
  color: #8e8d96;
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
}

.ins-search-box:focus {
  background: #0f1017;
  border: 0;
  outline: 0;
}

.ins-search-box::-webkit-search-cancel-button {
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  height: 15px;
  width: 8px;
  cursor: pointer;
}

.ins-search-box::-webkit-search-cancel-button:before {
  height: 10px;
  width: 10px;
  content: "x";
  line-height: 0;
  font-size: 13px;
  color: #999;
  font-weight: bold;
  cursor: pointer;
}

.ins-search-box::-webkit-input-placeholder {
  color: #56565f;
}

.ins-search-box:-moz-placeholder {
  color: #56565f;
}

.ins-search-box::-moz-placeholder {
  color: #56565f;
}

.ins-search-box:-ms-input-placeholder {
  color: #56565f;
}

.ins-control-group {
  display: block;
  clear: both;
  overflow: hidden;
  padding: 14px 20px 12px 20px;
  background: #191921;
  border-bottom: 1px solid #29292d;
}

.ins-button {
  display: block;
  float: left;
  font-size: 11px;
  line-height: 1;
  padding: 10px 11px;
  min-width: 49px;
  text-align: center;
  background: #0e0f15;
  border: 0;
  color: #b1b1c3;
  border-radius: 2px;
  outline: none;
  margin: 0;
}

.ins-button:hover {
  background: #000;
}

.ins-button:active {
  transform: translateY(1px);
  background: #000;
}

.jstree-default .jstree-search {
  font-style: italic;
  color: #aaa;
  font-weight: normal;
}

.jstree-default .jstree-wholerow-hovered,
.jstree-default .jstree-hovered {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
}

.jstree-default .jstree-wholerow {
  height: 28px;
}

.jstree-default .jstree-wholerow-clicked,
.jstree-default .jstree-clicked {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  transition: none;
}

.jstree-default .jstree-leaf .jstree-clicked {
  color: #bbb !important;
}

.jstree-default .jstree-anchor {
  line-height: 27px;
  outline: none;
}

.jstree-default .jstree-container-ul {
  margin-bottom: 12px;
}

.jstree-default .jstree-container-ul > .jstree-node > .jstree-anchor:before,
.jstree-default
  .jstree-open
  > .jstree-children
  > .jstree-node
  > .jstree-anchor:before {
  content: "";
  display: block;
  position: absolute;
  left: 0;
  right: 1px;
  height: 28px;
  border-radius: 0;
  box-shadow: none;
  border-right: none;
  pointer-events: none;
  background: rgb(44, 47, 62, 0.5);
  opacity: 0;
}

.jstree-default .jstree-anchor.jstree-clicked:before {
  opacity: 1 !important;
  pointer-events: none;
}

.jstree-default .jstree-node,
.jstree-default .jstree-leaf .jstree-ocl,
.jstree-default .jstree-icon {
  background: transparent;
}

.jstree-default .jstree-node {
  min-height: 28px;
  line-height: 28px;
  margin-left: 12px;
  min-width: 26px;
}

.jstree-default .jstree-icon {
  position: relative;
}

.jstree-default .jstree-icon:before {
  display: block;
  pointer-events: none;
  color: #d6d6d6;
  font-style: normal;
  font-size: 11px;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 24px;
  line-height: 24px;
  transform-origin: 12px 12px;
  transform: translate(0px, -0px);
}

.jstree-default .jstree-open > .jstree-icon:before {
  content: "▾";
  top: 2px;
}

.jstree-default .jstree-closed > .jstree-icon:before {
  content: "▾";
  transform: rotate(-90deg) translate(-2px, 0px);
}

.jstree-leaf .jstree-icon:before {
  display: none;
}

.jstree-default .jstree-open .jstree-ocl {
  background-position: -38px -1px;
}

.jstree-default .jstree-closed .jstree-ocl {
  background-position: -4px -2px;
}

.jstree-anchor {
  padding: 1px 0;
  transition: none;
}

.jstree-anchor .jstree-icon {
  display: none;
}

.jstree-node-type-bodies > .jstree-anchor,
.jstree-node-type-constraints > .jstree-anchor,
.jstree-node-type-composites > .jstree-anchor {
  color: #51515d;
}

#vakata-dnd {
  font-size: 12px;
  color: #aaa;
}
`},function(He,Ze,Q){const E=He.exports={},V=Q(3),W=Q(4),a=Q(1),we=Q(0).Common;E._isIOS=window.navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,E._matterLink="https://brm.io/matter-js/",E.create=function(J){let ne=Object.assign({example:{instance:null},examples:[],resetOnOrientation:!1,preventZoom:!1,fullPage:!1,startExample:!0,appendTo:document.body,toolbar:{title:null,url:null,reset:!0,source:!1,inspector:!1,tools:!1,fullscreen:!0,exampleSelect:!1},tools:{inspector:null,gui:null},dom:{}},J||{});return(!J.toolbar||ne.examples.length>1&&J.toolbar&&J.toolbar.exampleSelect!==!1)&&(ne.toolbar.exampleSelect=!0),E._isIOS&&(ne.toolbar.fullscreen=!1),V||(ne.toolbar.tools=!1,ne.tools.gui=!1),W||(ne.toolbar.inspector=!1,ne.tools.inspector=!1),ne.dom=E._createDom(ne),E._bindDom(ne),!ne.fullPage&&ne.inline!==!1&&ne.dom.root.classList.add("matter-demo-inline"),ne.appendTo&&ne.appendTo.appendChild(ne.dom.root),ne.startExample&&E.start(ne,ne.startExample),ne},E.start=function(J,ne){ne=typeof ne=="string"?ne:J.examples[0].id,window.location.hash.length>0&&(ne=window.location.hash.slice(1)),E.setExampleById(J,ne)},E.stop=function(J){J.example&&J.example.instance&&J.example.instance.stop()},E.reset=function(J){we._nextId=0,we._seed=0,E.setExample(J,J.example)},E.setExampleById=function(J,ne){let de=J.examples.filter(Me=>Me.id===ne)[0];E.setExample(J,de)},E.setExample=function(J,ne){if(ne){let de=J.example.instance;de&&(de.stop(),de.canvas&&de.canvas.parentElement.removeChild(de.canvas)),window.location.hash=ne.id,J.example.instance=null,J.example=ne,J.example.instance=de=ne.init(J),!de.canvas&&de.render&&(de.canvas=de.render.canvas),de.canvas&&J.dom.root.appendChild(de.canvas),J.dom.exampleSelect.value=ne.id,J.dom.buttonSource.href=ne.sourceLink||J.url||"#",setTimeout(function(){J.tools.inspector&&E.setInspector(J,!0),J.tools.gui&&E.setGui(J,!0)},500)}else E.setExample(J,J.examples[0])},E.setInspector=function(J,ne){if(!ne){E._destroyTools(J,!0,!1),J.dom.root.classList.toggle("matter-inspect-active",!1);return}let de=J.example.instance;E._destroyTools(J,!0,!1),J.dom.root.classList.toggle("matter-inspect-active",!0),J.tools.inspector=W.create(de.engine,de.render)},E.setGui=function(J,ne){if(!ne){E._destroyTools(J,!1,!0),J.dom.root.classList.toggle("matter-gui-active",!1);return}let de=J.example.instance;E._destroyTools(J,!1,!0),J.dom.root.classList.toggle("matter-gui-active",!0),J.tools.gui=V.create(de.engine,de.runner,de.render)},E._destroyTools=function(J,ne,de){let Me=J.tools.inspector,Pe=J.tools.gui;ne&&Me&&Me!==!0&&(W.destroy(Me),J.tools.inspector=null),de&&Pe&&Pe!==!0&&(V.destroy(Pe),J.tools.gui=null)},E._toggleFullscreen=function(J){let ne=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;ne?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(ne=J.dom.root,ne.requestFullscreen?ne.requestFullscreen():ne.mozRequestFullScreen?ne.mozRequestFullScreen():ne.webkitRequestFullscreen&&ne.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT))},E._bindDom=function(J){var ne=J.dom;if(window.addEventListener("orientationchange",function(){setTimeout(()=>{J.resetOnOrientation&&E.reset(J)},300)}),J.preventZoom){document.body.addEventListener("gesturestart",function(fe){fe.preventDefault()});var de=!0,Me;document.body.addEventListener("touchstart",function(fe){de||fe.preventDefault(),de=!1,clearTimeout(Me),Me=setTimeout(function(){de=!0},500)})}if(ne.exampleSelect&&ne.exampleSelect.addEventListener("change",function(){let fe=this.options[this.selectedIndex].value;E.setExampleById(J,fe)}),ne.buttonReset&&ne.buttonReset.addEventListener("click",function(){E.reset(J)}),ne.buttonInspect&&ne.buttonInspect.addEventListener("click",function(){var fe=!J.tools.inspector;E.setInspector(J,fe)}),ne.buttonTools&&ne.buttonTools.addEventListener("click",function(){var fe=!J.tools.gui;E.setGui(J,fe)}),ne.buttonFullscreen){ne.buttonFullscreen.addEventListener("click",function(){E._toggleFullscreen(J)});var Pe=function(){var fe=document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen;document.body.classList.toggle("matter-is-fullscreen",fe)};document.addEventListener("webkitfullscreenchange",Pe),document.addEventListener("mozfullscreenchange",Pe),document.addEventListener("fullscreenchange",Pe)}},E._createDom=function(J){let ne=Q(15);a.injectStyles(ne,"matter-demo-style");let de=document.createElement("div"),Me=J.examples.map(at=>`<option value="${at.id}">${at.name}</option>`).join(" ");var Pe=J.preventZoom&&E._isIOS?"prevent-zoom-ios":"";de.innerHTML=`
    <div class="matter-demo ${J.toolbar.title} ${Pe}">
      <div class="matter-header-outer">
        <header class="matter-header">
          <div class="matter-header-inner">
            <h1 class="matter-demo-title">
              <a href="${J.toolbar.url}" target="_blank">
              ${J.toolbar.title}
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
                </svg>
              </a>
            </h1>
            <div class="matter-toolbar">
              <div class="matter-select-wrapper">
                <select aria-label="Select example" title="Select example" class="matter-example-select matter-select">
                  ${Me}
                </select>
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 10l5 5 5-5z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </div>
              <button class="matter-btn matter-btn-reset" title="Reset">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
              <a href="#" class="matter-btn matter-btn-source" title="Source" target="_blank">{ }</a>
              <button class="matter-btn matter-btn-tools" title="Tools">
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
                  <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
              </button>
              <button class="matter-btn matter-btn-inspect" title="Inspect">
              <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 0h24v24H0z" fill="none"/>
                <path d="M11 4.07V2.05c-2.01.2-3.84 1-5.32 2.21L7.1 5.69c1.11-.86 2.44-1.44 3.9-1.62zm7.32.19C16.84 3.05 15.01 2.25 13 2.05v2.02c1.46.18 2.79.76 3.9 1.62l1.42-1.43zM19.93 11h2.02c-.2-2.01-1-3.84-2.21-5.32L18.31 7.1c.86 1.11 1.44 2.44 1.62 3.9zM5.69 7.1L4.26 5.68C3.05 7.16 2.25 8.99 2.05 11h2.02c.18-1.46.76-2.79 1.62-3.9zM4.07 13H2.05c.2 2.01 1 3.84 2.21 5.32l1.43-1.43c-.86-1.1-1.44-2.43-1.62-3.89zM15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3 1.34 3 3 3 3-1.34 3-3zm3.31 4.9l1.43 1.43c1.21-1.48 2.01-3.32 2.21-5.32h-2.02c-.18 1.45-.76 2.78-1.62 3.89zM13 19.93v2.02c2.01-.2 3.84-1 5.32-2.21l-1.43-1.43c-1.1.86-2.43 1.44-3.89 1.62zm-7.32-.19C7.16 20.95 9 21.75 11 21.95v-2.02c-1.46-.18-2.79-.76-3.9-1.62l-1.42 1.43z"/>
              </svg>
              </button>
              <button class="matter-btn matter-btn-fullscreen" title="Fullscreen">
                <svg fill="#000000" height="22" viewBox="0 0 22 22" width="22" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/>
                </svg>
              </button>
            </div>
            <a class="matter-link" href="${E._matterLink}" title="matter.js" target="_blank">
              <svg class="matter-logo" height="100" viewBox="0 952.04859 330 100" width="268" xmlns="http://www.w3.org/2000/svg">
                <path id="m-triangle" style="fill:#76f09b;" d="m 115.83215,1052.3622 -57.916072,0 -57.916078053812107,0 L 28.958038,1002.2054 57.916077,952.04859 86.874114,1002.2054 Z" />
                <path id="m-square" style="fill:#f55f5f" d="m 168.03172,952.36218 0,100.00002 100,0 0,-100.00002 -100,0 z" />
                <circle id="m-circle" style="fill:#f5b862" r="12.947398" cy="1039.4148" cx="140.28374" />
              </svg>
            </a>
          </div>
        </header>
      </div>
    </div>
  `;let fe={root:de.firstElementChild,title:de.querySelector(".matter-demo-title"),header:de.querySelector(".matter-header"),exampleSelect:de.querySelector(".matter-example-select"),buttonReset:de.querySelector(".matter-btn-reset"),buttonSource:de.querySelector(".matter-btn-source"),buttonTools:de.querySelector(".matter-btn-tools"),buttonInspect:de.querySelector(".matter-btn-inspect"),buttonFullscreen:de.querySelector(".matter-btn-fullscreen")};return J.toolbar.title||a.domRemove(fe.title),J.toolbar.exampleSelect||a.domRemove(fe.exampleSelect.parentElement),J.toolbar.reset||a.domRemove(fe.buttonReset),J.toolbar.source||a.domRemove(fe.buttonSource),J.toolbar.inspector||a.domRemove(fe.buttonInspect),J.toolbar.tools||a.domRemove(fe.buttonTools),J.toolbar.fullscreen||a.domRemove(fe.buttonFullscreen),fe}},function(He,Ze){He.exports=`/*
*	MatterTools.Demo
*/

.matter-demo {
  display: flex;
  background: #14151f;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  padding: 50px 0 0 0;
}

.matter-demo,
.matter-demo * {
  box-sizing: border-box;
  font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.matter-demo *:focus,
.matter-demo *:active {
  outline: 0;
}

.matter-demo *:-moz-focusring {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.matter-demo *:focus-visible {
  outline: 3px solid #4da4e4;
  outline-offset: -1px;
  z-index: 5;
}

.matter-demo.matter-demo-inline {
  padding: 0;
  height: inherit;
}

.matter-demo canvas {
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.07);
  max-width: 100%;
  max-height: 100%;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.matter-demo.matter-demo-inline canvas {
  max-height: calc(100% - 49px);
}

.matter-is-fullscreen .matter-demo {
  width: 100%;
}

.matter-is-fullscreen .dg.ac,
.matter-is-fullscreen .ins-container {
  display: none;
}

.matter-header-outer {
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  right: 0;
  background: #0e0f19;
  display: flex;
  align-items: center;
  justify-content: center;
}

.matter-demo-inline .matter-header-outer {
  position: static;
  background: transparent;
  z-index: 0;
  width: 100%;
}

.matter-header {
  width: 100%;
  padding: 7px 20px 8px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.matter-header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.matter-header h1 {
  display: none;
  margin: 0 12px 0 0;
  width: 18px;
  overflow: hidden;
  flex-shrink: 0;
}

.matter-header h1 a {
  color: #c5c5cc;
  font-size: 14px;
  font-weight: 400;
  display: block;
  text-decoration: none;
  padding: 3px 0 2px 0;
  border-bottom: 1px solid transparent;
  white-space: nowrap;
  float: right;
}

.matter-header h1 a:hover,
.matter-header h1 a:focus {
  border-bottom: 1px solid #f5b862;
  color: #fff;
  outline: 0;
}

@media screen and (min-width: 300px) {
  .matter-header h1 {
    display: inline;
  }
}

@media screen and (min-width: 600px) {
  .matter-header h1 {
    width: auto;
    overflow: visible;
  }
}

.btn-home {
  display: none;
}

.matter-demo-title svg {
  fill: #fff;
  width: 14px;
  height: 14px;
  margin: 0px 0 -2px 2px;
}

.matter-link {
  text-decoration: none;
  line-height: 13px;
  margin: 0 -10px 0 0;
  flex-shrink: 0;
}

.matter-link:focus {
  outline: none;
}

.matter-logo {
  height: 33px;
  width: 46px;
}

@media screen and (min-width: 1024px) {
  .matter-logo {
    width: 50px;
  }
}

.matter-logo #m-triangle {
  transform-origin: 14px 856px;
  transition: transform 400ms ease;
}

.matter-link:focus #m-triangle,
.matter-logo:hover #m-triangle {
  transform: rotate(-30deg) translate(-98px, -25px);
}

.matter-logo #m-circle {
  transition: transform 200ms ease;
  transition-delay: 300ms;
}

.matter-link:focus #m-circle,
.matter-logo:hover #m-circle {
  transform: translate(18px, -33px);
}

.matter-logo #m-square {
  transition: transform 150ms ease;
  transition-delay: 400ms;
}

.matter-link:focus #m-square,
.matter-logo:hover #m-square {
  transform: translate(47px, -2px);
}

.matter-toolbar {
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 18px 0 0;
}

.matter-select {
  background: transparent;
  color: #c5c5cc;
  font-size: 14px;
  line-height: 33px;
  width: 100%;
  outline: none;
  padding: 0 25px 0 7px;
  margin: 0;
  border: 0;
  border-radius: 0;
  appearance: none;
  -moz-appearance: none;
  -webkit-appearance: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.matter-select option {
  background: #fff;
  color: #000;
}

.matter-select-wrapper {
  height: 33px;
  width: 100%;
  min-width: 100px;
  max-width: 175px;
  position: relative;
  display: inline-block;
  margin-right: 4%;
}

.matter-select-wrapper:after {
  content: " ";
  display: block;
  position: absolute;
  pointer-events: none;
  width: 28px;
  height: 100%;
  background: linear-gradient(-90deg, rgb(14 15 25), rgb(14 15 25 / 0));
  right: 23px;
  top: 0;
}

.matter-demo-inline .matter-select-wrapper:after {
  display: none;
}

.matter-select:hover,
.matter-select-wrapper:hover .matter-select {
  color: #fff;
}

.matter-select:focus-visible {
  color: #fff;
}

.matter-select:-moz-focusring {
  color: #fff;
}

.matter-select:focus {
  outline: 0;
}

.matter-select-wrapper svg:hover,
.matter-select-wrapper:hover svg {
  background: #232635;
}

.matter-select-wrapper:hover:after svg {
  fill: #fff;
}

.matter-select-wrapper svg {
  display: block;
  pointer-events: none;
  fill: #cecece;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 2;
  top: 6px;
  right: 0;
  border-radius: 5px;
  background: #101119;
}

.matter-btn {
  border: 0;
  background: #0b0c15;
  width: 40px;
  height: 33px;
  border-radius: 2px;
  display: inline-block;
  font-size: 16px;
  line-height: 1;
  color: #c2cad4;
  text-decoration: none;
  text-align: center;
  cursor: default;
  flex-shrink: 0;
  flex-grow: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

.matter-btn svg {
  fill: #fff;
  width: 15px;
  height: 15px;
  margin: 2px 0 0 0;
}

.matter-demo-inline .matter-btn {
  background: #0f0f13;
}

.matter-btn:hover {
  background: #1c1f2d;
  outline: none;
}

.matter-btn:active {
  transform: translate(0px, 1px);
}

.matter-btn:focus-visible {
  background: #1c1f2d;
  outline: none;
}

.matter-btn:-moz-focusring {
  background: #1c1f2d;
  outline: none;
}

.matter-btn-tools {
  position: relative;
  display: none;
  font-size: 15px;
}

.matter-btn-tools svg {
  margin-left: -3px;
}

.matter-btn-inspect {
  position: relative;
  display: none;
}

.matter-btn-inspect svg {
  margin-left: -3px;
}

.matter-btn-source {
  display: none;
  font-size: 12px;
  text-align: center;
  line-height: 31px;
}

.matter-btn-fullscreen {
  position: relative;
  font-size: 18px;
}

.matter-btn-fullscreen svg {
  margin-left: -3px;
}

.matter-is-fullscreen .matter-btn-tools,
.matter-is-fullscreen .matter-btn-inspect {
  display: none;
}

.matter-btn-fullscreen:after,
.matter-btn-tools:after,
.matter-btn-inspect:after {
  content: " ";
  position: absolute;
  bottom: 10px;
  width: 3px;
  height: 3px;
  background: #f5df75;
  border-radius: 1px;
  opacity: 0;
  transform: scale(0);
  transition: opacity 100ms ease, transform 100ms ease;
}

.matter-btn-inspect:after {
  left: 31px;
}

.matter-btn-tools:after {
  background: #f45f5f;
  left: 28px;
}

.matter-btn-fullscreen:after {
  background: #76f09b;
  left: 32px;
}

.matter-is-fullscreen .matter-btn-fullscreen:after,
.matter-gui-active .matter-btn-tools:after,
.matter-inspect-active .matter-btn-inspect:after {
  opacity: 1;
  transform: scale(1);
}

.ins-container,
body .dg {
  display: none;
}

@media screen and (min-width: 500px) {
  .ins-container,
  body .dg,
  .matter-btn-tools,
  .matter-btn-inspect,
  .matter-btn-source {
    display: block;
  }
}
`}])})})(kr);var ai=kr.exports;const ci=si(ai);export{ci as M};
//# sourceMappingURL=matter-tools-2-tbMDnJ.js.map
