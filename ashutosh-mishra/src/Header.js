import React from 'react';
import "./Header.css";
import Card from "./Card";
import { Link} from "react-router-dom";

function Header() {

    return (
        <div className="header">
            <Link to="/projects">
                <Card
                    src=""
                    title="View Projects !!"
                />
            </Link>
        </div>
    )
}

export default Header;
