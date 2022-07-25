import React, { useEffect } from "react"
import { Link } from "gatsby"
import Button from "../Button/Button"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { DecolloStyles } from "./DecolliStyles"
import { useMainStore } from '../MainStore';
import { BsBookmarkCheck } from "react-icons/bs"
import { Grommet, Box, Card, ThemeContext } from 'grommet';
import { Train, Car, Location, LinkUp } from 'grommet-icons';
import Collapse from "../Collapsabile/Collapse.js"
//import theme from '../../styles/Theme.js';
//import { base } from 'grommet/themes'


/* import { useModal } from "../../components/Stores/ModalStore" */
//import { ProductContext, product } from '../../components/ProductContext';
//import {ProductContext, product} from '../../components/ProductContext';

const Decollo = ({ decollo }) => {
  const { gatsbyPath, immagine, altitudine, treno, macchina, posizione, titolo, descrizione } = decollo
  const image = getImage(immagine)
  const [state, actions] = useMainStore();
  //const { product, setProduct } = React.useContext(ProductContext);
  //const { state: { product, date }, dispatch } = React.useContext(ProductContext);
  //const changeHandler = event => setProduct(event.target.productId);
  /* const changeHandler = function (event){
    //console.log("changeHandlerchangeHandler ",event.target.dataset.productid)
    setProduct(event.target.dataset.productid);
  } */



  return (
    <DecolloStyles>

      <GatsbyImage
        className="decolli__item--img"
        image={image}
        alt="Immagine Decollo"
      />
      {titolo && descrizione && (
        <div className="decolli__item--content">
          {titolo && <h4 className="titolo-decollo">{titolo}</h4>}
          {descrizione && <Collapse contentCollapse={descrizione.descrizione} label="Descrizione" className="desc-decollo" />}
          <Box>
            <div className="label-decollo">Info</div>
            {altitudine && <p className="info-decollo">
              <LinkUp className="ico-decollo" color='var(--primary)' />Altitudine:{altitudine}</p>}
            {posizione && <p className="info-decollo">
              <Location className="ico-decollo" color='var(--primary)' /><a target="_blank" href={"https://www.google.com/maps/search/?api=1&query=" + posizione.lat + "," + posizione.lon}>Posizione</a> </p>}
          </Box>
          <Box>
            <div className="label-decollo">Come arrivare</div>
            {macchina &&
              <p className="info-decollo">
                <Car className="ico-decollo" color='var(--primary)' /><a target="_blank" href={macchina}>Macchina</a></p>
            }
          </Box>
          {treno &&
            <p className="info-decollo">
              <Train className="ico-decollo" color='var(--primary)' /> <div>Treno {treno}, <a href="mailto:info@cloudhunters.club">contattaci</a></div>
            </p>
          }
          {/*  <Button text="Scopri di più" className="features__item--readmore" as="span" arrow={true} /> */}

        </div>
      )}

    </DecolloStyles>

  )
}

export default Decollo
