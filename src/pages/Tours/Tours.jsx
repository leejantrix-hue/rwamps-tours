import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import Destinations from '../../sections/Destinations/Destinations.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'

function Tours() {
return (
  <>
    <PageHeader
      title="Our Tours & Packages"
      subtitle="Browse our hand-picked collection of tours across the UAE and the Gulf. From skyline-soaring city breaks to desert escapes, find the experience that matches your spirit."
      crumbs={[{ label: 'Tours' }]}
      image="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=80"
    />
    <Destinations
      title="All Available Tours"
      eyebrow="Explore"
      subtitle="Filter by category to find your next adventure."
    />
    <ContactForm compact />
  </>
)
}

export default Tours
