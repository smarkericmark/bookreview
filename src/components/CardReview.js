import React from "react";



export default function CardReview(props) {
    
    
    return(
        <div className="cardReview--Box">
            <div className="card--image">
                {/*
                    <img src={require(`../images/alienRPG.jpg`)} className="card--image" />

                */}
                <img src={require(`../images/${props.img}`)} className="card--image" alt="Girl in a jacket" />
            
            
            </div>

            <div className="card--text">
                <div className="card--top">    
                    <h3 className="card--publisher">Published by: {props.publisher}</h3>
                    <a className="card--link" href={props.link} target="_blank">Purchase Here</a> 
                </div>
                
            <h2 className="card--title">{props.title}</h2>
            
            <div className="card--stats">
                <img src={require("../images/Star.png")} className="card--Starpic" alt="Star" />
                <span>{props.rating}</span>
            </div>

                <p className="card--review">{props.review} </p>
            
            </div>
            

        </div>
    )
}
