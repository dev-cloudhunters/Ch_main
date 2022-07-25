import React, { Component } from "react";
import { FaTripadvisor, FaFacebook, FaInstagram } from "react-icons/fa"
import styled from "styled-components"
import { motion } from "framer-motion"

const TestimonialsTitle = (...props) => {

  const CustomH3 = styled.h3`
   color: var(--primary);
   border-bottom: 1px solid var(--primary);

   .ico_Tripadvisor {
    width: 40px;
    height: 40px;
   }
 `

    const Colonna = styled.div`
   display:flex;
   flex-direction:column;
   span:first-child {
    line-height:24px;
   }
   span:last-child {
       font-size:20px;
       line-height:22px;
   }
  
`

    const iconVariants = {
        hover: {
            rotate: -30,
            x: 10,
            //opacity:1

        },
        initial: {
            rotate: 30,
            x: 5,
            //  opacity:0 

        },
    };

    return (


        <CustomH3>
            <motion.a initial="initial" whileHover="hover" href="https://www.tripadvisor.it/Attraction_Review-g187791-d14078655-Reviews-Cloud_Hunters_Tandem_Paragliding-Rome_Lazio.html" target="_blank" >
                <Colonna ><span>Le recensioni</span><span>su Tripadvisor</span></Colonna>  <motion.div variants={iconVariants}
                    transition={{
                        ease: 'easeOut',
                        delay: 0.15,
                        duration: 0.5,
                    }}><FaTripadvisor className="ico_Tripadvisor" /></motion.div>
            </motion.a>
        </CustomH3>

    )
}

export default TestimonialsTitle
