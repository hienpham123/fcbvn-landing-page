import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import GioiThieu from './pages/GioiThieu'
import DichVu from './pages/DichVu'
import ServiceDetail from './pages/ServiceDetail'
import LienHe from './pages/LienHe'
import TinTuc from './pages/TinTuc'
import DuAn from './pages/DuAn'
import NhanSu from './pages/NhanSu'
import callIcon from './assets/images/call.png'
import './App.css'

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gioi-thieu" element={<GioiThieu />} />
          <Route path="/du-an" element={<DuAn />} />
          <Route path="/nhan-su" element={<NhanSu />} />
          <Route path="/dich-vu" element={<DichVu />} />
          <Route path="/dich-vu/:slug" element={<ServiceDetail />} />
          <Route path="/tin-tuc" element={<TinTuc />} />
          <Route path="/lien-he" element={<LienHe />} />
        </Routes>
      </main>
      <Footer />
      <a href="tel:0912084114" className="float-call" aria-label="Gọi hotline">
        <img src={callIcon} alt="" />
      </a>
    </div>
  )
}
