import * as React from 'react';
import { CarTableRow } from './CarTableRow';

export class CarTable extends React.Component {
    render() {
        const headers = [ 'Make', 'Model', 'Year', 'Color', 'Price', 'Action' ];
        return (
            <table>
                <tbody>
                <tr>
                    {/* {Object.keys(this.props.cars[0]).map(key => <th>{key}</th>)} */}
                    {headers.map(header => <th key={header}>{header.slice(0,1).toUpperCase() + header.slice(1)}</th>)}
                </tr>
                {this.props.cars.map(car => <CarTableRow car={car} key={car.id} onClick={this.props.onClick} />)}
                </tbody>
            </table>
        );
    }
}