// Import React and useState for managing component state
import React, { useState } from "react";

// Import useNavigate from react-router-dom to enable navigation between pages
import { useNavigate } from "react-router-dom";

// Import the component's SCSS styles
import './NavBar.scss';

// Define an array `data` containing navigation links
const data = [
    { label: 'Home',        to: '/'          },
    { label: 'Project',     to: '/Project'   },
    { label: 'Internship',  to: '/Internship' },
    { label: 'Contact',     to: '/Contact'   },
];

// Define the NavBar functional component
const NavBar = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const handleNavingateToPage = (link) => {
        navigate(link);
        setMenuOpen(false);
    };

    return (
        <>
            {/* ── Desktop navbar ── */}
            <nav className="navbar">
                <button onClick={() => handleNavingateToPage(data[0].to)}>
                    <span className="navbar__button">{data[0].label}</span>
                </button>
                <button onClick={() => handleNavingateToPage(data[1].to)}>
                    <span className="navbar__button">{data[1].label}</span>
                </button>
                <button onClick={() => handleNavingateToPage(data[2].to)}>
                    <span className="navbar__button">{data[2].label}</span>
                </button>
                <button onClick={() => handleNavingateToPage(data[3].to)}>
                    <span className="navbar__button">{data[3].label}</span>
                </button>
            </nav>

            {/* ── Hamburger (mobile only) ── */}
            <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation"
            >
                <span /><span /><span />
            </button>

            {/* ── Full-screen mobile menu ── */}
            <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
                {data.map((item) => (
                    <button key={item.to} onClick={() => handleNavingateToPage(item.to)}>
                        {item.label}
                    </button>
                ))}
            </div>
        </>
    );
};

// Export NavBar to be used in other components
export default NavBar;
