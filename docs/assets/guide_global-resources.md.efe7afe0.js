import{_ as s,o as a,c as n,V as p}from"./chunks/framework.4490fb98.js";const C=JSON.parse('{"title":"全局资源","description":"","frontmatter":{},"headers":[],"relativePath":"guide/global-resources.md","filePath":"guide/global-resources.md"}'),l={name:"guide/global-resources.md"},o=p(`<h1 id="全局资源" tabindex="-1">全局资源 <a class="header-anchor" href="#全局资源" aria-label="Permalink to &quot;全局资源&quot;">​</a></h1><h2 id="图片" tabindex="-1">图片 <a class="header-anchor" href="#图片" aria-label="Permalink to &quot;图片&quot;">​</a></h2><p>框架用到的图片资源都放在 <code>/src/assets/images/</code> 目录下，可自行新建文件夹分类管理。</p><h2 id="精灵图" tabindex="-1">精灵图 <a class="header-anchor" href="#精灵图" aria-label="Permalink to &quot;精灵图&quot;">​</a></h2><p>精灵图又称雪碧图，原理是将多张小图合并到一张大图上，以便减少 HTTP 请求，提高网站访问速度。</p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>在 HTTP/1.1 下，因<strong>队头阻塞</strong>的问题，如果在一个页面里需要展示多张小图，建议使用精灵图</p><p>但 HTTP/2 的<strong>多路复用</strong>特性，已经不太需要精灵图合并了，我们更建议使用 SVG 图标代替精灵图</p></div><p>精灵图原始图片的存放位置位于 <code>/src/assets/sprites/</code> 目录下，注意按文件夹区分。</p><p>项目运行前会根据文件夹生成对应的精灵图文件（精灵图图片和 <code>.scss</code> 资源文件），多个文件夹则会生成多个精灵图文件。需要注意的是，在项目运行时，修改文件夹里的图片，会重新生成相关精灵图文件，但如果新建文件夹，则需要重新运行项目才会生成对应精灵图文件。</p><p>可通过 <code>@include</code> 直接使用精灵图，无需手动引入 <code>.scss</code> 文件，使用方法如下：</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-28HZB" id="tab-gF66zWI" checked="checked"><label for="tab-gF66zWI">单独使用</label><input type="radio" name="group-28HZB" id="tab-beBwD_n"><label for="tab-beBwD_n">全部导入</label></div><div class="blocks"><div class="language-scss vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// @include [文件夹名称]-sprite([文件名称]);</span></span>
<span class="line"><span style="color:#B392F0;">.icon</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">example-sprite</span><span style="color:#E1E4E8;">(address);</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#B392F0;">.icon</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @include [文件夹名称]-sprite([文件名称]);</span></span>
<span class="line"><span style="color:#6F42C1;">.icon</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">example-sprite</span><span style="color:#24292E;">(address);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#6F42C1;">.icon</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#E36209;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><div class="language-scss vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">scss</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// @include all-[文件夹名称]-sprites;</span></span>
<span class="line"><span style="color:#F97583;">@include</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">all-example-sprites</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#B392F0;">.example-address-sprites</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.example-feedback-sprites</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">-110</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#B392F0;">.example-payment-sprites</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-image</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">url</span><span style="color:#E1E4E8;">(</span><span style="color:#FFAB70;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-position</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-110</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">background-size</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">210</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">width</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">height</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span><span style="color:#F97583;">px</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// @include all-[文件夹名称]-sprites;</span></span>
<span class="line"><span style="color:#D73A49;">@include</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">all-example-sprites</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 输出</span></span>
<span class="line"><span style="color:#6F42C1;">.example-address-sprites</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#E36209;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.example-feedback-sprites</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#E36209;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">-110</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">0</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#6F42C1;">.example-payment-sprites</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-image</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#E36209;">img/example.326b35aec20837b9c08563c654422fe6.326b35ae.png</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-position</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-110</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">background-size</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">210</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">width</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">height</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">100</span><span style="color:#D73A49;">px</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><p>如果是小型项目，静态图片不多，可全部放在一个文件夹内；如果是中大型项目，文件夹可按模块来划分，这样不同的模块最终会生成各自的精灵图文件。</p><div class="warning custom-block"><p class="custom-block-title">注意</p><p>文件命名仅支持字母与数字，所有特殊符号均会被转化为 <code>-</code> ，如：</p><ul><li><code>test_123</code> =&gt; <code>test-123</code></li><li><code>test@2x</code> =&gt; <code>test-2x</code></li><li><code>test - 123</code> =&gt; <code>test-123</code></li><li><code>test$%123</code> =&gt; <code>test-123</code></li></ul><p>使用过程中如果发现无法正常展示图片，可检查生成的 <code>.scss</code> 文件，确定在代码中使用的文件名。</p></div><h2 id="样式" tabindex="-1">样式 <a class="header-anchor" href="#样式" aria-label="Permalink to &quot;样式&quot;">​</a></h2><p>样式存放目录为 <code>/src/assets/styles/</code> ，因为 Vue 的文件特性，页面样式建议写在 <code>.vue</code> 文件里，所以该目录只存放全局样式，方便统一管理。</p><p>此目录下还有一个特殊目录，即 <code>/src/assets/styles/resources/</code> ，这是全局 SCSS 资源目录，首先这个目录里只支持 <code>.scss</code> 文件，其次在这个目录里的文件，无需在页面上引用即可生效并使用。</p><p>同样，精灵图目录下生成的 SCSS 资源也是全局可调用的。</p><div class="tip custom-block"><p class="custom-block-title">说明</p><p>全局 SCSS 资源并不是全局样式，是变量、@mixin 、@function 这些东西</p></div><h2 id="组件" tabindex="-1">组件 <a class="header-anchor" href="#组件" aria-label="Permalink to &quot;组件&quot;">​</a></h2><h3 id="公共组件" tabindex="-1">公共组件 <a class="header-anchor" href="#公共组件" aria-label="Permalink to &quot;公共组件&quot;">​</a></h3><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>公共组件在使用时，无需手动引入，框架会在你使用时自动引入，该特性由 <a href="https://github.com/antfu/unplugin-vue-components" target="_blank" rel="noreferrer">unplugin-vue-components</a> 提供支持。</p></div><p>公共组件存放在 <code>/src/components/</code> 目录下，每个组件按文件夹进行区分。</p><p>每个组件的文件夹内至少保留一个文件名为 <code>index.vue</code> 的组件入口（可参考 <code>SvgIcon</code> 组件），文件夹名称即为组件名。</p><p>推荐使用 <code>pnpm new</code> 指令进行组件生成，详细可查看《<a href="./plop.html">代码文件自动生成</a>》。</p><h3 id="局部组件" tabindex="-1">局部组件 <a class="header-anchor" href="#局部组件" aria-label="Permalink to &quot;局部组件&quot;">​</a></h3><p>局部组件没有提供专门的存放目录，我们建议采用就近原则，即局部组件与使用页面离得越近越好。你可以在每个模块的文件夹下，建立一个 <code>components</code> 文件夹用于存放局部组件。</p>`,25),e=[o];function c(t,r,y,E,i,d){return a(),n("div",null,e)}const u=s(l,[["render",c]]);export{C as __pageData,u as default};
