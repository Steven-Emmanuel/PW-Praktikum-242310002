import { useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:5000/api/contacts'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await axios.post(API, form)
      setSent(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch (err) {
      alert('Failed to send message')
    }
  }

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Contact Us</h2>
        {sent && <div className="alert alert-success">Message sent!</div>}
        <form onSubmit={handleSubmit} className="w-75 mx-auto">
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Name" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} />
          </div>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} />
          </div>
          <div className="mb-3">
            <input type="text" className="form-control" placeholder="Subject" value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} />
          </div>
          <div className="mb-3">
            <textarea className="form-control" rows="4" placeholder="Your Message" required value={form.message} onChange={e => setForm({...form, message: e.target.value})}></textarea>
          </div>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}
