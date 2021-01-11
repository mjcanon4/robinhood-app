import React from "react";
import "./StatsRow.css";
import StockChart from "./images/stock.svg";
import { db } from "./Firebase";

function StatsRow(props) {
  const percentage = ((props.price - props.openPrice) / props.openPrice) * 100;

  const getStock = () => {
    db.collection("myStocks")
      .where("ticker", "==", props.name)
      .get()
      .then((querySnapshot) => {
        if (!querySnapshot.empty) {
          querySnapshot.forEach(function (doc) {
            db.collection("myStocks")
              .doc(doc.id)
              .update({
                shares: doc.data().shares + 1,
              });
          });
        } else {
          db.collection("myStocks").add({ ticker: props.name, shares: 1 });
        }
      });
  };
  return (
    <div className="row" onClick={getStock}>
      <div className="row_intro">
        <h1>{props?.name}</h1>
        <p>{props.volume && props.volume + " shares"}</p>
      </div>
      <div className="row_chart">
        <img src={StockChart} height={16} />
      </div>
      <div className="row_numbers">
        <p className="row_price">{props.price}</p>
        <p className="row_percentage"> {Number(percentage).toFixed(2)}%</p>
      </div>
    </div>
  );
}

export default StatsRow;
