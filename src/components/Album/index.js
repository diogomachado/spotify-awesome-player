import React from 'react';
import './style.scss';
import ApiService from '../../service/api';

export default function Album({ album, callback }) {

    function getTracksPlaylist(playlist_id) {
        ApiService.get(`/playlists/${playlist_id}/tracks`)
            .then(res => {
                if (res.status == 401) {
                    throw (res.status);
                } else {
                    return res.json();
                }
            })
            .then((response) => {
                console.group('Tracks');
                console.log(response);
                console.groupEnd();

                callback(response.items);
            })
            .catch(response => {
                console.error(response);
                if (response == '401') {
                    // setLogged(false);
                }
            });
    }

    return (
        <button onClick={() => getTracksPlaylist(album.id)} type="button" className="btn-album">
            <img src={album.images[0].url} alt="Album"/>

            <div className="btn-album-info">
                <p className="btn-album-info-title">{album.name}</p>
                <p className="btn-album-info-track-number">{album.tracks.total}</p>
            </div>
        </button>        
    )
}