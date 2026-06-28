import React from "react";

const ListBooks = [
  {
    id: 1,
    title: "Atomic Habits",
    author: "James Clear",
    img: "https://covers.openlibrary.org/b/id/10523338-L.jpg",
    is_free: false,
    rating: 4.5,
    views: 1245,
    sinopsis: "An easy & proven way to build good habits & break bad ones.",
  },
  {
    id: 2,
    title: "Deep Work",
    author: "Cal Newport",
    img: "https://covers.openlibrary.org/b/id/8167896-L.jpg",
    is_free: true,
    rating: 4.3,
    views: 987,
    sinopsis: "Rules for focused success in a distracted world.",
  },
  {
    id: 3,
    title: "The Psychology of Money",
    author: "Morgan Housel",
    img: "https://covers.openlibrary.org/b/id/11153271-L.jpg",
    is_free: false,
    rating: 4.7,
    views: 2034,
    sinopsis: "Timeless lessons on wealth, greed, and happiness.",
  },
  {
    id: 4,
    title: "Ikigai",
    author: "Hector Garcia",
    img: "https://covers.openlibrary.org/b/id/8235116-L.jpg",
    is_free: true,
    rating: 4.2,
    views: 856,
    sinopsis: "The Japanese secret to a long and happy life.",
  },
];

const renderStars = (rating) => {
  return [...Array(5)].map((_, i) => (
    <i
      key={i}
      className={`bi bi-star${i < Math.floor(rating) ? "-fill" : ""} text-warning`}
    ></i>
  ));
};

const BookCard = ({ book }) => {
  return (
    <div className="card h-100 shadow-sm">
      <div className="bg-light p-4 mb-3 rounded text-center">
        <img
          src={book.img}
          alt={book.title}
          className="img-fluid"
          style={{ maxHeight: "200px", objectFit: "contain" }}
        />
      </div>
      <div className="card-body text-center">
        <h5 className="card-title">{book.title}</h5>
        <p className="text-muted">{book.author}</p>
        <div className="mb-2">{renderStars(book.rating)}</div>
        <p className="text-muted small">
          {book.views} views &bull; {book.is_free ? "Free" : "Premium"}
        </p>
        <button className="btn btn-outline-primary btn-sm mt-2">
          View Details
        </button>
      </div>
    </div>
  );
};

export function FeaturedBooksSection() {
  return (
    <section id="books" className="py-5">
      <div className="container">
        <div className="row mb-5">
          <div className="col">
            <h2 className="fw-bold text-center">Featured Books</h2>
            <p className="text-center text-muted">
              Handpicked selections just for you
            </p>
          </div>
        </div>
        <div className="row g-4">
          {ListBooks.map((book) => (
            <div key={book.id} className="col-md-6 col-lg-3">
              <BookCard book={book} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
