import React, {useEffect} from "react";
import { useRouter } from "next/router";
import { useAuth } from "../context/AuthUserContext";
import Head from "next/head";
import styles from '../styles/account.module.css'
import Navbar from "../components/Navbar";


const LoggedIn = () => {

    const { authUser, loading, signOut} = useAuth()
    const router = useRouter()

    useEffect(() => {
        if(!loading && !authUser)
            router.push("/sign_in")
    }, [authUser, loading])


    return(
        <div>
            {
                loading?
                <p>loading.....</p>
                : 
                <>
                  <Head>
                     <title>Your Account</title>
                  </Head>
                    {
                    <div className={styles.logInfo}>
                        authUser && <p>You're logged as <b>{authUser.email}`s</b>email</p>
                        <button className={styles.logOutBtn} onClick={signOut}>Sign Out</button>
                    </div>
                    }
                </>
            }
        </div>
    )
}
export default LoggedIn