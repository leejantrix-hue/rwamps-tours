import { motion } from 'framer-motion'
import { Award, Users, Globe2, Heart, Target, Sparkles } from 'lucide-react'
import SectionHeading from '../components/SectionHeading/SectionHeading.jsx'
import Testimonials from '../sections/Testimonials/Testimonials.jsx'
import styles from './AboutPage.module.scss'

const stats = [
{ icon: Users, label: 'Happy Travelers', value: '5,000+' },
{ icon: Globe2, label: 'Destinations', value: '40+' },
{ icon: Award, label: 'Years of Experience', value: '12+' },
{ icon: Heart, label: 'Repeat Customers', value: '78%' }
]

const values = [
{
  icon: Target,
  title: 'Local Expertise',
  body: 'Our team lives and breathes the Gulf. We know the hidden cafés, the best sunset points, the right time to visit the souks — because we go there ourselves.'
},
{
  icon: Heart,
  title: 'Genuine Hospitality',
  body: 'We treat every traveler like family. From airport pickup to your final day, we are reachable, attentive, and ready to make things right.'
},
{
  icon: Sparkles,
  title: 'Crafted Experiences',
  body: 'No cookie-cutter itineraries. Every tour is tuned to your pace, your interests, your group. We build trips around you, not the other way around.'
}
]

function AboutPage() {
return (
  <>
    <section className={styles.hero}>
      <div className={styles.heroInner}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={styles.heroContent}
        >
          <span className={styles.eyebrow}>About Rwamps Tours</span>
          <h1>Crafting unforgettable journeys across the Gulf since 2013.</h1>
          <p>
            Rwamps Global Tours & Consult is a boutique travel agency built on a simple belief —
            the best trips happen when local knowledge meets thoughtful planning. We design
            private and small-group experiences across the UAE, Oman, Saudi Arabia, Qatar,
            Bahrain and Kuwait.
          </p>
        </motion.div>
      </div>
    </section>

    <section className={styles.statsSection}>
      <div className={styles.statsInner}>
        {stats.map((s, idx) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            className={styles.stat}
          >
            <s.icon size={28} className={styles.statIcon} />
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </motion.div>
        ))}
      </div>
    </section>

    <section className={styles.storySection}>
      <div className={styles.storyInner}>
        <div className={styles.storyText}>
          <SectionHeading
            eyebrow="Our Story"
            title="From a passion for the Gulf to a growing community of travelers."
            align="left"
          />
          <p>
            Rwamps started in 2013 as a one-person operation in Dubai — a former hotel concierge
            who kept getting asked by friends-of-friends for travel tips. What began as informal
            advice grew into curated itineraries, then full tours, then a small team.
          </p>
          <p>
            Today we are a team of fifteen across Dubai, Muscat and Riyadh. We run on the same
            principles we started with: be present, be honest about what works, and never
            outsource the parts of a trip that matter most.
          </p>
          <p>
            We are licensed in the UAE, KSA and Oman, and partner with vetted local operators
            everywhere we go. Every tour we sell is one we have personally tested.
          </p>
        </div>
        <div className={styles.storyImg}>
          <img
            src="https://images.unsplash.com/photo-1518684079-3c830dcef090?auto=format&fit=crop&w=900&q=80"
            alt="Dubai skyline at dusk"
            loading="lazy"
          />
        </div>
      </div>
    </section>

    <section className={styles.valuesSection}>
      <div className={styles.valuesInner}>
        <SectionHeading
          eyebrow="What We Stand For"
          title="The values that shape every trip we plan"
        />
        <div className={styles.valuesGrid}>
          {values.map((v, idx) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.valueCard}
            >
              <v.icon size={28} className={styles.valueIcon} />
              <h3>{v.title}</h3>
              <p>{v.body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>

    <Testimonials />
  </>
)
}

export default AboutPage
