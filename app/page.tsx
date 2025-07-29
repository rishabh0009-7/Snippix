// src/app/page.tsx
'use client'
import Link from 'next/link';
import { Code2, Sparkles, Archive, Zap } from 'lucide-react';
import Navbar from '@/components/Navbar';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
     
      

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600 mb-8">
            <Sparkles className="w-4 h-4 mr-2" />
            AI-powered code management
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Store, Organize & 
            <br />
            <span className="text-black">Understand</span> Your Code
          </h1>
          
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            The intelligent code snippet manager that not only stores your code but explains it with AI. 
            Never forget what your code does again.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link 
              href="/snippets"
              className="bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Start Building
            </Link>
            <button className="text-gray-600 px-8 py-4 rounded-xl text-lg font-medium hover:text-gray-900 transition-colors flex items-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mr-3">
                <div className="w-0 h-0 border-l-[6px] border-l-gray-600 border-t-[4px] border-t-transparent border-b-[4px] border-b-transparent ml-1"></div>
              </div>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">10k+</div>
              <div className="text-gray-600">Snippets Created</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
              <div className="text-gray-600">Developers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-2">99%</div>
              <div className="text-gray-600">Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything you need to manage code
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Professional tools designed for developers who value organization and understanding
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <Archive className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Smart Storage</h3>
              <p className="text-gray-600 leading-relaxed">
                Organize your code snippets with intelligent tagging and search capabilities. 
                Find what you need instantly.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">AI Explanations</h3>
              <p className="text-gray-600 leading-relaxed">
                Get instant explanations of your code with our AI assistant. 
                Understand complex logic at a glance.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Lightning Fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Built for speed with modern technologies. 
                Access your snippets instantly, anywhere.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="how-it-works" className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple steps to organize and understand your code better
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Save Your Code</h3>
              <p className="text-gray-600 leading-relaxed">
                Paste your code snippets with title, description, and tags for easy organization.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Get AI Explanations</h3>
              <p className="text-gray-600 leading-relaxed">
                Let our AI explain what your code does in simple, understandable terms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-2xl flex items-center justify-center mx-auto mb-6">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Find & Reuse</h3>
              <p className="text-gray-600 leading-relaxed">
                Search, filter, and quickly copy your snippets whenever you need them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to organize your code?
          </h2>
          <p className="text-xl text-gray-600 mb-10">
            Join thousands of developers who trust CodeVault with their most important snippets.
          </p>
          <Link 
            href="/snippets"
            className="inline-flex items-center bg-black text-white px-8 py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Get Started Free
            <Code2 className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
                <Code2 className="w-4 h-4 text-white" />
              </div>
              <span className="font-semibold text-gray-900">CodeVault</span>
            </div>
            <div className="text-sm text-gray-600">
              © 2025 CodeVault. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}