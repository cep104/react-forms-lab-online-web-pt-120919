import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message:""
    }
  }
  handleMessage = (event) =>{
    this.setState({
      message: event.target.value
    })
  }

  charsLeft = () => {
    let x = (this.props.maxChars - this.state.message.length)
    return x
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={ this.handleMessage }/>
    <h3>{this.charsLeft()}</h3>
      </div>
    );
  }
}

export default TwitterMessage;
