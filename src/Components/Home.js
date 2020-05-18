import React, { Component } from "react";
import './home.css';
import { Link} from "react-scroll";
export default class Home extends Component{
  render(){
    return (
    <div class="home">
        <div class="flex">
            <div class="text ">Hi, I am <span id="name">Ryan Rohm</span>.<br/>I'm a computer engineer. <br/>
            <Link to="section2"
                smooth={true}
                offset={-70}
                duration={500} 
                class="myButton">
                Learn about me  &#8595;
                </Link>
            </div> 
        </div>
    </div>
  );}
}
