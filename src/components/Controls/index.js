import React, { useEffect, useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle, faPauseCircle } from '@fortawesome/free-regular-svg-icons';
import { faStepBackward, faStepForward } from '@fortawesome/free-solid-svg-icons';
import './style.scss';
import MyContext from '../../contexts/myContext';

export default function Controls() {

    const { setProgress, setCurrentTrack, paused, setPaused } = useContext(MyContext);
    const [player, setPlayer] = useState();

    useEffect(() => {
        // Inject the script in the project
        var head = document.getElementsByTagName('head')[0];
        var script = document.createElement('script');
        script.type = 'text/javascript';
        script.onload = function() {
            initializePlayer();
        }
        script.src = 'https://sdk.scdn.co/spotify-player.js';
        head.appendChild(script);
    }, []);

    function initializePlayer() {
        window.onSpotifyWebPlaybackSDKReady = () => {
            const token = localStorage.getItem('sap_access_token');
            const player = new window.Spotify.Player({
                name: 'Awesome Player',
                getOAuthToken: cb => { cb(token); }
            });

            // Error handling
            player.addListener('initialization_error', ({ message }) => { console.error(message); });
            player.addListener('authentication_error', ({ message }) => { console.error(message); });
            player.addListener('account_error', ({ message }) => { console.error(message); });
            player.addListener('playback_error', ({ message }) => { console.error(message); });

            // Playback status updates
            player.addListener('player_state_changed', state => { 

                if (state) {
                    console.log(state.paused);
                    setPaused(state.paused);

                    setProgress({
                        position: state.position,
                        duration: state.duration
                    });

                    setCurrentTrack(state.track_window.current_track);
                }
            });

            // Ready
            player.addListener('ready', ({ device_id }) => {
                console.log('Ready with Device ID', device_id);
                localStorage.setItem('sap_active_device', device_id);
            });

            // Not Ready
            player.addListener('not_ready', ({ device_id }) => {
                console.log('Device ID has gone offline', device_id);
            });

            // Connect to the player!
            player.connect();

            // Save in the state
            setPlayer(player);
        };
    }

    function tooglePlay() {
        player.togglePlay().then(() => {
            console.log('Toggled playback!');
        });
    }

    function previousTrack() {
        player.previousTrack().then(() => {
            console.log('Set to previous track!');
        });
    }

    function nextTrack() {
        player.nextTrack().then(() => {
            console.log('Skipped to next track!');
        });
    }

    return (
        <div className="controls-wrapper">
            <button type="button" onClick={() => previousTrack() }>
                <FontAwesomeIcon color="white" style={{ fontSize: '20px' }} icon={faStepBackward} />
            </button>
            <button type="button" onClick={() => tooglePlay() }>
                <FontAwesomeIcon color="white" size="3x" icon={(paused) ? faPlayCircle : faPauseCircle } />
            </button>
            <button type="button" onClick={() => nextTrack() }>
                <FontAwesomeIcon color="white" style={{ fontSize: '20px' }} icon={faStepForward} />
            </button>
        </div>
    )
}