export default function routes() {
    this.urlPrefix = "https://api.spotify.com/v1";

    this.get("/me/playlists", (schema) => {
        return {
            items: schema.playlists.all().models,
        };
    });

    this.get("/me", () => {
        return {
            country: "BR",
            display_name: "diogosmachado",
            email: "diogo@diogomachado.com",
            explicit_content: {
                filter_enabled: false,
                filter_locked: false,
            },
            external_urls: {
                spotify: "https://open.spotify.com/user/diogosmachado",
            },
            followers: {
                href: null,
                total: 25,
            },
            href: "https://api.spotify.com/v1/users/diogosmachado",
            id: "diogosmachado",
            images: [
                {
                    height: null,
                    url: "https://i.scdn.co/image/ab6775700000ee8538dde5cce382c8b8791684b0",
                    width: null,
                },
            ],
            product: "premium",
            type: "user",
            uri: "spotify:user:diogosmachado",
        };
    });
}
