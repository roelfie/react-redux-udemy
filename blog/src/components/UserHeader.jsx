import React from "react";
import faker from "faker";
import { connect } from "react-redux";
import { loadUser } from "../actions";

class UserHeader extends React.Component {
  componentDidMount() {
    this.props.loadUser(this.props.userId);
  }

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

const mapStateToProps = (state, props) => {
  const user = state.users.find((user) => user.id === props.userId);
  return { user };
};

export default connect(mapStateToProps, { loadUser })(UserHeader);
