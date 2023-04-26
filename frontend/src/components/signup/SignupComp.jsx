import React from 'react'
import './signup.css'
import { Link } from 'react-router-dom';
function SignupComp() {
    return (
        <>
            <div className="card mt-4 login-card">
                <div className="card-body">
                    <h5 className="card-title">Signup</h5>
                    <form>
                        <div className="form-group">
                            <label for="exampleInputEmail1" className='label'>Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />

                        </div>
                        <div className="form-group mt-1">
                            <label for="exampleInputPassword1" className='label'>Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group mt-1">
                            <label for="exampleInputPassword1" className='label'> Confirm Password</label>
                            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <br />

                        <button type="submit" className="btn btn-primary-submit">Signup</button>
                    </form>
                </div>


                <div className="card-footer-sec">
                    <div className="d-flex justify-content-center links">
                        Have an account?<Link to='/login'>Sign in</Link>
                    </div>

                </div>
            </div>
        </>

    )
}

export default SignupComp