import React, { Component } from "react";
import Datadiv from "./Datadiv";

export default class Appdata extends Component {
  constructor(props) {
    super();
    this.state = {
      datainState: [],
      link: "https://api.spaceXdata.com/v3/launches?limit=100",
    };
    this.fetchfunc = this.fetchfunc.bind(this);
    this.myfunctrue = this.myfunctrue.bind(this);
    this.myfuncfalse = this.myfuncfalse.bind(this);
  }

  fetchfunc(link) {
    fetch(link)
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          datainState: res,
        })
      );
  }

  componentDidMount() {
    console.log("cdm is running");
    this.fetchfunc("https://api.spaceXdata.com/v3/launches?limit=100");
  }

  myfunctrue() {
    console.log("success one running");
    this.fetchfunc("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true");
  }

  myfuncfalse() {
    console.log("failure one running");
    this.fetchfunc("https://api.spaceXdata.com/v3/launches?limit=100&launch_success=false");
  }

  render() {
    // console.log(this.state.datainState);
    var mappedComponentData = this.state.datainState.map((i) => (
      <Datadiv
        key={i.flight_number}
        src={i.links.mission_patch_small}
        name={i.mission_name}
        flightNo={i.flight_number}
        id={i.mission_id}
        launchyear={i.launch_year}
        launchinfo={i.launch_success}
        landingdata={i.launch_site.site_name}
      />
    ));
    return (
      <div className="outerContainer">
        <div className="LeftPanel">
          <p className="filtertext">Filters</p>

          <p className="buttonTitle">Launch year</p>
          <hr className="titlehr" />

          <div className="buttonContainer">
            <button
              onClick={() =>
                this.fetchfunc("https://api.spaceXdata.com/v3/launches?limit=100&launch_year=2006")
              }
            >
              2006
            </button>
            <button>2007</button>
            <button>2008</button>
            <button>2009</button>
            <button>2010</button>
            <button>2011</button>
            <button>2012</button>
            <button>2013</button>
            <button>2014</button>
            <button>2015</button>
            <button>2016</button>
            <button>2017</button>
            <button>2018</button>
            <button>2019</button>
            <button>2020</button>
          </div>

          <p className="buttonTitle">Succesful Launch</p>
          <hr className="titlehr" />
          <div className="buttonContainer">
            <button onClick={this.myfunctrue}>True</button>
            <button onClick={this.myfuncfalse}>False</button>
          </div>
          <p className="buttonTitle">Succesful Landing</p>
          <hr className="titlehr" />
          <div className="buttonContainer">
            <button>True</button>
            <button>False</button>
          </div>
        </div>
        <div className="datadiv">{mappedComponentData}</div>
      </div>
    );
  }
}
