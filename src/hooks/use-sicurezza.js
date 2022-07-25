import { graphql, useStaticQuery } from "gatsby"

const useSicurezza = () => {
  const {
    contentfulSection,
  } = useStaticQuery(graphql`
    query sicurezza {
        contentfulSection(titolo: {eq: "Sicurezza"}) {
            titolo
            contenuto {
                raw
            }
          }
    }
  `)

  return contentfulSection
}

export default useSicurezza
