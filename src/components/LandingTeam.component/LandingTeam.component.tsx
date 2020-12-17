import {useState, ChangeEvent} from 'react'
import { Link } from 'react-router-dom'
const LandingTeam = () =>{
    const [organization, setOrganization] = useState<string>("")
    const handleChange = (e: ChangeEvent<HTMLInputElement>)=>{
        console.log(e.target.value)
        console.log("handle change")
        setOrganization(e.target.value)
    }

    const saveOrganization = () =>{
        localStorage.setItem('landing_organization', organization);
    }

    return <div><h3>Paso 1 de 3</h3>
        <h3>{organization}</h3><br></br>
        <span>¿Como se llama tu empresa o equipo?</span>
        <input type="text" onChange={(e)=>handleChange(e)}/>
        <Link to="/landing/setup-channels">
            <button type="button" onClick={()=>saveOrganization()}>
                Continue
            </button>
        </Link>
    </div>
}

export default LandingTeam;