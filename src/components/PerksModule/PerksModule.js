import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { PerksModuleStyles } from "./PerksModuleStyles"
import { MdOutlineClose as Cross } from "react-icons/md"
import Perk from "./Perk"
import {MdOutlineParagliding} from "react-icons/md"
import {AiOutlineSafetyCertificate, AiOutlinePlus} from "react-icons/ai"
import useSicurezza from "../../hooks/use-sicurezza"
import useChiPuo from "../../hooks/use-chi_puo_volare"

const PerksModule = () => {
  const sicurezza = useSicurezza()
  const chipuo = useChiPuo()
  console.log("sicurezza",sicurezza.contenuto)
  return (
    <PerksModuleStyles className="section section__padding custom-section">
      <StaticImage
        className="perks__image--bg"
        src="../../../static/volo-parapendio-tandem-sfondo.jpg"
        alt="Perks Module"
        layout="constrained"
        placeholder="tracedSVG"
      />
      <div className="perks__image--overlay"></div>
      <div className="container container__tight">
        <Perk
          className="sx"
          title={chipuo.titolo}
          content={chipuo.contenuto}
        >
          <MdOutlineParagliding className="ico-perks"/>
          {/* <StaticImage
            src="../../../static/logos/gatsby-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}
          
        </Perk>
        <span className="perks__divider">
          <AiOutlinePlus />
        </span>
        <Perk
          className="dx"
          title={sicurezza.titolo}
          content={sicurezza.contenuto}
        >
          {/* <StaticImage
            src="../../../static/logos/contentful-logo.svg"
            alt="Perk Image"
            layout="constrained"
            placeholder="tracedSVG"
          /> */}
          <AiOutlineSafetyCertificate className="ico-perks"/>
        </Perk>
      </div>
    </PerksModuleStyles>
  )
}




export default PerksModule
