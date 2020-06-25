import React from "react";
import Skeleton from "../../../common_components/skeleton";

import "./index.css";

export default function PricingLoader({ isMobile }) {
  return (
    <>
      <div className="pricing_content">
        <div class="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
          {!isMobile && (
            <h3 class="keep_it_healthy">
              <Skeleton
                primaryColor="#dbe1e8d4"
                width="200px"
                height="24px"
                style={{ margin: "auto", marginTop: 48 }}
              />
            </h3>
          )}
          <h1 class="simple_fair">
            <Skeleton
              width="680px"
              primaryColor="#dbe1e8d4"
              height="64px"
              style={{ margin: "auto" }}
            />
          </h1>
          <p class="lead simple_healthy">
            <Skeleton
              width="480px"
              primaryColor="#dbe1e8d4"
              height="18px"
              style={{ margin: "auto" }}
            />
          </p>
        </div>
        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm pricing_card_1">
              <div class="card-body">
                <Skeleton
                  width="136px"
                  className="circle"
                  height="136px"
                  style={{ margin: "auto", marginTop: 48 }}
                />
                <h4 class="my-0 font-weight-normal one_person_h">
                  <Skeleton width="100%" height="16px" />
                </h4>
                <p className="plan_card_content">
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                </p>

                <Skeleton width="100%" height="48px" />

                <div className="row per-meal">
                  <div className="col-6 border_up border_right">
                    <div className="amount_left">
                      <Skeleton width="80px" height="24px" />
                    </div>
                  </div>
                  <div className="col-6 border_up">
                    <div className="amount_right">
                      <Skeleton
                        width="80px"
                        height="24px"
                        style={{ marginLeft: 4 }}
                      />
                    </div>
                  </div>
                </div>

                <Skeleton width="100%" height="53px" />
              </div>
            </div>
            <div class="card mb-4 shadow-sm pricing_card_2">
              <div class="card-body">
                <Skeleton
                  width="136px"
                  className="circle"
                  height="136px"
                  style={{ margin: "auto", marginTop: 64 }}
                />
                <h4 class="my-0 font-weight-normal one_person_h">
                  <Skeleton width="100%" height="24px" />
                </h4>
                <p className="plan_card_content">
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                </p>

                <Skeleton width="100%" height="48px" />

                <div className="row per-meal">
                  <div className="col-6 border_up border_right">
                    <div className="amount_left">
                      <Skeleton width="80px" height="24px" />
                    </div>
                  </div>
                  <div className="col-6 border_up">
                    <div className="amount_right">
                      <Skeleton
                        width="80px"
                        height="24px"
                        style={{ marginLeft: 4 }}
                      />
                    </div>
                  </div>
                </div>

                <Skeleton width="100%" height="53px" />
              </div>
            </div>
            <div class="card mb-4 shadow-sm pricing_card_3">
              <div class="card-body">
                <Skeleton
                  width="136px"
                  className="circle"
                  height="136px"
                  style={{ margin: "auto", marginTop: 88 }}
                />
                <h4 class="my-0 font-weight-normal one_person_h">
                  <Skeleton width="100%" height="24px" />
                </h4>
                <p className="plan_card_content">
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                  <Skeleton
                    width="100%"
                    height="14px"
                    style={{ marginBottom: 4 }}
                  />
                </p>

                <Skeleton width="100%" height="48px" />

                <div className="row per-meal">
                  <div className="col-6 border_up border_right">
                    <div className="amount_left">
                      <Skeleton width="80px" height="24px" />
                    </div>
                  </div>
                  <div className="col-6 border_up">
                    <div className="amount_right">
                      <Skeleton
                        width="80px"
                        height="24px"
                        style={{ marginLeft: 4 }}
                      />
                    </div>
                  </div>
                </div>

                <Skeleton width="100%" height="53px" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="background_blue"></div>
      <div className="background_white"></div>
    </>
  );
}
