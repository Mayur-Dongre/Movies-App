import Login from "./Login";
import { Route } from "react-router-dom";

function ProtectedRoute(props) 
{
    
    var isLoggedIn = false;
    if(!isLoggedIn)
    {
        return <Route exact path={props.path} component={props.component}/>
    }
    else
    {
        return <Login></Login>
    }


}

export default ProtectedRoute;