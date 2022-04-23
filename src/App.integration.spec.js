import { render, screen, waitFor } from "@testing-library/react";
import App from "./App";
import { makeServer } from "../miragejs/server";

describe("Home page tests integration", () => {
    let server;

    beforeEach(() => {
        // It replaces the default location with some access_token
        delete window.location;
        window.location = new URL("http://localhost:3000/#access_token=1234");

        // environment different "development" do not execute seed functions
        server = makeServer({ environment: "test" });
    });

    afterEach(() => {
        server.shutdown();
    });

    it("should render a list with 10 <Albums>", async () => {
        server.createList("playlist", 10);

        render(<App />);

        await waitFor(() => {
            expect(screen.getAllByTestId("album-item")).toHaveLength(10);
        });
    });

    it("should not exhibit the player initially", () => {
        render(<App />);

        expect(screen.queryByTestId("player")).not.toBeInTheDocument();
    });

    it.todo(
        "should display the button to authorize the user to use the Spotify API"
    );
});
