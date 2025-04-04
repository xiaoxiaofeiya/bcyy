'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function HTMLCSSPage() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* 面包屑导航 */}
        <nav className="flex mb-8" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link href="/" className="text-gray-500 hover:text-gray-700">
                首页
              </Link>
            </li>
            <li>
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/categories/frontend" className="text-gray-500 hover:text-gray-700">
                  前端开发
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">HTML/CSS</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">HTML/CSS</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-orange-100 text-orange-800">
              网页基础
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            HTML（超文本标记语言）和CSS（层叠样式表）是构建网页的基础技术。HTML提供网页的结构和内容，而CSS负责样式和布局。这两种技术共同构成了现代网页的基石，是每个前端开发者必须掌握的核心技能。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-2/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">简单</span>
            </div>
            <p className="mt-4 text-gray-600">
              HTML和CSS的基础概念相对简单，入门门槛低。初学者可以快速学习基本语法并创建简单的网页。然而，掌握高级CSS技术（如Flexbox、Grid、动画）和创建复杂响应式布局需要更多实践和经验。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">优秀</span>
            </div>
            <p className="mt-4 text-gray-600">
              HTML和CSS是前端开发的基础，几乎所有与Web相关的职位都需要这些技能。从前端开发者到全栈工程师，甚至UI/UX设计师，都需要掌握HTML和CSS。随着互联网的持续发展，对这些技能的需求将保持稳定。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              仅掌握HTML和CSS的开发者薪资相对较低，但结合JavaScript和现代前端框架（如React、Vue）后，薪资水平会显著提高。专精于CSS的开发者，特别是能创建复杂动画和高级布局的专家，可以获得较高薪资。
            </p>
          </Card>
        </div>

        {/* 详细信息标签页 */}
        <Tabs defaultValue="intro" className="mb-12">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="intro">基本介绍</TabsTrigger>
            <TabsTrigger value="applications">应用场景</TabsTrigger>
            <TabsTrigger value="pros-cons">优缺点分析</TabsTrigger>
            <TabsTrigger value="resources">学习资源</TabsTrigger>
            <TabsTrigger value="examples">案例展示</TabsTrigger>
          </TabsList>
          
          {/* 基本介绍 */}
          <TabsContent value="intro" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">HTML/CSS简介</h2>
            <p className="mb-4">
              HTML（超文本标记语言）和CSS（层叠样式表）是构建网页的两种核心技术。HTML提供网页的结构和内容，而CSS负责样式和布局。这两种技术共同构成了现代网页的基础，是每个前端开发者必须掌握的技能。
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">HTML简介</h3>
            <p className="mb-4">
              HTML（HyperText Markup Language，超文本标记语言）是创建网页的标准标记语言。HTML描述了网页的结构，由一系列元素组成，这些元素告诉浏览器如何显示内容。HTML元素通过"标签"来标记内容，如标题、段落、链接、图像等。
            </p>
            <p className="mb-4">
              HTML的历史可以追溯到1990年代初期，当时Tim Berners-Lee在CERN（欧洲核子研究组织）工作时创建了它。HTML的目的是为科学家们提供一种在互联网上共享文档的方式。随着时间的推移，HTML经历了多次演变：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>HTML 1.0（1991年）：最初的版本，非常简单，只有少量标签。</li>
              <li>HTML 2.0（1995年）：添加了表单等功能，成为第一个HTML标准。</li>
              <li>HTML 3.2（1997年）：引入了表格和更多格式化选项。</li>
              <li>HTML 4.01（1999年）：增加了更多样式和脚本功能。</li>
              <li>XHTML（2000年）：将HTML重新定义为XML的应用，强调严格的语法规则。</li>
              <li>HTML5（2014年正式标准化）：引入了视频、音频、画布等新元素，以及更多语义化标签，如&lt;article&gt;、&lt;section&gt;、&lt;nav&gt;等。</li>
            </ul>
            <p className="mb-4">
              HTML5是当前的标准，它不仅扩展了HTML的功能，还简化了语法，使开发者能够创建更丰富、更交互的网页。HTML5的设计目标是提供所有内容，而不需要额外的插件（如Flash）。
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">CSS简介</h3>
            <p className="mb-4">
              CSS（Cascading Style Sheets，层叠样式表）是一种用于描述HTML文档样式的语言。CSS描述了HTML元素应该如何显示，控制网页的布局、颜色、字体和视觉效果。
            </p>
            <p className="mb-4">
              CSS的发展历程：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>CSS1（1996年）：第一个CSS规范，提供了基本的样式功能。</li>
              <li>CSS2（1998年）：增加了定位、z-index、媒体类型等功能。</li>
              <li>CSS2.1（2011年正式推荐）：修复了CSS2中的错误，成为实际标准。</li>
              <li>CSS3（2000年代开始开发）：模块化开发，引入了动画、过渡、圆角、阴影、渐变等新功能。</li>
              <li>CSS4：实际上不存在作为单一规范的CSS4，而是CSS各个模块的第4级规范。</li>
            </ul>
            <p className="mb-4">
              现代CSS已经非常强大，可以实现复杂的布局和视觉效果。CSS3引入的Flexbox和Grid布局模型使得创建复杂的响应式布局变得更加简单。CSS预处理器（如Sass、Less）和后处理器（如PostCSS）进一步增强了CSS的功能和开发体验。
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">HTML和CSS的关系</h3>
            <p className="mb-4">
              HTML和CSS是相互补充的技术：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>HTML提供结构</strong>：定义网页的内容和结构，如标题、段落、列表、表格等。</li>
              <li><strong>CSS提供样式</strong>：控制HTML元素的外观，如颜色、字体、间距、布局等。</li>
            </ul>
            <p className="mb-4">
              这种分离的设计理念（内容与表现分离）是Web标准的核心原则之一，它带来了多种好处：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>提高了代码的可维护性和可重用性</li>
              <li>使网页更容易适应不同设备和屏幕尺寸</li>
              <li>提高了页面加载速度（CSS文件可以缓存）</li>
              <li>使内容更容易被搜索引擎和辅助技术（如屏幕阅读器）访问</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">HTML和CSS的基本语法</h3>
            <p className="mb-4">
              <strong>HTML基本语法</strong>：HTML使用标签来标记内容。标签通常成对出现，由开始标签和结束标签组成，中间包含内容。
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
{`<!DOCTYPE html>
<html>
<head>
  <title>页面标题</title>
</head>
<body>
  <h1>这是一个标题</h1>
  <p>这是一个段落。</p>
  <a href="https://example.com">这是一个链接</a>
  <img src="image.jpg" alt="图片描述">
</body>
</html>`}
              </pre>
            </div>
            
            <p className="mb-4">
              <strong>CSS基本语法</strong>：CSS由选择器和声明块组成。选择器指定要应用样式的HTML元素，声明块包含一个或多个声明，每个声明由属性和值组成。
            </p>
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <pre className="text-sm">
{`/* 选择器 { 属性: 值; } */
body {
  font-family: Arial, sans-serif;
  background-color: #f0f0f0;
}

h1 {
  color: #333;
  font-size: 24px;
}

p {
  line-height: 1.6;
  margin-bottom: 15px;
}

.container {
  width: 80%;
  margin: 0 auto;
}

#header {
  background-color: #333;
  color: white;
  padding: 10px;
}`}
              </pre>
            </div>
            
            <p className="mb-4">
              CSS可以通过三种方式添加到HTML中：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>内联样式</strong>：直接在HTML元素的style属性中定义</li>
              <li><strong>内部样式表</strong>：在HTML文档头部的&lt;style&gt;标签中定义</li>
              <li><strong>外部样式表</strong>：在单独的.css文件中定义，然后通过&lt;link&gt;标签引入（推荐方式）</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">现代HTML和CSS的特点</h3>
            <p className="mb-4">
              现代HTML和CSS具有以下特点：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>语义化</strong>：HTML5引入了更多语义化标签，如&lt;header&gt;、&lt;footer&gt;、&lt;article&gt;等，使代码更有意义。</li>
              <li><strong>响应式设计</strong>：通过媒体查询和灵活的布局，使网页能够适应不同设备和屏幕尺寸。</li>
              <li><strong>Flexbox和Grid</strong>：现代CSS布局模型，使复杂布局变得简单。</li>
              <li><strong>CSS变量</strong>：允许定义可重用的值，提高代码的可维护性。</li>
              <li><strong>动画和过渡</strong>：CSS3提供了强大的动画和过渡效果，减少了对JavaScript的依赖。</li>
              <li><strong>Web字体</strong>：允许使用自定义字体，增强了设计的灵活性。</li>
              <li><strong>CSS预处理器</strong>：如Sass、Less，提供了变量、嵌套、混合等功能，增强了CSS的能力。</li>
              <li><strong>CSS框架</strong>：如Bootstrap、Tailwind CSS，提供了预定义的组件和样式，加速开发。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">HTML/CSS应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">网站开发</h3>
                </div>
                <p className="text-gray-600">
                  HTML和CSS是所有网站开发的基础。从简单的个人博客到复杂的企业网站，HTML提供内容结构，CSS负责视觉呈现。现代网站通常采用响应式设计，使用CSS媒体查询确保网站在不同设备（桌面、平板、手机）上都能良好显示。HTML5的语义化标签（如header、nav、section、article、footer）使网站结构更加清晰，有利于SEO和可访问性。CSS框架如Bootstrap和Tailwind CSS可以加速开发过程，提供一致的设计系统。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Web应用界面</h3>
                </div>
                <p className="text-gray-600">
                  现代Web应用（如Gmail、Google Docs、Trello等）的用户界面都是使用HTML和CSS构建的。这些应用需要复杂的布局和交互元素，如导航菜单、表单、模态框、下拉菜单等。CSS的Flexbox和Grid布局系统使得创建复杂的应用界面变得更加简单。CSS动画和过渡效果可以增强用户体验，提供视觉反馈。现代前端框架（如React、Vue、Angular）虽然增加了JavaScript的比重，但它们生成的仍然是HTML和CSS，只是方式更加动态和组件化。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">电子邮件模板</h3>
                </div>
                <p className="text-gray-600">
                  HTML和CSS用于创建电子邮件营销模板。这是一个特殊的应用场景，因为电子邮件客户端对HTML和CSS的支持有限且不一致。电子邮件HTML通常使用表格布局（而非现代的Flexbox或Grid），并且大多数CSS需要内联（而非外部样式表）。尽管有这些限制，熟练的HTML/CSS开发者仍然可以创建视觉吸引力强、响应式的电子邮件模板。专业的电子邮件营销平台（如Mailchimp、Campaign Monitor）提供了模板编辑器和测试工具，简化了这一过程。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">移动应用界面</h3>
                </div>
                <p className="text-gray-600">
                  使用混合开发框架（如Ionic、React Native、NativeScript）或PWA（渐进式Web应用）技术，HTML和CSS可以用于构建移动应用界面。这些技术允许开发者使用Web技术创建能在iOS和Android上运行的应用。CSS提供了移动优先的设计方法，确保应用在小屏幕设备上有良好的用户体验。CSS的媒体查询和视口单位（如vw、vh）使得创建适应不同屏幕尺寸的界面变得简单。HTML5的离线存储和服务工作线程（Service Workers）使PWA能够在没有网络连接的情况下工作。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">数据可视化</h3>
                </div>
                <p className="text-gray-600">
                  HTML和CSS结合JavaScript库（如D3.js、Chart.js）可以创建交互式数据可视化。HTML提供结构元素（如SVG或Canvas），CSS负责样式（如颜色、字体、布局）。CSS的过渡和动画可以使数据可视化更加生动，如图表的加载动画或交互反馈。响应式设计技术确保数据可视化在不同设备上都能正确显示。CSS网格系统有助于创建复杂的仪表板布局，展示多个相关的数据可视化。现代CSS变量使得创建具有一致配色方案的可视化变得简单。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">文档和演示</h3>
                </div>
                <p className="text-gray-600">
                  HTML和CSS可以用于创建在线文档、幻灯片和演示材料。框架如Reveal.js使用HTML和CSS创建专业的幻灯片演示。CSS的打印样式表允许为打印优化HTML内容，创建PDF报告或文档。HTML的语义结构使文档更易于导航和理解。CSS可以提供不同的主题和视觉样式，适应不同的品牌和场合。响应式设计确保文档在不同设备上都能良好显示，从投影仪到手机屏幕。HTML5的多媒体支持允许在文档中嵌入视频、音频和交互式元素，增强演示效果。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-pink-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold">游戏开发</h3>
                </div>
                <p className="text-gray-600">
                  HTML5和CSS3可以用于创建简单的Web游戏。HTML5的Canvas和SVG元素提供了绘图能力，CSS3的动画和过渡效果可以创建游戏动画。CSS3的变换（如旋转、缩放）可以用于游戏对象的移动和变形。响应式设计使游戏能够适应不同的屏幕尺寸。虽然复杂游戏通常需要JavaScript或专门的游戏引擎，但HTML和CSS为游戏界面和基本视觉效果提供了基础。HTML5的音频和视频元素可以添加游戏音效和背景音乐，增强游戏体验。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold">原型设计</h3>
                </div>
                <p className="text-gray-600">
                  HTML和CSS是创建交互式原型的理想工具。相比静态设计工具，HTML原型可以展示真实的交互和响应式行为。CSS的动画和过渡可以模拟用户界面的动态效果。原型可以在真实的浏览器和设备上测试，提供更准确的用户体验评估。HTML原型可以逐步演变为最终产品，减少从设计到开发的转换成本。工具如CodePen和JSFiddle使分享和协作原型变得简单。CSS框架如Bootstrap可以加速原型开发，提供现成的组件和样式。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">HTML/CSS优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">通用性和兼容性</h4>
                    <p className="text-gray-600">HTML和CSS是Web的标准语言，被所有浏览器支持，无需安装额外插件。这确保了内容可以在任何设备和平台上访问。HTML和CSS的标准由W3C维护，保证了长期的稳定性和向后兼容性。即使是20年前的HTML页面，今天仍然可以在现代浏览器中正常显示。这种通用性使HTML/CSS成为分享信息的理想选择。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">易于学习和使用</h4>
                    <p className="text-gray-600">HTML和CSS的基础概念相对简单，入门门槛低。初学者可以在短时间内学会创建简单的网页。HTML的声明式特性使其比命令式编程语言更容易理解。CSS的层叠特性允许逐步构建样式，从基础到复杂。丰富的学习资源（教程、文档、社区）使自学变得简单。开发工具（如浏览器开发者工具）提供了即时反馈，加速学习过程。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内容与表现分离</h4>
                    <p className="text-gray-600">HTML负责内容和结构，CSS负责样式和布局，这种分离带来了多种好处。同一HTML内容可以通过不同的CSS样式表呈现不同的外观，提高了灵活性。样式变更不需要修改HTML结构，简化了维护。CSS可以集中管理，确保整个网站的一致性。这种分离有利于团队协作，内容创作者和设计师可以独立工作。还提高了可访问性，屏幕阅读器等辅助技术可以更好地解析内容。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">响应式设计能力</h4>
                    <p className="text-gray-600">CSS的媒体查询允许根据设备特性（如屏幕尺寸、分辨率）应用不同的样式。这使得创建在所有设备上都有良好体验的响应式网站成为可能。CSS的弹性单位（如百分比、em、rem、vw、vh）支持灵活的布局。Flexbox和Grid布局模型简化了复杂响应式布局的创建。响应式图片技术确保图像在不同设备上都能高效加载。这种适应性对于当今多设备的Web环境至关重要。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的样式和布局能力</h4>
                    <p className="text-gray-600">现代CSS提供了丰富的样式和布局功能，可以创建复杂的视觉效果。CSS3引入了圆角、阴影、渐变、动画等视觉效果，减少了对图像的依赖。Flexbox和Grid布局系统使复杂布局变得简单，解决了传统布局方法的限制。CSS变量允许创建可维护的主题系统。CSS预处理器（如Sass、Less）进一步增强了CSS的能力，提供变量、嵌套、混合等功能。这些能力使设计师能够实现几乎任何视觉设计。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">SEO友好</h4>
                    <p className="text-gray-600">HTML的语义化结构有助于搜索引擎理解内容，提高搜索排名。HTML5引入的语义化标签（如article、section、nav）进一步增强了这一优势。CSS可以将重要内容放在HTML的前面，同时通过视觉布局调整显示顺序。HTML的文本内容和alt属性为搜索引擎提供了丰富的索引材料。CSS可以提高页面加载速度（通过缓存和优化），这也是搜索排名的因素之一。这些特性使HTML/CSS成为SEO策略的重要组成部分。</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-red-600">
                  <X className="h-5 w-5 mr-2" />
                  缺点
                </h3>
                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">浏览器兼容性问题</h4>
                    <p className="text-gray-600">不同浏览器对HTML和CSS标准的实现可能存在差异，导致兼容性问题。旧版浏览器可能不支持最新的HTML5和CSS3特性，需要提供回退方案。移动浏览器和桌面浏览器的行为也可能不同。这些差异增加了测试和调试的复杂性，开发者需要在多个浏览器中测试。解决方案如CSS前缀、Polyfills和CSS重置可以缓解这些问题，但增加了开发负担。浏览器兼容性是HTML/CSS开发中最常见的挑战之一。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">CSS的复杂性和维护挑战</h4>
                    <p className="text-gray-600">随着项目规模增长，CSS可能变得难以维护。CSS的全局性质和层叠特性可能导致意外的样式覆盖和冲突。选择器特异性问题可能导致难以预测的样式应用。大型项目中的CSS文件可能变得臃肿，影响加载性能。命名约定和组织结构变得至关重要，但没有强制执行机制。CSS预处理器和方法论（如BEM、SMACSS、ITCSS）可以帮助管理复杂性，但需要团队遵守规范。这些挑战使CSS在大型项目中的维护成为一项技术挑战。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">有限的逻辑和计算能力</h4>
                    <p className="text-gray-600">HTML是标记语言，不具备编程语言的逻辑能力。CSS虽然有一些计算功能（如calc()），但缺乏完整的编程能力。复杂的交互和动态内容需要JavaScript的配合。CSS变量和自定义属性提供了一些动态能力，但远不如编程语言灵活。条件逻辑在CSS中实现复杂且有限（主要依赖媒体查询和选择器）。这些限制意味着纯HTML/CSS无法创建真正的动态应用，需要与JavaScript配合使用。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">精确布局的困难</h4>
                    <p className="text-gray-600">在某些情况下，CSS布局可能难以实现设计师的精确要求。垂直居中和对齐在历史上一直是CSS的挑战（虽然Flexbox和Grid已大大改善）。复杂的响应式布局可能需要大量的媒体查询和条件样式。像素完美的跨浏览器布局可能需要大量的调整和妥协。某些高级布局效果（如杂志风格的文本排版）在CSS中实现困难。这些挑战可能导致实现与设计之间的差距，特别是在复杂设计中。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">性能考虑</h4>
                    <p className="text-gray-600">复杂的CSS选择器和规则可能影响页面渲染性能。大量的CSS动画和过渡可能导致设备上的性能问题，特别是在低端移动设备上。CSS文件如果没有优化，可能变得臃肿，增加加载时间。复杂的CSS布局计算可能导致布局抖动（layout thrashing）。这些性能问题需要通过优化技术（如压缩、合并、关键CSS内联）来解决。随着项目复杂性增加，CSS性能优化变得越来越重要。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">缺乏模块化和封装</h4>
                    <p className="text-gray-600">传统CSS缺乏真正的模块化和封装机制，所有样式都在全局作用域中。这可能导致命名冲突和意外的样式覆盖。CSS没有原生的依赖管理系统，使得大型项目的组织变得复杂。组件样式可能被外部CSS规则影响，破坏封装性。CSS-in-JS和CSS Modules等解决方案试图解决这些问题，但增加了复杂性。这种缺乏封装的特性与现代组件化开发方法存在一定的冲突，需要额外的规范和工具来管理。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">HTML/CSS学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和指南
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">MDN Web文档 - HTML</h4>
                      <p className="text-sm text-gray-600">Mozilla开发者网络提供的全面HTML参考和教程，被认为是最权威的Web开发资源之一。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">MDN Web文档 - CSS</h4>
                      <p className="text-sm text-gray-600">详细的CSS参考和指南，包含所有CSS属性、选择器和概念的解释和示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.w3.org/TR/html5/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">W3C HTML5规范</h4>
                      <p className="text-sm text-gray-600">HTML5的官方技术规范，由万维网联盟（W3C）维护。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.w3.org/Style/CSS/specs.en.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">W3C CSS规范</h4>
                      <p className="text-sm text-gray-600">CSS的官方技术规范集合，包括所有CSS模块的最新标准。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-500" />
                  交互式学习平台
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.freecodecamp.org/learn/responsive-web-design/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">freeCodeCamp - 响应式Web设计</h4>
                      <p className="text-sm text-gray-600">免费的交互式课程，通过实践项目学习HTML、CSS和响应式设计。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/learn-html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - HTML & CSS课程</h4>
                      <p className="text-sm text-gray-600">交互式编码环境中的结构化HTML和CSS课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.frontendmentor.io/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Frontend Mentor</h4>
                      <p className="text-sm text-gray-600">提供真实世界的设计挑战，帮助提升HTML和CSS技能。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://flexboxfroggy.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Flexbox Froggy</h4>
                      <p className="text-sm text-gray-600">通过游戏化方式学习CSS Flexbox布局。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-purple-500" />
                  推荐书籍
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《HTML和CSS设计与构建网站》</h4>
                    <p className="text-sm text-gray-600">作者：Jon Duckett</p>
                    <p className="text-sm text-gray-600">视觉化的HTML和CSS入门书籍，适合初学者，图文并茂，易于理解。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《CSS权威指南》</h4>
                    <p className="text-sm text-gray-600">作者：Eric A. Meyer, Estelle Weyl</p>
                    <p className="text-sm text-gray-600">全面深入的CSS参考书，涵盖所有CSS概念和技术，适合进阶学习。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《精通CSS：高级Web标准解决方案》</h4>
                    <p className="text-sm text-gray-600">作者：Andy Budd, Emil Björklund</p>
                    <p className="text-sm text-gray-600">关注CSS最佳实践和高级技术，适合有一定基础的开发者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《响应式Web设计：HTML5和CSS3实战》</h4>
                    <p className="text-sm text-gray-600">作者：Ben Frain</p>
                    <p className="text-sm text-gray-600">专注于现代响应式设计技术，包括媒体查询、弹性布局和移动优先策略。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  在线教程和博客
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://css-tricks.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">CSS-Tricks</h4>
                      <p className="text-sm text-gray-600">提供大量CSS技巧、教程和最佳实践的网站，包括著名的"CSS Grid完全指南"。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.smashingmagazine.com/category/css/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Smashing Magazine</h4>
                      <p className="text-sm text-gray-600">高质量的Web设计和开发文章，包括深入的HTML和CSS教程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://web.dev/learn/css/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">web.dev - Learn CSS</h4>
                      <p className="text-sm text-gray-600">Google提供的现代CSS课程，涵盖从基础到高级的所有主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.w3schools.com/html/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">W3Schools</h4>
                      <p className="text-sm text-gray-600">提供简单易懂的HTML和CSS教程，包含在线编辑器和示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-red-500" />
                  工具和资源
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://codepen.io/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">CodePen</h4>
                      <p className="text-sm text-gray-600">在线代码编辑器和社区，可以创建、分享和发现HTML、CSS和JavaScript代码片段。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://caniuse.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Can I Use</h4>
                      <p className="text-sm text-gray-600">提供浏览器支持表格，帮助开发者了解各种HTML和CSS特性的兼容性。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://validator.w3.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">W3C标记验证服务</h4>
                      <p className="text-sm text-gray-600">检查HTML文档是否符合W3C标准的工具。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://jigsaw.w3.org/css-validator/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">W3C CSS验证服务</h4>
                      <p className="text-sm text-gray-600">检查CSS文件是否符合W3C标准的工具。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-indigo-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://stackoverflow.com/questions/tagged/html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">程序员问答社区，有大量HTML和CSS相关的问题和解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/css/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit - r/css和r/html</h4>
                      <p className="text-sm text-gray-600">讨论CSS和HTML的Reddit社区，分享资源、问题和解决方案。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://spectrum.chat/css" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Spectrum CSS社区</h4>
                      <p className="text-sm text-gray-600">讨论CSS和前端开发的在线社区。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://dev.to/t/html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">DEV Community</h4>
                      <p className="text-sm text-gray-600">开发者社区，有许多HTML和CSS相关的文章和讨论。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">HTML/CSS案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">响应式网站设计</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">响应式网站截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">媒体查询示例</h4>
                      <p className="text-sm text-gray-600">使用CSS媒体查询创建在不同设备上都能良好显示的响应式布局。根据屏幕宽度调整元素大小、位置和可见性。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Flexbox布局截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Flexbox布局</h4>
                      <p className="text-sm text-gray-600">使用CSS Flexbox创建灵活的一维布局，轻松实现水平或垂直排列、对齐和分配空间。特别适合导航栏和卡片列表。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Grid布局截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Grid布局</h4>
                      <p className="text-sm text-gray-600">使用CSS Grid创建复杂的二维布局，定义行和列，放置和对齐元素。适合整页布局和复杂的界面组件。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">CSS动画和过渡</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">CSS过渡示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`/* HTML */
<button class="btn">悬停我</button>

/* CSS */
.btn {
  background-color: #3498db;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  /* 定义过渡 */
  transition: background-color 0.3s ease,
              transform 0.2s ease;
}

.btn:hover {
  background-color: #2980b9;
  transform: scale(1.05);
}

.btn:active {
  transform: scale(0.95);
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">CSS动画示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`/* HTML */
<div class="pulse"></div>

