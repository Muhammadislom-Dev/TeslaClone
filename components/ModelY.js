import React from "react";
import styles from "../styles/Home.module.css";

const ModelY = () => {
    return(
        <section className={styles.modelY}>
            <div className={styles.textsArea}>
                <h3>Model Y</h3>
                <p >Order Online for <span className={styles.span}>Touchles delivery</span></p>
            </div>
            <div className={styles.buttons}>
                <div className={styles.btnMain}>
                    <a href="#" className={styles.link}>custom order</a>
                    <a href="#" className={styles.link}>custom order</a>
                </div>
            </div>
        </section>
    )
}
export default ModelY