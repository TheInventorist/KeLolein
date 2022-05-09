import React from "react";
import './Component03.css';

const Component03 = props => {
    return(
        <div className="box03">
            <img src={props.info.img} width="200"/>
            <h1>{props.info.title}</h1>
            <p>
               {props.info.text}
            </p>
        </div>
    );
};

export default Component03;