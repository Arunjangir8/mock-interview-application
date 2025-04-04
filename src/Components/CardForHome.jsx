import React from "react";

function Card({
    mainheading,
    desHeading,
    link
}){
    return(
        <div className="program-card">
            <div className="card-icon" style={{marginLeft:"15px",marginBottom:"60px"}}><img src={link} alt=""/></div>

            <h3>{mainheading}</h3>
            <p>{desHeading}</p>
          </div>
    )
}

export {Card}