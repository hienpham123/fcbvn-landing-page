import lineImg from '../assets/images/line.png'
import './SectionTitle.css'

export default function SectionTitle({ children, subtitle, className = '' }) {
  return (
    <div className={`section-title-wrap ${className}`.trim()}>
      <h2 className="section-title">{children}</h2>
      <img src={lineImg} alt="" className="section-title-line" aria-hidden />
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
