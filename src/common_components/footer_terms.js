import React from "react";
import "./footer_terms.css";

export default function FooterTerms({ isMobile }) {
  return (
    <div className="footer_terms">
      <div className="row cover_terms">
        {isMobile ? (
          <div className="col-12 llc">
            @ company name, LLC 2020 | A better way to eat healthy & fresh
          </div>
        ) : (
          <>
            <div className="col-1"></div>
            <div className="col-5 llc">
              @ company name, LLC 2020 | A better way to eat healthy & fresh
            </div>
            <div className="col-1"></div>

            <div className="col-4 llc">
              Do Not "Sell My Info" &nbsp;
              <span>
                <a href="#">Privacy Policy </a>
              </span>
              <span>
                <a href="#"> Terms of Use</a>
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
