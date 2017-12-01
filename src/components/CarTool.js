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
        this.onDelete = this.onDelete.bind(this);
    }

    onSubmit(newCar) {
        this.setState({
            cars: this.state.cars.concat(newCar), 
        });
    }

    onDelete(car) {
        this.setState({
            cars: this.state.cars.filter(c => {
                return c.name === car.name && 
                    c.model === car.model;
            }), 
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