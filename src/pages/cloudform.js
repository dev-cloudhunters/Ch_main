import * as React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import Seo from "../components/SEO"
import Button from "../components/Button/Button"
import FormComp from "../components/Form/Form"
import { Grommet, Box, List, Menu, Text, ListItem, Heading, RadioButtonGroup } from 'grommet';
import { theme } from '../styles/Theme.js'
import BannerModule from "../components/BannerModule/BannerModule"


const cloudform = (data) => {
  console.log("location",data.location.state)
  return (
    <>
      <Seo title="Form Prenotazione Volo" />
      <Layout>
        {/* <BannerModule
          title="PARAPENDIO BIPOSTO"
          subTitle="VIENI A VOLARE CON NOI"
          enquire={true}
        /> */}
        <BannerModule
          title="Completa la prenotazione del volo"
          /* subTitle="VIENI A VOLARE CON NOI" */
          enquire={false}
          className="banner_short"
        />
        <div className="formPage">
          <div className="section section_no_top">
            <div className="container container__tight">
              <div className="wrapForm">
                <FormComp/>
              </div>

            </div>
          </div>
        </div>

      </Layout>
    </>
  )
}

export default cloudform
