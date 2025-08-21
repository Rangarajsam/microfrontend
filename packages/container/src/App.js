import React, {lazy, Suspense, useState} from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Progress from "./components/Progress";
import Header from "./components/Header";
// import AuthApp from "./components/AuthApp";
// import MarketingApp from "./components/MarketingApp";
export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);
  const AuthLazy = lazy(() => import("./components/AuthApp"));
  const MarketingLazy = lazy(() => import("./components/MarketingApp"));
  
  return (
    <BrowserRouter>
      <div>
        <Header onSignOut={() => setIsSignedIn(false)} isSignedIn={isSignedIn}/>
        <Suspense fallback={<Progress/>}>
          <Switch>
            <Route path="/auth">
            <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
        </Suspense>
        {/* <Switch>
            <Route path="/auth" component={AuthApp} />
            <Route path="/" component={MarketingApp} />
          </Switch> */}
      </div>
    </BrowserRouter>
  )
}