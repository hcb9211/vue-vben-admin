import{_ as e}from"./index.3b640060.js";import{d as t,h as o,o as i,i as n,j as r,w as s,m as d}from"./index.41be92f1.js";import{_ as a}from"./BasicForm.9cd9c448.js";import{u as l}from"./useTable.778e9748.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.22704268.js";import"./RightOutlined.3aed54ec.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./index.e2903347.js";import"./LeftOutlined.4068ffc4.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./util.cef41d7b.js";import"./DeleteOutlined.3856c40d.js";import"./EyeOutlined.1c6e9165.js";import"./Dropdown.1e5f78a1.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./index.af08b3bd.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./useSortable.9e128bf1.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./useModal.48ad3b85.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.6b94a76a.js";import"./useExpose.b601eeb9.js";import"./index.4ed7cd6b.js";import"./index.795d984c.js";import"./RedoOutlined.46403121.js";import"./Tree.819df2d6.js";import"./index.7ddc5d25.js";import"./index.3b68a10f.js";import"./download.95ca2ef5.js";const m=[{title:"成员姓名",dataIndex:"name",editRow:!0},{title:"工号",dataIndex:"no",editRow:!0},{title:"所属部门",dataIndex:"dept",editRow:!0}],c=[{name:"John Brown",no:"00001",dept:"New York No. 1 Lake Park"},{name:"John Brown2",no:"00002",dept:"New York No. 2 Lake Park"},{name:"John Brown3",no:"00003",dept:"New York No. 3Lake Park"}];var p=t({components:{BasicTable:e,TableAction:a},setup(){const[e,{getDataSource:t}]=l({columns:m,showIndexColumn:!1,dataSource:c,actionColumn:{width:160,title:"操作",dataIndex:"action",slots:{customRender:"action"}},pagination:!1});function o(e){var t;null==(t=e.onEdit)||t.call(e,!0)}function i(e){var o;if(null==(o=e.onEdit)||o.call(e,!1),e.isNew){const o=t(),i=o.findIndex((t=>t.key===e.key));o.splice(i,1)}}function n(e){var t;null==(t=e.onEdit)||t.call(e,!1,!0)}return{registerTable:e,handleEdit:o,createActions:function(e,t){return e.editable?[{label:"保存",onClick:n.bind(null,e,t)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:i.bind(null,e,t)}}]:[{label:"编辑",onClick:o.bind(null,e)},{label:"删除"}]},handleAdd:function(){const e=t(),o={name:"",no:"",dept:"",editable:!0,isNew:!0,key:`${Date.now()}`};e.push(o)},getDataSource:t}}});const j=d(" 新增成员 ");p.render=function(e,t,d,a,l,m){const c=o("TableAction"),p=o("BasicTable"),u=o("a-button");return i(),n("div",null,[r(p,{onRegister:e.registerTable},{action:s((({record:t,column:o})=>[r(c,{actions:e.createActions(t,o)},null,8,["actions"])])),_:1},8,["onRegister"]),r(u,{block:"",class:"mt-5",type:"dashed",onClick:e.handleAdd},{default:s((()=>[j])),_:1},8,["onClick"])])};export default p;
