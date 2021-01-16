import React from "react"

import Layout from "../components/layout"
import Cover from "../components/cover"
import SectionTwo from "../components/section-two"
import FAQ from "../components/faq"

const IndexPage = () => {
  return (
    <Layout>
      <Cover />
      <SectionTwo />
      <FAQ />
    </Layout>
  )
}

export default IndexPage
