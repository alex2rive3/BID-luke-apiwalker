import React from "react";

const Planets = ({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
}) => {
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Rotation Period: {rotation_period}</p>
            <p>Orbital Period: {orbital_period}</p>
            <p>Diameter: {diameter}</p>
            <p>Weather: {climate}</p>
        </div>
    );
};

export default Planets;
