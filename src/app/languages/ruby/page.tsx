'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function RubyPage() {
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
                <Link href="/categories/backend" className="text-gray-500 hover:text-gray-700">
                  后端开发
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">Ruby</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Ruby</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800">
              优雅简洁
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Ruby是一种动态的、开源的编程语言，注重简单性和生产力。它拥有优雅的语法，自然易读易写。Ruby的设计理念是让程序员快乐，它强调人性化的设计而非计算机的便利性。
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
              Ruby的语法直观且富有表现力，对初学者友好。然而，它的元编程和灵活性可能需要一些时间来掌握。Ruby遵循"最小惊讶原则"，使代码行为符合程序员的预期。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">良好</span>
            </div>
            <p className="mt-4 text-gray-600">
              虽然Ruby的市场份额不如Python或JavaScript，但Ruby on Rails框架在Web开发领域仍有稳定需求。许多初创公司和中型企业使用Ruby，提供了稳定的就业机会。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-4/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">优秀</span>
            </div>
            <p className="mt-4 text-gray-600">
              Ruby开发者通常能获得较高薪资，特别是熟悉Ruby on Rails的开发者。由于市场需求稳定且供应相对有限，Ruby开发者往往能获得高于平均水平的薪酬。
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
            <h2 className="text-2xl font-bold mb-4">Ruby语言简介</h2>
            <p className="mb-4">
              Ruby是一种动态的、开源的面向对象编程语言，由日本程序员松本行弘（Yukihiro "Matz" Matsumoto）于1995年创建。Ruby的设计深受Perl、Smalltalk、Eiffel、Ada和Lisp等语言的影响，旨在平衡函数式编程和命令式编程。
            </p>
            <p className="mb-4">
              Ruby的设计理念是"最小惊讶原则"（Principle of Least Astonishment），意味着语言的行为应该尽可能地符合程序员的预期。Ruby强调人性化的设计而非计算机的便利性，其目标是让程序员感到愉悦和高效。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Ruby的历史</h3>
            <p className="mb-4">
              Ruby的发展历程可以分为几个重要阶段：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>1993年：松本行弘开始构思一种新的脚本语言，结合他喜欢的语言特性。</li>
              <li>1995年2月24日：Ruby 0.95首次公开发布。</li>
              <li>1996年：Ruby-talk邮件列表创建，成为Ruby社区的重要交流平台。</li>
              <li>1998年：Ruby的第一本书在日本出版。</li>
              <li>2000年：英文版Ruby文档发布，Ruby开始在日本以外获得关注。</li>
              <li>2004年：Ruby on Rails框架发布，极大地提高了Ruby的知名度和采用率。</li>
              <li>2007年：Ruby 1.9发布，带来了显著的性能改进和新特性。</li>
              <li>2013年：Ruby 2.0发布，引入了关键字参数、模块预包含等新特性。</li>
              <li>2015年：Ruby 2.3发布，引入了安全导航操作符和冻结字符串字面量等特性。</li>
              <li>2020年：Ruby 3.0发布，带来了显著的性能改进、并发性和静态分析工具。</li>
              <li>2022年：Ruby 3.2发布，进一步改进了性能和开发体验。</li>
            </ul>
            <p className="mb-4">
              Ruby on Rails的出现是Ruby历史上的一个转折点，它使Ruby从一个相对小众的语言变成了Web开发的主流选择之一。Rails的"约定优于配置"和"不要重复自己"（DRY）原则深刻影响了Web开发领域。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Ruby的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>纯面向对象</strong>：在Ruby中，一切都是对象，包括基本数据类型如整数和布尔值。</li>
              <li><strong>灵活性</strong>：Ruby允许程序员自由地修改语言的核心部分，增加或重定义操作符和方法。</li>
              <li><strong>动态类型</strong>：Ruby使用动态类型系统，变量不需要声明类型。</li>
              <li><strong>垃圾回收</strong>：Ruby自动管理内存，程序员不需要手动分配和释放内存。</li>
              <li><strong>丰富的内置类库</strong>：Ruby提供了大量内置类和方法，简化了常见任务。</li>
              <li><strong>块和迭代器</strong>：Ruby的块（代码块）和迭代器使代码更简洁、更易读。</li>
              <li><strong>元编程</strong>：Ruby强大的元编程能力允许程序在运行时修改自身。</li>
              <li><strong>混入（Mixins）</strong>：Ruby通过模块实现了多重继承的功能，避免了传统多重继承的复杂性。</li>
              <li><strong>异常处理</strong>：Ruby提供了完善的异常处理机制，使错误处理更加优雅。</li>
              <li><strong>社区驱动</strong>：Ruby有一个活跃的社区，提供了大量的库（gems）和框架。</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 mt-6">Ruby的版本</h3>
            <p className="mb-4">
              Ruby的主要版本及其特点：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Ruby 1.8.x</strong>：早期广泛使用的版本，性能相对较低，但稳定可靠。</li>
              <li><strong>Ruby 1.9.x</strong>：带来了显著的性能改进和新特性，如新的哈希语法、编码支持等。</li>
              <li><strong>Ruby 2.x</strong>：进一步改进了性能，引入了关键字参数、模块预包含、精细的垃圾回收等特性。</li>
              <li><strong>Ruby 3.x</strong>：最新的主要版本，专注于性能（目标是比Ruby 2快3倍，即"Ruby 3x3"）、并发性和静态分析。Ruby 3引入了类型检查器（RBS）、并发抽象（Ractor）和模式匹配等新特性。</li>
            </ul>
            <p className="mb-4">
              目前，Ruby 3.x是最新的主要版本，提供了最佳的性能和最现代的语言特性。Ruby社区非常重视向后兼容性，因此升级通常是平滑的过程。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Ruby的实现</h3>
            <p className="mb-4">
              Ruby有多种实现，每种都有其特点和用途：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>MRI/CRuby</strong>：Matz的Ruby解释器，是Ruby的参考实现，用C语言编写。</li>
              <li><strong>JRuby</strong>：在JVM上运行的Ruby实现，提供了与Java生态系统的集成。</li>
              <li><strong>TruffleRuby</strong>：基于GraalVM的高性能Ruby实现。</li>
              <li><strong>mruby</strong>：轻量级Ruby实现，设计用于嵌入到其他应用程序中。</li>
              <li><strong>Rubinius</strong>：使用LLVM编译器基础设施的Ruby实现，注重性能和并发性。</li>
            </ul>
            <p className="mb-4">
              MRI是最常用的Ruby实现，但其他实现在特定场景下可能提供更好的性能或特定功能。
            </p>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Ruby语言应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Web开发</h3>
                </div>
                <p className="text-gray-600">
                  Ruby最著名的应用场景是Web开发，主要通过Ruby on Rails框架。Rails是一个全栈Web框架，遵循"约定优于配置"和"不要重复自己"（DRY）原则，大大提高了Web开发的效率。许多知名网站和应用都是使用Rails构建的，包括GitHub、Shopify、Airbnb（早期版本）、Twitch、SoundCloud等。Rails特别适合快速开发原型和中小型Web应用，其内置的安全特性和测试工具使其成为创业公司的热门选择。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">DevOps和自动化</h3>
                </div>
                <p className="text-gray-600">
                  Ruby在DevOps和自动化领域有广泛应用。Chef和Puppet等配置管理工具使用Ruby作为其DSL（领域特定语言）的基础。这些工具用于自动化服务器配置和应用部署，是现代DevOps实践的重要组成部分。Ruby的简洁语法和强大的文本处理能力使其成为编写自动化脚本和工具的理想选择。许多开发者使用Ruby编写自定义脚本来自动化日常任务，如文件处理、数据转换和系统管理。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">数据处理</h3>
                </div>
                <p className="text-gray-600">
                  Ruby适用于各种数据处理任务，特别是文本处理和数据转换。Ruby强大的正则表达式支持和内置的文本处理方法使其成为处理日志文件、解析数据和提取信息的有力工具。Ruby也可以用于数据分析和可视化，尽管在这方面不如Python流行。Ruby gems如Nokogiri用于HTML和XML解析，而CSV库则简化了CSV文件的处理。对于简单到中等复杂度的数据处理任务，Ruby提供了良好的平衡：足够强大，同时保持代码的可读性和维护性。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">原型开发</h3>
                </div>
                <p className="text-gray-600">
                  Ruby的简洁语法和高级抽象使其成为原型开发的理想选择。开发者可以快速实现想法并验证概念，而无需处理低级细节。Ruby on Rails的脚手架功能允许开发者在几分钟内创建具有基本CRUD（创建、读取、更新、删除）功能的应用程序。Ruby的动态特性和灵活性使得修改和重构代码变得简单，这在原型阶段特别有价值，因为需求经常变化。许多创业公司选择Ruby来构建其最初的产品版本，以便快速进入市场并获得用户反馈。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">静态网站生成</h3>
                </div>
                <p className="text-gray-600">
                  Ruby在静态网站生成领域有着重要应用。Jekyll是最著名的Ruby静态网站生成器，也是GitHub Pages的默认工具。Jekyll允许用户使用Markdown编写内容，然后生成静态HTML文件，这些文件可以托管在任何Web服务器上。静态网站加载速度快、安全性高，且易于部署和扩展。其他Ruby静态网站生成器包括Middleman和Nanoc，它们提供了更多的灵活性和功能。这些工具特别适合博客、文档网站和简单的企业网站，不需要复杂的后端功能。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">测试自动化</h3>
                </div>
                <p className="text-gray-600">
                  Ruby在测试自动化领域有着强大的生态系统。RSpec是一个行为驱动开发（BDD）测试框架，允许开发者以自然语言风格编写测试。Cucumber是另一个流行的BDD工具，它使用Gherkin语言描述应用行为，这些描述可以被非技术人员理解。Capybara是一个用于Web应用测试的库，它模拟用户与应用的交互。Ruby的测试工具强调可读性和表达性，使测试代码既是文档又是验证工具。Ruby的测试文化非常强大，测试驱动开发（TDD）在Ruby社区中广泛实践。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Ruby语言优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">优雅的语法</h4>
                    <p className="text-gray-600">Ruby的语法简洁、直观且富有表现力，使代码易于阅读和编写。Ruby允许省略括号和分号，使代码更加流畅。Ruby的块语法使得迭代和回调变得简单优雅。Ruby的语法设计注重人类可读性，而非机器可读性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">纯面向对象</h4>
                    <p className="text-gray-600">在Ruby中，一切都是对象，包括基本数据类型如整数和布尔值。这种一致性简化了语言的学习和使用。Ruby的面向对象模型非常灵活，允许在运行时修改类和对象。Ruby支持单继承和模块混入（Mixins），提供了强大而灵活的代码组织方式。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的元编程</h4>
                    <p className="text-gray-600">Ruby的元编程能力允许程序在运行时修改自身，创建动态方法和类。这使得可以创建领域特定语言（DSL），使代码更加直观和贴近问题域。Ruby on Rails大量使用元编程来简化Web开发，如ActiveRecord的动态查询方法。元编程使得可以编写更少的代码来完成更多的工作，减少了重复代码。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">活跃的社区和丰富的生态系统</h4>
                    <p className="text-gray-600">Ruby有一个热情且乐于助人的社区，提供了大量的资源和支持。RubyGems是Ruby的包管理系统，提供了超过170,000个gems（库）。Ruby社区强调测试和代码质量，产生了许多优秀的测试工具和实践。Ruby社区定期举办会议和聚会，如RubyConf和RailsConf，促进知识共享和社区建设。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">开发效率高</h4>
                    <p className="text-gray-600">Ruby的设计理念是让程序员快乐和高效，减少不必要的复杂性。Ruby on Rails等框架提供了"约定优于配置"的原则，减少了样板代码。Ruby的动态特性和灵活性使得快速原型开发和迭代变得简单。Ruby的表达力使得可以用更少的代码完成更多的工作，提高了开发效率。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的文本处理能力</h4>
                    <p className="text-gray-600">Ruby提供了强大的正则表达式支持和内置的文本处理方法。Ruby的字符串操作简单直观，使得文本处理任务变得容易。Ruby有丰富的库用于处理各种文本格式，如JSON、XML、YAML等。Ruby的文本处理能力使其成为脚本编写和自动化任务的理想选择。</p>
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
                    <h4 className="font-medium mb-1">性能问题</h4>
                    <p className="text-gray-600">Ruby的执行速度通常比编译语言如C++、Java或Go慢。MRI（Matz的Ruby解释器）的全局解释器锁（GIL）限制了并行执行，影响多线程性能。虽然Ruby 3.0带来了性能改进，但在高性能计算或需要极低延迟的应用中仍不是最佳选择。对于大规模应用，Ruby可能需要更多的服务器资源，增加了运营成本。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内存消耗高</h4>
                    <p className="text-gray-600">Ruby程序通常比同等功能的编译语言程序消耗更多内存。Ruby的对象模型和动态特性导致了较高的内存开销。在资源受限的环境（如嵌入式系统或低端服务器）中，Ruby可能不是理想选择。大型Ruby应用可能需要仔细的内存管理和优化，以避免性能问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">部署和扩展挑战</h4>
                    <p className="text-gray-600">Ruby应用的部署比一些现代语言（如Go）更复杂，需要更多的配置和维护。Ruby应用的扩展通常需要更多的服务器资源，增加了运营成本。Ruby的并发模型不如Elixir或Go等语言设计得好，在高并发场景下可能面临挑战。大型Ruby应用可能需要复杂的架构（如微服务）来实现有效扩展。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">动态类型的局限性</h4>
                    <p className="text-gray-600">Ruby的动态类型系统可能导致运行时错误，而这些错误在静态类型语言中可能在编译时被捕获。大型Ruby项目可能需要更多的测试覆盖，以确保类型安全。虽然Ruby 3引入了类型检查器（RBS），但它是可选的，不如TypeScript或Java等语言的静态类型系统强大。重构大型Ruby代码库可能比静态类型语言更具挑战性，因为缺乏编译时类型检查。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">就业市场相对较小</h4>
                    <p className="text-gray-600">Ruby的就业机会比Python、JavaScript或Java等更主流的语言少。Ruby工作通常集中在Web开发（特别是Ruby on Rails）领域，限制了职业多样性。一些公司正在从Ruby迁移到其他语言，如Go或Elixir，以解决性能和扩展性问题。Ruby开发者可能需要更积极地寻找工作机会，或考虑学习其他语言来增加就业选择。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">版本兼容性问题</h4>
                    <p className="text-gray-600">Ruby的主要版本之间（如从1.8到1.9，或从2.x到3.x）可能存在兼容性问题，需要代码修改。一些Ruby gems可能不支持最新的Ruby版本，导致依赖冲突。升级大型Ruby应用到新版本可能需要大量工作和测试。Ruby的向后兼容性虽然比一些语言好，但仍然可能在升级过程中遇到挑战。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Ruby语言学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.ruby-lang.org/zh_cn/documentation/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Ruby官方文档（中文）</h4>
                      <p className="text-sm text-gray-600">Ruby官方网站提供的中文文档，包含入门指南和参考资料。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://ruby-doc.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Ruby-Doc.org</h4>
                      <p className="text-sm text-gray-600">Ruby核心API和标准库的详细文档。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://ruby-hacking-guide.github.io/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Ruby Hacking Guide</h4>
                      <p className="text-sm text-gray-600">深入探讨Ruby内部实现的指南，适合高级学习者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://poignant.guide/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Why's (Poignant) Guide to Ruby</h4>
                      <p className="text-sm text-gray-600">一本独特而有趣的Ruby入门书，以故事和漫画形式讲解Ruby。</p>
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
                  <a href="https://www.codecademy.com/learn/learn-ruby" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - Learn Ruby</h4>
                      <p className="text-sm text-gray-600">交互式Ruby学习课程，适合初学者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/ruby-language-fundamentals" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - Ruby Fundamentals</h4>
                      <p className="text-sm text-gray-600">全面的Ruby基础课程，包括语法、面向对象编程和测试。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.udemy.com/course/learn-to-code-with-ruby-lang/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - Learn to Code with Ruby</h4>
                      <p className="text-sm text-gray-600">Boris Paskhaver的全面Ruby课程，从基础到高级主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://exercism.io/tracks/ruby" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Exercism - Ruby Track</h4>
                      <p className="text-sm text-gray-600">通过实践练习和导师反馈学习Ruby。</p>
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
                    <h4 className="font-medium">《Ruby编程语言》</h4>
                    <p className="text-sm text-gray-600">作者：David Flanagan, Yukihiro Matsumoto</p>
                    <p className="text-sm text-gray-600">由Ruby创始人松本行弘和David Flanagan合著的权威指南，深入介绍Ruby语言的各个方面。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Ruby元编程》</h4>
                    <p className="text-sm text-gray-600">作者：Paolo Perrotta</p>
                    <p className="text-sm text-gray-600">深入探讨Ruby元编程的经典之作，解释了Ruby的动态特性和强大的元编程能力。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Practical Object-Oriented Design in Ruby》</h4>
                    <p className="text-sm text-gray-600">作者：Sandi Metz</p>
                    <p className="text-sm text-gray-600">关于Ruby中面向对象设计的实用指南，教你如何编写灵活、可维护的Ruby代码。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Eloquent Ruby》</h4>
                    <p className="text-sm text-gray-600">作者：Russ Olsen</p>
                    <p className="text-sm text-gray-600">探讨如何编写"Ruby风格"的代码，强调Ruby的表达力和优雅性。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  框架和工具
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://rubyonrails.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Ruby on Rails</h4>
                      <p className="text-sm text-gray-600">最流行的Ruby Web框架，提供"约定优于配置"的开发方式。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://sinatrarb.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Sinatra</h4>
                      <p className="text-sm text-gray-600">轻量级Web框架，适合小型应用和API开发。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://rspec.info/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">RSpec</h4>
                      <p className="text-sm text-gray-600">行为驱动开发（BDD）测试框架，使测试更加自然和可读。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://jekyllrb.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Jekyll</h4>
                      <p className="text-sm text-gray-600">静态网站生成器，GitHub Pages的默认工具。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-red-500" />
                  社区和论坛
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.ruby-forum.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Ruby Forum</h4>
                      <p className="text-sm text-gray-600">Ruby社区论坛，讨论Ruby语言和相关技术。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/ruby/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit - r/ruby</h4>
                      <p className="text-sm text-gray-600">Ruby编程语言的Reddit社区。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://stackoverflow.com/questions/tagged/ruby" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow - Ruby</h4>
                      <p className="text-sm text-gray-600">Ruby相关问题和解答的集合。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://rubyweekly.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Ruby Weekly</h4>
                      <p className="text-sm text-gray-600">每周Ruby新闻和文章的电子邮件通讯。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Ruby语言案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名Ruby项目</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">GitHub截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">GitHub</h4>
                      <p className="text-sm text-gray-600">全球最大的代码托管平台，最初使用Ruby on Rails构建。GitHub使用Ruby处理核心业务逻辑，同时结合其他语言处理性能关键部分。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Shopify截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Shopify</h4>
                      <p className="text-sm text-gray-600">领先的电子商务平台，使用Ruby on Rails构建。Shopify是Ruby在大规模应用中成功的典范，支持超过100万商家，年交易额超过1000亿美元。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Airbnb截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Airbnb（早期版本）</h4>
                      <p className="text-sm text-gray-600">全球最大的住宿共享平台，最初使用Ruby on Rails构建。Airbnb的早期成功展示了Ruby快速开发和迭代的优势，帮助公司快速验证商业模式。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Ruby代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# 变量和基本类型
