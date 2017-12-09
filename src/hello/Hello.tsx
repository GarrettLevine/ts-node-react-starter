import * as React from 'react';
import './Hello.scss';

export interface HelloProps {
    header: string;
    subHeader: string;
}

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <div className='hello'>
                <h1>{this.props.header}</h1>
                <h2>{this.props.subHeader}</h2>
            </div>
        );
    }
}
