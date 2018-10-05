import React from 'react';

export default function House(props){
    console.log(props.home);
    return(
        <div>
            <button>Delete House</button>
                <h3>A Home!</h3>
                <p>{props.home.name}</p>
                <p>{props.home.address}</p>
                <p>{props.home.city}</p>
                <p>{props.home.state}</p>
                <p>{props.home.zip}</p>
                <p>{props.home.img}</p>
                <p>{props.home.mortgage}</p>
                <p>{props.home.rent}</p>
            
        </div>
    )
}