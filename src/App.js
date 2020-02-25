import React, { useState } from "react";
import { ResponsiveBar } from "@nivo/bar";
import { ResponsivePie } from "@nivo/pie";
import ReactSelect from "react-select";
import { nameData, scopeData } from "./mockData";

import "./App.css";

const App = () => {
  /* 
  To-do:
    - Due to time, I created this in one component. 
    Normally I would split it into smaller components;
    - Add remove filter in select;
    - Add color for each specific legends;
    - Add year in center of pie chart, using position relative;
    - Fix nivo proptype warnings;
  */
  const [scope, setScope] = useState("");
  const [method, setMethod] = useState("");
  const scopeOptions = [
    { value: "Scope 1", label: "Scope 1" },
    { value: "Scope 2", label: "Scope 2" },
    { value: "Scope 3", label: "Scope 3" }
  ];

  const sumOrDiffOptions = [
    { value: "Sum", label: "Sum" },
    { value: "Diff", label: "Diff" }
  ];

  const handleScopeSelect = option => {
    setScope(option.value);
  };

  const handleSumDiffSelect = option => {
    setMethod(option.value);
  };

  let filteredNameData =
    scope.length > 0 ? nameData.filter(item => item.scope === scope) : nameData;

  const sortedNameData = filteredNameData.map(item => {
    if (method.length === 0) {
      return {
        name: item.name,
        locationSum: item.locationSum.toFixed(2),
        marketSum: item.marketSum.toFixed(2),
        marketDiff: item.marketDiff ? item.marketDiff.toFixed(2) : 0,
        locationDiff: item.locationDiff ? item.locationDiff.toFixed(2) : 0
      };
    } else {
      const marketProps = `market${method}`;
      const locationProps = `location${method}`;

      return {
        name: item.name,
        [marketProps]: item[marketProps] ? item[marketProps].toFixed(2) : 0,
        [locationProps]: item[locationProps]
          ? item[locationProps].toFixed(2)
          : 0
      };
    }
  });

  const pieData = [];
  scopeData.scopeData.forEach(item => {
    const sortedData = [];
    for (let [key, value] of Object.entries(item)) {
      if (key !== "year") {
        sortedData.push({
          id: key,
          label: key,
          value: value
        });
      }
    }

    pieData.push({ year: item.year, sortedData });
  });

  return (
    <div className="AppConatiner">
      <div className="Year">2019 Data</div>
      <div className="SelectContainer">
        <div className="Select">
          <ReactSelect
            value={scope.length > 0 && [{ value: scope, label: scope }]}
            options={scopeOptions}
            onChange={handleScopeSelect}
            placeholder="Choose Scope"
          />
        </div>
        <div className="Select">
          <ReactSelect
            value={method.length > 0 && [{ value: method, label: method }]}
            options={sumOrDiffOptions}
            onChange={handleSumDiffSelect}
            placeholder="Choose Method"
          />
        </div>
      </div>
      <div className="BarContainer">
        <ResponsiveBar
          data={sortedNameData}
          keys={["locationSum", "marketSum", "locationDiff", "marketDiff"]}
          indexBy="name"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          colors={{ scheme: "paired" }}
          borderColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "country",
            legendPosition: "middle",
            legendOffset: 32
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
          animate={true}
          motionStiffness={90}
          motionDamping={15}
        />
      </div>
      <div className="Year">Scope Data of 2017 - 2019</div>
      <div className="PieContainer">
        {pieData.map((pie, index) => {
          return (
            <ResponsivePie
              key={index}
              data={pie.sortedData}
              margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
              innerRadius={0.5}
              padAngle={0.7}
              cornerRadius={3}
              colors={{ scheme: "category10" }}
              borderWidth={1}
              borderColor={{ from: "color", modifiers: [["darker", 0.2]] }}
              radialLabelsSkipAngle={10}
              radialLabelsTextXOffset={6}
              radialLabelsTextColor="#333333"
              radialLabelsLinkOffset={0}
              radialLabelsLinkDiagonalLength={16}
              radialLabelsLinkHorizontalLength={24}
              radialLabelsLinkStrokeWidth={1}
              radialLabelsLinkColor={{ from: "color" }}
              slicesLabelsSkipAngle={10}
              slicesLabelsTextColor="#333333"
              animate={true}
              motionStiffness={90}
              motionDamping={15}
              legends={[
                {
                  anchor: "bottom",
                  direction: "row",
                  translateY: 20,
                  itemWidth: 100,
                  itemHeight: 18,
                  itemTextColor: "#999",
                  symbolSize: 18,
                  symbolShape: "circle",
                  effects: [
                    {
                      on: "hover",
                      style: {
                        itemTextColor: "#000"
                      }
                    }
                  ]
                }
              ]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
