import React from "react"
import BackgroundImage from "gatsby-background-image"

export default function HeroSection({ img, title, subtitle, heroclass }) {
  return (
    <BackgroundImage className={heroclass} fluid={img}>
      <hi className="text-white text-uppercase text-center display-4">
        {title}
      </hi>
      <div>
        <h4 className="text-warning">{subtitle}</h4>
      </div>
    </BackgroundImage>
  )
}
