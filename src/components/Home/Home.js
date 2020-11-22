import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

import './Home.css';
import ArticleList from '../ArticleList/ArticleList';

function Home() {

  const routeMatch = useRouteMatch();

  return (
    <>
      <div className="center home-bg-green">
        <h1 id="home-logo">
          conduit
        </h1>
        <p id="home-lead">
          Um lugar para você compartilhar todo o seu conhecimento!
        </p>
      </div>
      <div className="container">
        <div>
          <nav id="home-nav">
            <NavLink to={`${routeMatch.url}/my-feed`}>
              Meu feed
            </NavLink>
            <NavLink to={`${routeMatch.url}/global-feed`}>
              Feed global
            </NavLink>
          </nav>
          <main>
            <Switch>
              <Route path={`${routeMatch.path}/my-feed`}>
                My feed
                <ArticleList />
              </Route>
              <Route path={`${routeMatch.path}/global-feed`}>
                Global feed
                <ArticleList />
              </Route>
              <Route path={`${routeMatch.path}/`}>
                <Redirect to={`${routeMatch.path}/global-feed`} />
              </Route>
            </Switch>
          </main>
        </div>
      </div>
    </>
  );
}

export default Home;
