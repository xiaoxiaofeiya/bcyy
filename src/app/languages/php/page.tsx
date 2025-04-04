'use client'
import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check, X, ExternalLink, BookOpen, Code, Lightbulb, Briefcase } from 'lucide-react'
import Link from 'next/link'

export default function PHPPage() {
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
                <span className="text-gray-700">PHP</span>
              </div>
            </li>
          </ol>
        </nav>

        {/* 语言标题和概览 */}
        <div className="mb-12">
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">PHP</h1>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-purple-100 text-purple-800">
              Web开发
            </span>
          </div>
          <p className="mt-4 text-xl text-gray-500">
            PHP（PHP: Hypertext Preprocessor）是一种广泛使用的开源服务器端脚本语言，特别适合Web开发，可嵌入HTML中使用。PHP代码在服务器上执行，生成HTML发送给客户端，使其成为构建动态网站的强大工具。
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
              PHP语法简单，类似C语言，对初学者友好。大量的在线资源和教程使学习曲线平缓，快速上手开发简单的Web应用。
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
              尽管有新技术兴起，PHP仍然是Web开发的主要语言之一，特别是在内容管理系统和电子商务领域。WordPress、Drupal等流行平台创造了持续的就业需求。
            </p>
          </Card>
          <Card className="p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-2">薪资水平</h3>
            <div className="flex items-center">
              <div className="w-full bg-gray-200 rounded-full h-2.5 mr-2">
                <div className="bg-green-500 h-2.5 rounded-full w-3/5"></div>
              </div>
              <span className="text-sm font-medium text-gray-500">中等</span>
            </div>
            <p className="mt-4 text-gray-600">
              PHP开发者的薪资通常处于中等水平，但随着经验增长和专业化（如Laravel、Symfony框架专家），薪资可以显著提高。
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
            <h2 className="text-2xl font-bold mb-4">PHP语言简介</h2>
            <p className="mb-4">
              PHP（PHP: Hypertext Preprocessor，最初代表Personal Home Page）是一种广泛使用的开源服务器端脚本语言，专为Web开发而设计，可以嵌入到HTML中。PHP代码在服务器上执行，生成HTML发送给客户端，使其成为构建动态网站的强大工具。
            </p>
            <p className="mb-4">
              PHP的设计理念是简单易用，同时提供强大的功能。它支持面向对象编程、函数式编程和过程式编程等多种编程范式，具有灵活性和适应性。PHP与各种数据库系统有着良好的集成，特别是MySQL，使其成为开发数据库驱动的Web应用的理想选择。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">PHP的历史</h3>
            <p className="mb-4">
              PHP的发展历程可以分为几个重要阶段：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>1994年：Rasmus Lerdorf创建了PHP的第一个版本，最初是一组Perl脚本，用于跟踪他个人网站的访问情况。</li>
              <li>1995年：Lerdorf重写了这些脚本，创建了PHP/FI（Personal Home Page/Forms Interpreter），这是PHP的第一个公开发布版本。</li>
              <li>1997年：Zeev Suraski和Andi Gutmans重写了PHP的核心，创建了PHP 3，这是PHP的第一个真正的编程语言版本。</li>
              <li>1999年：PHP 4发布，引入了Zend引擎，提高了性能和可靠性。</li>
              <li>2004年：PHP 5发布，引入了改进的面向对象编程支持、异常处理和其他现代语言特性。</li>
              <li>2015年：PHP 7发布，带来了显著的性能改进和新特性，如标量类型声明、返回类型声明等。</li>
              <li>2020年：PHP 8发布，引入了JIT编译器、联合类型、命名参数等新特性。</li>
              <li>2023年：PHP 8.2和8.3发布，继续改进语言特性和性能。</li>
            </ul>
            <p className="mb-4">
              随着时间的推移，PHP从一个简单的个人项目发展成为一种成熟的编程语言，被全球数百万网站使用，包括Facebook（早期版本）、WordPress、Wikipedia等知名网站。
            </p>
            <h3 className="text-xl font-semibold mb-2 mt-6">PHP的特点</h3>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>服务器端脚本语言：PHP代码在服务器上执行，只有结果被发送到客户端。</li>
              <li>嵌入HTML：PHP代码可以直接嵌入到HTML中，使开发动态网页变得简单。</li>
              <li>跨平台：PHP可以在各种操作系统上运行，包括Windows、Linux、macOS等。</li>
              <li>数据库集成：PHP与各种数据库系统有着良好的集成，特别是MySQL。</li>
              <li>开源免费：PHP是开源软件，可以免费使用和分发。</li>
              <li>大型社区：PHP拥有庞大的开发者社区和丰富的文档资源。</li>
              <li>丰富的框架：Laravel、Symfony、CodeIgniter等框架简化了PHP开发。</li>
              <li>灵活的语法：PHP的语法灵活，允许多种编程风格。</li>
              <li>丰富的扩展：PHP有大量的扩展库，可以扩展其功能。</li>
              <li>易于学习：PHP的语法简单，类似C语言，对初学者友好。</li>
            </ul>
            <h3 className="text-xl font-semibold mb-2 mt-6">PHP的版本</h3>
            <p className="mb-4">
              PHP的主要版本及其特点：
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>PHP 5.x</strong>：引入了改进的面向对象编程支持、异常处理、PDO（PHP Data Objects）等。</li>
              <li><strong>PHP 7.x</strong>：带来了显著的性能改进（比PHP 5.x快2倍以上）、标量类型声明、返回类型声明、null合并运算符等。</li>
              <li><strong>PHP 8.x</strong>：引入了JIT编译器、联合类型、命名参数、属性（Attributes）、构造器属性提升等新特性。</li>
            </ul>
            <p className="mb-4">
              目前，PHP 8.x是最新的主要版本，提供了最佳的性能和最现代的语言特性。然而，许多生产环境仍在使用PHP 7.x，因为它已经非常稳定和成熟。
            </p>
          </TabsContent>
          
          {/* 应用场景 */}
          <TabsContent value="applications" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">PHP语言应用场景</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Code className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-lg font-semibold">内容管理系统（CMS）</h3>
                </div>
                <p className="text-gray-600">
                  PHP是构建内容管理系统的首选语言之一。世界上最流行的CMS平台WordPress就是用PHP开发的，占据了全球超过40%的网站市场份额。其他知名的PHP驱动的CMS包括Drupal、Joomla和TYPO3。这些系统允许用户轻松创建、管理和发布内容，而无需深入了解编程。PHP的模板系统和数据库集成使其特别适合CMS开发，能够处理大量内容和用户交互。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-green-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-semibold">电子商务平台</h3>
                </div>
                <p className="text-gray-600">
                  PHP在电子商务领域有着广泛的应用。Magento、WooCommerce和PrestaShop等流行的电子商务平台都是基于PHP构建的。这些平台提供了产品目录、购物车、支付处理、库存管理等功能。PHP的会话管理、数据库集成和安全特性使其成为处理敏感交易数据的理想选择。此外，PHP的扩展性允许开发者根据特定业务需求定制电子商务解决方案。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-purple-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-purple-600" />
                  </div>
                  <h3 className="text-lg font-semibold">企业内部应用</h3>
                </div>
                <p className="text-gray-600">
                  PHP被广泛用于开发企业内部应用，如客户关系管理（CRM）系统、人力资源管理系统、项目管理工具等。SugarCRM是一个著名的基于PHP的CRM系统。PHP的快速开发周期和与现有系统的集成能力使其成为企业应用开发的实用选择。现代PHP框架如Laravel和Symfony提供了强大的工具和结构，使开发大型企业应用变得更加高效和可维护。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-yellow-100 p-2 rounded-full mr-3">
                    <Lightbulb className="h-6 w-6 text-yellow-600" />
                  </div>
                  <h3 className="text-lg font-semibold">社交网络和社区平台</h3>
                </div>
                <p className="text-gray-600">
                  PHP适合开发社交网络和在线社区平台。Facebook早期版本就是用PHP构建的（后来开发了HipHop将PHP转换为C++以提高性能）。phpBB和vBulletin等流行的论坛软件也是基于PHP的。PHP的会话管理、用户认证和实时通信能力使其适合构建具有社交功能的网站。现代PHP应用可以结合WebSocket技术提供实时通信功能。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-red-100 p-2 rounded-full mr-3">
                    <Briefcase className="h-6 w-6 text-red-600" />
                  </div>
                  <h3 className="text-lg font-semibold">API开发</h3>
                </div>
                <p className="text-gray-600">
                  PHP可以用于构建RESTful API和Web服务。现代PHP框架如Laravel和Symfony提供了强大的工具来简化API开发。PHP的JSON处理能力和HTTP请求处理使其成为构建API的有效选择。许多企业使用PHP作为前端应用和后端系统之间的中间层，处理数据转换和业务逻辑。PHP还可以与各种认证系统集成，提供安全的API访问。
                </p>
              </div>
              <div className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <div className="bg-cyan-100 p-2 rounded-full mr-3">
                    <BookOpen className="h-6 w-6 text-cyan-600" />
                  </div>
                  <h3 className="text-lg font-semibold">教育和学习管理系统</h3>
                </div>
                <p className="text-gray-600">
                  PHP被广泛用于开发教育和学习管理系统（LMS）。Moodle是一个流行的开源LMS，完全用PHP编写，被全球数千所学校和大学使用。这些系统提供课程管理、学生评估、在线学习材料和协作工具。PHP的会话管理、用户认证和文件处理能力使其适合构建复杂的教育平台。此外，PHP的扩展性允许开发者根据特定教育需求定制解决方案。
                </p>
              </div>
            </div>
          </TabsContent>
          
          {/* 优缺点分析 */}
          <TabsContent value="pros-cons" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">PHP语言优缺点分析</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                  <Check className="h-5 w-5 mr-2" />
                  优点
                </h3>
                <div className="space-y-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">易于学习和使用</h4>
                    <p className="text-gray-600">PHP语法简单，类似C语言，学习曲线平缓。PHP代码可以直接嵌入HTML中，使Web开发变得直观。大量的在线教程、文档和社区支持使初学者能够快速上手。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">专为Web开发设计</h4>
                    <p className="text-gray-600">PHP是专门为Web开发而设计的，提供了许多内置功能，如会话管理、表单处理、文件上传等。PHP与HTML的无缝集成使动态网页开发变得简单高效。PHP的输出缓冲、头部管理等功能专门针对HTTP响应进行了优化。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">广泛的数据库支持</h4>
                    <p className="text-gray-600">PHP支持几乎所有主流数据库系统，包括MySQL、PostgreSQL、SQLite、MongoDB等。PDO（PHP Data Objects）提供了统一的数据库访问接口，简化了数据库操作。PHP与MySQL的组合是Web开发中最常见和最成熟的技术栈之一。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">庞大的生态系统</h4>
                    <p className="text-gray-600">PHP拥有庞大的开源生态系统，包括框架（Laravel、Symfony、CodeIgniter）、CMS（WordPress、Drupal）、电子商务平台（Magento、WooCommerce）等。Composer包管理器简化了依赖管理，使开发者能够轻松集成第三方库。PHP拥有超过25,000个包可通过Packagist获取。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">跨平台兼容性</h4>
                    <p className="text-gray-600">PHP可以在几乎所有操作系统上运行，包括Windows、Linux、macOS等。PHP与Apache、Nginx等主流Web服务器有良好的集成。PHP应用可以轻松部署在各种托管环境中，从共享主机到云平台。</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">成本效益高</h4>
                    <p className="text-gray-600">PHP是开源免费的，降低了开发成本。PHP开发者市场庞大，招聘相对容易且成本较低。PHP应用可以部署在经济实惠的共享主机上，不需要专用服务器。PHP的快速开发周期可以缩短项目时间，降低开发成本。</p>
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
                    <h4 className="font-medium mb-1">历史包袱</h4>
                    <p className="text-gray-600">PHP的设计不一致，函数命名和参数顺序缺乏统一标准（如strpos和array_search的参数顺序不同）。为了向后兼容，一些设计缺陷和不良实践被保留下来。虽然PHP 7和8有显著改进，但仍然存在历史遗留问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">安全隐患</h4>
                    <p className="text-gray-600">PHP的灵活性和易用性可能导致安全问题，如SQL注入、跨站脚本（XSS）等。默认配置可能不够安全，需要额外配置和注意。不良的编码实践可能导致安全漏洞，特别是对于初学者。虽然现代PHP框架提供了安全机制，但仍需开发者具备安全意识。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">性能限制</h4>
                    <p className="text-gray-600">虽然PHP 7和8显著提高了性能，但与编译语言相比仍有差距。PHP的共享无状态模型意味着每个请求都需要重新初始化应用状态。对于高并发应用，PHP可能需要更多的服务器资源。复杂的PHP应用可能面临性能瓶颈，需要额外的缓存和优化策略。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">不适合所有类型的应用</h4>
                    <p className="text-gray-600">PHP主要设计用于Web开发，不太适合桌面应用、系统编程或高性能计算。PHP的异步和并发处理能力相对有限，不如Node.js或Go等语言。长时间运行的进程可能会遇到内存泄漏和资源管理问题。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">声誉问题</h4>
                    <p className="text-gray-600">PHP在某些开发者圈子中有负面声誉，被认为是"不严肃"的语言。早期PHP代码的质量问题影响了语言的整体形象。一些公司可能因为这种声誉而避免使用PHP，尽管现代PHP已经有了显著改进。</p>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-1">类型系统的局限性</h4>
                    <p className="text-gray-600">虽然PHP 7引入了类型声明，但PHP仍然是一种动态类型语言，缺乏静态类型语言的某些安全性。类型转换可能导致意外行为，如"2" + "2"等于4而不是"22"。虽然PHP 8改进了类型系统，但仍不如TypeScript或Java等语言严格。</p>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 学习资源 */}
          <TabsContent value="resources" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">PHP语言学习资源</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-500" />
                  官方文档和教程
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.php.net/manual/zh/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHP官方文档（中文）</h4>
                      <p className="text-sm text-gray-600">最权威的PHP参考资料，包含详细的函数说明、语言特性和示例代码。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.php.net/manual/en/getting-started.php" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHP入门指南</h4>
                      <p className="text-sm text-gray-600">官方提供的PHP入门教程，适合初学者快速上手。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://phptherightway.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHP The Right Way</h4>
                      <p className="text-sm text-gray-600">现代PHP最佳实践指南，涵盖编码标准、安全、测试等主题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.php-fig.org/psr/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHP标准推荐（PSR）</h4>
                      <p className="text-sm text-gray-600">PHP框架互操作性小组制定的编码标准和接口规范。</p>
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
                  <a href="https://laracasts.com/topics/php" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Laracasts</h4>
                      <p className="text-sm text-gray-600">高质量的PHP和Laravel视频教程，由Jeffrey Way创建。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.codecademy.com/learn/learn-php" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Codecademy - Learn PHP</h4>
                      <p className="text-sm text-gray-600">交互式PHP学习课程，适合初学者。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.udemy.com/course/php-for-complete-beginners-includes-msql-object-oriented/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Udemy - PHP for Beginners</h4>
                      <p className="text-sm text-gray-600">Edwin Diaz的PHP入门课程，包括MySQL和面向对象编程。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.pluralsight.com/paths/php" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Pluralsight - PHP Path</h4>
                      <p className="text-sm text-gray-600">系统的PHP学习路径，从基础到高级主题。</p>
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
                    <h4 className="font-medium">《Modern PHP》</h4>
                    <p className="text-sm text-gray-600">作者：Josh Lockhart</p>
                    <p className="text-sm text-gray-600">介绍现代PHP开发实践，包括命名空间、Composer、PSR标准等。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《PHP与MySQL Web开发》</h4>
                    <p className="text-sm text-gray-600">作者：Luke Welling, Laura Thomson</p>
                    <p className="text-sm text-gray-600">经典的PHP和MySQL入门书籍，适合初学者。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《PHP Objects, Patterns, and Practice》</h4>
                    <p className="text-sm text-gray-600">作者：Matt Zandstra</p>
                    <p className="text-sm text-gray-600">深入探讨PHP面向对象编程、设计模式和最佳实践。</p>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h4 className="font-medium">《Learning PHP, MySQL & JavaScript》</h4>
                    <p className="text-sm text-gray-600">作者：Robin Nixon</p>
                    <p className="text-sm text-gray-600">全面介绍Web开发技术栈，包括PHP、MySQL和JavaScript。</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3 flex items-center">
                  <Code className="h-5 w-5 mr-2 text-yellow-500" />
                  框架和工具
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://laravel.com/docs" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Laravel</h4>
                      <p className="text-sm text-gray-600">最流行的PHP框架，提供优雅的语法和丰富的功能。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://symfony.com/doc/current/index.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Symfony</h4>
                      <p className="text-sm text-gray-600">企业级PHP框架，提供可重用的组件。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://getcomposer.org/doc/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Composer</h4>
                      <p className="text-sm text-gray-600">PHP依赖管理工具，简化库和包的安装和更新。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://phpunit.de/documentation.html" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHPUnit</h4>
                      <p className="text-sm text-gray-600">PHP单元测试框架，用于编写和运行测试。</p>
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
                  <a href="https://stackoverflow.com/questions/tagged/php" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Stack Overflow - PHP</h4>
                      <p className="text-sm text-gray-600">PHP相关问题和解答的最大集合。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.reddit.com/r/PHP/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">Reddit - r/PHP</h4>
                      <p className="text-sm text-gray-600">PHP开发者社区，讨论新闻、技巧和问题。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://www.php.net/mailing-lists.php" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHP邮件列表</h4>
                      <p className="text-sm text-gray-600">官方PHP邮件列表，讨论PHP开发和使用。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                  <a href="https://phptownhall.com/" target="_blank" rel="noopener noreferrer" className="flex items-center p-3 border rounded-lg hover:bg-gray-50">
                    <div className="flex-1">
                      <h4 className="font-medium">PHP Town Hall</h4>
                      <p className="text-sm text-gray-600">PHP播客，讨论PHP社区和开发。</p>
                    </div>
                    <ExternalLink className="h-4 w-4 text-gray-400" />
                  </a>
                </div>
              </div>
            </div>
          </TabsContent>
          
          {/* 案例展示 */}
          <TabsContent value="examples" className="p-6 bg-white rounded-lg shadow mt-2">
            <h2 className="text-2xl font-bold mb-4">PHP语言案例展示</h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3">知名PHP项目</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">WordPress截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">WordPress</h4>
                      <p className="text-sm text-gray-600">全球最流行的内容管理系统，占据了超过40%的网站市场份额。WordPress提供了强大的博客和网站构建功能，拥有庞大的插件和主题生态系统。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Laravel截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Laravel</h4>
                      <p className="text-sm text-gray-600">最流行的PHP框架，以优雅的语法和强大的功能著称。Laravel简化了常见任务如路由、认证、缓存和队列，使Web开发变得更加高效和愉快。</p>
                    </div>
                  </div>
                  <div className="border rounded-lg overflow-hidden">
                    <div className="h-40 bg-gray-200 flex items-center justify-center">
                      <span className="text-gray-500">Magento截图</span>
                    </div>
                    <div className="p-4">
                      <h4 className="font-medium mb-1">Magento</h4>
                      <p className="text-sm text-gray-600">领先的开源电子商务平台，提供灵活的购物车系统、强大的营销工具和搜索引擎优化功能。Magento被全球数千家企业用于构建在线商店。</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">PHP代码示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">基础语法示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<?php
