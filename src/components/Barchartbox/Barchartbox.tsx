
import { BarChart, Bar, ResponsiveContainer, Tooltip } from "recharts";

interface Props {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
}

const Barchartbox = (props: Props) => {
  return (
    <div className="barChartBox">
      <div className="title text-xl mb-5">{props.title}</div>
      <div className="chart">
        <ResponsiveContainer width="100%" height={150}>
          <BarChart data={props.chartData}>
            <Tooltip
              contentStyle={{ background: "☐#2a3447", borderRadius: "5px" }}
              labelStyle={{ display: "none" }}
            />

            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Barchartbox;
