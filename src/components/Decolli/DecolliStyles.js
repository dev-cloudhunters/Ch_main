import styled from "styled-components"

export const DecolliStyles = styled.section`
  &.section-custom { 
  margin-top:0;
  padding-bottom: calc(var(--sectionMargin) / 2 );
  padding-top: calc(var(--sectionMargin) / 2 );
  background: var(--primary);
  border-top:4px solid #fff;
  }

  .intro__area {
    color:#fff;
    margin-bottom: calc(var(--gap) * 1);

    p {
      color:#fff;
    }
  }

  > div {
    &.container__scroll {
      gap: calc(var(--gap) / 2);
      padding-bottom: var(--gap);
      padding-left: var(--borderSpacing);
      padding-right: var(--borderSpacing);
      margin-left: calc(var(--borderSpacing) * -1);
      width: calc(100% + (var(--borderSpacing) * 2));

      @media (min-width: 1200px) {
        padding-bottom: 0;
        width: 100%;
        margin-left: auto;
        padding-left: 0;
        padding-right: 0;
        gap: var(--gap);
      }
    }
  }

  .features__item--prenota {
    width:100%;
    padding-bottom:15px;
    text-align:left;
    border:0;
    background: transparent;
    font-size: var(--h5);
    font-weight: 700;
    padding-left:0;
    align-items: center;
    
    & svg {
      margin-left:10px;
    }
  }

  .features__item--prenota::after {
    content: "";
    display: block;
    position: absolute;
    height: 3px;
    left: 0;
    right: 0;
    bottom: 8px;
    background-color: var(--primary);
    transition: left 0.3s ease;
  }

  .features__item--prenota {
    z-index:2;
    color:#fff;
    position:relative;
  }

  .features__item--img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .features__item--content {
    width: 100%;
    position: absolute;
    z-index: 2;
    padding: 20px 10px;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(
      0deg,
      rgba(0, 0, 0, 1) 0%,
      rgba(0, 0, 0, 0) 100%
    );

    @media (min-width: 768px) {
      padding: 20px;
    }

    @media (min-width: 1024px) {
      padding: 40px 20px;
    }

    @media (min-width: 1200px) {
      padding: 50px 30px;
    }

    h4,
    p {
      text-shadow: var(--textShadow);
    }

    h4 {
      color: #fff;
    }

    p {
      color: #fff;
    }

    .features__item--prenota,
    .features__item--readmore {
      color: #fff;
      display:flex;
      flex-grow;1;
    }
  }

  
`

export const DecolloStyles = styled.aside`
  min-height: 408px;
  background-color: white;
  flex: 0 0 80%;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-margin-left: 25px;
  position: relative;
  border-radius: 6px;
  border: 4px solid rgba(255, 255, 255, 1);
  transition: border-color 0.6s ease, box-shadow 0.6s ease;
  box-shadow: var(--boxShadowLight);
  margin-bottom: 1.5rem;

  @media (min-width: 414px) {
    min-height: 434px;
  }

  @media (min-width: 768px) {
    
    flex-basis: 100%;
    display:flex;
  }

  @media (min-width: 1024px) {
    min-height: 0px;
  
  }

  @media (min-width: 1200px) {
    /* flex-basis: 33.333%;
    flex-shrink: 1; */
  }
  
  .label-decollo {
    font-weight:700;
    border-bottom:1px solid;
    margin-top:20px;
    font-size:var(--h6);
  }

  .label-decollo, .info-decollo ,.titolo-decollo, .desc-decollo{
    color: var(--primary);
  }

  

  .info-decollo {
    display:flex;
    align-items:center;

    .ico-decollo {
      margin-right:5px
    }

    a {
      color:var(--primary);
    }
  }

  .features__item--img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    transition: transform 0.3s ease, opacity 0.3s ease;
  }

  .decolli__item--content {
    width: 100%;
   /*  position: absolute; */
    z-index: 2;
    padding: 20px 5px;
   /*  bottom: 0;
    left: 0;
    right: 0; */
    

    @media (min-width: 768px) {
      padding: 5px;
    }

    @media (min-width: 1024px) {
      padding: 20px 10px;
    }

    @media (min-width: 1200px) {
      padding: 20px 10px;
    }

    
    p {
     /*  text-shadow: var(--textShadow); */
     margin-bottom: 0rem;
    }

    h4 {
      color: var(--primary);
    }

    .ico-decollo {
      color: var(--primary);
    }

    p {
      color:  var(--primary);
    }

    .features__item--prenota,
    .features__item--readmore {
      color: #fff;
      display:flex;
      flex-grow;1;
    }
  }

  /* &:hover {
    cursor: pointer;
    border-color: var(--primary);
    box-shadow: var(--boxShadow);

    .features__item--img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  } */
`
