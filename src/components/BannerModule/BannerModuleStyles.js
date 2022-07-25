import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  height: 100vh;
  position: relative;
  padding: 30px var(--borderSpacing);

  &.banner_short {
    height: 65vh;
  }
  .gatsby-image-wrapper {
    img {
      object-position: right;
      opacity: 1;
    }
  }

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .gradient,
  .banner__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
  }

  .gradient {
    /* background: radial-gradient(
      at bottom left,
      rgba(0, 0, 0, 0.5),
      rgba(0, 0, 0, 0)
    ); */
  }

  .banner__content {
    position: relative;
    z-index: 2;
    min-height: 40vh;
    width: 100%;
    max-width: 700px;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1,
    h2 {
      text-shadow: var(--textShadow);
      color:#fff;
      line-height: 0.75em;
      marring-top:0;
    }

    h1 {
      border-bottom: 2px solid rgba(255, 255, 255, 0.15);
      display: inline-block;
      margin-bottom:0;
    }

    h2 {
      font-size: var(--h2);
      font-weight: 600;
      /* color: var(--primary);
      text-shadow: var(--textShadowWhite);; */
    }

    h1,
    .price {
      margin-top: 0;
      font-size: var(--bannerTitle);
    }
  }

  .banner__btns {
    display: flex;
    gap: var(--gap);
      .btn {
        background: var(--primary);
        margin-bottom: 10px;
        padding: 5px 10px;
        color: white;
        transition: background 0.5s ease 0.2s, color 0.3s ease 0.3s;
       
        
        :after {
          background-color: white;
          bottom:0;
        }
        :hover {
          background: white;
          color:var(--primary);
        }
      }
  }
`
