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
    <nav className="bg-gradient-to-r from-purple-50 to-pink-50 border-b border-purple-200 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-2.5 rounded-xl shadow-lg">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h1 className="text-2xl font-bold text-purple-900 tracking-tight">
              Snippix
            </h1>
          </div>

          {/* Search Bar - Only show when signed in
          <SignedIn>
            <div className="hidden sm:flex flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-purple-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search snippets..."
                  className="block w-full pl-10 pr-3 py-2.5 border border-purple-200 rounded-xl leading-5 bg-white/70 backdrop-blur-sm text-purple-900 placeholder-purple-400 focus:outline-none focus:placeholder-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all shadow-sm"
                />
              </div>
            </div>
          // </SignedIn> */}

          {/* Auth Buttons */}
          <div className="flex items-center space-x-3">
            <SignedOut>
              <SignInButton>
                <button className="text-purple-700 hover:text-purple-900 px-4 py-2 text-sm font-medium transition-colors rounded-xl hover:bg-purple-100/50 backdrop-blur-sm">
                  Sign In
                </button>
              </SignInButton>
              <SignUpButton>
                <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl font-semibold text-sm px-6 py-2.5 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5">
                  Get Started
                </button>
              </SignUpButton>
            </SignedOut>
            
            <SignedIn>
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-xl p-2.5 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 transform hover:-translate-y-0.5">
                <Plus className="h-5 w-5" />
              </button>
              <div className="border-l border-purple-300 pl-4 ml-4">
                <UserButton 
                  appearance={{
                    elements: {
                      avatarBox: "h-9 w-9 ring-2 ring-purple-400/50"
                    }
                  }}
                />
              </div>
            </SignedIn>
          </div>
        </div>

        {/* Mobile Search - Only show when signed in */}
        <SignedIn>
          <div className="sm:hidden pb-3">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search className="h-5 w-5 text-purple-400" />
              </div>
              <input
                type="text"
                placeholder="Search snippets..."
                className="block w-full pl-10 pr-3 py-2.5 border border-purple-200 rounded-xl leading-5 bg-white/70 backdrop-blur-sm text-purple-900 placeholder-purple-400 focus:outline-none focus:placeholder-purple-300 focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm transition-all shadow-sm"
              />
            </div>
          </div>
        </SignedIn>
      </div>
    </nav>
  )
}