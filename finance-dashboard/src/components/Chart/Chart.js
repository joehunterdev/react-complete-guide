import ChartBar from "./ChartBar";
import "./Chart.css";

//receives generic number of props
//max val needs to be derived
//label  can be set as unique identifier

const Chart = (props) => {
  //transform to number
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

  //spread pulls out just the values
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
         key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
