'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function VuePage() {
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
                <span className="text-gray-700">Vue.js</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Vue.js</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
              渐进式框架
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Vue.js是一个用于构建用户界面的渐进式JavaScript框架。与其他大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，易于上手，便于与其他库或已有项目整合。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              Vue.js的学习曲线相对平缓，特别是对于已经熟悉HTML、CSS和JavaScript的开发者。其直观的模板语法和详细的文档使初学者能够快速上手。相比Angular的复杂性和React的函数式编程范式，Vue提供了更友好的入门体验。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">良好</span>
            </div>
            <p className="mt-4 text-gray-600">
              Vue.js在全球范围内的采用率持续增长，尤其在中国和亚洲市场非常受欢迎。虽然职位数量可能不如React多，但Vue开发者的需求仍然强劲，特别是在初创公司和中小型企业中。随着Vue 3的发布和生态系统的成熟，就业机会预计将继续增加。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">优秀</span>
            </div>
            <p className="mt-4 text-gray-600">
              Vue.js开发者的薪资水平通常与其他前端框架相当，尤其是在拥有丰富项目经验的情况下。在中国市场，熟练的Vue开发者薪资具有竞争力，特别是掌握了Vue生态系统（如Vuex、Vue Router、Nuxt.js）的全栈开发者。随着经验增长和专业知识深化，薪资水平会显著提高。
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
            <h2 className="text-2xl font-bold mb-4">Vue.js简介</h2>
            <p className="mb-4">
              Vue.js（通常简称为Vue）是一个用于构建用户界面的开源JavaScript框架，由尤雨溪（Evan You）于2014年创建。Vue的设计理念是提供一个渐进式框架，允许开发者根据需求逐步采用其功能，从简单的页面增强到复杂的单页应用程序（SPA）。
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">历史与发展</h3>
            <p className="mb-4">
              Vue的创始人尤雨溪曾在Google工作，参与过Angular项目。他创建Vue的初衷是提取Angular中他喜欢的部分，并构建一个更轻量级的框架。Vue的发展历程如下：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>2014年2月</strong>：Vue.js 0.9版本首次发布</li>
              <li><strong>2015年10月</strong>：Vue.js 1.0正式发布，确立了框架的核心功能</li>
              <li><strong>2016年10月</strong>：Vue.js 2.0发布，引入虚拟DOM、服务器端渲染和更好的构建工具支持</li>
              <li><strong>2020年9月</strong>：Vue.js 3.0发布，带来Composition API、更好的TypeScript支持、更小的包体积和更好的性能</li>
            </ul>
            <p className="mb-4">
              随着时间的推移，Vue从一个简单的视图层库发展成为一个成熟的框架，拥有完整的生态系统，包括官方路由库（Vue Router）、状态管理库（Vuex/Pinia）、构建工具（Vue CLI/Vite）和服务器端渲染框架（Nuxt.js）。
            </p>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">核心概念</h3>
            <p className="mb-4">
              Vue的核心概念包括：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>
                <strong>声明式渲染</strong>：Vue使用模板语法，允许开发者声明式地将数据渲染到DOM中。
                <div className="bg-gray-100 p-2 rounded mt-1">
                  <code className="text-sm">
                    &lt;div&gt;{{ message }}&lt;/div&gt;
                  </code>
                </div>
              </li>
              <li>
                <strong>响应式系统</strong>：Vue自动追踪JavaScript状态变化并更新DOM。当数据变化时，视图会自动更新。
              </li>
              <li>
                <strong>组件系统</strong>：Vue应用由独立、可复用的组件构建而成，每个组件封装自己的HTML、CSS和JavaScript。
              </li>
              <li>
                <strong>单文件组件（SFC）</strong>：Vue的.vue文件将模板、脚本和样式组合在一个文件中，提供了更好的开发体验。
              </li>
              <li>
                <strong>指令</strong>：Vue提供了特殊的HTML属性，如v-if、v-for、v-bind、v-on等，用于在模板中执行各种操作。
              </li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Vue 2 vs Vue 3</h3>
            <p className="mb-4">
              Vue 3是Vue的最新主要版本，带来了许多重要的改进：
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">特性</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Vue 2</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Vue 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">API风格</td>
                    <td className="border border-gray-300 px-4 py-2">Options API</td>
                    <td className="border border-gray-300 px-4 py-2">Options API + Composition API</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">响应式系统</td>
                    <td className="border border-gray-300 px-4 py-2">基于Object.defineProperty</td>
                    <td className="border border-gray-300 px-4 py-2">基于Proxy，更全面的响应式支持</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">性能</td>
                    <td className="border border-gray-300 px-4 py-2">组件级别的缓存和优化</td>
                    <td className="border border-gray-300 px-4 py-2">更快的挂载时间，更少的内存使用，更好的更新性能</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">TypeScript支持</td>
                    <td className="border border-gray-300 px-4 py-2">有限支持</td>
                    <td className="border border-gray-300 px-4 py-2">从头开始用TypeScript重写，提供更好的类型推断</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">包大小</td>
                    <td className="border border-gray-300 px-4 py-2">~30KB min+gzip</td>
                    <td className="border border-gray-300 px-4 py-2">~10KB min+gzip（核心运行时）</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2">多根节点组件</td>
                    <td className="border border-gray-300 px-4 py-2">不支持（必须有单一根节点）</td>
                    <td className="border border-gray-300 px-4 py-2">支持（Fragments）</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Vue生态系统</h3>
            <p className="mb-4">
              Vue拥有丰富的生态系统，包括官方和社区维护的库和工具：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Vue Router</strong>：官方路由库，用于构建单页应用</li>
              <li><strong>Vuex/Pinia</strong>：状态管理库，用于管理应用的共享状态</li>
              <li><strong>Vue CLI/Vite</strong>：项目脚手架和构建工具</li>
              <li><strong>Nuxt.js</strong>：基于Vue的服务器端渲染框架</li>
              <li><strong>Vuetify</strong>：基于Material Design的UI组件库</li>
              <li><strong>Element Plus</strong>：桌面端组件库，在中国市场特别流行</li>
              <li><strong>Quasar</strong>：用于构建跨平台应用的Vue框架</li>
              <li><strong>Vue DevTools</strong>：浏览器扩展，用于调试Vue应用</li>
            </ul>
            
            <h3 className="text-xl font-semibold mb-2 mt-6">Vue的设计哲学</h3>
            <p className="mb-4">
              Vue的设计哲学可以概括为以下几点：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>渐进式采用</strong>：可以逐步集成到项目中，从简单的页面增强到完整的SPA</li>
              <li><strong>易于理解</strong>：学习曲线平缓，文档详细，API设计直观</li>
              <li><strong>灵活性</strong>：不强制特定的代码组织方式，可以根据项目需求选择合适的方法</li>
              <li><strong>高性能</strong>：虚拟DOM和响应式系统确保高效的DOM更新</li>
              <li><strong>可维护性</strong>：组件化架构促进代码重用和维护</li>
            </ul>
            
            <p className="mb-4">
              这种设计哲学使Vue成为一个灵活且强大的框架，适用于从小型项目到大型企业应用的各种场景。
            </p>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Vue.js应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">单页应用程序(SPA)</h3>
                </div>
                <p className="text-gray-600">
                  Vue.js非常适合构建单页应用程序，用户可以在不重新加载整个页面的情况下与应用交互。结合Vue Router，开发者可以创建具有多个视图和路由的复杂应用。Vue的响应式系统确保数据变化时UI自动更新，提供流畅的用户体验。典型应用包括管理后台、在线工具和内容密集型网站。例如，GitLab的Web界面就是使用Vue构建的SPA，提供了复杂的代码管理功能和流畅的用户体验。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">渐进式增强现有网站</h3>
                </div>
                <p className="text-gray-600">
                  Vue的渐进式特性使其成为增强现有网站的理想选择。不需要重写整个应用，可以在特定部分引入Vue来添加交互性和动态功能。这种方法特别适合传统网站的现代化过程，可以逐步迁移而不中断服务。例如，可以在产品页面添加动态筛选功能，在表单中添加实时验证，或在静态内容中嵌入交互式数据可视化。许多企业选择这种方式来逐步更新其遗留系统，同时保持业务连续性。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">电子商务平台</h3>
                </div>
                <p className="text-gray-600">
                  Vue.js适合构建现代电子商务平台，提供流畅的购物体验。Vue的组件系统使开发者能够创建可重用的产品卡片、购物车组件和结账流程。Vuex可以管理复杂的应用状态，如购物车内容、用户偏好和订单信息。结合服务器端渲染（通过Nuxt.js），可以优化SEO并提高首屏加载速度，这对电子商务网站至关重要。知名案例包括使用Vue的购物平台Alibaba Tmall和小米商城，它们处理大量产品和高并发流量。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">内容管理系统(CMS)</h3>
                </div>
                <p className="text-gray-600">
                  Vue.js是构建现代内容管理系统前端的绝佳选择。其组件化架构使创建复杂的编辑界面变得简单，如所见即所得编辑器、内容预览和媒体管理器。Vue的响应式特性确保内容变化实时反映在预览中。结合GraphQL或REST API，Vue可以高效地与后端服务通信，提供流畅的内容管理体验。许多现代CMS如Strapi和Directus提供Vue组件或使用Vue构建其管理界面，使内容创作者能够高效地管理数字资产。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">企业内部应用</h3>
                </div>
                <p className="text-gray-600">
                  Vue.js适合开发企业内部应用，如仪表板、报表系统和业务流程管理工具。Vue的学习曲线相对平缓，使开发团队能够快速适应并提高生产力。企业级UI库如Element Plus和Vuetify提供了符合企业标准的组件，加速开发过程。Vue的模块化架构支持大型团队协作，每个团队可以负责特定功能模块。例如，阿里巴巴、腾讯和百度等大型企业都在内部系统中使用Vue，证明了其在企业环境中的适用性和可扩展性。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">移动应用开发</h3>
                </div>
                <p className="text-gray-600">
                  结合Ionic、Capacitor或NativeScript等框架，Vue.js可用于构建跨平台移动应用。这些解决方案允许开发者使用Vue的熟悉语法创建原生体验的移动应用。Quasar框架专为Vue设计，支持从单一代码库构建Web、移动和桌面应用。Vue的轻量级特性确保移动应用性能良好，即使在低端设备上也能流畅运行。这种方法特别适合需要在多个平台上保持一致用户体验的企业，同时降低维护多个代码库的成本。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-pink-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-pink-600" />
                  </div>
                  <h3 className="text-lg font-semibold">实时应用</h3>
                </div>
                <p className="text-gray-600">
                  Vue.js结合WebSocket或Firebase等实时数据服务，非常适合构建实时应用，如聊天应用、协作工具和实时仪表板。Vue的响应式系统能够高效处理频繁的数据更新，确保UI与后端数据保持同步。Vuex提供了管理复杂实时数据流的机制，使状态管理变得简单。例如，实时协作工具Figma的Web版本使用Vue构建部分界面，支持多用户同时编辑设计文件。这类应用展示了Vue处理实时数据和复杂用户交互的能力。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-indigo-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold">静态站点生成</h3>
                </div>
                <p className="text-gray-600">
                  通过Nuxt.js或VuePress等工具，Vue.js可用于构建静态生成的网站，如文档站点、博客和营销页面。这些工具在构建时预渲染页面，生成静态HTML文件，提供极快的加载速度和优秀的SEO表现。同时保留了Vue的交互性，可以在客户端"激活"成为完全动态的应用。VuePress专为技术文档设计，提供了内置的Markdown支持和主题系统。Vue.js官方文档就是使用VuePress构建的，展示了这种方法的有效性和性能优势。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Vue.js优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">易于学习和使用</h4>
                    <p className="text-gray-600">Vue.js拥有相对平缓的学习曲线，特别是对于已经熟悉HTML、CSS和JavaScript的开发者。其模板语法直观，类似于增强版的HTML，使新手能够快速上手。Vue的官方文档质量极高，提供了详细的指南、示例和API参考，被广泛认为是前端框架中最好的文档之一。渐进式采用的理念允许开发者逐步学习和应用Vue的功能，而不必一次掌握所有概念。这种易用性使团队能够更快地适应并提高生产力。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">灵活性和渐进式框架</h4>
                    <p className="text-gray-600">Vue.js的渐进式特性是其最大优势之一。它可以作为简单的库用于增强现有页面，也可以作为完整框架构建复杂的单页应用。Vue不强制特定的代码组织方式或项目结构，给予开发者更多自由。它可以与其他库和现有项目轻松集成，不需要完全重写应用。Vue提供了多种API风格（Options API和Composition API），允许开发者根据项目需求和个人偏好选择合适的方式。这种灵活性使Vue适用于各种规模和类型的项目。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">高性能和轻量级</h4>
                    <p className="text-gray-600">Vue.js以其出色的性能和小巧的体积著称。Vue 3的核心运行时仅约10KB（min+gzip），比许多竞争框架小得多。虚拟DOM实现和响应式系统确保高效的DOM更新，最小化不必要的渲染。Vue 3引入的编译时优化，如静态树提升和基于Proxy的响应式系统，进一步提高了性能。Vue的按需渲染机制只更新实际变化的组件，而不是整个组件树。这些性能优势使Vue能够处理复杂的UI和大量数据，同时保持流畅的用户体验。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的生态系统</h4>
                    <p className="text-gray-600">Vue拥有丰富且不断发展的生态系统，包括官方维护的核心库和社区贡献的工具。官方库如Vue Router（路由）、Vuex/Pinia（状态管理）、Vue CLI/Vite（项目脚手架）和Vue DevTools（调试工具）提供了完整的开发解决方案。Nuxt.js提供了服务器端渲染和静态站点生成功能，简化了复杂应用的开发。UI组件库如Vuetify、Element Plus和Quasar加速了界面开发。活跃的社区不断创造新工具和库，解决各种开发需求。这个生态系统使开发者能够快速构建功能完整的应用，而不必从头开始。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">单文件组件的优雅设计</h4>
                    <p className="text-gray-600">Vue的单文件组件（SFC）是其最具特色的设计之一，将模板、脚本和样式封装在一个.vue文件中。这种设计促进了关注点分离，同时保持了相关代码的紧密组织。SFC提供了完整的语法高亮和代码补全支持，改善了开发体验。CSS作用域使样式默认只应用于当前组件，避免了全局样式污染。预处理器支持允许在组件中使用Sass、Less、TypeScript等。这种组件化方法使代码更易于理解、测试和维护，特别适合团队协作开发。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">双向数据绑定与响应式</h4>
                    <p className="text-gray-600">Vue提供了简单而强大的双向数据绑定，使UI和状态保持同步变得简单。v-model指令简化了表单处理和用户输入，减少了样板代码。Vue的响应式系统自动追踪依赖关系，确保数据变化时相关视图自动更新。Vue 3的响应式系统基于ES6 Proxy，提供了更全面的响应式覆盖，包括对数组和对象的深层变化。计算属性和侦听器提供了声明式的方式处理派生状态和副作用。这些特性大大简化了状态管理，使开发者能够专注于业务逻辑而非DOM操作。</p>
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
                    <h4 className="font-medium mb-1">相对较小的市场份额</h4>
                    <p className="text-gray-600">尽管Vue在全球范围内受欢迎，但其市场份额仍然小于React，特别是在北美和欧洲市场。这可能导致工作机会相对较少，特别是在某些地区。较小的用户基础也意味着社区资源（如教程、文章和第三方库）可能不如React丰富。在某些企业环境中，Vue可能不被视为"安全"的选择，因为它不是由大型科技公司（如Facebook或Google）支持。然而，Vue在中国和亚洲市场非常流行，那里的就业机会和社区支持更加丰富。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">大型应用的规模化挑战</h4>
                    <p className="text-gray-600">在大型、复杂的企业应用中，Vue的灵活性有时可能成为双刃剑。缺乏严格的约定可能导致不同团队采用不同的模式和实践，增加维护难度。Vue的官方风格指南提供了一些最佳实践，但不如Angular那样强制执行特定的架构模式。在大型团队中，需要额外的努力来确保代码一致性和可维护性。状态管理在复杂应用中可能变得复杂，尽管Vuex/Pinia提供了解决方案。Vue 3的Composition API部分解决了这些问题，但仍需要团队自律和良好的架构设计。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">TypeScript集成的历史问题</h4>
                    <p className="text-gray-600">虽然Vue 3显著改善了TypeScript支持，但Vue 2的TypeScript集成相对较弱。在Vue 2中，类型推断和IDE支持不如React或Angular完善，特别是在使用Options API时。Vue 3使用TypeScript重写并引入了Composition API，大大改善了类型支持，但仍有一些边缘情况需要额外配置。迁移现有Vue 2项目到TypeScript可能需要大量工作。对于高度依赖类型安全的团队，这些历史问题可能是一个考虑因素，尽管Vue 3已经解决了大部分问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">过渡期的生态系统分裂</h4>
                    <p className="text-gray-600">Vue 2到Vue 3的过渡期导致了生态系统的暂时分裂，一些库和插件需要时间更新以支持Vue 3。虽然核心团队提供了迁移构建和兼容性工具，但升级大型项目仍可能面临挑战。一些第三方库可能只支持特定版本的Vue，限制了选择。Vue 2和Vue 3之间的API差异（特别是内部API）可能导致依赖特定实现细节的代码出现问题。随着时间推移，这个问题正在逐渐解决，但对于需要使用特定库的项目来说仍可能是一个考虑因素。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">移动原生开发的间接支持</h4>
                    <p className="text-gray-600">与React（通过React Native）相比，Vue在原生移动应用开发方面的支持相对间接。虽然有NativeScript-Vue和Ionic Vue等解决方案，但它们的成熟度和社区支持不如React Native。这些框架可能在性能、原生API访问和生态系统丰富度方面存在限制。对于主要关注移动应用开发的团队，这可能是选择Vue时的一个缺点。然而，对于主要是Web应用并需要有限移动功能的项目，现有解决方案通常足够满足需求。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">社区驱动的可持续性问题</h4>
                    <p className="text-gray-600">与由大公司支持的框架不同，Vue主要依靠社区赞助和贡献。这可能引发对长期可持续性和资源的担忧，特别是在企业环境中。核心团队相对较小，可能导致新功能和修复的开发速度较慢。虽然Vue有许多企业用户，但缺乏单一大公司的支持可能被视为风险。然而，Vue的社区驱动模式也有优势，如更好地响应社区需求和避免单一公司的利益影响。目前Vue的发展势头强劲，这些担忧在实践中很少成为实际问题。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Vue.js学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和指南
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://cn.vuejs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue.js官方文档</h4>
                      <p className="text-sm text-gray-600">Vue.js的官方中文文档，提供全面的指南、API参考和示例。被广泛认为是前端框架中最好的文档之一。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://vuejs.org/tutorial/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue.js官方教程</h4>
                      <p className="text-sm text-gray-600">交互式教程，通过实践学习Vue的基础知识。包含在线编辑器，可以直接在浏览器中尝试代码。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://vueschool.io/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue School</h4>
                      <p className="text-sm text-gray-600">由Vue核心团队成员创建的高质量视频课程平台，涵盖从基础到高级的Vue主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Awesome Vue</h4>
                      <p className="text-sm text-gray-600">精选的Vue.js资源列表，包括组件、库、教程和示例项目。</p>
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
                  <a href="https://scrimba.com/learn/vuejs" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Scrimba - Vue.js课程</h4>
                      <p className="text-sm text-gray-600">交互式视频课程，可以在视频播放过程中随时暂停并编辑代码。提供免费和付费课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.vuemastery.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue Mastery</h4>
                      <p className="text-sm text-gray-600">高质量的Vue视频教程平台，由Vue核心团队推荐。提供从入门到高级的课程，部分内容免费。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://frontendmasters.com/courses/?q=vue" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Frontend Masters</h4>
                      <p className="text-sm text-gray-600">提供深入的Vue.js课程，由行业专家讲授。适合想要深入理解Vue原理的开发者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/learn-vue-js" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - Vue.js课程</h4>
                      <p className="text-sm text-gray-600">交互式编码环境中的结构化Vue.js课程，适合初学者。</p>
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
                    <h4 className="font-medium">《Vue.js实战》</h4>
                    <p className="text-sm text-gray-600">作者：梁灏</p>
                    <p className="text-sm text-gray-600">全面介绍Vue.js的基础知识和实战技巧，适合中文读者的入门书籍。包含大量实例和最佳实践。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Vue.js设计与实现》</h4>
                    <p className="text-sm text-gray-600">作者：霍春阳（HcySunYang）</p>
                    <p className="text-sm text-gray-600">深入剖析Vue.js的设计原理和实现细节，适合想要理解Vue内部工作机制的开发者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Vue.js 3 Cookbook》</h4>
                    <p className="text-sm text-gray-600">作者：Heitor Ramon Ribeiro</p>
                    <p className="text-sm text-gray-600">提供80多个实用的Vue 3配方，涵盖组件设计、状态管理、路由和测试等主题。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Testing Vue.js Applications》</h4>
                    <p className="text-sm text-gray-600">作者：Edd Yerburgh（Vue测试工具的维护者）</p>
                    <p className="text-sm text-gray-600">全面介绍Vue应用的测试策略和实践，包括单元测试、组件测试和端到端测试。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  在线教程和博客
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://juejin.cn/tag/Vue.js" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">掘金 - Vue.js专栏</h4>
                      <p className="text-sm text-gray-600">中文技术社区，包含大量Vue.js相关文章、教程和实践经验分享。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://css-tricks.com/tag/vue/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">CSS-Tricks - Vue文章</h4>
                      <p className="text-sm text-gray-600">提供高质量的Vue.js教程和技巧，特别关注UI和交互设计方面。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://learnvue.co/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">LearnVue</h4>
                      <p className="text-sm text-gray-600">专注于Vue.js的教程网站，提供文章、视频和代码示例，涵盖基础和高级主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://vuejsdevelopers.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue.js Developers</h4>
                      <p className="text-sm text-gray-600">提供Vue.js教程、技巧和最佳实践的博客，适合各级开发者。</p>
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
                  <a href="https://devtools.vuejs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue DevTools</h4>
                      <p className="text-sm text-gray-600">浏览器扩展，用于调试Vue应用。可以检查组件层次结构、状态、事件和性能。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://vite.dev/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vite</h4>
                      <p className="text-sm text-gray-600">现代前端构建工具，由Vue创建者开发，提供极快的开发服务器和优化的构建。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://pinia.vuejs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pinia</h4>
                      <p className="text-sm text-gray-600">Vue的官方状态管理库，是Vuex的继任者，提供更简单的API和更好的TypeScript支持。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Nuxt.js</h4>
                      <p className="text-sm text-gray-600">基于Vue的框架，简化服务器端渲染、静态站点生成和开发体验。</p>
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
                  <a href="https://forum.vuejs.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue Forum</h4>
                      <p className="text-sm text-gray-600">官方Vue.js论坛，可以提问、分享知识和与社区交流。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://stackoverflow.com/questions/tagged/vue.js" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow - Vue.js标签</h4>
                      <p className="text-sm text-gray-600">大量Vue.js相关问题和解答，是解决具体问题的宝贵资源。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://discord.com/invite/HBherRA" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Vue Land Discord</h4>
                      <p className="text-sm text-gray-600">Vue.js官方Discord服务器，提供实时讨论和帮助。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/vuejs/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit - r/vuejs</h4>
                      <p className="text-sm text-gray-600">Vue.js的Reddit社区，分享新闻、教程和讨论。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Vue.js案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">基础组件示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">响应式数据绑定</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<!-- 单文件组件 (.vue) -->
