import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, MessageCircleQuestion } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import Button from '../../components/Button/Button.jsx'
import { faqs } from '../../data/site.js'
import styles from './FAQs.module.scss'

function FAQs({
limit,
showContactCta = true,
title = 'Frequently Asked Questions',
eyebrow = 'Need Help?',
subtitle = "Everything you need to know before booking your Arabian adventure. Can't find what you're looking for? Get in touch."
}) {
const [openId, setOpenId] = useState(null)
const list = limit ? faqs.slice(0, limit) : faqs

const toggle = (id) => setOpenId(prev => (prev === id ? null : id))

return (
  <section className={styles.section} id="faqs">
    <div className={styles.inner}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className={styles.list}>
        {list.map((item, idx) => {
          const isOpen = openId === item.id
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className={`${styles.item} ${isOpen ? styles.itemOpen : ''}`}
            >
              <button
                type="button"
                className={styles.head}
                onClick={() => toggle(item.id)}
                aria-expanded={isOpen}
                aria-controls={`faq-${item.id}`}
              >
                <span className={styles.headText}>{item.question}</span>
                <span className={styles.toggle} aria-hidden="true">
                  <Plus size={20} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="body"
                    id={`faq-${item.id}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                    className={styles.body}
                  >
                    <p>{item.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>

      {showContactCta && (
        <div className={styles.ctaBox}>
          <MessageCircleQuestion size={32} />
          <div>
            <h3>Still have questions?</h3>
            <p>Our travel experts are available 24/7 to help you plan the perfect trip.</p>
          </div>
          <Button to="/contact" variant="primary" size="md">Contact Us</Button>
        </div>
      )}
    </div>
  </section>
)
}

export default FAQs
