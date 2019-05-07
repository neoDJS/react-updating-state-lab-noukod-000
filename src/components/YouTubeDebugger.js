// Code YouTubeDebugger Component Here
import React from 'react';


export default class YouTubeDebugger extends React.Component {
  constructor(){
    super();

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

  handleBitrateClick = () => {
    this.setState({ settings: {...this.state.settings, bitrate: 12} });
  }
  
  handleResolutionClick = () => {
    this.setState({ settings: {...this.state.settings, bitrate: 12} });
  }

  render(){
    return (
      <button class="bitrate" onClick={this.handleBitrateClick}>Bitrate</button>
      <button class="resolution" onClick={this.handleResolutionClick}>Resolution</button>
    );
  }
}
