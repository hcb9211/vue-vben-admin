import{d as e,aK as t,aG as r,r as a,aQ as n,aB as i,dP as o,aZ as s,bg as l,bQ as u,aS as d,t as c,aC as m,bI as p,aD as h,h as f,o as v,i as b,j as g,w as j,k,l as C,m as B}from"./index.41be92f1.js";import{B as x}from"./index.c773b8e7.js";import"./index.22704268.js";/* empty css              */import"./vendor.3b1829c7.js";import"./DownOutlined.53f083db.js";import"./RightOutlined.3aed54ec.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./isEqual.e72cf159.js";import"./toInteger.e5093268.js";var y=e({name:"LayoutBreadcrumb",components:{Icon:t,[x.name]:x},props:{theme:r.oneOf(["dark","light"])},setup(){const e=a([]),{currentRoute:t}=n(),{prefixCls:r}=i("layout-breadcrumb"),{getShowBreadCrumbIcon:f}=l(),{t:v}=o();return s((()=>{var r,a;if(t.value.name===d)return;const n=null==(r=t.value)?void 0:r.matched;if(!n||0===n.length)return;let i=function(e){let t=p(e,(e=>{const{meta:t}=e;if(!t)return!1;const{title:r,hideBreadcrumb:a,hideMenu:n}=t;return!(!r||a||n)})).filter((e=>{var t,r;return!(null==(t=e.meta)?void 0:t.hideBreadcrumb)||!(null==(r=e.meta)?void 0:r.hideMenu)}));return t=t.filter((e=>e.path!==m.BASE_HOME)),t}(c(n));const o=i.filter((e=>e.path!==m.BASE_HOME));o.length===i.length&&o.unshift({path:m.BASE_HOME,meta:{title:v("layout.header.home"),isLink:!0}}),(null==(a=t.value.meta)?void 0:a.currentActiveMenu)&&o.push(t.value),e.value=o})),{routes:e,t:v,prefixCls:r,getShowBreadCrumbIcon:f,handleClick:function(e,t,r){null==r||r.preventDefault();const{children:a,redirect:n,meta:i}=e;if((null==a?void 0:a.length)&&!n)return void(null==r||r.stopPropagation());if(null==i?void 0:i.carryParam)return;const o=h();if(n&&u(n))o(n);else{const e=t.slice(1),r=e.pop()||"";let a=`${e.pop()||""}/${r}`;a=/^\//.test(a)?a:`/${a}`,o(a)}},hasRedirect:function(e,t){var r;return!!(null==(r=null==t?void 0:t.meta)?void 0:r.isLink)||e.indexOf(t)!==e.length-1}}}});const E={key:1};y.render=function(e,t,r,a,n,i){const o=f("Icon"),s=f("router-link"),l=f("a-breadcrumb");return v(),b("div",{class:[e.prefixCls,`${e.prefixCls}--${e.theme}`]},[g(l,{routes:e.routes},{itemRender:j((({route:t,routes:r,paths:a})=>[e.getShowBreadCrumbIcon&&t.meta.icon?(v(),b(o,{key:0,icon:t.meta.icon},null,8,["icon"])):k("",!0),e.hasRedirect(r,t)?(v(),b(s,{key:2,to:"",onClick:r=>e.handleClick(t,a,r)},{default:j((()=>[B(C(e.t(t.meta.title)),1)])),_:2},1032,["onClick"])):(v(),b("span",E,C(e.t(t.meta.title)),1))])),_:1},8,["routes"])],2)};export default y;
