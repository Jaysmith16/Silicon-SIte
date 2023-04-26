import React from 'react'
import './login.css'
import { Link } from 'react-router-dom';
function LoginComp() {
    return (
        <>
            <div className="card mt-4 login-card">
                <div className="card-body">
                    <h5 className="card-title">Login</h5>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className='label'>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>
                        <div className="form-group mt-1">
                            <label for="exampleInputPassword1" className='label'>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <br />
                        <button type="submit" className="btn btn-primary-submit">Login</button>
                    </form>
                </div>
                <div className="card-footer-sec">
                    <div className="d-flex justify-content-center links">
                        Don't have an account?<Link to='/signup'>Sign Up</Link>
                    </div>

                </div>
            </div>
        </>

    )
}

export default LoginComp