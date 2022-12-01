import React from 'react'
import './Application.scss'
import application from '../Data/application'
import Card from '../../Cards/Card'


const Application = () => {



  return (
    <div>
      <div >
        <h4 id="application">Application</h4>

        <div className="card border-0" >
          <div className='card-header bg-dark border border-dark' id="appli-parent-card">
            <div className='ms-1'>Application</div>
          </div>
          <div className="card-body" id="appli-parent-card-body">
            <h5>Sourcing</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {application.map((item) => {
                  return (
                    <div className="row">
                      {item.Sourcing.map((data) => {
                        return (
                          <Card Name={data.Name} Desc={data.Desc} Access={data.Access} Button={data.Button}></Card>)
                      })}</div>
                  )
                })}
              </div>
            </div>

            <h5>Logistics</h5>
            <div className="mx-auto ms-2 me-2">
              <div className='row'>
                {application.map((item) => {
                  return (
                    <div className='row'>
                      {item.Logistics.map((data) => {
                        return (
                          <>{data.Enabled === true ? (<div className="card border-0 col-md-3 me-3 mt-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card-2" >
                            <div className="card-body">
                              <h6 className="position-absolute top-0 start-0 mt-2 ms-3 ">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                              <p className="mt-2">{data.Desc}</p><br /><br />
                              {data.Button === "Open" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                                <button className="btn btn-danger">
                                  Open
                                </button>
                              </div>) : ("")}
                            </div>
                          </div>) : (<div className="card col-md-3 me-3 mt-3 p-3 mb-5" id="appli-child-card-2" style={{ background: "#dddddd" }} >
                            <div className="card-body">
                              <h6 className="position-absolute top-0 start-0 mt-2 ms-3 ">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                              <p className="mt-2">{data.Desc}</p><br /><br />
                              <div className='position-absolute bottom-0 start-0 mb-3 ms-3' style={{fontSize:"13px", color:"gray"}}><i class="bi bi-file-earmark-lock2" style={{fontSize:"30px"}}></i> Not enabled for this supplier</div>
                              {data.Button === "Open" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                                <button className="btn btn-danger">
                                  Open
                                </button>
                              </div>) : ("")}
                            </div>
                          </div>)}
                          </>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
            <h5>Quality</h5>
            <div className="mx-auto ms-2 me-2">
              <div className='row'>
                {application.map((item) => {
                  return (
                    <div className='row'>
                      {item.Quality.map((data) => {
                        return (
                          <>{data.Enabled === true ? (<div className="card border-0 col-md-3 me-3 mt-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card-2" >
                            <div className="card-body">
                              <h6 className="position-absolute top-0 start-0 mt-2 ms-3 ">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                              <p className="mt-2">{data.Desc}</p><br /><br />
                              {data.Button === "Start" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                              <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                                 Start
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                                <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                              </ul>
                              </div>) : data.Button === "Open" ? (<button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>)
                              : ("")}
                              {data.Access === "Green" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                              <i className="bi bi-circle-fill me-1" id="grey"></i>
                              <i className="bi bi-circle-fill" id="green"></i></div>
                            ) : data.Access === "Red" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="red" ></i>
                              <i className="bi bi-circle-fill me-1" id="grey"></i>
                              <i className="bi bi-circle-fill" id="grey"></i></div>

                            ) : data.Access === "Orange" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                              <i className="bi bi-circle-fill me-1" id="orange"></i>
                              <i className="bi bi-circle-fill" id="grey"></i></div>)
                              : ("")}
                            </div>
                          </div>) : (<div className="card col-md-3 me-3 mt-3 p-3 mb-5" id="appli-child-card-2" style={{ background: "#dddddd" }} >
                            <div className="card-body">
                              <h6 className="position-absolute top-0 start-0 mt-2 ms-3 ">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                              <p className="mt-2">{data.Desc}</p><br /><br />
                              <div className='position-absolute bottom-0 start-0 mb-3 ms-3' style={{fontSize:"13px", color:"gray"}}><i class="bi bi-file-earmark-lock2" style={{fontSize:"30px"}}></i> Not enabled for this supplier</div>
                              {data.Button === "Open" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                                <button className="btn btn-danger">
                                  Start
                                </button>
                              </div>) : ("")}
                            </div>
                          </div>)}
                          </>
                        )
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
            <h5>Marketing</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {application.map((item) => {
                  return (
                    <div className="row">
                      {item.Marketing.map((data) => {
                        return (<div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2">{data.Desc}</p><br /><br />

                            {data.Button === "Start" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                              <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                                Start
                              </button>
                              <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                                <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                              </ul>
                            </div>) : data.Button === "Open" ? (<button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>)
                              : ("")}


                            {data.Access === "Green" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                              <i className="bi bi-circle-fill me-1" id="grey"></i>
                              <i className="bi bi-circle-fill" id="green"></i></div>
                            ) : data.Access === "Red" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="red" ></i>
                              <i className="bi bi-circle-fill me-1" id="grey"></i>
                              <i className="bi bi-circle-fill" id="grey"></i></div>

                            ): data.Access === "Yellow" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                            <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                            <i className="bi bi-circle-fill me-1" id="yellow"></i>
                            <i className="bi bi-circle-fill" id="grey"></i></div>

                            ): data.Access === "Orange" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                              <i className="bi bi-circle-fill me-1" id="orange"></i>
                              <i className="bi bi-circle-fill" id="grey"></i></div>)
                              : ("")}

                          </div>
                        </div>)
                      })}</div>
                  )
                })}
              </div>
            </div>
            <h5>Collaboration</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {application.map((item) => {
                  return (
                    <div className="row">
                      {item.Collaboration.map((data) => {
                        return (<div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2">{data.Desc}</p><br /><br />

                            {data.Button === "Start" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                              <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                                Start
                              </button>
                              <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                                <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                              </ul>
                            </div>) : data.Button === "Open" ? (<button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>)
                              : ("")}

                            {data.Access === "Green" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                              <i className="bi bi-circle-fill me-1" id="grey"></i>
                              <i className="bi bi-circle-fill" id="green"></i></div>
                            ) : data.Access === "Red" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="red" ></i>
                              <i className="bi bi-circle-fill me-1" id="grey"></i>
                              <i className="bi bi-circle-fill" id="grey"></i></div>

                            ) : data.Access === "Orange" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                              <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                              <i className="bi bi-circle-fill me-1" id="orange"></i>
                              <i className="bi bi-circle-fill" id="grey"></i></div>)
                              : ("")}

                          </div>
                        </div>)
                      })}</div>
                  )
                })}
              </div>
            </div>
            <h5>Engineering</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {application.map((item) => {
                  return (
                    <div className="row">
                      {item.Engineering.map((data) => {
                        return (<div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2">{data.Desc}</p><br /><br />

                          </div>
                        </div>)
                      })}</div>
                  )
                })}
              </div>
            </div>
            <h5>Supplier Management</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {application.map((item) => {
                  return (
                    <div className="row">
                      {item.Supplier.map((data) => {
                        return (<div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2">{data.Desc}</p><br /><br />

                          </div>
                        </div>)
                      })}</div>
                  )
                })}
              </div>
            </div>
            <h5>Purchasing</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {application.map((item) => {
                  return (
                    <div className="row">
                      {item.Purchasing.map((data) => {
                        return (<div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="appli-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name} <i className="bi bi-info-circle small"></i></h6>
                            <p className="mt-2">{data.Desc}</p><br /><br />

                          </div>
                        </div>)
                      })}</div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Application
