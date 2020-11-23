import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  const onLoginSubmit = (dados) => {
    console.log('Login:', dados);
  };
  const onRegisterSubmit = (dados) => {
    console.log('Register:', dados);
  };
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Auth
            onSubmit={onLoginSubmit}
            register={false}
          />
        </Route>
        <Route path="/register">
          <Auth
            onSubmit={onRegisterSubmit}
            register={true}
          />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
