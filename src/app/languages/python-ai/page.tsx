'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase, Brain } from 'lucide-react'
import Link from 'next/link'

export default function PythonPage() {
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
                <Link href="/categories/ai" className="text-gray-500 hover:text-gray-700">
                  AI与数据科学
                </Link>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-gray-700">Python</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">Python</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800">
              行业标准
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            Python是一种解释型、高级、通用型编程语言，在AI和数据科学领域占据主导地位，拥有TensorFlow、PyTorch、scikit-learn等强大的库和框架。
          </p>
        </div>

        {/* 关键指标 */}
        <div className="grid grid-cols-1 gap-6 mb-12 md:grid-cols-3">
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">学习难度</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-yellow-500 h-2.5 rounded-full w-2/3"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              语法简洁清晰，入门门槛低，但掌握高级特性和库需要时间。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">就业前景</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-blue-500 h-2.5 rounded-full w-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">极好</span>
            </div>
            <p className="mt-4 text-gray-600">
              Python开发者需求量大，特别是在AI、数据科学和Web开发领域。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-full"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">优秀</span>
            </div>
            <p className="mt-4 text-gray-600">
              Python开发者薪资普遍较高，尤其是AI和数据科学专家。
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
            <h2 className="text-2xl font-bold mb-4">Python简介</h2>
            <p className="mb-4">
              Python是一种解释型、高级、通用型编程语言，由Guido van Rossum于1991年首次发布。Python的设计哲学强调代码的可读性和简洁性，其语法允许程序员用更少的代码行数表达概念。
            </p>
            <p className="mb-4">
              Python是一种多范式编程语言，支持面向对象编程、命令式编程、函数式编程和面向切面编程等多种编程范式。它具有动态类型系统和自动内存管理功能，能够支持多种编程范式。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Python的历史</h3>
            <p className="mb-4">
              Python的创始人Guido van Rossum在1989年的圣诞节期间，为了打发时间，决定开发一个新的脚本解释程序，作为ABC语言的一种继承。Python这个名字来源于Guido所喜爱的电视剧《蒙提·派森的飞行马戏团》（Monty Python's Flying Circus）。
            </p>
            <p className="mb-4">
              Python 2.0于2000年发布，引入了列表推导式、垃圾回收系统等新特性。Python 3.0于2008年发布，这是一个不向后兼容的版本，旨在修复语言的某些基本设计缺陷。目前，Python 2已于2020年1月1日停止支持，Python社区鼓励用户迁移到Python 3。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">Python的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>简洁易读的语法</li>
              <li>强大的标准库和第三方库生态系统</li>
              <li>跨平台兼容性（Windows、macOS、Linux等）</li>
              <li>解释型语言，无需编译</li>
              <li>动态类型系统</li>
              <li>自动内存管理</li>
              <li>支持多种编程范式</li>
              <li>强大的社区支持</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Python应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Brain className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">人工智能与机器学习</h3>
                </div>
                <p className="text-gray-600">
                  Python是AI和机器学习领域的首选语言，拥有TensorFlow、PyTorch、scikit-learn等强大的库。这些库提供了高效的数据处理、模型训练和部署工具，使Python成为数据科学家和AI研究人员的首选。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">数据分析与可视化</h3>
                </div>
                <p className="text-gray-600">
                  Python的NumPy、Pandas和Matplotlib等库使其成为数据分析和可视化的强大工具。这些库提供了高效的数据处理、统计分析和图形绘制功能，广泛应用于金融分析、科学研究和商业智能。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">Web开发</h3>
                </div>
                <p className="text-gray-600">
                  使用Django、Flask等框架，Python可以用于构建高效、安全的Web应用。这些框架提供了完整的Web开发工具集，包括ORM、模板引擎和安全特性，适合开发从简单网站到复杂Web应用的各种项目。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">自动化脚本</h3>
                </div>
                <p className="text-gray-600">
                  Python是编写自动化脚本的理想选择，可以自动化日常任务、系统管理和测试流程。其简洁的语法和丰富的库使得编写自动化脚本变得简单高效，广泛应用于DevOps和系统管理。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">科学计算</h3>
                </div>
                <p className="text-gray-600">
                  Python在科学计算领域广泛应用，SciPy、SymPy等库提供了强大的科学计算功能。这些库支持复杂的数学计算、符号数学、信号处理和图像处理，广泛应用于物理学、天文学和工程学等领域。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">教育与入门编程</h3>
                </div>
                <p className="text-gray-600">
                  Python简洁的语法和易读性使其成为编程教育的理想选择，广泛用于计算机科学入门课程。其清晰的语法结构和丰富的学习资源使初学者能够快速掌握编程概念，是编程教育的首选语言。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Python优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">简洁易读的语法</h4>
                    <p className="text-gray-600">Python的语法简洁明了，使用缩进表示代码块，提高了代码的可读性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">丰富的库和框架</h4>
                    <p className="text-gray-600">Python拥有庞大的标准库和第三方库生态系统，几乎可以满足任何应用需求。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">跨平台兼容性</h4>
                    <p className="text-gray-600">Python可以在Windows、macOS、Linux等多种操作系统上运行，提供了良好的跨平台兼容性。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">强大的社区支持</h4>
                    <p className="text-gray-600">Python拥有庞大而活跃的社区，提供了丰富的文档、教程和支持资源。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">多范式编程</h4>
                    <p className="text-gray-600">Python支持多种编程范式，包括面向对象、命令式和函数式编程，提供了灵活的编程方式。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">快速开发</h4>
                    <p className="text-gray-600">Python的简洁语法和丰富的库使得开发速度快，适合快速原型开发和敏捷开发。</p>
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
                    <h4 className="font-medium mb-1">执行速度较慢</h4>
                    <p className="text-gray-600">作为解释型语言，Python的执行速度相对较慢，不适合对性能要求极高的应用。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">全局解释器锁(GIL)</h4>
                    <p className="text-gray-600">Python的GIL限制了多线程程序的并行执行，影响了多核CPU的充分利用。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">移动开发支持有限</h4>
                    <p className="text-gray-600">Python在移动应用开发方面的支持相对有限，不如Java或Swift等语言。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">内存消耗较大</h4>
                    <p className="text-gray-600">Python的动态类型和内存管理机制导致其内存消耗相对较大。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">设计限制</h4>
                    <p className="text-gray-600">Python的设计在某些方面存在限制，如lambda函数的功能相对有限。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">版本兼容性问题</h4>
                    <p className="text-gray-600">Python 2和Python 3之间存在兼容性问题，导致一些旧代码迁移困难。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Python学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  在线教程和文档
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://docs.python.org/zh-cn/3/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Python官方文档</h4>
                      <p className="text-sm text-gray-600">Python的官方文档，提供了语言参考、标准库和教程等内容。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.runoob.com/python3/python3-tutorial.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">菜鸟教程</h4>
                      <p className="text-sm text-gray-600">提供了Python基础到高级的中文教程，适合初学者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.liaoxuefeng.com/wiki/1016959663602400" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">廖雪峰的Python教程</h4>
                      <p className="text-sm text-gray-600">通俗易懂的Python中文教程，深受初学者喜爱。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.kaggle.com/learn/python" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Kaggle Python课程</h4>
                      <p className="text-sm text-gray-600">面向数据科学的Python教程，包含实践练习。</p>
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
                  <a href="https://www.codecademy.com/learn/learn-python-3" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy</h4>
                      <p className="text-sm text-gray-600">交互式Python学习平台，边学边练。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.datacamp.com/courses/intro-to-python-for-data-science" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">DataCamp</h4>
                      <p className="text-sm text-gray-600">专注于数据科学的Python学习平台。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://leetcode.cn/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">LeetCode</h4>
                      <p className="text-sm text-gray-600">提供大量编程题目，可以用Python解题，提高算法能力。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codewars</h4>
                      <p className="text-sm text-gray-600">通过解决编程挑战提高Python技能，难度逐渐增加。</p>
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
                    <h4 className="font-medium">《Python编程：从入门到实践》</h4>
                    <p className="text-sm text-gray-600">作者：Eric Matthes</p>
                    <p className="text-sm text-gray-600">适合初学者的Python入门书籍，包含大量实例和项目。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《流畅的Python》</h4>
                    <p className="text-sm text-gray-600">作者：Luciano Ramalho</p>
                    <p className="text-sm text-gray-600">面向有经验的Python程序员，深入探讨Python的高级特性。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Python数据科学手册》</h4>
                    <p className="text-sm text-gray-600">作者：Jake VanderPlas</p>
                    <p className="text-sm text-gray-600">介绍Python在数据科学中的应用，包括NumPy、Pandas、Matplotlib等库的使用。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Python Cookbook》</h4>
                    <p className="text-sm text-gray-600">作者：David Beazley, Brian K. Jones</p>
                    <p className="text-sm text-gray-600">提供了大量Python编程技巧和最佳实践，适合有经验的程序员。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">Python案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名使用Python的项目和公司</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Instagram截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Instagram</h4>
                      <p className="text-sm text-gray-600">Instagram使用Django（Python Web框架）构建其Web服务，处理数百万用户的照片分享。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Dropbox截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Dropbox</h4>
                      <p className="text-sm text-gray-600">Dropbox的服务器端代码主要用Python编写，处理文件存储和同步功能。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Spotify截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Spotify</h4>
                      <p className="text-sm text-gray-600">Spotify使用Python进行数据分析和后端服务，支持其音乐推荐系统。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Python代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# 变量和数据类型
name = "Python"
version = 3.9
is_awesome = True

# 列表操作
languages = ["Python", "JavaScript", "Java", "C++"]
languages.append("Go")
print(languages)  # ['Python', 'JavaScript', 'Java', 'C++', 'Go']

# 字典操作
language_info = {
    "name": "Python",
    "version": 3.9,
    "creator": "Guido van Rossum",
    "year": 1991
}
print(language_info["creator"])  # Guido van Rossum

# 条件语句
if version >= 3.6:
    print("You can use f-strings!")
else:
    print("Consider upgrading Python.")

# 循环
for language in languages:
    print(f"I like {language}")

# 函数定义
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Python"))  # Hello, Python!`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">数据科学示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`# 导入必要的库
import numpy as np
import pandas as pd
import matplotlib.pyplot as plt
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# 创建示例数据
np.random.seed(42)
X = 2 * np.random.rand(100, 1)
y = 4 + 3 * X + np.random.randn(100, 1)

# 数据分割
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42)

# 训练线性回归模型
model = LinearRegression()
model.fit(X_train, y_train)

# 打印模型参数
print(f"截距: {model.intercept_}")
print(f"系数: {model.coef_}")

# 预测
y_pred = model.predict(X_test)

# 可视化结果
plt.scatter(X_test, y_test, color='blue', label='实际值')
plt.plot(X_test, y_pred, color='red', linewidth=2, label='预测值')
plt.xlabel('X')
plt.ylabel('y')
plt.legend()
plt.title('线性回归示例')
plt.show()`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">Python框架示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Django</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`# models.py
from django.db import models

class Article(models.Model):
    title = models.CharField(max_length=200)
    content = models.TextField()
    pub_date = models.DateTimeField('date published')
    
    def __str__(self):
        return self.title

# views.py
from django.shortcuts import render
from .models import Article

def article_list(request):
    articles = Article.objects.all()
    return render(request, 'articles/list.html', {
        'articles': articles
    })`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">Django是一个高级Python Web框架，鼓励快速开发和简洁实用的设计。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Flask</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return 'Hello, Flask!'

@app.route('/users/<username>')
def show_user(username):
    return f'User: {username}'

@app.route('/articles')
def articles():
    articles = [
        {'title': 'Flask入门', 'content': '...'},
        {'title': 'Python技巧', 'content': '...'}
    ]
    return render_template('articles.html', 
                          articles=articles)`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">Flask是一个轻量级的Python Web框架，简单灵活，适合小型应用和API开发。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">FastAPI</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()

class Item(BaseModel):
    name: str
    price: float
    is_offer: bool = None

@app.get("/")
def read_root():
    return {"Hello": "World"}

@app.get("/items/{item_id}")
def read_item(item_id: int, q: str = None):
    return {"item_id": item_id, "q": q}

@app.post("/items/")
def create_item(item: Item):
    return item`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">FastAPI是一个现代、快速的Web框架，用于构建API，基于Python 3.6+的类型提示。</p>
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
            <Link href="/languages/r">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">R</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Python的数据分析能力，但需要更专业的统计分析功能，可以考虑R语言。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/julia">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Julia</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要Python的易用性但希望获得更高的性能，Julia是一个很好的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你想将数据科学与Web开发结合，JavaScript是必不可少的补充语言。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/go">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Go</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢Python的简洁，但需要更高的性能和并发能力，Go是一个很好的选择。</p>
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
                如果你对Python还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">Python适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">Python是初学编程的最佳选择之一。它的语法简洁明了，易于理解，有丰富的学习资源和活跃的社区支持。你可以通过Python快速掌握编程基础概念，并逐步探索更高级的应用，如数据分析、Web开发或人工智能。</p>
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
