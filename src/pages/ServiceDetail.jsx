import { useParams, Link } from 'react-router-dom'
import { getServiceBySlug } from '../data/services'
import './Page.css'

export default function ServiceDetail() {
  const { slug } = useParams()
  const service = getServiceBySlug(slug)

  if (!service) {
    return (
      <div className="container section">
        <p>Không tìm thấy dịch vụ.</p>
        <Link to="/dich-vu">← Quay lại Dịch vụ</Link>
      </div>
    )
  }

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>{service.title}</h1>
        </div>
      </div>
      <div className="container section">
        <div className="page-content">
          <p>{service.content}</p>
          <p>
            <Link to="/lien-he" className="btn-inline">Liên hệ tư vấn</Link>
          </p>
          <Link to="/dich-vu">← Quay lại Dịch vụ</Link>
        </div>
      </div>
    </>
  )
}
