import React, {ChangeEvent, ChangeEventHandler, FormEvent, FunctionComponent, useEffect, useState} from 'react';
import styles from './Login.module.scss';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { useFetch } from "../../api/api";


const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
            display: "flex",
            flexDirection: "column"
        },
    },
}));

interface LoginProps {
    isLogged : boolean;
}

const Login:FunctionComponent<LoginProps> = ({isLogged}) => {

    const classes = useStyles();
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const changeNameHandler=(event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setUsername(event.target.value)
    }
    const changePasswordHandler=(event:ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) =>{
        setPassword(event.target.value)
    }

    const onSubmitHandler= () =>{

    }

  const {isLoading, response, error} =  useFetch("auth/registration",'POST',{"username":"olegj512","password":"12344457"})


    if (isLoading) {
        console.log(response, error)
    }



    console.log(username,password)
    return (
      <div className={styles.login}>
          <h2 className={styles.title}>Log in</h2>
          <form className={classes.root} noValidate autoComplete="off" >
              <TextField id="username"
                         name="username"
                         label="Username"
                         value={username}
                         onChange={changeNameHandler}
              />
              <TextField id="password" name="password" label="Password" type='password'
              value={password}
                         onChange={changePasswordHandler}
              />
          </form>
      </div>
    );
};

export default Login;