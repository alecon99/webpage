import { useState } from 'react'
import { Container, ProgressBar } from 'react-bootstrap'

import '../Footer/Footer.css'

import logo from '../../media/1.png'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {

  const [ scroll, setScroll ] = useState(0)

    window.onscroll = ()=>myFunction()

    const myFunction = ()=> {
        var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (winScroll / height) * 100;
        setScroll(scrolled)
    }

  return (
    <div className='bg-black fixed-bottom'>
        <ProgressBar now={scroll} className='bg-black' />
      <Container className='d-flex align-items-center justify-content-between py-2' >
        <div className='text-white fs-5'>
          Lamier Group S.r.l.
        </div>
        <div>
            <a href="https://www.instagram.com/lamier_group/"><FontAwesomeIcon className='footer_icon mx-1 mx-sm-3 text-white hover_link_blue' icon={faInstagram} /></a>
            <a href="https://www.facebook.com/lamiergroup"><FontAwesomeIcon className='footer_icon mx-2 mx-sm-3 text-white hover_link_blue' icon={faFacebook} /></a>
            <a href="https://www.youtube.com/channel/UCLgtTr3kgx5WebqOG07Usaw"><FontAwesomeIcon className='footer_icon mx-1 mx-sm-3 text-white hover_link_blue' icon={faYoutube} /></a>
        </div>
      </Container>
    </div>
  )
}

export default Footer