// 变量声明
$name = "PHP";
$version = 8.1;
$isAwesome = true;

// 输出
echo "Hello, $name!<br>";
echo "Version: " . $version . "<br>";

// 条件语句
if ($isAwesome) {
    echo "PHP is awesome!<br>";
} else {
    echo "PHP is still good.<br>";
}

// 循环
echo "Counting: ";
for ($i = 1; $i <= 5; $i++) {
    echo $i . " ";
}
echo "<br>";

// 数组
$fruits = ["apple", "banana", "cherry"];
echo "Fruits: " . implode(", ", $fruits) . "<br>";

// 关联数组
$person = [
    "name" => "John",
    "age" => 30,
    "city" => "New York"
];
echo "Person: " . $person["name"] . ", " . $person["age"] . " years old<br>";

// 函数定义
function greet($name, $time = "day") {
    return "Good $time, $name!";
}

echo greet("Alice", "morning") . "<br>";
echo greet("Bob") . "<br>";

// 类和对象
class User {
    // 属性
    public $name;
    private $email;
    protected $role;
    
    // 构造函数
    public function __construct($name, $email, $role = "user") {
        $this->name = $name;
        $this->email = $email;
        $this->role = $role;
    }
    
    // 方法
    public function getInfo() {
        return "User: {$this->name}, Email: {$this->email}, Role: {$this->role}";
    }
    
