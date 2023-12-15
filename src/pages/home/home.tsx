import Barchartbox from "../../components/Barchartbox/Barchartbox";
import Bigchartbox from "../../components/Bigchartbox/Bigchartbox";
import Chartbox from "../../components/Chartbox/Chartbox";
import Piechartbox from "../../components/Piechartbox/Piechartbox";
import Topbox from "../../components/Topbox/Topbox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
const Home = () => {
  return (
    <div className="home grid grid-cols-4 gap-5 auto-rows-w-row">
      <div className="box box1 p-5 border-solid border-2 border-sky-500 row-span-3 col-span-1">
        <Topbox />
      </div>
      <div className="box box2 p-5 border-solid border-2 border-sky-500 ">
        <Chartbox {...chartBoxUser} />
      </div>
      <div className="box box3 p-5 border-solid border-2 border-sky-500 ">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box4 p-5 border-solid border-2 border-sky-500 row-span-3 col-span-1">
        <Piechartbox />
      </div>
      <div className="box box5 p-5 border-solid border-2 border-sky-500 ">
        <Chartbox {...chartBoxProduct} />
      </div>
      <div className="box box6 p-5 border-solid border-2 border-sky-500 ">
        <Chartbox {...chartBoxRevenue} />
      </div>
      <div className="box box7 p-5 border-solid border-2 border-sky-500 row-span-2 col-span-2">
        <Bigchartbox />
      </div>
      <div className="box box8 p-5 border-solid border-2 border-sky-500 ">
        <Barchartbox {...barChartBoxVisit} />
      </div>
      <div className="box box8 p-5 border-solid border-2 border-sky-500 ">
        <Barchartbox {...barChartBoxRevenue} />
      </div>
    </div>
  );
};

export default Home;
