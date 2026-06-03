import Hero from '../../sections/Hero/Hero.jsx'
import Services from '../../sections/Services/Services.jsx'
import Destinations from '../../sections/Destinations/Destinations.jsx'
import PopularDestinations from '../../sections/PopularDestinations/PopularDestinations.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import FAQs from '../../sections/FAQs/FAQs.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'

function Home() {
return (
  <>
    <Hero />
    <Services />
    <Destinations limit={8} showCta />
    <PopularDestinations />
    <Testimonials />
    <FAQs limit={6} />
    <ContactForm />
  </>
)
}

export default Home
