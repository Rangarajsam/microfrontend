// import React from 'react';
// import { mount } from 'marketing/MarketingApp';

// console.log(mount);

// export default () => {
//   return <h1>Hi there!</h1>;
// };


import React from "react";
import MarketingApp from "./components/MarketingApp";
export default () => {
    return (
      <div>
        <h1>Hi, I am the container App running others updated with access</h1>
        <hr />
        <MarketingApp />
      </div>
    )
}