import{a as n}from"./chunk-PWO73WCS.js";import"./chunk-JETA45ND.js";import"./chunk-YS6PZWGZ.js";import"./chunk-T6RW5EH5.js";import{Ob as d,_a as m,fa as o,hb as r,ob as s,qa as i}from"./chunk-LQQLQJWH.js";var c=class p extends n{dataSource=[{title:"App 1, com.example.app3",createdAt:new Date,updatedAt:new Date,createdBy:"User 1",updatedBy:"User 1",status:"Em Andamento",appName:"App 1",packageName:"com.example.app2"},{title:"App 2, com.example.app2",createdAt:new Date,updatedAt:new Date,createdBy:"User 2",updatedBy:"User 2",status:"Encerrado",appName:"App 2",packageName:"com.example.app2"},{title:"App 3, com.example.app3",createdAt:new Date,updatedAt:new Date,createdBy:"User 3",updatedBy:"User 3",status:"Em Andamento",appName:"App 3",packageName:"com.example.app3"},{title:"App 4, com.example.app4",createdAt:new Date,updatedAt:new Date,createdBy:"User 4",updatedBy:"User 4",status:"Encerrado",appName:"App 4",packageName:"com.example.app4"}];ngOnInit(){super.ngOnInit();let a=[{columnDef:"appName",header:"Nome do Aplicativo",cell:e=>`${e.appName}`},{columnDef:"packageName",header:"Nome do Pacote",cell:e=>`${e.packageName}`}];this.dynamicColumns=[...this.dynamicColumns,...a]}static \u0275fac=(()=>{let a;return function(t){return(a||(a=i(p)))(t||p)}})();static \u0275cmp=o({type:p,selectors:[["app-app-registration"]],standalone:!0,features:[m,d],decls:1,vars:2,consts:[[3,"dataSource","dynamicColumns"]],template:function(e,t){e&1&&s(0,"app-request-table",0),e&2&&r("dataSource",t.dataSource)("dynamicColumns",t.dynamicColumns)},dependencies:[n]})};export{c as AppRegistrationComponent};
