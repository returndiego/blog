if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return a[e]||(s=new Promise(async s=>{if("document"in self){const a=document.createElement("script");a.src=e,document.head.appendChild(a),a.onload=s}else importScripts(e),s()})),s.then(()=>{if(!a[e])throw new Error(`Module ${e} didn’t register its module`);return a[e]})},s=(s,a)=>{Promise.all(s.map(e)).then(e=>a(1===e.length?e[0]:e))},a={require:Promise.resolve(s)};self.define=(s,n,c)=>{a[s]||(a[s]=Promise.resolve().then(()=>{let a={};const i={uri:location.origin+s.slice(1)};return Promise.all(n.map(s=>{switch(s){case"exports":return a;case"module":return i;default:return e(s)}})).then(e=>{const s=c(...e);return a.default||(a.default=s),a})}))}}define("./sw.js",["./workbox-c2b5e142"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/commons.63b6771ab105a1272291.js",revision:"cca48cf0ab287995bc148b238852c94f"},{url:"/_next/static/chunks/framework.1daf1ec1ecf144ee9147.js",revision:"464131074277806cc6187e6c0f264c8e"},{url:"/_next/static/chunks/main-90ca850fb772b541e1f8.js",revision:"dfa0e7b4ada84c4cbc75634c210c359b"},{url:"/_next/static/chunks/pages/_app-d5938fd2b849f0efa005.js",revision:"e0f2eb7b83d2fe531aaf0f7fc4dd48bf"},{url:"/_next/static/chunks/pages/_error-0c6ad16432c988a24298.js",revision:"eb2983cab2a075dd557ed7cdb6e395ff"},{url:"/_next/static/chunks/pages/index-3486129da6d19e74a3e2.js",revision:"e49741b1c2cab0ab4119f16d5905300d"},{url:"/_next/static/chunks/pages/posts/%5Bslug%5D-50056012c7f5703b2ca5.js",revision:"813b7f8aced1cecb3854924f734161ea"},{url:"/_next/static/chunks/polyfills-57d8738e7416f8423303.js",revision:"1d2a7e5b305faf70e0cf5eee636faef9"},{url:"/_next/static/chunks/webpack-e067438c4cf4ef2ef178.js",revision:"8c19f623e8389f11131a054a7e17ff95"},{url:"/_next/static/css/d7c6822d2456093a7be1.css",revision:"39a307f8c1589dc50f707ab1e9197059"},{url:"/_next/static/s64x-Q58jsciWqON37OJT/_buildManifest.js",revision:"b4ba0b7123d8ee12bbef0647ec2dfff5"},{url:"/_next/static/s64x-Q58jsciWqON37OJT/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/favicon.ico",revision:"23f5a9bcd217fa3e383a1817ecdea51a"},{url:"/icons/android-chrome-192x192.png",revision:"272042373337b37dc4f47246001fef44"},{url:"/icons/android-chrome-512x512.png",revision:"c2e394bbbaad7a6fc98da3f6d6ae0e74"},{url:"/icons/apple-touch-icon.png",revision:"e1c99997a8c29abb80c0151035a33b41"},{url:"/icons/favicon-16x16.png",revision:"77941eec5b6aaa1b0fd9297de81db114"},{url:"/icons/favicon-32x32.png",revision:"27ed33b4d47176c588fe1d13a1c41142"},{url:"/icons/maskable_icon.png",revision:"f3c90fa3f412a527dbf7f2e12610c007"},{url:"/manifest.json",revision:"1d1a05813fc685e2d466ddd843f6932a"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https?.*/,new e.NetworkFirst({cacheName:"start-url",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\/api\/.*$/i,new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));
