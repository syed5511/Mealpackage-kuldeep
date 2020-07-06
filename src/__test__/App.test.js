import App from "../App";
import getSnapShot from "../utils/getSnapShot";

test("App js snapshot", () => {
  getSnapShot(App);
});
