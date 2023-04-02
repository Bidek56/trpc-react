import { trpc } from "../utils/trpc";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useAppContext } from "../context/AppContext";
import { iTime } from "../../../lib";

const BarGraph = () => {

    const { selectedTime, selectedConv } = useAppContext();
    const { isLoading, isError, data, error } = trpc.time.list.useQuery();

    if (isLoading)
      return <div>Loading...</div>

    if (isError)
      return <span>Error: {error.message}</span>

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

    // console.log("Graph render");

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
