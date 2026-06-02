import Services from '../sections/Services/Services.jsx'
import ContactForm from '../sections/ContactForm/ContactForm.jsx'
import styles from './SimplePage.module.scss'

function ServicesPage() {
return (
  <>
    <section className={styles.pageHero}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>Our Services</span>
        <h1>Everything you need for a flawless Gulf trip.</h1>
        <p>
          We handle every part of your travel — from the first idea to the moment you head home.
          Pick and choose, or let us put together the whole package.
        </p>
      </div>
    </section>
    <Services />
    <ContactForm />
  </>
)
}

export default ServicesPage
