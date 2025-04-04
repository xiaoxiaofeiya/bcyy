"use client"

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function PopupAd() {
  const [isOpen, setIsOpen] = useState(false)
  
  useEffect(() => {
    // 5秒后显示弹窗
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [])
  
  const handleClose = () => {
    setIsOpen(false)
  }
  
  if (!isOpen) return null
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-3xl w-full mx-4 relative">
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={handleClose} 
          className="absolute right-4 top-4 p-0 h-8 w-8"
        >
          <X className="h-6 w-6" />
        </Button>
        
        <h2 className="text-2xl font-bold text-center mb-6">程序员必备开发工具</h2>
        
        <div className="space-y-6 mb-6">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-lg p-6 text-white hover:shadow-xl transition-all">
            <div className="flex items-start">
              <div className="flex-1">
                <h3 className="font-bold text-xl mb-3">Wildcard - 虚拟信用卡服务</h3>
                <div className="mb-4">
                  <p className="mb-2">一分钟内获取海外虚拟信用卡，轻松订阅：</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>ChatGPT Plus、Midjourney、Claude等AI服务</li>
                    <li>App Store、Google Play等应用商店</li>
                    <li>Amazon Pay、GitHub、TikTok等海外平台</li>
                    <li>支持支付宝充值，操作便捷安全</li>
                  </ul>
                </div>
                <Link 
                  href="https://bewildcard.com/?code=MSC8OSNP" 
                  target="_blank"
                  className="inline-block px-4 py-2 bg-white text-purple-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
                >
                  获取虚拟信用卡
                </Link>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-green-500 to-teal-600 rounded-lg p-6 text-white hover:shadow-xl transition-all">
              <h3 className="font-bold text-xl mb-3">ApiYi - API开发平台</h3>
              <div className="mb-4">
                <p className="mb-2">专业的API开发与管理工具：</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>快速设计与构建RESTful API</li>
                  <li>自动生成API文档，降低沟通成本</li>
                  <li>API测试与监控，确保服务质量</li>
                  <li>安全认证与授权机制</li>
                </ul>
              </div>
              <Link 
                href="https://www.apiyi.com/register/?aff_code=F3zz" 
                target="_blank"
                className="inline-block px-4 py-2 bg-white text-teal-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                开始使用 ApiYi
              </Link>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500 to-red-600 rounded-lg p-6 text-white hover:shadow-xl transition-all">
              <h3 className="font-bold text-xl mb-3">小报童 - AI编程课程</h3>
              <div className="mb-4">
                <p className="mb-2">探索AI编程的前沿技术：</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>最新AI编程技术与应用场景</li>
                  <li>实用项目案例与实战演练</li>
                  <li>专业讲师指导，系统学习路径</li>
                  <li>代码随学随用，快速提升技能</li>
                </ul>
              </div>
              <Link 
                href="https://www.xiaobot.net/p/AIProgram?refer=bb809c59-42a6-4707-a428-dad6e0bbd94b" 
                target="_blank"
                className="inline-block px-4 py-2 bg-white text-red-600 font-bold rounded-md hover:bg-gray-100 transition-colors"
              >
                学习 AI 编程
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 