/*! @version pwa-studio: 0.0.1, @magento/venia-ui: ~9.7.0, @magento/upward-security-headers: ~1.0.11, @magento/pwa-theme-venia: ~1.4.0, @magento/pwa-buildpack: ~11.4.1, @magento/peregrine: ~12.6.0, @magento/pagebuilder: ~7.4.2, @magento/eslint-config: ~1.5.0, @magento/babel-preset-peregrine: ~1.2.2, @apollo/react-hooks: ^4.0.0, @apollo/client: ~3.5.0 */
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Pbq8:function(e,t,r){"use strict"
r.r(t),r.d(t,"default",function(){return I}),r.d(t,"BannerShimmer",function(){return x.a})
var n=r("RIqP"),o=r.n(n),a=r("pVnL"),i=r.n(a),l=r("lSNA"),c=r.n(l),s=r("J4zp"),g=r.n(s),d=r("q1tI"),u=r.n(d),v=r("LboF"),b=r.n(v),p=r("1h9V"),y={injectType:"singletonStyleTag",insert:"head",singleton:!0},O=(b()(p.a,y),p.a.locals||{}),m=r("y1Xp"),f=r("17x9"),h=r("ACyH"),j=r("5ogs"),k=r("Ty5D"),w=r("55Ip"),S=r("STEg"),L=r("YOuh"),T=r("OBO2"),C=r("6MNj")
function ownKeys(e,t){var r=Object.keys(e)
if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e)
t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{}
t%2?ownKeys(Object(r),!0).forEach(function(t){c()(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):ownKeys(Object(r)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}var R=globalThis.matchMedia,H=function toHTML(e){return{__html:e}},E=function handleDragStart(e){return e.preventDefault()},P=function Banner(e){var t=Object(d.useRef)(null),n=Object(d.useRef)(null),a=Object(m.a)(O,e.classes),l=Object(d.useState)(!1),c=g()(l,2),s=c[0],v=c[1],b=Object(d.useState)(null),p=g()(b,2),y=p[0],f=p[1],P=function toggleHover(){return v(!s)},I=Object(L.a)(),x=e.appearance,B=void 0===x?"poster":x,N=e.minHeight,D=e.backgroundColor,A=e.desktopImage,_=e.mobileImage,z=e.backgroundSize,V=e.backgroundPosition,M=e.backgroundAttachment,q=e.backgroundRepeat,F=void 0===q?"repeat":q,J=e.textAlign,K=e.border,Q=e.borderColor,W=e.borderWidth,Y=e.borderRadius,$=e.content,X=e.showButton,G=e.buttonType,U=e.buttonText,Z=e.link,ee=e.openInNewTab,te=void 0!==ee&&ee,re=e.showOverlay,ne=e.overlayColor,oe=e.marginTop,ae=e.marginRight,ie=e.marginBottom,le=e.marginLeft,ce=e.mediaQueries,se=e.paddingTop,ge=e.paddingRight,de=e.paddingBottom,ue=e.paddingLeft,ve=e.cssClasses,be=void 0===ve?[]:ve,pe=e.backgroundType,ye=e.videoSrc,Oe=e.videoFallbackSrc,me=e.videoLoop,fe=e.videoPlayOnlyVisible,he=e.videoLazyLoading,je=e.videoOverlayColor,ke=e.getParallax,we=void 0===ke?function(){}:ke,Se=Object(T.a)({mediaQueries:ce}).styles,Le=A
_&&R&&R("(max-width: 768px)").matches&&(Le=_)
var Te={marginTop:oe,marginRight:ae,marginBottom:ie,marginLeft:le},Ce={backgroundColor:D,border:K,borderColor:Q,borderWidth:W,borderRadius:Y,textAlign:J},Re={backgroundColor:"never"!==re?ne:null},He={},Ee={backgroundColor:je}
Object(d.useEffect)(function(){var e,o
if("video"===pe){var a={speed:1,imgSrc:Oe?Object(S.a)(Oe,{type:"image-wysiwyg",quality:85}):null,elementInViewport:n.current,videoSrc:ye,videoLoop:me,videoPlayOnlyVisible:fe,videoLazyLoading:he}
e=t.current
var i=r("JOgF")
o=i.jarallax,(0,i.jarallaxVideo)(),o(e,a),e.jarallax.video&&e.jarallax.video.on("started",function(){var t=e.jarallax
t.$video&&(t.$video.style.visibility="visible")}),we(e,a)}return function(){e&&"video"===pe&&o(e,"destroy")}},[pe,ye,Oe,me,fe,he]),Le&&(Ce.backgroundImage="url(".concat(y,")"),Ce.backgroundSize=z,Ce.backgroundPosition=V,Ce.backgroundAttachment=M,Ce.backgroundRepeat=F)
var Pe=Object(d.useCallback)(function(){var e=Object(S.a)(Le,{type:"image-wysiwyg",quality:85})
document.createElement("img").src=e,f(e)},[Le])
Object(d.useEffect)(function(){if(Le&&t.current){if(void 0!==I){var e=t.current,r=new I(function onIntersection(t){t.some(function(e){return e.isIntersecting})&&(r.unobserve(e),Pe())})
return r.observe(e),function(){e&&r.unobserve(e)}}Pe()}},[t,Le,I,Pe]),"poster"===B?(Re.minHeight=N,Re.paddingTop=se,Re.paddingRight=ge,Re.paddingBottom=de,Re.paddingLeft=ue,He.width="100%"):(Ce.minHeight=N,Ce.paddingTop=se,Ce.paddingRight=ge,Ce.paddingBottom=de,Ce.paddingLeft=ue)
var Ie,xe={poster:a.posterOverlay,"collage-left":a.collageLeftOverlay,"collage-centered":a.collageCenteredOverlay,"collage-right":a.collageRightOverlay},Be={poster:a.posterOverlayHover,"collage-left":a.collageLeftOverlayHover,"collage-centered":a.collageCenteredOverlayHover,"collage-right":a.collageRightOverlayHover}
if("never"!==X){var Ne="hover"===X?a.buttonHover:a.button
Ie=u.a.createElement("div",{className:Ne},u.a.createElement(h.a,{priority:{primary:"high",secondary:"normal",link:"low"}[G],type:"button",onClick:function onClick(){}},U))}var De=je?u.a.createElement("div",{className:a.videoOverlay,style:Ee}):null,Ae="video"===pe?u.a.createElement("div",{ref:n,className:a.viewportElement}):null,_e="hover"!==re||s?xe[B]:Be[B],ze=Object(k.f)(),Ve=function clickHandler(e){Object(C.a)(ze,e)},Me=u.a.createElement("div",{className:a.wrapper,style:_objectSpread(_objectSpread({},Ce),"poster"!==B&&Se),ref:t},De,u.a.createElement("div",{className:_e,style:_objectSpread(_objectSpread({},Re),"poster"===B&&Se)},u.a.createElement("div",{className:a.content,style:He,dangerouslySetInnerHTML:H($),onClick:Ve,onKeyDown:Ve,role:"presentation"}),Ie),Ae)
if("string"==typeof Z){var qe=Object(j.a)(Z),Fe=qe.to?w.b:"a"
Me=u.a.createElement(Fe,i()({className:a.link},qe,te?{target:"_blank"}:"",{onDragStart:E}),Me)}return u.a.createElement("div",{"aria-live":"polite","aria-busy":"false",className:[a.root].concat(o()(be)).join(" "),style:Te,onMouseEnter:P,onMouseLeave:P},Me)}
P.propTypes={classes:Object(f.shape)({root:f.string,link:f.string,wrapper:f.string,overlay:f.string,content:f.string,button:f.string,buttonHover:f.string,posterOverlay:f.string,posterOverlayHover:f.string,collageLeftOverlay:f.string,collageLeftOverlayHover:f.string,collageCenteredOverlay:f.string,collageCenteredOverlayHover:f.string,collageRightOverlay:f.string,collageRightOverlayHover:f.string,videoOverlay:f.string,viewportElement:f.string}),appearance:Object(f.oneOf)(["poster","collage-left","collage-centered","collage-right"]),minHeight:f.string,backgroundColor:f.string,desktopImage:f.string,mobileImage:f.string,backgroundSize:f.string,backgroundPosition:f.string,backgroundAttachment:f.string,backgroundRepeat:f.string,content:f.string,link:f.string,linkType:Object(f.oneOf)(["default","product","category","page"]),openInNewTab:f.bool,showButton:Object(f.oneOf)(["always","hover","never"]),buttonText:f.string,buttonType:Object(f.oneOf)(["primary","secondary","link"]),showOverlay:Object(f.oneOf)(["always","hover","never"]),overlayColor:f.string,textAlign:f.string,border:f.string,borderColor:f.string,borderWidth:f.string,borderRadius:f.string,marginTop:f.string,marginRight:f.string,marginBottom:f.string,marginLeft:f.string,mediaQueries:Object(f.arrayOf)(Object(f.shape)({media:f.string,style:f.object})),paddingTop:f.string,paddingRight:f.string,paddingBottom:f.string,cssClasses:Object(f.arrayOf)(f.string),backgroundType:f.string,videoSrc:f.string,videoFallbackSrc:f.string,videoLoop:f.bool,videoPlayOnlyVisible:f.bool,videoLazyLoading:f.bool,videoOverlayColor:f.string,getParallax:f.func}
var I=P,x=r("pv4D")},YOuh:function(e,t,r){"use strict"
t.a=function(){if("undefined"!=typeof IntersectionObserver)return IntersectionObserver}}}])
