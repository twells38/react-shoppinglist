(this["webpackJsonpshopping-list"]=this["webpackJsonpshopping-list"]||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},20:function(t,e,n){},21:function(t,e,n){"use strict";n.r(e);var a=n(1),s=n.n(a),i=n(10),c=n.n(i),l=(n(16),n(3)),r=n(4),u=n(6),h=n(5),o=(n(17),n(11)),d=n(9),j=n(2),m=n(7),b=(n(18),n(0)),O=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={name:"",qty:""},a.handleChange=a.handleChange.bind(Object(j.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(j.a)(a)),a}return Object(r.a)(n,[{key:"handleChange",value:function(t){this.setState(Object(m.a)({},t.target.name,t.target.value))}},{key:"handleSubmit",value:function(t){t.preventDefault(),this.props.addItem(this.state),this.setState({name:"",qty:""})}},{key:"render",value:function(){return Object(b.jsx)("div",{children:Object(b.jsxs)("form",{className:"Form-details",onSubmit:this.handleSubmit,children:[Object(b.jsxs)("label",{htmlFor:"name",children:["Name:",Object(b.jsx)("input",{className:"Name",id:"namme",name:"name",value:this.state.name,type:"text",onChange:this.handleChange})]}),Object(b.jsxs)("label",{className:"Label-Quantity",htmlFor:"qty",children:["Quantity:",Object(b.jsx)("input",{className:"Quantity",id:"qty",name:"qty",value:this.state.qty,type:"text",onChange:this.handleChange})]}),Object(b.jsx)("button",{className:"Button",children:"Add Items"})]})})}}]),n}(a.Component),f=n(23),p=(n(20),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).removeItem=function(t){var e=a.state.items,n=e.indexOf(t);e.splice(n,1),a.setState({items:e})},a.renderItems=function(){return Object(b.jsx)("div",{children:Object(b.jsx)("ul",{children:a.state.items.map((function(t){return Object(b.jsxs)("li",{children:[Object(b.jsx)("button",{onClick:function(){a.removeItem(t)},children:Object(b.jsx)("i",{class:"fas fa-trash-alt"})}),t.name," : ",t.qty]},t)}))})})},a.state={items:[],message:"add items on your list!"},a.addItem=a.addItem.bind(Object(j.a)(a)),a.clearAll=a.clearAll.bind(Object(j.a)(a)),a}return Object(r.a)(n,[{key:"addItem",value:function(t){var e=Object(d.a)(Object(d.a)({},t),{},{id:Object(f.a)()});this.setState((function(t){return{items:[].concat(Object(o.a)(t.items),[e])}}))}},{key:"clearAll",value:function(){this.setState({items:[],message:"No items on your list !"})}},{key:"render",value:function(){var t=this.state,e=t.message,n=t.items;return Object(b.jsxs)("div",{className:"Lists",children:[Object(b.jsx)("h1",{children:"Shopping List"}),0===n.length&&Object(b.jsx)("p",{children:e}),this.renderItems(),""===e||n.length>0,Object(b.jsx)(O,{addItem:this.addItem}),Object(b.jsx)("div",{className:"Button-clearAll",children:Object(b.jsx)("button",{className:"Button",onClick:this.clearAll,children:"Clear Lists"})})]})}}]),n}(a.Component)),v=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(r.a)(n,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(p,{})})}}]),n}(a.Component),x=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,a=e.getFID,s=e.getFCP,i=e.getLCP,c=e.getTTFB;n(t),a(t),s(t),i(t),c(t)}))};c.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(v,{})}),document.getElementById("root")),x()}},[[21,1,2]]]);
//# sourceMappingURL=main.39f0eb9e.chunk.js.map