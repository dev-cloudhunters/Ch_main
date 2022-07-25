import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FaTripadvisor,FaFacebook,FaInstagram } from "react-icons/fa"
import styled from "styled-components"
import { motion } from "framer-motion"
import TestimonialsTitle from "./TestimonialsTitle"

const Testimonials = () => {
 
  const CustomH3 = styled.h3`
   color: var(--primary);
   border-bottom: 1px solid var(--primary);
`

  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={5000}
      className="presentation-mode"
    >
      <div>
        {/* <img src="/images/shirley.png" /> */}
        <div className="slideCarousel">
        <TestimonialsTitle></TestimonialsTitle>
          <p>
            &quot;Ieri abbiamo provato quest’esperienza unica con persone molto cordiali e professionali.
            È stato un regalo di compleanno per la mia ragazza ed ho avuto aggiornamenti quasi
            giornalieri in merito al meteo e posti dove poter anche mangiare e dormire.
            Cordialissimi, gentilissimi e consiglio a tutti di fare questo volo!&quot;
              </p>
        </div>
      </div>

      <div>
        {/* <img src="/images/daniel.png" /> */}
        <div className="slideCarousel">
        <TestimonialsTitle></TestimonialsTitle>
          <p>
            &quot;Anche se abbiamo organizzato all&#39;ultimo momento (il giorno prima), tutto è andato alla
            grande. Organizzazione puntuale al minuto, un&#39;accoglienza calda e un&#39;esperienza di volo
            fantastica. Il volo doveva durare fino a 20 minuti ma visto che era l&#39;ultimo è durato molto
            di più. Video ricordo HD molto bello girato con GoPro&quot;
              </p>
        </div>
      </div>

      <div>
        {/* <img src="/images/theo.png" /> */}
        <div className="slideCarousel">
        <TestimonialsTitle></TestimonialsTitle>
          <p>
            “È stata un&#39;esperienza fantastica, una sensazione meravigliosa immergersi nell’aria e
            sentirti libero come un uccello . Lo staff di Cloud Hunters è fenomenale”
              </p>
        </div>
      </div>

      <div>
        {/* <img src="/images/theo.png" /> */}
        <div className="slideCarousel">
        <TestimonialsTitle></TestimonialsTitle>
          <p>
          “Se non mi avessero fatto questo regalo per il mio compleanno,  mai avrei pensato di provare questa esperienza. Volare in parapendio è stato semplicemente fantastico soprattutto quando incontri dei professionisti come i ragazzi di Cloud Hunters”
          </p>
        </div>
      </div>

     
    </Carousel>
  )
}

export default Testimonials
