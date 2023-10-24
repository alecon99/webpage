import React from 'react'
import { Container } from 'react-bootstrap'

const NavigationBar = () => {
  return (
    <div className='bg-black fixed-top'>
      <Container className='d-flex py-3 align-items-center justify-content-between text-white'>
        <a href="#">

        </a>
        <div className='d-flex'>
          <a href='#Galleria_impianti' className='text-decoration-none text-white'>Galleria impianti</a>
          <a href='#Prodotti' className='text-decoration-none text-white mx-5'>Prodotti</a>
          <a href='#Contatti' className='text-decoration-none text-white'>Contatti</a>
        </div>
      </Container>
    </div>
  )
}

export default NavigationBar