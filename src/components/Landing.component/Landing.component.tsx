import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Landing = ()=>{

    const [username, setUsername] = useState<string>("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        console.log("handle change")
        setUsername(e.target.value);
    }
    
    const saveName= ()=>{
        if(username)
            localStorage.setItem("landing_username",username);
        else
            localStorage.setItem("landing_username","user-"+new Date().getTime());  

    }
    
    return <div>
        <h1>Inser your name</h1>
        <input type="text" onChange={e=>handleChange(e)}/>
        <Link to="/landing/setup-team-name">
            <button type="button" onClick={()=>saveName()}>
                Create new Workspace
            </button>
        </Link>
    </div>
}

export default Landing;