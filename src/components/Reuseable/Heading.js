import React from "react"

export default function Heading({ title, textColor }) {
  const textClassName = "col text-center mb-4 " + textColor
  return (
    <div>
      <div className={textClassName}>
        <h1 className="display-3">{title}</h1>
      </div>
    </div>
  )
}
