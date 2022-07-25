//import * as React from "react"
import React, { useRef, useEffect, useState, useContext } from 'react';
import ProductContext from '../components/ProductContext';

import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import Decolli from "../components/Decolli/Decolli"
import LatestPosts from "../components/Post/LatestPosts"
import Testimonials from "../components/Testimonials/Testimonials"
import CheckAvalaible from "../components/CheckAvalaible/CheckAvalaible"
//import InnerModal from "../components/Modal/InnerModal"
//import Modal from '../components/Modal/Modal.js';
import Modal from 'react-modal';
import { ModalStyles } from "../components/Modal/ModalStyles"

//import useAllEvent from "../hooks/use-all-event"
import useFeaturedProduct from "../hooks/use-featured-product"
import useIlVolo from "../hooks/use-il_volo"

import { useMainStore } from '../components/MainStore';
import loadable from '@loadable/component'
import { Box, Card, CardBody, CardFooter, CardHeader } from 'grommet';

//import Modal from 'react-modal';

const Index = () => {
  /* const [modalIsOpen, setIsOpen] = useState(false); */
  const [state, actions] = useMainStore();

  const InnerModal = loadable(() => import('../components/Modal/InnerModal'))

  //const allEvent = useAllEvent()
  //const allEvent = null 
  const featuredProduct = useFeaturedProduct()
  const innerModalEl = useRef(null);
  const contentRef = useRef(null);

  //console.log("useAllEvent", allEvent)
  console.log("featuredProduct", featuredProduct)

  React.useEffect(() => {
    console.log("isOpen index", state.isOpen)

    if (state.isOpen) {
      document.body.classList.add('openCheck');
    } else {
      document.body.classList.remove('openCheck');
    }

  }, [state.isOpen]);


  /* useEffect(() => {
    console.log("product", product)
    
  }, [product]);

  useEffect(() => {
    console.log("date", date)
  }, [date]); */

  /* function toggleTheme = () => {
    this.setState(state => ({
      theme:
        state.theme === themes.dark
          ? themes.light
          : themes.dark,
    }));
  }; */
  /* useEffect(() => {
    console.log("OnChange productId", state)
  }, [product]) */

  /* useEffect(() => {
    console.log("ProductContext",ProductContext)
  }, [])  */




  function openModal() {
    //setIsOpen(true);
    actions.update_is_open(true, "")
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    //subtitle.style.color = '#f00';
    //console.log("afterOpenModal", innerModalEl)
    //let el = modalEl.querySe
  }

  function closeModal() {
    //setIsOpen(false);
    actions.update_is_open(false)
  }

  function sendTrigger() {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
      "test": "event",
      "id": "1ifjubqjdt619q1bk56tkpnjot"
    }

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }

    fetch("https://eojy131adppql6r.m.pipedream.net", options)


  }

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
    overlay: { zIndex: 1000 }
  };

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="CLOUDHUNTERS PARAPENDIO ROMA"
          subTitle="VIENI A VOLARE CON NOI"
          enquire={true}
        />
        {/*   <button onClick={(e) => handleItemClick(e, 'sign-in')}>sign-in</button>
        <button onClick={(e) => handleItemClick(e, 'sign-out')}>   sign-out
        </button> */}
        {/*  <button onClick={(e) => sendTrigger()}>
          sendTrigger
        </button> */}
        {/*   <button onClick={(e) => testRemove()}>
          remove
        </button> */}

        {/* <ProductContext.Provider value={value}> */}
        <Features
          title="Hai mai sognato di volare in parapendio?"
          introduction="Ora puoi facilmente soddisfare questo tuo desiderio ancestrale in totale sicurezza e tranquillità prenotando un volo in parapendio. Volare in parapendio biposto è un’esperienza unica e meravigliosa, una vera e propria passeggiata nel cielo, una fantastica sensazione che rimarrà impressa a vita nello scrigno delle tue avventure."
          testo_chiusura="Possiamo realizzare questa meravigliosa avventura intorno a Roma, dai principali decolli del Lazio. La sensazione di potersi librare in aria come gli uccelli godendo dei panorami spettacolari che il nostro centro Italia può regalarci non ha prezzo soprattutto se puoi farlo insieme a piloti esperti e qualificati che condividono da anni questa passione."
        />
        <div className="section section_no_top_no_bottom">
          <div className="holder-iframe-testimonials">
            <div className="responsive-iframe">
              <iframe src="https://player.vimeo.com/video/283203062?h=d63deecc71&title=0&byline=0&portrait=0" width="640" height="360" frameBorder='0' ></iframe>
            </div> 
            <Testimonials />
          </div>

        </div>
        <Decolli
          title="Dove decolliamo"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        {/* </ProductContext.Provider> */}

        <BasicTextModule
          /* title={ilvolo.titolo}
          content={ilvolo.contenuto} */
          hookref = {useIlVolo}
          /* link="/products"
          linkText="View Products" */
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>

        <LatestPosts
          title="Qualche lettura"
          introduction=""
        />
        <button onClick={openModal}>Open Modal</button>
        {/*  <Modal show={modalIsOpen} handleClose={closeModal}>
          <p>Modal</p>
        </Modal> */}

        <button className="snipcart-add-item"
          data-item-id="volo-avventura"
          data-item-price="90.00"
          data-item-description="Volo 'Peter Pan'"
          data-item-name="Volo Avventura"
          data-item-max-quantity="1"
          data-item-custom1-name="Data in cui volerai"
          data-item-custom1-type="readonly"
          data-item-custom1-value="17/01/77"
          data-item-custom2-name="Regalo"
          data-item-custom2-type="readonly"
          data-item-custom2-value="Si"
          data-item-custom3-name="Tipologia volo"
          data-item-custom3-type="readonly"
          data-item-custom3-value="volo tandem fly"
          data-item-has-taxes-included="true"
        >

          Aggiungi al carrello
        </button>

      </Layout>
      {<Modal
        isOpen={state.isOpen}
        style={customStyles}
        shouldCloseOnOverlayClick={false}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        ariaHideApp={false}
        className="Modal"
        overlayClassName="Overlay"
        preventScroll={true}
        customProp={"test"}
      >
        <button onClick={closeModal}>closeNow</button>
        <InnerModal handleClose={closeModal} /* events={allEvent} */ />
      </Modal>}
      {/* <CheckAvalaible isOpen={state.isOpen}/> */}
      {/*  <div id="checkAvailable">Prima di procedere <span>controlla la disponibilità</span></div> */}

    </>
  )
}

export default Index
