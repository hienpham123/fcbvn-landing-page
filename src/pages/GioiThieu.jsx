import { FaMapMarkerAlt, FaPhone, FaGlobe, FaEnvelope, FaHandshake, FaCog, FaShieldAlt, FaAward } from 'react-icons/fa'
import PageHeader from '../components/PageHeader'
import giayXacNhan from '../assets/images/giay_xac_nhan.JPG'
import './Page.css'
import './GioiThieu.css'

const services = [
  {
    icon: FaCog,
    title: 'Tư vấn và Thiết kế',
    desc: 'Đội ngũ kỹ sư có trình độ chuyên môn cao của chúng tôi sẽ khảo sát, đánh giá và đưa ra các phương án thiết kế hệ thống PCCC tối ưu, phù hợp với từng loại hình công trình.',
  },
  {
    icon: FaHandshake,
    title: 'Thẩm duyệt PCCC',
    desc: 'Chúng tôi hỗ trợ khách hàng hoàn thiện hồ sơ và thực hiện các thủ tục pháp lý liên quan đến thẩm duyệt thiết kế PCCC với cơ quan chức năng một cách nhanh chóng, chính xác.',
  },
  {
    icon: FaCog,
    title: 'Thi công và Lắp đặt',
    desc: 'Với đội ngũ kỹ thuật viên giàu kinh nghiệm, chúng tôi cam kết thi công, lắp đặt hệ thống PCCC theo đúng tiêu chuẩn kỹ thuật, đảm bảo tiến độ và chất lượng công trình.',
  },
  {
    icon: FaShieldAlt,
    title: 'Bảo trì, bảo dưỡng định kỳ',
    desc: 'Để đảm bảo hệ thống PCCC luôn hoạt động ổn định và hiệu quả, FCBVN cung cấp dịch vụ bảo trì, bảo dưỡng định kỳ, kịp thời phát hiện và khắc phục sự cố.',
  },
  { icon: FaAward, title: 'Chất lượng hàng đầu', desc: 'Luôn đặt chất lượng dịch vụ và sản phẩm lên hàng đầu.' },
  { icon: FaShieldAlt, title: 'An toàn tuyệt đối', desc: 'Mọi giải pháp PCCC đều được thiết kế và thi công tuân thủ nghiêm ngặt các quy định về an toàn.' },
  { icon: FaHandshake, title: 'Uy tín và chuyên nghiệp', desc: 'Đội ngũ nhân viên chuyên nghiệp, tận tâm, hỗ trợ khách hàng 24/7.' },
  { icon: FaAward, title: 'Giá cả cạnh tranh', desc: 'Cung cấp giải pháp tối ưu với chi phí hợp lý nhất.' },
]

export default function GioiThieu() {
  return (
    <>
      <PageHeader
        title="Về chúng tôi"
        breadcrumbs={[{ label: 'Trang chủ', to: '/' }, { label: 'Giới thiệu' }]}
      />

      <div className="container section gioi-thieu-page">
        <section className="gioi-thieu-intro">
          <p className="gioi-thieu-lead">
            Công ty Cổ phần FCBVN là một trong những đơn vị hàng đầu trong lĩnh vực tư vấn, thiết kế, thẩm duyệt, thi công và lắp đặt hệ thống phòng cháy chữa cháy (PCCC) chuyên nghiệp tại Việt Nam. Với nhiều năm kinh nghiệm, chúng tôi tự hào là đối tác tin cậy, mang đến các giải pháp PCCC toàn diện, hiệu quả, đảm bảo an toàn tuyệt đối cho mọi công trình.
          </p>
          <blockquote className="gioi-thieu-motto">
            Với FCBVN, chúng tôi không chỉ cung cấp các giải pháp kỹ thuật, mà còn mang đến sự an tâm tuyệt đối. Đó là lý do vì sao chúng tôi luôn hoạt động với phương châm: <strong>“Hơn cả sự bảo vệ”</strong>.
          </blockquote>
        </section>

        <section className="gioi-thieu-services">
          <h2 className="gioi-thieu-section-title">Năng lực và Dịch vụ</h2>
          <p className="gioi-thieu-section-desc">
            Chúng tôi cung cấp trọn gói các dịch vụ về PCCC, từ giai đoạn lên ý tưởng đến khi công trình đi vào hoạt động, bao gồm:
          </p>
          <div className="gioi-thieu-grid">
            {services.map((s, i) => {
              const Icon = s.icon
              return (
                <div key={i} className="gioi-thieu-card">
                  <span className="gioi-thieu-card-icon"><Icon /></span>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              )
            })}
          </div>
        </section>

        <p className="gioi-thieu-commit">
          FCBVN cam kết mang đến sự an toàn và giá trị vượt trội, đúng với tinh thần “Hơn cả sự bảo vệ” mà chúng tôi hướng tới.
        </p>

        <section className="gioi-thieu-cert">
          <h2 className="gioi-thieu-section-title">Giấy xác nhận đủ điều kiện kinh doanh</h2>
          <p className="gioi-thieu-cert-desc">
            Công ty Cổ phần FCBVN được Phòng Cảnh sát PCCC và Cứu nạn, Cứu hộ – Công an TP Hà Nội xác nhận đủ điều kiện kinh doanh dịch vụ phòng cháy và chữa cháy (Số 192/GXN-PCCC). Giấy ĐKKD số 0109544745, người đại diện pháp luật: Đỗ Thái Sơn.
          </p>
          <div className="gioi-thieu-cert-image-wrap">
            <img src={giayXacNhan} alt="Giấy xác nhận đủ điều kiện kinh doanh dịch vụ PCCC" className="gioi-thieu-cert-image" />
          </div>
        </section>

        <section className="gioi-thieu-contact">
          <h2 className="gioi-thieu-section-title">Thông tin liên hệ</h2>
          <div className="gioi-thieu-contact-list">
            <div className="gioi-thieu-contact-row">
              <FaMapMarkerAlt className="gioi-thieu-contact-icon" aria-hidden />
              <span>Số 9, ngõ 127 Đường Võ Chí Công, Phường Xuân Đỉnh, Thành Phố Hà Nội</span>
            </div>
            <div className="gioi-thieu-contact-row">
              <FaPhone className="gioi-thieu-contact-icon" aria-hidden />
              <a href="tel:0912084114">0912 084 114</a>
            </div>
            <div className="gioi-thieu-contact-row">
              <FaGlobe className="gioi-thieu-contact-icon" aria-hidden />
              <a href="http://www.fcbvn.vn" target="_blank" rel="noopener noreferrer">www.fcbvn.vn</a>
            </div>
            <div className="gioi-thieu-contact-row">
              <FaEnvelope className="gioi-thieu-contact-icon" aria-hidden />
              <a href="mailto:contact@fcbvn.vn">contact@fcbvn.vn</a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
