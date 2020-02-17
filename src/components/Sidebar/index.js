import React from 'react';
import styles from './styles.module.css';

const Sidebar = () => {
    return(
        <div className={styles.sidebar}>
            <div>Profile</div>
            <div>Messages</div>
            <div>Settings</div>
            <div>Exit</div>
        </div>
    );
}

export default Sidebar;