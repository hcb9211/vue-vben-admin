import{d as e,h as t,o as i,i as r,bw as o,j as s}from"./index.41be92f1.js";import{D as d}from"./index.6b94a76a.js";import{D as a}from"./index.d30021a9.js";import{_ as m}from"./index.3b640060.js";import{_ as n}from"./index.f4701c19.js";import{refundSchema as p,refundData as c,personSchema as j,personData as l,refundTableData as u,refundTableSchema as f,refundTimeTableSchema as b,refundTimeTableData as x}from"./data.7e1e31e1.js";import{u as g}from"./useTable.778e9748.js";import"./vendor.3b1829c7.js";import"./index.5e6035f5.js";import"./responsiveObserve.c545f1cc.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./RightOutlined.3aed54ec.js";/* empty css              */import"./useTimeout.b575b9d4.js";import"./useScrollTo.d04f868c.js";import"./get.84c2e3a2.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./BasicForm.9cd9c448.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.af08b3bd.js";import"./EyeOutlined.1c6e9165.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.7ddc5d25.js";import"./useModal.48ad3b85.js";import"./useWindowSizeFn.a1fff282.js";import"./FullscreenOutlined.6f1a37a8.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";import"./index.e2903347.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./useSortable.9e128bf1.js";import"./useExpose.b601eeb9.js";import"./index.c773b8e7.js";import"./index.29417513.js";import"./usePageContext.ad6a9e64.js";import"./ArrowLeftOutlined.4891e66a.js";import"./index.53523cb0.js";import"./isNumeric.2bec345d.js";var h=e({components:{Description:a,BasicTable:m,PageWrapper:n,[d.name]:d},setup(){const[e]=g({title:"退货商品",dataSource:u,columns:f,pagination:!1,showIndexColumn:!1,scroll:{y:300},showSummary:!0,summaryFunc:function(e){let t=0,i=0;return e.forEach((e=>{t+=e.t5,i+=e.t6})),[{t1:"总计",t5:t,t6:i}]}}),[t]=g({title:"退货进度",columns:b,pagination:!1,dataSource:x,showIndexColumn:!1,scroll:{y:300}});return{registerRefundTable:e,registerTimeTable:t,refundSchema:p,refundData:c,personSchema:j,personData:l}}});const O=o("data-v-ada482fc"),D=O(((e,o,d,a,m,n)=>{const p=t("Description"),c=t("a-divider"),j=t("BasicTable"),l=t("PageWrapper");return i(),r(l,{title:"基础详情页",contentBackground:""},{default:O((()=>[s(p,{size:"middle",title:"退款申请",bordered:!1,column:3,data:e.refundData,schema:e.refundSchema},null,8,["data","schema"]),s(c),s(p,{size:"middle",title:"用户信息",bordered:!1,column:3,data:e.personData,schema:e.personSchema},null,8,["data","schema"]),s(c),s(j,{onRegister:e.registerRefundTable},null,8,["onRegister"]),s(c),s(j,{onRegister:e.registerTimeTable},null,8,["onRegister"])])),_:1})}));h.render=D,h.__scopeId="data-v-ada482fc";export default h;
