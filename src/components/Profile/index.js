import React from 'react';
import styles from './styles.module.css';
import Posts from './Posts';

const Profile = () => {
    return (
        <div className={styles.content}>
            <img className={styles.img} src='https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg' alt=''></img>
            <div>AVATAR + DESC</div>
            <Posts />
        </div>
    );
}

export default Profile;