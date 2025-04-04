'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase, Smartphone, Cpu, Brain } from 'lucide-react'
import Link from 'next/link'

// 这是一个示例详情页，展示JavaScript语言的详细信息
// 实际项目中，应该根据路由参数动态获取语言数据

export default function JavaScriptPage() {
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
                <span className="text-gray-700">JavaScript</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">JavaScript</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-yellow-100 text-yellow-800">
              最受欢迎
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            JavaScript是一种动态脚本语言，为网页添加交互功能，近年来随着Node.js的出现，也可用于服务器端开发。
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
              入门容易，但掌握高级概念和异步编程需要时间。
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
              作为Web开发的核心语言，JavaScript开发者需求量大。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-400 h-2.5 rounded-full w-3/4"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">良好</span>
            </div>
            <p className="mt-4 text-gray-600">
              前端开发者薪资普遍不错，全栈开发者薪资更高。
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
            <h2 className="text-2xl font-bold mb-4">JavaScript简介</h2>
            <p className="mb-4">
              JavaScript是一种高级的、解释型的编程语言，是ECMAScript规范的实现。它最初被设计用来为网页添加交互性，但现在已经发展成为一种多用途的编程语言，可以在浏览器、服务器、移动应用、桌面应用等多种环境中运行。
            </p>
            <p className="mb-4">
              JavaScript是一种动态类型语言，支持面向对象、函数式和命令式编程风格。它具有自动内存管理（垃圾回收）、闭包、高阶函数等特性，使其成为一种灵活且强大的编程语言。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">JavaScript的历史</h3>
            <p className="mb-4">
              JavaScript由Brendan Eich在1995年为Netscape浏览器创建，最初名为Mocha，后改名为LiveScript，最终在与Sun Microsystems合作后改名为JavaScript（尽管与Java没有直接关系）。
            </p>
            <p className="mb-4">
              1997年，JavaScript被提交给ECMA International进行标准化，形成了ECMAScript标准。此后，JavaScript不断发展，特别是2015年发布的ECMAScript 6（ES6）带来了许多重要的新特性，如箭头函数、类、模块、Promise等。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">JavaScript的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>解释型语言，无需编译</li>
              <li>动态类型，变量类型在运行时确定</li>
              <li>支持函数式编程和面向对象编程</li>
              <li>事件驱动和非阻塞I/O模型</li>
              <li>单线程执行，但支持异步操作</li>
              <li>丰富的生态系统和大量的库/框架</li>
            </ul>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">JavaScript应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">前端Web开发</h3>
                </div>
                <p className="text-gray-600">
                  JavaScript的最主要应用场景是前端Web开发，用于创建交互式网页。结合HTML和CSS，JavaScript可以实现动态内容更新、表单验证、动画效果、用户交互等功能。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">服务器端开发</h3>
                </div>
                <p className="text-gray-600">
                  通过Node.js，JavaScript可以用于服务器端开发，创建Web服务器、API、微服务等。Node.js的非阻塞I/O模型使其在处理高并发请求时表现出色。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <Smartphone className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">移动应用开发</h3>
                </div>
                <p className="text-gray-600">
                  使用React Native、Ionic或NativeScript等框架，JavaScript可以用于开发跨平台移动应用，一套代码可以同时运行在iOS和Android平台。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Cpu className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">桌面应用开发</h3>
                </div>
                <p className="text-gray-600">
                  使用Electron或NW.js等框架，JavaScript可以用于开发跨平台桌面应用，如VS Code、Slack、Discord等知名应用都是使用Electron开发的。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">游戏开发</h3>
                </div>
                <p className="text-gray-600">
                  JavaScript结合HTML5 Canvas或WebGL可以用于开发Web游戏。此外，使用Phaser、Three.js等游戏引擎可以简化游戏开发过程。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <Brain className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">物联网(IoT)开发</h3>
                </div>
                <p className="text-gray-600">
                  JavaScript可以用于物联网设备的编程，如使用Johnny-Five或Cylon.js等库控制Arduino、Raspberry Pi等硬件设备。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">JavaScript优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">无处不在的平台支持</h4>
                    <p className="text-gray-600">JavaScript可以在几乎所有现代浏览器中运行，无需安装额外软件。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">丰富的生态系统</h4>
                    <p className="text-gray-600">拥有大量的库、框架和工具，如React、Vue、Angular、Express等。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">灵活的编程范式</h4>
                    <p className="text-gray-600">支持多种编程风格，包括面向对象、函数式和命令式编程。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">活跃的社区</h4>
                    <p className="text-gray-600">拥有庞大的开发者社区，提供大量教程、文档和支持。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">快速开发</h4>
                    <p className="text-gray-600">解释型语言，无需编译，支持热重载，加快开发速度。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">全栈开发能力</h4>
                    <p className="text-gray-600">通过Node.js，可以用同一种语言开发前端和后端，降低学习成本。</p>
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
                    <p className="text-gray-600">不同浏览器对JavaScript的实现可能存在差异，需要额外处理兼容性问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">动态类型带来的问题</h4>
                    <p className="text-gray-600">动态类型可能导致运行时错误，需要更多的测试和调试工作。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">单线程执行模型</h4>
                    <p className="text-gray-600">JavaScript是单线程的，复杂计算可能阻塞UI渲染，影响用户体验。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">安全性问题</h4>
                    <p className="text-gray-600">客户端JavaScript代码对用户可见，可能存在安全风险，如XSS攻击。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">过于灵活的语法</h4>
                    <p className="text-gray-600">JavaScript的灵活性有时会导致代码难以维护，特别是在大型项目中。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">工具链复杂</h4>
                    <p className="text-gray-600">现代JavaScript开发通常需要使用复杂的工具链，如Webpack、Babel等，增加了学习成本。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">JavaScript学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  在线教程和文档
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">MDN Web 文档</h4>
                      <p className="text-sm text-gray-600">最全面的JavaScript参考文档，包含详细的API说明和示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://zh.javascript.info/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">现代JavaScript教程</h4>
                      <p className="text-sm text-gray-600">从基础到高级的JavaScript教程，内容新颖全面。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.w3school.com.cn/js/index.asp" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">W3School JavaScript教程</h4>
                      <p className="text-sm text-gray-600">适合初学者的JavaScript基础教程，包含大量示例。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://es6.ruanyifeng.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">ECMAScript 6入门</h4>
                      <p className="text-sm text-gray-600">阮一峰的ES6教程，详细介绍了ES6的新特性。</p>
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
                  <a href="https://www.freecodecamp.org/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">freeCodeCamp</h4>
                      <p className="text-sm text-gray-600">免费的编程学习平台，提供JavaScript和前端开发的互动课程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/introduction-to-javascript" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy</h4>
                      <p className="text-sm text-gray-600">交互式JavaScript学习平台，边学边练。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://leetcode.cn/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">LeetCode</h4>
                      <p className="text-sm text-gray-600">提供大量编程题目，可以用JavaScript解题，提高算法能力。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codewars.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codewars</h4>
                      <p className="text-sm text-gray-600">通过解决编程挑战提高JavaScript技能，难度逐渐增加。</p>
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
                    <h4 className="font-medium">《JavaScript高级程序设计》</h4>
                    <p className="text-sm text-gray-600">作者：Nicholas C. Zakas</p>
                    <p className="text-sm text-gray-600">全面介绍JavaScript语言，被誉为JavaScript圣经。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《你不知道的JavaScript》</h4>
                    <p className="text-sm text-gray-600">作者：Kyle Simpson</p>
                    <p className="text-sm text-gray-600">深入探讨JavaScript的核心机制，适合进阶学习。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《JavaScript语言精粹》</h4>
                    <p className="text-sm text-gray-600">作者：Douglas Crockford</p>
                    <p className="text-sm text-gray-600">介绍JavaScript中好的部分，避开常见陷阱。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《深入理解ES6》</h4>
                    <p className="text-sm text-gray-600">作者：Nicholas C. Zakas</p>
                    <p className="text-sm text-gray-600">详细介绍ES6的新特性和使用方法。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">JavaScript案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名使用JavaScript的网站和应用</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Facebook截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Facebook</h4>
                      <p className="text-sm text-gray-600">使用React.js构建的社交媒体平台，提供高度交互的用户界面。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Google Maps截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Google Maps</h4>
                      <p className="text-sm text-gray-600">使用JavaScript实现的交互式地图应用，支持复杂的地理信息展示。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Netflix截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Netflix</h4>
                      <p className="text-sm text-gray-600">使用React.js构建的流媒体平台，提供流畅的视频播放和用户体验。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">JavaScript代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// 变量声明
let name = 'JavaScript';
const year = 1995;

// 函数定义
function greet(name) {
  return \`Hello, \${name}!\`;
}

// 箭头函数
const multiply = (a, b) => a * b;

// 数组操作
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const sum = numbers.reduce((a, b) => a + b, 0);

// 对象操作
const person = {
  name: 'John',
  age: 30,
  greet() {
    return \`Hi, I'm \${this.name}\`;
  }
};

// 类定义
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  
  sayHello() {
    return \`Hello, I'm \${this.name}\`;
  }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">异步编程示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`// Promise示例
function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => resolve(data))
      .catch(error => reject(error));
  });
}

