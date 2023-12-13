import{M as H}from"./matter-tools-2-tbMDnJ.js";import{r as J,g as Q}from"./matter-js-YTUBFL5T.js";import{s as U}from"./@stdlib/dist-stats-base-dists-flat-w0kn6dZ_.js";(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))h(t);new MutationObserver(t=>{for(const i of t)if(i.type==="childList")for(const b of i.addedNodes)b.tagName==="LINK"&&b.rel==="modulepreload"&&h(b)}).observe(document,{childList:!0,subtree:!0});function a(t){const i={};return t.integrity&&(i.integrity=t.integrity),t.referrerPolicy&&(i.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?i.credentials="include":t.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function h(t){if(t.ep)return;t.ep=!0;const i=a(t);fetch(t.href,i)}})();var X=J();const c=Q(X),Y=U.base.dists,V=Y.normal.cdf;let _=-3,$=.6,k=3,ee=1.3,W=.5;function te(m){let l=V(m,_,$),a=V(m,k,ee);return W*l+(1-W)*a}const oe=(m,l,a)=>Array.from({length:(l-m)/a+1},(h,t)=>m+t*a);oe(-5,5,.01);function re(m,l){for(var a=l[0],h=Math.abs(m-a),t=0;t<l.length;t++){var i=Math.abs(m-l[t]);i<h&&(h=i,a=l[t])}return a}const z={};z.galton=function(){let m=c.Engine,l=c.Render,a=c.Runner,h=c.Events,t=c.Body;c.Detector,c.Composite,c.Composites,c.Common,c.MouseConstraint,c.Mouse;let i=c.World,b=c.Bodies,F=m.create({enableSleeping:!1}),v=F.world;const O=500,L=500;let x=l.create({element:document.body,engine:F,options:{width:O,height:L,wireframes:!1}});l.run(x);let B=a.create({delta:1e3/(60*10),maxFrameTime:1e3/20});a.run(B,F);const D=20,q=L/2,G=q-D,u=4;let T=1e3;const A=10,S=(o,n,e)=>{i.add(v,b.rectangle(o,n,1,1,{isStatic:!0,render:{fillStyle:"#ffffff",visible:!0,opacity:e},collisionFilter:{group:0}}))};function I(o,n,e,r,s,f,d,p){const M=Math.abs(p-f)>Math.abs(d-s);M&&([s,f]=[f,s],[d,p]=[p,d]),s>d&&([s,d]=[d,s],[f,p]=[p,f]);const Z=d-s,j=(p-f)/Z;let g=f+r(s)*j;for(let P=o(s)+1;P<n(d);P++)M?(S(o(g),P,r(g)),S(o(g)+1,P,e(g))):(S(P,o(g),r(g)),S(P,o(g)+1,e(g))),g+=j}function K(o,n,e,r){const s=Math.floor,f=Math.round,d=M=>M-Math.floor(M),p=M=>1-d(M);I(s,f,d,p,o,n,e,r),I(s,f,d,p,e,r,o,n),S(o,n,1),S(e,r,1)}F.gravity.y=0;let E={},R={},y=[],w=1/0,C=0;for(let o=0;o<O/u;o++){const n=o*u,e=te((n-O/2)/40);let r=q-e*G;R[r]=n,r<w&&(w=r),r>C&&(C=r),y.push(r)}for(let o=0;o<O/u;o++){const n=o*u,e=(C-y[o])*(D-q)/(C-w)+q,r=b.rectangle(n,e,u,u,{isSensor:!0,isStatic:!0,render:{fillStyle:"#ff00ff",visible:!1},collisionFilter:{group:0}});y[o]=e,R[e]=n,i.add(v,r),o>0&&K(R[y[o-1]],y[o-1],R[y[o]],y[o])}let N={};return h.on(B,"beforeTick",function(o){for(let n=0;n<v.bodies.length;n++){const e=v.bodies[n];if(e.velocity.x>0&&!e.isStatic){const r=e.position.x,s=e.position.y,f=N[e.id];r>=f&&(t.setPosition(e,{x:f,y:s}),t.setVelocity(e,{x:0,y:A}))}}for(let n=0;n<v.bodies.length;n++){const e=v.bodies[n];if(e.velocity.y>0&&!e.isStatic){const r=e.position.x,s=e.position.y;(E[r]&&s>=L-E[r]-u/2||s>=L-u/2)&&(E[r]||(E[r]=u/2),t.setPosition(e,{x:r,y:L-E[r]}),t.setStatic(e,!0),E[r]+=u)}}}),setInterval(()=>{if(T-- >0){const n=Math.random()*(C-w)+w,e=b.rectangle(10,n,u,u,{isSensor:!0,frictionAir:0,render:{fillStyle:"#ff00ff",visible:!0},collisionFilter:{group:0}});e.id="square"+T,N[e.id]=R[re(n,y)],t.setVelocity(e,{x:A,y:0}),i.add(v,e)}}),{engine:F,runner:B,render:x,canvas:x.canvas,stop:function(){c.Render.stop(x),c.Runner.stop(B)}}};H.Demo.create({fullPage:!0,preventZoom:!0,startExample:!0,appendTo:document.body,toolbar:{title:"matter-tools",url:"https://github.com/liabru/matter-tools",reset:!0,source:!0,inspector:!0,tools:!0,fullscreen:!0,exampleSelect:!0},tools:{inspector:!0,gui:!0},examples:[{name:"Galton Board",id:"galton",init:z.galton,sourceLink:"./galton.js"}]});
//# sourceMappingURL=index-OoCyann5.js.map
