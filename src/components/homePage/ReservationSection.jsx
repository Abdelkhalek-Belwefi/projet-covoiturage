import React from 'react'

const ReservationSection = () => {
  return (
    <section className="reservation-section">
      <div className="container">
        <h2>Rechercher, cliquer et réserver !</h2>
        <p>
          Réserve un calcul que nous vous voyez. L'état d'utilisation du service est utilisé par rapport 
          à votre client avec une utilisation en mode 1, possédé pour votre échange.
        </p>
        <button className="reservation-button">Réserver maintenant</button>
      </div>
    </section>
  )
}

export default ReservationSection