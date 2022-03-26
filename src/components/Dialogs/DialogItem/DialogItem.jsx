import obj from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    return (
        <div className={obj.dialog + ' ' + obj.active}>
            <NavLink to={"/dialogs/" + props.id} className = { navData => navData.isActive ? obj.active : obj.item }>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;