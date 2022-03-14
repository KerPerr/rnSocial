import React from 'react'
import { Guard } from './Authentication';
import { useNavigate } from "react-router-dom";

import './Authentication.css'

export const Login = (props) => {

    const navigate = useNavigate()
    const { setMe } = props

    // Définitions des états de notre formulaire
    const [identifier, setIdentifier] = React.useState('')
    const [password, setPassword] = React.useState('')

    React.useEffect(() => {
        fetch('http://localhost:5000/authenticated', {
            method: 'GET',
            headers: { 'uid': localStorage.getItem('uid') },
            credentials: 'include'
        }).then(async res => {
            if (res.ok) {
                Guard.authenticated = true
                navigate(-1, { replace: true })
            }
        }).catch(err => console.log(err))
    }, [])

    // Fonction d'envoie du formulaire
    const handleSubmit = async (e) => {
        e.preventDefault()
        setMe(await Guard.login(identifier, password))
        if (Guard.isAuthenticated()) {
            navigate('/', { replace: true })
        }
    }

    return (
        <main className="form-signin login">
            <form onSubmit={handleSubmit}>
                <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

                <div className="form-floating">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Username" onChange={e => setIdentifier(e.target.value)} />
                    <label htmlFor="floatingInput">Username</label>
                </div>
                <br />
                <div className="form-floating">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <br />
                <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Remember me
                    </label>
                </div>
                <button className="w-100 btn btn-lg btn-theme" type="submit">Sign in</button>
            </form>
        </main>
    )
}