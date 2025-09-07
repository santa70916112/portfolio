import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'resume', 'portfolio', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleClickOutside = (event) => {
      if (isMenuOpen && !event.target.closest('.navmenu') && !event.target.closest('.header-toggle')) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    document.addEventListener('click', handleClickOutside)
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header id="header" className={`header dark-background d-flex flex-column ${isMenuOpen ? 'header-show' : ''}`}>
      <i 
        className="header-toggle d-xl-none bi bi-list"
        onClick={toggleMenu}
        style={{ cursor: 'pointer' }}
      ></i>

      <div className="profile-img">
        <img src="/assets/img/my-profile-img.jpg" alt="" className="img-fluid rounded-circle" />
      </div>

      <Link to="/" className="logo d-flex align-items-center justify-content-center">
        <h1 className="sitename">CodeDev</h1>
      </Link>

      <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'mobile-nav-active' : ''}`}>
        <ul>
          <li>
            <a 
              href="#hero" 
              className={activeSection === 'hero' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('hero')
              }}
            >
              <i className="bi bi-house navicon"></i>ホーム
            </a>
          </li>
          <li>
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('about')
              }}
            >
              <i className="bi bi-person navicon"></i>ユーザー
            </a>
          </li>
          <li>
            <a 
              href="#resume" 
              className={activeSection === 'resume' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('resume')
              }}
            >
              <i className="bi bi-file-earmark-text navicon"></i>プロフィール
            </a>
          </li>
          <li>
            <a 
              href="#portfolio" 
              className={activeSection === 'portfolio' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('portfolio')
              }}
            >
              <i className="bi bi-images navicon"></i>ポートフォリオ
            </a>
          </li>
          <li>
            <a 
              href="#contact" 
              className={activeSection === 'contact' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault()
                scrollToSection('contact')
              }}
            >
              <i className="bi bi-envelope navicon"></i>お問い合わせ
            </a>
          </li>
        </ul>
      </nav>

      <div style={{ marginTop: '50px', fontSize: '12px' }} className="resume-item pb-0">
        <p>
          拙いプロフィールをご覧いただき、誠にありがとうございます。
          これまで国内外で積み重ねてきた経験を活かし、皆様のご期待に添えるよう努めてまいります。
          今後ともどうぞお気軽にご連絡ください。
        </p>
      </div>
    </header>
  )
}

export default Header
