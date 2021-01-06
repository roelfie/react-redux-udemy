import React from "react";
import faker from "faker";

class UserHeader extends React.Component {
  render() {
    const user = this.props.user;

    if (!user) {
      return <div>Loading...</div>;
    }
    return (
      <div className='ui horizontal list'>
        <div className='item'>
          <img className='ui mini circular image' alt='user avatar' src={faker.image.cats()} />
          <div className='content'>
            <div className='ui sub header'>{user.name}</div>
            {user.email}
          </div>
        </div>
      </div>
    );
  }
}

export default UserHeader;
