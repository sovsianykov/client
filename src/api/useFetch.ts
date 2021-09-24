import { useState } from "react";
import { Message } from "../models/globalModels";
import axios from "./axios";




export const useFetch = async (url:string, method?:any ,body?:Message ) => {
        try {
       const response =     await axios({url: url, method: method, data: body})
            await console.log(response.data)
             return response.data
        } catch (e) {
            console.log(e)
        }


}