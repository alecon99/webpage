import { useState, useEffect } from 'react'

import '../Jumbotron/Jumbotron.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'


import image2 from '../../../media/prodotti_jumbotron/IMG_0760-scaled.jpeg'
import image1 from '../../../media/prodotti_jumbotron/IMG_1603-scaled.jpg'
import image3 from '../../../media/prodotti_jumbotron/IMG_9893-scaled.jpg'
import image4 from '../../../media/prodotti_jumbotron/IMG_1483-scaled.jpeg'

const Jumbotron = () => {

  return (
    <div className='bg-dark' id='jumbotron_container'>
      <img src={image4} alt="" id='jumbotron_background' />
      <div id='jumbotron_text' className='text-center px-3'>
        Lamier Group S.r.l.
        <div id='text_border'></div>
        </div>
      <div id='jumbotron_button'><FontAwesomeIcon icon={faChevronDown} className='text-white fs-3' /></div>
    </div>
  )
}

export default Jumbotron