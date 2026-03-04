import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import './LienHe.css'

export default function LienHe() {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    content: '',
    captcha: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Demo: chỉ log, không gửi thật
    console.log('Form:', form)
    alert('Đã gửi yêu cầu (demo). Trên production sẽ kết nối backend.')
  }

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <PageHeader
        title="Liên hệ"
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Liên hệ' }]}
      />
      <div className="container section">
        <div className="lien-he-grid">
          <div className="lien-he-info">
            <h2>Thông tin liên hệ</h2>
            <h3>Công ty Cổ phần FCBVN</h3>
            <div className="lien-he-contact-list">
              <div className="lien-he-contact-row">
                <FaMapMarkerAlt className="lien-he-contact-icon" aria-hidden />
                <span className="lien-he-contact-text">Số 9, ngõ 127 Đường Võ Chí Công, Phường Xuân Đỉnh, Thành Phố Hà Nội</span>
              </div>
              <div className="lien-he-contact-row">
                <FaPhone className="lien-he-contact-icon" aria-hidden />
                <a href="tel:0912084114" className="lien-he-contact-text">0912 084 114</a>
              </div>
              <div className="lien-he-contact-row">
                <FaEnvelope className="lien-he-contact-icon" aria-hidden />
                <a href="mailto:contact@fcbvn.vn" className="lien-he-contact-text">contact@fcbvn.vn</a>
              </div>
            </div>
            <div className="lien-he-actions">
              <a href="tel:0912084114" className="btn-contact">Gọi cho chúng tôi</a>
              <a href="mailto:contact@fcbvn.vn" className="btn-contact">Mail</a>
            </div>
          </div>
          <div className="lien-he-form-wrap">
            <h2>Gửi thông tin</h2>
            <form className="lien-he-form" onSubmit={handleSubmit}>
              <label>Họ tên *</label>
              <input type="text" name="name" value={form.name} onChange={handleChange} required />
              <label>Điện thoại *</label>
              <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
              <label>Email</label>
              <input type="email" name="email" value={form.email} onChange={handleChange} />
              <label>Tiêu đề</label>
              <input type="text" name="subject" value={form.subject} onChange={handleChange} />
              <label>Nội dung</label>
              <textarea name="content" value={form.content} onChange={handleChange} rows={4} />
              <label>Mã bảo vệ</label>
              <input type="text" name="captcha" value={form.captcha} onChange={handleChange} placeholder="Nhập mã (demo)" />
              <div className="form-actions">
                <button type="submit" className="btn-submit">Gửi yêu cầu</button>
                <button type="button" onClick={() => setForm({ name: '', phone: '', email: '', subject: '', content: '', captcha: '' })}>Làm lại</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
