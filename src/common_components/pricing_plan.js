import React from "react";
import Button from "./button";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

import "./pricing_plan.css";

export default function PricingPlan({ isMobile }) {
  const [meal1, setMeal1] = React.useState("2");

  const handleMeal1 = (event, newMeal) => {
    setMeal1(newMeal);
  };

  const [meal2, setMeal2] = React.useState("2");

  const handleMeal2 = (event, newMeal) => {
    setMeal2(newMeal);
  };

  const [meal3, setMeal3] = React.useState("2");

  const handleMeal3 = (event, newMeal) => {
    setMeal3(newMeal);
  };

  return (
    <>
      <div className="pricing_content">
        <div class="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
          {!isMobile && <h3 class="keep_it_healthy">Keep it healthy</h3>}
          <h1 class="simple_fair">Simple, fair pricing.</h1>
          <p class="lead simple_healthy">
            Simple sample sample sample healthy healthy{" "}
            <span>FREE DELIVERY</span> everyday Simple sample sample sample
            healthy healthy
          </p>
        </div>
        <div class="container">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm pricing_card_1">
              <div class="card-body">
                <img className="img_1" src="svg/eat.svg" />
                <h4 class="my-0 font-weight-normal one_person_h">
                  One Person Plan
                </h4>
                <p className="plan_card_content">
                  Every meal plan comes with Entrees +Sides+ Fresh jucies one
                  more item you can have
                </p>

                <ToggleButtonGroup
                  value={meal1}
                  exclusive
                  onChange={handleMeal1}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    value="2"
                    aria-label="left aligned"
                    className="qty-selector"
                  >
                    2
                  </ToggleButton>
                  <ToggleButton
                    value="3"
                    aria-label="centered"
                    className="qty-selector"
                  >
                    3
                  </ToggleButton>
                  <ToggleButton
                    value="4"
                    aria-label="right aligned"
                    className="qty-selector"
                  >
                    4
                  </ToggleButton>
                </ToggleButtonGroup>

                <span className="meals">Meals</span>
                <div className="row per-meal">
                  <div className="col-6 border_up border_right">
                    <div className="amount_left">
                      $90.99 <span>/ Meal</span>
                    </div>

                    <div className="amount_subtext_left">Free Delivery</div>
                  </div>
                  <div className="col-6 border_up">
                    <div className="amount_right">$19.98</div>
                    <div className="amount_subtext_right">Total</div>
                  </div>
                </div>

                <Button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary card-action"
                >
                  Two Person Plan
                </Button>
              </div>
            </div>
            <div class="card mb-4 shadow-sm pricing_card_2">
              <div class="card-body">
                <img className="img_2" src="svg/eat.svg" />
                <h4 class="my-0 font-weight-normal two_person_h">
                  Two Person Plan
                </h4>
                <p className="plan_card_content">
                  Every meal plan comes with Entrees +Sides+ Fresh jucies one
                  more item you can have
                </p>

                <ToggleButtonGroup
                  value={meal2}
                  exclusive
                  onChange={handleMeal2}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    value="2"
                    aria-label="left aligned"
                    className="qty-selector"
                  >
                    2
                  </ToggleButton>
                  <ToggleButton
                    value="3"
                    aria-label="centered"
                    className="qty-selector"
                  >
                    3
                  </ToggleButton>
                  <ToggleButton
                    value="4"
                    aria-label="right aligned"
                    className="qty-selector"
                  >
                    4
                  </ToggleButton>
                </ToggleButtonGroup>

                <span className="meals">Meals</span>

                <div className="row per-meal">
                  <div className="col-6 border_up border_right">
                    <div className="amount_left">
                      $90.99 <span>/ Meal</span>
                    </div>

                    <div className="amount_subtext_left">Free Delivery</div>
                  </div>
                  <div className="col-6 border_up">
                    <div className="amount_right">$19.98</div>
                    <div className="amount_subtext_right">Total</div>
                  </div>
                </div>

                <Button
                  type="button"
                  class="btn btn-lg btn-block btn-primary card-action"
                >
                  Get started
                </Button>
              </div>
            </div>
            <div class="card mb-4 shadow-sm pricing_card_3">
              <div class="card-body">
                <img className="img_3" src="svg/eat.svg" />
                <h4 class="my-0 font-weight-normal four_person_h">
                  Four Person Plan
                </h4>
                <p className="plan_card_content">
                  Every meal plan comes with Entrees +Sides+ Fresh jucies one
                  more item you can have
                </p>

                <ToggleButtonGroup
                  value={meal3}
                  exclusive
                  onChange={handleMeal3}
                  aria-label="text alignment"
                >
                  <ToggleButton
                    value="2"
                    aria-label="left aligned"
                    className="qty-selector"
                  >
                    2
                  </ToggleButton>
                  <ToggleButton
                    value="3"
                    aria-label="centered"
                    className="qty-selector"
                  >
                    3
                  </ToggleButton>
                  <ToggleButton
                    value="4"
                    aria-label="right aligned"
                    className="qty-selector"
                  >
                    4
                  </ToggleButton>
                </ToggleButtonGroup>

                <span className="meals">Meals</span>

                <div className="row per-meal">
                  <div className="col-6 border_up border_right">
                    <div className="amount_left">
                      $90.99 <span>/ Meal</span>
                    </div>

                    <div className="amount_subtext_left">Free Delivery</div>
                  </div>
                  <div className="col-6 border_up">
                    <div className="amount_right">$19.98</div>
                    <div className="amount_subtext_right">Total</div>
                  </div>
                </div>

                <Button
                  type="button"
                  class="btn btn-lg btn-block btn-primary card-action"
                >
                  Contact us
                </Button>
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
