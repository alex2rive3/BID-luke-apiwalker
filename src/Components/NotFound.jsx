import React from "react";
import obiWan from "../img/obiWan.jpg";
const NotFound = ({ error }) => {
    return (
        <div>
            <p>Estos no son los Droides que estabas Buscando</p>
            <img src={obiWan} alt="Imagen de Obi-Wan Kenovi" />
            <p>{error}</p>
        </div>
    );
};

export default NotFound;
