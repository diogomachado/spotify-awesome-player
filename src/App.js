import './App.scss';
import Header from './components/Header';
import Footer from './components/Footer';
import Album from './components/Album';
import React, { useEffect, useState } from 'react';
import ApiService from './service/api';

function App() {

    const [playlists, setPlaylists] = useState([]);
    const [tracks, setTracks] = useState([]);
    const [playlistOpened, setPlaylistOpened] = useState(false);
    const [logged, setLogged] = useState(false);

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

    useEffect(() => {
        if (tracks.length > 0) {
            setPlaylistOpened(true);
        }
    }, [tracks]);

    function getPlaylists() {

        ApiService.get('/me/playlists?offset=20&limit=20')
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
                if (response == '401') {
                    setLogged(false);
                }
            });
    }

    function getView() {
        return (
            <>
                <Header />

                {
                    (!playlistOpened) && <section className="content">
                                            <h1 className="primary-title">Playlists</h1>
                                            <div className="grid-albums">
                                                {
                                                    (playlists.map(item => {
                                                        return <Album key={item.id} album={item} callback={setTracks}/>
                                                    }))
                                                }
                                            </div>
                                        </section>
                }

                {
                    (playlistOpened) && getViewTracks()
                }

                <Footer />
            </>
        )
    }

    function getViewTracks() {
        return (
            <>
                <section className="content">
                    <h2>Tracks</h2>
                    <div className="grid-tracks">
                        <button onClick={() => backPlaylist()}>Voltar</button>
                        {
                            (tracks.map(item => {
                                return <div className="track">
                                    <div className="track-name">{ item.track.name }</div>
                                    <div className="track-duration">{ item.track.duration_ms }</div>
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
                    <a className="btn-authorize" href="https://accounts.spotify.com/authorize?response_type=token&client_id=ce8bed51e3c84b9e80a7808c62f490a0&redirect_uri=http://localhost:3000">Sign account</a>
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