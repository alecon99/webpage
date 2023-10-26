import { useState } from 'react'

import { Container, Offcanvas } from 'react-bootstrap'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAddressBook, faBars, faBox, faImages, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

import logo from '../../media/1.png'

const NavigationBar = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='bg-black fixed-top'>
      <Container className='d-flex py-2 align-items-center justify-content-between text-white'>
        <a href="#">
          <img id='logo' src={logo} alt="logo" />
        </a>
        <div className='d-md-none'>
          <div onClick={handleShow}>
            <FontAwesomeIcon icon={faBars} className='fs-1' />
          </div>

          <Offcanvas show={show} placement="end" onHide={handleClose} className='bg-dark text-white'>
            <div onClick={handleClose} className='d-flex align-items-center justify-content-between px-4 pt-3'>
              <div className='fs-5'>Menu</div>
              <FontAwesomeIcon icon={faXmark} className='fs-1 hover_link_blue' />
            </div>
            <Offcanvas.Body className='fs-3 d-flex flex-column justify-content-between'>
              <div>
                <a href='#Galleria_impianti' className='hover_link_blue text-decoration-none text-white d-block border-bottom border-top p-3'>
                  <FontAwesomeIcon icon={faImages} className='me-3' />
                  Galleria impianti
                </a>
                <a href='#Prodotti' className='hover_link_blue text-decoration-none text-white d-block border-bottom p-3'>
                  <FontAwesomeIcon icon={faBox} className='me-3' />
                  Prodotti
                </a>
                <a href='#Contatti' className='hover_link_blue text-decoration-none text-white d-block border-bottom p-3'>
                  <FontAwesomeIcon icon={faAddressBook} className='me-3' />
                  Contatti
                </a>
              </div>
              <div className='text-center'>
                <div>
                  <a href="https://www.instagram.com/lamier_group/"><FontAwesomeIcon className='footer_icon mx-1 mx-sm-3 text-white hover_link_blue' icon={faInstagram} /></a>
                  <a href="https://www.facebook.com/lamiergroup"><FontAwesomeIcon className='footer_icon mx-2 mx-sm-3 text-white hover_link_blue' icon={faFacebook} /></a>
                  <a href="https://www.youtube.com/channel/UCLgtTr3kgx5WebqOG07Usaw"><FontAwesomeIcon className='footer_icon mx-1 mx-sm-3 text-white hover_link_blue' icon={faYoutube} /></a>
                </div>
              </div>
            </Offcanvas.Body>
          </Offcanvas>
        </div>
        <div className='d-flex d-none d-md-block'>
          <a href='#Galleria_impianti' className='text-decoration-none text-white hover_link_blue'>Galleria impianti</a>
          <a href='#Prodotti' className='text-decoration-none text-white mx-5 hover_link_blue'>Prodotti</a>
          <a href='#Contatti' className='text-decoration-none text-white hover_link_blue'>Contatti</a>
        </div>
      </Container>
    </div>
  )
}

export default NavigationBar