import React from 'react'
import { useDispatch } from 'react-redux'
import {actionCreators} from "../state/index"
// using action binder
import { bindActionCreators } from 'redux';
import {useSelector} from 'react-redux'
 

function Shop() {
    const dispatch = useDispatch();
    const action = bindActionCreators(actionCreators,dispatch);
    const {subM} = action;

    const am = useSelector(state => state.am)
    return (
        <div>
            <div className="container">
            <button className="btn-primary mx-3" onClick={()=>{dispatch(actionCreators.addM(100))}}>+</button>
            Amount in account {am}
            <button className="btn-danger mx-3" onClick={()=>subM(100)}>-</button>
            </div>
        </div>
    )
}

export default Shop
