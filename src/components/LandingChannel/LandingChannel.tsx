import { ChangeEvent } from "react"
import { Link } from "react-router-dom"

import './LandingChannel.css'

const LandingChannel = (props:any)=> {

    console.log(props);

    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        if(props.channel.length<=80)
            props.setChannel(e.target.value)
    }

    const saveChannel = ()=>{
        if(props.channel === "")
            localStorage.setItem('landing_channel', "ch-" + new Date().getTime());    
        else
            localStorage.setItem('landing_channel', props.channel);
    }

    return <div className="landing-channel-component step">
        <h3>Paso 2 of 3</h3>
        <h2>Wich subject your team is working currently?</h2>
        <p>Puede ser cualquier cosa: un proyecto, un evento o el acuerdo
            que estas tatando de cerrar.
        </p>
        <div className="lc__input">
            <input type="text" onChange={(e)=>handleChange(e)}/>
            <span>{80-props.channel.length}</span>
        </div>
        <Link to="/chatbox/setup-invites">
            <button type="button" className="btn btn-primary" onClick={()=>saveChannel()}>
                Continue
            </button>
        </Link>
    </div>
}
export default LandingChannel;