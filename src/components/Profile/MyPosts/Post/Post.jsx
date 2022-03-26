import obj from './Post.module.css'

const Post = (props) => {
    return (
        <div className={obj.post}>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9BgREGwGBtdG9th6TjSLJu4PA7FaRkqfI2A&usqp=CAU"
                alt="#"/>
            {props.message}
            <div>
                <span>likes: {props.likeCounter}</span>
            </div>

        </div>
    );
}

export default Post;