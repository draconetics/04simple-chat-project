import GoogleLogin from 'react-google-login'

const CreateNew = ()=>{
    const handleEmail =(e:React.FormEvent)=>{
        console.log(e);
        console.log("handle email")
    }

    const responseGoogle = (response:any) =>{
        console.log(response);
    }
    return(<div>
        <h1>Primero, introduce tu correo electronico</h1>
        <button>Continuar con google</button>
        <input type="text" onClick={(e)=>handleEmail(e)}/>
        <GoogleLogin
            clientId="219762204881-i3j4es3nvon4uotdt8q04g870esi4opv.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy= {'single_host_origin'}
        />
    </div>);
}
export default CreateNew;