import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';
import Landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

const App = () => {
  return (
    <BrowserRouter>
      <div className='container'>
        <Header />
        <Route path='/' exact component={Landing} />
        <Route path='/surveys' exact component={Dashboard} />
        <Route path='/surveys/new' component={SurveyNew} />
      </div>
    </BrowserRouter>
  );
};

export default App;
