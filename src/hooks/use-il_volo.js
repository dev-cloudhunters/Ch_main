import { graphql, useStaticQuery } from "gatsby"

const useIlVolo = () => {
  const {
    contentfulSection,
  } = useStaticQuery(graphql`
    query ilVolo {
        contentfulSection(titolo: {eq: "Il volo in parapendio"}) {
            titolo
            contenuto {
                raw
            }
          }
    }
  `)

  return contentfulSection
}

export default useIlVolo