name = "Ruby"
version = 3.1
is_awesome = true

# 字符串插值
puts "Hello, #{name} #{version}!"

# 条件语句
if is_awesome
  puts "Ruby is awesome!"
else
  puts "Ruby is still good."
end

# 三元运算符
status = is_awesome ? "awesome" : "good"
puts "Ruby is #{status}."

# 循环
puts "Counting: "
5.times { |i| print "#{i+1} " }
puts

# 数组
fruits = ["apple", "banana", "cherry"]
puts "Fruits: #{fruits.join(", ")}"

# 哈希（类似其他语言的字典或映射）
person = {
  name: "John",
  age: 30,
  city: "New York"
}
puts "Person: #{person[:name]}, #{person[:age]} years old"

# 符号（轻量级不可变字符串，常用作哈希键）
status = :success
puts "Status: #{status}"

# 方法定义
def greet(name, time = "day")
  "Good #{time}, #{name}!"
end

puts greet("Alice", "morning")
puts greet("Bob")

# 块（代码块）
["cat", "dog", "fish"].each do |animal|
  puts "I love #{animal}s"
end

# 单行块语法
[1, 2, 3, 4, 5].map { |n| n * n }.each { |n| puts n }

# 类和对象
class Person
  # 属性访问器
  attr_accessor :name, :age
  
  # 构造函数
  def initialize(name, age)
    @name = name
    @age = age
  end
  
  # 实例方法
  def introduce
    "Hi, I'm #{@name} and I'm #{@age} years old."
  end
  
  # 类方法
  def self.species
    "Homo sapiens"
  end
