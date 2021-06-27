import React, { useState, useEffect, useContext } from 'react';
import './style.scss';
import Progress from '../Progress';
import Controls from '../Controls';
import MyContext from '../../contexts/myContext';

export default function Footer() {
    
    const { currentTrack } = useContext(MyContext);

    return (
        <footer className="footer">
            <Progress />
            <div className="footer-container">

                {/* Details about the music playing */}
                <aside className="music-info">
                    <div className="music-info-cover">
                        <img src={ currentTrack?.album?.images[0]?.url } />
                    </div>
                    <div className="music-info-details">
                        <h3 className="music-info-details-song">{ currentTrack?.name }</h3>
                        <p className="music-info-details-artist">{ currentTrack?.artists[0]?.name }</p>
                    </div>
                </aside>

                <Controls />

                {/* Div only to alignment works */}
                <div className="align-div"></div>
            </div>
        </footer>
    );
}