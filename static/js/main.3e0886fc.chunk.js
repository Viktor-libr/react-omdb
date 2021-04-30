(this["webpackJsonpprojekt-books"]=this["webpackJsonpprojekt-books"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var c=a(1),s=a.n(c),n=a(7),r=a.n(n),i=(a(13),a(0));function o(){return Object(i.jsx)("nav",{className:"brown",children:Object(i.jsxs)("div",{className:"nav-wrapper",children:[Object(i.jsx)("a",{href:"#",className:"brand-logo",children:"Movies App"}),Object(i.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(i.jsx)("li",{children:Object(i.jsx)("a",{href:"#",children:"Repo"})})})]})})}function l(){return Object(i.jsx)("footer",{className:"footer",children:Object(i.jsxs)("div",{className:"footer-info",children:[Object(i.jsxs)("span",{className:"footer-copy",children:[(new Date).getFullYear()," Copy text"]}),Object(i.jsx)("a",{className:"footer-href",href:"#!",children:"repo"})]})})}var h=a(2),d=a(3),j=a(5),p=a(4),b=a(8);function u(e){var t=e.Title,a=e.Year,c=e.imdbID,s=e.Type,n=e.Poster;return Object(i.jsxs)("div",{className:"card",id:c,children:[Object(i.jsx)("div",{className:"card-image waves-effect waves-block waves-light",children:Object(i.jsx)("img",{className:"activator",src:"N/A"===n?"https://via.placeholder.com/200x310?text=".concat(t):n})}),Object(i.jsxs)("div",{className:"card-content",children:[Object(i.jsx)("span",{className:"card-title activator grey-text text-darken-4",children:t}),Object(i.jsxs)("p",{children:[s," ",Object(i.jsx)("span",{className:"right",children:a})]})]})]})}function m(e){var t=e.movies,a=void 0===t?"":t;return Object(i.jsx)("div",{className:"movies",children:a.length?a.map((function(e){return Object(i.jsx)(u,Object(b.a)({},e),e.imdbID)})):Object(i.jsx)("h3",{children:"Nothing found"})})}function O(){return Object(i.jsx)("div",{className:"progress",children:Object(i.jsx)("div",{className:"indeterminate"})})}var v=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={search:"",radio:"All"},e.handleSearch=function(t){"Enter"===t.key&&e.props.searchRequest(e.state.search,e.state.radio)},e.handleTypeFilter=function(t){e.setState((function(){return{radio:t.target.dataset.type}}),(function(){return e.props.searchRequest(e.state.search,e.state.radio)}))},e}return Object(d.a)(a,[{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"row search-inp",children:[Object(i.jsx)("input",{id:"password",type:"search",placeholder:"Search",className:"validate",value:this.state.search,onChange:function(t){return e.setState({search:t.target.value})},onKeyDown:this.handleSearch}),Object(i.jsx)("button",{className:"btn search-btn",onClick:function(){return e.props.searchRequest(e.state.search,e.state.radio)},children:"Search"}),Object(i.jsxs)("div",{className:"radio-btn",children:[Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group3",type:"radio","data-type":"All",onChange:this.handleTypeFilter,checked:"All"===this.state.radio}),Object(i.jsx)("span",{children:"All"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group3",type:"radio","data-type":"movie",onChange:this.handleTypeFilter,checked:"movie"===this.state.radio}),Object(i.jsx)("span",{children:"Movies"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group3",type:"radio","data-type":"series",onChange:this.handleTypeFilter,checked:"series"===this.state.radio}),Object(i.jsx)("span",{children:"Series"})]}),Object(i.jsxs)("label",{children:[Object(i.jsx)("input",{className:"with-gap",name:"group3",type:"radio","data-type":"game",onChange:this.handleTypeFilter,checked:"game"===this.state.radio}),Object(i.jsx)("span",{children:"Game"})]})]})]})}}]),a}(s.a.Component),x="77536827",f=function(e){Object(j.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(h.a)(this,a);for(var c=arguments.length,s=new Array(c),n=0;n<c;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).state={movies:[],loading:!0},e.searchRequest=function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"All";e.setState({loading:!0}),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=").concat(t).concat("All"!==a?"&type=".concat(a):"")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log(Object({NODE_ENV:"production",PUBLIC_URL:"/react-omdb",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0,REACT_APP_API_KEY:"77536827"})),fetch("https://www.omdbapi.com/?apikey=".concat(x,"&s=matrix")).then((function(e){return e.json()})).then((function(t){return e.setState({movies:t.Search,loading:!1})})).catch((function(t){console.error(t),e.setState({loading:!1})}))}},{key:"render",value:function(){var e=this.state,t=e.movies,a=e.loading;return Object(i.jsxs)("main",{className:"container content",children:[Object(i.jsx)(v,{searchRequest:this.searchRequest}),a?Object(i.jsx)(O,{}):Object(i.jsx)(m,{movies:t})]})}}]),a}(s.a.Component);var g=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)(f,{}),Object(i.jsx)(l,{})]})};r.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(g,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.3e0886fc.chunk.js.map