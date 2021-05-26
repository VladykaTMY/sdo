import React from 'react';

const Profile = (props)=>{
   
    let userId = window.location.pathname.split("/")[2];
    let user = props.function(userId);
    return (
    <div className="row">
        <div className="col-sm-3">
            <img src={user.avatar} alt="" width="90%"/>
        </div>
        <div className="col-sm-9">
            <h1>{user.name} {user.lastname}</h1>
            <h3>{user.about}</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quam ex eaque, consequuntur perspiciatis minima numquam. Beatae porro, atque et molestiae dolor libero dignissimos voluptas, facere nostrum fuga, nemo magnam obcaecati.</p>
            
        </div>
    </div>
    );
  };

export default Profile;
