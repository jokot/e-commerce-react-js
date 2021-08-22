import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import Contact from "../components/Contact/contact"

const ContactPage = ({ data }) => (
  <Layout>
    <Seo title="Contact" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="Contact Us"
      heroclass="about-background"
    />
    <Infoblock heading="How can we help?" />
    <Contact/>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "contact.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ContactPage
