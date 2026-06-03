import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'

function Contact() {
return (
  <>
    <PageHeader
      title="Contact Us"
      subtitle="Have a question, a custom request, or ready to book? Drop us a line — we respond within 2 hours during business hours."
      crumbs={[{ label: 'Contact' }]}
      image="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?w=1600&q=80"
    />
    <ContactForm />
  </>
)
}

export default Contact
