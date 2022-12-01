
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
                    <Card Name={item.Name} Desc={item.Desc} Button={item.Button} Access={item.Access} Enabled={item.Enabled} />)
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
