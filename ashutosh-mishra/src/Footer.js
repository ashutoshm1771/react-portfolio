import React from 'react'
import "./Footer.css";

function Footer(props) {
    return (
        <div className={props.className}>
            <a href="http://ashutoshmishra.com.np" target="_black">
            <p>© 2021 -- Designed By Ashutosh! No rights reserved!</p>
            <p>· Privacy · Terms · Click To Navigate to My Web ·</p>
            </a>
        </div>
    );
}

export default Footer;
