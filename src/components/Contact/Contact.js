import React from "react"
import Heading from "../Reuseable/Heading"

export default function Contact() {
  const formSpreeAction = "https://formspree.io/f/" + process.env.FORM_ID
  return (
    <section className="py-3">
      <Heading title="Contact Us" />
      <div className="col-10 col-sm-8 mx-auto">
        <form action={formSpreeAction} method="POST">
          <div className="form-group">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Your Name"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your Email"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Your Phone"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Your message"
              className="form-control"
            />
          </div>
          <button type="submit" className="btn btn-outline-info btn-block">
            Submit
          </button>
        </form>
      </div>
    </section>
  )
}