    // 静态方法
    public static function getVersion() {
        return PHP_VERSION;
    }
}

$user = new User("Charlie", "charlie@example.com", "admin");
echo $user->getInfo() . "<br>";
echo "PHP Version: " . User::getVersion() . "<br>";

// 继承
class Admin extends User {
    private $permissions;
    
    public function __construct($name, $email, $permissions = []) {
        parent::__construct($name, $email, "admin");
        $this->permissions = $permissions;
    }
    
    public function getInfo() {
        return parent::getInfo() . ", Permissions: " . implode(", ", $this->permissions);
    }
}

$admin = new Admin("Dave", "dave@example.com", ["create", "update", "delete"]);
echo $admin->getInfo() . "<br>";

// 异常处理
function divide($a, $b) {
    if ($b == 0) {
        throw new Exception("Division by zero");
    }
    return $a / $b;
}

try {
    echo "10 / 2 = " . divide(10, 2) . "<br>";
    echo "10 / 0 = " . divide(10, 0) . "<br>";
} catch (Exception $e) {
    echo "Error: " . $e->getMessage() . "<br>";
} finally {
    echo "Division operation completed.<br>";
}

// 日期和时间
$now = new DateTime();
echo "Current date and time: " . $now->format('Y-m-d H:i:s') . "<br>";

