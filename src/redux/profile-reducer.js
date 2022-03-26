const ADD_POST = 'ADD-POST';
const UPDATE_TEXT_POST = 'UPDATE-TEXT-POST';

let initialState = {
    posts: [
        {id: 1, message: "Hi, how are you?", likeCounter: 15},
        {id: 2, message: "It's my first posts.", likeCounter: 20},
        {id: 3, message: "It's my first posts.", likeCounter: 25}
    ],
    newTextPost: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_TEXT_POST:
            state.newTextPost = action.newText;
            return state;
        case ADD_POST:
            let newPost = {id: 5, message: action.text, likeCounter: 0};
            state.posts.push(newPost);
            return state;
        default:
            return state;
    }
}

export const addPostActionCreator = (text) => ({type: 'ADD-POST', text: text})

export const updateTextPostActionCreator = (text) => {
    return {
        type: 'UPDATE-TEXT-POST', newText: text
    }
}

export default profileReducer;
