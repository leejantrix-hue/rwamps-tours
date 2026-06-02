import { useState, useMemo } from 'react'
import { motion } from 'framer-motion'
import { Sparkles } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import DestinationCard from '../../components/DestinationCard/DestinationCard.jsx'
import Button from '../../components/Button/Button.jsx'
import { destinations, destinationCategories } from '../../data/destinations.js'
import styles from './Destinations.module.scss'

/**
* Destinations grid.
* Props:
*  - limit: number of destinations to show (default: all)
*  - showFilters: render category pills (default true)
*  - showCta: show "View all tours" CTA at bottom (default false)
*  - title, eyebrow, subtitle: heading overrides
*/
function Destinations({
 limit,
 showFilters = true,
 showCta = false,
 title = 'Featured Destinations',
 eyebrow = 'Explore the Gulf',
 subtitle = 'Hand-picked tours across the Arabian peninsula, designed for travelers who want the very best of the region.'
}) {
 const [activeCategory, setActiveCategory] = useState('All')

 const filtered = useMemo(() => {
   const list = activeCategory === 'All'
     ? destinations
     : destinations.filter(d => d.category === activeCategory)
   return limit ? list.slice(0, limit) : list
 }, [activeCategory, limit])

 return (
   <section className={styles.section} id="destinations">
     <div className={styles.inner}>
       <SectionHeading eyebrow={eyebrow} title={title} subtitle={subtitle} />

       {showFilters && (
         <motion.div
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.5 }}
           className={styles.filters}
           role="tablist"
           aria-label="Destination categories"
         >
           {['All', ...destinationCategories].map(cat => (
             <button
               key={cat}
               type="button"
               role="tab"
               aria-selected={activeCategory === cat}
               onClick={() => setActiveCategory(cat)}
               className={`${styles.filterBtn} ${activeCategory === cat ? styles.active : ''}`}
             >
               {cat === 'All' && <Sparkles size={14} />}
               {cat}
             </button>
           ))}
         </motion.div>
       )}

       {filtered.length === 0 ? (
         <p className={styles.empty}>No destinations match this category yet.</p>
       ) : (
         <div className={styles.grid}>
           {filtered.map((dest, idx) => (
             <DestinationCard key={dest.id} destination={dest} index={idx} />
           ))}
         </div>
       )}

       {showCta && (
         <div className={styles.ctaWrap}>
           <Button to="/tours" variant="secondary" size="lg">View All Tours</Button>
         </div>
       )}
     </div>
   </section>
 )
}

export default Destinations
