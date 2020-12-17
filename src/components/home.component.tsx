import {Link} from 'react-router-dom'

const Home = ()=>{
    return <div>
        <h1>this is Slack Home page</h1>
        <Link to="/createnew">create new</Link> 
    </div>;
}

export default Home;