import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import LecturerList from './LecturerList';
import ModuleList from './ModuleList';

// 'main' Component. Sets up the React Router and respective routes
const App = () => {
  return(
    <HashRouter>
      <div>
        <Route exact path="/" component={LecturerList}/>
        <Route path="/module/:id" component={ModuleList}/>
      </div>
    </HashRouter>
  );
};

export default App;
