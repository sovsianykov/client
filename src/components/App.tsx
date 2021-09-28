import React, {useState} from 'react';
import Home from "../pages/Home/Home";
import Layout from "./Layout/Layout";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import HeaderApp from "./Header/HeaderApp";
import Login from "../pages/Login/Login";


function App() {
     const [isLogged, setIsLogged] = useState<boolean>(false)
  return (
    <div className="App">
            <Router>
                <Layout>
                    <HeaderApp/>
                <Switch>
             <Route path='/' exact component={Home}/>
             <Route path="/musicians"  component={Home}/>
             <Route path="/luthiers"  component={Home}/>
             <Route path="/news"  component={Home}/>
             <Route path="/stories"  component={Home}/>
             <Route path="/blog" component={Home}/>

         </Switch>
                </Layout>
        </Router>
        <Login isLogged={isLogged}/>
    </div>
  );
}

export default App;
