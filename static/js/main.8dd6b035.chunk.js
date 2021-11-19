(this["webpackJsonpgoit-react-hw-07-phonebook"]=this["webpackJsonpgoit-react-hw-07-phonebook"]||[]).push([[0],{17:function(t,e,n){t.exports={loading:"ContactList_loading__HU5qS",wrapper:"ContactList_wrapper__32iG5"}},28:function(t,e,n){t.exports={filterInput:"Filter_filterInput__3MJ7t"}},29:function(t,e,n){t.exports={delete:"ListElement_delete__2cUOt"}},61:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var c=n(0),r=n.n(c),a=n(13),o=n.n(a),i=n(9),u=n(18),s=n(65),b=n(7),l=n.n(b),m=n(6),j=n(10),d=n.n(j),f=n(2),O=Object(f.b)("items/getContactsRequest"),h=Object(f.b)("items/getContactsSuccess"),p=Object(f.b)("items/getContactsError"),v=Object(f.b)("filter/changeFilter"),x=Object(f.b)("items/addItemRequest"),g=Object(f.b)("items/addItemSuccess"),_=Object(f.b)("items/addItemError"),C=Object(f.b)("items/removeItemRequest"),N=Object(f.b)("items/removeItemSuccess"),I=Object(f.b)("items/removeItemError");Object(f.b)("items/filterItemsRequest"),Object(f.b)("items/filterItemsSuccess"),Object(f.b)("items/filterItemsError");d.a.defaults.baseURL="http://localhost:3333";var w,k,y=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},L=function(t){return t.contacts.loading},A=n(1),B=Object(m.b)((function(t){return{items:y(t)}}),(function(t){return{addNewContact:function(e){return t(function(t){var e=t.name,n=t.number;return function(t){var c={name:e,number:n};t(x()),d.a.post("/contacts/",c).then((function(e){var n=e.data;return t(g(n))})).catch((function(e){t(_(e))}))}}(e))}}}))((function(t){var e=t.items,n=t.addNewContact,r=Object(s.a)(),a=Object(s.a)(),o={id:r,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."},b={id:a,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +"},m=Object(c.useState)(""),j=Object(u.a)(m,2),d=j[0],f=j[1],O=Object(c.useState)(""),h=Object(u.a)(O,2),p=h[0],v=h[1],x=function(t){var e=t.target,n=e.value;switch(e.name){case"name":f(n);break;case"number":v(n);break;default:return}},g=function(t){var c=t.id;0!==e.filter((function(t){return t.name.toLowerCase()===d.toLowerCase()})).length?alert("".concat(d," is already in contacts.")):n({id:c,name:d,number:p})},_=function(){f(""),v("")};return Object(A.jsxs)("form",{className:l.a.contactForm,onSubmit:function(t){t.preventDefault(),g({id:Object(s.a)()}),_()},children:[Object(A.jsxs)("div",{className:l.a.nameBlock,children:[Object(A.jsx)("label",{htmlFor:r,className:l.a.labelName,children:"Name"}),Object(A.jsx)("input",Object(i.a)(Object(i.a)({value:d,required:!0},o),{},{onChange:x}))]}),Object(A.jsxs)("div",{className:l.a.numberBlock,children:[Object(A.jsx)("label",{htmlFor:a,className:l.a.labelNumber,children:"Number"}),Object(A.jsx)("input",Object(i.a)(Object(i.a)({value:p,required:!0},b),{},{onChange:x}))]}),Object(A.jsx)("button",{type:"submit",children:"Add contact "})]})})),S=n(28),q=n.n(S),E=Object(m.b)((function(t){return{value:F(t)}}),(function(t){return{filterHandler:function(e){return t(v(e.target.value))}}}))((function(t){var e=t.value,n=t.filterHandler;return Object(A.jsxs)("div",{children:["Find contacts by name",Object(A.jsx)("input",{className:q.a.filterInput,type:"text",value:e,onChange:n})]})})),H=n(29),M=n.n(H),R=Object(m.b)(null,(function(t){return{deleteHandler:function(e){return t((n=e.target.name,function(t){t(C()),d.a.delete("/contacts/".concat(n)).then((function(){return t(N(n))})).catch((function(e){t(I(e))}))}));var n}}}))((function(t){var e=t.name,n=t.number,c=t.deleteBtnNameAsId,r=t.deleteHandler;return Object(A.jsxs)("li",{children:[e,": ",n,Object(A.jsx)("button",{className:M.a.delete,type:"button",name:c,onClick:r,children:"Delete"})]})})),z=n(17),J=n.n(z),U=Object(m.b)((function(t){return{isLoaderActive:L(t),contactsList:(e=y(t),n=F(t),e.filter((function(t){return t.name.toLowerCase().includes(n.toLowerCase())})))};var e,n}),(function(t){return{getInitialContacts:function(){return t((function(t){t(O()),d.a.get("/contacts").then((function(e){var n=e.data;return t(h(n))})).catch((function(e){return t(p(e))}))}))}}}))((function(t){var e=t.contactsList,n=t.getInitialContacts,r=t.isLoaderActive;return Object(c.useEffect)((function(){n()}),[]),Object(A.jsxs)("ul",{className:J.a.wrapper,children:[r&&Object(A.jsx)("h2",{className:J.a.loading,children:"Loading..."}),e.map((function(t){var e=t.id,n=t.name,c=t.number;return Object(A.jsx)(R,{name:n,number:c,deleteBtnNameAsId:e},e)}))]})})),Z=(n(61),function(){return Object(A.jsxs)("div",{className:"App",children:[Object(A.jsx)("h1",{children:"Phonebook"}),Object(A.jsx)(B,{}),Object(A.jsx)("h2",{children:"Contacts"}),Object(A.jsx)(E,{}),Object(A.jsx)(U,{})]})}),P=n(3),D=n(31),G=n(5),T=Object(f.c)([],(w={},Object(P.a)(w,h,(function(t,e){return e.payload})),Object(P.a)(w,g,(function(t,e){var n=e.payload;return[].concat(Object(D.a)(t),[n])})),Object(P.a)(w,N,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),w)),V=Object(f.c)("",Object(P.a)({},v,(function(t,e){return e.payload}))),W=Object(f.c)(!1,(k={},Object(P.a)(k,O,(function(){return!0})),Object(P.a)(k,h,(function(){return!1})),Object(P.a)(k,p,(function(){return!1})),Object(P.a)(k,x,(function(){return!0})),Object(P.a)(k,g,(function(){return!1})),Object(P.a)(k,_,(function(){return!1})),Object(P.a)(k,C,(function(){return!0})),Object(P.a)(k,N,(function(){return!1})),Object(P.a)(k,I,(function(){return!1})),k)),X=Object(G.b)({items:T,filter:V,loading:W}),$=n(30),K=n.n($),Q=function(t){return function(t){return function(e){console.log("my MiddleWare - for testing only "),t(e)}}},Y=Object(f.a)({reducer:{contacts:X},middleware:function(t){return t().concat(Q).concat(K.a)}});o.a.render(Object(A.jsx)(r.a.StrictMode,{children:Object(A.jsx)(m.a,{store:Y,children:Object(A.jsx)(Z,{})})}),document.getElementById("root"))},7:function(t,e,n){t.exports={contactForm:"ContactForm_contactForm__3gPPT",labelName:"ContactForm_labelName__2pSVt",labelNumber:"ContactForm_labelNumber__1Xreq",nameBlock:"ContactForm_nameBlock__3jnAU",numberBlock:"ContactForm_numberBlock__12ZMH"}}},[[63,1,2]]]);
//# sourceMappingURL=main.8dd6b035.chunk.js.map