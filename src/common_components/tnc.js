import React from "react";
import { node, string, oneOfType } from "prop-types";

import { Container } from "./tnc.css";

const Tnc = ({ children }) => <Container>{children}</Container>;

Tnc.propTypes = {
  children: oneOfType([string, node]),
};

Tnc.defaultProps = {
  children:
    'By clicking "Place Order & Choose Meals", you agree you are purchasing a continuous subscription and will receive weekly deliveries billed to your designated payment method until you cancel. Pricing is based on your plan choices available in your Plan Settings page and is subject to change. You may cancel your subscription online at any time by emailing cancellations@companyname.com and following the instructions in our response. Any orders identified as "Processing" or "Shipped" on your Upcoming page, however, cannot be cancelled. For more information see our Terms of Use and FAQs.',
};

export default Tnc;
