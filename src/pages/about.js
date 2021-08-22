import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroSection from "../components/Reuseable/HeroSection"
import Infoblock from "../components/Reuseable/Infoblock"
import DualInfoblock from "../components/Reuseable/DualInfoblock"
import TeamSection from "../components/About/TeamSection"

const AboutPage = ({ data }) => (
  <Layout>
    <Seo title="About" />
    <HeroSection
      img={data.img.childImageSharp.fluid}
      title="About Learn Code With"
      heroclass="about-background"
    />
    <DualInfoblock
      heading="A message from CEO"
      img="https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500"
    />
    <Infoblock heading="Vision" />
    <TeamSection />
  </Layout>
)

export const query = graphql`
  query {
    img: file(relativePath: { eq: "about.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default AboutPage
