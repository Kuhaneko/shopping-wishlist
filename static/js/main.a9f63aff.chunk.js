(this["webpackJsonpshopping-wishlist"]=this["webpackJsonpshopping-wishlist"]||[]).push([[0],{27:function(e,t,a){e.exports=a(42)},32:function(e,t,a){},33:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(2),r=a(3),i=a(5),c=a(4),l=a(6),o=a(0),s=a.n(o),m=a(23),u=a.n(m),d=a(15),h=a(10),p=(a(32),a(33),function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",price:"",link:"",quantity:"1"},a.handleNameChange=function(e){return a.setState({name:e.target.value})},a.handlePriceChange=function(e){return a.setState({price:e.target.value})},a.handleLinkChange=function(e){return a.setState({link:e.target.value})},a.handleQuantityChange=function(e){return a.setState({quantity:e.target.value})},a.increaseQuantity=function(e){return a.setState({quantity:parseInt(a.state.quantity)+1})},a.decreaseQuantity=function(e){parseInt(a.state.quantity)>1&&a.setState({quantity:parseInt(a.state.quantity)-1})},a.handleSubmit=function(e){e.preventDefault();var t=0;isNaN(parseInt(a.state.price))||(t=a.state.price),a.props.handleAdd(a.state.name,t,a.state.link,a.state.quantity),a.setState({name:"",price:"",link:"",quantity:"1"})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"form bg-dark text-light"},s.a.createElement("h3",null,"Add an item to your wishlist"),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name of item",value:this.state.name,onChange:this.handleNameChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Price",value:this.state.price,onChange:this.handlePriceChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Link",value:this.state.link,onChange:this.handleLinkChange})),s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("input",{type:"button",value:"-",className:"btn btn-danger",onClick:this.decreaseQuantity})),s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("input",{type:"text",className:"form-control",value:this.state.quantity,onChange:this.handleQuantityChange})),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("input",{type:"button",value:"+",className:"btn btn-success",onClick:this.increaseQuantity}))),s.a.createElement("button",{type:"submit",className:"btn btn-primary",onClick:this.handleSubmit},"Add"))}}]),t}(o.Component)),f=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).increaseQuantity=function(e){return a.props.handleModifyQuantity(a.props.item.id,1)},a.decreaseQuantity=function(e){a.props.item.quantity>1&&a.props.handleModifyQuantity(a.props.item.id,-1)},a.removeProduct=function(e){a.props.handleRemove(a.props.item.id)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this.props.item;return s.a.createElement(o.Fragment,null,s.a.createElement("tr",null,s.a.createElement("td",{scope:"row"},e.priority),s.a.createElement("td",{scope:"row"},s.a.createElement("a",{href:"/item/".concat(e.id),style:{textDecoration:"none"}}," ",s.a.createElement("button",{className:"btn btn-link btn-block",style:{textDecoration:"none",color:"black",padding:"0"}},s.a.createElement("div",{className:"text-left"},e.name)))),s.a.createElement("td",{scope:"row"},s.a.createElement("input",{type:"button",value:"-",className:"btn-danger",onClick:this.decreaseQuantity}),e.quantity,s.a.createElement("input",{type:"button",value:"+",className:"btn-success",onClick:this.increaseQuantity})),s.a.createElement("td",{scope:"row"},"\u20ac",e.price),s.a.createElement("td",{scope:"row"},s.a.createElement("a",{target:"_blank",href:e.link},s.a.createElement("span",{className:"glyphicon glyphicon-globe"}))),s.a.createElement("td",{scope:"row"},s.a.createElement("button",{type:"button",className:"glyphicon btn-m glyphicon-trash btn-link",onClick:this.removeProduct}))))}}]),t}(o.Component),y=a(13),v=a.n(y),g=a(24),E=a.n(g),b=new(function(){function e(){Object(n.a)(this,e),this.products=[{id:"sfwml1",priority:1,name:"Steam Controller",price:54.99,link:"https://store.steampowered.com/app/353370/",quantity:1},{id:"sfwml2",priority:2,name:"Spice&Wolf VR",price:20.99,link:"https://store.steampowered.com/app/1065970",quantity:1},{id:"sfwml3",priority:3,name:"Rocket League on Nintendo Switch",price:19.99,link:"https://www.nintendo.com/games/detail/rocket-league-switch/",quantity:1},{id:"sfwml4",priority:4,name:"DualShock 4 Wireless Controller for PlayStation 4 - Magma Red",price:44.1,link:"https://www.amazon.com/DualShock-Wireless-Controller-PlayStation-Magma-4/dp/B01MD19OI2?pf_rd_p=190167bc-8caf-4fc0-8d35-69c23fc562c8&pd_rd_wg=RICuo&pf_rd_r=STERBJFCFYC491G74A7T&ref_=pd_gw_unk&pd_rd_w=Sl0RK&pd_rd_r=5b1da968-da23-418c-969c-4376f15cdb96&th=1",quantity:1}]}return Object(r.a)(e,[{key:"sortPriorities",value:function(){var e=1;for(var t in this.products)this.products[t].priority=this.products[t].priority===e?this.products[t].priority:e,e++}},{key:"getAll",value:function(){return this.products}},{key:"remove",value:function(e){v.a.remove(this.products,{id:e}),this.sortPriorities(),console.log("removed item with an id of: "+e)}},{key:"add",value:function(e,t,a,n){var r=1,i=v.a.last(this.products);i&&(r=i.priority+1);var c=this.products.length,l=E()(),o=this.products.push({id:l,priority:r,name:e,price:t,link:a,quantity:n});return console.log("added item "+e+" with an id of: "+l),o>c}},{key:"modifyQuantity",value:function(e,t){var a=this.getProduct(e).quantity;if(this.getProduct(e).quantity=parseInt(this.getProduct(e).quantity)+t,a!==this.getProduct(e).quantity)return!0}},{key:"getProduct",value:function(e){var t=v.a.findIndex(this.products,(function(t){return t.id===e}));return-1!==t?this.products[t]:null}},{key:"sortProducts",value:function(e,t){return v.a.sortBy(e,[t])}},{key:"filterProductsByText",value:function(e,t,a){return""===a?e:e.filter((function(e){return-1!=="".concat(e[t]).toLowerCase().search(a)}))}},{key:"filterProductsByPriceMoreLessThan",value:function(e,t,a){return isNaN(a)?e:e.filter((function(e){var n="".concat(e.price);return"minPrice"===t?n>a:"maxPrice"===t&&n<a}))}},{key:"filterProducts",value:function(e,t,a){return"minPrice"===t||"maxPrice"===t?this.filterProductsByPriceMoreLessThan(e,t,a):this.filterProductsByText(e,t,a)}},{key:"updateProduct",value:function(e,t,a,n,r){this.getProduct(e).name=t,this.getProduct(e).price=a,this.getProduct(e).link=n,this.getProduct(e).quantity=r}}]),e}()),P=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).modifyQuantity=function(e,t){b.modifyQuantity(e,t),a.setState({})},a.removeProduct=function(e){a.props.handleRemoveWithSorting(e)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=this,t=0,a=this.props.items.map((function(a){return t+=a.price*a.quantity,s.a.createElement(f,{key:a.id,item:a,handleModifyQuantity:e.modifyQuantity,handleRemove:e.removeProduct})}));return t=t.toFixed(2),s.a.createElement("table",{className:"table table-hover"},s.a.createElement("thead",null,s.a.createElement("tr",null,s.a.createElement("th",{scope:"col"},"#"),s.a.createElement("th",{scope:"col"},"Name"),s.a.createElement("th",{scope:"col"},"Quantity"),s.a.createElement("th",{scope:"col"},"Price"),s.a.createElement("th",{scope:"col"},"Link"),s.a.createElement("th",{scope:"col"},"Remove"))),s.a.createElement("tbody",null,a,s.a.createElement("tr",null,s.a.createElement("td",{scope:"row"}),s.a.createElement("td",{scope:"row"},"No. of items: ",this.props.items.length," item(s)"),s.a.createElement("td",{scope:"row"}),s.a.createElement("th",{scope:"row"},"Total:"),s.a.createElement("td",{scope:"row"},"\u20ac",t))))}}]),t}(o.Component),N=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).handleChange=function(e,t,n){e.preventDefault(),a.props.filterProducts(t,n)},a.handleNameChange=function(e){return a.handleChange(e,"name",e.target.value)},a.handlePriceMinChange=function(e){return a.handleChange(e,"minPrice",e.target.value)},a.handlePriceMaxChange=function(e){return a.handleChange(e,"maxPrice",e.target.value)},a.handleSelect=function(e){return a.handleChange(e,"order",e.target.value)},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("form",{className:"form bg-dark text-light"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"form-group col-sm-3"},s.a.createElement("b",null,"Filters"),s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name of item",onChange:this.handleNameChange})),s.a.createElement("div",{className:"form-group col-sm-1"},s.a.createElement("div",null,"min:"),s.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u20ac    Min Price",onChange:this.handlePriceMinChange})),s.a.createElement("div",{className:"form-group col-sm-1"},s.a.createElement("div",null,"max:"),s.a.createElement("input",{type:"text",className:"form-control",placeholder:"\u20ac    Max Price",onChange:this.handlePriceMaxChange})),s.a.createElement("div",{className:"form-group col-sm-2"},s.a.createElement("div",null,"order by:"),s.a.createElement("select",{className:"form-control",name:"orderBy",onChange:this.handleSelect},s.a.createElement("option",{value:"priority"},"Priority"),s.a.createElement("option",{value:"name"},"Alphabetical"),s.a.createElement("option",{value:"price"},"Price")))))}}]),t}(o.Component),k=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).state={name:"",minPrice:"",maxPrice:"",order:"priority"},a.addProduct=function(e,t,n,r){b.add(e,parseFloat(t),n,r),a.setState({name:a.state.name,minPrice:a.state.minPrice,maxPrice:a.state.maxPrice,order:a.state.order})},a.removeItem=function(e){b.remove(e),a.setState({name:a.state.name,minPrice:a.state.minPrice,maxPrice:a.state.maxPrice,order:a.state.order})},a.filterProducts=function(e,t){"name"===e?a.setState({name:t,minPrice:a.state.minPrice,maxPrice:a.state.maxPrice,order:a.state.order}):"minPrice"===e?a.setState({name:a.state.name,minPrice:t,maxPrice:a.state.maxPrice,order:a.state.order}):"maxPrice"===e?a.setState({name:a.state.name,minPrice:a.state.minPrice,maxPrice:t,order:a.state.order}):"order"===e&&a.setState({name:a.state.name,minPrice:a.state.minPrice,maxPrice:a.state.maxPrice,order:t})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){var e=b.getAll();return e=b.filterProducts(e,"name",this.state.name),e=b.filterProducts(e,"minPrice",parseFloat(this.state.minPrice)),e=b.filterProducts(e,"maxPrice",parseFloat(this.state.maxPrice)),e=b.sortProducts(e,this.state.order),s.a.createElement(o.Fragment,null,s.a.createElement("h1",{className:"text-center"},s.a.createElement("a",{href:"/"},"Shopping Wishlist")),s.a.createElement("hr",null),s.a.createElement("div",{className:"container-fluid"},s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-md-1"}),s.a.createElement("div",{className:"col-md-3"},s.a.createElement(p,{handleAdd:this.addProduct})),s.a.createElement("div",{className:"col-md-8"},s.a.createElement(N,{filterProducts:this.filterProducts}),s.a.createElement(P,{items:e,handleRemoveWithSorting:this.removeItem})))))}}]),t}(o.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(37);var C=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(c.a)(t)).call.apply(e,[this].concat(l)))).item=b.getProduct(a.props.match.params.id),a.state={name:a.item.name,price:a.item.price,link:a.item.link,quantity:a.item.quantity},a.handleNameChange=function(e){return a.setState({name:e.target.value})},a.handlePriceChange=function(e){return a.setState({price:e.target.value})},a.handleLinkChange=function(e){return a.setState({link:e.target.value})},a.handleQuantityChange=function(e){return a.setState({quantity:e.target.value})},a.handleUpdate=function(e){e.preventDefault();var t=0;isNaN(parseInt(a.state.price))||(t=a.state.price),b.updateProduct(a.item.id,a.state.name,t,a.state.link,a.state.quantity),a.setState({name:a.item.name,price:a.item.price,link:a.item.link,quantity:a.item.quantity})},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(o.Fragment,null,s.a.createElement("div",{className:"row"},s.a.createElement("div",{className:"col-sm-4"}),s.a.createElement("div",{className:"col-sm-4"},s.a.createElement("h3",null," Item id: ",this.item.id," "),s.a.createElement("form",{className:"form bg-dark text-light"},s.a.createElement("h3",null,"Edit ",this.item.name),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Name of item",value:this.state.name,onChange:this.handleNameChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Price",value:this.state.price,onChange:this.handlePriceChange})),s.a.createElement("div",{className:"form-group"},s.a.createElement("input",{type:"text",className:"form-control",placeholder:"Link",value:this.state.link,onChange:this.handleLinkChange})),s.a.createElement("div",{className:"form-group row"},s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("input",{type:"button",value:"-",className:"btn btn-danger",onClick:this.decreaseQuantity})),s.a.createElement("div",{className:"col-sm-8"},s.a.createElement("input",{type:"text",className:"form-control",value:this.state.quantity,onChange:this.handleQuantityChange})),s.a.createElement("div",{className:"col-sm-2"},s.a.createElement("input",{type:"button",value:"+",className:"btn btn-success",onClick:this.increaseQuantity}))),s.a.createElement("button",{type:"submit",className:"btn btn-success",onClick:this.handleUpdate},"Update")),s.a.createElement("a",{href:"/home"},s.a.createElement("button",{className:"btn btn-primary text-center"},"Go Back"))),s.a.createElement("div",{className:"col-sm-4"})))}}]),t}(o.Component),w=function(e){function t(){return Object(n.a)(this,t),Object(i.a)(this,Object(c.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(d.a,null,s.a.createElement("div",{className:"jumbotron"},s.a.createElement("div",{className:"container-fluid "},s.a.createElement(h.d,null,s.a.createElement(h.b,{path:"/item/:id",component:C}),s.a.createElement(h.b,{exact:!0,path:"/",component:k}),s.a.createElement(h.a,{from:"*",to:"/"})))))}}]),t}(o.Component);u.a.render(s.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.a9f63aff.chunk.js.map