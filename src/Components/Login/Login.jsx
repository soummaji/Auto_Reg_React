import React from 'react'
import {useNavigate } from 'react-router-dom'

const Login = () => {

    const nav = useNavigate()
    
    const navigate = () =>{
        nav("/home")
    }

    return (
        <div>
            <div className="container">
                <div className="row align-items-center vh-100">
                    <div className="col-6 mx-auto">
                        <div className="card" style={{ "backgroundColor": "#F8F4F4" }}>
                            <div className="card-body ">
                                <h5 className="card-title d-flex flex-column align-items-center">Log On</h5>
                                <div>E-Mail</div>
                                <input className="form-control form-control-sm" type="text" />
                                <div className='mt-2'>Password</div>
                                <input className="form-control form-control-sm" type="text" />
                                    <div className="d-grid gap-2 mt-3">
                                        <button href="#" className="btn btn-danger btn-sm" onClick={navigate}>Log On</button>
                                    </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
