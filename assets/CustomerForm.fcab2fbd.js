import{d as e,bW as i,g as t,h as o,o as r,i as s,w as d,j as n}from"./index.41be92f1.js";import{I as a}from"./index.af08b3bd.js";import{f as p}from"./BasicForm.9cd9c448.js";import{u as m}from"./useForm.1e9d3d2f.js";import{d as l}from"./ScrollContainer.5baac586.js";import{_ as f}from"./index.f4701c19.js";import"./vendor.3b1829c7.js";import"./SearchOutlined.3fc1b6fa.js";import"./EyeOutlined.1c6e9165.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.bae81d9f.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RightOutlined.3aed54ec.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";/* empty css              */import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.7ddc5d25.js";import"./useModal.48ad3b85.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.6b94a76a.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./index.2171726d.js";import"./useScrollTo.d04f868c.js";import"./index.c773b8e7.js";import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./transButton.07e10db0.js";import"./ArrowLeftOutlined.4891e66a.js";const u=[{field:"field1",component:"Input",label:"render方式",colProps:{span:8},rules:[{required:!0}],render:({model:e,field:t})=>i(a,{placeholder:"请输入",value:e[t],onChange:i=>{e[t]=i.target.value}})},{field:"field2",component:"Input",label:"render组件slot",colProps:{span:8},rules:[{required:!0}],renderComponentContent:()=>({suffix:()=>"suffix"})},{field:"field3",component:"Input",label:"自定义Slot",slot:"f3",colProps:{span:8},rules:[{required:!0}]}];var c=e({components:{BasicForm:p,CollapseContainer:l,PageWrapper:f,[a.name]:a},setup(){const{createMessage:e}=t(),[i,{setProps:o}]=m({labelWidth:120,schemas:u,actionColOptions:{span:24}});return{register:i,schemas:u,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))},setProps:o}}});c.render=function(e,i,t,a,p,m){const l=o("a-input"),f=o("BasicForm"),u=o("CollapseContainer"),c=o("PageWrapper");return r(),s(c,{title:"自定义组件示例"},{default:d((()=>[n(u,{title:"自定义表单"},{default:d((()=>[n(f,{onRegister:e.register,onSubmit:e.handleSubmit},{f3:d((({model:e,field:i})=>[n(l,{value:e[i],"onUpdate:value":t=>e[i]=t,placeholder:"自定义slot"},null,8,["value","onUpdate:value"])])),_:1},8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default c;
