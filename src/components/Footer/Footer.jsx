import React from 'react'
import { Container } from 'react-bootstrap'

import '../Footer/Footer.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <div className='bg-black text-white p-2'>
      <Container className='text-center'>
        <div className='d-flex align-items-center justify-content-between py-5'>
          <div className='fs-3'>Logo</div>
          <div className=''>
            <a href="https://www.instagram.com/lamier_group/"><FontAwesomeIcon className='footer_icon mx-3 text-white' icon={faInstagram} /></a>
            <a href="https://www.facebook.com/lamiergroup"><FontAwesomeIcon className='footer_icon mx-3 text-white' icon={faFacebook} /></a>
            <a href="https://www.youtube.com/channel/UCLgtTr3kgx5WebqOG07Usaw"><FontAwesomeIcon className='footer_icon mx-3 text-white' icon={faYoutube} /></a>
          </div>
        </div>
        <div>
          Indirizzo: Via Case Tuci, 40 - 51039,Quarrata PT
        </div>
      </Container>
    </div>
  )
}

export default Footer