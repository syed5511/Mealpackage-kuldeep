import { useContext } from "react";

import { MobileContext } from "../common_components/mobile_provider";

const useIsMobile = () => useContext(MobileContext);

export default useIsMobile;
