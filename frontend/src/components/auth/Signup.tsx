import { Link } from "react-router-dom";
import Auth from "./Auth";

const Signup = ()=>{
    return(
        <>
            <Auth submitLabel="Signup" onSubmit={async ()=>{} }>
                <Link to={'/login'} style={{alignSelf:"center"}}>Login</Link>
            </Auth>
        </>
    )
}

export default Signup