(this.webpackJsonpasosimtrans=this.webpackJsonpasosimtrans||[]).push([[0],{17:function(e,a,t){e.exports=t.p+"static/media/logo.587278fa.svg"},54:function(e,a,t){e.exports=t.p+"static/media/admin-ui.6c996dc7.png"},55:function(e,a,t){e.exports=t.p+"static/media/error.04ee408b.svg"},56:function(e,a,t){e.exports=t(92)},61:function(e,a,t){},88:function(e,a,t){},92:function(e,a,t){"use strict";t.r(a);var n=t(1),r=t.n(n),c=t(20),l=t.n(c),o=(t(61),t(3)),s=t(8),i=t(9),m=t(12),u=t(11),d=function(){return r.a.createElement("div",{className:"header"},r.a.createElement("h1",{class:"tc v-mid hh avenir ttu b roboto"},"Achetez Vos Mat\xe9riaux Ici!"),r.a.createElement("h2",{class:"tc f2 mt4 pb5 v-mid white-80 sans-serif"},"POUR UNE MEILLEURE CONSTRUCTION"),r.a.createElement("a",{class:"f3 grow no-underline br-pill ph4 pv3 mb2 dib white bg-dark-blue hover-white prod",href:"#products"},"NOS PRODUITS"))},p=(t(16),t(17)),b=t.n(p),h=t(32),f=t.n(h),E=function(){return r.a.createElement("div",{className:"w-100 orange"},r.a.createElement("h1",{className:"black dim about"},"ASOSIM TRANS"),r.a.createElement("hr",{className:"divider grow mb-5",style:{borderBottomColor:"#fff",borderBottomWidth:1,width:70,height:3,background:"#fff"}}),r.a.createElement("div",{className:"aboutcontent"},r.a.createElement("div",{className:"infocont"},r.a.createElement("div",{className:"v-mid"},r.a.createElement(f.a,{className:"Tilt br1 shadow-4 bg-white ml4 mr4 abouttilt",options:{max:30}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{src:b.a,amlt:"logo"})))),r.a.createElement("p",{className:"black ml2 mr4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"infocont"},r.a.createElement("div",{className:"v-mid"},r.a.createElement(f.a,{className:"Tilt br1 shadow-4 bg-white ml4 mr4 abouttilt",options:{max:30}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{src:b.a,amlt:"logo"})))),r.a.createElement("p",{className:"black ml2 mr4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.")),r.a.createElement("div",{className:"infocont"},r.a.createElement("div",{className:"v-mid"},r.a.createElement(f.a,{className:"Tilt br1 shadow-4 bg-white ml4 mr4 abouttilt",options:{max:30}},r.a.createElement("div",{className:"Tilt-inner"},r.a.createElement("img",{src:b.a,amlt:"logo"})))),r.a.createElement("p",{className:"black ml2 mr4"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."))))},g=t(31),v=t(19),w=t.n(v),N=t(23),k=function(e){e.id;var a=e.name,t=e.price,n=e.imageurl,c=e.description;return r.a.createElement("article",{class:"br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 center grow"},r.a.createElement("img",{src:n,class:"db w-100 br2 br--top h5",alt:"Photo"}),r.a.createElement("div",{class:"pa2 ph3-ns pb3-ns"},r.a.createElement("div",{class:"dt w-100 mt1"},r.a.createElement("div",{class:"dtc"},r.a.createElement("h1",{class:"f5 f4-ns mv0 mr2"},a)),r.a.createElement("div",{class:"dtc tr"},r.a.createElement("h2",{class:"f5 mv0"},t))),r.a.createElement("p",{class:"f6 lh-copy measure mt2 mid-gray"},c)))},C=t(24),y=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={data:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.name;fetch("https://nameless-sands-32962.herokuapp.com/produits/".concat(a)).then(function(){var a=Object(N.a)(w.a.mark((function a(t){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,e.setState({data:n});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}},{key:"render",value:function(){var e=this.state.data;return r.a.createElement("div",{className:"prodscoll"},r.a.createElement("div",{className:"rows"},e.map((function(e){var a=e.id,t=Object(g.a)(e,["id"]);return r.a.createElement(k,Object.assign({key:a},t))}))))}}]),t}(r.a.Component),O=function(e){e.id;var a=e.name,t=(e.price,e.imageurl);return r.a.createElement("article",{className:"contcard br2 ba grow dark-gray b--black-10 mv3 mw5 center"},r.a.createElement("img",{src:t,className:"image db w-100 br2 br--top",alt:""}),r.a.createElement("div",{class:"middle"},r.a.createElement("div",{style:{textDecoration:"none"},class:"text"},"Voir la collection")),r.a.createElement("div",{className:"pa2 ph3-ns pb3-ns"},r.a.createElement("div",{className:"dt w-100 mt1"},r.a.createElement("div",{className:"dtc"},r.a.createElement("h1",{className:"f5 f4-ns mv0 ttc"},a.replace("_"," ").replace("4","'"))))))},j=t(10),x=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).state={collections:[]},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nameless-sands-32962.herokuapp.com/").then(function(){var a=Object(N.a)(w.a.mark((function a(t){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,e.setState({collections:n}),console.log(e.state.collections);case 5:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}},{key:"render",value:function(){var e=this.state.collections;return r.a.createElement("div",null,r.a.createElement("h1",{className:"dim pt-5"},"NOS PRODUITS"),r.a.createElement("hr",{className:"divider grow mb-5",style:{borderBottomColor:"#ea8c22",borderBottomWidth:1,width:70,height:3,background:"#ea8c22"}}),r.a.createElement("div",{className:"products rows"},e.map((function(e){var a=e.id,t=e.name,n=Object(g.a)(e,["id","name"]);return r.a.createElement(j.b,{to:"/produits/"+t},r.a.createElement(O,Object.assign({key:a,name:t},n)))}))))}}]),t}(r.a.Component),S=t(7),T=(t(85),t(86),t(87),function(){return r.a.createElement("section",{className:"contact"},r.a.createElement("h2",{className:"h1-responsive font-weight-bold text-center white dim pb5"},"CONTACTEZ-NOUS"),r.a.createElement(S.o,{className:"rowcont"},r.a.createElement(S.c,{lg:"12"},r.a.createElement("div",{id:"map-container",className:"rounded z-depth-1-half map-container m-5",style:{height:"500px"}},r.a.createElement("iframe",{src:"https://www.google.com/maps/embed/v1/place?q=place_id:ChIJyRyt2um2sw0RdIT0i7fQ-Lw&key=AIzaSyClYVsprSy2kCEjXdo_TT1-IffmQvI_ZpY",title:"This is a unique title",width:"100%",height:"100%",frameBorder:"0",style:{border:0},className:"mapframe"})),r.a.createElement("br",null),r.a.createElement(S.o,{className:"text-center textcont"},r.a.createElement(S.c,{md:"12"},r.a.createElement(S.b,{tag:"a",floating:!0,color:"blue",className:"accent-1"},r.a.createElement(S.e,{icon:"map-marker-alt"})),r.a.createElement("p",{className:"white"},"Agadir, ...."),r.a.createElement("p",{className:"mb-md-0 white"},"Marocs")),r.a.createElement(S.c,{md:"14"},r.a.createElement(S.b,{tag:"a",floating:!0,color:"blue",className:"accent-1 ml4"},r.a.createElement(S.e,{icon:"phone"})),r.a.createElement("p",{className:"white"},"+212666605037"),r.a.createElement("p",{className:"mb-md-0 white"},"Lun - Ven, 8:00-22:00")),r.a.createElement(S.c,{md:"14"},r.a.createElement(S.b,{tag:"a",floating:!0,color:"blue",className:"accent-1"},r.a.createElement(S.e,{icon:"envelope"})),r.a.createElement("p",{className:"mb-md-0 white"},"oid@gmail.com"))))))}),D=function(){return r.a.createElement("div",{className:"logo f1"},r.a.createElement("a",{href:"#home"},r.a.createElement("img",{src:b.a,alt:"logo"})))},I=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).state={isOpen:!1},e.toggleCollapse=function(){e.setState({isOpen:!e.state.isOpen})},e}return Object(i.a)(t,[{key:"render",value:function(){return window.addEventListener("scroll",(function(){var e=document.querySelector("nav"),a=document.querySelectorAll(".navItem"),t=window.scrollY>50;if(console.log(t),e&&e.classList.toggle("scrolling-active",t),a)for(var n=0;n<a.length;n++)a[n].classList.toggle("ascroll",t)})),r.a.createElement(S.i,{color:"black",dark:!0,expand:"md"},r.a.createElement(S.j,null,r.a.createElement(D,null)),r.a.createElement(S.l,{onClick:this.toggleCollapse}),r.a.createElement(S.d,{id:"navbarCollapse3",isOpen:this.state.isOpen,navbar:!0},r.a.createElement(S.k,{right:!0},r.a.createElement(S.h,null,r.a.createElement("a",{href:"#about",className:"navItem"},"Qui sommes-nous?")),r.a.createElement(S.h,null,r.a.createElement("a",{href:"#products",className:"navItem"},"Produits")),r.a.createElement(S.h,null,r.a.createElement("a",{href:"#contact",className:"navItem"},"Contactez-nous")))))}}]),t}(n.Component),R=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){var e=this.props,a=(e.id,e.name),t=e.imageurl,n=e.price,c=a.replace("_"," ");return c=c.replace("4","'"),r.a.createElement("a",{class:"db center mw5 tc black link dim",title:"",href:""},r.a.createElement("img",{class:"db ba b--black-10 h5 w6",alt:c,src:t,id:a.replace(" ","_")}),r.a.createElement("dl",{class:"mt2 f6 lh-copy"},r.a.createElement("dt",{class:"clip"},"Title"),r.a.createElement("dd",{class:"ml0 f4"},c),r.a.createElement("dd",{class:"ml0"},n)))}}]),t}(r.a.Component),A=t(54),P=t.n(A),F=function(){return r.a.createElement("div",{className:"logo f3"},r.a.createElement("a",{href:""},r.a.createElement("img",{src:P.a,alt:"admin",className:"adminimg"})))},q=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=a.call.apply(a,[this].concat(r))).handleClick=function(){(0,e.props.onRouteChange)("home")},e}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{class:"flex justify-between bb bg-white fixed w-100 z-1 "},r.a.createElement("a",{class:" white-70 hover-white no-underline flex items-center pa3",href:""},r.a.createElement(F,null),r.a.createElement("h2",{className:"fontadmin pl4 pt2 dim b black"},"My DASHBOARD ")),r.a.createElement("div",{class:"flex-grow pa3 flex items-center"},r.a.createElement("a",{class:"f4 dib grow black bg-animate hover-bg-white hover-black no-underline pv2 ph4 br-pill ba b--white-20",href:"/",onClick:this.handleClick},"D\xe9connexion")))}}]),t}(r.a.Component),L=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){return Object(s.a)(this,t),a.apply(this,arguments)}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{class:"bg-near-white white-80 pv1 flex space-around"},r.a.createElement("p",{class:"f6 pt3 w-100 tc"},r.a.createElement("span",{class:"dib mr4 mr5-ns near-black"},"COPYRIGHT \xa9 2020 ASOSIM TRANS.")))}}]),t}(r.a.Component),M=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateDb=function(e,a,t,n,r){fetch("https://nameless-sands-32962.herokuapp.com/admin",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({id:e,name:a,newname:t,url:r,newurl:n})}).then((function(e){e.json().then((function(e){e.response&&window.location.reload()}))})).catch((function(e){alert("There was an error!")}))},n.deleteDb=function(e){fetch("https://nameless-sands-32962.herokuapp.com/admin/del",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e})}).then((function(e){e.json().then((function(e){e.response&&window.location.reload()}))})).catch((function(e){alert("There was an error!")}))},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onUrlChange=function(e){n.setState({url:e.target.value})},n.addCat=function(e,a){fetch("https://nameless-sands-32962.herokuapp.com/admin/add",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e,url:a})}).then((function(e){e.json().then((function(e){e.response&&window.location.reload()}))})).catch((function(e){alert("There was an error!")}))},n.state={collections:[],name:"",url:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://nameless-sands-32962.herokuapp.com/").then(function(){var a=Object(N.a)(w.a.mark((function a(t){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,e.setState({collections:n});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!",e)}))}},{key:"render",value:function(){var e=this,a=this.state.collections,t=this.props.onRouteChange;return r.a.createElement("div",{className:"admin"},r.a.createElement(q,{onRouteChange:t}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"rows mt-5"},a.map((function(a){var t=a.id,n=a.name,c=a.imageurl;return r.a.createElement("div",{className:"admincont"},r.a.createElement(j.b,{to:"/admin/"+n},r.a.createElement(R,{id:t,name:n,imageurl:c})),r.a.createElement(C.a,{trigger:r.a.createElement("div",{className:"tc w-100"},r.a.createElement("button",{className:"button ttc mb4 ba br3 p-2 b--transparent grow "}," \xe9diter ")),modal:!0,closeOnDocumentClick:!0},(function(a){return r.a.createElement("div",{className:"p-5 tc fill"},r.a.createElement("h1",{className:"f3 lh-title ttc sans-serif p-4"},"\xe9diter la cat\xe9gorie"),r.a.createElement("div",{className:" w-100 tc"},r.a.createElement("label",{for:"name",className:"f4 b db mb2 serif"},"Nom de la cat\xe9gorie "),r.a.createElement("input",{id:"name",className:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer le nouveau nom",onChange:e.onNameChange})),r.a.createElement("div",{className:""},r.a.createElement("label",{for:"name",className:"f4 b db mb2 serif "},"Image "),r.a.createElement("input",{id:"name",className:"input-reset ba mb4 b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer l'addresse de la nouvelle image",onChange:e.onUrlChange})),r.a.createElement("button",{className:"button p-2 m-2  ba br3 p-2  grow",onClick:function(){a()}},"Annuler"),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2  grow",onClick:function(){e.updateDb(t,n,e.state.name,e.state.url,c),a()}},"Confirmer"),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){e.deleteDb(n),a()}},"Supprimer la cat\xe9gorie"))})))})),r.a.createElement(C.a,{trigger:r.a.createElement("img",{className:"db ba b--black-10 h5 w6 dim pointer ml4",alt:"Ajouter une cat\xe9gorie",src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9e%2FPlus_symbol.svg%2F500px-Plus_symbol.svg.png&f=1&nofb=1"}),modal:!0,closeOnDocumentClick:!0},(function(a){return r.a.createElement("div",{className:"p-5 tc"},r.a.createElement("h1",{className:"f1 lh-title ttc sans-serif p-4"},"ajouter une cat\xe9gorie"),r.a.createElement("div",{className:""},r.a.createElement("label",{for:"name",className:"f4 b db mb2 serif"},"Nom de la cat\xe9gorie "),r.a.createElement("input",{id:"name",className:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer le nom de la cat\xe9gorie",onChange:e.onNameChange})),r.a.createElement("div",{className:""},r.a.createElement("label",{for:"name",className:"f4 b db mb2 serif"},"Image "),r.a.createElement("input",{id:"name",className:"input-reset ba b--black-20 pa2 mb2 db mb4 w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer l'addresse de l'image de la cat\xe9gorie",onChange:e.onUrlChange})),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){a()}},"Annuler"),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){var t=e.state.name,n=e.state.url;t?(e.addCat(t,n),a()):alert("Entrez un nom!")}},"Confirmer"))}))),r.a.createElement(L,null))}}]),t}(r.a.Component),U=t(4),_=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).onEmailChange=function(e){n.setState({email:e.target.value}),console.log(n.state.email)},n.onPassChange=function(e){n.setState({password:e.target.value}),console.log(n.state.password)},n.handleClick=function(){var e=n.props,a=e.onRouteChange,t=e.history;fetch("https://nameless-sands-32962.herokuapp.com/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:n.state.email,pass:n.state.password})}).then((function(e){e.json().then((function(e){e.response?(t.push("/admin"),a("admin")):alert("Email ou Mot de passe incorrecte")}))})).catch((function(e){console.error("There was an error!",e)}))},n.state={email:"",password:"",route:""},n}return Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("article",{className:"br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center mv7 "},r.a.createElement("main",{className:"pa4 black-80"},r.a.createElement("form",{className:"measure"},r.a.createElement("fieldset",{id:"sign_up",className:"ba b--transparent ph0 mh0"},r.a.createElement("div",{className:"logoadmin"},r.a.createElement("img",{src:b.a})),r.a.createElement("div",{className:"mt3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"email-address"},"Email"),r.a.createElement("input",{onChange:this.onEmailChange,className:"pa2 input-reset ba hover-bg-black hover-white w-100",type:"email",name:"email-address",id:"email-address",placeholder:"Addresse email"})),r.a.createElement("div",{className:"mv3"},r.a.createElement("label",{className:"db fw6 lh-copy f6",htmlFor:"password"},"Password"),r.a.createElement("input",{onChange:this.onPassChange,className:"b pa2 input-reset ba hover-bg-black hover-white w-100",type:"password",name:"password",id:"password",placeholder:"Mot de passe"}))),r.a.createElement("div",{className:"center"},r.a.createElement("div",{onClick:this.handleClick,className:"b ph3 pv2 input-reset mt-4 b--black bg-dark-blue grow pointer f6 dib p-2 br4 w-50 "}," ",r.a.createElement("span",{className:"white f4"},"CONNEXION "))))))}}]),t}(r.a.Component),z=Object(U.withRouter)(_),B=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(e){var n;return Object(s.a)(this,t),(n=a.call(this,e)).updateDb=function(e,a,t,n,r,c,l,o,s,i){fetch("https://nameless-sands-32962.herokuapp.com/admin/name/update",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({catname:e,id:a,name:t,price:n,url:r,desc:c,newname:l,newprice:o,newurl:s,newdesc:i})}).then((function(e){e.json().then((function(e){e.response&&window.location.reload()}))})).catch((function(e){alert("There was an error!")}))},n.deleteProduct=function(e,a){fetch("https://nameless-sands-32962.herokuapp.com/admin/delete",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({catname:e,id:a})}).then((function(e){e.json().then((function(e){e.response&&window.location.reload()}))})).catch((function(e){alert("There was an error!")}))},n.onPriceChange=function(e){n.setState({price:e.target.value})},n.onDescriptionChange=function(e){n.setState({description:e.target.value})},n.onNameChange=function(e){n.setState({name:e.target.value})},n.onUrlChange=function(e){n.setState({url:e.target.value})},n.addProduct=function(e,a,t,n,r){fetch("https://nameless-sands-32962.herokuapp.com/admin/name/add",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({catname:e,name:a,url:t,price:n,description:r})}).then((function(e){e.json().then((function(e){e.response&&window.location.reload()}))})).catch((function(e){alert("There was an error!")}))},n.state={data:[],name:"",url:"",price:"",description:""},n}return Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.catname;fetch("https://nameless-sands-32962.herokuapp.com/produits/".concat(a)).then(function(){var a=Object(N.a)(w.a.mark((function a(t){var n;return w.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.json();case 2:n=a.sent,e.setState({data:n});case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()).catch((function(e){console.error("There was an error!")}))}},{key:"render",value:function(){var e=this,a=this.state.data,t=this.props.catname;return r.a.createElement("div",{className:"prodscoll"},r.a.createElement("div",{className:"rows"},a.map((function(a){var n=a.id,c=a.name,l=a.price,o=a.imageurl,s=a.description;return r.a.createElement("div",{className:"tc h50 admincont"},r.a.createElement(k,{key:n,name:c,price:l,imageurl:o,description:s}),r.a.createElement(C.a,{trigger:r.a.createElement("div",{className:"tc w-100"},r.a.createElement("button",{className:"button ttc mb4 ba br3 p-2 b--transparent grow "}," \xe9diter ")),modal:!0,closeOnDocumentClick:!0},(function(a){return r.a.createElement("div",{className:"p-5"},r.a.createElement("h1",{class:"f1 lh-title ttc sans-serif p-4"},"\xe9diter le produit"),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Nom du produit "),r.a.createElement("input",{id:"name",class:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer le nouveau nom",onChange:e.onNameChange})),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Prix du produit "),r.a.createElement("input",{id:"name",class:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer le nouveau prix",onChange:e.onPriceChange})),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Image "),r.a.createElement("input",{id:"name",class:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer l'addresse de la nouvelle image",onChange:e.onUrlChange})),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Desription "),r.a.createElement("input",{id:"name",class:"input-reset mb4 ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer unde description du produit",onChange:e.onDescriptionChange})),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){a()}},"Annuler"),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){e.updateDb(t,n,c,l,o,s,e.state.name,e.state.price,e.state.url,e.state.description),a()}},"Confirmer"),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){e.deleteProduct(t,n),a()}},"Supprimer le produit"))})))})),r.a.createElement(C.a,{trigger:r.a.createElement("img",{class:"db ba b--black-10 h5 w6 dim pointer ml4 mt4",alt:"Ajouter une cat\xe9gorie",src:"https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2Fthumb%2F9%2F9e%2FPlus_symbol.svg%2F500px-Plus_symbol.svg.png&f=1&nofb=1"}),modal:!0,closeOnDocumentClick:!0},(function(a){var n;return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{class:"f1 lh-title ttc sans-serif p-4"},"Ajouter un produit"),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Nom du produit "),r.a.createElement("input",{id:"name",class:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer le nom du produit",onChange:e.onNameChange})),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Prix du produit "),r.a.createElement("input",{id:"name",class:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer le prix du produit",onChange:e.onPriceChange})),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Image "),r.a.createElement("input",{id:"name",class:"input-reset ba b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer l'addresse d'une image du produit",onChange:e.onUrlChange})),r.a.createElement("div",{class:""},r.a.createElement("label",{for:"name",class:"f4 b db mb2 serif"},"Desription "),r.a.createElement("input",{id:"name",class:"input-reset ba mb4 b--black-20 pa2 mb2 db w-100",type:"text","aria-describedby":"name-desc",placeholder:"Entrer une description du produit",onChange:e.onDescriptionChange})),r.a.createElement("button",(n={"p-2":!0,"m-2":!0,ba:!0,br3:!0},Object(o.a)(n,"p-2",!0),Object(o.a)(n,"grow",!0),Object(o.a)(n,"className","button p-2 m-2 ba br3 p-2 grow"),Object(o.a)(n,"onClick",(function(){a()})),n),"Annuler"),r.a.createElement("button",{className:"button p-2 m-2 ba br3 p-2 grow",onClick:function(){var n=e.state.name,r=e.state.url,c=e.state.price,l=e.state.description;n?(e.addProduct(t,n,r,c,l),a()):alert("Entrez un nom!")}},"Confirmer"))}))))}}]),t}(r.a.Component),J=(t(88),t(22)),V=t.n(J),H=t(55),Y=t.n(H),W=function(){return r.a.createElement("section",{className:"vh-100 baskerville"},r.a.createElement("header",{className:"tc ph5 lh-copy"},r.a.createElement("img",{src:Y.a,alt:"error",className:"errorpic mt5"}),r.a.createElement("h2",{class:"tc f1-l fw1"},"La page que vous cherchez est introuvable!")),r.a.createElement(j.b,{to:"/",className:"f4 no-underline black mt5 bg-animate hover-bg-black hover-black inline-flex items-center pa3 ba border-box mr4"},r.a.createElement("svg",{class:"w1","data-icon":"chevronLeft",viewBox:"0 0 32 32"},r.a.createElement("title",null,"chevronLeft icon"),r.a.createElement("path",{d:"M20 1 L24 5 L14 16 L24 27 L20 31 L6 16 z"})),r.a.createElement("span",{class:"pl1"},"Homepage")))},Q=function(e){Object(m.a)(t,e);var a=Object(u.a)(t);function t(){var e;return Object(s.a)(this,t),(e=a.call(this)).onRouteChange=function(a){e.setState({route:a}),localStorage.setItem("localRoute",a)},e.state={route:"home"},e}return Object(i.a)(t,[{key:"componentDidMount",value:function(){window.location.href.includes("admin")?"admin"===localStorage.getItem("localRoute")?this.setState({route:"admin"}):"home"===localStorage.getItem("localRoute")&&this.setState({route:"home"}):this.setState({route:"home"})}},{key:"render",value:function(){var e,a,t,n,c,l,s=this;return"home"===this.state.route?r.a.createElement(j.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(U.Switch,null,r.a.createElement(V.a,(e={exact:!0,path:"/"},Object(o.a)(e,"exact",!0),Object(o.a)(e,"strict",!0),Object(o.a)(e,"render",(function(){return r.a.createElement("div",{className:"App"},r.a.createElement(I,null),r.a.createElement("section",{id:"home"},r.a.createElement(d,null)),r.a.createElement("section",{id:"about"},r.a.createElement(E,null)),r.a.createElement("section",{id:"products"},r.a.createElement(x,null)),r.a.createElement("section",{id:"contact"},r.a.createElement(T,null)),r.a.createElement("footer",{className:" bg-black foot tc"},r.a.createElement("h5",{className:"f5 white pt3"},"COPYRIGHT \xa9 2020 ASOSIM TRANS."),r.a.createElement("a",{className:"link white-60 bg-transparent hover-white inline-flex items-center mt2 ml2",href:"https://facebook.com",title:"Facebook"},r.a.createElement("svg",{className:"dib h2 w2 mr-2",fill:"currentColor",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16","fill-rule":"evenodd","clip-rule":"evenodd","stroke-linejoin":"round","stroke-miterlimit":"1.414"},r.a.createElement("path",{d:"M15.117 0H.883C.395 0 0 .395 0 .883v14.234c0 .488.395.883.883.883h7.663V9.804H6.46V7.39h2.086V5.607c0-2.066 1.262-3.19 3.106-3.19.883 0 1.642.064 1.863.094v2.16h-1.28c-1 0-1.195.476-1.195 1.176v1.54h2.39l-.31 2.416h-2.08V16h4.077c.488 0 .883-.395.883-.883V.883C16 .395 15.605 0 15.117 0","fill-rule":"nonzero"})))))})),e)),r.a.createElement(V.a,(a={exact:!0,path:"/produits/:name"},Object(o.a)(a,"exact",!0),Object(o.a)(a,"strict",!0),Object(o.a)(a,"render",(function(e){var a=e.match;return r.a.createElement("div",null,r.a.createElement(j.b,{to:"/"},r.a.createElement("img",{src:b.a})),r.a.createElement(y,{name:a.params.name}))})),a)),r.a.createElement(V.a,(t={exact:!0,path:"/login"},Object(o.a)(t,"exact",!0),Object(o.a)(t,"strict",!0),Object(o.a)(t,"render",(function(e){e.match;return r.a.createElement(z,{onRouteChange:s.onRouteChange})})),t)),r.a.createElement(V.a,{component:W})))):r.a.createElement(j.a,null,r.a.createElement(U.Switch,null,r.a.createElement(V.a,(n={exact:!0,path:"/login"},Object(o.a)(n,"exact",!0),Object(o.a)(n,"strict",!0),Object(o.a)(n,"render",(function(e){e.match;return r.a.createElement(z,{onRouteChange:s.onRouteChange})})),n)),r.a.createElement(V.a,(c={exact:!0,path:"/admin"},Object(o.a)(c,"exact",!0),Object(o.a)(c,"strict",!0),Object(o.a)(c,"render",(function(e){e.match;return r.a.createElement(M,{onRouteChange:s.onRouteChange})})),c)),r.a.createElement(V.a,(l={exact:!0,path:"/admin/:name"},Object(o.a)(l,"exact",!0),Object(o.a)(l,"strict",!0),Object(o.a)(l,"render",(function(e){var a=e.match;return r.a.createElement(B,{catname:a.params.name})})),l)),r.a.createElement(V.a,{component:W})))}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(Q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[56,1,2]]]);
//# sourceMappingURL=main.fee327fc.chunk.js.map