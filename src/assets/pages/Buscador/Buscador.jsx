import React from "react"
import styles from "./Buscador.module.css"

function Buscador(){
return(
    <form class="form-inline my-2 my-lg-0">
        <input class="form-control mr-sm-2" type="search" placeholder="Buscar" aria-label="Buscar"/>;
        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>;
    </form>
    )

}

export default Buscador