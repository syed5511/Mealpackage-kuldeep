import OnMenuPage from "../on-menu";
import getSnapShot from "../../utils/getSnapShot";

test("OnMenu page snapshot", () => {
  const component = getSnapShot(OnMenuPage)();
  expect(component.root.findByType("button").props.onClick()).toBe(2);
});
