import React from 'react'
import './style/Strategy.scss'

class Strategy extends React.Component {
  render () {
    let strategy = this.props.strategy
    let crewsString
    if (strategy.crews === undefined) {
      crewsString = 'All'
    } else {
      crewsString = strategy.crews.reduce((resultString, crew) => {
        if (resultString.length > 0) {
          resultString += ', '
        }
        resultString += this.props.allCrews.find((compareCrew) => {
          return compareCrew.id === crew
        }).name
        return resultString
      }, '')
    }
    let batmatchString = (strategy.batmatch ? 'Yes' : 'No')
    return (
      <div className='foundStrategy'>
        <div className='listedStrategyName'>
          <span className='strategiesStrategyLabel'>Name:</span><span>{strategy.name}</span>
          <span className='strategiesStrategyCostSpan'>
            <span className='strategiesStrategyLabel'>Cost:</span><span>{strategy.cost}</span>
          </span>
        </div>
        <div className='strategiesStrategyRule'>
          <span className='strategiesStrategyLabel'>Text:</span><span>{strategy.text}</span>
        </div>
        <div className='strategiesStrategyCrews'>
          <span className='strategiesStrategyLabel'>Crews:</span><span>{crewsString}</span>
        </div>
        <div>
          <span className='strategiesBatmatchAvailable'>
            <span className='strategiesStrategyLabel'>Batmatch:</span><span>{batmatchString}</span>
          </span>
          <span className='strategiesStrategyPhaseSpan'>
            <span className='strategiesStrategyLabel'>Phase:</span><span>{strategy.phase}</span>
          </span>
        </div>
      </div>
    )
  }
}

Strategy.propTypes = {
  strategy : React.PropTypes.object.isRequired,
  allCrews : React.PropTypes.array.isRequired
}

export default Strategy
