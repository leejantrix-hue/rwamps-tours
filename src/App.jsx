import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ServicesPage from './pages/ServicesPage.jsx'
import ToursPage from './pages/ToursPage.jsx'
import TourDetailPage from './pages/TourDetailPage.jsx'
import ContactPage from './pages/ContactPage.jsx'
import FAQsPage from './pages/FAQsPage.jsx'
import NotFoundPage from './pages/NotFoundPage.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function App() {
return (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="services" element={<ServicesPage />} />
        <Route path="tours" element={<ToursPage />} />
        <Route path="tours/:id" element={<TourDetailPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="faqs" element={<FAQsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </>
)
}

export default App
