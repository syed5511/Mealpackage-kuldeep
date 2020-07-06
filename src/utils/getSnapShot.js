import React from "react";
import ReactTestRenderer from "react-test-renderer";

const getSnapShot = (Component, props = {}) => {
  const component = ReactTestRenderer.create(<Component {...props} />);
  const json = component.toJSON();
  expect(json).toMatchSnapshot();
};

export default getSnapShot;
