(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{46:function(e,t,a){e.exports=a(78)},51:function(e,t,a){},77:function(e,t,a){},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(25),l=a.n(s),i=(a(51),a(16)),o=a(20),c=a(27),m=a.n(c),u=a(3),d=a.n(u),h=function(e){e?d.a.defaults.headers.common.Authorization=e:delete d.a.defaults.headers.common.Authorization},p=function(e){return{type:"SET_CURRENT_USER",payload:e}},v=function(){return function(e){localStorage.removeItem("jwtToken"),h(!1),e(p({}))}},b=a(45),E=a(5),f=Object(E.b)(function(e){return{auth:e.auth}})(function(e){var t=e.component,a=e.auth,n=Object(b.a)(e,["component","auth"]);return r.a.createElement(o.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(o.a,{to:"/login"})}}))}),g=a(19),k=a(43),N=a(22),y=a(44),O=a.n(y),j={isAuthenticated:!1,user:{}},S={},w={task:null},C=Object(g.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:j,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"TEST_DISPATCH":return Object(N.a)({},e,{user:t.payload});case"SET_CURRENT_USER":return Object(N.a)({},e,{isAuthenticated:!O()(t.payload),user:t.payload});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;case"CLEAR_ERRORS":return{};default:return e}},task:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_TASK":case"UPDATE_TASK":return Object(N.a)({},e,{task:t.payload});default:return e}}}),T=[k.a],x=Object(g.e)(C,{},Object(g.d)(g.a.apply(void 0,T),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__())),R=a(11),_=a(12),A=a(15),D=a(13),U=a(14),L=function(e){function t(){return Object(R.a)(this,t),Object(A.a)(this,Object(D.a)(t).apply(this,arguments))}return Object(U.a)(t,e),Object(_.a)(t,[{key:"onLogoutClick",value:function(e){e.preventDefault(),this.props.logoutUser()}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated;e.user;return r.a.createElement("nav",{className:"navbar navbar-expand-lg",id:"siteNav"},r.a.createElement("div",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("div",{className:"toggle"},r.a.createElement("div",{className:"bar"}))),r.a.createElement("div",{className:"collapse navbar-collapse pr-lg-3",id:"navbarNav"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/dayside",className:"nav-link"},"Dayside Viewer")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/tasks",className:"nav-link"},"Tasks")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/create",className:"nav-link"},"Create Task")),t?r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link page-link rounded",onClick:this.onLogoutClick.bind(this)},"Logout")):r.a.createElement("li",{className:"nav-item"},r.a.createElement(i.b,{to:"/login",className:"nav-link page-link rounded"},"Login")))))}}]),t}(n.Component),I=Object(E.b)(function(e){return{auth:e.auth}},{logoutUser:v})(L),G=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(A.a)(this,Object(D.a)(t).call(this,e))).state={tasks:[]},a}return Object(U.a)(t,e),Object(_.a)(t,[{key:"componentDidMount",value:function(){var e=this;d.a.get("/tasks").then(function(t){var a=t.data;e.setState({tasks:a})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this.props.auth,t=e.isAuthenticated;e.user;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-6 offset-3"},r.a.createElement("div",{className:"list-group"},this.state.tasks.map(function(e){return r.a.createElement("div",{key:e._id,className:"list-group-item list-group-item-action"},r.a.createElement("div",{className:"d-flex w-100 justify-content-between"},r.a.createElement("h5",{className:"mb-1 pr-3"},e.username),r.a.createElement("small",null,e.email)),r.a.createElement("p",{className:"mb-1"},e.text),r.a.createElement("span",{className:"d-block text-right mt-3"},t?r.a.createElement(i.b,{to:"/edit/".concat(e._id)},r.a.createElement("i",{className:"fas fa-edit"})):""))}))))))}}]),t}(n.Component),P=Object(E.b)(function(e){return{auth:e.auth}},{logoutUser:v})(G),V=a(18),W=a(8),B=a(9),K=a.n(B),X=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(A.a)(this,Object(D.a)(t).call(this,e))).state={username:"",password:"",errors:{}},a.onChange=a.onChange.bind(Object(W.a)(a)),a.onSubmit=a.onSubmit.bind(Object(W.a)(a)),a}return Object(U.a)(t,e),Object(_.a)(t,[{key:"onChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){e.preventDefault();var t={username:this.state.username,password:this.state.password};this.props.userLogin(t)}},{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/tasks"),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-6 offset-3"},r.a.createElement("form",{onSubmit:this.onSubmit,className:"login-form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Username"),r.a.createElement("input",{type:"text",name:"username",className:K()("form-control",{"is-invalid":e.username}),onChange:this.onChange,value:this.state.username}),e.username&&r.a.createElement("div",{className:"invalid-feedback"},e.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Password"),r.a.createElement("input",{type:"password",name:"password",className:K()("form-control",{"is-invalid":e.password}),onChange:this.onChange,value:this.state.password}),e.password&&r.a.createElement("div",{className:"invalid-feedback"},e.password)),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Sign In"))))))}}]),t}(n.Component),z=Object(E.b)(function(e){return{auth:e.auth,errors:e.errors}},{userLogin:function(e){return function(t){d.a.post("/login",e).then(function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),h(a);var n=m()(a);t(p(n))}).catch(function(e){return t({type:"GET_ERRORS",payload:e.response.data})})}}})(X),J=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(A.a)(this,Object(D.a)(t).call(this,e))).state={username:"",email:"",text:"",errors:{}},a.onChange=a.onChange.bind(Object(W.a)(a)),a.onSubmit=a.onSubmit.bind(Object(W.a)(a)),a}return Object(U.a)(t,e),Object(_.a)(t,[{key:"onChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"onSubmit",value:function(e){var t=this;e.preventDefault();var a={username:this.state.username,email:this.state.email,text:this.state.text};d.a.post("/create",a).then(function(e){t.setState({username:"",email:"",text:"",errors:{}}),t.props.history.push("/tasks")}).catch(function(e){return t.setState({errors:e.response.data})})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-6 offset-3"},r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"username",className:K()("form-control",{"is-invalid":e.username}),onChange:this.onChange,value:this.state.username}),e.username&&r.a.createElement("div",{className:"invalid-feedback"},e.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",className:K()("form-control",{"is-invalid":e.email}),onChange:this.onChange,value:this.state.email}),e.email&&r.a.createElement("div",{className:"invalid-feedback"},e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Task"),r.a.createElement("textarea",{name:"text",className:K()("form-control",{"is-invalid":e.text}),onChange:this.onChange,value:this.state.text}),e.text&&r.a.createElement("div",{className:"invalid-feedback"},e.text)),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Create")))))}}]),t}(n.Component),M=function(){return{type:"CLEAR_ERRORS"}},H=function(e){function t(e){var a;return Object(R.a)(this,t),(a=Object(A.a)(this,Object(D.a)(t).call(this,e))).state={username:"",email:"",text:"",msg:"",errors:{}},a.onChange=a.onChange.bind(Object(W.a)(a)),a.onSubmit=a.onSubmit.bind(Object(W.a)(a)),a}return Object(U.a)(t,e),Object(_.a)(t,[{key:"componentWillMount",value:function(){this.props.getTaskById(this.props.match.params.id)}},{key:"componentWillReceiveProps",value:function(e){if(e.errors&&this.setState({errors:e.errors}),e.task.task){var t=e.task.task;this.setState({username:t.username,email:t.email,text:t.text})}}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.props.match.params.id,a={username:this.state.username,email:this.state.email,text:this.state.text};this.props.updateTask(a,t)}},{key:"onChange",value:function(e){this.setState(Object(V.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){var e=this.state.errors,t=r.a.createElement("form",{onSubmit:this.onSubmit,noValidate:!0},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Name"),r.a.createElement("input",{type:"text",name:"username",className:K()("form-control",{"is-invalid":e.username}),onChange:this.onChange,value:this.state.username}),e.username&&r.a.createElement("div",{className:"invalid-feedback"},e.username)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Email"),r.a.createElement("input",{type:"email",name:"email",className:K()("form-control",{"is-invalid":e.email}),onChange:this.onChange,value:this.state.email}),e.email&&r.a.createElement("div",{className:"invalid-feedback"},e.email)),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Task"),r.a.createElement("textarea",{name:"text",className:K()("form-control",{"is-invalid":e.text}),onChange:this.onChange,value:this.state.text}),e.text&&r.a.createElement("div",{className:"invalid-feedback"},e.text)),r.a.createElement("button",{className:"btn btn-primary btn-block",type:"submit"},"Edit Task"));return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row pt-5"},r.a.createElement("div",{className:"col-6 offset-3"},t)))}}]),t}(n.Component),$=Object(E.b)(function(e){return{task:e.task,errors:e.errors}},{getTaskById:function(e){return function(t){d.a.get("/edit/".concat(e)).then(function(e){return t({type:"GET_TASK",payload:e.data})}).catch(function(e){return t({type:"GET_ERRORS",payload:null})})}},updateTask:function(e,t){return function(a){a(M()),d.a.post("/edit/update/".concat(t),e).then(function(e){return a({type:"UPDATE_TASK",payload:e.data})}).catch(function(e){return a({type:"GET_ERRORS",payload:e.response.data})})}}})(H);a(77);if(localStorage.jwtToken){h(localStorage);var q=m()(localStorage.jwtToken);x.dispatch(p(q));var F=Date.now()/1e3;q.exp<F&&(x.dispatch(v()),window.location.href="/tasks")}var Q=function(){return r.a.createElement(E.a,{store:x},r.a.createElement(i.a,null,r.a.createElement("main",{className:"App"},r.a.createElement(I,null),r.a.createElement(o.a,{from:"/",to:"/tasks"}),r.a.createElement(o.b,{exact:!0,path:"/tasks",component:P}),r.a.createElement(o.b,{exact:!0,path:"/login",component:z}),r.a.createElement(o.b,{exact:!0,path:"/create",component:J}),r.a.createElement(o.d,null,r.a.createElement(f,{exact:!0,path:"/edit/:id",component:$}),r.a.createElement(f,{exact:!0,path:"/edit",component:$})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[46,1,2]]]);
//# sourceMappingURL=main.1fbb1817.chunk.js.map