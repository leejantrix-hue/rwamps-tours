import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessageCircleQuestion } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Button from '../../components/Button/Button.jsx'
import { faqs } from '../../data/site.js'
import styles from './FAQ.module.scss'

function FAQ({ limit }) {
const list = limit ? faqs.slice(0, limit) : faqs
const [openId, setOpenId] = useState(list[0]?.id ?? null)

const toggle = (id) => setOpenId(prev => (prev === id ? null : id))

return (
  <section className={styles.section} id="faq">
    <div className={styles.inner}>
      <SectionHeading
        eyebrow="Got Questions?"
        title="Frequently Asked Questions"
        subtitle="Everything you need to know before booking. Can't find what you're looking for? Reach out — we usually reply within an hour."
      />

      <div className={styles.layout}>
        <div className={styles.aside}>
          <MessageCircleQuestion size={36} className={styles.asideIcon} />
          <h3>Still curious?</h3>
          <p>Our travel consultants are standing by to help you plan the perfect Gulf adventure.</p>
          <Button to="/contact" variant="secondary" size="md">Contact Us</Button>
        </div>

        <ul className={styles.list}>
          {list.map((f, idx) => {
            const isOpen = openId === f.id
            return (
              <motion.li
                key={f.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
              >
                <button
                  type="button"
                  className={styles.qBtn}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${f.id}`}
                  onClick={() => toggle(f.id)}
                >
                  <span>{f.question}</span>
                  <span className={styles.icon} aria-hidden="true">
                    <Plus size={18} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-panel-${f.id}`}
                      key="panel"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className={styles.panel}
                    >
                      <p>{f.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </div>
  </section>
)
}

export default FAQ
