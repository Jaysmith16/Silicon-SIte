import React from 'react'
import FacultyM from '../components/FacultyM/FacultyM'
import FooterComp from '../components/footer/FooterComp'
import Jumbotron from '../components/jumbotron/Jumbotron'
import NavbarComp from '../components/navbar/NavbarComp'

function AllocationPage() {
  return (
    <div>
        <NavbarComp/>
        {/* <Jumbotron/> */}
        <FacultyM/>
        
        <FooterComp/>
    </div>
  )
}

export default AllocationPage