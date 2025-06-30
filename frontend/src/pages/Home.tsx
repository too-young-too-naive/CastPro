import { Link } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import FishingChatBot from '../components/FishingChatBot'

const Home = () => {
  const { user } = useAuth()

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-primary-600">CastPro</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            The ultimate AI-powered fishing companion for professional anglers. 
            Track your catches, analyze patterns, and improve your fishing game.
          </p>
          
          {user ? (
            <div className="space-y-4">
              <p className="text-lg text-gray-700">
                Welcome back, {user.full_name}!
              </p>
              <Link
                to="/dashboard"
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                Go to Dashboard
              </Link>
            </div>
          ) : (
            <div className="space-x-4">
              <Link
                to="/register"
                className="btn-primary text-lg px-8 py-3 inline-block"
              >
                Get Started
              </Link>
              <Link
                to="/login"
                className="btn-secondary text-lg px-8 py-3 inline-block"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose CastPro?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Analytics</h3>
              <p className="text-gray-600">
                AI-powered insights to help you understand fishing patterns and improve your success rate.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fishing Regulation Help</h3>
              <p className="text-gray-600">
                Get clear, up-to-date information about fishing regulations, licenses, and legal requirements.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fishing Tackle Tips</h3>
              <p className="text-gray-600">
                Expert recommendations on rods, reels, lures, and gear for different species and conditions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* AI ChatBot Demo Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Try Our AI Fishing Assistant
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the power of AI-driven fishing advice. Ask about regulations, 
              species tips, or tackle recommendations - all in real-time!
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <FishingChatBot />
          </div>
          
          <div className="text-center mt-8">
            <p className="text-gray-600">
              {user ? (
                <span>Ready to unlock the full experience? <Link to="/dashboard" className="text-primary-600 hover:text-primary-700 font-medium">Go to your Dashboard</Link></span>
              ) : (
                <span>Want to save your conversations? <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">Sign up for free</Link></span>
              )}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home 