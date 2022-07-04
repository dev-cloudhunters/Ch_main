import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

:root {  
  --bannerTitle: 34px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: #fff;
  --primary: #c30f1a;
  --bodyColor: #333;
  --inActive: #555;
  --letterSpacing: -0.075rem;
  --boxShadow: 0px 15px 22px 3px rgba(0, 0, 0, 0.55);
  --boxShadowLight:  rgb(0 0 0 / 20%) 0px 2px 4px;
  --textShadow: 0px 0px 5px rgba(0, 0, 0, 1);
  --textShadowWhite: 0px 0px 2px rgba(255, 255, 255, 0.5);
  --p: 14px;
  --h2: 20px;
  --h3: 19px;
  --h4: 18px;
  --h5: 17px;
  --h6: 16px;
  --gap: 40px;
  --sectionMargin: 60px;

  @media(min-width:375px) {
    --bannerTitle: 36px;    
    --h2: 22px;
    --h3: 21px;
    --h4: 20px;
    --h5: 19px;
    --h6: 18px;
    --sectionMargin: 80px;
  }

  @media(min-width:414px) {
    --bannerTitle: 40px;    
    --h2: 27px;
    --h3: 25px;
    --h4: 23px;
    --h5: 21px;
    --h6: 20px;
  }

  @media(min-width:768px) {
    --bannerTitle: 54px;    
    --blockquote: 26px;
    --p: 15px;
    --h2: 30px;
    --h3: 28px;
    --h4: 26px;
    --h5: 24px;
    --h6: 22px;
    --sectionMargin: 100px;
  }

  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --p: 16px;
    --h2: 36px;
    --h3: 32px;
    --h4: 29px;
    --h5: 27px;
    --h6: 25px;
    --sectionMargin: 180px;
  }

  @media(min-width:1200px) {
    --p: 17px;
  }
}

* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}  


body {
    font-family: 'Heebo', sans-serif;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #333;
    overflow-x: hidden;
    font-size: var(--p);
}

body.openCheck {
   overflow:hidden; 
}

.refEl {
  z-index:1052;
  display:none !important;
  background: #c30f1a;
  width: 270px;
  height: 300px;
  border-radius: 20px;
}

h1,
h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.25em;
    font-weight: 700;
    letter-spacing: var(--letterSpacing);

    @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
    }
}

h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}

h1 {
    font-size: var(--bannerTitle);
}

h2 {
    font-size: var(--h2);
}

h3 {
  font-size: var(--h3);
}

h4 {
  font-size: var(--h4);
}

h5 {
  font-size: var(--h5);
}

h6 {
  font-size: var(--h6);
}

p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--bodyColor);
}

b,
strong {
  font-weight: 700;
}

i {
  font-style: italic;
}

.underline {
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: rgba(175, 194, 203, 0.25);
  text-decoration-thickness: 0.125rem;
}

hr,
ol,
ul,
blockquote {
  margin-top: calc(var(--sectionMargin) / 2);
  margin-bottom: calc(var(--sectionMargin) / 2);
}

hr {
  border: none; 
  height: 2px;
  background-color: #333;
}

a {
  color: var(--primary);
  transition: color 0.3s ease;
  cursor: pointer;

  &:hover,
  &:focus {
    text-decoration: none;
  }
}

blockquote {
  font-size: var(--blockquote);
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  margin-left: 0;
  border-left: 2px solid var(--primary);
  padding-left: var(--gap);
}

.container {
  margin-left: auto;
  margin-right: auto;

  &__tight {
    max-width: 1400px;
  }

  &__scroll {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;

    &::-webkit-scrollbar {
      width: 14px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }
    &::-webkit-scrollbar-track {
      background: #000;
      border-radius: 0px;
    }

    @media (min-width: 1200px) {
      overflow-x: visible;
    }
  }
}

.section {
    margin-top: var(--sectionMargin);
    margin-bottom: var(--sectionMargin);
    padding: 0 var(--borderSpacing);

    &.section__padding {
        padding-top: var(--sectionMargin);
        padding-bottom: var(--sectionMargin);
    }
}

.section_no_top {
   margin-top: 0
  margin-bottom: var(--sectionMargin);
  padding: 0 var(--borderSpacing);

  &.section__padding {
      padding-top: 0;
      padding-bottom: var(--sectionMargin);
  }
}

.intro__area {
  margin-bottom: calc(var(--gap) * 2);
  max-width: 700px;

  h2 {
    display: inline-block;
    border-bottom: 2px solid rgba(255,255,255,0.15);
  }
}

.learn__more {
  margin-top: calc(var(--gap) * 2);
}

.feed {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;

  >* {
    flex: 0 0 100%;

    @media(min-width:414px) {
      flex-basis: calc(50% - (calc(var(--gap) / 2)));
    }

    @media(min-width:1024px) {
      flex-basis: calc(33.333% - 27px);
    }
  }
}

.contentimg {
  margin-top: var(--gap);
  margin-bottom: var(--gap);
}

.contentdescription {
  color: var(--bodyColor);
  font-style: italic;
  font-size: 0.813rem;
  text-align: center;
  margin-top: calc(var(--gap) / 2);
}

.Modal {
  position: absolute;
  bottom: 40px;
  left: 140px;
  right: 40px;
  bottom: 40px;
  /* background-color: red; */
  width: 500px;
  height: 400px;
}



.Overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(255,255,255,0.9);
}

.refEl .react-datepicker__input-container {
  display:none;
}

.react-datepicker__time-list-item.react-datepicker__time-list-item--disabled {
  display:none;
}


.react-datepicker .react-datepicker__day {
  color: var(--primary) !important;
}

.react-datepicker .react-datepicker__day--disabled {
  color: #ccc !important;
}

.react-datepicker .react-datepicker__day--selected {
  color: #fff !important;
}


.react-datepicker {
  display:flex;
  flex-direction:column-reverse;

  .react-datepicker__header {
      border-bottom:0;

      .react-datepicker__day-name {
          text-transform: uppercase;
          font-size: 11px;
          font-weight: 500;
          color: var(--primary);
      }

      .react-datepicker__current-month {
          color: var(--primary);
          text-transform:capitalize;
      }
  }

  .react-datepicker__day {
      box-sizing: border-box !important;
      font-size: 14px !important;
      text-align: center !important;
      cursor: default !important;
      background: rgb(255, 255, 255) ;
      border: 1px solid rgb(228, 231, 231) !important;
      color: rgb(202, 204, 205);
  }

  .react-datepicker__day--selected {
      background: var(--primary) ;
      color:#fff;
  }

  

  .react-datepicker__triangle {
      display:none;
  }

  .react-datepicker__time-container  {
      width:100%;

      .react-datepicker__time-list {
          height: auto !important;
      }
  }
}

.formPage {
  background: var(--primary);
  height: 100vh;
  position: relative;
  padding: 10px var(--borderSpacing);
  
  .formHolder {
    display:flex;
    flex-direction:column;
  }

  h1 {
    margin-top: 0;
    font-size: var(--bannerTitle);
    border-bottom: 2px solid rgba(255,255,255,0.15);
    display: inline-block;
    margin-bottom: 0;
    text-shadow: var(--textShadow);
    color: #fff;
    line-height: 0.75em;
  }
}

#snipcart {
  z-index:102;
}
`
