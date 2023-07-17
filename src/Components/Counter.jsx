import React, { useState } from "react";
import CountUp from "react-countup";

export default function Counter() {
  return (
    <div className="position-absolute counter-section-wrapper">
      <div className="counter-section">
        <div className="counter-wrapper">
          <div className="counter-box">
            <div className="counter">
              <CountUp end={250} />
            </div>
            <div className="counter-text">Best Doctor</div>
          </div>
          <div className="counter-box">
            <div className="counter">
              <CountUp end={15} duration={3} />
            </div>
            <div className="counter-text">Clinic Location</div>
          </div>
          <div className="counter-box">
            <div className="counter">
              <CountUp end={20} duration={3} />
            </div>
            <div className="counter-text">Surgery Room</div>
          </div>
          <div className="counter-box">
            <div className="counter">
              +<CountUp end={1500} />
            </div>
            <div className="counter-text">Patient Capacity</div>
          </div>
        </div>
      </div>
    </div>
  );
}
