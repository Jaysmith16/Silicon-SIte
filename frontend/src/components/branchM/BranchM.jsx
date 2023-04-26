import React, { useState } from 'react'
import './branchm.css'
function BranchM() {
    const [data, setData] = useState({
        id: 1,
        heading: 'B.Tech. Computer Science and Engineering',
        details: 'BTech Computer Science is a 4-year degree course offered to students at the undergraduate level. It aims to provide students with intricate knowledge of computer technologies and functional operations along with programming, coding, Web and database development.'
    })


    const sidebarData = [
        {
            id: 1,
            name: 'CSE',
            branchData: {
                id: 1,
                heading: 'B.Tech. Computer Science and Engineering',
                details: 'BTech Computer Science is a 4-year degree course offered to students at the undergraduate level. It aims to provide students with intricate knowledge of computer technologies and functional operations along with programming, coding, Web and database development.'
            }

        },
        {
            id: 2,
            name: 'ECE',
            branchData: {
                id: 2,
                heading: 'B.Tech. Electronics and Communication Engineering',
                details: 'BTech Electronics and Communication Engineering is a 4-year undergraduate course that aims to provide students with a comprehensive understanding of the functioning of electronic devices and communication systems. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
            }
        },
        {
            id: 3,
            name: 'EEE',
            branchData: {
                id: 3,
                heading: 'B.Tech. Electrical and Electronics Engineering',
                details: 'BTech Electrical and Electronics Engineering is a 4-year undergraduate course that aims to provide students with a comprehensive understanding of the functioning of electrical and electronic devices. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
            }
        },
        {
            id: 4,
            name: 'EIE',
            branchData: {
                id: 4,
                heading: 'B.Tech. Electronics and Instrumentation Engineering',
                details: 'BTech Electronics and Instrumentation Engineering is a 4-year undergraduate course that aims to provide students with a comprehensive understanding of the functioning of electronic devices and instrumentation systems. The course is designed to equip students with the necessary skills and knowledge to build a successful career in the tech industry.'
            }
        }
    ]

    return (
        <>
            <div className="container">

                <div className="row">
                    <div className="col-md-3">
                        <div class="list-group list-group-flush">
                            {
                                sidebarData.map((item) => {
                                    return (
                                        <button type="button" onClick={() => setData(item.branchData)} class="list-group-item list-group-item-action" aria-current="true">
                                            {item.name}
                                        </button>
                                    )
                                }
                                )
                            }


                        </div>
                    </div>
                    {data ? (
                        <div className="col-md-9">
                            <h5 className='heading'>
                                {data.heading}
                            </h5>
                            <p className='details'>
                                {data.details}
                            </p>

                            <h5 className='heading'>
                                Contact Us
                            </h5>
                            <div className="social-media-section">
                                <a href="http://"><i className="fab fa-facebook-f"></i></a>
                                <a href="http://"><i className="fab fa-twitter"></i></a>
                                <a href="http://"><i className="fab fa-linkedin-in"></i></a>
                                <a href="http://"><i className="fab fa-instagram"></i></a>
                                <a href="http://"><i className="fab fa-youtube"></i></a>
                            </div>
                        </div>
                    ) : "No Data"}

                </div>
            </div>
        </>
    )
}

export default BranchM