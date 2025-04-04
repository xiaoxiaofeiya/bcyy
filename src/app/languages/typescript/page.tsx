'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function TypeScriptPage() {
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
                <span className="text-gray-700">TypeScript</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">TypeScript</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              类型安全
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            TypeScript是JavaScript的超集，添加了静态类型定义，提高了代码的可维护性和可靠性。它由Microsoft开发和维护，适用于大型应用程序开发，能够在开发阶段捕获潜在错误。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              对于熟悉JavaScript的开发者来说相对容易上手，但需要理解类型系统和面向对象编程概念。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-5/6"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">极好</span>
            </div>
            <p className="mt-4 text-gray-600">
              TypeScript在企业级前端开发中广泛应用，需求量大，尤其在使用Angular、React和Vue等框架的项目中。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">很高</span>
            </div>
            <p className="mt-4 text-gray-600">
              熟练的TypeScript开发者薪资在前端开发领域处于较高水平，尤其是在大型企业和科技公司。
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
            <h2 className="text-2xl font-bold mb-4">TypeScript简介</h2>
            <p className="mb-4">
              TypeScript是一种由Microsoft开发和维护的开源编程语言，它是JavaScript的超集，添加了静态类型定义。TypeScript于2012年首次发布，由C#的首席架构师Anders Hejlsberg领导开发。它设计的目标是解决JavaScript在大型应用程序开发中的一些局限性，特别是缺乏静态类型检查。
            </p>
            <p className="mb-4">
              作为JavaScript的超集，任何有效的JavaScript代码也是有效的TypeScript代码，这使得从JavaScript迁移到TypeScript变得相对容易。TypeScript代码需要通过编译器转换为JavaScript，然后才能在浏览器或Node.js环境中运行。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">TypeScript的历史</h3>
            <p className="mb-4">
              TypeScript的发展历程可以分为几个重要阶段：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>2010年：Microsoft内部开始开发TypeScript，旨在为JavaScript添加类型系统。</li>
              <li>2012年10月：TypeScript 0.8版本首次公开发布，引入了基本的类型注解和接口。</li>
              <li>2014年4月：TypeScript 1.0发布，标志着语言的稳定性和成熟度。</li>
              <li>2016年9月：TypeScript 2.0发布，引入了非空类型、标记联合类型等重要特性。</li>
              <li>2018年7月：TypeScript 3.0发布，增加了元组类型的改进和rest参数。</li>
              <li>2020年5月：TypeScript 3.9发布，改进了类型推断和编辑器性能。</li>
              <li>2021年2月：TypeScript 4.2发布，增强了类型系统和开发者体验。</li>
              <li>2023年1月：TypeScript 5.0发布，引入了装饰器、const类型参数等新特性。</li>
            </ul>
            <p className="mb-4">
              随着时间的推移，TypeScript获得了广泛的采用，特别是在大型前端项目中。Angular框架从2.0版本开始完全采用TypeScript开发，React和Vue等其他流行框架也提供了TypeScript支持。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">TypeScript的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>静态类型：TypeScript允许为变量、函数参数和返回值定义类型，在编译时捕获类型错误。</li>
              <li>类型推断：即使没有显式类型注解，TypeScript也能根据上下文推断变量的类型。</li>
              <li>接口和类型别名：提供了定义复杂类型结构的方法，增强了代码的可读性和可维护性。</li>
              <li>泛型：支持创建可重用的组件，这些组件可以与多种类型一起工作。</li>
              <li>枚举：允许定义一组命名常量，使代码更具可读性和可维护性。</li>
              <li>命名空间和模块：提供了组织和管理代码的机制，避免全局命名空间污染。</li>
              <li>装饰器：实验性功能，允许注解和修改类及其成员。</li>
              <li>高级类型：联合类型、交叉类型、条件类型等，提供了更强大的类型表达能力。</li>
              <li>与JavaScript的兼容性：任何JavaScript代码都是有效的TypeScript代码，便于渐进式采用。</li>
              <li>强大的工具支持：提供了丰富的IDE支持，包括代码补全、重构和导航功能。</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">TypeScript应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">大型前端应用开发</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript在大型前端应用开发中表现出色，特别是在团队协作环境中。静态类型系统使代码更易于理解和维护，减少了运行时错误。Angular完全采用TypeScript构建，而React和Vue等框架也提供了TypeScript支持。大型企业如Microsoft、Google、Airbnb和Slack等都在其前端项目中使用TypeScript。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Node.js后端开发</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript在Node.js后端开发中越来越受欢迎，特别是使用Express、NestJS或Fastify等框架时。类型安全和面向对象特性使得构建复杂的API和微服务变得更加容易。TypeScript的类型定义有助于确保API契约的一致性，减少前后端集成问题。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">全栈应用开发</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript非常适合全栈开发，允许在前端和后端使用相同的语言和共享类型定义。这种方法减少了上下文切换成本，提高了开发效率。框架如Next.js和Remix支持TypeScript，使得构建全栈应用变得更加简单。类型定义可以在前后端之间共享，确保数据结构的一致性。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">库和框架开发</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript是开发JavaScript库和框架的理想选择，因为它提供了清晰的API类型定义和更好的开发者体验。许多流行的库和框架，如Deno、RxJS和Storybook，都是用TypeScript编写的。类型定义文件（.d.ts）使得库的使用变得更加简单，提供了自动完成和类型检查功能。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">移动应用开发</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript在跨平台移动应用开发中广泛应用，特别是与React Native、NativeScript或Ionic等框架结合使用时。类型安全有助于减少移动应用中的运行时错误，提高应用质量。TypeScript的接口和类型定义使得与原生API的集成更加安全和可靠。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">桌面应用开发</h3>
                </div>
                <p className="text-gray-600">
                  TypeScript可以用于开发跨平台桌面应用，特别是与Electron或Tauri等框架结合使用时。类型系统有助于管理复杂的UI状态和业务逻辑，减少错误。许多流行的桌面应用，如Visual Studio Code和Slack桌面客户端，都是使用TypeScript和Electron构建的。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">TypeScript优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">静态类型检查</h4>
                    <p className="text-gray-600">TypeScript的静态类型系统在编译时捕获错误，减少了运行时错误和调试时间，提高了代码质量。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">增强的IDE支持</h4>
                    <p className="text-gray-600">类型信息使IDE能够提供更好的代码补全、重构工具和导航功能，提高开发效率。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">更好的代码文档</h4>
                    <p className="text-gray-600">类型注解和接口定义作为内置文档，使代码更易于理解和维护，特别是在团队协作环境中。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">与JavaScript的兼容性</h4>
                    <p className="text-gray-600">作为JavaScript的超集，TypeScript允许渐进式采用，可以逐步将现有JavaScript代码转换为TypeScript。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">面向对象特性</h4>
                    <p className="text-gray-600">提供了类、接口、继承等面向对象编程特性，使代码结构更清晰，更易于组织和扩展。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的类型系统</h4>
                    <p className="text-gray-600">支持泛型、联合类型、交叉类型等高级类型特性，提供了强大的类型表达能力。</p>
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
                    <h4 className="font-medium mb-1">学习曲线</h4>
                    <p className="text-gray-600">对于不熟悉静态类型语言的JavaScript开发者来说，TypeScript有一定的学习曲线，需要理解类型系统和面向对象概念。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">编译步骤</h4>
                    <p className="text-gray-600">TypeScript需要编译为JavaScript才能运行，增加了构建过程的复杂性和开发环境设置的工作量。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">类型定义维护</h4>
                    <p className="text-gray-600">在大型项目中，维护类型定义可能变得复杂，特别是当使用第三方库时，可能需要额外的类型定义文件。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">过度工程的风险</h4>
                    <p className="text-gray-600">TypeScript的强大类型系统可能导致过度工程，创建过于复杂的类型结构，增加代码复杂性。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">运行时类型擦除</h4>
                    <p className="text-gray-600">TypeScript的类型信息在编译后被擦除，无法在运行时使用类型信息进行检查或反射。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">生态系统兼容性</h4>
                    <p className="text-gray-600">虽然情况在改善，但某些JavaScript库可能缺乏或有不完整的TypeScript类型定义，需要手动创建或修复。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">TypeScript学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.typescriptlang.org/docs/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">TypeScript官方文档</h4>
                      <p className="text-sm text-gray-600">最权威的TypeScript参考资料，包括详细的语言特性说明和示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.typescriptlang.org/play" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">TypeScript Playground</h4>
                      <p className="text-sm text-gray-600">在线编写和测试TypeScript代码的交互式环境，无需安装任何工具。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.typescriptlang.org/docs/handbook/intro.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">TypeScript手册</h4>
                      <p className="text-sm text-gray-600">全面的TypeScript指南，从基础到高级主题，适合初学者和有经验的开发者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://github.com/microsoft/TypeScript-Website" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">TypeScript GitHub仓库</h4>
                      <p className="text-sm text-gray-600">TypeScript的官方GitHub仓库，包含源代码、文档和示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-green-500" />
                  在线课程和学习平台
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.udemy.com/course/understanding-typescript/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - 理解TypeScript</h4>
                      <p className="text-sm text-gray-600">全面的TypeScript课程，从基础到高级特性，包含实践项目。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/typescript-core-language" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - TypeScript核心语言</h4>
                      <p className="text-sm text-gray-600">深入的TypeScript学习路径，涵盖语言核心特性和最佳实践。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://scrimba.com/learn/typescript" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Scrimba - TypeScript课程</h4>
                      <p className="text-sm text-gray-600">交互式TypeScript学习体验，边看边练，适合视觉学习者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/learn-typescript" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - 学习TypeScript</h4>
                      <p className="text-sm text-gray-600">互动式TypeScript入门课程，通过实践学习基础知识。</p>
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
                    <h4 className="font-medium">《Programming TypeScript》</h4>
                    <p className="text-sm text-gray-600">作者：Boris Cherny</p>
                    <p className="text-sm text-gray-600">全面介绍TypeScript的特性和最佳实践，适合有JavaScript基础的开发者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Effective TypeScript: 62 Specific Ways to Improve Your TypeScript》</h4>
                    <p className="text-sm text-gray-600">作者：Dan Vanderkam</p>
                    <p className="text-sm text-gray-600">提供62条具体的TypeScript最佳实践，帮助开发者避免常见陷阱和错误。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《TypeScript深入浅出》</h4>
                    <p className="text-sm text-gray-600">作者：王寒</p>
                    <p className="text-sm text-gray-600">中文TypeScript入门书籍，从基础到高级，包含大量示例和实践项目。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《TypeScript Cookbook》</h4>
                    <p className="text-sm text-gray-600">作者：Stefan Baumgartner</p>
                    <p className="text-sm text-gray-600">提供解决TypeScript常见问题的实用技巧和模式，适合中高级开发者。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://stackoverflow.com/questions/tagged/typescript" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow</h4>
                      <p className="text-sm text-gray-600">Stack Overflow上的TypeScript标签，可以提问和查找TypeScript相关问题的解答。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/typescript/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit TypeScript社区</h4>
                      <p className="text-sm text-gray-600">Reddit上的TypeScript社区，分享资源、讨论问题和新闻。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://discord.gg/typescript" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">TypeScript Discord</h4>
                      <p className="text-sm text-gray-600">TypeScript官方Discord服务器，可以与其他开发者交流和获取帮助。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://github.com/typescript-cheatsheets/react" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">TypeScript React备忘单</h4>
                      <p className="text-sm text-gray-600">React与TypeScript结合使用的备忘单，包含常见模式和最佳实践。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">TypeScript案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名TypeScript项目</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">VS Code截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Visual Studio Code</h4>
                      <p className="text-sm text-gray-600">Microsoft的流行代码编辑器，完全用TypeScript开发，展示了TypeScript在大型桌面应用中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Angular截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Angular</h4>
                      <p className="text-sm text-gray-600">Google的前端框架，从2.0版本开始完全采用TypeScript开发，展示了TypeScript在大型前端框架中的应用。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Deno截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Deno</h4>
                      <p className="text-sm text-gray-600">由Node.js创始人开发的安全的JavaScript和TypeScript运行时，展示了TypeScript在服务器端运行时中的应用。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">TypeScript代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 基本类型
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";
let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

