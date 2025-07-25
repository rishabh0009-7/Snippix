import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import { Code2, Search, Plus } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-50 backdrop-blur-xl bg-white/95">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-slate-800 p-2.5 rounded-xl shadow-md">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-slate-900 tracking-tight">
              Snippix
            </h1>
          </div>

      

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <SignedOut>
              <SignInButton>
                <button className="text-slate-600 hover:text-slate-900 px-5 py-2.5 text-sm font-semibold transition-colors rounded-xl hover:bg-slate-50">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-sm px-7 py-3 transition-all duration-200 shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              
              <div className="border-l border-slate-200 pl-5 ml-4">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "h-10 w-10 ring-2 ring-slate-200 hover:ring-blue-300 transition-all"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>

        
        
      </div>
    </nav>
  )
}