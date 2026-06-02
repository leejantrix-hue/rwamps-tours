import FAQ from '../sections/FAQ/FAQ.jsx'
import ContactForm from '../sections/ContactForm/ContactForm.jsx'
import styles from './SimplePage.module.scss'

function FAQsPage() {
return (
  <>
    <section className={styles.pageHero}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Help Center</span>
        <h1>Answers to the questions we hear most.</h1>
        <p>
          Bookings, payments, visas, group sizes, refunds — find what you need below, or reach
          out and we will reply within an hour.
        </p>
      </div>
    </section>
    <FAQ />
    <ContactForm />
  </>
)
}

export default FAQsPage
