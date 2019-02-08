import React from 'react';

import Search from '../search';
import List from '../list';
import Header from '../header';
import StatusFilter from '../status-filter';

import './app.css';

const App = () => {
  const listData = [
    { label: 'One', important: false, id: 1 },
    { label: 'Two', important: true, id: 2 },
    { label: 'Three', important: false, id: 3 }
  ];
  return (
    <div className="todo-app">
      <Header toDo={1} done={3} />
      <div className="top-panel">
        <Search />
        <StatusFilter />
      </div>
      <List datas={listData} />
    </div>
  );
};

export default App;
