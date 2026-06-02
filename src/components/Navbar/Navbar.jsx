import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Plane, Phone, ChevronRight } from 'lucide-react'
import styles from './Navbar.module.scss'

const NAV_LINKS = [
{ to: '/', label: 'Home' },
{ to: '/about', label: 'About' },
{ to: '/services', label: 'Services' },
{ to: '/tours', label: 'Tours' },
{ to: '/faqs', label: 'FAQs' },
{ to: '/contact', label: 'Contact' }
]

function Navbar() {
const [scrolled, setScrolled] = useState(false)
const [menuOpen, setMenuOpen] = useState(false)
const location = useLocation()

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20)
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])

useEffect(() => { setMenuOpen(false) }, [location.pathname])

useEffect(() => {
  document.body.style.overflow = menuOpen ? 'hidden' : ''
  return () => { document.body.style.overflow = '' }
}, [menuOpen])

return (
  <motion.header
    initial={{ y: -80 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5, ease: 'easeOut' }}
    className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}
  >
    <div className={styles.inner}>
      <Link to="/" className={styles.logo} aria-label="Rwamps Tours home">
        <span className={styles.logoIcon}>
          <Plane size={22} strokeWidth={2.5} />
        </span>
        <span className={styles.logoText}>
          Rwamps<span className={styles.logoAccent}>Tours</span>
        </span>
      </Link>

      <nav className={styles.desktopNav} aria-label="Main navigation">
        <ul className={styles.navList}>
          {NAV_LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.actions}>
        <a href="tel:+97141234567" className={styles.callBtn} aria-label="Call us">
          <Phone size={16} strokeWidth={2.5} />
          <span>+971 4 123 4567</span>
        </a>
        <Link to="/tours" className={styles.ctaBtn}>
          Book Now
          <ChevronRight size={16} />
        </Link>
        <button
          type="button"
          className={styles.menuToggle}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(v => !v)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
    </div>

    <AnimatePresence>
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: '100%' }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: '100%' }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className={styles.mobilePanel}
        >
          <ul className={styles.mobileList}>
            {NAV_LINKS.map(({ to, label }, idx) => (
              <motion.li
                key={to}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * idx }}
              >
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `${styles.mobileLink} ${isActive ? styles.active : ''}`}
                >
                  {label}
                  <ChevronRight size={20} />
                </NavLink>
              </motion.li>
            ))}
          </ul>
          <div className={styles.mobileFoot}>
            <a href="tel:+97141234567" className={styles.mobileCall}>
              <Phone size={18} /> +971 4 123 4567
            </a>
            <Link to="/tours" className={styles.mobileCta}>Book Now</Link>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.header>
)
}

export default Navbar
