import React from "react"

import Layout from "../components/layout"
import Cover from "../components/cover"
import Problem from "../components/problem"
import FAQ from "../components/faq"

const IndexPage = () => {
  return (
    <Layout>
      <Cover />
      <Problem />
      <FAQ />
    </Layout>
  )
}

export default IndexPage
