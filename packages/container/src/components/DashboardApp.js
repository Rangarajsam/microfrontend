import React, {useRef, useEffect} from "react";
import { mount } from "dashboard/DashboardApp";

export default () => {
    const dashBoardRef = useRef(null);
    useEffect(() => {
        mount(dashBoardRef.current);
    }, []);

    return (
        <div ref={dashBoardRef}></div>
    )
}