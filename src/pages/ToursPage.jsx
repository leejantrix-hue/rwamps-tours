import Destinations from '../sections/Destinations/Destinations.jsx'
import PopularDestinations from '../sections/PopularDestinations/PopularDestinations.jsx'
import styles from './SimplePage.module.scss'

function ToursPage() {
return (
  <>
    <section className={styles.pageHero}>
      <div className={styles.inner}>
        <span className={styles.eyebrow}>All Tours</span>
        <h1>Browse our full collection of Gulf experiences.</h1>
        <p>
          From half-day city tours to multi-week regional itineraries — filter, compare and pick
          the trip that matches your style.
        </p>
      </div>
    </section>
    <Destinations />
    <PopularDestinations />
  </>
)
}

export default ToursPage
