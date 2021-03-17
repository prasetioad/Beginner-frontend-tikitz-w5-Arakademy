
import React, { useState, useEffect, Component} from 'react'
import './Tikets.css'
import axios from 'axios'
import { Navbar } from '../Navbar/Navbar'
import Footer from '../Footer/Footer'



class Tiketlist extends Component {
  
        state = {
            data: []
        }

    componentDidMount() {
        const name = this.props.location.search
        console.log(name);
        if (name == '') {
            axios.get(`http://localhost:5400/tikets`)
                .then((res) => {
                    console.log(res.data.data);
                    this.setState({
                        data: res.data.data
                    })
                })
        } else {
            axios.get(`http://localhost:5400/tikets/${name}`)
                .then((res) => {
                    console.log(res.data.data);
                    this.setState({
                        data: res.data.data
                    })
                })
        }
    }

        




    render(){
        console.log(this.props);
    return(
        <div>
            <Navbar />
            <div className='tik-container'>
            {
                this.state.data.map((item) =>{
                    return(
            <div className="t-post">
                <div className="t-img-thumb">
                    <img src="http://placeimg.com/200/150/tech" alt="Dummy Blog Post"/>
                </div>
                <div className="t-content">
                   <h3>{item.name}</h3>
                   <p>{item.date}{}</p>
                </div>
            </div>
            )
            })
            }
            <div className="t-post">
                <div className="t-img-thumb">
                    <img src="http://placeimg.com/200/150/tech" alt="Dummy Blog Post"/>
                </div>
                <div className="t-content">
                   <h3>{this.state.data.name}</h3>
                   <p>{this.state.data.date}{}</p>
                </div>
            </div>
            </div>
            <Footer />
        </div>
    )
}
}

export default Tiketlist