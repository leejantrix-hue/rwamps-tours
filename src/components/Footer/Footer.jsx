import { Link } from 'react-router-dom'
import { Plane, MapPin, Phone, Mail, Facebook, Instagram, Twitter, Linkedin, Youtube, ChevronRight } from 'lucide-react'
import { companyInfo } from '../../data/site.js'
import styles from './Footer.module.scss'

const QUICK_LINKS = [
{ to: '/', label: 'Home' },
{ to: '/about', label: 'About Us' },
{ to: '/services', label: 'Services' },
{ to: '/tours', label: 'Tours' },
{ to: '/faqs', label: 'FAQs' },
{ to: '/contact', label: 'Contact' }
]

const DESTINATIONS_LINKS = [
{ to: '/tours/dubai', label: 'Dubai' },
{ to: '/tours/abu-dhabi', label: 'Abu Dhabi' },
{ to: '/tours/riyadh', label: 'Riyadh' },
{ to: '/tours/muscat', label: 'Muscat' },
{ to: '/tours/doha', label: 'Doha' },
{ to: '/tours/fujairah', label: 'Fujairah' }
]

function Footer() {
return (
  <footer className={styles.footer}>
    <div className={styles.top}>
      <div className={styles.inner}>
        <div className={styles.brandCol}>
          <Link to="/" className={styles.logo}>
            <span className={styles.logoIcon}><Plane size={22} strokeWidth={2.5} /></span>
            <span className={styles.logoText}>Rwamps<span className={styles.logoAccent}>Tours</span></span>
          </Link>
          <p className={styles.tagline}>
            Discover the wonders of Arabia with our premium tour experiences. From the towering Burj Khalifa to the serene oases of Oman, we craft unforgettable journeys.
          </p>
          <div className={styles.socials}>
            <a href={companyInfo.socials.facebook} aria-label="Facebook" target="_blank" rel="noreferrer"><Facebook size={18} /></a>
            <a href={companyInfo.socials.instagram} aria-label="Instagram" target="_blank" rel="noreferrer"><Instagram size={18} /></a>
            <a href={companyInfo.socials.twitter} aria-label="Twitter" target="_blank" rel="noreferrer"><Twitter size={18} /></a>
            <a href={companyInfo.socials.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={18} /></a>
            <a href={companyInfo.socials.youtube} aria-label="YouTube" target="_blank" rel="noreferrer"><Youtube size={18} /></a>
          </div>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <ul className={styles.linkList}>
            {QUICK_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}><ChevronRight size={14} /> {label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Destinations</h4>
          <ul className={styles.linkList}>
            {DESTINATIONS_LINKS.map(({ to, label }) => (
              <li key={to}>
                <Link to={to}><ChevronRight size={14} /> {label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.col}>
          <h4 className={styles.colTitle}>Get in Touch</h4>
          <ul className={styles.contactList}>
            <li>
              <span className={styles.iconWrap}><MapPin size={16} /></span>
              <span>{companyInfo.address}</span>
            </li>
            <li>
              <span className={styles.iconWrap}><Phone size={16} /></span>
              <a href={`tel:${companyInfo.phone.replace(/\s/g, '')}`}>{companyInfo.phone}</a>
            </li>
            <li>
              <span className={styles.iconWrap}><Mail size={16} /></span>
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </li>
          </ul>

          <form className={styles.subscribe} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email" aria-label="Email for newsletter" />
            <button type="submit" aria-label="Subscribe">
              <ChevronRight size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>

    <div className={styles.bottom}>
      <div className={styles.inner}>
        <p>© 2026 {companyInfo.name}. All rights reserved.</p>
        <ul className={styles.legal}>
          <li><Link to="/contact">Privacy Policy</Link></li>
          <li><Link to="/contact">Terms of Service</Link></li>
          <li><Link to="/contact">Cookie Policy</Link></li>
        </ul>
      </div>
    </div>
  </footer>
)
}

export default Footer
