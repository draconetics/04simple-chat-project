import { ChangeEvent} from 'react'
import { Link } from 'react-router-dom'
import './LandingTeam.css'

const LandingTeam = (props:any) =>{
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        props.setOrganization(e.target.value)
    }

    const saveOrganization = () =>{
        if(props.organization === "")
            localStorage.setItem('landing_organization', "org-" + new Date().getTime());
        else
            localStorage.setItem('landing_organization', props.organization);
    }

    return <div className="landing-team-component step">
        <h3>Paso 1 de 3</h3>
        <br></br>
        <h2>¿Como se llama tu empresa o equipo?</h2>
        <p>Este sera el nombre de tu espacio de trabajo de Slack, elige 
            algo que tu equipo pueda reconocer.
        </p>
        <input type="text" onChange={(e)=>handleChange(e)} value={props.organization} placeholder="Insert a organization or team"/>
        <Link to="/chatbox/setup-channel">
            <button type="button" className="btn btn-primary" onClick={()=>saveOrganization()}>
                Continue
            </button>
        </Link>
    </div>
}

export default LandingTeam;