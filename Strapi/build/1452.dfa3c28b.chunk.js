(self.webpackChunklearn_strapi=self.webpackChunklearn_strapi||[]).push([[1452],{1107:(x,T,n)=>{var e=n(84856),f=n(52593),m=f(e);x.exports=m},92403:(x,T,n)=>{var e=n(1107),f=n(47727);function m(l,g){var y=-1,c=f(l)?Array(l.length):[];return e(l,function(j,L,C){c[++y]=g(j,L,C)}),c}x.exports=m},16429:(x,T,n)=>{var e=n(36393),f=n(82393),m=n(90040),l=n(92403),g=n(63135),y=n(20435),c=n(9998),j=n(51339),L=n(26126);function C(w,d,o){d.length?d=e(d,function(h){return L(h)?function(O){return f(O,h.length===1?h[0]:h)}:h}):d=[j];var v=-1;d=e(d,y(m));var P=l(w,function(h,O,b){var M=e(d,function(D){return D(h)});return{criteria:M,index:++v,value:h}});return g(P,function(h,O){return c(h,O,o)})}x.exports=C},58200:(x,T,n)=>{var e=n(31507),f=n(55164);function m(l,g){return e(l,g,function(y,c){return f(l,c)})}x.exports=m},63135:x=>{function T(n,e){var f=n.length;for(n.sort(e);f--;)n[f]=n[f].value;return n}x.exports=T},17654:(x,T,n)=>{var e=n(85194);function f(m,l){if(m!==l){var g=m!==void 0,y=m===null,c=m===m,j=e(m),L=l!==void 0,C=l===null,w=l===l,d=e(l);if(!C&&!d&&!j&&m>l||j&&L&&w&&!C&&!d||y&&L&&w||!g&&w||!c)return 1;if(!y&&!j&&!d&&m<l||d&&g&&c&&!y&&!j||C&&g&&c||!L&&c||!w)return-1}return 0}x.exports=f},9998:(x,T,n)=>{var e=n(17654);function f(m,l,g){for(var y=-1,c=m.criteria,j=l.criteria,L=c.length,C=g.length;++y<L;){var w=e(c[y],j[y]);if(w){if(y>=C)return w;var d=g[y];return w*(d=="desc"?-1:1)}}return m.index-l.index}x.exports=f},52593:(x,T,n)=>{var e=n(47727);function f(m,l){return function(g,y){if(g==null)return g;if(!e(g))return m(g,y);for(var c=g.length,j=l?c:-1,L=Object(g);(l?j--:++j<c)&&y(L[j],j,L)!==!1;);return g}}x.exports=f},25003:(x,T,n)=>{var e=n(62186),f=n(3243);function m(l,g,y,c,j,L){return f(l)&&f(g)&&(L.set(g,l),e(l,g,void 0,m,L),L.delete(g)),l}x.exports=m},75719:(x,T,n)=>{var e=n(51751),f=n(52431),m=n(25003),l=n(2897),g=f(function(y){return y.push(void 0,m),e(l,void 0,y)});x.exports=g},2897:(x,T,n)=>{var e=n(62186),f=n(48205),m=f(function(l,g,y,c){e(l,g,y,c)});x.exports=m},47184:(x,T,n)=>{var e=n(58200),f=n(16065),m=f(function(l,g){return l==null?{}:e(l,g)});x.exports=m},8243:(x,T,n)=>{var e=n(93367),f=n(16429),m=n(52431),l=n(65145),g=m(function(y,c){if(y==null)return[];var j=c.length;return j>1&&l(y,c[0],c[1])?c=[]:j>2&&l(c[0],c[1],c[2])&&(c=[c[0]]),f(y,e(c,1),[])});x.exports=g},42982:(x,T,n)=>{var e=n(83470);function f(m,l){return m==null?!0:e(m,l)}x.exports=f},9217:(x,T,n)=>{"use strict";n.d(T,{Z:()=>vt});var e=n(48627),f=n(27279),m=n(12439),l=n(80174),g=n(58471),y=n(89651),c=n(20466),j=n(71285);function L(t,u){return Object.keys(t).reduce(function(a,r){return a[r]=(0,e.pi)({timeZone:u},t[r]),a},{})}function C(t,u){var a=Object.keys((0,e.pi)((0,e.pi)({},t),u));return a.reduce(function(r,s){return r[s]=(0,e.pi)((0,e.pi)({},t[s]||{}),u[s]||{}),r},{})}function w(t,u){if(!u)return t;var a=y.C.formats;return(0,e.pi)((0,e.pi)((0,e.pi)({},a),t),{date:C(L(a.date,u),L(t.date||{},u)),time:C(L(a.time,u),L(t.time||{},u))})}var d=function(t,u,a,r,s){var i=t.locale,p=t.formats,E=t.messages,S=t.defaultLocale,N=t.defaultFormats,R=t.fallbackOnEmptyString,U=t.onError,W=t.timeZone,it=t.defaultRichTextElements;a===void 0&&(a={id:""});var st=a.id,Z=a.defaultMessage;(0,g.kG)(!!st,"[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.io/docs/tooling/linter#enforce-id)\nto autofix this issue");var k=String(st),B=E&&Object.prototype.hasOwnProperty.call(E,k)&&E[k];if(Array.isArray(B)&&B.length===1&&B[0].type===j.wD.literal)return B[0].value;if(!r&&B&&typeof B=="string"&&!it)return B.replace(/'\{(.*?)\}'/gi,"{$1}");if(r=(0,e.pi)((0,e.pi)({},it),r||{}),p=w(p,W),N=w(N,W),!B){if(R===!1&&B==="")return B;if((!Z||i&&i.toLowerCase()!==S.toLowerCase())&&U(new c.$6(a,i)),Z)try{var X=u.getMessageFormat(Z,S,N,s);return X.format(r)}catch(Y){return U(new c.X9('Error formatting default message for: "'.concat(k,'", rendering default message verbatim'),i,a,Y)),typeof Z=="string"?Z:k}return k}try{var X=u.getMessageFormat(B,i,p,(0,e.pi)({formatters:u},s||{}));return X.format(r)}catch(Y){U(new c.X9('Error formatting message: "'.concat(k,'", using ').concat(Z?"default message":"id"," as fallback."),i,a,Y))}if(Z)try{var X=u.getMessageFormat(Z,S,N,s);return X.format(r)}catch(Y){U(new c.X9('Error formatting the default message for: "'.concat(k,'", rendering message verbatim'),i,a,Y))}return typeof B=="string"?B:typeof Z=="string"?Z:k},o=n(26054),v=["style","currency","currencyDisplay","unit","unitDisplay","useGrouping","minimumIntegerDigits","minimumFractionDigits","maximumFractionDigits","minimumSignificantDigits","maximumSignificantDigits","compactDisplay","currencyDisplay","currencySign","notation","signDisplay","unit","unitDisplay","numberingSystem"];function P(t,u,a){var r=t.locale,s=t.formats,i=t.onError;a===void 0&&(a={});var p=a.format,E=p&&(0,o.TB)(s,"number",p,i)||{},S=(0,o.L6)(a,v,E);return u(r,S)}function h(t,u,a,r){r===void 0&&(r={});try{return P(t,u,r).format(a)}catch(s){t.onError(new c.Qe("Error formatting number.",t.locale,s))}return String(a)}function O(t,u,a,r){r===void 0&&(r={});try{return P(t,u,r).formatToParts(a)}catch(s){t.onError(new c.Qe("Error formatting number.",t.locale,s))}return[]}var b=n(35993),M=["numeric","style"];function D(t,u,a){var r=t.locale,s=t.formats,i=t.onError;a===void 0&&(a={});var p=a.format,E=!!p&&(0,o.TB)(s,"relative",p,i)||{},S=(0,o.L6)(a,M,E);return u(r,S)}function F(t,u,a,r,s){s===void 0&&(s={}),r||(r="second");var i=Intl.RelativeTimeFormat;i||t.onError(new b.u_(`Intl.RelativeTimeFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-relativetimeformat"
`,b.jK.MISSING_INTL_API));try{return D(t,u,s).format(a,r)}catch(p){t.onError(new c.Qe("Error formatting relative time.",t.locale,p))}return String(a)}var A=["formatMatcher","timeZone","hour12","weekday","era","year","month","day","hour","minute","second","timeZoneName","hourCycle","dateStyle","timeStyle","calendar","numberingSystem","fractionalSecondDigits"];function I(t,u,a,r){var s=t.locale,i=t.formats,p=t.onError,E=t.timeZone;r===void 0&&(r={});var S=r.format,N=(0,e.pi)((0,e.pi)({},E&&{timeZone:E}),S&&(0,o.TB)(i,u,S,p)),R=(0,o.L6)(r,A,N);return u==="time"&&!R.hour&&!R.minute&&!R.second&&!R.timeStyle&&!R.dateStyle&&(R=(0,e.pi)((0,e.pi)({},R),{hour:"numeric",minute:"numeric"})),a(s,R)}function K(t,u){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],i=a[1],p=i===void 0?{}:i,E=typeof s=="string"?new Date(s||0):s;try{return I(t,"date",u,p).format(E)}catch(S){t.onError(new c.Qe("Error formatting date.",t.locale,S))}return String(E)}function z(t,u){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],i=a[1],p=i===void 0?{}:i,E=typeof s=="string"?new Date(s||0):s;try{return I(t,"time",u,p).format(E)}catch(S){t.onError(new c.Qe("Error formatting time.",t.locale,S))}return String(E)}function Q(t,u){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],i=a[1],p=a[2],E=p===void 0?{}:p,S=t.timeZone,N=t.locale,R=t.onError,U=(0,o.L6)(E,A,S?{timeZone:S}:{});try{return u(N,U).formatRange(s,i)}catch(W){R(new c.Qe("Error formatting date time range.",t.locale,W))}return String(s)}function q(t,u){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],i=a[1],p=i===void 0?{}:i,E=typeof s=="string"?new Date(s||0):s;try{return I(t,"date",u,p).formatToParts(E)}catch(S){t.onError(new c.Qe("Error formatting date.",t.locale,S))}return[]}function G(t,u){for(var a=[],r=2;r<arguments.length;r++)a[r-2]=arguments[r];var s=a[0],i=a[1],p=i===void 0?{}:i,E=typeof s=="string"?new Date(s||0):s;try{return I(t,"time",u,p).formatToParts(E)}catch(S){t.onError(new c.Qe("Error formatting time.",t.locale,S))}return[]}var J=["type"];function V(t,u,a,r){var s=t.locale,i=t.onError;r===void 0&&(r={}),Intl.PluralRules||i(new b.u_(`Intl.PluralRules is not available in this environment.
Try polyfilling it using "@formatjs/intl-pluralrules"
`,b.jK.MISSING_INTL_API));var p=(0,o.L6)(r,J);try{return u(s,p).select(a)}catch(E){i(new c.Qe("Error formatting plural.",s,E))}return"other"}var $=["type","style"],H=Date.now();function tt(t){return"".concat(H,"_").concat(t,"_").concat(H)}function _(t,u,a,r){r===void 0&&(r={});var s=rt(t,u,a,r).reduce(function(i,p){var E=p.value;return typeof E!="string"?i.push(E):typeof i[i.length-1]=="string"?i[i.length-1]+=E:i.push(E),i},[]);return s.length===1?s[0]:s.length===0?"":s}function rt(t,u,a,r){var s=t.locale,i=t.onError;r===void 0&&(r={});var p=Intl.ListFormat;p||i(new b.u_(`Intl.ListFormat is not available in this environment.
Try polyfilling it using "@formatjs/intl-listformat"
`,b.jK.MISSING_INTL_API));var E=(0,o.L6)(r,$);try{var S={},N=a.map(function(R,U){if(typeof R=="object"){var W=tt(U);return S[W]=R,W}return String(R)});return u(s,E).formatToParts(N).map(function(R){return R.type==="literal"?R:(0,e.pi)((0,e.pi)({},R),{value:S[R.value]||R.value})})}catch(R){i(new c.Qe("Error formatting list.",s,R))}return a}var lt=["style","type","fallback","languageDisplay"];function ut(t,u,a,r){var s=t.locale,i=t.onError,p=Intl.DisplayNames;p||i(new b.u_(`Intl.DisplayNames is not available in this environment.
Try polyfilling it using "@formatjs/intl-displaynames"
`,b.jK.MISSING_INTL_API));var E=(0,o.L6)(r,lt);try{return u(s,E).of(a)}catch(S){i(new c.Qe("Error formatting display name.",s,S))}}function ct(t){var u=t?t[Object.keys(t)[0]]:void 0;return typeof u=="string"}function ft(t){t.onWarn&&t.defaultRichTextElements&&ct(t.messages||{})&&t.onWarn(`[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. 
Please consider using "@formatjs/cli" to pre-compile your messages for performance.
For more details see https://formatjs.io/docs/getting-started/message-distribution`)}function mt(t,u){var a=(0,o.ax)(u),r=(0,e.pi)((0,e.pi)({},o.Z0),t),s=r.locale,i=r.defaultLocale,p=r.onError;return s?!Intl.NumberFormat.supportedLocalesOf(s).length&&p?p(new c.gb('Missing locale data for locale: "'.concat(s,'" in Intl.NumberFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):!Intl.DateTimeFormat.supportedLocalesOf(s).length&&p&&p(new c.gb('Missing locale data for locale: "'.concat(s,'" in Intl.DateTimeFormat. Using default locale: "').concat(i,'" as fallback. See https://formatjs.io/docs/react-intl#runtime-requirements for more details'))):(p&&p(new c.OV('"locale" was not configured, using "'.concat(i,'" as fallback. See https://formatjs.io/docs/react-intl/api#intlshape for more details'))),r.locale=r.defaultLocale||"en"),ft(r),(0,e.pi)((0,e.pi)({},r),{formatters:a,formatNumber:h.bind(null,r,a.getNumberFormat),formatNumberToParts:O.bind(null,r,a.getNumberFormat),formatRelativeTime:F.bind(null,r,a.getRelativeTimeFormat),formatDate:K.bind(null,r,a.getDateTimeFormat),formatDateToParts:q.bind(null,r,a.getDateTimeFormat),formatTime:z.bind(null,r,a.getDateTimeFormat),formatDateTimeRange:Q.bind(null,r,a.getDateTimeFormat),formatTimeToParts:G.bind(null,r,a.getDateTimeFormat),formatPlural:V.bind(null,r,a.getPluralRules),formatMessage:d.bind(null,r,a),$t:d.bind(null,r,a),formatList:_.bind(null,r,a.getListFormat),formatListToParts:rt.bind(null,r,a.getListFormat),formatDisplayName:ut.bind(null,r,a.getDisplayNames)})}var dt=n(97340);function et(t){return{locale:t.locale,timeZone:t.timeZone,fallbackOnEmptyString:t.fallbackOnEmptyString,formats:t.formats,textComponent:t.textComponent,messages:t.messages,defaultLocale:t.defaultLocale,defaultFormats:t.defaultFormats,onError:t.onError,onWarn:t.onWarn,wrapRichTextChunksInFragment:t.wrapRichTextChunksInFragment,defaultRichTextElements:t.defaultRichTextElements}}function nt(t){return t&&Object.keys(t).reduce(function(u,a){var r=t[a];return u[a]=(0,dt.Gt)(r)?(0,l.dt)(r):r,u},{})}var at=function(t,u,a,r){for(var s=[],i=4;i<arguments.length;i++)s[i-4]=arguments[i];var p=nt(r),E=d.apply(void 0,(0,e.ev)([t,u,a,p],s,!1));return Array.isArray(E)?f.Children.toArray(E):E},ot=function(t,u){var a=t.defaultRichTextElements,r=(0,e._T)(t,["defaultRichTextElements"]),s=nt(a),i=mt((0,e.pi)((0,e.pi)((0,e.pi)({},l.Z0),r),{defaultRichTextElements:s}),u),p={locale:i.locale,timeZone:i.timeZone,fallbackOnEmptyString:i.fallbackOnEmptyString,formats:i.formats,defaultLocale:i.defaultLocale,defaultFormats:i.defaultFormats,messages:i.messages,onError:i.onError,defaultRichTextElements:s};return(0,e.pi)((0,e.pi)({},i),{formatMessage:at.bind(null,p,i.formatters),$t:at.bind(null,p,i.formatters)})},pt=function(t){(0,e.ZT)(u,t);function u(){var a=t!==null&&t.apply(this,arguments)||this;return a.cache=(0,o.Sn)(),a.state={cache:a.cache,intl:ot(et(a.props),a.cache),prevConfig:et(a.props)},a}return u.getDerivedStateFromProps=function(a,r){var s=r.prevConfig,i=r.cache,p=et(a);return(0,l.wU)(s,p)?null:{intl:ot(p,i),prevConfig:p}},u.prototype.render=function(){return(0,l.lq)(this.state.intl),f.createElement(m.zt,{value:this.state.intl},this.props.children)},u.displayName="IntlProvider",u.defaultProps=l.Z0,u}(f.PureComponent);const vt=pt},57150:(x,T,n)=>{"use strict";n.d(T,{P1:()=>L});var e="NOT_FOUND";function f(w){var d;return{get:function(v){return d&&w(d.key,v)?d.value:e},put:function(v,P){d={key:v,value:P}},getEntries:function(){return d?[d]:[]},clear:function(){d=void 0}}}function m(w,d){var o=[];function v(b){var M=o.findIndex(function(F){return d(b,F.key)});if(M>-1){var D=o[M];return M>0&&(o.splice(M,1),o.unshift(D)),D.value}return e}function P(b,M){v(b)===e&&(o.unshift({key:b,value:M}),o.length>w&&o.pop())}function h(){return o}function O(){o=[]}return{get:v,put:P,getEntries:h,clear:O}}var l=function(d,o){return d===o};function g(w){return function(o,v){if(o===null||v===null||o.length!==v.length)return!1;for(var P=o.length,h=0;h<P;h++)if(!w(o[h],v[h]))return!1;return!0}}function y(w,d){var o=typeof d=="object"?d:{equalityCheck:d},v=o.equalityCheck,P=v===void 0?l:v,h=o.maxSize,O=h===void 0?1:h,b=o.resultEqualityCheck,M=g(P),D=O===1?f(M):m(O,M);function F(){var A=D.get(arguments);if(A===e){if(A=w.apply(null,arguments),b){var I=D.getEntries(),K=I.find(function(z){return b(z.value,A)});K&&(A=K.value)}D.put(arguments,A)}return A}return F.clearCache=function(){return D.clear()},F}function c(w){var d=Array.isArray(w[0])?w[0]:w;if(!d.every(function(v){return typeof v=="function"})){var o=d.map(function(v){return typeof v=="function"?"function "+(v.name||"unnamed")+"()":typeof v}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+o+"]")}return d}function j(w){for(var d=arguments.length,o=new Array(d>1?d-1:0),v=1;v<d;v++)o[v-1]=arguments[v];var P=function(){for(var O=arguments.length,b=new Array(O),M=0;M<O;M++)b[M]=arguments[M];var D=0,F,A={memoizeOptions:void 0},I=b.pop();if(typeof I=="object"&&(A=I,I=b.pop()),typeof I!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof I+"]");var K=A,z=K.memoizeOptions,Q=z===void 0?o:z,q=Array.isArray(Q)?Q:[Q],G=c(b),J=w.apply(void 0,[function(){return D++,I.apply(null,arguments)}].concat(q)),V=w(function(){for(var H=[],tt=G.length,_=0;_<tt;_++)H.push(G[_].apply(null,arguments));return F=J.apply(null,H),F});return Object.assign(V,{resultFunc:I,memoizedResultFunc:J,dependencies:G,lastResult:function(){return F},recomputations:function(){return D},resetRecomputations:function(){return D=0}}),V};return P}var L=j(y),C=function(d,o){if(o===void 0&&(o=L),typeof d!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof d));var v=Object.keys(d),P=o(v.map(function(h){return d[h]}),function(){for(var h=arguments.length,O=new Array(h),b=0;b<h;b++)O[b]=arguments[b];return O.reduce(function(M,D,F){return M[v[F]]=D,M},{})});return P}},35750:(x,T,n)=>{"use strict";n.d(T,{D:()=>m});var e=n(74081),f=n(68263);const m=({children:l})=>(0,e.jsx)(f.x,{paddingLeft:10,paddingRight:10,children:l})},42925:(x,T,n)=>{"use strict";n.d(T,{T:()=>C});var e=n(74081),f=n(27279),m=n(37652);const l=o=>{const v=(0,f.useRef)(null),[P,h]=(0,f.useState)(!0),O=([b])=>{h(b.isIntersecting)};return(0,f.useEffect)(()=>{const b=v.current,M=new IntersectionObserver(O,o);return b&&M.observe(v.current),()=>{b&&M.disconnect()}},[v,o]),[v,P]};var g=n(66705);const y=(o,v)=>{const P=(0,g.W)(v);(0,f.useLayoutEffect)(()=>{const h=new ResizeObserver(P);return Array.isArray(o)?o.forEach(O=>{O.current&&h.observe(O.current)}):o.current&&h.observe(o.current),()=>{h.disconnect()}},[o,P])};var c=n(68263),j=n(33110),L=n(19915);const C=o=>{const v=(0,f.useRef)(null),[P,h]=(0,f.useState)(null),[O,b]=l({root:null,rootMargin:"0px",threshold:0});return y(O,()=>{O.current&&h(O.current.getBoundingClientRect())}),(0,f.useEffect)(()=>{v.current&&h(v.current.getBoundingClientRect())},[v]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:P?.height},ref:O,children:b&&(0,e.jsx)(d,{ref:v,...o})}),!b&&(0,e.jsx)(d,{...o,sticky:!0,width:P?.width})]})};C.displayName="HeaderLayout";const w=(0,m.ZP)(c.x)`
  width: ${({width:o})=>o?`${o/16}rem`:void 0};
  z-index: ${({theme:o})=>o.zIndices[1]};
`,d=f.forwardRef(({navigationAction:o,primaryAction:v,secondaryAction:P,subtitle:h,title:O,sticky:b,width:M,...D},F)=>{const A=typeof h=="string";return b?(0,e.jsx)(w,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:M,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(j.k,{justifyContent:"space-between",children:[(0,e.jsxs)(j.k,{children:[o&&(0,e.jsx)(c.x,{paddingRight:3,children:o}),(0,e.jsxs)(c.x,{children:[(0,e.jsx)(L.Z,{variant:"beta",as:"h1",...D,children:O}),A?(0,e.jsx)(L.Z,{variant:"pi",textColor:"neutral600",children:h}):h]}),P?(0,e.jsx)(c.x,{paddingLeft:4,children:P}):null]}),(0,e.jsx)(j.k,{children:v?(0,e.jsx)(c.x,{paddingLeft:2,children:v}):void 0})]})}):(0,e.jsxs)(c.x,{ref:F,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:o?6:8,background:"neutral100","data-strapi-header":!0,children:[o?(0,e.jsx)(c.x,{paddingBottom:2,children:o}):null,(0,e.jsxs)(j.k,{justifyContent:"space-between",children:[(0,e.jsxs)(j.k,{minWidth:0,children:[(0,e.jsx)(L.Z,{as:"h1",variant:"alpha",...D,children:O}),P?(0,e.jsx)(c.x,{paddingLeft:4,children:P}):null]}),v]}),A?(0,e.jsx)(L.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:h}):h]})})},65e3:(x,T,n)=>{"use strict";n.d(T,{o:()=>g});var e=n(74081),f=n(37652),m=n(68263);const l=(0,f.ZP)(m.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,g=({labelledBy:y="main-content-title",...c})=>(0,e.jsx)(l,{"aria-labelledby":y,as:"main",id:"main-content",tabIndex:-1,...c})},89750:(x,T,n)=>{"use strict";n.d(T,{z:()=>g});var e=n(74081),f=n(37652),m=n(68263);const l=(0,f.ZP)(m.x)`
  text-decoration: none;

  &:focus {
    left: ${({theme:y})=>y.spaces[3]};
    top: ${({theme:y})=>y.spaces[3]};
  }
`,g=({children:y})=>(0,e.jsx)(l,{as:"a",href:"#main-content",background:"primary600",color:"neutral0",left:"-100%",padding:3,position:"absolute",top:"-100%",hasRadius:!0,zIndex:9999,children:y})},33653:(x,T,n)=>{"use strict";n.d(T,{$:()=>l});const e={color:{alternative100:"#181826",alternative200:"#4a4a6a",alternative500:"#ac73e6",alternative600:"#ac73e6",alternative700:"#e0c1f4",buttonNeutral0:"#ffffff",buttonPrimary500:"#7b79ff",buttonPrimary600:"#4945ff",danger100:"#181826",danger200:"#4a4a6a",danger500:"#ee5e52",danger600:"#ee5e52",danger700:"#ee5e52",neutral0:"#212134",neutral100:"#181826",neutral1000:"#ffffff",neutral150:"#32324d",neutral200:"#4a4a6a",neutral300:"#666687",neutral400:"#a5a5ba",neutral500:"#c0c0cf",neutral600:"#a5a5ba",neutral700:"#eaeaef",neutral800:"#ffffff",neutral900:"#ffffff",primary100:"#181826",primary200:"#4a4a6a",primary500:"#4945ff",primary600:"#7b79ff",primary700:"#7b79ff",secondary100:"#181826",secondary200:"#4a4a6a",secondary500:"#66b7f1",secondary600:"#66b7f1",secondary700:"#b8e1ff",success100:"#181826",success200:"#4a4a6a",success500:"#5cb176",success600:"#5cb176",success700:"#c6f0c2",warning100:"#181826",warning200:"#4a4a6a",warning500:"#f29d41",warning600:"#f29d41",warning700:"#fae7b9"}},f={shadow:{filterShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",focus:"inset 2px 0px 0px rgb(39, 31, 224), inset 0px 2px 0px rgb(39, 31, 224), inset -2px 0px 0px rgb(39, 31, 224), inset 0px -2px 0px rgb(39, 31, 224)",focusShadow:"0px 0px 6px rgba(76, 191, 255, 0.75)",popupShadow:"1px 1px 10px rgba(3, 3, 5, 0.35)",tableShadow:"1px 1px 10px rgba(3, 3, 5, 0.2)"}};var m=n(12376);const l={colors:e.color,shadows:f.shadow,...m.x}},64270:(x,T,n)=>{"use strict";n.d(T,{Z:()=>m});var e=n(74081);const f=l=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:(0,e.jsx)("path",{fill:"#212134",d:"M0 10.7c0-.11.09-.2.2-.2h18.06l-8.239-8.239a.2.2 0 0 1 0-.282L11.86.14a.2.2 0 0 1 .282 0L23.86 11.86a.2.2 0 0 1 0 .282L12.14 23.86a.2.2 0 0 1-.282 0L10.02 22.02a.2.2 0 0 1 0-.282L18.26 13.5H.2a.2.2 0 0 1-.2-.2v-2.6Z"})}),m=f},91396:(x,T,n)=>{"use strict";n.d(T,{Z:()=>m});var e=n(74081);const f=l=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M2.68 9.192c-.6.276-2.114 1.18-2.306 1.303a.792.792 0 0 0-.374.68v1.65a.797.797 0 0 0 .384.687c.254.16 1.73 1.042 2.306 1.303l.744 1.8c-.24.634-.67 2.333-.72 2.554a.797.797 0 0 0 .216.744l1.167 1.166a.801.801 0 0 0 .744.216l.03-.008c.36-.092 1.946-.498 2.523-.712l1.8.744c.276.6 1.181 2.115 1.304 2.307a.805.805 0 0 0 .679.374h1.649a.797.797 0 0 0 .686-.384c.16-.254 1.042-1.73 1.303-2.306l1.8-.744c.634.24 2.333.67 2.554.72a.797.797 0 0 0 .744-.216l1.166-1.167a.803.803 0 0 0 .216-.744l-.008-.03c-.092-.36-.498-1.946-.712-2.523l.744-1.8c.6-.276 2.115-1.181 2.307-1.304a.804.804 0 0 0 .374-.679v-1.649a.796.796 0 0 0-.382-.679c-.254-.16-1.73-1.041-2.306-1.303l-.744-1.8c.24-.634.67-2.333.72-2.554a.796.796 0 0 0-.216-.744l-1.166-1.173a.802.802 0 0 0-.744-.216l-.03.008c-.361.092-1.947.498-2.524.712l-1.8-.744c-.276-.6-1.18-2.115-1.303-2.307a.803.803 0 0 0-.68-.374h-1.65a.797.797 0 0 0-.68.382c-.16.254-1.041 1.73-1.303 2.306l-1.8.744c-.634-.24-2.333-.67-2.554-.72a.797.797 0 0 0-.744.216L2.921 4.094a.802.802 0 0 0-.216.744l.008.03c.092.361.498 1.947.712 2.524l-.744 1.8ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z",clipRule:"evenodd"})}),m=f},35969:(x,T,n)=>{"use strict";n.d(T,{Z:()=>m});var e=n(74081);const f=l=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 25 25",...l,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"m13.58.448 3.177 3.176L18.66 1.72a3.267 3.267 0 1 1 4.62 4.62l-1.904 1.904 3.175 3.175a1.528 1.528 0 0 1 0 2.162l-3.175 3.175L20.2 15.58a3.267 3.267 0 1 0-4.62 4.62l1.177 1.177-3.176 3.176a1.528 1.528 0 0 1-2.162 0l-3.175-3.175-1.902 1.902a3.267 3.267 0 1 1-4.62-4.62l1.902-1.902-3.176-3.176a1.528 1.528 0 0 1 0-2.162l3.176-3.176L4.8 9.42a3.267 3.267 0 0 0 4.62-4.62L8.244 3.623 11.419.448a1.528 1.528 0 0 1 2.162 0Z",clipRule:"evenodd"})}),m=f},32443:(x,T,n)=>{"use strict";n.d(T,{Z:()=>m});var e=n(74081);const f=l=>(0,e.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"1rem",height:"1rem",fill:"none",viewBox:"0 0 24 24",...l,children:(0,e.jsx)("path",{fill:"#212134",fillRule:"evenodd",d:"M23.12 3.907c-.025 0-.055-.005-.087-.011a.72.72 0 0 0-.13-.016H5.929l-.27-1.805A2.413 2.413 0 0 0 3.26 0H1.078C.485 0 0 .485 0 1.078c0 .593.485 1.078 1.078 1.078H3.26c.135 0 .243.107.27.242L5.2 13.77a2.954 2.954 0 0 0 2.91 2.506h11.21c1.401 0 2.614-.997 2.91-2.371l1.752-8.757a1.065 1.065 0 0 0-.863-1.24Zm-4.932 13.927a2.8 2.8 0 0 0-2.802 2.802 2.8 2.8 0 0 0 2.802 2.802 2.8 2.8 0 0 0 2.803-2.802c-.027-1.536-1.267-2.802-2.803-2.802Zm-9.646 0a2.786 2.786 0 0 1 2.775 2.667c.081 1.536-1.132 2.83-2.667 2.91h-.054a2.762 2.762 0 0 1-2.749-2.667 2.819 2.819 0 0 1 2.695-2.91Z",clipRule:"evenodd"})}),m=f}}]);
