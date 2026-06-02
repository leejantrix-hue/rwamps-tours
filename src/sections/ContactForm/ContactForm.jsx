import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2 } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { contactInfo } from '../../data/site.js'
import styles from './ContactForm.module.scss'

const INITIAL = { name: '', email: '', phone: '', destination: '', message: '' }

function ContactForm() {
const [form, setForm] = useState(INITIAL)
const [errors, setErrors] = useState({})
const [status, setStatus] = useState('idle') // idle | submitting | success | error

const onChange = (e) => {
  const { name, value } = e.target
  setForm(f => ({ ...f, [name]: value }))
  if (errors[name]) setErrors(p => ({ ...p, [name]: undefined }))
}

const validate = () => {
  const next = {}
  if (!form.name.trim()) next.name = 'Please tell us your name'
  if (!form.email.trim()) next.email = 'Email is required'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Please enter a valid email'
  if (!form.message.trim() || form.message.trim().length < 10) next.message = 'Message must be at least 10 characters'
  setErrors(next)
  return Object.keys(next).length === 0
}

const onSubmit = async (e) => {
  e.preventDefault()
  if (!validate()) return
  setStatus('submitting')
  // Placeholder submit — wire up to backend / form service later
  await new Promise(r => setTimeout(r, 900))
  setStatus('success')
  setForm(INITIAL)
  setTimeout(() => setStatus('idle'), 5000)
}

return (
  <section className={styles.section} id="contact">
    <div className={styles.inner}>
      <SectionHeading
        eyebrow="Let's Talk"
        title="Plan Your Next Adventure"
        subtitle="Tell us where you want to go and we'll craft the perfect itinerary. We typically reply within an hour during business days."
      />

      <div className={styles.layout}>
        <motion.aside
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.aside}
        >
          <h3>Get in touch directly</h3>
          <ul className={styles.contactList}>
            <li>
              <div className={styles.iconBox}><Mail size={20} /></div>
              <div>
                <span>Email</span>
                <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
              </div>
            </li>
            <li>
              <div className={styles.iconBox}><Phone size={20} /></div>
              <div>
                <span>Phone</span>
                <a href={`tel:${contactInfo.phone.replace(/\s/g, '')}`}>{contactInfo.phone}</a>
              </div>
            </li>
            <li>
              <div className={styles.iconBox}><MapPin size={20} /></div>
              <div>
                <span>Office</span>
                <p>{contactInfo.address}</p>
              </div>
            </li>
            <li>
              <div className={styles.iconBox}><Clock size={20} /></div>
              <div>
                <span>Hours</span>
                <p>{contactInfo.hours}</p>
              </div>
            </li>
          </ul>
        </motion.aside>

        <motion.form
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.form}
          onSubmit={onSubmit}
          noValidate
        >
          <div className={styles.row}>
            <label className={`${styles.field} ${errors.name ? styles.fieldError : ''}`}>
              <span>Full name *</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="Your name"
                autoComplete="name"
              />
              {errors.name && <em>{errors.name}</em>}
            </label>
            <label className={`${styles.field} ${errors.email ? styles.fieldError : ''}`}>
              <span>Email *</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="you@example.com"
                autoComplete="email"
              />
              {errors.email && <em>{errors.email}</em>}
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span>Phone</span>
              <input
                type="tel"
                name="phone"
                value={form.phone}
                onChange={onChange}
                placeholder="+971 50 000 0000"
                autoComplete="tel"
              />
            </label>
            <label className={styles.field}>
              <span>Preferred destination</span>
              <select name="destination" value={form.destination} onChange={onChange}>
                <option value="">Not sure yet</option>
                <option>Dubai, UAE</option>
                <option>Abu Dhabi, UAE</option>
                <option>Muscat, Oman</option>
                <option>Riyadh, Saudi Arabia</option>
                <option>Doha, Qatar</option>
                <option>Multi-country Gulf tour</option>
              </select>
            </label>
          </div>

          <label className={`${styles.field} ${errors.message ? styles.fieldError : ''}`}>
            <span>Tell us about your trip *</span>
            <textarea
              name="message"
              rows="5"
              value={form.message}
              onChange={onChange}
              placeholder="When are you traveling, how many people, what experiences are you most excited about..."
            />
            {errors.message && <em>{errors.message}</em>}
          </label>

          <button
            type="submit"
            className={styles.submit}
            disabled={status === 'submitting' || status === 'success'}
          >
            {status === 'submitting' && 'Sending...'}
            {status === 'success' && (<><CheckCircle2 size={18} /> Message sent!</>)}
            {(status === 'idle' || status === 'error') && (<>Send Message <Send size={18} /></>)}
          </button>

          {status === 'success' && (
            <p className={styles.successNote}>
              Thank you! We'll be in touch within an hour during business hours.
            </p>
          )}
        </motion.form>
      </div>
    </div>
  </section>
)
}

export default ContactForm
