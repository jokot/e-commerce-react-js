import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function Infoblock({ heading }) {
  return (
    <section className="bg-theme my-5 py-4">
      <div className="container">
        <Heading title={heading} />
      </div>
      <div className="row">
        <div className="col-10 col-sm-8 mx-auto text-center">
          <p className="lead text-white mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Repellendus nemo soluta, dolor dicta, error, numquam ad porro eaque
            maxime optio reprehenderit. Minima exercitationem repellendus
            debitis, deserunt cupiditate nostrum veritatis quo aut iure soluta
            atque. Ducimus, saepe in! Mollitia magnam saepe neque culpa vel fuga
            ullam rem doloremque molestias ipsam tempora praesentium incidunt
            voluptate ratione sunt, reiciendis aliquam, aut quo consequuntur.
          </p>
          <Link to="/about/">
            <button className="btn btn-warning btn-lg">{heading}</button>
          </Link>
        </div>
      </div>
    </section>
  )
}
