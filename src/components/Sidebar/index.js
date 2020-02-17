import React from 'react';
import styles from './styles.module.css';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div className={styles.sidebar}>
            <div>
                <NavLink to='/profile' className={styles.inactiveLink} activeClassName={styles.activeLink}>Profile</NavLink>
            </div>
            <div>
                <NavLink to='/messages' className={styles.inactiveLink} activeClassName={styles.activeLink} >Messages</NavLink>
            </div>
            <div className={styles.inactiveLink}>Settings</div>
            <div className={styles.inactiveLink}>Exit</div>
        </div>
    );
}

export default Sidebar;