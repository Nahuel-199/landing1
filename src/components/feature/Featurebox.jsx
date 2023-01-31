import React from 'react'

const Featurebox = (props) => {
  return (
    <div className='a-box'>
        <div className="a-b-img">
            <img src={props.image} alt="image" />
        </div>
        <div className="a-b-text">
            <h2>{props.title}</h2>
            <p>Lorem ipsun dolor sit amet consectetur adipisicing</p>
        </div>
    </div>
  )
}

export default Featurebox