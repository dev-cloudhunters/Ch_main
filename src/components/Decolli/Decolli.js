import React, { useEffect } from "react"

import { Link } from "gatsby"
import { DecolliStyles } from "./DecolliStyles"
import Decollo from "./Decollo"
import useDecollo from "../../hooks/use-decolli"
import Button from "../Button/Button"
import { Grommet, Box, Card, ThemeContext } from 'grommet';
//import { Grommet, Box, Card, ThemeContext } from 'grommet';
//import  theme  from '../../styles/Theme.js';

//import {ProductContext} from '../../components/ProductContext';
//import ProdContext from '../../components/ProdContext';
//import { ProductProvider } from "'../../components/ProdContext"


const Decolli = ({ title, introduction }) => {
  const decollo = useDecollo()
 
  //console.log( state.date,"aoaoa")

  
  return (
    
    <DecolliStyles className="section section-custom">
     
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}
     
       
     
       <div className="container container__tight container">
        {decollo.map((node, index) => {
          return <Decollo decollo={node} key={index} />
        })}
       </div> 
     
     
    </DecolliStyles>
    
  )
}

export default Decolli
