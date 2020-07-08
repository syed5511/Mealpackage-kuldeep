import ThankYouPage from "../thankyou";
import getSnapShot from "../../utils/getSnapShot";

test("ThankYou page snapshot", () => {
  const snapshot = getSnapShot(ThankYouPage);
  snapshot({ isMobile: false });
  snapshot({ isMobile: true }, "u");
});
