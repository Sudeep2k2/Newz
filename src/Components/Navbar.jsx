import Logo from '../../public/NEWZ_Logo.png';

export const Navbar = ({ setCategory }) => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#" ><img src={Logo} alt="Logo" className="img-fluid" style={{ height: '50px' }} /></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={() => setCategory("Technology")}>Technology</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={() => setCategory("Politics")}>Politics</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={() => setCategory("Economy")}>Economy</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={() => setCategory("Health")}>Health</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link btn" onClick={() => setCategory("Business")}>Business</button>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}