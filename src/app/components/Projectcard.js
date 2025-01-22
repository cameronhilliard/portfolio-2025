import React from 'react'
import Image from 'next/image'

const Projectcard = ({project, description, cardheader, cardstyles}) => {
  return (
    <div className={cardstyles}>
        <h2 className={cardheader}>{project}</h2>
        <p>{description}</p>
    </div>
  )
}

export default Projectcard