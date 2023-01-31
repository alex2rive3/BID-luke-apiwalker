import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const PeopleParametro = () => {
    const { id } = useParams();
    const [home, setHome] = useState();
    const [data, setData] = useState({});

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${id}`)
            .then((res) => res.json())
            .then((result) => setData(result));
    }, [id]);
    console.log(data);
    const { name, height, skin_color, eye_color, birth_year, homeworld } = data;
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

export default PeopleParametro;
