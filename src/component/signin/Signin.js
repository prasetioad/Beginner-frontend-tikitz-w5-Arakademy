import React, { Component } from 'react'
import './Signin.css'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import axios from 'axios'

class Signin extends Component {

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
                this.Berhasil()
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
        return(
            <div className="s-container">
                <header className='header-s'>
                <div className="s-image">
                    <div className="s-content">
                        <img src="../source/tickitz 1.png" alt=""/>
                        <h1>Wait, Watch, Wow!</h1>
                    </div>
                </div>
                </header>
                <main>
                    <div className="s-main-left">
                        <img src="../source/Vector.png" alt=""/>
                        <div className="s-sign">
                            <p className="s-signin">Sign In</p>
                            <p className="s-p">Sign in with your data that you entered during your registration</p>
                        </div>
                        <form method="GET" action="#" className='s-form'>
                            <p>Email</p>
                            <input type="email" placeholder="Write yor email" className="s-box"/>
                            <p className="s-pass">Password</p>
                            <img src="../source/Vector.png" alt="" className="s-eye"/>
                            <img src="../source/Vector0.png" alt="" className="s-eye1"/>
                            <input type="password" placeholder="Write your password" className="s-box"/>
                            <br/>
                            <button className="s-btn">Sign In</button>
                        </form>
                        <p className="s-reset">Forgot your password? <a href="#">Reset now</a> </p>
                        <div className="s-line">
                            <p ><hr/> Or <hr/> </p>
                        </div>
            
                        <footer className='footer-s'>
                            <div className="s-card">
                                <a href="# ">
                                    <img src="../source/google_icon_131222.png" alt="" className="s-pl" />
                                    <p className="s-pl"> Google</p>
                                </a>
                            </div>
                            <div className="s-card">
                                <a href="#">
                                    <img src="../source/VectorFB.png" alt="" className="s-pl" />
                                    <p className="s-pl">Facebook</p>
                                </a>
                            </div>
                        </footer>

                    </div>
                </main>


            </div>
        )
    }
}

export default Signin