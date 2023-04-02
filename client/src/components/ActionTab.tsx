import TopGrid from './TopGrid'
import  BarGraph from './BarGraph'

const ActionTab = () => {
  return (
    <div className="columns">
      <div className="column">
        <TopGrid/>
        <BarGraph/>
      </div>
    </div>
  );
}

export { ActionTab }