import { renderApp } from '../render';

const allData = {
    dialogPage: {
        users: [
            {
                id: 0,
                name: 'Yegor'
            },
            {
                id: 1,
                name: 'Drone'
            }
        ],
        messages: [
            {
                id: 0,
                message: 'How ur U?'
            },
            {
                id: 1,
                message: 'mm, nice work.'
            }
        ],
        newMessageText: 'Enter new message'
    },
    profilePage: {
        posts: [
            {
                id: 0,
                postText: 'My first post!'
            },
            {
                id: 1,
                postText: 'Hello World!'
            }
        ],
        newPostText: 'Enter new post'
    }
}

let postId = 2;
let messageID = 2;

export const addPost = () => {
    let newPost = {
        id: postId,
        postText: allData.profilePage.newPostText
    }
    postId = postId + 1;
    allData.profilePage.posts.push(newPost);
    renderApp(allData);
}

export const sendMessage = (message) => {
    let newMessage = {
        id: messageID,
        message: message
    }
    messageID = messageID + 1;
    allData.dialogPage.messages.push(newMessage);
    renderApp(allData);
}

export const newPostText = (newPost) => {
    allData.profilePage.newPostText = newPost;
    renderApp(allData);
}

export const newMessageText = (newMessage) => {
    allData.dialogPage.newMessageText = newMessage;
    renderApp(allData);
}

export default allData;