import React from "react"

import Helmet from "react-helmet"
import SocialExchangeInfo from "../components/socialExchangeInfo"
import Footer from "../components/footer"

const SocialExchange = () => {
  return (
    <>
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
      <SocialExchangeInfo />
      <Footer />
    </>
  )
}

export default SocialExchange
