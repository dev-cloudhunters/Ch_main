import React, { useEffect } from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { FeaturedProductStyles } from "./FeaturesStyles"
import { useMainStore } from '../MainStore';
/* import { useModal } from "../../components/Stores/ModalStore" */
//import { ProductContext, product } from '../../components/ProductContext';
//import {ProductContext, product} from '../../components/ProductContext';

const FeaturedProduct = ({ feature }) => {
  const { gatsbyPath, headerImage, title, introduction } = feature
  const image = getImage(headerImage)
  const [state, actions] = useMainStore();
  //const { product, setProduct } = React.useContext(ProductContext);
  //const { state: { product, date }, dispatch } = React.useContext(ProductContext);
  //const changeHandler = event => setProduct(event.target.productId);
  /* const changeHandler = function (event){
    //console.log("changeHandlerchangeHandler ",event.target.dataset.productid)
    setProduct(event.target.dataset.productid);
  } */

  const handleChangeProduct = (event) => {
    actions.update_is_open(true,event.target.dataset.productid)
    console.log(actions, "actions")
  }

  useEffect(() => {
    console.log("state.prod_id from product", state.prod_id)
    
  }, [state.prod_id]);

  /* const handleChangeDate = (event) => {
    dispatch({ color: event.target.value });
  } */


  return (
    <FeaturedProductStyles>
      <div data-productid={title} onClick={handleChangeProduct} className="features__item--prenota" >Prenota ora</div>
      <Link to={gatsbyPath}>
        <GatsbyImage
          className="features__item--img"
          image={image}
          alt="Product Image"
        />
        {title && introduction && (
          <div className="features__item--content">
            {title && <h4>{title}</h4>}
            {introduction && <p>{introduction}</p>}
            <Button text="Scopri di più" className="features__item--readmore" as="span" arrow={true} />
          </div>
        )}
      </Link>

    </FeaturedProductStyles>
  )
}

export default FeaturedProduct
