import PricingPage from "..";
import getSnapShot from "../../../utils/getSnapShot";

test("Pricing page snapshot when loading is false", () => {
  getSnapShot(PricingPage, { isLoading: false });
});

test("Pricing page snapshot when loading is true", () => {
  getSnapShot(PricingPage, { isLoading: true });
});
