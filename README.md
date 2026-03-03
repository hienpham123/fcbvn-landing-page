# FCBVN Landing Page - Clone React

Clone website [Công ty Cổ phần FCBVN](http://www.fcbvn.vn/) bằng React (Vite) + React Router.

## Chạy dự án

```bash
# Cài đặt (đã cài)
npm install

# Chạy dev server
npm run dev

# Build production
npm run build

# Xem bản build
npm run preview
```

Mở trình duyệt tại **http://localhost:5173** khi chạy `npm run dev`.

## Cấu trúc

- **`src/components/`** – Header, Footer
- **`src/pages/`** – Trang chủ, Giới thiệu, Dịch vụ, Tin tức, Liên hệ, Dự án, Nhân sự
- **`src/data/`** – Dữ liệu tĩnh: dịch vụ, dự án, tin tức
- **Routing:** React Router (/, /gioi-thieu, /du-an, /nhan-su, /dich-vu, /dich-vu/:slug, /tin-tuc, /lien-he)

## Tính năng

- Trang chủ: Hero, Dịch vụ, Dự án, Tin tức
- Giới thiệu (Về chúng tôi), Dự án, Nhân sự
- Danh sách dịch vụ PCCC + trang chi tiết từng dịch vụ
- Tin tức (danh sách)
- Liên hệ (form gửi thông tin – demo, chưa backend)
- Header có dropdown Giới thiệu / Dịch vụ, responsive với menu mobile
- Footer với thông tin liên hệ và link

## Ghi chú

- Nội dung lấy từ website gốc fcbvn.vn (text). Ảnh/logo có thể thay bằng asset riêng.
- Form liên hệ chỉ xử lý phía frontend (alert demo); cần tích hợp API/backend để gửi thật.
# fcbvn-landing-page
