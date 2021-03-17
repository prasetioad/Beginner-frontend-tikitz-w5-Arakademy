
import React from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Register from './component/register/Register'
import Signin from './component/signin/Signin'
import Home from './component/Home/Home'
import Tiketlist from './component/Tiketlist/Tikets'
import Payment from './component/Payment/Payment'
import Profile from './component/Profile/Profile'
import Movie from './component/MovieDetil/Movie'


function App () {
  return (
    <>
      <Router>
        <Switch>
          <Route  exact  path='/' component={Home}/>
          <Route path='/signup'component={Register}/> 
          <Route path='/signin'component={Signin}/>
          <Route path='/payment/:id'component={Payment}/>
          <Route path='/profile/:id'component={Profile}/>
          <Route path='/movie-detil/:id'component={Movie}/>
          <Route path='/tikets' component={Tiketlist}/>
        </Switch>
      </Router>
    </>
  )
}

export default App
