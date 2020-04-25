import React from 'react';
import './index.css'

class ViewContacts extends React.Component {

  // this.props
  render() {
    return (
      <div className="profile"> <h2>Contact List</h2>
       {
         this.props.contacts.map((value, index) => {
           return <p key={index}>{value.name} , {value.number}</p>;
         })
       }
      </div>
    );
  }
}

export default ViewContacts;