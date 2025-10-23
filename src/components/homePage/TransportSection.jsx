import React from 'react'

const TransportSection = () => {
  return (
    <section className="transport-section">
      <div className="container">
        <div className="transport-grid">
          <div className="transport-card blue">
            <h3>Continuage</h3>
            <p>Sites pour tous les priorités</p>
          </div>
          
          <div className="transport-card green">
            <h3>Bus</h3>
            <p>Voir tous les fours d'entretien</p>
          </div>
          
          <div className="transport-card purple">
            <h3>Train</h3>
            <p>Voir tous les fours d'entretien</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TransportSection