import React from "react";

const Planets = ({
    name,
    rotation_peiod,
    orbital_period,
    diameter,
    climate,
}) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Rotation Period: {rotation_peiod}</p>
            <p>Orbital Period: {orbital_period}</p>
            <p>Diameter: {diameter}</p>
            <p>Weather: {climate}</p>
        </div>
    );
};

export default Planets;
