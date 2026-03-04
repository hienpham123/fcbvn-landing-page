import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { projects } from '../data/projects'
import PageHeader from '../components/PageHeader'
import './DuAn.css'

const PER_PAGE = 8

const imageModules = import.meta.glob('../assets/images/*.*', { eager: true })
const imageMap = {}
for (const [path, mod] of Object.entries(imageModules)) {
  const name = path.replace(/^.*[/\\]/, '')
  imageMap[name] = mod.default
}

function getProjectImage(imageFilename) {
  return imageMap[imageFilename] || null
}

export default function DuAn() {
  const navigate = useNavigate()
  const [page, setPage] = useState(1)

  const totalPages = Math.ceil(projects.length / PER_PAGE)
  const start = (page - 1) * PER_PAGE
  const list = useMemo(() => projects.slice(start, start + PER_PAGE), [start])

  return (
    <>
      <PageHeader
        title="Dự án đã thực hiện"
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Giới thiệu', to: '/gioi-thieu' }, { label: 'Dự án' }]}
      />
      <div className="container section">
        <p className="du-an-intro">Các dự án chúng tôi đã thực hiện.</p>
        <div className="du-an-grid">
          {list.map((p) => {
            const src = getProjectImage(p.image)
            return (
              <div
                key={p.id}
                className="du-an-card"
                role="button"
                tabIndex={0}
                onClick={() => navigate('/du-an')}
                onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); navigate('/du-an') } }}
              >
                <div className="du-an-card-image-wrap">
                  {src ? (
                    <img src={src} alt={p.title} className="du-an-card-image" />
                  ) : (
                    <div className="du-an-card-placeholder">Ảnh dự án</div>
                  )}
                  <div className="du-an-card-overlay">
                    <span className="du-an-card-overlay-title">{p.title}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {totalPages > 1 && (
          <nav className="du-an-pagination" aria-label="Phân trang dự án">
            <button
              type="button"
              className="du-an-pagination-btn"
              disabled={page <= 1}
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              aria-label="Trang trước"
            >
              ←
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
              <button
                key={p}
                type="button"
                className={`du-an-pagination-btn ${p === page ? 'active' : ''}`}
                onClick={() => setPage(p)}
                aria-label={`Trang ${p}`}
                aria-current={p === page ? 'page' : undefined}
              >
                {p}
              </button>
            ))}
            <button
              type="button"
              className="du-an-pagination-btn"
              disabled={page >= totalPages}
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              aria-label="Trang sau"
            >
              →
            </button>
          </nav>
        )}
      </div>
    </>
  )
}
