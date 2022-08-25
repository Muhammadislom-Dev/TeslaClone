import React, {useState} from "react"
import Navbar from "../components/Navbar"
import Head from "next/head"
import styles from '../styles/Auth.module.css'
import Link from "next/link"
import { useAuth } from "../context/AuthUserContext"
import { useRouter } from "next/router"

const Register = () => {

    const [email, setEmail] = useState("")
    const [passwordOne, setPasswordOne] = useState("")
    const [passwordTwo, setPasswordTwo] = useState("")
    
    const router = useRouter()
    const [error, setError] = useState(null)

    const {createUserWithPassword} = useAuth()

    const onSubmit = event => {
        setError(null)
        if(passwordOne === passwordTwo){
            createUserWithPassword(email, passwordOne)
            .then(authUser => {
                router.push("/teslaaccount")
            })
            .catch(error => {
                setError(error.message)
            })
        }
        else{
            setError("Parollar bir xil emas")
            event.preventDefault()
        }
    }

    return(
        <>
         <Head>
            <title>Sign Up</title>
         </Head>
         <Navbar />
         <div className={styles.login}>
            <form className={styles.form} onSubmit={onSubmit} >
                <h2 className={styles.signInText}>Sign Up</h2>
                {error && <h4 className={styles.errorText}>{error}</h4>}

                <label htmlFor="email">Email Address</label>
                <input 
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    name="email"
                    className={styles.input}
                />
                <label htmlFor="passwordOne">Confirm Password</label>
                <input 
                    type="password"
                    value={passwordOne}
                    onChange={(event) => setPasswordOne(event.target.value)}
                    name="passwordTwo"
                    className={styles.input}
                />
                <label htmlFor="passwordTwo">Confirm Password</label>
                <input 
                    type="password"
                    value={passwordTwo}
                    onChange={(event) => setPasswordTwo(event.target.value)}
                    name="passwordTwo"
                    className={styles.input}
                />

                <button className={styles.loginBtn}>Create Account</button>
                <hr className={styles.line} />

                <div className={styles.signUpArea}>
                    <Link href={{
                        pathname: "/sign_in"
                    }}>
                       <button className={styles.createAccount}>Sign In</button>
                    </Link>
                </div>
            </form>
         </div>
        </>
    )
}

export default Register