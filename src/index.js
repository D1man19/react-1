import React from 'react';
import './index.css';
import ReactDOM from "react-dom";
import App from "./App";
import store from "./redux/redux-store";
import {Provider} from "./StoreContext";

let rerenderComponents = () => {
    ReactDOM.render(
        <React.StrictMode>
                <Provider store={store}>
                    <App/>
                </Provider>
        </React.StrictMode>,
        document.getElementById('root')
    );
}

rerenderComponents();

store.subscribe(rerenderComponents);

