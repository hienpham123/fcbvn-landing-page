import { news } from '../data/news'
import PageHeader from '../components/PageHeader'
import newsImg1 from '../assets/images/cac-bien-phap-dam-bao-an-toan-pccc-trong-ho-gia-dinh.png'
import newsImg2 from '../assets/images/de-chu-dong-phong-ngua-ngan-chan-nguy-co-chay-no-trong-mua-nang-nong-sap-toi-ban-hay-cung-fcbvn-fire-tim-hieu-cac-ki-nang-co-ban-nhe.jpg'
import newsImg3 from '../assets/images/cach-so-cuu-nhanh-nhat-khi-ban-bi-bong-lua-.jpg'
import './TinTuc.css'

const newsImages = [newsImg1, newsImg2, newsImg3]

export default function TinTuc() {
  return (
    <>
      <PageHeader
        title="Tin tức"
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Tin tức' }]}
      />
      <div className="container section">
        <div className="tin-tuc-list">
          {news.map((n, index) => (
            <article key={n.id} className="tin-tuc-item">
              <div className="tin-tuc-item-image-wrap">
                <img src={newsImages[index]} alt={n.title} className="tin-tuc-item-image" />
                <span className="tin-tuc-date-badge">{n.date}</span>
              </div>
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
