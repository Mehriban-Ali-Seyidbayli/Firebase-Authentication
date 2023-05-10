import React from "react";
import { Link } from "react-router-dom";


const Header = () => {


    return (
        <header>
            <nav className="navbar navbar-expand-sm navbar-dark ">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/"><h3>E-commerce APP</h3></Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><h5>Home</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><h5>Products</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><h5>About</h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/"><h5>Contact</h5></Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active user" to="/login"><h5><i class="fa fa-user"></i> <span className=" px-1">Login</span></h5></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/signup"><h5>Signup</h5></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </header>
    );
};


export default Header;