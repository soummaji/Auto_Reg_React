
import React from 'react'
import './UserManagement.scss'
import userManagement from '../Data/userManagement'

const Home = () => {


  return (
    <>
      <div >
        <h4 id="userManagement"> User Management</h4>
        <div className="card border-0" >
          <div className='card-header bg-dark border border-dark' id="user-parent-card-header">
            <div className='ms-1'>Home / User Management</div>
          </div>
          <div className="card-body" id="user-parent-card-body">
            <h5>New Users</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {userManagement.map((item) => {
                  return (
                    <>{item.newUsers.map((data) => {
                      return (
                        <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="user-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2">{data.Desc}</p><br /><br />
                            <i className="bi bi-person-check-fill" ></i>
                          </div>
                        </div>
                      )
                    })}</>
                  )
                })}

                {/* <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="user-child-card">
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Onboarding Requests <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2">Review Onboarding requests of new users</p><br /><br />
                    <i className="bi bi-person-check-fill" ></i>
                  </div>
                </div> */}

                {/* <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="user-child-card">
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Invite Users <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" >Onboard new users</p>
                    <i class="bi bi-person-plus-fill"></i>
                  </div>
                </div> */}

              </div>
            </div>
          </div>
          <div className="card-body" style={{ backgroundColor: "#EAE9E9" }}>
            <h5>Manage Users with existing account</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                {userManagement.map((item) => {
                  return (
                    <>{item.manageUsers.map((data) => {
                      return (
                        <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="user-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2" >{data.Desc}</p><br /><br />
                            <i className="bi bi-person-fill-gear" ></i>
                          </div>
                        </div>
                      )
                    })}</>
                  )
                })}

                {/* <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="user-child-card">
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Role Requests <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" >Review Role requests of existing users</p><br /><br />
                    <i class="bi bi-person-fill-gear" ></i>
                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="user-child-card" >
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Lock-Unlock users <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" >Enable/disable login for the users to the portal</p>
                    <i class="bi bi-person-fill-lock" ></i>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
