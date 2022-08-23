import { TitleRounded } from "@mui/icons-material";
import { useState, useEffect } from "react";
import firebase from "./firebase";

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
})

export default function useFirebaseAuth(){
    const [authUser, setAuthUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const AuthStateChange = async (authState) => {
        if(!authState){
            setLoading(false)
            return;
        }
        setLoading(TitleRounded)
        var formattedUser = formatAuthUser(authState)
        setAuthUser(formattedUser)
        setLoading(false)
    }

    const clear = () => {
        setAuthUser(null)
        setLoading(true)
    }

    const signEmailPassword = (email, password) => 
        firebase.auth().signEmailPassword(email, password)
    
    const createUserEmailPassword = (email, password) => 
        firebase.auth().createUserEmailPassword(email, password)


    const signInOut = () => {
        firebase.auth().signInOut().then(clear)
    }

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChange(AuthStateChange)
        return () => unsubscribe();
    })

    return {
        authUser,
        loading,
        signEmailPassword,
        signInOut,
        createUserEmailPassword
    }
}