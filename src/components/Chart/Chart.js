import ChartBar from "./ChartBar";
import './Chart.css'
const Chart = (props) => {
    return (
        <div className='chart'>
        {props.dataPoints.map
        (
            (point)=><ChartBar dataPoint={point} maxVal={props.maxVal}/>
        )
        }
        </div>
    )
}
export default Chart;