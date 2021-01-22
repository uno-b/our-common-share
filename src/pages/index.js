import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider"
import Cover from "../components/cover"
import About from "../components/about"
import FAQ from "../components/faq"
import Fundraising from "../components/fundraising"

const IndexPage = () => {
  return (
    <Layout>
      <Slider />
      <Cover />
      <About />
      <FAQ />
      <Fundraising />
    </Layout>
  )
}

export default IndexPage
