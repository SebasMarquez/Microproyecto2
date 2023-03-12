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
        <div className='d-flex justify-content-evenly flex-wrap'>
            <form onSubmit={OnSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={handleOnChange}/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" onChange={handleOnChange}/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}