import React from 'react'
import Admin from './Admin'
import Categories from './Categories'

const Details = () => {
  return (
    <div className='container mt-2'>
        <div className="row">
            <div className="col-md-3">
                <Categories/>
            </div>
            <div className="col-md-9">
                <Admin/>
            </div>
        </div>
    </div>
  )
}

export default Details