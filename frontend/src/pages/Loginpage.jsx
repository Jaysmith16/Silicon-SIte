import React from 'react'
import LoginComp from '../components/login/LoginComp'

function Loginpage() {
    return (
        <div className='App'>
            <div className="container bg-clor">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <br /><br /><br />
                        <LoginComp />
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </div>
    )
}

export default Loginpage