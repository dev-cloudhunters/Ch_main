import React from "react"
import { MenuProvider } from "./src/components/MenuContext"
//import { ProductProvider } from "./src/components/ProductContext"
import { AnimatePresence } from "framer-motion"
import "@fontsource/heebo/400.css"
import "@fontsource/heebo/700.css"

export function wrapPageElement({ element }) {
  return <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
}

export function wrapRootElement({ element }) {
  return <MenuProvider>{element}</MenuProvider>
}

/* export function wrapRootProductElement({ element }) {
  return <ProductProvider>{element}</ProductProvider>
} */