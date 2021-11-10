import React, { useContext } from 'react'
import logo from './logo.png';
import classes from './header.module.scss'
import { Context } from "../../../index";
import { useAuthState } from 'react-firebase-hooks/auth'
import firebase from 'firebase/compat/app'

export const Header = () => {

    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log('user', user);
    }


    return (
        <header className={classes['App-header']}>
            <div className={classes.container}>
                <div className={classes.logo_conteiner}>
                    <img 
                    src={logo} 
                    className={classes["App-logo"]} 
                    alt="UAbuh-logo" 
                    />
                    <p>Accounting Calculator</p>
                </div>
                <div>
                    {user ?
                        <button className={classes.login_button} onClick={()=> auth.signOut()}>Вийти</button>
                        :
                            <button onClick={login} className={classes.login_button}>Увійти</button>
                    }
                </div>
            </div>
        </header>
    )
} 