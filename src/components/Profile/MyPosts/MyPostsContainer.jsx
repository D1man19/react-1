import React from "react";
import {addPostActionCreator, updateTextPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {

    return <StoreContext.Consumer>
        { store =>
            {
                let state = store.getState();

                let addPost = (text) => {
                    store.dispatch(addPostActionCreator(text));
                }

                let postChange = (text) => {
                    store.dispatch(updateTextPostActionCreator(text));
                }
                return <MyPosts addPost={addPost} postChange={postChange} newTextPost={state.profilePage.newTextPost} posts={state.profilePage.posts}/>
            }

        }
        </StoreContext.Consumer>
}

export default MyPostsContainer;