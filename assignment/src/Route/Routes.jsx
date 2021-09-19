import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "../Components/Home/Home";
import NavBar from "../Components/NavBar/NavBar";


function Routes() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;