<template>
  <div>
    <h2>{{ title }}</h2>
    <p>{{ message }}</p>
    <input v-model="message" placeholder="编辑我">
    <button @click="reverseMessage">反转消息</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Vue.js响应式演示',
      message: '你好，Vue!'
    }
  },
  methods: {
    reverseMessage() {
      this.message = this.message.split('').reverse().join('')
    }
  }
}
</script>

<style scoped>
div {
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
}
input {
  margin: 10px 0;
  padding: 5px;
}
button {
  background-color: #42b983;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
}
</style>`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">组件通信</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<!-- 父组件 -->
<template>
  <div>
    <h2>父子组件通信</h2>
    <p>计数: {{ count }}</p>
    <child-component 
      :count="count"
      @increment="incrementCount"
    />
  </div>
</template>

<script>
import ChildComponent from './ChildComponent.vue'

export default {
  components: {
    ChildComponent
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    incrementCount(step) {
      this.count += step
    }
  }
}
</script>

<!-- 子组件 (ChildComponent.vue) -->
<template>
  <div class="child">
    <p>子组件接收的计数: {{ count }}</p>
    <button @click="$emit('increment', 1)">+1</button>
    <button @click="$emit('increment', 5)">+5</button>
  </div>
</template>

<script>
export default {
  props: {
    count: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.child {
  margin-top: 20px;
  padding: 15px;
  background-color: #f5f5f5;
  border-radius: 4px;
}
button {
  margin-right: 10px;
}
</style>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Vue 3 Composition API示例</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`<template>
  <div>
    <h2>待办事项列表</h2>
    <div class="add-todo">
      <input 
        v-model="newTodo" 
        @keyup.enter="addTodo" 
        placeholder="添加新待办事项"
      />
      <button @click="addTodo">添加</button>
    </div>
    
    <div class="filters">
      <button 
        :class="{ active: filter === 'all' }" 
        @click="filter = 'all'"
      >
        全部
      </button>
      <button 
        :class="{ active: filter === 'active' }" 
        @click="filter = 'active'"
      >
        未完成
      </button>
      <button 
        :class="{ active: filter === 'completed' }" 
        @click="filter = 'completed'"
      >
        已完成
      </button>
    </div>
    
    <ul class="todo-list">
      <li v-for="todo in filteredTodos" :key="todo.id">
        <input 
          type="checkbox" 
          :checked="todo.completed" 
          @change="toggleTodo(todo)"
        />
        <span :class="{ completed: todo.completed }">
          {{ todo.text }}
        </span>
        <button @click="removeTodo(todo)">删除</button>
      </li>
    </ul>
    
    <div class="todo-count" v-if="todos.length > 0">
      剩余 {{ activeTodosCount }} 项未完成
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 响应式状态
const newTodo = ref('')
const todos = ref([
  { id: 1, text: '学习Vue基础', completed: true },
  { id: 2, text: '学习Composition API', completed: false },
  { id: 3, text: '构建Todo应用', completed: false }
])
const filter = ref('all')

