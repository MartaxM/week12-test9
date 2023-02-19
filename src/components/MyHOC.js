import React from 'react'

const MyHOC = (OriginalComponent, props) => {
  return (
    <div className="wrapper"><OriginalComponent  name = {props.name} {...props}/></div>
  )
}

export default MyHOC;