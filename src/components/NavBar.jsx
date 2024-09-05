import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './NavBar.scss';

const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT',
        to: '/about'
    }

]

const NavBar = () => {

    const [toggleIcon, setToggleIcon] = useState(false);

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon);
    }

    const navigate = useNavigate();

    const handleNavingateToPage = (link) => {
        navigate(link);
    }

    return (
        <nav className="navbar">
            <button onClick={() => handleNavingateToPage(data[0].to)}>
                <span className="navbar__button">
                    {data[0].label}
                </span>
            </button>
            <button onClick={() => handleNavingateToPage(data[1].to)}>
                <span className="navbar__button">
                    {data[1].label}
                </span>
            </button>
        </nav>
    )
}

export default NavBar;