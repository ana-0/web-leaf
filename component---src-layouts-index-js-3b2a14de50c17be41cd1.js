webpackJsonp([0x67ef26645b2a,60335399758886],{86:function(e,t){e.exports={layoutContext:{}}},174:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i=n(2),a=r(i),u=n(178),l=r(u),c=n(86),f=r(c);t.default=function(e){return a.default.createElement(l.default,o({},e,f.default))},e.exports=t.default},186:function(e,t,n){e.exports={default:n(195),__esModule:!0}},188:function(e,t,n){e.exports={default:n(197),__esModule:!0}},192:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(186),i=r(o);t.default=i.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}},193:function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}},195:function(e,t,n){n(220),e.exports=n(16).Object.assign},197:function(e,t,n){n(222),e.exports=n(16).Object.keys},210:function(e,t,n){"use strict";var r=n(39),o=n(71),i=n(49),a=n(76),u=n(113),l=Object.assign;e.exports=!l||n(25)(function(){var e={},t={},n=Symbol(),r="abcdefghijklmnopqrst";return e[n]=7,r.split("").forEach(function(e){t[e]=e}),7!=l({},e)[n]||Object.keys(l({},t)).join("")!=r})?function(e,t){for(var n=a(e),l=arguments.length,c=1,f=o.f,s=i.f;l>c;)for(var d,p=u(arguments[c++]),T=f?r(p).concat(f(p)):r(p),E=T.length,A=0;E>A;)s.call(p,d=T[A++])&&(n[d]=p[d]);return n}:l},214:function(e,t,n){var r=n(24),o=n(16),i=n(25);e.exports=function(e,t){var n=(o.Object||{})[e]||Object[e],a={};a[e]=t(n),r(r.S+r.F*i(function(){n(1)}),"Object",a)}},220:function(e,t,n){var r=n(24);r(r.S+r.F,"Object",{assign:n(210)})},222:function(e,t,n){var r=n(76),o=n(39);n(214)("keys",function(){return function(e){return o(r(e))}})},255:function(e,t,n){function r(e){return null===e||void 0===e}function o(e){return!(!e||"object"!=typeof e||"number"!=typeof e.length)&&("function"==typeof e.copy&&"function"==typeof e.slice&&!(e.length>0&&"number"!=typeof e[0]))}function i(e,t,n){var i,f;if(r(e)||r(t))return!1;if(e.prototype!==t.prototype)return!1;if(l(e))return!!l(t)&&(e=a.call(e),t=a.call(t),c(e,t,n));if(o(e)){if(!o(t))return!1;if(e.length!==t.length)return!1;for(i=0;i<e.length;i++)if(e[i]!==t[i])return!1;return!0}try{var s=u(e),d=u(t)}catch(e){return!1}if(s.length!=d.length)return!1;for(s.sort(),d.sort(),i=s.length-1;i>=0;i--)if(s[i]!=d[i])return!1;for(i=s.length-1;i>=0;i--)if(f=s[i],!c(e[f],t[f],n))return!1;return typeof e==typeof t}var a=Array.prototype.slice,u=n(257),l=n(256),c=e.exports=function(e,t,n){return n||(n={}),e===t||(e instanceof Date&&t instanceof Date?e.getTime()===t.getTime():!e||!t||"object"!=typeof e&&"object"!=typeof t?n.strict?e===t:e==t:i(e,t,n))}},256:function(e,t){function n(e){return"[object Arguments]"==Object.prototype.toString.call(e)}function r(e){return e&&"object"==typeof e&&"number"==typeof e.length&&Object.prototype.hasOwnProperty.call(e,"callee")&&!Object.prototype.propertyIsEnumerable.call(e,"callee")||!1}var o="[object Arguments]"==function(){return Object.prototype.toString.call(arguments)}();t=e.exports=o?n:r,t.supported=n,t.unsupported=r},257:function(e,t){function n(e){var t=[];for(var n in e)t.push(n);return t}t=e.exports="function"==typeof Object.keys?Object.keys:n,t.shim=n},264:function(e,t,n){var r;!function(){"use strict";var o=!("undefined"==typeof window||!window.document||!window.document.createElement),i={canUseDOM:o,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:o&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:o&&!!window.screen};r=function(){return i}.call(t,n,t,e),!(void 0!==r&&(e.exports=r))}()},133:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.replace(/^\/\//g,"/")}t.__esModule=!0,t.navigateTo=void 0;var i=n(192),a=r(i),u=n(188),l=r(u),c=n(193),f=r(c),s=n(48),d=r(s),p=n(65),T=r(p),E=n(64),A=r(E),y=n(2),h=r(y),m=n(63),b=n(7),S=r(b),v="/";v="";var g={activeClassName:S.default.string,activeStyle:S.default.object,exact:S.default.bool,strict:S.default.bool,isActive:S.default.func,location:S.default.object},R=function(e){function t(n){(0,d.default)(this,t);var r=(0,T.default)(this,e.call(this));return r.state={to:o(v+n.to)},r}return(0,A.default)(t,e),t.prototype.componentWillReceiveProps=function(e){this.props.to!==e.to&&(this.setState({to:o(v+e.to)}),___loader.enqueue(this.state.to))},t.prototype.componentDidMount=function(){___loader.enqueue(this.state.to)},t.prototype.render=function(){var e=this,t=this.props,n=t.onClick,r=(0,f.default)(t,["onClick"]),o=void 0;return o=(0,l.default)(g).some(function(t){return e.props[t]})?m.NavLink:m.Link,h.default.createElement(o,(0,a.default)({onClick:function(t){if(n&&n(t),!(0!==t.button||e.props.target||t.defaultPrevented||t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)){var r=e.state.to;if(r.split("#").length>1&&(r=r.split("#").slice(0,-1).join("")),r===window.location.pathname){var o=e.state.to.split("#").slice(1).join("#"),i=document.getElementById(o);if(null!==i)return i.scrollIntoView(),!0}t.preventDefault(),window.___navigateTo(e.state.to)}return!0}},r,{to:this.state.to}))},t}(h.default.Component);R.propTypes=(0,a.default)({},g,{to:S.default.string.isRequired,onClick:S.default.func}),R.contextTypes={router:S.default.object},t.default=R;t.navigateTo=function(e){window.___navigateTo(o(v+e))}},372:function(e,t,n){function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.Helmet=void 0;var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),f=n(2),s=r(f),d=n(7),p=r(d),T=n(391),E=r(T),A=n(255),y=r(A),h=n(373),m=n(161),b=function(e){var t,n;return n=t=function(t){function n(){return i(this,n),a(this,t.apply(this,arguments))}return u(n,t),n.prototype.shouldComponentUpdate=function(e){return!(0,y.default)(this.props,e)},n.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.NOSCRIPT:return{innerHTML:t};case m.TAG_NAMES.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},n.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return l({},r,(t={},t[n.type]=[].concat(r[n.type]||[],[l({},o,this.mapNestedChildrenToProps(n,i))]),t))},n.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case m.TAG_NAMES.TITLE:return l({},o,(t={},t[r.type]=a,t.titleAttributes=l({},i),t));case m.TAG_NAMES.BODY:return l({},o,{bodyAttributes:l({},i)});case m.TAG_NAMES.HTML:return l({},o,{htmlAttributes:l({},i)})}return l({},o,(n={},n[r.type]=l({},i),n))},n.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=l({},t);return Object.keys(e).forEach(function(t){var r;n=l({},n,(r={},r[t]=e[t],r))}),n},n.prototype.warnOnInvalidChildren=function(e,t){return!0},n.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return s.default.Children.forEach(e,function(e){if(e&&e.props){var i=e.props,a=i.children,u=o(i,["children"]),l=(0,h.convertReactPropstoHtmlAttributes)(u);switch(n.warnOnInvalidChildren(e,a),e.type){case m.TAG_NAMES.LINK:case m.TAG_NAMES.META:case m.TAG_NAMES.NOSCRIPT:case m.TAG_NAMES.SCRIPT:case m.TAG_NAMES.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:l,nestedChildren:a});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:l,nestedChildren:a})}}}),t=this.mapArrayTypeChildrenToProps(r,t)},n.prototype.render=function(){var t=this.props,n=t.children,r=o(t,["children"]),i=l({},r);return n&&(i=this.mapChildrenToProps(n,i)),s.default.createElement(e,i)},c(n,null,[{key:"canUseDOM",set:function(t){e.canUseDOM=t}}]),n}(s.default.Component),t.propTypes={base:p.default.object,bodyAttributes:p.default.object,children:p.default.oneOfType([p.default.arrayOf(p.default.node),p.default.node]),defaultTitle:p.default.string,defer:p.default.bool,encodeSpecialCharacters:p.default.bool,htmlAttributes:p.default.object,link:p.default.arrayOf(p.default.object),meta:p.default.arrayOf(p.default.object),noscript:p.default.arrayOf(p.default.object),onChangeClientState:p.default.func,script:p.default.arrayOf(p.default.object),style:p.default.arrayOf(p.default.object),title:p.default.string,titleAttributes:p.default.object,titleTemplate:p.default.string},t.defaultProps={defer:!0,encodeSpecialCharacters:!0},t.peek=e.peek,t.rewind=function(){var t=e.rewind();return t||(t=(0,h.mapStateOnServer)({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),t},n},S=function(){return null},v=(0,E.default)(h.reducePropsToState,h.handleClientStateChange,h.mapStateOnServer)(S),g=b(v);g.renderStatic=g.rewind,t.Helmet=g,t.default=g},161:function(e,t){t.__esModule=!0;var n=(t.ATTRIBUTE_NAMES={BODY:"bodyAttributes",HTML:"htmlAttributes",TITLE:"titleAttributes"},t.TAG_NAMES={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"}),r=(t.VALID_TAG_NAMES=Object.keys(n).map(function(e){return n[e]}),t.TAG_PROPERTIES={CHARSET:"charset",CSS_TEXT:"cssText",HREF:"href",HTTPEQUIV:"http-equiv",INNER_HTML:"innerHTML",ITEM_PROP:"itemprop",NAME:"name",PROPERTY:"property",REL:"rel",SRC:"src"},t.REACT_TAG_MAP={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"});t.HELMET_PROPS={DEFAULT_TITLE:"defaultTitle",DEFER:"defer",ENCODE_SPECIAL_CHARACTERS:"encodeSpecialCharacters",ON_CHANGE_CLIENT_STATE:"onChangeClientState",TITLE_TEMPLATE:"titleTemplate"},t.HTML_TAG_MAP=Object.keys(r).reduce(function(e,t){return e[r[t]]=t,e},{}),t.SELF_CLOSING_TAGS=[n.NOSCRIPT,n.SCRIPT,n.STYLE],t.HELMET_ATTRIBUTE="data-react-helmet"},373:function(e,t,n){(function(e){function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.warn=t.requestAnimationFrame=t.reducePropsToState=t.mapStateOnServer=t.handleClientStateChange=t.convertReactPropstoHtmlAttributes=void 0;var o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=n(2),u=r(a),l=n(5),c=r(l),f=n(161),s=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return t===!1?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},d=function(e){var t=y(e,f.TAG_NAMES.TITLE),n=y(e,f.HELMET_PROPS.TITLE_TEMPLATE);if(n&&t)return n.replace(/%s/g,function(){return t});var r=y(e,f.HELMET_PROPS.DEFAULT_TITLE);return t||r||void 0},p=function(e){return y(e,f.HELMET_PROPS.ON_CHANGE_CLIENT_STATE)||function(){}},T=function(e,t){return t.filter(function(t){return"undefined"!=typeof t[e]}).map(function(t){return t[e]}).reduce(function(e,t){return i({},e,t)},{})},E=function(e,t){return t.filter(function(e){return"undefined"!=typeof e[f.TAG_NAMES.BASE]}).map(function(e){return e[f.TAG_NAMES.BASE]}).reverse().reduce(function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o],a=i.toLowerCase();if(e.indexOf(a)!==-1&&n[a])return t.concat(n)}return t},[])},A=function(e,t,n){var r={};return n.filter(function(t){return!!Array.isArray(t[e])||("undefined"!=typeof t[e]&&g("Helmet: "+e+' should be of type "Array". Instead found type "'+o(t[e])+'"'),!1)}).map(function(t){return t[e]}).reverse().reduce(function(e,n){var o={};n.filter(function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var u=i[a],l=u.toLowerCase();t.indexOf(l)===-1||n===f.TAG_PROPERTIES.REL&&"canonical"===e[n].toLowerCase()||l===f.TAG_PROPERTIES.REL&&"stylesheet"===e[l].toLowerCase()||(n=l),t.indexOf(u)===-1||u!==f.TAG_PROPERTIES.INNER_HTML&&u!==f.TAG_PROPERTIES.CSS_TEXT&&u!==f.TAG_PROPERTIES.ITEM_PROP||(n=u)}if(!n||!e[n])return!1;var c=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][c]&&(o[n][c]=!0,!0)}).reverse().forEach(function(t){return e.push(t)});for(var i=Object.keys(o),a=0;a<i.length;a++){var u=i[a],l=(0,c.default)({},r[u],o[u]);r[u]=l}return e},[]).reverse()},y=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},h=function(e){return{baseTag:E([f.TAG_PROPERTIES.HREF],e),bodyAttributes:T(f.ATTRIBUTE_NAMES.BODY,e),defer:y(e,f.HELMET_PROPS.DEFER),encode:y(e,f.HELMET_PROPS.ENCODE_SPECIAL_CHARACTERS),htmlAttributes:T(f.ATTRIBUTE_NAMES.HTML,e),linkTags:A(f.TAG_NAMES.LINK,[f.TAG_PROPERTIES.REL,f.TAG_PROPERTIES.HREF],e),metaTags:A(f.TAG_NAMES.META,[f.TAG_PROPERTIES.NAME,f.TAG_PROPERTIES.CHARSET,f.TAG_PROPERTIES.HTTPEQUIV,f.TAG_PROPERTIES.PROPERTY,f.TAG_PROPERTIES.ITEM_PROP],e),noscriptTags:A(f.TAG_NAMES.NOSCRIPT,[f.TAG_PROPERTIES.INNER_HTML],e),onChangeClientState:p(e),scriptTags:A(f.TAG_NAMES.SCRIPT,[f.TAG_PROPERTIES.SRC,f.TAG_PROPERTIES.INNER_HTML],e),styleTags:A(f.TAG_NAMES.STYLE,[f.TAG_PROPERTIES.CSS_TEXT],e),title:d(e),titleAttributes:T(f.ATTRIBUTE_NAMES.TITLE,e)}},m=function(){var e=Date.now();return function(t){var n=Date.now();n-e>16?(e=n,t(n)):setTimeout(function(){m(t)},0)}}(),b=function(e){return clearTimeout(e)},S="undefined"!=typeof window?window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||m:e.requestAnimationFrame||m,v="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||b:e.cancelAnimationFrame||b,g=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},R=null,_=function(e){R&&v(R),e.defer?R=S(function(){O(e,function(){R=null})}):(O(e),R=null)},O=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.onChangeClientState,c=e.scriptTags,s=e.styleTags,d=e.title,p=e.titleAttributes;P(f.TAG_NAMES.BODY,r),P(f.TAG_NAMES.HTML,o),w(d,p);var T={baseTag:C(f.TAG_NAMES.BASE,n),linkTags:C(f.TAG_NAMES.LINK,i),metaTags:C(f.TAG_NAMES.META,a),noscriptTags:C(f.TAG_NAMES.NOSCRIPT,u),scriptTags:C(f.TAG_NAMES.SCRIPT,c),styleTags:C(f.TAG_NAMES.STYLE,s)},E={},A={};Object.keys(T).forEach(function(e){var t=T[e],n=t.newTags,r=t.oldTags;n.length&&(E[e]=n),r.length&&(A[e]=T[e].oldTags)}),t&&t(),l(e,E,A)},M=function(e){return Array.isArray(e)?e.join(""):e},w=function(e,t){"undefined"!=typeof e&&document.title!==e&&(document.title=M(e)),P(f.TAG_NAMES.TITLE,t)},P=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(f.HELMET_ATTRIBUTE),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),u=0;u<a.length;u++){var l=a[u],c=t[l]||"";n.getAttribute(l)!==c&&n.setAttribute(l,c),o.indexOf(l)===-1&&o.push(l);var s=i.indexOf(l);s!==-1&&i.splice(s,1)}for(var d=i.length-1;d>=0;d--)n.removeAttribute(i[d]);o.length===i.length?n.removeAttribute(f.HELMET_ATTRIBUTE):n.getAttribute(f.HELMET_ATTRIBUTE)!==a.join(",")&&n.setAttribute(f.HELMET_ATTRIBUTE,a.join(","))}},C=function(e,t){var n=document.head||document.querySelector(f.TAG_NAMES.HEAD),r=n.querySelectorAll(e+"["+f.HELMET_ATTRIBUTE+"]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach(function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===f.TAG_PROPERTIES.INNER_HTML)n.innerHTML=t.innerHTML;else if(r===f.TAG_PROPERTIES.CSS_TEXT)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var u="undefined"==typeof t[r]?"":t[r];n.setAttribute(r,u)}n.setAttribute(f.HELMET_ATTRIBUTE,"true"),o.some(function(e,t){return a=t,n.isEqualNode(e)})?o.splice(a,1):i.push(n)}),o.forEach(function(e){return e.parentNode.removeChild(e)}),i.forEach(function(e){return n.appendChild(e)}),{oldTags:o,newTags:i}},I=function(e){return Object.keys(e).reduce(function(t,n){var r="undefined"!=typeof e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r},"")},N=function(e,t,n,r){var o=I(n),i=M(t);return o?"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+">"+s(i,r)+"</"+e+">":"<"+e+" "+f.HELMET_ATTRIBUTE+'="true">'+s(i,r)+"</"+e+">"},G=function(e,t,n){return t.reduce(function(t,r){var o=Object.keys(r).filter(function(e){return!(e===f.TAG_PROPERTIES.INNER_HTML||e===f.TAG_PROPERTIES.CSS_TEXT)}).reduce(function(e,t){var o="undefined"==typeof r[t]?t:t+'="'+s(r[t],n)+'"';return e?e+" "+o:o},""),i=r.innerHTML||r.cssText||"",a=f.SELF_CLOSING_TAGS.indexOf(e)===-1;return t+"<"+e+" "+f.HELMET_ATTRIBUTE+'="true" '+o+(a?"/>":">"+i+"</"+e+">")},"")},L=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.REACT_TAG_MAP[n]||n]=e[n],t},t)},j=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce(function(t,n){return t[f.HTML_TAG_MAP[n]||n]=e[n],t},t)},H=function(e,t,n){var r,o=(r={key:t},r[f.HELMET_ATTRIBUTE]=!0,r),i=L(n,o);return[u.default.createElement(f.TAG_NAMES.TITLE,i,t)]},k=function(e,t){return t.map(function(t,n){var r,o=(r={key:n},r[f.HELMET_ATTRIBUTE]=!0,r);return Object.keys(t).forEach(function(e){var n=f.REACT_TAG_MAP[e]||e;if(n===f.TAG_PROPERTIES.INNER_HTML||n===f.TAG_PROPERTIES.CSS_TEXT){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]}),u.default.createElement(e,o)})},U=function(e,t,n){switch(e){case f.TAG_NAMES.TITLE:return{toComponent:function(){return H(e,t.title,t.titleAttributes,n)},toString:function(){return N(e,t.title,t.titleAttributes,n)}};case f.ATTRIBUTE_NAMES.BODY:case f.ATTRIBUTE_NAMES.HTML:return{toComponent:function(){return L(t)},toString:function(){return I(t)}};default:return{toComponent:function(){return k(e,t)},toString:function(){return G(e,t,n)}}}},x=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,u=e.noscriptTags,l=e.scriptTags,c=e.styleTags,s=e.title,d=void 0===s?"":s,p=e.titleAttributes;return{base:U(f.TAG_NAMES.BASE,t,r),bodyAttributes:U(f.ATTRIBUTE_NAMES.BODY,n,r),htmlAttributes:U(f.ATTRIBUTE_NAMES.HTML,o,r),link:U(f.TAG_NAMES.LINK,i,r),meta:U(f.TAG_NAMES.META,a,r),noscript:U(f.TAG_NAMES.NOSCRIPT,u,r),script:U(f.TAG_NAMES.SCRIPT,l,r),style:U(f.TAG_NAMES.STYLE,c,r),title:U(f.TAG_NAMES.TITLE,{title:d,titleAttributes:p},r)}};t.convertReactPropstoHtmlAttributes=j,t.handleClientStateChange=_,t.mapStateOnServer=x,t.reducePropsToState=h,t.requestAnimationFrame=S,t.warn=g}).call(t,function(){return this}())},391:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=n(2),l=r(u),c=n(264),f=r(c),s=n(406),d=r(s);e.exports=function(e,t,n){function r(e){return e.displayName||e.name||"Component"}if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if("undefined"!=typeof n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(c){function s(){T=e(p.map(function(e){return e.props})),E.canUseDOM?t(T):n&&(T=n(T))}if("function"!=typeof c)throw new Error("Expected WrappedComponent to be a React component.");var p=[],T=void 0,E=function(e){function t(){return o(this,t),i(this,e.apply(this,arguments))}return a(t,e),t.peek=function(){return T},t.rewind=function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=T;return T=void 0,p=[],e},t.prototype.shouldComponentUpdate=function(e){return!(0,d.default)(e,this.props)},t.prototype.componentWillMount=function(){p.push(this),s()},t.prototype.componentDidUpdate=function(){s()},t.prototype.componentWillUnmount=function(){var e=p.indexOf(this);p.splice(e,1),s()},t.prototype.render=function(){return l.default.createElement(c,this.props)},t}(u.Component);return E.displayName="SideEffect("+r(c)+")",E.canUseDOM=f.default.canUseDOM,E}}},406:function(e,t){e.exports=function(e,t,n,r){var o=n?n.call(r,e,t):void 0;if(void 0!==o)return!!o;if(e===t)return!0;if("object"!=typeof e||!e||"object"!=typeof t||!t)return!1;var i=Object.keys(e),a=Object.keys(t);if(i.length!==a.length)return!1;for(var u=Object.prototype.hasOwnProperty.bind(t),l=0;l<i.length;l++){var c=i[l];if(!u(c))return!1;var f=e[c],s=t[c];if(o=n?n.call(r,f,s,c):void 0,o===!1||void 0===o&&f!==s)return!1}return!0}},407:function(e,t,n){e.exports=n.p+"static/GitHub_Logo_White.064ace47.png"},408:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAABsCAYAAABQKC3SAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMkM5NzJFMzFDNzgxMUUyQjkxNEY3RUNEMkY1ODRBRCIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMkM5NzJFNDFDNzgxMUUyQjkxNEY3RUNEMkY1ODRBRCI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAyQzk3MkUxMUM3ODExRTJCOTE0RjdFQ0QyRjU4NEFEIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyQzk3MkUyMUM3ODExRTJCOTE0RjdFQ0QyRjU4NEFEIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+mIziHgAABHFJREFUeNrsnb9PFEEUx+8uYk4OqIWK2GhCZfihpWhErSjURGxEChIrSUz0D/AfwMKGKJHGs9BEKg2NJBYmGrCRaGEraGNzLPcjHOcbGJLzAsctM7vM7n6+yWSPu92d2fnsm/fezK6ma7Vaqk4XpExJGU0hFzQvZVrK4mEOTtfBVSe5T386qTkp434PyujtC8A6rTva+HxbrhqKP9B/kdCwnyE6o30sioam/FpujT6LlNJ+fS6KjnqxXCwXy42zgAtcBFwEXARc5Brc9fX1V6mdVaUTaS31WX2nf0Nh5Uy28txCofC5s7NzQliuNNtPquuTfWdl3yG6P9g81wpcZZECa8znzZDv6Oi4Bavg4GaOAqySOoZh2uFhWQ3FXV1d50wa4Hnep/b29vOgcG9Y7hEfu2bSUqm+WzarMHNoWFZDqinY7ZbKOTY2NvIwcygVkmDIGhAZlvG9jvlclceWbDRCmpCVTREcjvhcPTlhTawrO5gKoRj6XD2U2rLaLCgcgisasdiOEVA4BFdSoTFbjZBUiGlIx6JlJRuTGH2y+QYKxwKqQqHw1oLVPoOXez5XTf4PqdWdwx7ved5L5pUdhauklu0UpEOCHQOBw3CVFCS1uqP954E+Vvb9Dlj3A6q9fGhezxUv7E5P6jx2RH67J79dpdvDCah4nYRoGSXW5yLgIuAiWzpGF/wX6f/IZDKvs9nsgvz5Zb+HEXT0P1gulwer1epl+XxRsoDjsUuFTBftW63fpJ5mdQjQimzeCJwHJvPkm5ub4wL7kZznjCvR8vaFm8i0pWHUs985Pc97anstWUGW85ZrwSnVakmk5arhVyzsxkGvvhjUl5U6vgZkxeS5TYbh99LpZ4MCq2/EkqpD3UREy+GBzedyuWu2ntpsEfAf4IYD9nao0eoO4JvADTjFCRtsHeCPyhWQCgUXUHXbePXFoH6bjxIRUDXcGGtHXP/KUQRXTD+Gp+cMywHVc9SSy+yRzS+G5Xi6htWw0yLghqtl4IYoPRf8rnE+WD3EVywWH8vHXFThJmLhYC8JvOtSfh9Ur4beZ6mvR8NcOEjkem6lUrnb1tY228q+ap1WfOWydFavhZTqL8NygCqVSsOtgm0AbCOV+UkqFGAqJMPsmsA6ecjDbbz4ZupiSIX2kgRIEwZgU9Vq9UqUrjdRcLe2th6aHF8ulweidL2JCaj0DNFpw9MMYLluBlI23lGqAdfNIflU0jKDJPncS6YniNqL4kmCm8ZyEXAjqN6kwU3MDJWtxQcH2sEMFQIucBFwEXARcBFwEXCBi4CLgIuAi4CLgIuAC1wEXOSq+Fdbo69+Xeq1pApw4wF2puH7SSw3HnBndmHWWe32d/jc+GhGl358bvw0WWe5RMtxt1yeW3b0eps1ocWAaon/ESx6SreaCgE3+nD3FT43xgIucBFwEXARcBFwEXCBi+IGd55uiIzm/cKdps8io2m/cBelPKHfnNecZuXb507pg5GbUsY3bhJQqYOH8cHO+dhhbXy+9U+AAQCzSPPC3XbctQAAAABJRU5ErkJggg=="},177:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(407),u=r(a),l=n(408),c=r(l),f=function(){return i.default.createElement("div",{style:{backgroundColor:"#101524",height:200,position:"absolute",bottom:0,padding:"34px 2.0875rem",width:"100%",display:"flex",justifyContent:"center",borderTop:"solid 1px gray"}},i.default.createElement("ul",{style:{height:"40px",listStyleType:"none",fontFamily:"Open Sans",fontSize:"17px",margin:"auto"}},i.default.createElement("li",null,i.default.createElement("a",{href:"https://www.linkedin.com/in/harri-m%C3%A4h%C3%B6nen-91792114b/"},i.default.createElement("img",{src:c.default}))),i.default.createElement("li",null,i.default.createElement("a",{href:"https://github.com/harrimahonen"},i.default.createElement("img",{src:u.default})))),i.default.createElement("div",{style:{bottom:0,paddingBottom:"2em",position:"absolute",height:"20px",fontFamily:"Open Sans",margin:"auto",fontSize:18,color:"antiquewhite"}},"© 2017 HARRI MÄHÖNEN ALL RIGHTS RESERVED"))};t.default=f,e.exports=t.default},265:function(e,t){},178:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(7),u=r(a),l=n(133),c=r(l),f=n(372),s=r(f),d=n(177),p=r(d),T=n(179),E=r(T);n(265);var A=function(){return i.default.createElement("div",{style:{width:"100%",background:"rgb(245, 209, 168)"}},i.default.createElement(E.default,null),i.default.createElement("div",{style:{color:"rgb(16, 21, 36)",position:"relative",maxWidth:"50%",padding:"1.45rem",paddingLeft:"12em",margin:"0"}},i.default.createElement("h1",{style:{margin:0,fontFamily:"Raleway",textDecoration:"italic",fontWeight:"700"}},i.default.createElement(c.default,{to:"/"},"Leaf"))))},y=function(e){var t=e.children;return i.default.createElement("div",{style:{position:"relative",minHeight:"100%",backgroundColor:"rgb(16, 21, 36)"}},i.default.createElement(s.default,{title:"Leaf - A Unity game",meta:[{name:"description",content:"A game demo, made in Unity"},{name:"keywords",content:"unity, leaf, student, adventure, game, c#, demo"}],link:[{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Open+Sans:400,700,700i|Raleway:400,500,700,700i"}]}),i.default.createElement(A,null),i.default.createElement("div",{style:{backgroundColor:"#101524",minHeight:"100%"}},i.default.createElement("div",{style:{margin:"0 auto",maxWidth:"960px",paddingBottom:200,paddingTop:"1em",fontWeight:"bold"}},t())),i.default.createElement(p.default,null))};y.propTypes={children:u.default.func},t.default=y,e.exports=t.default},179:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=n(2),i=r(o),a=n(133),u=r(a),l=function(){return i.default.createElement("nav",{style:{position:"absolute",padding:"34px 2.0875rem",right:"0"}},i.default.createElement("ul",{style:{listStyleType:"none",margin:0,fontFamily:"Open Sans",fontSize:"17px"}},i.default.createElement(u.default,{to:"/"},i.default.createElement("li",null,"Home")),"|",i.default.createElement(u.default,{to:"/showcase/"},i.default.createElement("li",null,"Showcase")),"|",i.default.createElement(u.default,{to:"/team/"},i.default.createElement("li",null,"Team")),"|",i.default.createElement(u.default,{to:"/faq/"},i.default.createElement("li",null,"FAQ"))))};t.default=l,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-3b2a14de50c17be41cd1.js.map