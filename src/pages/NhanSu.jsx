import PageHeader from '../components/PageHeader'
import { personnel } from '../data/personnel'
import './NhanSu.css'

const imageModules = import.meta.glob('../assets/images/*.*', { eager: true })
const imageMap = {}
for (const [path, mod] of Object.entries(imageModules)) {
  const name = path.replace(/^.*[/\\]/, '')
  imageMap[name] = mod.default
}

function getPersonnelImage(filename) {
  return imageMap[filename] || null
}

export default function NhanSu() {
  return (
    <>
      <PageHeader
        title="Nhân sự"
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Giới thiệu', to: '/gioi-thieu' }, { label: 'Nhân sự' }]}
      />
      <div className="container section nhan-su-page">
        <p className="nhan-su-intro">
          Công ty Cổ phần FCBVN sở hữu đội ngũ kỹ sư, kỹ thuật viên có trình độ chuyên môn cao, giàu kinh nghiệm trong lĩnh vực tư vấn, thiết kế, thi công và bảo trì hệ thống PCCC.
        </p>
        <div className="nhan-su-grid">
          {personnel.map((person, index) => {
            const src = getPersonnelImage(person.image)
            const isCenter = index === 4
            return (
              <div
                key={person.image}
                className={`nhan-su-card ${isCenter ? 'nhan-su-card--center' : ''}`}
              >
                <div className="nhan-su-card-image-wrap">
                  {src ? (
                    <img src={src} alt={person.name} className="nhan-su-card-image" />
                  ) : (
                    <div className="nhan-su-card-placeholder" />
                  )}
                </div>
                <h3 className="nhan-su-card-name">{person.name}</h3>
                <p className={`nhan-su-card-title ${person.highlight ? 'nhan-su-card-title--highlight' : ''}`}>
                  {person.title}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}
