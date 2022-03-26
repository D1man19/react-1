import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = () => {
    return (
        <Router>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route exact path='/dialogs' element={<DialogsContainer/>}/>
                        <Route exact path='/profile' element={<Profile/>}/>
                        <Route exact path='/feed' element={<News/>}/>
                        <Route exact path='/music' element={<Music/>}/>
                        <Route exact path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </Router>
    );
}

export default App;
