

const user = {
    name: "Djonny",
    lastname: "Depp",
    id:"1",
    about: "talk from about for me",
    avatar:"https://w7.pngwing.com/pngs/193/660/png-transparent-computer-icons-woman-avatar-avatar-girl-thumbnail.png",
};

const users={
0:{name:"Андреев", lastname:"Максим"},
1:{name:"Вера",lastname:"Мельникова"},
2:{name:"Василиса",lastname:"Копылова"},
3:{name:"Полина",lastname:"Малинина"},
4:{name:"Дамир",lastname:"Иванова"},
5:{name:"Фёдор",lastname:"Марьям"},
6:{name:"Максим",lastname:"Зимин"},
7:{name:"Даниил",lastname:"Поляков"},
8:{name:"Вера",lastname:"Головин"},
9:{name:"Полина",lastname:"Романова"},
};


export function getUser(){
    return user;
}


export function getUsers(){
    return users;
}