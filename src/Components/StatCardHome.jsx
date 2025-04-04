import React from "react";

function StatCard({
    mainheading,
    desHeading,
}){
    return(
        <div className="stat-item">
          <h3>{mainheading}</h3>
          <p>{desHeading}</p>
        </div>
    )
}

export {StatCard}