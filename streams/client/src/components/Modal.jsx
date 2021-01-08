import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = ({ header, content, actions }) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.goBack()} className='ui dimmer modals visible active'>
      <div onClick={(e) => e.stopPropagation()} className='ui standard modal visible active'>
        <i className='close icon' onClick={history.goBack}></i>
        <div className='header'>{header}</div>
        <div className='content'>
          <p>{content}</p>
        </div>
        <div className='actions'>{actions}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
};

export default Modal;
