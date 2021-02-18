import{_ as e}from"./index.3b640060.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.252346e9.js";import{d as o,r as s,g as n,e as l,h as a,o as r,i as c,j as d,w as m,m as f}from"./index.41be92f1.js";import{d as p}from"./table.8fe731e1.js";import"./index.bae81d9f.js";import"./SearchOutlined.3fc1b6fa.js";import"./CheckOutlined.fe96bf3a.js";import"./DownOutlined.53f083db.js";import"./BasicForm.9cd9c448.js";import"./index.d4aad386.js";import"./index.db893cd5.js";import"./responsiveObserve.c545f1cc.js";import"./vendor.3b1829c7.js";import"./findIndex.0e9e2104.js";import"./isEqual.e72cf159.js";import"./get.84c2e3a2.js";import"./_baseProperty.74f89655.js";import"./toInteger.e5093268.js";import"./index.4ed7cd6b.js";import"./index.af08b3bd.js";import"./EyeOutlined.1c6e9165.js";import"./index.795d984c.js";import"./index.9e860acd.js";import"./UpOutlined.f8099382.js";import"./index.023d2b7e.js";import"./RightOutlined.3aed54ec.js";import"./RedoOutlined.46403121.js";import"./index.22704268.js";import"./EllipsisOutlined.9e18b159.js";import"./types.720d150e.js";import"./Tree.819df2d6.js";import"./util.cef41d7b.js";/* empty css              */import"./uuid.993ba7f2.js";import"./index.75c7d506.js";import"./DeleteOutlined.3856c40d.js";import"./index.7ddc5d25.js";import"./useModal.48ad3b85.js";import"./useTimeout.b575b9d4.js";import"./useWindowSizeFn.a1fff282.js";import"./ScrollContainer.5baac586.js";import"./index.2171726d.js";import"./domUtils.e41c06df.js";import"./_stringToArray.38ce1be5.js";import"./useScrollTo.d04f868c.js";import"./FullscreenOutlined.6f1a37a8.js";import"./index.6b94a76a.js";import"./Dropdown.1e5f78a1.js";import"./index.3b68a10f.js";import"./LeftOutlined.4068ffc4.js";import"./download.95ca2ef5.js";import"./index.e2903347.js";import"./DoubleLeftOutlined.e3dc0472.js";import"./DoubleRightOutlined.29a60a56.js";import"./zh_CN.8094f4d6.js";import"./scrollTo.c1e0f75f.js";import"./transButton.07e10db0.js";import"./CaretDownFilled.8bbebea4.js";import"./useForm.1e9d3d2f.js";import"./clickOutside.6cea1ff3.js";import"./useSortable.9e128bf1.js";import"./useExpose.b601eeb9.js";var u=o({components:{BasicTable:e},setup(){const e=s(null),{createMessage:o}=n();function a(){const t=l(e);if(!t)throw new Error("tableAction is null");return t}return{tableRef:e,api:p,columns:t(),changeLoading:function(){a().setLoading(!0),setTimeout((()=>{a().setLoading(!1)}),1e3)},changeColumns:function(){a().setColumns(i())},reloadTable:function(){a().setColumns(t()),a().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){a().setPagination({current:2}),a().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){a().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){a().clearSelectedRowKeys()}}}});const j={class:"p-4"},b={class:"mb-4"},C=f(" 还原 "),g=f(" 开启loading "),k=f(" 更改Columns "),x=f(" 获取Columns "),w=f(" 获取表格数据 "),R=f(" 跳转到第2页 "),S={class:"mb-4"},O=f(" 获取选中行 "),_=f(" 获取选中行Key "),y=f(" 设置选中行 "),T=f(" 清空选中行 "),h=f(" 获取分页信息 ");u.render=function(e,t,i,o,s,n){const l=a("a-button"),f=a("BasicTable");return r(),c("div",j,[d("div",b,[d(l,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[C])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[g])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[x])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[R])),_:1},8,["onClick"])]),d("div",S,[d(l,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[O])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[_])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[y])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[T])),_:1},8,["onClick"]),d(l,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[h])),_:1},8,["onClick"])]),d(f,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default u;
