import React from "react";
import About from "../components/AboutUs/aboutus";
import NavbarComp from "../components/navbar/NavbarComp";
import FooterComp from "../components/footer/FooterComp";

function AboutUsPage(){
    return (
        <div>
        <NavbarComp/>
        <About/>
        <FooterComp/>
        </div>
        )
}
export default AboutUsPage;