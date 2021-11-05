import React, { useContext } from 'react'
import { Context } from '../../../index'
import firebase from 'firebase/compat/app'

export const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log('user', user);
    }

return (
    <div style={{textAlign: 'center'}}>
        <p style={{fontSize: 50}}>LOGIN PAGE</p>
        <button onClick={login}>Google Signin</button>
    </div>
)
}