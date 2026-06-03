import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import Services from '../../sections/Services/Services.jsx'
import FAQs from '../../sections/FAQs/FAQs.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'

function ServicesPage() {
return (
  <>
    <PageHeader
      title="Our Services"
      subtitle="From visa assistance to private guides, transfers to bespoke itineraries — we handle every detail so you can focus on the journey."
      crumbs={[{ label: 'Services' }]}
      image="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?w=1600&q=80"
    />
    <Services />
    <FAQs limit={6} />
    <ContactForm compact />
  </>
)
}

export default ServicesPage