end

# 创建对象
john = Person.new("John", 30)
puts john.introduce
puts "Species: #{Person.species}"

# 继承
class Student < Person
  attr_accessor :university
  
  def initialize(name, age, university)
    super(name, age)
    @university = university
  end
  
  def introduce
    "#{super} I study at #{@university}."
  end
end

alice = Student.new("Alice", 20, "Harvard")
puts alice.introduce

# 模块和混入（Mixins）
module Flyable
  def fly
    "I'm flying!"
  end
end

module Swimmable
  def swim
    "I'm swimming!"
  end
end

class Bird
  include Flyable
end

class Fish
  include Swimmable
end

class Duck
  include Flyable
  include Swimmable
end

puts Bird.new.fly
puts Fish.new.swim
puts "Duck: #{Duck.new.fly} and #{Duck.new.swim}"

# 异常处理
begin
  # 可能引发异常的代码
  result = 10 / 0
rescue ZeroDivisionError => e
  puts "Error: #{e.message}"
ensure
  puts "This always runs"
end

# 文件操作
File.open("example.txt", "w") do |file|
  file.puts "Hello, Ruby File Handling!"
end

content = File.read("example.txt")
puts "File content: #{content}"

# 正则表达式
email = "test@example.com"
if email =~ /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i
  puts "Valid email: #{email}"
