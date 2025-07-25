import Navbar from "@/components/Navbar"
import { Code2, Search, Share2, Lock, Zap, Users, Star, CheckCircle, ArrowRight, Sparkles, Terminal, Folder, Globe } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
    
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 backdrop-blur-3xl"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full text-purple-700 text-sm font-medium mb-8 shadow-lg">
              <Sparkles className="h-4 w-4 mr-2" />
              New: AI-powered snippet suggestions now available!
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-purple-900 mb-8 tracking-tight">
              Organize, Save, and Share
              <span className="block bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Code Snippets Effortlessly
              </span>
            </h1>
            
            <p className="text-xl text-purple-700 mb-12 max-w-3xl mx-auto leading-relaxed">
              Tired of losing your favorite code snippets in messy files or endless tabs? With Snippix, you can securely save, categorize, and access your code from anywhere. Whether you're working solo or sharing with your team, our powerful snippet manager makes it easy to stay organized and productive.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-8 rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 text-lg">
                Start Organizing Free
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button className="bg-white/70 backdrop-blur-sm hover:bg-white text-purple-700 font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-purple-200">
                <Terminal className="inline mr-2 h-5 w-5" />
                View Demo
              </button>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-900">50K+</div>
                <div className="text-purple-600">Developers</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-900">2M+</div>
                <div className="text-purple-600">Snippets Saved</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-900">99.9%</div>
                <div className="text-purple-600">Uptime</div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-bounce">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-2xl shadow-xl rotate-12">
            <Code2 className="h-6 w-6 text-white" />
          </div>
        </div>
        <div className="absolute top-40 right-10 animate-pulse">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-500 p-3 rounded-2xl shadow-xl -rotate-12">
            <Terminal className="h-6 w-6 text-white" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-purple-900 mb-6">
              Everything you need to manage code snippets
            </h2>
            <p className="text-xl text-purple-700 max-w-3xl mx-auto">
              Powerful features designed to make your development workflow smoother and more efficient.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Smart Search",
                description: "Find any snippet instantly with our AI-powered search that understands context and code syntax."
              },
              {
                icon: Folder,
                title: "Smart Organization",
                description: "Auto-categorize snippets by language, framework, and tags. Create custom collections for projects."
              },
              {
                icon: Share2,
                title: "Team Collaboration",
                description: "Share snippets with your team, create collaborative libraries, and maintain coding standards."
              },
              {
                icon: Lock,
                title: "Secure & Private",
                description: "Enterprise-grade security with end-to-end encryption. Your code stays private and protected."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Access your snippets in milliseconds. Optimized for speed with global CDN distribution."
              },
              {
                icon: Globe,
                title: "Cross-Platform",
                description: "Works everywhere - web, desktop, mobile, and IDE extensions. Your snippets follow you."
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-gradient-to-br from-white to-purple-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-purple-100">
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <feature.icon className="h-7 w-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-purple-900 mb-4">{feature.title}</h3>
                  <p className="text-purple-700 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-purple-900 mb-6">
                Beautiful syntax highlighting for 100+ languages
              </h2>
              <p className="text-xl text-purple-700 mb-8 leading-relaxed">
                From JavaScript to Rust, Python to Go - we support all major programming languages with beautiful syntax highlighting and smart formatting.
              </p>
              <div className="space-y-4">
                {[
                  "Automatic language detection",
                  "Custom themes and color schemes",
                  "Code formatting and prettification",
                  "Export to various formats"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-500 mr-3" />
                    <span className="text-purple-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center px-6 py-4 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-slate-400 text-sm">api-utils.js</div>
                </div>
                <div className="p-6 text-sm">
                  <pre className="text-slate-300">
{`const fetchUser = async (id) => {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
    const user = await response.json();
    return user;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};`}
                  </pre>
                </div>
              </div>
              
              {/* Floating tags */}
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                JavaScript
              </div>
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                API Utils
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Loved by developers worldwide
            </h2>
            <div className="flex justify-center items-center mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
              ))}
              <span className="ml-4 text-white text-xl font-semibold">4.9/5 from 10,000+ reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Chen",
                role: "Senior Developer at Google",
                content: "Snippix has revolutionized how our team shares and manages code. The search functionality is incredible!"
              },
              {
                name: "Michael Rodriguez",
                role: "Full Stack Developer",
                content: "I used to lose so much time searching for that one perfect snippet. Not anymore! Snippix is a game-changer."
              },
              {
                name: "Emily Johnson",
                role: "Tech Lead at Microsoft",
                content: "The collaboration features are outstanding. Our entire team is more productive since we started using Snippix."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <p className="text-white mb-6 text-lg leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-purple-200">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-purple-900 mb-8">
            Ready to organize your code snippets?
          </h2>
          <p className="text-xl text-purple-700 mb-12 leading-relaxed">
            Join thousands of developers who have already transformed their workflow with Snippix.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-4 px-10 rounded-xl shadow-2xl hover:shadow-purple-500/25 transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Start Free Today
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button className="bg-white/70 backdrop-blur-sm hover:bg-white text-purple-700 font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-purple-200">
              Schedule Demo
            </button>
          </div>
          
          <p className="text-purple-600">
            No credit card required • Free forever plan available • Setup in 2 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-sm border-t border-purple-200 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2 rounded-xl">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-purple-900">Snippix</span>
            </div>
            
            <div className="flex space-x-8 text-purple-700">
              <a href="#" className="hover:text-purple-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-purple-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-purple-900 transition-colors">Support</a>
              <a href="#" className="hover:text-purple-900 transition-colors">Docs</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-purple-200 text-center text-purple-600">
            <p>&copy; 2025 Snippix. All rights reserved. Made with ❤️ by Rishabh</p>
          </div>
        </div>
      </footer>
    </main>
  )
}