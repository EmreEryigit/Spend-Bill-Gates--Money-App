
import { useSelector } from 'react-redux'
import React from 'react'

function Hero() {
    const money = useSelector(state => state.billgates.money)
      return (
    <React.Fragment>
    <div className="col-md-8 offset-md-2">
        <img src="https://pbs.twimg.com/profile_images/1414439092373254147/JdS8yLGI_200x200.jpg" style={{borderRadius: "100px"}} alt="" />
        <h1>Spend Bill Gates' Money</h1>
        <p>${money.toLocaleString()}</p>

    </div>
    </React.Fragment>
  )
}

export default Hero
