
import React from 'react'
import './Help.scss'
import help from '../Data/help'

const Home = () => {


  return (
    <>
      <div >
        <h4 id="help"> Need Help</h4>

        <div className="card border-0"  >
          <div className='card-header bg-dark border border-dark' id="help-parent-card-header">
            <div className='ms-1'>Home / Need Help</div>
          </div>
          <div class="card-body" id="help-parent-card-body">
            <h5>Help Section</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                {help.map((item) => {
                  return (
                    <>{item.helpSection.map((data) => {
                      return (<div class="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="help-child-card">
                        <div className="card-body">
                          <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{data.Name}</h6>
                          <p className="mt-2">{data.Desc}</p>
                          <i className="bi bi-chat-left-text-fill"></i>
                        </div>
                      </div>)
                    })}</>
                  )
                })}

                {/*<div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="help-child-card">
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Application Help</h6>
                    <p className="mt-2" >Help information for the different applications</p>
                    <i className="bi bi-grid-3x3-gap-fill"></i>
                  </div>
                </div>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="help-child-card">
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Start Guided Tour</h6>
                    <p className="mt-2" >Get to know the most important portal functions</p>
                    <i className="bi bi-map-fill" ></i>
                  </div>
                </div> */}
              </div>
            </div>


            <h5>No solution found above? Feel free to contact us</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">
                {help.map((item) => {
                  return (<>
                    {item.noSolution.map((data) => {
                      return (
                        <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="help-child-card">
                          <div className="card-body">
                            <h6 className="position-absolute top-0 start-0 ms-3 mt-2">Contact Us</h6>
                            <p className="mt-2" >Use the form to contact our support team</p>
                            <i className="bi bi-person-rolodex" ></i>
                          </div>
                        </div>
                      )
                    })}</>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
