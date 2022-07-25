import React from "react"
import { graphql } from "gatsby"
import ProductTemplate from "../../templates/product-template"
import Seo from "../../components/SEO"
import Layout from "../../components/Layout"

const Product = ({ data: { contentfulProduct } }) => {
  console.log(contentfulProduct,"contentfulProduct")
  return (
    <>
      <Seo title={contentfulProduct.title} />
      <Layout>
        <ProductTemplate {...contentfulProduct} />
      </Layout>
    </>
  )
}

export const data = graphql`
  query productQuery($id: String) {
    contentfulProduct(id: { eq: $id }) {
      title
      introduction
      price
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      description {
        raw
      }
      durataDelVolo
      decollo {
        titolo
        posizione {
          lat
          lon
        }
      }
      cosaComprende
      gallery {
        gatsbyImageData(
          width: 450
          height: 450
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
    }
  }
`

export default Product
