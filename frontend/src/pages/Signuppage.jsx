import React from 'react'
import SignupComp from '../components/signup/SignupComp'


function Signuppage() {
    return (
        <div className='App'>
            <div className="container bg-clor">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <br /><br /><br />
                        <SignupComp/>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Signuppage