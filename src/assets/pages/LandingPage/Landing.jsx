import React from "react"

function Landing(){
    return(
        <div className="d-flex justify-content-evenly flex-wrap">
            
            <div>
                <h1 class= "text-center mt-5 p-5">Movie Seeker</h1>
                <h1 class= "p-5 m-5" >Bienvenido!</h1>
                <p class="fs-3 mt-5 p-5">Esta es la cartelera de películas mas sencilla que verás en tu vida pero puedes ingresar con google y ver información bien lacrita de cada una.</p>
                <div class="d-flex justify-content-end p-5">
                <button type="button" class="btn btn-success">
                    <a class="text-white"href="register">
                        Registrate aquí para ver la cartelera
                    </a>  
                </button>
                </div>
            </div>

            
        </div>
    )
}

export default Landing