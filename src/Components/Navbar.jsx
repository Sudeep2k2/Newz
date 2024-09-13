import Logo from '../../public/NEWZ_Logo.png';

export const Navbar = ({setCategory}) => {
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
                            <div className="nav-link" onClick={() => setCategory("Technology")}>Technology</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Politics")}>Politics</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Economy")}>Economy</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Health")}>Health</div>
                        </li>
                        <li className="nav-item">
                            <div className="nav-link" onClick={() => setCategory("Business")}>Business</div>
                        </li>
                    </div>
                </div>
            </div>
        </nav>
    )
}