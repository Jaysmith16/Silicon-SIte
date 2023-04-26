import React from 'react'
import './footer.css'
function FooterComp() {
  return (
    <footer>
    <div className="container">
      <div className="row pad-top">
        <div className="col-md-3">
          <h5 className='sub-head-footer'>Ranking & Recognition</h5>
          <hr className='uline' />
          <ul className='link-sec'>
            <li><a  href="http://">NAAC</a></li>
            <li><a href="http://">UGC</a></li>
            <li><a href="http://">AICTE</a></li>
            <li><a href="http://">DTE</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <h5 className='sub-head-footer'>Quick Links</h5>
          <hr className='uline' />
          <ul className='link-sec'>
            <li><a href="http://">Admissions</a></li>
            <li><a href="http://">Academic Calendar</a></li>
            <li><a href="http://">Announcements</a></li>
            <li><a href="http://">Practice School</a></li>
            <li><a href="http://">Placements</a></li>
            <li><a href="http://">Webmail</a></li>
            <li><a href="http://">Campus Life</a></li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className='link-sec'>
            <li>
              <a href="http://">News</a>
            </li>
            <li>
              <a href="http://">Events</a>
            </li>
            <li>
              <a href="http://">Event Gallery</a>
            </li>
            <li>
              <a href="http://">Publications</a>
            </li>
            <li>
              <a href="http://">Mandatory Disclosure</a>
            </li>
            <li>
              <a href="http://">COVID-19 Response</a>
            </li>
            <li>
              <a href="http://">Grievance Redressal</a>
            </li>
          </ul>
        </div>
        <div className="col-md-3">
          <ul className='link-sec'>
            <li>
              <a href="http://">Policies</a>
            </li>
            <li>
              <a href="http://">Terms of Use</a>
            </li>
            <li>
              <a href="http://">Privacy Policy</a>
            </li>
            <li>
              <a href="http://">External Links</a>
            </li>
            <li>
              <a href="http://">Contact Us</a>
            </li>
          </ul>
        </div>
      </div>
      <hr className='uline mb-4' />
      <br /><br />
      <img src="https://silicon.ac.in/wp-content/themes/sit/assets/img/footer_logo.svg" alt="silicon logo" />
      <div className="row pad-btm">
        <div className="col-md-4">
          <p className='mt-4 tex'>Silicon Institute of Technology, <br />
            Silicon Hills,Patia,
            <br />
            Bhubaneswar – 751024<br />
            Odisha, India.
            </p>
        </div>
        <div className="col-md-4">
          <p className='mt-4 tex'>Phone: 9937289499/ 7381499499
            Email: info@silicon.ac.in
          </p>
          <div className="social-media">
            <a href="http://"><i className="fab fa-facebook-f"></i></a>
            <a href="http://"><i className="fab fa-twitter"></i></a>
            <a href="http://"><i className="fab fa-linkedin-in"></i></a>
            <a href="http://"><i className="fab fa-instagram"></i></a>
            <a href="http://"><i className="fab fa-youtube"></i></a>
          </div>
        </div>
        <div className="col-md-4">
          <img src="https://silicon.ac.in/wp-content/themes/sit/assets/img/sit_tech.svg" alt="silicon logo" />
          <p className='mt-4 tex'>© Silicon Institute of Technology. All rights reserved.
            Silicon Institute of Technology, Bhubaneswar, is an autonomous institute. <br /><br />
            <a href="/" className='t-dae'>Designed by Twist Open UX</a></p>
        </div>
      </div>
    </div>
  </footer>
  )
}

export default FooterComp