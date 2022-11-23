
import React from 'react'

const Home = () => {


  return (
    <>
      <div >
        <h4 style={{ position: "relative", top: "-10px" }}> Need Help</h4>

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
            <div className='ms-1'>Home/Need Help</div>
          </div>
          <div class="card-body" style={{ backgroundColor: "#EAE9E9" }}>
            <h5>Help Section</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px", height: "200px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Frequently asked questions</h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Get quick answers to your questions</p>
                    <i className="bi bi-chat-left-text-fill" style={{ fontSize: "50px" }}></i>
                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px", height: "200px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Application Help</h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Help information for the different applications</p>
                    <i className="bi bi-grid-3x3-gap-fill" style={{ fontSize: "50px" }}></i>
                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px", height: "200px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Start Guided Tour</h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Get to know the most important portal functions</p>
                    <i className="bi bi-map-fill" style={{ fontSize: "50px" }}></i>
                  </div>
                </div>
              </div>
            </div>


            <h5>No solution found above? Feel free to contact us</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "250px", height: "200px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Contact Us</h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Use the form to contact our support team</p>
                    <i className="bi bi-person-rolodex" style={{ fontSize: "50px"}}></i>

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
