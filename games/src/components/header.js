import React from 'react';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand" href="/">
                Games Master
            </a>
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/jogos">Jogos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/consoles">Cosoles</a>
                </li>
            </ul>
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <a className="nav-link" href="/noticias">Noticias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/login">Login</a>
                </li>
            </ul>
        </nav>
    )
}

export default Header;