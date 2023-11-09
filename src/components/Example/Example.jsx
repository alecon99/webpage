import React from 'react'

import '../Example/Example.css'
import { Container } from 'react-bootstrap'

const Example = () => {
  return (
    <div className='text-center mt-5 pt-5'>
        
        <Container>
        <div class="sketchfab-embed-wrapper image3d"> <iframe title="beta 2-2 montato_rev1" frameborder="0" allowfullscreen mozallowfullscreen="true" webkitallowfullscreen="true" allow="autoplay; fullscreen; xr-spatial-tracking" xr-spatial-tracking execution-while-out-of-viewport execution-while-not-rendered web-share width="100%" height="500" src="https://sketchfab.com/models/627136cc64b94bf6a0bd4115b431c1ba/embed?autospin=1&autostart=1&ui_theme=dark"> </iframe> </div>
        <iframe  allowfullscreen width="100%" height="500" loading="lazy" frameborder="0" src="https://p3d.in/e/4Ay8Y+spin"></iframe>
        </Container>
        
    </div>
  )
}

export default Example