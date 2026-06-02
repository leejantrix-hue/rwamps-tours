import { Routes, Route } from 'react-router-dom'
import MainLayout from './layouts/MainLayout/MainLayout.jsx'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import Tours from './pages/Tours/Tours.jsx'
import TourDetail from './pages/TourDetail/TourDetail.jsx'
import Contact from './pages/Contact/Contact.jsx'
import FAQs from './pages/FAQs/FAQs.jsx'
import NotFound from './pages/NotFound/NotFound.jsx'
import ScrollToTop from './components/ScrollToTop/ScrollToTop.jsx'

function App() {
return (
  <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="tours" element={<Tours />} />
        <Route path="tours/:id" element={<TourDetail />} />
        <Route path="contact" element={<Contact />} />
        <Route path="faqs" element={<FAQs />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </>
)
}

export default App
