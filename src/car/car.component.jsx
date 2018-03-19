import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Cakes extends Component {
    render(){
      console.log(this.props);
        // Get data from route props
        const cakes = this.props.data;
        // Map through cakes and return linked cakes
        const carNode = cakes.map((car) => {
            return (
                 <Link
                    to={"/cakes/"+car.id}
                    className="list-group-item"
                    key={car.id}>
                    {car.name}
                </Link>
            )
        });
        return (
            <div>
                <h1>Cakes Special</h1>
                <div className="list-group">
                    {carNode}
                </div>
            </div>
        );
    }
}

export default Cakes
