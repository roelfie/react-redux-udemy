import React from "react";
import { Link } from "react-router-dom";
import GoogleAuthenticator from "./GoogleAuthenticator";

const Header = () => {
  return (
    <div className='ui secondary pointing menu'>
      <Link to='/streams/new' className='item'>
        New Stream
      </Link>
      <div className='right menu'>
        <Link to='/' className='item'>
          All Streams
        </Link>
        <GoogleAuthenticator />
      </div>
    </div>
  );
};

export default Header;
