import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Features from "../components/Features/Features"
import LatestPosts from "../components/Post/LatestPosts"
import Testimonials from "../components/Testimonials/Testimonials"


const Index = () => {

  function sendTrigger() {
    const headers = new Headers()
    headers.append("Content-Type", "application/json")

    const body = {
      "test": "event",
      "id":"1ifjubqjdt619q1bk56tkpnjot"
    }

    const options = {
      method: "POST",
      headers,
      mode: "cors",
      body: JSON.stringify(body),
    }

    fetch("https://eojy131adppql6r.m.pipedream.net", options)
  }

  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="PARAPENDIO BIPOSTO"
          subTitle="VIENI A VOLARE CON NOI"
          enquire={true}
        />
        <button onClick={(e) => handleItemClick(e, 'sign-in')}>sign-in</button>
        <button onClick={(e) => handleItemClick(e, 'sign-out')}>   sign-out
        </button>
        <button onClick={(e) => sendTrigger()}>
          sendTrigger 
        </button>
        <button onClick={(e) => testRemove()}>
          remove
        </button>
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
        <Features
          title="Featured Products from Barcadia."
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        />
        <LatestPosts
          title="The Latest from Barcadia"
          introduction="Cras scelerisque, tellus sed gravida tincidunt, velit tellus blandit justo, nec viverra augue erat in erat. Maecenas iaculis sed purus non fringilla."
        />
      </Layout>
    </>
  )
}

export default Index
