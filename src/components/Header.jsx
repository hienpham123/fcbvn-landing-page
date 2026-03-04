import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import logo from '../assets/images/logo.svg'
import './Header.css'

const services = [
  { path: '/dich-vu/tu-van-pccc', label: 'TƯ VẤN VỀ HỆ THỐNG PCCC' },
  { path: '/dich-vu/thiet-ke-pccc', label: 'THIẾT KẾ HỆ THỐNG PCCC' },
  { path: '/dich-vu/cung-cap-thiet-bi-pccc', label: 'CUNG CẤP THIẾT BỊ PCCC' },
  { path: '/dich-vu/bao-duong-pccc', label: 'BẢO DƯỠNG HỆ THỐNG PCCC' },
  { path: '/dich-vu/thi-cong-pccc', label: 'THI CÔNG HỆ THỐNG PCCC' },
]

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  const toggleAbout = () => setAboutOpen((v) => !v)
  const toggleServices = () => setServicesOpen((v) => !v)

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
      setAboutOpen(false)
      setServicesOpen(false)
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <header className="site-header">
      {menuOpen && (
        <button
          type="button"
          className="nav-overlay"
          aria-label="Đóng menu"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            <span className="work-time">T2-T7: 8:00 - 17:00</span>
            <a href="tel:0912084114" className="hotline">Hotline 0912 084 114</a>
            <a href="mailto:contact@fcbvn.vn" className="email">contact@fcbvn.vn</a>
          </div>
        </div>
      </div>
      <div className="header-main">
        <div className="container">
          <div className="header-main-inner">
            <div
              role="button"
              tabIndex={0}
              className="logo"
              onClick={() => { setMenuOpen(false); navigate('/') }}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setMenuOpen(false); navigate('/') } }}
            >
              <img src={logo} alt="FCBVN" className="logo-img" />
              <span className="logo-text">Công ty Cổ phần FCBVN</span>
            </div>
            <button
              className="menu-toggle"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`} aria-hidden={!menuOpen}>
              <button type="button" className={`nav-link ${isActive('/') && location.pathname === '/' ? 'active' : ''}`} onClick={() => { setMenuOpen(false); navigate('/') }}>
                Trang chủ
              </button>
              <div
                className={`nav-dropdown ${aboutOpen ? 'open' : ''}`}
                onMouseEnter={() => { if (window.innerWidth > 992) setAboutOpen(true) }}
                onMouseLeave={() => { if (window.innerWidth > 992) setAboutOpen(false) }}
              >
                <button type="button" className="nav-dropdown-trigger" onClick={(e) => { e.preventDefault(); if (window.innerWidth <= 992) toggleAbout() }}>Giới thiệu</button>
                <ul className="nav-dropdown-menu">
                  <li><button type="button" className="nav-dropdown-item" onClick={() => { setMenuOpen(false); navigate('/gioi-thieu') }}>Về chúng tôi</button></li>
                  <li><button type="button" className="nav-dropdown-item" onClick={() => { setMenuOpen(false); navigate('/du-an') }}>Dự án</button></li>
                  <li><button type="button" className="nav-dropdown-item" onClick={() => { setMenuOpen(false); navigate('/nhan-su') }}>Nhân sự</button></li>
                </ul>
              </div>
              <div
                className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}
                onMouseEnter={() => { if (window.innerWidth > 992) setServicesOpen(true) }}
                onMouseLeave={() => { if (window.innerWidth > 992) setServicesOpen(false) }}
              >
                <button type="button" className="nav-dropdown-trigger" onClick={(e) => { e.preventDefault(); if (window.innerWidth <= 992) toggleServices() }}>Dịch vụ</button>
                <ul className="nav-dropdown-menu">
                  {services.map((s) => (
                    <li key={s.path}>
                      <button type="button" className="nav-dropdown-item" onClick={() => { setMenuOpen(false); navigate(s.path) }}>{s.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <button type="button" className={`nav-link ${isActive('/tin-tuc') ? 'active' : ''}`} onClick={() => { setMenuOpen(false); navigate('/tin-tuc') }}>
                Tin tức
              </button>
              <button type="button" className={`nav-link ${isActive('/lien-he') ? 'active' : ''}`} onClick={() => { setMenuOpen(false); navigate('/lien-he') }}>
                Liên hệ
              </button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
