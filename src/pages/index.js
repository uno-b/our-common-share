import React from "react"

import Layout from "../components/layout"
import Helmet from "react-helmet"
import Cover from "../components/cover"
import About from "../components/about"
import FAQ from "../components/faq"
import Fundraising from "../components/fundraising"
import Contact from "../components/contact"

const IndexPage = () => {
  return (
    <Layout>
      <Helmet
        htmlAttributes={{
          lang: "en",
        }}
      >
        <title>
          Our Common Share | The Next Generation Social Media Platform
        </title>
        <meta
          name="description"
          content="Our Common Share, the next generation social media platform"
        />
        <meta
          name="keywords"
          content="social media, tokenized trust, social exchange, trust-driven commercial satellites, social space, respect and empowerment, idealistic vision, transactions, commercial possibilities, transparency, self-expression"
        />
        <meta
          property="og:title"
          content="Our Common Share | The Next Generation Social Media Platform"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Our Common Share, the next generation social media platform"
        />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="en_US" />
        <meta
          property="og:url"
          content="https://our-common-share.netlify.app"
        />
        <link rel="canonical" href="https://our-common-share.netlify.app" />
      </Helmet>
      <Cover />
      <About />
      <FAQ />
      <Fundraising />
      <Contact />
    </Layout>
  )
}

export default IndexPage
