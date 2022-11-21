
import React from 'react'

const Home = () => {


  return (
    <>
      <div >
        <h4 style={{ position: "relative", top: "-10px" }}> Home</h4>

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
            <div className='ms-1'>Home</div>
          </div>
          <div class="card-body" style={{ backgroundColor: "#EAE9E9" }}>
            <h5>My Applications</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "350px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Astras <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Request for quotation</p><br /><br />

                    <div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                      <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                        Start
                      </button>
                      <ul className="dropdown-menu dropdown-menu-dark">
                        <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                        <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                      </ul>
                    </div>

                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" style={{ width: "350px" }}>
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Foreign Trade Zone <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2" style={{ marginLeft: "-20px" }}>Manual creation FTZ documents by service-provider</p>
                    <button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>
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
