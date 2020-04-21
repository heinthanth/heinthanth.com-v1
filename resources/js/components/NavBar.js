import React from "react";
import styles from "../sass/app.module.sass";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
	constructor(props) {
		super(props);
	}
    render() {
        return (
            <nav className={styles.navbar}>
                <div className={styles.container}>
					<Link to="/" className={`${styles.navlogo} ${styles.glitch}`} data-text="H31iUMx49">H31iUMx49</Link>
					<div className={styles.ml_auto}>
						<span className={`${styles.nav_toggler} ${styles.glitch}`} data-text="[ menu ]" onClick={this.props.toggleNav}>[ menu ]</span>
						<ul className={styles.navitem}>
							<li className={styles.navitem_link}>
								<Link to="/">[ Home ]</Link>
							</li>
							<li className={styles.navitem_link}>
								<Link to="/about">[ About ]</Link>
							</li>
							<li className={styles.navitem_link}>
								<Link to="/projects">[ Projects ]</Link>
							</li>
							<li className={styles.navitem_link}>
								<Link to="/blog">[ Blogs ]</Link>
							</li>
							<li className={styles.navitem_link}>
								<Link to="/contact">[ Contact ]</Link>
							</li>
						</ul>
					</div>
				</div>
            </nav>
        );
    }
}

export default NavBar;
