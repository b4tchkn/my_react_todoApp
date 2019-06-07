import React, { Component } from "react";

let style = {
  maxWidth: '500px'
};

let btn = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list siimple--bg-dark">
    {props.todos.map((todo, i) => {
      return <li key={i} className="siimple-list-item siimple--bg-white" style={style}>{todo.title} <span className="siimple-tag siimple-tag--error siimple-hover" style={btn} onClick={() => props.handleRemove(i)}>DONE</span></li>
    })};
  </ul>
);

export default List;