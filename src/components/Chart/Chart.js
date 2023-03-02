import ChartBar from "./ChartBar"
import './Chart.css'

const Chart = (props) => {

  const valueArray = props.data.map(data => data.value)
  const totalMaximum = Math.max(...valueArray)

  return (
    <div className="chart">
      {
        props.data.map(chart =>
          <ChartBar
            key={chart.label}
            value={chart.value}
            maxValue={totalMaximum}
            label={chart.label} />
        )}
    </div>
  )
}

export default Chart
