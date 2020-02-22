import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const HeaderBlock = () => {
    return (
        <header className={styles.header}>
            <NavLink to='/'>
                <img className={styles.img} src='https://cdn.pixabay.com/photo/2016/01/19/07/35/social-1148031_960_720.png' alt=''></img>
            </NavLink>
        </header>
    );
}

export default HeaderBlock;