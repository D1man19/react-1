import obj from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={obj.item}>
            my posts
            <div>
                <textarea>Your text</textarea>
                <button>Add post</button>
            </div>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </div>
    );
}

export default MyPosts;