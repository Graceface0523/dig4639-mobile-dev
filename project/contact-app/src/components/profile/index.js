import React from 'react';
import './index.css'


class Profile extends React.Component {

  render() {
    return (
      <div className="profile"> <h2>Name List Count</h2>
        { 
        this.props.profile.map((value, index) => {
          return <p key={index}> {value.name}, {value.count}</p> ;
        })
       }
      </div>
    );
  }
}

export default Profile;