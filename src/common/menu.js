import React from 'react';
import {NavLink} from 'react-router-dom';


class Menu extends React.Component {

    componentDidMount() {
        function scroll() {
            let height = window.scrollY;
            let menu = document.querySelector("header");
            if (height > 60) {
                menu.classList.add('slide');
            } else {
                menu.classList.remove('slide');
            }
        }
        window.onscroll = scroll;
    }

    render() {
        return(
            <header>
                <div className="container">
                    <div className="header_wrapper">
                        <h1>Space X</h1>
                        <ul>
                          <li>
                            <NavLink exact to="/">Home</NavLink>
                          </li>
                          <li>
                            <NavLink to="/about">About</NavLink>
                          </li>
                        </ul>
                    </div>
                </div>
            </header>
        )
    }
};

export default Menu;
