import React from "react";
import "./style.css";
import Time from "./Time.jpg";
import Pulak from "./PulakSir.jpg"
import Lalit from "./Lalit.jpg"
import Akash from "./Akash.jpg"
import Jaysmith from "./Jaysmith.jpg"
import Chinu from "./Chinu.jpg"
function About() {
  return (
    <div>
      <div className="company">
        <div className="img1">
          <img src={Time} alt="" />
        </div>
        <div className="company-info">
          <span>
            SMART SEMESTER SUBJECT AND LOAD ALLOCATION USING{" "}
            <span className="our">MACHINE LEARNING APPROCHES</span>
          </span>
          <p>
            <p className="motivation">
              The main motivation of this project is to automatically generate
              Academic Subject & load allocation to faculties as and when
              required by educational institutes using the popular KNN
              clustering technique.This project is aimed at automating the
              manual subject & load allocation process followed in Educational
              Institutes twice every year.
            </p>
            <br />
          </p>
          <br />
        </div>
      </div>
      <div className="team">
        <span>OUR TEAM</span>
      </div>
      <div className="container1">
        <div className="card1">
          <div className="card-image1 ">
            <img src={Pulak} alt="" />
          </div>
          <div className="card-info1">
            <h3 className="card-title1 ">
              <span>
                Dr. Pulak <span className="yellow-surname">Sahoo</span>
              </span>
            </h3>
            <p className="card-description ">
              <span className="personal-info">
                <span className="info">Group Guide</span> <br />
                Associate Proffesor <br />
                Silicon Institue of Technology, BBSR <br />
                Email:{" "}
                <a href="mailto:'yashfalke77@gmail.com'">
                  pulak.sahoo@silicon.ac.in
                </a>
              </span>
            </p>
            <div className="card-mediaIcons">
            <a href="https://www.linkedin.com/in/dr-pulak-sahoo-95b7aa/" class="loading" target="on_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="loading" target="on_blank"><i class="fab fa-github"></i></a>
                        <a href="#" class="loading" target="on_blank"><i
                                class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="card-image1 ">
            <img src={Jaysmith} alt="" />
          </div>
          <div className="card-info1">
            <h3 className="card-title1 ">
              <span>
                Jaysmith <span className="yellow-surname">Sarthak</span>
              </span>
            </h3>
            <p className="card-description ">
              <span className="personal-info">
                <span className="info">Backend & ML Developer</span> <br />
                Pursuing Computer Science & Engineering (SIT Bhubaneswar) <br />
                Email:{" "}
                <a href="mailto:'yashfalke77@gmail.com'">
                  jaysmithsarthak@gmail.com
                </a>
              </span>
            </p>
            <div className="card-mediaIcons">
            <a href="https://www.linkedin.com/in/jaysmith-sarthak-677a481a2/" class="loading" target="on_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/Jaysmith16" class="loading" target="on_blank"><i class="fab fa-github"></i></a>
                        <a href="https://www.instagram.com/s_h_i_l_d_u_l_t_r_o_n/" class="loading" target="on_blank"><i
                                class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="card-image1 ">
            <img src={Akash} alt="" />
          </div>
          <div className="card-info1">
            <h3 className="card-title1 ">
              <span>
                Akash <span className="yellow-surname">Jena</span>
              </span>
            </h3>
            <p className="card-description ">
              <span className="personal-info">
                <span className="info">Frontend Developer</span> <br />
                Pursuing Computer Science & Engineering (SIT Bhubaneswar) <br />
                Email:{" "}
                <a href="mailto:'yashfalke77@gmail.com'">
                  akashjena308@gmail.com
                </a>
              </span>
            </p>
            <div className="card-mediaIcons">
            <a href="#" class="loading" target="on_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="loading" target="on_blank"><i class="fab fa-github"></i></a>
                        <a href="#" class="loading" target="on_blank"><i
                                class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>

        <div className="card1">
          <div className="card-image1 ">
            <img src={Lalit} alt="" />
          </div>
          <div className="card-info1">
            <h3 className="card-title1 ">
              <span>
                Lalitkanta <span className="yellow-surname">Behera</span>
              </span>
            </h3>
            <p className="card-description ">
              <span className="personal-info">
                <span className="info">Figma Designer</span> <br />
                Pursuing Computer Science & Engineering (SIT Bhubaneswar) <br />
                Email:{" "}
                <a href="mailto:'yashfalke77@gmail.com'">
                  beheralalit13@gmail.com
                </a>
              </span>
            </p>
            <div className="card-mediaIcons">
            <a href="https://www.linkedin.com/in/lalit-behera-0a089b1a1" class="loading" target="on_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="#" class="loading" target="on_blank"><i class="fab fa-github"></i></a>
                        <a href="https://instagram.com/lalit_behera_?igshid=ZDdkNTZiNTM=" class="loading" target="on_blank"><i
                                class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="card1">
          <div className="card-image1 ">
            <img src={Chinu} alt="" />
          </div>
          <div className="card-info1">
            <h3 className="card-title1 ">
              <span>
                Chinmaya <span className="yellow-surname">Khatua</span>
              </span>
            </h3>
            <p className="card-description ">
              <span className="personal-info">
                <span className="info">Frontend Developer</span> <br />
                Pursuing Computer Science & Engineering (SIT Bhubaneswar) <br />
                Email:{" "}
                <a href="mailto:'harshsunwani11@gmail.com'">
                  chinmaya6789@gmail.com
                </a>
              </span>
            </p>
            <div className="card-mediaIcons">
            <a href="https://www.linkedin.com/in/chinmaya-khatua-6aa8571a0/" class="loading" target="on_blank"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/chinmaya8328" class="loading" target="on_blank"><i class="fab fa-github"></i></a>
                        <a href="#" class="loading" target="on_blank"><i
                                class="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
