import { Link } from "react-router-dom";

const LandingInvites = (props:any)=>{
    console.log(props);
    return <div className="landing-inviting-components step">
        <h3>Step 3 of 3</h3>
        <h2>
            ¿A quin le envias mas correos electronicos sobre ?
        </h2>
        <span>
            Para aprovechar Slack al maximo, añandele a tus compañeros y
            compañeras de trabajo con los que suelas hablar mas.
        </span>
        <input type="email" placeholder="insert an email"></input>
        <Link to="/chatbox">
            <button type="button" className="btn btn-primary">
                Invit to your partners
            </button>
        </Link>
        <Link to="/chatbox">
            Omit this step
        </Link>
        
    </div>
}

export default LandingInvites;