import { createContext, useContext, useReducer, useEffect } from 'react'

// Initial state
const initialState = {
  user: {
    name: 'Ruby Manalo',
    title: 'フルスタック開発者',
    email: 'rubyxmanalo@gmail.com',
    location: 'フィリピン共和国 リサール州 カインタ町',
    birthday: '1996年3月14日',
    age: 29,
    degree: '学士',
    chatwork: 'https://www.chatwork.com/Naruto0103'
  },
  stats: [
    { icon: 'bi bi-emoji-smile', end: 232, label: '満足のお客様数' },
    { icon: 'bi bi-journal-richtext', end: 521, label: '実績プロジェクト数' },
    { icon: 'bi bi-headset', end: 1453, label: 'サポート時間' },
    { icon: 'bi bi-people', end: 32, label: '努力するスタッフ数' }
  ],
  skills: {
    frontend: [
      { name: 'Tailwind CSS, Bootstrap, Material UI', percentage: 100 },
      { name: 'Wordpress, Shopify', percentage: 90 },
      { name: 'React.js, Vue.js, Angular, Redux', percentage: 95 },
      { name: 'Next.js（React), Nuxt.js（Vue）', percentage: 85 },
      { name: 'Node.js, PHP(Laravel)', percentage: 90 },
      { name: 'React Native, Flutter', percentage: 85 }
    ],
    backend: [
      { name: 'MySQL, PostgreSQL', percentage: 90 },
      { name: 'MongoDB, Firebase', percentage: 95 },
      { name: 'Prisma, Sequelize, Mongoose', percentage: 92 },
      { name: 'Python, Java', percentage: 90 },
      { name: 'Git, GitHub, GitLab, Vercel', percentage: 97 },
      { name: 'Socket.io, Axios, API', percentage: 80 }
    ]
  },
  portfolio: [],
  testimonials: [],
  isLoading: false,
  error: null
}

// Action types
const ActionTypes = {
  SET_LOADING: 'SET_LOADING',
  SET_ERROR: 'SET_ERROR',
  SET_PORTFOLIO: 'SET_PORTFOLIO',
  SET_TESTIMONIALS: 'SET_TESTIMONIALS',
  UPDATE_USER: 'UPDATE_USER',
  ADD_PORTFOLIO_ITEM: 'ADD_PORTFOLIO_ITEM',
  UPDATE_PORTFOLIO_ITEM: 'UPDATE_PORTFOLIO_ITEM',
  DELETE_PORTFOLIO_ITEM: 'DELETE_PORTFOLIO_ITEM'
}

// Reducer
const portfolioReducer = (state, action) => {
  switch (action.type) {
    case ActionTypes.SET_LOADING:
      return { ...state, isLoading: action.payload }
    case ActionTypes.SET_ERROR:
      return { ...state, error: action.payload, isLoading: false }
    case ActionTypes.SET_PORTFOLIO:
      return { ...state, portfolio: action.payload, isLoading: false }
    case ActionTypes.SET_TESTIMONIALS:
      return { ...state, testimonials: action.payload, isLoading: false }
    case ActionTypes.UPDATE_USER:
      return { ...state, user: { ...state.user, ...action.payload } }
    case ActionTypes.ADD_PORTFOLIO_ITEM:
      return { ...state, portfolio: [...state.portfolio, action.payload] }
    case ActionTypes.UPDATE_PORTFOLIO_ITEM:
      return {
        ...state,
        portfolio: state.portfolio.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload } : item
        )
      }
    case ActionTypes.DELETE_PORTFOLIO_ITEM:
      return {
        ...state,
        portfolio: state.portfolio.filter(item => item.id !== action.payload)
      }
    default:
      return state
  }
}

// Create context
const PortfolioContext = createContext()

