import { GatsbyImage, getImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import RichText from "../components/RichText"
import Features from "../components/Features/Features"
import Decolli from "../components/Decolli/Decolli"

const DecolliTemplate = contentfulPage => {
  const headerImage = getImage(contentfulPage.headerImage)
  return (
    <>
      <Seo title={contentfulPage.title} />
      <Layout>
        <SimpleBanner title={contentfulPage.title}>
          <GatsbyImage className="banner__image" image={headerImage} />
        </SimpleBanner>
        <Decolli
          title="Dove decolliamo"
          introduction="Vivamus quam mauris, pulvinar vel mauris id, interdum semper neque. Proin malesuada libero eget tellus scelerisque, id egestas tortor egestas."
        /> 
        <div className="section">
          {/* <div className="container container__tight">
            <RichText richText={contentfulPage.mainContent} />
          </div> */}
        </div>
        <Features
          title="Hai mai sognato di volare in parapendio?"
          introduction="Ora puoi facilmente soddisfare questo tuo desiderio ancestrale in totale sicurezza e tranquillità prenotando un volo in parapendio. Volare in parapendio biposto è un’esperienza unica e meravigliosa, una vera e propria passeggiata nel cielo, una fantastica sensazione che rimarrà impressa a vita nello scrigno delle tue avventure."
          testo_chiusura="Possiamo realizzare questa meravigliosa avventura intorno a Roma, dai principali decolli del Lazio. La sensazione di potersi librare in aria come gli uccelli godendo dei panorami spettacolari che il nostro centro Italia può regalarci non ha prezzo soprattutto se puoi farlo insieme a piloti esperti e qualificati che condividono da anni questa passione."
        />

      </Layout>
    </>
  )
}

export default DecolliTemplate