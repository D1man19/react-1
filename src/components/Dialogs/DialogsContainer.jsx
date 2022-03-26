import {sendMessageActionCreator, updateNewMessageBodyActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = () => {

    return <StoreContext.Consumer>
        { store =>
            {
                let state = store.getState();

                let sendMessage = () => {
                    store.dispatch(sendMessageActionCreator());
                }

                let newMessageChange = (body) => {
                    store.dispatch(updateNewMessageBodyActionCreator(body));
                }

                return <Dialogs sendMessage={sendMessage} newMessageChange={newMessageChange} dialogsPage={state.dialogsPage}/>
            }
        }
        </StoreContext.Consumer>

}

export default DialogsContainer;