// Provider component
export const PortfolioProvider = ({ children }) => {
  const [state, dispatch] = useReducer(portfolioReducer, initialState)

  // Load initial data
  useEffect(() => {
    loadInitialData()
  }, [])

  const loadInitialData = async () => {
    dispatch({ type: ActionTypes.SET_LOADING, payload: true })
    
    try {
      // Load portfolio items
      const portfolioData = [
        {
          id: 1,
          title: "PetVesta App",
          category: "app",
          image: "/assets/img/portfolio/app-1.png",
          gallery: "portfolio-gallery-app",
          link: "https://apps.apple.com/in/app/petvesta/id6499036298"
        },
        {
          id: 2,
          title: "Exeeria App",
          category: "product",
          image: "/assets/img/portfolio/app-2.png",
          gallery: "portfolio-gallery-product",
          link: "https://play.google.com/store/apps/details?id=com.exeeria&hl=en_IN&gl=US"
        },
        {
          id: 3,
          title: "Grocer21 App",
          category: "branding",
          image: "/assets/img/portfolio/app-3.png",
          gallery: "portfolio-gallery-branding",
          link: "https://play.google.com/store/apps/details?id=com.in.grocer21"
        },
        {
          id: 4,
          title: "CMS Dashboard",
          category: "books",
          image: "/assets/img/portfolio/CMS-dash.png",
          gallery: "portfolio-gallery-book",
          link: "https://dashboards.techpyro.com/"
        },
        {
          id: 5,
          title: "NFT Stars",
          category: "app",
          image: "/assets/img/portfolio/crypto-1.png",
          gallery: "portfolio-gallery-app",
          link: "https://nftstars.shop/"
        },
        {
          id: 6,
          title: "Crypto Land Game",
          category: "product",
          image: "/assets/img/portfolio/crypto-2.png",
          gallery: "portfolio-gallery-product",
          link: "https://game.cryptoland.io/"
        },
        {
          id: 7,
          title: "E-commerce Store",
          category: "branding",
          image: "/assets/img/portfolio/E-commerce-1.png",
          gallery: "portfolio-gallery-branding",
          link: "https://products.techpyro.com/"
        },
        {
          id: 8,
          title: "Education Platform",
          category: "books",
          image: "/assets/img/portfolio/edu-1.png",
          gallery: "portfolio-gallery-book",
          link: "https://navkarbrilliantclasses.com/"
        },
        {
          id: 9,
          title: "iGauge Platform",
          category: "app",
          image: "/assets/img/portfolio/edu-2.png",
          gallery: "portfolio-gallery-app",
          link: "https://igauge.intellicent.in/"
        },
        {
          id: 10,
          title: "Microwave Creative",
          category: "product",
          image: "/assets/img/portfolio/edu-3.png",
          gallery: "portfolio-gallery-product",
          link: "https://www.microwave-creative.co.jp/"
        },
        {
          id: 11,
          title: "Strong Koikeya",
          category: "branding",
          image: "/assets/img/portfolio/wp-1.png",
          gallery: "portfolio-gallery-branding",
          link: "https://strong.koikeya.co.jp/"
        },
        {
          id: 12,
          title: "Otona Style",
          category: "app",
          image: "/assets/img/portfolio/wp-2.png",
          gallery: "portfolio-gallery-app",
          link: "https://otonastyle.com/"
        },
        {
          id: 13,
          title: "Cinnamon Cafe",
          category: "product",
          image: "/assets/img/portfolio/wp-3.png",
          gallery: "portfolio-gallery-product",
          link: "https://es-cinnamon.cafe/"
        },
        {
          id: 14,
          title: "Luck Original",
          category: "branding",
          image: "/assets/img/portfolio/wp-4.png",
          gallery: "portfolio-gallery-branding",
          link: "https://www.luck-original.co.jp/"
        }
      ]

      // Load testimonials
      const testimonialsData = [
        {
          id: 1,
          text: "このたびはリアルタイムチャットシステムの開発において、多大なるご尽力をいただき誠にありがとうございました。高い技術力で安定した通信環境を実現するとともに、ユーザー体験を考慮したUI設計にも感銘を受けました。素早い対応と柔軟な問題解決力により、スムーズにプロジェクトを進行できました。今後ともぜひご協力をお願い申し上げます。",
          author: "篤司 桐山",
          image: "/assets/img/testimonials/testimonials-6.png"
        },
        {
          id: 2,
          text: "Thank you very much for your great efforts in carrying out the project. Thanks to you, we were able to achieve results that exceeded our expectations, and we are very grateful. We look forward to working with you again in the future. Once again, we sincerely appreciate your excellent work. We look forward to your continued support.",
          author: "Sara Wilsson",
          image: "/assets/img/testimonials/testimonials-2.jpg"
        },
        {
          id: 3,
          text: "Pythonボット開発にあたり、一貫して高品質な実装をしていただき誠に感謝しております。自動化の精度と効率を向上させるための細やかな調整や、障害発生時の迅速な対応に大変助けられました。その技術力と責任感の強さを深く評価しております。今後ともお力添えいただけますと幸いです。",
          author: "真綾 村山",
          image: "/assets/img/testimonials/testimonials-8.png"
        },
        {
          id: 4,
          text: "Thank you very much for your tremendous efforts in carrying out the React project. You implemented a very high quality of work in every process, including React component design, performance optimization, and API integration, and I was impressed by your skill and sense of responsibility. Your flexible response and problem-solving ability also helped us to progress the project smoothly.",
          author: "Jena Karlis",
          image: "/assets/img/testimonials/testimonials-3.jpg"
        },
        {
          id: 5,
          text: "CMSの利便性を最大限に引き出しつつ、クライアントの要望を的確に反映したサイト構築に心から感謝申し上げます。柔軟なご対応でプロジェクトを円滑に進めていただき、今後も引き続きご協力いただけますと幸いです。",
          author: "洋介 杉山",
          image: "/assets/img/testimonials/testimonials-7.png"
        },
        {
          id: 6,
          text: "You provided high-quality implementation in every aspect, including React component design, performance optimization, and API integration, and I was impressed by your skills and sense of responsibility. Your flexible approach and problem-solving abilities also greatly helped in smoothly advancing the project. We would appreciate your continued support in the future.",
          author: "Matt Brandon",
          image: "/assets/img/testimonials/testimonials-4.jpg"
        },
        {
          id: 7,
          text: "このたびはプロジェクト遂行にあたり、多大なるご尽力をいただき誠にありがとうございました。おかげさまで当初の期待を上回る成果を得ることができ、大変感謝しております。今後ともぜひまたご一緒できれば幸いです。改めまして、素晴らしいお仕事に心より御礼申し上げます。引き続きどうぞよろしくお願いいたします。",
          author: "明美 野村",
          image: "/assets/img/testimonials/testimonials-9.png"
        },
        {
          id: 8,
          text: "Thank you so much for all your hard work in completing this project. Thanks to you, we were able to achieve results that exceeded our expectations, and for that we are extremely grateful. We hope to work with you again in the future. Once again, we would like to express our sincere gratitude for the excellent work you have done. We look forward to working with you again.",
          author: "John Larson",
          image: "/assets/img/testimonials/testimonials-5.jpg"
        },
        {
          id: 9,
          text: "ECサイト構築にあたり、ユーザビリティとデザイン性を両立させた高品質なサイト構築にご尽力いただき誠にありがとうございました。決済連携やカスタム機能の実装において、技術的な課題を的確かつ迅速に解決していただき、大変助かりました。今後も継続してお力添えをいただければ幸いです。",
          author: "香織 山本",
          image: "/assets/img/testimonials/testimonials-10.png"
        }
      ]

      dispatch({ type: ActionTypes.SET_PORTFOLIO, payload: portfolioData })
      dispatch({ type: ActionTypes.SET_TESTIMONIALS, payload: testimonialsData })
    } catch (error) {
      dispatch({ type: ActionTypes.SET_ERROR, payload: error.message })
    }
  }

  // Actions
  const updateUser = (userData) => {
    dispatch({ type: ActionTypes.UPDATE_USER, payload: userData })
  }

  const addPortfolioItem = (item) => {
    dispatch({ type: ActionTypes.ADD_PORTFOLIO_ITEM, payload: item })
  }

  const updatePortfolioItem = (item) => {
    dispatch({ type: ActionTypes.UPDATE_PORTFOLIO_ITEM, payload: item })
  }

  const deletePortfolioItem = (id) => {
    dispatch({ type: ActionTypes.DELETE_PORTFOLIO_ITEM, payload: id })
  }

  const value = {
    ...state,
    updateUser,
    addPortfolioItem,
    updatePortfolioItem,
    deletePortfolioItem
  }

  return (
    <PortfolioContext.Provider value={value}>
      {children}
    </PortfolioContext.Provider>
  )
}

// Custom hook to use the context
export const usePortfolio = () => {
  const context = useContext(PortfolioContext)
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider')
  }
  return context
}

export default PortfolioContext
