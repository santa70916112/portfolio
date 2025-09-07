import { useState, useEffect } from 'react'

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*')

  const portfolioItems = [
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

  const filters = [
    { key: '*', label: 'すべて' },
    { key: 'app', label: 'アプリ' },
    { key: 'product', label: 'プロダクト' },
    { key: 'branding', label: 'ブランディング' },
    { key: 'books', label: '書籍' }
  ]

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
  }

  const filteredItems = activeFilter === '*' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter)

  return (
    <section id="portfolio" className="portfolio section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>ポートフォリオ</h2>
      </div>

      <div className="container">
        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">
          <div className="row isotope-container" data-aos="fade-up" data-aos-delay="200">
            {filteredItems.map((item) => (
              <div key={item.id} className="col-lg-4 col-md-6 portfolio-item isotope-item filter-app">
                <div className="portfolio-content h-100">
                  <img src={item.image} className="img-fluid" alt={item.title} />
                  <div className="portfolio-info">
                    <a 
                      href={item.image} 
                      title={item.title} 
                      data-gallery={item.gallery}
                      className="glightbox preview-link"
                    >
                      <i className="bi bi-zoom-in"></i>
                    </a>
                    <a 
                      href={item.link} 
                      title="More Details"
                      className="details-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <i className="bi bi-link-45deg"></i>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
