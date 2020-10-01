import React, { Component } from "react";
import Datadiv from "./Datadiv";

export default class Appdata extends Component {
  constructor(props) {
    super();
    this.state = {
      datainState: [],
    };
  }
  componentDidMount() {
    fetch("https://api.spaceXdata.com/v3/launches?limit=100")
      .then((res) => res.json())
      .then((res) =>
        this.setState({
          datainState: res,
        })
      );
  }

  render() {
    console.log(this.state.datainState);
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
    return <div className="datadiv">{mappedComponentData}</div>;
  }
}
