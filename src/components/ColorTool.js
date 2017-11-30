import * as React from 'react';

export class ColorTool extends React.Component {
    render() {
        // return React.createElement('h1', null, 'Color Tool!');
        // jsx is alternative syntax to the above fun call.
        const headerText = 'Color Tool!';
        const colors = [ "red" , "blue" ]
        
        return (
            <div>
                <header><h1>{headerText.toUpperCase()}</h1></header>
                <ul>
                    {colors.map(color => <li>{color}</li>)}
                </ul>
            </div>
        );
    }
}