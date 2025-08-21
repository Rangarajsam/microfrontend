import React, {lazy, Suspense, useState, useEffect} from "react";
import { Router, Switch, Route, Redirect } from "react-router-dom";
import Progress from "./components/Progress";
import Header from "./components/Header";
import { createBrowserHistory} from 'history';
// import AuthApp from "./components/AuthApp";
// import MarketingApp from "./components/MarketingApp";

const history = createBrowserHistory();
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const AuthLazy = lazy(() => import("./components/AuthApp"));
  const MarketingLazy = lazy(() => import("./components/MarketingApp"));
  const DashboardLazy = lazy(() => import('./components/DashboardApp'));

  useEffect(() => {
    if(isSignedIn) {
      history.push('/dashboard');
    }
  },[isSignedIn])

  return (
    <Router history={history}>
      <div>
        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
        <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardLazy />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
        {/* <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch> */}
      </div>
    </Router>
  )
}