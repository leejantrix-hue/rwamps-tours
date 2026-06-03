import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import PopularDestinations from '../../sections/PopularDestinations/PopularDestinations.jsx'
import Destinations from '../../sections/Destinations/Destinations.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'

function DestinationsPage() {
return (
  <>
    <PageHeader
      title="Destinations"
      subtitle="Discover the most iconic destinations across the UAE and Gulf — explored on the map, ready to be experienced."
      crumbs={[{ label: 'Destinations' }]}
      image="https://images.unsplash.com/photo-1546412414-e1885259563a?w=1600&q=80"
    />
    <PopularDestinations />
    <Destinations
      title="All Destinations"
      eyebrow="Browse"
      subtitle="Hand-picked locations with tours ready to book."
    />
    <ContactForm compact />
  </>
)
}

export default DestinationsPage
