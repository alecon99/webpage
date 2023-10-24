import React from 'react'

import '../Jumbotron/Jumbotron.css'

import { Col, Container, Row } from 'react-bootstrap'

import image2 from '../../../media/prodotti_jumbotron/IMG_0760-scaled.jpeg'
import image1 from '../../../media/prodotti_jumbotron/IMG_1603-scaled.jpg'
import image3 from '../../../media/prodotti_jumbotron/IMG_9893-scaled.jpg'
import image4 from '../../../media/prodotti_jumbotron/IMG_1483-scaled.jpeg'

const Jumbotron = () => {

  return (
    <div className='bg-dark' id='jumbotron_container'>
      <div className='d-flex' >
        <div className='jumbotron_items bg-danger'>

        </div>
        <div className='jumbotron_items bg-success'>
            
        </div>
      </div>
    </div>
  )
}

export default Jumbotron