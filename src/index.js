import * as React from 'react';
import * as ReactDOM from  'react-dom';
import { CarTool } from './components/CarTool';
import { ColorTool } from './components/ColorTool';

const colorList = [ 
    { name: "Red", hexCode: "#ff0000" }, 
    { name: "Green", hexCode: "#0000ff"},
    { name: "Blue", hexCode: "#00f0" } 
];

const carList = [
    { make: "Honda", model: "Civic", year: 1999, color: "red", price: 1000 },
    { make: "Ford", model: "Focus", year: 2000, color: "blue", price: 500 }    
];

ReactDOM.render(
    <div>
        <CarTool title='Car Tool' cars={carList}/>
        <ColorTool colors={colorList} />
    </div>,
    document.querySelector('#root'),
);



// Another approach
// ReactDOM.render(
//     React.createElement('div', null,
//         React.createElement(ColorTool),
//         React.createElement(CarTool),
//     ),
//     document.querySelector('#root'),
// );
