import React, { useState, useEffect } from "react";
import "./Stats.css";
import StatsRow from "./StatsRow";
import axios from "axios";
import { db } from "./Firebase.js";

const token = "bvt6ven48v6rku8c37n0";
const base_URL = "https://finnhub.io/api/v1/quote";

function Stats() {
  const [stockData, setStocksData] = useState([]);
  const [myStocks, setMyStocks] = useState([]);

  const getMyStocks = () => {
    db.collection("myStocks").onSnapshot((snapshot) => {
      let promises = [];
      let tempData = [];
      snapshot.docs.map((doc) => {
        promises.push(
          getStocksData(doc.data().ticker).then((res) => {
            tempData.push({
              id: doc.id,
              data: doc.data(),
              info: res.data,
            });
          })
        );
      });
      Promise.all(promises).then(() => {
        setMyStocks(tempData);
      });
    });
  };

  const getStocksData = (stock) => {
    return axios
      .get(`${base_URL}?symbol=${stock}&token=${token}`)
      .catch((error) => {
        console.error("Error", error.message);
      });
  };

  useEffect(() => {
    let tempData = [];
    const stocksList = ["AAPL", "MSFT", "TSLA", "AMZN", "BABA", "UBER", "SBUX"];

    let promises = [];
    getMyStocks();
    stocksList.map((stock) => {
      promises.push(
        getStocksData(stock).then((res) => {
          tempData.push({
            name: stock,
            ...res.data,
          });
        })
      );
    });

    Promise.all(promises).then(() => {
      console.log(tempData);
      setStocksData(tempData);
    });
  }, []);

  return (
    <div className="stats">
      <div className="stats_container">
        <div className="stats_header stats_lists">
          <p>Stocks</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">
            {myStocks.map((stock) => (
              <StatsRow
                key={stock.data.ticker}
                name={stock.data.ticker}
                openPrice={stock.info.o}
                volume={stock.data.shares}
                price={stock.info.c}
              />
            ))}
          </div>
        </div>
        <div className="stats_header">
          <p>Lists</p>
        </div>
        <div className="stats_content">
          <div className="stats_rows">
            {stockData.map((stock) => (
              <StatsRow
                key={stock.name}
                name={stock.name}
                openPrice={stock.o}
                price={stock.c}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
