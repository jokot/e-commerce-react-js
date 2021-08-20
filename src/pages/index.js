import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Home" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="I write Code"
      subtitle="Learn Code With Jokot"
      heroclass="hero-background"
    />
    <Infoblock heading="About Us" />
    <DualInfoblock
      heading="Our Team"
      img="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "heromain.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default IndexPage
