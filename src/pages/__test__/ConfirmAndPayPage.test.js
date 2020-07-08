import ConfirmPayPage from "../confirm-and-pay";
import getSnapShot from "../../utils/getSnapShot";

test("Confirm and pay page snapshot", () => {
  const snapshot = getSnapShot(ConfirmPayPage);
  snapshot({ isLoading: false });
  snapshot({ isLoading: true }, "u");
});
