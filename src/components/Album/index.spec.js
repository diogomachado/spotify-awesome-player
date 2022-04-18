import Album from "./index";
import { render, screen } from "@testing-library/react";

describe("Album component", () => {
    let albumMock = {};

    const renderAlbum = () =>
        render(<Album album={albumMock} callback={() => {}} />);

    beforeEach(() => {
        albumMock = {
            collaborative: false,
            description: "",
            external_urls: {
                spotify:
                    "https://open.spotify.com/playlist/69nTATcHH52o79ERrR55VP",
            },
            href: "https://api.spotify.com/v1/playlists/69nTATcHH52o79ERrR55VP",
            id: "69nTATcHH52o79ERrR55VP",
            images: [
                {
                    height: 640,
                    url: "https://mosaic.scdn.co/640/ab67616d0000b2730fac58870495eb46e1fcb270ab67616d0000b2735a34416eb5338482801ef170ab67616d0000b27398366d8c49da94c6f734d7cbab67616d0000b273e489cc092ed2e39394cbe3eb",
                    width: 640,
                },
                {
                    height: 300,
                    url: "https://mosaic.scdn.co/300/ab67616d0000b2730fac58870495eb46e1fcb270ab67616d0000b2735a34416eb5338482801ef170ab67616d0000b27398366d8c49da94c6f734d7cbab67616d0000b273e489cc092ed2e39394cbe3eb",
                    width: 300,
                },
                {
                    height: 60,
                    url: "https://mosaic.scdn.co/60/ab67616d0000b2730fac58870495eb46e1fcb270ab67616d0000b2735a34416eb5338482801ef170ab67616d0000b27398366d8c49da94c6f734d7cbab67616d0000b273e489cc092ed2e39394cbe3eb",
                    width: 60,
                },
            ],
            name: "Funks antigos",
            owner: {
                display_name: "diogosmachado",
                external_urls: {
                    spotify: "https://open.spotify.com/user/diogosmachado",
                },
                href: "https://api.spotify.com/v1/users/diogosmachado",
                id: "diogosmachado",
                type: "user",
                uri: "spotify:user:diogosmachado",
            },
            primary_color: null,
            public: true,
            snapshot_id:
                "MTAsNmE1YmMwZWYxMzM0ODI0OGYwY2E2ZDQ5MTk2YmVjYjYzN2ZhYjI3OQ==",
            tracks: {
                href: "https://api.spotify.com/v1/playlists/69nTATcHH52o79ERrR55VP/tracks",
                total: 9,
            },
            type: "playlist",
            uri: "spotify:playlist:69nTATcHH52o79ERrR55VP",
        };
    });

    it("should render the component", () => {
        renderAlbum();
        expect(screen.findAllByRole("button")).toBeDefined();
    });

    it("should have a image with the album cover", () => {
        renderAlbum();

        expect(screen.getByTestId("cover")).toBeDefined();
        expect(screen.getByTestId("cover")).toHaveAttribute(
            "src",
            albumMock.images[0].url
        );
    });

    it("should have a title with the album name", () => {
        renderAlbum();
        expect(screen.getByText(albumMock.name)).toBeDefined();
    });

    it("should have a number of tracks with the album tracks", () => {
        renderAlbum();
        expect(screen.getByText(albumMock.tracks.total)).toBeDefined();
    });
});
