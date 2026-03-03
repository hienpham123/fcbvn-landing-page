import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
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
  const [menuOpen, setMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [aboutOpen, setAboutOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path || location.pathname.startsWith(path + '/')

  const toggleAbout = () => setAboutOpen((v) => !v)
  const toggleServices = () => setServicesOpen((v) => !v)

  return (
    <header className="site-header">
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
            <Link to="/" className="logo" onClick={() => setMenuOpen(false)}>
              <img src={logo} alt="FCBVN" className="logo-img" />
              <span className="logo-text">Công ty Cổ phần FCBVN</span>
            </Link>
            <button
              className="menu-toggle"
              aria-label="Menu"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <span></span><span></span><span></span>
            </button>
            <nav className={`main-nav ${menuOpen ? 'open' : ''}`}>
              <Link to="/" onClick={() => setMenuOpen(false)} className={isActive('/') && location.pathname === '/' ? 'active' : ''}>
                Trang chủ
              </Link>
              <div
                className={`nav-dropdown ${aboutOpen ? 'open' : ''}`}
                onMouseEnter={() => setAboutOpen(true)}
                onMouseLeave={() => setAboutOpen(false)}
              >
                <button type="button" className="nav-dropdown-trigger" onClick={(e) => { e.preventDefault(); if (window.innerWidth <= 992) toggleAbout() }}>Giới thiệu</button>
                <ul className="nav-dropdown-menu">
                  <li><Link to="/gioi-thieu" onClick={() => setMenuOpen(false)}>Về chúng tôi</Link></li>
                  <li><Link to="/du-an" onClick={() => setMenuOpen(false)}>Dự án</Link></li>
                  <li><Link to="/nhan-su" onClick={() => setMenuOpen(false)}>Nhân sự</Link></li>
                </ul>
              </div>
              <div
                className={`nav-dropdown ${servicesOpen ? 'open' : ''}`}
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                <button type="button" className="nav-dropdown-trigger" onClick={(e) => { e.preventDefault(); if (window.innerWidth <= 992) toggleServices() }}>Dịch vụ</button>
                <ul className="nav-dropdown-menu">
                  {services.map((s) => (
                    <li key={s.path}>
                      <Link to={s.path} onClick={() => setMenuOpen(false)}>{s.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/tin-tuc" onClick={() => setMenuOpen(false)} className={isActive('/tin-tuc') ? 'active' : ''}>
                Tin tức
              </Link>
              <Link to="/lien-he" onClick={() => setMenuOpen(false)} className={isActive('/lien-he') ? 'active' : ''}>
                Liên hệ
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}
