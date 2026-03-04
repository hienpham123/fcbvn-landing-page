import { Link } from 'react-router-dom'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import logo from '../assets/images/logo.svg'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <Link to="/" className="footer-logo">
                <img src={logo} alt="FCBVN" />
              </Link>
              <h3 className="footer-title">Công ty Cổ phần FCBVN</h3>
              <div className="footer-contact-list">
                <div className="footer-contact-row">
                  <FaMapMarkerAlt className="footer-contact-icon" aria-hidden />
                  <span className="footer-contact-text">Số 9, ngõ 127 Đường Võ Chí Công, Phường Xuân Đỉnh, Thành Phố Hà Nội</span>
                </div>
                <div className="footer-contact-row">
                  <FaPhone className="footer-contact-icon" aria-hidden />
                  <a href="tel:0912084114" className="footer-contact-text">0912 084 114</a>
                </div>
                <div className="footer-contact-row">
                  <FaEnvelope className="footer-contact-icon" aria-hidden />
                  <a href="mailto:contact@fcbvn.vn" className="footer-contact-text">contact@fcbvn.vn</a>
                </div>
              </div>
            </div>
            <div className="footer-col">
              <h4>Giới thiệu</h4>
              <ul>
                <li><Link to="/gioi-thieu">Về chúng tôi</Link></li>
                <li><Link to="/du-an">Dự án</Link></li>
                <li><Link to="/nhan-su">Nhân sự</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Dịch vụ</h4>
              <ul>
                <li><Link to="/dich-vu/tu-van-pccc">Tư vấn PCCC</Link></li>
                <li><Link to="/dich-vu/thiet-ke-pccc">Thiết kế PCCC</Link></li>
                <li><Link to="/dich-vu/cung-cap-thiet-bi-pccc">Cung cấp thiết bị</Link></li>
                <li><Link to="/dich-vu/bao-duong-pccc">Bảo dưỡng PCCC</Link></li>
                <li><Link to="/dich-vu/thi-cong-pccc">Thi công PCCC</Link></li>
              </ul>
            </div>
            <div className="footer-col">
              <h4>Liên hệ</h4>
              <div className="footer-actions">
                <a href="tel:0912084114" className="btn-footer">Gọi cho chúng tôi</a>
                <a href="mailto:contact@fcbvn.vn" className="btn-footer">Email</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p>© Copyright 2026. fcbvn.vn. Designed by Thế Hiển</p>
        </div>
      </div>
    </footer>
  )
}
