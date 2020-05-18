import React, { Component } from "react";
import './about.css';
import pic from "../images/fountain.png";
import python from "../images/python.png";
import java from "../images/java.png";
import cpp from "../images/cpp.png";
import js from "../images/js.png";
import raspi from "../images/raspi.png";


export default class About extends Component{ 
    render(){
        return (
            <div class="about">
                <div class="header">About</div>
                <div className="flex" >
                    <figure>
                        <img src={pic} alt="Me " id="pic" style={{width:"250px"}} ></img>
                        <figcaption className="description" style={{visibility:"visibile"}}>
                            Hi, I am a software engineer at J.P. Morgan Chase in Chicago, IL. I graduatd with a BS in computer engineering from the University of Pittsburgh, H2P.
                        </figcaption>
                    </figure>
                    <div className="flex-cols">
                        <h2>Favorite Languages </h2>
                        <img src={python} alt="Python" style={{width:"100px",height:"100px"}}></img> 
                        <img src={java} alt="Java" style={{width:"100px",height:"100px"}}></img> 
                        <img src={cpp} alt="C++" style={{width:"100px",height:"100px"}}></img> 
                        <img src={js} alt="JavaScript" style={{width:"100px",height:"100px"}}></img> 
                        <img src={raspi} alt="Raspi" style={{width:"100px",height:"100px"}}></img> 
                    </div>
                </div>
            </div>
            


        );
    }

}