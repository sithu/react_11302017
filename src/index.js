import * as React from 'react';
import * as ReactDOM from  'react-dom';
import { CarTool } from './components/CarTool';

// ReactDOM.render(
//     React.createElement('div', null,
//         React.createElement(ColorTool),
//         React.createElement(CarTool),
//     ),
//     document.querySelector('#root'),
// );

ReactDOM.render(
    <div>
        <CarTool />
    </div>,
    document.querySelector('#root'),
);
