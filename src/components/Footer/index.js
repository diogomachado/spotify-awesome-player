import React, { useState, useEffect } from 'react';
import './style.scss';
import Progress from '../Progress';

export default function Footer() {

    const [valueProgress, setValueProgress] = useState(10);

    useEffect(() => {
        setTimeout(() => {
            setValueProgress(45);
        }, 15000);
    }, []);

    return (
        <footer className="footer">
            <Progress value={valueProgress} />
            <div className="footer-container"></div>
        </footer>
    );
}