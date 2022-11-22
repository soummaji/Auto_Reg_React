
import React from 'react'

const Home = () => {


  return (
    <>
      <div >
        <h4 style={{ position: "relative", top: "-10px" }}> User Management</h4>

        <div className="btn-group position-absolute top-0 end-0 mx-4 my-2 dropdown-center">
          <button className="btn bg-transparent dropdown-toggle border-0" data-bs-toggle="dropdown">
            (Schenker Deutschland AG - ABSZZ8A175)
          </button>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="#">link 1 </a></li>
            <li><a className="dropdown-item" href="#">link 2 </a></li>
            <li><hr class="dropdown-divider" /></li>
            <li><a className="dropdown-item" href="/">Sign Out </a></li>
          </ul>
        </div>

        <div className="card border-0" >
          <div className='card-header bg-dark border border-dark' style={{ position: "relative", color: "#F3F2F2" }}>
            <div className='ms-1'>Home / User Management</div>
          </div>
          <div class="card-body" style={{ backgroundColor: "#EAE9E9" }}>
            <h5>New Users</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Onboarding Requests <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Review Onboarding requests of new users</p><br /><br />


                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Invite Users <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Onboard new users</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-body" style={{ backgroundColor: "#EAE9E9" }}>
            <h5>Manage Users with existing account</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Role Requests <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Review Role requests of existing users</p><br /><br />


                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Lock-Unlock users <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Enable/disable login for the users to the portal</p>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
