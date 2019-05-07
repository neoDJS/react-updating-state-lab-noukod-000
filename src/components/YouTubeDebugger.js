// Code YouTubeDebugger Component Here
import React from 'react';


export default class YouTubeDebugger extends React.Component {
  constructor(){
    super()

    this.state =     {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    };
  }

  handleClick = () => {
    this.setState({ timesClicked: this.state.timesClicked+1 });
  }

  render(){
    return (
      <button onClick={this.handleClick}>{this.state.timesClicked}</button>
    );
  }
}
