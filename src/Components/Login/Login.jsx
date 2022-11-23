import React from 'react'
import { useNavigate } from 'react-router-dom'
import img from '../../images/brose-login.png'
import './Login.scss'

const Login = () => {

  const nav = useNavigate()

  const navigate = () => {
    nav("/home")
  }

  return (
    <div>
      <div className='text-center mx-auto mt-5 mb-4'>
        <img src={img} id="login-img" />
      </div>

      <div className="container">
        <div className="row align-items-center vh-100">
          <div className="col-8 mx-auto">
            <div className="card border-0" id="login-card">
              <div className="card-body ">
                <div className='container col-7 mt-3'>
                  <h3 className="card-title text-center">Log On</h3>
                  <div>E-Mail</div>
                  <input className="form-control form-control-sm shadow " type="email" />
                  <div className='mt-2'>Password</div>
                  <input className="form-control form-control-sm shadow" type="password" />

                  <div className='mt-2'>
                    <input className="form-check-input" type="checkbox" />
                    <label className="form-check-label ms-1">
                      Remember me
                    </label>
                  </div>


                  <div className="d-grid gap-2 mt-3">
                    <button className="btn btn-danger btn-sm" onClick={navigate}>Log On</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login
