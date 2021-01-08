import React from "react";
import { Link } from "react-router-dom";
import GoogleAuthenticator from "./GoogleAuthenticator";

const Header = () => {
  return (
    <div className='ui menu'>
      <Link to='/' className='active item'>
        Streams
      </Link>
      <Link to='/streams/new' className='item'>
        New Stream
      </Link>
      <div className='right menu'>
        <GoogleAuthenticator />
      </div>
    </div>
  );
};

export default Header;