else
  puts "Invalid email: #{email}"
end

# 符号转换
string_method = "upcase"
"hello".send(string_method.to_sym) # => "HELLO"

# 元编程示例
class MetaProgrammingDemo
  # 动态定义方法
  ["red", "green", "blue"].each do |color|
    define_method("paint_#{color}") do
      "Painting with #{color}"
    end
  end
end

demo = MetaProgrammingDemo.new
puts demo.paint_red
puts demo.paint_green
puts demo.paint_blue`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Ruby on Rails示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# app/models/user.rb
class User < ApplicationRecord
  has_secure_password
  
  has_many :posts, dependent: :destroy
  has_many :comments, dependent: :destroy
  has_many :likes
  
  validates :email, presence: true, uniqueness: true,
            format: { with: URI::MailTo::EMAIL_REGEXP }
  validates :username, presence: true, uniqueness: true,
            length: { minimum: 3, maximum: 20 }
  
  # 自定义验证
  validate :password_complexity
  
  # 回调
  before_save :downcase_email
  
  # 范围查询
  scope :active, -> { where(active: true) }
  scope :created_after, ->(date) { where("created_at > ?", date) }
  
  # 实例方法
  def full_name
    "#{first_name} #{last_name}"
  end
  
  # 类方法
  def self.find_by_email_or_username(login)
    where("email = :login OR username = :login", login: login).first
  end
  
  private
  
  def password_complexity
    return if password.blank? || password =~ /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d]{8,}$/
    
    errors.add :password, "must be at least 8 characters and include at least one letter and one number"
  end
  
  def downcase_email
    self.email = email.downcase if email.present?
  end
end

# app/controllers/posts_controller.rb
class PostsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  before_action :set_post, only: [:show, :edit, :update, :destroy]
  before_action :authorize_user!, only: [:edit, :update, :destroy]
  
  # GET /posts
  def index
    @posts = Post.includes(:user, :category)
                .order(created_at: :desc)
                .paginate(page: params[:page], per_page: 10)
    
    respond_to do |format|
      format.html
      format.json { render json: @posts }
    end
  end
  
  # GET /posts/1
  def show
    @comment = Comment.new
    @comments = @post.comments.includes(:user).order(created_at: :desc)
  end
  
  # GET /posts/new
  def new
    @post = current_user.posts.build
  end
  
  # POST /posts
  def create
    @post = current_user.posts.build(post_params)
    
    if @post.save
      redirect_to @post, notice: 'Post was successfully created.'
    else
      render :new
    end
  end
  
  # GET /posts/1/edit
  def edit
  end
  
  # PATCH/PUT /posts/1
  def update
    if @post.update(post_params)
      redirect_to @post, notice: 'Post was successfully updated.'
    else
      render :edit
    end
  end
  
  # DELETE /posts/1
  def destroy
    @post.destroy
    redirect_to posts_path, notice: 'Post was successfully deleted.'
  end
  
  private
  
  def set_post
    @post = Post.find(params[:id])
  end
  
  def post_params
    params.require(:post).permit(:title, :content, :category_id, :published)
  end
  
  def authorize_user!
    unless @post.user == current_user || current_user.admin?
      redirect_to posts_path, alert: 'You are not authorized to perform this action.'
    end
  end
end

# config/routes.rb
Rails.application.routes.draw do
  # 用户认证
  devise_for :users, controllers: {
    sessions: 'users/sessions',
    registrations: 'users/registrations'
  }
  
  # 资源路由
  resources :posts do
    resources :comments, only: [:create, :destroy]
    member do
      post 'like'
      delete 'unlike'
    end
  end
  
  resources :categories
  
  # API路由
  namespace :api do
    namespace :v1 do
      resources :posts, only: [:index, :show, :create, :update, :destroy]
      resources :users, only: [:show]
    end
  end
  
  # 自定义路由
  get 'about', to: 'pages#about'
  get 'contact', to: 'pages#contact'
  post 'contact', to: 'pages#submit_contact'
  
  # 管理员路由
  namespace :admin do
    resources :users
    resources :posts
    resources :comments
    
    root to: 'dashboard#index'
  end
  
  # 根路由
  root to: 'posts#index'
end

# app/views/posts/show.html.erb
<div class="post-container">
  <h1><%= @post.title %></h1>
  
  <div class="post-meta">
    <span>By <%= link_to @post.user.username, user_path(@post.user) %></span>
    <span><%= @post.created_at.strftime("%B %d, %Y") %></span>
    <span>Category: <%= link_to @post.category.name, category_path(@post.category) %></span>
  </div>
  
  <div class="post-content">
    <%= @post.content %>
  </div>
  
  <div class="post-actions">
    <% if user_signed_in? && (current_user == @post.user || current_user.admin?) %>
      <%= link_to "Edit", edit_post_path(@post), class: "btn btn-primary" %>
      <%= link_to "Delete", post_path(@post), method: :delete, 
                  data: { confirm: "Are you sure?" }, class: "btn btn-danger" %>
    <% end %>
  </div>
  
  <div class="post-likes">
    <span><%= @post.likes.count %> likes</span>
    <% if user_signed_in? %>
      <% if current_user.likes.exists?(post: @post) %>
        <%= link_to "Unlike", unlike_post_path(@post), method: :delete %>
      <% else %>
        <%= link_to "Like", like_post_path(@post), method: :post %>
      <% end %>
    <% end %>
  </div>
  
  <div class="comments-section">
    <h3>Comments (<%= @comments.count %>)</h3>
    
    <% if user_signed_in? %>
      <%= form_with(model: [@post, @comment], local: true) do |f| %>
        <div class="form-group">
          <%= f.text_area :content, class: "form-control", placeholder: "Add a comment..." %>
        </div>
        <%= f.submit "Post Comment", class: "btn btn-primary" %>
      <% end %>
    <% else %>
      <p>Please <%= link_to "sign in", new_user_session_path %> to comment.</p>
    <% end %>
    
    <div class="comments-list">
      <% @comments.each do |comment| %>
        <div class="comment">
          <div class="comment-meta">
            <span><%= comment.user.username %></span>
            <span><%= comment.created_at.strftime("%B %d, %Y %H:%M") %></span>
          </div>
          <div class="comment-content">
            <%= comment.content %>
          </div>
          <% if user_signed_in? && (current_user == comment.user || current_user.admin?) %>
            <%= link_to "Delete", post_comment_path(@post, comment), method: :delete,
                        data: { confirm: "Are you sure?" }, class: "btn btn-sm btn-danger" %>
          <% end %>
        </div>
      <% end %>
    </div>
  </div>
</div>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Ruby元编程示例</h3>
                <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                  <pre className="text-sm">
{`# Ruby元编程示例

