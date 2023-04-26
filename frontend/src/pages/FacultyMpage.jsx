import React from 'react'

import FooterComp from '../components/footer/FooterComp'
import Jumbotron from '../components/jumbotron/Jumbotron'
import NavbarComp from '../components/navbar/NavbarComp'
import Allocation from '../components/allocation/Allocation'

function FacultyMpage() {
  return (
    <div>
        <NavbarComp/>
        {/* <Jumbotron/> */}
        <Allocation/>
        <FooterComp/>
    </div>
  )
}

export default FacultyMpage