// 计算属性
const filteredTodos = computed(() => {
  switch (filter.value) {
    case 'active':
      return todos.value.filter(todo => !todo.completed)
    case 'completed':
      return todos.value.filter(todo => todo.completed)
    default:
      return todos.value
  }
})

const activeTodosCount = computed(() => {
  return todos.value.filter(todo => !todo.completed).length
})

// 方法
function addTodo() {
  const text = newTodo.value.trim()
  if (text) {
    const id = todos.value.length ? Math.max(...todos.value.map(t => t.id)) + 1 : 1
    todos.value.push({ id, text, completed: false })
    newTodo.value = ''
  }
}

function toggleTodo(todo) {
  todo.completed = !todo.completed
}

function removeTodo(todo) {
  const index = todos.value.findIndex(t => t.id === todo.id)
  if (index !== -1) {
    todos.value.splice(index, 1)
  }
}
</script>

<style scoped>
.add-todo {
  margin-bottom: 20px;
}
input {
  padding: 8px;
  width: 70%;
}
button {
  padding: 8px 12px;
  margin-left: 5px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
.filters {
  margin-bottom: 15px;
}
.filters button {
  background-color: #f5f5f5;
  color: #333;
  margin-right: 5px;
}
.filters button.active {
  background-color: #42b983;
  color: white;
}
.todo-list {
  list-style: none;
  padding: 0;
}
.todo-list li {
  display: flex;
  align-items: center;
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}
.todo-list span {
  flex-grow: 1;
  margin: 0 10px;
}
.todo-list span.completed {
  text-decoration: line-through;
  color: #999;
}
.todo-list button {
  background-color: #ff6b6b;
}
.todo-count {
  margin-top: 20px;
  color: #666;
}
</style>`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Vuex状态管理示例</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`// store/index.js
import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0,
    todos: [],
    loading: false,
    error: null
  },
  
  getters: {
    completedTodos: state => {
      return state.todos.filter(todo => todo.completed)
    },
    activeTodos: state => {
      return state.todos.filter(todo => !todo.completed)
    },
    totalTodos: state => {
      return state.todos.length
    }
  },
  
  mutations: {
    INCREMENT(state, amount = 1) {
      state.count += amount
    },
    DECREMENT(state, amount = 1) {
      state.count -= amount
    },
    SET_TODOS(state, todos) {
      state.todos = todos
    },
    ADD_TODO(state, todo) {
      state.todos.push(todo)
    },
    TOGGLE_TODO(state, todoId) {
      const todo = state.todos.find(todo => todo.id === todoId)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    REMOVE_TODO(state, todoId) {
      state.todos = state.todos.filter(todo => todo.id !== todoId)
    },
    SET_LOADING(state, status) {
      state.loading = status
    },
    SET_ERROR(state, error) {
      state.error = error
    }
  },
  
  actions: {
    increment({ commit }, amount) {
      commit('INCREMENT', amount)
    },
    decrement({ commit }, amount) {
      commit('DECREMENT', amount)
    },
    async fetchTodos({ commit }) {
      commit('SET_LOADING', true)
      commit('SET_ERROR', null)
      
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
        if (!response.ok) throw new Error('Failed to fetch todos')
        
        const todos = await response.json()
        commit('SET_TODOS', todos)
      } catch (error) {
        commit('SET_ERROR', error.message)
        console.error('Error fetching todos:', error)
      } finally {
        commit('SET_LOADING', false)
      }
    },
    addTodo({ commit }, todoText) {
      const newTodo = {
        id: Date.now(),
        title: todoText,
        completed: false
      }
      commit('ADD_TODO', newTodo)
    },
    toggleTodo({ commit }, todoId) {
      commit('TOGGLE_TODO', todoId)
    },
    removeTodo({ commit }, todoId) {
      commit('REMOVE_TODO', todoId)
    }
  }
})

