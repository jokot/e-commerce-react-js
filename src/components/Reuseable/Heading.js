import React from "react"

export default function Heading({ title }) {
  return (
    <div>
      <div className="col text-center mb-4 text-black">
        <h1 className="display-3">{title}</h1>
      </div>
    </div>
  )
}
