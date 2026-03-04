import { Link } from 'react-router-dom'
import { services } from '../data/services'
import PageHeader from '../components/PageHeader'
import './DichVu.css'

export default function DichVu() {
  return (
    <>
      <PageHeader
        title="Dịch vụ"
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Dịch vụ' }]}
      />
      <div className="container section">
        <p className="dich-vu-intro">
          FCBVN Fire chuyên về tư vấn, thiết kế, thi công, bảo trì các hệ thống PCCC. Các công trình do FCBVN Fire thực hiện đảm bảo về tính kỹ thuật, thẩm mỹ và được bảo hành dài hạn.
        </p>
        <div className="dich-vu-list">
          {services.map((s) => (
            <div key={s.slug} className="dich-vu-item">
              <h2>{s.title}</h2>
              <p>{s.shortDesc}</p>
              <Link to={`/dich-vu/${s.slug}`} className="btn btn-primary">Xem chi tiết</Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
