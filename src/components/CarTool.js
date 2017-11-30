import * as React from 'react';

export class CarTool extends React.Component {
    render() {
        const cars = [
            { make: "Honda", model: "Civic", year: 1999, color: "red", price: 1000 },
            { make: "Ford", model: "Focus", year: 2000, color: "blue", price: 500 }    
        ];
        
        return (
            <div>
                <header>
                    <h1>Car Tool!</h1>
                </header>
                <table>
                    <tbody>
                    <tr>
                        {Object.keys(cars[0]).map(key => <th>{key}</th>)}
                    </tr>
                    {cars.map(car => 
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