import React, {Component} from 'react'

class Buttons extends Component {
  state = {
    counter: 0
  }
  pointUp = () => {
    this.setState({
      counter: this.state.counter +1
    })
  }
  pointDown = () => {
    this.setState ({
      counter: this.state.counter -1
    })
  }

  render() {
    return (
      <div>
      <span>{this.props.item}: {this.state.counter}</span>
        <div style={{marginLeft:"100px"}}>
          <button onClick={this.pointUp}>Up</button>
          <button onClick={this.pointDown} style={{marginLeft:"20px"}}>Down</button>
        </div>
      </div>

    );
  }
}


export default Buttons
