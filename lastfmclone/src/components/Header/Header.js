import React from "react";
import "./Header.css";
import Logo from "../../assets/images/lastfm-logo.png";
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdPlayCircleOutline } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import playerDefaultAlbum from "../../assets/images/player-default-album.png";

import { MdDarkMode } from "react-icons/md";
import { MdLightMode } from "react-icons/md";
import { Link } from "react-router-dom";

function Header({ darkMode, setDarkMode }) {
  return (
    <nav className="navbar navbar-dark bg-dark  p-1">
      <div className="d-flex justify-content-between align-items-center">
        <img src={playerDefaultAlbum} alt="player default album" />
        <div className="ms-1">

          <MdOutlineSkipPrevious className="player text-white cursor-pointer" />

          <MdPlayCircleOutline className="player text-white" />

          <MdOutlineSkipNext className="player text-white" />

        </div>
      </div>
      <div>
        <Link to="/" className="navbar-brand">
          <img
            data-testid="headerLogo"
            src={Logo}
            alt="Last.fm"
          />
        </Link>
      </div>
        <div className="d-flex align-items-center me-4">
            <button
                className="bg-transparent border-0"
                onClick={(e) => {
                    setDarkMode(!darkMode);
                }}
            >
                {darkMode ? (
                    <MdDarkMode className="MdDarkMode text-primary" />
                ) : (
                    <MdLightMode className="MdLightMode text-warning" />
                )}
            </button>
        </div>
    </nav>
  );
}

export default Header;