import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { testimonials } from '../../data/site.js'
import styles from './Testimonials.module.scss'

const AUTOPLAY_MS = 6500

function Testimonials() {
const [index, setIndex] = useState(0)
const [paused, setPaused] = useState(false)

const goTo = useCallback((i) => {
  setIndex(((i % testimonials.length) + testimonials.length) % testimonials.length)
}, [])

const next = useCallback(() => goTo(index + 1), [goTo, index])
const prev = useCallback(() => goTo(index - 1), [goTo, index])

useEffect(() => {
  if (paused) return
  const id = setInterval(next, AUTOPLAY_MS)
  return () => clearInterval(id)
}, [next, paused])

const t = testimonials[index]

return (
  <section className={styles.section}>
    <div className={styles.bgPattern} aria-hidden="true" />
    <div className={styles.inner}>
      <SectionHeading
        eyebrow="Real Stories"
        title="What Our Travelers Say"
        subtitle="5,000+ happy travelers across the Gulf. Here's what they say about their Rwamps Tours experience."
        light
      />

      <div
        className={styles.carousel}
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <button
          type="button"
          onClick={prev}
          aria-label="Previous testimonial"
          className={`${styles.navBtn} ${styles.prev}`}
        >
          <ChevronLeft size={22} />
        </button>

        <div className={styles.viewport}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.figure
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className={styles.card}
            >
              <Quote className={styles.quoteMark} size={48} />
              <div className={styles.stars}>
                {Array.from({ length: t.rating || 5 }).map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>
              <blockquote className={styles.quote}>"{t.quote}"</blockquote>
              <figcaption className={styles.author}>
                <img src={t.avatar} alt={t.name} loading="lazy" />
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.title || t.location}</span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Next testimonial"
          className={`${styles.navBtn} ${styles.next}`}
        >
          <ChevronRight size={22} />
        </button>
      </div>

      <div className={styles.dots} role="tablist">
        {testimonials.map((tt, i) => (
          <button
            key={tt.id}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to testimonial ${i + 1}`}
            onClick={() => goTo(i)}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
          />
        ))}
      </div>
    </div>
  </section>
)
}

export default Testimonials
