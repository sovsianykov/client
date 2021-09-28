import React, {FunctionComponent} from 'react';
import MainGrid from "../../components/MainGrid/MainGrid";
import { musicians } from "../../content/mock";


const Musicians:FunctionComponent = () => {
    return (
        <div>
           <MainGrid items={musicians}/>
        </div>
    );
};

export default Musicians;