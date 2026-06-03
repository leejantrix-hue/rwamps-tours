import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Users, MapPin, Star, Check, ArrowLeft, Calendar, Globe2 } from 'lucide-react'
import PageHeader from '../../components/PageHeader/PageHeader.jsx'
import Button from '../../components/Button/Button.jsx'
import ContactForm from '../../sections/ContactForm/ContactForm.jsx'
import { destinations } from '../../data/destinations.js'
import styles from './TourDetail.module.scss'

function TourDetail() {
const { slug } = useParams()
const tour = destinations.find(d => d.slug === slug)

if (!tour) return <Navigate to="/tours" replace />

const related = destinations
  .filter(d => d.id !== tour.id && d.category === tour.category)
  .slice(0, 3)

return (
  <>
    <PageHeader
      title={tour.title}
      subtitle={tour.tagline || tour.description}
      crumbs={[{ label: 'Tours', to: '/tours' }, { label: tour.title }]}
      image={tour.image}
    />

    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.layout}>
          <article className={styles.main}>
            <Link to="/tours" className={styles.back}>
              <ArrowLeft size={16} /> Back to all tours
            </Link>

            <div className={styles.hero}>
              <img src={tour.image} alt={tour.title} />
              <span className={styles.badge}>{tour.category}</span>
            </div>

            <div className={styles.meta}>
              <span><MapPin size={16} /> {tour.location}</span>
              <span><Clock size={16} /> {tour.duration}</span>
              <span><Users size={16} /> {tour.groupSize || 'Small Group'}</span>
              <span className={styles.rating}>
                <Star size={16} fill="currentColor" /> {tour.rating.toFixed(1)} ({tour.reviews || 0})
              </span>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              <h2>Overview</h2>
              <p>{tour.description}</p>

              <h2>What's Included</h2>
              <ul className={styles.checks}>
                {(tour.included || ['Professional licensed guide', 'All entrance fees', 'Hotel pickup & drop-off', 'Bottled water', 'Photography stops']).map((it, i) => (
                  <li key={i}><Check size={16} /> {it}</li>
                ))}
              </ul>

              <h2>Highlights</h2>
              <ul className={styles.checks}>
                {(tour.highlights || [
                  `Experience the best of ${tour.location}`,
                  'Curated by local experts',
                  'Small-group, personal pace',
                  'Photo-worthy moments at every turn'
                ]).map((h, i) => (
                  <li key={i}><Check size={16} /> {h}</li>
                ))}
              </ul>

              <h2>Itinerary</h2>
              <div className={styles.itinerary}>
                {(tour.itinerary || [
                  { day: 'Day 1', title: 'Arrival & Welcome', description: 'Hotel pickup, orientation, and welcome refreshments.' },
                  { day: 'Day 2', title: 'Main Experience', description: 'Full-day exploration of the highlights with your guide.' },
                  { day: 'Day 3', title: 'Departure', description: 'Final souvenirs, transfer to airport.' }
                ]).map((d, i) => (
                  <div key={i} className={styles.itDay}>
                    <span className={styles.itBadge}>{d.day}</span>
                    <div>
                      <strong>{d.title}</strong>
                      <p>{d.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </article>

          <aside className={styles.sidebar}>
            <div className={styles.bookCard}>
              <div className={styles.priceBlock}>
                <span>From</span>
                <strong>{tour.currency} {tour.price}</strong>
                <small>per person</small>
              </div>

              <ul className={styles.bookList}>
                <li><Calendar size={14} /> Daily departures</li>
                <li><Clock size={14} /> {tour.duration}</li>
                <li><Globe2 size={14} /> English, Arabic, French</li>
                <li><Users size={14} /> {tour.groupSize || 'Small Group'}</li>
              </ul>

              <Button to="/contact" variant="primary" size="lg" fullWidth>Request to Book</Button>
              <a href="#contact" className={styles.bookLink}>or send an inquiry below</a>
            </div>
          </aside>
        </div>

        {related.length > 0 && (
          <div className={styles.related}>
            <h3>You may also like</h3>
            <div className={styles.relatedGrid}>
              {related.map(r => (
                <Link key={r.id} to={`/tours/${r.slug}`} className={styles.relCard}>
                  <img src={r.image} alt={r.title} />
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.currency} {r.price}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>

    <ContactForm compact />
  </>
)
}

export default TourDetail
