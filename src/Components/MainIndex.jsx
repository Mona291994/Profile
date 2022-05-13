import ProfileView from './ProfileView';
import '../CSS/common.scss';
import ProfileForm from './ProfileForm';
import React, { Component } from 'react';

class MainIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myProfiles: [],
    };
  }
  addToProfile = (myProfileObj) => {
    this.setState({
      ...this.state,
      myProfiles: [myProfileObj, ...this.state.myProfiles],
    });
  };
  render() {
    return (
      <div>
        <ProfileForm handleClick={this.addToProfile} />
        {this.state.myProfiles.map((item, i) => (
          <ProfileView profile={item} key={`profile-${i}`} />
        ))}
      </div>
    );
  }
}

export default MainIndex;
