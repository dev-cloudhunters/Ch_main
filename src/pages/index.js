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
import LatestPosts from "../components/Post/LatestPosts"
import Testimonials from "../components/Testimonials/Testimonials"
import CheckAvalaible from "../components/CheckAvalaible/CheckAvalaible"
//import InnerModal from "../components/Modal/InnerModal"
//import Modal from '../components/Modal/Modal.js';
import Modal from 'react-modal';
import { ModalStyles } from "../components/Modal/ModalStyles"

//import useAllEvent from "../hooks/use-all-event"
import useFeaturedProduct from "../hooks/use-featured-product"
import { useMainStore } from '../components/MainStore';
import loadable from '@loadable/component'

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
          title="PARAPENDIO BIPOSTO"
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
          title="Lascia che i tuoi sogni sfidino la gravit??"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        {/* </ProductContext.Provider> */}
        <Testimonials />
        <BasicTextModule
          title="A super-fast theme that is easy to get started, using the power of
            GatsbyJS"
          content="Using modern CSS properties such as grid, this theme is optmised for
            speed and mobile devices. Giving users an excellent experience on
            any device. Future-proofing your product."
          link="/products"
          linkText="View Products"
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>

        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
        <button onClick={openModal}>Open Modal</button>
        {/*  <Modal show={modalIsOpen} handleClose={closeModal}>
          <p>Modal</p>
        </Modal> */}

        <button class="snipcart-add-item"
          data-item-id="starry-night"
          data-item-price="10.99"
          data-item-description="High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh."
          data-item-name="The Starry Night"
          data-item-max-quantity="1"
          data-item-custom1-name="Data in cui volerai"
          data-item-custom1-type="hidden"
          data-item-custom1-value="17/01/77"
          data-item-custom2-name="Regalo"
          data-item-custom2-type="hidden"
          data-item-custom2-value="Si"
          data-item-custom3-name="Tipologia volo"
          data-item-custom3-type="hidden"
          data-item-custom3-value="volo tandem fly"
          data-item-has-taxes-included="true"
          >

          Add to cart
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
      {/*  <div id="checkAvailable">Prima di procedere <span>controlla la disponibilit??</span></div> */}

    </>
  )
}

export default Index
