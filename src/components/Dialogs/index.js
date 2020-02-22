import React from 'react';
import styles from './styles.module.css';
import UserDialog from './UserDIalog';
import Message from './Message';

import testData from './../../testDataSources/testData';

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.userDialog}>
                {testData.users.map(users => <UserDialog id={users.id} name={users.name} />)}
            </div>
            <div className={styles.message}>
                {testData.messages.map(messages => <Message message={messages.message} />)}
            </div>
        </div>
    )
}

export default Dialogs;