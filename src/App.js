import React, { Component } from "react";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json)
      .then((json) =>
        this.setState({
          items: json,
          isLoaded: true,
        })
      );
  }

  render() {
    var { items, isLoaded } = this.state;

    if (!isLoaded) {
      return <div>Data is Loading....</div>;
    } else {
      return (
        <div className="App">
          <h1>Data has been Loaded</h1>
        </div>
      );
    }
  }
}
