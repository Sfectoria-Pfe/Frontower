import React, { Component } from 'react'
import CustomNavbar from './´layouts/CustomNavbar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
export default class App extends Component {
  constructor(){
    super()
    this.state={view:"Home"}

  }
  changeView=(NewView)=>{
    this.setState({view:NewView})

  }
  render() {
    return (
      <div>
        <CustomNavbar changeView={this.changeView}/>
        {this.state.view==="Home" ? <Home/>: <AboutUs/> }
        
        
        
      </div>
    )
  }
}
