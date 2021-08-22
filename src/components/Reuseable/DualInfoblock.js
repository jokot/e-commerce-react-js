import React from "react"
import Heading from "./Heading"
import { Link } from "gatsby"

export default function DualInfoblock({ heading, img }) {
  return (
    <section className="my-4 py-4 bg-theme">
      <div className="container">
        <Heading title={heading} textColor="text-white" />
        <div className="row">
          <div className="col-8 mx-auto">
            <p className="lead text-white mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
              quia fugiat expedita, non provident similique rem amet placeat
              voluptatibus possimus repudiandae ratione veniam sint accusamus!
              Eum quod eos culpa, quaerat nemo nam, facilis architecto similique
              reprehenderit labore, repellendus quasi ratione minus ullam iusto
              beatae deleniti iste temporibus excepturi sit nesciunt? Lorem
              ipsum dolor sit amet consectetur, adipisicing elit. Numquam
              nesciunt, corrupti est necessitatibus et minus dolorum voluptas
              eaque commodi ipsum, nulla nisi porro illum neque aliquid earum ut
              quod! Saepe, incidunt nulla cupiditate ipsum deleniti sed in
              tempora dolores corrupti harum quaerat magnam at odio nemo
              eveniet. Magni at neque animi quibusdam assumenda? Distinctio
              voluptatem pariatur ipsa libero magni. Asperiores, eveniet soluta
              id esse neque beatae ipsam ducimus minima nulla excepturi sint
              corporis, non quia quasi. Tenetur unde exercitationem molestias
              natus, esse quas eaque inventore id ipsa quibusdam totam
              accusantium nihil velit a provident. Quasi magni atque hic
              repellat iusto.
            </p>
          </div>
          <div className="col-4">
            <div className="card">
              <img src={img} className="card-img-top" alt="image goes here" />
              <div className="card-body">
                <h5 className="card-title">Just click photos</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam, magnam maxime eligendi aut quos ex pariatur quisquam
                  quo magni voluptas reprehenderit assumenda eius suscipit esse,
                  laborum fuga ad ipsam atque!
                </p>
                <Link to="#" className="btn btn-warning btn-block">
                  {heading}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
