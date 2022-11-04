import React from 'react'
import styles from "../../styles/modules/Footer.module.css"
import Link from 'next/link';
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer({title}) {
    if(title == "principal-page")return(
        <div className={styles.Footer}>
            <div className={styles.Footer__Pt1}>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillLinkedin/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a>
            </div>
            <div className={styles.Footer__Pt2}>
                <Link href="/contact"><a className={styles.a}>contactame</a></Link>
                <p className={styles.p1}>|</p>
                <p className={styles.p2}>Gracias por ver</p>
            </div>
        </div>
    );
    if(title == "contact")return(
        <div className={styles.Footer}>
            <div className={styles.Footer__Pt1}>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a>
            </div>
            <div className={styles.Footer__Pt2}>
                <p className={styles.p3}>Gracias por ver</p>
            </div>
        </div>
    );
    if(title == "more_about_me")return(
        <div className={styles.Footer}>
            <div className={styles.Footer__Pt1}>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillLinkedin/></a>
                <p>|</p>
                <a className={styles.Footer__Pt1__items} href='#'><AiFillGithub/></a>
            </div>
            <div className={styles.Footer__Pt2}>
                <Link href="/contact"><a className={styles.a}>contactame</a></Link>
                <p className={styles.p1}>|</p>
                <p className={styles.p2}>Gracias por ver</p>
            </div>
        </div>
    );
}


export default Footer;