import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Auth from './components/Auth/Auth';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/login">
          <Auth />
        </Route>
        <Route path="/register">
          <Auth />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
