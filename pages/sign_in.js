import React, { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Head from "next/head";
import styles from "../styles/Auth.module.css";
import Link from "next/link";
import { useAuth } from "../context/AuthUserContext";

export default function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const [error, setError] = useState(null);

  const { signInUserWithPassword } = useAuth();

  const onSubmit = (event) => {
    setEmail(null);
    signInUserWithPassword(email, password)
      .then((authUser) => {
        router.push("/teslaaccount");
      })
      .catch((error) => {
        setError(error.message);
      });

    event.preventDefault();
  };

  return (
    <>
      <Head>
        <title>Sign In</title>
      </Head>
      <Navbar />
      <div className={styles.login}>
        <form onSubmit={onSubmit} className={styles.form}>
          <h2 className={styles.signInText}>Sign In</h2>
          {error && <h4 className={styles.errorText}>{error}</h4>}

          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            name="email"
            className={styles.input}
          />

          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            name="password"
            className={styles.input}
          />

          <button className={styles.loginBtn}>Login</button>
        </form>
        <hr className={styles.line} />
        <div className={styles.signUpArea}>
          <Link
            href={{
              pathname: "/sign_up",
            }}
          >
            <button className={styles.createAccount}>Create An Account</button>
          </Link>
        </div>
      </div>
    </>
  );
}
