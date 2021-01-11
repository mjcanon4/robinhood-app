import React, { useState } from "react";
import "./Newsfeed.css";
import LineGraph from "./LineGraph";
import TimeLine from "./TimeLine";
import Chip from "@material-ui/core/Chip";
import { Avatar } from "@material-ui/core";
import Credits from "./Credits";

function Newsfeed() {
  const [topics, setTopics] = useState([
    "Technology",
    "Top Movers",
    "Upcoming Earnings",
    "Crypto",
    "Cannabis",
    "Healthcare Supplies",
    "Index ETFs",
    "China",
    "Pharma",
  ]);
  return (
    <div className="newsfeed">
      <div className="newsfeed_container">
        <div className="newsfeed_chartSection">
          <div className="newsfeed_portfolio">
            <h1>$2,114,890.78</h1>
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
        <div className="market_section">
          <div className="market_box">
            <p>Fund Your Account</p>
            <h5>
              Your bank account is ready! Fund your Robinhood account to begin
              trading.
            </h5>
          </div>
        </div>
        <div className="popular_section">
          <div className="popular_intro">
            <h1>Popular List</h1>
            <p>Show More</p>
          </div>
          <div className="popular_badges">
            {topics.map((topic) => (
              <Chip
                className="topic_badge"
                variant="outlined"
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
      <Credits />
    </div>
  );
}

export default Newsfeed;
