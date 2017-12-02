import * as React from 'react';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';
import { CarForm } from './CarForm';

export class CarTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.cars.concat(),
        };
        this.onSubmit = this.onSubmit.bind(this);
        // babel does the bind magic by moving the onDelete fun with = (x) => {} to the constructor! 
        // this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(newCar) {
        this.setState({
            cars: this.state.cars.concat(newCar), 
        });
    }

    onDelete = (id) => {
        const carIndex = this.state.cars.findIndex(car => car.id === parseInt(id));
        this.setState({
            cars: [ ...this.state.cars.slice(0, carIndex), ...this.state.cars.slice(carIndex + 1)],
        });
    }

    render() {
        return (
            <div>
                <ToolHeader headerText={this.props.title} />
                <CarTable cars={this.state.cars} onClick={this.onDelete}/>
                <CarForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}