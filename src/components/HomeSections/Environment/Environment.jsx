import React from 'react'

import '../Environment/Environment.css'

import Zoom from 'react-reveal/Zoom';

const Environment = () => {
  return (
    <div id='environment_container'>
      
      <div id='environment_content' className='p-2 p-sm-3 p-md-5'> 
      <Zoom>
        <h1 className='mb-4'>AMBIENTE</h1>
        <div>
          La nostra Azienda è impegnata costantemente nella ricerca e nello sviluppo di prodotti sempre più vicini alle esigenze dell’Ambiente. I nostri sforzi oltre essere concentrati sul miglioramento della nostra produzione standard, convergono verso il trattamento dei processi dedicati al recupero delle materie prime. Ci dedichiamo quotidianamente alla possibilità di riutilizzare materie come scarti lignei, rifiuti di molteplice natura, scarti derivati da lavorazioni industriali etc.
        </div>
        </Zoom>
      </div>
      
    </div>
  )
}

export default Environment