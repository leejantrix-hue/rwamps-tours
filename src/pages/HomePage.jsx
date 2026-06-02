import Hero from '../sections/Hero/Hero.jsx'
import Services from '../sections/Services/Services.jsx'
import Destinations from '../sections/Destinations/Destinations.jsx'
import PopularDestinations from '../sections/PopularDestinations/PopularDestinations.jsx'
import Testimonials from '../sections/Testimonials/Testimonials.jsx'
import FAQ from '../sections/FAQ/FAQ.jsx'
import ContactForm from '../sections/ContactForm/ContactForm.jsx'

function HomePage() {
return (
  <>
    <Hero />
    <Services />
    <Destinations limit={6} showCta />
    <PopularDestinations />
    <Testimonials />
    <FAQ limit={6} />
    <ContactForm />
  </>
)
}

export default HomePage
