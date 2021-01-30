import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import './Landing.component.css'

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
    
    return <div className="landing-component">
        <div className="container">
        <div className="landing__logo">
            <img src="https://ericleeclark.com/wp-content/uploads/2019/02/Slack_Technologies_Logo.svg_.png" alt="slack-logo"/>
        </div>
        <div className="landing__showcase">
            <div className="landing__showcase-description">
                <h1>Inicia a tu equipo en Slack</h1>
                <div>
                    Slack representa una nueva manera de comunicarte con tu equipo: mas rapida,
                    mejor organizada y mas segura que el correo electronico; y puedes progralo gratis.
                </div>
                <input type="text" onChange={e=>handleChange(e)} placeholder="insert your name"/>
                <Link to="/chatbox/setup-team-name">
                    <button type="button" className="btn btn-primary" onClick={()=>saveName()}>
                        Create new Workspace
                    </button>
                </Link>
                <span>
                    Al continuar, declaras que aceptas las Condiciones de servicio al cliente, 
                    la politica de privacidad y la politica de cookies.
                </span>
            </div>
            <div className="landing__image">
                <img src="https://a.slack-edge.com/80588/marketing/img/feature/partner-zoom/img-stay-on-schedule.png" alt="slack-image-banner"/>
            </div>
        </div> {/* end landing__showcase */}
        </div> {/* end container */}
        
    </div>
}

export default Landing;