// JSON处理
$jsonData = '{"name":"Eve","age":25,"city":"London"}';
$data = json_decode($jsonData, true);
echo "JSON data: " . $data["name"] . " is " . $data["age"] . " years old<br>";

$newData = ["name" => "Frank", "age" => 35, "city" => "Paris"];
echo "JSON encoded: " . json_encode($newData) . "<br>";

// 文件操作
$file = "example.txt";
file_put_contents($file, "Hello, PHP File Handling!");
echo "File written successfully.<br>";

$content = file_get_contents($file);
echo "File content: " . $content . "<br>";

// 会话管理
session_start();
$_SESSION["user_id"] = 123;
echo "Session started, user_id set to: " . $_SESSION["user_id"] . "<br>";

// 正则表达式
$pattern = "/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$/";
$email = "test@example.com";
if (preg_match($pattern, $email)) {
    echo "Valid email: $email<br>";
} else {
    echo "Invalid email: $email<br>";
}
?>`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Web应用示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<?php
// 简单的MVC框架示例

// 配置
$config = [
    'db' => [
        'host' => 'localhost',
        'user' => 'root',
        'pass' => 'password',
        'name' => 'blog'
    ],
    'routes' => [
        '/' => ['controller' => 'HomeController', 'action' => 'index'],
        '/posts' => ['controller' => 'PostController', 'action' => 'index'],
        '/posts/view' => ['controller' => 'PostController', 'action' => 'view'],
        '/posts/create' => ['controller' => 'PostController', 'action' => 'create'],
        '/login' => ['controller' => 'AuthController', 'action' => 'login'],
        '/logout' => ['controller' => 'AuthController', 'action' => 'logout']
    ]
];

// 数据库连接
class Database {
    private $connection;
    
    public function __construct($config) {
        try {
            $this->connection = new PDO(
                "mysql:host={$config['host']};dbname={$config['name']}",
                $config['user'],
                $config['pass'],
                [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
            );
        } catch (PDOException $e) {
            die("Database connection failed: " . $e->getMessage());
        }
    }
    
    public function query($sql, $params = []) {
        $statement = $this->connection->prepare($sql);
        $statement->execute($params);
        return $statement;
    }
    
    public function fetch($sql, $params = []) {
        return $this->query($sql, $params)->fetch(PDO::FETCH_ASSOC);
    }
    
    public function fetchAll($sql, $params = []) {
        return $this->query($sql, $params)->fetchAll(PDO::FETCH_ASSOC);
    }
    
    public function insert($table, $data) {
        $columns = implode(', ', array_keys($data));
        $placeholders = implode(', ', array_fill(0, count($data), '?'));
        
        $sql = "INSERT INTO {$table} ({$columns}) VALUES ({$placeholders})";
        $this->query($sql, array_values($data));
        
        return $this->connection->lastInsertId();
    }
}

// 基础控制器
abstract class Controller {
    protected $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    protected function render($view, $data = []) {
        extract($data);
        include "views/{$view}.php";
    }
    
    protected function redirect($url) {
        header("Location: {$url}");
        exit;
    }
}

// 首页控制器
class HomeController extends Controller {
    public function index() {
        $latestPosts = $this->db->fetchAll("SELECT * FROM posts ORDER BY created_at DESC LIMIT 5");
        $this->render('home/index', ['posts' => $latestPosts]);
    }
}

// 文章控制器
class PostController extends Controller {
    public function index() {
        $posts = $this->db->fetchAll("SELECT * FROM posts ORDER BY created_at DESC");
        $this->render('posts/index', ['posts' => $posts]);
    }
    
    public function view() {
        if (!isset($_GET['id'])) {
            $this->redirect('/posts');
        }
        
        $id = (int) $_GET['id'];
        $post = $this->db->fetch("SELECT * FROM posts WHERE id = ?", [$id]);
        
        if (!$post) {
            $this->redirect('/posts');
        }
        
        $comments = $this->db->fetchAll("SELECT * FROM comments WHERE post_id = ? ORDER BY created_at", [$id]);
        $this->render('posts/view', ['post' => $post, 'comments' => $comments]);
    }
    
    public function create() {
        // 检查用户是否已登录
        session_start();
        if (!isset($_SESSION['user_id'])) {
            $this->redirect('/login');
        }
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $title = $_POST['title'] ?? '';
            $content = $_POST['content'] ?? '';
            
            if (empty($title) || empty($content)) {
                $this->render('posts/create', ['error' => 'Title and content are required']);
                return;
            }
            
            $postId = $this->db->insert('posts', [
                'title' => $title,
                'content' => $content,
                'user_id' => $_SESSION['user_id'],
                'created_at' => date('Y-m-d H:i:s')
            ]);
            
            $this->redirect('/posts/view?id=' . $postId);
        } else {
            $this->render('posts/create');
        }
    }
}

// 认证控制器
class AuthController extends Controller {
    public function login() {
        session_start();
        
        // 如果用户已登录，重定向到首页
        if (isset($_SESSION['user_id'])) {
            $this->redirect('/');
        }
        
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $email = $_POST['email'] ?? '';
            $password = $_POST['password'] ?? '';
            
            if (empty($email) || empty($password)) {
                $this->render('auth/login', ['error' => 'Email and password are required']);
                return;
            }
            
            $user = $this->db->fetch("SELECT * FROM users WHERE email = ?", [$email]);
            
            if ($user && password_verify($password, $user['password'])) {
                $_SESSION['user_id'] = $user['id'];
                $_SESSION['user_name'] = $user['name'];
                $this->redirect('/');
            } else {
                $this->render('auth/login', ['error' => 'Invalid email or password']);
            }
        } else {
            $this->render('auth/login');
        }
    }
    
    public function logout() {
        session_start();
        session_destroy();
        $this->redirect('/');
    }
}

// 路由处理
function handleRequest($config) {
    $uri = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
    
    if (!isset($config['routes'][$uri])) {
        header("HTTP/1.0 404 Not Found");
        include "views/errors/404.php";
        exit;
    }
    
    $route = $config['routes'][$uri];
    $controllerName = $route['controller'];
    $actionName = $route['action'];
    
    $db = new Database($config['db']);
    $controller = new $controllerName($db);
    
    if (!method_exists($controller, $actionName)) {
        header("HTTP/1.0 404 Not Found");
        include "views/errors/404.php";
        exit;
    }
    
    $controller->$actionName();
}

// 启动应用
handleRequest($config);
?>`}
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-3">PHP框架示例</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium mb-2">Laravel控制器示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<?php

