import React from 'react'

import { Container, Row, Col } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFireFlameCurved, faMap, faSprayCan, faWind } from '@fortawesome/free-solid-svg-icons'

import '../WhatDoWeDo/WhatDoWeDo.css'

const WhatDoWeDo = () => {
  return (
    <div id='whatDoWeDo_container' className='bg-dark text-white d-flex align-items-center text-center'>
      <Container >
        <h1 className='mb-5 pb-5'>Cosa facciamo</h1>
        <Row>
          <Col sm={6} xl={3}>
            <div className='whatDoWeDo_icon_container d-flex flex-column justify-content-center'>
              <FontAwesomeIcon className='whatDoWeDo_icon' icon={faWind} />
              <div className='whatDoWeDo_text'>IMPIANTI DI ASPIRAZIONE</div>
            </div>
          </Col>
          <Col sm={6} xl={3}>
            <div className='whatDoWeDo_icon_container d-flex flex-column justify-content-center'>
              <FontAwesomeIcon className='whatDoWeDo_icon' icon={faMap} />
              <div className='whatDoWeDo_text'>IMPIANTISTICA E COMPONENTISTICA</div>
            </div>
          </Col>
          <Col sm={6} xl={3}>
            <div className='whatDoWeDo_icon_container d-flex flex-column justify-content-center'>
              <FontAwesomeIcon className='whatDoWeDo_icon' icon={faSprayCan} />
              <div className='whatDoWeDo_text'>CABINE DI VERNICIATURA A SECCO</div>
            </div>
          </Col>
          <Col sm={6} xl={3}>
            <div className='whatDoWeDo_icon_container d-flex flex-column justify-content-center'>
              <FontAwesomeIcon className='whatDoWeDo_icon' icon={faFireFlameCurved} />
              <div className='whatDoWeDo_text'>SISTEMI DI ESSICCAZIONE</div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default WhatDoWeDo