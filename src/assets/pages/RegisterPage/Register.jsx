import React from 'react'
import { LOGIN_URL } from '../../constants/urls'

export const  Register = () => {
  return (
    <div className='d-flex justify-content-evenly flex-wrap'>
        <div>
            <h2>Registrarse</h2>
            <p>Ya tienes una cuenta? <a href={LOGIN_URL}>Accede aqui</a></p>
            <form>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <button type="submit" className="btn btn-primary">Google</button>
            </form>
        </div>
    </div>
  )
}
