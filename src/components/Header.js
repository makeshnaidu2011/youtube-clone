import React, { useState } from 'react'
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import './Header.css'
import { Link } from 'react-router-dom';


function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon />
                <Link to="/">
                    <img className="header__logo"
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.qpbbotZNeZ8NHGoC5KzeuwHaHa%26pid%3DApi&f=1"
                        alt="logo"></img>
                </Link>

            </div>
            <div className="header__input">
                <input
                    onChange={e => setInputSearch(e.target.value)}
                    type="text"
                    value={inputSearch}
                    placeholder="Search" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className="header__inputButton" />

                </Link>
            </div>
            <div className="header__icons">
                <VideoCallIcon className="header__icon" />
                <AppsIcon className="header__icon" />
                <NotificationsIcon className="header__icon" />
                <Avatar className="header__icon" />
            </div>
        </div>
    )
}


export default Header
