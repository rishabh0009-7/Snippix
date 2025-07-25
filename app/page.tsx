import Navbar from "@/components/Navbar"
import { Code2, Search, Share2, Lock, Zap, Users, Star, CheckCircle, ArrowRight, BookOpen, Terminal, Folder, Globe, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"
export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50">
      
      
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-28">
          <div className="text-center">
            <div className="inline-flex items-center px-5 py-2.5 bg-blue-50 rounded-full text-blue-700 text-sm font-medium mb-10 shadow-sm border border-blue-100">
              <BookOpen className="h-4 w-4 mr-2" />
              Used by developers at Google, Microsoft, and Meta
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-none">
              Your Code Library,
              <span className="block text-slate-600">
                Beautifully Organized
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-14 max-w-3xl mx-auto leading-relaxed">
              Stop hunting through old projects for that perfect snippet. Snippix helps you collect, organize, and instantly find the code that matters most to your workflow.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-center mb-18">
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-9 rounded-xl shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 text-lg">
                <Link href = "/create-snippet">Start Building Your Library</Link>
                <ArrowRight className="inline ml-2 h-5 w-5" />
              </button>
              <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-9 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-slate-200">
                <Terminal className="inline mr-2 h-5 w-5" />
                See How It Works
              </button>
            </div>
            
            {/* Clean Stats */}
            <div className="grid grid-cols-3 gap-12 max-w-xl mx-auto mt-16">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">45K+</div>
                <div className="text-slate-500 text-sm font-medium">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">1.8M+</div>
                <div className="text-slate-500 text-sm font-medium">Code Snippets</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900">150+</div>
                <div className="text-slate-500 text-sm font-medium">Languages</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">
              Everything you need for better code management
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Simple tools that make organizing and finding your code effortless.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: "Instant Search",
                description: "Find any snippet in seconds with smart search that understands your code and comments."
              },
              {
                icon: Folder,
                title: "Smart Collections",
                description: "Organize snippets by project, language, or custom tags. Create collections that make sense to you."
              },
              {
                icon: Share2,
                title: "Easy Sharing",
                description: "Share snippets with your team or make them public. Perfect for code reviews and collaboration."
              },
              {
                icon: Shield,
                title: "Always Secure",
                description: "Your private snippets stay private. Industry-standard encryption keeps your code safe."
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "Built for speed. Access your snippets instantly, even with thousands in your library."
              },
              {
                icon: Globe,
                title: "Works Everywhere",
                description: "Web app, browser extension, and API access. Your snippets follow you wherever you code."
              }
            ].map((feature, index) => (
              <div key={index} className="group">
                <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 border border-slate-100">
                  <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition-colors duration-300">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-4">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Code Preview Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-slate-900 mb-6">
                Syntax highlighting that actually looks good
              </h2>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Beautiful themes for every language. Your code looks professional whether you're sharing with teammates or presenting to clients.
              </p>
              <div className="space-y-4">
                {[
                  "Automatic language detection and formatting",
                  "Multiple color themes to match your style",
                  "Clean typography that's easy to read",
                  "Export options for presentations and docs"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-3 w-3 text-green-600" />
                    </div>
                    <span className="text-slate-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-slate-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center px-6 py-4 bg-slate-800 border-b border-slate-700">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="ml-4 text-slate-400 text-sm font-medium">user-service.js</div>
                </div>
                <div className="p-6 text-sm font-mono">
                  <pre className="text-slate-300 leading-relaxed">
{`async function getUserProfile(userId) {
  const cacheKey = \`user:\${userId}\`;
  
  // Check cache first
  let user = await redis.get(cacheKey);
  if (user) {
    return JSON.parse(user);
  }
  
  // Fetch from database
  user = await db.users.findById(userId);
  if (!user) {
    throw new Error('User not found');
  }
  
  // Cache for 1 hour
  await redis.setex(cacheKey, 3600, JSON.stringify(user));
  return user;
}`}
                  </pre>
                </div>
              </div>
              
              {/* Clean tags */}
              <div className="absolute -top-3 -right-3 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                JavaScript
              </div>
              <div className="absolute -bottom-3 -left-3 bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-lg">
                Backend
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Simple Testimonials */}
      <section className="py-24 bg-slate-900">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-4xl font-bold text-white mb-6">
              Loved by developers everywhere
            </h2>
            <div className="flex justify-center items-center">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current mx-0.5" />
              ))}
              <span className="ml-4 text-slate-300 text-lg">4.8/5 from 1,200+ reviews</span>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Frontend Developer",
                content: "Finally, a snippet manager that doesn't get in my way. Clean, fast, and exactly what I needed."
              },
              {
                name: "Jordan Kim",
                role: "Full Stack Engineer",
                content: "The search is incredibly smart. It finds exactly what I'm looking for even when I can't remember the exact code."
              },
              {
                name: "Sam Taylor",
                role: "Backend Developer", 
                content: "Been using this for 6 months. It's become an essential part of my workflow. Highly recommend."
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-slate-800 rounded-2xl p-8 border border-slate-700">
                <p className="text-slate-200 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center mr-4">
                    <span className="text-slate-300 font-semibold text-sm">{testimonial.name.split(' ').map(n => n[0]).join('')}</span>
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-slate-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clean CTA Section */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-6 lg:px-8">
          <h2 className="text-5xl font-bold text-slate-900 mb-8">
            Start organizing your code today
          </h2>
          <p className="text-xl text-slate-600 mb-12 leading-relaxed">
            Join thousands of developers who've already built better coding habits with Snippix.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center mb-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-10 rounded-xl shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1 transition-all duration-300 text-lg">
              Get Started Free
              <ArrowRight className="inline ml-2 h-5 w-5" />
            </button>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold py-4 px-10 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg border border-slate-200">
              View Pricing
            </button>
          </div>
          
          <p className="text-slate-500">
            Free forever • No credit card required • Setup takes 2 minutes
          </p>
        </div>
      </section>

      {/* Clean Footer */}
      <footer className="bg-slate-50 border-t border-slate-200 py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <div className="bg-slate-800 p-2 rounded-xl">
                <Code2 className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-900">Snippix</span>
            </div>
            
            <div className="flex space-x-8 text-slate-600">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Support</a>
              <a href="#" className="hover:text-slate-900 transition-colors">API</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-slate-200 text-center text-slate-500">
            <p>&copy; 2025 Snippix. Built for developers who care about their craft.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}