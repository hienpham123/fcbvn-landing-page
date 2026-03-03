import { projects } from '../data/projects'
import './DuAn.css'

export default function DuAn() {
  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Dự án đã thực hiện</h1>
        </div>
      </div>
      <div className="container section">
        <p className="du-an-intro">Các dự án chúng tôi đã thực hiện.</p>
        <div className="du-an-grid">
          {projects.map((p) => (
            <div key={p.id} className="du-an-card">
              <h2>{p.title}</h2>
              {p.client && <p className="du-an-client">{p.client}</p>}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
