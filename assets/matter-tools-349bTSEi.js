var Mn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function li(Xt){return Xt&&Xt.__esModule&&Object.prototype.hasOwnProperty.call(Xt,"default")?Xt.default:Xt}var Er={exports:{}},Jn={exports:{}};/*!
 * matter-js 0.19.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
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
 */var Sr;function di(){return Sr||(Sr=1,function(Xt,Tr){(function(be,I){Xt.exports=I()})(Mn,function(){return function(Pe){var be={};function I(l){if(be[l])return be[l].exports;var f=be[l]={i:l,l:!1,exports:{}};return Pe[l].call(f.exports,f,f.exports,I),f.l=!0,f.exports}return I.m=Pe,I.c=be,I.d=function(l,f,_){I.o(l,f)||Object.defineProperty(l,f,{enumerable:!0,get:_})},I.r=function(l){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(l,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(l,"__esModule",{value:!0})},I.t=function(l,f){if(f&1&&(l=I(l)),f&8||f&4&&typeof l=="object"&&l&&l.__esModule)return l;var _=Object.create(null);if(I.r(_),Object.defineProperty(_,"default",{enumerable:!0,value:l}),f&2&&typeof l!="string")for(var v in l)I.d(_,v,(function(i){return l[i]}).bind(null,v));return _},I.n=function(l){var f=l&&l.__esModule?function(){return l.default}:function(){return l};return I.d(f,"a",f),f},I.o=function(l,f){return Object.prototype.hasOwnProperty.call(l,f)},I.p="",I(I.s=20)}([function(Pe,be){var I={};Pe.exports=I,function(){I._baseDelta=1e3/60,I._nextId=0,I._seed=0,I._nowStartTime=+new Date,I._warnedOnce={},I._decomp=null,I.extend=function(f,_){var v,i;typeof _=="boolean"?(v=2,i=_):(v=1,i=!0);for(var x=v;x<arguments.length;x++){var S=arguments[x];if(S)for(var g in S)i&&S[g]&&S[g].constructor===Object&&(!f[g]||f[g].constructor===Object)?(f[g]=f[g]||{},I.extend(f[g],i,S[g])):f[g]=S[g]}return f},I.clone=function(f,_){return I.extend({},_,f)},I.keys=function(f){if(Object.keys)return Object.keys(f);var _=[];for(var v in f)_.push(v);return _},I.values=function(f){var _=[];if(Object.keys){for(var v=Object.keys(f),i=0;i<v.length;i++)_.push(f[v[i]]);return _}for(var x in f)_.push(f[x]);return _},I.get=function(f,_,v,i){_=_.split(".").slice(v,i);for(var x=0;x<_.length;x+=1)f=f[_[x]];return f},I.set=function(f,_,v,i,x){var S=_.split(".").slice(i,x);return I.get(f,_,0,-1)[S[S.length-1]]=v,v},I.shuffle=function(f){for(var _=f.length-1;_>0;_--){var v=Math.floor(I.random()*(_+1)),i=f[_];f[_]=f[v],f[v]=i}return f},I.choose=function(f){return f[Math.floor(I.random()*f.length)]},I.isElement=function(f){return typeof HTMLElement<"u"?f instanceof HTMLElement:!!(f&&f.nodeType&&f.nodeName)},I.isArray=function(f){return Object.prototype.toString.call(f)==="[object Array]"},I.isFunction=function(f){return typeof f=="function"},I.isPlainObject=function(f){return typeof f=="object"&&f.constructor===Object},I.isString=function(f){return toString.call(f)==="[object String]"},I.clamp=function(f,_,v){return f<_?_:f>v?v:f},I.sign=function(f){return f<0?-1:1},I.now=function(){if(typeof window<"u"&&window.performance){if(window.performance.now)return window.performance.now();if(window.performance.webkitNow)return window.performance.webkitNow()}return Date.now?Date.now():new Date-I._nowStartTime},I.random=function(f,_){return f=typeof f<"u"?f:0,_=typeof _<"u"?_:1,f+l()*(_-f)};var l=function(){return I._seed=(I._seed*9301+49297)%233280,I._seed/233280};I.colorToNumber=function(f){return f=f.replace("#",""),f.length==3&&(f=f.charAt(0)+f.charAt(0)+f.charAt(1)+f.charAt(1)+f.charAt(2)+f.charAt(2)),parseInt(f,16)},I.logLevel=1,I.log=function(){console&&I.logLevel>0&&I.logLevel<=3&&console.log.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},I.info=function(){console&&I.logLevel>0&&I.logLevel<=2&&console.info.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},I.warn=function(){console&&I.logLevel>0&&I.logLevel<=3&&console.warn.apply(console,["matter-js:"].concat(Array.prototype.slice.call(arguments)))},I.warnOnce=function(){var f=Array.prototype.slice.call(arguments).join(" ");I._warnedOnce[f]||(I.warn(f),I._warnedOnce[f]=!0)},I.deprecated=function(f,_,v){f[_]=I.chain(function(){I.warnOnce("🔅 deprecated 🔅",v)},f[_])},I.nextId=function(){return I._nextId++},I.indexOf=function(f,_){if(f.indexOf)return f.indexOf(_);for(var v=0;v<f.length;v++)if(f[v]===_)return v;return-1},I.map=function(f,_){if(f.map)return f.map(_);for(var v=[],i=0;i<f.length;i+=1)v.push(_(f[i]));return v},I.topologicalSort=function(f){var _=[],v=[],i=[];for(var x in f)!v[x]&&!i[x]&&I._topologicalSort(x,v,i,f,_);return _},I._topologicalSort=function(f,_,v,i,x){var S=i[f]||[];v[f]=!0;for(var g=0;g<S.length;g+=1){var d=S[g];v[d]||_[d]||I._topologicalSort(d,_,v,i,x)}v[f]=!1,_[f]=!0,x.push(f)},I.chain=function(){for(var f=[],_=0;_<arguments.length;_+=1){var v=arguments[_];v._chained?f.push.apply(f,v._chained):f.push(v)}var i=function(){for(var x,S=new Array(arguments.length),g=0,d=arguments.length;g<d;g++)S[g]=arguments[g];for(g=0;g<f.length;g+=1){var m=f[g].apply(x,S);typeof m<"u"&&(x=m)}return x};return i._chained=f,i},I.chainPathBefore=function(f,_,v){return I.set(f,_,I.chain(v,I.get(f,_)))},I.chainPathAfter=function(f,_,v){return I.set(f,_,I.chain(I.get(f,_),v))},I.setDecomp=function(f){I._decomp=f},I.getDecomp=function(){var f=I._decomp;try{!f&&typeof window<"u"&&(f=window.decomp),!f&&typeof Mn<"u"&&(f=Mn.decomp)}catch{f=null}return f}}()},function(Pe,be){var I={};Pe.exports=I,function(){I.create=function(l){var f={min:{x:0,y:0},max:{x:0,y:0}};return l&&I.update(f,l),f},I.update=function(l,f,_){l.min.x=1/0,l.max.x=-1/0,l.min.y=1/0,l.max.y=-1/0;for(var v=0;v<f.length;v++){var i=f[v];i.x>l.max.x&&(l.max.x=i.x),i.x<l.min.x&&(l.min.x=i.x),i.y>l.max.y&&(l.max.y=i.y),i.y<l.min.y&&(l.min.y=i.y)}_&&(_.x>0?l.max.x+=_.x:l.min.x+=_.x,_.y>0?l.max.y+=_.y:l.min.y+=_.y)},I.contains=function(l,f){return f.x>=l.min.x&&f.x<=l.max.x&&f.y>=l.min.y&&f.y<=l.max.y},I.overlaps=function(l,f){return l.min.x<=f.max.x&&l.max.x>=f.min.x&&l.max.y>=f.min.y&&l.min.y<=f.max.y},I.translate=function(l,f){l.min.x+=f.x,l.max.x+=f.x,l.min.y+=f.y,l.max.y+=f.y},I.shift=function(l,f){var _=l.max.x-l.min.x,v=l.max.y-l.min.y;l.min.x=f.x,l.max.x=f.x+_,l.min.y=f.y,l.max.y=f.y+v}}()},function(Pe,be){var I={};Pe.exports=I,function(){I.create=function(l,f){return{x:l||0,y:f||0}},I.clone=function(l){return{x:l.x,y:l.y}},I.magnitude=function(l){return Math.sqrt(l.x*l.x+l.y*l.y)},I.magnitudeSquared=function(l){return l.x*l.x+l.y*l.y},I.rotate=function(l,f,_){var v=Math.cos(f),i=Math.sin(f);_||(_={});var x=l.x*v-l.y*i;return _.y=l.x*i+l.y*v,_.x=x,_},I.rotateAbout=function(l,f,_,v){var i=Math.cos(f),x=Math.sin(f);v||(v={});var S=_.x+((l.x-_.x)*i-(l.y-_.y)*x);return v.y=_.y+((l.x-_.x)*x+(l.y-_.y)*i),v.x=S,v},I.normalise=function(l){var f=I.magnitude(l);return f===0?{x:0,y:0}:{x:l.x/f,y:l.y/f}},I.dot=function(l,f){return l.x*f.x+l.y*f.y},I.cross=function(l,f){return l.x*f.y-l.y*f.x},I.cross3=function(l,f,_){return(f.x-l.x)*(_.y-l.y)-(f.y-l.y)*(_.x-l.x)},I.add=function(l,f,_){return _||(_={}),_.x=l.x+f.x,_.y=l.y+f.y,_},I.sub=function(l,f,_){return _||(_={}),_.x=l.x-f.x,_.y=l.y-f.y,_},I.mult=function(l,f){return{x:l.x*f,y:l.y*f}},I.div=function(l,f){return{x:l.x/f,y:l.y/f}},I.perp=function(l,f){return f=f===!0?-1:1,{x:f*-l.y,y:f*l.x}},I.neg=function(l){return{x:-l.x,y:-l.y}},I.angle=function(l,f){return Math.atan2(f.y-l.y,f.x-l.x)},I._temp=[I.create(),I.create(),I.create(),I.create(),I.create(),I.create()]}()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(2),_=I(0);(function(){l.create=function(v,i){for(var x=[],S=0;S<v.length;S++){var g=v[S],d={x:g.x,y:g.y,index:S,body:i,isInternal:!1};x.push(d)}return x},l.fromPath=function(v,i){var x=/L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,S=[];return v.replace(x,function(g,d,m){S.push({x:parseFloat(d),y:parseFloat(m)})}),l.create(S,i)},l.centre=function(v){for(var i=l.area(v,!0),x={x:0,y:0},S,g,d,m=0;m<v.length;m++)d=(m+1)%v.length,S=f.cross(v[m],v[d]),g=f.mult(f.add(v[m],v[d]),S),x=f.add(x,g);return f.div(x,6*i)},l.mean=function(v){for(var i={x:0,y:0},x=0;x<v.length;x++)i.x+=v[x].x,i.y+=v[x].y;return f.div(i,v.length)},l.area=function(v,i){for(var x=0,S=v.length-1,g=0;g<v.length;g++)x+=(v[S].x-v[g].x)*(v[S].y+v[g].y),S=g;return i?x/2:Math.abs(x)/2},l.inertia=function(v,i){for(var x=0,S=0,g=v,d,m,w=0;w<g.length;w++)m=(w+1)%g.length,d=Math.abs(f.cross(g[m],g[w])),x+=d*(f.dot(g[m],g[m])+f.dot(g[m],g[w])+f.dot(g[w],g[w])),S+=d;return i/6*(x/S)},l.translate=function(v,i,x){x=typeof x<"u"?x:1;var S=v.length,g=i.x*x,d=i.y*x,m;for(m=0;m<S;m++)v[m].x+=g,v[m].y+=d;return v},l.rotate=function(v,i,x){if(i!==0){var S=Math.cos(i),g=Math.sin(i),d=x.x,m=x.y,w=v.length,C,N,W,J;for(J=0;J<w;J++)C=v[J],N=C.x-d,W=C.y-m,C.x=d+(N*S-W*g),C.y=m+(N*g+W*S);return v}},l.contains=function(v,i){for(var x=i.x,S=i.y,g=v.length,d=v[g-1],m,w=0;w<g;w++){if(m=v[w],(x-d.x)*(m.y-d.y)+(S-d.y)*(d.x-m.x)>0)return!1;d=m}return!0},l.scale=function(v,i,x,S){if(i===1&&x===1)return v;S=S||l.centre(v);for(var g,d,m=0;m<v.length;m++)g=v[m],d=f.sub(g,S),v[m].x=S.x+d.x*i,v[m].y=S.y+d.y*x;return v},l.chamfer=function(v,i,x,S,g){typeof i=="number"?i=[i]:i=i||[8],x=typeof x<"u"?x:-1,S=S||2,g=g||14;for(var d=[],m=0;m<v.length;m++){var w=v[m-1>=0?m-1:v.length-1],C=v[m],N=v[(m+1)%v.length],W=i[m<i.length?m:i.length-1];if(W===0){d.push(C);continue}var J=f.normalise({x:C.y-w.y,y:w.x-C.x}),$=f.normalise({x:N.y-C.y,y:C.x-N.x}),k=Math.sqrt(2*Math.pow(W,2)),O=f.mult(_.clone(J),W),z=f.normalise(f.mult(f.add(J,$),.5)),L=f.sub(C,f.mult(z,k)),G=x;x===-1&&(G=Math.pow(W,.32)*1.75),G=_.clamp(G,S,g),G%2===1&&(G+=1);for(var e=Math.acos(f.dot(J,$)),s=e/G,n=0;n<G;n++)d.push(f.add(f.rotate(O,s*n),L))}return d},l.clockwiseSort=function(v){var i=l.mean(v);return v.sort(function(x,S){return f.angle(i,x)-f.angle(i,S)}),v},l.isConvex=function(v){var i=0,x=v.length,S,g,d,m;if(x<3)return null;for(S=0;S<x;S++)if(g=(S+1)%x,d=(S+2)%x,m=(v[g].x-v[S].x)*(v[d].y-v[g].y),m-=(v[g].y-v[S].y)*(v[d].x-v[g].x),m<0?i|=1:m>0&&(i|=2),i===3)return!1;return i!==0?!0:null},l.hull=function(v){var i=[],x=[],S,g;for(v=v.slice(0),v.sort(function(d,m){var w=d.x-m.x;return w!==0?w:d.y-m.y}),g=0;g<v.length;g+=1){for(S=v[g];x.length>=2&&f.cross3(x[x.length-2],x[x.length-1],S)<=0;)x.pop();x.push(S)}for(g=v.length-1;g>=0;g-=1){for(S=v[g];i.length>=2&&f.cross3(i[i.length-2],i[i.length-1],S)<=0;)i.pop();i.push(S)}return i.pop(),x.pop(),i.concat(x)}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(3),_=I(2),v=I(7),i=I(0),x=I(1),S=I(11);(function(){l._timeCorrection=!0,l._inertiaScale=4,l._nextCollidingGroupId=1,l._nextNonCollidingGroupId=-1,l._nextCategory=1,l._baseDelta=1e3/60,l.create=function(d){var m={id:i.nextId(),type:"body",label:"Body",parts:[],plugin:{},angle:0,vertices:f.fromPath("L 0 0 L 40 0 L 40 40 L 0 40"),position:{x:0,y:0},force:{x:0,y:0},torque:0,positionImpulse:{x:0,y:0},constraintImpulse:{x:0,y:0,angle:0},totalContacts:0,speed:0,angularSpeed:0,velocity:{x:0,y:0},angularVelocity:0,isSensor:!1,isStatic:!1,isSleeping:!1,motion:0,sleepThreshold:60,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,collisionFilter:{category:1,mask:4294967295,group:0},slop:.05,timeScale:1,render:{visible:!0,opacity:1,strokeStyle:null,fillStyle:null,lineWidth:null,sprite:{xScale:1,yScale:1,xOffset:0,yOffset:0}},events:null,bounds:null,chamfer:null,circleRadius:0,positionPrev:null,anglePrev:0,parent:null,axes:null,area:0,mass:0,inertia:0,deltaTime:16.666666666666668,_original:null},w=i.extend(m,d);return g(w,d),w},l.nextGroup=function(d){return d?l._nextNonCollidingGroupId--:l._nextCollidingGroupId++},l.nextCategory=function(){return l._nextCategory=l._nextCategory<<1,l._nextCategory};var g=function(d,m){m=m||{},l.set(d,{bounds:d.bounds||x.create(d.vertices),positionPrev:d.positionPrev||_.clone(d.position),anglePrev:d.anglePrev||d.angle,vertices:d.vertices,parts:d.parts||[d],isStatic:d.isStatic,isSleeping:d.isSleeping,parent:d.parent||d}),f.rotate(d.vertices,d.angle,d.position),S.rotate(d.axes,d.angle),x.update(d.bounds,d.vertices,d.velocity),l.set(d,{axes:m.axes||d.axes,area:m.area||d.area,mass:m.mass||d.mass,inertia:m.inertia||d.inertia});var w=d.isStatic?"#14151f":i.choose(["#f19648","#f5d259","#f55a3c","#063e7b","#ececd1"]),C=d.isStatic?"#555":"#ccc",N=d.isStatic&&d.render.fillStyle===null?1:0;d.render.fillStyle=d.render.fillStyle||w,d.render.strokeStyle=d.render.strokeStyle||C,d.render.lineWidth=d.render.lineWidth||N,d.render.sprite.xOffset+=-(d.bounds.min.x-d.position.x)/(d.bounds.max.x-d.bounds.min.x),d.render.sprite.yOffset+=-(d.bounds.min.y-d.position.y)/(d.bounds.max.y-d.bounds.min.y)};l.set=function(d,m,w){var C;typeof m=="string"&&(C=m,m={},m[C]=w);for(C in m)if(Object.prototype.hasOwnProperty.call(m,C))switch(w=m[C],C){case"isStatic":l.setStatic(d,w);break;case"isSleeping":v.set(d,w);break;case"mass":l.setMass(d,w);break;case"density":l.setDensity(d,w);break;case"inertia":l.setInertia(d,w);break;case"vertices":l.setVertices(d,w);break;case"position":l.setPosition(d,w);break;case"angle":l.setAngle(d,w);break;case"velocity":l.setVelocity(d,w);break;case"angularVelocity":l.setAngularVelocity(d,w);break;case"speed":l.setSpeed(d,w);break;case"angularSpeed":l.setAngularSpeed(d,w);break;case"parts":l.setParts(d,w);break;case"centre":l.setCentre(d,w);break;default:d[C]=w}},l.setStatic=function(d,m){for(var w=0;w<d.parts.length;w++){var C=d.parts[w];C.isStatic=m,m?(C._original={restitution:C.restitution,friction:C.friction,mass:C.mass,inertia:C.inertia,density:C.density,inverseMass:C.inverseMass,inverseInertia:C.inverseInertia},C.restitution=0,C.friction=1,C.mass=C.inertia=C.density=1/0,C.inverseMass=C.inverseInertia=0,C.positionPrev.x=C.position.x,C.positionPrev.y=C.position.y,C.anglePrev=C.angle,C.angularVelocity=0,C.speed=0,C.angularSpeed=0,C.motion=0):C._original&&(C.restitution=C._original.restitution,C.friction=C._original.friction,C.mass=C._original.mass,C.inertia=C._original.inertia,C.density=C._original.density,C.inverseMass=C._original.inverseMass,C.inverseInertia=C._original.inverseInertia,C._original=null)}},l.setMass=function(d,m){var w=d.inertia/(d.mass/6);d.inertia=w*(m/6),d.inverseInertia=1/d.inertia,d.mass=m,d.inverseMass=1/d.mass,d.density=d.mass/d.area},l.setDensity=function(d,m){l.setMass(d,m*d.area),d.density=m},l.setInertia=function(d,m){d.inertia=m,d.inverseInertia=1/d.inertia},l.setVertices=function(d,m){m[0].body===d?d.vertices=m:d.vertices=f.create(m,d),d.axes=S.fromVertices(d.vertices),d.area=f.area(d.vertices),l.setMass(d,d.density*d.area);var w=f.centre(d.vertices);f.translate(d.vertices,w,-1),l.setInertia(d,l._inertiaScale*f.inertia(d.vertices,d.mass)),f.translate(d.vertices,d.position),x.update(d.bounds,d.vertices,d.velocity)},l.setParts=function(d,m,w){var C;for(m=m.slice(0),d.parts.length=0,d.parts.push(d),d.parent=d,C=0;C<m.length;C++){var N=m[C];N!==d&&(N.parent=d,d.parts.push(N))}if(d.parts.length!==1){if(w=typeof w<"u"?w:!0,w){var W=[];for(C=0;C<m.length;C++)W=W.concat(m[C].vertices);f.clockwiseSort(W);var J=f.hull(W),$=f.centre(J);l.setVertices(d,J),f.translate(d.vertices,$)}var k=l._totalProperties(d);d.area=k.area,d.parent=d,d.position.x=k.centre.x,d.position.y=k.centre.y,d.positionPrev.x=k.centre.x,d.positionPrev.y=k.centre.y,l.setMass(d,k.mass),l.setInertia(d,k.inertia),l.setPosition(d,k.centre)}},l.setCentre=function(d,m,w){w?(d.positionPrev.x+=m.x,d.positionPrev.y+=m.y,d.position.x+=m.x,d.position.y+=m.y):(d.positionPrev.x=m.x-(d.position.x-d.positionPrev.x),d.positionPrev.y=m.y-(d.position.y-d.positionPrev.y),d.position.x=m.x,d.position.y=m.y)},l.setPosition=function(d,m,w){var C=_.sub(m,d.position);w?(d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.velocity.x=C.x,d.velocity.y=C.y,d.speed=_.magnitude(C)):(d.positionPrev.x+=C.x,d.positionPrev.y+=C.y);for(var N=0;N<d.parts.length;N++){var W=d.parts[N];W.position.x+=C.x,W.position.y+=C.y,f.translate(W.vertices,C),x.update(W.bounds,W.vertices,d.velocity)}},l.setAngle=function(d,m,w){var C=m-d.angle;w?(d.anglePrev=d.angle,d.angularVelocity=C,d.angularSpeed=Math.abs(C)):d.anglePrev+=C;for(var N=0;N<d.parts.length;N++){var W=d.parts[N];W.angle+=C,f.rotate(W.vertices,C,d.position),S.rotate(W.axes,C),x.update(W.bounds,W.vertices,d.velocity),N>0&&_.rotateAbout(W.position,C,d.position,W.position)}},l.setVelocity=function(d,m){var w=d.deltaTime/l._baseDelta;d.positionPrev.x=d.position.x-m.x*w,d.positionPrev.y=d.position.y-m.y*w,d.velocity.x=(d.position.x-d.positionPrev.x)/w,d.velocity.y=(d.position.y-d.positionPrev.y)/w,d.speed=_.magnitude(d.velocity)},l.getVelocity=function(d){var m=l._baseDelta/d.deltaTime;return{x:(d.position.x-d.positionPrev.x)*m,y:(d.position.y-d.positionPrev.y)*m}},l.getSpeed=function(d){return _.magnitude(l.getVelocity(d))},l.setSpeed=function(d,m){l.setVelocity(d,_.mult(_.normalise(l.getVelocity(d)),m))},l.setAngularVelocity=function(d,m){var w=d.deltaTime/l._baseDelta;d.anglePrev=d.angle-m*w,d.angularVelocity=(d.angle-d.anglePrev)/w,d.angularSpeed=Math.abs(d.angularVelocity)},l.getAngularVelocity=function(d){return(d.angle-d.anglePrev)*l._baseDelta/d.deltaTime},l.getAngularSpeed=function(d){return Math.abs(l.getAngularVelocity(d))},l.setAngularSpeed=function(d,m){l.setAngularVelocity(d,i.sign(l.getAngularVelocity(d))*m)},l.translate=function(d,m,w){l.setPosition(d,_.add(d.position,m),w)},l.rotate=function(d,m,w,C){if(!w)l.setAngle(d,d.angle+m,C);else{var N=Math.cos(m),W=Math.sin(m),J=d.position.x-w.x,$=d.position.y-w.y;l.setPosition(d,{x:w.x+(J*N-$*W),y:w.y+(J*W+$*N)},C),l.setAngle(d,d.angle+m,C)}},l.scale=function(d,m,w,C){var N=0,W=0;C=C||d.position;for(var J=0;J<d.parts.length;J++){var $=d.parts[J];f.scale($.vertices,m,w,C),$.axes=S.fromVertices($.vertices),$.area=f.area($.vertices),l.setMass($,d.density*$.area),f.translate($.vertices,{x:-$.position.x,y:-$.position.y}),l.setInertia($,l._inertiaScale*f.inertia($.vertices,$.mass)),f.translate($.vertices,{x:$.position.x,y:$.position.y}),J>0&&(N+=$.area,W+=$.inertia),$.position.x=C.x+($.position.x-C.x)*m,$.position.y=C.y+($.position.y-C.y)*w,x.update($.bounds,$.vertices,d.velocity)}d.parts.length>1&&(d.area=N,d.isStatic||(l.setMass(d,d.density*N),l.setInertia(d,W))),d.circleRadius&&(m===w?d.circleRadius*=m:d.circleRadius=null)},l.update=function(d,m){m=(typeof m<"u"?m:1e3/60)*d.timeScale;var w=m*m,C=l._timeCorrection?m/(d.deltaTime||m):1,N=1-d.frictionAir*(m/i._baseDelta),W=(d.position.x-d.positionPrev.x)*C,J=(d.position.y-d.positionPrev.y)*C;d.velocity.x=W*N+d.force.x/d.mass*w,d.velocity.y=J*N+d.force.y/d.mass*w,d.positionPrev.x=d.position.x,d.positionPrev.y=d.position.y,d.position.x+=d.velocity.x,d.position.y+=d.velocity.y,d.deltaTime=m,d.angularVelocity=(d.angle-d.anglePrev)*N*C+d.torque/d.inertia*w,d.anglePrev=d.angle,d.angle+=d.angularVelocity;for(var $=0;$<d.parts.length;$++){var k=d.parts[$];f.translate(k.vertices,d.velocity),$>0&&(k.position.x+=d.velocity.x,k.position.y+=d.velocity.y),d.angularVelocity!==0&&(f.rotate(k.vertices,d.angularVelocity,d.position),S.rotate(k.axes,d.angularVelocity),$>0&&_.rotateAbout(k.position,d.angularVelocity,d.position,k.position)),x.update(k.bounds,k.vertices,d.velocity)}},l.updateVelocities=function(d){var m=l._baseDelta/d.deltaTime,w=d.velocity;w.x=(d.position.x-d.positionPrev.x)*m,w.y=(d.position.y-d.positionPrev.y)*m,d.speed=Math.sqrt(w.x*w.x+w.y*w.y),d.angularVelocity=(d.angle-d.anglePrev)*m,d.angularSpeed=Math.abs(d.angularVelocity)},l.applyForce=function(d,m,w){var C={x:m.x-d.position.x,y:m.y-d.position.y};d.force.x+=w.x,d.force.y+=w.y,d.torque+=C.x*w.y-C.y*w.x},l._totalProperties=function(d){for(var m={mass:0,area:0,inertia:0,centre:{x:0,y:0}},w=d.parts.length===1?0:1;w<d.parts.length;w++){var C=d.parts[w],N=C.mass!==1/0?C.mass:1;m.mass+=N,m.area+=C.area,m.inertia+=C.inertia,m.centre=_.add(m.centre,_.mult(C.position,N))}return m.centre=_.div(m.centre,m.mass),m}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(0);(function(){l.on=function(_,v,i){for(var x=v.split(" "),S,g=0;g<x.length;g++)S=x[g],_.events=_.events||{},_.events[S]=_.events[S]||[],_.events[S].push(i);return i},l.off=function(_,v,i){if(!v){_.events={};return}typeof v=="function"&&(i=v,v=f.keys(_.events).join(" "));for(var x=v.split(" "),S=0;S<x.length;S++){var g=_.events[x[S]],d=[];if(i&&g)for(var m=0;m<g.length;m++)g[m]!==i&&d.push(g[m]);_.events[x[S]]=d}},l.trigger=function(_,v,i){var x,S,g,d,m=_.events;if(m&&f.keys(m).length>0){i||(i={}),x=v.split(" ");for(var w=0;w<x.length;w++)if(S=x[w],g=m[S],g){d=f.clone(i,!1),d.name=S,d.source=_;for(var C=0;C<g.length;C++)g[C].apply(_,[d])}}}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(5),_=I(0),v=I(1),i=I(4);(function(){l.create=function(x){return _.extend({id:_.nextId(),type:"composite",parent:null,isModified:!1,bodies:[],constraints:[],composites:[],label:"Composite",plugin:{},cache:{allBodies:null,allConstraints:null,allComposites:null}},x)},l.setModified=function(x,S,g,d){if(x.isModified=S,S&&x.cache&&(x.cache.allBodies=null,x.cache.allConstraints=null,x.cache.allComposites=null),g&&x.parent&&l.setModified(x.parent,S,g,d),d)for(var m=0;m<x.composites.length;m++){var w=x.composites[m];l.setModified(w,S,g,d)}},l.add=function(x,S){var g=[].concat(S);f.trigger(x,"beforeAdd",{object:S});for(var d=0;d<g.length;d++){var m=g[d];switch(m.type){case"body":if(m.parent!==m){_.warn("Composite.add: skipped adding a compound body part (you must add its parent instead)");break}l.addBody(x,m);break;case"constraint":l.addConstraint(x,m);break;case"composite":l.addComposite(x,m);break;case"mouseConstraint":l.addConstraint(x,m.constraint);break}}return f.trigger(x,"afterAdd",{object:S}),x},l.remove=function(x,S,g){var d=[].concat(S);f.trigger(x,"beforeRemove",{object:S});for(var m=0;m<d.length;m++){var w=d[m];switch(w.type){case"body":l.removeBody(x,w,g);break;case"constraint":l.removeConstraint(x,w,g);break;case"composite":l.removeComposite(x,w,g);break;case"mouseConstraint":l.removeConstraint(x,w.constraint);break}}return f.trigger(x,"afterRemove",{object:S}),x},l.addComposite=function(x,S){return x.composites.push(S),S.parent=x,l.setModified(x,!0,!0,!1),x},l.removeComposite=function(x,S,g){var d=_.indexOf(x.composites,S);if(d!==-1&&l.removeCompositeAt(x,d),g)for(var m=0;m<x.composites.length;m++)l.removeComposite(x.composites[m],S,!0);return x},l.removeCompositeAt=function(x,S){return x.composites.splice(S,1),l.setModified(x,!0,!0,!1),x},l.addBody=function(x,S){return x.bodies.push(S),l.setModified(x,!0,!0,!1),x},l.removeBody=function(x,S,g){var d=_.indexOf(x.bodies,S);if(d!==-1&&l.removeBodyAt(x,d),g)for(var m=0;m<x.composites.length;m++)l.removeBody(x.composites[m],S,!0);return x},l.removeBodyAt=function(x,S){return x.bodies.splice(S,1),l.setModified(x,!0,!0,!1),x},l.addConstraint=function(x,S){return x.constraints.push(S),l.setModified(x,!0,!0,!1),x},l.removeConstraint=function(x,S,g){var d=_.indexOf(x.constraints,S);if(d!==-1&&l.removeConstraintAt(x,d),g)for(var m=0;m<x.composites.length;m++)l.removeConstraint(x.composites[m],S,!0);return x},l.removeConstraintAt=function(x,S){return x.constraints.splice(S,1),l.setModified(x,!0,!0,!1),x},l.clear=function(x,S,g){if(g)for(var d=0;d<x.composites.length;d++)l.clear(x.composites[d],S,!0);return S?x.bodies=x.bodies.filter(function(m){return m.isStatic}):x.bodies.length=0,x.constraints.length=0,x.composites.length=0,l.setModified(x,!0,!0,!1),x},l.allBodies=function(x){if(x.cache&&x.cache.allBodies)return x.cache.allBodies;for(var S=[].concat(x.bodies),g=0;g<x.composites.length;g++)S=S.concat(l.allBodies(x.composites[g]));return x.cache&&(x.cache.allBodies=S),S},l.allConstraints=function(x){if(x.cache&&x.cache.allConstraints)return x.cache.allConstraints;for(var S=[].concat(x.constraints),g=0;g<x.composites.length;g++)S=S.concat(l.allConstraints(x.composites[g]));return x.cache&&(x.cache.allConstraints=S),S},l.allComposites=function(x){if(x.cache&&x.cache.allComposites)return x.cache.allComposites;for(var S=[].concat(x.composites),g=0;g<x.composites.length;g++)S=S.concat(l.allComposites(x.composites[g]));return x.cache&&(x.cache.allComposites=S),S},l.get=function(x,S,g){var d,m;switch(g){case"body":d=l.allBodies(x);break;case"constraint":d=l.allConstraints(x);break;case"composite":d=l.allComposites(x).concat(x);break}return d?(m=d.filter(function(w){return w.id.toString()===S.toString()}),m.length===0?null:m[0]):null},l.move=function(x,S,g){return l.remove(x,S),l.add(g,S),x},l.rebase=function(x){for(var S=l.allBodies(x).concat(l.allConstraints(x)).concat(l.allComposites(x)),g=0;g<S.length;g++)S[g].id=_.nextId();return x},l.translate=function(x,S,g){for(var d=g?l.allBodies(x):x.bodies,m=0;m<d.length;m++)i.translate(d[m],S);return x},l.rotate=function(x,S,g,d){for(var m=Math.cos(S),w=Math.sin(S),C=d?l.allBodies(x):x.bodies,N=0;N<C.length;N++){var W=C[N],J=W.position.x-g.x,$=W.position.y-g.y;i.setPosition(W,{x:g.x+(J*m-$*w),y:g.y+(J*w+$*m)}),i.rotate(W,S)}return x},l.scale=function(x,S,g,d,m){for(var w=m?l.allBodies(x):x.bodies,C=0;C<w.length;C++){var N=w[C],W=N.position.x-d.x,J=N.position.y-d.y;i.setPosition(N,{x:d.x+W*S,y:d.y+J*g}),i.scale(N,S,g)}return x},l.bounds=function(x){for(var S=l.allBodies(x),g=[],d=0;d<S.length;d+=1){var m=S[d];g.push(m.bounds.min,m.bounds.max)}return v.create(g)}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(4),_=I(5),v=I(0);(function(){l._motionWakeThreshold=.18,l._motionSleepThreshold=.08,l._minBias=.9,l.update=function(i,x){for(var S=x/v._baseDelta,g=l._motionSleepThreshold,d=0;d<i.length;d++){var m=i[d],w=f.getSpeed(m),C=f.getAngularSpeed(m),N=w*w+C*C;if(m.force.x!==0||m.force.y!==0){l.set(m,!1);continue}var W=Math.min(m.motion,N),J=Math.max(m.motion,N);m.motion=l._minBias*W+(1-l._minBias)*J,m.sleepThreshold>0&&m.motion<g?(m.sleepCounter+=1,m.sleepCounter>=m.sleepThreshold/S&&l.set(m,!0)):m.sleepCounter>0&&(m.sleepCounter-=1)}},l.afterCollisions=function(i){for(var x=l._motionSleepThreshold,S=0;S<i.length;S++){var g=i[S];if(g.isActive){var d=g.collision,m=d.bodyA.parent,w=d.bodyB.parent;if(!(m.isSleeping&&w.isSleeping||m.isStatic||w.isStatic)&&(m.isSleeping||w.isSleeping)){var C=m.isSleeping&&!m.isStatic?m:w,N=C===m?w:m;!C.isStatic&&N.motion>x&&l.set(C,!1)}}}},l.set=function(i,x){var S=i.isSleeping;x?(i.isSleeping=!0,i.sleepCounter=i.sleepThreshold,i.positionImpulse.x=0,i.positionImpulse.y=0,i.positionPrev.x=i.position.x,i.positionPrev.y=i.position.y,i.anglePrev=i.angle,i.speed=0,i.angularSpeed=0,i.motion=0,S||_.trigger(i,"sleepStart")):(i.isSleeping=!1,i.sleepCounter=0,S&&_.trigger(i,"sleepEnd"))}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(3),_=I(9);(function(){var v=[],i={overlap:0,axis:null},x={overlap:0,axis:null};l.create=function(S,g){return{pair:null,collided:!1,bodyA:S,bodyB:g,parentA:S.parent,parentB:g.parent,depth:0,normal:{x:0,y:0},tangent:{x:0,y:0},penetration:{x:0,y:0},supports:[]}},l.collides=function(S,g,d){if(l._overlapAxes(i,S.vertices,g.vertices,S.axes),i.overlap<=0||(l._overlapAxes(x,g.vertices,S.vertices,g.axes),x.overlap<=0))return null;var m=d&&d.table[_.id(S,g)],w;m?w=m.collision:(w=l.create(S,g),w.collided=!0,w.bodyA=S.id<g.id?S:g,w.bodyB=S.id<g.id?g:S,w.parentA=w.bodyA.parent,w.parentB=w.bodyB.parent),S=w.bodyA,g=w.bodyB;var C;i.overlap<x.overlap?C=i:C=x;var N=w.normal,W=w.supports,J=C.axis,$=J.x,k=J.y;$*(g.position.x-S.position.x)+k*(g.position.y-S.position.y)<0?(N.x=$,N.y=k):(N.x=-$,N.y=-k),w.tangent.x=-N.y,w.tangent.y=N.x,w.depth=C.overlap,w.penetration.x=N.x*w.depth,w.penetration.y=N.y*w.depth;var O=l._findSupports(S,g,N,1),z=0;if(f.contains(S.vertices,O[0])&&(W[z++]=O[0]),f.contains(S.vertices,O[1])&&(W[z++]=O[1]),z<2){var L=l._findSupports(g,S,N,-1);f.contains(g.vertices,L[0])&&(W[z++]=L[0]),z<2&&f.contains(g.vertices,L[1])&&(W[z++]=L[1])}return z===0&&(W[z++]=O[0]),W.length=z,w},l._overlapAxes=function(S,g,d,m){var w=g.length,C=d.length,N=g[0].x,W=g[0].y,J=d[0].x,$=d[0].y,k=m.length,O=Number.MAX_VALUE,z=0,L,G,e,s,n,t;for(n=0;n<k;n++){var a=m[n],c=a.x,u=a.y,y=N*c+W*u,E=J*c+$*u,b=y,T=E;for(t=1;t<w;t+=1)s=g[t].x*c+g[t].y*u,s>b?b=s:s<y&&(y=s);for(t=1;t<C;t+=1)s=d[t].x*c+d[t].y*u,s>T?T=s:s<E&&(E=s);if(G=b-E,e=T-y,L=G<e?G:e,L<O&&(O=L,z=n,L<=0))break}S.axis=m[z],S.overlap=O},l._projectToAxis=function(S,g,d){for(var m=g[0].x*d.x+g[0].y*d.y,w=m,C=1;C<g.length;C+=1){var N=g[C].x*d.x+g[C].y*d.y;N>w?w=N:N<m&&(m=N)}S.min=m,S.max=w},l._findSupports=function(S,g,d,m){var w=g.vertices,C=w.length,N=S.position.x,W=S.position.y,J=d.x*m,$=d.y*m,k=Number.MAX_VALUE,O,z,L,G,e;for(e=0;e<C;e+=1)z=w[e],G=J*(N-z.x)+$*(W-z.y),G<k&&(k=G,O=z);return L=w[(C+O.index-1)%C],k=J*(N-L.x)+$*(W-L.y),z=w[(O.index+1)%C],J*(N-z.x)+$*(W-z.y)<k?(v[0]=O,v[1]=z,v):(v[0]=O,v[1]=L,v)}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(16);(function(){l.create=function(_,v){var i=_.bodyA,x=_.bodyB,S={id:l.id(i,x),bodyA:i,bodyB:x,collision:_,contacts:[],activeContacts:[],separation:0,isActive:!0,confirmedActive:!0,isSensor:i.isSensor||x.isSensor,timeCreated:v,timeUpdated:v,inverseMass:0,friction:0,frictionStatic:0,restitution:0,slop:0};return l.update(S,_,v),S},l.update=function(_,v,i){var x=_.contacts,S=v.supports,g=_.activeContacts,d=v.parentA,m=v.parentB,w=d.vertices.length;_.isActive=!0,_.timeUpdated=i,_.collision=v,_.separation=v.depth,_.inverseMass=d.inverseMass+m.inverseMass,_.friction=d.friction<m.friction?d.friction:m.friction,_.frictionStatic=d.frictionStatic>m.frictionStatic?d.frictionStatic:m.frictionStatic,_.restitution=d.restitution>m.restitution?d.restitution:m.restitution,_.slop=d.slop>m.slop?d.slop:m.slop,v.pair=_,g.length=0;for(var C=0;C<S.length;C++){var N=S[C],W=N.body===d?N.index:w+N.index,J=x[W];J?g.push(J):g.push(x[W]=f.create(N))}},l.setActive=function(_,v,i){v?(_.isActive=!0,_.timeUpdated=i):(_.isActive=!1,_.activeContacts.length=0)},l.id=function(_,v){return _.id<v.id?"A"+_.id+"B"+v.id:"A"+v.id+"B"+_.id}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(3),_=I(2),v=I(7),i=I(1),x=I(11),S=I(0);(function(){l._warming=.4,l._torqueDampen=1,l._minLength=1e-6,l.create=function(g){var d=g;d.bodyA&&!d.pointA&&(d.pointA={x:0,y:0}),d.bodyB&&!d.pointB&&(d.pointB={x:0,y:0});var m=d.bodyA?_.add(d.bodyA.position,d.pointA):d.pointA,w=d.bodyB?_.add(d.bodyB.position,d.pointB):d.pointB,C=_.magnitude(_.sub(m,w));d.length=typeof d.length<"u"?d.length:C,d.id=d.id||S.nextId(),d.label=d.label||"Constraint",d.type="constraint",d.stiffness=d.stiffness||(d.length>0?1:.7),d.damping=d.damping||0,d.angularStiffness=d.angularStiffness||0,d.angleA=d.bodyA?d.bodyA.angle:d.angleA,d.angleB=d.bodyB?d.bodyB.angle:d.angleB,d.plugin={};var N={visible:!0,lineWidth:2,strokeStyle:"#ffffff",type:"line",anchors:!0};return d.length===0&&d.stiffness>.1?(N.type="pin",N.anchors=!1):d.stiffness<.9&&(N.type="spring"),d.render=S.extend(N,d.render),d},l.preSolveAll=function(g){for(var d=0;d<g.length;d+=1){var m=g[d],w=m.constraintImpulse;m.isStatic||w.x===0&&w.y===0&&w.angle===0||(m.position.x+=w.x,m.position.y+=w.y,m.angle+=w.angle)}},l.solveAll=function(g,d){for(var m=S.clamp(d/S._baseDelta,0,1),w=0;w<g.length;w+=1){var C=g[w],N=!C.bodyA||C.bodyA&&C.bodyA.isStatic,W=!C.bodyB||C.bodyB&&C.bodyB.isStatic;(N||W)&&l.solve(g[w],m)}for(w=0;w<g.length;w+=1)C=g[w],N=!C.bodyA||C.bodyA&&C.bodyA.isStatic,W=!C.bodyB||C.bodyB&&C.bodyB.isStatic,!N&&!W&&l.solve(g[w],m)},l.solve=function(g,d){var m=g.bodyA,w=g.bodyB,C=g.pointA,N=g.pointB;if(!(!m&&!w)){m&&!m.isStatic&&(_.rotate(C,m.angle-g.angleA,C),g.angleA=m.angle),w&&!w.isStatic&&(_.rotate(N,w.angle-g.angleB,N),g.angleB=w.angle);var W=C,J=N;if(m&&(W=_.add(m.position,C)),w&&(J=_.add(w.position,N)),!(!W||!J)){var $=_.sub(W,J),k=_.magnitude($);k<l._minLength&&(k=l._minLength);var O=(k-g.length)/k,z=g.stiffness>=1||g.length===0,L=z?g.stiffness*d:g.stiffness*d*d,G=g.damping*d,e=_.mult($,O*L),s=(m?m.inverseMass:0)+(w?w.inverseMass:0),n=(m?m.inverseInertia:0)+(w?w.inverseInertia:0),t=s+n,a,c,u,y,E;if(G>0){var b=_.create();u=_.div($,k),E=_.sub(w&&_.sub(w.position,w.positionPrev)||b,m&&_.sub(m.position,m.positionPrev)||b),y=_.dot(u,E)}m&&!m.isStatic&&(c=m.inverseMass/s,m.constraintImpulse.x-=e.x*c,m.constraintImpulse.y-=e.y*c,m.position.x-=e.x*c,m.position.y-=e.y*c,G>0&&(m.positionPrev.x-=G*u.x*y*c,m.positionPrev.y-=G*u.y*y*c),a=_.cross(C,e)/t*l._torqueDampen*m.inverseInertia*(1-g.angularStiffness),m.constraintImpulse.angle-=a,m.angle-=a),w&&!w.isStatic&&(c=w.inverseMass/s,w.constraintImpulse.x+=e.x*c,w.constraintImpulse.y+=e.y*c,w.position.x+=e.x*c,w.position.y+=e.y*c,G>0&&(w.positionPrev.x+=G*u.x*y*c,w.positionPrev.y+=G*u.y*y*c),a=_.cross(N,e)/t*l._torqueDampen*w.inverseInertia*(1-g.angularStiffness),w.constraintImpulse.angle+=a,w.angle+=a)}}},l.postSolveAll=function(g){for(var d=0;d<g.length;d++){var m=g[d],w=m.constraintImpulse;if(!(m.isStatic||w.x===0&&w.y===0&&w.angle===0)){v.set(m,!1);for(var C=0;C<m.parts.length;C++){var N=m.parts[C];f.translate(N.vertices,w),C>0&&(N.position.x+=w.x,N.position.y+=w.y),w.angle!==0&&(f.rotate(N.vertices,w.angle,m.position),x.rotate(N.axes,w.angle),C>0&&_.rotateAbout(N.position,w.angle,m.position,N.position)),i.update(N.bounds,N.vertices,m.velocity)}w.angle*=l._warming,w.x*=l._warming,w.y*=l._warming}}},l.pointAWorld=function(g){return{x:(g.bodyA?g.bodyA.position.x:0)+(g.pointA?g.pointA.x:0),y:(g.bodyA?g.bodyA.position.y:0)+(g.pointA?g.pointA.y:0)}},l.pointBWorld=function(g){return{x:(g.bodyB?g.bodyB.position.x:0)+(g.pointB?g.pointB.x:0),y:(g.bodyB?g.bodyB.position.y:0)+(g.pointB?g.pointB.y:0)}}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(2),_=I(0);(function(){l.fromVertices=function(v){for(var i={},x=0;x<v.length;x++){var S=(x+1)%v.length,g=f.normalise({x:v[S].y-v[x].y,y:v[x].x-v[S].x}),d=g.y===0?1/0:g.x/g.y;d=d.toFixed(3).toString(),i[d]=g}return _.values(i)},l.rotate=function(v,i){if(i!==0)for(var x=Math.cos(i),S=Math.sin(i),g=0;g<v.length;g++){var d=v[g],m;m=d.x*x-d.y*S,d.y=d.x*S+d.y*x,d.x=m}}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(3),_=I(0),v=I(4),i=I(1),x=I(2);(function(){l.rectangle=function(S,g,d,m,w){w=w||{};var C={label:"Rectangle Body",position:{x:S,y:g},vertices:f.fromPath("L 0 0 L "+d+" 0 L "+d+" "+m+" L 0 "+m)};if(w.chamfer){var N=w.chamfer;C.vertices=f.chamfer(C.vertices,N.radius,N.quality,N.qualityMin,N.qualityMax),delete w.chamfer}return v.create(_.extend({},C,w))},l.trapezoid=function(S,g,d,m,w,C){C=C||{},w*=.5;var N=(1-w*2)*d,W=d*w,J=W+N,$=J+W,k;w<.5?k="L 0 0 L "+W+" "+-m+" L "+J+" "+-m+" L "+$+" 0":k="L 0 0 L "+J+" "+-m+" L "+$+" 0";var O={label:"Trapezoid Body",position:{x:S,y:g},vertices:f.fromPath(k)};if(C.chamfer){var z=C.chamfer;O.vertices=f.chamfer(O.vertices,z.radius,z.quality,z.qualityMin,z.qualityMax),delete C.chamfer}return v.create(_.extend({},O,C))},l.circle=function(S,g,d,m,w){m=m||{};var C={label:"Circle Body",circleRadius:d};w=w||25;var N=Math.ceil(Math.max(10,Math.min(w,d)));return N%2===1&&(N+=1),l.polygon(S,g,N,d,_.extend({},C,m))},l.polygon=function(S,g,d,m,w){if(w=w||{},d<3)return l.circle(S,g,m,w);for(var C=2*Math.PI/d,N="",W=C*.5,J=0;J<d;J+=1){var $=W+J*C,k=Math.cos($)*m,O=Math.sin($)*m;N+="L "+k.toFixed(3)+" "+O.toFixed(3)+" "}var z={label:"Polygon Body",position:{x:S,y:g},vertices:f.fromPath(N)};if(w.chamfer){var L=w.chamfer;z.vertices=f.chamfer(z.vertices,L.radius,L.quality,L.qualityMin,L.qualityMax),delete w.chamfer}return v.create(_.extend({},z,w))},l.fromVertices=function(S,g,d,m,w,C,N,W){var J=_.getDecomp(),$,k,O,z,L,G,e,s,n,t,a;for($=!!(J&&J.quickDecomp),m=m||{},O=[],w=typeof w<"u"?w:!1,C=typeof C<"u"?C:.01,N=typeof N<"u"?N:10,W=typeof W<"u"?W:.01,_.isArray(d[0])||(d=[d]),t=0;t<d.length;t+=1)if(G=d[t],z=f.isConvex(G),L=!z,L&&!$&&_.warnOnce("Bodies.fromVertices: Install the 'poly-decomp' library and use Common.setDecomp or provide 'decomp' as a global to decompose concave vertices."),z||!$)z?G=f.clockwiseSort(G):G=f.hull(G),O.push({position:{x:S,y:g},vertices:G});else{var c=G.map(function(te){return[te.x,te.y]});J.makeCCW(c),C!==!1&&J.removeCollinearPoints(c,C),W!==!1&&J.removeDuplicatePoints&&J.removeDuplicatePoints(c,W);var u=J.quickDecomp(c);for(e=0;e<u.length;e++){var y=u[e],E=y.map(function(te){return{x:te[0],y:te[1]}});N>0&&f.area(E)<N||O.push({position:f.centre(E),vertices:E})}}for(e=0;e<O.length;e++)O[e]=v.create(_.extend(O[e],m));if(w){var b=5;for(e=0;e<O.length;e++){var T=O[e];for(s=e+1;s<O.length;s++){var F=O[s];if(i.overlaps(T.bounds,F.bounds)){var U=T.vertices,Q=F.vertices;for(n=0;n<T.vertices.length;n++)for(a=0;a<F.vertices.length;a++){var ee=x.magnitudeSquared(x.sub(U[(n+1)%U.length],Q[a])),ie=x.magnitudeSquared(x.sub(U[n],Q[(a+1)%Q.length]));ee<b&&ie<b&&(U[n].isInternal=!0,Q[a].isInternal=!0)}}}}}return O.length>1?(k=v.create(_.extend({parts:O.slice(0)},m)),v.setPosition(k,{x:S,y:g}),k):O[0]}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(0),_=I(8);(function(){l.create=function(v){var i={bodies:[],pairs:null};return f.extend(i,v)},l.setBodies=function(v,i){v.bodies=i.slice(0)},l.clear=function(v){v.bodies=[]},l.collisions=function(v){var i=[],x=v.pairs,S=v.bodies,g=S.length,d=l.canCollide,m=_.collides,w,C;for(S.sort(l._compareBoundsX),w=0;w<g;w++){var N=S[w],W=N.bounds,J=N.bounds.max.x,$=N.bounds.max.y,k=N.bounds.min.y,O=N.isStatic||N.isSleeping,z=N.parts.length,L=z===1;for(C=w+1;C<g;C++){var G=S[C],e=G.bounds;if(e.min.x>J)break;if(!($<e.min.y||k>e.max.y)&&!(O&&(G.isStatic||G.isSleeping))&&d(N.collisionFilter,G.collisionFilter)){var s=G.parts.length;if(L&&s===1){var n=m(N,G,x);n&&i.push(n)}else for(var t=z>1?1:0,a=s>1?1:0,c=t;c<z;c++)for(var u=N.parts[c],W=u.bounds,y=a;y<s;y++){var E=G.parts[y],e=E.bounds;if(!(W.min.x>e.max.x||W.max.x<e.min.x||W.max.y<e.min.y||W.min.y>e.max.y)){var n=m(u,E,x);n&&i.push(n)}}}}}return i},l.canCollide=function(v,i){return v.group===i.group&&v.group!==0?v.group>0:(v.mask&i.category)!==0&&(i.mask&v.category)!==0},l._compareBoundsX=function(v,i){return v.bounds.min.x-i.bounds.min.x}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(0);(function(){l.create=function(_){var v={};return _||f.log("Mouse.create: element was undefined, defaulting to document.body","warn"),v.element=_||document.body,v.absolute={x:0,y:0},v.position={x:0,y:0},v.mousedownPosition={x:0,y:0},v.mouseupPosition={x:0,y:0},v.offset={x:0,y:0},v.scale={x:1,y:1},v.wheelDelta=0,v.button=-1,v.pixelRatio=parseInt(v.element.getAttribute("data-pixel-ratio"),10)||1,v.sourceEvents={mousemove:null,mousedown:null,mouseup:null,mousewheel:null},v.mousemove=function(i){var x=l._getRelativeMousePosition(i,v.element,v.pixelRatio),S=i.changedTouches;S&&(v.button=0,i.preventDefault()),v.absolute.x=x.x,v.absolute.y=x.y,v.position.x=v.absolute.x*v.scale.x+v.offset.x,v.position.y=v.absolute.y*v.scale.y+v.offset.y,v.sourceEvents.mousemove=i},v.mousedown=function(i){var x=l._getRelativeMousePosition(i,v.element,v.pixelRatio),S=i.changedTouches;S?(v.button=0,i.preventDefault()):v.button=i.button,v.absolute.x=x.x,v.absolute.y=x.y,v.position.x=v.absolute.x*v.scale.x+v.offset.x,v.position.y=v.absolute.y*v.scale.y+v.offset.y,v.mousedownPosition.x=v.position.x,v.mousedownPosition.y=v.position.y,v.sourceEvents.mousedown=i},v.mouseup=function(i){var x=l._getRelativeMousePosition(i,v.element,v.pixelRatio),S=i.changedTouches;S&&i.preventDefault(),v.button=-1,v.absolute.x=x.x,v.absolute.y=x.y,v.position.x=v.absolute.x*v.scale.x+v.offset.x,v.position.y=v.absolute.y*v.scale.y+v.offset.y,v.mouseupPosition.x=v.position.x,v.mouseupPosition.y=v.position.y,v.sourceEvents.mouseup=i},v.mousewheel=function(i){v.wheelDelta=Math.max(-1,Math.min(1,i.wheelDelta||-i.detail)),i.preventDefault()},l.setElement(v,v.element),v},l.setElement=function(_,v){_.element=v,v.addEventListener("mousemove",_.mousemove),v.addEventListener("mousedown",_.mousedown),v.addEventListener("mouseup",_.mouseup),v.addEventListener("mousewheel",_.mousewheel),v.addEventListener("DOMMouseScroll",_.mousewheel),v.addEventListener("touchmove",_.mousemove),v.addEventListener("touchstart",_.mousedown),v.addEventListener("touchend",_.mouseup)},l.clearSourceEvents=function(_){_.sourceEvents.mousemove=null,_.sourceEvents.mousedown=null,_.sourceEvents.mouseup=null,_.sourceEvents.mousewheel=null,_.wheelDelta=0},l.setOffset=function(_,v){_.offset.x=v.x,_.offset.y=v.y,_.position.x=_.absolute.x*_.scale.x+_.offset.x,_.position.y=_.absolute.y*_.scale.y+_.offset.y},l.setScale=function(_,v){_.scale.x=v.x,_.scale.y=v.y,_.position.x=_.absolute.x*_.scale.x+_.offset.x,_.position.y=_.absolute.y*_.scale.y+_.offset.y},l._getRelativeMousePosition=function(_,v,i){var x=v.getBoundingClientRect(),S=document.documentElement||document.body.parentNode||document.body,g=window.pageXOffset!==void 0?window.pageXOffset:S.scrollLeft,d=window.pageYOffset!==void 0?window.pageYOffset:S.scrollTop,m=_.changedTouches,w,C;return m?(w=m[0].pageX-x.left-g,C=m[0].pageY-x.top-d):(w=_.pageX-x.left-g,C=_.pageY-x.top-d),{x:w/(v.clientWidth/(v.width||v.clientWidth)*i),y:C/(v.clientHeight/(v.height||v.clientHeight)*i)}}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(0);(function(){l._registry={},l.register=function(_){if(l.isPlugin(_)||f.warn("Plugin.register:",l.toString(_),"does not implement all required fields."),_.name in l._registry){var v=l._registry[_.name],i=l.versionParse(_.version).number,x=l.versionParse(v.version).number;i>x?(f.warn("Plugin.register:",l.toString(v),"was upgraded to",l.toString(_)),l._registry[_.name]=_):i<x?f.warn("Plugin.register:",l.toString(v),"can not be downgraded to",l.toString(_)):_!==v&&f.warn("Plugin.register:",l.toString(_),"is already registered to different plugin object")}else l._registry[_.name]=_;return _},l.resolve=function(_){return l._registry[l.dependencyParse(_).name]},l.toString=function(_){return typeof _=="string"?_:(_.name||"anonymous")+"@"+(_.version||_.range||"0.0.0")},l.isPlugin=function(_){return _&&_.name&&_.version&&_.install},l.isUsed=function(_,v){return _.used.indexOf(v)>-1},l.isFor=function(_,v){var i=_.for&&l.dependencyParse(_.for);return!_.for||v.name===i.name&&l.versionSatisfies(v.version,i.range)},l.use=function(_,v){if(_.uses=(_.uses||[]).concat(v||[]),_.uses.length===0){f.warn("Plugin.use:",l.toString(_),"does not specify any dependencies to install.");return}for(var i=l.dependencies(_),x=f.topologicalSort(i),S=[],g=0;g<x.length;g+=1)if(x[g]!==_.name){var d=l.resolve(x[g]);if(!d){S.push("❌ "+x[g]);continue}l.isUsed(_,d.name)||(l.isFor(d,_)||(f.warn("Plugin.use:",l.toString(d),"is for",d.for,"but installed on",l.toString(_)+"."),d._warned=!0),d.install?d.install(_):(f.warn("Plugin.use:",l.toString(d),"does not specify an install function."),d._warned=!0),d._warned?(S.push("🔶 "+l.toString(d)),delete d._warned):S.push("✅ "+l.toString(d)),_.used.push(d.name))}S.length>0&&f.info(S.join("  "))},l.dependencies=function(_,v){var i=l.dependencyParse(_),x=i.name;if(v=v||{},!(x in v)){_=l.resolve(_)||_,v[x]=f.map(_.uses||[],function(g){l.isPlugin(g)&&l.register(g);var d=l.dependencyParse(g),m=l.resolve(g);return m&&!l.versionSatisfies(m.version,d.range)?(f.warn("Plugin.dependencies:",l.toString(m),"does not satisfy",l.toString(d),"used by",l.toString(i)+"."),m._warned=!0,_._warned=!0):m||(f.warn("Plugin.dependencies:",l.toString(g),"used by",l.toString(i),"could not be resolved."),_._warned=!0),d.name});for(var S=0;S<v[x].length;S+=1)l.dependencies(v[x][S],v);return v}},l.dependencyParse=function(_){if(f.isString(_)){var v=/^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;return v.test(_)||f.warn("Plugin.dependencyParse:",_,"is not a valid dependency string."),{name:_.split("@")[0],range:_.split("@")[1]||"*"}}return{name:_.name,range:_.range||_.version}},l.versionParse=function(_){var v=/^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;v.test(_)||f.warn("Plugin.versionParse:",_,"is not a valid version or range.");var i=v.exec(_),x=Number(i[4]),S=Number(i[5]),g=Number(i[6]);return{isRange:!!(i[1]||i[2]),version:i[3],range:_,operator:i[1]||i[2]||"",major:x,minor:S,patch:g,parts:[x,S,g],prerelease:i[7],number:x*1e8+S*1e4+g}},l.versionSatisfies=function(_,v){v=v||"*";var i=l.versionParse(v),x=l.versionParse(_);if(i.isRange){if(i.operator==="*"||_==="*")return!0;if(i.operator===">")return x.number>i.number;if(i.operator===">=")return x.number>=i.number;if(i.operator==="~")return x.major===i.major&&x.minor===i.minor&&x.patch>=i.patch;if(i.operator==="^")return i.major>0?x.major===i.major&&x.number>=i.number:i.minor>0?x.minor===i.minor&&x.patch>=i.patch:x.patch===i.patch}return _===v||_==="*"}})()},function(Pe,be){var I={};Pe.exports=I,function(){I.create=function(l){return{vertex:l,normalImpulse:0,tangentImpulse:0}}}()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(7),_=I(18),v=I(13),i=I(19),x=I(5),S=I(6),g=I(10),d=I(0),m=I(4);(function(){l.create=function(w){w=w||{};var C={positionIterations:6,velocityIterations:4,constraintIterations:2,enableSleeping:!1,events:[],plugin:{},gravity:{x:0,y:1,scale:.001},timing:{timestamp:0,timeScale:1,lastDelta:0,lastElapsed:0}},N=d.extend(C,w);return N.world=w.world||S.create({label:"World"}),N.pairs=w.pairs||i.create(),N.detector=w.detector||v.create(),N.grid={buckets:[]},N.world.gravity=N.gravity,N.broadphase=N.grid,N.metrics={},N},l.update=function(w,C){var N=d.now(),W=w.world,J=w.detector,$=w.pairs,k=w.timing,O=k.timestamp,z;C=typeof C<"u"?C:d._baseDelta,C*=k.timeScale,k.timestamp+=C,k.lastDelta=C;var L={timestamp:k.timestamp,delta:C};x.trigger(w,"beforeUpdate",L);var G=S.allBodies(W),e=S.allConstraints(W);for(W.isModified&&(v.setBodies(J,G),S.setModified(W,!1,!1,!0)),w.enableSleeping&&f.update(G,C),l._bodiesApplyGravity(G,w.gravity),C>0&&l._bodiesUpdate(G,C),g.preSolveAll(G),z=0;z<w.constraintIterations;z++)g.solveAll(e,C);g.postSolveAll(G),J.pairs=w.pairs;var s=v.collisions(J);i.update($,s,O),w.enableSleeping&&f.afterCollisions($.list),$.collisionStart.length>0&&x.trigger(w,"collisionStart",{pairs:$.collisionStart});var n=d.clamp(20/w.positionIterations,0,1);for(_.preSolvePosition($.list),z=0;z<w.positionIterations;z++)_.solvePosition($.list,C,n);for(_.postSolvePosition(G),g.preSolveAll(G),z=0;z<w.constraintIterations;z++)g.solveAll(e,C);for(g.postSolveAll(G),_.preSolveVelocity($.list),z=0;z<w.velocityIterations;z++)_.solveVelocity($.list,C);return l._bodiesUpdateVelocities(G),$.collisionActive.length>0&&x.trigger(w,"collisionActive",{pairs:$.collisionActive}),$.collisionEnd.length>0&&x.trigger(w,"collisionEnd",{pairs:$.collisionEnd}),l._bodiesClearForces(G),x.trigger(w,"afterUpdate",L),w.timing.lastElapsed=d.now()-N,w},l.merge=function(w,C){if(d.extend(w,C),C.world){w.world=C.world,l.clear(w);for(var N=S.allBodies(w.world),W=0;W<N.length;W++){var J=N[W];f.set(J,!1),J.id=d.nextId()}}},l.clear=function(w){i.clear(w.pairs),v.clear(w.detector)},l._bodiesClearForces=function(w){for(var C=w.length,N=0;N<C;N++){var W=w[N];W.force.x=0,W.force.y=0,W.torque=0}},l._bodiesApplyGravity=function(w,C){var N=typeof C.scale<"u"?C.scale:.001,W=w.length;if(!(C.x===0&&C.y===0||N===0))for(var J=0;J<W;J++){var $=w[J];$.isStatic||$.isSleeping||($.force.y+=$.mass*C.y*N,$.force.x+=$.mass*C.x*N)}},l._bodiesUpdate=function(w,C){for(var N=w.length,W=0;W<N;W++){var J=w[W];J.isStatic||J.isSleeping||m.update(J,C)}},l._bodiesUpdateVelocities=function(w){for(var C=w.length,N=0;N<C;N++)m.updateVelocities(w[N])}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(3),_=I(0),v=I(1);(function(){l._restingThresh=2,l._restingThreshTangent=Math.sqrt(6),l._positionDampen=.9,l._positionWarming=.8,l._frictionNormalMultiplier=5,l._frictionMaxStatic=Number.MAX_VALUE,l.preSolvePosition=function(i){var x,S,g,d=i.length;for(x=0;x<d;x++)S=i[x],S.isActive&&(g=S.activeContacts.length,S.collision.parentA.totalContacts+=g,S.collision.parentB.totalContacts+=g)},l.solvePosition=function(i,x,S){var g,d,m,w,C,N,W,J,$=l._positionDampen*(S||1),k=_.clamp(x/_._baseDelta,0,1),O=i.length;for(g=0;g<O;g++)d=i[g],!(!d.isActive||d.isSensor)&&(m=d.collision,w=m.parentA,C=m.parentB,N=m.normal,d.separation=N.x*(C.positionImpulse.x+m.penetration.x-w.positionImpulse.x)+N.y*(C.positionImpulse.y+m.penetration.y-w.positionImpulse.y));for(g=0;g<O;g++)d=i[g],!(!d.isActive||d.isSensor)&&(m=d.collision,w=m.parentA,C=m.parentB,N=m.normal,J=d.separation-d.slop*k,(w.isStatic||C.isStatic)&&(J*=2),w.isStatic||w.isSleeping||(W=$/w.totalContacts,w.positionImpulse.x+=N.x*J*W,w.positionImpulse.y+=N.y*J*W),C.isStatic||C.isSleeping||(W=$/C.totalContacts,C.positionImpulse.x-=N.x*J*W,C.positionImpulse.y-=N.y*J*W))},l.postSolvePosition=function(i){for(var x=l._positionWarming,S=i.length,g=f.translate,d=v.update,m=0;m<S;m++){var w=i[m],C=w.positionImpulse,N=C.x,W=C.y,J=w.velocity;if(w.totalContacts=0,N!==0||W!==0){for(var $=0;$<w.parts.length;$++){var k=w.parts[$];g(k.vertices,C),d(k.bounds,k.vertices,J),k.position.x+=N,k.position.y+=W}w.positionPrev.x+=N,w.positionPrev.y+=W,N*J.x+W*J.y<0?(C.x=0,C.y=0):(C.x*=x,C.y*=x)}}},l.preSolveVelocity=function(i){var x=i.length,S,g;for(S=0;S<x;S++){var d=i[S];if(!(!d.isActive||d.isSensor)){var m=d.activeContacts,w=m.length,C=d.collision,N=C.parentA,W=C.parentB,J=C.normal,$=C.tangent;for(g=0;g<w;g++){var k=m[g],O=k.vertex,z=k.normalImpulse,L=k.tangentImpulse;if(z!==0||L!==0){var G=J.x*z+$.x*L,e=J.y*z+$.y*L;N.isStatic||N.isSleeping||(N.positionPrev.x+=G*N.inverseMass,N.positionPrev.y+=e*N.inverseMass,N.anglePrev+=N.inverseInertia*((O.x-N.position.x)*e-(O.y-N.position.y)*G)),W.isStatic||W.isSleeping||(W.positionPrev.x-=G*W.inverseMass,W.positionPrev.y-=e*W.inverseMass,W.anglePrev-=W.inverseInertia*((O.x-W.position.x)*e-(O.y-W.position.y)*G))}}}}},l.solveVelocity=function(i,x){var S=x/_._baseDelta,g=S*S,d=g*S,m=-l._restingThresh*S,w=l._restingThreshTangent,C=l._frictionNormalMultiplier*S,N=l._frictionMaxStatic,W=i.length,J,$,k,O;for(k=0;k<W;k++){var z=i[k];if(!(!z.isActive||z.isSensor)){var L=z.collision,G=L.parentA,e=L.parentB,s=G.velocity,n=e.velocity,t=L.normal.x,a=L.normal.y,c=L.tangent.x,u=L.tangent.y,y=z.activeContacts,E=y.length,b=1/E,T=G.inverseMass+e.inverseMass,F=z.friction*z.frictionStatic*C;for(s.x=G.position.x-G.positionPrev.x,s.y=G.position.y-G.positionPrev.y,n.x=e.position.x-e.positionPrev.x,n.y=e.position.y-e.positionPrev.y,G.angularVelocity=G.angle-G.anglePrev,e.angularVelocity=e.angle-e.anglePrev,O=0;O<E;O++){var U=y[O],Q=U.vertex,ee=Q.x-G.position.x,ie=Q.y-G.position.y,te=Q.x-e.position.x,Ee=Q.y-e.position.y,Ce=s.x-ie*G.angularVelocity,Se=s.y+ee*G.angularVelocity,Be=n.x-Ee*e.angularVelocity,rt=n.y+te*e.angularVelocity,et=Ce-Be,R=Se-rt,le=t*et+a*R,V=c*et+u*R,he=z.separation+le,ge=Math.min(he,1);ge=he<0?0:ge;var Y=ge*F;V<-Y||V>Y?($=V>0?V:-V,J=z.friction*(V>0?1:-1)*d,J<-$?J=-$:J>$&&(J=$)):(J=V,$=N);var Me=ee*a-ie*t,Oe=te*a-Ee*t,_e=b/(T+G.inverseInertia*Me*Me+e.inverseInertia*Oe*Oe),me=(1+z.restitution)*le*_e;if(J*=_e,le<m)U.normalImpulse=0;else{var $e=U.normalImpulse;U.normalImpulse+=me,U.normalImpulse>0&&(U.normalImpulse=0),me=U.normalImpulse-$e}if(V<-w||V>w)U.tangentImpulse=0;else{var Qe=U.tangentImpulse;U.tangentImpulse+=J,U.tangentImpulse<-$&&(U.tangentImpulse=-$),U.tangentImpulse>$&&(U.tangentImpulse=$),J=U.tangentImpulse-Qe}var Ge=t*me+c*J,ye=a*me+u*J;G.isStatic||G.isSleeping||(G.positionPrev.x+=Ge*G.inverseMass,G.positionPrev.y+=ye*G.inverseMass,G.anglePrev+=(ee*ye-ie*Ge)*G.inverseInertia),e.isStatic||e.isSleeping||(e.positionPrev.x-=Ge*e.inverseMass,e.positionPrev.y-=ye*e.inverseMass,e.anglePrev-=(te*ye-Ee*Ge)*e.inverseInertia)}}}}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(9),_=I(0);(function(){l.create=function(v){return _.extend({table:{},list:[],collisionStart:[],collisionActive:[],collisionEnd:[]},v)},l.update=function(v,i,x){var S=v.list,g=S.length,d=v.table,m=i.length,w=v.collisionStart,C=v.collisionEnd,N=v.collisionActive,W,J,$,k;for(w.length=0,C.length=0,N.length=0,k=0;k<g;k++)S[k].confirmedActive=!1;for(k=0;k<m;k++)W=i[k],$=W.pair,$?($.isActive?N.push($):w.push($),f.update($,W,x),$.confirmedActive=!0):($=f.create(W,x),d[$.id]=$,w.push($),S.push($));var O=[];for(g=S.length,k=0;k<g;k++)$=S[k],$.confirmedActive||(f.setActive($,!1,x),C.push($),!$.collision.bodyA.isSleeping&&!$.collision.bodyB.isSleeping&&O.push(k));for(k=0;k<O.length;k++)J=O[k]-k,$=S[J],S.splice(J,1),delete d[$.id]},l.clear=function(v){return v.table={},v.list.length=0,v.collisionStart.length=0,v.collisionActive.length=0,v.collisionEnd.length=0,v}})()},function(Pe,be,I){var l=Pe.exports=I(21);l.Axes=I(11),l.Bodies=I(12),l.Body=I(4),l.Bounds=I(1),l.Collision=I(8),l.Common=I(0),l.Composite=I(6),l.Composites=I(22),l.Constraint=I(10),l.Contact=I(16),l.Detector=I(13),l.Engine=I(17),l.Events=I(5),l.Grid=I(23),l.Mouse=I(14),l.MouseConstraint=I(24),l.Pair=I(9),l.Pairs=I(19),l.Plugin=I(15),l.Query=I(25),l.Render=I(26),l.Resolver=I(18),l.Runner=I(27),l.SAT=I(28),l.Sleeping=I(7),l.Svg=I(29),l.Vector=I(2),l.Vertices=I(3),l.World=I(30),l.Engine.run=l.Runner.run,l.Common.deprecated(l.Engine,"run","Engine.run ➤ use Matter.Runner.run(engine) instead")},function(Pe,be,I){var l={};Pe.exports=l;var f=I(15),_=I(0);(function(){l.name="matter-js",l.version="0.19.0",l.uses=[],l.used=[],l.use=function(){f.use(l,Array.prototype.slice.call(arguments))},l.before=function(v,i){return v=v.replace(/^Matter./,""),_.chainPathBefore(l,v,i)},l.after=function(v,i){return v=v.replace(/^Matter./,""),_.chainPathAfter(l,v,i)}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(6),_=I(10),v=I(0),i=I(4),x=I(12),S=v.deprecated;(function(){l.stack=function(g,d,m,w,C,N,W){for(var J=f.create({label:"Stack"}),$=g,k=d,O,z=0,L=0;L<w;L++){for(var G=0,e=0;e<m;e++){var s=W($,k,e,L,O,z);if(s){var n=s.bounds.max.y-s.bounds.min.y,t=s.bounds.max.x-s.bounds.min.x;n>G&&(G=n),i.translate(s,{x:t*.5,y:n*.5}),$=s.bounds.max.x+C,f.addBody(J,s),O=s,z+=1}else $+=C}k+=G+N,$=g}return J},l.chain=function(g,d,m,w,C,N){for(var W=g.bodies,J=1;J<W.length;J++){var $=W[J-1],k=W[J],O=$.bounds.max.y-$.bounds.min.y,z=$.bounds.max.x-$.bounds.min.x,L=k.bounds.max.y-k.bounds.min.y,G=k.bounds.max.x-k.bounds.min.x,e={bodyA:$,pointA:{x:z*d,y:O*m},bodyB:k,pointB:{x:G*w,y:L*C}},s=v.extend(e,N);f.addConstraint(g,_.create(s))}return g.label+=" Chain",g},l.mesh=function(g,d,m,w,C){var N=g.bodies,W,J,$,k,O;for(W=0;W<m;W++){for(J=1;J<d;J++)$=N[J-1+W*d],k=N[J+W*d],f.addConstraint(g,_.create(v.extend({bodyA:$,bodyB:k},C)));if(W>0)for(J=0;J<d;J++)$=N[J+(W-1)*d],k=N[J+W*d],f.addConstraint(g,_.create(v.extend({bodyA:$,bodyB:k},C))),w&&J>0&&(O=N[J-1+(W-1)*d],f.addConstraint(g,_.create(v.extend({bodyA:O,bodyB:k},C)))),w&&J<d-1&&(O=N[J+1+(W-1)*d],f.addConstraint(g,_.create(v.extend({bodyA:O,bodyB:k},C))))}return g.label+=" Mesh",g},l.pyramid=function(g,d,m,w,C,N,W){return l.stack(g,d,m,w,C,N,function(J,$,k,O,z,L){var G=Math.min(w,Math.ceil(m/2)),e=z?z.bounds.max.x-z.bounds.min.x:0;if(!(O>G)){O=G-O;var s=O,n=m-1-O;if(!(k<s||k>n)){L===1&&i.translate(z,{x:(k+(m%2===1?1:-1))*e,y:0});var t=z?k*e:0;return W(g+t+k*C,$,k,O,z,L)}}})},l.newtonsCradle=function(g,d,m,w,C){for(var N=f.create({label:"Newtons Cradle"}),W=0;W<m;W++){var J=1.9,$=x.circle(g+W*(w*J),d+C,w,{inertia:1/0,restitution:1,friction:0,frictionAir:1e-4,slop:1}),k=_.create({pointA:{x:g+W*(w*J),y:d},bodyB:$});f.addBody(N,$),f.addConstraint(N,k)}return N},S(l,"newtonsCradle","Composites.newtonsCradle ➤ moved to newtonsCradle example"),l.car=function(g,d,m,w,C){var N=i.nextGroup(!0),W=20,J=-m*.5+W,$=m*.5-W,k=0,O=f.create({label:"Car"}),z=x.rectangle(g,d,m,w,{collisionFilter:{group:N},chamfer:{radius:w*.5},density:2e-4}),L=x.circle(g+J,d+k,C,{collisionFilter:{group:N},friction:.8}),G=x.circle(g+$,d+k,C,{collisionFilter:{group:N},friction:.8}),e=_.create({bodyB:z,pointB:{x:J,y:k},bodyA:L,stiffness:1,length:0}),s=_.create({bodyB:z,pointB:{x:$,y:k},bodyA:G,stiffness:1,length:0});return f.addBody(O,z),f.addBody(O,L),f.addBody(O,G),f.addConstraint(O,e),f.addConstraint(O,s),O},S(l,"car","Composites.car ➤ moved to car example"),l.softBody=function(g,d,m,w,C,N,W,J,$,k){$=v.extend({inertia:1/0},$),k=v.extend({stiffness:.2,render:{type:"line",anchors:!1}},k);var O=l.stack(g,d,m,w,C,N,function(z,L){return x.circle(z,L,J,$)});return l.mesh(O,m,w,W,k),O.label="Soft Body",O},S(l,"softBody","Composites.softBody ➤ moved to softBody and cloth examples")})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(9),_=I(0),v=_.deprecated;(function(){l.create=function(i){var x={buckets:{},pairs:{},pairsList:[],bucketWidth:48,bucketHeight:48};return _.extend(x,i)},l.update=function(i,x,S,g){var d,m,w,C=S.world,N=i.buckets,W,J,$=!1;for(d=0;d<x.length;d++){var k=x[d];if(!(k.isSleeping&&!g)&&!(C.bounds&&(k.bounds.max.x<C.bounds.min.x||k.bounds.min.x>C.bounds.max.x||k.bounds.max.y<C.bounds.min.y||k.bounds.min.y>C.bounds.max.y))){var O=l._getRegion(i,k);if(!k.region||O.id!==k.region.id||g){(!k.region||g)&&(k.region=O);var z=l._regionUnion(O,k.region);for(m=z.startCol;m<=z.endCol;m++)for(w=z.startRow;w<=z.endRow;w++){J=l._getBucketId(m,w),W=N[J];var L=m>=O.startCol&&m<=O.endCol&&w>=O.startRow&&w<=O.endRow,G=m>=k.region.startCol&&m<=k.region.endCol&&w>=k.region.startRow&&w<=k.region.endRow;!L&&G&&G&&W&&l._bucketRemoveBody(i,W,k),(k.region===O||L&&!G||g)&&(W||(W=l._createBucket(N,J)),l._bucketAddBody(i,W,k))}k.region=O,$=!0}}}$&&(i.pairsList=l._createActivePairsList(i))},v(l,"update","Grid.update ➤ replaced by Matter.Detector"),l.clear=function(i){i.buckets={},i.pairs={},i.pairsList=[]},v(l,"clear","Grid.clear ➤ replaced by Matter.Detector"),l._regionUnion=function(i,x){var S=Math.min(i.startCol,x.startCol),g=Math.max(i.endCol,x.endCol),d=Math.min(i.startRow,x.startRow),m=Math.max(i.endRow,x.endRow);return l._createRegion(S,g,d,m)},l._getRegion=function(i,x){var S=x.bounds,g=Math.floor(S.min.x/i.bucketWidth),d=Math.floor(S.max.x/i.bucketWidth),m=Math.floor(S.min.y/i.bucketHeight),w=Math.floor(S.max.y/i.bucketHeight);return l._createRegion(g,d,m,w)},l._createRegion=function(i,x,S,g){return{id:i+","+x+","+S+","+g,startCol:i,endCol:x,startRow:S,endRow:g}},l._getBucketId=function(i,x){return"C"+i+"R"+x},l._createBucket=function(i,x){var S=i[x]=[];return S},l._bucketAddBody=function(i,x,S){var g=i.pairs,d=f.id,m=x.length,w;for(w=0;w<m;w++){var C=x[w];if(!(S.id===C.id||S.isStatic&&C.isStatic)){var N=d(S,C),W=g[N];W?W[2]+=1:g[N]=[S,C,1]}}x.push(S)},l._bucketRemoveBody=function(i,x,S){var g=i.pairs,d=f.id,m;x.splice(_.indexOf(x,S),1);var w=x.length;for(m=0;m<w;m++){var C=g[d(S,x[m])];C&&(C[2]-=1)}},l._createActivePairsList=function(i){var x,S=i.pairs,g=_.keys(S),d=g.length,m=[],w;for(w=0;w<d;w++)x=S[g[w]],x[2]>0?m.push(x):delete S[g[w]];return m}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(3),_=I(7),v=I(14),i=I(5),x=I(13),S=I(10),g=I(6),d=I(0),m=I(1);(function(){l.create=function(w,C){var N=(w?w.mouse:null)||(C?C.mouse:null);N||(w&&w.render&&w.render.canvas?N=v.create(w.render.canvas):C&&C.element?N=v.create(C.element):(N=v.create(),d.warn("MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected")));var W=S.create({label:"Mouse Constraint",pointA:N.position,pointB:{x:0,y:0},length:.01,stiffness:.1,angularStiffness:1,render:{strokeStyle:"#90EE90",lineWidth:3}}),J={type:"mouseConstraint",mouse:N,element:null,body:null,constraint:W,collisionFilter:{category:1,mask:4294967295,group:0}},$=d.extend(J,C);return i.on(w,"beforeUpdate",function(){var k=g.allBodies(w.world);l.update($,k),l._triggerEvents($)}),$},l.update=function(w,C){var N=w.mouse,W=w.constraint,J=w.body;if(N.button===0){if(W.bodyB)_.set(W.bodyB,!1),W.pointA=N.position;else for(var $=0;$<C.length;$++)if(J=C[$],m.contains(J.bounds,N.position)&&x.canCollide(J.collisionFilter,w.collisionFilter))for(var k=J.parts.length>1?1:0;k<J.parts.length;k++){var O=J.parts[k];if(f.contains(O.vertices,N.position)){W.pointA=N.position,W.bodyB=w.body=J,W.pointB={x:N.position.x-J.position.x,y:N.position.y-J.position.y},W.angleB=J.angle,_.set(J,!1),i.trigger(w,"startdrag",{mouse:N,body:J});break}}}else W.bodyB=w.body=null,W.pointB=null,J&&i.trigger(w,"enddrag",{mouse:N,body:J})},l._triggerEvents=function(w){var C=w.mouse,N=C.sourceEvents;N.mousemove&&i.trigger(w,"mousemove",{mouse:C}),N.mousedown&&i.trigger(w,"mousedown",{mouse:C}),N.mouseup&&i.trigger(w,"mouseup",{mouse:C}),v.clearSourceEvents(C)}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(2),_=I(8),v=I(1),i=I(12),x=I(3);(function(){l.collides=function(S,g){for(var d=[],m=g.length,w=S.bounds,C=_.collides,N=v.overlaps,W=0;W<m;W++){var J=g[W],$=J.parts.length,k=$===1?0:1;if(N(J.bounds,w))for(var O=k;O<$;O++){var z=J.parts[O];if(N(z.bounds,w)){var L=C(z,S);if(L){d.push(L);break}}}}return d},l.ray=function(S,g,d,m){m=m||1e-100;for(var w=f.angle(g,d),C=f.magnitude(f.sub(g,d)),N=(d.x+g.x)*.5,W=(d.y+g.y)*.5,J=i.rectangle(N,W,C,m,{angle:w}),$=l.collides(J,S),k=0;k<$.length;k+=1){var O=$[k];O.body=O.bodyB=O.bodyA}return $},l.region=function(S,g,d){for(var m=[],w=0;w<S.length;w++){var C=S[w],N=v.overlaps(C.bounds,g);(N&&!d||!N&&d)&&m.push(C)}return m},l.point=function(S,g){for(var d=[],m=0;m<S.length;m++){var w=S[m];if(v.contains(w.bounds,g))for(var C=w.parts.length===1?0:1;C<w.parts.length;C++){var N=w.parts[C];if(v.contains(N.bounds,g)&&x.contains(N.vertices,g)){d.push(w);break}}}return d}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(4),_=I(0),v=I(6),i=I(1),x=I(5),S=I(2),g=I(14);(function(){var d,m;typeof window<"u"&&(d=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame||function(k){window.setTimeout(function(){k(_.now())},1e3/60)},m=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),l._goodFps=30,l._goodDelta=1e3/60,l.create=function(k){var O={engine:null,element:null,canvas:null,mouse:null,frameRequestId:null,timing:{historySize:60,delta:0,deltaHistory:[],lastTime:0,lastTimestamp:0,lastElapsed:0,timestampElapsed:0,timestampElapsedHistory:[],engineDeltaHistory:[],engineElapsedHistory:[],elapsedHistory:[]},options:{width:800,height:600,pixelRatio:1,background:"#14151f",wireframeBackground:"#14151f",hasBounds:!!k.bounds,enabled:!0,wireframes:!0,showSleeping:!0,showDebug:!1,showStats:!1,showPerformance:!1,showBounds:!1,showVelocity:!1,showCollisions:!1,showSeparations:!1,showAxes:!1,showPositions:!1,showAngleIndicator:!1,showIds:!1,showVertexNumbers:!1,showConvexHulls:!1,showInternalEdges:!1,showMousePosition:!1}},z=_.extend(O,k);return z.canvas&&(z.canvas.width=z.options.width||z.canvas.width,z.canvas.height=z.options.height||z.canvas.height),z.mouse=k.mouse,z.engine=k.engine,z.canvas=z.canvas||N(z.options.width,z.options.height),z.context=z.canvas.getContext("2d"),z.textures={},z.bounds=z.bounds||{min:{x:0,y:0},max:{x:z.canvas.width,y:z.canvas.height}},z.controller=l,z.options.showBroadphase=!1,z.options.pixelRatio!==1&&l.setPixelRatio(z,z.options.pixelRatio),_.isElement(z.element)&&z.element.appendChild(z.canvas),z},l.run=function(k){(function O(z){k.frameRequestId=d(O),w(k,z),l.world(k,z),(k.options.showStats||k.options.showDebug)&&l.stats(k,k.context,z),(k.options.showPerformance||k.options.showDebug)&&l.performance(k,k.context,z)})()},l.stop=function(k){m(k.frameRequestId)},l.setPixelRatio=function(k,O){var z=k.options,L=k.canvas;O==="auto"&&(O=W(L)),z.pixelRatio=O,L.setAttribute("data-pixel-ratio",O),L.width=z.width*O,L.height=z.height*O,L.style.width=z.width+"px",L.style.height=z.height+"px"},l.lookAt=function(k,O,z,L){L=typeof L<"u"?L:!0,O=_.isArray(O)?O:[O],z=z||{x:0,y:0};for(var G={min:{x:1/0,y:1/0},max:{x:-1/0,y:-1/0}},e=0;e<O.length;e+=1){var s=O[e],n=s.bounds?s.bounds.min:s.min||s.position||s,t=s.bounds?s.bounds.max:s.max||s.position||s;n&&t&&(n.x<G.min.x&&(G.min.x=n.x),t.x>G.max.x&&(G.max.x=t.x),n.y<G.min.y&&(G.min.y=n.y),t.y>G.max.y&&(G.max.y=t.y))}var a=G.max.x-G.min.x+2*z.x,c=G.max.y-G.min.y+2*z.y,u=k.canvas.height,y=k.canvas.width,E=y/u,b=a/c,T=1,F=1;b>E?F=b/E:T=E/b,k.options.hasBounds=!0,k.bounds.min.x=G.min.x,k.bounds.max.x=G.min.x+a*T,k.bounds.min.y=G.min.y,k.bounds.max.y=G.min.y+c*F,L&&(k.bounds.min.x+=a*.5-a*T*.5,k.bounds.max.x+=a*.5-a*T*.5,k.bounds.min.y+=c*.5-c*F*.5,k.bounds.max.y+=c*.5-c*F*.5),k.bounds.min.x-=z.x,k.bounds.max.x-=z.x,k.bounds.min.y-=z.y,k.bounds.max.y-=z.y,k.mouse&&(g.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.canvas.width,y:(k.bounds.max.y-k.bounds.min.y)/k.canvas.height}),g.setOffset(k.mouse,k.bounds.min))},l.startViewTransform=function(k){var O=k.bounds.max.x-k.bounds.min.x,z=k.bounds.max.y-k.bounds.min.y,L=O/k.options.width,G=z/k.options.height;k.context.setTransform(k.options.pixelRatio/L,0,0,k.options.pixelRatio/G,0,0),k.context.translate(-k.bounds.min.x,-k.bounds.min.y)},l.endViewTransform=function(k){k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0)},l.world=function(k,O){var z=_.now(),L=k.engine,G=L.world,e=k.canvas,s=k.context,n=k.options,t=k.timing,a=v.allBodies(G),c=v.allConstraints(G),u=n.wireframes?n.wireframeBackground:n.background,y=[],E=[],b,T={timestamp:L.timing.timestamp};if(x.trigger(k,"beforeRender",T),k.currentBackground!==u&&$(k,u),s.globalCompositeOperation="source-in",s.fillStyle="transparent",s.fillRect(0,0,e.width,e.height),s.globalCompositeOperation="source-over",n.hasBounds){for(b=0;b<a.length;b++){var F=a[b];i.overlaps(F.bounds,k.bounds)&&y.push(F)}for(b=0;b<c.length;b++){var U=c[b],Q=U.bodyA,ee=U.bodyB,ie=U.pointA,te=U.pointB;Q&&(ie=S.add(Q.position,U.pointA)),ee&&(te=S.add(ee.position,U.pointB)),!(!ie||!te)&&(i.contains(k.bounds,ie)||i.contains(k.bounds,te))&&E.push(U)}l.startViewTransform(k),k.mouse&&(g.setScale(k.mouse,{x:(k.bounds.max.x-k.bounds.min.x)/k.options.width,y:(k.bounds.max.y-k.bounds.min.y)/k.options.height}),g.setOffset(k.mouse,k.bounds.min))}else E=c,y=a,k.options.pixelRatio!==1&&k.context.setTransform(k.options.pixelRatio,0,0,k.options.pixelRatio,0,0);!n.wireframes||L.enableSleeping&&n.showSleeping?l.bodies(k,y,s):(n.showConvexHulls&&l.bodyConvexHulls(k,y,s),l.bodyWireframes(k,y,s)),n.showBounds&&l.bodyBounds(k,y,s),(n.showAxes||n.showAngleIndicator)&&l.bodyAxes(k,y,s),n.showPositions&&l.bodyPositions(k,y,s),n.showVelocity&&l.bodyVelocity(k,y,s),n.showIds&&l.bodyIds(k,y,s),n.showSeparations&&l.separations(k,L.pairs.list,s),n.showCollisions&&l.collisions(k,L.pairs.list,s),n.showVertexNumbers&&l.vertexNumbers(k,y,s),n.showMousePosition&&l.mousePosition(k,k.mouse,s),l.constraints(E,s),n.hasBounds&&l.endViewTransform(k),x.trigger(k,"afterRender",T),t.lastElapsed=_.now()-z},l.stats=function(k,O,z){for(var L=k.engine,G=L.world,e=v.allBodies(G),s=0,n=55,t=44,a=0,c=0,u=0;u<e.length;u+=1)s+=e[u].parts.length;var y={Part:s,Body:e.length,Cons:v.allConstraints(G).length,Comp:v.allComposites(G).length,Pair:L.pairs.list.length};O.fillStyle="#0e0f19",O.fillRect(a,c,n*5.5,t),O.font="12px Arial",O.textBaseline="top",O.textAlign="right";for(var E in y){var b=y[E];O.fillStyle="#aaa",O.fillText(E,a+n,c+8),O.fillStyle="#eee",O.fillText(b,a+n,c+26),a+=n}},l.performance=function(k,O){var z=k.engine,L=k.timing,G=L.deltaHistory,e=L.elapsedHistory,s=L.timestampElapsedHistory,n=L.engineDeltaHistory,t=L.engineElapsedHistory,a=z.timing.lastDelta,c=C(G),u=C(e),y=C(n),E=C(t),b=C(s),T=b/c||0,F=1e3/c||0,U=4,Q=12,ee=60,ie=34,te=10,Ee=69;O.fillStyle="#0e0f19",O.fillRect(0,50,Q*4+ee*5+22,ie),l.status(O,te,Ee,ee,U,G.length,Math.round(F)+" fps",F/l._goodFps,function(Ce){return G[Ce]/c-1}),l.status(O,te+Q+ee,Ee,ee,U,n.length,a.toFixed(2)+" dt",l._goodDelta/a,function(Ce){return n[Ce]/y-1}),l.status(O,te+(Q+ee)*2,Ee,ee,U,t.length,E.toFixed(2)+" ut",1-E/l._goodFps,function(Ce){return t[Ce]/E-1}),l.status(O,te+(Q+ee)*3,Ee,ee,U,e.length,u.toFixed(2)+" rt",1-u/l._goodFps,function(Ce){return e[Ce]/u-1}),l.status(O,te+(Q+ee)*4,Ee,ee,U,s.length,T.toFixed(2)+" x",T*T*T,function(Ce){return(s[Ce]/G[Ce]/T||0)-1})},l.status=function(k,O,z,L,G,e,s,n,t){k.strokeStyle="#888",k.fillStyle="#444",k.lineWidth=1,k.fillRect(O,z+7,L,1),k.beginPath(),k.moveTo(O,z+7-G*_.clamp(.4*t(0),-2,2));for(var a=0;a<L;a+=1)k.lineTo(O+a,z+7-(a<e?G*_.clamp(.4*t(a),-2,2):0));k.stroke(),k.fillStyle="hsl("+_.clamp(25+95*n,0,120)+",100%,60%)",k.fillRect(O,z-7,4,4),k.font="12px Arial",k.textBaseline="middle",k.textAlign="right",k.fillStyle="#eee",k.fillText(s,O+L,z-5)},l.constraints=function(k,O){for(var z=O,L=0;L<k.length;L++){var G=k[L];if(!(!G.render.visible||!G.pointA||!G.pointB)){var e=G.bodyA,s=G.bodyB,n,t;if(e?n=S.add(e.position,G.pointA):n=G.pointA,G.render.type==="pin")z.beginPath(),z.arc(n.x,n.y,3,0,2*Math.PI),z.closePath();else{if(s?t=S.add(s.position,G.pointB):t=G.pointB,z.beginPath(),z.moveTo(n.x,n.y),G.render.type==="spring")for(var a=S.sub(t,n),c=S.perp(S.normalise(a)),u=Math.ceil(_.clamp(G.length/5,12,20)),y,E=1;E<u;E+=1)y=E%2===0?1:-1,z.lineTo(n.x+a.x*(E/u)+c.x*y*4,n.y+a.y*(E/u)+c.y*y*4);z.lineTo(t.x,t.y)}G.render.lineWidth&&(z.lineWidth=G.render.lineWidth,z.strokeStyle=G.render.strokeStyle,z.stroke()),G.render.anchors&&(z.fillStyle=G.render.strokeStyle,z.beginPath(),z.arc(n.x,n.y,3,0,2*Math.PI),z.arc(t.x,t.y,3,0,2*Math.PI),z.closePath(),z.fill())}}},l.bodies=function(k,O,z){var L=z;k.engine;var G=k.options,e=G.showInternalEdges||!G.wireframes,s,n,t,a;for(t=0;t<O.length;t++)if(s=O[t],!!s.render.visible){for(a=s.parts.length>1?1:0;a<s.parts.length;a++)if(n=s.parts[a],!!n.render.visible){if(G.showSleeping&&s.isSleeping?L.globalAlpha=.5*n.render.opacity:n.render.opacity!==1&&(L.globalAlpha=n.render.opacity),n.render.sprite&&n.render.sprite.texture&&!G.wireframes){var c=n.render.sprite,u=J(k,c.texture);L.translate(n.position.x,n.position.y),L.rotate(n.angle),L.drawImage(u,u.width*-c.xOffset*c.xScale,u.height*-c.yOffset*c.yScale,u.width*c.xScale,u.height*c.yScale),L.rotate(-n.angle),L.translate(-n.position.x,-n.position.y)}else{if(n.circleRadius)L.beginPath(),L.arc(n.position.x,n.position.y,n.circleRadius,0,2*Math.PI);else{L.beginPath(),L.moveTo(n.vertices[0].x,n.vertices[0].y);for(var y=1;y<n.vertices.length;y++)!n.vertices[y-1].isInternal||e?L.lineTo(n.vertices[y].x,n.vertices[y].y):L.moveTo(n.vertices[y].x,n.vertices[y].y),n.vertices[y].isInternal&&!e&&L.moveTo(n.vertices[(y+1)%n.vertices.length].x,n.vertices[(y+1)%n.vertices.length].y);L.lineTo(n.vertices[0].x,n.vertices[0].y),L.closePath()}G.wireframes?(L.lineWidth=1,L.strokeStyle="#bbb",L.stroke()):(L.fillStyle=n.render.fillStyle,n.render.lineWidth&&(L.lineWidth=n.render.lineWidth,L.strokeStyle=n.render.strokeStyle,L.stroke()),L.fill())}L.globalAlpha=1}}},l.bodyWireframes=function(k,O,z){var L=z,G=k.options.showInternalEdges,e,s,n,t,a;for(L.beginPath(),n=0;n<O.length;n++)if(e=O[n],!!e.render.visible)for(a=e.parts.length>1?1:0;a<e.parts.length;a++){for(s=e.parts[a],L.moveTo(s.vertices[0].x,s.vertices[0].y),t=1;t<s.vertices.length;t++)!s.vertices[t-1].isInternal||G?L.lineTo(s.vertices[t].x,s.vertices[t].y):L.moveTo(s.vertices[t].x,s.vertices[t].y),s.vertices[t].isInternal&&!G&&L.moveTo(s.vertices[(t+1)%s.vertices.length].x,s.vertices[(t+1)%s.vertices.length].y);L.lineTo(s.vertices[0].x,s.vertices[0].y)}L.lineWidth=1,L.strokeStyle="#bbb",L.stroke()},l.bodyConvexHulls=function(k,O,z){var L=z,G,e,s;for(L.beginPath(),e=0;e<O.length;e++)if(G=O[e],!(!G.render.visible||G.parts.length===1)){for(L.moveTo(G.vertices[0].x,G.vertices[0].y),s=1;s<G.vertices.length;s++)L.lineTo(G.vertices[s].x,G.vertices[s].y);L.lineTo(G.vertices[0].x,G.vertices[0].y)}L.lineWidth=1,L.strokeStyle="rgba(255,255,255,0.2)",L.stroke()},l.vertexNumbers=function(k,O,z){var L=z,G,e,s;for(G=0;G<O.length;G++){var n=O[G].parts;for(s=n.length>1?1:0;s<n.length;s++){var t=n[s];for(e=0;e<t.vertices.length;e++)L.fillStyle="rgba(255,255,255,0.2)",L.fillText(G+"_"+e,t.position.x+(t.vertices[e].x-t.position.x)*.8,t.position.y+(t.vertices[e].y-t.position.y)*.8)}}},l.mousePosition=function(k,O,z){var L=z;L.fillStyle="rgba(255,255,255,0.8)",L.fillText(O.position.x+"  "+O.position.y,O.position.x+5,O.position.y-5)},l.bodyBounds=function(k,O,z){var L=z;k.engine;var G=k.options;L.beginPath();for(var e=0;e<O.length;e++){var s=O[e];if(s.render.visible)for(var n=O[e].parts,t=n.length>1?1:0;t<n.length;t++){var a=n[t];L.rect(a.bounds.min.x,a.bounds.min.y,a.bounds.max.x-a.bounds.min.x,a.bounds.max.y-a.bounds.min.y)}}G.wireframes?L.strokeStyle="rgba(255,255,255,0.08)":L.strokeStyle="rgba(0,0,0,0.1)",L.lineWidth=1,L.stroke()},l.bodyAxes=function(k,O,z){var L=z;k.engine;var G=k.options,e,s,n,t;for(L.beginPath(),s=0;s<O.length;s++){var a=O[s],c=a.parts;if(a.render.visible)if(G.showAxes)for(n=c.length>1?1:0;n<c.length;n++)for(e=c[n],t=0;t<e.axes.length;t++){var u=e.axes[t];L.moveTo(e.position.x,e.position.y),L.lineTo(e.position.x+u.x*20,e.position.y+u.y*20)}else for(n=c.length>1?1:0;n<c.length;n++)for(e=c[n],t=0;t<e.axes.length;t++)L.moveTo(e.position.x,e.position.y),L.lineTo((e.vertices[0].x+e.vertices[e.vertices.length-1].x)/2,(e.vertices[0].y+e.vertices[e.vertices.length-1].y)/2)}G.wireframes?(L.strokeStyle="indianred",L.lineWidth=1):(L.strokeStyle="rgba(255, 255, 255, 0.4)",L.globalCompositeOperation="overlay",L.lineWidth=2),L.stroke(),L.globalCompositeOperation="source-over"},l.bodyPositions=function(k,O,z){var L=z;k.engine;var G=k.options,e,s,n,t;for(L.beginPath(),n=0;n<O.length;n++)if(e=O[n],!!e.render.visible)for(t=0;t<e.parts.length;t++)s=e.parts[t],L.arc(s.position.x,s.position.y,3,0,2*Math.PI,!1),L.closePath();for(G.wireframes?L.fillStyle="indianred":L.fillStyle="rgba(0,0,0,0.5)",L.fill(),L.beginPath(),n=0;n<O.length;n++)e=O[n],e.render.visible&&(L.arc(e.positionPrev.x,e.positionPrev.y,2,0,2*Math.PI,!1),L.closePath());L.fillStyle="rgba(255,165,0,0.8)",L.fill()},l.bodyVelocity=function(k,O,z){var L=z;L.beginPath();for(var G=0;G<O.length;G++){var e=O[G];if(e.render.visible){var s=f.getVelocity(e);L.moveTo(e.position.x,e.position.y),L.lineTo(e.position.x+s.x,e.position.y+s.y)}}L.lineWidth=3,L.strokeStyle="cornflowerblue",L.stroke()},l.bodyIds=function(k,O,z){var L=z,G,e;for(G=0;G<O.length;G++)if(O[G].render.visible){var s=O[G].parts;for(e=s.length>1?1:0;e<s.length;e++){var n=s[e];L.font="12px Arial",L.fillStyle="rgba(255,255,255,0.5)",L.fillText(n.id,n.position.x+10,n.position.y-10)}}},l.collisions=function(k,O,z){var L=z,G=k.options,e,s,n,t;for(L.beginPath(),n=0;n<O.length;n++)if(e=O[n],!!e.isActive)for(s=e.collision,t=0;t<e.activeContacts.length;t++){var a=e.activeContacts[t],c=a.vertex;L.rect(c.x-1.5,c.y-1.5,3.5,3.5)}for(G.wireframes?L.fillStyle="rgba(255,255,255,0.7)":L.fillStyle="orange",L.fill(),L.beginPath(),n=0;n<O.length;n++)if(e=O[n],!!e.isActive&&(s=e.collision,e.activeContacts.length>0)){var u=e.activeContacts[0].vertex.x,y=e.activeContacts[0].vertex.y;e.activeContacts.length===2&&(u=(e.activeContacts[0].vertex.x+e.activeContacts[1].vertex.x)/2,y=(e.activeContacts[0].vertex.y+e.activeContacts[1].vertex.y)/2),s.bodyB===s.supports[0].body||s.bodyA.isStatic===!0?L.moveTo(u-s.normal.x*8,y-s.normal.y*8):L.moveTo(u+s.normal.x*8,y+s.normal.y*8),L.lineTo(u,y)}G.wireframes?L.strokeStyle="rgba(255,165,0,0.7)":L.strokeStyle="orange",L.lineWidth=1,L.stroke()},l.separations=function(k,O,z){var L=z,G=k.options,e,s,n,t,a;for(L.beginPath(),a=0;a<O.length;a++)if(e=O[a],!!e.isActive){s=e.collision,n=s.bodyA,t=s.bodyB;var c=1;!t.isStatic&&!n.isStatic&&(c=.5),t.isStatic&&(c=0),L.moveTo(t.position.x,t.position.y),L.lineTo(t.position.x-s.penetration.x*c,t.position.y-s.penetration.y*c),c=1,!t.isStatic&&!n.isStatic&&(c=.5),n.isStatic&&(c=0),L.moveTo(n.position.x,n.position.y),L.lineTo(n.position.x+s.penetration.x*c,n.position.y+s.penetration.y*c)}G.wireframes?L.strokeStyle="rgba(255,165,0,0.5)":L.strokeStyle="orange",L.stroke()},l.inspector=function(k,O){k.engine;var z=k.selected,L=k.render,G=L.options,e;if(G.hasBounds){var s=L.bounds.max.x-L.bounds.min.x,n=L.bounds.max.y-L.bounds.min.y,t=s/L.options.width,a=n/L.options.height;O.scale(1/t,1/a),O.translate(-L.bounds.min.x,-L.bounds.min.y)}for(var c=0;c<z.length;c++){var u=z[c].data;switch(O.translate(.5,.5),O.lineWidth=1,O.strokeStyle="rgba(255,165,0,0.9)",O.setLineDash([1,2]),u.type){case"body":e=u.bounds,O.beginPath(),O.rect(Math.floor(e.min.x-3),Math.floor(e.min.y-3),Math.floor(e.max.x-e.min.x+6),Math.floor(e.max.y-e.min.y+6)),O.closePath(),O.stroke();break;case"constraint":var y=u.pointA;u.bodyA&&(y=u.pointB),O.beginPath(),O.arc(y.x,y.y,10,0,2*Math.PI),O.closePath(),O.stroke();break}O.setLineDash([]),O.translate(-.5,-.5)}k.selectStart!==null&&(O.translate(.5,.5),O.lineWidth=1,O.strokeStyle="rgba(255,165,0,0.6)",O.fillStyle="rgba(255,165,0,0.1)",e=k.selectBounds,O.beginPath(),O.rect(Math.floor(e.min.x),Math.floor(e.min.y),Math.floor(e.max.x-e.min.x),Math.floor(e.max.y-e.min.y)),O.closePath(),O.stroke(),O.fill(),O.translate(-.5,-.5)),G.hasBounds&&O.setTransform(1,0,0,1,0,0)};var w=function(k,O){var z=k.engine,L=k.timing,G=L.historySize,e=z.timing.timestamp;L.delta=O-L.lastTime||l._goodDelta,L.lastTime=O,L.timestampElapsed=e-L.lastTimestamp||0,L.lastTimestamp=e,L.deltaHistory.unshift(L.delta),L.deltaHistory.length=Math.min(L.deltaHistory.length,G),L.engineDeltaHistory.unshift(z.timing.lastDelta),L.engineDeltaHistory.length=Math.min(L.engineDeltaHistory.length,G),L.timestampElapsedHistory.unshift(L.timestampElapsed),L.timestampElapsedHistory.length=Math.min(L.timestampElapsedHistory.length,G),L.engineElapsedHistory.unshift(z.timing.lastElapsed),L.engineElapsedHistory.length=Math.min(L.engineElapsedHistory.length,G),L.elapsedHistory.unshift(L.lastElapsed),L.elapsedHistory.length=Math.min(L.elapsedHistory.length,G)},C=function(k){for(var O=0,z=0;z<k.length;z+=1)O+=k[z];return O/k.length||0},N=function(k,O){var z=document.createElement("canvas");return z.width=k,z.height=O,z.oncontextmenu=function(){return!1},z.onselectstart=function(){return!1},z},W=function(k){var O=k.getContext("2d"),z=window.devicePixelRatio||1,L=O.webkitBackingStorePixelRatio||O.mozBackingStorePixelRatio||O.msBackingStorePixelRatio||O.oBackingStorePixelRatio||O.backingStorePixelRatio||1;return z/L},J=function(k,O){var z=k.textures[O];return z||(z=k.textures[O]=new Image,z.src=O,z)},$=function(k,O){var z=O;/(jpg|gif|png)$/.test(O)&&(z="url("+O+")"),k.canvas.style.background=z,k.canvas.style.backgroundSize="contain",k.currentBackground=O}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(5),_=I(17),v=I(0);(function(){var i,x;if(typeof window<"u"&&(i=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame,x=window.cancelAnimationFrame||window.mozCancelAnimationFrame||window.webkitCancelAnimationFrame||window.msCancelAnimationFrame),!i){var S;i=function(g){S=setTimeout(function(){g(v.now())},1e3/60)},x=function(){clearTimeout(S)}}l.create=function(g){var d={fps:60,deltaSampleSize:60,counterTimestamp:0,frameCounter:0,deltaHistory:[],timePrev:null,frameRequestId:null,isFixed:!1,enabled:!0},m=v.extend(d,g);return m.delta=m.delta||1e3/m.fps,m.deltaMin=m.deltaMin||1e3/m.fps,m.deltaMax=m.deltaMax||1e3/(m.fps*.5),m.fps=1e3/m.delta,m},l.run=function(g,d){return typeof g.positionIterations<"u"&&(d=g,g=l.create()),function m(w){g.frameRequestId=i(m),w&&g.enabled&&l.tick(g,d,w)}(),g},l.tick=function(g,d,m){var w=d.timing,C;g.isFixed?C=g.delta:(C=m-g.timePrev||g.delta,g.timePrev=m,g.deltaHistory.push(C),g.deltaHistory=g.deltaHistory.slice(-g.deltaSampleSize),C=Math.min.apply(null,g.deltaHistory),C=C<g.deltaMin?g.deltaMin:C,C=C>g.deltaMax?g.deltaMax:C,g.delta=C);var N={timestamp:w.timestamp};f.trigger(g,"beforeTick",N),g.frameCounter+=1,m-g.counterTimestamp>=1e3&&(g.fps=g.frameCounter*((m-g.counterTimestamp)/1e3),g.counterTimestamp=m,g.frameCounter=0),f.trigger(g,"tick",N),f.trigger(g,"beforeUpdate",N),_.update(d,C),f.trigger(g,"afterUpdate",N),f.trigger(g,"afterTick",N)},l.stop=function(g){x(g.frameRequestId)},l.start=function(g,d){l.run(g,d)}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(8),_=I(0),v=_.deprecated;(function(){l.collides=function(i,x){return f.collides(i,x)},v(l,"collides","SAT.collides ➤ replaced by Collision.collides")})()},function(Pe,be,I){var l={};Pe.exports=l,I(1);var f=I(0);(function(){l.pathToVertices=function(_,v){typeof window<"u"&&!("SVGPathSeg"in window)&&f.warn("Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.");var i,x,S,g,d,m,w,C,N,W,J=[],$,k,O=0,z=0,L=0;v=v||15;var G=function(s,n,t){var a=t%2===1&&t>1;if(!N||s!=N.x||n!=N.y){N&&a?($=N.x,k=N.y):($=0,k=0);var c={x:$+s,y:k+n};(a||!N)&&(N=c),J.push(c),z=$+s,L=k+n}},e=function(s){var n=s.pathSegTypeAsLetter.toUpperCase();if(n!=="Z"){switch(n){case"M":case"L":case"T":case"C":case"S":case"Q":z=s.x,L=s.y;break;case"H":z=s.x;break;case"V":L=s.y;break}G(z,L,s.pathSegType)}};for(l._svgPathToAbsolute(_),S=_.getTotalLength(),m=[],i=0;i<_.pathSegList.numberOfItems;i+=1)m.push(_.pathSegList.getItem(i));for(w=m.concat();O<S;){if(W=_.getPathSegAtLength(O),d=m[W],d!=C){for(;w.length&&w[0]!=d;)e(w.shift());C=d}switch(d.pathSegTypeAsLetter.toUpperCase()){case"C":case"T":case"S":case"Q":case"A":g=_.getPointAtLength(O),G(g.x,g.y,0);break}O+=v}for(i=0,x=w.length;i<x;++i)e(w[i]);return J},l._svgPathToAbsolute=function(_){for(var v,i,x,S,g,d,m=_.pathSegList,w=0,C=0,N=m.numberOfItems,W=0;W<N;++W){var J=m.getItem(W),$=J.pathSegTypeAsLetter;if(/[MLHVCSQTA]/.test($))"x"in J&&(w=J.x),"y"in J&&(C=J.y);else switch("x1"in J&&(x=w+J.x1),"x2"in J&&(g=w+J.x2),"y1"in J&&(S=C+J.y1),"y2"in J&&(d=C+J.y2),"x"in J&&(w+=J.x),"y"in J&&(C+=J.y),$){case"m":m.replaceItem(_.createSVGPathSegMovetoAbs(w,C),W);break;case"l":m.replaceItem(_.createSVGPathSegLinetoAbs(w,C),W);break;case"h":m.replaceItem(_.createSVGPathSegLinetoHorizontalAbs(w),W);break;case"v":m.replaceItem(_.createSVGPathSegLinetoVerticalAbs(C),W);break;case"c":m.replaceItem(_.createSVGPathSegCurvetoCubicAbs(w,C,x,S,g,d),W);break;case"s":m.replaceItem(_.createSVGPathSegCurvetoCubicSmoothAbs(w,C,g,d),W);break;case"q":m.replaceItem(_.createSVGPathSegCurvetoQuadraticAbs(w,C,x,S),W);break;case"t":m.replaceItem(_.createSVGPathSegCurvetoQuadraticSmoothAbs(w,C),W);break;case"a":m.replaceItem(_.createSVGPathSegArcAbs(w,C,J.r1,J.r2,J.angle,J.largeArcFlag,J.sweepFlag),W);break;case"z":case"Z":w=v,C=i;break}($=="M"||$=="m")&&(v=w,i=C)}}})()},function(Pe,be,I){var l={};Pe.exports=l;var f=I(6);I(0),function(){l.create=f.create,l.add=f.add,l.remove=f.remove,l.clear=f.clear,l.addComposite=f.addComposite,l.addBody=f.addBody,l.addConstraint=f.addConstraint}()}])})}(Jn)),Jn.exports}/*!
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
 */(function(Xt,Tr){(function(be,I){Xt.exports=I(di())})(Mn,function(Pe){return function(be){var I={};function l(f){if(I[f])return I[f].exports;var _=I[f]={i:f,l:!1,exports:{}};return be[f].call(_.exports,_,_.exports,l),_.l=!0,_.exports}return l.m=be,l.c=I,l.d=function(f,_,v){l.o(f,_)||Object.defineProperty(f,_,{enumerable:!0,get:v})},l.r=function(f){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(f,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(f,"__esModule",{value:!0})},l.t=function(f,_){if(_&1&&(f=l(f)),_&8||_&4&&typeof f=="object"&&f&&f.__esModule)return f;var v=Object.create(null);if(l.r(v),Object.defineProperty(v,"default",{enumerable:!0,value:f}),_&2&&typeof f!="string")for(var i in f)l.d(v,i,(function(x){return f[x]}).bind(null,i));return v},l.n=function(f){var _=f&&f.__esModule?function(){return f.default}:function(){return f};return l.d(_,"a",_),_},l.o=function(f,_){return Object.prototype.hasOwnProperty.call(f,_)},l.p="/demo/lib/",l(l.s=6)}([function(be,I){be.exports=Pe},function(be,I,l){const f=be.exports={};f.injectStyles=function(_,v){if(document.getElementById(v))return;let i=document.createElement("div");i.innerHTML=`<style id="${v}" type="text/css">${_}</style>`;let x=document.head.querySelector("style:last-of-type");x?f.domInsertBefore(i.firstElementChild,x):document.head.appendChild(i.firstElementChild)},f.injectScript=function(_,v,i){if(document.getElementById(v))return;let x=document.createElement("script");x.id=v,x.src=_,x.onload=i,document.body.appendChild(x)},f.domRemove=function(_){return _.parentElement.removeChild(_)},f.domInsertBefore=function(_,v){return v.parentNode.insertBefore(_,v.previousElementSibling)}},function(be,I,l){const f=be.exports={},_=l(8),v=l(0),i=v.Common,x=v.Engine;f.create=function(){let S=new _({prefix:"$",cleanup:!0});return S.parse=S.resurrect,S},f.clone=function(S,g){var d=S.parse(f.serialise(S,g));return d.id=i.nextId(),d},f.saveState=function(S,g,d){localStorage.setItem(d,f.serialise(S,g.world))},f.loadState=function(S,g,d){var m=S.parse(localStorage.getItem(d));m&&x.merge(g,{world:m})},f.serialise=function(S,g,d){return d=d||0,S.stringify(g,function(m,w){if(!/^#/.exec(m)&&typeof w=="number"){var C=parseFloat(w.toFixed(3));return C===0&&w!==0?w:C}return w},d)}},function(be,I,l){const f=be.exports={},_=l(7),v=l(1),i=l(2),x=l(0),S=x.Engine,g=x.Detector,d=x.Grid,m=x.World,w=x.Bodies,C=x.Events,N=x.Composite;f.create=function(k,O,z){_.GUI.TEXT_CLOSED="▲",_.GUI.TEXT_OPEN="▼";var L=new _.GUI({autoPlace:!1}),G={engine:k,runner:O,render:z,datGui:L,broadphase:"grid",broadphaseCache:{grid:k.broadphase.controller===d?k.broadphase:d.create(),bruteForce:{detector:g.bruteForce}},amount:1,size:40,sides:4,density:.001,restitution:0,friction:.1,frictionStatic:.5,frictionAir:.01,offset:{x:0,y:0},renderer:"canvas",chamfer:0,isRecording:!1};i&&(G.serializer=i.create());let e=l(9);return v.injectStyles(e,"matter-gui-style"),W(G),G},f.update=function(k){var O,z=k.datGui;for(O in z.__folders)f.update(k,z.__folders[O]);for(O in z.__controllers){var L=z.__controllers[O];L.updateDisplay&&L.updateDisplay()}},f.closeAll=function(k){var O=k.datGui;for(var z in O.__folders)O.__folders[z].close()},f.destroy=function(k){k.datGui.domElement.parentElement.removeChild(k.datGui.domElement),k.datGui.destroy()};var W=function(k){var O=k.engine,z=k.runner,L=k.datGui,G={addBody:function(){J(k)},clear:function(){$(k)},save:function(){i.saveState(k.serializer,O,"guiState"),C.trigger(k,"save")},load:function(){i.loadState(k.serializer,O,"guiState"),C.trigger(k,"load")}},e=L.addFolder("Metrics");if(z&&e.add(z,"fps").listen(),O.metrics.extended&&(z&&(e.add(z,"delta").listen(),e.add(z,"correction").listen()),O&&(e.add(O.metrics,"bodies").listen(),e.add(O.metrics,"collisions").listen(),e.add(O.metrics,"pairs").listen(),e.add(O.metrics,"broadEff").listen(),e.add(O.metrics,"midEff").listen(),e.add(O.metrics,"narrowEff").listen(),e.add(O.metrics,"narrowReuse").listen()),e.open()),O){var s=L.addFolder("Add Body");s.add(k,"amount",1,5).step(1),s.add(k,"size",5,150).step(1),s.add(k,"sides",1,8).step(1),s.add(k,"density",1e-4,.01).step(.001),s.add(k,"friction",0,1).step(.05),s.add(k,"frictionStatic",0,10).step(.1),s.add(k,"frictionAir",0,k.frictionAir*10).step(k.frictionAir/10),s.add(k,"restitution",0,1).step(.1),s.add(k,"chamfer",0,30).step(2),s.add(G,"addBody"),s.open();var n=L.addFolder("World");k.serializer&&(n.add(G,"load"),n.add(G,"save")),n.add(G,"clear"),n.open();var t=L.addFolder("Gravity");t.add(O.world.gravity,"scale",0,.001).step(1e-4),t.add(O.world.gravity,"x",-1,1).step(.01),t.add(O.world.gravity,"y",-1,1).step(.01);var a=L.addFolder("Engine");a.add(O,"enableSleeping"),a.add(O.timing,"timeScale",0,1.2).step(.05).listen(),a.add(O,"velocityIterations",1,10).step(1),a.add(O,"positionIterations",1,10).step(1),a.add(O,"constraintIterations",1,10).step(1),z&&a.add(z,"enabled")}if(k.render){var c=L.addFolder("Render");c.add(k.render.options,"wireframes").onFinishChange(function(E){E||(y.setValue(!1),u.setValue(!1))}),c.add(k.render.options,"showDebug"),c.add(k.render.options,"showPositions"),c.add(k.render.options,"showBroadphase"),c.add(k.render.options,"showBounds"),c.add(k.render.options,"showVelocity"),c.add(k.render.options,"showCollisions"),c.add(k.render.options,"showSeparations");var u=c.add(k.render.options,"showAxes"),y=c.add(k.render.options,"showAngleIndicator");c.add(k.render.options,"showSleeping"),c.add(k.render.options,"showIds"),c.add(k.render.options,"showVertexNumbers"),c.add(k.render.options,"showConvexHulls"),c.add(k.render.options,"showInternalEdges"),c.add(k.render.options,"enabled"),c.open()}document.body.appendChild(k.datGui.domElement)},J=function(k){var O=k.engine,z={density:k.density,friction:k.friction,frictionStatic:k.frictionStatic,frictionAir:k.frictionAir,restitution:k.restitution};k.chamfer&&k.sides>2&&(z.chamfer={radius:k.chamfer});for(var L=0;L<k.amount;L++)m.add(O.world,w.polygon(k.offset.x+120+L*k.size+L*50,k.offset.y+200,k.sides,k.size,z))},$=function(k){for(var O=k.engine,z=N.allConstraints(O.world),L=null,G=0;G<z.length;G+=1){var e=z[G];if(e.label==="Mouse Constraint"){L=e;break}}if(m.clear(O.world,!0),S.clear(O),L&&N.add(O.world,L),k.render){var s=k.render.controller;s.clear&&s.clear(k.render)}C.trigger(k,"clear")}},function(be,I,l){const f=be.exports={},_=l(10),v=l(5);l(11);const i=l(1),x=l(2),S=l(0),g=S.Body,d=S.Bounds,m=S.Composite,w=S.Common,C=S.Events,N=S.Mouse,W=S.Query,J=S.Vertices,$=S.Vector,k=S.MouseConstraint;var O;f.create=function(R,le,V){var he={engine:null,render:null,isPaused:!1,selected:[],selectStart:null,selectEnd:null,selectBounds:d.create(),mousePrevPosition:{x:0,y:0},offset:{x:0,y:0},autoExpand:!0,autoHide:!0,autoRewind:!0,hasExpanded:!1,bodyClass:"",exportIndent:0,clipboard:[],controls:{container:null,worldTree:null},root:m.create({label:"Root"}),keyBindings:[]};he=w.extend(he,V),f.instance=he,he.engine=R,he.render=le,he.render?(he.mouse=N.create(he.render.canvas),he.mouseConstraint=k.create(R,{mouse:he.mouse})):he.mouse={position:{x:0,y:0}},x&&(he.serializer=x.create(),localStorage.removeItem("pauseState")),O=v("body"),m.add(he.root,R.world),R.world.isModified=!0,R.world.parent=null;let ge=l(12);return i.injectStyles(ge,"js-tree-style"),ge=l(13),i.injectStyles(ge,"matter-inspector-style"),he.keyBind=w.chain(_,Y=>{he.keyBindings.push(Y)}),z(he),a(he),e(he),G(he),he},f.destroy=function(R){R.controls.worldTree.data("jstree").destroy();var le=[].slice.call(document.body.querySelectorAll(".ins-container",".vakata-context",".jstree-marker"));le.forEach(i.domRemove),R.keyBindings.forEach(V=>{_.unbind(V)}),C.off(R.engine,"beforeUpdate",R.beforeEngineUpdate),R.render&&(C.off(R.render,"afterRender",R.afterRender),C.off(R.mouseConstraint))};var z=function(R){var le=R.controls,V=v('<div class="ins-container">'),he=v('<div class="ins-top-panel">'),ge=v('<div class="ins-control-group">'),Y=v('<input class="ins-search-box" type="search" placeholder="search">'),Me=v('<button class="ins-import-button ins-button">Import</button>'),Oe=v('<button class="ins-export-button ins-button">Export</button>'),_e=v('<button class="ins-pause-button ins-button">Pause</button>'),me=v('<button class="ins-help-button ins-button">Help</button>'),$e=v('<button aria-label="Add composite body" title="Add composite body" class="ins-add-button ins-button">+</button>');x?ge.append(_e,Me,Oe,me):ge.append(_e,me),V.prepend(he,Y,$e),O.prepend(V),le.pauseButton=_e,le.importButton=Me,le.exportButton=Oe,le.helpButton=me,le.searchBox=Y,le.container=V,le.addCompositeButton=$e,le.pauseButton.click(function(){U(R,!R.isPaused)}),le.exportButton.click(function(){rt(R)}),le.importButton.click(function(){et(R)}),le.helpButton.click(function(){L()}),le.addCompositeButton.click(function(){Be(R)});var Qe;le.searchBox.keyup(function(){clearTimeout(Qe),Qe=setTimeout(function(){var Ge=le.searchBox.val(),ye=le.worldTree.data("jstree");ye.search(Ge)},250)})},L=function(){var R=`Matter Tools

`;R+=`Drag nodes in the tree to move them between composites.
`,R+=`Use browser's developer console to inspect selected objects.
`,R+=`Note: selections only render if renderer supports it.

`,R+=`[shift + space] pause or play simulation.
`,R+=`[right click] and drag on empty space to select a region.
`,R+=`[right click] and drag on an object to move it.
`,R+=`[right click + shift] and drag to move whole selection.

`,R+=`[ctrl-c] to copy selected world objects.
`,R+=`[ctrl-v] to paste copied world objects to mouse position.
`,R+=`[del] or [backspace] delete selected objects.

`,R+=`[shift + s] scale-xy selected objects with mouse or arrows.
`,R+=`[shift + s + d] scale-x selected objects with mouse or arrows.
`,R+=`[shift + s + f] scale-y selected objects with mouse or arrows.
`,R+=`[shift + r] rotate selected objects with mouse or arrows.

`,R+=`[shift + q] set selected objects as static (can't be undone).
`,R+=`[shift + i] import objects.
`,R+=`[shift + o] export selected objects.
`,R+=`[shift + h] toggle Matter.Gui.
`,R+=`[shift + y] toggle auto-hide.
`,R+=`[shift + r] toggle auto-rewind on play/pause.

`,R+="[shift + j] show this help message.",alert(R)},G=function(R){R.keyBind("shift+space",function(){U(R,!R.isPaused)}),R.serializer&&(R.keyBind("shift+o",function(){rt(R)}),R.keyBind("shift+i",function(){et(R)})),R.keyBind("shift+j",function(){L()}),R.keyBind("shift+y",function(){R.autoHide=!R.autoHide,O.toggleClass("ins-auto-hide gui-auto-hide",R.autoHide)}),R.keyBind("shift+r",function(){R.autoRewind=!R.autoRewind,R.autoRewind||localStorage.removeItem("pauseState")}),R.keyBind("shift+q",function(){for(var le=0;le<R.selected.length;le++){var V=R.selected[le].data;V.type==="body"&&!V.isStatic&&g.setStatic(V,!0)}}),R.keyBind("del",function(){c(R)}),R.keyBind("backspace",function(){c(R)}),R.serializer&&(R.keyBind("ctrl+c",function(){u(R)}),R.keyBind("ctrl+v",function(){y(R)})),v(document).unbind("keydown").bind("keydown",function(le){var V=!1;if(le.keyCode===8){var he=le.srcElement||le.target;he.tagName.toUpperCase()==="INPUT"&&(he.type.toUpperCase()==="TEXT"||he.type.toUpperCase()==="PASSWORD"||he.type.toUpperCase()==="FILE"||he.type.toUpperCase()==="EMAIL"||he.type.toUpperCase()==="SEARCH")||he.tagName.toUpperCase()==="TEXTAREA"?V=he.readOnly||he.disabled:V=!0}V&&le.preventDefault()})},e=function(R){var le=R.engine,V=R.controls,he,ge={core:{check_callback:!0,animation:!1},dnd:{copy:!1},search:{show_only_matches:!0,fuzzy:!1},types:{"#":{valid_children:[]},body:{valid_children:[]},constraint:{valid_children:[]},composite:{valid_children:[]},bodies:{valid_children:["body"]},constraints:{valid_children:["constraint"]},composites:{valid_children:["composite"]}},plugins:["dnd","types","unique","search"]};V.worldTree=v('<div class="ins-world-tree">').jstree(ge),V.container.append(V.worldTree),R.hasExpanded=!1,V.worldTree.on("refresh.jstree",function(){R.autoExpand&&!R.hasExpanded&&(R.hasExpanded=!0,V.worldTree.jstree("open_all"))}),V.worldTree.on("changed.jstree",function(Y,Me){var Oe=[],_e=V.worldTree.data("jstree");Me.action==="select_node"&&(clearTimeout(he),he=setTimeout(function(){Me.selected=_e.get_selected();for(var me=0;me<Me.selected.length;me++){var $e=Me.selected[me],Qe=$e.split("_")[0],Ge=$e.split("_")[1],ye=m.get(le.world,Ge,Qe);switch(Qe){case"body":case"constraint":case"composite":Oe.push(ye);break}}Q(R,Oe)},1))}),v(document).on("dnd_stop.vakata",function(Y,Me){for(var Oe=V.worldTree.data("jstree"),_e=Me.data.nodes,me=0;me<_e.length;me++){var $e=Oe.get_node(_e[me]),Qe=Oe.get_node(Oe.get_parent(_e[me])),Ge=$e.data.compositeId,ye=Qe.data.compositeId;if(Ge!==ye){var mt=_e[me],_t=mt.split("_")[0],wt=mt.split("_")[1],yt=m.get(R.root,wt,_t),Rt=m.get(R.root,Ge,"composite"),Dt=m.get(R.root,ye,"composite");m.move(Rt,yt,Dt)}}}),V.worldTree.on("dblclick.jstree",function(){for(var Y=V.worldTree.data("jstree"),Me=Y.get_selected(),Oe=0;Oe<Me.length;Oe++){var _e=Me[Oe],me=_e.split("_")[0];switch(me){case"composite":case"composites":case"bodies":case"constraints":for(var $e=Y.get_node(_e).children,Qe=0;Qe<$e.length;Qe++)Y.select_node($e[Qe],!1);break}}})},s=function(R,le){R.bodyClass.indexOf(" "+le)===-1&&(O.addClass(le),R.bodyClass=" "+O.attr("class"))},n=function(R,le){for(var V=!1,he=le.split(" "),ge=0;ge<he.length&&(V=R.bodyClass.indexOf(" "+he[ge])!==-1,!V);ge++);V&&(O.removeClass(le),R.bodyClass=" "+O.attr("class"))},t=function(R){return $.add(R.mouse.position,R.offset)},a=function(R){var le=R.engine,V=R.mouse,he=t(R),ge=R.controls;R.beforeEngineUpdate=function(){he=t(R);var Y=he.x-R.mousePrevPosition.x,Me=_.isPressed("up")+_.isPressed("right")-_.isPressed("down")-_.isPressed("left"),Oe=Y+Me;if(le.world.isModified){var _e=te(R.root,null,!0);ie(ge.worldTree.data("jstree"),_e),Q(R,[])}if(R.selectStart!==null&&(R.selectEnd.x=he.x,R.selectEnd.y=he.y,d.update(R.selectBounds,[R.selectStart,R.selectEnd])),_.shift&&_.isPressed("r")){var me=.03,$e=Math.max(-2,Math.min(2,Oe))*me;s(R,"ins-cursor-rotate"),F(R,$e)}else n(R,"ins-cursor-rotate");if(_.shift&&_.isPressed("s")){var Qe=.02,Ge=1+Math.max(-2,Math.min(2,Oe))*Qe;s(R,"ins-cursor-scale");var ye,mt;_.isPressed("d")?(ye=Ge,mt=1):_.isPressed("f")?(ye=1,mt=Ge):ye=mt=Ge,T(R,ye,mt)}else n(R,"ins-cursor-scale");V.button===2?(s(R,"ins-cursor-move"),b(R,he.x,he.y)):n(R,"ins-cursor-move"),R.mousePrevPosition=w.clone(he)},C.on(R.engine,"beforeUpdate",R.beforeEngineUpdate),R.mouseConstraint&&(C.on(R.mouseConstraint,"mouseup",function(){if(R.selectStart!==null){var Y=W.region(m.allBodies(le.world),R.selectBounds);Q(R,Y)}R.selectStart=null,R.selectEnd=null,C.trigger(R,"selectEnd")}),C.on(R.mouseConstraint,"mousedown",function(){var Y=m.allBodies(le.world),Me=m.allConstraints(le.world),Oe=_.shift||_.control,_e=R.controls.worldTree.data("jstree"),me;if(V.button===2){var $e=!1;for(me=0;me<Y.length;me++){var Qe=Y[me];if(d.contains(Qe.bounds,he)&&J.contains(Qe.vertices,he)){Oe?ee(R,Qe):Q(R,[Qe]),$e=!0;break}}if(!$e){for(me=0;me<Me.length;me++){var Ge=Me[me],ye=Ge.bodyA,mt=Ge.bodyB;if(Ge.label.indexOf("Mouse Constraint")===-1){var _t=Ge.pointA,wt=Ge.pointB;if(ye&&(_t=$.add(ye.position,Ge.pointA)),mt&&(wt=$.add(mt.position,Ge.pointB)),!(!_t||!wt)){var yt=$.magnitudeSquared($.sub(he,_t)),Rt=$.magnitudeSquared($.sub(he,wt));if(yt<100||Rt<100){Oe?ee(R,Ge):Q(R,[Ge]),$e=!0;break}}}}$e?(R.selectStart=null,R.selectEnd=null):(_e.deselect_all(!0),Q(R,[]),R.selectStart=w.clone(he),R.selectEnd=w.clone(he),d.update(R.selectBounds,[R.selectStart,R.selectEnd]),C.trigger(R,"selectStart"))}}V.button===2&&R.selected.length>0&&(s(R,"ins-cursor-move"),E(R))})),R.render&&(R.afterRender=function(){var Y=R.render.controller,Me=R.render.context;Y.inspector&&Y.inspector(R,Me)},C.on(R.render,"afterRender",R.afterRender))},c=function(R){var le=[],V,he=R.controls.worldTree.data("jstree"),ge;for(ge=0;ge<R.selected.length;ge++)V=R.selected[ge].data,V!==R.engine.world&&le.push(V);var Y=he.get_selected();for(ge=0;ge<Y.length;ge++){var Me=he.get_node(Y[ge]);if(Me.type==="composite"&&(Me=he.get_node(Me.children[0]),Me.data)){var Oe=Me.data.compositeId;V=m.get(R.root,Oe,"composite"),V&&V!==R.engine.world&&(le.push(V),he.delete_node(Y[ge]))}}m.remove(R.root,le,!0),Q(R,[])},u=function(R){R.clipboard.length=0;for(var le=0;le<R.selected.length;le++){var V=R.selected[le].data;V.type==="body"&&R.clipboard.push(V)}},y=function(R){if(R.serializer){for(var le=[],V=R.controls.worldTree.data("jstree"),he=0;he<R.clipboard.length;he++){var ge=R.clipboard[he],Y=x.clone(R.serializer,ge);g.translate(Y,{x:50,y:50});var Me=V.get_node(ge.type+"_"+ge.id,!1),Oe=Me.data.compositeId,_e=m.get(R.engine.world,Oe,"composite");m.add(_e,Y),le.push(Y)}setTimeout(function(){Q(R,le)},200)}},E=function(R){for(var le=R.selected,V=t(R),he,ge,Y=0;Y<le.length;Y++)he=le[Y],ge=he.data,ge.position?he.mousedownOffset={x:V.x-ge.position.x,y:V.y-ge.position.y}:ge.pointA&&!ge.bodyA?he.mousedownOffset={x:V.x-ge.pointA.x,y:V.y-ge.pointA.y}:ge.pointB&&!ge.bodyB&&(he.mousedownOffset={x:V.x-ge.pointB.x,y:V.y-ge.pointB.y})},b=function(R,le,V){for(var he=R.selected,ge,Y,Me=0;Me<he.length;Me++)if(ge=he[Me],Y=ge.data,!!ge.mousedownOffset)switch(Y.type){case"body":var Oe={x:le-Y.position.x-ge.mousedownOffset.x,y:V-Y.position.y-ge.mousedownOffset.y};g.translate(Y,Oe),Y.positionPrev.x=Y.position.x,Y.positionPrev.y=Y.position.y;break;case"constraint":var _e=Y.pointA;Y.bodyA&&(_e=Y.pointB),_e.x=le-ge.mousedownOffset.x,_e.y=V-ge.mousedownOffset.y;var me=Y.bodyA?$.add(Y.bodyA.position,Y.pointA):Y.pointA,$e=Y.bodyB?$.add(Y.bodyB.position,Y.pointB):Y.pointB;Y.length=$.magnitude($.sub(me,$e));break}},T=function(R,le,V){for(var he=R.selected,ge,Y,Me=0;Me<he.length;Me++)switch(ge=he[Me],Y=ge.data,Y.type){case"body":g.scale(Y,le,V,Y.position),Y.circleRadius&&(Y.circleRadius*=le);break}},F=function(R,le){for(var V=R.selected,he,ge,Y=0;Y<V.length;Y++)switch(he=V[Y],ge=he.data,ge.type){case"body":g.rotate(ge,le);break}},U=function(R,le){le?(R.autoRewind&&R.serializer&&(Q(R,[]),x.loadState(R.serializer,R.engine,"pauseState")),R.engine.timing.timeScale=0,R.isPaused=!0,R.controls.pauseButton.text("Play"),C.trigger(R,"paused")):(R.autoRewind&&R.serializer&&x.saveState(R.serializer,R.engine,"pauseState"),R.engine.timing.timeScale=1,R.isPaused=!1,R.controls.pauseButton.text("Pause"),C.trigger(R,"play"))},Q=function(R,le){var V=R.controls.worldTree.data("jstree"),he,ge;for(ge=0;ge<R.selected.length;ge++)he=R.selected[ge].data,V.deselect_node(he.type+"_"+he.id,!0);for(R.selected=[],le.length>0&&console.clear(),ge=0;ge<le.length;ge++)he=le[ge],he&&(ee(R,he),ge<5?console.log(he.label+" "+he.id+": %O",he):ge===6&&console.warn("Omitted inspecting "+(le.length-5)+" more objects"))},ee=function(R,le){if(le){var V=R.controls.worldTree.data("jstree");R.selected.push({data:le}),V.select_node(le.type+"_"+le.id,!0)}},ie=function(R,le){le[0].state=le[0].state||{opened:!0},R.settings.core.data=le,R.refresh(-1)},te=function(R,le,V){var he=[],ge={id:"composite_"+R.id,data:{compositeId:le},type:"composite",text:(R.label?R.label:"Composite")+" "+R.id,li_attr:{class:"jstree-node-type-composite"}},Y=Ee(R.composites,R.id);return Y.id="composites_"+R.id,he.push(Y),V?Y.children:(Y=Ce(R.bodies,R.id),Y.id="bodies_"+R.id,he.push(Y),Y=Se(R.constraints,R.id),Y.id="constraints_"+R.id,he.push(Y),ge.children=he,ge)},Ee=function(R,le){for(var V={type:"composites",text:"Composites",data:{compositeId:le},children:[],li_attr:{class:"jstree-node-type-composites"}},he=0;he<R.length;he++){var ge=R[he];V.children.push(te(ge,le))}return V},Ce=function(R,le){for(var V={type:"bodies",text:"Bodies",data:{compositeId:le},children:[],li_attr:{class:"jstree-node-type-bodies"}},he=0;he<R.length;he++){var ge=R[he];V.children.push({type:"body",id:"body_"+ge.id,data:{compositeId:le},text:(ge.label?ge.label:"Body")+" "+ge.id,li_attr:{class:"jstree-node-type-body"}})}return V},Se=function(R,le){for(var V={type:"constraints",text:"Constraints",data:{compositeId:le},children:[],li_attr:{class:"jstree-node-type-constraints"}},he=0;he<R.length;he++){var ge=R[he];V.children.push({type:"constraint",id:"constraint_"+ge.id,data:{compositeId:le},text:(ge.label?ge.label:"Constraint")+" "+ge.id,li_attr:{class:"jstree-node-type-constraint"}})}return V},Be=function(R){var le=m.create();m.add(R.root,le),R.root.composites.splice(R.root.composites.length-1,1),R.root.composites.unshift(le),m.setModified(R.engine.world,!0,!0,!1)},rt=function(R){if(!R.serializer){alert("No serializer.");return}if(R.selected.length===0){alert("No objects were selected, so export could not be created. Can only export objects that are in the World composite.");return}for(var le="export-objects",V=m.create({label:"Exported Objects"}),he=0;he<R.selected.length;he++){var ge=R.selected[he].data;m.get(V,ge.id,ge.type)||(m.add(V,ge),R.selected.length===1&&(le="export-"+ge.label+"-"+ge.id))}le=le.toLowerCase().replace(/[^\w\-]/g,"")+".json";var Y=x.serialise(R.serializer,V,R.exportIndent),Me="WebkitAppearance"in document.documentElement.style;if(Me){var Oe=new Blob([Y],{type:"application/json"}),_e=document.createElement("a");_e.download=le,_e.href=(window.webkitURL||window.URL).createObjectURL(Oe),_e.dataset.downloadurl=["application/json",_e.download,_e.href].join(":"),_e.click()}else window.open("data:application/json;charset=utf-8,"+escape(Y));C.trigger(R,"export")},et=function(R){if(!R.serializer){alert("No serializer.");return}var le=document.createElement("div"),V;le.innerHTML='<input type="file">',V=le.firstChild,V.addEventListener("change",function(){var he=V.files[0];if(he.name.match(/\.(txt|json)$/)){var ge=new FileReader;ge.onload=function(){var Y=R.serializer.parse(ge.result);if(Y){Y.label="Imported Objects",m.rebase(Y),m.add(R.root,Y),R.root.composites.splice(R.root.composites.length-1,1),R.root.composites.unshift(Y);var Me=R.controls.worldTree.data("jstree"),Oe=te(R.root,null,!0);ie(Me,Oe)}},ge.readAsText(he)}else alert("File not supported, .json or .txt JSON files only")}),V.click()}},function(be,I,l){var f,_;/*! jQuery v3.5.1 | (c) JS Foundation and other contributors | jquery.org/license */(function(v,i){typeof be.exports=="object"?be.exports=v.document?i(v,!0):function(x){if(!x.document)throw new Error("jQuery requires a window with a document");return i(x)}:i(v)})(typeof window<"u"?window:this,function(v,i){var x=[],S=Object.getPrototypeOf,g=x.slice,d=x.flat?function(r){return x.flat.call(r)}:function(r){return x.concat.apply([],r)},m=x.push,w=x.indexOf,C={},N=C.toString,W=C.hasOwnProperty,J=W.toString,$=J.call(Object),k={},O=function(r){return typeof r=="function"&&typeof r.nodeType!="number"},z=function(r){return r!=null&&r===r.window},L=v.document,G={type:!0,src:!0,nonce:!0,noModule:!0};function e(r,o,h){var p,A,M=(h=h||L).createElement("script");if(M.text=r,o)for(p in G)(A=o[p]||o.getAttribute&&o.getAttribute(p))&&M.setAttribute(p,A);h.head.appendChild(M).parentNode.removeChild(M)}function s(r){return r==null?r+"":typeof r=="object"||typeof r=="function"?C[N.call(r)]||"object":typeof r}var n="3.5.1",t=function(r,o){return new t.fn.init(r,o)};function a(r){var o=!!r&&"length"in r&&r.length,h=s(r);return!O(r)&&!z(r)&&(h==="array"||o===0||typeof o=="number"&&0<o&&o-1 in r)}t.fn=t.prototype={jquery:n,constructor:t,length:0,toArray:function(){return g.call(this)},get:function(r){return r==null?g.call(this):r<0?this[r+this.length]:this[r]},pushStack:function(r){var o=t.merge(this.constructor(),r);return o.prevObject=this,o},each:function(r){return t.each(this,r)},map:function(r){return this.pushStack(t.map(this,function(o,h){return r.call(o,h,o)}))},slice:function(){return this.pushStack(g.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(t.grep(this,function(r,o){return(o+1)%2}))},odd:function(){return this.pushStack(t.grep(this,function(r,o){return o%2}))},eq:function(r){var o=this.length,h=+r+(r<0?o:0);return this.pushStack(0<=h&&h<o?[this[h]]:[])},end:function(){return this.prevObject||this.constructor()},push:m,sort:x.sort,splice:x.splice},t.extend=t.fn.extend=function(){var r,o,h,p,A,M,B=arguments[0]||{},K=1,X=arguments.length,re=!1;for(typeof B=="boolean"&&(re=B,B=arguments[K]||{},K++),typeof B=="object"||O(B)||(B={}),K===X&&(B=this,K--);K<X;K++)if((r=arguments[K])!=null)for(o in r)p=r[o],o!=="__proto__"&&B!==p&&(re&&p&&(t.isPlainObject(p)||(A=Array.isArray(p)))?(h=B[o],M=A&&!Array.isArray(h)?[]:A||t.isPlainObject(h)?h:{},A=!1,B[o]=t.extend(re,M,p)):p!==void 0&&(B[o]=p));return B},t.extend({expando:"jQuery"+(n+Math.random()).replace(/\D/g,""),isReady:!0,error:function(r){throw new Error(r)},noop:function(){},isPlainObject:function(r){var o,h;return!(!r||N.call(r)!=="[object Object]")&&(!(o=S(r))||typeof(h=W.call(o,"constructor")&&o.constructor)=="function"&&J.call(h)===$)},isEmptyObject:function(r){var o;for(o in r)return!1;return!0},globalEval:function(r,o,h){e(r,{nonce:o&&o.nonce},h)},each:function(r,o){var h,p=0;if(a(r))for(h=r.length;p<h&&o.call(r[p],p,r[p])!==!1;p++);else for(p in r)if(o.call(r[p],p,r[p])===!1)break;return r},makeArray:function(r,o){var h=o||[];return r!=null&&(a(Object(r))?t.merge(h,typeof r=="string"?[r]:r):m.call(h,r)),h},inArray:function(r,o,h){return o==null?-1:w.call(o,r,h)},merge:function(r,o){for(var h=+o.length,p=0,A=r.length;p<h;p++)r[A++]=o[p];return r.length=A,r},grep:function(r,o,h){for(var p=[],A=0,M=r.length,B=!h;A<M;A++)!o(r[A],A)!==B&&p.push(r[A]);return p},map:function(r,o,h){var p,A,M=0,B=[];if(a(r))for(p=r.length;M<p;M++)(A=o(r[M],M,h))!=null&&B.push(A);else for(M in r)(A=o(r[M],M,h))!=null&&B.push(A);return d(B)},guid:1,support:k}),typeof Symbol=="function"&&(t.fn[Symbol.iterator]=x[Symbol.iterator]),t.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(r,o){C["[object "+o+"]"]=o.toLowerCase()});var c=function(r){var o,h,p,A,M,B,K,X,re,ce,pe,oe,ue,Te,Re,Ne,at,ft,Tt,nt="sizzle"+1*new Date,Ve=r.document,Ct=0,Je=0,lt=En(),yn=En(),An=En(),Pt=En(),rn=function(D,q){return D===q&&(pe=!0),0},ln={}.hasOwnProperty,St=[],dn=St.pop,Bt=St.push,dt=St.push,Ot=St.slice,Nt=function(D,q){for(var ne=0,fe=D.length;ne<fe;ne++)if(D[ne]===q)return ne;return-1},Kt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",Ue="[\\x20\\t\\r\\n\\f]",tt="(?:\\\\[\\da-fA-F]{1,6}"+Ue+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",pt="\\["+Ue+"*("+tt+")(?:"+Ue+"*([*^$|!~]?=)"+Ue+`*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(`+tt+"))|)"+Ue+"*\\]",Mt=":("+tt+`)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|`+pt+")*)|.*)\\)|)",ut=new RegExp(Ue+"+","g"),Lt=new RegExp("^"+Ue+"+|((?:^|[^\\\\])(?:\\\\.)*)"+Ue+"+$","g"),cn=new RegExp("^"+Ue+"*,"+Ue+"*"),Cn=new RegExp("^"+Ue+"*([>+~]|"+Ue+")"+Ue+"*"),Qr=new RegExp(Ue+"|>"),Yr=new RegExp(Mt),Zr=new RegExp("^"+tt+"$"),Sn={ID:new RegExp("^#("+tt+")"),CLASS:new RegExp("^\\.("+tt+")"),TAG:new RegExp("^("+tt+"|[*])"),ATTR:new RegExp("^"+pt),PSEUDO:new RegExp("^"+Mt),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+Ue+"*(even|odd|(([+-]|)(\\d*)n|)"+Ue+"*(?:([+-]|)"+Ue+"*(\\d+)|))"+Ue+"*\\)|)","i"),bool:new RegExp("^(?:"+Kt+")$","i"),needsContext:new RegExp("^"+Ue+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+Ue+"*((?:-\\d)?\\d*)"+Ue+"*\\)|)(?=[^-]|$)","i")},ei=/HTML$/i,ti=/^(?:input|select|textarea|button)$/i,ni=/^h\d$/i,jn=/^[^{]+\{\s*\[native \w/,ri=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,Wn=/[+~]/,Qt=new RegExp("\\\\[\\da-fA-F]{1,6}"+Ue+"?|\\\\([^\\r\\n\\f])","g"),Yt=function(D,q){var ne="0x"+D.slice(1)-65536;return q||(ne<0?String.fromCharCode(ne+65536):String.fromCharCode(ne>>10|55296,1023&ne|56320))},xr=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,yr=function(D,q){return q?D==="\0"?"�":D.slice(0,-1)+"\\"+D.charCodeAt(D.length-1).toString(16)+" ":"\\"+D},jr=function(){oe()},ii=Pn(function(D){return D.disabled===!0&&D.nodeName.toLowerCase()==="fieldset"},{dir:"parentNode",next:"legend"});try{dt.apply(St=Ot.call(Ve.childNodes),Ve.childNodes),St[Ve.childNodes.length].nodeType}catch{dt={apply:St.length?function(q,ne){Bt.apply(q,Ot.call(ne))}:function(q,ne){for(var fe=q.length,se=0;q[fe++]=ne[se++];);q.length=fe-1}}}function it(D,q,ne,fe){var se,ve,xe,we,Ae,ze,Fe,He=q&&q.ownerDocument,Ke=q?q.nodeType:9;if(ne=ne||[],typeof D!="string"||!D||Ke!==1&&Ke!==9&&Ke!==11)return ne;if(!fe&&(oe(q),q=q||ue,Re)){if(Ke!==11&&(Ae=ri.exec(D)))if(se=Ae[1]){if(Ke===9){if(!(xe=q.getElementById(se)))return ne;if(xe.id===se)return ne.push(xe),ne}else if(He&&(xe=He.getElementById(se))&&Tt(q,xe)&&xe.id===se)return ne.push(xe),ne}else{if(Ae[2])return dt.apply(ne,q.getElementsByTagName(D)),ne;if((se=Ae[3])&&h.getElementsByClassName&&q.getElementsByClassName)return dt.apply(ne,q.getElementsByClassName(se)),ne}if(h.qsa&&!Pt[D+" "]&&(!Ne||!Ne.test(D))&&(Ke!==1||q.nodeName.toLowerCase()!=="object")){if(Fe=D,He=q,Ke===1&&(Qr.test(D)||Cn.test(D))){for((He=Wn.test(D)&&qn(q.parentNode)||q)===q&&h.scope||((we=q.getAttribute("id"))?we=we.replace(xr,yr):q.setAttribute("id",we=nt)),ve=(ze=B(D)).length;ve--;)ze[ve]=(we?"#"+we:":scope")+" "+Tn(ze[ve]);Fe=ze.join(",")}try{return dt.apply(ne,He.querySelectorAll(Fe)),ne}catch{Pt(D,!0)}finally{we===nt&&q.removeAttribute("id")}}}return X(D.replace(Lt,"$1"),q,ne,fe)}function En(){var D=[];return function q(ne,fe){return D.push(ne+" ")>p.cacheLength&&delete q[D.shift()],q[ne+" "]=fe}}function Ht(D){return D[nt]=!0,D}function zt(D){var q=ue.createElement("fieldset");try{return!!D(q)}catch{return!1}finally{q.parentNode&&q.parentNode.removeChild(q),q=null}}function Gn(D,q){for(var ne=D.split("|"),fe=ne.length;fe--;)p.attrHandle[ne[fe]]=q}function wr(D,q){var ne=q&&D,fe=ne&&D.nodeType===1&&q.nodeType===1&&D.sourceIndex-q.sourceIndex;if(fe)return fe;if(ne){for(;ne=ne.nextSibling;)if(ne===q)return-1}return D?1:-1}function si(D){return function(q){return q.nodeName.toLowerCase()==="input"&&q.type===D}}function oi(D){return function(q){var ne=q.nodeName.toLowerCase();return(ne==="input"||ne==="button")&&q.type===D}}function kr(D){return function(q){return"form"in q?q.parentNode&&q.disabled===!1?"label"in q?"label"in q.parentNode?q.parentNode.disabled===D:q.disabled===D:q.isDisabled===D||q.isDisabled!==!D&&ii(q)===D:q.disabled===D:"label"in q&&q.disabled===D}}function sn(D){return Ht(function(q){return q=+q,Ht(function(ne,fe){for(var se,ve=D([],ne.length,q),xe=ve.length;xe--;)ne[se=ve[xe]]&&(ne[se]=!(fe[se]=ne[se]))})})}function qn(D){return D&&typeof D.getElementsByTagName<"u"&&D}for(o in h=it.support={},M=it.isXML=function(D){var q=D.namespaceURI,ne=(D.ownerDocument||D).documentElement;return!ei.test(q||ne&&ne.nodeName||"HTML")},oe=it.setDocument=function(D){var q,ne,fe=D?D.ownerDocument||D:Ve;return fe!=ue&&fe.nodeType===9&&fe.documentElement&&(Te=(ue=fe).documentElement,Re=!M(ue),Ve!=ue&&(ne=ue.defaultView)&&ne.top!==ne&&(ne.addEventListener?ne.addEventListener("unload",jr,!1):ne.attachEvent&&ne.attachEvent("onunload",jr)),h.scope=zt(function(se){return Te.appendChild(se).appendChild(ue.createElement("div")),typeof se.querySelectorAll<"u"&&!se.querySelectorAll(":scope fieldset div").length}),h.attributes=zt(function(se){return se.className="i",!se.getAttribute("className")}),h.getElementsByTagName=zt(function(se){return se.appendChild(ue.createComment("")),!se.getElementsByTagName("*").length}),h.getElementsByClassName=jn.test(ue.getElementsByClassName),h.getById=zt(function(se){return Te.appendChild(se).id=nt,!ue.getElementsByName||!ue.getElementsByName(nt).length}),h.getById?(p.filter.ID=function(se){var ve=se.replace(Qt,Yt);return function(xe){return xe.getAttribute("id")===ve}},p.find.ID=function(se,ve){if(typeof ve.getElementById<"u"&&Re){var xe=ve.getElementById(se);return xe?[xe]:[]}}):(p.filter.ID=function(se){var ve=se.replace(Qt,Yt);return function(xe){var we=typeof xe.getAttributeNode<"u"&&xe.getAttributeNode("id");return we&&we.value===ve}},p.find.ID=function(se,ve){if(typeof ve.getElementById<"u"&&Re){var xe,we,Ae,ze=ve.getElementById(se);if(ze){if((xe=ze.getAttributeNode("id"))&&xe.value===se)return[ze];for(Ae=ve.getElementsByName(se),we=0;ze=Ae[we++];)if((xe=ze.getAttributeNode("id"))&&xe.value===se)return[ze]}return[]}}),p.find.TAG=h.getElementsByTagName?function(se,ve){return typeof ve.getElementsByTagName<"u"?ve.getElementsByTagName(se):h.qsa?ve.querySelectorAll(se):void 0}:function(se,ve){var xe,we=[],Ae=0,ze=ve.getElementsByTagName(se);if(se==="*"){for(;xe=ze[Ae++];)xe.nodeType===1&&we.push(xe);return we}return ze},p.find.CLASS=h.getElementsByClassName&&function(se,ve){if(typeof ve.getElementsByClassName<"u"&&Re)return ve.getElementsByClassName(se)},at=[],Ne=[],(h.qsa=jn.test(ue.querySelectorAll))&&(zt(function(se){var ve;Te.appendChild(se).innerHTML="<a id='"+nt+"'></a><select id='"+nt+"-\r\\' msallowcapture=''><option selected=''></option></select>",se.querySelectorAll("[msallowcapture^='']").length&&Ne.push("[*^$]="+Ue+`*(?:''|"")`),se.querySelectorAll("[selected]").length||Ne.push("\\["+Ue+"*(?:value|"+Kt+")"),se.querySelectorAll("[id~="+nt+"-]").length||Ne.push("~="),(ve=ue.createElement("input")).setAttribute("name",""),se.appendChild(ve),se.querySelectorAll("[name='']").length||Ne.push("\\["+Ue+"*name"+Ue+"*="+Ue+`*(?:''|"")`),se.querySelectorAll(":checked").length||Ne.push(":checked"),se.querySelectorAll("a#"+nt+"+*").length||Ne.push(".#.+[+~]"),se.querySelectorAll("\\\f"),Ne.push("[\\r\\n\\f]")}),zt(function(se){se.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var ve=ue.createElement("input");ve.setAttribute("type","hidden"),se.appendChild(ve).setAttribute("name","D"),se.querySelectorAll("[name=d]").length&&Ne.push("name"+Ue+"*[*^$|!~]?="),se.querySelectorAll(":enabled").length!==2&&Ne.push(":enabled",":disabled"),Te.appendChild(se).disabled=!0,se.querySelectorAll(":disabled").length!==2&&Ne.push(":enabled",":disabled"),se.querySelectorAll("*,:x"),Ne.push(",.*:")})),(h.matchesSelector=jn.test(ft=Te.matches||Te.webkitMatchesSelector||Te.mozMatchesSelector||Te.oMatchesSelector||Te.msMatchesSelector))&&zt(function(se){h.disconnectedMatch=ft.call(se,"*"),ft.call(se,"[s!='']:x"),at.push("!=",Mt)}),Ne=Ne.length&&new RegExp(Ne.join("|")),at=at.length&&new RegExp(at.join("|")),q=jn.test(Te.compareDocumentPosition),Tt=q||jn.test(Te.contains)?function(se,ve){var xe=se.nodeType===9?se.documentElement:se,we=ve&&ve.parentNode;return se===we||!(!we||we.nodeType!==1||!(xe.contains?xe.contains(we):se.compareDocumentPosition&&16&se.compareDocumentPosition(we)))}:function(se,ve){if(ve){for(;ve=ve.parentNode;)if(ve===se)return!0}return!1},rn=q?function(se,ve){if(se===ve)return pe=!0,0;var xe=!se.compareDocumentPosition-!ve.compareDocumentPosition;return xe||(1&(xe=(se.ownerDocument||se)==(ve.ownerDocument||ve)?se.compareDocumentPosition(ve):1)||!h.sortDetached&&ve.compareDocumentPosition(se)===xe?se==ue||se.ownerDocument==Ve&&Tt(Ve,se)?-1:ve==ue||ve.ownerDocument==Ve&&Tt(Ve,ve)?1:ce?Nt(ce,se)-Nt(ce,ve):0:4&xe?-1:1)}:function(se,ve){if(se===ve)return pe=!0,0;var xe,we=0,Ae=se.parentNode,ze=ve.parentNode,Fe=[se],He=[ve];if(!Ae||!ze)return se==ue?-1:ve==ue?1:Ae?-1:ze?1:ce?Nt(ce,se)-Nt(ce,ve):0;if(Ae===ze)return wr(se,ve);for(xe=se;xe=xe.parentNode;)Fe.unshift(xe);for(xe=ve;xe=xe.parentNode;)He.unshift(xe);for(;Fe[we]===He[we];)we++;return we?wr(Fe[we],He[we]):Fe[we]==Ve?-1:He[we]==Ve?1:0}),ue},it.matches=function(D,q){return it(D,null,null,q)},it.matchesSelector=function(D,q){if(oe(D),h.matchesSelector&&Re&&!Pt[q+" "]&&(!at||!at.test(q))&&(!Ne||!Ne.test(q)))try{var ne=ft.call(D,q);if(ne||h.disconnectedMatch||D.document&&D.document.nodeType!==11)return ne}catch{Pt(q,!0)}return 0<it(q,ue,null,[D]).length},it.contains=function(D,q){return(D.ownerDocument||D)!=ue&&oe(D),Tt(D,q)},it.attr=function(D,q){(D.ownerDocument||D)!=ue&&oe(D);var ne=p.attrHandle[q.toLowerCase()],fe=ne&&ln.call(p.attrHandle,q.toLowerCase())?ne(D,q,!Re):void 0;return fe!==void 0?fe:h.attributes||!Re?D.getAttribute(q):(fe=D.getAttributeNode(q))&&fe.specified?fe.value:null},it.escape=function(D){return(D+"").replace(xr,yr)},it.error=function(D){throw new Error("Syntax error, unrecognized expression: "+D)},it.uniqueSort=function(D){var q,ne=[],fe=0,se=0;if(pe=!h.detectDuplicates,ce=!h.sortStable&&D.slice(0),D.sort(rn),pe){for(;q=D[se++];)q===D[se]&&(fe=ne.push(se));for(;fe--;)D.splice(ne[fe],1)}return ce=null,D},A=it.getText=function(D){var q,ne="",fe=0,se=D.nodeType;if(se){if(se===1||se===9||se===11){if(typeof D.textContent=="string")return D.textContent;for(D=D.firstChild;D;D=D.nextSibling)ne+=A(D)}else if(se===3||se===4)return D.nodeValue}else for(;q=D[fe++];)ne+=A(q);return ne},(p=it.selectors={cacheLength:50,createPseudo:Ht,match:Sn,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(D){return D[1]=D[1].replace(Qt,Yt),D[3]=(D[3]||D[4]||D[5]||"").replace(Qt,Yt),D[2]==="~="&&(D[3]=" "+D[3]+" "),D.slice(0,4)},CHILD:function(D){return D[1]=D[1].toLowerCase(),D[1].slice(0,3)==="nth"?(D[3]||it.error(D[0]),D[4]=+(D[4]?D[5]+(D[6]||1):2*(D[3]==="even"||D[3]==="odd")),D[5]=+(D[7]+D[8]||D[3]==="odd")):D[3]&&it.error(D[0]),D},PSEUDO:function(D){var q,ne=!D[6]&&D[2];return Sn.CHILD.test(D[0])?null:(D[3]?D[2]=D[4]||D[5]||"":ne&&Yr.test(ne)&&(q=B(ne,!0))&&(q=ne.indexOf(")",ne.length-q)-ne.length)&&(D[0]=D[0].slice(0,q),D[2]=ne.slice(0,q)),D.slice(0,3))}},filter:{TAG:function(D){var q=D.replace(Qt,Yt).toLowerCase();return D==="*"?function(){return!0}:function(ne){return ne.nodeName&&ne.nodeName.toLowerCase()===q}},CLASS:function(D){var q=lt[D+" "];return q||(q=new RegExp("(^|"+Ue+")"+D+"("+Ue+"|$)"))&&lt(D,function(ne){return q.test(typeof ne.className=="string"&&ne.className||typeof ne.getAttribute<"u"&&ne.getAttribute("class")||"")})},ATTR:function(D,q,ne){return function(fe){var se=it.attr(fe,D);return se==null?q==="!=":!q||(se+="",q==="="?se===ne:q==="!="?se!==ne:q==="^="?ne&&se.indexOf(ne)===0:q==="*="?ne&&-1<se.indexOf(ne):q==="$="?ne&&se.slice(-ne.length)===ne:q==="~="?-1<(" "+se.replace(ut," ")+" ").indexOf(ne):q==="|="&&(se===ne||se.slice(0,ne.length+1)===ne+"-"))}},CHILD:function(D,q,ne,fe,se){var ve=D.slice(0,3)!=="nth",xe=D.slice(-4)!=="last",we=q==="of-type";return fe===1&&se===0?function(Ae){return!!Ae.parentNode}:function(Ae,ze,Fe){var He,Ke,ct,We,gt,vt,At=ve!==xe?"nextSibling":"previousSibling",st=Ae.parentNode,$t=we&&Ae.nodeName.toLowerCase(),jt=!Fe&&!we,ht=!1;if(st){if(ve){for(;At;){for(We=Ae;We=We[At];)if(we?We.nodeName.toLowerCase()===$t:We.nodeType===1)return!1;vt=At=D==="only"&&!vt&&"nextSibling"}return!0}if(vt=[xe?st.firstChild:st.lastChild],xe&&jt){for(ht=(gt=(He=(Ke=(ct=(We=st)[nt]||(We[nt]={}))[We.uniqueID]||(ct[We.uniqueID]={}))[D]||[])[0]===Ct&&He[1])&&He[2],We=gt&&st.childNodes[gt];We=++gt&&We&&We[At]||(ht=gt=0)||vt.pop();)if(We.nodeType===1&&++ht&&We===Ae){Ke[D]=[Ct,gt,ht];break}}else if(jt&&(ht=gt=(He=(Ke=(ct=(We=Ae)[nt]||(We[nt]={}))[We.uniqueID]||(ct[We.uniqueID]={}))[D]||[])[0]===Ct&&He[1]),ht===!1)for(;(We=++gt&&We&&We[At]||(ht=gt=0)||vt.pop())&&!((we?We.nodeName.toLowerCase()===$t:We.nodeType===1)&&++ht&&(jt&&((Ke=(ct=We[nt]||(We[nt]={}))[We.uniqueID]||(ct[We.uniqueID]={}))[D]=[Ct,ht]),We===Ae)););return(ht-=se)===fe||ht%fe==0&&0<=ht/fe}}},PSEUDO:function(D,q){var ne,fe=p.pseudos[D]||p.setFilters[D.toLowerCase()]||it.error("unsupported pseudo: "+D);return fe[nt]?fe(q):1<fe.length?(ne=[D,D,"",q],p.setFilters.hasOwnProperty(D.toLowerCase())?Ht(function(se,ve){for(var xe,we=fe(se,q),Ae=we.length;Ae--;)se[xe=Nt(se,we[Ae])]=!(ve[xe]=we[Ae])}):function(se){return fe(se,0,ne)}):fe}},pseudos:{not:Ht(function(D){var q=[],ne=[],fe=K(D.replace(Lt,"$1"));return fe[nt]?Ht(function(se,ve,xe,we){for(var Ae,ze=fe(se,null,we,[]),Fe=se.length;Fe--;)(Ae=ze[Fe])&&(se[Fe]=!(ve[Fe]=Ae))}):function(se,ve,xe){return q[0]=se,fe(q,null,xe,ne),q[0]=null,!ne.pop()}}),has:Ht(function(D){return function(q){return 0<it(D,q).length}}),contains:Ht(function(D){return D=D.replace(Qt,Yt),function(q){return-1<(q.textContent||A(q)).indexOf(D)}}),lang:Ht(function(D){return Zr.test(D||"")||it.error("unsupported lang: "+D),D=D.replace(Qt,Yt).toLowerCase(),function(q){var ne;do if(ne=Re?q.lang:q.getAttribute("xml:lang")||q.getAttribute("lang"))return(ne=ne.toLowerCase())===D||ne.indexOf(D+"-")===0;while((q=q.parentNode)&&q.nodeType===1);return!1}}),target:function(D){var q=r.location&&r.location.hash;return q&&q.slice(1)===D.id},root:function(D){return D===Te},focus:function(D){return D===ue.activeElement&&(!ue.hasFocus||ue.hasFocus())&&!!(D.type||D.href||~D.tabIndex)},enabled:kr(!1),disabled:kr(!0),checked:function(D){var q=D.nodeName.toLowerCase();return q==="input"&&!!D.checked||q==="option"&&!!D.selected},selected:function(D){return D.parentNode&&D.parentNode.selectedIndex,D.selected===!0},empty:function(D){for(D=D.firstChild;D;D=D.nextSibling)if(D.nodeType<6)return!1;return!0},parent:function(D){return!p.pseudos.empty(D)},header:function(D){return ni.test(D.nodeName)},input:function(D){return ti.test(D.nodeName)},button:function(D){var q=D.nodeName.toLowerCase();return q==="input"&&D.type==="button"||q==="button"},text:function(D){var q;return D.nodeName.toLowerCase()==="input"&&D.type==="text"&&((q=D.getAttribute("type"))==null||q.toLowerCase()==="text")},first:sn(function(){return[0]}),last:sn(function(D,q){return[q-1]}),eq:sn(function(D,q,ne){return[ne<0?ne+q:ne]}),even:sn(function(D,q){for(var ne=0;ne<q;ne+=2)D.push(ne);return D}),odd:sn(function(D,q){for(var ne=1;ne<q;ne+=2)D.push(ne);return D}),lt:sn(function(D,q,ne){for(var fe=ne<0?ne+q:q<ne?q:ne;0<=--fe;)D.push(fe);return D}),gt:sn(function(D,q,ne){for(var fe=ne<0?ne+q:ne;++fe<q;)D.push(fe);return D})}}).pseudos.nth=p.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})p.pseudos[o]=si(o);for(o in{submit:!0,reset:!0})p.pseudos[o]=oi(o);function br(){}function Tn(D){for(var q=0,ne=D.length,fe="";q<ne;q++)fe+=D[q].value;return fe}function Pn(D,q,ne){var fe=q.dir,se=q.next,ve=se||fe,xe=ne&&ve==="parentNode",we=Je++;return q.first?function(Ae,ze,Fe){for(;Ae=Ae[fe];)if(Ae.nodeType===1||xe)return D(Ae,ze,Fe);return!1}:function(Ae,ze,Fe){var He,Ke,ct,We=[Ct,we];if(Fe){for(;Ae=Ae[fe];)if((Ae.nodeType===1||xe)&&D(Ae,ze,Fe))return!0}else for(;Ae=Ae[fe];)if(Ae.nodeType===1||xe)if(Ke=(ct=Ae[nt]||(Ae[nt]={}))[Ae.uniqueID]||(ct[Ae.uniqueID]={}),se&&se===Ae.nodeName.toLowerCase())Ae=Ae[fe]||Ae;else{if((He=Ke[ve])&&He[0]===Ct&&He[1]===we)return We[2]=He[2];if((Ke[ve]=We)[2]=D(Ae,ze,Fe))return!0}return!1}}function Kn(D){return 1<D.length?function(q,ne,fe){for(var se=D.length;se--;)if(!D[se](q,ne,fe))return!1;return!0}:D[0]}function On(D,q,ne,fe,se){for(var ve,xe=[],we=0,Ae=D.length,ze=q!=null;we<Ae;we++)(ve=D[we])&&(ne&&!ne(ve,fe,se)||(xe.push(ve),ze&&q.push(we)));return xe}function $n(D,q,ne,fe,se,ve){return fe&&!fe[nt]&&(fe=$n(fe)),se&&!se[nt]&&(se=$n(se,ve)),Ht(function(xe,we,Ae,ze){var Fe,He,Ke,ct=[],We=[],gt=we.length,vt=xe||function($t,jt,ht){for(var Vt=0,Nn=jt.length;Vt<Nn;Vt++)it($t,jt[Vt],ht);return ht}(q||"*",Ae.nodeType?[Ae]:Ae,[]),At=!D||!xe&&q?vt:On(vt,ct,D,Ae,ze),st=ne?se||(xe?D:gt||fe)?[]:we:At;if(ne&&ne(At,st,Ae,ze),fe)for(Fe=On(st,We),fe(Fe,[],Ae,ze),He=Fe.length;He--;)(Ke=Fe[He])&&(st[We[He]]=!(At[We[He]]=Ke));if(xe){if(se||D){if(se){for(Fe=[],He=st.length;He--;)(Ke=st[He])&&Fe.push(At[He]=Ke);se(null,st=[],Fe,ze)}for(He=st.length;He--;)(Ke=st[He])&&-1<(Fe=se?Nt(xe,Ke):ct[He])&&(xe[Fe]=!(we[Fe]=Ke))}}else st=On(st===we?st.splice(gt,st.length):st),se?se(null,we,st,ze):dt.apply(we,st)})}function Xn(D){for(var q,ne,fe,se=D.length,ve=p.relative[D[0].type],xe=ve||p.relative[" "],we=ve?1:0,Ae=Pn(function(He){return He===q},xe,!0),ze=Pn(function(He){return-1<Nt(q,He)},xe,!0),Fe=[function(He,Ke,ct){var We=!ve&&(ct||Ke!==re)||((q=Ke).nodeType?Ae(He,Ke,ct):ze(He,Ke,ct));return q=null,We}];we<se;we++)if(ne=p.relative[D[we].type])Fe=[Pn(Kn(Fe),ne)];else{if((ne=p.filter[D[we].type].apply(null,D[we].matches))[nt]){for(fe=++we;fe<se&&!p.relative[D[fe].type];fe++);return $n(1<we&&Kn(Fe),1<we&&Tn(D.slice(0,we-1).concat({value:D[we-2].type===" "?"*":""})).replace(Lt,"$1"),ne,we<fe&&Xn(D.slice(we,fe)),fe<se&&Xn(D=D.slice(fe)),fe<se&&Tn(D))}Fe.push(ne)}return Kn(Fe)}return br.prototype=p.filters=p.pseudos,p.setFilters=new br,B=it.tokenize=function(D,q){var ne,fe,se,ve,xe,we,Ae,ze=yn[D+" "];if(ze)return q?0:ze.slice(0);for(xe=D,we=[],Ae=p.preFilter;xe;){for(ve in ne&&!(fe=cn.exec(xe))||(fe&&(xe=xe.slice(fe[0].length)||xe),we.push(se=[])),ne=!1,(fe=Cn.exec(xe))&&(ne=fe.shift(),se.push({value:ne,type:fe[0].replace(Lt," ")}),xe=xe.slice(ne.length)),p.filter)!(fe=Sn[ve].exec(xe))||Ae[ve]&&!(fe=Ae[ve](fe))||(ne=fe.shift(),se.push({value:ne,type:ve,matches:fe}),xe=xe.slice(ne.length));if(!ne)break}return q?xe.length:xe?it.error(D):yn(D,we).slice(0)},K=it.compile=function(D,q){var ne,fe,se,ve,xe,we,Ae=[],ze=[],Fe=An[D+" "];if(!Fe){for(q||(q=B(D)),ne=q.length;ne--;)(Fe=Xn(q[ne]))[nt]?Ae.push(Fe):ze.push(Fe);(Fe=An(D,(fe=ze,ve=0<(se=Ae).length,xe=0<fe.length,we=function(He,Ke,ct,We,gt){var vt,At,st,$t=0,jt="0",ht=He&&[],Vt=[],Nn=re,Ar=He||xe&&p.find.TAG("*",gt),Cr=Ct+=Nn==null?1:Math.random()||.1,ai=Ar.length;for(gt&&(re=Ke==ue||Ke||gt);jt!==ai&&(vt=Ar[jt])!=null;jt++){if(xe&&vt){for(At=0,Ke||vt.ownerDocument==ue||(oe(vt),ct=!Re);st=fe[At++];)if(st(vt,Ke||ue,ct)){We.push(vt);break}gt&&(Ct=Cr)}ve&&((vt=!st&&vt)&&$t--,He&&ht.push(vt))}if($t+=jt,ve&&jt!==$t){for(At=0;st=se[At++];)st(ht,Vt,Ke,ct);if(He){if(0<$t)for(;jt--;)ht[jt]||Vt[jt]||(Vt[jt]=dn.call(We));Vt=On(Vt)}dt.apply(We,Vt),gt&&!He&&0<Vt.length&&1<$t+se.length&&it.uniqueSort(We)}return gt&&(Ct=Cr,re=Nn),ht},ve?Ht(we):we))).selector=D}return Fe},X=it.select=function(D,q,ne,fe){var se,ve,xe,we,Ae,ze=typeof D=="function"&&D,Fe=!fe&&B(D=ze.selector||D);if(ne=ne||[],Fe.length===1){if(2<(ve=Fe[0]=Fe[0].slice(0)).length&&(xe=ve[0]).type==="ID"&&q.nodeType===9&&Re&&p.relative[ve[1].type]){if(!(q=(p.find.ID(xe.matches[0].replace(Qt,Yt),q)||[])[0]))return ne;ze&&(q=q.parentNode),D=D.slice(ve.shift().value.length)}for(se=Sn.needsContext.test(D)?0:ve.length;se--&&(xe=ve[se],!p.relative[we=xe.type]);)if((Ae=p.find[we])&&(fe=Ae(xe.matches[0].replace(Qt,Yt),Wn.test(ve[0].type)&&qn(q.parentNode)||q))){if(ve.splice(se,1),!(D=fe.length&&Tn(ve)))return dt.apply(ne,fe),ne;break}}return(ze||K(D,Fe))(fe,q,!Re,ne,!q||Wn.test(D)&&qn(q.parentNode)||q),ne},h.sortStable=nt.split("").sort(rn).join("")===nt,h.detectDuplicates=!!pe,oe(),h.sortDetached=zt(function(D){return 1&D.compareDocumentPosition(ue.createElement("fieldset"))}),zt(function(D){return D.innerHTML="<a href='#'></a>",D.firstChild.getAttribute("href")==="#"})||Gn("type|href|height|width",function(D,q,ne){if(!ne)return D.getAttribute(q,q.toLowerCase()==="type"?1:2)}),h.attributes&&zt(function(D){return D.innerHTML="<input/>",D.firstChild.setAttribute("value",""),D.firstChild.getAttribute("value")===""})||Gn("value",function(D,q,ne){if(!ne&&D.nodeName.toLowerCase()==="input")return D.defaultValue}),zt(function(D){return D.getAttribute("disabled")==null})||Gn(Kt,function(D,q,ne){var fe;if(!ne)return D[q]===!0?q.toLowerCase():(fe=D.getAttributeNode(q))&&fe.specified?fe.value:null}),it}(v);t.find=c,t.expr=c.selectors,t.expr[":"]=t.expr.pseudos,t.uniqueSort=t.unique=c.uniqueSort,t.text=c.getText,t.isXMLDoc=c.isXML,t.contains=c.contains,t.escapeSelector=c.escape;var u=function(r,o,h){for(var p=[],A=h!==void 0;(r=r[o])&&r.nodeType!==9;)if(r.nodeType===1){if(A&&t(r).is(h))break;p.push(r)}return p},y=function(r,o){for(var h=[];r;r=r.nextSibling)r.nodeType===1&&r!==o&&h.push(r);return h},E=t.expr.match.needsContext;function b(r,o){return r.nodeName&&r.nodeName.toLowerCase()===o.toLowerCase()}var T=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function F(r,o,h){return O(o)?t.grep(r,function(p,A){return!!o.call(p,A,p)!==h}):o.nodeType?t.grep(r,function(p){return p===o!==h}):typeof o!="string"?t.grep(r,function(p){return-1<w.call(o,p)!==h}):t.filter(o,r,h)}t.filter=function(r,o,h){var p=o[0];return h&&(r=":not("+r+")"),o.length===1&&p.nodeType===1?t.find.matchesSelector(p,r)?[p]:[]:t.find.matches(r,t.grep(o,function(A){return A.nodeType===1}))},t.fn.extend({find:function(r){var o,h,p=this.length,A=this;if(typeof r!="string")return this.pushStack(t(r).filter(function(){for(o=0;o<p;o++)if(t.contains(A[o],this))return!0}));for(h=this.pushStack([]),o=0;o<p;o++)t.find(r,A[o],h);return 1<p?t.uniqueSort(h):h},filter:function(r){return this.pushStack(F(this,r||[],!1))},not:function(r){return this.pushStack(F(this,r||[],!0))},is:function(r){return!!F(this,typeof r=="string"&&E.test(r)?t(r):r||[],!1).length}});var U,Q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(t.fn.init=function(r,o,h){var p,A;if(!r)return this;if(h=h||U,typeof r=="string"){if(!(p=r[0]==="<"&&r[r.length-1]===">"&&3<=r.length?[null,r,null]:Q.exec(r))||!p[1]&&o)return!o||o.jquery?(o||h).find(r):this.constructor(o).find(r);if(p[1]){if(o=o instanceof t?o[0]:o,t.merge(this,t.parseHTML(p[1],o&&o.nodeType?o.ownerDocument||o:L,!0)),T.test(p[1])&&t.isPlainObject(o))for(p in o)O(this[p])?this[p](o[p]):this.attr(p,o[p]);return this}return(A=L.getElementById(p[2]))&&(this[0]=A,this.length=1),this}return r.nodeType?(this[0]=r,this.length=1,this):O(r)?h.ready!==void 0?h.ready(r):r(t):t.makeArray(r,this)}).prototype=t.fn,U=t(L);var ee=/^(?:parents|prev(?:Until|All))/,ie={children:!0,contents:!0,next:!0,prev:!0};function te(r,o){for(;(r=r[o])&&r.nodeType!==1;);return r}t.fn.extend({has:function(r){var o=t(r,this),h=o.length;return this.filter(function(){for(var p=0;p<h;p++)if(t.contains(this,o[p]))return!0})},closest:function(r,o){var h,p=0,A=this.length,M=[],B=typeof r!="string"&&t(r);if(!E.test(r)){for(;p<A;p++)for(h=this[p];h&&h!==o;h=h.parentNode)if(h.nodeType<11&&(B?-1<B.index(h):h.nodeType===1&&t.find.matchesSelector(h,r))){M.push(h);break}}return this.pushStack(1<M.length?t.uniqueSort(M):M)},index:function(r){return r?typeof r=="string"?w.call(t(r),this[0]):w.call(this,r.jquery?r[0]:r):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(r,o){return this.pushStack(t.uniqueSort(t.merge(this.get(),t(r,o))))},addBack:function(r){return this.add(r==null?this.prevObject:this.prevObject.filter(r))}}),t.each({parent:function(r){var o=r.parentNode;return o&&o.nodeType!==11?o:null},parents:function(r){return u(r,"parentNode")},parentsUntil:function(r,o,h){return u(r,"parentNode",h)},next:function(r){return te(r,"nextSibling")},prev:function(r){return te(r,"previousSibling")},nextAll:function(r){return u(r,"nextSibling")},prevAll:function(r){return u(r,"previousSibling")},nextUntil:function(r,o,h){return u(r,"nextSibling",h)},prevUntil:function(r,o,h){return u(r,"previousSibling",h)},siblings:function(r){return y((r.parentNode||{}).firstChild,r)},children:function(r){return y(r.firstChild)},contents:function(r){return r.contentDocument!=null&&S(r.contentDocument)?r.contentDocument:(b(r,"template")&&(r=r.content||r),t.merge([],r.childNodes))}},function(r,o){t.fn[r]=function(h,p){var A=t.map(this,o,h);return r.slice(-5)!=="Until"&&(p=h),p&&typeof p=="string"&&(A=t.filter(p,A)),1<this.length&&(ie[r]||t.uniqueSort(A),ee.test(r)&&A.reverse()),this.pushStack(A)}});var Ee=/[^\x20\t\r\n\f]+/g;function Ce(r){return r}function Se(r){throw r}function Be(r,o,h,p){var A;try{r&&O(A=r.promise)?A.call(r).done(o).fail(h):r&&O(A=r.then)?A.call(r,o,h):o.apply(void 0,[r].slice(p))}catch(M){h.apply(void 0,[M])}}t.Callbacks=function(r){var o,h;r=typeof r=="string"?(o=r,h={},t.each(o.match(Ee)||[],function(oe,ue){h[ue]=!0}),h):t.extend({},r);var p,A,M,B,K=[],X=[],re=-1,ce=function(){for(B=B||r.once,M=p=!0;X.length;re=-1)for(A=X.shift();++re<K.length;)K[re].apply(A[0],A[1])===!1&&r.stopOnFalse&&(re=K.length,A=!1);r.memory||(A=!1),p=!1,B&&(K=A?[]:"")},pe={add:function(){return K&&(A&&!p&&(re=K.length-1,X.push(A)),function oe(ue){t.each(ue,function(Te,Re){O(Re)?r.unique&&pe.has(Re)||K.push(Re):Re&&Re.length&&s(Re)!=="string"&&oe(Re)})}(arguments),A&&!p&&ce()),this},remove:function(){return t.each(arguments,function(oe,ue){for(var Te;-1<(Te=t.inArray(ue,K,Te));)K.splice(Te,1),Te<=re&&re--}),this},has:function(oe){return oe?-1<t.inArray(oe,K):0<K.length},empty:function(){return K&&(K=[]),this},disable:function(){return B=X=[],K=A="",this},disabled:function(){return!K},lock:function(){return B=X=[],A||p||(K=A=""),this},locked:function(){return!!B},fireWith:function(oe,ue){return B||(ue=[oe,(ue=ue||[]).slice?ue.slice():ue],X.push(ue),p||ce()),this},fire:function(){return pe.fireWith(this,arguments),this},fired:function(){return!!M}};return pe},t.extend({Deferred:function(r){var o=[["notify","progress",t.Callbacks("memory"),t.Callbacks("memory"),2],["resolve","done",t.Callbacks("once memory"),t.Callbacks("once memory"),0,"resolved"],["reject","fail",t.Callbacks("once memory"),t.Callbacks("once memory"),1,"rejected"]],h="pending",p={state:function(){return h},always:function(){return A.done(arguments).fail(arguments),this},catch:function(M){return p.then(null,M)},pipe:function(){var M=arguments;return t.Deferred(function(B){t.each(o,function(K,X){var re=O(M[X[4]])&&M[X[4]];A[X[1]](function(){var ce=re&&re.apply(this,arguments);ce&&O(ce.promise)?ce.promise().progress(B.notify).done(B.resolve).fail(B.reject):B[X[0]+"With"](this,re?[ce]:arguments)})}),M=null}).promise()},then:function(M,B,K){var X=0;function re(ce,pe,oe,ue){return function(){var Te=this,Re=arguments,Ne=function(){var ft,Tt;if(!(ce<X)){if((ft=oe.apply(Te,Re))===pe.promise())throw new TypeError("Thenable self-resolution");Tt=ft&&(typeof ft=="object"||typeof ft=="function")&&ft.then,O(Tt)?ue?Tt.call(ft,re(X,pe,Ce,ue),re(X,pe,Se,ue)):(X++,Tt.call(ft,re(X,pe,Ce,ue),re(X,pe,Se,ue),re(X,pe,Ce,pe.notifyWith))):(oe!==Ce&&(Te=void 0,Re=[ft]),(ue||pe.resolveWith)(Te,Re))}},at=ue?Ne:function(){try{Ne()}catch(ft){t.Deferred.exceptionHook&&t.Deferred.exceptionHook(ft,at.stackTrace),X<=ce+1&&(oe!==Se&&(Te=void 0,Re=[ft]),pe.rejectWith(Te,Re))}};ce?at():(t.Deferred.getStackHook&&(at.stackTrace=t.Deferred.getStackHook()),v.setTimeout(at))}}return t.Deferred(function(ce){o[0][3].add(re(0,ce,O(K)?K:Ce,ce.notifyWith)),o[1][3].add(re(0,ce,O(M)?M:Ce)),o[2][3].add(re(0,ce,O(B)?B:Se))}).promise()},promise:function(M){return M!=null?t.extend(M,p):p}},A={};return t.each(o,function(M,B){var K=B[2],X=B[5];p[B[1]]=K.add,X&&K.add(function(){h=X},o[3-M][2].disable,o[3-M][3].disable,o[0][2].lock,o[0][3].lock),K.add(B[3].fire),A[B[0]]=function(){return A[B[0]+"With"](this===A?void 0:this,arguments),this},A[B[0]+"With"]=K.fireWith}),p.promise(A),r&&r.call(A,A),A},when:function(r){var o=arguments.length,h=o,p=Array(h),A=g.call(arguments),M=t.Deferred(),B=function(K){return function(X){p[K]=this,A[K]=1<arguments.length?g.call(arguments):X,--o||M.resolveWith(p,A)}};if(o<=1&&(Be(r,M.done(B(h)).resolve,M.reject,!o),M.state()==="pending"||O(A[h]&&A[h].then)))return M.then();for(;h--;)Be(A[h],B(h),M.reject);return M.promise()}});var rt=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;t.Deferred.exceptionHook=function(r,o){v.console&&v.console.warn&&r&&rt.test(r.name)&&v.console.warn("jQuery.Deferred exception: "+r.message,r.stack,o)},t.readyException=function(r){v.setTimeout(function(){throw r})};var et=t.Deferred();function R(){L.removeEventListener("DOMContentLoaded",R),v.removeEventListener("load",R),t.ready()}t.fn.ready=function(r){return et.then(r).catch(function(o){t.readyException(o)}),this},t.extend({isReady:!1,readyWait:1,ready:function(r){(r===!0?--t.readyWait:t.isReady)||(t.isReady=!0)!==r&&0<--t.readyWait||et.resolveWith(L,[t])}}),t.ready.then=et.then,L.readyState==="complete"||L.readyState!=="loading"&&!L.documentElement.doScroll?v.setTimeout(t.ready):(L.addEventListener("DOMContentLoaded",R),v.addEventListener("load",R));var le=function(r,o,h,p,A,M,B){var K=0,X=r.length,re=h==null;if(s(h)==="object")for(K in A=!0,h)le(r,o,K,h[K],!0,M,B);else if(p!==void 0&&(A=!0,O(p)||(B=!0),re&&(B?(o.call(r,p),o=null):(re=o,o=function(ce,pe,oe){return re.call(t(ce),oe)})),o))for(;K<X;K++)o(r[K],h,B?p:p.call(r[K],K,o(r[K],h)));return A?r:re?o.call(r):X?o(r[0],h):M},V=/^-ms-/,he=/-([a-z])/g;function ge(r,o){return o.toUpperCase()}function Y(r){return r.replace(V,"ms-").replace(he,ge)}var Me=function(r){return r.nodeType===1||r.nodeType===9||!+r.nodeType};function Oe(){this.expando=t.expando+Oe.uid++}Oe.uid=1,Oe.prototype={cache:function(r){var o=r[this.expando];return o||(o={},Me(r)&&(r.nodeType?r[this.expando]=o:Object.defineProperty(r,this.expando,{value:o,configurable:!0}))),o},set:function(r,o,h){var p,A=this.cache(r);if(typeof o=="string")A[Y(o)]=h;else for(p in o)A[Y(p)]=o[p];return A},get:function(r,o){return o===void 0?this.cache(r):r[this.expando]&&r[this.expando][Y(o)]},access:function(r,o,h){return o===void 0||o&&typeof o=="string"&&h===void 0?this.get(r,o):(this.set(r,o,h),h!==void 0?h:o)},remove:function(r,o){var h,p=r[this.expando];if(p!==void 0){if(o!==void 0)for(h=(o=Array.isArray(o)?o.map(Y):(o=Y(o))in p?[o]:o.match(Ee)||[]).length;h--;)delete p[o[h]];(o===void 0||t.isEmptyObject(p))&&(r.nodeType?r[this.expando]=void 0:delete r[this.expando])}},hasData:function(r){var o=r[this.expando];return o!==void 0&&!t.isEmptyObject(o)}};var _e=new Oe,me=new Oe,$e=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Qe=/[A-Z]/g;function Ge(r,o,h){var p,A;if(h===void 0&&r.nodeType===1)if(p="data-"+o.replace(Qe,"-$&").toLowerCase(),typeof(h=r.getAttribute(p))=="string"){try{h=(A=h)==="true"||A!=="false"&&(A==="null"?null:A===+A+""?+A:$e.test(A)?JSON.parse(A):A)}catch{}me.set(r,o,h)}else h=void 0;return h}t.extend({hasData:function(r){return me.hasData(r)||_e.hasData(r)},data:function(r,o,h){return me.access(r,o,h)},removeData:function(r,o){me.remove(r,o)},_data:function(r,o,h){return _e.access(r,o,h)},_removeData:function(r,o){_e.remove(r,o)}}),t.fn.extend({data:function(r,o){var h,p,A,M=this[0],B=M&&M.attributes;if(r===void 0){if(this.length&&(A=me.get(M),M.nodeType===1&&!_e.get(M,"hasDataAttrs"))){for(h=B.length;h--;)B[h]&&(p=B[h].name).indexOf("data-")===0&&(p=Y(p.slice(5)),Ge(M,p,A[p]));_e.set(M,"hasDataAttrs",!0)}return A}return typeof r=="object"?this.each(function(){me.set(this,r)}):le(this,function(K){var X;if(M&&K===void 0)return(X=me.get(M,r))!==void 0||(X=Ge(M,r))!==void 0?X:void 0;this.each(function(){me.set(this,r,K)})},null,o,1<arguments.length,null,!0)},removeData:function(r){return this.each(function(){me.remove(this,r)})}}),t.extend({queue:function(r,o,h){var p;if(r)return o=(o||"fx")+"queue",p=_e.get(r,o),h&&(!p||Array.isArray(h)?p=_e.access(r,o,t.makeArray(h)):p.push(h)),p||[]},dequeue:function(r,o){o=o||"fx";var h=t.queue(r,o),p=h.length,A=h.shift(),M=t._queueHooks(r,o);A==="inprogress"&&(A=h.shift(),p--),A&&(o==="fx"&&h.unshift("inprogress"),delete M.stop,A.call(r,function(){t.dequeue(r,o)},M)),!p&&M&&M.empty.fire()},_queueHooks:function(r,o){var h=o+"queueHooks";return _e.get(r,h)||_e.access(r,h,{empty:t.Callbacks("once memory").add(function(){_e.remove(r,[o+"queue",h])})})}}),t.fn.extend({queue:function(r,o){var h=2;return typeof r!="string"&&(o=r,r="fx",h--),arguments.length<h?t.queue(this[0],r):o===void 0?this:this.each(function(){var p=t.queue(this,r,o);t._queueHooks(this,r),r==="fx"&&p[0]!=="inprogress"&&t.dequeue(this,r)})},dequeue:function(r){return this.each(function(){t.dequeue(this,r)})},clearQueue:function(r){return this.queue(r||"fx",[])},promise:function(r,o){var h,p=1,A=t.Deferred(),M=this,B=this.length,K=function(){--p||A.resolveWith(M,[M])};for(typeof r!="string"&&(o=r,r=void 0),r=r||"fx";B--;)(h=_e.get(M[B],r+"queueHooks"))&&h.empty&&(p++,h.empty.add(K));return K(),A.promise(o)}});var ye=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,mt=new RegExp("^(?:([+-])=|)("+ye+")([a-z%]*)$","i"),_t=["Top","Right","Bottom","Left"],wt=L.documentElement,yt=function(r){return t.contains(r.ownerDocument,r)},Rt={composed:!0};wt.getRootNode&&(yt=function(r){return t.contains(r.ownerDocument,r)||r.getRootNode(Rt)===r.ownerDocument});var Dt=function(r,o){return(r=o||r).style.display==="none"||r.style.display===""&&yt(r)&&t.css(r,"display")==="none"};function un(r,o,h,p){var A,M,B=20,K=p?function(){return p.cur()}:function(){return t.css(r,o,"")},X=K(),re=h&&h[3]||(t.cssNumber[o]?"":"px"),ce=r.nodeType&&(t.cssNumber[o]||re!=="px"&&+X)&&mt.exec(t.css(r,o));if(ce&&ce[3]!==re){for(X/=2,re=re||ce[3],ce=+X||1;B--;)t.style(r,o,ce+re),(1-M)*(1-(M=K()/X||.5))<=0&&(B=0),ce/=M;ce*=2,t.style(r,o,ce+re),h=h||[]}return h&&(ce=+ce||+X||0,A=h[1]?ce+(h[1]+1)*h[2]:+h[2],p&&(p.unit=re,p.start=ce,p.end=A)),A}var Jt={};function Ut(r,o){for(var h,p,A,M,B,K,X,re=[],ce=0,pe=r.length;ce<pe;ce++)(p=r[ce]).style&&(h=p.style.display,o?(h==="none"&&(re[ce]=_e.get(p,"display")||null,re[ce]||(p.style.display="")),p.style.display===""&&Dt(p)&&(re[ce]=(X=B=M=void 0,B=(A=p).ownerDocument,K=A.nodeName,(X=Jt[K])||(M=B.body.appendChild(B.createElement(K)),X=t.css(M,"display"),M.parentNode.removeChild(M),X==="none"&&(X="block"),Jt[K]=X)))):h!=="none"&&(re[ce]="none",_e.set(p,"display",h)));for(ce=0;ce<pe;ce++)re[ce]!=null&&(r[ce].style.display=re[ce]);return r}t.fn.extend({show:function(){return Ut(this,!0)},hide:function(){return Ut(this)},toggle:function(r){return typeof r=="boolean"?r?this.show():this.hide():this.each(function(){Dt(this)?t(this).show():t(this).hide()})}});var Wt,Ye,Zt=/^(?:checkbox|radio)$/i,hn=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,fn=/^$|^module$|\/(?:java|ecma)script/i;Wt=L.createDocumentFragment().appendChild(L.createElement("div")),(Ye=L.createElement("input")).setAttribute("type","radio"),Ye.setAttribute("checked","checked"),Ye.setAttribute("name","t"),Wt.appendChild(Ye),k.checkClone=Wt.cloneNode(!0).cloneNode(!0).lastChild.checked,Wt.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!Wt.cloneNode(!0).lastChild.defaultValue,Wt.innerHTML="<option></option>",k.option=!!Wt.lastChild;var kt={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function xt(r,o){var h;return h=typeof r.getElementsByTagName<"u"?r.getElementsByTagName(o||"*"):typeof r.querySelectorAll<"u"?r.querySelectorAll(o||"*"):[],o===void 0||o&&b(r,o)?t.merge([r],h):h}function pn(r,o){for(var h=0,p=r.length;h<p;h++)_e.set(r[h],"globalEval",!o||_e.get(o[h],"globalEval"))}kt.tbody=kt.tfoot=kt.colgroup=kt.caption=kt.thead,kt.th=kt.td,k.option||(kt.optgroup=kt.option=[1,"<select multiple='multiple'>","</select>"]);var j=/<|&#?\w+;/;function P(r,o,h,p,A){for(var M,B,K,X,re,ce,pe=o.createDocumentFragment(),oe=[],ue=0,Te=r.length;ue<Te;ue++)if((M=r[ue])||M===0)if(s(M)==="object")t.merge(oe,M.nodeType?[M]:M);else if(j.test(M)){for(B=B||pe.appendChild(o.createElement("div")),K=(hn.exec(M)||["",""])[1].toLowerCase(),X=kt[K]||kt._default,B.innerHTML=X[1]+t.htmlPrefilter(M)+X[2],ce=X[0];ce--;)B=B.lastChild;t.merge(oe,B.childNodes),(B=pe.firstChild).textContent=""}else oe.push(o.createTextNode(M));for(pe.textContent="",ue=0;M=oe[ue++];)if(p&&-1<t.inArray(M,p))A&&A.push(M);else if(re=yt(M),B=xt(pe.appendChild(M),"script"),re&&pn(B),h)for(ce=0;M=B[ce++];)fn.test(M.type||"")&&h.push(M);return pe}var H=/^key/,Z=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ae=/^([^.]*)(?:\.(.+)|)/;function de(){return!0}function je(){return!1}function De(r,o){return r===function(){try{return L.activeElement}catch{}}()==(o==="focus")}function Ie(r,o,h,p,A,M){var B,K;if(typeof o=="object"){for(K in typeof h!="string"&&(p=p||h,h=void 0),o)Ie(r,K,h,p,o[K],M);return r}if(p==null&&A==null?(A=h,p=h=void 0):A==null&&(typeof h=="string"?(A=p,p=void 0):(A=p,p=h,h=void 0)),A===!1)A=je;else if(!A)return r;return M===1&&(B=A,(A=function(X){return t().off(X),B.apply(this,arguments)}).guid=B.guid||(B.guid=t.guid++)),r.each(function(){t.event.add(this,o,A,p,h)})}function Le(r,o,h){h?(_e.set(r,o,!1),t.event.add(r,o,{namespace:!1,handler:function(p){var A,M,B=_e.get(this,o);if(1&p.isTrigger&&this[o]){if(B.length)(t.event.special[o]||{}).delegateType&&p.stopPropagation();else if(B=g.call(arguments),_e.set(this,o,B),A=h(this,o),this[o](),B!==(M=_e.get(this,o))||A?_e.set(this,o,!1):M={},B!==M)return p.stopImmediatePropagation(),p.preventDefault(),M.value}else B.length&&(_e.set(this,o,{value:t.event.trigger(t.extend(B[0],t.Event.prototype),B.slice(1),this)}),p.stopImmediatePropagation())}})):_e.get(r,o)===void 0&&t.event.add(r,o,de)}t.event={global:{},add:function(r,o,h,p,A){var M,B,K,X,re,ce,pe,oe,ue,Te,Re,Ne=_e.get(r);if(Me(r))for(h.handler&&(h=(M=h).handler,A=M.selector),A&&t.find.matchesSelector(wt,A),h.guid||(h.guid=t.guid++),(X=Ne.events)||(X=Ne.events=Object.create(null)),(B=Ne.handle)||(B=Ne.handle=function(at){return typeof t<"u"&&t.event.triggered!==at.type?t.event.dispatch.apply(r,arguments):void 0}),re=(o=(o||"").match(Ee)||[""]).length;re--;)ue=Re=(K=ae.exec(o[re])||[])[1],Te=(K[2]||"").split(".").sort(),ue&&(pe=t.event.special[ue]||{},ue=(A?pe.delegateType:pe.bindType)||ue,pe=t.event.special[ue]||{},ce=t.extend({type:ue,origType:Re,data:p,handler:h,guid:h.guid,selector:A,needsContext:A&&t.expr.match.needsContext.test(A),namespace:Te.join(".")},M),(oe=X[ue])||((oe=X[ue]=[]).delegateCount=0,pe.setup&&pe.setup.call(r,p,Te,B)!==!1||r.addEventListener&&r.addEventListener(ue,B)),pe.add&&(pe.add.call(r,ce),ce.handler.guid||(ce.handler.guid=h.guid)),A?oe.splice(oe.delegateCount++,0,ce):oe.push(ce),t.event.global[ue]=!0)},remove:function(r,o,h,p,A){var M,B,K,X,re,ce,pe,oe,ue,Te,Re,Ne=_e.hasData(r)&&_e.get(r);if(Ne&&(X=Ne.events)){for(re=(o=(o||"").match(Ee)||[""]).length;re--;)if(ue=Re=(K=ae.exec(o[re])||[])[1],Te=(K[2]||"").split(".").sort(),ue){for(pe=t.event.special[ue]||{},oe=X[ue=(p?pe.delegateType:pe.bindType)||ue]||[],K=K[2]&&new RegExp("(^|\\.)"+Te.join("\\.(?:.*\\.|)")+"(\\.|$)"),B=M=oe.length;M--;)ce=oe[M],!A&&Re!==ce.origType||h&&h.guid!==ce.guid||K&&!K.test(ce.namespace)||p&&p!==ce.selector&&(p!=="**"||!ce.selector)||(oe.splice(M,1),ce.selector&&oe.delegateCount--,pe.remove&&pe.remove.call(r,ce));B&&!oe.length&&(pe.teardown&&pe.teardown.call(r,Te,Ne.handle)!==!1||t.removeEvent(r,ue,Ne.handle),delete X[ue])}else for(ue in X)t.event.remove(r,ue+o[re],h,p,!0);t.isEmptyObject(X)&&_e.remove(r,"handle events")}},dispatch:function(r){var o,h,p,A,M,B,K=new Array(arguments.length),X=t.event.fix(r),re=(_e.get(this,"events")||Object.create(null))[X.type]||[],ce=t.event.special[X.type]||{};for(K[0]=X,o=1;o<arguments.length;o++)K[o]=arguments[o];if(X.delegateTarget=this,!ce.preDispatch||ce.preDispatch.call(this,X)!==!1){for(B=t.event.handlers.call(this,X,re),o=0;(A=B[o++])&&!X.isPropagationStopped();)for(X.currentTarget=A.elem,h=0;(M=A.handlers[h++])&&!X.isImmediatePropagationStopped();)X.rnamespace&&M.namespace!==!1&&!X.rnamespace.test(M.namespace)||(X.handleObj=M,X.data=M.data,(p=((t.event.special[M.origType]||{}).handle||M.handler).apply(A.elem,K))!==void 0&&(X.result=p)===!1&&(X.preventDefault(),X.stopPropagation()));return ce.postDispatch&&ce.postDispatch.call(this,X),X.result}},handlers:function(r,o){var h,p,A,M,B,K=[],X=o.delegateCount,re=r.target;if(X&&re.nodeType&&!(r.type==="click"&&1<=r.button)){for(;re!==this;re=re.parentNode||this)if(re.nodeType===1&&(r.type!=="click"||re.disabled!==!0)){for(M=[],B={},h=0;h<X;h++)B[A=(p=o[h]).selector+" "]===void 0&&(B[A]=p.needsContext?-1<t(A,this).index(re):t.find(A,this,null,[re]).length),B[A]&&M.push(p);M.length&&K.push({elem:re,handlers:M})}}return re=this,X<o.length&&K.push({elem:re,handlers:o.slice(X)}),K},addProp:function(r,o){Object.defineProperty(t.Event.prototype,r,{enumerable:!0,configurable:!0,get:O(o)?function(){if(this.originalEvent)return o(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[r]},set:function(h){Object.defineProperty(this,r,{enumerable:!0,configurable:!0,writable:!0,value:h})}})},fix:function(r){return r[t.expando]?r:new t.Event(r)},special:{load:{noBubble:!0},click:{setup:function(r){var o=this||r;return Zt.test(o.type)&&o.click&&b(o,"input")&&Le(o,"click",de),!1},trigger:function(r){var o=this||r;return Zt.test(o.type)&&o.click&&b(o,"input")&&Le(o,"click"),!0},_default:function(r){var o=r.target;return Zt.test(o.type)&&o.click&&b(o,"input")&&_e.get(o,"click")||b(o,"a")}},beforeunload:{postDispatch:function(r){r.result!==void 0&&r.originalEvent&&(r.originalEvent.returnValue=r.result)}}}},t.removeEvent=function(r,o,h){r.removeEventListener&&r.removeEventListener(o,h)},t.Event=function(r,o){if(!(this instanceof t.Event))return new t.Event(r,o);r&&r.type?(this.originalEvent=r,this.type=r.type,this.isDefaultPrevented=r.defaultPrevented||r.defaultPrevented===void 0&&r.returnValue===!1?de:je,this.target=r.target&&r.target.nodeType===3?r.target.parentNode:r.target,this.currentTarget=r.currentTarget,this.relatedTarget=r.relatedTarget):this.type=r,o&&t.extend(this,o),this.timeStamp=r&&r.timeStamp||Date.now(),this[t.expando]=!0},t.Event.prototype={constructor:t.Event,isDefaultPrevented:je,isPropagationStopped:je,isImmediatePropagationStopped:je,isSimulated:!1,preventDefault:function(){var r=this.originalEvent;this.isDefaultPrevented=de,r&&!this.isSimulated&&r.preventDefault()},stopPropagation:function(){var r=this.originalEvent;this.isPropagationStopped=de,r&&!this.isSimulated&&r.stopPropagation()},stopImmediatePropagation:function(){var r=this.originalEvent;this.isImmediatePropagationStopped=de,r&&!this.isSimulated&&r.stopImmediatePropagation(),this.stopPropagation()}},t.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(r){var o=r.button;return r.which==null&&H.test(r.type)?r.charCode!=null?r.charCode:r.keyCode:!r.which&&o!==void 0&&Z.test(r.type)?1&o?1:2&o?3:4&o?2:0:r.which}},t.event.addProp),t.each({focus:"focusin",blur:"focusout"},function(r,o){t.event.special[r]={setup:function(){return Le(this,r,De),!1},trigger:function(){return Le(this,r),!0},delegateType:o}}),t.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(r,o){t.event.special[r]={delegateType:o,bindType:o,handle:function(h){var p,A=h.relatedTarget,M=h.handleObj;return A&&(A===this||t.contains(this,A))||(h.type=M.origType,p=M.handler.apply(this,arguments),h.type=o),p}}}),t.fn.extend({on:function(r,o,h,p){return Ie(this,r,o,h,p)},one:function(r,o,h,p){return Ie(this,r,o,h,p,1)},off:function(r,o,h){var p,A;if(r&&r.preventDefault&&r.handleObj)return p=r.handleObj,t(r.delegateTarget).off(p.namespace?p.origType+"."+p.namespace:p.origType,p.selector,p.handler),this;if(typeof r=="object"){for(A in r)this.off(A,o,r[A]);return this}return o!==!1&&typeof o!="function"||(h=o,o=void 0),h===!1&&(h=je),this.each(function(){t.event.remove(this,r,h,o)})}});var Xe=/<script|<style|<link/i,qe=/checked\s*(?:[^=]|=\s*.checked.)/i,ke=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ze(r,o){return b(r,"table")&&b(o.nodeType!==11?o:o.firstChild,"tr")&&t(r).children("tbody")[0]||r}function Gt(r){return r.type=(r.getAttribute("type")!==null)+"/"+r.type,r}function ot(r){return(r.type||"").slice(0,5)==="true/"?r.type=r.type.slice(5):r.removeAttribute("type"),r}function Et(r,o){var h,p,A,M,B,K;if(o.nodeType===1){if(_e.hasData(r)&&(K=_e.get(r).events))for(A in _e.remove(o,"handle events"),K)for(h=0,p=K[A].length;h<p;h++)t.event.add(o,A,K[A][h]);me.hasData(r)&&(M=me.access(r),B=t.extend({},M),me.set(o,B))}}function bt(r,o,h,p){o=d(o);var A,M,B,K,X,re,ce=0,pe=r.length,oe=pe-1,ue=o[0],Te=O(ue);if(Te||1<pe&&typeof ue=="string"&&!k.checkClone&&qe.test(ue))return r.each(function(Re){var Ne=r.eq(Re);Te&&(o[0]=ue.call(this,Re,Ne.html())),bt(Ne,o,h,p)});if(pe&&(M=(A=P(o,r[0].ownerDocument,!1,r,p)).firstChild,A.childNodes.length===1&&(A=M),M||p)){for(K=(B=t.map(xt(A,"script"),Gt)).length;ce<pe;ce++)X=A,ce!==oe&&(X=t.clone(X,!0,!0),K&&t.merge(B,xt(X,"script"))),h.call(r[ce],X,ce);if(K)for(re=B[B.length-1].ownerDocument,t.map(B,ot),ce=0;ce<K;ce++)X=B[ce],fn.test(X.type||"")&&!_e.access(X,"globalEval")&&t.contains(re,X)&&(X.src&&(X.type||"").toLowerCase()!=="module"?t._evalUrl&&!X.noModule&&t._evalUrl(X.src,{nonce:X.nonce||X.getAttribute("nonce")},re):e(X.textContent.replace(ke,""),X,re))}return r}function wn(r,o,h){for(var p,A=o?t.filter(o,r):r,M=0;(p=A[M])!=null;M++)h||p.nodeType!==1||t.cleanData(xt(p)),p.parentNode&&(h&&yt(p)&&pn(xt(p,"script")),p.parentNode.removeChild(p));return r}t.extend({htmlPrefilter:function(r){return r},clone:function(r,o,h){var p,A,M,B,K,X,re,ce=r.cloneNode(!0),pe=yt(r);if(!(k.noCloneChecked||r.nodeType!==1&&r.nodeType!==11||t.isXMLDoc(r)))for(B=xt(ce),p=0,A=(M=xt(r)).length;p<A;p++)K=M[p],X=B[p],(re=X.nodeName.toLowerCase())==="input"&&Zt.test(K.type)?X.checked=K.checked:re!=="input"&&re!=="textarea"||(X.defaultValue=K.defaultValue);if(o)if(h)for(M=M||xt(r),B=B||xt(ce),p=0,A=M.length;p<A;p++)Et(M[p],B[p]);else Et(r,ce);return 0<(B=xt(ce,"script")).length&&pn(B,!pe&&xt(r,"script")),ce},cleanData:function(r){for(var o,h,p,A=t.event.special,M=0;(h=r[M])!==void 0;M++)if(Me(h)){if(o=h[_e.expando]){if(o.events)for(p in o.events)A[p]?t.event.remove(h,p):t.removeEvent(h,p,o.handle);h[_e.expando]=void 0}h[me.expando]&&(h[me.expando]=void 0)}}}),t.fn.extend({detach:function(r){return wn(this,r,!0)},remove:function(r){return wn(this,r)},text:function(r){return le(this,function(o){return o===void 0?t.text(this):this.empty().each(function(){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||(this.textContent=o)})},null,r,arguments.length)},append:function(){return bt(this,arguments,function(r){this.nodeType!==1&&this.nodeType!==11&&this.nodeType!==9||Ze(this,r).appendChild(r)})},prepend:function(){return bt(this,arguments,function(r){if(this.nodeType===1||this.nodeType===11||this.nodeType===9){var o=Ze(this,r);o.insertBefore(r,o.firstChild)}})},before:function(){return bt(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this)})},after:function(){return bt(this,arguments,function(r){this.parentNode&&this.parentNode.insertBefore(r,this.nextSibling)})},empty:function(){for(var r,o=0;(r=this[o])!=null;o++)r.nodeType===1&&(t.cleanData(xt(r,!1)),r.textContent="");return this},clone:function(r,o){return r=r!=null&&r,o=o??r,this.map(function(){return t.clone(this,r,o)})},html:function(r){return le(this,function(o){var h=this[0]||{},p=0,A=this.length;if(o===void 0&&h.nodeType===1)return h.innerHTML;if(typeof o=="string"&&!Xe.test(o)&&!kt[(hn.exec(o)||["",""])[1].toLowerCase()]){o=t.htmlPrefilter(o);try{for(;p<A;p++)(h=this[p]||{}).nodeType===1&&(t.cleanData(xt(h,!1)),h.innerHTML=o);h=0}catch{}}h&&this.empty().append(o)},null,r,arguments.length)},replaceWith:function(){var r=[];return bt(this,arguments,function(o){var h=this.parentNode;t.inArray(this,r)<0&&(t.cleanData(xt(this)),h&&h.replaceChild(o,this))},r)}}),t.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(r,o){t.fn[r]=function(h){for(var p,A=[],M=t(h),B=M.length-1,K=0;K<=B;K++)p=K===B?this:this.clone(!0),t(M[K])[o](p),m.apply(A,p.get());return this.pushStack(A)}});var gn=new RegExp("^("+ye+")(?!px)[a-z%]+$","i"),qt=function(r){var o=r.ownerDocument.defaultView;return o&&o.opener||(o=v),o.getComputedStyle(r)},en=function(r,o,h){var p,A,M={};for(A in o)M[A]=r.style[A],r.style[A]=o[A];for(A in p=h.call(r),o)r.style[A]=M[A];return p},Pr=new RegExp(_t.join("|"),"i");function mn(r,o,h){var p,A,M,B,K=r.style;return(h=h||qt(r))&&((B=h.getPropertyValue(o)||h[o])!==""||yt(r)||(B=t.style(r,o)),!k.pixelBoxStyles()&&gn.test(B)&&Pr.test(o)&&(p=K.width,A=K.minWidth,M=K.maxWidth,K.minWidth=K.maxWidth=K.width=B,B=h.width,K.width=p,K.minWidth=A,K.maxWidth=M)),B!==void 0?B+"":B}function Qn(r,o){return{get:function(){if(!r())return(this.get=o).apply(this,arguments);delete this.get}}}(function(){function r(){if(re){X.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",re.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",wt.appendChild(X).appendChild(re);var ce=v.getComputedStyle(re);h=ce.top!=="1%",K=o(ce.marginLeft)===12,re.style.right="60%",M=o(ce.right)===36,p=o(ce.width)===36,re.style.position="absolute",A=o(re.offsetWidth/3)===12,wt.removeChild(X),re=null}}function o(ce){return Math.round(parseFloat(ce))}var h,p,A,M,B,K,X=L.createElement("div"),re=L.createElement("div");re.style&&(re.style.backgroundClip="content-box",re.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle=re.style.backgroundClip==="content-box",t.extend(k,{boxSizingReliable:function(){return r(),p},pixelBoxStyles:function(){return r(),M},pixelPosition:function(){return r(),h},reliableMarginLeft:function(){return r(),K},scrollboxSize:function(){return r(),A},reliableTrDimensions:function(){var ce,pe,oe,ue;return B==null&&(ce=L.createElement("table"),pe=L.createElement("tr"),oe=L.createElement("div"),ce.style.cssText="position:absolute;left:-11111px",pe.style.height="1px",oe.style.height="9px",wt.appendChild(ce).appendChild(pe).appendChild(oe),ue=v.getComputedStyle(pe),B=3<parseInt(ue.height),wt.removeChild(ce)),B}}))})();var Yn=["Webkit","Moz","ms"],Zn=L.createElement("div").style,er={};function Ln(r){var o=t.cssProps[r]||er[r];return o||(r in Zn?r:er[r]=function(h){for(var p=h[0].toUpperCase()+h.slice(1),A=Yn.length;A--;)if((h=Yn[A]+p)in Zn)return h}(r)||r)}var Or=/^(none|table(?!-c[ea]).+)/,tr=/^--/,Nr={position:"absolute",visibility:"hidden",display:"block"},nr={letterSpacing:"0",fontWeight:"400"};function rr(r,o,h){var p=mt.exec(o);return p?Math.max(0,p[2]-(h||0))+(p[3]||"px"):o}function Bn(r,o,h,p,A,M){var B=o==="width"?1:0,K=0,X=0;if(h===(p?"border":"content"))return 0;for(;B<4;B+=2)h==="margin"&&(X+=t.css(r,h+_t[B],!0,A)),p?(h==="content"&&(X-=t.css(r,"padding"+_t[B],!0,A)),h!=="margin"&&(X-=t.css(r,"border"+_t[B]+"Width",!0,A))):(X+=t.css(r,"padding"+_t[B],!0,A),h!=="padding"?X+=t.css(r,"border"+_t[B]+"Width",!0,A):K+=t.css(r,"border"+_t[B]+"Width",!0,A));return!p&&0<=M&&(X+=Math.max(0,Math.ceil(r["offset"+o[0].toUpperCase()+o.slice(1)]-M-X-K-.5))||0),X}function ir(r,o,h){var p=qt(r),A=(!k.boxSizingReliable()||h)&&t.css(r,"boxSizing",!1,p)==="border-box",M=A,B=mn(r,o,p),K="offset"+o[0].toUpperCase()+o.slice(1);if(gn.test(B)){if(!h)return B;B="auto"}return(!k.boxSizingReliable()&&A||!k.reliableTrDimensions()&&b(r,"tr")||B==="auto"||!parseFloat(B)&&t.css(r,"display",!1,p)==="inline")&&r.getClientRects().length&&(A=t.css(r,"boxSizing",!1,p)==="border-box",(M=K in r)&&(B=r[K])),(B=parseFloat(B)||0)+Bn(r,o,h||(A?"border":"content"),M,p,B)+"px"}function It(r,o,h,p,A){return new It.prototype.init(r,o,h,p,A)}t.extend({cssHooks:{opacity:{get:function(r,o){if(o){var h=mn(r,"opacity");return h===""?"1":h}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(r,o,h,p){if(r&&r.nodeType!==3&&r.nodeType!==8&&r.style){var A,M,B,K=Y(o),X=tr.test(o),re=r.style;if(X||(o=Ln(K)),B=t.cssHooks[o]||t.cssHooks[K],h===void 0)return B&&"get"in B&&(A=B.get(r,!1,p))!==void 0?A:re[o];(M=typeof h)=="string"&&(A=mt.exec(h))&&A[1]&&(h=un(r,o,A),M="number"),h!=null&&h==h&&(M!=="number"||X||(h+=A&&A[3]||(t.cssNumber[K]?"":"px")),k.clearCloneStyle||h!==""||o.indexOf("background")!==0||(re[o]="inherit"),B&&"set"in B&&(h=B.set(r,h,p))===void 0||(X?re.setProperty(o,h):re[o]=h))}},css:function(r,o,h,p){var A,M,B,K=Y(o);return tr.test(o)||(o=Ln(K)),(B=t.cssHooks[o]||t.cssHooks[K])&&"get"in B&&(A=B.get(r,!0,h)),A===void 0&&(A=mn(r,o,p)),A==="normal"&&o in nr&&(A=nr[o]),h===""||h?(M=parseFloat(A),h===!0||isFinite(M)?M||0:A):A}}),t.each(["height","width"],function(r,o){t.cssHooks[o]={get:function(h,p,A){if(p)return!Or.test(t.css(h,"display"))||h.getClientRects().length&&h.getBoundingClientRect().width?ir(h,o,A):en(h,Nr,function(){return ir(h,o,A)})},set:function(h,p,A){var M,B=qt(h),K=!k.scrollboxSize()&&B.position==="absolute",X=(K||A)&&t.css(h,"boxSizing",!1,B)==="border-box",re=A?Bn(h,o,A,X,B):0;return X&&K&&(re-=Math.ceil(h["offset"+o[0].toUpperCase()+o.slice(1)]-parseFloat(B[o])-Bn(h,o,"border",!1,B)-.5)),re&&(M=mt.exec(p))&&(M[3]||"px")!=="px"&&(h.style[o]=p,p=t.css(h,o)),rr(0,p,re)}}}),t.cssHooks.marginLeft=Qn(k.reliableMarginLeft,function(r,o){if(o)return(parseFloat(mn(r,"marginLeft"))||r.getBoundingClientRect().left-en(r,{marginLeft:0},function(){return r.getBoundingClientRect().left}))+"px"}),t.each({margin:"",padding:"",border:"Width"},function(r,o){t.cssHooks[r+o]={expand:function(h){for(var p=0,A={},M=typeof h=="string"?h.split(" "):[h];p<4;p++)A[r+_t[p]+o]=M[p]||M[p-2]||M[0];return A}},r!=="margin"&&(t.cssHooks[r+o].set=rr)}),t.fn.extend({css:function(r,o){return le(this,function(h,p,A){var M,B,K={},X=0;if(Array.isArray(p)){for(M=qt(h),B=p.length;X<B;X++)K[p[X]]=t.css(h,p[X],!1,M);return K}return A!==void 0?t.style(h,p,A):t.css(h,p)},r,o,1<arguments.length)}}),((t.Tween=It).prototype={constructor:It,init:function(r,o,h,p,A,M){this.elem=r,this.prop=h,this.easing=A||t.easing._default,this.options=o,this.start=this.now=this.cur(),this.end=p,this.unit=M||(t.cssNumber[h]?"":"px")},cur:function(){var r=It.propHooks[this.prop];return r&&r.get?r.get(this):It.propHooks._default.get(this)},run:function(r){var o,h=It.propHooks[this.prop];return this.options.duration?this.pos=o=t.easing[this.easing](r,this.options.duration*r,0,1,this.options.duration):this.pos=o=r,this.now=(this.end-this.start)*o+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),h&&h.set?h.set(this):It.propHooks._default.set(this),this}}).init.prototype=It.prototype,(It.propHooks={_default:{get:function(r){var o;return r.elem.nodeType!==1||r.elem[r.prop]!=null&&r.elem.style[r.prop]==null?r.elem[r.prop]:(o=t.css(r.elem,r.prop,""))&&o!=="auto"?o:0},set:function(r){t.fx.step[r.prop]?t.fx.step[r.prop](r):r.elem.nodeType!==1||!t.cssHooks[r.prop]&&r.elem.style[Ln(r.prop)]==null?r.elem[r.prop]=r.now:t.style(r.elem,r.prop,r.now+r.unit)}}}).scrollTop=It.propHooks.scrollLeft={set:function(r){r.elem.nodeType&&r.elem.parentNode&&(r.elem[r.prop]=r.now)}},t.easing={linear:function(r){return r},swing:function(r){return .5-Math.cos(r*Math.PI)/2},_default:"swing"},t.fx=It.prototype.init,t.fx.step={};var on,kn,an,sr,Mr=/^(?:toggle|show|hide)$/,Lr=/queueHooks$/;function Rn(){kn&&(L.hidden===!1&&v.requestAnimationFrame?v.requestAnimationFrame(Rn):v.setTimeout(Rn,t.fx.interval),t.fx.tick())}function or(){return v.setTimeout(function(){on=void 0}),on=Date.now()}function bn(r,o){var h,p=0,A={height:r};for(o=o?1:0;p<4;p+=2-o)A["margin"+(h=_t[p])]=A["padding"+h]=r;return o&&(A.opacity=A.width=r),A}function ar(r,o,h){for(var p,A=(Ft.tweeners[o]||[]).concat(Ft.tweeners["*"]),M=0,B=A.length;M<B;M++)if(p=A[M].call(h,o,r))return p}function Ft(r,o,h){var p,A,M=0,B=Ft.prefilters.length,K=t.Deferred().always(function(){delete X.elem}),X=function(){if(A)return!1;for(var pe=on||or(),oe=Math.max(0,re.startTime+re.duration-pe),ue=1-(oe/re.duration||0),Te=0,Re=re.tweens.length;Te<Re;Te++)re.tweens[Te].run(ue);return K.notifyWith(r,[re,ue,oe]),ue<1&&Re?oe:(Re||K.notifyWith(r,[re,1,0]),K.resolveWith(r,[re]),!1)},re=K.promise({elem:r,props:t.extend({},o),opts:t.extend(!0,{specialEasing:{},easing:t.easing._default},h),originalProperties:o,originalOptions:h,startTime:on||or(),duration:h.duration,tweens:[],createTween:function(pe,oe){var ue=t.Tween(r,re.opts,pe,oe,re.opts.specialEasing[pe]||re.opts.easing);return re.tweens.push(ue),ue},stop:function(pe){var oe=0,ue=pe?re.tweens.length:0;if(A)return this;for(A=!0;oe<ue;oe++)re.tweens[oe].run(1);return pe?(K.notifyWith(r,[re,1,0]),K.resolveWith(r,[re,pe])):K.rejectWith(r,[re,pe]),this}}),ce=re.props;for(!function(pe,oe){var ue,Te,Re,Ne,at;for(ue in pe)if(Re=oe[Te=Y(ue)],Ne=pe[ue],Array.isArray(Ne)&&(Re=Ne[1],Ne=pe[ue]=Ne[0]),ue!==Te&&(pe[Te]=Ne,delete pe[ue]),(at=t.cssHooks[Te])&&"expand"in at)for(ue in Ne=at.expand(Ne),delete pe[Te],Ne)ue in pe||(pe[ue]=Ne[ue],oe[ue]=Re);else oe[Te]=Re}(ce,re.opts.specialEasing);M<B;M++)if(p=Ft.prefilters[M].call(re,r,ce,re.opts))return O(p.stop)&&(t._queueHooks(re.elem,re.opts.queue).stop=p.stop.bind(p)),p;return t.map(ce,ar,re),O(re.opts.start)&&re.opts.start.call(r,re),re.progress(re.opts.progress).done(re.opts.done,re.opts.complete).fail(re.opts.fail).always(re.opts.always),t.fx.timer(t.extend(X,{elem:r,anim:re,queue:re.opts.queue})),re}t.Animation=t.extend(Ft,{tweeners:{"*":[function(r,o){var h=this.createTween(r,o);return un(h.elem,r,mt.exec(o),h),h}]},tweener:function(r,o){O(r)?(o=r,r=["*"]):r=r.match(Ee);for(var h,p=0,A=r.length;p<A;p++)h=r[p],Ft.tweeners[h]=Ft.tweeners[h]||[],Ft.tweeners[h].unshift(o)},prefilters:[function(r,o,h){var p,A,M,B,K,X,re,ce,pe="width"in o||"height"in o,oe=this,ue={},Te=r.style,Re=r.nodeType&&Dt(r),Ne=_e.get(r,"fxshow");for(p in h.queue||((B=t._queueHooks(r,"fx")).unqueued==null&&(B.unqueued=0,K=B.empty.fire,B.empty.fire=function(){B.unqueued||K()}),B.unqueued++,oe.always(function(){oe.always(function(){B.unqueued--,t.queue(r,"fx").length||B.empty.fire()})})),o)if(A=o[p],Mr.test(A)){if(delete o[p],M=M||A==="toggle",A===(Re?"hide":"show")){if(A!=="show"||!Ne||Ne[p]===void 0)continue;Re=!0}ue[p]=Ne&&Ne[p]||t.style(r,p)}if((X=!t.isEmptyObject(o))||!t.isEmptyObject(ue))for(p in pe&&r.nodeType===1&&(h.overflow=[Te.overflow,Te.overflowX,Te.overflowY],(re=Ne&&Ne.display)==null&&(re=_e.get(r,"display")),(ce=t.css(r,"display"))==="none"&&(re?ce=re:(Ut([r],!0),re=r.style.display||re,ce=t.css(r,"display"),Ut([r]))),(ce==="inline"||ce==="inline-block"&&re!=null)&&t.css(r,"float")==="none"&&(X||(oe.done(function(){Te.display=re}),re==null&&(ce=Te.display,re=ce==="none"?"":ce)),Te.display="inline-block")),h.overflow&&(Te.overflow="hidden",oe.always(function(){Te.overflow=h.overflow[0],Te.overflowX=h.overflow[1],Te.overflowY=h.overflow[2]})),X=!1,ue)X||(Ne?"hidden"in Ne&&(Re=Ne.hidden):Ne=_e.access(r,"fxshow",{display:re}),M&&(Ne.hidden=!Re),Re&&Ut([r],!0),oe.done(function(){for(p in Re||Ut([r]),_e.remove(r,"fxshow"),ue)t.style(r,p,ue[p])})),X=ar(Re?Ne[p]:0,p,oe),p in Ne||(Ne[p]=X.start,Re&&(X.end=X.start,X.start=0))}],prefilter:function(r,o){o?Ft.prefilters.unshift(r):Ft.prefilters.push(r)}}),t.speed=function(r,o,h){var p=r&&typeof r=="object"?t.extend({},r):{complete:h||!h&&o||O(r)&&r,duration:r,easing:h&&o||o&&!O(o)&&o};return t.fx.off?p.duration=0:typeof p.duration!="number"&&(p.duration in t.fx.speeds?p.duration=t.fx.speeds[p.duration]:p.duration=t.fx.speeds._default),p.queue!=null&&p.queue!==!0||(p.queue="fx"),p.old=p.complete,p.complete=function(){O(p.old)&&p.old.call(this),p.queue&&t.dequeue(this,p.queue)},p},t.fn.extend({fadeTo:function(r,o,h,p){return this.filter(Dt).css("opacity",0).show().end().animate({opacity:o},r,h,p)},animate:function(r,o,h,p){var A=t.isEmptyObject(r),M=t.speed(o,h,p),B=function(){var K=Ft(this,t.extend({},r),M);(A||_e.get(this,"finish"))&&K.stop(!0)};return B.finish=B,A||M.queue===!1?this.each(B):this.queue(M.queue,B)},stop:function(r,o,h){var p=function(A){var M=A.stop;delete A.stop,M(h)};return typeof r!="string"&&(h=o,o=r,r=void 0),o&&this.queue(r||"fx",[]),this.each(function(){var A=!0,M=r!=null&&r+"queueHooks",B=t.timers,K=_e.get(this);if(M)K[M]&&K[M].stop&&p(K[M]);else for(M in K)K[M]&&K[M].stop&&Lr.test(M)&&p(K[M]);for(M=B.length;M--;)B[M].elem!==this||r!=null&&B[M].queue!==r||(B[M].anim.stop(h),A=!1,B.splice(M,1));!A&&h||t.dequeue(this,r)})},finish:function(r){return r!==!1&&(r=r||"fx"),this.each(function(){var o,h=_e.get(this),p=h[r+"queue"],A=h[r+"queueHooks"],M=t.timers,B=p?p.length:0;for(h.finish=!0,t.queue(this,r,[]),A&&A.stop&&A.stop.call(this,!0),o=M.length;o--;)M[o].elem===this&&M[o].queue===r&&(M[o].anim.stop(!0),M.splice(o,1));for(o=0;o<B;o++)p[o]&&p[o].finish&&p[o].finish.call(this);delete h.finish})}}),t.each(["toggle","show","hide"],function(r,o){var h=t.fn[o];t.fn[o]=function(p,A,M){return p==null||typeof p=="boolean"?h.apply(this,arguments):this.animate(bn(o,!0),p,A,M)}}),t.each({slideDown:bn("show"),slideUp:bn("hide"),slideToggle:bn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(r,o){t.fn[r]=function(h,p,A){return this.animate(o,h,p,A)}}),t.timers=[],t.fx.tick=function(){var r,o=0,h=t.timers;for(on=Date.now();o<h.length;o++)(r=h[o])()||h[o]!==r||h.splice(o--,1);h.length||t.fx.stop(),on=void 0},t.fx.timer=function(r){t.timers.push(r),t.fx.start()},t.fx.interval=13,t.fx.start=function(){kn||(kn=!0,Rn())},t.fx.stop=function(){kn=null},t.fx.speeds={slow:600,fast:200,_default:400},t.fn.delay=function(r,o){return r=t.fx&&t.fx.speeds[r]||r,o=o||"fx",this.queue(o,function(h,p){var A=v.setTimeout(h,r);p.stop=function(){v.clearTimeout(A)}})},an=L.createElement("input"),sr=L.createElement("select").appendChild(L.createElement("option")),an.type="checkbox",k.checkOn=an.value!=="",k.optSelected=sr.selected,(an=L.createElement("input")).value="t",an.type="radio",k.radioValue=an.value==="t";var lr,vn=t.expr.attrHandle;t.fn.extend({attr:function(r,o){return le(this,t.attr,r,o,1<arguments.length)},removeAttr:function(r){return this.each(function(){t.removeAttr(this,r)})}}),t.extend({attr:function(r,o,h){var p,A,M=r.nodeType;if(M!==3&&M!==8&&M!==2)return typeof r.getAttribute>"u"?t.prop(r,o,h):(M===1&&t.isXMLDoc(r)||(A=t.attrHooks[o.toLowerCase()]||(t.expr.match.bool.test(o)?lr:void 0)),h!==void 0?h===null?void t.removeAttr(r,o):A&&"set"in A&&(p=A.set(r,h,o))!==void 0?p:(r.setAttribute(o,h+""),h):A&&"get"in A&&(p=A.get(r,o))!==null?p:(p=t.find.attr(r,o))==null?void 0:p)},attrHooks:{type:{set:function(r,o){if(!k.radioValue&&o==="radio"&&b(r,"input")){var h=r.value;return r.setAttribute("type",o),h&&(r.value=h),o}}}},removeAttr:function(r,o){var h,p=0,A=o&&o.match(Ee);if(A&&r.nodeType===1)for(;h=A[p++];)r.removeAttribute(h)}}),lr={set:function(r,o,h){return o===!1?t.removeAttr(r,h):r.setAttribute(h,h),h}},t.each(t.expr.match.bool.source.match(/\w+/g),function(r,o){var h=vn[o]||t.find.attr;vn[o]=function(p,A,M){var B,K,X=A.toLowerCase();return M||(K=vn[X],vn[X]=B,B=h(p,A,M)!=null?X:null,vn[X]=K),B}});var Br=/^(?:input|select|textarea|button)$/i,Rr=/^(?:a|area)$/i;function tn(r){return(r.match(Ee)||[]).join(" ")}function nn(r){return r.getAttribute&&r.getAttribute("class")||""}function Dn(r){return Array.isArray(r)?r:typeof r=="string"&&r.match(Ee)||[]}t.fn.extend({prop:function(r,o){return le(this,t.prop,r,o,1<arguments.length)},removeProp:function(r){return this.each(function(){delete this[t.propFix[r]||r]})}}),t.extend({prop:function(r,o,h){var p,A,M=r.nodeType;if(M!==3&&M!==8&&M!==2)return M===1&&t.isXMLDoc(r)||(o=t.propFix[o]||o,A=t.propHooks[o]),h!==void 0?A&&"set"in A&&(p=A.set(r,h,o))!==void 0?p:r[o]=h:A&&"get"in A&&(p=A.get(r,o))!==null?p:r[o]},propHooks:{tabIndex:{get:function(r){var o=t.find.attr(r,"tabindex");return o?parseInt(o,10):Br.test(r.nodeName)||Rr.test(r.nodeName)&&r.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),k.optSelected||(t.propHooks.selected={get:function(r){var o=r.parentNode;return o&&o.parentNode&&o.parentNode.selectedIndex,null},set:function(r){var o=r.parentNode;o&&(o.selectedIndex,o.parentNode&&o.parentNode.selectedIndex)}}),t.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){t.propFix[this.toLowerCase()]=this}),t.fn.extend({addClass:function(r){var o,h,p,A,M,B,K,X=0;if(O(r))return this.each(function(re){t(this).addClass(r.call(this,re,nn(this)))});if((o=Dn(r)).length){for(;h=this[X++];)if(A=nn(h),p=h.nodeType===1&&" "+tn(A)+" "){for(B=0;M=o[B++];)p.indexOf(" "+M+" ")<0&&(p+=M+" ");A!==(K=tn(p))&&h.setAttribute("class",K)}}return this},removeClass:function(r){var o,h,p,A,M,B,K,X=0;if(O(r))return this.each(function(re){t(this).removeClass(r.call(this,re,nn(this)))});if(!arguments.length)return this.attr("class","");if((o=Dn(r)).length){for(;h=this[X++];)if(A=nn(h),p=h.nodeType===1&&" "+tn(A)+" "){for(B=0;M=o[B++];)for(;-1<p.indexOf(" "+M+" ");)p=p.replace(" "+M+" "," ");A!==(K=tn(p))&&h.setAttribute("class",K)}}return this},toggleClass:function(r,o){var h=typeof r,p=h==="string"||Array.isArray(r);return typeof o=="boolean"&&p?o?this.addClass(r):this.removeClass(r):O(r)?this.each(function(A){t(this).toggleClass(r.call(this,A,nn(this),o),o)}):this.each(function(){var A,M,B,K;if(p)for(M=0,B=t(this),K=Dn(r);A=K[M++];)B.hasClass(A)?B.removeClass(A):B.addClass(A);else r!==void 0&&h!=="boolean"||((A=nn(this))&&_e.set(this,"__className__",A),this.setAttribute&&this.setAttribute("class",A||r===!1?"":_e.get(this,"__className__")||""))})},hasClass:function(r){var o,h,p=0;for(o=" "+r+" ";h=this[p++];)if(h.nodeType===1&&-1<(" "+tn(nn(h))+" ").indexOf(o))return!0;return!1}});var Dr=/\r/g;t.fn.extend({val:function(r){var o,h,p,A=this[0];return arguments.length?(p=O(r),this.each(function(M){var B;this.nodeType===1&&((B=p?r.call(this,M,t(this).val()):r)==null?B="":typeof B=="number"?B+="":Array.isArray(B)&&(B=t.map(B,function(K){return K==null?"":K+""})),(o=t.valHooks[this.type]||t.valHooks[this.nodeName.toLowerCase()])&&"set"in o&&o.set(this,B,"value")!==void 0||(this.value=B))})):A?(o=t.valHooks[A.type]||t.valHooks[A.nodeName.toLowerCase()])&&"get"in o&&(h=o.get(A,"value"))!==void 0?h:typeof(h=A.value)=="string"?h.replace(Dr,""):h??"":void 0}}),t.extend({valHooks:{option:{get:function(r){var o=t.find.attr(r,"value");return o??tn(t.text(r))}},select:{get:function(r){var o,h,p,A=r.options,M=r.selectedIndex,B=r.type==="select-one",K=B?null:[],X=B?M+1:A.length;for(p=M<0?X:B?M:0;p<X;p++)if(((h=A[p]).selected||p===M)&&!h.disabled&&(!h.parentNode.disabled||!b(h.parentNode,"optgroup"))){if(o=t(h).val(),B)return o;K.push(o)}return K},set:function(r,o){for(var h,p,A=r.options,M=t.makeArray(o),B=A.length;B--;)((p=A[B]).selected=-1<t.inArray(t.valHooks.option.get(p),M))&&(h=!0);return h||(r.selectedIndex=-1),M}}}}),t.each(["radio","checkbox"],function(){t.valHooks[this]={set:function(r,o){if(Array.isArray(o))return r.checked=-1<t.inArray(t(r).val(),o)}},k.checkOn||(t.valHooks[this].get=function(r){return r.getAttribute("value")===null?"on":r.value})}),k.focusin="onfocusin"in v;var dr=/^(?:focusinfocus|focusoutblur)$/,cr=function(r){r.stopPropagation()};t.extend(t.event,{trigger:function(r,o,h,p){var A,M,B,K,X,re,ce,pe,oe=[h||L],ue=W.call(r,"type")?r.type:r,Te=W.call(r,"namespace")?r.namespace.split("."):[];if(M=pe=B=h=h||L,h.nodeType!==3&&h.nodeType!==8&&!dr.test(ue+t.event.triggered)&&(-1<ue.indexOf(".")&&(ue=(Te=ue.split(".")).shift(),Te.sort()),X=ue.indexOf(":")<0&&"on"+ue,(r=r[t.expando]?r:new t.Event(ue,typeof r=="object"&&r)).isTrigger=p?2:3,r.namespace=Te.join("."),r.rnamespace=r.namespace?new RegExp("(^|\\.)"+Te.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,r.result=void 0,r.target||(r.target=h),o=o==null?[r]:t.makeArray(o,[r]),ce=t.event.special[ue]||{},p||!ce.trigger||ce.trigger.apply(h,o)!==!1)){if(!p&&!ce.noBubble&&!z(h)){for(K=ce.delegateType||ue,dr.test(K+ue)||(M=M.parentNode);M;M=M.parentNode)oe.push(M),B=M;B===(h.ownerDocument||L)&&oe.push(B.defaultView||B.parentWindow||v)}for(A=0;(M=oe[A++])&&!r.isPropagationStopped();)pe=M,r.type=1<A?K:ce.bindType||ue,(re=(_e.get(M,"events")||Object.create(null))[r.type]&&_e.get(M,"handle"))&&re.apply(M,o),(re=X&&M[X])&&re.apply&&Me(M)&&(r.result=re.apply(M,o),r.result===!1&&r.preventDefault());return r.type=ue,p||r.isDefaultPrevented()||ce._default&&ce._default.apply(oe.pop(),o)!==!1||!Me(h)||X&&O(h[ue])&&!z(h)&&((B=h[X])&&(h[X]=null),t.event.triggered=ue,r.isPropagationStopped()&&pe.addEventListener(ue,cr),h[ue](),r.isPropagationStopped()&&pe.removeEventListener(ue,cr),t.event.triggered=void 0,B&&(h[X]=B)),r.result}},simulate:function(r,o,h){var p=t.extend(new t.Event,h,{type:r,isSimulated:!0});t.event.trigger(p,null,o)}}),t.fn.extend({trigger:function(r,o){return this.each(function(){t.event.trigger(r,o,this)})},triggerHandler:function(r,o){var h=this[0];if(h)return t.event.trigger(r,o,h,!0)}}),k.focusin||t.each({focus:"focusin",blur:"focusout"},function(r,o){var h=function(p){t.event.simulate(o,p.target,t.event.fix(p))};t.event.special[o]={setup:function(){var p=this.ownerDocument||this.document||this,A=_e.access(p,o);A||p.addEventListener(r,h,!0),_e.access(p,o,(A||0)+1)},teardown:function(){var p=this.ownerDocument||this.document||this,A=_e.access(p,o)-1;A?_e.access(p,o,A):(p.removeEventListener(r,h,!0),_e.remove(p,o))}}});var _n=v.location,ur={guid:Date.now()},In=/\?/;t.parseXML=function(r){var o;if(!r||typeof r!="string")return null;try{o=new v.DOMParser().parseFromString(r,"text/xml")}catch{o=void 0}return o&&!o.getElementsByTagName("parsererror").length||t.error("Invalid XML: "+r),o};var Ir=/\[\]$/,hr=/\r?\n/g,Fr=/^(?:submit|button|image|reset|file)$/i,Hr=/^(?:input|select|textarea|keygen)/i;function Fn(r,o,h,p){var A;if(Array.isArray(o))t.each(o,function(M,B){h||Ir.test(r)?p(r,B):Fn(r+"["+(typeof B=="object"&&B!=null?M:"")+"]",B,h,p)});else if(h||s(o)!=="object")p(r,o);else for(A in o)Fn(r+"["+A+"]",o[A],h,p)}t.param=function(r,o){var h,p=[],A=function(M,B){var K=O(B)?B():B;p[p.length]=encodeURIComponent(M)+"="+encodeURIComponent(K??"")};if(r==null)return"";if(Array.isArray(r)||r.jquery&&!t.isPlainObject(r))t.each(r,function(){A(this.name,this.value)});else for(h in r)Fn(h,r[h],o,A);return p.join("&")},t.fn.extend({serialize:function(){return t.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var r=t.prop(this,"elements");return r?t.makeArray(r):this}).filter(function(){var r=this.type;return this.name&&!t(this).is(":disabled")&&Hr.test(this.nodeName)&&!Fr.test(r)&&(this.checked||!Zt.test(r))}).map(function(r,o){var h=t(this).val();return h==null?null:Array.isArray(h)?t.map(h,function(p){return{name:o.name,value:p.replace(hr,`\r
`)}}):{name:o.name,value:h.replace(hr,`\r
`)}}).get()}});var zr=/%20/g,Vr=/#.*$/,Ur=/([?&])_=[^&]*/,Wr=/^(.*?):[ \t]*([^\r\n]*)$/gm,Gr=/^(?:GET|HEAD)$/,qr=/^\/\//,fr={},Hn={},pr="*/".concat("*"),zn=L.createElement("a");function gr(r){return function(o,h){typeof o!="string"&&(h=o,o="*");var p,A=0,M=o.toLowerCase().match(Ee)||[];if(O(h))for(;p=M[A++];)p[0]==="+"?(p=p.slice(1)||"*",(r[p]=r[p]||[]).unshift(h)):(r[p]=r[p]||[]).push(h)}}function mr(r,o,h,p){var A={},M=r===Hn;function B(K){var X;return A[K]=!0,t.each(r[K]||[],function(re,ce){var pe=ce(o,h,p);return typeof pe!="string"||M||A[pe]?M?!(X=pe):void 0:(o.dataTypes.unshift(pe),B(pe),!1)}),X}return B(o.dataTypes[0])||!A["*"]&&B("*")}function Vn(r,o){var h,p,A=t.ajaxSettings.flatOptions||{};for(h in o)o[h]!==void 0&&((A[h]?r:p||(p={}))[h]=o[h]);return p&&t.extend(!0,r,p),r}zn.href=_n.href,t.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:_n.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(_n.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":pr,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":t.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(r,o){return o?Vn(Vn(r,t.ajaxSettings),o):Vn(t.ajaxSettings,r)},ajaxPrefilter:gr(fr),ajaxTransport:gr(Hn),ajax:function(r,o){typeof r=="object"&&(o=r,r=void 0),o=o||{};var h,p,A,M,B,K,X,re,ce,pe,oe=t.ajaxSetup({},o),ue=oe.context||oe,Te=oe.context&&(ue.nodeType||ue.jquery)?t(ue):t.event,Re=t.Deferred(),Ne=t.Callbacks("once memory"),at=oe.statusCode||{},ft={},Tt={},nt="canceled",Ve={readyState:0,getResponseHeader:function(Je){var lt;if(X){if(!M)for(M={};lt=Wr.exec(A);)M[lt[1].toLowerCase()+" "]=(M[lt[1].toLowerCase()+" "]||[]).concat(lt[2]);lt=M[Je.toLowerCase()+" "]}return lt==null?null:lt.join(", ")},getAllResponseHeaders:function(){return X?A:null},setRequestHeader:function(Je,lt){return X==null&&(Je=Tt[Je.toLowerCase()]=Tt[Je.toLowerCase()]||Je,ft[Je]=lt),this},overrideMimeType:function(Je){return X==null&&(oe.mimeType=Je),this},statusCode:function(Je){var lt;if(Je)if(X)Ve.always(Je[Ve.status]);else for(lt in Je)at[lt]=[at[lt],Je[lt]];return this},abort:function(Je){var lt=Je||nt;return h&&h.abort(lt),Ct(0,lt),this}};if(Re.promise(Ve),oe.url=((r||oe.url||_n.href)+"").replace(qr,_n.protocol+"//"),oe.type=o.method||o.type||oe.method||oe.type,oe.dataTypes=(oe.dataType||"*").toLowerCase().match(Ee)||[""],oe.crossDomain==null){K=L.createElement("a");try{K.href=oe.url,K.href=K.href,oe.crossDomain=zn.protocol+"//"+zn.host!=K.protocol+"//"+K.host}catch{oe.crossDomain=!0}}if(oe.data&&oe.processData&&typeof oe.data!="string"&&(oe.data=t.param(oe.data,oe.traditional)),mr(fr,oe,o,Ve),X)return Ve;for(ce in(re=t.event&&oe.global)&&t.active++==0&&t.event.trigger("ajaxStart"),oe.type=oe.type.toUpperCase(),oe.hasContent=!Gr.test(oe.type),p=oe.url.replace(Vr,""),oe.hasContent?oe.data&&oe.processData&&(oe.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&(oe.data=oe.data.replace(zr,"+")):(pe=oe.url.slice(p.length),oe.data&&(oe.processData||typeof oe.data=="string")&&(p+=(In.test(p)?"&":"?")+oe.data,delete oe.data),oe.cache===!1&&(p=p.replace(Ur,"$1"),pe=(In.test(p)?"&":"?")+"_="+ur.guid+++pe),oe.url=p+pe),oe.ifModified&&(t.lastModified[p]&&Ve.setRequestHeader("If-Modified-Since",t.lastModified[p]),t.etag[p]&&Ve.setRequestHeader("If-None-Match",t.etag[p])),(oe.data&&oe.hasContent&&oe.contentType!==!1||o.contentType)&&Ve.setRequestHeader("Content-Type",oe.contentType),Ve.setRequestHeader("Accept",oe.dataTypes[0]&&oe.accepts[oe.dataTypes[0]]?oe.accepts[oe.dataTypes[0]]+(oe.dataTypes[0]!=="*"?", "+pr+"; q=0.01":""):oe.accepts["*"]),oe.headers)Ve.setRequestHeader(ce,oe.headers[ce]);if(oe.beforeSend&&(oe.beforeSend.call(ue,Ve,oe)===!1||X))return Ve.abort();if(nt="abort",Ne.add(oe.complete),Ve.done(oe.success),Ve.fail(oe.error),h=mr(Hn,oe,o,Ve)){if(Ve.readyState=1,re&&Te.trigger("ajaxSend",[Ve,oe]),X)return Ve;oe.async&&0<oe.timeout&&(B=v.setTimeout(function(){Ve.abort("timeout")},oe.timeout));try{X=!1,h.send(ft,Ct)}catch(Je){if(X)throw Je;Ct(-1,Je)}}else Ct(-1,"No Transport");function Ct(Je,lt,yn,An){var Pt,rn,ln,St,dn,Bt=lt;X||(X=!0,B&&v.clearTimeout(B),h=void 0,A=An||"",Ve.readyState=0<Je?4:0,Pt=200<=Je&&Je<300||Je===304,yn&&(St=function(dt,Ot,Nt){for(var Kt,Ue,tt,pt,Mt=dt.contents,ut=dt.dataTypes;ut[0]==="*";)ut.shift(),Kt===void 0&&(Kt=dt.mimeType||Ot.getResponseHeader("Content-Type"));if(Kt){for(Ue in Mt)if(Mt[Ue]&&Mt[Ue].test(Kt)){ut.unshift(Ue);break}}if(ut[0]in Nt)tt=ut[0];else{for(Ue in Nt){if(!ut[0]||dt.converters[Ue+" "+ut[0]]){tt=Ue;break}pt||(pt=Ue)}tt=tt||pt}if(tt)return tt!==ut[0]&&ut.unshift(tt),Nt[tt]}(oe,Ve,yn)),!Pt&&-1<t.inArray("script",oe.dataTypes)&&(oe.converters["text script"]=function(){}),St=function(dt,Ot,Nt,Kt){var Ue,tt,pt,Mt,ut,Lt={},cn=dt.dataTypes.slice();if(cn[1])for(pt in dt.converters)Lt[pt.toLowerCase()]=dt.converters[pt];for(tt=cn.shift();tt;)if(dt.responseFields[tt]&&(Nt[dt.responseFields[tt]]=Ot),!ut&&Kt&&dt.dataFilter&&(Ot=dt.dataFilter(Ot,dt.dataType)),ut=tt,tt=cn.shift()){if(tt==="*")tt=ut;else if(ut!=="*"&&ut!==tt){if(!(pt=Lt[ut+" "+tt]||Lt["* "+tt])){for(Ue in Lt)if((Mt=Ue.split(" "))[1]===tt&&(pt=Lt[ut+" "+Mt[0]]||Lt["* "+Mt[0]])){pt===!0?pt=Lt[Ue]:Lt[Ue]!==!0&&(tt=Mt[0],cn.unshift(Mt[1]));break}}if(pt!==!0)if(pt&&dt.throws)Ot=pt(Ot);else try{Ot=pt(Ot)}catch(Cn){return{state:"parsererror",error:pt?Cn:"No conversion from "+ut+" to "+tt}}}}return{state:"success",data:Ot}}(oe,St,Ve,Pt),Pt?(oe.ifModified&&((dn=Ve.getResponseHeader("Last-Modified"))&&(t.lastModified[p]=dn),(dn=Ve.getResponseHeader("etag"))&&(t.etag[p]=dn)),Je===204||oe.type==="HEAD"?Bt="nocontent":Je===304?Bt="notmodified":(Bt=St.state,rn=St.data,Pt=!(ln=St.error))):(ln=Bt,!Je&&Bt||(Bt="error",Je<0&&(Je=0))),Ve.status=Je,Ve.statusText=(lt||Bt)+"",Pt?Re.resolveWith(ue,[rn,Bt,Ve]):Re.rejectWith(ue,[Ve,Bt,ln]),Ve.statusCode(at),at=void 0,re&&Te.trigger(Pt?"ajaxSuccess":"ajaxError",[Ve,oe,Pt?rn:ln]),Ne.fireWith(ue,[Ve,Bt]),re&&(Te.trigger("ajaxComplete",[Ve,oe]),--t.active||t.event.trigger("ajaxStop")))}return Ve},getJSON:function(r,o,h){return t.get(r,o,h,"json")},getScript:function(r,o){return t.get(r,void 0,o,"script")}}),t.each(["get","post"],function(r,o){t[o]=function(h,p,A,M){return O(p)&&(M=M||A,A=p,p=void 0),t.ajax(t.extend({url:h,type:o,dataType:M,data:p,success:A},t.isPlainObject(h)&&h))}}),t.ajaxPrefilter(function(r){var o;for(o in r.headers)o.toLowerCase()==="content-type"&&(r.contentType=r.headers[o]||"")}),t._evalUrl=function(r,o,h){return t.ajax({url:r,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(p){t.globalEval(p,o,h)}})},t.fn.extend({wrapAll:function(r){var o;return this[0]&&(O(r)&&(r=r.call(this[0])),o=t(r,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&o.insertBefore(this[0]),o.map(function(){for(var h=this;h.firstElementChild;)h=h.firstElementChild;return h}).append(this)),this},wrapInner:function(r){return O(r)?this.each(function(o){t(this).wrapInner(r.call(this,o))}):this.each(function(){var o=t(this),h=o.contents();h.length?h.wrapAll(r):o.append(r)})},wrap:function(r){var o=O(r);return this.each(function(h){t(this).wrapAll(o?r.call(this,h):r)})},unwrap:function(r){return this.parent(r).not("body").each(function(){t(this).replaceWith(this.childNodes)}),this}}),t.expr.pseudos.hidden=function(r){return!t.expr.pseudos.visible(r)},t.expr.pseudos.visible=function(r){return!!(r.offsetWidth||r.offsetHeight||r.getClientRects().length)},t.ajaxSettings.xhr=function(){try{return new v.XMLHttpRequest}catch{}};var Kr={0:200,1223:204},xn=t.ajaxSettings.xhr();k.cors=!!xn&&"withCredentials"in xn,k.ajax=xn=!!xn,t.ajaxTransport(function(r){var o,h;if(k.cors||xn&&!r.crossDomain)return{send:function(p,A){var M,B=r.xhr();if(B.open(r.type,r.url,r.async,r.username,r.password),r.xhrFields)for(M in r.xhrFields)B[M]=r.xhrFields[M];for(M in r.mimeType&&B.overrideMimeType&&B.overrideMimeType(r.mimeType),r.crossDomain||p["X-Requested-With"]||(p["X-Requested-With"]="XMLHttpRequest"),p)B.setRequestHeader(M,p[M]);o=function(K){return function(){o&&(o=h=B.onload=B.onerror=B.onabort=B.ontimeout=B.onreadystatechange=null,K==="abort"?B.abort():K==="error"?typeof B.status!="number"?A(0,"error"):A(B.status,B.statusText):A(Kr[B.status]||B.status,B.statusText,(B.responseType||"text")!=="text"||typeof B.responseText!="string"?{binary:B.response}:{text:B.responseText},B.getAllResponseHeaders()))}},B.onload=o(),h=B.onerror=B.ontimeout=o("error"),B.onabort!==void 0?B.onabort=h:B.onreadystatechange=function(){B.readyState===4&&v.setTimeout(function(){o&&h()})},o=o("abort");try{B.send(r.hasContent&&r.data||null)}catch(K){if(o)throw K}},abort:function(){o&&o()}}}),t.ajaxPrefilter(function(r){r.crossDomain&&(r.contents.script=!1)}),t.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(r){return t.globalEval(r),r}}}),t.ajaxPrefilter("script",function(r){r.cache===void 0&&(r.cache=!1),r.crossDomain&&(r.type="GET")}),t.ajaxTransport("script",function(r){var o,h;if(r.crossDomain||r.scriptAttrs)return{send:function(p,A){o=t("<script>").attr(r.scriptAttrs||{}).prop({charset:r.scriptCharset,src:r.url}).on("load error",h=function(M){o.remove(),h=null,M&&A(M.type==="error"?404:200,M.type)}),L.head.appendChild(o[0])},abort:function(){h&&h()}}});var vr,_r=[],Un=/(=)\?(?=&|$)|\?\?/;t.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var r=_r.pop()||t.expando+"_"+ur.guid++;return this[r]=!0,r}}),t.ajaxPrefilter("json jsonp",function(r,o,h){var p,A,M,B=r.jsonp!==!1&&(Un.test(r.url)?"url":typeof r.data=="string"&&(r.contentType||"").indexOf("application/x-www-form-urlencoded")===0&&Un.test(r.data)&&"data");if(B||r.dataTypes[0]==="jsonp")return p=r.jsonpCallback=O(r.jsonpCallback)?r.jsonpCallback():r.jsonpCallback,B?r[B]=r[B].replace(Un,"$1"+p):r.jsonp!==!1&&(r.url+=(In.test(r.url)?"&":"?")+r.jsonp+"="+p),r.converters["script json"]=function(){return M||t.error(p+" was not called"),M[0]},r.dataTypes[0]="json",A=v[p],v[p]=function(){M=arguments},h.always(function(){A===void 0?t(v).removeProp(p):v[p]=A,r[p]&&(r.jsonpCallback=o.jsonpCallback,_r.push(p)),M&&O(A)&&A(M[0]),M=A=void 0}),"script"}),k.createHTMLDocument=((vr=L.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",vr.childNodes.length===2),t.parseHTML=function(r,o,h){return typeof r!="string"?[]:(typeof o=="boolean"&&(h=o,o=!1),o||(k.createHTMLDocument?((p=(o=L.implementation.createHTMLDocument("")).createElement("base")).href=L.location.href,o.head.appendChild(p)):o=L),M=!h&&[],(A=T.exec(r))?[o.createElement(A[1])]:(A=P([r],o,M),M&&M.length&&t(M).remove(),t.merge([],A.childNodes)));var p,A,M},t.fn.load=function(r,o,h){var p,A,M,B=this,K=r.indexOf(" ");return-1<K&&(p=tn(r.slice(K)),r=r.slice(0,K)),O(o)?(h=o,o=void 0):o&&typeof o=="object"&&(A="POST"),0<B.length&&t.ajax({url:r,type:A||"GET",dataType:"html",data:o}).done(function(X){M=arguments,B.html(p?t("<div>").append(t.parseHTML(X)).find(p):X)}).always(h&&function(X,re){B.each(function(){h.apply(this,M||[X.responseText,re,X])})}),this},t.expr.pseudos.animated=function(r){return t.grep(t.timers,function(o){return r===o.elem}).length},t.offset={setOffset:function(r,o,h){var p,A,M,B,K,X,re=t.css(r,"position"),ce=t(r),pe={};re==="static"&&(r.style.position="relative"),K=ce.offset(),M=t.css(r,"top"),X=t.css(r,"left"),(re==="absolute"||re==="fixed")&&-1<(M+X).indexOf("auto")?(B=(p=ce.position()).top,A=p.left):(B=parseFloat(M)||0,A=parseFloat(X)||0),O(o)&&(o=o.call(r,h,t.extend({},K))),o.top!=null&&(pe.top=o.top-K.top+B),o.left!=null&&(pe.left=o.left-K.left+A),"using"in o?o.using.call(r,pe):(typeof pe.top=="number"&&(pe.top+="px"),typeof pe.left=="number"&&(pe.left+="px"),ce.css(pe))}},t.fn.extend({offset:function(r){if(arguments.length)return r===void 0?this:this.each(function(A){t.offset.setOffset(this,r,A)});var o,h,p=this[0];return p?p.getClientRects().length?(o=p.getBoundingClientRect(),h=p.ownerDocument.defaultView,{top:o.top+h.pageYOffset,left:o.left+h.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var r,o,h,p=this[0],A={top:0,left:0};if(t.css(p,"position")==="fixed")o=p.getBoundingClientRect();else{for(o=this.offset(),h=p.ownerDocument,r=p.offsetParent||h.documentElement;r&&(r===h.body||r===h.documentElement)&&t.css(r,"position")==="static";)r=r.parentNode;r&&r!==p&&r.nodeType===1&&((A=t(r).offset()).top+=t.css(r,"borderTopWidth",!0),A.left+=t.css(r,"borderLeftWidth",!0))}return{top:o.top-A.top-t.css(p,"marginTop",!0),left:o.left-A.left-t.css(p,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var r=this.offsetParent;r&&t.css(r,"position")==="static";)r=r.offsetParent;return r||wt})}}),t.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(r,o){var h=o==="pageYOffset";t.fn[r]=function(p){return le(this,function(A,M,B){var K;if(z(A)?K=A:A.nodeType===9&&(K=A.defaultView),B===void 0)return K?K[o]:A[M];K?K.scrollTo(h?K.pageXOffset:B,h?B:K.pageYOffset):A[M]=B},r,p,arguments.length)}}),t.each(["top","left"],function(r,o){t.cssHooks[o]=Qn(k.pixelPosition,function(h,p){if(p)return p=mn(h,o),gn.test(p)?t(h).position()[o]+"px":p})}),t.each({Height:"height",Width:"width"},function(r,o){t.each({padding:"inner"+r,content:o,"":"outer"+r},function(h,p){t.fn[p]=function(A,M){var B=arguments.length&&(h||typeof A!="boolean"),K=h||(A===!0||M===!0?"margin":"border");return le(this,function(X,re,ce){var pe;return z(X)?p.indexOf("outer")===0?X["inner"+r]:X.document.documentElement["client"+r]:X.nodeType===9?(pe=X.documentElement,Math.max(X.body["scroll"+r],pe["scroll"+r],X.body["offset"+r],pe["offset"+r],pe["client"+r])):ce===void 0?t.css(X,re,K):t.style(X,re,ce,K)},o,B?A:void 0,B)}})}),t.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(r,o){t.fn[o]=function(h){return this.on(o,h)}}),t.fn.extend({bind:function(r,o,h){return this.on(r,null,o,h)},unbind:function(r,o){return this.off(r,null,o)},delegate:function(r,o,h,p){return this.on(o,r,h,p)},undelegate:function(r,o,h){return arguments.length===1?this.off(r,"**"):this.off(o,r||"**",h)},hover:function(r,o){return this.mouseenter(r).mouseleave(o||r)}}),t.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(r,o){t.fn[o]=function(h,p){return 0<arguments.length?this.on(o,null,h,p):this.trigger(o)}});var $r=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;t.proxy=function(r,o){var h,p,A;if(typeof o=="string"&&(h=r[o],o=r,r=h),O(r))return p=g.call(arguments,2),(A=function(){return r.apply(o||this,p.concat(g.call(arguments)))}).guid=r.guid=r.guid||t.guid++,A},t.holdReady=function(r){r?t.readyWait++:t.ready(!0)},t.isArray=Array.isArray,t.parseJSON=JSON.parse,t.nodeName=b,t.isFunction=O,t.isWindow=z,t.camelCase=Y,t.type=s,t.now=Date.now,t.isNumeric=function(r){var o=t.type(r);return(o==="number"||o==="string")&&!isNaN(r-parseFloat(r))},t.trim=function(r){return r==null?"":(r+"").replace($r,"")},f=[],_=(function(){return t}).apply(I,f),_!==void 0&&(be.exports=_);var Xr=v.jQuery,Jr=v.$;return t.noConflict=function(r){return v.$===t&&(v.$=Jr),r&&v.jQuery===t&&(v.jQuery=Xr),t},typeof i>"u"&&(v.jQuery=v.$=t),t})},function(be,I,l){be.exports={Gui:l(3),Inspector:l(4),Demo:l(14),Serializer:l(2)}},function(be,I,l){(function(f,_){_(I)})(this,function(f){function _(j,P){var H=j.__state.conversionName.toString(),Z=Math.round(j.r),ae=Math.round(j.g),de=Math.round(j.b),je=j.a,De=Math.round(j.h),Ie=j.s.toFixed(1),Le=j.v.toFixed(1);if(P||H==="THREE_CHAR_HEX"||H==="SIX_CHAR_HEX"){for(var Xe=j.hex.toString(16);Xe.length<6;)Xe="0"+Xe;return"#"+Xe}return H==="CSS_RGB"?"rgb("+Z+","+ae+","+de+")":H==="CSS_RGBA"?"rgba("+Z+","+ae+","+de+","+je+")":H==="HEX"?"0x"+j.hex.toString(16):H==="RGB_ARRAY"?"["+Z+","+ae+","+de+"]":H==="RGBA_ARRAY"?"["+Z+","+ae+","+de+","+je+"]":H==="RGB_OBJ"?"{r:"+Z+",g:"+ae+",b:"+de+"}":H==="RGBA_OBJ"?"{r:"+Z+",g:"+ae+",b:"+de+",a:"+je+"}":H==="HSV_OBJ"?"{h:"+De+",s:"+Ie+",v:"+Le+"}":H==="HSVA_OBJ"?"{h:"+De+",s:"+Ie+",v:"+Le+",a:"+je+"}":"unknown format"}function v(j,P,H){Object.defineProperty(j,P,{get:function(){return this.__state.space==="RGB"?this.__state[P]:(Be.recalculateRGB(this,P,H),this.__state[P])},set:function(Z){this.__state.space!=="RGB"&&(Be.recalculateRGB(this,P,H),this.__state.space="RGB"),this.__state[P]=Z}})}function i(j,P){Object.defineProperty(j,P,{get:function(){return this.__state.space==="HSV"?this.__state[P]:(Be.recalculateHSV(this),this.__state[P])},set:function(H){this.__state.space!=="HSV"&&(Be.recalculateHSV(this),this.__state.space="HSV"),this.__state[P]=H}})}function x(j){if(j==="0"||y.isUndefined(j))return 0;var P=j.match(le);return y.isNull(P)?0:parseFloat(P[1])}function S(j){var P=j.toString();return P.indexOf(".")>-1?P.length-P.indexOf(".")-1:0}function g(j,P){var H=Math.pow(10,P);return Math.round(j*H)/H}function d(j,P,H,Z,ae){return Z+(j-P)/(H-P)*(ae-Z)}function m(j,P,H,Z){j.style.background="",y.each(Qe,function(ae){j.style.cssText+="background: "+ae+"linear-gradient("+P+", "+H+" 0%, "+Z+" 100%); "})}function w(j){j.style.background="",j.style.cssText+="background: -moz-linear-gradient(top,  #ff0000 0%, #ff00ff 17%, #0000ff 34%, #00ffff 50%, #00ff00 67%, #ffff00 84%, #ff0000 100%);",j.style.cssText+="background: -webkit-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",j.style.cssText+="background: -o-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",j.style.cssText+="background: -ms-linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);",j.style.cssText+="background: linear-gradient(top,  #ff0000 0%,#ff00ff 17%,#0000ff 34%,#00ffff 50%,#00ff00 67%,#ffff00 84%,#ff0000 100%);"}function C(j,P,H){var Z=document.createElement("li");return P&&Z.appendChild(P),H?j.__ul.insertBefore(Z,H):j.__ul.appendChild(Z),j.onResize(),Z}function N(j){V.unbind(window,"resize",j.__resizeHandler),j.saveToLocalStorageIfPossible&&V.unbind(window,"unload",j.saveToLocalStorageIfPossible)}function W(j,P){var H=j.__preset_select[j.__preset_select.selectedIndex];H.innerHTML=P?H.value+"*":H.value}function J(j,P,H){if(H.__li=P,H.__gui=j,y.extend(H,{options:function(de){if(arguments.length>1){var je=H.__li.nextElementSibling;return H.remove(),k(j,H.object,H.property,{before:je,factoryArgs:[y.toArray(arguments)]})}if(y.isArray(de)||y.isObject(de)){var De=H.__li.nextElementSibling;return H.remove(),k(j,H.object,H.property,{before:De,factoryArgs:[de]})}},name:function(de){return H.__li.firstElementChild.firstElementChild.innerHTML=de,H},listen:function(){return H.__gui.listen(H),H},remove:function(){return H.__gui.remove(H),H}}),H instanceof _e){var Z=new Oe(H.object,H.property,{min:H.__min,max:H.__max,step:H.__step});y.each(["updateDisplay","onChange","onFinishChange","step","min","max"],function(de){var je=H[de],De=Z[de];H[de]=Z[de]=function(){var Ie=Array.prototype.slice.call(arguments);return De.apply(Z,Ie),je.apply(H,Ie)}}),V.addClass(P,"has-slider"),H.domElement.insertBefore(Z.domElement,H.domElement.firstElementChild)}else if(H instanceof Oe){var ae=function(de){if(y.isNumber(H.__min)&&y.isNumber(H.__max)){var je=H.__li.firstElementChild.firstElementChild.innerHTML,De=H.__gui.__listening.indexOf(H)>-1;H.remove();var Ie=k(j,H.object,H.property,{before:H.__li.nextElementSibling,factoryArgs:[H.__min,H.__max,H.__step]});return Ie.name(je),De&&Ie.listen(),Ie}return de};H.min=y.compose(ae,H.min),H.max=y.compose(ae,H.max)}else H instanceof he?(V.bind(P,"click",function(){V.fakeEvent(H.__checkbox,"click")}),V.bind(H.__checkbox,"click",function(de){de.stopPropagation()})):H instanceof me?(V.bind(P,"click",function(){V.fakeEvent(H.__button,"click")}),V.bind(P,"mouseover",function(){V.addClass(H.__button,"hover")}),V.bind(P,"mouseout",function(){V.removeClass(H.__button,"hover")})):H instanceof $e&&(V.addClass(P,"color"),H.updateDisplay=y.compose(function(de){return P.style.borderLeftColor=H.__color.toString(),de},H.updateDisplay),H.updateDisplay());H.setValue=y.compose(function(de){return j.getRoot().__preset_select&&H.isModified()&&W(j.getRoot(),!0),de},H.setValue)}function $(j,P){var H=j.getRoot(),Z=H.__rememberedObjects.indexOf(P.object);if(Z!==-1){var ae=H.__rememberedObjectIndecesToControllers[Z];if(ae===void 0&&(ae={},H.__rememberedObjectIndecesToControllers[Z]=ae),ae[P.property]=P,H.load&&H.load.remembered){var de=H.load.remembered,je=void 0;if(de[j.preset])je=de[j.preset];else{if(!de[yt])return;je=de[yt]}if(je[Z]&&je[Z][P.property]!==void 0){var De=je[Z][P.property];P.initialValue=De,P.setValue(De)}}}}function k(j,P,H,Z){if(P[H]===void 0)throw new Error('Object "'+P+'" has no property "'+H+'"');var ae=void 0;if(Z.color)ae=new $e(P,H);else{var de=[P,H].concat(Z.factoryArgs);ae=ye.apply(j,de)}Z.before instanceof rt&&(Z.before=Z.before.__li),$(j,ae),V.addClass(ae.domElement,"c");var je=document.createElement("span");V.addClass(je,"property-name"),je.innerHTML=ae.property;var De=document.createElement("div");De.appendChild(je),De.appendChild(ae.domElement);var Ie=C(j,De,Z.before);return V.addClass(Ie,Ye.CLASS_CONTROLLER_ROW),ae instanceof $e?V.addClass(Ie,"color"):V.addClass(Ie,ee(ae.getValue())),J(j,Ie,ae),j.__controllers.push(ae),ae}function O(j,P){return document.location.href+"."+P}function z(j,P,H){var Z=document.createElement("option");Z.innerHTML=P,Z.value=P,j.__preset_select.appendChild(Z),H&&(j.__preset_select.selectedIndex=j.__preset_select.length-1)}function L(j,P){P.style.display=j.useLocalStorage?"block":"none"}function G(j){var P=j.__save_row=document.createElement("li");V.addClass(j.domElement,"has-save"),j.__ul.insertBefore(P,j.__ul.firstChild),V.addClass(P,"save-row");var H=document.createElement("span");H.innerHTML="&nbsp;",V.addClass(H,"button gears");var Z=document.createElement("span");Z.innerHTML="Save",V.addClass(Z,"button"),V.addClass(Z,"save");var ae=document.createElement("span");ae.innerHTML="New",V.addClass(ae,"button"),V.addClass(ae,"save-as");var de=document.createElement("span");de.innerHTML="Revert",V.addClass(de,"button"),V.addClass(de,"revert");var je=j.__preset_select=document.createElement("select");if(j.load&&j.load.remembered?y.each(j.load.remembered,function(Xe,qe){z(j,qe,qe===j.preset)}):z(j,yt,!1),V.bind(je,"change",function(){for(var Xe=0;Xe<j.__preset_select.length;Xe++)j.__preset_select[Xe].innerHTML=j.__preset_select[Xe].value;j.preset=this.value}),P.appendChild(je),P.appendChild(H),P.appendChild(Z),P.appendChild(ae),P.appendChild(de),Rt){var De=document.getElementById("dg-local-explain"),Ie=document.getElementById("dg-local-storage");document.getElementById("dg-save-locally").style.display="block",localStorage.getItem(O(j,"isLocal"))==="true"&&Ie.setAttribute("checked","checked"),L(j,De),V.bind(Ie,"change",function(){j.useLocalStorage=!j.useLocalStorage,L(j,De)})}var Le=document.getElementById("dg-new-constructor");V.bind(Le,"keydown",function(Xe){!Xe.metaKey||Xe.which!==67&&Xe.keyCode!==67||Dt.hide()}),V.bind(H,"click",function(){Le.innerHTML=JSON.stringify(j.getSaveObject(),void 0,2),Dt.show(),Le.focus(),Le.select()}),V.bind(Z,"click",function(){j.save()}),V.bind(ae,"click",function(){var Xe=prompt("Enter a new preset name.");Xe&&j.saveAs(Xe)}),V.bind(de,"click",function(){j.revert()})}function e(j){function P(de){return de.preventDefault(),j.width+=ae-de.clientX,j.onResize(),ae=de.clientX,!1}function H(){V.removeClass(j.__closeButton,Ye.CLASS_DRAG),V.unbind(window,"mousemove",P),V.unbind(window,"mouseup",H)}function Z(de){return de.preventDefault(),ae=de.clientX,V.addClass(j.__closeButton,Ye.CLASS_DRAG),V.bind(window,"mousemove",P),V.bind(window,"mouseup",H),!1}var ae=void 0;j.__resize_handle=document.createElement("div"),y.extend(j.__resize_handle.style,{width:"6px",marginLeft:"-3px",height:"200px",cursor:"ew-resize",position:"absolute"}),V.bind(j.__resize_handle,"mousedown",Z),V.bind(j.__closeButton,"mousedown",Z),j.domElement.insertBefore(j.__resize_handle,j.domElement.firstElementChild)}function s(j,P){j.domElement.style.width=P+"px",j.__save_row&&j.autoPlace&&(j.__save_row.style.width=P+"px"),j.__closeButton&&(j.__closeButton.style.width=P+"px")}function n(j,P){var H={};return y.each(j.__rememberedObjects,function(Z,ae){var de={},je=j.__rememberedObjectIndecesToControllers[ae];y.each(je,function(De,Ie){de[Ie]=P?De.initialValue:De.getValue()}),H[ae]=de}),H}function t(j){for(var P=0;P<j.__preset_select.length;P++)j.__preset_select[P].value===j.preset&&(j.__preset_select.selectedIndex=P)}function a(j){j.length!==0&&mt.call(window,function(){a(j)}),y.each(j,function(P){P.updateDisplay()})}var c=Array.prototype.forEach,u=Array.prototype.slice,y={BREAK:{},extend:function(j){return this.each(u.call(arguments,1),function(P){(this.isObject(P)?Object.keys(P):[]).forEach((function(H){this.isUndefined(P[H])||(j[H]=P[H])}).bind(this))},this),j},defaults:function(j){return this.each(u.call(arguments,1),function(P){(this.isObject(P)?Object.keys(P):[]).forEach((function(H){this.isUndefined(j[H])&&(j[H]=P[H])}).bind(this))},this),j},compose:function(){var j=u.call(arguments);return function(){for(var P=u.call(arguments),H=j.length-1;H>=0;H--)P=[j[H].apply(this,P)];return P[0]}},each:function(j,P,H){if(j){if(c&&j.forEach&&j.forEach===c)j.forEach(P,H);else if(j.length===j.length+0){var Z=void 0,ae=void 0;for(Z=0,ae=j.length;Z<ae;Z++)if(Z in j&&P.call(H,j[Z],Z)===this.BREAK)return}else for(var de in j)if(P.call(H,j[de],de)===this.BREAK)return}},defer:function(j){setTimeout(j,0)},debounce:function(j,P,H){var Z=void 0;return function(){var ae=this,de=arguments,je=H||!Z;clearTimeout(Z),Z=setTimeout(function(){Z=null,H||j.apply(ae,de)},P),je&&j.apply(ae,de)}},toArray:function(j){return j.toArray?j.toArray():u.call(j)},isUndefined:function(j){return j===void 0},isNull:function(j){return j===null},isNaN:function(j){function P(H){return j.apply(this,arguments)}return P.toString=function(){return j.toString()},P}(function(j){return isNaN(j)}),isArray:Array.isArray||function(j){return j.constructor===Array},isObject:function(j){return j===Object(j)},isNumber:function(j){return j===j+0},isString:function(j){return j===j+""},isBoolean:function(j){return j===!1||j===!0},isFunction:function(j){return j instanceof Function}},E=[{litmus:y.isString,conversions:{THREE_CHAR_HEX:{read:function(j){var P=j.match(/^#([A-F0-9])([A-F0-9])([A-F0-9])$/i);return P!==null&&{space:"HEX",hex:parseInt("0x"+P[1].toString()+P[1].toString()+P[2].toString()+P[2].toString()+P[3].toString()+P[3].toString(),0)}},write:_},SIX_CHAR_HEX:{read:function(j){var P=j.match(/^#([A-F0-9]{6})$/i);return P!==null&&{space:"HEX",hex:parseInt("0x"+P[1].toString(),0)}},write:_},CSS_RGB:{read:function(j){var P=j.match(/^rgb\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return P!==null&&{space:"RGB",r:parseFloat(P[1]),g:parseFloat(P[2]),b:parseFloat(P[3])}},write:_},CSS_RGBA:{read:function(j){var P=j.match(/^rgba\(\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*,\s*(.+)\s*\)/);return P!==null&&{space:"RGB",r:parseFloat(P[1]),g:parseFloat(P[2]),b:parseFloat(P[3]),a:parseFloat(P[4])}},write:_}}},{litmus:y.isNumber,conversions:{HEX:{read:function(j){return{space:"HEX",hex:j,conversionName:"HEX"}},write:function(j){return j.hex}}}},{litmus:y.isArray,conversions:{RGB_ARRAY:{read:function(j){return j.length===3&&{space:"RGB",r:j[0],g:j[1],b:j[2]}},write:function(j){return[j.r,j.g,j.b]}},RGBA_ARRAY:{read:function(j){return j.length===4&&{space:"RGB",r:j[0],g:j[1],b:j[2],a:j[3]}},write:function(j){return[j.r,j.g,j.b,j.a]}}}},{litmus:y.isObject,conversions:{RGBA_OBJ:{read:function(j){return!!(y.isNumber(j.r)&&y.isNumber(j.g)&&y.isNumber(j.b)&&y.isNumber(j.a))&&{space:"RGB",r:j.r,g:j.g,b:j.b,a:j.a}},write:function(j){return{r:j.r,g:j.g,b:j.b,a:j.a}}},RGB_OBJ:{read:function(j){return!!(y.isNumber(j.r)&&y.isNumber(j.g)&&y.isNumber(j.b))&&{space:"RGB",r:j.r,g:j.g,b:j.b}},write:function(j){return{r:j.r,g:j.g,b:j.b}}},HSVA_OBJ:{read:function(j){return!!(y.isNumber(j.h)&&y.isNumber(j.s)&&y.isNumber(j.v)&&y.isNumber(j.a))&&{space:"HSV",h:j.h,s:j.s,v:j.v,a:j.a}},write:function(j){return{h:j.h,s:j.s,v:j.v,a:j.a}}},HSV_OBJ:{read:function(j){return!!(y.isNumber(j.h)&&y.isNumber(j.s)&&y.isNumber(j.v))&&{space:"HSV",h:j.h,s:j.s,v:j.v}},write:function(j){return{h:j.h,s:j.s,v:j.v}}}}}],b=void 0,T=void 0,F=function(){T=!1;var j=arguments.length>1?y.toArray(arguments):arguments[0];return y.each(E,function(P){if(P.litmus(j))return y.each(P.conversions,function(H,Z){if(b=H.read(j),T===!1&&b!==!1)return T=b,b.conversionName=Z,b.conversion=H,y.BREAK}),y.BREAK}),T},U=void 0,Q={hsv_to_rgb:function(j,P,H){var Z=Math.floor(j/60)%6,ae=j/60-Math.floor(j/60),de=H*(1-P),je=H*(1-ae*P),De=H*(1-(1-ae)*P),Ie=[[H,De,de],[je,H,de],[de,H,De],[de,je,H],[De,de,H],[H,de,je]][Z];return{r:255*Ie[0],g:255*Ie[1],b:255*Ie[2]}},rgb_to_hsv:function(j,P,H){var Z=Math.min(j,P,H),ae=Math.max(j,P,H),de=ae-Z,je=void 0,De=void 0;return ae===0?{h:NaN,s:0,v:0}:(De=de/ae,je=j===ae?(P-H)/de:P===ae?2+(H-j)/de:4+(j-P)/de,(je/=6)<0&&(je+=1),{h:360*je,s:De,v:ae/255})},rgb_to_hex:function(j,P,H){var Z=this.hex_with_component(0,2,j);return Z=this.hex_with_component(Z,1,P),Z=this.hex_with_component(Z,0,H)},component_from_hex:function(j,P){return j>>8*P&255},hex_with_component:function(j,P,H){return H<<(U=8*P)|j&~(255<<U)}},ee=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(j){return typeof j}:function(j){return j&&typeof Symbol=="function"&&j.constructor===Symbol&&j!==Symbol.prototype?"symbol":typeof j},ie=function(j,P){if(!(j instanceof P))throw new TypeError("Cannot call a class as a function")},te=function(){function j(P,H){for(var Z=0;Z<H.length;Z++){var ae=H[Z];ae.enumerable=ae.enumerable||!1,ae.configurable=!0,"value"in ae&&(ae.writable=!0),Object.defineProperty(P,ae.key,ae)}}return function(P,H,Z){return H&&j(P.prototype,H),Z&&j(P,Z),P}}(),Ee=function j(P,H,Z){P===null&&(P=Function.prototype);var ae=Object.getOwnPropertyDescriptor(P,H);if(ae===void 0){var de=Object.getPrototypeOf(P);return de===null?void 0:j(de,H,Z)}if("value"in ae)return ae.value;var je=ae.get;if(je!==void 0)return je.call(Z)},Ce=function(j,P){if(typeof P!="function"&&P!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof P);j.prototype=Object.create(P&&P.prototype,{constructor:{value:j,enumerable:!1,writable:!0,configurable:!0}}),P&&(Object.setPrototypeOf?Object.setPrototypeOf(j,P):j.__proto__=P)},Se=function(j,P){if(!j)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!P||typeof P!="object"&&typeof P!="function"?j:P},Be=function(){function j(){if(ie(this,j),this.__state=F.apply(this,arguments),this.__state===!1)throw new Error("Failed to interpret color arguments");this.__state.a=this.__state.a||1}return te(j,[{key:"toString",value:function(){return _(this)}},{key:"toHexString",value:function(){return _(this,!0)}},{key:"toOriginal",value:function(){return this.__state.conversion.write(this)}}]),j}();Be.recalculateRGB=function(j,P,H){if(j.__state.space==="HEX")j.__state[P]=Q.component_from_hex(j.__state.hex,H);else{if(j.__state.space!=="HSV")throw new Error("Corrupted color state");y.extend(j.__state,Q.hsv_to_rgb(j.__state.h,j.__state.s,j.__state.v))}},Be.recalculateHSV=function(j){var P=Q.rgb_to_hsv(j.r,j.g,j.b);y.extend(j.__state,{s:P.s,v:P.v}),y.isNaN(P.h)?y.isUndefined(j.__state.h)&&(j.__state.h=0):j.__state.h=P.h},Be.COMPONENTS=["r","g","b","h","s","v","hex","a"],v(Be.prototype,"r",2),v(Be.prototype,"g",1),v(Be.prototype,"b",0),i(Be.prototype,"h"),i(Be.prototype,"s"),i(Be.prototype,"v"),Object.defineProperty(Be.prototype,"a",{get:function(){return this.__state.a},set:function(j){this.__state.a=j}}),Object.defineProperty(Be.prototype,"hex",{get:function(){return this.__state.space!=="HEX"&&(this.__state.hex=Q.rgb_to_hex(this.r,this.g,this.b),this.__state.space="HEX"),this.__state.hex},set:function(j){this.__state.space="HEX",this.__state.hex=j}});var rt=function(){function j(P,H){ie(this,j),this.initialValue=P[H],this.domElement=document.createElement("div"),this.object=P,this.property=H,this.__onChange=void 0,this.__onFinishChange=void 0}return te(j,[{key:"onChange",value:function(P){return this.__onChange=P,this}},{key:"onFinishChange",value:function(P){return this.__onFinishChange=P,this}},{key:"setValue",value:function(P){return this.object[this.property]=P,this.__onChange&&this.__onChange.call(this,P),this.updateDisplay(),this}},{key:"getValue",value:function(){return this.object[this.property]}},{key:"updateDisplay",value:function(){return this}},{key:"isModified",value:function(){return this.initialValue!==this.getValue()}}]),j}(),et={HTMLEvents:["change"],MouseEvents:["click","mousemove","mousedown","mouseup","mouseover"],KeyboardEvents:["keydown"]},R={};y.each(et,function(j,P){y.each(j,function(H){R[H]=P})});var le=/(\d+(\.\d+)?)px/,V={makeSelectable:function(j,P){j!==void 0&&j.style!==void 0&&(j.onselectstart=P?function(){return!1}:function(){},j.style.MozUserSelect=P?"auto":"none",j.style.KhtmlUserSelect=P?"auto":"none",j.unselectable=P?"on":"off")},makeFullscreen:function(j,P,H){var Z=H,ae=P;y.isUndefined(ae)&&(ae=!0),y.isUndefined(Z)&&(Z=!0),j.style.position="absolute",ae&&(j.style.left=0,j.style.right=0),Z&&(j.style.top=0,j.style.bottom=0)},fakeEvent:function(j,P,H,Z){var ae=H||{},de=R[P];if(!de)throw new Error("Event type "+P+" not supported.");var je=document.createEvent(de);switch(de){case"MouseEvents":var De=ae.x||ae.clientX||0,Ie=ae.y||ae.clientY||0;je.initMouseEvent(P,ae.bubbles||!1,ae.cancelable||!0,window,ae.clickCount||1,0,0,De,Ie,!1,!1,!1,!1,0,null);break;case"KeyboardEvents":var Le=je.initKeyboardEvent||je.initKeyEvent;y.defaults(ae,{cancelable:!0,ctrlKey:!1,altKey:!1,shiftKey:!1,metaKey:!1,keyCode:void 0,charCode:void 0}),Le(P,ae.bubbles||!1,ae.cancelable,window,ae.ctrlKey,ae.altKey,ae.shiftKey,ae.metaKey,ae.keyCode,ae.charCode);break;default:je.initEvent(P,ae.bubbles||!1,ae.cancelable||!0)}y.defaults(je,Z),j.dispatchEvent(je)},bind:function(j,P,H,Z){var ae=Z||!1;return j.addEventListener?j.addEventListener(P,H,ae):j.attachEvent&&j.attachEvent("on"+P,H),V},unbind:function(j,P,H,Z){var ae=Z||!1;return j.removeEventListener?j.removeEventListener(P,H,ae):j.detachEvent&&j.detachEvent("on"+P,H),V},addClass:function(j,P){if(j.className===void 0)j.className=P;else if(j.className!==P){var H=j.className.split(/ +/);H.indexOf(P)===-1&&(H.push(P),j.className=H.join(" ").replace(/^\s+/,"").replace(/\s+$/,""))}return V},removeClass:function(j,P){if(P)if(j.className===P)j.removeAttribute("class");else{var H=j.className.split(/ +/),Z=H.indexOf(P);Z!==-1&&(H.splice(Z,1),j.className=H.join(" "))}else j.className=void 0;return V},hasClass:function(j,P){return new RegExp("(?:^|\\s+)"+P+"(?:\\s+|$)").test(j.className)||!1},getWidth:function(j){var P=getComputedStyle(j);return x(P["border-left-width"])+x(P["border-right-width"])+x(P["padding-left"])+x(P["padding-right"])+x(P.width)},getHeight:function(j){var P=getComputedStyle(j);return x(P["border-top-width"])+x(P["border-bottom-width"])+x(P["padding-top"])+x(P["padding-bottom"])+x(P.height)},getOffset:function(j){var P=j,H={left:0,top:0};if(P.offsetParent)do H.left+=P.offsetLeft,H.top+=P.offsetTop,P=P.offsetParent;while(P);return H},isActive:function(j){return j===document.activeElement&&(j.type||j.href)}},he=function(j){function P(H,Z){ie(this,P);var ae=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z)),de=ae;return ae.__prev=ae.getValue(),ae.__checkbox=document.createElement("input"),ae.__checkbox.setAttribute("type","checkbox"),V.bind(ae.__checkbox,"change",function(){de.setValue(!de.__prev)},!1),ae.domElement.appendChild(ae.__checkbox),ae.updateDisplay(),ae}return Ce(P,rt),te(P,[{key:"setValue",value:function(H){var Z=Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"setValue",this).call(this,H);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),this.__prev=this.getValue(),Z}},{key:"updateDisplay",value:function(){return this.getValue()===!0?(this.__checkbox.setAttribute("checked","checked"),this.__checkbox.checked=!0,this.__prev=!0):(this.__checkbox.checked=!1,this.__prev=!1),Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"updateDisplay",this).call(this)}}]),P}(),ge=function(j){function P(H,Z,ae){ie(this,P);var de=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z)),je=ae,De=de;if(de.__select=document.createElement("select"),y.isArray(je)){var Ie={};y.each(je,function(Le){Ie[Le]=Le}),je=Ie}return y.each(je,function(Le,Xe){var qe=document.createElement("option");qe.innerHTML=Xe,qe.setAttribute("value",Le),De.__select.appendChild(qe)}),de.updateDisplay(),V.bind(de.__select,"change",function(){var Le=this.options[this.selectedIndex].value;De.setValue(Le)}),de.domElement.appendChild(de.__select),de}return Ce(P,rt),te(P,[{key:"setValue",value:function(H){var Z=Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"setValue",this).call(this,H);return this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue()),Z}},{key:"updateDisplay",value:function(){return V.isActive(this.__select)?this:(this.__select.value=this.getValue(),Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"updateDisplay",this).call(this))}}]),P}(),Y=function(j){function P(H,Z){function ae(){je.setValue(je.__input.value)}ie(this,P);var de=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z)),je=de;return de.__input=document.createElement("input"),de.__input.setAttribute("type","text"),V.bind(de.__input,"keyup",ae),V.bind(de.__input,"change",ae),V.bind(de.__input,"blur",function(){je.__onFinishChange&&je.__onFinishChange.call(je,je.getValue())}),V.bind(de.__input,"keydown",function(De){De.keyCode===13&&this.blur()}),de.updateDisplay(),de.domElement.appendChild(de.__input),de}return Ce(P,rt),te(P,[{key:"updateDisplay",value:function(){return V.isActive(this.__input)||(this.__input.value=this.getValue()),Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"updateDisplay",this).call(this)}}]),P}(),Me=function(j){function P(H,Z,ae){ie(this,P);var de=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z)),je=ae||{};return de.__min=je.min,de.__max=je.max,de.__step=je.step,y.isUndefined(de.__step)?de.initialValue===0?de.__impliedStep=1:de.__impliedStep=Math.pow(10,Math.floor(Math.log(Math.abs(de.initialValue))/Math.LN10))/10:de.__impliedStep=de.__step,de.__precision=S(de.__impliedStep),de}return Ce(P,rt),te(P,[{key:"setValue",value:function(H){var Z=H;return this.__min!==void 0&&Z<this.__min?Z=this.__min:this.__max!==void 0&&Z>this.__max&&(Z=this.__max),this.__step!==void 0&&Z%this.__step!=0&&(Z=Math.round(Z/this.__step)*this.__step),Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"setValue",this).call(this,Z)}},{key:"min",value:function(H){return this.__min=H,this}},{key:"max",value:function(H){return this.__max=H,this}},{key:"step",value:function(H){return this.__step=H,this.__impliedStep=H,this.__precision=S(H),this}}]),P}(),Oe=function(j){function P(H,Z,ae){function de(){Le.__onFinishChange&&Le.__onFinishChange.call(Le,Le.getValue())}function je(qe){var ke=Xe-qe.clientY;Le.setValue(Le.getValue()+ke*Le.__impliedStep),Xe=qe.clientY}function De(){V.unbind(window,"mousemove",je),V.unbind(window,"mouseup",De),de()}ie(this,P);var Ie=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z,ae));Ie.__truncationSuspended=!1;var Le=Ie,Xe=void 0;return Ie.__input=document.createElement("input"),Ie.__input.setAttribute("type","text"),V.bind(Ie.__input,"change",function(){var qe=parseFloat(Le.__input.value);y.isNaN(qe)||Le.setValue(qe)}),V.bind(Ie.__input,"blur",function(){de()}),V.bind(Ie.__input,"mousedown",function(qe){V.bind(window,"mousemove",je),V.bind(window,"mouseup",De),Xe=qe.clientY}),V.bind(Ie.__input,"keydown",function(qe){qe.keyCode===13&&(Le.__truncationSuspended=!0,this.blur(),Le.__truncationSuspended=!1,de())}),Ie.updateDisplay(),Ie.domElement.appendChild(Ie.__input),Ie}return Ce(P,Me),te(P,[{key:"updateDisplay",value:function(){return this.__input.value=this.__truncationSuspended?this.getValue():g(this.getValue(),this.__precision),Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"updateDisplay",this).call(this)}}]),P}(),_e=function(j){function P(H,Z,ae,de,je){function De(Ze){Ze.preventDefault();var Gt=ke.__background.getBoundingClientRect();return ke.setValue(d(Ze.clientX,Gt.left,Gt.right,ke.__min,ke.__max)),!1}function Ie(){V.unbind(window,"mousemove",De),V.unbind(window,"mouseup",Ie),ke.__onFinishChange&&ke.__onFinishChange.call(ke,ke.getValue())}function Le(Ze){var Gt=Ze.touches[0].clientX,ot=ke.__background.getBoundingClientRect();ke.setValue(d(Gt,ot.left,ot.right,ke.__min,ke.__max))}function Xe(){V.unbind(window,"touchmove",Le),V.unbind(window,"touchend",Xe),ke.__onFinishChange&&ke.__onFinishChange.call(ke,ke.getValue())}ie(this,P);var qe=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z,{min:ae,max:de,step:je})),ke=qe;return qe.__background=document.createElement("div"),qe.__foreground=document.createElement("div"),V.bind(qe.__background,"mousedown",function(Ze){document.activeElement.blur(),V.bind(window,"mousemove",De),V.bind(window,"mouseup",Ie),De(Ze)}),V.bind(qe.__background,"touchstart",function(Ze){Ze.touches.length===1&&(V.bind(window,"touchmove",Le),V.bind(window,"touchend",Xe),Le(Ze))}),V.addClass(qe.__background,"slider"),V.addClass(qe.__foreground,"slider-fg"),qe.updateDisplay(),qe.__background.appendChild(qe.__foreground),qe.domElement.appendChild(qe.__background),qe}return Ce(P,Me),te(P,[{key:"updateDisplay",value:function(){var H=(this.getValue()-this.__min)/(this.__max-this.__min);return this.__foreground.style.width=100*H+"%",Ee(P.prototype.__proto__||Object.getPrototypeOf(P.prototype),"updateDisplay",this).call(this)}}]),P}(),me=function(j){function P(H,Z,ae){ie(this,P);var de=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z)),je=de;return de.__button=document.createElement("div"),de.__button.innerHTML=ae===void 0?"Fire":ae,V.bind(de.__button,"click",function(De){return De.preventDefault(),je.fire(),!1}),V.addClass(de.__button,"button"),de.domElement.appendChild(de.__button),de}return Ce(P,rt),te(P,[{key:"fire",value:function(){this.__onChange&&this.__onChange.call(this),this.getValue().call(this.object),this.__onFinishChange&&this.__onFinishChange.call(this,this.getValue())}}]),P}(),$e=function(j){function P(H,Z){function ae(ot){Xe(ot),V.bind(window,"mousemove",Xe),V.bind(window,"touchmove",Xe),V.bind(window,"mouseup",je),V.bind(window,"touchend",je)}function de(ot){qe(ot),V.bind(window,"mousemove",qe),V.bind(window,"touchmove",qe),V.bind(window,"mouseup",De),V.bind(window,"touchend",De)}function je(){V.unbind(window,"mousemove",Xe),V.unbind(window,"touchmove",Xe),V.unbind(window,"mouseup",je),V.unbind(window,"touchend",je),Le()}function De(){V.unbind(window,"mousemove",qe),V.unbind(window,"touchmove",qe),V.unbind(window,"mouseup",De),V.unbind(window,"touchend",De),Le()}function Ie(){var ot=F(this.value);ot!==!1?(Ze.__color.__state=ot,Ze.setValue(Ze.__color.toOriginal())):this.value=Ze.__color.toString()}function Le(){Ze.__onFinishChange&&Ze.__onFinishChange.call(Ze,Ze.__color.toOriginal())}function Xe(ot){ot.type.indexOf("touch")===-1&&ot.preventDefault();var Et=Ze.__saturation_field.getBoundingClientRect(),bt=ot.touches&&ot.touches[0]||ot,wn=bt.clientX,gn=bt.clientY,qt=(wn-Et.left)/(Et.right-Et.left),en=1-(gn-Et.top)/(Et.bottom-Et.top);return en>1?en=1:en<0&&(en=0),qt>1?qt=1:qt<0&&(qt=0),Ze.__color.v=en,Ze.__color.s=qt,Ze.setValue(Ze.__color.toOriginal()),!1}function qe(ot){ot.type.indexOf("touch")===-1&&ot.preventDefault();var Et=Ze.__hue_field.getBoundingClientRect(),bt=1-((ot.touches&&ot.touches[0]||ot).clientY-Et.top)/(Et.bottom-Et.top);return bt>1?bt=1:bt<0&&(bt=0),Ze.__color.h=360*bt,Ze.setValue(Ze.__color.toOriginal()),!1}ie(this,P);var ke=Se(this,(P.__proto__||Object.getPrototypeOf(P)).call(this,H,Z));ke.__color=new Be(ke.getValue()),ke.__temp=new Be(0);var Ze=ke;ke.domElement=document.createElement("div"),V.makeSelectable(ke.domElement,!1),ke.__selector=document.createElement("div"),ke.__selector.className="selector",ke.__saturation_field=document.createElement("div"),ke.__saturation_field.className="saturation-field",ke.__field_knob=document.createElement("div"),ke.__field_knob.className="field-knob",ke.__field_knob_border="2px solid ",ke.__hue_knob=document.createElement("div"),ke.__hue_knob.className="hue-knob",ke.__hue_field=document.createElement("div"),ke.__hue_field.className="hue-field",ke.__input=document.createElement("input"),ke.__input.type="text",ke.__input_textShadow="0 1px 1px ",V.bind(ke.__input,"keydown",function(ot){ot.keyCode===13&&Ie.call(this)}),V.bind(ke.__input,"blur",Ie),V.bind(ke.__selector,"mousedown",function(){V.addClass(this,"drag").bind(window,"mouseup",function(){V.removeClass(Ze.__selector,"drag")})}),V.bind(ke.__selector,"touchstart",function(){V.addClass(this,"drag").bind(window,"touchend",function(){V.removeClass(Ze.__selector,"drag")})});var Gt=document.createElement("div");return y.extend(ke.__selector.style,{width:"122px",height:"102px",padding:"3px",backgroundColor:"#222",boxShadow:"0px 1px 3px rgba(0,0,0,0.3)"}),y.extend(ke.__field_knob.style,{position:"absolute",width:"12px",height:"12px",border:ke.__field_knob_border+(ke.__color.v<.5?"#fff":"#000"),boxShadow:"0px 1px 3px rgba(0,0,0,0.5)",borderRadius:"12px",zIndex:1}),y.extend(ke.__hue_knob.style,{position:"absolute",width:"15px",height:"2px",borderRight:"4px solid #fff",zIndex:1}),y.extend(ke.__saturation_field.style,{width:"100px",height:"100px",border:"1px solid #555",marginRight:"3px",display:"inline-block",cursor:"pointer"}),y.extend(Gt.style,{width:"100%",height:"100%",background:"none"}),m(Gt,"top","rgba(0,0,0,0)","#000"),y.extend(ke.__hue_field.style,{width:"15px",height:"100px",border:"1px solid #555",cursor:"ns-resize",position:"absolute",top:"3px",right:"3px"}),w(ke.__hue_field),y.extend(ke.__input.style,{outline:"none",textAlign:"center",color:"#fff",border:0,fontWeight:"bold",textShadow:ke.__input_textShadow+"rgba(0,0,0,0.7)"}),V.bind(ke.__saturation_field,"mousedown",ae),V.bind(ke.__saturation_field,"touchstart",ae),V.bind(ke.__field_knob,"mousedown",ae),V.bind(ke.__field_knob,"touchstart",ae),V.bind(ke.__hue_field,"mousedown",de),V.bind(ke.__hue_field,"touchstart",de),ke.__saturation_field.appendChild(Gt),ke.__selector.appendChild(ke.__field_knob),ke.__selector.appendChild(ke.__saturation_field),ke.__selector.appendChild(ke.__hue_field),ke.__hue_field.appendChild(ke.__hue_knob),ke.domElement.appendChild(ke.__input),ke.domElement.appendChild(ke.__selector),ke.updateDisplay(),ke}return Ce(P,rt),te(P,[{key:"updateDisplay",value:function(){var H=F(this.getValue());if(H!==!1){var Z=!1;y.each(Be.COMPONENTS,function(je){if(!y.isUndefined(H[je])&&!y.isUndefined(this.__color.__state[je])&&H[je]!==this.__color.__state[je])return Z=!0,{}},this),Z&&y.extend(this.__color.__state,H)}y.extend(this.__temp.__state,this.__color.__state),this.__temp.a=1;var ae=this.__color.v<.5||this.__color.s>.5?255:0,de=255-ae;y.extend(this.__field_knob.style,{marginLeft:100*this.__color.s-7+"px",marginTop:100*(1-this.__color.v)-7+"px",backgroundColor:this.__temp.toHexString(),border:this.__field_knob_border+"rgb("+ae+","+ae+","+ae+")"}),this.__hue_knob.style.marginTop=100*(1-this.__color.h/360)+"px",this.__temp.s=1,this.__temp.v=1,m(this.__saturation_field,"left","#fff",this.__temp.toHexString()),this.__input.value=this.__color.toString(),y.extend(this.__input.style,{backgroundColor:this.__color.toHexString(),color:"rgb("+ae+","+ae+","+ae+")",textShadow:this.__input_textShadow+"rgba("+de+","+de+","+de+",.7)"})}}]),P}(),Qe=["-moz-","-o-","-webkit-","-ms-",""],Ge={load:function(j,P){var H=P||document,Z=H.createElement("link");Z.type="text/css",Z.rel="stylesheet",Z.href=j,H.getElementsByTagName("head")[0].appendChild(Z)},inject:function(j,P){var H=P||document,Z=document.createElement("style");Z.type="text/css",Z.innerHTML=j;var ae=H.getElementsByTagName("head")[0];try{ae.appendChild(Z)}catch{}}},ye=function(j,P){var H=j[P];return y.isArray(arguments[2])||y.isObject(arguments[2])?new ge(j,P,arguments[2]):y.isNumber(H)?y.isNumber(arguments[2])&&y.isNumber(arguments[3])?y.isNumber(arguments[4])?new _e(j,P,arguments[2],arguments[3],arguments[4]):new _e(j,P,arguments[2],arguments[3]):y.isNumber(arguments[4])?new Oe(j,P,{min:arguments[2],max:arguments[3],step:arguments[4]}):new Oe(j,P,{min:arguments[2],max:arguments[3]}):y.isString(H)?new Y(j,P):y.isFunction(H)?new me(j,P,""):y.isBoolean(H)?new he(j,P):null},mt=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(j){setTimeout(j,1e3/60)},_t=function(){function j(){ie(this,j),this.backgroundElement=document.createElement("div"),y.extend(this.backgroundElement.style,{backgroundColor:"rgba(0,0,0,0.8)",top:0,left:0,display:"none",zIndex:"1000",opacity:0,WebkitTransition:"opacity 0.2s linear",transition:"opacity 0.2s linear"}),V.makeFullscreen(this.backgroundElement),this.backgroundElement.style.position="fixed",this.domElement=document.createElement("div"),y.extend(this.domElement.style,{position:"fixed",display:"none",zIndex:"1001",opacity:0,WebkitTransition:"-webkit-transform 0.2s ease-out, opacity 0.2s linear",transition:"transform 0.2s ease-out, opacity 0.2s linear"}),document.body.appendChild(this.backgroundElement),document.body.appendChild(this.domElement);var P=this;V.bind(this.backgroundElement,"click",function(){P.hide()})}return te(j,[{key:"show",value:function(){var P=this;this.backgroundElement.style.display="block",this.domElement.style.display="block",this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)",this.layout(),y.defer(function(){P.backgroundElement.style.opacity=1,P.domElement.style.opacity=1,P.domElement.style.webkitTransform="scale(1)"})}},{key:"hide",value:function(){var P=this,H=function Z(){P.domElement.style.display="none",P.backgroundElement.style.display="none",V.unbind(P.domElement,"webkitTransitionEnd",Z),V.unbind(P.domElement,"transitionend",Z),V.unbind(P.domElement,"oTransitionEnd",Z)};V.bind(this.domElement,"webkitTransitionEnd",H),V.bind(this.domElement,"transitionend",H),V.bind(this.domElement,"oTransitionEnd",H),this.backgroundElement.style.opacity=0,this.domElement.style.opacity=0,this.domElement.style.webkitTransform="scale(1.1)"}},{key:"layout",value:function(){this.domElement.style.left=window.innerWidth/2-V.getWidth(this.domElement)/2+"px",this.domElement.style.top=window.innerHeight/2-V.getHeight(this.domElement)/2+"px"}}]),j}(),wt=function(j){if(j&&typeof window<"u"){var P=document.createElement("style");return P.setAttribute("type","text/css"),P.innerHTML=j,document.head.appendChild(P),j}}(`.dg ul{list-style:none;margin:0;padding:0;width:100%;clear:both}.dg.ac{position:fixed;top:0;left:0;right:0;height:0;z-index:0}.dg:not(.ac) .main{overflow:hidden}.dg.main{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear}.dg.main.taller-than-window{overflow-y:auto}.dg.main.taller-than-window .close-button{opacity:1;margin-top:-1px;border-top:1px solid #2c2c2c}.dg.main ul.closed .close-button{opacity:1 !important}.dg.main:hover .close-button,.dg.main .close-button.drag{opacity:1}.dg.main .close-button{-webkit-transition:opacity .1s linear;-o-transition:opacity .1s linear;-moz-transition:opacity .1s linear;transition:opacity .1s linear;border:0;line-height:19px;height:20px;cursor:pointer;text-align:center;background-color:#000}.dg.main .close-button.close-top{position:relative}.dg.main .close-button.close-bottom{position:absolute}.dg.main .close-button:hover{background-color:#111}.dg.a{float:right;margin-right:15px;overflow-y:visible}.dg.a.has-save>ul.close-top{margin-top:0}.dg.a.has-save>ul.close-bottom{margin-top:27px}.dg.a.has-save>ul.closed{margin-top:0}.dg.a .save-row{top:0;z-index:1002}.dg.a .save-row.close-top{position:relative}.dg.a .save-row.close-bottom{position:fixed}.dg li{-webkit-transition:height .1s ease-out;-o-transition:height .1s ease-out;-moz-transition:height .1s ease-out;transition:height .1s ease-out;-webkit-transition:overflow .1s linear;-o-transition:overflow .1s linear;-moz-transition:overflow .1s linear;transition:overflow .1s linear}.dg li:not(.folder){cursor:auto;height:27px;line-height:27px;padding:0 4px 0 5px}.dg li.folder{padding:0;border-left:4px solid rgba(0,0,0,0)}.dg li.title{cursor:pointer;margin-left:-4px}.dg .closed li:not(.title),.dg .closed ul li,.dg .closed ul li>*{height:0;overflow:hidden;border:0}.dg .cr{clear:both;padding-left:3px;height:27px;overflow:hidden}.dg .property-name{cursor:default;float:left;clear:left;width:40%;overflow:hidden;text-overflow:ellipsis}.dg .c{float:left;width:60%;position:relative}.dg .c input[type=text]{border:0;margin-top:4px;padding:3px;width:100%;float:right}.dg .has-slider input[type=text]{width:30%;margin-left:0}.dg .slider{float:left;width:66%;margin-left:-5px;margin-right:0;height:19px;margin-top:4px}.dg .slider-fg{height:100%}.dg .c input[type=checkbox]{margin-top:7px}.dg .c select{margin-top:5px}.dg .cr.function,.dg .cr.function .property-name,.dg .cr.function *,.dg .cr.boolean,.dg .cr.boolean *{cursor:pointer}.dg .cr.color{overflow:visible}.dg .selector{display:none;position:absolute;margin-left:-9px;margin-top:23px;z-index:10}.dg .c:hover .selector,.dg .selector.drag{display:block}.dg li.save-row{padding:0}.dg li.save-row .button{display:inline-block;padding:0px 6px}.dg.dialogue{background-color:#222;width:460px;padding:15px;font-size:13px;line-height:15px}#dg-new-constructor{padding:10px;color:#222;font-family:Monaco, monospace;font-size:10px;border:0;resize:none;box-shadow:inset 1px 1px 1px #888;word-wrap:break-word;margin:12px 0;display:block;width:440px;overflow-y:scroll;height:100px;position:relative}#dg-local-explain{display:none;font-size:11px;line-height:17px;border-radius:3px;background-color:#333;padding:8px;margin-top:10px}#dg-local-explain code{font-size:10px}#dat-gui-save-locally{display:none}.dg{color:#eee;font:11px 'Lucida Grande', sans-serif;text-shadow:0 -1px 0 #111}.dg.main::-webkit-scrollbar{width:5px;background:#1a1a1a}.dg.main::-webkit-scrollbar-corner{height:0;display:none}.dg.main::-webkit-scrollbar-thumb{border-radius:5px;background:#676767}.dg li:not(.folder){background:#1a1a1a;border-bottom:1px solid #2c2c2c}.dg li.save-row{line-height:25px;background:#dad5cb;border:0}.dg li.save-row select{margin-left:5px;width:108px}.dg li.save-row .button{margin-left:5px;margin-top:1px;border-radius:2px;font-size:9px;line-height:7px;padding:4px 4px 5px 4px;background:#c5bdad;color:#fff;text-shadow:0 1px 0 #b0a58f;box-shadow:0 -1px 0 #b0a58f;cursor:pointer}.dg li.save-row .button.gears{background:#c5bdad url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAANCAYAAAB/9ZQ7AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAQJJREFUeNpiYKAU/P//PwGIC/ApCABiBSAW+I8AClAcgKxQ4T9hoMAEUrxx2QSGN6+egDX+/vWT4e7N82AMYoPAx/evwWoYoSYbACX2s7KxCxzcsezDh3evFoDEBYTEEqycggWAzA9AuUSQQgeYPa9fPv6/YWm/Acx5IPb7ty/fw+QZblw67vDs8R0YHyQhgObx+yAJkBqmG5dPPDh1aPOGR/eugW0G4vlIoTIfyFcA+QekhhHJhPdQxbiAIguMBTQZrPD7108M6roWYDFQiIAAv6Aow/1bFwXgis+f2LUAynwoIaNcz8XNx3Dl7MEJUDGQpx9gtQ8YCueB+D26OECAAQDadt7e46D42QAAAABJRU5ErkJggg==) 2px 1px no-repeat;height:7px;width:8px}.dg li.save-row .button:hover{background-color:#bab19e;box-shadow:0 -1px 0 #b0a58f}.dg li.folder{border-bottom:0}.dg li.title{padding-left:16px;background:#000 url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlI+hKgFxoCgAOw==) 6px 10px no-repeat;cursor:pointer;border-bottom:1px solid rgba(255,255,255,0.2)}.dg .closed li.title{background-image:url(data:image/gif;base64,R0lGODlhBQAFAJEAAP////Pz8////////yH5BAEAAAIALAAAAAAFAAUAAAIIlGIWqMCbWAEAOw==)}.dg .cr.boolean{border-left:3px solid #806787}.dg .cr.color{border-left:3px solid}.dg .cr.function{border-left:3px solid #e61d5f}.dg .cr.number{border-left:3px solid #2FA1D6}.dg .cr.number input[type=text]{color:#2FA1D6}.dg .cr.string{border-left:3px solid #1ed36f}.dg .cr.string input[type=text]{color:#1ed36f}.dg .cr.function:hover,.dg .cr.boolean:hover{background:#111}.dg .c input[type=text]{background:#303030;outline:none}.dg .c input[type=text]:hover{background:#3c3c3c}.dg .c input[type=text]:focus{background:#494949;color:#fff}.dg .c .slider{background:#303030;cursor:ew-resize}.dg .c .slider-fg{background:#2FA1D6;max-width:100%}.dg .c .slider:hover{background:#3c3c3c}.dg .c .slider:hover .slider-fg{background:#44abda}
`);Ge.inject(wt);var yt="Default",Rt=function(){try{return!!window.localStorage}catch{return!1}}(),Dt=void 0,un=!0,Jt=void 0,Ut=!1,Wt=[],Ye=function j(P){var H=this,Z=P||{};this.domElement=document.createElement("div"),this.__ul=document.createElement("ul"),this.domElement.appendChild(this.__ul),V.addClass(this.domElement,"dg"),this.__folders={},this.__controllers=[],this.__rememberedObjects=[],this.__rememberedObjectIndecesToControllers=[],this.__listening=[],Z=y.defaults(Z,{closeOnTop:!1,autoPlace:!0,width:j.DEFAULT_WIDTH}),Z=y.defaults(Z,{resizable:Z.autoPlace,hideable:Z.autoPlace}),y.isUndefined(Z.load)?Z.load={preset:yt}:Z.preset&&(Z.load.preset=Z.preset),y.isUndefined(Z.parent)&&Z.hideable&&Wt.push(this),Z.resizable=y.isUndefined(Z.parent)&&Z.resizable,Z.autoPlace&&y.isUndefined(Z.scrollable)&&(Z.scrollable=!0);var ae=Rt&&localStorage.getItem(O(this,"isLocal"))==="true",de=void 0,je=void 0;if(Object.defineProperties(this,{parent:{get:function(){return Z.parent}},scrollable:{get:function(){return Z.scrollable}},autoPlace:{get:function(){return Z.autoPlace}},closeOnTop:{get:function(){return Z.closeOnTop}},preset:{get:function(){return H.parent?H.getRoot().preset:Z.load.preset},set:function(Le){H.parent?H.getRoot().preset=Le:Z.load.preset=Le,t(this),H.revert()}},width:{get:function(){return Z.width},set:function(Le){Z.width=Le,s(H,Le)}},name:{get:function(){return Z.name},set:function(Le){Z.name=Le,je&&(je.innerHTML=Z.name)}},closed:{get:function(){return Z.closed},set:function(Le){Z.closed=Le,Z.closed?V.addClass(H.__ul,j.CLASS_CLOSED):V.removeClass(H.__ul,j.CLASS_CLOSED),this.onResize(),H.__closeButton&&(H.__closeButton.innerHTML=Le?j.TEXT_OPEN:j.TEXT_CLOSED)}},load:{get:function(){return Z.load}},useLocalStorage:{get:function(){return ae},set:function(Le){Rt&&(ae=Le,Le?V.bind(window,"unload",de):V.unbind(window,"unload",de),localStorage.setItem(O(H,"isLocal"),Le))}}}),y.isUndefined(Z.parent)){if(this.closed=Z.closed||!1,V.addClass(this.domElement,j.CLASS_MAIN),V.makeSelectable(this.domElement,!1),Rt&&ae){H.useLocalStorage=!0;var De=localStorage.getItem(O(this,"gui"));De&&(Z.load=JSON.parse(De))}this.__closeButton=document.createElement("div"),this.__closeButton.innerHTML=j.TEXT_CLOSED,V.addClass(this.__closeButton,j.CLASS_CLOSE_BUTTON),Z.closeOnTop?(V.addClass(this.__closeButton,j.CLASS_CLOSE_TOP),this.domElement.insertBefore(this.__closeButton,this.domElement.childNodes[0])):(V.addClass(this.__closeButton,j.CLASS_CLOSE_BOTTOM),this.domElement.appendChild(this.__closeButton)),V.bind(this.__closeButton,"click",function(){H.closed=!H.closed})}else{Z.closed===void 0&&(Z.closed=!0);var Ie=document.createTextNode(Z.name);V.addClass(Ie,"controller-name"),je=C(H,Ie),V.addClass(this.__ul,j.CLASS_CLOSED),V.addClass(je,"title"),V.bind(je,"click",function(Le){return Le.preventDefault(),H.closed=!H.closed,!1}),Z.closed||(this.closed=!1)}Z.autoPlace&&(y.isUndefined(Z.parent)&&(un&&(Jt=document.createElement("div"),V.addClass(Jt,"dg"),V.addClass(Jt,j.CLASS_AUTO_PLACE_CONTAINER),document.body.appendChild(Jt),un=!1),Jt.appendChild(this.domElement),V.addClass(this.domElement,j.CLASS_AUTO_PLACE)),this.parent||s(H,Z.width)),this.__resizeHandler=function(){H.onResizeDebounced()},V.bind(window,"resize",this.__resizeHandler),V.bind(this.__ul,"webkitTransitionEnd",this.__resizeHandler),V.bind(this.__ul,"transitionend",this.__resizeHandler),V.bind(this.__ul,"oTransitionEnd",this.__resizeHandler),this.onResize(),Z.resizable&&e(this),de=function(){Rt&&localStorage.getItem(O(H,"isLocal"))==="true"&&localStorage.setItem(O(H,"gui"),JSON.stringify(H.getSaveObject()))},this.saveToLocalStorageIfPossible=de,Z.parent||function(){var Le=H.getRoot();Le.width+=1,y.defer(function(){Le.width-=1})}()};Ye.toggleHide=function(){Ut=!Ut,y.each(Wt,function(j){j.domElement.style.display=Ut?"none":""})},Ye.CLASS_AUTO_PLACE="a",Ye.CLASS_AUTO_PLACE_CONTAINER="ac",Ye.CLASS_MAIN="main",Ye.CLASS_CONTROLLER_ROW="cr",Ye.CLASS_TOO_TALL="taller-than-window",Ye.CLASS_CLOSED="closed",Ye.CLASS_CLOSE_BUTTON="close-button",Ye.CLASS_CLOSE_TOP="close-top",Ye.CLASS_CLOSE_BOTTOM="close-bottom",Ye.CLASS_DRAG="drag",Ye.DEFAULT_WIDTH=245,Ye.TEXT_CLOSED="Close Controls",Ye.TEXT_OPEN="Open Controls",Ye._keydownHandler=function(j){document.activeElement.type==="text"||j.which!==72&&j.keyCode!==72||Ye.toggleHide()},V.bind(window,"keydown",Ye._keydownHandler,!1),y.extend(Ye.prototype,{add:function(j,P){return k(this,j,P,{factoryArgs:Array.prototype.slice.call(arguments,2)})},addColor:function(j,P){return k(this,j,P,{color:!0})},remove:function(j){this.__ul.removeChild(j.__li),this.__controllers.splice(this.__controllers.indexOf(j),1);var P=this;y.defer(function(){P.onResize()})},destroy:function(){if(this.parent)throw new Error("Only the root GUI should be removed with .destroy(). For subfolders, use gui.removeFolder(folder) instead.");this.autoPlace&&Jt.removeChild(this.domElement);var j=this;y.each(this.__folders,function(P){j.removeFolder(P)}),V.unbind(window,"keydown",Ye._keydownHandler,!1),N(this)},addFolder:function(j){if(this.__folders[j]!==void 0)throw new Error('You already have a folder in this GUI by the name "'+j+'"');var P={name:j,parent:this};P.autoPlace=this.autoPlace,this.load&&this.load.folders&&this.load.folders[j]&&(P.closed=this.load.folders[j].closed,P.load=this.load.folders[j]);var H=new Ye(P);this.__folders[j]=H;var Z=C(this,H.domElement);return V.addClass(Z,"folder"),H},removeFolder:function(j){this.__ul.removeChild(j.domElement.parentElement),delete this.__folders[j.name],this.load&&this.load.folders&&this.load.folders[j.name]&&delete this.load.folders[j.name],N(j);var P=this;y.each(j.__folders,function(H){j.removeFolder(H)}),y.defer(function(){P.onResize()})},open:function(){this.closed=!1},close:function(){this.closed=!0},hide:function(){this.domElement.style.display="none"},show:function(){this.domElement.style.display=""},onResize:function(){var j=this.getRoot();if(j.scrollable){var P=V.getOffset(j.__ul).top,H=0;y.each(j.__ul.childNodes,function(Z){j.autoPlace&&Z===j.__save_row||(H+=V.getHeight(Z))}),window.innerHeight-P-20<H?(V.addClass(j.domElement,Ye.CLASS_TOO_TALL),j.__ul.style.height=window.innerHeight-P-20+"px"):(V.removeClass(j.domElement,Ye.CLASS_TOO_TALL),j.__ul.style.height="auto")}j.__resize_handle&&y.defer(function(){j.__resize_handle.style.height=j.__ul.offsetHeight+"px"}),j.__closeButton&&(j.__closeButton.style.width=j.width+"px")},onResizeDebounced:y.debounce(function(){this.onResize()},50),remember:function(){if(y.isUndefined(Dt)&&((Dt=new _t).domElement.innerHTML=`<div id="dg-save" class="dg dialogue">

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

</div>`),this.parent)throw new Error("You can only call remember on a top level GUI.");var j=this;y.each(Array.prototype.slice.call(arguments),function(P){j.__rememberedObjects.length===0&&G(j),j.__rememberedObjects.indexOf(P)===-1&&j.__rememberedObjects.push(P)}),this.autoPlace&&s(this,this.width)},getRoot:function(){for(var j=this;j.parent;)j=j.parent;return j},getSaveObject:function(){var j=this.load;return j.closed=this.closed,this.__rememberedObjects.length>0&&(j.preset=this.preset,j.remembered||(j.remembered={}),j.remembered[this.preset]=n(this)),j.folders={},y.each(this.__folders,function(P,H){j.folders[H]=P.getSaveObject()}),j},save:function(){this.load.remembered||(this.load.remembered={}),this.load.remembered[this.preset]=n(this),W(this,!1),this.saveToLocalStorageIfPossible()},saveAs:function(j){this.load.remembered||(this.load.remembered={},this.load.remembered[yt]=n(this,!0)),this.load.remembered[j]=n(this),this.preset=j,z(this,j,!0),this.saveToLocalStorageIfPossible()},revert:function(j){y.each(this.__controllers,function(P){this.getRoot().load.remembered?$(j||this.getRoot(),P):P.setValue(P.initialValue),P.__onFinishChange&&P.__onFinishChange.call(P,P.getValue())},this),y.each(this.__folders,function(P){P.revert(P)}),j||W(this.getRoot(),!1)},listen:function(j){var P=this.__listening.length===0;this.__listening.push(j),P&&a(this.__listening)},updateDisplay:function(){y.each(this.__controllers,function(j){j.updateDisplay()}),y.each(this.__folders,function(j){j.updateDisplay()})}});var Zt={Color:Be,math:Q,interpret:F},hn={Controller:rt,BooleanController:he,OptionController:ge,StringController:Y,NumberController:Me,NumberControllerBox:Oe,NumberControllerSlider:_e,FunctionController:me,ColorController:$e},fn={dom:V},kt={GUI:Ye},xt=Ye,pn={color:Zt,controllers:hn,dom:fn,gui:kt,GUI:xt};f.color=Zt,f.controllers=hn,f.dom=fn,f.gui=kt,f.GUI=xt,f.default=pn,Object.defineProperty(f,"__esModule",{value:!0})})},function(be,I){/**
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
 */function l(f){this.table=null,this.prefix="#",this.cleanup=!1,this.revive=!0;for(var _ in f)f.hasOwnProperty(_)&&(this[_]=f[_]);this.refcode=this.prefix+"id",this.origcode=this.prefix+"original",this.buildcode=this.prefix+".",this.valuecode=this.prefix+"v"}be.exports=l,l.GLOBAL=(0,eval)("this"),l.escapeRegExp=function(f){return f.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},l.prototype.Error=function(_){this.message=_||"",this.stack=new Error().stack},l.prototype.Error.prototype=Object.create(Error.prototype),l.prototype.Error.prototype.name="ResurrectError",l.NamespaceResolver=function(f){this.scope=f},l.NamespaceResolver.prototype.getPrototype=function(f){var _=this.scope[f];if(_)return _.prototype;throw new l.prototype.Error("Unknown constructor: "+f)},l.NamespaceResolver.prototype.getName=function(f){var _=f.constructor.name;if(_==null){var v=/^\s*function\s*([A-Za-z0-9_$]*)/;_=v.exec(f.constructor)[1]}if(_===""){var i="Can't serialize objects with anonymous constructors.";throw new l.prototype.Error(i)}else return _==="Object"||_==="Array"?null:_},l.prototype.resolver=new l.NamespaceResolver(l.GLOBAL),l.Node=function(f){var _=document.createElement("div");return _.innerHTML=f,_.firstChild},l.is=function(f){var _="[object "+f+"]";return function(v){return Object.prototype.toString.call(v)===_}},l.isArray=l.is("Array"),l.isString=l.is("String"),l.isBoolean=l.is("Boolean"),l.isNumber=l.is("Number"),l.isFunction=l.is("Function"),l.isDate=l.is("Date"),l.isRegExp=l.is("RegExp"),l.isObject=l.is("Object"),l.isAtom=function(f){return!l.isObject(f)&&!l.isArray(f)},l.isPrimitive=function(f){return f==null||l.isNumber(f)||l.isString(f)||l.isBoolean(f)},l.prototype.ref=function(f){var _={};return f===void 0?_[this.prefix]=-1:_[this.prefix]=f[this.refcode],_},l.prototype.deref=function(f){return this.table[f[this.prefix]]},l.prototype.tag=function(f){if(this.revive){var _=this.resolver.getName(f);if(_){var v=Object.getPrototypeOf(f);if(this.resolver.getPrototype(_)!==v)throw new this.Error("Constructor mismatch!");f[this.prefix]=_}}return f[this.refcode]=this.table.length,this.table.push(f),f[this.refcode]},l.prototype.builder=function(f,_){var v={};return v[this.buildcode]=f,v[this.valuecode]=_,v},l.prototype.build=function(f){var _=f[this.buildcode].split(/\./).reduce(function(S,g){return S[g]},l.GLOBAL),v=[null].concat(f[this.valuecode]),i=_.bind.apply(_,v),x=new i;return l.isPrimitive(x)?x.valueOf():x},l.prototype.decode=function(f){if(this.prefix in f)return this.deref(f);if(this.buildcode in f)return this.build(f);throw new this.Error("Unknown encoding.")},l.prototype.isTagged=function(f){return this.refcode in f&&f[this.refcode]!=null},l.prototype.visit=function(f,_,v){if(l.isAtom(f))return _(f);if(this.isTagged(f))return this.ref(f);var i=null;if(l.isArray(f)){i=[],f[this.refcode]=this.tag(i);for(var x=0;x<f.length;x++)i.push(this.visit(f[x],_,v))}else{i=Object.create(Object.getPrototypeOf(f)),f[this.refcode]=this.tag(i);for(var S in f){var g=f[S];if(f.hasOwnProperty(S)){if(v&&g!==void 0&&(g=v.call(f,S,f[S]),g===void 0))continue;i[S]=this.visit(g,_,v)}}}return i[this.origcode]=f,this.ref(i)},l.prototype.handleAtom=function(f){var _=l.GLOBAL.Node||function(){};if(l.isFunction(f))throw new this.Error("Can't serialize functions.");if(f instanceof _){var v=new XMLSerializer;return this.builder("Resurrect.Node",[v.serializeToString(f)])}else{if(l.isDate(f))return this.builder("Date",[f.toISOString()]);if(l.isRegExp(f)){var i=f.toString().match(/\/(.+)\/([gimy]*)/).slice(1);return this.builder("RegExp",i)}else return f===void 0?this.ref(void 0):l.isNumber(f)&&(isNaN(f)||!isFinite(f))?this.builder("Number",[f.toString()]):f}},l.prototype.replacerWrapper=function(f){var _=new RegExp("^"+l.escapeRegExp(this.prefix));return function(v,i){return _.test(v)?i:f(v,i)}},l.prototype.stringify=function(f,_,v){if(l.isFunction(_))_=this.replacerWrapper(_);else if(l.isArray(_)){var i=_;_=function(g,d){return i.indexOf(g)>=0?d:void 0}}if(l.isAtom(f))return JSON.stringify(this.handleAtom(f),_,v);this.table=[],this.visit(f,this.handleAtom.bind(this),_);for(var x=0;x<this.table.length;x++)this.cleanup?delete this.table[x][this.origcode][this.refcode]:this.table[x][this.origcode][this.refcode]=null,delete this.table[x][this.refcode],delete this.table[x][this.origcode];var S=this.table;return this.table=null,JSON.stringify(S,null,v)},l.prototype.fixPrototype=function(f){if(this.prefix in f){var _=f[this.prefix],v=this.resolver.getPrototype(_);if("__proto__"in f)return f.__proto__=v,this.cleanup&&delete f[this.prefix],f;var i=Object.create(v);for(var x in f)f.hasOwnProperty(x)&&x!==this.prefix&&(i[x]=f[x]);return i}else return f},l.prototype.resurrect=function(f){var _=null,v=JSON.parse(f);if(l.isArray(v)){if(this.table=v,this.revive)for(var i=0;i<this.table.length;i++)this.table[i]=this.fixPrototype(this.table[i]);for(i=0;i<this.table.length;i++){var x=this.table[i];for(var S in x)x.hasOwnProperty(S)&&(l.isAtom(x[S])||(x[S]=this.decode(x[S])))}_=this.table[0]}else l.isObject(v)?(this.table=[],_=this.decode(v)):_=v;return this.table=null,_}},function(be,I){be.exports=`/*
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
`},function(be,I,l){(function(f){var _,v={},i={16:!1,18:!1,17:!1,91:!1},x="all",S={"⇧":16,shift:16,"⌥":18,alt:18,option:18,"⌃":17,ctrl:17,control:17,"⌘":91,command:91},g={backspace:8,tab:9,clear:12,enter:13,return:13,esc:27,escape:27,space:32,left:37,up:38,right:39,down:40,del:46,delete:46,home:36,end:35,pageup:33,pagedown:34,",":188,".":190,"/":191,"`":192,"-":189,"=":187,";":186,"'":222,"[":219,"]":221,"\\":220},d=function(b){return g[b]||b.toUpperCase().charCodeAt(0)},m=[];for(_=1;_<20;_++)g["f"+_]=111+_;function w(b,T){for(var F=b.length;F--;)if(b[F]===T)return F;return-1}function C(b,T){if(b.length!=T.length)return!1;for(var F=0;F<b.length;F++)if(b[F]!==T[F])return!1;return!0}var N={16:"shiftKey",18:"altKey",17:"ctrlKey",91:"metaKey"};function W(b){for(_ in i)i[_]=b[N[_]]}function J(b){var T,F,U,Q,ee,ie;if(T=b.keyCode,w(m,T)==-1&&m.push(T),(T==93||T==224)&&(T=91),T in i){i[T]=!0;for(U in S)S[U]==T&&(O[U]=!0);return}if(W(b),!!O.filter.call(this,b)&&T in v){for(ie=n(),Q=0;Q<v[T].length;Q++)if(F=v[T][Q],F.scope==ie||F.scope=="all"){ee=F.mods.length>0;for(U in i)(!i[U]&&w(F.mods,+U)>-1||i[U]&&w(F.mods,+U)==-1)&&(ee=!1);(F.mods.length==0&&!i[16]&&!i[18]&&!i[17]&&!i[91]||ee)&&F.method(b,F)===!1&&(b.preventDefault?b.preventDefault():b.returnValue=!1,b.stopPropagation&&b.stopPropagation(),b.cancelBubble&&(b.cancelBubble=!0))}}}function $(b){var T=b.keyCode,F,U=w(m,T);if(U>=0&&m.splice(U,1),(T==93||T==224)&&(T=91),T in i){i[T]=!1;for(F in S)S[F]==T&&(O[F]=!1)}}function k(){for(_ in i)i[_]=!1;for(_ in S)O[_]=!1}function O(b,T,F){var U,Q;U=a(b),F===void 0&&(F=T,T="all");for(var ee=0;ee<U.length;ee++)Q=[],b=U[ee].split("+"),b.length>1&&(Q=c(b),b=[b[b.length-1]]),b=b[0],b=d(b),b in v||(v[b]=[]),v[b].push({shortcut:U[ee],scope:T,method:F,key:U[ee],mods:Q})}function z(b,T){var F,U,Q=[],ee,ie,te;for(F=a(b),ie=0;ie<F.length;ie++){if(U=F[ie].split("+"),U.length>1&&(Q=c(U),b=U[U.length-1]),b=d(b),T===void 0&&(T=n()),!v[b])return;for(ee=0;ee<v[b].length;ee++)te=v[b][ee],te.scope===T&&C(te.mods,Q)&&(v[b][ee]={})}}function L(b){return typeof b=="string"&&(b=d(b)),w(m,b)!=-1}function G(){return m.slice(0)}function e(b){var T=(b.target||b.srcElement).tagName;return!(T=="INPUT"||T=="SELECT"||T=="TEXTAREA")}for(_ in S)O[_]=!1;function s(b){x=b||"all"}function n(){return x||"all"}function t(b){var T,F,U;for(T in v)for(F=v[T],U=0;U<F.length;)F[U].scope===b?F.splice(U,1):U++}function a(b){var T;return b=b.replace(/\s/g,""),T=b.split(","),T[T.length-1]==""&&(T[T.length-2]+=","),T}function c(b){for(var T=b.slice(0,b.length-1),F=0;F<T.length;F++)T[F]=S[T[F]];return T}function u(b,T,F){b.addEventListener?b.addEventListener(T,F,!1):b.attachEvent&&b.attachEvent("on"+T,function(){F(window.event)})}u(document,"keydown",function(b){J(b)}),u(document,"keyup",$),u(window,"focus",k);var y=f.key;function E(){var b=f.key;return f.key=y,b}f.key=O,f.key.setScope=s,f.key.getScope=n,f.key.deleteScope=t,f.key.filter=e,f.key.isPressed=L,f.key.getPressedKeyCodes=G,f.key.noConflict=E,f.key.unbind=z,be.exports=O})(this)},function(be,I,l){var f,_,v;/*! jsTree - v3.3.11 - 2020-12-18 - (MIT) */(function(i){_=[l(5)],f=i,v=typeof f=="function"?f.apply(I,_):f,v!==void 0&&(be.exports=v)})(function(i,x){if(!i.jstree){var S=0,g=!1,d=!1,m=!1,w=[],C=i("script:last").attr("src"),N=window.document,W=window.setImmediate,J=window.Promise;!W&&J&&(W=function(e,s){J.resolve(s).then(e)}),i.jstree={version:"3.3.11",defaults:{plugins:[]},plugins:{},path:C&&C.indexOf("/")!==-1?C.replace(/\/[^\/]+$/,""):"",idregex:/[\\:&!^|()\[\]<>@*'+~#";.,=\- \/${}%?`]/g,root:"#"},i.jstree.create=function(e,s){var n=new i.jstree.core(++S),t=s;return s=i.extend(!0,{},i.jstree.defaults,s),t&&t.plugins&&(s.plugins=t.plugins),i.each(s.plugins,function(a,c){a!=="core"&&(n=n.plugin(c,s[c]))}),i(e).data("jstree",n),n.init(e,s),n},i.jstree.destroy=function(){i(".jstree:jstree").jstree("destroy"),i(N).off(".jstree")},i.jstree.core=function(e){this._id=e,this._cnt=0,this._wrk=null,this._data={core:{themes:{name:!1,dots:!1,icons:!1,ellipsis:!1},selected:[],last_error:{},working:!1,worker_queue:[],focused:null}}},i.jstree.reference=function(e){var s=null,n=null;if(!e||!e.id||e.tagName&&e.nodeType||(e=e.id),!n||!n.length)try{n=i(e)}catch{}if(!n||!n.length)try{n=i("#"+e.replace(i.jstree.idregex,"\\$&"))}catch{}return n&&n.length&&(n=n.closest(".jstree")).length&&(n=n.data("jstree"))?s=n:i(".jstree").each(function(){var t=i(this).data("jstree");return t&&t._model.data[e]?(s=t,!1):void 0}),s},i.fn.jstree=function(e){var s=typeof e=="string",n=Array.prototype.slice.call(arguments,1),t=null;return e!==!0||this.length?(this.each(function(){var a=i.jstree.reference(this),c=s&&a?a[e]:null;return t=s&&c?c.apply(a,n):null,a||s||e!==x&&!i.isPlainObject(e)||i.jstree.create(this,e),(a&&!s||e===!0)&&(t=a||!1),t!==null&&t!==x?!1:void 0}),t!==null&&t!==x?t:this):!1},i.expr.pseudos.jstree=i.expr.createPseudo(function(e){return function(s){return i(s).hasClass("jstree")&&i(s).data("jstree")!==x}}),i.jstree.defaults.core={data:!1,strings:!1,check_callback:!1,error:i.noop,animation:200,multiple:!0,themes:{name:!1,url:!1,dir:!1,dots:!0,icons:!0,ellipsis:!1,stripes:!1,variant:!1,responsive:!1},expand_selected_onload:!0,worker:!0,force_text:!1,dblclick_toggle:!0,loaded_state:!1,restore_focus:!0,compute_elements_positions:!1,keyboard:{"ctrl-space":function(e){e.type="click",i(e.currentTarget).trigger(e)},enter:function(e){e.type="click",i(e.currentTarget).trigger(e)},left:function(e){if(e.preventDefault(),this.is_open(e.currentTarget))this.close_node(e.currentTarget);else{var s=this.get_parent(e.currentTarget);s&&s.id!==i.jstree.root&&this.get_node(s,!0).children(".jstree-anchor").focus()}},up:function(e){e.preventDefault();var s=this.get_prev_dom(e.currentTarget);s&&s.length&&s.children(".jstree-anchor").focus()},right:function(e){if(e.preventDefault(),this.is_closed(e.currentTarget))this.open_node(e.currentTarget,function(n){this.get_node(n,!0).children(".jstree-anchor").focus()});else if(this.is_open(e.currentTarget)){var s=this.get_node(e.currentTarget,!0).children(".jstree-children")[0];s&&i(this._firstChild(s)).children(".jstree-anchor").focus()}},down:function(e){e.preventDefault();var s=this.get_next_dom(e.currentTarget);s&&s.length&&s.children(".jstree-anchor").focus()},"*":function(e){this.open_all()},home:function(e){e.preventDefault();var s=this._firstChild(this.get_container_ul()[0]);s&&i(s).children(".jstree-anchor").filter(":visible").focus()},end:function(e){e.preventDefault(),this.element.find(".jstree-anchor").filter(":visible").last().focus()},f2:function(e){e.preventDefault(),this.edit(e.currentTarget)}}},i.jstree.core.prototype={plugin:function(e,s){var n=i.jstree.plugins[e];return n?(this._data[e]={},n.prototype=this,new n(s,this)):this},init:function(e,s){this._model={data:{},changed:[],force_full_redraw:!1,redraw_timeout:!1,default_state:{loaded:!0,opened:!1,selected:!1,disabled:!1}},this._model.data[i.jstree.root]={id:i.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this.element=i(e).addClass("jstree jstree-"+this._id),this.settings=s,this._data.core.ready=!1,this._data.core.loaded=!1,this._data.core.rtl=this.element.css("direction")==="rtl",this.element[this._data.core.rtl?"addClass":"removeClass"]("jstree-rtl"),this.element.attr("role","tree"),this.settings.core.multiple&&this.element.attr("aria-multiselectable",!0),this.element.attr("tabindex")||this.element.attr("tabindex","0"),this.bind(),this.trigger("init"),this._data.core.original_container_html=this.element.find(" > ul > li").clone(!0),this._data.core.original_container_html.find("li").addBack().contents().filter(function(){return this.nodeType===3&&(!this.nodeValue||/^\s+$/.test(this.nodeValue))}).remove(),this.element.html("<ul class='jstree-container-ul jstree-children' role='group'><li id='j"+this._id+"_loading' class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading"),this._data.core.li_height=this.get_container_ul().children("li").first().outerHeight()||24,this._data.core.node=this._create_prototype_node(),this.trigger("loading"),this.load_node(i.jstree.root)},destroy:function(e){if(this.trigger("destroy"),this._wrk)try{window.URL.revokeObjectURL(this._wrk),this._wrk=null}catch{}e||this.element.empty(),this.teardown()},_create_prototype_node:function(){var e=N.createElement("LI"),s,n;return e.setAttribute("role","none"),s=N.createElement("I"),s.className="jstree-icon jstree-ocl",s.setAttribute("role","presentation"),e.appendChild(s),s=N.createElement("A"),s.className="jstree-anchor",s.setAttribute("href","#"),s.setAttribute("tabindex","-1"),s.setAttribute("role","treeitem"),n=N.createElement("I"),n.className="jstree-icon jstree-themeicon",n.setAttribute("role","presentation"),s.appendChild(n),e.appendChild(s),s=n=null,e},_kbevent_to_func:function(e){var s={8:"Backspace",9:"Tab",13:"Enter",19:"Pause",27:"Esc",32:"Space",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"Left",38:"Up",39:"Right",40:"Down",44:"Print",45:"Insert",46:"Delete",96:"Numpad0",97:"Numpad1",98:"Numpad2",99:"Numpad3",100:"Numpad4",101:"Numpad5",102:"Numpad6",103:"Numpad7",104:"Numpad8",105:"Numpad9","-13":"NumpadEnter",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"Numlock",145:"Scrolllock",16:"Shift",17:"Ctrl",18:"Alt",48:"0",49:"1",50:"2",51:"3",52:"4",53:"5",54:"6",55:"7",56:"8",57:"9",59:";",61:"=",65:"a",66:"b",67:"c",68:"d",69:"e",70:"f",71:"g",72:"h",73:"i",74:"j",75:"k",76:"l",77:"m",78:"n",79:"o",80:"p",81:"q",82:"r",83:"s",84:"t",85:"u",86:"v",87:"w",88:"x",89:"y",90:"z",107:"+",109:"-",110:".",186:";",187:"=",188:",",189:"-",190:".",191:"/",192:"`",219:"[",220:"\\",221:"]",222:"'",111:"/",106:"*",173:"-"},n=[];if(e.ctrlKey&&n.push("ctrl"),e.altKey&&n.push("alt"),e.shiftKey&&n.push("shift"),n.push(s[e.which]||e.which),n=n.sort().join("-").toLowerCase(),n==="shift-shift"||n==="ctrl-ctrl"||n==="alt-alt")return null;var t=this.settings.core.keyboard,a,c;for(a in t)if(t.hasOwnProperty(a)&&(c=a,c!=="-"&&c!=="+"&&(c=c.replace("--","-MINUS").replace("+-","-MINUS").replace("++","-PLUS").replace("-+","-PLUS"),c=c.split(/-|\+/).sort().join("-").replace("MINUS","-").replace("PLUS","+").toLowerCase()),c===n))return t[a];return null},teardown:function(){this.unbind(),this.element.removeClass("jstree").removeData("jstree").find("[class^='jstree']").addBack().attr("class",function(){return this.className.replace(/jstree[^ ]*|$/gi,"")}),this.element=null},bind:function(){var e="",s=null,n=0;this.element.on("dblclick.jstree",function(t){if(t.target.tagName&&t.target.tagName.toLowerCase()==="input")return!0;if(N.selection&&N.selection.empty)N.selection.empty();else if(window.getSelection){var a=window.getSelection();try{a.removeAllRanges(),a.collapse()}catch{}}}).on("mousedown.jstree",i.proxy(function(t){t.target===this.element[0]&&(t.preventDefault(),n=+new Date)},this)).on("mousedown.jstree",".jstree-ocl",function(t){t.preventDefault()}).on("click.jstree",".jstree-ocl",i.proxy(function(t){this.toggle_node(t.target)},this)).on("dblclick.jstree",".jstree-anchor",i.proxy(function(t){return t.target.tagName&&t.target.tagName.toLowerCase()==="input"?!0:void(this.settings.core.dblclick_toggle&&this.toggle_node(t.target))},this)).on("click.jstree",".jstree-anchor",i.proxy(function(t){t.preventDefault(),t.currentTarget!==N.activeElement&&i(t.currentTarget).focus(),this.activate_node(t.currentTarget,t)},this)).on("keydown.jstree",".jstree-anchor",i.proxy(function(t){if(t.target.tagName&&t.target.tagName.toLowerCase()==="input")return!0;this._data.core.rtl&&(t.which===37?t.which=39:t.which===39&&(t.which=37));var a=this._kbevent_to_func(t);if(a){var c=a.call(this,t);if(c===!1||c===!0)return c}},this)).on("load_node.jstree",i.proxy(function(t,a){a.status&&(a.node.id!==i.jstree.root||this._data.core.loaded||(this._data.core.loaded=!0,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.trigger("loaded")),this._data.core.ready||setTimeout(i.proxy(function(){if(this.element&&!this.get_container_ul().find(".jstree-loading").length){if(this._data.core.ready=!0,this._data.core.selected.length){if(this.settings.core.expand_selected_onload){var c=[],u,y;for(u=0,y=this._data.core.selected.length;y>u;u++)c=c.concat(this._model.data[this._data.core.selected[u]].parents);for(c=i.vakata.array_unique(c),u=0,y=c.length;y>u;u++)this.open_node(c[u],!1,0)}this.trigger("changed",{action:"ready",selected:this._data.core.selected})}this.trigger("ready")}},this),0))},this)).on("keypress.jstree",i.proxy(function(t){if(t.target.tagName&&t.target.tagName.toLowerCase()==="input")return!0;s&&clearTimeout(s),s=setTimeout(function(){e=""},500);var a=String.fromCharCode(t.which).toLowerCase(),c=this.element.find(".jstree-anchor").filter(":visible"),u=c.index(N.activeElement)||0,y=!1;e+=a,!(e.length>1&&(c.slice(u).each(i.proxy(function(E,b){return i(b).text().toLowerCase().indexOf(e)===0?(i(b).focus(),y=!0,!1):void 0},this)),y||(c.slice(0,u).each(i.proxy(function(E,b){return i(b).text().toLowerCase().indexOf(e)===0?(i(b).focus(),y=!0,!1):void 0},this)),y)))&&new RegExp("^"+a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")+"+$").test(e)&&(c.slice(u+1).each(i.proxy(function(E,b){return i(b).text().toLowerCase().charAt(0)===a?(i(b).focus(),y=!0,!1):void 0},this)),y||c.slice(0,u+1).each(i.proxy(function(E,b){return i(b).text().toLowerCase().charAt(0)===a?(i(b).focus(),y=!0,!1):void 0},this)))},this)).on("init.jstree",i.proxy(function(){var t=this.settings.core.themes;this._data.core.themes.dots=t.dots,this._data.core.themes.stripes=t.stripes,this._data.core.themes.icons=t.icons,this._data.core.themes.ellipsis=t.ellipsis,this.set_theme(t.name||"default",t.url),this.set_theme_variant(t.variant)},this)).on("loading.jstree",i.proxy(function(){this[this._data.core.themes.dots?"show_dots":"hide_dots"](),this[this._data.core.themes.icons?"show_icons":"hide_icons"](),this[this._data.core.themes.stripes?"show_stripes":"hide_stripes"](),this[this._data.core.themes.ellipsis?"show_ellipsis":"hide_ellipsis"]()},this)).on("blur.jstree",".jstree-anchor",i.proxy(function(t){this._data.core.focused=null,i(t.currentTarget).filter(".jstree-hovered").trigger("mouseleave"),this.element.attr("tabindex","0")},this)).on("focus.jstree",".jstree-anchor",i.proxy(function(t){var a=this.get_node(t.currentTarget);a&&a.id&&(this._data.core.focused=a.id),this.element.find(".jstree-hovered").not(t.currentTarget).trigger("mouseleave"),i(t.currentTarget).trigger("mouseenter"),this.element.attr("tabindex","-1")},this)).on("focus.jstree",i.proxy(function(){if(+new Date-n>500&&!this._data.core.focused&&this.settings.core.restore_focus){n=0;var t=this.get_node(this.element.attr("aria-activedescendant"),!0);t&&t.find("> .jstree-anchor").focus()}},this)).on("mouseenter.jstree",".jstree-anchor",i.proxy(function(t){this.hover_node(t.currentTarget)},this)).on("mouseleave.jstree",".jstree-anchor",i.proxy(function(t){this.dehover_node(t.currentTarget)},this))},unbind:function(){this.element.off(".jstree"),i(N).off(".jstree-"+this._id)},trigger:function(e,s){s||(s={}),s.instance=this,this.element.triggerHandler(e.replace(".jstree","")+".jstree",s)},get_container:function(){return this.element},get_container_ul:function(){return this.element.children(".jstree-children").first()},get_string:function(e){var s=this.settings.core.strings;return i.isFunction(s)?s.call(this,e):s&&s[e]?s[e]:e},_firstChild:function(e){for(e=e?e.firstChild:null;e!==null&&e.nodeType!==1;)e=e.nextSibling;return e},_nextSibling:function(e){for(e=e?e.nextSibling:null;e!==null&&e.nodeType!==1;)e=e.nextSibling;return e},_previousSibling:function(e){for(e=e?e.previousSibling:null;e!==null&&e.nodeType!==1;)e=e.previousSibling;return e},get_node:function(e,s){e&&e.id&&(e=e.id),e instanceof i&&e.length&&e[0].id&&(e=e[0].id);var n;try{if(this._model.data[e])e=this._model.data[e];else if(typeof e=="string"&&this._model.data[e.replace(/^#/,"")])e=this._model.data[e.replace(/^#/,"")];else if(typeof e=="string"&&(n=i("#"+e.replace(i.jstree.idregex,"\\$&"),this.element)).length&&this._model.data[n.closest(".jstree-node").attr("id")])e=this._model.data[n.closest(".jstree-node").attr("id")];else if((n=this.element.find(e)).length&&this._model.data[n.closest(".jstree-node").attr("id")])e=this._model.data[n.closest(".jstree-node").attr("id")];else{if(!(n=this.element.find(e)).length||!n.hasClass("jstree"))return!1;e=this._model.data[i.jstree.root]}return s&&(e=e.id===i.jstree.root?this.element:i("#"+e.id.replace(i.jstree.idregex,"\\$&"),this.element)),e}catch{return!1}},get_path:function(e,s,n){if(e=e.parents?e:this.get_node(e),!e||e.id===i.jstree.root||!e.parents)return!1;var t,a,c=[];for(c.push(n?e.id:e.text),t=0,a=e.parents.length;a>t;t++)c.push(n?e.parents[t]:this.get_text(e.parents[t]));return c=c.reverse().slice(1),s?c.join(s):c},get_next_dom:function(e,s){var n;if(e=this.get_node(e,!0),e[0]===this.element[0]){for(n=this._firstChild(this.get_container_ul()[0]);n&&n.offsetHeight===0;)n=this._nextSibling(n);return n?i(n):!1}if(!e||!e.length)return!1;if(s){n=e[0];do n=this._nextSibling(n);while(n&&n.offsetHeight===0);return n?i(n):!1}if(e.hasClass("jstree-open")){for(n=this._firstChild(e.children(".jstree-children")[0]);n&&n.offsetHeight===0;)n=this._nextSibling(n);if(n!==null)return i(n)}n=e[0];do n=this._nextSibling(n);while(n&&n.offsetHeight===0);return n!==null?i(n):e.parentsUntil(".jstree",".jstree-node").nextAll(".jstree-node:visible").first()},get_prev_dom:function(e,s){var n;if(e=this.get_node(e,!0),e[0]===this.element[0]){for(n=this.get_container_ul()[0].lastChild;n&&n.offsetHeight===0;)n=this._previousSibling(n);return n?i(n):!1}if(!e||!e.length)return!1;if(s){n=e[0];do n=this._previousSibling(n);while(n&&n.offsetHeight===0);return n?i(n):!1}n=e[0];do n=this._previousSibling(n);while(n&&n.offsetHeight===0);if(n!==null){for(e=i(n);e.hasClass("jstree-open");)e=e.children(".jstree-children").first().children(".jstree-node:visible:last");return e}return n=e[0].parentNode.parentNode,n&&n.className&&n.className.indexOf("jstree-node")!==-1?i(n):!1},get_parent:function(e){return e=this.get_node(e),e&&e.id!==i.jstree.root?e.parent:!1},get_children_dom:function(e){return e=this.get_node(e,!0),e[0]===this.element[0]?this.get_container_ul().children(".jstree-node"):e&&e.length?e.children(".jstree-children").children(".jstree-node"):!1},is_parent:function(e){return e=this.get_node(e),e&&(e.state.loaded===!1||e.children.length>0)},is_loaded:function(e){return e=this.get_node(e),e&&e.state.loaded},is_loading:function(e){return e=this.get_node(e),e&&e.state&&e.state.loading},is_open:function(e){return e=this.get_node(e),e&&e.state.opened},is_closed:function(e){return e=this.get_node(e),e&&this.is_parent(e)&&!e.state.opened},is_leaf:function(e){return!this.is_parent(e)},load_node:function(e,s){var n,t,a,c,u;if(i.isArray(e))return this._load_nodes(e.slice(),s),!0;if(e=this.get_node(e),!e)return s&&s.call(this,e,!1),!1;if(e.state.loaded){for(e.state.loaded=!1,a=0,c=e.parents.length;c>a;a++)this._model.data[e.parents[a]].children_d=i.vakata.array_filter(this._model.data[e.parents[a]].children_d,function(y){return i.inArray(y,e.children_d)===-1});for(n=0,t=e.children_d.length;t>n;n++)this._model.data[e.children_d[n]].state.selected&&(u=!0),delete this._model.data[e.children_d[n]];u&&(this._data.core.selected=i.vakata.array_filter(this._data.core.selected,function(y){return i.inArray(y,e.children_d)===-1})),e.children=[],e.children_d=[],u&&this.trigger("changed",{action:"load_node",node:e,selected:this._data.core.selected})}return e.state.failed=!1,e.state.loading=!0,this.get_node(e,!0).addClass("jstree-loading").attr("aria-busy",!0),this._load_node(e,i.proxy(function(y){e=this._model.data[e.id],e.state.loading=!1,e.state.loaded=y,e.state.failed=!e.state.loaded;var E=this.get_node(e,!0),b=0,T=0,F=this._model.data,U=!1;for(b=0,T=e.children.length;T>b;b++)if(F[e.children[b]]&&!F[e.children[b]].state.hidden){U=!0;break}e.state.loaded&&E&&E.length&&(E.removeClass("jstree-closed jstree-open jstree-leaf"),U?e.id!=="#"&&E.addClass(e.state.opened?"jstree-open":"jstree-closed"):E.addClass("jstree-leaf")),E.removeClass("jstree-loading").attr("aria-busy",!1),this.trigger("load_node",{node:e,status:y}),s&&s.call(this,e,y)},this)),!0},_load_nodes:function(e,s,n,t){var a=!0,c=function(){this._load_nodes(e,s,!0)},u=this._model.data,y,E,b=[];for(y=0,E=e.length;E>y;y++)u[e[y]]&&(!u[e[y]].state.loaded&&!u[e[y]].state.failed||!n&&t)&&(this.is_loading(e[y])||this.load_node(e[y],c),a=!1);if(a){for(y=0,E=e.length;E>y;y++)u[e[y]]&&u[e[y]].state.loaded&&b.push(e[y]);s&&!s.done&&(s.call(this,b),s.done=!0)}},load_all:function(e,s){if(e||(e=i.jstree.root),e=this.get_node(e),!e)return!1;var n=[],t=this._model.data,a=t[e.id].children_d,c,u;for(e.state&&!e.state.loaded&&n.push(e.id),c=0,u=a.length;u>c;c++)t[a[c]]&&t[a[c]].state&&!t[a[c]].state.loaded&&n.push(a[c]);n.length?this._load_nodes(n,function(){this.load_all(e,s)}):(s&&s.call(this,e),this.trigger("load_all",{node:e}))},_load_node:function(e,s){var n=this.settings.core.data,t,a=function(){return this.nodeType!==3&&this.nodeType!==8};return n?i.isFunction(n)?n.call(this,e,i.proxy(function(c){c===!1?s.call(this,!1):this[typeof c=="string"?"_append_html_data":"_append_json_data"](e,typeof c=="string"?i(i.parseHTML(c)).filter(a):c,function(u){s.call(this,u)})},this)):typeof n=="object"?n.url?(n=i.extend(!0,{},n),i.isFunction(n.url)&&(n.url=n.url.call(this,e)),i.isFunction(n.data)&&(n.data=n.data.call(this,e)),i.ajax(n).done(i.proxy(function(c,u,y){var E=y.getResponseHeader("Content-Type");return E&&E.indexOf("json")!==-1||typeof c=="object"?this._append_json_data(e,c,function(b){s.call(this,b)}):E&&E.indexOf("html")!==-1||typeof c=="string"?this._append_html_data(e,i(i.parseHTML(c)).filter(a),function(b){s.call(this,b)}):(this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:e.id,xhr:y})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1))},this)).fail(i.proxy(function(c){this._data.core.last_error={error:"ajax",plugin:"core",id:"core_04",reason:"Could not load node",data:JSON.stringify({id:e.id,xhr:c})},s.call(this,!1),this.settings.core.error.call(this,this._data.core.last_error)},this))):(t=i.isArray(n)?i.extend(!0,[],n):i.isPlainObject(n)?i.extend(!0,{},n):n,e.id===i.jstree.root?this._append_json_data(e,t,function(c){s.call(this,c)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_05",reason:"Could not load node",data:JSON.stringify({id:e.id})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1))):typeof n=="string"?e.id===i.jstree.root?this._append_html_data(e,i(i.parseHTML(n)).filter(a),function(c){s.call(this,c)}):(this._data.core.last_error={error:"nodata",plugin:"core",id:"core_06",reason:"Could not load node",data:JSON.stringify({id:e.id})},this.settings.core.error.call(this,this._data.core.last_error),s.call(this,!1)):s.call(this,!1):e.id===i.jstree.root?this._append_html_data(e,this._data.core.original_container_html.clone(!0),function(c){s.call(this,c)}):s.call(this,!1)},_node_changed:function(e){e=this.get_node(e),e&&i.inArray(e.id,this._model.changed)===-1&&this._model.changed.push(e.id)},_append_html_data:function(e,s,n){e=this.get_node(e),e.children=[],e.children_d=[];var t=s.is("ul")?s.children():s,a=e.id,c=[],u=[],y=this._model.data,E=y[a],b=this._data.core.selected.length,T,F,U;for(t.each(i.proxy(function(Q,ee){T=this._parse_model_from_html(i(ee),a,E.parents.concat()),T&&(c.push(T),u.push(T),y[T].children_d.length&&(u=u.concat(y[T].children_d)))},this)),E.children=c,E.children_d=u,F=0,U=E.parents.length;U>F;F++)y[E.parents[F]].children_d=y[E.parents[F]].children_d.concat(u);this.trigger("model",{nodes:u,parent:a}),a!==i.jstree.root?(this._node_changed(a),this.redraw()):(this.get_container_ul().children(".jstree-initial-node").remove(),this.redraw(!0)),this._data.core.selected.length!==b&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),n.call(this,!0)},_append_json_data:function(e,s,n,t){if(this.element!==null){e=this.get_node(e),e.children=[],e.children_d=[],s.d&&(s=s.d,typeof s=="string"&&(s=JSON.parse(s))),i.isArray(s)||(s=[s]);var a=null,c={df:this._model.default_state,dat:s,par:e.id,m:this._model.data,t_id:this._id,t_cnt:this._cnt,sel:this._data.core.selected},u=this,y=function(b,T){b.data&&(b=b.data);var F=b.dat,U=b.par,Q=[],ee=[],ie=[],te=b.df,Ee=b.t_id,Ce=b.t_cnt,Se=b.m,Be=Se[U],rt=b.sel,et,R,le,V,he=function(Y,Me,Oe){Oe=Oe?Oe.concat():[],Me&&Oe.unshift(Me);var _e=Y.id.toString(),me,$e,Qe,Ge,ye={id:_e,text:Y.text||"",icon:Y.icon!==T?Y.icon:!0,parent:Me,parents:Oe,children:Y.children||[],children_d:Y.children_d||[],data:Y.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(me in te)te.hasOwnProperty(me)&&(ye.state[me]=te[me]);if(Y&&Y.data&&Y.data.jstree&&Y.data.jstree.icon&&(ye.icon=Y.data.jstree.icon),(ye.icon===T||ye.icon===null||ye.icon==="")&&(ye.icon=!0),Y&&Y.data&&(ye.data=Y.data,Y.data.jstree))for(me in Y.data.jstree)Y.data.jstree.hasOwnProperty(me)&&(ye.state[me]=Y.data.jstree[me]);if(Y&&typeof Y.state=="object")for(me in Y.state)Y.state.hasOwnProperty(me)&&(ye.state[me]=Y.state[me]);if(Y&&typeof Y.li_attr=="object")for(me in Y.li_attr)Y.li_attr.hasOwnProperty(me)&&(ye.li_attr[me]=Y.li_attr[me]);if(ye.li_attr.id||(ye.li_attr.id=_e),Y&&typeof Y.a_attr=="object")for(me in Y.a_attr)Y.a_attr.hasOwnProperty(me)&&(ye.a_attr[me]=Y.a_attr[me]);for(Y&&Y.children&&Y.children===!0&&(ye.state.loaded=!1,ye.children=[],ye.children_d=[]),Se[ye.id]=ye,me=0,$e=ye.children.length;$e>me;me++)Qe=he(Se[ye.children[me]],ye.id,Oe),Ge=Se[Qe],ye.children_d.push(Qe),Ge.children_d.length&&(ye.children_d=ye.children_d.concat(Ge.children_d));return delete Y.data,delete Y.children,Se[ye.id].original=Y,ye.state.selected&&ie.push(ye.id),ye.id},ge=function(Y,Me,Oe){Oe=Oe?Oe.concat():[],Me&&Oe.unshift(Me);var _e=!1,me,$e,Qe,Ge,ye;do _e="j"+Ee+"_"+ ++Ce;while(Se[_e]);ye={id:!1,text:typeof Y=="string"?Y:"",icon:typeof Y=="object"&&Y.icon!==T?Y.icon:!0,parent:Me,parents:Oe,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(me in te)te.hasOwnProperty(me)&&(ye.state[me]=te[me]);if(Y&&Y.id&&(ye.id=Y.id.toString()),Y&&Y.text&&(ye.text=Y.text),Y&&Y.data&&Y.data.jstree&&Y.data.jstree.icon&&(ye.icon=Y.data.jstree.icon),(ye.icon===T||ye.icon===null||ye.icon==="")&&(ye.icon=!0),Y&&Y.data&&(ye.data=Y.data,Y.data.jstree))for(me in Y.data.jstree)Y.data.jstree.hasOwnProperty(me)&&(ye.state[me]=Y.data.jstree[me]);if(Y&&typeof Y.state=="object")for(me in Y.state)Y.state.hasOwnProperty(me)&&(ye.state[me]=Y.state[me]);if(Y&&typeof Y.li_attr=="object")for(me in Y.li_attr)Y.li_attr.hasOwnProperty(me)&&(ye.li_attr[me]=Y.li_attr[me]);if(ye.li_attr.id&&!ye.id&&(ye.id=ye.li_attr.id.toString()),ye.id||(ye.id=_e),ye.li_attr.id||(ye.li_attr.id=ye.id),Y&&typeof Y.a_attr=="object")for(me in Y.a_attr)Y.a_attr.hasOwnProperty(me)&&(ye.a_attr[me]=Y.a_attr[me]);if(Y&&Y.children&&Y.children.length){for(me=0,$e=Y.children.length;$e>me;me++)Qe=ge(Y.children[me],ye.id,Oe),Ge=Se[Qe],ye.children.push(Qe),Ge.children_d.length&&(ye.children_d=ye.children_d.concat(Ge.children_d));ye.children_d=ye.children_d.concat(ye.children)}return Y&&Y.children&&Y.children===!0&&(ye.state.loaded=!1,ye.children=[],ye.children_d=[]),delete Y.data,delete Y.children,ye.original=Y,Se[ye.id]=ye,ye.state.selected&&ie.push(ye.id),ye.id};if(F.length&&F[0].id!==T&&F[0].parent!==T){for(R=0,le=F.length;le>R;R++)F[R].children||(F[R].children=[]),F[R].state||(F[R].state={}),Se[F[R].id.toString()]=F[R];for(R=0,le=F.length;le>R;R++)Se[F[R].parent.toString()]?(Se[F[R].parent.toString()].children.push(F[R].id.toString()),Be.children_d.push(F[R].id.toString())):typeof u<"u"&&(u._data.core.last_error={error:"parse",plugin:"core",id:"core_07",reason:"Node with invalid parent",data:JSON.stringify({id:F[R].id.toString(),parent:F[R].parent.toString()})},u.settings.core.error.call(u,u._data.core.last_error));for(R=0,le=Be.children.length;le>R;R++)et=he(Se[Be.children[R]],U,Be.parents.concat()),ee.push(et),Se[et].children_d.length&&(ee=ee.concat(Se[et].children_d));for(R=0,le=Be.parents.length;le>R;R++)Se[Be.parents[R]].children_d=Se[Be.parents[R]].children_d.concat(ee);V={cnt:Ce,mod:Se,sel:rt,par:U,dpc:ee,add:ie}}else{for(R=0,le=F.length;le>R;R++)et=ge(F[R],U,Be.parents.concat()),et&&(Q.push(et),ee.push(et),Se[et].children_d.length&&(ee=ee.concat(Se[et].children_d)));for(Be.children=Q,Be.children_d=ee,R=0,le=Be.parents.length;le>R;R++)Se[Be.parents[R]].children_d=Se[Be.parents[R]].children_d.concat(ee);V={cnt:Ce,mod:Se,sel:rt,par:U,dpc:ee,add:ie}}return typeof window<"u"&&typeof window.document<"u"?V:void postMessage(V)},E=function(b,T){if(this.element!==null){this._cnt=b.cnt;var F,U=this._model.data;for(F in U)U.hasOwnProperty(F)&&U[F].state&&U[F].state.loading&&b.mod[F]&&(b.mod[F].state.loading=!0);if(this._model.data=b.mod,T){var Q,ee=b.add,ie=b.sel,te=this._data.core.selected.slice();if(U=this._model.data,ie.length!==te.length||i.vakata.array_unique(ie.concat(te)).length!==ie.length){for(F=0,Q=ie.length;Q>F;F++)i.inArray(ie[F],ee)===-1&&i.inArray(ie[F],te)===-1&&(U[ie[F]].state.selected=!1);for(F=0,Q=te.length;Q>F;F++)i.inArray(te[F],ie)===-1&&(U[te[F]].state.selected=!0)}}b.add.length&&(this._data.core.selected=this._data.core.selected.concat(b.add)),this.trigger("model",{nodes:b.dpc,parent:b.par}),b.par!==i.jstree.root?(this._node_changed(b.par),this.redraw()):this.redraw(!0),b.add.length&&this.trigger("changed",{action:"model",selected:this._data.core.selected}),!T&&W?W(function(){n.call(u,!0)}):n.call(u,!0)}};if(this.settings.core.worker&&window.Blob&&window.URL&&window.Worker)try{this._wrk===null&&(this._wrk=window.URL.createObjectURL(new window.Blob(["self.onmessage = "+y.toString()],{type:"text/javascript"}))),!this._data.core.working||t?(this._data.core.working=!0,a=new window.Worker(this._wrk),a.onmessage=i.proxy(function(b){E.call(this,b.data,!0);try{a.terminate(),a=null}catch{}this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1},this),c.par?a.postMessage(c):this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1):this._data.core.worker_queue.push([e,s,n,!0])}catch{E.call(this,y(c),!1),this._data.core.worker_queue.length?this._append_json_data.apply(this,this._data.core.worker_queue.shift()):this._data.core.working=!1}else E.call(this,y(c),!1)}},_parse_model_from_html:function(e,s,n){n=n?[].concat(n):[],s&&n.unshift(s);var t,a,c=this._model.data,u={id:!1,text:!1,icon:!0,parent:s,parents:n,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1},y,E,b;for(y in this._model.default_state)this._model.default_state.hasOwnProperty(y)&&(u.state[y]=this._model.default_state[y]);if(E=i.vakata.attributes(e,!0),i.each(E,function(T,F){return F=i.vakata.trim(F),F.length?(u.li_attr[T]=F,void(T==="id"&&(u.id=F.toString()))):!0}),E=e.children("a").first(),E.length&&(E=i.vakata.attributes(E,!0),i.each(E,function(T,F){F=i.vakata.trim(F),F.length&&(u.a_attr[T]=F)})),E=e.children("a").first().length?e.children("a").first().clone():e.clone(),E.children("ins, i, ul").remove(),E=E.html(),E=i("<div></div>").html(E),u.text=this.settings.core.force_text?E.text():E.html(),E=e.data(),u.data=E?i.extend(!0,{},E):null,u.state.opened=e.hasClass("jstree-open"),u.state.selected=e.children("a").hasClass("jstree-clicked"),u.state.disabled=e.children("a").hasClass("jstree-disabled"),u.data&&u.data.jstree)for(y in u.data.jstree)u.data.jstree.hasOwnProperty(y)&&(u.state[y]=u.data.jstree[y]);E=e.children("a").children(".jstree-themeicon"),E.length&&(u.icon=E.hasClass("jstree-themeicon-hidden")?!1:E.attr("rel")),u.state.icon!==x&&(u.icon=u.state.icon),(u.icon===x||u.icon===null||u.icon==="")&&(u.icon=!0),E=e.children("ul").children("li");do b="j"+this._id+"_"+ ++this._cnt;while(c[b]);return u.id=u.li_attr.id?u.li_attr.id.toString():b,E.length?(E.each(i.proxy(function(T,F){t=this._parse_model_from_html(i(F),u.id,n),a=this._model.data[t],u.children.push(t),a.children_d.length&&(u.children_d=u.children_d.concat(a.children_d))},this)),u.children_d=u.children_d.concat(u.children)):e.hasClass("jstree-closed")&&(u.state.loaded=!1),u.li_attr.class&&(u.li_attr.class=u.li_attr.class.replace("jstree-closed","").replace("jstree-open","")),u.a_attr.class&&(u.a_attr.class=u.a_attr.class.replace("jstree-clicked","").replace("jstree-disabled","")),c[u.id]=u,u.state.selected&&this._data.core.selected.push(u.id),u.id},_parse_model_from_flat_json:function(e,s,n){n=n?n.concat():[],s&&n.unshift(s);var t=e.id.toString(),a=this._model.data,c=this._model.default_state,u,y,E,b,T={id:t,text:e.text||"",icon:e.icon!==x?e.icon:!0,parent:s,parents:n,children:e.children||[],children_d:e.children_d||[],data:e.data,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(u in c)c.hasOwnProperty(u)&&(T.state[u]=c[u]);if(e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(T.icon=e.data.jstree.icon),(T.icon===x||T.icon===null||T.icon==="")&&(T.icon=!0),e&&e.data&&(T.data=e.data,e.data.jstree))for(u in e.data.jstree)e.data.jstree.hasOwnProperty(u)&&(T.state[u]=e.data.jstree[u]);if(e&&typeof e.state=="object")for(u in e.state)e.state.hasOwnProperty(u)&&(T.state[u]=e.state[u]);if(e&&typeof e.li_attr=="object")for(u in e.li_attr)e.li_attr.hasOwnProperty(u)&&(T.li_attr[u]=e.li_attr[u]);if(T.li_attr.id||(T.li_attr.id=t),e&&typeof e.a_attr=="object")for(u in e.a_attr)e.a_attr.hasOwnProperty(u)&&(T.a_attr[u]=e.a_attr[u]);for(e&&e.children&&e.children===!0&&(T.state.loaded=!1,T.children=[],T.children_d=[]),a[T.id]=T,u=0,y=T.children.length;y>u;u++)E=this._parse_model_from_flat_json(a[T.children[u]],T.id,n),b=a[E],T.children_d.push(E),b.children_d.length&&(T.children_d=T.children_d.concat(b.children_d));return delete e.data,delete e.children,a[T.id].original=e,T.state.selected&&this._data.core.selected.push(T.id),T.id},_parse_model_from_json:function(e,s,n){n=n?n.concat():[],s&&n.unshift(s);var t=!1,a,c,u,y,E=this._model.data,b=this._model.default_state,T;do t="j"+this._id+"_"+ ++this._cnt;while(E[t]);T={id:!1,text:typeof e=="string"?e:"",icon:typeof e=="object"&&e.icon!==x?e.icon:!0,parent:s,parents:n,children:[],children_d:[],data:null,state:{},li_attr:{id:!1},a_attr:{href:"#"},original:!1};for(a in b)b.hasOwnProperty(a)&&(T.state[a]=b[a]);if(e&&e.id&&(T.id=e.id.toString()),e&&e.text&&(T.text=e.text),e&&e.data&&e.data.jstree&&e.data.jstree.icon&&(T.icon=e.data.jstree.icon),(T.icon===x||T.icon===null||T.icon==="")&&(T.icon=!0),e&&e.data&&(T.data=e.data,e.data.jstree))for(a in e.data.jstree)e.data.jstree.hasOwnProperty(a)&&(T.state[a]=e.data.jstree[a]);if(e&&typeof e.state=="object")for(a in e.state)e.state.hasOwnProperty(a)&&(T.state[a]=e.state[a]);if(e&&typeof e.li_attr=="object")for(a in e.li_attr)e.li_attr.hasOwnProperty(a)&&(T.li_attr[a]=e.li_attr[a]);if(T.li_attr.id&&!T.id&&(T.id=T.li_attr.id.toString()),T.id||(T.id=t),T.li_attr.id||(T.li_attr.id=T.id),e&&typeof e.a_attr=="object")for(a in e.a_attr)e.a_attr.hasOwnProperty(a)&&(T.a_attr[a]=e.a_attr[a]);if(e&&e.children&&e.children.length){for(a=0,c=e.children.length;c>a;a++)u=this._parse_model_from_json(e.children[a],T.id,n),y=E[u],T.children.push(u),y.children_d.length&&(T.children_d=T.children_d.concat(y.children_d));T.children_d=T.children.concat(T.children_d)}return e&&e.children&&e.children===!0&&(T.state.loaded=!1,T.children=[],T.children_d=[]),delete e.data,delete e.children,T.original=e,E[T.id]=T,T.state.selected&&this._data.core.selected.push(T.id),T.id},_redraw:function(){var e=this._model.force_full_redraw?this._model.data[i.jstree.root].children.concat([]):this._model.changed.concat([]),s=N.createElement("UL"),n,t,a,c=this._data.core.focused;for(t=0,a=e.length;a>t;t++)n=this.redraw_node(e[t],!0,this._model.force_full_redraw),n&&this._model.force_full_redraw&&s.appendChild(n);this._model.force_full_redraw&&(s.className=this.get_container_ul()[0].className,s.setAttribute("role","group"),this.element.empty().append(s)),c!==null&&this.settings.core.restore_focus&&(n=this.get_node(c,!0),n&&n.length&&n.children(".jstree-anchor")[0]!==N.activeElement?n.children(".jstree-anchor").focus():this._data.core.focused=null),this._model.force_full_redraw=!1,this._model.changed=[],this.trigger("redraw",{nodes:e})},redraw:function(e){e&&(this._model.force_full_redraw=!0),this._redraw()},draw_children:function(e){var s=this.get_node(e),n=!1,t=!1,a=!1,c=N;if(!s)return!1;if(s.id===i.jstree.root)return this.redraw(!0);if(e=this.get_node(e,!0),!e||!e.length)return!1;if(e.children(".jstree-children").remove(),e=e[0],s.children.length&&s.state.loaded){for(a=c.createElement("UL"),a.setAttribute("role","group"),a.className="jstree-children",n=0,t=s.children.length;t>n;n++)a.appendChild(this.redraw_node(s.children[n],!0,!0));e.appendChild(a)}},redraw_node:function(e,s,n,t){var a=this.get_node(e),c=!1,u=!1,y=!1,E=!1,b=!1,T=!1,F="",U=N,Q=this._model.data,ee=!1,ie=null,te=0,Ee=0,Ce=!1,Se=!1;if(!a)return!1;if(a.id===i.jstree.root)return this.redraw(!0);if(s=s||a.children.length===0,e=N.querySelector?this.element[0].querySelector("#"+("0123456789".indexOf(a.id[0])!==-1?"\\3"+a.id[0]+" "+a.id.substr(1).replace(i.jstree.idregex,"\\$&"):a.id.replace(i.jstree.idregex,"\\$&"))):N.getElementById(a.id))e=i(e),n||(c=e.parent().parent()[0],c===this.element[0]&&(c=null),u=e.index()),s||!a.children.length||e.children(".jstree-children").length||(s=!0),s||(y=e.children(".jstree-children")[0]),ee=e.children(".jstree-anchor")[0]===N.activeElement,e.remove();else if(s=!0,!n){if(c=a.parent!==i.jstree.root?i("#"+a.parent.replace(i.jstree.idregex,"\\$&"),this.element)[0]:null,!(c===null||c&&Q[a.parent].state.opened))return!1;u=i.inArray(a.id,c===null?Q[i.jstree.root].children:Q[a.parent].children)}e=this._data.core.node.cloneNode(!0),F="jstree-node ";for(E in a.li_attr)if(a.li_attr.hasOwnProperty(E)){if(E==="id")continue;E!=="class"?e.setAttribute(E,a.li_attr[E]):F+=a.li_attr[E]}for(a.a_attr.id||(a.a_attr.id=a.id+"_anchor"),e.childNodes[1].setAttribute("aria-selected",!!a.state.selected),e.childNodes[1].setAttribute("aria-level",a.parents.length),this.settings.core.compute_elements_positions&&(e.childNodes[1].setAttribute("aria-setsize",Q[a.parent].children.length),e.childNodes[1].setAttribute("aria-posinset",Q[a.parent].children.indexOf(a.id)+1)),a.state.disabled&&e.childNodes[1].setAttribute("aria-disabled",!0),E=0,b=a.children.length;b>E;E++)if(!Q[a.children[E]].state.hidden){Ce=!0;break}if(a.parent!==null&&Q[a.parent]&&!a.state.hidden&&(E=i.inArray(a.id,Q[a.parent].children),Se=a.id,E!==-1))for(E++,b=Q[a.parent].children.length;b>E&&(Q[Q[a.parent].children[E]].state.hidden||(Se=Q[a.parent].children[E]),Se===a.id);E++);a.state.hidden&&(F+=" jstree-hidden"),a.state.loading&&(F+=" jstree-loading"),a.state.loaded&&!Ce?F+=" jstree-leaf":(F+=a.state.opened&&a.state.loaded?" jstree-open":" jstree-closed",e.childNodes[1].setAttribute("aria-expanded",a.state.opened&&a.state.loaded)),Se===a.id&&(F+=" jstree-last"),e.id=a.id,e.className=F,F=(a.state.selected?" jstree-clicked":"")+(a.state.disabled?" jstree-disabled":"");for(b in a.a_attr)if(a.a_attr.hasOwnProperty(b)){if(b==="href"&&a.a_attr[b]==="#")continue;b!=="class"?e.childNodes[1].setAttribute(b,a.a_attr[b]):F+=" "+a.a_attr[b]}if(F.length&&(e.childNodes[1].className="jstree-anchor "+F),(a.icon&&a.icon!==!0||a.icon===!1)&&(a.icon===!1?e.childNodes[1].childNodes[0].className+=" jstree-themeicon-hidden":a.icon.indexOf("/")===-1&&a.icon.indexOf(".")===-1?e.childNodes[1].childNodes[0].className+=" "+a.icon+" jstree-themeicon-custom":(e.childNodes[1].childNodes[0].style.backgroundImage='url("'+a.icon+'")',e.childNodes[1].childNodes[0].style.backgroundPosition="center center",e.childNodes[1].childNodes[0].style.backgroundSize="auto",e.childNodes[1].childNodes[0].className+=" jstree-themeicon-custom")),this.settings.core.force_text?e.childNodes[1].appendChild(U.createTextNode(a.text)):e.childNodes[1].innerHTML+=a.text,s&&a.children.length&&(a.state.opened||t)&&a.state.loaded){for(T=U.createElement("UL"),T.setAttribute("role","group"),T.className="jstree-children",E=0,b=a.children.length;b>E;E++)T.appendChild(this.redraw_node(a.children[E],s,!0));e.appendChild(T)}if(y&&e.appendChild(y),!n){for(c||(c=this.element[0]),E=0,b=c.childNodes.length;b>E;E++)if(c.childNodes[E]&&c.childNodes[E].className&&c.childNodes[E].className.indexOf("jstree-children")!==-1){ie=c.childNodes[E];break}ie||(ie=U.createElement("UL"),ie.setAttribute("role","group"),ie.className="jstree-children",c.appendChild(ie)),c=ie,u<c.childNodes.length?c.insertBefore(e,c.childNodes[u]):c.appendChild(e),ee&&(te=this.element[0].scrollTop,Ee=this.element[0].scrollLeft,e.childNodes[1].focus(),this.element[0].scrollTop=te,this.element[0].scrollLeft=Ee)}return a.state.opened&&!a.state.loaded&&(a.state.opened=!1,setTimeout(i.proxy(function(){this.open_node(a.id,!1,0)},this),0)),e},open_node:function(e,s,n){var t,a,c,u;if(i.isArray(e)){for(e=e.slice(),t=0,a=e.length;a>t;t++)this.open_node(e[t],s,n);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(n=n===x?this.settings.core.animation:n,this.is_closed(e)?this.is_loaded(e)?(c=this.get_node(e,!0),u=this,c.length&&(n&&c.children(".jstree-children").length&&c.children(".jstree-children").stop(!0,!0),e.children.length&&!this._firstChild(c.children(".jstree-children")[0])&&this.draw_children(e),n?(this.trigger("before_open",{node:e}),c.children(".jstree-children").css("display","none").end().removeClass("jstree-closed").addClass("jstree-open").children(".jstree-anchor").attr("aria-expanded",!0).end().children(".jstree-children").stop(!0,!0).slideDown(n,function(){this.style.display="",u.element&&u.trigger("after_open",{node:e})})):(this.trigger("before_open",{node:e}),c[0].className=c[0].className.replace("jstree-closed","jstree-open"),c[0].childNodes[1].setAttribute("aria-expanded",!0))),e.state.opened=!0,s&&s.call(this,e,!0),c.length||this.trigger("before_open",{node:e}),this.trigger("open_node",{node:e}),n&&c.length||this.trigger("after_open",{node:e}),!0):this.is_loading(e)?setTimeout(i.proxy(function(){this.open_node(e,s,n)},this),500):void this.load_node(e,function(y,E){return E?this.open_node(y,s,n):s?s.call(this,y,!1):!1}):(s&&s.call(this,e,!1),!1)):!1},_open_to:function(e){if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;var s,n,t=e.parents;for(s=0,n=t.length;n>s;s+=1)s!==i.jstree.root&&this.open_node(t[s],!1,0);return i("#"+e.id.replace(i.jstree.idregex,"\\$&"),this.element)},close_node:function(e,s){var n,t,a,c;if(i.isArray(e)){for(e=e.slice(),n=0,t=e.length;t>n;n++)this.close_node(e[n],s);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?this.is_closed(e)?!1:(s=s===x?this.settings.core.animation:s,a=this,c=this.get_node(e,!0),e.state.opened=!1,this.trigger("close_node",{node:e}),void(c.length?s?c.children(".jstree-children").attr("style","display:block !important").end().removeClass("jstree-open").addClass("jstree-closed").children(".jstree-anchor").attr("aria-expanded",!1).end().children(".jstree-children").stop(!0,!0).slideUp(s,function(){this.style.display="",c.children(".jstree-children").remove(),a.element&&a.trigger("after_close",{node:e})}):(c[0].className=c[0].className.replace("jstree-open","jstree-closed"),c.children(".jstree-anchor").attr("aria-expanded",!1),c.children(".jstree-children").remove(),this.trigger("after_close",{node:e})):this.trigger("after_close",{node:e}))):!1},toggle_node:function(e){var s,n;if(i.isArray(e)){for(e=e.slice(),s=0,n=e.length;n>s;s++)this.toggle_node(e[s]);return!0}return this.is_closed(e)?this.open_node(e):this.is_open(e)?this.close_node(e):void 0},open_all:function(e,s,n){if(e||(e=i.jstree.root),e=this.get_node(e),!e)return!1;var t=e.id===i.jstree.root?this.get_container_ul():this.get_node(e,!0),a,c,u;if(!t.length){for(a=0,c=e.children_d.length;c>a;a++)this.is_closed(this._model.data[e.children_d[a]])&&(this._model.data[e.children_d[a]].state.opened=!0);return this.trigger("open_all",{node:e})}n=n||t,u=this,t=this.is_closed(e)?t.find(".jstree-closed").addBack():t.find(".jstree-closed"),t.each(function(){u.open_node(this,function(y,E){E&&this.is_parent(y)&&this.open_all(y,s,n)},s||0)}),n.find(".jstree-closed").length===0&&this.trigger("open_all",{node:this.get_node(n)})},close_all:function(e,s){if(e||(e=i.jstree.root),e=this.get_node(e),!e)return!1;var n=e.id===i.jstree.root?this.get_container_ul():this.get_node(e,!0),t=this,a,c;for(n.length&&(n=this.is_open(e)?n.find(".jstree-open").addBack():n.find(".jstree-open"),i(n.get().reverse()).each(function(){t.close_node(this,s||0)})),a=0,c=e.children_d.length;c>a;a++)this._model.data[e.children_d[a]].state.opened=!1;this.trigger("close_all",{node:e})},is_disabled:function(e){return e=this.get_node(e),e&&e.state&&e.state.disabled},enable_node:function(e){var s,n;if(i.isArray(e)){for(e=e.slice(),s=0,n=e.length;n>s;s++)this.enable_node(e[s]);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(e.state.disabled=!1,this.get_node(e,!0).children(".jstree-anchor").removeClass("jstree-disabled").attr("aria-disabled",!1),void this.trigger("enable_node",{node:e})):!1},disable_node:function(e){var s,n;if(i.isArray(e)){for(e=e.slice(),s=0,n=e.length;n>s;s++)this.disable_node(e[s]);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(e.state.disabled=!0,this.get_node(e,!0).children(".jstree-anchor").addClass("jstree-disabled").attr("aria-disabled",!0),void this.trigger("disable_node",{node:e})):!1},is_hidden:function(e){return e=this.get_node(e),e.state.hidden===!0},hide_node:function(e,s){var n,t;if(i.isArray(e)){for(e=e.slice(),n=0,t=e.length;t>n;n++)this.hide_node(e[n],!0);return s||this.redraw(),!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?void(e.state.hidden||(e.state.hidden=!0,this._node_changed(e.parent),s||this.redraw(),this.trigger("hide_node",{node:e}))):!1},show_node:function(e,s){var n,t;if(i.isArray(e)){for(e=e.slice(),n=0,t=e.length;t>n;n++)this.show_node(e[n],!0);return s||this.redraw(),!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?void(e.state.hidden&&(e.state.hidden=!1,this._node_changed(e.parent),s||this.redraw(),this.trigger("show_node",{node:e}))):!1},hide_all:function(e){var s,n=this._model.data,t=[];for(s in n)n.hasOwnProperty(s)&&s!==i.jstree.root&&!n[s].state.hidden&&(n[s].state.hidden=!0,t.push(s));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("hide_all",{nodes:t}),t},show_all:function(e){var s,n=this._model.data,t=[];for(s in n)n.hasOwnProperty(s)&&s!==i.jstree.root&&n[s].state.hidden&&(n[s].state.hidden=!1,t.push(s));return this._model.force_full_redraw=!0,e||this.redraw(),this.trigger("show_all",{nodes:t}),t},activate_node:function(e,s){if(this.is_disabled(e))return!1;if(s&&typeof s=="object"||(s={}),this._data.core.last_clicked=this._data.core.last_clicked&&this._data.core.last_clicked.id!==x?this.get_node(this._data.core.last_clicked.id):null,this._data.core.last_clicked&&!this._data.core.last_clicked.state.selected&&(this._data.core.last_clicked=null),!this._data.core.last_clicked&&this._data.core.selected.length&&(this._data.core.last_clicked=this.get_node(this._data.core.selected[this._data.core.selected.length-1])),this.settings.core.multiple&&(s.metaKey||s.ctrlKey||s.shiftKey)&&(!s.shiftKey||this._data.core.last_clicked&&this.get_parent(e)&&this.get_parent(e)===this._data.core.last_clicked.parent))if(s.shiftKey){var n=this.get_node(e).id,t=this._data.core.last_clicked.id,a=this.get_node(this._data.core.last_clicked.parent).children,c=!1,u,y;for(u=0,y=a.length;y>u;u+=1)a[u]===n&&(c=!c),a[u]===t&&(c=!c),this.is_disabled(a[u])||!c&&a[u]!==n&&a[u]!==t?this.deselect_node(a[u],!0,s):this.is_hidden(a[u])||this.select_node(a[u],!0,!1,s);this.trigger("changed",{action:"select_node",node:this.get_node(e),selected:this._data.core.selected,event:s})}else this.is_selected(e)?this.deselect_node(e,!1,s):this.select_node(e,!1,!1,s);else!this.settings.core.multiple&&(s.metaKey||s.ctrlKey||s.shiftKey)&&this.is_selected(e)?this.deselect_node(e,!1,s):(this.deselect_all(!0),this.select_node(e,!1,!1,s),this._data.core.last_clicked=this.get_node(e));this.trigger("activate_node",{node:this.get_node(e),event:s})},hover_node:function(e){if(e=this.get_node(e,!0),!e||!e.length||e.children(".jstree-hovered").length)return!1;var s=this.element.find(".jstree-hovered"),n=this.element;s&&s.length&&this.dehover_node(s),e.children(".jstree-anchor").addClass("jstree-hovered"),this.trigger("hover_node",{node:this.get_node(e)}),setTimeout(function(){n.attr("aria-activedescendant",e[0].id)},0)},dehover_node:function(e){return e=this.get_node(e,!0),e&&e.length&&e.children(".jstree-hovered").length?(e.children(".jstree-anchor").removeClass("jstree-hovered"),void this.trigger("dehover_node",{node:this.get_node(e)})):!1},select_node:function(e,s,n,t){var a,c,u;if(i.isArray(e)){for(e=e.slice(),c=0,u=e.length;u>c;c++)this.select_node(e[c],s,n,t);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(a=this.get_node(e,!0),void(e.state.selected||(e.state.selected=!0,this._data.core.selected.push(e.id),n||(a=this._open_to(e)),a&&a.length&&a.children(".jstree-anchor").addClass("jstree-clicked").attr("aria-selected",!0),this.trigger("select_node",{node:e,selected:this._data.core.selected,event:t}),s||this.trigger("changed",{action:"select_node",node:e,selected:this._data.core.selected,event:t})))):!1},deselect_node:function(e,s,n){var t,a,c;if(i.isArray(e)){for(e=e.slice(),t=0,a=e.length;a>t;t++)this.deselect_node(e[t],s,n);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(c=this.get_node(e,!0),void(e.state.selected&&(e.state.selected=!1,this._data.core.selected=i.vakata.array_remove_item(this._data.core.selected,e.id),c.length&&c.children(".jstree-anchor").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_node",{node:e,selected:this._data.core.selected,event:n}),s||this.trigger("changed",{action:"deselect_node",node:e,selected:this._data.core.selected,event:n})))):!1},select_all:function(e){var s=this._data.core.selected.concat([]),n,t;for(this._data.core.selected=this._model.data[i.jstree.root].children_d.concat(),n=0,t=this._data.core.selected.length;t>n;n++)this._model.data[this._data.core.selected[n]]&&(this._model.data[this._data.core.selected[n]].state.selected=!0);this.redraw(!0),this.trigger("select_all",{selected:this._data.core.selected}),e||this.trigger("changed",{action:"select_all",selected:this._data.core.selected,old_selection:s})},deselect_all:function(e){var s=this._data.core.selected.concat([]),n,t;for(n=0,t=this._data.core.selected.length;t>n;n++)this._model.data[this._data.core.selected[n]]&&(this._model.data[this._data.core.selected[n]].state.selected=!1);this._data.core.selected=[],this.element.find(".jstree-clicked").removeClass("jstree-clicked").attr("aria-selected",!1),this.trigger("deselect_all",{selected:this._data.core.selected,node:s}),e||this.trigger("changed",{action:"deselect_all",selected:this._data.core.selected,old_selection:s})},is_selected:function(e){return e=this.get_node(e),e&&e.id!==i.jstree.root?e.state.selected:!1},get_selected:function(e){return e?i.map(this._data.core.selected,i.proxy(function(s){return this.get_node(s)},this)):this._data.core.selected.slice()},get_top_selected:function(e){var s=this.get_selected(!0),n={},t,a,c,u;for(t=0,a=s.length;a>t;t++)n[s[t].id]=s[t];for(t=0,a=s.length;a>t;t++)for(c=0,u=s[t].children_d.length;u>c;c++)n[s[t].children_d[c]]&&delete n[s[t].children_d[c]];s=[];for(t in n)n.hasOwnProperty(t)&&s.push(t);return e?i.map(s,i.proxy(function(y){return this.get_node(y)},this)):s},get_bottom_selected:function(e){var s=this.get_selected(!0),n=[],t,a;for(t=0,a=s.length;a>t;t++)s[t].children.length||n.push(s[t].id);return e?i.map(n,i.proxy(function(c){return this.get_node(c)},this)):n},get_state:function(){var e={core:{open:[],loaded:[],scroll:{left:this.element.scrollLeft(),top:this.element.scrollTop()},selected:[]}},s;for(s in this._model.data)this._model.data.hasOwnProperty(s)&&s!==i.jstree.root&&(this._model.data[s].state.loaded&&this.settings.core.loaded_state&&e.core.loaded.push(s),this._model.data[s].state.opened&&e.core.open.push(s),this._model.data[s].state.selected&&e.core.selected.push(s));return e},set_state:function(e,s){if(e){if(e.core&&e.core.selected&&e.core.initial_selection===x&&(e.core.initial_selection=this._data.core.selected.concat([]).sort().join(",")),e.core){var n,t;if(e.core.loaded)return this.settings.core.loaded_state&&i.isArray(e.core.loaded)&&e.core.loaded.length?this._load_nodes(e.core.loaded,function(a){delete e.core.loaded,this.set_state(e,s)}):(delete e.core.loaded,this.set_state(e,s)),!1;if(e.core.open)return i.isArray(e.core.open)&&e.core.open.length?this._load_nodes(e.core.open,function(a){this.open_node(a,!1,0),delete e.core.open,this.set_state(e,s)}):(delete e.core.open,this.set_state(e,s)),!1;if(e.core.scroll)return e.core.scroll&&e.core.scroll.left!==x&&this.element.scrollLeft(e.core.scroll.left),e.core.scroll&&e.core.scroll.top!==x&&this.element.scrollTop(e.core.scroll.top),delete e.core.scroll,this.set_state(e,s),!1;if(e.core.selected)return n=this,(e.core.initial_selection===x||e.core.initial_selection===this._data.core.selected.concat([]).sort().join(","))&&(this.deselect_all(),i.each(e.core.selected,function(a,c){n.select_node(c,!1,!0)})),delete e.core.initial_selection,delete e.core.selected,this.set_state(e,s),!1;for(t in e)e.hasOwnProperty(t)&&t!=="core"&&i.inArray(t,this.settings.plugins)===-1&&delete e[t];if(i.isEmptyObject(e.core))return delete e.core,this.set_state(e,s),!1}return i.isEmptyObject(e)?(e=null,s&&s.call(this),this.trigger("set_state"),!1):!0}return!1},refresh:function(e,s){this._data.core.state=s===!0?{}:this.get_state(),s&&i.isFunction(s)&&(this._data.core.state=s.call(this,this._data.core.state)),this._cnt=0,this._model.data={},this._model.data[i.jstree.root]={id:i.jstree.root,parent:null,parents:[],children:[],children_d:[],state:{loaded:!1}},this._data.core.selected=[],this._data.core.last_clicked=null,this._data.core.focused=null;var n=this.get_container_ul()[0].className;e||(this.element.html("<ul class='"+n+"' role='group'><li class='jstree-initial-node jstree-loading jstree-leaf jstree-last' role='none' id='j"+this._id+"_loading'><i class='jstree-icon jstree-ocl'></i><a class='jstree-anchor' role='treeitem' href='#'><i class='jstree-icon jstree-themeicon-hidden'></i>"+this.get_string("Loading ...")+"</a></li></ul>"),this.element.attr("aria-activedescendant","j"+this._id+"_loading")),this.load_node(i.jstree.root,function(t,a){a&&(this.get_container_ul()[0].className=n,this._firstChild(this.get_container_ul()[0])&&this.element.attr("aria-activedescendant",this._firstChild(this.get_container_ul()[0]).id),this.set_state(i.extend(!0,{},this._data.core.state),function(){this.trigger("refresh")})),this._data.core.state=null})},refresh_node:function(e){if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;var s=[],n=[],t=this._data.core.selected.concat([]);n.push(e.id),e.state.opened===!0&&s.push(e.id),this.get_node(e,!0).find(".jstree-open").each(function(){n.push(this.id),s.push(this.id)}),this._load_nodes(n,i.proxy(function(a){this.open_node(s,!1,0),this.select_node(t),this.trigger("refresh_node",{node:e,nodes:a})},this),!1,!0)},set_id:function(e,s){if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;var n,t,a=this._model.data,c=e.id;for(s=s.toString(),a[e.parent].children[i.inArray(e.id,a[e.parent].children)]=s,n=0,t=e.parents.length;t>n;n++)a[e.parents[n]].children_d[i.inArray(e.id,a[e.parents[n]].children_d)]=s;for(n=0,t=e.children.length;t>n;n++)a[e.children[n]].parent=s;for(n=0,t=e.children_d.length;t>n;n++)a[e.children_d[n]].parents[i.inArray(e.id,a[e.children_d[n]].parents)]=s;return n=i.inArray(e.id,this._data.core.selected),n!==-1&&(this._data.core.selected[n]=s),n=this.get_node(e.id,!0),n&&(n.attr("id",s),this.element.attr("aria-activedescendant")===e.id&&this.element.attr("aria-activedescendant",s)),delete a[e.id],e.id=s,e.li_attr.id=s,a[s]=e,this.trigger("set_id",{node:e,new:e.id,old:c}),!0},get_text:function(e){return e=this.get_node(e),e&&e.id!==i.jstree.root?e.text:!1},set_text:function(e,s){var n,t;if(i.isArray(e)){for(e=e.slice(),n=0,t=e.length;t>n;n++)this.set_text(e[n],s);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(e.text=s,this.get_node(e,!0).length&&this.redraw_node(e.id),this.trigger("set_text",{obj:e,text:s}),!0):!1},get_json:function(e,s,n){if(e=this.get_node(e||i.jstree.root),!e)return!1;s&&s.flat&&!n&&(n=[]);var t={id:e.id,text:e.text,icon:this.get_icon(e),li_attr:i.extend(!0,{},e.li_attr),a_attr:i.extend(!0,{},e.a_attr),state:{},data:s&&s.no_data?!1:i.extend(!0,i.isArray(e.data)?[]:{},e.data)},a,c;if(s&&s.flat?t.parent=e.parent:t.children=[],s&&s.no_state)delete t.state;else for(a in e.state)e.state.hasOwnProperty(a)&&(t.state[a]=e.state[a]);if(s&&s.no_li_attr&&delete t.li_attr,s&&s.no_a_attr&&delete t.a_attr,s&&s.no_id&&(delete t.id,t.li_attr&&t.li_attr.id&&delete t.li_attr.id,t.a_attr&&t.a_attr.id&&delete t.a_attr.id),s&&s.flat&&e.id!==i.jstree.root&&n.push(t),!s||!s.no_children)for(a=0,c=e.children.length;c>a;a++)s&&s.flat?this.get_json(e.children[a],s,n):t.children.push(this.get_json(e.children[a],s));return s&&s.flat?n:e.id===i.jstree.root?t.children:t},create_node:function(e,s,n,t,a){if(e===null&&(e=i.jstree.root),e=this.get_node(e),!e)return!1;if(n=n===x?"last":n,!n.toString().match(/^(before|after)$/)&&!a&&!this.is_loaded(e))return this.load_node(e,function(){this.create_node(e,s,n,t,!0)});s||(s={text:this.get_string("New node")}),s=typeof s=="string"?{text:s}:i.extend(!0,{},s),s.text===x&&(s.text=this.get_string("New node"));var c,u,y,E;switch(e.id===i.jstree.root&&(n==="before"&&(n="first"),n==="after"&&(n="last")),n){case"before":c=this.get_node(e.parent),n=i.inArray(e.id,c.children),e=c;break;case"after":c=this.get_node(e.parent),n=i.inArray(e.id,c.children)+1,e=c;break;case"inside":case"first":n=0;break;case"last":n=e.children.length;break;default:n||(n=0)}if(n>e.children.length&&(n=e.children.length),s.id||(s.id=!0),!this.check("create_node",s,e,n))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(s.id===!0&&delete s.id,s=this._parse_model_from_json(s,e.id,e.parents.concat()),!s)return!1;for(c=this.get_node(s),u=[],u.push(s),u=u.concat(c.children_d),this.trigger("model",{nodes:u,parent:e.id}),e.children_d=e.children_d.concat(u),y=0,E=e.parents.length;E>y;y++)this._model.data[e.parents[y]].children_d=this._model.data[e.parents[y]].children_d.concat(u);for(s=c,c=[],y=0,E=e.children.length;E>y;y++)c[y>=n?y+1:y]=e.children[y];return c[n]=s.id,e.children=c,this.redraw_node(e,!0),this.trigger("create_node",{node:this.get_node(s),parent:e.id,position:n}),t&&t.call(this,this.get_node(s)),s.id},rename_node:function(e,s){var n,t,a;if(i.isArray(e)){for(e=e.slice(),n=0,t=e.length;t>n;n++)this.rename_node(e[n],s);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(a=e.text,this.check("rename_node",e,this.get_parent(e),s)?(this.set_text(e,s),this.trigger("rename_node",{node:e,text:s,old:a}),!0):(this.settings.core.error.call(this,this._data.core.last_error),!1)):!1},delete_node:function(e){var s,n,t,a,c,u,y,E,b,T,F,U;if(i.isArray(e)){for(e=e.slice(),s=0,n=e.length;n>s;s++)this.delete_node(e[s]);return!0}if(e=this.get_node(e),!e||e.id===i.jstree.root)return!1;if(t=this.get_node(e.parent),a=i.inArray(e.id,t.children),T=!1,!this.check("delete_node",e,t,a))return this.settings.core.error.call(this,this._data.core.last_error),!1;for(a!==-1&&(t.children=i.vakata.array_remove(t.children,a)),c=e.children_d.concat([]),c.push(e.id),u=0,y=e.parents.length;y>u;u++)this._model.data[e.parents[u]].children_d=i.vakata.array_filter(this._model.data[e.parents[u]].children_d,function(Q){return i.inArray(Q,c)===-1});for(E=0,b=c.length;b>E;E++)if(this._model.data[c[E]].state.selected){T=!0;break}for(T&&(this._data.core.selected=i.vakata.array_filter(this._data.core.selected,function(Q){return i.inArray(Q,c)===-1})),this.trigger("delete_node",{node:e,parent:t.id}),T&&this.trigger("changed",{action:"delete_node",node:e,selected:this._data.core.selected,parent:t.id}),E=0,b=c.length;b>E;E++)delete this._model.data[c[E]];return i.inArray(this._data.core.focused,c)!==-1&&(this._data.core.focused=null,F=this.element[0].scrollTop,U=this.element[0].scrollLeft,t.id===i.jstree.root?this._model.data[i.jstree.root].children[0]&&this.get_node(this._model.data[i.jstree.root].children[0],!0).children(".jstree-anchor").focus():this.get_node(t,!0).children(".jstree-anchor").focus(),this.element[0].scrollTop=F,this.element[0].scrollLeft=U),this.redraw_node(t,!0),!0},check:function(e,s,n,t,a){s=s&&s.id?s:this.get_node(s),n=n&&n.id?n:this.get_node(n);var c=e.match(/^move_node|copy_node|create_node$/i)?n:s,u=this.settings.core.check_callback;if(e==="move_node"||e==="copy_node"){if(!(a&&a.is_multi||e!=="move_node"||i.inArray(s.id,n.children)!==t))return this._data.core.last_error={error:"check",plugin:"core",id:"core_08",reason:"Moving node to its current position",data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:n&&n.id?n.id:!1})},!1;if(!(a&&a.is_multi||s.id!==n.id&&(e!=="move_node"||i.inArray(s.id,n.children)!==t)&&i.inArray(n.id,s.children_d)===-1))return this._data.core.last_error={error:"check",plugin:"core",id:"core_01",reason:"Moving parent inside child",data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:n&&n.id?n.id:!1})},!1}return c&&c.data&&(c=c.data),c&&c.functions&&(c.functions[e]===!1||c.functions[e]===!0)?(c.functions[e]===!1&&(this._data.core.last_error={error:"check",plugin:"core",id:"core_02",reason:"Node data prevents function: "+e,data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:n&&n.id?n.id:!1})}),c.functions[e]):u===!1||i.isFunction(u)&&u.call(this,e,s,n,t,a)===!1||u&&u[e]===!1?(this._data.core.last_error={error:"check",plugin:"core",id:"core_03",reason:"User config for core.check_callback prevents function: "+e,data:JSON.stringify({chk:e,pos:t,obj:s&&s.id?s.id:!1,par:n&&n.id?n.id:!1})},!1):!0},last_error:function(){return this._data.core.last_error},move_node:function(e,s,n,t,a,c,u){var y,E,b,T,F,U,Q,ee,ie,te,Ee,Ce,Se,Be;if(s=this.get_node(s),n=n===x?0:n,!s)return!1;if(!n.toString().match(/^(before|after)$/)&&!a&&!this.is_loaded(s))return this.load_node(s,function(){this.move_node(e,s,n,t,!0,!1,u)});if(i.isArray(e)){if(e.length!==1){for(y=0,E=e.length;E>y;y++)(ie=this.move_node(e[y],s,n,t,a,!1,u))&&(s=ie,n="after");return this.redraw(),!0}e=e[0]}if(e=e&&e.id?e:this.get_node(e),!e||e.id===i.jstree.root)return!1;if(b=(e.parent||i.jstree.root).toString(),F=n.toString().match(/^(before|after)$/)&&s.id!==i.jstree.root?this.get_node(s.parent):s,U=u||(this._model.data[e.id]?this:i.jstree.reference(e.id)),Q=!U||!U._id||this._id!==U._id,T=U&&U._id&&b&&U._model.data[b]&&U._model.data[b].children?i.inArray(e.id,U._model.data[b].children):-1,U&&U._id&&(e=U._model.data[e.id]),Q)return(ie=this.copy_node(e,s,n,t,a,!1,u))?(U&&U.delete_node(e),ie):!1;switch(s.id===i.jstree.root&&(n==="before"&&(n="first"),n==="after"&&(n="last")),n){case"before":n=i.inArray(s.id,F.children);break;case"after":n=i.inArray(s.id,F.children)+1;break;case"inside":case"first":n=0;break;case"last":n=F.children.length;break;default:n||(n=0)}if(n>F.children.length&&(n=F.children.length),!this.check("move_node",e,F,n,{core:!0,origin:u,is_multi:U&&U._id&&U._id!==this._id,is_foreign:!U||!U._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(e.parent===F.id){for(ee=F.children.concat(),ie=i.inArray(e.id,ee),ie!==-1&&(ee=i.vakata.array_remove(ee,ie),n>ie&&n--),ie=[],te=0,Ee=ee.length;Ee>te;te++)ie[te>=n?te+1:te]=ee[te];ie[n]=e.id,F.children=ie,this._node_changed(F.id),this.redraw(F.id===i.jstree.root)}else{for(ie=e.children_d.concat(),ie.push(e.id),te=0,Ee=e.parents.length;Ee>te;te++){for(ee=[],Be=U._model.data[e.parents[te]].children_d,Ce=0,Se=Be.length;Se>Ce;Ce++)i.inArray(Be[Ce],ie)===-1&&ee.push(Be[Ce]);U._model.data[e.parents[te]].children_d=ee}for(U._model.data[b].children=i.vakata.array_remove_item(U._model.data[b].children,e.id),te=0,Ee=F.parents.length;Ee>te;te++)this._model.data[F.parents[te]].children_d=this._model.data[F.parents[te]].children_d.concat(ie);for(ee=[],te=0,Ee=F.children.length;Ee>te;te++)ee[te>=n?te+1:te]=F.children[te];for(ee[n]=e.id,F.children=ee,F.children_d.push(e.id),F.children_d=F.children_d.concat(e.children_d),e.parent=F.id,ie=F.parents.concat(),ie.unshift(F.id),Be=e.parents.length,e.parents=ie,ie=ie.concat(),te=0,Ee=e.children_d.length;Ee>te;te++)this._model.data[e.children_d[te]].parents=this._model.data[e.children_d[te]].parents.slice(0,-1*Be),Array.prototype.push.apply(this._model.data[e.children_d[te]].parents,ie);(b===i.jstree.root||F.id===i.jstree.root)&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||(this._node_changed(b),this._node_changed(F.id)),c||this.redraw()}return t&&t.call(this,e,F,n),this.trigger("move_node",{node:e,parent:F.id,position:n,old_parent:b,old_position:T,is_multi:U&&U._id&&U._id!==this._id,is_foreign:!U||!U._id,old_instance:U,new_instance:this}),e.id},copy_node:function(e,s,n,t,a,c,u){var y,E,b,T,F,U,Q,ee,ie,te;if(s=this.get_node(s),n=n===x?0:n,!s)return!1;if(!n.toString().match(/^(before|after)$/)&&!a&&!this.is_loaded(s))return this.load_node(s,function(){this.copy_node(e,s,n,t,!0,!1,u)});if(i.isArray(e)){if(e.length!==1){for(y=0,E=e.length;E>y;y++)(T=this.copy_node(e[y],s,n,t,a,!0,u))&&(s=T,n="after");return this.redraw(),!0}e=e[0]}if(e=e&&e.id?e:this.get_node(e),!e||e.id===i.jstree.root)return!1;switch(ee=(e.parent||i.jstree.root).toString(),ie=n.toString().match(/^(before|after)$/)&&s.id!==i.jstree.root?this.get_node(s.parent):s,te=u||(this._model.data[e.id]?this:i.jstree.reference(e.id)),!te||!te._id||(this._id,te._id),te&&te._id&&(e=te._model.data[e.id]),s.id===i.jstree.root&&(n==="before"&&(n="first"),n==="after"&&(n="last")),n){case"before":n=i.inArray(s.id,ie.children);break;case"after":n=i.inArray(s.id,ie.children)+1;break;case"inside":case"first":n=0;break;case"last":n=ie.children.length;break;default:n||(n=0)}if(n>ie.children.length&&(n=ie.children.length),!this.check("copy_node",e,ie,n,{core:!0,origin:u,is_multi:te&&te._id&&te._id!==this._id,is_foreign:!te||!te._id}))return this.settings.core.error.call(this,this._data.core.last_error),!1;if(Q=te?te.get_json(e,{no_id:!0,no_data:!0,no_state:!0}):e,!Q||(Q.id===!0&&delete Q.id,Q=this._parse_model_from_json(Q,ie.id,ie.parents.concat()),!Q))return!1;for(T=this.get_node(Q),e&&e.state&&e.state.loaded===!1&&(T.state.loaded=!1),b=[],b.push(Q),b=b.concat(T.children_d),this.trigger("model",{nodes:b,parent:ie.id}),F=0,U=ie.parents.length;U>F;F++)this._model.data[ie.parents[F]].children_d=this._model.data[ie.parents[F]].children_d.concat(b);for(b=[],F=0,U=ie.children.length;U>F;F++)b[F>=n?F+1:F]=ie.children[F];return b[n]=T.id,ie.children=b,ie.children_d.push(T.id),ie.children_d=ie.children_d.concat(T.children_d),ie.id===i.jstree.root&&(this._model.force_full_redraw=!0),this._model.force_full_redraw||this._node_changed(ie.id),c||this.redraw(ie.id===i.jstree.root),t&&t.call(this,T,ie,n),this.trigger("copy_node",{node:T,original:e,parent:ie.id,position:n,old_parent:ee,old_position:te&&te._id&&ee&&te._model.data[ee]&&te._model.data[ee].children?i.inArray(e.id,te._model.data[ee].children):-1,is_multi:te&&te._id&&te._id!==this._id,is_foreign:!te||!te._id,old_instance:te,new_instance:this}),T.id},cut:function(e){if(e||(e=this._data.core.selected.concat()),i.isArray(e)||(e=[e]),!e.length)return!1;var s=[],n,t,a;for(t=0,a=e.length;a>t;t++)n=this.get_node(e[t]),n&&n.id&&n.id!==i.jstree.root&&s.push(n);return s.length?(g=s,m=this,d="move_node",void this.trigger("cut",{node:e})):!1},copy:function(e){if(e||(e=this._data.core.selected.concat()),i.isArray(e)||(e=[e]),!e.length)return!1;var s=[],n,t,a;for(t=0,a=e.length;a>t;t++)n=this.get_node(e[t]),n&&n.id&&n.id!==i.jstree.root&&s.push(n);return s.length?(g=s,m=this,d="copy_node",void this.trigger("copy",{node:e})):!1},get_buffer:function(){return{mode:d,node:g,inst:m}},can_paste:function(){return d!==!1&&g!==!1},paste:function(e,s){return e=this.get_node(e),e&&d&&d.match(/^(copy_node|move_node)$/)&&g?(this[d](g,e,s,!1,!1,!1,m)&&this.trigger("paste",{parent:e.id,node:g,mode:d}),g=!1,d=!1,void(m=!1)):!1},clear_buffer:function(){g=!1,d=!1,m=!1,this.trigger("clear_buffer")},edit:function(e,s,n){var t,a,c,u,y,E,b,T,F,U=!1;return(e=this.get_node(e))?this.check("edit",e,this.get_parent(e))?(F=e,s=typeof s=="string"?s:e.text,this.set_text(e,""),e=this._open_to(e),F.text=s,t=this._data.core.rtl,a=this.element.width(),this._data.core.focused=F.id,c=e.children(".jstree-anchor").focus(),u=i("<span></span>"),y=s,E=i("<div></div>",{css:{position:"absolute",top:"-200px",left:t?"0px":"-1000px",visibility:"hidden"}}).appendTo(N.body),b=i("<input />",{value:y,class:"jstree-rename-input",css:{padding:"0",border:"1px solid silver","box-sizing":"border-box",display:"inline-block",height:this._data.core.li_height+"px",lineHeight:this._data.core.li_height+"px",width:"150px"},blur:i.proxy(function(Q){Q.stopImmediatePropagation(),Q.preventDefault();var ee=u.children(".jstree-rename-input"),ie=ee.val(),te=this.settings.core.force_text,Ee;ie===""&&(ie=y),E.remove(),u.replaceWith(c),u.remove(),y=te?y:i("<div></div>").append(i.parseHTML(y)).html(),e=this.get_node(e),this.set_text(e,y),Ee=!!this.rename_node(e,te?i("<div></div>").text(ie).text():i("<div></div>").append(i.parseHTML(ie)).html()),Ee||this.set_text(e,y),this._data.core.focused=F.id,setTimeout(i.proxy(function(){var Ce=this.get_node(F.id,!0);Ce.length&&(this._data.core.focused=F.id,Ce.children(".jstree-anchor").focus())},this),0),n&&n.call(this,F,Ee,U,ie),b=null},this),keydown:function(Q){var ee=Q.which;ee===27&&(U=!0,this.value=y),(ee===27||ee===13||ee===37||ee===38||ee===39||ee===40||ee===32)&&Q.stopImmediatePropagation(),(ee===27||ee===13)&&(Q.preventDefault(),this.blur())},click:function(Q){Q.stopImmediatePropagation()},mousedown:function(Q){Q.stopImmediatePropagation()},keyup:function(Q){b.width(Math.min(E.text("pW"+this.value).width(),a))},keypress:function(Q){return Q.which===13?!1:void 0}}),T={fontFamily:c.css("fontFamily")||"",fontSize:c.css("fontSize")||"",fontWeight:c.css("fontWeight")||"",fontStyle:c.css("fontStyle")||"",fontStretch:c.css("fontStretch")||"",fontVariant:c.css("fontVariant")||"",letterSpacing:c.css("letterSpacing")||"",wordSpacing:c.css("wordSpacing")||""},u.attr("class",c.attr("class")).append(c.contents().clone()).append(b),c.replaceWith(u),E.css(T),b.css(T).width(Math.min(E.text("pW"+b[0].value).width(),a))[0].select(),void i(N).one("mousedown.jstree touchstart.jstree dnd_start.vakata",function(Q){b&&Q.target!==b&&i(b).blur()})):(this.settings.core.error.call(this,this._data.core.last_error),!1):!1},set_theme:function(e,s){if(!e)return!1;if(s===!0){var n=this.settings.core.themes.dir;n||(n=i.jstree.path+"/themes"),s=n+"/"+e+"/style.css"}s&&i.inArray(s,w)===-1&&(i("head").append('<link rel="stylesheet" href="'+s+'" type="text/css" />'),w.push(s)),this._data.core.themes.name&&this.element.removeClass("jstree-"+this._data.core.themes.name),this._data.core.themes.name=e,this.element.addClass("jstree-"+e),this.element[this.settings.core.themes.responsive?"addClass":"removeClass"]("jstree-"+e+"-responsive"),this.trigger("set_theme",{theme:e})},get_theme:function(){return this._data.core.themes.name},set_theme_variant:function(e){this._data.core.themes.variant&&this.element.removeClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant),this._data.core.themes.variant=e,e&&this.element.addClass("jstree-"+this._data.core.themes.name+"-"+this._data.core.themes.variant)},get_theme_variant:function(){return this._data.core.themes.variant},show_stripes:function(){this._data.core.themes.stripes=!0,this.get_container_ul().addClass("jstree-striped"),this.trigger("show_stripes")},hide_stripes:function(){this._data.core.themes.stripes=!1,this.get_container_ul().removeClass("jstree-striped"),this.trigger("hide_stripes")},toggle_stripes:function(){this._data.core.themes.stripes?this.hide_stripes():this.show_stripes()},show_dots:function(){this._data.core.themes.dots=!0,this.get_container_ul().removeClass("jstree-no-dots"),this.trigger("show_dots")},hide_dots:function(){this._data.core.themes.dots=!1,this.get_container_ul().addClass("jstree-no-dots"),this.trigger("hide_dots")},toggle_dots:function(){this._data.core.themes.dots?this.hide_dots():this.show_dots()},show_icons:function(){this._data.core.themes.icons=!0,this.get_container_ul().removeClass("jstree-no-icons"),this.trigger("show_icons")},hide_icons:function(){this._data.core.themes.icons=!1,this.get_container_ul().addClass("jstree-no-icons"),this.trigger("hide_icons")},toggle_icons:function(){this._data.core.themes.icons?this.hide_icons():this.show_icons()},show_ellipsis:function(){this._data.core.themes.ellipsis=!0,this.get_container_ul().addClass("jstree-ellipsis"),this.trigger("show_ellipsis")},hide_ellipsis:function(){this._data.core.themes.ellipsis=!1,this.get_container_ul().removeClass("jstree-ellipsis"),this.trigger("hide_ellipsis")},toggle_ellipsis:function(){this._data.core.themes.ellipsis?this.hide_ellipsis():this.show_ellipsis()},set_icon:function(e,s){var n,t,a,c;if(i.isArray(e)){for(e=e.slice(),n=0,t=e.length;t>n;n++)this.set_icon(e[n],s);return!0}return e=this.get_node(e),e&&e.id!==i.jstree.root?(c=e.icon,e.icon=s===!0||s===null||s===x||s===""?!0:s,a=this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon"),s===!1?(a.removeClass("jstree-themeicon-custom "+c).css("background","").removeAttr("rel"),this.hide_icon(e)):s===!0||s===null||s===x||s===""?(a.removeClass("jstree-themeicon-custom "+c).css("background","").removeAttr("rel"),c===!1&&this.show_icon(e)):s.indexOf("/")===-1&&s.indexOf(".")===-1?(a.removeClass(c).css("background",""),a.addClass(s+" jstree-themeicon-custom").attr("rel",s),c===!1&&this.show_icon(e)):(a.removeClass(c).css("background",""),a.addClass("jstree-themeicon-custom").css("background","url('"+s+"') center center no-repeat").attr("rel",s),c===!1&&this.show_icon(e)),!0):!1},get_icon:function(e){return e=this.get_node(e),e&&e.id!==i.jstree.root?e.icon:!1},hide_icon:function(e){var s,n;if(i.isArray(e)){for(e=e.slice(),s=0,n=e.length;n>s;s++)this.hide_icon(e[s]);return!0}return e=this.get_node(e),e&&e!==i.jstree.root?(e.icon=!1,this.get_node(e,!0).children(".jstree-anchor").children(".jstree-themeicon").addClass("jstree-themeicon-hidden"),!0):!1},show_icon:function(e){var s,n,t;if(i.isArray(e)){for(e=e.slice(),s=0,n=e.length;n>s;s++)this.show_icon(e[s]);return!0}return e=this.get_node(e),e&&e!==i.jstree.root?(t=this.get_node(e,!0),e.icon=t.length?t.children(".jstree-anchor").children(".jstree-themeicon").attr("rel"):!0,e.icon||(e.icon=!0),t.children(".jstree-anchor").children(".jstree-themeicon").removeClass("jstree-themeicon-hidden"),!0):!1}},i.vakata={},i.vakata.attributes=function(e,s){e=i(e)[0];var n=s?{}:[];return e&&e.attributes&&i.each(e.attributes,function(t,a){i.inArray(a.name.toLowerCase(),["style","contenteditable","hasfocus","tabindex"])===-1&&a.value!==null&&i.vakata.trim(a.value)!==""&&(s?n[a.name]=a.value:n.push(a.name))}),n},i.vakata.array_unique=function(e){var s=[],n,t,a={};for(n=0,t=e.length;t>n;n++)a[e[n]]===x&&(s.push(e[n]),a[e[n]]=!0);return s},i.vakata.array_remove=function(e,s){return e.splice(s,1),e},i.vakata.array_remove_item=function(e,s){var n=i.inArray(s,e);return n!==-1?i.vakata.array_remove(e,n):e},i.vakata.array_filter=function(e,s,n,t,a){if(e.filter)return e.filter(s,n);t=[];for(a in e)~~a+""==a+""&&a>=0&&s.call(n,e[a],+a,e)&&t.push(e[a]);return t},i.vakata.trim=function(e){return String.prototype.trim?String.prototype.trim.call(e.toString()):e.toString().replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")},i.jstree.plugins.changed=function(e,s){var n=[];this.trigger=function(t,a){var c,u;if(a||(a={}),t.replace(".jstree","")==="changed"){a.changed={selected:[],deselected:[]};var y={};for(c=0,u=n.length;u>c;c++)y[n[c]]=1;for(c=0,u=a.selected.length;u>c;c++)y[a.selected[c]]?y[a.selected[c]]=2:a.changed.selected.push(a.selected[c]);for(c=0,u=n.length;u>c;c++)y[n[c]]===1&&a.changed.deselected.push(n[c]);n=a.selected.slice()}s.trigger.call(this,t,a)},this.refresh=function(t,a){return n=[],s.refresh.apply(this,arguments)}};var $=N.createElement("I");$.className="jstree-icon jstree-checkbox",$.setAttribute("role","presentation"),i.jstree.defaults.checkbox={visible:!0,three_state:!0,whole_node:!0,keep_selected_style:!0,cascade:"",tie_selection:!0,cascade_to_disabled:!0,cascade_to_hidden:!0},i.jstree.plugins.checkbox=function(e,s){this.bind=function(){s.bind.call(this),this._data.checkbox.uto=!1,this._data.checkbox.selected=[],this.settings.checkbox.three_state&&(this.settings.checkbox.cascade="up+down+undetermined"),this.element.on("init.jstree",i.proxy(function(){this._data.checkbox.visible=this.settings.checkbox.visible,this.settings.checkbox.keep_selected_style||this.element.addClass("jstree-checkbox-no-clicked"),this.settings.checkbox.tie_selection&&this.element.addClass("jstree-checkbox-selection")},this)).on("loading.jstree",i.proxy(function(){this[this._data.checkbox.visible?"show_checkboxes":"hide_checkboxes"]()},this)),this.settings.checkbox.cascade.indexOf("undetermined")!==-1&&this.element.on("changed.jstree uncheck_node.jstree check_node.jstree uncheck_all.jstree check_all.jstree move_node.jstree copy_node.jstree redraw.jstree open_node.jstree",i.proxy(function(){this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(i.proxy(this._undetermined,this),50)},this)),this.settings.checkbox.tie_selection||this.element.on("model.jstree",i.proxy(function(n,t){var a=this._model.data;a[t.parent];var c=t.nodes,u,y;for(u=0,y=c.length;y>u;u++)a[c[u]].state.checked=a[c[u]].state.checked||a[c[u]].original&&a[c[u]].original.state&&a[c[u]].original.state.checked,a[c[u]].state.checked&&this._data.checkbox.selected.push(c[u])},this)),(this.settings.checkbox.cascade.indexOf("up")!==-1||this.settings.checkbox.cascade.indexOf("down")!==-1)&&this.element.on("model.jstree",i.proxy(function(n,t){var a=this._model.data,c=a[t.parent],u=t.nodes,y=[],E,b,T,F,U,Q,ee=this.settings.checkbox.cascade,ie=this.settings.checkbox.tie_selection;if(ee.indexOf("down")!==-1){if(c.state[ie?"selected":"checked"]){for(b=0,T=u.length;T>b;b++)a[u[b]].state[ie?"selected":"checked"]=!0;this._data[ie?"core":"checkbox"].selected=this._data[ie?"core":"checkbox"].selected.concat(u)}else for(b=0,T=u.length;T>b;b++)if(a[u[b]].state[ie?"selected":"checked"]){for(F=0,U=a[u[b]].children_d.length;U>F;F++)a[a[u[b]].children_d[F]].state[ie?"selected":"checked"]=!0;this._data[ie?"core":"checkbox"].selected=this._data[ie?"core":"checkbox"].selected.concat(a[u[b]].children_d)}}if(ee.indexOf("up")!==-1){for(b=0,T=c.children_d.length;T>b;b++)a[c.children_d[b]].children.length||y.push(a[c.children_d[b]].parent);for(y=i.vakata.array_unique(y),F=0,U=y.length;U>F;F++)for(c=a[y[F]];c&&c.id!==i.jstree.root;){for(E=0,b=0,T=c.children.length;T>b;b++)E+=a[c.children[b]].state[ie?"selected":"checked"];if(E!==T)break;c.state[ie?"selected":"checked"]=!0,this._data[ie?"core":"checkbox"].selected.push(c.id),Q=this.get_node(c,!0),Q&&Q.length&&Q.attr("aria-selected",!0).children(".jstree-anchor").addClass(ie?"jstree-clicked":"jstree-checked"),c=this.get_node(c.parent)}}this._data[ie?"core":"checkbox"].selected=i.vakata.array_unique(this._data[ie?"core":"checkbox"].selected)},this)).on(this.settings.checkbox.tie_selection?"select_node.jstree":"check_node.jstree",i.proxy(function(n,t){var a=t.node,c=this._model.data,u=this.get_node(a.parent),y,E,b,T,F=this.settings.checkbox.cascade,U=this.settings.checkbox.tie_selection,Q={},ee=this._data[U?"core":"checkbox"].selected;for(y=0,E=ee.length;E>y;y++)Q[ee[y]]=!0;if(F.indexOf("down")!==-1){var ie=this._cascade_new_checked_state(a.id,!0),te=a.children_d.concat(a.id);for(y=0,E=te.length;E>y;y++)ie.indexOf(te[y])>-1?Q[te[y]]=!0:delete Q[te[y]]}if(F.indexOf("up")!==-1)for(;u&&u.id!==i.jstree.root;){for(b=0,y=0,E=u.children.length;E>y;y++)b+=c[u.children[y]].state[U?"selected":"checked"];if(b!==E)break;u.state[U?"selected":"checked"]=!0,Q[u.id]=!0,T=this.get_node(u,!0),T&&T.length&&T.attr("aria-selected",!0).children(".jstree-anchor").addClass(U?"jstree-clicked":"jstree-checked"),u=this.get_node(u.parent)}ee=[];for(y in Q)Q.hasOwnProperty(y)&&ee.push(y);this._data[U?"core":"checkbox"].selected=ee},this)).on(this.settings.checkbox.tie_selection?"deselect_all.jstree":"uncheck_all.jstree",i.proxy(function(n,t){var a=this.get_node(i.jstree.root),c=this._model.data,u,y,E;for(u=0,y=a.children_d.length;y>u;u++)E=c[a.children_d[u]],E&&E.original&&E.original.state&&E.original.state.undetermined&&(E.original.state.undetermined=!1)},this)).on(this.settings.checkbox.tie_selection?"deselect_node.jstree":"uncheck_node.jstree",i.proxy(function(n,t){var a=t.node;this.get_node(a,!0);var c,u,y,E=this.settings.checkbox.cascade,b=this.settings.checkbox.tie_selection,T=this._data[b?"core":"checkbox"].selected,F=a.children_d.concat(a.id);if(E.indexOf("down")!==-1){var U=this._cascade_new_checked_state(a.id,!1);T=i.vakata.array_filter(T,function(Q){return F.indexOf(Q)===-1||U.indexOf(Q)>-1})}if(E.indexOf("up")!==-1&&T.indexOf(a.id)===-1){for(c=0,u=a.parents.length;u>c;c++)y=this._model.data[a.parents[c]],y.state[b?"selected":"checked"]=!1,y&&y.original&&y.original.state&&y.original.state.undetermined&&(y.original.state.undetermined=!1),y=this.get_node(a.parents[c],!0),y&&y.length&&y.attr("aria-selected",!1).children(".jstree-anchor").removeClass(b?"jstree-clicked":"jstree-checked");T=i.vakata.array_filter(T,function(Q){return a.parents.indexOf(Q)===-1})}this._data[b?"core":"checkbox"].selected=T},this)),this.settings.checkbox.cascade.indexOf("up")!==-1&&this.element.on("delete_node.jstree",i.proxy(function(n,t){for(var a=this.get_node(t.parent),c=this._model.data,u,y,E,b,T=this.settings.checkbox.tie_selection;a&&a.id!==i.jstree.root&&!a.state[T?"selected":"checked"];){for(E=0,u=0,y=a.children.length;y>u;u++)E+=c[a.children[u]].state[T?"selected":"checked"];if(!(y>0&&E===y))break;a.state[T?"selected":"checked"]=!0,this._data[T?"core":"checkbox"].selected.push(a.id),b=this.get_node(a,!0),b&&b.length&&b.attr("aria-selected",!0).children(".jstree-anchor").addClass(T?"jstree-clicked":"jstree-checked"),a=this.get_node(a.parent)}},this)).on("move_node.jstree",i.proxy(function(n,t){var a=t.is_multi,c=t.old_parent,u=this.get_node(t.parent),y=this._model.data,E,b,T,F,U,Q=this.settings.checkbox.tie_selection;if(!a)for(E=this.get_node(c);E&&E.id!==i.jstree.root&&!E.state[Q?"selected":"checked"];){for(b=0,T=0,F=E.children.length;F>T;T++)b+=y[E.children[T]].state[Q?"selected":"checked"];if(!(F>0&&b===F))break;E.state[Q?"selected":"checked"]=!0,this._data[Q?"core":"checkbox"].selected.push(E.id),U=this.get_node(E,!0),U&&U.length&&U.attr("aria-selected",!0).children(".jstree-anchor").addClass(Q?"jstree-clicked":"jstree-checked"),E=this.get_node(E.parent)}for(E=u;E&&E.id!==i.jstree.root;){for(b=0,T=0,F=E.children.length;F>T;T++)b+=y[E.children[T]].state[Q?"selected":"checked"];if(b===F)E.state[Q?"selected":"checked"]||(E.state[Q?"selected":"checked"]=!0,this._data[Q?"core":"checkbox"].selected.push(E.id),U=this.get_node(E,!0),U&&U.length&&U.attr("aria-selected",!0).children(".jstree-anchor").addClass(Q?"jstree-clicked":"jstree-checked"));else{if(!E.state[Q?"selected":"checked"])break;E.state[Q?"selected":"checked"]=!1,this._data[Q?"core":"checkbox"].selected=i.vakata.array_remove_item(this._data[Q?"core":"checkbox"].selected,E.id),U=this.get_node(E,!0),U&&U.length&&U.attr("aria-selected",!1).children(".jstree-anchor").removeClass(Q?"jstree-clicked":"jstree-checked")}E=this.get_node(E.parent)}},this))},this.get_undetermined=function(n){if(this.settings.checkbox.cascade.indexOf("undetermined")===-1)return[];var t,a,c,u,y={},E=this._model.data,b=this.settings.checkbox.tie_selection,T=this._data[b?"core":"checkbox"].selected,F=[],U=this,Q=[];for(t=0,a=T.length;a>t;t++)if(E[T[t]]&&E[T[t]].parents)for(c=0,u=E[T[t]].parents.length;u>c&&y[E[T[t]].parents[c]]===x;c++)E[T[t]].parents[c]!==i.jstree.root&&(y[E[T[t]].parents[c]]=!0,F.push(E[T[t]].parents[c]));for(this.element.find(".jstree-closed").not(":has(.jstree-children)").each(function(){var ee=U.get_node(this),ie;if(ee){if(ee.state.loaded){for(t=0,a=ee.children_d.length;a>t;t++)if(ie=E[ee.children_d[t]],!ie.state.loaded&&ie.original&&ie.original.state&&ie.original.state.undetermined&&ie.original.state.undetermined===!0)for(y[ie.id]===x&&ie.id!==i.jstree.root&&(y[ie.id]=!0,F.push(ie.id)),c=0,u=ie.parents.length;u>c;c++)y[ie.parents[c]]===x&&ie.parents[c]!==i.jstree.root&&(y[ie.parents[c]]=!0,F.push(ie.parents[c]))}else if(ee.original&&ee.original.state&&ee.original.state.undetermined&&ee.original.state.undetermined===!0)for(y[ee.id]===x&&ee.id!==i.jstree.root&&(y[ee.id]=!0,F.push(ee.id)),c=0,u=ee.parents.length;u>c;c++)y[ee.parents[c]]===x&&ee.parents[c]!==i.jstree.root&&(y[ee.parents[c]]=!0,F.push(ee.parents[c]))}}),t=0,a=F.length;a>t;t++)E[F[t]].state[b?"selected":"checked"]||Q.push(n?E[F[t]]:F[t]);return Q},this._undetermined=function(){if(this.element!==null){var n=this.get_undetermined(!1),t,a,c;for(this.element.find(".jstree-undetermined").removeClass("jstree-undetermined"),t=0,a=n.length;a>t;t++)c=this.get_node(n[t],!0),c&&c.length&&c.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-undetermined")}},this.redraw_node=function(n,t,a,c){if(n=s.redraw_node.apply(this,arguments)){var u,y,E=null,b=null;for(u=0,y=n.childNodes.length;y>u;u++)if(n.childNodes[u]&&n.childNodes[u].className&&n.childNodes[u].className.indexOf("jstree-anchor")!==-1){E=n.childNodes[u];break}E&&(!this.settings.checkbox.tie_selection&&this._model.data[n.id].state.checked&&(E.className+=" jstree-checked"),b=$.cloneNode(!1),this._model.data[n.id].state.checkbox_disabled&&(b.className+=" jstree-checkbox-disabled"),E.insertBefore(b,E.childNodes[0]))}return a||this.settings.checkbox.cascade.indexOf("undetermined")===-1||(this._data.checkbox.uto&&clearTimeout(this._data.checkbox.uto),this._data.checkbox.uto=setTimeout(i.proxy(this._undetermined,this),50)),n},this.show_checkboxes=function(){this._data.core.themes.checkboxes=!0,this.get_container_ul().removeClass("jstree-no-checkboxes")},this.hide_checkboxes=function(){this._data.core.themes.checkboxes=!1,this.get_container_ul().addClass("jstree-no-checkboxes")},this.toggle_checkboxes=function(){this._data.core.themes.checkboxes?this.hide_checkboxes():this.show_checkboxes()},this.is_undetermined=function(n){n=this.get_node(n);var t=this.settings.checkbox.cascade,a,c,u=this.settings.checkbox.tie_selection,y=this._data[u?"core":"checkbox"].selected,E=this._model.data;if(!n||n.state[u?"selected":"checked"]===!0||t.indexOf("undetermined")===-1||t.indexOf("down")===-1&&t.indexOf("up")===-1)return!1;if(!n.state.loaded&&n.original.state.undetermined===!0)return!0;for(a=0,c=n.children_d.length;c>a;a++)if(i.inArray(n.children_d[a],y)!==-1||!E[n.children_d[a]].state.loaded&&E[n.children_d[a]].original.state.undetermined)return!0;return!1},this.disable_checkbox=function(n){var t,a,c;if(i.isArray(n)){for(n=n.slice(),t=0,a=n.length;a>t;t++)this.disable_checkbox(n[t]);return!0}return n=this.get_node(n),n&&n.id!==i.jstree.root?(c=this.get_node(n,!0),void(n.state.checkbox_disabled||(n.state.checkbox_disabled=!0,c&&c.length&&c.children(".jstree-anchor").children(".jstree-checkbox").addClass("jstree-checkbox-disabled"),this.trigger("disable_checkbox",{node:n})))):!1},this.enable_checkbox=function(n){var t,a,c;if(i.isArray(n)){for(n=n.slice(),t=0,a=n.length;a>t;t++)this.enable_checkbox(n[t]);return!0}return n=this.get_node(n),n&&n.id!==i.jstree.root?(c=this.get_node(n,!0),void(n.state.checkbox_disabled&&(n.state.checkbox_disabled=!1,c&&c.length&&c.children(".jstree-anchor").children(".jstree-checkbox").removeClass("jstree-checkbox-disabled"),this.trigger("enable_checkbox",{node:n})))):!1},this.activate_node=function(n,t){return i(t.target).hasClass("jstree-checkbox-disabled")?!1:(this.settings.checkbox.tie_selection&&(this.settings.checkbox.whole_node||i(t.target).hasClass("jstree-checkbox"))&&(t.ctrlKey=!0),this.settings.checkbox.tie_selection||!this.settings.checkbox.whole_node&&!i(t.target).hasClass("jstree-checkbox")?s.activate_node.call(this,n,t):this.is_disabled(n)?!1:(this.is_checked(n)?this.uncheck_node(n,t):this.check_node(n,t),void this.trigger("activate_node",{node:this.get_node(n)})))},this._cascade_new_checked_state=function(n,t){var a=this,c=this.settings.checkbox.tie_selection,u=this._model.data[n],y=[],E=[],b,T,F;if(!this.settings.checkbox.cascade_to_disabled&&u.state.disabled||!this.settings.checkbox.cascade_to_hidden&&u.state.hidden)F=this.get_checked_descendants(n),u.state[c?"selected":"checked"]&&F.push(u.id),y=y.concat(F);else{if(u.children)for(b=0,T=u.children.length;T>b;b++){var U=u.children[b];F=a._cascade_new_checked_state(U,t),y=y.concat(F),F.indexOf(U)>-1&&E.push(U)}var Q=a.get_node(u,!0),ee=E.length>0&&E.length<u.children.length;u.original&&u.original.state&&u.original.state.undetermined&&(u.original.state.undetermined=ee),ee?(u.state[c?"selected":"checked"]=!1,Q.attr("aria-selected",!1).children(".jstree-anchor").removeClass(c?"jstree-clicked":"jstree-checked")):t&&E.length===u.children.length?(u.state[c?"selected":"checked"]=t,y.push(u.id),Q.attr("aria-selected",!0).children(".jstree-anchor").addClass(c?"jstree-clicked":"jstree-checked")):(u.state[c?"selected":"checked"]=!1,Q.attr("aria-selected",!1).children(".jstree-anchor").removeClass(c?"jstree-clicked":"jstree-checked"))}return y},this.get_checked_descendants=function(n){var t=this,a=t.settings.checkbox.tie_selection,c=t._model.data[n];return i.vakata.array_filter(c.children_d,function(u){return t._model.data[u].state[a?"selected":"checked"]})},this.check_node=function(n,t){if(this.settings.checkbox.tie_selection)return this.select_node(n,!1,!0,t);var a,c,u;if(i.isArray(n)){for(n=n.slice(),c=0,u=n.length;u>c;c++)this.check_node(n[c],t);return!0}return n=this.get_node(n),n&&n.id!==i.jstree.root?(a=this.get_node(n,!0),void(n.state.checked||(n.state.checked=!0,this._data.checkbox.selected.push(n.id),a&&a.length&&a.children(".jstree-anchor").addClass("jstree-checked"),this.trigger("check_node",{node:n,selected:this._data.checkbox.selected,event:t})))):!1},this.uncheck_node=function(n,t){if(this.settings.checkbox.tie_selection)return this.deselect_node(n,!1,t);var a,c,u;if(i.isArray(n)){for(n=n.slice(),a=0,c=n.length;c>a;a++)this.uncheck_node(n[a],t);return!0}return n=this.get_node(n),n&&n.id!==i.jstree.root?(u=this.get_node(n,!0),void(n.state.checked&&(n.state.checked=!1,this._data.checkbox.selected=i.vakata.array_remove_item(this._data.checkbox.selected,n.id),u.length&&u.children(".jstree-anchor").removeClass("jstree-checked"),this.trigger("uncheck_node",{node:n,selected:this._data.checkbox.selected,event:t})))):!1},this.check_all=function(){if(this.settings.checkbox.tie_selection)return this.select_all();this._data.checkbox.selected.concat([]);var n,t;for(this._data.checkbox.selected=this._model.data[i.jstree.root].children_d.concat(),n=0,t=this._data.checkbox.selected.length;t>n;n++)this._model.data[this._data.checkbox.selected[n]]&&(this._model.data[this._data.checkbox.selected[n]].state.checked=!0);this.redraw(!0),this.trigger("check_all",{selected:this._data.checkbox.selected})},this.uncheck_all=function(){if(this.settings.checkbox.tie_selection)return this.deselect_all();var n=this._data.checkbox.selected.concat([]),t,a;for(t=0,a=this._data.checkbox.selected.length;a>t;t++)this._model.data[this._data.checkbox.selected[t]]&&(this._model.data[this._data.checkbox.selected[t]].state.checked=!1);this._data.checkbox.selected=[],this.element.find(".jstree-checked").removeClass("jstree-checked"),this.trigger("uncheck_all",{selected:this._data.checkbox.selected,node:n})},this.is_checked=function(n){return this.settings.checkbox.tie_selection?this.is_selected(n):(n=this.get_node(n),n&&n.id!==i.jstree.root?n.state.checked:!1)},this.get_checked=function(n){return this.settings.checkbox.tie_selection?this.get_selected(n):n?i.map(this._data.checkbox.selected,i.proxy(function(t){return this.get_node(t)},this)):this._data.checkbox.selected.slice()},this.get_top_checked=function(n){if(this.settings.checkbox.tie_selection)return this.get_top_selected(n);var t=this.get_checked(!0),a={},c,u,y,E;for(c=0,u=t.length;u>c;c++)a[t[c].id]=t[c];for(c=0,u=t.length;u>c;c++)for(y=0,E=t[c].children_d.length;E>y;y++)a[t[c].children_d[y]]&&delete a[t[c].children_d[y]];t=[];for(c in a)a.hasOwnProperty(c)&&t.push(c);return n?i.map(t,i.proxy(function(b){return this.get_node(b)},this)):t},this.get_bottom_checked=function(n){if(this.settings.checkbox.tie_selection)return this.get_bottom_selected(n);var t=this.get_checked(!0),a=[],c,u;for(c=0,u=t.length;u>c;c++)t[c].children.length||a.push(t[c].id);return n?i.map(a,i.proxy(function(y){return this.get_node(y)},this)):a},this.load_node=function(n,t){var a,c,u;if(!i.isArray(n)&&!this.settings.checkbox.tie_selection&&(u=this.get_node(n),u&&u.state.loaded))for(a=0,c=u.children_d.length;c>a;a++)this._model.data[u.children_d[a]].state.checked&&(this._data.checkbox.selected=i.vakata.array_remove_item(this._data.checkbox.selected,u.children_d[a]));return s.load_node.apply(this,arguments)},this.get_state=function(){var n=s.get_state.apply(this,arguments);return this.settings.checkbox.tie_selection||(n.checkbox=this._data.checkbox.selected.slice()),n},this.set_state=function(n,t){var a=s.set_state.apply(this,arguments);if(a&&n.checkbox){if(!this.settings.checkbox.tie_selection){this.uncheck_all();var c=this;i.each(n.checkbox,function(u,y){c.check_node(y)})}return delete n.checkbox,this.set_state(n,t),!1}return a},this.refresh=function(n,t){return this.settings.checkbox.tie_selection&&(this._data.checkbox.selected=[]),s.refresh.apply(this,arguments)}},i.jstree.defaults.conditionalselect=function(){return!0},i.jstree.plugins.conditionalselect=function(e,s){this.activate_node=function(n,t){return this.settings.conditionalselect.call(this,this.get_node(n),t)?s.activate_node.call(this,n,t):void 0}},i.jstree.defaults.contextmenu={select_node:!0,show_at_node:!0,items:function(e,s){return{create:{separator_before:!1,separator_after:!0,_disabled:!1,label:"Create",action:function(n){var t=i.jstree.reference(n.reference),a=t.get_node(n.reference);t.create_node(a,{},"last",function(c){try{t.edit(c)}catch{setTimeout(function(){t.edit(c)},0)}})}},rename:{separator_before:!1,separator_after:!1,_disabled:!1,label:"Rename",action:function(n){var t=i.jstree.reference(n.reference),a=t.get_node(n.reference);t.edit(a)}},remove:{separator_before:!1,icon:!1,separator_after:!1,_disabled:!1,label:"Delete",action:function(n){var t=i.jstree.reference(n.reference),a=t.get_node(n.reference);t.is_selected(a)?t.delete_node(t.get_selected()):t.delete_node(a)}},ccp:{separator_before:!0,icon:!1,separator_after:!1,label:"Edit",action:!1,submenu:{cut:{separator_before:!1,separator_after:!1,label:"Cut",action:function(n){var t=i.jstree.reference(n.reference),a=t.get_node(n.reference);t.is_selected(a)?t.cut(t.get_top_selected()):t.cut(a)}},copy:{separator_before:!1,icon:!1,separator_after:!1,label:"Copy",action:function(n){var t=i.jstree.reference(n.reference),a=t.get_node(n.reference);t.is_selected(a)?t.copy(t.get_top_selected()):t.copy(a)}},paste:{separator_before:!1,icon:!1,_disabled:function(n){return!i.jstree.reference(n.reference).can_paste()},separator_after:!1,label:"Paste",action:function(n){var t=i.jstree.reference(n.reference),a=t.get_node(n.reference);t.paste(a)}}}}}}},i.jstree.plugins.contextmenu=function(e,s){this.bind=function(){s.bind.call(this);var n=0,t=null,a,c;this.element.on("init.jstree loading.jstree ready.jstree",i.proxy(function(){this.get_container_ul().addClass("jstree-contextmenu")},this)).on("contextmenu.jstree",".jstree-anchor",i.proxy(function(u,y){u.target.tagName.toLowerCase()!=="input"&&(u.preventDefault(),n=u.ctrlKey?+new Date:0,(y||t)&&(n=+new Date+1e4),t&&clearTimeout(t),this.is_loading(u.currentTarget)||this.show_contextmenu(u.currentTarget,u.pageX,u.pageY,u))},this)).on("click.jstree",".jstree-anchor",i.proxy(function(u){this._data.contextmenu.visible&&(!n||+new Date-n>250)&&i.vakata.context.hide(),n=0},this)).on("touchstart.jstree",".jstree-anchor",function(u){u.originalEvent&&u.originalEvent.changedTouches&&u.originalEvent.changedTouches[0]&&(a=u.originalEvent.changedTouches[0].clientX,c=u.originalEvent.changedTouches[0].clientY,t=setTimeout(function(){i(u.currentTarget).trigger("contextmenu",!0)},750))}).on("touchmove.vakata.jstree",function(u){t&&u.originalEvent&&u.originalEvent.changedTouches&&u.originalEvent.changedTouches[0]&&(Math.abs(a-u.originalEvent.changedTouches[0].clientX)>10||Math.abs(c-u.originalEvent.changedTouches[0].clientY)>10)&&(clearTimeout(t),i.vakata.context.hide())}).on("touchend.vakata.jstree",function(u){t&&clearTimeout(t)}),i(N).on("context_hide.vakata.jstree",i.proxy(function(u,y){this._data.contextmenu.visible=!1,i(y.reference).removeClass("jstree-context")},this))},this.teardown=function(){this._data.contextmenu.visible&&i.vakata.context.hide(),s.teardown.call(this)},this.show_contextmenu=function(n,t,a,c){if(n=this.get_node(n),!n||n.id===i.jstree.root)return!1;var u=this.settings.contextmenu,y=this.get_node(n,!0),E=y.children(".jstree-anchor"),b=!1,T=!1;(u.show_at_node||t===x||a===x)&&(b=E.offset(),t=b.left,a=b.top+this._data.core.li_height),this.settings.contextmenu.select_node&&!this.is_selected(n)&&this.activate_node(n,c),T=u.items,i.isFunction(T)&&(T=T.call(this,n,i.proxy(function(F){this._show_contextmenu(n,t,a,F)},this))),i.isPlainObject(T)&&this._show_contextmenu(n,t,a,T)},this._show_contextmenu=function(n,t,a,c){var u=this.get_node(n,!0),y=u.children(".jstree-anchor");i(N).one("context_show.vakata.jstree",i.proxy(function(E,b){var T="jstree-contextmenu jstree-"+this.get_theme()+"-contextmenu";i(b.element).addClass(T),y.addClass("jstree-context")},this)),this._data.contextmenu.visible=!0,i.vakata.context.show(y,{x:t,y:a},c),this.trigger("show_contextmenu",{node:n,x:t,y:a})}},function(e){var s=!1,n={element:!1,reference:!1,position_x:0,position_y:0,items:[],html:"",is_visible:!1};e.vakata.context={settings:{hide_onmouseleave:0,icons:!0},_trigger:function(t){e(N).triggerHandler("context_"+t+".vakata",{reference:n.reference,element:n.element,position:{x:n.position_x,y:n.position_y}})},_execute:function(t){return t=n.items[t],t&&(!t._disabled||e.isFunction(t._disabled)&&!t._disabled({item:t,reference:n.reference,element:n.element}))&&t.action?t.action.call(null,{item:t,reference:n.reference,element:n.element,position:{x:n.position_x,y:n.position_y}}):!1},_parse:function(t,a){if(!t)return!1;a||(n.html="",n.items=[]);var c="",u=!1,y;return a&&(c+="<ul>"),e.each(t,function(E,b){return b?(n.items.push(b),!u&&b.separator_before&&(c+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>"),u=!1,c+="<li class='"+(b._class||"")+(b._disabled===!0||e.isFunction(b._disabled)&&b._disabled({item:b,reference:n.reference,element:n.element})?" vakata-contextmenu-disabled ":"")+"' "+(b.shortcut?" data-shortcut='"+b.shortcut+"' ":"")+">",c+="<a href='#' rel='"+(n.items.length-1)+"' "+(b.title?"title='"+b.title+"'":"")+">",e.vakata.context.settings.icons&&(c+="<i ",b.icon&&(c+=b.icon.indexOf("/")!==-1||b.icon.indexOf(".")!==-1?` style='background:url("`+b.icon+`") center center no-repeat' `:" class='"+b.icon+"' "),c+="></i><span class='vakata-contextmenu-sep'>&#160;</span>"),c+=(e.isFunction(b.label)?b.label({item:E,reference:n.reference,element:n.element}):b.label)+(b.shortcut?' <span class="vakata-contextmenu-shortcut vakata-contextmenu-shortcut-'+b.shortcut+'">'+(b.shortcut_label||"")+"</span>":"")+"</a>",b.submenu&&(y=e.vakata.context._parse(b.submenu,!0),y&&(c+=y)),c+="</li>",void(b.separator_after&&(c+="<li class='vakata-context-separator'><a href='#' "+(e.vakata.context.settings.icons?"":'style="margin-left:0px;"')+">&#160;</a></li>",u=!0))):!0}),c=c.replace(/<li class\='vakata-context-separator'\><\/li\>$/,""),a&&(c+="</ul>"),a||(n.html=c,e.vakata.context._trigger("parse")),c.length>10?c:!1},_show_submenu:function(t){if(t=e(t),t.length&&t.children("ul").length){var a=t.children("ul"),c=t.offset().left,u=c+t.outerWidth(),y=t.offset().top,E=a.width(),b=a.height(),T=e(window).width()+e(window).scrollLeft(),F=e(window).height()+e(window).scrollTop();s?t[u-(E+10+t.outerWidth())<0?"addClass":"removeClass"]("vakata-context-left"):t[u+E>T&&c>T-u?"addClass":"removeClass"]("vakata-context-right"),y+b+10>F&&a.css("bottom","-1px"),t.hasClass("vakata-context-right")?E>c&&a.css("margin-right",c-E):E>T-u&&a.css("margin-left",T-u-E),a.show()}},show:function(t,a,c){var u,y,E,b,T,F,U,Q,ee=!0;switch(n.element&&n.element.length&&n.element.width(""),ee){case(!a&&!t):return!1;case(!!a&&!!t):n.reference=t,n.position_x=a.x,n.position_y=a.y;break;case(!a&&!!t):n.reference=t,u=t.offset(),n.position_x=u.left+t.outerHeight(),n.position_y=u.top;break;case(!!a&&!t):n.position_x=a.x,n.position_y=a.y}t&&!c&&e(t).data("vakata_contextmenu")&&(c=e(t).data("vakata_contextmenu")),e.vakata.context._parse(c)&&n.element.html(n.html),n.items.length&&(n.element.appendTo(N.body),y=n.element,E=n.position_x,b=n.position_y,T=y.width(),F=y.height(),U=e(window).width()+e(window).scrollLeft(),Q=e(window).height()+e(window).scrollTop(),s&&(E-=y.outerWidth()-e(t).outerWidth(),E<e(window).scrollLeft()+20&&(E=e(window).scrollLeft()+20)),E+T+20>U&&(E=U-(T+20)),b+F+20>Q&&(b=Q-(F+20)),n.element.css({left:E,top:b}).show().find("a").first().focus().parent().addClass("vakata-context-hover"),n.is_visible=!0,e.vakata.context._trigger("show"))},hide:function(){n.is_visible&&(n.element.hide().find("ul").hide().end().find(":focus").blur().end().detach(),n.is_visible=!1,e.vakata.context._trigger("hide"))}},e(function(){s=e(N.body).css("direction")==="rtl";var t=!1;n.element=e("<ul class='vakata-context'></ul>"),n.element.on("mouseenter","li",function(a){a.stopImmediatePropagation(),e.contains(this,a.relatedTarget)||(t&&clearTimeout(t),n.element.find(".vakata-context-hover").removeClass("vakata-context-hover").end(),e(this).siblings().find("ul").hide().end().end().parentsUntil(".vakata-context","li").addBack().addClass("vakata-context-hover"),e.vakata.context._show_submenu(this))}).on("mouseleave","li",function(a){e.contains(this,a.relatedTarget)||e(this).find(".vakata-context-hover").addBack().removeClass("vakata-context-hover")}).on("mouseleave",function(a){e(this).find(".vakata-context-hover").removeClass("vakata-context-hover"),e.vakata.context.settings.hide_onmouseleave&&(t=setTimeout(function(c){return function(){e.vakata.context.hide()}}(),e.vakata.context.settings.hide_onmouseleave))}).on("click","a",function(a){a.preventDefault(),e(this).blur().parent().hasClass("vakata-context-disabled")||e.vakata.context._execute(e(this).attr("rel"))===!1||e.vakata.context.hide()}).on("keydown","a",function(a){var c=null;switch(a.which){case 13:case 32:a.type="click",a.preventDefault(),e(a.currentTarget).trigger(a);break;case 37:n.is_visible&&(n.element.find(".vakata-context-hover").last().closest("li").first().find("ul").hide().find(".vakata-context-hover").removeClass("vakata-context-hover").end().end().children("a").focus(),a.stopImmediatePropagation(),a.preventDefault());break;case 38:n.is_visible&&(c=n.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").prevAll("li:not(.vakata-context-separator)").first(),c.length||(c=n.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").last()),c.addClass("vakata-context-hover").children("a").focus(),a.stopImmediatePropagation(),a.preventDefault());break;case 39:n.is_visible&&(n.element.find(".vakata-context-hover").last().children("ul").show().children("li:not(.vakata-context-separator)").removeClass("vakata-context-hover").first().addClass("vakata-context-hover").children("a").focus(),a.stopImmediatePropagation(),a.preventDefault());break;case 40:n.is_visible&&(c=n.element.find("ul:visible").addBack().last().children(".vakata-context-hover").removeClass("vakata-context-hover").nextAll("li:not(.vakata-context-separator)").first(),c.length||(c=n.element.find("ul:visible").addBack().last().children("li:not(.vakata-context-separator)").first()),c.addClass("vakata-context-hover").children("a").focus(),a.stopImmediatePropagation(),a.preventDefault());break;case 27:e.vakata.context.hide(),a.preventDefault()}}).on("keydown",function(a){a.preventDefault();var c=n.element.find(".vakata-contextmenu-shortcut-"+a.which).parent();c.parent().not(".vakata-context-disabled")&&c.click()}),e(N).on("mousedown.vakata.jstree",function(a){n.is_visible&&n.element[0]!==a.target&&!e.contains(n.element[0],a.target)&&e.vakata.context.hide()}).on("context_show.vakata.jstree",function(a,c){n.element.find("li:has(ul)").children("a").addClass("vakata-context-parent"),s&&n.element.addClass("vakata-context-rtl").css("direction","rtl"),n.element.find("ul").hide().end()})})}(i),i.jstree.defaults.dnd={copy:!0,open_timeout:500,is_draggable:!0,check_while_dragging:!0,always_copy:!1,inside_pos:0,drag_selection:!0,touch:!0,large_drop_target:!1,large_drag_target:!1,use_html5:!1};var k,O;i.jstree.plugins.dnd=function(e,s){this.init=function(n,t){s.init.call(this,n,t),this.settings.dnd.use_html5=this.settings.dnd.use_html5&&"draggable"in N.createElement("span")},this.bind=function(){s.bind.call(this),this.element.on(this.settings.dnd.use_html5?"dragstart.jstree":"mousedown.jstree touchstart.jstree",this.settings.dnd.large_drag_target?".jstree-node":".jstree-anchor",i.proxy(function(n){if(this.settings.dnd.large_drag_target&&i(n.target).closest(".jstree-node")[0]!==n.currentTarget||n.type==="touchstart"&&(!this.settings.dnd.touch||this.settings.dnd.touch==="selected"&&!i(n.currentTarget).closest(".jstree-node").children(".jstree-anchor").hasClass("jstree-clicked")))return!0;var t=this.get_node(n.target),a=this.is_selected(t)&&this.settings.dnd.drag_selection?this.get_top_selected().length:1,c=a>1?a+" "+this.get_string("nodes"):this.get_text(n.currentTarget);if(this.settings.core.force_text&&(c=i.vakata.html.escape(c)),t&&t.id&&t.id!==i.jstree.root&&(n.which===1||n.type==="touchstart"||n.type==="dragstart")&&(this.settings.dnd.is_draggable===!0||i.isFunction(this.settings.dnd.is_draggable)&&this.settings.dnd.is_draggable.call(this,a>1?this.get_top_selected(!0):[t],n))){if(k={jstree:!0,origin:this,obj:this.get_node(t,!0),nodes:a>1?this.get_top_selected():[t.id]},O=n.currentTarget,!this.settings.dnd.use_html5)return this.element.trigger("mousedown.jstree"),i.vakata.dnd.start(n,k,'<div id="jstree-dnd" class="jstree-'+this.get_theme()+" jstree-"+this.get_theme()+"-"+this.get_theme_variant()+" "+(this.settings.core.themes.responsive?" jstree-dnd-responsive":"")+'"><i class="jstree-icon jstree-er"></i>'+c+'<ins class="jstree-copy" style="display:none;">+</ins></div>');i.vakata.dnd._trigger("start",n,{helper:i(),element:O,data:k})}},this)),this.settings.dnd.use_html5&&this.element.on("dragover.jstree",function(n){return n.preventDefault(),i.vakata.dnd._trigger("move",n,{helper:i(),element:O,data:k}),!1}).on("drop.jstree",i.proxy(function(n){return n.preventDefault(),i.vakata.dnd._trigger("stop",n,{helper:i(),element:O,data:k}),!1},this))},this.redraw_node=function(n,t,a,c){if(n=s.redraw_node.apply(this,arguments),n&&this.settings.dnd.use_html5)if(this.settings.dnd.large_drag_target)n.setAttribute("draggable",!0);else{var u,y,E=null;for(u=0,y=n.childNodes.length;y>u;u++)if(n.childNodes[u]&&n.childNodes[u].className&&n.childNodes[u].className.indexOf("jstree-anchor")!==-1){E=n.childNodes[u];break}E&&E.setAttribute("draggable",!0)}return n}},i(function(){var e=!1,s=!1,n=!1,t=!1,a=i('<div id="jstree-marker">&#160;</div>').hide();i(N).on("dragover.vakata.jstree",function(c){O&&i.vakata.dnd._trigger("move",c,{helper:i(),element:O,data:k})}).on("drop.vakata.jstree",function(c){O&&(i.vakata.dnd._trigger("stop",c,{helper:i(),element:O,data:k}),O=null,k=null)}).on("dnd_start.vakata.jstree",function(c,u){e=!1,n=!1,u&&u.data&&u.data.jstree&&a.appendTo(N.body)}).on("dnd_move.vakata.jstree",function(c,u){var y=u.event.target!==n.target;if(t&&(!u.event||u.event.type!=="dragover"||y)&&clearTimeout(t),u&&u.data&&u.data.jstree&&(!u.event.target.id||u.event.target.id!=="jstree-marker")){n=u.event;var E=i.jstree.reference(u.event.target),b=!1,T=!1,F=!1,U,Q,ee,ie,te,Ee,Ce,Se,Be,rt,et,R,le,V,he,ge,Y;if(E&&E._data&&E._data.dnd)if(a.attr("class","jstree-"+E.get_theme()+(E.settings.core.themes.responsive?" jstree-dnd-responsive":"")),he=u.data.origin&&(u.data.origin.settings.dnd.always_copy||u.data.origin.settings.dnd.copy&&(u.event.metaKey||u.event.ctrlKey)),u.helper.children().attr("class","jstree-"+E.get_theme()+" jstree-"+E.get_theme()+"-"+E.get_theme_variant()+" "+(E.settings.core.themes.responsive?" jstree-dnd-responsive":"")).find(".jstree-copy").first()[he?"show":"hide"](),u.event.target!==E.element[0]&&u.event.target!==E.get_container_ul()[0]||E.get_container_ul().children().length!==0){if(b=E.settings.dnd.large_drop_target?i(u.event.target).closest(".jstree-node").children(".jstree-anchor"):i(u.event.target).closest(".jstree-anchor"),b&&b.length&&b.parent().is(".jstree-closed, .jstree-open, .jstree-leaf")&&(T=b.offset(),F=(u.event.pageY!==x?u.event.pageY:u.event.originalEvent.pageY)-T.top,ee=b.outerHeight(),Ee=ee/3>F?["b","i","a"]:F>ee-ee/3?["a","i","b"]:F>ee/2?["i","a","b"]:["i","b","a"],i.each(Ee,function(Me,Oe){switch(Oe){case"b":U=T.left-6,Q=T.top,ie=E.get_parent(b),te=b.parent().index(),Y="jstree-below";break;case"i":le=E.settings.dnd.inside_pos,V=E.get_node(b.parent()),U=T.left-2,Q=T.top+ee/2+1,ie=V.id,te=le==="first"?0:le==="last"?V.children.length:Math.min(le,V.children.length),Y="jstree-inside";break;case"a":U=T.left-6,Q=T.top+ee,ie=E.get_parent(b),te=b.parent().index()+1,Y="jstree-above"}for(Ce=!0,Se=0,Be=u.data.nodes.length;Be>Se;Se++)if(rt=u.data.origin&&(u.data.origin.settings.dnd.always_copy||u.data.origin.settings.dnd.copy&&(u.event.metaKey||u.event.ctrlKey))?"copy_node":"move_node",et=te,rt==="move_node"&&Oe==="a"&&u.data.origin&&u.data.origin===E&&ie===E.get_parent(u.data.nodes[Se])&&(R=E.get_node(ie),et>i.inArray(u.data.nodes[Se],R.children)&&(et-=1)),Ce=Ce&&(E&&E.settings&&E.settings.dnd&&E.settings.dnd.check_while_dragging===!1||E.check(rt,u.data.origin&&u.data.origin!==E?u.data.origin.get_node(u.data.nodes[Se]):u.data.nodes[Se],ie,et,{dnd:!0,ref:E.get_node(b.parent()),pos:Oe,origin:u.data.origin,is_multi:u.data.origin&&u.data.origin!==E,is_foreign:!u.data.origin})),!Ce){E&&E.last_error&&(s=E.last_error());break}return Oe==="i"&&b.parent().is(".jstree-closed")&&E.settings.dnd.open_timeout&&(!u.event||u.event.type!=="dragover"||y)&&(t&&clearTimeout(t),t=setTimeout(function(_e,me){return function(){_e.open_node(me)}}(E,b),E.settings.dnd.open_timeout)),Ce?(ge=E.get_node(ie,!0),ge.hasClass(".jstree-dnd-parent")||(i(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),ge.addClass("jstree-dnd-parent")),e={ins:E,par:ie,pos:Oe!=="i"||le!=="last"||te!==0||E.is_loaded(V)?te:"last"},a.css({left:U+"px",top:Q+"px"}).show(),a.removeClass("jstree-above jstree-inside jstree-below").addClass(Y),u.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),u.event.originalEvent&&u.event.originalEvent.dataTransfer&&(u.event.originalEvent.dataTransfer.dropEffect=he?"copy":"move"),s={},Ee=!0,!1):void 0}),Ee===!0))return}else{for(Ce=!0,Se=0,Be=u.data.nodes.length;Be>Se&&(Ce=Ce&&E.check(u.data.origin&&(u.data.origin.settings.dnd.always_copy||u.data.origin.settings.dnd.copy&&(u.event.metaKey||u.event.ctrlKey))?"copy_node":"move_node",u.data.origin&&u.data.origin!==E?u.data.origin.get_node(u.data.nodes[Se]):u.data.nodes[Se],i.jstree.root,"last",{dnd:!0,ref:E.get_node(i.jstree.root),pos:"i",origin:u.data.origin,is_multi:u.data.origin&&u.data.origin!==E,is_foreign:!u.data.origin}),!!Ce);Se++);if(Ce)return e={ins:E,par:i.jstree.root,pos:"last"},a.hide(),u.helper.find(".jstree-icon").first().removeClass("jstree-er").addClass("jstree-ok"),void(u.event.originalEvent&&u.event.originalEvent.dataTransfer&&(u.event.originalEvent.dataTransfer.dropEffect=he?"copy":"move"))}i(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),e=!1,u.helper.find(".jstree-icon").removeClass("jstree-ok").addClass("jstree-er"),u.event.originalEvent&&u.event.originalEvent.dataTransfer,a.hide()}}).on("dnd_scroll.vakata.jstree",function(c,u){u&&u.data&&u.data.jstree&&(a.hide(),e=!1,n=!1,u.helper.find(".jstree-icon").first().removeClass("jstree-ok").addClass("jstree-er"))}).on("dnd_stop.vakata.jstree",function(c,u){if(i(".jstree-dnd-parent").removeClass("jstree-dnd-parent"),t&&clearTimeout(t),u&&u.data&&u.data.jstree){a.hide().detach();var y,E,b=[];if(e){for(y=0,E=u.data.nodes.length;E>y;y++)b[y]=u.data.origin?u.data.origin.get_node(u.data.nodes[y]):u.data.nodes[y];e.ins[u.data.origin&&(u.data.origin.settings.dnd.always_copy||u.data.origin.settings.dnd.copy&&(u.event.metaKey||u.event.ctrlKey))?"copy_node":"move_node"](b,e.par,e.pos,!1,!1,!1,u.data.origin)}else y=i(u.event.target).closest(".jstree"),y.length&&s&&s.error&&s.error==="check"&&(y=y.jstree(!0),y&&y.settings.core.error.call(this,s));n=!1,e=!1}}).on("keyup.jstree keydown.jstree",function(c,u){u=i.vakata.dnd._get(),u&&u.data&&u.data.jstree&&(c.type==="keyup"&&c.which===27?(t&&clearTimeout(t),e=!1,s=!1,n=!1,t=!1,a.hide().detach(),i.vakata.dnd._clean()):(u.helper.find(".jstree-copy").first()[u.data.origin&&(u.data.origin.settings.dnd.always_copy||u.data.origin.settings.dnd.copy&&(c.metaKey||c.ctrlKey))?"show":"hide"](),n&&(n.metaKey=c.metaKey,n.ctrlKey=c.ctrlKey,i.vakata.dnd._trigger("move",n))))})}),function(e){e.vakata.html={div:e("<div></div>"),escape:function(n){return e.vakata.html.div.text(n).html()},strip:function(n){return e.vakata.html.div.empty().append(e.parseHTML(n)).text()}};var s={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1};e.vakata.dnd={settings:{scroll_speed:10,scroll_proximity:20,helper_left:5,helper_top:10,threshold:5,threshold_touch:10},_trigger:function(n,t,a){a===x&&(a=e.vakata.dnd._get()),a.event=t,e(N).triggerHandler("dnd_"+n+".vakata",a)},_get:function(){return{data:s.data,element:s.element,helper:s.helper}},_clean:function(){s.helper&&s.helper.remove(),s.scroll_i&&(clearInterval(s.scroll_i),s.scroll_i=!1),s={element:!1,target:!1,is_down:!1,is_drag:!1,helper:!1,helper_w:0,data:!1,init_x:0,init_y:0,scroll_l:0,scroll_t:0,scroll_e:!1,scroll_i:!1,is_touch:!1},O=null,e(N).off("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(N).off("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop)},_scroll:function(n){if(!s.scroll_e||!s.scroll_l&&!s.scroll_t)return s.scroll_i&&(clearInterval(s.scroll_i),s.scroll_i=!1),!1;if(!s.scroll_i)return s.scroll_i=setInterval(e.vakata.dnd._scroll,100),!1;if(n===!0)return!1;var t=s.scroll_e.scrollTop(),a=s.scroll_e.scrollLeft();s.scroll_e.scrollTop(t+s.scroll_t*e.vakata.dnd.settings.scroll_speed),s.scroll_e.scrollLeft(a+s.scroll_l*e.vakata.dnd.settings.scroll_speed),(t!==s.scroll_e.scrollTop()||a!==s.scroll_e.scrollLeft())&&e.vakata.dnd._trigger("scroll",s.scroll_e)},start:function(n,t,a){n.type==="touchstart"&&n.originalEvent&&n.originalEvent.changedTouches&&n.originalEvent.changedTouches[0]&&(n.pageX=n.originalEvent.changedTouches[0].pageX,n.pageY=n.originalEvent.changedTouches[0].pageY,n.target=N.elementFromPoint(n.originalEvent.changedTouches[0].pageX-window.pageXOffset,n.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_drag&&e.vakata.dnd.stop({});try{n.currentTarget.unselectable="on",n.currentTarget.onselectstart=function(){return!1},n.currentTarget.style&&(n.currentTarget.style.touchAction="none",n.currentTarget.style.msTouchAction="none",n.currentTarget.style.MozUserSelect="none")}catch{}return s.init_x=n.pageX,s.init_y=n.pageY,s.data=t,s.is_down=!0,s.element=n.currentTarget,s.target=n.target,s.is_touch=n.type==="touchstart",a!==!1&&(s.helper=e("<div id='vakata-dnd'></div>").html(a).css({display:"block",margin:"0",padding:"0",position:"absolute",top:"-2000px",lineHeight:"16px",zIndex:"10000"})),e(N).on("mousemove.vakata.jstree touchmove.vakata.jstree",e.vakata.dnd.drag),e(N).on("mouseup.vakata.jstree touchend.vakata.jstree",e.vakata.dnd.stop),!1},drag:function(n){if(n.type==="touchmove"&&n.originalEvent&&n.originalEvent.changedTouches&&n.originalEvent.changedTouches[0]&&(n.pageX=n.originalEvent.changedTouches[0].pageX,n.pageY=n.originalEvent.changedTouches[0].pageY,n.target=N.elementFromPoint(n.originalEvent.changedTouches[0].pageX-window.pageXOffset,n.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_down){if(!s.is_drag){if(!(Math.abs(n.pageX-s.init_x)>(s.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)||Math.abs(n.pageY-s.init_y)>(s.is_touch?e.vakata.dnd.settings.threshold_touch:e.vakata.dnd.settings.threshold)))return;s.helper&&(s.helper.appendTo(N.body),s.helper_w=s.helper.outerWidth()),s.is_drag=!0,e(s.target).one("click.vakata",!1),e.vakata.dnd._trigger("start",n)}var t=!1,a=!1,c=!1,u=!1,y=!1,E=!1,b=!1,T=!1,F=!1,U=!1;return s.scroll_t=0,s.scroll_l=0,s.scroll_e=!1,e(e(n.target).parentsUntil("body").addBack().get().reverse()).filter(function(){return/^auto|scroll$/.test(e(this).css("overflow"))&&(this.scrollHeight>this.offsetHeight||this.scrollWidth>this.offsetWidth)}).each(function(){var Q=e(this),ee=Q.offset();return this.scrollHeight>this.offsetHeight&&(ee.top+Q.height()-n.pageY<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=1),n.pageY-ee.top<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=-1)),this.scrollWidth>this.offsetWidth&&(ee.left+Q.width()-n.pageX<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=1),n.pageX-ee.left<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=-1)),s.scroll_t||s.scroll_l?(s.scroll_e=e(this),!1):void 0}),s.scroll_e||(t=e(N),a=e(window),c=t.height(),u=a.height(),y=t.width(),E=a.width(),b=t.scrollTop(),T=t.scrollLeft(),c>u&&n.pageY-b<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=-1),c>u&&u-(n.pageY-b)<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_t=1),y>E&&n.pageX-T<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=-1),y>E&&E-(n.pageX-T)<e.vakata.dnd.settings.scroll_proximity&&(s.scroll_l=1),(s.scroll_t||s.scroll_l)&&(s.scroll_e=t)),s.scroll_e&&e.vakata.dnd._scroll(!0),s.helper&&(F=parseInt(n.pageY+e.vakata.dnd.settings.helper_top,10),U=parseInt(n.pageX+e.vakata.dnd.settings.helper_left,10),c&&F+25>c&&(F=c-50),y&&U+s.helper_w>y&&(U=y-(s.helper_w+2)),s.helper.css({left:U+"px",top:F+"px"})),e.vakata.dnd._trigger("move",n),!1}},stop:function(n){if(n.type==="touchend"&&n.originalEvent&&n.originalEvent.changedTouches&&n.originalEvent.changedTouches[0]&&(n.pageX=n.originalEvent.changedTouches[0].pageX,n.pageY=n.originalEvent.changedTouches[0].pageY,n.target=N.elementFromPoint(n.originalEvent.changedTouches[0].pageX-window.pageXOffset,n.originalEvent.changedTouches[0].pageY-window.pageYOffset)),s.is_drag)n.target!==s.target&&e(s.target).off("click.vakata"),e.vakata.dnd._trigger("stop",n);else if(n.type==="touchend"&&n.target===s.target){var t=setTimeout(function(){e(n.target).click()},100);e(n.target).one("click",function(){t&&clearTimeout(t)})}return e.vakata.dnd._clean(),!1}}}(i),i.jstree.defaults.massload=null,i.jstree.plugins.massload=function(e,s){this.init=function(n,t){this._data.massload={},s.init.call(this,n,t)},this._load_nodes=function(n,t,a,c){var u=this.settings.massload,y=[],E=this._model.data,b,T,F;if(!a){for(b=0,T=n.length;T>b;b++)(!E[n[b]]||!E[n[b]].state.loaded&&!E[n[b]].state.failed||c)&&(y.push(n[b]),F=this.get_node(n[b],!0),F&&F.length&&F.addClass("jstree-loading").attr("aria-busy",!0));if(this._data.massload={},y.length){if(i.isFunction(u))return u.call(this,y,i.proxy(function(U){var Q,ee;if(U)for(Q in U)U.hasOwnProperty(Q)&&(this._data.massload[Q]=U[Q]);for(Q=0,ee=n.length;ee>Q;Q++)F=this.get_node(n[Q],!0),F&&F.length&&F.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,n,t,a,c)},this));if(typeof u=="object"&&u&&u.url)return u=i.extend(!0,{},u),i.isFunction(u.url)&&(u.url=u.url.call(this,y)),i.isFunction(u.data)&&(u.data=u.data.call(this,y)),i.ajax(u).done(i.proxy(function(U,Q,ee){var ie,te;if(U)for(ie in U)U.hasOwnProperty(ie)&&(this._data.massload[ie]=U[ie]);for(ie=0,te=n.length;te>ie;ie++)F=this.get_node(n[ie],!0),F&&F.length&&F.removeClass("jstree-loading").attr("aria-busy",!1);s._load_nodes.call(this,n,t,a,c)},this)).fail(i.proxy(function(U){s._load_nodes.call(this,n,t,a,c)},this))}}return s._load_nodes.call(this,n,t,a,c)},this._load_node=function(n,t){var a=this._data.massload[n.id],c=null,u;return a?(c=this[typeof a=="string"?"_append_html_data":"_append_json_data"](n,typeof a=="string"?i(i.parseHTML(a)).filter(function(){return this.nodeType!==3}):a,function(y){t.call(this,y)}),u=this.get_node(n.id,!0),u&&u.length&&u.removeClass("jstree-loading").attr("aria-busy",!1),delete this._data.massload[n.id],c):s._load_node.call(this,n,t)}},i.jstree.defaults.search={ajax:!1,fuzzy:!1,case_sensitive:!1,show_only_matches:!1,show_only_matches_children:!1,close_opened_onclear:!0,search_leaves_only:!1,search_callback:!1},i.jstree.plugins.search=function(e,s){this.bind=function(){s.bind.call(this),this._data.search.str="",this._data.search.dom=i(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=!1,this._data.search.smc=!1,this._data.search.hdn=[],this.element.on("search.jstree",i.proxy(function(n,t){if(this._data.search.som&&t.res.length){var a=this._model.data,c,u,y=[],E,b;for(c=0,u=t.res.length;u>c;c++)if(a[t.res[c]]&&!a[t.res[c]].state.hidden&&(y.push(t.res[c]),y=y.concat(a[t.res[c]].parents),this._data.search.smc))for(E=0,b=a[t.res[c]].children_d.length;b>E;E++)a[a[t.res[c]].children_d[E]]&&!a[a[t.res[c]].children_d[E]].state.hidden&&y.push(a[t.res[c]].children_d[E]);y=i.vakata.array_remove_item(i.vakata.array_unique(y),i.jstree.root),this._data.search.hdn=this.hide_all(!0),this.show_node(y,!0),this.redraw(!0)}},this)).on("clear_search.jstree",i.proxy(function(n,t){this._data.search.som&&t.res.length&&(this.show_node(this._data.search.hdn,!0),this.redraw(!0))},this))},this.search=function(n,t,a,c,u,y){if(n===!1||i.vakata.trim(n.toString())==="")return this.clear_search();c=this.get_node(c),c=c&&c.id?c.id:null,n=n.toString();var E=this.settings.search,b=E.ajax?E.ajax:!1,T=this._model.data,F=null,U=[],Q=[],ee,ie;if(this._data.search.res.length&&!u&&this.clear_search(),a===x&&(a=E.show_only_matches),y===x&&(y=E.show_only_matches_children),!t&&b!==!1)return i.isFunction(b)?b.call(this,n,i.proxy(function(te){te&&te.d&&(te=te.d),this._load_nodes(i.isArray(te)?i.vakata.array_unique(te):[],function(){this.search(n,!0,a,c,u,y)})},this),c):(b=i.extend({},b),b.data||(b.data={}),b.data.str=n,c&&(b.data.inside=c),this._data.search.lastRequest&&this._data.search.lastRequest.abort(),this._data.search.lastRequest=i.ajax(b).fail(i.proxy(function(){this._data.core.last_error={error:"ajax",plugin:"search",id:"search_01",reason:"Could not load search parents",data:JSON.stringify(b)},this.settings.core.error.call(this,this._data.core.last_error)},this)).done(i.proxy(function(te){te&&te.d&&(te=te.d),this._load_nodes(i.isArray(te)?i.vakata.array_unique(te):[],function(){this.search(n,!0,a,c,u,y)})},this)),this._data.search.lastRequest);if(u||(this._data.search.str=n,this._data.search.dom=i(),this._data.search.res=[],this._data.search.opn=[],this._data.search.som=a,this._data.search.smc=y),F=new i.vakata.search(n,!0,{caseSensitive:E.case_sensitive,fuzzy:E.fuzzy}),i.each(T[c||i.jstree.root].children_d,function(te,Ee){var Ce=T[Ee];Ce.text&&!Ce.state.hidden&&(!E.search_leaves_only||Ce.state.loaded&&Ce.children.length===0)&&(E.search_callback&&E.search_callback.call(this,n,Ce)||!E.search_callback&&F.search(Ce.text).isMatch)&&(U.push(Ee),Q=Q.concat(Ce.parents))}),U.length){for(Q=i.vakata.array_unique(Q),ee=0,ie=Q.length;ie>ee;ee++)Q[ee]!==i.jstree.root&&T[Q[ee]]&&this.open_node(Q[ee],null,0)===!0&&this._data.search.opn.push(Q[ee]);u?(this._data.search.dom=this._data.search.dom.add(i(this.element[0].querySelectorAll("#"+i.map(U,function(te){return"0123456789".indexOf(te[0])!==-1?"\\3"+te[0]+" "+te.substr(1).replace(i.jstree.idregex,"\\$&"):te.replace(i.jstree.idregex,"\\$&")}).join(", #")))),this._data.search.res=i.vakata.array_unique(this._data.search.res.concat(U))):(this._data.search.dom=i(this.element[0].querySelectorAll("#"+i.map(U,function(te){return"0123456789".indexOf(te[0])!==-1?"\\3"+te[0]+" "+te.substr(1).replace(i.jstree.idregex,"\\$&"):te.replace(i.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.res=U),this._data.search.dom.children(".jstree-anchor").addClass("jstree-search")}this.trigger("search",{nodes:this._data.search.dom,str:n,res:this._data.search.res,show_only_matches:a})},this.clear_search=function(){this.settings.search.close_opened_onclear&&this.close_node(this._data.search.opn,0),this.trigger("clear_search",{nodes:this._data.search.dom,str:this._data.search.str,res:this._data.search.res}),this._data.search.res.length&&(this._data.search.dom=i(this.element[0].querySelectorAll("#"+i.map(this._data.search.res,function(n){return"0123456789".indexOf(n[0])!==-1?"\\3"+n[0]+" "+n.substr(1).replace(i.jstree.idregex,"\\$&"):n.replace(i.jstree.idregex,"\\$&")}).join(", #"))),this._data.search.dom.children(".jstree-anchor").removeClass("jstree-search")),this._data.search.str="",this._data.search.res=[],this._data.search.opn=[],this._data.search.dom=i()},this.redraw_node=function(n,t,a,c){if(n=s.redraw_node.apply(this,arguments),n&&i.inArray(n.id,this._data.search.res)!==-1){var u,y,E=null;for(u=0,y=n.childNodes.length;y>u;u++)if(n.childNodes[u]&&n.childNodes[u].className&&n.childNodes[u].className.indexOf("jstree-anchor")!==-1){E=n.childNodes[u];break}E&&(E.className+=" jstree-search")}return n}},function(e){e.vakata.search=function(s,n,t){t=t||{},t=e.extend({},e.vakata.search.defaults,t),t.fuzzy!==!1&&(t.fuzzy=!0),s=t.caseSensitive?s:s.toLowerCase();var a=t.location,c=t.distance,u=t.threshold,y=s.length,E,b,T,F;return y>32&&(t.fuzzy=!1),t.fuzzy&&(E=1<<y-1,b=function(){var U={},Q=0;for(Q=0;y>Q;Q++)U[s.charAt(Q)]=0;for(Q=0;y>Q;Q++)U[s.charAt(Q)]|=1<<y-Q-1;return U}(),T=function(U,Q){var ee=U/y,ie=Math.abs(a-Q);return c?ee+ie/c:ie?1:ee}),F=function(U){if(U=t.caseSensitive?U:U.toLowerCase(),s===U||U.indexOf(s)!==-1)return{isMatch:!0,score:0};if(!t.fuzzy)return{isMatch:!1,score:1};var Q,ee,ie=U.length,te=u,Ee=U.indexOf(s,a),Ce,Se,Be=y+ie,rt,et,R,le,V,he=1;for(Ee!==-1&&(te=Math.min(T(0,Ee),te),Ee=U.lastIndexOf(s,a+y),Ee!==-1&&(te=Math.min(T(0,Ee),te))),Ee=-1,Q=0;y>Q;Q++){for(Ce=0,Se=Be;Se>Ce;)T(Q,a+Se)<=te?Ce=Se:Be=Se,Se=Math.floor((Be-Ce)/2+Ce);for(Be=Se,et=Math.max(1,a-Se+1),R=Math.min(a+Se,ie)+y,le=new Array(R+2),le[R+1]=(1<<Q)-1,ee=R;ee>=et;ee--)if(V=b[U.charAt(ee-1)],Q===0?le[ee]=(le[ee+1]<<1|1)&V:le[ee]=(le[ee+1]<<1|1)&V|((rt[ee+1]|rt[ee])<<1|1)|rt[ee+1],le[ee]&E&&(he=T(Q,ee-1),te>=he)){if(te=he,Ee=ee-1,!(Ee>a))break;et=Math.max(1,2*a-Ee)}if(T(Q+1,a)>te)break;rt=le}return{isMatch:Ee>=0,score:he}},n===!0?{search:F}:F(n)},e.vakata.search.defaults={location:0,distance:100,threshold:.6,fuzzy:!1,caseSensitive:!1}}(i),i.jstree.defaults.sort=function(e,s){return this.get_text(e)>this.get_text(s)?1:-1},i.jstree.plugins.sort=function(e,s){this.bind=function(){s.bind.call(this),this.element.on("model.jstree",i.proxy(function(n,t){this.sort(t.parent,!0)},this)).on("rename_node.jstree create_node.jstree",i.proxy(function(n,t){this.sort(t.parent||t.node.parent,!1),this.redraw_node(t.parent||t.node.parent,!0)},this)).on("move_node.jstree copy_node.jstree",i.proxy(function(n,t){this.sort(t.parent,!1),this.redraw_node(t.parent,!0)},this))},this.sort=function(n,t){var a,c;if(n=this.get_node(n),n&&n.children&&n.children.length&&(n.children.sort(i.proxy(this.settings.sort,this)),t))for(a=0,c=n.children_d.length;c>a;a++)this.sort(n.children_d[a],!1)}};var z=!1;i.jstree.defaults.state={key:"jstree",events:"changed.jstree open_node.jstree close_node.jstree check_node.jstree uncheck_node.jstree",ttl:!1,filter:!1,preserve_loaded:!1},i.jstree.plugins.state=function(e,s){this.bind=function(){s.bind.call(this);var n=i.proxy(function(){this.element.on(this.settings.state.events,i.proxy(function(){z&&clearTimeout(z),z=setTimeout(i.proxy(function(){this.save_state()},this),100)},this)),this.trigger("state_ready")},this);this.element.on("ready.jstree",i.proxy(function(t,a){this.element.one("restore_state.jstree",n),this.restore_state()||n()},this))},this.save_state=function(){var n=this.get_state();this.settings.state.preserve_loaded||delete n.core.loaded;var t={state:n,ttl:this.settings.state.ttl,sec:+new Date};i.vakata.storage.set(this.settings.state.key,JSON.stringify(t))},this.restore_state=function(){var n=i.vakata.storage.get(this.settings.state.key);if(n)try{n=JSON.parse(n)}catch{return!1}return n&&n.ttl&&n.sec&&+new Date-n.sec>n.ttl?!1:(n&&n.state&&(n=n.state),n&&i.isFunction(this.settings.state.filter)&&(n=this.settings.state.filter.call(this,n)),n?(this.settings.state.preserve_loaded||delete n.core.loaded,this.element.one("set_state.jstree",function(t,a){a.instance.trigger("restore_state",{state:i.extend(!0,{},n)})}),this.set_state(n),!0):!1)},this.clear_state=function(){return i.vakata.storage.del(this.settings.state.key)}},function(e,s){e.vakata.storage={set:function(n,t){return window.localStorage.setItem(n,t)},get:function(n){return window.localStorage.getItem(n)},del:function(n){return window.localStorage.removeItem(n)}}}(i),i.jstree.defaults.types={default:{}},i.jstree.defaults.types[i.jstree.root]={},i.jstree.plugins.types=function(e,s){this.init=function(n,t){var a,c;if(t&&t.types&&t.types.default){for(a in t.types)if(a!=="default"&&a!==i.jstree.root&&t.types.hasOwnProperty(a))for(c in t.types.default)t.types.default.hasOwnProperty(c)&&t.types[a][c]===x&&(t.types[a][c]=t.types.default[c])}s.init.call(this,n,t),this._model.data[i.jstree.root].type=i.jstree.root},this.refresh=function(n,t){s.refresh.call(this,n,t),this._model.data[i.jstree.root].type=i.jstree.root},this.bind=function(){this.element.on("model.jstree",i.proxy(function(n,t){var a=this._model.data,c=t.nodes,u=this.settings.types,y,E,b="default",T;for(y=0,E=c.length;E>y;y++){if(b="default",a[c[y]].original&&a[c[y]].original.type&&u[a[c[y]].original.type]&&(b=a[c[y]].original.type),a[c[y]].data&&a[c[y]].data.jstree&&a[c[y]].data.jstree.type&&u[a[c[y]].data.jstree.type]&&(b=a[c[y]].data.jstree.type),a[c[y]].type=b,a[c[y]].icon===!0&&u[b].icon!==x&&(a[c[y]].icon=u[b].icon),u[b].li_attr!==x&&typeof u[b].li_attr=="object"){for(T in u[b].li_attr)if(u[b].li_attr.hasOwnProperty(T)){if(T==="id")continue;a[c[y]].li_attr[T]===x?a[c[y]].li_attr[T]=u[b].li_attr[T]:T==="class"&&(a[c[y]].li_attr.class=u[b].li_attr.class+" "+a[c[y]].li_attr.class)}}if(u[b].a_attr!==x&&typeof u[b].a_attr=="object"){for(T in u[b].a_attr)if(u[b].a_attr.hasOwnProperty(T)){if(T==="id")continue;a[c[y]].a_attr[T]===x?a[c[y]].a_attr[T]=u[b].a_attr[T]:T==="href"&&a[c[y]].a_attr[T]==="#"?a[c[y]].a_attr.href=u[b].a_attr.href:T==="class"&&(a[c[y]].a_attr.class=u[b].a_attr.class+" "+a[c[y]].a_attr.class)}}}a[i.jstree.root].type=i.jstree.root},this)),s.bind.call(this)},this.get_json=function(n,t,a){var c,u,y=this._model.data,E=t?i.extend(!0,{},t,{no_id:!1}):{},b=s.get_json.call(this,n,E,a);if(b===!1)return!1;if(i.isArray(b))for(c=0,u=b.length;u>c;c++)b[c].type=b[c].id&&y[b[c].id]&&y[b[c].id].type?y[b[c].id].type:"default",t&&t.no_id&&(delete b[c].id,b[c].li_attr&&b[c].li_attr.id&&delete b[c].li_attr.id,b[c].a_attr&&b[c].a_attr.id&&delete b[c].a_attr.id);else b.type=b.id&&y[b.id]&&y[b.id].type?y[b.id].type:"default",t&&t.no_id&&(b=this._delete_ids(b));return b},this._delete_ids=function(n){if(i.isArray(n)){for(var t=0,a=n.length;a>t;t++)n[t]=this._delete_ids(n[t]);return n}return delete n.id,n.li_attr&&n.li_attr.id&&delete n.li_attr.id,n.a_attr&&n.a_attr.id&&delete n.a_attr.id,n.children&&i.isArray(n.children)&&(n.children=this._delete_ids(n.children)),n},this.check=function(n,t,a,c,u){if(s.check.call(this,n,t,a,c,u)===!1)return!1;t=t&&t.id?t:this.get_node(t),a=a&&a.id?a:this.get_node(a);var y=t&&t.id?u&&u.origin?u.origin:i.jstree.reference(t.id):null,E,b,T,F;switch(y=y&&y._model&&y._model.data?y._model.data:null,n){case"create_node":case"move_node":case"copy_node":if(n!=="move_node"||i.inArray(t.id,a.children)===-1){if(E=this.get_rules(a),E.max_children!==x&&E.max_children!==-1&&E.max_children===a.children.length)return this._data.core.last_error={error:"check",plugin:"types",id:"types_01",reason:"max_children prevents function: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})},!1;if(E.valid_children!==x&&E.valid_children!==-1&&i.inArray(t.type||"default",E.valid_children)===-1)return this._data.core.last_error={error:"check",plugin:"types",id:"types_02",reason:"valid_children prevents function: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})},!1;if(y&&t.children_d&&t.parents){for(b=0,T=0,F=t.children_d.length;F>T;T++)b=Math.max(b,y[t.children_d[T]].parents.length);b=b-t.parents.length+1}(0>=b||b===x)&&(b=1);do{if(E.max_depth!==x&&E.max_depth!==-1&&E.max_depth<b)return this._data.core.last_error={error:"check",plugin:"types",id:"types_03",reason:"max_depth prevents function: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})},!1;a=this.get_node(a.parent),E=this.get_rules(a),b++}while(a)}}return!0},this.get_rules=function(n){if(n=this.get_node(n),!n)return!1;var t=this.get_type(n,!0);return t.max_depth===x&&(t.max_depth=-1),t.max_children===x&&(t.max_children=-1),t.valid_children===x&&(t.valid_children=-1),t},this.get_type=function(n,t){return n=this.get_node(n),n?t?i.extend({type:n.type},this.settings.types[n.type]):n.type:!1},this.set_type=function(n,t){var a=this._model.data,c,u,y,E,b,T,F,U;if(i.isArray(n)){for(n=n.slice(),u=0,y=n.length;y>u;u++)this.set_type(n[u],t);return!0}if(c=this.settings.types,n=this.get_node(n),!c[t]||!n)return!1;if(F=this.get_node(n,!0),F&&F.length&&(U=F.children(".jstree-anchor")),E=n.type,b=this.get_icon(n),n.type=t,(b===!0||!c[E]||c[E].icon!==x&&b===c[E].icon)&&this.set_icon(n,c[t].icon!==x?c[t].icon:!0),c[E]&&c[E].li_attr!==x&&typeof c[E].li_attr=="object"){for(T in c[E].li_attr)if(c[E].li_attr.hasOwnProperty(T)){if(T==="id")continue;T==="class"?(a[n.id].li_attr.class=(a[n.id].li_attr.class||"").replace(c[E].li_attr[T],""),F&&F.removeClass(c[E].li_attr[T])):a[n.id].li_attr[T]===c[E].li_attr[T]&&(a[n.id].li_attr[T]=null,F&&F.removeAttr(T))}}if(c[E]&&c[E].a_attr!==x&&typeof c[E].a_attr=="object"){for(T in c[E].a_attr)if(c[E].a_attr.hasOwnProperty(T)){if(T==="id")continue;T==="class"?(a[n.id].a_attr.class=(a[n.id].a_attr.class||"").replace(c[E].a_attr[T],""),U&&U.removeClass(c[E].a_attr[T])):a[n.id].a_attr[T]===c[E].a_attr[T]&&(T==="href"?(a[n.id].a_attr[T]="#",U&&U.attr("href","#")):(delete a[n.id].a_attr[T],U&&U.removeAttr(T)))}}if(c[t].li_attr!==x&&typeof c[t].li_attr=="object"){for(T in c[t].li_attr)if(c[t].li_attr.hasOwnProperty(T)){if(T==="id")continue;a[n.id].li_attr[T]===x?(a[n.id].li_attr[T]=c[t].li_attr[T],F&&(T==="class"?F.addClass(c[t].li_attr[T]):F.attr(T,c[t].li_attr[T]))):T==="class"&&(a[n.id].li_attr.class=c[t].li_attr[T]+" "+a[n.id].li_attr.class,F&&F.addClass(c[t].li_attr[T]))}}if(c[t].a_attr!==x&&typeof c[t].a_attr=="object"){for(T in c[t].a_attr)if(c[t].a_attr.hasOwnProperty(T)){if(T==="id")continue;a[n.id].a_attr[T]===x?(a[n.id].a_attr[T]=c[t].a_attr[T],U&&(T==="class"?U.addClass(c[t].a_attr[T]):U.attr(T,c[t].a_attr[T]))):T==="href"&&a[n.id].a_attr[T]==="#"?(a[n.id].a_attr.href=c[t].a_attr.href,U&&U.attr("href",c[t].a_attr.href)):T==="class"&&(a[n.id].a_attr.class=c[t].a_attr.class+" "+a[n.id].a_attr.class,U&&U.addClass(c[t].a_attr[T]))}}return!0}},i.jstree.defaults.unique={case_sensitive:!1,trim_whitespace:!1,duplicate:function(e,s){return e+" ("+s+")"}},i.jstree.plugins.unique=function(e,s){this.check=function(n,t,a,c,u){if(s.check.call(this,n,t,a,c,u)===!1)return!1;if(t=t&&t.id?t:this.get_node(t),a=a&&a.id?a:this.get_node(a),!a||!a.children)return!0;var y=n==="rename_node"?c:t.text,E=[],b=this.settings.unique.case_sensitive,T=this.settings.unique.trim_whitespace,F=this._model.data,U,Q,ee;for(U=0,Q=a.children.length;Q>U;U++)ee=F[a.children[U]].text,b||(ee=ee.toLowerCase()),T&&(ee=ee.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),E.push(ee);switch(b||(y=y.toLowerCase()),T&&(y=y.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),n){case"delete_node":return!0;case"rename_node":return ee=t.text||"",b||(ee=ee.toLowerCase()),T&&(ee=ee.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),U=i.inArray(y,E)===-1||t.text&&ee===y,U||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_01",reason:"Child with name "+y+" already exists. Preventing: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})}),U;case"create_node":return U=i.inArray(y,E)===-1,U||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_04",reason:"Child with name "+y+" already exists. Preventing: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})}),U;case"copy_node":return U=i.inArray(y,E)===-1,U||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_02",reason:"Child with name "+y+" already exists. Preventing: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})}),U;case"move_node":return U=t.parent===a.id&&(!u||!u.is_multi)||i.inArray(y,E)===-1,U||(this._data.core.last_error={error:"check",plugin:"unique",id:"unique_03",reason:"Child with name "+y+" already exists. Preventing: "+n,data:JSON.stringify({chk:n,pos:c,obj:t&&t.id?t.id:!1,par:a&&a.id?a.id:!1})}),U}return!0},this.create_node=function(n,t,a,c,u){if(!t||t.text===x){if(n===null&&(n=i.jstree.root),n=this.get_node(n),!n)return s.create_node.call(this,n,t,a,c,u);if(a=a===x?"last":a,!a.toString().match(/^(before|after)$/)&&!u&&!this.is_loaded(n))return s.create_node.call(this,n,t,a,c,u);t||(t={});var y,E,b,T,F,U=this._model.data,Q=this.settings.unique.case_sensitive,ee=this.settings.unique.trim_whitespace,ie=this.settings.unique.duplicate,te;for(E=y=this.get_string("New node"),b=[],T=0,F=n.children.length;F>T;T++)te=U[n.children[T]].text,Q||(te=te.toLowerCase()),ee&&(te=te.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"")),b.push(te);for(T=1,te=E,Q||(te=te.toLowerCase()),ee&&(te=te.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));i.inArray(te,b)!==-1;)E=ie.call(this,y,++T).toString(),te=E,Q||(te=te.toLowerCase()),ee&&(te=te.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""));t.text=E}return s.create_node.call(this,n,t,a,c,u)}};var L=N.createElement("DIV");if(L.setAttribute("unselectable","on"),L.setAttribute("role","presentation"),L.className="jstree-wholerow",L.innerHTML="&#160;",i.jstree.plugins.wholerow=function(e,s){this.bind=function(){s.bind.call(this),this.element.on("ready.jstree set_state.jstree",i.proxy(function(){this.hide_dots()},this)).on("init.jstree loading.jstree ready.jstree",i.proxy(function(){this.get_container_ul().addClass("jstree-wholerow-ul")},this)).on("deselect_all.jstree",i.proxy(function(n,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked")},this)).on("changed.jstree",i.proxy(function(n,t){this.element.find(".jstree-wholerow-clicked").removeClass("jstree-wholerow-clicked");var a=!1,c,u;for(c=0,u=t.selected.length;u>c;c++)a=this.get_node(t.selected[c],!0),a&&a.length&&a.children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("open_node.jstree",i.proxy(function(n,t){this.get_node(t.node,!0).find(".jstree-clicked").parent().children(".jstree-wholerow").addClass("jstree-wholerow-clicked")},this)).on("hover_node.jstree dehover_node.jstree",i.proxy(function(n,t){n.type==="hover_node"&&this.is_disabled(t.node)||this.get_node(t.node,!0).children(".jstree-wholerow")[n.type==="hover_node"?"addClass":"removeClass"]("jstree-wholerow-hovered")},this)).on("contextmenu.jstree",".jstree-wholerow",i.proxy(function(n){if(this._data.contextmenu){n.preventDefault();var t=i.Event("contextmenu",{metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey,pageX:n.pageX,pageY:n.pageY});i(n.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t)}},this)).on("click.jstree",".jstree-wholerow",function(n){n.stopImmediatePropagation();var t=i.Event("click",{metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey});i(n.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()}).on("dblclick.jstree",".jstree-wholerow",function(n){n.stopImmediatePropagation();var t=i.Event("dblclick",{metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey});i(n.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()}).on("click.jstree",".jstree-leaf > .jstree-ocl",i.proxy(function(n){n.stopImmediatePropagation();var t=i.Event("click",{metaKey:n.metaKey,ctrlKey:n.ctrlKey,altKey:n.altKey,shiftKey:n.shiftKey});i(n.currentTarget).closest(".jstree-node").children(".jstree-anchor").first().trigger(t).focus()},this)).on("mouseover.jstree",".jstree-wholerow, .jstree-icon",i.proxy(function(n){return n.stopImmediatePropagation(),this.is_disabled(n.currentTarget)||this.hover_node(n.currentTarget),!1},this)).on("mouseleave.jstree",".jstree-node",i.proxy(function(n){this.dehover_node(n.currentTarget)},this))},this.teardown=function(){this.settings.wholerow&&this.element.find(".jstree-wholerow").remove(),s.teardown.call(this)},this.redraw_node=function(n,t,a,c){if(n=s.redraw_node.apply(this,arguments)){var u=L.cloneNode(!0);i.inArray(n.id,this._data.core.selected)!==-1&&(u.className+=" jstree-wholerow-clicked"),this._data.core.focused&&this._data.core.focused===n.id&&(u.className+=" jstree-wholerow-hovered"),n.insertBefore(u,n.childNodes[0])}return n}},window.customElements&&Object&&Object.create){var G=Object.create(HTMLElement.prototype);G.createdCallback=function(){var e={core:{},plugins:[]},s;for(s in i.jstree.plugins)i.jstree.plugins.hasOwnProperty(s)&&this.attributes[s]&&(e.plugins.push(s),this.getAttribute(s)&&JSON.parse(this.getAttribute(s))&&(e[s]=JSON.parse(this.getAttribute(s))));for(s in i.jstree.defaults.core)i.jstree.defaults.core.hasOwnProperty(s)&&this.attributes[s]&&(e.core[s]=JSON.parse(this.getAttribute(s))||this.getAttribute(s));i(this).jstree(e)};try{window.customElements.define("vakata-jstree",function(){},{prototype:G})}catch{}}}})},function(be,I){be.exports=`/* jsTree default theme */
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
`},function(be,I){be.exports=`/*
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
`},function(be,I,l){const f=be.exports={},_=l(3),v=l(4),i=l(1),S=l(0).Common;f._isIOS=window.navigator&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream,f._matterLink="https://brm.io/matter-js/",f.create=function(g){let d=Object.assign({example:{instance:null},examples:[],resetOnOrientation:!1,preventZoom:!1,fullPage:!1,startExample:!0,appendTo:document.body,toolbar:{title:null,url:null,reset:!0,source:!1,inspector:!1,tools:!1,fullscreen:!0,exampleSelect:!1},tools:{inspector:null,gui:null},dom:{}},g||{});return(!g.toolbar||d.examples.length>1&&g.toolbar&&g.toolbar.exampleSelect!==!1)&&(d.toolbar.exampleSelect=!0),f._isIOS&&(d.toolbar.fullscreen=!1),_||(d.toolbar.tools=!1,d.tools.gui=!1),v||(d.toolbar.inspector=!1,d.tools.inspector=!1),d.dom=f._createDom(d),f._bindDom(d),!d.fullPage&&d.inline!==!1&&d.dom.root.classList.add("matter-demo-inline"),d.appendTo&&d.appendTo.appendChild(d.dom.root),d.startExample&&f.start(d,d.startExample),d},f.start=function(g,d){d=typeof d=="string"?d:g.examples[0].id,window.location.hash.length>0&&(d=window.location.hash.slice(1)),f.setExampleById(g,d)},f.stop=function(g){g.example&&g.example.instance&&g.example.instance.stop()},f.reset=function(g){S._nextId=0,S._seed=0,f.setExample(g,g.example)},f.setExampleById=function(g,d){let m=g.examples.filter(w=>w.id===d)[0];f.setExample(g,m)},f.setExample=function(g,d){if(d){let m=g.example.instance;m&&(m.stop(),m.canvas&&m.canvas.parentElement.removeChild(m.canvas)),window.location.hash=d.id,g.example.instance=null,g.example=d,g.example.instance=m=d.init(g),!m.canvas&&m.render&&(m.canvas=m.render.canvas),m.canvas&&g.dom.root.appendChild(m.canvas),g.dom.exampleSelect.value=d.id,g.dom.buttonSource.href=d.sourceLink||g.url||"#",setTimeout(function(){g.tools.inspector&&f.setInspector(g,!0),g.tools.gui&&f.setGui(g,!0)},500)}else f.setExample(g,g.examples[0])},f.setInspector=function(g,d){if(!d){f._destroyTools(g,!0,!1),g.dom.root.classList.toggle("matter-inspect-active",!1);return}let m=g.example.instance;f._destroyTools(g,!0,!1),g.dom.root.classList.toggle("matter-inspect-active",!0),g.tools.inspector=v.create(m.engine,m.render)},f.setGui=function(g,d){if(!d){f._destroyTools(g,!1,!0),g.dom.root.classList.toggle("matter-gui-active",!1);return}let m=g.example.instance;f._destroyTools(g,!1,!0),g.dom.root.classList.toggle("matter-gui-active",!0),g.tools.gui=_.create(m.engine,m.runner,m.render)},f._destroyTools=function(g,d,m){let w=g.tools.inspector,C=g.tools.gui;d&&w&&w!==!0&&(v.destroy(w),g.tools.inspector=null),m&&C&&C!==!0&&(_.destroy(C),g.tools.gui=null)},f._toggleFullscreen=function(g){let d=document.fullscreenElement||document.mozFullScreenElement||document.webkitFullscreenElement;d?document.exitFullscreen?document.exitFullscreen():document.mozCancelFullScreen?document.mozCancelFullScreen():document.webkitExitFullscreen&&document.webkitExitFullscreen():(d=g.dom.root,d.requestFullscreen?d.requestFullscreen():d.mozRequestFullScreen?d.mozRequestFullScreen():d.webkitRequestFullscreen&&d.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT))},f._bindDom=function(g){var d=g.dom;if(window.addEventListener("orientationchange",function(){setTimeout(()=>{g.resetOnOrientation&&f.reset(g)},300)}),g.preventZoom){document.body.addEventListener("gesturestart",function(N){N.preventDefault()});var m=!0,w;document.body.addEventListener("touchstart",function(N){m||N.preventDefault(),m=!1,clearTimeout(w),w=setTimeout(function(){m=!0},500)})}if(d.exampleSelect&&d.exampleSelect.addEventListener("change",function(){let N=this.options[this.selectedIndex].value;f.setExampleById(g,N)}),d.buttonReset&&d.buttonReset.addEventListener("click",function(){f.reset(g)}),d.buttonInspect&&d.buttonInspect.addEventListener("click",function(){var N=!g.tools.inspector;f.setInspector(g,N)}),d.buttonTools&&d.buttonTools.addEventListener("click",function(){var N=!g.tools.gui;f.setGui(g,N)}),d.buttonFullscreen){d.buttonFullscreen.addEventListener("click",function(){f._toggleFullscreen(g)});var C=function(){var N=document.fullscreen||document.webkitIsFullScreen||document.mozFullScreen;document.body.classList.toggle("matter-is-fullscreen",N)};document.addEventListener("webkitfullscreenchange",C),document.addEventListener("mozfullscreenchange",C),document.addEventListener("fullscreenchange",C)}},f._createDom=function(g){let d=l(15);i.injectStyles(d,"matter-demo-style");let m=document.createElement("div"),w=g.examples.map(W=>`<option value="${W.id}">${W.name}</option>`).join(" ");var C=g.preventZoom&&f._isIOS?"prevent-zoom-ios":"";m.innerHTML=`
    <div class="matter-demo ${g.toolbar.title} ${C}">
      <div class="matter-header-outer">
        <header class="matter-header">
          <div class="matter-header-inner">
            <h1 class="matter-demo-title">
              <a href="${g.toolbar.url}" target="_blank">
              ${g.toolbar.title}
                <svg fill="#000000" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0 0h24v24H0z" fill="none"/>
                  <path d="M9 5v2h6.59L4 18.59 5.41 20 17 8.41V15h2V5z"/>
                </svg>
              </a>
            </h1>
            <div class="matter-toolbar">
              <div class="matter-select-wrapper">
                <select aria-label="Select example" title="Select example" class="matter-example-select matter-select">
                  ${w}
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
            <a class="matter-link" href="${f._matterLink}" title="matter.js" target="_blank">
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
  `;let N={root:m.firstElementChild,title:m.querySelector(".matter-demo-title"),header:m.querySelector(".matter-header"),exampleSelect:m.querySelector(".matter-example-select"),buttonReset:m.querySelector(".matter-btn-reset"),buttonSource:m.querySelector(".matter-btn-source"),buttonTools:m.querySelector(".matter-btn-tools"),buttonInspect:m.querySelector(".matter-btn-inspect"),buttonFullscreen:m.querySelector(".matter-btn-fullscreen")};return g.toolbar.title||i.domRemove(N.title),g.toolbar.exampleSelect||i.domRemove(N.exampleSelect.parentElement),g.toolbar.reset||i.domRemove(N.buttonReset),g.toolbar.source||i.domRemove(N.buttonSource),g.toolbar.inspector||i.domRemove(N.buttonInspect),g.toolbar.tools||i.domRemove(N.buttonTools),g.toolbar.fullscreen||i.domRemove(N.buttonFullscreen),N}},function(be,I){be.exports=`/*
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
`}])})})(Er);var ci=Er.exports;const ui=li(ci);export{ui as M,Mn as c,li as g,di as r};
//# sourceMappingURL=matter-tools-349bTSEi.js.map
