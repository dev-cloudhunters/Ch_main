import React, { useContext, useState, useEffect } from "react"
import { Link } from "gatsby"
import MenuContext from "../MenuContext"
import { motion } from "framer-motion"
import { menuItems } from "./NavConstants"
import { UseSiteMetadata } from "../../hooks/useSiteMetadata"
import useFeaturedProduct from "../../hooks/use-featured-product"
import { FiChevronDown as Chevron } from "react-icons/fi"
import { StaticImage } from "gatsby-plugin-image"
import { FaTripadvisor,FaFacebook,FaInstagram } from "react-icons/fa"
import {
  NavModuleStyles,
  NavTopLevel,
  SubNavStyles,
  HamburgerStyles,
  LogoStyles,
} from "./NavModuleStyles"
import {
  barOneVariants,
  barTwoVariants,
  barThreeVariants,
  menuList,
  subMenuNavVariants,
} from "./NavAnim"

const NavModule = () => {
  const featuredProduct = useFeaturedProduct()

  //const [{isOpen, isBackground},setState] = useContext(MenuContext)
  const { state: { isOpen, isBackground }, dispatch } = useContext(MenuContext);
  const [subNavIsOpen, setSubNav] = useState(false)
  /* const [isBackground, setBackground] = useState(isOpen) */

  const variantsBackground = {
    background_visible: {
      backgroundColor: "#fff",
      paddingTop: 10,
      paddingBottom: 10,
      transition: { ease: "easeOut", delay: 0.3, duration: 0.3 }
    },
    background_hidden: {
      backgroundColor: "rgba(0 0 0 .0)",
      paddingTop: 70,
      paddingBottom: 0,
      transition: { ease: "easeOut",  duration: 0.3 }
    },
  }

  const variantsLogoText = {
    text_visible: {
      /* marginRight: 0,*/
      x: 0,
      opacity: 1,
      transition: { delay: 0.7, ease: "easeOut", duration: 0.3 },
      display: "flex",
      
    },
    text_hidden: {
      /*  marginRight: -600,*/
      x: -400,
      opacity: 0,
      transition: {
        x: { delay: 0, },
        default: { delay: 0, ease: "easeOut", duration: 0.3 },
      },
      transitionEnd: {
        display: "none",
      },
    },
  }

  const toggleNav = () => {
    console.log("toggleNavtoggleNav")
    dispatch({ isOpen: !isOpen });
    //setState({ isOpen: !isOpen, isBackground: isOpen? false : isBackground })
    
  }

  const toggleSubNav = () => {
    setSubNav((subNavIsOpen) => !subNavIsOpen)
  } 

  const checkClass = () => {
    let classString ="";
    classString += isOpen ? " open" : ""
    classString += isBackground ? " background" : ""
    return classString;
  }

 

  const { title } = UseSiteMetadata()

  //navbar scroll changeBackground function
  const changeBackground = () => {
    //console.log(window.scrollY)
    if (window.scrollY >= (window.innerHeight-100)) {
        dispatch({ isBackground: true});
    } else {
        dispatch({ isBackground: false});
     /*  setBackground(false) */
    }
  }
  useEffect(() => {
    console.log("addEvent changeBackground")
    changeBackground()
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  }, [])

  useEffect(() => {
    console.log("isOpen", isOpen)
    if(!isOpen){
      if (window.scrollY >= window.innerHeight) {
        dispatch({ isBackground: true});
      }
    }
  }, [isOpen]);

  useEffect(() => {
    console.log("isBackground", isBackground)
  }, [isBackground]);



  return (
    <NavModuleStyles>
      
      <motion.div
        initial={isBackground ? "background_hidden" : "background_visible"}
        animate={isBackground ? "background_visible" : "background_hidden"}
        variants={variantsBackground}
        className="nav"
      >
        <div className="container">
          <HamburgerStyles
            initial="closed"
            animate={isOpen ? "open" : "closed"}
            onClick={toggleNav}
            onKeyDown={toggleNav}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            className={checkClass()}
          >
            <motion.span
              className="bar"
              variants={barOneVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barTwoVariants}
            ></motion.span>
            <motion.span
              className="bar"
              variants={barThreeVariants}
            ></motion.span>
          </HamburgerStyles>

          <LogoStyles >
            <Link to="/">
            <motion.span
                  className="logo-wrapper"
                  initial={!isBackground ? "text_hidden" : "text_visible"}
                  animate={!isBackground ? "text_visible" : "text_hidden"}
                  variants={variantsLogoText}
                >
                  <div className="logo_text">CloudHunters</div>
                  <div className="logo_text_social"><FaFacebook/><FaInstagram/><FaTripadvisor/></div>
            </motion.span>
            <motion.div
                  className="img"

                  animate={{
                    opacity: isBackground ? 1 : 0,
                    transition: { ease: "easeOut", duration: 0.3, delay:isBackground? 0.8: 0 },
                    display: isBackground ? "flex" : "none",
                    transitionEnd: {
                      display: isBackground ? "flex" : "none",
                    },
                  }}
                >
              <StaticImage
                className="logoImage"
                src="../../../static/logos/logo-small.png"
                alt="Perk Image"
                layout="constrained"
                placeholder="blurred"
                width={200}

              />
              <div className="logo_image_social"><FaFacebook/><FaInstagram/><FaTripadvisor/></div>
          </motion.div>
              {/*  <span>.</span> */}
            </Link>
          </LogoStyles>

        </div>
     
      </motion.div>
      <motion.div
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={menuList}
        transition={{ type: "ease", stiffness: 50, velocity: 50 }}
        className="menu"
      >
        <NavTopLevel>
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                onClick={toggleNav}
                onKeyDown={toggleNav}
                to={item.path}
                activeClassName="menu__item--active"
              >
                {item.text}
                <span>.</span>
              </Link>
            </li>
          ))}
          {featuredProduct && (
            <li className={subNavIsOpen ? "open" : "closed"}>
              <button
                type="button"
                onClick={toggleSubNav}
                onKeyDown={toggleSubNav}
              >
                Products<span>.</span>
                <Chevron />
              </button>

              <SubNavStyles
                initial="closed"
                animate={subNavIsOpen ? "open" : "closed"}
                variants={subMenuNavVariants}
              >
                <li>
                  <Link
                    onClick={toggleNav}
                    onKeyDown={toggleNav}
                    to="/products"
                  >
                    All Products<span>.</span>
                  </Link>
                </li>
                <hr />
                {featuredProduct.map((item, index) => {
                  /* console.log("item",item) */
                  const { gatsbyPath, title } = item
                  return (
                    <li key={index}>
                      <Link
                        onClick={toggleNav}
                        onKeyDown={toggleNav}
                        to={gatsbyPath}
                      >
                        {title}
                        <span>.</span>
                      </Link>
                    </li>
                  )
                })}
              </SubNavStyles>
            </li>
          )}
        </NavTopLevel>
      </motion.div>
    </NavModuleStyles>
  )
}

export default NavModule
