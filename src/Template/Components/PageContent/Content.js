import React from 'react'
import ProjectSection from './ProjectSection'
import About from './About'
import Contact from './Contact'
import MapImage from './MapImage'

function Content() {
  return (
    <>
        <div className="w3-content w3-padding" style={{maxWidth:1564}}>
        <ProjectSection />
        <About />
        <Contact />
        <MapImage />
        </div>
    </>
  )
}

export default Content