import React, { useEffect } from "react"

import { Link } from "gatsby"
import { FeaturedProductsStyles } from "./FeaturesStyles"
import FeaturedProduct from "./FeaturedProduct"
import useFeaturedProduct from "../../hooks/use-featured-product"
import Button from "../Button/Button"
//import { Grommet, Box, Card, ThemeContext } from 'grommet';
//import  theme  from '../../styles/Theme.js';

//import {ProductContext} from '../../components/ProductContext';
//import ProdContext from '../../components/ProdContext';
//import { ProductProvider } from "'../../components/ProdContext"


const Features = ({ title, introduction }) => {
  const featuredProduct = useFeaturedProduct()
 
  //console.log( state.date,"aoaoa")

  
  return (
    
    <FeaturedProductsStyles className="section section-custom">
     
      {title || introduction ? (
        <div className="container container__tight">
          <div className="intro__area">
            {title && <h2>{title}</h2>}
            {introduction && <p>{introduction}</p>}
          </div>
        </div>
      ) : null}
     
       
      <div className="container container__tight container__scroll">
        {featuredProduct.map((node, index) => {
          return <FeaturedProduct feature={node} key={index} />
        })}
       </div> 
     
      <div className="container container__tight learn__more">
        <Button as={Link} to="/products" text="All Products" />
      </div>
    </FeaturedProductsStyles>
    
  )
}

export default Features
