const About = () => {
  return (
    <section id="about" className="about section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>ユーザー</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-5" style={{ alignItems: 'center' }}>
          <div className="col-lg-5">
            <img src="/assets/img/my-profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-7 content" style={{ paddingLeft: '200px' }}>
            <h2>フルスタック開発者</h2>
            <div className="row">
              <ul>
                <li>
                  <i className="bi bi-chevron-right"></i> 
                  <strong>誕生日:</strong> <span>1996年3月14日</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> 
                  <strong>所在地:</strong> <span>フィリピン共和国 リサール州 カインタ町</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> 
                  <strong>年齢:</strong> <span>29歳</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> 
                  <strong>学位:</strong> <span>学士</span>
                </li>
                <li>
                  <i className="bi bi-chevron-right"></i> 
                  <strong>メールアドレス:</strong>
                  <span>rubyxmanalo@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
