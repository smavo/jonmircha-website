if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let a=Promise.resolve();return s[e]||(a=new Promise(async a=>{if("document"in self){const s=document.createElement("script");s.src=e,document.head.appendChild(s),s.onload=a}else importScripts(e),a()})),a.then(()=>{if(!s[e])throw new Error(`Module ${e} didn’t register its module`);return s[e]})},a=(a,s)=>{Promise.all(a.map(e)).then(e=>s(1===e.length?e[0]:e))},s={require:Promise.resolve(a)};self.define=(a,i,r)=>{s[a]||(s[a]=Promise.resolve().then(()=>{let s={};const c={uri:location.origin+a.slice(1)};return Promise.all(i.map(a=>{switch(a){case"exports":return s;case"module":return c;default:return e(a)}})).then(e=>{const a=r(...e);return s.default||(s.default=a),s})}))}}define("./sw.js",["./workbox-6f0d2936"],(function(e){"use strict";importScripts(),e.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/",revision:"H-zVho86Z-zWS_Bzmn0sa"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/_buildManifest.js",revision:"00a7feb7838eda9aa8ee78ab2a2686bc"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/_ssgManifest.js",revision:"abee47769bf307639ace4945f9cfd4ff"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/_app.js",revision:"1bc17941db09e296334b2866e3347a5f"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/_error.js",revision:"195dbaf20ce83cbfd9f1c76543dbef66"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/ahora.js",revision:"4753fd1da35d3626fb4776b2edf1d3f9"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/blog.js",revision:"3be11c927f8d674034a723605968d03e"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/bryan.js",revision:"5e63edd47325da9cb340d9b68bdd16f5"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/cursos.js",revision:"d0880d6695ece4f51cb36ce72b7965ac"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/index.js",revision:"8831cb77a3d445cb58ddd1ddc1bfeab6"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/maratones.js",revision:"e29b07b377d6a7a1c9adfc7e0ec2e2ed"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/mecenas.js",revision:"bf9640ba79e4ae83d5e8b394f44b87c1"},{url:"/_next/static/H-zVho86Z-zWS_Bzmn0sa/pages/post.js",revision:"a0d45b40fa126d0e28796ebfdfb06aee"},{url:"/_next/static/chunks/31983586f852229d186beb6aa986970a6c88de88.a8634a6a9ffec7c73569.js",revision:"e4f03ab62c7dd35eb0f8aef3ca484619"},{url:"/_next/static/chunks/commons.3c217cbb8a5193935007.js",revision:"9185e9e9046fe88536b5edefb97f1cfc"},{url:"/_next/static/chunks/framework.98c1b221acb34aa9927b.js",revision:"0b711c3e02b0095b778e8d3a6cd216d2"},{url:"/_next/static/css/66913a9e0d2f16a3aa00.css",revision:"b566f354835c9676d519a077eebd86aa"},{url:"/_next/static/runtime/main-91ffe0b6d21eeb18892d.js",revision:"ccc371cfb159fdc85684240b88b6337c"},{url:"/_next/static/runtime/polyfills-b99df05233331b7e84b8.js",revision:"1b5ec1b9807ae2baa33f8ee10bdd7f98"},{url:"/_next/static/runtime/webpack-b65cab0b00afd201cbda.js",revision:"f5e6e2fca3144cc944812cfa3547f475"},{url:"/googleca01858c9fcfa813.html",revision:"b9efde94fcd74db869a6ff728456bae2"},{url:"/humans.txt",revision:"51268e7c521937db8d4463f8e706891c"},{url:"/img/404.png",revision:"d455f8bb8635983ebc6aade82be60f1a"},{url:"/img/blog/ajax.png",revision:"b57005ae73852eccb6914ca5abe04b88"},{url:"/img/blog/align-items.png",revision:"834864c07f7c69f794895ab845d531ba"},{url:"/img/blog/align-self.png",revision:"11c1432aad2ae417028c5c61ac957469"},{url:"/img/blog/dom.png",revision:"ddd7ee1fe05684d283660a262edf0eec"},{url:"/img/blog/event-loop.png",revision:"1af653f9f9057a0c9410c92f0db0acbd"},{url:"/img/blog/flex-conceptos.png",revision:"ef3035ca57983b1b8204f0e72cd88afe"},{url:"/img/blog/flex-direction.png",revision:"09095038f579700cb396f6573cf93508"},{url:"/img/blog/flex-wrap.png",revision:"2314932289bfc185e1c7766ad86a737c"},{url:"/img/blog/java-vs-javascript.jpg",revision:"0b0c518f01b58beb0103a8b2a5f6e28e"},{url:"/img/blog/json.png",revision:"aa8cd27eb2a315f64ca31bac15a15e78"},{url:"/img/blog/jsvsjava.jpg",revision:"809bb10bfbaf1b8fdb4f79c4c6c16527"},{url:"/img/blog/justify-content.png",revision:"53b7dd118475d034d6eac44ec0e19d80"},{url:"/img/blog/react.png",revision:"20d9a6a5a0dbd1d3e789829044c6760b"},{url:"/img/blog/this-is-javascript.jpg",revision:"a7e272b64527676e60b5d326ef373abc"},{url:"/img/blog/vscode.png",revision:"3c3dbd1a977d2ccb0cd878bb50d93541"},{url:"/img/blog/xampp.png",revision:"2faf7e0bd304a7a64f6bf6ca7fdb9a67"},{url:"/img/category/css.svg",revision:"b79f7171986f495dea004ca7ed56ce87"},{url:"/img/category/estoicismo.svg",revision:"ff61bd47f002c155614b3074350b17e4"},{url:"/img/category/filosofia.svg",revision:"e9cb7a7c5a56eaa4f8235a3a32f975aa"},{url:"/img/category/firebase.svg",revision:"0491daee595db199340d2fcc35598d91"},{url:"/img/category/fitness.svg",revision:"42543789f7739d0bac0716cbaa422da8"},{url:"/img/category/gatsby.svg",revision:"5ed7aab8607e70f2516f5a87a435b52a"},{url:"/img/category/git.svg",revision:"43e6a1851c3a0475f4c8cd7c37310bff"},{url:"/img/category/github.svg",revision:"4072e7ced987377360f7cf07a8fc993e"},{url:"/img/category/graphql.svg",revision:"b5b5a593f04dfa3aeabb5e9c38ef76ca"},{url:"/img/category/html5.svg",revision:"00249c0eecd04ef9bcba6353390b5c21"},{url:"/img/category/javascript.svg",revision:"b34cd39db5920912d1c0e73e73c17024"},{url:"/img/category/markdown.svg",revision:"4b9e478bbcb2706ca1bd073b068cb904"},{url:"/img/category/minimalismo.svg",revision:"ec76fdf822d482eab8e1fa71fd91b82e"},{url:"/img/category/next.svg",revision:"92fb46e7aa9ff0d64fad04ab5bfd2e18"},{url:"/img/category/node.svg",revision:"ad46811a8134a93d402096ea661570d7"},{url:"/img/category/php.svg",revision:"c393f8d8621212b41715456864d50145"},{url:"/img/category/react.svg",revision:"51ff6cfedbf14f63b8340b5e58bbce9a"},{url:"/img/category/redux.svg",revision:"c66b2a962169221e1ec81bd8b391e394"},{url:"/img/category/svelte.svg",revision:"511f15726050f593a1454064ef319c0d"},{url:"/img/category/terminal.svg",revision:"947412abc706a9a0cdd07d4109cb2f47"},{url:"/img/category/vscode.svg",revision:"aedf210158641d97acef29d53d2857ec"},{url:"/img/category/vue.svg",revision:"87ef7748410c080fb235383b50eff100"},{url:"/img/category/webpack.svg",revision:"0c4452cb83a6013b51b5d405fe74fe55"},{url:"/img/category/wordpress.svg",revision:"90af18679561ba1a9eaae013166da134"},{url:"/img/favicon.png",revision:"53aaa7047b3cb5f1b266389e43a51cad"},{url:"/img/jonmircha.jpg",revision:"db02ee53aba08d8a7ebd5198656b6734"},{url:"/img/kEnAi.svg",revision:"bf3ed34bc1c477ede4115bbf00782e05"},{url:"/img/posters/404.png",revision:"916ce76b6e4d208f3ec90a87feb0a814"},{url:"/img/posters/Bryan.jpg",revision:"b5b6328d193146970ff59097be7aa456"},{url:"/img/posters/ahora.jpg",revision:"cb3d9ed2987d660e50bc91e5d0f8b921"},{url:"/img/posters/apoyo.jpg",revision:"7e49dc2b7b959ade407f29d7137f299a"},{url:"/img/posters/blog.jpg",revision:"202c2e230c6ba8c239e47cd9834b0b1c"},{url:"/img/posters/cursos.jpg",revision:"dde4be7f0b260edfdd0caa2c39ebfe8f"},{url:"/img/posters/docente-digital.jpg",revision:"9110496334393928cbb1eab12a01f0ef"},{url:"/img/posters/jonmircha.jpg",revision:"895526096bd28ba30298bcd84e549292"},{url:"/img/posters/maratones.jpg",revision:"4afbaffa6ca7862347b890007fa5b8d7"},{url:"/img/posters/mecenas.jpg",revision:"fac95ddcd8d2e77ea3ac372a5c16ae2f"},{url:"/img/posters/servicios.jpg",revision:"ad65e8aa61e3cbba7dda0ac262a86545"},{url:"/img/posters/youtube-poster-channel-small.png",revision:"bf35d2615cdc0db94f939a8bfb359754"},{url:"/img/posters/youtube-poster-channel.png",revision:"30f716550e393d69af00a6e66410a3b5"},{url:"/img/posters/youtube-sponsors.jpg",revision:"f2daa60a6bd7002f19d5d6e904e087e5"},{url:"/img/posters/youtube.png",revision:"4aaa8c7bce9898ebe691caa13e75d9ae"},{url:"/img/projects/aeromexico.svg",revision:"e0fe15b43f1b54d5fb657e7d1026f23a"},{url:"/img/projects/condenast.svg",revision:"250f58a21b79576eaf24e897a7dc3c0f"},{url:"/img/projects/costco.svg",revision:"2f98554b1ca50980368d8b37cab32bab"},{url:"/img/projects/herman-miller.svg",revision:"712e5e46255ef4565f83c50eb8582dd3"},{url:"/img/projects/lucylara.svg",revision:"c6460803135e8f6b1d8ef2e69155bcdd"},{url:"/img/projects/malvestida.svg",revision:"10af1f4f33161429ab6f3fc1f6d8b808"},{url:"/img/projects/siemens.svg",revision:"6299ef1d445a5126a9587404930660da"},{url:"/img/projects/voit.svg",revision:"101c0129f7c5382685c0550ef7dd3982"},{url:"/img/sponsors/mecenas-architect.png",revision:"e08af9bc49eab9e125753a9e309d8038"},{url:"/img/sponsors/mecenas-junior.png",revision:"e4f76d32247abb513eaf9b2e9e1572ed"},{url:"/img/sponsors/mecenas-senior.png",revision:"217ff464e43f35684c6cb142c197378d"},{url:"/img/sponsors/patreon.svg",revision:"7eb4f6e2fffabdc18dc2185e79cf4607"},{url:"/img/sponsors/paypal.svg",revision:"6f4ec79ae0150d61355afd3ba9b004be"},{url:"/img/sponsors/youtube.svg",revision:"37add24d4513cdbbfa0d3a0744cc4e14"},{url:"/img/wireframe.jpg",revision:"3a03d3e54a96f6a8dd749a4ce6410bdc"},{url:"/jonmircha-cv.pdf",revision:"cdbcc8779f74f8af5d749f6c89fc902c"},{url:"/manifest.json",revision:"688128be216cc2f753fe641590f2fcd3"},{url:"/robots.txt",revision:"cb333937db4fdf75f29294867cd772cf"},{url:"/sitemap.xml",revision:"fc2af27bd6a8280cef7198aad2bba5ff"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute(/^https:\/\/fonts\.(?:googleapis|gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/^https:\/\/use\.fontawesome\.com\/releases\/.*/i,new e.CacheFirst({cacheName:"font-awesome",plugins:[new e.ExpirationPlugin({maxEntries:1,maxAgeSeconds:31536e3,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.StaleWhileRevalidate({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET"),e.registerRoute(/.*/i,new e.StaleWhileRevalidate({cacheName:"others",plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400,purgeOnQuotaError:!0})]}),"GET")}));