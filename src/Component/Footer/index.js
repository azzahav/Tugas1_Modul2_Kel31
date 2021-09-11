import React from "react";
import "./footer.scss";

export default function Footer(props) {
    const { footer } = props;
    return(
        <div>
        {footer.map((footer) => (
            <div className="footer">
            <p className="tulisan">{footer.tulisan}</p>
            <p className="nama1">{footer.nama1}</p>
            <p className="nama2">{footer.nama2}</p>
        </div>
            ))}
        </div>
    )
}