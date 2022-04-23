export default function routes() {
    this.urlPrefix = "https://api.spotify.com/v1";

    this.get("/me/playlists", (schema) => {
        return {
            items: schema.playlists.all().models,
        };
    });
}
