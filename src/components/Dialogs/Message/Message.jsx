import obj from './../Dialogs.module.css'

const Message = (props) => {
    return (
        <div className={obj.dialog}>{props.message}</div>
    )
}

export default Message;