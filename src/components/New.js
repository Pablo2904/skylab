import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class New extends Component {
  state = {
      question: "",
      tag: [],
      value: "",
  }

  addQuestion = e => {
    this.setState ({
      question:e.target.value
    });
  }

  handleSubmit = e => {
    e.preventDefault();
 }

 addTag = e =>{
   const value = this.state.value
   const tag = this.state.tag
   if (!value) return;
   this.setState({
     tag: [value , ...tag],
     value: "",
   })
 }
 manageInput = e => {
   this.setState({value: e.target.value});
 }

 deleteLi = e =>{
   const tag = [...this.state.tag];
   tag.splice(e, 1);
   this.setState({tag})
}
  render() {
    return (
      <div style={{marginTop:"200px", width:"300px", marginLeft:"auto", marginRight:"auto"}}>
        <div style={{padding:"20px", border:"1px solid black"}}>
          <Link  to="/">Go Back</Link>
        </div>
        <div>
          <div style={{marginTop:"25px"}}>
            <label>Question</label>
            <div>
              <input
                type="text"
                onChange = {this.addQuestion}
              />
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h2>Vote options:</h2>
              <ul id="list">
                {this.state.tag.map((item, index) => {
                  return (
                    <li key={item} style={{padding:"10px", listStyleType:"none",display:"inline-block", border:"1px solid black", marginLeft:"10px"}}
                    onClick={ () => this.deleteLi(index) }
                    >
                      {item}
                    </li>
                  )
                })}
              </ul>
            </div>
            <div>
              <div style={{display:"inline-block"}}>
                <input id="tag"
                  type="text"
                  placeholder="Add vote option"
                  value={this.state.value}
                  onChange={this.manageInput}
                />
              </div>
              <div style={{display:"inline-block"}}>
                <button
                  type="submit"
                  onClick={this.addTag}
                >
                  +
                </button>
              </div>
            </div>
          </form>
          <div>
            <Link to={{ pathname: '/', state: {
              question: this.state.question,
              tag : this.state.tag
            } }}>
              <button style={{padding:"8px", marginTop:"10px"}}>
                Add new poll
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default New;
