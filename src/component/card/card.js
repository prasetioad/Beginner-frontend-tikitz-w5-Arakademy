import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import Home from '../Home/Home'



const Card = (props) => {
    return(
        <Fragment>
            <div className="b-card-body"> 
                            <div className="b-card">
                                <a href="">
                                    <img src={props.img} alt=""/>
                                    <p className="b-title">{props.title}</p>
                                    <p className="b-desc">{props.date}</p>
                                    <button className="b-cd-1" onClick={props.getDetil} >Details</button>
                                </a>
                            </div>
                         {/* <div className="b-card ">
                            <a href="">
                                <img src="../source/Rectangle141.png" alt=""/>
                                <p className="b-title">The Witches</p>
                                <p className="b-desc">Adventure, Comedy, Family</p>
                                <a href="" className="b-cd-1" >Details</a>
                            </a>
                         </div>
                        <div className="b-card ">
                        <a href="">
                            <img src="../source/Rectangle139.png" alt=""/>
                            <p className="b-title">Tenet</p>
                            <p className="b-desc">Action, Sci-Fi</p>
                            <a href="" className="b-cd-1" >Details</a>
                        </a>
                        </div>
                        <div className="b-card ">
                        <a href="">
                            <img src="../source/Rectangle140.png" alt=""/>
                            <p className="b-title">Black Widow</p>
                            <p className="b-desc">Action, Adventure, Sci-Fi</p>
                            <a href="" className="b-cd-1" >Details</a>
                        </a>
                        </div>
                        <div className="b-card ">
                        <a href="">
                            <img src="../source/Rectangle141.png" alt=""/>
                            <p className="b-title">The Witches</p>
                            <p className="b-desc">Adventure, Comedy, Family</p>
                            <a href="" className="b-cd-1" >Details</a>
                        </a>
                        </div> */}
                     </div> 
        </Fragment>
    )
        
}

export default Card