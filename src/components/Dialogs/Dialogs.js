import React from 'react';
import styles from './styles.module.css';
import UserDialog from './UserDialog/UserDialog';
import Message from './Message/Message';
import AddMessage from './AddMessage/AddMessage';

const Dialogs = (props) => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.userDialog}>
                {props.dialogPage.users.map(users => <UserDialog id={users.id} name={users.name} />)}
            </div>
            <div className={styles.message}>
                {props.dialogPage.messages.map(messages => <Message message={messages.message} />)}
                <AddMessage sendMessage={props.sendMessage} newMessageText={props.newMessageText} areaValue={props.dialogPage.newMessageText} />
            </div>
        </div>
    )
}

export default Dialogs;