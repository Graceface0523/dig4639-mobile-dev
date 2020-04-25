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

class ContactsAdd extends React.Component {

  constructor(props) {
    super(props);

    //setting the reference
    this.textInput = React.createRef();
    this.textInput2 = React.createRef();

    //tracking the state of input
    this.state = {
      value: '',
      value2: ''
    }
  }


        //sending the header to the body
      newVal= () => {
        let newHeaders = {...HEADERS,
          "method" : "POST",
          body: JSON.stringify({
            name: this.textInput.current.value,
            number:this.textInput2.current.value
          })}
          fetch("http://plato.mrl.ai:8080/contacts/add", newHeaders)
          .then((res) => res.json())
          .then((data) => {
              this.props.newContact(data.added)
              console.log(data)
        }
        , [])
      }


  handleSubmit = e => {
    e.preventDefault();
    this.newVal()
  }
  

  
  render() {

    return (
      <div className="profile">
        <h2>Add User</h2>
        <form onSubmit={this.handleSubmit}>
  
            <label htmlFor="name" className="words2">Full Name</label><br/>
            <input type="text" className="take1" ref={this.textInput} id ="name" /><br/>

            <label htmlFor="name" className="words2">Number</label><br/>
            <input type="text" className="take1" ref={this.textInput2} id ="number" /><br/>

            <button type="submit" className='but'>Submit</button>
         </form>
      </div>
    );
  }
}

export default ContactsAdd;