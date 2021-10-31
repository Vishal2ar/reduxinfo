import React from 'react'
import {useSelector} from "react-redux"

function Navbar() {
    const amount = 0;
    const state = useSelector(state => state.am)
    //(state => state.amount)
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">                  
                        {console.log(state)}
                        <button disabled="disabled" >total amount :{state}</button>
                   
                </div>
            </nav>
        </div>
    )
}

export default Navbar
