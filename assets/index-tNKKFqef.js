import{M as O}from"./matter-tools-2-tbMDnJ.js";import{r as C,g as T}from"./matter-js-YTUBFL5T.js";import{s as W}from"./@stdlib/dist-stats-base-dists-flat-w0kn6dZ_.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))f(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&f(c)}).observe(document,{childList:!0,subtree:!0});function l(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function f(e){if(e.ep)return;e.ep=!0;const o=l(e);fetch(e.href,o)}})();var F=C();const t=T(F),B=W.base.dists,N=(d,a,l)=>Array.from({length:(a-d)/l+1},(f,e)=>d+e*l);N(-5,5,.01);const E=1,q=0,w={};w.galton=function(){var d=t.Engine,a=t.Render,l=t.Runner,f=t.Events,e=t.Body;t.Composite,t.Composites,t.Common,t.MouseConstraint,t.Mouse;var o=t.World,c=t.Bodies,u=d.create({enableSleeping:!0}),h=u.world;const y=500,M=500;var g=a.create({element:document.body,engine:u,options:{width:y,height:M,wireframes:!1}});a.run(g);var b=l.create({delta:1e3/(60*10),maxFrameTime:1e3/20});l.run(b,u);const r=2,A=s=>Math.trunc(s/r)*r,v=100,P=20,S=P+r*v,L=S-P,x="normal";let R=1e3;u.gravity.y=0,o.add(h,c.rectangle(y/2,M-r/2,y,r,{isStatic:!0,restitution:0,friction:1,density:1e3,render:{fillStyle:"#ffffff",visible:!0},id:"floor"}));for(let s=0;s<v;s++){const i=s/v,m=B[x].quantile(i,q,E),p=c.rectangle(A(m*40+y/2),S-s*r,r,r,{isSensor:!0,isStatic:!0,render:{fillStyle:"#ffffff",visible:!0}});p.id="peg"+s,o.add(h,p)}return f.on(u,"collisionStart",function(s){for(var i=s.pairs,m=0,p=i.length;m!=p;++m){var n=i[m];n.bodyA.id=="floor"||n.bodyA.id.startsWith("square")&&n.bodyA.isStatic?(e.setPosition(n.bodyB,{x:n.bodyB.position.x,y:n.bodyA.position.y-r}),e.setStatic(n.bodyB,!0)):n.bodyA.id.startsWith("peg")&&(e.setPosition(n.bodyB,n.bodyA.position),e.setVelocity(n.bodyB,{x:0,y:10}))}}),setInterval(()=>{if(R-- >0){const s=Math.random();B[x].quantile(s,q,E),B[x].cdf(s,q,E);const i=c.rectangle(10,S-r-A(s*(L-2*r)),r,r,{sleepThreshold:10,friction:1,density:1,restitution:0,slop:0,render:{fillStyle:"#ff00ff",visible:!0}});i.id="square"+R,e.setVelocity(i,{x:10,y:0}),t.Events.on(i,"sleepStart",()=>{t.Body.setStatic(i,!0)}),o.add(h,i)}},1),{engine:u,runner:b,render:g,canvas:g.canvas,stop:function(){t.Render.stop(g),t.Runner.stop(b)}}};O.Demo.create({fullPage:!0,preventZoom:!0,startExample:!0,appendTo:document.body,toolbar:{title:"matter-tools",url:"https://github.com/liabru/matter-tools",reset:!0,source:!0,inspector:!0,tools:!0,fullscreen:!0,exampleSelect:!0},tools:{inspector:!0,gui:!0},examples:[{name:"Galton Board",id:"galton",init:w.galton,sourceLink:"./galton.js"}]});
//# sourceMappingURL=index-tNKKFqef.js.map
