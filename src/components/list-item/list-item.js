import React from 'react';
import './list-item.css';

const ListItem = ({ label, important = false }) => {
  const style = {
    color: important ? 'purple' : 'black'
  };
  return (
    <span className="todo-list-item">
      <span className="todo-list-item-label" style={style}>
        {label}
      </span>

      <button type="button" className="btn">
        <i className="fa fa-exclamation" />
      </button>

      <button type="button" className="btn">
        <i className="fa fa-trash-o" />
      </button>
    </span>
  );
};

export default ListItem;