// 在组件中使用
<template>
  <div>
    <h2>Vuex示例</h2>
    
    <div class="counter">
      <h3>计数器: {{ count }}</h3>
      <button @click="increment(1)">+1</button>
      <button @click="increment(5)">+5</button>
      <button @click="decrement(1)">-1</button>
    </div>
    
    <div class="todos">
      <h3>待办事项 ({{ totalTodos }})</h3>
      <div v-if="loading">加载中...</div>
      <div v-if="error" class="error">{{ error }}</div>
      
      <div class="add-todo">
        <input v-model="newTodo" @keyup.enter="addNewTodo" placeholder="添加新待办事项" />
        <button @click="addNewTodo">添加</button>
      </div>
      
      <ul v-if="!loading && !error">
        <li v-for="todo in todos" :key="todo.id">
          <input 
            type="checkbox" 
            :checked="todo.completed" 
            @change="toggleTodo(todo.id)"
          />
          <span :class="{ completed: todo.completed }">
            {{ todo.title }}
          </span>
          <button @click="removeTodo(todo.id)">删除</button>
        </li>
      </ul>
      
      <div class="stats">
        <p>已完成: {{ completedTodos.length }}</p>
        <p>未完成: {{ activeTodos.length }}</p>
      </div>
      
      <button @click="fetchTodos" class="fetch-btn">
        刷新数据
      </button>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      newTodo: ''
    }
  },
  computed: {
    ...mapState(['count', 'todos', 'loading', 'error']),
    ...mapGetters(['completedTodos', 'activeTodos', 'totalTodos'])
  },
  methods: {
    ...mapActions(['increment', 'decrement', 'fetchTodos', 'toggleTodo', 'removeTodo']),
    addNewTodo() {
      if (this.newTodo.trim()) {
        this.$store.dispatch('addTodo', this.newTodo.trim())
        this.newTodo = ''
      }
    }
  },
  mounted() {
    this.fetchTodos()
  }
}
</script>`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Vue Router示例</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`// router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import UserProfile from '../views/UserProfile.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/users/:id',
    name: 'UserProfile',
    component: UserProfile,
    props: true,
    // 路由守卫示例
    beforeEnter: (to, from, next) => {
      // 检查用户ID是否为数字
      const userId = parseInt(to.params.id)
      if (isNaN(userId)) {
        next({ name: 'NotFound' })
      } else {
        next()
      }
    }
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    // 路由懒加载示例
    component: () => import('../views/Dashboard.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

// 全局前置守卫
router.beforeEach((to, from, next) => {
  // 检查路由是否需要认证
  if (to.meta.requiresAuth) {
    // 这里应该检查用户是否已登录
    const isAuthenticated = localStorage.getItem('user') !== null
    
    if (!isAuthenticated) {
      // 如果未登录，重定向到登录页
      next({ 
        path: '/login', 
        query: { redirect: to.fullPath } 
      })
    } else {
      // 已登录，允许访问
      next()
    }
  } else {
    // 不需要认证的路由
    next()
  }
})

export default router

// App.vue
<template>
  <div id="app">
    <header>
      <nav>
        <router-link to="/">首页</router-link> |
        <router-link to="/about">关于</router-link> |
        <router-link to="/dashboard">仪表盘</router-link> |
        <router-link :to="{ name: 'UserProfile', params: { id: 1 } }">
          用户资料
        </router-link>
      </nav>
    </header>
    
    <main>
      <!-- 路由视图 -->
      <router-view v-slot="{ Component }">
        <!-- 过渡效果 -->
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

// UserProfile.vue
<template>
  <div class="user-profile">
    <h2>用户资料</h2>
    <div v-if="loading">加载中...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else class="user-details">
      <img :src="user.avatar" :alt="user.name" class="avatar">
      <h3>{{ user.name }}</h3>
      <p>{{ user.email }}</p>
      <p>{{ user.bio }}</p>
      
      <router-link :to="{ name: 'UserPosts', params: { id } }">
        查看用户文章
      </router-link>
    </div>
    
    <button @click="goBack">返回</button>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      user: null,
      loading: true,
      error: null
    }
  },
  methods: {
    async fetchUser() {
      this.loading = true
      this.error = null
      
      try {
        // 模拟API调用
        const response = await fetch(\`https://api.example.com/users/\${this.id}\`)
        if (!response.ok) throw new Error('Failed to fetch user')
        
        this.user = await response.json()
      } catch (err) {
        this.error = err.message
        console.error('Error fetching user:', err)
      } finally {
        this.loading = false
      }
    },
    goBack() {
      this.$router.go(-1)
    }
  },
  created() {
    this.fetchUser()
  },
  watch: {
    // 当路由参数变化时重新获取数据
    id: {
      handler: 'fetchUser',
      immediate: true
    }
  }
}
</script>`}
                  </pre>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">实际项目案例</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">GitLab截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">GitLab</h4>
                      <p className="text-sm text-gray-600">GitLab的Web界面使用Vue.js构建，展示了Vue在大型企业应用中的应用。GitLab是一个完整的DevOps平台，提供代码仓库、CI/CD、问题跟踪等功能。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">小米商城截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">小米商城</h4>
                      <p className="text-sm text-gray-600">小米的官方电子商务平台使用Vue.js构建，展示了Vue在高流量电子商务网站中的应用。网站提供流畅的购物体验和复杂的产品展示功能。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Laravel Nova截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Laravel Nova</h4>
                      <p className="text-sm text-gray-600">Laravel Nova是一个管理面板，使用Vue.js构建其前端界面。展示了Vue在构建复杂管理界面中的应用，包括数据表格、表单和仪表盘等功能。</p>
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
                  <p className="mt-2 text-sm text-gray-600">Vue.js的基础语言，掌握JavaScript对于理解Vue的工作原理和编写高效代码至关重要。</p>
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
                  <p className="mt-2 text-sm text-gray-600">另一个流行的前端框架，与Vue有一些相似之处，但采用不同的设计理念和API风格。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/typescript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">TypeScript</h3>
                  <p className="mt-2 text-sm text-gray-600">JavaScript的超集，添加了静态类型。Vue 3提供了出色的TypeScript支持，可以提高代码质量和开发体验。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/node-js">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Node.js</h3>
                  <p className="mt-2 text-sm text-gray-600">服务器端JavaScript运行时，常用于构建Vue应用的后端API和开发工具。</p>
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
                如果你对Vue.js还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Vue.js适合初学者吗？与React相比有什么优势？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Vue.js非常适合初学者，它的学习曲线相对平缓，特别是对于已经熟悉HTML、CSS和JavaScript的开发者。与React相比，Vue的模板语法更接近标准HTML，更容易理解；Vue提供了更多开箱即用的功能，如双向数据绑定；Vue的官方文档质量极高，被广泛认为是前端框架中最好的文档之一。Vue的渐进式特性也允许你逐步采用，从简单的页面增强开始，而不必一次掌握所有概念。如果你是前端开发新手，或者喜欢更直观的编程模型，Vue可能是更好的选择。</p>
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
