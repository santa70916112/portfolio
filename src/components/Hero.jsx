import { useEffect, useRef } from 'react'

const Hero = () => {
  const typedRef = useRef(null)

  useEffect(() => {
    // Simple typed effect implementation
    const typedItems = ['フルスタック開発者', 'フリーランサー', 'デザイナー']
    let currentIndex = 0
    let currentText = ''
    let isDeleting = false

    const typeEffect = () => {
      const current = typedItems[currentIndex]
      
      if (isDeleting) {
        currentText = current.substring(0, currentText.length - 1)
      } else {
        currentText = current.substring(0, currentText.length + 1)
      }

      if (typedRef.current) {
        typedRef.current.textContent = currentText
      }

      let typeSpeed = isDeleting ? 50 : 100

      if (!isDeleting && currentText === current) {
        typeSpeed = 2000
        isDeleting = true
      } else if (isDeleting && currentText === '') {
        isDeleting = false
        currentIndex = (currentIndex + 1) % typedItems.length
        typeSpeed = 500
      }

      setTimeout(typeEffect, typeSpeed)
    }

    typeEffect()
  }, [])

  return (
    <section id="hero" className="hero section dark-background">
      <img 
        src="/assets/img/hero-bg.jpg" 
        alt="" 
        data-aos="fade-in" 
        className="" 
      />

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <h2>ようこそ</h2>
        <p>
          私は
          <span className="typed" ref={typedRef}>フルスタック開発者</span>
          <span className="typed-cursor typed-cursor--blink" aria-hidden="true"></span>
        </p>
      </div>
    </section>
  )
}

export default Hero
