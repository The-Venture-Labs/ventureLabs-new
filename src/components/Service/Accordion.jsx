import React from 'react'

const { useState } = React

const minusIcon = '-'
const plusIcon = '+'

function Accordion({ title, content }) {
  const [expanded, setExpanded] = useState(false)
  const toggleExpanded = () => setExpanded((current) => !current)

  return (
    <div className="my-2 sm:my-4 md:my-6 shadow-sm cursor-pointer bg-black rounded-2xl" onClick={toggleExpanded}>
      <div className="px-6 text-left items-center h-20 select-none flex justify-between flex-row text-white font-semibold">
        <h5 className="flex-1">
          {title}
        </h5>
        <div className="flex-none pl-2">{expanded ? minusIcon : plusIcon}</div>
      </div>
      <div className={`px-6 pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${expanded ? "max-h-40" : "max-h-0"}`}>
        <p className="pb-4 text-left text-white font-semibold lg:pr-80">
          {content}
        </p>
      </div>
    </div>
  )
}

export default Accordion