import{_ as s,o as a,c as n,V as l}from"./chunks/framework.4490fb98.js";const e="/breadcrumb-mainmenu.png",b=JSON.parse('{"title":"面包屑导航","description":"","frontmatter":{},"headers":[],"relativePath":"guide/breadcrumb.md","filePath":"guide/breadcrumb.md"}'),p={name:"guide/breadcrumb.md"},o=l(`<h1 id="面包屑导航" tabindex="-1">面包屑导航 <a class="header-anchor" href="#面包屑导航" aria-label="Permalink to &quot;面包屑导航&quot;">​</a></h1><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><p>在应用配置里设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  breadcrumb: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    enable: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  breadcrumb: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    enable: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>当使用文件系统路由时，将无法使用面包屑导航，详细可阅读《<a href="./file-system-route.html">基于文件系统的路由</a>》。</p><h2 id="显示主导航" tabindex="-1">显示主导航 <a class="header-anchor" href="#显示主导航" aria-label="Permalink to &quot;显示主导航&quot;">​</a></h2><p>在应用配置里设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  breadcrumb: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    enableMainMenu: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  breadcrumb: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    enableMainMenu: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p><img src="`+e+'" alt="" data-zoomable=""></p>',9),t=[o];function c(r,i,h,E,d,y){return a(),n("div",null,t)}const u=s(p,[["render",c]]);export{b as __pageData,u as default};