namespace App\\Http\\Controllers;

use App\\Models\\Post;
use App\\Models\\Comment;
use Illuminate\\Http\\Request;
use App\\Http\\Requests\\PostRequest;
use Illuminate\\Support\\Facades\\Auth;

class PostController extends Controller
{
    /**
     * 构造函数
     */
    public function __construct()
    {
        $this->middleware('auth')->except(['index', 'show']);
    }

    /**
     * 显示所有文章列表
     */
    public function index()
    {
        $posts = Post::with('user')
            ->orderBy('created_at', 'desc')
            ->paginate(10);
            
        return view('posts.index', compact('posts'));
    }

    /**
     * 显示创建文章表单
     */
    public function create()
    {
        return view('posts.create');
    }

    /**
     * 存储新创建的文章
     */
    public function store(PostRequest $request)
    {
        $post = Auth::user()->posts()->create([
            'title' => $request->title,
            'content' => $request->content,
            'published' => $request->has('published')
        ]);
        
        return redirect()->route('posts.show', $post)
            ->with('success', 'Post created successfully!');
    }

    /**
     * 显示指定文章
     */
    public function show(Post $post)
    {
        $post->load(['user', 'comments.user']);
        
        return view('posts.show', compact('post'));
    }

    /**
     * 显示编辑文章表单
     */
    public function edit(Post $post)
    {
        $this->authorize('update', $post);
        
        return view('posts.edit', compact('post'));
    }

