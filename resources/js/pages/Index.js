import React from "react";
import styles from "../sass/app.module.sass";

class IndexPage extends React.Component {
    render() {
        return (
            <div className={`${styles.container} ${styles.index_section}`}>
                <div className={styles.index_hero_profile_container}>
                    <img
                        src="/images/profile.gif"
                        alt="H31iUMx49"
                    />
                    <div className={`${styles.index_welcome_text}`}>
                        <div>
                            <h1 className={styles.glitch} data-text="Hello, world!">Hello, world!</h1>
                            <p><span className={styles.nowrap}>It's me, Hein Thanth,</span> <span className={styles.nowrap}>A full-stack Web Developer ... <span className={styles.blinkingcursor}></span></span></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default IndexPage;
