import React from 'react'

const Card = (props) => {
    return (
        <div className="mx-auto ms-2 me-2">
            <div className='row'>
                <div className="card border-0 col-md-5 me-3 my-3 shadow p-3 mb-5 bg-body rounded" id="home-child-card">
                    <div className="card-body">
                        <h6 className="position-absolute top-0 start-0 ms-3 mt-2">{props.Name} <i className="bi bi-info-circle small"></i></h6>
                        <p className="mt-2">{props.Desc}</p><br /><br />


                        {props.Button == "start" ? (<div className="btn-group position-absolute bottom-0 end-0 mx-2 my-2">
                            <button className="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown">
                                Start
                            </button>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="#">Astras app link 1 </a></li>
                                <li><a className="dropdown-item" href="#">Astras app link 2 </a></li>
                            </ul>
                        </div>
                        ) : (<button className='btn btn-danger position-absolute bottom-0 end-0 mx-2 my-2'>Open</button>)}

                        {props.Access == "Green" ? (<div className="position-absolute bottom-0 start-0  mb-3 ms-3" >
                            <i className="bi bi-circle-fill me-1 " id="grey" ></i>
                            <i className="bi bi-circle-fill me-1" id="grey"></i>
                            <i className="bi bi-circle-fill" id="green"></i></div>) : (
                            ""
                        )}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
