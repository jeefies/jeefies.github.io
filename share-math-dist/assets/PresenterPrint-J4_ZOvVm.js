import{d as _,u as d,a as h,c as m,b as p,o as s,e as n,f as t,t as a,g as r,F as u,r as f,h as g,i as v,j as x,n as y,k as b,l as N,m as k,_ as P}from"./index-RSO6xkOU.js";import{N as w}from"./NoteDisplay-C4Y1wNR5.js";const V={class:"m-4"},L={class:"mb-10"},S={class:"text-4xl font-bold mt-2"},T={class:"opacity-50"},j={class:"text-lg"},B={class:"font-bold flex gap-2"},D={class:"opacity-50"},H=t("div",{class:"flex-auto"},null,-1),z={key:0,class:"border-gray-400/50 mb-8"},C=_({__name:"PresenterPrint",setup(F){d(`
@page {
  size: A4;
  margin-top: 1.5cm;
  margin-bottom: 1cm;
}
* {
  -webkit-print-color-adjust: exact;
}
html,
html body,
html #app,
html #page-root {
  height: auto;
  overflow: auto !important;
}
`),h({title:`Notes - ${m.title}`});const i=p(()=>b.map(o=>{var l;return(l=o.meta)==null?void 0:l.slide}).filter(o=>o!==void 0&&o.noteHTML!==""));return(o,l)=>(s(),n("div",{id:"page-root",style:y(r(k))},[t("div",V,[t("div",L,[t("h1",S,a(r(m).title),1),t("div",T,a(new Date().toLocaleString()),1)]),(s(!0),n(u,null,f(i.value,(e,c)=>(s(),n("div",{key:c,class:"flex flex-col gap-4 break-inside-avoid-page"},[t("div",null,[t("h2",j,[t("div",B,[t("div",D,a(e==null?void 0:e.no)+"/"+a(r(N)),1),g(" "+a(e==null?void 0:e.title)+" ",1),H])]),v(w,{"note-html":e.noteHTML,class:"max-w-full"},null,8,["note-html"])]),c<i.value.length-1?(s(),n("hr",z)):x("v-if",!0)]))),128))])],4))}}),E=P(C,[["__file","/home/jeefy/share-math/node_modules/@slidev/client/internals/PresenterPrint.vue"]]);export{E as default};
