(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(r){if(r.ep)return;r.ep=!0;const o=t(r);fetch(r.href,o)}})();var Xo,Ne,cp,Gi,kf,up,Pc,fp,Bo={},hp=[],Hg=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,Da=Array.isArray;function ni(n,e){for(var t in e)n[t]=e[t];return n}function dp(n){var e=n.parentNode;e&&e.removeChild(n)}function Nn(n,e,t){var i,r,o,a={};for(o in e)o=="key"?i=e[o]:o=="ref"?r=e[o]:a[o]=e[o];if(arguments.length>2&&(a.children=arguments.length>3?Xo.call(arguments,2):t),typeof n=="function"&&n.defaultProps!=null)for(o in n.defaultProps)a[o]===void 0&&(a[o]=n.defaultProps[o]);return No(n,a,i,r,null)}function No(n,e,t,i,r){var o={type:n,props:e,key:t,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:r??++cp,__i:-1,__u:0};return r==null&&Ne.vnode!=null&&Ne.vnode(o),o}function pp(){return{current:null}}function Un(n){return n.children}function Ln(n,e){this.props=n,this.context=e}function Gr(n,e){if(e==null)return n.__?Gr(n.__,n.__i+1):null;for(var t;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null)return t.__e;return typeof n.type=="function"?Gr(n):null}function mp(n){var e,t;if((n=n.__)!=null&&n.__c!=null){for(n.__e=n.__c.base=null,e=0;e<n.__k.length;e++)if((t=n.__k[e])!=null&&t.__e!=null){n.__e=n.__c.base=t.__e;break}return mp(n)}}function Lc(n){(!n.__d&&(n.__d=!0)&&Gi.push(n)&&!da.__r++||kf!==Ne.debounceRendering)&&((kf=Ne.debounceRendering)||up)(da)}function da(){var n,e,t,i,r,o,a,s,l;for(Gi.sort(Pc);n=Gi.shift();)n.__d&&(e=Gi.length,i=void 0,o=(r=(t=n).__v).__e,s=[],l=[],(a=t.__P)&&((i=ni({},r)).__v=r.__v+1,Ne.vnode&&Ne.vnode(i),ru(a,i,r,t.__n,a.ownerSVGElement!==void 0,32&r.__u?[o]:null,s,o??Gr(r),!!(32&r.__u),l),i.__.__k[i.__i]=i,vp(s,i,l),i.__e!=o&&mp(i)),Gi.length>e&&Gi.sort(Pc));da.__r=0}function gp(n,e,t,i,r,o,a,s,l,c,h){var f,d,m,v,x,g=i&&i.__k||hp,_=e.length;for(t.__d=l,Gg(t,e,g),l=t.__d,f=0;f<_;f++)(m=t.__k[f])!=null&&typeof m!="boolean"&&typeof m!="function"&&(d=m.__i===-1?Bo:g[m.__i]||Bo,m.__i=f,ru(n,m,d,r,o,a,s,l,c,h),v=m.__e,m.ref&&d.ref!=m.ref&&(d.ref&&ou(d.ref,null,m),h.push(m.ref,m.__c||v,m)),x==null&&v!=null&&(x=v),65536&m.__u||d.__k===m.__k?l=_p(m,l,n):typeof m.type=="function"&&m.__d!==void 0?l=m.__d:v&&(l=v.nextSibling),m.__d=void 0,m.__u&=-196609);t.__d=l,t.__e=x}function Gg(n,e,t){var i,r,o,a,s,l=e.length,c=t.length,h=c,f=0;for(n.__k=[],i=0;i<l;i++)(r=n.__k[i]=(r=e[i])==null||typeof r=="boolean"||typeof r=="function"?null:typeof r=="string"||typeof r=="number"||typeof r=="bigint"||r.constructor==String?No(null,r,null,null,r):Da(r)?No(Un,{children:r},null,null,null):r.__b>0?No(r.type,r.props,r.key,r.ref?r.ref:null,r.__v):r)!=null?(r.__=n,r.__b=n.__b+1,s=Vg(r,t,a=i+f,h),r.__i=s,o=null,s!==-1&&(h--,(o=t[s])&&(o.__u|=131072)),o==null||o.__v===null?(s==-1&&f--,typeof r.type!="function"&&(r.__u|=65536)):s!==a&&(s===a+1?f++:s>a?h>l-a?f+=s-a:f--:f=s<a&&s==a-1?s-a:0,s!==i+f&&(r.__u|=65536))):(o=t[i])&&o.key==null&&o.__e&&(o.__e==n.__d&&(n.__d=Gr(o)),Dc(o,o,!1),t[i]=null,h--);if(h)for(i=0;i<c;i++)(o=t[i])!=null&&!(131072&o.__u)&&(o.__e==n.__d&&(n.__d=Gr(o)),Dc(o,o))}function _p(n,e,t){var i,r;if(typeof n.type=="function"){for(i=n.__k,r=0;i&&r<i.length;r++)i[r]&&(i[r].__=n,e=_p(i[r],e,t));return e}return n.__e!=e&&(t.insertBefore(n.__e,e||null),e=n.__e),e&&e.nextSibling}function ri(n,e){return e=e||[],n==null||typeof n=="boolean"||(Da(n)?n.some(function(t){ri(t,e)}):e.push(n)),e}function Vg(n,e,t,i){var r=n.key,o=n.type,a=t-1,s=t+1,l=e[t];if(l===null||l&&r==l.key&&o===l.type)return t;if(i>(l!=null&&!(131072&l.__u)?1:0))for(;a>=0||s<e.length;){if(a>=0){if((l=e[a])&&!(131072&l.__u)&&r==l.key&&o===l.type)return a;a--}if(s<e.length){if((l=e[s])&&!(131072&l.__u)&&r==l.key&&o===l.type)return s;s++}}return-1}function zf(n,e,t){e[0]==="-"?n.setProperty(e,t??""):n[e]=t==null?"":typeof t!="number"||Hg.test(e)?t:t+"px"}function As(n,e,t,i,r){var o;e:if(e==="style")if(typeof t=="string")n.style.cssText=t;else{if(typeof i=="string"&&(n.style.cssText=i=""),i)for(e in i)t&&e in t||zf(n.style,e,"");if(t)for(e in t)i&&t[e]===i[e]||zf(n.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")o=e!==(e=e.replace(/(PointerCapture)$|Capture$/,"$1")),e=e.toLowerCase()in n?e.toLowerCase().slice(2):e.slice(2),n.l||(n.l={}),n.l[e+o]=t,t?i?t.u=i.u:(t.u=Date.now(),n.addEventListener(e,o?Gf:Hf,o)):n.removeEventListener(e,o?Gf:Hf,o);else{if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="width"&&e!=="height"&&e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e!=="rowSpan"&&e!=="colSpan"&&e!=="role"&&e in n)try{n[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e[4]!=="-"?n.removeAttribute(e):n.setAttribute(e,t))}}function Hf(n){var e=this.l[n.type+!1];if(n.t){if(n.t<=e.u)return}else n.t=Date.now();return e(Ne.event?Ne.event(n):n)}function Gf(n){return this.l[n.type+!0](Ne.event?Ne.event(n):n)}function ru(n,e,t,i,r,o,a,s,l,c){var h,f,d,m,v,x,g,_,A,b,S,C,D,R,Z,M=e.type;if(e.constructor!==void 0)return null;128&t.__u&&(l=!!(32&t.__u),o=[s=e.__e=t.__e]),(h=Ne.__b)&&h(e);e:if(typeof M=="function")try{if(_=e.props,A=(h=M.contextType)&&i[h.__c],b=h?A?A.props.value:h.__:i,t.__c?g=(f=e.__c=t.__c).__=f.__E:("prototype"in M&&M.prototype.render?e.__c=f=new M(_,b):(e.__c=f=new Ln(_,b),f.constructor=M,f.render=Xg),A&&A.sub(f),f.props=_,f.state||(f.state={}),f.context=b,f.__n=i,d=f.__d=!0,f.__h=[],f._sb=[]),f.__s==null&&(f.__s=f.state),M.getDerivedStateFromProps!=null&&(f.__s==f.state&&(f.__s=ni({},f.__s)),ni(f.__s,M.getDerivedStateFromProps(_,f.__s))),m=f.props,v=f.state,f.__v=e,d)M.getDerivedStateFromProps==null&&f.componentWillMount!=null&&f.componentWillMount(),f.componentDidMount!=null&&f.__h.push(f.componentDidMount);else{if(M.getDerivedStateFromProps==null&&_!==m&&f.componentWillReceiveProps!=null&&f.componentWillReceiveProps(_,b),!f.__e&&(f.shouldComponentUpdate!=null&&f.shouldComponentUpdate(_,f.__s,b)===!1||e.__v===t.__v)){for(e.__v!==t.__v&&(f.props=_,f.state=f.__s,f.__d=!1),e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(L){L&&(L.__=e)}),S=0;S<f._sb.length;S++)f.__h.push(f._sb[S]);f._sb=[],f.__h.length&&a.push(f);break e}f.componentWillUpdate!=null&&f.componentWillUpdate(_,f.__s,b),f.componentDidUpdate!=null&&f.__h.push(function(){f.componentDidUpdate(m,v,x)})}if(f.context=b,f.props=_,f.__P=n,f.__e=!1,C=Ne.__r,D=0,"prototype"in M&&M.prototype.render){for(f.state=f.__s,f.__d=!1,C&&C(e),h=f.render(f.props,f.state,f.context),R=0;R<f._sb.length;R++)f.__h.push(f._sb[R]);f._sb=[]}else do f.__d=!1,C&&C(e),h=f.render(f.props,f.state,f.context),f.state=f.__s;while(f.__d&&++D<25);f.state=f.__s,f.getChildContext!=null&&(i=ni(ni({},i),f.getChildContext())),d||f.getSnapshotBeforeUpdate==null||(x=f.getSnapshotBeforeUpdate(m,v)),gp(n,Da(Z=h!=null&&h.type===Un&&h.key==null?h.props.children:h)?Z:[Z],e,t,i,r,o,a,s,l,c),f.base=e.__e,e.__u&=-161,f.__h.length&&a.push(f),g&&(f.__E=f.__=null)}catch(L){e.__v=null,l||o!=null?(e.__e=s,e.__u|=l?160:32,o[o.indexOf(s)]=null):(e.__e=t.__e,e.__k=t.__k),Ne.__e(L,e,t)}else o==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=Wg(t.__e,e,t,i,r,o,a,l,c);(h=Ne.diffed)&&h(e)}function vp(n,e,t){e.__d=void 0;for(var i=0;i<t.length;i++)ou(t[i],t[++i],t[++i]);Ne.__c&&Ne.__c(e,n),n.some(function(r){try{n=r.__h,r.__h=[],n.some(function(o){o.call(r)})}catch(o){Ne.__e(o,r.__v)}})}function Wg(n,e,t,i,r,o,a,s,l){var c,h,f,d,m,v,x,g=t.props,_=e.props,A=e.type;if(A==="svg"&&(r=!0),o!=null){for(c=0;c<o.length;c++)if((m=o[c])&&"setAttribute"in m==!!A&&(A?m.localName===A:m.nodeType===3)){n=m,o[c]=null;break}}if(n==null){if(A===null)return document.createTextNode(_);n=r?document.createElementNS("http://www.w3.org/2000/svg",A):document.createElement(A,_.is&&_),o=null,s=!1}if(A===null)g===_||s&&n.data===_||(n.data=_);else{if(o=o&&Xo.call(n.childNodes),g=t.props||Bo,!s&&o!=null)for(g={},c=0;c<n.attributes.length;c++)g[(m=n.attributes[c]).name]=m.value;for(c in g)m=g[c],c=="children"||(c=="dangerouslySetInnerHTML"?f=m:c==="key"||c in _||As(n,c,null,m,r));for(c in _)m=_[c],c=="children"?d=m:c=="dangerouslySetInnerHTML"?h=m:c=="value"?v=m:c=="checked"?x=m:c==="key"||s&&typeof m!="function"||g[c]===m||As(n,c,m,g[c],r);if(h)s||f&&(h.__html===f.__html||h.__html===n.innerHTML)||(n.innerHTML=h.__html),e.__k=[];else if(f&&(n.innerHTML=""),gp(n,Da(d)?d:[d],e,t,i,r&&A!=="foreignObject",o,a,o?o[0]:t.__k&&Gr(t,0),s,l),o!=null)for(c=o.length;c--;)o[c]!=null&&dp(o[c]);s||(c="value",v!==void 0&&(v!==n[c]||A==="progress"&&!v||A==="option"&&v!==g[c])&&As(n,c,v,g[c],!1),c="checked",x!==void 0&&x!==n[c]&&As(n,c,x,g[c],!1))}return n}function ou(n,e,t){try{typeof n=="function"?n(e):n.current=e}catch(i){Ne.__e(i,t)}}function Dc(n,e,t){var i,r;if(Ne.unmount&&Ne.unmount(n),(i=n.ref)&&(i.current&&i.current!==n.__e||ou(i,null,e)),(i=n.__c)!=null){if(i.componentWillUnmount)try{i.componentWillUnmount()}catch(o){Ne.__e(o,e)}i.base=i.__P=null,n.__c=void 0}if(i=n.__k)for(r=0;r<i.length;r++)i[r]&&Dc(i[r],e,t||typeof n.type!="function");t||n.__e==null||dp(n.__e),n.__=n.__e=n.__d=void 0}function Xg(n,e,t){return this.constructor(n,t)}function Vr(n,e,t){var i,r,o,a;Ne.__&&Ne.__(n,e),r=(i=typeof t=="function")?null:t&&t.__k||e.__k,o=[],a=[],ru(e,n=(!i&&t||e).__k=Nn(Un,null,[n]),r||Bo,Bo,e.ownerSVGElement!==void 0,!i&&t?[t]:r?null:e.firstChild?Xo.call(e.childNodes):null,o,!i&&t?t:r?r.__e:e.firstChild,i,a),vp(o,n,a)}function xp(n,e){Vr(n,e,xp)}function qg(n,e,t){var i,r,o,a,s=ni({},n.props);for(o in n.type&&n.type.defaultProps&&(a=n.type.defaultProps),e)o=="key"?i=e[o]:o=="ref"?r=e[o]:s[o]=e[o]===void 0&&a!==void 0?a[o]:e[o];return arguments.length>2&&(s.children=arguments.length>3?Xo.call(arguments,2):t),No(n.type,s,i||n.key,r||n.ref,null)}function Na(n,e){var t={__c:e="__cC"+fp++,__:n,Consumer:function(i,r){return i.children(r)},Provider:function(i){var r,o;return this.getChildContext||(r=[],(o={})[e]=this,this.getChildContext=function(){return o},this.shouldComponentUpdate=function(a){this.props.value!==a.value&&r.some(function(s){s.__e=!0,Lc(s)})},this.sub=function(a){r.push(a);var s=a.componentWillUnmount;a.componentWillUnmount=function(){r.splice(r.indexOf(a),1),s&&s.call(a)}}),i.children}};return t.Provider.__=t.Consumer.contextType=t}Xo=hp.slice,Ne={__e:function(n,e,t,i){for(var r,o,a;e=e.__;)if((r=e.__c)&&!r.__)try{if((o=r.constructor)&&o.getDerivedStateFromError!=null&&(r.setState(o.getDerivedStateFromError(n)),a=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(n,i||{}),a=r.__d),a)return r.__E=r}catch(s){n=s}throw n}},cp=0,Ln.prototype.setState=function(n,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=ni({},this.state),typeof n=="function"&&(n=n(ni({},t),this.props)),n&&ni(t,n),n!=null&&this.__v&&(e&&this._sb.push(e),Lc(this))},Ln.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),Lc(this))},Ln.prototype.render=Un,Gi=[],up=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Pc=function(n,e){return n.__v.__b-e.__v.__b},da.__r=0,fp=0;function Yg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}function $g(n){if(n.__esModule)return n;var e=n.default;if(typeof e=="function"){var t=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(n).forEach(function(i){var r=Object.getOwnPropertyDescriptor(n,i);Object.defineProperty(t,i,r.get?r:{enumerable:!0,get:function(){return n[i]}})}),t}var yp={exports:{}},oi,_t,Wl,Vf,Wr=0,Sp=[],oa=[],Wf=Ne.__b,Xf=Ne.__r,qf=Ne.diffed,Yf=Ne.__c,$f=Ne.unmount;function tr(n,e){Ne.__h&&Ne.__h(_t,n,Wr||e),Wr=0;var t=_t.__H||(_t.__H={__:[],__h:[]});return n>=t.__.length&&t.__.push({__V:oa}),t.__[n]}function qo(n){return Wr=1,Ua(wp,n)}function Ua(n,e,t){var i=tr(oi++,2);if(i.t=n,!i.__c&&(i.__=[t?t(e):wp(void 0,e),function(s){var l=i.__N?i.__N[0]:i.__[0],c=i.t(l,s);l!==c&&(i.__N=[c,i.__[1]],i.__c.setState({}))}],i.__c=_t,!_t.u)){var r=function(s,l,c){if(!i.__c.__H)return!0;var h=i.__c.__H.__.filter(function(d){return d.__c});if(h.every(function(d){return!d.__N}))return!o||o.call(this,s,l,c);var f=!1;return h.forEach(function(d){if(d.__N){var m=d.__[0];d.__=d.__N,d.__N=void 0,m!==d.__[0]&&(f=!0)}}),!(!f&&i.__c.props===s)&&(!o||o.call(this,s,l,c))};_t.u=!0;var o=_t.shouldComponentUpdate,a=_t.componentWillUpdate;_t.componentWillUpdate=function(s,l,c){if(this.__e){var h=o;o=void 0,r(s,l,c),o=h}a&&a.call(this,s,l,c)},_t.shouldComponentUpdate=r}return i.__N||i.__}function Yo(n,e){var t=tr(oi++,3);!Ne.__s&&lu(t.__H,e)&&(t.__=n,t.i=e,_t.__H.__h.push(t))}function Jr(n,e){var t=tr(oi++,4);!Ne.__s&&lu(t.__H,e)&&(t.__=n,t.i=e,_t.__h.push(t))}function su(n){return Wr=5,$o(function(){return{current:n}},[])}function Mp(n,e,t){Wr=6,Jr(function(){return typeof n=="function"?(n(e()),function(){return n(null)}):n?(n.current=e(),function(){return n.current=null}):void 0},t==null?t:t.concat(n))}function $o(n,e){var t=tr(oi++,7);return lu(t.__H,e)?(t.__V=n(),t.i=e,t.__h=n,t.__V):t.__}function Ep(n,e){return Wr=8,$o(function(){return n},e)}function au(n){var e=_t.context[n.__c],t=tr(oi++,9);return t.c=n,e?(t.__==null&&(t.__=!0,e.sub(_t)),e.props.value):n.__}function bp(n,e){Ne.useDebugValue&&Ne.useDebugValue(e?e(n):n)}function jg(n){var e=tr(oi++,10),t=qo();return e.__=n,_t.componentDidCatch||(_t.componentDidCatch=function(i,r){e.__&&e.__(i,r),t[1](i)}),[t[0],function(){t[1](void 0)}]}function Tp(){var n=tr(oi++,11);if(!n.__){for(var e=_t.__v;e!==null&&!e.__m&&e.__!==null;)e=e.__;var t=e.__m||(e.__m=[0,0]);n.__="P"+t[0]+"-"+t[1]++}return n.__}function Kg(){for(var n;n=Sp.shift();)if(n.__P&&n.__H)try{n.__H.__h.forEach(sa),n.__H.__h.forEach(Nc),n.__H.__h=[]}catch(e){n.__H.__h=[],Ne.__e(e,n.__v)}}Ne.__b=function(n){_t=null,Wf&&Wf(n)},Ne.__r=function(n){Xf&&Xf(n),oi=0;var e=(_t=n.__c).__H;e&&(Wl===_t?(e.__h=[],_t.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=oa,t.__N=t.i=void 0})):(e.__h.forEach(sa),e.__h.forEach(Nc),e.__h=[],oi=0)),Wl=_t},Ne.diffed=function(n){qf&&qf(n);var e=n.__c;e&&e.__H&&(e.__H.__h.length&&(Sp.push(e)!==1&&Vf===Ne.requestAnimationFrame||((Vf=Ne.requestAnimationFrame)||Zg)(Kg)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==oa&&(t.__=t.__V),t.i=void 0,t.__V=oa})),Wl=_t=null},Ne.__c=function(n,e){e.some(function(t){try{t.__h.forEach(sa),t.__h=t.__h.filter(function(i){return!i.__||Nc(i)})}catch(i){e.some(function(r){r.__h&&(r.__h=[])}),e=[],Ne.__e(i,t.__v)}}),Yf&&Yf(n,e)},Ne.unmount=function(n){$f&&$f(n);var e,t=n.__c;t&&t.__H&&(t.__H.__.forEach(function(i){try{sa(i)}catch(r){e=r}}),t.__H=void 0,e&&Ne.__e(e,t.__v))};var jf=typeof requestAnimationFrame=="function";function Zg(n){var e,t=function(){clearTimeout(i),jf&&cancelAnimationFrame(e),setTimeout(n)},i=setTimeout(t,100);jf&&(e=requestAnimationFrame(t))}function sa(n){var e=_t,t=n.__c;typeof t=="function"&&(n.__c=void 0,t()),_t=e}function Nc(n){var e=_t;n.__c=n.__(),_t=e}function lu(n,e){return!n||n.length!==e.length||e.some(function(t,i){return t!==n[i]})}function wp(n,e){return typeof e=="function"?e(n):e}function Ap(n,e){for(var t in e)n[t]=e[t];return n}function Uc(n,e){for(var t in n)if(t!=="__source"&&!(t in e))return!0;for(var i in e)if(i!=="__source"&&n[i]!==e[i])return!0;return!1}function pa(n){this.props=n}function li(n,e){function t(r){var o=this.props.ref,a=o==r.ref;return!a&&o&&(o.call?o(null):o.current=null),e?!e(this.props,r)||!a:Uc(this.props,r)}function i(r){return this.shouldComponentUpdate=t,Nn(n,r)}return i.displayName="Memo("+(n.displayName||n.name)+")",i.prototype.isReactComponent=!0,i.__f=!0,i}(pa.prototype=new Ln).isPureReactComponent=!0,pa.prototype.shouldComponentUpdate=function(n,e){return Uc(this.props,n)||Uc(this.state,e)};var Kf=Ne.__b;Ne.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),Kf&&Kf(n)};var Jg=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function Rp(n){function e(t){var i=Ap({},t);return delete i.ref,n(i,t.ref||null)}return e.$$typeof=Jg,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(n.displayName||n.name)+")",e}var Zf=function(n,e){return n==null?null:ri(ri(n).map(e))},Cp={map:Zf,forEach:Zf,count:function(n){return n?ri(n).length:0},only:function(n){var e=ri(n);if(e.length!==1)throw"Children.only";return e[0]},toArray:ri},Qg=Ne.__e;Ne.__e=function(n,e,t,i){if(n.then){for(var r,o=e;o=o.__;)if((r=o.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(n,e)}Qg(n,e,t,i)};var Jf=Ne.unmount;function Pp(n,e,t){return n&&(n.__c&&n.__c.__H&&(n.__c.__H.__.forEach(function(i){typeof i.__c=="function"&&i.__c()}),n.__c.__H=null),(n=Ap({},n)).__c!=null&&(n.__c.__P===t&&(n.__c.__P=e),n.__c=null),n.__k=n.__k&&n.__k.map(function(i){return Pp(i,e,t)})),n}function Lp(n,e,t){return n&&t&&(n.__v=null,n.__k=n.__k&&n.__k.map(function(i){return Lp(i,e,t)}),n.__c&&n.__c.__P===e&&(n.__e&&t.appendChild(n.__e),n.__c.__e=!0,n.__c.__P=t)),n}function Uo(){this.__u=0,this.t=null,this.__b=null}function Dp(n){var e=n.__.__c;return e&&e.__a&&e.__a(n)}function Np(n){var e,t,i;function r(o){if(e||(e=n()).then(function(a){t=a.default||a},function(a){i=a}),i)throw i;if(!t)throw e;return Nn(t,o)}return r.displayName="Lazy",r.__f=!0,r}function Or(){this.u=null,this.o=null}Ne.unmount=function(n){var e=n.__c;e&&e.__R&&e.__R(),e&&32&n.__u&&(n.type=null),Jf&&Jf(n)},(Uo.prototype=new Ln).__c=function(n,e){var t=e.__c,i=this;i.t==null&&(i.t=[]),i.t.push(t);var r=Dp(i.__v),o=!1,a=function(){o||(o=!0,t.__R=null,r?r(s):s())};t.__R=a;var s=function(){if(!--i.__u){if(i.state.__a){var l=i.state.__a;i.__v.__k[0]=Lp(l,l.__c.__P,l.__c.__O)}var c;for(i.setState({__a:i.__b=null});c=i.t.pop();)c.forceUpdate()}};i.__u++||32&e.__u||i.setState({__a:i.__b=i.__v.__k[0]}),n.then(a,a)},Uo.prototype.componentWillUnmount=function(){this.t=[]},Uo.prototype.render=function(n,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),i=this.__v.__k[0].__c;this.__v.__k[0]=Pp(this.__b,t,i.__O=i.__P)}this.__b=null}var r=e.__a&&Nn(Un,null,n.fallback);return r&&(r.__u&=-33),[Nn(Un,null,e.__a?null:n.children),r]};var Qf=function(n,e,t){if(++t[1]===t[0]&&n.o.delete(e),n.props.revealOrder&&(n.props.revealOrder[0]!=="t"||!n.o.size))for(t=n.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;n.u=t=t[2]}};function e_(n){return this.getChildContext=function(){return n.context},n.children}function t_(n){var e=this,t=n.i;e.componentWillUnmount=function(){Vr(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(i){this.childNodes.push(i),e.i.appendChild(i)},insertBefore:function(i,r){this.childNodes.push(i),e.i.appendChild(i)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),e.i.removeChild(i)}}),Vr(Nn(e_,{context:e.context},n.__v),e.l)}function Up(n,e){var t=Nn(t_,{__v:n,i:e});return t.containerInfo=e,t}(Or.prototype=new Ln).__a=function(n){var e=this,t=Dp(e.__v),i=e.o.get(n);return i[0]++,function(r){var o=function(){e.props.revealOrder?(i.push(r),Qf(e,n,i)):r()};t?t(o):o()}},Or.prototype.render=function(n){this.u=null,this.o=new Map;var e=ri(n.children);n.revealOrder&&n.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return n.children},Or.prototype.componentDidUpdate=Or.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(e,t){Qf(n,t,e)})};var Ip=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,n_=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,i_=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,r_=/[A-Z0-9]/g,o_=typeof document<"u",s_=function(n){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(n)};function Op(n,e,t){return e.__k==null&&(e.textContent=""),Vr(n,e),typeof t=="function"&&t(),n?n.__c:null}function Fp(n,e,t){return xp(n,e),typeof t=="function"&&t(),n?n.__c:null}Ln.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(Ln.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(e){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:e})}})});var eh=Ne.event;function a_(){}function l_(){return this.cancelBubble}function c_(){return this.defaultPrevented}Ne.event=function(n){return eh&&(n=eh(n)),n.persist=a_,n.isPropagationStopped=l_,n.isDefaultPrevented=c_,n.nativeEvent=n};var cu,u_={enumerable:!1,configurable:!0,get:function(){return this.class}},th=Ne.vnode;Ne.vnode=function(n){typeof n.type=="string"&&function(e){var t=e.props,i=e.type,r={};for(var o in t){var a=t[o];if(!(o==="value"&&"defaultValue"in t&&a==null||o_&&o==="children"&&i==="noscript"||o==="class"||o==="className")){var s=o.toLowerCase();o==="defaultValue"&&"value"in t&&t.value==null?o="value":o==="download"&&a===!0?a="":s==="ondoubleclick"?o="ondblclick":s!=="onchange"||i!=="input"&&i!=="textarea"||s_(t.type)?s==="onfocus"?o="onfocusin":s==="onblur"?o="onfocusout":i_.test(o)?o=s:i.indexOf("-")===-1&&n_.test(o)?o=o.replace(r_,"-$&").toLowerCase():a===null&&(a=void 0):s=o="oninput",s==="oninput"&&r[o=s]&&(o="oninputCapture"),r[o]=a}}i=="select"&&r.multiple&&Array.isArray(r.value)&&(r.value=ri(t.children).forEach(function(l){l.props.selected=r.value.indexOf(l.props.value)!=-1})),i=="select"&&r.defaultValue!=null&&(r.value=ri(t.children).forEach(function(l){l.props.selected=r.multiple?r.defaultValue.indexOf(l.props.value)!=-1:r.defaultValue==l.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",u_)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r}(n),n.$$typeof=Ip,th&&th(n)};var nh=Ne.__r;Ne.__r=function(n){nh&&nh(n),cu=n.__c};var ih=Ne.diffed;Ne.diffed=function(n){ih&&ih(n);var e=n.props,t=n.__e;t!=null&&n.type==="textarea"&&"value"in e&&e.value!==t.value&&(t.value=e.value==null?"":e.value),cu=null};var Bp={ReactCurrentDispatcher:{current:{readContext:function(n){return cu.__n[n.__c].props.value}}}},f_="17.0.2";function kp(n){return Nn.bind(null,n)}function jo(n){return!!n&&n.$$typeof===Ip}function zp(n){return jo(n)&&n.type===Un}function Hp(n){return jo(n)?qg.apply(null,arguments):n}function Gp(n){return!!n.__k&&(Vr(null,n),!0)}function Vp(n){return n&&(n.base||n.nodeType===1&&n)||null}var Wp=function(n,e){return n(e)},Xp=function(n,e){return n(e)},qp=Un;function uu(n){n()}function Yp(n){return n}function $p(){return[!1,uu]}var jp=Jr,Kp=jo;function Zp(n,e){var t=e(),i=qo({h:{__:t,v:e}}),r=i[0].h,o=i[1];return Jr(function(){r.__=t,r.v=e,Xl(r)&&o({h:r})},[n,t,e]),Yo(function(){return Xl(r)&&o({h:r}),n(function(){Xl(r)&&o({h:r})})},[n]),t}function Xl(n){var e,t,i=n.v,r=n.__;try{var o=i();return!((e=r)===(t=o)&&(e!==0||1/e==1/t)||e!=e&&t!=t)}catch{return!0}}var h_={useState:qo,useId:Tp,useReducer:Ua,useEffect:Yo,useLayoutEffect:Jr,useInsertionEffect:jp,useTransition:$p,useDeferredValue:Yp,useSyncExternalStore:Zp,startTransition:uu,useRef:su,useImperativeHandle:Mp,useMemo:$o,useCallback:Ep,useContext:au,useDebugValue:bp,version:"17.0.2",Children:Cp,render:Op,hydrate:Fp,unmountComponentAtNode:Gp,createPortal:Up,createElement:Nn,createContext:Na,createFactory:kp,cloneElement:Hp,createRef:pp,Fragment:Un,isValidElement:jo,isElement:Kp,isFragment:zp,findDOMNode:Vp,Component:Ln,PureComponent:pa,memo:li,forwardRef:Rp,flushSync:Xp,unstable_batchedUpdates:Wp,StrictMode:qp,Suspense:Uo,SuspenseList:Or,lazy:Np,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Bp};const d_=Object.freeze(Object.defineProperty({__proto__:null,Children:Cp,Component:Ln,Fragment:Un,PureComponent:pa,StrictMode:qp,Suspense:Uo,SuspenseList:Or,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Bp,cloneElement:Hp,createContext:Na,createElement:Nn,createFactory:kp,createPortal:Up,createRef:pp,default:h_,findDOMNode:Vp,flushSync:Xp,forwardRef:Rp,hydrate:Fp,isElement:Kp,isFragment:zp,isValidElement:jo,lazy:Np,memo:li,render:Op,startTransition:uu,unmountComponentAtNode:Gp,unstable_batchedUpdates:Wp,useCallback:Ep,useContext:au,useDebugValue:bp,useDeferredValue:Yp,useEffect:Yo,useErrorBoundary:jg,useId:Tp,useImperativeHandle:Mp,useInsertionEffect:jp,useLayoutEffect:Jr,useMemo:$o,useReducer:Ua,useRef:su,useState:qo,useSyncExternalStore:Zp,useTransition:$p,version:f_},Symbol.toStringTag,{value:"Module"})),p_=$g(d_);/*!
 * @fullpage/react-fullpage 0.1.40
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */(function(n){(()=>{var e={271:(o,a,s)=>{s.d(a,{Z:()=>l});const l=(c,h)=>c?function(){for(var f=arguments.length,d=new Array(f),m=0;m<f;m++)d[m]=arguments[m];return console.log(`<${h}/> Debug Log: `,...d)}:()=>{}},88:(o,a,s)=>{s.d(a,{Z:()=>ie});var l=s(497),c=s.n(l),h=s(379),f=s.n(h),d=s(795),m=s.n(d),v=s(569),x=s.n(v),g=s(565),_=s.n(g),A=s(216),b=s.n(A),S=s(589),C=s.n(S),D=s(563),R={};R.styleTagTransform=C(),R.setAttributes=_(),R.insert=x().bind(null,"head"),R.domAPI=m(),R.insertStyleElement=b(),f()(D.Z,R),D.Z&&D.Z.locals&&D.Z.locals;var Z=s(271),M=s(542);function L(q,X){var O=Object.keys(q);if(Object.getOwnPropertySymbols){var W=Object.getOwnPropertySymbols(q);X&&(W=W.filter(function(ye){return Object.getOwnPropertyDescriptor(q,ye).enumerable})),O.push.apply(O,W)}return O}function G(q){for(var X=1;X<arguments.length;X++){var O=arguments[X]!=null?arguments[X]:{};X%2?L(Object(O),!0).forEach(function(W){se(q,W,O[W])}):Object.getOwnPropertyDescriptors?Object.defineProperties(q,Object.getOwnPropertyDescriptors(O)):L(Object(O)).forEach(function(W){Object.defineProperty(q,W,Object.getOwnPropertyDescriptor(O,W))})}return q}function se(q,X,O){return X in q?Object.defineProperty(q,X,{value:O,enumerable:!0,configurable:!0,writable:!0}):q[X]=O,q}let ae;const B=q=>typeof q=="function",te=(q,X)=>q.length!==X.length?!1:q.find(O=>!X.includes(O))==null,ue=["afterLoad","afterRender","afterResize","afterResponsive","afterSlideLoad","onLeave","onSlideLeave"];class re extends c().Component{constructor(X){super(X);const{render:O,pluginWrapper:W}=this.props;if(!B(O))throw new Error("must provide render prop to <ReactFullpage />");this.log=(0,Z.Z)(this.props.debug,"ReactFullpage"),this.log("Building component"),this.log("Importing vendor files"),this.importVendors(),W&&(this.log("Calling plugin wrapper"),W()),this.log("Requiring fullpage.js"),ae=s(933),this.state={initialized:!1,sectionCount:0,slideCount:0}}componentDidMount(){const X=this.buildOptions();this.log("React Lifecycle: componentDidMount()"),ae&&(this.init(X),this.markInitialized())}isReRenderNecessary(X){const O=this.getSectionCount(),W=this.getSlideCount(),{sectionCount:ye,slideCount:xe}=this.state;let he=ye!==O||xe!==W;return["sectionsColor","navigationTooltips","navigationPosition","navigation","scrollBar"].forEach(He=>{typeof X[He]<"u"&&(Array.isArray(X[He])?he=he||!te(X[He],this.props[He]):he=he||X[He]!==this.props[He])}),he}componentDidUpdate(X){if(this.log("React Lifecycle: componentDidUpdate()"),this.isReRenderNecessary(X)){this.log("rebuilding due to a change in fullpage.js props or num sections/slides"),this.reRender();return}}componentWillUnmount(){this.destroy()}getSectionCount(){const{sectionSelector:X=M.uS}=this.props,{length:O}=document.querySelectorAll(X);return O}getSlideCount(){const{slideSelector:X=M.xH}=this.props,{length:O}=document.querySelectorAll(X);return O}importVendors(){const{easing:X,css3:O}=this.props;X&&!O&&s(239)}init(X){this.log("Reinitializing fullpage with options",X);const O=X.animateAnchor;X.animateAnchor=!1,new ae(M.Km,X),this.fullpageApi=window.fullpage_api,this.fpUtils=window.fp_utils,this.fpEasings=window.fp_easings,window.fullpage_api.getFullpageData().options.animateAnchor=O}destroy(){this.log("Destroying fullpage instance"),this.fullpageApi.destroy("all")}reRender(){const X=this.props.slideSelector||".slide",O=this.props.sectionSelector||".section",W=document.querySelector(O+".active"),ye=W?this.fpUtils.index(W):this.state.destination?this.state.destination.index-1:0,xe=document.querySelector(O+".active "+X+".active"),he=xe?this.fpUtils.index(xe):-1;this.destroy(),ye>-1&&this.fpUtils.addClass(document.querySelectorAll(O)[ye],"active"),he>-1&&this.fpUtils.addClass(xe,"active"),this.init(this.buildOptions())}markInitialized(){this.log("Marking initialized"),this.setState({initialized:!0,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()})}buildOptions(){var X=this;let O=null;if(!this.state.initialized){const ye=he=>!!Object.keys(this.props).find(Ce=>Ce===he);O=ue.filter(ye).reduce((he,Ce)=>G(G({},he),{},{[Ce]:function(){for(var He=arguments.length,Fe=new Array(He),Ie=0;Ie<He;Ie++)Fe[Ie]=arguments[Ie];return X.update(Ce,...Fe)}}),{})}const W=G(G({},this.props),O);return this.log("Building fullpage.js options: ",W),W}update(X){for(var O=arguments.length,W=new Array(O>1?O-1:0),ye=1;ye<O;ye++)W[ye-1]=arguments[ye];this.log("Event trigger: ",X);let xe=G(G({},this.state),{},{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});const he=Fe=>G(G(G({},xe),Fe),{},{lastEvent:X}),Ce=Fe=>Fe.reduce((Ie,ct,Ue)=>{const k=W[Ue];return Ie[ct]=k,Ie},{});switch(X){case"afterLoad":xe=he(Ce(["origin","destination","direction"]));break;case"afterResize":xe=he(Ce([""]));break;case"afterResponsive":xe=he(Ce(["isResponsive"]));break;case"afterSlideLoad":xe=he(Ce(["section","origin","destination","direction"]));break;case"onLeave":xe=he(Ce(["origin","destination","direction"]));break;case"onSlideLeave":xe=he(Ce(["section","origin","slideIndex","destination","direction"]));break}const He=this.props[X](...W);return this.log("Called callback: Returning => ",He),this.log("Updating State => ",xe),this.setState(xe),He}render(){return this.log("<== Rendering ==>"),c().createElement("div",{id:M.W1},this.props.render(this))}}re.defaultProps={sectionsColor:[]};const ie=re},882:(o,a,s)=>{s.d(a,{Z:()=>m});var l=s(497),c=s.n(l),h=s(271),f=s(542);class d extends c().Component{constructor(x){super(x),this.state={},this.log=(0,h.Z)(this.props.debug,"ReactFullpageShell"),this.log("Building component")}render(){return c().createElement("div",{id:f.W1},this.props.render(this))}}const m=d},542:(o,a,s)=>{s.d(a,{W1:()=>l,Km:()=>c,uS:()=>h,xH:()=>f});const l="fullpage",c=`#${l}`,h=".section",f=".SLIDE"},563:(o,a,s)=>{s.d(a,{Z:()=>f});var l=s(645),c=s.n(l),h=c()(function(d){return d[1]});h.push([o.id,`/*!\r
 * fullPage 4.0.20\r
 * https://github.com/alvarotrigo/fullPage.js\r
 *\r
 * @license GPLv3 for open source use only\r
 * or Fullpage Commercial License for commercial use\r
 * http://alvarotrigo.com/fullPage/pricing/\r
 *\r
 * Copyright (C) 2021 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r
 */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;height:100%;display:block}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-table{display:flex;flex-direction:column;justify-content:center;width:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;margin-top:-38px;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.fp-prev{left:15px}.fp-next{right:15px}.fp-arrow{width:0;height:0;border-style:solid}.fp-arrow.fp-prev{border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-arrow.fp-next{border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translate3d(0,0,0);-ms-transform:translate3d(0,0,0);transform:translate3d(0,0,0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li a.active span,#fp-nav ul li:hover a.active span,.fp-slidesNav ul li a.active span,.fp-slidesNav ul li:hover a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav ul li:hover .fp-tooltip,#fp-nav.fp-show-active a.active+.fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height .fp-slide,.fp-auto-height.fp-section{height:auto!important}.fp-responsive .fp-is-overflow.fp-section{height:auto!important}.fp-scrollable .fp-section,.fp-scrollable .fp-slide,.fp-scrollable.fp-responsive .fp-is-overflow.fp-section{height:100vh;height:calc(var(--vh,1vh) * 100)}.fp-scrollable .fp-section:not(.fp-auto-height):not([data-percentage]),.fp-scrollable .fp-slide:not(.fp-auto-height):not([data-percentage]),.fp-scrollable.fp-responsive .fp-is-overflow.fp-section:not(.fp-auto-height):not([data-percentage]){min-height:100vh;min-height:calc(var(--vh,1vh) * 100)}.fp-overflow{justify-content:flex-start;max-height:100vh}.fp-scrollable .fp-auto-height .fp-overflow{max-height:none}.fp-is-overflow .fp-overflow.fp-auto-height,.fp-is-overflow .fp-overflow.fp-auto-height-responsive,.fp-is-overflow>.fp-overflow{overflow-y:auto}.fp-overflow{outline:0}.fp-overflow.fp-table{display:block}.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive.fp-section{height:auto!important;min-height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}.fp-scroll-mac .fp-overflow::-webkit-scrollbar{background-color:transparent;width:9px}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-track{background-color:transparent}.fp-scroll-mac .fp-overflow::-webkit-scrollbar-thumb{background-color:rgba(0,0,0,.4);border-radius:16px;border:4px solid transparent}.fp-warning,.fp-watermark{z-index:9999999;position:absolute;bottom:0}.fp-warning,.fp-watermark a{text-decoration:none;color:#000;background:rgba(255,255,255,.6);padding:5px 8px;font-size:14px;font-family:arial;color:#000;display:inline-block;border-radius:3px;margin:12px}.fp-noscroll .fp-overflow{overflow:hidden}\r
`,""]);const f=h},645:o=>{o.exports=function(a){var s=[];return s.toString=function(){return this.map(function(c){var h=a(c);return c[2]?"@media ".concat(c[2]," {").concat(h,"}"):h}).join("")},s.i=function(l,c,h){typeof l=="string"&&(l=[[null,l,""]]);var f={};if(h)for(var d=0;d<this.length;d++){var m=this[d][0];m!=null&&(f[m]=!0)}for(var v=0;v<l.length;v++){var x=[].concat(l[v]);h&&f[x[0]]||(c&&(x[2]?x[2]="".concat(c," and ").concat(x[2]):x[2]=c),s.push(x))}},s}},933:function(o){/*!
* fullPage 4.0.20
* https://github.com/alvarotrigo/fullPage.js
*
* @license GPLv3 for open source use only
* or Fullpage Commercial License for commercial use
* http://alvarotrigo.com/fullPage/pricing/
*
* Copyright (C) 2018 http://alvarotrigo.com/fullPage/ - A project by Alvaro Trigo
*/(function(a,s){o.exports=s()})(this,function(){var a,s,l,c;Array.prototype.find||Object.defineProperty(Array.prototype,"find",{value:function(u){if(this==null)throw new TypeError('"this" is null or not defined');var p=Object(this),y=p.length>>>0;if(typeof u!="function")throw new TypeError("predicate must be a function");for(var w=arguments[1],I=0;I<y;){var oe=p[I];if(u.call(w,oe,I,p))return oe;I++}}}),Array.from||(Array.from=(a=Object.prototype.toString,s=function(u){return typeof u=="function"||a.call(u)==="[object Function]"},l=Math.pow(2,53)-1,c=function(u){var p=function(y){var w=Number(y);return isNaN(w)?0:w!==0&&isFinite(w)?(w>0?1:-1)*Math.floor(Math.abs(w)):w}(u);return Math.min(Math.max(p,0),l)},function(u){var p=this,y=Object(u);if(u==null)throw new TypeError("Array.from requires an array-like object - not null or undefined");var w,I=arguments.length>1?arguments[1]:void 0;if(I!==void 0){if(!s(I))throw new TypeError("Array.from: when provided, the second argument must be a function");arguments.length>2&&(w=arguments[2])}for(var oe,ne=c(y.length),Re=s(p)?Object(new p(ne)):new Array(ne),be=0;be<ne;)oe=y[be],Re[be]=I?w===void 0?I(oe,be):I.call(w,oe,be):oe,be+=1;return Re.length=ne,Re}));var h=window,f=document,d=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),m=/(Mac|iPhone|iPod|iPad)/i.test(h.navigator.userAgent),v="ontouchstart"in h||navigator.msMaxTouchPoints>0||navigator.maxTouchPoints,x=!!window.MSInputMethodContext&&!!document.documentMode,g={test:{},shared:{}};function _(u,p){h.console&&h.console[u]&&h.console[u]("fullPage: "+p)}function A(u){return h.getComputedStyle(u).display!=="none"}function b(u){return Array.from(u).filter(function(p){return A(p)})}function S(u,p){return(p=arguments.length>1?p:document)?p.querySelectorAll(u):null}function C(u){u=u||{};for(var p=1,y=arguments.length;p<y;++p){var w=arguments[p];if(w)for(var I in w)w.hasOwnProperty(I)&&I!="__proto__"&&I!="constructor"&&(Object.prototype.toString.call(w[I])!=="[object Object]"?u[I]=w[I]:u[I]=C(u[I],w[I]))}return u}function D(u,p){return u!=null&&u.classList.contains(p)}function R(){return"innerHeight"in h?h.innerHeight:f.documentElement.offsetHeight}function Z(){return h.innerWidth}function M(u,p){var y;for(y in u=B(u),p)if(p.hasOwnProperty(y)&&y!==null)for(var w=0;w<u.length;w++)u[w].style[y]=p[y];return u}function L(u,p){if(!u)return null;if(p==null)return u.previousElementSibling;var y=L(u);return y&&Le(y,p)?y:null}function G(u,p){if(!u)return null;if(p==null)return u.nextElementSibling;var y=G(u);return y&&Le(y,p)?y:null}function se(u){return u[u.length-1]}function ae(u,p){u=re(u)?u[0]:u;for(var y=p!=null?S(p,u.parentNode):u.parentNode.childNodes,w=0,I=0;I<y.length;I++){if(y[I]==u)return w;y[I].nodeType==1&&w++}return-1}function B(u){return re(u)?u:[u]}function te(u){u=B(u);for(var p=0;p<u.length;p++)u[p].style.display="none";return u}function ue(u){u=B(u);for(var p=0;p<u.length;p++)u[p].style.display="block";return u}function re(u){return Object.prototype.toString.call(u)==="[object Array]"||Object.prototype.toString.call(u)==="[object NodeList]"}function ie(u,p){u=B(u);for(var y=0;y<u.length;y++)u[y].classList.add(p);return u}function q(u,p){u=B(u);for(var y=p.split(" "),w=0;w<y.length;w++){p=y[w];for(var I=0;I<u.length;I++)u[I].classList.remove(p)}return u}function X(u,p){p.appendChild(u)}function O(u,p,y){var w;p=p||f.createElement("div");for(var I=0;I<u.length;I++){var oe=u[I];(y&&!I||!y)&&(w=p.cloneNode(!0),oe.parentNode.insertBefore(w,oe)),w.appendChild(oe)}return u}function W(u,p){O(u,p,!0)}function ye(u,p){for(typeof p=="string"&&(p=dt(p)),u.appendChild(p);u.firstChild!==p;)p.appendChild(u.firstChild)}function xe(u){for(var p=f.createDocumentFragment();u.firstChild;)p.appendChild(u.firstChild);u.parentNode.replaceChild(p,u)}function he(u,p){return u&&u.nodeType===1?Le(u,p)?u:he(u.parentNode,p):null}function Ce(u,p){Fe(u,u.nextSibling,p)}function He(u,p){Fe(u,u,p)}function Fe(u,p,y){re(y)||(typeof y=="string"&&(y=dt(y)),y=[y]);for(var w=0;w<y.length;w++)u.parentNode.insertBefore(y[w],p)}function Ie(){var u=f.documentElement;return(h.pageYOffset||u.scrollTop)-(u.clientTop||0)}function ct(u){return Array.prototype.filter.call(u.parentNode.children,function(p){return p!==u})}function Ue(u){u.preventDefault()}function k(u,p){return u.getAttribute(p)}function Mt(u,p,y){f.addEventListener(u,p,y==="undefined"?null:y)}function Pe(u,p,y){h.addEventListener(u,p,y==="undefined"?null:y)}function ze(u,p,y){f.removeEventListener(u,p,y==="undefined"?null:y)}function We(u,p,y){h.removeEventListener(u,p,y==="undefined"?null:y)}function Je(u){if(typeof u=="function")return!0;var p=Object.prototype.toString.call(u);return p==="[object Function]"||p==="[object GeneratorFunction]"}function Be(u,p,y){var w;y=y===void 0?{}:y,typeof h.CustomEvent=="function"?w=new CustomEvent(p,{detail:y}):(w=f.createEvent("CustomEvent")).initCustomEvent(p,!0,!0,y),u.dispatchEvent(w)}function Le(u,p){return(u.matches||u.t||u.msMatchesSelector||u.mozMatchesSelector||u.webkitMatchesSelector||u.oMatchesSelector).call(u,p)}function rt(u,p){if(typeof p=="boolean")for(var y=0;y<u.length;y++)u[y].style.display=p?"block":"none";return u}function dt(u){var p=f.createElement("div");return p.innerHTML=u.trim(),p.firstChild}function vt(u){u=B(u);for(var p=0;p<u.length;p++){var y=u[p];y&&y.parentElement&&y.parentNode.removeChild(y)}}function P(u,p){Array.prototype.filter.call(u,p)}function E(u,p,y){for(var w=u[y],I=[];w;)(Le(w,p)||p==null)&&I.push(w),w=w[y];return I}function Y(u,p){return E(u,p,"nextElementSibling")}function ve(u,p){return E(u,p,"previousElementSibling")}function pe(u){return Object.keys(u).map(function(p){return u[p]})}function me(u){return u[u.length-1]}function De(u,p){for(var y=0,w=u.slice(Math.max(u.length-p,1)),I=0;I<w.length;I++)y+=w[I];return Math.ceil(y/p)}function Me(u,p){u.setAttribute(p,k(u,"data-"+p)),u.removeAttribute("data-"+p)}function we(u,p){var y=[u];do u=u.parentNode,y.push(u);while(!Le(u,p));return y}function U(){var u=f.activeElement;return Le(u,"textarea")||Le(u,"input")||Le(u,"select")||k(u,"contentEditable")=="true"||k(u,"contentEditable")==""}h.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(u,p){p=p||window;for(var y=0;y<this.length;y++)u.call(p,this[y],y,this)}),typeof Object.assign!="function"&&Object.defineProperty(Object,"assign",{value:function(u,p){if(u==null)throw new TypeError("Cannot convert undefined or null to object");for(var y=Object(u),w=1;w<arguments.length;w++){var I=arguments[w];if(I!=null)for(var oe in I)Object.prototype.hasOwnProperty.call(I,oe)&&(y[oe]=I[oe])}return y},writable:!0,i:!0}),window.fp_utils={$:S,deepExtend:C,hasClass:D,getWindowHeight:R,css:M,prev:L,next:G,last:se,index:ae,getList:B,hide:te,show:ue,isArrayOrList:re,addClass:ie,removeClass:q,appendTo:X,wrap:O,wrapAll:W,wrapInner:ye,unwrap:xe,closest:he,after:Ce,before:He,insertBefore:Fe,getScrollTop:Ie,siblings:ct,preventDefault:Ue,isFunction:Je,trigger:Be,matches:Le,toggle:rt,createElementFromHTML:dt,remove:vt,filter:P,untilAll:E,nextAll:Y,prevAll:ve,showError:_};var Se=Object.freeze({__proto__:null,showError:_,isVisible:A,getVisible:b,$:S,deepExtend:C,hasClass:D,getWindowHeight:R,o:Z,css:M,prev:L,next:G,last:se,index:ae,getList:B,hide:te,show:ue,isArrayOrList:re,addClass:ie,removeClass:q,appendTo:X,wrap:O,wrapAll:W,wrapInner:ye,unwrap:xe,closest:he,after:Ce,before:He,insertBefore:Fe,getScrollTop:Ie,siblings:ct,preventDefault:Ue,l:k,u:Mt,v:Pe,p:ze,h:We,isFunction:Je,trigger:Be,matches:Le,toggle:rt,createElementFromHTML:dt,remove:vt,filter:P,untilAll:E,nextAll:Y,prevAll:ve,toArray:pe,g:me,S:De,M:Me,T:we,A:U});function fe(u){return fe=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(p){return typeof p}:function(p){return p&&typeof Symbol=="function"&&p.constructor===Symbol&&p!==Symbol.prototype?"symbol":typeof p},fe(u)}var le={O:{},R:function(u,p){var y=this;return fe(this.O[u])!=="object"&&(this.O[u]=[]),this.O[u].push(p),function(){return y.removeListener(u,p)}},removeListener:function(u,p){if(fe(this.O[u])==="object"){var y=this.O[u].indexOf(p);y>-1&&this.O[u].splice(y,1)}},L:function(u){for(var p=this,y=arguments.length,w=new Array(y>1?y-1:0),I=1;I<y;I++)w[I-1]=arguments[I];fe(this.O[u])==="object"&&this.O[u].forEach(function(oe){return oe.apply(p,w)})},once:function(u,p){var y=this,w=this.R(u,function(){w();for(var I=arguments.length,oe=new Array(I),ne=0;ne<I;ne++)oe[ne]=arguments[ne];p.apply(y,oe)})}},z={j:0,D:0,slides:[],N:[],P:null,H:null,C:!1,I:!1,W:!1,F:!1,V:!1,Z:void 0,B:void 0,G:!1,canScroll:!0,Y:"none",U:"none",X:!1,_:!1,J:!0,K:0,q:R(),nn:!1,tn:{}};function ce(u){Object.assign(z,u)}function $(){return z}h.state=z;var Ae="onAfterRenderNoAnchor",et="onClickOrTouch",F="moveSlideLeft",Ee="moveSlideRight",ge="onInitialise",J="bindEvents",de="onDestroy",ke="contentChanged",it="onScrollOverflowScrolled",Et="onScrollPageAndSlide",jt="onKeyDown",pt="onMenuClick",Ut="scrollPage",an="landscapeScroll",no="scrollBeyondFullpage",ts="onPerformMovement",wi="onSlideLeave",io="onLeave",ci="afterSectionLoads",ir="afterSlideLoads";function ro(u){le.L(et,{e:u,target:u.target})}function Va(){["click","touchstart"].forEach(function(u){ze(u,ro,{passive:!1})})}function Wa(){ce({J:!0})}le.R(J,function(){["click","touchstart"].forEach(function(u){Mt(u,ro,{passive:!1})}),Pe("focus",Wa),le.R(de,Va)});var oo="fullpage-wrapper",T="."+oo,H="fp-responsive",K="fp-notransition",Q="fp-destroyed",ee="fp-enabled",_e="active",Oe=".active",Ge="fp-completely",qe="fp-section",Xe="."+qe,Qe=".fp-tableCell",Ye="#fp-nav",xt="fp-slide",zt="."+xt,wt=".fp-slide.active",en="fp-slides",ut=".fp-slides",tt="fp-slidesContainer",Xn="."+tt,At="fp-table",tn="fp-overflow",ui="."+tn,yn="fp-is-overflow",Ai=".fp-slidesNav",It=".fp-slidesNav a",Fn="fp-controlArrow",Ri="."+Fn,Wt="fp-prev",Ci=".fp-controlArrow.fp-prev",ns=".fp-controlArrow.fp-next",Pi={menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,licenseKey:"",credits:{enabled:!0,label:"Made with fullPage.js",position:"right"},css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,en:600,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!0,scrollOverflowReset:!1,touchSensitivity:5,touchWrapper:null,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,allowCorrectDirection:!1,scrollOverflowMacStyle:!0,controlArrows:!0,controlArrowsHTML:['<div class="fp-arrow"></div>','<div class="fp-arrow"></div>'],controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",afterLoad:null,beforeLeave:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,onScrollOverflow:null,lazyLoading:!0,observer:!0},so=null,Au=!1,Xa=C({},Pi),is=null;function Ve(u){return so}function N(){return is||Pi}function rr(){return Xa}function rs(u,p,y){is[u]=p,y!=="internal"&&(Xa[u]=p)}function Ru(){if(!N().anchors.length){var u=S(N().sectionSelector.split(",").join("[data-anchor],")+"[data-anchor]",so);u.length&&u.length===S(N().sectionSelector,so).length&&(Au=!0,u.forEach(function(y){N().anchors.push(k(y,"data-anchor").toString())}))}if(!N().navigationTooltips.length){var p=S(N().sectionSelector.split(",").join("[data-tooltip],")+"[data-tooltip]",so);p.length&&p.forEach(function(y){N().navigationTooltips.push(k(y,"data-tooltip").toString())})}}function Cu(u){return window["fp_"+u+"Extension"]!==void 0}function Rt(u){var p=N();return p[u]!==null&&Object.prototype.toString.call(p[u])==="[object Array]"?p[u].length&&g[u]:p[u]&&g[u]}function $e(u,p,y){if(Rt(u))return Je(g[u][p])?g[u][p](y):g[u][p]}function os(){return $e("dragAndMove","isAnimating")}function Pu(){return $e("dragAndMove","isGrabbing")}function qa(u){if(N().offsetSections&&g.offsetSections){var p=$e("offsetSections","getWindowHeight",u);return p!==""?Math.round(p)+"px":p}return R()+"px"}function Lu(u,p){u.insertBefore(p,u.firstChild)}function Xt(u){var p="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function y(I){var oe,ne,Re,be,Ze,at,Ke="",ht=0;for(I=I.replace(/[^A-Za-z0-9+/=]/g,"");ht<I.length;)oe=p.indexOf(I.charAt(ht++))<<2|(be=p.indexOf(I.charAt(ht++)))>>4,ne=(15&be)<<4|(Ze=p.indexOf(I.charAt(ht++)))>>2,Re=(3&Ze)<<6|(at=p.indexOf(I.charAt(ht++))),Ke+=String.fromCharCode(oe),Ze!=64&&(Ke+=String.fromCharCode(ne)),at!=64&&(Ke+=String.fromCharCode(Re));return Ke=function(mt){for(var Ft,Pt="",bt=0,Tt=0,lt=0;bt<mt.length;)(Tt=mt.charCodeAt(bt))<128?(Pt+=String.fromCharCode(Tt),bt++):Tt>191&&Tt<224?(lt=mt.charCodeAt(bt+1),Pt+=String.fromCharCode((31&Tt)<<6|63&lt),bt+=2):(lt=mt.charCodeAt(bt+1),Ft=mt.charCodeAt(bt+2),Pt+=String.fromCharCode((15&Tt)<<12|(63&lt)<<6|63&Ft),bt+=3);return Pt}(Ke),Ke}function w(I){return I.slice(3).slice(0,-3)}return function(I){var oe=I.split("_");if(oe.length>1){var ne=oe[1];return y(I.replace(w(oe[1]),"").split("_")[0].slice(2).slice(0,-2))+"_"+y(ne.slice(3).slice(0,-3))}return w(I)}(y(u))}h.fp_utils=h.fp_utils||{},Object.assign(h.fp_utils,{prependTo:Lu,toggleClass:function(u,p,y){if(u.classList&&y==null)u.classList.toggle(p);else{var w=D(u,p);w&&y==null||!y?q(u,p):(!w&&y==null||y)&&ie(u,p)}}});var Du=function(u){this.anchor=u.anchor,this.item=u.item,this.index=u.index(),this.isLast=this.index===u.item.parentElement.querySelectorAll(u.selector).length-1,this.isFirst=!this.index,this.isActive=u.isActive},Sn=function(u,p){this.parent=this.parent||null,this.selector=p,this.anchor=k(u,"data-anchor")||N().anchors[ae(u,N().sectionSelector)],this.item=u,this.isVisible=A(u),this.isActive=D(u,_e),this.on=D(u,tn)||S(ui,u)[0]!=null,this.rn=p===N().sectionSelector,this.container=he(u,Xn)||he(u,T),this.index=function(){return this.siblings().indexOf(this)}};function Ya(u){return u.map(function(p){return p.item})}function $a(u,p){return u.find(function(y){return y.item===p})}Sn.prototype.siblings=function(){return this.rn?this.isVisible?z.N:z.an:this.parent?this.parent.slides:0},Sn.prototype.prev=function(){var u=this.siblings(),p=(this.rn?u.indexOf(this):this.parent.slides.indexOf(this))-1;return p>=0?u[p]:null},Sn.prototype.next=function(){var u=this.siblings(),p=(this.rn?u.indexOf(this):this.parent.slides.indexOf(this))+1;return p<u.length?u[p]:null},Sn.prototype.prevPanel=function(){return this===this.prev()?this.parent?this.parent.prev():null:this.prev()||(this.parent?this.parent.prev():null)},Sn.prototype.nextPanel=function(){return this===this.next()?this.parent?this.parent.next():null:this.next()||(this.parent?this.parent.next():null)},Sn.prototype.ln=function(){return this.rn?z.N:z.un};var Nu,Uu=function(u){Du.call(this,u)},fg=function(u){Du.call(this,u)};function Li(u){var p=S(wt,u);return p.length&&(u=p[0]),u}function Iu(u){return u?u.activeSlide?u.activeSlide:u:null}function or(u){var p,y,w=N();return w.autoScrolling&&!w.scrollBar?(p=-u,y=S(T)[0]):(p=u,y=window),{options:p,element:y}}function Ou(u,p){!N().autoScrolling||N().scrollBar||u.self!=window&&D(u,en)?u.self!=window&&D(u,en)?u.scrollLeft=p:u.scrollTo(0,p):u.style.top=p+"px"}function ja(u){var p="transform "+N().scrollingSpeed+"ms "+N().easingcss3;return q(u,K),M(u,{"-webkit-transition":p,transition:p})}function Ka(u,p){var y=u.index(),w=ae(p,Xe);return y==w?"none":y>w?"up":"down"}function ss(u){return ie(u,K)}function Za(u){return{"-webkit-transform":u,"-moz-transform":u,"-ms-transform":u,transform:u}}function Fu(u,p){p?ja(Ve()):ss(Ve()),clearTimeout(Nu),M(Ve(),Za(u)),g.test.cn=u,Nu=setTimeout(function(){q(Ve(),K)},10)}function Di(u){var p=Math.round(u);if(N().css3&&N().autoScrolling&&!N().scrollBar)Fu("translate3d(0px, -"+p+"px, 0px)",!1);else if(N().autoScrolling&&!N().scrollBar)M(Ve(),{top:-p+"px"}),g.test.top=-p+"px";else{var y=or(p);Ou(y.element,y.options)}}function ao(u,p){p!=="internal"&&$e("fadingEffect","update",u),$e("cards","update_",u),rs("scrollingSpeed",u,p)}g.setScrollingSpeed=ao;var lo,yt=null,co=null,as=null;function ls(u,p,y,w){var I,oe=function(Ze){return Ze.self!=h&&D(Ze,en)?Ze.scrollLeft:!N().autoScrolling||N().scrollBar?Ie():Ze.offsetTop}(u),ne=p-oe,Re=!1,be=z.G;ce({G:!0}),lo&&window.cancelAnimationFrame(lo),lo=function(Ze){I||(I=Ze);var at=Math.floor(Ze-I);if(z.G){var Ke=p;y&&(Ke=h.fp_easings[N().easing](at,oe,ne,y)),at<=y&&Ou(u,Ke),at<y?window.requestAnimationFrame(lo):w===void 0||Re||(w(),ce({G:!1}),Re=!0)}else Re||be||(w(),ce({G:!1}),Re=!0)},window.requestAnimationFrame(lo)}function fi(u){return u&&!u.item?new Uu(new Ii(u)):u?new Uu(u):null}function Ja(u){return u?new fg(u):null}function Bn(u,p){var y=function(w,I){var oe={afterRender:function(){return{section:fi($().P),sn:Ja($().P.activeSlide)}},onLeave:function(){return{origin:fi(I.items.origin),destination:fi(I.items.destination),direction:I.direction,trigger:$().H}},afterLoad:function(){return oe.onLeave()},afterSlideLoad:function(){return{section:fi(I.items.section),origin:fi(I.items.origin),destination:fi(I.items.destination),direction:I.direction,trigger:$().H}},onSlideLeave:function(){return oe.afterSlideLoad()},beforeLeave:function(){return oe.onLeave()},onScrollOverflow:function(){return{section:fi($().P),sn:Ja($().P.activeSlide),position:I.position,direction:I.direction}}};return oe[w]()}(u,p);return Be(Ve(),u,y),N()[u].apply(y[Object.keys(y)[0]],pe(y))!==!1}function cs(u){var p=Li(u);S("video, audio",p).forEach(function(y){y.hasAttribute("data-autoplay")&&typeof y.play=="function"&&y.play()}),S('iframe[src*="youtube.com/embed/"]',p).forEach(function(y){y.hasAttribute("data-autoplay")&&Bu(y),y.onload=function(){y.hasAttribute("data-autoplay")&&Bu(y)}})}function Bu(u){u.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function Qa(u){var p=Li(u);S("video, audio",p).forEach(function(y){y.hasAttribute("data-keepplaying")||typeof y.pause!="function"||y.pause()}),S('iframe[src*="youtube.com/embed/"]',p).forEach(function(y){/youtube\.com\/embed\//.test(k(y,"src"))&&!y.hasAttribute("data-keepplaying")&&y.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function sr(u){N().lazyLoading&&S("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",Li(u)).forEach(function(p){if(["src","srcset"].forEach(function(w){var I=k(p,"data-"+w);I!=null&&I&&(Me(p,w),p.addEventListener("load",function(){}))}),Le(p,"source")){var y=he(p,"video, audio");y&&(y.load(),y.onloadeddata=function(){})}})}function ku(){var u=$().P.item,p=$().P.activeSlide,y=zu(u),w=String(y);p&&(w=w+"-"+zu(p.item)),w=w.replace("/","-").replace("#","");var I=new RegExp("\\b\\s?fp-viewing-[^\\s]+\\b","g");yt.className=yt.className.replace(I,""),ie(yt,"fp-viewing-"+w)}function zu(u){if(!u)return null;var p=k(u,"data-anchor"),y=ae(u);return p==null&&(p=y),p}function el(u,p,y){var w="";N().anchors.length&&!N().lockAnchors&&(u?(y!=null&&(w=y),p==null&&(p=u),ce({B:p}),tl(w+"/"+p)):(u!=null&&ce({B:p}),tl(y))),ku()}function tl(u){if(N().recordHistory)location.hash=u;else if(d||v)h.history.replaceState(void 0,void 0,"#"+u);else{var p=h.location.href.split("#")[0];h.location.replace(p+"#"+u)}}function Hu(u,p,y){var w=p==="Section"?N().anchors[u]:k(y,"data-anchor");return encodeURI(N().navigationTooltips[u]||w||p+" "+(u+1))}function hg(u){u.cancelable&&Ue(u),ce({H:"horizontalNav"});var p=he(this,Xe),y=S(ut,he(this,Xe))[0],w=$a($().N,p).slides[ae(he(this,"li"))];le.L(an,{slides:y,destination:w.item})}function Gu(u,p){N().slidesNavigation&&u!=null&&(q(S(Oe,u),_e),ie(S("a",S("li",u)[p]),_e))}var us,Ni={};function fs(u,p,y){p!=="all"?Ni[y][p]=u:Object.keys(Ni[y]).forEach(function(w){Ni[y][w]=u})}function Ot(){return Ni}function dg(){var u=he(this,Xe);D(this,Wt)?Ot().m.left&&(ce({H:"slideArrow"}),le.L(F,{section:u})):Ot().m.right&&(ce({H:"slideArrow"}),le.L(Ee,{section:u}))}function Vu(u){!N().loopHorizontal&&N().controlArrows&&(rt(S(Ci,u.section),u.slideIndex!==0),rt(S(ns,u.section),G(u.destiny)!=null))}function pg(){clearTimeout(us),ce({W:!1})}function Ui(u,p,y){var w=he(u,Xe),I=$().N.filter(function(Re){return Re.item==w})[0],oe=I.slides.filter(function(Re){return Re.item==p})[0],ne={slides:u,destiny:p,direction:y,destinyPos:{left:p.offsetLeft},slideIndex:oe.index(),section:w,sectionIndex:I.index(),anchorLink:I.anchor,slidesNav:S(Ai,w)[0],slideAnchor:oe.anchor,prevSlide:I.activeSlide.item,prevSlideIndex:I.activeSlide.index(),items:{section:I,origin:I.activeSlide,destination:oe},localIsResizing:z.F};ne.xMovement=Xu(ne.prevSlideIndex,ne.slideIndex),ne.direction=ne.direction?ne.direction:ne.xMovement,ne.localIsResizing||ce({canScroll:!1}),$e("parallax","applyHorizontal",ne),$e("cards","apply",ne),$e("dropEffect","apply",ne),$e("waterEffect","apply",ne),N().onSlideLeave&&!ne.localIsResizing&&ne.xMovement!=="none"&&Je(N().onSlideLeave)&&Bn("onSlideLeave",ne)===!1?ce({W:!1}):(Rt("dropEffect")&&N().dropEffect||(ie(p,_e),q(ct(p),_e)),kn(),ne.localIsResizing||(Qa(ne.prevSlide),sr(p)),Vu(ne),I.isActive&&!ne.localIsResizing&&el(ne.slideIndex,ne.slideAnchor,ne.anchorLink),$e("continuousHorizontal","apply",ne),le.L(wi,ne),Pu()?nl(ne):Wu(u,ne,!0),N().interlockedSlides&&g.interlockedSlides&&(Rt("continuousHorizontal")&&y!==void 0&&y!==ne.xMovement||$e("interlockedSlides","apply",ne)))}function Wu(u,p,y){var w=p.destinyPos;if(Gu(p.slidesNav,p.slideIndex),ce({scrollX:Math.round(w.left)}),N().css3){var I="translate3d(-"+Math.round(w.left)+"px, 0px, 0px)";g.test.dn[p.sectionIndex]=I,Rt("dragAndMove")&&p.vn!==void 0||ja(S(Xn,u)),M(S(Xn,u),Za(I)),Rt("interlockedSlides")||clearTimeout(us),us=setTimeout(function(){y&&nl(p)},N().scrollingSpeed)}else g.test.left[p.sectionIndex]=Math.round(w.left),ls(u,Math.round(w.left),N().scrollingSpeed,function(){y&&nl(p)})}function Xu(u,p){return u==p?"none":u>p?"left":"right"}function mg(){clearTimeout(us)}function nl(u){$e("continuousHorizontal","afterSlideLoads",u),$e("dragAndMove","afterSlideLoads",u),u.localIsResizing||($e("parallax","afterSlideLoads"),$e("scrollOverflowReset","setPrevious",u.prevSlide),$e("scrollOverflowReset","reset"),Je(N().afterSlideLoad)&&Bn("afterSlideLoad",u),ce({canScroll:!0}),cs(u.destiny),le.L(ir,u)),ce({W:!1}),$e("interlockedSlides","interlockedSlides",u)}function uo(u,p){ao(0,"internal"),p!==void 0&&ce({F:!0}),Ui(he(u,ut),u),p!==void 0&&ce({F:!1}),ao(rr().scrollingSpeed,"internal")}function il(u,p){rs("recordHistory",u,p)}function ar(u,p){u||Di(0),rs("autoScrolling",u,p);var y=$().P.item;if(N().autoScrolling&&!N().scrollBar)M(as,{overflow:"hidden",height:"100%"}),q(yt,"fp-scrollable"),il(rr().recordHistory,"internal"),M(Ve(),{"-ms-touch-action":"none","touch-action":"none"}),y!=null&&Di(y.offsetTop);else if(M(as,{overflow:"visible",height:"initial"}),ie(yt,"fp-scrollable"),il(!!N().autoScrolling&&rr().recordHistory,"internal"),M(Ve(),{"-ms-touch-action":"","touch-action":""}),ss(Ve()),y!=null){var w=or(y.offsetTop);w.element.scrollTo(0,w.options)}Be(Ve(),"setAutoScrolling",u)}function rl(){for(var u=S(wt),p=0;p<u.length;p++)uo(u[p],"internal")}function qu(){var u=S(".fp-auto-height")[0]||hl()&&S(".fp-auto-height-responsive")[0];N().lazyLoading&&u&&S(".fp-section:not(.active)").forEach(function(p){var y,w,I,oe,ne;w=(y=p.getBoundingClientRect()).top,I=y.bottom,oe=w+2<z.q&&w>0,ne=I>2&&I<z.q,(oe||ne)&&sr(p)})}function gg(){Be(L(this),"click")}function Yu(){vt(S(Ye));var u=f.createElement("div");u.setAttribute("id","fp-nav");var p=f.createElement("ul");u.appendChild(p),X(u,yt);var y=S(Ye)[0];ie(y,"fp-"+N().navigationPosition),N().showActiveTooltip&&ie(y,"fp-show-active");for(var w="",I=0;I<$().N.length;I++){var oe=$().N[I],ne="";N().anchors.length&&(ne=oe.anchor),w+='<li><a href="#'+encodeURI(ne)+'"><span class="fp-sr-only">'+Hu(oe.index(),"Section")+"</span><span></span></a>";var Re=N().navigationTooltips[oe.index()];Re!==void 0&&Re!==""&&(w+='<div class="fp-tooltip fp-'+N().navigationPosition+'">'+Re+"</div>"),w+="</li>"}S("ul",y)[0].innerHTML=w;var be=S("li",S(Ye)[0])[$().P.index()];ie(S("a",be),_e)}function _g(u){u.preventDefault&&Ue(u),ce({H:"verticalNav"});var p=ae(he(this,"#fp-nav li"));le.L(Ut,{destination:$().N[p]})}function ol(u,p){var y;y=u,N().menu&&N().menu.length&&S(N().menu).forEach(function(w){w!=null&&(q(S(Oe,w),_e),ie(S('[data-menuanchor="'+y+'"]',w),_e))}),function(w,I){var oe=S(Ye)[0];N().navigation&&oe!=null&&oe.style.display!=="none"&&(q(S(Oe,oe),_e),ie(w?S('a[href="#'+w+'"]',oe):S("a",S("li",oe)[I]),_e))}(u,p)}Ni.m={up:!0,down:!0,left:!0,right:!0},Ni.k=C({},Ni.m),le.R(et,function(u){var p=u.target;(Le(p,Ri)||he(p,Ri))&&dg.call(p,u)}),g.landscapeScroll=Ui,le.R(J,function(){le.R(ts,pg)}),g.setRecordHistory=il,g.setAutoScrolling=ar,g.test.setAutoScrolling=ar,new Date().getTime();var sl,al,ll,cl,fo,ul,vg=(al=!0,ll=new Date().getTime(),cl=!h.fullpage_api,function(u,p){var y=new Date().getTime(),w=u==="wheel"?N().scrollingSpeed:100;return al=cl||y-ll>=w,cl=!h.fullpage_api,al&&(sl=p(),ll=y),sl===void 0||sl});function $u(u,p){if(Je(N().beforeLeave))return vg($().H,function(){return Bn(u,p)})}function lr(u,p,y){var w=u.item;if(w!=null){var I,oe,ne={element:w,callback:p,isMovementUp:y,dtop:ju(w),yMovement:Ka($().P,w),anchorLink:u.anchor,sectionIndex:u.index(),activeSlide:u.activeSlide?u.activeSlide.item:null,leavingSection:$().P.index()+1,localIsResizing:z.F,items:{origin:$().P,destination:u},direction:null};if(!($().P.item==w&&!z.F||N().scrollBar&&Ie()===ne.dtop&&!D(w,"fp-auto-height"))){if(ne.activeSlide!=null&&(I=k(ne.activeSlide,"data-anchor"),oe=ae(ne.activeSlide,null)),!ne.localIsResizing){var Re=ne.yMovement;if(y!==void 0&&(Re=y?"up":"down"),ne.direction=Re,Cu("dropEffect")&&g.dropEffect.onLeave_(ne),Cu("waterEffect")&&g.waterEffect.onLeave_(ne),Je(N().beforeLeave)&&$u("beforeLeave",ne)===!1||Je(N().onLeave)&&!Bn("onLeave",ne))return}$e("parallax","apply",ne),$e("cards","apply",ne),$e("dropEffect","apply",ne),$e("waterEffect","apply",ne),N().autoScrolling&&N().continuousVertical&&ne.isMovementUp!==void 0&&(!ne.isMovementUp&&ne.yMovement=="up"||ne.isMovementUp&&ne.yMovement=="down")&&(ne=function(be){ce({nn:!0});var Ze=$().P.item;return be.isMovementUp?He(Ze,Y(Ze,Xe)):Ce(Ze,ve(Ze,Xe).reverse()),Di($().P.item.offsetTop),rl(),be.pn=Ze,be.dtop=be.element.offsetTop,be.yMovement=Ka($().P,be.element),be.leavingSection=be.items.origin.index()+1,be.sectionIndex=be.items.destination.index(),Be(Ve(),"onContinuousVertical",be),be}(ne)),$e("scrollOverflowReset","setPrevious",$().P.item),ne.localIsResizing||Qa($().P.item),Rt("dropEffect")&&N().dropEffect||(ie(w,_e),q(ct(w),_e)),kn(),sr(w),ce({canScroll:g.test.hn}),el(oe,I,ne.anchorLink),le.L(io,ne),function(be){var Ze=N().scrollingSpeed<700,at=Ze?700:N().scrollingSpeed;if(ce({Y:"none",scrollY:Math.round(be.dtop)}),le.L(ts),N().css3&&N().autoScrolling&&!N().scrollBar)Fu("translate3d(0px, -"+Math.round(be.dtop)+"px, 0px)",!0),Rt("waterEffect")&&rl(),N().scrollingSpeed?(clearTimeout(fo),fo=setTimeout(function(){hs(be),ce({canScroll:!Ze||g.test.hn})},N().scrollingSpeed)):hs(be);else{var Ke=or(be.dtop);g.test.top=-be.dtop+"px",clearTimeout(fo),ls(Ke.element,Ke.options,N().scrollingSpeed,function(){N().scrollBar?fo=setTimeout(function(){hs(be)},30):(hs(be),ce({canScroll:!Ze||g.test.hn}))})}Ze&&(clearTimeout(ul),ul=setTimeout(function(){ce({canScroll:!0})},at))}(ne),ce({Z:ne.anchorLink}),ol(ne.anchorLink,function(be){return be.pn!=null?be.isMovementUp?z.j-1:0:be.sectionIndex}(ne))}}}function ju(u){var p=u.offsetHeight,y=u.offsetTop,w=y,I=Rt("dragAndMove")&&$e("dragAndMove","isGrabbing")?$e("dragAndMove","isScrollingDown"):y>z.K,oe=w-R()+p,ne=N().bigSectionsDestination;return p>R()?(I||ne)&&ne!=="bottom"||(w=oe):(I||z.F&&G(u)==null)&&(w=oe),Rt("offsetSections")&&(w=g.offsetSections.getSectionPosition_(I,w,u)),ce({K:w}),w}function hs(u){ce({C:!1}),function(p){p.pn!=null&&(p.isMovementUp?He(S(Xe)[0],p.pn):Ce(S(Xe)[$().N.length-1],p.pn),Di($().P.item.offsetTop),function(){for(var y=S(wt),w=0;w<y.length;w++)uo(y[w],"internal")}(),p.sectionIndex=p.items.destination.index(),p.leavingSection=p.items.origin.index()+1,ce({nn:!1}))}(u),Je(N().afterLoad)&&!u.localIsResizing&&Bn("afterLoad",u),$e("parallax","afterLoad"),$e("waterEffect","afterLoad"),$e("dropEffect","afterLoad"),$e("scrollOverflowReset","reset"),$e("resetSliders","apply",u),kn(),u.localIsResizing||cs(u.element),ie(u.element,Ge),q(ct(u.element),Ge),qu(),ce({canScroll:!0}),le.L(ci,u),Je(u.callback)&&u.callback()}function fl(u,p){rs("fitToSection",u,p)}function Ku(){z.canScroll&&(ce({F:!0}),lr(z.P),ce({F:!1}))}function Zu(){var u=N().responsive||N().responsiveWidth,p=N().responsiveHeight,y=u&&h.innerWidth<u,w=p&&h.innerHeight<p;u&&p?ds(y||w):u?ds(y):p&&ds(w)}function ds(u){var p=hl();u?p||(ar(!1,"internal"),fl(!1,"internal"),te(S(Ye)),ie(yt,H),Je(N().afterResponsive)&&N().afterResponsive.call(Ve(),u),$e("responsiveSlides","toSections"),Be(Ve(),"afterResponsive",u)):p&&(ar(rr().autoScrolling,"internal"),fl(rr().autoScrolling,"internal"),ue(S(Ye)),q(yt,H),Je(N().afterResponsive)&&N().afterResponsive.call(Ve(),u),$e("responsiveSlides","toSlides"),Be(Ve(),"afterResponsive",u))}function hl(){return D(yt,H)}function Ju(u){N().verticalCentered&&(!N().scrollOverflow&&je.gn(u.item)||je.mn(u)||D(u.item,At)||ie(u.item,At))}g.moveTo=moveTo,g.getScrollY=function(){return z.scrollY},le.R(de,function(){clearTimeout(fo),clearTimeout(ul)}),g.setFitToSection=fl,g.fitToSection=Ku,g.setResponsive=ds;var dl,Qu=null;function pl(u){var p=u.item,y=u.wn.length,w=u.index();!$().P&&u.isVisible&&(ie(p,_e),kn(),Qu=$().P.item),Rt("offsetSections")&&M(p,{height:qa(p)}),N().paddingTop&&M(p,{"padding-top":N().paddingTop}),N().paddingBottom&&M(p,{"padding-bottom":N().paddingBottom}),N().sectionsColor[w]!==void 0&&M(p,{"background-color":N().sectionsColor[w]}),N().anchors[w]!==void 0&&p.setAttribute("data-anchor",u.anchor),y||Ju(u)}function ef(){N().scrollOverflow&&!N().scrollBar&&(je.bn(),je.Sn())}function xg(){le.removeListener(Ae,ef),ze("keyup",je.yn)}g.getActiveSection=function(){return $().P},le.R(J,function(){le.R(Ae,ef),le.R(io,je.onLeave),le.R(wi,je.onLeave),le.R(ir,je.afterLoad),le.R(ci,je.afterLoad),le.R(de,xg),Mt("keyup",je.yn)});var ml,je={Mn:null,Tn:!0,An:!0,xn:null,On:null,kn:function(u){if(!z.canScroll)return Ue(u),!1},En:function(u){if(!U()&&N().keyboardScrolling&&[38,33,32,40,34,36,35].indexOf(u.keyCode)>-1&&!je.An)return Ue(u),!1},yn:function(){je.Tn=z.canScroll},onLeave:function(){clearTimeout(dl),je.An=!1},afterLoad:function(){je.An=!1,clearTimeout(dl),dl=setTimeout(function(){je.Tn=z.canScroll},200)},Rn:function(){f.activeElement===this.Mn&&(this.Mn.blur(),je.An=!1)},Sn:function(){if(N().scrollOverflow&&je.Tn){je.Rn();var u=je.Ln($().P.item);!u||d||v||(this.Mn=u,requestAnimationFrame(function(){u.focus(),je.An=!0})),je.Tn=!1}},bn:function(){N().scrollOverflowMacStyle&&!m&&ie(yt,"fp-scroll-mac"),$().un.forEach(function(u){if(!(u.slides&&u.slides.length||D(u.item,"fp-auto-height-responsive")&&hl())){var p,y=Li(u.item),w=je.gn(u.item),I=(p=u).rn?p:p.parent;if(x){var oe=w?"addClass":"removeClass";Se[oe](I.item,yn),Se[oe](u.item,yn)}else ie(I.item,yn),ie(u.item,yn);u.on||(je.jn(y),je.zn(y)),u.on=!0}})},zn:function(u){je.Ln(u).addEventListener("scroll",je.Dn),u.addEventListener("wheel",je.kn,{passive:!1}),u.addEventListener("keydown",je.En,{passive:!1})},jn:function(u){var p=document.createElement("div");p.className=tn,ye(u,p),p.setAttribute("tabindex","-1")},Nn:function(u){var p=S(ui,u)[0];p&&(xe(p),u.removeAttribute("tabindex"))},Ln:function(u){var p=Li(u);return S(ui,p)[0]||p},on:function(u){return D(u,tn)||S(ui,u)[0]!=null},mn:function(u){return u.rn&&u.activeSlide?u.activeSlide.on:u.on},gn:function(u){return je.Ln(u).scrollHeight>h.innerHeight},Pn:function(u,p){if(!z.canScroll)return!1;if(N().scrollBar)return!0;var y=je.Ln(p);if(!N().scrollOverflow||!D(y,tn)||D(p,"fp-noscroll")||D(Li(p),"fp-noscroll"))return!0;var w=x?1:0,I=y.scrollTop,oe=u==="up"&&I<=0,ne=u==="down"&&y.scrollHeight<=Math.ceil(y.offsetHeight+I)+w,Re=oe||ne;return Re||(this.xn=new Date().getTime()),Re},Hn:function(){this.On=new Date().getTime();var u=this.On-je.xn,p=(d||v)&&z.X,y=z._&&u>600;return p&&u>400||y},Dn:(ml=0,function(u){var p=u.target.scrollTop,y=z.Y!=="none"?z.Y:ml<p?"down":"up";ml=p,Je(N().onScrollOverflow)&&Bn("onScrollOverflow",{position:p,direction:y}),D(u.target,tn)&&z.canScroll&&je.Pn(y,u.target)&&je.Hn()&&je.gn($().P.item)&&le.L(it,{direction:y})})},gl=null,_l=null;function kn(){z.P=null,z.N.map(function(u){var p=D(u.item,_e);u.isActive=p,u.on=je.on(u.item),p&&(z.P=u),u.slides.length&&(u.activeSlide=null,u.slides.map(function(y){var w=D(y.item,_e);y.on=je.on(u.item),y.isActive=w,w&&(u.activeSlide=y)}))}),function(){var u=z.P,p=!!z.P&&z.P.slides.length,y=z.P?z.P.activeSlide:null;if(!u&&z.N.length&&!$().C){if(gl){var w=nf(gl,z.N);w&&(z.P=w,z.P.isActive=!0,ie(z.P.item,_e)),z.P&&Di(z.P.item.offsetTop)}if(p&&!y&&_l){var I=nf(_l,z.P.slides);I&&(z.P.activeSlide=I,z.P.activeSlide.isActive=!0,ie(z.P.activeSlide.item,_e)),z.P.activeSlide&&uo(z.P.activeSlide.item,"internal")}}}(),Be(Ve(),"onUpdateStateDone")}function ps(){var u=S(N().sectionSelector+", "+Xe,Ve()),p=b(u),y=Array.from(u).map(function(oe){return new Ii(oe)}),w=y.filter(function(oe){return oe.isVisible}),I=w.reduce(function(oe,ne){return oe.concat(ne.slides)},[]);gl=tf(z.P),_l=tf(z.P?z.P.activeSlide:null),z.j=p.length,z.D=w.reduce(function(oe,ne){return oe+ne.slides.length},0),z.N=w,z.an=y,z.slides=I,z.un=z.N.concat(z.slides)}function tf(u){if(!u)return null;var p=u?u.item:null,y=u.rn?z.an:z.P.Cn;if(p){var w=$a(y,p);return w?w.index():null}return null}function nf(u,p){var y,w=u-1,I=u;do{if(y=p[w]||p[I])break;w-=1,I+=1}while(w>=0||I<p.length);return y}var Ii=function(u){var p=this;[].push.call(arguments,N().sectionSelector),Sn.apply(this,arguments),this.wn=S(N().slideSelector,u),this.Cn=Array.from(this.wn).map(function(y){return new ms(y,p)}),this.slides=this.Cn.filter(function(y){return y.isVisible}),this.activeSlide=this.slides.length?this.slides.filter(function(y){return y.isActive})[0]||this.slides[0]:null};Ii.prototype=Sn.prototype,Ii.prototype.constructor=Ii;var ho,ms=function(u,p){this.parent=p,Sn.call(this,u,N().slideSelector)};function rf(){ie(S(N().sectionSelector,Ve()),qe),ie(S(N().slideSelector,Ve()),xt)}function vl(u){var p=u.slides.length,y=u.wn,w=u.slides,I=100*p,oe=100/p;if(!S(ut,u.item)[0]){var ne=f.createElement("div");ne.className=en,W(y,ne);var Re=f.createElement("div");Re.className=tt,W(y,Re)}M(S(Xn,u.item),{width:I+"%"}),p>1&&(N().controlArrows&&function(Ze){var at=Ze.item,Ke=[dt(N().controlArrowsHTML[0]),dt(N().controlArrowsHTML[1])];Ce(S(ut,at)[0],Ke),ie(Ke,Fn),ie(Ke[0],Wt),ie(Ke[1],"fp-next"),N().controlArrowColor!=="#fff"&&(M(S(ns,at),{"border-color":"transparent transparent transparent "+N().controlArrowColor}),M(S(Ci,at),{"border-color":"transparent "+N().controlArrowColor+" transparent transparent"})),N().loopHorizontal||te(S(Ci,at))}(u),N().slidesNavigation&&function(Ze){var at=Ze.item,Ke=Ze.slides.length;X(dt('<div class="fp-slidesNav"><ul></ul></div>'),at);var ht=S(Ai,at)[0];ie(ht,"fp-"+N().slidesNavPosition);for(var mt=0;mt<Ke;mt++)X(dt('<li><a href="#"><span class="fp-sr-only">'+Hu(mt,"Slide",S(zt,at)[mt])+"</span><span></span></a></li>"),S("ul",ht)[0]);M(ht,{"margin-left":"-"+ht.innerWidth/2+"px"});var Ft=Ze.activeSlide?Ze.activeSlide.index():0;ie(S("a",S("li",ht)[Ft]),_e)}(u)),w.forEach(function(Ze){M(Ze.item,{width:oe+"%"}),N().verticalCentered&&Ju(Ze)});var be=Rt("responsiveSlides")?null:u.activeSlide||null;be!=null&&z.P&&(z.P.index()!==0||z.P.index()===0&&be.index()!==0)?(uo(be.item,"internal"),ie(be.item,"fp-initial")):ie(y[0],_e)}ms.prototype=Sn.prototype,ms.prototype.constructor=Ii;var of={attributes:!1,subtree:!0,childList:!0,characterData:!0};function sf(){return $e("responsiveSlides","isResponsiveSlidesChanging")||b(S(N().slideSelector,Ve())).length!==$().D}function xl(u){var p=sf();(sf()||$e("responsiveSlides","isResponsiveSlidesChanging")||b(S(N().sectionSelector,Ve())).length!==$().j)&&!z.nn&&(N().observer&&ho&&ho.disconnect(),ps(),kn(),N().anchors=[],vt(S(Ye)),$e("responsiveSlides","isResponsiveSlidesChanging")||rf(),Ru(),N().navigation&&Yu(),p&&(vt(S(Ai)),vt(S(Ri))),$().N.forEach(function(y){y.slides.length?p&&vl(y):pl(y)})),N().observer&&ho&&S(T)[0]&&ho.observe(S(T)[0],of)}le.R(J,function(){var u,p,y;N().observer&&"MutationObserver"in window&&S(T)[0]&&(u=S(T)[0],p=of,(y=new MutationObserver(xl)).observe(u,p),ho=y),le.R(ke,xl)}),g.render=xl;var yg=function(){var u=!1;try{var p=Object.defineProperty({},"passive",{get:function(){u=!0}});Pe("testPassive",null,p),We("testPassive",null,p)}catch{}return function(){return u}}();function af(){return!!yg()&&{passive:!1}}var lf,cf,yl,hi,gs=(yl=new Date().getTime(),hi=[],{In:function(u){var p=(u=u||h.event).wheelDelta||-u.deltaY||-u.detail,y=Math.max(-1,Math.min(1,p)),w=u.wheelDeltaX!==void 0||u.deltaX!==void 0;lf=Math.abs(u.wheelDeltaX)<Math.abs(u.wheelDelta)||Math.abs(u.deltaX)<Math.abs(u.deltaY)||!w;var I=new Date().getTime();cf=y<0?"down":"up",hi.length>149&&hi.shift(),hi.push(Math.abs(p));var oe=I-yl;yl=I,oe>200&&(hi=[])},Wn:function(){var u=De(hi,10)>=De(hi,70);return!!hi.length&&u&&lf},Fn:function(){return cf}});function Sg(){var u=N().css3?Ie()+R():me($().N).item.offsetTop+me($().N).item.offsetHeight,p=or(u);g.test.top=-u+"px",ce({canScroll:!1}),ls(p.element,p.options,N().scrollingSpeed,function(){setTimeout(function(){ce({C:!0}),ce({canScroll:!0})},30)})}function Mg(){Ve().getBoundingClientRect().bottom>=0&&uf()}function uf(){var u=or(me($().N).item.offsetTop);ce({canScroll:!1}),ls(u.element,u.options,N().scrollingSpeed,function(){ce({canScroll:!0}),ce({C:!1}),ce({Vn:!1})})}var Sl,Ml,El,ff=(Sl=!1,Ml={},El={},function(u,p,y){switch(u){case"set":Ml[p]=new Date().getTime(),El[p]=y;break;case"isNewKeyframe":var w=new Date().getTime();Sl=w-Ml[p]>El[p]}return Sl});function po(){var u=$().P.next();u||!N().loopBottom&&!N().continuousVertical||(u=$().N[0]),u!=null?lr(u,null,!1):Ve().scrollHeight<yt.scrollHeight&&N().scrollBar&&N().Zn&&le.L(no)}function cr(){var u=$().P.prev();u||!N().loopTop&&!N().continuousVertical||(u=me($().N)),u!=null&&lr(u,null,!0)}g.moveSectionDown=po,g.moveSectionUp=cr;var _s=0;function hf(u){N().autoScrolling&&(z.canScroll&&(u.pageY<_s&&Ot().m.up?cr():u.pageY>_s&&Ot().m.down&&po()),_s=u.pageY)}function df(u){if(Ot().m[u]){var p=u==="down"?po:cr;Rt("scrollHorizontally")&&(p=$e("scrollHorizontally","getScrollSection",{type:u,scrollSection:p})),N().scrollOverflow&&je.mn($().P)?je.Pn(u,$().P.item)&&je.Hn()&&p():p()}}var vs,bl,ur,xs=0,mo=0,ys=0,go=0,Ss=mf(),dn={Bn:"ontouchmove"in window?"touchmove":Ss?Ss.move:null,Gn:"ontouchstart"in window?"touchstart":Ss?Ss.down:null};function _o(u){var p=he(u.target,Xe)||$().P.item,y=je.mn($().P);if(vo(u)){ce({X:!0,_:!1}),N().autoScrolling&&(y&&!z.canScroll||N().scrollBar)&&Ue(u);var w=Tl(u);ys=w.y,go=w.x;var I=Math.abs(xs-ys)>h.innerHeight/100*N().touchSensitivity,oe=Math.abs(mo-go)>Z()/100*N().touchSensitivity,ne=S(ut,p).length&&Math.abs(mo-go)>Math.abs(xs-ys),Re=xs>ys?"down":"up";ce({Y:ne?mo>go?"right":"left":Re}),ne?!z.W&&oe&&(mo>go?Ot().m.right&&le.L(Ee,{section:p}):Ot().m.left&&le.L(F,{section:p})):N().autoScrolling&&z.canScroll&&I&&df(Re)}}function vo(u){return u.pointerType===void 0||u.pointerType!="mouse"}function Ms(u){if(N().fitToSection&&ce({G:!1}),vo(u)){var p=Tl(u);xs=p.y,mo=p.x}Pe("touchend",pf)}function pf(){We("touchend",pf),ce({X:!1})}function Tl(u){var p={};return p.y=u.pageY!==void 0&&(u.pageY||u.pageX)?u.pageY:u.touches[0].pageY,p.x=u.pageX!==void 0&&(u.pageY||u.pageX)?u.pageX:u.touches[0].pageX,v&&vo(u)&&N().scrollBar&&u.touches!==void 0&&(p.y=u.touches[0].pageY,p.x=u.touches[0].pageX),p}function mf(){var u;return h.PointerEvent&&(u={down:"pointerdown",move:"pointermove"}),u}function wl(u){N().autoScrolling&&vo(u)&&Ot().m.up&&(z.canScroll||Ue(u))}function gf(u,p){var y=p??$().P.item,w=$a(z.N,y),I=S(ut,y)[0];if(!(I==null||os()||z.W||w.slides.length<2)){var oe=w.activeSlide,ne=u==="left"?oe.prev():oe.next();if(!ne){if(!N().loopHorizontal)return;ne=u==="left"?me(w.slides):w.slides[0]}ce({W:!g.test.hn}),Ui(I,ne.item,u)}}function Al(u){gf("left",u)}function Rl(u){gf("right",u)}function Cl(u){var p=$().N.filter(function(w){return w.anchor===u})[0];if(!p){var y=u!==void 0?u-1:0;p=$().N[y]}return p}function _f(u){u!=null&&Ui(he(u,ut),u)}function Pl(u,p){var y=Cl(u);if(y!=null){var w=function(I,oe){var ne=oe.slides.filter(function(Re){return Re.anchor===I})[0];return ne==null&&(I=I!==void 0?I:0,ne=oe.slides[I]),ne?ne.item:null}(p,y);y.anchor&&y.anchor===z.Z||D(y.item,_e)?_f(w):lr(y,function(){_f(w)})}}function xo(u,p){var y=Cl(u);p!==void 0?Pl(u,p):y!=null&&lr(y)}function Eg(){clearTimeout(bl),ze("keydown",vf),ze("keyup",xf)}function vf(u){clearTimeout(bl);var p=u.keyCode,y=[37,39].indexOf(p)>-1,w=N().autoScrolling||N().fitToSection||y;p===9?function(I){var oe=I.shiftKey,ne=f.activeElement,Re=Ll(Li($().P.item));function be(Pt){return Ue(Pt),Re[0]?Re[0].focus():null}if(z.canScroll){if(!function(Pt){var bt=Ll(f),Tt=bt.indexOf(f.activeElement),lt=bt[Pt.shiftKey?Tt-1:Tt+1],Bt=he(lt,zt),Ht=he(lt,Xe);return!Bt&&!Ht}(I)){ne?he(ne,".fp-section.active,.fp-section.active .fp-slide.active")==null&&(ne=be(I)):be(I);var Ze=ne==Re[0],at=ne==Re[Re.length-1],Ke=oe&&Ze;if(Ke||!oe&&at){Ue(I);var ht=function(Pt){var bt,Tt=Pt?"prevPanel":"nextPanel",lt=[],Bt=Iu((z.P&&z.P.activeSlide?z.P.activeSlide:z.P)[Tt]());do(lt=Ll(Bt.item)).length&&(bt={Yn:Bt,Un:lt[Pt?lt.length-1:0]}),Bt=Iu(Bt[Tt]());while(Bt&&lt.length===0);return bt}(Ke),mt=ht?ht.Yn:null;if(mt){var Ft=mt.rn?mt:mt.parent;le.L(Et,{Xn:Ft.index()+1,slideAnchor:mt.rn?0:mt.index()}),ur=ht.Un,Ue(I)}}}}else Ue(I)}(u):!U()&&N().keyboardScrolling&&w&&(vs=u.ctrlKey,bl=setTimeout(function(){(function(I){var oe=I.shiftKey,ne=f.activeElement,Re=Le(ne,"video")||Le(ne,"audio"),be=je.Pn("up",$().P.item),Ze=je.Pn("down",$().P.item),at=[37,39].indexOf(I.keyCode)>-1;if(function(Ke){(function(ht){return[40,38,32,33,34].indexOf(ht.keyCode)>-1&&!z.C})(Ke)&&!he(Ke.target,ui)&&Ke.preventDefault()}(I),z.canScroll||at)switch(ce({H:"keydown"}),I.keyCode){case 38:case 33:Ot().k.up&&be?z.C?le.L(jt,{e:I}):cr():je.Sn();break;case 32:if(oe&&Ot().k.up&&!Re&&be){cr();break}case 40:case 34:if(Ot().k.down&&Ze){if(z.C)return;I.keyCode===32&&Re||po()}else je.Sn();break;case 36:Ot().k.up&&xo(1);break;case 35:Ot().k.down&&xo($().N.length);break;case 37:Ot().k.left&&Al();break;case 39:Ot().k.right&&Rl()}})(u)},0))}function xf(u){z.J&&(vs=u.ctrlKey)}function bg(){ce({J:!1}),vs=!1}function Tg(u){yf()}function wg(u){he(ur,zt)&&!he(ur,wt)||yf()}function yf(){ur&&(ur.focus(),ur=null)}function Ll(u){return[].slice.call(S('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',u)).filter(function(p){return k(p,"tabindex")!=="-1"&&p.offsetParent!==null})}g.moveSlideLeft=Al,g.moveSlideRight=Rl,g.moveTo=xo,le.R(J,function(){Pe("blur",bg),Mt("keydown",vf),Mt("keyup",xf),le.R(de,Eg),le.R(ir,Tg),le.R(ci,wg)});var Sf=new Date().getTime(),fr=[];function Dl(u){u?(function(){var p,y="";h.addEventListener?p="addEventListener":(p="attachEvent",y="on");var w="onwheel"in f.createElement("div")?"wheel":f.onmousewheel!==void 0?"mousewheel":"DOMMouseScroll",I=af();w=="DOMMouseScroll"?f[p](y+"MozMousePixelScroll",hr,I):f[p](y+w,hr,I)}(),Ve().addEventListener("mousedown",Mf),Ve().addEventListener("mouseup",Ef)):(f.addEventListener?(ze("mousewheel",hr,!1),ze("wheel",hr,!1),ze("MozMousePixelScroll",hr,!1)):f.detachEvent("onmousewheel",hr),Ve().removeEventListener("mousedown",Mf),Ve().removeEventListener("mouseup",Ef))}function hr(u){var p=new Date().getTime(),y=D(S(".fp-completely")[0],"fp-normal-scroll"),w=function(at,Ke){new Date().getTime();var ht=$().C&&at.getBoundingClientRect().bottom>=0&&gs.Fn()==="up",mt=$().Vn;if(mt)return Ue(Ke),!1;if($().C){if(ht){var Ft;if(!(mt||ff("isNewKeyframe","beyondFullpage")&&gs.Wn()))return(Ft=or(me($().N).item.offsetTop+me($().N).item.offsetHeight)).element.scrollTo(0,Ft.options),ce({Vn:!1}),Ue(Ke),!1;if(gs.Wn())return ht=!1,ce({Vn:!0}),ce({H:"wheel"}),uf(),Ue(Ke),!1}else ff("set","beyondFullpage",1e3);if(!mt&&!ht)return!0}}(Ve(),u);if(z._||ce({X:!1,_:!0,Y:"none"}),!Ot().m.down&&!Ot().m.up)return Ue(u),!1;if(w)return!0;if(w===!1)return Ue(u),!1;if(N().autoScrolling&&!vs&&!y){var I=(u=u||h.event).wheelDelta||-u.deltaY||-u.detail,oe=Math.max(-1,Math.min(1,I)),ne=u.wheelDeltaX!==void 0||u.deltaX!==void 0,Re=Math.abs(u.wheelDeltaX)<Math.abs(u.wheelDelta)||Math.abs(u.deltaX)<Math.abs(u.deltaY)||!ne,be=oe<0?"down":oe>0?"up":"none";fr.length>149&&fr.shift(),fr.push(Math.abs(I)),N().scrollBar&&Ue(u);var Ze=p-Sf;return Sf=p,Ze>200&&(fr=[]),ce({U:be}),z.canScroll&&!os()&&De(fr,10)>=De(fr,70)&&Re&&(ce({H:"wheel"}),df(oe<0?"down":"up")),!1}N().fitToSection&&ce({G:!1})}function Mf(u){var p;u.which==2&&(p=u.pageY,_s=p,Ve().addEventListener("mousemove",hf))}function Ef(u){u.which==2&&Ve().removeEventListener("mousemove",hf)}function yo(u){u?(Dl(!0),function(){if(dn.Bn&&(d||v)&&(!Rt("dragAndMove")||N().dragAndMove==="mouseonly")){N().autoScrolling&&(yt.removeEventListener(dn.Bn,wl,{passive:!1}),yt.addEventListener(dn.Bn,wl,{passive:!1}));var p=N().touchWrapper;p.removeEventListener(dn.Gn,Ms),p.removeEventListener(dn.Bn,_o,{passive:!1}),p.addEventListener(dn.Gn,Ms),p.addEventListener(dn.Bn,_o,{passive:!1})}}()):(Dl(!1),function(){if(dn.Bn&&(d||v)){N().autoScrolling&&(yt.removeEventListener(dn.Bn,_o,{passive:!1}),yt.removeEventListener(dn.Bn,wl,{passive:!1}));var p=N().touchWrapper;p.removeEventListener(dn.Gn,Ms),p.removeEventListener(dn.Bn,_o,{passive:!1})}}())}g.setMouseWheelScrolling=Dl;var Nl=!0;function Ag(){["mouseenter","touchstart","mouseleave","touchend"].forEach(function(u){ze(u,Tf,!0)})}function bf(u,p){document["fp_"+u]=p,Mt(u,Tf,!0)}function Tf(u){var p=u.type,y=!1,w=p==="mouseleave"?u.toElement||u.relatedTarget:u.target;w!=document&&w?(p==="touchend"&&(Nl=!1,setTimeout(function(){Nl=!0},800)),(p!=="mouseenter"||Nl)&&(N().normalScrollElements.split(",").forEach(function(I){if(!y){var oe=Le(w,I),ne=he(w,I);(oe||ne)&&(g.shared._n||yo(!1),g.shared._n=!0,y=!0)}}),!y&&g.shared._n&&(yo(!0),g.shared._n=!1))):yo(!0)}function Es(u,p){ao(0,"internal"),xo(u,p),ao(rr().scrollingSpeed,"internal")}le.R(J,function(){N().normalScrollElements&&(["mouseenter","touchstart"].forEach(function(u){bf(u,!1)}),["mouseleave","touchend"].forEach(function(u){bf(u,!0)})),le.R(de,Ag)}),g.silentMoveTo=Es;var Ul,wf,Il=R(),Af=Z(),Ol=!1;function Rg(){clearTimeout(Ul),clearTimeout(wf),We("resize",Fl)}function Fl(){Ol||(N().autoScrolling&&!N().scrollBar||!N().fitToSection)&&Rf(R()),function(){if(d)for(var u=0;u<4;u++)wf=setTimeout(function(){window.requestAnimationFrame(function(){N().autoScrolling&&!N().scrollBar&&(ce({F:!0}),Es(z.P.index()+1),ce({F:!1}))})},200*u)}(),Ol=!0,clearTimeout(Ul),Ul=setTimeout(function(){(function(){if(ce({F:!0}),Rf(""),Be(Ve(),"onResize"),N().autoScrolling||z.C||function(){if(!N().autoScrolling||N().scrollBar){var I=.01*h.innerHeight;f.documentElement.style.setProperty("--vh","".concat(I,"px"))}}(),le.L(ke),kn(),Zu(),d){var u=f.activeElement;if(!Le(u,"textarea")&&!Le(u,"input")&&!Le(u,"select")){var p=R();Math.abs(p-Il)>20*Math.max(Il,p)/100&&(Bl(!0),Il=p)}}else y=R(),w=Z(),z.q===y&&Af===w||(ce({q:y}),Af=w,Bl(!0));var y,w;Be(Ve(),"onResizeEnds"),ce({F:!1})})(),Ol=!1},400)}function Bl(u){if(!D(Ve(),Q)){ce({F:!0,q:R(),Qn:Z()});for(var p=$().N,y=0;y<p.length;++y){var w=p[y],I=S(ut,w.item)[0],oe=w.slides;Rt("offsetSections")&&M(w.item,{height:qa(w.item)}),oe.length>1&&Ui(I,w.activeSlide.item)}N().scrollOverflow&&je.bn();var ne=$().P.index();z.C||!ne||Rt("fadingEffect")||Rt("dropEffect")||Rt("waterEffect")||Es(ne+1),ce({F:!1}),Je(N().afterResize)&&u&&N().afterResize.call(Ve(),h.innerWidth,h.innerHeight),Je(N().afterReBuild)&&!u&&N().afterReBuild.call(Ve()),Be(Ve(),"afterRebuild")}}function Rf(u){$().N.forEach(function(p){var y=u!==""||Rt("offsetSections")?qa(p.item):"";M(p.item,{height:y})})}function kl(){var u,p,y=h.location.hash;if(y.length){var w=y.replace("#","").split("/"),I=y.indexOf("#/")>-1;u=I?"/"+w[1]:decodeURIComponent(w[0]);var oe=I?w[2]:w[1];oe&&oe.length&&(p=decodeURIComponent(oe))}return{section:u,sn:p}}function Cg(){We("hashchange",Cf)}function Cf(){if(!z.V&&!N().lockAnchors){var u=kl(),p=u.section,y=u.sn,w=z.Z===void 0,I=z.Z===void 0&&y===void 0&&!z.W;p&&p.length&&(p&&p!==z.Z&&!w||I&&!os()||!z.W&&z.B!=y&&!os())&&le.L(Et,{Xn:p,slideAnchor:y})}}function Pg(u){var p=u.target;he(p,N().menu+" [data-menuanchor]")&&Lg.call(p,u)}function Lg(u){ce({H:"menu"}),!S(N().menu)[0]||!N().lockAnchors&&N().anchors.length||(Ue(u),le.L(pt,{anchor:k(this,"data-menuanchor")}))}function Dg(u){var p=u.target;p&&he(p,"#fp-nav a")?_g.call(p,u.e):Le(p,".fp-tooltip")?gg.call(p):(Le(p,It)||he(p,It)!=null)&&hg.call(p,u.e)}g.reBuild=Bl,le.R(J,function(){Fl(),Pe("resize",Fl),le.R(de,Rg)}),g.setLockAnchors=function(u){N().lockAnchors=u},le.R(J,function(){Pe("hashchange",Cf),le.R(de,Cg)}),le.R(J,function(){Mt("wheel",gs.In,af()),le.R(no,Sg),le.R(jt,Mg)}),le.R(J,function(){le.R(et,Pg)}),le.R(J,function(){le.R(et,Dg)});var zl,Hl,Pf=0;function bs(u){var p,y,w,I,oe;if(Be(Ve(),"onScroll"),!z.F&&$().P&&(me($().N),!$().C&&!$().Vn&&(!N().autoScrolling||N().scrollBar||Rt("dragAndMove"))&&!Pu())){var ne=Rt("dragAndMove")?Math.abs($e("dragAndMove","getCurrentScroll")):Ie(),Re=function(nn){var pn=nn>Pf?"down":"up";return Pf=nn,ce({K:nn}),pn}(ne),be=0,Ze=ne+R()/2,at=(Rt("dragAndMove")?$e("dragAndMove","getDocumentHeight"):yt.scrollHeight-R())===ne,Ke=$().N;if(ce({scrollY:ne}),at)be=Ke.length-1;else if(ne)for(var ht=0;ht<Ke.length;++ht)(he(Ke[ht].item,Xe)||Ke[ht].item).offsetTop<=Ze&&(be=ht);else be=0;if(w=Re,I=$().P.item.offsetTop,oe=I+R(),(w=="up"?oe>=Ie()+R():I<=Ie())&&(D($().P.item,Ge)||(ie($().P.item,Ge),q(ct($().P.item),Ge))),y=(p=Ke[be]).item,!p.isActive){ce({V:!0});var mt,Ft,Pt=$().P.item,bt=$().P.index()+1,Tt=Ka($().P,y),lt=p.anchor,Bt=p.index()+1,Ht=p.activeSlide,Yn={P:Pt,sectionIndex:Bt-1,anchorLink:lt,element:y,leavingSection:bt,direction:Tt,items:{origin:$().P,destination:p}};Ht&&(Ft=Ht.anchor,mt=Ht.index()),z.canScroll&&(q(Ke.filter(function(nn){return nn.index()!==p.index()}).map(function(nn){return nn.item}),_e),ie(y,_e),$e("parallax","afterLoad"),Je(N().beforeLeave)&&$u("beforeLeave",Yn),Je(N().onLeave)&&Bn("onLeave",Yn),Je(N().afterLoad)&&Bn("afterLoad",Yn),$e("resetSliders","apply",{localIsResizing:z.F,leavingSection:bt}),Qa(Pt),sr(y),cs(y),ol(lt,Bt-1),N().anchors.length&&ce({Z:lt}),kn(),el(mt,Ft,lt)),clearTimeout(zl),zl=setTimeout(function(){ce({V:!1})},100)}N().fitToSection&&z.canScroll&&(clearTimeout(Hl),Hl=setTimeout(function(){z.N.filter(function(nn){var pn=nn.item.getBoundingClientRect();return Math.round(pn.bottom)===Math.round(R())||Math.round(pn.top)===0}).length||Ku()},N().en))}}function Lf(u,p){p!==void 0?(p=p.replace(/ /g,"").split(",")).forEach(function(y){fs(u,y,"k")}):(fs(u,"all","k"),N().keyboardScrolling=u)}function Ng(u){var p=u.index();N().anchors[p]!==void 0&&u.isActive&&ol(N().anchors[p],p),N().menu&&N().css3&&he(S(N().menu)[0],T)!=null&&S(N().menu).forEach(function(y){yt.appendChild(y)})}function Df(){var u,p,y=$().P,w=$().P.item;ie(w,Ge),sr(w),qu(),cs(w),p=Cl((u=kl()).section),u.section&&p&&(p===void 0||p.index()!==ae(Qu))||!Je(N().afterLoad)||Bn("afterLoad",{P:w,element:w,direction:null,anchorLink:y.anchor,sectionIndex:y.index(),items:{origin:$().P,destination:$().P}}),Je(N().afterRender)&&Bn("afterRender"),Be(Ve(),"afterRender")}function Gl(u,p){p!==void 0?(p=p.replace(/ /g,"").split(",")).forEach(function(y){fs(u,y,"m")}):fs(u,"all","m"),Be(Ve(),"setAllowScrolling",{value:u,Jn:p})}function Nf(){var u=kl(),p=u.section,y=u.sn;p?N().animateAnchor?Pl(p,y):Es(p,y):le.L(Ae,null)}le.R(de,function(){clearTimeout(zl),clearTimeout(Hl)}),le.R(J,function(){Pe("scroll",bs),f.body.addEventListener("scroll",bs),le.R(Et,function(u){Pl(u.Xn,u.slideAnchor)}),le.R(pt,function(u){xo(u.anchor,void 0)}),le.R(it,function(u){(u.direction==="down"?po:cr)()}),le.R(Ut,function(u){lr(u.destination)})}),le.R(de,function(){We("scroll",bs)}),g.getActiveSlide=function(){return Ja($().P.activeSlide)},g.getScrollX=function(){return z.scrollX},le.R(J,function(){le.R(de,mg),le.R(an,function(u){Ui(u.slides,u.destination)}),le.R(Ee,function(u){Rl(u.section)}),le.R(F,function(u){Al(u.section)})}),le.R(J,function(){var u=N().credits.position,p=["left","right"].indexOf(u)>-1?"".concat(u,": 0;"):"",y=`
        <div class="fp-watermark" style="`.concat(p,`">
            <a href="https://alvarotrigo.com/fullPage/" 
                rel="nofollow noopener" 
                target="_blank" 
                style="text-decoration:none; color: #000;">
                    `).concat(N().credits.label,`
            </a>
        </div>
    `),w=me(z.N),I=!z.Kn||N().credits.enabled;w&&w.item&&I&&w.item.insertAdjacentHTML("beforeend",y)}),function(){le.R(ge,function(){var Re,be,Ze;ce({Kn:(N().licenseKey,Re=N().licenseKey,be=function(at){var Ke=parseInt("514").toString(16);if(!at||at.length<29||at.split(u[0]).length===4)return null;var ht=["Each","for"][I()]().join(""),mt=at[["split"]]("-"),Ft=[];mt[ht](function(Tt,lt){if(lt<4){var Bt=function(nn){var pn=nn[nn.length-1],kg=["NaN","is"][I()]().join("");return window[kg](pn)?oe(pn):function(zg){return zg-_e.length}(pn)}(Tt);Ft.push(Bt);var Ht=oe(Tt[Bt]);if(lt===1){var Yn=["pa","dS","t","art"].join("");Ht=Ht.toString()[Yn](2,"0")}Ke+=Ht,lt!==0&&lt!==1||(Ke+="-")}});var Pt=0,bt="";return at.split("-").forEach(function(Tt,lt){if(lt<4){for(var Bt=0,Ht=0;Ht<4;Ht++)Ht!==Ft[lt]&&(Bt+=Math.abs(oe(Tt[Ht])),isNaN(Tt[Ht])||Pt++);var Yn=ne(Bt);bt+=Yn}}),bt+=ne(Pt),{qn:new Date(Ke+"T00:00"),$n:Ke.split("-")[2]===8*(_e.length-2)+"",nt:bt}}(Re),Ze=function(at){var Ke=w[I()]().join("");return at&&Ke.indexOf(at)===0&&at.length===Ke.length}(Re),(be||Ze)&&(be&&y<=be.qn&&be.nt===Re.split(u[0])[4]||Ze||be.$n)||!1)})});var u=["-"],p="2023-4-29".split("-"),y=new Date(p[0],p[1],p[2]),w=["se","licen","-","v3","l","gp"];function I(){return[["re","verse"].join("")][0]}function oe(Re){return Re?isNaN(Re)?Re.charCodeAt(0)-72:Re:""}function ne(Re){var be=72+Re;return be>90&&be<97&&(be+=15),String.fromCharCode(be).toUpperCase()}}(),g.setKeyboardScrolling=Lf,g.shared.tt=Df,g.setAllowScrolling=Gl;var Ug={};function dr(){return Ug}var Ts,qn,Uf,Vl,ws=!D(yt,Xt("OHNsd3AtZnVsbHBhZ2UtanM5T20="));function If(u){if(qn=f.createElement("div"),Ts=Xt("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),ws||(Ts=Ts.replace("extensions/","").replace("Extension","")),qn.innerHTML=Ts,qn=qn.firstChild,"MutationObserver"in window&&new MutationObserver(Ig).observe(f.body,{childList:!0,subtree:!1}),(!ws||Rt(u)&&g[u])&&(!function(y){var w=dr()[y]!==void 0&&dr()[y].length,I=[],oe=!1;return re(dr()[y])?I=dr()[y]:I.push(dr()[y]),I.forEach(function(ne){var Re=function(){if(f.domain.length){for(var pn=f.domain.replace(/^(www\.)/,"").split(".");pn.length>2;)pn.shift();return pn.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),be=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3","NDU2dGVzdDQ1Ng=="],Ze=Xt(be[0]),at=Xt(be[1]),Ke=Xt(be[2]),ht=Xt(be[6]),mt=Xt(be[3]),Ft=Xt(be[4]),Pt=Xt(be[5]),bt=N()[Ft+Pt]!==void 0;w=w||bt;var Tt=[Ze,at,Ke,ht].indexOf(Re)<0&&Re.length!==0;if(!w&&!bt&&Tt)return!1;var lt=w?Xt(ne):"",Bt=(lt=lt.split("_")).length>1&&lt[1].indexOf(y,lt[1].length-y.length)>-1,Ht=lt.length>1&&lt[1].toLowerCase().indexOf(Ft)>-1,Yn=lt[0].indexOf(Re,lt[0].length-Re.length)<0,nn=Bt||Ht;oe=oe||!(Yn&&Tt&&mt!=lt[0])&&nn||!Tt}),oe}(u)||!ws)){Of();var p=Xt("MzQ1c2V0SW50ZXJ2YWwxMjM=");window[p](Of,2e3)}}function Of(){qn&&(Vl||(Math.random()<.5?Lu(yt,qn):X(qn,yt),Vl=!0),qn.setAttribute("style",Xt("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,Xt("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function Ig(u){u.forEach(function(p){if(p.removedNodes[0]&&p.removedNodes[0].isEqualNode(qn)){clearTimeout(Uf);var y=Xt("bDIwc2V0VGltZW91dDAzbA==");Uf=window[y](Og,900)}})}function Og(){Vl=!1}function Fg(){ps(),kn(),N().scrollBar=N().scrollBar||N().hybrid,Ru(),function(){M(we(Ve(),"body"),{height:"100%",position:"relative"}),ie(Ve(),oo),ie(co,ee),ce({q:R()}),q(Ve(),Q),rf(),$e("parallax","init");for(var u=$().an,p=0;p<u.length;p++){var y=u[p],w=y.wn,I=k(y.item,"style");I&&y.item.setAttribute("data-fp-styles",I),pl(y),Ng(y),w.length>0&&vl(y)}N().fixedElements&&N().css3&&S(N().fixedElements).forEach(function(oe){yt.appendChild(oe)}),N().navigation&&Yu(),S('iframe[src*="youtube.com/embed/"]',Ve()).forEach(function(oe){var ne,Re;Re=k(ne=oe,"src"),ne.setAttribute("src",Re+(/\?/.test(Re)?"&":"?")+"enablejsapi=1")}),$e("fadingEffect","apply"),$e("waterEffect","init"),$e("dropEffect","init"),$e("cards","init"),N().scrollOverflow&&je.bn()}(),Gl(!0),yo(!0),ar(N().autoScrolling,"internal"),Zu(),ku(),f.readyState==="complete"&&Nf(),Pe("load",Nf),Df(),ws||If("l"),ps(),kn()}function Ff(){var u=N().licenseKey;N().licenseKey.trim()===""?(_("error","Fullpage.js requires a `licenseKey` option. Read about it on the following URL:"),_("error","https://github.com/alvarotrigo/fullPage.js#options")):N()&&z.Kn||f.domain.indexOf("alvarotrigo.com")>-1?u&&u.length:(_("error","Incorrect `licenseKey`. Get one for fullPage.js version 4 here:"),_("error","https://alvarotrigo.com/fullPage/pricing")),D(co,ee)?_("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(N().continuousVertical&&(N().loopTop||N().loopBottom)&&(N().continuousVertical=!1,_("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!N().scrollOverflow||!N().scrollBar&&N().autoScrolling||_("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!N().continuousVertical||!N().scrollBar&&N().autoScrolling||(N().continuousVertical=!1,_("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),N().anchors.forEach(function(p){var y=[].slice.call(S("[name]")).filter(function(oe){return k(oe,"name")&&k(oe,"name").toLowerCase()==p.toLowerCase()}),w=[].slice.call(S("[id]")).filter(function(oe){return k(oe,"id")&&k(oe,"id").toLowerCase()==p.toLowerCase()});if(w.length||y.length){_("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var I=w.length?"id":"name";(w.length||y.length)&&_("error",'"'+p+'" is is being used by another element `'+I+"` property")}}))}function Bg(){return{options:N(),internals:{container:Ve(),canScroll:z.canScroll,isScrollAllowed:Ot(),getDestinationPosition:ju,isTouch:v,c:If,getXmovement:Xu,removeAnimation:ss,getTransforms:Za,lazyLoad:sr,addAnimation:ja,performHorizontalMove:Wu,landscapeScroll:Ui,silentLandscapeScroll:uo,keepSlidesPosition:rl,silentScroll:Di,styleSlides:vl,styleSection:pl,scrollHandler:bs,getEventsPage:Tl,getMSPointer:mf,isReallyTouch:vo,usingExtension:Rt,toggleControlArrows:Vu,touchStartHandler:Ms,touchMoveHandler:_o,nullOrSection:fi,items:{SectionPanel:Ii,SlidePanel:ms,Item:Sn},getVisible:b,getState:$,updateState:kn,updateStructuralState:ps,activeSlidesNavigation:Gu,getPanels:function(){return z.un},getSections:function(){return z.N},setActiveSection:function(u){z.P=u}}}}function ln(u){var p=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],y=Xt(p[0]),w=Xt(p[1]),I=N()[y+w]!==void 0,oe="fp_"+u+"Extension";dr()[u]=I?N()[y+w]:N()[u+w],g[u]=window[oe]!==void 0?new window[oe]:null,g[u]&&g[u].c(u)}function Bf(u,p){var y;if(yt=S("body")[0],co=S("html")[0],as=S("html, body"),!D(co,ee))return y=typeof u=="string"?S(u)[0]:u,Pi.touchWrapper=y,function(w){is=C({},Pi,w),Xa=Object.assign({},is)}(p),function(w){so=w}(typeof u=="string"?S(u)[0]:u),le.L(ge),Ff(),g.getFullpageData=Bg,g.version="4.0.20",g.test=Object.assign(g.test,{top:"0px",cn:"translate3d(0px, 0px, 0px)",dn:function(){for(var w=[],I=0;I<S(N().sectionSelector,Ve()).length;I++)w.push("translate3d(0px, 0px, 0px)");return w}(),left:function(){for(var w=[],I=0;I<S(N().sectionSelector,Ve()).length;I++)w.push(0);return w}(),options:N(),setAutoScrolling:null}),g.shared=Object.assign(g.shared,{tt:null,_n:!1}),h.fullpage_api=g,h.fullpage_extensions=!0,Ve()&&(le.L("beforeInit"),ln("continuousHorizontal"),ln("scrollHorizontally"),ln("resetSliders"),ln("interlockedSlides"),ln("responsiveSlides"),ln("fadingEffect"),ln("dragAndMove"),ln("offsetSections"),ln("scrollOverflowReset"),ln("parallax"),ln("cards"),ln("dropEffect"),ln("waterEffect"),$e("dragAndMove","init"),$e("responsiveSlides","init"),Fg(),le.L(J),$e("dragAndMove","turnOffTouch")),h.fullpage_api;Ff()}return g.destroy=function(u){Be(Ve(),"destroy",u),ar(!1,"internal"),Gl(!0),yo(!1),Lf(!1),ie(Ve(),Q),le.L(de),$e("dragAndMove","destroy"),u&&(Di(0),S("img[data-src], source[data-src], audio[data-src], iframe[data-src]",Ve()).forEach(function(p){Me(p,"src")}),S("img[data-srcset]").forEach(function(p){Me(p,"srcset")}),vt(S("#fp-nav, .fp-slidesNav, .fp-controlArrow")),M(Ya($().N),{height:"","background-color":"",padding:""}),M(Ya($().slides),{width:""}),M(Ve(),{height:"",position:"","-ms-touch-action":"","touch-action":""}),M(as,{overflow:"",height:""}),q(co,ee),q(yt,H+" fp-scrollable"),yt.className.split(/\s+/).forEach(function(p){p.indexOf("fp-viewing")===0&&q(yt,p)}),Ya($().un).forEach(function(p){N().scrollOverflow&&je.Nn(p),q(p,"fp-table active fp-completely "+yn);var y=k(p,"data-fp-styles");y&&p.setAttribute("style",y),D(p,qe)&&!Au&&p.removeAttribute("data-anchor")}),ss(Ve()),[Qe,Xn,ut].forEach(function(p){S(p,Ve()).forEach(function(y){xe(y)})}),M(Ve(),{"-webkit-transition":"none",transition:"none"}),q(Ve(),oo),h.scrollTo(0,0),[qe,xt,tt].forEach(function(p){q(S("."+p),p)}))},h.fp_easings=C(h.fp_easings,{easeInOutCubic:function(u,p,y,w){return(u/=w/2)<1?y/2*u*u*u+p:y/2*((u-=2)*u*u+2)+p}}),h.jQuery&&function(u,p){u&&p?u.fn.fullpage=function(y){y=u.extend({},y,{$:u}),new p(this[0],y),Object.keys(g).forEach(function(w){N().$.fn.fullpage[w]=g[w]})}:_("error","jQuery is required to use the jQuery fullpage adapter!")}(h.jQuery,Bf),Bf})},239:()=>{window.fp_easings={def:"easeOutQuad",linear:function(o,a,s,l){return s*o/l+a},swing:function(o,a,s,l){return window.fp_easings[window.fp_easings.def](o,a,s,l)},easeInQuad:function(o,a,s,l){return s*(o/=l)*o+a},easeOutQuad:function(o,a,s,l){return-s*(o/=l)*(o-2)+a},easeInOutQuad:function(o,a,s,l){return(o/=l/2)<1?s/2*o*o+a:-s/2*(--o*(o-2)-1)+a},easeInCubic:function(o,a,s,l){return s*(o/=l)*o*o+a},easeOutCubic:function(o,a,s,l){return s*((o=o/l-1)*o*o+1)+a},easeInOutCubic:function(o,a,s,l){return(o/=l/2)<1?s/2*o*o*o+a:s/2*((o-=2)*o*o+2)+a},easeInQuart:function(o,a,s,l){return s*(o/=l)*o*o*o+a},easeOutQuart:function(o,a,s,l){return-s*((o=o/l-1)*o*o*o-1)+a},easeInOutQuart:function(o,a,s,l){return(o/=l/2)<1?s/2*o*o*o*o+a:-s/2*((o-=2)*o*o*o-2)+a},easeInQuint:function(o,a,s,l){return s*(o/=l)*o*o*o*o+a},easeOutQuint:function(o,a,s,l){return s*((o=o/l-1)*o*o*o*o+1)+a},easeInOutQuint:function(o,a,s,l){return(o/=l/2)<1?s/2*o*o*o*o*o+a:s/2*((o-=2)*o*o*o*o+2)+a},easeInSine:function(o,a,s,l){return-s*Math.cos(o/l*(Math.PI/2))+s+a},easeOutSine:function(o,a,s,l){return s*Math.sin(o/l*(Math.PI/2))+a},easeInOutSine:function(o,a,s,l){return-s/2*(Math.cos(Math.PI*o/l)-1)+a},easeInExpo:function(o,a,s,l){return o==0?a:s*Math.pow(2,10*(o/l-1))+a},easeOutExpo:function(o,a,s,l){return o==l?a+s:s*(1-Math.pow(2,-10*o/l))+a},easeInOutExpo:function(o,a,s,l){return o==0?a:o==l?a+s:(o/=l/2)<1?s/2*Math.pow(2,10*(o-1))+a:s/2*(2-Math.pow(2,-10*--o))+a},easeInCirc:function(o,a,s,l){return-s*(Math.sqrt(1-(o/=l)*o)-1)+a},easeOutCirc:function(o,a,s,l){return s*Math.sqrt(1-(o=o/l-1)*o)+a},easeInOutCirc:function(o,a,s,l){return(o/=l/2)<1?-s/2*(Math.sqrt(1-o*o)-1)+a:s/2*(Math.sqrt(1-(o-=2)*o)+1)+a},easeInElastic:function(o,a,s,l){var c=1.70158,h=0,f=s;return o==0?a:(o/=l)==1?a+s:(h||(h=.3*l),f<Math.abs(s)?(f=s,c=h/4):c=h/(2*Math.PI)*Math.asin(s/f),-f*Math.pow(2,10*(o-=1))*Math.sin((o*l-c)*(2*Math.PI)/h)+a)},easeOutElastic:function(o,a,s,l){var c=1.70158,h=0,f=s;return o==0?a:(o/=l)==1?a+s:(h||(h=.3*l),f<Math.abs(s)?(f=s,c=h/4):c=h/(2*Math.PI)*Math.asin(s/f),f*Math.pow(2,-10*o)*Math.sin((o*l-c)*(2*Math.PI)/h)+s+a)},easeInOutElastic:function(o,a,s,l){var c=1.70158,h=0,f=s;return o==0?a:(o/=l/2)==2?a+s:(h||(h=l*.44999999999999996),f<Math.abs(s)?(f=s,c=h/4):c=h/(2*Math.PI)*Math.asin(s/f),o<1?f*Math.pow(2,10*(o-=1))*Math.sin((o*l-c)*(2*Math.PI)/h)*-.5+a:f*Math.pow(2,-10*(o-=1))*Math.sin((o*l-c)*(2*Math.PI)/h)*.5+s+a)},easeInBack:function(o,a,s,l,c){return c==null&&(c=1.70158),s*(o/=l)*o*((c+1)*o-c)+a},easeOutBack:function(o,a,s,l,c){return c==null&&(c=1.70158),s*((o=o/l-1)*o*((c+1)*o+c)+1)+a},easeInOutBack:function(o,a,s,l,c){return c==null&&(c=1.70158),(o/=l/2)<1?s/2*(o*o*((1+(c*=1.525))*o-c))+a:s/2*((o-=2)*o*((1+(c*=1.525))*o+c)+2)+a},easeInBounce:function(o,a,s,l){return s-window.fp_easings.easeOutBounce(l-o,0,s,l)+a},easeOutBounce:function(o,a,s,l){return(o/=l)<.36363636363636365?s*(7.5625*o*o)+a:o<.7272727272727273?s*(7.5625*(o-=.5454545454545454)*o+.75)+a:o<.9090909090909091?s*(7.5625*(o-=.8181818181818182)*o+.9375)+a:s*(7.5625*(o-=.9545454545454546)*o+.984375)+a},easeInOutBounce:function(o,a,s,l){return o<l/2?.5*window.fp_easings.easeInBounce(2*o,0,s,l)+a:.5*window.fp_easings.easeOutBounce(2*o-l,0,s,l)+.5*s+a}}},379:o=>{var a=[];function s(h){for(var f=-1,d=0;d<a.length;d++)if(a[d].identifier===h){f=d;break}return f}function l(h,f){for(var d={},m=[],v=0;v<h.length;v++){var x=h[v],g=f.base?x[0]+f.base:x[0],_=d[g]||0,A="".concat(g," ").concat(_);d[g]=_+1;var b=s(A),S={css:x[1],media:x[2],sourceMap:x[3]};b!==-1?(a[b].references++,a[b].updater(S)):a.push({identifier:A,updater:c(S,f),references:1}),m.push(A)}return m}function c(h,f){var d=f.domAPI(f);return d.update(h),function(v){if(v){if(v.css===h.css&&v.media===h.media&&v.sourceMap===h.sourceMap)return;d.update(h=v)}else d.remove()}}o.exports=function(h,f){f=f||{},h=h||[];var d=l(h,f);return function(v){v=v||[];for(var x=0;x<d.length;x++){var g=d[x],_=s(g);a[_].references--}for(var A=l(v,f),b=0;b<d.length;b++){var S=d[b],C=s(S);a[C].references===0&&(a[C].updater(),a.splice(C,1))}d=A}}},569:o=>{var a={};function s(c){if(typeof a[c]>"u"){var h=document.querySelector(c);if(window.HTMLIFrameElement&&h instanceof window.HTMLIFrameElement)try{h=h.contentDocument.head}catch{h=null}a[c]=h}return a[c]}function l(c,h){var f=s(c);if(!f)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");f.appendChild(h)}o.exports=l},216:o=>{function a(s){var l=document.createElement("style");return s.setAttributes(l,s.attributes),s.insert(l),l}o.exports=a},565:(o,a,s)=>{function l(c){var h=s.nc;h&&c.setAttribute("nonce",h)}o.exports=l},795:o=>{function a(c,h,f){var d=f.css,m=f.media,v=f.sourceMap;m?c.setAttribute("media",m):c.removeAttribute("media"),v&&typeof btoa<"u"&&(d+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(v))))," */")),h.styleTagTransform(d,c)}function s(c){if(c.parentNode===null)return!1;c.parentNode.removeChild(c)}function l(c){var h=c.insertStyleElement(c);return{update:function(d){a(h,c,d)},remove:function(){s(h)}}}o.exports=l},589:o=>{function a(s,l){if(l.styleSheet)l.styleSheet.cssText=s;else{for(;l.firstChild;)l.removeChild(l.firstChild);l.appendChild(document.createTextNode(s))}}o.exports=a},497:o=>{o.exports=p_}},t={};function i(o){var a=t[o];if(a!==void 0)return a.exports;var s=t[o]={id:o,exports:{}};return e[o].call(s.exports,s,s.exports,i),s.exports}i.n=o=>{var a=o&&o.__esModule?()=>o.default:()=>o;return i.d(a,{a}),a},i.d=(o,a)=>{for(var s in a)i.o(a,s)&&!i.o(o,s)&&Object.defineProperty(o,s,{enumerable:!0,get:a[s]})},i.o=(o,a)=>Object.prototype.hasOwnProperty.call(o,a),i.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})};var r={};(()=>{i.r(r),i.d(r,{default:()=>h});var o=i(497),a=i.n(o);const l=f=>{let{children:d}=f;return a().createElement(o.Fragment,null,d)},c=()=>{if(typeof window>"u")return!1;try{return!"production".toLowerCase().match(/test/)}catch{return!0}},h=(()=>{let f;return c()?f=i(88).Z:f=i(882).Z,f.Wrapper=l,f})()})(),n.exports=r})()})(yp);var m_=yp.exports;const rh=Yg(m_),g_="/assets/title_vod-pjtezOz1.mp4";var __=0;function j(n,e,t,i,r,o){var a,s,l={};for(s in e)s=="ref"?a=e[s]:l[s]=e[s];var c={type:n,props:l,key:t,ref:a,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:--__,__i:-1,__u:0,__source:r,__self:o};if(typeof n=="function"&&(a=n.defaultProps))for(s in a)l[s]===void 0&&(l[s]=a[s]);return Ne.vnode&&Ne.vnode(c),c}const v_=()=>j("div",{style:{height:"100%",position:"relative"},children:[j("div",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,display:"flex",flexDirection:"column",justifyContent:"space-between",backgroundColor:"rgba(0,0,0,0.5)"},children:[j("div",{}),j("div",{style:{fontSize:"xxx-large",textAlign:"center"},children:"Music Viz"}),j("div",{style:{alignSelf:"end"},children:"BigO"})]}),j("video",{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0,objectFit:"cover",zIndex:-1},autoplay:!0,loop:!0,muted:!0,children:j("source",{src:g_,type:"video/mp4"})})]});let Ur;const x_=(n,e)=>{if(Ur=void 0,e&&e.type==="click"){if(e.ctrlKey||e.metaKey||e.altKey||e.shiftKey||e.button!==0)return n;const t=e.target.closest("a[href]");if(!t||t.origin!=location.origin||/^#/.test(t.getAttribute("href"))||!/^(_?self)?$/i.test(t.target))return n;Ur=!0,e.preventDefault(),e=t.href.replace(location.origin,"")}else typeof e=="string"?Ur=!0:e=location.pathname+location.search;return Ur===!0?history.pushState(null,"",e):Ur===!1&&history.replaceState(null,"",e),e};function fu(n){const[e,t]=Ua(x_,n.url||location.pathname+location.search),i=Ur===!0,r=$o(()=>{const o=new URL(e,location.origin),a=o.pathname.replace(/(.)\/$/g,"$1");return{url:e,path:a,query:Object.fromEntries(o.searchParams),route:t,wasPush:i}},[e]);return Jr(()=>(addEventListener("click",t),addEventListener("popstate",t),()=>{removeEventListener("click",t),removeEventListener("popstate",t)}),[]),Nn(fu.ctx.Provider,{value:r},n.children)}Promise.resolve();fu.ctx=Na({});Na({});const y_=()=>au(fu.ctx),oh=Ne.__e;Ne.__e=(n,e,t)=>{if(n&&n.then){let i=e;for(;i=i.__;)if(i.__c&&i.__c.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),e.__k||(e.__k=[]),i.__c.__c(n,e)}oh&&oh(n,e,t)};let Mn=1;const aa={Title:{text:"Title",link:"/",sectionNum:Mn++},Intro:{text:"Intro",link:"/intro",sectionNum:Mn++},Task1_0:{text:"Task1_0",link:"/task1/overview",sectionNum:Mn++},Task1_1:{text:"Task1_1",link:"/task1/1",sectionNum:Mn++},Task1_2:{text:"Task1_2",link:"/task1/2",sectionNum:Mn++},Task1_3:{text:"Task1_3",link:"/task1/3",sectionNum:Mn++},Task2_0:{text:"Task2_0",link:"/task2/overview",sectionNum:Mn++},Task2_1:{text:"Task2_1",link:"/task2/1",sectionNum:Mn++},Task2_2:{text:"Task2_2",link:"/task2/2",sectionNum:Mn++},Task3_0:{text:"Task3_0",link:"/task3/overview",sectionNum:Mn++},Task3_1:{text:"Task3_1",link:"/task3/1",sectionNum:Mn++}},Vn=li(({progress:n})=>{const e=y_();return j("div",{style:{flex:1,justifyContent:"space-evenly",margin:"15vh 0",display:"flex",flexDirection:"column"},children:Object.entries(aa).map(([t,{text:i,link:r}])=>j("div",{style:{...t==n?{fontSize:"xx-large"}:{},cursor:"pointer",backgroundColor:"transparent",textAlign:"center"},onClick:()=>e.route(r),children:i},t))})}),S_=li(({to1:n,to2:e,to3:t})=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Intro"})}),j("div",{class:"content-div",children:[j("p",{children:"When we talk about music, we're speaking of an art form that dances on the spectrum of sound, a realm where noise and melody coalesce and diverge in a complex ballet of frequencies. Our research delves into the intricate patterns that emerge when we dissect music to its core, discerning the fine line where music ceases to be noise and transforms into an organized symphony of sound that can convey a spectrum of emotions and instructions."}),j("p",{children:["At the heart of our inquiry lies three pivotal tasks:",j("div",{class:"divide-3",children:[j("div",{onClick:n,children:"Music Vs. Nosie"}),j("div",{onClick:e,children:"Valence Vs. Arousal"}),j("div",{onClick:t,children:"Instrumental music"})]})]}),j("p",{children:"These tasks help us to unravel the threads that compose the rich tapestry of music. Let us tune our instruments and prepare to delve into the symphony of sounds, to distinguish the noise from the music, and to discover the patterns that lie within."})]})]}));function la(n,e){return n==null||e==null?NaN:n<e?-1:n>e?1:n>=e?0:NaN}function M_(n,e){return n==null||e==null?NaN:e<n?-1:e>n?1:e>=n?0:NaN}function Jp(n){let e,t,i;n.length!==2?(e=la,t=(s,l)=>la(n(s),l),i=(s,l)=>n(s)-l):(e=n===la||n===M_?n:E_,t=n,i=n);function r(s,l,c=0,h=s.length){if(c<h){if(e(l,l)!==0)return h;do{const f=c+h>>>1;t(s[f],l)<0?c=f+1:h=f}while(c<h)}return c}function o(s,l,c=0,h=s.length){if(c<h){if(e(l,l)!==0)return h;do{const f=c+h>>>1;t(s[f],l)<=0?c=f+1:h=f}while(c<h)}return c}function a(s,l,c=0,h=s.length){const f=r(s,l,c,h-1);return f>c&&i(s[f-1],l)>-i(s[f],l)?f-1:f}return{left:r,center:a,right:o}}function E_(){return 0}function b_(n){return n===null?NaN:+n}const T_=Jp(la),w_=T_.right;Jp(b_).center;const A_=w_;function R_(n,e){let t,i;if(e===void 0)for(const r of n)r!=null&&(t===void 0?r>=r&&(t=i=r):(t>r&&(t=r),i<r&&(i=r)));else{let r=-1;for(let o of n)(o=e(o,++r,n))!=null&&(t===void 0?o>=o&&(t=i=o):(t>o&&(t=o),i<o&&(i=o)))}return[t,i]}const C_=Math.sqrt(50),P_=Math.sqrt(10),L_=Math.sqrt(2);function ma(n,e,t){const i=(e-n)/Math.max(0,t),r=Math.floor(Math.log10(i)),o=i/Math.pow(10,r),a=o>=C_?10:o>=P_?5:o>=L_?2:1;let s,l,c;return r<0?(c=Math.pow(10,-r)/a,s=Math.round(n*c),l=Math.round(e*c),s/c<n&&++s,l/c>e&&--l,c=-c):(c=Math.pow(10,r)*a,s=Math.round(n/c),l=Math.round(e/c),s*c<n&&++s,l*c>e&&--l),l<s&&.5<=t&&t<2?ma(n,e,t*2):[s,l,c]}function D_(n,e,t){if(e=+e,n=+n,t=+t,!(t>0))return[];if(n===e)return[n];const i=e<n,[r,o,a]=i?ma(e,n,t):ma(n,e,t);if(!(o>=r))return[];const s=o-r+1,l=new Array(s);if(i)if(a<0)for(let c=0;c<s;++c)l[c]=(o-c)/-a;else for(let c=0;c<s;++c)l[c]=(o-c)*a;else if(a<0)for(let c=0;c<s;++c)l[c]=(r+c)/-a;else for(let c=0;c<s;++c)l[c]=(r+c)*a;return l}function Ic(n,e,t){return e=+e,n=+n,t=+t,ma(n,e,t)[2]}function N_(n,e,t){e=+e,n=+n,t=+t;const i=e<n,r=i?Ic(e,n,t):Ic(n,e,t);return(i?-1:1)*(r<0?1/-r:r)}function U_(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t<i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t<r||t===void 0&&r>=r)&&(t=r)}return t}function I_(n,e){let t;if(e===void 0)for(const i of n)i!=null&&(t>i||t===void 0&&i>=i)&&(t=i);else{let i=-1;for(let r of n)(r=e(r,++i,n))!=null&&(t>r||t===void 0&&r>=r)&&(t=r)}return t}function O_(n){return n}var ql=1,Yl=2,Oc=3,Ro=4,sh=1e-6;function F_(n){return"translate("+n+",0)"}function B_(n){return"translate(0,"+n+")"}function k_(n){return e=>+n(e)}function z_(n,e){return e=Math.max(0,n.bandwidth()-e*2)/2,n.round()&&(e=Math.round(e)),t=>+n(t)+e}function H_(){return!this.__axis}function Qp(n,e){var t=[],i=null,r=null,o=6,a=6,s=3,l=typeof window<"u"&&window.devicePixelRatio>1?0:.5,c=n===ql||n===Ro?-1:1,h=n===Ro||n===Yl?"x":"y",f=n===ql||n===Oc?F_:B_;function d(m){var v=i??(e.ticks?e.ticks.apply(e,t):e.domain()),x=r??(e.tickFormat?e.tickFormat.apply(e,t):O_),g=Math.max(o,0)+s,_=e.range(),A=+_[0]+l,b=+_[_.length-1]+l,S=(e.bandwidth?z_:k_)(e.copy(),l),C=m.selection?m.selection():m,D=C.selectAll(".domain").data([null]),R=C.selectAll(".tick").data(v,e).order(),Z=R.exit(),M=R.enter().append("g").attr("class","tick"),L=R.select("line"),G=R.select("text");D=D.merge(D.enter().insert("path",".tick").attr("class","domain").attr("stroke","currentColor")),R=R.merge(M),L=L.merge(M.append("line").attr("stroke","currentColor").attr(h+"2",c*o)),G=G.merge(M.append("text").attr("fill","currentColor").attr(h,c*g).attr("dy",n===ql?"0em":n===Oc?"0.71em":"0.32em")),m!==C&&(D=D.transition(m),R=R.transition(m),L=L.transition(m),G=G.transition(m),Z=Z.transition(m).attr("opacity",sh).attr("transform",function(se){return isFinite(se=S(se))?f(se+l):this.getAttribute("transform")}),M.attr("opacity",sh).attr("transform",function(se){var ae=this.parentNode.__axis;return f((ae&&isFinite(ae=ae(se))?ae:S(se))+l)})),Z.remove(),D.attr("d",n===Ro||n===Yl?a?"M"+c*a+","+A+"H"+l+"V"+b+"H"+c*a:"M"+l+","+A+"V"+b:a?"M"+A+","+c*a+"V"+l+"H"+b+"V"+c*a:"M"+A+","+l+"H"+b),R.attr("opacity",1).attr("transform",function(se){return f(S(se)+l)}),L.attr(h+"2",c*o),G.attr(h,c*g).text(x),C.filter(H_).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",n===Yl?"start":n===Ro?"end":"middle"),C.each(function(){this.__axis=S})}return d.scale=function(m){return arguments.length?(e=m,d):e},d.ticks=function(){return t=Array.from(arguments),d},d.tickArguments=function(m){return arguments.length?(t=m==null?[]:Array.from(m),d):t.slice()},d.tickValues=function(m){return arguments.length?(i=m==null?null:Array.from(m),d):i&&i.slice()},d.tickFormat=function(m){return arguments.length?(r=m,d):r},d.tickSize=function(m){return arguments.length?(o=a=+m,d):o},d.tickSizeInner=function(m){return arguments.length?(o=+m,d):o},d.tickSizeOuter=function(m){return arguments.length?(a=+m,d):a},d.tickPadding=function(m){return arguments.length?(s=+m,d):s},d.offset=function(m){return arguments.length?(l=+m,d):l},d}function G_(n){return Qp(Oc,n)}function V_(n){return Qp(Ro,n)}var W_={value:()=>{}};function em(){for(var n=0,e=arguments.length,t={},i;n<e;++n){if(!(i=arguments[n]+"")||i in t||/[\s.]/.test(i))throw new Error("illegal type: "+i);t[i]=[]}return new ca(t)}function ca(n){this._=n}function X_(n,e){return n.trim().split(/^|\s+/).map(function(t){var i="",r=t.indexOf(".");if(r>=0&&(i=t.slice(r+1),t=t.slice(0,r)),t&&!e.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:i}})}ca.prototype=em.prototype={constructor:ca,on:function(n,e){var t=this._,i=X_(n+"",t),r,o=-1,a=i.length;if(arguments.length<2){for(;++o<a;)if((r=(n=i[o]).type)&&(r=q_(t[r],n.name)))return r;return}if(e!=null&&typeof e!="function")throw new Error("invalid callback: "+e);for(;++o<a;)if(r=(n=i[o]).type)t[r]=ah(t[r],n.name,e);else if(e==null)for(r in t)t[r]=ah(t[r],n.name,null);return this},copy:function(){var n={},e=this._;for(var t in e)n[t]=e[t].slice();return new ca(n)},call:function(n,e){if((r=arguments.length-2)>0)for(var t=new Array(r),i=0,r,o;i<r;++i)t[i]=arguments[i+2];if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(o=this._[n],i=0,r=o.length;i<r;++i)o[i].value.apply(e,t)},apply:function(n,e,t){if(!this._.hasOwnProperty(n))throw new Error("unknown type: "+n);for(var i=this._[n],r=0,o=i.length;r<o;++r)i[r].value.apply(e,t)}};function q_(n,e){for(var t=0,i=n.length,r;t<i;++t)if((r=n[t]).name===e)return r.value}function ah(n,e,t){for(var i=0,r=n.length;i<r;++i)if(n[i].name===e){n[i]=W_,n=n.slice(0,i).concat(n.slice(i+1));break}return t!=null&&n.push({name:e,value:t}),n}var Fc="http://www.w3.org/1999/xhtml";const lh={svg:"http://www.w3.org/2000/svg",xhtml:Fc,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Ia(n){var e=n+="",t=e.indexOf(":");return t>=0&&(e=n.slice(0,t))!=="xmlns"&&(n=n.slice(t+1)),lh.hasOwnProperty(e)?{space:lh[e],local:n}:n}function Y_(n){return function(){var e=this.ownerDocument,t=this.namespaceURI;return t===Fc&&e.documentElement.namespaceURI===Fc?e.createElement(n):e.createElementNS(t,n)}}function $_(n){return function(){return this.ownerDocument.createElementNS(n.space,n.local)}}function tm(n){var e=Ia(n);return(e.local?$_:Y_)(e)}function j_(){}function hu(n){return n==null?j_:function(){return this.querySelector(n)}}function K_(n){typeof n!="function"&&(n=hu(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var o=e[r],a=o.length,s=i[r]=new Array(a),l,c,h=0;h<a;++h)(l=o[h])&&(c=n.call(l,l.__data__,h,o))&&("__data__"in l&&(c.__data__=l.__data__),s[h]=c);return new hn(i,this._parents)}function Z_(n){return n==null?[]:Array.isArray(n)?n:Array.from(n)}function J_(){return[]}function nm(n){return n==null?J_:function(){return this.querySelectorAll(n)}}function Q_(n){return function(){return Z_(n.apply(this,arguments))}}function ev(n){typeof n=="function"?n=Q_(n):n=nm(n);for(var e=this._groups,t=e.length,i=[],r=[],o=0;o<t;++o)for(var a=e[o],s=a.length,l,c=0;c<s;++c)(l=a[c])&&(i.push(n.call(l,l.__data__,c,a)),r.push(l));return new hn(i,r)}function im(n){return function(){return this.matches(n)}}function rm(n){return function(e){return e.matches(n)}}var tv=Array.prototype.find;function nv(n){return function(){return tv.call(this.children,n)}}function iv(){return this.firstElementChild}function rv(n){return this.select(n==null?iv:nv(typeof n=="function"?n:rm(n)))}var ov=Array.prototype.filter;function sv(){return Array.from(this.children)}function av(n){return function(){return ov.call(this.children,n)}}function lv(n){return this.selectAll(n==null?sv:av(typeof n=="function"?n:rm(n)))}function cv(n){typeof n!="function"&&(n=im(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var o=e[r],a=o.length,s=i[r]=[],l,c=0;c<a;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&s.push(l);return new hn(i,this._parents)}function om(n){return new Array(n.length)}function uv(){return new hn(this._enter||this._groups.map(om),this._parents)}function ga(n,e){this.ownerDocument=n.ownerDocument,this.namespaceURI=n.namespaceURI,this._next=null,this._parent=n,this.__data__=e}ga.prototype={constructor:ga,appendChild:function(n){return this._parent.insertBefore(n,this._next)},insertBefore:function(n,e){return this._parent.insertBefore(n,e)},querySelector:function(n){return this._parent.querySelector(n)},querySelectorAll:function(n){return this._parent.querySelectorAll(n)}};function fv(n){return function(){return n}}function hv(n,e,t,i,r,o){for(var a=0,s,l=e.length,c=o.length;a<c;++a)(s=e[a])?(s.__data__=o[a],i[a]=s):t[a]=new ga(n,o[a]);for(;a<l;++a)(s=e[a])&&(r[a]=s)}function dv(n,e,t,i,r,o,a){var s,l,c=new Map,h=e.length,f=o.length,d=new Array(h),m;for(s=0;s<h;++s)(l=e[s])&&(d[s]=m=a.call(l,l.__data__,s,e)+"",c.has(m)?r[s]=l:c.set(m,l));for(s=0;s<f;++s)m=a.call(n,o[s],s,o)+"",(l=c.get(m))?(i[s]=l,l.__data__=o[s],c.delete(m)):t[s]=new ga(n,o[s]);for(s=0;s<h;++s)(l=e[s])&&c.get(d[s])===l&&(r[s]=l)}function pv(n){return n.__data__}function mv(n,e){if(!arguments.length)return Array.from(this,pv);var t=e?dv:hv,i=this._parents,r=this._groups;typeof n!="function"&&(n=fv(n));for(var o=r.length,a=new Array(o),s=new Array(o),l=new Array(o),c=0;c<o;++c){var h=i[c],f=r[c],d=f.length,m=gv(n.call(h,h&&h.__data__,c,i)),v=m.length,x=s[c]=new Array(v),g=a[c]=new Array(v),_=l[c]=new Array(d);t(h,f,x,g,_,m,e);for(var A=0,b=0,S,C;A<v;++A)if(S=x[A]){for(A>=b&&(b=A+1);!(C=g[b])&&++b<v;);S._next=C||null}}return a=new hn(a,i),a._enter=s,a._exit=l,a}function gv(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function _v(){return new hn(this._exit||this._groups.map(om),this._parents)}function vv(n,e,t){var i=this.enter(),r=this,o=this.exit();return typeof n=="function"?(i=n(i),i&&(i=i.selection())):i=i.append(n+""),e!=null&&(r=e(r),r&&(r=r.selection())),t==null?o.remove():t(o),i&&r?i.merge(r).order():r}function xv(n){for(var e=n.selection?n.selection():n,t=this._groups,i=e._groups,r=t.length,o=i.length,a=Math.min(r,o),s=new Array(r),l=0;l<a;++l)for(var c=t[l],h=i[l],f=c.length,d=s[l]=new Array(f),m,v=0;v<f;++v)(m=c[v]||h[v])&&(d[v]=m);for(;l<r;++l)s[l]=t[l];return new hn(s,this._parents)}function yv(){for(var n=this._groups,e=-1,t=n.length;++e<t;)for(var i=n[e],r=i.length-1,o=i[r],a;--r>=0;)(a=i[r])&&(o&&a.compareDocumentPosition(o)^4&&o.parentNode.insertBefore(a,o),o=a);return this}function Sv(n){n||(n=Mv);function e(f,d){return f&&d?n(f.__data__,d.__data__):!f-!d}for(var t=this._groups,i=t.length,r=new Array(i),o=0;o<i;++o){for(var a=t[o],s=a.length,l=r[o]=new Array(s),c,h=0;h<s;++h)(c=a[h])&&(l[h]=c);l.sort(e)}return new hn(r,this._parents).order()}function Mv(n,e){return n<e?-1:n>e?1:n>=e?0:NaN}function Ev(){var n=arguments[0];return arguments[0]=this,n.apply(null,arguments),this}function bv(){return Array.from(this)}function Tv(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,o=i.length;r<o;++r){var a=i[r];if(a)return a}return null}function wv(){let n=0;for(const e of this)++n;return n}function Av(){return!this.node()}function Rv(n){for(var e=this._groups,t=0,i=e.length;t<i;++t)for(var r=e[t],o=0,a=r.length,s;o<a;++o)(s=r[o])&&n.call(s,s.__data__,o,r);return this}function Cv(n){return function(){this.removeAttribute(n)}}function Pv(n){return function(){this.removeAttributeNS(n.space,n.local)}}function Lv(n,e){return function(){this.setAttribute(n,e)}}function Dv(n,e){return function(){this.setAttributeNS(n.space,n.local,e)}}function Nv(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttribute(n):this.setAttribute(n,t)}}function Uv(n,e){return function(){var t=e.apply(this,arguments);t==null?this.removeAttributeNS(n.space,n.local):this.setAttributeNS(n.space,n.local,t)}}function Iv(n,e){var t=Ia(n);if(arguments.length<2){var i=this.node();return t.local?i.getAttributeNS(t.space,t.local):i.getAttribute(t)}return this.each((e==null?t.local?Pv:Cv:typeof e=="function"?t.local?Uv:Nv:t.local?Dv:Lv)(t,e))}function sm(n){return n.ownerDocument&&n.ownerDocument.defaultView||n.document&&n||n.defaultView}function Ov(n){return function(){this.style.removeProperty(n)}}function Fv(n,e,t){return function(){this.style.setProperty(n,e,t)}}function Bv(n,e,t){return function(){var i=e.apply(this,arguments);i==null?this.style.removeProperty(n):this.style.setProperty(n,i,t)}}function kv(n,e,t){return arguments.length>1?this.each((e==null?Ov:typeof e=="function"?Bv:Fv)(n,e,t??"")):Xr(this.node(),n)}function Xr(n,e){return n.style.getPropertyValue(e)||sm(n).getComputedStyle(n,null).getPropertyValue(e)}function zv(n){return function(){delete this[n]}}function Hv(n,e){return function(){this[n]=e}}function Gv(n,e){return function(){var t=e.apply(this,arguments);t==null?delete this[n]:this[n]=t}}function Vv(n,e){return arguments.length>1?this.each((e==null?zv:typeof e=="function"?Gv:Hv)(n,e)):this.node()[n]}function am(n){return n.trim().split(/^|\s+/)}function du(n){return n.classList||new lm(n)}function lm(n){this._node=n,this._names=am(n.getAttribute("class")||"")}lm.prototype={add:function(n){var e=this._names.indexOf(n);e<0&&(this._names.push(n),this._node.setAttribute("class",this._names.join(" ")))},remove:function(n){var e=this._names.indexOf(n);e>=0&&(this._names.splice(e,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(n){return this._names.indexOf(n)>=0}};function cm(n,e){for(var t=du(n),i=-1,r=e.length;++i<r;)t.add(e[i])}function um(n,e){for(var t=du(n),i=-1,r=e.length;++i<r;)t.remove(e[i])}function Wv(n){return function(){cm(this,n)}}function Xv(n){return function(){um(this,n)}}function qv(n,e){return function(){(e.apply(this,arguments)?cm:um)(this,n)}}function Yv(n,e){var t=am(n+"");if(arguments.length<2){for(var i=du(this.node()),r=-1,o=t.length;++r<o;)if(!i.contains(t[r]))return!1;return!0}return this.each((typeof e=="function"?qv:e?Wv:Xv)(t,e))}function $v(){this.textContent=""}function jv(n){return function(){this.textContent=n}}function Kv(n){return function(){var e=n.apply(this,arguments);this.textContent=e??""}}function Zv(n){return arguments.length?this.each(n==null?$v:(typeof n=="function"?Kv:jv)(n)):this.node().textContent}function Jv(){this.innerHTML=""}function Qv(n){return function(){this.innerHTML=n}}function e0(n){return function(){var e=n.apply(this,arguments);this.innerHTML=e??""}}function t0(n){return arguments.length?this.each(n==null?Jv:(typeof n=="function"?e0:Qv)(n)):this.node().innerHTML}function n0(){this.nextSibling&&this.parentNode.appendChild(this)}function i0(){return this.each(n0)}function r0(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function o0(){return this.each(r0)}function s0(n){var e=typeof n=="function"?n:tm(n);return this.select(function(){return this.appendChild(e.apply(this,arguments))})}function a0(){return null}function l0(n,e){var t=typeof n=="function"?n:tm(n),i=e==null?a0:typeof e=="function"?e:hu(e);return this.select(function(){return this.insertBefore(t.apply(this,arguments),i.apply(this,arguments)||null)})}function c0(){var n=this.parentNode;n&&n.removeChild(this)}function u0(){return this.each(c0)}function f0(){var n=this.cloneNode(!1),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function h0(){var n=this.cloneNode(!0),e=this.parentNode;return e?e.insertBefore(n,this.nextSibling):n}function d0(n){return this.select(n?h0:f0)}function p0(n){return arguments.length?this.property("__data__",n):this.node().__data__}function m0(n){return function(e){n.call(this,e,this.__data__)}}function g0(n){return n.trim().split(/^|\s+/).map(function(e){var t="",i=e.indexOf(".");return i>=0&&(t=e.slice(i+1),e=e.slice(0,i)),{type:e,name:t}})}function _0(n){return function(){var e=this.__on;if(e){for(var t=0,i=-1,r=e.length,o;t<r;++t)o=e[t],(!n.type||o.type===n.type)&&o.name===n.name?this.removeEventListener(o.type,o.listener,o.options):e[++i]=o;++i?e.length=i:delete this.__on}}}function v0(n,e,t){return function(){var i=this.__on,r,o=m0(e);if(i){for(var a=0,s=i.length;a<s;++a)if((r=i[a]).type===n.type&&r.name===n.name){this.removeEventListener(r.type,r.listener,r.options),this.addEventListener(r.type,r.listener=o,r.options=t),r.value=e;return}}this.addEventListener(n.type,o,t),r={type:n.type,name:n.name,value:e,listener:o,options:t},i?i.push(r):this.__on=[r]}}function x0(n,e,t){var i=g0(n+""),r,o=i.length,a;if(arguments.length<2){var s=this.node().__on;if(s){for(var l=0,c=s.length,h;l<c;++l)for(r=0,h=s[l];r<o;++r)if((a=i[r]).type===h.type&&a.name===h.name)return h.value}return}for(s=e?v0:_0,r=0;r<o;++r)this.each(s(i[r],e,t));return this}function fm(n,e,t){var i=sm(n),r=i.CustomEvent;typeof r=="function"?r=new r(e,t):(r=i.document.createEvent("Event"),t?(r.initEvent(e,t.bubbles,t.cancelable),r.detail=t.detail):r.initEvent(e,!1,!1)),n.dispatchEvent(r)}function y0(n,e){return function(){return fm(this,n,e)}}function S0(n,e){return function(){return fm(this,n,e.apply(this,arguments))}}function M0(n,e){return this.each((typeof e=="function"?S0:y0)(n,e))}function*E0(){for(var n=this._groups,e=0,t=n.length;e<t;++e)for(var i=n[e],r=0,o=i.length,a;r<o;++r)(a=i[r])&&(yield a)}var hm=[null];function hn(n,e){this._groups=n,this._parents=e}function Ko(){return new hn([[document.documentElement]],hm)}function b0(){return this}hn.prototype=Ko.prototype={constructor:hn,select:K_,selectAll:ev,selectChild:rv,selectChildren:lv,filter:cv,data:mv,enter:uv,exit:_v,join:vv,merge:xv,selection:b0,order:yv,sort:Sv,call:Ev,nodes:bv,node:Tv,size:wv,empty:Av,each:Rv,attr:Iv,style:kv,property:Vv,classed:Yv,text:Zv,html:t0,raise:i0,lower:o0,append:s0,insert:l0,remove:u0,clone:d0,datum:p0,on:x0,dispatch:M0,[Symbol.iterator]:E0};function ch(n){return typeof n=="string"?new hn([[document.querySelector(n)]],[document.documentElement]):new hn([[n]],hm)}function pu(n,e,t){n.prototype=e.prototype=t,t.constructor=n}function dm(n,e){var t=Object.create(n.prototype);for(var i in e)t[i]=e[i];return t}function Zo(){}var ko=.7,_a=1/ko,kr="\\s*([+-]?\\d+)\\s*",zo="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",Hn="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",T0=/^#([0-9a-f]{3,8})$/,w0=new RegExp(`^rgb\\(${kr},${kr},${kr}\\)$`),A0=new RegExp(`^rgb\\(${Hn},${Hn},${Hn}\\)$`),R0=new RegExp(`^rgba\\(${kr},${kr},${kr},${zo}\\)$`),C0=new RegExp(`^rgba\\(${Hn},${Hn},${Hn},${zo}\\)$`),P0=new RegExp(`^hsl\\(${zo},${Hn},${Hn}\\)$`),L0=new RegExp(`^hsla\\(${zo},${Hn},${Hn},${zo}\\)$`),uh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};pu(Zo,Ki,{copy(n){return Object.assign(new this.constructor,this,n)},displayable(){return this.rgb().displayable()},hex:fh,formatHex:fh,formatHex8:D0,formatHsl:N0,formatRgb:hh,toString:hh});function fh(){return this.rgb().formatHex()}function D0(){return this.rgb().formatHex8()}function N0(){return pm(this).formatHsl()}function hh(){return this.rgb().formatRgb()}function Ki(n){var e,t;return n=(n+"").trim().toLowerCase(),(e=T0.exec(n))?(t=e[1].length,e=parseInt(e[1],16),t===6?dh(e):t===3?new on(e>>8&15|e>>4&240,e>>4&15|e&240,(e&15)<<4|e&15,1):t===8?Rs(e>>24&255,e>>16&255,e>>8&255,(e&255)/255):t===4?Rs(e>>12&15|e>>8&240,e>>8&15|e>>4&240,e>>4&15|e&240,((e&15)<<4|e&15)/255):null):(e=w0.exec(n))?new on(e[1],e[2],e[3],1):(e=A0.exec(n))?new on(e[1]*255/100,e[2]*255/100,e[3]*255/100,1):(e=R0.exec(n))?Rs(e[1],e[2],e[3],e[4]):(e=C0.exec(n))?Rs(e[1]*255/100,e[2]*255/100,e[3]*255/100,e[4]):(e=P0.exec(n))?gh(e[1],e[2]/100,e[3]/100,1):(e=L0.exec(n))?gh(e[1],e[2]/100,e[3]/100,e[4]):uh.hasOwnProperty(n)?dh(uh[n]):n==="transparent"?new on(NaN,NaN,NaN,0):null}function dh(n){return new on(n>>16&255,n>>8&255,n&255,1)}function Rs(n,e,t,i){return i<=0&&(n=e=t=NaN),new on(n,e,t,i)}function U0(n){return n instanceof Zo||(n=Ki(n)),n?(n=n.rgb(),new on(n.r,n.g,n.b,n.opacity)):new on}function Bc(n,e,t,i){return arguments.length===1?U0(n):new on(n,e,t,i??1)}function on(n,e,t,i){this.r=+n,this.g=+e,this.b=+t,this.opacity=+i}pu(on,Bc,dm(Zo,{brighter(n){return n=n==null?_a:Math.pow(_a,n),new on(this.r*n,this.g*n,this.b*n,this.opacity)},darker(n){return n=n==null?ko:Math.pow(ko,n),new on(this.r*n,this.g*n,this.b*n,this.opacity)},rgb(){return this},clamp(){return new on(qi(this.r),qi(this.g),qi(this.b),va(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:ph,formatHex:ph,formatHex8:I0,formatRgb:mh,toString:mh}));function ph(){return`#${Xi(this.r)}${Xi(this.g)}${Xi(this.b)}`}function I0(){return`#${Xi(this.r)}${Xi(this.g)}${Xi(this.b)}${Xi((isNaN(this.opacity)?1:this.opacity)*255)}`}function mh(){const n=va(this.opacity);return`${n===1?"rgb(":"rgba("}${qi(this.r)}, ${qi(this.g)}, ${qi(this.b)}${n===1?")":`, ${n})`}`}function va(n){return isNaN(n)?1:Math.max(0,Math.min(1,n))}function qi(n){return Math.max(0,Math.min(255,Math.round(n)||0))}function Xi(n){return n=qi(n),(n<16?"0":"")+n.toString(16)}function gh(n,e,t,i){return i<=0?n=e=t=NaN:t<=0||t>=1?n=e=NaN:e<=0&&(n=NaN),new Rn(n,e,t,i)}function pm(n){if(n instanceof Rn)return new Rn(n.h,n.s,n.l,n.opacity);if(n instanceof Zo||(n=Ki(n)),!n)return new Rn;if(n instanceof Rn)return n;n=n.rgb();var e=n.r/255,t=n.g/255,i=n.b/255,r=Math.min(e,t,i),o=Math.max(e,t,i),a=NaN,s=o-r,l=(o+r)/2;return s?(e===o?a=(t-i)/s+(t<i)*6:t===o?a=(i-e)/s+2:a=(e-t)/s+4,s/=l<.5?o+r:2-o-r,a*=60):s=l>0&&l<1?0:a,new Rn(a,s,l,n.opacity)}function O0(n,e,t,i){return arguments.length===1?pm(n):new Rn(n,e,t,i??1)}function Rn(n,e,t,i){this.h=+n,this.s=+e,this.l=+t,this.opacity=+i}pu(Rn,O0,dm(Zo,{brighter(n){return n=n==null?_a:Math.pow(_a,n),new Rn(this.h,this.s,this.l*n,this.opacity)},darker(n){return n=n==null?ko:Math.pow(ko,n),new Rn(this.h,this.s,this.l*n,this.opacity)},rgb(){var n=this.h%360+(this.h<0)*360,e=isNaN(n)||isNaN(this.s)?0:this.s,t=this.l,i=t+(t<.5?t:1-t)*e,r=2*t-i;return new on($l(n>=240?n-240:n+120,r,i),$l(n,r,i),$l(n<120?n+240:n-120,r,i),this.opacity)},clamp(){return new Rn(_h(this.h),Cs(this.s),Cs(this.l),va(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const n=va(this.opacity);return`${n===1?"hsl(":"hsla("}${_h(this.h)}, ${Cs(this.s)*100}%, ${Cs(this.l)*100}%${n===1?")":`, ${n})`}`}}));function _h(n){return n=(n||0)%360,n<0?n+360:n}function Cs(n){return Math.max(0,Math.min(1,n||0))}function $l(n,e,t){return(n<60?e+(t-e)*n/60:n<180?t:n<240?e+(t-e)*(240-n)/60:e)*255}const mu=n=>()=>n;function F0(n,e){return function(t){return n+t*e}}function B0(n,e,t){return n=Math.pow(n,t),e=Math.pow(e,t)-n,t=1/t,function(i){return Math.pow(n+i*e,t)}}function k0(n){return(n=+n)==1?mm:function(e,t){return t-e?B0(e,t,n):mu(isNaN(e)?t:e)}}function mm(n,e){var t=e-n;return t?F0(n,t):mu(isNaN(n)?e:n)}const xa=function n(e){var t=k0(e);function i(r,o){var a=t((r=Bc(r)).r,(o=Bc(o)).r),s=t(r.g,o.g),l=t(r.b,o.b),c=mm(r.opacity,o.opacity);return function(h){return r.r=a(h),r.g=s(h),r.b=l(h),r.opacity=c(h),r+""}}return i.gamma=n,i}(1);function z0(n,e){e||(e=[]);var t=n?Math.min(e.length,n.length):0,i=e.slice(),r;return function(o){for(r=0;r<t;++r)i[r]=n[r]*(1-o)+e[r]*o;return i}}function H0(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function G0(n,e){var t=e?e.length:0,i=n?Math.min(t,n.length):0,r=new Array(i),o=new Array(t),a;for(a=0;a<i;++a)r[a]=gu(n[a],e[a]);for(;a<t;++a)o[a]=e[a];return function(s){for(a=0;a<i;++a)o[a]=r[a](s);return o}}function V0(n,e){var t=new Date;return n=+n,e=+e,function(i){return t.setTime(n*(1-i)+e*i),t}}function wn(n,e){return n=+n,e=+e,function(t){return n*(1-t)+e*t}}function W0(n,e){var t={},i={},r;(n===null||typeof n!="object")&&(n={}),(e===null||typeof e!="object")&&(e={});for(r in e)r in n?t[r]=gu(n[r],e[r]):i[r]=e[r];return function(o){for(r in t)i[r]=t[r](o);return i}}var kc=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,jl=new RegExp(kc.source,"g");function X0(n){return function(){return n}}function q0(n){return function(e){return n(e)+""}}function gm(n,e){var t=kc.lastIndex=jl.lastIndex=0,i,r,o,a=-1,s=[],l=[];for(n=n+"",e=e+"";(i=kc.exec(n))&&(r=jl.exec(e));)(o=r.index)>t&&(o=e.slice(t,o),s[a]?s[a]+=o:s[++a]=o),(i=i[0])===(r=r[0])?s[a]?s[a]+=r:s[++a]=r:(s[++a]=null,l.push({i:a,x:wn(i,r)})),t=jl.lastIndex;return t<e.length&&(o=e.slice(t),s[a]?s[a]+=o:s[++a]=o),s.length<2?l[0]?q0(l[0].x):X0(e):(e=l.length,function(c){for(var h=0,f;h<e;++h)s[(f=l[h]).i]=f.x(c);return s.join("")})}function gu(n,e){var t=typeof e,i;return e==null||t==="boolean"?mu(e):(t==="number"?wn:t==="string"?(i=Ki(e))?(e=i,xa):gm:e instanceof Ki?xa:e instanceof Date?V0:H0(e)?z0:Array.isArray(e)?G0:typeof e.valueOf!="function"&&typeof e.toString!="function"||isNaN(e)?W0:wn)(n,e)}function Y0(n,e){return n=+n,e=+e,function(t){return Math.round(n*(1-t)+e*t)}}var vh=180/Math.PI,zc={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function _m(n,e,t,i,r,o){var a,s,l;return(a=Math.sqrt(n*n+e*e))&&(n/=a,e/=a),(l=n*t+e*i)&&(t-=n*l,i-=e*l),(s=Math.sqrt(t*t+i*i))&&(t/=s,i/=s,l/=s),n*i<e*t&&(n=-n,e=-e,l=-l,a=-a),{translateX:r,translateY:o,rotate:Math.atan2(e,n)*vh,skewX:Math.atan(l)*vh,scaleX:a,scaleY:s}}var Ps;function $0(n){const e=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(n+"");return e.isIdentity?zc:_m(e.a,e.b,e.c,e.d,e.e,e.f)}function j0(n){return n==null||(Ps||(Ps=document.createElementNS("http://www.w3.org/2000/svg","g")),Ps.setAttribute("transform",n),!(n=Ps.transform.baseVal.consolidate()))?zc:(n=n.matrix,_m(n.a,n.b,n.c,n.d,n.e,n.f))}function vm(n,e,t,i){function r(c){return c.length?c.pop()+" ":""}function o(c,h,f,d,m,v){if(c!==f||h!==d){var x=m.push("translate(",null,e,null,t);v.push({i:x-4,x:wn(c,f)},{i:x-2,x:wn(h,d)})}else(f||d)&&m.push("translate("+f+e+d+t)}function a(c,h,f,d){c!==h?(c-h>180?h+=360:h-c>180&&(c+=360),d.push({i:f.push(r(f)+"rotate(",null,i)-2,x:wn(c,h)})):h&&f.push(r(f)+"rotate("+h+i)}function s(c,h,f,d){c!==h?d.push({i:f.push(r(f)+"skewX(",null,i)-2,x:wn(c,h)}):h&&f.push(r(f)+"skewX("+h+i)}function l(c,h,f,d,m,v){if(c!==f||h!==d){var x=m.push(r(m)+"scale(",null,",",null,")");v.push({i:x-4,x:wn(c,f)},{i:x-2,x:wn(h,d)})}else(f!==1||d!==1)&&m.push(r(m)+"scale("+f+","+d+")")}return function(c,h){var f=[],d=[];return c=n(c),h=n(h),o(c.translateX,c.translateY,h.translateX,h.translateY,f,d),a(c.rotate,h.rotate,f,d),s(c.skewX,h.skewX,f,d),l(c.scaleX,c.scaleY,h.scaleX,h.scaleY,f,d),c=h=null,function(m){for(var v=-1,x=d.length,g;++v<x;)f[(g=d[v]).i]=g.x(m);return f.join("")}}}var K0=vm($0,"px, ","px)","deg)"),Z0=vm(j0,", ",")",")"),qr=0,Co=0,So=0,xm=1e3,ya,Po,Sa=0,Zi=0,Oa=0,Ho=typeof performance=="object"&&performance.now?performance:Date,ym=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(n){setTimeout(n,17)};function _u(){return Zi||(ym(J0),Zi=Ho.now()+Oa)}function J0(){Zi=0}function Ma(){this._call=this._time=this._next=null}Ma.prototype=Sm.prototype={constructor:Ma,restart:function(n,e,t){if(typeof n!="function")throw new TypeError("callback is not a function");t=(t==null?_u():+t)+(e==null?0:+e),!this._next&&Po!==this&&(Po?Po._next=this:ya=this,Po=this),this._call=n,this._time=t,Hc()},stop:function(){this._call&&(this._call=null,this._time=1/0,Hc())}};function Sm(n,e,t){var i=new Ma;return i.restart(n,e,t),i}function Q0(){_u(),++qr;for(var n=ya,e;n;)(e=Zi-n._time)>=0&&n._call.call(void 0,e),n=n._next;--qr}function xh(){Zi=(Sa=Ho.now())+Oa,qr=Co=0;try{Q0()}finally{qr=0,tx(),Zi=0}}function ex(){var n=Ho.now(),e=n-Sa;e>xm&&(Oa-=e,Sa=n)}function tx(){for(var n,e=ya,t,i=1/0;e;)e._call?(i>e._time&&(i=e._time),n=e,e=e._next):(t=e._next,e._next=null,e=n?n._next=t:ya=t);Po=n,Hc(i)}function Hc(n){if(!qr){Co&&(Co=clearTimeout(Co));var e=n-Zi;e>24?(n<1/0&&(Co=setTimeout(xh,n-Ho.now()-Oa)),So&&(So=clearInterval(So))):(So||(Sa=Ho.now(),So=setInterval(ex,xm)),qr=1,ym(xh))}}function yh(n,e,t){var i=new Ma;return e=e==null?0:+e,i.restart(r=>{i.stop(),n(r+e)},e,t),i}var nx=em("start","end","cancel","interrupt"),ix=[],Mm=0,Sh=1,Gc=2,ua=3,Mh=4,Vc=5,fa=6;function Fa(n,e,t,i,r,o){var a=n.__transition;if(!a)n.__transition={};else if(t in a)return;rx(n,t,{name:e,index:i,group:r,on:nx,tween:ix,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:Mm})}function vu(n,e){var t=In(n,e);if(t.state>Mm)throw new Error("too late; already scheduled");return t}function Wn(n,e){var t=In(n,e);if(t.state>ua)throw new Error("too late; already running");return t}function In(n,e){var t=n.__transition;if(!t||!(t=t[e]))throw new Error("transition not found");return t}function rx(n,e,t){var i=n.__transition,r;i[e]=t,t.timer=Sm(o,0,t.time);function o(c){t.state=Sh,t.timer.restart(a,t.delay,t.time),t.delay<=c&&a(c-t.delay)}function a(c){var h,f,d,m;if(t.state!==Sh)return l();for(h in i)if(m=i[h],m.name===t.name){if(m.state===ua)return yh(a);m.state===Mh?(m.state=fa,m.timer.stop(),m.on.call("interrupt",n,n.__data__,m.index,m.group),delete i[h]):+h<e&&(m.state=fa,m.timer.stop(),m.on.call("cancel",n,n.__data__,m.index,m.group),delete i[h])}if(yh(function(){t.state===ua&&(t.state=Mh,t.timer.restart(s,t.delay,t.time),s(c))}),t.state=Gc,t.on.call("start",n,n.__data__,t.index,t.group),t.state===Gc){for(t.state=ua,r=new Array(d=t.tween.length),h=0,f=-1;h<d;++h)(m=t.tween[h].value.call(n,n.__data__,t.index,t.group))&&(r[++f]=m);r.length=f+1}}function s(c){for(var h=c<t.duration?t.ease.call(null,c/t.duration):(t.timer.restart(l),t.state=Vc,1),f=-1,d=r.length;++f<d;)r[f].call(n,h);t.state===Vc&&(t.on.call("end",n,n.__data__,t.index,t.group),l())}function l(){t.state=fa,t.timer.stop(),delete i[e];for(var c in i)return;delete n.__transition}}function ox(n,e){var t=n.__transition,i,r,o=!0,a;if(t){e=e==null?null:e+"";for(a in t){if((i=t[a]).name!==e){o=!1;continue}r=i.state>Gc&&i.state<Vc,i.state=fa,i.timer.stop(),i.on.call(r?"interrupt":"cancel",n,n.__data__,i.index,i.group),delete t[a]}o&&delete n.__transition}}function sx(n){return this.each(function(){ox(this,n)})}function ax(n,e){var t,i;return function(){var r=Wn(this,n),o=r.tween;if(o!==t){i=t=o;for(var a=0,s=i.length;a<s;++a)if(i[a].name===e){i=i.slice(),i.splice(a,1);break}}r.tween=i}}function lx(n,e,t){var i,r;if(typeof t!="function")throw new Error;return function(){var o=Wn(this,n),a=o.tween;if(a!==i){r=(i=a).slice();for(var s={name:e,value:t},l=0,c=r.length;l<c;++l)if(r[l].name===e){r[l]=s;break}l===c&&r.push(s)}o.tween=r}}function cx(n,e){var t=this._id;if(n+="",arguments.length<2){for(var i=In(this.node(),t).tween,r=0,o=i.length,a;r<o;++r)if((a=i[r]).name===n)return a.value;return null}return this.each((e==null?ax:lx)(t,n,e))}function xu(n,e,t){var i=n._id;return n.each(function(){var r=Wn(this,i);(r.value||(r.value={}))[e]=t.apply(this,arguments)}),function(r){return In(r,i).value[e]}}function Em(n,e){var t;return(typeof e=="number"?wn:e instanceof Ki?xa:(t=Ki(e))?(e=t,xa):gm)(n,e)}function ux(n){return function(){this.removeAttribute(n)}}function fx(n){return function(){this.removeAttributeNS(n.space,n.local)}}function hx(n,e,t){var i,r=t+"",o;return function(){var a=this.getAttribute(n);return a===r?null:a===i?o:o=e(i=a,t)}}function dx(n,e,t){var i,r=t+"",o;return function(){var a=this.getAttributeNS(n.space,n.local);return a===r?null:a===i?o:o=e(i=a,t)}}function px(n,e,t){var i,r,o;return function(){var a,s=t(this),l;return s==null?void this.removeAttribute(n):(a=this.getAttribute(n),l=s+"",a===l?null:a===i&&l===r?o:(r=l,o=e(i=a,s)))}}function mx(n,e,t){var i,r,o;return function(){var a,s=t(this),l;return s==null?void this.removeAttributeNS(n.space,n.local):(a=this.getAttributeNS(n.space,n.local),l=s+"",a===l?null:a===i&&l===r?o:(r=l,o=e(i=a,s)))}}function gx(n,e){var t=Ia(n),i=t==="transform"?Z0:Em;return this.attrTween(n,typeof e=="function"?(t.local?mx:px)(t,i,xu(this,"attr."+n,e)):e==null?(t.local?fx:ux)(t):(t.local?dx:hx)(t,i,e))}function _x(n,e){return function(t){this.setAttribute(n,e.call(this,t))}}function vx(n,e){return function(t){this.setAttributeNS(n.space,n.local,e.call(this,t))}}function xx(n,e){var t,i;function r(){var o=e.apply(this,arguments);return o!==i&&(t=(i=o)&&vx(n,o)),t}return r._value=e,r}function yx(n,e){var t,i;function r(){var o=e.apply(this,arguments);return o!==i&&(t=(i=o)&&_x(n,o)),t}return r._value=e,r}function Sx(n,e){var t="attr."+n;if(arguments.length<2)return(t=this.tween(t))&&t._value;if(e==null)return this.tween(t,null);if(typeof e!="function")throw new Error;var i=Ia(n);return this.tween(t,(i.local?xx:yx)(i,e))}function Mx(n,e){return function(){vu(this,n).delay=+e.apply(this,arguments)}}function Ex(n,e){return e=+e,function(){vu(this,n).delay=e}}function bx(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?Mx:Ex)(e,n)):In(this.node(),e).delay}function Tx(n,e){return function(){Wn(this,n).duration=+e.apply(this,arguments)}}function wx(n,e){return e=+e,function(){Wn(this,n).duration=e}}function Ax(n){var e=this._id;return arguments.length?this.each((typeof n=="function"?Tx:wx)(e,n)):In(this.node(),e).duration}function Rx(n,e){if(typeof e!="function")throw new Error;return function(){Wn(this,n).ease=e}}function Cx(n){var e=this._id;return arguments.length?this.each(Rx(e,n)):In(this.node(),e).ease}function Px(n,e){return function(){var t=e.apply(this,arguments);if(typeof t!="function")throw new Error;Wn(this,n).ease=t}}function Lx(n){if(typeof n!="function")throw new Error;return this.each(Px(this._id,n))}function Dx(n){typeof n!="function"&&(n=im(n));for(var e=this._groups,t=e.length,i=new Array(t),r=0;r<t;++r)for(var o=e[r],a=o.length,s=i[r]=[],l,c=0;c<a;++c)(l=o[c])&&n.call(l,l.__data__,c,o)&&s.push(l);return new si(i,this._parents,this._name,this._id)}function Nx(n){if(n._id!==this._id)throw new Error;for(var e=this._groups,t=n._groups,i=e.length,r=t.length,o=Math.min(i,r),a=new Array(i),s=0;s<o;++s)for(var l=e[s],c=t[s],h=l.length,f=a[s]=new Array(h),d,m=0;m<h;++m)(d=l[m]||c[m])&&(f[m]=d);for(;s<i;++s)a[s]=e[s];return new si(a,this._parents,this._name,this._id)}function Ux(n){return(n+"").trim().split(/^|\s+/).every(function(e){var t=e.indexOf(".");return t>=0&&(e=e.slice(0,t)),!e||e==="start"})}function Ix(n,e,t){var i,r,o=Ux(e)?vu:Wn;return function(){var a=o(this,n),s=a.on;s!==i&&(r=(i=s).copy()).on(e,t),a.on=r}}function Ox(n,e){var t=this._id;return arguments.length<2?In(this.node(),t).on.on(n):this.each(Ix(t,n,e))}function Fx(n){return function(){var e=this.parentNode;for(var t in this.__transition)if(+t!==n)return;e&&e.removeChild(this)}}function Bx(){return this.on("end.remove",Fx(this._id))}function kx(n){var e=this._name,t=this._id;typeof n!="function"&&(n=hu(n));for(var i=this._groups,r=i.length,o=new Array(r),a=0;a<r;++a)for(var s=i[a],l=s.length,c=o[a]=new Array(l),h,f,d=0;d<l;++d)(h=s[d])&&(f=n.call(h,h.__data__,d,s))&&("__data__"in h&&(f.__data__=h.__data__),c[d]=f,Fa(c[d],e,t,d,c,In(h,t)));return new si(o,this._parents,e,t)}function zx(n){var e=this._name,t=this._id;typeof n!="function"&&(n=nm(n));for(var i=this._groups,r=i.length,o=[],a=[],s=0;s<r;++s)for(var l=i[s],c=l.length,h,f=0;f<c;++f)if(h=l[f]){for(var d=n.call(h,h.__data__,f,l),m,v=In(h,t),x=0,g=d.length;x<g;++x)(m=d[x])&&Fa(m,e,t,x,d,v);o.push(d),a.push(h)}return new si(o,a,e,t)}var Hx=Ko.prototype.constructor;function Gx(){return new Hx(this._groups,this._parents)}function Vx(n,e){var t,i,r;return function(){var o=Xr(this,n),a=(this.style.removeProperty(n),Xr(this,n));return o===a?null:o===t&&a===i?r:r=e(t=o,i=a)}}function bm(n){return function(){this.style.removeProperty(n)}}function Wx(n,e,t){var i,r=t+"",o;return function(){var a=Xr(this,n);return a===r?null:a===i?o:o=e(i=a,t)}}function Xx(n,e,t){var i,r,o;return function(){var a=Xr(this,n),s=t(this),l=s+"";return s==null&&(l=s=(this.style.removeProperty(n),Xr(this,n))),a===l?null:a===i&&l===r?o:(r=l,o=e(i=a,s))}}function qx(n,e){var t,i,r,o="style."+e,a="end."+o,s;return function(){var l=Wn(this,n),c=l.on,h=l.value[o]==null?s||(s=bm(e)):void 0;(c!==t||r!==h)&&(i=(t=c).copy()).on(a,r=h),l.on=i}}function Yx(n,e,t){var i=(n+="")=="transform"?K0:Em;return e==null?this.styleTween(n,Vx(n,i)).on("end.style."+n,bm(n)):typeof e=="function"?this.styleTween(n,Xx(n,i,xu(this,"style."+n,e))).each(qx(this._id,n)):this.styleTween(n,Wx(n,i,e),t).on("end.style."+n,null)}function $x(n,e,t){return function(i){this.style.setProperty(n,e.call(this,i),t)}}function jx(n,e,t){var i,r;function o(){var a=e.apply(this,arguments);return a!==r&&(i=(r=a)&&$x(n,a,t)),i}return o._value=e,o}function Kx(n,e,t){var i="style."+(n+="");if(arguments.length<2)return(i=this.tween(i))&&i._value;if(e==null)return this.tween(i,null);if(typeof e!="function")throw new Error;return this.tween(i,jx(n,e,t??""))}function Zx(n){return function(){this.textContent=n}}function Jx(n){return function(){var e=n(this);this.textContent=e??""}}function Qx(n){return this.tween("text",typeof n=="function"?Jx(xu(this,"text",n)):Zx(n==null?"":n+""))}function ey(n){return function(e){this.textContent=n.call(this,e)}}function ty(n){var e,t;function i(){var r=n.apply(this,arguments);return r!==t&&(e=(t=r)&&ey(r)),e}return i._value=n,i}function ny(n){var e="text";if(arguments.length<1)return(e=this.tween(e))&&e._value;if(n==null)return this.tween(e,null);if(typeof n!="function")throw new Error;return this.tween(e,ty(n))}function iy(){for(var n=this._name,e=this._id,t=Tm(),i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,l,c=0;c<s;++c)if(l=a[c]){var h=In(l,e);Fa(l,n,t,c,a,{time:h.time+h.delay+h.duration,delay:0,duration:h.duration,ease:h.ease})}return new si(i,this._parents,n,t)}function ry(){var n,e,t=this,i=t._id,r=t.size();return new Promise(function(o,a){var s={value:a},l={value:function(){--r===0&&o()}};t.each(function(){var c=Wn(this,i),h=c.on;h!==n&&(e=(n=h).copy(),e._.cancel.push(s),e._.interrupt.push(s),e._.end.push(l)),c.on=e}),r===0&&o()})}var oy=0;function si(n,e,t,i){this._groups=n,this._parents=e,this._name=t,this._id=i}function Tm(){return++oy}var $n=Ko.prototype;si.prototype={constructor:si,select:kx,selectAll:zx,selectChild:$n.selectChild,selectChildren:$n.selectChildren,filter:Dx,merge:Nx,selection:Gx,transition:iy,call:$n.call,nodes:$n.nodes,node:$n.node,size:$n.size,empty:$n.empty,each:$n.each,on:Ox,attr:gx,attrTween:Sx,style:Yx,styleTween:Kx,text:Qx,textTween:ny,remove:Bx,tween:cx,delay:bx,duration:Ax,ease:Cx,easeVarying:Lx,end:ry,[Symbol.iterator]:$n[Symbol.iterator]};function sy(n){return((n*=2)<=1?n*n*n:(n-=2)*n*n+2)/2}var ay={time:null,delay:0,duration:250,ease:sy};function ly(n,e){for(var t;!(t=n.__transition)||!(t=t[e]);)if(!(n=n.parentNode))throw new Error(`transition ${e} not found`);return t}function cy(n){var e,t;n instanceof si?(e=n._id,n=n._name):(e=Tm(),(t=ay).time=_u(),n=n==null?null:n+"");for(var i=this._groups,r=i.length,o=0;o<r;++o)for(var a=i[o],s=a.length,l,c=0;c<s;++c)(l=a[c])&&Fa(l,n,e,c,a,t||ly(l,e));return new si(i,this._parents,n,e)}Ko.prototype.interrupt=sx;Ko.prototype.transition=cy;const Wc=Math.PI,Xc=2*Wc,zi=1e-6,uy=Xc-zi;function wm(n){this._+=n[0];for(let e=1,t=n.length;e<t;++e)this._+=arguments[e]+n[e]}function fy(n){let e=Math.floor(n);if(!(e>=0))throw new Error(`invalid digits: ${n}`);if(e>15)return wm;const t=10**e;return function(i){this._+=i[0];for(let r=1,o=i.length;r<o;++r)this._+=Math.round(arguments[r]*t)/t+i[r]}}class hy{constructor(e){this._x0=this._y0=this._x1=this._y1=null,this._="",this._append=e==null?wm:fy(e)}moveTo(e,t){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}`}closePath(){this._x1!==null&&(this._x1=this._x0,this._y1=this._y0,this._append`Z`)}lineTo(e,t){this._append`L${this._x1=+e},${this._y1=+t}`}quadraticCurveTo(e,t,i,r){this._append`Q${+e},${+t},${this._x1=+i},${this._y1=+r}`}bezierCurveTo(e,t,i,r,o,a){this._append`C${+e},${+t},${+i},${+r},${this._x1=+o},${this._y1=+a}`}arcTo(e,t,i,r,o){if(e=+e,t=+t,i=+i,r=+r,o=+o,o<0)throw new Error(`negative radius: ${o}`);let a=this._x1,s=this._y1,l=i-e,c=r-t,h=a-e,f=s-t,d=h*h+f*f;if(this._x1===null)this._append`M${this._x1=e},${this._y1=t}`;else if(d>zi)if(!(Math.abs(f*l-c*h)>zi)||!o)this._append`L${this._x1=e},${this._y1=t}`;else{let m=i-a,v=r-s,x=l*l+c*c,g=m*m+v*v,_=Math.sqrt(x),A=Math.sqrt(d),b=o*Math.tan((Wc-Math.acos((x+d-g)/(2*_*A)))/2),S=b/A,C=b/_;Math.abs(S-1)>zi&&this._append`L${e+S*h},${t+S*f}`,this._append`A${o},${o},0,0,${+(f*m>h*v)},${this._x1=e+C*l},${this._y1=t+C*c}`}}arc(e,t,i,r,o,a){if(e=+e,t=+t,i=+i,a=!!a,i<0)throw new Error(`negative radius: ${i}`);let s=i*Math.cos(r),l=i*Math.sin(r),c=e+s,h=t+l,f=1^a,d=a?r-o:o-r;this._x1===null?this._append`M${c},${h}`:(Math.abs(this._x1-c)>zi||Math.abs(this._y1-h)>zi)&&this._append`L${c},${h}`,i&&(d<0&&(d=d%Xc+Xc),d>uy?this._append`A${i},${i},0,1,${f},${e-s},${t-l}A${i},${i},0,1,${f},${this._x1=c},${this._y1=h}`:d>zi&&this._append`A${i},${i},0,${+(d>=Wc)},${f},${this._x1=e+i*Math.cos(o)},${this._y1=t+i*Math.sin(o)}`)}rect(e,t,i,r){this._append`M${this._x0=this._x1=+e},${this._y0=this._y1=+t}h${i=+i}v${+r}h${-i}Z`}toString(){return this._}}var Eh={},Kl={},Zl=34,Mo=10,Jl=13;function Am(n){return new Function("d","return {"+n.map(function(e,t){return JSON.stringify(e)+": d["+t+'] || ""'}).join(",")+"}")}function dy(n,e){var t=Am(n);return function(i,r){return e(t(i),r,n)}}function bh(n){var e=Object.create(null),t=[];return n.forEach(function(i){for(var r in i)r in e||t.push(e[r]=r)}),t}function rn(n,e){var t=n+"",i=t.length;return i<e?new Array(e-i+1).join(0)+t:t}function py(n){return n<0?"-"+rn(-n,6):n>9999?"+"+rn(n,6):rn(n,4)}function my(n){var e=n.getUTCHours(),t=n.getUTCMinutes(),i=n.getUTCSeconds(),r=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":py(n.getUTCFullYear())+"-"+rn(n.getUTCMonth()+1,2)+"-"+rn(n.getUTCDate(),2)+(r?"T"+rn(e,2)+":"+rn(t,2)+":"+rn(i,2)+"."+rn(r,3)+"Z":i?"T"+rn(e,2)+":"+rn(t,2)+":"+rn(i,2)+"Z":t||e?"T"+rn(e,2)+":"+rn(t,2)+"Z":"")}function gy(n){var e=new RegExp('["'+n+`
\r]`),t=n.charCodeAt(0);function i(f,d){var m,v,x=r(f,function(g,_){if(m)return m(g,_-1);v=g,m=d?dy(g,d):Am(g)});return x.columns=v||[],x}function r(f,d){var m=[],v=f.length,x=0,g=0,_,A=v<=0,b=!1;f.charCodeAt(v-1)===Mo&&--v,f.charCodeAt(v-1)===Jl&&--v;function S(){if(A)return Kl;if(b)return b=!1,Eh;var D,R=x,Z;if(f.charCodeAt(R)===Zl){for(;x++<v&&f.charCodeAt(x)!==Zl||f.charCodeAt(++x)===Zl;);return(D=x)>=v?A=!0:(Z=f.charCodeAt(x++))===Mo?b=!0:Z===Jl&&(b=!0,f.charCodeAt(x)===Mo&&++x),f.slice(R+1,D-1).replace(/""/g,'"')}for(;x<v;){if((Z=f.charCodeAt(D=x++))===Mo)b=!0;else if(Z===Jl)b=!0,f.charCodeAt(x)===Mo&&++x;else if(Z!==t)continue;return f.slice(R,D)}return A=!0,f.slice(R,v)}for(;(_=S())!==Kl;){for(var C=[];_!==Eh&&_!==Kl;)C.push(_),_=S();d&&(C=d(C,g++))==null||m.push(C)}return m}function o(f,d){return f.map(function(m){return d.map(function(v){return h(m[v])}).join(n)})}function a(f,d){return d==null&&(d=bh(f)),[d.map(h).join(n)].concat(o(f,d)).join(`
`)}function s(f,d){return d==null&&(d=bh(f)),o(f,d).join(`
`)}function l(f){return f.map(c).join(`
`)}function c(f){return f.map(h).join(n)}function h(f){return f==null?"":f instanceof Date?my(f):e.test(f+="")?'"'+f.replace(/"/g,'""')+'"':f}return{parse:i,parseRows:r,format:a,formatBody:s,formatRows:l,formatRow:c,formatValue:h}}var _y=gy(","),vy=_y.parse;function xy(n){if(!n.ok)throw new Error(n.status+" "+n.statusText);return n.text()}function yy(n,e){return fetch(n,e).then(xy)}function Sy(n){return function(e,t,i){return arguments.length===2&&typeof t=="function"&&(i=t,t=void 0),yy(e,t).then(function(r){return n(r,i)})}}var Rm=Sy(vy);function My(n){return Math.abs(n=Math.round(n))>=1e21?n.toLocaleString("en").replace(/,/g,""):n.toString(10)}function Ea(n,e){if((t=(n=e?n.toExponential(e-1):n.toExponential()).indexOf("e"))<0)return null;var t,i=n.slice(0,t);return[i.length>1?i[0]+i.slice(2):i,+n.slice(t+1)]}function Yr(n){return n=Ea(Math.abs(n)),n?n[1]:NaN}function Ey(n,e){return function(t,i){for(var r=t.length,o=[],a=0,s=n[0],l=0;r>0&&s>0&&(l+s+1>i&&(s=Math.max(1,i-l)),o.push(t.substring(r-=s,r+s)),!((l+=s+1)>i));)s=n[a=(a+1)%n.length];return o.reverse().join(e)}}function by(n){return function(e){return e.replace(/[0-9]/g,function(t){return n[+t]})}}var Ty=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ba(n){if(!(e=Ty.exec(n)))throw new Error("invalid format: "+n);var e;return new yu({fill:e[1],align:e[2],sign:e[3],symbol:e[4],zero:e[5],width:e[6],comma:e[7],precision:e[8]&&e[8].slice(1),trim:e[9],type:e[10]})}ba.prototype=yu.prototype;function yu(n){this.fill=n.fill===void 0?" ":n.fill+"",this.align=n.align===void 0?">":n.align+"",this.sign=n.sign===void 0?"-":n.sign+"",this.symbol=n.symbol===void 0?"":n.symbol+"",this.zero=!!n.zero,this.width=n.width===void 0?void 0:+n.width,this.comma=!!n.comma,this.precision=n.precision===void 0?void 0:+n.precision,this.trim=!!n.trim,this.type=n.type===void 0?"":n.type+""}yu.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function wy(n){e:for(var e=n.length,t=1,i=-1,r;t<e;++t)switch(n[t]){case".":i=r=t;break;case"0":i===0&&(i=t),r=t;break;default:if(!+n[t])break e;i>0&&(i=0);break}return i>0?n.slice(0,i)+n.slice(r+1):n}var Cm;function Ay(n,e){var t=Ea(n,e);if(!t)return n+"";var i=t[0],r=t[1],o=r-(Cm=Math.max(-8,Math.min(8,Math.floor(r/3)))*3)+1,a=i.length;return o===a?i:o>a?i+new Array(o-a+1).join("0"):o>0?i.slice(0,o)+"."+i.slice(o):"0."+new Array(1-o).join("0")+Ea(n,Math.max(0,e+o-1))[0]}function Th(n,e){var t=Ea(n,e);if(!t)return n+"";var i=t[0],r=t[1];return r<0?"0."+new Array(-r).join("0")+i:i.length>r+1?i.slice(0,r+1)+"."+i.slice(r+1):i+new Array(r-i.length+2).join("0")}const wh={"%":(n,e)=>(n*100).toFixed(e),b:n=>Math.round(n).toString(2),c:n=>n+"",d:My,e:(n,e)=>n.toExponential(e),f:(n,e)=>n.toFixed(e),g:(n,e)=>n.toPrecision(e),o:n=>Math.round(n).toString(8),p:(n,e)=>Th(n*100,e),r:Th,s:Ay,X:n=>Math.round(n).toString(16).toUpperCase(),x:n=>Math.round(n).toString(16)};function Ah(n){return n}var Rh=Array.prototype.map,Ch=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function Ry(n){var e=n.grouping===void 0||n.thousands===void 0?Ah:Ey(Rh.call(n.grouping,Number),n.thousands+""),t=n.currency===void 0?"":n.currency[0]+"",i=n.currency===void 0?"":n.currency[1]+"",r=n.decimal===void 0?".":n.decimal+"",o=n.numerals===void 0?Ah:by(Rh.call(n.numerals,String)),a=n.percent===void 0?"%":n.percent+"",s=n.minus===void 0?"−":n.minus+"",l=n.nan===void 0?"NaN":n.nan+"";function c(f){f=ba(f);var d=f.fill,m=f.align,v=f.sign,x=f.symbol,g=f.zero,_=f.width,A=f.comma,b=f.precision,S=f.trim,C=f.type;C==="n"?(A=!0,C="g"):wh[C]||(b===void 0&&(b=12),S=!0,C="g"),(g||d==="0"&&m==="=")&&(g=!0,d="0",m="=");var D=x==="$"?t:x==="#"&&/[boxX]/.test(C)?"0"+C.toLowerCase():"",R=x==="$"?i:/[%p]/.test(C)?a:"",Z=wh[C],M=/[defgprs%]/.test(C);b=b===void 0?6:/[gprs]/.test(C)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b));function L(G){var se=D,ae=R,B,te,ue;if(C==="c")ae=Z(G)+ae,G="";else{G=+G;var re=G<0||1/G<0;if(G=isNaN(G)?l:Z(Math.abs(G),b),S&&(G=wy(G)),re&&+G==0&&v!=="+"&&(re=!1),se=(re?v==="("?v:s:v==="-"||v==="("?"":v)+se,ae=(C==="s"?Ch[8+Cm/3]:"")+ae+(re&&v==="("?")":""),M){for(B=-1,te=G.length;++B<te;)if(ue=G.charCodeAt(B),48>ue||ue>57){ae=(ue===46?r+G.slice(B+1):G.slice(B))+ae,G=G.slice(0,B);break}}}A&&!g&&(G=e(G,1/0));var ie=se.length+G.length+ae.length,q=ie<_?new Array(_-ie+1).join(d):"";switch(A&&g&&(G=e(q+G,q.length?_-ae.length:1/0),q=""),m){case"<":G=se+G+ae+q;break;case"=":G=se+q+G+ae;break;case"^":G=q.slice(0,ie=q.length>>1)+se+G+ae+q.slice(ie);break;default:G=q+se+G+ae;break}return o(G)}return L.toString=function(){return f+""},L}function h(f,d){var m=c((f=ba(f),f.type="f",f)),v=Math.max(-8,Math.min(8,Math.floor(Yr(d)/3)))*3,x=Math.pow(10,-v),g=Ch[8+v/3];return function(_){return m(x*_)+g}}return{format:c,formatPrefix:h}}var Ls,Pm,Lm;Cy({thousands:",",grouping:[3],currency:["$",""]});function Cy(n){return Ls=Ry(n),Pm=Ls.format,Lm=Ls.formatPrefix,Ls}function Py(n){return Math.max(0,-Yr(Math.abs(n)))}function Ly(n,e){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(Yr(e)/3)))*3-Yr(Math.abs(n)))}function Dy(n,e){return n=Math.abs(n),e=Math.abs(e)-n,Math.max(0,Yr(e)-Yr(n))+1}function Ny(n,e){switch(arguments.length){case 0:break;case 1:this.range(n);break;default:this.range(e).domain(n);break}return this}function Uy(n){return function(){return n}}function Iy(n){return+n}var Ph=[0,1];function Fr(n){return n}function qc(n,e){return(e-=n=+n)?function(t){return(t-n)/e}:Uy(isNaN(e)?NaN:.5)}function Oy(n,e){var t;return n>e&&(t=n,n=e,e=t),function(i){return Math.max(n,Math.min(e,i))}}function Fy(n,e,t){var i=n[0],r=n[1],o=e[0],a=e[1];return r<i?(i=qc(r,i),o=t(a,o)):(i=qc(i,r),o=t(o,a)),function(s){return o(i(s))}}function By(n,e,t){var i=Math.min(n.length,e.length)-1,r=new Array(i),o=new Array(i),a=-1;for(n[i]<n[0]&&(n=n.slice().reverse(),e=e.slice().reverse());++a<i;)r[a]=qc(n[a],n[a+1]),o[a]=t(e[a],e[a+1]);return function(s){var l=A_(n,s,1,i)-1;return o[l](r[l](s))}}function ky(n,e){return e.domain(n.domain()).range(n.range()).interpolate(n.interpolate()).clamp(n.clamp()).unknown(n.unknown())}function zy(){var n=Ph,e=Ph,t=gu,i,r,o,a=Fr,s,l,c;function h(){var d=Math.min(n.length,e.length);return a!==Fr&&(a=Oy(n[0],n[d-1])),s=d>2?By:Fy,l=c=null,f}function f(d){return d==null||isNaN(d=+d)?o:(l||(l=s(n.map(i),e,t)))(i(a(d)))}return f.invert=function(d){return a(r((c||(c=s(e,n.map(i),wn)))(d)))},f.domain=function(d){return arguments.length?(n=Array.from(d,Iy),h()):n.slice()},f.range=function(d){return arguments.length?(e=Array.from(d),h()):e.slice()},f.rangeRound=function(d){return e=Array.from(d),t=Y0,h()},f.clamp=function(d){return arguments.length?(a=d?!0:Fr,h()):a!==Fr},f.interpolate=function(d){return arguments.length?(t=d,h()):t},f.unknown=function(d){return arguments.length?(o=d,f):o},function(d,m){return i=d,r=m,h()}}function Hy(){return zy()(Fr,Fr)}function Gy(n,e,t,i){var r=N_(n,e,t),o;switch(i=ba(i??",f"),i.type){case"s":{var a=Math.max(Math.abs(n),Math.abs(e));return i.precision==null&&!isNaN(o=Ly(r,a))&&(i.precision=o),Lm(i,a)}case"":case"e":case"g":case"p":case"r":{i.precision==null&&!isNaN(o=Dy(r,Math.max(Math.abs(n),Math.abs(e))))&&(i.precision=o-(i.type==="e"));break}case"f":case"%":{i.precision==null&&!isNaN(o=Py(r))&&(i.precision=o-(i.type==="%")*2);break}}return Pm(i)}function Vy(n){var e=n.domain;return n.ticks=function(t){var i=e();return D_(i[0],i[i.length-1],t??10)},n.tickFormat=function(t,i){var r=e();return Gy(r[0],r[r.length-1],t??10,i)},n.nice=function(t){t==null&&(t=10);var i=e(),r=0,o=i.length-1,a=i[r],s=i[o],l,c,h=10;for(s<a&&(c=a,a=s,s=c,c=r,r=o,o=c);h-- >0;){if(c=Ic(a,s,t),c===l)return i[r]=a,i[o]=s,e(i);if(c>0)a=Math.floor(a/c)*c,s=Math.ceil(s/c)*c;else if(c<0)a=Math.ceil(a*c)/c,s=Math.floor(s*c)/c;else break;l=c}return n},n}function Yc(){var n=Hy();return n.copy=function(){return ky(n,Yc())},Ny.apply(n,arguments),Vy(n)}function pr(n){return function(){return n}}function Wy(n){let e=3;return n.digits=function(t){if(!arguments.length)return e;if(t==null)e=null;else{const i=Math.floor(t);if(!(i>=0))throw new RangeError(`invalid digits: ${t}`);e=i}return n},()=>new hy(e)}function Xy(n){return typeof n=="object"&&"length"in n?n:Array.from(n)}function Dm(n){this._context=n}Dm.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(n,e){switch(n=+n,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(n,e):this._context.moveTo(n,e);break;case 1:this._point=2;default:this._context.lineTo(n,e);break}}};function qy(n){return new Dm(n)}function Yy(n){return n[0]}function $y(n){return n[1]}function Lh(n,e){var t=pr(!0),i=null,r=qy,o=null,a=Wy(s);n=typeof n=="function"?n:n===void 0?Yy:pr(n),e=typeof e=="function"?e:e===void 0?$y:pr(e);function s(l){var c,h=(l=Xy(l)).length,f,d=!1,m;for(i==null&&(o=r(m=a())),c=0;c<=h;++c)!(c<h&&t(f=l[c],c,l))===d&&((d=!d)?o.lineStart():o.lineEnd()),d&&o.point(+n(f,c,l),+e(f,c,l));if(m)return o=null,m+""||null}return s.x=function(l){return arguments.length?(n=typeof l=="function"?l:pr(+l),s):n},s.y=function(l){return arguments.length?(e=typeof l=="function"?l:pr(+l),s):e},s.defined=function(l){return arguments.length?(t=typeof l=="function"?l:pr(!!l),s):t},s.curve=function(l){return arguments.length?(r=l,i!=null&&(o=r(i)),s):r},s.context=function(l){return arguments.length?(l==null?i=o=null:o=r(i=l),s):i},s}function Lo(n,e,t){this.k=n,this.x=e,this.y=t}Lo.prototype={constructor:Lo,scale:function(n){return n===1?this:new Lo(this.k*n,this.x,this.y)},translate:function(n,e){return n===0&e===0?this:new Lo(this.k,this.x+this.k*n,this.y+this.k*e)},apply:function(n){return[n[0]*this.k+this.x,n[1]*this.k+this.y]},applyX:function(n){return n*this.k+this.x},applyY:function(n){return n*this.k+this.y},invert:function(n){return[(n[0]-this.x)/this.k,(n[1]-this.y)/this.k]},invertX:function(n){return(n-this.x)/this.k},invertY:function(n){return(n-this.y)/this.k},rescaleX:function(n){return n.copy().domain(n.range().map(this.invertX,this).map(n.invert,n))},rescaleY:function(n){return n.copy().domain(n.range().map(this.invertY,this).map(n.invert,n))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};Lo.prototype;const Nm="/assets/music-qnR6ujUG.csv",gn={top:10,right:30,bottom:30,left:60},mr=960-gn.left-gn.right,Eo=400-gn.top-gn.bottom,jy=li(()=>(su(),qo(),Yo(()=>{const n=ch("svg").attr("width",mr+gn.left+gn.right).attr("height",Eo+gn.top+gn.bottom).append("g").attr("transform",`translate(${gn.left},${gn.top})`);Rm(Nm).then(function(e){e.forEach(function(l){l.Time=+l.Time,l.Amplitude=+l.Amplitude/1e9});const t=Yc().domain(R_(e,function(l){return l.Time})).range([0,mr-200]);n.append("g").attr("transform",`translate(0, ${Eo})`).call(G_(t));const i=Yc().domain([I_(e,function(l){return+l.Amplitude}),U_(e,function(l){return+l.Amplitude})]).range([Eo,0]);n.append("g").call(V_(i)),n.append("text").attr("transform","rotate(-90)").attr("y",0-gn.left+5).attr("x",0-Eo/2).attr("dy","1em").style("text-anchor","middle").text("amplitude"),n.append("text").attr("transform",`translate(${mr/2}, ${Eo+gn.top+20})`).style("text-anchor","middle").text("time");const r=n.append("path").datum(e).attr("fill","none").attr("stroke","steelblue").attr("stroke-width",1.5).attr("d",Lh().x(function(l){return t(l.Time)}).y(function(l){return i(l.Amplitude)})),o="width: "+mr+"px;";ch("#timeSlider").attr("style",o).attr("min",0).attr("max",e.length-1).attr("value",e.length-1).on("input",function(){const l=+this.value,c=e.slice(0,l);r.datum(c).attr("d",Lh().x(function(h){return t(h.Time)}).y(function(h){return i(h.Amplitude)})),a.attr("x1",t(e[l].Time)).attr("y1",i(e[l].Amplitude)).attr("y2",i(e[l].Amplitude)),s.text(`Amplitude: ${e[l].Amplitude.toFixed(2)}`).attr("y",i(e[l].Amplitude)-10)});const a=n.append("line").attr("x1",0).attr("y1",i(0)).attr("x2",mr).attr("y2",i(0)).attr("stroke-width",1).attr("stroke","red"),s=n.append("text").attr("x",mr-100).attr("y",i(0)-10).attr("fill","red").text("Amplitude: ")})},[]),j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task1_0"})}),j("div",{class:"content-div",children:[j("p",{children:"The quest to delineate music from noise is a fascinating study of sound and its perception. Our research endeavors to pinpoint the defining characteristics that separate the order and harmony of music from the perceived disorder of noise. This examination is rooted in the physics of sound waves and extends to the complex realms of auditory perception and cultural interpretation."}),j("p",{children:"Music is traditionally understood as a deliberate arrangement of sounds, marked by rhythm, melody, and harmony, intentionally composed to convey emotion and aesthetic pleasure. Noise, conversely, is often characterized as sound without deliberate structure, sometimes erratic and undesired, generally lacking the intentionality and organization inherent in music."}),j("div",{style:"display:flex; flex-direction:column",children:[j("svg",{width:"960",height:"500"}),j("input",{type:"range",id:"timeSlider",min:"0",max:"100",value:"100"})]}),j("p",{children:"Yet, the demarcation between music and noise is not absolute; it is influenced by individual and cultural subjectivities. The patter of rain may be intrusive to some, yet soothing to others. Our research focuses on the objective qualities of these auditory phenomena, exploring their acoustic properties in an effort to classify and understand them within a scientific and cultural framework. Through this investigation, we aim to refine our understanding of sound patterns, enhancing our ability to discern the complex structure using various visualization techniques."})]})]}))),Ky=li(()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task1_1"})}),j("div",{class:"content-div",children:[j("p",{children:"This visualization demonstrates the difference in the audio-temporal spectrum of noise vs. music."}),j("p",{children:"The spectrogram is a visual representation of sound where time is displayed on the horizontal axis, and frequency (pitch) is on the vertical axis. The colors represent the intensity or loudness of the sound at each frequency and point in time; brighter colors mean more energy at that frequency at that moment. In this spectrogram, we observe shallow horizontal lines and patterns that indicate the presence of tones or notes, which are stable frequencies over time. We also see a higher intensity in the 100-1000 Hz range, which represents the more discernable tones or notes that are more sensible for human auditory perception. This structure is characteristic of music or voice, where specific notes are hit and held, creating a pattern that can be followed and anticipated. These patterns represent the order within sound, the underpinning of what we perceive as music or structured vocalization."}),j("p",{children:"TODO: explain more when zoomed in"}),j("p",{children:"Contrast this with the noisy audio spectrogram. Here we see a very different story. Instead of lines and patterns, there is a more homogenous spread of color. This indicates that there is energy at many frequencies without the clear structure or repetition we see in the voice spectrogram. This is what we perceive as noisy sound with no discernible pattern or predictability. It's akin to a crowded room where multiple conversations meld into a constant hum, versus a soloist whose every note can be distinguished."}),j("p",{children:"In the noisy spectrogram, note the sporadic red dots labeled as 'Noise.' These dots are likely instances of particularly loud, abrupt noises that stand out from the ambient sound. These are momentary disruptions that punctuate the noise."}),j("p",{children:["From these visualizations, we can deduce several patterns that distinguish music from noise:",j("ol",{children:[j("li",{children:"1. Structure: Music shows patterns, like the lines in the voice spectrogram, while noise does not."}),j("li",{children:"2. Repetition: Music often has repeating elements, indicative of rhythm or melody, which are absent in noise."}),j("li",{children:"3. Stability: The stable presence of certain frequencies in music contrasts with the erratic frequencies in noise."}),j("li",{children:"4. Intensity Variations: In music, some frequencies will be more prominent (brighter colors), aligning with the musical composition's dynamics."})]})]}),j("p",{children:"By observing these characteristics, we can easily identify structured music and the chaotic noise. This understanding not only enriches our auditory experiences but also has practical applications, like noise cancellation, audio filtering, and sound design, where separating music from noise is essential."})]})]})),Zy=()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task1_2"})}),j("div",{class:"content-div",children:[j("p",{children:"In this visualization, we are presented with two sets of images that compare 'Lower Level' and 'Higher Level' features of music and noise. These representations help us explore the complexity of sounds and how they can be analyzed and differentiated by levels of abstraction."}),j("p",{children:"Lower Level Feature Comparison: We use a trained neural network to convert lower level music features into mosaic images. The lower level features can be amplitude, frequency, or other acoustic properties of sound that are more specific and granular to a smaller portion of the audio spectrum. The mosaic images are created by taking the average of the lower level features over time, creating a visual representation of the sound's acoustic properties."}),j("p",{children:"The mosaic representation of music has cooler colors with intermittent bursts of warmer hues. This suggests a level of consistency with occasional variations, akin to a musical composition with a steady rhythm and occasional accents or harmonies. In music, these features could represent the basic sound waves produced by an instrument or voice, showing variations in pitch and loudness but within a controlled and structured environment."}),j("p",{children:"The noise representation, however, appears more erratic, with an almost equal distribution of colors without any discernible pattern or order. This is indicative of the randomness of noise, where there is no intentional structuring of sound waves. In a noisy environment, the sound waves from different sources collide and combine without any synchronization, leading to a chaotic mix that lacks the organization found in music."}),j("h1",{children:"Higher Level Feature Comparison:"}),j("p",{children:"The higher level features present a more abstract representation. These can be symbolic, such as score, piano roll, and onset time. They can also be non-symbolic like F0 trajectory, rhythm, and beats. The 'Music' image shows a series of parallel lines, suggesting a repetitive pattern. In the context of music, these could represent more complex aspects such as melody and rhythm that repeat over time, creating the harmony and structure that we associate with songs or compositions."}),j("p",{children:"Conversely, the noise image, while also showing lines, presents them at angles, creating a less uniform appearance. This could be interpreted as the higher level abstraction of noise, where even if there are patterns, they do not align in a harmonious or predictable way. They could represent the variations in volume and frequency over time in a noisy environment, which may have some structure but not in the organized, rhythmic fashion of music."}),j("p",{children:["From these visualizations, we can observe that:",j("blockquote",{children:"Music tends to have both low and high-level features that exhibit some form of repetition and structure, whether it be in the consistent use of certain tones or the rhythmic patterns that define a piece's tempo and melody. Noise, while it may have some patterns at a high level, does not show the same degree of organization or predictability. Its features are more dispersed and less structured, reflecting its chaotic nature."})]}),j("p",{children:"In essence, this interactive design allows us to see beyond what we can hear, providing a visual map to the unseen architecture of sound. Through this lens, we gain a deeper understanding of the complex layers that differentiate the ordered beauty of music from the disordered tapestry of noise."})]})]});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Su="158",gr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},_r={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Jy=0,Dh=1,Qy=2,Um=1,eS=2,ei=3,Ti=0,sn=1,ti=2,Mi=0,zr=1,Nh=2,Uh=3,Ih=4,tS=5,Vi=100,nS=101,iS=102,Oh=103,Fh=104,rS=200,oS=201,sS=202,aS=203,$c=204,jc=205,lS=206,cS=207,uS=208,fS=209,hS=210,dS=211,pS=212,mS=213,gS=214,_S=0,vS=1,xS=2,Ta=3,yS=4,SS=5,MS=6,ES=7,Im=0,bS=1,TS=2,Ei=0,wS=1,AS=2,RS=3,CS=4,PS=5,Om=300,$r=301,jr=302,Kc=303,Zc=304,Ba=306,Jc=1e3,Cn=1001,Qc=1002,Jt=1003,Bh=1004,Ql=1005,_n=1006,LS=1007,Go=1008,bi=1009,DS=1010,NS=1011,Mu=1012,Fm=1013,xi=1014,yi=1015,Vo=1016,Bm=1017,km=1018,Yi=1020,US=1021,Pn=1023,IS=1024,OS=1025,$i=1026,Kr=1027,FS=1028,zm=1029,BS=1030,Hm=1031,Gm=1033,ec=33776,tc=33777,nc=33778,ic=33779,kh=35840,zh=35841,Hh=35842,Gh=35843,kS=36196,Vh=37492,Wh=37496,Xh=37808,qh=37809,Yh=37810,$h=37811,jh=37812,Kh=37813,Zh=37814,Jh=37815,Qh=37816,ed=37817,td=37818,nd=37819,id=37820,rd=37821,rc=36492,od=36494,sd=36495,zS=36283,ad=36284,ld=36285,cd=36286,Vm=3e3,ji=3001,HS=3200,GS=3201,VS=0,WS=1,xn="",Gt="srgb",ai="srgb-linear",Eu="display-p3",ka="display-p3-linear",wa="linear",St="srgb",Aa="rec709",Ra="p3",vr=7680,ud=519,XS=512,qS=513,YS=514,$S=515,jS=516,KS=517,ZS=518,JS=519,fd=35044,hd="300 es",eu=1035,ii=2e3,Ca=2001;class nr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const o=r.indexOf(t);o!==-1&&r.splice(o,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let o=0,a=r.length;o<a;o++)r[o].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let dd=1234567;const Io=Math.PI/180,Wo=180/Math.PI;function Qr(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function $t(n,e,t){return Math.max(e,Math.min(t,n))}function bu(n,e){return(n%e+e)%e}function QS(n,e,t,i,r){return i+(n-e)*(r-i)/(t-e)}function eM(n,e,t){return n!==e?(t-n)/(e-n):0}function Oo(n,e,t){return(1-t)*n+t*e}function tM(n,e,t,i){return Oo(n,e,1-Math.exp(-t*i))}function nM(n,e=1){return e-Math.abs(bu(n,e*2)-e)}function iM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function rM(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function oM(n,e){return n+Math.floor(Math.random()*(e-n+1))}function sM(n,e){return n+Math.random()*(e-n)}function aM(n){return n*(.5-Math.random())}function lM(n){n!==void 0&&(dd=n);let e=dd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function cM(n){return n*Io}function uM(n){return n*Wo}function tu(n){return(n&n-1)===0&&n!==0}function fM(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function Pa(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function hM(n,e,t,i,r){const o=Math.cos,a=Math.sin,s=o(t/2),l=a(t/2),c=o((e+i)/2),h=a((e+i)/2),f=o((e-i)/2),d=a((e-i)/2),m=o((i-e)/2),v=a((i-e)/2);switch(r){case"XYX":n.set(s*h,l*f,l*d,s*c);break;case"YZY":n.set(l*d,s*h,l*f,s*c);break;case"ZXZ":n.set(l*f,l*d,s*h,s*c);break;case"XZX":n.set(s*h,l*v,l*m,s*c);break;case"YXY":n.set(l*m,s*h,l*v,s*c);break;case"ZYZ":n.set(l*v,l*m,s*h,s*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Ir(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Kt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const dM={DEG2RAD:Io,RAD2DEG:Wo,generateUUID:Qr,clamp:$t,euclideanModulo:bu,mapLinear:QS,inverseLerp:eM,lerp:Oo,damp:tM,pingpong:nM,smoothstep:iM,smootherstep:rM,randInt:oM,randFloat:sM,randFloatSpread:aM,seededRandom:lM,degToRad:cM,radToDeg:uM,isPowerOfTwo:tu,ceilPowerOfTwo:fM,floorPowerOfTwo:Pa,setQuaternionFromProperEuler:hM,normalize:Kt,denormalize:Ir};class st{constructor(e=0,t=0){st.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),o=this.x-e.x,a=this.y-e.y;return this.x=o*i-a*r+e.x,this.y=o*r+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ot{constructor(e,t,i,r,o,a,s,l,c){ot.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c)}set(e,t,i,r,o,a,s,l,c){const h=this.elements;return h[0]=e,h[1]=r,h[2]=s,h[3]=t,h[4]=o,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[3],l=i[6],c=i[1],h=i[4],f=i[7],d=i[2],m=i[5],v=i[8],x=r[0],g=r[3],_=r[6],A=r[1],b=r[4],S=r[7],C=r[2],D=r[5],R=r[8];return o[0]=a*x+s*A+l*C,o[3]=a*g+s*b+l*D,o[6]=a*_+s*S+l*R,o[1]=c*x+h*A+f*C,o[4]=c*g+h*b+f*D,o[7]=c*_+h*S+f*R,o[2]=d*x+m*A+v*C,o[5]=d*g+m*b+v*D,o[8]=d*_+m*S+v*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*s*c-i*o*h+i*s*l+r*o*c-r*a*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=h*a-s*c,d=s*l-h*o,m=c*o-a*l,v=t*f+i*d+r*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/v;return e[0]=f*x,e[1]=(r*c-h*i)*x,e[2]=(s*i-r*a)*x,e[3]=d*x,e[4]=(h*t-r*l)*x,e[5]=(r*o-s*t)*x,e[6]=m*x,e[7]=(i*l-c*t)*x,e[8]=(a*t-i*o)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,o,a,s){const l=Math.cos(o),c=Math.sin(o);return this.set(i*l,i*c,-i*(l*a+c*s)+a+e,-r*c,r*l,-r*(-c*a+l*s)+s+t,0,0,1),this}scale(e,t){return this.premultiply(oc.makeScale(e,t)),this}rotate(e){return this.premultiply(oc.makeRotation(-e)),this}translate(e,t){return this.premultiply(oc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const oc=new ot;function Wm(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function La(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function pM(){const n=La("canvas");return n.style.display="block",n}const pd={};function Fo(n){n in pd||(pd[n]=!0,console.warn(n))}const md=new ot().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gd=new ot().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ds={[ai]:{transfer:wa,primaries:Aa,toReference:n=>n,fromReference:n=>n},[Gt]:{transfer:St,primaries:Aa,toReference:n=>n.convertSRGBToLinear(),fromReference:n=>n.convertLinearToSRGB()},[ka]:{transfer:wa,primaries:Ra,toReference:n=>n.applyMatrix3(gd),fromReference:n=>n.applyMatrix3(md)},[Eu]:{transfer:St,primaries:Ra,toReference:n=>n.convertSRGBToLinear().applyMatrix3(gd),fromReference:n=>n.applyMatrix3(md).convertLinearToSRGB()}},mM=new Set([ai,ka]),gt={enabled:!0,_workingColorSpace:ai,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(n){if(!mM.has(n))throw new Error(`Unsupported working color space, "${n}".`);this._workingColorSpace=n},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=Ds[e].toReference,r=Ds[t].fromReference;return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this._workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this._workingColorSpace)},getPrimaries:function(n){return Ds[n].primaries},getTransfer:function(n){return n===xn?wa:Ds[n].transfer}};function Hr(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function sc(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let xr;class Xm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{xr===void 0&&(xr=La("canvas")),xr.width=e.width,xr.height=e.height;const i=xr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=xr}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=La("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),o=r.data;for(let a=0;a<o.length;a++)o[a]=Hr(o[a]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Hr(t[i]/255)*255):t[i]=Hr(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let gM=0;class qm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=Qr(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let o;if(Array.isArray(r)){o=[];for(let a=0,s=r.length;a<s;a++)r[a].isDataTexture?o.push(ac(r[a].image)):o.push(ac(r[a]))}else o=ac(r);i.url=o}return t||(e.images[this.uuid]=i),i}}function ac(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Xm.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let _M=0;class fn extends nr{constructor(e=fn.DEFAULT_IMAGE,t=fn.DEFAULT_MAPPING,i=Cn,r=Cn,o=_n,a=Go,s=Pn,l=bi,c=fn.DEFAULT_ANISOTROPY,h=xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Qr(),this.name="",this.source=new qm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=o,this.minFilter=a,this.anisotropy=c,this.format=s,this.internalFormat=null,this.type=l,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ot,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof h=="string"?this.colorSpace=h:(Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=h===ji?Gt:xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Om)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Jc:e.x=e.x-Math.floor(e.x);break;case Cn:e.x=e.x<0?0:1;break;case Qc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Jc:e.y=e.y-Math.floor(e.y);break;case Cn:e.y=e.y<0?0:1;break;case Qc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Gt?ji:Vm}set encoding(e){Fo("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===ji?Gt:xn}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=Om;fn.DEFAULT_ANISOTROPY=1;class Vt{constructor(e=0,t=0,i=0,r=1){Vt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*r+a[12]*o,this.y=a[1]*t+a[5]*i+a[9]*r+a[13]*o,this.z=a[2]*t+a[6]*i+a[10]*r+a[14]*o,this.w=a[3]*t+a[7]*i+a[11]*r+a[15]*o,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,o;const l=e.elements,c=l[0],h=l[4],f=l[8],d=l[1],m=l[5],v=l[9],x=l[2],g=l[6],_=l[10];if(Math.abs(h-d)<.01&&Math.abs(f-x)<.01&&Math.abs(v-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(f+x)<.1&&Math.abs(v+g)<.1&&Math.abs(c+m+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const b=(c+1)/2,S=(m+1)/2,C=(_+1)/2,D=(h+d)/4,R=(f+x)/4,Z=(v+g)/4;return b>S&&b>C?b<.01?(i=0,r=.707106781,o=.707106781):(i=Math.sqrt(b),r=D/i,o=R/i):S>C?S<.01?(i=.707106781,r=0,o=.707106781):(r=Math.sqrt(S),i=D/r,o=Z/r):C<.01?(i=.707106781,r=.707106781,o=0):(o=Math.sqrt(C),i=R/o,r=Z/o),this.set(i,r,o,t),this}let A=Math.sqrt((g-v)*(g-v)+(f-x)*(f-x)+(d-h)*(d-h));return Math.abs(A)<.001&&(A=1),this.x=(g-v)/A,this.y=(f-x)/A,this.z=(d-h)/A,this.w=Math.acos((c+m+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vM extends nr{constructor(e=1,t=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(Fo("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===ji?Gt:xn),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:_n,depthBuffer:!0,stencilBuffer:!1,depthTexture:null,samples:0},i),this.texture=new fn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps,this.texture.internalFormat=i.internalFormat,this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new qm(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends vM{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Ym extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xM extends fn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=Jt,this.minFilter=Jt,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,o,a,s){let l=i[r+0],c=i[r+1],h=i[r+2],f=i[r+3];const d=o[a+0],m=o[a+1],v=o[a+2],x=o[a+3];if(s===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f;return}if(s===1){e[t+0]=d,e[t+1]=m,e[t+2]=v,e[t+3]=x;return}if(f!==x||l!==d||c!==m||h!==v){let g=1-s;const _=l*d+c*m+h*v+f*x,A=_>=0?1:-1,b=1-_*_;if(b>Number.EPSILON){const C=Math.sqrt(b),D=Math.atan2(C,_*A);g=Math.sin(g*D)/C,s=Math.sin(s*D)/C}const S=s*A;if(l=l*g+d*S,c=c*g+m*S,h=h*g+v*S,f=f*g+x*S,g===1-s){const C=1/Math.sqrt(l*l+c*c+h*h+f*f);l*=C,c*=C,h*=C,f*=C}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,i,r,o,a){const s=i[r],l=i[r+1],c=i[r+2],h=i[r+3],f=o[a],d=o[a+1],m=o[a+2],v=o[a+3];return e[t]=s*v+h*f+l*m-c*d,e[t+1]=l*v+h*d+c*f-s*m,e[t+2]=c*v+h*m+s*d-l*f,e[t+3]=h*v-s*f-l*d-c*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,o=e._z,a=e._order,s=Math.cos,l=Math.sin,c=s(i/2),h=s(r/2),f=s(o/2),d=l(i/2),m=l(r/2),v=l(o/2);switch(a){case"XYZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"YXZ":this._x=d*h*f+c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"ZXY":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f-d*m*v;break;case"ZYX":this._x=d*h*f-c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f+d*m*v;break;case"YZX":this._x=d*h*f+c*m*v,this._y=c*m*f+d*h*v,this._z=c*h*v-d*m*f,this._w=c*h*f-d*m*v;break;case"XZY":this._x=d*h*f-c*m*v,this._y=c*m*f-d*h*v,this._z=c*h*v+d*m*f,this._w=c*h*f+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],o=t[8],a=t[1],s=t[5],l=t[9],c=t[2],h=t[6],f=t[10],d=i+s+f;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(h-l)*m,this._y=(o-c)*m,this._z=(a-r)*m}else if(i>s&&i>f){const m=2*Math.sqrt(1+i-s-f);this._w=(h-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(o+c)/m}else if(s>f){const m=2*Math.sqrt(1+s-i-f);this._w=(o-c)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-i-s);this._w=(a-r)/m,this._x=(o+c)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs($t(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,o=e._z,a=e._w,s=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+a*s+r*c-o*l,this._y=r*h+a*l+o*s-i*c,this._z=o*h+a*c+i*l-r*s,this._w=a*h-i*s-r*l-o*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,o=this._z,a=this._w;let s=a*e._w+i*e._x+r*e._y+o*e._z;if(s<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,s=-s):this.copy(e),s>=1)return this._w=a,this._x=i,this._y=r,this._z=o,this;const l=1-s*s;if(l<=Number.EPSILON){const m=1-t;return this._w=m*a+t*this._w,this._x=m*i+t*this._x,this._y=m*r+t*this._y,this._z=m*o+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),h=Math.atan2(c,s),f=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=a*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=o*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),o=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(o),i*Math.cos(o),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class V{constructor(e=0,t=0,i=0){V.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_d.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_d.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[3]*i+o[6]*r,this.y=o[1]*t+o[4]*i+o[7]*r,this.z=o[2]*t+o[5]*i+o[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,o=e.elements,a=1/(o[3]*t+o[7]*i+o[11]*r+o[15]);return this.x=(o[0]*t+o[4]*i+o[8]*r+o[12])*a,this.y=(o[1]*t+o[5]*i+o[9]*r+o[13])*a,this.z=(o[2]*t+o[6]*i+o[10]*r+o[14])*a,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,o=e.x,a=e.y,s=e.z,l=e.w,c=2*(a*r-s*i),h=2*(s*t-o*r),f=2*(o*i-a*t);return this.x=t+l*c+a*f-s*h,this.y=i+l*h+s*c-o*f,this.z=r+l*f+o*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r,this.y=o[1]*t+o[5]*i+o[9]*r,this.z=o[2]*t+o[6]*i+o[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,o=e.z,a=t.x,s=t.y,l=t.z;return this.x=r*l-o*s,this.y=o*a-i*l,this.z=i*s-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return lc.copy(this).projectOnVector(e),this.sub(lc)}reflect(e){return this.sub(lc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos($t(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const lc=new V,_d=new Qi;class Jo{constructor(e=new V(1/0,1/0,1/0),t=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(En.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(En.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=En.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const o=i.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let a=0,s=o.count;a<s;a++)e.isMesh===!0?e.getVertexPosition(a,En):En.fromBufferAttribute(o,a),En.applyMatrix4(e.matrixWorld),this.expandByPoint(En);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ns.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ns.copy(i.boundingBox)),Ns.applyMatrix4(e.matrixWorld),this.union(Ns)}const r=e.children;for(let o=0,a=r.length;o<a;o++)this.expandByObject(r[o],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,En),En.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(bo),Us.subVectors(this.max,bo),yr.subVectors(e.a,bo),Sr.subVectors(e.b,bo),Mr.subVectors(e.c,bo),di.subVectors(Sr,yr),pi.subVectors(Mr,Sr),Oi.subVectors(yr,Mr);let t=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Oi.z,Oi.y,di.z,0,-di.x,pi.z,0,-pi.x,Oi.z,0,-Oi.x,-di.y,di.x,0,-pi.y,pi.x,0,-Oi.y,Oi.x,0];return!cc(t,yr,Sr,Mr,Us)||(t=[1,0,0,0,1,0,0,0,1],!cc(t,yr,Sr,Mr,Us))?!1:(Is.crossVectors(di,pi),t=[Is.x,Is.y,Is.z],cc(t,yr,Sr,Mr,Us))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,En).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(En).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(jn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),jn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),jn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),jn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),jn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),jn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),jn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),jn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(jn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const jn=[new V,new V,new V,new V,new V,new V,new V,new V],En=new V,Ns=new Jo,yr=new V,Sr=new V,Mr=new V,di=new V,pi=new V,Oi=new V,bo=new V,Us=new V,Is=new V,Fi=new V;function cc(n,e,t,i,r){for(let o=0,a=n.length-3;o<=a;o+=3){Fi.fromArray(n,o);const s=r.x*Math.abs(Fi.x)+r.y*Math.abs(Fi.y)+r.z*Math.abs(Fi.z),l=e.dot(Fi),c=t.dot(Fi),h=i.dot(Fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>s)return!1}return!0}const yM=new Jo,To=new V,uc=new V;class Qo{constructor(e=new V,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):yM.setFromPoints(e).getCenter(i);let r=0;for(let o=0,a=e.length;o<a;o++)r=Math.max(r,i.distanceToSquared(e[o]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;To.subVectors(e,this.center);const t=To.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(To,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(uc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(To.copy(e.center).add(uc)),this.expandByPoint(To.copy(e.center).sub(uc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Kn=new V,fc=new V,Os=new V,mi=new V,hc=new V,Fs=new V,dc=new V;class za{constructor(e=new V,t=new V(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Kn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Kn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Kn.copy(this.origin).addScaledVector(this.direction,t),Kn.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){fc.copy(e).add(t).multiplyScalar(.5),Os.copy(t).sub(e).normalize(),mi.copy(this.origin).sub(fc);const o=e.distanceTo(t)*.5,a=-this.direction.dot(Os),s=mi.dot(this.direction),l=-mi.dot(Os),c=mi.lengthSq(),h=Math.abs(1-a*a);let f,d,m,v;if(h>0)if(f=a*l-s,d=a*s-l,v=o*h,f>=0)if(d>=-v)if(d<=v){const x=1/h;f*=x,d*=x,m=f*(f+a*d+2*s)+d*(a*f+d+2*l)+c}else d=o,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;else d=-o,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;else d<=-v?(f=Math.max(0,-(-a*o+s)),d=f>0?-o:Math.min(Math.max(-o,-l),o),m=-f*f+d*(d+2*l)+c):d<=v?(f=0,d=Math.min(Math.max(-o,-l),o),m=d*(d+2*l)+c):(f=Math.max(0,-(a*o+s)),d=f>0?o:Math.min(Math.max(-o,-l),o),m=-f*f+d*(d+2*l)+c);else d=a>0?-o:o,f=Math.max(0,-(a*d+s)),m=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(fc).addScaledVector(Os,d),m}intersectSphere(e,t){Kn.subVectors(e.center,this.origin);const i=Kn.dot(this.direction),r=Kn.dot(Kn)-i*i,o=e.radius*e.radius;if(r>o)return null;const a=Math.sqrt(o-r),s=i-a,l=i+a;return l<0?null:s<0?this.at(l,t):this.at(s,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,o,a,s,l;const c=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),h>=0?(o=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(o=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||o>r||((o>i||isNaN(i))&&(i=o),(a<r||isNaN(r))&&(r=a),f>=0?(s=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(s=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||s>r)||((s>i||i!==i)&&(i=s),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Kn)!==null}intersectTriangle(e,t,i,r,o){hc.subVectors(t,e),Fs.subVectors(i,e),dc.crossVectors(hc,Fs);let a=this.direction.dot(dc),s;if(a>0){if(r)return null;s=1}else if(a<0)s=-1,a=-a;else return null;mi.subVectors(this.origin,e);const l=s*this.direction.dot(Fs.crossVectors(mi,Fs));if(l<0)return null;const c=s*this.direction.dot(hc.cross(mi));if(c<0||l+c>a)return null;const h=-s*mi.dot(dc);return h<0?null:this.at(h/a,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Lt{constructor(e,t,i,r,o,a,s,l,c,h,f,d,m,v,x,g){Lt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,o,a,s,l,c,h,f,d,m,v,x,g)}set(e,t,i,r,o,a,s,l,c,h,f,d,m,v,x,g){const _=this.elements;return _[0]=e,_[4]=t,_[8]=i,_[12]=r,_[1]=o,_[5]=a,_[9]=s,_[13]=l,_[2]=c,_[6]=h,_[10]=f,_[14]=d,_[3]=m,_[7]=v,_[11]=x,_[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Lt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Er.setFromMatrixColumn(e,0).length(),o=1/Er.setFromMatrixColumn(e,1).length(),a=1/Er.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*o,t[5]=i[5]*o,t[6]=i[6]*o,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,o=e.z,a=Math.cos(i),s=Math.sin(i),l=Math.cos(r),c=Math.sin(r),h=Math.cos(o),f=Math.sin(o);if(e.order==="XYZ"){const d=a*h,m=a*f,v=s*h,x=s*f;t[0]=l*h,t[4]=-l*f,t[8]=c,t[1]=m+v*c,t[5]=d-x*c,t[9]=-s*l,t[2]=x-d*c,t[6]=v+m*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*h,m=l*f,v=c*h,x=c*f;t[0]=d+x*s,t[4]=v*s-m,t[8]=a*c,t[1]=a*f,t[5]=a*h,t[9]=-s,t[2]=m*s-v,t[6]=x+d*s,t[10]=a*l}else if(e.order==="ZXY"){const d=l*h,m=l*f,v=c*h,x=c*f;t[0]=d-x*s,t[4]=-a*f,t[8]=v+m*s,t[1]=m+v*s,t[5]=a*h,t[9]=x-d*s,t[2]=-a*c,t[6]=s,t[10]=a*l}else if(e.order==="ZYX"){const d=a*h,m=a*f,v=s*h,x=s*f;t[0]=l*h,t[4]=v*c-m,t[8]=d*c+x,t[1]=l*f,t[5]=x*c+d,t[9]=m*c-v,t[2]=-c,t[6]=s*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,m=a*c,v=s*l,x=s*c;t[0]=l*h,t[4]=x-d*f,t[8]=v*f+m,t[1]=f,t[5]=a*h,t[9]=-s*h,t[2]=-c*h,t[6]=m*f+v,t[10]=d-x*f}else if(e.order==="XZY"){const d=a*l,m=a*c,v=s*l,x=s*c;t[0]=l*h,t[4]=-f,t[8]=c*h,t[1]=d*f+x,t[5]=a*h,t[9]=m*f-v,t[2]=v*f-m,t[6]=s*h,t[10]=x*f+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(SM,e,MM)}lookAt(e,t,i){const r=this.elements;return cn.subVectors(e,t),cn.lengthSq()===0&&(cn.z=1),cn.normalize(),gi.crossVectors(i,cn),gi.lengthSq()===0&&(Math.abs(i.z)===1?cn.x+=1e-4:cn.z+=1e-4,cn.normalize(),gi.crossVectors(i,cn)),gi.normalize(),Bs.crossVectors(cn,gi),r[0]=gi.x,r[4]=Bs.x,r[8]=cn.x,r[1]=gi.y,r[5]=Bs.y,r[9]=cn.y,r[2]=gi.z,r[6]=Bs.z,r[10]=cn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,o=this.elements,a=i[0],s=i[4],l=i[8],c=i[12],h=i[1],f=i[5],d=i[9],m=i[13],v=i[2],x=i[6],g=i[10],_=i[14],A=i[3],b=i[7],S=i[11],C=i[15],D=r[0],R=r[4],Z=r[8],M=r[12],L=r[1],G=r[5],se=r[9],ae=r[13],B=r[2],te=r[6],ue=r[10],re=r[14],ie=r[3],q=r[7],X=r[11],O=r[15];return o[0]=a*D+s*L+l*B+c*ie,o[4]=a*R+s*G+l*te+c*q,o[8]=a*Z+s*se+l*ue+c*X,o[12]=a*M+s*ae+l*re+c*O,o[1]=h*D+f*L+d*B+m*ie,o[5]=h*R+f*G+d*te+m*q,o[9]=h*Z+f*se+d*ue+m*X,o[13]=h*M+f*ae+d*re+m*O,o[2]=v*D+x*L+g*B+_*ie,o[6]=v*R+x*G+g*te+_*q,o[10]=v*Z+x*se+g*ue+_*X,o[14]=v*M+x*ae+g*re+_*O,o[3]=A*D+b*L+S*B+C*ie,o[7]=A*R+b*G+S*te+C*q,o[11]=A*Z+b*se+S*ue+C*X,o[15]=A*M+b*ae+S*re+C*O,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],o=e[12],a=e[1],s=e[5],l=e[9],c=e[13],h=e[2],f=e[6],d=e[10],m=e[14],v=e[3],x=e[7],g=e[11],_=e[15];return v*(+o*l*f-r*c*f-o*s*d+i*c*d+r*s*m-i*l*m)+x*(+t*l*m-t*c*d+o*a*d-r*a*m+r*c*h-o*l*h)+g*(+t*c*f-t*s*m-o*a*f+i*a*m+o*s*h-i*c*h)+_*(-r*s*h-t*l*f+t*s*d+r*a*f-i*a*d+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],o=e[3],a=e[4],s=e[5],l=e[6],c=e[7],h=e[8],f=e[9],d=e[10],m=e[11],v=e[12],x=e[13],g=e[14],_=e[15],A=f*g*c-x*d*c+x*l*m-s*g*m-f*l*_+s*d*_,b=v*d*c-h*g*c-v*l*m+a*g*m+h*l*_-a*d*_,S=h*x*c-v*f*c+v*s*m-a*x*m-h*s*_+a*f*_,C=v*f*l-h*x*l-v*s*d+a*x*d+h*s*g-a*f*g,D=t*A+i*b+r*S+o*C;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/D;return e[0]=A*R,e[1]=(x*d*o-f*g*o-x*r*m+i*g*m+f*r*_-i*d*_)*R,e[2]=(s*g*o-x*l*o+x*r*c-i*g*c-s*r*_+i*l*_)*R,e[3]=(f*l*o-s*d*o-f*r*c+i*d*c+s*r*m-i*l*m)*R,e[4]=b*R,e[5]=(h*g*o-v*d*o+v*r*m-t*g*m-h*r*_+t*d*_)*R,e[6]=(v*l*o-a*g*o-v*r*c+t*g*c+a*r*_-t*l*_)*R,e[7]=(a*d*o-h*l*o+h*r*c-t*d*c-a*r*m+t*l*m)*R,e[8]=S*R,e[9]=(v*f*o-h*x*o-v*i*m+t*x*m+h*i*_-t*f*_)*R,e[10]=(a*x*o-v*s*o+v*i*c-t*x*c-a*i*_+t*s*_)*R,e[11]=(h*s*o-a*f*o-h*i*c+t*f*c+a*i*m-t*s*m)*R,e[12]=C*R,e[13]=(h*x*r-v*f*r+v*i*d-t*x*d-h*i*g+t*f*g)*R,e[14]=(v*s*r-a*x*r-v*i*l+t*x*l+a*i*g-t*s*g)*R,e[15]=(a*f*r-h*s*r+h*i*l-t*f*l-a*i*d+t*s*d)*R,this}scale(e){const t=this.elements,i=e.x,r=e.y,o=e.z;return t[0]*=i,t[4]*=r,t[8]*=o,t[1]*=i,t[5]*=r,t[9]*=o,t[2]*=i,t[6]*=r,t[10]*=o,t[3]*=i,t[7]*=r,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),o=1-i,a=e.x,s=e.y,l=e.z,c=o*a,h=o*s;return this.set(c*a+i,c*s-r*l,c*l+r*s,0,c*s+r*l,h*s+i,h*l-r*a,0,c*l-r*s,h*l+r*a,o*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,o,a){return this.set(1,i,o,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,o=t._x,a=t._y,s=t._z,l=t._w,c=o+o,h=a+a,f=s+s,d=o*c,m=o*h,v=o*f,x=a*h,g=a*f,_=s*f,A=l*c,b=l*h,S=l*f,C=i.x,D=i.y,R=i.z;return r[0]=(1-(x+_))*C,r[1]=(m+S)*C,r[2]=(v-b)*C,r[3]=0,r[4]=(m-S)*D,r[5]=(1-(d+_))*D,r[6]=(g+A)*D,r[7]=0,r[8]=(v+b)*R,r[9]=(g-A)*R,r[10]=(1-(d+x))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let o=Er.set(r[0],r[1],r[2]).length();const a=Er.set(r[4],r[5],r[6]).length(),s=Er.set(r[8],r[9],r[10]).length();this.determinant()<0&&(o=-o),e.x=r[12],e.y=r[13],e.z=r[14],bn.copy(this);const c=1/o,h=1/a,f=1/s;return bn.elements[0]*=c,bn.elements[1]*=c,bn.elements[2]*=c,bn.elements[4]*=h,bn.elements[5]*=h,bn.elements[6]*=h,bn.elements[8]*=f,bn.elements[9]*=f,bn.elements[10]*=f,t.setFromRotationMatrix(bn),i.x=o,i.y=a,i.z=s,this}makePerspective(e,t,i,r,o,a,s=ii){const l=this.elements,c=2*o/(t-e),h=2*o/(i-r),f=(t+e)/(t-e),d=(i+r)/(i-r);let m,v;if(s===ii)m=-(a+o)/(a-o),v=-2*a*o/(a-o);else if(s===Ca)m=-a/(a-o),v=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+s);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,o,a,s=ii){const l=this.elements,c=1/(t-e),h=1/(i-r),f=1/(a-o),d=(t+e)*c,m=(i+r)*h;let v,x;if(s===ii)v=(a+o)*f,x=-2*f;else if(s===Ca)v=o*f,x=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+s);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=x,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Er=new V,bn=new Lt,SM=new V(0,0,0),MM=new V(1,1,1),gi=new V,Bs=new V,cn=new V,vd=new Lt,xd=new Qi;class Ha{constructor(e=0,t=0,i=0,r=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,o=r[0],a=r[4],s=r[8],l=r[1],c=r[5],h=r[9],f=r[2],d=r[6],m=r[10];switch(t){case"XYZ":this._y=Math.asin($t(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-$t(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(s,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,o),this._z=0);break;case"ZXY":this._x=Math.asin($t(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,o));break;case"ZYX":this._y=Math.asin(-$t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,o)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin($t(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-f,o)):(this._x=0,this._y=Math.atan2(s,m));break;case"XZY":this._z=Math.asin(-$t(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(s,o)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return vd.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vd,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xd.setFromEuler(this),this.setFromQuaternion(xd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class $m{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let EM=0;const yd=new V,br=new Qi,Zn=new Lt,ks=new V,wo=new V,bM=new V,TM=new Qi,Sd=new V(1,0,0),Md=new V(0,1,0),Ed=new V(0,0,1),wM={type:"added"},AM={type:"removed"};class Qt extends nr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:EM++}),this.uuid=Qr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Qt.DEFAULT_UP.clone();const e=new V,t=new Ha,i=new Qi,r=new V(1,1,1);function o(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Lt},normalMatrix:{value:new ot}}),this.matrix=new Lt,this.matrixWorld=new Lt,this.matrixAutoUpdate=Qt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $m,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.multiply(br),this}rotateOnWorldAxis(e,t){return br.setFromAxisAngle(e,t),this.quaternion.premultiply(br),this}rotateX(e){return this.rotateOnAxis(Sd,e)}rotateY(e){return this.rotateOnAxis(Md,e)}rotateZ(e){return this.rotateOnAxis(Ed,e)}translateOnAxis(e,t){return yd.copy(e).applyQuaternion(this.quaternion),this.position.add(yd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Sd,e)}translateY(e){return this.translateOnAxis(Md,e)}translateZ(e){return this.translateOnAxis(Ed,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?ks.copy(e):ks.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),wo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(wo,ks,this.up):Zn.lookAt(ks,wo,this.up),this.quaternion.setFromRotationMatrix(Zn),r&&(Zn.extractRotation(r.matrixWorld),br.setFromRotationMatrix(Zn),this.quaternion.premultiply(br.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(wM)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(AM)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,o=this.children.length;r<o;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(i=i.concat(a))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,e,bM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(wo,TM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const o=t[i];(o.matrixWorldAutoUpdate===!0||e===!0)&&o.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let o=0,a=r.length;o<a;o++){const s=r[o];s.matrixWorldAutoUpdate===!0&&s.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function o(s,l){return s[l.uuid]===void 0&&(s[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=o(e.geometries,this.geometry);const s=this.geometry.parameters;if(s!==void 0&&s.shapes!==void 0){const l=s.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const f=l[c];o(e.shapes,f)}else o(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const s=[];for(let l=0,c=this.material.length;l<c;l++)s.push(o(e.materials,this.material[l]));r.material=s}else r.material=o(e.materials,this.material);if(this.children.length>0){r.children=[];for(let s=0;s<this.children.length;s++)r.children.push(this.children[s].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let s=0;s<this.animations.length;s++){const l=this.animations[s];r.animations.push(o(e.animations,l))}}if(t){const s=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),f=a(e.shapes),d=a(e.skeletons),m=a(e.animations),v=a(e.nodes);s.length>0&&(i.geometries=s),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=r,i;function a(s){const l=[];for(const c in s){const h=s[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Qt.DEFAULT_UP=new V(0,1,0);Qt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Qt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Tn=new V,Jn=new V,pc=new V,Qn=new V,Tr=new V,wr=new V,bd=new V,mc=new V,gc=new V,_c=new V;let zs=!1;class An{constructor(e=new V,t=new V,i=new V){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Tn.subVectors(e,t),r.cross(Tn);const o=r.lengthSq();return o>0?r.multiplyScalar(1/Math.sqrt(o)):r.set(0,0,0)}static getBarycoord(e,t,i,r,o){Tn.subVectors(r,t),Jn.subVectors(i,t),pc.subVectors(e,t);const a=Tn.dot(Tn),s=Tn.dot(Jn),l=Tn.dot(pc),c=Jn.dot(Jn),h=Jn.dot(pc),f=a*c-s*s;if(f===0)return o.set(-2,-1,-1);const d=1/f,m=(c*l-s*h)*d,v=(a*h-s*l)*d;return o.set(1-m-v,v,m)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Qn),Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getUV(e,t,i,r,o,a,s,l){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),this.getInterpolation(e,t,i,r,o,a,s,l)}static getInterpolation(e,t,i,r,o,a,s,l){return this.getBarycoord(e,t,i,r,Qn),l.setScalar(0),l.addScaledVector(o,Qn.x),l.addScaledVector(a,Qn.y),l.addScaledVector(s,Qn.z),l}static isFrontFacing(e,t,i,r){return Tn.subVectors(i,t),Jn.subVectors(e,t),Tn.cross(Jn).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return An.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return An.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,o){return zs===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),zs=!0),An.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}getInterpolation(e,t,i,r,o){return An.getInterpolation(e,this.a,this.b,this.c,t,i,r,o)}containsPoint(e){return An.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return An.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,o=this.c;let a,s;Tr.subVectors(r,i),wr.subVectors(o,i),mc.subVectors(e,i);const l=Tr.dot(mc),c=wr.dot(mc);if(l<=0&&c<=0)return t.copy(i);gc.subVectors(e,r);const h=Tr.dot(gc),f=wr.dot(gc);if(h>=0&&f<=h)return t.copy(r);const d=l*f-h*c;if(d<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(i).addScaledVector(Tr,a);_c.subVectors(e,o);const m=Tr.dot(_c),v=wr.dot(_c);if(v>=0&&m<=v)return t.copy(o);const x=m*c-l*v;if(x<=0&&c>=0&&v<=0)return s=c/(c-v),t.copy(i).addScaledVector(wr,s);const g=h*v-m*f;if(g<=0&&f-h>=0&&m-v>=0)return bd.subVectors(o,r),s=(f-h)/(f-h+(m-v)),t.copy(r).addScaledVector(bd,s);const _=1/(g+x+d);return a=x*_,s=d*_,t.copy(i).addScaledVector(Tr,a).addScaledVector(wr,s)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const jm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Hs={h:0,s:0,l:0};function vc(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class ft{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,gt.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=gt.workingColorSpace){return this.r=e,this.g=t,this.b=i,gt.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=gt.workingColorSpace){if(e=bu(e,1),t=$t(t,0,1),i=$t(i,0,1),t===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+t):i+t-i*t,a=2*i-o;this.r=vc(a,o,e+1/3),this.g=vc(a,o,e),this.b=vc(a,o,e-1/3)}return gt.toWorkingColorSpace(this,r),this}setStyle(e,t=Gt){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const a=r[1],s=r[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(s))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=r[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(o,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const i=jm[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Hr(e.r),this.g=Hr(e.g),this.b=Hr(e.b),this}copyLinearToSRGB(e){return this.r=sc(e.r),this.g=sc(e.g),this.b=sc(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return gt.fromWorkingColorSpace(Yt.copy(this),e),Math.round($t(Yt.r*255,0,255))*65536+Math.round($t(Yt.g*255,0,255))*256+Math.round($t(Yt.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=gt.workingColorSpace){gt.fromWorkingColorSpace(Yt.copy(this),t);const i=Yt.r,r=Yt.g,o=Yt.b,a=Math.max(i,r,o),s=Math.min(i,r,o);let l,c;const h=(s+a)/2;if(s===a)l=0,c=0;else{const f=a-s;switch(c=h<=.5?f/(a+s):f/(2-a-s),a){case i:l=(r-o)/f+(r<o?6:0);break;case r:l=(o-i)/f+2;break;case o:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=gt.workingColorSpace){return gt.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Gt){gt.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,r=Yt.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(_i),this.setHSL(_i.h+e,_i.s+t,_i.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(_i),e.getHSL(Hs);const i=Oo(_i.h,Hs.h,t),r=Oo(_i.s,Hs.s,t),o=Oo(_i.l,Hs.l,t);return this.setHSL(i,r,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,o=e.elements;return this.r=o[0]*t+o[3]*i+o[6]*r,this.g=o[1]*t+o[4]*i+o[7]*r,this.b=o[2]*t+o[5]*i+o[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ft;ft.NAMES=jm;let RM=0;class eo extends nr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:RM++}),this.uuid=Qr(),this.name="",this.type="Material",this.blending=zr,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$c,this.blendDst=jc,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ft(0,0,0),this.blendAlpha=0,this.depthFunc=Ta,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ud,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vr,this.stencilZFail=vr,this.stencilZPass=vr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zr&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$c&&(i.blendSrc=this.blendSrc),this.blendDst!==jc&&(i.blendDst=this.blendDst),this.blendEquation!==Vi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Ta&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ud&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==vr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==vr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(o){const a=[];for(const s in o){const l=o[s];delete l.metadata,a.push(l)}return a}if(t){const o=r(e.textures),a=r(e.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let o=0;o!==r;++o)i[o]=t[o].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Km extends eo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Im,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new V,Gs=new st;class Gn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=fd,this.updateRange={offset:0,count:-1},this.gpuType=yi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,o=this.itemSize;r<o;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Gs.fromBufferAttribute(this,t),Gs.applyMatrix3(e),this.setXY(t,Gs.x,Gs.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=Ir(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=Kt(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ir(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ir(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ir(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ir(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,o){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),i=Kt(i,this.array),r=Kt(r,this.array),o=Kt(o,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==fd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Zm extends Gn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Jm extends Gn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Dn extends Gn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let CM=0;const mn=new Lt,xc=new Qt,Ar=new V,un=new Jo,Ao=new Jo,kt=new V;class On extends nr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:CM++}),this.uuid=Qr(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Wm(e)?Jm:Zm)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new ot().getNormalMatrix(e);i.applyNormalMatrix(o),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return mn.makeRotationFromQuaternion(e),this.applyMatrix4(mn),this}rotateX(e){return mn.makeRotationX(e),this.applyMatrix4(mn),this}rotateY(e){return mn.makeRotationY(e),this.applyMatrix4(mn),this}rotateZ(e){return mn.makeRotationZ(e),this.applyMatrix4(mn),this}translate(e,t,i){return mn.makeTranslation(e,t,i),this.applyMatrix4(mn),this}scale(e,t,i){return mn.makeScale(e,t,i),this.applyMatrix4(mn),this}lookAt(e){return xc.lookAt(e),xc.updateMatrix(),this.applyMatrix4(xc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ar).negate(),this.translate(Ar.x,Ar.y,Ar.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];t.push(o.x,o.y,o.z||0)}return this.setAttribute("position",new Dn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Jo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const o=t[i];un.setFromBufferAttribute(o),this.morphTargetsRelative?(kt.addVectors(this.boundingBox.min,un.min),this.boundingBox.expandByPoint(kt),kt.addVectors(this.boundingBox.max,un.max),this.boundingBox.expandByPoint(kt)):(this.boundingBox.expandByPoint(un.min),this.boundingBox.expandByPoint(un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(e){const i=this.boundingSphere.center;if(un.setFromBufferAttribute(e),t)for(let o=0,a=t.length;o<a;o++){const s=t[o];Ao.setFromBufferAttribute(s),this.morphTargetsRelative?(kt.addVectors(un.min,Ao.min),un.expandByPoint(kt),kt.addVectors(un.max,Ao.max),un.expandByPoint(kt)):(un.expandByPoint(Ao.min),un.expandByPoint(Ao.max))}un.getCenter(i);let r=0;for(let o=0,a=e.count;o<a;o++)kt.fromBufferAttribute(e,o),r=Math.max(r,i.distanceToSquared(kt));if(t)for(let o=0,a=t.length;o<a;o++){const s=t[o],l=this.morphTargetsRelative;for(let c=0,h=s.count;c<h;c++)kt.fromBufferAttribute(s,c),l&&(Ar.fromBufferAttribute(e,c),kt.add(Ar)),r=Math.max(r,i.distanceToSquared(kt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,o=t.normal.array,a=t.uv.array,s=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*s),4));const l=this.getAttribute("tangent").array,c=[],h=[];for(let L=0;L<s;L++)c[L]=new V,h[L]=new V;const f=new V,d=new V,m=new V,v=new st,x=new st,g=new st,_=new V,A=new V;function b(L,G,se){f.fromArray(r,L*3),d.fromArray(r,G*3),m.fromArray(r,se*3),v.fromArray(a,L*2),x.fromArray(a,G*2),g.fromArray(a,se*2),d.sub(f),m.sub(f),x.sub(v),g.sub(v);const ae=1/(x.x*g.y-g.x*x.y);isFinite(ae)&&(_.copy(d).multiplyScalar(g.y).addScaledVector(m,-x.y).multiplyScalar(ae),A.copy(m).multiplyScalar(x.x).addScaledVector(d,-g.x).multiplyScalar(ae),c[L].add(_),c[G].add(_),c[se].add(_),h[L].add(A),h[G].add(A),h[se].add(A))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let L=0,G=S.length;L<G;++L){const se=S[L],ae=se.start,B=se.count;for(let te=ae,ue=ae+B;te<ue;te+=3)b(i[te+0],i[te+1],i[te+2])}const C=new V,D=new V,R=new V,Z=new V;function M(L){R.fromArray(o,L*3),Z.copy(R);const G=c[L];C.copy(G),C.sub(R.multiplyScalar(R.dot(G))).normalize(),D.crossVectors(Z,G);const ae=D.dot(h[L])<0?-1:1;l[L*4]=C.x,l[L*4+1]=C.y,l[L*4+2]=C.z,l[L*4+3]=ae}for(let L=0,G=S.length;L<G;++L){const se=S[L],ae=se.start,B=se.count;for(let te=ae,ue=ae+B;te<ue;te+=3)M(i[te+0]),M(i[te+1]),M(i[te+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const r=new V,o=new V,a=new V,s=new V,l=new V,c=new V,h=new V,f=new V;if(e)for(let d=0,m=e.count;d<m;d+=3){const v=e.getX(d+0),x=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),s.fromBufferAttribute(i,v),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,g),s.add(h),l.add(h),c.add(h),i.setXYZ(v,s.x,s.y,s.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,m=t.count;d<m;d+=3)r.fromBufferAttribute(t,d+0),o.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,o),f.subVectors(r,o),h.cross(f),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)kt.fromBufferAttribute(e,t),kt.normalize(),e.setXYZ(t,kt.x,kt.y,kt.z)}toNonIndexed(){function e(s,l){const c=s.array,h=s.itemSize,f=s.normalized,d=new c.constructor(l.length*h);let m=0,v=0;for(let x=0,g=l.length;x<g;x++){s.isInterleavedBufferAttribute?m=l[x]*s.data.stride+s.offset:m=l[x]*h;for(let _=0;_<h;_++)d[v++]=c[m++]}return new Gn(d,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new On,i=this.index.array,r=this.attributes;for(const s in r){const l=r[s],c=e(l,i);t.setAttribute(s,c)}const o=this.morphAttributes;for(const s in o){const l=[],c=o[s];for(let h=0,f=c.length;h<f;h++){const d=c[h],m=e(d,i);l.push(m)}t.morphAttributes[s]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let s=0,l=a.length;s<l;s++){const c=a[s];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let o=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let f=0,d=c.length;f<d;f++){const m=c[f];h.push(m.toJSON(e.data))}h.length>0&&(r[l]=h,o=!0)}o&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const s=this.boundingSphere;return s!==null&&(e.data.boundingSphere={center:s.center.toArray(),radius:s.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const c in r){const h=r[c];this.setAttribute(c,h.clone(t))}const o=e.morphAttributes;for(const c in o){const h=[],f=o[c];for(let d=0,m=f.length;d<m;d++)h.push(f[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const f=a[c];this.addGroup(f.start,f.count,f.materialIndex)}const s=e.boundingBox;s!==null&&(this.boundingBox=s.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Td=new Lt,Bi=new za,Vs=new Qo,wd=new V,Rr=new V,Cr=new V,Pr=new V,yc=new V,Ws=new V,Xs=new st,qs=new st,Ys=new st,Ad=new V,Rd=new V,Cd=new V,$s=new V,js=new V;class Si extends Qt{constructor(e=new On,t=new Km){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const s=this.morphTargetInfluences;if(o&&s){Ws.set(0,0,0);for(let l=0,c=o.length;l<c;l++){const h=s[l],f=o[l];h!==0&&(yc.fromBufferAttribute(f,e),a?Ws.addScaledVector(yc,h):Ws.addScaledVector(yc.sub(t),h))}t.add(Ws)}return t}raycast(e,t){const i=this.geometry,r=this.material,o=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Vs.copy(i.boundingSphere),Vs.applyMatrix4(o),Bi.copy(e.ray).recast(e.near),!(Vs.containsPoint(Bi.origin)===!1&&(Bi.intersectSphere(Vs,wd)===null||Bi.origin.distanceToSquared(wd)>(e.far-e.near)**2))&&(Td.copy(o).invert(),Bi.copy(e.ray).applyMatrix4(Td),!(i.boundingBox!==null&&Bi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Bi)))}_computeIntersections(e,t,i){let r;const o=this.geometry,a=this.material,s=o.index,l=o.attributes.position,c=o.attributes.uv,h=o.attributes.uv1,f=o.attributes.normal,d=o.groups,m=o.drawRange;if(s!==null)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],_=a[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(s.count,Math.min(g.start+g.count,m.start+m.count));for(let S=A,C=b;S<C;S+=3){const D=s.getX(S),R=s.getX(S+1),Z=s.getX(S+2);r=Ks(this,_,e,i,c,h,f,D,R,Z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(s.count,m.start+m.count);for(let g=v,_=x;g<_;g+=3){const A=s.getX(g),b=s.getX(g+1),S=s.getX(g+2);r=Ks(this,a,e,i,c,h,f,A,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let v=0,x=d.length;v<x;v++){const g=d[v],_=a[g.materialIndex],A=Math.max(g.start,m.start),b=Math.min(l.count,Math.min(g.start+g.count,m.start+m.count));for(let S=A,C=b;S<C;S+=3){const D=S,R=S+1,Z=S+2;r=Ks(this,_,e,i,c,h,f,D,R,Z),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const v=Math.max(0,m.start),x=Math.min(l.count,m.start+m.count);for(let g=v,_=x;g<_;g+=3){const A=g,b=g+1,S=g+2;r=Ks(this,a,e,i,c,h,f,A,b,S),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function PM(n,e,t,i,r,o,a,s){let l;if(e.side===sn?l=i.intersectTriangle(a,o,r,!0,s):l=i.intersectTriangle(r,o,a,e.side===Ti,s),l===null)return null;js.copy(s),js.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(js);return c<t.near||c>t.far?null:{distance:c,point:js.clone(),object:n}}function Ks(n,e,t,i,r,o,a,s,l,c){n.getVertexPosition(s,Rr),n.getVertexPosition(l,Cr),n.getVertexPosition(c,Pr);const h=PM(n,e,t,i,Rr,Cr,Pr,$s);if(h){r&&(Xs.fromBufferAttribute(r,s),qs.fromBufferAttribute(r,l),Ys.fromBufferAttribute(r,c),h.uv=An.getInterpolation($s,Rr,Cr,Pr,Xs,qs,Ys,new st)),o&&(Xs.fromBufferAttribute(o,s),qs.fromBufferAttribute(o,l),Ys.fromBufferAttribute(o,c),h.uv1=An.getInterpolation($s,Rr,Cr,Pr,Xs,qs,Ys,new st),h.uv2=h.uv1),a&&(Ad.fromBufferAttribute(a,s),Rd.fromBufferAttribute(a,l),Cd.fromBufferAttribute(a,c),h.normal=An.getInterpolation($s,Rr,Cr,Pr,Ad,Rd,Cd,new V),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:s,b:l,c,normal:new V,materialIndex:0};An.getNormal(Rr,Cr,Pr,f.normal),h.face=f}return h}class es extends On{constructor(e=1,t=1,i=1,r=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:o,depthSegments:a};const s=this;r=Math.floor(r),o=Math.floor(o),a=Math.floor(a);const l=[],c=[],h=[],f=[];let d=0,m=0;v("z","y","x",-1,-1,i,t,e,a,o,0),v("z","y","x",1,-1,i,t,-e,a,o,1),v("x","z","y",1,1,e,i,t,r,a,2),v("x","z","y",1,-1,e,i,-t,r,a,3),v("x","y","z",1,-1,e,t,i,r,o,4),v("x","y","z",-1,-1,e,t,-i,r,o,5),this.setIndex(l),this.setAttribute("position",new Dn(c,3)),this.setAttribute("normal",new Dn(h,3)),this.setAttribute("uv",new Dn(f,2));function v(x,g,_,A,b,S,C,D,R,Z,M){const L=S/R,G=C/Z,se=S/2,ae=C/2,B=D/2,te=R+1,ue=Z+1;let re=0,ie=0;const q=new V;for(let X=0;X<ue;X++){const O=X*G-ae;for(let W=0;W<te;W++){const ye=W*L-se;q[x]=ye*A,q[g]=O*b,q[_]=B,c.push(q.x,q.y,q.z),q[x]=0,q[g]=0,q[_]=D>0?1:-1,h.push(q.x,q.y,q.z),f.push(W/R),f.push(1-X/Z),re+=1}}for(let X=0;X<Z;X++)for(let O=0;O<R;O++){const W=d+O+te*X,ye=d+O+te*(X+1),xe=d+(O+1)+te*(X+1),he=d+(O+1)+te*X;l.push(W,ye,he),l.push(ye,xe,he),ie+=6}s.addGroup(m,ie,M),m+=ie,d+=re}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new es(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Zt(n){const e={};for(let t=0;t<n.length;t++){const i=Zr(n[t]);for(const r in i)e[r]=i[r]}return e}function LM(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Qm(n){return n.getRenderTarget()===null?n.outputColorSpace:gt.workingColorSpace}const DM={clone:Zr,merge:Zt};var NM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,UM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class er extends eo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=NM,this.fragmentShader=UM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=LM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class eg extends Qt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Lt,this.projectionMatrix=new Lt,this.projectionMatrixInverse=new Lt,this.coordinateSystem=ii}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class vn extends eg{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Wo*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Io*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Wo*2*Math.atan(Math.tan(Io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,o,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Io*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,o=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;o+=a.offsetX*r/l,t-=a.offsetY*i/c,r*=a.width/l,i*=a.height/c}const s=this.filmOffset;s!==0&&(o+=e*s/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Lr=-90,Dr=1;class IM extends Qt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new vn(Lr,Dr,e,t);r.layers=this.layers,this.add(r);const o=new vn(Lr,Dr,e,t);o.layers=this.layers,this.add(o);const a=new vn(Lr,Dr,e,t);a.layers=this.layers,this.add(a);const s=new vn(Lr,Dr,e,t);s.layers=this.layers,this.add(s);const l=new vn(Lr,Dr,e,t);l.layers=this.layers,this.add(l);const c=new vn(Lr,Dr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,o,a,s,l]=t;for(const c of t)this.remove(c);if(e===ii)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),s.up.set(0,1,0),s.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ca)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),s.up.set(0,-1,0),s.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,a,s,l,c,h]=this.children,f=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),v=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(t,o),e.setRenderTarget(i,1,r),e.render(t,a),e.setRenderTarget(i,2,r),e.render(t,s),e.setRenderTarget(i,3,r),e.render(t,l),e.setRenderTarget(i,4,r),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(t,h),e.setRenderTarget(f,d,m),e.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class tg extends fn{constructor(e,t,i,r,o,a,s,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:$r,super(e,t,i,r,o,a,s,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class OM extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(Fo("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===ji?Gt:xn),this.texture=new tg(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:_n}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new es(5,5,5),o=new er({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:sn,blending:Mi});o.uniforms.tEquirect.value=t;const a=new Si(r,o),s=t.minFilter;return t.minFilter===Go&&(t.minFilter=_n),new IM(1,10,this).update(e,a),t.minFilter=s,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,i,r){const o=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,r);e.setRenderTarget(o)}}const Sc=new V,FM=new V,BM=new ot;class vi{constructor(e=new V(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Sc.subVectors(i,t).cross(FM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Sc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const o=-(e.start.dot(this.normal)+this.constant)/r;return o<0||o>1?null:t.copy(e.start).addScaledVector(i,o)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||BM.getNormalMatrix(e),r=this.coplanarPoint(Sc).applyMatrix4(e),o=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ki=new Qo,Zs=new V;class ng{constructor(e=new vi,t=new vi,i=new vi,r=new vi,o=new vi,a=new vi){this.planes=[e,t,i,r,o,a]}set(e,t,i,r,o,a){const s=this.planes;return s[0].copy(e),s[1].copy(t),s[2].copy(i),s[3].copy(r),s[4].copy(o),s[5].copy(a),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=ii){const i=this.planes,r=e.elements,o=r[0],a=r[1],s=r[2],l=r[3],c=r[4],h=r[5],f=r[6],d=r[7],m=r[8],v=r[9],x=r[10],g=r[11],_=r[12],A=r[13],b=r[14],S=r[15];if(i[0].setComponents(l-o,d-c,g-m,S-_).normalize(),i[1].setComponents(l+o,d+c,g+m,S+_).normalize(),i[2].setComponents(l+a,d+h,g+v,S+A).normalize(),i[3].setComponents(l-a,d-h,g-v,S-A).normalize(),i[4].setComponents(l-s,d-f,g-x,S-b).normalize(),t===ii)i[5].setComponents(l+s,d+f,g+x,S+b).normalize();else if(t===Ca)i[5].setComponents(s,f,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ki.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ki.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ki)}intersectsSprite(e){return ki.center.set(0,0,0),ki.radius=.7071067811865476,ki.applyMatrix4(e.matrixWorld),this.intersectsSphere(ki)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(Zs.x=r.normal.x>0?e.max.x:e.min.x,Zs.y=r.normal.y>0?e.max.y:e.min.y,Zs.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Zs)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ig(){let n=null,e=!1,t=null,i=null;function r(o,a){t(o,a),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function kM(n,e){const t=e.isWebGL2,i=new WeakMap;function r(c,h){const f=c.array,d=c.usage,m=n.createBuffer();n.bindBuffer(h,m),n.bufferData(h,f,d),c.onUploadCallback();let v;if(f instanceof Float32Array)v=n.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(f instanceof Int16Array)v=n.SHORT;else if(f instanceof Uint32Array)v=n.UNSIGNED_INT;else if(f instanceof Int32Array)v=n.INT;else if(f instanceof Int8Array)v=n.BYTE;else if(f instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:m,type:v,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function o(c,h,f){const d=h.array,m=h.updateRange;n.bindBuffer(f,c),m.count===-1?n.bufferSubData(f,0,d):(t?n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d,m.offset,m.count):n.bufferSubData(f,m.offset*d.BYTES_PER_ELEMENT,d.subarray(m.offset,m.offset+m.count)),m.count=-1),h.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function s(c){c.isInterleavedBufferAttribute&&(c=c.data);const h=i.get(c);h&&(n.deleteBuffer(h.buffer),i.delete(c))}function l(c,h){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,h)):f.version<c.version&&(o(f.buffer,c,h),f.version=c.version)}return{get:a,remove:s,update:l}}class Tu extends On{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const o=e/2,a=t/2,s=Math.floor(i),l=Math.floor(r),c=s+1,h=l+1,f=e/s,d=t/l,m=[],v=[],x=[],g=[];for(let _=0;_<h;_++){const A=_*d-a;for(let b=0;b<c;b++){const S=b*f-o;v.push(S,-A,0),x.push(0,0,1),g.push(b/s),g.push(1-_/l)}}for(let _=0;_<l;_++)for(let A=0;A<s;A++){const b=A+c*_,S=A+c*(_+1),C=A+1+c*(_+1),D=A+1+c*_;m.push(b,S,D),m.push(S,C,D)}this.setIndex(m),this.setAttribute("position",new Dn(v,3)),this.setAttribute("normal",new Dn(x,3)),this.setAttribute("uv",new Dn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tu(e.width,e.height,e.widthSegments,e.heightSegments)}}var zM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,HM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,GM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,VM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,WM=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,XM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,qM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,YM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,jM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,KM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ZM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,JM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,tE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,nE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,oE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,sE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,aE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,lE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,cE=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,dE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,pE="gl_FragColor = linearToOutputTexel( gl_FragColor );",mE=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,gE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,vE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,xE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,yE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,SE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ME=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,EE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,bE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,TE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,wE=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,AE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,PE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,LE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,DE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,NE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,FE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,BE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,kE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,HE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GE=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,VE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,WE=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,XE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,qE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,YE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$E=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,KE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ZE=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,JE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,QE=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,eb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,tb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,nb=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ib=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ob=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,sb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ab=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,lb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,cb=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ub=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,hb=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,pb=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,mb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,gb=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_b=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,vb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,xb=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,yb=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Sb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Mb=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Eb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bb=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Tb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,wb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Ab=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Rb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Cb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Pb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Lb=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Db=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Nb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ub=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Ib=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Ob=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Fb=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Bb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zb=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Hb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Gb=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vb=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Wb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Xb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Yb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$b=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zb=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Jb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,eT=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,nT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,rT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,sT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,lT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,uT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,hT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,dT=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,mT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,gT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nt={alphahash_fragment:zM,alphahash_pars_fragment:HM,alphamap_fragment:GM,alphamap_pars_fragment:VM,alphatest_fragment:WM,alphatest_pars_fragment:XM,aomap_fragment:qM,aomap_pars_fragment:YM,begin_vertex:$M,beginnormal_vertex:jM,bsdfs:KM,iridescence_fragment:ZM,bumpmap_pars_fragment:JM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:eE,clipping_planes_pars_vertex:tE,clipping_planes_vertex:nE,color_fragment:iE,color_pars_fragment:rE,color_pars_vertex:oE,color_vertex:sE,common:aE,cube_uv_reflection_fragment:lE,defaultnormal_vertex:cE,displacementmap_pars_vertex:uE,displacementmap_vertex:fE,emissivemap_fragment:hE,emissivemap_pars_fragment:dE,colorspace_fragment:pE,colorspace_pars_fragment:mE,envmap_fragment:gE,envmap_common_pars_fragment:_E,envmap_pars_fragment:vE,envmap_pars_vertex:xE,envmap_physical_pars_fragment:LE,envmap_vertex:yE,fog_vertex:SE,fog_pars_vertex:ME,fog_fragment:EE,fog_pars_fragment:bE,gradientmap_pars_fragment:TE,lightmap_fragment:wE,lightmap_pars_fragment:AE,lights_lambert_fragment:RE,lights_lambert_pars_fragment:CE,lights_pars_begin:PE,lights_toon_fragment:DE,lights_toon_pars_fragment:NE,lights_phong_fragment:UE,lights_phong_pars_fragment:IE,lights_physical_fragment:OE,lights_physical_pars_fragment:FE,lights_fragment_begin:BE,lights_fragment_maps:kE,lights_fragment_end:zE,logdepthbuf_fragment:HE,logdepthbuf_pars_fragment:GE,logdepthbuf_pars_vertex:VE,logdepthbuf_vertex:WE,map_fragment:XE,map_pars_fragment:qE,map_particle_fragment:YE,map_particle_pars_fragment:$E,metalnessmap_fragment:jE,metalnessmap_pars_fragment:KE,morphcolor_vertex:ZE,morphnormal_vertex:JE,morphtarget_pars_vertex:QE,morphtarget_vertex:eb,normal_fragment_begin:tb,normal_fragment_maps:nb,normal_pars_fragment:ib,normal_pars_vertex:rb,normal_vertex:ob,normalmap_pars_fragment:sb,clearcoat_normal_fragment_begin:ab,clearcoat_normal_fragment_maps:lb,clearcoat_pars_fragment:cb,iridescence_pars_fragment:ub,opaque_fragment:fb,packing:hb,premultiplied_alpha_fragment:db,project_vertex:pb,dithering_fragment:mb,dithering_pars_fragment:gb,roughnessmap_fragment:_b,roughnessmap_pars_fragment:vb,shadowmap_pars_fragment:xb,shadowmap_pars_vertex:yb,shadowmap_vertex:Sb,shadowmask_pars_fragment:Mb,skinbase_vertex:Eb,skinning_pars_vertex:bb,skinning_vertex:Tb,skinnormal_vertex:wb,specularmap_fragment:Ab,specularmap_pars_fragment:Rb,tonemapping_fragment:Cb,tonemapping_pars_fragment:Pb,transmission_fragment:Lb,transmission_pars_fragment:Db,uv_pars_fragment:Nb,uv_pars_vertex:Ub,uv_vertex:Ib,worldpos_vertex:Ob,background_vert:Fb,background_frag:Bb,backgroundCube_vert:kb,backgroundCube_frag:zb,cube_vert:Hb,cube_frag:Gb,depth_vert:Vb,depth_frag:Wb,distanceRGBA_vert:Xb,distanceRGBA_frag:qb,equirect_vert:Yb,equirect_frag:$b,linedashed_vert:jb,linedashed_frag:Kb,meshbasic_vert:Zb,meshbasic_frag:Jb,meshlambert_vert:Qb,meshlambert_frag:eT,meshmatcap_vert:tT,meshmatcap_frag:nT,meshnormal_vert:iT,meshnormal_frag:rT,meshphong_vert:oT,meshphong_frag:sT,meshphysical_vert:aT,meshphysical_frag:lT,meshtoon_vert:cT,meshtoon_frag:uT,points_vert:fT,points_frag:hT,shadow_vert:dT,shadow_frag:pT,sprite_vert:mT,sprite_frag:gT},Te={common:{diffuse:{value:new ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ot}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ot}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ot}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ot},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ot},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ot},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ot}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ot}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ot}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0},uvTransform:{value:new ot}},sprite:{diffuse:{value:new ft(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ot},alphaMap:{value:null},alphaMapTransform:{value:new ot},alphaTest:{value:0}}},zn={basic:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Zt([Te.common,Te.specularmap,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,Te.lights,{emissive:{value:new ft(0)},specular:{value:new ft(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Zt([Te.common,Te.envmap,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.roughnessmap,Te.metalnessmap,Te.fog,Te.lights,{emissive:{value:new ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Zt([Te.common,Te.aomap,Te.lightmap,Te.emissivemap,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.gradientmap,Te.fog,Te.lights,{emissive:{value:new ft(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,Te.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Zt([Te.points,Te.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Zt([Te.common,Te.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Zt([Te.common,Te.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Zt([Te.common,Te.bumpmap,Te.normalmap,Te.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Zt([Te.sprite,Te.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new ot},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distanceRGBA:{uniforms:Zt([Te.common,Te.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distanceRGBA_vert,fragmentShader:nt.distanceRGBA_frag},shadow:{uniforms:Zt([Te.lights,Te.fog,{color:{value:new ft(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};zn.physical={uniforms:Zt([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ot},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ot},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ot},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ot},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ot},sheen:{value:0},sheenColor:{value:new ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ot},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ot},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ot},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ot},attenuationDistance:{value:0},attenuationColor:{value:new ft(0)},specularColor:{value:new ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ot},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ot},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ot}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};const Js={r:0,b:0,g:0};function _T(n,e,t,i,r,o,a){const s=new ft(0);let l=o===!0?0:1,c,h,f=null,d=0,m=null;function v(g,_){let A=!1,b=_.isScene===!0?_.background:null;b&&b.isTexture&&(b=(_.backgroundBlurriness>0?t:e).get(b)),b===null?x(s,l):b&&b.isColor&&(x(b,1),A=!0);const S=n.xr.getEnvironmentBlendMode();S==="additive"?i.buffers.color.setClear(0,0,0,1,a):S==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||A)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),b&&(b.isCubeTexture||b.mapping===Ba)?(h===void 0&&(h=new Si(new es(1,1,1),new er({name:"BackgroundCubeMaterial",uniforms:Zr(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:sn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,D,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=b,h.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,h.material.toneMapped=gt.getTransfer(b.colorSpace)!==St,(f!==b||d!==b.version||m!==n.toneMapping)&&(h.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),h.layers.enableAll(),g.unshift(h,h.geometry,h.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Si(new Tu(2,2),new er({name:"BackgroundMaterial",uniforms:Zr(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=gt.getTransfer(b.colorSpace)!==St,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(f!==b||d!==b.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,f=b,d=b.version,m=n.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function x(g,_){g.getRGB(Js,Qm(n)),i.buffers.color.setClear(Js.r,Js.g,Js.b,_,a)}return{getClearColor:function(){return s},setClearColor:function(g,_=1){s.set(g),l=_,x(s,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,x(s,l)},render:v}}function vT(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),o=i.isWebGL2?null:e.get("OES_vertex_array_object"),a=i.isWebGL2||o!==null,s={},l=g(null);let c=l,h=!1;function f(B,te,ue,re,ie){let q=!1;if(a){const X=x(re,ue,te);c!==X&&(c=X,m(c.object)),q=_(B,re,ue,ie),q&&A(B,re,ue,ie)}else{const X=te.wireframe===!0;(c.geometry!==re.id||c.program!==ue.id||c.wireframe!==X)&&(c.geometry=re.id,c.program=ue.id,c.wireframe=X,q=!0)}ie!==null&&t.update(ie,n.ELEMENT_ARRAY_BUFFER),(q||h)&&(h=!1,Z(B,te,ue,re),ie!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(ie).buffer))}function d(){return i.isWebGL2?n.createVertexArray():o.createVertexArrayOES()}function m(B){return i.isWebGL2?n.bindVertexArray(B):o.bindVertexArrayOES(B)}function v(B){return i.isWebGL2?n.deleteVertexArray(B):o.deleteVertexArrayOES(B)}function x(B,te,ue){const re=ue.wireframe===!0;let ie=s[B.id];ie===void 0&&(ie={},s[B.id]=ie);let q=ie[te.id];q===void 0&&(q={},ie[te.id]=q);let X=q[re];return X===void 0&&(X=g(d()),q[re]=X),X}function g(B){const te=[],ue=[],re=[];for(let ie=0;ie<r;ie++)te[ie]=0,ue[ie]=0,re[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:te,enabledAttributes:ue,attributeDivisors:re,object:B,attributes:{},index:null}}function _(B,te,ue,re){const ie=c.attributes,q=te.attributes;let X=0;const O=ue.getAttributes();for(const W in O)if(O[W].location>=0){const xe=ie[W];let he=q[W];if(he===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(he=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(he=B.instanceColor)),xe===void 0||xe.attribute!==he||he&&xe.data!==he.data)return!0;X++}return c.attributesNum!==X||c.index!==re}function A(B,te,ue,re){const ie={},q=te.attributes;let X=0;const O=ue.getAttributes();for(const W in O)if(O[W].location>=0){let xe=q[W];xe===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(xe=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(xe=B.instanceColor));const he={};he.attribute=xe,xe&&xe.data&&(he.data=xe.data),ie[W]=he,X++}c.attributes=ie,c.attributesNum=X,c.index=re}function b(){const B=c.newAttributes;for(let te=0,ue=B.length;te<ue;te++)B[te]=0}function S(B){C(B,0)}function C(B,te){const ue=c.newAttributes,re=c.enabledAttributes,ie=c.attributeDivisors;ue[B]=1,re[B]===0&&(n.enableVertexAttribArray(B),re[B]=1),ie[B]!==te&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](B,te),ie[B]=te)}function D(){const B=c.newAttributes,te=c.enabledAttributes;for(let ue=0,re=te.length;ue<re;ue++)te[ue]!==B[ue]&&(n.disableVertexAttribArray(ue),te[ue]=0)}function R(B,te,ue,re,ie,q,X){X===!0?n.vertexAttribIPointer(B,te,ue,ie,q):n.vertexAttribPointer(B,te,ue,re,ie,q)}function Z(B,te,ue,re){if(i.isWebGL2===!1&&(B.isInstancedMesh||re.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;b();const ie=re.attributes,q=ue.getAttributes(),X=te.defaultAttributeValues;for(const O in q){const W=q[O];if(W.location>=0){let ye=ie[O];if(ye===void 0&&(O==="instanceMatrix"&&B.instanceMatrix&&(ye=B.instanceMatrix),O==="instanceColor"&&B.instanceColor&&(ye=B.instanceColor)),ye!==void 0){const xe=ye.normalized,he=ye.itemSize,Ce=t.get(ye);if(Ce===void 0)continue;const He=Ce.buffer,Fe=Ce.type,Ie=Ce.bytesPerElement,ct=i.isWebGL2===!0&&(Fe===n.INT||Fe===n.UNSIGNED_INT||ye.gpuType===Fm);if(ye.isInterleavedBufferAttribute){const Ue=ye.data,k=Ue.stride,Mt=ye.offset;if(Ue.isInstancedInterleavedBuffer){for(let Pe=0;Pe<W.locationSize;Pe++)C(W.location+Pe,Ue.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Pe=0;Pe<W.locationSize;Pe++)S(W.location+Pe);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Pe=0;Pe<W.locationSize;Pe++)R(W.location+Pe,he/W.locationSize,Fe,xe,k*Ie,(Mt+he/W.locationSize*Pe)*Ie,ct)}else{if(ye.isInstancedBufferAttribute){for(let Ue=0;Ue<W.locationSize;Ue++)C(W.location+Ue,ye.meshPerAttribute);B.isInstancedMesh!==!0&&re._maxInstanceCount===void 0&&(re._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Ue=0;Ue<W.locationSize;Ue++)S(W.location+Ue);n.bindBuffer(n.ARRAY_BUFFER,He);for(let Ue=0;Ue<W.locationSize;Ue++)R(W.location+Ue,he/W.locationSize,Fe,xe,he*Ie,he/W.locationSize*Ue*Ie,ct)}}else if(X!==void 0){const xe=X[O];if(xe!==void 0)switch(xe.length){case 2:n.vertexAttrib2fv(W.location,xe);break;case 3:n.vertexAttrib3fv(W.location,xe);break;case 4:n.vertexAttrib4fv(W.location,xe);break;default:n.vertexAttrib1fv(W.location,xe)}}}}D()}function M(){se();for(const B in s){const te=s[B];for(const ue in te){const re=te[ue];for(const ie in re)v(re[ie].object),delete re[ie];delete te[ue]}delete s[B]}}function L(B){if(s[B.id]===void 0)return;const te=s[B.id];for(const ue in te){const re=te[ue];for(const ie in re)v(re[ie].object),delete re[ie];delete te[ue]}delete s[B.id]}function G(B){for(const te in s){const ue=s[te];if(ue[B.id]===void 0)continue;const re=ue[B.id];for(const ie in re)v(re[ie].object),delete re[ie];delete ue[B.id]}}function se(){ae(),h=!0,c!==l&&(c=l,m(c.object))}function ae(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:se,resetDefaultState:ae,dispose:M,releaseStatesOfGeometry:L,releaseStatesOfProgram:G,initAttributes:b,enableAttribute:S,disableUnusedAttributes:D}}function xT(n,e,t,i){const r=i.isWebGL2;let o;function a(c){o=c}function s(c,h){n.drawArrays(o,c,h),t.update(h,o,1)}function l(c,h,f){if(f===0)return;let d,m;if(r)d=n,m="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),m="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[m](o,c,h,f),t.update(h,o,f)}this.setMode=a,this.render=s,this.renderInstances=l}function yT(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(R){if(R==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";R="mediump"}return R==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let s=t.precision!==void 0?t.precision:"highp";const l=o(s);l!==s&&(console.warn("THREE.WebGLRenderer:",s,"not supported, using",l,"instead."),s=l);const c=a||e.has("WEBGL_draw_buffers"),h=t.logarithmicDepthBuffer===!0,f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),d=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),x=n.getParameter(n.MAX_VERTEX_ATTRIBS),g=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),_=n.getParameter(n.MAX_VARYING_VECTORS),A=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),b=d>0,S=a||e.has("OES_texture_float"),C=b&&S,D=a?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:o,precision:s,logarithmicDepthBuffer:h,maxTextures:f,maxVertexTextures:d,maxTextureSize:m,maxCubemapSize:v,maxAttributes:x,maxVertexUniforms:g,maxVaryings:_,maxFragmentUniforms:A,vertexTextures:b,floatFragmentTextures:S,floatVertexTextures:C,maxSamples:D}}function ST(n){const e=this;let t=null,i=0,r=!1,o=!1;const a=new vi,s=new ot,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const m=f.length!==0||d||i!==0||r;return r=d,i=f.length,m},this.beginShadows=function(){o=!0,h(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(f,d){t=h(f,d,0)},this.setState=function(f,d,m){const v=f.clippingPlanes,x=f.clipIntersection,g=f.clipShadows,_=n.get(f);if(!r||v===null||v.length===0||o&&!g)o?h(null):c();else{const A=o?0:i,b=A*4;let S=_.clippingState||null;l.value=S,S=h(v,d,b,m);for(let C=0;C!==b;++C)S[C]=t[C];_.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=A}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(f,d,m,v){const x=f!==null?f.length:0;let g=null;if(x!==0){if(g=l.value,v!==!0||g===null){const _=m+x*4,A=d.matrixWorldInverse;s.getNormalMatrix(A),(g===null||g.length<_)&&(g=new Float32Array(_));for(let b=0,S=m;b!==x;++b,S+=4)a.copy(f[b]).applyMatrix4(A,s),a.normal.toArray(g,S),g[S+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}function MT(n){let e=new WeakMap;function t(a,s){return s===Kc?a.mapping=$r:s===Zc&&(a.mapping=jr),a}function i(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const s=a.mapping;if(s===Kc||s===Zc)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new OM(l.height/2);return c.fromEquirectangularTexture(n,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const s=a.target;s.removeEventListener("dispose",r);const l=e.get(s);l!==void 0&&(e.delete(s),l.dispose())}function o(){e=new WeakMap}return{get:i,dispose:o}}class ET extends eg{constructor(e=-1,t=1,i=1,r=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let o=i-e,a=i+e,s=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=c*this.view.offsetX,a=o+c*this.view.width,s-=h*this.view.offsetY,l=s-h*this.view.height}this.projectionMatrix.makeOrthographic(o,a,s,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Br=4,Pd=[.125,.215,.35,.446,.526,.582],Wi=20,Mc=new ET,Ld=new ft;let Ec=null,bc=0,Tc=0;const Hi=(1+Math.sqrt(5))/2,Nr=1/Hi,Dd=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Hi,Nr),new V(0,Hi,-Nr),new V(Nr,0,Hi),new V(-Nr,0,Hi),new V(Hi,Nr,0),new V(-Hi,Nr,0)];class Nd{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel(),this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(e,i,r,o),t>0&&this._blur(o,0,0,t),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Od(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Id(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,bc,Tc),e.scissorTest=!1,Qs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===$r||e.mapping===jr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),bc=this._renderer.getActiveCubeFace(),Tc=this._renderer.getActiveMipmapLevel();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:_n,minFilter:_n,generateMipmaps:!1,type:Vo,format:Pn,colorSpace:ai,depthBuffer:!1},r=Ud(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ud(e,t,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=bT(o)),this._blurMaterial=TT(o,e,t)}return r}_compileMaterial(e){const t=new Si(this._lodPlanes[0],e);this._renderer.compile(t,Mc)}_sceneToCubeUV(e,t,i,r){const s=new vn(90,1,t,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(Ld),h.toneMapping=Ei,h.autoClear=!1;const m=new Km({name:"PMREM.Background",side:sn,depthWrite:!1,depthTest:!1}),v=new Si(new es,m);let x=!1;const g=e.background;g?g.isColor&&(m.color.copy(g),e.background=null,x=!0):(m.color.copy(Ld),x=!0);for(let _=0;_<6;_++){const A=_%3;A===0?(s.up.set(0,l[_],0),s.lookAt(c[_],0,0)):A===1?(s.up.set(0,0,l[_]),s.lookAt(0,c[_],0)):(s.up.set(0,l[_],0),s.lookAt(0,0,c[_]));const b=this._cubeSize;Qs(r,A*b,_>2?b:0,b,b),h.setRenderTarget(r),x&&h.render(v,s),h.render(e,s)}v.geometry.dispose(),v.material.dispose(),h.toneMapping=d,h.autoClear=f,e.background=g}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===$r||e.mapping===jr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Od()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Id());const o=r?this._cubemapMaterial:this._equirectMaterial,a=new Si(this._lodPlanes[0],o),s=o.uniforms;s.envMap.value=e;const l=this._cubeSize;Qs(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(a,Mc)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dd[(r-1)%Dd.length];this._blur(e,r-1,r,o,a)}t.autoClear=i}_blur(e,t,i,r,o){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,i,r,"latitudinal",o),this._halfBlur(a,e,i,i,r,"longitudinal",o)}_halfBlur(e,t,i,r,o,a,s){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Si(this._lodPlanes[r],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(o)?Math.PI/(2*m):2*Math.PI/(2*Wi-1),x=o/v,g=isFinite(o)?1+Math.floor(h*x):Wi;g>Wi&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Wi}`);const _=[];let A=0;for(let R=0;R<Wi;++R){const Z=R/x,M=Math.exp(-Z*Z/2);_.push(M),R===0?A+=M:R<g&&(A+=2*M)}for(let R=0;R<_.length;R++)_[R]=_[R]/A;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=_,d.latitudinal.value=a==="latitudinal",s&&(d.poleAxis.value=s);const{_lodMax:b}=this;d.dTheta.value=v,d.mipInt.value=b-i;const S=this._sizeLods[r],C=3*S*(r>b-Br?r-b+Br:0),D=4*(this._cubeSize-S);Qs(t,C,D,3*S,2*S),l.setRenderTarget(t),l.render(f,Mc)}}function bT(n){const e=[],t=[],i=[];let r=n;const o=n-Br+1+Pd.length;for(let a=0;a<o;a++){const s=Math.pow(2,r);t.push(s);let l=1/s;a>n-Br?l=Pd[a-n+Br-1]:a===0&&(l=0),i.push(l);const c=1/(s-2),h=-c,f=1+c,d=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,v=6,x=3,g=2,_=1,A=new Float32Array(x*v*m),b=new Float32Array(g*v*m),S=new Float32Array(_*v*m);for(let D=0;D<m;D++){const R=D%3*2/3-1,Z=D>2?0:-1,M=[R,Z,0,R+2/3,Z,0,R+2/3,Z+1,0,R,Z,0,R+2/3,Z+1,0,R,Z+1,0];A.set(M,x*v*D),b.set(d,g*v*D);const L=[D,D,D,D,D,D];S.set(L,_*v*D)}const C=new On;C.setAttribute("position",new Gn(A,x)),C.setAttribute("uv",new Gn(b,g)),C.setAttribute("faceIndex",new Gn(S,_)),e.push(C),r>Br&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Ud(n,e,t){const i=new Ji(n,e,t);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Qs(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function TT(n,e,t){const i=new Float32Array(Wi),r=new V(0,1,0);return new er({name:"SphericalGaussianBlur",defines:{n:Wi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Id(){return new er({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function Od(){return new er({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mi,depthTest:!1,depthWrite:!1})}function wu(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wT(n){let e=new WeakMap,t=null;function i(s){if(s&&s.isTexture){const l=s.mapping,c=l===Kc||l===Zc,h=l===$r||l===jr;if(c||h)if(s.isRenderTargetTexture&&s.needsPMREMUpdate===!0){s.needsPMREMUpdate=!1;let f=e.get(s);return t===null&&(t=new Nd(n)),f=c?t.fromEquirectangular(s,f):t.fromCubemap(s,f),e.set(s,f),f.texture}else{if(e.has(s))return e.get(s).texture;{const f=s.image;if(c&&f&&f.height>0||h&&f&&r(f)){t===null&&(t=new Nd(n));const d=c?t.fromEquirectangular(s):t.fromCubemap(s);return e.set(s,d),s.addEventListener("dispose",o),d.texture}else return null}}}return s}function r(s){let l=0;const c=6;for(let h=0;h<c;h++)s[h]!==void 0&&l++;return l===c}function o(s){const l=s.target;l.removeEventListener("dispose",o);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:a}}function AT(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function RT(n,e,t,i){const r={},o=new WeakMap;function a(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const v in d.attributes)e.remove(d.attributes[v]);for(const v in d.morphAttributes){const x=d.morphAttributes[v];for(let g=0,_=x.length;g<_;g++)e.remove(x[g])}d.removeEventListener("dispose",a),delete r[d.id];const m=o.get(d);m&&(e.remove(m),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function s(f,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(f){const d=f.attributes;for(const v in d)e.update(d[v],n.ARRAY_BUFFER);const m=f.morphAttributes;for(const v in m){const x=m[v];for(let g=0,_=x.length;g<_;g++)e.update(x[g],n.ARRAY_BUFFER)}}function c(f){const d=[],m=f.index,v=f.attributes.position;let x=0;if(m!==null){const A=m.array;x=m.version;for(let b=0,S=A.length;b<S;b+=3){const C=A[b+0],D=A[b+1],R=A[b+2];d.push(C,D,D,R,R,C)}}else if(v!==void 0){const A=v.array;x=v.version;for(let b=0,S=A.length/3-1;b<S;b+=3){const C=b+0,D=b+1,R=b+2;d.push(C,D,D,R,R,C)}}else return;const g=new(Wm(d)?Jm:Zm)(d,1);g.version=x;const _=o.get(f);_&&e.remove(_),o.set(f,g)}function h(f){const d=o.get(f);if(d){const m=f.index;m!==null&&d.version<m.version&&c(f)}else c(f);return o.get(f)}return{get:s,update:l,getWireframeAttribute:h}}function CT(n,e,t,i){const r=i.isWebGL2;let o;function a(d){o=d}let s,l;function c(d){s=d.type,l=d.bytesPerElement}function h(d,m){n.drawElements(o,m,s,d*l),t.update(m,o,1)}function f(d,m,v){if(v===0)return;let x,g;if(r)x=n,g="drawElementsInstanced";else if(x=e.get("ANGLE_instanced_arrays"),g="drawElementsInstancedANGLE",x===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}x[g](o,m,s,d*l,v),t.update(m,o,v)}this.setMode=a,this.setIndex=c,this.render=h,this.renderInstances=f}function PT(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,s){switch(t.calls++,a){case n.TRIANGLES:t.triangles+=s*(o/3);break;case n.LINES:t.lines+=s*(o/2);break;case n.LINE_STRIP:t.lines+=s*(o-1);break;case n.LINE_LOOP:t.lines+=s*o;break;case n.POINTS:t.points+=s*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function LT(n,e){return n[0]-e[0]}function DT(n,e){return Math.abs(e[1])-Math.abs(n[1])}function NT(n,e,t){const i={},r=new Float32Array(8),o=new WeakMap,a=new Vt,s=[];for(let c=0;c<8;c++)s[c]=[c,0];function l(c,h,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,x=v!==void 0?v.length:0;let g=o.get(h);if(g===void 0||g.count!==x){let te=function(){ae.dispose(),o.delete(h),h.removeEventListener("dispose",te)};var m=te;g!==void 0&&g.texture.dispose();const b=h.morphAttributes.position!==void 0,S=h.morphAttributes.normal!==void 0,C=h.morphAttributes.color!==void 0,D=h.morphAttributes.position||[],R=h.morphAttributes.normal||[],Z=h.morphAttributes.color||[];let M=0;b===!0&&(M=1),S===!0&&(M=2),C===!0&&(M=3);let L=h.attributes.position.count*M,G=1;L>e.maxTextureSize&&(G=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const se=new Float32Array(L*G*4*x),ae=new Ym(se,L,G,x);ae.type=yi,ae.needsUpdate=!0;const B=M*4;for(let ue=0;ue<x;ue++){const re=D[ue],ie=R[ue],q=Z[ue],X=L*G*4*ue;for(let O=0;O<re.count;O++){const W=O*B;b===!0&&(a.fromBufferAttribute(re,O),se[X+W+0]=a.x,se[X+W+1]=a.y,se[X+W+2]=a.z,se[X+W+3]=0),S===!0&&(a.fromBufferAttribute(ie,O),se[X+W+4]=a.x,se[X+W+5]=a.y,se[X+W+6]=a.z,se[X+W+7]=0),C===!0&&(a.fromBufferAttribute(q,O),se[X+W+8]=a.x,se[X+W+9]=a.y,se[X+W+10]=a.z,se[X+W+11]=q.itemSize===4?a.w:1)}}g={count:x,texture:ae,size:new st(L,G)},o.set(h,g),h.addEventListener("dispose",te)}let _=0;for(let b=0;b<d.length;b++)_+=d[b];const A=h.morphTargetsRelative?1:1-_;f.getUniforms().setValue(n,"morphTargetBaseInfluence",A),f.getUniforms().setValue(n,"morphTargetInfluences",d),f.getUniforms().setValue(n,"morphTargetsTexture",g.texture,t),f.getUniforms().setValue(n,"morphTargetsTextureSize",g.size)}else{const v=d===void 0?0:d.length;let x=i[h.id];if(x===void 0||x.length!==v){x=[];for(let S=0;S<v;S++)x[S]=[S,0];i[h.id]=x}for(let S=0;S<v;S++){const C=x[S];C[0]=S,C[1]=d[S]}x.sort(DT);for(let S=0;S<8;S++)S<v&&x[S][1]?(s[S][0]=x[S][0],s[S][1]=x[S][1]):(s[S][0]=Number.MAX_SAFE_INTEGER,s[S][1]=0);s.sort(LT);const g=h.morphAttributes.position,_=h.morphAttributes.normal;let A=0;for(let S=0;S<8;S++){const C=s[S],D=C[0],R=C[1];D!==Number.MAX_SAFE_INTEGER&&R?(g&&h.getAttribute("morphTarget"+S)!==g[D]&&h.setAttribute("morphTarget"+S,g[D]),_&&h.getAttribute("morphNormal"+S)!==_[D]&&h.setAttribute("morphNormal"+S,_[D]),r[S]=R,A+=R):(g&&h.hasAttribute("morphTarget"+S)===!0&&h.deleteAttribute("morphTarget"+S),_&&h.hasAttribute("morphNormal"+S)===!0&&h.deleteAttribute("morphNormal"+S),r[S]=0)}const b=h.morphTargetsRelative?1:1-A;f.getUniforms().setValue(n,"morphTargetBaseInfluence",b),f.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function UT(n,e,t,i){let r=new WeakMap;function o(l){const c=i.render.frame,h=l.geometry,f=e.get(l,h);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",s)===!1&&l.addEventListener("dispose",s),r.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return f}function a(){r=new WeakMap}function s(l){const c=l.target;c.removeEventListener("dispose",s),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:o,dispose:a}}const rg=new fn,og=new Ym,sg=new xM,ag=new tg,Fd=[],Bd=[],kd=new Float32Array(16),zd=new Float32Array(9),Hd=new Float32Array(4);function to(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let o=Fd[r];if(o===void 0&&(o=new Float32Array(r),Fd[r]=o),e!==0){i.toArray(o,0);for(let a=1,s=0;a!==e;++a)s+=t,n[a].toArray(o,s)}return o}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Nt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ga(n,e){let t=Bd[e];t===void 0&&(t=new Int32Array(e),Bd[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function IT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function OT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),Nt(t,e)}}function FT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),Nt(t,e)}}function BT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),Nt(t,e)}}function kT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;Hd.set(i),n.uniformMatrix2fv(this.addr,!1,Hd),Nt(t,i)}}function zT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;zd.set(i),n.uniformMatrix3fv(this.addr,!1,zd),Nt(t,i)}}function HT(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,i))return;kd.set(i),n.uniformMatrix4fv(this.addr,!1,kd),Nt(t,i)}}function GT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function VT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),Nt(t,e)}}function WT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),Nt(t,e)}}function XT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),Nt(t,e)}}function qT(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function YT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),Nt(t,e)}}function $T(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),Nt(t,e)}}function jT(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),Nt(t,e)}}function KT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||rg,r)}function ZT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||sg,r)}function JT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||ag,r)}function QT(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||og,r)}function ew(n){switch(n){case 5126:return IT;case 35664:return OT;case 35665:return FT;case 35666:return BT;case 35674:return kT;case 35675:return zT;case 35676:return HT;case 5124:case 35670:return GT;case 35667:case 35671:return VT;case 35668:case 35672:return WT;case 35669:case 35673:return XT;case 5125:return qT;case 36294:return YT;case 36295:return $T;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return KT;case 35679:case 36299:case 36307:return ZT;case 35680:case 36300:case 36308:case 36293:return JT;case 36289:case 36303:case 36311:case 36292:return QT}}function tw(n,e){n.uniform1fv(this.addr,e)}function nw(n,e){const t=to(e,this.size,2);n.uniform2fv(this.addr,t)}function iw(n,e){const t=to(e,this.size,3);n.uniform3fv(this.addr,t)}function rw(n,e){const t=to(e,this.size,4);n.uniform4fv(this.addr,t)}function ow(n,e){const t=to(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function sw(n,e){const t=to(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function aw(n,e){const t=to(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function lw(n,e){n.uniform1iv(this.addr,e)}function cw(n,e){n.uniform2iv(this.addr,e)}function uw(n,e){n.uniform3iv(this.addr,e)}function fw(n,e){n.uniform4iv(this.addr,e)}function hw(n,e){n.uniform1uiv(this.addr,e)}function dw(n,e){n.uniform2uiv(this.addr,e)}function pw(n,e){n.uniform3uiv(this.addr,e)}function mw(n,e){n.uniform4uiv(this.addr,e)}function gw(n,e,t){const i=this.cache,r=e.length,o=Ga(t,r);Dt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||rg,o[a])}function _w(n,e,t){const i=this.cache,r=e.length,o=Ga(t,r);Dt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||sg,o[a])}function vw(n,e,t){const i=this.cache,r=e.length,o=Ga(t,r);Dt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||ag,o[a])}function xw(n,e,t){const i=this.cache,r=e.length,o=Ga(t,r);Dt(i,o)||(n.uniform1iv(this.addr,o),Nt(i,o));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||og,o[a])}function yw(n){switch(n){case 5126:return tw;case 35664:return nw;case 35665:return iw;case 35666:return rw;case 35674:return ow;case 35675:return sw;case 35676:return aw;case 5124:case 35670:return lw;case 35667:case 35671:return cw;case 35668:case 35672:return uw;case 35669:case 35673:return fw;case 5125:return hw;case 36294:return dw;case 36295:return pw;case 36296:return mw;case 35678:case 36198:case 36298:case 36306:case 35682:return gw;case 35679:case 36299:case 36307:return _w;case 35680:case 36300:case 36308:case 36293:return vw;case 36289:case 36303:case 36311:case 36292:return xw}}class Sw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ew(t.type)}}class Mw{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=yw(t.type)}}class Ew{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let o=0,a=r.length;o!==a;++o){const s=r[o];s.setValue(e,t[s.id],i)}}}const wc=/(\w+)(\])?(\[|\.)?/g;function Gd(n,e){n.seq.push(e),n.map[e.id]=e}function bw(n,e,t){const i=n.name,r=i.length;for(wc.lastIndex=0;;){const o=wc.exec(i),a=wc.lastIndex;let s=o[1];const l=o[2]==="]",c=o[3];if(l&&(s=s|0),c===void 0||c==="["&&a+2===r){Gd(t,c===void 0?new Sw(s,n,e):new Mw(s,n,e));break}else{let f=t.map[s];f===void 0&&(f=new Ew(s),Gd(t,f)),t=f}}}class ha{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const o=e.getActiveUniform(t,r),a=e.getUniformLocation(t,o.name);bw(o,a,this)}}setValue(e,t,i,r){const o=this.map[t];o!==void 0&&o.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let o=0,a=t.length;o!==a;++o){const s=t[o],l=i[s.id];l.needsUpdate!==!1&&s.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,o=e.length;r!==o;++r){const a=e[r];a.id in t&&i.push(a)}return i}}function Vd(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Tw=37297;let ww=0;function Aw(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let a=r;a<o;a++){const s=a+1;i.push(`${s===e?">":" "} ${s}: ${t[a]}`)}return i.join(`
`)}function Rw(n){const e=gt.getPrimaries(gt.workingColorSpace),t=gt.getPrimaries(n);let i;switch(e===t?i="":e===Ra&&t===Aa?i="LinearDisplayP3ToLinearSRGB":e===Aa&&t===Ra&&(i="LinearSRGBToLinearDisplayP3"),n){case ai:case ka:return[i,"LinearTransferOETF"];case Gt:case Eu:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),[i,"LinearTransferOETF"]}}function Wd(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const o=/ERROR: 0:(\d+)/.exec(r);if(o){const a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Aw(n.getShaderSource(e),a)}else return r}function Cw(n,e){const t=Rw(e);return`vec4 ${n}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Pw(n,e){let t;switch(e){case wS:t="Linear";break;case AS:t="Reinhard";break;case RS:t="OptimizedCineon";break;case CS:t="ACESFilmic";break;case PS:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function Lw(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(Do).join(`
`)}function Dw(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function Nw(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const o=n.getActiveAttrib(e,r),a=o.name;let s=1;o.type===n.FLOAT_MAT2&&(s=2),o.type===n.FLOAT_MAT3&&(s=3),o.type===n.FLOAT_MAT4&&(s=4),t[a]={type:o.type,location:n.getAttribLocation(e,a),locationSize:s}}return t}function Do(n){return n!==""}function Xd(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function qd(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Uw=/^[ \t]*#include +<([\w\d./]+)>/gm;function nu(n){return n.replace(Uw,Ow)}const Iw=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function Ow(n,e){let t=nt[e];if(t===void 0){const i=Iw.get(e);if(i!==void 0)t=nt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return nu(t)}const Fw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yd(n){return n.replace(Fw,Bw)}function Bw(n,e,t,i){let r="";for(let o=parseInt(e);o<parseInt(t);o++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return r}function $d(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function kw(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Um?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===eS?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===ei&&(e="SHADOWMAP_TYPE_VSM"),e}function zw(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case $r:case jr:e="ENVMAP_TYPE_CUBE";break;case Ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Hw(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case jr:e="ENVMAP_MODE_REFRACTION";break}return e}function Gw(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Im:e="ENVMAP_BLENDING_MULTIPLY";break;case bS:e="ENVMAP_BLENDING_MIX";break;case TS:e="ENVMAP_BLENDING_ADD";break}return e}function Vw(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function Ww(n,e,t,i){const r=n.getContext(),o=t.defines;let a=t.vertexShader,s=t.fragmentShader;const l=kw(t),c=zw(t),h=Hw(t),f=Gw(t),d=Vw(t),m=t.isWebGL2?"":Lw(t),v=Dw(o),x=r.createProgram();let g,_,A=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Do).join(`
`),g.length>0&&(g+=`
`),_=[m,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(Do).join(`
`),_.length>0&&(_+=`
`)):(g=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Do).join(`
`),_=[m,$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ei?"#define TONE_MAPPING":"",t.toneMapping!==Ei?nt.tonemapping_pars_fragment:"",t.toneMapping!==Ei?Pw("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Cw("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Do).join(`
`)),a=nu(a),a=Xd(a,t),a=qd(a,t),s=nu(s),s=Xd(s,t),s=qd(s,t),a=Yd(a),s=Yd(s),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(A=`#version 300 es
`,g=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,_=["precision mediump sampler2DArray;","#define varying in",t.glslVersion===hd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const b=A+g+a,S=A+_+s,C=Vd(r,r.VERTEX_SHADER,b),D=Vd(r,r.FRAGMENT_SHADER,S);r.attachShader(x,C),r.attachShader(x,D),t.index0AttributeName!==void 0?r.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function R(G){if(n.debug.checkShaderErrors){const se=r.getProgramInfoLog(x).trim(),ae=r.getShaderInfoLog(C).trim(),B=r.getShaderInfoLog(D).trim();let te=!0,ue=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(te=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,x,C,D);else{const re=Wd(r,C,"vertex"),ie=Wd(r,D,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Program Info Log: `+se+`
`+re+`
`+ie)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(ae===""||B==="")&&(ue=!1);ue&&(G.diagnostics={runnable:te,programLog:se,vertexShader:{log:ae,prefix:g},fragmentShader:{log:B,prefix:_}})}r.deleteShader(C),r.deleteShader(D),Z=new ha(r,x),M=Nw(r,x)}let Z;this.getUniforms=function(){return Z===void 0&&R(this),Z};let M;this.getAttributes=function(){return M===void 0&&R(this),M};let L=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return L===!1&&(L=r.getProgramParameter(x,Tw)),L},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ww++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=C,this.fragmentShader=D,this}let Xw=0;class qw{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new Yw(e),t.set(e,i)),i}}class Yw{constructor(e){this.id=Xw++,this.code=e,this.usedTimes=0}}function $w(n,e,t,i,r,o,a){const s=new $m,l=new qw,c=[],h=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let m=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return M===0?"uv":`uv${M}`}function g(M,L,G,se,ae){const B=se.fog,te=ae.geometry,ue=M.isMeshStandardMaterial?se.environment:null,re=(M.isMeshStandardMaterial?t:e).get(M.envMap||ue),ie=re&&re.mapping===Ba?re.image.height:null,q=v[M.type];M.precision!==null&&(m=r.getMaxPrecision(M.precision),m!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",m,"instead."));const X=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,O=X!==void 0?X.length:0;let W=0;te.morphAttributes.position!==void 0&&(W=1),te.morphAttributes.normal!==void 0&&(W=2),te.morphAttributes.color!==void 0&&(W=3);let ye,xe,he,Ce;if(q){const Et=zn[q];ye=Et.vertexShader,xe=Et.fragmentShader}else ye=M.vertexShader,xe=M.fragmentShader,l.update(M),he=l.getVertexShaderID(M),Ce=l.getFragmentShaderID(M);const He=n.getRenderTarget(),Fe=ae.isInstancedMesh===!0,Ie=!!M.map,ct=!!M.matcap,Ue=!!re,k=!!M.aoMap,Mt=!!M.lightMap,Pe=!!M.bumpMap,ze=!!M.normalMap,We=!!M.displacementMap,Je=!!M.emissiveMap,Be=!!M.metalnessMap,Le=!!M.roughnessMap,rt=M.anisotropy>0,dt=M.clearcoat>0,vt=M.iridescence>0,P=M.sheen>0,E=M.transmission>0,Y=rt&&!!M.anisotropyMap,ve=dt&&!!M.clearcoatMap,pe=dt&&!!M.clearcoatNormalMap,me=dt&&!!M.clearcoatRoughnessMap,De=vt&&!!M.iridescenceMap,Me=vt&&!!M.iridescenceThicknessMap,we=P&&!!M.sheenColorMap,U=P&&!!M.sheenRoughnessMap,Se=!!M.specularMap,fe=!!M.specularColorMap,le=!!M.specularIntensityMap,z=E&&!!M.transmissionMap,ce=E&&!!M.thicknessMap,$=!!M.gradientMap,Ae=!!M.alphaMap,et=M.alphaTest>0,F=!!M.alphaHash,Ee=!!M.extensions,ge=!!te.attributes.uv1,J=!!te.attributes.uv2,de=!!te.attributes.uv3;let ke=Ei;return M.toneMapped&&(He===null||He.isXRRenderTarget===!0)&&(ke=n.toneMapping),{isWebGL2:h,shaderID:q,shaderType:M.type,shaderName:M.name,vertexShader:ye,fragmentShader:xe,defines:M.defines,customVertexShaderID:he,customFragmentShaderID:Ce,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:m,instancing:Fe,instancingColor:Fe&&ae.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:He===null?n.outputColorSpace:He.isXRRenderTarget===!0?He.texture.colorSpace:ai,map:Ie,matcap:ct,envMap:Ue,envMapMode:Ue&&re.mapping,envMapCubeUVHeight:ie,aoMap:k,lightMap:Mt,bumpMap:Pe,normalMap:ze,displacementMap:d&&We,emissiveMap:Je,normalMapObjectSpace:ze&&M.normalMapType===WS,normalMapTangentSpace:ze&&M.normalMapType===VS,metalnessMap:Be,roughnessMap:Le,anisotropy:rt,anisotropyMap:Y,clearcoat:dt,clearcoatMap:ve,clearcoatNormalMap:pe,clearcoatRoughnessMap:me,iridescence:vt,iridescenceMap:De,iridescenceThicknessMap:Me,sheen:P,sheenColorMap:we,sheenRoughnessMap:U,specularMap:Se,specularColorMap:fe,specularIntensityMap:le,transmission:E,transmissionMap:z,thicknessMap:ce,gradientMap:$,opaque:M.transparent===!1&&M.blending===zr,alphaMap:Ae,alphaTest:et,alphaHash:F,combine:M.combine,mapUv:Ie&&x(M.map.channel),aoMapUv:k&&x(M.aoMap.channel),lightMapUv:Mt&&x(M.lightMap.channel),bumpMapUv:Pe&&x(M.bumpMap.channel),normalMapUv:ze&&x(M.normalMap.channel),displacementMapUv:We&&x(M.displacementMap.channel),emissiveMapUv:Je&&x(M.emissiveMap.channel),metalnessMapUv:Be&&x(M.metalnessMap.channel),roughnessMapUv:Le&&x(M.roughnessMap.channel),anisotropyMapUv:Y&&x(M.anisotropyMap.channel),clearcoatMapUv:ve&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:pe&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:me&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:we&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:U&&x(M.sheenRoughnessMap.channel),specularMapUv:Se&&x(M.specularMap.channel),specularColorMapUv:fe&&x(M.specularColorMap.channel),specularIntensityMapUv:le&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:ce&&x(M.thicknessMap.channel),alphaMapUv:Ae&&x(M.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(ze||rt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,vertexUv1s:ge,vertexUv2s:J,vertexUv3s:de,pointsUvs:ae.isPoints===!0&&!!te.attributes.uv&&(Ie||Ae),fog:!!B,useFog:M.fog===!0,fogExp2:B&&B.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:ae.isSkinnedMesh===!0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:O,morphTextureStride:W,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&G.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,useLegacyLights:n._useLegacyLights,decodeVideoTexture:Ie&&M.map.isVideoTexture===!0&&gt.getTransfer(M.map.colorSpace)===St,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===ti,flipSided:M.side===sn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Ee&&M.extensions.derivatives===!0,extensionFragDepth:Ee&&M.extensions.fragDepth===!0,extensionDrawBuffers:Ee&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Ee&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:h||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:h||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:h||i.has("EXT_shader_texture_lod"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()}}function _(M){const L=[];if(M.shaderID?L.push(M.shaderID):(L.push(M.customVertexShaderID),L.push(M.customFragmentShaderID)),M.defines!==void 0)for(const G in M.defines)L.push(G),L.push(M.defines[G]);return M.isRawShaderMaterial===!1&&(A(L,M),b(L,M),L.push(n.outputColorSpace)),L.push(M.customProgramCacheKey),L.join()}function A(M,L){M.push(L.precision),M.push(L.outputColorSpace),M.push(L.envMapMode),M.push(L.envMapCubeUVHeight),M.push(L.mapUv),M.push(L.alphaMapUv),M.push(L.lightMapUv),M.push(L.aoMapUv),M.push(L.bumpMapUv),M.push(L.normalMapUv),M.push(L.displacementMapUv),M.push(L.emissiveMapUv),M.push(L.metalnessMapUv),M.push(L.roughnessMapUv),M.push(L.anisotropyMapUv),M.push(L.clearcoatMapUv),M.push(L.clearcoatNormalMapUv),M.push(L.clearcoatRoughnessMapUv),M.push(L.iridescenceMapUv),M.push(L.iridescenceThicknessMapUv),M.push(L.sheenColorMapUv),M.push(L.sheenRoughnessMapUv),M.push(L.specularMapUv),M.push(L.specularColorMapUv),M.push(L.specularIntensityMapUv),M.push(L.transmissionMapUv),M.push(L.thicknessMapUv),M.push(L.combine),M.push(L.fogExp2),M.push(L.sizeAttenuation),M.push(L.morphTargetsCount),M.push(L.morphAttributeCount),M.push(L.numDirLights),M.push(L.numPointLights),M.push(L.numSpotLights),M.push(L.numSpotLightMaps),M.push(L.numHemiLights),M.push(L.numRectAreaLights),M.push(L.numDirLightShadows),M.push(L.numPointLightShadows),M.push(L.numSpotLightShadows),M.push(L.numSpotLightShadowsWithMaps),M.push(L.numLightProbes),M.push(L.shadowMapType),M.push(L.toneMapping),M.push(L.numClippingPlanes),M.push(L.numClipIntersection),M.push(L.depthPacking)}function b(M,L){s.disableAll(),L.isWebGL2&&s.enable(0),L.supportsVertexTextures&&s.enable(1),L.instancing&&s.enable(2),L.instancingColor&&s.enable(3),L.matcap&&s.enable(4),L.envMap&&s.enable(5),L.normalMapObjectSpace&&s.enable(6),L.normalMapTangentSpace&&s.enable(7),L.clearcoat&&s.enable(8),L.iridescence&&s.enable(9),L.alphaTest&&s.enable(10),L.vertexColors&&s.enable(11),L.vertexAlphas&&s.enable(12),L.vertexUv1s&&s.enable(13),L.vertexUv2s&&s.enable(14),L.vertexUv3s&&s.enable(15),L.vertexTangents&&s.enable(16),L.anisotropy&&s.enable(17),L.alphaHash&&s.enable(18),M.push(s.mask),s.disableAll(),L.fog&&s.enable(0),L.useFog&&s.enable(1),L.flatShading&&s.enable(2),L.logarithmicDepthBuffer&&s.enable(3),L.skinning&&s.enable(4),L.morphTargets&&s.enable(5),L.morphNormals&&s.enable(6),L.morphColors&&s.enable(7),L.premultipliedAlpha&&s.enable(8),L.shadowMapEnabled&&s.enable(9),L.useLegacyLights&&s.enable(10),L.doubleSided&&s.enable(11),L.flipSided&&s.enable(12),L.useDepthPacking&&s.enable(13),L.dithering&&s.enable(14),L.transmission&&s.enable(15),L.sheen&&s.enable(16),L.opaque&&s.enable(17),L.pointsUvs&&s.enable(18),L.decodeVideoTexture&&s.enable(19),M.push(s.mask)}function S(M){const L=v[M.type];let G;if(L){const se=zn[L];G=DM.clone(se.uniforms)}else G=M.uniforms;return G}function C(M,L){let G;for(let se=0,ae=c.length;se<ae;se++){const B=c[se];if(B.cacheKey===L){G=B,++G.usedTimes;break}}return G===void 0&&(G=new Ww(n,L,M,o),c.push(G)),G}function D(M){if(--M.usedTimes===0){const L=c.indexOf(M);c[L]=c[c.length-1],c.pop(),M.destroy()}}function R(M){l.remove(M)}function Z(){l.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:S,acquireProgram:C,releaseProgram:D,releaseShaderCache:R,programs:c,dispose:Z}}function jw(){let n=new WeakMap;function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function t(o){n.delete(o)}function i(o,a,s){n.get(o)[a]=s}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function Kw(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function jd(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function Kd(){const n=[];let e=0;const t=[],i=[],r=[];function o(){e=0,t.length=0,i.length=0,r.length=0}function a(f,d,m,v,x,g){let _=n[e];return _===void 0?(_={id:f.id,object:f,geometry:d,material:m,groupOrder:v,renderOrder:f.renderOrder,z:x,group:g},n[e]=_):(_.id=f.id,_.object=f,_.geometry=d,_.material=m,_.groupOrder=v,_.renderOrder=f.renderOrder,_.z=x,_.group=g),e++,_}function s(f,d,m,v,x,g){const _=a(f,d,m,v,x,g);m.transmission>0?i.push(_):m.transparent===!0?r.push(_):t.push(_)}function l(f,d,m,v,x,g){const _=a(f,d,m,v,x,g);m.transmission>0?i.unshift(_):m.transparent===!0?r.unshift(_):t.unshift(_)}function c(f,d){t.length>1&&t.sort(f||Kw),i.length>1&&i.sort(d||jd),r.length>1&&r.sort(d||jd)}function h(){for(let f=e,d=n.length;f<d;f++){const m=n[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:i,transparent:r,init:o,push:s,unshift:l,finish:h,sort:c}}function Zw(){let n=new WeakMap;function e(i,r){const o=n.get(i);let a;return o===void 0?(a=new Kd,n.set(i,[a])):r>=o.length?(a=new Kd,o.push(a)):a=o[r],a}function t(){n=new WeakMap}return{get:e,dispose:t}}function Jw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new V,color:new ft};break;case"SpotLight":t={position:new V,direction:new V,color:new ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new V,color:new ft,distance:0,decay:0};break;case"HemisphereLight":t={direction:new V,skyColor:new ft,groundColor:new ft};break;case"RectAreaLight":t={color:new ft,position:new V,halfWidth:new V,halfHeight:new V};break}return n[e.id]=t,t}}}function Qw(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let eA=0;function tA(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function nA(n,e){const t=new Jw,i=Qw(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new V);const o=new V,a=new Lt,s=new Lt;function l(h,f){let d=0,m=0,v=0;for(let se=0;se<9;se++)r.probe[se].set(0,0,0);let x=0,g=0,_=0,A=0,b=0,S=0,C=0,D=0,R=0,Z=0,M=0;h.sort(tA);const L=f===!0?Math.PI:1;for(let se=0,ae=h.length;se<ae;se++){const B=h[se],te=B.color,ue=B.intensity,re=B.distance,ie=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)d+=te.r*ue*L,m+=te.g*ue*L,v+=te.b*ue*L;else if(B.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(B.sh.coefficients[q],ue);M++}else if(B.isDirectionalLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*L),B.castShadow){const X=B.shadow,O=i.get(B);O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,r.directionalShadow[x]=O,r.directionalShadowMap[x]=ie,r.directionalShadowMatrix[x]=B.shadow.matrix,S++}r.directional[x]=q,x++}else if(B.isSpotLight){const q=t.get(B);q.position.setFromMatrixPosition(B.matrixWorld),q.color.copy(te).multiplyScalar(ue*L),q.distance=re,q.coneCos=Math.cos(B.angle),q.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),q.decay=B.decay,r.spot[_]=q;const X=B.shadow;if(B.map&&(r.spotLightMap[R]=B.map,R++,X.updateMatrices(B),B.castShadow&&Z++),r.spotLightMatrix[_]=X.matrix,B.castShadow){const O=i.get(B);O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,r.spotShadow[_]=O,r.spotShadowMap[_]=ie,D++}_++}else if(B.isRectAreaLight){const q=t.get(B);q.color.copy(te).multiplyScalar(ue),q.halfWidth.set(B.width*.5,0,0),q.halfHeight.set(0,B.height*.5,0),r.rectArea[A]=q,A++}else if(B.isPointLight){const q=t.get(B);if(q.color.copy(B.color).multiplyScalar(B.intensity*L),q.distance=B.distance,q.decay=B.decay,B.castShadow){const X=B.shadow,O=i.get(B);O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,r.pointShadow[g]=O,r.pointShadowMap[g]=ie,r.pointShadowMatrix[g]=B.shadow.matrix,C++}r.point[g]=q,g++}else if(B.isHemisphereLight){const q=t.get(B);q.skyColor.copy(B.color).multiplyScalar(ue*L),q.groundColor.copy(B.groundColor).multiplyScalar(ue*L),r.hemi[b]=q,b++}}A>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_FLOAT_1,r.rectAreaLTC2=Te.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Te.LTC_HALF_1,r.rectAreaLTC2=Te.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=m,r.ambient[2]=v;const G=r.hash;(G.directionalLength!==x||G.pointLength!==g||G.spotLength!==_||G.rectAreaLength!==A||G.hemiLength!==b||G.numDirectionalShadows!==S||G.numPointShadows!==C||G.numSpotShadows!==D||G.numSpotMaps!==R||G.numLightProbes!==M)&&(r.directional.length=x,r.spot.length=_,r.rectArea.length=A,r.point.length=g,r.hemi.length=b,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=C,r.pointShadowMap.length=C,r.spotShadow.length=D,r.spotShadowMap.length=D,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=C,r.spotLightMatrix.length=D+R-Z,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=Z,r.numLightProbes=M,G.directionalLength=x,G.pointLength=g,G.spotLength=_,G.rectAreaLength=A,G.hemiLength=b,G.numDirectionalShadows=S,G.numPointShadows=C,G.numSpotShadows=D,G.numSpotMaps=R,G.numLightProbes=M,r.version=eA++)}function c(h,f){let d=0,m=0,v=0,x=0,g=0;const _=f.matrixWorldInverse;for(let A=0,b=h.length;A<b;A++){const S=h[A];if(S.isDirectionalLight){const C=r.directional[d];C.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),d++}else if(S.isSpotLight){const C=r.spot[v];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(_),C.direction.setFromMatrixPosition(S.matrixWorld),o.setFromMatrixPosition(S.target.matrixWorld),C.direction.sub(o),C.direction.transformDirection(_),v++}else if(S.isRectAreaLight){const C=r.rectArea[x];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(_),s.identity(),a.copy(S.matrixWorld),a.premultiply(_),s.extractRotation(a),C.halfWidth.set(S.width*.5,0,0),C.halfHeight.set(0,S.height*.5,0),C.halfWidth.applyMatrix4(s),C.halfHeight.applyMatrix4(s),x++}else if(S.isPointLight){const C=r.point[m];C.position.setFromMatrixPosition(S.matrixWorld),C.position.applyMatrix4(_),m++}else if(S.isHemisphereLight){const C=r.hemi[g];C.direction.setFromMatrixPosition(S.matrixWorld),C.direction.transformDirection(_),g++}}}return{setup:l,setupView:c,state:r}}function Zd(n,e){const t=new nA(n,e),i=[],r=[];function o(){i.length=0,r.length=0}function a(f){i.push(f)}function s(f){r.push(f)}function l(f){t.setup(i,f)}function c(f){t.setupView(i,f)}return{init:o,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:s}}function iA(n,e){let t=new WeakMap;function i(o,a=0){const s=t.get(o);let l;return s===void 0?(l=new Zd(n,e),t.set(o,[l])):a>=s.length?(l=new Zd(n,e),s.push(l)):l=s[a],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class rA extends eo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=HS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class oA extends eo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const sA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,aA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lA(n,e,t){let i=new ng;const r=new st,o=new st,a=new Vt,s=new rA({depthPacking:GS}),l=new oA,c={},h=t.maxTextureSize,f={[Ti]:sn,[sn]:Ti,[ti]:ti},d=new er({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:sA,fragmentShader:aA}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new On;v.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Si(v,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Um;let _=this.type;this.render=function(C,D,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||C.length===0)return;const Z=n.getRenderTarget(),M=n.getActiveCubeFace(),L=n.getActiveMipmapLevel(),G=n.state;G.setBlending(Mi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const se=_!==ei&&this.type===ei,ae=_===ei&&this.type!==ei;for(let B=0,te=C.length;B<te;B++){const ue=C[B],re=ue.shadow;if(re===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(re.autoUpdate===!1&&re.needsUpdate===!1)continue;r.copy(re.mapSize);const ie=re.getFrameExtents();if(r.multiply(ie),o.copy(re.mapSize),(r.x>h||r.y>h)&&(r.x>h&&(o.x=Math.floor(h/ie.x),r.x=o.x*ie.x,re.mapSize.x=o.x),r.y>h&&(o.y=Math.floor(h/ie.y),r.y=o.y*ie.y,re.mapSize.y=o.y)),re.map===null||se===!0||ae===!0){const X=this.type!==ei?{minFilter:Jt,magFilter:Jt}:{};re.map!==null&&re.map.dispose(),re.map=new Ji(r.x,r.y,X),re.map.texture.name=ue.name+".shadowMap",re.camera.updateProjectionMatrix()}n.setRenderTarget(re.map),n.clear();const q=re.getViewportCount();for(let X=0;X<q;X++){const O=re.getViewport(X);a.set(o.x*O.x,o.y*O.y,o.x*O.z,o.y*O.w),G.viewport(a),re.updateMatrices(ue,X),i=re.getFrustum(),S(D,R,re.camera,ue,this.type)}re.isPointLightShadow!==!0&&this.type===ei&&A(re,R),re.needsUpdate=!1}_=this.type,g.needsUpdate=!1,n.setRenderTarget(Z,M,L)};function A(C,D){const R=e.update(x);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,m.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ji(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,n.setRenderTarget(C.mapPass),n.clear(),n.renderBufferDirect(D,null,R,d,x,null),m.uniforms.shadow_pass.value=C.mapPass.texture,m.uniforms.resolution.value=C.mapSize,m.uniforms.radius.value=C.radius,n.setRenderTarget(C.map),n.clear(),n.renderBufferDirect(D,null,R,m,x,null)}function b(C,D,R,Z){let M=null;const L=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(L!==void 0)M=L;else if(M=R.isPointLight===!0?l:s,n.localClippingEnabled&&D.clipShadows===!0&&Array.isArray(D.clippingPlanes)&&D.clippingPlanes.length!==0||D.displacementMap&&D.displacementScale!==0||D.alphaMap&&D.alphaTest>0||D.map&&D.alphaTest>0){const G=M.uuid,se=D.uuid;let ae=c[G];ae===void 0&&(ae={},c[G]=ae);let B=ae[se];B===void 0&&(B=M.clone(),ae[se]=B),M=B}if(M.visible=D.visible,M.wireframe=D.wireframe,Z===ei?M.side=D.shadowSide!==null?D.shadowSide:D.side:M.side=D.shadowSide!==null?D.shadowSide:f[D.side],M.alphaMap=D.alphaMap,M.alphaTest=D.alphaTest,M.map=D.map,M.clipShadows=D.clipShadows,M.clippingPlanes=D.clippingPlanes,M.clipIntersection=D.clipIntersection,M.displacementMap=D.displacementMap,M.displacementScale=D.displacementScale,M.displacementBias=D.displacementBias,M.wireframeLinewidth=D.wireframeLinewidth,M.linewidth=D.linewidth,R.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const G=n.properties.get(M);G.light=R}return M}function S(C,D,R,Z,M){if(C.visible===!1)return;if(C.layers.test(D.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&M===ei)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const se=e.update(C),ae=C.material;if(Array.isArray(ae)){const B=se.groups;for(let te=0,ue=B.length;te<ue;te++){const re=B[te],ie=ae[re.materialIndex];if(ie&&ie.visible){const q=b(C,ie,Z,M);n.renderBufferDirect(R,null,se,q,C,re)}}}else if(ae.visible){const B=b(C,ae,Z,M);n.renderBufferDirect(R,null,se,B,C,null)}}const G=C.children;for(let se=0,ae=G.length;se<ae;se++)S(G[se],D,R,Z,M)}}function cA(n,e,t){const i=t.isWebGL2;function r(){let F=!1;const Ee=new Vt;let ge=null;const J=new Vt(0,0,0,0);return{setMask:function(de){ge!==de&&!F&&(n.colorMask(de,de,de,de),ge=de)},setLocked:function(de){F=de},setClear:function(de,ke,it,Et,jt){jt===!0&&(de*=Et,ke*=Et,it*=Et),Ee.set(de,ke,it,Et),J.equals(Ee)===!1&&(n.clearColor(de,ke,it,Et),J.copy(Ee))},reset:function(){F=!1,ge=null,J.set(-1,0,0,0)}}}function o(){let F=!1,Ee=null,ge=null,J=null;return{setTest:function(de){de?Ie(n.DEPTH_TEST):ct(n.DEPTH_TEST)},setMask:function(de){Ee!==de&&!F&&(n.depthMask(de),Ee=de)},setFunc:function(de){if(ge!==de){switch(de){case _S:n.depthFunc(n.NEVER);break;case vS:n.depthFunc(n.ALWAYS);break;case xS:n.depthFunc(n.LESS);break;case Ta:n.depthFunc(n.LEQUAL);break;case yS:n.depthFunc(n.EQUAL);break;case SS:n.depthFunc(n.GEQUAL);break;case MS:n.depthFunc(n.GREATER);break;case ES:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ge=de}},setLocked:function(de){F=de},setClear:function(de){J!==de&&(n.clearDepth(de),J=de)},reset:function(){F=!1,Ee=null,ge=null,J=null}}}function a(){let F=!1,Ee=null,ge=null,J=null,de=null,ke=null,it=null,Et=null,jt=null;return{setTest:function(pt){F||(pt?Ie(n.STENCIL_TEST):ct(n.STENCIL_TEST))},setMask:function(pt){Ee!==pt&&!F&&(n.stencilMask(pt),Ee=pt)},setFunc:function(pt,Ut,an){(ge!==pt||J!==Ut||de!==an)&&(n.stencilFunc(pt,Ut,an),ge=pt,J=Ut,de=an)},setOp:function(pt,Ut,an){(ke!==pt||it!==Ut||Et!==an)&&(n.stencilOp(pt,Ut,an),ke=pt,it=Ut,Et=an)},setLocked:function(pt){F=pt},setClear:function(pt){jt!==pt&&(n.clearStencil(pt),jt=pt)},reset:function(){F=!1,Ee=null,ge=null,J=null,de=null,ke=null,it=null,Et=null,jt=null}}}const s=new r,l=new o,c=new a,h=new WeakMap,f=new WeakMap;let d={},m={},v=new WeakMap,x=[],g=null,_=!1,A=null,b=null,S=null,C=null,D=null,R=null,Z=null,M=new ft(0,0,0),L=0,G=!1,se=null,ae=null,B=null,te=null,ue=null;const re=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ie=!1,q=0;const X=n.getParameter(n.VERSION);X.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(X)[1]),ie=q>=1):X.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),ie=q>=2);let O=null,W={};const ye=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),he=new Vt().fromArray(ye),Ce=new Vt().fromArray(xe);function He(F,Ee,ge,J){const de=new Uint8Array(4),ke=n.createTexture();n.bindTexture(F,ke),n.texParameteri(F,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(F,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let it=0;it<ge;it++)i&&(F===n.TEXTURE_3D||F===n.TEXTURE_2D_ARRAY)?n.texImage3D(Ee,0,n.RGBA,1,1,J,0,n.RGBA,n.UNSIGNED_BYTE,de):n.texImage2D(Ee+it,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,de);return ke}const Fe={};Fe[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),Fe[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(Fe[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Fe[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),s.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ie(n.DEPTH_TEST),l.setFunc(Ta),Be(!1),Le(Dh),Ie(n.CULL_FACE),We(Mi);function Ie(F){d[F]!==!0&&(n.enable(F),d[F]=!0)}function ct(F){d[F]!==!1&&(n.disable(F),d[F]=!1)}function Ue(F,Ee){return m[F]!==Ee?(n.bindFramebuffer(F,Ee),m[F]=Ee,i&&(F===n.DRAW_FRAMEBUFFER&&(m[n.FRAMEBUFFER]=Ee),F===n.FRAMEBUFFER&&(m[n.DRAW_FRAMEBUFFER]=Ee)),!0):!1}function k(F,Ee){let ge=x,J=!1;if(F)if(ge=v.get(Ee),ge===void 0&&(ge=[],v.set(Ee,ge)),F.isWebGLMultipleRenderTargets){const de=F.texture;if(ge.length!==de.length||ge[0]!==n.COLOR_ATTACHMENT0){for(let ke=0,it=de.length;ke<it;ke++)ge[ke]=n.COLOR_ATTACHMENT0+ke;ge.length=de.length,J=!0}}else ge[0]!==n.COLOR_ATTACHMENT0&&(ge[0]=n.COLOR_ATTACHMENT0,J=!0);else ge[0]!==n.BACK&&(ge[0]=n.BACK,J=!0);J&&(t.isWebGL2?n.drawBuffers(ge):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ge))}function Mt(F){return g!==F?(n.useProgram(F),g=F,!0):!1}const Pe={[Vi]:n.FUNC_ADD,[nS]:n.FUNC_SUBTRACT,[iS]:n.FUNC_REVERSE_SUBTRACT};if(i)Pe[Oh]=n.MIN,Pe[Fh]=n.MAX;else{const F=e.get("EXT_blend_minmax");F!==null&&(Pe[Oh]=F.MIN_EXT,Pe[Fh]=F.MAX_EXT)}const ze={[rS]:n.ZERO,[oS]:n.ONE,[sS]:n.SRC_COLOR,[$c]:n.SRC_ALPHA,[hS]:n.SRC_ALPHA_SATURATE,[uS]:n.DST_COLOR,[lS]:n.DST_ALPHA,[aS]:n.ONE_MINUS_SRC_COLOR,[jc]:n.ONE_MINUS_SRC_ALPHA,[fS]:n.ONE_MINUS_DST_COLOR,[cS]:n.ONE_MINUS_DST_ALPHA,[dS]:n.CONSTANT_COLOR,[pS]:n.ONE_MINUS_CONSTANT_COLOR,[mS]:n.CONSTANT_ALPHA,[gS]:n.ONE_MINUS_CONSTANT_ALPHA};function We(F,Ee,ge,J,de,ke,it,Et,jt,pt){if(F===Mi){_===!0&&(ct(n.BLEND),_=!1);return}if(_===!1&&(Ie(n.BLEND),_=!0),F!==tS){if(F!==A||pt!==G){if((b!==Vi||D!==Vi)&&(n.blendEquation(n.FUNC_ADD),b=Vi,D=Vi),pt)switch(F){case zr:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFunc(n.ONE,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case zr:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Nh:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Uh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Ih:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}S=null,C=null,R=null,Z=null,M.set(0,0,0),L=0,A=F,G=pt}return}de=de||Ee,ke=ke||ge,it=it||J,(Ee!==b||de!==D)&&(n.blendEquationSeparate(Pe[Ee],Pe[de]),b=Ee,D=de),(ge!==S||J!==C||ke!==R||it!==Z)&&(n.blendFuncSeparate(ze[ge],ze[J],ze[ke],ze[it]),S=ge,C=J,R=ke,Z=it),(Et.equals(M)===!1||jt!==L)&&(n.blendColor(Et.r,Et.g,Et.b,jt),M.copy(Et),L=jt),A=F,G=!1}function Je(F,Ee){F.side===ti?ct(n.CULL_FACE):Ie(n.CULL_FACE);let ge=F.side===sn;Ee&&(ge=!ge),Be(ge),F.blending===zr&&F.transparent===!1?We(Mi):We(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),l.setFunc(F.depthFunc),l.setTest(F.depthTest),l.setMask(F.depthWrite),s.setMask(F.colorWrite);const J=F.stencilWrite;c.setTest(J),J&&(c.setMask(F.stencilWriteMask),c.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),c.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),dt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?Ie(n.SAMPLE_ALPHA_TO_COVERAGE):ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function Be(F){se!==F&&(F?n.frontFace(n.CW):n.frontFace(n.CCW),se=F)}function Le(F){F!==Jy?(Ie(n.CULL_FACE),F!==ae&&(F===Dh?n.cullFace(n.BACK):F===Qy?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ct(n.CULL_FACE),ae=F}function rt(F){F!==B&&(ie&&n.lineWidth(F),B=F)}function dt(F,Ee,ge){F?(Ie(n.POLYGON_OFFSET_FILL),(te!==Ee||ue!==ge)&&(n.polygonOffset(Ee,ge),te=Ee,ue=ge)):ct(n.POLYGON_OFFSET_FILL)}function vt(F){F?Ie(n.SCISSOR_TEST):ct(n.SCISSOR_TEST)}function P(F){F===void 0&&(F=n.TEXTURE0+re-1),O!==F&&(n.activeTexture(F),O=F)}function E(F,Ee,ge){ge===void 0&&(O===null?ge=n.TEXTURE0+re-1:ge=O);let J=W[ge];J===void 0&&(J={type:void 0,texture:void 0},W[ge]=J),(J.type!==F||J.texture!==Ee)&&(O!==ge&&(n.activeTexture(ge),O=ge),n.bindTexture(F,Ee||Fe[F]),J.type=F,J.texture=Ee)}function Y(){const F=W[O];F!==void 0&&F.type!==void 0&&(n.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function ve(){try{n.compressedTexImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function pe(){try{n.compressedTexImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function me(){try{n.texSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function De(){try{n.texSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Me(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function we(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function U(){try{n.texStorage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Se(){try{n.texStorage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function fe(){try{n.texImage2D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function le(){try{n.texImage3D.apply(n,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function z(F){he.equals(F)===!1&&(n.scissor(F.x,F.y,F.z,F.w),he.copy(F))}function ce(F){Ce.equals(F)===!1&&(n.viewport(F.x,F.y,F.z,F.w),Ce.copy(F))}function $(F,Ee){let ge=f.get(Ee);ge===void 0&&(ge=new WeakMap,f.set(Ee,ge));let J=ge.get(F);J===void 0&&(J=n.getUniformBlockIndex(Ee,F.name),ge.set(F,J))}function Ae(F,Ee){const J=f.get(Ee).get(F);h.get(Ee)!==J&&(n.uniformBlockBinding(Ee,J,F.__bindingPointIndex),h.set(Ee,J))}function et(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),d={},O=null,W={},m={},v=new WeakMap,x=[],g=null,_=!1,A=null,b=null,S=null,C=null,D=null,R=null,Z=null,M=new ft(0,0,0),L=0,G=!1,se=null,ae=null,B=null,te=null,ue=null,he.set(0,0,n.canvas.width,n.canvas.height),Ce.set(0,0,n.canvas.width,n.canvas.height),s.reset(),l.reset(),c.reset()}return{buffers:{color:s,depth:l,stencil:c},enable:Ie,disable:ct,bindFramebuffer:Ue,drawBuffers:k,useProgram:Mt,setBlending:We,setMaterial:Je,setFlipSided:Be,setCullFace:Le,setLineWidth:rt,setPolygonOffset:dt,setScissorTest:vt,activeTexture:P,bindTexture:E,unbindTexture:Y,compressedTexImage2D:ve,compressedTexImage3D:pe,texImage2D:fe,texImage3D:le,updateUBOMapping:$,uniformBlockBinding:Ae,texStorage2D:U,texStorage3D:Se,texSubImage2D:me,texSubImage3D:De,compressedTexSubImage2D:Me,compressedTexSubImage3D:we,scissor:z,viewport:ce,reset:et}}function uA(n,e,t,i,r,o,a){const s=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,h=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let x;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function A(P,E){return _?new OffscreenCanvas(P,E):La("canvas")}function b(P,E,Y,ve){let pe=1;if((P.width>ve||P.height>ve)&&(pe=ve/Math.max(P.width,P.height)),pe<1||E===!0)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap){const me=E?Pa:Math.floor,De=me(pe*P.width),Me=me(pe*P.height);x===void 0&&(x=A(De,Me));const we=Y?A(De,Me):x;return we.width=De,we.height=Me,we.getContext("2d").drawImage(P,0,0,De,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+P.width+"x"+P.height+") to ("+De+"x"+Me+")."),we}else return"data"in P&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+P.width+"x"+P.height+")."),P;return P}function S(P){return tu(P.width)&&tu(P.height)}function C(P){return s?!1:P.wrapS!==Cn||P.wrapT!==Cn||P.minFilter!==Jt&&P.minFilter!==_n}function D(P,E){return P.generateMipmaps&&E&&P.minFilter!==Jt&&P.minFilter!==_n}function R(P){n.generateMipmap(P)}function Z(P,E,Y,ve,pe=!1){if(s===!1)return E;if(P!==null){if(n[P]!==void 0)return n[P];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let me=E;if(E===n.RED&&(Y===n.FLOAT&&(me=n.R32F),Y===n.HALF_FLOAT&&(me=n.R16F),Y===n.UNSIGNED_BYTE&&(me=n.R8)),E===n.RED_INTEGER&&(Y===n.UNSIGNED_BYTE&&(me=n.R8UI),Y===n.UNSIGNED_SHORT&&(me=n.R16UI),Y===n.UNSIGNED_INT&&(me=n.R32UI),Y===n.BYTE&&(me=n.R8I),Y===n.SHORT&&(me=n.R16I),Y===n.INT&&(me=n.R32I)),E===n.RG&&(Y===n.FLOAT&&(me=n.RG32F),Y===n.HALF_FLOAT&&(me=n.RG16F),Y===n.UNSIGNED_BYTE&&(me=n.RG8)),E===n.RGBA){const De=pe?wa:gt.getTransfer(ve);Y===n.FLOAT&&(me=n.RGBA32F),Y===n.HALF_FLOAT&&(me=n.RGBA16F),Y===n.UNSIGNED_BYTE&&(me=De===St?n.SRGB8_ALPHA8:n.RGBA8),Y===n.UNSIGNED_SHORT_4_4_4_4&&(me=n.RGBA4),Y===n.UNSIGNED_SHORT_5_5_5_1&&(me=n.RGB5_A1)}return(me===n.R16F||me===n.R32F||me===n.RG16F||me===n.RG32F||me===n.RGBA16F||me===n.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function M(P,E,Y){return D(P,Y)===!0||P.isFramebufferTexture&&P.minFilter!==Jt&&P.minFilter!==_n?Math.log2(Math.max(E.width,E.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?E.mipmaps.length:1}function L(P){return P===Jt||P===Bh||P===Ql?n.NEAREST:n.LINEAR}function G(P){const E=P.target;E.removeEventListener("dispose",G),ae(E),E.isVideoTexture&&v.delete(E)}function se(P){const E=P.target;E.removeEventListener("dispose",se),te(E)}function ae(P){const E=i.get(P);if(E.__webglInit===void 0)return;const Y=P.source,ve=g.get(Y);if(ve){const pe=ve[E.__cacheKey];pe.usedTimes--,pe.usedTimes===0&&B(P),Object.keys(ve).length===0&&g.delete(Y)}i.remove(P)}function B(P){const E=i.get(P);n.deleteTexture(E.__webglTexture);const Y=P.source,ve=g.get(Y);delete ve[E.__cacheKey],a.memory.textures--}function te(P){const E=P.texture,Y=i.get(P),ve=i.get(E);if(ve.__webglTexture!==void 0&&(n.deleteTexture(ve.__webglTexture),a.memory.textures--),P.depthTexture&&P.depthTexture.dispose(),P.isWebGLCubeRenderTarget)for(let pe=0;pe<6;pe++){if(Array.isArray(Y.__webglFramebuffer[pe]))for(let me=0;me<Y.__webglFramebuffer[pe].length;me++)n.deleteFramebuffer(Y.__webglFramebuffer[pe][me]);else n.deleteFramebuffer(Y.__webglFramebuffer[pe]);Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer[pe])}else{if(Array.isArray(Y.__webglFramebuffer))for(let pe=0;pe<Y.__webglFramebuffer.length;pe++)n.deleteFramebuffer(Y.__webglFramebuffer[pe]);else n.deleteFramebuffer(Y.__webglFramebuffer);if(Y.__webglDepthbuffer&&n.deleteRenderbuffer(Y.__webglDepthbuffer),Y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Y.__webglMultisampledFramebuffer),Y.__webglColorRenderbuffer)for(let pe=0;pe<Y.__webglColorRenderbuffer.length;pe++)Y.__webglColorRenderbuffer[pe]&&n.deleteRenderbuffer(Y.__webglColorRenderbuffer[pe]);Y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Y.__webglDepthRenderbuffer)}if(P.isWebGLMultipleRenderTargets)for(let pe=0,me=E.length;pe<me;pe++){const De=i.get(E[pe]);De.__webglTexture&&(n.deleteTexture(De.__webglTexture),a.memory.textures--),i.remove(E[pe])}i.remove(E),i.remove(P)}let ue=0;function re(){ue=0}function ie(){const P=ue;return P>=l&&console.warn("THREE.WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+l),ue+=1,P}function q(P){const E=[];return E.push(P.wrapS),E.push(P.wrapT),E.push(P.wrapR||0),E.push(P.magFilter),E.push(P.minFilter),E.push(P.anisotropy),E.push(P.internalFormat),E.push(P.format),E.push(P.type),E.push(P.generateMipmaps),E.push(P.premultiplyAlpha),E.push(P.flipY),E.push(P.unpackAlignment),E.push(P.colorSpace),E.join()}function X(P,E){const Y=i.get(P);if(P.isVideoTexture&&dt(P),P.isRenderTargetTexture===!1&&P.version>0&&Y.__version!==P.version){const ve=P.image;if(ve===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ie(Y,P,E);return}}t.bindTexture(n.TEXTURE_2D,Y.__webglTexture,n.TEXTURE0+E)}function O(P,E){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){Ie(Y,P,E);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Y.__webglTexture,n.TEXTURE0+E)}function W(P,E){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){Ie(Y,P,E);return}t.bindTexture(n.TEXTURE_3D,Y.__webglTexture,n.TEXTURE0+E)}function ye(P,E){const Y=i.get(P);if(P.version>0&&Y.__version!==P.version){ct(Y,P,E);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Y.__webglTexture,n.TEXTURE0+E)}const xe={[Jc]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[Qc]:n.MIRRORED_REPEAT},he={[Jt]:n.NEAREST,[Bh]:n.NEAREST_MIPMAP_NEAREST,[Ql]:n.NEAREST_MIPMAP_LINEAR,[_n]:n.LINEAR,[LS]:n.LINEAR_MIPMAP_NEAREST,[Go]:n.LINEAR_MIPMAP_LINEAR},Ce={[XS]:n.NEVER,[JS]:n.ALWAYS,[qS]:n.LESS,[$S]:n.LEQUAL,[YS]:n.EQUAL,[ZS]:n.GEQUAL,[jS]:n.GREATER,[KS]:n.NOTEQUAL};function He(P,E,Y){if(Y?(n.texParameteri(P,n.TEXTURE_WRAP_S,xe[E.wrapS]),n.texParameteri(P,n.TEXTURE_WRAP_T,xe[E.wrapT]),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,xe[E.wrapR]),n.texParameteri(P,n.TEXTURE_MAG_FILTER,he[E.magFilter]),n.texParameteri(P,n.TEXTURE_MIN_FILTER,he[E.minFilter])):(n.texParameteri(P,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(P,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(P===n.TEXTURE_3D||P===n.TEXTURE_2D_ARRAY)&&n.texParameteri(P,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(E.wrapS!==Cn||E.wrapT!==Cn)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(P,n.TEXTURE_MAG_FILTER,L(E.magFilter)),n.texParameteri(P,n.TEXTURE_MIN_FILTER,L(E.minFilter)),E.minFilter!==Jt&&E.minFilter!==_n&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(n.texParameteri(P,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(P,n.TEXTURE_COMPARE_FUNC,Ce[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ve=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===Jt||E.minFilter!==Ql&&E.minFilter!==Go||E.type===yi&&e.has("OES_texture_float_linear")===!1||s===!1&&E.type===Vo&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(n.texParameterf(P,ve.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function Fe(P,E){let Y=!1;P.__webglInit===void 0&&(P.__webglInit=!0,E.addEventListener("dispose",G));const ve=E.source;let pe=g.get(ve);pe===void 0&&(pe={},g.set(ve,pe));const me=q(E);if(me!==P.__cacheKey){pe[me]===void 0&&(pe[me]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,Y=!0),pe[me].usedTimes++;const De=pe[P.__cacheKey];De!==void 0&&(pe[P.__cacheKey].usedTimes--,De.usedTimes===0&&B(E)),P.__cacheKey=me,P.__webglTexture=pe[me].texture}return Y}function Ie(P,E,Y){let ve=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ve=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ve=n.TEXTURE_3D);const pe=Fe(P,E),me=E.source;t.bindTexture(ve,P.__webglTexture,n.TEXTURE0+Y);const De=i.get(me);if(me.version!==De.__version||pe===!0){t.activeTexture(n.TEXTURE0+Y);const Me=gt.getPrimaries(gt.workingColorSpace),we=E.colorSpace===xn?null:gt.getPrimaries(E.colorSpace),U=E.colorSpace===xn||Me===we?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,U);const Se=C(E)&&S(E.image)===!1;let fe=b(E.image,Se,!1,h);fe=vt(E,fe);const le=S(fe)||s,z=o.convert(E.format,E.colorSpace);let ce=o.convert(E.type),$=Z(E.internalFormat,z,ce,E.colorSpace,E.isVideoTexture);He(ve,E,le);let Ae;const et=E.mipmaps,F=s&&E.isVideoTexture!==!0,Ee=De.__version===void 0||pe===!0,ge=M(E,fe,le);if(E.isDepthTexture)$=n.DEPTH_COMPONENT,s?E.type===yi?$=n.DEPTH_COMPONENT32F:E.type===xi?$=n.DEPTH_COMPONENT24:E.type===Yi?$=n.DEPTH24_STENCIL8:$=n.DEPTH_COMPONENT16:E.type===yi&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===$i&&$===n.DEPTH_COMPONENT&&E.type!==Mu&&E.type!==xi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=xi,ce=o.convert(E.type)),E.format===Kr&&$===n.DEPTH_COMPONENT&&($=n.DEPTH_STENCIL,E.type!==Yi&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=Yi,ce=o.convert(E.type))),Ee&&(F?t.texStorage2D(n.TEXTURE_2D,1,$,fe.width,fe.height):t.texImage2D(n.TEXTURE_2D,0,$,fe.width,fe.height,0,z,ce,null));else if(E.isDataTexture)if(et.length>0&&le){F&&Ee&&t.texStorage2D(n.TEXTURE_2D,ge,$,et[0].width,et[0].height);for(let J=0,de=et.length;J<de;J++)Ae=et[J],F?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ae.width,Ae.height,z,ce,Ae.data):t.texImage2D(n.TEXTURE_2D,J,$,Ae.width,Ae.height,0,z,ce,Ae.data);E.generateMipmaps=!1}else F?(Ee&&t.texStorage2D(n.TEXTURE_2D,ge,$,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,fe.width,fe.height,z,ce,fe.data)):t.texImage2D(n.TEXTURE_2D,0,$,fe.width,fe.height,0,z,ce,fe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){F&&Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,$,et[0].width,et[0].height,fe.depth);for(let J=0,de=et.length;J<de;J++)Ae=et[J],E.format!==Pn?z!==null?F?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,fe.depth,z,Ae.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,J,$,Ae.width,Ae.height,fe.depth,0,Ae.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage3D(n.TEXTURE_2D_ARRAY,J,0,0,0,Ae.width,Ae.height,fe.depth,z,ce,Ae.data):t.texImage3D(n.TEXTURE_2D_ARRAY,J,$,Ae.width,Ae.height,fe.depth,0,z,ce,Ae.data)}else{F&&Ee&&t.texStorage2D(n.TEXTURE_2D,ge,$,et[0].width,et[0].height);for(let J=0,de=et.length;J<de;J++)Ae=et[J],E.format!==Pn?z!==null?F?t.compressedTexSubImage2D(n.TEXTURE_2D,J,0,0,Ae.width,Ae.height,z,Ae.data):t.compressedTexImage2D(n.TEXTURE_2D,J,$,Ae.width,Ae.height,0,Ae.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?t.texSubImage2D(n.TEXTURE_2D,J,0,0,Ae.width,Ae.height,z,ce,Ae.data):t.texImage2D(n.TEXTURE_2D,J,$,Ae.width,Ae.height,0,z,ce,Ae.data)}else if(E.isDataArrayTexture)F?(Ee&&t.texStorage3D(n.TEXTURE_2D_ARRAY,ge,$,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,fe.width,fe.height,fe.depth,z,ce,fe.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,$,fe.width,fe.height,fe.depth,0,z,ce,fe.data);else if(E.isData3DTexture)F?(Ee&&t.texStorage3D(n.TEXTURE_3D,ge,$,fe.width,fe.height,fe.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,fe.width,fe.height,fe.depth,z,ce,fe.data)):t.texImage3D(n.TEXTURE_3D,0,$,fe.width,fe.height,fe.depth,0,z,ce,fe.data);else if(E.isFramebufferTexture){if(Ee)if(F)t.texStorage2D(n.TEXTURE_2D,ge,$,fe.width,fe.height);else{let J=fe.width,de=fe.height;for(let ke=0;ke<ge;ke++)t.texImage2D(n.TEXTURE_2D,ke,$,J,de,0,z,ce,null),J>>=1,de>>=1}}else if(et.length>0&&le){F&&Ee&&t.texStorage2D(n.TEXTURE_2D,ge,$,et[0].width,et[0].height);for(let J=0,de=et.length;J<de;J++)Ae=et[J],F?t.texSubImage2D(n.TEXTURE_2D,J,0,0,z,ce,Ae):t.texImage2D(n.TEXTURE_2D,J,$,z,ce,Ae);E.generateMipmaps=!1}else F?(Ee&&t.texStorage2D(n.TEXTURE_2D,ge,$,fe.width,fe.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,z,ce,fe)):t.texImage2D(n.TEXTURE_2D,0,$,z,ce,fe);D(E,le)&&R(ve),De.__version=me.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function ct(P,E,Y){if(E.image.length!==6)return;const ve=Fe(P,E),pe=E.source;t.bindTexture(n.TEXTURE_CUBE_MAP,P.__webglTexture,n.TEXTURE0+Y);const me=i.get(pe);if(pe.version!==me.__version||ve===!0){t.activeTexture(n.TEXTURE0+Y);const De=gt.getPrimaries(gt.workingColorSpace),Me=E.colorSpace===xn?null:gt.getPrimaries(E.colorSpace),we=E.colorSpace===xn||De===Me?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const U=E.isCompressedTexture||E.image[0].isCompressedTexture,Se=E.image[0]&&E.image[0].isDataTexture,fe=[];for(let J=0;J<6;J++)!U&&!Se?fe[J]=b(E.image[J],!1,!0,c):fe[J]=Se?E.image[J].image:E.image[J],fe[J]=vt(E,fe[J]);const le=fe[0],z=S(le)||s,ce=o.convert(E.format,E.colorSpace),$=o.convert(E.type),Ae=Z(E.internalFormat,ce,$,E.colorSpace),et=s&&E.isVideoTexture!==!0,F=me.__version===void 0||ve===!0;let Ee=M(E,le,z);He(n.TEXTURE_CUBE_MAP,E,z);let ge;if(U){et&&F&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Ae,le.width,le.height);for(let J=0;J<6;J++){ge=fe[J].mipmaps;for(let de=0;de<ge.length;de++){const ke=ge[de];E.format!==Pn?ce!==null?et?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ke.width,ke.height,ce,ke.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ae,ke.width,ke.height,0,ke.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,0,0,ke.width,ke.height,ce,$,ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de,Ae,ke.width,ke.height,0,ce,$,ke.data)}}}else{ge=E.mipmaps,et&&F&&(ge.length>0&&Ee++,t.texStorage2D(n.TEXTURE_CUBE_MAP,Ee,Ae,fe[0].width,fe[0].height));for(let J=0;J<6;J++)if(Se){et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,fe[J].width,fe[J].height,ce,$,fe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ae,fe[J].width,fe[J].height,0,ce,$,fe[J].data);for(let de=0;de<ge.length;de++){const it=ge[de].image[J].image;et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,it.width,it.height,ce,$,it.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ae,it.width,it.height,0,ce,$,it.data)}}else{et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,ce,$,fe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ae,ce,$,fe[J]);for(let de=0;de<ge.length;de++){const ke=ge[de];et?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,0,0,ce,$,ke.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,de+1,Ae,ce,$,ke.image[J])}}}D(E,z)&&R(n.TEXTURE_CUBE_MAP),me.__version=pe.version,E.onUpdate&&E.onUpdate(E)}P.__version=E.version}function Ue(P,E,Y,ve,pe,me){const De=o.convert(Y.format,Y.colorSpace),Me=o.convert(Y.type),we=Z(Y.internalFormat,De,Me,Y.colorSpace);if(!i.get(E).__hasExternalTextures){const Se=Math.max(1,E.width>>me),fe=Math.max(1,E.height>>me);pe===n.TEXTURE_3D||pe===n.TEXTURE_2D_ARRAY?t.texImage3D(pe,me,we,Se,fe,E.depth,0,De,Me,null):t.texImage2D(pe,me,we,Se,fe,0,De,Me,null)}t.bindFramebuffer(n.FRAMEBUFFER,P),rt(E)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ve,pe,i.get(Y).__webglTexture,0,Le(E)):(pe===n.TEXTURE_2D||pe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&pe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ve,pe,i.get(Y).__webglTexture,me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function k(P,E,Y){if(n.bindRenderbuffer(n.RENDERBUFFER,P),E.depthBuffer&&!E.stencilBuffer){let ve=s===!0?n.DEPTH_COMPONENT24:n.DEPTH_COMPONENT16;if(Y||rt(E)){const pe=E.depthTexture;pe&&pe.isDepthTexture&&(pe.type===yi?ve=n.DEPTH_COMPONENT32F:pe.type===xi&&(ve=n.DEPTH_COMPONENT24));const me=Le(E);rt(E)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,me,ve,E.width,E.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,me,ve,E.width,E.height)}else n.renderbufferStorage(n.RENDERBUFFER,ve,E.width,E.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,P)}else if(E.depthBuffer&&E.stencilBuffer){const ve=Le(E);Y&&rt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,E.width,E.height):rt(E)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,n.DEPTH24_STENCIL8,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,P)}else{const ve=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let pe=0;pe<ve.length;pe++){const me=ve[pe],De=o.convert(me.format,me.colorSpace),Me=o.convert(me.type),we=Z(me.internalFormat,De,Me,me.colorSpace),U=Le(E);Y&&rt(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,U,we,E.width,E.height):rt(E)?d.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,U,we,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,we,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Mt(P,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,P),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),X(E.depthTexture,0);const ve=i.get(E.depthTexture).__webglTexture,pe=Le(E);if(E.depthTexture.format===$i)rt(E)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ve,0);else if(E.depthTexture.format===Kr)rt(E)?d.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0,pe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ve,0);else throw new Error("Unknown depthTexture format")}function Pe(P){const E=i.get(P),Y=P.isWebGLCubeRenderTarget===!0;if(P.depthTexture&&!E.__autoAllocateDepthBuffer){if(Y)throw new Error("target.depthTexture not supported in Cube render targets");Mt(E.__webglFramebuffer,P)}else if(Y){E.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[ve]),E.__webglDepthbuffer[ve]=n.createRenderbuffer(),k(E.__webglDepthbuffer[ve],P,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=n.createRenderbuffer(),k(E.__webglDepthbuffer,P,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function ze(P,E,Y){const ve=i.get(P);E!==void 0&&Ue(ve.__webglFramebuffer,P,P.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),Y!==void 0&&Pe(P)}function We(P){const E=P.texture,Y=i.get(P),ve=i.get(E);P.addEventListener("dispose",se),P.isWebGLMultipleRenderTargets!==!0&&(ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture()),ve.__version=E.version,a.memory.textures++);const pe=P.isWebGLCubeRenderTarget===!0,me=P.isWebGLMultipleRenderTargets===!0,De=S(P)||s;if(pe){Y.__webglFramebuffer=[];for(let Me=0;Me<6;Me++)if(s&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer[Me]=[];for(let we=0;we<E.mipmaps.length;we++)Y.__webglFramebuffer[Me][we]=n.createFramebuffer()}else Y.__webglFramebuffer[Me]=n.createFramebuffer()}else{if(s&&E.mipmaps&&E.mipmaps.length>0){Y.__webglFramebuffer=[];for(let Me=0;Me<E.mipmaps.length;Me++)Y.__webglFramebuffer[Me]=n.createFramebuffer()}else Y.__webglFramebuffer=n.createFramebuffer();if(me)if(r.drawBuffers){const Me=P.texture;for(let we=0,U=Me.length;we<U;we++){const Se=i.get(Me[we]);Se.__webglTexture===void 0&&(Se.__webglTexture=n.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(s&&P.samples>0&&rt(P)===!1){const Me=me?E:[E];Y.__webglMultisampledFramebuffer=n.createFramebuffer(),Y.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Y.__webglMultisampledFramebuffer);for(let we=0;we<Me.length;we++){const U=Me[we];Y.__webglColorRenderbuffer[we]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Y.__webglColorRenderbuffer[we]);const Se=o.convert(U.format,U.colorSpace),fe=o.convert(U.type),le=Z(U.internalFormat,Se,fe,U.colorSpace,P.isXRRenderTarget===!0),z=Le(P);n.renderbufferStorageMultisample(n.RENDERBUFFER,z,le,P.width,P.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+we,n.RENDERBUFFER,Y.__webglColorRenderbuffer[we])}n.bindRenderbuffer(n.RENDERBUFFER,null),P.depthBuffer&&(Y.__webglDepthRenderbuffer=n.createRenderbuffer(),k(Y.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(pe){t.bindTexture(n.TEXTURE_CUBE_MAP,ve.__webglTexture),He(n.TEXTURE_CUBE_MAP,E,De);for(let Me=0;Me<6;Me++)if(s&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Ue(Y.__webglFramebuffer[Me][we],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,we);else Ue(Y.__webglFramebuffer[Me],P,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+Me,0);D(E,De)&&R(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(me){const Me=P.texture;for(let we=0,U=Me.length;we<U;we++){const Se=Me[we],fe=i.get(Se);t.bindTexture(n.TEXTURE_2D,fe.__webglTexture),He(n.TEXTURE_2D,Se,De),Ue(Y.__webglFramebuffer,P,Se,n.COLOR_ATTACHMENT0+we,n.TEXTURE_2D,0),D(Se,De)&&R(n.TEXTURE_2D)}t.unbindTexture()}else{let Me=n.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(s?Me=P.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(Me,ve.__webglTexture),He(Me,E,De),s&&E.mipmaps&&E.mipmaps.length>0)for(let we=0;we<E.mipmaps.length;we++)Ue(Y.__webglFramebuffer[we],P,E,n.COLOR_ATTACHMENT0,Me,we);else Ue(Y.__webglFramebuffer,P,E,n.COLOR_ATTACHMENT0,Me,0);D(E,De)&&R(Me),t.unbindTexture()}P.depthBuffer&&Pe(P)}function Je(P){const E=S(P)||s,Y=P.isWebGLMultipleRenderTargets===!0?P.texture:[P.texture];for(let ve=0,pe=Y.length;ve<pe;ve++){const me=Y[ve];if(D(me,E)){const De=P.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,Me=i.get(me).__webglTexture;t.bindTexture(De,Me),R(De),t.unbindTexture()}}}function Be(P){if(s&&P.samples>0&&rt(P)===!1){const E=P.isWebGLMultipleRenderTargets?P.texture:[P.texture],Y=P.width,ve=P.height;let pe=n.COLOR_BUFFER_BIT;const me=[],De=P.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(P),we=P.isWebGLMultipleRenderTargets===!0;if(we)for(let U=0;U<E.length;U++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let U=0;U<E.length;U++){me.push(n.COLOR_ATTACHMENT0+U),P.depthBuffer&&me.push(De);const Se=Me.__ignoreDepthValues!==void 0?Me.__ignoreDepthValues:!1;if(Se===!1&&(P.depthBuffer&&(pe|=n.DEPTH_BUFFER_BIT),P.stencilBuffer&&(pe|=n.STENCIL_BUFFER_BIT)),we&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[U]),Se===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[De]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[De])),we){const fe=i.get(E[U]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,fe,0)}n.blitFramebuffer(0,0,Y,ve,0,0,Y,ve,pe,n.NEAREST),m&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,me)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),we)for(let U=0;U<E.length;U++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.RENDERBUFFER,Me.__webglColorRenderbuffer[U]);const Se=i.get(E[U]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+U,n.TEXTURE_2D,Se,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}}function Le(P){return Math.min(f,P.samples)}function rt(P){const E=i.get(P);return s&&P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function dt(P){const E=a.render.frame;v.get(P)!==E&&(v.set(P,E),P.update())}function vt(P,E){const Y=P.colorSpace,ve=P.format,pe=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||P.format===eu||Y!==ai&&Y!==xn&&(gt.getTransfer(Y)===St?s===!1?e.has("EXT_sRGB")===!0&&ve===Pn?(P.format=eu,P.minFilter=_n,P.generateMipmaps=!1):E=Xm.sRGBToLinear(E):(ve!==Pn||pe!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Y)),E}this.allocateTextureUnit=ie,this.resetTextureUnits=re,this.setTexture2D=X,this.setTexture2DArray=O,this.setTexture3D=W,this.setTextureCube=ye,this.rebindTextures=ze,this.setupRenderTarget=We,this.updateRenderTargetMipmap=Je,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=Pe,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=rt}function fA(n,e,t){const i=t.isWebGL2;function r(o,a=xn){let s;const l=gt.getTransfer(a);if(o===bi)return n.UNSIGNED_BYTE;if(o===Bm)return n.UNSIGNED_SHORT_4_4_4_4;if(o===km)return n.UNSIGNED_SHORT_5_5_5_1;if(o===DS)return n.BYTE;if(o===NS)return n.SHORT;if(o===Mu)return n.UNSIGNED_SHORT;if(o===Fm)return n.INT;if(o===xi)return n.UNSIGNED_INT;if(o===yi)return n.FLOAT;if(o===Vo)return i?n.HALF_FLOAT:(s=e.get("OES_texture_half_float"),s!==null?s.HALF_FLOAT_OES:null);if(o===US)return n.ALPHA;if(o===Pn)return n.RGBA;if(o===IS)return n.LUMINANCE;if(o===OS)return n.LUMINANCE_ALPHA;if(o===$i)return n.DEPTH_COMPONENT;if(o===Kr)return n.DEPTH_STENCIL;if(o===eu)return s=e.get("EXT_sRGB"),s!==null?s.SRGB_ALPHA_EXT:null;if(o===FS)return n.RED;if(o===zm)return n.RED_INTEGER;if(o===BS)return n.RG;if(o===Hm)return n.RG_INTEGER;if(o===Gm)return n.RGBA_INTEGER;if(o===ec||o===tc||o===nc||o===ic)if(l===St)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(o===ec)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(o===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(o===nc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(o===ic)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(o===ec)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(o===tc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(o===nc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(o===ic)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(o===kh||o===zh||o===Hh||o===Gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(o===kh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(o===zh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(o===Hh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(o===Gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(o===kS)return s=e.get("WEBGL_compressed_texture_etc1"),s!==null?s.COMPRESSED_RGB_ETC1_WEBGL:null;if(o===Vh||o===Wh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(o===Vh)return l===St?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(o===Wh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(o===Xh||o===qh||o===Yh||o===$h||o===jh||o===Kh||o===Zh||o===Jh||o===Qh||o===ed||o===td||o===nd||o===id||o===rd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(o===Xh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(o===qh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(o===Yh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(o===$h)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(o===jh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(o===Kh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(o===Zh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(o===Jh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(o===Qh)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(o===ed)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(o===td)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(o===nd)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(o===id)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(o===rd)return l===St?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(o===rc||o===od||o===sd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(o===rc)return l===St?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(o===od)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(o===sd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(o===zS||o===ad||o===ld||o===cd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(o===rc)return s.COMPRESSED_RED_RGTC1_EXT;if(o===ad)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(o===ld)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(o===cd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return o===Yi?i?n.UNSIGNED_INT_24_8:(s=e.get("WEBGL_depth_texture"),s!==null?s.UNSIGNED_INT_24_8_WEBGL:null):n[o]!==void 0?n[o]:null}return{convert:r}}class hA extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ea extends Qt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const dA={type:"move"};class Ac{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ea,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ea,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ea,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,o=null,a=null;const s=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,i),_=this._getHandJoint(c,x);g!==null&&(_.matrix.fromArray(g.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.matrixWorldNeedsUpdate=!0,_.jointRadius=g.radius),_.visible=g!==null}const h=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=h.position.distanceTo(f.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,i),o!==null&&(l.matrix.fromArray(o.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,o.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(o.linearVelocity)):l.hasLinearVelocity=!1,o.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(o.angularVelocity)):l.hasAngularVelocity=!1));s!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&o!==null&&(r=o),r!==null&&(s.matrix.fromArray(r.transform.matrix),s.matrix.decompose(s.position,s.rotation,s.scale),s.matrixWorldNeedsUpdate=!0,r.linearVelocity?(s.hasLinearVelocity=!0,s.linearVelocity.copy(r.linearVelocity)):s.hasLinearVelocity=!1,r.angularVelocity?(s.hasAngularVelocity=!0,s.angularVelocity.copy(r.angularVelocity)):s.hasAngularVelocity=!1,this.dispatchEvent(dA)))}return s!==null&&(s.visible=r!==null),l!==null&&(l.visible=o!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ea;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class pA extends fn{constructor(e,t,i,r,o,a,s,l,c,h){if(h=h!==void 0?h:$i,h!==$i&&h!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&h===$i&&(i=xi),i===void 0&&h===Kr&&(i=Yi),super(null,r,o,a,s,l,h,i,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=s!==void 0?s:Jt,this.minFilter=l!==void 0?l:Jt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class mA extends nr{constructor(e,t){super();const i=this;let r=null,o=1,a=null,s="local-floor",l=1,c=null,h=null,f=null,d=null,m=null,v=null;const x=t.getContextAttributes();let g=null,_=null;const A=[],b=[],S=new vn;S.layers.enable(1),S.viewport=new Vt;const C=new vn;C.layers.enable(2),C.viewport=new Vt;const D=[S,C],R=new hA;R.layers.enable(1),R.layers.enable(2);let Z=null,M=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(O){let W=A[O];return W===void 0&&(W=new Ac,A[O]=W),W.getTargetRaySpace()},this.getControllerGrip=function(O){let W=A[O];return W===void 0&&(W=new Ac,A[O]=W),W.getGripSpace()},this.getHand=function(O){let W=A[O];return W===void 0&&(W=new Ac,A[O]=W),W.getHandSpace()};function L(O){const W=b.indexOf(O.inputSource);if(W===-1)return;const ye=A[W];ye!==void 0&&(ye.update(O.inputSource,O.frame,c||a),ye.dispatchEvent({type:O.type,data:O.inputSource}))}function G(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",G),r.removeEventListener("inputsourceschange",se);for(let O=0;O<A.length;O++){const W=b[O];W!==null&&(b[O]=null,A[O].disconnect(W))}Z=null,M=null,e.setRenderTarget(g),m=null,d=null,f=null,r=null,_=null,X.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(O){o=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(O){s=O,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(O){c=O},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return f},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(O){if(r=O,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",G),r.addEventListener("inputsourceschange",se),x.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?x.antialias:!0,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:o};m=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:m}),_=new Ji(m.framebufferWidth,m.framebufferHeight,{format:Pn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil})}else{let W=null,ye=null,xe=null;x.depth&&(xe=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=x.stencil?Kr:$i,ye=x.stencil?Yi:xi);const he={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:o};f=new XRWebGLBinding(r,t),d=f.createProjectionLayer(he),r.updateRenderState({layers:[d]}),_=new Ji(d.textureWidth,d.textureHeight,{format:Pn,type:bi,depthTexture:new pA(d.textureWidth,d.textureHeight,ye,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0});const Ce=e.properties.get(_);Ce.__ignoreDepthValues=d.ignoreDepthValues}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(s),X.setContext(r),X.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function se(O){for(let W=0;W<O.removed.length;W++){const ye=O.removed[W],xe=b.indexOf(ye);xe>=0&&(b[xe]=null,A[xe].disconnect(ye))}for(let W=0;W<O.added.length;W++){const ye=O.added[W];let xe=b.indexOf(ye);if(xe===-1){for(let Ce=0;Ce<A.length;Ce++)if(Ce>=b.length){b.push(ye),xe=Ce;break}else if(b[Ce]===null){b[Ce]=ye,xe=Ce;break}if(xe===-1)break}const he=A[xe];he&&he.connect(ye)}}const ae=new V,B=new V;function te(O,W,ye){ae.setFromMatrixPosition(W.matrixWorld),B.setFromMatrixPosition(ye.matrixWorld);const xe=ae.distanceTo(B),he=W.projectionMatrix.elements,Ce=ye.projectionMatrix.elements,He=he[14]/(he[10]-1),Fe=he[14]/(he[10]+1),Ie=(he[9]+1)/he[5],ct=(he[9]-1)/he[5],Ue=(he[8]-1)/he[0],k=(Ce[8]+1)/Ce[0],Mt=He*Ue,Pe=He*k,ze=xe/(-Ue+k),We=ze*-Ue;W.matrixWorld.decompose(O.position,O.quaternion,O.scale),O.translateX(We),O.translateZ(ze),O.matrixWorld.compose(O.position,O.quaternion,O.scale),O.matrixWorldInverse.copy(O.matrixWorld).invert();const Je=He+ze,Be=Fe+ze,Le=Mt-We,rt=Pe+(xe-We),dt=Ie*Fe/Be*Je,vt=ct*Fe/Be*Je;O.projectionMatrix.makePerspective(Le,rt,dt,vt,Je,Be),O.projectionMatrixInverse.copy(O.projectionMatrix).invert()}function ue(O,W){W===null?O.matrixWorld.copy(O.matrix):O.matrixWorld.multiplyMatrices(W.matrixWorld,O.matrix),O.matrixWorldInverse.copy(O.matrixWorld).invert()}this.updateCamera=function(O){if(r===null)return;R.near=C.near=S.near=O.near,R.far=C.far=S.far=O.far,(Z!==R.near||M!==R.far)&&(r.updateRenderState({depthNear:R.near,depthFar:R.far}),Z=R.near,M=R.far);const W=O.parent,ye=R.cameras;ue(R,W);for(let xe=0;xe<ye.length;xe++)ue(ye[xe],W);ye.length===2?te(R,S,C):R.projectionMatrix.copy(S.projectionMatrix),re(O,R,W)};function re(O,W,ye){ye===null?O.matrix.copy(W.matrixWorld):(O.matrix.copy(ye.matrixWorld),O.matrix.invert(),O.matrix.multiply(W.matrixWorld)),O.matrix.decompose(O.position,O.quaternion,O.scale),O.updateMatrixWorld(!0),O.projectionMatrix.copy(W.projectionMatrix),O.projectionMatrixInverse.copy(W.projectionMatrixInverse),O.isPerspectiveCamera&&(O.fov=Wo*2*Math.atan(1/O.projectionMatrix.elements[5]),O.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(O){l=O,d!==null&&(d.fixedFoveation=O),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=O)};let ie=null;function q(O,W){if(h=W.getViewerPose(c||a),v=W,h!==null){const ye=h.views;m!==null&&(e.setRenderTargetFramebuffer(_,m.framebuffer),e.setRenderTarget(_));let xe=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,xe=!0);for(let he=0;he<ye.length;he++){const Ce=ye[he];let He=null;if(m!==null)He=m.getViewport(Ce);else{const Ie=f.getViewSubImage(d,Ce);He=Ie.viewport,he===0&&(e.setRenderTargetTextures(_,Ie.colorTexture,d.ignoreDepthValues?void 0:Ie.depthStencilTexture),e.setRenderTarget(_))}let Fe=D[he];Fe===void 0&&(Fe=new vn,Fe.layers.enable(he),Fe.viewport=new Vt,D[he]=Fe),Fe.matrix.fromArray(Ce.transform.matrix),Fe.matrix.decompose(Fe.position,Fe.quaternion,Fe.scale),Fe.projectionMatrix.fromArray(Ce.projectionMatrix),Fe.projectionMatrixInverse.copy(Fe.projectionMatrix).invert(),Fe.viewport.set(He.x,He.y,He.width,He.height),he===0&&(R.matrix.copy(Fe.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),xe===!0&&R.cameras.push(Fe)}}for(let ye=0;ye<A.length;ye++){const xe=b[ye],he=A[ye];xe!==null&&he!==void 0&&he.update(xe,W,c||a)}ie&&ie(O,W),W.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:W}),v=null}const X=new ig;X.setAnimationLoop(q),this.setAnimationLoop=function(O){ie=O},this.dispose=function(){}}}function gA(n,e){function t(g,_){g.matrixAutoUpdate===!0&&g.updateMatrix(),_.value.copy(g.matrix)}function i(g,_){_.color.getRGB(g.fogColor.value,Qm(n)),_.isFog?(g.fogNear.value=_.near,g.fogFar.value=_.far):_.isFogExp2&&(g.fogDensity.value=_.density)}function r(g,_,A,b,S){_.isMeshBasicMaterial||_.isMeshLambertMaterial?o(g,_):_.isMeshToonMaterial?(o(g,_),f(g,_)):_.isMeshPhongMaterial?(o(g,_),h(g,_)):_.isMeshStandardMaterial?(o(g,_),d(g,_),_.isMeshPhysicalMaterial&&m(g,_,S)):_.isMeshMatcapMaterial?(o(g,_),v(g,_)):_.isMeshDepthMaterial?o(g,_):_.isMeshDistanceMaterial?(o(g,_),x(g,_)):_.isMeshNormalMaterial?o(g,_):_.isLineBasicMaterial?(a(g,_),_.isLineDashedMaterial&&s(g,_)):_.isPointsMaterial?l(g,_,A,b):_.isSpriteMaterial?c(g,_):_.isShadowMaterial?(g.color.value.copy(_.color),g.opacity.value=_.opacity):_.isShaderMaterial&&(_.uniformsNeedUpdate=!1)}function o(g,_){g.opacity.value=_.opacity,_.color&&g.diffuse.value.copy(_.color),_.emissive&&g.emissive.value.copy(_.emissive).multiplyScalar(_.emissiveIntensity),_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.bumpMap&&(g.bumpMap.value=_.bumpMap,t(_.bumpMap,g.bumpMapTransform),g.bumpScale.value=_.bumpScale,_.side===sn&&(g.bumpScale.value*=-1)),_.normalMap&&(g.normalMap.value=_.normalMap,t(_.normalMap,g.normalMapTransform),g.normalScale.value.copy(_.normalScale),_.side===sn&&g.normalScale.value.negate()),_.displacementMap&&(g.displacementMap.value=_.displacementMap,t(_.displacementMap,g.displacementMapTransform),g.displacementScale.value=_.displacementScale,g.displacementBias.value=_.displacementBias),_.emissiveMap&&(g.emissiveMap.value=_.emissiveMap,t(_.emissiveMap,g.emissiveMapTransform)),_.specularMap&&(g.specularMap.value=_.specularMap,t(_.specularMap,g.specularMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest);const A=e.get(_).envMap;if(A&&(g.envMap.value=A,g.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=_.reflectivity,g.ior.value=_.ior,g.refractionRatio.value=_.refractionRatio),_.lightMap){g.lightMap.value=_.lightMap;const b=n._useLegacyLights===!0?Math.PI:1;g.lightMapIntensity.value=_.lightMapIntensity*b,t(_.lightMap,g.lightMapTransform)}_.aoMap&&(g.aoMap.value=_.aoMap,g.aoMapIntensity.value=_.aoMapIntensity,t(_.aoMap,g.aoMapTransform))}function a(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform))}function s(g,_){g.dashSize.value=_.dashSize,g.totalSize.value=_.dashSize+_.gapSize,g.scale.value=_.scale}function l(g,_,A,b){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.size.value=_.size*A,g.scale.value=b*.5,_.map&&(g.map.value=_.map,t(_.map,g.uvTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function c(g,_){g.diffuse.value.copy(_.color),g.opacity.value=_.opacity,g.rotation.value=_.rotation,_.map&&(g.map.value=_.map,t(_.map,g.mapTransform)),_.alphaMap&&(g.alphaMap.value=_.alphaMap,t(_.alphaMap,g.alphaMapTransform)),_.alphaTest>0&&(g.alphaTest.value=_.alphaTest)}function h(g,_){g.specular.value.copy(_.specular),g.shininess.value=Math.max(_.shininess,1e-4)}function f(g,_){_.gradientMap&&(g.gradientMap.value=_.gradientMap)}function d(g,_){g.metalness.value=_.metalness,_.metalnessMap&&(g.metalnessMap.value=_.metalnessMap,t(_.metalnessMap,g.metalnessMapTransform)),g.roughness.value=_.roughness,_.roughnessMap&&(g.roughnessMap.value=_.roughnessMap,t(_.roughnessMap,g.roughnessMapTransform)),e.get(_).envMap&&(g.envMapIntensity.value=_.envMapIntensity)}function m(g,_,A){g.ior.value=_.ior,_.sheen>0&&(g.sheenColor.value.copy(_.sheenColor).multiplyScalar(_.sheen),g.sheenRoughness.value=_.sheenRoughness,_.sheenColorMap&&(g.sheenColorMap.value=_.sheenColorMap,t(_.sheenColorMap,g.sheenColorMapTransform)),_.sheenRoughnessMap&&(g.sheenRoughnessMap.value=_.sheenRoughnessMap,t(_.sheenRoughnessMap,g.sheenRoughnessMapTransform))),_.clearcoat>0&&(g.clearcoat.value=_.clearcoat,g.clearcoatRoughness.value=_.clearcoatRoughness,_.clearcoatMap&&(g.clearcoatMap.value=_.clearcoatMap,t(_.clearcoatMap,g.clearcoatMapTransform)),_.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=_.clearcoatRoughnessMap,t(_.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),_.clearcoatNormalMap&&(g.clearcoatNormalMap.value=_.clearcoatNormalMap,t(_.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(_.clearcoatNormalScale),_.side===sn&&g.clearcoatNormalScale.value.negate())),_.iridescence>0&&(g.iridescence.value=_.iridescence,g.iridescenceIOR.value=_.iridescenceIOR,g.iridescenceThicknessMinimum.value=_.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=_.iridescenceThicknessRange[1],_.iridescenceMap&&(g.iridescenceMap.value=_.iridescenceMap,t(_.iridescenceMap,g.iridescenceMapTransform)),_.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=_.iridescenceThicknessMap,t(_.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),_.transmission>0&&(g.transmission.value=_.transmission,g.transmissionSamplerMap.value=A.texture,g.transmissionSamplerSize.value.set(A.width,A.height),_.transmissionMap&&(g.transmissionMap.value=_.transmissionMap,t(_.transmissionMap,g.transmissionMapTransform)),g.thickness.value=_.thickness,_.thicknessMap&&(g.thicknessMap.value=_.thicknessMap,t(_.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=_.attenuationDistance,g.attenuationColor.value.copy(_.attenuationColor)),_.anisotropy>0&&(g.anisotropyVector.value.set(_.anisotropy*Math.cos(_.anisotropyRotation),_.anisotropy*Math.sin(_.anisotropyRotation)),_.anisotropyMap&&(g.anisotropyMap.value=_.anisotropyMap,t(_.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=_.specularIntensity,g.specularColor.value.copy(_.specularColor),_.specularColorMap&&(g.specularColorMap.value=_.specularColorMap,t(_.specularColorMap,g.specularColorMapTransform)),_.specularIntensityMap&&(g.specularIntensityMap.value=_.specularIntensityMap,t(_.specularIntensityMap,g.specularIntensityMapTransform))}function v(g,_){_.matcap&&(g.matcap.value=_.matcap)}function x(g,_){const A=e.get(_).light;g.referencePosition.value.setFromMatrixPosition(A.matrixWorld),g.nearDistance.value=A.shadow.camera.near,g.farDistance.value=A.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function _A(n,e,t,i){let r={},o={},a=[];const s=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(A,b){const S=b.program;i.uniformBlockBinding(A,S)}function c(A,b){let S=r[A.id];S===void 0&&(v(A),S=h(A),r[A.id]=S,A.addEventListener("dispose",g));const C=b.program;i.updateUBOMapping(A,C);const D=e.render.frame;o[A.id]!==D&&(d(A),o[A.id]=D)}function h(A){const b=f();A.__bindingPointIndex=b;const S=n.createBuffer(),C=A.__size,D=A.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,C,D),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,S),S}function f(){for(let A=0;A<s;A++)if(a.indexOf(A)===-1)return a.push(A),A;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(A){const b=r[A.id],S=A.uniforms,C=A.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let D=0,R=S.length;D<R;D++){const Z=S[D];if(m(Z,D,C)===!0){const M=Z.__offset,L=Array.isArray(Z.value)?Z.value:[Z.value];let G=0;for(let se=0;se<L.length;se++){const ae=L[se],B=x(ae);typeof ae=="number"?(Z.__data[0]=ae,n.bufferSubData(n.UNIFORM_BUFFER,M+G,Z.__data)):ae.isMatrix3?(Z.__data[0]=ae.elements[0],Z.__data[1]=ae.elements[1],Z.__data[2]=ae.elements[2],Z.__data[3]=ae.elements[0],Z.__data[4]=ae.elements[3],Z.__data[5]=ae.elements[4],Z.__data[6]=ae.elements[5],Z.__data[7]=ae.elements[0],Z.__data[8]=ae.elements[6],Z.__data[9]=ae.elements[7],Z.__data[10]=ae.elements[8],Z.__data[11]=ae.elements[0]):(ae.toArray(Z.__data,G),G+=B.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,Z.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(A,b,S){const C=A.value;if(S[b]===void 0){if(typeof C=="number")S[b]=C;else{const D=Array.isArray(C)?C:[C],R=[];for(let Z=0;Z<D.length;Z++)R.push(D[Z].clone());S[b]=R}return!0}else if(typeof C=="number"){if(S[b]!==C)return S[b]=C,!0}else{const D=Array.isArray(S[b])?S[b]:[S[b]],R=Array.isArray(C)?C:[C];for(let Z=0;Z<D.length;Z++){const M=D[Z];if(M.equals(R[Z])===!1)return M.copy(R[Z]),!0}}return!1}function v(A){const b=A.uniforms;let S=0;const C=16;let D=0;for(let R=0,Z=b.length;R<Z;R++){const M=b[R],L={boundary:0,storage:0},G=Array.isArray(M.value)?M.value:[M.value];for(let se=0,ae=G.length;se<ae;se++){const B=G[se],te=x(B);L.boundary+=te.boundary,L.storage+=te.storage}if(M.__data=new Float32Array(L.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=S,R>0){D=S%C;const se=C-D;D!==0&&se-L.boundary<0&&(S+=C-D,M.__offset=S)}S+=L.storage}return D=S%C,D>0&&(S+=C-D),A.__size=S,A.__cache={},this}function x(A){const b={boundary:0,storage:0};return typeof A=="number"?(b.boundary=4,b.storage=4):A.isVector2?(b.boundary=8,b.storage=8):A.isVector3||A.isColor?(b.boundary=16,b.storage=12):A.isVector4?(b.boundary=16,b.storage=16):A.isMatrix3?(b.boundary=48,b.storage=48):A.isMatrix4?(b.boundary=64,b.storage=64):A.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",A),b}function g(A){const b=A.target;b.removeEventListener("dispose",g);const S=a.indexOf(b.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(r[b.id]),delete r[b.id],delete o[b.id]}function _(){for(const A in r)n.deleteBuffer(r[A]);a=[],r={},o={}}return{bind:l,update:c,dispose:_}}class vA{constructor(e={}){const{canvas:t=pM(),context:i=null,depth:r=!0,stencil:o=!0,alpha:a=!1,antialias:s=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=a;const m=new Uint32Array(4),v=new Int32Array(4);let x=null,g=null;const _=[],A=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this._useLegacyLights=!1,this.toneMapping=Ei,this.toneMappingExposure=1;const b=this;let S=!1,C=0,D=0,R=null,Z=-1,M=null;const L=new Vt,G=new Vt;let se=null;const ae=new ft(0);let B=0,te=t.width,ue=t.height,re=1,ie=null,q=null;const X=new Vt(0,0,te,ue),O=new Vt(0,0,te,ue);let W=!1;const ye=new ng;let xe=!1,he=!1,Ce=null;const He=new Lt,Fe=new st,Ie=new V,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return R===null?re:1}let k=i;function Mt(T,H){for(let K=0;K<T.length;K++){const Q=T[K],ee=t.getContext(Q,H);if(ee!==null)return ee}return null}try{const T={alpha:!0,depth:r,stencil:o,antialias:s,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Su}`),t.addEventListener("webglcontextlost",et,!1),t.addEventListener("webglcontextrestored",F,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),k===null){const H=["webgl2","webgl","experimental-webgl"];if(b.isWebGL1Renderer===!0&&H.shift(),k=Mt(H,T),k===null)throw Mt(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let Pe,ze,We,Je,Be,Le,rt,dt,vt,P,E,Y,ve,pe,me,De,Me,we,U,Se,fe,le,z,ce;function $(){Pe=new AT(k),ze=new yT(k,Pe,e),Pe.init(ze),le=new fA(k,Pe,ze),We=new cA(k,Pe,ze),Je=new PT(k),Be=new jw,Le=new uA(k,Pe,We,Be,ze,le,Je),rt=new MT(b),dt=new wT(b),vt=new kM(k,ze),z=new vT(k,Pe,vt,ze),P=new RT(k,vt,Je,z),E=new UT(k,P,vt,Je),U=new NT(k,ze,Le),De=new ST(Be),Y=new $w(b,rt,dt,Pe,ze,z,De),ve=new gA(b,Be),pe=new Zw,me=new iA(Pe,ze),we=new _T(b,rt,dt,We,E,d,l),Me=new lA(b,E,ze),ce=new _A(k,Je,ze,We),Se=new xT(k,Pe,Je,ze),fe=new CT(k,Pe,Je,ze),Je.programs=Y.programs,b.capabilities=ze,b.extensions=Pe,b.properties=Be,b.renderLists=pe,b.shadowMap=Me,b.state=We,b.info=Je}$();const Ae=new mA(b,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=Pe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=Pe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return re},this.setPixelRatio=function(T){T!==void 0&&(re=T,this.setSize(te,ue,!1))},this.getSize=function(T){return T.set(te,ue)},this.setSize=function(T,H,K=!0){if(Ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=T,ue=H,t.width=Math.floor(T*re),t.height=Math.floor(H*re),K===!0&&(t.style.width=T+"px",t.style.height=H+"px"),this.setViewport(0,0,T,H)},this.getDrawingBufferSize=function(T){return T.set(te*re,ue*re).floor()},this.setDrawingBufferSize=function(T,H,K){te=T,ue=H,re=K,t.width=Math.floor(T*K),t.height=Math.floor(H*K),this.setViewport(0,0,T,H)},this.getCurrentViewport=function(T){return T.copy(L)},this.getViewport=function(T){return T.copy(X)},this.setViewport=function(T,H,K,Q){T.isVector4?X.set(T.x,T.y,T.z,T.w):X.set(T,H,K,Q),We.viewport(L.copy(X).multiplyScalar(re).floor())},this.getScissor=function(T){return T.copy(O)},this.setScissor=function(T,H,K,Q){T.isVector4?O.set(T.x,T.y,T.z,T.w):O.set(T,H,K,Q),We.scissor(G.copy(O).multiplyScalar(re).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(T){We.setScissorTest(W=T)},this.setOpaqueSort=function(T){ie=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(we.getClearColor())},this.setClearColor=function(){we.setClearColor.apply(we,arguments)},this.getClearAlpha=function(){return we.getClearAlpha()},this.setClearAlpha=function(){we.setClearAlpha.apply(we,arguments)},this.clear=function(T=!0,H=!0,K=!0){let Q=0;if(T){let ee=!1;if(R!==null){const _e=R.texture.format;ee=_e===Gm||_e===Hm||_e===zm}if(ee){const _e=R.texture.type,Oe=_e===bi||_e===xi||_e===Mu||_e===Yi||_e===Bm||_e===km,Ge=we.getClearColor(),qe=we.getClearAlpha(),Xe=Ge.r,Qe=Ge.g,Ye=Ge.b;Oe?(m[0]=Xe,m[1]=Qe,m[2]=Ye,m[3]=qe,k.clearBufferuiv(k.COLOR,0,m)):(v[0]=Xe,v[1]=Qe,v[2]=Ye,v[3]=qe,k.clearBufferiv(k.COLOR,0,v))}else Q|=k.COLOR_BUFFER_BIT}H&&(Q|=k.DEPTH_BUFFER_BIT),K&&(Q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(Q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",et,!1),t.removeEventListener("webglcontextrestored",F,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),pe.dispose(),me.dispose(),Be.dispose(),rt.dispose(),dt.dispose(),E.dispose(),z.dispose(),ce.dispose(),Y.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",jt),Ae.removeEventListener("sessionend",pt),Ce&&(Ce.dispose(),Ce=null),Ut.stop()};function et(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function F(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const T=Je.autoReset,H=Me.enabled,K=Me.autoUpdate,Q=Me.needsUpdate,ee=Me.type;$(),Je.autoReset=T,Me.enabled=H,Me.autoUpdate=K,Me.needsUpdate=Q,Me.type=ee}function Ee(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function ge(T){const H=T.target;H.removeEventListener("dispose",ge),J(H)}function J(T){de(T),Be.remove(T)}function de(T){const H=Be.get(T).programs;H!==void 0&&(H.forEach(function(K){Y.releaseProgram(K)}),T.isShaderMaterial&&Y.releaseShaderCache(T))}this.renderBufferDirect=function(T,H,K,Q,ee,_e){H===null&&(H=ct);const Oe=ee.isMesh&&ee.matrixWorld.determinant()<0,Ge=Va(T,H,K,Q,ee);We.setMaterial(Q,Oe);let qe=K.index,Xe=1;if(Q.wireframe===!0){if(qe=P.getWireframeAttribute(K),qe===void 0)return;Xe=2}const Qe=K.drawRange,Ye=K.attributes.position;let xt=Qe.start*Xe,zt=(Qe.start+Qe.count)*Xe;_e!==null&&(xt=Math.max(xt,_e.start*Xe),zt=Math.min(zt,(_e.start+_e.count)*Xe)),qe!==null?(xt=Math.max(xt,0),zt=Math.min(zt,qe.count)):Ye!=null&&(xt=Math.max(xt,0),zt=Math.min(zt,Ye.count));const wt=zt-xt;if(wt<0||wt===1/0)return;z.setup(ee,Q,Ge,K,qe);let en,ut=Se;if(qe!==null&&(en=vt.get(qe),ut=fe,ut.setIndex(en)),ee.isMesh)Q.wireframe===!0?(We.setLineWidth(Q.wireframeLinewidth*Ue()),ut.setMode(k.LINES)):ut.setMode(k.TRIANGLES);else if(ee.isLine){let tt=Q.linewidth;tt===void 0&&(tt=1),We.setLineWidth(tt*Ue()),ee.isLineSegments?ut.setMode(k.LINES):ee.isLineLoop?ut.setMode(k.LINE_LOOP):ut.setMode(k.LINE_STRIP)}else ee.isPoints?ut.setMode(k.POINTS):ee.isSprite&&ut.setMode(k.TRIANGLES);if(ee.isInstancedMesh)ut.renderInstances(xt,wt,ee.count);else if(K.isInstancedBufferGeometry){const tt=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Xn=Math.min(K.instanceCount,tt);ut.renderInstances(xt,wt,Xn)}else ut.render(xt,wt)};function ke(T,H,K){T.transparent===!0&&T.side===ti&&T.forceSinglePass===!1?(T.side=sn,T.needsUpdate=!0,ci(T,H,K),T.side=Ti,T.needsUpdate=!0,ci(T,H,K),T.side=ti):ci(T,H,K)}this.compile=function(T,H,K=null){K===null&&(K=T),g=me.get(K),g.init(),A.push(g),K.traverseVisible(function(ee){ee.isLight&&ee.layers.test(H.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),T!==K&&T.traverseVisible(function(ee){ee.isLight&&ee.layers.test(H.layers)&&(g.pushLight(ee),ee.castShadow&&g.pushShadow(ee))}),g.setupLights(b._useLegacyLights);const Q=new Set;return T.traverse(function(ee){const _e=ee.material;if(_e)if(Array.isArray(_e))for(let Oe=0;Oe<_e.length;Oe++){const Ge=_e[Oe];ke(Ge,K,ee),Q.add(Ge)}else ke(_e,K,ee),Q.add(_e)}),A.pop(),g=null,Q},this.compileAsync=function(T,H,K=null){const Q=this.compile(T,H,K);return new Promise(ee=>{function _e(){if(Q.forEach(function(Oe){Be.get(Oe).currentProgram.isReady()&&Q.delete(Oe)}),Q.size===0){ee(T);return}setTimeout(_e,10)}Pe.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let it=null;function Et(T){it&&it(T)}function jt(){Ut.stop()}function pt(){Ut.start()}const Ut=new ig;Ut.setAnimationLoop(Et),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(T){it=T,Ae.setAnimationLoop(T),T===null?Ut.stop():Ut.start()},Ae.addEventListener("sessionstart",jt),Ae.addEventListener("sessionend",pt),this.render=function(T,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera(H),H=Ae.getCamera()),T.isScene===!0&&T.onBeforeRender(b,T,H,R),g=me.get(T,A.length),g.init(),A.push(g),He.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ye.setFromProjectionMatrix(He),he=this.localClippingEnabled,xe=De.init(this.clippingPlanes,he),x=pe.get(T,_.length),x.init(),_.push(x),an(T,H,0,b.sortObjects),x.finish(),b.sortObjects===!0&&x.sort(ie,q),this.info.render.frame++,xe===!0&&De.beginShadows();const K=g.state.shadowsArray;if(Me.render(K,T,H),xe===!0&&De.endShadows(),this.info.autoReset===!0&&this.info.reset(),we.render(x,T),g.setupLights(b._useLegacyLights),H.isArrayCamera){const Q=H.cameras;for(let ee=0,_e=Q.length;ee<_e;ee++){const Oe=Q[ee];no(x,T,Oe,Oe.viewport)}}else no(x,T,H);R!==null&&(Le.updateMultisampleRenderTarget(R),Le.updateRenderTargetMipmap(R)),T.isScene===!0&&T.onAfterRender(b,T,H),z.resetDefaultState(),Z=-1,M=null,A.pop(),A.length>0?g=A[A.length-1]:g=null,_.pop(),_.length>0?x=_[_.length-1]:x=null};function an(T,H,K,Q){if(T.visible===!1)return;if(T.layers.test(H.layers)){if(T.isGroup)K=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(H);else if(T.isLight)g.pushLight(T),T.castShadow&&g.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||ye.intersectsSprite(T)){Q&&Ie.setFromMatrixPosition(T.matrixWorld).applyMatrix4(He);const Oe=E.update(T),Ge=T.material;Ge.visible&&x.push(T,Oe,Ge,K,Ie.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||ye.intersectsObject(T))){const Oe=E.update(T),Ge=T.material;if(Q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Ie.copy(T.boundingSphere.center)):(Oe.boundingSphere===null&&Oe.computeBoundingSphere(),Ie.copy(Oe.boundingSphere.center)),Ie.applyMatrix4(T.matrixWorld).applyMatrix4(He)),Array.isArray(Ge)){const qe=Oe.groups;for(let Xe=0,Qe=qe.length;Xe<Qe;Xe++){const Ye=qe[Xe],xt=Ge[Ye.materialIndex];xt&&xt.visible&&x.push(T,Oe,xt,K,Ie.z,Ye)}}else Ge.visible&&x.push(T,Oe,Ge,K,Ie.z,null)}}const _e=T.children;for(let Oe=0,Ge=_e.length;Oe<Ge;Oe++)an(_e[Oe],H,K,Q)}function no(T,H,K,Q){const ee=T.opaque,_e=T.transmissive,Oe=T.transparent;g.setupLightsView(K),xe===!0&&De.setGlobalState(b.clippingPlanes,K),_e.length>0&&ts(ee,_e,H,K),Q&&We.viewport(L.copy(Q)),ee.length>0&&wi(ee,H,K),_e.length>0&&wi(_e,H,K),Oe.length>0&&wi(Oe,H,K),We.buffers.depth.setTest(!0),We.buffers.depth.setMask(!0),We.buffers.color.setMask(!0),We.setPolygonOffset(!1)}function ts(T,H,K,Q){if((K.isScene===!0?K.overrideMaterial:null)!==null)return;const _e=ze.isWebGL2;Ce===null&&(Ce=new Ji(1,1,{generateMipmaps:!0,type:Pe.has("EXT_color_buffer_half_float")?Vo:bi,minFilter:Go,samples:_e?4:0})),b.getDrawingBufferSize(Fe),_e?Ce.setSize(Fe.x,Fe.y):Ce.setSize(Pa(Fe.x),Pa(Fe.y));const Oe=b.getRenderTarget();b.setRenderTarget(Ce),b.getClearColor(ae),B=b.getClearAlpha(),B<1&&b.setClearColor(16777215,.5),b.clear();const Ge=b.toneMapping;b.toneMapping=Ei,wi(T,K,Q),Le.updateMultisampleRenderTarget(Ce),Le.updateRenderTargetMipmap(Ce);let qe=!1;for(let Xe=0,Qe=H.length;Xe<Qe;Xe++){const Ye=H[Xe],xt=Ye.object,zt=Ye.geometry,wt=Ye.material,en=Ye.group;if(wt.side===ti&&xt.layers.test(Q.layers)){const ut=wt.side;wt.side=sn,wt.needsUpdate=!0,io(xt,K,Q,zt,wt,en),wt.side=ut,wt.needsUpdate=!0,qe=!0}}qe===!0&&(Le.updateMultisampleRenderTarget(Ce),Le.updateRenderTargetMipmap(Ce)),b.setRenderTarget(Oe),b.setClearColor(ae,B),b.toneMapping=Ge}function wi(T,H,K){const Q=H.isScene===!0?H.overrideMaterial:null;for(let ee=0,_e=T.length;ee<_e;ee++){const Oe=T[ee],Ge=Oe.object,qe=Oe.geometry,Xe=Q===null?Oe.material:Q,Qe=Oe.group;Ge.layers.test(K.layers)&&io(Ge,H,K,qe,Xe,Qe)}}function io(T,H,K,Q,ee,_e){T.onBeforeRender(b,H,K,Q,ee,_e),T.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),ee.onBeforeRender(b,H,K,Q,T,_e),ee.transparent===!0&&ee.side===ti&&ee.forceSinglePass===!1?(ee.side=sn,ee.needsUpdate=!0,b.renderBufferDirect(K,H,Q,ee,T,_e),ee.side=Ti,ee.needsUpdate=!0,b.renderBufferDirect(K,H,Q,ee,T,_e),ee.side=ti):b.renderBufferDirect(K,H,Q,ee,T,_e),T.onAfterRender(b,H,K,Q,ee,_e)}function ci(T,H,K){H.isScene!==!0&&(H=ct);const Q=Be.get(T),ee=g.state.lights,_e=g.state.shadowsArray,Oe=ee.state.version,Ge=Y.getParameters(T,ee.state,_e,H,K),qe=Y.getProgramCacheKey(Ge);let Xe=Q.programs;Q.environment=T.isMeshStandardMaterial?H.environment:null,Q.fog=H.fog,Q.envMap=(T.isMeshStandardMaterial?dt:rt).get(T.envMap||Q.environment),Xe===void 0&&(T.addEventListener("dispose",ge),Xe=new Map,Q.programs=Xe);let Qe=Xe.get(qe);if(Qe!==void 0){if(Q.currentProgram===Qe&&Q.lightsStateVersion===Oe)return ro(T,Ge),Qe}else Ge.uniforms=Y.getUniforms(T),T.onBuild(K,Ge,b),T.onBeforeCompile(Ge,b),Qe=Y.acquireProgram(Ge,qe),Xe.set(qe,Qe),Q.uniforms=Ge.uniforms;const Ye=Q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Ye.clippingPlanes=De.uniform),ro(T,Ge),Q.needsLights=oo(T),Q.lightsStateVersion=Oe,Q.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.directionalShadowMap.value=ee.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotShadowMap.value=ee.state.spotShadowMap,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMap.value=ee.state.pointShadowMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),Q.currentProgram=Qe,Q.uniformsList=null,Qe}function ir(T){if(T.uniformsList===null){const H=T.currentProgram.getUniforms();T.uniformsList=ha.seqWithValue(H.seq,T.uniforms)}return T.uniformsList}function ro(T,H){const K=Be.get(T);K.outputColorSpace=H.outputColorSpace,K.instancing=H.instancing,K.instancingColor=H.instancingColor,K.skinning=H.skinning,K.morphTargets=H.morphTargets,K.morphNormals=H.morphNormals,K.morphColors=H.morphColors,K.morphTargetsCount=H.morphTargetsCount,K.numClippingPlanes=H.numClippingPlanes,K.numIntersection=H.numClipIntersection,K.vertexAlphas=H.vertexAlphas,K.vertexTangents=H.vertexTangents,K.toneMapping=H.toneMapping}function Va(T,H,K,Q,ee){H.isScene!==!0&&(H=ct),Le.resetTextureUnits();const _e=H.fog,Oe=Q.isMeshStandardMaterial?H.environment:null,Ge=R===null?b.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:ai,qe=(Q.isMeshStandardMaterial?dt:rt).get(Q.envMap||Oe),Xe=Q.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,Qe=!!K.attributes.tangent&&(!!Q.normalMap||Q.anisotropy>0),Ye=!!K.morphAttributes.position,xt=!!K.morphAttributes.normal,zt=!!K.morphAttributes.color;let wt=Ei;Q.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(wt=b.toneMapping);const en=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ut=en!==void 0?en.length:0,tt=Be.get(Q),Xn=g.state.lights;if(xe===!0&&(he===!0||T!==M)){const Wt=T===M&&Q.id===Z;De.setState(Q,T,Wt)}let At=!1;Q.version===tt.__version?(tt.needsLights&&tt.lightsStateVersion!==Xn.state.version||tt.outputColorSpace!==Ge||ee.isInstancedMesh&&tt.instancing===!1||!ee.isInstancedMesh&&tt.instancing===!0||ee.isSkinnedMesh&&tt.skinning===!1||!ee.isSkinnedMesh&&tt.skinning===!0||ee.isInstancedMesh&&tt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&tt.instancingColor===!1&&ee.instanceColor!==null||tt.envMap!==qe||Q.fog===!0&&tt.fog!==_e||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==De.numPlanes||tt.numIntersection!==De.numIntersection)||tt.vertexAlphas!==Xe||tt.vertexTangents!==Qe||tt.morphTargets!==Ye||tt.morphNormals!==xt||tt.morphColors!==zt||tt.toneMapping!==wt||ze.isWebGL2===!0&&tt.morphTargetsCount!==ut)&&(At=!0):(At=!0,tt.__version=Q.version);let tn=tt.currentProgram;At===!0&&(tn=ci(Q,H,ee));let ui=!1,yn=!1,Ai=!1;const It=tn.getUniforms(),Fn=tt.uniforms;if(We.useProgram(tn.program)&&(ui=!0,yn=!0,Ai=!0),Q.id!==Z&&(Z=Q.id,yn=!0),ui||M!==T){It.setValue(k,"projectionMatrix",T.projectionMatrix),It.setValue(k,"viewMatrix",T.matrixWorldInverse);const Wt=It.map.cameraPosition;Wt!==void 0&&Wt.setValue(k,Ie.setFromMatrixPosition(T.matrixWorld)),ze.logarithmicDepthBuffer&&It.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(Q.isMeshPhongMaterial||Q.isMeshToonMaterial||Q.isMeshLambertMaterial||Q.isMeshBasicMaterial||Q.isMeshStandardMaterial||Q.isShaderMaterial)&&It.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),M!==T&&(M=T,yn=!0,Ai=!0)}if(ee.isSkinnedMesh){It.setOptional(k,ee,"bindMatrix"),It.setOptional(k,ee,"bindMatrixInverse");const Wt=ee.skeleton;Wt&&(ze.floatVertexTextures?(Wt.boneTexture===null&&Wt.computeBoneTexture(),It.setValue(k,"boneTexture",Wt.boneTexture,Le),It.setValue(k,"boneTextureSize",Wt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Ri=K.morphAttributes;if((Ri.position!==void 0||Ri.normal!==void 0||Ri.color!==void 0&&ze.isWebGL2===!0)&&U.update(ee,K,tn),(yn||tt.receiveShadow!==ee.receiveShadow)&&(tt.receiveShadow=ee.receiveShadow,It.setValue(k,"receiveShadow",ee.receiveShadow)),Q.isMeshGouraudMaterial&&Q.envMap!==null&&(Fn.envMap.value=qe,Fn.flipEnvMap.value=qe.isCubeTexture&&qe.isRenderTargetTexture===!1?-1:1),yn&&(It.setValue(k,"toneMappingExposure",b.toneMappingExposure),tt.needsLights&&Wa(Fn,Ai),_e&&Q.fog===!0&&ve.refreshFogUniforms(Fn,_e),ve.refreshMaterialUniforms(Fn,Q,re,ue,Ce),ha.upload(k,ir(tt),Fn,Le)),Q.isShaderMaterial&&Q.uniformsNeedUpdate===!0&&(ha.upload(k,ir(tt),Fn,Le),Q.uniformsNeedUpdate=!1),Q.isSpriteMaterial&&It.setValue(k,"center",ee.center),It.setValue(k,"modelViewMatrix",ee.modelViewMatrix),It.setValue(k,"normalMatrix",ee.normalMatrix),It.setValue(k,"modelMatrix",ee.matrixWorld),Q.isShaderMaterial||Q.isRawShaderMaterial){const Wt=Q.uniformsGroups;for(let Ci=0,ns=Wt.length;Ci<ns;Ci++)if(ze.isWebGL2){const Pi=Wt[Ci];ce.update(Pi,tn),ce.bind(Pi,tn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return tn}function Wa(T,H){T.ambientLightColor.needsUpdate=H,T.lightProbe.needsUpdate=H,T.directionalLights.needsUpdate=H,T.directionalLightShadows.needsUpdate=H,T.pointLights.needsUpdate=H,T.pointLightShadows.needsUpdate=H,T.spotLights.needsUpdate=H,T.spotLightShadows.needsUpdate=H,T.rectAreaLights.needsUpdate=H,T.hemisphereLights.needsUpdate=H}function oo(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(T,H,K){Be.get(T.texture).__webglTexture=H,Be.get(T.depthTexture).__webglTexture=K;const Q=Be.get(T);Q.__hasExternalTextures=!0,Q.__hasExternalTextures&&(Q.__autoAllocateDepthBuffer=K===void 0,Q.__autoAllocateDepthBuffer||Pe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Q.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(T,H){const K=Be.get(T);K.__webglFramebuffer=H,K.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(T,H=0,K=0){R=T,C=H,D=K;let Q=!0,ee=null,_e=!1,Oe=!1;if(T){const qe=Be.get(T);qe.__useDefaultFramebuffer!==void 0?(We.bindFramebuffer(k.FRAMEBUFFER,null),Q=!1):qe.__webglFramebuffer===void 0?Le.setupRenderTarget(T):qe.__hasExternalTextures&&Le.rebindTextures(T,Be.get(T.texture).__webglTexture,Be.get(T.depthTexture).__webglTexture);const Xe=T.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Oe=!0);const Qe=Be.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Qe[H])?ee=Qe[H][K]:ee=Qe[H],_e=!0):ze.isWebGL2&&T.samples>0&&Le.useMultisampledRTT(T)===!1?ee=Be.get(T).__webglMultisampledFramebuffer:Array.isArray(Qe)?ee=Qe[K]:ee=Qe,L.copy(T.viewport),G.copy(T.scissor),se=T.scissorTest}else L.copy(X).multiplyScalar(re).floor(),G.copy(O).multiplyScalar(re).floor(),se=W;if(We.bindFramebuffer(k.FRAMEBUFFER,ee)&&ze.drawBuffers&&Q&&We.drawBuffers(T,ee),We.viewport(L),We.scissor(G),We.setScissorTest(se),_e){const qe=Be.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+H,qe.__webglTexture,K)}else if(Oe){const qe=Be.get(T.texture),Xe=H||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,qe.__webglTexture,K||0,Xe)}Z=-1},this.readRenderTargetPixels=function(T,H,K,Q,ee,_e,Oe){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=Be.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Oe!==void 0&&(Ge=Ge[Oe]),Ge){We.bindFramebuffer(k.FRAMEBUFFER,Ge);try{const qe=T.texture,Xe=qe.format,Qe=qe.type;if(Xe!==Pn&&le.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ye=Qe===Vo&&(Pe.has("EXT_color_buffer_half_float")||ze.isWebGL2&&Pe.has("EXT_color_buffer_float"));if(Qe!==bi&&le.convert(Qe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Qe===yi&&(ze.isWebGL2||Pe.has("OES_texture_float")||Pe.has("WEBGL_color_buffer_float")))&&!Ye){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=T.width-Q&&K>=0&&K<=T.height-ee&&k.readPixels(H,K,Q,ee,le.convert(Xe),le.convert(Qe),_e)}finally{const qe=R!==null?Be.get(R).__webglFramebuffer:null;We.bindFramebuffer(k.FRAMEBUFFER,qe)}}},this.copyFramebufferToTexture=function(T,H,K=0){const Q=Math.pow(2,-K),ee=Math.floor(H.image.width*Q),_e=Math.floor(H.image.height*Q);Le.setTexture2D(H,0),k.copyTexSubImage2D(k.TEXTURE_2D,K,0,0,T.x,T.y,ee,_e),We.unbindTexture()},this.copyTextureToTexture=function(T,H,K,Q=0){const ee=H.image.width,_e=H.image.height,Oe=le.convert(K.format),Ge=le.convert(K.type);Le.setTexture2D(K,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,K.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,K.unpackAlignment),H.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Q,T.x,T.y,ee,_e,Oe,Ge,H.image.data):H.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Q,T.x,T.y,H.mipmaps[0].width,H.mipmaps[0].height,Oe,H.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,Q,T.x,T.y,Oe,Ge,H.image),Q===0&&K.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),We.unbindTexture()},this.copyTextureToTexture3D=function(T,H,K,Q,ee=0){if(b.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const _e=T.max.x-T.min.x+1,Oe=T.max.y-T.min.y+1,Ge=T.max.z-T.min.z+1,qe=le.convert(Q.format),Xe=le.convert(Q.type);let Qe;if(Q.isData3DTexture)Le.setTexture3D(Q,0),Qe=k.TEXTURE_3D;else if(Q.isDataArrayTexture)Le.setTexture2DArray(Q,0),Qe=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Q.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,Q.unpackAlignment);const Ye=k.getParameter(k.UNPACK_ROW_LENGTH),xt=k.getParameter(k.UNPACK_IMAGE_HEIGHT),zt=k.getParameter(k.UNPACK_SKIP_PIXELS),wt=k.getParameter(k.UNPACK_SKIP_ROWS),en=k.getParameter(k.UNPACK_SKIP_IMAGES),ut=K.isCompressedTexture?K.mipmaps[0]:K.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,T.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,T.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,T.min.z),K.isDataTexture||K.isData3DTexture?k.texSubImage3D(Qe,ee,H.x,H.y,H.z,_e,Oe,Ge,qe,Xe,ut.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(Qe,ee,H.x,H.y,H.z,_e,Oe,Ge,qe,ut.data)):k.texSubImage3D(Qe,ee,H.x,H.y,H.z,_e,Oe,Ge,qe,Xe,ut),k.pixelStorei(k.UNPACK_ROW_LENGTH,Ye),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,xt),k.pixelStorei(k.UNPACK_SKIP_PIXELS,zt),k.pixelStorei(k.UNPACK_SKIP_ROWS,wt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,en),ee===0&&Q.generateMipmaps&&k.generateMipmap(Qe),We.unbindTexture()},this.initTexture=function(T){T.isCubeTexture?Le.setTextureCube(T,0):T.isData3DTexture?Le.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?Le.setTexture2DArray(T,0):Le.setTexture2D(T,0),We.unbindTexture()},this.resetState=function(){C=0,D=0,R=null,We.reset(),z.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return ii}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Eu?"display-p3":"srgb",t.unpackColorSpace=gt.workingColorSpace===ka?"display-p3":"srgb"}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Gt?ji:Vm}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===ji?Gt:ai}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class lg extends vA{}lg.prototype.isWebGL1Renderer=!0;class xA extends Qt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class cg extends eo{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ft(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Jd=new V,Qd=new V,ep=new Lt,Rc=new za,ta=new Qo;class yA extends Qt{constructor(e=new On,t=new cg){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let r=1,o=t.count;r<o;r++)Jd.fromBufferAttribute(t,r-1),Qd.fromBufferAttribute(t,r),i[r]=i[r-1],i[r]+=Jd.distanceTo(Qd);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ta.copy(i.boundingSphere),ta.applyMatrix4(r),ta.radius+=o,e.ray.intersectsSphere(ta)===!1)return;ep.copy(r).invert(),Rc.copy(e.ray).applyMatrix4(ep);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=new V,h=new V,f=new V,d=new V,m=this.isLineSegments?2:1,v=i.index,g=i.attributes.position;if(v!==null){const _=Math.max(0,a.start),A=Math.min(v.count,a.start+a.count);for(let b=_,S=A-1;b<S;b+=m){const C=v.getX(b),D=v.getX(b+1);if(c.fromBufferAttribute(g,C),h.fromBufferAttribute(g,D),Rc.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const Z=e.ray.origin.distanceTo(d);Z<e.near||Z>e.far||t.push({distance:Z,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,a.start),A=Math.min(g.count,a.start+a.count);for(let b=_,S=A-1;b<S;b+=m){if(c.fromBufferAttribute(g,b),h.fromBufferAttribute(g,b+1),Rc.distanceSqToSegment(c,h,d,f)>l)continue;d.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(d);D<e.near||D>e.far||t.push({distance:D,point:f.clone().applyMatrix4(this.matrixWorld),index:b,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}const tp=new V,np=new V;class SA extends yA{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let r=0,o=t.count;r<o;r+=2)tp.fromBufferAttribute(t,r),np.fromBufferAttribute(t,r+1),i[r]=r===0?0:i[r-1],i[r+1]=i[r]+tp.distanceTo(np);e.setAttribute("lineDistance",new Dn(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ug extends eo{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ft(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const ip=new Lt,iu=new za,na=new Qo,ia=new V;class MA extends Qt{constructor(e=new On,t=new ug){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,r=this.matrixWorld,o=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),na.copy(i.boundingSphere),na.applyMatrix4(r),na.radius+=o,e.ray.intersectsSphere(na)===!1)return;ip.copy(r).invert(),iu.copy(e.ray).applyMatrix4(ip);const s=o/((this.scale.x+this.scale.y+this.scale.z)/3),l=s*s,c=i.index,f=i.attributes.position;if(c!==null){const d=Math.max(0,a.start),m=Math.min(c.count,a.start+a.count);for(let v=d,x=m;v<x;v++){const g=c.getX(v);ia.fromBufferAttribute(f,g),rp(ia,g,l,r,e,t,this)}}else{const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let v=d,x=m;v<x;v++)ia.fromBufferAttribute(f,v),rp(ia,v,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=r.length;o<a;o++){const s=r[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[s]=o}}}}}function rp(n,e,t,i,r,o,a){const s=iu.distanceSqToPoint(n);if(s<t){const l=new V;iu.closestPointToPoint(n,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;o.push({distance:c,distanceToRay:Math.sqrt(s),point:l,index:e,face:null,object:a})}}class op{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos($t(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class EA extends SA{constructor(e=10,t=10,i=4473924,r=8947848){i=new ft(i),r=new ft(r);const o=t/2,a=e/t,s=e/2,l=[],c=[];for(let d=0,m=0,v=-s;d<=t;d++,v+=a){l.push(-s,0,v,s,0,v),l.push(v,0,-s,v,0,s);const x=d===o?i:r;x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3,x.toArray(c,m),m+=3}const h=new On;h.setAttribute("position",new Dn(l,3)),h.setAttribute("color",new Dn(c,3));const f=new cg({vertexColors:!0,toneMapped:!1});super(h,f),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Su}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Su);const sp={type:"change"},Cc={type:"start"},ap={type:"end"},ra=new za,lp=new vi,bA=Math.cos(70*dM.DEG2RAD);class TA extends nr{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.cursor=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:gr.ROTATE,MIDDLE:gr.DOLLY,RIGHT:gr.PAN},this.touches={ONE:_r.ROTATE,TWO:_r.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return s.phi},this.getAzimuthalAngle=function(){return s.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(U){U.addEventListener("keydown",E),this._domElementKeyEvents=U},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",E),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(sp),i.update(),o=r.NONE},this.update=function(){const U=new V,Se=new Qi().setFromUnitVectors(e.up,new V(0,1,0)),fe=Se.clone().invert(),le=new V,z=new Qi,ce=new V,$=2*Math.PI;return function(et=null){const F=i.object.position;U.copy(F).sub(i.target),U.applyQuaternion(Se),s.setFromVector3(U),i.autoRotate&&o===r.NONE&&G(M(et)),i.enableDamping?(s.theta+=l.theta*i.dampingFactor,s.phi+=l.phi*i.dampingFactor):(s.theta+=l.theta,s.phi+=l.phi);let Ee=i.minAzimuthAngle,ge=i.maxAzimuthAngle;isFinite(Ee)&&isFinite(ge)&&(Ee<-Math.PI?Ee+=$:Ee>Math.PI&&(Ee-=$),ge<-Math.PI?ge+=$:ge>Math.PI&&(ge-=$),Ee<=ge?s.theta=Math.max(Ee,Math.min(ge,s.theta)):s.theta=s.theta>(Ee+ge)/2?Math.max(Ee,s.theta):Math.min(ge,s.theta)),s.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,s.phi)),s.makeSafe(),i.enableDamping===!0?i.target.addScaledVector(h,i.dampingFactor):i.target.add(h),i.target.sub(i.cursor),i.target.clampLength(i.minTargetRadius,i.maxTargetRadius),i.target.add(i.cursor),i.zoomToCursor&&D||i.object.isOrthographicCamera?s.radius=q(s.radius):s.radius=q(s.radius*c),U.setFromSpherical(s),U.applyQuaternion(fe),F.copy(i.target).add(U),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,h.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),h.set(0,0,0));let J=!1;if(i.zoomToCursor&&D){let de=null;if(i.object.isPerspectiveCamera){const ke=U.length();de=q(ke*c);const it=ke-de;i.object.position.addScaledVector(S,it),i.object.updateMatrixWorld()}else if(i.object.isOrthographicCamera){const ke=new V(C.x,C.y,0);ke.unproject(i.object),i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),J=!0;const it=new V(C.x,C.y,0);it.unproject(i.object),i.object.position.sub(it).add(ke),i.object.updateMatrixWorld(),de=U.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),i.zoomToCursor=!1;de!==null&&(this.screenSpacePanning?i.target.set(0,0,-1).transformDirection(i.object.matrix).multiplyScalar(de).add(i.object.position):(ra.origin.copy(i.object.position),ra.direction.set(0,0,-1).transformDirection(i.object.matrix),Math.abs(i.object.up.dot(ra.direction))<bA?e.lookAt(i.target):(lp.setFromNormalAndCoplanarPoint(i.object.up,i.target),ra.intersectPlane(lp,i.target))))}else i.object.isOrthographicCamera&&(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/c)),i.object.updateProjectionMatrix(),J=!0);return c=1,D=!1,J||le.distanceToSquared(i.object.position)>a||8*(1-z.dot(i.object.quaternion))>a||ce.distanceToSquared(i.target)>0?(i.dispatchEvent(sp),le.copy(i.object.position),z.copy(i.object.quaternion),ce.copy(i.target),J=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",pe),i.domElement.removeEventListener("pointerdown",Be),i.domElement.removeEventListener("pointercancel",rt),i.domElement.removeEventListener("wheel",P),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",rt),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",E),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let o=r.NONE;const a=1e-6,s=new op,l=new op;let c=1;const h=new V,f=new st,d=new st,m=new st,v=new st,x=new st,g=new st,_=new st,A=new st,b=new st,S=new V,C=new st;let D=!1;const R=[],Z={};function M(U){return U!==null?2*Math.PI/60*i.autoRotateSpeed*U:2*Math.PI/60/60*i.autoRotateSpeed}function L(){return Math.pow(.95,i.zoomSpeed)}function G(U){l.theta-=U}function se(U){l.phi-=U}const ae=function(){const U=new V;return function(fe,le){U.setFromMatrixColumn(le,0),U.multiplyScalar(-fe),h.add(U)}}(),B=function(){const U=new V;return function(fe,le){i.screenSpacePanning===!0?U.setFromMatrixColumn(le,1):(U.setFromMatrixColumn(le,0),U.crossVectors(i.object.up,U)),U.multiplyScalar(fe),h.add(U)}}(),te=function(){const U=new V;return function(fe,le){const z=i.domElement;if(i.object.isPerspectiveCamera){const ce=i.object.position;U.copy(ce).sub(i.target);let $=U.length();$*=Math.tan(i.object.fov/2*Math.PI/180),ae(2*fe*$/z.clientHeight,i.object.matrix),B(2*le*$/z.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(ae(fe*(i.object.right-i.object.left)/i.object.zoom/z.clientWidth,i.object.matrix),B(le*(i.object.top-i.object.bottom)/i.object.zoom/z.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function ue(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c/=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function re(U){i.object.isPerspectiveCamera||i.object.isOrthographicCamera?c*=U:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function ie(U){if(!i.zoomToCursor)return;D=!0;const Se=i.domElement.getBoundingClientRect(),fe=U.clientX-Se.left,le=U.clientY-Se.top,z=Se.width,ce=Se.height;C.x=fe/z*2-1,C.y=-(le/ce)*2+1,S.set(C.x,C.y,1).unproject(i.object).sub(i.object.position).normalize()}function q(U){return Math.max(i.minDistance,Math.min(i.maxDistance,U))}function X(U){f.set(U.clientX,U.clientY)}function O(U){ie(U),_.set(U.clientX,U.clientY)}function W(U){v.set(U.clientX,U.clientY)}function ye(U){d.set(U.clientX,U.clientY),m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const Se=i.domElement;G(2*Math.PI*m.x/Se.clientHeight),se(2*Math.PI*m.y/Se.clientHeight),f.copy(d),i.update()}function xe(U){A.set(U.clientX,U.clientY),b.subVectors(A,_),b.y>0?ue(L()):b.y<0&&re(L()),_.copy(A),i.update()}function he(U){x.set(U.clientX,U.clientY),g.subVectors(x,v).multiplyScalar(i.panSpeed),te(g.x,g.y),v.copy(x),i.update()}function Ce(U){ie(U),U.deltaY<0?re(L()):U.deltaY>0&&ue(L()),i.update()}function He(U){let Se=!1;switch(U.code){case i.keys.UP:U.ctrlKey||U.metaKey||U.shiftKey?se(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,i.keyPanSpeed),Se=!0;break;case i.keys.BOTTOM:U.ctrlKey||U.metaKey||U.shiftKey?se(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(0,-i.keyPanSpeed),Se=!0;break;case i.keys.LEFT:U.ctrlKey||U.metaKey||U.shiftKey?G(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(i.keyPanSpeed,0),Se=!0;break;case i.keys.RIGHT:U.ctrlKey||U.metaKey||U.shiftKey?G(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):te(-i.keyPanSpeed,0),Se=!0;break}Se&&(U.preventDefault(),i.update())}function Fe(){if(R.length===1)f.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),Se=.5*(R[0].pageY+R[1].pageY);f.set(U,Se)}}function Ie(){if(R.length===1)v.set(R[0].pageX,R[0].pageY);else{const U=.5*(R[0].pageX+R[1].pageX),Se=.5*(R[0].pageY+R[1].pageY);v.set(U,Se)}}function ct(){const U=R[0].pageX-R[1].pageX,Se=R[0].pageY-R[1].pageY,fe=Math.sqrt(U*U+Se*Se);_.set(0,fe)}function Ue(){i.enableZoom&&ct(),i.enablePan&&Ie()}function k(){i.enableZoom&&ct(),i.enableRotate&&Fe()}function Mt(U){if(R.length==1)d.set(U.pageX,U.pageY);else{const fe=we(U),le=.5*(U.pageX+fe.x),z=.5*(U.pageY+fe.y);d.set(le,z)}m.subVectors(d,f).multiplyScalar(i.rotateSpeed);const Se=i.domElement;G(2*Math.PI*m.x/Se.clientHeight),se(2*Math.PI*m.y/Se.clientHeight),f.copy(d)}function Pe(U){if(R.length===1)x.set(U.pageX,U.pageY);else{const Se=we(U),fe=.5*(U.pageX+Se.x),le=.5*(U.pageY+Se.y);x.set(fe,le)}g.subVectors(x,v).multiplyScalar(i.panSpeed),te(g.x,g.y),v.copy(x)}function ze(U){const Se=we(U),fe=U.pageX-Se.x,le=U.pageY-Se.y,z=Math.sqrt(fe*fe+le*le);A.set(0,z),b.set(0,Math.pow(A.y/_.y,i.zoomSpeed)),ue(b.y),_.copy(A)}function We(U){i.enableZoom&&ze(U),i.enablePan&&Pe(U)}function Je(U){i.enableZoom&&ze(U),i.enableRotate&&Mt(U)}function Be(U){i.enabled!==!1&&(R.length===0&&(i.domElement.setPointerCapture(U.pointerId),i.domElement.addEventListener("pointermove",Le),i.domElement.addEventListener("pointerup",rt)),me(U),U.pointerType==="touch"?Y(U):dt(U))}function Le(U){i.enabled!==!1&&(U.pointerType==="touch"?ve(U):vt(U))}function rt(U){De(U),R.length===0&&(i.domElement.releasePointerCapture(U.pointerId),i.domElement.removeEventListener("pointermove",Le),i.domElement.removeEventListener("pointerup",rt)),i.dispatchEvent(ap),o=r.NONE}function dt(U){let Se;switch(U.button){case 0:Se=i.mouseButtons.LEFT;break;case 1:Se=i.mouseButtons.MIDDLE;break;case 2:Se=i.mouseButtons.RIGHT;break;default:Se=-1}switch(Se){case gr.DOLLY:if(i.enableZoom===!1)return;O(U),o=r.DOLLY;break;case gr.ROTATE:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enablePan===!1)return;W(U),o=r.PAN}else{if(i.enableRotate===!1)return;X(U),o=r.ROTATE}break;case gr.PAN:if(U.ctrlKey||U.metaKey||U.shiftKey){if(i.enableRotate===!1)return;X(U),o=r.ROTATE}else{if(i.enablePan===!1)return;W(U),o=r.PAN}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Cc)}function vt(U){switch(o){case r.ROTATE:if(i.enableRotate===!1)return;ye(U);break;case r.DOLLY:if(i.enableZoom===!1)return;xe(U);break;case r.PAN:if(i.enablePan===!1)return;he(U);break}}function P(U){i.enabled===!1||i.enableZoom===!1||o!==r.NONE||(U.preventDefault(),i.dispatchEvent(Cc),Ce(U),i.dispatchEvent(ap))}function E(U){i.enabled===!1||i.enablePan===!1||He(U)}function Y(U){switch(Me(U),R.length){case 1:switch(i.touches.ONE){case _r.ROTATE:if(i.enableRotate===!1)return;Fe(),o=r.TOUCH_ROTATE;break;case _r.PAN:if(i.enablePan===!1)return;Ie(),o=r.TOUCH_PAN;break;default:o=r.NONE}break;case 2:switch(i.touches.TWO){case _r.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;Ue(),o=r.TOUCH_DOLLY_PAN;break;case _r.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;k(),o=r.TOUCH_DOLLY_ROTATE;break;default:o=r.NONE}break;default:o=r.NONE}o!==r.NONE&&i.dispatchEvent(Cc)}function ve(U){switch(Me(U),o){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;Mt(U),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;Pe(U),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;We(U),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Je(U),i.update();break;default:o=r.NONE}}function pe(U){i.enabled!==!1&&U.preventDefault()}function me(U){R.push(U)}function De(U){delete Z[U.pointerId];for(let Se=0;Se<R.length;Se++)if(R[Se].pointerId==U.pointerId){R.splice(Se,1);return}}function Me(U){let Se=Z[U.pointerId];Se===void 0&&(Se=new st,Z[U.pointerId]=Se),Se.set(U.pageX,U.pageY)}function we(U){const Se=U.pointerId===R[0].pointerId?R[1]:R[0];return Z[Se.pointerId]}i.domElement.addEventListener("contextmenu",pe),i.domElement.addEventListener("pointerdown",Be),i.domElement.addEventListener("pointercancel",rt),i.domElement.addEventListener("wheel",P,{passive:!1}),this.update()}}const wA=li(()=>(Yo(()=>{Rm(Nm).then(function(n){let e=[];const t=n[n.length-1].Time;for(let f=0;f<n.length;f++){const d=+n[f].Time/t,m=+n[f].Amplitude,v=Math.cos(m)*5,x=Math.sin(m)*5;e.push(new V(d,v,x))}const i=new xA;i.add(new EA(10,10));const r=new vn(50,1,.1,1e3);r.position.set(2,2,2),r.lookAt(0,0,0);const o=new lg;o.setSize(1920,1080,!1),(document.getElementById("demo")||document.body).appendChild(o.domElement),console.log(e);const a=new On;a.setFromPoints(e);const s=new ug({color:16776960,size:.01});i.add(new MA(a,s)),o.render(i,r);const l=new TA(r,o.domElement);l.target.set(0,0,0),l.enableDamping=!0,l.dampingFactor=.05,l.screenSpacePanning=!1,l.minDistance=1,l.maxDistance=500,l.maxPolarAngle=Math.PI/2,c();function c(){requestAnimationFrame(c),l.update(),h()}function h(){o.render(i,r)}})},[]),j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task1_3"})}),j("div",{class:"content-div",children:["In this visualization, we delve into the realm of trigonometric mapping to distinguish between noise and music. By plotting the audio time series data on a three-dimensional graph, with time on the x-axis and the sound signal processed through trigonometric functions on the y and z axes, we can visualize the complexity and structure of sound in a form that reveals patterns not immediately apparent to the ear.",j("div",{id:"demo"}),j("h1",{children:"Noise Visualization:"}),"The graph labeled 'Noise' presents a wild, almost erratic form, with spikes that jut out unpredictably in all directions. This visual chaos is emblematic of noise's nature: a jumble of frequencies and amplitudes without any regularity or rhythm. The spikes represent bursts of sound that do not correlate over time, illustrating the disordered essence of noise. There's no discernible pattern or repetition, mirroring the acoustic experience of noise—where the sound is random, and no specific frequency or rhythm dominates.",j("h1",{children:"Music Visualization:"}),"On the other side, the 'Music' graph shows a form that is also complex but less chaotic. Here, we can observe protrusions that seem to echo each other, suggesting a pattern or motif that repeats over time. These repeating structures reflect the rhythmic and melodic elements of music, where certain notes or sequences recur at regular intervals, creating the harmonious structure we associate with musical compositions. Despite the complexity, there is an underlying order evident in the repetition and symmetry of the protrusions, much like the repeating chorus or verse in a song.",j("h1",{children:"Patterns Differentiating Music from Noise:"}),"From these visualizations, one can discern:",j("ol",{children:[j("li",{children:"**Repetition in Music**: In the music graph, the echoing shapes hint at the repetitive nature of music, where certain elements are revisited throughout a piece, providing a sense of order and predictability."}),j("li",{children:"**Chaos in Noise**: The noise graph lacks such repetition, with its shapes not repeating or mirroring each other, highlighting the unpredictable nature of noise."}),j("li",{children:"**Complexity and Structure**: While both graphs exhibit complex forms, music's complexity has a structure—it's a complex order. Noise, on the other hand, displays complex disorder."}),j("li",{children:"**Dimensionality**: Music fills the space with a patterned growth, suggesting the layers and dimensions of harmonics and rhythms. Noise fills the space more uniformly, lacking layered depth."})]}),"TODO: In this interactive design, users could rotate the graphs, zoom in and out, and perhaps even watch the shapes evolve over time with a playback feature."]})]}))),AA=li(()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task2_0"})}),j("div",{class:"content-div",children:[j("p",{children:"In the symphony of emotions that music evokes, valence and arousal stand as the conductors, orchestrating the highs and lows, the ebbs and flows of our feelings. Our second research question probes the enigmatic alchemy of how music translates sound into sentiment, how a mere arrangement of notes can stir the soul, bringing forth smiles or summoning tears."}),j("p",{children:"Valence in music refers to the spectrum of emotional positivity or negativity that a piece can convey. It's the musical whisper that hints at joy or the somber melody that speaks of sorrow. Arousal, on the other hand, is the level of energy or intensity within the music; it is the silent roar of a crescendo that quickens the heartbeat or the gentle lullaby that soothes the spirit."}),j("p",{children:"This inquiry is not just an academic pursuit but a journey into the heart of human experience. It seeks to unravel the threads of melody and rhythm to understand how they weave the fabric of our emotional world. How does a major key lift our spirits while a minor key invokes introspection? What is it about the tempo that can either relax or invigorate us?"}),j("p",{children:"The interplay between valence and arousal in music is a dance of complexity and nuance. It is here, within the interlocking steps of harmony and beat, that music finds its voice to express the inexpressible. Our research aims to decode this language of emotions, to map the contours of how music touches the affective dimensions of our lives. Through this exploration, we hope to not only comprehend but also to appreciate the profound power of music to move us, to connect us, and to reflect the myriad hues of our inner worlds."})]})]})),RA=()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task2_1"})}),j("div",{class:"content-div",children:[j("p",{children:"Before you stands an insightful chart labeled 'Spectral Contrast,' which measures the difference in sound intensity across the spectrum of frequencies in intense and calm music. The x-axis, spanning the length of the chart, represents the range of frequencies captured in the music, from the lowest to the highest. The y-axis measures the spectral contrast, or how much the intensity of sound varies at different frequencies."}),j("p",{children:"The blue spikes represent intense music. Observe their towering presence, reaching high above the baseline, then plummeting to graze it, creating a jagged skyline of peaks and valleys. This visual volatility mirrors the audible experience of intense music—the thunderous roll of drums, the piercing cry of an electric guitar, the soaring heights of a vocalist's range—all contributing to a sense of heightened energy and emotional arousal. Such music is alive with dynamism, capturing the full spectrum of sound and often associated with powerful, positive emotions such as joy or excitement, as well as intense, negative emotions like anger or despair."}),j("p",{children:"Contrasting this are the orange waves, representing calm music. Their presence is subtler, with a shorter reach both skyward and earthward from the baseline, resembling gentle rolling hills rather than rugged mountains. This pattern is indicative of the steady, soothing qualities of calm music. The gentle undulations reflect a consistent and uniform sound intensity, promoting a tranquil and serene soundscape. It's the auditory equivalent of a quiet murmur or a soft whisper, often associated with relaxed or subdued emotions, whether they be positive, like peacefulness, or negative, like melancholy."}),j("p",{children:"This chart serves as a visual symphony, with each color conducting its own emotional score. As we explore the interplay between the spectral spikes of intense music and the soothing curves of calm music, we gain a deeper appreciation of how the spectral contrast in music can paint a complex picture of our emotional landscape, resonating with the depths of our feelings and the peaks of our spirits."})]})]}),CA=li(()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task2_2"})}),j("div",{class:"content-div",children:[j("p",{children:"In this pair of chromagrams, we have a vivid graphical representation of how music can be dissected to reveal its harmonic and melodic DNA, elements central to expressing valence and arousal. These chromagrams categorize pitch into classes that correspond to the twelve different notes in the Western musical scale, from the deep rumble of the lowest notes to the piercing high of the top octaves."}),j("h1",{children:"Understanding Chromagrams:"}),j("p",{children:"A chromagram is a visual tool that maps the intensity of each of these pitch classes over time. On the horizontal axis, we have time, progressing from the start to the end of a piece. The vertical axis represents the 12 different pitch classes, with the bottom representing the note C, and moving up chromatically (in the order of keys on a piano) to B at the top. The colors range from dark to light, indicating the intensity or loudness of a particular pitch at a given time; the brighter the color, the more dominant that pitch is in the mix at that moment."}),j("h1",{children:"Chromagram for Intense Sound:"}),j("p",{children:"Looking at the top chromagram labeled for 'intense sound,' you'll notice sharp contrasts in color. Bright lines cut through the darkness abruptly, signifying moments where specific pitches are strikingly prominent. These sharp contrasts and sudden changes in intensity are hallmarks of music with high arousal—music that is designed to energize and stir the listener. The intensity of the bright lines correlates with the peaks in a dynamic piece of music—think of the blare of horns in a symphony or the sudden wail of a guitar solo. Such intense music often conveys high valence, whether that's the positive surge of a triumphant anthem or the negative charge of an angst-filled ballad."}),j("h1",{children:"Chromagram for Calm Sound:"}),j("p",{children:"Contrast this with the bottom chromagram for 'calm sound.' Here, the color transitions are much smoother, with less stark contrast and more uniformity. The persistence of a particular color suggests a pitch sustained over time, creating a sense of stability and continuity. This is characteristic of low-arousal music, which is meant to soothe and relax rather than excite. The melodic and harmonic elements are more blended and fluid, without the jarring highlights seen in the intense chromagram. This kind of music typically conveys a more neutral or negative valence, inviting introspection and calm."}),j("h1",{children:"Observations from the Chromagrams:"}),j("ol",{children:[j("li",{children:"Intensity and Energy: The top chromagram's intense energy and variability in pitch intensity can make the listener's heart race, while the bottom chromagram's steadiness can slow the heartbeat and induce relaxation."}),j("li",{children:"Emotional Expression: Music with greater variability in pitch intensity (top chromagram) often aligns with emotions that are high in energy and can be either positive (joy, excitement) or negative (anger, fear). In contrast, music with less variability (bottom chromagram) tends to express calmer emotions, whether positive (contentment) or negative (sadness)."}),j("li",{children:"Harmonic and Melodic Content: The sharp edges and defined lines in the intense chromagram suggest a complex harmonic and melodic content, indicative of musical pieces with multiple layers and textures. The smoother, more homogenous calm chromagram suggests simpler harmonic content, which is common in more ambient and textural music designed to be calming."})]}),j("p",{children:"Through these visual patterns, chromagrams provide a window into the emotional heart of music, showing us how melody and harmony intertwine to move us, to excite us, or to soothe us, and allowing even those without a musical background to 'see' the music in a new light."})]})]})),PA=()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task3_0"})}),j("div",{class:"content-div",children:[j("p",{children:"The quest to visualize music and sound as they are manifested through physical instruments opens a fascinating chapter in the narrative of auditory experience. Our third research question invites us to explore the tangible world where sound waves are birthed, examining how the vibrations of strings, the rush of air through tubes, and the resonance within chambers become the music that stirs our souls."}),j("p",{children:"This exploration is not just about understanding the mechanics of instruments but also about appreciating the alchemy that occurs when physical materials are coaxed into song. It's a journey into the anatomy of instruments, where design, structure, and material converge to create the unique voice of each musical implement."}),j("p",{children:"Visualizing sound in physical instruments is akin to drawing the breath of music. It allows us to see the invisible forces at work—the frequencies resonating in a violin's body, the harmonics emanating from a piano's strings, or the rhythmic patterns captured by the membranes of drums. By rendering these vibrations visible, we can begin to comprehend how the abstractness of sound is rooted in the physical world."}),j("p",{children:"This inquiry stands at the intersection of physics, engineering, and art. It marries the precision of scientific measurement with the expressiveness of musical performance. We seek to translate the ephemeral beauty of sound into forms and patterns that can be seen, understood, and appreciated, revealing the underlying principles that govern how instruments speak to us in the language of music."}),j("p",{children:"Through this research, we are not just observers but participants in the unfolding drama of sound. We witness how the bow's pressure on violin strings translates into a visual display of dynamic tension, or how the strike of a hammer on a piano key is transformed into an oscillating dance of color and light. In doing so, we gain a deeper respect for the craftsmanship of instruments and a more profound understanding of the complex interplay between musician, instrument, and the music that resonates beyond the stage."})]})]}),LA=()=>j("div",{class:"content",children:[j("div",{class:"progress-div",children:j(Vn,{progress:"Task3_1"})}),j("div",{class:"content-div",children:[j("p",{children:"This visualization presents a detailed mapping of piano keystrokes over time, providing a window into the precise interplay between a pianist's touch and the resulting music. Here, we can trace the individual notes played on a piano, each represented by a unique symbol on a graph where the horizontal axis represents time and the vertical axis corresponds to the piano notes, with the lowest notes at the bottom and the highest at the top."}),j("p",{children:["The variety of symbols and lines capture different aspects of piano playing:",j("ol",{children:[j("li",{children:"Note Duration: Lines extending horizontally represent the sustain of each note. The longer the line, the longer the note is held."}),j("li",{children:"Note Pitch: The vertical position of each symbol indicates the pitch of the note being played. Lower positions correspond to lower pitches (the left side of the piano keyboard), and higher positions correspond to higher pitches (the right side of the piano keyboard)."}),j("li",{children:"Note Intensity: The different symbols can signify the intensity or velocity of the keystroke. For example, a larger symbol might indicate a stronger keystroke, resulting in a louder sound."}),j("li",{children:"Chords and Harmony: When multiple symbols align vertically, it indicates the simultaneous striking of multiple keys, creating chords that contribute to the harmonic structure of the piece."}),j("li",{children:"Melody and Rhythm: The sequence of notes and their timing relative to each other tells us about the melody and rhythm of the music. Regularly spaced symbols may indicate a steady rhythm, while varying distances can suggest changes in tempo or rhythm."})]})]}),j("p",{children:"From this visualization, a student or music enthusiast can gain insights into the technical execution of a piano piece. They can observe the complexity of the music, discern patterns in the pianist's playing, and understand how different notes are woven together to create a musical tapestry. For instance, one could study the use of the sustain pedal by looking at how long notes are held, or analyze the pianist's dynamics by observing the variation in the symbols' size and shape."}),j("p",{children:"Moreover, this visualization can serve as a learning tool, allowing students to compare their own playing to a target performance by visually matching their keystrokes to those displayed. It also offers composers and music theorists a way to graphically represent musical ideas and see how different elements of a piece come together over time."}),j("p",{children:"Through such a detailed visual representation of piano music, we appreciate not only the auditory beauty of the piano but also the intricacy and precision involved in the artistry of playing this magnificent instrument."})]})]});function DA(){const n=(e,t)=>j(Un,{children:[j("div",{className:"section",children:j(v_,{})}),j("div",{className:"section",children:j(S_,{to1:()=>{t.moveTo(aa.Task1_0.sectionNum)},to2:()=>{t.moveTo(aa.Task2_0.sectionNum)},to3:()=>{t.moveTo(aa.Task3_0.sectionNum)}})}),[jy,Ky,Zy,wA].map((i,r)=>j("div",{className:"section",children:j(i,{})})),[AA,RA,CA].map(i=>j("div",{className:"section",children:j(i,{})})),[PA,LA].map(i=>j("div",{className:"section",children:j(i,{})}))]});return j(rh,{licenseKey:"gplv3-license",loopHorizontal:!1,dragAndMove:!0,render:({state:e,fullpageApi:t})=>j(rh.Wrapper,{children:n(e,t)})})}Vr(j(DA,{}),document.getElementById("app"));
