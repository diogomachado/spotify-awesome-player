import React, { useState, useEffect } from "react";
import "./style.scss";
import ApiService from "../../service/api";
import userProfileImageDefault from "../../assets/Spotify_User_Profile.png";

export default function User() {
    const [menuContextual, setMenuContextual] = useState(false);

    // Initialize the state with the image default
    const [user, setUser] = useState({
        images: [
            {
                url: userProfileImageDefault,
            },
        ],
    });

    useEffect(() => {
        ApiService.get("/me")
            .then((res) => {
                if (res.status == 401) {
                    throw res.status;
                } else {
                    return res.json();
                }
            })
            .then((response) => {
                // console.group('User profile');
                // console.log(response.images[0]);
                // console.groupEnd();
                setUser(response);
            })
            .catch((response) => {
                console.error(response);
                if (response === 401) {
                    console.error("401");
                }
            });
    }, []);

    return (
        <section
            className="user-wrapper"
            onMouseEnter={() => setMenuContextual(true)}
            onMouseLeave={() => setMenuContextual(false)}
        >
            <img id="user-image-profile" src={user.images[0].url} />
            <nav
                id="user-menu-contextual"
                className={menuContextual ? "_opened" : ""}
            >
                <ul>
                    <li>
                        <button type="button">Settings</button>
                    </li>
                    <li>
                        <button type="button">Logout</button>
                    </li>
                </ul>
            </nav>
        </section>
    );
}
