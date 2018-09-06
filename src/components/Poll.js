import React, {Component} from 'react';
import Buttons from './Buttons'



class Poll extends Component {

  render() {
    return (

        <div style={{border:"1px solid black", padding:"20px"}}>
          <h3>{this.props.question }</h3>
          {this.props.tag.map((item, index) => {
            return (
                <li key={item} style={{padding:"10px", listStyleType:"none", border:"1px solid black", marginLeft:"10px"}}>
                  <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                    <Buttons item={item} />
                  </div>
                </li>
            )
          })}
        </div>
    );
  }
}


export default Poll;
