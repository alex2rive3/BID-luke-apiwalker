import React from "react";

const Starships = ({
    name,
    model,
    manufacturer,
    cost_in_credits,
    starship_class,
}) => {
    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost in Credits: {cost_in_credits}</p>
            <p>Starships Class: {starship_class}</p>
        </div>
    );
};

export default Starships;
