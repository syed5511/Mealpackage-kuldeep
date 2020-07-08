import PricingPage from "../pricing";
import getSnapShot from "../../utils/getSnapShot";

test("Pricing page snapshot", () => {
  const snapshot = getSnapShot(PricingPage);
  snapshot({ isMobile: false, isLoading: true });
  snapshot({ isMobile: true, isLoading: true }, "u");
  snapshot({ isMobile: true, isLoading: false }, "u");
  snapshot({ isMobile: false, isLoading: false }, "u");
});
