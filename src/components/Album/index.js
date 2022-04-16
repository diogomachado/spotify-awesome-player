import React from "react";
import "./style.scss";
import { getTracksByPlaylistId } from "../../service/spotify";

export default function Album({ album, callback }) {
    function getTracksPlaylist(playlist_id) {
        getTracksByPlaylistId(playlist_id, callback);
    }

    return (
        <button
            data-testid={album.id}
            onClick={() => getTracksPlaylist(album.id)}
            type="button"
            className="btn-album"
        >
            <img loading="lazy" src={album.images[0].url} alt="Album" />

            <div className="btn-album-info">
                <p className="btn-album-info-title">{album.name}</p>
                <p className="btn-album-info-track-number">
                    {album.tracks.total}
                </p>
            </div>
        </button>
    );
}
