import React from 'react';
import './style.scss';

export default function Progress({value}) {
    return (
        <progress value={value} max="100"></progress>
    );
}