import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Album from './components/Album';
import React, { useEffect, useState } from 'react';
import ApiService from './service/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import MyContext from './contexts/myContext';

function App() {

    const [progress, setProgress] = useState({
        position: 0,
        duration: 0
    });
    const [currentTrack, setCurrentTrack] = useState();
    const [paused, setPaused] = useState(false);

    const [playlists, setPlaylists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlistOpened, setPlaylistOpened] = useState(false);
    const [logged, setLogged] = useState(false);
    const [playlist, setPlaylist] = useState({});

    useEffect(() => {

        // Get code spotify for request access_token
        let location = window.location.hash;

        if (location != "") {
            let re = /access_token=([^&]*)/ig;
            let reArray = re.exec(location);
            const access_token = reArray[1];

            if (access_token) {
                localStorage.setItem('sap_access_token', access_token);
                setLogged(true);
            }

            getPlaylists();
        }
    }, []);

    // Used to show the list of tracks. Could have use here routes
    useEffect(() => {
        if (tracks.length > 0) {
            window.scrollTo(0, 0);
            setPlaylistOpened(true);
        }
    }, [tracks]);

    function getPlaylists() {

        ApiService.get('/me/playlists?offset=0&limit=50')
            .then(res => {
                if (res.status == 401) {
                    throw (res.status);
                } else {
                    return res.json();
                }
            })
            .then((response) => {
                console.group('Playlists');
                console.log(response);
                console.groupEnd();

                setPlaylists(response.items);
            })
            .catch(response => {
                console.error(response);
                if (response === 401) {
                    setLogged(false);
                }
            });
    }

    function openPlaylist(playlist, tracks) {
        console.log(playlist);
        setPlaylist(playlist);
        setTracks(tracks);
    }

    function millisToMinutesAndSeconds(millis) {
        let minutes = Math.floor(millis / 60000);
        let seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    }

    function getView() {
        return (
            <>
                <MyContext.Provider value={{ progress, setProgress, currentTrack, setCurrentTrack, paused, setPaused }}>
                    <Header />

                    {
                        (!playlistOpened) && <section className="content">
                                                <h1 className="primary-title">Playlists</h1>
                                                <div className="grid-albums">
                                                    {
                                                        (playlists.map(playlist => {
                                                            return <Album key={playlist.id} album={playlist} callback={(tracks) => openPlaylist(playlist, tracks)}/>
                                                        }))
                                                    }
                                                </div>
                                            </section>
                    }

                    {
                        (playlistOpened) && getViewTracks()
                    }

                    <Footer />
                </MyContext.Provider>
            </>
        )
    }

    function playMusic(track) {
        ApiService.put(`/me/player/play?device_id=${localStorage.getItem('sap_active_device')}`, {
            uris: [track.uri]
        })
            .then(res => {
                setPaused(false);
                if (res.status == 401) {
                    throw (res.status);
                } else {
                    return res.json();
                }
            })
            .then((response) => {
                console.log(response);
            })
            .catch(response => {
                console.error(response);
                if (response == '401') {
                    setLogged(false);
                }
            });
    }

    function getViewTracks() {
        return (
            <>
                <section className="content">
                    <button className="btn-back" type="button" onClick={() => backPlaylist()}>
                        <FontAwesomeIcon color="white" size="1x" icon={faHome} />
                    </button>

                    <header className="header-album">
                        <div className="header-album-cover">
                            <img src={playlist.images[0].url}/>
                        </div>
                        <div className="header-album-details">
                            {/* <h1 className="header-album-details-artist">Avril Lavigne</h1> */}
                            <h2 className="header-album-details-song">{playlist.name}</h2>
                            <p className="header-album-details-number-songs">{playlist.tracks.total} songs</p>
                        </div>
                    </header>

                    <div className="grid-tracks">
                        {
                            (tracks.map(item => {
                                return <div className="track" onClick={() => playMusic(item.track)}>
                                    <div className="track-name">{ item.track.name }</div>
                                    <div className="track-duration">{ millisToMinutesAndSeconds(item.track.duration_ms) }</div>
                                </div>
                            }))
                        }
                    </div>
                </section>
            </>
        )
    }

    function backPlaylist() {
        setPlaylistOpened(false);
    }

    function getLogin() {
        return (
            <>
                <section className="container jc-center ai-center">
                    <a className="btn-authorize" href="https://accounts.spotify.com/authorize?response_type=token&client_id=ce8bed51e3c84b9e80a7808c62f490a0&scope=streaming,user-read-email,user-modify-playback-state,user-read-private&redirect_uri=http://localhost:3000">Sign account</a>
                </section>
            </>
        )
    }

    return (
        <>
            {
                (logged) && getView()
            }

            {
                (!logged) && getLogin()
            }
        </>
    );
}

export default App;