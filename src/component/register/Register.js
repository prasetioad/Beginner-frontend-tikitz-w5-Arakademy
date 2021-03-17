import React, { Component } from 'react'
import './Register.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";
import axios from 'axios';
import Signin from '../signin/Signin'


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    CreatNewUser = () =>{
        const data = {
            email: this.state.email,
            password: this.state.password
        }
        const url = 'http://localhost:5400/users/';
        console.log(data);
            axios.post(url, data)
            .then(
                alert('Berhasil!')
            )
    }
    handleInputChange = (event) => { 
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
          [name]: value
        });
      }


    render(){
        
    //   const berhasil = () =>{
    //       alert(`Pendaftaran dengan Email ${this.state.email} berhasil!`)
    //   }

        return(
            <div className="a-container">
                <header className="header-head">
                <div className="a-image">
                    <div className="a-content">
                        <img src="../source/tickitz 1.png" alt=""/>
                        <h1>Wait, Watch, Wow!</h1>
                    </div>
                </div>
                </header>
                <main>
                    <div className="a-main-left">
                        <img src="../source/Vector.png" alt=""/>
                        <div className="a-sign">
                            <p className="a-register">Fill your additional details</p>
                            {/* <p className="a-p">Sign in with your data that you entered during your registration</p>    */}
                        </div>
                        <form onSubmit={()=>{this.CreatNewUser()}} className="a-form">

                            <p>Email</p>
                            <input type="email" name="email" 
                            placeholder={this.state.email} 
                            className="a-box" 
                            
                            onChange={this.handleInputChange}/>

                            <p className="a-pass">Password</p>
                            <img src="../source/Vector.png" alt="" className="a-eye"/>
                            <img src="../source/Vector0.png" alt="" className="a-eye1"/>

                            <input type="password" 
                            name="password" 
                            placeholder="Write your password" 
                            className="a-box" 

                            onChange={this.handleInputChange}/>

                            <br/>
                            <p className='a-checkbox'><input type="checkbox" className='a-boxcheck'/>I agree to terms & conditions</p>
                            <button className="a-btn" > <Link to="/signup" >Register</Link></button>
                        </form>
                        <p className="a-reset">Do you already have an account? <Link to="/signin">Log in</Link> </p>
                        <div className="a-line">
                            <p ><hr/> Or <hr/> </p>
                        </div>
            
                        <footer className='a-footer'>
                            <div className="a-card">
                                <a href="# ">
                                    <img src="../source/google_icon_131222.png" alt="" className="a-pl" />
                                    <p className="a-pl"> Google</p>
                                </a>
                            </div>
                            <div className="a-card">
                                <a href="#">
                                    <img src="../source/VectorFB.png" alt="" className="a-pl" />
                                    <p className="a-pl">Facebook</p>
                                </a>
                            </div>
                        </footer>

                    </div>
                </main>


            </div>
        )
    }
}

export default Register