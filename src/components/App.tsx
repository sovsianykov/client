import React, {useState} from 'react';
import Home from "../pages/Home/Home";
import Layout from "./Layout/Layout";
import {BrowserRouter as Router , Switch, Route} from "react-router-dom";
import HeaderApp from "./Header/HeaderApp";
import Login from "../pages/Login/Login";
import Musicians from "../pages/Musicians/Musicians";


function App() {
  return (
    <div className="App">
            <Router>
                <Layout>
                    <HeaderApp/>
                <Switch>
             <Route path='/' exact component={ Home }/>
             <Route path="/musicians"  component={ Musicians }/>
             <Route path="/luthiers"  component={Home}/>
             <Route path="/news"  component={Home}/>
             <Route path="/stories"  component={Home}/>
             <Route path="/blog" component={Home}/>
             <Route path="/login" component={Login}/>

         </Switch>
                </Layout>
        </Router>
    </div>
  );
}

export default App;
