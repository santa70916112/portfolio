import { useState, useEffect, useCallback } from 'react'

// Generic hook for API calls
export const useAPI = (apiFunction, dependencies = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = useCallback(async (...args) => {
    setLoading(true)
    setError(null)
    
    try {
      const result = await apiFunction(...args)
      setData(result)
      return result
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, dependencies)

  return { data, loading, error, execute }
}

// Hook for portfolio operations
export const usePortfolioAPI = () => {
  const [portfolio, setPortfolio] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchPortfolio = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      // For now, return mock data
      // In a real app, this would call the API
      const mockData = [
        {
          id: 1,
          title: "PetVesta App",
          category: "app",
          image: "/assets/img/portfolio/app-1.png",
          gallery: "portfolio-gallery-app",
          link: "https://apps.apple.com/in/app/petvesta/id6499036298"
        },
        // ... more items
      ]
      
      setPortfolio(mockData)
      return mockData
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const addPortfolioItem = useCallback(async (item) => {
    setLoading(true)
    try {
      // Mock API call
      const newItem = { ...item, id: Date.now() }
      setPortfolio(prev => [...prev, newItem])
      return newItem
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const updatePortfolioItem = useCallback(async (id, updates) => {
    setLoading(true)
    try {
      // Mock API call
      setPortfolio(prev => 
        prev.map(item => item.id === id ? { ...item, ...updates } : item)
      )
      return { id, ...updates }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  const deletePortfolioItem = useCallback(async (id) => {
    setLoading(true)
    try {
      // Mock API call
      setPortfolio(prev => prev.filter(item => item.id !== id))
      return { id }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchPortfolio()
  }, [fetchPortfolio])

  return {
    portfolio,
    loading,
    error,
    fetchPortfolio,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem
  }
}

// Hook for testimonials
export const useTestimonialsAPI = () => {
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchTestimonials = useCallback(async () => {
    setLoading(true)
    setError(null)
    
    try {
      // Mock data
      const mockData = [
        {
          id: 1,
          text: "このたびはリアルタイムチャットシステムの開発において、多大なるご尽力をいただき誠にありがとうございました。",
          author: "篤司 桐山",
          image: "/assets/img/testimonials/testimonials-6.png"
        },
        // ... more testimonials
      ]
      
      setTestimonials(mockData)
      return mockData
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    fetchTestimonials()
  }, [fetchTestimonials])

  return {
    testimonials,
    loading,
    error,
    fetchTestimonials
  }
}

// Hook for contact form
export const useContactForm = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)

  const sendMessage = useCallback(async (formData) => {
    setLoading(true)
    setError(null)
    setSuccess(false)
    
    try {
      // Mock API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // Simulate success
      setSuccess(true)
      return { success: true }
    } catch (err) {
      setError(err.message)
      throw err
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    loading,
    error,
    success,
    sendMessage
  }
}