# 1. 动态方法定义
class Product
  # 使用define_method动态定义方法
  [:price, :name, :category, :stock].each do |attribute|
    define_method("#{attribute}_with_tax") do |tax_rate = 0.1|
      value = send(attribute)
      value.is_a?(Numeric) ? value * (1 + tax_rate) : value
    end
  end
  
  attr_accessor :price, :name, :category, :stock
end

product = Product.new
product.price = 100
product.name = "Ruby Book"
puts product.price_with_tax  # => 110.0
puts product.name_with_tax   # => "Ruby Book"

# 2. method_missing和respond_to_missing?
class FlexibleHash
  def initialize
    @data = {}
  end
  
  def method_missing(name, *args, &block)
    if name.to_s =~ /^(.+)=$/  # setter
      @data[$1.to_sym] = args.first
    elsif @data.key?(name)      # getter
      @data[name]
    else
      super
    end
  end
  
  def respond_to_missing?(name, include_private = false)
    @data.key?(name) || name.to_s =~ /^(.+)=$/ || super
  end
end

user = FlexibleHash.new
user.name = "John"
user.age = 30
puts "#{user.name} is #{user.age} years old"
puts "Responds to name? #{user.respond_to?(:name)}"
puts "Responds to email? #{user.respond_to?(:email)}"

