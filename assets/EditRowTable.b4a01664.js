import{_ as e}from"./index.3b640060.js";import{o as t}from"./select.2cc96a70.js";import{d as i}from"./table.8fe731e1.js";import{d as o,r as d,h as n,o as a,i as s,j as r,w as l}from"./index.41be92f1.js";import{_ as m}from"./BasicForm.9cd9c448.js";import{u as p}from"./useTable.778e9748.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.22704268.js";import"./RightOutlined.3aed54ec.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./index.e2903347.js";import"./LeftOutlined.4068ffc4.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./util.cef41d7b.js";import"./DeleteOutlined.3856c40d.js";import"./EyeOutlined.1c6e9165.js";import"./Dropdown.1e5f78a1.js";/* empty css              */import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./index.af08b3bd.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./useSortable.9e128bf1.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./useModal.48ad3b85.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.6b94a76a.js";import"./useExpose.b601eeb9.js";import"./index.4ed7cd6b.js";import"./index.795d984c.js";import"./RedoOutlined.46403121.js";import"./Tree.819df2d6.js";import"./index.7ddc5d25.js";import"./index.3b68a10f.js";import"./download.95ca2ef5.js";const c=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:200},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:200},{title:"输入框校验",dataIndex:"name1",editRow:!0,editRule:!0,width:200},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,editRule:async e=>"2"===e?"不能输入该值":"",width:200},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:200},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:t},width:200},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:200},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:200}];var u=o({components:{BasicTable:e,TableAction:m},setup(){const e=d(""),[t]=p({title:"可编辑行示例",api:i,columns:c,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(t){var i;e.value=t.key,null==(i=t.onEdit)||i.call(t,!0)}function n(t){var i;e.value="",null==(i=t.onEdit)||i.call(t,!1,!1)}async function a(t){var i;await(null==(i=t.onEdit)?void 0:i.call(t,!1,!0))&&(e.value="")}return{registerTable:t,handleEdit:o,createActions:function(t,i){return t.editable?[{label:"保存",onClick:a.bind(null,t,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:n.bind(null,t,i)}}]:[{label:"编辑",disabled:!!e.value&&e.value!==t.key,onClick:o.bind(null,t)}]}}}});const j={class:"p-4"};u.render=function(e,t,i,o,d,m){const p=n("TableAction"),c=n("BasicTable");return a(),s("div",j,[r(c,{onRegister:e.registerTable},{action:l((({record:t,column:i})=>[r(p,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister"])])};export default u;
