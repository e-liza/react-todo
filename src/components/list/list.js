import React from 'react';
import ListItem from '../list-item';
import './list.css';

const List = ({ datas }) => {
  const elements = datas.map(item => {
    const { id, ...itemProps } = item;
    return (
      <li key={id}>
        <ListItem {...itemProps} />
      </li>
    );
  });

  return <ul>{elements}</ul>;
};

export default List;
