import {
  NavLink,
  Redirect,
  Route,
  Switch,
  useRouteMatch
} from 'react-router-dom';

import './Home.css';
import ArticleList from '../ArticleList/ArticleList';
import TagList from '../TagList/TagList';

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
      <div className="container row sm-vertical">
        <div className="col sm-full">
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
                <ArticleList />
              </Route>
              <Route path={`${routeMatch.path}/global-feed`}>
                <ArticleList />
              </Route>
              <Route path={`${routeMatch.path}/`}>
                <Redirect to={`${routeMatch.path}/global-feed`} />
              </Route>
            </Switch>
          </main>
        </div>
        <aside
          className="no-flex sm-full"
          style={{
            "width": "260px"
          }}
        >
          Tags populares
          <br />
          <TagList />
        </aside>
      </div>
    </>
  );
}

export default Home;
