import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider"
import Cover from "../components/cover"
import About from "../components/about"
import FAQ from "../components/faq"
import Fundraising from "../components/fundraising"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <Slider />
      <Cover />
      <About />
      <FAQ />
      <Fundraising />
      <Contact />
    </Layout>
  )
}

export default IndexPage
