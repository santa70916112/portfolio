import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus(''), 3000)
    }, 2000)
  }

  return (
    <section id="contact" className="contact section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>お問い合わせ</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4">
          <div className="col-lg-5">
            <div className="info-wrap">
              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                <i className="bi bi-geo-alt flex-shrink-0"></i>
                <div>
                  <h3>所在地</h3>
                  <p>フィリピン共和国 リサール州 カインタ町</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                <i className="bi bi-telephone flex-shrink-0"></i>
                <div>
                  <h3>Chatwork</h3>
                  <p>https://www.chatwork.com/Naruto0103</p>
                </div>
              </div>

              <div className="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                <i className="bi bi-envelope flex-shrink-0"></i>
                <div>
                  <h3>メールアドレス</h3>
                  <p>rubyxmanalo@gmail.com</p>
                </div>
              </div>

              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.234567890123!2d121.12260!3d14.60270!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397b1234567890%3A0xabcdef1234567890!2s26%20Pajero%20Street%2C%20Village%20East%2C%20Cainta%2C%20Rizal%2C%20Philippines!5e0!3m2!1sen!2sph!4v1703123456789!5m2!1sen!2sph"
                frameBorder="0" 
                style={{ border: 0, width: '100%', height: '270px' }} 
                allowFullScreen="" 
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="mt-3 text-center">
                <small className="text-muted">
                  <i className="bi bi-geo-alt-fill text-danger"></i> 
                  <strong>所在地：</strong>フィリピン共和国 リサール州 カインタ町にあります。
                </small>
              </div>
            </div>
          </div>

          <div className="col-lg-7">
            <form onSubmit={handleSubmit} className="php-email-form" data-aos="fade-up" data-aos-delay="200">
              <div className="row gy-4">
                <div className="col-md-6">
                  <label htmlFor="name-field" className="pb-2">お名前</label>
                  <input 
                    type="text" 
                    name="name" 
                    id="name-field" 
                    className="form-control" 
                    required 
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-6">
                  <label htmlFor="email-field" className="pb-2">メールアドレス</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    name="email" 
                    id="email-field" 
                    required 
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="subject-field" className="pb-2">件名</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    name="subject" 
                    id="subject-field" 
                    required 
                    value={formData.subject}
                    onChange={handleChange}
                  />
                </div>

                <div className="col-md-12">
                  <label htmlFor="message-field" className="pb-2">メッセージ</label>
                  <textarea 
                    className="form-control" 
                    name="message" 
                    rows="10" 
                    id="message-field" 
                    required 
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <div className="col-md-12 text-center">
                  <div className="loading" style={{ display: isSubmitting ? 'block' : 'none' }}>
                    送信中...
                  </div>
                  <div className="error-message" style={{ display: submitStatus === 'error' ? 'block' : 'none' }}>
                    エラーが発生しました。もう一度お試しください。
                  </div>
                  <div className="sent-message" style={{ display: submitStatus === 'success' ? 'block' : 'none' }}>
                    メッセージを送信しました。ありがとうございます。
                  </div>

                  <button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? '送信中...' : 'メッセージを送信する'}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
