import { useEffect, useRef } from 'react'

const Stats = () => {
  const countersRef = useRef([])

  useEffect(() => {
    const animateCounters = () => {
      countersRef.current.forEach((counter, index) => {
        if (counter) {
          const target = parseInt(counter.getAttribute('data-target'))
          const duration = 2000
          const increment = target / (duration / 16)
          let current = 0

          const updateCounter = () => {
            current += increment
            if (current < target) {
              counter.textContent = Math.floor(current)
              requestAnimationFrame(updateCounter)
            } else {
              counter.textContent = target
            }
          }

          updateCounter()
        }
      })
    }

    // Start animation when component mounts
    const timer = setTimeout(animateCounters, 500)
    return () => clearTimeout(timer)
  }, [])

  const stats = [
    {
      icon: 'bi bi-emoji-smile',
      end: 232,
      label: '満足のお客様数'
    },
    {
      icon: 'bi bi-journal-richtext',
      end: 521,
      label: '実績プロジェクト数'
    },
    {
      icon: 'bi bi-headset',
      end: 1453,
      label: 'サポート時間'
    },
    {
      icon: 'bi bi-people',
      end: 32,
      label: '努力するスタッフ数'
    }
  ]

  return (
    <section id="stats" className="stats section">
      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stats-item">
                <i className={stat.icon}></i>
                <span 
                  ref={el => countersRef.current[index] = el}
                  data-target={stat.end}
                  className="purecounter"
                >
                  0
                </span>
                <p><strong>{stat.label}</strong></p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
