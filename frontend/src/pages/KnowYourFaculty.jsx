import React, { useEffect } from "react";
import FacultyCard from "../components/facultyCard/FacultyCard";
import "./common.css";
import FooterComp from "../components/footer/FooterComp";
import Jumbotron from "../components/jumbotron/Jumbotron";
import NavbarComp from "../components/navbar/NavbarComp";

const facultyData = [
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/04/Sagarika-1.jpg",
    name: "Sagarika Swain",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/FCS22210_SD.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2023/03/FCS10648_PS.jpeg",
    name: "Dr. Pulak Sahoo",
    designation: "Associate Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/07/FCS10648_Pulak_Sahoo_Profile.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/02/FCS12724-1.png",
    name: "Dr. Pamela Chaudhury",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/PC-FCS12724.pdf",
  },
  {
    image:
      "https://silicon.ac.in/wp-content/uploads/2022/12/Siba-Prasada-Tripathy.png",
    name: "Siba Prasada Tripathy",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/12/FCS22330_Siba-Prasada-Tripathy.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS05247.jpg",
    name: "TARINI CHARANA MISHRA",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/FCS05247_TCM.pdf",
  },
  {
    image:
      "https://silicon.ac.in/wp-content/uploads/2022/02/FCS22210-_Mr.-Surajit.jpg",
    name: "Surajit Das",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/FCS22210_SD.pdf",
  },
  {
    image:
      "https://silicon.ac.in/wp-content/uploads/2022/04/Subas-Chandra-Tripathy.jpg",
    name: "SUBASH CHANDRA TRIPATHY",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/05/SCT_resume.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/08/RANJIT-BEHERA.jpg",
    name: "Ranjit Kumar Behera",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/05/Ranjit_K_Behera.pdf",
  },
  {
    image:
      "https://silicon.ac.in/wp-content/uploads/2022/10/RabiNarayanMohanty.jpg",
    name: "Rabinarayan Mohanty",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/10/CSE_FCS22265_RM.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS04192.jpg",
    name: "PRADIPTA KUMAR PATTANAYAK",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/PKP-FCS04192.pdf",
  },
  {
    image:
      "https://silicon.ac.in/wp-content/uploads/2022/04/Paramita-Aryadhara-Panda.jpg",
    name: "Paramita Aryadhara Panda",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/04/Paramita-Panda_CSE.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS06301.jpg",
    name: "NIHAR RANJAN NAYAK",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/NRN_FCS06301.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/04/Jiten-Mohanty.jpg",
    name: "JITEN KUMAR MOHANTY",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/04/Jiten_Kumar_Mohanty-SCSO8449.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS07412.jpg",
    name: "MANOJ KUMAR PANDIA",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS08460.jpg",
    name: "MANOJ KUMAR SAMANTARA",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2021/06/Manoj_K_Samantara_FCS08460_CSE.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/09/Kailash.jpg",
    name: "Kailash Chandra Mishra",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/09/CSE_FCS22253_KCM.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/05/Diana_Dhal.jpg",
    name: "Ms. Diana Dhal",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/05/Diana-Dhal.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS07440.jpg",
    name: "MUKTI ROUTRAY",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/MR-FCS07440.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/09/Nayan.jpg",
    name: "Nayan Ranjan Paul",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/09/CSE_FCS22252_NRP-1.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS05259.jpg",
    name: "GOPAL KRUSHNA SAHU",
    designation: "Senior Assistant Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/05/GKS.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2022/09/Sasmita.jpg",
    name: "Dr.Sasmita Parida",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/09/Sasmita_Parida_FCS22245.pdf",
  },
  {
    image:
      "https://silicon.ac.in/wp-content/uploads/2022/12/Suvendu-C.-Nayak.jpg",
    name: "DR. Suvendu Chandan Nayak",
    designation: "Assistant Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/12/FCS22328_Suvendu_Nayak.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS11659.jpg",
    name: "DR. SUCHISMITA ROUT",
    designation: "Associate Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/04/SUCHISMITA-ROUTFCS11659.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FCS15916.png",
    name: "DR. SUDARSAN PADHY",
    designation: "Senior Professor",
    department: "Computer Science and Engineering",
    resume: "https://silicon.ac.in/wp-content/uploads/2022/04/SP-FCS15916.pdf",
  },
  {
    image: "https://silicon.ac.in/wp-content/uploads/2021/06/FAS01019.jpg",
    name: "DR. SUBHAKANTA DASH",
    designation: "Associate Professor",
    department: "Computer Science and Engineering",
    resume:
      "https://silicon.ac.in/wp-content/uploads/2022/05/FAS01019_Subhakanta-Dash.pdf",
  },
];
function KnowYourFaculty() {
  return (
    <>
      <NavbarComp />
      <Jumbotron />
      <div className="container">
        <h2 className="heading-homepage">
          Department of <br />
          Computer Science and Engineering
        </h2>
        <div className="row">
          {facultyData.map((item) => {
            return (
              <div class="col-md-4 col-sm-6 col-lg-3">
                <FacultyCard
                  image={item.image}
                  name={item.name}
                  designation={item.designation}
                  department={item.department}
                  resume={item.resume}
                />
              </div>
            );
          })}
        </div>
      </div>
      <FooterComp />
    </>
  );
}

export default KnowYourFaculty;
