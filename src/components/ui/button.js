import Link from 'next/link'
import React from 'react'
import styles from "./button.module.scss";

const Button = (props) => {

    if (props.link) {
        return <Link replace={!props.goback} href={props.link} className={styles.button}>{props.children}
        </Link>
    }


    return <button onClick={props.onClick} className={styles.button}>{props.children}</button>

}

export default Button
