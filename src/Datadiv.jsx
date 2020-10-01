import React from "react";

export default function Datadiv(props) {
  return (
    <div className="card">
      <img src={props.src} alt="" />
      <p className="cardtitle">{props.name} </p>

      <div className="carddata">
        <span>
          <b>Flight No: </b>
          {props.flightNo}
        </span>
        <p>
          <b>Mission Id: </b>
          {props.id}
        </p>
        <p>
          <b>Launch Year: </b>
          {props.launchyear}
        </p>
        <p>
          <b>Successful Launch: </b>
          {props.launchinfo === true ? "True" : "False"}
        </p>
        <p>
          <b>Launch Site: </b>
          {props.landingdata}
        </p>
      </div>
    </div>
  );
}
