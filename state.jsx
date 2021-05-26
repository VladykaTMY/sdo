const user = {
    name: "Djonny",
    lastname: "Depp",
    id:"1",
    about: "talk from about for me",
    avatar:"https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png",
};

const users={
0:{name:"Андреев", lastname:"Максим",id:5},
1:{name:"Вера",lastname:"Мельникова",id:9},
2:{name:"Василиса",lastname:"Копылова",id:11},
3:{name:"Полина",lastname:"Малинина",id:2},
4:{name:"Дамир",lastname:"Иванова",id:3},
5:{name:"Фёдор",lastname:"Марьям",id:4},
6:{name:"Максим",lastname:"Зимин",id:6},
7:{name:"Даниил",lastname:"Поляков",id:7},
8:{name:"Вера",lastname:"Головин",id:8},
9:{name:"Полина",lastname:"Романова",id:10},
};


export function getUser(userId){
    for(let i = 0; i<Object.keys(users).length;i++) if(users[i].id==userId) return users[i];
    return user;

}


export function getUsers(){
    return users;
}