# 3. 类宏和DSL
module Validatable
  def self.included(base)
    base.extend(ClassMethods)
  end
  
  module ClassMethods
    def validates(*attributes)
      options = attributes.last.is_a?(Hash) ? attributes.pop : {}
      attributes.each do |attribute|
        define_method("validate_#{attribute}") do
          value = send(attribute)
          
          if options[:presence] && value.nil?
            errors << "#{attribute} can't be blank"
          end
          
          if options[:format] && value && !(value =~ options[:format])
            errors << "#{attribute} has invalid format"
          end
          
          if options[:length] && value
            min = options[:length][:minimum]
            max = options[:length][:maximum]
            
            if min && value.length < min
              errors << "#{attribute} is too short (minimum is #{min} characters)"
            end
            
            if max && value.length > max
              errors << "#{attribute} is too long (maximum is #{max} characters)"
            end
          end
        end
      end
    end
  end
  
  def validate
    @errors = []
    
    # 调用所有validate_*方法
    methods.grep(/^validate_/).each do |method|
      send(method)
    end
    
    @errors.empty?
  end
  
  def errors
    @errors ||= []
  end
end

class User
  include Validatable
  
  attr_accessor :name, :email, :password
  
  validates :name, :email, :password, presence: true
  validates :email, format: /\\A[\\w+\\-.]+@[a-z\\d\\-.]+\\.[a-z]+\\z/i
  validates :password, length: { minimum: 8, maximum: 20 }
  
  def initialize(attributes = {})
    attributes.each do |key, value|
      send("#{key}=", value)
    end
  end
