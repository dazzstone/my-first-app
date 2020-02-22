import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const UserDialog = ({ id, name, key }) => {

    let path = `/dialogs/${id}`;

    return (
        <NavLink to={path} className={styles.unUser} activeClassName={styles.acUser}><div key={key}>{name}</div></NavLink>
    )
}

export default UserDialog;