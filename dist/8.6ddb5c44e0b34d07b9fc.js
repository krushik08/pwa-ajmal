/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.7.0, @magento/upward-security-headers: ~1.0.11, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~12.6.0, @magento/pagebuilder: ~7.4.2, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/react-hooks: ^4.0.0, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{SAkj:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return A}),r.d(t,"FilterSidebarShimmer",function(){return S.a})
var n=r("J4zp"),a=r.n(n),l=r("q1tI"),i=r.n(l),o=r("kriW"),c=r("17x9"),u=r("RIqP"),s=r.n(u),f=r("+TN3"),d=r("Ty5D"),p=r("OlZo"),b=r("y1Xp"),y=r("Mhql"),m=r("+wQL"),O=r("qykw")
function _createForOfIteratorHelper(t,r){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!a){if(Array.isArray(t)||(a=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var r=Object.prototype.toString.call(e).slice(8,-1)
"Object"===r&&e.constructor&&(r=e.constructor.name)
if("Map"===r||"Set"===r)return Array.from(e)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(e,t)}(t))||r&&t&&"number"==typeof t.length){a&&(t=a)
var l=0,i=function F(){}
return{s:i,n:function n(){return l>=t.length?{done:!0}:{done:!1,value:t[l++]}},e:function e(t){throw t},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,u=!1
return{s:function s(){a=a.call(t)},n:function n(){var e=a.next()
return c=e.done,e},e:function e(t){u=!0,o=t},f:function f(){try{c||null==a.return||a.return()}finally{if(u)throw o}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r]
return n}var h=r("6QXU"),v=r("t1DO"),g=r("th2e"),j=r("bGkD"),w=function FilterSidebar(e){var t=e.filters,r=e.filterCountToOpen,n=function useFilterSidebar(e){var t=e.filters,r=Object(b.a)(O.a,e.operations).getFilterInputsQuery,n=Object(l.useState)(!1),i=a()(n,2),o=i[0],c=i[1],u=Object(p.b)(),h=a()(u,2),v=h[0].drawer,g=h[1],j=g.toggleDrawer,w=g.closeDrawer,A=Object(y.a)(),S=a()(A,2),k=S[0],_=S[1],I=Object(l.useRef)(null),C="filter"===v,E=Object(d.f)(),F=Object(d.g)(),M=F.pathname,N=F.search,T=Object(f.a)(r).data,R=Object(l.useMemo)(function(){return t.map(function(e){return e.attribute_code})},[t]),D=Object(l.useMemo)(function(){var e=new Set
return"/search.html"!==M&&(e.add("category_id"),e.add("category_uid")),e},[M]),J=Object(l.useMemo)(function(){var e,t=new Set,r=_createForOfIteratorHelper(T?T.__type.inputFields:[])
try{for(r.s();!(e=r.n()).done;){var n=e.value.name,a=R.includes(n),l=!D.has(n)
a&&l&&t.add(n)}}catch(e){r.e(e)}finally{r.f()}return t},[D,R,T]),L=function isBooleanFilter(e){var t=JSON.stringify(e)
return e.length<=2&&(t.includes(JSON.stringify({__typename:"AggregationOption",label:"0",value:"0"}))||t.includes(JSON.stringify({__typename:"AggregationOption",label:"1",value:"1"})))},q=Object(l.useMemo)(function(){var e,r=new Map,n=new Set,a=new Map,l=new Map,i=_createForOfIteratorHelper(Object(m.e)(s()(t)))
try{for(i.s();!(e=i.n()).done;){var o=e.value,c=o.options,u=o.label,f=o.attribute_code
if(J.has(f)){var d=[]
if(r.set(f,u),n.add("".concat(f,"[filter]")),L(c))a.set(f,"boolean"),d.push({title:"No",value:"0",label:u+":No"}),d.push({title:"Yes",value:"1",label:u+":Yes"})
else{a.set(f,null)
var p,b=_createForOfIteratorHelper(c)
try{for(b.s();!(p=b.n()).done;){var y=p.value,O=y.label,h=y.value
d.push({title:Object(m.f)(O),value:h})}}catch(e){b.e(e)}finally{b.f()}}l.set(f,d)}}}catch(e){i.e(e)}finally{i.f()}return[r,n,l,a]},[t,J]),H=a()(q,4),B=H[0],Q=H[1],Y=H[2],x=H[3]
Object(l.useEffect)(function(){if(o){var e=Object(m.c)(N,Q,k)
E.push({pathname:M,search:e}),c(!1)}},[Q,k,E,o,M,N])
var z=Object(l.useCallback)(function(){j("filter")},[j]),K=Object(l.useCallback)(function(){w()},[w]),P=Object(l.useCallback)(function(){c(!0),K()},[K]),U=Object(l.useCallback)(function(){_.clear(),c(!0)},[_,c]),X=Object(l.useCallback)(function(e){if(C)switch(e.keyCode){case 27:K()}},[C,K])
return Object(l.useEffect)(function(){var e=null===I.current&&"filter"===v,t="filter"===I.current&&null===v
if(e||t){var r=Object(m.d)(N,Q,Y)
_.setItems(r)}t&&K(),I.current=v},[v,_,Y,Q,N,K]),Object(l.useEffect)(function(){var e=Object(m.d)(N,Q,Y)
_.setItems(e)},[_,Y,Q,N]),{filterApi:_,filterItems:Y,filterKeys:Q,filterNames:B,filterFrontendInput:x,filterState:k,handleApply:P,handleClose:K,handleKeyDownActions:X,handleOpen:z,handleReset:U,isApplying:o,isOpen:C}}({filters:t}),c=n.filterApi,u=n.filterItems,w=n.filterNames,A=n.filterFrontendInput,S=n.filterState,k=n.handleApply,_=n.handleReset,I=Object(l.useRef)(),C=Object(b.a)(j.a,e.classes),E=Object(l.useCallback)(function(){var e=I.current
if(e&&"function"==typeof e.getBoundingClientRect){var t=e.getBoundingClientRect().top,r=window.scrollY+t-150
window.scrollTo(0,r)}k.apply(void 0,arguments)},[k,I]),F=Object(l.useMemo)(function(){return Array.from(u,function(e,t){var n=a()(e,2),l=n[0],o=n[1],u=S.get(l),s=w.get(l),f=A.get(l)
return i.a.createElement(g.a,{key:l,filterApi:c,filterState:u,filterFrontendInput:f,group:l,items:o,name:s,onApply:E,initialOpen:t<r})})},[c,u,w,A,S,r,E]),M=S.size?i.a.createElement("div",{className:C.action},i.a.createElement(h.a,{type:"button",onClick:_},i.a.createElement(o.a,{id:"filterModal.action",defaultMessage:"Clear all"}))):null
return i.a.createElement("aside",{className:C.root,ref:I,"aria-busy":"false"},i.a.createElement("div",{className:C.body},i.a.createElement("div",{className:C.header},i.a.createElement("h2",{className:C.headerTitle},i.a.createElement(o.a,{id:"filterModal.headerTitle",defaultMessage:"Filters"}))),i.a.createElement(v.a,{filterApi:c,filterNames:w,filterState:S,onRemove:E}),M,i.a.createElement("ul",{className:C.blocks},F)))}
w.defaultProps={filterCountToOpen:3},w.propTypes={classes:Object(c.shape)({action:c.string,blocks:c.string,body:c.string,header:c.string,headerTitle:c.string,root:c.string,root_open:c.string}),filters:Object(c.arrayOf)(Object(c.shape)({attribute_code:c.string,items:c.array})),filterCountToOpen:c.number}
var A=w,S=r("LlM3")}}])
