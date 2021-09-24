export  interface NavigationLink {
    id: number;
    name: string;
    path: string;

}


 export const navLinks: NavigationLink[]  = [
    { id:1, name : "Главная", path: "/"  },
    { id:2, name : "Музыканты", path: "/musicians" },
    { id:3, name : "Гитарные мастера", path: "/luthiers" },
    { id:4, name : "Новости", path: "/news" },
    { id:5, name : "История", path: "/stories" },
    { id:6, name : "Блог", path: "/blog" },
]
