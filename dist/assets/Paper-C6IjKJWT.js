import{t as x,a as b,s as _,_ as s,b as m,r as q,d as C,e as E,j as O,f as S}from"./index-Dd1Qg3kd.js";import{g as k,c as F}from"./Box-C5i9NRp5.js";var l={exports:{}},c,g;function W(){if(g)return c;g=1;var e="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return c=e,c}var v,h;function j(){if(h)return v;h=1;var e=W();function a(){}function o(){}return o.resetWarningCache=a,v=function(){function r(u,d,f,y,i,p){if(p!==e){var P=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw P.name="Invariant Violation",P}}r.isRequired=r;function t(){return r}var n={array:r,bigint:r,bool:r,func:r,number:r,object:r,string:r,symbol:r,any:r,arrayOf:t,element:r,elementType:r,instanceOf:t,node:r,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n},v}var T;function N(){return T||(T=1,l.exports=j()()),l.exports}var $=N();const A=x($),R=e=>{let a;return e<1?a=5.11916*e**2:a=4.5*Math.log(e+1)+2,(a/100).toFixed(2)};function I(e){return b("MuiPaper",e)}k("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const M=["className","component","elevation","square","variant"],U=e=>{const{square:a,elevation:o,variant:r,classes:t}=e,n={root:["root",r,!a&&"rounded",r==="elevation"&&`elevation${o}`]};return S(n,I,t)},w=_("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:o}=e;return[a.root,a[o.variant],!o.square&&a.rounded,o.variant==="elevation"&&a[`elevation${o.elevation}`]]}})(({theme:e,ownerState:a})=>{var o;return s({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!a.square&&{borderRadius:e.shape.borderRadius},a.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},a.variant==="elevation"&&s({boxShadow:(e.vars||e).shadows[a.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${m.alpha("#fff",R(a.elevation))}, ${m.alpha("#fff",R(a.elevation))})`},e.vars&&{backgroundImage:(o=e.vars.overlays)==null?void 0:o[a.elevation]}))}),V=q.forwardRef(function(a,o){const r=C({props:a,name:"MuiPaper"}),{className:t,component:n="div",elevation:u=1,square:d=!1,variant:f="elevation"}=r,y=E(r,M),i=s({},r,{component:n,elevation:u,square:d,variant:f}),p=U(i);return O.jsx(w,s({as:n,ownerState:i,className:F(p.root,t),ref:o},y))});export{V as P,A as a,N as r};
