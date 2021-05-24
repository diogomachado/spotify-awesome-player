import React, { useState } from 'react'
import './style.scss';

export default function User() {

    const [menuContextual, setMenuContextual] = useState(false);

    return (
        <section className="user-wrapper" onMouseEnter={ () => setMenuContextual(true) } onMouseLeave={ () => setMenuContextual(false) }>
            <img id="user-image-profile" src="https://randomuser.me/api/portraits/men/59.jpg"/>
            <nav id="user-menu-contextual" className={ (menuContextual) && '_opened' }>
                <ul>
                    <li><button type="button">Settings</button></li>
                    <li><button type="button">Logout</button></li>
                </ul>
            </nav>
        </section>
    )
}
