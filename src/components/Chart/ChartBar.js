import './ChartBar.css'
const ChartBar = (props) => 
{
    
    let barFillHeight='0%';
    if(props.maxVal>0){
        barFillHeight=Math.round((props.dataPoint.Value/props.maxVal)*100)+'%';
    }
        
    return(
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div
                    className='chart-bar__fill'
                    style={{ height: barFillHeight }}>      
                </div>
            </div>
                <div className='chart-bar__label'>{props.dataPoint.label}
                </div>
        </div>
    )
}
export default ChartBar;