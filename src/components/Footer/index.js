import React, { useState, useEffect } from 'react';
import './style.scss';
import Progress from '../Progress';
import Controls from '../Controls';

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
            <div className="footer-container">

                {/* Details about the music playing */}
                <aside className="music-info">
                    <div className="music-info-cover">
                        <img src="https://i1.sndcdn.com/artworks-000527167749-vpxrk0-t500x500.jpg" />
                    </div>
                    <div className="music-info-details">
                        <h3 className="music-info-details-song">Não é sério</h3>
                        <p className="music-info-details-artist">Charlie Brown Jr.</p>
                    </div>
                </aside>

                <Controls />

                {/* Div only to alignment works */}
                <div className="align-div"></div>
            </div>
        </footer>
    );
}