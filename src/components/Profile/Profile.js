import React from 'react';
import styles from './styles.module.css';
import Posts from './Posts/Posts';
import AddPost from './Posts/AddPost/AddPost';

const Profile = (props) => {
    return (
        <div className={styles.content}>
            <img className={styles.img} src='https://www.klaviyo.com/wp-content/uploads/2016/09/abstract-background-1024x273.jpg' alt=''></img>
            <div>AVATAR + DESC</div>
            <AddPost profilePage={props.profilePage} addPost={props.addPost} newPostText={props.newPostText} />
            {props.profilePage.posts.map(posts => <Posts text={posts.postText} />)}
        </div>
    );
}

export default Profile;