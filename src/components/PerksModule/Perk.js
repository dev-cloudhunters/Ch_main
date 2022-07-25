import * as React from "react"
import { PerkStyles } from "./PerksModuleStyles"
import { Box } from "grommet"
import RichText from "../../components/RichText"
import { renderRichText } from 'gatsby-source-contentful/rich-text'

const Perk = ({ children, title, content, className }) => {
  //console.log("content",content.raw)
  return (
    <PerkStyles className={className}>
      <Box direction="row" justify="center" align="center" >{children}
        {title && <h3>{title}</h3>}
      </Box>
     {/*  {content && <p>balbal</p>} */}
     {/*  <div>{renderRichText(content.raw, {})}</div> */}
     {/* {content && console.log("AOAOAO",JSON.parse(content))} */}
     {content && <RichText richText={content} />} 
    </PerkStyles>
  )
}

export default Perk
