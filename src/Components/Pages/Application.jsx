import React from 'react'
import './Application.scss'


const Application = () => {
  return (
    <div>
      <>
        <div >
          <h4 id="application">Application</h4>
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
            <div className='card-header bg-dark border border-dark' id="appli-parent-card">
              <div className='ms-1'>Application</div>
            </div>
            <div class="card-body" id="appli-parent-card-body">
              <h5>Sourcing</h5>
              <div className="mx-auto ms-2 me-2">
                <div className="row">
                  <div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                    <div className="card-body">
                      <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Astras <i class="bi bi-info-circle small"></i></h6>
                      <p className="mt-2">Request for quotation</p><br /><br />

                      <div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                        <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                          Start
                        </button>
                        <ul className="dropdown-menu dropdown-menu-dark">
                          <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                          <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                        </ul>
                      </div>

                      <div class="position-absolute bottom-0 start-0  mb-3 ms-3">
                        <i class="bi bi-circle me-1"></i>
                        <i class="bi bi-circle me-1"></i>
                        <i class="bi bi-circle"></i></div>

                    </div>
                  </div>

                  <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                    <div className="card-body">
                      <h6 className="position-absolute top-0 start-0 mt-2 ms-3">BCN_Extended <i class="bi bi-info-circle small"></i></h6>
                      <p className="mt-2">SharePoint cooperation platform by Brose Group</p>
                      <div class="position-absolute bottom-0 start-0  mb-3 ms-3">
                        <i class="bi bi-circle me-1"></i>
                        <i class="bi bi-circle me-1"></i>
                        <i class="bi bi-circle"></i></div>
                    </div>
                  </div>
                </div>
              </div>

              <h5>Logistics</h5>
              <div className="mx-auto ms-2 me-2">
                <div className='row'>
                  <div className="card border-0 col-md-3 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card-2" >
                    <div className="card-body">
                      <h6 className="position-absolute top-0 start-0 mt-2 ms-3 ">Foreign Trade Zone <i class="bi bi-info-circle small"></i></h6>
                      <p className="mt-2">Manual creation FTZ documents by service-provider</p><br /><br />
                      <div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                        <button className="btn btn-danger">
                          Open
                        </button>
                      </div>


                    </div>
                  </div>

                  <div className="card col-md-3 me-3 my-3 p-3 mb-5" id="appli-child-card-2" style={{ background: "#dddddd" }}>
                    <div className="card-body">
                      <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Claim Processing 8D</h6>
                      <p className="mt-2">8D processing supplier</p><br /><br />
                    </div>
                  </div>

                  <div className="card col-md-3 me-3 my-3 p-3 mb-5" id="appli-child-card-2" style={{ background: "#dddddd" }}>
                    <div className="card-body">
                      <h6 className="position-absolute top-0 start-0 ms-3 mt-2">BroCAR</h6>
                      <p className="mt-2">Exchange between Brose and its carriers of invoice information.</p><br /><br />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  )
}

export default Application
