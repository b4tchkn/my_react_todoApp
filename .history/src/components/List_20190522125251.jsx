import React, { Component } from "react";

let style = {
  maxWidth: '700px'
};

let btn = {
  cursor: 'pointer'
};

const List = (props) => (
  <ul className="siimple-list">
    <ul className="siimple-list">
      {props.todos.map((todo, i)}
    </ul>
  </ul>
);

export default List;