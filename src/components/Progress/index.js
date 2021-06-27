import React, { useContext } from 'react';
import './style.scss';
import MyContext from '../../contexts/myContext';

export default function Progress() {
    
    const { progress } = useContext(MyContext);

    return (
        <progress value={progress.position} max={progress.duration}></progress>
    );
}