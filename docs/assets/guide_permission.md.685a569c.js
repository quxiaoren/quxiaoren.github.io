import{_ as s,o as n,c as a,V as l}from"./chunks/framework.4490fb98.js";const u=JSON.parse('{"title":"权限","description":"","frontmatter":{},"headers":[],"relativePath":"guide/permission.md","filePath":"guide/permission.md"}'),p={name:"guide/permission.md"},o=l(`<h1 id="权限" tabindex="-1">权限 <a class="header-anchor" href="#权限" aria-label="Permalink to &quot;权限&quot;">​</a></h1><p>在应用配置中设置：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">globalSettings</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Settings</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">all</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  app: {</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">    enablePermission: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">globalSettings</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Settings</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">all</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line highlighted"><span style="color:#24292E;">  app: {</span></span>
<span class="line highlighted"><span style="color:#24292E;">    enablePermission: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line highlighted"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>然后在 <code>/src/api/modules/user.ts</code> 文件里找到 <code>getPermissions</code> 的方法，该方法用于登录成功后获取用户权限。在实际开发中，需要手动进行修改，框架默认通过 mock 模拟获取用户权限。</p><p>在演示源码中，默认提供了两组权限，你可以在“权限验证”导航里切换帐号查看不同权限下的效果。如果使用的不是 <code>admin</code> 或 <code>test</code> 用户名登录，则在导航栏里看不到“权限验证”导航入口。</p><h2 id="路由权限" tabindex="-1">路由权限 <a class="header-anchor" href="#路由权限" aria-label="Permalink to &quot;路由权限&quot;">​</a></h2><p>在路由的 <code>meta</code> 配置项中，其中有一个 <code>auth</code> 参数，这个就是用来配置路由的权限，一个路由可以配置多个权限，当配置多个权限时，只要满足其中任何一个，则视为用户有访问该路由的权限，如下：</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">meta</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&#39;news.browse&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;news.edit&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">},</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">meta</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">: [</span><span style="color:#032F62;">&#39;news.browse&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;news.edit&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">},</span></span></code></pre></div><p>框架内部鉴权的逻辑是字符串比对，所以建议对权限有个统一的格式，例如为 <code>xxx.yyy</code> ，其中 <code>xxx</code> 表示模块名， <code>yyy</code> 表示操作类型。那么上面那个例子就表示：</p><ul><li><code>news.browse</code> 新闻模块的浏览权限</li><li><code>news.edit</code> 新闻模块的编辑权限</li></ul><p>路由权限是比较暴力的，即没有权限则该路由页面无法访问，并且也不会在导航栏中显示。但在实际业务中，遇到更多的情况通常是，可以访问路由页面，但会根据不同权限，使用页面里的不同功能，这时候就需要用到下面三种鉴权方式。</p><h2 id="鉴权组件" tabindex="-1">鉴权组件 <a class="header-anchor" href="#鉴权组件" aria-label="Permalink to &quot;鉴权组件&quot;">​</a></h2><p>页面中某个模块，当前用户具备该权限是如何显示，不具备该权限又是如何显示，针对这样的需求，框架提供了 <code>&lt;Auth&gt;</code> 和 <code>&lt;AuthAll&gt;</code> 组件，具体使用如下：</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 单权限验证 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Auth</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;department.create&#39;&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;你有该权限&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">no-auth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;你没有该权限&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Auth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">Auth</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;department.edit&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;你有该权限&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">no-auth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;你没有该权限&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">Auth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#79B8FF;">AuthAll</span><span style="color:#E1E4E8;"> :</span><span style="color:#B392F0;">value</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;department.edit&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;你有该权限&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">no-auth</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;你没有该权限&lt;/</span><span style="color:#85E89D;">p</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#79B8FF;">AuthAll</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 单权限验证 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Auth</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;department.create&#39;&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;你有该权限&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">no-auth</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;你没有该权限&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">Auth</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">Auth</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;department.edit&#39;</span><span style="color:#24292E;">]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;你有该权限&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">no-auth</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;你没有该权限&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">Auth</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#005CC5;">AuthAll</span><span style="color:#24292E;"> :</span><span style="color:#6F42C1;">value</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;department.edit&#39;</span><span style="color:#24292E;">]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;你有该权限&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">no-auth</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;你没有该权限&lt;/</span><span style="color:#22863A;">p</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#005CC5;">AuthAll</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="鉴权指令" tabindex="-1">鉴权指令 <a class="header-anchor" href="#鉴权指令" aria-label="Permalink to &quot;鉴权指令&quot;">​</a></h2><p>对于单个元素，也提供了 <code>v-auth</code> 和 <code>v-auth-all</code> 鉴权指令，使用上对比鉴权组件更方便，当然它能做的事情也更简单。</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 单权限验证 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&#39;department.create&#39;&quot;</span><span style="color:#E1E4E8;">&gt;新增部门&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;department.edit&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;新增部门&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">v-auth-all</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">[</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;department.edit&#39;</span><span style="color:#E1E4E8;">]</span><span style="color:#9ECBFF;">&quot;</span><span style="color:#E1E4E8;">&gt;新增部门&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 单权限验证 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&#39;department.create&#39;&quot;</span><span style="color:#24292E;">&gt;新增部门&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户只要具备其中任何一个权限，则验证通过 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;department.edit&#39;</span><span style="color:#24292E;">]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;新增部门&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 多权限验证，用户必须具备全部权限，才验证通过 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">v-auth-all</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">[</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;department.edit&#39;</span><span style="color:#24292E;">]</span><span style="color:#032F62;">&quot;</span><span style="color:#24292E;">&gt;新增部门&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="鉴权函数" tabindex="-1">鉴权函数 <a class="header-anchor" href="#鉴权函数" aria-label="Permalink to &quot;鉴权函数&quot;">​</a></h2><p>鉴权组件和鉴权指令控制的是页面上的元素，而鉴权函数则更多是使用在业务流程代码里的权限判断。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> useAuth </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/utils/composables/useAuth&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">auth</span><span style="color:#E1E4E8;">, </span><span style="color:#79B8FF;">authAll</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useAuth</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 单权限验证，返回 true 或 false</span></span>
<span class="line"><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false</span></span>
<span class="line"><span style="color:#B392F0;">auth</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;department.edit&#39;</span><span style="color:#E1E4E8;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false</span></span>
<span class="line"><span style="color:#B392F0;">authAll</span><span style="color:#E1E4E8;">([</span><span style="color:#9ECBFF;">&#39;department.create&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;department.edit&#39;</span><span style="color:#E1E4E8;">])</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> useAuth </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/utils/composables/useAuth&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">auth</span><span style="color:#24292E;">, </span><span style="color:#005CC5;">authAll</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useAuth</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 单权限验证，返回 true 或 false</span></span>
<span class="line"><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多权限验证，用户只要具备其中任何一个权限，则验证通过，返回 true 或 false</span></span>
<span class="line"><span style="color:#6F42C1;">auth</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;department.edit&#39;</span><span style="color:#24292E;">])</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 多权限验证，用户必须具备全部权限，才验证通过，返回 true 或 false</span></span>
<span class="line"><span style="color:#6F42C1;">authAll</span><span style="color:#24292E;">([</span><span style="color:#032F62;">&#39;department.create&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;department.edit&#39;</span><span style="color:#24292E;">])</span></span></code></pre></div><h2 id="小技巧" tabindex="-1">小技巧 <a class="header-anchor" href="#小技巧" aria-label="Permalink to &quot;小技巧&quot;">​</a></h2><p>由于权限配置不涉及角色，所以在实现上会更灵活，开发者可自行扩展出角色模块，根据不同角色动态设置该角色所拥有的权限，然后用户与角色挂钩，这样就无需繁琐的给每个用户重复配置权限。</p><p>当然了，业务有大有小，针对一些小型的管理系统，对权限这块没有这么多复杂的要求，甚至什么角色拥有什么权限都是写死固定的，不需要自由配置。针对这种情况，框架也可以很方便的实现。</p><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">type</span><span style="color:#E1E4E8;"> { RouteRecordRaw } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Layout </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/layouts/index.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#F97583;">:</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">RouteRecordRaw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  path: </span><span style="color:#9ECBFF;">&#39;/banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  component: Layout,</span></span>
<span class="line"><span style="color:#E1E4E8;">  redirect: </span><span style="color:#9ECBFF;">&#39;/banner/list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  name: </span><span style="color:#9ECBFF;">&#39;banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;Banner 管理&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    icon: </span><span style="color:#9ECBFF;">&#39;banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    auth: [</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;editor&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;detail&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;bannerCreate&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/banner/detail.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;新增 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth: [</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;editor&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;list&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;bannerList&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/banner/list.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;Banner 列表&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth: [</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;detail/:id&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;bannerEdit&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;@/views/banner/detail.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meta: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        title: </span><span style="color:#9ECBFF;">&#39;编辑 Banner&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        auth: [</span><span style="color:#9ECBFF;">&#39;admin&#39;</span><span style="color:#E1E4E8;">],</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> routes</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">type</span><span style="color:#24292E;"> { RouteRecordRaw } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Layout </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/layouts/index.vue&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">RouteRecordRaw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  path: </span><span style="color:#032F62;">&#39;/banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  component: Layout,</span></span>
<span class="line"><span style="color:#24292E;">  redirect: </span><span style="color:#032F62;">&#39;/banner/list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  name: </span><span style="color:#032F62;">&#39;banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  meta: {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;Banner 管理&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    icon: </span><span style="color:#032F62;">&#39;banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    auth: [</span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;editor&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  children: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;detail&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;bannerCreate&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/banner/detail.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;新增 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        auth: [</span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;editor&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;list&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;bannerList&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/banner/list.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;Banner 列表&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        auth: [</span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;detail/:id&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;bannerEdit&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;@/views/banner/detail.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meta: {</span></span>
<span class="line"><span style="color:#24292E;">        title: </span><span style="color:#032F62;">&#39;编辑 Banner&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        auth: [</span><span style="color:#032F62;">&#39;admin&#39;</span><span style="color:#24292E;">],</span></span>
<span class="line"><span style="color:#24292E;">        sidebar: </span><span style="color:#005CC5;">false</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> routes</span></span></code></pre></div><p>如上所示，假设有 2 种角色，一个是管理员 <code>admin</code> ，一个是编辑员 <code>editor</code> ，如果用户是 <code>admin</code> 权限，则可以操作 Banner 管理下的所有功能，如果是 <code>editor</code> 权限，则只能进行新增 Banner 操作。</p>`,25),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(p,[["render",t]]);export{u as __pageData,h as default};