// 枚举
enum Color {Red, Green, Blue}
let c: Color = Color.Green;

// Any类型
let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

// Void类型
function warnUser(): void {
    console.log("This is a warning message");
}

// Null和Undefined
let u: undefined = undefined;
let n: null = null;

// Never类型
function error(message: string): never {
    throw new Error(message);
}

// Object类型
let obj: object = {name: "John", age: 30};

// 类型断言
let someValue: any = "this is a string";
let strLength: number = (someValue as string).length;

// 函数
function add(x: number, y: number): number {
    return x + y;
}

// 可选参数和默认参数
function buildName(firstName: string, lastName?: string): string {
    return lastName ? firstName + " " + lastName : firstName;
}

// 剩余参数
function buildMessage(message: string, ...names: string[]): string {
    return message + ": " + names.join(", ");
}

// 函数类型
let myAdd: (x: number, y: number) => number = 
    function(x: number, y: number): number { return x + y; };

// 接口
interface Person {
    firstName: string;
    lastName: string;
    age?: number;  // 可选属性
    readonly id: number;  // 只读属性
}

let user: Person = {
    firstName: "John",
    lastName: "Doe",
    id: 1
};

// 类
class Animal {
    name: string;
    
    constructor(name: string) {
        this.name = name;
    }
    
