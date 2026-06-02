import { motion } from 'framer-motion'
import * as Icons from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { services } from '../../data/site.js'
import styles from './Services.module.scss'

/**
* Pick a Lucide icon by name with a safe fallback.
*/
function Icon({ name, size = 26 }) {
 const Comp = Icons[name] || Icons.Sparkles
 return <Comp size={size} strokeWidth={2} />
}

function Services({ limit, eyebrow, title, subtitle }) {
 const list = limit ? services.slice(0, limit) : services

 return (
   <section className={styles.section} id="services">
     <div className={styles.inner}>
       <SectionHeading
         eyebrow={eyebrow || 'What We Offer'}
         title={title || 'Why Travel With Rwamps Tours'}
         subtitle={subtitle || 'Premium service from the first click to the last sunset. We handle every detail so you can focus on the experience.'}
       />

       <div className={styles.grid}>
         {list.map((s, idx) => (
           <motion.article
             key={s.id}
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, amount: 0.3 }}
             transition={{ duration: 0.5, delay: idx * 0.1, ease: 'easeOut' }}
             whileHover={{ y: -6 }}
             className={styles.card}
           >
             <div className={styles.iconWrap} style={{ '--card-accent': s.color }}>
               <Icon name={s.icon} />
             </div>
             <h3 className={styles.title}>{s.title}</h3>
             <p className={styles.description}>{s.description}</p>
           </motion.article>
         ))}
       </div>
     </div>
   </section>
 )
}

export default Services
