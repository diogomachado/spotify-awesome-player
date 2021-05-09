import React from 'react';
import './style.scss';
import logo from '../../assets/Spotify_Logo_RGB_Green.png';

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">
                <img src={logo}/>
            </div>
            <div className="header-search">
                <i className="header-search-icon"></i>
                <input type="text" name="search" />
            </div>
            <div className="header-user">
                <p>Diogo</p>
            </div>
        </header>
    );
}