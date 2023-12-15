import { LineChart, Line, ResponsiveContainer, Tooltip } from "recharts";
import { Link } from "react-router-dom";

interface Props {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
}
const Chartbox = (props: Props) => {
  return (
    <div className="chartBox grid grid-cols-5  h-full">
      <div className="boxInfo col-span-2 flex flex-col gap-5">
        <div className="title flex">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1 className="font-medium text-2xl">{props.number}</h1>
        <Link to="/" style={{ color: props.color }}>
          view all
        </Link>
      </div>
      <div className="chartInfo col-span-3 grid grid-rows-3 ">
        <div className="chart w-full h-full row-span-2">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={props.chartData}>
              <Tooltip
                contentStyle={{ background: "transparent", border: "none" }}
                labelStyle={{ display: "none" }}
              />
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke={props.color}
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="texts flex justify-end gap-2">
          <div
            className="percentage"
            style={{ color: props.percentage < 0 ? "tomato" : "limegreen " }}
          >
            {props.percentage}
          </div>
          <div className="duration">this moth</div>
        </div>
      </div>
    </div>
  );
};

export default Chartbox;
