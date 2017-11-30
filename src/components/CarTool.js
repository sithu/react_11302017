import * as React from 'react';

export class CarTool extends React.Component {
    render() {
        const cars = [
            { make: "Honda", model: "Civic", year: "1999", color: "red", price: "$1000" },
            { make: "Ford", model: "Focus", year: "2000", color: "blue", price: "$500" }    
        ];
        return (
            <div>
                <header>
                    <h1>Car Tool!</h1>
                </header>
                <table>
                    <tbody>
                    <tr>
                        <th>Make</th>
                        <th>Model</th> 
                        <th>Year</th>
                        <th>Color</th>
                        <th>Price</th>
                    </tr>
                    {cars.map(car => 
                        <tr>
                            <td>{car.make}</td><td>{car.model}</td><td>{car.year}</td><td>{car.color}</td><td>{car.price}</td>
                        </tr>
                    )}
                    </tbody>
                </table>
            </div>
        );
    }
}