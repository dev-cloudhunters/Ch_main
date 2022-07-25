import styled from "styled-components"

export const FeaturedProductsStyles = styled.section`

  &.section-custom { 
  margin-top:0;
  margin-bottom:0;
  padding-bottom:var(--sectionMargin);
  padding-top: calc(var(--sectionMargin) / 2 );
  background: var(--primary);
  border-top:4px solid #fff;
  }

  .intro__area {
    color:#fff;
    margin-bottom: calc(var(--gap) * 1);

    p {
      color:#fff;
      font-size: var(--h6)
    }
  }

  .testo_chiusura {
    margin-top: calc(var(--gap) * 1);
    color:#fff;
    font-size: var(--h6)
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

  

  @media (hover: hover) {
    .features__item--prenota:hover {
      cursor: pointer;
      color: var(--primary);

      &::after {
        left: 100%;
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

export const FeaturedProductStyles = styled.aside`
  min-height: 408px;
  background-color: #000;
  flex: 0 0 90%;
  overflow: hidden;
  scroll-snap-align: center;
  scroll-margin-left: 25px;
  position: relative;
  border-radius: 6px;
  border: 4px solid rgba(255, 255, 255, 1);
  transition: border-color 0.6s ease, box-shadow 0.6s ease;
  box-shadow: var(--boxShadowLight);

  @media (min-width: 414px) {
    min-height: 534px;
    margin: auto;
  }

  @media (min-width: 768px) {
    min-height: 500px;
    flex-basis: calc(50% - 30px);
    margin-left: 0;
  }

  @media (min-width: 1024px) {
    min-height: 600px;
  }

  @media (min-width: 1200px) {
    flex-basis: calc(33.333% - 30px);
    flex-shrink: 1;
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

  &:hover {
    cursor: pointer;
    border-color: var(--primary);
    box-shadow: var(--boxShadow);

    .features__item--img {
      transform: scale(1.1);
      opacity: 0.5;
    }
  }
`
