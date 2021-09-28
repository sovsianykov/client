import axios from "./axios";

 const  postLogin = async (username:string, password:string) =>{

        try {
            const response = await   axios( '/auth/login',    { method:'POST'

             ,
            data: {
                "username"
            :
                username,
                    "password"
            :
                password
            }



                })
            await  console.log(response.data, 'from function')
            return  await  response.data
        } catch (e) {
            console.log(e)
        }

}

console.log('hello login')

export default postLogin