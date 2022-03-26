const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Good buy!'},
        {id: 4, message: 'Privet'}
    ],
    dialogs: [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Alina'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Igor'}
    ],
    newMessageBody: ''
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
            const body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        default:
            return state;
    }
}

export const updateNewMessageBodyActionCreator = (text) => ({type: 'UPDATE-NEW-MESSAGE-BODY', body: text})

export const sendMessageActionCreator = () => {
    return {
        type: 'SEND-MESSAGE'
    }
}

export default dialogsReducer;