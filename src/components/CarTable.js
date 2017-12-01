import * as React from 'react';

export class CarTable extends React.Component {
    render() {
        return (
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
        );
    }
}