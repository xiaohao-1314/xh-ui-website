var su=Object.defineProperty,au=Object.defineProperties;var cu=Object.getOwnPropertyDescriptors;var Ae=Object.getOwnPropertySymbols;var iu=Object.prototype.hasOwnProperty,du=Object.prototype.propertyIsEnumerable;var je=(e,o,n)=>o in e?su(e,o,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[o]=n,j=(e,o)=>{for(var n in o||(o={}))iu.call(o,n)&&je(e,n,o[n]);if(Ae)for(var n of Ae(o))du.call(o,n)&&je(e,n,o[n]);return e},V=(e,o)=>au(e,cu(o));import{d as v,r as y,c as C,w as de,o as a,a as p,b as F,e as I,n as M,u as _,f as L,g as Ve,h as _e,i as _u,j as w,k as l,I as pu,l as f,m as ee,p as t,C as ge,q as le,s as i,t as xe,v as ne,x as hu,F as E,y as Y,z as fu,A as mu,B as oe,S as vu,D as bu,E as d,G as P,H as se,J as ye,K as we,L as gu,M as pe,N as ae,O as ze,P as xu,Q as he,R as fe,T as Te,U as Se,W as Ie,V as Pe,X as $e,Y as yu,Z as wu,_ as Be,$ as Ue,a0 as me,a1 as Me,a2 as $u,a3 as ve,a4 as Bu,a5 as Eu,a6 as Cu,a7 as te,a8 as ue,a9 as X,aa as ku,ab as Fu,ac as Du,ad as Re,ae as Ee,af as be,ag as Au,ah as ju,ai as Vu,aj as zu,ak as Tu}from"./vendor.e0b13796.js";const Su=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function u(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}};Su();const Iu=["src","alt"],Pu={name:"xhAvatar"},Uu=v(V(j({},Pu),{props:{size:{type:[String,Number],default:"default"},src:{type:String,default:""},shape:{type:String,default:"circle"},fit:{type:String,default:"fill"},alt:{type:String},color:{type:String},backgroundColor:{type:String}},emits:["error"],setup(e,{emit:o}){const n=e,u=y(!1),{size:r,shape:s,color:c,backgroundColor:m,fit:h}=n,B=C(()=>({[`xh-avatar-${r}`]:typeof r=="string",[`xh-avatar-${s}`]:s,[`xh-avatar-${h}`]:h})),b=C(()=>({width:typeof r=="number"?`${r}px`:"",height:typeof r=="number"?`${r}px`:"",color:c,backgroundColor:m}));de(()=>n.src,()=>u.value=!1);const x=$=>{u.value=!0,o("error",$)};return($,A)=>(a(),p("span",{class:M(["xh-avatar",_(B)]),style:L(_(b))},[e.src&&!u.value?(a(),p("img",{key:0,src:e.src,alt:e.alt,onError:x},null,40,Iu)):F("",!0),I($.$slots,"default")],6))}}));const Mu={key:0,class:"xh-loadingIndicator"},Ru={key:1,class:"slot-icon-left"},Ou={key:2,class:"slot-icon-right"},Hu={name:"xhButton"},Nu=v(V(j({},Hu),{props:{type:{type:String,default:"default"},dashed:{type:Boolean,default:!1},size:{type:String,default:"default"},round:{type:Boolean,default:!1},circle:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},iconPlacement:{type:String,default:"left"}},emits:["click"],setup(e,{emit:o}){const n=e,{type:u,dashed:r,size:s,round:c,disabled:m,circle:h}=n,B=Ve(),b=C(()=>({[`xh-type-${u}`]:u,["is-dashed"]:r,[`xh-button-${s}`]:s,["is-round"]:c,["is-circle"]:h,["is-disabled"]:m})),x=()=>{o("click")};return($,A)=>(a(),p("button",{class:M(["xh-button",_(b)]),onClick:x},[e.loading?(a(),p("span",Mu)):F("",!0),e.iconPlacement==="left"&&_(B).icon?(a(),p("div",Ru,[I($.$slots,"icon")])):F("",!0),I($.$slots,"default"),e.iconPlacement==="right"&&_(B).icon?(a(),p("div",Ou,[I($.$slots,"icon")])):F("",!0)],2))}}));const Ju={key:2,class:"xh-divider-line vertical"},Lu={name:"xhDivider"},Wu=v(V(j({},Lu),{props:{titlePlacement:{type:String,default:"left"},vertical:{type:Boolean,default:!1},weight:{type:Number,default:1},direction:{type:String,default:"horizontal"}},setup(e){const o=e,n=C(()=>({"is-left":o.titlePlacement==="left","is-right":o.titlePlacement==="right","is-center":o.titlePlacement==="center"})),u=C(()=>({[`weight-${o.weight}`]:!0}));return(r,s)=>(a(),p("div",{class:M(["xh-divider",{horizontal:e.direction==="horizontal",vertical:e.direction==="vertical"}])},[e.direction==="horizontal"?(a(),p("div",{key:0,class:M(["xh-divider-line horizontal",_(u)])},null,2)):F("",!0),e.direction==="horizontal"?(a(),p("div",{key:1,class:M(["xh-divider-title",_(n)])},[I(r.$slots,"default")],2)):F("",!0),e.direction==="vertical"?(a(),p("div",Ju)):F("",!0)],2))}}));const qu={name:"xhEllipsis"},Gu=v(V(j({},qu),{props:{lineClamp:{type:Number},width:{type:Number,default:300},expandTrigger:String},setup(e){const o=e,{lineClamp:n,expandTrigger:u,width:r}=o,s=C(()=>({["xh-ellipsis-line-clamp"]:n,["xh-ellipsis-expand-trigger"]:u}));let c=_e({});const m=y(!1);c["-webkit-line-clamp"]=n,c["max-width"]=r+"px",de(()=>m.value,()=>{c["-webkit-line-clamp"]=m.value?"":n});const h=()=>{u==="click"&&(m.value=!m.value)};return(B,b)=>(a(),p("div",{onClick:h,class:M(["xh-ellipsis",_(s)]),style:L(_(c))},[I(B.$slots,"default")],6))}}));const Ku={name:"xhGradientText"},Yu=v(V(j({},Ku),{props:{type:{type:String,default:"primary"},size:{type:Number,default:16},gradient:{type:Object,default:()=>{}}},setup(e){const o=e,n=C(()=>({[`is-${o.type}`]:o.type})),u=C(()=>({fontSize:`${o.size}px`,backgroundImage:o.gradient?`linear-gradient(
      ${o.gradient.deg?o.gradient.deg+"deg":"252deg"},
      ${o.gradient.from} 0%,
      ${o.gradient.to} 100%
    )`:""}));return(r,s)=>(a(),p("div",{class:M(["xh-gradient-text",_(n)]),style:L(_(u))},[I(r.$slots,"default")],6))}}));const Xu={name:"xhIcon"},Qu=v(V(j({},Xu),{props:{depth:Number,size:{type:[Number,String],default:"40px"}},setup(e){return _u(),(o,n)=>(a(),w(_(pu),{class:"xh-icon",size:e.size,style:L({opacity:`${e.depth/10}`})},{default:l(()=>[I(o.$slots,"default")]),_:3},8,["size","style"]))}}));const Zu={name:"xhLink"},er=v(V(j({},Zu),{props:{type:{type:String,default:"default"},underline:{type:Boolean,default:!0},disabled:{type:Boolean,deafult:!1},icon:{type:[String,Object]},iconPlacement:{type:String,default:"left"},iconSize:{type:[Number,String],default:"18px"}},setup(e){const o=e,{type:n,underline:u,disabled:r}=o,s=C(()=>({[`xh-link-${n}`]:n,["xh-link-underline"]:u,["xh-link-disabled"]:r}));return(c,m)=>{const h=f("xh-icon");return a(),p("a",{class:M(["xh-link",_(s)])},[e.icon&&e.iconPlacement==="left"?(a(),w(h,{key:0,size:e.iconSize,class:"xh-icon-left"},{default:l(()=>[(a(),w(ee(e.icon)))]),_:1},8,["size"])):F("",!0),I(c.$slots,"default"),e.icon&&e.iconPlacement==="right"?(a(),w(h,{key:1,size:e.iconSize,class:"xh-icon-right"},{default:l(()=>[(a(),w(ee(e.icon)))]),_:1},8,["size"])):F("",!0)],2)}}}));var D=(e,o)=>{const n=e.__vccOpts||e;for(const[u,r]of o)n[u]=r;return n};const tr={name:"xhTag"},nr=v(V(j({},tr),{props:{type:{type:String,default:"default"},size:{type:String},closeable:{type:Boolean,default:!1},color:{type:String},backgroundColor:{type:String},borderColor:{type:String},effect:{type:String},hit:{type:Boolean,default:!0}},emits:["close"],setup(e,{emit:o}){const n=e,u=C(()=>({[`is-${n.type}`]:n.type,[`is-${n.size}`]:n.size,["is-closeable"]:n.closeable,["is-hit"]:n.hit,[`is-${n.type}-${n.effect}`]:n.effect})),{color:r,backgroundColor:s,borderColor:c}=n,m=C(()=>({color:r||"",backgroundColor:s||"",borderColor:c||""})),h=()=>{o("close")};return(B,b)=>{const x=f("xh-ellipsis"),$=f("xh-icon");return a(),p("div",{class:M(["xh-tag",_(u)]),style:L(_(m))},[t(x,null,{default:l(()=>[I(B.$slots,"default",{},void 0,!0)]),_:3}),e.closeable?(a(),w($,{key:0,size:18,onClick:h},{default:l(()=>[t(_(ge))]),_:1})):F("",!0)],6)}}}));var or=D(nr,[["__scopeId","data-v-3f3a1186"]]);const ur={color:{type:String},size:{type:String,default:""},showAlpha:{type:Boolean,default:!1},predefineColors:{type:Array,default:[]}},rr=(e,o)=>{const n=y(""),u=C(()=>({background:n.value})),r=C(()=>({background:`linear-gradient(90deg, #fff, ${n.value})`||""})),s=C(()=>({background:`linear-gradient(to left, rgba(255, 0, 0, 0) 0%, ${n.value} 100%)`})),c=C(()=>({[`xh-color-picker__trigger-${e.size}`]:e.size})),m=C(()=>e.showAlpha),h=C(()=>e.predefineColors);return{changeColor:n,style1:u,style2:r,style3:s,classes:c,isShowAlpha:m,predefineColors:h}};const lr=["onClick"],sr={key:0,class:"xh-color-picker-content"},ar={style:{display:"flex"}},cr=i("div",{class:"xh-color-picker-black-panel"},null,-1),ir={class:"xh-color-slider xh-is-vertical"},dr=i("div",{class:"xh-color-slider-thumb"},null,-1),_r=[dr],pr={key:0,class:"xh-alpha-slider-bar"},hr=i("div",{class:"xh-alpha-slider-wrapper"},null,-1),fr=i("div",{class:"xh-alpha-slider-thumb"},null,-1),mr={class:"xh-color-drop-container"},vr={class:"xh-pre-define-color-container"},br=["tabindex","onClick"],gr={name:"xhColorPicker"},xr=v(V(j({},gr),{props:ur,emits:["change"],setup(e,{emit:o}){const n=e;y(["#f00","#ff0","#0f0","#0ff","#00f"]);const{changeColor:u,style1:r,style2:s,style3:c,classes:m,isShowAlpha:h,predefineColors:B}=rr(n),b=y(!1),x=y("");de(u,(G,H)=>{G!==H&&o("change",u.value)}),le(()=>{u.value=n.color||"",x.value=n.color||""});const $=()=>{b.value=!b.value},A=G=>{u.value=G,x.value=G},S=mu(),R=(G,H)=>{const T=S.ctx.$refs[H];fu(T).then(Z=>{const ie=document.createElement("canvas").getContext("2d");ie.drawImage(Z,0,0);const De=G.offsetX,N=G.offsetY,J=ie.getImageData(De,N,1,1).data||[],U=[0,0,0];for(let re=0;re<J.length;re+=4)U[0]+=J[re],U[1]+=J[re+1],U[2]+=J[re+2];U[0]=Math.round(U[0]/(J.length/4)),U[1]=Math.round(U[1]/(J.length/4)),U[2]=Math.round(U[2]/(J.length/4)),u.value=`rgb(${U[0]}, ${U[1]}, ${U[2]})`,x.value=`rgb(${U[0]}, ${U[1]}, ${U[2]})`})},z=()=>{u.value=x.value},q=()=>{x.value=""};return(G,H)=>(a(),p(E,null,[i("div",{class:M(["xh-color-picker__trigger",_(m)]),onClick:xe($,["stop"])},[i("span",{class:"color-picker__color-inner",style:L(_(r))},null,4)],10,lr),b.value?(a(),p("div",sr,[i("div",ar,[i("div",{class:"xh-color-picker-panel",ref:"image",onClick:H[0]||(H[0]=T=>R(T,"image"))},[i("div",{class:"xh-color-picker-white-panel",style:L(_(s))},null,4),cr],512),i("div",ir,[i("div",{class:"xh-color-slider-bar",ref:"image3",onClick:H[1]||(H[1]=T=>R(T,"image3"))},_r,512)])]),_(h)?(a(),p("div",pr,[hr,i("div",{class:"xh-alpha-slider-bg",style:L(_(c)),ref:"image1",onClick:H[2]||(H[2]=T=>R(T,"image1"))},null,4),fr])):F("",!0),i("div",mr,[ne(i("input",{class:"xh-color-input","onUpdate:modelValue":H[3]||(H[3]=T=>x.value=T)},null,512),[[hu,x.value]]),i("div",{class:"xh-color-drop-btn-group"},[i("button",{type:"button",class:"xh-color-drop-btn xh-color-clear",onClick:q}," Clear "),i("button",{type:"button",class:"xh-color-drop-btn xh-color-sure",onClick:z}," OK ")])]),i("div",vr,[(a(!0),p(E,null,Y(_(B),(T,Z)=>(a(),p("div",{class:"xh-pre-define-color",tabindex:Z,key:Z,style:L({background:T}),onClick:ce=>A(T)},null,12,br))),128))])])):F("",!0)],64))}})),yr={modelValue:{type:Boolean,default:!1},label:{type:String,default:""},size:{type:String,default:""},iconSize:{type:[String,Number],default:""},disabled:{type:Boolean,default:!1},indeterminate:{type:Boolean,default:!1},border:{type:Boolean,default:!1}},wr=["update:modelValue","change"],$r=(e,o)=>{const n=oe("checkboxGroupKey",void 0),u=C(()=>!!n),r=C(()=>e.label),s=C({get(){return u.value?n.modelValue:e.modelValue},set(A){u.value?n.changeEvent(A):(o("update:modelValue",A),o("change",A))}}),c=C(()=>e.size?e.size:n==null?void 0:n.size),m=C(()=>e.iconSize?e.iconSize:c.value==="large"?"12px":c.value==="small"?"8px":"10px"),h=C(()=>e.disabled||(n==null?void 0:n.disabled)),B=C(()=>h.value?u.value?s.value.indexOf(r.value)>-1?"#c2c2c2":"transparent":s.value?"#c2c2c2":"transparent":"#fff"),b=C(()=>e.indeterminate),x=C(()=>e.border),$=C(()=>({"is-checked":u.value?s.value.indexOf(r.value)>-1&&!b.value:s.value&&!b.value,[`xh-checkbox-${c.value}`]:c.value,"is-disabled":h.value,"is-indeterminate":b.value,"is-border":x.value}));return{modelValue:s,label:r,classes:$,size:c,iconSize:m,disabled:h,iconColor:B,isGroup:u,indeterminate:b,border:x}};const Br={name:"xhCheckbox"},Er=v(V(j({},Br),{props:yr,emits:wr,setup(e,{emit:o}){const n=e,{modelValue:u,label:r,classes:s,iconSize:c,disabled:m,iconColor:h,isGroup:B,indeterminate:b}=$r(n,o),x=()=>{if(!m.value)if(B.value){const $=u.value.indexOf(r.value);$>-1?u.value.splice($,1):u.value.push(r.value),u.value=[...u.value]}else u.value=!u.value};return($,A)=>{const S=f("xh-icon");return a(),p("label",{class:M(["xh-checkbox",_(s)]),onClick:x,tabindex:"0"},[i("span",{class:M(["xh-checkbox-input",_(s)])},[t(S,{color:_(h),size:_(c)},{default:l(()=>[_(b)?(a(),w(_(vu),{key:0})):(a(),w(_(bu),{key:1}))]),_:1},8,["color","size"])],2),i("span",{class:M(["xh-checkbox-label",_(s)])},[I($.$slots,"default",{},()=>[d(P(_(r)),1)])],2)],2)}}})),Cr={modelValue:{type:Array,default:()=>[]},size:{type:String,default:""},disabled:{type:Boolean,default:!1}},kr=["update:modelValue","change"];const Fr={class:"xh-checkbox-group"},Dr={name:"xhCheckboxGroup"},Ar=v(V(j({},Dr),{props:Cr,emits:kr,setup(e,{emit:o}){const n=e,u=r=>{o("update:modelValue",r),o("change",r)};return se("checkboxGroupKey",_e(V(j({},ye(n)),{changeEvent:u}))),(r,s)=>(a(),p("label",Fr,[I(r.$slots,"default")]))}})),jr={modelValue:{type:[Number,String]},placeholder:{type:String},disabled:{type:Boolean,default:!1},clearable:{type:Boolean,default:!1},showPassword:{type:Boolean,default:!1},type:{type:String,default:"text"},suffixIcon:{type:[String,Object]},prefixIcon:{type:[String,Object]},readonly:{type:Boolean,default:!1}},Vr=["update:modelValue","input","clear","blur","focus"],zr=(e,o)=>{const n=C(()=>e.disabled),u=C(()=>e.placeholder),r=C(()=>e.clearable),s=C(()=>e.showPassword),c=y(!1),m=C(()=>e.readonly),h=C(()=>s.value?c.value?"text":"password":e.type),B=C(()=>({"is-disabled":n.value,"is-clearable":r.value,"show-password":s.value,"jw-input":h.value!=="textarea","jw-textarea":h.value==="textarea","jw-input-suffix":s.value||r.value||e.suffixIcon,"jw-input-prefix":e.prefixIcon})),b=C(()=>e.modelValue===null||e.modelValue===void 0?"":String(e.modelValue));return{disabled:n,classes:B,clearable:r,showPassword:s,type:h,passwordVisible:c,placeholder:u,suffixIcon:e.suffixIcon,prefixIcon:e.prefixIcon,readonly:m,nativeInputValue:b}};const Tr=["disabled","type","readonly","value","placeholder"],Sr={class:"jw-input-prefix-icon"},Ir={class:"jw-input-suffix-icon"},Pr=["readonly","placeholder","value"],Ur={name:"JwInput"},Mr=v(V(j({},Ur),{props:jr,emits:Vr,setup(e,{expose:o,emit:n}){const u=e,{disabled:r,classes:s,clearable:c,type:m,passwordVisible:h,placeholder:B,suffixIcon:b,prefixIcon:x,readonly:$,nativeInputValue:A}=zr(u),S=y(),R=y(),z=C(()=>S.value||R.value),q=N=>{const{value:J}=N.target;J!==A.value&&(n("update:modelValue",J),n("input",J))},G=()=>{n("update:modelValue",""),n("input",""),n("clear","")},H=N=>{n("blur",N)},T=N=>{n("focus",N)},Z=()=>{pe(()=>{var N;(N=z.value)==null||N.focus()})},ce=()=>{pe(()=>{var U;(U=z.value)==null||U.blur();var N=document.getSelection(),J=document.createRange();J.selectNode(z.value),N.removeAllRanges()})},ie=()=>{h.value=!h.value};return o({input:S,inputOrTextarea:z,textarea:R,blur:ce,focus:Z,select:()=>{pe(()=>{var U;(U=z.value)==null||U.focus();var N=document.getSelection(),J=document.createRange();J.selectNode(z.value),N.removeAllRanges(),N.addRange(J)})}}),(N,J)=>{const U=f("xh-icon");return a(),p("div",{class:M(_(s))},[_(m)!=="textarea"?(a(),p(E,{key:0},[i("input",{ref_key:"input",ref:S,disabled:_(r),type:_(m),class:"jw-input-inner",autocomplete:"off",readonly:_($),value:_(A),onInput:q,onBlur:H,onFocus:T,placeholder:_(B)},null,40,Tr),i("span",Sr,[_(x)?(a(),w(U,{key:0,class:"prefix-icon",size:18,color:"#dcdfe6"},{default:l(()=>[(a(),w(ee(_(x))))]),_:1})):F("",!0)]),i("span",Ir,[_(b)?(a(),w(U,{key:0,class:"suffix-icon",size:18,color:"#dcdfe6"},{default:l(()=>[(a(),w(ee(_(b))))]),_:1})):F("",!0),_(c)&&_(A).length>0&&!_(r)?(a(),p("div",{key:1,class:"close-icon",onClick:G},[t(U,{size:18},{default:l(()=>[t(_(we))]),_:1})])):F("",!0),N.showPassword&&!_(r)?(a(),p("div",{key:2,class:"password-icon",onClick:ie},[t(U,{size:18},{default:l(()=>[t(_(gu))]),_:1})])):F("",!0)])],64)):(a(),p("textarea",{key:1,ref_key:"textarea",ref:R,readonly:_($),class:"jw-textarea-inner",autocomplete:"off",placeholder:_(B),value:_(A),onInput:q,onBlur:H,onFocus:T},null,40,Pr))],2)}}})),Rr={modelValue:{type:[String,Number,Boolean],default:""},label:{type:[String,Number,Boolean],default:""},disabled:Boolean,size:String,border:Boolean},Or=["update:modelValue","change"],Hr=(e,o)=>{const n=oe("radioGroupKey",void 0),u=C(()=>!!n),r=C({get(){return u.value?n.modelValue:e.modelValue},set(b){u.value?n.changeEvent(b):(o("update:modelValue",b),o("change",b))}}),s=C(()=>e.disabled?e.disabled:n==null?void 0:n.disabled),c=C(()=>e.size?e.size:n==null?void 0:n.size),m=C(()=>e.label),h=C(()=>e.border?e.border:n==null?void 0:n.border),B=C(()=>({"is-checked":r.value===m.value,"is-disabled":s.value,[`jw-radio-${c.value}`]:c.value,"is-bordered":h.value}));return{modelValue:r,disabled:s,size:c,label:m,classes:B}};const Nr={name:"JwRadio"},Jr=v(V(j({},Nr),{props:Rr,emits:Or,setup(e,{emit:o}){const n=e,{modelValue:u,label:r,size:s,disabled:c,classes:m}=Hr(n,o),h=()=>{c.value||(u.value=n.label)};return(B,b)=>(a(),p("div",{class:M(["jw-radio",_(m)]),onClick:h},[i("span",{class:M(["jw-radio-input",_(m)])},null,2),i("span",{class:M(["jw-radio-label",_(m)])},[I(B.$slots,"default",{},()=>[d(P(_(r)),1)])],2)],2))}})),Lr={modelValue:{type:[String,Number,Boolean],default:""},disabled:Boolean,size:String,border:Boolean},Wr=["update:modelValue","change"],qr={ref:"radioGroupRef",class:"jw-radio-group",role:"radiogroup"},Gr={name:"JwRadioGroup"},Kr=v(V(j({},Gr),{props:Lr,emits:Wr,setup(e,{emit:o}){const n=e,u=r=>{o("update:modelValue",r),o("change",r)};return se("radioGroupKey",_e(V(j({},ye(n)),{changeEvent:u}))),(r,s)=>(a(),p("div",qr,[I(r.$slots,"default")],512))}})),Yr={modelValue:{type:[String,Number,Boolean,Object]},options:{type:Array,default:()=>[]},disabled:{type:Boolean,default:!1},placeholder:{type:String,default:"\u8BF7\u9009\u62E9"},clearable:{type:Boolean,default:!1},multiple:{type:Boolean,default:!1}},Xr=["update:modelValue","change","clear"],Qr=(e,o)=>{const n=C(()=>e.options),u=C(()=>e.clearable),r=y(!1),s=C(()=>e.multiple),c=C(()=>e.modelValue),m=C({get(){if(s.value)return e.options.filter(b=>c.value.includes(b.value)).map(b=>b.label);{const b=e.options.find(x=>x.value===e.modelValue);return b?b.label:""}},set(){}}),h=C(()=>e.disabled),B=C(()=>e.placeholder);return{options:n,modelValue:c,modelLabel:m,disabled:h,placeholder:B,clearable:u,closeVisible:r,multiple:s}};const Zr=["tabindex"],el=["tabindex"],tl={key:1,class:"jw-base-select jw-select-tags"},nl={class:"jw-select-dropdown"},ol={class:"no-options"},ul=["onClick"],rl={name:"JwSelect"},ll=v(V(j({},rl),{props:Yr,emits:Xr,setup(e,{emit:o}){const n=e,u=y(),{options:r,modelValue:s,modelLabel:c,disabled:m,placeholder:h,clearable:B,classes:b,closeVisible:x,multiple:$}=Qr(n),A=R=>{R.disabled||($.value&&(s.value.includes(R.value)?s.value.splice(s.value.indexOf(R.value),1):s.value.push(R.value),o("update:modelValue",s.value),o("change",s.value)),$.value||(u.value.blur(),o("update:modelValue",R.value),o("change",R.value)))},S=R=>{var z;if($.value||(o("update:modelValue",""),o("clear","")),$.value){const q=(z=r.value.find(G=>G.label===R))==null?void 0:z.value;s.value.indexOf(q)>-1?s.value.splice(s.value.indexOf(q),1):s.value.splice(0,s.value.length),o("update:modelValue",s.value),o("clear",s.value)}};return(R,z)=>{const q=f("xh-icon"),G=f("xh-tag"),H=f("xh-ellipsis");return a(),p("div",{class:M(["jw-select",{"is-disabled":_(m)}]),tabindex:_(m)?"":-1,ref_key:"selectRef",ref:u},[_($)?F("",!0):(a(),p("div",{key:0,class:"jw-base-select",tabindex:_(m)?"":-1},[ne(i("div",{class:"jw-select-label"},P(_(c)),513),[[ae,_(c)]]),ne(i("div",{class:"jw-select-placeholder"},P(_(h)),513),[[ae,!_(c)]]),t(q,{size:18,class:"jw-select-suffix",onMousemove:z[0]||(z[0]=T=>_(B)?x.value=!0:""),onMouseleave:z[1]||(z[1]=T=>_(B)?x.value=!1:""),color:"rgba(194, 194, 194, 1)"},{default:l(()=>[_(x)&&_(c)?(a(),w(_(we),{key:0,onClick:S})):(a(),w(_(ze),{key:1}))]),_:1})],8,el)),_($)?(a(),p("div",tl,[(a(!0),p(E,null,Y(_(c),(T,Z)=>(a(),w(G,{closeable:"",key:Z,onClose:ce=>S(T)},{default:l(()=>[d(P(T),1)]),_:2},1032,["onClose"]))),128)),ne(i("div",{class:"jw-select-placeholder"},P(_(h)),513),[[ae,_(c).length===0]]),t(q,{size:18,class:"jw-select-suffix",onMousemove:z[2]||(z[2]=T=>_(B)?x.value=!0:""),onMouseleave:z[3]||(z[3]=T=>_(B)?x.value=!1:""),color:"rgba(194, 194, 194, 1)"},{default:l(()=>[_(x)&&_(c)?(a(),w(_(we),{key:0,onClick:S})):(a(),w(_(ze),{key:1}))]),_:1})])):F("",!0),i("div",nl,[ne(i("div",ol,"\u65E0\u9009\u9879",512),[[ae,_(r).length===0]]),(a(!0),p(E,null,Y(_(r),T=>(a(),p("span",{class:M(["jw-select-option",{"is-active":_($)?_(s).includes(T.value):_(s)===T.value,"is-disabled":T.disabled,"is-multiple":_($)}]),key:T.value,onClick:Z=>A(T)},[t(H,null,{default:l(()=>[d(P(T.label),1)]),_:2},1024),_($)&&_(s).includes(T.value)?(a(),w(q,{key:0,size:18,class:"jw-select-option-suffix-icon"},{default:l(()=>[t(_(xu))]),_:1})):F("",!0)],10,ul))),128))])],10,Zr)}}}));const sl=e=>(he("data-v-8cdff976"),e=e(),fe(),e),al=sl(()=>i("span",null,null,-1)),cl=[al],il={name:"JwSwitch"},dl=v(V(j({},il),{props:{modelValue:{type:Boolean,default:!1},activeColor:{type:String,default:"#18a058"},inactiveColor:{type:String,default:"#dbdbdb"},disabled:{type:Boolean,default:!1},size:{type:String,default:"default"}},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,u=()=>{n.disabled||o("update:modelValue",!n.modelValue)},{modelValue:r,disabled:s,size:c}=ye(n),m=C(()=>({["jw-switch-checked"]:r.value,["jw-switch-disabled"]:s.value,[`jw-switch-${c.value}`]:c.value}));return(h,B)=>(a(),p("button",{class:M(["jw-switch",_(m)]),onClick:u,style:L({background:_(r)?e.activeColor:e.inactiveColor})},cl,6))}}));var _l=D(dl,[["__scopeId","data-v-8cdff976"]]);const pl={class:"jw-alert-body"},hl={class:"jw-alert-body-title"},fl={key:0,class:"jw-alert-body-content"},ml={name:"JwAlert"},vl=v(V(j({},ml),{props:{title:{type:String,default:"Title"},description:{type:String,default:""},type:{type:String,default:"default"},closeable:{type:Boolean,default:!1},showIcon:Boolean,center:Boolean},emits:["close"],setup(e,{emit:o}){const n=e,u=C(()=>({[`jw-alert-${n.type}`]:n.type,"is-center":n.center,"show-close":n.closeable})),r=y(!0),s=()=>{r.value=!1,o("close")};return(c,m)=>{const h=f("xh-icon");return a(),w($e,{"leave-active-class":"animate__fadeOutUp",duration:300},{default:l(()=>[r.value?(a(),p("div",{key:0,class:M(["jw-alert animate__animated",_(u)])},[e.closeable?(a(),w(h,{key:0,class:"jw-alert-close-icon",size:18,color:"#7a7a7a",onClick:s},{default:l(()=>[t(_(ge))]),_:1})):F("",!0),I(c.$slots,"icon",{},()=>[e.showIcon?(a(),p(E,{key:0},[e.type==="info"?(a(),w(h,{key:0,class:"jw-alert-icon",size:22,color:"#3f7ee8"},{default:l(()=>[t(_(Te))]),_:1})):F("",!0),e.type==="success"?(a(),w(h,{key:1,class:"jw-alert-icon",size:22,color:"#4b9e5f"},{default:l(()=>[t(_(Se))]),_:1})):F("",!0),e.type==="warning"?(a(),w(h,{key:2,class:"jw-alert-icon",size:22,color:"#e4a341"},{default:l(()=>[t(_(Ie))]),_:1})):F("",!0),e.type==="error"?(a(),w(h,{key:3,class:"jw-alert-icon",size:22,color:"#bf3f53"},{default:l(()=>[t(_(Pe))]),_:1})):F("",!0)],64)):F("",!0)]),i("div",pl,[i("div",hl,[I(c.$slots,"title",{},()=>[d(P(e.title),1)])]),e.description?(a(),p("div",fl,[I(c.$slots,"default",{},()=>[d(P(e.description),1)])])):F("",!0)])],2)):F("",!0)]),_:3})}}}));const bl={class:"jw-dialog"},gl={class:"jw-dialog-wrapper"},xl=i("p",null,"\u8FD9\u662F\u4E00\u6761\u6D88\u606F",-1),yl=d("\u53D6\u6D88"),wl=d("\u786E\u8BA4"),$l={name:"JwDialog"},Bl=v(V(j({},$l),{props:{modelValue:{type:Boolean,default:!1},overlay:{type:!0,default:!0},title:{type:String,default:"\u6807\u9898"},overlayClosable:{type:Boolean,default:!0},confirm:{type:Function},cancel:{type:Function}},emits:["update:modelValue","onOverlayClick"],setup(e,{emit:o}){const n=e,u=()=>{o("update:modelValue",!1)},r=()=>{n.overlayClosable&&u(),o("onOverlayClick")},s=()=>{var m;((m=n.confirm)==null?void 0:m.call(n))!==!1&&u()},c=()=>{var m;((m=n.cancel)==null?void 0:m.call(n))!==!1&&u()};return(m,h)=>{const B=f("xh-button");return e.modelValue?(a(),w(yu,{key:0,to:"body"},[e.overlay?(a(),p("div",{key:0,class:"jw-dialog-overlay",onClick:r})):F("",!0),i("div",bl,[i("div",gl,[i("header",null,[I(m.$slots,"title",{},()=>[d(P(e.title),1)]),i("span",{class:"jw-dialog-close",onClick:u})]),i("main",null,[I(m.$slots,"default",{},()=>[xl])]),i("footer",null,[I(m.$slots,"footer",{},()=>[t(B,{onClick:c},{default:l(()=>[yl]),_:1}),t(B,{theme:"primary",onClick:s},{default:l(()=>[wl]),_:1})])])])])])):F("",!0)}}})),El={name:"JwDrawer"},Cl={class:"jw-drawer"};function kl(e,o,n,u,r,s){return a(),p("div",Cl,"drawer")}var Fl=D(El,[["render",kl]]);const Oe=["success","info","warning","error"],Dl={duration:{type:Number,default:3e3},id:{type:String,default:""},offset:{type:Number,default:100},zIndex:{type:Number,default:0},onClose:{type:Function,required:!1},type:{type:String,values:Oe,default:"info"},message:{type:[String,Object],default:""},showClose:{type:Boolean,default:!1},center:{type:Boolean,default:!1}},Al=["destroy"];const jl=["id"],Vl={name:"JwMessage"},zl=v(V(j({},Vl),{props:Dl,emits:Al,setup(e,{emit:o}){const n=e,u=y(!1);let r;const s=C(()=>({top:`${n.offset}px`,zIndex:n.zIndex}));function c(){n.duration>0&&(r=setTimeout(()=>{u.value&&h()},n.duration))}function m(){clearTimeout(r),r=void 0}function h(){u.value=!1}function B({code:b}){b==="Escape"?u.value&&h():c()}return le(()=>{c(),u.value=!0,document.addEventListener("keydown",B)}),wu(()=>{document.removeEventListener("keydown",B)}),(b,x)=>{const $=f("xh-icon");return a(),w($e,{duration:300,"leave-active-class":"animate__zoomOut","enter-active-class":"animate__zoomIn",onBeforeLeave:b.onClose,onAfterLeave:x[0]||(x[0]=A=>b.$emit("destroy"))},{default:l(()=>[ne(i("div",{class:M(["jw-message animate__animated",{"is-close":h,"is-center":b.center}]),style:L(_(s)),id:b.id,onMouseenter:m,onMouseleave:c},[b.type==="info"?(a(),w($,{key:0,class:"jw-message-icon",size:22,color:"#3f7ee8"},{default:l(()=>[t(_(Te))]),_:1})):F("",!0),b.type==="success"?(a(),w($,{key:1,class:"jw-message-icon",size:22,color:"#4b9e5f"},{default:l(()=>[t(_(Se))]),_:1})):F("",!0),b.type==="warning"?(a(),w($,{key:2,class:"jw-message-icon",size:22,color:"#e4a341"},{default:l(()=>[t(_(Ie))]),_:1})):F("",!0),b.type==="error"?(a(),w($,{key:3,class:"jw-message-icon",size:22,color:"#bf3f53"},{default:l(()=>[t(_(Pe))]),_:1})):F("",!0),I(b.$slots,"default",{},()=>[d(P(b.message),1)]),b.showClose?(a(),w($,{key:4,size:18,class:"jw-close-icon",onClick:xe(h,["stop"])},{default:l(()=>[t(_(ge))]),_:1},8,["onClick"])):F("",!0)],46,jl),[[ae,u.value]])]),_:3},8,["onBeforeLeave"])}}}));let Tl=1;const Sl=y(2e3),Q=[],W=function(e={}){(typeof e=="string"||Be(e))&&(e={message:e});let o=e.offset||20;Q.forEach(({vm:B})=>{var b;o+=(((b=B.el)==null?void 0:b.offsetHeight)||0)+16});const n=`message_${Tl++}`,u=e.onClose,r=V(j({id:n,offset:o,zIndex:Sl.value++},e),{onClose:()=>{Il(n,u)}});let s=document.body;if(e.appendTo instanceof HTMLElement?s=e.appendTo:typeof e.appendTo=="string"&&(s=document.querySelector(e.appendTo)),!(s instanceof HTMLElement))throw new Error("JwMessage the appendTo option is not an HTMLElement. Falling back to document.body.");const c=document.createElement("div");c.className=`container_${n}`;const m=r.message,h=t(zl,r,Be(r.message)?{default:()=>m}:null);return h.props.onDestroy=()=>{Ue(null,c)},Ue(h,c),Q.push({vm:h}),s.appendChild(c.firstElementChild),{close:()=>h.component.proxy.visible=!1}};Oe.forEach(e=>{W[e]=(o={})=>((typeof o=="string"||Be(o))&&(o={message:o}),W(V(j({},o),{type:e})))});function Il(e,o){const n=Q.findIndex(({vm:c})=>e===c.component.props.id);if(n===-1)return;const{vm:u}=Q[n];if(!u)return;o==null||o(u);const r=u.el.offsetHeight;Q.splice(n,1);const s=Q.length;if(!(s<1))for(let c=n;c<s;c++){const m=parseInt(Q[c].vm.el.style.top,10)-r-16;Q[c].vm.component.props.offset=m}}function Pl(){var e;for(let o=Q.length-1;o>=0;o--){const n=Q[o].vm.component;(e=n==null?void 0:n.proxy)==null||e.close()}}W.closeAll=Pl;const Ul={name:"JwAffix"},Ml=v(V(j({},Ul),{props:{offset:{type:Number,default:0},target:{type:String},position:{type:String,default:"top"},zIndex:{type:Number,default:100}},emits:["change","scroll"],setup(e,{expose:o,emit:n}){const u=e,r=me(),s=me(),c=_e({fixed:!1,height:0,width:0,scrollTop:0,clientHeight:0,transform:0}),m=C(()=>({height:c.fixed?`${c.height}px`:"",width:c.fixed?`${c.width}px`:""})),h=C(()=>{if(!c.fixed)return;const x=u.offset?`${u.offset}px`:0,$=c.transform?`translateY(${c.transform}px)`:"";return{height:`${c.height}px`,width:`${c.width}px`,top:u.position==="top"?x:"",bottom:u.position==="bottom"?x:"",transform:$,zIndex:u.zIndex}}),B=()=>{if(!s.value||!r.value)return;const x=s.value.getBoundingClientRect(),$=r.value.getBoundingClientRect();if(c.height=x.height,c.width=x.width,c.scrollTop=document.documentElement.scrollTop,c.clientHeight=document.documentElement.clientHeight,u.position==="top")if(u.target){const A=$.bottom-u.offset-c.height;c.fixed=u.offset>x.top&&$.bottom>0,c.transform=A<0?A:0}else c.fixed=u.offset>x.top;else if(u.target){const A=c.clientHeight-$.top-u.offset-c.height;c.fixed=c.clientHeight-u.offset<x.bottom&&c.clientHeight>$.top,c.transform=A<0?-A:0}else c.fixed=c.clientHeight-u.offset<x.bottom},b=x=>{B(),n("scroll",x)};return de(()=>c.fixed,()=>{n("change",c.fixed)}),le(()=>{var x;if(u.target){if(r.value=(x=document.querySelector(u.target))!=null?x:void 0,!r.value)throw new Error(`Target is not existed: ${u.target}`)}else r.value=document.documentElement;window.addEventListener("scroll",b,!0),window.addEventListener("resize",b)}),Me(()=>{window.removeEventListener("scroll",b),window.removeEventListener("resize",b)}),o({update:B}),(x,$)=>(a(),p("div",{ref_key:"root",ref:s,class:"jw-affix",style:L(_(m))},[i("div",{class:M({"jw-affix-fixed":_(c).fixed}),style:L(_(h))},[I(x.$slots,"default")],6)],4))}})),He=e=>Math.pow(e,3),Rl=e=>e<.5?He(e*2)/2:1-He((1-e)*2)/2,Ol=function(e,o,{leading:n=!0,trailing:u=!0}={}){let r,s=0,c;function m(...h){if(r=new Date().getTime(),!n&&s===0&&(s=r),c&&(clearTimeout(c),c=null),r-s>=o){e.apply(this,h),s=r;return}u&&!c&&(c=setTimeout(()=>{e.apply(this,h),c=null,s=0},o-(r-s)))}return m};const Hl=["onClick"],Nl={name:"JwBacktop"},Jl=v(V(j({},Nl),{props:{right:{type:Number,default:40},bottom:{type:Number,default:40},visibilityHeight:{type:Number,default:200},target:{type:String,default:""}},emits:["click"],setup(e,{emit:o}){const n=e,u=me(document.documentElement),r=me(document),s=y(!1),c=()=>{if(!u.value)return;const b=Date.now(),x=u.value.scrollTop,$=()=>{if(!u.value)return;const A=(Date.now()-b)/500;A<1?(u.value.scrollTop=x*(1-Rl(A)),requestAnimationFrame($)):u.value.scrollTop=0};requestAnimationFrame($)},m=b=>{c(),o("click",b)},B=Ol(()=>{u.value&&(s.value=u.value.scrollTop>=n.visibilityHeight)},300);return le(()=>{var b;if(n.target){if(u.value=(b=document.querySelector(n.target))!=null?b:void 0,!u.value)throw new Error(`target is not existed: ${n.target}`);r.value=u.value,r.value.addEventListener("scroll",B)}}),Me(()=>{r.value.removeEventListener("scroll",B)}),(b,x)=>{const $=f("xh-icon");return a(),w($e,{"leave-active-class":"animate__bounceOut","enter-active-class":"animate__bounceIn"},{default:l(()=>[s.value?(a(),p("div",{key:0,class:"jw-backtop animate__animated",style:L({right:e.right+"px",bottom:e.bottom+"px"}),onClick:xe(m,["stop"])},[I(b.$slots,"default",{},()=>[t($,{size:26},{default:l(()=>[t(_($u))]),_:1})])],12,Hl)):F("",!0)]),_:3})}}}));const Ll={class:"jw-breadcrumb"},Wl={name:"JwBreadcrumb"},ql=v(V(j({},Wl),{props:{separator:{type:String,default:"/"},separatorIcon:{type:Object}},setup(e){return se("JwBreadcrumbKey",e),(n,u)=>(a(),p("div",Ll,[I(n.$slots,"default")]))}}));const Gl={class:"jw-breadcrumb-item"},Kl={key:1,class:"jw-breadcrumb-separator"},Yl={name:"JwBreadcrumbItem"},Xl=v(V(j({},Yl),{props:{to:{type:Object,default:()=>{}},replace:{type:Boolean,default:!1}},setup(e){const o=e,n=ve(),u=oe("JwBreadcrumbKey",void 0),r=()=>{!o.to||!n||(o.replace?n.replace(o.to):n.push(o.to))};return(s,c)=>{var h;const m=f("xh-icon");return a(),p("span",Gl,[i("span",{class:M(["jw-breadcrumb-inner",{"is-link":e.to}]),onClick:r},[I(s.$slots,"default")],2),((h=_(u))==null?void 0:h.separatorIcon)?(a(),w(m,{key:0,class:"jw-breadcrumb-separator",size:12},{default:l(()=>[(a(),w(ee(_(u).separatorIcon)))]),_:1})):(a(),p("span",Kl,P(_(u).separator),1))])}}}));const Ql={class:"jw-page-header"},Zl={class:"jw-page-header-left"},es={class:"jw-page-header-title"},ts={class:"jw-page-header-content"},ns={name:"jwPageHeader"},os=v(V(j({},ns),{props:{icon:{type:Object,default:Bu},title:{type:String,default:"Back"},content:{type:String,default:""}},emits:["back"],setup(e,{emit:o}){const n=()=>{o("back")};return(u,r)=>{const s=f("xh-icon"),c=f("jw-divider");return a(),p("div",Ql,[i("div",Zl,[I(u.$slots,"icon",{},()=>[t(s,{class:"jw-page-header-icon",size:18,onClick:n},{default:l(()=>[(a(),w(ee(e.icon)))]),_:1})]),I(u.$slots,"title",{},()=>[i("div",es,P(e.title),1)])]),t(c,{direction:"vertical"}),I(u.$slots,"content",{},()=>[i("div",ts,P(e.content),1)])])}}})),us={name:"JwTab"},Ne=v(V(j({},us),{props:{title:String},setup(e){return(o,n)=>I(o.$slots,"default")}}));const rs=["onClick"],ls={class:"jw-tabs-content"},ss={name:"JwTabs"},as=v(V(j({},ss),{props:{modelValue:{type:String},type:{type:String,default:"line"}},emits:["update:modelValue"],setup(e,{emit:o}){const n=e,u=Ve().default(),{type:r}=n,s={[`jw-tabs-${r}`]:r};u.forEach(S=>{if(S.type.name!==Ne.name)throw new Error("JwTabs \u5B50\u6807\u7B7E\u5FC5\u987B\u662FJwTab")});const c=y(null),m=y(null),h=y(null);le(()=>{Eu(()=>{B()})});const B=()=>{if(c.value&&n.type==="line"){const{width:S}=c.value.getBoundingClientRect();m.value.style.width=S+"px";const{left:R}=h.value.getBoundingClientRect(),{left:z}=c.value.getBoundingClientRect(),q=z-R;m.value.style.left=q+"px"}},b=u.map(S=>S.props.title),x=C(()=>u.find(S=>S.props.title===n.modelValue)),$=S=>{o("update:modelValue",S)},A=S=>R=>{S===n.modelValue&&(c.value=R)};return(S,R)=>(a(),p("div",{class:M(["jw-tabs",s])},[i("div",{class:"jw-tabs-header",ref_key:"container",ref:h},[(a(!0),p(E,null,Y(_(b),(z,q)=>(a(),p("div",{class:M(["jw-tabs-header-item",{"is-active":e.modelValue===z}]),key:q,onClick:G=>$(z),ref_for:!0,ref:A(z)},P(z),11,rs))),128)),_(r)==="line"?(a(),p("div",{key:0,class:"jw-tabs-header-indicator",ref_key:"indicator",ref:m},null,512)):F("",!0)],512),i("div",ls,[_(x)?(a(),w(ee(_(x)),{key:_(x).props.title})):F("",!0)])]))}})),cs=[Uu,Nu,Wu,Gu,Yu,Qu,er,or,xr,Er,Ar,Mr,Jr,Kr,ll,_l,vl,Bl,Fl,Ml,Jl,ql,Xl,os,as,Ne];function is(e){for(const o of cs)e.component(o.name,o)}const ds={class:"topnav"},_s=i("use",{"xlink:href":"#icon-list"},null,-1),ps=[_s],hs={class:"menu"},fs=d("\u9996\u9875"),ms=d("\u6587\u6863"),vs=i("span",null,"v1.0.21",-1),Je=v({props:{toggleMenuButton:{type:Boolean,default:!0}},setup(e){const o=ve(),n=oe("asideVisible"),u=()=>{n.value=!n.value},r=()=>{o.push({path:"/"})};return(s,c)=>{const m=f("router-link");return a(),p("div",ds,[e.toggleMenuButton?(a(),p("svg",{key:0,class:"icon toggle-aside","aria-hidden":"true",onClick:u},ps)):F("",!0),i("div",{class:"logo",onClick:r}," xiaohao "),i("div",hs,[t(m,{exact:"",to:"/home"},{default:l(()=>[fs]),_:1}),t(m,{to:"/doc"},{default:l(()=>[ms]),_:1}),vs])])}}});const Le=e=>(he("data-v-264da63e"),e=e(),fe(),e),bs={class:"topnavAndBanner"},gs={class:"banner"},xs=Le(()=>i("h1",null,"XH UI",-1)),ys=Le(()=>i("p",null,"\u4E00\u4E2A Vue 3 \u7EC4\u4EF6\u5E93",-1)),ws={class:"actions"},$s=d("GitHub"),Bs=d("\u5FEB\u901F\u4F7F\u7528"),Es=Cu('<div class="features" data-v-264da63e><ul data-v-264da63e><li data-v-264da63e><svg data-v-264da63e><use xlink:href="#icon-vue" data-v-264da63e></use></svg><h3 data-v-264da63e>\u57FA\u4E8E Vue 3</h3><p data-v-264da63e>\u4F7F\u7528 Vue 3 Composition API</p></li><li data-v-264da63e><svg data-v-264da63e><use xlink:href="#icon-ts" data-v-264da63e></use></svg><h3 data-v-264da63e>\u57FA\u4E8E TypeScript</h3><p data-v-264da63e>\u6E90\u4EE3\u7801\u91C7\u7528 TypeScript \u4E66\u5199</p></li><li data-v-264da63e><svg data-v-264da63e><use xlink:href="#icon-light" data-v-264da63e></use></svg><h3 data-v-264da63e>\u4EE3\u7801\u6613\u8BFB</h3><p data-v-264da63e>\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u90FD\u6781\u5176\u7B80\u6D01</p></li></ul></div>',1),Cs={setup(e){const o=ve(),n=u=>{u==="github"?window.open("https://github.com/xiaohao-1314","_blank"):u==="getStart"&&o.push({path:"/doc"})};return(u,r)=>{const s=f("xh-button");return a(),p(E,null,[i("div",bs,[t(Je,{toggleMenuButton:!1}),i("div",gs,[xs,ys,i("div",ws,[t(s,{onClick:r[0]||(r[0]=c=>n("github"))},{default:l(()=>[$s]),_:1}),t(s,{onClick:r[1]||(r[1]=c=>n("getStart")),theme:"primary"},{default:l(()=>[Bs]),_:1})])])]),Es],64)}}};var ks=D(Cs,[["__scopeId","data-v-264da63e"]]);const Fs=["innerHTML"],Ds=v({props:{content:{type:String,required:!0}},setup(e){return(o,n)=>(a(),p("article",{class:"markdown-body",innerHTML:e.content},null,8,Fs))}}),As=`<h1>xh UI</h1>
<p>xh UI \u662F\u4E00\u4E2A Vue3 \u7684\u7EC4\u4EF6\u5E93\u3002</p>
<p>\u8FD9\u662F\u6211\u7684\u7B2C\u4E00\u4E2A\u5F00\u6E90\u9879\u76EE\uFF0C\u56E0\u6B64\u6211\u975E\u5E38\u9A84\u50B2\u7684\u7528\u6211\u7684\u540D\u5B57\u4E3A\u5176\u547D\u540D!</p>
<h1>\u4ECB\u7ECD</h1>
<p>\u8FD9\u6B3E\u7EC4\u4EF6\u5E93\u662F\u6211\u5728\u5B66\u4E60\u4E86 vue3 \u7684\u65B0\u7279\u6027\u540E\u5E76\u4E14\u7ED3\u5408\u81EA\u5DF1\u8FD1\u4E24\u5E74\u7684\u5DE5\u4F5C\u7ECF\u9A8C\u6240\u5199\u7684\uFF0C<code>\u5168\u7A0B\u4EB2\u624B\u7F16\u5199</code>\uFF0C\u5C3D\u91CF<code>\u4E0D\u91C7\u7528\u7B2C\u4E09\u65B9\u5E93</code>\uFF0C\u5305\u62EC\u4F60\u73B0\u5728\u770B\u5230\u7684\u8FD9\u4E2A\u5B98\u7F51\u4E5F\u51E0\u4E4E\u90FD\u662F\u6211\u81EA\u5DF1\u5199\u7684\u3002</p>
<p>\u76EE\u524D\u6211\u8FD8\u662F<code>\u4E0D\u5EFA\u8BAE</code>\u4F60\u5C06\u6B64 UI \u5E93\u7528\u4E8E\u751F\u4EA7\u73AF\u5883\u3002\u4F46\u5982\u679C\u4F60\u662F\u62B1\u7740\u770B\u6E90\u4EE3\u7801\u7684\u76EE\u7684\u6765\u7684\uFF0C\u90A3\u4E48\u8FD9\u4E2A\u5E93\u8FD8\u662F<code>\u503C\u5F97\u4E00\u770B</code>\u7684\u3002</p>
<p>\u6E90\u4EE3\u7801\u653E\u5728\u4E86<a href="https://github.com/coderyjw/jw-ui">\u6211\u7684 github</a>\uFF0C\u4EE3\u7801\u975E\u5E38\u7B80\u6D01\uFF0C\u5386\u53F2\u63D0\u4EA4\u4FE1\u606F\u975E\u5E38\u89C4\u8303\uFF0C\u4F60\u53EF\u4EE5\u6309\u63D0\u4EA4\u7684\u987A\u5E8F\u9010\u4E2A\u67E5\u770B\uFF1B</p>
<p>\u4F60\u4E5F\u53EF\u4EE5\u76F4\u63A5\u67E5\u770B\u6BCF\u4E2A\u7EC4\u4EF6\u7684\u6E90\u4EE3\u7801\u548C\u793A\u4F8B\uFF0C\u8FD0\u884C\u65B9\u6CD5\u89C1 README.md\u3002</p>
<p>\u867D\u7136\u76EE\u524D\u7EC4\u4EF6\u4E0D\u591A\uFF0C\u4F46\u662F\u6211\u4F1A\u6162\u6162\u7684\u66F4\u65B0\u54D2(<em>^\u25BD^</em>)</p>
<p>\u4E0B\u4E00\u8282\uFF1A<a href="#/doc/avatar">Avatar \u5934\u50CF</a></p>
`;const We=e=>(he("data-v-026dc573"),e=e(),fe(),e),js={class:"next-and-prev-link"},Vs={key:0,class:"icon","aria-hidden":"true",style:{transform:"rotate(180deg)"}},zs=We(()=>i("use",{"xlink:href":"#icon-arrow-right"},null,-1)),Ts=[zs],Ss={key:0},Is={key:1,class:"icon","aria-hidden":"true"},Ps=We(()=>i("use",{"xlink:href":"#icon-arrow-right"},null,-1)),Us=[Ps],Ms=v({props:{prev:{type:Object,default:Object},next:{type:Object,default:Object}},setup(e){const o=e,n=ve(),u=()=>{n.push({path:o.prev.path})},r=()=>{n.push({path:o.next.path})};return(s,c)=>(a(),p("div",js,[e.prev.name?(a(),p("div",{key:0,class:"pre",onClick:u},[e.prev.name?(a(),p("svg",Vs,Ts)):F("",!0),i("span",null,P(e.prev.name),1)])):F("",!0),i("div",{class:"next",onClick:r},[e.next.name?(a(),p("span",Ss,P(e.next.name),1)):F("",!0),e.next.name?(a(),p("svg",Is,Us)):F("",!0)])]))}});var O=D(Ms,[["__scopeId","data-v-026dc573"]]);const k=v({props:{title:{type:String},type:{type:String,values:["prop","slot","event","methods"],default:"prop"},body:{type:Array,default:()=>[]},header:{type:Array,default:()=>[]}},setup(e){const o=e,{type:n}=o,u=C(()=>{if(o.header.length===0)switch(n){case"prop":return["\u5C5E\u6027","\u8BF4\u660E","\u7C7B\u578B","\u53EF\u9009\u503C","\u9ED8\u8BA4\u503C"];case"slot":return["\u63D2\u69FD\u540D","\u8BF4\u660E"];case"event":return["\u4E8B\u4EF6\u540D","\u8BF4\u660E","\u56DE\u8C03\u53C2\u6570"];case"methods":return["\u65B9\u6CD5","\u8BF4\u660E","\u53C2\u6570"]}return o.header});return(r,s)=>(a(),p(E,null,[i("h2",null,P(e.title),1),i("table",null,[i("thead",null,[i("tr",null,[(a(!0),p(E,null,Y(_(u),(c,m)=>(a(),p("th",{key:m},P(c),1))),128))])]),i("tbody",null,[(a(!0),p(E,null,Y(e.body,(c,m)=>(a(),p("tr",{key:m},[(a(!0),p(E,null,Y(c,(h,B)=>(a(),p("td",{key:B},P(h),1))),128))]))),128))])])],64))}});const Rs={class:"preview-container"},Os=d("\u9690\u85CF\u4EE3\u7801"),Hs=d("\u67E5\u770B\u4EE3\u7801"),Ns={class:"preview-container-component"},Js={key:0,class:"preview-container-code"},Ls=["innerHTML"],Ws=v({props:{component:Object},setup(e){const o=e,n=window.Prism,u=C(()=>n.highlight(o.component.__sourceCode,n.languages.html,"html")),r=()=>c.value=!0,s=()=>c.value=!1,c=y(!1);return(m,h)=>{const B=f("xh-button");return a(),p("div",Rs,[i("h2",null,[d(P(e.component.__sourceCodeTitle)+" ",1),c.value?(a(),w(B,{key:0,onClick:s},{default:l(()=>[Os]),_:1})):(a(),w(B,{key:1,onClick:r},{default:l(()=>[Hs]),_:1}))]),i("div",Ns,[(a(),w(ee(e.component)))]),c.value?(a(),p("div",Js,[i("pre",{class:"language-html",innerHTML:_(u)},null,8,Ls)])):F("",!0)])}}});var g=D(Ws,[["__scopeId","data-v-3b37d8d2"]]),K="./assets/avator.7c9f3e79.jpg";function qe(e){e.__sourceCode=`<template>\r
  <div class="img">\r
    <div>\r
      <xh-avatar :src="imgUrl" size="small" />\r
      <xh-avatar :src="imgUrl" size="default" />\r
      <xh-avatar :src="imgUrl" size="large" />\r
      <xh-avatar :src="imgUrl" :size="100" />\r
    </div>\r
\r
    <div>\r
      <xh-avatar :src="imgUrl" shape="square" size="small" />\r
      <xh-avatar :src="imgUrl" shape="square" size="default" />\r
      <xh-avatar :src="imgUrl" shape="square" size="large" />\r
      <xh-avatar :src="imgUrl" shape="square" :size="100" />\r
    </div>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "/src/assets/image/avator.jpg";\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"}const qs={class:"img"},Ge=v({setup(e){return(o,n)=>{const u=f("xh-avatar");return a(),p("div",qs,[i("div",null,[t(u,{src:_(K),size:"small"},null,8,["src"]),t(u,{src:_(K),size:"default"},null,8,["src"]),t(u,{src:_(K),size:"large"},null,8,["src"]),t(u,{src:_(K),size:100},null,8,["src"])]),i("div",null,[t(u,{src:_(K),shape:"square",size:"small"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:"default"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:"large"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:100},null,8,["src"])])])}}});typeof qe=="function"&&qe(Ge);function Ke(e){e.__sourceCode=`<template>\r
  <div class="img">\r
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="fill" />\r
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="contain" />\r
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="cover" />\r
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="none" />\r
    <xh-avatar :src="imgUrl" shape="square" :size="100" fit="scale-down" />\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import imgUrl from "/src/assets/image/avator.jpg";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u7247\u9002\u5E94\u5BB9\u5668\u6846"}const Gs={class:"img"},Ye=v({setup(e){return(o,n)=>{const u=f("xh-avatar");return a(),p("div",Gs,[t(u,{src:_(K),shape:"square",size:100,fit:"fill"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:100,fit:"contain"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:100,fit:"cover"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:100,fit:"none"},null,8,["src"]),t(u,{src:_(K),shape:"square",size:100,fit:"scale-down"},null,8,["src"])])}}});typeof Ke=="function"&&Ke(Ye);function Xe(e){e.__sourceCode=`<template>\r
  <xh-avatar size="large">\u9ED8\u8BA4</xh-avatar>\r
  <xh-avatar size="large">user</xh-avatar>\r
  <xh-avatar size="large" color="white" backgroundColor="#409eff"\r
    >\u9ED8\u8BA4</xh-avatar\r
  >\r
  <xh-avatar\r
    size="large"\r
    shape="square"\r
    color="white"\r
    backgroundColor="#409eff"\r
  >\r
    \u9ED8\u8BA4\r
  </xh-avatar>\r
</template>`,e.__sourceCodeTitle="\u989C\u8272"}const Qe={},Ks=d("\u9ED8\u8BA4"),Ys=d("user"),Xs=d("\u9ED8\u8BA4"),Qs=d(" \u9ED8\u8BA4 ");function Zs(e,o){const n=f("xh-avatar");return a(),p(E,null,[t(n,{size:"large"},{default:l(()=>[Ks]),_:1}),t(n,{size:"large"},{default:l(()=>[Ys]),_:1}),t(n,{size:"large",color:"white",backgroundColor:"#409eff"},{default:l(()=>[Xs]),_:1}),t(n,{size:"large",shape:"square",color:"white",backgroundColor:"#409eff"},{default:l(()=>[Qs]),_:1})],64)}typeof Xe=="function"&&Xe(Qe);var ea=D(Qe,[["render",Zs]]);function Ze(e){e.__sourceCode=`<template>\r
  <xh-avatar src="empty" size="large" @error="handleError">\r
    <img src="/src/assets/image/avator.jpg" alt="" />\r
  </xh-avatar>\r
</template>\r
<script setup lang="ts">\r
const handleError = () => {\r
  console.log("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25");\r
  return false;\r
};\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u7247\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u6EDA\u884C\u4E3A"}const ta=i("img",{src:K,alt:""},null,-1),et=v({setup(e){const o=()=>(console.log("\u56FE\u7247\u52A0\u8F7D\u5931\u8D25"),!1);return(n,u)=>{const r=f("xh-avatar");return a(),w(r,{src:"empty",size:"large",onError:o},{default:l(()=>[ta]),_:1})}}});typeof Ze=="function"&&Ze(et);const na={class:"avatar-doc-wrapper"},oa=i("h1",null,"Avatar \u5934\u50CF",-1),ua=i("p",null,"Avatar \u7EC4\u4EF6\u53EF\u4EE5\u7528\u6765\u4EE3\u8868\u4EBA\u7269\u6216\u5BF9\u8C61",-1),ra={class:"preview-wrapper"},la=v({setup(e){const o=[["icon","\u8BBE\u7F6E\u5934\u50CF\u7684\u5927\u5C0F","number / string","number / large / default /small","default"],["shape","\u8BBE\u7F6E\u5934\u50CF\u7684\u5F62\u72B6","string","circle / square","circle"],["fit","\u5F53\u5C55\u793A\u7C7B\u578B\u4E3A\u56FE\u7247\u7684\u65F6\u5019\uFF0C\u8BBE\u7F6E\u56FE\u7247\u5982\u4F55\u9002\u5E94\u5BB9\u5668\u6846","string","fill / contain / cover / none / scale-down","fill"],["src","\u56FE\u7247\u5934\u50CF\u7684\u8D44\u6E90\u5730\u5740","string","-","-"],["alt","\u63CF\u8FF0\u56FE\u50CF\u7684\u66FF\u6362\u6587\u672C","string","-","-"]],n=[["error","\u56FE\u7247\u7C7B\u5934\u50CF\u52A0\u8F7D\u5931\u8D25\u7684\u56DE\u8C03\uFF0C \u8FD4\u56DE false \u4F1A\u5173\u95ED\u7EC4\u4EF6\u9ED8\u8BA4\u7684 fallback \u884C\u4E3A","(): Event => {}"]],u=[["default","\u81EA\u5B9A\u4E49\u5934\u50CF\u5C55\u793A\u5185\u5BB9"]];return(r,s)=>(a(),p("div",na,[oa,ua,i("div",ra,[t(g,{component:Ge}),t(g,{component:Ye}),t(g,{component:ea}),t(g,{component:et}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"\u63D2\u69FD",type:"slot",body:u}),t(O,{prev:{path:"/doc/get-started",name:"\u5FEB\u901F\u4F7F\u7528"},next:{path:"/doc/button",name:"\u6309\u94AE Button"}})])]))}});function tt(e){e.__sourceCode=`<template>\r
  <div style="margin: 10px 0px; width: 100%">\r
    <xh-Button type="default">\u9ED8\u8BA4\u6309\u94AE</xh-Button>\r
    <xh-Button type="primary">\u4E3B\u8981\u6309\u94AE</xh-Button>\r
    <xh-Button type="info">\u4FE1\u606F\u6309\u94AE</xh-Button>\r
    <xh-Button type="success">\u6210\u529F\u6309\u94AE</xh-Button>\r
    <xh-Button type="warning">\u8B66\u544A\u6309\u94AE</xh-Button>\r
    <xh-Button type="error">\u5371\u9669\u6309\u94AE</xh-Button>\r
  </div>\r
\r
  <div style="margin: 10px 0px; width: 100%">\r
    <xh-Button type="default" dashed>\u9ED8\u8BA4\u6309\u94AE</xh-Button>\r
    <xh-Button type="primary" dashed>\u4E3B\u8981\u6309\u94AE</xh-Button>\r
    <xh-Button type="info" dashed>\u4FE1\u606F\u6309\u94AE</xh-Button>\r
    <xh-Button type="success" dashed>\u6210\u529F\u6309\u94AE</xh-Button>\r
    <xh-Button type="warning" dashed>\u8B66\u544A\u6309\u94AE</xh-Button>\r
    <xh-Button type="error" dashed>\u5371\u9669\u6309\u94AE</xh-Button>\r
  </div>\r
\r
  <div style="margin: 10px 0px; width: 100%">\r
    <xh-Button type="default" round>\u9ED8\u8BA4\u6309\u94AE</xh-Button>\r
    <xh-Button type="primary" round>\u4E3B\u8981\u6309\u94AE</xh-Button>\r
    <xh-Button type="info" round>\u4FE1\u606F\u6309\u94AE</xh-Button>\r
    <xh-Button type="success" round>\u6210\u529F\u6309\u94AE</xh-Button>\r
    <xh-Button type="warning" round>\u8B66\u544A\u6309\u94AE</xh-Button>\r
    <xh-Button type="error" round>\u5371\u9669\u6309\u94AE</xh-Button>\r
  </div>\r
\r
  <div style="margin: 10px 0px; width: 100%">\r
    <xh-Button type="default" circle>\r
      <xh-icon size="16">\r
        <Add16Regular />\r
      </xh-icon>\r
    </xh-Button>\r
    <xh-Button type="primary" circle>\r
      <xh-icon size="16">\r
        <Add16Regular />\r
      </xh-icon>\r
    </xh-Button>\r
    <xh-Button type="info" circle>\r
      <xh-icon size="16">\r
        <Add16Regular />\r
      </xh-icon>\r
    </xh-Button>\r
    <xh-Button type="success" circle>\r
      <xh-icon size="16">\r
        <Add16Regular />\r
      </xh-icon>\r
    </xh-Button>\r
    <xh-Button type="warning" circle>\r
      <xh-icon size="16">\r
        <Add16Regular />\r
      </xh-icon>\r
    </xh-Button>\r
    <xh-Button type="error" circle>\r
      <xh-icon size="16">\r
        <Add16Regular />\r
      </xh-icon>\r
    </xh-Button>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { Add16Regular } from "@vicons/fluent";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const sa={style:{margin:"10px 0px",width:"100%"}},aa=d("\u9ED8\u8BA4\u6309\u94AE"),ca=d("\u4E3B\u8981\u6309\u94AE"),ia=d("\u4FE1\u606F\u6309\u94AE"),da=d("\u6210\u529F\u6309\u94AE"),_a=d("\u8B66\u544A\u6309\u94AE"),pa=d("\u5371\u9669\u6309\u94AE"),ha={style:{margin:"10px 0px",width:"100%"}},fa=d("\u9ED8\u8BA4\u6309\u94AE"),ma=d("\u4E3B\u8981\u6309\u94AE"),va=d("\u4FE1\u606F\u6309\u94AE"),ba=d("\u6210\u529F\u6309\u94AE"),ga=d("\u8B66\u544A\u6309\u94AE"),xa=d("\u5371\u9669\u6309\u94AE"),ya={style:{margin:"10px 0px",width:"100%"}},wa=d("\u9ED8\u8BA4\u6309\u94AE"),$a=d("\u4E3B\u8981\u6309\u94AE"),Ba=d("\u4FE1\u606F\u6309\u94AE"),Ea=d("\u6210\u529F\u6309\u94AE"),Ca=d("\u8B66\u544A\u6309\u94AE"),ka=d("\u5371\u9669\u6309\u94AE"),Fa={style:{margin:"10px 0px",width:"100%"}},nt=v({setup(e){return(o,n)=>{const u=f("xh-Button"),r=f("xh-icon");return a(),p(E,null,[i("div",sa,[t(u,{type:"default"},{default:l(()=>[aa]),_:1}),t(u,{type:"primary"},{default:l(()=>[ca]),_:1}),t(u,{type:"info"},{default:l(()=>[ia]),_:1}),t(u,{type:"success"},{default:l(()=>[da]),_:1}),t(u,{type:"warning"},{default:l(()=>[_a]),_:1}),t(u,{type:"error"},{default:l(()=>[pa]),_:1})]),i("div",ha,[t(u,{type:"default",dashed:""},{default:l(()=>[fa]),_:1}),t(u,{type:"primary",dashed:""},{default:l(()=>[ma]),_:1}),t(u,{type:"info",dashed:""},{default:l(()=>[va]),_:1}),t(u,{type:"success",dashed:""},{default:l(()=>[ba]),_:1}),t(u,{type:"warning",dashed:""},{default:l(()=>[ga]),_:1}),t(u,{type:"error",dashed:""},{default:l(()=>[xa]),_:1})]),i("div",ya,[t(u,{type:"default",round:""},{default:l(()=>[wa]),_:1}),t(u,{type:"primary",round:""},{default:l(()=>[$a]),_:1}),t(u,{type:"info",round:""},{default:l(()=>[Ba]),_:1}),t(u,{type:"success",round:""},{default:l(()=>[Ea]),_:1}),t(u,{type:"warning",round:""},{default:l(()=>[Ca]),_:1}),t(u,{type:"error",round:""},{default:l(()=>[ka]),_:1})]),i("div",Fa,[t(u,{type:"default",circle:""},{default:l(()=>[t(r,{size:"16"},{default:l(()=>[t(_(te))]),_:1})]),_:1}),t(u,{type:"primary",circle:""},{default:l(()=>[t(r,{size:"16"},{default:l(()=>[t(_(te))]),_:1})]),_:1}),t(u,{type:"info",circle:""},{default:l(()=>[t(r,{size:"16"},{default:l(()=>[t(_(te))]),_:1})]),_:1}),t(u,{type:"success",circle:""},{default:l(()=>[t(r,{size:"16"},{default:l(()=>[t(_(te))]),_:1})]),_:1}),t(u,{type:"warning",circle:""},{default:l(()=>[t(r,{size:"16"},{default:l(()=>[t(_(te))]),_:1})]),_:1}),t(u,{type:"error",circle:""},{default:l(()=>[t(r,{size:"16"},{default:l(()=>[t(_(te))]),_:1})]),_:1})])],64)}}});typeof tt=="function"&&tt(nt);function ot(e){e.__sourceCode=`<template>\r
  <xh-Button type="primary" size="small">\u5C0F\u6309\u94AE</xh-Button>\r
  <xh-Button type="primary" size="default">\u9ED8\u8BA4\u6309\u94AE</xh-Button>\r
  <xh-Button type="primary" size="large">\u5927\u6309\u94AE</xh-Button>\r
</template>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"}const ut={},Da=d("\u5C0F\u6309\u94AE"),Aa=d("\u9ED8\u8BA4\u6309\u94AE"),ja=d("\u5927\u6309\u94AE");function Va(e,o){const n=f("xh-Button");return a(),p(E,null,[t(n,{type:"primary",size:"small"},{default:l(()=>[Da]),_:1}),t(n,{type:"primary",size:"default"},{default:l(()=>[Aa]),_:1}),t(n,{type:"primary",size:"large"},{default:l(()=>[ja]),_:1})],64)}typeof ot=="function"&&ot(ut);var za=D(ut,[["render",Va]]);function rt(e){e.__sourceCode=`<template>\r
  <xh-Button type="default" disabled>\u9ED8\u8BA4\u6309\u94AE</xh-Button>\r
  <xh-Button type="primary" disabled>\u4E3B\u8981\u6309\u94AE</xh-Button>\r
  <xh-Button type="info" disabled>\u4FE1\u606F\u6309\u94AE</xh-Button>\r
  <xh-Button type="success" disabled>\u6210\u529F\u6309\u94AE</xh-Button>\r
  <xh-Button type="warning" disabled>\u8B66\u544A\u6309\u94AE</xh-Button>\r
  <xh-Button type="error" disabled>\u5371\u9669\u6309\u94AE</xh-Button>\r
</template>`,e.__sourceCodeTitle="\u7981\u7528"}const lt={},Ta=d("\u9ED8\u8BA4\u6309\u94AE"),Sa=d("\u4E3B\u8981\u6309\u94AE"),Ia=d("\u4FE1\u606F\u6309\u94AE"),Pa=d("\u6210\u529F\u6309\u94AE"),Ua=d("\u8B66\u544A\u6309\u94AE"),Ma=d("\u5371\u9669\u6309\u94AE");function Ra(e,o){const n=f("xh-Button");return a(),p(E,null,[t(n,{type:"default",disabled:""},{default:l(()=>[Ta]),_:1}),t(n,{type:"primary",disabled:""},{default:l(()=>[Sa]),_:1}),t(n,{type:"info",disabled:""},{default:l(()=>[Ia]),_:1}),t(n,{type:"success",disabled:""},{default:l(()=>[Pa]),_:1}),t(n,{type:"warning",disabled:""},{default:l(()=>[Ua]),_:1}),t(n,{type:"error",disabled:""},{default:l(()=>[Ma]),_:1})],64)}typeof rt=="function"&&rt(lt);var Oa=D(lt,[["render",Ra]]);function st(e){e.__sourceCode=`<template>\r
  <xh-Button type="primary" icon-placement="right">\r
    <template #icon>\r
      <xh-icon size="20">\r
        <Add16Regular />\r
      </xh-icon>\r
    </template>\r
    \u9ED8\u8BA4\u6309\u94AE\r
  </xh-Button>\r
  <xh-Button type="primary">\r
    <template #icon>\r
      <xh-icon size="20">\r
        <Add16Regular />\r
      </xh-icon>\r
    </template>\r
    \u9ED8\u8BA4\u6309\u94AE\r
  </xh-Button>\r
</template>\r
<script setup lanng="scss">\r
import { Add16Regular } from "@vicons/fluent";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u6807"}const Ha=d(" \u9ED8\u8BA4\u6309\u94AE "),Na=d(" \u9ED8\u8BA4\u6309\u94AE "),at={setup(e){return(o,n)=>{const u=f("xh-icon"),r=f("xh-Button");return a(),p(E,null,[t(r,{type:"primary","icon-placement":"right"},{icon:l(()=>[t(u,{size:"20"},{default:l(()=>[t(_(te))]),_:1})]),default:l(()=>[Ha]),_:1}),t(r,{type:"primary"},{icon:l(()=>[t(u,{size:"20"},{default:l(()=>[t(_(te))]),_:1})]),default:l(()=>[Na]),_:1})],64)}}};typeof st=="function"&&st(at);function ct(e){e.__sourceCode=`<template>\r
  <xh-Button type="default" loading>loading</xh-Button>\r
  <xh-Button type="primary" loading>loading</xh-Button>\r
  <xh-Button type="info" loading>loading</xh-Button>\r
  <xh-Button type="success" loading>loading</xh-Button>\r
  <xh-Button type="warning" loading>loading</xh-Button>\r
  <xh-Button type="error" loading>loading</xh-Button>\r
</template>`,e.__sourceCodeTitle="\u52A0\u8F7D"}const it={},Ja=d("loading"),La=d("loading"),Wa=d("loading"),qa=d("loading"),Ga=d("loading"),Ka=d("loading");function Ya(e,o){const n=f("xh-Button");return a(),p(E,null,[t(n,{type:"default",loading:""},{default:l(()=>[Ja]),_:1}),t(n,{type:"primary",loading:""},{default:l(()=>[La]),_:1}),t(n,{type:"info",loading:""},{default:l(()=>[Wa]),_:1}),t(n,{type:"success",loading:""},{default:l(()=>[qa]),_:1}),t(n,{type:"warning",loading:""},{default:l(()=>[Ga]),_:1}),t(n,{type:"error",loading:""},{default:l(()=>[Ka]),_:1})],64)}typeof ct=="function"&&ct(it);var Xa=D(it,[["render",Ya]]);function dt(e){e.__sourceCode=`<template>\r
  <xh-Button type="text">\u6587\u5B57\u6309\u94AE</xh-Button>\r
  <xh-Button type="text" disabled>\u6587\u5B57\u6309\u94AE</xh-Button>\r
</template>`,e.__sourceCodeTitle="\u6587\u5B57\u6309\u94AE"}const _t={},Qa=d("\u6587\u5B57\u6309\u94AE"),Za=d("\u6587\u5B57\u6309\u94AE");function ec(e,o){const n=f("xh-Button");return a(),p(E,null,[t(n,{type:"text"},{default:l(()=>[Qa]),_:1}),t(n,{type:"text",disabled:""},{default:l(()=>[Za]),_:1})],64)}typeof dt=="function"&&dt(_t);var tc=D(_t,[["render",ec]]);const nc={class:"button-doc-wrapper"},oc=i("h1",null,"Button \u6309\u94AE",-1),uc=i("p",null,"\u5E38\u7528\u7684\u64CD\u4F5C\u6309\u94AE\u3002",-1),rc={class:"preview-wrapper"},lc=v({setup(e){const o=[["type","\u7C7B\u578B","string","default / primary / info / success / warning / error","default"],["dashed","\u662F\u5426\u865A\u7EBF\u4E3A\u6309\u94AE","boolean","-","false"],["size","\u6309\u94AE\u5927\u5C0F","string","small / default / large","default"],["round","\u662F\u5426\u4E3A\u5706\u89D2\u6309\u94AE","boolean","-","false"],["circle","\u662F\u5426\u4E3A\u5706\u5F62\u6309\u94AE","boolean","-","false"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","fasle"],["loading","\u662F\u5426\u663E\u793A\u52A0\u8F7D\u4E2D","boolean","-","fasle"],["icon-placement","\u6309\u94AE\u4E2D\u56FE\u6807\u7684\u4F4D\u7F6E","string","left / right","left"]],n=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"],["icon","\u6309\u94AE\u7684\u56FE\u6807"]],u=[["click","click \u4E8B\u4EF6","(): Event => {}"]];return(r,s)=>(a(),p("div",nc,[oc,uc,i("div",rc,[t(g,{component:nt}),t(g,{component:za}),t(g,{component:Oa}),t(g,{component:at}),t(g,{component:tc}),t(g,{component:Xa}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:u}),t(O,{prev:{path:"/doc/avatar",name:"Avatar \u5934\u50CF"},next:{path:"/doc/divider",name:"\u5206\u5272\u7EBF Divider"}})])]))}});function pt(e){e.__sourceCode=`<template>\r
  \u9752\u6625\u662F\u4E00\u4E2A\u77ED\u6682\u7684\u7F8E\u68A6, \u5F53\u4F60\u9192\u6765\u65F6, \u5B83\u65E9\u5DF2\u6D88\u5931\u65E0\u8E2A\r
  <xh-divider />\r
  \u5C11\u91CF\u7684\u90AA\u6076\u8DB3\u4EE5\u62B5\u6D88\u5168\u90E8\u9AD8\u8D35\u7684\u54C1\u8D28, \u5BB3\u5F97\u4EBA\u58F0\u540D\u72FC\u85C9\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const ht={},sc=d(" \u9752\u6625\u662F\u4E00\u4E2A\u77ED\u6682\u7684\u7F8E\u68A6, \u5F53\u4F60\u9192\u6765\u65F6, \u5B83\u65E9\u5DF2\u6D88\u5931\u65E0\u8E2A "),ac=d(" \u5C11\u91CF\u7684\u90AA\u6076\u8DB3\u4EE5\u62B5\u6D88\u5168\u90E8\u9AD8\u8D35\u7684\u54C1\u8D28, \u5BB3\u5F97\u4EBA\u58F0\u540D\u72FC\u85C9 ");function cc(e,o){const n=f("xh-divider");return a(),p(E,null,[sc,t(n),ac],64)}typeof pt=="function"&&pt(ht);var ic=D(ht,[["render",cc]]);function ft(e){e.__sourceCode=`<template>\r
  \u5934\u4E0A\u4E00\u7247\u6674\u5929\uFF0C\u5FC3\u4E2D\u4E00\u4E2A\u60F3\u5FF5\r
  <xh-divider title-placement="left"> xiaohao </xh-divider>\r
  \u5230\u70B9\u5403\u996D\u5566\r
  <xh-divider title-placement="center"> xiaohao </xh-divider>\r
  \u4E3A\u4E86\u65E0\u6CD5\u8BA1\u7B97\u7684\u4EF7\u503C\r
  <xh-divider title-placement="right"> xiaohao </xh-divider>\r
  \u4ECA\u665A\u53BB\u54EA\u73A9\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u8BBE\u7F6E\u6587\u6848"}const mt={},dc=d(" \u5934\u4E0A\u4E00\u7247\u6674\u5929\uFF0C\u5FC3\u4E2D\u4E00\u4E2A\u60F3\u5FF5 "),_c=d(" xiaohao "),pc=d(" \u5230\u70B9\u5403\u996D\u5566 "),hc=d(" xiaohao "),fc=d(" \u4E3A\u4E86\u65E0\u6CD5\u8BA1\u7B97\u7684\u4EF7\u503C "),mc=d(" xiaohao "),vc=d(" \u4ECA\u665A\u53BB\u54EA\u73A9 ");function bc(e,o){const n=f("xh-divider");return a(),p(E,null,[dc,t(n,{"title-placement":"left"},{default:l(()=>[_c]),_:1}),pc,t(n,{"title-placement":"center"},{default:l(()=>[hc]),_:1}),fc,t(n,{"title-placement":"right"},{default:l(()=>[mc]),_:1}),vc],64)}typeof ft=="function"&&ft(mt);var gc=D(mt,[["render",bc]]);function vt(e){e.__sourceCode=`<template>\r
  \u96E8\u7EB7\u7EB7\r
  <xh-divider direction="vertical" />\r
  \u65E7\u6545\u91CC\r
  <xh-divider direction="vertical" />\r
  \u8349\u6728\u751F\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u5782\u76F4"}const bt={},xc=d(" \u96E8\u7EB7\u7EB7 "),yc=d(" \u65E7\u6545\u91CC "),wc=d(" \u8349\u6728\u751F ");function $c(e,o){const n=f("xh-divider");return a(),p(E,null,[xc,t(n,{direction:"vertical"}),yc,t(n,{direction:"vertical"}),wc],64)}typeof vt=="function"&&vt(bt);var Bc=D(bt,[["render",$c]]);function gt(e){e.__sourceCode=`<template>\r
  <xh-divider weight="1" />\r
  <xh-divider weight="2" />\r
  <xh-divider weight="3" />\r
  <xh-divider weight="4" />\r
  <xh-divider weight="5" />\r
</template>\r
\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u91CD\u91CF"}const xt={};function Ec(e,o){const n=f("xh-divider");return a(),p(E,null,[t(n,{weight:"1"}),t(n,{weight:"2"}),t(n,{weight:"3"}),t(n,{weight:"4"}),t(n,{weight:"5"})],64)}typeof gt=="function"&&gt(xt);var Cc=D(xt,[["render",Ec]]);const kc={class:"divider-doc-wrapper"},Fc=i("h1",null,"Divider \u5206\u5272\u7EBF",-1),Dc=i("p",null,"\u533A\u9694\u5185\u5BB9\u7684\u5206\u5272\u7EBF\u3002",-1),Ac={class:"preview-wrapper"},jc=v({setup(e){const o=[["title-placement","\u6807\u9898\u7684\u4F4D\u7F6E","string","left / right / center","left"],["direction","\u8BBE\u7F6E\u5206\u5272\u7EBF\u65B9\u5411","string","horizontal / vertical","horizontal"],["weight","\u8BBE\u7F6E\u5206\u5272\u7EBF\u91CD\u91CF","number","\u6570\u503C\u7C7B\u578B\uFF08\u6700\u5927\u4E3A150\uFF09","1"]],n=[["default","\u5206\u5272\u7EBF\u7684\u6807\u9898"]];return(u,r)=>(a(),p("div",kc,[Fc,Dc,i("div",Ac,[t(g,{component:ic}),t(g,{component:gc}),t(g,{component:Bc}),t(g,{component:Cc}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(O,{prev:{path:"/doc/button",name:"Button \u6309\u94AE"},next:{path:"/doc/Ellipsis",name:"\u6587\u672C\u7701\u7565 Ellipsis"}})])]))}});function yt(e){e.__sourceCode=`<template>\r
  <xh-ellipsis :width="700">\r
    \u5982\u679C\u5BF9\u65B9\u8981\u6C42\u6C38\u8FDC\u53CA\u65F6\u56DE\u590D\uFF0C\u4E00\u6B21\u665A\u56DE\u590D\u5C31\u8981\u6B7B\u8981\u6D3B\u7684\uFF0C\u90A3\u53EF\u80FD\u5C31\u662F\u4F60\u771F\u7684\u6CA1\u5FD9\u8FC7\uFF0C\u522B\u62FF\u4E0D\u53CA\u65F6\u56DE\u590D\uFF0C\u6765\u5224\u65AD\u5BF9\u65B9\u5728\u4E0D\u5728\u4E4E\u4F60\u3002\r
  </xh-ellipsis>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840"}const wt={},Vc=d(" \u5982\u679C\u5BF9\u65B9\u8981\u6C42\u6C38\u8FDC\u53CA\u65F6\u56DE\u590D\uFF0C\u4E00\u6B21\u665A\u56DE\u590D\u5C31\u8981\u6B7B\u8981\u6D3B\u7684\uFF0C\u90A3\u53EF\u80FD\u5C31\u662F\u4F60\u771F\u7684\u6CA1\u5FD9\u8FC7\uFF0C\u522B\u62FF\u4E0D\u53CA\u65F6\u56DE\u590D\uFF0C\u6765\u5224\u65AD\u5BF9\u65B9\u5728\u4E0D\u5728\u4E4E\u4F60\u3002 ");function zc(e,o){const n=f("xh-ellipsis");return a(),w(n,{width:700},{default:l(()=>[Vc]),_:1})}typeof yt=="function"&&yt(wt);var Tc=D(wt,[["render",zc]]);function $t(e){e.__sourceCode=`<template>\r
  <xh-ellipsis :line-clamp="2" :width="700">\r
    \u4E00\u6BB5\u6210\u719F\u7684\u5173\u7CFB\uFF0C\u8981\u5206\u6E05\u695A\u5FC5\u8981\u7684\u5173\u5FC3\uFF0C\u548C\u4E3A\u4E86\u5173\u5FC3\u800C\u5173\u5FC3\u7684\u533A\u522B\uFF0C\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F\uFF0C\u8981\u76F8\u4FE1\u6CA1\u6709\u53CA\u65F6\u56DE\u590D\u4E0D\u662F\u5929\u5927\u7684\u4E8B\uFF0C\u4F46\u5929\u5927\u7684\u4E8B\u5979\u4E00\u5B9A\u56DE\u590D\u4F60\u3002\u8FD9\u5C31\u662F\u4FE1\u4EFB\u3002\r
  </xh-ellipsis>\r
</template>`,e.__sourceCodeTitle="\u6700\u5927\u884C\u6570"}const Bt={},Sc=d(" \u4E00\u6BB5\u6210\u719F\u7684\u5173\u7CFB\uFF0C\u8981\u5206\u6E05\u695A\u5FC5\u8981\u7684\u5173\u5FC3\uFF0C\u548C\u4E3A\u4E86\u5173\u5FC3\u800C\u5173\u5FC3\u7684\u533A\u522B\uFF0C\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F\uFF0C\u8981\u76F8\u4FE1\u6CA1\u6709\u53CA\u65F6\u56DE\u590D\u4E0D\u662F\u5929\u5927\u7684\u4E8B\uFF0C\u4F46\u5929\u5927\u7684\u4E8B\u5979\u4E00\u5B9A\u56DE\u590D\u4F60\u3002\u8FD9\u5C31\u662F\u4FE1\u4EFB\u3002 ");function Ic(e,o){const n=f("xh-ellipsis");return a(),w(n,{"line-clamp":2,width:700},{default:l(()=>[Sc]),_:1})}typeof $t=="function"&&$t(Bt);var Pc=D(Bt,[["render",Ic]]);function Et(e){e.__sourceCode=`<template>\r
  <xh-ellipsis :line-clamp="2" expand-trigger="click" :width="700">\r
    \u5979\u60F3\u8981\u7684\u662F\uFF0C\u4E8B\u4E8B\u6709\u56DE\u5E94\uFF0C\u4EF6\u4EF6\u6709\u7740\u843D\uFF0C\u4E0D\u8981\u6C42\u4F60\u53CA\u65F6\u56DE\u590D\u5979\uFF0C\u53EA\u5E0C\u671B\u7684\u662F\u5979\u53D1\u4E86\u4FE1\u606F\u4E4B\u540E\uFF0C\u4F60\u5728\u5FD9\u5B8C\u81EA\u5DF1\u7684\u4E8B\u60C5\u4E4B\u540E\uFF0C\u544A\u8BC9\u4E86\u5979\uFF0C\u4F60\u53BB\u5E72\u4E86\u4EC0\u4E48\u4E8B\u60C5\uFF0C\u7136\u540E\u56DE\u590D\u5979\u90FD\u53EF\u4EE5\uFF0C\u8FD9\u5C31\u662F\u5979\u60F3\u8981\u7684\u5B89\u5168\u611F\u3002\r
  </xh-ellipsis>\r
</template>`,e.__sourceCodeTitle="\u5C55\u5F00\u65B9\u5F0F"}const Ct={},Uc=d(" \u5979\u60F3\u8981\u7684\u662F\uFF0C\u4E8B\u4E8B\u6709\u56DE\u5E94\uFF0C\u4EF6\u4EF6\u6709\u7740\u843D\uFF0C\u4E0D\u8981\u6C42\u4F60\u53CA\u65F6\u56DE\u590D\u5979\uFF0C\u53EA\u5E0C\u671B\u7684\u662F\u5979\u53D1\u4E86\u4FE1\u606F\u4E4B\u540E\uFF0C\u4F60\u5728\u5FD9\u5B8C\u81EA\u5DF1\u7684\u4E8B\u60C5\u4E4B\u540E\uFF0C\u544A\u8BC9\u4E86\u5979\uFF0C\u4F60\u53BB\u5E72\u4E86\u4EC0\u4E48\u4E8B\u60C5\uFF0C\u7136\u540E\u56DE\u590D\u5979\u90FD\u53EF\u4EE5\uFF0C\u8FD9\u5C31\u662F\u5979\u60F3\u8981\u7684\u5B89\u5168\u611F\u3002 ");function Mc(e,o){const n=f("xh-ellipsis");return a(),w(n,{"line-clamp":2,"expand-trigger":"click",width:700},{default:l(()=>[Uc]),_:1})}typeof Et=="function"&&Et(Ct);var Rc=D(Ct,[["render",Mc]]);const Oc={class:"ellipsis-doc-wrapper"},Hc=i("h1",null,"Ellipsis \u6587\u672C\u7701\u7565",-1),Nc=i("p",null,"\u6587\u672C\u8D85\u51FA\u8303\u56F4\u4E3A\u7701\u7565\u53F7",-1),Jc={class:"preview-wrapper"},Lc=v({setup(e){const o=[["expand-trigger","\u5C55\u5F00\u7684\u89E6\u53D1\u65B9\u5F0F","string","click","-"],["line-clamp","	\u6700\u5927\u884C\u6570","number / string","-","-"],["width","	\u6700\u5927\u5BBD\u5EA6","number","-","300"]],n=[["default","	\u6587\u672C\u7701\u7565\u7684\u5185\u5BB9"]];return(u,r)=>(a(),p("div",Oc,[Hc,Nc,i("div",Jc,[t(g,{component:Tc}),t(g,{component:Pc}),t(g,{component:Rc}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(O,{prev:{path:"/doc/divider",name:"Divider \u5206\u5272\u7EBF"},next:{path:"/doc/icon",name:"\u56FE\u6807 Icon"}})])]))}});function kt(e){e.__sourceCode=`<template>\r
  <div>\r
    <xh-gradient-text type="info"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    >\r
    <br /><br />\r
    <xh-gradient-text type="warning"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    ><br /><br />\r
    <xh-gradient-text type="error"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    ><br /><br />\r
    <xh-gradient-text type="success"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    ><br /><br />\r
  </div>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Ft={},Wc=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),qc=i("br",null,null,-1),Gc=i("br",null,null,-1),Kc=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),Yc=i("br",null,null,-1),Xc=i("br",null,null,-1),Qc=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),Zc=i("br",null,null,-1),ei=i("br",null,null,-1),ti=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),ni=i("br",null,null,-1),oi=i("br",null,null,-1);function ui(e,o){const n=f("xh-gradient-text");return a(),p("div",null,[t(n,{type:"info"},{default:l(()=>[Wc]),_:1}),qc,Gc,t(n,{type:"warning"},{default:l(()=>[Kc]),_:1}),Yc,Xc,t(n,{type:"error"},{default:l(()=>[Qc]),_:1}),Zc,ei,t(n,{type:"success"},{default:l(()=>[ti]),_:1}),ni,oi])}typeof kt=="function"&&kt(Ft);var ri=D(Ft,[["render",ui]]);function Dt(e){e.__sourceCode=`<template>\r
  <div>\r
    <xh-gradient-text type="info" size="26"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    >\r
    <br /><br />\r
    <xh-gradient-text type="warning" size="22"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    ><br /><br />\r
    <xh-gradient-text type="error" size="18"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    ><br /><br />\r
    <xh-gradient-text type="success" size="14"\r
      >\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F</xh-gradient-text\r
    ><br /><br />\r
  </div>\r
</template>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"}const At={},li=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),si=i("br",null,null,-1),ai=i("br",null,null,-1),ci=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),ii=i("br",null,null,-1),di=i("br",null,null,-1),_i=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),pi=i("br",null,null,-1),hi=i("br",null,null,-1),fi=d("\u5982\u679C\u5979\u662F\u5BF9\u7684\u4EBA\uFF0C\u54EA\u6015\u4E0D\u53CA\u65F6\u56DE\u590D\u6D88\u606F\uFF0C\u4F9D\u65E7\u5BF9\u5979\u5145\u6EE1\u5B89\u5168\u611F"),mi=i("br",null,null,-1),vi=i("br",null,null,-1);function bi(e,o){const n=f("xh-gradient-text");return a(),p("div",null,[t(n,{type:"info",size:"26"},{default:l(()=>[li]),_:1}),si,ai,t(n,{type:"warning",size:"22"},{default:l(()=>[ci]),_:1}),ii,di,t(n,{type:"error",size:"18"},{default:l(()=>[_i]),_:1}),pi,hi,t(n,{type:"success",size:"14"},{default:l(()=>[fi]),_:1}),mi,vi])}typeof Dt=="function"&&Dt(At);var gi=D(At,[["render",bi]]);function jt(e){e.__sourceCode=`<template>\r
  <div>\r
    <xh-gradient-text\r
      :gradient="{\r
        from: 'rgb(85, 85, 85)',\r
        to: 'rgb(170, 170, 170)',\r
      }"\r
      >\u5B9A\u5236\u989C\u82721</xh-gradient-text\r
    >\r
    <br /><br />\r
    <xh-gradient-text\r
      :gradient="{\r
        deg: 150,\r
        from: 'rgb(123, 222, 111)',\r
        to: 'rgb(10, 100, 200)',\r
      }"\r
      >\u5B9A\u5236\u989C\u82722</xh-gradient-text\r
    ><br /><br />\r
  </div>\r
