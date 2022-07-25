import React from "react"
import Seo from "../components/SEO"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import styled from "styled-components"
import BannerModule from "../components/BannerModule/BannerModule"
import Faq from "../components/Faq/Faq"
import Features from "../components/Features/Features"
import RichText from "../components/RichText"
import { Box } from "grommet"
import { Alarm, Location, Package, Checkmark } from "grommet-icons"
import Button from "../components/Button/Button"
import { Link } from "gatsby"

const ProductTemplateStyles = styled.div`
  margin-top: var(--sectionMargin_small);
  margin-bottom: var(--sectionMargin_small/2);

  
  .container {
    display: flex;
    flex-wrap: wrap;
    .column {
      flex: 0 0 100%;

      @media (min-width: 768px) {
        flex-basis: 50%;

        &:nth-child(1) {
          padding-right: 20px;
        }

        &:nth-child(2) {
          padding-left: 20px;
        }

        > * {
          &:last-child {
            margin-bottom: 0;
          }
        }
      }

      > * {
        &:first-child {
          margin-top: 0;
        }
      }
    }
  }

  .info-volo-box {
    @media (max-width: 768px) {
      flex-direction:column;

      .info-volo-box-item {
        max-width: 100%;
        margin-bottom:20px;

        .durata-volo {
          text-align:left;
        }
      }
    }
  }

  .label-info-volo {
    color: var(--primary);
    font-weight: 700;
    font-size: 22px;
  }

  .ico-info-volo {
    margin-right:5px;
  }


  .cosa-comprende-item {
   /*  background: var(--lightGray);
    border-radius:6px;
    padding:2px 5px;
    color:var(--body); */
    color: var(--primary);
    margin-right:10px;
    font-weight: 700;
  }

  .cosa-comprende-box{
    max-width:60%
  }

  .durata-volo {
    font-size: 28px;
    font-weight: 700;
    line-height: 21px;
    text-align: center;
    color: var(--primary);
  }

  .decollo-volo {
    text-decoration: none;
    background: var(--primary);
    /* border-radius: 12px; */
    color: white;
    font-weight: 700;
    padding: 2px 10px;
  }

  .desc-text {
    margin-top:20px;
    border-top:1px solid var(--primary);
  }

  
`

const ProductGallery = styled.section`
  width: 100%;

  > .container {
    display: flex;
    flex-wrap: wrap;
    gap: calc(var(--gap) / 2);

    @media (min-width: 1024px) {
      gap: var(--gap);
    }

    > * {
      width: calc(50% - 10px);

      @media (min-width: 768px) {
        width: calc(33.333% - 14px);
      }

      @media (min-width: 1024px) {
        width: calc(33% - 30px);
      }
    }
  }
`

const BoxCustom = styled(Box)`
  border:2px solid var(--primary);
  padding:10px;
`;


const Producttemplate = (contentfulProduct) => {
  const {
    headerImage,
    title,
    price,
    introduction,
    description,
    faqs,
    gallery,
    durataDelVolo,
    decollo,
    cosaComprende

  } = contentfulProduct
  console.log("cosaComprende", cosaComprende)
  const productHeaderImage = getImage(headerImage)
  
  return (
    <>
      <Seo title={title} />
      <BannerModule
        title={title}
        price={price}
        subTitle={introduction}
        enquire={true}
      >
        <GatsbyImage
          className="banner__image"
          
          image={productHeaderImage}
          alt={title}
        />
      </BannerModule>
      <ProductTemplateStyles className="section custom-section">
        <div className="container container__tight">


          <Box className="info-volo-box" direction="row" fill="horizontal" gap="medium"  >
            {cosaComprende &&
              <BoxCustom className="info-volo-box-item cosa-comprende-box" direction="column" >
                <Box direction="row" align="center" >
                  <Package className="ico-info-volo" color='var(--primary)' />
                  <div className="label-info-volo">Cosa Comprende:</div>
                </Box>
                <Box direction="row" gap="small" className="info-volo" wrap="true">
                  {cosaComprende.map((item, index) => {
                    return <Box direction="row" align="center" key={index}><Checkmark className="ico-info-volo" size="small" color="var(--primary)" /> <span className="cosa-comprende-item" > {item} </span></Box>
                  })}
                </Box>
              </BoxCustom>
            }

            {durataDelVolo &&
              <BoxCustom className="info-volo-box-item">
                <Box direction="row" align="center">
                  <Alarm className="ico-info-volo" color='var(--primary)' />
                  <div className="label-info-volo">Durata del volo:</div>
                </Box>
                <p className="info-volo durata-volo">
                  {durataDelVolo}</p>
              </BoxCustom>
            }

            {decollo &&
              <BoxCustom className="info-volo-box-item">
                <Box direction="row" align="center">
                  <Location className="ico-info-volo" color='var(--primary)' />
                  <div className="label-info-volo">Partenza:</div>
                </Box>
                <p className="info-decollo">
                  <a className="decollo-volo" target="_blank" href={"https://www.google.com/maps/search/?api=1&query=" + decollo.posizione.lat + "," + decollo.posizione.lon}>{decollo.titolo}</a>
                </p>
              </BoxCustom>
            }
          </Box>
          {description && (
            <div className="desc-text">
              <RichText richText={description} />
            </div>
          )}
        </div>
      </ProductTemplateStyles>
      <section custom-section>
        <Box className="banner__btns" direction="row" align="center" justify="center">
          <Button
            className="btn_prenota"
            text="Prenota ora il tuo volo"
            as={Link}
            to="#"
          />
        </Box>
      </section>
      {gallery && (
        <ProductGallery className="section custom-section">
          <div className="container container__tight">
            {gallery.map((item, index) => {
              let galleyImage = getImage(item)
              return <GatsbyImage key={index} image={galleyImage} />
            })}
          </div>
        </ProductGallery>
      )}
      <Features
        title="Gli altri voli"
        introduction="Lascia che i tuoi sogni sfidino la gravità"
      />
    </>
  )
}

export default Producttemplate
