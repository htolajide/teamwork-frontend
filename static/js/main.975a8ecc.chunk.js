(this["webpackJsonpteamwork-frontend"]=this["webpackJsonpteamwork-frontend"]||[]).push([[0],[,,,,,,,,,function(e,t,n){e.exports=n(17)},,,,,function(e,t,n){},function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),c=n(8),r=n.n(c),l=(n(14),n(1)),i=n(2),s=n(5),u=n(4),h=n(6),d=(n(15),n(16),n(3)),m=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleClick=n.handleClick.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"handleClick",value:function(){this.props.clickHandler(),console.log("clicked")}},{key:"render",value:function(){return o.a.createElement("button",{onClick:this.handleClick},"I dont like ",this.props.currentColor)}}]),t}(o.a.Component),b=function(e){function t(e){var n;return Object(l.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={color:"red"},n.changeColor=n.changeColor.bind(Object(d.a)(n)),n}return Object(h.a)(t,e),Object(i.a)(t,[{key:"changeColor",value:function(){this.setState(function(e,t){return{color:"red"===e.color?"blue":"red"}})}},{key:"render",value:function(){return o.a.createElement("div",{className:"Inner-content",style:{height:"200px",width:"200px",backgroundColor:this.state.color}},o.a.createElement(m,{clickHandler:this.changeColor,currentColor:this.state.color}))}}]),t}(o.a.Component),p=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",null,o.a.createElement("h1",null,"My React App")),o.a.createElement("div",{className:"Main-content"},o.a.createElement(b,{className:"Inner-content"})),o.a.createElement("footer",null,"..."))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(p,{name:"Hammed"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.975a8ecc.chunk.js.map