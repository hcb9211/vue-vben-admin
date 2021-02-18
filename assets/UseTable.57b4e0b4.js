import{_ as e}from"./index.3b640060.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,g as s,h as n,o as a,i as l,j as r,w as c,m as d}from"./index.41be92f1.js";import{d as m}from"./table.8fe731e1.js";import{u as p}from"./useTable.778e9748.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./BasicForm.9cd9c448.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.af08b3bd.js";import"./EyeOutlined.1c6e9165.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RightOutlined.3aed54ec.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";/* empty css              */import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.7ddc5d25.js";import"./useModal.48ad3b85.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.6b94a76a.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";import"./index.e2903347.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./useSortable.9e128bf1.js";import"./useExpose.b601eeb9.js";var f=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:l,getDataSource:r,reload:c,getPaginationRef:d,setPagination:f,getSelectRows:u,getSelectRowKeys:j,setSelectedRowKeys:b,clearSelectedRowKeys:g}]=p({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),c({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),c()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){b(["0","1","2"])},clearSelect:function(){g()}}}});const u={class:"p-4"},j={class:"mb-4"},b=d(" 还原 "),g=d(" 开启loading "),C=d(" 更改Columns "),k=d(" 获取Columns "),x=d(" 获取表格数据 "),S=d(" 跳转到第2页 "),w={class:"mb-4"},T=d(" 获取选中行 "),R=d(" 获取选中行Key "),O=d(" 设置选中行 "),_=d(" 清空选中行 "),y=d(" 获取分页信息 ");f.render=function(e,t,i,o,s,d){const m=n("a-button"),p=n("BasicTable");return a(),l("div",u,[r("div",j,[r(m,{class:"mr-2",onClick:e.reloadTable},{default:c((()=>[b])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeLoading},{default:c((()=>[g])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.changeColumns},{default:c((()=>[C])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getColumn},{default:c((()=>[k])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getTableData},{default:c((()=>[x])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:c((()=>[S])),_:1},8,["onClick"])]),r("div",w,[r(m,{class:"mr-2",onClick:e.getSelectRowList},{default:c((()=>[T])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:c((()=>[R])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:c((()=>[O])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.clearSelect},{default:c((()=>[_])),_:1},8,["onClick"]),r(m,{class:"mr-2",onClick:e.getPagination},{default:c((()=>[y])),_:1},8,["onClick"])]),r(p,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;
