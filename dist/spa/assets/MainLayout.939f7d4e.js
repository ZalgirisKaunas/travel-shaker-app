import{c as L,h as X,u as se,a as ue,b as K,d as ce,e as Z,g as de}from"./dom.3a7cc3d6.js";import{f as i,h as m,g as Q,r as C,i as Y,o as E,a as F,n as re,j as ee,l as U,k as x,w as S,m as G,p as D,q as ae,s as fe,t as H,u as ve,_ as he,d as me,c as R,e as ge,v as j,x as z,y as M,z as k,F as pe,A,B as te,C as we,D as B}from"./index.a480a32c.js";import{u as be,a as ye,S as Se,b as _e,c as qe,P as ze}from"./swiper.min.27cd4fc7.js";var ke=L({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:f}){const o=i(()=>"q-toolbar__title ellipsis"+(e.shrink===!0?" col-shrink":""));return()=>m("div",{class:o.value},X(f.default))}}),Ce=L({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:f}){const o=i(()=>"q-toolbar row no-wrap items-center"+(e.inset===!0?" q-toolbar--inset":""));return()=>m("div",{class:o.value,role:"toolbar"},X(f.default))}});const $e={xs:2,sm:4,md:6,lg:10,xl:14};function oe(e,f,o){return{transform:f===!0?`translateX(${o.lang.rtl===!0?"-":""}100%) scale3d(${-e},1,1)`:`scale3d(${e},1,1)`}}var xe=L({name:"QLinearProgress",props:{...be,...se,value:{type:Number,default:0},buffer:Number,color:String,trackColor:String,reverse:Boolean,stripe:Boolean,indeterminate:Boolean,query:Boolean,rounded:Boolean,animationSpeed:{type:[String,Number],default:2100},instantFeedback:Boolean},setup(e,{slots:f}){const{proxy:o}=Q(),n=ye(e,o.$q),t=ue(e,$e),s=i(()=>e.indeterminate===!0||e.query===!0),r=i(()=>e.reverse!==e.query),h=i(()=>({...t.value!==null?t.value:{},"--q-linear-progress-speed":`${e.animationSpeed}ms`})),c=i(()=>"q-linear-progress"+(e.color!==void 0?` text-${e.color}`:"")+(e.reverse===!0||e.query===!0?" q-linear-progress--reverse":"")+(e.rounded===!0?" rounded-borders":"")),u=i(()=>oe(e.buffer!==void 0?e.buffer:1,r.value,o.$q)),g=i(()=>`with${e.instantFeedback===!0?"out":""}-transition`),w=i(()=>`q-linear-progress__track absolute-full q-linear-progress__track--${g.value} q-linear-progress__track--${n.value===!0?"dark":"light"}`+(e.trackColor!==void 0?` bg-${e.trackColor}`:"")),$=i(()=>oe(s.value===!0?1:e.value,r.value,o.$q)),v=i(()=>`q-linear-progress__model absolute-full q-linear-progress__model--${g.value} q-linear-progress__model--${s.value===!0?"in":""}determinate`),y=i(()=>({width:`${e.value*100}%`})),b=i(()=>`q-linear-progress__stripe absolute-${e.reverse===!0?"right":"left"} q-linear-progress__stripe--${g.value}`);return()=>{const _=[m("div",{class:w.value,style:u.value}),m("div",{class:v.value,style:$.value})];return e.stripe===!0&&s.value===!1&&_.push(m("div",{class:b.value,style:y.value})),m("div",{class:c.value,style:h.value,role:"progressbar","aria-valuemin":0,"aria-valuemax":1,"aria-valuenow":e.indeterminate===!0?void 0:e.value},K(f.default,_))}}});function Le(){const e=C(!Y.value);return e.value===!1&&E(()=>{e.value=!0}),e}const ie=typeof ResizeObserver!="undefined",ne=ie===!0?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"};var N=L({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:f}){let o=null,n,t={width:-1,height:-1};function s(c){c===!0||e.debounce===0||e.debounce==="0"?r():o===null&&(o=setTimeout(r,e.debounce))}function r(){if(o!==null&&(clearTimeout(o),o=null),n){const{offsetWidth:c,offsetHeight:u}=n;(c!==t.width||u!==t.height)&&(t={width:c,height:u},f("resize",t))}}const{proxy:h}=Q();if(ie===!0){let c;const u=g=>{n=h.$el.parentNode,n?(c=new ResizeObserver(s),c.observe(n),r()):g!==!0&&ee(()=>{u(!0)})};return E(()=>{u()}),F(()=>{o!==null&&clearTimeout(o),c!==void 0&&(c.disconnect!==void 0?c.disconnect():n&&c.unobserve(n))}),re}else{let g=function(){o!==null&&(clearTimeout(o),o=null),u!==void 0&&(u.removeEventListener!==void 0&&u.removeEventListener("resize",s,U.passive),u=void 0)},w=function(){g(),n&&n.contentDocument&&(u=n.contentDocument.defaultView,u.addEventListener("resize",s,U.passive),r())};const c=Le();let u;return E(()=>{ee(()=>{n=h.$el,n&&w()})}),F(g),h.trigger=s,()=>{if(c.value===!0)return m("object",{style:ne.style,tabindex:-1,type:"text/html",data:ne.url,"aria-hidden":"true",onLoad:w})}}}}),Te=L({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:o}){const{proxy:{$q:n}}=Q(),t=G(D,x);if(t===x)return console.error("QHeader needs to be child of QLayout"),x;const s=C(parseInt(e.heightHint,10)),r=C(!0),h=i(()=>e.reveal===!0||t.view.value.indexOf("H")>-1||n.platform.is.ios&&t.isContainer.value===!0),c=i(()=>{if(e.modelValue!==!0)return 0;if(h.value===!0)return r.value===!0?s.value:0;const a=s.value-t.scroll.value.position;return a>0?a:0}),u=i(()=>e.modelValue!==!0||h.value===!0&&r.value!==!0),g=i(()=>e.modelValue===!0&&u.value===!0&&e.reveal===!0),w=i(()=>"q-header q-layout__section--marginal "+(h.value===!0?"fixed":"absolute")+"-top"+(e.bordered===!0?" q-header--bordered":"")+(u.value===!0?" q-header--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus":"")),$=i(()=>{const a=t.rows.value.top,q={};return a[0]==="l"&&t.left.space===!0&&(q[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),a[2]==="r"&&t.right.space===!0&&(q[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),q});function v(a,q){t.update("header",a,q)}function y(a,q){a.value!==q&&(a.value=q)}function b({height:a}){y(s,a),v("size",a)}function _(a){g.value===!0&&y(r,!0),o("focusin",a)}S(()=>e.modelValue,a=>{v("space",a),y(r,!0),t.animate()}),S(c,a=>{v("offset",a)}),S(()=>e.reveal,a=>{a===!1&&y(r,e.modelValue)}),S(r,a=>{t.animate(),o("reveal",a)}),S(t.scroll,a=>{e.reveal===!0&&y(r,a.direction==="up"||a.position<=e.revealOffset||a.position-a.inflectionPoint<100)});const T={};return t.instances.header=T,e.modelValue===!0&&v("size",s.value),v("space",e.modelValue),v("offset",c.value),F(()=>{t.instances.header===T&&(t.instances.header=void 0,v("size",0),v("offset",0),v("space",!1))}),()=>{const a=ce(f.default,[]);return e.elevated===!0&&a.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),a.push(m(N,{debounce:0,onResize:b})),m("header",{class:w.value,style:$.value,onFocusin:_},a)}}}),Ve=L({name:"QPageContainer",setup(e,{slots:f}){const{proxy:{$q:o}}=Q(),n=G(D,x);if(n===x)return console.error("QPageContainer needs to be child of QLayout"),x;ae(fe,!0);const t=i(()=>{const s={};return n.header.space===!0&&(s.paddingTop=`${n.header.size}px`),n.right.space===!0&&(s[`padding${o.lang.rtl===!0?"Left":"Right"}`]=`${n.right.size}px`),n.footer.space===!0&&(s.paddingBottom=`${n.footer.size}px`),n.left.space===!0&&(s[`padding${o.lang.rtl===!0?"Right":"Left"}`]=`${n.left.size}px`),s});return()=>m("div",{class:"q-page-container",style:t.value},X(f.default))}}),Qe=L({name:"QFooter",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:f,emit:o}){const{proxy:{$q:n}}=Q(),t=G(D,x);if(t===x)return console.error("QFooter needs to be child of QLayout"),x;const s=C(parseInt(e.heightHint,10)),r=C(!0),h=C(Y.value===!0||t.isContainer.value===!0?0:window.innerHeight),c=i(()=>e.reveal===!0||t.view.value.indexOf("F")>-1||n.platform.is.ios&&t.isContainer.value===!0),u=i(()=>t.isContainer.value===!0?t.containerHeight.value:h.value),g=i(()=>{if(e.modelValue!==!0)return 0;if(c.value===!0)return r.value===!0?s.value:0;const l=t.scroll.value.position+u.value+s.value-t.height.value;return l>0?l:0}),w=i(()=>e.modelValue!==!0||c.value===!0&&r.value!==!0),$=i(()=>e.modelValue===!0&&w.value===!0&&e.reveal===!0),v=i(()=>"q-footer q-layout__section--marginal "+(c.value===!0?"fixed":"absolute")+"-bottom"+(e.bordered===!0?" q-footer--bordered":"")+(w.value===!0?" q-footer--hidden":"")+(e.modelValue!==!0?" q-layout--prevent-focus"+(c.value!==!0?" hidden":""):"")),y=i(()=>{const l=t.rows.value.bottom,p={};return l[0]==="l"&&t.left.space===!0&&(p[n.lang.rtl===!0?"right":"left"]=`${t.left.size}px`),l[2]==="r"&&t.right.space===!0&&(p[n.lang.rtl===!0?"left":"right"]=`${t.right.size}px`),p});function b(l,p){t.update("footer",l,p)}function _(l,p){l.value!==p&&(l.value=p)}function T({height:l}){_(s,l),b("size",l)}function a(){if(e.reveal!==!0)return;const{direction:l,position:p,inflectionPoint:V}=t.scroll.value;_(r,l==="up"||p-V<100||t.height.value-u.value-p-s.value<300)}function q(l){$.value===!0&&_(r,!0),o("focusin",l)}S(()=>e.modelValue,l=>{b("space",l),_(r,!0),t.animate()}),S(g,l=>{b("offset",l)}),S(()=>e.reveal,l=>{l===!1&&_(r,e.modelValue)}),S(r,l=>{t.animate(),o("reveal",l)}),S([s,t.scroll,t.height],a),S(()=>n.screen.height,l=>{t.isContainer.value!==!0&&_(h,l)});const d={};return t.instances.footer=d,e.modelValue===!0&&b("size",s.value),b("space",e.modelValue),b("offset",g.value),F(()=>{t.instances.footer===d&&(t.instances.footer=void 0,b("size",0),b("offset",0),b("space",!1))}),()=>{const l=K(f.default,[m(N,{debounce:0,onResize:T})]);return e.elevated===!0&&l.push(m("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),m("footer",{class:v.value,style:y.value,onFocusin:q},l)}}});const Be=[null,document,document.body,document.scrollingElement,document.documentElement];function Pe(e,f){let o=de(f);if(o===void 0){if(e==null)return window;o=e.closest(".scroll,.scroll-y,.overflow-auto")}return Be.includes(o)?window:o}function Fe(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function He(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let O;function I(){if(O!==void 0)return O;const e=document.createElement("p"),f=document.createElement("div");Z(e,{width:"100%",height:"200px"}),Z(f,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),f.appendChild(e),document.body.appendChild(f);const o=e.offsetWidth;f.style.overflow="scroll";let n=e.offsetWidth;return o===n&&(n=f.clientWidth),f.remove(),O=o-n,O}const{passive:le}=U,Re=["both","horizontal","vertical"];var Oe=L({name:"QScrollObserver",props:{axis:{type:String,validator:e=>Re.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:f}){const o={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let n=null,t,s;S(()=>e.scrollTarget,()=>{c(),h()});function r(){n!==null&&n();const w=Math.max(0,Fe(t)),$=He(t),v={top:w-o.position.top,left:$-o.position.left};if(e.axis==="vertical"&&v.top===0||e.axis==="horizontal"&&v.left===0)return;const y=Math.abs(v.top)>=Math.abs(v.left)?v.top<0?"up":"down":v.left<0?"left":"right";o.position={top:w,left:$},o.directionChanged=o.direction!==y,o.delta=v,o.directionChanged===!0&&(o.direction=y,o.inflectionPoint=o.position),f("scroll",{...o})}function h(){t=Pe(s,e.scrollTarget),t.addEventListener("scroll",u,le),u(!0)}function c(){t!==void 0&&(t.removeEventListener("scroll",u,le),t=void 0)}function u(w){if(w===!0||e.debounce===0||e.debounce==="0")r();else if(n===null){const[$,v]=e.debounce?[setTimeout(r,e.debounce),clearTimeout]:[requestAnimationFrame(r),cancelAnimationFrame];n=()=>{v($),n=null}}}const{proxy:g}=Q();return S(()=>g.$q.lang.rtl,r),E(()=>{s=g.$el.parentNode,h()}),F(()=>{n!==null&&n(),c()}),Object.assign(g,{trigger:u,getPosition:()=>o}),re}}),Ee=L({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:f,emit:o}){const{proxy:{$q:n}}=Q(),t=C(null),s=C(n.screen.height),r=C(e.container===!0?0:n.screen.width),h=C({position:0,direction:"down",inflectionPoint:0}),c=C(0),u=C(Y.value===!0?0:I()),g=i(()=>"q-layout q-layout--"+(e.container===!0?"containerized":"standard")),w=i(()=>e.container===!1?{minHeight:n.screen.height+"px"}:null),$=i(()=>u.value!==0?{[n.lang.rtl===!0?"left":"right"]:`${u.value}px`}:null),v=i(()=>u.value!==0?{[n.lang.rtl===!0?"right":"left"]:0,[n.lang.rtl===!0?"left":"right"]:`-${u.value}px`,width:`calc(100% + ${u.value}px)`}:null);function y(d){if(e.container===!0||document.qScrollPrevented!==!0){const l={position:d.position.top,direction:d.direction,directionChanged:d.directionChanged,inflectionPoint:d.inflectionPoint.top,delta:d.delta.top};h.value=l,e.onScroll!==void 0&&o("scroll",l)}}function b(d){const{height:l,width:p}=d;let V=!1;s.value!==l&&(V=!0,s.value=l,e.onScrollHeight!==void 0&&o("scrollHeight",l),T()),r.value!==p&&(V=!0,r.value=p),V===!0&&e.onResize!==void 0&&o("resize",d)}function _({height:d}){c.value!==d&&(c.value=d,T())}function T(){if(e.container===!0){const d=s.value>c.value?I():0;u.value!==d&&(u.value=d)}}let a=null;const q={instances:{},view:i(()=>e.view),isContainer:i(()=>e.container),rootRef:t,height:s,containerHeight:c,scrollbarWidth:u,totalWidth:i(()=>r.value+u.value),rows:i(()=>{const d=e.view.toLowerCase().split(" ");return{top:d[0].split(""),middle:d[1].split(""),bottom:d[2].split("")}}),header:H({size:0,offset:0,space:!1}),right:H({size:300,offset:0,space:!1}),footer:H({size:0,offset:0,space:!1}),left:H({size:300,offset:0,space:!1}),scroll:h,animate(){a!==null?clearTimeout(a):document.body.classList.add("q-body--layout-animate"),a=setTimeout(()=>{a=null,document.body.classList.remove("q-body--layout-animate")},155)},update(d,l,p){q[d][l]=p}};if(ae(D,q),I()>0){let p=function(){d=null,l.classList.remove("hide-scrollbar")},V=function(){if(d===null){if(l.scrollHeight>n.screen.height)return;l.classList.add("hide-scrollbar")}else clearTimeout(d);d=setTimeout(p,300)},W=function(J){d!==null&&J==="remove"&&(clearTimeout(d),p()),window[`${J}EventListener`]("resize",V)},d=null;const l=document.body;S(()=>e.container!==!0?"add":"remove",W),e.container!==!0&&W("add"),ve(()=>{W("remove")})}return()=>{const d=K(f.default,[m(Oe,{onScroll:y}),m(N,{onResize:b})]),l=m("div",{class:g.value,style:w.value,ref:e.container===!0?void 0:t,tabindex:-1},d);return e.container===!0?m("div",{class:"q-layout-container overflow-hidden",ref:t},[m(N,{onResize:_}),m("div",{class:"absolute-full",style:$.value},[m("div",{class:"scroll",style:v.value},[l])])]):l}}}),P="/assets/image2.9807ca1f.jpg";const Ne=[{title:"Docs",caption:"quasar.dev",icon:"school",link:"https://quasar.dev"},{title:"Github",caption:"github.com/quasarframework",icon:"code",link:"https://github.com/quasarframework"},{title:"Discord Chat Channel",caption:"chat.quasar.dev",icon:"chat",link:"https://chat.quasar.dev"},{title:"Forum",caption:"forum.quasar.dev",icon:"record_voice_over",link:"https://forum.quasar.dev"},{title:"Twitter",caption:"@quasarframework",icon:"rss_feed",link:"https://twitter.quasar.dev"},{title:"Facebook",caption:"@QuasarFramework",icon:"public",link:"https://facebook.quasar.dev"},{title:"Quasar Awesome",caption:"Community Quasar projects",icon:"favorite",link:"https://awesome.quasar.dev"}],De=me({name:"MainLayout",components:{Swiper:Se,SwiperSlide:_e},setup(){const e=C(!0),f=qe(),o=i(()=>f.step),n=i(()=>Number((.1*(o.value-1)).toFixed(1)));return{onSwiper:r=>{console.log(r)},onSlideChange:()=>{console.log("slide change")},modules:[ze],counterr:o,progressVal:n,essentialLinks:Ne,leftDrawerOpen:e,toggleLeftDrawer(){e.value=!e.value}}}}),We=B("img",{src:P},null,-1),je=B("img",{src:P},null,-1),Me=B("img",{src:P},null,-1),Ae=B("img",{src:P},null,-1),Ie=B("img",{src:P},null,-1),Ue=B("img",{src:P},null,-1);function Xe(e,f,o,n,t,s){const r=A("swiper-slide"),h=A("swiper"),c=A("router-view");return R(),ge(pe,null,[e.counterr===9?(R(),j(h,{key:0,class:"hero-swiper desktop-only hero-desktop","slides-per-view":1,pagination:{clickable:!0},onSwiper:e.onSwiper,onSlideChange:e.onSlideChange,modules:e.modules},{default:z(()=>[k(r,{class:"swiper-slide-hero"},{default:z(()=>[We]),_:1}),k(r,{class:"swiper-slide-hero"},{default:z(()=>[je]),_:1}),k(r,{class:"swiper-slide-hero"},{default:z(()=>[Me]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])):M("",!0),k(Ee,{view:"lHh Lpr lFf",class:"layout_tourastio"},{default:z(()=>[k(Te,{class:"bg-transparent"},{default:z(()=>[k(Ce,{class:te([{blur:e.counterr===9},"text-center"])},{default:z(()=>[k(ke,{class:"text-positive"},{default:z(()=>[we(" Tourastico ")]),_:1})]),_:1},8,["class"]),e.counterr===9?(R(),j(h,{key:0,class:"hero-swiper mobile-hero","slides-per-view":1,pagination:{clickable:!0},onSwiper:e.onSwiper,onSlideChange:e.onSlideChange,modules:e.modules},{default:z(()=>[k(r,{class:"swiper-slide-hero"},{default:z(()=>[Ae]),_:1}),k(r,{class:"swiper-slide-hero"},{default:z(()=>[Ie]),_:1}),k(r,{class:"swiper-slide-hero"},{default:z(()=>[Ue]),_:1})]),_:1},8,["onSwiper","onSlideChange","modules"])):M("",!0),e.counterr!==9?(R(),j(xe,{key:1,value:e.progressVal,"track-color":"warning",color:"black"},null,8,["value"])):M("",!0)]),_:1}),k(Ve,{class:te({pt:e.counterr===9})},{default:z(()=>[k(c)]),_:1},8,["class"]),k(Qe,{elevated:""})]),_:1})],64)}var Je=he(De,[["render",Xe]]);export{Je as default};
