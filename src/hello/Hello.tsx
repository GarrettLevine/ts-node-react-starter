import * as React from 'react';
import './Hello.scss';

export interface HelloProps {
    header: string;
    subHeader: string;
}

export const Hello = (props: HelloProps) => {
    return (
        <div className='hello'>
            <h1>{props.header}</h1>
            <h2>{props.subHeader}</h2>
        </div>
    );
};