import React from 'react';
import styles from './styles.module.css';

const HeaderBlock = () => {
    return(
        <header className={styles.header}>
            <img className={styles.img} src='https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png' alt=''></img>
        </header>
    );
}

export default HeaderBlock;