</template>`,e.__sourceCodeTitle="\u5B9A\u5236"}const Vt={},xi=d("\u5B9A\u5236\u989C\u82721"),yi=i("br",null,null,-1),wi=i("br",null,null,-1),$i=d("\u5B9A\u5236\u989C\u82722"),Bi=i("br",null,null,-1),Ei=i("br",null,null,-1);function Ci(e,o){const n=f("xh-gradient-text");return a(),p("div",null,[t(n,{gradient:{from:"rgb(85, 85, 85)",to:"rgb(170, 170, 170)"}},{default:l(()=>[xi]),_:1},8,["gradient"]),yi,wi,t(n,{gradient:{deg:150,from:"rgb(123, 222, 111)",to:"rgb(10, 100, 200)"}},{default:l(()=>[$i]),_:1},8,["gradient"]),Bi,Ei])}typeof jt=="function"&&jt(Vt);var ki=D(Vt,[["render",Ci]]);const Fi={class:"gradient-text-doc-wrapper"},Di=i("h1",null,"GradientText \u6E10\u53D8\u6587\u5B57",-1),Ai=i("p",null,"\u81EA\u5B9A\u4E49\u6587\u5B57\u7684\u6E10\u53D8\u8272",-1),ji={class:"preview-wrapper"},Vi=v({setup(e){const o=[["gradient","\u6587\u5B57\u6E10\u53D8\u8272\u53C2\u6570","{ from: string, to: string, deg: number / string }","-","{}"],["size","\u6587\u5B57\u5927\u5C0F","number","-","16"],["type","\u6E10\u53D8\u6587\u5B57\u7684\u7C7B\u578B","string","primary / info / success / warning / error","primary"]],n=[["default","\u6E10\u53D8\u6587\u5B57\u5185\u5BB9"]];return(u,r)=>(a(),p("div",Fi,[Di,Ai,i("div",ji,[t(g,{component:ri}),t(g,{component:gi}),t(g,{component:ki}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(O,{prev:{path:"/doc/ellipsis",name:"Ellipsis \u6587\u672C\u7701\u7565"},next:{path:"/doc/Icon",name:"\u56FE\u6807 Icon"}})])]))}});function zt(e){e.__sourceCode=`<template>\r
  <xh-icon>\r
    <ApertureSharp />\r
  </xh-icon>\r
  <xh-icon>\r
    <ApertureSharp />\r
  </xh-icon>\r
  <xh-icon>\r
    <ApertureSharp />\r
  </xh-icon>\r
  <xh-icon>\r
    <ApertureSharp />\r
  </xh-icon>\r
  <xh-icon>\r
    <ApertureSharp />\r
  </xh-icon>\r
  <xh-icon>\r
    <ApertureSharp />\r
  </xh-icon>\r
