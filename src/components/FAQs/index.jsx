import React from "react"

function Faq({ title, description }) {
  return (
    <div
      tabIndex={0}
      className="collapse collapse-arrow lg:w-1/2 w-full bg-dark-100"
    >
      <h1 className="collapse-title text-lg">{title}</h1>
      <div className="collapse-content">
        <p className="text-md font-light">{description}</p>
      </div>
    </div>
  )
}

export default Faq
