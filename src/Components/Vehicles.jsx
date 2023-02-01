import React from "react";

const Vehicles = ({
    name,
    model,
    manufacturer,
    cost_in_credits,
    vehicle_class,
}) => {
    return (
        <div className="card">
            <h2>Name: {name}</h2>
            <p>Model: {model}</p>
            <p>Manufacturer: {manufacturer}</p>
            <p>Cost in Credits: {cost_in_credits}</p>
            <p>Vehicle Class: {vehicle_class}</p>
        </div>
    );
};

export default Vehicles;
