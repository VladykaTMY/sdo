import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

const Profile = ()=>{
  return <h1>Это страница профиля</h1>
}

const Messenges = ()=>{
  return <h1>Страница с сообщениями</h1>
}

const Settings = ()=>{
  return <h1>Страница с настройками</h1>
}

const Friends = ()=>{
  return <h1>Ваши друзья</h1>
}

const Menu =()=>{
  return(
    <div >
      <div className="nav flex-column nav-pills" aria-orientation="vertical">
        <a className="nav-link active" href="profile">Профиль</a>
        <a className="nav-link" href="messanges">Сообщения</a>
        <a className="nav-link" href="settings">Настройки</a>
        <a className="nav-link" href="friends">Друзья</a>
      </div>
  </div>
  )
}

function App() {
  return (
  <div className="container-fluid">
    
    <div className="row">
      <div className="col-sm-3">
        <Menu />
      </div>
      <div className="col-sm-9">
        <BrowserRouter>
        <Route path="/profile"  component={Profile}/>
<Route path="/messanges" component={Messenges}/>
<Route path="/settings" component={Settings}/>
<Route path="/friends" component={Friends}/>

        </BrowserRouter>
      </div>
    </div>
    
  </div>
  );
}

export default App;