    /**
     * 更新指定文章
     */
    public function update(PostRequest $request, Post $post)
    {
        $this->authorize('update', $post);
        
        $post->update([
            'title' => $request->title,
            'content' => $request->content,
            'published' => $request->has('published')
        ]);
        
        return redirect()->route('posts.show', $post)
            ->with('success', 'Post updated successfully!');
    }

    /**
     * 删除指定文章
     */
    public function destroy(Post $post)
    {
        $this->authorize('delete', $post);
        
        $post->delete();
        
        return redirect()->route('posts.index')
            ->with('success', 'Post deleted successfully!');
    }
    
    /**
     * 添加评论到文章
     */
    public function addComment(Request $request, Post $post)
    {
        $validated = $request->validate([
            'content' => 'required|min:3|max:1000'
        ]);
        
        $post->comments()->create([
            'user_id' => Auth::id(),
            'content' => $validated['content']
        ]);
        
        return back()->with('success', 'Comment added successfully!');
    }
}`}
                      </pre>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Symfony控制器示例</h4>
                    <div className="bg-gray-800 text-gray-200 p-4 rounded-lg overflow-x-auto">
                      <pre className="text-sm">
{`<?php

namespace App\\Controller;

use App\\Entity\\Post;
use App\\Entity\\Comment;
use App\\Form\\PostType;
use App\\Form\\CommentType;
use App\\Repository\\PostRepository;
use Doctrine\\ORM\\EntityManagerInterface;
use Symfony\\Component\\HttpFoundation\\Request;
use Symfony\\Component\\HttpFoundation\\Response;
use Symfony\\Component\\Routing\\Annotation\\Route;
use Symfony\\Component\\Security\\Http\\Attribute\\IsGranted;
use Symfony\\Bundle\\FrameworkBundle\\Controller\\AbstractController;

