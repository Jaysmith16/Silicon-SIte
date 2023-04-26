import React from 'react'
import './facultyCard.css'
function FacultyCard(props) {
 
  return (
    
            <div class="team-member-blk">
              <div class="profile-img" >
                <img src={props.image}  alt="" srcset="" />
                <svg width="218" height="19" viewBox="0 0 218 19" fill="none">
                  <path d="M0 19L218 0V19H0Z" fill="#034694" />
                </svg>
              </div>
              <h4>{props.name}</h4>
              <h5>
                {props.designation}                                                     </h5>
              <p>
                <span>Computer Science and Engineering</span>
              </p>
              <a href={props.resume} target="_blank" class="read-more-link">VIEW BIO <img src="https://silicon.ac.in/wp-content/themes/sit/assets/img/right-two-arrows-black.svg"/></a>
            </div>
         
  )
}

export default FacultyCard