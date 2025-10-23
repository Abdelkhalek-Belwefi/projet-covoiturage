import React from 'react'

const PopularRoutes = () => {
  return (
    <section className="popular-routes">
      <div className="container">
        <h2 className="section-title">Nos trajets en bus les plus populaires</h2>
        
        <div className="routes-grid">
          <div className="route-card">
            <h3>Vous êtes un Passager</h3>
            <ul className="route-list">
              <li>Rechercher votre tigle!</li>
              <li>Confirmer votre réconcilion</li>
              <li>Fuyer un ligne ou un direct</li>
              <li>Voyager</li>
            </ul>
          </div>
          
          <div className="route-card driver">
            <h3>Vous êtes un Conducteur</h3>
            <ul className="route-list">
              <li>Puisse votre tigle!</li>
              <li>Vous passager, observer un ligne</li>
              <li>Voyager</li>
              <li>Revenez votre agapé</li>
              <li>Revenez un tapis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default PopularRoutes