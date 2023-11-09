import React from 'react'

import { Container } from 'react-bootstrap'

import Zoom from 'react-reveal/Zoom';

import '../WhoWeAre/WhoWeAre.css'

const WhoWeAre = () => {
  return (
    <div className='bg-dark py-5'>
      <Container className='pt-5' >
        <Zoom>
          <div id='whoWeAre_content' className='p-2 p-sm-3 p-md-5 bg-light'>
            <h1 className='mb-4 blue fw-bold'>CHI SIAMO</h1>
            <div>
              Lamier Group srl si occupa da oltre 40 anni della costruzione e realizzazione completa di impianti di aspirazione, verniciatura, carteggiatura, areazione, riscaldamento e quant’altro implichi trattamenti di aria. Maturando e solidificando esperienza, la nostra azienda ha iniziato a volgere lo sguardo verso altre realtà complementari. Ad oggi fanno parte della nostra produzione impianti per il trattamento di biomassa. La nostra struttura ci permette di realizzare internamente per alcuni casi anche il 90% della componentistica che utilizziamo e contemporaneamente ci affidiamo a costruttori di qualità per le altre componenti. Il concetto che intendiamo esprimere alla nostra clientela è riassumibile in un’unica parola, ovvero AFFIDABILITA’. Per poter offrire quanto sopra abbiamo sviluppato una particolare attenzione alle reali esigenze del cliente; solitamente un nostro incaricato si occupa di fare un sopralluogo presso l’utente finale per poter valutare e sviluppare in simbiosi con questo la soluzione migliore nel rapporto qualità prezzo. Tecnici interni aiutano i clienti ed i nostri rivenditori nello sviluppo ottimale della parte tecnica. Il montaggio avviene da parte di squadre specializzate formatesi negli anni all’interno della Lamier. Altra importante componente è l’assistenza post vendita; garantiamo un servizio rapido ed efficace sia nella fornitura di ricambi che nell’intervento da parte di nostro personale.
            </div>
          </div>
        </Zoom>
      </Container>
    </div>
  )
}

export default WhoWeAre