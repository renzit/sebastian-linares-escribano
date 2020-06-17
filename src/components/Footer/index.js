import React from 'react'
import config from '../../../config'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container'>
        <div className='content has-text-centered'>
          <p>
            {config.copyright}
          </p>
          <p>Creado por <a href='https://www.renzomayer.dev'>Renzo Mayer</a></p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