</template>\r
\r
<script setup lang="ts">\r
import { ApertureSharp } from "@vicons/ionicons5";\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Tt=v({setup(e){return(o,n)=>{const u=f("xh-icon");return a(),p(E,null,[t(u,null,{default:l(()=>[t(_(ue))]),_:1}),t(u,null,{default:l(()=>[t(_(ue))]),_:1}),t(u,null,{default:l(()=>[t(_(ue))]),_:1}),t(u,null,{default:l(()=>[t(_(ue))]),_:1}),t(u,null,{default:l(()=>[t(_(ue))]),_:1}),t(u,null,{default:l(()=>[t(_(ue))]),_:1})],64)}}});typeof zt=="function"&&zt(Tt);function St(e){e.__sourceCode=`<template>\r
  <xh-icon>\r
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">\r
      <path\r
        d="M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"\r
      />\r
    </svg>\r
  </xh-icon>\r
</template>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u56FE\u6807"}const It={},zi=i("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},[i("path",{d:"M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})],-1);function Ti(e,o){const n=f("xh-icon");return a(),w(n,null,{default:l(()=>[zi]),_:1})}typeof St=="function"&&St(It);var Si=D(It,[["render",Ti]]);function Pt(e){e.__sourceCode=`<template>\r
  <xh-icon :depth="1" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="2" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="3" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="4" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="5" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="6" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="7" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="8" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="9" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
  <xh-icon :depth="10" color="#e64e65">\r
    <Heart />\r
  </xh-icon>\r
</template>\r
<script setup lang="ts">\r
import { Heart } from "@vicons/ionicons5";\r
<\/script>`,e.__sourceCodeTitle="\u6DF1\u5EA6"}const Ut=v({setup(e){return(o,n)=>{const u=f("xh-icon");return a(),p(E,null,[t(u,{depth:1,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:2,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:3,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:4,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:5,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:6,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:7,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:8,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:9,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1}),t(u,{depth:10,color:"#e64e65"},{default:l(()=>[t(_(X))]),_:1})],64)}}});typeof Pt=="function"&&Pt(Ut);const Ii={class:"icon-doc-wrapper"},Pi=i("h1",null,"Icon \u56FE\u6807",-1),Ui=i("p",null,[d(" xh-UI \u63A8\u8350\u4F7F\u7528 "),i("a",{style:{"text-decoration":"underline",color:"#4098fc"},href:"https://www.xicons.org/#/",target:"_blank"},"xicons"),d(" \u4F5C\u4E3A\u56FE\u6807\u5E93\u3002 ")],-1),Mi={class:"preview-wrapper"},Ri=v({setup(e){const o=[["color","\u56FE\u6807\u989C\u8272","string","-","-"],["depth","\u56FE\u6807\u6DF1\u5EA6","number","-","10"],["size","\u56FE\u6807\u5927\u5C0F\uFF08\u5F53\u4E0D\u6307\u5B9A\u5355\u4F4D\u65F6\uFF0C\u9ED8\u8BA4\u5355\u4F4D: px\uFF09","number / string","-","40px"]],n=[["defalut","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(u,r)=>(a(),p("div",Ii,[Pi,Ui,i("div",Mi,[t(g,{component:Tt}),t(g,{component:Si}),t(g,{component:Ut}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(O,{prev:{path:"/doc/gradient-text",name:"\u6E10\u53D8\u6587\u5B57 GradientText"},next:{path:"/doc/link",name:"\u94FE\u63A5 Link"}})])]))}});function Mt(e){e.__sourceCode=`<template>\r
  <xh-link href="#" target="_blank">\u9ED8\u8BA4\u94FE\u63A5</xh-link>\r
  <xh-link type="primary">\u4E3B\u8981\u94FE\u63A5</xh-link>\r
  <xh-link type="info">\u4FE1\u606F\u94FE\u63A5</xh-link>\r
  <xh-link type="success">\u6210\u529F\u94FE\u63A5</xh-link>\r
  <xh-link type="warning">\u8B66\u544A\u94FE\u63A5</xh-link>\r
  <xh-link type="error">\u9519\u8BEF\u94FE\u63A5</xh-link>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840"}const Rt={},Oi=d("\u9ED8\u8BA4\u94FE\u63A5"),Hi=d("\u4E3B\u8981\u94FE\u63A5"),Ni=d("\u4FE1\u606F\u94FE\u63A5"),Ji=d("\u6210\u529F\u94FE\u63A5"),Li=d("\u8B66\u544A\u94FE\u63A5"),Wi=d("\u9519\u8BEF\u94FE\u63A5");function qi(e,o){const n=f("xh-link");return a(),p(E,null,[t(n,{href:"#",target:"_blank"},{default:l(()=>[Oi]),_:1}),t(n,{type:"primary"},{default:l(()=>[Hi]),_:1}),t(n,{type:"info"},{default:l(()=>[Ni]),_:1}),t(n,{type:"success"},{default:l(()=>[Ji]),_:1}),t(n,{type:"warning"},{default:l(()=>[Li]),_:1}),t(n,{type:"error"},{default:l(()=>[Wi]),_:1})],64)}typeof Mt=="function"&&Mt(Rt);var Gi=D(Rt,[["render",qi]]);function Ot(e){e.__sourceCode=`<template>\r
  <xh-link disabled>\u9ED8\u8BA4\u94FE\u63A5</xh-link>\r
  <xh-link type="primary" disabled>\u4E3B\u8981\u94FE\u63A5</xh-link>\r
  <xh-link type="info" disabled>\u4FE1\u606F\u94FE\u63A5</xh-link>\r
  <xh-link type="success" disabled>\u6210\u529F\u94FE\u63A5</xh-link>\r
  <xh-link type="warning" disabled>\u8B66\u544A\u94FE\u63A5</xh-link>\r
  <xh-link type="error" disabled>\u9519\u8BEF\u94FE\u63A5</xh-link>\r
</template>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const Ht={},Ki=d("\u9ED8\u8BA4\u94FE\u63A5"),Yi=d("\u4E3B\u8981\u94FE\u63A5"),Xi=d("\u4FE1\u606F\u94FE\u63A5"),Qi=d("\u6210\u529F\u94FE\u63A5"),Zi=d("\u8B66\u544A\u94FE\u63A5"),ed=d("\u9519\u8BEF\u94FE\u63A5");function td(e,o){const n=f("xh-link");return a(),p(E,null,[t(n,{disabled:""},{default:l(()=>[Ki]),_:1}),t(n,{type:"primary",disabled:""},{default:l(()=>[Yi]),_:1}),t(n,{type:"info",disabled:""},{default:l(()=>[Xi]),_:1}),t(n,{type:"success",disabled:""},{default:l(()=>[Qi]),_:1}),t(n,{type:"warning",disabled:""},{default:l(()=>[Zi]),_:1}),t(n,{type:"error",disabled:""},{default:l(()=>[ed]),_:1})],64)}typeof Ot=="function"&&Ot(Ht);var nd=D(Ht,[["render",td]]);function Nt(e){e.__sourceCode=`<template>\r
  <xh-link :underline="false">\u9ED8\u8BA4\u94FE\u63A5</xh-link>\r
  <xh-link>\u9ED8\u8BA4\u94FE\u63A5</xh-link>\r
</template>`,e.__sourceCodeTitle="\u4E0B\u5212\u7EBF"}const Jt={},od=d("\u9ED8\u8BA4\u94FE\u63A5"),ud=d("\u9ED8\u8BA4\u94FE\u63A5");function rd(e,o){const n=f("xh-link");return a(),p(E,null,[t(n,{underline:!1},{default:l(()=>[od]),_:1}),t(n,null,{default:l(()=>[ud]),_:1})],64)}typeof Nt=="function"&&Nt(Jt);var ld=D(Jt,[["render",rd]]);function Lt(e){e.__sourceCode=`<template>\r
  <xh-link :icon="EditTwotone"> Edit </xh-link>\r
  <xh-link :icon="CheckSquareOutlined" icon-placement="right"> Check </xh-link>\r
</template>\r
<script setup lang="ts">\r
import { EditTwotone, CheckSquareOutlined } from "@vicons/antd";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u6807"}const sd=d(" Edit "),ad=d(" Check "),Wt=v({setup(e){return(o,n)=>{const u=f("xh-link");return a(),p(E,null,[t(u,{icon:_(ku)},{default:l(()=>[sd]),_:1},8,["icon"]),t(u,{icon:_(Fu),"icon-placement":"right"},{default:l(()=>[ad]),_:1},8,["icon"])],64)}}});typeof Lt=="function"&&Lt(Wt);const cd={class:"link-doc-wrapper"},id=i("h1",null,"Link \u94FE\u63A5",-1),dd=i("p",null,"\u6587\u5B57\u8D85\u94FE\u63A5",-1),_d={class:"preview-wrapper"},pd=v({setup(e){const o=[["type","\u7C7B\u578B","string","primary / success / warning / danger / info","default"],["underline","\u662F\u5426\u4E0B\u5212\u7EBF","boolean","-","true"],["disabled","\u662F\u5426\u7981\u7528\u72B6\u6001","boolean","-","false"],["href","\u539F\u751F href \u5C5E\u6027","string","-","-"],["icon","\u56FE\u6807\u7EC4\u4EF6","string / Component","-","-"],["icon-placement","\u56FE\u6807\u7EC4\u4EF6\u4F4D\u7F6E","string","left / right","left"],["icon-size","\u56FE\u6807\u7EC4\u4EF6\u5927\u5C0F","string / number","-","18px"]],n=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(u,r)=>(a(),p("div",cd,[id,dd,i("div",_d,[t(g,{component:Gi}),t(g,{component:nd}),t(g,{component:ld}),t(g,{component:Wt}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(O,{prev:{path:"/doc/icon",name:"Icon \u56FE\u6807"},next:{path:"/doc/tag",name:"\u6807\u7B7E Tag"}})])]))}});function qt(e){e.__sourceCode=`<template>\r
  <xh-tag>\u6807\u7B7E1</xh-tag>\r
  <xh-tag type="primary">\u6807\u7B7E2</xh-tag>\r
  <xh-tag type="info">\u6807\u7B7E3</xh-tag>\r
  <xh-tag type="success">\u6807\u7B7E4</xh-tag>\r
  <xh-tag type="warning">\u6807\u7B7E5</xh-tag>\r
  <xh-tag type="error">\u6807\u7B7E6</xh-tag>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Gt={},hd=d("\u6807\u7B7E1"),fd=d("\u6807\u7B7E2"),md=d("\u6807\u7B7E3"),vd=d("\u6807\u7B7E4"),bd=d("\u6807\u7B7E5"),gd=d("\u6807\u7B7E6");function xd(e,o){const n=f("xh-tag");return a(),p(E,null,[t(n,null,{default:l(()=>[hd]),_:1}),t(n,{type:"primary"},{default:l(()=>[fd]),_:1}),t(n,{type:"info"},{default:l(()=>[md]),_:1}),t(n,{type:"success"},{default:l(()=>[vd]),_:1}),t(n,{type:"warning"},{default:l(()=>[bd]),_:1}),t(n,{type:"error"},{default:l(()=>[gd]),_:1})],64)}typeof qt=="function"&&qt(Gt);var yd=D(Gt,[["render",xd]]);function Kt(e){e.__sourceCode=`<template>\r
  <xh-tag type="primary" size="small">\u6807\u7B7E1</xh-tag>\r
  <xh-tag type="primary" size="medium">\u6807\u7B7E2</xh-tag>\r
  <xh-tag type="primary" size="large">\u6807\u7B7E3</xh-tag>\r
</template>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"}const Yt={},wd=d("\u6807\u7B7E1"),$d=d("\u6807\u7B7E2"),Bd=d("\u6807\u7B7E3");function Ed(e,o){const n=f("xh-tag");return a(),p(E,null,[t(n,{type:"primary",size:"small"},{default:l(()=>[wd]),_:1}),t(n,{type:"primary",size:"medium"},{default:l(()=>[$d]),_:1}),t(n,{type:"primary",size:"large"},{default:l(()=>[Bd]),_:1})],64)}typeof Kt=="function"&&Kt(Yt);var Cd=D(Yt,[["render",Ed]]);function Xt(e){e.__sourceCode=`<template>\r
  <xh-tag closeable>\u6807\u7B7E1</xh-tag>\r
  <xh-tag type="primary" closeable>\u6807\u7B7E2</xh-tag>\r
  <xh-tag type="info" closeable>\u6807\u7B7E3</xh-tag>\r
  <xh-tag type="success" closeable>\u6807\u7B7E4</xh-tag>\r
  <xh-tag type="warning" closeable>\u6807\u7B7E5</xh-tag>\r
  <xh-tag type="error" closeable>\u6807\u7B7E6</xh-tag>\r
</template>\r
<script setup lang="ts"><\/script>`,e.__sourceCodeTitle="\u53EF\u5173\u95ED"}const Qt={},kd=d("\u6807\u7B7E1"),Fd=d("\u6807\u7B7E2"),Dd=d("\u6807\u7B7E3"),Ad=d("\u6807\u7B7E4"),jd=d("\u6807\u7B7E5"),Vd=d("\u6807\u7B7E6");function zd(e,o){const n=f("xh-tag");return a(),p(E,null,[t(n,{closeable:""},{default:l(()=>[kd]),_:1}),t(n,{type:"primary",closeable:""},{default:l(()=>[Fd]),_:1}),t(n,{type:"info",closeable:""},{default:l(()=>[Dd]),_:1}),t(n,{type:"success",closeable:""},{default:l(()=>[Ad]),_:1}),t(n,{type:"warning",closeable:""},{default:l(()=>[jd]),_:1}),t(n,{type:"error",closeable:""},{default:l(()=>[Vd]),_:1})],64)}typeof Xt=="function"&&Xt(Qt);var Td=D(Qt,[["render",zd]]);function Zt(e){e.__sourceCode=`<template>\r
  <xh-tag\r
    color="#2082f0"\r
    backgroundColor="rgba(32, 130, 240, 0.1)"\r
    borderColor="#acd0f9"\r
    >\u4E00\u6BB5\u6210\u719F\u7684\u5173\u7CFB\r
  </xh-tag>\r
</template>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u989C\u8272"}const en={},Sd=d("\u4E00\u6BB5\u6210\u719F\u7684\u5173\u7CFB ");function Id(e,o){const n=f("xh-tag");return a(),w(n,{color:"#2082f0",backgroundColor:"rgba(32, 130, 240, 0.1)",borderColor:"#acd0f9"},{default:l(()=>[Sd]),_:1})}typeof Zt=="function"&&Zt(en);var Pd=D(en,[["render",Id]]);function tn(e){e.__sourceCode=`<template>\r
  <xh-tag\r
    v-for="tag in dynamicTags"\r
    :key="tag"\r
    closeable\r
    type="primary"\r
    @close="handleClose(tag)"\r
  >\r
    {{ tag }}\r
  </xh-tag>\r
  <jw-input\r
    v-if="inputVisible"\r
    :ref="(e) => (InputRef = e)"\r
    v-model="inputValue"\r
    @keyup.enter="handleInputConfirm"\r
    @blur="handleInputConfirm"\r
    size="small"\r
    style="width: 180px"\r
  />\r
  <xh-button v-else size="small" @click="showInput"> + New Tag </xh-button>\r
</template>\r
<script setup lang="ts">\r
import { ref, nextTick, onMounted } from "vue";\r
const dynamicTags = ref(["Tag 1", "Tag 2", "Tag 3"]);\r
const inputVisible = ref(false);\r
const inputValue = ref("");\r
const InputRef = ref();\r
const handleClose = (tag: string) => {\r
  dynamicTags.value.splice(dynamicTags.value.indexOf(tag), 1);\r
};\r
\r
const showInput = () => {\r
  inputVisible.value = true;\r
  nextTick(() => {\r
    console.log(InputRef.value!.focus());\r
  });\r
};\r
\r
const handleInputConfirm = () => {\r
  if (inputValue.value) {\r
    dynamicTags.value.push(inputValue.value);\r
  }\r
  inputVisible.value = false;\r
  inputValue.value = "";\r
};\r
<\/script>`,e.__sourceCodeTitle="\u52A8\u6001\u7F16\u8F91\u6807\u7B7E"}const Ud=d(" + New Tag "),nn=v({setup(e){const o=y(["Tag 1","Tag 2","Tag 3"]),n=y(!1),u=y(""),r=y(),s=h=>{o.value.splice(o.value.indexOf(h),1)},c=()=>{n.value=!0,pe(()=>{console.log(r.value.focus())})},m=()=>{u.value&&o.value.push(u.value),n.value=!1,u.value=""};return(h,B)=>{const b=f("xh-tag"),x=f("jw-input"),$=f("xh-button");return a(),p(E,null,[(a(!0),p(E,null,Y(o.value,A=>(a(),w(b,{key:A,closeable:"",type:"primary",onClose:S=>s(A)},{default:l(()=>[d(P(A),1)]),_:2},1032,["onClose"]))),128)),n.value?(a(),w(x,{key:0,ref:A=>r.value=A,modelValue:u.value,"onUpdate:modelValue":B[0]||(B[0]=A=>u.value=A),onKeyup:Du(m,["enter"]),onBlur:m,size:"small",style:{width:"180px"}},null,8,["modelValue","onKeyup"])):(a(),w($,{key:1,size:"small",onClick:c},{default:l(()=>[Ud]),_:1}))],64)}}});typeof tn=="function"&&tn(nn);function on(e){e.__sourceCode=`<template>\r
  <div class="tag-group">\r
    <span class="tag-group__title">Dark</span>\r
    <xh-tag\r
      v-for="tag in dynamicTags"\r
      :key="tag"\r
      :type="tag.type"\r
      effect="Dark"\r
    >\r
      {{ tag.value }}\r
    </xh-tag>\r
  </div>\r
  <div class="tag-group">\r
    <span class="tag-group__title">Plain</span>\r
    <xh-tag\r
      v-for="tag in dynamicTags"\r
      :key="tag"\r
      :type="tag.type"\r
      effect="Plain"\r
    >\r
      {{ tag.value }}\r
    </xh-tag>\r
  </div>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const dynamicTags = ref([\r
  {\r
    type: "primary",\r
    value: "\u6807\u7B7E1",\r
  },\r
  {\r
    type: "info",\r
    value: "\u6807\u7B7E1",\r
  },\r
  {\r
    type: "success",\r
    value: "\u6807\u7B7E1",\r
  },\r
  {\r
    type: "warning",\r
    value: "\u6807\u7B7E1",\r
  },\r
  {\r
    type: "error",\r
    value: "\u6807\u7B7E1",\r
  },\r
]);\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u4E3B\u9898"}const Md={class:"tag-group"},Rd=i("span",{class:"tag-group__title"},"Dark",-1),Od={class:"tag-group"},Hd=i("span",{class:"tag-group__title"},"Plain",-1),un=v({setup(e){const o=y([{type:"primary",value:"\u6807\u7B7E1"},{type:"info",value:"\u6807\u7B7E1"},{type:"success",value:"\u6807\u7B7E1"},{type:"warning",value:"\u6807\u7B7E1"},{type:"error",value:"\u6807\u7B7E1"}]);return(n,u)=>{const r=f("xh-tag");return a(),p(E,null,[i("div",Md,[Rd,(a(!0),p(E,null,Y(o.value,s=>(a(),w(r,{key:s,type:s.type,effect:"Dark"},{default:l(()=>[d(P(s.value),1)]),_:2},1032,["type"]))),128))]),i("div",Od,[Hd,(a(!0),p(E,null,Y(o.value,s=>(a(),w(r,{key:s,type:s.type,effect:"Plain"},{default:l(()=>[d(P(s.value),1)]),_:2},1032,["type"]))),128))])],64)}}});typeof on=="function"&&on(un);const Nd={class:"tag-doc-wrapper"},Jd=i("h1",null,"Tag \u6807\u7B7E",-1),Ld=i("p",null,"\u7528\u4E8E\u6807\u8BB0\u548C\u9009\u62E9\u3002",-1),Wd={class:"preview-wrapper"},qd=v({setup(e){const o=[["closable","\u662F\u5426\u53EF\u5173\u95ED","boolean","-","false"],["color","	\u5B57\u4F53\u989C\u8272","string","-","-"],["backgroundColor","	\u80CC\u666F\u989C\u8272","-","-","-"],["borderColor","	\u8FB9\u6846\u989C\u8272","-","-","-"],["hit","\u8FB9\u6846\u63CF\u8FB9","boolean","-","true "],["size","\u6807\u7B7E\u5927\u5C0F","string","	small/ medium / large","medium "],["type","\u7C7B\u578B","string","default / primary / info / success / warning / error","default"],["effect","\u4E3B\u9898","string","	Dark/ Plain","Dark "]],n=[["default","	\u6807\u7B7E\u5185\u5BB9","-"]];return(u,r)=>(a(),p("div",Nd,[Jd,Ld,i("div",Wd,[t(g,{component:yd}),t(g,{component:Cd}),t(g,{component:Td}),t(g,{component:Pd}),t(g,{component:nn}),t(g,{component:un}),t(k,{title:"Tag \u5C5E\u6027",type:"prop",body:o}),t(k,{title:"Tag \u63D2\u69FD",type:"slot",body:n}),t(O,{prev:{path:"/doc/link",name:"\u94FE\u63A5 Link"},next:{path:"/doc/colorPicker",name:"Color Picker \u9009\u62E9\u5668"}})])]))}});function rn(e){e.__sourceCode=`<template>\r
  <xh-color-picker color="rgb(64, 158, 255)" />\r
</template> \r
<script setup lanng="ts">\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const ln={};function Gd(e,o){const n=f("xh-color-picker");return a(),w(n,{color:"rgb(64, 158, 255)"})}typeof rn=="function"&&rn(ln);var Kd=D(ln,[["render",Gd]]);function sn(e){e.__sourceCode=`<template>\r
  <xh-color-picker color="rgb(64, 158, 255)" size="small" />\r
  <xh-color-picker color="rgb(64, 158, 255)" size="default" />\r
  <xh-color-picker color="rgb(64, 158, 255)" size="large" />\r
</template> \r
<script setup lanng="ts">\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"}const an={};function Yd(e,o){const n=f("xh-color-picker");return a(),p(E,null,[t(n,{color:"rgb(64, 158, 255)",size:"small"}),t(n,{color:"rgb(64, 158, 255)",size:"default"}),t(n,{color:"rgb(64, 158, 255)",size:"large"})],64)}typeof sn=="function"&&sn(an);var Xd=D(an,[["render",Yd]]);function cn(e){e.__sourceCode=`<template>\r
  <xh-color-picker color="rgb(64, 158, 255)" show-alpha />\r
</template> \r
<script setup lanng="ts">\r
<\/script>`,e.__sourceCodeTitle="\u9009\u62E9\u900F\u660E\u5EA6"}const dn={};function Qd(e,o){const n=f("xh-color-picker");return a(),w(n,{color:"rgb(64, 158, 255)","show-alpha":""})}typeof cn=="function"&&cn(dn);var Zd=D(dn,[["render",Qd]]);function _n(e){e.__sourceCode=`<template>\r
  <xh-color-picker\r
    color="rgb(64, 158, 255)"\r
    :predefineColors="predefineColors"\r
  />\r
</template> \r
<script setup lanng="ts">\r
import { ref } from "vue";\r
\r
const predefineColors = ref([\r
  "#ff4500",\r
  "#ff8c00",\r
  "#ffd700",\r
  "#90ee90",\r
  "#00ced1",\r
  "#1e90ff",\r
  "#c71585",\r
  "rgba(255, 69, 0, 0.68)",\r
  "rgb(255, 120, 0)",\r
  "#c7158577",\r
]);\r
<\/script>`,e.__sourceCodeTitle="\u9884\u5B9A\u4E49\u989C\u8272"}const pn={setup(e){const o=y(["#ff4500","#ff8c00","#ffd700","#90ee90","#00ced1","#1e90ff","#c71585","rgba(255, 69, 0, 0.68)","rgb(255, 120, 0)","#c7158577"]);return(n,u)=>{const r=f("xh-color-picker");return a(),w(r,{color:"rgb(64, 158, 255)",predefineColors:o.value},null,8,["predefineColors"])}}};typeof _n=="function"&&_n(pn);const e_={class:"icon-doc-wrapper"},t_=i("h1",null,"ColorPicker \u9009\u62E9\u5668",-1),n_=i("p",null,"\u7528\u4E8E\u989C\u8272\u9009\u62E9",-1),o_={class:"preview-wrapper"},u_=v({setup(e){const o=[["color","\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C","string","-","-"],["size","\u5C3A\u5BF8","string","large / default / small","default"],["disabled","\u662F\u5426\u7981\u7528","boolean","true / false","false"],["showAlpha","\u662F\u5426\u652F\u6301\u900F\u660E\u5EA6\u9009\u62E9","boolean","true / false","false"],["predefineColors","	\u9884\u5B9A\u4E49\u989C\u8272","object","-","-"]],n=[["change","	\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1","(): Event => {}"],,];return(u,r)=>(a(),p("div",e_,[t_,n_,i("div",o_,[t(g,{component:Kd}),t(g,{component:Xd}),t(g,{component:Zd}),t(g,{component:pn}),t(k,{title:"ColorPicker \u5C5E\u6027",type:"prop",body:o}),t(k,{title:"ColorPicker \u4E8B\u4EF6",type:"event",body:n}),t(O,{prev:{path:"/doc/tag",name:"Tag \u6807\u7B7E"},next:{path:"/doc/checkbox",name:"Checkbox \u590D\u9009\u6846"}})])]))}});function hn(e){e.__sourceCode=`<template>\r
  <div style="width: 100%">\r
    <xh-checkbox v-model="checkbox1" label="\u9009\u9879A" size="large" />\r
    <xh-checkbox v-model="checkbox2" label="\u9009\u9879B" size="large" />\r
  </div>\r
  <div style="width: 100%">\r
    <xh-checkbox v-model="checkbox3" label="\u9009\u9879A" />\r
    <xh-checkbox v-model="checkbox4" label="\u9009\u9879B" />\r
  </div>\r
  <div style="width: 100%">\r
    <xh-checkbox v-model="checkbox5" label="\u9009\u9879A" size="small" />\r
    <xh-checkbox v-model="checkbox6" label="\u9009\u9879B" size="small" />\r
  </div>\r
  <div style="width: 100%">\r
    <xh-checkbox v-model="checkbox7" label="\u9009\u9879A" size="small" disabled />\r
    <xh-checkbox v-model="checkbox8" label="\u9009\u9879B" size="small" disabled />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const checkbox3 = ref(false);\r
const checkbox4 = ref(false);\r
const checkbox5 = ref(false);\r
const checkbox6 = ref(false);\r
const checkbox7 = ref(false);\r
const checkbox8 = ref(false);\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"}const r_={style:{width:"100%"}},l_={style:{width:"100%"}},s_={style:{width:"100%"}},a_={style:{width:"100%"}},fn=v({setup(e){const o=y(!1),n=y(!1),u=y(!1),r=y(!1),s=y(!1),c=y(!1),m=y(!1),h=y(!1);return(B,b)=>{const x=f("xh-checkbox");return a(),p(E,null,[i("div",r_,[t(x,{modelValue:o.value,"onUpdate:modelValue":b[0]||(b[0]=$=>o.value=$),label:"\u9009\u9879A",size:"large"},null,8,["modelValue"]),t(x,{modelValue:n.value,"onUpdate:modelValue":b[1]||(b[1]=$=>n.value=$),label:"\u9009\u9879B",size:"large"},null,8,["modelValue"])]),i("div",l_,[t(x,{modelValue:u.value,"onUpdate:modelValue":b[2]||(b[2]=$=>u.value=$),label:"\u9009\u9879A"},null,8,["modelValue"]),t(x,{modelValue:r.value,"onUpdate:modelValue":b[3]||(b[3]=$=>r.value=$),label:"\u9009\u9879B"},null,8,["modelValue"])]),i("div",s_,[t(x,{modelValue:s.value,"onUpdate:modelValue":b[4]||(b[4]=$=>s.value=$),label:"\u9009\u9879A",size:"small"},null,8,["modelValue"]),t(x,{modelValue:c.value,"onUpdate:modelValue":b[5]||(b[5]=$=>c.value=$),label:"\u9009\u9879B",size:"small"},null,8,["modelValue"])]),i("div",a_,[t(x,{modelValue:m.value,"onUpdate:modelValue":b[6]||(b[6]=$=>m.value=$),label:"\u9009\u9879A",size:"small",disabled:""},null,8,["modelValue"]),t(x,{modelValue:h.value,"onUpdate:modelValue":b[7]||(b[7]=$=>h.value=$),label:"\u9009\u9879B",size:"small",disabled:""},null,8,["modelValue"])])],64)}}});typeof hn=="function"&&hn(fn);function mn(e){e.__sourceCode=`<template>\r
  <div style="width: 100%; display: flex; align-items: center">\r
    <xh-checkbox v-model="checkbox1" label="\u9009\u9879A" size="large" />\r
    <xh-checkbox\r
      v-model="checkbox2"\r
      label="\u9009\u9879B"\r
      size="large"\r
      :disabled="disabled"\r
    />\r
    <jw-switch v-model="disabled" />\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const disabled = ref(true);\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const c_={style:{width:"100%",display:"flex","align-items":"center"}},vn=v({setup(e){const o=y(!1),n=y(!1),u=y(!0);return(r,s)=>{const c=f("xh-checkbox"),m=f("jw-switch");return a(),p("div",c_,[t(c,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=h=>o.value=h),label:"\u9009\u9879A",size:"large"},null,8,["modelValue"]),t(c,{modelValue:n.value,"onUpdate:modelValue":s[1]||(s[1]=h=>n.value=h),label:"\u9009\u9879B",size:"large",disabled:u.value},null,8,["modelValue","disabled"]),t(m,{modelValue:u.value,"onUpdate:modelValue":s[2]||(s[2]=h=>u.value=h)},null,8,["modelValue"])])}}});typeof mn=="function"&&mn(vn);function bn(e){e.__sourceCode=`<template>\r
  <xh-checkbox-group v-model="checkList" size="large">\r
    <xh-checkbox label="\u9009\u9879A" />\r
    <xh-checkbox label="\u9009\u9879B" />\r
    <xh-checkbox label="\u9009\u9879C" />\r
  </xh-checkbox-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkList = ref(["\u9009\u9879A"]);\r
<\/script>`,e.__sourceCodeTitle="\u591A\u9009\u6846\u7EC4"}const gn=v({setup(e){const o=y(["\u9009\u9879A"]);return(n,u)=>{const r=f("xh-checkbox"),s=f("xh-checkbox-group");return a(),w(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),size:"large"},{default:l(()=>[t(r,{label:"\u9009\u9879A"}),t(r,{label:"\u9009\u9879B"}),t(r,{label:"\u9009\u9879C"})]),_:1},8,["modelValue"])}}});typeof bn=="function"&&bn(gn);function xn(e){e.__sourceCode=`<template>\r
  <xh-checkbox\r
    v-model="checkAll"\r
    :indeterminate="isIndeterminate"\r
    @change="handleCheckAllChange"\r
    label="\u5168\u9009"\r
  />\r
  <xh-checkbox-group\r
    @change="handleCheckedCitiesChange"\r
    v-model="checkedCities"\r
    size="large"\r
  >\r
    <xh-checkbox v-for="city in cities" :key="city" :label="city" />\r
  </xh-checkbox-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkAll = ref(false);\r
const isIndeterminate = ref(true);\r
\r
const checkedCities = ref(["\u957F\u5B89", "\u6D1B\u9633"]);\r
const cities = ["\u957F\u5B89", "\u6D1B\u9633", "\u5357\u4EAC", "\u5317\u4EAC"];\r
\r
const handleCheckAllChange = (val: boolean) => {\r
  checkedCities.value = val ? [...cities] : [];\r
  isIndeterminate.value = false;\r
};\r
\r
const handleCheckedCitiesChange = (value: string[]) => {\r
  const checkedCount = value.length;\r
  checkAll.value = checkedCount === cities.length;\r
  isIndeterminate.value = checkedCount > 0 && cities.length > checkedCount;\r
};\r
<\/script>`,e.__sourceCodeTitle="\u4E2D\u95F4\u72B6\u6001"}const yn=v({setup(e){const o=y(!1),n=y(!0),u=y(["\u957F\u5B89","\u6D1B\u9633"]),r=["\u957F\u5B89","\u6D1B\u9633","\u5357\u4EAC","\u5317\u4EAC"],s=m=>{u.value=m?[...r]:[],n.value=!1},c=m=>{const h=m.length;o.value=h===r.length,n.value=h>0&&r.length>h};return(m,h)=>{const B=f("xh-checkbox"),b=f("xh-checkbox-group");return a(),p(E,null,[t(B,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=x=>o.value=x),indeterminate:n.value,onChange:s,label:"\u5168\u9009"},null,8,["modelValue","indeterminate"]),t(b,{onChange:c,modelValue:u.value,"onUpdate:modelValue":h[1]||(h[1]=x=>u.value=x),size:"large"},{default:l(()=>[(a(),p(E,null,Y(r,x=>t(B,{key:x,label:x},null,8,["label"])),64))]),_:1},8,["modelValue"])],64)}}});typeof xn=="function"&&xn(yn);function wn(e){e.__sourceCode=`<template>\r
  <xh-checkbox v-model="checkbox1" label="\u9009\u9879 A" size="small" border />\r
  <xh-checkbox v-model="checkbox2" label="\u9009\u9879 B" border />\r
  <xh-checkbox v-model="checkbox3" label="\u9009\u9879 C" size="large" border />\r
  <xh-checkbox v-model="checkbox4" label="\u9009\u9879 D" size="small" border />\r
  <xh-checkbox v-model="checkbox5" label="\u9009\u9879 E" border />\r
  <xh-checkbox v-model="checkbox6" label="\u9009\u9879 F" size="large" border />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const checkbox1 = ref(false);\r
const checkbox2 = ref(false);\r
const checkbox3 = ref(false);\r
const checkbox4 = ref(false);\r
const checkbox5 = ref(false);\r
const checkbox6 = ref(false);\r
<\/script>`,e.__sourceCodeTitle="\u5E26\u6709\u8FB9\u6846"}const $n=v({setup(e){const o=y(!1),n=y(!1),u=y(!1),r=y(!1),s=y(!1),c=y(!1);return(m,h)=>{const B=f("xh-checkbox");return a(),p(E,null,[t(B,{modelValue:o.value,"onUpdate:modelValue":h[0]||(h[0]=b=>o.value=b),label:"\u9009\u9879 A",size:"small",border:""},null,8,["modelValue"]),t(B,{modelValue:n.value,"onUpdate:modelValue":h[1]||(h[1]=b=>n.value=b),label:"\u9009\u9879 B",border:""},null,8,["modelValue"]),t(B,{modelValue:u.value,"onUpdate:modelValue":h[2]||(h[2]=b=>u.value=b),label:"\u9009\u9879 C",size:"large",border:""},null,8,["modelValue"]),t(B,{modelValue:r.value,"onUpdate:modelValue":h[3]||(h[3]=b=>r.value=b),label:"\u9009\u9879 D",size:"small",border:""},null,8,["modelValue"]),t(B,{modelValue:s.value,"onUpdate:modelValue":h[4]||(h[4]=b=>s.value=b),label:"\u9009\u9879 E",border:""},null,8,["modelValue"]),t(B,{modelValue:c.value,"onUpdate:modelValue":h[5]||(h[5]=b=>c.value=b),label:"\u9009\u9879 F",size:"large",border:""},null,8,["modelValue"])],64)}}});typeof wn=="function"&&wn($n);const i_={class:"checkbox-doc-wrapper"},d_=i("h1",null,"Checkbox \u5355\u9009\u6846",-1),__=i("p",null,"\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u591A\u9009",-1),p_={class:"preview-wrapper"},h_=v({setup(e){const o=[["v-model","\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C","string / number / boolean","-","-"],["label","\u5355\u9009\u6846\u5BF9\u5E94\u7684\u503C","string / number / boolean","-","-"],["disabled","\u662F\u5426\u7981\u7528\u5355\u9009\u6846","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","	Checkbox \u7684\u4E0D\u540C\u5C3A\u5BF8","string","large / default /small","-"]],n=[["change","\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","\u9009\u4E2D\u7684 Checkbox label \u503C"],,],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]],r=[["v-model","\u7ED1\u5B9A\u503C","array","-","[]"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","\u591A\u9009\u6846\u7EC4\u4E0D\u540C\u5C3A\u5BF8","string","large / default /small","-"]],s=[["change","\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","value"],,],c=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9","Checkbox"]];return(m,h)=>(a(),p("div",i_,[d_,__,i("div",p_,[t(g,{component:fn}),t(g,{component:vn}),t(g,{component:gn}),t(g,{component:yn}),t(g,{component:$n}),t(k,{title:"Checkbox \u5C5E\u6027",type:"prop",body:o}),t(k,{title:"Checkbox \u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"Checkbox \u63D2\u69FD",type:"slot",body:u}),t(k,{title:"Checkbox-group \u5C5E\u6027",type:"prop",body:r}),t(k,{title:"Checkbox-group \u4E8B\u4EF6",type:"event",body:s}),t(k,{title:"Checkbox-group \u63D2\u69FD",type:"slot",body:c,header:["\u63D2\u69FD\u540D","\u8BF4\u660E","\u5B50\u6807\u7B7E"]}),t(O,{prev:{path:"/doc/colorPicker",name:"Color Picker \u9009\u62E9\u5668"},next:{path:"/doc/input",name:"\u8F93\u5165\u6846 Input"}})])]))}});function Bn(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const En=v({setup(e){const o=y("hello");return(n,u)=>{const r=f("jw-input");return a(),w(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s)},null,8,["modelValue"])}}});typeof Bn=="function"&&Bn(En);function Cn(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const kn=v({setup(e){const o=y("hello");return(n,u)=>{const r=f("jw-input");return a(),w(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),disabled:""},null,8,["modelValue"])}}});typeof Cn=="function"&&Cn(kn);function Fn(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" clearable />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u6E05\u7A7A"}const Dn=v({setup(e){const o=y("hello");return(n,u)=>{const r=f("jw-input");return a(),w(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),clearable:""},null,8,["modelValue"])}}});typeof Fn=="function"&&Fn(Dn);function An(e){e.__sourceCode=`<template>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" show-password />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u5BC6\u7801\u6846"}const jn=v({setup(e){const o=y("hello");return(n,u)=>{const r=f("jw-input");return a(),w(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),"show-password":""},null,8,["modelValue"])}}});typeof An=="function"&&An(jn);function Vn(e){e.__sourceCode=`<template>\r
  <jw-input\r
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"\r
    v-model="value"\r
    type="textarea"\r
    style="width: 300px"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u6587\u672C\u57DF"}const zn=v({setup(e){const o=y("hello");return(n,u)=>{const r=f("jw-input");return a(),w(r,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),type:"textarea",style:{width:"300px"}},null,8,["modelValue"])}}});typeof Vn=="function"&&Vn(zn);function Tn(e){e.__sourceCode=`<template>\r
  <jw-input\r
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"\r
    v-model="value"\r
    :suffixIcon="Search28Filled"\r
    show-password\r
    clearable\r
  />\r
  <jw-input\r
    placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9"\r
    v-model="value1"\r
    :prefixIcon="Search28Filled"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
import { Search28Filled } from "@vicons/fluent";\r
\r
const value = ref("hello");\r
const value1 = ref("hello");\r
<\/script>`,e.__sourceCodeTitle="\u5E26 icon \u7684\u8F93\u5165\u6846"}const Sn=v({setup(e){const o=y("hello"),n=y("hello");return(u,r)=>{const s=f("jw-input");return a(),p(E,null,[t(s,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),suffixIcon:_(Re),"show-password":"",clearable:""},null,8,["modelValue","suffixIcon"]),t(s,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:n.value,"onUpdate:modelValue":r[1]||(r[1]=c=>n.value=c),prefixIcon:_(Re)},null,8,["modelValue","prefixIcon"])],64)}}});typeof Tn=="function"&&Tn(Sn);function In(e){e.__sourceCode=`<template>\r
  <xh-button @click="handleFocus">Focus</xh-button>\r
  <xh-button @click="handleSelect">Select</xh-button>\r
  <xh-button @click="handleBlur">Blur</xh-button>\r
  <jw-input placeholder="\u8BF7\u8F93\u5165\u5185\u5BB9" v-model="value" ref="inputInstRef" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const value = ref("\u9A6C\u513F\u4E56\uFF0C\u9A6C\u513F\u597D\uFF0C\u9A6C\u513F\u5149\u8DD1\u4E0D\u5403\u8349");\r
const inputInstRef = ref();\r
const handleFocus = () => {\r
  inputInstRef.value.focus();\r
};\r
const handleBlur = () => {\r
  inputInstRef.value.blur();\r
};\r
const handleSelect = () => {\r
  inputInstRef.value.select();\r
};\r
<\/script>`,e.__sourceCodeTitle="\u624B\u52A8 focus & select & blur"}const f_=d("Focus"),m_=d("Select"),v_=d("Blur"),Pn=v({setup(e){const o=y("\u9A6C\u513F\u4E56\uFF0C\u9A6C\u513F\u597D\uFF0C\u9A6C\u513F\u5149\u8DD1\u4E0D\u5403\u8349"),n=y(),u=()=>{n.value.focus()},r=()=>{n.value.blur()},s=()=>{n.value.select()};return(c,m)=>{const h=f("xh-button"),B=f("jw-input");return a(),p(E,null,[t(h,{onClick:u},{default:l(()=>[f_]),_:1}),t(h,{onClick:s},{default:l(()=>[m_]),_:1}),t(h,{onClick:r},{default:l(()=>[v_]),_:1}),t(B,{placeholder:"\u8BF7\u8F93\u5165\u5185\u5BB9",modelValue:o.value,"onUpdate:modelValue":m[0]||(m[0]=b=>o.value=b),ref_key:"inputInstRef",ref:n},null,8,["modelValue"])],64)}}});typeof In=="function"&&In(Pn);const b_={class:"input-doc-wrapper"},g_=i("h1",null,"Input \u8F93\u5165\u6846",-1),x_=i("p",null,"\u901A\u8FC7\u9F20\u6807\u6216\u952E\u76D8\u8F93\u5165\u5B57\u7B26",-1),y_={class:"preview-wrapper"},w_=v({setup(e){const o=[["type","\u7C7B\u578B","string","text\uFF0Ctextarea \u548C\u5176\u4ED6 \u539F\u751F input \u7684 type \u503C","text"],[" v-model","\u7ED1\u5B9A\u503C","string / number","-","-"],["placeholder","\u8F93\u5165\u6846\u5360\u4F4D\u6587\u672C","string","-","-"],["clearable","\u662F\u5426\u53EF\u6E05\u7A7A","boolean","-","false"],["disabled","	\u7981\u7528","boolean","-","false"],["prefix-icon","\u8F93\u5165\u6846\u5934\u90E8\u56FE\u6807","Component","-","-"],["suffix-icon","\u8F93\u5165\u6846\u5C3E\u90E8\u56FE\u6807","Component","-","-"],["readonly","\u539F\u751F\u5C5E\u6027\uFF0C\u662F\u5426\u53EA\u8BFB","	boolean","-","false"]],n=[["input","\u5728 Input \u503C\u6539\u53D8\u65F6\u89E6\u53D1","(value: string / number)"],["clear","\u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1","-"],["blur","\u5728 Input \u5931\u53BB\u7126\u70B9\u65F6\u89E6\u53D1","(event: Event)"],["focus","\u5728 Input \u83B7\u5F97\u7126\u70B9\u65F6\u89E6\u53D1","(event: Event)"]],u=[["input","\u4F7F input \u83B7\u53D6\u7126\u70B9","-"],["blur","\u4F7F input \u5931\u53BB\u7126\u70B9","-"],["select","\u9009\u4E2D input \u4E2D\u7684\u6587\u5B57","-"]];return(r,s)=>(a(),p("div",b_,[g_,x_,i("div",y_,[t(g,{component:En}),t(g,{component:kn}),t(g,{component:Dn}),t(g,{component:jn}),t(g,{component:zn}),t(g,{component:Sn}),t(g,{component:Pn}),t(k,{title:"Input \u5C5E\u6027",type:"prop",body:o}),t(k,{title:"Input \u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"Input \u65B9\u6CD5",type:"methods",body:u}),t(O,{prev:{path:"/doc/checkbox",name:"\u590D\u9009\u6846 Checkbox"},next:{path:"/doc/radio",name:"\u5355\u9009\u6846 Radio"}})])]))}});function Un(e){e.__sourceCode=`<template>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio1" label="1" size="large">\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio1" label="2" size="large">\u9009\u98792</jw-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio2" label="1">\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio2" label="2">\u9009\u98792</jw-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio3" label="1" size="small">\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio3" label="2" size="small">\u9009\u98792</jw-radio>\r
  </div>\r
  <div style="width: 100%">\r
    <jw-radio v-model="radio4" label="1" size="small" disabled>\u9009\u98791</jw-radio>\r
    <jw-radio v-model="radio4" label="2" size="small" disabled>\u9009\u98792</jw-radio>\r
  </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio1 = ref("1");\r
const radio2 = ref("1");\r
const radio3 = ref("1");\r
const radio4 = ref("1");\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const $_={style:{width:"100%"}},B_=d("\u9009\u98791"),E_=d("\u9009\u98792"),C_={style:{width:"100%"}},k_=d("\u9009\u98791"),F_=d("\u9009\u98792"),D_={style:{width:"100%"}},A_=d("\u9009\u98791"),j_=d("\u9009\u98792"),V_={style:{width:"100%"}},z_=d("\u9009\u98791"),T_=d("\u9009\u98792"),Mn=v({setup(e){const o=y("1"),n=y("1"),u=y("1"),r=y("1");return(s,c)=>{const m=f("jw-radio");return a(),p(E,null,[i("div",$_,[t(m,{modelValue:o.value,"onUpdate:modelValue":c[0]||(c[0]=h=>o.value=h),label:"1",size:"large"},{default:l(()=>[B_]),_:1},8,["modelValue"]),t(m,{modelValue:o.value,"onUpdate:modelValue":c[1]||(c[1]=h=>o.value=h),label:"2",size:"large"},{default:l(()=>[E_]),_:1},8,["modelValue"])]),i("div",C_,[t(m,{modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=h=>n.value=h),label:"1"},{default:l(()=>[k_]),_:1},8,["modelValue"]),t(m,{modelValue:n.value,"onUpdate:modelValue":c[3]||(c[3]=h=>n.value=h),label:"2"},{default:l(()=>[F_]),_:1},8,["modelValue"])]),i("div",D_,[t(m,{modelValue:u.value,"onUpdate:modelValue":c[4]||(c[4]=h=>u.value=h),label:"1",size:"small"},{default:l(()=>[A_]),_:1},8,["modelValue"]),t(m,{modelValue:u.value,"onUpdate:modelValue":c[5]||(c[5]=h=>u.value=h),label:"2",size:"small"},{default:l(()=>[j_]),_:1},8,["modelValue"])]),i("div",V_,[t(m,{modelValue:r.value,"onUpdate:modelValue":c[6]||(c[6]=h=>r.value=h),label:"1",size:"small",disabled:""},{default:l(()=>[z_]),_:1},8,["modelValue"]),t(m,{modelValue:r.value,"onUpdate:modelValue":c[7]||(c[7]=h=>r.value=h),label:"2",size:"small",disabled:""},{default:l(()=>[T_]),_:1},8,["modelValue"])])],64)}}});typeof Un=="function"&&Un(Mn);function Rn(e){e.__sourceCode=`<template>\r
  <jw-radio v-model="radio" label="1" disabled>\u9009\u98791</jw-radio>\r
  <jw-radio v-model="radio" label="2" disabled>\u9009\u98792</jw-radio>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const S_=d("\u9009\u98791"),I_=d("\u9009\u98792"),On=v({setup(e){const o=y("1");return(n,u)=>{const r=f("jw-radio");return a(),p(E,null,[t(r,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),label:"1",disabled:""},{default:l(()=>[S_]),_:1},8,["modelValue"]),t(r,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),label:"2",disabled:""},{default:l(()=>[I_]),_:1},8,["modelValue"])],64)}}});typeof Rn=="function"&&Rn(On);function Hn(e){e.__sourceCode=`<template>\r
  <jw-radio v-model="radio" label="1" size="small">\u9009\u98791</jw-radio>\r
  <jw-radio v-model="radio" label="2">\u9009\u98792</jw-radio>\r
  <jw-radio v-model="radio" label="3" size="large">\u9009\u98793</jw-radio>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u5C3A\u5BF8"}const P_=d("\u9009\u98791"),U_=d("\u9009\u98792"),M_=d("\u9009\u98793"),Nn=v({setup(e){const o=y("1");return(n,u)=>{const r=f("jw-radio");return a(),p(E,null,[t(r,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),label:"1",size:"small"},{default:l(()=>[P_]),_:1},8,["modelValue"]),t(r,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),label:"2"},{default:l(()=>[U_]),_:1},8,["modelValue"]),t(r,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=s=>o.value=s),label:"3",size:"large"},{default:l(()=>[M_]),_:1},8,["modelValue"])],64)}}});typeof Hn=="function"&&Hn(Nn);function Jn(e){e.__sourceCode=`<template>\r
  <jw-radio-group v-model="radio" size="large">\r
    <jw-radio label="1">\u9009\u9879 A</jw-radio>\r
    <jw-radio label="2">\u9009\u9879 B</jw-radio>\r
    <jw-radio label="3" disabled>\u9009\u9879 C</jw-radio>\r
  </jw-radio-group>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
\r
<\/script>`,e.__sourceCodeTitle="\u5355\u9009\u6846\u7EC4"}const R_=d("\u9009\u9879 A"),O_=d("\u9009\u9879 B"),H_=d("\u9009\u9879 C"),Ln=v({setup(e){const o=y("1");return(n,u)=>{const r=f("jw-radio"),s=f("jw-radio-group");return a(),w(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),size:"large"},{default:l(()=>[t(r,{label:"1"},{default:l(()=>[R_]),_:1}),t(r,{label:"2"},{default:l(()=>[O_]),_:1}),t(r,{label:"3",disabled:""},{default:l(()=>[H_]),_:1})]),_:1},8,["modelValue"])}}});typeof Jn=="function"&&Jn(Ln);function Wn(e){e.__sourceCode=`<template>\r
  <jw-radio v-model="radio" label="1" size="small" border>\u9009\u98791</jw-radio>\r
  <jw-radio v-model="radio" label="2" border>\u9009\u98792</jw-radio>\r
  <jw-radio v-model="radio" label="3" size="large" border>\u9009\u98793</jw-radio>\r
\r
  <jw-radio v-model="radio1" label="4" size="small" border disabled\r
    >\u9009\u98791</jw-radio\r
  >\r
  <jw-radio v-model="radio1" label="5" border disabled>\u9009\u98792</jw-radio>\r
  <jw-radio v-model="radio1" label="6" size="large" border disabled\r
    >\u9009\u98793</jw-radio\r
  >\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const radio = ref("1");\r
const radio1 = ref("4");\r
<\/script>`,e.__sourceCodeTitle="\u662F\u5426\u6709\u8FB9\u6846"}const N_=d("\u9009\u98791"),J_=d("\u9009\u98792"),L_=d("\u9009\u98793"),W_=d("\u9009\u98791"),q_=d("\u9009\u98792"),G_=d("\u9009\u98793"),qn=v({setup(e){const o=y("1"),n=y("4");return(u,r)=>{const s=f("jw-radio");return a(),p(E,null,[t(s,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),label:"1",size:"small",border:""},{default:l(()=>[N_]),_:1},8,["modelValue"]),t(s,{modelValue:o.value,"onUpdate:modelValue":r[1]||(r[1]=c=>o.value=c),label:"2",border:""},{default:l(()=>[J_]),_:1},8,["modelValue"]),t(s,{modelValue:o.value,"onUpdate:modelValue":r[2]||(r[2]=c=>o.value=c),label:"3",size:"large",border:""},{default:l(()=>[L_]),_:1},8,["modelValue"]),t(s,{modelValue:n.value,"onUpdate:modelValue":r[3]||(r[3]=c=>n.value=c),label:"4",size:"small",border:"",disabled:""},{default:l(()=>[W_]),_:1},8,["modelValue"]),t(s,{modelValue:n.value,"onUpdate:modelValue":r[4]||(r[4]=c=>n.value=c),label:"5",border:"",disabled:""},{default:l(()=>[q_]),_:1},8,["modelValue"]),t(s,{modelValue:n.value,"onUpdate:modelValue":r[5]||(r[5]=c=>n.value=c),label:"6",size:"large",border:"",disabled:""},{default:l(()=>[G_]),_:1},8,["modelValue"])],64)}}});typeof Wn=="function"&&Wn(qn);const K_={class:"radio-doc-wrapper"},Y_=i("h1",null,"Radio \u5355\u9009\u6846",-1),X_=i("p",null,"\u5728\u4E00\u7EC4\u5907\u9009\u9879\u4E2D\u8FDB\u884C\u5355\u9009",-1),Q_={class:"preview-wrapper"},Z_=v({setup(e){const o=[["v-model","\u9009\u4E2D\u9879\u7ED1\u5B9A\u503C","string / number / boolean","-","-"],["label","\u591A\u9009\u6846\u5BF9\u5E94\u7684\u503C","string / number / boolean","-","-"],["disabled","\u662F\u5426\u7981\u7528\u5355\u9009\u6846","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","	Radio \u7684\u4E0D\u540C\u5C3A\u5BF8","string","large / default /small","-"],["indeterminate","\u8BBE\u7F6E indeterminate \u72B6\u6001\uFF0C\u53EA\u8D1F\u8D23\u6837\u5F0F\u63A7\u5236","boolean","","false"]],n=[["change","\u5F53\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","value"],,],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]],r=[["v-model","\u7ED1\u5B9A\u503C","string / number / boolean","-","-"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["border","\u662F\u5426\u663E\u793A\u8FB9\u6846","boolean","-","false"],["size","\u5355\u9009\u6846\u7EC4\u4E0D\u540C\u5C3A\u5BF8","string","large / default /small","-"]],s=[["change","\u7ED1\u5B9A\u503C\u53D8\u5316\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","\u9009\u4E2D\u7684 Radio label \u503C"],,],c=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9","Radio"]];return(m,h)=>(a(),p("div",K_,[Y_,X_,i("div",Q_,[t(g,{component:Mn}),t(g,{component:On}),t(g,{component:Nn}),t(g,{component:Ln}),t(g,{component:qn}),t(k,{title:"Radio \u5C5E\u6027",type:"prop",body:o}),t(k,{title:"Radio \u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"Radio \u63D2\u69FD",type:"slot",body:u}),t(k,{title:"Radio-group \u5C5E\u6027",type:"prop",body:r}),t(k,{title:"Radio-group \u4E8B\u4EF6",type:"event",body:s}),t(k,{title:"Radio-group \u63D2\u69FD",type:"slot",body:c,header:["\u63D2\u69FD\u540D","\u8BF4\u660E","\u5B50\u6807\u7B7E"]}),t(O,{prev:{path:"/doc/input",name:"Input \u8F93\u5165\u6846"},next:{path:"/doc/select",name:"\u9009\u62E9\u5668 Select"}})])]))}});function Gn(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Kn=v({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1"},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3"},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5"},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7"},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,r)=>{const s=f("jw-select");return a(),w(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c)},null,8,["modelValue"])}}});typeof Gn=="function"&&Gn(Kn);function Yn(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u9009\u9879"}const Xn=v({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1",disabled:!0},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3",disabled:!0},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5",disabled:!0},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7",disabled:!0},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,r)=>{const s=f("jw-select");return a(),w(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c)},null,8,["modelValue"])}}});typeof Yn=="function"&&Yn(Xn);function Qn(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
    disabled\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
    disabled: true,\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u7981\u7528\u72B6\u6001"}const Zn=v({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1",disabled:!0},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3",disabled:!0},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5",disabled:!0},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7",disabled:!0},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,r)=>{const s=f("jw-select");return a(),w(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),disabled:""},null,8,["modelValue"])}}});typeof Qn=="function"&&Qn(Zn);function eo(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 200px"\r
    :options="options"\r
    v-model="value"\r
    clearable\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref("1");\r
const options = [\r
  {\r
    label: "\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",\r
    value: "1",\r
  },\r
  {\r
    label: "\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",\r
    value: "2",\r
  },\r
  {\r
    label: "\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",\r
    value: "3",\r
  },\r
  {\r
    label: "\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",\r
    value: "4",\r
  },\r
  {\r
    label: "\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",\r
    value: "5",\r
  },\r
  {\r
    label: "\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",\r
    value: "6",\r
  },\r
  {\r
    label: "\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",\r
    value: "7",\r
  },\r
  {\r
    label: "\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",\r
    value: "8",\r
  },\r
  {\r
    label: "\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",\r
    value: "9",\r
  },\r
  {\r
    label: "\u3002\u3002\u3002",\r
    value: "10",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u6E05\u7A7A\u5355\u9009"}const to=v({setup(e){const o=y("1"),n=[{label:"\u65F6\u95F4\u4F1A\u56DE\u7B54\u6210\u957F",value:"1"},{label:"\u6210\u957F\u4F1A\u56DE\u7B54\u68A6\u60F3",value:"2"},{label:"\u68A6\u60F3\u4F1A\u56DE\u7B54\u751F\u6D3B",value:"3"},{label:"\u751F\u6D3B\u56DE\u7B54\u4F60\u6211\u7684\u6A21\u6837",value:"4"},{label:"\u6D77\u6D0B\u4F1A\u56DE\u7B54\u6C5F\u6E56",value:"5"},{label:"\u6C5F\u6E56\u4F1A\u56DE\u7B54\u6CB3\u6D41",value:"6"},{label:"\u6CB3\u6D41\u4F1A\u56DE\u7B54\u6D6A\u6F6E",value:"7"},{label:"\u4E00\u8D77\u8DC3\u5165\u4EBA\u6D77",value:"8"},{label:"\u505A\u4E00\u6735\u5954\u6D8C\u7684\u6D6A\u82B1",value:"9"},{label:"\u3002\u3002\u3002",value:"10"}];return(u,r)=>{const s=f("jw-select");return a(),w(s,{id:"select",style:{width:"200px"},options:n,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),clearable:""},null,8,["modelValue"])}}});typeof eo=="function"&&eo(to);function no(e){e.__sourceCode=`<template>\r
  <jw-select\r
    id="select"\r
    style="width: 400px"\r
    :options="options"\r
    v-model="value"\r
    multiple\r
    placeholder="Please Choose"\r
    clearable\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const value = ref(["song0", "song3", "song4"]);\r
const options = [\r
  {\r
    label: "Everybody's Got Something to Hide Except Me and My Monkey",\r
    value: "song0",\r
    disabled: true,\r
  },\r
  {\r
    label: "Drive My Car",\r
    value: "song1",\r
  },\r
  {\r
    label: "Norwegian Wood",\r
    value: "song2",\r
  },\r
  {\r
    label: "You Won't See",\r
    value: "song3",\r
    disabled: true,\r
  },\r
  {\r
    label: "Nowhere Man",\r
    value: "song4",\r
  },\r
  {\r
    label: "Think For Yourself",\r
    value: "song5",\r
  },\r
  {\r
    label: "The Word",\r
    value: "song6",\r
  },\r
  {\r
    label: "Michelle",\r
    value: "song7",\r
    disabled: true,\r
  },\r
  {\r
    label: "What goes on",\r
    value: "song8",\r
  },\r
  {\r
    label: "Girl",\r
    value: "song9",\r
  },\r
  {\r
    label: "I'm looking through you",\r
    value: "song10",\r
  },\r
  {\r
    label: "In My Life",\r
    value: "song11",\r
  },\r
  {\r
    label: "Wait",\r
    value: "song12",\r
  },\r
];\r
<\/script>`,e.__sourceCodeTitle="\u591A\u9009"}const oo=v({setup(e){const o=y(["song0","song3","song4"]),n=[{label:"Everybody's Got Something to Hide Except Me and My Monkey",value:"song0",disabled:!0},{label:"Drive My Car",value:"song1"},{label:"Norwegian Wood",value:"song2"},{label:"You Won't See",value:"song3",disabled:!0},{label:"Nowhere Man",value:"song4"},{label:"Think For Yourself",value:"song5"},{label:"The Word",value:"song6"},{label:"Michelle",value:"song7",disabled:!0},{label:"What goes on",value:"song8"},{label:"Girl",value:"song9"},{label:"I'm looking through you",value:"song10"},{label:"In My Life",value:"song11"},{label:"Wait",value:"song12"}];return(u,r)=>{const s=f("jw-select");return a(),w(s,{id:"select",style:{width:"400px"},options:n,modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=c=>o.value=c),multiple:"",placeholder:"Please Choose",clearable:""},null,8,["modelValue"])}}});typeof no=="function"&&no(oo);const ep={class:"select-doc-wrapper"},tp=i("h1",null,"Select \u9009\u62E9\u5668",-1),np=i("p",null,"\u9009\u70B9\u5565\uFF01",-1),op={class:"preview-wrapper"},up=v({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","	boolean / string / number","-","-"],["placeholder","\u5360\u4F4D\u7B26","string","-","\u8BF7\u9009\u62E9"],["clearable","\u662F\u5426\u53EF\u4EE5\u6E05\u7A7A\u9009\u9879","boolean","-","false"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["options","\u914D\u7F6E\u9009\u9879\u5185\u5BB9","Array","-","[]"],["multilple","\u662F\u5426\u4E3A\u591A\u9009","boolean","-","false"]],n=[["change","\u9009\u4E2D\u503C\u53D1\u751F\u53D8\u5316\u65F6\u89E6\u53D1","\u76EE\u524D\u7684\u9009\u4E2D\u503C"],["clear","\u5728\u70B9\u51FB\u7531 clearable \u5C5E\u6027\u751F\u6210\u7684\u6E05\u7A7A\u6309\u94AE\u65F6\u89E6\u53D1","-"]];return(u,r)=>(a(),p("div",ep,[tp,np,i("div",op,[t(g,{component:Kn}),t(g,{component:Xn}),t(g,{component:Zn}),t(g,{component:to}),t(g,{component:oo}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(O,{prev:{path:"/doc/radio",name:"\u5355\u9009\u6846 Radio"},next:{path:"/doc/switch",name:"\u5F00\u5173 Switch"}})])]))}});function uo(e){e.__sourceCode=`<template>\r
  <jw-switch v-model="checked" />\r
  <jw-switch v-model="checked" disabled />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const ro=v({setup(e){const o=y(!1);return(n,u)=>{const r=f("jw-switch");return a(),p(E,null,[t(r,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s)},null,8,["modelValue"]),t(r,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),disabled:""},null,8,["modelValue"])],64)}}});typeof uo=="function"&&uo(ro);function lo(e){e.__sourceCode=`<template>\r
  <jw-switch v-model="checked" active-color="red" inactive-color="pink" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" \u81EA\u5B9A\u4E49\u989C\u8272 "}const so=v({setup(e){const o=y(!1);return(n,u)=>{const r=f("jw-switch");return a(),w(r,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),"active-color":"red","inactive-color":"pink"},null,8,["modelValue"])}}});typeof lo=="function"&&lo(so);function ao(e){e.__sourceCode=`<template>\r
  <jw-switch v-model="checked" size="small" />\r
  <jw-switch v-model="checked" size="default" />\r
  <jw-switch v-model="checked" size="large" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
const checked = ref(false);\r
<\/script>`,e.__sourceCodeTitle=" \u4E0D\u540C\u5C3A\u5BF8 "}const co=v({setup(e){const o=y(!1);return(n,u)=>{const r=f("jw-switch");return a(),p(E,null,[t(r,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=s=>o.value=s),size:"small"},null,8,["modelValue"]),t(r,{modelValue:o.value,"onUpdate:modelValue":u[1]||(u[1]=s=>o.value=s),size:"default"},null,8,["modelValue"]),t(r,{modelValue:o.value,"onUpdate:modelValue":u[2]||(u[2]=s=>o.value=s),size:"large"},null,8,["modelValue"])],64)}}});typeof ao=="function"&&ao(co);const rp=i("h1",null,"Switch \u5F00\u5173",-1),lp=i("p",null,"\u8868\u793A\u4E24\u79CD\u76F8\u4E92\u5BF9\u7ACB\u7684\u72B6\u6001\u95F4\u7684\u5207\u6362\uFF0C\u591A\u7528\u4E8E\u89E6\u53D1\u300C\u5F00/\u5173\u300D\u3002",-1),sp={class:"preview-wrapper"},ap=v({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","false"],["active-color","\u5728\u5F00\u542F\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#18a058"],["inactive-color","\u5728\u5173\u95ED\u72B6\u6001\u65F6\u7684\u80CC\u666F\u989C\u8272","string","-","#dbdbdb"],["disabled","\u662F\u5426\u7981\u7528","boolean","-","false"],["size","\u5927\u5C0F","string","small / default / large","default"]];return(n,u)=>(a(),p(E,null,[rp,lp,i("div",sp,[t(g,{component:ro}),t(g,{component:so}),t(g,{component:co}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(O,{prev:{path:"/doc/select",name:"Select \u9009\u62E9\u5668"},next:{path:"/doc/alert",name:"\u63D0\u793A Alert"}})])],64))}});function io(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B" />\r
  <jw-alert title="Info \u7C7B\u578B" type="info" />\r
  <jw-alert title="Success \u7C7B\u578B" type="success" />\r
  <jw-alert title="Warning \u7C7B\u578B" type="warning" />\r
  <jw-alert title="Error \u7C7B\u578B" type="error" />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const _o={};function cp(e,o){const n=f("jw-alert");return a(),p(E,null,[t(n,{title:"Default \u7C7B\u578B"}),t(n,{title:"Info \u7C7B\u578B",type:"info"}),t(n,{title:"Success \u7C7B\u578B",type:"success"}),t(n,{title:"Warning \u7C7B\u578B",type:"warning"}),t(n,{title:"Error \u7C7B\u578B",type:"error"})],64)}typeof io=="function"&&io(_o);var ip=D(_o,[["render",cp]]);function po(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B">\r
    <template #icon>\r
      <xh-icon class="jw-alert-icon" :size="22">\r
        <IosAirplane />\r
      </xh-icon>\r
    </template>\r
  </jw-alert>\r
  <jw-alert title="Info \u7C7B\u578B" type="info" show-icon />\r
  <jw-alert title="Success \u7C7B\u578B" type="success" show-icon />\r
  <jw-alert title="Warning \u7C7B\u578B" type="warning" show-icon />\r
  <jw-alert title="Error \u7C7B\u578B" type="error" show-icon />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u4E3A Alert \u8BBE\u7F6E\u56FE\u6807"}const ho=v({setup(e){return(o,n)=>{const u=f("xh-icon"),r=f("jw-alert");return a(),p(E,null,[t(r,{title:"Default \u7C7B\u578B"},{icon:l(()=>[t(u,{class:"jw-alert-icon",size:22},{default:l(()=>[t(_(Ee))]),_:1})]),_:1}),t(r,{title:"Info \u7C7B\u578B",type:"info","show-icon":""}),t(r,{title:"Success \u7C7B\u578B",type:"success","show-icon":""}),t(r,{title:"Warning \u7C7B\u578B",type:"warning","show-icon":""}),t(r,{title:"Error \u7C7B\u578B",type:"error","show-icon":""})],64)}}});typeof po=="function"&&po(ho);function fo(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B" center>\r
    <template #icon>\r
      <xh-icon class="jw-alert-icon" :size="22">\r
        <IosAirplane />\r
      </xh-icon>\r
    </template>\r
  </jw-alert>\r
  <jw-alert title="Info \u7C7B\u578B" type="info" show-icon center />\r
  <jw-alert title="Success \u7C7B\u578B" type="success" show-icon center />\r
  <jw-alert title="Warning \u7C7B\u578B" type="warning" show-icon center />\r
  <jw-alert title="Error \u7C7B\u578B" type="error" show-icon center />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u4F7F\u6587\u5B57\u5C45\u4E2D"}const mo=v({setup(e){return(o,n)=>{const u=f("xh-icon"),r=f("jw-alert");return a(),p(E,null,[t(r,{title:"Default \u7C7B\u578B",center:""},{icon:l(()=>[t(u,{class:"jw-alert-icon",size:22},{default:l(()=>[t(_(Ee))]),_:1})]),_:1}),t(r,{title:"Info \u7C7B\u578B",type:"info","show-icon":"",center:""}),t(r,{title:"Success \u7C7B\u578B",type:"success","show-icon":"",center:""}),t(r,{title:"Warning \u7C7B\u578B",type:"warning","show-icon":"",center:""}),t(r,{title:"Error \u7C7B\u578B",type:"error","show-icon":"",center:""})],64)}}});typeof fo=="function"&&fo(mo);function vo(e){e.__sourceCode=`<template>\r
  <jw-alert\r
    title="Success \u7C7B\u578B"\r
    type="success"\r
    show-icon\r
    center\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u63CF\u8FF0\u6587\u6848"}const bo=v({setup(e){return(o,n)=>{const u=f("jw-alert");return a(),w(u,{title:"Success \u7C7B\u578B",type:"success","show-icon":"",center:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"})}}});typeof vo=="function"&&vo(bo);function go(e){e.__sourceCode=`<template>\r
  <jw-alert title="Default \u7C7B\u578B" closeable description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0">\r
    <template #icon>\r
      <xh-icon class="jw-alert-icon" :size="22">\r
        <IosAirplane />\r
      </xh-icon>\r
    </template>\r
  </jw-alert>\r
  <jw-alert\r
    title="Info \u7C7B\u578B"\r
    type="info"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
  <jw-alert\r
    title="Success \u7C7B\u578B"\r
    type="success"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
  <jw-alert\r
    title="Warning \u7C7B\u578B"\r
    type="warning"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
  <jw-alert\r
    title="Error \u7C7B\u578B"\r
    type="error"\r
    show-icon\r
    closeable\r
    description="\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"\r
  />\r
</template>\r
<script setup lang="ts">\r
import { IosAirplane } from "@vicons/ionicons4";\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u4EE5\u5173\u95ED"}const xo=v({setup(e){return(o,n)=>{const u=f("xh-icon"),r=f("jw-alert");return a(),p(E,null,[t(r,{title:"Default \u7C7B\u578B",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"},{icon:l(()=>[t(u,{class:"jw-alert-icon",size:22},{default:l(()=>[t(_(Ee))]),_:1})]),_:1}),t(r,{title:"Info \u7C7B\u578B",type:"info","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"}),t(r,{title:"Success \u7C7B\u578B",type:"success","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"}),t(r,{title:"Warning \u7C7B\u578B",type:"warning","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"}),t(r,{title:"Error \u7C7B\u578B",type:"error","show-icon":"",closeable:"",description:"\u8FD9\u662F\u4E00\u6BB5\u63CF\u8FF0"})],64)}}});typeof go=="function"&&go(xo);const dp={class:"alert-doc-wrapper"},_p=i("h1",null,"\u63D0\u793A Alert",-1),pp=i("p",null,"\u7528\u4E8E\u9875\u9762\u4E2D\u5C55\u793A\u91CD\u8981\u7684\u63D0\u793A\u4FE1\u606F\u3002",-1),hp={class:"preview-wrapper"},fp=v({setup(e){const o=[["title","\u6807\u9898","	string","-","-"],["type","\u7C7B\u578B","string","default / info / success / warning / error","default"],["content","\u8F85\u52A9\u6027\u6587\u5B57","string","-","-"],["closable","\u662F\u5426\u53EF\u5173\u95ED","boolean","-","false"],["center","\u6587\u5B57\u662F\u5426\u5C45\u4E2D","boolean","-","false"],["show-icon","\u662F\u5426\u663E\u793A\u56FE\u6807","boolean","-","false"]],n=[["close","	\u5173\u95ED Alert \u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","-"]],u=[["default","\u8F85\u52A9\u6027\u6587\u5B57"],["icon","\u56FE\u6807"],["title","\u6807\u9898"]];return(r,s)=>(a(),p("div",dp,[_p,pp,i("div",hp,[t(g,{component:ip}),t(g,{component:ho}),t(g,{component:mo}),t(g,{component:bo}),t(g,{component:xo}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"\u63D2\u69FD",type:"slot",body:u}),t(O,{prev:{path:"/doc/switch",name:"\u5F00\u5173 Switch"},next:{path:"/doc/dialog",name:"\u5BF9\u8BDD\u6846 Dialog"}})])]))}});function yo(e){e.__sourceCode=`<template>\r
  <xh-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</xh-button>\r
  <jw-dialog v-model="visible" />\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const confirm = () => {};\r
\r
const cancel = () => {};\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const mp=d("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),wo=v({setup(e){const o=y(!1),n=()=>{o.value=!o.value};return(u,r)=>{const s=f("xh-button"),c=f("jw-dialog");return a(),p(E,null,[t(s,{theme:"primary",onClick:n},{default:l(()=>[mp]),_:1}),t(c,{modelValue:o.value,"onUpdate:modelValue":r[0]||(r[0]=m=>o.value=m)},null,8,["modelValue"])],64)}}});typeof yo=="function"&&yo(wo);function $o(e){e.__sourceCode=`<template>\r
  <xh-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</xh-button>\r
  <jw-dialog\r
    v-model="visible"\r
    :overlay-closable="false"\r
    @onOverlayClick="onOverlayClick"\r
  >\r
    \u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002\r
  </jw-dialog>\r
</template>\r
\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const visible = ref(false);\r
\r
const toggle = () => {\r
  visible.value = !visible.value;\r
};\r
\r
const onOverlayClick = () => {\r
  console.log("\u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002");\r
};\r
<\/script>`,e.__sourceCodeTitle=" \u70B9\u51FB\u906E\u7F69 "}const vp=d("\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846"),bp=d(" \u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002 "),Bo=v({setup(e){const o=y(!1),n=()=>{o.value=!o.value},u=()=>{console.log("\u6211\u89C9\u5F97\u7528\u6237\u5E94\u8BE5\u806A\u660E\u5230\u70B9\u906E\u7F69\u6CA1\u7528\u7684\u65F6\u5019\u5C31\u53BB\u70B9\u786E\u8BA4\u4E86\u3002")};return(r,s)=>{const c=f("xh-button"),m=f("jw-dialog");return a(),p(E,null,[t(c,{theme:"primary",onClick:n},{default:l(()=>[vp]),_:1}),t(m,{modelValue:o.value,"onUpdate:modelValue":s[0]||(s[0]=h=>o.value=h),"overlay-closable":!1,onOnOverlayClick:u},{default:l(()=>[bp]),_:1},8,["modelValue"])],64)}}});typeof $o=="function"&&$o(Bo);function Eo(e){e.__sourceCode=`<template>\r
  <!-- <xh-button theme="primary" @click="toggle">\u70B9\u51FB\u6253\u5F00\u5BF9\u8BDD\u6846</xh-button> -->\r
</template>\r
\r
<script setup lang="ts">\r
// import { openDialog } from "yjw-ui";\r
// const toggle = () => {\r
//   openDialog({\r
//     overlay: true,\r
//     overlayClosable: true,\r
//     title: () => "\u6211\u662F\u6807\u9898",\r
//     content: () => "\u6211\u662F\u5185\u5BB9",\r
//     confirm: () => {},\r
//     cancel: () => {},\r
//   });\r
// };\r
<\/script>`,e.__sourceCodeTitle=" \u4E00\u53E5\u8BDD\u6253\u5F00Dialog "}const Co=v({setup(e){return(o,n)=>null}});typeof Eo=="function"&&Eo(Co);const gp=i("h1",null,"Dialog \u5BF9\u8BDD\u6846",-1),xp=i("p",null,"\u5728\u4FDD\u7559\u5F53\u524D\u9875\u9762\u72B6\u6001\u7684\u60C5\u51B5\u4E0B\uFF0C\u544A\u77E5\u7528\u6237\u5E76\u627F\u8F7D\u76F8\u5173\u64CD\u4F5C\u3002",-1),yp={class:"preview-wrapper"},wp=v({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","flase"],["overlay","\u662F\u5426\u9700\u8981\u80CC\u666F\u906E\u7F69","boolean","-","true"],["title","\u6807\u9898","string","-","\u6807\u9898"],["overlay-closebale","\u662F\u5426\u53EF\u4EE5\u901A\u8FC7\u70B9\u51FBoverlay\u5173\u95ED\u5BF9\u8BDD\u6846","boolean","-","true"]],n=[["-","Dialog \u7684\u5185\u5BB9"],["title","Dialog \u6807\u9898\u533A\u7684\u5185\u5BB9"],["footer","Dialog \u6309\u94AE\u64CD\u4F5C\u533A\u7684\u5185\u5BB9"]],u=[["confirm","\u70B9\u51FB\u786E\u8BA4\u6309\u94AE\u7684\u56DE\u8C03","-"],["cancel","\u70B9\u51FB\u53D6\u6D88\u6309\u94AE\u7684\u56DE\u8C03","-"],["onOverlayClick","\u70B9\u51FB\u906E\u7F69\u7684\u56DE\u8C03","-"]];return(r,s)=>(a(),p(E,null,[gp,xp,i("div",yp,[t(g,{component:wo}),t(g,{component:Bo}),t(g,{component:Co}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u63D2\u69FD",type:"slot",body:n}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:u}),t(O,{prev:{path:"/doc/alert",name:"Alert \u63D0\u793A"},next:{path:"/doc/message",name:"\u4FE1\u606F Message"}})])],64))}});function ko(e){e.__sourceCode=`<template>\r
  <jw-drawer />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"}const Fo={};function $p(e,o){const n=f("jw-drawer");return a(),w(n)}typeof ko=="function"&&ko(Fo);var Bp=D(Fo,[["render",$p]]);const Do=e=>(he("data-v-ec40f1d4"),e=e(),fe(),e),Ep={class:"drawer-doc-wrapper"},Cp=Do(()=>i("h1",null,"\u62BD\u5C49 Drawer",-1)),kp=Do(()=>i("p",null," \u6709\u4E9B\u65F6\u5019, Dialog \u7EC4\u4EF6\u5E76\u4E0D\u6EE1\u8DB3\u6211\u4EEC\u7684\u9700\u6C42, \u6BD4\u5982\u4F60\u7684\u8868\u5355\u5F88\u957F, \u4EA6\u6216\u662F\u4F60\u9700\u8981\u4E34\u65F6\u5C55\u793A\u4E00\u4E9B\u6587\u6863 ",-1)),Fp={class:"preview-wrapper"},Dp=v({setup(e){return(o,n)=>(a(),p("div",Ep,[Cp,kp,i("div",Fp,[t(g,{component:Bp})])]))}});var Ap=D(Dp,[["__scopeId","data-v-ec40f1d4"]]);function Ao(e){e.__sourceCode=`<template>\r
  <xh-button @click="open">Show Message</xh-button>\r
  <xh-button @click="openVn">Vnode</xh-button>\r
</template>\r
\r
<script setup lang="ts">\r
import { h } from "vue";\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open = () => {\r
  JwMessage("This is a Message");\r
};\r
\r
const openVn = () => {\r
  JwMessage({\r
    message: h("p", null, [\r
      h("span", null, "Message can be "),\r
      h("i", { style: "color: teal" }, "VNode"),\r
    ]),\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u7840\u4F7F\u7528"}const jp=d("Show Message"),Vp=d("Vnode"),jo=v({setup(e){const o=()=>{W("This is a Message")},n=()=>{W({message:be("p",null,[be("span",null,"Message can be "),be("i",{style:"color: teal"},"VNode")])})};return(u,r)=>{const s=f("xh-button");return a(),p(E,null,[t(s,{onClick:o},{default:l(()=>[jp]),_:1}),t(s,{onClick:n},{default:l(()=>[Vp]),_:1})],64)}}});typeof Ao=="function"&&Ao(jo);function Vo(e){e.__sourceCode=`<template>\r
  <xh-button @click="open1">Info</xh-button>\r
  <xh-button @click="open2">success</xh-button>\r
  <xh-button @click="open3">Warning</xh-button>\r
  <xh-button @click="open4">Error</xh-button>\r
</template>\r
\r
<script setup lang="ts">\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  JwMessage("this is a message.");\r
};\r
const open2 = () => {\r
  JwMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
  });\r
};\r
const open3 = () => {\r
  JwMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
  });\r
};\r
const open4 = () => {\r
  JwMessage.error("Oops, this is a error message.");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u4E0D\u540C\u72B6\u6001"}const zp=d("Info"),Tp=d("success"),Sp=d("Warning"),Ip=d("Error"),zo=v({setup(e){const o=()=>{W("this is a message.")},n=()=>{W({message:"Congrats, this is a success message.",type:"success"})},u=()=>{W({message:"Warning, this is a warning message.",type:"warning"})},r=()=>{W.error("Oops, this is a error message.")};return(s,c)=>{const m=f("xh-button");return a(),p(E,null,[t(m,{onClick:o},{default:l(()=>[zp]),_:1}),t(m,{onClick:n},{default:l(()=>[Tp]),_:1}),t(m,{onClick:u},{default:l(()=>[Sp]),_:1}),t(m,{onClick:r},{default:l(()=>[Ip]),_:1})],64)}}});typeof Vo=="function"&&Vo(zo);function To(e){e.__sourceCode=`<template>\r
  <xh-button @click="open1">Info</xh-button>\r
  <xh-button @click="open2">success</xh-button>\r
  <xh-button @click="open3">Warning</xh-button>\r
  <xh-button @click="open4">Error</xh-button>\r
</template>\r
\r
<script setup lang="ts">\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  JwMessage({\r
    message: "this is a message.",\r
    showClose: true,\r
  });\r
};\r
const open2 = () => {\r
  JwMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
    showClose: true,\r
  });\r
};\r
const open3 = () => {\r
  JwMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
    showClose: true,\r
  });\r
};\r
const open4 = () => {\r
  JwMessage({\r
    type: "error",\r
    message: "Oops, this is a error message.",\r
    showClose: true,\r
    duration: 0,\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u53EF\u5173\u95ED\u7684\u6D88\u606F\u63D0\u793A"}const Pp=d("Info"),Up=d("success"),Mp=d("Warning"),Rp=d("Error"),So=v({setup(e){const o=()=>{W({message:"this is a message.",showClose:!0})},n=()=>{W({message:"Congrats, this is a success message.",type:"success",showClose:!0})},u=()=>{W({message:"Warning, this is a warning message.",type:"warning",showClose:!0})},r=()=>{W({type:"error",message:"Oops, this is a error message.",showClose:!0,duration:0})};return(s,c)=>{const m=f("xh-button");return a(),p(E,null,[t(m,{onClick:o},{default:l(()=>[Pp]),_:1}),t(m,{onClick:n},{default:l(()=>[Up]),_:1}),t(m,{onClick:u},{default:l(()=>[Mp]),_:1}),t(m,{onClick:r},{default:l(()=>[Rp]),_:1})],64)}}});typeof To=="function"&&To(So);function Io(e){e.__sourceCode=`<template>\r
  <xh-button @click="open1">Info</xh-button>\r
  <xh-button @click="open2">success</xh-button>\r
  <xh-button @click="open3">Warning</xh-button>\r
  <xh-button @click="open4">Error</xh-button>\r
</template>\r
\r
<script setup lang="ts">\r
import JwMessage from "@/lib/message/index.ts";\r
\r
const open1 = () => {\r
  JwMessage({\r
    message: "this is a message.",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open2 = () => {\r
  JwMessage({\r
    message: "Congrats, this is a success message.",\r
    type: "success",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open3 = () => {\r
  JwMessage({\r
    message: "Warning, this is a warning message.",\r
    type: "warning",\r
    showClose: true,\r
    center: true,\r
  });\r
};\r
const open4 = () => {\r
  JwMessage({\r
    type: "error",\r
    message: "Oops, this is a error message.",\r
    showClose: true,\r
    duration: 0,\r
    center: true,\r
  });\r
};\r
<\/script>`,e.__sourceCodeTitle="\u5C45\u4E2D"}const Op=d("Info"),Hp=d("success"),Np=d("Warning"),Jp=d("Error"),Po=v({setup(e){const o=()=>{W({message:"this is a message.",showClose:!0,center:!0})},n=()=>{W({message:"Congrats, this is a success message.",type:"success",showClose:!0,center:!0})},u=()=>{W({message:"Warning, this is a warning message.",type:"warning",showClose:!0,center:!0})},r=()=>{W({type:"error",message:"Oops, this is a error message.",showClose:!0,duration:0,center:!0})};return(s,c)=>{const m=f("xh-button");return a(),p(E,null,[t(m,{onClick:o},{default:l(()=>[Op]),_:1}),t(m,{onClick:n},{default:l(()=>[Hp]),_:1}),t(m,{onClick:u},{default:l(()=>[Np]),_:1}),t(m,{onClick:r},{default:l(()=>[Jp]),_:1})],64)}}});typeof Io=="function"&&Io(Po);const Lp={class:"message-doc-wrapper"},Wp=i("h1",null,"\u6D88\u606F\u63D0\u793A",-1),qp=i("p",null,"\uFF08\u4E00\u822C\u662F\uFF09\u4ECE\u6D4F\u89C8\u5668\u9876\u90E8\u964D\u4E0B\u6765\u7684\u795E\u8C15\u3002",-1),Gp={class:"preview-wrapper"},Kp=v({setup(e){const o=[["message","\u6D88\u606F\u6587\u5B57","string / VNode","-","-"],["type","\u6D88\u606F\u7C7B\u578B","string","success / warning / info / error","info"],["duration","\u663E\u793A\u65F6\u95F4\uFF0C\u5355\u4F4D\u4E3A\u6BEB\u79D2\u3002 \u8BBE\u4E3A 0 \u5219\u4E0D\u4F1A\u81EA\u52A8\u5173\u95ED","number","-","3000"],["show-close","\u662F\u5426\u663E\u793A\u5173\u95ED\u6309\u94AE","boolean","-","false"],["center","\u6587\u5B57\u662F\u5426\u5C45\u4E2D","boolean","-","false"],["on-close","\u5173\u95ED\u65F6\u7684\u56DE\u8C03\u51FD\u6570, \u53C2\u6570\u4E3A\u88AB\u5173\u95ED\u7684 message \u5B9E\u4F8B","function","-","-"],["offset","Message \u8DDD\u79BB\u7A97\u53E3\u9876\u90E8\u7684\u504F\u79FB\u91CF","number","-","20"],["appendTo","\u8BBE\u7F6E\u7EC4\u4EF6\u7684\u6839\u5143\u7D20","string / HTMLElement","-","document.body"]],n=[["close","\u5173\u95ED\u5F53\u524D\u7684 Message","-"]];return(u,r)=>(a(),p("div",Lp,[Wp,qp,i("div",Gp,[t(g,{component:jo}),t(g,{component:zo}),t(g,{component:So}),t(g,{component:Po}),t(k,{title:"\u914D\u7F6E\u9879",type:"prop",body:o}),t(k,{title:"\u65B9\u6CD5",type:"methods",body:n}),t(O,{prev:{path:"/doc/dialog",name:"Dialog \u5BF9\u8BDD\u6846"},next:{path:"/doc/Affix",name:"\u56FA\u9489 Affix"}})])]))}});function Uo(e){e.__sourceCode=`<template>\r
  <jw-affix :offset="80" position="top">\r
    <xh-button theme="primary">\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A</xh-button>\r
  </jw-affix>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Mo={},Yp=d("\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A");function Xp(e,o){const n=f("xh-button"),u=f("jw-affix");return a(),w(u,{offset:80,position:"top"},{default:l(()=>[t(n,{theme:"primary"},{default:l(()=>[Yp]),_:1})]),_:1})}typeof Uo=="function"&&Uo(Mo);var Qp=D(Mo,[["render",Xp]]);function Ro(e){e.__sourceCode=`<template>\r
  <div class="affix-container">\r
    <jw-affix target=".affix-container" :offset="80">\r
      <xh-button theme="primary">\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A \u59CB\u7EC8\u5728target\u5BB9\u5668\u4E2D</xh-button>\r
    </jw-affix>\r
  </div>\r
</template>\r
<style scoped>\r
.affix-container {\r
  text-align: center;\r
  height: 800px;\r
  border-radius: 4px;\r
  background-color: #edf5ef;\r
  width: 100%;\r
}\r
</style>`,e.__sourceCodeTitle="\u4E3A Affix \u7EC4\u4EF6\u6307\u5B9A\u5BB9\u5668"}const Oo={},Zp={class:"affix-container"},eh=d("\u8DDD\u79BB\u9876\u90E880px\u56FA\u5B9A \u59CB\u7EC8\u5728target\u5BB9\u5668\u4E2D");function th(e,o){const n=f("xh-button"),u=f("jw-affix");return a(),p("div",Zp,[t(u,{target:".affix-container",offset:80},{default:l(()=>[t(n,{theme:"primary"},{default:l(()=>[eh]),_:1})]),_:1})])}typeof Ro=="function"&&Ro(Oo);var nh=D(Oo,[["render",th],["__scopeId","data-v-2aaf4a62"]]);function Ho(e){e.__sourceCode=`<template>\r
  <jw-affix :offset="80" position="bottom">\r
    <xh-button theme="primary">\u8DDD\u79BB\u5E95\u90E880px\u56FA\u5B9A</xh-button>\r
  </jw-affix>\r
</template>`,e.__sourceCodeTitle="\u56FA\u5B9A Affix \u7EC4\u4EF6\u7684\u4F4D\u7F6E"}const No={},oh=d("\u8DDD\u79BB\u5E95\u90E880px\u56FA\u5B9A");function uh(e,o){const n=f("xh-button"),u=f("jw-affix");return a(),w(u,{offset:80,position:"bottom"},{default:l(()=>[t(n,{theme:"primary"},{default:l(()=>[oh]),_:1})]),_:1})}typeof Ho=="function"&&Ho(No);var rh=D(No,[["render",uh]]);const lh={class:"affix-doc-wrapper"},sh=i("h1",null,"\u56FA\u9489 Affix",-1),ah=i("p",null,"\u5C06\u9875\u9762\u5143\u7D20\u56FA\u5B9A\u5728\u7279\u5B9A\u53EF\u89C6\u533A\u57DF\u3002",-1),ch={class:"preview-wrapper"},ih=v({setup(e){const o=[["offset","\u504F\u79FB\u8DDD\u79BB","number","-","0"],["position","\u56FA\u9489\u4F4D\u7F6E","string","top / bottom","top"],["target","\u6307\u5B9A\u5BB9\u5668\uFF08CSS \u9009\u62E9\u5668\uFF09","string","-","-"],["z-index","\u56FA\u9489\u5C42\u7EA7","	number","-","100"]],n=[["change","\u56FA\u9489\u72B6\u6001\u6539\u53D8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6","(value: boolean)"],["scroll","\u6EDA\u52A8\u65F6\u89E6\u53D1\u7684\u4E8B\u4EF6	","Event"]],u=[["update","\u624B\u52A8\u66F4\u65B0\u56FA\u9489\u72B6\u6001","-"]];return(r,s)=>(a(),p("div",lh,[sh,ah,i("div",ch,[t(g,{component:Qp}),t(g,{component:nh}),t(g,{component:rh}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"\u65B9\u6CD5",type:"methods",body:u}),t(O,{prev:{path:"/doc/message",name:"\u4FE1\u606F Message"},next:{path:"/doc/backtop",name:"\u56DE\u5230\u9876\u90E8 Backtop"}})])]))}});function Jo(e){e.__sourceCode=`<template>\r
  <div style="height: 300px">\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop</div>\r
  <jw-backtop target="#doc-content-container" />\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Lo={},dh=i("div",{style:{height:"300px"}},"\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop",-1);function _h(e,o){const n=f("jw-backtop");return a(),p(E,null,[dh,t(n,{target:"#doc-content-container"})],64)}typeof Jo=="function"&&Jo(Lo);var ph=D(Lo,[["render",_h]]);function Wo(e){e.__sourceCode=`<template>\r
  <div style="height: 300px">\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop</div>\r
  <jw-backtop target="#doc-content-container" :bottom="100">\r
    <div\r
      style="\r
        height: 100%;\r
        width: 100%;\r
        background-color: #f2f5f6;\r
        box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);\r
        text-align: center;\r
        line-height: 40px;\r
        color: #5bab70;\r
      "\r
    >\r
      UP\r
    </div>\r
  </jw-backtop>\r
</template>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u5185\u5BB9"}const qo={},hh=i("div",{style:{height:"300px"}},"\u5F80\u4E0B\u6ED1\u51FA\u73B0Backtop",-1),fh=i("div",{style:{height:"100%",width:"100%","background-color":"#f2f5f6","box-shadow":"0 0 6px rgba(0, 0, 0, 0.12)","text-align":"center","line-height":"40px",color:"#5bab70"}}," UP ",-1);function mh(e,o){const n=f("jw-backtop");return a(),p(E,null,[hh,t(n,{target:"#doc-content-container",bottom:100},{default:l(()=>[fh]),_:1})],64)}typeof Wo=="function"&&Wo(qo);var vh=D(qo,[["render",mh]]);const bh={class:"backtop-doc-wrapper"},gh=i("h1",null,"\u56DE\u5230\u9876\u90E8 Backtop",-1),xh=i("p",null,"\u8FD4\u56DE\u9875\u9762\u9876\u90E8\u7684\u64CD\u4F5C\u6309\u94AE",-1),yh={class:"preview-wrapper"},wh=v({setup(e){const o=[["target","\u89E6\u53D1\u6EDA\u52A8\u7684\u5BF9\u8C61	","	string	","-","document.documentElement"],["visibility-height","\u6EDA\u52A8\u9AD8\u5EA6\u8FBE\u5230\u6B64\u53C2\u6570\u503C\u624D\u51FA\u73B0","number","-","200"],["right","\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u53F3\u8FB9\u8DDD","number","-","40"],["bottom","\u63A7\u5236\u5176\u663E\u793A\u4F4D\u7F6E\uFF0C\u8DDD\u79BB\u9875\u9762\u5E95\u90E8\u8DDD\u79BB","number","-","40"]],n=[["click","\u70B9\u51FB\u6309\u94AE\u89E6\u53D1\u7684\u4E8B\u4EF6	","Event"]],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(r,s)=>(a(),p("div",bh,[gh,xh,i("div",yh,[t(g,{component:ph}),t(g,{component:vh}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"\u63D2\u69FD",type:"slot",body:u}),t(O,{prev:{path:"/doc/affix",name:"\u56FA\u9489 Affix"},next:{path:"/doc/breadcrumb",name:"\u9762\u5305\u5C51 Breadcrumb"}})])]))}});function Go(e){e.__sourceCode=`<template>\r
  <jw-breadcrumb separator="/">\r
    <jw-breadcrumb-item :to="{ path: '/' }">homepage</jw-breadcrumb-item>\r
    <jw-breadcrumb-item\r
      ><a href="/">promotion management</a></jw-breadcrumb-item\r
    >\r
    <jw-breadcrumb-item>promotion list</jw-breadcrumb-item>\r
    <jw-breadcrumb-item>promotion detail</jw-breadcrumb-item>\r
  </jw-breadcrumb>\r
</template>`,e.__sourceCodeTitle="\u57FA\u7840\u7528\u6CD5"}const Ko={},$h=d("homepage"),Bh=i("a",{href:"/"},"promotion management",-1),Eh=d("promotion list"),Ch=d("promotion detail");function kh(e,o){const n=f("jw-breadcrumb-item"),u=f("jw-breadcrumb");return a(),w(u,{separator:"/"},{default:l(()=>[t(n,{to:{path:"/"}},{default:l(()=>[$h]),_:1}),t(n,null,{default:l(()=>[Bh]),_:1}),t(n,null,{default:l(()=>[Eh]),_:1}),t(n,null,{default:l(()=>[Ch]),_:1})]),_:1})}typeof Go=="function"&&Go(Ko);var Fh=D(Ko,[["render",kh]]);function Yo(e){e.__sourceCode=`<template>\r
  <jw-breadcrumb :separator-icon="ArrowForwardIosSharp">\r
    <jw-breadcrumb-item :to="{ path: '/' }">homepage</jw-breadcrumb-item>\r
    <jw-breadcrumb-item\r
      ><a href="/">promotion management</a></jw-breadcrumb-item\r
    >\r
    <jw-breadcrumb-item>promotion list</jw-breadcrumb-item>\r
    <jw-breadcrumb-item>promotion detail</jw-breadcrumb-item>\r
  </jw-breadcrumb>\r
</template>\r
\r
<script setup lang="ts">\r
import { ArrowForwardIosSharp } from "@vicons/material";\r
<\/script>`,e.__sourceCodeTitle="\u56FE\u6807\u5206\u9694\u7B26"}const Dh=d("homepage"),Ah=i("a",{href:"/"},"promotion management",-1),jh=d("promotion list"),Vh=d("promotion detail"),Xo=v({setup(e){return(o,n)=>{const u=f("jw-breadcrumb-item"),r=f("jw-breadcrumb");return a(),w(r,{"separator-icon":_(Au)},{default:l(()=>[t(u,{to:{path:"/"}},{default:l(()=>[Dh]),_:1}),t(u,null,{default:l(()=>[Ah]),_:1}),t(u,null,{default:l(()=>[jh]),_:1}),t(u,null,{default:l(()=>[Vh]),_:1})]),_:1},8,["separator-icon"])}}});typeof Yo=="function"&&Yo(Xo);const zh={class:"breadcrumb-doc-wrapper"},Th=i("h1",null,"\u9762\u5305\u5C51 Breadcrumb",-1),Sh=i("p",null,"\u663E\u793A\u5F53\u524D\u9875\u9762\u7684\u8DEF\u5F84\uFF0C\u5FEB\u901F\u8FD4\u56DE\u4E4B\u524D\u7684\u4EFB\u610F\u9875\u9762\u3002",-1),Ih={class:"preview-wrapper"},Ph=v({setup(e){const o=[["separator","\u5206\u9694\u7B26","string","-","/"],["separator-icon","\u56FE\u6807\u5206\u9694\u7B26\u7684\u7EC4\u4EF6\u6216\u7EC4\u4EF6\u540D","Component","-","-"]],n=[["to","\u8DEF\u7531\u8DF3\u8F6C\u76EE\u6807\uFF0C\u540C vue-router \u7684 to\u5C5E\u6027","object","-","/"],["separator-icon","\u5982\u679C\u8BBE\u7F6E\u8BE5\u5C5E\u6027\u4E3A true, \u5BFC\u822A\u5C06\u4E0D\u4F1A\u7559\u4E0B\u5386\u53F2\u8BB0\u5F55","boolean","-","false"]],u=[["default","\u81EA\u5B9A\u4E49\u9ED8\u8BA4\u5185\u5BB9"]];return(r,s)=>(a(),p("div",zh,[Th,Sh,i("div",Ih,[t(g,{component:Fh}),t(g,{component:Xo}),t(k,{title:"Breadcrumb \u5C5E\u6027",type:"prop",body:o}),t(k,{title:"Breadcrumb \u63D2\u69FD",type:"slot",body:u}),t(k,{title:"Breadcrumb Item \u5C5E\u6027",type:"prop",body:n}),t(k,{title:"Breadcrumb Item \u63D2\u69FD",type:"slot",body:u}),t(O,{prev:{path:"/doc/backtop",name:"\u56DE\u5230\u9876\u90E8 Backtop"},next:{path:"/doc/page-header",name:"\u9875\u5934 PggeHeader"}})])]))}});function Qo(e){e.__sourceCode=`<template>\r
  <jw-page-header content="detail" @back="goBack" />\r
</template>\r
\r
<script setup lang="ts">\r
const goBack = () => {\r
  console.log("go back");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u57FA\u672C\u4F7F\u7528"}const Zo=v({setup(e){const o=()=>{console.log("go back")};return(n,u)=>{const r=f("jw-page-header");return a(),w(r,{content:"detail",onBack:o})}}});typeof Qo=="function"&&Qo(Zo);function eu(e){e.__sourceCode=`<template>\r
  <jw-page-header\r
    content="detail"\r
    @back="goBack"\r
    :icon="ArrowBackIosNewOutlined"\r
  />\r
</template>\r
\r
<script setup lang="ts">\r
import { ArrowBackIosNewOutlined } from "@vicons/material";\r
const goBack = () => {\r
  console.log("go back");\r
};\r
<\/script>`,e.__sourceCodeTitle="\u81EA\u5B9A\u4E49\u56FE\u6807"}const tu=v({setup(e){const o=()=>{console.log("go back")};return(n,u)=>{const r=f("jw-page-header");return a(),w(r,{content:"detail",onBack:o,icon:_(ju)},null,8,["icon"])}}});typeof eu=="function"&&eu(tu);const Uh={class:"pageheader-doc-wrapper"},Mh=i("h1",null,"Page Header \u9875\u5934",-1),Rh=i("p",null,"\u5982\u679C\u9875\u9762\u7684\u8DEF\u5F84\u6BD4\u8F83\u7B80\u5355\uFF0C\u63A8\u8350\u4F7F\u7528\u9875\u5934\u7EC4\u4EF6\u800C\u975E\u9762\u5305\u5C51\u7EC4\u4EF6\u3002",-1),Oh={class:"preview-wrapper"},Hh=v({setup(e){const o=[["icon","\u56FE\u6807\u7EC4\u4EF6","Component","-","ArrowBack"],["title","\u6807\u9898","string","-","Back"],["content","\u5185\u5BB9","string","-","default"]],n=[["back","\u70B9\u51FB\u5DE6\u4FA7\u533A\u57DF\u89E6\u53D1","-"]],u=[["icon","\u81EA\u5B9A\u4E49\u56FE\u6807"],["title","\u6807\u9898\u5185\u5BB9"],["content","\u5185\u5BB9"]];return(r,s)=>(a(),p("div",Uh,[Mh,Rh,i("div",Oh,[t(g,{component:Zo}),t(g,{component:tu}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(k,{title:"\u4E8B\u4EF6",type:"event",body:n}),t(k,{title:"\u63D2\u69FD",type:"slot",body:u}),t(O,{prev:{path:"/doc/breadcrumb",name:"Breadcrumb \u9762\u5305\u5C51"},next:{path:"/doc/tabs",name:"\u6807\u7B7E\u9875 Tabs"}})])]))}});function nu(e){e.__sourceCode=`<template>\r
  <jw-tabs v-model="selected">\r
    <jw-tab title="\u5E72\u561B">\u5E72\u561B</jw-tab>\r
    <jw-tab title="\u542C">\u542C</jw-tab>\r
    <jw-tab title="\u82E6\u60C5\u6B4C">\u82E6\u60C5\u6B4C</jw-tab>\r
    <jw-tab title="\u4EE5\u4E3A\u591A\u70C2\u6F2B">\u4EE5\u4E3A\u591A\u70C2\u6F2B</jw-tab>\r
  </jw-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("\u5E72\u561B");\r
<\/script>`,e.__sourceCodeTitle=" \u57FA\u7840\u7528\u6CD5 "}const Nh=d("\u5E72\u561B"),Jh=d("\u542C"),Lh=d("\u82E6\u60C5\u6B4C"),Wh=d("\u4EE5\u4E3A\u591A\u70C2\u6F2B"),ou=v({setup(e){const o=y("\u5E72\u561B");return(n,u)=>{const r=f("jw-tab"),s=f("jw-tabs");return a(),w(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c)},{default:l(()=>[t(r,{title:"\u5E72\u561B"},{default:l(()=>[Nh]),_:1}),t(r,{title:"\u542C"},{default:l(()=>[Jh]),_:1}),t(r,{title:"\u82E6\u60C5\u6B4C"},{default:l(()=>[Lh]),_:1}),t(r,{title:"\u4EE5\u4E3A\u591A\u70C2\u6F2B"},{default:l(()=>[Wh]),_:1})]),_:1},8,["modelValue"])}}});typeof nu=="function"&&nu(ou);function uu(e){e.__sourceCode=`<template>\r
  <jw-tabs v-model="selected" type="card">\r
    <jw-tab title="\u5E72\u561B">\u5E72\u561B</jw-tab>\r
    <jw-tab title="\u542C">\u542C</jw-tab>\r
    <jw-tab title="\u82E6\u60C5\u6B4C">\u82E6\u60C5\u6B4C</jw-tab>\r
    <jw-tab title="\u4EE5\u4E3A\u591A\u70C2\u6F2B">\u4EE5\u4E3A\u591A\u70C2\u6F2B</jw-tab>\r
  </jw-tabs>\r
</template>\r
<script setup lang="ts">\r
import { ref } from "vue";\r
\r
const selected = ref("\u5E72\u561B");\r
<\/script>`,e.__sourceCodeTitle=" \u5361\u7247\u98CE\u683C "}const qh=d("\u5E72\u561B"),Gh=d("\u542C"),Kh=d("\u82E6\u60C5\u6B4C"),Yh=d("\u4EE5\u4E3A\u591A\u70C2\u6F2B"),ru=v({setup(e){const o=y("\u5E72\u561B");return(n,u)=>{const r=f("jw-tab"),s=f("jw-tabs");return a(),w(s,{modelValue:o.value,"onUpdate:modelValue":u[0]||(u[0]=c=>o.value=c),type:"card"},{default:l(()=>[t(r,{title:"\u5E72\u561B"},{default:l(()=>[qh]),_:1}),t(r,{title:"\u542C"},{default:l(()=>[Gh]),_:1}),t(r,{title:"\u82E6\u60C5\u6B4C"},{default:l(()=>[Kh]),_:1}),t(r,{title:"\u4EE5\u4E3A\u591A\u70C2\u6F2B"},{default:l(()=>[Yh]),_:1})]),_:1},8,["modelValue"])}}});typeof uu=="function"&&uu(ru);const Xh=i("h1",null,"Tabs \u6807\u7B7E\u9875",-1),Qh=i("p",null,"\u5728\u540C\u4E00\u5757\u533A\u57DF\u5207\u6362\u5185\u5BB9\u3002",-1),Zh={class:"preview-wrapper"},ef=v({setup(e){const o=[["v-model","\u7ED1\u5B9A\u503C","boolean","-","-"],["type","\u98CE\u683C\u7C7B\u578B","string","line / card","-"]];return(n,u)=>(a(),p(E,null,[Xh,Qh,i("div",Zh,[t(g,{component:ou}),t(g,{component:ru}),t(k,{title:"\u5C5E\u6027",type:"prop",body:o}),t(O,{prev:{path:"/doc/page-header",name:"\u9875\u5934 PggeHeader"}})])],64))}}),tf=e=>be(Ds,{content:e,key:e}),nf=tf(As),Ce={\u6587\u6863:[{path:"intro",component:nf,name:"\u4ECB\u7ECD"}],\u901A\u7528\u7EC4\u4EF6:[{path:"avatar",component:la,name:"Avatar \u5934\u50CF"},{path:"button",component:lc,name:"Button \u6309\u94AE"},{path:"divider",component:jc,name:"Divider \u5206\u5272\u7EBF"},{path:"ellipsis",component:Lc,name:"Ellipsis \u6587\u672C\u7701\u7565"},{path:"gradient-text",component:Vi,name:"GradientText \u6E10\u53D8\u6587\u5B57"},{path:"icon",component:Ri,name:"Icon \u56FE\u6807"},{path:"link",component:pd,name:"Link \u94FE\u63A5"},{path:"tag",component:qd,name:"Tag \u6807\u7B7E"},{path:"colorPicker",component:u_,name:"Color Picker \u9009\u62E9\u5668"}],\u6570\u636E\u5F55\u5165\u7EC4\u4EF6:[{path:"checkbox",component:h_,name:"Checkbox \u590D\u9009\u6846"},{path:"input",component:w_,name:"Input \u8F93\u5165\u6846"},{path:"radio",component:Z_,name:"Radio \u5355\u9009\u6846"},{path:"select",component:up,name:"Select \u9009\u62E9\u5668"},{path:"switch",component:ap,name:"Switch \u5F00\u5173"}],\u53CD\u9988\u7EC4\u4EF6:[{path:"alert",component:fp,name:"Alert \u63D0\u793A"},{path:"dialog",component:wp,name:"Dialog \u5BF9\u8BDD\u6846"},{path:"drawer",component:Ap,name:"Drawer \u62BD\u5C49"},{path:"message",component:Kp,name:"Message \u4FE1\u606F"}],\u5BFC\u822A\u7EC4\u4EF6:[{path:"affix",component:ih,name:"Affix \u56FA\u9489"},{path:"backtop",component:wh,name:"Backtop \u56DE\u5230\u9876\u90E8"},{path:"breadcrumb",component:Ph,name:"Breadcrumb \u9762\u5305\u5C51"},{path:"page-header",component:Hh,name:"PageHeader \u9875\u5934"},{path:"tabs",component:ef,name:"Tabs \u6807\u7B7E\u9875"}]};let ke=[];for(let e in Ce)ke=[...ke,...Ce[e]];const of={class:"layout"},uf={class:"content"},rf={class:"menu"},lf={class:"menu-group-title text-overflow"},sf=i("svg",{class:"icon","aria-hidden":"true"},[i("use",{"xlink:href":"#icon-arrow-right"})],-1),af=[sf],cf=v({setup(e){const o=oe("asideVisible"),n=oe("clientWidth"),u=()=>{o.value=!o.value},r=C(()=>({left:o.value?"0px":"-285px"})),s=C(()=>({left:o.value?"285px":"0px",transform:o.value?"rotate(180deg) translateX(50%)":"rotate(0deg) translateX(50%)"})),c=C(()=>n.value<500?{"padding-left":"24px"}:{"padding-left":o.value?"325px":"60px"}),m=(B,b=10,x=10)=>{let $=B.scrollTop;const A=setInterval(()=>{$-=b,$<=0?(clearInterval(A),B.scrollTop=0):B.scrollTop=$},x)},h=()=>{const B=document.getElementById("doc-content-container");m(B,80,10)};return(B,b)=>{const x=f("router-link"),$=f("router-view");return a(),p("div",of,[t(Je,{class:"nav"}),i("div",uf,[i("aside",{style:L(_(r))},[i("div",rf,[(a(!0),p(E,null,Y(_(Ce),(A,S)=>(a(),p("div",{class:"menu-group",key:S},[i("span",lf,P(S)+P(S!=="\u6587\u6863"?`\uFF08${A.length}\uFF09`:""),1),(a(!0),p(E,null,Y(A,(R,z)=>(a(),w(x,{key:z,class:"menu-item text-overflow",to:`/doc/${R.path}`},{default:l(()=>[d(P(R.name),1)]),_:2},1032,["to"]))),128))]))),128))])],4),i("div",{class:"toggle-button",onClick:u,style:L(_(s))},af,4),i("main",{style:L(_(c)),id:"doc-content-container"},[t($)],4),i("div",{class:"top-button",onClick:h},"\u{1F53C}")])])}}}),df={style:{size:"20px"}},_f=i("svg",{xmlns:"http://www.w3.org/2000/svg",width:"32",height:"32",fill:"green",viewBox:"0 0 512 512",opacity:".9"},[i("path",{d:"M368.5 240H272v-96.5c0-8.8-7.2-16-16-16s-16 7.2-16 16V240h-96.5c-8.8 0-16 7.2-16 16 0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7H240v96.5c0 4.4 1.8 8.4 4.7 11.3 2.9 2.9 6.9 4.7 11.3 4.7 8.8 0 16-7.2 16-16V272h96.5c8.8 0 16-7.2 16-16s-7.2-16-16-16z"})],-1),pf=[_f],hf=v({setup(e){return(o,n)=>(a(),p("div",df,pf))}}),ff=Vu(),lu=zu({history:ff,routes:[{path:"/",redirect:"/home"},{path:"/demo",component:hf},{path:"/home",component:ks},{path:"/doc",redirect:"/doc/intro",component:cf,children:ke}]}),mf={setup(e){const o=y(null);o.value=document.documentElement.clientWidth;const n=y(!(o.value<=500));return se("asideVisible",n),se("clientWidth",o),lu.afterEach(()=>{o.value<=500&&(n.value=!1)}),window.onresize=()=>{o.value=document.body.clientWidth,o.value<=500?n.value=!1:n.value=!0},(u,r)=>{const s=f("router-view");return a(),w(s)}}},Fe=Tu(mf);Fe.use(lu);Fe.use(is);Fe.mount("#app");
