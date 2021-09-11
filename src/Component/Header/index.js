import React from 'react';
import './header.scss'

export default function Header(props) {
    const { header } = props;
    return(
        <div>
        {header.map((header) => (
             <div className="atas">
            <p className="logo-app">{header.logo}</p>
            <p className="menu-item">{header.menu}</p>
            <p className="logout">{header.logout}</p>
            </div>
            ))}
        </div>
    )
}

