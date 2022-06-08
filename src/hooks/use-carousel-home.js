import { graphql, useStaticQuery } from "gatsby"

const useCarouselHome = () => {
  const {
    contentfulCarouselHome: { imageGallery },
  } = useStaticQuery(graphql`
    query carouselHome {
        contentfulCarouselHome {
            imageGallery {
                gatsbyImageData(cropFocus: BOTTOM_LEFT)
            }
          }
    }
  `)
  return imageGallery
}

export default useCarouselHome