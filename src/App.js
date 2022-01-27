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
          {this.state.people.map((person, i) => (
            <div key={`person-number-${i}`} className="table-row">
              <img src={person.picture.large} />
              <div>{person.name.first}</div>
              <div>{person.name.last}</div>
              <div>{person.email}</div>
            </div>
          ))}
        </div>
      );
  }
}
