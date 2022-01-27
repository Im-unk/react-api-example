import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  state = {
    isLoaded: true,
    people: [],
  };

  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=7";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ isLoaded: false, people: data.results });
  }

  render() {
    if (this.state.isLoaded) {
      return <div>Loading...</div>;
    } else if (!this.state.people.length) {
      return <div>No person has found</div>;
    } else
      return (
        <div className="app">
          <div className="table-title">
            <div>Profile</div>
            <div>Name</div>
            <div>Last name</div>
            <div>Country</div>
            <div>City</div>
            <div>Email</div>
          </div>
          <div className="table-row-wrapper">
            {this.state.people.map((person, i) => (
              <div key={`person-number-${i}`} className="table-row">
                <div>
                  <img src={person.picture.medium} />
                </div>
                <div>{person.name.first}</div>
                <div>{person.name.last}</div>
                <div>{person.location.country}</div>
                <div>{person.location.city}</div>
                <div>{person.email}</div>
              </div>
            ))}
          </div>
        </div>
      );
  }
}
