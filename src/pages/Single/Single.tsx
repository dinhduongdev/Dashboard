import "./Single.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

interface Props {
  id: number;
  img?: string;
  title: string;
  info: object;
  chart: {
    dataKeys: {
      name: string;
      color: string;
    }[];
    data: object[];
  };
  activities?: { time: string; text: string }[];
}
const Single = (props: Props) => {
  return (
    <div className="single grid grid-cols-2">
      <div className="view ">
        <div className="info">
          <div className="topInfo flex items-center gap-5">
            {props.img && (
              <img
                src={props.img}
                alt=""
                className="w-[50px] h-[50px] rounded-2xl object-cover "
              />
            )}
            <h1 className="font-medium">{props.title}</h1>
            <button>udate</button>
          </div>
          <div className="details text-lg">
            {Object.entries(props.info).map((item) => (
              <div className="item my-5" key={item[0]}>
                <span className="itemTitle">{item[0]}</span>
                <span className="itemValue">{item[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <hr className="w-[90%] h-0 border-gray-400-50 my-5" />
        {props.chart && (
          <div className="chart w-[80%] h-[400px] mt-10">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                width={500}
                height={300}
                data={props.chart.data}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                {props.chart.dataKeys.map((dataKey) => (
                  <Line
                    type="monotone"
                    dataKey={dataKey.name}
                    stroke={dataKey.color}
                    activeDot={{ r: 8 }}
                  />
                ))}

                <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>
      <div className="activities left-0">
        <h2>Latest Activities</h2>
        {props.activities && (
          <ul>
            {props.activities.map((activity) => (
              <li key={activity.text}>
                <div>
                  <p>{activity.text}</p>
                  <time>{activity.time}</time>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Single;
