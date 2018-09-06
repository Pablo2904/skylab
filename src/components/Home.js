import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Poll from './Poll'


class Home extends Component {
  state = {
    question:"",
    tag:[],
  }

componentWillMount() {
  
  const tag = this.props.location.state.tag;
  const question = this.props.location.state.question;

  this.setState({
    tag,
    question
  })
}
componentWillUpdate () {
}
  render() {

    return (
      <div style={{marginTop:"200px", width:"1200px", marginLeft:"auto", marginRight:"auto"}}>
        <ul style= {{display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Poll
          question={this.state.question}
          tag={this.state.tag}
        />


        </ul>
        <div style={{marginTop:"30px"}} >
          <Link to="/New">
            <button
            style={{width:"100px", height:"80px", cursor:"pointer" }}>
              Nowa Ankieta
            </button>
          </Link>
        </div>
      </div>
    )
  };
}

export default Home;
