import React from 'react';
import { Navbar } from './components/Navbar/Navbar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { AboutPage } from './pages/AboutPage';
import { TodosPage } from './pages/TodosPage';


const App: React.FC = () => {


  return (
    <BrowserRouter>
    <Navbar/>
    <Switch>
      <Route component={TodosPage} path="/" exact />
      <Route component={AboutPage} path="/about" />
    </Switch>
    </BrowserRouter>
  );
}

export default App;