    move(distanceInMeters: number = 0) {
        console.log(\`\${this.name} moved \${distanceInMeters}m.\`);
    }
}

class Dog extends Animal {
    constructor(name: string) {
        super(name);
    }
    
    bark() {
        console.log('Woof! Woof!');
    }
    
    move(distanceInMeters = 5) {
        console.log('Running...');
        super.move(distanceInMeters);
    }
}

const dog = new Dog('Rex');
dog.bark();
dog.move(10);`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">高级特性示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 泛型
function identity<T>(arg: T): T {
    return arg;
}

let output = identity<string>("myString");
let output2 = identity(42);  // 类型推断为number

// 泛型接口
interface GenericIdentityFn<T> {
    (arg: T): T;
}

let myIdentity: GenericIdentityFn<number> = identity;

// 泛型类
class GenericNumber<T> {
    zeroValue: T;
    add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function(x, y) { return x + y; };

// 联合类型
type StringOrNumber = string | number;
function padLeft(value: string, padding: StringOrNumber) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(\`Expected string or number, got '\${padding}'.\`);
}

// 交叉类型
interface ErrorHandling {
    success: boolean;
    error?: { message: string };
}

interface ArtworksData {
    artworks: { title: string }[];
}

type ArtworksResponse = ArtworksData & ErrorHandling;

// 类型别名
type Point = {
    x: number;
    y: number;
};

// 字面量类型
type Direction = "north" | "east" | "south" | "west";
function move(direction: Direction) {
    // ...
}

// 可辨识联合
interface Square {
    kind: "square";
    size: number;
}

interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}

interface Circle {
    kind: "circle";
    radius: number;
}

type Shape = Square | Rectangle | Circle;

function area(s: Shape): number {
    switch (s.kind) {
        case "square": return s.size * s.size;
        case "rectangle": return s.width * s.height;
        case "circle": return Math.PI * s.radius ** 2;
    }
}

// 索引类型
function pluck<T, K extends keyof T>(o: T, propertyNames: K[]): T[K][] {
    return propertyNames.map(n => o[n]);
}

interface Car {
    manufacturer: string;
    model: string;
    year: number;
}

let taxi: Car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2014
};

let makeAndModel = pluck(taxi, ["manufacturer", "model"]);

// 映射类型
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};

type Partial<T> = {
    [P in keyof T]?: T[P];
};

// 条件类型
type TypeName<T> =
    T extends string ? "string" :
    T extends number ? "number" :
    T extends boolean ? "boolean" :
    T extends undefined ? "undefined" :
    T extends Function ? "function" :
    "object";

type T0 = TypeName<string>;  // "string"
type T1 = TypeName<"a">;     // "string"
type T2 = TypeName<true>;    // "boolean"
type T3 = TypeName<() => void>;  // "function"
type T4 = TypeName<string[]>;    // "object"`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">TypeScript项目示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">React与TypeScript</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 组件Props类型定义
interface ButtonProps {
    text: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: 'primary' | 'secondary' | 'danger';
    size?: 'small' | 'medium' | 'large';
    className?: string;
}

// 函数组件
const Button: React.FC<ButtonProps> = ({
    text,
    onClick,
    disabled = false,
    variant = 'primary',
    size = 'medium',
    className = ''
}) => {
    const baseClasses = 'rounded font-semibold focus:outline-none';
    
    const variantClasses = {
        primary: 'bg-blue-500 text-white hover:bg-blue-600',
        secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300',
        danger: 'bg-red-500 text-white hover:bg-red-600'
    };
    
    const sizeClasses = {
        small: 'py-1 px-2 text-sm',
        medium: 'py-2 px-4 text-base',
        large: 'py-3 px-6 text-lg'
    };
    
    const classes = \`\${baseClasses} \${variantClasses[variant]} \${sizeClasses[size]} \${className}\`;
    
    return (
        <button
            className={classes}
            onClick={onClick}
            disabled={disabled}
        >
            {text}
        </button>
    );
};

// 使用状态的组件
import React, { useState, useEffect } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
}

interface UserListProps {
    initialUsers?: User[];
    onUserSelect?: (user: User) => void;
}

const UserList: React.FC<UserListProps> = ({
    initialUsers = [],
    onUserSelect
}) => {
    const [users, setUsers] = useState<User[]>(initialUsers);
    const [loading, setLoading] = useState<boolean>(initialUsers.length === 0);
    const [error, setError] = useState<string | null>(null);
    
    useEffect(() => {
        if (initialUsers.length === 0) {
            fetchUsers();
        }
    }, [initialUsers]);
    
    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await fetch('https://api.example.com/users');
            
            if (!response.ok) {
                throw new Error('Failed to fetch users');
            }
            
            const data: User[] = await response.json();
            setUsers(data);
            setError(null);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'An unknown error occurred');
        } finally {
            setLoading(false);
        }
    };
    
    const handleUserClick = (user: User) => {
        if (onUserSelect) {
            onUserSelect(user);
        }
    };
    
    if (loading) {
        return <div>Loading users...</div>;
    }
    
    if (error) {
        return <div>Error: {error}</div>;
    }
    
    return (
        <ul className="divide-y divide-gray-200">
            {users.map(user => (
                <li
                    key={user.id}
                    className="py-4 cursor-pointer hover:bg-gray-50"
                    onClick={() => handleUserClick(user)}
                >
                    <div className="flex items-center space-x-4">
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium text-gray-900 truncate">
                                {user.name}
                            </p>
                            <p className="text-sm text-gray-500 truncate">
                                {user.email}
                            </p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

// 使用上下文
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextType {
    theme: 'light' | 'dark';
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
    children: ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    
    const toggleTheme = () => {
        setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light');
    };
    
    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    
    return context;
};`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Node.js与TypeScript</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// Express应用示例
import express, { Request, Response, NextFunction } from 'express';
import { body, validationResult } from 'express-validator';

// 定义用户模型
interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// 自定义错误类
class AppError extends Error {
    statusCode: number;
    
    constructor(message: string, statusCode: number) {
        super(message);
        this.statusCode = statusCode;
        this.name = this.constructor.name;
        Error.captureStackTrace(this, this.constructor);
    }
}

// 初始化Express应用
const app = express();
app.use(express.json());

// 内存中的用户数据
let users: User[] = [
    { id: 1, name: 'John Doe', email: 'john@example.com', age: 30 },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', age: 25 }
];

// 中间件：错误处理
const errorHandler = (
    err: Error | AppError,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const statusCode = 'statusCode' in err ? err.statusCode : 500;
    
    res.status(statusCode).json({
        status: 'error',
        message: err.message,
        stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
    });
};

// 获取所有用户
app.get('/api/users', (req: Request, res: Response) => {
    res.json({
        status: 'success',
        results: users.length,
        data: { users }
    });
});

// 获取单个用户
app.get('/api/users/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const user = users.find(u => u.id === id);
    
    if (!user) {
        return next(new AppError('User not found', 404));
    }
    
    res.json({
        status: 'success',
        data: { user }
    });
});

// 创建用户
app.post(
    '/api/users',
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Please provide a valid email'),
        body('age').isInt({ min: 0 }).withMessage('Age must be a positive number')
    ],
    (req: Request, res: Response, next: NextFunction) => {
        // 验证输入
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                status: 'error',
                errors: errors.array()
            });
        }
        
        const { name, email, age } = req.body;
        
        // 检查邮箱是否已存在
        if (users.some(u => u.email === email)) {
            return next(new AppError('Email already in use', 400));
        }
        
        // 创建新用户
        const newId = users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1;
        const newUser: User = {
            id: newId,
            name,
            email,
            age
        };
        
        users.push(newUser);
        
        res.status(201).json({
            status: 'success',
            data: { user: newUser }
        });
    }
);

// 更新用户
app.patch('/api/users/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return next(new AppError('User not found', 404));
    }
    
