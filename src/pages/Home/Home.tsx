import React, {FunctionComponent} from 'react';
import HeaderApp from "../../components/Header/HeaderApp";
import Button from "../../shared/components/Button/Button";



const Home:FunctionComponent = () => {

    return (
        <div>
            <Button onClick={() => console.log("its works")}>
                Button
            </Button>
        </div>
    );
};

export default Home;