end

user = User.new(name: "John", email: "invalid", password: "short")
puts "Valid? #{user.validate}"
puts "Errors: #{user.errors.join(', ')}"

user = User.new(name: "John", email: "john@example.com", password: "password123")
puts "Valid? #{user.validate}"
puts "Errors: #{user.errors.join(', ')}"

# 4. 类和模块的动态创建
def create_service_class(name, methods)
  # 动态创建类
  klass = Class.new do
    methods.each do |method_name, implementation|
      define_method(method_name) do |*args|
        instance_exec(*args, &implementation)
      end
    end
    
    # 添加一个通用的execute方法
    define_method(:execute) do |*args|
      if respond_to?(:call)
        call(*args)
      else
        raise NoMethodError, "No call method defined for #{self.class}"
      end
    end
  end
  
  # 将类常量设置到Object命名空间
  Object.const_set(name, klass)
end

# 使用动态创建的类
create_service_class("UserCreator", {
  initialize: ->(db) { @db = db },
  call: ->(user_data) {
    # 验证数据
    return { success: false, errors: ["Email is required"] } unless user_data[:email]
    
    # 创建用户
    user_id = @db[:users].insert(user_data)
    
    # 返回结果
    { success: true, user_id: user_id }
  }
})

# 模拟数据库
db = { users: [] }
creator = UserCreator.new(db)

