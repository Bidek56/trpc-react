import React, { useState } from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useAppContext } from "../context/AppContext";

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarGraph = () => {

    const { selectedTime, selectedConv } = useAppContext();

    // console.log("Sel:", selectedConv);

    const [focusBar, setFocusBar] = useState < any | null > (null);

    var dataKey = "uv";
    switch (selectedTime) {
      case 7:
        dataKey = "uv";
        break;
      case 14:
        dataKey = "pv";
        break;
      default:
        dataKey = "amt";
    }

    const locData: any[] = data.map((x) => ({
      ...x, uv: x.uv / selectedConv
          , pv: x.pv / selectedConv
          , amt: x.amt / selectedConv
    }));

    // console.log(locData);

    return(
      <BarChart width={800} height={400} data = {locData}
          onMouseMove = {
              (state) => {
                  if (state.isTooltipActive) {
                      setFocusBar(state.activeTooltipIndex);
                  } else {
                      setFocusBar(null);
                  }
              }
          }> 
          <XAxis dataKey="name"/>
          <YAxis/>
          <Bar dataKey={dataKey} barSize={30} fill="#8884d8" />
          <Tooltip cursor = {{fill: 'transparent'}}/>
        </BarChart>
      )
}

export default BarGraph;
