import obj from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {
    let postsElements = props.posts.map(p => <Post message={p.message} likeCounter={p.likeCounter}/>);

    let textareaElement = React.createRef();
    let text;
    let onAddPost = () => {
        text = textareaElement.current.value;
        props.addPost(text);
        props.postChange('');
    }

    let onPostChange = () => {
        text = textareaElement.current.value;
        props.postChange(text);
    }

    return (
        <div className={obj.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostChange} ref={textareaElement} value={props.newTextPost}/>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>

            </div>
            <div className={obj.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;