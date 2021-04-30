function Header() {
    return (
        <nav className='brown'>
            <div className="nav-wrapper">
                <a href="#" className="brand-logo">Movies App</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="#">Repo</a></li>
                </ul>
            </div>
        </nav>
    )
}

export { Header }