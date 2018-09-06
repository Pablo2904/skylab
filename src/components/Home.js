import React, {Component} from 'react';
import Poll from './Poll'
import New from './New'


class Home extends Component {
  state = {
    question:[],
    tag:[],
    flag:false
  }

newHandler = e => {
  let flag = this.state.flag;
  if (flag) {
    flag = false;
  } else {
    flag = true;
  }
  this.setState ({
    flag
  });
}
onClickForm (data) {
    this.setState({
      question: [...this.state.question, data.question],
      tag:[...this.state.tag, data.tag]
    });
}
  render() {
    return (
      <div style={{marginTop:"120px", width:"80%", marginLeft:"auto", marginRight:"auto", flexWrap:"wrap",display:"flex", justifyContent:"space-around",alignItems:"center"}}>
        <ul style= {{display:"flex",justifyContent:"center",alignItems:"center"}}>

            <Poll
              question={this.state.question}
              tag={this.state.tag}
            />

        </ul>
        <div style={{marginTop:"30px", display:"flex", justifyContent:"center"}} >
            <button style={{width:"100px", height:"80px", cursor:"pointer",marginTop:"40px" }} onClick={this.newHandler}>
              {!this.state.flag?('Add Poll Panel'):('Remove Panel')}

            </button>
            {this.state.flag && <New clicked={ this.onClickForm.bind(this)}/>}

        </div>
      </div>
    )
  };
}

export default Home;
