import { news } from '../data/news'
import './TinTuc.css'

export default function TinTuc() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Tin tức</h1>
        </div>
      </div>
      <div className="container section">
        <div className="tin-tuc-list">
          {news.map((n) => (
            <article key={n.id} className="tin-tuc-item">
              <span className="tin-tuc-date">{n.date}</span>
              <h2>{n.title}</h2>
              <p>{n.excerpt}</p>
              <span className="tin-tuc-read">Đọc tiếp +</span>
            </article>
          ))}
        </div>
      </div>
    </>
  )
}
