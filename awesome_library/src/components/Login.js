import { useContext } from "react"
import { UserIDContext } from ".././App";

const Login = () => {
   
    const testingID = useContext(UserIDContext);

    return (
        <>
            <br/>Testing if userID context came through. Click the magic button.<br/><br/><br/>
            User id: {'' + testingID}
        </>
    )
}

export default Login;
