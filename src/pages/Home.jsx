import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { services } from '../data/services'
import { projects } from '../data/projects'
import { news } from '../data/news'
import banner1 from '../assets/images/banner-1.jpg'
import banner2 from '../assets/images/banner-2.jpg'
import banner3 from '../assets/images/banner-3.jpg'
import serviceImg1 from '../assets/images/12985c00-ea90-421b-bbf3-ed612acd7963.jpg'
import serviceImg2 from '../assets/images/14eb6772-1f4d-4941-9a90-89f8e58bd2e5.jpg'
import serviceImg3 from '../assets/images/745f97d1-bb8a-43d7-952f-a9194350dc20.jpg'
import serviceImg4 from '../assets/images/76db23e6-3e5d-4a54-8885-f101f54b508e.jpg'
import serviceImg5 from '../assets/images/d37af53a-725f-497d-b498-74fb97957311.jpg'
import projectImg1 from '../assets/images/khu-thuong-mai-tang-1-2-3-toa-nha-duc-phuong.png'
import projectImg2 from '../assets/images/chu-dau-tu-cong-ty-tnhh-gas-petrolimex-ha-noi.jpg'
import projectImg3 from '../assets/images/bao-duong-toa-nha-o-dich-vu-cong-cong-va-can-ho-de-ban-hongkong-tower-2.jpg'
import bgDa from '../assets/images/bg-da.jpg'
import './Home.css'

const serviceImages = [serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5]
const projectImages = [projectImg1, projectImg2, projectImg3]

export default function Home() {
  const banners = [banner1, banner2, banner3]
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(id)
  }, [banners.length])

  const goTo = (index) => {
    setCurrent(index)
  }

  return (
    <>
      <section className="hero-carousel">
        <div className="hero-carousel-inner">
          {banners.map((src, index) => (
            <div
              key={src}
              className={`hero-slide ${index === current ? 'active' : ''}`}
            >
              <img src={src} alt={`FCBVN banner ${index + 1}`} />
              <div className="hero-overlay">
                <div className="container hero-overlay-content">
                  <h1 className="hero-title">Công ty Cổ phần FCBVN</h1>
                  <p className="hero-subtitle">
                    Chuyên tư vấn, thiết kế, thi công, bảo trì hệ thống PCCC chuyên nghiệp
                  </p>
                  <div className="hero-cta">
                    <Link to="/lien-he" className="btn btn-primary">Liên hệ ngay</Link>
                    <Link to="/dich-vu" className="btn btn-outline">Xem dịch vụ</Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <div className="hero-dots">
            {banners.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`hero-dot ${index === current ? 'active' : ''}`}
                onClick={() => goTo(index)}
                aria-label={`Chuyển đến banner ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section section-services">
        <div className="container">
          <h2 className="section-title">Dịch Vụ Chúng Tôi Cung Cấp</h2>
          <p className="section-desc">
            FCBVN Fire chuyên về tư vấn, thiết kế, thi công, bảo trì các hệ thống PCCC. Các công trình do FCBVN Fire thực hiện đảm bảo về tính kỹ thuật, thẩm mỹ và được bảo hành dài hạn, mang lại sự yên tâm và tin cậy trong suốt quá trình sử dụng.
          </p>
          <div className="services-grid">
            {services.map((s, index) => (
              <Link to={`/dich-vu/${s.slug}`} key={s.slug} className="service-card">
                <div className="service-card-image">
                  <img src={serviceImages[index]} alt={s.title} />
                  <div className="service-card-overlay">{s.title}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="service-link">Xem chi tiết →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-projects">
        <div className="section-projects-bg" style={{ backgroundImage: `url(${bgDa})` }} />
        <div className="container">
          <div className="section-header section-projects-header">
            <div className="section-projects-heading">
              <h2 className="section-title">Dự án đã thực hiện</h2>
              <p className="section-subtitle">Các dự án chúng tôi đã thực hiện</p>
            </div>
            <Link to="/du-an" className="btn-projects-all">Xem tất cả</Link>
          </div>
          <div className="projects-grid">
            {projects.map((p, index) => (
              <Link to="/du-an" key={p.id} className="project-card">
                <div className="project-card-image">
                  <img src={projectImages[index]} alt={p.title} />
                  <div className="project-card-overlay">
                    {/* <span className="project-card-icon" aria-hidden="true">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                    </span> */}
                    <span className="project-card-overlay-title">{p.title}</span>
                  </div>
                </div>
                {p.client && <p className="project-client">{p.client}</p>}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-news">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Tin tức</h2>
            <Link to="/tin-tuc" className="link-more">Xem tất cả</Link>
          </div>
          <div className="news-grid">
            {news.map((n) => (
              <article key={n.id} className="news-card">
                <span className="news-date">{n.date}</span>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <Link to="/tin-tuc" className="news-link">Đọc tiếp +</Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
