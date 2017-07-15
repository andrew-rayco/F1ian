import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import RunRace from './RunRace'
import Home from './Home'
import Header from './Header'
import Circuits from './Circuits'
import FullSeason from './FullSeason'
import Quali from './Quali'
import Grid from './Grid'

export default class App extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Header/>
          <Route path='/' exact={true} component={Home}/>
          <Route path='/circuits' exact={true} component={Circuits}/>
          <Route path='/season/:id' exact={true} component={FullSeason}/>
          <Route path='/season/:id/:raceId/qualifying' component={Quali}/>
          <Route path='/season/:id/:raceId/grid' component={Grid}/>
          <Route path='/season/:id/:raceId/visualise' component={RunRace} />
        </div>
      </Router>
    )
  }
}
