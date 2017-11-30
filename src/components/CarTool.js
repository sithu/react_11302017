import * as React from 'react';

export class CarTool extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <h1>{this.props.title}</h1>
                </header>
                <table>
                    <tbody>
                    <tr>
                        {Object.keys(this.props.cars[0]).map(key => <th>{key}</th>)}
                    </tr>
                    {this.props.cars.map(car => 
                        <tr>
                            <td>{car.make}</td><td>{car.model}</td><td>{car.year}</td><td>{car.color}</td><td>{'$' + car.price}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}