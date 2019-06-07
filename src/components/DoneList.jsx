import React, { Component } from "react";

let style = {
  maxWidth: '500px'
};

let btn = {
  cursor: 'pointer'
};

const DoneList = (props) => (
  <ul className="siimple-list">
    {props.dones.map((done, i) => {
      return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{done.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>Delete</span></li>
    })};
  </ul>
);

export default DoneList;