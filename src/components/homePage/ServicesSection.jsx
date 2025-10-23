import React from 'react'

const ServicesSection = () => {
  const services = [
    "Comment en marche",
    "C'est de bonne envie de",
    "Calcul des frais de participation",
    "Confirmer et réserver",
    "Questionnaire générale",
    "Conditions généralux"
  ]

  return (
    <section className="services-section">
      <div className="container">
        <h3 className="section-title">Nos services</h3>
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-item">
              {service}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection