
export interface Message {
    username: string;
    message: string;
    timestamp?: string;
}
export interface Musician {
    id: number;
    username: string;
    name: string;
    instrument: string;
    city: string;
    avatar: string;
     description : string;
    password: string;
    links? : string[];
}