(this.webpackJsonptodo_app=this.webpackJsonptodo_app||[]).push([[0],{37:function(e,t,n){e.exports=n(70)},42:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r,o,a,c=n(1),u=n.n(c),i=n(18),s=n.n(i),d=(n(42),n(5)),l=n(8),p=n(12),f=n(11),m=n(13),T=n(9);n(48);!function(e){e[e.All=0]="All",e[e.Completed=1]="Completed",e[e.Uncompleted=2]="Uncompleted"}(r||(r={})),function(e){e[e.ListTodo=0]="ListTodo",e[e.AddTodo=1]="AddTodo",e[e.ToggleTodo=2]="ToggleTodo",e[e.DeleteTodo=3]="DeleteTodo",e[e.SetTodoFilter=4]="SetTodoFilter"}(o||(o={})),function(e){e.ListTodo="LIST_TODOS",e.AddTodo="ADD_TODO",e.ToggleTodo="TOGGLE_TODO",e.DeleteTodo="DELETE_TODO",e.SetTodoFilter="SET_TODO_FILTER"}(a||(a={}));var h=function e(){Object(d.a)(this,e)};h.ListTodo=function(e){return{type:o.ListTodo,todos:e}},h.AddTodo=function(e){return{todo:e,type:o.AddTodo}},h.ToggleTodo=function(e){return{id:e,type:o.ToggleTodo}},h.DeleteTodo=function(e){return{id:e,type:o.DeleteTodo}},h.SetFilter=function(e){return{filter:e,type:o.SetTodoFilter}},h.RequestListTodo=function(){return{type:a.ListTodo}},h.RequestAddTodo=function(e){return{type:a.AddTodo,text:e}},h.RequestToggleTodo=function(e){return{id:e,type:a.ToggleTodo}},h.RequestDeleteTodo=function(e){return{id:e,type:a.DeleteTodo}},h.RequestSetFilter=function(e){return{filter:e,type:a.SetTodoFilter}};var b=Object(T.b)((function(e,t){return{Checked:t.FilterType===e.CurrentFilter,FilterType:t.FilterType}}),(function(e,t){return{SetFilter:function(){return e(h.RequestSetFilter(t.FilterType))}}}))((function(e){return u.a.createElement("label",{className:"pointer"},u.a.createElement("input",{type:"radio",name:"filterType",value:e.FilterType,checked:e.Checked,onChange:e.SetFilter})," ",r[e.FilterType])})),v=function(){return u.a.createElement("div",{className:"search-todos"},u.a.createElement(b,{FilterType:r.All}),u.a.createElement(b,{FilterType:r.Completed}),u.a.createElement(b,{FilterType:r.Uncompleted}))},O=(n(49),function e(){var t=this;Object(d.a)(this,e),this.Input=void 0,this.IsEmpty=""===this.Input,this.Clear=function(){t.Input=""},this.SetInput=function(e){t.Input=e}}),j=function(e){function t(e){var n;return Object(d.a)(this,t),(n=Object(p.a)(this,Object(f.a)(t).call(this,e))).addItem=function(e){e.preventDefault(),n.state.IsEmpty||(n.props.AddTodo(n.state.Input),n.state.Clear())},n.onChange=function(e){e.preventDefault(),n.state.SetInput(e.target.value)},n.state=new O,n}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return console.log(this.state),u.a.createElement("div",{className:"add-todo-conainer"},u.a.createElement("form",{onSubmit:this.addItem},u.a.createElement("input",{className:"add-todo-input",type:"text",placeholder:"Task name",value:this.state.Input,onChange:this.onChange}),u.a.createElement("button",{type:"submit",className:"add-todo-btn"},"Add todo")))}}]),t}(c.Component),y=Object(T.b)(null,(function(e){return{AddTodo:function(t){return e(h.RequestAddTodo(t))}}}))(j),g=(n(50),function(e){function t(e){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).call(this,e))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e="todo-item";return this.props.TodoItem.Completed&&(e+=" todo-item-comleted"),u.a.createElement("li",null,u.a.createElement("label",{className:"todo-item-container pointer"},u.a.createElement("div",{className:e},this.props.TodoItem.Name),u.a.createElement("input",{type:"checkbox",checked:this.props.TodoItem.Completed,onChange:this.props.ToggleTodo})),u.a.createElement("button",{className:"remove-todo-btn",onClick:this.props.DeleteTodo},"Delete"))}}]),t}(u.a.Component)),w=Object(T.b)(null,(function(e,t){return{ToggleTodo:function(){return e(h.RequestToggleTodo(t.TodoItem.Id))},DeleteTodo:function(){return e(h.RequestDeleteTodo(t.TodoItem.Id))}}}))(g),x=function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"todo-list"},u.a.createElement("h4",null," Todo list: "),u.a.createElement(v,null),u.a.createElement(y,null),u.a.createElement("ul",null,void 0===this.props.Todos?[]:this.props.Todos.map((function(e,t){return u.a.createElement(w,{key:t,TodoItem:e})}))))}}]),t}(u.a.Component),F=function(e){switch(e.CurrentFilter){case r.Completed:return e.Todos.filter((function(e){return e.Completed}));case r.Uncompleted:return e.Todos.filter((function(e){return!e.Completed}));default:return e.Todos}},k=Object(T.b)((function(e){return{Todos:F(e)}}))(x),E=(n(51),function(e){function t(){return Object(d.a)(this,t),Object(p.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return u.a.createElement("div",{className:"app"},u.a.createElement(k,null))}}]),t}(u.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var A=n(14),C=n(36),I=n(33),D=function e(t,n,r){var o=this;Object(d.a)(this,e),this.Id=void 0,this.Name=void 0,this.Completed=void 0,this.Toogle=function(){o.Completed=!o.Completed},this.Id=t,this.Name=n,this.Completed=r};function S(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function L(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?S(n,!0).forEach((function(t){Object(I.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}D.FromApiModel=function(e){return new D(e.id,e.name,e.completed)};var N,q={Todos:[],CurrentFilter:r.All},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o.AddTodo:return L({},e,{Todos:[].concat(Object(C.a)(e.Todos),[t.todo])});case o.ToggleTodo:return L({},e,{Todos:e.Todos.map((function(e){return e.Id===t.id&&e.Toogle(),e}))});case o.DeleteTodo:return L({},e,{Todos:e.Todos.filter((function(e){return e.Id!==t.id}))});case o.SetTodoFilter:return L({},e,{CurrentFilter:t.filter});case o.ListTodo:return L({},e,{Todos:t.todos.map((function(e){return D.FromApiModel(e)})),CurrentFilter:r.All});default:return e}},R=n(35),_=n(4),U=n.n(_),M=n(6),B=n(17),G="api/todos",J="filter",W="toggle",$=n(34),z=n.n($);!function(e){e.Post="post",e.Delete="delete"}(N||(N={}));var H=function e(){Object(d.a)(this,e),this.FilterType=void 0,this.Name=void 0,this.Id=void 0};H.FromName=function(e){return{Name:e}},H.FromId=function(e){return{Id:e}},H.FromFilterType=function(e){return{FilterType:e}};var K=function(){function e(){var t=this;Object(d.a)(this,e),this.ListAsync=function(){var e=Object(B.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request(N.Post,J,H.FromFilterType(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.AddAsync=function(){var e=Object(B.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request(N.Post,void 0,H.FromName(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.ToogleAsync=function(){var e=Object(B.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request(N.Post,W,H.FromId(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.DeleteAsync=function(){var e=Object(B.a)(U.a.mark((function e(n){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.request(N.Delete,void 0,H.FromId(n));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),this.createClient=function(){return z.a.create({baseURL:G,headers:{"Content-Type":"application/json"}})}}return Object(l.a)(e,[{key:"request",value:function(){var e=Object(B.a)(U.a.mark((function e(t){var n,r,o,a=arguments;return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.length>1&&void 0!==a[1]?a[1]:"",r=a.length>2?a[2]:void 0,e.prev=2,e.next=5,this.createClient().request({data:r,url:n,method:t});case 5:return o=e.sent,e.abrupt("return",o.data);case 9:return e.prev=9,e.t0=e.catch(2),console.log(e.t0),e.abrupt("return",[]);case 13:case"end":return e.stop()}}),e,this,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()}]),e}();K.Instance=function(){return new K};var Q=U.a.mark(ue),V=U.a.mark(ie),X=U.a.mark(se),Y=U.a.mark(de),Z=U.a.mark(le),ee=U.a.mark(pe),te=U.a.mark(fe),ne=U.a.mark(me),re=U.a.mark(Te),oe=U.a.mark(he),ae=U.a.mark(be),ce=K.Instance();function ue(){var e;return U.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(M.b)(ce.ListAsync,r.All);case 3:return e=t.sent,t.next=6,Object(M.c)(h.ListTodo(e));case 6:t.next=11;break;case 8:throw t.prev=8,t.t0=t.catch(0),t.t0;case 11:case"end":return t.stop()}}),Q,null,[[0,8]])}function ie(e){var t,n,r;return U.a.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return t=e.text,o.prev=1,o.next=4,Object(M.b)(ce.AddAsync,t);case 4:return n=o.sent,r=D.FromApiModel(n),o.next=8,Object(M.c)(h.AddTodo(r));case 8:o.next=13;break;case 10:throw o.prev=10,o.t0=o.catch(1),o.t0;case 13:case"end":return o.stop()}}),V,null,[[1,10]])}function se(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(M.b)(ce.ToogleAsync,t);case 4:return n.next=6,Object(M.c)(h.ToggleTodo(t));case 6:n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),X,null,[[1,8]])}function de(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.id,n.prev=1,n.next=4,Object(M.b)(ce.DeleteAsync,t);case 4:return n.next=6,Object(M.c)(h.DeleteTodo(t));case 6:n.next=11;break;case 8:throw n.prev=8,n.t0=n.catch(1),n.t0;case 11:case"end":return n.stop()}}),Y,null,[[1,8]])}function le(e){var t;return U.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=e.filter,n.next=3,Object(M.c)(h.SetFilter(t));case 3:case"end":return n.stop()}}),Z)}function pe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(a.AddTodo,ie);case 2:case"end":return e.stop()}}),ee)}function fe(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(a.ToggleTodo,se);case 2:case"end":return e.stop()}}),te)}function me(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(a.DeleteTodo,de);case 2:case"end":return e.stop()}}),ne)}function Te(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(a.SetTodoFilter,le);case 2:case"end":return e.stop()}}),re)}function he(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.d)(a.ListTodo,ue);case 2:case"end":return e.stop()}}),oe)}function be(){return U.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(M.a)([he(),pe(),fe(),me(),Te()]);case 2:case"end":return e.stop()}}),ae)}var ve=Object(R.a)(),Oe=Object(A.e)(Object(A.c)(P),Object(A.a)(ve));ve.run(be),Oe.dispatch(h.RequestListTodo());var je=Oe,ye=document.getElementById("root");s.a.render(u.a.createElement(T.a,{store:je},u.a.createElement(E,null)),ye),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[37,1,2]]]);
//# sourceMappingURL=main.64d7fffd.chunk.js.map