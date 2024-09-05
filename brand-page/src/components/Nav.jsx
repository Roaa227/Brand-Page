const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white fixed-top ">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="new-balance-2-logo-png-transparent.png" width="60" className="d-inline-block align-text-top" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
                            <li className="nav-item">
                                <a className="nav-link " aria-current="page" href="#">Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Location</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Contact</a>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <button className="btn btn-outline-danger" type="submit">Login</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;
