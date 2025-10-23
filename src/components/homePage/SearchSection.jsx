import React from 'react'

const SearchSection = () => {
  return (
    <section className="search-section">
      <div className="container">
        <div className="search-grid">
          <div className="search-item">
            <label className="search-label">Départ</label>
            <input type="text" className="search-input" placeholder="Ville de départ" />
          </div>
          
          <div className="search-item">
            <label className="search-label">Destination</label>
            <input type="text" className="search-input" placeholder="Destination" />
          </div>
          
          <div className="search-item">
            <label className="search-label">Date</label>
            <input type="date" className="search-input" placeholder="Aujourd'hui" />
          </div>
          
          <div className="search-item">
            <label className="search-label">Passagers</label>
            <input type="text" className="search-input" placeholder="Tpassager" />
          </div>
          
          <div className="search-item">
            <button className="search-button">Rechercher</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SearchSection