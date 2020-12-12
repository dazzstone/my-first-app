import React from 'react';

const AddMessage = (props) => {
    let newMessage = React.createRef();

    let sendMessage = () => {
        let text = newMessage.current.value;
        props.sendMessage(text);
        props.newMessageText('')
    }
    let newMessageText = () => {
        let text = newMessage.current.value;
        props.newMessageText(text);
    }
    let onAreaClick = () => {
        props.newMessageText('')
    }
    return (
        <div>
            <textarea ref={newMessage} onChange={newMessageText} onClick={onAreaClick} value={props.areaValue} ></textarea>
            <button onClick={sendMessage}>Add Post</button>
        </div>
    );
}

export default AddMessage;