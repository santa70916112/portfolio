import { useEffect, useRef } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const Testimonials = () => {
  const swiperRef = useRef(null)

  const testimonials = [
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

  return (
    <section id="testimonials" className="testimonials section light-background">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>レビュー</h2>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay, Pagination]}
          loop={true}
          speed={600}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          slidesPerView="auto"
          pagination={{
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
        >
          <div className="swiper-wrapper">
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="testimonial-item">
                  <p>
                    <i className="bi bi-quote quote-icon-left"></i>
                    <span>{testimonial.text}</span>
                    <i className="bi bi-quote quote-icon-right"></i>
                  </p>
                  <img src={testimonial.image} className="testimonial-img" alt={testimonial.author} />
                  <h3>{testimonial.author}</h3>
                </div>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </Swiper>
      </div>
    </section>
  )
}

export default Testimonials
