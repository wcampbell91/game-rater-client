
import React from "react"
import { Link } from "react-router-dom"
import "./NavBar.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                Navigation link
            </li>
            <li className="navbar__item">
                Navigation link
            </li>
            <li className="navbar__item">
                <Link className="nav-link" to="/games">Games</Link>
            </li>
            {
                (localStorage.getItem("gr_token") !== null) ?
                    <li className="nav-item">
                        <button className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("gr_token")
                                props.history.push({ pathname: "/" })
                            }}
                        >Logout</button>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                    </>
            }        
        </ul>
    )
}
