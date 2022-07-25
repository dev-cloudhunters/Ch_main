import { graphql, useStaticQuery } from "gatsby"

const useDecollo = () => {
  const {
    allContentfulDecolli: { nodes },
  } = useStaticQuery(graphql`
    query decolliLinksQuery {
        allContentfulDecolli {
            nodes {
                titolo
                macchina
                
                altitudine
                posizione {
                  lat
                  lon
                }
                immagine {
                  gatsbyImageData(
                    
                    quality: 90
                    width: 512
                    layout: CONSTRAINED
                  )
                }
                descrizione {
                  descrizione
                }
              }
          }
    }
  `)

  return nodes
}

export default useDecollo
