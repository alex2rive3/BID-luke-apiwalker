import { useEffect, useState } from "react";
import "../App.css";
import Validar from "./Validar";
function Home() {
    const [opciones, setOpciones] = useState([]);
    const [select, setSelect] = useState("");
    const [info, setInfo] = useState();
    const [idAtribute, setIdAtribute] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (select.length > 0 && idAtribute.length > 0) {
            fetch(`${select}${idAtribute}`)
                .then((res) => res.json())
                .then((result) => setInfo(result))
                .catch((error) => {
                    console.log(info);
                    setInfo();
                });
        } else {
            alert("Los campos son obligatorios ");
        }
    };
    useEffect(() => {
        fetch(`https://swapi.dev/api/`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                let opcion = [];
                for (const [key, value] of Object.entries(data)) {
                    opcion.push({ name: key, url: value });
                }
                setOpciones(opcion);
                setSelect(opcion[0].url);
            })
            .catch((error) => setInfo(""));
    }, []);
    return (
        <div className="App">
            <div className="row">
                <form onSubmit={handleSubmit}>
                    <label>Search </label>
                    <select
                        name="opciones"
                        value={select}
                        onChange={(e) => setSelect(e.target.value)}
                    >
                        {opciones.map((item, i) => (
                            <option key={i} value={item.url}>
                                {item.name}
                            </option>
                        ))}
                    </select>
                    <label>Id</label>
                    <input
                        value={idAtribute}
                        onChange={(e) => setIdAtribute(e.target.value)}
                        type="number"
                    />
                    <button type="submit">Fetch</button>
                </form>
            </div>
            <div>
                <Validar info={info} selec={select}></Validar>
            </div>
        </div>
    );
}

export default Home;
