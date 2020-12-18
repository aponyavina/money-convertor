import React, { useState } from "react";
import { literTitle } from "../../constants";
import { Redirect } from "react-router-dom";
import {
  XYPlot,
  XAxis,
  YAxis,
  VerticalGridLines,
  HorizontalGridLines,
  VerticalBarSeries,
} from "react-vis";
import "./Portfolio.scss";

function Portfolio({ courses = false }) {
  const [profile, set_profile] = useState({
    btc: 0,
    eth: 0,
    usd: 0,
  });

  const changeValue = (item, direction) => {
    set_profile({ ...profile, [item]: profile[item] + direction });
  };

  const computeTotal = () => {
    if (!courses) return <Redirect to="/" />;
    const { btc, eth, usd } = profile;
    return (
      Math.floor(btc * courses.btc?.usd) +
      Math.floor(eth * courses.eth?.usd) +
      usd
    );
  };
  if (!courses) return <Redirect to="/" />;
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Мой профиль</h1>
        <div className="main-wrapper">
        <h4>Total in USD</h4>
        <span className="total">{computeTotal()}$</span>
          <h3>{literTitle["btc"]}</h3>
          <div className="currency_group">
            <button
              disabled={profile.btc === 0}
              onClick={() => changeValue("btc", -1)}
            >
              -
            </button>
            <input type="number" value={profile.btc} readOnly />
            <button onClick={() => changeValue("btc", 1)}>+</button>
          </div>

          <h3>{literTitle["eth"]}</h3>
          <div className="currency_group">
            <button
              disabled={profile.eth === 0}
              onClick={() => changeValue("eth", -1)}
            >
              -
            </button>
            <input type="number" value={profile.eth} readOnly />
            <button onClick={() => changeValue("eth", 1)}>+</button>
          </div>

          <h3>{literTitle["usd"]}</h3>
          <div className="currency_group">
            <button
              disabled={profile.usd === 0}
              onClick={() => changeValue("usd", -1)}
            >
              -
            </button>
            <input type="number" value={profile.usd} readOnly />
            <button onClick={() => changeValue("usd", 1)}>+</button>
          </div>

          <XYPlot xType="ordinal" width={600} height={300} xDistance={100}>
            <VerticalGridLines />
            <HorizontalGridLines />
            <XAxis />
            <YAxis />
            <VerticalBarSeries
              className="vertical-bar-series-example"
              data={[{ y: profile.usd, x: "usd" }]}
            />
            <VerticalBarSeries data={[{ y: profile.eth, x: "eth" }]} />
            <VerticalBarSeries data={[{ y: profile.btc, x: "btc" }]} />
          </XYPlot>
        </div>
      </div>
    </main>
  );
}

export default Portfolio;
