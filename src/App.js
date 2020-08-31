import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './LandingPage/LandingPage';
import AdoptionPage from './AdoptionPage/AdoptionPage';

import ApiService from './api-service';

class App extends Component {
  state = {
    queue: [],
    user: '',
  }

  setUser = (user) => {
    this.setState({ user: user })
  }

  render() {
    let showAdopt
    this.state.queue[0] === this.state.user 
      ? showAdopt = true : showAdopt = false;
    ApiService.getQueue().then((q) => this.setState({ queue: q }));
    return (
      <>
        <div className="App">
          <Switch>
            <Route exact path="/" 
              render={() => <LandingPage setUser={this.setUser} />} />
            <Route path="/pets" 
              render={() => <AdoptionPage showAdopt={showAdopt} queue={this.state.queue} />}/>
          </Switch>
        </div>
      </>
    );
  }
}

export default App;
