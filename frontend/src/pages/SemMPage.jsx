import React from 'react'
import FooterComp from '../components/footer/FooterComp'
import Jumbotron from '../components/jumbotron/Jumbotron'
import NavbarComp from '../components/navbar/NavbarComp'
import SemM from '../components/semM/SemM'

function SemMPage() {
  return (
    <div>
        <NavbarComp/>
        {/* <Jumbotron/> */}
        <SemM/>
        <FooterComp/>
    </div>
  )
}

export default SemMPage