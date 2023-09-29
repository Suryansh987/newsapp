import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         mode: "light",
    //         color:"black"
    //     }
    // }
    // toggleMode = () => {
    //     this.setState(prevState => ({
    //         mode: prevState.mode === "dark" ? "light" : "dark",
    //         color: prevState.color ==="black" ? "white" : "dark"
    //     }));
    // };
    render() {
        return (
            <nav className={`navbar navbar-expand-lg navbar-${this.props.mode} bg-${this.props.mode}`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{this.props.tittle}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Business">Business</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Technology">Technology</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Health">Health</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Sports">Sports</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Science">Science</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={this.props.toggleMode}/>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" style={{color:this.props.color}}>Dark Mode</label>
                    </div>
                </div>
            </nav>
        )
    }
}
