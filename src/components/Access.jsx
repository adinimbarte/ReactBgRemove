import React from "react";
import Interface from "./Interface";
export default class Access extends React.Component {
    enableWebcam = () => this.setState({ webcamEnabled: true });
  
    constructor(props) {
      super(props);
      this.state = { webcamEnabled: false };
    }
  
    render() {
      // ...
      return (
        <div>
          {this.state.webcamEnabled ? (
            <Interface/>
          ) : (
              <div>
                  <label >Click Here to Allow Acces to Web Camera: </label>
                  <button type="button" onClick={this.enableWebcam}>
              Click Here
            </button>
              </div>
            
          )}
          {/* ... */}
        </div>
      );
    }
  }