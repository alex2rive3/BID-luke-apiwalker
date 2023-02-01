import React from "react";
import NotFound from "./NotFound";
import People from "./People";
import Films from "./Films";
import Planets from "./Planets";
import Species from "./Species";
import Starships from "./Starships";
import Vehicles from "./Vehicles";

const validar = ({ info, selec }) => {
    let item = "";
    if (selec) {
        item = selec.split("/").slice(4, 5)[0];
    }
    if (!info || info.detail === "Not found") {
        return <NotFound />;
    } else {
        switch (item) {
            case "people":
                return <People {...info} />;
            case "films":
                return <Films {...info} />;
            case "planets":
                return <Planets {...info} />;
            case "vehicles":
                return <Vehicles {...info} />;
            case "starships":
                return <Starships {...info} />;
            case "species":
                return <Species {...info} />;
            default:
                return <NotFound />;
        }
    }
};

export default validar;
