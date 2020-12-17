import { Link } from "react-router-dom";

const LandingInvites = ()=>{
    return <div><h2>Step 3 of 3</h2>
        <Link to="/chatbox">
            <button type="button">
                Invit to your partners
            </button>
        </Link>
        <Link to="/chatbox">
            Omit this step
        </Link>
    </div>
}

export default LandingInvites;