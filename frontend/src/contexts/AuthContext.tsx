import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { api, publicApi } from '../services/api'

interface User {
  id: number
  email: string
  full_name: string
  is_active: boolean
}

interface AuthContextType {
  user: User | null
  token: string | null
  login: (email: string, password: string) => Promise<void>
  register: (email: string, password: string, fullName: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

interface AuthProviderProps {
  children: ReactNode
}

function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        try {
          const response = await api.get('/users/me')
          setUser(response.data)
        } catch (error) {
          localStorage.removeItem('token')
          setToken(null)
        }
      }
      setIsLoading(false)
    }

    initializeAuth()
  }, [token])

  const login = async (email: string, password: string) => {
    try {      
      // Create FormData for OAuth2 password flow
      const formData = new FormData()
      formData.append('username', email)
      formData.append('password', password)
      
      const response = await api.post('/auth/login', formData, {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
      })
      
      const { access_token } = response.data
      localStorage.setItem('token', access_token)
      setToken(access_token)
      
      // Fetch user data
      const userResponse = await api.get('/users/me')
      setUser(userResponse.data)
    } catch (error) {
      throw new Error('Login failed')
    }
  }

  const register = async (email: string, password: string, fullName: string) => {
    try {
      await api.post('/auth/register', {
        email,
        password,
        full_name: fullName,
      })
    } catch (error) {
      throw new Error('Registration failed')
    }
  }

  const logout = () => {
    localStorage.removeItem('token')
    setToken(null)
    setUser(null)
  }

  const value = {
    user,
    token,
    login,
    register,
    logout,
    isLoading,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthProvider, useAuth } 