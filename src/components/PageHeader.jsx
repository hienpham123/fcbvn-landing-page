import { Link } from 'react-router-dom'
import './PageHeader.css'

/**
 * @param {string} title - Tiêu đề trang
 * @param {{ label: string, to?: string }[]} breadcrumbs - Mảng breadcrumb, phần tử có `to` sẽ là link
 */
export default function PageHeader({ title, breadcrumbs = [] }) {
  return (
    <header className="page-header">
      <div className="container page-header-inner">
        {breadcrumbs.length > 0 && (
          <nav className="page-header-breadcrumb" aria-label="Breadcrumb">
            {breadcrumbs.map((item, i) => (
              <span key={i} className="page-header-breadcrumb-item">
                {item.to ? (
                  <Link to={item.to} className="page-header-breadcrumb-link">{item.label}</Link>
                ) : (
                  <span className="page-header-breadcrumb-current">{item.label}</span>
                )}
                {i < breadcrumbs.length - 1 && <span className="page-header-breadcrumb-sep">/</span>}
              </span>
            ))}
          </nav>
        )}
        <h1 className="page-header-title">{title}</h1>
      </div>
    </header>
  )
}
