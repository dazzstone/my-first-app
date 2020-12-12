import React from 'react';
import Post from './Post/Post';

const Posts = (props) => {
    return (
        <div>
            <Post message={props.text} />
        </div>
    )
}

export default Posts;