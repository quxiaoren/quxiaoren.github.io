import{_ as s,o as n,c as a,V as p}from"./chunks/framework.4490fb98.js";const h=JSON.parse('{"title":"开始","description":"","frontmatter":{},"headers":[],"relativePath":"guide/start.md","filePath":"guide/start.md"}'),e={name:"guide/start.md"},o=p(`<h1 id="开始" tabindex="-1">开始 <a class="header-anchor" href="#开始" aria-label="Permalink to &quot;开始&quot;">​</a></h1><p>做好准备工作后，请在项目根目录下依次执行以下命令：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6A737D;"># 注意，必须使用 pnpm 安装依赖，请勿使用 npm 或 yarn 安装依赖</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行</span></span>
<span class="line"><span style="color:#B392F0;">pnpm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">run</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">dev</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 安装依赖</span></span>
<span class="line"><span style="color:#6A737D;"># 注意，必须使用 pnpm 安装依赖，请勿使用 npm 或 yarn 安装依赖</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 运行</span></span>
<span class="line"><span style="color:#6F42C1;">pnpm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">run</span><span style="color:#24292E;"> </span><span style="color:#032F62;">dev</span></span></code></pre></div><p>运行成功后，会自动访问页面，默认地址为 <code>http://localhost:9000</code></p><div class="warning custom-block"><p class="custom-block-title">报错</p><p>安装依赖时提示 404 ，或者安装结束后，运行时提示「 &#39;vite&#39; 不是内部或外部命令，也不是可运行的程序或批处理文件 」，都些都是依赖未安装成功导致的。可以尝试执行 <code>pnpm config set registry https://registry.npmmirror.com/</code> 切换为国内 npmmirror 源（也可以使用 <a href="https://github.com/Pana/nrm" target="_blank" rel="noreferrer">nrm</a> 一键切换源），然后删除根目录下 <code>/node_modules</code> 文件夹并重新安装依赖。</p><p>如果依旧无法运行（基本不太可能），可尝试删除根目录下 <code>/node_modules</code> 文件夹与 <code>pnpm-lock.yaml</code> 文件后，再删除 <code>package.json</code> 中 <code>&quot;preinstall&quot;: &quot;npx only-allow pnpm&quot;</code> 这句脚本，最后使用 <code>npm / yarn</code> 进行安装依赖。但需要清楚一点，这样操作后，将无法与官方环境锁定的依赖包版本保持一致，可能会出现无法预知的问题，非必要情况下，请勿使用该方案。</p></div>`,5),l=[o];function t(c,r,i,d,m,y){return n(),a("div",null,l)}const u=s(e,[["render",t]]);export{h as __pageData,u as default};
