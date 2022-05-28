import { graphql, useStaticQuery } from "gatsby"

const useCarouselHome = () => {
  const {
    contentfulCarouselHome: { imageGallery },
  } = useStaticQuery(graphql`
    query carouselHome {
        contentfulCarouselHome {
            imageGallery {
                gatsbyImageData
            }
          }
    }
  `)
  return imageGallery
}

export default useCarouselHome