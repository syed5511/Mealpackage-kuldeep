import SignInPage from "../signin";
import getSnapShot from "../../utils/getSnapShot";

test("SignIn page snapshot", () => {
  const snapshot = getSnapShot(SignInPage);
  snapshot({ isMobile: false });
  snapshot({ isMobile: true }, "u");
});
