import * as React from "react"
import Button from "../Button/Button"
import { BasicTextModuleStyles } from "./BasicTextModuleStyles"
import { Link } from "gatsby"
import RichText from "../../components/RichText"

const BasicTextModule = ({ hookref,title, content, link, linkText  }) => {
  const ilvolo = hookref()
  console.log("ilvolo",ilvolo)
  return (
    <BasicTextModuleStyles className="section custom-section">
      <div className="container container__tight">
        <div>
          {ilvolo.titolo && <h2>{ilvolo.titolo}</h2>}
         {/*  {content && <p style={{ marginBottom: "60px" }}>{content}</p>} */}
          {ilvolo.contenuto && <RichText richText={ilvolo.contenuto} style={{ marginBottom: "20px" }}/>}

          {/* <Button text={linkText} as={Link} to={link} /> */}
        </div>
      </div>
    </BasicTextModuleStyles>
  )
}

export default BasicTextModule
