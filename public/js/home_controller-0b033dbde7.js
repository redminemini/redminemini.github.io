!function(e){function t(i){if(n[i])return n[i].exports;var s=n[i]={exports:{},id:i,loaded:!1};return e[i].call(s.exports,s,s.exports,t),s.loaded=!0,s.exports}var n={};t.m=e,t.c=n,t.p="/js/",t(0)}([function(e,t){"use strict";!function(){function e(e,t,n){function i(e){return c.resjsontasks.filter(function(t){return t.id_list==e})}function s(e){for(var t=0;t<e.length;t++)c["list_"+e[t].id]=i(e[t].id),c["list_"+e[t].id].name=e[t].name,c.rawScreens.push(c["list_"+e[t].id])}function r(e,t){event.preventDefault(),c["list_"+e].splice(_.indexOf(c["list_"+e],_.find(c["list_"+e],function(e){return e.id===t})),1),c.resjsontasks.splice(_.indexOf(c.resjsontasks,_.find(c.resjsontasks,function(e){return e.id===t})),1)}function l(){c.rawScreens=[],s(c.resgetJsonLists)}function a(e,t,n){event.preventDefault();var i=_.find(c["list_"+e],function(e){return e.id===t});for(var s in i)c["html_"+s]=i[s];c.html_t_index=n+1,$("#openModal").fadeToggle()}function o(e,t){return $.map(e,function(e,n){if(e.id==t)return n})[0]}function d(){e.GetAll().then(function(e){c.allUsers=e})}var c=this;c.tasck_limit=15,c.ngGridView=null,c.user=null,c.allUsers=[],c.deleteUser=function(t){e.Delete(t).then(function(){d()})},c.exit_modal=function(){event.preventDefault(),$(".modalDialog").fadeToggle()},c.savetasck=function(e,t,n){if(event.preventDefault(),1==confirm("Сохранить?")){var i=o(c.resjsontasks,t);for(var s in c.resjsontasks[0])"$$hashKey"!=s&&("date"==s||"title"==s?"date"==s?c.resjsontasks[i].date=$("#dtpckr")[0].value:c.resjsontasks[i].title=$("#ttl")[0].value:c.resjsontasks[i][s]=c["html_"+s]);1==c.change&&(l(),c.change=!1)}$(".modalDialog").fadeToggle()},c.edittasck=a,c.deltasck=r,c.addtasck=function(e){if(event.preventDefault(),c["list_"+e].length<c.tasck_limit){var t=c.resjsontasks[0],n="{";for(var i in t)"id"!=i?"title"==i?n=n+'"'+i+'": "NewTasck '+e+f+'",':"id_list"==i?n=n+'"'+i+'": '+Number(e):"description"==i||"date"==i?n="date"==i?n+'"'+i+'" : "08.12.2017",':n+'"'+i+'" : "1",':"$$hashKey"!=i&&(n=n+'"'+i+'" : 1,'):n=n+'"id" : '+Math.floor(Date.now()/1e3)+",";n+="}",c.resjsontasks.push(JSON.parse(n)),l(),f++}},c.def_click=function(){event.preventDefault()},c.finish_loader=function(){$("#loader").is(":visible")&&$("#loader").fadeToggle()},c.start_loader=function(){$("#loader").is(":visible")||$("#loader").fadeToggle()},c.logModels=function(){c.sortingLog=[];for(var e=0;e<c.rawScreens.length;e++){var t=c.rawScreens[e].map(function(e){return e.title+"-"+e.id_list+"|"}).join(", ");t="container "+(e+1)+": "+t,c.sortingLog.push(t)}},c.my_alert=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"def";if(0==n&&r(t,e),1==n){for(var i=null,s=0;s<c["list_"+t].length;s++)c["list_"+t][s].id==e&&(i=s);a(t,e,i)}},c.change_list=function(){c.change=!0},c.change=!1,c.rawScreens=[],c.sortingLog=[],c.resjsontasks=[],c.resgetJsonLists=[],c.sortableOptions={placeholder:"app",connectWith:".apps-container",update:function(e,t){!t.item.sortable.received&&t.item.sortable.source[0]!==t.item.sortable.droptarget[0]&&t.item.sortable.droptargetModel.length>=c.tasck_limit&&t.item.sortable.cancel()},stop:function(e,t){for(var n=function(e){c.rawScreens[e].map(function(t){t.id_list=e+1})},i=0;i<c.rawScreens.length;i++)n(i)}},$("#dtpckr").datepicker();var u=[];e.GetByUsername(n.globals.currentUser.username).then(function(e){c.user=e}),d(),c.resgetJsonLists=t.getResultFromJson("db/listsName.json"),c.resjsontasks=t.getResultFromJson("db/tasks.json"),s(c.resgetJsonLists),u=t.getResultFromJson("db/gridname.json"),function(){c.ngGridView={data:"vm.resjsontasks",showSelectionCheckbox:!0,showFooter:!0,enableColumnResize:!0,enableCellSelection:!1,enableRowSelection:!0,enableCellEdit:!1,headerRowHeight:65,showFilter:!0,filterOptions:c.filterOptions,columnDefs:[]},c.filterOptions={filterText:"",useExternalFilter:!0};var e=void 0;c.status=[{id:1,name:"Ожидает"},{id:2,name:"В работе"},{id:3,name:"Выполнено"}];var t=void 0;c.dragndrop_list=[{id:1,name:"План"},{id:2,name:"В процессе"},{id:3,name:"Готово"}];for(var n=u.sort(function(e,t){return e.sort-t.sort}),i=0;i<n.length;i++)"$$hashKey"!=n[i].id&&("execution_status"==n[i].id||"id_list"==n[i].id?(t="execution_status"==n[i].id?"<select disabled ng-cell-input ng-options='s.id as s.name for s in vm.status'ng-class='colt'ng-model='COL_FIELD'ng-input='COL_FIELD'data-placeholder='-- Select One --'></select>":"<select disabled ng-cell-input ng-options='s.id as s.name for s in vm.dragndrop_list'ng-class='colt'ng-model='COL_FIELD'ng-input='COL_FIELD'data-placeholder='-- Select One --'></select>",e='{"field" : "'+n[i].id+'","cellTemplate" : "'+t+'"}',c.ngGridView.columnDefs.push(JSON.parse(e))):(e='{"field" : "'+n[i].id+'","displayName" : "'+u[i].id+'"}',c.ngGridView.columnDefs.push(JSON.parse(e))));for(var s=["id"],r=0;r<s.length;r++)for(var l=0;l<c.ngGridView.columnDefs.length;l++)if(c.ngGridView.columnDefs[l].field==s[r])c.ngGridView.columnDefs[l].visible=!1;else{var a=o(u,c.ngGridView.columnDefs[l].field);c.ngGridView.columnDefs[l].displayName=u[a].gridname,c.ngGridView.columnDefs[l].width=u[a].width}var d="<i class='fa fa-pencil-square-o btn btn-success btn-sm' ng-click='vm.my_alert(row.entity.id,row.entity.id_list,1)'></i>\"";e='{"field": "edit", "displayName": "...", "width": 40, "cellTemplate": "'+d+"}",c.ngGridView.columnDefs.push(JSON.parse(e)),e='{"field": "delete", "displayName": "...", "width": 40, "cellTemplate": "'+(d="<div><i class='fa fa-trash-o btn btn-danger btn-sm' ng-click='vm.my_alert(row.entity.id,row.entity.id_list,0)'></i></div>\"")+"}",c.ngGridView.columnDefs.push(JSON.parse(e))}();var f=0}angular.module("app").controller("HomeController",e),e.$inject=["UserService","JsonService","$rootScope"]}()}]);