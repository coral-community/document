import{_ as s,c as a,o as n,a2 as i}from"./chunks/framework.BZKnb7tL.js";const b=JSON.parse('{"title":"快速入门","description":"","frontmatter":{},"headers":[],"relativePath":"zh_CN/get-started/index.md","filePath":"zh_CN/get-started/index.md"}'),e={name:"zh_CN/get-started/index.md"},l=i(`<h1 id="快速入门" tabindex="-1">快速入门 <a class="header-anchor" href="#快速入门" aria-label="Permalink to &quot;快速入门&quot;">​</a></h1><p>本文介绍 xfusion 的安装步骤、使用方法等基础内容。</p><hr><p><strong>阅读对象：</strong></p><ul><li>xfusion 用户。</li></ul><hr><h1 id="环境需求" tabindex="-1">环境需求 <a class="header-anchor" href="#环境需求" aria-label="Permalink to &quot;环境需求&quot;">​</a></h1><p>目前主要使用的开发环境是：<strong>Windows + Linux 虚拟机</strong>。</p><p>通常工作流程是在 Windows 使用 VSCode 通过 ssh 连接到虚拟机，在 Windows 上编辑代码，在 Linux 上编译，后根据目标平台在 Windows(WS63 使用 BurnTool 烧录)或者 Linux 上烧录。</p><p>本文假设读者已安装好 VMware Ubuntu20.04 或者 WSL 虚拟机，并且配置好了 SSH 远程连接、VSCode 开发环境、git。如果没有安装，可以参考以下链接安装：</p><blockquote><ol><li><p>安装虚拟机（VMware 或 WSL 二选一即可）</p><ol><li><p>VMware Ubuntu 虚拟机。</p><ol><li><a href="https://qiu-weidong.github.io/2022/04/30/OS/vmware/" target="_blank" rel="noreferrer">使用 VMWare 安装 Ubuntu 并使用 vscode 远程连接到虚拟机 | 邱维东 (qiu-weidong.github.io)</a></li><li><a href="https://blog.csdn.net/m0_70885101/article/details/137694608" target="_blank" rel="noreferrer">VMware 安装配置 Ubuntu（最新版、超详细）_vmware-workstation-full-17.5.1-23298084.exe-CSDN 博客</a></li></ol></li><li><p>WSL 虚拟机。</p><ol><li><a href="https://learn.microsoft.com/zh-cn/windows/wsl/setup/environment" target="_blank" rel="noreferrer">设置 WSL 开发环境 | Microsoft Learn</a></li><li><a href="https://learn.microsoft.com/zh-cn/windows/wsl/tutorials/wsl-vscode" target="_blank" rel="noreferrer">开始通过 WSL 使用 VS Code | Microsoft Learn</a></li></ol></li></ol></li></ol></blockquote><h1 id="前置准备" tabindex="-1">前置准备 <a class="header-anchor" href="#前置准备" aria-label="Permalink to &quot;前置准备&quot;">​</a></h1><p>如果没有安装 python, 请先安装 python 3.8 以上的版本的 python.</p><ol><li><p>打开虚拟机终端。</p></li><li><p>安装 python。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> apt-get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> python3-pip</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div></li></ol><h1 id="安装-xfusion" tabindex="-1">安装 xfusion <a class="header-anchor" href="#安装-xfusion" aria-label="Permalink to &quot;安装 xfusion&quot;">​</a></h1><p>如果您有 xfusion release 压缩包（含子模块的完整 release），您可以使用《<a href="#通过压缩包">通过压缩包</a>》的步骤安装 xfusion 本体。否则请通过《<a href="#通过-git-链接">通过 git 链接</a>》的步骤安装。</p><h2 id="通过压缩包" tabindex="-1">通过压缩包 <a class="header-anchor" href="#通过压缩包" aria-label="Permalink to &quot;通过压缩包&quot;">​</a></h2><ol><li><p>打开虚拟机终端。</p></li><li><p>解压 xfusion 到你想放到的文件夹。</p><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建你希望放置的文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> development</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> development</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 通过 ssh 或其他方式将 xfusion.xxxxxxxx.tar.gz 复制到虚拟机</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 此处省略</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 解压</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -xvzf</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfusion.xxxxxxxx.tar.gz</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfusion</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果 xfusion 目录内不存在 sdks 文件夹，请创建它</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sdks</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div></li></ol><h2 id="通过-git-链接" tabindex="-1">通过 git 链接 <a class="header-anchor" href="#通过-git-链接" aria-label="Permalink to &quot;通过 git 链接&quot;">​</a></h2><p>TODO 更新 xfusion 链接</p><ol><li><p>打开虚拟机终端。</p></li><li><p>克隆仓库。</p><blockquote><p>由于写该文档时还没有公开的 git 仓库链接，下文用 <a href="http://xxx/xfusion/xfusion.git" target="_blank" rel="noreferrer">http://xxx/xfusion/xfusion.git</a> 替代。</p></blockquote><div class="language-bash vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ~</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建你希望放置的文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> development</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> development</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 克隆 xfusion 仓库，目前请不要递归克隆</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果公开的 git 仓库有 feature 分支，请切换到 feature</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> clone</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> http://xxx/xfusion/xfusion.git</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -b</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> feature</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cd</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> xfusion</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始化和更新子模块</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> init</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> submodule</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 如果 xfusion 目录内不存在 sdks 文件夹，请创建它</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> sdks</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div></li></ol><h1 id="安装具体平台-sdk" tabindex="-1">安装具体平台 SDK <a class="header-anchor" href="#安装具体平台-sdk" aria-label="Permalink to &quot;安装具体平台 SDK&quot;">​</a></h1><p>xfusion 本身不含工具链，需要安装对应平台的开发环境才能编译 xfusion 的代码。</p><p>xfusion 目前支持以下平台，您可以根据需要安装对应平台的 sdk ，请至少选择一个平台安装一次开发环境：</p><ol><li>《<a href="./starting_with_esp32.html">从 esp32 开始</a>》(基于 esp-idf v5.0)</li><li>《<a href="./starting_with_ws63.html">从 ws63 开始</a>》(HI3863 芯片)</li></ol><p>至此您应当可以在某个平台上编译烧录了，您可以看看接下来的<a href="#实用技巧">实用技巧</a>帮助你配置 VSCode 的开发环境，或者看看<a href="./project/">工程相关</a>了解如何创建带有用户组件的工程，以及如何安装外部组件。</p><p>在导出 xfusion 环境变量后可以直接通过 <code>xf</code> 命令来查看所支持的命令。</p><div class="language-txt vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">txt</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>xf</span></span>
<span class="line"><span>Usage: xf [OPTIONS] COMMAND [ARGS]...</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Options:</span></span>
<span class="line"><span>  -v, --verbose  Enable verbose mode.</span></span>
<span class="line"><span>  -r, --rich     Enable rich mode.</span></span>
<span class="line"><span>  -t, --test     Enable test mode.</span></span>
<span class="line"><span>  --help         Show this message and exit.</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Commands:</span></span>
<span class="line"><span>  build       编译工程</span></span>
<span class="line"><span>  clean       清空编译中间产物</span></span>
<span class="line"><span>  create      初始化创建一个新工程</span></span>
<span class="line"><span>  export      导出对应sdk的工程（需要port对接）</span></span>
<span class="line"><span>  flash       烧录工程（需要port对接）</span></span>
<span class="line"><span>  install     安装指定的包</span></span>
<span class="line"><span>  menuconfig  全局宏的配置</span></span>
<span class="line"><span>  search      模糊搜索包名</span></span>
<span class="line"><span>  uninstall   卸载指定的包</span></span>
<span class="line"><span>  update      更新对应sdk的工程（需要port对接）</span></span>
<span class="line"><span>  version     查询当前版本</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h1 id="实用技巧" tabindex="-1">实用技巧 <a class="header-anchor" href="#实用技巧" aria-label="Permalink to &quot;实用技巧&quot;">​</a></h1><p>如果您使用 VSCode 开发，这些《<a href="./practical_tips.html">实用技巧</a>》可以使你的 VSCode 更好用，比如配置智能感知实现精准的代码提示、配置代码格式化等。</p><h1 id="子文档" tabindex="-1">子文档 <a class="header-anchor" href="#子文档" aria-label="Permalink to &quot;子文档&quot;">​</a></h1><ul><li><a href="./starting_with_esp32.html">从 esp32 开始</a></li><li><a href="./starting_with_ws63.html">从 ws63 开始</a></li><li><a href="./practical_tips.html">实用技巧</a></li><li><a href="./project/">工程相关</a></li></ul>`,32),p=[l];function t(r,h,o,d,k,c){return n(),a("div",null,p)}const g=s(e,[["render",t]]);export{b as __pageData,g as default};
