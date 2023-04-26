import React from 'react'
import './jumbo.css'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
function Jumbotron() {

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       {/* write a good quote */}
                        <h1 className="heading-quote">
                            <span className="heading-span">Silicon Institute of Technology</span>
                        </h1>
                        <p className="details-quote">
                            Silicon Institute of Technology is a private engineering college located in Bhubaneswar, Odisha, India. It was established in 2001 by Silicon Institute of Technology Society. The college is affiliated to Biju Patnaik University of Technology and approved by All India Council for Technical Education.
                        </p>

                   
                    </div>
                    <div className="col-md-6">
                        <Carousel autoPlay={true}
                            infiniteLoop={true}
                            showThumbs={false}
                            showStatus={false}
                            showIndicators={false}
                            showArrows={false}
                            className="carousel"
                        >
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/fc14c6223594aad45e300e3310434efc.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/6b621759c597db2e8de4c2cd9d415def.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/73dc053745113cf2d2c2c9fd17054ee5.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/82129f95f0243b225091cb515171135e.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/97495b6f86e56c38bad3e50093b069cb.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/6b621759c597db2e8de4c2cd9d415def.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/6b621759c597db2e8de4c2cd9d415def.jpg" />

                            </div>
                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/fdaf7cdc16bfb53afa219cb03e24b465.jpg" />

                            </div>

                            <div>
                                <img src="https://erp.silicon.ac.in/estcampus/images/slider/a6c86038b71f8515873994465eb312c2.jpg" />

                            </div>

                        </Carousel>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Jumbotron