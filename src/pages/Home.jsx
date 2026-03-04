import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import SectionTitle from '../components/SectionTitle'
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
import newsImg1 from '../assets/images/cac-bien-phap-dam-bao-an-toan-pccc-trong-ho-gia-dinh.png'
import newsImg2 from '../assets/images/de-chu-dong-phong-ngua-ngan-chan-nguy-co-chay-no-trong-mua-nang-nong-sap-toi-ban-hay-cung-fcbvn-fire-tim-hieu-cac-ki-nang-co-ban-nhe.jpg'
import newsImg3 from '../assets/images/cach-so-cuu-nhanh-nhat-khi-ban-bi-bong-lua-.jpg'
import './Home.css'

const serviceImages = [serviceImg1, serviceImg2, serviceImg3, serviceImg4, serviceImg5]
const newsImages = [newsImg1, newsImg2, newsImg3]
const projectImages = [projectImg1, projectImg2, projectImg3]

const DURATION = 1200
const TARGET_PROJECTS = 20
const TARGET_STAFF = 30

export default function Home() {
  const navigate = useNavigate()
  const banners = [banner1, banner2, banner3]
  const [current, setCurrent] = useState(0)
  const [countProjects, setCountProjects] = useState(0)
  const [countStaff, setCountStaff] = useState(0)
  const [statsStarted, setStatsStarted] = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length)
    }, 5000)
    return () => clearInterval(id)
  }, [banners.length])

  useEffect(() => {
    const t = setTimeout(() => setStatsStarted(true), 400)
    return () => clearTimeout(t)
  }, [])

  useEffect(() => {
    if (!statsStarted) return
    const start = performance.now()
    const step = (now) => {
      const elapsed = now - start
      const t = Math.min(elapsed / DURATION, 1)
      const ease = 1 - (1 - t) * (1 - t)
      setCountProjects(Math.max(1, Math.round(ease * TARGET_PROJECTS)))
      setCountStaff(Math.max(1, Math.round(ease * TARGET_STAFF)))
      if (t < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [statsStarted])

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
                    <button type="button" className="btn btn-primary" onClick={() => navigate('/lien-he')}>Liên hệ ngay</button>
                    <button type="button" className="btn btn-outline" onClick={() => navigate('/dich-vu')}>Xem dịch vụ</button>
                  </div>
                  <div className="hero-stats">
                    <div className="hero-stats-item">
                      <span className="hero-stats-label">Dự án</span>
                      <span className="hero-stats-value">{countProjects}+</span>
                    </div>
                    <div className="hero-stats-divider" aria-hidden />
                    <div className="hero-stats-item">
                      <span className="hero-stats-label">Nhân sự</span>
                      <span className="hero-stats-value">{countStaff}+</span>
                    </div>
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
          <SectionTitle>Dịch Vụ Chúng Tôi Cung Cấp</SectionTitle>
          <p className="section-desc">
            FCBVN Fire chuyên về tư vấn, thiết kế, thi công, bảo trì các hệ thống PCCC. Các công trình do FCBVN Fire thực hiện đảm bảo về tính kỹ thuật, thẩm mỹ và được bảo hành dài hạn, mang lại sự yên tâm và tin cậy trong suốt quá trình sử dụng.
          </p>
          <div className="services-grid">
            {services.map((s, index) => (
              <div
                key={s.slug}
                role="button"
                tabIndex={0}
                className="service-card"
                onClick={() => navigate(`/dich-vu/${s.slug}`)}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate(`/dich-vu/${s.slug}`) } }}
              >
                <div className="service-card-image">
                  <img src={serviceImages[index]} alt={s.title} />
                  <div className="service-card-overlay">{s.title}</div>
                </div>
                <h3>{s.title}</h3>
                <p>{s.shortDesc}</p>
                <span className="service-link">Xem chi tiết →</span>
              </div>
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
            <button type="button" className="btn-projects-all" onClick={() => navigate('/du-an')}>XEM TẤT CẢ</button>
          </div>
          <div className="projects-grid">
            {projects.slice(0, 3).map((p, index) => (
              <div
                key={p.id}
                role="button"
                tabIndex={0}
                className="project-card"
                onClick={() => navigate('/du-an')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/du-an') } }}
              >
                <div className="project-card-image">
                  <img src={projectImages[index]} alt={p.title} />
                  <div className="project-card-overlay">
                    <span className="project-card-overlay-title">{p.title}</span>
                  </div>
                </div>
                {p.client && <p className="project-client">{p.client}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-news">
        <div className="container">
          <SectionTitle>Tin tức</SectionTitle>
          <div className="news-grid">
            {news.map((n, index) => (
              <article key={n.id} className="news-card">
                <div className="news-card-image-wrap">
                  <img src={newsImages[index]} alt={n.title} className="news-card-image" />
                  <span className="news-date news-date-badge">{n.date}</span>
                </div>
                <h3>{n.title}</h3>
                <p>{n.excerpt}</p>
                <button type="button" className="news-link" onClick={() => navigate('/tin-tuc')}>Đọc tiếp +</button>
              </article>
            ))}
          </div>
          <div className="news-cta-wrap">
            <button type="button" className="btn-news-all" onClick={() => navigate('/tin-tuc')}>Xem tất cả</button>
          </div>
        </div>
      </section>
    </>
  )
}
