export  interface NavigationLink {
    id: number;
    name: string;
    path: string;
    hasDroopDown?:boolean;
    isDroopDown?: boolean;
    listDroopDown : string[];

}


 export const navLinks: NavigationLink[]  = [
    { id:1, name : "Главная", path: "/" , hasDroopDown: false, isDroopDown : false ,listDroopDown:[]},
    { id:2, name : "Музыканты", path: "/musicians", hasDroopDown: true, isDroopDown : false ,
        listDroopDown: [
            "Традиционные",
            "Фьюжн",
            "Smooth"
        ]

    },
    { id:3, name : "Обучение", path: "/luthiers", hasDroopDown: true, isDroopDown : false,
        listDroopDown:[
            "Педагоги",
            "Материалы",
        ] },
    { id:4, name : "Новости", path: "/news" , hasDroopDown: true , isDroopDown : false ,listDroopDown:[]},
    { id:5, name : "История", path: "/stories", hasDroopDown: true , isDroopDown : false ,listDroopDown:[]},
    { id:6, name : "Блог", path: "/blog", hasDroopDown: false , isDroopDown : false, listDroopDown:[]},
]
