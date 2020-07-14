import React from 'react'
import Contacto from "../Contacto";
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer has-background-black-ter has-text-white'>
      <div className='container'>
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <Contacto /> 
            </div> 
          </div>
        </div> 
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Creado por <a href='https://www.renzomayer.dev' className="has-text-primary-dark">Renzo Mayer</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
