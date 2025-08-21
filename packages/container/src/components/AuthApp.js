import React, {useRef, useEffect} from "react";
import { mount } from "auth/AuthApp";
import { useHistory } from "react-router-dom";

export default ({onSignIn}) => {
    const authRef = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParanetNavigate } = mount(authRef.current,{
            initialPath:history.location.pathname,
            onNavigate: ({pathname:nextPathname}) => {
               const { pathname } = history.location;
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
            },
            isSignIn:onSignIn
        });
        history.listen(onParanetNavigate);
    }, []);

    return (
        <div ref={authRef}></div>
    )
}