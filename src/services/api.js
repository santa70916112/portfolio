// API configuration
const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api'

// API endpoints
export const API_ENDPOINTS = {
  PORTFOLIO: '/portfolio',
  TESTIMONIALS: '/testimonials',
  USER: '/user',
  CONTACT: '/contact',
  SKILLS: '/skills',
  STATS: '/stats'
}

// Generic API request function
const apiRequest = async (endpoint, options = {}) => {
  const url = `${API_BASE_URL}${endpoint}`
  
  const defaultOptions = {
    headers: {
      'Content-Type': 'application/json',
    },
  }

  const config = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
  }

  try {
    const response = await fetch(url, config)
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const data = await response.json()
    return data
  } catch (error) {
    console.error('API request failed:', error)
    throw error
  }
}

// Portfolio API
export const portfolioAPI = {
  // Get all portfolio items
  getAll: () => apiRequest(API_ENDPOINTS.PORTFOLIO),
  
  // Get portfolio item by ID
  getById: (id) => apiRequest(`${API_ENDPOINTS.PORTFOLIO}/${id}`),
  
  // Create new portfolio item
  create: (data) => apiRequest(API_ENDPOINTS.PORTFOLIO, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Update portfolio item
  update: (id, data) => apiRequest(`${API_ENDPOINTS.PORTFOLIO}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  // Delete portfolio item
  delete: (id) => apiRequest(`${API_ENDPOINTS.PORTFOLIO}/${id}`, {
    method: 'DELETE',
  }),
}

// Testimonials API
export const testimonialsAPI = {
  // Get all testimonials
  getAll: () => apiRequest(API_ENDPOINTS.TESTIMONIALS),
  
  // Get testimonial by ID
  getById: (id) => apiRequest(`${API_ENDPOINTS.TESTIMONIALS}/${id}`),
  
  // Create new testimonial
  create: (data) => apiRequest(API_ENDPOINTS.TESTIMONIALS, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
  
  // Update testimonial
  update: (id, data) => apiRequest(`${API_ENDPOINTS.TESTIMONIALS}/${id}`, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
  
  // Delete testimonial
  delete: (id) => apiRequest(`${API_ENDPOINTS.TESTIMONIALS}/${id}`, {
    method: 'DELETE',
  }),
}

// User API
export const userAPI = {
  // Get user profile
  getProfile: () => apiRequest(API_ENDPOINTS.USER),
  
  // Update user profile
  updateProfile: (data) => apiRequest(API_ENDPOINTS.USER, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
}

// Contact API
export const contactAPI = {
  // Send contact message
  sendMessage: (data) => apiRequest(API_ENDPOINTS.CONTACT, {
    method: 'POST',
    body: JSON.stringify(data),
  }),
}

// Skills API
export const skillsAPI = {
  // Get all skills
  getAll: () => apiRequest(API_ENDPOINTS.SKILLS),
  
  // Update skills
  update: (data) => apiRequest(API_ENDPOINTS.SKILLS, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
}

// Stats API
export const statsAPI = {
  // Get all stats
  getAll: () => apiRequest(API_ENDPOINTS.STATS),
  
  // Update stats
  update: (data) => apiRequest(API_ENDPOINTS.STATS, {
    method: 'PUT',
    body: JSON.stringify(data),
  }),
}

export default {
  portfolioAPI,
  testimonialsAPI,
  userAPI,
  contactAPI,
  skillsAPI,
  statsAPI,
}
