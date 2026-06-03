import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { testimonials } from '../../data/site.js'
import styles from './Testimonials.module.scss'

const AUTOPLAY_MS = 6500

function Testimonials() {
const [index, setIndex] = useState(0)
const [paused, setPaused] = useState(false)

const go = useCallback((dir) => {
  setIndex(i => (i + dir + testimonials.length) % testimonials.length)
}, [])

useEffect(() => {
  if (paused) return undefined
  const id = setInterval(() => go(1), AUTOPLAY_MS)
  return () => clearInterval(id)
}, [go, paused])

const active = testimonials[index]

return (
  <section className={styles.section} id="testimonials">
    <div className={styles.inner}>
      <SectionHeading
        eyebrow="Traveler Stories"
        title="Loved by Travelers from Around the World"
        subtitle="Real stories from real travelers. Every journey is a story we're honored to be part of."
      />

      <div
        className={styles.stage}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          className={`${styles.nav} ${styles.navPrev}`}
          onClick={() => go(-1)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={20} />
        </button>

        <div className={styles.cardWrap}>
          <AnimatePresence mode="wait">
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className={styles.card}
            >
              <Quote size={48} className={styles.quoteIcon} aria-hidden="true" />

              <div className={styles.stars} aria-label={`${active.rating} out of 5 stars`}>
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    fill={i < active.rating ? 'currentColor' : 'none'}
                  />
                ))}
              </div>

              <p className={styles.quote}>&ldquo;{active.quote}&rdquo;</p>

              <div className={styles.author}>
                <img src={active.avatar} alt={active.name} loading="lazy" />
                <div>
                  <strong>{active.name}</strong>
                  <span>{active.role} · {active.country}</span>
                </div>
              </div>
            </motion.article>
          </AnimatePresence>
        </div>

        <button
          type="button"
          className={`${styles.nav} ${styles.navNext}`}
          onClick={() => go(1)}
          aria-label="Next testimonial"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className={styles.dots} role="tablist" aria-label="Testimonial pagination">
        {testimonials.map((t, i) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => setIndex(i)}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
          />
        ))}
      </div>
    </div>
  </section>
)
}

export default Testimonials
