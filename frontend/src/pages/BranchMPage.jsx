import React from 'react'
import BranchM from '../components/branchM/BranchM'
import FooterComp from '../components/footer/FooterComp'
import Jumbotron from '../components/jumbotron/Jumbotron'
import NavbarComp from '../components/navbar/NavbarComp'

function BranchMPage() {
  return (
    <div>
        <NavbarComp/>
        {/* <Jumbotron/> */}
        <BranchM/>
        <FooterComp/>
    </div>
  )
}

export default BranchMPage