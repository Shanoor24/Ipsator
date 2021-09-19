import React from "react";
import { Switch, Route} from "react-router-dom";
import Home from "../Components/Home/Home";
import NavBar from "../Components/NavBar/NavBar";
import PerticularCar from "../Components/PerticularCar/PerticularCar";


function Routes() {
    return (
        <div>
            <NavBar />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>

                <Route path="/Vehicle/:crashdate/:crashtime" exact>
                    <PerticularCar />
                </Route>
            </Switch>
        </div>
    )
}

export default Routes;