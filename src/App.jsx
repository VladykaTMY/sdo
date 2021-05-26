import React from 'react';
import { BrowserRouter, NavLink, Route} from 'react-router-dom';
import Profile from "./componets/Profile";
import './App.css';
import Friends from "./componets/Friends";

const Messenges = ()=>{
  return <h1>Страница с сообщениями</h1>;
}

const Settings = ()=>{
  return <h1>Страница с настройками</h1>;
}



const Menu =()=>{
  return(
    <div >
      <div className="nav flex-column nav-pills" aria-orientation="vertical">
        <NavLink className="nav-link" to="/profile">Профиль</NavLink>
        <NavLink className="nav-link" to="/messanges">Сообщения</NavLink>
        <NavLink className="nav-link" to="/settings">Настройки</NavLink>
        <NavLink className="nav-link" to="/friends">Друзья</NavLink>
      </div>
  </div>
  );
};

function App(props) {
  console.log(props)
  return (
  <div className="container-fluid mt-4">
    <BrowserRouter>
    <div className="row">
      <div className="col-sm-3">
        <Menu />
      </div>
      <div className="col-sm-9">
          <Route
           path="/profile"
           render={()=><Profile function ={props.functions.key_getUser}/>}
          />
          <Route path="/messanges" component={Messenges}/>
          <Route path="/settings" component={Settings}/>
          <Route
           path="/friends"
           render={()=><Friends function ={props.functions.key_getUsers}/>} 
          />
      </div>
    </div>
    </BrowserRouter>
  </div>
  );
}

export default App;
