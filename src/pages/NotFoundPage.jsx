import { Link } from 'react-router-dom'
import { Compass, ArrowLeft } from 'lucide-react'
import Button from '../components/Button/Button.jsx'
import styles from './NotFoundPage.module.scss'

function NotFoundPage() {
return (
  <section className={styles.section}>
    <div className={styles.inner}>
      <Compass size={64} className={styles.icon} />
      <span className={styles.code}>404</span>
      <h1>Looks like you wandered off the map.</h1>
      <p>
        The page you are looking for does not exist or has been moved. Let us guide you back —
        there is plenty more to explore.
      </p>
      <div className={styles.actions}>
        <Button to="/" variant="primary" size="lg">
          <ArrowLeft size={18} /> Back to Home
        </Button>
        <Link to="/tours" className={styles.link}>Browse tours instead</Link>
      </div>
    </div>
  </section>
)
}

export default NotFoundPage
