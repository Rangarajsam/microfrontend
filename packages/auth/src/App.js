import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { StylesProvider } from '@material-ui/core/styles';
import SignIn from './components/Signin';
import SignUp from './components/SignUp';

export default ({history, isSignIn}) => {
    return (
        <div>
            <StylesProvider>
                <Router history={history}>
                    <Switch>
                        <Route path="/auth/signin">
                            <SignIn isSignIn={isSignIn} />
                        </Route>
                        <Route path="/auth/signup">
                            <SignUp isSignIn={isSignIn} />
                        </Route>
                    </Switch>
                </Router>
            </StylesProvider>
        </div>
    )
}