    // 更新用户数据
    const updatedUser = { ...users[userIndex], ...req.body };
    users[userIndex] = updatedUser;
    
    res.json({
        status: 'success',
        data: { user: updatedUser }
    });
});

// 删除用户
app.delete('/api/users/:id', (req: Request, res: Response, next: NextFunction) => {
    const id = parseInt(req.params.id);
    const userIndex = users.findIndex(u => u.id === id);
    
    if (userIndex === -1) {
        return next(new AppError('User not found', 404));
    }
    
    // 删除用户
    users.splice(userIndex, 1);
    
    res.status(204).send();
});

// 注册错误处理中间件
app.use(errorHandler);

// 启动服务器
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(\`Server running on port \${PORT}\`);
});`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 相关语言推荐 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相关语言推荐</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/languages/javascript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">JavaScript</h3>
                  <p className="mt-2 text-sm text-gray-600">TypeScript的基础语言，如果你想要更简单的语法和更快的开发速度，可以考虑JavaScript。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/kotlin">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Kotlin</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢TypeScript的类型安全和现代语法，但需要开发Android应用，Kotlin是一个不错的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/swift">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Swift</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢TypeScript的类型安全和现代语法，但需要开发iOS应用，Swift是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/csharp">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">C#</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢TypeScript的类型系统和面向对象特性，但需要更强大的后端开发能力，C#是一个不错的选择。</p>
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
                如果你对TypeScript还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">TypeScript适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">TypeScript对于完全没有编程经验的初学者可能有一定挑战，因为它在JavaScript的基础上增加了类型系统的概念。如果你是编程新手，建议先学习JavaScript基础，理解变量、函数、对象等核心概念，然后再过渡到TypeScript。不过，如果你已经有其他静态类型语言（如Java或C#）的经验，学习TypeScript会相对容易。TypeScript的优势在于它可以帮助你避免许多常见的JavaScript错误，提供更好的开发工具支持，这对于构建大型应用特别有价值。总的来说，虽然有一定学习曲线，但TypeScript的长期收益使其值得投入时间学习。</p>
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
