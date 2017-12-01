import * as React from 'react';
import { ToolHeader } from './ToolHeader';
import { CarTable } from './CarTable';

export class CarTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars: this.props.cars.concat(),
            make: '',
            model: '',
            year: 0,
            color: '',
            price: 0
        };
        // very confused code!
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.type === 'number' ? Number(e.target.value) : e.target.value
        });
    }

    onClick(e) {
        this.setState({
            cars: this.state.cars.concat({
                make: this.state.make,
                model: this.state.model,
                year: this.state.year,
                color: this.state.color,
                price: this.state.price,
            }), 
        });
    }

    render() {
        return (
            <div>
                <ToolHeader headerText={this.props.title} />
                <CarTable cars={this.state.cars}/>
                <form>
                    <div>
                        <label htmlFor="new-car-make">Make:</label>
                        <input type="text" id="new-car-make" name="make"
                            value={this.state.make} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="new-car-model">Model:</label>
                        <input type="text" id="new-car-model" name="model"
                            value={this.state.model} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="new-car-year">Year:</label>
                        <input type="text" id="new-car-year" name="year"
                            value={this.state.year} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="new-car-color">Color:</label>
                        <input type="text" id="new-car-color" name="color"
                            value={this.state.color} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="new-car-price">Price:</label>
                        <input type="text" id="new-car-price" name="price"
                            value={this.state.price} onChange={this.onChange}/>
                    </div>
                    <button type="button" onClick={this.onClick}>Add Car</button>
                </form>
            </div>
        );
    }
}