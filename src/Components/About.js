import React, { Component } from "react";
import './about.css';
import pic from "../images/fountain.png";

export default class About extends Component{ 
    render(){
        return (
            <div class="about">
                <div class="header">About</div>
                <img src={pic} alt="Me " id="pic"  ></img>
                <div style={{visibility:"hidden"}}>Hi, I am a software engineer at J.P. Morgan Chase in Chicago, IL. I graduatd with a BS in computer engineering from the University of Pittsburgh, H2P. I have interest and experience in all areas of computing from web dev to embedded systems.
                </div>
            </div>
            


        );
    }

}