result = creator.execute(name: "John")
puts "Result: #{result}"

result = creator.execute(name: "Jane", email: "jane@example.com")
puts "Result: #{result}"

# 5. eval和binding
def render_template(template, binding)
  # 使用ERB（嵌入式Ruby）
  require 'erb'
  ERB.new(template).result(binding)
end

user_name = "John"
user_age = 30
template = "Hello, <%= user_name %>! You are <%= user_age %> years old."

result = render_template(template, binding)
puts result

# 6. 使用instance_eval和class_eval
class Example
  def initialize
    @private_data = "This is private"
  end
end

example = Example.new

# 使用instance_eval访问私有实例变量
example.instance_eval do
  puts @private_data
end

# 使用class_eval添加方法
Example.class_eval do
  def new_method
    "This is a dynamically added method"
  end
end

puts example.new_method

# 7. 钩子方法
module Callbacks
  def self.included(base)
    base.extend(ClassMethods)
  end
  
  module ClassMethods
    def before_save(method_name = nil, &block)
      before_save_callbacks << (method_name || block)
    end
    
    def before_save_callbacks
      @before_save_callbacks ||= []
    end
  end
  
  def save
    # 执行所有before_save回调
    self.class.before_save_callbacks.each do |callback|
      if callback.is_a?(Symbol)
        send(callback)
      else
        instance_eval(&callback)
      end
    end
    
    puts "Saving #{self.class} instance..."
  end
end

class Post
  include Callbacks
  
  attr_accessor :title, :content, :created_at
  
  before_save :set_timestamp
  before_save { @title = @title.strip if @title }
  
  def set_timestamp
    @created_at = Time.now
  end
end

post = Post.new
post.title = "  Ruby Metaprogramming  "
post.content = "Ruby is awesome!"
post.save

puts "Title: '#{post.title}'"
puts "Created at: #{post.created_at}"`}
                  </pre>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>

        {/* 相关语言推荐 */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">相关语言推荐</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Link href="/languages/python-ai">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Python</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Ruby的简洁和表达力，但需要更广泛的应用领域和更大的社区，Python是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/php">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">PHP</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你主要关注Web开发，PHP提供了类似的Web开发能力，有更广泛的托管支持和更大的市场份额。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/javascript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">JavaScript</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你想扩展到前端开发或全栈开发，JavaScript是必不可少的语言，Node.js提供了类似Ruby的后端开发体验。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/elixir">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Elixir</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Ruby的语法和哲学，但需要更好的并发性能，Elixir是一个很好的选择，它的语法受Ruby启发。</p>
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
                如果你对Ruby还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Ruby适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Ruby是一个相当适合初学者的编程语言，特别是对于那些重视代码可读性和表达力的人。Ruby的语法直观且富有表现力，设计理念是"最小惊讶原则"，意味着语言的行为通常符合程序员的预期。Ruby的面向对象模型简单一致，一切都是对象，这使得概念理解更加统一。Ruby社区友好且乐于助人，提供了大量学习资源。然而，Ruby的元编程和灵活性可能对初学者来说有些复杂。如果你的目标是Web开发，Ruby on Rails框架提供了一个结构化的学习路径。总的来说，Ruby是一个优雅的语言，适合那些希望享受编程过程的初学者。</p>
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
