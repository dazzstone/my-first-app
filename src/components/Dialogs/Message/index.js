import React from 'react';

const Message = ({ message, key }) => {
    return (
        <div key={key}>{message}</div>
    )
}

export default Message;