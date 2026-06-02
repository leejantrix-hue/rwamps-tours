import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { MapPin, Clock, Users, Star, Check, ArrowLeft, Calendar } from 'lucide-react'
import Button from '../components/Button/Button.jsx'
import { destinations, popularDestinations } from '../data/site.js'
import styles from './TourDetailPage.module.scss'

function TourDetailPage() {
const { id } = useParams()
const tour =
  destinations.find(d => d.id === id) ||
  popularDestinations.find(d => (d.tourId || d.id) === id)

if (!tour) return <Navigate to="/tours" replace />

const highlights = tour.highlights || [
  'Hotel pickup & drop-off included',
  'Professional English-speaking guide',
  'All entrance fees covered',
  'Bottled water & light refreshments',
  'Small group size (max 12 travelers)',
  'Free cancellation up to 24h before'
]

return (
  <article className={styles.page}>
    <div className={styles.heroWrap}>
      <img src={tour.image} alt={tour.name} className={styles.heroImg} />
      <div className={styles.heroOverlay} />
      <div className={styles.heroInner}>
        <Link to="/tours" className={styles.back}>
          <ArrowLeft size={16} /> Back to all tours
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={styles.heroContent}
        >
          <div className={styles.heroMeta}>
            <span className={styles.location}><MapPin size={14} /> {tour.location}</span>
            {tour.rating && (
              <span className={styles.rating}><Star size={14} fill="currentColor" /> {tour.rating.toFixed?.(1) || tour.rating} rating</span>
            )}
          </div>
          <h1>{tour.name}</h1>
          <p>{tour.description}</p>
        </motion.div>
      </div>
    </div>

    <div className={styles.body}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          <div className={styles.main}>
            <div className={styles.specs}>
              <div className={styles.spec}>
                <Clock size={18} />
                <div>
                  <strong>{tour.duration || 'Full day'}</strong>
                  <span>Duration</span>
                </div>
              </div>
              <div className={styles.spec}>
                <Users size={18} />
                <div>
                  <strong>{tour.groupSize || 'Max 12'}</strong>
                  <span>Group size</span>
                </div>
              </div>
              <div className={styles.spec}>
                <Calendar size={18} />
                <div>
                  <strong>{tour.availability || 'Year-round'}</strong>
                  <span>Availability</span>
                </div>
              </div>
            </div>

            <section className={styles.block}>
              <h2>About this tour</h2>
              <p>
                {tour.longDescription ||
                  `Experience the best of ${tour.location} with our expertly curated tour. We blend iconic landmarks with hidden gems most visitors miss — guided by locals who know the area inside out. Every detail is handled so you can focus on the moments that matter.`}
              </p>
            </section>

            <section className={styles.block}>
              <h2>What's included</h2>
              <ul className={styles.list}>
                {highlights.map((h, i) => (
                  <li key={i}>
                    <Check size={16} /> {h}
                  </li>
                ))}
              </ul>
            </section>
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.priceCard}>
              <span className={styles.from}>From</span>
              <div className={styles.price}>
                <strong>{tour.currency || 'AED'} {tour.priceFrom}</strong>
                <span>per person</span>
              </div>
              <Button to="/contact" variant="primary" size="lg" fullWidth>
                Book This Tour
              </Button>
              <p className={styles.note}>
                Reply within 1 hour during business hours. No commitment until you approve the
                itinerary.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  </article>
)
}

export default TourDetailPage
