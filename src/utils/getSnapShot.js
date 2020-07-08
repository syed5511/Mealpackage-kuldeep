import React from "react";
import { create, act } from "react-test-renderer";

const matchSnapShot = (json) => {
  expect(json).toMatchSnapshot();
};

const getSnapShot = (Component) => {
  let component;
  return (props = {}, type = "c") => {
    if (type === "c") {
      act(() => {
        component = create(<Component {...props} />);
      });
    } else {
      act(() => {
        component.update(<Component {...props} />);
      });
    }
    matchSnapShot(component.toJSON());
    return component;
  };
};

export default getSnapShot;
