import obj from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements = props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsPage.messages.map(m => <Message message={m.message} id={m.id}/>);

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.newMessageChange(body);
    }

    return (
        <div className={obj.dialogs}>
            <div className={obj.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={obj.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} placeholder='Enter your message'
                                   value={props.dialogsPage.newMessageBody}/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;