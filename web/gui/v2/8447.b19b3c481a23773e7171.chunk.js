!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},n=(new Error).stack;n&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[n]="33e19a59-e1ef-463f-807e-c2b5c20d5f99",e._sentryDebugIdIdentifier="sentry-dbid-33e19a59-e1ef-463f-807e-c2b5c20d5f99")}catch(e){}}();var _global="undefined"!==typeof window?window:"undefined"!==typeof global?global:"undefined"!==typeof self?self:{};_global.SENTRY_RELEASE={id:"776f3e9c9635faf8458467b84fc48d0cc290785f"},(self.webpackChunkcloud_frontend=self.webpackChunkcloud_frontend||[]).push([[8447],{38626:function(e,n,t){var o=t(45987),f=t(67294),r=t(51154),i=t(64637),u=t(82351),c=["maxLength","text","TextComponent"];n.Z=function(e){var n=e.maxLength,t=e.text,d=e.TextComponent,a=void 0===d?r.Text:d,s=(0,o.Z)(e,c),l=(0,f.useMemo)((function(){return(0,i.a)(t,n)}),[n,t]);return l.length===t.length?f.createElement(a,s,t):f.createElement(u.Z,{content:t,align:"bottom",isBasic:!0},f.createElement(a,s,l))}},76362:function(e,n,t){t.d(n,{S1:function(){return r},ZT:function(){return o},ae:function(){return u},jU:function(){return i},on:function(){return f}});var o=function(){};function f(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.addEventListener&&e.addEventListener.apply(e,n)}function r(e){for(var n=[],t=1;t<arguments.length;t++)n[t-1]=arguments[t];e&&e.removeEventListener&&e.removeEventListener.apply(e,n)}var i="undefined"!==typeof window,u="undefined"!==typeof navigator},11042:function(e,n,t){var o=t(67294),f=t(76362).jU?o.useLayoutEffect:o.useEffect;n.Z=f},88553:function(e,n,t){var o=t(67294),f=t(11042),r=t(76362),i={x:0,y:0,width:0,height:0,top:0,left:0,bottom:0,right:0};n.Z=r.jU&&"undefined"!==typeof window.ResizeObserver?function(){var e=(0,o.useState)(null),n=e[0],t=e[1],r=(0,o.useState)(i),u=r[0],c=r[1],d=(0,o.useMemo)((function(){return new window.ResizeObserver((function(e){if(e[0]){var n=e[0].contentRect,t=n.x,o=n.y,f=n.width,r=n.height,i=n.top,u=n.left,d=n.bottom,a=n.right;c({x:t,y:o,width:f,height:r,top:i,left:u,bottom:d,right:a})}}))}),[]);return(0,f.Z)((function(){if(n)return d.observe(n),function(){d.disconnect()}}),[n]),[t,u]}:function(){return[r.ZT,i]}},94829:function(e,n,t){var o=t(67294),f=t(76362);n.Z=function(e,n){var t=(0,o.useState)(function(e,n){return void 0!==n?n:!!f.jU&&window.matchMedia(e).matches}(e,n)),r=t[0],i=t[1];return(0,o.useEffect)((function(){var n=!0,t=window.matchMedia(e),o=function(){n&&i(!!t.matches)};return t.addListener(o),i(t.matches),function(){n=!1,t.removeListener(o)}}),[e]),r}}}]);