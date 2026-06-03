import { Link } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { motion } from 'framer-motion'
import styles from './PageHeader.module.scss'

/**
* Inner-page hero/banner with breadcrumbs.
* Props:
*  - title: string
*  - subtitle: string
*  - image: bg image url (optional)
*  - crumbs: [{ label, to? }]
*/
function PageHeader({ title, subtitle, image, crumbs = [] }) {
 const bg = image ? { backgroundImage: `linear-gradient(135deg, rgba(15,32,67,0.85) 0%, rgba(15,32,67,0.7) 100%), url(${image})` } : undefined
 return (
   <header className={styles.header} style={bg}>
     <div className={styles.inner}>
       <motion.nav
         aria-label="Breadcrumb"
         className={styles.crumbs}
         initial={{ opacity: 0, y: -10 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.4 }}
       >
         <Link to="/"><Home size={14} /> Home</Link>
         {crumbs.map((c, i) => (
           <span key={i} className={styles.crumb}>
             <ChevronRight size={14} />
             {c.to ? <Link to={c.to}>{c.label}</Link> : <span aria-current="page">{c.label}</span>}
           </span>
         ))}
       </motion.nav>

       <motion.h1
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.1 }}
         className={styles.title}
       >
         {title}
       </motion.h1>

       {subtitle && (
         <motion.p
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className={styles.subtitle}
         >
           {subtitle}
         </motion.p>
       )}
     </div>
   </header>
 )
}

export default PageHeader
