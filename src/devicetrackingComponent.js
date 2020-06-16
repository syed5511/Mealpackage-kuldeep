// eslint-disable-next-line
import React, { Fragment } from "react";

import { isMobile, deviceType } from "react-device-detect";

export const Mobile = ({ type }) => {
  console.log("===>>>", type);
  return <h1>This is Mobile</h1>;
};
export const DeskTop = ({ isMobile }) => {
  return <h1>This is Desktop</h1>;
};

function App() {
  console.log("Device type ", deviceType);
  return (
    <Fragment>
      {isMobile === true ? (
        <Mobile type={isMobile} />
      ) : (
        <DeskTop type={isMobile} />
      )}
    </Fragment>
  );
}

export default App;
