import React, { Component } from "react";
import GetTweets from "./GetTweets";

export default class Tweets extends Component {
  state = {
    data: [],
    post: {
      "user": 1,
      "search": this.props.model
  }
  };

  componentDidMount() {
    this.setState({search:this.props.model})
    fetch("http://127.0.0.1:8000/api/filter/create/", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state.post)

    });
  }

  //{this.props.tweets.map(object => (
  showTweets() {
    return (
      
      <GetTweets />
    );
  }

  render() {
    return <div>{this.showTweets()}</div>;
  }
}
