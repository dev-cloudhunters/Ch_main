import { graphql, useStaticQuery } from "gatsby"

const useChiPuo = () => {
  const {
    contentfulSection,
  } = useStaticQuery(graphql`
    query chiPuo {
        contentfulSection(titolo: {eq: "Chi può volare"}) {
            titolo
            contenuto {
                raw
            }
          }
    }
  `)

  return contentfulSection
}

export default useChiPuo
