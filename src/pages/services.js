import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import ProductSection from "../components/Services/ProductSection"

const ServicesPage = ({ data }) => (
  <Layout>
    <Seo title="Services" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="What You want?"
      heroclass="services-background"
    />
    <DualInfoblock
      heading="What We Offer"
      img="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
    <ProductSection/>
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "services.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default ServicesPage