/* CSS */
.pulse {
  width: 100px;
  height: 100px;
  background-color: #e74c3c;
  border-radius: 50%;
  /* 应用动画 */
  animation: pulse 2s infinite;
}

/* 定义动画 */
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.7;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">现代CSS技术</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">CSS变量示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`:root {
  /* 定义全局CSS变量 */
  --primary-color: #3498db;
  --secondary-color: #2ecc71;
  --text-color: #333;
  --spacing-unit: 8px;
  --border-radius: 4px;
  --font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
  font-family: var(--font-family);
  color: var(--text-color);
  margin: 0;
  padding: var(--spacing-unit);
}

.button {
  background-color: var(--primary-color);
  padding: calc(var(--spacing-unit) * 2) calc(var(--spacing-unit) * 3);
  border-radius: var(--border-radius);
  color: white;
}

.card {
  border: 1px solid #ddd;
  border-radius: var(--border-radius);
  padding: calc(var(--spacing-unit) * 2);
  margin-bottom: calc(var(--spacing-unit) * 2);
}

/* 主题切换 */
.dark-theme {
  --primary-color: #2980b9;
  --secondary-color: #27ae60;
  --text-color: #f5f5f5;
  background-color: #222;
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">CSS Grid布局示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`/* HTML */
<div class="grid-container">
  <header class="header">Header</header>
  <nav class="sidebar">Sidebar</nav>
  <main class="main-content">Main Content</main>
  <aside class="sidebar-right">Right Sidebar</aside>
  <footer class="footer">Footer</footer>
