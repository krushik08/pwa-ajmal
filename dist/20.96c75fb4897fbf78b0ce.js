/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.7.0, @magento/upward-security-headers: ~1.0.11, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~12.6.0, @magento/pagebuilder: ~7.4.2, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/react-hooks: ^4.0.0, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{"1//Z":function(e,t,o){"use strict"
o.r(t),o.d(t,"default",function(){return z}),o.d(t,"ProductOptionsShimmer",function(){return X.a})
var r=o("pVnL"),n=o.n(r),a=o("q1tI"),c=o.n(a),s=o("17x9"),i=o("kriW"),l=o("y1Xp"),u={fashion_color:"swatch"},d=o("EpH3"),b=o("oTwF"),f=o("JoNN"),h=o("LboF"),p=o.n(h),m=o("BDXZ"),g={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(p()(m.a,g),m.a.locals||{}),y=function Swatch(e){var t=e.hasFocus,o=e.isSelected,r=e.item,n=r.label,s=r.value_index,i=r.swatch_data,u=e.onClick,h=e.style,p=e.isEverythingOutOfStock,m=e.isOptionOutOfStock,g=function useSwatch(e){var t=e.onClick,o=e.value_index
return{handleClick:Object(a.useCallback)(function(){t(o)},[o,t])}}({onClick:u,value_index:s}).handleClick,y=Object(l.a)(O,e.classes),v=Object(a.useMemo)(function(){return o?y.checked:y.unchecked},[y.checked,y.unchecked,o]),_=h
if(i){var S=i.thumbnail,k=i.value,w=""
if(S){var C=Object(d.c)(S,"image-swatch")(48)
w='url("'.concat(C,'")')}else w=k
_=Object.assign({},h,{"--venia-swatch-bg":w})}var x=y[function getClassName(e,t,o,r,n){return"".concat(e).concat(t?"_selected":"").concat(o?"_focused":"").concat(n||r?"_outOfStock":"")}("root",o,t,m,p)]
return c.a.createElement("button",{className:x,onClick:g,style:_,title:n,type:"button",disabled:p||m},!m&&c.a.createElement(b.a,{classes:{root:v},src:f.a}))}
y.propTypes={hasFocus:s.bool,isSelected:s.bool,item:Object(s.shape)({label:s.string.isRequired,value_index:Object(s.oneOfType)([s.number,s.string]).isRequired}).isRequired,onClick:s.func.isRequired,style:s.object},y.defaultProps={hasFocus:!1,isSelected:!1}
var v=y,_=o("HNsA"),S={injectType:"singletonStyleTag",insert:"head",singleton:!0},k=(p()(_.a,S),_.a.locals||{}),w=function SwatchList(e){var t=e.getItemKey,o=e.selectedValue,r=void 0===o?{}:o,n=e.items,s=e.onSelectionChange,i=e.isEverythingOutOfStock,u=e.outOfStockVariants,d=Object(l.a)(k,e.classes),b=Object(a.useMemo)(function(){return n.map(function(e){var o,n=e.label===r.label
u&&u.length>0&&(o=u.flat().includes(e.value_index))
return c.a.createElement(v,{key:t(e),isSelected:n,item:e,onClick:s,isEverythingOutOfStock:i,isOptionOutOfStock:o})})},[t,r.label,n,s,i,u])
return c.a.createElement("div",{className:d.root},b)}
w.propTypes={classes:Object(s.shape)({root:s.string}),getItemKey:s.func,selectedValue:s.object,items:Object(s.arrayOf)(s.object),onSelectionChange:s.func},w.displayName="SwatchList"
var C=w,x=o("fivx"),j={injectType:"singletonStyleTag",insert:"head",singleton:!0},T=(p()(x.a,j),x.a.locals||{}),V=function Tile(e){var t=e.hasFocus,o=e.isSelected,r=e.item,n=r.label,s=r.value_index,i=e.onClick,u=e.isEverythingOutOfStock,d=e.isOptionOutOfStock,b=function useTile(e){var t=e.onClick,o=e.value_index
return{handleClick:Object(a.useCallback)(function(){t(o)},[o,t])}}({onClick:i,value_index:s}).handleClick,f=Object(l.a)(T,e.classes)[function getClassName(e,t,o,r,n){return"".concat(e).concat(t?"_selected":"").concat(o?"_focused":"").concat(n||r?"_outOfStock":"")}("root",o,t,d,u)]
return c.a.createElement("button",{className:f,onClick:b,title:n,type:"button",disabled:u||d},c.a.createElement("span",null,n))},E=V
V.propTypes={hasFocus:s.bool,isSelected:s.bool,item:Object(s.shape)({label:s.string.isRequired,value_index:Object(s.oneOfType)([s.number,s.string]).isRequired}).isRequired,onClick:s.func.isRequired},V.defaultProps={hasFocus:!1,isSelected:!1}
var L=o("O6fr"),N=function TileList(e){var t=e.getItemKey,o=e.selectedValue,r=void 0===o?{}:o,n=e.items,s=e.onSelectionChange,i=e.isEverythingOutOfStock,u=e.outOfStockVariants,d=Object(l.a)(L.a,e.classes),b=Object(a.useMemo)(function(){return n.map(function(e){var o,n=e.label===r.label
u&&u.length>0&&(o=u.flat().includes(e.value_index))
return c.a.createElement(E,{key:t(e),isSelected:n,item:e,onClick:s,isEverythingOutOfStock:i,isOptionOutOfStock:o})})},[t,r.label,n,s,i,u])
return c.a.createElement("div",{className:d.root},b)}
N.propTypes={classes:Object(s.shape)({root:s.string}),getItemKey:s.func,selectedValue:s.object,items:Object(s.arrayOf)(s.object),onSelectionChange:s.func},N.displayName="TileList"
var A=N,I=o("WqNE"),J=o("J4zp"),R=o.n(J),q=function getItemKey(e){return e.value_index},M=function getListComponent(e,t){return"swatch"===function(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).attribute_code
return u[e]}({attribute_code:e,values:t})?C:A},F=function Option(e){var t=e.attribute_code,o=e.attribute_id,r=e.label,n=e.onSelectionChange,s=e.selectedValue,u=e.values,d=e.isEverythingOutOfStock,b=e.outOfStockVariants,f=function useOption(e){var t=e.attribute_id,o=e.onSelectionChange,r=e.selectedValue,n=e.values,c=Object(a.useState)(null),s=R()(c,2),i=s[0],l=s[1],u=Object(a.useMemo)(function(){var e={},t=i||r
return t&&(e=n.find(function(e){return e.default_label===t})||{}),e},[r,i,n]),d=Object(a.useMemo)(function(){return new Map(n.map(function(e){return[e.value_index,e.store_label]}))},[n]),b=i||u.default_label||"None"
return{handleSelectionChange:Object(a.useCallback)(function(e){l(d.get(e)),o&&o(t,e)},[t,o,d]),initialSelection:u,selectedValueDescription:b}}({attribute_id:o,label:r,onSelectionChange:n,selectedValue:s,values:u}),h=f.handleSelectionChange,p=f.initialSelection,m=f.selectedValueDescription,g=Object(a.useMemo)(function(){return M(t,u)},[t,u]),O=Object(l.a)(I.a,e.classes)
return c.a.createElement("div",{className:O.root},c.a.createElement("span",{className:O.title},r),c.a.createElement(g,{getItemKey:q,selectedValue:p,items:u,onSelectionChange:h,isEverythingOutOfStock:d,outOfStockVariants:b}),c.a.createElement("dl",{className:O.selection},c.a.createElement("dt",{className:O.selectionLabel},c.a.createElement(i.a,{id:"productOptions.selectedLabel",defaultMessage:"Selected {label}:",values:{label:r}})),c.a.createElement("dd",null,m)))}
F.propTypes={attribute_code:s.string.isRequired,attribute_id:s.string,classes:Object(s.shape)({root:s.string,title:s.string}),label:s.string.isRequired,onSelectionChange:s.func,selectedValue:Object(s.oneOfType)([s.number,s.string]),values:Object(s.arrayOf)(s.object).isRequired}
var K=F
function _createForOfIteratorHelper(t,o){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!r){if(Array.isArray(t)||(r=function _unsupportedIterableToArray(e,t){if(!e)return
if("string"==typeof e)return _arrayLikeToArray(e,t)
var o=Object.prototype.toString.call(e).slice(8,-1)
"Object"===o&&e.constructor&&(o=e.constructor.name)
if("Map"===o||"Set"===o)return Array.from(e)
if("Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o))return _arrayLikeToArray(e,t)}(t))||o&&t&&"number"==typeof t.length){r&&(t=r)
var a=0,c=function F(){}
return{s:c,n:function n(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function e(t){throw t},f:c}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,u=!1
return{s:function s(){r=r.call(t)},n:function n(){var e=r.next()
return l=e.done,e},e:function e(t){u=!0,i=t},f:function f(){try{l||null==r.return||r.return()}finally{if(u)throw i}}}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length)
for(var o=0,r=new Array(t);o<t;o++)r[o]=e[o]
return r}var P=function Options(e){var t=e.classes,o=e.onSelectionChange,r=e.options,s=e.selectedValues,i=void 0===s?[]:s,l=e.isEverythingOutOfStock,u=e.outOfStockVariants,d=function useOptions(e){var t,o=e.onSelectionChange,r=e.selectedValues,n=e.options,c=Object(a.useCallback)(function(e,t){o&&o(e,t)},[o]),s=new Map,i=_createForOfIteratorHelper(r)
try{var l=function _loop(){var e=t.value,o=e.id,r=e.value_label,a=n.find(function(e){return e.attribute_id===String(o)}).label
s.set(a,r)}
for(i.s();!(t=i.n()).done;)l()}catch(e){i.e(e)}finally{i.f()}return{handleSelectionChange:c,selectedValueMap:s}}({onSelectionChange:o,selectedValues:i,options:r}),b=d.handleSelectionChange,f=d.selectedValueMap
return r.map(function(e){return c.a.createElement(K,n()({},e,{classes:t,key:e.attribute_id,onSelectionChange:b,selectedValue:f.get(e.label),isEverythingOutOfStock:l,outOfStockVariants:u}))})}
P.propTypes={onSelectionChange:s.func,options:s.array.isRequired,selectedValues:s.array}
var z=P,X=o("xg11")},BDXZ:function(e,t,o){"use strict"
var r=o("JPst"),n=o.n(r),a=o("fivx"),c=n()(function(e){return e[1]})
c.i(a.a,"",!0),c.push([e.i,'/* TODO @TW: review. This relies on custom prop to set color from JSX "style" prop. */\n.swatch-root-6VC {\n    --venia-swatch-bg: var(--venia-global-color-gray-100);\n    background: var(--venia-swatch-bg);\n}\n\n/* TODO @TW: review. This relies on custom prop to set color from JSX "style" prop. */\n.swatch-root_selected--kC {\n\n    background: linear-gradient(-45deg, rgba(0, 0, 0, 0.2), transparent),\n        var(--venia-swatch-bg);\n}\n\n.swatch-root_focused-27- {\n}\n\n.swatch-root_selected_focused-WQx {\n}\n\n.swatch-checked-blv {\n    opacity: 1;\n    transition-property: opacity;\n    transition-duration: 256ms;\n}\n\n.swatch-unchecked-Aap {\n    opacity: 0;\n}\n\n.swatch-root_outOfStock-Xid,\n.swatch-root_selected_outOfStock-Ul1 {\n}\n.swatch-root_outOfStock-Xid:after,\n.swatch-root_selected_outOfStock-Ul1:after {\n    content: \'\';\n    position: absolute;\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    width: 62px;\n    transform: rotate(-45deg);\n}\n',""]),c.locals={root:"swatch-root-6VC "+a.a.locals.root+" border-shaded-10 text-white w-[3rem]",root_selected:"swatch-root_selected--kC swatch-root-6VC "+a.a.locals.root+" border-shaded-10 text-white w-[3rem]",root_focused:"swatch-root_focused-27- swatch-root-6VC "+a.a.locals.root+" border-shaded-10 text-white w-[3rem]",root_selected_focused:"swatch-root_selected_focused-WQx swatch-root_selected--kC swatch-root-6VC "+a.a.locals.root+" border-shaded-10 text-white w-[3rem]",checked:"swatch-checked-blv",unchecked:"swatch-unchecked-Aap swatch-checked-blv",root_outOfStock:"swatch-root_outOfStock-Xid swatch-root-6VC "+a.a.locals.root+" border-shaded-10 text-white w-[3rem] opacity-40 border-2 border-solid border-gray-400",root_selected_outOfStock:"swatch-root_selected_outOfStock-Ul1 swatch-root-6VC "+a.a.locals.root+" border-shaded-10 text-white w-[3rem] opacity-40 border-2 border-solid border-gray-400"},t.a=c},HNsA:function(e,t,o){"use strict"
var r=o("JPst"),n=o.n(r),a=o("O7RW"),c=n()(function(e){return e[1]})
c.i(a.a,"",!0),c.push([e.i,".swatchList-root-m0x {\n}\n",""]),c.locals={root:"swatchList-root-m0x "+a.a.locals.root},t.a=c},fivx:function(e,t,o){"use strict"
var r=o("JPst"),n=o.n(r),a=o("G4iS"),c=n()(function(e){return e[1]})
c.i(a.a,"",!0),c.push([e.i,".tile-root-zJL {\n    position: relative;\n}\n\n.tile-root_selected-Kmb {\n}\n\n.tile-root_focused-Rt5 {\n}\n\n.tile-root_selected_focused-sYj {\n}\n\n.tile-root_outOfStock-Ps6,\n.tile-root_selected_outOfStock-IAL {\n}\n.tile-root_outOfStock-Ps6:after,\n.tile-root_selected_outOfStock-IAL:after {\n    content: '';\n    position: absolute;\n    border-top: 2px solid rgb(var(--venia-global-color-gray-400));\n    width: 62px;\n    transform: rotate(-45deg);\n}\n",""]),c.locals={root:"tile-root-zJL "+a.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm",root_selected:"tile-root_selected-Kmb tile-root-zJL "+a.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-gray-900 text-white",root_focused:"tile-root_focused-Rt5 tile-root-zJL "+a.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm",root_selected_focused:"tile-root_selected_focused-sYj tile-root_selected-Kmb tile-root-zJL "+a.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-gray-900 text-white",root_outOfStock:"tile-root_outOfStock-Ps6 tile-root-zJL "+a.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-disabledTile opacity-50 border-2 border-solid border-gray-400 text-gray-600",root_selected_outOfStock:"tile-root_selected_outOfStock-IAL tile-root-zJL "+a.a.locals.root+" border border-solid border-strong h-[3rem] min-w-[3rem] px-2xs py-0 rounded-sm bg-disabledTile opacity-50 border-2 border-solid border-gray-400 text-gray-600"},t.a=c}}])