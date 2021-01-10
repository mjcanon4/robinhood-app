import React from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";

function Newsfeed() {
  return (
    <div className="newsfeed">
      <div className="newsfeed_container">
        <div className="newsfeed_chartSection">
          <div className="newsfeed_portfolio">
            <h1>$114,890.78</h1>
            <p>+$44.23 (0.02%) Today</p>
          </div>
          <div className="newsfeed_chart">
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className="buying_power">
          <h2>Buying Power</h2>
          <h2>$892.89</h2>
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