</div>

/* CSS */
.grid-container {
  display: grid;
  grid-template-columns: 200px 1fr 200px;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header header header"
    "sidebar main sidebar-right"
    "footer footer footer";
  min-height: 100vh;
  gap: 10px;
}

.header {
  grid-area: header;
  background-color: #3498db;
  padding: 20px;
}

.sidebar {
  grid-area: sidebar;
  background-color: #2ecc71;
  padding: 20px;
}

.main-content {
  grid-area: main;
  background-color: #f5f5f5;
  padding: 20px;
}

.sidebar-right {
  grid-area: sidebar-right;
  background-color: #e74c3c;
  padding: 20px;
}

.footer {
  grid-area: footer;
  background-color: #34495e;
  padding: 20px;
  color: white;
}

/* 响应式布局 */
@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-areas:
      "header"
      "main"
      "sidebar"
      "sidebar-right"
      "footer";
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">HTML5语义化标签</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`<!DOCTYPE html>
<html lang="zh-CN">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>HTML5语义化标签示例</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      line-height: 1.6;
      color: #333;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
    }
    
    header, footer, nav, main, article, section, aside {
      margin-bottom: 20px;
      padding: 20px;
      background-color: #f5f5f5;
      border-radius: 5px;
    }
    
    header {
      background-color: #3498db;
      color: white;
    }
    
    nav ul {
      display: flex;
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    nav li {
      margin-right: 20px;
    }
    
    main {
      display: grid;
      grid-template-columns: 3fr 1fr;
      gap: 20px;
    }
    
    article {
      background-color: white;
      border: 1px solid #ddd;
    }
    
    aside {
      background-color: #f9f9f9;
    }
    
    footer {
      background-color: #34495e;
      color: white;
      text-align: center;
    }
    
    figure {
      margin: 0;
      text-align: center;
    }
    
    figcaption {
      font-style: italic;
      margin-top: 10px;
    }
    
    time {
      color: #777;
    }
  </style>
</head>
<body>
  <!-- 页头 -->
  <header>
    <h1>我的博客网站</h1>
    <p>使用HTML5语义化标签构建</p>
  </header>
  
  <!-- 导航 -->
  <nav>
    <ul>
      <li><a href="#">首页</a></li>
      <li><a href="#">文章</a></li>
      <li><a href="#">关于</a></li>
      <li><a href="#">联系</a></li>
    </ul>
  </nav>
  
  <!-- 主要内容 -->
  <main>
    <!-- 文章部分 -->
    <section>
      <h2>最新文章</h2>
      
      <article>
        <header>
          <h3>HTML5语义化标签的重要性</h3>
          <p>作者：张三 | <time datetime="2023-04-15">2023年4月15日</time></p>
        </header>
        
        <p>HTML5引入了许多新的语义化元素，使网页结构更加清晰...</p>
        
        <figure>
          <img src="placeholder.jpg" alt="HTML5结构示意图">
          <figcaption>HTML5页面结构示意图</figcaption>
        </figure>
        
        <p>使用语义化标签有助于：</p>
        <ul>
          <li>提高可访问性</li>
          <li>改善SEO</li>
          <li>使代码更易于维护</li>
        </ul>
        
        <footer>
          <p>标签：<a href="#">HTML5</a>, <a href="#">Web开发</a>, <a href="#">前端</a></p>
        </footer>
      </article>
      
      <article>
        <header>
          <h3>CSS Grid布局入门</h3>
          <p>作者：李四 | <time datetime="2023-04-10">2023年4月10日</time></p>
        </header>
        
        <p>CSS Grid是一个强大的二维布局系统，可以轻松创建复杂的网页布局...</p>
        
        <footer>
          <p>标签：<a href="#">CSS</a>, <a href="#">布局</a>, <a href="#">前端</a></p>
        </footer>
      </article>
    </section>
    
    <!-- 侧边栏 -->
    <aside>
      <section>
        <h3>关于作者</h3>
        <p>前端开发工程师，热爱Web技术...</p>
      </section>
      
      <section>
        <h3>热门文章</h3>
        <ul>
          <li><a href="#">响应式设计最佳实践</a></li>
          <li><a href="#">CSS变量使用指南</a></li>
          <li><a href="#">Flexbox vs Grid：如何选择</a></li>
        </ul>
      </section>
    </aside>
  </main>
  
  <!-- 页脚 -->
  <footer>
    <p>&copy; 2023 我的博客网站. 保留所有权利.</p>
    <address>
      联系我们: <a href="mailto:info@example.com">info@example.com</a>
    </address>
  </footer>
</body>
</html>`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">CSS框架示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Bootstrap截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Bootstrap</h4>
                      <p className="text-sm text-gray-600">最流行的CSS框架之一，提供了完整的组件库和网格系统。Bootstrap使用预定义的类来快速构建响应式网站。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Tailwind CSS截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Tailwind CSS</h4>
                      <p className="text-sm text-gray-600">实用优先的CSS框架，通过组合原子类来构建界面。Tailwind提供了高度可定制的设计系统，适合现代Web开发。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Bulma截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Bulma</h4>
                      <p className="text-sm text-gray-600">基于Flexbox的现代CSS框架，不依赖JavaScript。Bulma提供了简洁的语法和模块化结构，易于学习和使用。</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 相关语言推荐 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相关技术推荐</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/languages/javascript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">JavaScript</h3>
                  <p className="mt-2 text-sm text-gray-600">HTML和CSS提供结构和样式，JavaScript添加交互性。这三种技术共同构成了现代Web开发的基础。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/sass">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Sass/SCSS</h3>
                  <p className="mt-2 text-sm text-gray-600">CSS预处理器，增加了变量、嵌套、混合等功能，使CSS更强大、更易于维护。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/react">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">React</h3>
                  <p className="mt-2 text-sm text-gray-600">流行的JavaScript库，用于构建用户界面。React使用组件化方法，可以与CSS-in-JS解决方案结合使用。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/tailwind">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Tailwind CSS</h3>
                  <p className="mt-2 text-sm text-gray-600">实用优先的CSS框架，通过组合原子类来构建界面，提供了不同的CSS使用方法。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
          </div>
        </div>

        {/* AI助手快速咨询 */}
        <div className="mb-12 bg-purple-50 rounded-lg p-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold mb-2">还有疑问？咨询AI助手</h2>
              <p className="text-gray-600 mb-4">
                如果你对HTML/CSS还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
              </p>
              <Link href="/chat">
                <Button size="lg" className="rounded-md px-6 py-2">
                  开始对话
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="md:w-1/3 bg-white rounded-lg shadow-md p-4">
              <div className="bg-gray-100 rounded-lg p-3 mb-3">
                <p className="text-gray-800 text-sm">HTML和CSS难学吗？需要多长时间才能掌握？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">HTML和CSS的基础相对容易学习，初学者通常可以在几周内掌握基本概念并创建简单的网页。HTML的标记语法直观，CSS的基本选择器和属性也不复杂。然而，真正精通HTML和CSS需要更长时间，通常是几个月到一年，取决于学习深度和实践频率。掌握响应式设计、Flexbox、Grid等高级布局技术，以及动画、过渡等视觉效果需要更多实践。最重要的是持续构建项目，解决实际问题。记住，Web标准不断发展，所以即使是专业人士也在不断学习。建议从基础开始，逐步构建知识，通过实际项目巩固所学。</p>
              </div>
            </div>
          </div>
        </div>

        {/* 广告位 */}
        <div className="mb-12">
          <div className="bg-white p-4 rounded-lg shadow text-center">
            <p className="text-gray-500 text-sm">广告位</p>
            <div className="h-24 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <p className="text-gray-400">728x90 广告横幅</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
