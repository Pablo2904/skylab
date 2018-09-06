import React, { Component } from 'react';

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
     tag: [ ...tag, value ],
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

  onClickHandle(){
    this.props.clicked(this.state)
    this.setState({
      tag:[]
    })
  }
  render() {
    return (
      <div style={{marginLeft:"15px", width:"300px", }}>

        <div>
          <div style={{marginTop:"25px"}}>
            <label>Question</label>
            <div>
              <input
                type="text"
                value={this.state.question}
                onChange = {this.addQuestion}
              />
            </div>
          </div>
          <form onSubmit={this.handleSubmit}>
            <div>
              <h2>Vote options:</h2>
              <ul id="list" style={{marginLeft:"0",display:"flex",flexWrap:""}}>
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
            <button style={{padding:"8px", marginTop:"10px"}} onClick={() => this.onClickHandle()}>
              Add new poll
            </button>

          </div>
        </div>
      </div>
    );
  }
}

export default New;
