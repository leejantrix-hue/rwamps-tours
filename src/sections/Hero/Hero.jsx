import { motion } from 'framer-motion'
import { Search, MapPin, Calendar, Users, Star, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button.jsx'
import styles from './Hero.module.scss'

const STATS = [
{ value: '5K+', label: 'Happy Travelers' },
{ value: '150+', label: 'Destinations' },
{ value: '4.9', label: 'Average Rating' },
{ value: '24/7', label: 'Support' }
]

function Hero() {
return (
  <section className={styles.hero}>
    <div className={styles.bg} aria-hidden="true">
      <div className={styles.gradient} />
      <div className={styles.pattern} />
    </div>

    <div className={styles.inner}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={styles.content}
      >
        <motion.span
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className={styles.eyebrow}
        >
          <Star size={14} fill="currentColor" />
          #1 Tour Operator in the Gulf
        </motion.span>

        <h1 className={styles.title}>
          Discover the<br />
          <span className={styles.titleAccent}>Wonders of Arabia</span>
        </h1>

        <p className={styles.subtitle}>
          From the dazzling skyline of Dubai to the timeless dunes of Oman, we craft luxurious journeys across the Gulf. Premium tours, expert guides, unforgettable memories.
        </p>

        <div className={styles.cta}>
          <Button to="/tours" variant="secondary" size="lg">Explore Tours</Button>
          <Button to="/contact" variant="ghost" size="lg">Get in Touch</Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className={styles.searchCard}
          role="search"
          aria-label="Quick tour search"
        >
          <div className={styles.searchField}>
            <MapPin size={18} />
            <div>
              <label>Destination</label>
              <select defaultValue="">
                <option value="" disabled>Where to?</option>
                <option>Dubai</option>
                <option>Abu Dhabi</option>
                <option>Riyadh</option>
                <option>Muscat</option>
                <option>Doha</option>
              </select>
            </div>
          </div>
          <div className={styles.searchField}>
            <Calendar size={18} />
            <div>
              <label>Departure</label>
              <input type="date" />
            </div>
          </div>
          <div className={styles.searchField}>
            <Users size={18} />
            <div>
              <label>Travelers</label>
              <select defaultValue="2">
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5">5+ People</option>
              </select>
            </div>
          </div>
          <Link to="/tours" className={styles.searchBtn} aria-label="Search tours">
            <Search size={20} />
            <span>Search</span>
          </Link>
        </motion.div>

        <motion.ul
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.1, delayChildren: 0.7 } }
          }}
          className={styles.stats}
        >
          {STATS.map(({ value, label }) => (
            <motion.li
              key={label}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 }
              }}
            >
              <strong>{value}</strong>
              <span>{label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </div>

    <a href="#destinations" className={styles.scrollHint} aria-label="Scroll to content">
      <span>Scroll</span>
      <ChevronDown size={20} />
    </a>
  </section>
)
}

export default Hero
