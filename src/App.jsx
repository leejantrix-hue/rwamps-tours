import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop.jsx'
import MainLayout from './layouts/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Tours from './pages/Tours/Tours.jsx'
import TourDetail from './pages/TourDetail/TourDetail.jsx'
import ServicesPage from './pages/Services/Services.jsx'
import DestinationsPage from './pages/Destinations/Destinations.jsx'
import FAQsPage from './pages/FAQs/FAQs.jsx'
import Contact from './pages/Contact/Contact.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/tours/:slug" element={<TourDetail />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/destinations" element={<DestinationsPage />} />
          <Route path="/faqs" element={<FAQsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
