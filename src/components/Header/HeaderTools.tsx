import React, {FunctionComponent} from 'react';
import { Link} from "react-router-dom";
import Button from "../../shared/components/Button/Button";


const HeaderTools:FunctionComponent = () => {

    return (
        <nav>
            <Link to='/login' ><Button onClick={()=>console.log("redirect to login page")}>
                Log In
            </Button></Link>
        </nav>
    );
};

export default HeaderTools;