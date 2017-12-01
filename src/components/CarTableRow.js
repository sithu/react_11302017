import * as React from 'react';

export class CarTableRow extends React.Component {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
    }

    onClick(e) {
        this.props.onClick(this.props.car)
    }

    render() {
        const car = this.props.car;
        return (
            <tr>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>{car.color}</td>
                <td>{'$' + car.price}</td>
                <td><button type="button" onClick={this.onClick}>Delete</button></td>
            </tr>
        );
    }
}