#[Route('/posts')]
class PostController extends AbstractController
{
    private EntityManagerInterface $entityManager;
    private PostRepository $postRepository;
    
    public function __construct(
        EntityManagerInterface $entityManager,
        PostRepository $postRepository
    ) {
        $this->entityManager = $entityManager;
        $this->postRepository = $postRepository;
    }

    #[Route('/', name: 'post_index', methods: ['GET'])]
    public function index(): Response
    {
        $posts = $this->postRepository->findBy(
            ['published' => true],
            ['createdAt' => 'DESC']
        );
        
        return $this->render('post/index.html.twig', [
            'posts' => $posts,
        ]);
    }

    #[Route('/new', name: 'post_new', methods: ['GET', 'POST'])]
    #[IsGranted('ROLE_USER')]
    public function new(Request $request): Response
    {
        $post = new Post();
        $post->setAuthor($this->getUser());
        
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $post->setCreatedAt(new \\DateTimeImmutable());
            
            $this->entityManager->persist($post);
            $this->entityManager->flush();

            $this->addFlash('success', 'Post created successfully!');
            
            return $this->redirectToRoute('post_show', [
                'id' => $post->getId()
            ]);
        }

        return $this->render('post/new.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'post_show', methods: ['GET', 'POST'])]
    public function show(Post $post, Request $request): Response
    {
        // 创建评论表单
        $comment = new Comment();
        $commentForm = $this->createForm(CommentType::class, $comment);
        $commentForm->handleRequest($request);
        
        // 处理评论提交
        if ($commentForm->isSubmitted() && $commentForm->isValid()) {
            $comment->setPost($post);
            $comment->setAuthor($this->getUser());
            $comment->setCreatedAt(new \\DateTimeImmutable());
            
            $this->entityManager->persist($comment);
            $this->entityManager->flush();
            
            $this->addFlash('success', 'Comment added successfully!');
            
            return $this->redirectToRoute('post_show', [
                'id' => $post->getId()
            ]);
        }

        return $this->render('post/show.html.twig', [
            'post' => $post,
            'commentForm' => $commentForm->createView(),
        ]);
    }

    #[Route('/{id}/edit', name: 'post_edit', methods: ['GET', 'POST'])]
    public function edit(Request $request, Post $post): Response
    {
        // 检查权限
        $this->denyAccessUnlessGranted('edit', $post);
        
        $form = $this->createForm(PostType::class, $post);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $post->setUpdatedAt(new \\DateTimeImmutable());
            $this->entityManager->flush();

            $this->addFlash('success', 'Post updated successfully!');
            
            return $this->redirectToRoute('post_show', [
                'id' => $post->getId()
            ]);
        }

        return $this->render('post/edit.html.twig', [
            'post' => $post,
            'form' => $form->createView(),
        ]);
    }

