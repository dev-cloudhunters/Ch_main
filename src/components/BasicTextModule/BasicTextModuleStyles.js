import styled from "styled-components"

export const BasicTextModuleStyles = styled.section`

.section-custom {
  padding-bottom: calc(var(--sectionMargin) / 2 );
  padding-top: calc(var(--sectionMargin) / 2 );
}

  .container {
    @media (min-width: 768px) {
      > div {
        width: 100%;
        /* max-width: 700px; */
      }
    }
  }
`
