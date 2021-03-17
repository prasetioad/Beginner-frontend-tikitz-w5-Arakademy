import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import { Navbar } from '../Navbar/Navbar'
import './Payment.css'
import axios from 'axios'

export class Payment extends Component {

    state = {
        data: [],
        dataUser: []
    }

    componentDidMount(){
        const id = this.props.match.params.id
        axios.get(`http://localhost:5400/tikets/${id}`)
        .then(res =>{
            console.log(res.data.data);
            this.setState({
                data: res.data.data
            })
        })
        .catch(res => {
            alert('Failed to delete!' + res)
        })
        axios.get(`http://localhost:5400/users/${id}`)
        .then(res =>{
            console.log(res.data.data);
            this.setState({
                dataUser: res.data.data
            })
        })

    }

    


    render() {
        console.log(this.state.data.name);
        return (
            <div className='main'>
                <Navbar />
                     <div class="p-container">
                        <div class="p-flex">
                         <div class="p-left">
                        <p class="p-title">Payment Info</p>
                        <div class="p-left-content">
                            {
                                this.state.data.map((item) =>{
                                    return(
                                <div class="p-date">
                                    <div class="p-detil">
                                    <p class="p-exp1">Date & time</p>
                                    <p class="p-exp2">Tuesday, {item.data} at 02:00pm</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Movie title</p>
                                    <p class="p-exp2">{item.name}</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Cinema name</p>
                                    <p class="p-exp2">CineOne21 Cinema</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Number of tickets</p>
                                    <p class="p-exp2">3 pieces</p>
                                    </div>
                                    <div class="p-detil">
                                    <p class="p-exp1">Total payment</p>
                                    <p class="p-exp2 total">$30,00</p>
                                    </div>
                                </div>
                                )
                            })
                            }
                        <div>
                            <p class="p-title">Choose a Payment Method</p>
                            <div class="p-display">
                            <div class="p-opt-wrapper">
                                <div class="p-pay-option">
                                <div class="p-opt">
                                    <a href=""><img src="../source/GPay.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/visa.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/gopay.png" alt="" /></a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/paypal.png" alt=""/>
                                    </a>
                                </div>
                                </div>
                                <div class="p-pay-option">
                                <div class="p-opt">
                                    <a href=""><img src="../source/Dana_logo.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/bca.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/bri.png" alt=""/>
                                    </a>
                                </div>
                                <div class="p-opt">
                                    <a href=""><img src="../source/ovo.png" alt=""/>
                                    </a>
                                </div>
                                </div>
                                <div class="p-line">
                                <p>
                                    <hr />or <hr/>
                                </p>
                                </div>
                                <div class="p-cash">
                                <p>Pay via cash. <a href="">See how it work</a></p>
                                </div>
                            </div>
                            <div class="p-btn">
                                        {/* <!--FLEX--> */}
                                        <p><a href="" class="p-change">Change your movie</a></p>
                                        <p><a href="" class="p-checkout">Checkout now</a></p>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div class="p-right">
                                <p class="p-title" >Personal Info</p>
                                <div>
                                <div class="p-right-content">
                                    <div class="p-box">
                                    <div class="p-content">
                                        {this.state.dataUser.map((item) =>{
                                            return(
                                                
                                        <form action="">
                                        <div class="p-form">
                                            <p>Full Name</p>
                                            <input type="text" placeholder="Jonas El Rodriguez" value={item.firstName + item.lastName}/>
                                        </div>
                                        <div class="p-form">
                                            <p>Email</p>
                                            <input type="email" placeholder="jonasrodri123@gmail.com" value={item.email}/>
                                        </div>
                                        <div class="p-form">
                                            <p>Phone Number</p>
                                            <input type="tel" placeholder="6281445687121" value={item.phone_number}/>
                                        </div>
                                        </form>
                                            )
                                        })}

                                        <div className="notice">
                                            <p>Fill Your Data Correctly!</p>
                                        </div>
                                        <div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                        <Footer />
                </div>
        )
    }
}

export default Payment
