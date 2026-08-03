import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:5000/api/testimonials'

export default function Testimonials() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get(API).then(res => setItems(res.data)).catch(console.error)
  }, [])

  return (
    <section id="testimonials" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">What Clients Say</h2>
        <div className="row g-4">
          {items.map(t => (
            <div className="col-md-4" key={t._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <p className="card-text">"{t.message}"</p>
                  <p className="text-muted">- {t.name}, {t.role}</p>
                  <div>{'â˜…'.repeat(t.rating)}{'â˜†'.repeat(5 - t.rating)}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
