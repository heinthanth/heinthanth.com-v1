import React from "react";
import styles from "../sass/app.module.sass";
import { Link } from "react-router-dom";

class SideNav extends React.Component {
	render() {
		return (
			<nav className={styles.sidenav}>
				<div className={styles.container}>
					<ul className={styles.sidenav_item}>
						<li className={`${styles.sidenav_item_link}`}>
							<Link to="/" className={styles.glitch} data-text="[ Home ]">[ Home ]</Link>
						</li>
						<li className={styles.sidenav_item_link}>
							<Link to="/about" className={styles.glitch} data-text="[ About ]">[ About ]</Link>
						</li>
						<li className={styles.sidenav_item_link}>
							<Link to="/projects" className={styles.glitch} data-text="[ Projects ]">[ Projects ]</Link>
						</li>
						<li className={styles.sidenav_item_link}>
							<Link to="/blog" className={styles.glitch} data-text="[ Blog ]">[ Blog ]</Link>
						</li>
						<li className={styles.sidenav_item_link}>
							<Link to="/contact" className={styles.glitch} data-text="[ Contact ]">[ Contact ]</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default SideNav;