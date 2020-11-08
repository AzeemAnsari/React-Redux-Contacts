import React from 'react';

import Header from './components/Header';
import Contacts from './components/Contacts';
import Footer from './components/Footer';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';

import { Provider } from 'react-redux';
import store from './redux/store';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <Provider store={store}>
      <Router>
        <div className={classes.app}>
          <Header />
          <Switch>
            <Route exact path="/" component={Contacts} />
            <Route path="/contacts/add" component={AddContact} />
            <Route path="/contact/edit/:id" component={EditContact} />
          </Switch>

          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;
