(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){e.exports=n(38)},38:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(11),c=n.n(r),l=n(13),u=n(6),o=n(10),s=n(7),m=function(){return i.a.createElement("div",null,"StreamCreate")},d=function(){return i.a.createElement("div",null,"StreamEdit")},g=function(){return i.a.createElement("div",null,"StreamDelete")},h=function(){return i.a.createElement("div",null,"StreamList")},p=function(){return i.a.createElement("div",null,"StreamShow")},E=n(22),S=n(23),I=n(26),f=n(24),v=n(27),O=function(e){function t(){var e,n;Object(E.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(I.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(i)))).onAuthChange=function(e){e?n.props.signIn(n.auth.currentUser.get().getId()):n.props.signOut()},n.onSignInClick=function(){n.auth.signIn()},n.onSignOutClick=function(){n.auth.signOut()},n}return Object(v.a)(t,e),Object(S.a)(t,[{key:"componentDidMount",value:function(){var e=this;window.gapi.load("client:auth2",(function(){window.gapi.client.init({clientId:"548147403800-qhiek0431mroa1d8vv1n8rb65p6dvg2r.apps.googleusercontent.com",scope:"email"}).then((function(){e.auth=window.gapi.auth2.getAuthInstance(),e.onAuthChange(e.auth.isSignedIn.get()),e.auth.isSignedIn.listen(e.onAuthChange)}))}))}},{key:"renderAuthButton",value:function(){return null===this.props.isSignedIn?null:this.props.isSignedIn?i.a.createElement("button",{onClick:this.onSignOutClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"}," SignOut ")):i.a.createElement("button",{onClick:this.onSignInClick,className:"ui red google button"},i.a.createElement("i",{className:"google icon"},"SignIn with Google"))}},{key:"render",value:function(){return i.a.createElement("div",null,"   ",this.renderAuthButton(),"         ")}}]),t}(i.a.Component),b=Object(l.b)((function(e){return{isSignedIn:e.auth.isSignedIn}}),{signIn:function(e){return{type:"SIGN_IN",payload:e}},signOut:function(){return{type:"SIGN_OUT"}}})(O),w=function(){return i.a.createElement("div",{className:"ui secondry  pointing menu "},i.a.createElement(o.b,{to:"/",className:"item"},"Streamy"),i.a.createElement("div",{className:"right menu"},i.a.createElement(o.b,{to:"/",className:"item"},"All Streams "),i.a.createElement(b,null)))},N=function(){return i.a.createElement("div",{className:"ui container"},i.a.createElement("div",null,i.a.createElement(o.a,null,i.a.createElement("div",null,i.a.createElement(w,null),i.a.createElement(s.a,{path:"/",exact:!0,component:h}),i.a.createElement(s.a,{path:"/streams/new",exact:!0,component:m}),i.a.createElement(s.a,{path:"/streams/edit",exact:!0,component:d}),i.a.createElement(s.a,{path:"/streams/delete",exact:!0,component:g}),i.a.createElement(s.a,{path:"/streams/show",exact:!0,component:p})))))},y=n(18),k={isSignedIn:null,userId:null},C=Object(u.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SIGN_IN":return Object(y.a)({},e,{isSignedIn:!0,userId:t.payload});case"SIGN_OUT":return Object(y.a)({},e,{isSignedIn:!1,userId:null});default:return e}}}),j=("undefined"!==typeof window&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||u.d,Object(u.e)(C,Object(u.a)()));c.a.render(i.a.createElement(l.a,{store:j},i.a.createElement(N,null)),document.querySelector("#root"))}},[[28,1,2]]]);
//# sourceMappingURL=main.aa31d362.chunk.js.map