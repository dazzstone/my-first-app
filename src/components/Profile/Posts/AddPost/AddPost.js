import React from 'react';

const AddPost = (props) => {
    let newPost = React.createRef();

    let addPost = () => {
        let text = newPost.current.value;
        props.addPost(text);
        props.newPostText('');
    }
    let newPostText = () => {
        let text = newPost.current.value;
        props.newPostText(text);
    }
    let onAreaClick = () => {
        props.newPostText('');
    }

    return (
        <div>
            <textarea ref={newPost} value={props.profilePage.newPostText} onChange={newPostText} onClick={onAreaClick} />
            <button onClick={addPost}>Add Post</button>
        </div>
    );
}

export default AddPost;