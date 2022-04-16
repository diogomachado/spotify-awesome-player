import ApiService from "./api";

export function getTracksByPlaylistId(playlist_id, callback) {
    return ApiService.get(`/playlists/${playlist_id}/tracks`)
        .then((res) => {
            if (res.status == 401) {
                throw res.status;
            } else {
                console.log(res.json());
                return res.json();
            }
        })
        .then((response) => {
            callback(response.items);
        })
        .catch((response) => {
            return response;
        });
}
