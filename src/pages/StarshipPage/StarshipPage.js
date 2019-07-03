import React from 'react';
import { Link } from 'react-router-dom';

class StarshipPage extends React.Component {
    render() {
        const { name, model }  = this.props.ship
        return (
            <div className="StarshipPage-info">
                <h1>Name: { name } </h1>
                <p>Model: { model }</p>
                <Link to='/'>Go back home</Link>
            </div>
        )

    }
}

export default StarshipPage; 
