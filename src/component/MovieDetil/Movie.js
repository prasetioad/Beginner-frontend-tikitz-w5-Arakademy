import React, { Component } from 'react'
import './Movie.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import axios from 'axios'

export class Movie extends Component {

    state = {
      movie : []
    }

    componentDidMount(){
      const id = this.props.match.params.id
      axios.get(`http://localhost:5400/movies/${id}`)
      .then((res) =>{
          console.log('axios jalan');
          this.setState({
              movie: res.data.data
          })
          // this.state.movie.map(movie => {
          //     return movie;
          // })
      })
  }

  handleBook = () =>{
    const id = this.props.match.params.id
    this.props.history.push(`/payment/${id}`)
  }




    render() {
      console.log(this.props);
      console.log(this.state.movie);
        return (
            <div>
              <Navbar/>
              {
                    this.state.movie.map((item) =>{
                      return(
              <header>
                <div className="m-header-container"> 
                  <div className="m-header-left" >
                    <img src={item.image} alt=""/>
                  </div>
                
                        <div className="m-header-right">
                    <div className="m-top-container">
                      <p className="m-title">{item.name}</p>
                      <p className="m-genre">{item.genre}</p>
                      <div className="m-top-header"> 
                        <div className="m-top-header-left">
                          <div className="m-detil">
                            <p className="m-date">Release date</p>
                            <p className="m-duration">{item.date}</p>
                          </div>
                          <div className="m-detil">
                            <p className="m-date">Duration</p>
                            <p className="m-duration m-delete">2 hours 13 min<span>utes</span></p>
                          </div>
                        </div>
                        <div className="m-top-header-right">
                          <div className="m-detil" >
                            <p className="m-date">Directed by</p>
                            <p className="m-duration">{item.directed_by}</p>
                          </div>
                          <div className="m-detil">
                            <p className="m-date">Casts</p>
                            <p className="m-duration">{item.cast}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <hr/>
                    </div>
                    <div className="m-bot-container">
                      <p className="m-synopsis">Synopsis</p>
                      <p>Thrilled by his experience with the Avengers, Peter returns home, where he lives with his Aunt May, under the watchful eye of his new mentor Tony Stark, Peter tries to fall back into his normal daily routine - distracted by thoughts of proving himself to be more than just your friendly neighborhood Spider-Man - but when the Vulture emerges as a new villain, everything that Peter holds most important will be threatened. </p>
                    </div>
                  </div>
                     
                </div>
              </header>
               )
              })
            }

              <main>
                <div className="m-main-container">
                  <div className="m-main-title">
                    <p>Showtimes and Tickets</p>
                  </div>
                  <div className="m-main-data-order">
                    <div className="m-order-date dropdown">
                      <div className="m-location ">
                        <input className="dropdown-item dropdown-toggle flex-row-reverse" type="date" id="start" name="trip-start"
                              value="2021-02-28"
                              min="2021-01-01" max="2021-12-31" placeholder=""/>
                      </div>
                    </div>
                    <div className="m-order-date">
                      <div className="m-location">
                        <div className="m-item">
                          <img src="./source/place.png" alt=""/>
                        </div>
                        </div>
                        <div className="dropdown">
                          <a className="nav-link  " href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown"
                            aria-expanded="false">Location</a>
                          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Semarang</a></li>
                            <li><a className="dropdown-item" href="#">Surabaya</a></li>
                            <li><a className="dropdown-item" href="#">Cilacap</a></li>
                            <li><a className="dropdown-item" href="#">Jakarta</a></li>
                            <li>
                              <hr className="dropdown-divider"/>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                          </ul>
                        </div>
                    </div>
                  </div>
                  <div className="m-menu">
                    <div className="m-card on" > 
                      <div className="m-card-head">
                        <img src="./source/ebu.png" alt="ebu.id"/>
                        <div className="m-profile">
                          <p className="m-instansi">ebv.id</p>
                          <p>Whatever street No.12, South Purwokerto</p>
                        </div>
                      </div>
                      <div className="m-time row"> 
                        <p className="col-3">08:30am</p>
                        <p className="col-3">10:30pm</p>
                        <p className="col-3">12:00pm</p>
                        <p className="col-3">02:00pm</p>
                        <p className="col-3">04:30pm</p>
                        <p className="col-3">07:00pm</p>
                        <p className="col-3">08:30pm</p>
                      </div>
                      <div className="m-price"> 
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                      </div>
                      <div className="m-main-action">
                        <div   className="m-btn">
                          <a href="#" onClick={this.handleBook}><p> Book now</p></a>
                        </div>
                        <div className="m-add">
                          <a href="#"  ><p> Add to cart</p></a>
                        </div>
                      </div>
                    </div>
                    <div className="m-card m-on" > 
                      <div className="m-card-head">
                        <img src="./source/Cine.png" alt="ebu.id"/>
                        <div className="m-profile">
                          <p className="m-instansi">CineOne21</p>
                          <p>Downcare street  No. 21,
                            East Purwokerto</p>
                        </div>
                      </div>
                      <div className="m-time row"> 
                        <p className="col-3">08:30am</p>
                        <p className="col-3">10:00pm</p>
                        <p className="col-3">12:00pm</p>
                        <p className="col-3">02:00pm</p>
                        <p className="col-3">04:00pm</p>
                        <p className="col-3">06:00pm</p>
                        <p className="col-3">08:00pm</p>
                      </div>
                      <div className="m-price"> 
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                      </div>
                      <div className="m-main-action">
                        <div   className="m-btn">
                          <a href="#" onClick={this.handleBook}><p> Book now</p></a>
                        </div>
                        <div className="m-add">
                          <a href="#"  ><p> Add to cart</p></a>
                        </div>
                      </div>
                    </div>
                    <div className="m-card m-off" > 
                      <div className="m-card-head">
                        <img src="./source/hiflix.png" alt="ebu.id"/>
                        <div className="m-profile">
                          <p className="m-instansi">hiflix Cinema</p>
                          <p>Colonel street No. 2, East Purwokerto</p>
                        </div>
                      </div>
                      <div className="m-time row">
                        <p className="col-3">08:30am</p>
                        <p className="col-3">10:00pm</p>
                        <p className="col-3">12:00pm</p>
                        <p className="col-3">02:00pm</p>
                        <p className="col-3">04:00pm</p>
                        <p className="col-3">06:00pm</p>
                        <p className="col-3">08:00pm</p>
                      </div>
                      <div className="m-price"> 
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                      </div>
                      <div className="m-main-action">
                        <div   className="m-btn">
                          <a href="#" onClick={this.handleBook}><p> Book now</p></a>
                        </div>
                        <div className="m-add">
                          <a href="#"  ><p> Add to cart</p></a>
                        </div>
                      </div>
                    </div>
                    <div className="m-card m-off" > 
                      <div className="m-card-head">
                        <img src="./source/ebu.png" alt="ebu.id"/>
                        <div className="m-profile">
                          <p className="m-instansi">ebv.id</p>
                          <p>Whatever street No.12, South Purwokerto</p>
                        </div>
                      </div>
                      <div className="m-time row">
                        <p className="col-3">08:30am</p>
                        <p className="col-3">10:00pm</p>
                        <p className="col-3">12:00pm</p>
                        <p className="col-3">02:00pm</p>
                        <p className="col-3">04:00pm</p>
                        <p className="col-3">06:00pm</p>
                        <p className="col-3">08:00pm</p>
                      </div>
                      <div className="m-price"> 
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                      </div>
                      <div className="m-main-action">
                        <div   className="m-btn">
                          <a href="#" onClick={this.handleBook}><p> Book now</p></a>
                        </div>
                        <div className="m-add">
                          <a href="#"  ><p> Add to cart</p></a>
                        </div>
                      </div>
                    </div>
                    <div className="m-card m-m-off" > 
                      <div className="m-card-head"> 
                        <img src="./source/Cine.png" alt="ebu.id"/>
                        <div className="m-profile">
                          <p className="m-instansi">CineOne21</p>
                          <p>Downcare street No. 21, East Purwokerto</p>
                        </div>
                      </div>
                      <div className="m-time row"> 
                        <p className="col-3">08:30am</p>
                        <p className="col-3">10:00pm</p>
                        <p className="col-3">12:00pm</p>
                        <p className="col-3">02:00pm</p>
                        <p className="col-3">04:00pm</p>
                        <p className="col-3">06:00pm</p>
                        <p className="col-3">08:00pm</p>
                      </div>
                      <div className="m-price"> 
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                      </div>
                      <div className="m-main-action">
                        <div   className="m-btn">
                          <a href="#" onClick={this.handleBook}><p> Book now</p></a>
                        </div>
                        <div className="m-add">
                          <a href="#"  ><p> Add to cart</p></a>
                        </div>
                      </div>
                    </div>
                    <div className="m-card m-off" > 
                      <div className="m-card-head"> 
                        <img src="./source/hiflix.png" alt="ebu.id"/>
                        <div className="m-profile">
                          <p className="m-instansi">hiflix Cinema</p>
                          <p>Whatever street No.12, South Purwokerto</p>
                        </div>
                      </div>
                      <div className="m-time row"> 
                        <p className="col-3">08:30am</p>
                        <p className="col-3">10:00pm</p>
                        <p className="col-3">12:00pm</p>
                        <p className="col-3">02:00pm</p>
                        <p className="col-3">04:00pm</p>
                        <p className="col-3">06:00pm</p>
                        <p className="col-3">08:00pm</p>
                      </div>
                      <div className="m-price"> 
                        <p className="m-p1">Price</p>
                        <p className="m-p2">$10.00/seat</p>
                      </div>
                      <div className="m-main-action">
                        <div   className="m-btn">
                          <a href="#" onClick={this.handleBook}><p> Book now</p></a>
                        </div>
                        <div className="m-add">
                          <a href="#"  ><p> Add to cart</p></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="m-line" >
                    <hr/><a href=""> view more</a><hr/>
                  </div>
                </div>
              </main>
              <Footer />
            </div>
        )
    }
}

export default Movie
