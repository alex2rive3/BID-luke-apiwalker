import React, { useEffect, useState } from "react";

const People = ({
    name,
    height,
    skin_color,
    eye_color,
    birth_year,
    homeworld,
}) => {
    const [home, setHome] = useState();
    useEffect(() => {
        fetch(homeworld)
            .then((res) => res.json())
            .then((result) => setHome(result.name));
    }, [homeworld]);

    return (
        <div>
            <h2>Name: {name}</h2>
            <p>Heigth: {height}</p>
            <p>Skin Color: {skin_color}</p>
            <p>Eye Color: {eye_color}</p>
            <p>Birth Year: {birth_year}</p>
            <p>HomeWorld: {home}</p>
        </div>
    );
};

export default People;
