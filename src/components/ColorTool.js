import * as React from 'react';
import { ToolHeader } from './ToolHeader';

export class ColorTool extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            colors: this.props.colors.concat(),
            colorName: '',
            colorHexCode: '',
        };
        // very confused code!
        this.onChange = this.onChange.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    onChange(e) {
        this.setState({
            [ e.target.name ]: e.target.type === 'number'
                    ? Number(e.target.value)
                    : e.target.value
        });
    }

    onClick() {
        this.setState({
            colors: this.state.colors.concat({
                name: this.state.colorName,
                hexCode: this.state.colorHexCode,
            }),
        });
    }

    render() {
        // return React.createElement('h1', null, 'Color Tool!');
        // jsx is alternative syntax to the above fun call.
        
        return (
            <div>
                <ToolHeader headerText="Color Tool" />
                <ul>
                    {this.state.colors.map(color => <li key={color.name}>{color.name}</li>)}
                </ul>
                <form>
                    <div>
                        <label htmlFor="color-name-input">Color Name:</label>
                        <input type="text" id="color-name-input" name="colorName"
                            value={this.state.colorName} onChange={this.onChange}/>
                    </div>
                    <div>
                        <label htmlFor="color-hexcode-input">Color Hex Code:</label>
                        <input type="text" id="color-hexcode-input" name="colorHexCode"
                            value={this.state.colorHexCode} onChange={this.onChange}/>
                    </div>
                    <button type="button" onClick={this.onClick}>Add Color</button>
                </form>
            </div>
        );
    }
}