import { Link } from "react-router-dom";
import Auth from "./Auth";

const Login = ()=>{
    return(
        <>
            <Auth submitLabel="Login" onSubmit={ async ()=>{}}>
                <Link to={'/signup'} style={{alignSelf:"center"}}>Signup</Link>
            </Auth>
        </>
    )
}

export default Login