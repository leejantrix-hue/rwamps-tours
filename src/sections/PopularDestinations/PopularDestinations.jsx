import { useState } from 'react'
import { motion } from 'framer-motion'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import { MapPin, Star, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { popularAttractions } from '../../data/site.js'
import styles from './PopularDestinations.module.scss'

// Custom marker icon (avoids default broken Leaflet asset paths in Vite)
const customIcon = L.divIcon({
className: styles.customMarker,
html: `<span></span>`,
iconSize: [22, 22],
iconAnchor: [11, 22]
})

function PopularDestinations() {
const [activeId, setActiveId] = useState(popularAttractions[0]?.id)
const active = popularAttractions.find(a => a.id === activeId) || popularAttractions[0]

return (
  <section className={styles.section} id="popular">
    <div className={styles.inner}>
      <SectionHeading
        eyebrow="Iconic Landmarks"
        title="Popular Attractions Across the Gulf"
        subtitle="From record-breaking towers to ancient souks, explore the must-see spots on every Arabia itinerary."
      />

      <div className={styles.layout}>
        <div className={styles.list}>
          {popularAttractions.map((attr, idx) => (
            <motion.button
              key={attr.id}
              type="button"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setActiveId(attr.id)}
              onMouseEnter={() => setActiveId(attr.id)}
              className={`${styles.listItem} ${activeId === attr.id ? styles.active : ''}`}
              aria-pressed={activeId === attr.id}
            >
              <div className={styles.listThumb}>
                <img src={attr.image} alt={attr.name} loading="lazy" />
              </div>
              <div className={styles.listBody}>
                <h4>{attr.name}</h4>
                <p>
                  <MapPin size={12} /> {attr.city}, {attr.country}
                </p>
                <span className={styles.priceTag}>From {attr.currency} {attr.price}</span>
              </div>
              <span className={styles.listRating}>
                <Star size={12} fill="currentColor" /> {attr.rating.toFixed(1)}
              </span>
            </motion.button>
          ))}
        </div>

        <div className={styles.mapWrap}>
          <MapContainer
            center={[active?.lat ?? 25.2, active?.lng ?? 55.3]}
            zoom={5}
            scrollWheelZoom={false}
            className={styles.map}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{y}/{x}.png"
            />
            {popularAttractions.map(attr => (
              <Marker
                key={attr.id}
                position={[attr.lat, attr.lng]}
                icon={customIcon}
                eventHandlers={{ click: () => setActiveId(attr.id) }}
              >
                <Popup>
                  <strong>{attr.name}</strong><br />
                  {attr.city}, {attr.country}<br />
                  From {attr.currency} {attr.price}
                </Popup>
              </Marker>
            ))}
          </MapContainer>

          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className={styles.activeCard}
            >
              <img src={active.image} alt={active.name} />
              <div className={styles.activeBody}>
                <span className={styles.activeBadge}>
                  <Star size={12} fill="currentColor" /> {active.rating.toFixed(1)}
                </span>
                <h4>{active.name}</h4>
                <p>{active.description}</p>
                <div className={styles.activeFoot}>
                  <span><strong>{active.currency} {active.price}</strong> / person</span>
                  <Link to="/tours" className={styles.activeCta}>
                    Book Tour <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  </section>
)
}

export default PopularDestinations
