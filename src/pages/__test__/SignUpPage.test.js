import SignUpPage from "../signup";
import getSnapShot from "../../utils/getSnapShot";

test("SignUp page snapshot", () => {
  const snapshot = getSnapShot(SignUpPage);
  snapshot({ isMobile: false });
  snapshot({ isMobile: true }, "u");
});
