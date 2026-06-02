import ContactForm from '../sections/ContactForm/ContactForm.jsx'
import styles from './SimplePage.module.scss'

function ContactPage() {
return (
  <>
    <section className={styles.pageHero}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Contact</span>
        <h1>Let's plan something extraordinary.</h1>
        <p>
          Tell us about your trip and we'll put together a proposal — usually within a working
          day. No commitment, no pressure.
        </p>
      </div>
    </section>
    <ContactForm />
  </>
)
}

export default ContactPage
