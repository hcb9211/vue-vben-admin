import{d as e,aK as n,aB as o,K as s,e as t,aP as a,h as r,o as c,i as d,j as l}from"./index.41be92f1.js";import{d as i}from"./useHeaderSetting.1b45e11b.js";import"./vendor.3b1829c7.js";var u=e({name:"FoldButton",components:{Icon:n},setup(){const{prefixCls:e}=o("multiple-tabs-content"),{getShowMenu:n,setMenuSetting:r}=a(),{getShowHeader:c,setHeaderSetting:d}=i(),l=s((()=>!t(n)&&!t(c)));return{prefixCls:e,getIcon:s((()=>t(l)?"codicon:screen-normal":"codicon:screen-full")),handleFold:function(){const e=!t(n)&&!t(c);r({show:e,hidden:!e}),d({show:e})}}}});u.render=function(e,n,o,s,t,a){const i=r("Icon");return c(),d("span",{class:`${e.prefixCls}__extra-fold`,onClick:n[1]||(n[1]=(...n)=>e.handleFold&&e.handleFold(...n))},[l(i,{icon:e.getIcon},null,8,["icon"])],2)};export default u;