    #[Route('/{id}', name: 'post_delete', methods: ['POST'])]
    public function delete(Request $request, Post $post): Response
    {
        // 检查权限
        $this->denyAccessUnlessGranted('delete', $post);
        
        // 验证CSRF令牌
        if ($this->isCsrfTokenValid('delete'.$post->getId(), $request->request->get('_token'))) {
            $this->entityManager->remove($post);
            $this->entityManager->flush();
            
            $this->addFlash('success', 'Post deleted successfully!');
        }

        return $this->redirectToRoute('post_index');
    }
}`}
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
            <Link href="/languages/python-ai">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Python</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢PHP的易用性，但需要更强大的数据处理和科学计算能力，Python是一个很好的选择。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/ruby">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Ruby</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你喜欢PHP的Web开发能力，但追求更优雅的语法和约定优于配置的理念，Ruby是一个不错的选择。</p>
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
                  <p className="mt-2 text-sm text-gray-600">如果你想扩展到前端开发或构建全栈应用，JavaScript是PHP开发者的自然补充，特别是Node.js后端。</p>
                  <div className="mt-4 flex items-center text-blue-500">
                    <span className="text-sm font-medium">了解更多</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </Card>
            </Link>
            <Link href="/languages/java">
              <Card className="h-full cursor-pointer hover:shadow-lg transition-shadow duration-300">
                <div className="p-4">
                  <h3 className="text-lg font-medium text-gray-900">Java</h3>
                  <p className="mt-2 text-sm text-gray-600">如果你需要更严格的类型系统和更好的企业级支持，Java提供了强大的性能和可靠性。</p>
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
                如果你对PHP还有其他问题，或者想了解更多适合你的编程语言，可以与我们的AI助手对话。
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
                <p className="text-gray-800 text-sm">PHP适合初学者学习吗？</p>
              </div>
              <div className="bg-purple-100 rounded-lg p-3">
                <p className="text-gray-800 text-sm">PHP是一个非常适合初学者的编程语言，特别是对于想要快速开发Web应用的人。PHP语法简单，类似C语言，学习曲线平缓。PHP可以直接嵌入HTML中，使Web开发变得直观。大量的在线教程、文档和社区支持使初学者能够快速上手。此外，PHP有许多现成的框架和CMS系统（如WordPress、Laravel），可以帮助初学者快速构建功能丰富的网站。PHP的部署也相对简单，大多数Web主机都支持PHP。总的来说，如果你的目标是Web开发，PHP是一个很好的入门语言。</p>
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
