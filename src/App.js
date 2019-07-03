import React, { Component } from 'react';
import StarshipPage from './pages/StarshipPage/StarshipPage';
import VehiclePage from './pages/VehiclePage/VehiclePage';
import { Link, Switch, Route } from 'react-router-dom';
import { fetchAllStarships } from './services/sw-api';
import { fetchAllVehicles } from './services/sw-api';
import './App.css';

class App extends React.Component {

  state = {
    starships: [],
    vehicles: []
  };

  async componentDidMount() {
    let foundStarships = await fetchAllStarships();
    let foundVehicles = await fetchAllVehicles();
    this.setState({
      starships: foundStarships.results
    });
    this.setState({
      vehicles: foundVehicles.results
    });
  };

  render() {
    let listofShips = this.state.starships.map((ship, idx) =>
      <Link to={`/starships/${idx}`} className="App-button">
        { ship.name }
      </Link>
    );
    let listofVehicles = this.state.vehicles.map((vehicle, idx) =>
    <Link to={`/vehicles/${idx}`} className="App-button">
      { vehicle.name }
    </Link>
  );

    return (
      <div className="App">
        <header className="App-header">
          <h1> Star Wars Wiki</h1>
          <p>
            Starships and Vehicles
          </p>
        </header>

        { this.state.vehicles.length ?
        <div>
          <Switch>
              <Route exact path='/' render={ () => <div><h1 className="title-center">Vehicles</h1>{listofVehicles}</div>} />
              <Route path='/vehicles/:id' render={ props => 
                  <VehiclePage {...props} vehicle={this.state.vehicles[props.match.params.id]} /> 
                } 
              />
            </Switch>
          </div>
            : <h1>Loading...</h1>
        }
      </div>
    );
  }

}

export default App;
