import { Link } from 'react-router-dom'
import { Compass, Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import Button from '../../components/Button/Button.jsx'
import styles from './NotFound.module.scss'

function NotFound() {
return (
  <section className={styles.section}>
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className={styles.box}
    >
      <Compass size={56} className={styles.icon} />
      <span className={styles.code}>404</span>
      <h1>Lost in the desert?</h1>
      <p>The page you're looking for has wandered off the map. Let's get you back to the journey.</p>
      <div className={styles.actions}>
        <Button to="/" variant="primary" icon={<Home size={18} />} iconPosition="left">Back to Home</Button>
        <Button to="/tours" variant="secondary" icon={<ArrowLeft size={18} />} iconPosition="left">Browse Tours</Button>
      </div>
    </motion.div>
  </section>
)
}

export default NotFound
