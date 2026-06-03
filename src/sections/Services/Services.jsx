import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { services } from '../../data/site.js'
import styles from './Services.module.scss'

function ServiceIcon({ name, size = 28 }) {
const Cmp = Icons[name] || Icons.Sparkles
return <Cmp size={size} strokeWidth={2} />
}

function Services({
title = 'Why Choose Rwamps Tours',
eyebrow = 'Our Promise',
subtitle = 'Every journey we craft is built on four pillars that make your travel effortless and memorable.'
}) {
return (
  <section className={styles.section} id="services">
    <div className={styles.inner}>
      <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

      <div className={styles.grid}>
        {services.map((s, idx) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
            whileHover={{ y: -8 }}
            className={styles.card}
          >
            <div className={styles.iconWrap}>
              <ServiceIcon name={s.icon} />
            </div>
            <h3 className={styles.title}>{s.title}</h3>
            <p className={styles.desc}>{s.description}</p>
            <span className={styles.bar} aria-hidden="true" />
          </motion.article>
        ))}
      </div>
    </div>
  </section>
)
}

export default Services
