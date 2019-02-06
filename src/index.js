import React from 'react';
import ReactDOM from 'react-dom';
import Search from './components/search';
import List from './components/list';
import Header from './components/header';

const App = () => {
  return (
    <div>
      <Header />
      <Search />
      <List />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
