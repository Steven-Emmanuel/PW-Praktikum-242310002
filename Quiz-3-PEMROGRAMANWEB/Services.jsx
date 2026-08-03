import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:5000/api/services'

export default function Services() {
  const [services, setServices] = useState([])
  useEffect(() => {
    axios.get(API).then(res => setServices(res.data)).catch(console.error)
  }, [])

  return (
    <section id="services" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4">Services</h2>
        <div className="row g-4">
          {services.map(s => (
            <div className="col-md-4" key={s._id}>
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <i className={`bi ${s.icon} fs-1`}></i>
                  <h5 className="card-title mt-2">{s.title}</h5>
                  <p className="card-text">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
