import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import FAQs from '../../sections/FAQs/FAQs.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'

function FAQsPage() {
return (
  <>
    <PageHeader
      title="Frequently Asked Questions"
      subtitle="Answers to the questions we get most often. Still curious? Send us a message — we love to help."
      crumbs={[{ label: 'FAQs' }]}
      image="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?w=1600&q=80"
    />
    <FAQs />
    <ContactForm compact />
  </>
)
}

export default FAQsPage
