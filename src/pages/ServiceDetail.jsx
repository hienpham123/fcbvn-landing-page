import { useParams, Link } from 'react-router-dom'
import { getServiceBySlug } from '../data/services'
import PageHeader from '../components/PageHeader'
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
      <PageHeader
        title={service.title}
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Dịch vụ', to: '/dich-vu' }, { label: service.title }]}
      />
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
