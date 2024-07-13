import Link from "next/link";
import styles from "./footer.module.css";
export default function Footer() {
	return (
		<div className={styles.footer_container}>
			<h1>BORINGMARKET.com</h1>
			<p>© Boring Marketing LLC 2023</p>
			<nav>
				<ul>
					<li><a href="#">Terms</a></li>
					<li><a href="#">Privacy</a></li>
				</ul>
			</nav>
		</div>
	);
}

{/* <a href="/" style="
    margin-right: 10px;
">Privacy Policy</a> */}
