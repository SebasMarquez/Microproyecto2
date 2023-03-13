import styles from './Login.module.css'
import { REGISTER_URL } from '../../constants/urls'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signinWithEmailAndPassword } from '../../firebase/auth-service'
import { async } from '@firebase/util'

export const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    })

    const handleOnChange = (event) => {
        const {name, value} = event.target;
        setFormData({
            ...formData,
            [name]:value,
        });
    };

    const OnSubmit = async (event) => {
        event.preventDefault();
        const {email, password} = formData;
        await signinWithEmailAndPassword(email, password);
        navigate("/cartelera");
    };

    return(
        <div className='d-flex justify-content-evenly flex-wrap p-5'>
            <form onSubmit={OnSubmit}>
                <h2 class="p-5">Iniciar Sesión</h2>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Correo Electrónico:</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange}/>
                    
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Contraseña:</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnChange}/>
                </div>
                <div className='text-center p-3'>
                    <button type="submit" className="btn btn-primary ">Ingresar</button>
                </div>
                
            </form>
        </div>
    )
}