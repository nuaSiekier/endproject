import React from "react";

export default function Section({ title, subtitle, dark, id, Component }) {
  return (
    <div className={"section" + (dark ? " section-dark" : "")}>
      <div className="section-content" id={id}>
        <p>{subtitle}</p>
        {!Component ? '' : <Component />}

      </div>
    </div>
  )

}



