import React from 'react';
import './index.css'

const HEADERS ={
  "Method" : "GET",
  "headers" : {
    "API" : "white",
    "Content-Type" : "application/json",
    "Accept": "application/json"
  }
}

class RemoveContacts extends React.Component {

  constructor(props) {
    super(props);

    //set input reference 
    this.textInput = React.createRef();
    //track value of input state 
      this.state = {
      value: '',
    }
  }

  //send header body 
  delVal= () => {
    let newHeaders = {...HEADERS,
      "method" : "POST",
      body: JSON.stringify({
        position:this.textInput.current.value,
      })}

      fetch("http://plato.mrl.ai:8080/contacts/remove", newHeaders)
      .then((res) => res.json())
      .then((data) => {
       // this.props.takeContact(data.removed)
       this.props.takeContact(this.textInput.current.value)
          console.log(data)
    }
    , [])
  }

  handleSubmit = e => {
    e.preventDefault();
    this.delVal()
  }

  render() {
    return (
      <div className="profile"> <h2 className="something" >Remove contact</h2>

        <form onSubmit={this.handleSubmit}>
 
          <label htmlFor="name" className="something">Position</label><br/>
          <input type="text" className="words5" ref={this.textInput} id ="position" /><br/>

          <button type="submit" className="but2">Submit</button>
       </form>
    </div>
    );
  }
}

export default RemoveContacts;