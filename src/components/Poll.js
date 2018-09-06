import React, {Component} from 'react';
import Buttons from './Buttons'



class Poll extends Component {

  render() {
    return (
        <div>
          {this.props.question.map((q,i)=>{
            return (
              <div style={{border:"1px solid black",padding:"10px", marginBottom:"15px"}} key={q} >
                <h4>Q:{q}</h4>
                Tags: {this.props.tag[i].map((item) => {
                  return (
                      <div key={item} style={{padding:"10px", listStyleType:"none", border:"1px solid black", marginLeft:"10px"}}>
                        <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                          <Buttons item={item} />
                        </div>
                      </div>
                  )
                })}
              </div>
            )
          })}
      </div>

      )
  }
}


export default Poll;
