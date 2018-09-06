import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Poll from './Poll'


class Home extends Component {
  state = {
    question:"",
    tag:[],
  }

componentDidMount() {
  if (this.props.location.state !== undefined) {
    const newtag = this.props.location.state.tag;
    const newquestion = this.props.location.state.question;

    this.setState({
      tag: newtag,
      question: newquestion
    })
  }
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