// 使用Promise
fetchData('https://api.example.com/data')
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Async/Await示例
async function fetchUserData(userId) {
  try {
    const response = await fetch(\`https://api.example.com/users/\${userId}\`);
    if (!response.ok) {
      throw new Error('Failed to fetch user data');
    }
    const userData = await response.json();
    return userData;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
}`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">JavaScript框架示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">React.js</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">React组件示例，展示了状态管理和事件处理。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Vue.js</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 0
    }
  },
  methods: {
    increment() {
      this.count++
    }
  }
}
</script>`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">Vue组件示例，展示了数据绑定和方法定义。</p>
                  </div>
                  <div className="border rounded-lg p-4">
                    <h4 className="font-medium mb-2">Node.js</h4>
                    <div className="bg-gray-800 text-gray-200 p-3 rounded-lg overflow-x-auto mb-2">
                      <pre className="text-sm">
{`const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(\`Server running at http://localhost:\${port}\`);
});`}
                      </pre>
                    </div>
                    <p className="text-sm text-gray-600">Node.js和Express示例，创建简单的Web服务器。</p>
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
            <Link href="/languages/typescript">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">TypeScript</h3>
                  <p className="mt-2 text-sm text-gray-600">JavaScript的超集，添加了静态类型系统，提高代码可维护性。</p>
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
                  <p className="mt-2 text-sm text-gray-600">用于构建用户界面的JavaScript库，特别适合单页应用开发。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/nodejs">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Node.js</h3>
                  <p className="mt-2 text-sm text-gray-600">基于Chrome V8引擎的JavaScript运行时，用于服务器端开发。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/python">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Python</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢JavaScript的简洁，但需要更强大的后端能力，可以考虑Python。</p>
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
                如果你对JavaScript还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">JavaScript适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">JavaScript是初学编程的不错选择，它入门门槛相对较低，且应用广泛。你可以通过浏览器直接运行代码，立即看到结果，这对学习很有帮助。不过，要掌握JavaScript的高级概念可能需要一些时间。</p>
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
