import React, { useState, useEffect } from "react";
import "./Main.scss";
import { getDynamic } from "../../api/connections";
import { liter, literTitle } from "../../constants";

import arrows from "./assets/img/arrows.png";
import {
  XYPlot,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
  YAxis,
  LineMarkSeries,
} from "react-vis";

function cutter(s) {
  return s.toFixed(2);
}

function Main({ courses }) {
  const [_history, set_history] = useState({ bitcoin: [], ethereum: [] });
  const [_inputs, set_inputs] = useState({ from: 0, to: 0 });
  const [_from, set_from] = useState("btc");
  const [_to, set_to] = useState("usd");
  const setDefault = () => {
    set_inputs({ from: 0, to: 0 });
  };

  const handleRadio = (e) => {
    if (e.target.name === "from") {
      set_from(e.target.value);
      loadData(liter[e.target.value]);
      set_inputs({
        ..._inputs,
        from: cutter(_inputs.to * courses[e.target.value][_to]),
      });
    } else {
      set_to(e.target.value);
      set_inputs({
        ..._inputs,
        to: cutter(_inputs.from * courses[_from][e.target.value]),
      });
    }
  };

  const handleInput = (e) => {
    if (e.target.name === "from") {
      set_inputs({
        from: e.target.value,
        to: cutter(e.target.value * courses[_from][_to]),
      });
    } else {
      set_inputs({
        to: e.target.value,
        from: cutter(e.target.value * courses[_from][_to]),
      });
    }
  };

  const loadData = (currency) => {
    getDynamic(currency).then((item) => set_history({ item }));
  };

  useEffect(() => {
    getDynamic(liter[_from]).then((item) => set_history({ item }));
  }, []);

  if (!courses) return "Данные отсутствуют";
  return (
    <main className="main">
      <div className="container">
        <h1 className="title">Конвертер криптовалют</h1>
        <div className="main-wrapper">
          <div className="converter">
            <div className="converter-from">
              <div className="converter-controls">
                <label htmlFor="from-btc">
                  <input
                    type="radio"
                    className="converter__buttons"
                    value="btc"
                    id="from-btc"
                    name="from"
                    defaultChecked
                    onChange={handleRadio}
                  />
                  BTC
                </label>
                <label htmlFor="from-eth">
                  <input
                    type="radio"
                    className="converter__buttons"
                    value="eth"
                    id="from-eth"
                    name="from"
                    onChange={handleRadio}
                  />
                  ETH
                </label>
                <label htmlFor="from-usd">
                  <input
                    type="radio"
                    className="converter__buttons"
                    value="usd"
                    id="from-usd"
                    name="from"
                    onChange={handleRadio}
                  />
                  USD
                </label>
              </div>

              <input
                className="converter__input"
                type="number"
                value={_inputs.from}
                onInput={handleInput}
                name="from"
              />
            </div>
            <img
              className="converter__arrows"
              src={arrows}
              alt="Иконка: стрелки"
            />
            <div className="converter-to">
              <div className="converter-controls">
                <label htmlFor="to-btc">
                  <input
                    type="radio"
                    className="converter__buttons"
                    value="btc"
                    id="to-btc"
                    name="to"
                    onChange={handleRadio}
                  />
                  BTC
                </label>
                <label htmlFor="to-eth">
                  <input
                    type="radio"
                    className="converter__buttons"
                    value="eth"
                    id="to-eth"
                    name="to"
                    onChange={handleRadio}
                  />
                  ETH
                </label>
                <label htmlFor="to-usd">
                  <input
                    type="radio"
                    className="converter__buttons"
                    value="usd"
                    id="to-usd"
                    name="to"
                    defaultChecked
                    onChange={handleRadio}
                  />
                  USD
                </label>
              </div>

              <input
                className="converter__input"
                type="number"
                name="to"
                value={_inputs.to}
                onInput={handleInput}
              />
            </div>
          </div>
          {_history && (
            <div className="graph">
              <div className="graph__bitcoin">
                <span className="graph__name">{literTitle[_from]}</span>

                <XYPlot width={300} height={300}>
                  <VerticalGridLines />
                  <HorizontalGridLines />
                  <XAxis />
                  <YAxis />
                  <LineMarkSeries
                    className="linemark-series-example"
                    style={{
                      strokeWidth: "3px",
                    }}
                    lineStyle={{ stroke: "#a8e5ea" }}
                    markStyle={{ stroke: "rgb(43 107 108)" }}
                    data={_history.item}
                  />
                </XYPlot>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default Main;
