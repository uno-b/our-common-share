import React from "react"

import Layout from "../components/layout"
import Slider from "../components/slider"
import Cover from "../components/cover"
import Problem from "../components/problem"
import FAQ from "../components/faq"
import Fundraising from "../components/fundraising"

const IndexPage = () => {
  return (
    <Layout>
      <Slider />
      <Cover />
      <Problem />
      <FAQ />
      <Fundraising />
    </Layout>
  )
}

export default IndexPage
