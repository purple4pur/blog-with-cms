(this["webpackJsonppurple4pur-s-blog"]=this["webpackJsonppurple4pur-s-blog"]||[]).push([[0],{37:function(e,t,a){e.exports=a.p+"static/media/logo.df728e58.ico"},41:function(e,t,a){e.exports=a(74)},50:function(e,t,a){},51:function(e,t,a){},53:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){},73:function(e,t,a){},74:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(20),c=a(6),l=a(9),s=a(1),i=a(2),u=a(4),p=a(3),h=a(5),d=a(17),m=(a(50),a(51),a(37)),f=a.n(m),b=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).toggleMenu=function(){""===a.state.navClass?a.setState({navClass:" openMenu"}):a.setState({navClass:""})},a.handleOver1=function(){a.setState({hoverClass1:" hover"})},a.handleOver2=function(){a.setState({hoverClass2:" hover"})},a.handleOver3=function(){a.setState({hoverClass3:" hover"})},a.handleOver4=function(){a.setState({hoverClass4:" hover"})},a.handleOver5=function(){a.setState({hoverClass5:" hover"})},a.handleOver6=function(){a.setState({hoverClass6:" hover"})},a.handleOut=function(){a.setState({hoverClass1:"",hoverClass2:"",hoverClass3:"",hoverClass4:"",hoverClass5:"",hoverClass6:""})},a.state={navClass:"",hoverClass1:"",hoverClass2:"",hoverClass3:"",hoverClass4:"",hoverClass5:"",hoverClass6:""},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"header-ui"},r.a.createElement("span",{onClick:this.toggleMenu},r.a.createElement("i",{className:"fas fa-bars"})),r.a.createElement(c.c,{to:"/"},r.a.createElement("img",{src:f.a,alt:"Purple4pur's Blog"}))),r.a.createElement("nav",{className:"header-nav"+this.state.navClass},r.a.createElement("div",{className:"header-nav-bg-touch",onClick:this.toggleMenu}),r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.c,{to:"/",className:"header-nav-mobile"},"\u9996\u9875 | HOME"),r.a.createElement(c.c,{to:"/",className:"header-nav-desktop"+this.state.hoverClass1,onMouseOver:this.handleOver1,onMouseOut:this.handleOut},"\u9996\u9875",r.a.createElement("div",null,r.a.createElement("span",null,"HOME")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/coding",className:"header-nav-mobile"},"\u4ee3\u7801 | CODING"),r.a.createElement(c.c,{to:"/coding",className:"header-nav-desktop"+this.state.hoverClass2,onMouseOver:this.handleOver2,onMouseOut:this.handleOut},"\u4ee3\u7801",r.a.createElement("div",null,r.a.createElement("span",null,"CODING")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/creating",className:"header-nav-mobile"},"\u521b\u4f5c | CREATING"),r.a.createElement(c.c,{to:"/creating",className:"header-nav-desktop"+this.state.hoverClass3,onMouseOver:this.handleOver3,onMouseOut:this.handleOut},"\u521b\u4f5c",r.a.createElement("div",null,r.a.createElement("span",null,"CREATING")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/thoughts",className:"header-nav-mobile"},"\u6742\u8c08 | THOUGHTS"),r.a.createElement(c.c,{to:"/thoughts",className:"header-nav-desktop"+this.state.hoverClass4,onMouseOver:this.handleOver4,onMouseOut:this.handleOut},"\u6742\u8c08",r.a.createElement("div",null,r.a.createElement("span",null,"THOUGHTS")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/tags",className:"header-nav-mobile"},"\u6807\u7b7e | TAGS"),r.a.createElement(c.c,{to:"/tags",className:"header-nav-desktop"+this.state.hoverClass5,onMouseOver:this.handleOver5,onMouseOut:this.handleOut},"\u6807\u7b7e",r.a.createElement("div",null,r.a.createElement("span",null,"TAGS")))),r.a.createElement("li",null,r.a.createElement(c.c,{to:"/about",className:"header-nav-mobile"},"\u5173\u4e8e | ABOUT"),r.a.createElement(c.c,{to:"/about",className:"header-nav-desktop"+this.state.hoverClass6,onMouseOver:this.handleOver6,onMouseOut:this.handleOut},"\u5173\u4e8e",r.a.createElement("div",null,r.a.createElement("span",null,"ABOUT")))))))}}]),t}(n.PureComponent),E=(a(53),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",null,r.a.createElement("span",null,r.a.createElement("i",{className:"far fa-copyright"})," ",r.a.createElement(c.b,{to:"/about"},"Purple4pur")," | 2020 | ",r.a.createElement(c.b,{to:"/admin"},"CMS")),r.a.createElement("span",null,r.a.createElement("a",{href:"http://www.beian.miit.gov.cn/",target:"_blank",rel:"noopener noreferrer"},"\u7ca4ICP\u590719158409\u53f7-1")))}}]),t}(n.PureComponent)),g="START_FETCH_LIST",v="FETCH_LIST_SUCCESS",O="FETCH_LIST_FAILED",j="START_FETCH_TAGS",y="FETCH_TAGS_SUCCESS",C="FETCH_TAGS_FAILED",S="START_VERIFY_TOKEN",L="VERIFY_TOKEN_SUCCESS",k="VERIFY_TOKEN_FAILED",T="START_VERIFY_LOGIN",I="VERIFY_LOGIN_SUCCESS",M="VERIFY_LOGIN_FAILED",N="START_REMOVE_TOKEN",D="REMOVE_TOKEN_SUCCESS",P="SET_ERROR_MSG",R="RESET_ERROR_MSG",_=a(39),w=a.n(_).a.create({baseURL:"https://purple4pur.com/apis"}),F=function(e,t,a){return w.post("/login.php",{username:e,password:t,decoratedToken:a})},U=function(e){return{type:v,payload:{data:e}}},x=function(){return{type:O}},A=function(){return{type:C}},B=function(){return{type:k}},G=function(){return function(e){e({type:S}),localStorage.getItem("purple4pur/blog:JWT")?F(void 0,void 0,localStorage.getItem("purple4pur/blog:JWT")).then((function(t){var a,n;t.data.activeUser?e((a=t.data.activeUser,n=t.data.activeUserID,{type:L,payload:{user:a,id:n}})):(e(B()),e(V()))})).catch((function(t){console.log(t),e(B()),e(J(7))})):e(B())}},H=function(){return{type:M}},V=function(){return function(e){e({type:N}),localStorage.removeItem("purple4pur/blog:JWT"),e({type:D}),e(G())}},J=function(e){return{type:P,payload:{code:e}}},Y=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement("h3",null,this.props.title),r.a.createElement("p",null,this.props.content))}}]),t}(n.PureComponent),K=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.categoryID?this.props.fetchList(this.props.categoryID,void 0):this.props.fetchList(void 0,this.props.tagID)}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.fetchError?null:r.a.createElement("ul",null,this.props.list.map((function(e){return r.a.createElement(Y,Object.assign({key:e.id},e))})))}}]),t}(n.PureComponent),W=Object(l.b)((function(e){return{isLoading:e.postList.isLoading,fetchError:e.postList.fetchError,list:e.postList.list}}),{fetchList:function(e,t){return function(a){var n;a({type:g}),e?(n=e,w.get("/categories.php",{params:{categoryID:n}})).then((function(e){e.data.errCode?(console.log(e.data.errMsg),a(x()),a(J(e.data.errCode))):e.data[0].id?a(U(e.data)):(console.log("Error: "+e.data),a(x()),a(J(99)))})).catch((function(e){console.log(e),a(x()),a(J(7))})):function(e){return w.get("/tags.php",{params:{tagID:e}})}(t).then((function(e){e.data.errCode?(console.log(e.data.errMsg),a(x()),a(J(e.data.errCode))):e.data[0].id?a(U(e.data)):(console.log("Error: "+e.data),a(x()),a(J(99)))})).catch((function(e){console.log(e),a(x()),a(J(7))}))}}})(K),q=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("li",null,r.a.createElement(c.b,{to:"/tags/"+this.props.id},r.a.createElement("span",null,this.props.name)))}}]),t}(n.PureComponent),z=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTags()}},{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.fetchError?r.a.createElement("div",null,"\u83b7\u53d6\u6570\u636e\u5931\u8d25"):r.a.createElement("ul",null,this.props.tags.map((function(e){return r.a.createElement(q,Object.assign({key:e.id},e))})))}}]),t}(n.PureComponent),Q=Object(l.b)((function(e){return{isLoading:e.tagList.isLoading,fetchError:e.tagList.fetchError,tags:e.tagList.tags}}),{fetchTags:function(){return function(e){e({type:j}),w.get("/tags.php").then((function(t){var a;t.data[0].id?e((a=t.data,{type:y,payload:{data:a}})):(console.log("Error: "+t.data),e(A()),e(J(99)))})).catch((function(t){console.log(t),e(A()),e(J(7))}))}}})(z),X=(a(71),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(){a.props.resetErrorMsg()},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"error-msgbox"},r.a.createElement("h3",{className:"error-title"},r.a.createElement("span",null,"\u53d1\u751f\u9519\u8bef"),r.a.createElement("button",{onClick:this.handleClick},r.a.createElement("i",{className:"fas fa-times"}))),r.a.createElement("p",null,this.props.errMsg),r.a.createElement("p",null,"Error ",this.props.errCode," ",r.a.createElement("a",{href:"https://github.com/purple4pur/blog-with-cms/blob/master/error-code-table.md",target:"_blank",rel:"noopener noreferrer"},"\u4e86\u89e3\u66f4\u591a")))}}]),t}(n.PureComponent)),Z=Object(l.b)((function(e){return{errMsg:e.errorMsg.errMsg,errCode:e.errorMsg.errCode}}),{resetErrorMsg:function(){return{type:R}}})(X),$=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u9996\u9875"))}}]),t}(n.PureComponent),ee=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u4ee3\u7801 | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{categoryID:1}))}}]),t}(n.PureComponent),te=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u521b\u4f5c | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{categoryID:2}))}}]),t}(n.PureComponent),ae=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u6742\u8c08 | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(W,{categoryID:3}))}}]),t}(n.PureComponent),ne=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u5173\u4e8e | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"\u5173\u4e8e"))}}]),t}(n.PureComponent),re=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="\u6807\u7b7e | Purple4pur's Blog"}},{key:"render",value:function(){return this.props.match.params.tagID?r.a.createElement(W,{tagID:this.props.match.params.tagID}):r.a.createElement(Q,null)}}]),t}(n.PureComponent),oe=(a(72),function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="404 | Purple4pur's Blog"}},{key:"render",value:function(){return r.a.createElement("div",{className:"notfound-box"},r.a.createElement("div",{className:"notfound-txt"},r.a.createElement("h1",null,"404"),r.a.createElement("p",null,"\u83ab\u6b3a\u6211\u6ca1\u6709\u5199\u8fd9\u4e00\u9875"),r.a.createElement("p",null,"\u8fd8\u4e0d\u901f\u901f",r.a.createElement(c.b,{to:"/"},"\u8fd4\u56de\u9996\u9875"))))}}]),t}(n.PureComponent)),ce=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(c.b,{to:"/admin/manage"},"\u6587\u7ae0\u7ba1\u7406")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/admin/newpost"},"\u6587\u7ae0\u53d1\u5e03")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/admin/draft"},"\u8349\u7a3f\u7bb1")),r.a.createElement("li",null,r.a.createElement(c.b,{to:"/admin/stats"},"\u6280\u672f\u7edf\u8ba1")))}}]),t}(n.PureComponent),le=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Manage")}}]),t}(n.PureComponent),se=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"NewPost")}}]),t}(n.PureComponent),ie=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Draft")}}]),t}(n.PureComponent),ue=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"Stats")}}]),t}(n.PureComponent),pe=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleRmToken=function(){a.props.removeToken()},a.state={activeView:a.props.match.params.viewSelector,isReadyToRedirect:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.verifyToken(),this.setState({isReadyToRedirect:!0}),document.title=(this.state.activeView?this.state.activeView+" - ":"")+"CMS | Purple4pur's Blog"}},{key:"render",value:function(){return"login"===this.state.activeView?r.a.createElement(d.b,{component:me,path:"/admin/login"}):this.props.isLoading||!this.state.isReadyToRedirect?r.a.createElement("div",null,"loading..."):this.props.isLoggedIn?r.a.createElement(r.a.Fragment,null,r.a.createElement("span",null,"\u5df2\u7ecf\u767b\u9646\u4e3a\uff1a",this.props.activeUser),r.a.createElement("input",{type:"button",value:"\u9000\u51fa",onClick:this.handleRmToken}),r.a.createElement(ce,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{component:le,path:"/admin/manage",exact:!0}),r.a.createElement(d.b,{component:se,path:"/admin/newpost",exact:!0}),r.a.createElement(d.b,{component:ie,path:"/admin/draft",exact:!0}),r.a.createElement(d.b,{component:ue,path:"/admin/stats",exact:!0}),r.a.createElement(d.a,{to:"/admin/manage"}))):r.a.createElement(d.a,{to:"/admin/login"})}}]),t}(n.PureComponent),he=Object(l.b)((function(e){return{isLoading:e.adminStatus.isLoading,isLoggedIn:e.adminStatus.isLoggedIn,activeUser:e.adminStatus.activeUser,activeUserID:e.adminStatus.activeUserID}}),{verifyToken:G,removeToken:V})(pe),de=(a(73),function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(u.a)(this,Object(p.a)(t).call(this,e))).handleFocus1=function(){a.setState({focus1:!0})},a.handleBlur1=function(){""===a.state.user&&a.setState({focus1:!1})},a.handleFocus2=function(){a.setState({focus2:!0})},a.handleBlur2=function(){""===a.state.pwd&&a.setState({focus2:!1})},a.handleChgUser=function(e){a.setState({user:e.target.value})},a.handleChgPwd=function(e){a.setState({pwd:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.verifyLogin(a.state.user,a.state.pwd)},a.handleReset=function(e){e.preventDefault(),a.setState({user:"",pwd:""})},a.state={user:"",pwd:"",focus1:!1,focus2:!1},a}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return this.props.isLoading?r.a.createElement("div",null,"loading..."):this.props.isLoggedIn?r.a.createElement(d.a,{to:"/admin"}):r.a.createElement("div",{className:"login-box"},r.a.createElement("form",{className:"login-form"},r.a.createElement("div",{className:"login-txtb"},r.a.createElement("input",{type:"text",name:"username",placeholder:"USERNAME",value:this.state.user,autoComplete:"off",onChange:this.handleChgUser,onFocus:this.handleFocus1,onBlur:this.handleBlur1}),r.a.createElement("div",{className:"login-txtb-not-focus"+(this.state.focus1?" login-txtb-focus":"")})),r.a.createElement("div",{className:"login-txtb"},r.a.createElement("input",{type:"password",name:"password",placeholder:"********",value:this.state.pwd,autoComplete:"off",onChange:this.handleChgPwd,onFocus:this.handleFocus2,onBlur:this.handleBlur2}),r.a.createElement("div",{className:"login-txtb-not-focus"+(this.state.focus2?" login-txtb-focus":"")})),r.a.createElement("div",{className:"login-btns"},r.a.createElement("input",{type:"submit",value:"\u767b\u9646",onClick:this.handleSubmit}),r.a.createElement("input",{type:"reset",value:"\u91cd\u7f6e",onClick:this.handleReset}))))}}]),t}(n.PureComponent)),me=Object(l.b)((function(e){return{isLoading:e.adminStatus.isLoading,isLoggedIn:e.adminStatus.isLoggedIn}}),{verifyLogin:function(e,t){return function(a){a({type:T}),F(e,t,void 0).then((function(e){""===e.data?(localStorage.setItem("purple4pur/blog:JWT",e.headers.authorization),a({type:I}),a(G())):(console.log(e.data.errMsg),a(H()),a(J(e.data.errCode)))})).catch((function(e){console.log(e),a(H()),a(J(7))}))}},verifyToken:G})(de),fe=function(e){function t(){return Object(s.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(b,null),r.a.createElement(d.d,null,r.a.createElement(d.b,{component:$,path:"/",exact:!0}),r.a.createElement(d.b,{component:ee,path:"/coding",exact:!0}),r.a.createElement(d.b,{component:te,path:"/creating",exact:!0}),r.a.createElement(d.b,{component:ae,path:"/thoughts",exact:!0}),r.a.createElement(d.b,{component:re,path:"/tags/:tagID?",exact:!0}),r.a.createElement(d.b,{component:ne,path:"/about",exact:!0}),r.a.createElement(d.b,{component:he,path:"/admin/:viewSelector?",exact:!0}),r.a.createElement(d.b,{component:oe,path:"/404",exact:!0}),r.a.createElement(d.a,{to:"/404"})),r.a.createElement(E,null),this.props.isError?r.a.createElement(Z,null):null)}}]),t}(n.PureComponent),be=Object(l.b)((function(e){return{isError:e.errorMsg.isError}}))(fe),Ee=a(18),ge=a(40),ve=a(8),Oe={isLoading:!1,fetchError:!1,list:[]},je={isLoading:!1,fetchError:!1,tags:[]},ye={isLoading:!1,isLoggedIn:!1,activeUser:"",activeUserID:void 0},Ce={isError:!1,errCode:0,errMsg:""},Se={0:"",1:"\u6570\u636e\u5e93\u8fde\u63a5\u5931\u8d25",2:"\u7528\u6237\u540d\u4e3a\u7a7a",3:"\u5bc6\u7801\u4e3a\u7a7a",4:"\u7528\u6237\u540d\u4e0d\u5b58\u5728",5:"\u5bc6\u7801\u9519\u8bef",6:"\u65e0\u6548 JWT",7:"\u7f51\u7edc\u9519\u8bef",8:"\u67e5\u8be2\u7ed3\u679c\u4e3a\u7a7a",99:"\u672a\u77e5\u9519\u8bef"},Le=Object(Ee.c)({postList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g:return Object(ve.a)({},e,{isLoading:!0});case v:return Object(ve.a)({},e,{isLoading:!1,fetchError:!1,list:t.payload.data});case O:return Object(ve.a)({},e,{isLoading:!1,fetchError:!0});default:return e}},tagList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return Object(ve.a)({},e,{isLoading:!0});case y:return Object(ve.a)({},e,{isLoading:!1,fetchError:!1,tags:t.payload.data});case C:return Object(ve.a)({},e,{isLoading:!1,fetchError:!0});default:return e}},adminStatus:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:return Object(ve.a)({},e,{isLoading:!0});case L:return Object(ve.a)({},e,{isLoading:!1,isLoggedIn:!0,activeUser:t.payload.user,activeUserID:t.payload.id});case k:return Object(ve.a)({},e,{isLoading:!1,isLoggedIn:!1,activeUser:"",activeUserID:void 0});case T:return Object(ve.a)({},e,{isLoading:!0});case I:case M:return Object(ve.a)({},e,{isLoading:!1});case N:return Object(ve.a)({},e,{isLoading:!0});case D:return Object(ve.a)({},e,{isLoading:!1,activeUser:"",activeUserID:void 0});default:return e}},errorMsg:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(ve.a)({},e,{isError:!0,errCode:t.payload.code,errMsg:Se[t.payload.code]});case R:return Object(ve.a)({},e,{isError:!1});default:return e}}}),ke=Object(Ee.d)(Le,Object(Ee.a)(ge.a));Object(o.render)(r.a.createElement(l.a,{store:ke},r.a.createElement(c.a,{forceRefresh:!0},r.a.createElement(be,null))),document.querySelector("#root"))}},[[41,1,2]]]);
//# sourceMappingURL=main.98ffa4d8.chunk.js.map