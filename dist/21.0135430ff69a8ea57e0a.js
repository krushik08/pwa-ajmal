/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.7.0, @magento/upward-security-headers: ~1.0.11, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~12.6.0, @magento/pagebuilder: ~7.4.2, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/react-hooks: ^4.0.0, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{TMDl:function(t,n,r){"use strict"
var e=r("JPst"),o=r.n(e)()(function(t){return t[1]})
o.push([t.i,".buttons-root-ehl {\n    max-width: 100%;\n}\n.buttons-root-ehl > div {\n    display: inline-block;\n    margin-bottom: 0.5rem;\n    max-width: 100%;\n}\n.buttons-root-ehl button[class] {\n    max-width: 100%;\n    overflow: hidden;\n    min-width: var(--buttonMinWidth);\n}\n.buttons-stacked-tbJ {\n    display: flex;\n    flex-wrap: wrap;\n    flex-direction: column;\n}\n.buttons-inline-Aw1 > div {\n    -webkit-margin-end: 0.5rem;\n            margin-inline-end: 0.5rem;\n}\n",""]),o.locals={root:"buttons-root-ehl",stacked:"buttons-stacked-tbJ",inline:"buttons-inline-Aw1"},n.a=o},fwGW:function(t,n,r){"use strict"
r.r(n),r.d(n,"default",function(){return w})
var e=r("RIqP"),o=r.n(e),i=r("lSNA"),a=r.n(i),s=r("J4zp"),l=r.n(s),c=r("q1tI"),d=r.n(c),u=r("LboF"),f=r.n(u),g=r("TMDl"),p={injectType:"singletonStyleTag",insert:"head",singleton:!0},b=(f()(g.a,p),g.a.locals||{}),y=r("17x9"),m=r("y1Xp")
function _createForOfIteratorHelper(t,r){var o="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]
if(!o){if(Array.isArray(t)||(o=function _unsupportedIterableToArray(t,n){if(!t)return
if("string"==typeof t)return _arrayLikeToArray(t,n)
var r=Object.prototype.toString.call(t).slice(8,-1)
"Object"===r&&t.constructor&&(r=t.constructor.name)
if("Map"===r||"Set"===r)return Array.from(t)
if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return _arrayLikeToArray(t,n)}(t))||r&&t&&"number"==typeof t.length){o&&(t=o)
var i=0,a=function F(){}
return{s:a,n:function n(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function e(t){throw t},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,c=!0,d=!1
return{s:function s(){o=o.call(t)},n:function n(){var t=o.next()
return c=t.done,t},e:function e(t){d=!0,l=t},f:function f(){try{c||null==o.return||o.return()}finally{if(d)throw l}}}}function _arrayLikeToArray(t,n){(null==n||n>t.length)&&(n=t.length)
for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r]
return e}function ownKeys(t,n){var r=Object.keys(t)
if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t)
n&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable})),r.push.apply(r,e)}return r}var h=function Buttons(t){var n=Object(m.a)(b,t.classes),r=t.appearance,e=t.isSameWidth,i=t.textAlign,s=t.border,u=t.borderColor,f=t.borderWidth,g=t.borderRadius,p=t.marginTop,y=t.marginRight,h=t.marginBottom,w=t.marginLeft,O=t.paddingTop,v=t.paddingRight,j=t.paddingBottom,A=t.paddingLeft,x=t.children,T=t.cssClasses,S=void 0===T?[]:T,k=n["".concat(r)],L=Object(c.useRef)(null),R=d.a.useState(0),P=l()(R,2),W=P[0],C=P[1],I=function _objectSpread(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{}
n%2?ownKeys(Object(r),!0).forEach(function(n){a()(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}({border:s,borderColor:u,borderWidth:f,borderRadius:g,marginTop:p,marginRight:y,marginBottom:h,marginLeft:w,paddingTop:O,paddingRight:v,paddingBottom:j,paddingLeft:A},{"--buttonMinWidth":W?W+"px":null})
Object(c.useLayoutEffect)(function(){if(e){var t,n=0,r=_createForOfIteratorHelper(L.current.querySelectorAll("button"))
try{for(r.s();!(t=r.n()).done;){var o=t.value.offsetWidth
o>n&&(n=o)}}catch(t){r.e(t)}finally{r.f()}C(n)}},[e])
return I.justifyContent="flex-start",i&&(I.justifyContent={left:"flex-start",center:"center",right:"flex-end"}[i]||"flex-start",I.textAlign=i),d.a.createElement("div",{ref:L,style:I,className:[n.root,k].concat(o()(S)).join(" ")},x)}
h.propTypes={appearance:Object(y.oneOf)(["inline","stacked"]),classes:Object(y.shape)({root:y.string,stacked:y.string,inline:y.string}),isSameWidth:y.bool,textAlign:y.string,border:y.string,borderColor:y.string,borderWidth:y.string,borderRadius:y.string,marginTop:y.string,marginRight:y.string,marginBottom:y.string,marginLeft:y.string,paddingTop:y.string,paddingRight:y.string,paddingBottom:y.string,paddingLeft:y.string,cssClasses:Object(y.arrayOf)(y.string)}
var w=h}}])
