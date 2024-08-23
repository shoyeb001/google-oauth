import React from 'react'
import { useGoogleLogin } from '@react-oauth/google'
import { googleAuth } from '../app/api'
const Login = () => {

    const responseGoogle = async(res) =>{
        try {
            if(res["code"]){
                const result = await googleAuth(res.code);
				console.log(result.data.user);
				alert("successfuly logged in");
            }else{
                throw new Error(res);
            }
        } catch (error) {
            console.log(error);
        }
    }

    const googleLogin =  useGoogleLogin({
            onSuccess: responseGoogle,
            onError: responseGoogle,
            flow: "auth-code",
        })

  return (
    <div>
        <button onClick={googleLogin}>Login with Google</button>
    </div>
  )
}

export default Login