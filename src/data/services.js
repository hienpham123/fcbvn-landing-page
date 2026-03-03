export const services = [
  {
    slug: 'tu-van-pccc',
    title: 'TƯ VẤN VỀ HỆ THỐNG PCCC',
    shortDesc: 'Tư vấn thiết kế hệ thống PCCC là một trong những giai đoạn quan trọng trước khi tiến hành thi công.',
    content: `Tư vấn thiết kế hệ thống PCCC là một trong những giai đoạn quan trọng trước khi tiến hành thi công. FCBVN Fire với đội ngũ kỹ sư giàu kinh nghiệm sẽ khảo sát, đánh giá và đưa ra các phương án thiết kế tối ưu, phù hợp với từng loại hình công trình, đảm bảo tuân thủ quy chuẩn PCCC hiện hành.`,
  },
  {
    slug: 'thiet-ke-pccc',
    title: 'THIẾT KẾ HỆ THỐNG PCCC',
    shortDesc: 'Với thế mạnh trong nguồn nhân lực là những cán bộ có trình độ cao, lâu năm công tác trong ngành.',
    content: `Với thế mạnh trong nguồn nhân lực là những cán bộ có trình độ cao, lâu năm công tác trong lĩnh vực PCCC, FCBVN Fire thực hiện thiết kế hệ thống PCCC chuyên nghiệp: bản vẽ thiết kế, thẩm duyệt PCCC, hồ sơ pháp lý đầy đủ, đáp ứng yêu cầu cơ quan chức năng và chủ đầu tư.`,
  },
  {
    slug: 'cung-cap-thiet-bi-pccc',
    title: 'CUNG CẤP THIẾT BỊ PCCC',
    shortDesc: 'Sở hữu đội ngũ nhân viên kỹ thuật có trình độ, giàu kinh nghiệm và mối quan hệ rộng rãi.',
    content: `Sở hữu đội ngũ nhân viên kỹ thuật có trình độ, giàu kinh nghiệm và mối quan hệ rộng rãi với các hãng thiết bị PCCC uy tín trong và ngoài nước, FCBVN Fire cung cấp đầy đủ thiết bị PCCC: bình chữa cháy, hệ thống báo cháy, ch sprinkler, trung tâm báo cháy, thiết bị thoát hiểm... với giá cả cạnh tranh và bảo hành chính hãng.`,
  },
  {
    slug: 'bao-duong-pccc',
    title: 'BẢO DƯỠNG HỆ THỐNG PCCC',
    shortDesc: 'Bảo trì hệ thống PCCC định kỳ giúp hệ thống luôn sẵn sàng hoạt động khi cần.',
    content: `Tại sao cần phải bảo trì hệ thống phòng cháy chữa cháy? Bảo trì hệ thống PCCC định kỳ giúp phát hiện sớm lỗi, đảm bảo thiết bị luôn hoạt động ổn định. FCBVN Fire cung cấp dịch vụ bảo dưỡng, bảo trì hệ thống PCCC theo quy định, có báo cáo và cam kết chất lượng.`,
  },
  {
    slug: 'thi-cong-pccc',
    title: 'THI CÔNG HỆ THỐNG PCCC',
    shortDesc: 'Công ty Cổ phần FCBVN là một trong những đơn vị hàng đầu trong cung cấp và thi công lắp đặt.',
    content: `CÔNG TY CỔ PHẦN FCBVN là một trong những đơn vị hàng đầu trong cung cấp và thi công lắp đặt hệ thống PCCC tại Việt Nam. Chúng tôi thi công theo đúng bản vẽ đã thẩm duyệt, đảm bảo tiến độ, chất lượng và an toàn. Các công trình do FCBVN Fire thực hiện được bảo hành dài hạn, mang lại sự yên tâm cho khách hàng.`,
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
