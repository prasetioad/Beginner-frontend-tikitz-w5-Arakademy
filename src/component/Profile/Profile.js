import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import './Profile.css'
import axios from 'axios'
import TiketCard from './tiketCard'

export class Profile extends Component {
    state = {
        data: [],
        firstName: '',
        lastName: '',
        email: '',
        phone_number: '',
        password:'',
        dataTicket: []
    }
    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:5400/users/${id}`)
        .then((res) =>{
            this.setState({
                data: res.data.data[0],
                firstName: res.data.data[0].firstName,
                lastName: res.data.data[0].lastName,
                email: res.data.data[0].email,
                phone_number: res.data.data[0].phone_number,
                password: res.data.data[0].password
            })
        })

        axios.get(`http://localhost:5400/tikets/`)
        .then((res) =>{
            this.setState({
                dataTicket: res.data.data[0]
            })
        })
    }
    
    handleChange = (event) =>{
        const target = event.target;
        const value = target.value
        const name = target.name;
        this.setState({
             [name]: value
            });
    }

    updateDataUser = () =>{
        const id = this.props.match.params.id
        axios.put(`http://localhost:5400/users/${id}`, {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            phone_number: this.state.phone_number,
        })
        .then((res)=>{
            console.log(res)
        })
    }

    deleteTicket = () =>{
        const id = this.props.match.params.id
        axios.delete(`http://localhost:5400/tikets/${id}`)
        .then(res =>{
            alert(res + 'Sucess')
        })
        .catch(res => {
            alert('Failed to delete!')
        })
    }

    render() {
        console.log(this.state.firstName);
      console.log(this.state.lastName);
      console.log(this.state.email);
      console.log(this.state.phone_number);
      console.log(this.state.dataTicket);


      function openRole(roleName) {
        // var i;
        // var x = document.getElementsByClassName("city");
        // for (i = 0; i < x.length; i++) {
        //   x[i].style.display = "none";  
        // }
        // document.getElementById(roleName).style.display = "block"  
      }

      const deleteRequest = () =>{
           const result = window.confirm("Want to delete?");
            if (result) {
                this.deleteTicket()
            }
      }

        return (
            <div className='root'>
                <Navbar />
                <div className='prof-body-container'>
                    <div className='prof-body-wrapper'>
                        <div className="prof-left">
                            <div className="prof-lef-up">
                                <div> 
                                    <p>INFO</p>
                                </div>
                                <div>
                                    <p>•••</p>
                                </div>
                            </div>
                            <div className="prof-left-pict">
                                <div className="prof-left-img">
                                    <img src="../source/Ellipse 11.png" alt=""/>
                                </div>
                                <p className='prof-left-name'>{this.state.data.firstName +' '+ this.state.data.lastName}</p>
                                <p className='prof-left-member'>Moviegoers</p>
                            </div>
                            <div className="loyalty">
                                <p>Loyalty Points</p>
                                <div className="loyalty-card">
                                    <div className='prof-star'>
                                        <p>Moviegoers</p>
                                        <div>
                                            <img src="../source/eva_star-fill.png" alt=""/>
                                        </div>
                                    </div>
                                    <p className='star-bot'>320 <span> points</span></p>
                                </div>
                                <p>180 points become a master</p>
                                <div className="line-process-bar">
                                    <div className="process-bar"></div>
                                </div>
                            </div>
                        </div>
                        <div className="prof-right">
                            <div className="prof-right-item">
                                <div className='prof-prof'>
                                    <button onclick={openRole('account')}>Account Settings</button>
                                </div>
                                <div  className='prof-order-history prof-prof'>
                                    <button onclick={openRole('history')}>Order History</button>
                                </div>
                            </div>
                            <div id="account" className='city' style={{display: "block"}}>
                                <div className="prof-right-item">
                                    <p>Details Information </p>
                                </div>
                                <div className="prof-right-form">
                                    <form onSubmit={this.updateDataUser}>
                                        <div className="prof-right-input">
                                            <div className='prof-name'>
                                                <p>Firs Name</p>
                                                <input type="text" name="firstName" onChange={this.handleChange} value={this.state.firstName} />
                                            </div>
                                            <div className='prof-name'>
                                                <p>Last Name</p>
                                                <input type="text" name="lastName" onChange={this.handleChange} value={this.state.lastName} />
                                            </div>
                                        </div>
                                        <div className="prof-right-input">
                                            <div className='prof-name'>
                                                <p>E-mail</p>
                                                <input type="email" name="email" onChange={this.handleChange} value={this.state.email} />
                                            </div>
                                            <div className='prof-name'>
                                                <p>Phone Number</p>
                                                <input type="text" name="phone_number" onChange={this.handleChange} value={this.state.phone_number} />
                                            </div>
                                        </div>
                                        <div className="prof-right-privacy">
                                            <p>Account and Privacy</p>
                                        </div>
                                        <div className="prof-right-input prof-password">
                                            <div className='prof-right-name'>
                                                <p>New Password</p>
                                                <input type="password" name="password" placeholder='Confirm your password' />
                                            </div>
                                            <div className='prof-right-name'>
                                                <p>Confirm Password</p>
                                                <input type="password" name="password" placeholder='Write your password' />
                                            </div>
                                        </div>
                                        <button className='prof-btn'><p> Update changes</p></button>
                                    </form>
                                </div>
                            </div>
                            <div id="history" className="city city-card" style={{display: "block"}}>
                                <TiketCard  name={this.state.dataTicket.name} date={this.state.dataTicket.date} deleteRequest={deleteRequest}/>
                            </div>
                        </div>
                    </div>

                </div>

                <Footer />
            </div>
        
        )
    }
}

export default Profile
