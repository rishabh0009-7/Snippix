// src/components/Navbar.tsx
'use client';

import Link from 'next/link';
import { useUser, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import { Code2, Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  showAuthButtons?: boolean;
  showSnippetsLink?: boolean;
}

export default function Navbar({ 
  showAuthButtons = true, 
  showSnippetsLink = false 
}: NavbarProps) {
  const { isSignedIn, user, isLoaded } = useUser();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-semibold text-gray-900">Snippix</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Navigation Links */}
            <div className="flex items-center space-x-6">
              <Link 
                href="/#features" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                Features
              </Link>
              <Link 
                href="/#how-it-works" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
              >
                How it works
              </Link>
              {showSnippetsLink && isSignedIn && (
                <Link 
                  href="/snippets" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                >
                  My Snippets
                </Link>
              )}
            </div>

            {/* Authentication Section */}
            {showAuthButtons && isLoaded && (
              <div className="flex items-center space-x-4">
                {isSignedIn ? (
                  <div className="flex items-center space-x-4">
                    <Link
                      href="/snippets"
                      className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium"
                    >
                      Dashboard
                    </Link>
                    <div className="flex items-center space-x-3">
                      <span className="text-sm text-gray-600 hidden lg:block">
                        Welcome, {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                      </span>
                      <UserButton 
                        afterSignOutUrl="/"
                        appearance={{
                          elements: {
                            avatarBox: "w-8 h-8"
                          }
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center space-x-3">
                    <SignInButton mode="modal">
                      <button className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-4 py-2 rounded-lg">
                        Sign In
                      </button>
                    </SignInButton>
                    <SignUpButton mode="modal">
                      <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                        Get Started
                      </button>
                    </SignUpButton>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 transition-colors p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              {/* Navigation Links */}
              <Link 
                href="/#features" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="/#how-it-works" 
                className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-2 py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                How it works
              </Link>
              {showSnippetsLink && isSignedIn && (
                <Link 
                  href="/snippets" 
                  className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium px-2 py-1"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  My Snippets
                </Link>
              )}

              {/* Authentication Section */}
              {showAuthButtons && isLoaded && (
                <div className="pt-4 border-t border-gray-100">
                  {isSignedIn ? (
                    <div className="flex flex-col space-y-3">
                      <div className="flex items-center space-x-3 px-2">
                        <UserButton 
                          afterSignOutUrl="/"
                          appearance={{
                            elements: {
                              avatarBox: "w-8 h-8"
                            }
                          }}
                        />
                        <span className="text-sm text-gray-600">
                          {user?.firstName || user?.emailAddresses[0]?.emailAddress}
                        </span>
                      </div>
                      <Link
                        href="/snippets"
                        className="text-gray-900 font-medium text-sm px-2 py-1"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        Dashboard
                      </Link>
                    </div>
                  ) : (
                    <div className="flex flex-col space-y-3">
                      <SignInButton mode="modal">
                        <button 
                          className="text-gray-600 hover:text-gray-900 transition-colors text-sm font-medium text-left px-2 py-1"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Sign In
                        </button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <button 
                          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium text-center"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          Get Started
                        </button>
                      </SignUpButton>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}