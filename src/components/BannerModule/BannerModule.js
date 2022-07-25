import * as React from "react"
import { Link, navigate } from "gatsby"
import { BannerModuleStyles } from "./BannerModuleStyles"
import { StaticImage } from "gatsby-plugin-image"
import Button from "../Button/Button"
import useCarouselHome from "../../hooks/use-carousel-home"
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const BannerModule = ({ children, title, subTitle, price, enquire,className }) => {

  const carousel = useCarouselHome()
  const image = getImage(carousel[0])
  console.log(carousel)
  /* {carousel.map((file, index) => {
    console.log("file",file,index)
    //return <FeaturedProduct feature={node} key={index} />
  })} */
{/* <StaticImage
            className="banner__image"
            imgClassName="banner__image--content"
            src={"../../../static/macbook-color.jpg"}
            alt="Banner Image"
            layout="fullWidth"
            placeholder="blurred"
          /> */}

  function scrollToArea() {
    navigate("#topContent")
  }

  return (
    <>
      <BannerModuleStyles className={className?className:""}>
        {children ? (
          children
        ) : (
            
            < GatsbyImage
                className="banner__image"
                imgClassName="banner__image--content"
                image={image}
                objectFit="cover"
                alt={"testo alt"}
              />
        )}

        <div className="container">
          <div className="banner__content">
            {title && (
              <h1>
                {title}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h1>
            )}
            {subTitle && <h2>{subTitle}</h2>}
            {price && (
              <h2 className="price">
                €{price}
                <span style={{ color: "var(--primary)" }}>.</span>
              </h2>
            )}
            <div className="banner__btns">
              {enquire && (
                <Button
                  className="btn"
                  text="Prenota ora il tuo volo"
                  as={Link}
                  to="#"
                />
              )}
              {/* <Button onClick={scrollToArea} text="Lascia che i tuoi sogni sfidino la gravità" /> */}
            </div>
          </div>
        </div>
        <div className="gradient"></div>
      </BannerModuleStyles>
      <span id="topContent"></span>
    </>
  )
}

export default BannerModule
