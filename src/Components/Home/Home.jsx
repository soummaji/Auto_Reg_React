import React from 'react'

const Home = () => {
  return (
    <div className="container">
    <div className="row align-items-center vh-100">
    <div className="col-5 mx-auto">
    <div class="card">
    <div class="card-header">
      Home
    </div>
    <div class="card-body">
      <h5 class="card-title">My Applications</h5>
      <div class="row">
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Astras</h5>
        <p class="card-text">Request for quotation</p>
        <a href="#" class="btn btn-primary">Start</a>
      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Foreign Trade Zone</h5>
        <p class="card-text">Manual creation FTZ documents by service-provider</p>
        <a href="#" class="btn btn-primary">Open</a>
      </div>
    </div>
  </div>
</div>
    </div>
  </div>
  </div>
  </div></div>
  )
}

export default Home
