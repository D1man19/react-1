import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";
import dialogsReducer from "./dialogs-reducer";

let store = {
    _state: {
        dialogsPage: {
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
        },
        profilePage: {
            posts: [
                {id: 1, message: "Hi, how are you?", likeCounter: 15},
                {id: 2, message: "It's my first posts.", likeCounter: 20},
                {id: 3, message: "It's my first posts.", likeCounter: 25}
            ],
            newTextPost: ''
        },
        sidebar: {}
    },
    _rerenderComponents: null,

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._rerenderComponents = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

            this._rerenderComponents();
        }

    }

export default store;








