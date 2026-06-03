import { motion } from 'framer-motion'
import { Award, Users, Globe2, Heart, Target, Eye } from 'lucide-react'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Testimonials from '../../sections/Testimonials/Testimonials.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'
import { company, stats } from '../../data/site.js'
import styles from './About.module.scss'

const ICONS = { Award, Users, Globe2, Heart }

function About() {
return (
  <>
    <PageHeader
      title={`About ${company.name}`}
      subtitle="Your trusted partner for unforgettable journeys across the Arabian Peninsula. We craft tailored experiences that transform travel into lifelong memories."
      crumbs={[{ label: 'About' }]}
    />

    <section className={styles.story}>
      <div className={styles.storyInner}>
        <div className={styles.storyMedia}>
          <img src="https://images.unsplash.com/photo-1518684079-3c830dcef090?w=900&q=80" alt="Dubai skyline" />
          <div className={styles.badge}>
            <strong>10+</strong>
            <span>Years of Journeys</span>
          </div>
        </div>

        <div className={styles.storyBody}>
          <SectionHeading
            eyebrow="Our Story"
            title="Where Adventure Meets Authenticity"
            align="left"
          />
          <p>
            {company.name} was founded on a simple belief: travel should be effortless,
            meaningful, and crafted around the traveler. From the towering skyline of Dubai
            to the timeless sands of Wadi Rum, we design journeys that capture the soul of
            the Arabian Peninsula.
          </p>
          <p>
            Our team of local experts, multilingual guides, and travel designers work as
            one to deliver experiences that feel personal at every step. Whether you're
            chasing skyscrapers, deserts, or quiet moments, we'll get you there.
          </p>

          <div className={styles.values}>
            <div>
              <Target size={22} />
              <strong>Our Mission</strong>
              <p>Create transformative travel experiences that connect people with the rich culture and beauty of the Gulf.</p>
            </div>
            <div>
              <Eye size={22} />
              <strong>Our Vision</strong>
              <p>To become the most trusted curator of Arabian journeys for travelers everywhere.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className={styles.stats}>
      <div className={styles.statsInner}>
        {stats.map((s, idx) => {
          const Icon = ICONS[s.icon] || Award
          return (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={styles.stat}
            >
              <Icon size={28} />
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </motion.div>
          )
        })}
      </div>
    </section>

    <Testimonials />
    <ContactForm compact />
  </>
)
}

export default About
