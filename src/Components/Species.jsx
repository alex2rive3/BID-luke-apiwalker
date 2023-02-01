import React from "react";

const Species = ({
    name,
    classification,
    designation,
    skin_colors,
    hair_colors,
}) => {
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Clasification: {classification}</p>
            <p>Designation: {designation}</p>
            <p>Skin colors: {skin_colors}</p>
            <p>Hair Colors: {hair_colors}</p>
        </div>
    );
};

export default Species;
