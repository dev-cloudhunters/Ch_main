import React from "react"
import { graphql } from "gatsby"
import DefaultTemplate from "../templates/default-template"
import FeedTemplate from "../templates/feed-template"
import DecolliTemplate from "../templates/decolli-template"

const getTemplate = (contentfulPage) => {
  const { template } = contentfulPage

  switch (template) {
    case "feed":
      return <FeedTemplate {...contentfulPage} />
    
    case "decolli":
      return <DecolliTemplate {...contentfulPage} />

    default:
      return <DefaultTemplate {...contentfulPage} />


  }
}

const Page = ({ data: { contentfulPage } }) => {
  return <main>
    {getTemplate(contentfulPage)}
  </main>
}

export const data = graphql`
  query pageQuery($id: String) {
    contentfulPage(id: { eq: $id }) {
      template
      title
      headerImage {
        gatsbyImageData(
          width: 2000
          placeholder: BLURRED
          formats: [AUTO, WEBP, AVIF]
        )
      }
      feedType
      mainContent {
        raw
      }
    }
  }
`

export default Page
