(this.webpackJsonpcocktail=this.webpackJsonpcocktail||[]).push([[0],{21:function(e,t,c){},22:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),r=c(14),i=c.n(r),a=(c(21),c(22),c(5)),l=c(0),o=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"nav-body",children:Object(l.jsx)("div",{className:"nav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/home",children:" Home "})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/cocktails",children:"Cocktails"})}),Object(l.jsx)("li",{children:Object(l.jsx)(a.b,{to:"/about",children:" About "})})]})})})})},j=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"home",children:Object(l.jsxs)("div",{className:" cocktail-house",children:[Object(l.jsx)("h1",{children:"Welcome to Cocktail House"}),Object(l.jsx)("p",{children:'"Electricity is actually made up of extremely tiny particles called electrons, that you cannot see with the naked eye unless you have been drinking."'})]})})})},h=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"about",children:[Object(l.jsx)("h2",{children:"Something About Cocktail"}),Object(l.jsx)("p",{children:'The Oxford Dictionaries define cocktail as "An alcoholic drink consisting of a spirit or spirits mixed with other ingredients, such as fruit juice or cream". A cocktail can contain alcohol, a sugar, and a bitter/citrus. ... Mixed drinks without alcohol that resemble cocktails are known as "mocktails" or "virgin cocktails".'})]})})},d=c(7),b=c.n(d),u=c(9),x=c(6),O=n.a.createContext(),m=function(e){var t=e.children,c=Object(s.useState)([]),n=Object(x.a)(c,2),r=n[0],i=n[1],a=Object(s.useState)(!0),o=Object(x.a)(a,2),j=o[0],h=o[1],d=Object(s.useState)(""),m=Object(x.a)(d,2),f=m[0],g=m[1],k=function(){var e=Object(u.a)(b.a.mark((function e(){var t,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,h(!0),e.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=".concat(f));case 4:return t=e.sent,e.next=7,t.json();case 7:c=e.sent,i(c.drinks),h(!1),e.next=17;break;case 12:e.prev=12,e.t0=e.catch(0),h(!1),i(null),console.log("data fetching error");case 17:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){k()}),[f]),Object(l.jsx)(O.Provider,{value:{cocktailsList:r,loading:j,searchTerm:f,setSearchTerm:g},children:t})},f=function(){return Object(s.useContext)(O)},g=function(e){var t=e.cocktail,c=t.strDrink,s=t.idDrink,n=t.strDrinkThumb,r=t.strAlcoholic;return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"single-cocktail",children:[Object(l.jsx)("div",{className:"overflow-hidden",children:Object(l.jsx)("img",{src:n,alt:c})}),Object(l.jsxs)("h6",{children:["Name: ",Object(l.jsxs)("span",{className:" name",children:[" ",c," "]})]}),Object(l.jsxs)("small",{title:"".concat(r," Drink"),children:[" ",r," "]}),Object(l.jsx)(a.b,{to:"/cocktails/".concat(s),children:"Details"})]})})},k=function(){var e=f(),t=e.cocktailsList,c=e.loading,s=e.searchTerm;return c?Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("div",{className:"spinner-grow",role:"status"})}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("section",{className:"cocktail-list",children:[null===t?Object(l.jsx)("h2",{className:"cocktail-title",children:" No cocktail Found "}):Object(l.jsx)("h2",{className:"cocktail-title",children:" Cocktails "}),null!==t?Object(l.jsxs)("small",{className:"info",children:["Search result for ",s," = ",t.length]}):null,Object(l.jsx)("div",{className:"all-cocktail mt-4",children:null===t||void 0===t?void 0:t.map((function(e,t){return Object(l.jsx)(g,{cocktail:e},t)}))})]})})},p=function(){var e=Object(s.useRef)(null),t=f(),c=t.searchTerm,n=t.setSearchTerm;return Object(s.useEffect)((function(){e.current.focus()}),[]),Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"cocktails",children:[Object(l.jsx)("section",{className:"search-tab",children:Object(l.jsxs)("div",{className:"form-group d-flex flex-column",children:[Object(l.jsx)("input",{ref:e,type:"text",className:"form-control form-control-sm bg-dark text-light",placeholder:"search vodka / gin / rum etc",value:c,onChange:function(e){return n(e.target.value)}}),Object(l.jsx)("small",{className:"text-success",children:"Search Cocktail by Name"})]})}),Object(l.jsx)(k,{})]})})},v=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:" text-center error ",children:[Object(l.jsx)("h2",{children:"Sorry! Nothing found in this url."}),Object(l.jsx)("p",{children:"please with access valid url"})]})})},N=c(2),w=function(){var e=Object(N.f)().id,t=Object(s.useState)(null),c=Object(x.a)(t,2),n=c[0],r=c[1],i=Object(s.useState)(!1),o=Object(x.a)(i,2),j=o[0],h=o[1],d=function(){var t=Object(u.a)(b.a.mark((function t(){var c,s,n,i,a,l,o,j,d,u,x,O,m,f;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,h(!0),t.next=4,fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=".concat(e));case 4:return c=t.sent,t.next=7,c.json();case 7:(s=t.sent).drinks?(n=s.drinks[0],i=n.strDrink,a=n.strCategory,l=n.strAlcoholic,o=n.strGlass,j=n.strInstructions,d=n.strDrinkThumb,u=n.strIngredient1,x=n.strIngredient2,O=n.strIngredient3,m=n.strIngredient4,f=n.strIngredient5,r({name:i,category:a,alcoholic:l,glass:o,instruction:j,img:d,ingredient:[u,x,O,m,f]})):(r(null),console.log(" no drink")),h(!1),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(0),h(!1),console.log("data fetching error from indivusal");case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();if(Object(s.useEffect)((function(){d()}),[e]),j)return Object(l.jsx)("div",{className:"loading",children:Object(l.jsx)("div",{className:"spinner-grow",role:"status"})});if(!n)return Object(l.jsxs)("h2",{className:"text-center bg-dark text-light ",style:{height:"calc( 100vh - 68px )"},children:["No info about this id - ",e]});var O=n.name,m=n.category,f=n.alcoholic,g=n.glass,k=n.instruction,p=n.img,v=n.ingredient;return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)("div",{className:"indivisual",children:Object(l.jsxs)("section",{children:[Object(l.jsxs)("div",{className:"py-3 d-flex justify-content-between  ",children:[Object(l.jsxs)(a.b,{className:" back-button",to:"/cocktails",children:["Go to Cocktails ",Object(l.jsx)("i",{className:"fas fa-arrow-right    "})]}),Object(l.jsxs)(a.b,{className:" back-button",to:"/home",children:[Object(l.jsx)("i",{className:"fas fa-arrow-left    "})," Go to Home"]})]}),Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("img",{src:p,alt:O})}),Object(l.jsxs)("h2",{children:[" ",O," "]}),Object(l.jsxs)("div",{className:"cock-info",children:[Object(l.jsxs)("h6",{children:[" Category: ",m," "]}),Object(l.jsxs)("h6",{children:[" It is ",f," "]}),Object(l.jsxs)("h6",{children:[" Glass Type: ",g," "]})]}),Object(l.jsx)("h5",{className:"text-primary",children:" Ingredients: "})," ",v.map((function(e,t){return e?Object(l.jsxs)("span",{children:[" ",t+1,". ",e," "]},t):null})),Object(l.jsxs)("p",{children:[" ",Object(l.jsx)("span",{className:"text-danger px-0",children:"Instruction:"})," ",k," "]})]})})})};var y=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(a.a,{children:[Object(l.jsx)(o,{}),Object(l.jsxs)(N.c,{children:[Object(l.jsx)(N.a,{path:"/home",children:Object(l.jsx)(j,{})}),Object(l.jsx)(N.a,{exact:!0,path:"/about",children:Object(l.jsx)(h,{})}),Object(l.jsx)(N.a,{exact:!0,path:"/cocktails",children:Object(l.jsx)(p,{})}),Object(l.jsx)(N.a,{exact:!0,path:"/cocktails/:id",children:Object(l.jsx)(w,{})}),Object(l.jsx)(N.a,{children:Object(l.jsx)(v,{})})]})]})})},C=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,34)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,r=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),r(e),i(e)}))};i.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(m,{children:Object(l.jsx)(y,{})})}),document.getElementById("root")),C()}},[[33,1,2]]]);
//# sourceMappingURL=main.a6672835.chunk.js.map