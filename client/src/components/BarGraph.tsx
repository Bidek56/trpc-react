import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { useAppContext } from "../context/AppContext";

interface iTime {
  date: string,
  name: string,
  uv: number,
  pv: number,
  amt: number,
}

const data: iTime[] = [
  {
    date: '1/1/2023',
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    date: '1/2/2023',
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    date: '1/3/2023',
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    date: '1/4/2023',
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    date: '1/5/2023',
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    date: '1/6/2023',
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    date: '1/7/2023',
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BarGraph = () => {

    const { selectedTime, selectedConv } = useAppContext();

    var dataKey = "uv";
    var fill = "#82ca9d";
    switch (selectedTime) {
      case 7:
        dataKey = "uv";
        fill = "#82ca9d";
        break;
      case 14:
        dataKey = "pv";
        fill = "#8884d8";
        break;
      default:
        dataKey = "amt";
        fill = "#413ea0";
    }

    const locData: iTime[] = data.map((x) => ({
      ...x, uv: x.uv / selectedConv
          , pv: x.pv / selectedConv
          , amt: x.amt / selectedConv
    }));

    console.log("Graph render");

    return (
      <ResponsiveContainer width={700} height="75%">
        <BarChart data = {locData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date"/>
            <YAxis label={{ value: 'Action count', angle: -90, position: 'insideLeft' }} />
            <Bar dataKey={dataKey} barSize={30} fill={fill} />
            <Legend />
            <Tooltip cursor = {{fill: 'transparent'}}/>
          </BarChart>
        </ResponsiveContainer>
      )
}

export default BarGraph;
