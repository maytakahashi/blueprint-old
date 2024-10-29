function Header () {
    return (
        <header>
            <h1>Welcome to My Portfolio Website</h1>
            <div className="nav_bar_container">
                <h2>Contents</h2>
                <nav>
                    <ul>
                        <li><a href="example.html#about">About</a></li>
                        <li><a href="example.html#experience">Experience</a></li>
                        <li><a href="contact.html">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header