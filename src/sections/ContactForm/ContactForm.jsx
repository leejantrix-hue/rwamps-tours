import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Clock, Send, CheckCircle2, User, Globe2, MessageSquare, Tag } from 'lucide-react'
import SectionHeading from '../../components/SectionHeading/SectionHeading.jsx'
import { companyInfo as company } from '../../data/site.js'
import styles from './ContactForm.module.scss'

const SUBJECTS = ['Tour Inquiry', 'Custom Package', 'Group Booking', 'Visa Assistance', 'Other']

function ContactForm({ compact = false }) {
const [form, setForm] = useState({
  name: '', email: '', phone: '', country: '', subject: SUBJECTS[0], message: ''
})
const [sent, setSent] = useState(false)
const [submitting, setSubmitting] = useState(false)

const update = (key) => (e) => setForm(prev => ({ ...prev, [key]: e.target.value }))

const submit = async (e) => {
  e.preventDefault()
  setSubmitting(true)
  await new Promise(r => setTimeout(r, 900))
  setSubmitting(false)
  setSent(true)
  setForm({ name: '', email: '', phone: '', country: '', subject: SUBJECTS[0], message: '' })
  setTimeout(() => setSent(false), 5000)
}

return (
  <section className={`${styles.section} ${compact ? styles.compact : ''}`} id="contact">
    <div className={styles.inner}>
      {!compact && (
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Plan Your Arabian Journey"
          subtitle="Tell us where you'd like to go and what you'd like to experience. Our team will craft the perfect itinerary, just for you."
        />
      )}

      <div className={styles.layout}>
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={styles.info}
        >
          <h3>Contact Information</h3>
          <p>Reach out anytime. Our travel experts respond within 2 hours during business hours.</p>

          <ul className={styles.infoList}>
            <li>
              <span className={styles.infoIcon}><MapPin size={18} /></span>
              <div>
                <strong>Office</strong>
                <p>{company.address}</p>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}><Phone size={18} /></span>
              <div>
                <strong>Phone</strong>
                <p><a href={`tel:${company.phone.replace(/\s/g, '')}`}>{company.phone}</a></p>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}><Mail size={18} /></span>
              <div>
                <strong>Email</strong>
                <p><a href={`mailto:${company.email}`}>{company.email}</a></p>
              </div>
            </li>
            <li>
              <span className={styles.infoIcon}><Clock size={18} /></span>
              <div>
                <strong>Hours</strong>
                <p>{company.hours}</p>
              </div>
            </li>
          </ul>
        </motion.aside>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={submit}
          className={styles.form}
          noValidate
        >
          <div className={styles.row}>
            <label className={styles.field}>
              <span><User size={14} /> Full Name</span>
              <input type="text" value={form.name} onChange={update('name')} required placeholder="John Smith" />
            </label>
            <label className={styles.field}>
              <span><Mail size={14} /> Email</span>
              <input type="email" value={form.email} onChange={update('email')} required placeholder="you@example.com" />
            </label>
          </div>

          <div className={styles.row}>
            <label className={styles.field}>
              <span><Phone size={14} /> Phone</span>
              <input type="tel" value={form.phone} onChange={update('phone')} placeholder="+971 50 000 0000" />
            </label>
            <label className={styles.field}>
              <span><Globe2 size={14} /> Country</span>
              <input type="text" value={form.country} onChange={update('country')} placeholder="United Arab Emirates" />
            </label>
          </div>

          <label className={styles.field}>
            <span><Tag size={14} /> Subject</span>
            <select value={form.subject} onChange={update('subject')}>
              {SUBJECTS.map(s => <option key={s}>{s}</option>)}
            </select>
          </label>

          <label className={styles.field}>
            <span><MessageSquare size={14} /> Message</span>
            <textarea rows={5} value={form.message} onChange={update('message')} required placeholder="Tell us about your dream trip..." />
          </label>

          <button type="submit" className={styles.submit} disabled={submitting || sent}>
            {sent ? (
              <>
                <CheckCircle2 size={18} /> Message Sent
              </>
            ) : submitting ? (
              <>Sending...</>
            ) : (
              <>
                <Send size={18} /> Send Message
              </>
            )}
          </button>
          <p className={styles.note}>By submitting you agree to our privacy policy. We'll never share your details.</p>
        </motion.form>
      </div>
    </div>
  </section>
)
}

export default ContactForm
