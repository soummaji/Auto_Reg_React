
import React from 'react'
import './Home.scss'
import home from '../Data/home.js'
import Card from '../../Cards/Card'
const Home = () => {


  return (
    <>
      <div >
        <h4 id="home" > Home</h4>

        <div className="card border-0" >
          <div className='card-header bg-dark border border-dark' id="home-parent-card-header" >
            <div className='ms-1'>Home</div>
          </div>
          <div className="card-body" id="home-parent-card-body">
            <h5>My Applications</h5>
            <div className="mx-auto ms-2 me-2">
              <div className="row">

                {home.map((item) => {
                  return (
                    <Card Name={item.Name} Desc={item.Desc} Button={item.Button} Access={item.Access} />

                    //     <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="home-child-card">
                    //     <div className="card-body">
                    //         <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{item.Name} <i className="bi bi-info-circle small"></i></h6>
                    //         <p className="mt-2">{item.Desc}</p><br /><br />


                    //         {item.Button == "start" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                    //             <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                    //                 Start
                    //             </button>
                    //             <ul className="dropdown-menu dropdown-menu-dark">
                    //                 <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                    //                 <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                    //             </ul>
                    //         </div>
                    //         ) : (<button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>)}

                    //         {item.Access == "Green" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                    //             <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                    //             <i className="bi bi-circle-fill me-1" id="grey"></i>
                    //             <i className="bi bi-circle-fill" id="green"></i></div>) : (
                    //             ""
                    //         )}

                    //     </div>
                    // </div>
                  )
                })}



                {/* <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="homechild-card">
                  <div className="card-body">
                    <h6 className="position-absolute top-0 start-0 mt-2 ms-3">Foreign Trade Zone <i class="bi bi-info-circle small"></i></h6>
                    <p className="mt-2">Manual creation FTZ documents by service-provider</p>
                    <button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>
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
