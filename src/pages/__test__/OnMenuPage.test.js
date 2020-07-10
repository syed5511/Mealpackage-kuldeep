import OnMenuPage from "../on-menu";
import getSnapShot from "../../utils/getSnapShot";

test("OnMenu page snapshot", () => {
  getSnapShot(OnMenuPage)();
});
