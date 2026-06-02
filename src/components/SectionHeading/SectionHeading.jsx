import { motion } from 'framer-motion'
import styles from './SectionHeading.module.scss'

/**
* Section heading with eyebrow + title + optional subtitle.
* Props:
*  - eyebrow: small uppercase label above the title
*  - title: main heading
*  - subtitle: supporting paragraph
*  - align: 'left' | 'center'  (default 'center')
*  - light: boolean -> renders for dark backgrounds
*/
function SectionHeading({ eyebrow, title, subtitle, align = 'center', light = false }) {
 return (
   <motion.div
     initial={{ opacity: 0, y: 20 }}
     whileInView={{ opacity: 1, y: 0 }}
     viewport={{ once: true, amount: 0.5 }}
     transition={{ duration: 0.6, ease: 'easeOut' }}
     className={`${styles.wrap} ${styles[align]} ${light ? styles.light : ''}`}
   >
     {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
     <h2 className={styles.title}>{title}</h2>
     {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
     <span className={styles.bar} aria-hidden="true" />
   </motion.div>
 )
}

export default SectionHeading
