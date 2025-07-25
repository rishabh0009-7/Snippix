"use client"
import { useState } from 'react'
import Navbar from "@/components/Navbar"
import { Code2, Search, Plus, Filter, Grid3X3, List, Copy, Heart, Share2, Edit3, Trash2, Calendar, Tag, User, ChevronDown, SortAsc, BookOpen, Folder } from "lucide-react"

export default function Snippets() {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'list'
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedLanguage, setSelectedLanguage] = useState('all')
  const [sortBy, setSortBy] = useState('recent')
  const [searchQuery, setSearchQuery] = useState('')

  // Mock data for snippets
  const snippets = [
    {
      id: 1,
      title: "React useLocalStorage Hook",
      description: "Custom hook for managing localStorage with React state synchronization",
      language: "JavaScript",
      category: "React Hooks",
      code: `function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      setStoredValue(value);
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error(error);
    }
  };

  return [storedValue, setValue];
}`,
      tags: ["react", "hooks", "localStorage"],
      createdAt: "2024-01-15",
      likes: 24,
      isPrivate: false,
      author: "You"
    },
    {
      id: 2,
      title: "Python API Response Handler",
      description: "Elegant error handling for API responses with retry logic",
      language: "Python",
      category: "API Utils",
      code: `import requests
from time import sleep
from typing import Optional, Dict, Any

def handle_api_response(
    url: str, 
    max_retries: int = 3,
    timeout: int = 10
) -> Optional[Dict[Any, Any]]:
    for attempt in range(max_retries):
        try:
            response = requests.get(url, timeout=timeout)
            response.raise_for_status()
            return response.json()
        except requests.RequestException as e:
            if attempt == max_retries - 1:
                print(f"Failed after {max_retries} attempts: {e}")
                return None
            sleep(2 ** attempt)  # Exponential backoff
    return None`,
      tags: ["python", "api", "error-handling", "retry"],
      createdAt: "2024-01-12",
      likes: 18,
      isPrivate: false,
      author: "You"
    },
    {
      id: 3,
      title: "CSS Flexbox Center Anything",
      description: "The ultimate flexbox centering solution that works every time",
      language: "CSS",
      category: "Layout",
      code: `.center-anything {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* or any height you need */
}

/* Alternative with grid */
.center-grid {
  display: grid;
  place-items: center;
  min-height: 100vh;
}

/* For text centering */
.center-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}`,
      tags: ["css", "flexbox", "centering", "layout"],
      createdAt: "2024-01-10",
      likes: 42,
      isPrivate: false,
      author: "You"
    },
    {
      id: 4,
      title: "Node.js JWT Authentication",
      description: "Complete JWT authentication middleware for Express apps",
      language: "JavaScript",
      category: "Authentication",
      code: `const jwt = require('jsonwebtoken');

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ 
      error: 'Access token required' 
    });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ 
        error: 'Invalid or expired token' 
      });
    }
    req.user = user;
    next();
  });
};

module.exports = { authenticateToken };`,
      tags: ["nodejs", "jwt", "authentication", "middleware"],
      createdAt: "2024-01-08",
      likes: 31,
      isPrivate: true,
      author: "You"
    },
    {
      id: 5,
      title: "SQL Query Performance Optimizer",
      description: "Common SQL optimization patterns for better query performance",
      language: "SQL",
      category: "Database",
      code: `-- Use EXISTS instead of IN for better performance
SELECT u.name, u.email
FROM users u
WHERE EXISTS (
  SELECT 1 FROM orders o 
  WHERE o.user_id = u.id 
  AND o.created_at >= '2024-01-01'
);

-- Index-optimized pagination
SELECT id, title, created_at
FROM posts
WHERE id > 1000  -- Use ID cursor instead of OFFSET
ORDER BY id
LIMIT 20;

-- Efficient counting with conditions
SELECT 
  COUNT(CASE WHEN status = 'active' THEN 1 END) as active_count,
  COUNT(CASE WHEN status = 'inactive' THEN 1 END) as inactive_count
FROM users;`,
      tags: ["sql", "performance", "optimization", "database"],
      createdAt: "2024-01-05",
      likes: 15,
      isPrivate: false,
      author: "You"
    }
  ];

  const categories = ['all', 'React Hooks', 'API Utils', 'Layout', 'Authentication', 'Database'];
  const languages = ['all', 'JavaScript', 'Python', 'CSS', 'SQL'];

  const filteredSnippets = snippets.filter(snippet => {
    const matchesSearch = snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         snippet.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesCategory = selectedCategory === 'all' || snippet.category === selectedCategory;
    const matchesLanguage = selectedLanguage === 'all' || snippet.language === selectedLanguage;
    
    return matchesSearch && matchesCategory && matchesLanguage;
  });

  const SnippetCard = ({ snippet, isListView = false }) => (
    <div className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-slate-200 ${isListView ? 'p-6' : 'p-6'}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h3 className="text-lg font-semibold text-slate-900 hover:text-blue-600 cursor-pointer transition-colors">
              {snippet.title}
            </h3>
            {snippet.isPrivate && (
              <span className="bg-slate-100 text-slate-600 px-2 py-1 rounded-md text-xs font-medium">
                Private
              </span>
            )}
          </div>
          <p className="text-slate-600 text-sm leading-relaxed mb-3">
            {snippet.description}
          </p>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <Code2 className="h-4 w-4" />
              {snippet.language}
            </span>
            <span className="flex items-center gap-1">
              <Folder className="h-4 w-4" />
              {snippet.category}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {new Date(snippet.createdAt).toLocaleDateString()}
            </span>
          </div>
        </div>
        
        <div className="flex items-center gap-2 ml-4">
          <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-all">
            <Heart className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-blue-500 hover:bg-blue-50 rounded-lg transition-all">
            <Copy className="h-4 w-4" />
          </button>
          <button className="p-2 text-slate-400 hover:text-green-500 hover:bg-green-50 rounded-lg transition-all">
            <Share2 className="h-4 w-4" />
          </button>
          <div className="relative group">
            <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-50 rounded-lg transition-all">
              <ChevronDown className="h-4 w-4" />
            </button>
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none group-hover:pointer-events-auto z-10">
              <div className="p-2">
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50 rounded-lg transition-colors">
                  <Edit3 className="h-4 w-4" />
                  Edit snippet
                </button>
                <button className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <Trash2 className="h-4 w-4" />
                  Delete snippet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {!isListView && (
        <div className="bg-slate-900 rounded-xl p-4 mb-4">
          <pre className="text-slate-300 text-sm overflow-x-auto leading-relaxed">
            <code>{snippet.code.slice(0, 200)}...</code>
          </pre>
        </div>
      )}
      
      <div className="flex items-center justify-between">
        <div className="flex flex-wrap gap-2">
          {snippet.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
              #{tag}
            </span>
          ))}
          {snippet.tags.length > 3 && (
            <span className="text-slate-400 text-xs">+{snippet.tags.length - 3} more</span>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm text-slate-500">
          <span className="flex items-center gap-1">
            <Heart className="h-4 w-4" />
            {snippet.likes}
          </span>
        </div>
      </div>
    </div>
  );

  return (
    <main className="min-h-screen bg-slate-50">
      
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">My Snippets</h1>
              <p className="text-slate-600">Manage and organize your code collection</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2">
              <Plus className="h-5 w-5" />
              New Snippet
            </button>
          </div>
          
          {/* Search and Filters */}
          <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
              {/* Search */}
              <div className="lg:col-span-4">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search snippets, tags, or descriptions..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 placeholder-slate-500 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                  />
                </div>
              </div>
              
              {/* Category Filter */}
              <div className="lg:col-span-2">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full py-3 px-4 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category === 'all' ? 'All Categories' : category}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Language Filter */}
              <div className="lg:col-span-2">
                <select
                  value={selectedLanguage}
                  onChange={(e) => setSelectedLanguage(e.target.value)}
                  className="w-full py-3 px-4 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  {languages.map(language => (
                    <option key={language} value={language}>
                      {language === 'all' ? 'All Languages' : language}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Sort */}
              <div className="lg:col-span-2">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="w-full py-3 px-4 border border-slate-200 rounded-xl bg-slate-50 text-slate-900 focus:outline-none focus:bg-white focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                >
                  <option value="recent">Most Recent</option>
                  <option value="popular">Most Popular</option>
                  <option value="alphabetical">A-Z</option>
                </select>
              </div>
              
              {/* View Mode */}
              <div className="lg:col-span-2">
                <div className="flex bg-slate-100 rounded-xl p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`flex-1 flex items-center justify-center py-2 px-3 rounded-lg transition-all ${
                      viewMode === 'grid' 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`flex-1 flex items-center justify-center py-2 px-3 rounded-lg transition-all ${
                      viewMode === 'list' 
                        ? 'bg-white text-slate-900 shadow-sm' 
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    <List className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Results Count */}
        <div className="mb-6">
          <p className="text-slate-600">
            Showing {filteredSnippets.length} of {snippets.length} snippets
          </p>
        </div>
        
        {/* Snippets Grid/List */}
        {filteredSnippets.length > 0 ? (
          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6' 
            : 'space-y-4'
          }>
            {filteredSnippets.map(snippet => (
              <SnippetCard 
                key={snippet.id} 
                snippet={snippet} 
                isListView={viewMode === 'list'} 
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <BookOpen className="h-16 w-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No snippets found</h3>
            <p className="text-slate-600 mb-6">
              Try adjusting your search or filters, or create your first snippet.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition-all duration-200 flex items-center gap-2 mx-auto">
              <Plus className="h-5 w-5" />
              Create Your First Snippet
            </button>
          </div>
        )}
      </div>
    </main>
  )
}