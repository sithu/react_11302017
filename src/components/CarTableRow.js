import * as React from 'react';

export const CarTableRow = props =>
    <tr>
        <td>{props.car.make}</td>
        <td>{props.car.model}</td>
        <td>{props.car.year}</td>
        <td>{props.car.color}</td>
        <td>{'$' + props.car.price}</td>
        <td><button type="button" onClick={() => props.onClick(props.car.id)}>Delete</button></td>
    </tr>;