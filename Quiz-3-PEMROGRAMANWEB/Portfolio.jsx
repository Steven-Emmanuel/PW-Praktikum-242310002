import { useEffect, useState } from 'react'
import axios from 'axios'

const API = 'http://localhost:5000/api/portfolios'

export default function Portfolio() {
  const [items, setItems] = useState([])
  useEffect(() => {
    axios.get(API).then(res => setItems(res.data)).catch(console.error)
  }, [])

  return (
    <section id="portfolio" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4">Our Portfolio</h2>
        <div className="row g-4">
          {items.map(p => (
            <div className="col-md-4" key={p._id}>
              <div className="card h-100 shadow-sm">
                {p.image && <img src={p.image} className="card-img-top" alt={p.title} />}
                <div className="card-body">
                  <h5 className="card-title">{p.title}</h5>
                  <p className="card-text">{p.description}</p>
                  {p.link && <a href={p.link} className="btn btn-outline-primary btn-sm">View Details</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
