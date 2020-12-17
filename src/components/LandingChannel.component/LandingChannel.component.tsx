import { ChangeEvent, useState } from "react"
import { Link } from "react-router-dom"

const LandingChannel = ()=> {

    const [channel, setChannel] = useState<string>("")

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        console.log("handle change")
        if(channel.length<=80)
            setChannel(e.target.value)
    }

    const saveChannel = ()=>{
        localStorage.setItem('landing_channel', channel);
    }

    return <div>
        <h2>Paso 2 of 3</h2>
        <h3>Wich subject your team is working currently?</h3>
        <div>
            <input type="text" onChange={(e)=>handleChange(e)}/>
            <span>{80-channel.length}</span>
        </div>
        <Link to="/landing/setup-invites">
            <button type="button" onClick={()=>saveChannel()}>
                Continue
            </button>
        </Link>
    </div>
}
export default LandingChannel;