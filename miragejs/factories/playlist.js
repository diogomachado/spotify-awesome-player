import { faker } from "@faker-js/faker";
import { Factory } from "miragejs";

export default {
    playlist: Factory.extend({
        images() {
            return [
                {
                    url: "https://i.scdn.co/image/ab67616d0000b273f8f9b9c8f9e9f9c9f9c6e0c3",
                },
            ];
        },
        name() {
            return `Playlist ${faker.lorem.words()}`;
        },
        tracks() {
            return {
                total: faker.datatype.number(),
            };
        },
    }),
};
