import{_ as s,o as n,c as a,V as l}from"./chunks/framework.4490fb98.js";const d=JSON.parse('{"title":"介绍","description":"","frontmatter":{},"headers":[],"relativePath":"guide/components.md","filePath":"guide/components.md"}'),p={name:"guide/components.md"},o=l(`<h1 id="介绍" tabindex="-1">介绍 <a class="header-anchor" href="#介绍" aria-label="Permalink to &quot;介绍&quot;">​</a></h1><p>框架提供一系列的组件方便快速开发，其中<strong>基础组件</strong>为 <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus</a> 原生提供的组件；而<strong>扩展组件</strong>有一部分是在 Element Plus 组件上进行了二次开发，还有一部分是封装了第三方插件。</p><p>组件源码完全开放，如果觉得用着不顺手，可以到 <code>/src/components/</code> 目录下找到对应组件进行修改。</p><h2 id="基础组件" tabindex="-1">基础组件 <a class="header-anchor" href="#基础组件" aria-label="Permalink to &quot;基础组件&quot;">​</a></h2><p>基础组件由 Element Plus 提供，其中包含<strong>按钮</strong>、<strong>文字链接</strong>、<strong>单选框</strong>、<strong>多选框</strong>、<strong>输入框</strong>、<strong>计数器</strong>、<strong>级联选择器</strong>、<strong>开关</strong>、<strong>滑块</strong>等 <strong>50+</strong> 个组件。</p><p>阅读并学习请查看 <a href="https://element-plus.org/#/zh-CN" target="_blank" rel="noreferrer">Element Plus 官方文档</a>。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>框架严格按照 Element Plus 推荐的使用方式进行引入，即按需自动导入，意味着你可以直接在代码里使用组件，而无需手动注册。</p><p>但也意味着 Element Plus 一些全局方法将无法使用，例如 Message 消息提示组件。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 无法使用</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> { </span><span style="color:#79B8FF;">proxy</span><span style="color:#E1E4E8;"> } </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">getCurrentInstance</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">proxy.$message.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可以使用</span></span>
<span class="line"><span style="color:#E1E4E8;">ElMessage.</span><span style="color:#B392F0;">success</span><span style="color:#E1E4E8;">(options)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 无法使用</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> { </span><span style="color:#005CC5;">proxy</span><span style="color:#24292E;"> } </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">getCurrentInstance</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">proxy.$message.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(options)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 可以使用</span></span>
<span class="line"><span style="color:#24292E;">ElMessage.</span><span style="color:#6F42C1;">success</span><span style="color:#24292E;">(options)</span></span></code></pre></div><p>另外因为框架没有采用 Element Plus 官方的图标使用方式，这也意味着部分组件的 icon 属性将无法使用，例如 Button 按钮组件。</p><div class="language-template vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">template</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 无法使用 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;el-icon-edit&quot;</span><span style="color:#E1E4E8;">&gt;编辑&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 可以使用插槽代替 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;"> #</span><span style="color:#B392F0;">icon</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">svg-icon</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;ep:edit&quot;</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  编辑</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">el-button</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">&lt;!-- 无法使用 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;el-icon-edit&quot;</span><span style="color:#24292E;">&gt;编辑&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">&lt;!-- 可以使用插槽代替 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;"> #</span><span style="color:#6F42C1;">icon</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">svg-icon</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;ep:edit&quot;</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  编辑</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">el-button</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></div><h2 id="扩展组件" tabindex="-1">扩展组件 <a class="header-anchor" href="#扩展组件" aria-label="Permalink to &quot;扩展组件&quot;">​</a></h2>`,8),t=[o];function e(c,r,E,y,i,g){return n(),a("div",null,t)}const h=s(p,[["render",e]]);export{d as __pageData,h as default};
