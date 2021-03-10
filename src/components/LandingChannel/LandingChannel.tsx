import { ChangeEvent } from "react"
import { Link } from "react-router-dom"

import './LandingChannel.css'

interface ILandingChannel {
    channel: string;
    setChannel: (data:string)=>void;
}

const LandingChannel: React.FC<ILandingChannel> = ({channel, setChannel})=> {

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        if(channel.length<=80)
            setChannel(e.target.value)
    }

    const saveChannel = ()=>{
        if(channel === "")
            localStorage.setItem('landing_channel', "ch-" + new Date().getTime());    
        else
            localStorage.setItem('landing_channel', channel);
    }

    return <div className="landing-channel-component step">
        <h3>Paso 2 of 3</h3>
        <h2>Wich subject your team is working currently?</h2>
        <p>Puede ser cualquier cosa: un proyecto, un evento o el acuerdo
            que estas tatando de cerrar.
        </p>
        <div className="lc__input">
            <input type="text" onChange={(e)=>handleChange(e)}/>
            <span>{80 - channel.length}</span>
        </div>
        <Link to="/chatbox/setup-invites">
            <button type="button" className="btn btn-primary" onClick={()=>saveChannel()}>
                Continue
            </button>
        </Link>
    </div>
}
export default LandingChannel;