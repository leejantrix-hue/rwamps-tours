import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { popularDestinations } from '../../data/site.js'
import styles from './PopularDestinations.module.scss'

// Fix Leaflet default icon paths for Vite bundling
const DefaultIcon = L.icon({
iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
iconSize: [25, 41],
iconAnchor: [12, 41],
popupAnchor: [1, -34],
shadowSize: [41, 41]
})
L.Marker.prototype.options.icon = DefaultIcon

function PopularDestinations() {
const mapRef = useRef(null)
const mapInstance = useRef(null)

useEffect(() => {
  if (!mapRef.current || mapInstance.current) return

  // Center roughly on the Gulf region
  const map = L.map(mapRef.current, {
    center: [24.5, 52.5],
    zoom: 5,
    scrollWheelZoom: false,
    attributionControl: true
  })

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap contributors',
    maxZoom: 18
  }).addTo(map)

  popularDestinations.forEach(d => {
    if (d.coords) {
      const marker = L.marker(d.coords).addTo(map)
      marker.bindPopup(
        `<strong>${d.name}</strong><br/>${d.location}<br/><em>From ${d.currency} ${d.priceFrom}</em>`
      )
    }
  })

  mapInstance.current = map

  return () => {
    map.remove()
    mapInstance.current = null
  }
}, [])

return (
  <section className={styles.section}>
    <div className={styles.inner}>
      <SectionHeading
        eyebrow="Most Loved Spots"
        title="Popular Attractions"
        subtitle="Iconic landmarks across the Gulf — bookable as standalone day experiences or as part of a full tour package."
      />

      <div className={styles.layout}>
        <div className={styles.list}>
          {popularDestinations.map((d, idx) => (
            <motion.article
              key={d.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={styles.item}
            >
              <Link to={`/tours/${d.tourId || d.id}`} className={styles.itemImg}>
                <img src={d.image} alt={d.name} loading="lazy" />
              </Link>
              <div className={styles.itemBody}>
                <div className={styles.itemHeader}>
                  <h3>{d.name}</h3>
                  <span className={styles.rating}>
                    <Star size={14} fill="currentColor" /> {d.rating?.toFixed?.(1) || d.rating}
                  </span>
                </div>
                <p className={styles.itemLoc}>
                  <MapPin size={14} /> {d.location}
                </p>
                <p className={styles.itemDesc}>{d.description}</p>
                <div className={styles.itemFoot}>
                  <span className={styles.price}>
                    From <strong>{d.currency} {d.priceFrom}</strong>
                  </span>
                  <Link to={`/tours/${d.tourId || d.id}`} className={styles.itemCta}>
                    Book <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className={styles.mapWrap}
        >
          <div ref={mapRef} className={styles.map} role="img" aria-label="Map of popular destinations" />
        </motion.div>
      </div>
    </div>
  </section>
)
}

export default PopularDestinations
