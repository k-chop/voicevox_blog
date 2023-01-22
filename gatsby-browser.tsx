/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it
import type { GatsbyBrowser } from "gatsby"
import { config } from "@fortawesome/fontawesome-svg-core"
import "@fortawesome/fontawesome-svg-core/styles.css"
import React from "react"
import { AnimatePresence } from "framer-motion"
config.autoAddCss = false

export const wrapPageElement: GatsbyBrowser["wrapPageElement"] = ({
  element,
}) => <AnimatePresence mode="wait">{element}</AnimatePresence>
