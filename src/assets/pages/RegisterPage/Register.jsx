import { async } from '@firebase/util'
import React from 'react'
import { LOGIN_URL } from '../../constants/urls'
import { registerWithEmailAndPassword, signInWithGoogle } from '../../firebase/auth-service'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export const  Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleSingInWithGoogle = async () => {
        await signInWithGoogle();
    };

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    };

    const onSubmit = async (event) => {
        event.preventDefault();
        await registerWithEmailAndPassword(formData.email, formData.password);
        navigate("/cartelera");
    };
  return (
    <div className='d-flex justify-content-center flex-wrap p-5'>
        <div>
            <h2 class="p-5">Registrarse</h2>
            <p>Ya tienes una cuenta? <a href={LOGIN_URL}>Accede aqui</a></p>
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email" name= "email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange}/>
                    <div id="emailHelp" className="form-text">Nunca compartiremos tu infmación ingresada.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Contraseña</label>
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" onChange={handleOnChange}/>
                </div>
                <div className='d-inline text-center flex-wrap p-3'>
                    <div>
                        <button type="submit" className="btn btn-primary mb-4" >Registrarse</button>
                    </div>
                    <div>
                        <p>O</p>
                    </div>
                    <div>
                        <button type="submit" onClick={handleSingInWithGoogle} className="btn btn-primary mt-2">Google</button>
                    </div>
                </div>
                
            </form>
        </div>
    </div>
  )
}
