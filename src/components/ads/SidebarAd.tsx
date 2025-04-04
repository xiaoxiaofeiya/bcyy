"use client"

import React, { useState } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function SidebarAd() {
  const [isOpen, setIsOpen] = useState(true)

  if (!isOpen) {
    return (
      <Button 
        onClick={() => setIsOpen(true)} 
        className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-l-md shadow-lg"
      >
        推荐工具
      </Button>
    )
  }

  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-200 shadow-lg rounded-l-lg p-5 w-72 transition-all">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-bold text-blue-600 text-lg">推荐开发工具</h3>
        <Button variant="ghost" size="sm" onClick={() => setIsOpen(false)} className="p-0 h-7 w-7">
          <X className="h-5 w-5" />
        </Button>
      </div>
      
      <div className="space-y-5">
        <Link 
          href="https://bewildcard.com/?code=MSC8OSNP" 
          target="_blank"
          className="block p-4 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-md text-white hover:shadow-md transition-all"
        >
          <h4 className="font-bold mb-2">Wildcard - 虚拟信用卡</h4>
          <p className="text-sm mb-2">一分钟获取海外虚拟信用卡：</p>
          <ul className="text-xs list-disc pl-4 space-y-1 text-white/90">
            <li>订阅ChatGPT Plus等AI服务</li>
            <li>支付App Store、Google Play</li>
            <li>支持支付宝充值，操作简单</li>
          </ul>
        </Link>
        
        <Link 
          href="https://www.apiyi.com/register/?aff_code=F3zz" 
          target="_blank"
          className="block p-4 bg-gradient-to-r from-green-500 to-teal-600 rounded-md text-white hover:shadow-md transition-all"
        >
          <h4 className="font-bold mb-2">ApiYi - API开发平台</h4>
          <p className="text-sm mb-2">专业API设计与管理工具：</p>
          <ul className="text-xs list-disc pl-4 space-y-1 text-white/90">
            <li>高效构建可靠的API服务</li>
            <li>自动生成接口文档与SDK</li>
            <li>API测试与性能监控</li>
          </ul>
        </Link>
        
        <Link 
          href="https://www.xiaobot.net/p/AIProgram?refer=bb809c59-42a6-4707-a428-dad6e0bbd94b" 
          target="_blank"
          className="block p-4 bg-gradient-to-r from-orange-500 to-red-600 rounded-md text-white hover:shadow-md transition-all"
        >
          <h4 className="font-bold mb-2">小报童 - AI编程教程</h4>
          <p className="text-sm mb-2">专业AI编程学习资源：</p>
          <ul className="text-xs list-disc pl-4 space-y-1 text-white/90">
            <li>最新AI技术原理与应用</li>
            <li>实用开发案例与最佳实践</li>
            <li>从入门到精通的学习路径</li>
          </ul>
        </Link>
      </div>
    </div>
  )
} 