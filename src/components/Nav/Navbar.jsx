import React from 'react'

// eslint-disable-next-line react/prop-types
const Navbar = ({ containerStyles, menuOpened, toggleMenu }) => {
    const navLink = [
        { path: 'home', name: 'Home' },
        { path: 'about', name: 'About' },
        { path: 'projects', name: 'Projects' },
        { path: 'certificate', name: 'Certificate' },
        { path: 'ardiansyahnanang984@gmail.com', name: 'Contact', isEmail: true },
    ]

    const handleClick = (e, path, isEmail) => {
        e.preventDefault();
        if (isEmail) {
            window.location.href = `mailto:${path}`;
            if (menuOpened) {
                toggleMenu();
            }
            return;
        }

        const element = document.getElementById(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            if (menuOpened) {
                toggleMenu();
            }
        }
    }

    return (
        <nav className={`${containerStyles}`}>
            {navLink.map((link) => (
                <a
                    key={link.name}
                    href={link.isEmail ? `mailto:${link.path}` : `#${link.path}`}
                    className='px-3 py-2 rounded-full hover:bg-gray-100'
                    onClick={(e) => handleClick(e, link.path, link.isEmail)}
                >
                    <div className='flexCenter gap-x-1'>
                        {link.name}
                    </div>
                </a>
            ))}
        </nav>
    )
}

export default Navbar