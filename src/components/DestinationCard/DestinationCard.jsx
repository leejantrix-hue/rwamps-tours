import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, MapPin, Clock, Users, ArrowRight } from 'lucide-react'
import styles from './DestinationCard.module.scss'

function DestinationCard({ destination, index = 0 }) {
const { id, name, image, pricePerPerson, currency, rating, location, durationDays, maxPeople, tags } = destination

return (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.5, delay: (index % 4) * 0.08, ease: 'easeOut' }}
    whileHover={{ y: -8 }}
    className={styles.card}
  >
    <Link to={`/tours/${id}`} className={styles.imageLink} aria-label={`View ${name} tour details`}>
      <div className={styles.imageWrap}>
        <img src={image} alt={name} loading="lazy" />
        <div className={styles.overlay}>
          <span className={styles.viewMore}>View Details <ArrowRight size={16} /></span>
        </div>
        <div className={styles.priceBadge}>
          <span className={styles.priceLabel}>From</span>
          <span className={styles.priceValue}>{currency} {pricePerPerson}</span>
          <span className={styles.priceUnit}>/ person</span>
        </div>
        <div className={styles.ratingBadge}>
          <Star size={14} fill="currentColor" /> {rating.toFixed(1)}
        </div>
      </div>
    </Link>

    <div className={styles.body}>
      <div className={styles.tags}>
        {tags?.slice(0, 3).map(t => (
          <span key={t} className={styles.tag}>{t}</span>
        ))}
      </div>
      <h3 className={styles.title}>
        <Link to={`/tours/${id}`}>{name}</Link>
      </h3>
      <p className={styles.location}>
        <MapPin size={14} /> {location}
      </p>
      <ul className={styles.meta}>
        <li><Clock size={14} /> {durationDays} Days</li>
        <li><Users size={14} /> Up to {maxPeople}</li>
      </ul>
      <Link to={`/tours/${id}`} className={styles.cta}>
        Explore Tour <ArrowRight size={16} />
      </Link>
    </div>
  </motion.article>
)
}

export default DestinationCard
